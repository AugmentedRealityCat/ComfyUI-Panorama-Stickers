import * as Ia from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
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
const he = {}, Ai = [], Wn = () => {
}, Jf = () => !1, fs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ds = (t) => t.startsWith("onUpdate:"), Ge = Object.assign, tl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, rm = Object.prototype.hasOwnProperty, ee = (t, e) => rm.call(t, e), Ft = Array.isArray, Ii = (t) => Vo(t) === "[object Map]", Qf = (t) => Vo(t) === "[object Set]", Eu = (t) => Vo(t) === "[object Date]", Ut = (t) => typeof t == "function", Ee = (t) => typeof t == "string", qn = (t) => typeof t == "symbol", se = (t) => t !== null && typeof t == "object", td = (t) => (se(t) || Ut(t)) && Ut(t.then) && Ut(t.catch), ed = Object.prototype.toString, Vo = (t) => ed.call(t), im = (t) => Vo(t).slice(8, -1), nd = (t) => Vo(t) === "[object Object]", el = (t) => Ee(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, _o = /* @__PURE__ */ Qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, om = /-\w/g, en = hs(
  (t) => t.replace(om, (e) => e.slice(1).toUpperCase())
), am = /\B([A-Z])/g, Qr = hs(
  (t) => t.replace(am, "-$1").toLowerCase()
), ps = hs((t) => t.charAt(0).toUpperCase() + t.slice(1)), oc = hs(
  (t) => t ? `on${ps(t)}` : ""
), Bn = (t, e) => !Object.is(t, e), ac = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, rd = (t, e, n, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, sm = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Tu;
const gs = () => Tu || (Tu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], o = Ee(i) ? fm(i) : ms(i);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ee(t) || se(t))
    return t;
}
const cm = /;(?![^(]*\))/g, lm = /:([^]+)/, um = /\/\*[^]*?\*\//g;
function fm(t) {
  const e = {};
  return t.replace(um, "").split(cm).forEach((n) => {
    if (n) {
      const i = n.split(lm);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function ys(t) {
  let e = "";
  if (Ee(t))
    e = t;
  else if (Ft(t))
    for (let n = 0; n < t.length; n++) {
      const i = ys(t[n]);
      i && (e += i + " ");
    }
  else if (se(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const dm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hm = /* @__PURE__ */ Qc(dm);
function id(t) {
  return !!t || t === "";
}
function pm(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = nl(t[i], e[i]);
  return n;
}
function nl(t, e) {
  if (t === e) return !0;
  let n = Eu(t), i = Eu(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = qn(t), i = qn(e), n || i)
    return t === e;
  if (n = Ft(t), i = Ft(e), n || i)
    return n && i ? pm(t, e) : !1;
  if (n = se(t), i = se(e), n || i) {
    if (!n || !i)
      return !1;
    const o = Object.keys(t).length, c = Object.keys(e).length;
    if (o !== c)
      return !1;
    for (const u in t) {
      const d = t.hasOwnProperty(u), m = e.hasOwnProperty(u);
      if (d && !m || !d && m || !nl(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const od = (t) => !!(t && t.__v_isRef === !0), ad = (t) => Ee(t) ? t : t == null ? "" : Ft(t) || se(t) && (t.toString === ed || !Ut(t.toString)) ? od(t) ? ad(t.value) : JSON.stringify(t, sd, 2) : String(t), sd = (t, e) => od(e) ? sd(t, e.value) : Ii(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, o], c) => (n[sc(i, c) + " =>"] = o, n),
    {}
  )
} : Qf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => sc(n))
} : qn(e) ? sc(e) : se(e) && !Ft(e) && !nd(e) ? String(e) : e, sc = (t, e = "") => {
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
class gm {
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function mm() {
  return sn;
}
let de;
const cc = /* @__PURE__ */ new WeakSet();
class cd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, sn && sn.active && sn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cc.has(this) && (cc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ud(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Lu(this), fd(this);
    const e = de, n = kn;
    de = this, kn = !0;
    try {
      return this.fn();
    } finally {
      dd(this), de = e, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        ol(e);
      this.deps = this.depsTail = void 0, Lu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cc(this) && this.run();
  }
  get dirty() {
    return Cc(this);
  }
}
let ld = 0, wo, xo;
function ud(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = xo, xo = t;
    return;
  }
  t.next = wo, wo = t;
}
function rl() {
  ld++;
}
function il() {
  if (--ld > 0)
    return;
  if (xo) {
    let e = xo;
    for (xo = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; wo; ) {
    let e = wo;
    for (wo = void 0; e; ) {
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
function fd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function dd(t) {
  let e, n = t.depsTail, i = n;
  for (; i; ) {
    const o = i.prevDep;
    i.version === -1 ? (i === n && (n = o), ol(i), ym(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
  }
  t.deps = e, t.depsTail = n;
}
function Cc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (hd(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function hd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Lo) || (t.globalVersion = Lo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Cc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = de, i = kn;
  de = t, kn = !0;
  try {
    fd(t);
    const o = t.fn(t._value);
    (e.version === 0 || Bn(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    de = n, kn = i, dd(t), t.flags &= -3;
  }
}
function ol(t, e = !1) {
  const { dep: n, prevSub: i, nextSub: o } = t;
  if (i && (i.nextSub = o, t.prevSub = void 0), o && (o.prevSub = i, t.nextSub = void 0), n.subs === t && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      ol(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function ym(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let kn = !0;
const pd = [];
function sr() {
  pd.push(kn), kn = !1;
}
function cr() {
  const t = pd.pop();
  kn = t === void 0 ? !0 : t;
}
function Lu(t) {
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
let Lo = 0;
class bm {
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
      n = this.activeLink = new bm(de, this), de.deps ? (n.prevDep = de.depsTail, de.depsTail.nextDep = n, de.depsTail = n) : de.deps = de.depsTail = n, gd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = de.depsTail, n.nextDep = void 0, de.depsTail.nextDep = n, de.depsTail = n, de.deps === n && (de.deps = i);
    }
    return n;
  }
  trigger(e) {
    this.version++, Lo++, this.notify(e);
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
function gd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        gd(i);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ac = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ Symbol(
  ""
), Ic = /* @__PURE__ */ Symbol(
  ""
), Do = /* @__PURE__ */ Symbol(
  ""
);
function ze(t, e, n) {
  if (kn && de) {
    let i = Ac.get(t);
    i || Ac.set(t, i = /* @__PURE__ */ new Map());
    let o = i.get(n);
    o || (i.set(n, o = new al()), o.map = i, o.key = n), o.track();
  }
}
function ar(t, e, n, i, o, c) {
  const u = Ac.get(t);
  if (!u) {
    Lo++;
    return;
  }
  const d = (m) => {
    m && m.trigger();
  };
  if (rl(), e === "clear")
    u.forEach(d);
  else {
    const m = Ft(t), y = m && el(n);
    if (m && n === "length") {
      const p = Number(i);
      u.forEach((x, M) => {
        (M === "length" || M === Do || !qn(M) && M >= p) && d(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), y && d(u.get(Do)), e) {
        case "add":
          m ? y && d(u.get("length")) : (d(u.get(Br)), Ii(t) && d(u.get(Ic)));
          break;
        case "delete":
          m || (d(u.get(Br)), Ii(t) && d(u.get(Ic)));
          break;
        case "set":
          Ii(t) && d(u.get(Br));
          break;
      }
  }
  il();
}
function gi(t) {
  const e = /* @__PURE__ */ te(t);
  return e === t ? e : (ze(e, "iterate", Do), /* @__PURE__ */ gn(t) ? e : e.map(Cn));
}
function bs(t) {
  return ze(t = /* @__PURE__ */ te(t), "iterate", Do), t;
}
function Un(t, e) {
  return /* @__PURE__ */ lr(t) ? Fi(/* @__PURE__ */ Gr(t) ? Cn(e) : e) : Cn(e);
}
const vm = {
  __proto__: null,
  [Symbol.iterator]() {
    return lc(this, Symbol.iterator, (t) => Un(this, t));
  },
  concat(...t) {
    return gi(this).concat(
      ...t.map((e) => Ft(e) ? gi(e) : e)
    );
  },
  entries() {
    return lc(this, "entries", (t) => (t[1] = Un(this, t[1]), t));
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
      (n) => n.map((i) => Un(this, i)),
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
    return uc(this, "includes", t);
  },
  indexOf(...t) {
    return uc(this, "indexOf", t);
  },
  join(t) {
    return gi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return uc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return er(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return so(this, "pop");
  },
  push(...t) {
    return so(this, "push", t);
  },
  reduce(t, ...e) {
    return Du(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Du(this, "reduceRight", t, e);
  },
  shift() {
    return so(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return er(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return so(this, "splice", t);
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
    return so(this, "unshift", t);
  },
  values() {
    return lc(this, "values", (t) => Un(this, t));
  }
};
function lc(t, e, n) {
  const i = bs(t), o = i[e]();
  return i !== t && !/* @__PURE__ */ gn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const _m = Array.prototype;
function er(t, e, n, i, o, c) {
  const u = bs(t), d = u !== t && !/* @__PURE__ */ gn(t), m = u[e];
  if (m !== _m[e]) {
    const x = m.apply(t, c);
    return d ? Cn(x) : x;
  }
  let y = n;
  u !== t && (d ? y = function(x, M) {
    return n.call(this, Un(t, x), M, t);
  } : n.length > 2 && (y = function(x, M) {
    return n.call(this, x, M, t);
  }));
  const p = m.call(u, y, i);
  return d && o ? o(p) : p;
}
function Du(t, e, n, i) {
  const o = bs(t), c = o !== t && !/* @__PURE__ */ gn(t);
  let u = n, d = !1;
  o !== t && (c ? (d = i.length === 0, u = function(y, p, x) {
    return d && (d = !1, y = Un(t, y)), n.call(this, y, Un(t, p), x, t);
  }) : n.length > 3 && (u = function(y, p, x) {
    return n.call(this, y, p, x, t);
  }));
  const m = o[e](u, ...i);
  return d ? Un(t, m) : m;
}
function uc(t, e, n) {
  const i = /* @__PURE__ */ te(t);
  ze(i, "iterate", Do);
  const o = i[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ul(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), i[e](...n)) : o;
}
function so(t, e, n = []) {
  sr(), rl();
  const i = (/* @__PURE__ */ te(t))[e].apply(t, n);
  return il(), cr(), i;
}
const wm = /* @__PURE__ */ Qc("__proto__,__v_isRef,__isVue"), md = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qn)
);
function xm(t) {
  qn(t) || (t = String(t));
  const e = /* @__PURE__ */ te(this);
  return ze(e, "has", t), e.hasOwnProperty(t);
}
class yd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, i) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, c = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return c;
    if (n === "__v_raw")
      return i === (o ? c ? Tm : wd : c ? _d : vd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let m;
      if (u && (m = vm[n]))
        return m;
      if (n === "hasOwnProperty")
        return xm;
    }
    const d = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Be(e) ? e : i
    );
    if ((qn(n) ? md.has(n) : wm(n)) || (o || ze(e, "get", n), c))
      return d;
    if (/* @__PURE__ */ Be(d)) {
      const m = u && el(n) ? d : d.value;
      return o && se(m) ? /* @__PURE__ */ Tc(m) : m;
    }
    return se(d) ? o ? /* @__PURE__ */ Tc(d) : /* @__PURE__ */ cl(d) : d;
  }
}
class bd extends yd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, o) {
    let c = e[n];
    const u = Ft(e) && el(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ lr(c);
      if (!/* @__PURE__ */ gn(i) && !/* @__PURE__ */ lr(i) && (c = /* @__PURE__ */ te(c), i = /* @__PURE__ */ te(i)), !u && /* @__PURE__ */ Be(c) && !/* @__PURE__ */ Be(i))
        return y || (c.value = i), !0;
    }
    const d = u ? Number(n) < e.length : ee(e, n), m = Reflect.set(
      e,
      n,
      i,
      /* @__PURE__ */ Be(e) ? e : o
    );
    return e === /* @__PURE__ */ te(o) && (d ? Bn(i, c) && ar(e, "set", n, i) : ar(e, "add", n, i)), m;
  }
  deleteProperty(e, n) {
    const i = ee(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && i && ar(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!qn(n) || !md.has(n)) && ze(e, "has", n), i;
  }
  ownKeys(e) {
    return ze(
      e,
      "iterate",
      Ft(e) ? "length" : Br
    ), Reflect.ownKeys(e);
  }
}
class Sm extends yd {
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
const Nm = /* @__PURE__ */ new bd(), Mm = /* @__PURE__ */ new Sm(), Pm = /* @__PURE__ */ new bd(!0);
const Ec = (t) => t, la = (t) => Reflect.getPrototypeOf(t);
function km(t, e, n) {
  return function(...i) {
    const o = this.__v_raw, c = /* @__PURE__ */ te(o), u = Ii(c), d = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, y = o[t](...i), p = n ? Ec : e ? Fi : Cn;
    return !e && ze(
      c,
      "iterate",
      m ? Ic : Br
    ), Ge(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: x, done: M } = y.next();
          return M ? { value: x, done: M } : {
            value: d ? [p(x[0]), p(x[1])] : p(x),
            done: M
          };
        }
      }
    );
  };
}
function ua(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Cm(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ te(c), d = /* @__PURE__ */ te(o);
      t || (Bn(o, d) && ze(u, "get", o), ze(u, "get", d));
      const { has: m } = la(u), y = e ? Ec : t ? Fi : Cn;
      if (m.call(u, o))
        return y(c.get(o));
      if (m.call(u, d))
        return y(c.get(d));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && ze(/* @__PURE__ */ te(o), "iterate", Br), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ te(c), d = /* @__PURE__ */ te(o);
      return t || (Bn(o, d) && ze(u, "has", o), ze(u, "has", d)), o === d ? c.has(o) : c.has(o) || c.has(d);
    },
    forEach(o, c) {
      const u = this, d = u.__v_raw, m = /* @__PURE__ */ te(d), y = e ? Ec : t ? Fi : Cn;
      return !t && ze(m, "iterate", Br), d.forEach((p, x) => o.call(c, y(p), y(x), u));
    }
  };
  return Ge(
    n,
    t ? {
      add: ua("add"),
      set: ua("set"),
      delete: ua("delete"),
      clear: ua("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ te(this), u = la(c), d = /* @__PURE__ */ te(o), m = !e && !/* @__PURE__ */ gn(o) && !/* @__PURE__ */ lr(o) ? d : o;
        return u.has.call(c, m) || Bn(o, m) && u.has.call(c, o) || Bn(d, m) && u.has.call(c, d) || (c.add(m), ar(c, "add", m, m)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ gn(c) && !/* @__PURE__ */ lr(c) && (c = /* @__PURE__ */ te(c));
        const u = /* @__PURE__ */ te(this), { has: d, get: m } = la(u);
        let y = d.call(u, o);
        y || (o = /* @__PURE__ */ te(o), y = d.call(u, o));
        const p = m.call(u, o);
        return u.set(o, c), y ? Bn(c, p) && ar(u, "set", o, c) : ar(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ te(this), { has: u, get: d } = la(c);
        let m = u.call(c, o);
        m || (o = /* @__PURE__ */ te(o), m = u.call(c, o)), d && d.call(c, o);
        const y = c.delete(o);
        return m && ar(c, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ te(this), c = o.size !== 0, u = o.clear();
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
    n[o] = km(o, t, e);
  }), n;
}
function sl(t, e) {
  const n = Cm(t, e);
  return (i, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? i : Reflect.get(
    ee(n, o) && o in i ? n : i,
    o,
    c
  );
}
const Am = {
  get: /* @__PURE__ */ sl(!1, !1)
}, Im = {
  get: /* @__PURE__ */ sl(!1, !0)
}, Em = {
  get: /* @__PURE__ */ sl(!0, !1)
};
const vd = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap(), wd = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap();
function Lm(t) {
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
function Dm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Lm(im(t));
}
// @__NO_SIDE_EFFECTS__
function cl(t) {
  return /* @__PURE__ */ lr(t) ? t : ll(
    t,
    !1,
    Nm,
    Am,
    vd
  );
}
// @__NO_SIDE_EFFECTS__
function Rm(t) {
  return ll(
    t,
    !1,
    Pm,
    Im,
    _d
  );
}
// @__NO_SIDE_EFFECTS__
function Tc(t) {
  return ll(
    t,
    !0,
    Mm,
    Em,
    wd
  );
}
function ll(t, e, n, i, o) {
  if (!se(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Dm(t);
  if (c === 0)
    return t;
  const u = o.get(t);
  if (u)
    return u;
  const d = new Proxy(
    t,
    c === 2 ? i : n
  );
  return o.set(t, d), d;
}
// @__NO_SIDE_EFFECTS__
function Gr(t) {
  return /* @__PURE__ */ lr(t) ? /* @__PURE__ */ Gr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ul(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ te(e) : t;
}
function Om(t) {
  return !ee(t, "__v_skip") && Object.isExtensible(t) && rd(t, "__v_skip", !0), t;
}
const Cn = (t) => se(t) ? /* @__PURE__ */ cl(t) : t, Fi = (t) => se(t) ? /* @__PURE__ */ Tc(t) : t;
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fm(t) {
  return $m(t, !1);
}
function $m(t, e) {
  return /* @__PURE__ */ Be(t) ? t : new Hm(t, e);
}
class Hm {
  constructor(e, n) {
    this.dep = new al(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ te(e), this._value = n ? e : Cn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ gn(e) || /* @__PURE__ */ lr(e);
    e = i ? e : /* @__PURE__ */ te(e), Bn(e, n) && (this._rawValue = e, this._value = i ? e : Cn(e), this.dep.trigger());
  }
}
function fl(t) {
  return /* @__PURE__ */ Be(t) ? t.value : t;
}
const Vm = {
  get: (t, e, n) => e === "__v_raw" ? t : fl(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const o = t[e];
    return /* @__PURE__ */ Be(o) && !/* @__PURE__ */ Be(n) ? (o.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function xd(t) {
  return /* @__PURE__ */ Gr(t) ? t : new Proxy(t, Vm);
}
class zm {
  constructor(e, n, i) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new al(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return ud(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return hd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Um(t, e, n = !1) {
  let i, o;
  return Ut(t) ? i = t : (i = t.get, o = t.set), new zm(i, o, n);
}
const fa = {}, Ba = /* @__PURE__ */ new WeakMap();
let Hr;
function jm(t, e = !1, n = Hr) {
  if (n) {
    let i = Ba.get(n);
    i || Ba.set(n, i = []), i.push(t);
  }
}
function Bm(t, e, n = he) {
  const { immediate: i, deep: o, once: c, scheduler: u, augmentJob: d, call: m } = n, y = (R) => o ? R : /* @__PURE__ */ gn(R) || o === !1 || o === 0 ? Nr(R, 1) : Nr(R);
  let p, x, M, k, I = !1, C = !1;
  if (/* @__PURE__ */ Be(t) ? (x = () => t.value, I = /* @__PURE__ */ gn(t)) : /* @__PURE__ */ Gr(t) ? (x = () => y(t), I = !0) : Ft(t) ? (C = !0, I = t.some((R) => /* @__PURE__ */ Gr(R) || /* @__PURE__ */ gn(R)), x = () => t.map((R) => {
    if (/* @__PURE__ */ Be(R))
      return R.value;
    if (/* @__PURE__ */ Gr(R))
      return y(R);
    if (Ut(R))
      return m ? m(R, 2) : R();
  })) : Ut(t) ? e ? x = m ? () => m(t, 2) : t : x = () => {
    if (M) {
      sr();
      try {
        M();
      } finally {
        cr();
      }
    }
    const R = Hr;
    Hr = p;
    try {
      return m ? m(t, 3, [k]) : t(k);
    } finally {
      Hr = R;
    }
  } : x = Wn, e && o) {
    const R = x, P = o === !0 ? 1 / 0 : o;
    x = () => Nr(R(), P);
  }
  const F = mm(), O = () => {
    p.stop(), F && F.active && tl(F.effects, p);
  };
  if (c && e) {
    const R = e;
    e = (...P) => {
      R(...P), O();
    };
  }
  let L = C ? new Array(t.length).fill(fa) : fa;
  const V = (R) => {
    if (!(!(p.flags & 1) || !p.dirty && !R))
      if (e) {
        const P = p.run();
        if (o || I || (C ? P.some((J, et) => Bn(J, L[et])) : Bn(P, L))) {
          M && M();
          const J = Hr;
          Hr = p;
          try {
            const et = [
              P,
              // pass undefined as the old value when it's changed for the first time
              L === fa ? void 0 : C && L[0] === fa ? [] : L,
              k
            ];
            L = P, m ? m(e, 3, et) : (
              // @ts-expect-error
              e(...et)
            );
          } finally {
            Hr = J;
          }
        }
      } else
        p.run();
  };
  return d && d(V), p = new cd(x), p.scheduler = u ? () => u(V, !1) : V, k = (R) => jm(R, !1, p), M = p.onStop = () => {
    const R = Ba.get(p);
    if (R) {
      if (m)
        m(R, 4);
      else
        for (const P of R) P();
      Ba.delete(p);
    }
  }, e ? i ? V(!0) : L = p.run() : u ? u(V.bind(null, !0), !0) : p.run(), O.pause = p.pause.bind(p), O.resume = p.resume.bind(p), O.stop = O, O;
}
function Nr(t, e = 1 / 0, n) {
  if (e <= 0 || !se(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Be(t))
    Nr(t.value, e, n);
  else if (Ft(t))
    for (let i = 0; i < t.length; i++)
      Nr(t[i], e, n);
  else if (Qf(t) || Ii(t))
    t.forEach((i) => {
      Nr(i, e, n);
    });
  else if (nd(t)) {
    for (const i in t)
      Nr(t[i], e, n);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && Nr(t[i], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zo(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (o) {
    vs(o, e, n);
  }
}
function Yn(t, e, n, i) {
  if (Ut(t)) {
    const o = zo(t, e, n, i);
    return o && td(o) && o.catch((c) => {
      vs(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(Yn(t[c], e, n, i));
    return o;
  }
}
function vs(t, e, n, i = !0) {
  const o = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || he;
  if (e) {
    let d = e.parent;
    const m = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const p = d.ec;
      if (p) {
        for (let x = 0; x < p.length; x++)
          if (p[x](t, m, y) === !1)
            return;
      }
      d = d.parent;
    }
    if (c) {
      sr(), zo(c, null, 10, [
        t,
        m,
        y
      ]), cr();
      return;
    }
  }
  Gm(t, n, o, i, u);
}
function Gm(t, e, n, i = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Je = [];
let Vn = -1;
const Ei = [];
let Sr = null, wi = 0;
const Sd = /* @__PURE__ */ Promise.resolve();
let Ga = null;
function Nd(t) {
  const e = Ga || Sd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Km(t) {
  let e = Vn + 1, n = Je.length;
  for (; e < n; ) {
    const i = e + n >>> 1, o = Je[i], c = Ro(o);
    c < t || c === t && o.flags & 2 ? e = i + 1 : n = i;
  }
  return e;
}
function dl(t) {
  if (!(t.flags & 1)) {
    const e = Ro(t), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ro(n) ? Je.push(t) : Je.splice(Km(e), 0, t), t.flags |= 1, Md();
  }
}
function Md() {
  Ga || (Ga = Sd.then(kd));
}
function Wm(t) {
  Ft(t) ? Ei.push(...t) : Sr && t.id === -1 ? Sr.splice(wi + 1, 0, t) : t.flags & 1 || (Ei.push(t), t.flags |= 1), Md();
}
function Ru(t, e, n = Vn + 1) {
  for (; n < Je.length; n++) {
    const i = Je[n];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Je.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Pd(t) {
  if (Ei.length) {
    const e = [...new Set(Ei)].sort(
      (n, i) => Ro(n) - Ro(i)
    );
    if (Ei.length = 0, Sr) {
      Sr.push(...e);
      return;
    }
    for (Sr = e, wi = 0; wi < Sr.length; wi++) {
      const n = Sr[wi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Sr = null, wi = 0;
  }
}
const Ro = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function kd(t) {
  try {
    for (Vn = 0; Vn < Je.length; Vn++) {
      const e = Je[Vn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), zo(
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
    Vn = -1, Je.length = 0, Pd(), Ga = null, (Je.length || Ei.length) && kd();
  }
}
let Pn = null, Cd = null;
function Ka(t) {
  const e = Pn;
  return Pn = t, Cd = t && t.type.__scopeId || null, e;
}
function qm(t, e = Pn, n) {
  if (!e || t._n)
    return t;
  const i = (...o) => {
    i._d && Wu(-1);
    const c = Ka(e);
    let u;
    try {
      u = t(...o);
    } finally {
      Ka(c), i._d && Wu(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Or(t, e, n, i) {
  const o = t.dirs, c = e && e.dirs;
  for (let u = 0; u < o.length; u++) {
    const d = o[u];
    c && (d.oldValue = c[u].value);
    let m = d.dir[i];
    m && (sr(), Yn(m, n, 8, [
      t.el,
      d,
      t,
      e
    ]), cr());
  }
}
function Ym(t, e) {
  if (je) {
    let n = je.provides;
    const i = je.parent && je.parent.provides;
    i === n && (n = je.provides = Object.create(i)), n[t] = e;
  }
}
function Ea(t, e, n = !1) {
  const i = q0();
  if (i || Li) {
    let o = Li ? Li._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && Ut(e) ? e.call(i && i.proxy) : e;
  }
}
const Xm = /* @__PURE__ */ Symbol.for("v-scx"), Zm = () => Ea(Xm);
function Ta(t, e, n) {
  return Ad(t, e, n);
}
function Ad(t, e, n = he) {
  const { immediate: i, deep: o, flush: c, once: u } = n, d = Ge({}, n), m = e && i || !e && c !== "post";
  let y;
  if (Fo) {
    if (c === "sync") {
      const k = Zm();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = Wn, k.resume = Wn, k.pause = Wn, k;
    }
  }
  const p = je;
  d.call = (k, I, C) => Yn(k, p, I, C);
  let x = !1;
  c === "post" ? d.scheduler = (k) => {
    an(k, p && p.suspense);
  } : c !== "sync" && (x = !0, d.scheduler = (k, I) => {
    I ? k() : dl(k);
  }), d.augmentJob = (k) => {
    e && (k.flags |= 4), x && (k.flags |= 2, p && (k.id = p.uid, k.i = p));
  };
  const M = Bm(t, e, d);
  return Fo && (y ? y.push(M) : m && M()), M;
}
function Jm(t, e, n) {
  const i = this.proxy, o = Ee(t) ? t.includes(".") ? Id(i, t) : () => i[t] : t.bind(i, i);
  let c;
  Ut(e) ? c = e : (c = e.handler, n = e);
  const u = Uo(this), d = Ad(o, c.bind(i), n);
  return u(), d;
}
function Id(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let o = 0; o < n.length && i; o++)
      i = i[n[o]];
    return i;
  };
}
const Qm = /* @__PURE__ */ Symbol("_vte"), t0 = (t) => t.__isTeleport, e0 = /* @__PURE__ */ Symbol("_leaveCb");
function hl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, hl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ed(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Ou(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Wa = /* @__PURE__ */ new WeakMap();
function So(t, e, n, i, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (C, F) => So(
        C,
        e && (Ft(e) ? e[F] : e),
        n,
        i,
        o
      )
    );
    return;
  }
  if (No(i) && !o) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && So(t, e, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? yl(i.component) : i.el, u = o ? null : c, { i: d, r: m } = t, y = e && e.r, p = d.refs === he ? d.refs = {} : d.refs, x = d.setupState, M = /* @__PURE__ */ te(x), k = x === he ? Jf : (C) => Ou(p, C) ? !1 : ee(M, C), I = (C, F) => !(F && Ou(p, F));
  if (y != null && y !== m) {
    if (Fu(e), Ee(y))
      p[y] = null, k(y) && (x[y] = null);
    else if (/* @__PURE__ */ Be(y)) {
      const C = e;
      I(y, C.k) && (y.value = null), C.k && (p[C.k] = null);
    }
  }
  if (Ut(m))
    zo(m, d, 12, [u, p]);
  else {
    const C = Ee(m), F = /* @__PURE__ */ Be(m);
    if (C || F) {
      const O = () => {
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
          O(), Wa.delete(t);
        };
        L.id = -1, Wa.set(t, L), an(L, n);
      } else
        Fu(t), O();
    }
  }
}
function Fu(t) {
  const e = Wa.get(t);
  e && (e.flags |= 8, Wa.delete(t));
}
gs().requestIdleCallback;
gs().cancelIdleCallback;
const No = (t) => !!t.type.__asyncLoader, Td = (t) => t.type.__isKeepAlive;
function n0(t, e) {
  Ld(t, "a", e);
}
function r0(t, e) {
  Ld(t, "da", e);
}
function Ld(t, e, n = je) {
  const i = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (_s(e, i, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Td(o.parent.vnode) && i0(i, e, n, o), o = o.parent;
  }
}
function i0(t, e, n, i) {
  const o = _s(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  Od(() => {
    tl(i[e], o);
  }, n);
}
function _s(t, e, n = je, i = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      sr();
      const d = Uo(n), m = Yn(e, n, t, u);
      return d(), cr(), m;
    });
    return i ? o.unshift(c) : o.push(c), c;
  }
}
const ur = (t) => (e, n = je) => {
  (!Fo || t === "sp") && _s(t, (...i) => e(...i), n);
}, o0 = ur("bm"), Dd = ur("m"), a0 = ur(
  "bu"
), s0 = ur("u"), Rd = ur(
  "bum"
), Od = ur("um"), c0 = ur(
  "sp"
), l0 = ur("rtg"), u0 = ur("rtc");
function f0(t, e = je) {
  _s("ec", t, e);
}
const d0 = "components", Fd = /* @__PURE__ */ Symbol.for("v-ndc");
function h0(t) {
  return Ee(t) ? p0(d0, t, !1) || t : t || Fd;
}
function p0(t, e, n = !0, i = !1) {
  const o = Pn || je;
  if (o) {
    const c = o.type;
    {
      const d = Q0(
        c,
        !1
      );
      if (d && (d === e || d === en(e) || d === ps(en(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      $u(o[t] || c[t], e) || // global registration
      $u(o.appContext[t], e)
    );
    return !u && i ? c : u;
  }
}
function $u(t, e) {
  return t && (t[e] || t[en(e)] || t[ps(en(e))]);
}
function Ti(t, e, n, i) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ee(t)) {
    const d = u && /* @__PURE__ */ Gr(t);
    let m = !1, y = !1;
    d && (m = !/* @__PURE__ */ gn(t), y = /* @__PURE__ */ lr(t), t = bs(t)), o = new Array(t.length);
    for (let p = 0, x = t.length; p < x; p++)
      o[p] = e(
        m ? y ? Fi(Cn(t[p])) : Cn(t[p]) : t[p],
        p,
        void 0,
        c
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let d = 0; d < t; d++)
      o[d] = e(d + 1, d, void 0, c);
  } else if (se(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (d, m) => e(d, m, void 0, c)
      );
    else {
      const d = Object.keys(t);
      o = new Array(d.length);
      for (let m = 0, y = d.length; m < y; m++) {
        const p = d[m];
        o[m] = e(t[p], p, m, c);
      }
    }
  else
    o = [];
  return o;
}
const Lc = (t) => t ? ah(t) ? yl(t) : Lc(t.parent) : null, Mo = (
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
    $parent: (t) => Lc(t.parent),
    $root: (t) => Lc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Hd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      dl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Nd.bind(t.proxy)),
    $watch: (t) => Jm.bind(t)
  })
), fc = (t, e) => t !== he && !t.__isScriptSetup && ee(t, e), g0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: o, props: c, accessCache: u, type: d, appContext: m } = t;
    if (e[0] !== "$") {
      const M = u[e];
      if (M !== void 0)
        switch (M) {
          case 1:
            return i[e];
          case 2:
            return o[e];
          case 4:
            return n[e];
          case 3:
            return c[e];
        }
      else {
        if (fc(i, e))
          return u[e] = 1, i[e];
        if (o !== he && ee(o, e))
          return u[e] = 2, o[e];
        if (ee(c, e))
          return u[e] = 3, c[e];
        if (n !== he && ee(n, e))
          return u[e] = 4, n[e];
        Dc && (u[e] = 0);
      }
    }
    const y = Mo[e];
    let p, x;
    if (y)
      return e === "$attrs" && ze(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (p = d.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== he && ee(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      x = m.config.globalProperties, ee(x, e)
    )
      return x[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: o, ctx: c } = t;
    return fc(o, e) ? (o[e] = n, !0) : i !== he && ee(i, e) ? (i[e] = n, !0) : ee(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: o, props: c, type: u }
  }, d) {
    let m;
    return !!(n[d] || t !== he && d[0] !== "$" && ee(t, d) || fc(e, d) || ee(c, d) || ee(i, d) || ee(Mo, d) || ee(o.config.globalProperties, d) || (m = u.__cssModules) && m[d]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ee(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Hu(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Dc = !0;
function m0(t) {
  const e = Hd(t), n = t.proxy, i = t.ctx;
  Dc = !1, e.beforeCreate && Vu(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: c,
    methods: u,
    watch: d,
    provide: m,
    inject: y,
    // lifecycle
    created: p,
    beforeMount: x,
    mounted: M,
    beforeUpdate: k,
    updated: I,
    activated: C,
    deactivated: F,
    beforeDestroy: O,
    beforeUnmount: L,
    destroyed: V,
    unmounted: R,
    render: P,
    renderTracked: J,
    renderTriggered: et,
    errorCaptured: it,
    serverPrefetch: _t,
    // public API
    expose: H,
    inheritAttrs: q,
    // assets
    components: lt,
    directives: ht,
    filters: nt
  } = e;
  if (y && y0(y, i, null), u)
    for (const at in u) {
      const ut = u[at];
      Ut(ut) && (i[at] = ut.bind(n));
    }
  if (o) {
    const at = o.call(n, n);
    se(at) && (t.data = /* @__PURE__ */ cl(at));
  }
  if (Dc = !0, c)
    for (const at in c) {
      const ut = c[at], kt = Ut(ut) ? ut.bind(n, n) : Ut(ut.get) ? ut.get.bind(n, n) : Wn, Et = !Ut(ut) && Ut(ut.set) ? ut.set.bind(n) : Wn, X = Di({
        get: kt,
        set: Et
      });
      Object.defineProperty(i, at, {
        enumerable: !0,
        configurable: !0,
        get: () => X.value,
        set: (Nt) => X.value = Nt
      });
    }
  if (d)
    for (const at in d)
      $d(d[at], i, n, at);
  if (m) {
    const at = Ut(m) ? m.call(n) : m;
    Reflect.ownKeys(at).forEach((ut) => {
      Ym(ut, at[ut]);
    });
  }
  p && Vu(p, t, "c");
  function ot(at, ut) {
    Ft(ut) ? ut.forEach((kt) => at(kt.bind(n))) : ut && at(ut.bind(n));
  }
  if (ot(o0, x), ot(Dd, M), ot(a0, k), ot(s0, I), ot(n0, C), ot(r0, F), ot(f0, it), ot(u0, J), ot(l0, et), ot(Rd, L), ot(Od, R), ot(c0, _t), Ft(H))
    if (H.length) {
      const at = t.exposed || (t.exposed = {});
      H.forEach((ut) => {
        Object.defineProperty(at, ut, {
          get: () => n[ut],
          set: (kt) => n[ut] = kt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  P && t.render === Wn && (t.render = P), q != null && (t.inheritAttrs = q), lt && (t.components = lt), ht && (t.directives = ht), _t && Ed(t);
}
function y0(t, e, n = Wn) {
  Ft(t) && (t = Rc(t));
  for (const i in t) {
    const o = t[i];
    let c;
    se(o) ? "default" in o ? c = Ea(
      o.from || i,
      o.default,
      !0
    ) : c = Ea(o.from || i) : c = Ea(o), /* @__PURE__ */ Be(c) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[i] = c;
  }
}
function Vu(t, e, n) {
  Yn(
    Ft(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function $d(t, e, n, i) {
  let o = i.includes(".") ? Id(n, i) : () => n[i];
  if (Ee(t)) {
    const c = e[t];
    Ut(c) && Ta(o, c);
  } else if (Ut(t))
    Ta(o, t.bind(n));
  else if (se(t))
    if (Ft(t))
      t.forEach((c) => $d(c, e, n, i));
    else {
      const c = Ut(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ut(c) && Ta(o, c, t);
    }
}
function Hd(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: o,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = t.appContext, d = c.get(e);
  let m;
  return d ? m = d : !o.length && !n && !i ? m = e : (m = {}, o.length && o.forEach(
    (y) => qa(m, y, u, !0)
  ), qa(m, e, u)), se(e) && c.set(e, m), m;
}
function qa(t, e, n, i = !1) {
  const { mixins: o, extends: c } = e;
  c && qa(t, c, n, !0), o && o.forEach(
    (u) => qa(t, u, n, !0)
  );
  for (const u in e)
    if (!(i && u === "expose")) {
      const d = b0[u] || n && n[u];
      t[u] = d ? d(t[u], e[u]) : e[u];
    }
  return t;
}
const b0 = {
  data: zu,
  props: Uu,
  emits: Uu,
  // objects
  methods: go,
  computed: go,
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
  components: go,
  directives: go,
  // watch
  watch: _0,
  // provide / inject
  provide: zu,
  inject: v0
};
function zu(t, e) {
  return e ? t ? function() {
    return Ge(
      Ut(t) ? t.call(this, this) : t,
      Ut(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function v0(t, e) {
  return go(Rc(t), Rc(e));
}
function Rc(t) {
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
function go(t, e) {
  return t ? Ge(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Uu(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ge(
    /* @__PURE__ */ Object.create(null),
    Hu(t),
    Hu(e ?? {})
  ) : e;
}
function _0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ge(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Ze(t[i], e[i]);
  return n;
}
function Vd() {
  return {
    app: null,
    config: {
      isNativeTag: Jf,
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
let w0 = 0;
function x0(t, e) {
  return function(i, o = null) {
    Ut(i) || (i = Ge({}, i)), o != null && !se(o) && (o = null);
    const c = Vd(), u = /* @__PURE__ */ new WeakSet(), d = [];
    let m = !1;
    const y = c.app = {
      _uid: w0++,
      _component: i,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: e1,
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
      mount(p, x, M) {
        if (!m) {
          const k = y._ceVNode || tn(i, o);
          return k.appContext = c, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(k, p, M), m = !0, y._container = p, p.__vue_app__ = y, yl(k.component);
        }
      },
      onUnmount(p) {
        d.push(p);
      },
      unmount() {
        m && (Yn(
          d,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(p, x) {
        return c.provides[p] = x, y;
      },
      runWithContext(p) {
        const x = Li;
        Li = y;
        try {
          return p();
        } finally {
          Li = x;
        }
      }
    };
    return y;
  };
}
let Li = null;
const S0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${en(e)}Modifiers`] || t[`${Qr(e)}Modifiers`];
function N0(t, e, ...n) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || he;
  let o = n;
  const c = e.startsWith("update:"), u = c && S0(i, e.slice(7));
  u && (u.trim && (o = n.map((p) => Ee(p) ? p.trim() : p)), u.number && (o = n.map(sm)));
  let d, m = i[d = oc(e)] || // also try camelCase event handler (#2249)
  i[d = oc(en(e))];
  !m && c && (m = i[d = oc(Qr(e))]), m && Yn(
    m,
    t,
    6,
    o
  );
  const y = i[d + "Once"];
  if (y) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[d])
      return;
    t.emitted[d] = !0, Yn(
      y,
      t,
      6,
      o
    );
  }
}
const M0 = /* @__PURE__ */ new WeakMap();
function zd(t, e, n = !1) {
  const i = n ? M0 : e.emitsCache, o = i.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, d = !1;
  if (!Ut(t)) {
    const m = (y) => {
      const p = zd(y, e, !0);
      p && (d = !0, Ge(u, p));
    };
    !n && e.mixins.length && e.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !c && !d ? (se(t) && i.set(t, null), null) : (Ft(c) ? c.forEach((m) => u[m] = null) : Ge(u, c), se(t) && i.set(t, u), u);
}
function ws(t, e) {
  return !t || !fs(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ee(t, e[0].toLowerCase() + e.slice(1)) || ee(t, Qr(e)) || ee(t, e));
}
function ju(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: o,
    propsOptions: [c],
    slots: u,
    attrs: d,
    emit: m,
    render: y,
    renderCache: p,
    props: x,
    data: M,
    setupState: k,
    ctx: I,
    inheritAttrs: C
  } = t, F = Ka(t);
  let O, L;
  try {
    if (n.shapeFlag & 4) {
      const R = o || i, P = R;
      O = jn(
        y.call(
          P,
          R,
          p,
          x,
          k,
          M,
          I
        )
      ), L = d;
    } else {
      const R = e;
      O = jn(
        R.length > 1 ? R(
          x,
          { attrs: d, slots: u, emit: m }
        ) : R(
          x,
          null
        )
      ), L = e.props ? d : P0(d);
    }
  } catch (R) {
    Po.length = 0, vs(R, t, 1), O = tn(Mr);
  }
  let V = O;
  if (L && C !== !1) {
    const R = Object.keys(L), { shapeFlag: P } = V;
    R.length && P & 7 && (c && R.some(ds) && (L = k0(
      L,
      c
    )), V = $i(V, L, !1, !0));
  }
  return n.dirs && (V = $i(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && hl(V, n.transition), O = V, Ka(F), O;
}
const P0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || fs(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, k0 = (t, e) => {
  const n = {};
  for (const i in t)
    (!ds(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function C0(t, e, n) {
  const { props: i, children: o, component: c } = t, { props: u, children: d, patchFlag: m } = e, y = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return i ? Bu(i, u, y) : !!u;
    if (m & 8) {
      const p = e.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        const M = p[x];
        if (Ud(u, i, M) && !ws(y, M))
          return !0;
      }
    }
  } else
    return (o || d) && (!d || !d.$stable) ? !0 : i === u ? !1 : i ? u ? Bu(i, u, y) : !0 : !!u;
  return !1;
}
function Bu(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    if (Ud(e, t, c) && !ws(n, c))
      return !0;
  }
  return !1;
}
function Ud(t, e, n) {
  const i = t[n], o = e[n];
  return n === "style" && se(i) && se(o) ? !nl(i, o) : i !== o;
}
function A0({ vnode: t, parent: e, suspense: n }, i) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = i, t = o), o === t)
      (t = e.vnode).el = i, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = i);
}
const jd = {}, Bd = () => Object.create(jd), Gd = (t) => Object.getPrototypeOf(t) === jd;
function I0(t, e, n, i = !1) {
  const o = {}, c = Bd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Kd(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = i ? o : /* @__PURE__ */ Rm(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function E0(t, e, n, i) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, d = /* @__PURE__ */ te(o), [m] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const p = t.vnode.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        let M = p[x];
        if (ws(t.emitsOptions, M))
          continue;
        const k = e[M];
        if (m)
          if (ee(c, M))
            k !== c[M] && (c[M] = k, y = !0);
          else {
            const I = en(M);
            o[I] = Oc(
              m,
              d,
              I,
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
    Kd(t, e, o, c) && (y = !0);
    let p;
    for (const x in d)
      (!e || // for camelCase
      !ee(e, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Qr(x)) === x || !ee(e, p))) && (m ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[x] = Oc(
        m,
        d,
        x,
        void 0,
        t,
        !0
      )) : delete o[x]);
    if (c !== d)
      for (const x in c)
        (!e || !ee(e, x)) && (delete c[x], y = !0);
  }
  y && ar(t.attrs, "set", "");
}
function Kd(t, e, n, i) {
  const [o, c] = t.propsOptions;
  let u = !1, d;
  if (e)
    for (let m in e) {
      if (_o(m))
        continue;
      const y = e[m];
      let p;
      o && ee(o, p = en(m)) ? !c || !c.includes(p) ? n[p] = y : (d || (d = {}))[p] = y : ws(t.emitsOptions, m) || (!(m in i) || y !== i[m]) && (i[m] = y, u = !0);
    }
  if (c) {
    const m = /* @__PURE__ */ te(n), y = d || he;
    for (let p = 0; p < c.length; p++) {
      const x = c[p];
      n[x] = Oc(
        o,
        m,
        x,
        y[x],
        t,
        !ee(y, x)
      );
    }
  }
  return u;
}
function Oc(t, e, n, i, o, c) {
  const u = t[n];
  if (u != null) {
    const d = ee(u, "default");
    if (d && i === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && Ut(m)) {
        const { propsDefaults: y } = o;
        if (n in y)
          i = y[n];
        else {
          const p = Uo(o);
          i = y[n] = m.call(
            null,
            e
          ), p();
        }
      } else
        i = m;
      o.ce && o.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !d ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Qr(n)) && (i = !0));
  }
  return i;
}
const T0 = /* @__PURE__ */ new WeakMap();
function Wd(t, e, n = !1) {
  const i = n ? T0 : e.propsCache, o = i.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, d = [];
  let m = !1;
  if (!Ut(t)) {
    const p = (x) => {
      m = !0;
      const [M, k] = Wd(x, e, !0);
      Ge(u, M), k && d.push(...k);
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  if (!c && !m)
    return se(t) && i.set(t, Ai), Ai;
  if (Ft(c))
    for (let p = 0; p < c.length; p++) {
      const x = en(c[p]);
      Gu(x) && (u[x] = he);
    }
  else if (c)
    for (const p in c) {
      const x = en(p);
      if (Gu(x)) {
        const M = c[p], k = u[x] = Ft(M) || Ut(M) ? { type: M } : Ge({}, M), I = k.type;
        let C = !1, F = !0;
        if (Ft(I))
          for (let O = 0; O < I.length; ++O) {
            const L = I[O], V = Ut(L) && L.name;
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
        ] = F, (C || ee(k, "default")) && d.push(x);
      }
    }
  const y = [u, d];
  return se(t) && i.set(t, y), y;
}
function Gu(t) {
  return t[0] !== "$" && !_o(t);
}
const pl = (t) => t === "_" || t === "_ctx" || t === "$stable", gl = (t) => Ft(t) ? t.map(jn) : [jn(t)], L0 = (t, e, n) => {
  if (e._n)
    return e;
  const i = qm((...o) => gl(e(...o)), n);
  return i._c = !1, i;
}, qd = (t, e, n) => {
  const i = t._ctx;
  for (const o in t) {
    if (pl(o)) continue;
    const c = t[o];
    if (Ut(c))
      e[o] = L0(o, c, i);
    else if (c != null) {
      const u = gl(c);
      e[o] = () => u;
    }
  }
}, Yd = (t, e) => {
  const n = gl(e);
  t.slots.default = () => n;
}, Xd = (t, e, n) => {
  for (const i in e)
    (n || !pl(i)) && (t[i] = e[i]);
}, D0 = (t, e, n) => {
  const i = t.slots = Bd();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (Xd(i, e, n), n && rd(i, "_", o, !0)) : qd(e, i);
  } else e && Yd(t, e);
}, R0 = (t, e, n) => {
  const { vnode: i, slots: o } = t;
  let c = !0, u = he;
  if (i.shapeFlag & 32) {
    const d = e._;
    d ? n && d === 1 ? c = !1 : Xd(o, e, n) : (c = !e.$stable, qd(e, o)), u = e;
  } else e && (Yd(t, e), u = { default: 1 });
  if (c)
    for (const d in o)
      !pl(d) && u[d] == null && delete o[d];
}, an = V0;
function O0(t) {
  return F0(t);
}
function F0(t, e) {
  const n = gs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: o,
    patchProp: c,
    createElement: u,
    createText: d,
    createComment: m,
    setText: y,
    setElementText: p,
    parentNode: x,
    nextSibling: M,
    setScopeId: k = Wn,
    insertStaticContent: I
  } = t, C = (A, D, z, Z = null, Y = null, W = null, ct = void 0, vt = null, pt = !!D.dynamicChildren) => {
    if (A === D)
      return;
    A && !co(A, D) && (Z = Mt(A), Nt(A, Y, W, !0), A = null), D.patchFlag === -2 && (pt = !1, D.dynamicChildren = null);
    const { type: rt, ref: It, shapeFlag: xt } = D;
    switch (rt) {
      case xs:
        F(A, D, z, Z);
        break;
      case Mr:
        O(A, D, z, Z);
        break;
      case La:
        A == null && L(D, z, Z, ct);
        break;
      case Ue:
        lt(
          A,
          D,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt
        );
        break;
      default:
        xt & 1 ? P(
          A,
          D,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt
        ) : xt & 6 ? ht(
          A,
          D,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt
        ) : (xt & 64 || xt & 128) && rt.process(
          A,
          D,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt,
          Rt
        );
    }
    It != null && Y ? So(It, A && A.ref, W, D || A, !D) : It == null && A && A.ref != null && So(A.ref, null, W, A, !0);
  }, F = (A, D, z, Z) => {
    if (A == null)
      i(
        D.el = d(D.children),
        z,
        Z
      );
    else {
      const Y = D.el = A.el;
      D.children !== A.children && y(Y, D.children);
    }
  }, O = (A, D, z, Z) => {
    A == null ? i(
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
    let Y;
    for (; A && A !== D; )
      Y = M(A), i(A, z, Z), A = Y;
    i(D, z, Z);
  }, R = ({ el: A, anchor: D }) => {
    let z;
    for (; A && A !== D; )
      z = M(A), o(A), A = z;
    o(D);
  }, P = (A, D, z, Z, Y, W, ct, vt, pt) => {
    if (D.type === "svg" ? ct = "svg" : D.type === "math" && (ct = "mathml"), A == null)
      J(
        D,
        z,
        Z,
        Y,
        W,
        ct,
        vt,
        pt
      );
    else {
      const rt = A.el && A.el._isVueCE ? A.el : null;
      try {
        rt && rt._beginPatch(), _t(
          A,
          D,
          Y,
          W,
          ct,
          vt,
          pt
        );
      } finally {
        rt && rt._endPatch();
      }
    }
  }, J = (A, D, z, Z, Y, W, ct, vt) => {
    let pt, rt;
    const { props: It, shapeFlag: xt, transition: f, dirs: Ct } = A;
    if (pt = A.el = u(
      A.type,
      W,
      It && It.is,
      It
    ), xt & 8 ? p(pt, A.children) : xt & 16 && it(
      A.children,
      pt,
      null,
      Z,
      Y,
      dc(A, W),
      ct,
      vt
    ), Ct && Or(A, null, Z, "created"), et(pt, A, A.scopeId, ct, Z), It) {
      for (const Yt in It)
        Yt !== "value" && !_o(Yt) && c(pt, Yt, null, It[Yt], W, Z);
      "value" in It && c(pt, "value", null, It.value, W), (rt = It.onVnodeBeforeMount) && Fn(rt, Z, A);
    }
    Ct && Or(A, null, Z, "beforeMount");
    const qt = $0(Y, f);
    qt && f.beforeEnter(pt), i(pt, D, z), ((rt = It && It.onVnodeMounted) || qt || Ct) && an(() => {
      try {
        rt && Fn(rt, Z, A), qt && f.enter(pt), Ct && Or(A, null, Z, "mounted");
      } finally {
      }
    }, Y);
  }, et = (A, D, z, Z, Y) => {
    if (z && k(A, z), Z)
      for (let W = 0; W < Z.length; W++)
        k(A, Z[W]);
    if (Y) {
      let W = Y.subTree;
      if (D === W || th(W.type) && (W.ssContent === D || W.ssFallback === D)) {
        const ct = Y.vnode;
        et(
          A,
          ct,
          ct.scopeId,
          ct.slotScopeIds,
          Y.parent
        );
      }
    }
  }, it = (A, D, z, Z, Y, W, ct, vt, pt = 0) => {
    for (let rt = pt; rt < A.length; rt++) {
      const It = A[rt] = vt ? or(A[rt]) : jn(A[rt]);
      C(
        null,
        It,
        D,
        z,
        Z,
        Y,
        W,
        ct,
        vt
      );
    }
  }, _t = (A, D, z, Z, Y, W, ct) => {
    const vt = D.el = A.el;
    let { patchFlag: pt, dynamicChildren: rt, dirs: It } = D;
    pt |= A.patchFlag & 16;
    const xt = A.props || he, f = D.props || he;
    let Ct;
    if (z && Fr(z, !1), (Ct = f.onVnodeBeforeUpdate) && Fn(Ct, z, D, A), It && Or(D, A, z, "beforeUpdate"), z && Fr(z, !0), (xt.innerHTML && f.innerHTML == null || xt.textContent && f.textContent == null) && p(vt, ""), rt ? H(
      A.dynamicChildren,
      rt,
      vt,
      z,
      Z,
      dc(D, Y),
      W
    ) : ct || ut(
      A,
      D,
      vt,
      null,
      z,
      Z,
      dc(D, Y),
      W,
      !1
    ), pt > 0) {
      if (pt & 16)
        q(vt, xt, f, z, Y);
      else if (pt & 2 && xt.class !== f.class && c(vt, "class", null, f.class, Y), pt & 4 && c(vt, "style", xt.style, f.style, Y), pt & 8) {
        const qt = D.dynamicProps;
        for (let Yt = 0; Yt < qt.length; Yt++) {
          const Xt = qt[Yt], Pt = xt[Xt], ne = f[Xt];
          (ne !== Pt || Xt === "value") && c(vt, Xt, Pt, ne, Y, z);
        }
      }
      pt & 1 && A.children !== D.children && p(vt, D.children);
    } else !ct && rt == null && q(vt, xt, f, z, Y);
    ((Ct = f.onVnodeUpdated) || It) && an(() => {
      Ct && Fn(Ct, z, D, A), It && Or(D, A, z, "updated");
    }, Z);
  }, H = (A, D, z, Z, Y, W, ct) => {
    for (let vt = 0; vt < D.length; vt++) {
      const pt = A[vt], rt = D[vt], It = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        pt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (pt.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !co(pt, rt) || // - In the case of a component, it could contain anything.
        pt.shapeFlag & 198) ? x(pt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      C(
        pt,
        rt,
        It,
        null,
        Z,
        Y,
        W,
        ct,
        !0
      );
    }
  }, q = (A, D, z, Z, Y) => {
    if (D !== z) {
      if (D !== he)
        for (const W in D)
          !_o(W) && !(W in z) && c(
            A,
            W,
            D[W],
            null,
            Y,
            Z
          );
      for (const W in z) {
        if (_o(W)) continue;
        const ct = z[W], vt = D[W];
        ct !== vt && W !== "value" && c(A, W, vt, ct, Y, Z);
      }
      "value" in z && c(A, "value", D.value, z.value, Y);
    }
  }, lt = (A, D, z, Z, Y, W, ct, vt, pt) => {
    const rt = D.el = A ? A.el : d(""), It = D.anchor = A ? A.anchor : d("");
    let { patchFlag: xt, dynamicChildren: f, slotScopeIds: Ct } = D;
    Ct && (vt = vt ? vt.concat(Ct) : Ct), A == null ? (i(rt, z, Z), i(It, z, Z), it(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      z,
      It,
      Y,
      W,
      ct,
      vt,
      pt
    )) : xt > 0 && xt & 64 && f && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren && A.dynamicChildren.length === f.length ? (H(
      A.dynamicChildren,
      f,
      z,
      Y,
      W,
      ct,
      vt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || Y && D === Y.subTree) && Zd(
      A,
      D,
      !0
      /* shallow */
    )) : ut(
      A,
      D,
      z,
      It,
      Y,
      W,
      ct,
      vt,
      pt
    );
  }, ht = (A, D, z, Z, Y, W, ct, vt, pt) => {
    D.slotScopeIds = vt, A == null ? D.shapeFlag & 512 ? Y.ctx.activate(
      D,
      z,
      Z,
      ct,
      pt
    ) : nt(
      D,
      z,
      Z,
      Y,
      W,
      ct,
      pt
    ) : G(A, D, pt);
  }, nt = (A, D, z, Z, Y, W, ct) => {
    const vt = A.component = W0(
      A,
      Z,
      Y
    );
    if (Td(A) && (vt.ctx.renderer = Rt), Y0(vt, !1, ct), vt.asyncDep) {
      if (Y && Y.registerDep(vt, ot, ct), !A.el) {
        const pt = vt.subTree = tn(Mr);
        O(null, pt, D, z), A.placeholder = pt.el;
      }
    } else
      ot(
        vt,
        A,
        D,
        z,
        Y,
        W,
        ct
      );
  }, G = (A, D, z) => {
    const Z = D.component = A.component;
    if (C0(A, D, z))
      if (Z.asyncDep && !Z.asyncResolved) {
        at(Z, D, z);
        return;
      } else
        Z.next = D, Z.update();
    else
      D.el = A.el, Z.vnode = D;
  }, ot = (A, D, z, Z, Y, W, ct) => {
    const vt = () => {
      if (A.isMounted) {
        let { next: xt, bu: f, u: Ct, parent: qt, vnode: Yt } = A;
        {
          const nn = Jd(A);
          if (nn) {
            xt && (xt.el = Yt.el, at(A, xt, ct)), nn.asyncDep.then(() => {
              an(() => {
                A.isUnmounted || rt();
              }, Y);
            });
            return;
          }
        }
        let Xt = xt, Pt;
        Fr(A, !1), xt ? (xt.el = Yt.el, at(A, xt, ct)) : xt = Yt, f && ac(f), (Pt = xt.props && xt.props.onVnodeBeforeUpdate) && Fn(Pt, qt, xt, Yt), Fr(A, !0);
        const ne = ju(A), Ne = A.subTree;
        A.subTree = ne, C(
          Ne,
          ne,
          // parent may have changed if it's in a teleport
          x(Ne.el),
          // anchor may have changed if it's in a fragment
          Mt(Ne),
          A,
          Y,
          W
        ), xt.el = ne.el, Xt === null && A0(A, ne.el), Ct && an(Ct, Y), (Pt = xt.props && xt.props.onVnodeUpdated) && an(
          () => Fn(Pt, qt, xt, Yt),
          Y
        );
      } else {
        let xt;
        const { el: f, props: Ct } = D, { bm: qt, m: Yt, parent: Xt, root: Pt, type: ne } = A, Ne = No(D);
        Fr(A, !1), qt && ac(qt), !Ne && (xt = Ct && Ct.onVnodeBeforeMount) && Fn(xt, Xt, D), Fr(A, !0);
        {
          Pt.ce && Pt.ce._hasShadowRoot() && Pt.ce._injectChildStyle(
            ne,
            A.parent ? A.parent.type : void 0
          );
          const nn = A.subTree = ju(A);
          C(
            null,
            nn,
            z,
            Z,
            A,
            Y,
            W
          ), D.el = nn.el;
        }
        if (Yt && an(Yt, Y), !Ne && (xt = Ct && Ct.onVnodeMounted)) {
          const nn = D;
          an(
            () => Fn(xt, Xt, nn),
            Y
          );
        }
        (D.shapeFlag & 256 || Xt && No(Xt.vnode) && Xt.vnode.shapeFlag & 256) && A.a && an(A.a, Y), A.isMounted = !0, D = z = Z = null;
      }
    };
    A.scope.on();
    const pt = A.effect = new cd(vt);
    A.scope.off();
    const rt = A.update = pt.run.bind(pt), It = A.job = pt.runIfDirty.bind(pt);
    It.i = A, It.id = A.uid, pt.scheduler = () => dl(It), Fr(A, !0), rt();
  }, at = (A, D, z) => {
    D.component = A;
    const Z = A.vnode.props;
    A.vnode = D, A.next = null, E0(A, D.props, Z, z), R0(A, D.children, z), sr(), Ru(A), cr();
  }, ut = (A, D, z, Z, Y, W, ct, vt, pt = !1) => {
    const rt = A && A.children, It = A ? A.shapeFlag : 0, xt = D.children, { patchFlag: f, shapeFlag: Ct } = D;
    if (f > 0) {
      if (f & 128) {
        Et(
          rt,
          xt,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt
        );
        return;
      } else if (f & 256) {
        kt(
          rt,
          xt,
          z,
          Z,
          Y,
          W,
          ct,
          vt,
          pt
        );
        return;
      }
    }
    Ct & 8 ? (It & 16 && U(rt, Y, W), xt !== rt && p(z, xt)) : It & 16 ? Ct & 16 ? Et(
      rt,
      xt,
      z,
      Z,
      Y,
      W,
      ct,
      vt,
      pt
    ) : U(rt, Y, W, !0) : (It & 8 && p(z, ""), Ct & 16 && it(
      xt,
      z,
      Z,
      Y,
      W,
      ct,
      vt,
      pt
    ));
  }, kt = (A, D, z, Z, Y, W, ct, vt, pt) => {
    A = A || Ai, D = D || Ai;
    const rt = A.length, It = D.length, xt = Math.min(rt, It);
    let f;
    for (f = 0; f < xt; f++) {
      const Ct = D[f] = pt ? or(D[f]) : jn(D[f]);
      C(
        A[f],
        Ct,
        z,
        null,
        Y,
        W,
        ct,
        vt,
        pt
      );
    }
    rt > It ? U(
      A,
      Y,
      W,
      !0,
      !1,
      xt
    ) : it(
      D,
      z,
      Z,
      Y,
      W,
      ct,
      vt,
      pt,
      xt
    );
  }, Et = (A, D, z, Z, Y, W, ct, vt, pt) => {
    let rt = 0;
    const It = D.length;
    let xt = A.length - 1, f = It - 1;
    for (; rt <= xt && rt <= f; ) {
      const Ct = A[rt], qt = D[rt] = pt ? or(D[rt]) : jn(D[rt]);
      if (co(Ct, qt))
        C(
          Ct,
          qt,
          z,
          null,
          Y,
          W,
          ct,
          vt,
          pt
        );
      else
        break;
      rt++;
    }
    for (; rt <= xt && rt <= f; ) {
      const Ct = A[xt], qt = D[f] = pt ? or(D[f]) : jn(D[f]);
      if (co(Ct, qt))
        C(
          Ct,
          qt,
          z,
          null,
          Y,
          W,
          ct,
          vt,
          pt
        );
      else
        break;
      xt--, f--;
    }
    if (rt > xt) {
      if (rt <= f) {
        const Ct = f + 1, qt = Ct < It ? D[Ct].el : Z;
        for (; rt <= f; )
          C(
            null,
            D[rt] = pt ? or(D[rt]) : jn(D[rt]),
            z,
            qt,
            Y,
            W,
            ct,
            vt,
            pt
          ), rt++;
      }
    } else if (rt > f)
      for (; rt <= xt; )
        Nt(A[rt], Y, W, !0), rt++;
    else {
      const Ct = rt, qt = rt, Yt = /* @__PURE__ */ new Map();
      for (rt = qt; rt <= f; rt++) {
        const Me = D[rt] = pt ? or(D[rt]) : jn(D[rt]);
        Me.key != null && Yt.set(Me.key, rt);
      }
      let Xt, Pt = 0;
      const ne = f - qt + 1;
      let Ne = !1, nn = 0;
      const cn = new Array(ne);
      for (rt = 0; rt < ne; rt++) cn[rt] = 0;
      for (rt = Ct; rt <= xt; rt++) {
        const Me = A[rt];
        if (Pt >= ne) {
          Nt(Me, Y, W, !0);
          continue;
        }
        let ce;
        if (Me.key != null)
          ce = Yt.get(Me.key);
        else
          for (Xt = qt; Xt <= f; Xt++)
            if (cn[Xt - qt] === 0 && co(Me, D[Xt])) {
              ce = Xt;
              break;
            }
        ce === void 0 ? Nt(Me, Y, W, !0) : (cn[ce - qt] = rt + 1, ce >= nn ? nn = ce : Ne = !0, C(
          Me,
          D[ce],
          z,
          null,
          Y,
          W,
          ct,
          vt,
          pt
        ), Pt++);
      }
      const ti = Ne ? H0(cn) : Ai;
      for (Xt = ti.length - 1, rt = ne - 1; rt >= 0; rt--) {
        const Me = qt + rt, ce = D[Me], jo = D[Me + 1], Bo = Me + 1 < It ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          jo.el || Qd(jo)
        ) : Z;
        cn[rt] === 0 ? C(
          null,
          ce,
          z,
          Bo,
          Y,
          W,
          ct,
          vt,
          pt
        ) : Ne && (Xt < 0 || rt !== ti[Xt] ? X(ce, z, Bo, 2) : Xt--);
      }
    }
  }, X = (A, D, z, Z, Y = null) => {
    const { el: W, type: ct, transition: vt, children: pt, shapeFlag: rt } = A;
    if (rt & 6) {
      X(A.component.subTree, D, z, Z);
      return;
    }
    if (rt & 128) {
      A.suspense.move(D, z, Z);
      return;
    }
    if (rt & 64) {
      ct.move(A, D, z, Rt);
      return;
    }
    if (ct === Ue) {
      i(W, D, z);
      for (let xt = 0; xt < pt.length; xt++)
        X(pt[xt], D, z, Z);
      i(A.anchor, D, z);
      return;
    }
    if (ct === La) {
      V(A, D, z);
      return;
    }
    if (Z !== 2 && rt & 1 && vt)
      if (Z === 0)
        vt.beforeEnter(W), i(W, D, z), an(() => vt.enter(W), Y);
      else {
        const { leave: xt, delayLeave: f, afterLeave: Ct } = vt, qt = () => {
          A.ctx.isUnmounted ? o(W) : i(W, D, z);
        }, Yt = () => {
          W._isLeaving && W[e0](
            !0
            /* cancelled */
          ), xt(W, () => {
            qt(), Ct && Ct();
          });
        };
        f ? f(W, qt, Yt) : Yt();
      }
    else
      i(W, D, z);
  }, Nt = (A, D, z, Z = !1, Y = !1) => {
    const {
      type: W,
      props: ct,
      ref: vt,
      children: pt,
      dynamicChildren: rt,
      shapeFlag: It,
      patchFlag: xt,
      dirs: f,
      cacheIndex: Ct,
      memo: qt
    } = A;
    if (xt === -2 && (Y = !1), vt != null && (sr(), So(vt, null, z, A, !0), cr()), Ct != null && (D.renderCache[Ct] = void 0), It & 256) {
      D.ctx.deactivate(A);
      return;
    }
    const Yt = It & 1 && f, Xt = !No(A);
    let Pt;
    if (Xt && (Pt = ct && ct.onVnodeBeforeUnmount) && Fn(Pt, D, A), It & 6)
      ge(A.component, z, Z);
    else {
      if (It & 128) {
        A.suspense.unmount(z, Z);
        return;
      }
      Yt && Or(A, null, D, "beforeUnmount"), It & 64 ? A.type.remove(
        A,
        D,
        z,
        Rt,
        Z
      ) : rt && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !rt.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (W !== Ue || xt > 0 && xt & 64) ? U(
        rt,
        D,
        z,
        !1,
        !0
      ) : (W === Ue && xt & 384 || !Y && It & 16) && U(pt, D, z), Z && Bt(A);
    }
    const ne = qt != null && Ct == null;
    (Xt && (Pt = ct && ct.onVnodeUnmounted) || Yt || ne) && an(() => {
      Pt && Fn(Pt, D, A), Yt && Or(A, null, D, "unmounted"), ne && (A.el = null);
    }, z);
  }, Bt = (A) => {
    const { type: D, el: z, anchor: Z, transition: Y } = A;
    if (D === Ue) {
      pe(z, Z);
      return;
    }
    if (D === La) {
      R(A);
      return;
    }
    const W = () => {
      o(z), Y && !Y.persisted && Y.afterLeave && Y.afterLeave();
    };
    if (A.shapeFlag & 1 && Y && !Y.persisted) {
      const { leave: ct, delayLeave: vt } = Y, pt = () => ct(z, W);
      vt ? vt(A.el, W, pt) : pt();
    } else
      W();
  }, pe = (A, D) => {
    let z;
    for (; A !== D; )
      z = M(A), o(A), A = z;
    o(D);
  }, ge = (A, D, z) => {
    const { bum: Z, scope: Y, job: W, subTree: ct, um: vt, m: pt, a: rt } = A;
    Ku(pt), Ku(rt), Z && ac(Z), Y.stop(), W && (W.flags |= 8, Nt(ct, A, D, z)), vt && an(vt, D), an(() => {
      A.isUnmounted = !0;
    }, D);
  }, U = (A, D, z, Z = !1, Y = !1, W = 0) => {
    for (let ct = W; ct < A.length; ct++)
      Nt(A[ct], D, z, Z, Y);
  }, Mt = (A) => {
    if (A.shapeFlag & 6)
      return Mt(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const D = M(A.anchor || A.el), z = D && D[Qm];
    return z ? M(z) : D;
  };
  let St = !1;
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
    ), D._vnode = A, St || (St = !0, Ru(Z), Pd(), St = !1);
  }, Rt = {
    p: C,
    um: Nt,
    m: X,
    r: Bt,
    mt: nt,
    mc: it,
    pc: ut,
    pbc: H,
    n: Mt,
    o: t
  };
  return {
    render: $t,
    hydrate: void 0,
    createApp: x0($t)
  };
}
function dc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Fr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function $0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Zd(t, e, n = !1) {
  const i = t.children, o = e.children;
  if (Ft(i) && Ft(o))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let d = o[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = o[c] = or(o[c]), d.el = u.el), !n && d.patchFlag !== -2 && Zd(u, d)), d.type === xs && (d.patchFlag === -1 && (d = o[c] = or(d)), d.el = u.el), d.type === Mr && !d.el && (d.el = u.el);
    }
}
function H0(t) {
  const e = t.slice(), n = [0];
  let i, o, c, u, d;
  const m = t.length;
  for (i = 0; i < m; i++) {
    const y = t[i];
    if (y !== 0) {
      if (o = n[n.length - 1], t[o] < y) {
        e[i] = o, n.push(i);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        d = c + u >> 1, t[n[d]] < y ? c = d + 1 : u = d;
      y < t[n[c]] && (c > 0 && (e[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = e[u];
  return n;
}
function Jd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Jd(e);
}
function Ku(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Qd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Qd(e.subTree) : null;
}
const th = (t) => t.__isSuspense;
function V0(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : Wm(t);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), xs = /* @__PURE__ */ Symbol.for("v-txt"), Mr = /* @__PURE__ */ Symbol.for("v-cmt"), La = /* @__PURE__ */ Symbol.for("v-stc"), Po = [];
let dn = null;
function Se(t = !1) {
  Po.push(dn = t ? null : []);
}
function z0() {
  Po.pop(), dn = Po[Po.length - 1] || null;
}
let Oo = 1;
function Wu(t, e = !1) {
  Oo += t, t < 0 && dn && e && (dn.hasOnce = !0);
}
function eh(t) {
  return t.dynamicChildren = Oo > 0 ? dn || Ai : null, z0(), Oo > 0 && dn && dn.push(t), t;
}
function He(t, e, n, i, o, c) {
  return eh(
    Ie(
      t,
      e,
      n,
      i,
      o,
      c,
      !0
    )
  );
}
function zi(t, e, n, i, o) {
  return eh(
    tn(
      t,
      e,
      n,
      i,
      o,
      !0
    )
  );
}
function nh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function co(t, e) {
  return t.type === e.type && t.key === e.key;
}
const rh = ({ key: t }) => t ?? null, Da = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ee(t) || /* @__PURE__ */ Be(t) || Ut(t) ? { i: Pn, r: t, k: e, f: !!n } : t : null);
function Ie(t, e = null, n = null, i = 0, o = null, c = t === Ue ? 0 : 1, u = !1, d = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && rh(e),
    ref: e && Da(e),
    scopeId: Cd,
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
    patchFlag: i,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pn
  };
  return d ? (ml(m, n), c & 128 && t.normalize(m)) : n && (m.shapeFlag |= Ee(n) ? 8 : 16), Oo > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  dn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && dn.push(m), m;
}
const tn = U0;
function U0(t, e = null, n = null, i = 0, o = null, c = !1) {
  if ((!t || t === Fd) && (t = Mr), nh(t)) {
    const d = $i(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && ml(d, n), Oo > 0 && !c && dn && (d.shapeFlag & 6 ? dn[dn.indexOf(t)] = d : dn.push(d)), d.patchFlag = -2, d;
  }
  if (t1(t) && (t = t.__vccOpts), e) {
    e = j0(e);
    let { class: d, style: m } = e;
    d && !Ee(d) && (e.class = ys(d)), se(m) && (/* @__PURE__ */ ul(m) && !Ft(m) && (m = Ge({}, m)), e.style = ms(m));
  }
  const u = Ee(t) ? 1 : th(t) ? 128 : t0(t) ? 64 : se(t) ? 4 : Ut(t) ? 2 : 0;
  return Ie(
    t,
    e,
    n,
    i,
    o,
    u,
    c,
    !0
  );
}
function j0(t) {
  return t ? /* @__PURE__ */ ul(t) || Gd(t) ? Ge({}, t) : t : null;
}
function $i(t, e, n = !1, i = !1) {
  const { props: o, ref: c, patchFlag: u, children: d, transition: m } = t, y = e ? oh(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && rh(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ft(c) ? c.concat(Da(e)) : [c, Da(e)] : Da(e)
    ) : c,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: d,
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
    ssContent: t.ssContent && $i(t.ssContent),
    ssFallback: t.ssFallback && $i(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return m && i && hl(
    p,
    m.clone(p)
  ), p;
}
function B0(t = " ", e = 0) {
  return tn(xs, null, t, e);
}
function ih(t, e) {
  const n = tn(La, null, t);
  return n.staticCount = e, n;
}
function Ra(t = "", e = !1) {
  return e ? (Se(), zi(Mr, null, t)) : tn(Mr, null, t);
}
function jn(t) {
  return t == null || typeof t == "boolean" ? tn(Mr) : Ft(t) ? tn(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : nh(t) ? or(t) : tn(xs, null, String(t));
}
function or(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : $i(t);
}
function ml(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), ml(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !Gd(e) ? e._ctx = Pn : o === 3 && Pn && (Pn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ut(e) ? (e = { default: e, _ctx: Pn }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [B0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function oh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const o in i)
      if (o === "class")
        e.class !== i.class && (e.class = ys([e.class, i.class]));
      else if (o === "style")
        e.style = ms([e.style, i.style]);
      else if (fs(o)) {
        const c = e[o], u = i[o];
        u && c !== u && !(Ft(c) && c.includes(u)) ? e[o] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ds(o) && (e[o] = u);
      } else o !== "" && (e[o] = i[o]);
  }
  return e;
}
function Fn(t, e, n, i = null) {
  Yn(t, e, 7, [
    n,
    i
  ]);
}
const G0 = Vd();
let K0 = 0;
function W0(t, e, n) {
  const i = t.type, o = (e ? e.appContext : t.appContext) || G0, c = {
    uid: K0++,
    vnode: t,
    type: i,
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
    scope: new gm(
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
    propsOptions: Wd(i, o),
    emitsOptions: zd(i, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = N0.bind(null, c), t.ce && t.ce(c), c;
}
let je = null;
const q0 = () => je || Pn;
let Ya, Fc;
{
  const t = gs(), e = (n, i) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(i), (c) => {
      o.length > 1 ? o.forEach((u) => u(c)) : o[0](c);
    };
  };
  Ya = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Fc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Fo = n
  );
}
const Uo = (t) => {
  const e = je;
  return Ya(t), t.scope.on(), () => {
    t.scope.off(), Ya(e);
  };
}, qu = () => {
  je && je.scope.off(), Ya(null);
};
function ah(t) {
  return t.vnode.shapeFlag & 4;
}
let Fo = !1;
function Y0(t, e = !1, n = !1) {
  e && Fc(e);
  const { props: i, children: o } = t.vnode, c = ah(t);
  I0(t, i, c, e), D0(t, o, n || e);
  const u = c ? X0(t, e) : void 0;
  return e && Fc(!1), u;
}
function X0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, g0);
  const { setup: i } = n;
  if (i) {
    sr();
    const o = t.setupContext = i.length > 1 ? J0(t) : null, c = Uo(t), u = zo(
      i,
      t,
      0,
      [
        t.props,
        o
      ]
    ), d = td(u);
    if (cr(), c(), (d || t.sp) && !No(t) && Ed(t), d) {
      if (u.then(qu, qu), e)
        return u.then((m) => {
          Yu(t, m);
        }).catch((m) => {
          vs(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Yu(t, u);
  } else
    sh(t);
}
function Yu(t, e, n) {
  Ut(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : se(e) && (t.setupState = xd(e)), sh(t);
}
function sh(t, e, n) {
  const i = t.type;
  t.render || (t.render = i.render || Wn);
  {
    const o = Uo(t);
    sr();
    try {
      m0(t);
    } finally {
      cr(), o();
    }
  }
}
const Z0 = {
  get(t, e) {
    return ze(t, "get", ""), t[e];
  }
};
function J0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Z0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function yl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(xd(Om(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Mo)
        return Mo[n](t);
    },
    has(e, n) {
      return n in e || n in Mo;
    }
  })) : t.proxy;
}
function Q0(t, e = !0) {
  return Ut(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function t1(t) {
  return Ut(t) && "__vccOpts" in t;
}
const Di = (t, e) => /* @__PURE__ */ Um(t, e, Fo), e1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $c;
const Xu = typeof window < "u" && window.trustedTypes;
if (Xu)
  try {
    $c = /* @__PURE__ */ Xu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ch = $c ? (t) => $c.createHTML(t) : (t) => t, n1 = "http://www.w3.org/2000/svg", r1 = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, Zu = ir && /* @__PURE__ */ ir.createElement("template"), i1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const o = e === "svg" ? ir.createElementNS(n1, t) : e === "mathml" ? ir.createElementNS(r1, t) : n ? ir.createElement(t, { is: n }) : ir.createElement(t);
    return t === "select" && i && i.multiple != null && o.setAttribute("multiple", i.multiple), o;
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
  insertStaticContent(t, e, n, i, o, c) {
    const u = n ? n.previousSibling : e.lastChild;
    if (o && (o === c || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === c || !(o = o.nextSibling)); )
        ;
    else {
      Zu.innerHTML = ch(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const d = Zu.content;
      if (i === "svg" || i === "mathml") {
        const m = d.firstChild;
        for (; m.firstChild; )
          d.appendChild(m.firstChild);
        d.removeChild(m);
      }
      e.insertBefore(d, n);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, o1 = /* @__PURE__ */ Symbol("_vtc");
function a1(t, e, n) {
  const i = t[o1];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Ju = /* @__PURE__ */ Symbol("_vod"), s1 = /* @__PURE__ */ Symbol("_vsh"), c1 = /* @__PURE__ */ Symbol(""), l1 = /(?:^|;)\s*display\s*:/;
function u1(t, e, n) {
  const i = t.style, o = Ee(n);
  let c = !1;
  if (n && !o) {
    if (e)
      if (Ee(e))
        for (const u of e.split(";")) {
          const d = u.slice(0, u.indexOf(":")).trim();
          n[d] == null && Oa(i, d, "");
        }
      else
        for (const u in e)
          n[u] == null && Oa(i, u, "");
    for (const u in n)
      u === "display" && (c = !0), Oa(i, u, n[u]);
  } else if (o) {
    if (e !== n) {
      const u = i[c1];
      u && (n += ";" + u), i.cssText = n, c = l1.test(n);
    }
  } else e && t.removeAttribute("style");
  Ju in t && (t[Ju] = c ? i.display : "", t[s1] && (i.display = "none"));
}
const Qu = /\s*!important$/;
function Oa(t, e, n) {
  if (Ft(n))
    n.forEach((i) => Oa(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = f1(t, e);
    Qu.test(n) ? t.setProperty(
      Qr(i),
      n.replace(Qu, ""),
      "important"
    ) : t[i] = n;
  }
}
const tf = ["Webkit", "Moz", "ms"], hc = {};
function f1(t, e) {
  const n = hc[e];
  if (n)
    return n;
  let i = en(e);
  if (i !== "filter" && i in t)
    return hc[e] = i;
  i = ps(i);
  for (let o = 0; o < tf.length; o++) {
    const c = tf[o] + i;
    if (c in t)
      return hc[e] = c;
  }
  return e;
}
const ef = "http://www.w3.org/1999/xlink";
function nf(t, e, n, i, o, c = hm(e)) {
  i && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(ef, e.slice(6, e.length)) : t.setAttributeNS(ef, e, n) : n == null || c && !id(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : qn(n) ? String(n) : n
  );
}
function rf(t, e, n, i, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? ch(n) : n);
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? t.getAttribute("value") || "" : t.value, m = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== m || !("_value" in t)) && (t.value = m), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof t[e];
    d === "boolean" ? n = id(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function d1(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function h1(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const of = /* @__PURE__ */ Symbol("_vei");
function p1(t, e, n, i, o = null) {
  const c = t[of] || (t[of] = {}), u = c[e];
  if (i && u)
    u.value = i;
  else {
    const [d, m] = g1(e);
    if (i) {
      const y = c[e] = b1(
        i,
        o
      );
      d1(t, d, y, m);
    } else u && (h1(t, d, u, m), c[e] = void 0);
  }
}
const af = /(?:Once|Passive|Capture)$/;
function g1(t) {
  let e;
  if (af.test(t)) {
    e = {};
    let i;
    for (; i = t.match(af); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Qr(t.slice(2)), e];
}
let pc = 0;
const m1 = /* @__PURE__ */ Promise.resolve(), y1 = () => pc || (m1.then(() => pc = 0), pc = Date.now());
function b1(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Yn(
      v1(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = y1(), n;
}
function v1(t, e) {
  if (Ft(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (i) => (o) => !o._stopped && i && i(o)
    );
  } else
    return e;
}
const sf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, _1 = (t, e, n, i, o, c) => {
  const u = o === "svg";
  e === "class" ? a1(t, i, u) : e === "style" ? u1(t, n, i) : fs(e) ? ds(e) || p1(t, e, n, i, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : w1(t, e, i, u)) ? (rf(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && nf(t, e, i, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (x1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ee(i))) ? rf(t, en(e), i, c, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), nf(t, e, i, u));
};
function w1(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && sf(e) && Ut(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return sf(e) && Ee(n) ? !1 : e in t;
}
function x1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const i = en(e);
  return Array.isArray(n) ? n.some((o) => en(o) === i) : Object.keys(n).some((o) => en(o) === i);
}
const S1 = ["ctrl", "shift", "alt", "meta"], N1 = {
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
  exact: (t, e) => S1.some((n) => t[`${n}Key`] && !e.includes(n))
}, M1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), i = e.join(".");
  return n[i] || (n[i] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const d = N1[e[u]];
      if (d && d(o, e)) return;
    }
    return t(o, ...c);
  }));
}, P1 = /* @__PURE__ */ Ge({ patchProp: _1 }, i1);
let cf;
function k1() {
  return cf || (cf = O0(P1));
}
const C1 = ((...t) => {
  const e = k1().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const o = I1(i);
    if (!o) return;
    const c = e._component;
    !Ut(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, A1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function A1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function I1(t) {
  return Ee(t) ? document.querySelector(t) : t;
}
const Le = Math.PI / 180, lh = Math.PI * 2, E1 = 2048;
function T1() {
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
function gc(t, e, n, i = {}) {
  T1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...i,
    source: L1(n)
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
function Mi(t, e) {
  return Pr(t.x * e, t.y * e, t.z * e);
}
function Fa(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function lf(t, e) {
  return Pr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function mo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Pr(t.x / e, t.y / e, t.z / e);
}
function D1(t, e) {
  const n = Number(t || 0) * Le, i = Number(e || 0) * Le, o = Math.cos(i);
  return Pr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function $a(t, e, n = 0) {
  const i = D1(t, e);
  let o = Pr(0, 1, 0);
  Math.abs(Fa(i, o)) > 0.999 && (o = Pr(0, 0, 1));
  let c = mo(lf(o, i)), u = mo(lf(i, c));
  const d = Number(n || 0) * Le, m = Math.cos(d), y = Math.sin(d), p = Xa(Mi(c, m), Mi(u, y)), x = Xa(Mi(c, -y), Mi(u, m));
  return c = mo(p), u = mo(x), { fwd: i, right: c, up: u };
}
function R1(t, e) {
  const n = (Number(t || 0) - 0.5) * lh, i = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(i);
  return Pr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function uf(t, e, n = 1) {
  const i = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, E1), d = Math.min(1, u / Math.max(i, o));
  return {
    sourceWidth: i,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(o * d))
  };
}
function ff(t, e, n) {
  const i = t.createShader(e);
  if (t.shaderSource(i, n), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(i) || "shader compile failed";
    throw t.deleteShader(i), new Error(o);
  }
  return i;
}
function df(t, e, n) {
  const i = ff(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = ff(t, t.FRAGMENT_SHADER, n);
  } catch (u) {
    throw t.deleteShader(i), u;
  }
  const c = t.createProgram();
  if (t.attachShader(c, i), t.attachShader(c, o), t.linkProgram(c), t.deleteShader(i), t.deleteShader(o), !t.getProgramParameter(c, t.LINK_STATUS)) {
    const u = t.getProgramInfoLog(c) || "program link failed";
    throw t.deleteProgram(c), new Error(u);
  }
  return c;
}
const hf = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, O1 = `#version 300 es
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
}`, F1 = `#version 300 es
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
function da(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const i = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), o = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(be(i, 1, 179) * Le * 0.5) * (n / Math.max(e, 1))) / Le);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: be(i, 1, 179),
    vFovDeg: be(o, 0.1, 179)
  };
}
function $1(t) {
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
function uh(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, o = null, c = null, u = null, d = null, m = null, y = null, p = null, x = null, M = !1, k = uf(1, 1, 1), I = null, C = null, F = null, O = null;
  const L = /* @__PURE__ */ new Map();
  let V = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function R(U = null, Mt = null) {
    const St = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, St), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, U ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Mt ?? n.CLAMP_TO_EDGE), St;
  }
  function P() {
    if (M) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = df(n, hf, O1), o = df(n, hf, F1), I = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        paintOpacity: n.getUniformLocation(i, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(i, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(i, "u_hasPaint"),
        hasMask: n.getUniformLocation(i, "u_hasMask"),
        showMaskTint: n.getUniformLocation(i, "u_showMaskTint"),
        maskTint: n.getUniformLocation(i, "u_maskTint"),
        background: n.getUniformLocation(i, "u_background"),
        paint: n.getUniformLocation(i, "u_paint"),
        mask: n.getUniformLocation(i, "u_mask")
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
      ]), n.STATIC_DRAW), u = R(n.REPEAT, n.CLAMP_TO_EDGE), d = R(n.REPEAT, n.CLAMP_TO_EDGE), m = R(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function J() {
    var U;
    if (n) {
      try {
        c && n.deleteBuffer(c), u && n.deleteTexture(u), d && n.deleteTexture(d), m && n.deleteTexture(m), L.forEach((Mt) => {
          ht(Mt);
        }), i && n.deleteProgram(i), o && n.deleteProgram(o), (U = n.getExtension("WEBGL_lose_context")) == null || U.loseContext();
      } catch {
      }
      n = null, i = null, o = null, c = null, u = null, d = null, m = null, L.clear(), y = null, p = null, x = null, V = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, F = null, O = null, M = !1;
    }
  }
  function et(U, Mt, St = 1) {
    k = uf(U, Mt, St), (e.width !== k.width || e.height !== k.height) && (e.width = k.width, e.height = k.height);
  }
  function it(U, Mt, St = [], $t = { width: 0, height: 0 }, Rt = !1) {
    if (!n || !U || !Mt) return !1;
    const Vt = Number(Mt.width || Mt.videoWidth || Mt.naturalWidth || 0), A = Number(Mt.height || Mt.videoHeight || Mt.naturalHeight || 0);
    if (!(Vt > 1) || !(A > 1)) return !1;
    const D = Array.isArray(St) ? St.filter((z) => z && z.w > 0 && z.h > 0) : [];
    if (!D.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, U), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Rt ? 1 : 0), $t.width !== Vt || $t.height !== A)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), $t.width = Vt, $t.height = A, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (F || (F = document.createElement("canvas"), O = F.getContext("2d")), !O)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const z of D) {
      const Z = Math.max(0, Math.floor(Number(z.x || 0))), Y = Math.max(0, Math.floor(Number(z.y || 0))), W = Math.min(Vt - Z, Math.ceil(Number(z.w || 0))), ct = Math.min(A - Y, Math.ceil(Number(z.h || 0)));
      if (!(W <= 0 || ct <= 0)) {
        if (F.width !== W || F.height !== ct) {
          if (F.width = W, F.height = ct, O = F.getContext("2d"), !O)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          O.clearRect(0, 0, W, ct);
        O.drawImage(Mt, Z, Y, W, ct, 0, 0, W, ct), n.texSubImage2D(n.TEXTURE_2D, 0, Z, Y, n.RGBA, n.UNSIGNED_BYTE, F);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function _t(U, Mt, St, $t, Rt = null, Vt = !1) {
    if (!P()) return !1;
    if (!St)
      return U === "background" ? y = null : U === "paint" ? p = null : x = null, !1;
    const A = String($t ?? ""), D = U === "background" ? y : U === "paint" ? p : x, z = V[U], Z = Number(St.width || St.videoWidth || St.naturalWidth || 0), Y = Number(St.height || St.videoHeight || St.naturalHeight || 0), W = z.width !== Z || z.height !== Y;
    if (D === A && !W && !(Array.isArray(Rt) && Rt.length)) return !0;
    if (!(Z > 0) || !(Y > 0))
      return gc(U, "skip-invalid-size", St, { revision: A, sourceWidth: Z, sourceHeight: Y }), !1;
    if (n.bindTexture(n.TEXTURE_2D, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Vt ? 1 : 0), !(Array.isArray(Rt) && Rt.length ? it(Mt, St, Rt, z, Vt) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, St);
      const vt = n.getError();
      if (vt !== n.NO_ERROR)
        return gc(U, "texImage2D-error", St, {
          revision: A,
          sourceWidth: Z,
          sourceHeight: Y,
          glError: vt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !1;
      z.width = Z, z.height = Y;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), U === "background" ? y = A : U === "paint" ? p = A : x = A, !0;
  }
  function H(U, Mt) {
    return _t("background", u, U, Mt, null, !0);
  }
  function q(U, Mt, St = null) {
    return _t("paint", d, U, Mt, St, !0);
  }
  function lt(U, Mt, St = null) {
    return _t("mask", m, U, Mt, St, !0);
  }
  function ht(U) {
    U != null && U.texture && n && n.deleteTexture(U.texture);
  }
  function nt(U) {
    if (!n || !(U != null && U.assetId) || !(U != null && U.source)) return null;
    const Mt = String(U.assetId), St = String(U.revision ?? ""), $t = U.source, Rt = Number($t.width || $t.naturalWidth || $t.videoWidth || 0), Vt = Number($t.height || $t.naturalHeight || $t.videoHeight || 0);
    if (Rt <= 0 || Vt <= 0) return null;
    let A = L.get(Mt);
    if (A || (A = {
      texture: R(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, L.set(Mt, A)), A.revision !== St || A.width !== Rt || A.height !== Vt) {
      n.bindTexture(n.TEXTURE_2D, A.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, $t);
      const D = n.getError();
      if (D !== n.NO_ERROR)
        return gc(`sticker:${Mt}`, "texImage2D-error", $t, {
          revision: St,
          width: Rt,
          height: Vt,
          glError: D
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), A.revision = St, A.width = Rt, A.height = Vt;
    }
    return A.texture;
  }
  function G(U = []) {
    if (!P()) return !1;
    const Mt = /* @__PURE__ */ new Set();
    return U.forEach((St) => {
      !(St != null && St.assetId) || !(St != null && St.source) || (Mt.add(String(St.assetId)), nt(St));
    }), L.forEach((St, $t) => {
      Mt.has($t) || (ht(St), L.delete($t));
    }), !0;
  }
  function ot() {
    return P() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function at(U) {
    n.useProgram(U), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function ut(U, Mt = {}) {
    if (!y) return null;
    n.disable(n.BLEND), at(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, u), n.uniform1i(I.background, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(I.paint, 1), n.activeTexture(n.TEXTURE2), n.bindTexture(n.TEXTURE_2D, m), n.uniform1i(I.mask, 2), n.uniform2f(I.viewport, Math.max(1, k.width), Math.max(1, k.height)), n.uniform1i(I.mode, (U == null ? void 0 : U.mode) === "unwrap" ? 0 : (U == null ? void 0 : U.mode) === "cutout" ? 2 : 1);
    const St = da(U, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(I.yaw, Number(St.yawDeg || 0) * Le), n.uniform1f(I.pitch, Number(St.pitchDeg || 0) * Le), n.uniform1f(I.roll, Number(St.rollDeg || 0) * Le), n.uniform1f(I.hFov, be(Number(St.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(I.vFov, be(Number(St.vFovDeg || 60), 0.1, 179) * Le), n.uniform1f(I.opacity, be(Number(Mt.backgroundOpacity ?? 1), 0, 1)), n.uniform1f(I.paintOpacity, be(Number(Mt.paintOpacity ?? 1), 0, 1)), n.uniform1f(I.maskOpacity, be(Number(Mt.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(I.hasPaint, p != null ? 1 : 0), n.uniform1i(I.hasMask, x != null ? 1 : 0), n.uniform1i(I.showMaskTint, Mt.showMaskTint === !1 ? 0 : 1), n.uniform3f(I.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function kt(U, Mt, St) {
    var z;
    if (!((z = U == null ? void 0 : U.stickers) != null && z.length) || !(Mt != null && Mt.length)) return;
    const $t = (St == null ? void 0 : St.mode) === "unwrap" ? 0 : (St == null ? void 0 : St.mode) === "cutout" ? 2 : 1, Rt = da(St, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Vt = $a(Rt.yawDeg, Rt.pitchDeg, Rt.rollDeg), A = /* @__PURE__ */ new Map();
    Mt.forEach((Z) => {
      const Y = nt(Z);
      Y && A.set(String(Z.assetId || ""), Y);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), at(o), n.uniform1i(C.texture, 0), n.uniform1i(C.mode, $t), n.uniform3f(C.viewRight, Vt.right.x, Vt.right.y, Vt.right.z), n.uniform3f(C.viewUp, Vt.up.x, Vt.up.y, Vt.up.z), n.uniform3f(C.viewFwd, Vt.fwd.x, Vt.fwd.y, Vt.fwd.z), n.uniform1f(C.viewHfov, be(Number(Rt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(C.viewVfov, be(Number(Rt.vFovDeg || 60), 0.1, 179) * Le), [...U.stickers].sort((Z, Y) => Number((Z == null ? void 0 : Z.zIndex) || 0) - Number((Y == null ? void 0 : Y.zIndex) || 0)).forEach((Z) => {
      const Y = A.get(String((Z == null ? void 0 : Z.assetId) || ""));
      if (!Y) return;
      const W = $1(Z), ct = W.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Y), n.uniform3f(C.stickerRight, W.right.x, W.right.y, W.right.z), n.uniform3f(C.stickerUp, W.up.x, W.up.y, W.up.z), n.uniform3f(C.stickerFwd, W.fwd.x, W.fwd.y, W.fwd.z), n.uniform1f(C.stickerTanX, Math.max(1e-6, W.tanX)), n.uniform1f(C.stickerTanY, Math.max(1e-6, W.tanY)), n.uniform4f(
        C.crop,
        be(Number(ct.x0 ?? 0), 0, 1),
        be(Number(ct.y0 ?? 0), 0, 1),
        be(Number(ct.x1 ?? 1), 0, 1),
        be(Number(ct.y1 ?? 1), 0, 1)
      ), n.uniform1f(C.opacity, W.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function Et(U) {
    return !ot() || !y ? null : (ut({
      mode: "panorama",
      yawDeg: (U == null ? void 0 : U.yawDeg) || 0,
      pitchDeg: (U == null ? void 0 : U.pitchDeg) || 0,
      fovDeg: (U == null ? void 0 : U.fovDeg) || 100
    }, U), e);
  }
  function X(U) {
    return !ot() || !y ? null : (ut({ mode: "unwrap" }, U), e);
  }
  function Nt(U) {
    return !ot() || !y ? null : (ut({
      mode: "cutout",
      yawDeg: (U == null ? void 0 : U.yawDeg) || 0,
      pitchDeg: (U == null ? void 0 : U.pitchDeg) || 0,
      rollDeg: (U == null ? void 0 : U.rollDeg) || 0,
      hFovDeg: (U == null ? void 0 : U.hFovDeg) || 90,
      vFovDeg: (U == null ? void 0 : U.vFovDeg) || 60
    }, U), e);
  }
  function Bt(U = {}) {
    return !P() || (et(U.width, U.height, U.dpr || 1), !ot()) ? null : (q(U.paintSource || null, U.paintRevision ?? "", U.paintDirtyRects || null), lt(U.maskSource || null, U.maskRevision ?? "", U.maskDirtyRects || null), U.backgroundSource && (H(U.backgroundSource, U.backgroundRevision ?? ""), ut(U.view, U)), G(U.textures || []), kt(
      U.scene || { stickers: [] },
      U.textures || [],
      U.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e);
  }
  function pe(U, Mt, St) {
    const $t = Math.max(1, Number((U == null ? void 0 : U.viewportWidth) || k.sourceWidth || k.width || 1)), Rt = Math.max(1, Number((U == null ? void 0 : U.viewportHeight) || k.sourceHeight || k.height || 1)), Vt = Number(Mt), A = Number(St);
    if (!Number.isFinite(Vt) || !Number.isFinite(A)) return null;
    if ((U == null ? void 0 : U.mode) === "unwrap")
      return { u: (Vt / $t % 1 + 1) % 1, v: be(A / Rt, 0, 1) };
    const D = da(U, $t, Rt);
    if (!D) return null;
    const z = $a(D.yawDeg, D.pitchDeg, D.rollDeg), Z = (Vt - $t * 0.5) / ($t * 0.5) * Math.tan(be(D.hFovDeg, 1, 179) * Le * 0.5), Y = (Rt * 0.5 - A) / (Rt * 0.5) * Math.tan(be(D.vFovDeg, 0.1, 179) * Le * 0.5), W = mo(Xa(Xa(Mi(z.right, Z), Mi(z.up, Y)), z.fwd));
    return {
      u: (Math.atan2(W.x, W.z) / lh + 0.5 + 1) % 1,
      v: be(0.5 - Math.asin(be(W.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ge(U, Mt, St) {
    const $t = Math.max(1, Number((U == null ? void 0 : U.viewportWidth) || k.sourceWidth || k.width || 1)), Rt = Math.max(1, Number((U == null ? void 0 : U.viewportHeight) || k.sourceHeight || k.height || 1));
    if ((U == null ? void 0 : U.mode) === "unwrap")
      return {
        x: (Number(Mt || 0) % 1 + 1) % 1 * $t,
        y: be(Number(St || 0), 0, 1) * Rt,
        visible: !0
      };
    const Vt = da(U, $t, Rt);
    if (!Vt)
      return { x: $t * 0.5, y: Rt * 0.5, visible: !1 };
    const A = $a(Vt.yawDeg, Vt.pitchDeg, Vt.rollDeg), D = R1(Mt, St), z = Fa(D, A.right), Z = Fa(D, A.up), Y = Fa(D, A.fwd);
    if (Y <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const W = $t * 0.5 + z / Y * ($t * 0.5 / Math.tan(be(Vt.hFovDeg, 1, 179) * Le * 0.5)), ct = Rt * 0.5 - Z / Y * (Rt * 0.5 / Math.tan(be(Vt.vFovDeg, 0.1, 179) * Le * 0.5));
    return { x: W, y: ct, visible: W >= 0 && W <= $t && ct >= 0 && ct <= Rt };
  }
  return {
    init: P,
    dispose: J,
    setViewport: et,
    setBackgroundErp: H,
    setPaintErp: q,
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
const pf = "__shared_renderer";
function H1(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function V1(t, e) {
  var c;
  const n = H1(t);
  if (!n) return null;
  let i = n.get(pf);
  if (!i) {
    const u = uh();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    i = { renderer: u }, n.set(pf, i);
  }
  let o = n.get(e);
  return o || (o = { renderer: i.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function z1(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function U1(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function j1(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function Ui(t = {}) {
  const e = t.owner || null, n = t.ctx || null, i = j1(t);
  if (!e || !n || !(i != null && i.w) || !(i != null && i.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = V1(e, o), u = t.backgroundSource || t.img || null, d = t.scene || { stickers: [], selectedId: null, hoveredId: null }, m = Array.isArray(t.textures) ? t.textures : [], y = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const p = c.renderer, x = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), M = t.backgroundRevision != null, k = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, I = M ? String(t.backgroundRevision) : k ? "" : z1(u), C = Number(t.backgroundOpacity ?? 1), O = d.stickers.length === 0 && m.length === 0 && (!!M || !k), L = `${Math.round(i.w)}x${Math.round(i.h)}|${x}|${U1(y)}|${I}|${C.toFixed(3)}`;
  if (O && c.lastRenderKey === L && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, i.x, i.y, i.w, i.h), !0;
  const V = p.renderScene({
    width: i.w,
    height: i.h,
    dpr: x,
    backgroundSource: u,
    backgroundRevision: I,
    textures: m,
    scene: d,
    view: y,
    backgroundOpacity: C
  });
  if (!V) return !1;
  if (O) {
    const R = V.width, P = V.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== R || c.cachedCanvas.height !== P) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = R, c.cachedCanvas.height = P);
    const J = c.cachedCanvas.getContext("2d");
    if (!J) return !1;
    J.clearRect(0, 0, R, P), J.drawImage(V, 0, 0), c.lastRenderKey = L;
  } else
    c.lastRenderKey = null;
  return n.drawImage(V, i.x, i.y, i.w, i.h), !0;
}
function B1(t = {}) {
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
  }, Ui({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function ha(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return Ui({
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
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function bl(t, e) {
  const n = Math.max(1, Math.ceil(t)), i = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const o = document.createElement("canvas");
  return o.width = n, o.height = i, o;
}
function zn(t, e, n) {
  if (!t) return xi(e, n);
  const i = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== i || t.canvas.height !== o) && (t.canvas.width = i, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function ye(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let mc = null, yc = null, gf = null, mf = null, oe = null, lo = null, Xe = null, _r = null;
function G1() {
  if (yc) return yc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, e, e), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = t, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(e, e), i.moveTo(-e / 2, e / 2), i.lineTo(e / 2, e + e / 2), i.moveTo(e / 2, -e / 2), i.lineTo(e + e / 2, e / 2), i.stroke(), yc = n, n;
}
function mi(t, e) {
  if (!t || !e) return;
  const n = e.width, i = e.height;
  mc = zn(mc, n, i);
  const o = mc;
  ye(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", mf !== o.ctx && (gf = o.ctx.createPattern(G1(), "repeat"), mf = o.ctx), o.ctx.fillStyle = gf, o.ctx.fillRect(0, 0, n, i), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function K1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function W1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function q1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), i = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function Y1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const i = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * e * 2);
}
const xe = /* @__PURE__ */ new Map(), vl = 128;
function X1(t, e, n, i, o, c) {
  const u = Math.max(1, Math.round(t)), d = Math.max(0, Math.min(1, e)), m = `${u}:${d.toFixed(2)}:${n}:${i}:${o}:${c.toFixed(3)}`;
  if (xe.has(m)) {
    const L = xe.get(m);
    return xe.delete(m), xe.set(m, L), L;
  }
  xe.size >= vl && xe.delete(xe.keys().next().value);
  const y = u * 2 + 2, p = u + 1, x = bl(y, y), M = x.getContext("2d"), k = d * u, I = u + 1, C = `rgba(${n},${i},${o},${c})`, F = `rgba(${n},${i},${o},0)`, O = M.createRadialGradient(p, p, k, p, p, I);
  return O.addColorStop(0, C), O.addColorStop(1, F), M.fillStyle = O, M.fillRect(0, 0, y, y), xe.set(m, x), x;
}
function Z1(t, e, n, i, o, c, u) {
  const { r: d, g: m, b: y, a: p } = i, x = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), k = Math.max(0, o), I = Math.max(0, Math.min(0.99, c)), C = Math.max(0, Math.min(1, u ?? 0)), F = `chisel:${x}:${M}:${n.toFixed(2)}:${d}:${m}:${y}:${p.toFixed(3)}:${k.toFixed(2)}:${I.toFixed(2)}:${C.toFixed(2)}`;
  if (xe.has(F)) {
    const it = xe.get(F);
    return xe.delete(F), xe.set(F, it), it;
  }
  xe.size >= vl && xe.delete(xe.keys().next().value);
  const O = bl(x, M), L = O.getContext("2d"), V = L.createImageData(x, M), R = V.data, P = Math.max(0, t - e), J = Math.max(0, Math.min(1, n)), et = 1 + k;
  for (let it = 0; it < M; it++)
    for (let _t = 0; _t < x; _t++) {
      const H = _t + 0.5 - t, q = it + 0.5 - e, lt = Math.max(Math.abs(H) - P, 0), nt = Math.hypot(lt, q) / e;
      if (nt >= 1) continue;
      const G = nt <= J ? 1 : Math.max(0, (1 - nt) / Math.max(1e-4, 1 - J)), ot = 1 - nt, at = 1 + k * (1 - ot) * (1 - ot), ut = 1 - I * ot * ot, kt = at * ut / et;
      let Et = 1;
      if (C > 0) {
        const Bt = Math.floor((q + e) / 1.5), pe = Math.floor((H + t) / 8), ge = Kr(Ri(Bt * 41 + 500, pe * 19 + 300));
        Et = 1 - C * 0.42 * ge;
      }
      const X = Math.round(255 * Math.min(1, p * G * kt * Et));
      if (X <= 0) continue;
      const Nt = (it * x + _t) * 4;
      R[Nt] = d, R[Nt + 1] = m, R[Nt + 2] = y, R[Nt + 3] = X;
    }
  return L.putImageData(V, 0, 0), xe.set(F, O), O;
}
function Ri(t, e) {
  const n = Math.trunc(Math.round(t * 4)), i = Math.trunc(Math.round(e * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ i & 255, 16777619), o = Math.imul(o ^ i >> 8 & 255, 16777619), o >>> 0;
}
function Kr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function J1(t, e, n, i, o, c, u) {
  const d = t + 0.5 - n, m = e + 0.5 - i, y = Math.max(0, n - i), p = Math.max(Math.abs(d) - y, 0), x = Math.hypot(p, m) / i;
  if (x >= 1) return 0;
  const M = Kr(Ri(t * 17 + 3, e * 13 + 7)), k = x + c * 0.22 * (M - 0.5);
  if (k >= 1) return 0;
  const I = k <= o ? 1 : Math.max(0, (1 - k) / Math.max(1e-4, 1 - o)), C = Q1(t, e, d, m, n, i), F = c * 0.55;
  if (C < F) return 0;
  const L = 0.45 + 0.55 * ((C - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, u * I * L));
}
function Q1(t, e, n, i, o, c) {
  const u = Math.floor((n + o) / 3), d = Math.floor((i + c) / 2), m = Kr(Ri(u * 13 + 700, d * 17 + 400)), y = Math.floor((n + o) / 1.5), p = Math.floor((i + c) / 1.5), x = Kr(Ri(y * 23 + 800, p * 29 + 500)), M = Kr(Ri(t * 3 + 100, e * 5 + 200));
  return m * 0.55 + x * 0.3 + M * 0.15;
}
function ty(t, e, n, i, o) {
  const { r: c, g: u, b: d, a: m } = i, y = Math.max(2, Math.ceil(t) * 2), p = Math.max(2, Math.ceil(e) * 2), x = Math.max(0, Math.min(1, o)), M = `crayon:${y}:${p}:${n.toFixed(2)}:${c}:${u}:${d}:${m.toFixed(3)}:${x.toFixed(2)}`;
  if (xe.has(M)) {
    const L = xe.get(M);
    return xe.delete(M), xe.set(M, L), L;
  }
  xe.size >= vl && xe.delete(xe.keys().next().value);
  const k = bl(y, p), I = k.getContext("2d"), C = I.createImageData(y, p), F = C.data, O = Math.max(0, Math.min(1, n));
  for (let L = 0; L < p; L++)
    for (let V = 0; V < y; V++) {
      const R = J1(V, L, t, e, O, x, m);
      if (R <= 0) continue;
      const P = (L * y + V) * 4;
      F[P] = c, F[P + 1] = u, F[P + 2] = d, F[P + 3] = R;
    }
  return I.putImageData(C, 0, 0), xe.set(M, k), k;
}
function fh(t, e, n) {
  var k;
  const i = String((e == null ? void 0 : e.stampKind) || "round"), o = q1(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = ey(e), d = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), m = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), y = Y1(e, o), p = e == null ? void 0 : e.scatter, x = p ? { radius: Number(p.radius ?? 1.5), count: Math.max(1, Math.round(p.count ?? 6)) } : null;
  let M;
  if (i === "chisel") {
    const I = o * d, C = o, F = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    M = Z1(I, C, c, u, F, O, L);
  } else if (i === "crayon") {
    const I = o * d, C = o, F = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    M = ty(I, C, c, u, F);
  } else
    M = X1(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: M, radiusPx: o, spacingPx: y, desc: n, aspect: d, angle: m, stampKind: i, scatter: x };
}
function ey(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.flow) ?? 1))), c = Math.max(0, Math.min(1, Number(i.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: c
  };
}
function ny(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const i = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${o})`;
}
function yf(t, e, n, i, o) {
  const c = t.angle, u = t.desc.width;
  function d(y, p) {
    c === 0 ? t.ctx.drawImage(t.stampTex, y - o, p - i, o * 2, i * 2) : (t.ctx.save(), t.ctx.translate(y, p), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -i, o * 2, i * 2), t.ctx.restore());
  }
  d(e, n);
  const m = c === 0 ? o : o * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  e - m < 0 && d(e + u, n), e + m > u && d(e - u, n);
}
function _l(t, e, n, i) {
  const o = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (t.scatter) {
    const { radius: m, count: y } = t.scatter, p = m * t.radiusPx * o, x = Ri(e, n);
    for (let M = 0; M < y; M++) {
      const k = Kr(x + M * 2) * Math.PI * 2, I = Math.sqrt(Kr(x + M * 2 + 1)) * p, C = e + Math.cos(k) * I, F = n + Math.sin(k) * I, O = Math.max(0.5, t.radiusPx * o * 0.48), L = (0.5 - F / Math.max(1, t.desc.height)) * Math.PI, V = O * t.aspect / Math.max(0.05, Math.cos(L));
      yf(t, C, F, O, V);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, d = c * t.aspect / Math.max(0.05, Math.cos(u));
  yf(t, e, n, c, d);
}
function bf(t, e, n) {
  const i = W1(e);
  if (!t || i.length === 0) return;
  const o = n.width, c = n.height, u = fh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const d = [];
  for (let M = 0; M < i.length; M++) {
    let k = Number(i[M].u || 0) * o;
    const I = Number(i[M].v || 0) * c;
    M > 0 && Math.abs(k - d[M - 1].x) > o * 0.5 && (k += k < d[M - 1].x ? o : -o), d.push({ x: k, y: I });
  }
  if (_l(u, d[0].x, d[0].y, 1), d.length === 1) {
    t.restore();
    return;
  }
  let m = d[0], y = d[0], p = d[0], x = 0;
  for (let M = 1; M < d.length; M++) {
    const k = d[M], I = { x: (y.x + k.x) * 0.5, y: (y.y + k.y) * 0.5 };
    M === 1 ? x = $o(u, p.x, p.y, I.x, I.y, x) : x = Za(u, m, p, I, k, x), m = y, y = k, p = I;
  }
  d.length === 2 ? $o(u, p.x, p.y, y.x, y.y, x) : Za(u, m, p, y, y, x), t.restore();
}
function Ha(t, e, n) {
  var x;
  const i = Array.isArray((x = e == null ? void 0 : e.geometry) == null ? void 0 : x.points) ? e.geometry.points : [];
  if (!t || i.length < 3) return;
  const o = n.width, c = n.height, u = ny(e), d = [];
  let m = 1 / 0, y = -1 / 0;
  for (let M = 0; M < i.length; M++) {
    const k = K1(i[M]);
    let I = Number(k.x || 0) * o;
    M > 0 && Math.abs(I - d[M - 1].x) > o * 0.5 && (I += I < d[M - 1].x ? o : -o), d.push({ x: I, y: Number(k.y || 0) * c }), I < m && (m = I), I > y && (y = I);
  }
  function p(M) {
    t.beginPath(), t.moveTo(d[0].x + M, d[0].y);
    for (let k = 1; k < d.length; k++) t.lineTo(d[k].x + M, d[k].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, p(0), m < 0 && p(o), y > o && p(-o), t.restore();
}
function pa(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Ha(t, e, n);
    return;
  }
  const c = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  c >= 0.999 ? bf(t, e, n) : (lo = zn(lo, n.width, n.height), ye(lo), bf(lo.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(lo.canvas, 0, 0), t.restore());
}
function wr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function $o(t, e, n, i, o, c) {
  const u = i - e, d = o - n, m = Math.hypot(u, d);
  if (m < 1e-9) return c;
  let y = t.spacingPx - c;
  for (; y <= m; ) {
    const p = y / m;
    _l(t, e + u * p, n + d * p, 1), y += t.spacingPx;
  }
  return m - y + t.spacingPx;
}
function Za(t, e, n, i, o, c) {
  const d = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, m = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - i.x, o.y - i.y)) + 1e-4, p = 0, x = d, M = x + m, k = M + y, I = M - x, C = 16;
  let F = c, O = n.x, L = n.y;
  for (let V = 1; V <= C; V++) {
    const R = x + I * V / C, P = ((x - R) * e.x + (R - p) * n.x) / (x - p), J = ((x - R) * e.y + (R - p) * n.y) / (x - p), et = ((M - R) * n.x + (R - x) * i.x) / (M - x), it = ((M - R) * n.y + (R - x) * i.y) / (M - x), _t = ((k - R) * i.x + (R - M) * o.x) / (k - M), H = ((k - R) * i.y + (R - M) * o.y) / (k - M), q = ((M - R) * P + (R - p) * et) / (M - p), lt = ((M - R) * J + (R - p) * it) / (M - p), ht = ((k - R) * et + (R - x) * _t) / (k - x), nt = ((k - R) * it + (R - x) * H) / (k - x), G = ((M - R) * q + (R - x) * ht) / (M - x), ot = ((M - R) * lt + (R - x) * nt) / (M - x);
    F = $o(t, O, L, G, ot, F), O = G, L = ot;
  }
  return F;
}
function ry(t, e, n, i) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, d = n * c.height, m = t.activeStroke;
  let y = e * u;
  if (m && Math.abs(y - m.prev.x) > u * 0.5 && (y += y < m.prev.x ? u : -u), !m) {
    const k = fh(o, i, c), I = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), C = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), F = String((i == null ? void 0 : i.toolKind) || "") === "eraser", O = String((i == null ? void 0 : i.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", _l(k, y, d, 1), t.activeStroke = {
      pprev: { x: y, y: d },
      prev: { x: y, y: d },
      lastMidX: y,
      lastMidY: d,
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
      layerKind: O,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const p = (m.prev.x + y) * 0.5, x = (m.prev.y + d) * 0.5;
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
  m.pointCount === 1 ? m.distSinceStamp = $o(M, m.lastMidX, m.lastMidY, p, x, m.distSinceStamp) : m.distSinceStamp = Za(
    M,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: p, y: x },
    { x: y, y: d },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: y, y: d }, m.lastMidX = p, m.lastMidY = x, m.pointCount++, t.displayDirty = !0;
}
function Hc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), i = { kind: "ERP_GLOBAL", width: e, height: n }, o = /* @__PURE__ */ new Map(), c = xi(e, n), u = {
    descriptor: i,
    committedMask: xi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: xi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = xi(e, n);
  let y = null, p = "", x = null;
  function M(H) {
    return {
      actionGroupId: H,
      descriptor: i,
      committedPaint: xi(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function k(H) {
    let q = o.get(H);
    return q || (q = M(H), o.set(H, q)), q;
  }
  function I(H) {
    return p === "mask" ? u : y ? k(y) : d;
  }
  function C(H) {
    var ut;
    const q = !x || x.length !== H.length || H.some((kt, Et) => kt !== x[Et]);
    let lt = u.displayDirty || d.displayDirty || q;
    for (const kt of H) {
      const Et = o.get(kt);
      if (Et != null && Et.displayDirty) {
        lt = !0;
        break;
      }
    }
    if (!lt) return;
    u.displayDirty = !1, d.displayDirty = !1;
    for (const kt of H) {
      const Et = o.get(kt);
      Et && (Et.displayDirty = !1);
    }
    x = [...H];
    const ht = m.ctx;
    ye(m);
    const nt = p === "paint" && ((ut = y ? o.get(y) : d) == null ? void 0 : ut.activeStroke) || null, G = !!(nt != null && nt.isEraser);
    for (const kt of H) {
      const Et = o.get(kt);
      if (!Et) continue;
      const Nt = y === Et.actionGroupId && p === "paint" ? Et.activeStroke : null;
      if (G)
        oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(Et.committedPaint.canvas, 0, 0), wr(oe.ctx, c.canvas), ht.drawImage(oe.canvas, 0, 0);
      else if (ht.drawImage(Et.committedPaint.canvas, 0, 0), Nt) {
        const Bt = Et.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Nt.strokeOpacity ?? 1));
        ht.save(), ht.globalAlpha = Bt, ht.drawImage(c.canvas, 0, 0), ht.restore();
      }
    }
    const ot = p === "mask", at = u.activeStroke;
    ot && (at != null && at.isEraser) ? (oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(oe.ctx, c.canvas), mi(ht, oe.canvas)) : (mi(ht, u.committedMask.canvas), ot && at && mi(ht, c.canvas));
  }
  function F(H) {
    var lt, ht, nt, G, ot;
    for (const at of o.values())
      ye(at.committedPaint), ye(at.currentStroke), at.activeStroke = null, at.displayDirty = !0;
    ye(u.committedMask), ye(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, d.displayDirty = !0, x = null;
    const q = [
      ...Array.isArray((ht = (lt = H == null ? void 0 : H.painting) == null ? void 0 : lt.paint) == null ? void 0 : ht.strokes) ? H.painting.paint.strokes : [],
      ...Array.isArray((G = (nt = H == null ? void 0 : H.painting) == null ? void 0 : nt.mask) == null ? void 0 : G.strokes) ? H.painting.mask.strokes : []
    ];
    for (const at of q) {
      if (((ot = at == null ? void 0 : at.targetSpace) == null ? void 0 : ot.kind) !== "ERP_GLOBAL") continue;
      const ut = String((at == null ? void 0 : at.layerKind) || "paint"), Et = String((at == null ? void 0 : at.toolKind) || "pen") === "eraser";
      if (ut === "mask") {
        const X = u.descriptor;
        Et ? (oe = zn(oe, X.width, X.height), ye(oe), pa(oe.ctx, at, X), wr(u.committedMask.ctx, oe.canvas)) : pa(u.committedMask.ctx, at, X);
        continue;
      }
      if (Et) {
        oe = zn(oe, i.width, i.height), ye(oe), pa(oe.ctx, at, i);
        for (const X of o.values())
          wr(X.committedPaint.ctx, oe.canvas), X.displayDirty = !0;
      } else {
        const X = String((at == null ? void 0 : at.actionGroupId) || "__default__"), Nt = k(X), Bt = Nt.descriptor;
        pa(Nt.committedPaint.ctx, at, Bt), Nt.displayDirty = !0;
      }
    }
    C([...o.keys()]);
  }
  function O(H, q) {
    p = String((H == null ? void 0 : H.layerKind) || "");
    const lt = String((H == null ? void 0 : H.toolKind) || "") === "eraser";
    if (p === "mask")
      y = null, ye(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ht = lt ? d : k(String((H == null ? void 0 : H.actionGroupId) || "__default__"));
      y = lt ? "" : String((H == null ? void 0 : H.actionGroupId) || "__default__"), ye(ht.currentStroke), ht.activeStroke = null, ht.displayDirty = !0;
    }
  }
  function L(H, q) {
    const lt = String((H == null ? void 0 : H.layerKind) || "paint"), ht = String((H == null ? void 0 : H.toolKind) || "") === "eraser", nt = lt === "mask" ? u : ht ? d : k(String((H == null ? void 0 : H.actionGroupId) || y || "__default__")), G = nt.activeStroke, ot = nt.descriptor;
    if (G && G.pointCount > 1) {
      const ut = nt.currentStroke.ctx;
      ut.globalCompositeOperation = "source-over";
      const kt = {
        ctx: ut,
        stampTex: G.stampTex,
        radiusPx: G.radiusPx,
        spacingPx: G.spacingPx,
        desc: ot,
        aspect: G.aspect,
        angle: G.angle,
        stampKind: G.stampKind,
        scatter: G.scatter
      };
      G.pointCount === 2 ? $o(kt, G.lastMidX, G.lastMidY, G.prev.x, G.prev.y, G.distSinceStamp) : Za(kt, G.pprev, { x: G.lastMidX, y: G.lastMidY }, G.prev, G.prev, G.distSinceStamp);
    }
    nt.lassoPreviewActive && (ye(nt.currentStroke), Ha(nt.currentStroke.ctx, H, ot), nt.lassoPreviewActive = !1);
    const at = lt === "mask" ? u.committedMask : nt.committedPaint;
    if (ht && lt === "paint")
      for (const ut of o.values())
        wr(ut.committedPaint.ctx, nt.currentStroke.canvas), ut.displayDirty = !0;
    else if (ht)
      wr(at.ctx, nt.currentStroke.canvas);
    else {
      const ut = Math.max(0, Math.min(1, (G == null ? void 0 : G.strokeOpacity) ?? 1));
      at.ctx.save(), at.ctx.globalAlpha = ut, at.ctx.drawImage(nt.currentStroke.canvas, 0, 0), at.ctx.restore();
    }
    ye(nt.currentStroke), nt.activeStroke = null, nt.displayDirty = !0, y = null, p = "", C([...o.keys()]);
  }
  function V(H) {
    if (p === "mask")
      ye(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (p === "paint" && !y)
      ye(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (y) {
      const q = o.get(y);
      q && (ye(q.currentStroke), q.activeStroke = null, q.lassoPreviewActive = !1, q.displayDirty = !0);
    }
    y = null, p = "", C([...o.keys()]);
  }
  function R(H, q) {
    var ht;
    if (p = String((H == null ? void 0 : H.layerKind) || ""), String(((ht = H == null ? void 0 : H.geometry) == null ? void 0 : ht.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        ye(u.currentStroke), Ha(u.currentStroke.ctx, H, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const nt = String((H == null ? void 0 : H.toolKind) || "") === "eraser", G = nt ? d : k(String((H == null ? void 0 : H.actionGroupId) || y || "__default__"));
        y = nt ? "" : String((H == null ? void 0 : H.actionGroupId) || y || "__default__"), ye(G.currentStroke), Ha(G.currentStroke.ctx, H, G.descriptor), G.lassoPreviewActive = !0, G.displayDirty = !0;
      }
      C([...o.keys()]);
    }
  }
  function P(H) {
    return C(H ?? [...o.keys()]), {
      displayPaint: m,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function J(H) {
    return o.get(String(H)) ?? null;
  }
  function et() {
    return [...o.keys()];
  }
  function it(H) {
    var ot;
    const q = o.get(String(H));
    if (!q) return null;
    const lt = p === "paint" && y === q.actionGroupId, ht = p === "paint" && ((ot = y ? o.get(y) : d) == null ? void 0 : ot.activeStroke) || null;
    if (ht != null && ht.isEraser)
      return Xe = zn(Xe, e, n), ye(Xe), Xe.ctx.drawImage(q.committedPaint.canvas, 0, 0), wr(Xe.ctx, c.canvas), Xe.canvas;
    const nt = lt ? q.activeStroke : null;
    if (!nt) return q.committedPaint.canvas;
    Xe = zn(Xe, e, n), ye(Xe), Xe.ctx.drawImage(q.committedPaint.canvas, 0, 0);
    const G = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, nt.strokeOpacity ?? 1));
    return Xe.ctx.save(), Xe.ctx.globalAlpha = G, Xe.ctx.drawImage(c.canvas, 0, 0), Xe.ctx.restore(), Xe.canvas;
  }
  function _t() {
    return _r = zn(_r, e, n), ye(_r), mi(_r.ctx, u.committedMask.canvas), p === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(oe.ctx, c.canvas), ye(_r), mi(_r.ctx, oe.canvas)) : mi(_r.ctx, c.canvas)), _r.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: O,
    appendStrokePoint: ry,
    updateActiveStroke: R,
    commitActiveStroke: L,
    cancelActiveStroke: V,
    getErpTarget: P,
    ensureTarget: I,
    getGroupTarget: J,
    getGroupDisplayCanvas: it,
    getMaskDisplayCanvas: _t,
    getAllGroupIds: et
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Va(t, e, n) {
  const i = Number(t);
  return Number.isFinite(i) ? Math.max(Number(e), Math.min(Number(n), i)) : Number(e);
}
function $e(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function iy(t, e) {
  let n = $e(e) - $e(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const vf = 0.12, oy = 3, ay = 35, sy = 140, bc = 100, cy = 20, _f = 0.8;
function ly(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Ss(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: bc })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), i = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), o = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), u = typeof t.onDebug == "function" ? t.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function m(F, O = null) {
    u && u(F, O);
  }
  function y(F, O, L = null, V = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(F || 0), d.drag.lastY = Number(O || 0), d.drag.lastTs = Number(V || performance.now()), d.drag.pointerId = L, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], m("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: L }), !0;
  }
  function p(F, O, L = "pano", V = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(V || performance.now()), P = Number(F), J = Number(O), et = P - d.drag.lastX, it = J - d.drag.lastY;
    d.drag.lastX = P, d.drag.lastY = J, d.drag.lastTs = R;
    const _t = i() || { x: 1, y: 1 }, H = Number(_t.x || 1), q = Number(_t.y || 1), lt = { ...e() };
    let ht = 0, nt = 0;
    if (L === "unwrap") {
      const ot = o() || { w: 1, h: 1 }, at = Math.max(1, Number(ot.w || 1)), ut = Math.max(1, Number(ot.h || 1)), kt = et / at, Et = it / ut;
      ht = -kt * 360 * H, nt = Et * 180 * q;
    } else
      ht = -et * vf * H, nt = it * vf * q;
    lt.yaw = $e(Number(lt.yaw || 0) + ht), lt.pitch = j(Number(lt.pitch || 0) + nt, -89.9, 89.9), n(lt), d.velHistory.push({ ts: R, yaw: lt.yaw, pitch: lt.pitch });
    let G = 0;
    for (; G < d.velHistory.length - 1 && d.velHistory[G].ts < R - 100; ) G++;
    return G > 0 && d.velHistory.splice(0, G), d.inertia.active = !1, d.inertia.lastTs = R, c(), m("drag", { phase: "move", dx: et, dy: it, dYaw: ht, dPitch: nt }), !0;
  }
  function x(F = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const O = Number(F || performance.now());
    d.drag.lastTs = O;
    const L = d.velHistory.filter((R) => O - R.ts <= 80);
    if (L.length >= 2) {
      const R = L[0], P = L.at(-1), J = Math.max(1e-3, (P.ts - R.ts) / 1e3);
      let et = P.yaw - R.yaw;
      et > 180 && (et -= 360), et < -180 && (et += 360), d.inertia.vx = et / J, d.inertia.vy = (P.pitch - R.pitch) / J;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const V = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = V > cy, d.inertia.lastTs = O, m("drag", { phase: "end", speed: V, inertiaActive: d.inertia.active }), !0;
  }
  function M(F = performance.now()) {
    if (!d.inertia.active) return !1;
    const O = Number(F || performance.now()), L = Math.max(1e-3, (O - (d.inertia.lastTs || O)) / 1e3);
    d.inertia.lastTs = O;
    const V = { ...e() };
    V.yaw = $e(Number(V.yaw || 0) + d.inertia.vx * L), V.pitch = j(Number(V.pitch || 0) + d.inertia.vy * L, -89.9, 89.9);
    const R = Math.exp(-5.5 * L);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < _f && Math.abs(d.inertia.vy) < _f && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(V), c(), d.inertia.active;
  }
  function k(F) {
    const O = Math.sign(Number(F || 0));
    if (!O) return !1;
    const L = { ...e() }, V = Number(L.fov || bc);
    return L.fov = j(V + O * oy, ay, sy), n(L), c(), m("wheel", { deltaSign: O, fovBefore: V, fovAfter: L.fov }), !0;
  }
  function I(F) {
    return k(Math.sign(ly(F)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: bc }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: p,
    endDrag: x,
    stepInertia: M,
    applyWheel: k,
    applyWheelEvent: I,
    resetView: C
  };
}
function Vc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const qr = Math.PI / 180;
function Mn(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function Yr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ja(t, e) {
  return Yr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Pi(t, e) {
  return Yr(t.x * e, t.y * e, t.z * e);
}
function yo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yr(t.x / e, t.y / e, t.z / e);
}
function uy(t, e) {
  const n = Number(t || 0) * qr, i = Number(e || 0) * qr, o = Math.cos(i);
  return Yr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function wf(t, e) {
  return Yr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function fy(t, e, n = 0) {
  const i = uy(t, e), o = Yr(0, 1, 0);
  let c = wf(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Yr(1, 0, 0)), c = yo(c);
  let u = yo(wf(i, c));
  const d = Number(n || 0) * qr, m = Math.cos(d), y = Math.sin(d), p = Ja(Pi(c, m), Pi(u, y)), x = Ja(Pi(c, -y), Pi(u, m));
  return { fwd: i, right: yo(p), up: yo(x) };
}
function dy(t, e, n, i = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (d) => {
    const m = d.x - o, y = d.y - c, p = Math.hypot(m, y) || 1;
    return { x: d.x + m / p * i, y: d.y + y / p * i };
  };
  return [u(t), u(e), u(n)];
}
function xf(t, e, n, i, o, c, u, d) {
  const m = n.x * (i.y - o.y) + i.x * (o.y - n.y) + o.x * (n.y - i.y);
  if (Math.abs(m) < 1e-6) return !1;
  const [y, p, x] = dy(c, u, d, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(x.x, x.y), t.closePath(), t.clip();
  const M = (c.x * (i.y - o.y) + u.x * (o.y - n.y) + d.x * (n.y - i.y)) / m, k = (c.x * (o.x - i.x) + u.x * (n.x - o.x) + d.x * (i.x - n.x)) / m, I = (c.x * (i.x * o.y - o.x * i.y) + u.x * (o.x * n.y - n.x * o.y) + d.x * (n.x * i.y - i.x * n.y)) / m, C = (c.y * (i.y - o.y) + u.y * (o.y - n.y) + d.y * (n.y - i.y)) / m, F = (c.y * (o.x - i.x) + u.y * (n.x - o.x) + d.y * (i.x - n.x)) / m, O = (c.y * (i.x * o.y - o.x * i.y) + u.y * (o.x * n.y - n.x * o.y) + d.y * (n.x * i.y - i.x * n.y)) / m;
  return t.transform(M, C, k, F, I, O), t.drawImage(e, 0, 0), t.restore(), !0;
}
function hy(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), i = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || i <= 1) return null;
  t.__panoSharedWrappedErpCache || (t.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoSharedWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === i) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = i;
  const d = u.getContext("2d");
  return d ? (d.drawImage(e, 0, 0, n, i), d.drawImage(e, n, 0, n, i), t.__panoSharedWrappedErpCache = { src: o, w: n, h: i, canvas: u }, u) : null;
}
function dh(t) {
  const e = t || {}, n = Mn(e.yaw_deg, 0), i = Mn(e.pitch_deg, 0), o = Mn(e.roll_deg ?? e.rot_deg, 0), c = Va(Mn(e.hFOV_deg, 90), 1, 179), u = Va(Mn(e.vFOV_deg, 60), 1, 179), d = Math.tan(c * qr * 0.5) / Math.max(1e-6, Math.tan(u * qr * 0.5)), m = Va(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: m
  };
}
function py(t, e, n, i, o, c = "balanced") {
  const u = (_t = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Mn(i == null ? void 0 : i.w, 0),
      rectH: Mn(i == null ? void 0 : i.h, 0),
      imageW: Mn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Mn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ..._t
    };
  };
  if (!t || !e || !n || !i || !o)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const d = Mn(i.w, 0), m = Mn(i.h, 0);
  if (d <= 1 || m <= 1)
    return u({ reason: "invalid_rect", rectW: d, rectH: m }), !1;
  const y = Number(n.naturalWidth || n.width || 0), p = Number(n.naturalHeight || n.height || 0);
  if (y <= 1 || p <= 1)
    return u({ reason: "invalid_image", imageW: y, imageH: p }), !1;
  const x = hy(e, n) || n, { yaw: M, pitch: k, roll: I, hfov: C, vfov: F } = dh(o), O = fy(M, k, I), L = Math.tan(C * qr * 0.5), V = Math.tan(F * qr * 0.5), R = c === "high" ? 20 : c === "draft" ? 10 : 14, P = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let J = 0;
  const et = Array.from({ length: P + 1 }, () => Array(R + 1).fill(null)), it = Array.from({ length: P + 1 }, () => Array(R + 1).fill(null));
  for (let _t = 0; _t <= P; _t += 1)
    for (let H = 0; H <= R; H += 1) {
      const q = H / R, lt = _t / P, ht = (q * 2 - 1) * L, nt = (1 - lt * 2) * V, G = yo(Ja(Ja(O.fwd, Pi(O.right, ht)), Pi(O.up, nt))), ot = Math.atan2(G.x, G.z), at = Math.asin(Va(G.y, -1, 1));
      let ut = (ot / (2 * Math.PI) + 0.5) * y;
      for (; ut < 0; ) ut += y;
      for (; ut >= y; ) ut -= y;
      const kt = (0.5 - at / Math.PI) * p;
      et[_t][H] = { x: i.x + q * i.w, y: i.y + lt * i.h }, it[_t][H] = { x: ut, y: kt };
    }
  for (let _t = 0; _t < P; _t += 1)
    for (let H = 0; H < R; H += 1) {
      const q = et[_t][H], lt = et[_t][H + 1], ht = et[_t + 1][H], nt = et[_t + 1][H + 1], G = { ...it[_t][H] }, ot = { ...it[_t][H + 1] }, at = { ...it[_t + 1][H] }, ut = { ...it[_t + 1][H + 1] }, kt = Math.min(G.x, ot.x, at.x, ut.x);
      Math.max(G.x, ot.x, at.x, ut.x) - kt > y * 0.5 && [G, ot, at, ut].forEach((X) => {
        X.x < y * 0.5 && (X.x += y);
      }), xf(t, x, G, ot, ut, q, lt, nt) && (J += 1), xf(t, x, G, ut, at, q, nt, ht) && (J += 1);
    }
  return u({
    drawnTriCount: J,
    Nu: R,
    Nv: P,
    rectW: d,
    rectH: m,
    imageW: y,
    imageH: p,
    reason: "ok"
  }), J > 0;
}
const hh = 0.28;
function gy(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), i = j(Number(e.y0 ?? 0), 0, 1), o = j(Number(e.x1 ?? 1), 0, 1), c = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(i, c),
    x1: Math.max(n, o),
    y1: Math.max(i, c)
  };
}
function my(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), i = t.type === "external_image" || t.source_kind === "external_image", o = n || (i ? String(t.id || "").trim() : ""), c = e.includeHidden === !0, u = t.visible === !1, d = c && i && u;
  return {
    id: String(t.id || ""),
    assetId: o,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: j(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: j(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: gy(t.crop),
    opacity: d ? hh : j(Number(t.opacity ?? 1), 0, 1),
    visible: d ? !0 : t.visible !== !1,
    external: i
  };
}
function Ho(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.includeHidden === !0;
  return {
    stickers: n.map((u) => my(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, d) => Number(u.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function zc(t, e, n = {}) {
  if (typeof e != "function") return [];
  const i = n.scene || Ho(t, n), o = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var I;
    const m = String((d == null ? void 0 : d.assetId) || "").trim(), y = m || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const p = m ? o[m] : null, x = e(y, p, d);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const M = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), k = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || M <= 0 || k <= 0 || (u.add(y), c.push({
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
function yy(t) {
  return wl(t);
}
function ki(t) {
  const e = dh(t || {});
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
const { app: ve } = Ia;
function Uc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Ia == null ? void 0 : Ia.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Xr = Math.PI / 180, Hi = { Nu: 14, Nv: 9 }, vc = { Nu: 24, Nv: 14 }, Sf = { Nu: 32, Nv: 20 }, by = 10, vy = 120;
function ph() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qt(t, e, n = null) {
  if (!ph()) return;
  const i = (t == null ? void 0 : t.id) ?? "?";
  if (n == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${i}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${i}`, n);
}
function uo(t) {
  var n, i, o, c, u;
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
    styleWidth: String(((o = t.style) == null ? void 0 : o.width) || ""),
    stylePos: String(((c = t.style) == null ? void 0 : c.position) || ""),
    styleTransform: String(((u = t.style) == null ? void 0 : u.transform) || "")
  };
}
function _y() {
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
  const n = (i, o) => {
    const c = Number(i), u = Number(o);
    return !Number.isFinite(c) || !Number.isFinite(u) ? null : [c, u];
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
function wy(t) {
  const e = kr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function gh(t, e, n) {
  wy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function jc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function mh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function xy(t) {
  return Vc(mh(t));
}
function Wr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = ve == null ? void 0 : ve.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, i, n, o].join("|");
}
function yh(t, e = null) {
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
const ko = {
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
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, Qt(i, "path.switch", {
              from: String(i.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), bh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Qt(i, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
          }
      });
    }, 300));
  }
};
function bh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = i === "cutout" ? "dom" : yh(i, t).chosenPath, c = jc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = t.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (c === o && c !== "none" && u === i && d === m) {
        t.__panoAttachOptions = { ...n, mode: i }, t.__panoPreviewMode = i, t.__panoPreviewNoPreview = m, t.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Oi(t, { keepMonitor: i === "stickers" }), lb(t, { ...n, mode: i, __panoForcedPath: o }), this.activeBackend = jc(t);
    },
    rebind(n = {}) {
      const i = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Oi(t, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Oi(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Sy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Oi(t, e = {}) {
  var d, m, y, p, x;
  if (!t) return;
  es.unregister(t), Sy(t);
  const n = !!t.__panoDomPreview, i = !!t.__panoLegacyPreviewHooked, o = typeof t.__panoDomRestore == "function", c = typeof t.__panoLegacyRestore == "function";
  try {
    (d = t.__panoDomRestore) == null || d.call(t);
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
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((M) => {
      if (M === (u == null ? void 0 : u.widget)) return !1;
      const k = String((M == null ? void 0 : M.name) || ""), I = String((M == null ? void 0 : M.type) || ""), C = Uc();
      return !(k === C || I === C || k === "pano_preview" || I === "pano_preview" || k === "preview" && I === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Qt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || o,
    removedLegacy: i || c,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || ko.unregister(t);
}
function Zr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Nf(t, e) {
  return Zr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ga(t, e) {
  return Zr(t.x * e, t.y * e, t.z * e);
}
function _c(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Mf(t, e) {
  return Zr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ma(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Zr(t.x / e, t.y / e, t.z / e);
}
function Vr(t, e) {
  const n = t * Xr, i = e * Xr, o = Math.cos(i);
  return Zr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function xl(t, e, n = 0) {
  const i = Vr(t, e), o = Zr(0, 1, 0);
  let c = Mf(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Zr(1, 0, 0)), c = ma(c);
  let u = ma(Mf(i, c));
  const d = n * Xr, m = Math.cos(d), y = Math.sin(d), p = Nf(ga(c, m), ga(u, y)), x = Nf(ga(c, -y), ga(u, m));
  return { fwd: i, right: ma(p), up: ma(x) };
}
function Ny(t, e = "#00ff00") {
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
  let i = null;
  if (t && typeof t == "object")
    i = t;
  else if (typeof t == "string") {
    const o = t.trim();
    if (!o) return n;
    try {
      i = JSON.parse(o);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const o = i;
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
function My(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Qa(t, "state_json")) == null ? void 0 : n.value) || "");
}
function vh(t) {
  var c;
  const e = My(t), n = String(((c = Qa(t, "bg_color")) == null ? void 0 : c.value) || "#1a1a1e"), i = t.__panoStateCache;
  if (i && i.source === e && i.bg === n)
    return i.parsed;
  const o = Ny(e, n);
  return t.__panoStateCache = { source: e, bg: n, parsed: o }, o;
}
function Qa(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function Pf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function _h(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Py(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
}
function wh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function xh(t, e, n = null) {
  var o, c;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((o = i == null ? void 0 : i.isSubgraphNode) != null && o.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Py(t == null ? void 0 : t.graph, n)), i;
}
function ky(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Sl(t, e = []) {
  const n = ky(t), i = [];
  return e.forEach((o) => {
    n.includes(String(o)) && i.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !i.includes(o) && i.push(o);
  }), i.length ? i : e;
}
function kf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function ts(t, e) {
  const n = kf(t), i = kf(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Cy(t, e = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const o = Sl(t, e).map((y) => n.findIndex((p) => String((p == null ? void 0 : p.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, p) => ({ input: y, idx: p })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...o, ...c])], d = [];
  for (const y of u) {
    const p = xh(t, y);
    if ((p == null ? void 0 : p.id) != null) {
      d.push(String(p.id));
      continue;
    }
    const x = (m = n[y]) == null ? void 0 : m.link;
    if (x == null) continue;
    const M = _h(t == null ? void 0 : t.graph, x), { originId: k } = wh(M);
    k != null && d.push(String(k));
  }
  return [...new Set(d)];
}
const es = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Qe) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var p, x, M, k, I;
        if (!c) return;
        const u = ts(i, c == null ? void 0 : c.id), m = Cy(c, ["erp_image", "bg_erp"]).some((C) => ts(i, C)), y = u ? "self" : m ? "upstream" : "global_executed";
        Qt(c, "exec-refresh", { executedId: i, reason: y }), Gc(c), Qt(c, "invalidate", { cachesCleared: !0 }), (x = (p = c.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || x.call(p), (M = c.setDirtyCanvas) == null || M.call(c, !0, !0), (I = (k = c.graph) == null ? void 0 : k.setDirtyCanvas) == null || I.call(k, !0, !0), Qt(c, "draw-request", {
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
  const i = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", i), t.subfolder && n.set("subfolder", String(t.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((c = Qe) == null ? void 0 : c.apiURL) == "function" ? Qe.apiURL(o) : o;
}
function Ay(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Iy(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const o = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: o, subfolder: c };
}
function Ey(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const o = String(i || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Sh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Ay(e)) return [e];
  const { filename: n, subfolder: i } = Iy(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => ns({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Ey([...o, e]);
}
function Ty(t) {
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
  const e = ve == null ? void 0 : ve.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
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
      const n = String(t[1] || "").trim(), i = String(t[2] || "output").trim() || "output";
      return ns({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Gn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ns(t);
}
function Nh(t, e) {
  var i;
  const n = String(t || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", c = new URL(n, o);
    return e > 0 && c.searchParams.set("pano_rev", String(e)), c.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return e > 0 ? `${n}${o}pano_rev=${e}` : n;
  }
}
function Ly(t) {
  const e = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function Dy(t, e) {
  try {
    const n = Ly(e);
    let i = "";
    for (const o of n)
      if (i = Gn(o), i) break;
    i ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(i || ""), Qt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: Nh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Qt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Qt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function Ry(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const i = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Bc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], d = i ? [i, ...c, ...u] : [...c, ...u];
  let m = "";
  for (const O of d)
    if (m = Gn(O), m) break;
  if (!m) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), x = Sh(m).map((O) => Nh(O, y));
  if (!x.length) return null;
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
    var O;
    t.__panoOwnOutputImageCache === k && k.pendingImg === I && k.pendingSrc === M && (k.src = M, k.img = I, k.pendingSrc = "", k.pendingImg = null), e == null || e(), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0);
  }, I.onerror = () => {
    if (C + 1 >= x.length) {
      t.__panoOwnOutputImageCache === k && k.pendingImg === I && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    F();
  }, k.pendingSrc = M, k.pendingImg = I, F(), k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : I;
}
function Oy(t, e = []) {
  var y, p;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = Sl(t, e), o = i.map((x) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(x))).filter((x) => x >= 0), c = n.map((x, M) => ({ input: x, idx: M })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...o, ...c])];
  Qt(t, "image-resolve", {
    inputCandidates: i,
    resolvedIndices: u,
    stage: "start"
  });
  for (const x of u) {
    const M = n[x], k = M == null ? void 0 : M.link;
    if (k == null) continue;
    const I = _h(t.graph, k), { originId: C, originSlot: F } = wh(I);
    if (C == null) continue;
    const O = xh(t, x, C);
    if (!O) continue;
    const L = Number(F || 0), V = Bc((O == null ? void 0 : O.id) ?? C), R = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (R.length) {
      const it = [];
      L >= 0 && L < R.length && it.push(R[L]), it.push(...R);
      for (const _t of it) {
        const H = Gn(_t);
        if (H)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: H, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let P = [];
    try {
      P = typeof (ve == null ? void 0 : ve.getNodeImageUrls) == "function" ? ve.getNodeImageUrls(O) || [] : [];
    } catch {
      P = [];
    }
    if (Array.isArray(P) && P.length) {
      const it = [];
      L >= 0 && L < P.length && it.push(P[L]), it.push(...P);
      for (const _t of it) {
        const H = Gn(_t);
        if (H)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: H, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const J = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (J.length) {
      const it = [];
      L >= 0 && L < J.length && it.push(J[L]), it.push(...J);
      for (const _t of it) {
        const H = Gn(_t);
        if (H)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: H, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const et = (y = O == null ? void 0 : O.widgets) == null ? void 0 : y.find((it) => String((it == null ? void 0 : it.name) || "").toLowerCase() === "image");
    if (et) {
      let it = Gn(et.value);
      if (it && !it.includes("/") && !it.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (it = Qe.apiURL(`/view?filename=${encodeURIComponent(it)}&type=input&subfolder=`)), it)
        return Qt(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: it, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const d = Bc(t == null ? void 0 : t.id), m = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && m.push(...d.pano_input_images), Array.isArray((p = d == null ? void 0 : d.ui) == null ? void 0 : p.pano_input_images) && m.push(...d.ui.pano_input_images), m.length > 0)
    for (const x of m) {
      const M = Gn(x);
      if (M)
        return Qt(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Qt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function Fy(t, e = []) {
  const n = Oy(t, e), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Sh(i);
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(c);
  if (u && u.srcRaw === i && u.img) return u.img;
  const d = new Image(), m = { srcRaw: i, resolvedSrc: "", img: d };
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
        src: i,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: o.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const x = o[y];
    m.resolvedSrc = x, d.src = x;
  };
  return d.onload = () => {
    var x;
    Qt(t, "image-load", {
      ok: !0,
      src: i,
      resolvedSrc: String(m.resolvedSrc || d.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1
    }), (x = t.setDirtyCanvas) == null || x.call(t, !0, !0);
  }, d.onerror = (x) => {
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
      src: i,
      resolvedSrc: String(m.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((x == null ? void 0 : x.type) || "error")
    });
  }, p(), d;
}
function rs(t, e = [], n = null) {
  const i = Fy(t, e);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
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
function Mh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, i = String(e || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function xr(t, e, n = "") {
  const i = Mh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = o, Qt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : i.isLoading ? o - Number(i.loadingSinceTs || 0) < vy ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, Qt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function Kc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || i)), u = n / o, d = i / c, m = Math.min(u, d);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function Cf(t, e, n = 1) {
  const i = Number((e == null ? void 0 : e.x) || 0), o = Number((e == null ? void 0 : e.y) || 0), c = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (c <= 0 || u <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), d + Math.round(14 * n)), p = i + (c - m) * 0.5, x = o + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(p, x, m, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", p + m * 0.5, x + y * 0.5 + 0.5), t.restore();
}
function fo(t, e, n = "Open editor and add frame") {
  var o;
  const i = (o = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : o.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = e ? "flex" : "none");
}
function $y(t) {
  var i;
  const e = Array.isArray(t == null ? void 0 : t.shots) ? t.shots : [];
  if (!e.length) return null;
  const n = String(((i = t == null ? void 0 : t.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const o = e.find((c) => String((c == null ? void 0 : c.id) || "") === n);
    if (o) return o;
  }
  return e[0] || null;
}
function Ph(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let d = o, m = o / u;
  return m > c && (m = c, d = c * u), {
    x: n + (o - d) * 0.5,
    y: i + (c - m) * 0.5,
    w: d,
    h: m
  };
}
function Hy(t, e, n, i = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = Ph(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (t.fillStyle = `rgba(0,0,0,${d})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Vy(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), i = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || i <= 1) return null;
  t.__panoWrappedErpCache || (t.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === i) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = i;
  const d = u.getContext("2d");
  return d ? (d.drawImage(e, 0, 0, n, i), d.drawImage(e, n, 0, n, i), t.__panoWrappedErpCache = { src: o, w: n, h: i, canvas: u }, u) : null;
}
function zy(t, e = null) {
  const i = Array.isArray(t.widgets) ? t.widgets : [];
  let o = 32;
  return i.forEach((c) => {
    var d;
    if (c === e || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const m = typeof c.computeSize == "function" ? c.computeSize(((d = kr(t)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (u = Number(m[1]));
    } catch {
      u = 22;
    }
    o += u;
  }), o;
}
function Wc(t) {
  const n = zy(t) + 2, i = 8, o = kr(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: i, y: n, w: c, h: u };
}
function kh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(e || "");
  if (!i) return null;
  const o = Ty(n);
  if (!o) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(o);
  if (c != null && c.img)
    return t.__panoPreviewImageCache.set(i, { src: o, img: c.img }), c.img;
  const u = t.__panoPreviewImageCache.get(i);
  if (u && u.src === o) return u.img;
  const d = new Image();
  return d.src = o, d.onload = () => {
    var m;
    return (m = t.setDirtyCanvas) == null ? void 0 : m.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(o, { img: d }), t.__panoPreviewImageCache.set(i, { src: o, img: d }), d;
}
function Uy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Ch(t, e) {
  return Ho(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Ah(t, e, n) {
  return zc(e, (i, o) => kh(t, i, o), { scene: n });
}
function jy(t, e, n, i = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (d) => {
    const m = d.x - o, y = d.y - c, p = Math.hypot(m, y) || 1;
    return { x: d.x + m / p * i, y: d.y + y / p * i };
  };
  return [u(t), u(e), u(n)];
}
function is(t, e, n, i, o, c, u, d) {
  const m = n.x * (i.y - o.y) + i.x * (o.y - n.y) + o.x * (n.y - i.y);
  if (Math.abs(m) < 1e-6) return;
  const [y, p, x] = jy(c, u, d, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(x.x, x.y), t.closePath(), t.clip();
  const M = (c.x * (i.y - o.y) + u.x * (o.y - n.y) + d.x * (n.y - i.y)) / m, k = (c.x * (o.x - i.x) + u.x * (n.x - o.x) + d.x * (i.x - n.x)) / m, I = (c.x * (i.x * o.y - o.x * i.y) + u.x * (o.x * n.y - n.x * o.y) + d.x * (n.x * i.y - i.x * n.y)) / m, C = (c.y * (i.y - o.y) + u.y * (o.y - n.y) + d.y * (n.y - i.y)) / m, F = (c.y * (o.x - i.x) + u.y * (n.x - o.x) + d.y * (i.x - n.x)) / m, O = (c.y * (i.x * o.y - o.x * i.y) + u.y * (o.x * n.y - n.x * o.y) + d.y * (n.x * i.y - i.x * n.y)) / m;
  t.transform(M, C, k, F, I, O), t.drawImage(e, 0, 0), t.restore();
}
function Ih(t, e, n, i) {
  const o = _c(t, e.right), c = _c(t, e.up), u = _c(t, e.fwd);
  if (u <= 1e-4) return null;
  const d = c / u / i, m = o / u / i;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Eh(t, e, n, i, o, c, u, d = 12, m = 9) {
  var nt;
  const y = j(Number(u.hFOV_deg || 30), 1, 179) * Xr, p = j(Number(u.vFOV_deg || 30), 1, 179) * Xr, x = Math.tan(y * 0.5), M = Math.tan(p * 0.5), k = u.crop || {}, I = j(Number(k.x0 ?? 0), 0, 1), C = j(Number(k.y0 ?? 0), 0, 1), F = j(Number(k.x1 ?? 1), 0, 1), O = j(Number(k.y1 ?? 1), 0, 1), L = Math.max(1e-4, F - I), V = Math.max(1e-4, O - C), R = xl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), P = [], J = [], et = [], it = [];
  for (let G = 0; G <= m; G++) {
    const ot = G / m, ut = (1 - (C + ot * V) * 2) * M;
    for (let kt = 0; kt <= d; kt++) {
      const Et = kt / d, Nt = ((I + Et * L) * 2 - 1) * x, Bt = R.fwd.x + R.right.x * Nt + R.up.x * ut, pe = R.fwd.y + R.right.y * Nt + R.up.y * ut, ge = R.fwd.z + R.right.z * Nt + R.up.z * ut, U = Math.hypot(Bt, pe, ge) || 1e-8, Mt = Bt / U, St = pe / U, $t = ge / U, Rt = Mt * i.right.x + St * i.right.y + $t * i.right.z, Vt = Mt * i.up.x + St * i.up.y + $t * i.up.z, A = Mt * i.fwd.x + St * i.fwd.y + $t * i.fwd.z;
      if (A <= 1e-4)
        P[G] || (P[G] = []), J[G] || (J[G] = []), P[G][kt] = null, J[G][kt] = null;
      else {
        const D = Vt / A / o, z = Rt / A / o;
        P[G] || (P[G] = []), J[G] || (J[G] = []), P[G][kt] = n.x + n.w * 0.5 + z * n.h * 0.5, J[G][kt] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      et[G] || (et[G] = []), it[G] || (it[G] = []), et[G][kt] = Et, it[G][kt] = ot;
    }
  }
  const _t = (nt = c.assets) == null ? void 0 : nt[u.asset_id], H = kh(e, u.asset_id, _t);
  if (!H || !H.complete || !H.naturalWidth) return;
  const q = Number(H.naturalWidth || H.width || 1), lt = Number(H.naturalHeight || H.height || 1), ht = d < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = ht;
  for (let G = 0; G < m; G++)
    for (let ot = 0; ot < d; ot++) {
      const at = P[G][ot], ut = J[G][ot], kt = P[G][ot + 1], Et = J[G][ot + 1], X = P[G + 1][ot], Nt = J[G + 1][ot], Bt = P[G + 1][ot + 1], pe = J[G + 1][ot + 1];
      if (at === null || kt === null || X === null || Bt === null) continue;
      const ge = et[G][ot] * q, U = it[G][ot] * lt, Mt = et[G][ot + 1] * q, St = it[G][ot + 1] * lt, $t = et[G + 1][ot] * q, Rt = it[G + 1][ot] * lt, Vt = et[G + 1][ot + 1] * q, A = it[G + 1][ot + 1] * lt;
      is(t, H, { x: ge, y: U }, { x: Mt, y: St }, { x: Vt, y: A }, { x: at, y: ut }, { x: kt, y: Et }, { x: Bt, y: pe }), is(t, H, { x: ge, y: U }, { x: Vt, y: A }, { x: $t, y: Rt }, { x: at, y: ut }, { x: Bt, y: pe }, { x: X, y: Nt });
    }
}
function By(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const i = vh(t), o = Wc(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = xl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Xr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const d = rs(
    t,
    Sl(t, ["erp_image", "bg_erp"]),
    () => {
      var R;
      return (R = t.setDirtyCanvas) == null ? void 0 : R.call(t, !0, !1);
    }
  ), m = !!(d && d.complete && (d.naturalWidth || d.width)), y = Dh(t), p = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = y || p, M = Hi, k = Ch(t, i), I = Ah(t, i, k), C = wl(t.__panoPreviewView), F = m ? Ui({
    owner: t,
    cacheKey: "runtime_panorama_scene",
    ctx: e,
    rect: o,
    backgroundSource: d,
    backgroundRevision: [
      String(d.currentSrc || d.src || ""),
      Number(d.naturalWidth || d.width || 0),
      Number(d.naturalHeight || d.height || 0)
    ].join("|"),
    textures: I,
    scene: k,
    view: C
  }) : !1, O = x ? 8 : 12, L = x ? 6 : 9, V = Uy(t, i);
  if (!m || V.length === 0) {
    const R = Kc(e == null ? void 0 : e.canvas, o);
    Th(e, o, c, u, R);
  }
  !F && m && os(t, e, o, c, u, d, M), !F && V.length > 0 && V.forEach((R) => Eh(e, t, o, c, u, i, R, O, L)), e.restore();
}
function za(t, e, n, i) {
  var c, u, d, m, y, p;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = t == null ? void 0 : t.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && e)
    try {
      const x = i.convertEventToCanvasOffset(e);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((d = t == null ? void 0 : t.pos) == null ? void 0 : d[0]) || 0),
          y: Number(x[1]) - Number(((m = t == null ? void 0 : t.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((p = t == null ? void 0 : t.pos) == null ? void 0 : p[1]) || 0)
    };
  const o = Ky(t, e, i);
  return o || null;
}
function Gy(t, e) {
  var x, M;
  const n = Number(t == null ? void 0 : t.clientX), i = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const o = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, c = (x = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : x.call(o), u = (e == null ? void 0 : e.ds) || ((M = ve == null ? void 0 : ve.canvas) == null ? void 0 : M.ds);
  if (!c || !u) return null;
  const d = Number(u.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const m = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / d - Number(m[0] || 0), p = (i - Number(c.top || 0)) / d - Number(m[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(p) ? null : { x: y, y: p };
}
function Ky(t, e, n) {
  var o, c;
  const i = Gy(e, n || (ve == null ? void 0 : ve.canvas));
  return i ? {
    x: i.x - Number(((o = t == null ? void 0 : t.pos) == null ? void 0 : o[0]) || 0),
    y: i.y - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function ya(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Qt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: kr(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", gh(t, 320, 180), Si(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, k;
    const x = e ? e.apply(this, arguments) : void 0;
    try {
      const I = arguments[0];
      I && !((M = this.flags) != null && M.collapsed) && (i.stepInertia(performance.now()) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), By(this, I, i));
    } catch {
    }
    return x;
  }, t.onResize = function() {
    var M;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, as(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Rh(this, 220, null), x;
  };
  const i = Ss({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (x) => {
      t.__panoPreviewView = x;
    },
    onInteraction: () => {
      var x;
      Lh(t), (x = t.setDirtyCanvas) == null || x.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(x, M, k) {
    var I;
    try {
      if (!((I = this.flags) != null && I.collapsed)) {
        const C = za(this, x, M, k) || { x: 0, y: 0 }, F = kr(this), O = Number((F == null ? void 0 : F[0]) || 0), L = Number((F == null ? void 0 : F[1]) || 0);
        if (C.x >= O - 20 && C.y >= L - 20)
          return o ? o.apply(this, arguments) : void 0;
        const R = Wc(this);
        if (Pf(C.x, C.y, R))
          return (x == null ? void 0 : x.button) === 0 && i.startDrag(C.x, C.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(x, M, k) {
    try {
      const I = za(this, x, M, k);
      if (i.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return i.endDrag(), !0;
        const C = I || i.state.drag;
        return i.moveDrag(C.x, C.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = t.onMouseUp;
  t.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const d = t.onMouseLeave;
  t.onMouseLeave = function() {
    const x = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), x;
  };
  const m = t.onMouseWheel;
  t.onMouseWheel = function(x, M, k) {
    var I, C;
    try {
      if ((I = this.flags) != null && I.collapsed) return m ? m.apply(this, arguments) : void 0;
      const F = za(this, x, M, k), O = Wc(this);
      if (!F || !Pf(F.x, F.y, O)) return m ? m.apply(this, arguments) : void 0;
      const L = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return i.applyWheel(Math.sign(L)) && ((C = this.setDirtyCanvas) == null || C.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, p = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = o, t.onMouseMove = c, t.onMouseUp = u, t.onMouseLeave = d, t.onMouseWheel = m, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = p, t.onRemoved = function() {
    return p(), ko.unregister(this), es.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Wy(t, e) {
  const n = rs(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var u, d;
      return (d = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : d.call(u);
    }
  ), i = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), o = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
  if (i > 1 && o > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(i)),
      height: Math.max(1, Math.round(o))
    };
  const c = Math.max(1, Number((e == null ? void 0 : e.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: c,
    height: Math.max(1, Math.round(c * 0.5))
  };
}
function qy(t, e) {
  var y, p, x, M, k, I, C, F, O, L, V, R;
  const n = (p = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : p.strokes, i = (M = (x = e == null ? void 0 : e.painting) == null ? void 0 : x.mask) == null ? void 0 : M.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!o && !c) return null;
  const u = Wy(t, e), d = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== d) && (t.__panoPreviewPaintEngine = Hc(u), t.__panoPreviewPaintDescriptorKey = d, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: i || null,
    groups: ((k = e == null ? void 0 : e.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((I = e == null ? void 0 : e.painting) == null ? void 0 : I.raster_objects) || null
  };
  return (((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.paint) !== m.paint || ((F = t.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== m.mask || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== m.groups || ((L = t.__panoPreviewPaintRevision) == null ? void 0 : L.rasterObjects) !== m.rasterObjects) && (t.__panoPreviewPaintRevision = m, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((V = e == null ? void 0 : e.painting) == null ? void 0 : V.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Yy(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function Xy(t, e) {
  const n = qy(t, e);
  if (!n) return null;
  const i = Yy(e);
  return n.getErpTarget(i).displayPaint.canvas;
}
function Zy(t, e, n = null) {
  var d;
  const i = (d = e == null ? void 0 : e.painting_layer) == null ? void 0 : d.paint, o = Gn(i);
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
function Af(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const d = Zy(t, e, () => {
      var m, y;
      return (y = (m = t.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || d.currentSrc || d.src || "")
      };
  }
  const o = Xy(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Jy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Qy(t, e, n, i) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== i) && (o = document.createElement("canvas"), o.width = n, o.height = i, t[e] = o), o;
}
function tb(t, e, n, i, o, c) {
  if (!e || !n || !(i > 0) || !(o > 0)) return;
  const u = Jy(n);
  if (u.width === i && u.height === o) {
    e.drawImage(n, 0, 0, i, o);
    return;
  }
  const m = Qy(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    e.drawImage(n, 0, 0, i, o);
    return;
  }
  try {
    m.clearRect(0, 0, u.width, u.height), m.drawImage(n, 0, 0, u.width, u.height);
    const y = m.getImageData(0, 0, u.width, u.height).data, p = e.getImageData(0, 0, i, o), x = p.data, M = Math.max(0, u.width - 1), k = Math.max(0, u.height - 1);
    for (let I = 0; I < o; I += 1) {
      const C = (I + 0.5) * u.height / o - 0.5, F = j(Math.floor(C), 0, k), O = j(F + 1, 0, k), L = j(C - F, 0, 1);
      for (let V = 0; V < i; V += 1) {
        const R = (V + 0.5) * u.width / i - 0.5, P = j(Math.floor(R), 0, M), J = j(P + 1, 0, M), et = j(R - P, 0, 1);
        let it = 0, _t = 0, H = 0, q = 0;
        const lt = (G, ot, at) => {
          const ut = (ot * u.width + G) * 4, kt = (y[ut + 3] || 0) / 255;
          it += kt * at, _t += (y[ut] || 0) / 255 * kt * at, H += (y[ut + 1] || 0) / 255 * kt * at, q += (y[ut + 2] || 0) / 255 * kt * at;
        };
        if (lt(P, F, (1 - et) * (1 - L)), lt(J, F, et * (1 - L)), lt(P, O, (1 - et) * L), lt(J, O, et * L), it <= 1e-6) continue;
        const ht = (I * i + V) * 4, nt = 1 - it;
        x[ht] = Math.round(j((_t + x[ht] / 255 * nt) * 255, 0, 255)), x[ht + 1] = Math.round(j((H + x[ht + 1] / 255 * nt) * 255, 0, 255)), x[ht + 2] = Math.round(j((q + x[ht + 2] / 255 * nt) * 255, 0, 255)), x[ht + 3] = 255;
      }
    }
    e.putImageData(p, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, i, o);
  }
}
function If(t, e, n, i) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), d = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${i}`;
  let m = t.__panoPreviewBgPaint;
  if (!m || m.__revKey !== d || m.width !== o || m.height !== c) {
    (!m || m.width !== o || m.height !== c) && (m = document.createElement("canvas"), m.width = o, m.height = c, t.__panoPreviewBgPaint = m);
    const y = m.getContext("2d");
    y.clearRect(0, 0, o, c), y.drawImage(e, 0, 0, o, c), tb(t, y, n, o, c, "__panoPreviewOverlayScratch"), m.__revKey = d;
  }
  return m;
}
function eb(t, e, n, i = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  Mh(t, o);
  const c = vh(t), u = o === "cutout" ? Ry(t, () => {
    var C, F;
    return (F = (C = t.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : F.call(C);
  }) : null, d = !!(u && u.complete && (u.naturalWidth || u.width)), m = e.parentElement, y = 1, p = Math.max(1, Number((m == null ? void 0 : m.clientWidth) || e.clientWidth || 0)), x = Math.max(1, Number((m == null ? void 0 : m.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(p * y)), k = Math.max(64, Math.round(x * y)), I = e.getContext("2d");
  if (I)
    if (o === "cutout") {
      const C = $y(c), F = rs(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var nt, G;
          return (G = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : G.call(nt);
        }
      ), O = !!(F && F.complete && (F.naturalWidth || F.width));
      (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const L = { x: 0, y: 0, w: M, h: k }, V = d ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : O ? j(Number((F.naturalWidth || F.width) / Math.max(1, Number(F.naturalHeight || F.height || 1))), 0.05, 20) : 1, R = C ? ki(C) : null, P = j(Number((R == null ? void 0 : R.aspect) || V || 1), 0.05, 20), J = Ph(L, P), et = Kc(e, L);
      I.setTransform(1, 0, 0, 1, 0, 0), I.fillStyle = "#070707", I.fillRect(0, 0, M, k);
      const it = t == null ? void 0 : t.__panoCutoutPreviewSurface, _t = (it == null ? void 0 : it.source) || null;
      if (!!(_t && Number(_t.width || 0) > 1 && Number(_t.height || 0) > 1)) {
        I.drawImage(_t, J.x, J.y, J.w, J.h), fo(t, !1), xr(t, !1, "");
        return;
      }
      let q = "none", lt = "Open editor and add frame", ht = "";
      if (d)
        I.drawImage(u, J.x, J.y, J.w, J.h);
      else if (ht = String((F == null ? void 0 : F.src) || ""), C)
        F && !O ? q = "loading" : O ? (q = "empty", lt = "Open editor or run node") : (q = "empty", lt = "Connect ERP image");
      else {
        if (O) {
          const nt = Af(t, c), G = nt != null && nt.source ? If(t, F, nt.source, nt.revision || "") : F;
          Hy(I, G, L, 0.44);
        }
        q = "empty", lt = "Open editor and add frame";
      }
      q === "loading" ? (Cf(I, J, et), fo(t, !1), xr(t, !0, ht)) : q === "empty" ? (fo(t, !0, lt), xr(t, !1, "")) : (fo(t, !1), xr(t, !1, ""));
    } else {
      fo(t, !1), (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const C = { x: 0, y: 0, w: M, h: k }, F = Kc(e, C);
      I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, M, k), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = xl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), L = Math.tan(Number(t.__panoPreviewView.fov || 100) * Xr * 0.5), V = rs(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var nt, G;
          return (G = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : G.call(nt);
        }
      ), R = !!(V && V.complete && (V.naturalWidth || V.width));
      I.fillStyle = "#1a1a1e", I.fillRect(0, 0, M, k);
      const P = Ch(t, c), J = Ah(t, c, P), et = wl(t.__panoPreviewView), it = Af(t, c), _t = (it == null ? void 0 : it.source) || null, H = R && _t ? If(t, V, _t, (it == null ? void 0 : it.revision) || "") : V, q = H !== V ? String(H.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "", lt = R ? Ui({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: I,
        rect: C,
        backgroundSource: H,
        backgroundRevision: q,
        textures: J,
        scene: P,
        view: et
      }) : !1, ht = P.stickers;
      if (R && lt)
        xr(t, !1, "");
      else if (R)
        os(t, I, C, O, L, H, Hi), xr(t, !1, "");
      else if (_t)
        os(t, I, C, O, L, _t, Hi), xr(t, !!V && !R, String((V == null ? void 0 : V.src) || ""));
      else {
        const nt = !!V && !R;
        xr(t, nt, String((V == null ? void 0 : V.src) || "")), nt && Cf(I, C, F);
      }
      if ((!R || ht.length === 0) && Th(I, C, O, L, F), !lt && ht.length > 0) {
        const nt = Dh(t), G = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, ot = nt || G, at = ot ? 8 : 12, ut = ot ? 6 : 9;
        ht.forEach((kt) => Eh(I, t, C, O, L, c, kt, at, ut));
      } else if (!V || !R) {
        const nt = Math.max(14, Math.round(16 * F));
        I.fillStyle = "rgba(212,212,216,0.85)", I.font = `600 ${nt}px Plus Jakarta Sans, Geist, sans-serif`, I.textAlign = "center", I.fillText("Open editor to add stickers", M * 0.5, k * 0.5 + 24 * F);
      }
    }
}
function os(t, e, n, i, o, c, u = vc) {
  if (!(!!c && (typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas || typeof ImageBitmap < "u" && c instanceof ImageBitmap) || !!c && c.complete && (c.naturalWidth || c.width))) return;
  const y = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (B1({
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
  const k = Vy(t, c) || c, I = Math.max(4, Number((u == null ? void 0 : u.Nu) || vc.Nu)), C = Math.max(4, Number((u == null ? void 0 : u.Nv) || vc.Nv)), F = I <= Hi.Nu && C <= Hi.Nv ? 0.24 : I >= Sf.Nu && C >= Sf.Nv ? 0.42 : 0.34, O = [], L = [];
  for (let J = 0; J <= C; J++)
    O[J] = [], L[J] = [];
  const V = n.x + n.w * 0.5, R = n.y + n.h * 0.5, P = n.h * 0.5;
  for (let J = 0; J <= C; J++) {
    const et = n.y + n.h * J / C, it = (R - et) / P * o;
    for (let _t = 0; _t <= I; _t++) {
      const H = n.x + n.w * _t / I, q = (H - V) / P * o, lt = i.fwd.x + i.right.x * q + i.up.x * it, ht = i.fwd.y + i.right.y * q + i.up.y * it, nt = i.fwd.z + i.right.z * q + i.up.z * it, G = Math.hypot(lt, ht, nt) || 1e-8, ot = lt / G, at = ht / G, ut = nt / G, kt = Math.atan2(ot, ut), Et = Math.asin(j(at, -1, 1));
      let X = (kt / (2 * Math.PI) + 0.5) * p;
      for (; X < 0; ) X += p;
      for (; X >= p; ) X -= p;
      const Nt = (0.5 - Et / Math.PI) * x;
      O[J][_t] = { x: H, y: et }, L[J][_t] = { x: X, y: Nt };
    }
  }
  e.save(), e.__panoTriExpandPx = F, e.globalAlpha = 1;
  for (let J = 0; J < C; J += 1)
    for (let et = 0; et < I; et += 1) {
      const it = O[J][et], _t = O[J][et + 1], H = O[J + 1][et], q = O[J + 1][et + 1];
      if (!it || !_t || !H || !q) continue;
      const lt = { ...L[J][et] }, ht = { ...L[J][et + 1] }, nt = { ...L[J + 1][et] }, G = { ...L[J + 1][et + 1] }, ot = Math.min(lt.x, ht.x, nt.x, G.x);
      Math.max(lt.x, ht.x, nt.x, G.x) - ot > p * 0.5 && [lt, ht, nt, G].forEach((ut) => {
        ut.x < p * 0.5 && (ut.x += p);
      }), is(e, k, lt, ht, G, it, _t, q), is(e, k, lt, G, nt, it, q, H);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function Ef(t, e, n, i, o, c, u = 1) {
  let d = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const m of e) {
    const y = Ih(m, n, i, o);
    if (!y) {
      d = !1;
      continue;
    }
    d ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), d = !0);
  }
  t.stroke();
}
function Th(t, e, n, i, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const p = [];
    for (let x = -180; x <= 180; x += 15) p.push(Vr(x, y));
    Ef(t, p, n, e, i, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const p = [];
    for (let x = -89; x <= 89; x += 15) p.push(Vr(y, x));
    Ef(t, p, n, e, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Vr(0, 0) },
    { name: "Right", dir: Vr(90, 0) },
    { name: "Back", dir: Vr(180, 0) },
    { name: "Left", dir: Vr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * o));
  t.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", d.forEach((y) => {
    const p = Ih(y.dir, n, e, i);
    p && t.fillText(y.name, p.x, p.y + 20 * o);
  }), t.restore();
}
function nb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Lh(t) {
  const e = nb(t);
  e.dragging = !1, e.hqFrames = by;
}
function as(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Dh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function rb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function ib(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const i = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!i) return !1;
  const o = Number(t.clientX) - Number(i.left || 0), c = Number(t.clientY) - Number(i.top || 0);
  return o >= i.width - n && c >= i.height - n;
}
function yi(t, e) {
  return ib(t, e) ? !1 : (rb(t), !0);
}
function ob() {
  var n;
  const t = (n = ve == null ? void 0 : ve.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function ab(t) {
  var n;
  if (!t) return;
  const e = (n = ve == null ? void 0 : ve.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function sb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const i = kr(t), o = Number((i == null ? void 0 : i[0]) || 0), c = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(o) || !Number.isFinite(c) || o >= e && c >= n) return;
  const u = [Math.max(e, o), Math.max(n, c)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Qt(t, "size.bootstrap", { from: [o, c], to: u });
  } catch (d) {
    Qt(t, "size.bootstrap.error", { message: String((d == null ? void 0 : d.message) || d || "unknown") });
  }
}
function cb(t, e = 0, n = null, i = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Tf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, as(t, 150), e == null || e(), Rh(t, 180, e);
    }
  };
}
function Rh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    t.__panoResizeSettleTimer = null, n == null || n(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function Si(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function lb(t, e = {}) {
  var Et;
  const n = e.__allowStandalone === !0, i = xy(t);
  if (i && !n) {
    Qt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: mh(t) });
    return;
  }
  i && sb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", es.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const d = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || ko.unregister(t);
  const m = String(e.__panoForcedPath || "").trim(), y = o ? yh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Wr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (m === "dom" || m === "legacy_draw") && (y.chosenPath = m, y.reason = "controller_target_backend");
  const p = o ? y.chosenPath : "dom", x = y.signature || Wr(t), M = Number(t.__panoRebindGeneration || 0), k = jc(t);
  if (Qt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: d,
    mode: t.__panoPreviewMode,
    legacyFrontend: p === "legacy_draw",
    activeBackend: k,
    targetBackend: p,
    chosenPath: p,
    pathReason: y.reason,
    signature: x,
    generation: M,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: kr(t)
  }), t.__panoFrontendSig = x, t.__panoStickersPath = p, o && ko.register(t), o && p === "legacy_draw") {
    if (c) return;
    Oi(t, { keepMonitor: !0 }), ya(t);
    return;
  }
  if ((Et = t.__panoDomPreview) != null && Et.widget) return;
  if (t.__panoLegacyPreviewHooked && Oi(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    o && !c && ya(t);
    return;
  }
  const I = e.noPreview === !0, C = o || I ? 0 : 56, F = document.createElement("div");
  if (_y(), F.className = "pano-node-preview-dom", F.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), I && F.classList.add("pano-node-preview--no-preview"), F.setAttribute("data-capture-wheel", "true"), F.setAttribute("tabindex", "-1"), F.style.cssText = [
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
    const X = t.addDOMWidget(Uc(), "preview", F, Tf(t, null));
    Si(t), t.__panoDomPreview = { widget: X, root: F, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", O.appendChild(L), O.appendChild(V), F.appendChild(O), gh(t, 120, 120), Si(t);
  let R = null;
  try {
    cb(t, C, () => {
      var X, Nt;
      return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
    }), R = t.addDOMWidget(
      Uc(),
      "preview",
      F,
      Tf(t, () => {
        var X, Nt;
        return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
      }, C)
    );
  } catch {
    o && ya(t);
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
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(_t));
  }, et = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    as(t, 150), J();
  }) : null;
  et == null || et.observe(O);
  const it = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const X = 3, Nt = (Bt) => {
      requestAnimationFrame(() => {
        var ge;
        const pe = !!(F != null && F.isConnected && (O != null && O.isConnected) && (L != null && L.isConnected) && Number(O.clientHeight || 0) > 0 && Number(L.clientHeight || 0) > 0);
        if (!pe && Bt < X) {
          Nt(Bt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Qt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: pe ? "dom_ok" : "dom_fail",
          wrapH: Number((O == null ? void 0 : O.clientHeight) || 0),
          canvasH: Number((L == null ? void 0 : L.clientHeight) || 0),
          attempt: Bt
        }), !pe) {
          if (c) {
            Qt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((O == null ? void 0 : O.clientHeight) || 0),
              canvasH: Number((L == null ? void 0 : L.clientHeight) || 0)
            });
            return;
          }
          Qt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Oi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ya(t), (ge = t.setDirtyCanvas) == null || ge.call(t, !0, !0);
        }
      });
    };
    Nt(1);
  }, _t = (X) => {
    var Bt, pe, ge;
    P.raf = 0;
    const Nt = H.stepInertia(X);
    (P.needsDraw || Nt) && (P.needsDraw = !1, (Bt = t.flags) != null && Bt.collapsed || eb(t, L, null, H), (pe = t.setDirtyCanvas) == null || pe.call(t, !0, !1)), (Nt || P.needsDraw) && (P.raf = requestAnimationFrame(_t)), ph() && (!t.__panoDebugLastTs || X - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = X, Qt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: kr(t),
      root: uo(F),
      wrap: uo(O),
      canvas: uo(L),
      rootParent: uo(F.parentElement),
      rootGrandParent: uo((ge = F.parentElement) == null ? void 0 : ge.parentElement),
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
    yi(X, O) && u && X.button === 0 && ((Nt = F.focus) == null || Nt.call(F), (Bt = L.setPointerCapture) == null || Bt.call(L, X.pointerId), L.style.cursor = "grabbing", H.startDrag(X.clientX, X.clientY, X.pointerId));
  }), L.addEventListener("pointermove", (X) => {
    !u || !H.state.drag.active || (yi(X, O), H.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const q = (X) => {
    var Nt;
    !u || !H.state.drag.active || (yi(X, O), (Nt = L.releasePointerCapture) == null || Nt.call(L, X.pointerId), L.style.cursor = "grab", H.endDrag(), Lh(t), J());
  };
  L.addEventListener("pointerup", q), L.addEventListener("pointercancel", q), L.addEventListener("pointerleave", (X) => {
    H.state.drag.active && q(X);
  });
  const lt = (X) => {
    var Bt, pe, ge;
    if (Qt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !yi(X, O) || !u) return;
    const Nt = ob();
    H.applyWheelEvent(X) && J(), (Bt = X.preventDefault) == null || Bt.call(X), (pe = X.stopPropagation) == null || pe.call(X), (ge = X.stopImmediatePropagation) == null || ge.call(X), requestAnimationFrame(() => {
      var U, Mt;
      ab(Nt), (Mt = (U = ve == null ? void 0 : ve.canvas) == null ? void 0 : U.setDirty) == null || Mt.call(U, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    O.addEventListener(X, lt, { passive: !1, capture: !0 }), L.addEventListener(X, lt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    L.addEventListener(X, (Nt) => yi(Nt, O)), O.addEventListener(X, (Nt) => yi(Nt, O));
  });
  const ht = Qa(t, "state_json");
  if (ht && !ht.__panoPreviewPatchedCb) {
    ht.__panoPreviewPatchedCb = !0;
    const X = ht.callback;
    ht.callback = (Nt) => {
      const Bt = X ? X(Nt) : void 0;
      return J(), Bt;
    };
  }
  const nt = Qa(t, "bg_color");
  if (nt && !nt.__panoPreviewPatchedCb) {
    nt.__panoPreviewPatchedCb = !0;
    const X = nt.callback;
    nt.callback = (Nt) => {
      const Bt = X ? X(Nt) : void 0;
      return J(), Bt;
    };
  }
  const G = t.onRemoved, ot = t.onResize, at = t.onExecuted;
  t.onExecuted = function(X) {
    Dy(t, X), Gc(t), Si(t), J();
    const Nt = at ? at.apply(this, arguments) : void 0;
    return Si(t), Nt;
  };
  const ut = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Gc(t), Si(t), J(), ut ? ut.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var Nt;
    const X = ot ? ot.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, as(this, 150), J(), (Nt = this.setDirtyCanvas) == null || Nt.call(this, !0, !1), X;
  }, t.onRemoved = function() {
    return kt(), ko.unregister(this), es.unregister(this), G ? G.apply(this, arguments) : void 0;
  };
  const kt = () => {
    var X;
    P.raf && cancelAnimationFrame(P.raf), (X = et == null ? void 0 : et.disconnect) == null || X.call(et), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = ot, t.onExecuted = at, t.onConnectionsChange = ut, t.onRemoved = G;
  };
  t.__panoDomRestore = kt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: R, root: F, canvas: L, requestDraw: J, state: P, emptyHintEl: V }, it(), J();
}
function Lf(t, e = {}) {
  bh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const ss = Math.PI / 180;
function Jr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Df(t, e) {
  return Jr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ba(t, e) {
  return Jr(t.x * e, t.y * e, t.z * e);
}
function Rf(t, e) {
  return Jr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function va(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Jr(t.x / e, t.y / e, t.z / e);
}
function ub(t, e) {
  const n = t * ss, i = e * ss, o = Math.cos(i);
  return Jr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function fb(t, e, n = 0) {
  const i = ub(t, e), o = Jr(0, 1, 0);
  let c = Rf(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Jr(1, 0, 0)), c = va(c);
  const u = va(Rf(i, c)), d = n * ss, m = Math.cos(d), y = Math.sin(d), p = Df(ba(c, m), ba(u, y)), x = Df(ba(c, -y), ba(u, m));
  return { fwd: i, right: va(p), up: va(x) };
}
const _a = 140, db = 180, Of = 40, wc = 10;
function Ff(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function $f(t, e) {
  const n = Ff(t), i = Ff(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Hf(t) {
  var c;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "").trim();
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const i = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", i), t.subfolder && n.set("subfolder", String(t.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((c = Qe) == null ? void 0 : c.apiURL) == "function" ? Qe.apiURL(o) : o;
}
function Co(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Co(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Hf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const i = Co(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Hf(t);
}
function Vf(t) {
  var o;
  const e = (o = pn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
  if (e instanceof Map) {
    for (const c of e.keys())
      if ($f(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if ($f(c, n)) return e[c];
  return null;
}
function hb(t, e = "erp_image") {
  var I, C, F, O, L, V, R, P, J, et, it, _t;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let i = null;
  const o = n.find((H) => String((H == null ? void 0 : H.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (i = o.link), i == null) {
    const H = n.find((q) => String((q == null ? void 0 : q.type) || "").toUpperCase() === "IMAGE" && (q == null ? void 0 : q.link) != null);
    (H == null ? void 0 : H.link) != null && (i = H.link);
  }
  if (i == null) return "";
  const c = ((C = (I = t == null ? void 0 : t.graph) == null ? void 0 : I.links) == null ? void 0 : C[i]) || ((L = (O = (F = pn) == null ? void 0 : F.graph) == null ? void 0 : O.links) == null ? void 0 : L[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const d = (P = (R = (V = pn) == null ? void 0 : V.graph) == null ? void 0 : R.getNodeById) == null ? void 0 : P.call(R, u), m = Vf(u), y = Vf(t == null ? void 0 : t.id), p = [
    m == null ? void 0 : m.images,
    (J = m == null ? void 0 : m.ui) == null ? void 0 : J.pano_input_images,
    m == null ? void 0 : m.pano_input_images,
    (et = y == null ? void 0 : y.ui) == null ? void 0 : et.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const H of p)
    if (Array.isArray(H))
      for (const q of H) {
        const lt = Co(q);
        if (lt) return lt;
      }
  let x = [];
  try {
    x = typeof ((it = pn) == null ? void 0 : it.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(d) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const H of x) {
      const q = Co(H);
      if (q) return q;
    }
  if (d) {
    const H = Array.isArray(d == null ? void 0 : d.imgs) ? d.imgs : [];
    for (const q of H) {
      const lt = Co(q);
      if (lt) return lt;
    }
  }
  const M = (_t = d == null ? void 0 : d.widgets) == null ? void 0 : _t.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image"), k = String((M == null ? void 0 : M.value) || "").trim();
  return k ? Qe.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function zf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Uf(t, e, n, i, o, c) {
  if (e.clearRect(0, 0, n, i), e.fillStyle = "#070707", e.fillRect(0, 0, n, i), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || i <= 1) {
    zf(e, n, i);
    return;
  }
  const u = fb(Number(o.yaw || 0), Number(o.pitch || 0), 0), d = Math.tan(Number(o.fov || 100) * ss * 0.5);
  Ui({
    owner: t,
    cacheKey: "standalone_preview_scene",
    ctx: e,
    width: n,
    height: i,
    backgroundSource: c,
    backgroundRevision: [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|"),
    textures: [],
    scene: Ho(null, {}),
    view: yy(o)
  }) || (os(t, e, { x: 0, y: 0, w: n, h: i }, u, d, c, Hi), zf(e, n, i));
}
function jf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class pb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ss({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: $e(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: j(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: j(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
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
      const i = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (c = this.flags) != null && c.collapsed || !e.errorText) return i;
      const o = e.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(o.x, o.y, o.w, o.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(e.errorText, o.x + o.w * 0.5, o.y + o.h * 0.5), n.restore(), i;
    };
  }
  attachDom() {
    var e;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${_a}px`,
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
          return _a;
        },
        getHeight() {
          return _a;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const c = i ? i(o) || {} : {};
          return {
            ...c,
            minHeight: Math.max(_a, Number(c.minHeight || 0)),
            minWidth: Math.max(db, Number(c.minWidth || 0))
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
      var c, u, d;
      o.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = e.setPointerCapture) == null || u.call(e, o.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (d = o.stopImmediatePropagation) == null || d.call(o));
    }), e.addEventListener("pointermove", (o) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    });
    const i = (o) => {
      var c, u;
      this.controller.state.drag.active && ((c = e.releasePointerCapture) == null || c.call(e, o.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    };
    e.addEventListener("pointerup", i), e.addEventListener("pointercancel", i), n.addEventListener("wheel", (o) => {
      var c;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      const i = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      return e.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var u;
      const o = e.localPoint(i);
      if (!o) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const c = e.getLegacyPreviewRect();
      return jf(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = e.localPoint(i);
      if (!o) return !0;
      const c = e.getLegacyPreviewRect();
      return e.controller.moveDrag(o.x - c.x, o.y - c.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, o) {
      var y, p, x, M, k, I;
      const c = za(this, n, i, o), u = e.getLegacyPreviewRect();
      if (!c || !jf(c.x, c.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const d = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const m = e.controller.applyWheel(Math.sign(d));
      return Number(((p = e.view) == null ? void 0 : p.fov) || 100), m && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (k = n == null ? void 0 : n.stopPropagation) == null || k.call(n), (I = n == null ? void 0 : n.stopImmediatePropagation) == null || I.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, o, c, u;
    const e = Math.max(80, Number(((o = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : o[0]) || 0) - wc * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Of - wc);
    return { x: wc, y: Of, w: e, h: n };
  }
  drawLegacy(e) {
    var i, o;
    if (!e || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Uf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, i = Math.max(1, Math.round(e.width * n)), o = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== i || this.canvas.height !== o) && (this.canvas.width = i, this.canvas.height = o, this.requestDraw());
  }
  refreshImage() {
    const e = hb(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Uf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (o = this.node).setDirtyCanvas) == null || c.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var e, n, i, o, c, u;
    if (((e = this.node) == null ? void 0 : e.__panoPreviewNodeRuntime) === this) {
      this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null;
      try {
        (c = (o = this.root) == null ? void 0 : o.remove) == null || c.call(o);
      } catch {
      }
      if (Array.isArray((u = this.node) == null ? void 0 : u.widgets) && this.widget)
        try {
          this.node.widgets = this.node.widgets.filter((d) => d !== this.widget);
        } catch {
        }
      this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved, this.node.__panoPreviewNodeRuntime = null;
    }
  }
}
function gb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new pb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function mb(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(e)}`;
  if (t[i]) return;
  t[i] = !0;
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
  const d = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const m = d ? d.apply(this, arguments) : void 0;
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
function Oh(t) {
  return !!(t != null && t.prototype);
}
function qc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function yb(t, e = {}) {
  Oh(t) || gb(t, {
    ...e,
    onOpen: qc(t, e.onOpen)
  });
}
function bb(t, e = {}) {
  if (!Oh(t)) {
    Lf(t, {
      ...e,
      onOpen: qc(t, e.onOpen)
    });
    return;
  }
  mb(t, "cutout_preview", (n) => {
    Lf(n, {
      ...e,
      onOpen: qc(n, e.onOpen)
    });
  });
}
function vb(t = {}) {
  const {
    owner: e = null,
    ctx: n = null,
    rect: i = null,
    shot: o = null,
    bgImage: c = null,
    cachePrefix: u = "cutout_preview",
    quality: d = "balanced",
    drawDisplayList: m = null
  } = t;
  if (!n || !i || !o) return !1;
  const y = ki(o), p = typeof m == "function" ? !!m(n, i, y, c, String(u || "cutout_preview")) : !1, x = !p && !!c && !!py(
    n,
    e,
    c,
    i,
    o,
    String(d || "balanced")
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
function Bf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function _b(t = 80, e = null, n = 8) {
  const i = [];
  let o = -1;
  const c = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function d(y) {
    if (i.splice(0, i.length), o = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((x) => {
      i.push(String(x || ""));
    }), !i.length)) return;
    const p = Number(y.index);
    Number.isInteger(p) ? p === -1 ? o = -1 : o = Math.max(0, Math.min(i.length - 1, p)) : o = i.length - 1;
  }
  function m(y) {
    i[o] !== y && (i.splice(o + 1), i.push(y), i.length > c && i.shift(), o = i.length - 1);
  }
  return d(e), {
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
      return y < 0 || y >= i.length ? null : (o = y, i[o]);
    },
    redo() {
      const y = o + 1;
      return y < 0 || y >= i.length ? null : (o = y, i[o]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const y = i.length, p = Math.max(0, y - u), x = o >= 0 ? Math.min(p, o) : p, M = i.slice(x), k = o < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, o - x));
      return {
        version: 1,
        entries: M,
        index: k
      };
    },
    hydrate: d
  };
}
function ae(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function wb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function xb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t) {
    if (!i || typeof i != "object") continue;
    const o = String(i.actionGroupId || i.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const c = ae(i.z_index ?? i.zIndex, e.length);
    e.push({
      id: String(i.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(c ?? e.length)),
      locked: i.locked === !0
    });
  }
  return e;
}
function Sb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Nb(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = ae(t.t, 0), i = ae(t.widthScale, null), o = ae(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const c = ae(t.u, null), u = ae(t.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), o != null && (d.pressureLike = Math.max(0, o)), d;
  }
  if (e.kind === "FRAME_LOCAL") {
    const c = ae(t.u, null), u = ae(t.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: c,
      v: u,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), o != null && (d.pressureLike = Math.max(0, o)), d;
  }
  return null;
}
function wa(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const i = [];
  for (const o of t) {
    const c = Nb(o, e);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function Mb(t, e, n, i) {
  if (!t || typeof t != "object") return null;
  const o = String(t.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const m = wa(t.points, e, 3);
    return m ? { geometryKind: o, points: m } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const c = wa(t.points, e, 1);
  if (!c) return null;
  const u = wa(t.rawPoints, e, 1), d = wa(t.processedPoints, e, 1);
  return {
    geometryKind: o,
    points: c,
    rawPoints: u || c.map((m) => ({ ...m })),
    processedPoints: d || c.map((m) => ({ ...m }))
  };
}
function Pb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Sb(t.targetSpace);
  if (!n) return null;
  const i = String(t.toolKind || "").trim(), o = Mb(t.geometry, n, i, e === "paint");
  if (!o) return null;
  const c = ae(t.size, null), u = ae(t.opacity, null);
  if (c == null || u == null) return null;
  const d = String(t.id || "").trim(), m = String(t.actionGroupId || "").trim();
  if (!d || !m) return null;
  const y = ae(t.radiusValue, null), p = String(t.radiusModel || "").trim() || null;
  let x = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, ae(M.r, 0))),
      g: Math.max(0, Math.min(1, ae(M.g, 0))),
      b: Math.max(0, Math.min(1, ae(M.b, 0))),
      a: Math.max(0, Math.min(1, ae(M.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: m,
    targetSpace: n,
    layerKind: e,
    toolKind: i,
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
function Gf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const i of t.strokes) {
    const o = Pb(i, e);
    o && n.strokes.push(o);
  }
  return n;
}
function kb(t) {
  if (!t || typeof t != "object") return null;
  const e = ae(t.u0, null), n = ae(t.v0, null), i = ae(t.u1, null), o = ae(t.v1, null);
  if (e == null || n == null || i == null || o == null) return null;
  const c = (d) => Math.max(0, Math.min(1, d)), u = { u0: c(e), v0: c(n), u1: c(i), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Cb(t) {
  const e = t || {};
  return {
    du: ae(e.du, 0) ?? 0,
    dv: ae(e.dv, 0) ?? 0,
    rot_deg: ae(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ae(e.scale, 1) ?? 1)
  };
}
function Ab(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const i = String(t.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = kb(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ae(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: Cb(t.transform)
  } : null;
}
function Ib(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t) {
    const o = Ab(i, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function Ao(t) {
  const e = wb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: xb(t.groups),
    paint: Gf(t.paint, "paint"),
    mask: Gf(t.mask, "mask"),
    raster_objects: Ib(t.raster_objects)
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
    const e = t, n = Di(() => {
      const i = { ...e.attrs };
      return e.tag === "button" && i.type == null && (i.type = e.type), e.label && (i["aria-label"] = e.label), e.tip && (i["data-tip"] = e.tip), e.pressed != null && (i["aria-pressed"] = e.pressed), i;
    });
    return (i, o) => (Se(), zi(h0(t.tag), oh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Eb = { class: "pano-floating-right" }, Tb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Se(), He("div", Eb, [
      n[0] || (n[0] = Ie("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (Se(!0), He(Ue, null, Ti(t.buttons, (i) => (Se(), zi(cs, {
        key: i.action,
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { "data-action": i.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Lb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Db = ["data-paint-pane"], Rb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Ob = ["data-paint-color-swatch", "aria-label"], Fb = ["data-paint-footer"], $b = ["data-paint-group"], Hb = ["hidden"], Vb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, i) => (Se(), He("div", Lb, [
      (Se(!0), He(Ue, null, Ti(t.panes, (o) => (Se(), He("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (Se(), He("div", Rb, [
          (Se(!0), He(Ue, null, Ti(t.paintSwatches, (c) => (Se(), He("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: ms(e(c))
          }, null, 12, Ob))), 128)),
          i[0] || (i[0] = ih('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Ra("", !0),
        Ie("div", {
          class: "pano-paint-footer",
          "data-paint-footer": o.footer
        }, [
          Ie("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": o.group
          }, [
            (Se(!0), He(Ue, null, Ti(o.tools, (c) => (Se(), zi(cs, {
              key: `${o.key}-${c.key}`,
              icon: c.icon,
              label: c.label,
              tip: c.tip,
              attrs: { [c.attr]: c.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, $b),
          i[1] || (i[1] = Ie("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            Ie("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            Ie("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          Ie("div", {
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
          ], 8, Hb)
        ], 8, Fb)
      ], 8, Db))), 128))
    ]));
  }
}, zb = {
  class: "pano-side",
  "data-side": ""
}, Ub = { class: "pano-side-head" }, jb = ["innerHTML"], Bb = {
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
    const i = Di(() => `<span class="pano-side-title-icon" aria-hidden="true">${le.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (o, c) => (Se(), He("div", zb, [
      Ie("div", Ub, [
        Ie("div", {
          class: "pano-side-title",
          innerHTML: i.value
        }, null, 8, jb),
        c[0] || (c[0] = Ie("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = Ie("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Gb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Kb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Se(), He("div", Gb, [
      (Se(!0), He(Ue, null, Ti(t.buttons, (i) => (Se(), zi(cs, {
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
}, Wb = { class: "pano-floating-top" }, qb = ["data-view-count"], Yb = ["data-view", "aria-pressed", "aria-label"], Xb = ["innerHTML"], Zb = { class: "label" }, Jb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Se(), He("div", Wb, [
      Ie("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (Se(!0), He(Ue, null, Ti(t.buttons, (i) => (Se(), He("button", {
          key: i.key,
          class: ys(["pano-view-btn", i.extraClass]),
          "data-view": i.key,
          "aria-pressed": i.pressed,
          "aria-label": i.label
        }, [
          Ie("span", {
            innerHTML: i.icon
          }, null, 8, Xb),
          Ie("span", Zb, ad(i.label), 1)
        ], 10, Yb))), 128))
      ], 8, qb)
    ]));
  }
};
function Fh(t = "stickers") {
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
const Qb = ["aria-label"], tv = { class: "pano-stage-wrap" }, ev = ["innerHTML"], nv = {
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
    let o = "", c = !1, u = null;
    const d = /* @__PURE__ */ Fm(null), m = Di(() => n.readOnly === !0), y = Di(() => n.shellPreset || Fh(n.type)), p = Di(() => {
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
      const L = d.value;
      return L ? Array.from(L.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((V) => V instanceof HTMLElement ? !V.hidden && V.tabIndex >= 0 && V.offsetParent !== null : !1) : [];
    }
    function M() {
      var R;
      const V = x()[0] || d.value;
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
          const et = x();
          if (!et.length) {
            L.preventDefault(), (R = (V = d.value) == null ? void 0 : V.focus) == null || R.call(V);
            return;
          }
          const it = et[0], _t = et[et.length - 1], H = document.activeElement;
          if (L.shiftKey) {
            (H === it || H === d.value || !((P = d.value) != null && P.contains(H))) && (L.preventDefault(), _t.focus());
            return;
          }
          (H === _t || !((J = d.value) != null && J.contains(H))) && (L.preventDefault(), it.focus());
          return;
        }
        L.key === "Escape" && i("close");
      }
    }
    function C() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function F() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function O(L) {
      document.removeEventListener("keydown", I), L ? (u || (u = document.activeElement), C(), document.addEventListener("keydown", I), Nd(() => {
        M();
      })) : (F(), k());
    }
    return Dd(() => {
      O(n.open);
    }), Rd(() => {
      F(), document.removeEventListener("keydown", I), k();
    }), Ta(() => n.open, (L) => {
      O(L);
    }), (L, V) => t.open ? (Se(), He("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: V[0] || (V[0] = M1((R) => i("close"), ["self"]))
    }, [
      Ie("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        Ie("div", tv, [
          V[1] || (V[1] = ih('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          m.value ? Ra("", !0) : (Se(), He(Ue, { key: 0 }, [
            tn(Kb, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            tn(Vb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          tn(Jb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          tn(Tb, { buttons: p.value }, null, 8, ["buttons"]),
          V[2] || (V[2] = Ie("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          Ie("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: fl(le).fullscreen
          }, null, 8, ev),
          V[3] || (V[3] = Ie("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Ra("", !0) : (Se(), zi(Bb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Qb)
    ])) : Ra("", !0);
  }
}, Yc = "state_json", $r = "sticker_image_1", xc = "external_image", Sc = "pano_sticker_input_images", Ua = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Fe = Math.PI / 180, Ur = 180 / Math.PI, ls = 24, rv = 4, iv = 4, bo = /* @__PURE__ */ new Map(), Xc = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Dt = {
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
function ov(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function av(t) {
  return 1 - Math.pow(1 - t, 3);
}
function sv(t) {
  return t * t * t;
}
function Kn(t, e, n) {
  return { x: t, y: e, z: n };
}
function xa(t, e) {
  return Kn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Sa(t, e) {
  return Kn(t.x * e, t.y * e, t.z * e);
}
function xn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Na(t, e) {
  return Kn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function bi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Kn(t.x / e, t.y / e, t.z / e);
}
function $n(t, e) {
  const n = t * Fe, i = e * Fe, o = Math.cos(i);
  return Kn(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function Ma(t) {
  return {
    yaw: $e(Math.atan2(t.x, t.z) * Ur),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Ur, -90, 90)
  };
}
function rr(t, e) {
  let n = !1;
  for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
    const c = e[i].x, u = e[i].y, d = e[o].x, m = e[o].y;
    u > t.y != m > t.y && t.x < (d - c) * (t.y - u) / (m - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function zr(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return n * n + i * i;
}
function Nc(t, e, n) {
  const i = Number(n.x || 0) - Number(e.x || 0), o = Number(n.y || 0) - Number(e.y || 0), c = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), d = i * i + o * o;
  if (d <= 1e-6) return zr(t, e);
  const m = j((c * i + u * o) / d, 0, 1), y = Number(e.x || 0) + i * m, p = Number(e.y || 0) + o * m, x = Number(t.x || 0) - y, M = Number(t.y || 0) - p;
  return x * x + M * M;
}
function Sn(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function cv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Pa = { fillStyle: "", url: "" };
function lv(t, e, n) {
  if (Pa.url && Pa.fillStyle === String(t || ""))
    return Pa.url;
  const i = cv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ls}" height="${ls}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Pa = { fillStyle: String(t || ""), url: i }, i;
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
function uv(t) {
  return Ua.some((e) => ja(t, e.color));
}
function Mc(t, e, n) {
  const i = (Number(t) % 1 + 1) % 1, o = j(Number(e), 0, 1), c = j(Number(n), 0, 1);
  if (o <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), d = i * 6 - u, m = c * (1 - o), y = c * (1 - d * o), p = c * (1 - (1 - d) * o);
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
function ho(t) {
  const e = j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), i = j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), o = Math.max(e, n, i), c = Math.min(e, n, i), u = o - c;
  let d = 0;
  u > 1e-6 && (o === e ? d = ((n - i) / u + (n < i ? 6 : 0)) / 6 : o === n ? d = ((i - e) / u + 2) / 6 : d = ((e - n) / u + 4) / 6);
  const m = o <= 1e-6 ? 0 : u / o;
  return { h: d, s: m, v: o };
}
function Pc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Kf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function $h(t, e) {
  const n = Kf(t, 1), i = Kf(e, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(i * o)), d = (x, M) => M ? d(M, x % M) : x, m = d(c, u) || 1, y = Math.max(1, Math.round(c / m)), p = Math.max(1, Math.round(u / m));
  return `${y}:${p}`;
}
function Zc(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Fe, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Fe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function fv(t) {
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
  for (const [o, c] of n)
    if (Math.abs(e - c) <= i) return o;
  return "";
}
function jr(t) {
  const e = Zc(t);
  return fv(e) || $h(e, 1);
}
function dv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = jr(e), e;
}
function vi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : jr(t);
}
let ka = null;
function hv() {
  return ka || (ka = new Promise((t) => {
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
  }), ka);
}
const Hh = "pano_suite.ui_settings.v1", Vh = "pano_suite.node_grid_visibility.v1";
let Ni = null, Hn = null, Ca = { text: null, parsed: null };
function Io(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function pv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Hh)) || "").trim();
    if (!e) return Ni ? Io(Ni) : null;
    const n = JSON.parse(e), i = Io(n);
    return Ni = i, i;
  } catch {
    return Ni ? Io(Ni) : null;
  }
}
function gv(t) {
  var n;
  const e = Io(t);
  Ni = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Hh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function zh() {
  var t;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Vh)) || "").trim();
    if (!e)
      return Hn = {}, Hn;
    const n = JSON.parse(e);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function mv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = zh()[n];
  return typeof o == "boolean" ? o : !!e;
}
function yv(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const i = zh();
  i[n] = !!e, Hn = i;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Vh, JSON.stringify(i));
  } catch {
  }
}
function bv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, i]) => {
    e[n] = i && typeof i == "object" ? { ...i } : i;
  }), e;
}
function vv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function _v(t) {
  var i, o;
  const e = Array.isArray((i = t == null ? void 0 : t.paint) == null ? void 0 : i.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Wf(t) {
  const { paintCount: e, maskCount: n } = _v(t), i = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let o = 0, c = 0;
  return i.forEach((u) => {
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
function qf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function wv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : dv(e)) : [];
}
function xv(t, e = 2048, n = "#00ff00") {
  const i = pv(), o = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ao(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(i != null && i.invert_view_x),
      invert_view_y: !!(i != null && i.invert_view_y),
      preview_quality: String((i == null ? void 0 : i.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, c = String(t || "").trim();
  if (!c) return o;
  try {
    let u = null;
    if (Ca.text === c ? u = Ca.parsed : (u = JSON.parse(c), Ca = { text: c, parsed: u }), !u || typeof u != "object" || Array.isArray(u)) return o;
    const d = {
      ...o,
      ...u,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: bv(u.assets),
      stickers: vv(u.stickers),
      shots: wv(u.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Ao(u.painting),
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
    return i && (d.ui_settings = Io({ ...d.ui_settings, ...i })), delete d.editor_history, d;
  } catch {
    return Ca = { text: c, parsed: null }, o;
  }
}
function Ci(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function Aa(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Sv(t, e) {
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
function Nv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((i) => {
    var c, u;
    const o = String((i == null ? void 0 : i.name) || "");
    (o === e || o.trim() === e || o.toLowerCase().includes(String(e).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.inputEl) != null && c.style && (i.inputEl.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Jc(t, e, n) {
  var c, u;
  if (!t || typeof t.addWidget != "function") return null;
  let o = (Array.isArray(t.widgets) ? t.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(e));
  return o ? (o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", (c = o.inputEl) != null && c.style && (o.inputEl.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = ""), (typeof o.computeSize != "function" || o.computeSize() == null || o.hidden) && (o.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = t == null ? void 0 : t.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), o) : (o = t.addWidget("button", e, null, n), o && (o.serialize = !1), o);
}
function po(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Yf(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(i);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function Uh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Mv(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
}
function jh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Pv(t, e, n = null) {
  var o, c;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((o = i == null ? void 0 : i.isSubgraphNode) != null && o.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Mv(t == null ? void 0 : t.graph, n)), i;
}
function us(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((o = Qe) == null ? void 0 : o.apiURL) == "function" ? Qe.apiURL(i) : i;
}
function kv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Cv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const o = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: o, subfolder: c };
}
function Av(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const o = String(i || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Bh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (kv(e)) return [e];
  const { filename: n, subfolder: i } = Cv(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => us({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Av([...o, e]);
}
function Iv(t) {
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
function Eo(t) {
  var i;
  const e = (i = pn) == null ? void 0 : i.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Vi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Vi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), i = String(t[2] || "output").trim() || "output";
      return us({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Vi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : us(t);
}
function Ev(t, e = -1) {
  var o;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((o = t == null ? void 0 : t.ui) == null ? void 0 : o.images) && t.ui.images.length && n.push(t.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (e >= 0 && e < c.length && i.push(c[e]), i.push(...c));
  return i;
}
function kc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t || []) {
    const o = Vi(i);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function Tv(t, e, n, i = null) {
  var x;
  const o = Eo(t == null ? void 0 : t.id), c = Array.isArray((x = o == null ? void 0 : o.ui) == null ? void 0 : x[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, d = Vi(u);
  if (!d) return null;
  const m = `__ui__${e}`, y = n.get(m);
  if (y && y.__panoSrc === d) return y;
  const p = new Image();
  return p.__panoSrc = d, p.onload = () => {
    typeof i == "function" && i(p);
  }, p.src = d, n.set(m, p), p;
}
function Lv(t, e) {
  var L, V;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = i.findIndex((R) => String((R == null ? void 0 : R.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const d = Uh(t.graph, u), { originId: m, originSlot: y } = jh(d);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const p = Pv(t, o, m), x = Number(y || 0);
  if (!p) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((L = pn) == null ? void 0 : L.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(p) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const R = [];
    x >= 0 && x < M.length && R.push(M[x]), R.push(...M);
    const P = kc(R);
    if (P.length) return { src: P[0], srcCandidates: P, sourceType: "appNodeImageUrls", inputName: n };
  }
  const k = Eo((p == null ? void 0 : p.id) ?? m), I = Ev(k, x), C = kc(I);
  if (C.length) return { src: C[0], srcCandidates: C, sourceType: "nodeOutputs", inputName: n };
  const F = Array.isArray(p == null ? void 0 : p.imgs) ? p.imgs : [];
  if (F.length) {
    const R = [];
    x >= 0 && x < F.length && R.push(F[x]), R.push(...F);
    const P = kc(R);
    if (P.length) return { src: P[0], srcCandidates: P, sourceType: "nodeImgs", inputName: n };
  }
  const O = (V = p == null ? void 0 : p.widgets) == null ? void 0 : V.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
  if (O) {
    let R = Vi(O.value);
    if (R && !R.includes("/") && !R.includes(":") && (p.comfyClass === "LoadImage" || p.type === "LoadImage") && (R = Qe.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R) return { src: R, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Dv(t, e, n, i = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = Bh(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), d = t.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
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
    const M = c[p];
    y.resolvedSrc = M, m.src = M;
  };
  return m.onload = () => {
    var M;
    i == null || i(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, m.onerror = () => {
    var M, k;
    if (p + 1 < c.length) {
      x();
      return;
    }
    try {
      (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, u);
    } catch {
    }
  }, x(), m;
}
function Rv(t, e, n, i = null) {
  const o = Array.isArray(n) ? n.map((I) => String(I || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), d = t.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === u && d.img) return d.img;
  const m = [], y = /* @__PURE__ */ new Set();
  if (o.forEach((I) => {
    Bh(I).forEach((C) => {
      const F = String(C || "").trim();
      !F || y.has(F) || (y.add(F), m.push(F));
    });
  }), !m.length) return null;
  const p = new Image(), x = { srcRaw: u, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(c, x);
  let M = -1;
  const k = () => {
    var C, F;
    if (M += 1, M >= m.length) {
      try {
        (F = (C = t.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || F.call(C, c);
      } catch {
      }
      return;
    }
    const I = m[M];
    x.resolvedSrc = I, p.src = I;
  };
  return p.onload = () => {
    var I;
    i == null || i(), (I = t.setDirtyCanvas) == null || I.call(t, !0, !0);
  }, p.onerror = () => {
    var I, C;
    if (M + 1 < m.length) {
      k();
      return;
    }
    try {
      (C = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || C.call(I, c);
    } catch {
    }
  }, k(), p;
}
function Gh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const i of n) {
    const o = Lv(t, i);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Xf(t, e = [], n = null, i = "") {
  const o = Array.isArray(e) ? e : [e], c = Gh(t, o), u = String(i || o.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return Rv(t, u, d, n);
  const m = String((c == null ? void 0 : c.src) || "").trim();
  return m ? Dv(t, u, m, n) : null;
}
async function To(t, e, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, u = Sv(t, e);
  await hv();
  const d = Ci(t, "output_preset"), m = Ci(t, "bg_color"), y = Ci(t, Yc), p = xv(
    String((y == null ? void 0 : y.value) || ""),
    Yf(d == null ? void 0 : d.value, 2048),
    String((m == null ? void 0 : m.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const x = document.createElement("div");
  document.body.appendChild(x);
  const M = C1(nv, {
    open: !0,
    type: e,
    readOnly: i,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: Fh(e),
    paintSwatches: Ua.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Nn(r.color, 1)
    })),
    onClose: () => fi()
  });
  try {
    M.mount(x);
  } catch (r) {
    try {
      M.unmount();
    } catch {
    }
    throw x.remove(), r;
  }
  const k = x.querySelector(".pano-modal-overlay"), I = x.querySelector(".pano-modal"), C = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), F = I == null ? void 0 : I.querySelector("[data-stage-background]"), O = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!k || !I || !C || !F || !O)
    throw M.unmount(), x.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const L = document.createElement("div");
  L.setAttribute("aria-hidden", "true"), L.style.position = "absolute", L.style.left = "0", L.style.top = "0", L.style.pointerEvents = "none", L.style.zIndex = "12", L.style.display = "none", L.style.willChange = "transform,width,height,background,border-radius", O == null || O.appendChild(L);
  const V = document.createElement("div");
  V.className = "pano-paint-size-preview", V.setAttribute("aria-hidden", "true");
  const R = document.createElement("div");
  R.className = "pano-paint-size-preview-sample", V.appendChild(R), O == null || O.appendChild(V);
  const P = C.getContext("2d"), J = uh({ targetCanvas: F }), et = I.querySelector("[data-side]"), it = I.querySelectorAll("[data-view]"), _t = I.querySelector(".pano-view-toggle"), H = I.querySelector("[data-fov-value]"), q = I.querySelector("[data-selection-menu]"), lt = I.querySelector("[data-action='toggle-output-preview-size']"), ht = I.querySelector("[data-tool-ui-action='add-or-look']"), nt = I.querySelector("[data-view='frame']"), G = I.querySelector("[data-action='toggle-fullscreen']"), ot = I.querySelector("[data-tooltip]"), at = I.querySelector("[data-tool-rail]"), ut = I.querySelector("[data-paint-dock]"), kt = Array.from(I.querySelectorAll("[data-paint-pane]")), Et = I.querySelector("[data-paint-color-row]"), X = I.querySelector("[data-paint-color-pop]"), Nt = I.querySelector("[data-paint-color-preview]"), Bt = I.querySelector("[data-paint-color-sv]"), pe = I.querySelector("[data-paint-color-sv-cursor]"), ge = I.querySelector("[data-paint-hue-strip]"), U = I.querySelector("[data-paint-hue-handle]"), Mt = I.querySelector("[data-paint-alpha-slider]"), St = I.querySelector("[data-paint-alpha-value]"), $t = I.querySelector("[data-paint-color-history-wrap]"), Rt = I.querySelector("[data-paint-color-history]"), Vt = Array.from(I.querySelectorAll("[data-paint-size-row]")), A = Array.from(I.querySelectorAll("[data-paint-clear-row]")), D = Array.from(I.querySelectorAll("[data-paint-layer-clear-current]")), z = Array.from(I.querySelectorAll("[data-paint-size-slider]")), Z = Array.from(I.querySelectorAll("[data-paint-size-value]"));
  let Y = 0, W = 0;
  O == null || O.removeAttribute("data-stage-ready"), O == null || O.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", F.style.opacity = "0", o && (et == null || et.remove(), I.classList.add("pano-modal-readonly"));
  function ct(r) {
    ut && ut.classList.toggle("is-hidden", !r);
  }
  const vt = () => {
    if (!f.customPaintSessionStart) return;
    if (ja(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (uv(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const r = [
      fn(f.customPaintColor),
      ...f.customPaintHistory.filter((a) => !ja(a, f.customPaintColor))
    ];
    f.customPaintHistory = r.slice(0, 8), f.customPaintSessionStart = null;
  }, pt = (r = !1) => {
    !X || X.hidden || (r ? vt() : f.customPaintSessionStart = null, X.hidden = !0);
  }, rt = () => {
    X && (X.hidden && (f.customPaintSessionStart = fn(f.customPaintColor)), X.hidden = !1);
  };
  I.addEventListener("pointerdown", (r) => {
    oa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), pt(!0), e === "cutout" && f.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, Wt(), ft())));
  });
  const It = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, xt = JSON.stringify(qf(p)), f = {
    mode: "pano",
    selectedId: It,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: _b(80, { entries: [xt], index: 0 }),
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
    showGrid: mv(t == null ? void 0 : t.id, !0),
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
    paintEngine: Hc(),
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
  e === "stickers" && (f.selectedId = null, p.active.selected_sticker_id = null), f.selectedIds = f.selectedId ? [f.selectedId] : [];
  const Ct = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Pt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, ne = {
    timer: 0,
    target: null
  }, Ne = {
    active: !1,
    depth: 0
  };
  function nn(r) {
    const a = r == null ? void 0 : r.dataTransfer;
    if (!a) return !1;
    if (a.items && a.items.length) {
      for (const s of a.items) {
        if (!s || s.kind !== "file") continue;
        const l = String(s.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return a.files && a.files.length ? Array.from(a.files).some((s) => na(s)) : !1;
  }
  function cn(r) {
    const a = !!r;
    Ne.active !== a && (Ne.active = a, O.classList.toggle("drop-active", a));
  }
  function ti(r, a, s = f.viewFov, l = 140, h = 620) {
    const g = iy(f.viewYaw, r), _ = a - f.viewPitch, b = s - f.viewFov, v = Math.hypot(g, _) + Math.abs(b) * 0.6, S = Math.round(j(l + v * 2.2, l, h));
    f.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: f.viewYaw,
      startPitch: f.viewPitch,
      startFov: f.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: g
    }, f.viewInertia.active = !1, f.viewInertia.vx = 0, f.viewInertia.vy = 0, ft();
  }
  bp();
  function Me() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function ce() {
    const r = p.painting || (p.painting = Ao(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function jo(r = "paint") {
    var h, g;
    const a = Array.isArray((g = (h = p.painting) == null ? void 0 : h[r]) == null ? void 0 : g.strokes) ? p.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function Bo() {
    return jo("paint");
  }
  function ji(r, a) {
    const s = String(a || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Bi(r) {
    const a = String(r || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ke(r) {
    const a = String(r || "").trim();
    if (!a) return "";
    const s = a.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : a).trim();
  }
  function Gi(r, a = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ns() {
    var a;
    let r = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of ce())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Nl(r, a = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = ce();
    let h = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? Ns() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Kh() {
    const r = new Set(Bo()), s = ce().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ns(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), p.painting.groups = s, s;
  }
  function Wh(r, a, s) {
    const l = [];
    for (const T of s) {
      const $ = T == null ? void 0 : T.geometry, B = ($ == null ? void 0 : $.geometryKind) === "lasso_fill" ? $ == null ? void 0 : $.points : ($ == null ? void 0 : $.processedPoints) || ($ == null ? void 0 : $.rawPoints) || ($ == null ? void 0 : $.points) || [];
      Array.isArray(B) && l.push(...B);
    }
    if (!l.length) return null;
    let h = 0, g = 0;
    l.forEach((T) => {
      h += Number((T == null ? void 0 : T.u) || 0), g += Number((T == null ? void 0 : T.v) || 0);
    });
    const _ = h / l.length;
    let b = 1 / 0, v = -1 / 0, S = 1 / 0, w = -1 / 0;
    l.forEach((T) => {
      const $ = Ki(Number((T == null ? void 0 : T.u) || 0), _);
      b = Math.min(b, $), v = Math.max(v, $);
      const B = Number((T == null ? void 0 : T.v) || 0);
      S = Math.min(S, B), w = Math.max(w, B);
    });
    const N = s.reduce((T, $) => {
      const B = yr(String(($ == null ? void 0 : $.toolKind) || "pen")), tt = rn[B] || rn[nr], Q = Math.max(1, Number(($ == null ? void 0 : $.size) || 10)) * Math.max(0.1, Number((tt == null ? void 0 : tt.sizeScale) ?? 1));
      return Math.max(T, Q);
    }, 0), E = Math.max(35e-4, N / 2048);
    return {
      centerUv: { u: ((_ + (b + v) * 0.5) % 1 + 1) % 1, v: j((S + w) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - b) * 0.5 + E,
      halfH: (w - S) * 0.5 + E,
      uvPad: E
    };
  }
  function Cr(r, a, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const h = ce().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const g = s || yn(l, a);
      h.frame = Wh(l, a, g);
    }
    return h.frame;
  }
  function Ar() {
    var l;
    const r = (Array.isArray(p.stickers) ? p.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = Kh().map((h) => ({
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
    return [...r, ...a, ...s].sort((h, g) => Number(h.z_index || 0) - Number(g.z_index || 0));
  }
  function ei(r = !0) {
    var s, l, h, g, _, b;
    const a = Ar().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (r) {
      const v = String(((l = (s = f.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((g = (h = f.interaction) == null ? void 0 : h.stroke) == null ? void 0 : g.layerKind) || "").trim(), w = String(((b = (_ = f.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && S === "paint" && w !== "eraser" && !a.includes(v) && a.push(v);
    }
    return a;
  }
  function Ms(r = !0) {
    var b, v, S, w, N, E;
    const a = Ar();
    if (!r) return a;
    const s = String(((v = (b = f.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((w = (S = f.interaction) == null ? void 0 : S.stroke) == null ? void 0 : w.layerKind) || "").trim(), h = String(((E = (N = f.interaction) == null ? void 0 : N.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || a.some((T) => T.type === "strokeGroup" && String(T.actionGroupId || "") === s))
      return a;
    const g = _e();
    let _ = a.reduce((T, $) => Math.max(T, Number(($ == null ? void 0 : $.z_index) || 0)), -1) + 1;
    return g && Te(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((T, $) => Number((T == null ? void 0 : T.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0));
  }
  function qh() {
    return ce().slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => ii(ji("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Yh() {
    var r;
    return (Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => ri(Bi((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Go(r = f.interaction) {
    const a = String((r == null ? void 0 : r.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Ml(r = f.interaction) {
    if (e !== "cutout") return !1;
    const a = String((r == null ? void 0 : r.kind) || "");
    return Go(r) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Xh(r = f.interaction) {
    if (!Ml(r)) return 0;
    const a = String((r == null ? void 0 : r.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function ni() {
    var h, g, _, b, v, S, w;
    const r = f.interaction, a = String((r == null ? void 0 : r.kind) || "");
    if (!Go(r)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, E = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), T = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((b = N == null ? void 0 : N.points) == null ? void 0 : b.length) ?? 0, $ = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${E || "paint"}_${a}_live${$}_${T}_${f.livePaintInteractionRevision}`;
    }
    const s = String(((v = r == null ? void 0 : r.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((w = r == null ? void 0 : r.item) == null ? void 0 : w.id) || "");
    return `_${a}_${s || l || "active"}_${f.livePaintInteractionRevision}`;
  }
  function Ps() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function mn(r) {
    return !!r && Array.isArray(p.shots) && p.shots.includes(r);
  }
  function De(r) {
    return !!r && Array.isArray(p.stickers) && p.stickers.includes(r);
  }
  function ln() {
    var r;
    return Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : [];
  }
  function ri(r) {
    const a = Ke(r);
    if (!a) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Bi(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function We(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const a = Ke(r.rasterObjectId || r.id || "");
    return !!a && !!ri(Bi(a));
  }
  function ii(r) {
    const a = Gi(r), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = ce().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: ji("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Te(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const a = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!a && !!ii(ji(s, a));
  }
  function yn(r, a = null) {
    const s = Gi(r, a), l = String(s.actionGroupId || "").trim();
    return l ? ui(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function Zh(r, a = "paint") {
    var g, _, b;
    const s = String(r || "").trim(), h = `${String(a || "paint").trim() || "paint"}:${s}:${f.mode}:${Lr()}`;
    if (f.mode === "frame") {
      const v = ie(), S = String((v == null ? void 0 : v.id) || ""), w = v ? Ye(v) : null;
      return `${h}:frame:${S}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}:${Math.round(Number(((g = f.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = f.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = f.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ko(r, a, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: j(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Ki(r, a) {
    let s = Number(r || 0) - Number(a || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Pl(r, a = null, s = null) {
    var S;
    const l = Gi(r, a), h = Array.isArray(s) ? s : yn(l.actionGroupId, l.layerKind), g = [];
    if (h.forEach((w) => {
      const N = (w == null ? void 0 : w.geometry) || null, E = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
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
  function Wo(r, a, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(r.u || 0), h), b = Number(r.v || 0) - g, v = Number(l || 0) * Fe, S = Math.cos(v), w = Math.sin(v), N = Math.max(0.02, Number(s || 1)), E = (_ * S - b * w) * N, T = (_ * w + b * S) * N;
    return {
      ...r,
      u: ((h + E) % 1 + 1) % 1,
      v: j(g + T, 0, 1)
    };
  }
  function kl(r, a, s, l = null, h = null, g = null) {
    const _ = Gi(r, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ui(_.layerKind), S = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let w = !1;
    if (v.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== b) return;
      const E = (S == null ? void 0 : S.get(String((N == null ? void 0 : N.id) || ""))) || N, T = N == null ? void 0 : N.geometry, $ = E == null ? void 0 : E.geometry;
      !T || !$ || (Array.isArray($.points) && (T.points = $.points.map((B) => Ko(B, a, s)), w = !0), Array.isArray($.rawPoints) && (T.rawPoints = $.rawPoints.map((B) => Ko(B, a, s)), w = !0), Array.isArray($.processedPoints) && (T.processedPoints = $.processedPoints.map((B) => Ko(B, a, s)), w = !0));
    }), w && g) {
      const N = ce().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === b);
      N && (N.frame = {
        ...g,
        centerUv: {
          u: ((g.centerUv.u + a) % 1 + 1) % 1,
          v: j(g.centerUv.v + s, 0, 1)
        }
      });
    }
    return w;
  }
  function Cl(r, a = 1, s = 0, l = null, h = null, g = null) {
    const _ = Gi(r, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ui(_.layerKind), S = Array.isArray(l) ? l : yn(b, _.layerKind), w = Array.isArray(S) ? new Map(S.map((T) => [String((T == null ? void 0 : T.id) || ""), T])) : null, N = (g == null ? void 0 : g.centerUv) ?? Pl(b, _.layerKind, S);
    let E = !1;
    if (v.forEach((T) => {
      if (String((T == null ? void 0 : T.actionGroupId) || "").trim() !== b) return;
      const $ = (w == null ? void 0 : w.get(String((T == null ? void 0 : T.id) || ""))) || T, B = T == null ? void 0 : T.geometry, tt = $ == null ? void 0 : $.geometry;
      !B || !tt || (Array.isArray(tt.points) && (B.points = tt.points.map((Q) => Wo(Q, N, a, s)), E = !0), Array.isArray(tt.rawPoints) && (B.rawPoints = tt.rawPoints.map((Q) => Wo(Q, N, a, s)), E = !0), Array.isArray(tt.processedPoints) && (B.processedPoints = tt.processedPoints.map((Q) => Wo(Q, N, a, s)), E = !0));
    }), E && g) {
      const T = Number(a || 1), $ = ce().find((B) => String((B == null ? void 0 : B.actionGroupId) || "") === b);
      $ && ($.frame = {
        centerUv: g.centerUv,
        rot_deg: Number(g.rot_deg || 0) + Number(s || 0),
        halfW: g.halfW * T,
        halfH: g.halfH * T,
        uvPad: g.uvPad
      });
    }
    return E;
  }
  function Al(r, a, s, l = null) {
    const h = Ke(r);
    if (!h) return !1;
    const g = ln().find((w) => String((w == null ? void 0 : w.id) || "").trim() === h);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, b = (_ == null ? void 0 : _.transform) || {}, v = Number(b.du || 0) + Number(a || 0), S = j(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = v, g.transform.dv = S, !0;
  }
  function _e() {
    const r = String(f.selectedId || "");
    if (!r) return null;
    const a = ii(r);
    if (a) return a;
    const s = ri(r);
    return s || (e === "cutout" ? Ps().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Me().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function An() {
    const r = Array.isArray(f.selectedIds) && f.selectedIds.length ? f.selectedIds : f.selectedId ? [f.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const g = h === String(f.selectedId || "") ? _e() : ii(h) || ri(h) || (e === "cutout" ? Ps().find((_) => String((_ == null ? void 0 : _.id) || "") === h) : Me().find((_) => String((_ == null ? void 0 : _.id) || "") === h));
      g && a.push(g);
    }), a;
  }
  function ks(r = null) {
    const a = Array.isArray(r) ? r : An();
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
  function Jh(r) {
    const a = String((r == null ? void 0 : r.id) || "").trim();
    return !!a && Array.isArray(f.selectedIds) && f.selectedIds.includes(a);
  }
  function Il() {
    const r = _e();
    return r ? Te(r) || We(r) ? "stroke" : mn(r) ? "frame" : "image" : null;
  }
  function fr(r) {
    if (!r || typeof r != "object") return !1;
    if (Te(r)) {
      const a = String(r.actionGroupId || r.id || "").trim(), s = ce().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (We(r)) {
      const a = Ke(r.rasterObjectId || r.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Cs(r = null) {
    const a = Array.isArray(r) ? r : An();
    return a.length > 0 && a.every((s) => fr(s));
  }
  function Qh(r, a) {
    const s = a === !0;
    if (!r || typeof r != "object") return !1;
    if (Te(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), h = ce().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (We(r)) {
      const l = Ke(r.rasterObjectId || r.id || ""), h = ln().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function tp() {
    if (i) return;
    const r = An();
    if (!r.length) return;
    const a = !Cs(r);
    let s = !1;
    r.forEach((l) => {
      Qh(l, a) && (s = !0);
    }), s && (ue(), Pe(), Wt(), ft());
  }
  function Wi(r) {
    f.selectedId = (r == null ? void 0 : r.id) || null, f.selectedIds = r != null && r.id ? [r.id] : [], r && De(r) ? p.active.selected_sticker_id = r.id || null : p.active.selected_sticker_id = null, r && mn(r) ? p.active.selected_shot_id = r.id || null : r ? mn(r) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function ep(r, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), f.selectedIds = s;
    const h = String(a || "").trim();
    f.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const g = _e();
    p.active.selected_sticker_id = g && De(g) && g.id || null, g && mn(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function np() {
    const r = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const h = Ce(s) ? String(s.id || $r) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...a];
  }
  function rp(r) {
    return r === "frame" ? Dt.camera : r === "stroke" ? Dt.paintbrush_vertical_tool : Dt.image;
  }
  function El(r) {
    return !r || !r.item ? Aa(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${rp(r.kind)}</span><span>${Aa(String(r.label || ""))}</span>`;
  }
  function Tl() {
    return Ns();
  }
  function Ce(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === $r || String(r.source_kind || "") === xc;
  }
  function oi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function ip(r) {
    return Ce(r) && oi(r) ? hh : 1;
  }
  function op() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
  }
  function ap() {
    return String(op() || "") === "lasso_fill";
  }
  function sp() {
    if (i) return;
    const r = _e();
    !r || !Ce(r) || (r.visible = oi(r), hn(), ue(), Pe(), Zt(), Wt(), ft());
  }
  function cp() {
    if (i || e !== "stickers") return;
    const r = _e();
    if (!r || !Ce(r)) return;
    const a = r.initial_pose;
    if (!a || typeof a != "object") return;
    r.yaw_deg = Number(a.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(a.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(a.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = As(Sc, () => {
      ft();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Ir(
      Number(a.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(a.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(a.rot_deg ?? r.rot_deg ?? 0), ue(), Pe(), Zt(), Wt(), ft();
  }
  function lp(r) {
    if (!r || !Ce(r)) return null;
    const a = r.initial_pose;
    if (!a || typeof a != "object") return null;
    const s = {
      yaw_deg: Number(a.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? r.rot_deg ?? 0)
    }, l = As(Sc, () => {
      ft();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Ir(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function up() {
    const r = _e();
    if (!r || !Ce(r)) return !1;
    const a = lp(r);
    if (!a) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, a.yaw_deg) && s(r.pitch_deg, a.pitch_deg) && s(r.hFOV_deg, a.hFOV_deg) && s(r.vFOV_deg, a.vFOV_deg) && s(r.rot_deg, a.rot_deg));
  }
  function Ll(r) {
    var s;
    const a = Eo(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[r]) ? a.ui[r] : Array.isArray(a == null ? void 0 : a[r]) ? a[r] : [];
  }
  function fp(r) {
    const a = Eo(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, r) ? a.ui[r] : a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
  }
  function dp(r, a = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const l = r[0];
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
  function As(r, a = null) {
    const s = Ll(r), l = Array.isArray(s) && s.length ? s[0] : null, h = Vi(l);
    if (!h) return null;
    const g = `__ui__${r}`, _ = Ct.get(g);
    if (_ && _.__panoSrc === h) return _;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof a == "function" ? a(b) : ft();
    }, b.src = h, Ct.set(g, b), b;
  }
  function Dl(r = null) {
    const a = Xf(t, ["sticker_image"], r, "sticker_image_exact");
    return a || As(Sc, r);
  }
  function Rl(r) {
    const a = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Ir(r, a, s) {
    const l = Math.max(1, Number(a || 1)), h = Math.max(1, Number(s || 1)), g = j(Number(r || 30), 0.1, 179) * Fe, _ = 2 * Math.atan(Math.tan(g * 0.5) * (h / l));
    return j(_ * Ur, 0.1, 179);
  }
  function hp(r) {
    const a = String(r || "").trim();
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
      const N = {
        yaw_deg: w,
        pitch_deg: j(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(S, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (N.source_aspect = E), N;
    } catch {
      return null;
    }
  }
  function Ol(r) {
    const a = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), g = Zc(r);
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
  function pp(r) {
    var b;
    if (!r || typeof r != "object") return Ol(null);
    const a = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(h) && Number.isFinite(g)) {
      const v = j(h, 0.1, 179) * Fe, S = j(g, 0.1, 179) * Fe, w = Math.tan(S * 0.5);
      if (Math.abs(w) > 1e-6) {
        const N = Math.tan(v * 0.5) / w;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (r != null && r.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[r.asset_id])) {
      const v = p.assets[r.asset_id], S = Number((v == null ? void 0 : v.w) || 0), w = Number((v == null ? void 0 : v.h) || 0);
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
  function gp(r) {
    var l, h, g, _, b;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(r)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const v = Uh(t.graph, s), { originId: S, originSlot: w } = jh(v), N = Eo(S), E = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (l = N == null ? void 0 : N.data) == null ? void 0 : l.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (g = N == null ? void 0 : N.ui) == null ? void 0 : g.output,
        (_ = N == null ? void 0 : N.ui) == null ? void 0 : _.result
      ];
      for (const T of E) {
        if (!Array.isArray(T)) continue;
        const $ = Number(w || 0), B = T[$];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((b = Ci(t, r)) == null ? void 0 : b.value) || "");
  }
  function mp(r, a, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : hp(a);
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
      yaw_deg: Number(f.viewYaw || 0),
      pitch_deg: Number(f.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ir(30, h, g),
      rot_deg: 0
    };
  }
  function Fl(r = "sync") {
    if (e !== "stickers" || i) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((T) => String((T == null ? void 0 : T.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = Dl(() => {
      var T;
      (T = t.__panoExternalStickerSync) == null || T.call(t, "image-loaded");
    }), h = dp(fp("pano_sticker_input_pose"), null), g = gp("sticker_state"), _ = Rl(h && typeof h == "object" ? JSON.stringify(h) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((T) => String((T == null ? void 0 : T.id) || "") === $r);
    if (s == null) {
      v >= 0 && (b.splice(v, 1), f.selectedId === $r && (f.selectedId = null, f.selectedIds = [], p.active.selected_sticker_id = null), Pe(), Zt(), Wt(), ft());
      return;
    }
    const S = b.reduce((T, $) => Math.max(T, Number(($ == null ? void 0 : $.z_index) || 0)), -1);
    let w = v >= 0 ? b[v] : null;
    const N = !w || Number(w.source_link_id ?? -1) !== Number(s) || String(w.source_state_hash || "") !== _;
    w || (w = {
      id: $r,
      source_kind: xc
    }, b.push(w)), w.id = $r, w.source_kind = xc, w.source_link_id = Number(s), w.source_state_hash = _, w.visible = w.visible !== !1;
    let E = !1;
    if (N) {
      const T = mp(h, g, l);
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
    E && (Pe(), Zt(), Wt()), ft();
  }
  function ai(r = {}) {
    const s = r.preservePanelValues !== !1 ? _e() : null;
    s && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: vi(s)
    }), f.selectedId = null, f.selectedIds = [], f.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function yp() {
    var l;
    if (e !== "cutout") return;
    const r = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(r) || r.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = r.find((h) => String((h == null ? void 0 : h.id) || "") === a) || r[0];
    s && (p.active.selected_shot_id = s.id || null, f.viewYaw = $e(Number(s.yaw_deg || 0)), f.viewPitch = j(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function qo() {
    if (!ht) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (ht.innerHTML = Dt.crosshair, ht.setAttribute("aria-label", "Look at frame"), ht.setAttribute("data-tip", "Look at frame")) : (ht.innerHTML = Dt.plus_circle, ht.setAttribute("aria-label", "Add frame"), ht.setAttribute("data-tip", "Add frame"));
  }
  function Yo() {
    const r = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    f.mode === "frame" && !r && (f.mode = "pano"), nt && (nt.disabled = !r, nt.setAttribute("aria-disabled", r ? "false" : "true")), it.forEach((a) => {
      const s = a.dataset.view === f.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), _t && _t.setAttribute("data-selected", f.mode), du() ? we(f.pointerPos) : C.style.cursor = f.mode === "pano" ? "grab" : "default";
  }
  function bp() {
    const a = jl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Is() {
    const r = $n(f.viewYaw, f.viewPitch);
    let a = Kn(0, 1, 0);
    Math.abs(xn(r, a)) > 0.999 && (a = Kn(0, 0, 1));
    const s = bi(Na(a, r)), l = bi(Na(r, s));
    return { right: s, up: l, fwd: r };
  }
  function qi(r) {
    const { right: a, up: s, fwd: l } = Is(), h = xn(r, a), g = xn(r, s), _ = xn(r, l);
    if (_ <= 1e-5) return null;
    const b = C.width, v = C.height, S = f.viewFov * Fe, w = 2 * Math.atan(Math.tan(S / 2) * (v / b)), N = b / 2 / Math.tan(S / 2), E = v / 2 / Math.tan(w / 2);
    return {
      x: b / 2 + h / _ * N,
      y: v / 2 - g / _ * E,
      z: _
    };
  }
  function Es(r, a) {
    const { right: s, up: l, fwd: h } = Is(), g = C.width, _ = C.height, b = f.viewFov * Fe, v = 2 * Math.atan(Math.tan(b / 2) * (_ / g)), S = (r - g / 2) / (g / 2) * Math.tan(b / 2), w = (_ / 2 - a) / (_ / 2) * Math.tan(v / 2), N = xa(xa(Sa(s, S), Sa(l, w)), h);
    return bi(N);
  }
  function dr() {
    const r = C.width, a = C.height, s = 2;
    if (r / Math.max(a, 1) >= s) {
      const b = a, v = b * s;
      return { x: (r - v) * 0.5, y: 0, w: v, h: b };
    }
    const h = r, g = h / s;
    return { x: 0, y: (a - g) * 0.5, w: h, h: g };
  }
  function Ts(r) {
    var _;
    if (r && typeof r == "object" && (Ce(r) || r.external === !0))
      return Dl(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const a = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!a) return null;
    const s = Ct.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], h = Iv(l);
    if (!h) return null;
    const g = new Image();
    return g.onload = () => ft(), g.src = h, Ct.set(a, g), g;
  }
  function $l(r, a = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = qt.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof a == "function" && a();
    }, h.src = s, qt.set(s, h), h;
  }
  function vp(r) {
    const a = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = Yt.get(a);
    if (s) return s.ready ? s : null;
    const l = $l(r, () => {
      const w = Yt.get(a);
      w && (w.ready = !1), ft({ localOnly: !0 });
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
  function _p(r, a, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(r.u || 0), h), b = Number(r.v || 0) - g, v = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * Fe, w = Math.cos(S), N = Math.sin(S), E = _ / v, T = b / v, $ = E * w + T * N, B = -E * N + T * w;
    return {
      ...r,
      u: ((h + $) % 1 + 1) % 1,
      v: g + B
    };
  }
  function wp(r, a) {
    if (!r || !a) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = _p(
      g,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const S = Ki(Number(_.u || 0), Number(s.u0 || 0)) / b, w = (Number(_.v || 0) - Number(s.v0 || 0)) / v;
    if (S < 0 || S > 1 || w < 0 || w > 1) return 0;
    const N = vp(r);
    if (!N) return null;
    const E = j(Math.floor(S * N.width), 0, N.width - 1), T = j(Math.floor(w * N.height), 0, N.height - 1);
    return Number(N.alpha[(T * N.width + E) * 4 + 3] || 0);
  }
  function Hl(r, a, s, l = null) {
    if (!(a != null && a.visible) || !rr(s, a.corners)) return !1;
    const h = l || bn(s, performance.now()), g = wp(r, h);
    return g === null ? !0 : g > 8;
  }
  function xp() {
    var l, h, g, _, b, v, S, w;
    const r = ((h = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, ei(!1))) || null, a = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((b = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((v = r == null ? void 0 : r.descriptor) == null ? void 0 : v.height) || ((w = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : w.height) || 1024));
    return { width: a, height: s };
  }
  function Vl(r = null) {
    var b, v, S, w, N, E, T, $, B, tt, Q, bt, dt;
    si();
    const a = Array.isArray(r) ? r : ei(!1), s = ((v = (b = f.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, a)) || null, l = Math.max(1, Number(((S = s == null ? void 0 : s.descriptor) == null ? void 0 : S.width) || ((N = (w = s == null ? void 0 : s.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : N.width) || 2048)), h = Math.max(1, Number(((E = s == null ? void 0 : s.descriptor) == null ? void 0 : E.height) || (($ = (T = s == null ? void 0 : s.displayPaint) == null ? void 0 : T.canvas) == null ? void 0 : $.height) || 1024));
    (!f._rasterComposeSurface || Number(((B = f._rasterComposeSurface.canvas) == null ? void 0 : B.width) || 0) !== l || Number(((tt = f._rasterComposeSurface.canvas) == null ? void 0 : tt.height) || 0) !== h) && (f._rasterComposeSurface = Tr(l, h));
    const g = f._rasterComposeSurface;
    g.ctx.clearRect(0, 0, l, h);
    let _ = !1;
    for (const mt of Ar()) {
      if (mt.type === "strokeGroup") {
        const yt = ((bt = (Q = f.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : bt.call(Q, mt.actionGroupId)) || null;
        if (!yt) continue;
        g.ctx.drawImage(yt, 0, 0), _ = !0;
        continue;
      }
      if (mt.type === "rasterObject" && String(((dt = mt.item) == null ? void 0 : dt.layerKind) || "paint") === "paint") {
        const yt = Xo(mt.item, () => ft());
        if (!yt) continue;
        g.ctx.drawImage(yt, 0, 0), _ = !0;
      }
    }
    return _ ? g.canvas : null;
  }
  function Sp(r = null) {
    var b, v, S, w, N, E, T;
    si();
    const a = r || ((v = (b = f.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, ei(!1))) || null, s = ((S = a == null ? void 0 : a.committedMask) == null ? void 0 : S.canvas) || null, l = Math.max(1, Number(((w = a == null ? void 0 : a.descriptor) == null ? void 0 : w.width) || (s == null ? void 0 : s.width) || 2048)), h = Math.max(1, Number(((N = a == null ? void 0 : a.descriptor) == null ? void 0 : N.height) || (s == null ? void 0 : s.height) || 1024)), g = ln().filter(($) => String(($ == null ? void 0 : $.layerKind) || "paint") === "mask").slice().sort(($, B) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((B == null ? void 0 : B.z_index) || 0));
    if (!s && !g.length) return null;
    (!f._maskComposeSurface || Number(((E = f._maskComposeSurface.canvas) == null ? void 0 : E.width) || 0) !== l || Number(((T = f._maskComposeSurface.canvas) == null ? void 0 : T.height) || 0) !== h) && (f._maskComposeSurface = Tr(l, h));
    const _ = f._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, h), s && _.ctx.drawImage(s, 0, 0);
    for (const $ of g) {
      const B = Xo($, () => ft());
      B && _.ctx.drawImage(B, 0, 0);
    }
    return _.canvas;
  }
  function Np() {
    var T, $, B;
    const r = f.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const a = (r == null ? void 0 : r.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = Xn(), l = `${ni()}:${s.width}:${s.height}`;
    if (((T = f._activePaintEraserPreviewInfo) == null ? void 0 : T.cacheKey) === l)
      return f._activePaintEraserPreviewInfo.value || null;
    const h = on(a), g = (h == null ? void 0 : h.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const tt = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = js(tt, h.targetSpace, !0);
    }
    const _ = Tr(s.width, s.height);
    if (!tu(_, h, { w: s.width, h: s.height })) return null;
    const b = ((B = ($ = _.ctx) == null ? void 0 : $.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!b) return null;
    let v = s.width, S = s.height, w = -1, N = -1;
    for (let tt = 0; tt < s.height; tt += 1)
      for (let Q = 0; Q < s.width; Q += 1)
        b[(tt * s.width + Q) * 4 + 3] <= 8 || (Q < v && (v = Q), tt < S && (S = tt), Q > w && (w = Q), tt > N && (N = tt));
    if (w < v || N < S)
      return f._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: v, minY: S, maxX: w, maxY: N },
      key: `${l}:${v}:${S}:${w}:${N}`
    };
    return f._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function Yi() {
    f._activePaintEraserPreviewInfo = null, f._liveEraserPreviewCanvasCache = null;
  }
  function Mp(r, a, s) {
    var l, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const g = r.item.bbox, _ = ((h = r.item) == null ? void 0 : h.transform) || {}, b = Number(g.u0 || 0) + Number(_.du || 0), v = Number(g.u1 || 0) + Number(_.du || 0), S = Number(g.v0 || 0) + Number(_.dv || 0), w = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(w, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = yn(r.actionGroupId, "paint"), _ = Cr(r.actionGroupId, "paint", g);
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
  function Pp(r, a, s) {
    if (!r || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], h = l(r), g = l(a);
    return h.some((_) => g.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function zl(r, a, s) {
    var N, E, T;
    if (!r || !a || !((N = s == null ? void 0 : s.surface) != null && N.canvas) || a.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return r;
    const g = Mp(a, l, h);
    if (g && !Pp(g, s.bounds, l)) return r;
    const _ = String(((E = a.item) == null ? void 0 : E.id) || a.id || ""), b = ((T = a.item) == null ? void 0 : T.transform) || {}, v = `${s.key}:${_}:${l}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = f._liveEraserPreviewCanvasCache instanceof Map ? f._liveEraserPreviewCanvasCache : f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const w = Tr(l, h);
    return w.ctx.clearRect(0, 0, l, h), w.ctx.drawImage(r, 0, 0), w.ctx.save(), w.ctx.globalCompositeOperation = "destination-out", w.ctx.drawImage(s.surface.canvas, 0, 0), w.ctx.restore(), S.size > 64 && S.clear(), S.set(v, w.canvas), w.canvas;
  }
  function Xo(r, a = null) {
    const s = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const h = $l(r, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: g, height: _ } = xp(), b = (r == null ? void 0 : r.transform) || {}, v = [
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
      Lr()
    ].join(":"), S = Xt.get(v);
    if (S) return S;
    Xt.size > 64 && Xt.clear();
    const w = document.createElement("canvas");
    w.width = g, w.height = _;
    const N = w.getContext("2d");
    if (!N) return null;
    const E = Number(l.u0 || 0) * g, T = Number(l.v0 || 0) * _, $ = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), tt = E + $ * 0.5 + Number(b.du || 0) * g, Q = T + B * 0.5 + Number(b.dv || 0) * _, bt = Number(b.rot_deg || 0) * Fe, dt = Math.max(0.01, Number(b.scale || 1));
    for (const mt of [-g, 0, g])
      N.save(), N.translate(tt + mt, Q), N.rotate(bt), N.scale(dt, dt), N.drawImage(h, -$ * 0.5, -B * 0.5, $, B), N.restore();
    return Xt.set(v, w), w;
  }
  function kp() {
    return Ho(p, {
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Cp(r) {
    return zc(
      p,
      (a, s, l) => Ts(l || a),
      { scene: r }
    );
  }
  function Ap(r) {
    return Ho(p, {
      stickers: r ? [r] : [],
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ip(r, a) {
    return zc(
      p,
      (s, l, h) => Ts(h || s),
      { scene: a, stickers: r ? [r] : [] }
    );
  }
  function Zo(r, a, s, l, h = "modal_object_view") {
    var E, T, $, B, tt;
    if (!r || !a || !s) return !1;
    let g = !1;
    const _ = Np(), b = Kl(a, s);
    let v = !1;
    const S = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1, w = b && S && (f.showObjects || f.showMask);
    if (b)
      v = zp(
        a,
        s,
        S && f.showPanorama ? l : null,
        `${h}_bg_gl`
      ), g = g || !!v;
    else if (S && f.showPanorama) {
      const Q = ha({
        owner: t,
        cacheKey: `${h}_bg_only`,
        ctx: r,
        rect: a,
        img: l,
        view: s
      });
      g = g || !!Q;
    }
    if (f.showObjects)
      for (const Q of Ms(!0)) {
        if (Q.type === "sticker" && Q.item) {
          if (b && v) continue;
          const bt = Ap(Q.item), dt = Ip(Q.item, bt), mt = Ui({
            owner: t,
            cacheKey: `${h}_sticker_${String(Q.id || Q.item.id || "")}`,
            ctx: r,
            rect: a,
            backgroundSource: null,
            textures: dt,
            scene: bt,
            view: s
          });
          g = g || !!mt;
          continue;
        }
        if (Q.type === "rasterObject" && Q.item) {
          if (w && v) continue;
          let bt = Xo(Q.item, () => ft());
          if (!bt) continue;
          const dt = _ ? `_${_.key}` : "";
          _ && (bt = zl(bt, Q, _));
          const mt = ((E = Q.item) == null ? void 0 : E.transform) || {};
          ha({
            owner: t,
            cacheKey: `${h}_raster_${String(Q.id || Q.item.id || "")}`,
            ctx: r,
            rect: a,
            img: bt,
            view: s,
            backgroundRevision: `${Dr()}_raster_${String(Q.id || Q.item.id || "")}_${Number(mt.du || 0).toFixed(6)}_${Number(mt.dv || 0).toFixed(6)}_${Number(mt.rot_deg || 0).toFixed(3)}_${Number(mt.scale || 1).toFixed(4)}${dt}`,
            backgroundOpacity: 1
          }), g = !0;
          continue;
        }
        if (Q.type === "strokeGroup") {
          if (w && v) continue;
          let bt = (($ = (T = f.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : $.call(T, Q.actionGroupId)) || null;
          if (!bt) continue;
          _ && (bt = zl(bt, Q, _)), ha({
            owner: t,
            cacheKey: `${h}_group_${String(Q.actionGroupId || "")}`,
            ctx: r,
            rect: a,
            img: bt,
            view: s,
            backgroundRevision: `${Lr()}_${String(Q.actionGroupId || "")}${ni()}`,
            backgroundOpacity: 1
          }), g = !0;
        }
      }
    const N = f.showMask && ((tt = (B = f.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas) == null ? void 0 : tt.call(B)) || null;
    return N && !(w && v) && (ha({
      owner: t,
      cacheKey: `${h}_mask`,
      ctx: r,
      rect: a,
      img: N,
      view: s,
      backgroundRevision: `${Lr()}${ni()}_mask`,
      backgroundOpacity: 1
    }), g = !0), g;
  }
  async function Ls(r, a = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
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
      name: String((r == null ? void 0 : r.name) || a)
    };
  }
  async function Ds(r, a) {
    const s = await new Promise((b) => r.toBlob(b, "image/png")), l = new FormData();
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
  let Rs = null, Jo = !1;
  function Ep() {
    const r = Wf(p.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = Dr();
    return !a || typeof a != "object" || String(a.revision || "") !== s || r.totalPaintCount > 0 && !a.paint || r.totalMaskCount > 0 && !a.mask;
  }
  function Os() {
    const r = String(t.id ?? "0"), a = bo.get(r);
    if (Jo && a) return a;
    const s = (async () => {
      var g, _, b, v, S, w, N, E, T, $;
      const l = Dr(), h = Wf(p.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Rs = l, En());
        return;
      }
      if (Rs !== l && !Jo) {
        Jo = !0;
        try {
          si();
          const B = ei(!1), tt = ((_ = (g = f.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, B)) || null, Q = Vl(B), bt = Sp(tt), dt = Math.max(1, Number(((b = tt == null ? void 0 : tt.descriptor) == null ? void 0 : b.width) || (Q == null ? void 0 : Q.width) || (bt == null ? void 0 : bt.width) || 2048)), mt = Math.max(1, Number(((v = tt == null ? void 0 : tt.descriptor) == null ? void 0 : v.height) || (Q == null ? void 0 : Q.height) || (bt == null ? void 0 : bt.height) || 1024));
          (!Q && h.totalPaintCount > 0 || !bt && h.totalMaskCount > 0) && ((!f._paintLayerSyncBlankSurface || Number(((S = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : S.width) || 0) !== dt || Number(((w = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : w.height) || 0) !== mt) && (f._paintLayerSyncBlankSurface = Tr(dt, mt)), f._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, dt, mt));
          const yt = Q || h.totalPaintCount > 0 && ((N = f._paintLayerSyncBlankSurface) == null ? void 0 : N.canvas) || null, wt = bt || h.totalMaskCount > 0 && ((E = f._paintLayerSyncBlankSurface) == null ? void 0 : E.canvas) || null;
          if (!yt && !wt) return;
          let gt = null, K = null;
          const st = [];
          if (h.totalPaintCount > 0) {
            gt = await Ds(yt, `pano_paint_${r}.png`);
            for (const Tt of B) {
              const Ot = String(Tt || "").trim();
              if (!Ot) continue;
              const Lt = (($ = (T = f.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : $.call(T, Ot)) || null;
              if (!Lt) continue;
              const Ht = Ot.replace(/[^a-zA-Z0-9_-]+/g, "_"), jt = await Ds(Lt, `pano_group_${r}_${Ht}.png`);
              jt && st.push({
                id: Ot,
                actionGroupId: Ot,
                image: jt
              });
            }
          }
          h.totalMaskCount > 0 && (K = await Ds(wt, `pano_mask_${r}.png`)), l === Dr() && (p.painting_layer = {
            paint: gt,
            mask: K,
            groups: st,
            revision: l
          }, Rs = l, En());
        } catch (B) {
          console.warn("[pano] paint layer upload failed:", B);
        } finally {
          Jo = !1;
        }
      }
    })();
    return bo.set(r, s), s.finally(() => {
      bo.get(r) === s && bo.delete(r);
    }), s;
  }
  function Er() {
    const r = Tv(t, "pano_input_images", Ct, () => ft());
    if (r) return r;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let h = [];
    return i && (s || l) ? h = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Xf(t, h, () => ft(), `background:${h.join("|")}`);
  }
  function Ul(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Tp() {
    if (!Pt.hasPresentedFrame) return "boot";
    let r = !1, a = !1;
    if (f.showPanorama) {
      const s = Er();
      r = !!s && !Ul(s);
    }
    if (f.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = Ts(l);
        if (h && !Ul(h)) {
          a = !0;
          break;
        }
      }
    }
    return r && a ? "mixed" : r ? "background" : a ? "stickers" : "";
  }
  function Xi() {
    const r = new Set(
      (p.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(p.assets || {}).forEach((a) => {
      r.has(a) || (delete p.assets[a], Ct.delete(a));
    });
  }
  function Fs(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(j(r.y, -1, 1))
    };
  }
  function $s(r, a = null) {
    const { lon: s, lat: l } = Fs(r), h = dr();
    let g = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const _ = h.y + (0.5 - l / Math.PI) * h.h;
    if (a !== null) {
      for (; g - a > h.w / 2; ) g -= h.w;
      for (; g - a < -h.w / 2; ) g += h.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Qo(r) {
    const a = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Kn(0, 1, 0);
    Math.abs(xn(a, s)) > 0.999 && (s = Kn(0, 0, 1));
    const l = bi(Na(s, a)), h = bi(Na(a, l)), g = Math.tan(j(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Fe), _ = Math.tan(j(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Fe), b = Number(r.rot_deg || r.roll_deg || 0) * Fe, v = Math.cos(b), S = Math.sin(b);
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
  function hr(r, a, s) {
    const l = a * r.cr - s * r.sr, h = a * r.sr + s * r.cr;
    return bi(xa(xa(r.centerDir, Sa(r.right, l)), Sa(r.up, h)));
  }
  function jl(r) {
    const a = Qo(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => hr(a, l * a.tanX, h * a.tanY));
  }
  function Bl(r, a, s) {
    const l = Qo(r), h = (a * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return hr(l, h, g);
  }
  function Lp(r) {
    const a = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: j((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Dp(r) {
    var v, S, w, N;
    const a = (r == null ? void 0 : r.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = r == null ? void 0 : r.transform) == null ? void 0 : v.scale) || 1)), h = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), g = Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.du) || 0), _ = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((E) => Ko(Wo(E, s, l, h), g, _));
  }
  function Rp(r) {
    const a = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, h = `${a}:${f.mode}:${Lr()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (f.mode === "frame") {
      const g = ie(), _ = g ? Ye(g) : null;
      return `${h}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Op(r) {
    const a = String((r == null ? void 0 : r.id) || ""), l = [
      mn(r) ? "frame" : De(r) ? "sticker" : "item",
      a,
      f.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      vi(r)
    ].join(":");
    if (f.mode === "frame") {
      const h = ie(), g = h ? Ye(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Fp() {
    var a;
    const r = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return r === "draft" ? f.hqFrames && f.hqFrames > 0 ? [28, 20] : f.interaction ? [12, 9] : [20, 14] : r === "high" ? f.hqFrames && f.hqFrames > 0 ? [48, 36] : f.interaction ? [20, 14] : [36, 26] : f.hqFrames && f.hqFrames > 0 ? [40, 30] : f.interaction ? [16, 12] : [28, 20];
  }
  function Gl() {
    var r;
    return !!(F && ((r = J == null ? void 0 : J.isSupported) != null && r.call(J)));
  }
  function Kl(r, a) {
    return !Gl() || e !== "stickers" || String((a == null ? void 0 : a.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function $p() {
    return f.showObjects ? kp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Hp(r) {
    return !f.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Cp(r);
  }
  function Vp() {
    if (!F) return;
    const r = F.getContext("webgl2");
    if (r)
      r.viewport(0, 0, F.width, F.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const a = F.getContext("2d");
      a && (a.clearRect(0, 0, F.width, F.height), a.fillStyle = "#070707", a.fillRect(0, 0, F.width, F.height));
    }
    Pt.backgroundWasVisible = !1, Pt.backgroundDirty = !1;
  }
  function zp(r, a, s, l = "modal_bg_gl") {
    var E, T, $;
    if (!Kl(r, a)) return !1;
    if (!Pt.backgroundDirty && Pt.backgroundWasVisible) return !0;
    const h = $p(), g = Hp(h), _ = (f.showObjects || f.showMask) && ((T = (E = f.paintEngine) == null ? void 0 : E.getErpTarget) == null ? void 0 : T.call(E, ei(!1))) || null, b = (($ = _ == null ? void 0 : _.displayPaint) == null ? void 0 : $.canvas) || null, v = !!s && !!s.complete && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1, S = b ? `${l}:paint:${Dr()}:${ni()}` : "";
    if (!v && g.length === 0 && !b)
      return Vp(), !1;
    const w = v ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "none", N = J.renderScene({
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundSource: v ? s : null,
      backgroundRevision: v ? `${l}:${w}` : "",
      paintSource: b,
      paintRevision: S,
      textures: g,
      scene: h,
      view: a,
      backgroundOpacity: 1
    });
    return Pt.backgroundWasVisible = !!N, Pt.backgroundDirty = !N, !!N;
  }
  function Up(r = !1) {
    const a = C.width, s = C.height, l = dr();
    if (P.globalAlpha = 1, P.lineWidth = 1, r || (P.fillStyle = "#070707", P.fillRect(0, 0, a, s), P.fillStyle = "#070707", P.fillRect(l.x, l.y, l.w, l.h)), si(), Zo(
      P,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Er(),
      "modal_unwrap"
    ), f.showGrid && !f.fullscreen) {
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
  function Wl(r, a, s = 1) {
    let l = !1;
    P.strokeStyle = a, P.lineWidth = s, P.beginPath();
    for (const h of r) {
      const g = qi(h);
      if (!g) {
        l = !1;
        continue;
      }
      l ? P.lineTo(g.x, g.y) : (P.moveTo(g.x, g.y), l = !0);
    }
    P.stroke();
  }
  function jp(r = !1) {
    const a = C.width, s = C.height;
    if (r || (Gl() ? P.clearRect(0, 0, a, s) : (P.fillStyle = "#070707", P.fillRect(0, 0, a, s))), si(), Zo(
      P,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: f.viewYaw,
        pitchDeg: f.viewPitch,
        fovDeg: f.viewFov
      },
      Er(),
      "modal_pano"
    ), f.showGrid && !f.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push($n(h, _));
        Wl(g, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push($n(_, h));
        Wl(g, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", l.forEach((h) => {
        const g = qi(h.dir);
        g && P.fillText(h.name, g.x, g.y + 24);
      });
    }
  }
  function ql(r, a = null, s = null) {
    if (f.mode === "frame") {
      const l = a || ie();
      if (!l) return [];
      const h = s || Ye(l);
      return wg(r, l, h);
    }
    return bg(r);
  }
  function Bp(r, a) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = yn(s, r.layerKind), h = [], g = [], _ = f.mode === "frame" ? ie() : null, b = _ ? Ye(_) : null;
    for (const dt of l) {
      const mt = (dt == null ? void 0 : dt.geometry) || null, yt = (mt == null ? void 0 : mt.geometryKind) === "lasso_fill" ? mt == null ? void 0 : mt.points : (mt == null ? void 0 : mt.processedPoints) || (mt == null ? void 0 : mt.rawPoints) || (mt == null ? void 0 : mt.points) || [], wt = ql(yt, _, b).filter((st) => Number.isFinite(st == null ? void 0 : st.x) && Number.isFinite(st == null ? void 0 : st.y));
      if (!wt.length) continue;
      g.push(...wt);
      const gt = yr(String((dt == null ? void 0 : dt.toolKind) || "pen")), K = rn[gt] || rn[nr];
      h.push({
        points: wt,
        closed: String((mt == null ? void 0 : mt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((dt == null ? void 0 : dt.size) || 10) * Math.max(0.1, Number((K == null ? void 0 : K.sizeScale) ?? 1)) + 10),
        layerKind: String((dt == null ? void 0 : dt.layerKind) || r.layerKind || "paint")
      });
    }
    if (!g.length) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(a, dt), dt;
    }
    let v = 1 / 0, S = 1 / 0, w = -1 / 0, N = -1 / 0;
    for (const dt of h)
      for (const yt of Array.isArray(dt == null ? void 0 : dt.points) ? dt.points : []) {
        const wt = Number((yt == null ? void 0 : yt.x) || 0), gt = Number((yt == null ? void 0 : yt.y) || 0);
        v = Math.min(v, wt - 2), S = Math.min(S, gt - 2), w = Math.max(w, wt + 2), N = Math.max(N, gt + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(S) || !Number.isFinite(w) || !Number.isFinite(N)) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(a, dt), dt;
    }
    const E = [
      { x: v, y: S },
      { x: w, y: S },
      { x: w, y: N },
      { x: v, y: N }
    ], T = { x: (v + w) * 0.5, y: (S + N) * 0.5 }, $ = { x: T.x, y: S }, B = { x: w, y: T.y }, tt = { x: T.x, y: N }, Q = { x: v, y: T.y }, bt = {
      kind: "strokeGroup",
      center: T,
      corners: E,
      edgeMidpoints: [
        { edge: "top", x: $.x, y: $.y, a: E[0], b: E[1] },
        { edge: "right", x: B.x, y: B.y, a: E[1], b: E[2] },
        { edge: "bottom", x: tt.x, y: tt.y, a: E[2], b: E[3] },
        { edge: "left", x: Q.x, y: Q.y, a: E[3], b: E[0] }
      ],
      rotateStemBase: $,
      rotateHandle: { x: $.x, y: $.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return f._strokeGeomCache.set(a, bt), bt;
  }
  function Gp(r, a) {
    const s = Dp(r), l = ql(s);
    if (!Array.isArray(l) || l.length < 4) {
      const b = { visible: !1, kind: "rasterObject" };
      return f._strokeGeomCache.set(a, b), b;
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
    return f._strokeGeomCache.set(a, _), _;
  }
  function pr(r, a = null, s = null, l = null) {
    if (f.mode === "frame") {
      const bt = s || ie(), dt = l || Ye(bt), mt = bt ? Qi(bt, r) : null;
      return mt ? {
        x: Number(dt.x || 0) + Number(mt.x || 0) * Number(dt.w || 0),
        y: Number(dt.y || 0) + Number(mt.y || 0) * Number(dt.h || 0),
        z: 1
      } : null;
    }
    if (f.mode === "unwrap") return $s(r, a);
    const { right: h, up: g, fwd: _ } = Is(), b = xn(r, h), v = xn(r, g), S = xn(r, _), w = C.width, N = C.height, E = f.viewFov * Fe, T = 2 * Math.atan(Math.tan(E / 2) * (N / Math.max(w, 1))), $ = w / 2 / Math.tan(E / 2), B = N / 2 / Math.tan(T / 2), tt = Math.max(S, 1e-4), Q = Math.max(w, N) * 2;
    return {
      x: j(w / 2 + b / tt * $, -Q, w + Q),
      y: j(N / 2 - v / tt * B, -Q, N + Q),
      z: tt
    };
  }
  function Kp(r) {
    const a = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = f.mode === "frame" ? ie() : null, l = s ? Ye(s) : null, h = pr(a, null, s, l);
    if (!h) return { visible: !1 };
    const g = Qo(r), b = jl(r).map((yt) => pr(yt, h.x, s, l)), v = hr(g, 0, g.tanY), S = hr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), w = pr(v, h.x, s, l), N = pr(S, (w == null ? void 0 : w.x) ?? h.x, s, l), E = ((N == null ? void 0 : N.x) ?? w.x) - w.x, T = ((N == null ? void 0 : N.y) ?? w.y) - w.y, $ = Math.hypot(E, T) || 1, B = {
      x: w.x + E / $ * 30,
      y: w.y + T / $ * 30
    }, tt = pr(hr(g, 0, g.tanY), h.x, s, l), Q = pr(hr(g, g.tanX, 0), h.x, s, l), bt = pr(hr(g, 0, -g.tanY), h.x, s, l), dt = pr(hr(g, -g.tanX, 0), h.x, s, l), mt = [
      {
        edge: "top",
        x: tt.x,
        y: tt.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: Q.x,
        y: Q.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: bt.x,
        y: bt.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: dt.x,
        y: dt.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((yt) => ({ x: yt.x, y: yt.y })),
      edgeMidpoints: mt,
      rotateStemBase: { x: w.x, y: w.y },
      rotateHandle: B,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Re(r) {
    if (Te(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), g = Zh(h, r.layerKind), _ = f._strokeGeomCache.get(g);
      return _ || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Bp(r, g));
    }
    if (We(r)) {
      const h = Rp(r), g = f._strokeGeomCache.get(h);
      return g || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Gp(r, h));
    }
    const a = Op(r), s = f._strokeGeomCache.get(a);
    if (s) return s;
    f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear();
    const l = Kp(r);
    return f._strokeGeomCache.set(a, l), l;
  }
  function ta(r, a, s, l = null) {
    const h = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let b = 0, v = 0;
      a === 0 ? (b = _, v = 0) : a === 1 ? (b = 1, v = _) : a === 2 ? (b = 1 - _, v = 1) : (b = 0, v = 1 - _);
      const S = Bl(r, b, v), w = f.mode === "unwrap" ? $s(S, l) : qi(S);
      w && h.push(w);
    }
    return h;
  }
  function Wp(r, a) {
    const s = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = f.mode === "unwrap" ? $s(s) : null, h = l ? l.x : null, g = f.mode === "pano" ? 28 : 20, _ = [
      ta(r, 0, g, h),
      ta(r, 1, g, h),
      ta(r, 2, g, h),
      ta(r, 3, g, h)
    ];
    P.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", P.lineWidth = a ? 2 : 1, P.beginPath();
    let b = !1;
    for (const v of _)
      for (const S of v)
        b ? P.lineTo(S.x, S.y) : (P.moveTo(S.x, S.y), b = !0);
    P.closePath(), P.stroke();
  }
  function qp() {
    const r = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (f.mode === "frame") return r;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...r, ...a];
  }
  function Hs() {
    const r = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (f.mode === "frame") return r;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...r, ...a];
  }
  function Vs(r, a = []) {
    if (!(!r || !Array.isArray(a) || a.length < 4)) {
      r.beginPath(), r.moveTo(a[0].x, a[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(a[s].x, a[s].y);
      r.closePath();
    }
  }
  function Yp(r, a, s, l) {
    if (De(r)) {
      const h = P.globalAlpha;
      P.globalAlpha = ip(r), f.mode === "frame" ? (P.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = s ? 2 : 1, Vs(P, a.corners), P.stroke()) : Wp(r, s), P.globalAlpha = h;
      return;
    }
    P.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Vs(P, a.corners), P.fill(), P.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = s ? 2.8 : 1.9, Vs(P, a.corners), P.stroke();
  }
  function Xp(r, a, s) {
    P.fillStyle = s, a.corners.forEach((l) => {
      P.beginPath(), P.arc(l.x, l.y, 6.5, 0, Math.PI * 2), P.fill();
    }), mn(r) && (P.strokeStyle = s, P.lineCap = "round", P.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var w, N, E, T;
      const h = (((w = l.b) == null ? void 0 : w.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), g = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((T = l.a) == null ? void 0 : T.y) ?? l.y), _ = Math.hypot(h, g) || 1, b = h / _, v = g / _, S = 10;
      P.beginPath(), P.moveTo(l.x - b * S, l.y - v * S), P.lineTo(l.x + b * S, l.y + v * S), P.stroke();
    }), P.lineCap = "butt"), Te(r) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), P.lineTo(a.rotateHandle.x, a.rotateHandle.y), P.stroke(), P.fillStyle = s, P.beginPath(), P.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function Zp() {
    var b;
    const [r, a] = Fp(), s = An(), l = s.length > 1, h = e === "cutout" ? qp() : Me(), g = h.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${mn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!f._sortedItemsCache || f._sortedItemsCache.src !== h || f._sortedItemsCache.orderKey !== g) && (f._sortedItemsCache = {
      src: h,
      orderKey: g,
      sorted: [...h]
    });
    const _ = f._sortedItemsCache.sorted;
    for (const v of _) {
      const S = !l && Jh(v);
      if (f.mode === "frame" && !S || !f.showObjects && !mn(v)) continue;
      const w = Re(v);
      if (e !== "stickers" && !w.visible)
        continue;
      const N = De(v), E = fr(v);
      if (Yp(v, w, S, E), S && w.visible) {
        const T = E ? "#ff4d4f" : N && Ce(v) ? "#f59e0b" : "#0070f3";
        Xp(v, w, T);
      }
    }
    if (l) {
      const v = ks(s);
      if (v != null && v.visible) {
        const S = Cs(s) ? "#ff4d4f" : "#0070f3";
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
        for (let N = 1; N < S.corners.length; N += 1) P.lineTo(S.corners[N].x, S.corners[N].y);
        P.closePath(), P.stroke(), P.setLineDash([]), Te(v) && (P.fillStyle = w, S.corners.forEach((N) => {
          P.beginPath(), P.arc(N.x, N.y, 6.5, 0, Math.PI * 2), P.fill();
        })), P.restore();
      });
    if (((b = f.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = gu(f.interaction.start, f.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), P.fill(), P.stroke(), P.restore();
    }
    f.hqFrames && r >= 40 && a >= 30 && (f.hqFrames -= 1, f.hqFrames > 0 && ft());
  }
  function Yl(r) {
    const a = ki(r), s = j(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Jp() {
    var s;
    const r = Array.isArray(p.stickers) ? p.stickers : [], a = Array.isArray((s = p.painting) == null ? void 0 : s.raster_objects) ? p.painting.raster_objects : [];
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
      rasters: a.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function Xl(r, a = {}) {
    if (!r) return "";
    const s = Er(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", h = Yl(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      JSON.stringify(r || null),
      Dr(),
      Jp(),
      ni(),
      l,
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function Zl(r = {}) {
    var b, v;
    if (e !== "cutout") return null;
    const a = r.shot || ie();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = Yl(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = Xl(a, r);
    if (((b = t.__panoCutoutPreviewSurface) == null ? void 0 : b.source) === t.__panoCutoutPreviewCanvas && ((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = t.__panoCutoutPreviewCanvas, g = h.getContext("2d");
    return g ? tg(
      g,
      { x: 0, y: 0, w: s.width, h: s.height },
      a,
      {
        cachePrefix: "shared_cutout_preview_surface",
        quality: String(r.quality || "balanced")
      }
    ) ? (t.__panoCutoutPreviewSurface = {
      source: h,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null : (t.__panoCutoutPreviewSurface = null, null);
  }
  function Qp() {
    if (e !== "cutout") return;
    const r = ie();
    if (!r) {
      f.outputPreviewRect = null, lt && (lt.style.display = "none");
      return;
    }
    const a = 14, s = j(Number(f.outputPreviewAnim ?? (f.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), h = Math.max(260, Math.min(560, C.width * 0.62)), g = Math.max(76, Math.min(150, C.height * 0.22)), _ = Math.max(160, Math.min(340, C.height * 0.48)), b = Sn(l, h, s), v = Sn(g, _, s), S = ki(r), w = Number((S == null ? void 0 : S.aspect) || 1);
    let N = b, E = N / w;
    E > v && (E = v, N = E * w);
    const T = C.width - a - N, $ = a, B = 12;
    f.outputPreviewRect = { x: T, y: $, w: N, h: E };
    const tt = () => {
      if (!lt) return;
      const wt = `${Math.round(T + N - 8 - 24)}px`, gt = `${Math.round($ + 8)}px`;
      lt.style.display = "inline-flex", lt.style.left !== wt && (lt.style.left = wt), lt.style.top !== gt && (lt.style.top = gt);
    }, Q = (wt, gt, K, st, Tt) => {
      const Ot = Math.max(0, Math.min(Tt, Math.min(K, st) * 0.5));
      P.beginPath(), typeof P.roundRect == "function" ? P.roundRect(wt, gt, K, st, Ot) : (P.moveTo(wt + Ot, gt), P.arcTo(wt + K, gt, wt + K, gt + st, Ot), P.arcTo(wt + K, gt + st, wt, gt + st, Ot), P.arcTo(wt, gt + st, wt, gt, Ot), P.arcTo(wt, gt, wt + K, gt, Ot)), P.closePath();
    };
    P.save(), P.shadowColor = "rgba(0, 0, 0, 0.45)", P.shadowBlur = 22, P.shadowOffsetX = 0, P.shadowOffsetY = 8, P.fillStyle = "rgba(10, 10, 10, 0.72)", Q(T, $, N, E, B), P.fill(), P.restore(), P.save(), Q(T, $, N, E, B), P.clip();
    const bt = Xl(r, { quality: "balanced" });
    let dt = t.__panoCutoutPreviewSurface;
    (!dt || dt.revision !== bt) && !f.interaction && !f.cutoutPreviewSurfaceRaf && !f.cutoutPreviewSurfaceTimer && (dt = Zl({ shot: r, quality: "balanced" }));
    const mt = (dt == null ? void 0 : dt.source) || null, yt = !!(mt && Number(mt.width || 0) > 1 && Number(mt.height || 0) > 1);
    if ((dt == null ? void 0 : dt.revision) !== bt && zs(), !yt) {
      P.fillStyle = "rgba(255, 255, 255, 0.06)", P.fillRect(T, $, N, E), P.strokeStyle = "rgba(255, 255, 255, 0.12)", P.lineWidth = 1, P.strokeRect(T + 0.5, $ + 0.5, N - 1, E - 1), zs(), P.restore(), tt();
      return;
    }
    P.drawImage(mt, T, $, N, E), P.restore(), tt();
  }
  function tg(r, a, s, l = {}) {
    const h = Er();
    return vb({
      owner: t,
      ctx: r,
      rect: a,
      shot: s,
      bgImage: h,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: Zo
    });
  }
  function eg() {
    Zl();
  }
  function zs() {
    if (e !== "cutout") return;
    const r = performance.now(), a = Xh(), s = r - Number(f.cutoutPreviewSurfaceLastTs || 0);
    if (f.cutoutPreviewSurfaceRaf || f.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      f.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, g, _, b, v, S, w, N;
        f.cutoutPreviewSurfaceRaf = 0, f.cutoutPreviewSurfaceLastTs = performance.now(), eg(), Pt.dirty = !0, (g = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (v = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || v.call(b, !0, !0), (N = (w = (S = pn) == null ? void 0 : S.canvas) == null ? void 0 : w.setDirty) == null || N.call(w, !0, !0);
      });
    };
    if (s >= a) {
      l();
      return;
    }
    f.cutoutPreviewSurfaceTimer = window.setTimeout(() => {
      f.cutoutPreviewSurfaceTimer = 0, f.cutoutPreviewSurfaceRaf || l();
    }, Math.max(0, Math.ceil(a - s)));
  }
  function Us(r, a) {
    if (!r || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return Bl(r, s, l);
  }
  function Zi(r) {
    if (!r) return null;
    const a = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return Kn(l * Math.sin(a), Math.sin(s), l * Math.cos(a));
  }
  function qe(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function gr(r, a, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Ve(r, "widthScale", 1),
      pressureLike: Ve(r, "pressureLike", 1)
    }, ...l, u: a, v: s };
  }
  function ng(r, a, s) {
    const l = qe(r), h = qe(a);
    return gr(r, Sn(l.x, h.x, s), Sn(l.y, h.y, s), {
      t: Sn(Number((r == null ? void 0 : r.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: Sn(Ve(r, "widthScale", 1), Ve(a, "widthScale", 1), s),
      pressureLike: Sn(Ve(r, "pressureLike", 1), Ve(a, "pressureLike", 1), s)
    });
  }
  function rg(r, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function js(r, a, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    if (r.length === 1) return [gr(r[0], qe(r[0]).x, qe(r[0]).y)];
    const l = rg(a, s), h = (w, N) => {
      const E = [0];
      for (let mt = 1; mt < w.length; mt += 1) {
        const yt = qe(w[mt - 1]), wt = qe(w[mt]);
        E.push(E[mt - 1] + Math.hypot(wt.x - yt.x, wt.y - yt.y));
      }
      const T = E[E.length - 1] || 0;
      if (T <= 1e-8) {
        const mt = w[0], yt = qe(mt);
        return [gr(mt, yt.x, yt.y)];
      }
      const $ = [];
      let B = 0;
      for (let mt = 0; mt <= T + 1e-9; mt += N) {
        for (; B < E.length - 2 && E[B + 1] < mt; ) B += 1;
        const yt = E[B], wt = E[B + 1], gt = Math.max(1e-8, wt - yt);
        $.push(ng(w[B], w[B + 1], j((mt - yt) / gt, 0, 1)));
      }
      const tt = w[w.length - 1], Q = qe(tt), bt = $[$.length - 1], dt = bt ? qe(bt) : null;
      return (!dt || Math.hypot(dt.x - Q.x, dt.y - Q.y) > N * 0.35) && $.push(gr(tt, Q.x, Q.y)), $;
    }, g = (w) => {
      if (!Array.isArray(w) || w.length < 3) return w ? w.slice() : [];
      const N = [gr(w[0], qe(w[0]).x, qe(w[0]).y)];
      for (let E = 0; E < w.length - 1; E += 1) {
        const T = w[E], $ = w[E + 1], B = qe(T), tt = qe($), Q = gr(
          T,
          B.x * 0.75 + tt.x * 0.25,
          B.y * 0.75 + tt.y * 0.25,
          {
            t: Number(T.t || 0) * 0.75 + Number($.t || 0) * 0.25,
            widthScale: Ve(T, "widthScale", 1) * 0.75 + Ve($, "widthScale", 1) * 0.25,
            pressureLike: Ve(T, "pressureLike", 1) * 0.75 + Ve($, "pressureLike", 1) * 0.25
          }
        ), bt = gr(
          T,
          B.x * 0.25 + tt.x * 0.75,
          B.y * 0.25 + tt.y * 0.75,
          {
            t: Number(T.t || 0) * 0.25 + Number($.t || 0) * 0.75,
            widthScale: Ve(T, "widthScale", 1) * 0.25 + Ve($, "widthScale", 1) * 0.75,
            pressureLike: Ve(T, "pressureLike", 1) * 0.25 + Ve($, "pressureLike", 1) * 0.75
          }
        );
        N.push(Q, bt);
      }
      return N.push(gr(w[w.length - 1], qe(w[w.length - 1]).x, qe(w[w.length - 1]).y)), N;
    }, _ = h(r, l);
    if (_.length < 3) return _;
    const b = s ? 2 : 1;
    let v = _.slice();
    for (let w = 0; w < b; w += 1) v = g(v);
    return h(v, Math.max(l * 0.75, 55e-5));
  }
  function Ve(r, a, s = 1) {
    const l = Number(r == null ? void 0 : r[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function ig(r) {
    const a = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(a) && a > 0) {
      const s = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: a
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function Tr(r, a) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(r)), s.height = Math.max(1, Math.round(a));
    const l = s.getContext("2d");
    return l && (l.clearRect(0, 0, s.width, s.height), l.imageSmoothingEnabled = !0), { canvas: s, ctx: l };
  }
  function Lr() {
    const r = ea();
    return `${String(f.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function Dr() {
    const r = ea();
    return `${String(f.paintStrokeRevision)}:${String(f.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function og() {
    f.paintStrokeRevision += 1, f.paintCompositeRevision += 1;
  }
  function ag() {
    f.paintCompositeRevision += 1;
  }
  function sg() {
    f._sortedItemsCache = null, f._strokeGeomCache.clear();
  }
  function Jl() {
    var r, a;
    f.paintEngineRevisionKey = null, (a = (r = f.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || a.call(r, p), f.paintEngineRevisionKey = Lr();
  }
  function hn() {
    f.objectVisualRevision = Number(f.objectVisualRevision || 0) + 1, sg();
  }
  function In({ rebuildPaintEngine: r = !1 } = {}) {
    og(), hn(), r && Jl();
  }
  function Ji() {
    ag(), hn();
  }
  function si() {
    var l;
    const r = ea(), a = `${r.width}x${r.height}`;
    f.paintEngineDescriptorKey !== a && (f.paintEngine = Hc(r), f.paintEngineDescriptorKey = a, f.paintEngineRevisionKey = "");
    const s = Lr();
    f.paintEngineRevisionKey !== s && (f.paintEngineRevisionKey = s, (l = f.paintEngine) == null || l.rebuildCommitted(p));
  }
  function ea() {
    const r = Er(), a = Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0), s = Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0);
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
    return ea();
  }
  function cg(r, a, s, l, h = null) {
    const g = ig(r), _ = Ve(a, "widthScale", 1) * Ve(a, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? h ? Math.max(0.5, g.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Fe) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function lg(r, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), h = String((a == null ? void 0 : a.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * _ : 1, l === "mask") {
      r.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = g ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${v})`;
  }
  function ug(r, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function fg(r, a, s, l, h = {}) {
    if (!r || !Array.isArray(a) || !a.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    r.save(), lg(r, s, h);
    const _ = (b) => ug(r, b, g);
    if (a.length === 1) {
      _(a[0]), r.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const v = a[b], S = a[b + 1];
      if (!v || !S) continue;
      const w = Number(v.x || 0), N = Number(v.y || 0), E = Number(S.x || 0), T = Number(S.y || 0), $ = Math.max(0.5, Math.min(g, Number(v.radiusPx || 0.5))), B = Math.max(0.5, Math.min(g, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(w) || !Number.isFinite(N) || !Number.isFinite(E) || !Number.isFinite(T) || !Number.isFinite($) || !Number.isFinite(B)) continue;
      const tt = E - w, Q = T - N, bt = Math.hypot(tt, Q);
      if (!Number.isFinite(bt) || bt < 1e-6) {
        _(v);
        continue;
      }
      if (bt > Math.max(l.w, l.h) * 0.5) continue;
      const dt = Math.max(0.5, Math.min($, B)), mt = Math.max(0.35, Math.min(dt * 0.4, 2.25)), yt = Math.max(1, Math.ceil(bt / mt));
      for (let wt = 0; wt <= yt; wt += 1) {
        const gt = wt / yt;
        _({
          x: Sn(w, E, gt),
          y: Sn(N, T, gt),
          radiusPx: Sn($, B, gt)
        });
      }
    }
    _(a[a.length - 1]), r.restore();
  }
  function dg(r, a, s, l) {
    fg(r, a, s, l, { preview: !1 });
  }
  function hg(r, a, s, l, h) {
    var b, v, S, w;
    if (!r || !Array.isArray(a) || a.length < 3) return;
    const g = "u", _ = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((b = a[0]) == null ? void 0 : b[g]) || 0) * l.w, Number(((v = a[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let N = 1; N < a.length; N += 1)
      r.lineTo(Number(((S = a[N]) == null ? void 0 : S[g]) || 0) * l.w, Number(((w = a[N]) == null ? void 0 : w[_]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Ql(r) {
    const a = (r == null ? void 0 : r.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function pg(r, a) {
    const s = Ql(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: cg(r, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function tu(r, a, s = null) {
    var b, v, S, w;
    if (!(r != null && r.ctx) || !a) return !1;
    const l = s || { w: Number(((b = r.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = r.canvas) == null ? void 0 : v.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((S = a == null ? void 0 : a.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((w = a == null ? void 0 : a.geometry) == null ? void 0 : w.geometryKind) || "") === "lasso_fill")
      return hg(r.ctx, Ql(h), h, l), !0;
    const _ = pg(h, l);
    return _.length ? (dg(r.ctx, _, h, l), !0) : !1;
  }
  function gg(r, a, s, l = 8) {
    const h = new Uint8Array(a * s), g = [], _ = new Int32Array(a * s), b = new Int32Array(a * s);
    for (let v = 0; v < s; v += 1)
      for (let S = 0; S < a; S += 1) {
        const w = v * a + S;
        if (h[w] || r[w] <= l) continue;
        let N = 0, E = 0;
        _[E] = S, b[E] = v, E += 1, h[w] = 1;
        const T = [];
        let $ = S, B = v, tt = S, Q = v;
        for (; N < E; ) {
          const bt = _[N], dt = b[N];
          N += 1, T.push({ x: bt, y: dt }), bt < $ && ($ = bt), dt < B && (B = dt), bt > tt && (tt = bt), dt > Q && (Q = dt);
          const mt = [
            [bt - 1, dt],
            [bt + 1, dt],
            [bt, dt - 1],
            [bt, dt + 1]
          ];
          for (const [yt, wt] of mt) {
            if (yt < 0 || wt < 0 || yt >= a || wt >= s) continue;
            const gt = wt * a + yt;
            h[gt] || r[gt] <= l || (h[gt] = 1, _[E] = yt, b[E] = wt, E += 1);
          }
        }
        g.push({ pixels: T, minX: $, minY: B, maxX: tt, maxY: Q });
      }
    return g;
  }
  function mg(r, a, s = {}) {
    var S;
    const l = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), g = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!g || l < 1 || h < 1) return [];
    const _ = g.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let w = 0; w < b.length; w += 1) b[w] = _.data[w * 4 + 3];
    return gg(b, l, h, 8).map((w, N) => {
      const E = w.maxX - w.minX + 1, T = w.maxY - w.minY + 1, $ = document.createElement("canvas");
      $.width = E, $.height = T;
      const B = $.getContext("2d");
      if (!B) return null;
      const tt = B.createImageData(E, T);
      return w.pixels.forEach(({ x: Q, y: bt }) => {
        const dt = (bt * l + Q) * 4, mt = ((bt - w.minY) * E + (Q - w.minX)) * 4;
        tt.data[mt + 0] = _.data[dt + 0], tt.data[mt + 1] = _.data[dt + 1], tt.data[mt + 2] = _.data[dt + 2], tt.data[mt + 3] = _.data[dt + 3];
      }), B.putImageData(tt, 0, 0), {
        id: _i("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: w.minX / l,
          v0: w.minY / h,
          u1: (w.maxX + 1) / l,
          v1: (w.maxY + 1) / h
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
  function Qi(r, a) {
    if (!r || !a) return null;
    const s = Qo(r), l = xn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = xn(a, s.right) / l, g = xn(a, s.up) / l, _ = h * s.cr + g * s.sr, b = -h * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function yg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (f.mode === "unwrap") {
      const s = dr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = r.map((s) => qi(Zi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function bg(r) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (f.mode === "unwrap") {
      const s = dr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = r.map((s) => qi(Zi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function vg(r, a = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], h = r[(s + 1) % r.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function _g(r, a, s) {
    if (!Array.isArray(r) || r.length < 3 || !a || !s) return [];
    const l = [];
    for (const h of r) {
      const g = Zi(h), _ = Qi(a, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return vg(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function wg(r, a, s) {
    if (!Array.isArray(r) || r.length < 1 || !a || !s) return [];
    const l = [];
    for (const h of r) {
      const g = Zi(h), _ = Qi(a, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function xg() {
    var l;
    const r = ie(), a = Ye(r), s = Er();
    if (!r || !a) return !1;
    if (P.save(), P.fillStyle = "#050505", P.fillRect(0, 0, C.width, C.height), P.shadowColor = "rgba(0, 0, 0, 0.45)", P.shadowBlur = 24, P.shadowOffsetX = 0, P.shadowOffsetY = 10, P.fillStyle = "rgba(14, 14, 14, 1)", P.fillRect(a.x, a.y, a.w, a.h), P.restore(), P.save(), P.beginPath(), P.rect(a.x, a.y, a.w, a.h), P.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const h = ki(r);
      Zo(P, a, h, s, `modal_frame_${String(r.id || "")}`) || drawCutoutProjectionPreview(
        P,
        t,
        s,
        a,
        r,
        String(((l = p.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(a.x, a.y, a.w, a.h);
    return P.restore(), P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.12)", P.lineWidth = 1, P.strokeRect(a.x + 0.5, a.y + 0.5, a.w - 1, a.h - 1), P.restore(), !0;
  }
  function Sg() {
    var v, S;
    if (((v = f.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const r = f.interaction.stroke, a = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (f.mode === "frame") {
      const w = ie(), N = Ye(w);
      s = _g(a, w, N);
    } else
      s = yg(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(h.r || 0) * 255), _ = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let w = 1; w < s.length; w++) P.lineTo(Number(s[w].x || 0), Number(s[w].y || 0));
    P.closePath(), l ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${g},${_},${b},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function Ng() {
    f.mode === "frame" ? xg() : f.mode === "unwrap" ? Up(!1) : jp(!1), Zp(), f.mode !== "frame" && Qp(), Sg(), H && (H.textContent = `${Math.round(f.viewFov)}°`), Wt(), Pt.hasPresentedFrame || (Pt.hasPresentedFrame = !0, F.style.opacity = "1");
    const r = Tp();
    r ? (O == null || O.removeAttribute("data-stage-ready"), O == null || O.setAttribute("data-stage-loading-kind", r)) : (O == null || O.setAttribute("data-stage-ready", ""), O == null || O.removeAttribute("data-stage-loading-kind"));
  }
  function Mg() {
    var a;
    if (e !== "cutout") return !1;
    const r = String(((a = f.interaction) == null ? void 0 : a.kind) || "");
    return r === "move" || r === "scale" || r === "scale_x" || r === "scale_y" || r === "rotate";
  }
  function Pg(r = f.interaction) {
    if (e !== "stickers" || f.mode !== "pano") return !1;
    const a = String((r == null ? void 0 : r.kind) || "");
    return a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function kg(r = {}) {
    var l, h, g, _;
    const a = r.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && zs();
      return;
    }
    let s = null;
    try {
      const b = ei(!1), v = Go(), S = ((_ = (g = (h = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, b)) == null ? void 0 : g.displayPaint) == null ? void 0 : _.canvas) || null, w = v ? null : Vl(b), N = v ? S || w : w || S;
      N && (s = {
        source: N,
        revision: `${Dr()}:${ni()}`
      });
    } catch {
      s = null;
    }
    t.__panoLivePaintSurface = s;
  }
  function ft(r = {}) {
    var v, S, w, N, E, T, $, B, tt, Q;
    const a = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), h = String(((v = f.interaction) == null ? void 0 : v.kind) || "");
    (!a || h === "view" || h === "pan_frame" || Pg() || !!((S = f.viewTween) != null && S.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (Pt.backgroundDirty = !0), a && Go() && (f.livePaintInteractionRevision += 1), (!a || l === "selection" || l === "mode" || l === "cutout_frame") && (qo(), Yo());
    const b = e === "cutout" && (!a || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Ml() || Mg());
    kg({ updateCutoutPreview: b }), s && (b || !a || e !== "cutout") && ((N = (w = t.__panoDomPreview) == null ? void 0 : w.requestDraw) == null || N.call(w), (E = t.setDirtyCanvas) == null || E.call(t, !0, !1)), s && !a && (($ = (T = t.graph) == null ? void 0 : T.setDirtyCanvas) == null || $.call(T, !0, !0), (Q = (tt = (B = pn) == null ? void 0 : B.canvas) == null ? void 0 : tt.setDirty) == null || Q.call(tt, !0, !0)), Pt.dirty = !0;
  }
  function eu() {
    const r = C.getBoundingClientRect(), a = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return C.width !== a || C.height !== s ? (C.width = a, C.height = s, Pt.backgroundDirty = !0, Pt.dirty = !0, e === "cutout" && (Pt.pendingStableLayoutFrames = Math.max(Number(Pt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Bs(r = performance.now()) {
    var a;
    if (Pt.running) {
      if (Pt.lastTickTs = r, f.outputPreviewAnim !== f.outputPreviewAnimTo) {
        const s = Math.max(1, Number(f.outputPreviewAnimDurationMs)), l = j((r - Number(f.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = f.outputPreviewAnimTo > f.outputPreviewAnimFrom ? av(l) : sv(l);
        f.outputPreviewAnim = Sn(f.outputPreviewAnimFrom, f.outputPreviewAnimTo, g), Pt.dirty = !0, l >= 1 && (f.outputPreviewAnim = f.outputPreviewAnimTo);
      }
      if ((a = f.viewTween) != null && a.active) {
        const s = f.viewTween, l = j((r - s.startTs) / s.durationMs, 0, 1), h = ov(l);
        f.viewYaw = $e(s.startYaw + s.deltaYaw * h), f.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, f.viewFov = s.startFov + (s.targetFov - s.startFov) * h, Pt.backgroundDirty = !0, Pt.dirty = !0, l >= 1 && (f.viewTween = null);
      }
      if (f.viewInertia.vx = Number(Oe.state.inertia.vx || 0), f.viewInertia.vy = Number(Oe.state.inertia.vy || 0), f.viewInertia.active = !!Oe.state.inertia.active, Oe.stepInertia(r) && (f.viewInertia.vx = Number(Oe.state.inertia.vx || 0), f.viewInertia.vy = Number(Oe.state.inertia.vy || 0), f.viewInertia.active = !!Oe.state.inertia.active, Pt.backgroundDirty = !0, Pt.dirty = !0), (Pt.dirty || r - Pt.lastSizeCheckTs >= 220) && (eu(), Pt.lastSizeCheckTs = r), Pt.pendingStableLayoutFrames > 0 && (Pt.pendingStableLayoutFrames -= 1, Pt.dirty = !0), Pt.dirty) {
        if (Pt.pendingStableLayoutFrames > 0) {
          Pt.rafId = requestAnimationFrame(Bs);
          return;
        }
        Pt.dirty = !1, Ng();
      }
      Pt.rafId = requestAnimationFrame(Bs);
    }
  }
  function Cg() {
    Pt.running = !1, Pt.rafId && cancelAnimationFrame(Pt.rafId), Pt.rafId = 0;
  }
  function ue() {
    i || (f.historyController.commitActionGroup(JSON.stringify(qf(p))), Xs());
  }
  function to(r) {
    if (i) return;
    const a = r < 0 ? f.historyController.undo() : f.historyController.redo();
    if (Xs(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), f.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, f.selectedIds = f.selectedId ? [f.selectedId] : [], In(), un(), Zt(), En(), ft({ cause: "cutout_frame" });
  }
  function nu() {
    var s, l;
    const r = Array.isArray((s = f.historyController) == null ? void 0 : s.entries) ? f.historyController.entries : [], a = Number((l = f.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && a > 0,
      canRedo: !i && r.length > 1 && a >= 0 && a < r.length - 1
    };
  }
  function un() {
    var _, b, v;
    at == null || at.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const w = S.getAttribute("data-tool-mode") === f.primaryTool;
      S.classList.toggle("active", w), S.setAttribute("aria-pressed", w ? "true" : "false");
    });
    const r = f.primaryTool === "paint" || f.primaryTool === "mask";
    if (ut && ct(r), !r) {
      kt.forEach((S) => {
        S.classList.remove("is-active");
      }), X && (X.hidden = !0);
      return;
    }
    const a = f.primaryTool, s = kt.find((S) => String(S.getAttribute("data-paint-pane") || "") === a) || null;
    if (kt.forEach((S) => {
      S.classList.toggle("is-active", S === s);
    }), Vt.forEach((S) => {
      S.hidden = !1;
    }), A.forEach((S) => {
      S.hidden = !1;
    }), W && (clearTimeout(W), W = 0), I.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === f.paintTool);
    }), I.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === f.maskTool);
    }), Et) {
      const S = f.paintTool !== "eraser";
      Et.hidden = !1, Et.classList.toggle("disabled", !S), !S && X && !X.hidden && (W = window.setTimeout(() => {
        X.hidden = !0, W = 0;
      }, 170));
      const w = ((_ = Ua.find((E) => ja(f.paintColor, E.color))) == null ? void 0 : _.id) || "";
      Et.querySelectorAll("[data-paint-color-swatch]").forEach((E) => {
        const T = E.getAttribute("data-paint-color-swatch") === w;
        E.classList.toggle("active", T), E.setAttribute("aria-pressed", T ? "true" : "false"), E.disabled = !S;
      });
      const N = Et.querySelector("[data-paint-color-custom]");
      if (N) {
        const E = !w;
        N.classList.toggle("active", E), N.style.setProperty("--custom-color", Nn(f.customPaintColor, 1)), N.setAttribute("aria-pressed", E ? "true" : "false"), N.disabled = !S;
      }
      if (Mt && (Mt.value = String(Math.round(j(Number(((b = f.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), St && (St.textContent = `${Math.round(j(Number(((v = f.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Nt && (Nt.style.background = Nn(f.customPaintColor)), X) {
        const E = ho(f.customPaintColor);
        X.style.setProperty("--picker-hue-color", Nn({ ...Mc(E.h, 1, 1), a: 1 }, 1)), X.style.setProperty("--picker-sat", `${j(E.s, 0, 1) * 100}%`), X.style.setProperty("--picker-val", `${(1 - j(E.v, 0, 1)) * 100}%`), X.style.setProperty("--picker-hue", `${j(E.h, 0, 1) * 100}%`);
      }
      if (pe) {
        const E = ho(f.customPaintColor);
        pe.style.left = `${j(E.s, 0, 1) * 100}%`, pe.style.top = `${(1 - j(E.v, 0, 1)) * 100}%`;
      }
      if (U) {
        const E = ho(f.customPaintColor);
        U.style.left = `${j(E.h, 0, 1) * 100}%`;
      }
      if ($t && Rt) {
        const E = Array.from({ length: 8 }, (T, $) => f.customPaintHistory[$] || null);
        Rt.innerHTML = E.map((T, $) => `
          <button class="pano-paint-color-history-dot${T ? "" : " empty"}" type="button" data-paint-history-index="${$}" ${T ? `style="--swatch:${Nn(T, 1)}"` : ""} aria-label="Recent color ${$ + 1}" ${T ? "" : "disabled"}></button>
        `).join(""), Rt.querySelectorAll("[data-paint-history-index]").forEach((T) => {
          T.onclick = () => {
            const $ = Number(T.getAttribute("data-paint-history-index")), B = f.customPaintHistory[$];
            B && (f.customPaintColor = fn(B), f.paintColor = fn(B), un());
          };
        });
      }
    }
    const l = yr(f.primaryTool === "paint" ? f.paintTool : f.maskTool), h = f.brushSizes[l] ?? 10, g = ap();
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
  function ci(r, a, s, l, h, g, _, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = s, v.dataset.min = String(h), v.dataset.max = String(g), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${g}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${h}' max='${g}' step='${_}' value='${Pc(a[s] || 0)}'>`;
    const [S, w] = v.querySelectorAll("input"), N = () => {
      const T = Number(h), $ = Number(g), tt = (Number(S.value) - T) / Math.max(1e-6, $ - T) * 100;
      S.style.setProperty("--v", `${j(tt, 0, 100)}%`);
    };
    S.disabled = !b, w.disabled = !b;
    const E = (T) => {
      if (!b) return;
      let $ = Number(T);
      Number.isNaN($) && ($ = 0), $ = j($, h, g), s === "yaw_deg" && ($ = $e($)), a[s] = $, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = jr(a)), S.value = String($), w.value = Pc($), N(), ft();
    };
    S.oninput = () => E(S.value), w.oninput = () => E(w.value), S.onchange = () => ue(), w.onchange = () => ue(), N(), r.appendChild(v);
  }
  function Gs() {
    const r = _e();
    if (!r) return;
    f.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: vi(r)
    }, et.querySelectorAll(".pano-field[data-key]").forEach((g) => {
      const _ = g.dataset.key;
      if (!_ || !(_ in r)) return;
      const b = g.querySelector("input[type='range']"), v = g.querySelector("input[type='number']");
      if (!b || !v) return;
      const S = Number(g.dataset.min ?? b.min ?? 0), w = Number(g.dataset.max ?? b.max ?? 0);
      let N = Number(r[_] || 0);
      Number.isNaN(N) && (N = 0), N = j(N, S, w);
      const E = String(N);
      b.value !== E && (b.value = E);
      const T = Pc(N);
      v.value !== T && (v.value = T);
      const $ = (N - S) / Math.max(1e-6, w - S) * 100;
      b.style.setProperty("--v", `${j($, 0, 100)}%`);
    });
    const s = vi(r), l = et.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), et.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((g) => {
      g.classList.toggle("active", String(g.getAttribute("data-aspect")) === s);
    });
  }
  function Zt() {
    var st, Tt, Ot, Lt, Ht, jt, Gt, Kt, me, Zn, Jn, no, ca, di, hi, ro;
    if (o) return;
    const r = [...et.children].slice(0, 2);
    et.innerHTML = "", r.forEach((At) => et.appendChild(At));
    const a = et.querySelector(".pano-side-actions");
    if (a && (a.innerHTML = ""), c) {
      const At = document.createElement("div");
      At.className = "pano-inspector";
      const Jt = document.createElement("details");
      Jt.className = "pano-ui-settings", Jt.open = !1, Jt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(st = p.ui_settings) != null && st.invert_view_x ? "1" : "0"}">
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
      const Ae = Jt.querySelector("[data-setting='invert-x']"), Tn = Jt.querySelector("[data-setting='invert-y']"), Qn = Jt.querySelector("[data-ui-picker='quality']"), Ln = Jt.querySelector("[data-action='ui-reset-defaults']"), tr = (fe, ke, _n, pi) => {
        const br = fe.querySelector(".pano-picker-trigger"), io = fe.querySelector(".pano-picker-label"), wn = fe.querySelector(".pano-picker-pop"), vr = () => {
          const Rn = String(_n()), On = ke.find((oo) => String(oo.value) === Rn) || ke[0];
          io.textContent = On.label, wn.innerHTML = "", ke.forEach((oo) => {
            const ao = document.createElement("button");
            ao.type = "button", ao.className = `pano-picker-item${String(oo.value) === Rn ? " active" : ""}`, ao.textContent = oo.label, ao.onclick = () => {
              pi(oo.value), wn.hidden = !0, vr(), mr(), ft();
            }, wn.appendChild(ao);
          });
        };
        return br.onclick = (Rn) => {
          Rn.stopPropagation(), Jt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((On) => {
            On !== wn && (On.hidden = !0);
          }), wn.hidden = !wn.hidden;
        }, vr(), vr;
      }, Dn = (fe, ke) => {
        fe.setAttribute("data-selected", ke ? "1" : "0"), fe.querySelectorAll(".pano-segment-btn").forEach((_n) => {
          _n.setAttribute("aria-pressed", _n.getAttribute("data-value") === (ke ? "1" : "0") ? "true" : "false");
        });
      };
      Ae.querySelectorAll(".pano-segment-btn").forEach((fe) => {
        fe.onclick = () => {
          const ke = fe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = ke, Dn(Ae, ke), mr(), ft();
        };
      }), Tn.querySelectorAll(".pano-segment-btn").forEach((fe) => {
        fe.onclick = () => {
          const ke = fe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = ke, Dn(Tn, ke), mr(), ft();
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
          const ke = String(fe || "balanced");
          p.ui_settings.preview_quality = ke === "draft" || ke === "high" ? ke : "balanced";
        }
      );
      Ln.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Dn(Ae, !1), Dn(Tn, !1), zt(), mr(), ft();
      }, At.appendChild(Jt), et.appendChild(At);
      const re = document.createElement("div");
      re.className = "pano-side-footer", re.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', re.querySelector("[data-action='close-preview']").onclick = () => fi(), et.appendChild(re), eo(At);
      return;
    }
    const s = _e(), l = An(), h = Il();
    l.length > 1 && (f.panelLastValues = f.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && h !== "stroke" && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: vi(s)
    });
    const g = f.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = h === "stroke" ? null : s, b = _ || g, v = !!_, S = document.createElement("div");
    S.className = "pano-inspector";
    const w = document.createElement("div");
    for (w.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; w.firstChild; ) S.appendChild(w.firstChild);
    if (et.appendChild(S), e === "stickers" || e === "cutout") {
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
      const Ae = At.querySelector(".pano-picker-trigger"), Tn = At.querySelector(".pano-picker-label"), Qn = At.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Me().forEach((zt, re) => {
        var _n, pi;
        const fe = Ce(zt) ? String(zt.id || $r) : String(((pi = (_n = p.assets) == null ? void 0 : _n[zt.asset_id]) == null ? void 0 : pi.name) || zt.asset_id || zt.id), ke = `${re + 1}. ${fe}${Ce(zt) && oi(zt) ? " (hidden)" : ""}`;
        Ln.push({ id: zt.id, label: ke, item: zt, kind: "image" });
      }) : np().forEach((zt) => {
        Ln.push({ id: zt.item.id, label: zt.label, item: zt.item, kind: zt.kind });
      });
      const tr = (_ == null ? void 0 : _.id) || "", Dn = Ln.find((zt) => zt.id === tr) || Ln[0];
      Tn.innerHTML = Dn.item ? El(Dn) : Aa(String(Dn.label || "")), Qn.innerHTML = "", Ln.forEach((zt) => {
        const re = document.createElement("button");
        re.type = "button", re.className = `pano-picker-item${zt.id === tr ? " active" : ""}`, re.innerHTML = zt.item ? El(zt) : Aa(String(zt.label || "")), re.onclick = () => {
          Qn.hidden = !0, Wi(zt.item || null);
          const fe = zt.item || null;
          if (fe && !Te(fe)) {
            const ke = $e(Number(fe.yaw_deg || 0)), _n = j(Number(fe.pitch_deg || 0), -89.9, 89.9);
            ti(ke, _n, f.viewFov);
          }
          Zt(), Wt(), ft();
        }, Qn.appendChild(re);
      }), Ae.disabled = Ln.length <= 1, Ae.onclick = (zt) => {
        zt.stopPropagation(), !Ae.disabled && (Qn.hidden = !Qn.hidden);
      }, S.appendChild(At);
    }
    const N = document.createElement("div");
    N.className = "pano-state-actions", N.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Dt.copy}<span>Copy State</span></button>`;
    const E = N.querySelector("[data-action='copy-state-inline']");
    E.disabled = !v || h === "stroke" || l.length > 1, E.onclick = async () => {
      if (!v || h === "stroke" || l.length > 1) return;
      const At = JSON.stringify(e === "cutout" && h !== "image" ? Ol(b) : pp(s));
      try {
        await navigator.clipboard.writeText(At);
        const Jt = E.querySelector("span");
        Jt && (Jt.textContent = "Copied", window.setTimeout(() => {
          Jt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(N);
    const T = document.createElement("div");
    T.className = `pano-params${f.panelWasEnabled ? "" : " disabled"}`, S.appendChild(T), l.length > 1 ? (T.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, T.classList.toggle("disabled", !v), f.panelWasEnabled = v, qo()) : (ci(T, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !i), ci(T, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !i), ci(T, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !i), ci(T, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !i), e === "stickers" || h === "image" ? ci(T, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !i) : ci(T, b, "roll_deg", "Roll", -180, 180, 0.1, v && !i), v !== f.panelWasEnabled ? requestAnimationFrame(() => {
      T.classList.toggle("disabled", !v);
    }) : T.classList.toggle("disabled", !v), f.panelWasEnabled = v, qo());
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
    const B = Array.isArray((Kt = (Gt = p == null ? void 0 : p.painting) == null ? void 0 : Gt.paint) == null ? void 0 : Kt.strokes) ? p.painting.paint.strokes.length : 0, tt = Array.isArray((Zn = (me = p == null ? void 0 : p.painting) == null ? void 0 : me.mask) == null ? void 0 : Zn.strokes) ? p.painting.mask.strokes.length : 0, Q = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((At) => String((At == null ? void 0 : At.name) || "")) : [], bt = Gh(
      t,
      Q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), dt = !!String((bt == null ? void 0 : bt.src) || "").trim() || Ll("pano_input_images").length > 0, mt = Array.isArray(Me()) && Me().length > 0 || B > 0, yt = tt > 0, wt = (At) => At === "panorama" ? dt : At === "objects" ? mt : yt, gt = (At, Jt) => {
      const Ae = At.closest("[data-visibility-row]"), Tn = wt(String(At.getAttribute("data-visibility") || ""));
      At.innerHTML = Jt ? Dt.eye : Dt.eye_dashed, At.setAttribute("aria-pressed", Jt ? "true" : "false"), At.setAttribute("data-tip", Jt ? "Hide" : "Show"), At.disabled = !Tn, At.classList.toggle("active", !!Jt), Ae == null || Ae.classList.toggle("is-hidden", !Jt), Ae == null || Ae.classList.toggle("is-disabled", !Tn);
    };
    if ($.querySelectorAll("[data-visibility]").forEach((At) => {
      const Jt = String(At.getAttribute("data-visibility") || ""), Ae = () => Jt === "panorama" ? !!f.showPanorama : Jt === "objects" ? !!f.showObjects : !!f.showMask;
      gt(At, Ae()), At.onclick = () => {
        wt(Jt) && (Jt === "panorama" ? f.showPanorama = !f.showPanorama : Jt === "objects" ? f.showObjects = !f.showObjects : f.showMask = !f.showMask, gt(At, Ae()), ft());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild($), !i) {
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
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(no = p.ui_settings) != null && no.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ca = p.ui_settings) != null && ca.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(di = p.ui_settings) != null && di.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(hi = p.ui_settings) != null && hi.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ro = p.ui_settings) != null && ro.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Jt = At.querySelector("[data-setting='invert-x']"), Ae = At.querySelector("[data-setting='invert-y']"), Tn = At.querySelector("[data-ui-picker='quality']"), Qn = At.querySelector("[data-action='ui-reset-defaults']"), Ln = (zt, re, fe, ke) => {
        const _n = zt.querySelector(".pano-picker-trigger"), pi = zt.querySelector(".pano-picker-label"), br = zt.querySelector(".pano-picker-pop"), io = () => {
          const wn = String(fe()), vr = re.find((Rn) => String(Rn.value) === wn) || re[0];
          pi.textContent = vr.label, br.innerHTML = "", re.forEach((Rn) => {
            const On = document.createElement("button");
            On.type = "button", On.className = `pano-picker-item${String(Rn.value) === wn ? " active" : ""}`, On.textContent = Rn.label, On.onclick = () => {
              ke(Rn.value), br.hidden = !0, io(), mr(), t.setDirtyCanvas(!0, !0), ft();
            }, br.appendChild(On);
          });
        };
        return _n.onclick = (wn) => {
          wn.stopPropagation(), At.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((vr) => {
            vr !== br && (vr.hidden = !0);
          }), br.hidden = !br.hidden;
        }, io(), io;
      }, tr = (zt, re) => {
        zt.setAttribute("data-selected", re ? "1" : "0"), zt.querySelectorAll(".pano-segment-btn").forEach((fe) => {
          fe.setAttribute("aria-pressed", fe.getAttribute("data-value") === (re ? "1" : "0") ? "true" : "false");
        });
      };
      Jt.querySelectorAll(".pano-segment-btn").forEach((zt) => {
        zt.onclick = () => {
          const re = zt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = re, tr(Jt, re), mr(), t.setDirtyCanvas(!0, !0), ft();
        };
      }), Ae.querySelectorAll(".pano-segment-btn").forEach((zt) => {
        zt.onclick = () => {
          const re = zt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = re, tr(Ae, re), mr(), t.setDirtyCanvas(!0, !0), ft();
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
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", tr(Jt, !1), tr(Ae, !1), Dn(), mr(), t.setDirtyCanvas(!0, !0), ft();
      }, S.appendChild(At);
    }
    const K = document.createElement("div");
    K.className = "pano-side-footer", K.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, K.querySelector("[data-action='cancel-close']").onclick = () => fi(), K.querySelector("[data-action='save-close']").onclick = () => {
      uu(), fi();
    }, et.appendChild(K), eo(S);
  }
  function na(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function ru(r) {
    var l;
    if (i || e !== "stickers" && e !== "cutout" || !na(r)) return;
    const a = po("asset"), s = URL.createObjectURL(r);
    try {
      const h = await new Promise((b, v) => {
        const S = new Image();
        S.onload = () => b(S), S.onerror = () => v(new Error("image load failed")), S.src = s;
      });
      Ct.set(a, h);
      const g = po("st");
      p.stickers.push({
        id: g,
        asset_id: a,
        yaw_deg: f.viewYaw,
        pitch_deg: f.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ir(30, Number(h.naturalWidth || h.width || 1), Number(h.naturalHeight || h.height || 1)),
        rot_deg: 0,
        z_index: Tl()
      }), Wi(p.stickers[p.stickers.length - 1]), Ws(), ue(), Zt(), Wt(), ft();
      const _ = (async () => {
        const b = await Ls(r, String(r.name || a));
        p.assets[a] = b, Pe(), ft();
      })();
      vo.set(a, _);
      try {
        await _;
      } finally {
        vo.delete(a);
      }
    } catch (h) {
      console.error("[PanoramaSuite] failed to add sticker asset", h), delete p.assets[a], Ct.delete(a);
      const g = p.stickers.findIndex((_) => String((_ == null ? void 0 : _.asset_id) || "") === a);
      if (g >= 0) {
        const _ = p.stickers[g];
        p.stickers.splice(g, 1), (l = f.selection) != null && l.id && String(f.selection.id) === String((_ == null ? void 0 : _.id) || "") && Wi(null), Zt(), Wt(), ft();
      }
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function iu(r) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, a.click();
  }
  function Ks() {
    i || e !== "stickers" && e !== "cutout" || iu((r) => {
      ru(r);
    });
  }
  async function Ag(r) {
    if (i || e !== "stickers" && e !== "cutout") return;
    const a = _e();
    if (!a || !De(a) || Ce(a) || !na(r)) return;
    const s = String(a.asset_id || ""), l = Number(a.vFOV_deg || 0), h = a.crop && typeof a.crop == "object" ? { ...a.crop } : null, g = po("asset"), _ = URL.createObjectURL(r);
    try {
      const b = await new Promise((S, w) => {
        const N = new Image();
        N.onload = () => S(N), N.onerror = () => w(new Error("image load failed")), N.src = _;
      });
      Ct.set(g, b), a.asset_id = g, a.vFOV_deg = Ir(
        Number(a.hFOV_deg || 30),
        Number(b.naturalWidth || b.width || 1),
        Number(b.naturalHeight || b.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Xi(), hn(), ue(), Zt(), Wt(), ft();
      const v = (async () => {
        const S = await Ls(r, String(r.name || g));
        p.assets[g] = S, Pe(), ft();
      })();
      vo.set(g, v);
      try {
        await v;
      } finally {
        vo.delete(g);
      }
    } catch (b) {
      console.error("[PanoramaSuite] failed to replace sticker asset", b), delete p.assets[g], Ct.delete(g), a.asset_id = s, a.vFOV_deg = l, a.crop = h ? { ...h } : null, hn(), Zt(), Wt(), ft();
    } finally {
      URL.revokeObjectURL(_);
    }
  }
  function Ig() {
    if (i) return;
    const r = _e();
    !r || !De(r) || Ce(r) || iu((a) => {
      Ag(a);
    });
  }
  async function Eg() {
    if (i || e !== "stickers") return;
    const r = p.assets && typeof p.assets == "object" ? p.assets : {}, a = Object.entries(r).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), g = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && g.startsWith("data:image");
    });
    if (!a.length) return;
    let s = !1;
    for (const [l, h] of a)
      try {
        const g = String((h == null ? void 0 : h.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((N) => N.blob()), b = String(_.type || "image/png").split("/")[1] || "png", v = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([_], v, { type: _.type || "image/png" }), w = await Ls(S, v);
        p.assets[l] = {
          ...w,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch (g) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: g });
      }
    s && (Pe(), ft());
  }
  function ou() {
    i || e === "cutout" && (Ws(), p.shots = [{
      id: po("sh"),
      yaw_deg: f.viewYaw,
      pitch_deg: f.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: $h(64, 40)
    }], Wi(p.shots[0]), f.cutoutAspectOpen = !1, ue(), Pe(), Zt(), ft({ cause: "cutout_frame" }));
  }
  function Tg() {
    i || e === "cutout" && (p.shots = [], f.selectedId = null, f.selectedIds = [], f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, p.active.selected_shot_id = null, ue(), Pe(), Zt(), ft());
  }
  function Lg() {
    const r = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of r)
      Ce(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function au(r, a, s = "Clear") {
    return new Promise((l) => {
      const h = document.createElement("div");
      h.className = "pano-canvas-confirm", h.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${r}">
          <div class="pano-canvas-confirm-title">${r}</div>
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
      _.onclick = () => g(!1), b.onclick = () => g(!0), O.appendChild(h), b.focus();
    });
  }
  async function su() {
    var s, l;
    if (i || !await au(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = Ao(null), In();
    const a = Lg();
    e === "stickers" ? (p.stickers = a, p.assets = {}, f.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, Xi()) : (p.stickers = a, p.assets = {}, p.shots = [], f.selectedId = null, f.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, Xi()), ue(), Pe(), Zt(), Wt(), ft();
  }
  async function Dg(r) {
    var g, _, b, v;
    if (i) return;
    const a = r === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = ui(a);
    if (!(!l.length && !(((g = f.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = f.interaction) == null ? void 0 : _.layerKind) === a) || !await au(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = f.interaction) == null ? void 0 : b.kind) === "draw" && ((v = f.interaction) == null ? void 0 : v.layerKind) === a) {
        const S = Xn();
        S && f.paintEngine.cancelActiveStroke(S), f.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = ln().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== a), a === "paint" && (ce().length = 0), In(), ue(), Pe(), Zt(), Wt(), un(), ft();
    }
  }
  function Rg() {
    if (i) return;
    const r = _e();
    if (!r || !De(r) || Ce(r)) return;
    const a = JSON.parse(JSON.stringify(r));
    a.id = po("st"), a.yaw_deg = $e((a.yaw_deg || 0) + 8), a.z_index = Tl(), p.stickers.push(a), p.active.selected_sticker_id = a.id, f.selectedId = a.id, f.selectedIds = [a.id], hn(), ue(), Pe(), Wt(), Zt(), ft();
  }
  function cu() {
    var s, l, h, g, _, b, v;
    if (i) return;
    const r = An(), a = _e();
    if (!(!a && r.length === 0)) {
      if (r.length > 1) {
        const S = new Set(r.filter((E) => Te(E)).map((E) => String(E.actionGroupId || E.id || ""))), w = new Set(r.filter((E) => We(E)).map((E) => Ke(E.rasterObjectId || E.id || ""))), N = new Set(r.filter(De).map((E) => String(E.id || "")));
        S.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || ""))), p.painting.groups = ce().filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || ""))), In()), w.size > 0 && (p.painting.raster_objects = ln().filter((E) => !w.has(String((E == null ? void 0 : E.id) || ""))), Ji()), N.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((E) => N.has(String((E == null ? void 0 : E.id) || "")) ? Ce(E) ? (oi(E) || (E.visible = !1), !0) : !1 : !0), Xi(), hn()), f.selectedId = null, f.selectedIds = [], ue(), Pe(), Zt(), Wt(), ft();
        return;
      }
      if (Te(a)) {
        const S = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (h = p.painting) == null ? void 0 : h.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((w) => String((w == null ? void 0 : w.actionGroupId) || "").trim() !== S), p.painting.groups = ce().filter((w) => String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim() !== S), In(), f.selectedId = null, f.selectedIds = [], ue(), Pe(), Zt(), Wt(), ft();
        return;
      }
      if (We(a)) {
        const S = Ke(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = ln().filter((w) => String((w == null ? void 0 : w.id) || "").trim() !== S), Ji(), f.selectedId = null, f.selectedIds = [], ue(), Pe(), Zt(), Wt(), ft();
        return;
      }
      if (e === "stickers" || De(a)) {
        if (Ce(a)) {
          if (oi(a)) return;
          a.visible = !1, hn(), ue(), Pe(), Zt(), Wt(), ft();
          return;
        }
        p.stickers = p.stickers.filter((S) => S.id !== a.id), Xi(), hn(), f.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((b = p.stickers[0]) == null ? void 0 : b.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, ue(), Pe(), Zt(), Wt(), ft();
        return;
      }
      Tg();
    }
  }
  function Og(r, a) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const E = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(E)) {
        const [B, tt] = E.split(":").map((Q) => Number(Q));
        if (Number.isFinite(B) && Number.isFinite(tt)) return B >= tt;
      }
      const T = Number(r.hFOV_deg || 64), $ = Number(r.vFOV_deg || 40);
      return Math.abs(T - $) > 1e-6 ? T >= $ : Zc(r) >= 1;
    })();
    let [h, g] = s[String(a)] || s["1:1"];
    h >= g !== l && ([h, g] = [g, h]);
    const _ = h / g, b = j(Number(r.hFOV_deg || 64), 1, 179), v = j(Number(r.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * v)), w = j(S * Math.sqrt(_), 1, 179), N = j(S / Math.sqrt(_), 1, 179);
    r.hFOV_deg = w, r.vFOV_deg = N, r.aspect_id = String(a);
  }
  function Fg(r) {
    if (!r) return;
    const a = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = a, r.aspect_id = jr(r);
  }
  function lu() {
    Ar().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function $g() {
    if (i) return;
    const r = An();
    if (!_e() || r.length === 0) return;
    lu();
    const s = Ar(), l = new Set(r.map((b) => De(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, w;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((w = b.item) == null ? void 0 : w.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : g.push(b);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...g, ...h].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), hn(), ue(), Pe(), Wt(), ft();
  }
  function Hg() {
    if (i) return;
    const r = An();
    if (!_e() || r.length === 0) return;
    lu();
    const s = Ar(), l = new Set(r.map((b) => De(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, w;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((w = b.item) == null ? void 0 : w.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : g.push(b);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...g].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), hn(), ue(), Pe(), Wt(), ft();
  }
  function uu() {
    i || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", d && (p.output_preset = Yf(d.value, Number(p.output_preset || 2048))), m && (p.bg_color = String(m.value || p.bg_color || "#00ff00")), En(), t.setDirtyCanvas(!0, !0));
  }
  function En() {
    var a;
    if (i) return;
    const r = JSON.stringify(p);
    y && (y.value = r, (a = y.callback) == null || a.call(y, r));
  }
  function mr() {
    p.ui_settings = gv(p.ui_settings), i || En();
  }
  function Pe() {
    var r;
    i || (En(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0));
  }
  function Ws() {
    f.primaryTool !== "cursor" && (f.primaryTool = "cursor", un(), Zt());
  }
  function li(r) {
    const a = C.getBoundingClientRect();
    return {
      x: (r.clientX - a.left) / a.width * C.width,
      y: (r.clientY - a.top) / a.height * C.height
    };
  }
  function fu() {
    return f.mode === "pano" || f.mode === "unwrap";
  }
  function ie() {
    var s;
    if (e !== "cutout") return null;
    const r = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === a) || r[0] || null;
  }
  function Ye(r = ie()) {
    var E, T, $, B;
    if (!r) return null;
    const a = Math.max(1e-4, Number(((E = ki(r)) == null ? void 0 : E.aspect) || 1)), s = 56, l = Math.max(80, C.width - s * 2), h = Math.max(80, C.height - s * 2);
    let g = l, _ = g / a;
    _ > h && (_ = h, g = _ * a);
    const b = Math.max(0.1, Number(((T = f.frameView) == null ? void 0 : T.zoom) || 1)), v = g * b, S = _ * b, w = Number((($ = f.frameView) == null ? void 0 : $.panX) || 0), N = Number(((B = f.frameView) == null ? void 0 : B.panY) || 0);
    return {
      x: (C.width - v) * 0.5 + w,
      y: (C.height - S) * 0.5 + N,
      w: v,
      h: S
    };
  }
  function qs() {
    return e === "cutout" && f.mode === "frame" && !!ie();
  }
  function bn(r, a = performance.now()) {
    if (f.mode === "unwrap") {
      const g = dr(), _ = (r.x - g.x) / Math.max(1, g.w), b = (r.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: j(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Es(r.x, r.y), { lon: l, lat: h } = Fs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function vn(r, a, s = performance.now()) {
    const l = Ye(a);
    if (!l) return null;
    const h = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    }, g = Us(a, h);
    if (!g) return null;
    const { lon: _, lat: b } = Fs(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Vg(r, a) {
    var S;
    const s = ie(), l = Ye(s);
    if (!s || !l) return !1;
    const h = Math.max(0.1, Number(((S = f.frameView) == null ? void 0 : S.zoom) || 1)), g = j(h * Number(a), 0.25, 12);
    if (Math.abs(g - h) < 1e-6) return !1;
    const _ = (Number(r.x) - l.x) / Math.max(1e-6, l.w), b = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    f.frameView.zoom = g;
    const v = Ye(s);
    return v ? (f.frameView.panX += Number(r.x) - (v.x + v.w * _), f.frameView.panY += Number(r.y) - (v.y + v.h * b), !0) : !1;
  }
  function zg(r, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function yr(r) {
    const a = String(r || "").trim();
    return a === "eraser" ? nr : rn[a] ? a : f.activeBrushPresetId || nr;
  }
  function du() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (fu() || qs());
  }
  function hu() {
    var r;
    return du() && ((r = f.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function ra(r, a = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), h = a !== !1, g = f.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== h || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return f.pointerPos = { x: s, y: l, inside: h }, _;
  }
  function Ug() {
    var w, N;
    if (!hu()) return null;
    const r = f.primaryTool === "mask" ? "mask" : "paint", a = r === "mask" ? f.maskTool : f.paintTool, s = yr(a), l = rn[s] || rn[nr], h = Number(f.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), b = r === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(f.paintColor), v = r === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : j(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : a === "eraser" ? 0.75 : j(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: Nn(b, v),
      strokeStyle: Nn(b, S),
      x: Number(((w = f.pointerPos) == null ? void 0 : w.x) || 0),
      y: Number(((N = f.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function jg() {
    var E, T, $;
    const r = Ug();
    if (!L) return;
    if (!r) {
      L.style.display = "none";
      return;
    }
    let a = r.radius * 2, s = r.radius * 2, l = "999px", h = 0, g = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let w = Number(r.hotspotX ?? a * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      a = ls, s = ls, l = "0", _ = "0", b = "none", w = rv, N = iv, g = lv(r.fillStyle, S, v);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((E = r.preset) == null ? void 0 : E.aspect) ?? 1));
      a = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number((($ = (T = r.preset) == null ? void 0 : T.angle) == null ? void 0 : $.value) || 0) * Ur;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    L.style.display = "block", L.style.width = `${Math.round(a)}px`, L.style.height = `${Math.round(s)}px`, L.style.borderRadius = l, L.style.border = _, L.style.boxShadow = b, L.style.background = g, L.style.backgroundRepeat = "no-repeat", L.style.backgroundPosition = "center", L.style.backgroundSize = "contain", L.style.transform = `translate(${Math.round(r.x - w)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function Bg() {
    var bt;
    if (!V || !R) return;
    const r = f.primaryTool === "mask" ? "mask" : "paint", a = r === "mask" ? f.maskTool : f.paintTool;
    if (a === "lasso_fill") return;
    const s = yr(a), l = rn[s] || rn[nr], h = Number(f.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), b = a === "eraser", v = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(f.paintColor), S = r === "mask" ? Nn(v, 0.22) : b ? "rgba(255,255,255,0.14)" : Nn(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), w = r === "mask" ? Nn(v, 0.96) : b ? "rgba(255,255,255,0.72)" : Nn(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, E = _ * 2, T = "999px", $ = 0, B = S;
    const tt = "rgba(222, 222, 222, 0.72)", Q = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const dt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, _ * 2 * dt), E = Math.max(10, _ * 2), T = `${Math.min(8, E * 0.42)}px`, $ = Number(((bt = l == null ? void 0 : l.angle) == null ? void 0 : bt.value) || 0) * Ur;
    } else a === "brush" ? B = `radial-gradient(circle at 50% 50%, ${w} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (N = Math.max(18, _ * 1.8), E = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${w} 43%, ${w} 58%, rgba(0,0,0,0) 59%)`) : b && (B = "rgba(255,255,255,0.12)");
    R.style.width = `${Math.round(N)}px`, R.style.height = `${Math.round(E)}px`, R.style.borderRadius = T, R.style.background = B, R.style.border = `1px solid ${tt}`, R.style.boxShadow = `0 0 0 1px ${Q}`, R.style.transform = `rotate(${$}deg)`, Y && (clearTimeout(Y), Y = 0), V.classList.remove("fade-out"), V.classList.add("show");
  }
  function ia() {
    !V || !V.classList.contains("show") || (V.classList.add("fade-out"), Y && clearTimeout(Y), Y = window.setTimeout(() => {
      V.classList.remove("show", "fade-out"), Y = 0;
    }, 180));
  }
  function Gg(r, a, s, l) {
    const h = yr(a), g = rn[h] || rn[nr], _ = f.brushSizes[h] ?? 10, b = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), v = zg(l, b), S = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), w = {
      id: _i(r),
      actionGroupId: _i("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
      layerKind: r,
      toolKind: a,
      size: b,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((N) => ({ ...N })),
        points: S.map((N) => ({ ...N }))
      }
    };
    return Bf(w, g), w;
  }
  function Kg(r, a, s, l) {
    const h = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), g = yr(a), _ = rn[g] || rn[nr], b = {
      id: _i(r),
      actionGroupId: _i("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
      layerKind: r,
      toolKind: a,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((v) => ({ ...v }))
      }
    };
    return Bf(b, _), b;
  }
  function ui(r) {
    const a = p.painting || (p.painting = Ao(null)), s = a[r] || (a[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Wg(r, a, s = performance.now()) {
    let l;
    if (f.mode === "frame") {
      const S = ie();
      if (!S) return !1;
      l = vn(a, S, s);
    } else
      l = bn(a, s);
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, _ = h[h.length - 1];
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
      const S = f.paintEngine.ensureTarget(v);
      f.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), r.stroke);
    }
    return !0;
  }
  function qg(r, a, s = performance.now()) {
    var _, b;
    let l;
    if (f.mode === "frame") {
      const v = ie();
      if (!v) return !1;
      l = vn(a, v, s);
    } else
      l = bn(a, s);
    const h = (b = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
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
  function Yg(r) {
    var dt, mt, yt, wt, gt;
    const a = (r == null ? void 0 : r.stroke) || null;
    if (!a || (r == null ? void 0 : r.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    si();
    const s = Xn(), l = Tr(s.width, s.height);
    if (!tu(l, a, { w: s.width, h: s.height })) return !1;
    const h = ((mt = (dt = l.ctx) == null ? void 0 : dt.getImageData(0, 0, s.width, s.height)) == null ? void 0 : mt.data) || null;
    if (!h) return !1;
    const g = new Map(ce().map((K) => [String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim(), K ? { ...K } : null])), _ = [], b = [], v = [...ln().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") !== "paint")];
    let S = !1, w = Ar().reduce((K, st) => Math.max(K, Number((st == null ? void 0 : st.z_index) || 0)), -1) + 1;
    function N(K, st, Tt, Ot = 8) {
      let Lt = st, Ht = Tt, jt = -1, Gt = -1;
      for (let Kt = 0; Kt < Tt; Kt += 1)
        for (let me = 0; me < st; me += 1)
          K[(Kt * st + me) * 4 + 3] <= Ot || (me < Lt && (Lt = me), Kt < Ht && (Ht = Kt), me > jt && (jt = me), Kt > Gt && (Gt = Kt));
      return jt < Lt || Gt < Ht ? null : { minX: Lt, minY: Ht, maxX: jt, maxY: Gt };
    }
    const E = N(h, s.width, s.height, 8);
    if (!E) return !1;
    function T(K, st) {
      return !K || !st ? !1 : !(K.maxX < st.minX || st.maxX < K.minX || K.maxY < st.minY || st.maxY < K.minY);
    }
    function $(K, st) {
      const Tt = Cr((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "", "paint", st);
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
    function B(K) {
      const st = (K == null ? void 0 : K.bbox) || null;
      if (!st) return null;
      const Tt = (K == null ? void 0 : K.transform) || {}, Ot = s.width, Lt = s.height, Ht = Number(st.u0 || 0) + Number(Tt.du || 0), jt = Number(st.u1 || 0) + Number(Tt.du || 0), Gt = Number(st.v0 || 0) + Number(Tt.dv || 0), Kt = Number(st.v1 || 0) + Number(Tt.dv || 0);
      return {
        minX: Math.floor((Ht % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((jt % 1 + 1) % 1 * Ot),
        minY: Math.floor(j(Gt, 0, 1) * Lt),
        maxY: Math.ceil(j(Kt, 0, 1) * Lt),
        wraps: jt - Ht >= 1 || Ht < 0 || jt > 1
      };
    }
    function tt(K) {
      return K ? K.wraps ? T(E, { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY }) || T(E, { minX: K.minX, maxX: s.width - 1, minY: K.minY, maxY: K.maxY }) : T(E, K) : !0;
    }
    function Q(K) {
      if (!K) return { touched: !1, canvas: null };
      const st = Tr(s.width, s.height);
      st.ctx.drawImage(K, 0, 0);
      const Tt = st.ctx.getImageData(0, 0, s.width, s.height);
      st.ctx.save(), st.ctx.globalCompositeOperation = "destination-out", st.ctx.drawImage(l.canvas, 0, 0), st.ctx.restore();
      const Ot = st.ctx.getImageData(0, 0, s.width, s.height);
      for (let Lt = 0; Lt < s.width * s.height; Lt += 1) {
        if (h[Lt * 4 + 3] <= 8) continue;
        const jt = Tt.data[Lt * 4 + 3], Gt = Ot.data[Lt * 4 + 3];
        if (jt > Gt)
          return { touched: !0, canvas: st.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function bt(K, st, Tt) {
      const Ot = Number(Tt == null ? void 0 : Tt.z_index), Lt = mg(K, st, Tt).map((Ht, jt) => ({
        ...Ht,
        z_index: Number.isFinite(Ot) ? Ot + jt * 1e-3 : w + jt * 1e-3
      }));
      return Lt.length && (w = Math.max(w, ...Lt.map((Ht) => Number((Ht == null ? void 0 : Ht.z_index) || 0))) + 1), Lt;
    }
    for (const K of ce()) {
      const st = String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim();
      if (!st) continue;
      const Tt = yn(st, "paint");
      if (!tt($(K, Tt))) {
        b.push(K), _.push(...Tt);
        continue;
      }
      const Ot = ((wt = (yt = f.paintEngine) == null ? void 0 : yt.getGroupTarget) == null ? void 0 : wt.call(yt, st)) || null, Lt = ((gt = Ot == null ? void 0 : Ot.committedPaint) == null ? void 0 : gt.canvas) || null;
      if (!Lt) {
        b.push(K), _.push(...Tt);
        continue;
      }
      const Ht = Q(Lt);
      if (!Ht.touched || !Ht.canvas) {
        b.push(K), _.push(...Tt);
        continue;
      }
      S = !0;
      const jt = bt(Ht.canvas, "paint", g.get(st) || K || {});
      v.push(...jt);
    }
    for (const K of ln().filter((st) => String((st == null ? void 0 : st.layerKind) || "paint") === "paint")) {
      if (!tt(B(K))) {
        v.push(K);
        continue;
      }
      const st = Xo(K, null);
      if (!st) {
        v.push(K);
        continue;
      }
      const Tt = Q(st);
      if (!Tt.touched || !Tt.canvas) {
        v.push(K);
        continue;
      }
      S = !0;
      const Ot = bt(Tt.canvas, "paint", K);
      v.push(...Ot);
    }
    return S ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((K, st) => Number((K == null ? void 0 : K.z_index) || 0) - Number((st == null ? void 0 : st.z_index) || 0)), p.painting.raster_objects = v.sort((K, st) => Number((K == null ? void 0 : K.z_index) || 0) - Number((st == null ? void 0 : st.z_index) || 0)), ai({ preservePanelValues: !1 }), !0) : !1;
  }
  function Xg(r) {
    var g, _, b, v;
    const a = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = js(a.rawPoints || a.points || [], r.stroke.targetSpace, !0)), Yg(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && Nl((b = r.stroke) == null ? void 0 : b.actionGroupId), ui(r.layerKind).push(r.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = js(h, r.stroke.targetSpace, !0), l && Nl((v = r.stroke) == null ? void 0 : v.actionGroupId), ui(r.layerKind).push(r.stroke), !0);
  }
  function pu(r) {
    var s;
    if (e === "cutout" && f.mode === "frame") {
      const l = ie(), h = Ye(l);
      if (!l || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const _ = vn(r, l, performance.now()), b = _ ? Zi(_) : null;
      if (b)
        for (const S of Hs()) {
          if (!De(S)) continue;
          const w = Qi(S, b);
          if (w && Number(w.x) >= 0 && Number(w.x) <= 1 && Number(w.y) >= 0 && Number(w.y) <= 1) {
            const N = Re(S);
            if (N != null && N.visible) return { item: S, geom: N };
          }
        }
      const v = Ms(!1).slice().sort((S, w) => Number((w == null ? void 0 : w.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of v) {
        if (S.type === "strokeGroup") {
          const E = ii(ji("paint", S.actionGroupId || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (!(T != null && T.visible)) continue;
          const $ = Array.isArray(T.strokePaths) ? T.strokePaths : [];
          for (const B of $) {
            const tt = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!tt.length) continue;
            if (B.closed && tt.length >= 3 && rr(r, tt)) return { item: E, geom: T };
            const Q = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let bt = 0; bt < tt.length - 1; bt += 1)
              if (Nc(r, tt[bt], tt[bt + 1]) <= Q * Q) return { item: E, geom: T };
            if (tt.length === 1 && zr(r, tt[0]) <= Q * Q) return { item: E, geom: T };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const E = ri(Bi(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (Hl(E, T, r, _)) return { item: E, geom: T };
          continue;
        }
        const w = S.item;
        if (!w || !De(w) || !b) continue;
        const N = Qi(w, b);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const E = Re(w);
          if (E != null && E.visible) return { item: w, geom: E };
        }
      }
      return null;
    }
    const a = [
      ...Ms(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ii(ji("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ri(Bi(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Hs().filter((l) => mn(l)) : []
    ];
    for (const l of a) {
      if (Te(l)) {
        const g = Re(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of _) {
          const v = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!v.length) continue;
          if (b.closed && v.length >= 3 && rr(r, v)) return { item: l, geom: g };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let w = 0; w < v.length - 1; w += 1)
            if (Nc(r, v[w], v[w + 1]) <= S * S) return { item: l, geom: g };
          if (v.length === 1 && zr(r, v[0]) <= S * S) return { item: l, geom: g };
        }
        continue;
      }
      if (We(l)) {
        const g = Re(l);
        if (!(g != null && g.visible)) continue;
        if (Hl(l, g, r)) return { item: l, geom: g };
        continue;
      }
      const h = Re(l);
      if (h.visible && rr(r, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Ys(r, a) {
    if (!r || !r.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((g) => zr(g, a) <= 121);
      if (l >= 0) {
        const g = r.corners[l], _ = g.x - r.center.x, b = g.y - r.center.y, v = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const g of h) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && rr(a, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (Nc(a, _[v], _[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject")
      return rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((h) => zr(h, a) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => zr(l, a) <= 121);
    if (s >= 0) {
      const l = r.corners[s], h = l.x - r.center.x, g = l.y - r.center.y, _ = h * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return zr(r.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
  }
  function gu(r, a) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function Zg(r, a) {
    return !!r && !!a && Number(a.x) >= Number(r.x0) && Number(a.x) <= Number(r.x1) && Number(a.y) >= Number(r.y0) && Number(a.y) <= Number(r.y1);
  }
  function Jg(r, a) {
    if (!r || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((h) => Zg(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!rr({ x: s, y: l }, a.corners);
  }
  function we(r) {
    if (jg(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" ? C.style.cursor = f.interaction.cursor || "nwse-resize" : f.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (hu()) {
      C.style.cursor = "none";
      return;
    }
    if (f.mode === "frame" && f.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const a = _e(), s = a ? Re(a) : null, l = a ? fr(a) : !1, h = l ? { kind: "none", cursor: "default" } : Ys(s, r);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (f.primaryTool === "cursor" && pu(r)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = f.mode === "pano" ? "grab" : "default";
  }
  function Wt() {
    if (!q) return;
    const r = _e(), a = An();
    if (!r && a.length === 0 || f.interaction) {
      q.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const gt = "multi", K = Cs(a);
      if (f.menuMode !== gt)
        q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${K ? "Unlock" : "Lock"}" data-tip="${K ? "Unlock" : "Lock"}">${K ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `, f.menuMode = gt, f.menuSize.measured = !1, eo(q);
      else {
        const At = q.querySelector("[data-action='toggle-lock']");
        At && (At.innerHTML = K ? Dt.lock_open : Dt.lock_closed, At.setAttribute("aria-label", K ? "Unlock" : "Lock"), At.setAttribute("data-tip", K ? "Unlock" : "Lock"));
      }
      const st = ks(a);
      if (!(st != null && st.visible)) {
        q.style.display = "none";
        return;
      }
      const Tt = st.corners.map((At) => At.x), Ot = st.corners.map((At) => At.y), Lt = Math.min(...Tt), Ht = Math.max(...Tt), jt = Math.max(...Ot), Gt = q.style.display, Kt = q.style.visibility;
      q.style.display = "flex", q.style.visibility = "hidden";
      const me = q.getBoundingClientRect(), Zn = Math.round(Number((me == null ? void 0 : me.width) || 0)) || q.offsetWidth || f.menuSize.w || 220, Jn = Math.round(Number((me == null ? void 0 : me.height) || 0)) || q.offsetHeight || f.menuSize.h || 40;
      f.menuSize.w = Number.isFinite(Zn) && Zn > 0 ? Zn : 220, f.menuSize.h = Number.isFinite(Jn) && Jn > 0 ? Jn : 40, q.style.display = Gt, q.style.visibility = Kt, f.menuSize.measured = !0;
      const no = f.menuSize.w, ca = f.menuSize.h, di = 14;
      q.style.display = "flex";
      let hi = (Lt + Ht) * 0.5 - no * 0.5, ro = jt + 18;
      if (hi = j(hi, di, C.width - no - di), ro + ca > C.height - di) {
        q.style.display = "none";
        return;
      }
      q.style.left = `${hi}px`, q.style.top = `${ro}px`;
      return;
    }
    const s = Il(), l = fr(r), h = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Ce(r) ? "external" : "normal"}` : `cutout:${f.cutoutAspectOpen ? "open" : "closed"}`;
    if (f.menuMode !== h) {
      if (s === "stroke")
        q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      else if (e === "stickers" || s === "image")
        q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          ${Ce(r) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Dt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Dt.replace_image}</button>`}
          ${Ce(r) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Dt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          ${Ce(r) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Dt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>`}
        `;
      else {
        const gt = vi(r);
        q.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Dt.aspect}</button>
            <div class="pano-aspect-popover${f.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${gt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${gt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${gt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${gt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Dt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      }
      f.menuMode = h, f.menuSize.measured = !1, eo(q);
    }
    if ((e === "stickers" || s === "image") && Ce(r)) {
      const gt = q.querySelector("[data-action='back-initial']");
      if (gt) {
        const st = up();
        gt.disabled = !st, gt.setAttribute("aria-disabled", st ? "false" : "true"), gt.setAttribute("data-tip", st ? "Back to initial position" : "Already at initial position");
      }
      const K = q.querySelector("[data-action='toggle-visible']");
      if (K) {
        const st = oi(r);
        K.innerHTML = st ? Dt.eye : Dt.eye_dashed, K.setAttribute("aria-label", st ? "Show" : "Hide"), K.setAttribute("data-tip", st ? "Show input image" : "Hide input image");
      }
    }
    const g = q.querySelector("[data-action='toggle-lock']");
    g && (g.innerHTML = l ? Dt.lock_open : Dt.lock_closed, g.setAttribute("aria-label", l ? "Unlock" : "Lock"), g.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = Re(r);
    if (!(_ != null && _.visible)) {
      q.style.display = "none";
      return;
    }
    const b = _.corners, v = b.map((gt) => gt.x), S = b.map((gt) => gt.y), w = Math.min(...v), N = Math.max(...v), E = Math.max(...S), T = q.style.display, $ = q.style.visibility;
    q.style.display = "flex", q.style.visibility = "hidden";
    const B = q.getBoundingClientRect(), tt = Math.round(Number((B == null ? void 0 : B.width) || 0)) || q.offsetWidth || f.menuSize.w || 220, Q = Math.round(Number((B == null ? void 0 : B.height) || 0)) || q.offsetHeight || f.menuSize.h || 40;
    f.menuSize.w = Number.isFinite(tt) && tt > 0 ? tt : 220, f.menuSize.h = Number.isFinite(Q) && Q > 0 ? Q : 40, q.style.display = T, q.style.visibility = $, f.menuSize.measured = !0;
    const bt = f.menuSize.w, dt = f.menuSize.h, mt = 14;
    q.style.display = "flex";
    let yt = (w + N) * 0.5 - bt * 0.5, wt = E + 18;
    if (!Number.isFinite(yt) || !Number.isFinite(wt)) {
      q.style.display = "none";
      return;
    }
    if (yt = j(yt, mt, C.width - bt - mt), wt + dt > C.height - mt) {
      q.style.display = "none";
      return;
    }
    q.style.left = `${yt}px`, q.style.top = `${wt}px`;
  }
  function oa() {
    ot && (ne.timer && (clearTimeout(ne.timer), ne.timer = 0), ne.target = null, ot.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Qg(r) {
    if (!ot || !r || !r.isConnected) return;
    const a = String(r.getAttribute("data-tip") || "").trim();
    if (!a) return;
    ot.textContent = a;
    const s = O.getBoundingClientRect(), l = r.getBoundingClientRect(), h = 8, g = ot.offsetWidth || 100, _ = ot.offsetHeight || 24, b = !!r.closest(".pano-floating-left"), v = !!r.closest(".pano-paint-footer") || !!r.closest(".pano-paint-color-float");
    ot.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - s.left + l.width * 0.5 - g * 0.5, w = l.top - s.top - _ - 8;
    if (b)
      ot.classList.add("pano-tooltip-tool-rail"), S = l.right - s.left + 10, w = l.top - s.top + l.height * 0.5 - _ * 0.5, S = j(S, h, Math.max(h, s.width - g - h)), w = j(w, h, Math.max(h, s.height - _ - h));
    else if (v) {
      ot.classList.add("pano-tooltip-footer");
      const N = r.closest(".pano-paint-footer"), E = N ? N.getBoundingClientRect() : l;
      S = E.left - s.left + E.width * 0.5 - g * 0.5, w = E.bottom - s.top + 5, S = j(S, h, Math.max(h, s.width - g - h)), w = Math.max(h, w);
    }
    S = j(S, h, Math.max(h, s.width - g - h)), w = Math.max(h, w), ot.style.left = `${S}px`, ot.style.top = `${w}px`, ot.classList.add("show");
  }
  function eo(r) {
    r.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        ne.target = a, ne.timer && clearTimeout(ne.timer), ne.timer = window.setTimeout(() => {
          ne.target === a && Qg(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        ne.target === a && (ne.target = null), oa();
      }), a.addEventListener("pointerdown", oa));
    });
  }
  const Oe = Ss({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (r) => {
      f.viewYaw = $e(Number(r.yaw || 0)), f.viewPitch = j(Number(r.pitch || 0), -89.9, 89.9), f.viewFov = j(Number(r.fov || f.viewFov || 100), 35, 140);
    },
    getInvert: () => {
      var r, a;
      return {
        x: (r = p.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (a = p.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: dr,
    onInteraction: () => {
      Pt.backgroundDirty = !0, Pt.dirty = !0;
    }
  });
  C.onpointerdown = (r) => {
    const a = li(r);
    if (ra(a, !0), f.viewTween = null, Oe.state.inertia.active = !1, Oe.state.inertia.vx = 0, Oe.state.inertia.vy = 0, r.button === 1) {
      r.preventDefault(), f.mode !== "frame" && (f.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, r.pointerId, performance.now())), we(a), C.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      f.mode === "pano" && (f.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, r.pointerId, performance.now()), we(a), C.setPointerCapture(r.pointerId));
      return;
    }
    if (X && !X.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (fu() || qs())) {
      const b = f.primaryTool === "mask" ? "mask" : "paint", v = f.primaryTool === "mask" ? f.maskTool : f.paintTool, S = qs() ? ie() : null, w = { kind: "ERP_GLOBAL" }, N = S ? vn(a, S, performance.now()) : bn(a, performance.now());
      f.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: _i("live"),
        stroke: v === "lasso_fill" ? Kg(b, v, [N], w) : Gg(b, v, [N], w)
      }, Yi();
      const E = Xn();
      if (E)
        if (f.paintEngine.beginStroke(f.interaction.stroke, E), f.interaction.kind === "paint_stroke") {
          const T = f.paintEngine.ensureTarget(E), $ = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          f.paintEngine.appendStrokePoint(T, $, B, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, E);
      we(a), C.setPointerCapture(r.pointerId), ft();
      return;
    }
    const s = An(), l = _e(), h = s.length > 1 ? ks(s) : l ? Re(l) : null;
    if (f.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      f.interaction = { kind: "marquee_select", start: a, current: a }, we(a), C.setPointerCapture(r.pointerId), ft({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((v) => fr(v)) ? { kind: "none" } : Ys(h, a)).kind === "move") {
        f.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((v) => De(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var w, N;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Te(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: on(yn(v.actionGroupId, v.layerKind)),
            frameSnapshot: on(Cr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var w, N;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Pl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => We(v)).map((v) => ({
            id: Ke(v.rasterObjectId || v.id || ""),
            snapshot: on(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var w, N;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Lp(v)
          }))
        }, we(a), C.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = fr(l) ? { kind: "none" } : Ys(h, a);
      if (b.kind === "scale") {
        f.interaction = Te(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: on(yn(l.actionGroupId, l.layerKind)),
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
        }, we(a), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        f.interaction = {
          kind: b.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, we(a), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        f.interaction = Te(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: on(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: on(Cr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, we(a), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Te(l)) {
          const v = f.mode === "frame" ? (() => {
            const S = ie();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: on(yn(l.actionGroupId, l.layerKind)),
            frameSnapshot: on(Cr(l.actionGroupId, l.layerKind))
          }, we(a), C.setPointerCapture(r.pointerId);
          return;
        }
        if (We(l)) {
          const v = f.mode === "frame" ? (() => {
            const S = ie();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: on(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(l.rasterObjectId || l.id || "")))
          }, we(a), C.setPointerCapture(r.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, we(a), C.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = pu(a);
    if (g) {
      const b = f.selectedId !== g.item.id;
      if (b && f.selectedId && (ue(), En()), Wi(g.item), e === "cutout" && b && (f.cutoutAspectOpen = !1), b && Zt(), Wt(), ft(), b) {
        we(a);
        return;
      }
      if (fr(g.item)) {
        we(a);
        return;
      }
      f.interaction = {
        kind: Te(g.item) ? "move_stroke_group" : We(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: a.x - g.geom.center.x, y: a.y - g.geom.center.y },
        startUv: Te(g.item) || We(g.item) ? f.mode === "frame" ? (() => {
          const v = ie();
          return v ? vn(a, v, performance.now()) : null;
        })() : bn(a, performance.now()) : null,
        snapshot: Te(g.item) ? on(yn(g.item.actionGroupId, g.item.layerKind)) : We(g.item) ? on(ln().find((v) => String((v == null ? void 0 : v.id) || "") === Ke(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Te(g.item) ? on(Cr(g.item.actionGroupId, g.item.layerKind)) : null
      }, we(a), C.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!f.selectedId;
    _ && (ue(), En()), ai(), _ && Zt(), Wt(), ft(), f.mode === "pano" && (f.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, r.pointerId, performance.now()), we(a), C.setPointerCapture(r.pointerId));
  }, C.onpointermove = (r) => {
    var l, h, g, _, b, v, S, w, N, E, T, $, B, tt, Q, bt, dt, mt;
    const a = li(r);
    if (ra(a, !0), !f.interaction) {
      we(a);
      return;
    }
    we(a);
    const s = f.interaction;
    if (s.kind === "paint_stroke") {
      const yt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let wt = !1;
      yt.forEach((gt) => {
        const K = li(gt);
        Wg(s, K, performance.now()) && (wt = !0);
      }), wt && ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const yt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let wt = !1;
      if (yt.forEach((gt) => {
        const K = li(gt);
        qg(s, K, performance.now()) && (wt = !0);
      }), wt) {
        const gt = Xn();
        gt && f.paintEngine.updateActiveStroke(s.stroke, gt), ft({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const yt = performance.now();
      Oe.moveDrag(a.x, a.y, f.mode === "unwrap" ? "unwrap" : "pano", yt), s.lastTs = yt, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      f.frameView.panX += a.x - s.last.x, f.frameView.panY += a.y - s.last.y, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const yt = a.x - s.offset.x, wt = a.y - s.offset.y;
      if (f.mode === "frame" && e === "cutout") {
        const gt = ie(), K = Ye(gt);
        if (!gt || !K) return;
        const st = {
          x: j((yt - K.x) / Math.max(1, K.w), 0, 1),
          y: j((wt - K.y) / Math.max(1, K.h), 0, 1)
        }, Tt = Us(gt, st);
        if (!Tt) return;
        const Ot = Ma(Tt);
        s.item.yaw_deg = Ot.yaw, s.item.pitch_deg = Ot.pitch;
      } else if (f.mode === "unwrap") {
        const gt = dr(), K = j((yt - gt.x) / Math.max(gt.w, 1), 0, 1), st = j((wt - gt.y) / Math.max(gt.h, 1), 0, 1);
        s.item.yaw_deg = $e(K * 360 - 180), s.item.pitch_deg = j(90 - st * 180, -90, 90);
      } else {
        const gt = Es(yt, wt), K = Ma(gt);
        s.item.yaw_deg = K.yaw, s.item.pitch_deg = K.pitch;
      }
      ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const yt = f.mode === "frame" ? (() => {
        const K = ie();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!yt || !s.startUv) return;
      const wt = Number(yt.u || 0) - Number(s.startUv.u || 0), gt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      kl((l = s.item) == null ? void 0 : l.actionGroupId, wt, gt, s.snapshot, (h = s.item) == null ? void 0 : h.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const yt = f.mode === "frame" ? (() => {
        const K = ie();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!yt || !s.startUv) return;
      const wt = Number(yt.u || 0) - Number(s.startUv.u || 0), gt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      Al(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", wt, gt, s.snapshot) && (Ji(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const yt = a.x - Number(((b = s.offset) == null ? void 0 : b.x) || 0), wt = a.y - Number(((v = s.offset) == null ? void 0 : v.y) || 0);
      let gt = !1, K = !1, st = !1;
      const Tt = yt - Number(((S = s.startCenter) == null ? void 0 : S.x) || yt), Ot = wt - Number(((w = s.startCenter) == null ? void 0 : w.y) || wt);
      for (const Lt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ht = (e === "cutout" ? Ps() : Me()).find((Gt) => String((Gt == null ? void 0 : Gt.id) || "") === String(Lt.id || ""));
        if (!Ht || !De(Ht)) continue;
        const jt = {
          x: Number(((N = Lt.center) == null ? void 0 : N.x) || 0) + Tt,
          y: Number(((E = Lt.center) == null ? void 0 : E.y) || 0) + Ot
        };
        if (f.mode === "frame" && e === "cutout") {
          const Gt = ie(), Kt = Ye(Gt);
          if (!Gt || !Kt) continue;
          const me = {
            x: j((jt.x - Kt.x) / Math.max(1, Kt.w), 0, 1),
            y: j((jt.y - Kt.y) / Math.max(1, Kt.h), 0, 1)
          }, Zn = Us(Gt, me);
          if (!Zn) continue;
          const Jn = Ma(Zn);
          Ht.yaw_deg = Jn.yaw, Ht.pitch_deg = Jn.pitch;
        } else if (f.mode === "unwrap") {
          const Gt = dr(), Kt = j((jt.x - Gt.x) / Math.max(Gt.w, 1), 0, 1), me = j((jt.y - Gt.y) / Math.max(Gt.h, 1), 0, 1);
          Ht.yaw_deg = $e(Kt * 360 - 180), Ht.pitch_deg = j(90 - me * 180, -90, 90);
        } else {
          const Gt = Es(jt.x, jt.y), Kt = Ma(Gt);
          Ht.yaw_deg = Kt.yaw, Ht.pitch_deg = Kt.pitch;
        }
        gt = !0;
      }
      for (const Lt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ht = {
          x: Number(((T = Lt.center) == null ? void 0 : T.x) || 0) + Tt,
          y: Number((($ = Lt.center) == null ? void 0 : $.y) || 0) + Ot
        }, jt = f.mode === "frame" ? (() => {
          const Kt = ie();
          return Kt ? vn(Ht, Kt, performance.now()) : null;
        })() : bn(Ht, performance.now()), Gt = Lt.centerUv || null;
        if (jt && Gt) {
          const Kt = Number(jt.u || 0) - Number(Gt.u || 0), me = Number(jt.v || 0) - Number(Gt.v || 0);
          kl(Lt.id, Kt, me, Lt.snapshot, Lt.layerKind, Lt.frameSnapshot) && (gt = !0, K = !0);
        }
      }
      for (const Lt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ht = {
          x: Number(((B = Lt.center) == null ? void 0 : B.x) || 0) + Tt,
          y: Number(((tt = Lt.center) == null ? void 0 : tt.y) || 0) + Ot
        }, jt = f.mode === "frame" ? (() => {
          const Kt = ie();
          return Kt ? vn(Ht, Kt, performance.now()) : null;
        })() : bn(Ht, performance.now()), Gt = Lt.centerUv || null;
        if (jt && Gt) {
          const Kt = Number(jt.u || 0) - Number(Gt.u || 0), me = Number(jt.v || 0) - Number(Gt.v || 0);
          Al(Lt.id, Kt, me, Lt.snapshot) && (gt = !0, st = !0);
        }
      }
      gt && (K ? In({ rebuildPaintEngine: !0 }) : st ? Ji() : hn(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Cl((Q = s.item) == null ? void 0 : Q.actionGroupId, wt, 0, s.snapshot, (bt = s.item) == null ? void 0 : bt.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let yt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Ur;
      r.shiftKey && (yt = Math.round(yt / 45) * 45), Cl((dt = s.item) == null ? void 0 : dt.actionGroupId, 1, yt, s.snapshot, (mt = s.item) == null ? void 0 : mt.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * wt, 1, 179), s.item.vFOV_deg = j(s.startVFOV * wt, 1, 179), s.item.aspect_id = jr(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * wt, 1, 179), s.item.aspect_id = jr(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = j(s.startVFOV * wt, 1, 179), s.item.aspect_id = jr(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let wt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Ur, gt = s.startRot - wt;
      r.shiftKey && (gt = Math.round(gt / 45) * 45);
      const K = De(s.item) ? "rot_deg" : "roll_deg";
      s.item[K] = gt, ft({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var a, s, l, h, g, _;
    const r = f.interaction;
    if (((a = f.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (Yi(), Xg(f.interaction)) {
        In();
        const b = String(((l = f.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = ce().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const v = Xn();
        v && (String(((h = f.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(v), Jl()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, v)), ue(), En(), Zt(), Wt(), t.setDirtyCanvas(!0, !0), ft();
      } else {
        const b = Xn();
        b && f.paintEngine.cancelActiveStroke(b);
      }
    else if (((g = f.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = gu(f.interaction.start, f.interaction.current), S = [
        ...e === "cutout" ? Hs().filter((w) => !mn(w)) : [...Me()],
        ...qh(),
        ...Yh()
      ].filter((w) => Jg(b, Re(w)));
      ep(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && S.length && (f.cutoutAspectOpen = !1), Zt(), Wt(), ft();
    } else if (f.interaction && f.interaction.kind !== "view" && f.interaction.kind !== "pan_frame") {
      let b = !1;
      (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (b = !0), f.interaction.kind === "move_raster_object" && (b = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (b = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (b = !0), b && Ji(), ue(), En(), t.setDirtyCanvas(!0, !0), Gs(), f.hqFrames = 1, Wt(), ft();
    }
    f.interaction = null, Yi(), r && r.kind === "view" && Oe.endDrag(performance.now()), Yo(), Wt(), we(f.pointerPos), ft();
  }, C.onpointercancel = () => {
    var r, a, s;
    if (((r = f.interaction) == null ? void 0 : r.kind) === "view" && Oe.endDrag(performance.now()), ((a = f.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Yi();
      const l = Xn();
      l && f.paintEngine.cancelActiveStroke(l);
    }
    f.interaction = null, Yi(), Yo(), we(f.pointerPos), ft({ localOnly: !0 });
  }, C.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, C.onmousemove = (r) => {
    const a = li(r);
    ra(a, !0), !f.interaction && we(a);
  }, C.onmouseleave = () => {
    ra(f.pointerPos, !1), we(f.pointerPos);
  }, C.onwheel = (r) => {
    if (f.mode === "frame") {
      const a = li(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Vg(a, s) && ft({ localOnly: !0 }), r.preventDefault();
      return;
    }
    f.mode === "pano" && (Oe.applyWheelEvent(r) && ft({ localOnly: !0 }), r.preventDefault());
  }, C.ondragover = (r) => {
    e !== "stickers" && e !== "cutout" || i || (r.preventDefault(), cn(!0));
  }, C.ondrop = (r) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Ne.depth = 0, cn(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((h) => na(h));
    s && ru(s);
  };
  const mu = (r) => {
    e !== "stickers" && e !== "cutout" || i || nn(r) && (Ne.depth += 1, cn(!0), r.preventDefault());
  }, yu = (r) => {
    e !== "stickers" && e !== "cutout" || i || (!Ne.active && nn(r) && cn(!0), Ne.active && r.preventDefault());
  }, bu = (r) => {
    if (e !== "stickers" && e !== "cutout" || i || !Ne.active) return;
    Ne.depth = Math.max(0, Ne.depth - 1);
    const a = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Ne.depth === 0 || a) && cn(!1);
  }, vu = (r) => {
    e !== "stickers" && e !== "cutout" || i || (Ne.depth = 0, cn(!1), nn(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", mu, !0), window.addEventListener("dragover", yu, !0), window.addEventListener("dragleave", bu, !0), window.addEventListener("drop", vu, !0), it.forEach((r) => {
    r.onclick = () => {
      r.disabled || (f.mode = r.dataset.view, e === "cutout" && f.mode === "frame" && _e() && mn(_e()) && (ai({ preservePanelValues: !0 }), Zt(), Wt()), Ws(), Yo(), ft());
    };
  });
  function Xs() {
    const { canUndo: r, canRedo: a } = nu();
    I.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((s) => {
      s.disabled = !r;
    }), I.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((s) => {
      s.disabled = !a;
    });
  }
  const Zs = I.querySelector("[data-action='undo']");
  Zs && (Zs.onclick = () => {
    i || Zs.disabled || to(-1);
  });
  const Js = I.querySelector("[data-action='redo']");
  Js && (Js.onclick = () => {
    i || Js.disabled || to(1);
  });
  const _u = I.querySelector("[data-action='add']");
  _u && (_u.onclick = () => {
    i || (e === "stickers" ? Ks() : ou());
  });
  const wu = I.querySelector("[data-action='clear']");
  wu && (wu.onclick = () => {
    i || su();
  });
  const xu = I.querySelector("[data-action='save']");
  xu && (xu.onclick = () => {
    i || uu();
  }), I.querySelector("[data-action='reset-view']").onclick = () => {
    ti(0, 0, 100, 180, 680);
  };
  const Rr = I.querySelector("[data-action='toggle-grid']"), Qs = () => {
    if (!Rr) return;
    const r = !!f.showGrid;
    Rr.innerHTML = r ? Dt.eye : Dt.eye_dashed, Rr.setAttribute("aria-pressed", r ? "true" : "false"), Rr.setAttribute("aria-label", r ? "Hide Grid" : "Show Grid"), Rr.setAttribute("data-tip", r ? "Hide grid" : "Show grid");
  };
  if (Rr && (Qs(), Rr.onclick = () => {
    f.showGrid = !f.showGrid, yv(t == null ? void 0 : t.id, f.showGrid), Qs(), ft();
  }), at && (at.querySelectorAll("[data-tool-mode]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const a = String(r.getAttribute("data-tool-mode") || "cursor");
      f.primaryTool = a, (a === "paint" || a === "mask") && ai({ preservePanelValues: !0 }), un(), Zt(), Wt(), ft();
    };
  }), at.querySelectorAll("[data-tool-ui-action]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const a = String(r.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && r.disabled)) {
        if (a === "undo") to(-1);
        else if (a === "redo") to(1);
        else if (a === "clear") su();
        else if (a === "add") Ks();
        else if (a === "add-image") Ks();
        else if (a === "add-or-look") {
          const s = ie();
          if ((p.shots || []).length === 0)
            ou();
          else {
            const l = s;
            if (!l) return;
            f.selectedId = l.id || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_shot_id = f.selectedId;
            const h = $e(Number(l.yaw_deg || 0)), g = j(Number(l.pitch_deg || 0), -89.9, 89.9);
            ti(h, g, f.viewFov), Zt(), Wt(), ft();
          }
        }
      }
    };
  })), I.querySelectorAll("[data-paint-tool]").forEach((r) => {
    r.onclick = () => {
      f.primaryTool = "paint";
      const a = String(r.getAttribute("data-paint-tool") || "pen");
      f.paintTool = a, ai({ preservePanelValues: !0 }), rn[a] && (f.activeBrushPresetId = a), un(), Zt(), Wt(), ft();
    };
  }), I.querySelectorAll("[data-mask-tool]").forEach((r) => {
    r.onclick = () => {
      f.primaryTool = "mask", f.maskTool = String(r.getAttribute("data-mask-tool") || "pen"), ai({ preservePanelValues: !0 }), un(), Zt(), Wt(), ft();
    };
  }), D.forEach((r) => {
    r.onclick = () => {
      const a = String(r.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Dg(a);
    };
  }), z.forEach((r) => {
    r.oninput = () => {
      if (r.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(r.value)))), s = yr(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      z.forEach((h) => {
        h.value = String(a), h.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), Z.forEach((h) => {
        h.textContent = String(a);
      }), Bg();
    }, r.onchange = () => ia(), r.addEventListener("pointerup", ia), r.addEventListener("pointercancel", ia), r.addEventListener("blur", ia);
  }), Et) {
    Et.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Ua.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (f.paintColor = fn(s.color), pt(!0), un());
      };
    });
    const r = Et.querySelector("[data-paint-color-custom]");
    r && (r.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), X && !X.hidden ? pt(!0) : rt(), un();
    });
  }
  const tm = (r, a) => {
    var b;
    if (!Bt) return;
    const s = Bt.getBoundingClientRect(), l = j((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - j((a - s.top) / Math.max(1, s.height), 0, 1), g = ho(f.customPaintColor), _ = { ...Mc(g.h, l, h), a: Number(((b = f.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    f.customPaintColor = fn(_), f.paintColor = fn(_), un();
  }, em = (r) => {
    var g;
    if (!ge) return;
    const a = ge.getBoundingClientRect(), s = j((r - a.left) / Math.max(1, a.width), 0, 1), l = ho(f.customPaintColor), h = { ...Mc(s, l.s, l.v), a: Number(((g = f.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    f.customPaintColor = fn(h), f.paintColor = fn(h), un();
  }, Su = (r, a) => {
    const s = r.pointerId;
    a(r);
    const l = (g) => {
      g.pointerId === s && a(g);
    }, h = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Bt && (Bt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Su(r, (a) => tm(a.clientX, a.clientY));
  }), ge && (ge.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Su(r, (a) => em(a.clientX));
  }), Mt && (Mt.oninput = () => {
    const r = { ...f.customPaintColor, a: j(Number(Mt.value) / 100, 0, 1) };
    f.customPaintColor = fn(r), f.paintColor = fn(r), un();
  });
  const Nu = () => {
    if (!G) return;
    const r = !!f.fullscreen;
    G.innerHTML = r ? Dt.fullscreen_close : Dt.fullscreen, G.setAttribute("aria-label", r ? "Exit Fullscreen" : "Fullscreen"), G.setAttribute("data-tip", r ? "Exit fullscreen" : "Fullscreen");
  }, aa = (r) => {
    const a = !!r;
    f.fullscreen !== a && (f.fullscreen = a, I.classList.toggle("pano-modal-fullscreen", a), a ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), Qs(), Nu(), ft());
  }, Mu = () => document.fullscreenElement === k, nm = async () => {
    var r, a;
    try {
      if (!document.fullscreenEnabled) {
        aa(!f.fullscreen);
        return;
      }
      Mu() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((r = k.requestFullscreen) == null ? void 0 : r.call(k));
    } catch {
      aa(!f.fullscreen);
    }
  }, Pu = () => {
    document.fullscreenEnabled && aa(Mu());
  };
  document.addEventListener("fullscreenchange", Pu), G && (Nu(), G.onclick = (r) => {
    r.preventDefault(), r.stopPropagation(), nm();
  });
  const ku = () => {
    if (!lt) return;
    const r = !!f.outputPreviewExpanded;
    lt.innerHTML = r ? Dt.fullscreen_close : Dt.fullscreen, lt.setAttribute("aria-label", r ? "Reduce Preview" : "Expand Preview"), lt.setAttribute("data-tip", r ? "Reduce preview" : "Expand preview");
  };
  lt && (ku(), lt.onclick = (r) => {
    r.preventDefault(), r.stopPropagation();
    const a = !f.outputPreviewExpanded;
    f.outputPreviewExpanded = a, f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = a ? 1 : 0, f.outputPreviewAnimStartTs = performance.now(), ku(), ft();
  }), q.addEventListener("click", (r) => {
    const a = r.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!i) {
      if (s === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, Wt(), ft();
        return;
      }
      if (s === "aspect-set") {
        const l = _e();
        if (!l) return;
        const h = String(a.getAttribute("data-aspect") || "1:1");
        Og(l, h), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Gs(), ue(), Pe(), Wt(), ft();
        return;
      }
      if (s === "rotate-90") {
        const l = _e();
        if (!l) return;
        Fg(l), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Gs(), ue(), Pe(), Wt(), ft();
        return;
      }
      if (s === "bring-front") {
        $g();
        return;
      }
      if (s === "send-back") {
        Hg();
        return;
      }
      if (s === "duplicate") {
        Rg();
        return;
      }
      if (s === "replace-image") {
        Ig();
        return;
      }
      if (s === "toggle-lock") {
        tp();
        return;
      }
      if (s === "back-initial") {
        cp();
        return;
      }
      if (s === "toggle-visible") {
        sp();
        return;
      }
      if (s === "delete") {
        cu();
        return;
      }
      ft();
    }
  });
  const tc = t.onExecuted, ec = t.onConnectionsChange;
  let nc = null, rc = null, ic = null;
  !i && e === "stickers" && (ic = (r = "sync") => {
    Fl(r);
  }, t.__panoExternalStickerSync = ic, nc = function(...a) {
    var s;
    typeof tc == "function" && tc.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = nc, rc = function(...a) {
    var s;
    typeof ec == "function" && ec.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = rc), i || (Xc.set(String(t.id ?? "0"), () => Os()), Ep() && Os());
  const fi = () => {
    var r, a, s, l, h, g, _, b, v;
    f.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(f.cutoutPreviewSurfaceRaf), f.cutoutPreviewSurfaceRaf = 0), f.cutoutPreviewSurfaceTimer && (clearTimeout(f.cutoutPreviewSurfaceTimer), f.cutoutPreviewSurfaceTimer = 0), Xc.delete(String(t.id ?? "0")), i || Os(), document.fullscreenElement === k && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Pu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (_ = (g = pn) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), oa(), Cg(), (v = J == null ? void 0 : J.dispose) == null || v.call(J), cn(!1), window.removeEventListener("keydown", Cu, !0), window.removeEventListener("keydown", Au, !0), window.removeEventListener("keydown", sa, !0), window.removeEventListener("keyup", sa, !0), window.removeEventListener("keydown", Iu, !0), window.removeEventListener("dragenter", mu, !0), window.removeEventListener("dragover", yu, !0), window.removeEventListener("dragleave", bu, !0), window.removeEventListener("drop", vu, !0), !i && e === "stickers" && (t.onExecuted === nc && (t.onExecuted = tc), t.onConnectionsChange === rc && (t.onConnectionsChange = ec), t.__panoExternalStickerSync === ic && (t.__panoExternalStickerSync = null)), M.unmount(), x.remove();
  }, Cu = (r) => {
    var a, s, l, h;
    if (r.key === "Escape") {
      if (f.fullscreen && document.fullscreenElement === k) {
        r.preventDefault(), r.stopPropagation(), (a = r.stopImmediatePropagation) == null || a.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), aa(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), fi();
    }
  }, Au = (r) => {
    const a = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = r.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !_e() || (cu(), r.preventDefault(), r.stopPropagation());
  }, sa = (r) => {
    const a = !!(r.ctrlKey || r.metaKey);
    f.marqueeModifier !== a && (f.marqueeModifier = a, we(f.pointerPos));
  }, Iu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const a = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = r.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = nu();
    r.shiftKey && !_ || !r.shiftKey && !g || (to(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Cu, !0), window.addEventListener("keydown", Au, !0), window.addEventListener("keydown", sa, !0), window.addEventListener("keyup", sa, !0), window.addEventListener("keydown", Iu, !0), k.addEventListener("pointerdown", (r) => {
    r.target === k && fi();
  }), eo(I), yp(), !i && e === "stickers" && Fl("open"), Eg(), ue(), Xs(), un(), ut && requestAnimationFrame(() => {
    ut.classList.add("is-ready");
  }), Zt(), qo(), eu(), we(f.pointerPos), ft(), Pt.rafId = requestAnimationFrame(Bs);
}
function Zf(t, e, n, i) {
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
    o(y), Nv(y, Yc);
    const M = Ci(y, Yc);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const C = M.callback;
      M.callback = (F) => {
        var L;
        const O = C ? C(F) : void 0;
        return (L = y.setDirtyCanvas) == null || L.call(y, !0, !1), O;
      };
    }
    const k = Ci(y, "bg_color");
    if (k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (I = k.callback) == null || I.call(k, "#00ff00")), n === "PanoramaStickers") {
      Jc(y, i, () => To(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = p;
        return;
      }
    }
    Jc(y, i, () => To(y, "cutout")), bb(y, {
      buttonText: i,
      onOpen: () => To(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = p;
  }
  const u = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return c(this), y;
  };
  const d = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const y = d ? d.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
  const m = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = m ? m.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function Ov(t) {
  if (!(t != null && t.prototype)) return;
  const e = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const o = n ? n.apply(this, arguments) : void 0;
    return e.call(this), o;
  };
  const i = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const o = i ? i.apply(this, arguments) : void 0;
    return e.call(this), o;
  };
}
function Fv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const i = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !i && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    Jc(t, "Open Preview", () => To(t, "stickers", { readOnly: !0, hideSidebar: !1 })), yb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => To(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
pn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Xc.values()].map((i) => {
      try {
        return typeof i == "function" ? i() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...bo.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...vo.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Zf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Zf(t, e, "PanoramaCutout", "Open Cutout Editor"), Vc(n) && Ov(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Vc(e) && Fv(t);
  }
});
