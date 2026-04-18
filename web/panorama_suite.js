import * as yo from "../../scripts/app.js";
import { app as hn } from "../../scripts/app.js";
import { api as Xe } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Lc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const re = {}, pi = [], Gn = () => {
}, Kf = () => !1, Jo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Qo = (t) => t.startsWith("onUpdate:"), ze = Object.assign, Oc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Bg = Object.prototype.hasOwnProperty, qt = (t, e) => Bg.call(t, e), Lt = Array.isArray, gi = (t) => wa(t) === "[object Map]", Wf = (t) => wa(t) === "[object Set]", Su = (t) => wa(t) === "[object Date]", $t = (t) => typeof t == "function", we = (t) => typeof t == "string", Kn = (t) => typeof t == "symbol", Jt = (t) => t !== null && typeof t == "object", qf = (t) => (Jt(t) || $t(t)) && $t(t.then) && $t(t.catch), Yf = Object.prototype.toString, wa = (t) => Yf.call(t), Gg = (t) => wa(t).slice(8, -1), Xf = (t) => wa(t) === "[object Object]", Fc = (t) => we(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ea = /* @__PURE__ */ Lc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ts = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Kg = /-\w/g, Je = ts(
  (t) => t.replace(Kg, (e) => e.slice(1).toUpperCase())
), Wg = /\B([A-Z])/g, Ur = ts(
  (t) => t.replace(Wg, "-$1").toLowerCase()
), es = ts((t) => t.charAt(0).toUpperCase() + t.slice(1)), Bs = ts(
  (t) => t ? `on${es(t)}` : ""
), jn = (t, e) => !Object.is(t, e), Gs = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, Zf = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, qg = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Nu;
const ns = () => Nu || (Nu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rs(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = we(r) ? Jg(r) : rs(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (we(t) || Jt(t))
    return t;
}
const Yg = /;(?![^(]*\))/g, Xg = /:([^]+)/, Zg = /\/\*[^]*?\*\//g;
function Jg(t) {
  const e = {};
  return t.replace(Zg, "").split(Yg).forEach((n) => {
    if (n) {
      const r = n.split(Xg);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function is(t) {
  let e = "";
  if (we(t))
    e = t;
  else if (Lt(t))
    for (let n = 0; n < t.length; n++) {
      const r = is(t[n]);
      r && (e += r + " ");
    }
  else if (Jt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Qg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", t0 = /* @__PURE__ */ Lc(Qg);
function Jf(t) {
  return !!t || t === "";
}
function e0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = $c(t[r], e[r]);
  return n;
}
function $c(t, e) {
  if (t === e) return !0;
  let n = Su(t), r = Su(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Kn(t), r = Kn(e), n || r)
    return t === e;
  if (n = Lt(t), r = Lt(e), n || r)
    return n && r ? e0(t, e) : !1;
  if (n = Jt(t), r = Jt(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (f && !g || !f && g || !$c(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Qf = (t) => !!(t && t.__v_isRef === !0), td = (t) => we(t) ? t : t == null ? "" : Lt(t) || Jt(t) && (t.toString === Yf || !$t(t.toString)) ? Qf(t) ? td(t.value) : JSON.stringify(t, ed, 2) : String(t), ed = (t, e) => Qf(e) ? ed(t, e.value) : gi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[Ks(r, s) + " =>"] = a, n),
    {}
  )
} : Wf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => Ks(n))
} : Kn(e) ? Ks(e) : Jt(e) && !Lt(e) && !Xf(e) ? String(e) : e, Ks = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Kn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let en;
class n0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = en, !e && en && (this.index = (en.scopes || (en.scopes = [])).push(
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
      const n = en;
      try {
        return en = this, e();
      } finally {
        en = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = en, en = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (en = this.prevScope, this.prevScope = void 0);
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
function r0() {
  return en;
}
let ne;
const Ws = /* @__PURE__ */ new WeakSet();
class nd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, en && en.active && en.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ws.has(this) && (Ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || id(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mu(this), ad(this);
    const e = ne, n = Nn;
    ne = this, Nn = !0;
    try {
      return this.fn();
    } finally {
      od(this), ne = e, Nn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Hc(e);
      this.deps = this.depsTail = void 0, Mu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    dc(this) && this.run();
  }
  get dirty() {
    return dc(this);
  }
}
let rd = 0, na, ra;
function id(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ra, ra = t;
    return;
  }
  t.next = na, na = t;
}
function Vc() {
  rd++;
}
function zc() {
  if (--rd > 0)
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
function ad(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function od(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), Hc(r), i0(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function dc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (sd(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function sd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === pa) || (t.globalVersion = pa, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !dc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = ne, r = Nn;
  ne = t, Nn = !0;
  try {
    ad(t);
    const a = t.fn(t._value);
    (e.version === 0 || jn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    ne = n, Nn = r, od(t), t.flags &= -3;
  }
}
function Hc(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Hc(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function i0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Nn = !0;
const cd = [];
function or() {
  cd.push(Nn), Nn = !1;
}
function sr() {
  const t = cd.pop();
  Nn = t === void 0 ? !0 : t;
}
function Mu(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = ne;
    ne = void 0;
    try {
      e();
    } finally {
      ne = n;
    }
  }
}
let pa = 0;
class a0 {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class jc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ne || !Nn || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new a0(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, ld(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, pa++, this.notify(e);
  }
  notify(e) {
    Vc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zc();
    }
  }
}
function ld(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        ld(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const hc = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ Symbol(
  ""
), pc = /* @__PURE__ */ Symbol(
  ""
), ga = /* @__PURE__ */ Symbol(
  ""
);
function Oe(t, e, n) {
  if (Nn && ne) {
    let r = hc.get(t);
    r || hc.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new jc()), a.map = r, a.key = n), a.track();
  }
}
function ar(t, e, n, r, a, s) {
  const u = hc.get(t);
  if (!u) {
    pa++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Vc(), e === "clear")
    u.forEach(f);
  else {
    const g = Lt(t), y = g && Fc(n);
    if (g && n === "length") {
      const _ = Number(r);
      u.forEach((p, M) => {
        (M === "length" || M === ga || !Kn(M) && M >= _) && f(p);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(ga)), e) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Or)), gi(t) && f(u.get(pc)));
          break;
        case "delete":
          g || (f(u.get(Or)), gi(t) && f(u.get(pc)));
          break;
        case "set":
          gi(t) && f(u.get(Or));
          break;
      }
  }
  zc();
}
function ni(t) {
  const e = /* @__PURE__ */ Wt(t);
  return e === t ? e : (Oe(e, "iterate", ga), /* @__PURE__ */ pn(t) ? e : e.map(Mn));
}
function as(t) {
  return Oe(t = /* @__PURE__ */ Wt(t), "iterate", ga), t;
}
function zn(t, e) {
  return /* @__PURE__ */ cr(t) ? xi(/* @__PURE__ */ Fr(t) ? Mn(e) : e) : Mn(e);
}
const o0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return qs(this, Symbol.iterator, (t) => zn(this, t));
  },
  concat(...t) {
    return ni(this).concat(
      ...t.map((e) => Lt(e) ? ni(e) : e)
    );
  },
  entries() {
    return qs(this, "entries", (t) => (t[1] = zn(this, t[1]), t));
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
      (n) => n.map((r) => zn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return tr(
      this,
      "find",
      t,
      e,
      (n) => zn(this, n),
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
      (n) => zn(this, n),
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
    return Ys(this, "includes", t);
  },
  indexOf(...t) {
    return Ys(this, "indexOf", t);
  },
  join(t) {
    return ni(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Ys(this, "lastIndexOf", t);
  },
  map(t, e) {
    return tr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ui(this, "pop");
  },
  push(...t) {
    return Ui(this, "push", t);
  },
  reduce(t, ...e) {
    return ku(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return ku(this, "reduceRight", t, e);
  },
  shift() {
    return Ui(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return tr(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ui(this, "splice", t);
  },
  toReversed() {
    return ni(this).toReversed();
  },
  toSorted(t) {
    return ni(this).toSorted(t);
  },
  toSpliced(...t) {
    return ni(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ui(this, "unshift", t);
  },
  values() {
    return qs(this, "values", (t) => zn(this, t));
  }
};
function qs(t, e, n) {
  const r = as(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ pn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const s0 = Array.prototype;
function tr(t, e, n, r, a, s) {
  const u = as(t), f = u !== t && !/* @__PURE__ */ pn(t), g = u[e];
  if (g !== s0[e]) {
    const p = g.apply(t, s);
    return f ? Mn(p) : p;
  }
  let y = n;
  u !== t && (f ? y = function(p, M) {
    return n.call(this, zn(t, p), M, t);
  } : n.length > 2 && (y = function(p, M) {
    return n.call(this, p, M, t);
  }));
  const _ = g.call(u, y, r);
  return f && a ? a(_) : _;
}
function ku(t, e, n, r) {
  const a = as(t), s = a !== t && !/* @__PURE__ */ pn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, _, p) {
    return f && (f = !1, y = zn(t, y)), n.call(this, y, zn(t, _), p, t);
  }) : n.length > 3 && (u = function(y, _, p) {
    return n.call(this, y, _, p, t);
  }));
  const g = a[e](u, ...r);
  return f ? zn(t, g) : g;
}
function Ys(t, e, n) {
  const r = /* @__PURE__ */ Wt(t);
  Oe(r, "iterate", ga);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Kc(n[0]) ? (n[0] = /* @__PURE__ */ Wt(n[0]), r[e](...n)) : a;
}
function Ui(t, e, n = []) {
  or(), Vc();
  const r = (/* @__PURE__ */ Wt(t))[e].apply(t, n);
  return zc(), sr(), r;
}
const c0 = /* @__PURE__ */ Lc("__proto__,__v_isRef,__isVue"), ud = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Kn)
);
function l0(t) {
  Kn(t) || (t = String(t));
  const e = /* @__PURE__ */ Wt(this);
  return Oe(e, "has", t), e.hasOwnProperty(t);
}
class fd {
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
      return r === (a ? s ? v0 : gd : s ? pd : hd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Lt(e);
    if (!a) {
      let g;
      if (u && (g = o0[n]))
        return g;
      if (n === "hasOwnProperty")
        return l0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ve(e) ? e : r
    );
    if ((Kn(n) ? ud.has(n) : c0(n)) || (a || Oe(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Ve(f)) {
      const g = u && Fc(n) ? f : f.value;
      return a && Jt(g) ? /* @__PURE__ */ mc(g) : g;
    }
    return Jt(f) ? a ? /* @__PURE__ */ mc(f) : /* @__PURE__ */ Bc(f) : f;
  }
}
class dd extends fd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Lt(e) && Fc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ cr(s);
      if (!/* @__PURE__ */ pn(r) && !/* @__PURE__ */ cr(r) && (s = /* @__PURE__ */ Wt(s), r = /* @__PURE__ */ Wt(r)), !u && /* @__PURE__ */ Ve(s) && !/* @__PURE__ */ Ve(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : qt(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Ve(e) ? e : a
    );
    return e === /* @__PURE__ */ Wt(a) && (f ? jn(r, s) && ar(e, "set", n, r) : ar(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = qt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && ar(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Kn(n) || !ud.has(n)) && Oe(e, "has", n), r;
  }
  ownKeys(e) {
    return Oe(
      e,
      "iterate",
      Lt(e) ? "length" : Or
    ), Reflect.ownKeys(e);
  }
}
class u0 extends fd {
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
const f0 = /* @__PURE__ */ new dd(), d0 = /* @__PURE__ */ new u0(), h0 = /* @__PURE__ */ new dd(!0);
const gc = (t) => t, Xa = (t) => Reflect.getPrototypeOf(t);
function p0(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Wt(a), u = gi(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = a[t](...r), _ = n ? gc : e ? xi : Mn;
    return !e && Oe(
      s,
      "iterate",
      g ? pc : Or
    ), ze(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: p, done: M } = y.next();
          return M ? { value: p, done: M } : {
            value: f ? [_(p[0]), _(p[1])] : _(p),
            done: M
          };
        }
      }
    );
  };
}
function Za(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function g0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      t || (jn(a, f) && Oe(u, "get", a), Oe(u, "get", f));
      const { has: g } = Xa(u), y = e ? gc : t ? xi : Mn;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && Oe(/* @__PURE__ */ Wt(a), "iterate", Or), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      return t || (jn(a, f) && Oe(u, "has", a), Oe(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Wt(f), y = e ? gc : t ? xi : Mn;
      return !t && Oe(g, "iterate", Or), f.forEach((_, p) => a.call(s, y(_), y(p), u));
    }
  };
  return ze(
    n,
    t ? {
      add: Za("add"),
      set: Za("set"),
      delete: Za("delete"),
      clear: Za("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Wt(this), u = Xa(s), f = /* @__PURE__ */ Wt(a), g = !e && !/* @__PURE__ */ pn(a) && !/* @__PURE__ */ cr(a) ? f : a;
        return u.has.call(s, g) || jn(a, g) && u.has.call(s, a) || jn(f, g) && u.has.call(s, f) || (s.add(g), ar(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ pn(s) && !/* @__PURE__ */ cr(s) && (s = /* @__PURE__ */ Wt(s));
        const u = /* @__PURE__ */ Wt(this), { has: f, get: g } = Xa(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Wt(a), y = f.call(u, a));
        const _ = g.call(u, a);
        return u.set(a, s), y ? jn(s, _) && ar(u, "set", a, s) : ar(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Wt(this), { has: u, get: f } = Xa(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ Wt(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && ar(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Wt(this), s = a.size !== 0, u = a.clear();
        return s && ar(
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
    n[a] = p0(a, t, e);
  }), n;
}
function Uc(t, e) {
  const n = g0(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    qt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const m0 = {
  get: /* @__PURE__ */ Uc(!1, !1)
}, y0 = {
  get: /* @__PURE__ */ Uc(!1, !0)
}, b0 = {
  get: /* @__PURE__ */ Uc(!0, !1)
};
const hd = /* @__PURE__ */ new WeakMap(), pd = /* @__PURE__ */ new WeakMap(), gd = /* @__PURE__ */ new WeakMap(), v0 = /* @__PURE__ */ new WeakMap();
function _0(t) {
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
function w0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : _0(Gg(t));
}
// @__NO_SIDE_EFFECTS__
function Bc(t) {
  return /* @__PURE__ */ cr(t) ? t : Gc(
    t,
    !1,
    f0,
    m0,
    hd
  );
}
// @__NO_SIDE_EFFECTS__
function x0(t) {
  return Gc(
    t,
    !1,
    h0,
    y0,
    pd
  );
}
// @__NO_SIDE_EFFECTS__
function mc(t) {
  return Gc(
    t,
    !0,
    d0,
    b0,
    gd
  );
}
function Gc(t, e, n, r, a) {
  if (!Jt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = w0(t);
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
function Fr(t) {
  return /* @__PURE__ */ cr(t) ? /* @__PURE__ */ Fr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Kc(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Wt(e) : t;
}
function S0(t) {
  return !qt(t, "__v_skip") && Object.isExtensible(t) && Zf(t, "__v_skip", !0), t;
}
const Mn = (t) => Jt(t) ? /* @__PURE__ */ Bc(t) : t, xi = (t) => Jt(t) ? /* @__PURE__ */ mc(t) : t;
// @__NO_SIDE_EFFECTS__
function Ve(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N0(t) {
  return M0(t, !1);
}
function M0(t, e) {
  return /* @__PURE__ */ Ve(t) ? t : new k0(t, e);
}
class k0 {
  constructor(e, n) {
    this.dep = new jc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Wt(e), this._value = n ? e : Mn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ pn(e) || /* @__PURE__ */ cr(e);
    e = r ? e : /* @__PURE__ */ Wt(e), jn(e, n) && (this._rawValue = e, this._value = r ? e : Mn(e), this.dep.trigger());
  }
}
function Wc(t) {
  return /* @__PURE__ */ Ve(t) ? t.value : t;
}
const P0 = {
  get: (t, e, n) => e === "__v_raw" ? t : Wc(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ Ve(a) && !/* @__PURE__ */ Ve(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function md(t) {
  return /* @__PURE__ */ Fr(t) ? t : new Proxy(t, P0);
}
class A0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new jc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return id(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return sd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function C0(t, e, n = !1) {
  let r, a;
  return $t(t) ? r = t : (r = t.get, a = t.set), new A0(r, a, n);
}
const Ja = {}, Eo = /* @__PURE__ */ new WeakMap();
let Dr;
function I0(t, e = !1, n = Dr) {
  if (n) {
    let r = Eo.get(n);
    r || Eo.set(n, r = []), r.push(t);
  }
}
function E0(t, e, n = re) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (T) => a ? T : /* @__PURE__ */ pn(T) || a === !1 || a === 0 ? xr(T, 1) : xr(T);
  let _, p, M, P, E = !1, I = !1;
  if (/* @__PURE__ */ Ve(t) ? (p = () => t.value, E = /* @__PURE__ */ pn(t)) : /* @__PURE__ */ Fr(t) ? (p = () => y(t), E = !0) : Lt(t) ? (I = !0, E = t.some((T) => /* @__PURE__ */ Fr(T) || /* @__PURE__ */ pn(T)), p = () => t.map((T) => {
    if (/* @__PURE__ */ Ve(T))
      return T.value;
    if (/* @__PURE__ */ Fr(T))
      return y(T);
    if ($t(T))
      return g ? g(T, 2) : T();
  })) : $t(t) ? e ? p = g ? () => g(t, 2) : t : p = () => {
    if (M) {
      or();
      try {
        M();
      } finally {
        sr();
      }
    }
    const T = Dr;
    Dr = _;
    try {
      return g ? g(t, 3, [P]) : t(P);
    } finally {
      Dr = T;
    }
  } : p = Gn, e && a) {
    const T = p, q = a === !0 ? 1 / 0 : a;
    p = () => xr(T(), q);
  }
  const A = r0(), O = () => {
    _.stop(), A && A.active && Oc(A.effects, _);
  };
  if (s && e) {
    const T = e;
    e = (...q) => {
      T(...q), O();
    };
  }
  let R = I ? new Array(t.length).fill(Ja) : Ja;
  const C = (T) => {
    if (!(!(_.flags & 1) || !_.dirty && !T))
      if (e) {
        const q = _.run();
        if (a || E || (I ? q.some((L, dt) => jn(L, R[dt])) : jn(q, R))) {
          M && M();
          const L = Dr;
          Dr = _;
          try {
            const dt = [
              q,
              // pass undefined as the old value when it's changed for the first time
              R === Ja ? void 0 : I && R[0] === Ja ? [] : R,
              P
            ];
            R = q, g ? g(e, 3, dt) : (
              // @ts-expect-error
              e(...dt)
            );
          } finally {
            Dr = L;
          }
        }
      } else
        _.run();
  };
  return f && f(C), _ = new nd(p), _.scheduler = u ? () => u(C, !1) : C, P = (T) => I0(T, !1, _), M = _.onStop = () => {
    const T = Eo.get(_);
    if (T) {
      if (g)
        g(T, 4);
      else
        for (const q of T) q();
      Eo.delete(_);
    }
  }, e ? r ? C(!0) : R = _.run() : u ? u(C.bind(null, !0), !0) : _.run(), O.pause = _.pause.bind(_), O.resume = _.resume.bind(_), O.stop = O, O;
}
function xr(t, e = 1 / 0, n) {
  if (e <= 0 || !Jt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Ve(t))
    xr(t.value, e, n);
  else if (Lt(t))
    for (let r = 0; r < t.length; r++)
      xr(t[r], e, n);
  else if (Wf(t) || gi(t))
    t.forEach((r) => {
      xr(r, e, n);
    });
  else if (Xf(t)) {
    for (const r in t)
      xr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && xr(t[r], e, n);
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
    os(a, e, n);
  }
}
function Wn(t, e, n, r) {
  if ($t(t)) {
    const a = xa(t, e, n, r);
    return a && qf(a) && a.catch((s) => {
      os(s, e, n);
    }), a;
  }
  if (Lt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Wn(t[s], e, n, r));
    return a;
  }
}
function os(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || re;
  if (e) {
    let f = e.parent;
    const g = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let p = 0; p < _.length; p++)
          if (_[p](t, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      or(), xa(s, null, 10, [
        t,
        g,
        y
      ]), sr();
      return;
    }
  }
  D0(t, n, a, r, u);
}
function D0(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Ye = [];
let $n = -1;
const mi = [];
let wr = null, ci = 0;
const yd = /* @__PURE__ */ Promise.resolve();
let Do = null;
function bd(t) {
  const e = Do || yd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function T0(t) {
  let e = $n + 1, n = Ye.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Ye[r], s = ma(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function qc(t) {
  if (!(t.flags & 1)) {
    const e = ma(t), n = Ye[Ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ma(n) ? Ye.push(t) : Ye.splice(T0(e), 0, t), t.flags |= 1, vd();
  }
}
function vd() {
  Do || (Do = yd.then(wd));
}
function R0(t) {
  Lt(t) ? mi.push(...t) : wr && t.id === -1 ? wr.splice(ci + 1, 0, t) : t.flags & 1 || (mi.push(t), t.flags |= 1), vd();
}
function Pu(t, e, n = $n + 1) {
  for (; n < Ye.length; n++) {
    const r = Ye[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Ye.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function _d(t) {
  if (mi.length) {
    const e = [...new Set(mi)].sort(
      (n, r) => ma(n) - ma(r)
    );
    if (mi.length = 0, wr) {
      wr.push(...e);
      return;
    }
    for (wr = e, ci = 0; ci < wr.length; ci++) {
      const n = wr[ci];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    wr = null, ci = 0;
  }
}
const ma = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function wd(t) {
  try {
    for ($n = 0; $n < Ye.length; $n++) {
      const e = Ye[$n];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xa(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; $n < Ye.length; $n++) {
      const e = Ye[$n];
      e && (e.flags &= -2);
    }
    $n = -1, Ye.length = 0, _d(), Do = null, (Ye.length || mi.length) && wd();
  }
}
let Sn = null, xd = null;
function To(t) {
  const e = Sn;
  return Sn = t, xd = t && t.type.__scopeId || null, e;
}
function L0(t, e = Sn, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Vu(-1);
    const s = To(e);
    let u;
    try {
      u = t(...a);
    } finally {
      To(s), r._d && Vu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ar(t, e, n, r) {
  const a = t.dirs, s = e && e.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[r];
    g && (or(), Wn(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), sr());
  }
}
function O0(t, e) {
  if ($e) {
    let n = $e.provides;
    const r = $e.parent && $e.parent.provides;
    r === n && (n = $e.provides = Object.create(r)), n[t] = e;
  }
}
function bo(t, e, n = !1) {
  const r = Lm();
  if (r || bi) {
    let a = bi ? bi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && $t(e) ? e.call(r && r.proxy) : e;
  }
}
const F0 = /* @__PURE__ */ Symbol.for("v-scx"), $0 = () => bo(F0);
function vo(t, e, n) {
  return Sd(t, e, n);
}
function Sd(t, e, n = re) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = ze({}, n), g = e && r || !e && s !== "post";
  let y;
  if (ba) {
    if (s === "sync") {
      const P = $0();
      y = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = Gn, P.resume = Gn, P.pause = Gn, P;
    }
  }
  const _ = $e;
  f.call = (P, E, I) => Wn(P, _, E, I);
  let p = !1;
  s === "post" ? f.scheduler = (P) => {
    tn(P, _ && _.suspense);
  } : s !== "sync" && (p = !0, f.scheduler = (P, E) => {
    E ? P() : qc(P);
  }), f.augmentJob = (P) => {
    e && (P.flags |= 4), p && (P.flags |= 2, _ && (P.id = _.uid, P.i = _));
  };
  const M = E0(t, e, f);
  return ba && (y ? y.push(M) : g && M()), M;
}
function V0(t, e, n) {
  const r = this.proxy, a = we(t) ? t.includes(".") ? Nd(r, t) : () => r[t] : t.bind(r, r);
  let s;
  $t(e) ? s = e : (s = e.handler, n = e);
  const u = Sa(this), f = Sd(a, s.bind(r), n);
  return u(), f;
}
function Nd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const z0 = /* @__PURE__ */ Symbol("_vte"), H0 = (t) => t.__isTeleport, j0 = /* @__PURE__ */ Symbol("_leaveCb");
function Yc(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Yc(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Md(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Au(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Ro = /* @__PURE__ */ new WeakMap();
function ia(t, e, n, r, a = !1) {
  if (Lt(t)) {
    t.forEach(
      (I, A) => ia(
        I,
        e && (Lt(e) ? e[A] : e),
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
  const s = r.shapeFlag & 4 ? Qc(r.component) : r.el, u = a ? null : s, { i: f, r: g } = t, y = e && e.r, _ = f.refs === re ? f.refs = {} : f.refs, p = f.setupState, M = /* @__PURE__ */ Wt(p), P = p === re ? Kf : (I) => Au(_, I) ? !1 : qt(M, I), E = (I, A) => !(A && Au(_, A));
  if (y != null && y !== g) {
    if (Cu(e), we(y))
      _[y] = null, P(y) && (p[y] = null);
    else if (/* @__PURE__ */ Ve(y)) {
      const I = e;
      E(y, I.k) && (y.value = null), I.k && (_[I.k] = null);
    }
  }
  if ($t(g))
    xa(g, f, 12, [u, _]);
  else {
    const I = we(g), A = /* @__PURE__ */ Ve(g);
    if (I || A) {
      const O = () => {
        if (t.f) {
          const R = I ? P(g) ? p[g] : _[g] : E() || !t.k ? g.value : _[t.k];
          if (a)
            Lt(R) && Oc(R, s);
          else if (Lt(R))
            R.includes(s) || R.push(s);
          else if (I)
            _[g] = [s], P(g) && (p[g] = _[g]);
          else {
            const C = [s];
            E(g, t.k) && (g.value = C), t.k && (_[t.k] = C);
          }
        } else I ? (_[g] = u, P(g) && (p[g] = u)) : A && (E(g, t.k) && (g.value = u), t.k && (_[t.k] = u));
      };
      if (u) {
        const R = () => {
          O(), Ro.delete(t);
        };
        R.id = -1, Ro.set(t, R), tn(R, n);
      } else
        Cu(t), O();
    }
  }
}
function Cu(t) {
  const e = Ro.get(t);
  e && (e.flags |= 8, Ro.delete(t));
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const aa = (t) => !!t.type.__asyncLoader, kd = (t) => t.type.__isKeepAlive;
function U0(t, e) {
  Pd(t, "a", e);
}
function B0(t, e) {
  Pd(t, "da", e);
}
function Pd(t, e, n = $e) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (ss(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      kd(a.parent.vnode) && G0(r, e, n, a), a = a.parent;
  }
}
function G0(t, e, n, r) {
  const a = ss(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Id(() => {
    Oc(r[e], a);
  }, n);
}
function ss(t, e, n = $e, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      or();
      const f = Sa(n), g = Wn(e, n, t, u);
      return f(), sr(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const lr = (t) => (e, n = $e) => {
  (!ba || t === "sp") && ss(t, (...r) => e(...r), n);
}, K0 = lr("bm"), Ad = lr("m"), W0 = lr(
  "bu"
), q0 = lr("u"), Cd = lr(
  "bum"
), Id = lr("um"), Y0 = lr(
  "sp"
), X0 = lr("rtg"), Z0 = lr("rtc");
function J0(t, e = $e) {
  ss("ec", t, e);
}
const Q0 = "components", Ed = /* @__PURE__ */ Symbol.for("v-ndc");
function tm(t) {
  return we(t) ? em(Q0, t, !1) || t : t || Ed;
}
function em(t, e, n = !0, r = !1) {
  const a = Sn || $e;
  if (a) {
    const s = a.type;
    {
      const f = zm(
        s,
        !1
      );
      if (f && (f === e || f === Je(e) || f === es(Je(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Iu(a[t] || s[t], e) || // global registration
      Iu(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function Iu(t, e) {
  return t && (t[e] || t[Je(e)] || t[es(Je(e))]);
}
function yi(t, e, n, r) {
  let a;
  const s = n, u = Lt(t);
  if (u || we(t)) {
    const f = u && /* @__PURE__ */ Fr(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ pn(t), y = /* @__PURE__ */ cr(t), t = as(t)), a = new Array(t.length);
    for (let _ = 0, p = t.length; _ < p; _++)
      a[_] = e(
        g ? y ? xi(Mn(t[_])) : Mn(t[_]) : t[_],
        _,
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
        const _ = f[g];
        a[g] = e(t[_], _, g, s);
      }
    }
  else
    a = [];
  return a;
}
const yc = (t) => t ? th(t) ? Qc(t) : yc(t.parent) : null, oa = (
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
    $parent: (t) => yc(t.parent),
    $root: (t) => yc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Td(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      qc(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = bd.bind(t.proxy)),
    $watch: (t) => V0.bind(t)
  })
), Xs = (t, e) => t !== re && !t.__isScriptSetup && qt(t, e), nm = {
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
        if (Xs(r, e))
          return u[e] = 1, r[e];
        if (a !== re && qt(a, e))
          return u[e] = 2, a[e];
        if (qt(s, e))
          return u[e] = 3, s[e];
        if (n !== re && qt(n, e))
          return u[e] = 4, n[e];
        bc && (u[e] = 0);
      }
    }
    const y = oa[e];
    let _, p;
    if (y)
      return e === "$attrs" && Oe(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[e])
    )
      return _;
    if (n !== re && qt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      p = g.config.globalProperties, qt(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return Xs(a, e) ? (a[e] = n, !0) : r !== re && qt(r, e) ? (r[e] = n, !0) : qt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== re && f[0] !== "$" && qt(t, f) || Xs(e, f) || qt(s, f) || qt(r, f) || qt(oa, f) || qt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : qt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Eu(t) {
  return Lt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let bc = !0;
function rm(t) {
  const e = Td(t), n = t.proxy, r = t.ctx;
  bc = !1, e.beforeCreate && Du(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: _,
    beforeMount: p,
    mounted: M,
    beforeUpdate: P,
    updated: E,
    activated: I,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: R,
    destroyed: C,
    unmounted: T,
    render: q,
    renderTracked: L,
    renderTriggered: dt,
    errorCaptured: J,
    serverPrefetch: Ct,
    // public API
    expose: z,
    inheritAttrs: ct,
    // assets
    components: rt,
    directives: wt,
    filters: yt
  } = e;
  if (y && im(y, r, null), u)
    for (const lt in u) {
      const Y = u[lt];
      $t(Y) && (r[lt] = Y.bind(n));
    }
  if (a) {
    const lt = a.call(n, n);
    Jt(lt) && (t.data = /* @__PURE__ */ Bc(lt));
  }
  if (bc = !0, s)
    for (const lt in s) {
      const Y = s[lt], ut = $t(Y) ? Y.bind(n, n) : $t(Y.get) ? Y.get.bind(n, n) : Gn, Nt = !$t(Y) && $t(Y.set) ? Y.set.bind(n) : Gn, Et = vi({
        get: ut,
        set: Nt
      });
      Object.defineProperty(r, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Mt) => Et.value = Mt
      });
    }
  if (f)
    for (const lt in f)
      Dd(f[lt], r, n, lt);
  if (g) {
    const lt = $t(g) ? g.call(n) : g;
    Reflect.ownKeys(lt).forEach((Y) => {
      O0(Y, lt[Y]);
    });
  }
  _ && Du(_, t, "c");
  function ot(lt, Y) {
    Lt(Y) ? Y.forEach((ut) => lt(ut.bind(n))) : Y && lt(Y.bind(n));
  }
  if (ot(K0, p), ot(Ad, M), ot(W0, P), ot(q0, E), ot(U0, I), ot(B0, A), ot(J0, J), ot(Z0, L), ot(X0, dt), ot(Cd, R), ot(Id, T), ot(Y0, Ct), Lt(z))
    if (z.length) {
      const lt = t.exposed || (t.exposed = {});
      z.forEach((Y) => {
        Object.defineProperty(lt, Y, {
          get: () => n[Y],
          set: (ut) => n[Y] = ut,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  q && t.render === Gn && (t.render = q), ct != null && (t.inheritAttrs = ct), rt && (t.components = rt), wt && (t.directives = wt), Ct && Md(t);
}
function im(t, e, n = Gn) {
  Lt(t) && (t = vc(t));
  for (const r in t) {
    const a = t[r];
    let s;
    Jt(a) ? "default" in a ? s = bo(
      a.from || r,
      a.default,
      !0
    ) : s = bo(a.from || r) : s = bo(a), /* @__PURE__ */ Ve(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[r] = s;
  }
}
function Du(t, e, n) {
  Wn(
    Lt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Dd(t, e, n, r) {
  let a = r.includes(".") ? Nd(n, r) : () => n[r];
  if (we(t)) {
    const s = e[t];
    $t(s) && vo(a, s);
  } else if ($t(t))
    vo(a, t.bind(n));
  else if (Jt(t))
    if (Lt(t))
      t.forEach((s) => Dd(s, e, n, r));
    else {
      const s = $t(t.handler) ? t.handler.bind(n) : e[t.handler];
      $t(s) && vo(a, s, t);
    }
}
function Td(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = e : (g = {}, a.length && a.forEach(
    (y) => Lo(g, y, u, !0)
  ), Lo(g, e, u)), Jt(e) && s.set(e, g), g;
}
function Lo(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && Lo(t, s, n, !0), a && a.forEach(
    (u) => Lo(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = am[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const am = {
  data: Tu,
  props: Ru,
  emits: Ru,
  // objects
  methods: Xi,
  computed: Xi,
  // lifecycle
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  // assets
  components: Xi,
  directives: Xi,
  // watch
  watch: sm,
  // provide / inject
  provide: Tu,
  inject: om
};
function Tu(t, e) {
  return e ? t ? function() {
    return ze(
      $t(t) ? t.call(this, this) : t,
      $t(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function om(t, e) {
  return Xi(vc(t), vc(e));
}
function vc(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ke(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Xi(t, e) {
  return t ? ze(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Ru(t, e) {
  return t ? Lt(t) && Lt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ze(
    /* @__PURE__ */ Object.create(null),
    Eu(t),
    Eu(e ?? {})
  ) : e;
}
function sm(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = ze(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Ke(t[r], e[r]);
  return n;
}
function Rd() {
  return {
    app: null,
    config: {
      isNativeTag: Kf,
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
let cm = 0;
function lm(t, e) {
  return function(r, a = null) {
    $t(r) || (r = ze({}, r)), a != null && !Jt(a) && (a = null);
    const s = Rd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: cm++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: jm,
      get config() {
        return s.config;
      },
      set config(_) {
      },
      use(_, ...p) {
        return u.has(_) || (_ && $t(_.install) ? (u.add(_), _.install(y, ...p)) : $t(_) && (u.add(_), _(y, ...p))), y;
      },
      mixin(_) {
        return s.mixins.includes(_) || s.mixins.push(_), y;
      },
      component(_, p) {
        return p ? (s.components[_] = p, y) : s.components[_];
      },
      directive(_, p) {
        return p ? (s.directives[_] = p, y) : s.directives[_];
      },
      mount(_, p, M) {
        if (!g) {
          const P = y._ceVNode || Ze(r, a);
          return P.appContext = s, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(P, _, M), g = !0, y._container = _, _.__vue_app__ = y, Qc(P.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        g && (Wn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(_, p) {
        return s.provides[_] = p, y;
      },
      runWithContext(_) {
        const p = bi;
        bi = y;
        try {
          return _();
        } finally {
          bi = p;
        }
      }
    };
    return y;
  };
}
let bi = null;
const um = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Je(e)}Modifiers`] || t[`${Ur(e)}Modifiers`];
function fm(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || re;
  let a = n;
  const s = e.startsWith("update:"), u = s && um(r, e.slice(7));
  u && (u.trim && (a = n.map((_) => we(_) ? _.trim() : _)), u.number && (a = n.map(qg)));
  let f, g = r[f = Bs(e)] || // also try camelCase event handler (#2249)
  r[f = Bs(Je(e))];
  !g && s && (g = r[f = Bs(Ur(e))]), g && Wn(
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
    t.emitted[f] = !0, Wn(
      y,
      t,
      6,
      a
    );
  }
}
const dm = /* @__PURE__ */ new WeakMap();
function Ld(t, e, n = !1) {
  const r = n ? dm : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!$t(t)) {
    const g = (y) => {
      const _ = Ld(y, e, !0);
      _ && (f = !0, ze(u, _));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (Jt(t) && r.set(t, null), null) : (Lt(s) ? s.forEach((g) => u[g] = null) : ze(u, s), Jt(t) && r.set(t, u), u);
}
function cs(t, e) {
  return !t || !Jo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), qt(t, e[0].toLowerCase() + e.slice(1)) || qt(t, Ur(e)) || qt(t, e));
}
function Lu(t) {
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
    renderCache: _,
    props: p,
    data: M,
    setupState: P,
    ctx: E,
    inheritAttrs: I
  } = t, A = To(t);
  let O, R;
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, q = T;
      O = Hn(
        y.call(
          q,
          T,
          _,
          p,
          P,
          M,
          E
        )
      ), R = f;
    } else {
      const T = e;
      O = Hn(
        T.length > 1 ? T(
          p,
          { attrs: f, slots: u, emit: g }
        ) : T(
          p,
          null
        )
      ), R = e.props ? f : hm(f);
    }
  } catch (T) {
    sa.length = 0, os(T, t, 1), O = Ze(Sr);
  }
  let C = O;
  if (R && I !== !1) {
    const T = Object.keys(R), { shapeFlag: q } = C;
    T.length && q & 7 && (s && T.some(Qo) && (R = pm(
      R,
      s
    )), C = Si(C, R, !1, !0));
  }
  return n.dirs && (C = Si(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Yc(C, n.transition), O = C, To(A), O;
}
const hm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Jo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, pm = (t, e) => {
  const n = {};
  for (const r in t)
    (!Qo(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function gm(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? Ou(r, u, y) : !!u;
    if (g & 8) {
      const _ = e.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        const M = _[p];
        if (Od(u, r, M) && !cs(y, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Ou(r, u, y) : !0 : !!u;
  return !1;
}
function Ou(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (Od(e, t, s) && !cs(n, s))
      return !0;
  }
  return !1;
}
function Od(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && Jt(r) && Jt(a) ? !$c(r, a) : r !== a;
}
function mm({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Fd = {}, $d = () => Object.create(Fd), Vd = (t) => Object.getPrototypeOf(t) === Fd;
function ym(t, e, n, r = !1) {
  const a = {}, s = $d();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), zd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ x0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function bm(t, e, n, r) {
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
      const _ = t.vnode.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        let M = _[p];
        if (cs(t.emitsOptions, M))
          continue;
        const P = e[M];
        if (g)
          if (qt(s, M))
            P !== s[M] && (s[M] = P, y = !0);
          else {
            const E = Je(M);
            a[E] = _c(
              g,
              f,
              E,
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
    zd(t, e, a, s) && (y = !0);
    let _;
    for (const p in f)
      (!e || // for camelCase
      !qt(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Ur(p)) === p || !qt(e, _))) && (g ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[p] = _c(
        g,
        f,
        p,
        void 0,
        t,
        !0
      )) : delete a[p]);
    if (s !== f)
      for (const p in s)
        (!e || !qt(e, p)) && (delete s[p], y = !0);
  }
  y && ar(t.attrs, "set", "");
}
function zd(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (ea(g))
        continue;
      const y = e[g];
      let _;
      a && qt(a, _ = Je(g)) ? !s || !s.includes(_) ? n[_] = y : (f || (f = {}))[_] = y : cs(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ Wt(n), y = f || re;
    for (let _ = 0; _ < s.length; _++) {
      const p = s[_];
      n[p] = _c(
        a,
        g,
        p,
        y[p],
        t,
        !qt(y, p)
      );
    }
  }
  return u;
}
function _c(t, e, n, r, a, s) {
  const u = t[n];
  if (u != null) {
    const f = qt(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && $t(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const _ = Sa(a);
          r = y[n] = g.call(
            null,
            e
          ), _();
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
    ] && (r === "" || r === Ur(n)) && (r = !0));
  }
  return r;
}
const vm = /* @__PURE__ */ new WeakMap();
function Hd(t, e, n = !1) {
  const r = n ? vm : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!$t(t)) {
    const _ = (p) => {
      g = !0;
      const [M, P] = Hd(p, e, !0);
      ze(u, M), P && f.push(...P);
    };
    !n && e.mixins.length && e.mixins.forEach(_), t.extends && _(t.extends), t.mixins && t.mixins.forEach(_);
  }
  if (!s && !g)
    return Jt(t) && r.set(t, pi), pi;
  if (Lt(s))
    for (let _ = 0; _ < s.length; _++) {
      const p = Je(s[_]);
      Fu(p) && (u[p] = re);
    }
  else if (s)
    for (const _ in s) {
      const p = Je(_);
      if (Fu(p)) {
        const M = s[_], P = u[p] = Lt(M) || $t(M) ? { type: M } : ze({}, M), E = P.type;
        let I = !1, A = !0;
        if (Lt(E))
          for (let O = 0; O < E.length; ++O) {
            const R = E[O], C = $t(R) && R.name;
            if (C === "Boolean") {
              I = !0;
              break;
            } else C === "String" && (A = !1);
          }
        else
          I = $t(E) && E.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = I, P[
          1
          /* shouldCastTrue */
        ] = A, (I || qt(P, "default")) && f.push(p);
      }
    }
  const y = [u, f];
  return Jt(t) && r.set(t, y), y;
}
function Fu(t) {
  return t[0] !== "$" && !ea(t);
}
const Xc = (t) => t === "_" || t === "_ctx" || t === "$stable", Zc = (t) => Lt(t) ? t.map(Hn) : [Hn(t)], _m = (t, e, n) => {
  if (e._n)
    return e;
  const r = L0((...a) => Zc(e(...a)), n);
  return r._c = !1, r;
}, jd = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (Xc(a)) continue;
    const s = t[a];
    if ($t(s))
      e[a] = _m(a, s, r);
    else if (s != null) {
      const u = Zc(s);
      e[a] = () => u;
    }
  }
}, Ud = (t, e) => {
  const n = Zc(e);
  t.slots.default = () => n;
}, Bd = (t, e, n) => {
  for (const r in e)
    (n || !Xc(r)) && (t[r] = e[r]);
}, wm = (t, e, n) => {
  const r = t.slots = $d();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (Bd(r, e, n), n && Zf(r, "_", a, !0)) : jd(e, r);
  } else e && Ud(t, e);
}, xm = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = re;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : Bd(a, e, n) : (s = !e.$stable, jd(e, a)), u = e;
  } else e && (Ud(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !Xc(f) && u[f] == null && delete a[f];
}, tn = Pm;
function Sm(t) {
  return Nm(t);
}
function Nm(t, e) {
  const n = ns();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: _,
    parentNode: p,
    nextSibling: M,
    setScopeId: P = Gn,
    insertStaticContent: E
  } = t, I = (x, D, $, G = null, K = null, U = null, et = void 0, st = null, it = !!D.dynamicChildren) => {
    if (x === D)
      return;
    x && !Bi(x, D) && (G = je(x), Mt(x, K, U, !0), x = null), D.patchFlag === -2 && (it = !1, D.dynamicChildren = null);
    const { type: Q, ref: St, shapeFlag: ft } = D;
    switch (Q) {
      case ls:
        A(x, D, $, G);
        break;
      case Sr:
        O(x, D, $, G);
        break;
      case _o:
        x == null && R(D, $, G, et);
        break;
      case Fe:
        rt(
          x,
          D,
          $,
          G,
          K,
          U,
          et,
          st,
          it
        );
        break;
      default:
        ft & 1 ? q(
          x,
          D,
          $,
          G,
          K,
          U,
          et,
          st,
          it
        ) : ft & 6 ? wt(
          x,
          D,
          $,
          G,
          K,
          U,
          et,
          st,
          it
        ) : (ft & 64 || ft & 128) && Q.process(
          x,
          D,
          $,
          G,
          K,
          U,
          et,
          st,
          it,
          rn
        );
    }
    St != null && K ? ia(St, x && x.ref, U, D || x, !D) : St == null && x && x.ref != null && ia(x.ref, null, U, x, !0);
  }, A = (x, D, $, G) => {
    if (x == null)
      r(
        D.el = f(D.children),
        $,
        G
      );
    else {
      const K = D.el = x.el;
      D.children !== x.children && y(K, D.children);
    }
  }, O = (x, D, $, G) => {
    x == null ? r(
      D.el = g(D.children || ""),
      $,
      G
    ) : D.el = x.el;
  }, R = (x, D, $, G) => {
    [x.el, x.anchor] = E(
      x.children,
      D,
      $,
      G,
      x.el,
      x.anchor
    );
  }, C = ({ el: x, anchor: D }, $, G) => {
    let K;
    for (; x && x !== D; )
      K = M(x), r(x, $, G), x = K;
    r(D, $, G);
  }, T = ({ el: x, anchor: D }) => {
    let $;
    for (; x && x !== D; )
      $ = M(x), a(x), x = $;
    a(D);
  }, q = (x, D, $, G, K, U, et, st, it) => {
    if (D.type === "svg" ? et = "svg" : D.type === "math" && (et = "mathml"), x == null)
      L(
        D,
        $,
        G,
        K,
        U,
        et,
        st,
        it
      );
    else {
      const Q = x.el && x.el._isVueCE ? x.el : null;
      try {
        Q && Q._beginPatch(), Ct(
          x,
          D,
          K,
          U,
          et,
          st,
          it
        );
      } finally {
        Q && Q._endPatch();
      }
    }
  }, L = (x, D, $, G, K, U, et, st) => {
    let it, Q;
    const { props: St, shapeFlag: ft, transition: xt, dirs: h } = x;
    if (it = x.el = u(
      x.type,
      U,
      St && St.is,
      St
    ), ft & 8 ? _(it, x.children) : ft & 16 && J(
      x.children,
      it,
      null,
      G,
      K,
      Zs(x, U),
      et,
      st
    ), h && Ar(x, null, G, "created"), dt(it, x, x.scopeId, et, G), St) {
      for (const zt in St)
        zt !== "value" && !ea(zt) && s(it, zt, null, St[zt], U, G);
      "value" in St && s(it, "value", null, St.value, U), (Q = St.onVnodeBeforeMount) && Ln(Q, G, x);
    }
    h && Ar(x, null, G, "beforeMount");
    const ht = Mm(K, xt);
    ht && xt.beforeEnter(it), r(it, D, $), ((Q = St && St.onVnodeMounted) || ht || h) && tn(() => {
      try {
        Q && Ln(Q, G, x), ht && xt.enter(it), h && Ar(x, null, G, "mounted");
      } finally {
      }
    }, K);
  }, dt = (x, D, $, G, K) => {
    if ($ && P(x, $), G)
      for (let U = 0; U < G.length; U++)
        P(x, G[U]);
    if (K) {
      let U = K.subTree;
      if (D === U || qd(U.type) && (U.ssContent === D || U.ssFallback === D)) {
        const et = K.vnode;
        dt(
          x,
          et,
          et.scopeId,
          et.slotScopeIds,
          K.parent
        );
      }
    }
  }, J = (x, D, $, G, K, U, et, st, it = 0) => {
    for (let Q = it; Q < x.length; Q++) {
      const St = x[Q] = st ? ir(x[Q]) : Hn(x[Q]);
      I(
        null,
        St,
        D,
        $,
        G,
        K,
        U,
        et,
        st
      );
    }
  }, Ct = (x, D, $, G, K, U, et) => {
    const st = D.el = x.el;
    let { patchFlag: it, dynamicChildren: Q, dirs: St } = D;
    it |= x.patchFlag & 16;
    const ft = x.props || re, xt = D.props || re;
    let h;
    if ($ && Cr($, !1), (h = xt.onVnodeBeforeUpdate) && Ln(h, $, D, x), St && Ar(D, x, $, "beforeUpdate"), $ && Cr($, !0), (ft.innerHTML && xt.innerHTML == null || ft.textContent && xt.textContent == null) && _(st, ""), Q ? z(
      x.dynamicChildren,
      Q,
      st,
      $,
      G,
      Zs(D, K),
      U
    ) : et || Y(
      x,
      D,
      st,
      null,
      $,
      G,
      Zs(D, K),
      U,
      !1
    ), it > 0) {
      if (it & 16)
        ct(st, ft, xt, $, K);
      else if (it & 2 && ft.class !== xt.class && s(st, "class", null, xt.class, K), it & 4 && s(st, "style", ft.style, xt.style, K), it & 8) {
        const ht = D.dynamicProps;
        for (let zt = 0; zt < ht.length; zt++) {
          const Dt = ht[zt], ie = ft[Dt], kt = xt[Dt];
          (kt !== ie || Dt === "value") && s(st, Dt, ie, kt, K, $);
        }
      }
      it & 1 && x.children !== D.children && _(st, D.children);
    } else !et && Q == null && ct(st, ft, xt, $, K);
    ((h = xt.onVnodeUpdated) || St) && tn(() => {
      h && Ln(h, $, D, x), St && Ar(D, x, $, "updated");
    }, G);
  }, z = (x, D, $, G, K, U, et) => {
    for (let st = 0; st < D.length; st++) {
      const it = x[st], Q = D[st], St = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        it.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (it.type === Fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bi(it, Q) || // - In the case of a component, it could contain anything.
        it.shapeFlag & 198) ? p(it.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      I(
        it,
        Q,
        St,
        null,
        G,
        K,
        U,
        et,
        !0
      );
    }
  }, ct = (x, D, $, G, K) => {
    if (D !== $) {
      if (D !== re)
        for (const U in D)
          !ea(U) && !(U in $) && s(
            x,
            U,
            D[U],
            null,
            K,
            G
          );
      for (const U in $) {
        if (ea(U)) continue;
        const et = $[U], st = D[U];
        et !== st && U !== "value" && s(x, U, st, et, K, G);
      }
      "value" in $ && s(x, "value", D.value, $.value, K);
    }
  }, rt = (x, D, $, G, K, U, et, st, it) => {
    const Q = D.el = x ? x.el : f(""), St = D.anchor = x ? x.anchor : f("");
    let { patchFlag: ft, dynamicChildren: xt, slotScopeIds: h } = D;
    h && (st = st ? st.concat(h) : h), x == null ? (r(Q, $, G), r(St, $, G), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      $,
      St,
      K,
      U,
      et,
      st,
      it
    )) : ft > 0 && ft & 64 && xt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren && x.dynamicChildren.length === xt.length ? (z(
      x.dynamicChildren,
      xt,
      $,
      K,
      U,
      et,
      st
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || K && D === K.subTree) && Gd(
      x,
      D,
      !0
      /* shallow */
    )) : Y(
      x,
      D,
      $,
      St,
      K,
      U,
      et,
      st,
      it
    );
  }, wt = (x, D, $, G, K, U, et, st, it) => {
    D.slotScopeIds = st, x == null ? D.shapeFlag & 512 ? K.ctx.activate(
      D,
      $,
      G,
      et,
      it
    ) : yt(
      D,
      $,
      G,
      K,
      U,
      et,
      it
    ) : Z(x, D, it);
  }, yt = (x, D, $, G, K, U, et) => {
    const st = x.component = Rm(
      x,
      G,
      K
    );
    if (kd(x) && (st.ctx.renderer = rn), Om(st, !1, et), st.asyncDep) {
      if (K && K.registerDep(st, ot, et), !x.el) {
        const it = st.subTree = Ze(Sr);
        O(null, it, D, $), x.placeholder = it.el;
      }
    } else
      ot(
        st,
        x,
        D,
        $,
        K,
        U,
        et
      );
  }, Z = (x, D, $) => {
    const G = D.component = x.component;
    if (gm(x, D, $))
      if (G.asyncDep && !G.asyncResolved) {
        lt(G, D, $);
        return;
      } else
        G.next = D, G.update();
    else
      D.el = x.el, G.vnode = D;
  }, ot = (x, D, $, G, K, U, et) => {
    const st = () => {
      if (x.isMounted) {
        let { next: ft, bu: xt, u: h, parent: ht, vnode: zt } = x;
        {
          const ye = Kd(x);
          if (ye) {
            ft && (ft.el = zt.el, lt(x, ft, et)), ye.asyncDep.then(() => {
              tn(() => {
                x.isUnmounted || Q();
              }, K);
            });
            return;
          }
        }
        let Dt = ft, ie;
        Cr(x, !1), ft ? (ft.el = zt.el, lt(x, ft, et)) : ft = zt, xt && Gs(xt), (ie = ft.props && ft.props.onVnodeBeforeUpdate) && Ln(ie, ht, ft, zt), Cr(x, !0);
        const kt = Lu(x), me = x.subTree;
        x.subTree = kt, I(
          me,
          kt,
          // parent may have changed if it's in a teleport
          p(me.el),
          // anchor may have changed if it's in a fragment
          je(me),
          x,
          K,
          U
        ), ft.el = kt.el, Dt === null && mm(x, kt.el), h && tn(h, K), (ie = ft.props && ft.props.onVnodeUpdated) && tn(
          () => Ln(ie, ht, ft, zt),
          K
        );
      } else {
        let ft;
        const { el: xt, props: h } = D, { bm: ht, m: zt, parent: Dt, root: ie, type: kt } = x, me = aa(D);
        Cr(x, !1), ht && Gs(ht), !me && (ft = h && h.onVnodeBeforeMount) && Ln(ft, Dt, D), Cr(x, !0);
        {
          ie.ce && ie.ce._hasShadowRoot() && ie.ce._injectChildStyle(
            kt,
            x.parent ? x.parent.type : void 0
          );
          const ye = x.subTree = Lu(x);
          I(
            null,
            ye,
            $,
            G,
            x,
            K,
            U
          ), D.el = ye.el;
        }
        if (zt && tn(zt, K), !me && (ft = h && h.onVnodeMounted)) {
          const ye = D;
          tn(
            () => Ln(ft, Dt, ye),
            K
          );
        }
        (D.shapeFlag & 256 || Dt && aa(Dt.vnode) && Dt.vnode.shapeFlag & 256) && x.a && tn(x.a, K), x.isMounted = !0, D = $ = G = null;
      }
    };
    x.scope.on();
    const it = x.effect = new nd(st);
    x.scope.off();
    const Q = x.update = it.run.bind(it), St = x.job = it.runIfDirty.bind(it);
    St.i = x, St.id = x.uid, it.scheduler = () => qc(St), Cr(x, !0), Q();
  }, lt = (x, D, $) => {
    D.component = x;
    const G = x.vnode.props;
    x.vnode = D, x.next = null, bm(x, D.props, G, $), xm(x, D.children, $), or(), Pu(x), sr();
  }, Y = (x, D, $, G, K, U, et, st, it = !1) => {
    const Q = x && x.children, St = x ? x.shapeFlag : 0, ft = D.children, { patchFlag: xt, shapeFlag: h } = D;
    if (xt > 0) {
      if (xt & 128) {
        Nt(
          Q,
          ft,
          $,
          G,
          K,
          U,
          et,
          st,
          it
        );
        return;
      } else if (xt & 256) {
        ut(
          Q,
          ft,
          $,
          G,
          K,
          U,
          et,
          st,
          it
        );
        return;
      }
    }
    h & 8 ? (St & 16 && Ne(Q, K, U), ft !== Q && _($, ft)) : St & 16 ? h & 16 ? Nt(
      Q,
      ft,
      $,
      G,
      K,
      U,
      et,
      st,
      it
    ) : Ne(Q, K, U, !0) : (St & 8 && _($, ""), h & 16 && J(
      ft,
      $,
      G,
      K,
      U,
      et,
      st,
      it
    ));
  }, ut = (x, D, $, G, K, U, et, st, it) => {
    x = x || pi, D = D || pi;
    const Q = x.length, St = D.length, ft = Math.min(Q, St);
    let xt;
    for (xt = 0; xt < ft; xt++) {
      const h = D[xt] = it ? ir(D[xt]) : Hn(D[xt]);
      I(
        x[xt],
        h,
        $,
        null,
        K,
        U,
        et,
        st,
        it
      );
    }
    Q > St ? Ne(
      x,
      K,
      U,
      !0,
      !1,
      ft
    ) : J(
      D,
      $,
      G,
      K,
      U,
      et,
      st,
      it,
      ft
    );
  }, Nt = (x, D, $, G, K, U, et, st, it) => {
    let Q = 0;
    const St = D.length;
    let ft = x.length - 1, xt = St - 1;
    for (; Q <= ft && Q <= xt; ) {
      const h = x[Q], ht = D[Q] = it ? ir(D[Q]) : Hn(D[Q]);
      if (Bi(h, ht))
        I(
          h,
          ht,
          $,
          null,
          K,
          U,
          et,
          st,
          it
        );
      else
        break;
      Q++;
    }
    for (; Q <= ft && Q <= xt; ) {
      const h = x[ft], ht = D[xt] = it ? ir(D[xt]) : Hn(D[xt]);
      if (Bi(h, ht))
        I(
          h,
          ht,
          $,
          null,
          K,
          U,
          et,
          st,
          it
        );
      else
        break;
      ft--, xt--;
    }
    if (Q > ft) {
      if (Q <= xt) {
        const h = xt + 1, ht = h < St ? D[h].el : G;
        for (; Q <= xt; )
          I(
            null,
            D[Q] = it ? ir(D[Q]) : Hn(D[Q]),
            $,
            ht,
            K,
            U,
            et,
            st,
            it
          ), Q++;
      }
    } else if (Q > xt)
      for (; Q <= ft; )
        Mt(x[Q], K, U, !0), Q++;
    else {
      const h = Q, ht = Q, zt = /* @__PURE__ */ new Map();
      for (Q = ht; Q <= xt; Q++) {
        const De = D[Q] = it ? ir(D[Q]) : Hn(D[Q]);
        De.key != null && zt.set(De.key, Q);
      }
      let Dt, ie = 0;
      const kt = xt - ht + 1;
      let me = !1, ye = 0;
      const qn = new Array(kt);
      for (Q = 0; Q < kt; Q++) qn[Q] = 0;
      for (Q = h; Q <= ft; Q++) {
        const De = x[Q];
        if (ie >= kt) {
          Mt(De, K, U, !0);
          continue;
        }
        let Me;
        if (De.key != null)
          Me = zt.get(De.key);
        else
          for (Dt = ht; Dt <= xt; Dt++)
            if (qn[Dt - ht] === 0 && Bi(De, D[Dt])) {
              Me = Dt;
              break;
            }
        Me === void 0 ? Mt(De, K, U, !0) : (qn[Me - ht] = Q + 1, Me >= ye ? ye = Me : me = !0, I(
          De,
          D[Me],
          $,
          null,
          K,
          U,
          et,
          st,
          it
        ), ie++);
      }
      const kn = me ? km(qn) : pi;
      for (Dt = kn.length - 1, Q = kt - 1; Q >= 0; Q--) {
        const De = ht + Q, Me = D[De], ke = D[De + 1], Ma = De + 1 < St ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ke.el || Wd(ke)
        ) : G;
        qn[Q] === 0 ? I(
          null,
          Me,
          $,
          Ma,
          K,
          U,
          et,
          st,
          it
        ) : me && (Dt < 0 || Q !== kn[Dt] ? Et(Me, $, Ma, 2) : Dt--);
      }
    }
  }, Et = (x, D, $, G, K = null) => {
    const { el: U, type: et, transition: st, children: it, shapeFlag: Q } = x;
    if (Q & 6) {
      Et(x.component.subTree, D, $, G);
      return;
    }
    if (Q & 128) {
      x.suspense.move(D, $, G);
      return;
    }
    if (Q & 64) {
      et.move(x, D, $, rn);
      return;
    }
    if (et === Fe) {
      r(U, D, $);
      for (let ft = 0; ft < it.length; ft++)
        Et(it[ft], D, $, G);
      r(x.anchor, D, $);
      return;
    }
    if (et === _o) {
      C(x, D, $);
      return;
    }
    if (G !== 2 && Q & 1 && st)
      if (G === 0)
        st.beforeEnter(U), r(U, D, $), tn(() => st.enter(U), K);
      else {
        const { leave: ft, delayLeave: xt, afterLeave: h } = st, ht = () => {
          x.ctx.isUnmounted ? a(U) : r(U, D, $);
        }, zt = () => {
          U._isLeaving && U[j0](
            !0
            /* cancelled */
          ), ft(U, () => {
            ht(), h && h();
          });
        };
        xt ? xt(U, ht, zt) : zt();
      }
    else
      r(U, D, $);
  }, Mt = (x, D, $, G = !1, K = !1) => {
    const {
      type: U,
      props: et,
      ref: st,
      children: it,
      dynamicChildren: Q,
      shapeFlag: St,
      patchFlag: ft,
      dirs: xt,
      cacheIndex: h,
      memo: ht
    } = x;
    if (ft === -2 && (K = !1), st != null && (or(), ia(st, null, $, x, !0), sr()), h != null && (D.renderCache[h] = void 0), St & 256) {
      D.ctx.deactivate(x);
      return;
    }
    const zt = St & 1 && xt, Dt = !aa(x);
    let ie;
    if (Dt && (ie = et && et.onVnodeBeforeUnmount) && Ln(ie, D, x), St & 6)
      He(x.component, $, G);
    else {
      if (St & 128) {
        x.suspense.unmount($, G);
        return;
      }
      zt && Ar(x, null, D, "beforeUnmount"), St & 64 ? x.type.remove(
        x,
        D,
        $,
        rn,
        G
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== Fe || ft > 0 && ft & 64) ? Ne(
        Q,
        D,
        $,
        !1,
        !0
      ) : (U === Fe && ft & 384 || !K && St & 16) && Ne(it, D, $), G && ee(x);
    }
    const kt = ht != null && h == null;
    (Dt && (ie = et && et.onVnodeUnmounted) || zt || kt) && tn(() => {
      ie && Ln(ie, D, x), zt && Ar(x, null, D, "unmounted"), kt && (x.el = null);
    }, $);
  }, ee = (x) => {
    const { type: D, el: $, anchor: G, transition: K } = x;
    if (D === Fe) {
      Se($, G);
      return;
    }
    if (D === _o) {
      T(x);
      return;
    }
    const U = () => {
      a($), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (x.shapeFlag & 1 && K && !K.persisted) {
      const { leave: et, delayLeave: st } = K, it = () => et($, U);
      st ? st(x.el, U, it) : it();
    } else
      U();
  }, Se = (x, D) => {
    let $;
    for (; x !== D; )
      $ = M(x), a(x), x = $;
    a(D);
  }, He = (x, D, $) => {
    const { bum: G, scope: K, job: U, subTree: et, um: st, m: it, a: Q } = x;
    $u(it), $u(Q), G && Gs(G), K.stop(), U && (U.flags |= 8, Mt(et, x, D, $)), st && tn(st, D), tn(() => {
      x.isUnmounted = !0;
    }, D);
  }, Ne = (x, D, $, G = !1, K = !1, U = 0) => {
    for (let et = U; et < x.length; et++)
      Mt(x[et], D, $, G, K);
  }, je = (x) => {
    if (x.shapeFlag & 6)
      return je(x.component.subTree);
    if (x.shapeFlag & 128)
      return x.suspense.next();
    const D = M(x.anchor || x.el), $ = D && D[z0];
    return $ ? M($) : D;
  };
  let Ae = !1;
  const nn = (x, D, $) => {
    let G;
    x == null ? D._vnode && (Mt(D._vnode, null, null, !0), G = D._vnode.component) : I(
      D._vnode || null,
      x,
      D,
      null,
      null,
      null,
      $
    ), D._vnode = x, Ae || (Ae = !0, Pu(G), _d(), Ae = !1);
  }, rn = {
    p: I,
    um: Mt,
    m: Et,
    r: ee,
    mt: yt,
    mc: J,
    pc: Y,
    pbc: z,
    n: je,
    o: t
  };
  return {
    render: nn,
    hydrate: void 0,
    createApp: lm(nn)
  };
}
function Zs({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Cr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Mm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Gd(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Lt(r) && Lt(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = ir(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && Gd(u, f)), f.type === ls && (f.patchFlag === -1 && (f = a[s] = ir(f)), f.el = u.el), f.type === Sr && !f.el && (f.el = u.el);
    }
}
function km(t) {
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
function Kd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Kd(e);
}
function $u(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Wd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Wd(e.subTree) : null;
}
const qd = (t) => t.__isSuspense;
function Pm(t, e) {
  e && e.pendingBranch ? Lt(t) ? e.effects.push(...t) : e.effects.push(t) : R0(t);
}
const Fe = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), Sr = /* @__PURE__ */ Symbol.for("v-cmt"), _o = /* @__PURE__ */ Symbol.for("v-stc"), sa = [];
let ln = null;
function ge(t = !1) {
  sa.push(ln = t ? null : []);
}
function Am() {
  sa.pop(), ln = sa[sa.length - 1] || null;
}
let ya = 1;
function Vu(t, e = !1) {
  ya += t, t < 0 && ln && e && (ln.hasOnce = !0);
}
function Yd(t) {
  return t.dynamicChildren = ya > 0 ? ln || pi : null, Am(), ya > 0 && ln && ln.push(t), t;
}
function Ee(t, e, n, r, a, s) {
  return Yd(
    _e(
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
function Mi(t, e, n, r, a) {
  return Yd(
    Ze(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function Xd(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Bi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Zd = ({ key: t }) => t ?? null, wo = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? we(t) || /* @__PURE__ */ Ve(t) || $t(t) ? { i: Sn, r: t, k: e, f: !!n } : t : null);
function _e(t, e = null, n = null, r = 0, a = null, s = t === Fe ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Zd(e),
    ref: e && wo(e),
    scopeId: xd,
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
    ctx: Sn
  };
  return f ? (Jc(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= we(n) ? 8 : 16), ya > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && ln.push(g), g;
}
const Ze = Cm;
function Cm(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === Ed) && (t = Sr), Xd(t)) {
    const f = Si(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Jc(f, n), ya > 0 && !s && ln && (f.shapeFlag & 6 ? ln[ln.indexOf(t)] = f : ln.push(f)), f.patchFlag = -2, f;
  }
  if (Hm(t) && (t = t.__vccOpts), e) {
    e = Im(e);
    let { class: f, style: g } = e;
    f && !we(f) && (e.class = is(f)), Jt(g) && (/* @__PURE__ */ Kc(g) && !Lt(g) && (g = ze({}, g)), e.style = rs(g));
  }
  const u = we(t) ? 1 : qd(t) ? 128 : H0(t) ? 64 : Jt(t) ? 4 : $t(t) ? 2 : 0;
  return _e(
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
function Im(t) {
  return t ? /* @__PURE__ */ Kc(t) || Vd(t) ? ze({}, t) : t : null;
}
function Si(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, y = e ? Qd(a || {}, e) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && Zd(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Lt(s) ? s.concat(wo(e)) : [s, wo(e)] : wo(e)
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
    patchFlag: e && t.type !== Fe ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: t.ssContent && Si(t.ssContent),
    ssFallback: t.ssFallback && Si(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && Yc(
    _,
    g.clone(_)
  ), _;
}
function Em(t = " ", e = 0) {
  return Ze(ls, null, t, e);
}
function Jd(t, e) {
  const n = Ze(_o, null, t);
  return n.staticCount = e, n;
}
function xo(t = "", e = !1) {
  return e ? (ge(), Mi(Sr, null, t)) : Ze(Sr, null, t);
}
function Hn(t) {
  return t == null || typeof t == "boolean" ? Ze(Sr) : Lt(t) ? Ze(
    Fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Xd(t) ? ir(t) : Ze(ls, null, String(t));
}
function ir(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Si(t);
}
function Jc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Lt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), Jc(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Vd(e) ? e._ctx = Sn : a === 3 && Sn && (Sn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else $t(e) ? (e = { default: e, _ctx: Sn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Em(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Qd(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = is([e.class, r.class]));
      else if (a === "style")
        e.style = rs([e.style, r.style]);
      else if (Jo(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Lt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qo(a) && (e[a] = u);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function Ln(t, e, n, r = null) {
  Wn(t, e, 7, [
    n,
    r
  ]);
}
const Dm = Rd();
let Tm = 0;
function Rm(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || Dm, s = {
    uid: Tm++,
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
    scope: new n0(
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
    propsOptions: Hd(r, a),
    emitsOptions: Ld(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: re,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: re,
    data: re,
    props: re,
    attrs: re,
    slots: re,
    refs: re,
    setupState: re,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = fm.bind(null, s), t.ce && t.ce(s), s;
}
let $e = null;
const Lm = () => $e || Sn;
let Oo, wc;
{
  const t = ns(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  Oo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $e = n
  ), wc = e(
    "__VUE_SSR_SETTERS__",
    (n) => ba = n
  );
}
const Sa = (t) => {
  const e = $e;
  return Oo(t), t.scope.on(), () => {
    t.scope.off(), Oo(e);
  };
}, zu = () => {
  $e && $e.scope.off(), Oo(null);
};
function th(t) {
  return t.vnode.shapeFlag & 4;
}
let ba = !1;
function Om(t, e = !1, n = !1) {
  e && wc(e);
  const { props: r, children: a } = t.vnode, s = th(t);
  ym(t, r, s, e), wm(t, a, n || e);
  const u = s ? Fm(t, e) : void 0;
  return e && wc(!1), u;
}
function Fm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, nm);
  const { setup: r } = n;
  if (r) {
    or();
    const a = t.setupContext = r.length > 1 ? Vm(t) : null, s = Sa(t), u = xa(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = qf(u);
    if (sr(), s(), (f || t.sp) && !aa(t) && Md(t), f) {
      if (u.then(zu, zu), e)
        return u.then((g) => {
          Hu(t, g);
        }).catch((g) => {
          os(g, t, 0);
        });
      t.asyncDep = u;
    } else
      Hu(t, u);
  } else
    eh(t);
}
function Hu(t, e, n) {
  $t(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Jt(e) && (t.setupState = md(e)), eh(t);
}
function eh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Gn);
  {
    const a = Sa(t);
    or();
    try {
      rm(t);
    } finally {
      sr(), a();
    }
  }
}
const $m = {
  get(t, e) {
    return Oe(t, "get", ""), t[e];
  }
};
function Vm(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, $m),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Qc(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(md(S0(t.exposed)), {
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
function zm(t, e = !0) {
  return $t(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Hm(t) {
  return $t(t) && "__vccOpts" in t;
}
const vi = (t, e) => /* @__PURE__ */ C0(t, e, ba), jm = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xc;
const ju = typeof window < "u" && window.trustedTypes;
if (ju)
  try {
    xc = /* @__PURE__ */ ju.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const nh = xc ? (t) => xc.createHTML(t) : (t) => t, Um = "http://www.w3.org/2000/svg", Bm = "http://www.w3.org/1998/Math/MathML", rr = typeof document < "u" ? document : null, Uu = rr && /* @__PURE__ */ rr.createElement("template"), Gm = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? rr.createElementNS(Um, t) : e === "mathml" ? rr.createElementNS(Bm, t) : n ? rr.createElement(t, { is: n }) : rr.createElement(t);
    return t === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
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
  insertStaticContent(t, e, n, r, a, s) {
    const u = n ? n.previousSibling : e.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; e.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      Uu.innerHTML = nh(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = Uu.content;
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
}, Km = /* @__PURE__ */ Symbol("_vtc");
function Wm(t, e, n) {
  const r = t[Km];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Bu = /* @__PURE__ */ Symbol("_vod"), qm = /* @__PURE__ */ Symbol("_vsh"), Ym = /* @__PURE__ */ Symbol(""), Xm = /(?:^|;)\s*display\s*:/;
function Zm(t, e, n) {
  const r = t.style, a = we(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (we(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && So(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && So(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), So(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[Ym];
      u && (n += ";" + u), r.cssText = n, s = Xm.test(n);
    }
  } else e && t.removeAttribute("style");
  Bu in t && (t[Bu] = s ? r.display : "", t[qm] && (r.display = "none"));
}
const Gu = /\s*!important$/;
function So(t, e, n) {
  if (Lt(n))
    n.forEach((r) => So(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Jm(t, e);
    Gu.test(n) ? t.setProperty(
      Ur(r),
      n.replace(Gu, ""),
      "important"
    ) : t[r] = n;
  }
}
const Ku = ["Webkit", "Moz", "ms"], Js = {};
function Jm(t, e) {
  const n = Js[e];
  if (n)
    return n;
  let r = Je(e);
  if (r !== "filter" && r in t)
    return Js[e] = r;
  r = es(r);
  for (let a = 0; a < Ku.length; a++) {
    const s = Ku[a] + r;
    if (s in t)
      return Js[e] = s;
  }
  return e;
}
const Wu = "http://www.w3.org/1999/xlink";
function qu(t, e, n, r, a, s = t0(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Wu, e.slice(6, e.length)) : t.setAttributeNS(Wu, e, n) : n == null || s && !Jf(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Kn(n) ? String(n) : n
  );
}
function Yu(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? nh(n) : n);
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
    f === "boolean" ? n = Jf(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function Qm(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function t1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Xu = /* @__PURE__ */ Symbol("_vei");
function e1(t, e, n, r, a = null) {
  const s = t[Xu] || (t[Xu] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = n1(e);
    if (r) {
      const y = s[e] = a1(
        r,
        a
      );
      Qm(t, f, y, g);
    } else u && (t1(t, f, u, g), s[e] = void 0);
  }
}
const Zu = /(?:Once|Passive|Capture)$/;
function n1(t) {
  let e;
  if (Zu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Zu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ur(t.slice(2)), e];
}
let Qs = 0;
const r1 = /* @__PURE__ */ Promise.resolve(), i1 = () => Qs || (r1.then(() => Qs = 0), Qs = Date.now());
function a1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Wn(
      o1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = i1(), n;
}
function o1(t, e) {
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
const Ju = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, s1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? Wm(t, r, u) : e === "style" ? Zm(t, n, r) : Jo(e) ? Qo(e) || e1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : c1(t, e, r, u)) ? (Yu(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && qu(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (l1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !we(r))) ? Yu(t, Je(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), qu(t, e, r, u));
};
function c1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Ju(e) && $t(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ju(e) && we(n) ? !1 : e in t;
}
function l1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = Je(e);
  return Array.isArray(n) ? n.some((a) => Je(a) === r) : Object.keys(n).some((a) => Je(a) === r);
}
const u1 = ["ctrl", "shift", "alt", "meta"], f1 = {
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
  exact: (t, e) => u1.some((n) => t[`${n}Key`] && !e.includes(n))
}, d1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = f1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, h1 = /* @__PURE__ */ ze({ patchProp: s1 }, Gm);
let Qu;
function p1() {
  return Qu || (Qu = Sm(h1));
}
const g1 = ((...t) => {
  const e = p1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = y1(r);
    if (!a) return;
    const s = e._component;
    !$t(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, m1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function m1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function y1(t) {
  return we(t) ? document.querySelector(t) : t;
}
const pe = Math.PI / 180, rh = Math.PI * 2, b1 = 2048;
function te(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Nr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Fo(t, e) {
  return Nr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function hi(t, e) {
  return Nr(t.x * e, t.y * e, t.z * e);
}
function No(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function tf(t, e) {
  return Nr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Zi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Nr(t.x / e, t.y / e, t.z / e);
}
function v1(t, e) {
  const n = Number(t || 0) * pe, r = Number(e || 0) * pe, a = Math.cos(r);
  return Nr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Mo(t, e, n = 0) {
  const r = v1(t, e);
  let a = Nr(0, 1, 0);
  Math.abs(No(r, a)) > 0.999 && (a = Nr(0, 0, 1));
  let s = Zi(tf(a, r)), u = Zi(tf(r, s));
  const f = Number(n || 0) * pe, g = Math.cos(f), y = Math.sin(f), _ = Fo(hi(s, g), hi(u, y)), p = Fo(hi(s, -y), hi(u, g));
  return s = Zi(_), u = Zi(p), { fwd: r, right: s, up: u };
}
function _1(t, e) {
  const n = (Number(t || 0) - 0.5) * rh, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return Nr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ef(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, b1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function nf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function tc(t, e, n) {
  const r = nf(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = nf(t, t.FRAGMENT_SHADER, n);
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
const ec = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, w1 = `#version 300 es
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
}`, x1 = `#version 300 es
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
function Gi(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(te(r, 1, 179) * pe * 0.5) * (n / Math.max(e, 1))) / pe);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: te(r, 1, 179),
    vFovDeg: te(a, 0.1, 179)
  };
}
function N1(t) {
  const e = Mo(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(te(Number(t.hFovDeg), 0.1, 179) * 0.5 * pe),
    tanY: Math.tan(te(Number(t.vFovDeg), 0.1, 179) * 0.5 * pe),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: te(Number(t.opacity ?? 1), 0, 1)
  };
}
function M1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, _ = null, p = null, M = null, P = !1, E = ef(1, 1, 1), I = null, A = null, O = null, R = null, C = null;
  const T = /* @__PURE__ */ new Map();
  let q = {
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
  function dt(x = null, D = null) {
    const $ = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, $), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, x ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, D ?? n.CLAMP_TO_EDGE), $;
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
      }), n ? (r = tc(n, ec, w1), a = tc(n, ec, x1), s = tc(n, ec, S1), I = {
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
  function Ct() {
    var x;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), T.forEach((D) => {
          lt(D);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (x = n.getExtension("WEBGL_lose_context")) == null || x.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, T.clear(), _ = null, p = null, M = null, L = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, R = null, C = null, P = !1;
    }
  }
  function z(x, D, $ = 1) {
    E = ef(x, D, $), (e.width !== E.width || e.height !== E.height) && (e.width = E.width, e.height = E.height);
  }
  function ct(x) {
    x === "background" ? _ = null : x === "paint" ? p = null : M = null, L[x] && (L[x].width = 0, L[x].height = 0);
  }
  function rt(x, D, $ = [], G = { width: 0, height: 0 }, K = !1) {
    if (!n || !x || !D) return !1;
    const U = Number(D.width || D.videoWidth || D.naturalWidth || 0), et = Number(D.height || D.videoHeight || D.naturalHeight || 0);
    if (!(U > 1) || !(et > 1)) return !1;
    const st = Array.isArray($) ? $.filter((it) => it && it.w > 0 && it.h > 0) : [];
    if (!st.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, x), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K ? 1 : 0), G.width !== U || G.height !== et)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), G.width = U, G.height = et, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (R || (R = document.createElement("canvas"), C = R.getContext("2d")), !C)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const it of st) {
      const Q = Math.max(0, Math.floor(Number(it.x || 0))), St = Math.max(0, Math.floor(Number(it.y || 0))), ft = Math.min(U - Q, Math.ceil(Number(it.w || 0))), xt = Math.min(et - St, Math.ceil(Number(it.h || 0)));
      if (!(ft <= 0 || xt <= 0)) {
        if (R.width !== ft || R.height !== xt) {
          if (R.width = ft, R.height = xt, C = R.getContext("2d"), !C)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          C.clearRect(0, 0, ft, xt);
        C.drawImage(D, Q, St, ft, xt, 0, 0, ft, xt), n.texSubImage2D(n.TEXTURE_2D, 0, Q, St, n.RGBA, n.UNSIGNED_BYTE, R);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function wt(x, D, $, G, K = null, U = !1) {
    if (!J()) return !1;
    if (!$)
      return ct(x), !1;
    const et = String(G ?? ""), st = x === "background" ? _ : x === "paint" ? p : M, it = L[x], Q = Number($.width || $.videoWidth || $.naturalWidth || 0), St = Number($.height || $.videoHeight || $.naturalHeight || 0), ft = it.width !== Q || it.height !== St;
    if (st === et && !ft && !(Array.isArray(K) && K.length)) return !0;
    if (!(Q > 0) || !(St > 0))
      return ct(x), !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U ? 1 : 0), !(Array.isArray(K) && K.length ? rt(D, $, K, it, U) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, $), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ct(x), !1;
      it.width = Q, it.height = St;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), x === "background" ? _ = et : x === "paint" ? p = et : M = et, !0;
  }
  function yt(x, D) {
    return wt("background", f, x, D, null, !0);
  }
  function Z(x, D, $ = null) {
    return wt("paint", g, x, D, $, !0);
  }
  function ot(x, D, $ = null) {
    return wt("mask", y, x, D, $, !0);
  }
  function lt(x) {
    x != null && x.texture && n && n.deleteTexture(x.texture);
  }
  function Y(x) {
    if (!n || !(x != null && x.assetId) || !(x != null && x.source)) return null;
    const D = String(x.assetId), $ = String(x.revision ?? ""), G = x.source, K = Number(G.width || G.naturalWidth || G.videoWidth || 0), U = Number(G.height || G.naturalHeight || G.videoHeight || 0);
    if (K <= 0 || U <= 0) return null;
    let et = T.get(D);
    if (et || (et = {
      texture: dt(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(D, et)), et.revision !== $ || et.width !== K || et.height !== U) {
      if (n.bindTexture(n.TEXTURE_2D, et.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), et.revision = $, et.width = K, et.height = U;
    }
    return et.texture;
  }
  function ut(x = []) {
    if (!J()) return !1;
    const D = /* @__PURE__ */ new Set();
    return x.forEach(($) => {
      !($ != null && $.assetId) || !($ != null && $.source) || (D.add(String($.assetId)), Y($));
    }), T.forEach(($, G) => {
      D.has(G) || (lt($), T.delete(G));
    }), !0;
  }
  function Nt() {
    return J() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Et(x) {
    n.useProgram(x), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Mt(x, D = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Et(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(I.background, 0), n.uniform2f(I.viewport, Math.max(1, E.width), Math.max(1, E.height)), n.uniform1i(I.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const $ = Gi(x, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(I.yaw, Number($.yawDeg || 0) * pe), n.uniform1f(I.pitch, Number($.pitchDeg || 0) * pe), n.uniform1f(I.roll, Number($.rollDeg || 0) * pe), n.uniform1f(I.hFov, te(Number($.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(I.vFov, te(Number($.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(I.opacity, te(Number(D.backgroundOpacity ?? 1), 0, 1));
    const G = Number((x == null ? void 0 : x.coverageDeg) || (D == null ? void 0 : D.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(I.coverage, G), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function ee(x, D = {}) {
    if (p == null && M == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Et(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(A.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(A.mask, 1), n.uniform1i(A.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const $ = Gi(x, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(A.yaw, Number($.yawDeg || 0) * pe), n.uniform1f(A.pitch, Number($.pitchDeg || 0) * pe), n.uniform1f(A.roll, Number($.rollDeg || 0) * pe), n.uniform1f(A.hFov, te(Number($.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(A.vFov, te(Number($.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(A.paintOpacity, te(Number(D.paintOpacity ?? 1), 0, 1)), n.uniform1f(A.maskOpacity, te(Number(D.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(A.hasPaint, p != null ? 1 : 0), n.uniform1i(A.hasMask, M != null ? 1 : 0), n.uniform1i(A.showMaskTint, D.showMaskTint === !1 ? 0 : 1), n.uniform3f(A.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Se(x, D) {
    var st, it, Q, St, ft, xt, h;
    const $ = Array.isArray(x == null ? void 0 : x.objects) ? x.objects : [];
    if (!$.length) return;
    const G = (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1, K = Gi(D, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, U = Mo(K.yawDeg, K.pitchDeg, K.rollDeg), et = $.slice().sort((ht, zt) => Number((ht == null ? void 0 : ht.zIndex) || 0) - Number((zt == null ? void 0 : zt.zIndex) || 0));
    for (const ht of et)
      if (!(!ht || ht.visible === !1)) {
        if (ht.type === "sticker") {
          const zt = Y({
            assetId: String(((st = ht == null ? void 0 : ht.params) == null ? void 0 : st.assetId) || (ht == null ? void 0 : ht.id) || ""),
            source: ht.source,
            revision: ht.revision
          });
          if (!zt) continue;
          const Dt = N1({
            yawDeg: ((it = ht == null ? void 0 : ht.transform) == null ? void 0 : it.yawDeg) || 0,
            pitchDeg: ((Q = ht == null ? void 0 : ht.transform) == null ? void 0 : Q.pitchDeg) || 0,
            rollDeg: ((St = ht == null ? void 0 : ht.transform) == null ? void 0 : St.rollDeg) || 0,
            hFovDeg: ((ft = ht == null ? void 0 : ht.transform) == null ? void 0 : ft.hFovDeg) || 30,
            vFovDeg: ((xt = ht == null ? void 0 : ht.transform) == null ? void 0 : xt.vFovDeg) || 30,
            crop: ((h = ht == null ? void 0 : ht.params) == null ? void 0 : h.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ht == null ? void 0 : ht.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Et(s), n.uniform1i(O.texture, 0), n.uniform1i(O.mode, G), n.uniform3f(O.viewRight, U.right.x, U.right.y, U.right.z), n.uniform3f(O.viewUp, U.up.x, U.up.y, U.up.z), n.uniform3f(O.viewFwd, U.fwd.x, U.fwd.y, U.fwd.z), n.uniform1f(O.viewHfov, te(Number(K.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(O.viewVfov, te(Number(K.vFovDeg || 60), 0.1, 179) * pe), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, zt), n.uniform3f(O.stickerRight, Dt.right.x, Dt.right.y, Dt.right.z), n.uniform3f(O.stickerUp, Dt.up.x, Dt.up.y, Dt.up.z), n.uniform3f(O.stickerFwd, Dt.fwd.x, Dt.fwd.y, Dt.fwd.z), n.uniform1f(O.stickerTanX, Math.max(1e-6, Dt.tanX)), n.uniform1f(O.stickerTanY, Math.max(1e-6, Dt.tanY)), n.uniform4f(
            O.crop,
            te(Number(Dt.crop.x0 ?? 0), 0, 1),
            te(Number(Dt.crop.y0 ?? 0), 0, 1),
            te(Number(Dt.crop.x1 ?? 1), 0, 1),
            te(Number(Dt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(O.opacity, Dt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ht.type === "paint" || ht.type === "raster") {
          if (!Z(ht.source, ht.revision ?? "")) continue;
          ct("mask"), ee(D, {
            paintOpacity: Number(ht.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ht.type === "mask") {
          if (!ot(ht.source, ht.revision ?? "")) continue;
          ct("paint"), ee(D, {
            paintOpacity: 0,
            maskOpacity: Number(ht.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    ct("paint"), ct("mask");
  }
  function He(x) {
    return !Nt() || !_ ? null : (Mt({
      mode: "panorama",
      yawDeg: (x == null ? void 0 : x.yawDeg) || 0,
      pitchDeg: (x == null ? void 0 : x.pitchDeg) || 0,
      fovDeg: (x == null ? void 0 : x.fovDeg) || 100
    }, x), e);
  }
  function Ne(x) {
    return !Nt() || !_ ? null : (Mt({ mode: "unwrap" }, x), e);
  }
  function je(x) {
    return !Nt() || !_ ? null : (Mt({
      mode: "cutout",
      yawDeg: (x == null ? void 0 : x.yawDeg) || 0,
      pitchDeg: (x == null ? void 0 : x.pitchDeg) || 0,
      rollDeg: (x == null ? void 0 : x.rollDeg) || 0,
      hFovDeg: (x == null ? void 0 : x.hFovDeg) || 90,
      vFovDeg: (x == null ? void 0 : x.vFovDeg) || 60
    }, x), e);
  }
  function Ae(x = {}) {
    if (!J() || (z(x.width, x.height, x.dpr || 1), !Nt())) return null;
    const D = Object.prototype.hasOwnProperty.call(x, "backgroundSource"), $ = Object.prototype.hasOwnProperty.call(x, "paintSource"), G = Object.prototype.hasOwnProperty.call(x, "maskSource"), K = Object.prototype.hasOwnProperty.call(x, "textures"), U = Object.prototype.hasOwnProperty.call(x, "scene");
    return D && yt(x.backgroundSource, x.backgroundRevision ?? ""), $ && Z(x.paintSource, x.paintRevision ?? ""), G && ot(x.maskSource, x.maskRevision ?? ""), K && (ut(x.textures || []), q.textures = x.textures || []), U && (q.scene = x.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(x, "objectPass") && (q.objectPass = x.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(x, "backgroundOpacity") && (q.backgroundOpacity = Number(x.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(x, "showMaskTint") && (q.showMaskTint = x.showMaskTint === !0), Object.prototype.hasOwnProperty.call(x, "coverageDeg") && (q.coverageDeg = Number(x.coverageDeg || 360) === 180 ? 180 : 360), _ && Mt(x.view, {
      ...x,
      backgroundOpacity: Number(x.backgroundOpacity ?? q.backgroundOpacity ?? 1),
      coverageDeg: Number(x.coverageDeg || q.coverageDeg || 360) === 180 ? 180 : 360
    }), Se(
      q.objectPass || { objects: [] },
      x.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function nn(x = {}) {
    return J() ? !!Ae({
      ...x,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(x.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function rn(x, D, $) {
    const G = Math.max(1, Number((x == null ? void 0 : x.viewportWidth) || E.sourceWidth || E.width || 1)), K = Math.max(1, Number((x == null ? void 0 : x.viewportHeight) || E.sourceHeight || E.height || 1)), U = Number(D), et = Number($);
    if (!Number.isFinite(U) || !Number.isFinite(et)) return null;
    if ((x == null ? void 0 : x.mode) === "unwrap")
      return { u: (U / G % 1 + 1) % 1, v: te(et / K, 0, 1) };
    const st = Gi(x, G, K);
    if (!st) return null;
    const it = Mo(st.yawDeg, st.pitchDeg, st.rollDeg), Q = (U - G * 0.5) / (G * 0.5) * Math.tan(te(st.hFovDeg, 1, 179) * pe * 0.5), St = (K * 0.5 - et) / (K * 0.5) * Math.tan(te(st.vFovDeg, 0.1, 179) * pe * 0.5), ft = Zi(Fo(Fo(hi(it.right, Q), hi(it.up, St)), it.fwd));
    return {
      u: (Math.atan2(ft.x, ft.z) / rh + 0.5 + 1) % 1,
      v: te(0.5 - Math.asin(te(ft.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function gn(x, D, $) {
    const G = Math.max(1, Number((x == null ? void 0 : x.viewportWidth) || E.sourceWidth || E.width || 1)), K = Math.max(1, Number((x == null ? void 0 : x.viewportHeight) || E.sourceHeight || E.height || 1));
    if ((x == null ? void 0 : x.mode) === "unwrap")
      return {
        x: (Number(D || 0) % 1 + 1) % 1 * G,
        y: te(Number($ || 0), 0, 1) * K,
        visible: !0
      };
    const U = Gi(x, G, K);
    if (!U)
      return { x: G * 0.5, y: K * 0.5, visible: !1 };
    const et = Mo(U.yawDeg, U.pitchDeg, U.rollDeg), st = _1(D, $), it = No(st, et.right), Q = No(st, et.up), St = No(st, et.fwd);
    if (St <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const ft = G * 0.5 + it / St * (G * 0.5 / Math.tan(te(U.hFovDeg, 1, 179) * pe * 0.5)), xt = K * 0.5 - Q / St * (K * 0.5 / Math.tan(te(U.vFovDeg, 0.1, 179) * pe * 0.5));
    return { x: ft, y: xt, visible: ft >= 0 && ft <= G && xt >= 0 && xt <= K };
  }
  return {
    init: J,
    dispose: Ct,
    setViewport: z,
    setBackgroundErp: yt,
    setPaintErp: Z,
    setMaskErp: ot,
    renderPanorama: He,
    renderUnwrap: Ne,
    renderCutout: je,
    renderScene: Ae,
    syncState: nn,
    screenToErpUv: rn,
    erpUvToScreen: gn,
    getCanvas() {
      return e;
    },
    isSupported() {
      return J();
    },
    getViewport() {
      return { ...E };
    }
  };
}
function rf(t, e = 1, n = 16384) {
  const r = Math.round(Number(t || e));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function k1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = e(u);
    let _ = t.get(y) || null;
    if (!_) {
      const P = document.createElement("canvas"), E = P.getContext("2d");
      if (!E) return null;
      _ = {
        id: y,
        canvas: P,
        ctx: E,
        width: 0,
        height: 0
      }, t.set(y, _);
    }
    const p = rf(f), M = rf(g);
    return _.width !== p && (_.canvas.width = p, _.width = p), _.height !== M && (_.canvas.height = M, _.height = M), _;
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
const P1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), A1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function ih(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function C1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function I1(t = {}) {
  const e = A1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? ih(n, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function E1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  if (!P1.has(e)) return null;
  const n = Number((t == null ? void 0 : t.opacity) ?? 1), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0);
  return {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: Number.isFinite(n) ? ih(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: C1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function D1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => E1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function $o(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: I1((t == null ? void 0 : t.background) || {}),
    objectPass: D1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function T1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function tl(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? T1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function R1(t, e, n = {}) {
  return t ? tl({
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
function L1(t, e, n = {}) {
  return t ? tl({
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
function O1(t, e, n = {}) {
  return t ? tl({
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
function ah(t = {}) {
  const e = [], n = R1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = L1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = O1(
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
function el(t, e) {
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
function us(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return $o({
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
      objects: el(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function af(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = el(e, n), a = ah({
    paintSource: (t == null ? void 0 : t.paintSource) || null,
    paintRevision: (t == null ? void 0 : t.paintRevision) || "",
    paintOptions: (t == null ? void 0 : t.paintOptions) || null,
    maskSource: (t == null ? void 0 : t.maskSource) || null,
    maskRevision: (t == null ? void 0 : t.maskRevision) || "",
    maskOptions: (t == null ? void 0 : t.maskOptions) || null,
    rasterEntries: (t == null ? void 0 : t.rasterEntries) || []
  });
  return $o({
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
function F1(t = {}) {
  var s, u, f, g, y, _, p, M;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const P = $o(t), E = Array.isArray((s = P.objectPass) == null ? void 0 : s.objects) ? P.objectPass.objects : [], I = {
      stickers: E.filter((C) => C.type === "sticker").map((C) => {
        var T, q, L, dt, J, Ct, z, ct, rt, wt, yt, Z, ot;
        return {
          id: C.id,
          assetId: String(((T = C == null ? void 0 : C.params) == null ? void 0 : T.assetId) || ((q = C == null ? void 0 : C.params) == null ? void 0 : q.asset_id) || (C == null ? void 0 : C.id) || ""),
          yawDeg: Number(((L = C == null ? void 0 : C.transform) == null ? void 0 : L.yawDeg) ?? ((dt = C == null ? void 0 : C.params) == null ? void 0 : dt.yawDeg) ?? 0),
          pitchDeg: Number(((J = C == null ? void 0 : C.transform) == null ? void 0 : J.pitchDeg) ?? ((Ct = C == null ? void 0 : C.params) == null ? void 0 : Ct.pitchDeg) ?? 0),
          rollDeg: Number(((z = C == null ? void 0 : C.transform) == null ? void 0 : z.rollDeg) ?? ((ct = C == null ? void 0 : C.params) == null ? void 0 : ct.rollDeg) ?? 0),
          hFovDeg: Number(((rt = C == null ? void 0 : C.transform) == null ? void 0 : rt.hFovDeg) ?? ((wt = C == null ? void 0 : C.params) == null ? void 0 : wt.hFovDeg) ?? 30),
          vFovDeg: Number(((yt = C == null ? void 0 : C.transform) == null ? void 0 : yt.vFovDeg) ?? ((Z = C == null ? void 0 : C.params) == null ? void 0 : Z.vFovDeg) ?? 30),
          crop: ((ot = C == null ? void 0 : C.params) == null ? void 0 : ot.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((C == null ? void 0 : C.opacity) ?? 1),
          visible: (C == null ? void 0 : C.visible) !== !1,
          zIndex: Number((C == null ? void 0 : C.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = P.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = P.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, A = E.filter((C) => C.type === "sticker").map((C) => {
      var T, q;
      return {
        assetId: String(((T = C == null ? void 0 : C.params) == null ? void 0 : T.assetId) || ((q = C == null ? void 0 : C.params) == null ? void 0 : q.asset_id) || (C == null ? void 0 : C.id) || ""),
        source: C.source || null,
        revision: String((C == null ? void 0 : C.revision) || "")
      };
    }).filter((C) => C.assetId && C.source), O = E.find((C) => C.type === "paint") || null, R = E.find((C) => C.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((g = P.background) == null ? void 0 : g.source) || null,
      backgroundRevision: String(((y = P.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((_ = P.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (O == null ? void 0 : O.source) || null,
      paintRevision: String((O == null ? void 0 : O.revision) || ""),
      maskSource: (R == null ? void 0 : R.source) || null,
      maskRevision: String((R == null ? void 0 : R.revision) || ""),
      textures: A,
      scene: I,
      objectPass: P.objectPass,
      backgroundOpacity: Number(((p = P.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((M = t == null ? void 0 : t.overlay) == null ? void 0 : M.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], r = t.layers || {}, a = $o({
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: [
        ...el(e, n),
        ...ah({
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
function $1(t) {
  let e = null;
  function n(s = {}) {
    const u = F1(s);
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
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (A) => M1(A), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => k1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (A) => $1(A), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
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
  function _(A = {}, O = {}) {
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
    const T = _(R, {
      ...C,
      width: O.w,
      height: O.h
    });
    return T ? A ? (A.canvas && T === A.canvas || A.drawImage(T, O.x, O.y, O.w, O.h), !0) : !!s && T === s : !1;
  }
  function M(A, O = {}, R = {}) {
    const C = Number(R.width || 0), T = Number(R.height || 0);
    if (!(C > 0) || !(T > 0)) return null;
    const q = u.ensureTarget(A, C, T);
    if (!q) return null;
    const L = _(O, {
      ...R,
      width: C,
      height: T
    });
    return L ? (q.ctx.clearRect(0, 0, q.canvas.width, q.canvas.height), q.ctx.drawImage(L, 0, 0, q.canvas.width, q.canvas.height), q.canvas) : null;
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
    renderView: _,
    renderToContext: p,
    renderToTarget: M,
    clearTarget: P,
    snapshotState: g.snapshot,
    clearState: I,
    dispose: E
  };
}
function li(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function V1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function of(t, e = 8) {
  var _;
  const n = (_ = t == null ? void 0 : t.getContext) == null ? void 0 : _.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, g = -1, y = -1;
  for (let p = 0; p < a; p += 1)
    for (let M = 0; M < r; M += 1)
      s[(p * r + M) * 4 + 3] <= e || (M < u && (u = M), p < f && (f = p), M > g && (g = M), p > y && (y = p));
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
function nl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Vn(t, e, n) {
  if (!t) return li(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function se(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let nc = null, rc = null, sf = null, cf = null, Xt = null, Ki = null, Be = null, br = null;
function z1() {
  if (rc) return rc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), rc = n, n;
}
function ri(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  nc = Vn(nc, n, r);
  const a = nc;
  se(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", cf !== a.ctx && (sf = a.ctx.createPattern(z1(), "repeat"), cf = a.ctx), a.ctx.fillStyle = sf, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function H1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function j1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function U1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function B1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const fe = /* @__PURE__ */ new Map(), rl = 128;
function G1(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (fe.has(g)) {
    const R = fe.get(g);
    return fe.delete(g), fe.set(g, R), R;
  }
  fe.size >= rl && fe.delete(fe.keys().next().value);
  const y = u * 2 + 2, _ = u + 1, p = nl(y, y), M = p.getContext("2d"), P = f * u, E = u + 1, I = `rgba(${n},${r},${a},${s})`, A = `rgba(${n},${r},${a},0)`, O = M.createRadialGradient(_, _, P, _, _, E);
  return O.addColorStop(0, I), O.addColorStop(1, A), M.fillStyle = O, M.fillRect(0, 0, y, y), fe.set(g, p), p;
}
function K1(t, e, n, r, a, s, u) {
  const { r: f, g, b: y, a: _ } = r, p = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), P = Math.max(0, a), E = Math.max(0, Math.min(0.99, s)), I = Math.max(0, Math.min(1, u ?? 0)), A = `chisel:${p}:${M}:${n.toFixed(2)}:${f}:${g}:${y}:${_.toFixed(3)}:${P.toFixed(2)}:${E.toFixed(2)}:${I.toFixed(2)}`;
  if (fe.has(A)) {
    const J = fe.get(A);
    return fe.delete(A), fe.set(A, J), J;
  }
  fe.size >= rl && fe.delete(fe.keys().next().value);
  const O = nl(p, M), R = O.getContext("2d"), C = R.createImageData(p, M), T = C.data, q = Math.max(0, t - e), L = Math.max(0, Math.min(1, n)), dt = 1 + P;
  for (let J = 0; J < M; J++)
    for (let Ct = 0; Ct < p; Ct++) {
      const z = Ct + 0.5 - t, ct = J + 0.5 - e, rt = Math.max(Math.abs(z) - q, 0), yt = Math.hypot(rt, ct) / e;
      if (yt >= 1) continue;
      const Z = yt <= L ? 1 : Math.max(0, (1 - yt) / Math.max(1e-4, 1 - L)), ot = 1 - yt, lt = 1 + P * (1 - ot) * (1 - ot), Y = 1 - E * ot * ot, ut = lt * Y / dt;
      let Nt = 1;
      if (I > 0) {
        const ee = Math.floor((ct + e) / 1.5), Se = Math.floor((z + t) / 8), He = $r(_i(ee * 41 + 500, Se * 19 + 300));
        Nt = 1 - I * 0.42 * He;
      }
      const Et = Math.round(255 * Math.min(1, _ * Z * ut * Nt));
      if (Et <= 0) continue;
      const Mt = (J * p + Ct) * 4;
      T[Mt] = f, T[Mt + 1] = g, T[Mt + 2] = y, T[Mt + 3] = Et;
    }
  return R.putImageData(C, 0, 0), fe.set(A, O), O;
}
function _i(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function $r(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function W1(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), _ = Math.max(Math.abs(f) - y, 0), p = Math.hypot(_, g) / r;
  if (p >= 1) return 0;
  const M = $r(_i(t * 17 + 3, e * 13 + 7)), P = p + s * 0.22 * (M - 0.5);
  if (P >= 1) return 0;
  const E = P <= a ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - a)), I = q1(t, e, f, g, n, r), A = s * 0.55;
  if (I < A) return 0;
  const R = 0.45 + 0.55 * ((I - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, u * E * R));
}
function q1(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = $r(_i(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((r + s) / 1.5), p = $r(_i(y * 23 + 800, _ * 29 + 500)), M = $r(_i(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + p * 0.3 + M * 0.15;
}
function Y1(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), _ = Math.max(2, Math.ceil(e) * 2), p = Math.max(0, Math.min(1, a)), M = `crayon:${y}:${_}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${p.toFixed(2)}`;
  if (fe.has(M)) {
    const R = fe.get(M);
    return fe.delete(M), fe.set(M, R), R;
  }
  fe.size >= rl && fe.delete(fe.keys().next().value);
  const P = nl(y, _), E = P.getContext("2d"), I = E.createImageData(y, _), A = I.data, O = Math.max(0, Math.min(1, n));
  for (let R = 0; R < _; R++)
    for (let C = 0; C < y; C++) {
      const T = W1(C, R, t, e, O, p, g);
      if (T <= 0) continue;
      const q = (R * y + C) * 4;
      A[q] = s, A[q + 1] = u, A[q + 2] = f, A[q + 3] = T;
    }
  return E.putImageData(I, 0, 0), fe.set(M, P), P;
}
function oh(t, e, n) {
  var I, A;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = U1(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = X1(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((I = e == null ? void 0 : e.angle) == null ? void 0 : I.value) ?? 0), y = B1(e, a), _ = String(((A = e == null ? void 0 : e.targetSpace) == null ? void 0 : A.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", M = e == null ? void 0 : e.scatter, P = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let E;
  if (r === "chisel") {
    const O = a * f, R = a, C = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), q = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    E = K1(O, R, s, u, C, T, q);
  } else if (r === "crayon") {
    const O = a * f, R = a, C = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    E = Y1(O, R, s, u, C);
  } else
    E = G1(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: E, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: P, latitudeCorrection: p };
}
function X1(t) {
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
function Z1(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function lf(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, _) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, _ - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, _), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function il(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: _ } = t.scatter, p = y * t.radiusPx * a, M = _i(e, n);
    for (let P = 0; P < _; P++) {
      const E = $r(M + P * 2) * Math.PI * 2, I = Math.sqrt($r(M + P * 2 + 1)) * p, A = e + Math.cos(E) * I, O = n + Math.sin(E) * I, R = Math.max(0.5, t.radiusPx * a * 0.48), C = (0.5 - O / Math.max(1, t.desc.height)) * Math.PI, T = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(C)) : 1, q = R * t.aspect * T;
      lf(t, A, O, R, q);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  lf(t, e, n, s, g);
}
function uf(t, e, n) {
  const r = j1(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = oh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let P = Number(r[M].u || 0) * a;
    const E = Number(r[M].v || 0) * s;
    M > 0 && Math.abs(P - f[M - 1].x) > a * 0.5 && (P += P < f[M - 1].x ? a : -a), f.push({ x: P, y: E });
  }
  if (il(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], _ = f[0], p = 0;
  for (let M = 1; M < f.length; M++) {
    const P = f[M], E = { x: (y.x + P.x) * 0.5, y: (y.y + P.y) * 0.5 };
    M === 1 ? p = va(u, _.x, _.y, E.x, E.y, p) : p = Vo(u, g, _, E, P, p), g = y, y = P, _ = E;
  }
  f.length === 2 ? va(u, _.x, _.y, y.x, y.y, p) : Vo(u, g, _, y, y, p), t.restore();
}
function ko(t, e, n) {
  var p;
  const r = Array.isArray((p = e == null ? void 0 : e.geometry) == null ? void 0 : p.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = Z1(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const P = H1(r[M]);
    let E = Number(P.x || 0) * a;
    M > 0 && Math.abs(E - f[M - 1].x) > a * 0.5 && (E += E < f[M - 1].x ? a : -a), f.push({ x: E, y: Number(P.y || 0) * s }), E < g && (g = E), E > y && (y = E);
  }
  function _(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let P = 1; P < f.length; P++) t.lineTo(f[P].x + M, f[P].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, _(0), g < 0 && _(a), y > a && _(-a), t.restore();
}
function Qa(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    ko(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? uf(t, e, n) : (Ki = Vn(Ki, n.width, n.height), se(Ki), uf(Ki.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(Ki.canvas, 0, 0), t.restore());
}
function vr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function va(t, e, n, r, a, s) {
  const u = r - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= g; ) {
    const _ = y / g;
    il(t, e + u * _, n + f * _, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function Vo(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, _ = 0, p = f, M = p + g, P = M + y, E = M - p, I = 16;
  let A = s, O = n.x, R = n.y;
  for (let C = 1; C <= I; C++) {
    const T = p + E * C / I, q = ((p - T) * e.x + (T - _) * n.x) / (p - _), L = ((p - T) * e.y + (T - _) * n.y) / (p - _), dt = ((M - T) * n.x + (T - p) * r.x) / (M - p), J = ((M - T) * n.y + (T - p) * r.y) / (M - p), Ct = ((P - T) * r.x + (T - M) * a.x) / (P - M), z = ((P - T) * r.y + (T - M) * a.y) / (P - M), ct = ((M - T) * q + (T - _) * dt) / (M - _), rt = ((M - T) * L + (T - _) * J) / (M - _), wt = ((P - T) * dt + (T - p) * Ct) / (P - p), yt = ((P - T) * J + (T - p) * z) / (P - p), Z = ((M - T) * ct + (T - p) * wt) / (M - p), ot = ((M - T) * rt + (T - p) * yt) / (M - p);
    A = va(t, O, R, Z, ot, A), O = Z, R = ot;
  }
  return A;
}
function J1(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const P = oh(a, r, s), E = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), I = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", il(P, y, f, 1), t.activeStroke = {
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
  const _ = (g.prev.x + y) * 0.5, p = (g.prev.y + f) * 0.5;
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
  g.pointCount === 1 ? g.distSinceStamp = va(M, g.lastMidX, g.lastMidY, _, p, g.distSinceStamp) : g.distSinceStamp = Vo(
    M,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: _, y: p },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = _, g.lastMidY = p, g.pointCount++, t.displayDirty = !0;
}
function Sc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = li(e, n), u = {
    descriptor: r,
    committedMask: li(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: li(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = li(e, n);
  let y = null, _ = "", p = null;
  function M(z) {
    return {
      actionGroupId: z,
      descriptor: r,
      committedPaint: li(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(z) {
    let ct = a.get(z);
    return ct || (ct = M(z), a.set(z, ct)), ct;
  }
  function E(z) {
    return _ === "mask" ? u : y ? P(y) : f;
  }
  function I(z) {
    var Y;
    const ct = !p || p.length !== z.length || z.some((ut, Nt) => ut !== p[Nt]), rt = _ === "paint" && ((Y = y ? a.get(y) : f) == null ? void 0 : Y.activeStroke) || null, wt = _ === "mask", yt = u.activeStroke;
    let Z = u.displayDirty || f.displayDirty || ct;
    for (const ut of z) {
      const Nt = a.get(ut);
      if (Nt != null && Nt.displayDirty) {
        Z = !0;
        break;
      }
    }
    if ((rt || wt && yt) && (Z = !0), !Z) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const ut of z) {
      const Nt = a.get(ut);
      Nt && (Nt.displayDirty = !1);
    }
    p = [...z];
    const ot = g.ctx;
    se(g);
    const lt = !!(rt != null && rt.isEraser);
    for (const ut of z) {
      const Nt = a.get(ut);
      if (!Nt) continue;
      const Mt = y === Nt.actionGroupId && _ === "paint" ? Nt.activeStroke : null;
      if (lt)
        Xt = Vn(Xt, e, n), se(Xt), Xt.ctx.drawImage(Nt.committedPaint.canvas, 0, 0), vr(Xt.ctx, s.canvas), ot.drawImage(Xt.canvas, 0, 0);
      else if (ot.drawImage(Nt.committedPaint.canvas, 0, 0), Mt) {
        const ee = Nt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Mt.strokeOpacity ?? 1));
        ot.save(), ot.globalAlpha = ee, ot.drawImage(s.canvas, 0, 0), ot.restore();
      }
    }
    wt && (yt != null && yt.isEraser) ? (Xt = Vn(Xt, e, n), se(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), vr(Xt.ctx, s.canvas), ri(ot, Xt.canvas)) : (ri(ot, u.committedMask.canvas), wt && yt && ri(ot, s.canvas));
  }
  function A(z) {
    var rt, wt, yt, Z, ot;
    for (const lt of a.values())
      se(lt.committedPaint), se(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    se(u.committedMask), se(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, p = null;
    const ct = [
      ...Array.isArray((wt = (rt = z == null ? void 0 : z.painting) == null ? void 0 : rt.paint) == null ? void 0 : wt.strokes) ? z.painting.paint.strokes : [],
      ...Array.isArray((Z = (yt = z == null ? void 0 : z.painting) == null ? void 0 : yt.mask) == null ? void 0 : Z.strokes) ? z.painting.mask.strokes : []
    ];
    for (const lt of ct) {
      if (((ot = lt == null ? void 0 : lt.targetSpace) == null ? void 0 : ot.kind) !== "ERP_GLOBAL") continue;
      const Y = String((lt == null ? void 0 : lt.layerKind) || "paint"), Nt = String((lt == null ? void 0 : lt.toolKind) || "pen") === "eraser";
      if (Y === "mask") {
        const Et = u.descriptor;
        Nt ? (Xt = Vn(Xt, Et.width, Et.height), se(Xt), Qa(Xt.ctx, lt, Et), vr(u.committedMask.ctx, Xt.canvas)) : Qa(u.committedMask.ctx, lt, Et);
        continue;
      }
      if (Nt) {
        Xt = Vn(Xt, r.width, r.height), se(Xt), Qa(Xt.ctx, lt, r);
        for (const Et of a.values())
          vr(Et.committedPaint.ctx, Xt.canvas), Et.displayDirty = !0;
      } else {
        const Et = String((lt == null ? void 0 : lt.actionGroupId) || "__default__"), Mt = P(Et), ee = Mt.descriptor;
        Qa(Mt.committedPaint.ctx, lt, ee), Mt.displayDirty = !0;
      }
    }
    I([...a.keys()]);
  }
  function O(z, ct) {
    _ = String((z == null ? void 0 : z.layerKind) || "");
    const rt = String((z == null ? void 0 : z.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, se(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const wt = rt ? f : P(String((z == null ? void 0 : z.actionGroupId) || "__default__"));
      y = rt ? "" : String((z == null ? void 0 : z.actionGroupId) || "__default__"), se(wt.currentStroke), wt.activeStroke = null, wt.displayDirty = !0;
    }
  }
  function R(z, ct) {
    var Y;
    const rt = String((z == null ? void 0 : z.layerKind) || "paint"), wt = String((z == null ? void 0 : z.toolKind) || "") === "eraser", yt = rt === "mask" ? u : wt ? f : P(String((z == null ? void 0 : z.actionGroupId) || y || "__default__")), Z = yt.activeStroke, ot = yt.descriptor;
    if (Z && Z.pointCount > 1) {
      const ut = yt.currentStroke.ctx;
      ut.globalCompositeOperation = "source-over";
      const Nt = {
        ctx: ut,
        stampTex: Z.stampTex,
        radiusPx: Z.radiusPx,
        spacingPx: Z.spacingPx,
        desc: ot,
        aspect: Z.aspect,
        angle: Z.angle,
        stampKind: Z.stampKind,
        scatter: Z.scatter,
        latitudeCorrection: Z.latitudeCorrection
      };
      Z.pointCount === 2 ? va(Nt, Z.lastMidX, Z.lastMidY, Z.prev.x, Z.prev.y, Z.distSinceStamp) : Vo(Nt, Z.pprev, { x: Z.lastMidX, y: Z.lastMidY }, Z.prev, Z.prev, Z.distSinceStamp);
    }
    yt.lassoPreviewActive && (se(yt.currentStroke), ko(yt.currentStroke.ctx, z, ot), yt.lassoPreviewActive = !1);
    const lt = rt === "mask" ? u.committedMask : yt.committedPaint;
    if (wt && rt === "paint")
      for (const ut of a.values())
        vr(ut.committedPaint.ctx, yt.currentStroke.canvas), ut.displayDirty = !0;
    else if (wt)
      vr(lt.ctx, yt.currentStroke.canvas);
    else {
      const ut = Math.max(0, Math.min(1, (Z == null ? void 0 : Z.strokeOpacity) ?? 1));
      lt.ctx.save(), lt.ctx.globalAlpha = ut, lt.ctx.drawImage(yt.currentStroke.canvas, 0, 0), lt.ctx.restore();
    }
    V1() && (String((z == null ? void 0 : z.toolKind) || ""), String((ot == null ? void 0 : ot.kind) || ""), Number((ot == null ? void 0 : ot.width) || 0), Number((ot == null ? void 0 : ot.height) || 0), String(((Y = z == null ? void 0 : z.targetSpace) == null ? void 0 : Y.viewMode) || ""), Number((z == null ? void 0 : z.aspect) ?? 1), of(yt.currentStroke.canvas), of(lt.canvas), void 0), se(yt.currentStroke), yt.activeStroke = null, yt.displayDirty = !0, y = null, _ = "", I([...a.keys()]);
  }
  function C(z) {
    if (_ === "mask")
      se(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !y)
      se(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ct = a.get(y);
      ct && (se(ct.currentStroke), ct.activeStroke = null, ct.lassoPreviewActive = !1, ct.displayDirty = !0);
    }
    y = null, _ = "", I([...a.keys()]);
  }
  function T(z, ct) {
    var wt;
    if (_ = String((z == null ? void 0 : z.layerKind) || ""), String(((wt = z == null ? void 0 : z.geometry) == null ? void 0 : wt.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        se(u.currentStroke), ko(u.currentStroke.ctx, z, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const yt = String((z == null ? void 0 : z.toolKind) || "") === "eraser", Z = yt ? f : P(String((z == null ? void 0 : z.actionGroupId) || y || "__default__"));
        y = yt ? "" : String((z == null ? void 0 : z.actionGroupId) || y || "__default__"), se(Z.currentStroke), ko(Z.currentStroke.ctx, z, Z.descriptor), Z.lassoPreviewActive = !0, Z.displayDirty = !0;
      }
      I([...a.keys()]);
    }
  }
  function q(z) {
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
  function J(z) {
    var ot;
    const ct = a.get(String(z));
    if (!ct) return null;
    const rt = _ === "paint" && y === ct.actionGroupId, wt = _ === "paint" && ((ot = y ? a.get(y) : f) == null ? void 0 : ot.activeStroke) || null;
    if (wt != null && wt.isEraser)
      return Be = Vn(Be, e, n), se(Be), Be.ctx.drawImage(ct.committedPaint.canvas, 0, 0), vr(Be.ctx, s.canvas), Be.canvas;
    const yt = rt ? ct.activeStroke : null;
    if (!yt) return ct.committedPaint.canvas;
    Be = Vn(Be, e, n), se(Be), Be.ctx.drawImage(ct.committedPaint.canvas, 0, 0);
    const Z = ct.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, yt.strokeOpacity ?? 1));
    return Be.ctx.save(), Be.ctx.globalAlpha = Z, Be.ctx.drawImage(s.canvas, 0, 0), Be.ctx.restore(), Be.canvas;
  }
  function Ct() {
    return br = Vn(br, e, n), se(br), ri(br.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Xt = Vn(Xt, e, n), se(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), vr(Xt.ctx, s.canvas), se(br), ri(br.ctx, Xt.canvas)) : ri(br.ctx, s.canvas)), br.canvas;
  }
  return {
    rebuildCommitted: A,
    beginStroke: O,
    appendStrokePoint: J1,
    updateActiveStroke: T,
    commitActiveStroke: R,
    cancelActiveStroke: C,
    getErpTarget: q,
    ensureTarget: E,
    getGroupTarget: L,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: Ct,
    getAllGroupIds: dt
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function ic(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function qe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function Q1(t, e) {
  let n = qe(e) - qe(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const ff = Math.PI / 180, df = 0.12, ty = 3, ey = 35, ny = 140, Ji = 100, ry = 20, hf = 0.8;
function iy(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = j(Number(t || Ji), 1, 179) * ff;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / ff;
}
function ay(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function fs(t = {}) {
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
  function _(O, R, C = null, T = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(O || 0), g.drag.lastY = Number(R || 0), g.drag.lastTs = Number(T || performance.now()), g.drag.pointerId = C, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: C }), !0;
  }
  function p(O, R, C = "pano", T = performance.now()) {
    if (!g.drag.active) return !1;
    const q = Number(T || performance.now()), L = Number(O), dt = Number(R), J = L - g.drag.lastX, Ct = dt - g.drag.lastY;
    g.drag.lastX = L, g.drag.lastY = dt, g.drag.lastTs = q;
    const z = r() || { x: 1, y: 1 }, ct = Number(z.x || 1), rt = Number(z.y || 1), wt = { ...e() };
    let yt = 0, Z = 0;
    if (C === "unwrap") {
      const lt = a() || { w: 1, h: 1 }, Y = Math.max(1, Number(lt.w || 1)), ut = Math.max(1, Number(lt.h || 1)), Nt = J / Y, Et = Ct / ut;
      yt = -Nt * 360 * ct, Z = Et * 180 * rt;
    } else {
      const lt = s() || { w: 0, h: 0 }, Y = Math.max(1, Number(lt.w || 0)), ut = Math.max(1, Number(lt.h || 0));
      if (Y > 1 && ut > 1) {
        const Nt = j(Number(wt.fov || Ji), 1, 179), Et = j(iy(Nt, Y, ut), 0.1, 179);
        yt = -(J / Y) * Nt * ct, Z = Ct / ut * Et * rt;
      } else
        yt = -J * df * ct, Z = Ct * df * rt;
    }
    wt.yaw = qe(Number(wt.yaw || 0) + yt), wt.pitch = j(Number(wt.pitch || 0) + Z, -89.9, 89.9), n(wt), g.velHistory.push({ ts: q, yaw: wt.yaw, pitch: wt.pitch });
    let ot = 0;
    for (; ot < g.velHistory.length - 1 && g.velHistory[ot].ts < q - 100; ) ot++;
    return ot > 0 && g.velHistory.splice(0, ot), g.inertia.active = !1, g.inertia.lastTs = q, u(), y("drag", { phase: "move", dx: J, dy: Ct, dYaw: yt, dPitch: Z }), !0;
  }
  function M(O = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const R = Number(O || performance.now());
    g.drag.lastTs = R;
    const C = g.velHistory.filter((q) => R - q.ts <= 80);
    if (C.length >= 2) {
      const q = C[0], L = C.at(-1), dt = Math.max(1e-3, (L.ts - q.ts) / 1e3);
      let J = L.yaw - q.yaw;
      J > 180 && (J -= 360), J < -180 && (J += 360), g.inertia.vx = J / dt, g.inertia.vy = (L.pitch - q.pitch) / dt;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const T = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = T > ry, g.inertia.lastTs = R, y("drag", { phase: "end", speed: T, inertiaActive: g.inertia.active }), !0;
  }
  function P(O = performance.now()) {
    if (!g.inertia.active) return !1;
    const R = Number(O || performance.now()), C = Math.max(1e-3, (R - (g.inertia.lastTs || R)) / 1e3);
    g.inertia.lastTs = R;
    const T = { ...e() };
    T.yaw = qe(Number(T.yaw || 0) + g.inertia.vx * C), T.pitch = j(Number(T.pitch || 0) + g.inertia.vy * C, -89.9, 89.9);
    const q = Math.exp(-5.5 * C);
    return g.inertia.vx *= q, g.inertia.vy *= q, Math.abs(g.inertia.vx) < hf && Math.abs(g.inertia.vy) < hf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(T), u(), g.inertia.active;
  }
  function E(O) {
    const R = Math.sign(Number(O || 0));
    if (!R) return !1;
    const C = { ...e() }, T = Number(C.fov || Ji);
    return C.fov = j(T + R * ty, ey, ny), n(C), u(), y("wheel", { deltaSign: R, fovBefore: T, fovAfter: C.fov }), !0;
  }
  function I(O) {
    return E(Math.sign(ay(O)));
  }
  function A() {
    n({ yaw: 0, pitch: 0, fov: Ji }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: _,
    moveDrag: p,
    endDrag: M,
    stepInertia: P,
    applyWheel: E,
    applyWheelEvent: I,
    resetView: A
  };
}
function Nc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const pf = Math.PI / 180;
function Wi(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function oy(t) {
  const e = t || {}, n = Wi(e.yaw_deg, 0), r = Wi(e.pitch_deg, 0), a = Wi(e.roll_deg ?? e.rot_deg, 0), s = ic(Wi(e.hFOV_deg, 90), 1, 179), u = ic(Wi(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * pf * 0.5) / Math.max(1e-6, Math.tan(u * pf * 0.5)), g = ic(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const sh = 0.28;
function sy(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), r = j(Number(e.y0 ?? 0), 0, 1), a = j(Number(e.x1 ?? 1), 0, 1), s = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function cy(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", a = n || (r ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, u = t.visible === !1, f = s && r && u;
  return {
    id: String(t.id || ""),
    assetId: a,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: j(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: j(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: sy(t.crop),
    opacity: f ? sh : j(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function ds(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => cy(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function ch(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || ds(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var E;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const _ = g ? a[g] : null, p = e(y, _, f);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const M = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), P = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || M <= 0 || P <= 0 || (u.add(y), s.push({
      assetId: y,
      source: p,
      revision: String(((E = n.revisionFor) == null ? void 0 : E.call(n, y, _, p)) ?? [
        y,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), s;
}
function al(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: j(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function ly(t, e = 360) {
  return al(t, e);
}
function uy(t) {
  const e = oy(t || {});
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
const { app: ce } = yo;
function Mc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (yo == null ? void 0 : yo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const zr = Math.PI / 180, zo = {}, fy = { Nu: 24, Nv: 14 }, dy = 10, hy = 120;
function py() {
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
function gy() {
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
function Mr(t) {
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
function my(t) {
  const e = Mr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function lh(t, e, n) {
  my(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function kc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function uh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function yy(t) {
  return Nc(uh(t));
}
function Vr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = ce == null ? void 0 : ce.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function fh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Vr(e)
  };
}
const ca = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Vr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Vr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, dh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function dh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : fh(r, t).chosenPath, s = kc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && wi(t, { keepMonitor: r === "stickers" }), ib(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = kc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      wi(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      wi(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function by(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function wi(t, e = {}) {
  var r, a, s, u, f;
  if (!t) return;
  jo.unregister(t), by(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
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
      const y = String((g == null ? void 0 : g.name) || ""), _ = String((g == null ? void 0 : g.type) || ""), p = Mc();
      return !(y === p || _ === p || y === "pano_preview" || _ === "pano_preview" || y === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || ca.unregister(t);
}
function Hr(t, e, n) {
  return { x: t, y: e, z: n };
}
function gf(t, e) {
  return Hr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function to(t, e) {
  return Hr(t.x * e, t.y * e, t.z * e);
}
function ac(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function mf(t, e) {
  return Hr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function eo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Hr(t.x / e, t.y / e, t.z / e);
}
function Tr(t, e) {
  const n = t * zr, r = e * zr, a = Math.cos(r);
  return Hr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ol(t, e, n = 0) {
  const r = Tr(t, e), a = Hr(0, 1, 0);
  let s = mf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Hr(1, 0, 0)), s = eo(s);
  let u = eo(mf(r, s));
  const f = n * zr, g = Math.cos(f), y = Math.sin(f), _ = gf(to(s, g), to(u, y)), p = gf(to(s, -y), to(u, g));
  return { fwd: r, right: eo(_), up: eo(p) };
}
function vy(t, e = "#00ff00") {
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
function _y(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = _a(t, "state_json")) == null ? void 0 : n.value) || "");
}
function sl(t) {
  var u, f;
  const e = _y(t), n = String(((u = _a(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = _a(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = vy(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function _a(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function yf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function hh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function wy(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function ph(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function gh(t, e, n = null) {
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
  return !r && n != null && (r = wy(t == null ? void 0 : t.graph, n)), r;
}
function xy(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function cl(t, e = []) {
  const n = xy(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function bf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Ho(t, e) {
  const n = bf(t), r = bf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Sy(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = cl(t, e).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const _ = gh(t, y);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const p = (g = n[y]) == null ? void 0 : g.link;
    if (p == null) continue;
    const M = hh(t == null ? void 0 : t.graph, p), { originId: P } = ph(M);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const jo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Xe) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, g, y, _, p;
        if (!s) return;
        Ho(r, s == null ? void 0 : s.id), Sy(s, ["erp_image", "bg_erp"]).some((M) => Ho(r, M)), Ac(s), (g = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (p = (_ = s.graph) == null ? void 0 : _.setDirtyCanvas) == null || p.call(_, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Xe.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Xe) != null && t.removeEventListener) || (Xe.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function Uo(t) {
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
  return typeof ((s = Xe) == null ? void 0 : s.apiURL) == "function" ? Xe.apiURL(a) : a;
}
function Ny(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function My(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function ky(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function mh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Ny(e)) return [e];
  const { filename: n, subfolder: r } = My(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => Uo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return ky([...a, e]);
}
function Py(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? Uo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Pc(t) {
  const e = ce == null ? void 0 : ce.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Ho(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const u of s)
      if (Ho(u, a)) return e[u];
  }
  return null;
}
function Un(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Un(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return Uo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Un(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Uo(t);
}
function yh(t, e) {
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
function Ay(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function Cy(t, e) {
  try {
    const n = Ay(e);
    let r = "";
    for (const a of n)
      if (r = Un(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), yh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function Iy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = Pc(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const O of f)
    if (g = Un(O), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), p = mh(g).map((O) => yh(O, y));
  if (!p.length) return null;
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
    t.__panoOwnOutputImageCache === P && P.pendingImg === E && P.pendingSrc === M && (P.src = M, P.img = E, P.pendingSrc = "", P.pendingImg = null), e == null || e(), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0);
  }, E.onerror = () => {
    if (I + 1 >= p.length) {
      t.__panoOwnOutputImageCache === P && P.pendingImg === E && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    A();
  }, P.pendingSrc = M, P.pendingImg = E, A(), P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : E;
}
function Ey(t, e = []) {
  var y, _;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = cl(t, e).map((p) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(p))).filter((p) => p >= 0), s = n.map((p, M) => ({ input: p, idx: M })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const p of u) {
    const M = n[p], P = M == null ? void 0 : M.link;
    if (P == null) continue;
    const E = hh(t.graph, P), { originId: I, originSlot: A } = ph(E);
    if (I == null) continue;
    const O = gh(t, p, I);
    if (!O) continue;
    const R = Number(A || 0), C = Pc((O == null ? void 0 : O.id) ?? I), T = Array.isArray(C == null ? void 0 : C.images) ? C.images : [];
    if (T.length) {
      const J = [];
      R >= 0 && R < T.length && J.push(T[R]), J.push(...T);
      for (const Ct of J) {
        const z = Un(Ct);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let q = [];
    try {
      q = typeof (ce == null ? void 0 : ce.getNodeImageUrls) == "function" ? ce.getNodeImageUrls(O) || [] : [];
    } catch {
      q = [];
    }
    if (Array.isArray(q) && q.length) {
      const J = [];
      R >= 0 && R < q.length && J.push(q[R]), J.push(...q);
      for (const Ct of J) {
        const z = Un(Ct);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const L = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (L.length) {
      const J = [];
      R >= 0 && R < L.length && J.push(L[R]), J.push(...L);
      for (const Ct of J) {
        const z = Un(Ct);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const dt = (y = O == null ? void 0 : O.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (dt) {
      let J = Un(dt.value);
      if (J && !J.includes("/") && !J.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (J = Xe.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((M == null ? void 0 : M.name) || ""), { src: J, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = Pc(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const p of g) {
      const M = Un(p);
      if (M)
        return { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Dy(t, e = []) {
  const n = Ey(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = mh(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const _ = () => {
    var M, P;
    if (y += 1, y >= a.length) {
      try {
        (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
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
    var M, P;
    if (y + 1 < a.length) {
      _();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
    } catch {
    }
    String(g.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((p == null ? void 0 : p.type) || "error");
  }, _(), f;
}
function Bo(t, e = [], n = null) {
  const r = Dy(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Ac(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function bh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ir(t, e, n = "") {
  const r = bh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < hy ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Cc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function vf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = r + (s - g) * 0.5, p = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(_, p, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", _ + g * 0.5, p + y * 0.5 + 0.5), t.restore();
}
function no(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function Ty(t) {
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
function vh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function Ry(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = vh(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Ly(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = Mr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Po(t) {
  const n = Ly(t) + 2, r = 8, a = Mr(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function _h(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Py(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, _;
    (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function Oy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function wh(t, e) {
  return ds(e, {
    selectedId: null,
    hoveredId: null
  });
}
function xh(t, e, n) {
  return ch(e, (r, a) => _h(t, r, a), { scene: n });
}
function Fy(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, _ = Math.hypot(g, y) || 1;
    return { x: f.x + g / _ * r, y: f.y + y / _ * r };
  };
  return [u(t), u(e), u(n)];
}
function _f(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, _, p] = Fy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(_.x, _.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const M = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, P = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, E = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, I = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, A = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, O = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(M, I, P, A, E, O), t.drawImage(e, 0, 0), t.restore();
}
function Sh(t, e, n, r) {
  const a = ac(t, e.right), s = ac(t, e.up), u = ac(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Nh(t, e, n, r, a, s, u, f = 12, g = 9) {
  var yt;
  const y = j(Number(u.hFOV_deg || 30), 1, 179) * zr, _ = j(Number(u.vFOV_deg || 30), 1, 179) * zr, p = Math.tan(y * 0.5), M = Math.tan(_ * 0.5), P = u.crop || {}, E = j(Number(P.x0 ?? 0), 0, 1), I = j(Number(P.y0 ?? 0), 0, 1), A = j(Number(P.x1 ?? 1), 0, 1), O = j(Number(P.y1 ?? 1), 0, 1), R = Math.max(1e-4, A - E), C = Math.max(1e-4, O - I), T = ol(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), q = [], L = [], dt = [], J = [];
  for (let Z = 0; Z <= g; Z++) {
    const ot = Z / g, Y = (1 - (I + ot * C) * 2) * M;
    for (let ut = 0; ut <= f; ut++) {
      const Nt = ut / f, Mt = ((E + Nt * R) * 2 - 1) * p, ee = T.fwd.x + T.right.x * Mt + T.up.x * Y, Se = T.fwd.y + T.right.y * Mt + T.up.y * Y, He = T.fwd.z + T.right.z * Mt + T.up.z * Y, Ne = Math.hypot(ee, Se, He) || 1e-8, je = ee / Ne, Ae = Se / Ne, nn = He / Ne, rn = je * r.right.x + Ae * r.right.y + nn * r.right.z, gn = je * r.up.x + Ae * r.up.y + nn * r.up.z, x = je * r.fwd.x + Ae * r.fwd.y + nn * r.fwd.z;
      if (x <= 1e-4)
        q[Z] || (q[Z] = []), L[Z] || (L[Z] = []), q[Z][ut] = null, L[Z][ut] = null;
      else {
        const D = gn / x / a, $ = rn / x / a;
        q[Z] || (q[Z] = []), L[Z] || (L[Z] = []), q[Z][ut] = n.x + n.w * 0.5 + $ * n.h * 0.5, L[Z][ut] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      dt[Z] || (dt[Z] = []), J[Z] || (J[Z] = []), dt[Z][ut] = Nt, J[Z][ut] = ot;
    }
  }
  const Ct = (yt = s.assets) == null ? void 0 : yt[u.asset_id], z = _h(e, u.asset_id, Ct);
  if (!z || !z.complete || !z.naturalWidth) return;
  const ct = Number(z.naturalWidth || z.width || 1), rt = Number(z.naturalHeight || z.height || 1), wt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = wt;
  for (let Z = 0; Z < g; Z++)
    for (let ot = 0; ot < f; ot++) {
      const lt = q[Z][ot], Y = L[Z][ot], ut = q[Z][ot + 1], Nt = L[Z][ot + 1], Et = q[Z + 1][ot], Mt = L[Z + 1][ot], ee = q[Z + 1][ot + 1], Se = L[Z + 1][ot + 1];
      if (lt === null || ut === null || Et === null || ee === null) continue;
      const He = dt[Z][ot] * ct, Ne = J[Z][ot] * rt, je = dt[Z][ot + 1] * ct, Ae = J[Z][ot + 1] * rt, nn = dt[Z + 1][ot] * ct, rn = J[Z + 1][ot] * rt, gn = dt[Z + 1][ot + 1] * ct, x = J[Z + 1][ot + 1] * rt;
      _f(t, z, { x: He, y: Ne }, { x: je, y: Ae }, { x: gn, y: x }, { x: lt, y: Y }, { x: ut, y: Nt }, { x: ee, y: Se }), _f(t, z, { x: He, y: Ne }, { x: gn, y: x }, { x: nn, y: rn }, { x: lt, y: Y }, { x: ee, y: Se }, { x: Et, y: Mt });
    }
}
function $y(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = sl(t), a = Po(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = ol(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * zr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Bo(
    t,
    cl(t, ["erp_image", "bg_erp"]),
    () => {
      var T, q, L;
      (q = (T = t.__panoDomPreview) == null ? void 0 : T.requestDraw) == null || q.call(T), (L = t.setDirtyCanvas) == null || L.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = Ph(t), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = y || _, M = zo, P = wh(t, r), E = xh(t, r, P), I = al(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let A = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Na()), g) {
    const T = us({
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
  const O = p ? 8 : 12, R = p ? 6 : 9, C = Oy(t, r);
  if (!g || C.length === 0) {
    const T = Cc(e == null ? void 0 : e.canvas, a);
    Mh(e, a, s, u, T);
  }
  !A && g && Go(t, e, a, s, u, f, M), !A && C.length > 0 && C.forEach((T) => Nh(e, t, a, s, u, r, T, O, R)), e.restore();
}
function Vy(t, e, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return us({
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
function Ao(t, e, n, r) {
  var s, u, f, g, y, _;
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
      y: Number(e.canvasY) - Number(((_ = t == null ? void 0 : t.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = Hy(t, e, r);
  return a || null;
}
function zy(t, e) {
  var p, M;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a), u = (e == null ? void 0 : e.ds) || ((M = ce == null ? void 0 : ce.canvas) == null ? void 0 : M.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), _ = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function Hy(t, e, n) {
  var a, s;
  const r = zy(e, n || (ce == null ? void 0 : ce.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function ro(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), Mr(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", lh(t, 320, 180), ui(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, P;
    const p = e ? e.apply(this, arguments) : void 0;
    try {
      const E = arguments[0];
      E && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), $y(this, E, r));
    } catch {
    }
    return p;
  }, t.onResize = function() {
    var M;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ko(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Ah(this, 220, null), p;
  };
  const r = fs({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (p) => {
      t.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = Po(t);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      kh(t), (p = t.setDirtyCanvas) == null || p.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(p, M, P) {
    var E;
    try {
      if (!((E = this.flags) != null && E.collapsed)) {
        const I = Ao(this, p, M, P) || { x: 0, y: 0 }, A = Mr(this), O = Number((A == null ? void 0 : A[0]) || 0), R = Number((A == null ? void 0 : A[1]) || 0);
        if (I.x >= O - 20 && I.y >= R - 20)
          return a ? a.apply(this, arguments) : void 0;
        const T = Po(this);
        if (yf(I.x, I.y, T))
          return (p == null ? void 0 : p.button) === 0 && r.startDrag(I.x, I.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(p, M, P) {
    try {
      const E = Ao(this, p, M, P);
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
  t.onMouseWheel = function(p, M, P) {
    var E, I;
    try {
      if ((E = this.flags) != null && E.collapsed) return g ? g.apply(this, arguments) : void 0;
      const A = Ao(this, p, M, P), O = Po(this);
      if (!A || !yf(A.x, A.y, O)) return g ? g.apply(this, arguments) : void 0;
      const R = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign(R)) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, _ = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = _, t.onRemoved = function() {
    return _(), ca.unregister(this), jo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function jy(t, e) {
  const n = Bo(
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
function Uy(t, e) {
  var y, _, p, M, P, E, I, A, O, R, C, T;
  const n = (_ = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, r = (M = (p = e == null ? void 0 : e.painting) == null ? void 0 : p.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = jy(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Sc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
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
function By(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Gy(t, e) {
  const n = Uy(t, e);
  if (!n) return null;
  const r = By(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Ky(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = Un(r);
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
function wf(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Ky(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Gy(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Wy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function qy(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function Yy(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const u = Wy(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = qy(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, _ = e.getImageData(0, 0, r, a), p = _.data, M = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let E = 0; E < a; E += 1) {
      const I = (E + 0.5) * u.height / a - 0.5, A = j(Math.floor(I), 0, P), O = j(A + 1, 0, P), R = j(I - A, 0, 1);
      for (let C = 0; C < r; C += 1) {
        const T = (C + 0.5) * u.width / r - 0.5, q = j(Math.floor(T), 0, M), L = j(q + 1, 0, M), dt = j(T - q, 0, 1);
        let J = 0, Ct = 0, z = 0, ct = 0;
        const rt = (Z, ot, lt) => {
          const Y = (ot * u.width + Z) * 4, ut = (y[Y + 3] || 0) / 255;
          J += ut * lt, Ct += (y[Y] || 0) / 255 * ut * lt, z += (y[Y + 1] || 0) / 255 * ut * lt, ct += (y[Y + 2] || 0) / 255 * ut * lt;
        };
        if (rt(q, A, (1 - dt) * (1 - R)), rt(L, A, dt * (1 - R)), rt(q, O, (1 - dt) * R), rt(L, O, dt * R), J <= 1e-6) continue;
        const wt = (E * r + C) * 4, yt = 1 - J;
        p[wt] = Math.round(j((Ct + p[wt] / 255 * yt) * 255, 0, 255)), p[wt + 1] = Math.round(j((z + p[wt + 1] / 255 * yt) * 255, 0, 255)), p[wt + 2] = Math.round(j((ct + p[wt + 2] / 255 * yt) * 255, 0, 255)), p[wt + 3] = 255;
      }
    }
    e.putImageData(_, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function xf(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), Yy(t, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Xy(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  bh(t, a);
  const s = sl(t), u = a === "cutout" ? Iy(t, () => {
    var I, A;
    return (A = (I = t.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : A.call(I);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, _ = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), p = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(_ * y)), P = Math.max(64, Math.round(p * y)), E = e.getContext("2d");
  if (E)
    if (a === "cutout") {
      const I = Ty(s), A = Bo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var ct, rt;
          return (rt = (ct = t.__panoDomPreview) == null ? void 0 : ct.requestDraw) == null ? void 0 : rt.call(ct);
        }
      ), O = !!(A && A.complete && (A.naturalWidth || A.width));
      (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const R = { x: 0, y: 0, w: M, h: P }, C = f ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : O ? j(Number((A.naturalWidth || A.width) / Math.max(1, Number(A.naturalHeight || A.height || 1))), 0.05, 20) : 1, T = I ? uy(I) : null, q = j(Number((T == null ? void 0 : T.aspect) || C || 1), 0.05, 20), L = vh(R, q), dt = Cc(e, R);
      E.setTransform(1, 0, 0, 1, 0, 0), E.fillStyle = "#070707", E.fillRect(0, 0, M, P);
      let J = "none", Ct = "Open editor and add frame", z = "";
      if (f)
        E.drawImage(u, L.x, L.y, L.w, L.h);
      else if (z = String((A == null ? void 0 : A.src) || ""), I)
        A && !O ? J = "loading" : O ? (J = "empty", Ct = "Open editor or run node") : (J = "empty", Ct = "Connect ERP image");
      else {
        if (O) {
          const ct = wf(t, s), rt = ct != null && ct.source ? xf(t, A, ct.source, ct.revision || "") : A;
          Ry(E, rt, R, 0.44);
        }
        J = "empty", Ct = "Open editor and add frame";
      }
      J === "loading" ? (vf(E, L, dt), no(t, !1), Ir(t, !0, z)) : J === "empty" ? (no(t, !0, Ct), Ir(t, !1, "")) : (no(t, !1), Ir(t, !1, ""));
    } else {
      no(t, !1), (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const I = { x: 0, y: 0, w: M, h: P }, A = Cc(e, I);
      E.setTransform(1, 0, 0, 1, 0, 0), E.clearRect(0, 0, M, P), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = ol(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), R = Math.tan(Number(t.__panoPreviewView.fov || 100) * zr * 0.5), C = Bo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var yt, Z;
          return (Z = (yt = t.__panoDomPreview) == null ? void 0 : yt.requestDraw) == null ? void 0 : Z.call(yt);
        }
      ), T = !!(C && C.complete && (C.naturalWidth || C.width));
      E.fillStyle = "#1a1a1e", E.fillRect(0, 0, M, P);
      const q = wh(t, s), L = xh(t, s, q), dt = al(t.__panoPreviewView, s == null ? void 0 : s.coverage), J = wf(t, s), Ct = (J == null ? void 0 : J.source) || null, z = T && Ct ? xf(t, C, Ct, (J == null ? void 0 : J.revision) || "") : C, ct = z !== C ? String(z.__revKey || "") : C ? [
        String(C.currentSrc || C.src || ""),
        Number(C.naturalWidth || C.width || 0),
        Number(C.naturalHeight || C.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Na());
      let rt = !1;
      if (T) {
        const Z = t.__panoDomRuntimeCore.syncState(
          Vy(z, s, q, L, "runtime_dom_scene", ct)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", dt, {
          width: I.w,
          height: I.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        Z && (E.drawImage(Z, I.x, I.y, I.w, I.h), rt = !0);
      }
      const wt = q.stickers;
      if (T && rt)
        Ir(t, !1, "");
      else if (T)
        Go(t, E, I, O, R, z, zo), Ir(t, !1, "");
      else if (Ct)
        Go(t, E, I, O, R, Ct, zo), Ir(t, !!C && !T, String((C == null ? void 0 : C.src) || ""));
      else {
        const yt = !!C && !T;
        Ir(t, yt, String((C == null ? void 0 : C.src) || "")), yt && vf(E, I, A);
      }
      if ((!T || wt.length === 0) && Mh(E, I, O, R, A), !rt && wt.length > 0) {
        const yt = Ph(t), Z = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, ot = yt || Z, lt = ot ? 8 : 12, Y = ot ? 6 : 9;
        wt.forEach((ut) => Nh(E, t, I, O, R, s, ut, lt, Y));
      } else if (!C || !T) {
        const yt = Math.max(14, Math.round(16 * A));
        E.fillStyle = "rgba(212,212,216,0.85)", E.font = `600 ${yt}px Plus Jakarta Sans, Geist, sans-serif`, E.textAlign = "center", E.fillText("Open editor to add stickers", M * 0.5, P * 0.5 + 24 * A);
      }
    }
}
function Go(t, e, n, r, a, s, u = fy) {
  const f = sl(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Na());
  const y = us({
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
function Sf(t, e, n, r, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const y = Sh(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Mh(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let p = -180; p <= 180; p += 15) _.push(Tr(p, y));
    Sf(t, _, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let p = -89; p <= 89; p += 15) _.push(Tr(y, p));
    Sf(t, _, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Tr(0, 0) },
    { name: "Right", dir: Tr(90, 0) },
    { name: "Back", dir: Tr(180, 0) },
    { name: "Left", dir: Tr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const _ = Sh(y.dir, n, e, r);
    _ && t.fillText(y.name, _.x, _.y + 20 * a);
  }), t.restore();
}
function Zy(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function kh(t) {
  const e = Zy(t);
  e.dragging = !1, e.hqFrames = dy;
}
function Ko(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Ph(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function Jy(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function Qy(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function ii(t, e) {
  return Qy(t, e) ? !1 : (Jy(t), !0);
}
function tb() {
  var n;
  const t = (n = ce == null ? void 0 : ce.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function eb(t) {
  var n;
  if (!t) return;
  const e = (n = ce == null ? void 0 : ce.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function nb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Mr(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function rb(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Nf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, Ko(t, 150), e == null || e(), Ah(t, 180, e);
    }
  };
}
function Ah(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function ui(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function ib(t, e = {}) {
  var lt;
  const n = e.__allowStandalone === !0, r = yy(t);
  if (r && !n) {
    uh(t);
    return;
  }
  r && nb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", jo.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || ca.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), g = a ? fh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Vr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", _ = g.signature || Vr(t);
  if (Number(t.__panoRebindGeneration || 0), kc(t), t == null || t.id, t.__panoPreviewMode, g.reason, g.frontendVersionRaw, t.addDOMWidget, Mr(t), t.__panoFrontendSig = _, t.__panoStickersPath = y, a && ca.register(t), a && y === "legacy_draw") {
    if (s) return;
    wi(t, { keepMonitor: !0 }), ro(t);
    return;
  }
  if ((lt = t.__panoDomPreview) != null && lt.widget) return;
  if (t.__panoLegacyPreviewHooked && wi(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && ro(t);
    return;
  }
  const p = e.noPreview === !0, M = a || p ? 0 : 56, P = document.createElement("div");
  if (gy(), P.className = "pano-node-preview-dom", P.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && P.classList.add("pano-node-preview--no-preview"), P.setAttribute("data-capture-wheel", "true"), P.setAttribute("tabindex", "-1"), P.style.cssText = [
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
    const Y = t.addDOMWidget(Mc(), "preview", P, Nf(t, null));
    ui(t), t.__panoDomPreview = { widget: Y, root: P, requestDraw: () => {
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
  ].join(";"), A.textContent = "Open editor and add frame", E.appendChild(I), E.appendChild(A), P.appendChild(E), lh(t, 120, 120), ui(t);
  let O = null;
  try {
    rb(t, M, () => {
      var Y, ut;
      return (ut = (Y = t.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : ut.call(Y);
    }), O = t.addDOMWidget(
      Mc(),
      "preview",
      P,
      Nf(t, () => {
        var Y, ut;
        return (ut = (Y = t.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : ut.call(Y);
      }, M)
    );
  } catch {
    a && ro(t);
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
    Ko(t, 150), C();
  }) : null;
  T == null || T.observe(E);
  const q = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const Y = 3, ut = (Nt) => {
      requestAnimationFrame(() => {
        var Mt;
        const Et = !!(P != null && P.isConnected && (E != null && E.isConnected) && (I != null && I.isConnected) && Number(E.clientHeight || 0) > 0 && Number(I.clientHeight || 0) > 0);
        if (!Et && Nt < Y) {
          ut(Nt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0), !Et) {
          if (s) {
            t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0);
            return;
          }
          wi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ro(t), (Mt = t.setDirtyCanvas) == null || Mt.call(t, !0, !0);
        }
      });
    };
    ut(1);
  }, L = (Y) => {
    var Nt, Et, Mt;
    R.raf = 0;
    const ut = dt.stepInertia(Y);
    (R.needsDraw || ut) && (R.needsDraw = !1, (Nt = t.flags) != null && Nt.collapsed || Xy(t, I, null, dt), (Et = t.setDirtyCanvas) == null || Et.call(t, !0, !1)), (ut || R.needsDraw) && (R.raf = requestAnimationFrame(L)), py() && (!t.__panoDebugLastTs || Y - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = Y, t.__panoPreviewMode, Mr(t), qi(P), qi(E), qi(I), qi(P.parentElement), qi((Mt = P.parentElement) == null ? void 0 : Mt.parentElement), Number(I.width || 0), Number(I.height || 0), void 0);
  }, dt = fs({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (Y) => {
      t.__panoPreviewView = Y;
    },
    onInteraction: () => {
      C();
    }
  });
  I.addEventListener("pointerdown", (Y) => {
    var ut, Nt;
    ii(Y, E) && u && Y.button === 0 && ((ut = P.focus) == null || ut.call(P), (Nt = I.setPointerCapture) == null || Nt.call(I, Y.pointerId), I.style.cursor = "grabbing", dt.startDrag(Y.clientX, Y.clientY, Y.pointerId));
  }), I.addEventListener("pointermove", (Y) => {
    !u || !dt.state.drag.active || (ii(Y, E), dt.moveDrag(Y.clientX, Y.clientY, "pano"));
  });
  const J = (Y) => {
    var ut;
    !u || !dt.state.drag.active || (ii(Y, E), (ut = I.releasePointerCapture) == null || ut.call(I, Y.pointerId), I.style.cursor = "grab", dt.endDrag(), kh(t), C());
  };
  I.addEventListener("pointerup", J), I.addEventListener("pointercancel", J), I.addEventListener("pointerleave", (Y) => {
    dt.state.drag.active && J(Y);
  });
  const Ct = (Y) => {
    var Nt, Et, Mt;
    if (!ii(Y, E) || !u) return;
    const ut = tb();
    dt.applyWheelEvent(Y) && C(), (Nt = Y.preventDefault) == null || Nt.call(Y), (Et = Y.stopPropagation) == null || Et.call(Y), (Mt = Y.stopImmediatePropagation) == null || Mt.call(Y), requestAnimationFrame(() => {
      var ee, Se;
      eb(ut), (Se = (ee = ce == null ? void 0 : ce.canvas) == null ? void 0 : ee.setDirty) == null || Se.call(ee, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((Y) => {
    E.addEventListener(Y, Ct, { passive: !1, capture: !0 }), I.addEventListener(Y, Ct, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((Y) => {
    I.addEventListener(Y, (ut) => ii(ut, E)), E.addEventListener(Y, (ut) => ii(ut, E));
  });
  const z = _a(t, "state_json");
  if (z && !z.__panoPreviewPatchedCb) {
    z.__panoPreviewPatchedCb = !0;
    const Y = z.callback;
    z.callback = (ut) => {
      const Nt = Y ? Y(ut) : void 0;
      return C(), Nt;
    };
  }
  const ct = _a(t, "bg_color");
  if (ct && !ct.__panoPreviewPatchedCb) {
    ct.__panoPreviewPatchedCb = !0;
    const Y = ct.callback;
    ct.callback = (ut) => {
      const Nt = Y ? Y(ut) : void 0;
      return C(), Nt;
    };
  }
  const rt = t.onRemoved, wt = t.onResize, yt = t.onExecuted;
  t.onExecuted = function(Y) {
    Cy(t, Y), Ac(t), ui(t), C();
    const ut = yt ? yt.apply(this, arguments) : void 0;
    return ui(t), ut;
  };
  const Z = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Ac(t), ui(t), C(), Z ? Z.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var ut;
    const Y = wt ? wt.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ko(this, 150), C(), (ut = this.setDirtyCanvas) == null || ut.call(this, !0, !1), Y;
  }, t.onRemoved = function() {
    return ot(), ca.unregister(this), jo.unregister(this), rt ? rt.apply(this, arguments) : void 0;
  };
  const ot = () => {
    var Y;
    R.raf && cancelAnimationFrame(R.raf), (Y = T == null ? void 0 : T.disconnect) == null || Y.call(T), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = wt, t.onExecuted = yt, t.onConnectionsChange = Z, t.onRemoved = rt;
  };
  t.__panoDomRestore = ot, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: O, root: P, canvas: I, requestDraw: C, state: R, emptyHintEl: A }, q(), C();
}
function Mf(t, e = {}) {
  dh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const Wo = Math.PI / 180;
function jr(t, e, n) {
  return { x: t, y: e, z: n };
}
function kf(t, e) {
  return jr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function io(t, e) {
  return jr(t.x * e, t.y * e, t.z * e);
}
function Pf(t, e) {
  return jr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ao(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return jr(t.x / e, t.y / e, t.z / e);
}
function ab(t, e) {
  const n = t * Wo, r = e * Wo, a = Math.cos(r);
  return jr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ob(t, e, n = 0) {
  const r = ab(t, e), a = jr(0, 1, 0);
  let s = Pf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = jr(1, 0, 0)), s = ao(s);
  const u = ao(Pf(r, s)), f = n * Wo, g = Math.cos(f), y = Math.sin(f), _ = kf(io(s, g), io(u, y)), p = kf(io(s, -y), io(u, g));
  return { fwd: r, right: ao(_), up: ao(p) };
}
const oo = 140, sb = 180, Af = 40, oc = 10;
function Cf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function If(t, e) {
  const n = Cf(t), r = Cf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ef(t) {
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
  return typeof ((s = Xe) == null ? void 0 : s.apiURL) == "function" ? Xe.apiURL(a) : a;
}
function la(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return la(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Ef({
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
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Ef(t);
}
function Df(t) {
  var a;
  const e = (a = hn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (If(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (If(s, n)) return e[s];
  return null;
}
function cb(t, e = "erp_image") {
  var E, I, A, O, R, C, T, q, L, dt, J, Ct;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((z) => String((z == null ? void 0 : z.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const z = n.find((ct) => String((ct == null ? void 0 : ct.type) || "").toUpperCase() === "IMAGE" && (ct == null ? void 0 : ct.link) != null);
    (z == null ? void 0 : z.link) != null && (r = z.link);
  }
  if (r == null) return "";
  const s = ((I = (E = t == null ? void 0 : t.graph) == null ? void 0 : E.links) == null ? void 0 : I[r]) || ((R = (O = (A = hn) == null ? void 0 : A.graph) == null ? void 0 : O.links) == null ? void 0 : R[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (q = (T = (C = hn) == null ? void 0 : C.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : q.call(T, u), g = Df(u), y = Df(t == null ? void 0 : t.id), _ = [
    g == null ? void 0 : g.images,
    (L = g == null ? void 0 : g.ui) == null ? void 0 : L.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (dt = y == null ? void 0 : y.ui) == null ? void 0 : dt.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const z of _)
    if (Array.isArray(z))
      for (const ct of z) {
        const rt = la(ct);
        if (rt) return rt;
      }
  let p = [];
  try {
    p = typeof ((J = hn) == null ? void 0 : J.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(f) || [] : [];
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
      const rt = la(ct);
      if (rt) return rt;
    }
  }
  const M = (Ct = f == null ? void 0 : f.widgets) == null ? void 0 : Ct.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), P = String((M == null ? void 0 : M.value) || "").trim();
  return P ? Xe.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function Tf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Rf(t, e, n, r, a, s) {
  var p, M, P;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Tf(e, n, r);
    return;
  }
  const u = ob(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Wo * 0.5), g = Number(((P = (M = (p = t == null ? void 0 : t.widgets) == null ? void 0 : p.find) == null ? void 0 : M.call(p, (E) => (E == null ? void 0 : E.name) === "coverage")) == null ? void 0 : P.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Na());
  const y = us({
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
    scene: ds(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const E = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      ly(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return E ? (e.drawImage(E, 0, 0, n, r), !0) : !1;
  })() || (Go(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, zo), Tf(e, n, r));
}
function Lf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class lb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = fs({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: qe(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: j(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: j(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${oo}px`,
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
          return oo;
        },
        getHeight() {
          return oo;
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
            minHeight: Math.max(oo, Number(s.minHeight || 0)),
            minWidth: Math.max(sb, Number(s.minWidth || 0))
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
      return Lf(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, _, p, M, P, E;
      const s = Ao(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !Lf(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((_ = e.view) == null ? void 0 : _.fov) || 100), g && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (P = n == null ? void 0 : n.stopPropagation) == null || P.call(n), (E = n == null ? void 0 : n.stopImmediatePropagation) == null || E.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - oc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - Af - oc);
    return { x: oc, y: Af, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Rf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = cb(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Rf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, r, a, s, u, f, g, y, _, p, M;
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
    const e = ((_ = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : _.call(y, (P) => (P == null ? void 0 : P.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (M = (p = this.node.__panoStandaloneCore) == null ? void 0 : p.dispose) == null || M.call(p), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function ub(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new lb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function fb(t, e, n) {
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
function Ch(t) {
  return !!(t != null && t.prototype);
}
function Ic(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function db(t, e = {}) {
  Ch(t) || ub(t, {
    ...e,
    onOpen: Ic(t, e.onOpen)
  });
}
function hb(t, e = {}) {
  if (!Ch(t)) {
    Mf(t, {
      ...e,
      onOpen: Ic(t, e.onOpen)
    });
    return;
  }
  fb(t, "cutout_preview", (n) => {
    Mf(n, {
      ...e,
      onOpen: Ic(n, e.onOpen)
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
}, er = "pen";
function Of(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function pb(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((p) => {
      r.push(String(p || ""));
    }), !r.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, _)) : a = r.length - 1;
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
      const y = r.length, _ = Math.max(0, y - u), p = a >= 0 ? Math.max(0, Math.min(a, _)) : _, M = r.slice(p, p + u), P = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - p));
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
function gb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function mb(t) {
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
function yb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function bb(t, e) {
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
function so(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = bb(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function vb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = so(t.points, e, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = so(t.points, e, 1);
  if (!s) return null;
  const u = so(t.rawPoints, e, 1), f = so(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function _b(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = yb(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = vb(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = Zt(t.size, null), u = Zt(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = Zt(t.radiusValue, null), _ = String(t.radiusModel || "").trim() || null;
  let p = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    p = {
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
    color: p,
    radiusModel: _,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Ff(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = _b(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function wb(t) {
  if (!t || typeof t != "object") return null;
  const e = Zt(t.u0, null), n = Zt(t.v0, null), r = Zt(t.u1, null), a = Zt(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function xb(t) {
  const e = t || {};
  return {
    du: Zt(e.du, 0) ?? 0,
    dv: Zt(e.dv, 0) ?? 0,
    rot_deg: Zt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Zt(e.scale, 1) ?? 1)
  };
}
function Sb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = wb(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Zt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: xb(t.transform)
  } : null;
}
function Nb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = Sb(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function ua(t) {
  const e = gb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: mb(t.groups),
    paint: Ff(t.paint, "paint"),
    mask: Ff(t.mask, "mask"),
    raster_objects: Nb(t.raster_objects)
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
}, qo = {
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
    const e = t, n = vi(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (ge(), Mi(tm(t.tag), Qd({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Mb = { class: "pano-floating-right" }, kb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Ee("div", Mb, [
      n[0] || (n[0] = _e("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (ge(!0), Ee(Fe, null, yi(t.buttons, (r) => (ge(), Mi(qo, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Pb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Ab = ["data-paint-pane"], Cb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Ib = ["data-paint-color-swatch", "aria-label"], Eb = ["data-paint-footer"], Db = ["data-paint-group"], Tb = ["hidden"], Rb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (ge(), Ee("div", Pb, [
      (ge(!0), Ee(Fe, null, yi(t.panes, (a) => (ge(), Ee("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (ge(), Ee("div", Cb, [
          (ge(!0), Ee(Fe, null, yi(t.paintSwatches, (s) => (ge(), Ee("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: rs(e(s))
          }, null, 12, Ib))), 128)),
          r[0] || (r[0] = Jd('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : xo("", !0),
        _e("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          _e("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (ge(!0), Ee(Fe, null, yi(a.tools, (s) => (ge(), Mi(qo, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Db),
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
            hidden: a.clearHidden
          }, [
            Ze(qo, {
              icon: Wc(Qt).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Tb)
        ], 8, Eb)
      ], 8, Ab))), 128))
    ]));
  }
}, Lb = {
  class: "pano-side",
  "data-side": ""
}, Ob = { class: "pano-side-head" }, Fb = ["innerHTML"], $b = {
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
    const r = vi(() => `<span class="pano-side-title-icon" aria-hidden="true">${Qt.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (ge(), Ee("div", Lb, [
      _e("div", Ob, [
        _e("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Fb),
        s[0] || (s[0] = _e("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = _e("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Vb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, zb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Ee("div", Vb, [
      (ge(!0), Ee(Fe, null, yi(t.buttons, (r) => (ge(), Mi(qo, {
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
}, Hb = { class: "pano-floating-top" }, jb = ["data-view-count"], Ub = ["data-view", "aria-pressed", "aria-label"], Bb = ["innerHTML"], Gb = { class: "label" }, Kb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Ee("div", Hb, [
      _e("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (ge(!0), Ee(Fe, null, yi(t.buttons, (r) => (ge(), Ee("button", {
          key: r.key,
          class: is(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          _e("span", {
            innerHTML: r.icon
          }, null, 8, Bb),
          _e("span", Gb, td(r.label), 1)
        ], 10, Ub))), 128))
      ], 8, jb)
    ]));
  }
};
function Ih(t = "stickers") {
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
const Wb = ["aria-label"], qb = { class: "pano-stage-wrap" }, Yb = ["innerHTML"], Xb = {
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
    const f = /* @__PURE__ */ N0(null), g = vi(() => n.readOnly === !0), y = vi(() => n.shellPreset || Ih(n.type)), _ = vi(() => {
      var C;
      const R = Array.isArray((C = y.value) == null ? void 0 : C.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && R.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Qt.fullscreen
      }), R;
    });
    function p() {
      const R = f.value;
      return R ? Array.from(R.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function M() {
      var T;
      const C = p()[0] || f.value;
      (T = C == null ? void 0 : C.focus) == null || T.call(C);
    }
    function P() {
      var R;
      u != null && u.isConnected && ((R = u.focus) == null || R.call(u)), u = null;
    }
    function E(R) {
      var C, T, q, L;
      if (!R.defaultPrevented) {
        if (R.key === "Tab") {
          const dt = p();
          if (!dt.length) {
            R.preventDefault(), (T = (C = f.value) == null ? void 0 : C.focus) == null || T.call(C);
            return;
          }
          const J = dt[0], Ct = dt[dt.length - 1], z = document.activeElement;
          if (R.shiftKey) {
            (z === J || z === f.value || !((q = f.value) != null && q.contains(z))) && (R.preventDefault(), Ct.focus());
            return;
          }
          (z === Ct || !((L = f.value) != null && L.contains(z))) && (R.preventDefault(), J.focus());
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
      document.removeEventListener("keydown", E), R ? (u || (u = document.activeElement), I(), document.addEventListener("keydown", E), bd(() => {
        M();
      })) : (A(), P());
    }
    return Ad(() => {
      O(n.open);
    }), Cd(() => {
      A(), document.removeEventListener("keydown", E), P();
    }), vo(() => n.open, (R) => {
      O(R);
    }), (R, C) => t.open ? (ge(), Ee("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[0] || (C[0] = d1((T) => r("close"), ["self"]))
    }, [
      _e("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        _e("div", qb, [
          C[1] || (C[1] = Jd('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? xo("", !0) : (ge(), Ee(Fe, { key: 0 }, [
            Ze(zb, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ze(Rb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          Ze(Kb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ze(kb, { buttons: _.value }, null, 8, ["buttons"]),
          C[2] || (C[2] = _e("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          _e("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: Wc(Qt).fullscreen
          }, null, 8, Yb),
          C[3] || (C[3] = _e("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? xo("", !0) : (ge(), Mi($b, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Wb)
    ])) : xo("", !0);
  }
}, Yo = "state_json", Er = "sticker_image_1", sc = "external_image", cc = "pano_sticker_input_images", Co = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ie = Math.PI / 180, Rr = 180 / Math.PI, Xo = 24, Zb = 4, Jb = 4, Qi = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), Rt = {
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
function We(t) {
  return Number(t) === 180 ? 180 : 360;
}
function Qb(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function tv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function ev(t) {
  return t * t * t;
}
function Bn(t, e, n) {
  return { x: t, y: e, z: n };
}
function co(t, e) {
  return Bn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function lo(t, e) {
  return Bn(t.x * e, t.y * e, t.z * e);
}
function wn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function uo(t, e) {
  return Bn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ai(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Bn(t.x / e, t.y / e, t.z / e);
}
function On(t, e) {
  const n = t * Ie, r = e * Ie, a = Math.cos(r);
  return Bn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function $f(t) {
  return {
    yaw: qe(Math.atan2(t.x, t.z) * Rr),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Rr, -90, 90)
  };
}
function _r(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const s = e[r].x, u = e[r].y, f = e[a].x, g = e[a].y;
    u > t.y != g > t.y && t.x < (f - s) * (t.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function fi(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Vf(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return fi(t, e);
  const g = j((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * g, _ = Number(e.y || 0) + a * g, p = Number(t.x || 0) - y, M = Number(t.y || 0) - _;
  return p * p + M * M;
}
function nr(t, e, n) {
  return t + (e - t) * n;
}
function xn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function nv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let fo = { fillStyle: "", url: "" };
function rv(t, e, n) {
  if (fo.url && fo.fillStyle === String(t || ""))
    return fo.url;
  const r = nv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Xo}" height="${Xo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return fo = { fillStyle: String(t || ""), url: r }, r;
}
function Io(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function cn(t) {
  return {
    r: j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: j(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function Ge(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function iv(t) {
  return Co.some((e) => Io(t, e.color));
}
function lc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = j(Number(e), 0, 1), s = j(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), _ = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: _, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: _ };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: _, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function Yi(t) {
  const e = j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function uc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function zf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function av(t, e) {
  const n = zf(t, 1), r = zf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (p, M) => M ? f(M, p % M) : p, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), _ = Math.max(1, Math.round(u / g));
  return `${y}:${_}`;
}
function Dc(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Ie, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Ie;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ov(t) {
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
function Lr(t) {
  const e = Dc(t);
  return ov(e) || av(e, 1);
}
function sv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Lr(e), e;
}
function oi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Lr(t);
}
let ho = null;
function cv() {
  return ho || (ho = new Promise((t) => {
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
  }), ho);
}
const Eh = "pano_suite.ui_settings.v1", Dh = "pano_suite.node_grid_visibility.v1";
let di = null, Fn = null, po = { text: null, parsed: null };
function fa(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function lv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Eh)) || "").trim();
    if (!e) return di ? fa(di) : null;
    const n = JSON.parse(e), r = fa(n);
    return di = r, r;
  } catch {
    return di ? fa(di) : null;
  }
}
function uv(t) {
  var n;
  const e = fa(t);
  di = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Eh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Th() {
  var t;
  if (Fn && typeof Fn == "object")
    return Fn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Dh)) || "").trim();
    if (!e)
      return Fn = {}, Fn;
    const n = JSON.parse(e);
    return Fn = n && typeof n == "object" ? n : {}, Fn;
  } catch {
    return Fn = {}, Fn;
  }
}
function fv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Th()[n];
  return typeof a == "boolean" ? a : !!e;
}
function dv(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Th();
  r[n] = !!e, Fn = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Dh, JSON.stringify(r));
  } catch {
  }
}
function hv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function pv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function gv(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Hf(t) {
  const { paintCount: e, maskCount: n } = gv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function si(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function jf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function mv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : sv(e)) : [];
}
function yv(t, e = 2048, n = "#00ff00", r = 360) {
  const a = lv(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: We(r),
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
    if (po.text === u ? f = po.parsed : (f = JSON.parse(u), po = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: hv(f.assets),
      stickers: pv(f.stickers),
      shots: mv(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ua(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const y = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = fa({ ...g.ui_settings, ...a })), g.output_preset = Rc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = We(r), delete g.editor_history, g;
  } catch {
    return po = { text: u, parsed: null }, s;
  }
}
function dn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function ll(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = dn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, g, y, _, p, M, P, E;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (p = (_ = t.graph) == null ? void 0 : _.setDirtyCanvas) == null || p.call(_, !0, !0), (E = (P = (M = hn) == null ? void 0 : M.canvas) == null ? void 0 : P.setDirty) == null || E.call(P, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function bv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function Uf(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function vv(t) {
  var P, E, I, A, O;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = dn(t, "coverage"), n = dn(t, "bg_color"), r = dn(t, Yo), a = dn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && bv(s) && (Uf(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Uf(u))
    try {
      const R = JSON.parse(u);
      y = String(We(R == null ? void 0 : R.coverage));
    } catch {
      y = "360";
    }
  const _ = s, p = u, M = f;
  e.value = y, (P = e.callback) == null || P.call(e, y), n.value = _, (E = n.callback) == null || E.call(n, _), r.value = p, (I = r.callback) == null || I.call(r, p), a && (a.value = M, (A = a.callback) == null || A.call(a, M)), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function go(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function _v(t, e) {
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
function wv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Tc(t, e, n) {
  var s, u;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function mo(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Rc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Rh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function xv(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Lh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Sv(t, e, n = null) {
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
  return !r && n != null && (r = xv(t == null ? void 0 : t.graph, n)), r;
}
function Zo(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Xe) == null ? void 0 : a.apiURL) == "function" ? Xe.apiURL(r) : r;
}
function Nv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Mv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function kv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Oh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Nv(e)) return [e];
  const { filename: n, subfolder: r } = Mv(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => Zo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return kv([...a, e]);
}
function Pv(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? Zo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function da(t) {
  var r;
  const e = (r = hn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Ni(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Ni(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return Zo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Ni(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Zo(t);
}
function Av(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && r.push(s[e]), r.push(...s));
  return r;
}
function fc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const a = Ni(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function Cv(t, e, n, r = null) {
  var p;
  const a = da(t == null ? void 0 : t.id), s = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Ni(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const _ = new Image();
  return _.__panoSrc = f, _.onload = () => {
    typeof r == "function" && r(_);
  }, _.src = f, n.set(g, _), _;
}
function Iv(t, e) {
  var R, C;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((T) => String((T == null ? void 0 : T.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Rh(t.graph, u), { originId: g, originSlot: y } = Lh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const _ = Sv(t, a, g), p = Number(y || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((R = hn) == null ? void 0 : R.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(_) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const T = [];
    p >= 0 && p < M.length && T.push(M[p]), T.push(...M);
    const q = fc(T);
    if (q.length) return { src: q[0], srcCandidates: q, sourceType: "appNodeImageUrls", inputName: n };
  }
  const P = da((_ == null ? void 0 : _.id) ?? g), E = Av(P, p), I = fc(E);
  if (I.length) return { src: I[0], srcCandidates: I, sourceType: "nodeOutputs", inputName: n };
  const A = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (A.length) {
    const T = [];
    p >= 0 && p < A.length && T.push(A[p]), T.push(...A);
    const q = fc(T);
    if (q.length) return { src: q[0], srcCandidates: q, sourceType: "nodeImgs", inputName: n };
  }
  const O = (C = _ == null ? void 0 : _.widgets) == null ? void 0 : C.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
  if (O) {
    let T = Ni(O.value);
    if (T && !T.includes("/") && !T.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (T = Xe.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`)), T) return { src: T, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Ev(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = Oh(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let _ = -1;
  const p = () => {
    var P, E;
    if (_ += 1, _ >= s.length) {
      try {
        (E = (P = t.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || E.call(P, u);
      } catch {
      }
      return;
    }
    const M = s[_];
    y.resolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M;
    r == null || r(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, g.onerror = () => {
    var M, P;
    if (_ + 1 < s.length) {
      p();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, u);
    } catch {
    }
  }, p(), g;
}
function Dv(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((E) => String(E || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((E) => {
    Oh(E).forEach((I) => {
      const A = String(I || "").trim();
      !A || y.has(A) || (y.add(A), g.push(A));
    });
  }), !g.length) return null;
  const _ = new Image(), p = { srcRaw: u, resolvedSrc: "", img: _ };
  t.__panoLinkedInputImageCache.set(s, p);
  let M = -1;
  const P = () => {
    var I, A;
    if (M += 1, M >= g.length) {
      try {
        (A = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || A.call(I, s);
      } catch {
      }
      return;
    }
    const E = g[M];
    p.resolvedSrc = E, _.src = E;
  };
  return _.onload = () => {
    var E;
    r == null || r(), (E = t.setDirtyCanvas) == null || E.call(t, !0, !0);
  }, _.onerror = () => {
    var E, I;
    if (M + 1 < g.length) {
      P();
      return;
    }
    try {
      (I = (E = t.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || I.call(E, s);
    } catch {
    }
  }, P(), _;
}
function Fh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = Iv(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Bf(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Fh(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return Dv(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? Ev(t, u, g, n) : null;
}
async function ha(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = _v(t, e);
  await cv();
  const f = dn(t, "output_preset"), g = dn(t, "coverage"), y = dn(t, "bg_color"), _ = dn(t, Yo), p = yv(
    String((_ == null ? void 0 : _.value) || ""),
    Rc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    We(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const M = document.createElement("div");
  document.body.appendChild(M);
  const P = g1(Xb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: Ih(e),
    paintSwatches: Co.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: xn(i.color, 1)
    })),
    onClose: () => Xr()
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
  const E = M.querySelector(".pano-modal-overlay"), I = M.querySelector(".pano-modal"), A = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), O = I == null ? void 0 : I.querySelector("[data-stage-background]"), R = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!E || !I || !A || !O || !R)
    throw P.unmount(), M.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const C = document.createElement("div");
  C.setAttribute("aria-hidden", "true"), C.style.position = "absolute", C.style.left = "0", C.style.top = "0", C.style.pointerEvents = "none", C.style.zIndex = "12", C.style.display = "none", C.style.willChange = "transform,width,height,background,border-radius", R == null || R.appendChild(C);
  const T = document.createElement("div");
  T.className = "pano-paint-size-preview", T.setAttribute("aria-hidden", "true");
  const q = document.createElement("div");
  q.className = "pano-paint-size-preview-sample", T.appendChild(q), R == null || R.appendChild(T);
  const L = A.getContext("2d"), dt = Na(), J = I.querySelector("[data-side]"), Ct = I.querySelectorAll("[data-view]"), z = I.querySelector(".pano-view-toggle"), ct = I.querySelector("[data-fov-value]"), rt = I.querySelector("[data-selection-menu]"), wt = I.querySelector("[data-action='toggle-output-preview-size']"), yt = I.querySelector("[data-tool-ui-action='add-or-look']"), Z = I.querySelector("[data-view='frame']"), ot = I.querySelector("[data-action='toggle-fullscreen']"), lt = I.querySelector("[data-tooltip]"), Y = I.querySelector("[data-tool-rail]"), ut = I.querySelector("[data-paint-dock]"), Nt = Array.from(I.querySelectorAll("[data-paint-pane]")), Et = I.querySelector("[data-paint-color-row]"), Mt = I.querySelector("[data-paint-color-pop]"), ee = I.querySelector("[data-paint-color-preview]"), Se = I.querySelector("[data-paint-color-sv]"), He = I.querySelector("[data-paint-color-sv-cursor]"), Ne = I.querySelector("[data-paint-hue-strip]"), je = I.querySelector("[data-paint-hue-handle]"), Ae = I.querySelector("[data-paint-alpha-slider]"), nn = I.querySelector("[data-paint-alpha-value]"), rn = I.querySelector("[data-paint-color-history-wrap]"), gn = I.querySelector("[data-paint-color-history]"), x = Array.from(I.querySelectorAll("[data-paint-size-row]")), D = Array.from(I.querySelectorAll("[data-paint-clear-row]")), $ = Array.from(I.querySelectorAll("[data-paint-layer-clear-current]")), G = Array.from(I.querySelectorAll("[data-paint-size-slider]")), K = Array.from(I.querySelectorAll("[data-paint-size-value]"));
  let U = 0, et = 0;
  R == null || R.removeAttribute("data-stage-ready"), R == null || R.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", O.style.opacity = "0", a && (J == null || J.remove(), I.classList.add("pano-modal-readonly"));
  function st(i) {
    ut && ut.classList.toggle("is-hidden", !i);
  }
  const it = () => {
    if (!h.customPaintSessionStart) return;
    if (Io(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (iv(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      cn(h.customPaintColor),
      ...h.customPaintHistory.filter((o) => !Io(o, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Q = (i = !1) => {
    !Mt || Mt.hidden || (i ? it() : h.customPaintSessionStart = null, Mt.hidden = !0);
  }, St = () => {
    Mt && (Mt.hidden && (h.customPaintSessionStart = cn(h.customPaintColor)), Mt.hidden = !1);
  };
  I.addEventListener("pointerdown", (i) => {
    Ka(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Q(!0), e === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ht(), pt())));
  });
  const ft = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, xt = JSON.stringify(jf(p)), h = {
    mode: "pano",
    selectedId: ft,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: We(p.coverage),
    historyController: pb(80, { entries: [xt], index: 0 }),
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
    showGrid: fv(t == null ? void 0 : t.id, !0),
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
    paintEngine: Sc(),
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
  const ht = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), kt = {
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
  function qn(i) {
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
    return o.files && o.files.length ? Array.from(o.files).some((c) => ja(c)) : !1;
  }
  function kn(i) {
    const o = !!i;
    ye.active !== o && (ye.active = o, R.classList.toggle("drop-active", o));
  }
  function De(i, o, c = h.viewFov, l = 140, d = 620) {
    const m = Q1(h.viewYaw, i), w = o - h.viewPitch, b = c - h.viewFov, v = Math.hypot(m, w) + Math.abs(b) * 0.6, S = Math.round(j(l + v * 2.2, l, d));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, pt();
  }
  fp();
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
    for (const w of o) {
      const b = String((w == null ? void 0 : w.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function $h() {
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
  function Te(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function ki(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function hs() {
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
  function ul(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = ke();
    let d = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? hs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Vh(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), l = Number(i.halfW || 0), d = Number(i.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: j(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: j(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: j(c + d, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: j(c + d, 0, 1)
      }
    ];
  }
  function zh() {
    const i = new Set($h()), c = ke().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: hs(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), p.painting.groups = c, c;
  }
  function Hh(i, o, c) {
    var H;
    const l = (B) => (Number(B || 0) % 1 + 1) % 1, d = [];
    for (const B of c) {
      const nt = B == null ? void 0 : B.geometry, mt = (nt == null ? void 0 : nt.geometryKind) === "lasso_fill" ? nt == null ? void 0 : nt.points : (nt == null ? void 0 : nt.processedPoints) || (nt == null ? void 0 : nt.rawPoints) || (nt == null ? void 0 : nt.points) || [];
      Array.isArray(mt) && d.push(...mt);
    }
    if (!d.length) return null;
    const m = l(((H = d[0]) == null ? void 0 : H.u) || 0);
    let w = 0, b = 0;
    d.forEach((B) => {
      const nt = l((B == null ? void 0 : B.u) || 0);
      w += m + fn(nt, m), b += Number((B == null ? void 0 : B.v) || 0);
    });
    const v = (w / d.length % 1 + 1) % 1;
    let S = 1 / 0, N = -1 / 0, k = 1 / 0, F = -1 / 0;
    d.forEach((B) => {
      const nt = l((B == null ? void 0 : B.u) || 0), mt = fn(nt, v);
      S = Math.min(S, mt), N = Math.max(N, mt);
      const tt = Number((B == null ? void 0 : B.v) || 0);
      k = Math.min(k, tt), F = Math.max(F, tt);
    });
    const V = c.reduce((B, nt) => {
      const mt = gr(String((nt == null ? void 0 : nt.toolKind) || "pen")), tt = Qe[mt] || Qe[er], gt = Math.max(1, Number((nt == null ? void 0 : nt.size) || 10)) * Math.max(0.1, Number((tt == null ? void 0 : tt.sizeScale) ?? 1));
      return Math.max(B, gt);
    }, 0), X = Math.max(35e-4, V / 2048);
    return {
      centerUv: { u: ((v + (S + N) * 0.5) % 1 + 1) % 1, v: j((k + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (N - S) * 0.5 + X,
      halfH: (F - k) * 0.5 + X,
      uvPad: X
    };
  }
  function ur(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const d = ke().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === l);
    if (!d) return null;
    const m = c || mn(l, o);
    return d.frame = Hh(l, o, m), d.frame;
  }
  function Br() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = zh().map((d) => ({
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
  function Aa(i = !0) {
    var c, l, d, m, w, b;
    const o = Br().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (i) {
      const v = String(((l = (c = h.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((m = (d = h.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), N = String(((b = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && S === "paint" && N !== "eraser" && !o.includes(v) && o.push(v);
    }
    return o;
  }
  function fl(i = !0) {
    var b, v, S, N, k, F;
    const o = Br();
    if (!i) return o;
    const c = String(((v = (b = h.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((N = (S = h.interaction) == null ? void 0 : S.stroke) == null ? void 0 : N.layerKind) || "").trim(), d = String(((F = (k = h.interaction) == null ? void 0 : k.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!c || l !== "paint" || d === "eraser" || o.some((V) => V.type === "strokeGroup" && String(V.actionGroupId || "") === c))
      return o;
    const m = le();
    let w = o.reduce((V, X) => Math.max(V, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    return m && xe(m) && String(m.actionGroupId || "") === c && (w = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: w,
        item: null
      }
    ].sort((V, X) => Number((V == null ? void 0 : V.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0));
  }
  function jh() {
    return ke().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => Ai(ka("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Uh() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => Pi(Pa((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function dl(i = h.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function Bh() {
    var o, c, l, d;
    let i = null;
    try {
      const m = Aa(), w = ((d = (l = (c = (o = h.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : d.canvas) || null;
      w && (i = {
        source: w,
        revision: `${An()}:${ps()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function ps() {
    var d, m, w, b, v, S, N;
    const i = h.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!dl(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((d = i == null ? void 0 : i.stroke) == null ? void 0 : d.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), V = ((w = k == null ? void 0 : k.rawPoints) == null ? void 0 : w.length) ?? ((b = k == null ? void 0 : k.points) == null ? void 0 : b.length) ?? 0, X = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${o}_live${X}_${V}_${h.livePaintInteractionRevision}`;
    }
    const c = String(((v = i == null ? void 0 : i.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((N = i == null ? void 0 : i.item) == null ? void 0 : N.id) || "");
    return `_${o}_${c || l || "active"}_${h.livePaintInteractionRevision}`;
  }
  function gs() {
    return [...Array.isArray(p.stickers) ? p.stickers : []];
  }
  function ms(i) {
    return !1;
  }
  function Re(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function un() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function Pi(i) {
    const o = Te(i);
    if (!o) return null;
    const c = un().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Pa(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ue(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = Te(i.rasterObjectId || i.id || "");
    return !!o && !!Pi(Pa(o));
  }
  function Ai(i) {
    const o = ki(i), c = String(o.actionGroupId || "").trim();
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
  function xe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!Ai(ka(c, o));
  }
  function mn(i, o = null) {
    const c = ki(i, o), l = String(c.actionGroupId || "").trim();
    return l ? Yr(c.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function Gh(i, o = "paint") {
    var m, w, b;
    const c = String(i || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${h.mode}:${Ti()}`;
    if (h.mode === "frame") {
      const v = Pe(), S = String((v == null ? void 0 : v.id) || "");
      return `${d}:frame:${S}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(Number((m = h.frameView) == null ? void 0 : m.zoom) * 1e3)}:${Math.round(Number(((w = h.frameView) == null ? void 0 : w.panX) || 0))}:${Math.round(Number(((b = h.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Ca(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: j(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function fn(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function ys(i, o = null, c = null) {
    var S;
    const l = ki(i, o), d = Array.isArray(c) ? c : mn(l.actionGroupId, l.layerKind), m = [];
    if (d.forEach((N) => {
      const k = (N == null ? void 0 : N.geometry) || null, F = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const w = Number(((S = m[0]) == null ? void 0 : S.u) || 0);
    let b = 0, v = 0;
    return m.forEach((N) => {
      b += w + fn(Number((N == null ? void 0 : N.u) || 0), w), v += Number((N == null ? void 0 : N.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: j(v / m.length, 0, 1)
    };
  }
  function Ia(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = fn(Number(i.u || 0), d), b = Number(i.v || 0) - m, v = Number(l || 0) * Ie, S = Math.cos(v), N = Math.sin(v), k = Math.max(0.02, Number(c || 1)), F = (w * S - b * N) * k, V = (w * N + b * S) * k;
    return {
      ...i,
      u: ((d + F) % 1 + 1) % 1,
      v: j(m + V, 0, 1)
    };
  }
  function hl(i, o, c, l = null, d = null, m = null) {
    const w = ki(i, d), b = String(w.actionGroupId || "").trim();
    if (!b) return !1;
    const v = Yr(w.layerKind), S = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let N = !1;
    if (v.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b) return;
      const F = (S == null ? void 0 : S.get(String((k == null ? void 0 : k.id) || ""))) || k, V = k == null ? void 0 : k.geometry, X = F == null ? void 0 : F.geometry;
      !V || !X || (Array.isArray(X.points) && (V.points = X.points.map((H) => Ca(H, o, c)), N = !0), Array.isArray(X.rawPoints) && (V.rawPoints = X.rawPoints.map((H) => Ca(H, o, c)), N = !0), Array.isArray(X.processedPoints) && (V.processedPoints = X.processedPoints.map((H) => Ca(H, o, c)), N = !0));
    }), N && m) {
      const k = ke().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === b);
      k && (k.frame = null);
    }
    return N;
  }
  function pl(i, o = 1, c = 0, l = null, d = null, m = null) {
    const w = ki(i, d), b = String(w.actionGroupId || "").trim();
    if (!b) return !1;
    const v = Yr(w.layerKind), S = Array.isArray(l) ? l : mn(b, w.layerKind), N = Array.isArray(S) ? new Map(S.map((V) => [String((V == null ? void 0 : V.id) || ""), V])) : null, k = (m == null ? void 0 : m.centerUv) ?? ys(b, w.layerKind, S);
    let F = !1;
    if (v.forEach((V) => {
      if (String((V == null ? void 0 : V.actionGroupId) || "").trim() !== b) return;
      const X = (N == null ? void 0 : N.get(String((V == null ? void 0 : V.id) || ""))) || V, H = V == null ? void 0 : V.geometry, B = X == null ? void 0 : X.geometry;
      !H || !B || (Array.isArray(B.points) && (H.points = B.points.map((nt) => Ia(nt, k, o, c)), F = !0), Array.isArray(B.rawPoints) && (H.rawPoints = B.rawPoints.map((nt) => Ia(nt, k, o, c)), F = !0), Array.isArray(B.processedPoints) && (H.processedPoints = B.processedPoints.map((nt) => Ia(nt, k, o, c)), F = !0));
    }), F && m) {
      const V = ke().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === b);
      V && (V.frame = null);
    }
    return F;
  }
  function gl(i, o, c, l = null) {
    const d = Te(i);
    if (!d) return !1;
    const m = un().find((N) => String((N == null ? void 0 : N.id) || "").trim() === d);
    if (!m) return !1;
    const w = l && typeof l == "object" ? l : m, b = (w == null ? void 0 : w.transform) || {}, v = Number(b.du || 0) + Number(o || 0), S = j(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = S, !0;
  }
  function le() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const o = Ai(i);
    if (o) return o;
    const c = Pi(i);
    return c || (e === "cutout" ? gs().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : Me().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function Pn() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || c.has(d)) return;
      c.add(d);
      const m = d === String(h.selectedId || "") ? le() : Ai(d) || Pi(d) || (e === "cutout" ? gs().find((w) => String((w == null ? void 0 : w.id) || "") === d) : Me().find((w) => String((w == null ? void 0 : w.id) || "") === d));
      m && o.push(m);
    }), o;
  }
  function bs(i = null) {
    const o = Array.isArray(i) ? i : Pn();
    if (!o || o.length < 2) return null;
    const c = o.map((S) => an(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((S) => S.corners.map((N) => Number((N == null ? void 0 : N.x) || 0))), d = c.flatMap((S) => S.corners.map((N) => Number((N == null ? void 0 : N.y) || 0))), m = Math.min(...l), w = Math.max(...l), b = Math.min(...d), v = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + w) * 0.5, y: (b + v) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: w, y: b },
        { x: w, y: v },
        { x: m, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + w) * 0.5, y: b, a: { x: m, y: b }, b: { x: w, y: b } },
        { edge: "right", x: w, y: (b + v) * 0.5, a: { x: w, y: b }, b: { x: w, y: v } },
        { edge: "bottom", x: (m + w) * 0.5, y: v, a: { x: w, y: v }, b: { x: m, y: v } },
        { edge: "left", x: m, y: (b + v) * 0.5, a: { x: m, y: v }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + w) * 0.5, y: b },
      rotateHandle: { x: (m + w) * 0.5, y: b - 30 }
    };
  }
  function Kh(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(h.selectedIds) && h.selectedIds.includes(o);
  }
  function ml() {
    const i = le();
    return i ? xe(i) || Ue(i) ? "stroke" : "image" : null;
  }
  function fr(i) {
    if (!i || typeof i != "object") return !1;
    if (xe(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = ke().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ue(i)) {
      const o = Te(i.rasterObjectId || i.id || ""), c = un().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function vs(i = null) {
    const o = Array.isArray(i) ? i : Pn();
    return o.length > 0 && o.every((c) => fr(c));
  }
  function Wh(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (xe(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), d = ke().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    if (Ue(i)) {
      const l = Te(i.rasterObjectId || i.id || ""), d = un().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function qh() {
    if (r) return;
    const i = Pn();
    if (!i.length) return;
    const o = !vs(i);
    let c = !1;
    i.forEach((l) => {
      Wh(l, o) && (c = !0);
    }), c && (ae(), be(), Ht(), pt());
  }
  function Ea(i) {
    h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && Re(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && ms() ? p.active.selected_shot_id = i.id || null : i ? p.active.selected_shot_id = p.active.selected_shot_id : p.active.selected_shot_id = null;
  }
  function Yh(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((w) => {
      const b = String((w == null ? void 0 : w.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), h.selectedIds = c;
    const d = String(o || "").trim();
    h.selectedId = d && c.includes(d) ? d : c[c.length - 1] || null;
    const m = le();
    p.active.selected_sticker_id = m && Re(m) && m.id || null, c.length || (p.active.selected_shot_id = null);
  }
  function Xh() {
    return (Array.isArray(p.stickers) ? p.stickers : []).map((o, c) => {
      var d, m;
      const l = ve(o) ? String(o.id || Er) : String(((m = (d = p.assets) == null ? void 0 : d[o.asset_id]) == null ? void 0 : m.name) || o.asset_id || o.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: o,
        label: l
      };
    });
  }
  function Zh(i) {
    return i === "frame" ? Rt.camera : i === "stroke" ? Rt.paintbrush_vertical_tool : Rt.image;
  }
  function yl(i) {
    return !i || !i.item ? go(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${Zh(i.kind)}</span><span>${go(String(i.label || ""))}</span>`;
  }
  function bl() {
    return hs();
  }
  function ve(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Er || String(i.source_kind || "") === sc;
  }
  function Gr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Jh(i) {
    return ve(i) && Gr(i) ? sh : 1;
  }
  function Qh() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function tp() {
    return String(Qh() || "") === "lasso_fill";
  }
  function ep() {
    if (r) return;
    const i = le();
    !i || !ve(i) || (i.visible = Gr(i), on(), ae(), be(), Gt(), Ht(), pt());
  }
  function np() {
    if (r || e !== "stickers") return;
    const i = le();
    if (!i || !ve(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = _s(cc, () => {
      pt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = kr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ae(), be(), Gt(), Ht(), pt();
  }
  function rp(i) {
    if (!i || !ve(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = _s(cc, () => {
      pt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = kr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function ip() {
    const i = le();
    if (!i || !ve(i)) return !1;
    const o = rp(i);
    if (!o) return !1;
    const c = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function vl(i) {
    var c;
    const o = da(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function ap(i) {
    const o = da(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function op(i, o = null) {
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
    const c = vl(i), l = Array.isArray(c) && c.length ? c[0] : null, d = Ni(l);
    if (!d) return null;
    const m = `__ui__${i}`, w = ht.get(m);
    if (w && w.__panoSrc === d) return w;
    const b = new Image();
    return b.__panoSrc = d, b.onload = () => {
      typeof o == "function" ? o(b) : pt();
    }, b.src = d, ht.set(m, b), b;
  }
  function _l(i = null) {
    const o = Bf(t, ["sticker_image"], i, "sticker_image_exact");
    return o || _s(cc, i);
  }
  function wl(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function kr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), d = Math.max(1, Number(c || 1)), m = j(Number(i || 30), 0.1, 179) * Ie, w = 2 * Math.atan(Math.tan(m * 0.5) * (d / l));
    return j(w * Rr, 0.1, 179);
  }
  function sp(i) {
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
      const w = Number(m.yaw_deg), b = Number(m.pitch_deg), v = Number(m.roll_deg), S = Number(m.hFOV_deg);
      if (![w, b, v, S].every((V) => Number.isFinite(V))) return null;
      let N = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(N, -0) && (N = 0);
      const k = {
        yaw_deg: N,
        pitch_deg: j(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(S, 0.1, 179)
      }, F = Number(c.source_aspect);
      return Number.isFinite(F) && F > 0 && (k.source_aspect = F), k;
    } catch {
      return null;
    }
  }
  function xl(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Dc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: qe(Number.isFinite(o) ? o : 0),
        pitch_deg: j(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function cp(i) {
    var b;
    if (!i || typeof i != "object") return xl(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let w = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const v = j(d, 0.1, 179) * Ie, S = j(m, 0.1, 179) * Ie, N = Math.tan(S * 0.5);
      if (Math.abs(N) > 1e-6) {
        const k = Math.tan(v * 0.5) / N;
        Number.isFinite(k) && k > 0 && (w = k);
      }
    }
    if (i != null && i.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[i.asset_id])) {
      const v = p.assets[i.asset_id], S = Number((v == null ? void 0 : v.w) || 0), N = Number((v == null ? void 0 : v.h) || 0);
      S > 0 && N > 0 && (w = S / N);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: qe(Number.isFinite(o) ? o : 0),
        pitch_deg: j(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function lp(i) {
    var l, d, m, w, b;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const v = Rh(t.graph, c), { originId: S, originSlot: N } = Lh(v), k = da(S), F = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (d = k == null ? void 0 : k.data) == null ? void 0 : d.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (w = k == null ? void 0 : k.ui) == null ? void 0 : w.result
      ];
      for (const V of F) {
        if (!Array.isArray(V)) continue;
        const X = Number(N || 0), H = V[X];
        if (typeof H == "string" && H.trim()) return H;
      }
    }
    return String(((b = dn(t, i)) == null ? void 0 : b.value) || "");
  }
  function up(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : sp(o);
    if (l) {
      const w = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: kr(l.hFOV_deg, w, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: kr(30, d, m),
      rot_deg: 0
    };
  }
  function Sl(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((V) => String((V == null ? void 0 : V.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = _l(() => {
      var V;
      (V = t.__panoExternalStickerSync) == null || V.call(t, "image-loaded");
    }), d = op(ap("pano_sticker_input_pose"), null), m = lp("sticker_state"), w = wl(d && typeof d == "object" ? JSON.stringify(d) : m), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((V) => String((V == null ? void 0 : V.id) || "") === Er);
    if (c == null) {
      v >= 0 && (b.splice(v, 1), h.selectedId === Er && (h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null), be(), Gt(), Ht(), pt());
      return;
    }
    const S = b.reduce((V, X) => Math.max(V, Number((X == null ? void 0 : X.z_index) || 0)), -1);
    let N = v >= 0 ? b[v] : null;
    const k = !N || Number(N.source_link_id ?? -1) !== Number(c) || String(N.source_state_hash || "") !== w;
    N || (N = {
      id: Er,
      source_kind: sc
    }, b.push(N)), N.id = Er, N.source_kind = sc, N.source_link_id = Number(c), N.source_state_hash = w, N.visible = N.visible !== !1;
    let F = !1;
    if (k) {
      const V = up(d, m, l);
      Object.assign(N, V, {
        initial_pose: { ...V },
        visible: !0,
        z_index: S + 1
      }), F = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const V = kr(
        Number(N.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(N.vFOV_deg || 0) - V) > 1e-6 && (N.vFOV_deg = V, F = !0);
    }
    F && (be(), Gt(), Ht()), pt();
  }
  function Ci(i = {}) {
    const c = i.preservePanelValues !== !1 ? le() : null;
    c && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: oi(c)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Da() {
    yt && (yt.style.display = "none");
  }
  function Ta() {
    h.mode === "frame" && (h.mode = "pano"), h.outputPreviewRect = null, Z && (Z.disabled = !0, Z.setAttribute("aria-disabled", "true"), Z.style.display = "none"), wt && (wt.style.display = "none"), Ct.forEach((i) => {
      const o = i.dataset.view === h.mode;
      i.setAttribute("aria-pressed", o ? "true" : "false");
    }), z && z.setAttribute("data-selected", h.mode), iu() ? de(h.pointerPos) : A.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function fp() {
    const o = Il({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function ws() {
    const i = On(h.viewYaw, h.viewPitch);
    let o = Bn(0, 1, 0);
    Math.abs(wn(i, o)) > 0.999 && (o = Bn(0, 0, 1));
    const c = ai(uo(o, i)), l = ai(uo(i, c));
    return { right: c, up: l, fwd: i };
  }
  function Ii(i) {
    const { right: o, up: c, fwd: l } = ws(), d = wn(i, o), m = wn(i, c), w = wn(i, l);
    if (w <= 1e-5) return null;
    const b = A.width, v = A.height, S = h.viewFov * Ie, N = 2 * Math.atan(Math.tan(S / 2) * (v / b)), k = b / 2 / Math.tan(S / 2), F = v / 2 / Math.tan(N / 2);
    return {
      x: b / 2 + d / w * k,
      y: v / 2 - m / w * F,
      z: w
    };
  }
  function xs(i, o) {
    const { right: c, up: l, fwd: d } = ws(), m = A.width, w = A.height, b = h.viewFov * Ie, v = 2 * Math.atan(Math.tan(b / 2) * (w / m)), S = (i - m / 2) / (m / 2) * Math.tan(b / 2), N = (w / 2 - o) / (w / 2) * Math.tan(v / 2), k = co(co(lo(c, S), lo(l, N)), d);
    return ai(k);
  }
  function dr() {
    const i = A.width, o = A.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, v = b * c;
      return { x: (i - v) * 0.5, y: 0, w: v, h: b };
    }
    const d = i, m = d / c;
    return { x: 0, y: (o - m) * 0.5, w: d, h: m };
  }
  function Nl(i) {
    var w;
    if (i && typeof i == "object" && (ve(i) || i.external === !0))
      return _l(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = ht.get(o);
    if (c) return c;
    const l = (w = p.assets) == null ? void 0 : w[o], d = Pv(l);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => pt(), m.src = d, ht.set(o, m), m;
  }
  function Ml(i, o = null) {
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
  function dp(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = Dt.get(o);
    if (c) return c.ready ? c : null;
    const l = Ml(i, () => {
      const N = Dt.get(o);
      N && (N.ready = !1), pt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || m < 1) return null;
    const w = document.createElement("canvas");
    w.width = d, w.height = m;
    const b = w.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, d, m), b.drawImage(l, 0, 0, d, m);
    const v = b.getImageData(0, 0, d, m).data, S = { canvas: w, width: d, height: m, alpha: v, ready: !0 };
    return Dt.set(o, S), S;
  }
  function hp(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = fn(Number(i.u || 0), d), b = Number(i.v || 0) - m, v = Math.max(0.02, Number(c || 1)), S = Number(l || 0) * Ie, N = Math.cos(S), k = Math.sin(S), F = w / v, V = b / v, X = F * N + V * k, H = -F * k + V * N;
    return {
      ...i,
      u: ((d + X) % 1 + 1) % 1,
      v: m + H
    };
  }
  function pp(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, d = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, w = hp(
      m,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), v = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const S = fn(Number(w.u || 0), Number(c.u0 || 0)) / b, N = (Number(w.v || 0) - Number(c.v0 || 0)) / v;
    if (S < 0 || S > 1 || N < 0 || N > 1) return 0;
    const k = dp(i);
    if (!k) return null;
    const F = j(Math.floor(S * k.width), 0, k.width - 1), V = j(Math.floor(N * k.height), 0, k.height - 1);
    return Number(k.alpha[(V * k.width + F) * 4 + 3] || 0);
  }
  function gp(i, o, c, l = null) {
    if (!(o != null && o.visible) || !_r(c, o.corners)) return !1;
    const d = l || bn(c, performance.now()), m = pp(i, d);
    return m === null ? !0 : m > 8;
  }
  function mp() {
    var l, d, m, w, b, v, S, N;
    const i = ((d = (l = h.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, Aa(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (w = i == null ? void 0 : i.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((v = i == null ? void 0 : i.descriptor) == null ? void 0 : v.height) || ((N = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : N.height) || 1024));
    return { width: o, height: c };
  }
  function yp() {
    var V, X, H;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = Xn(), l = `${ps()}:${c.width}:${c.height}`;
    if (((V = h._activePaintEraserPreviewInfo) == null ? void 0 : V.cacheKey) === l)
      return h._activePaintEraserPreviewInfo.value || null;
    const d = Ge(o), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const B = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Is(B, d.targetSpace, !0);
    }
    const w = Di(c.width, c.height, { readback: !0 });
    if (!jl(w, d, { w: c.width, h: c.height })) return null;
    const b = ((H = (X = w.ctx) == null ? void 0 : X.getImageData(0, 0, c.width, c.height)) == null ? void 0 : H.data) || null;
    if (!b) return null;
    let v = c.width, S = c.height, N = -1, k = -1;
    for (let B = 0; B < c.height; B += 1)
      for (let nt = 0; nt < c.width; nt += 1)
        b[(B * c.width + nt) * 4 + 3] <= 8 || (nt < v && (v = nt), B < S && (S = B), nt > N && (N = nt), B > k && (k = B));
    if (N < v || k < S)
      return h._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const F = {
      surface: w,
      bounds: { minX: v, minY: S, maxX: N, maxY: k },
      key: `${l}:${v}:${S}:${N}:${k}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: l, value: F }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Ei() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function bp(i, o, c) {
    var l, d;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const m = i.item.bbox, w = ((d = i.item) == null ? void 0 : d.transform) || {}, b = Number(m.u0 || 0) + Number(w.du || 0), v = Number(m.u1 || 0) + Number(w.du || 0), S = Number(m.v0 || 0) + Number(w.dv || 0), N = Number(m.v1 || 0) + Number(w.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(j(S, 0, 1) * c),
        maxY: Math.ceil(j(N, 0, 1) * c),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = mn(i.actionGroupId, "paint"), w = ur(i.actionGroupId, "paint", m);
      if (!w) return null;
      const b = w.centerUv.u - w.halfW, v = w.centerUv.u + w.halfW, S = w.centerUv.v - w.halfH, N = w.centerUv.v + w.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(j(S, 0, 1) * c),
        maxY: Math.ceil(j(N, 0, 1) * c),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    return null;
  }
  function vp(i, o, c) {
    if (!i || !o) return !1;
    const l = (w) => w.wraps ? [
      { minX: 0, maxX: w.maxX, minY: w.minY, maxY: w.maxY, wraps: !1 },
      { minX: w.minX, maxX: c - 1, minY: w.minY, maxY: w.maxY, wraps: !1 }
    ] : [w], d = l(i), m = l(o);
    return d.some((w) => m.some((b) => !(w.maxX < b.minX || b.maxX < w.minX || w.maxY < b.minY || b.maxY < w.minY)));
  }
  function _p(i, o, c) {
    var gt, bt, _t, vt, W, at, Pt;
    if (!i || !o || !((gt = c == null ? void 0 : c.surface) != null && gt.canvas) || o.type !== "rasterObject") return i;
    const l = Number(i.width || c.surface.canvas.width || 0), d = Number(i.height || c.surface.canvas.height || 0);
    if (l < 1 || d < 1) return i;
    const m = bp(o, l, d);
    if (m && !vp(m, c.bounds, l)) return i;
    const w = String(((bt = o.item) == null ? void 0 : bt.id) || o.id || ""), b = ((_t = o.item) == null ? void 0 : _t.transform) || {}, v = `${c.key}:${w}:${l}:${d}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const N = j(Math.floor(Number(((vt = c.bounds) == null ? void 0 : vt.minX) || 0)), 0, Math.max(0, l - 1)), k = j(Math.floor(Number(((W = c.bounds) == null ? void 0 : W.minY) || 0)), 0, Math.max(0, d - 1)), F = j(Math.ceil(Number(((at = c.bounds) == null ? void 0 : at.maxX) || 0)), N, Math.max(0, l - 1)), V = j(Math.ceil(Number(((Pt = c.bounds) == null ? void 0 : Pt.maxY) || 0)), k, Math.max(0, d - 1)), X = Math.max(1, F - N + 1), H = Math.max(1, V - k + 1), B = Di(l, d, { readback: !0 });
    B.ctx.clearRect(0, 0, l, d), B.ctx.drawImage(i, 0, 0);
    const nt = B.ctx.getImageData(N, k, X, H);
    B.ctx.save(), B.ctx.globalCompositeOperation = "destination-out", B.ctx.drawImage(c.surface.canvas, 0, 0), B.ctx.restore();
    const mt = B.ctx.getImageData(N, k, X, H);
    let tt = !1;
    for (let Ft = 0; Ft < X * H; Ft += 1) {
      const It = nt.data[Ft * 4 + 3], Tt = mt.data[Ft * 4 + 3];
      if (It > Tt) {
        tt = !0;
        break;
      }
    }
    return tt ? (S.size > 64 && S.clear(), S.set(v, B.canvas), B.canvas) : (S.set(v, i), i);
  }
  function kl(i, o = null) {
    const c = Te((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const d = Ml(i, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: w } = mp(), b = (i == null ? void 0 : i.transform) || {}, v = [
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
      Ti()
    ].join(":"), S = ie.get(v);
    if (S) return S;
    ie.size > 64 && ie.clear();
    const N = document.createElement("canvas");
    N.width = m, N.height = w;
    const k = N.getContext("2d");
    if (!k) return null;
    const F = Number(l.u0 || 0) * m, V = Number(l.v0 || 0) * w, X = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), H = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * w), B = F + X * 0.5 + Number(b.du || 0) * m, nt = V + H * 0.5 + Number(b.dv || 0) * w, mt = Number(b.rot_deg || 0) * Ie, tt = Math.max(0.01, Number(b.scale || 1));
    for (const gt of [-m, 0, m])
      k.save(), k.translate(B + gt, nt), k.rotate(mt), k.scale(tt, tt), k.drawImage(d, -X * 0.5, -H * 0.5, X, H), k.restore();
    return ie.set(v, N), N;
  }
  function wp() {
    return ds(p, {
      selectedId: h.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function xp(i) {
    return ch(
      p,
      (o, c, l) => Nl(l || o),
      { scene: i }
    );
  }
  function Pl(i, o, c, l, d = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const m = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (Tl(o, c))
      return Ep(
        o,
        c,
        m && h.showPanorama ? l : null,
        `${d}_bg_gl`
      );
    const b = Rl(), v = Ll(b), S = h.showObjects ? Fl() : [], N = null, k = h.showMask ? Ol() : null, F = af({
      stateRevision: [
        d,
        m ? String(l.currentSrc || l.src || "") : "no_bg",
        m ? Number(l.naturalWidth || l.width || 0) : 0,
        m ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(v) ? v.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        S.length ? S.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none",
        k ? `${An()}:mask` : "mask:none"
      ].join("|"),
      backgroundSource: m && h.showPanorama ? l : null,
      backgroundRevision: m ? `${d}:bg` : "",
      coverageDeg: We(p.coverage),
      scene: b,
      textures: v,
      paintSource: N,
      paintRevision: "",
      maskSource: k,
      maskRevision: k ? `${An()}:mask` : "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), V = dt;
    if (!V.syncState(F)) return !1;
    const H = V.renderToTarget(`${d}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return H ? (i.drawImage(H, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Ss(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Xe.fetchApi("/upload/image", { method: "POST", body: c });
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
    const d = await Xe.fetchApi("/upload/image", { method: "POST", body: l });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const m = await d.json(), w = String((m == null ? void 0 : m.name) || "").trim();
    if (!w) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: w,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Ms = null, Ra = !1;
  function Sp() {
    const i = Hf(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, c = An();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function ks() {
    const i = String(t.id ?? "0"), o = Qi.get(i);
    if (Ra && o) return o;
    const c = (async () => {
      var m, w, b, v, S, N, k, F, V, X, H, B;
      const l = An(), d = Hf(p.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ms = l, Cn());
        return;
      }
      if (Ms !== l && !Ra) {
        Ra = !0;
        try {
          za();
          const nt = Aa(!1), mt = ((w = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : w.call(m, nt)) || null, tt = ((b = mt == null ? void 0 : mt.displayPaint) == null ? void 0 : b.canvas) || null, gt = ((v = mt == null ? void 0 : mt.committedMask) == null ? void 0 : v.canvas) || null, bt = Math.max(1, Number(((S = mt == null ? void 0 : mt.descriptor) == null ? void 0 : S.width) || (tt == null ? void 0 : tt.width) || (gt == null ? void 0 : gt.width) || 2048)), _t = Math.max(1, Number(((N = mt == null ? void 0 : mt.descriptor) == null ? void 0 : N.height) || (tt == null ? void 0 : tt.height) || (gt == null ? void 0 : gt.height) || 1024));
          (!tt && d.totalPaintCount > 0 || !gt && d.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((k = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== bt || Number(((F = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== _t) && (h._paintLayerSyncBlankSurface = Di(bt, _t)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, bt, _t));
          const vt = tt || d.totalPaintCount > 0 && ((V = h._paintLayerSyncBlankSurface) == null ? void 0 : V.canvas) || null, W = gt || d.totalMaskCount > 0 && ((X = h._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null;
          if (!vt && !W) return;
          let at = null, Pt = null;
          const Ft = [];
          if (d.totalPaintCount > 0) {
            at = await Ns(vt, `pano_paint_${i}.png`);
            for (const It of nt) {
              const Tt = String(It || "").trim();
              if (!Tt) continue;
              const Vt = ((B = (H = h.paintEngine) == null ? void 0 : H.getGroupDisplayCanvas) == null ? void 0 : B.call(H, Tt)) || null;
              if (!Vt) continue;
              const jt = Tt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ut = await Ns(Vt, `pano_group_${i}_${jt}.png`);
              Ut && Ft.push({
                id: Tt,
                actionGroupId: Tt,
                image: Ut
              });
            }
          }
          d.totalMaskCount > 0 && (Pt = await Ns(W, `pano_mask_${i}.png`)), l === An() && (p.painting_layer = {
            paint: at,
            mask: Pt,
            groups: Ft,
            revision: l
          }, Ms = l, Cn());
        } catch (nt) {
          throw nt;
        } finally {
          Ra = !1;
        }
      }
    })();
    return Qi.set(i, c), c.finally(() => {
      Qi.get(i) === c && Qi.delete(i);
    }), c;
  }
  function La() {
    const i = Cv(t, "pano_input_images", ht, () => pt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((w) => String((w == null ? void 0 : w.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let d = [];
    return r && (c || l) ? d = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Bf(t, d, () => pt(), `background:${d.join("|")}`);
  }
  function Al(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Np() {
    if (!kt.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (h.showPanorama) {
      const c = La();
      i = !!c && !Al(c);
    }
    if (h.showObjects) {
      const c = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const d = Nl(l);
        if (d && !Al(d)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function Kr() {
    const i = new Set(
      (p.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(p.assets || {}).forEach((o) => {
      i.has(o) || (delete p.assets[o], ht.delete(o));
    });
  }
  function Cl(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(j(i.y, -1, 1))
    };
  }
  function Ps(i, o = null) {
    const { lon: c, lat: l } = Cl(i), d = dr();
    let m = d.x + (c / (2 * Math.PI) + 0.5) * d.w;
    const w = d.y + (0.5 - l / Math.PI) * d.h;
    if (o !== null) {
      for (; m - o > d.w / 2; ) m -= d.w;
      for (; m - o < -d.w / 2; ) m += d.w;
    }
    return { x: m, y: w, z: 1 };
  }
  function Oa(i) {
    const o = On(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Bn(0, 1, 0);
    Math.abs(wn(o, c)) > 0.999 && (c = Bn(0, 0, 1));
    const l = ai(uo(c, o)), d = ai(uo(o, l)), m = Math.tan(j(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Ie), w = Math.tan(j(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Ie), b = Number(i.rot_deg || i.roll_deg || 0) * Ie, v = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: d,
      tanX: m,
      tanY: w,
      cr: v,
      sr: S
    };
  }
  function hr(i, o, c) {
    const l = o * i.cr - c * i.sr, d = o * i.sr + c * i.cr;
    return ai(co(co(i.centerDir, lo(i.right, l)), lo(i.up, d)));
  }
  function Il(i) {
    const o = Oa(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => hr(o, l * o.tanX, d * o.tanY));
  }
  function Mp(i, o, c) {
    const l = Oa(i), d = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return hr(l, d, m);
  }
  function El(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: j((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function kp(i) {
    var v, S, N, k;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = i == null ? void 0 : i.transform) == null ? void 0 : v.scale) || 1)), d = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), m = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.du) || 0), w = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((F) => Ca(Ia(F, c, l, d), m, w));
  }
  function Pp(i) {
    const o = Te((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, d = `${o}:${h.mode}:${Ti()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (h.mode === "frame") {
      const m = Pe();
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Ap(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      Re(i) ? "sticker" : "item",
      o,
      h.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      oi(i)
    ].join(":");
    if (h.mode === "frame") {
      const d = Pe();
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${l}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Cp() {
    var o;
    const i = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? h.hqFrames && h.hqFrames > 0 ? [28, 20] : h.interaction ? [12, 9] : [20, 14] : i === "high" ? h.hqFrames && h.hqFrames > 0 ? [48, 36] : h.interaction ? [20, 14] : [36, 26] : h.hqFrames && h.hqFrames > 0 ? [40, 30] : h.interaction ? [16, 12] : [28, 20];
  }
  function Dl() {
    var i;
    return !!O && !!((i = dt == null ? void 0 : dt.isSupported) != null && i.call(dt));
  }
  function Tl(i, o) {
    return !Dl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function Rl() {
    return h.showObjects ? wp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ll(i) {
    return !h.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : xp(i);
  }
  function Ol() {
    var o, c, l, d;
    const i = Aa();
    return ((d = (l = (c = (o = h.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.committedMask) == null ? void 0 : d.canvas) || null;
  }
  function Fl() {
    var l, d;
    const i = fl(!0), o = yp(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const w = String(m.actionGroupId || m.id || "");
        if (!w) continue;
        const b = ((d = (l = h.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : d.call(l, w)) || null;
        if (!b) continue;
        c.push({
          id: `paint_group:${w}`,
          source: b,
          revision: `${Wp()}:${w}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const w = m.item || null, b = Te((w == null ? void 0 : w.id) || m.id || "");
        if (!b) continue;
        const v = kl(w, () => pt());
        if (!v) continue;
        const S = _p(v, m, o), N = (w == null ? void 0 : w.transform) || {};
        c.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            An(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(N.du || 0).toFixed(6),
            Number(N.dv || 0).toFixed(6),
            Number(N.rot_deg || 0).toFixed(3),
            Number(N.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (w == null ? void 0 : w.visible) !== !1
        });
      }
    }
    return c;
  }
  function Ip(i, o = "modal_bg_gl") {
    const c = Rl(), l = Ll(c), d = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = d ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", w = h.showObjects ? Fl() : [], b = null, v = h.showMask ? Ol() : null, S = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      w.length ? w.map((N) => `${String((N == null ? void 0 : N.id) || "")}:${String((N == null ? void 0 : N.revision) || "")}:${Number((N == null ? void 0 : N.zIndex) || 0)}`).join(",") : "paint:none",
      v ? `${An()}:mask` : "mask:none",
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: af({
        stateRevision: S,
        backgroundSource: d ? i : null,
        backgroundRevision: d ? `${o}:${m}` : "",
        coverageDeg: We(p.coverage),
        scene: c,
        textures: l,
        paintSource: b,
        paintRevision: "",
        maskSource: v,
        maskRevision: v ? `${An()}:mask` : "",
        rasterEntries: w,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || l.length > 0 || w.length > 0 || !!v
    };
  }
  function As() {
    if (!O) return;
    const i = O.getContext("webgl2");
    if (i)
      i.viewport(0, 0, O.width, O.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = O.getContext("2d");
      o && (o.clearRect(0, 0, O.width, O.height), o.fillStyle = "#070707", o.fillRect(0, 0, O.width, O.height));
    }
    kt.backgroundWasVisible = !1, kt.backgroundDirty = !1;
  }
  function Ep(i, o, c, l = "modal_bg_gl") {
    var S;
    if (!Tl(i, o)) return !1;
    if (!kt.backgroundDirty && kt.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: m } = Ip(c, l);
    if (!m || !dt.syncState(d))
      return As(), !1;
    const b = dt.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), v = (S = O == null ? void 0 : O.getContext) == null ? void 0 : S.call(O, "2d");
    return !b || !v ? (As(), !1) : (v.clearRect(0, 0, O.width, O.height), v.drawImage(b, 0, 0, O.width, O.height), kt.backgroundWasVisible = !0, kt.backgroundDirty = !1, !0);
  }
  function Dp(i = !1) {
    const o = A.width, c = A.height, l = dr();
    if (L.globalAlpha = 1, L.lineWidth = 1, i || (L.fillStyle = "#070707", L.fillRect(0, 0, o, c), L.fillStyle = "#070707", L.fillRect(l.x, l.y, l.w, l.h)), za(), Pl(
      L,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      La(),
      "modal_unwrap"
    ), h.showGrid && !h.fullscreen) {
      L.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const w = l.x + l.w * m / 16;
        L.beginPath(), L.moveTo(w, l.y), L.lineTo(w, l.y + l.h), L.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const w = l.y + l.h * m / 8;
        L.beginPath(), L.moveTo(l.x, w), L.lineTo(l.x + l.w, w), L.stroke();
      }
      L.strokeStyle = "rgba(250, 250, 250, 0.86)", L.lineWidth = 1.2, L.beginPath(), L.moveTo(l.x, l.y + l.h / 2), L.lineTo(l.x + l.w, l.y + l.h / 2), L.stroke(), L.fillStyle = "rgba(250, 250, 250, 0.42)", L.font = "500 11px Geist, sans-serif", L.textAlign = "center";
      const d = l.y + l.h * 0.57;
      L.fillText("Left", l.x + l.w * 0.25, d), L.fillText("Front", l.x + l.w * 0.5, d), L.fillText("Right", l.x + l.w * 0.75, d), L.fillText("Back", l.x + 38, d), L.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function $l(i, o, c = 1) {
    let l = !1;
    L.strokeStyle = o, L.lineWidth = c, L.beginPath();
    for (const d of i) {
      const m = Ii(d);
      if (!m) {
        l = !1;
        continue;
      }
      l ? L.lineTo(m.x, m.y) : (L.moveTo(m.x, m.y), l = !0);
    }
    L.stroke();
  }
  function Tp(i = !1) {
    const o = A.width, c = A.height;
    if (i || (Dl() ? L.clearRect(0, 0, o, c) : (L.fillStyle = "#070707", L.fillRect(0, 0, o, c))), za(), Pl(
      L,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: h.viewYaw,
        pitchDeg: h.viewPitch,
        fovDeg: h.viewFov,
        coverageDeg: We(p.coverage)
      },
      La(),
      "modal_pano"
    ), h.showGrid && !h.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let w = -89; w <= 89; w += 4) m.push(On(d, w));
        $l(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let w = -180; w <= 180; w += 4) m.push(On(w, d));
        $l(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: On(-90, 0) },
        { name: "Front", dir: On(0, 0) },
        { name: "Right", dir: On(90, 0) },
        { name: "Back", dir: On(180, 0) }
      ];
      L.fillStyle = "rgba(250, 250, 250, 0.42)", L.font = "500 11px Geist, sans-serif", L.textAlign = "center", l.forEach((d) => {
        const m = Ii(d.dir);
        m && L.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function Rp(i, o = null, c = null, l = null) {
    if (h.mode === "frame") {
      const d = o || Pe();
      if (!d) return [];
      const m = c || Oi(d);
      return lg(i, d, m);
    }
    return Bl(i, l);
  }
  function Fa(i, o = null, c = null, l = null, d = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const w = Bl([i], d);
      return w[0] ? { x: w[0].x, y: w[0].y, z: 1 } : null;
    }
    const m = Va(i);
    return m ? Yn(m, o, c, l) : null;
  }
  function Lp(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = mn(c, i.layerKind), d = ur(c, i.layerKind, l), m = (d == null ? void 0 : d.centerUv) || ys(c, i.layerKind, l), w = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], v = h.mode === "frame" ? Pe() : null, S = v ? Oi(v) : null;
    for (const tt of l) {
      const gt = (tt == null ? void 0 : tt.geometry) || null, bt = (gt == null ? void 0 : gt.geometryKind) === "lasso_fill" ? gt == null ? void 0 : gt.points : (gt == null ? void 0 : gt.processedPoints) || (gt == null ? void 0 : gt.rawPoints) || (gt == null ? void 0 : gt.points) || [], _t = Rp(bt, v, S, w).filter((at) => Number.isFinite(at == null ? void 0 : at.x) && Number.isFinite(at == null ? void 0 : at.y));
      if (!_t.length) continue;
      const vt = gr(String((tt == null ? void 0 : tt.toolKind) || "pen")), W = Qe[vt] || Qe[er];
      b.push({
        points: _t,
        closed: String((gt == null ? void 0 : gt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((tt == null ? void 0 : tt.size) || 10) * Math.max(0.1, Number((W == null ? void 0 : W.sizeScale) ?? 1)) + 10),
        layerKind: String((tt == null ? void 0 : tt.layerKind) || i.layerKind || "paint")
      });
    }
    const N = Fa(m, null, v, S, w);
    if (!N) {
      const tt = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, tt), tt;
    }
    const F = Vh(d).map((tt) => Fa(tt, N.x, v, S, w)).filter((tt) => Number.isFinite(tt == null ? void 0 : tt.x) && Number.isFinite(tt == null ? void 0 : tt.y)).map((tt) => ({ x: Number(tt.x || 0), y: Number(tt.y || 0) }));
    if (F.length < 4) {
      const tt = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, tt), tt;
    }
    const V = (tt, gt) => ({
      x: (Number((tt == null ? void 0 : tt.x) || 0) + Number((gt == null ? void 0 : gt.x) || 0)) * 0.5,
      y: (Number((tt == null ? void 0 : tt.y) || 0) + Number((gt == null ? void 0 : gt.y) || 0)) * 0.5,
      a: tt,
      b: gt
    }), X = V(F[0], F[1]), H = V(F[1], F[2]), B = V(F[2], F[3]), nt = V(F[3], F[0]), mt = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...X },
        { edge: "right", ...H },
        { edge: "bottom", ...B },
        { edge: "left", ...nt }
      ],
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: { x: X.x, y: X.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return h._strokeGeomCache.set(o, mt), mt;
  }
  function Op(i, o) {
    const c = h.mode === "frame" ? Pe() : null, l = c ? Oi(c) : null, d = El(i), m = h.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, w = Fa(d, null, c, l, m), v = kp(i).map((F) => Fa(F, (w == null ? void 0 : w.x) ?? null, c, l, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(v) || v.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(o, F), F;
    }
    const S = v.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: S.reduce((F, V) => F + Number(V.x || 0), 0) / S.length,
        y: S.reduce((F, V) => F + Number(V.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return h._strokeGeomCache.set(o, k), k;
  }
  function Yn(i, o = null, c = null, l = null) {
    if (h.mode === "frame") {
      const mt = c || Pe(), tt = l || Oi(mt), gt = mt ? Ul(mt, i) : null;
      return gt ? {
        x: Number(tt.x || 0) + Number(gt.x || 0) * Number(tt.w || 0),
        y: Number(tt.y || 0) + Number(gt.y || 0) * Number(tt.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Ps(i, o);
    const { right: d, up: m, fwd: w } = ws(), b = wn(i, d), v = wn(i, m), S = wn(i, w), N = A.width, k = A.height, F = h.viewFov * Ie, V = 2 * Math.atan(Math.tan(F / 2) * (k / Math.max(N, 1))), X = N / 2 / Math.tan(F / 2), H = k / 2 / Math.tan(V / 2), B = Math.max(S, 1e-4), nt = Math.max(N, k) * 2;
    return {
      x: j(N / 2 + b / B * X, -nt, N + nt),
      y: j(k / 2 - v / B * H, -nt, k + nt),
      z: B
    };
  }
  function Fp(i) {
    const o = On(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = h.mode === "frame" ? Pe() : null, l = c ? Oi(c) : null, d = Yn(o, null, c, l);
    if (!d) return { visible: !1 };
    const m = Oa(i), b = Il(i).map((bt) => Yn(bt, d.x, c, l)), v = hr(m, 0, m.tanY), S = hr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), N = Yn(v, d.x, c, l), k = Yn(S, (N == null ? void 0 : N.x) ?? d.x, c, l), F = ((k == null ? void 0 : k.x) ?? N.x) - N.x, V = ((k == null ? void 0 : k.y) ?? N.y) - N.y, X = Math.hypot(F, V) || 1, H = {
      x: N.x + F / X * 30,
      y: N.y + V / X * 30
    }, B = Yn(hr(m, 0, m.tanY), d.x, c, l), nt = Yn(hr(m, m.tanX, 0), d.x, c, l), mt = Yn(hr(m, 0, -m.tanY), d.x, c, l), tt = Yn(hr(m, -m.tanX, 0), d.x, c, l), gt = [
      {
        edge: "top",
        x: B.x,
        y: B.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: nt.x,
        y: nt.y,
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
        x: tt.x,
        y: tt.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: d.x, y: d.y },
      corners: b.map((bt) => ({ x: bt.x, y: bt.y })),
      edgeMidpoints: gt,
      rotateStemBase: { x: N.x, y: N.y },
      rotateHandle: H,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function an(i) {
    if (xe(i)) {
      const d = String(i.actionGroupId || i.id || "").trim(), m = Gh(d, i.layerKind), w = h._strokeGeomCache.get(m);
      return w || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Lp(i, m));
    }
    if (Ue(i)) {
      const d = Pp(i), m = h._strokeGeomCache.get(d);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Op(i, d));
    }
    const o = Ap(i), c = h._strokeGeomCache.get(o);
    if (c) return c;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const l = Fp(i);
    return h._strokeGeomCache.set(o, l), l;
  }
  function $a(i, o, c, l = null) {
    const d = [];
    for (let m = 0; m <= c; m += 1) {
      const w = m / c;
      let b = 0, v = 0;
      o === 0 ? (b = w, v = 0) : o === 1 ? (b = 1, v = w) : o === 2 ? (b = 1 - w, v = 1) : (b = 0, v = 1 - w);
      const S = Mp(i, b, v), N = h.mode === "unwrap" ? Ps(S, l) : Ii(S);
      N && d.push(N);
    }
    return d;
  }
  function $p(i, o) {
    const c = On(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = h.mode === "unwrap" ? Ps(c) : null, d = l ? l.x : null, m = h.mode === "pano" ? 28 : 20, w = [
      $a(i, 0, m, d),
      $a(i, 1, m, d),
      $a(i, 2, m, d),
      $a(i, 3, m, d)
    ];
    L.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", L.lineWidth = o ? 2 : 1, L.beginPath();
    let b = !1;
    for (const v of w)
      for (const S of v)
        b ? L.lineTo(S.x, S.y) : (L.moveTo(S.x, S.y), b = !0);
    L.closePath(), L.stroke();
  }
  function Vp() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(o.z_index || 0) - Number(c.z_index || 0));
  }
  function Vl() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(c.z_index || 0) - Number(o.z_index || 0));
  }
  function Cs(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function zp(i, o, c, l) {
    if (Re(i)) {
      const d = L.globalAlpha;
      L.globalAlpha = Jh(i), h.mode === "frame" ? (L.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", L.lineWidth = c ? 2 : 1, Cs(L, o.corners), L.stroke()) : $p(i, c), L.globalAlpha = d;
      return;
    }
    L.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Cs(L, o.corners), L.fill(), L.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", L.lineWidth = c ? 2.8 : 1.9, Cs(L, o.corners), L.stroke();
  }
  function Hp(i, o, c) {
    L.fillStyle = c, o.corners.forEach((l) => {
      L.beginPath(), L.arc(l.x, l.y, 6.5, 0, Math.PI * 2), L.fill();
    }), xe(i) || (L.strokeStyle = "rgba(250, 250, 250, 0.9)", L.lineWidth = 1.8, L.beginPath(), L.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), L.lineTo(o.rotateHandle.x, o.rotateHandle.y), L.stroke(), L.fillStyle = c, L.beginPath(), L.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), L.fill());
  }
  function jp() {
    var b;
    const [i, o] = Cp(), c = Pn(), l = c.length > 1, d = e === "cutout" ? Vp() : Me(), m = d.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== d || h._sortedItemsCache.orderKey !== m) && (h._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const w = h._sortedItemsCache.sorted;
    for (const v of w) {
      const S = !l && Kh(v);
      if (h.mode === "frame" && !S || !h.showObjects) continue;
      const N = Re(v), k = fr(v);
      if (!N)
        continue;
      const F = an(v);
      if (!(e !== "stickers" && !F.visible) && (zp(v, F, S, k), S && F.visible)) {
        const V = k ? "#ff4d4f" : N && ve(v) ? "#f59e0b" : "#0070f3";
        Hp(v, F, V);
      }
    }
    if (l) {
      const v = bs(c);
      if (v != null && v.visible) {
        const S = vs(c) ? "#ff4d4f" : "#0070f3";
        L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.95)", L.lineWidth = 2, L.setLineDash([6, 4]), L.beginPath(), L.moveTo(v.corners[0].x, v.corners[0].y);
        for (let N = 1; N < v.corners.length; N += 1) L.lineTo(v.corners[N].x, v.corners[N].y);
        L.closePath(), L.stroke(), L.setLineDash([]), L.fillStyle = S, v.corners.forEach((N) => {
          L.beginPath(), L.arc(N.x, N.y, 6.5, 0, Math.PI * 2), L.fill();
        }), L.restore();
      }
    } else
      c.forEach((v) => {
        if (!xe(v) && !Ue(v)) return;
        const S = an(v);
        if (!(S != null && S.visible)) return;
        const N = fr(v) ? "#ff4d4f" : "#0070f3";
        L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.95)", L.lineWidth = 2, L.setLineDash([6, 4]), L.beginPath(), L.moveTo(S.corners[0].x, S.corners[0].y);
        for (let k = 1; k < S.corners.length; k += 1) L.lineTo(S.corners[k].x, S.corners[k].y);
        L.closePath(), L.stroke(), L.setLineDash([]), xe(v) && (L.fillStyle = N, S.corners.forEach((k) => {
          L.beginPath(), L.arc(k.x, k.y, 6.5, 0, Math.PI * 2), L.fill();
        })), L.restore();
      });
    if (((b = h.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = su(h.interaction.start, h.interaction.current);
      L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.9)", L.fillStyle = "rgba(255, 255, 255, 0.08)", L.lineWidth = 1, L.setLineDash([5, 4]), L.beginPath(), L.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), L.fill(), L.stroke(), L.restore();
    }
    h.hqFrames && i >= 40 && o >= 30 && (h.hqFrames -= 1, h.hqFrames > 0 && pt());
  }
  function Va(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Bn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Up(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Bp(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Le(i, "widthScale", 1),
      pressureLike: Le(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function Gp(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Is(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (l) {
      let H = null;
      i.forEach((B) => {
        const nt = Number((B == null ? void 0 : B.u) || 0), mt = Number((B == null ? void 0 : B.v) || 0), tt = (nt % 1 + 1) % 1, gt = H == null ? tt : H + fn(tt, (H % 1 + 1) % 1);
        d.set(B, { x: gt, y: mt }), H = gt;
      });
    }
    const m = (H) => !H || typeof H != "object" ? { x: 0, y: 0 } : d.get(H) || Up(H), w = (H, B, nt, mt = {}) => {
      const tt = l ? (Number(B) % 1 + 1) % 1 : Number(B), gt = Bp(H, tt, nt, mt);
      return d.set(gt, { x: Number(B), y: Number(nt) }), gt;
    }, b = (H, B, nt) => {
      const mt = m(H), tt = m(B);
      return w(H, nr(mt.x, tt.x, nt), nr(mt.y, tt.y, nt), {
        t: nr(Number((H == null ? void 0 : H.t) || 0), Number((B == null ? void 0 : B.t) || 0), nt),
        widthScale: nr(Le(H, "widthScale", 1), Le(B, "widthScale", 1), nt),
        pressureLike: nr(Le(H, "pressureLike", 1), Le(B, "pressureLike", 1), nt)
      });
    };
    if (i.length === 1) {
      const H = m(i[0]);
      return [w(i[0], H.x, H.y)];
    }
    const v = Gp(o, c), S = (H, B) => {
      const nt = [0];
      for (let at = 1; at < H.length; at += 1) {
        const Pt = m(H[at - 1]), Ft = m(H[at]);
        nt.push(nt[at - 1] + Math.hypot(Ft.x - Pt.x, Ft.y - Pt.y));
      }
      const mt = nt[nt.length - 1] || 0;
      if (mt <= 1e-8) {
        const at = H[0], Pt = m(at);
        return [w(at, Pt.x, Pt.y)];
      }
      const tt = [];
      let gt = 0;
      for (let at = 0; at <= mt + 1e-9; at += B) {
        for (; gt < nt.length - 2 && nt[gt + 1] < at; ) gt += 1;
        const Pt = nt[gt], Ft = nt[gt + 1], It = Math.max(1e-8, Ft - Pt);
        tt.push(b(H[gt], H[gt + 1], j((at - Pt) / It, 0, 1)));
      }
      const bt = H[H.length - 1], _t = m(bt), vt = tt[tt.length - 1], W = vt ? m(vt) : null;
      return (!W || Math.hypot(W.x - _t.x, W.y - _t.y) > B * 0.35) && tt.push(w(bt, _t.x, _t.y)), tt;
    }, N = (H) => {
      if (!Array.isArray(H) || H.length < 3) return H ? H.slice() : [];
      const B = m(H[0]), nt = [w(H[0], B.x, B.y)];
      for (let gt = 0; gt < H.length - 1; gt += 1) {
        const bt = H[gt], _t = H[gt + 1], vt = m(bt), W = m(_t), at = w(
          bt,
          vt.x * 0.75 + W.x * 0.25,
          vt.y * 0.75 + W.y * 0.25,
          {
            t: Number(bt.t || 0) * 0.75 + Number(_t.t || 0) * 0.25,
            widthScale: Le(bt, "widthScale", 1) * 0.75 + Le(_t, "widthScale", 1) * 0.25,
            pressureLike: Le(bt, "pressureLike", 1) * 0.75 + Le(_t, "pressureLike", 1) * 0.25
          }
        ), Pt = w(
          bt,
          vt.x * 0.25 + W.x * 0.75,
          vt.y * 0.25 + W.y * 0.75,
          {
            t: Number(bt.t || 0) * 0.25 + Number(_t.t || 0) * 0.75,
            widthScale: Le(bt, "widthScale", 1) * 0.25 + Le(_t, "widthScale", 1) * 0.75,
            pressureLike: Le(bt, "pressureLike", 1) * 0.25 + Le(_t, "pressureLike", 1) * 0.75
          }
        );
        nt.push(at, Pt);
      }
      const mt = H[H.length - 1], tt = m(mt);
      return nt.push(w(mt, tt.x, tt.y)), nt;
    }, k = S(i, v);
    if (k.length < 3) return k;
    const F = c ? 2 : 1;
    let V = k.slice();
    for (let H = 0; H < F; H += 1) V = N(V);
    return S(V, Math.max(v * 0.75, 55e-5));
  }
  function Le(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function Kp(i) {
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
  function Di(i, o, c = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(i)), l.height = Math.max(1, Math.round(o));
    const d = l.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, l.width, l.height), d.imageSmoothingEnabled = !0), { canvas: l, ctx: d };
  }
  function Ti() {
    const i = Ha();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function An() {
    const i = Ha();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Wp() {
    const i = ps(), o = An();
    return i ? `${o}:${i}` : o;
  }
  function qp() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function Yp() {
    h.paintCompositeRevision += 1;
  }
  function Xp() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function zl() {
    var i, o;
    h.paintEngineRevisionKey = null, (o = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, p), h.paintEngineRevisionKey = Ti();
  }
  function on() {
    h.objectVisualRevision = Number(h.objectVisualRevision || 0) + 1, Xp(), kt.backgroundDirty = !0, kt.dirty = !0;
  }
  function yn({ rebuildPaintEngine: i = !1 } = {}) {
    qp(), on(), i && zl();
  }
  function Ri() {
    Yp(), on();
  }
  function za() {
    var l;
    const i = Ha(), o = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== o && (h.paintEngine = Sc(i), h.paintEngineDescriptorKey = o, h.paintEngineRevisionKey = "");
    const c = Ti();
    h.paintEngineRevisionKey !== c && (h.paintEngineRevisionKey = c, (l = h.paintEngine) == null || l.rebuildCommitted(p));
  }
  function Ha() {
    const i = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Xn() {
    return Ha();
  }
  function Zp(i, o, c, l, d = null) {
    const m = Kp(i), w = Le(o, "widthScale", 1) * Le(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * w) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Ie) * c * w) : Math.max(0.5, m.value / (2 * Math.PI) * c * w) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * w);
  }
  function Jp(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, w = m ? 0.78 : 1;
    if (i.globalAlpha = d === "marker" ? 0.7 * w : 1, l === "mask") {
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
  function Qp(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function tg(i, o, c, l, d = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), Jp(i, c, d);
    const w = (b) => Qp(i, b, m);
    if (o.length === 1) {
      w(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const v = o[b], S = o[b + 1];
      if (!v || !S) continue;
      const N = Number(v.x || 0), k = Number(v.y || 0), F = Number(S.x || 0), V = Number(S.y || 0), X = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), H = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(N) || !Number.isFinite(k) || !Number.isFinite(F) || !Number.isFinite(V) || !Number.isFinite(X) || !Number.isFinite(H)) continue;
      const B = F - N, nt = V - k, mt = Math.hypot(B, nt);
      if (!Number.isFinite(mt) || mt < 1e-6) {
        w(v);
        continue;
      }
      if (mt > Math.max(l.w, l.h) * 0.5) continue;
      const tt = Math.max(0.5, Math.min(X, H)), gt = Math.max(0.35, Math.min(tt * 0.4, 2.25)), bt = Math.max(1, Math.ceil(mt / gt));
      for (let _t = 0; _t <= bt; _t += 1) {
        const vt = _t / bt;
        w({
          x: nr(N, F, vt),
          y: nr(k, V, vt),
          radiusPx: nr(X, H, vt)
        });
      }
    }
    w(o[o.length - 1]), i.restore();
  }
  function eg(i, o, c, l) {
    tg(i, o, c, l, { preview: !1 });
  }
  function ng(i, o, c, l, d) {
    var b, v, S, N;
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
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[m]) || 0) * l.w, Number(((v = o[0]) == null ? void 0 : v[w]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      i.lineTo(Number(((S = o[k]) == null ? void 0 : S[m]) || 0) * l.w, Number(((N = o[k]) == null ? void 0 : N[w]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Hl(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function rg(i, o) {
    const c = Hl(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Zp(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function jl(i, o, c = null) {
    var b, v, S, N;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = i.canvas) == null ? void 0 : v.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill")
      return ng(i.ctx, Hl(d), d, l), !0;
    const w = rg(d, l);
    return w.length ? (eg(i.ctx, w, d, l), !0) : !1;
  }
  function ig(i, o, c, l = 8) {
    const d = new Uint8Array(o * c), m = [], w = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let v = 0; v < c; v += 1)
      for (let S = 0; S < o; S += 1) {
        const N = v * o + S;
        if (d[N] || i[N] <= l) continue;
        let k = 0, F = 0;
        w[F] = S, b[F] = v, F += 1, d[N] = 1;
        const V = [];
        let X = S, H = v, B = S, nt = v;
        for (; k < F; ) {
          const mt = w[k], tt = b[k];
          k += 1, V.push({ x: mt, y: tt }), mt < X && (X = mt), tt < H && (H = tt), mt > B && (B = mt), tt > nt && (nt = tt);
          const gt = [
            [(mt - 1 + o) % o, tt],
            [(mt + 1) % o, tt],
            [mt, tt - 1],
            [mt, tt + 1]
          ];
          for (const [bt, _t] of gt) {
            if (_t < 0 || _t >= c) continue;
            const vt = _t * o + bt;
            d[vt] || i[vt] <= l || (d[vt] = 1, w[F] = bt, b[F] = _t, F += 1);
          }
        }
        m.push({ pixels: V, minX: X, minY: H, maxX: B, maxY: nt });
      }
    return m;
  }
  function ag(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((v) => Number((v == null ? void 0 : v.x) || 0)).filter((v) => Number.isFinite(v)))].sort((v, S) => v - S);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let l = -1, d = 0;
    for (let v = 0; v < c.length; v += 1) {
      const S = c[v], k = (v === c.length - 1 ? c[0] + o : c[v + 1]) - S - 1;
      k > l && (l = k, d = v);
    }
    const m = (c[(d + 1) % c.length] + o) % o;
    let w = 1 / 0, b = -1 / 0;
    for (const v of c) {
      const S = (v - m + o) % o;
      w = Math.min(w, S), b = Math.max(b, S);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - w + 1)
    };
  }
  function og(i, o, c = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), d = Number((i == null ? void 0 : i.height) || 0), m = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!m || l < 1 || d < 1) return [];
    const w = m.getImageData(0, 0, l, d), b = new Uint8Array(l * d);
    for (let N = 0; N < b.length; N += 1) b[N] = w.data[N * 4 + 3];
    return ig(b, l, d, 8).map((N, k) => {
      const F = ag(N, l);
      if (!F) return null;
      const V = Number(F.widthPx || 0), X = N.maxY - N.minY + 1, H = Number(F.startX || 0), B = document.createElement("canvas");
      B.width = V, B.height = X;
      const nt = B.getContext("2d");
      if (!nt) return null;
      const mt = nt.createImageData(V, X);
      return N.pixels.forEach(({ x: tt, y: gt }) => {
        const bt = (gt * l + tt) * 4, _t = (Number(tt || 0) - H + l) % l, vt = ((gt - N.minY) * V + _t) * 4;
        mt.data[vt + 0] = w.data[bt + 0], mt.data[vt + 1] = w.data[bt + 1], mt.data[vt + 2] = w.data[bt + 2], mt.data[vt + 3] = w.data[bt + 3];
      }), nt.putImageData(mt, 0, 0), {
        id: si("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + k * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: N.minY / d,
          u1: V / l,
          v1: (N.maxY + 1) / d
        },
        rasterDataUrl: B.toDataURL("image/png"),
        transform: {
          du: H / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ul(i, o) {
    if (!i || !o) return null;
    const c = Oa(i), l = wn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = wn(o, c.right) / l, m = wn(o, c.up) / l, w = d * c.cr + m * c.sr, b = -d * c.sr + m * c.cr;
    return {
      x: (w / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function sg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const c = dr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Ii(Va(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Bl(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const l = dr();
      return i.map((d) => {
        const m = (Number(d.u || 0) % 1 + 1) % 1, w = o == null ? m : Number(o || 0) + fn(m, o);
        return {
          x: l.x + w * l.w,
          y: l.y + Number(d.v || 0) * l.h
        };
      });
    }
    const c = i.map((l) => Ii(Va(l))).filter(Boolean);
    return c.every((l) => Number(l.z || 0) > 0) ? c.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function cg(i, o, c) {
    return !Array.isArray(i) || i.length < 3, [];
  }
  function lg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const d of i) {
      const m = Va(d), w = Ul(o, m);
      w && l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function ug() {
    return La(), !1;
  }
  function fg() {
    var v, S;
    if (((v = h.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, o = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let c;
    if (h.mode === "frame") {
      const N = Pe();
      c = cg(o, N);
    } else
      c = sg(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", d = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), w = Math.round(Number(d.g || 0) * 255), b = Math.round(Number(d.b || 0) * 255);
    L.save(), L.beginPath(), L.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let N = 1; N < c.length; N++) L.lineTo(Number(c[N].x || 0), Number(c[N].y || 0));
    L.closePath(), l ? (L.lineWidth = 2, L.setLineDash([6, 6]), L.lineDashOffset = 0, L.strokeStyle = "rgba(0,0,0,0.96)", L.stroke(), L.lineDashOffset = -6, L.strokeStyle = "rgba(255,255,255,0.96)", L.stroke(), L.setLineDash([]), L.lineDashOffset = 0) : (L.lineWidth = 1.5, L.setLineDash([6, 4]), L.strokeStyle = `rgba(${m},${w},${b},1)`, L.stroke(), L.setLineDash([])), L.restore();
  }
  function dg() {
    h.mode === "frame" ? ug() : h.mode === "unwrap" ? Dp(!1) : Tp(!1), jp(), fg(), ct && (ct.textContent = `${Math.round(h.viewFov)}°`), Ht(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, O.style.opacity = "1");
    const i = Np();
    i ? (R == null || R.removeAttribute("data-stage-ready"), R == null || R.setAttribute("data-stage-loading-kind", i)) : (R == null || R.setAttribute("data-stage-ready", ""), R == null || R.removeAttribute("data-stage-loading-kind"));
  }
  function hg(i = h.interaction) {
    if (e !== "stickers" || h.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function pg() {
    t.__panoLiveStateOverride = p, t.__panoLivePaintSurface = Bh();
  }
  function pt(i = {}) {
    var b, v, S, N, k, F, V, X, H, B;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), d = String(((b = h.interaction) == null ? void 0 : b.kind) || "");
    (!o || d === "view" || d === "pan_frame" || hg() || !!((v = h.viewTween) != null && v.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (kt.backgroundDirty = !0), o && dl() && (h.livePaintInteractionRevision += 1, kt.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Da(), Ta()), pg(), c && ((N = (S = t.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || N.call(S), (k = t.setDirtyCanvas) == null || k.call(t, !0, !1)), c && !o && ((V = (F = t.graph) == null ? void 0 : F.setDirtyCanvas) == null || V.call(F, !0, !0), (B = (H = (X = hn) == null ? void 0 : X.canvas) == null ? void 0 : H.setDirty) == null || B.call(H, !0, !0)), kt.dirty = !0;
  }
  function Gl() {
    const i = A.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return A.width !== o || A.height !== c || O.width !== o || O.height !== c ? (A.width = o, A.height = c, O.width = o, O.height = c, kt.backgroundDirty = !0, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Es(i = performance.now()) {
    var o;
    if (kt.running) {
      if (kt.lastTickTs = i, h.outputPreviewAnim !== h.outputPreviewAnimTo) {
        const c = Math.max(1, Number(h.outputPreviewAnimDurationMs)), l = j((i - Number(h.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? tv(l) : ev(l);
        h.outputPreviewAnim = nr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, m), kt.dirty = !0, l >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
      }
      if ((o = h.viewTween) != null && o.active) {
        const c = h.viewTween, l = j((i - c.startTs) / c.durationMs, 0, 1), d = Qb(l);
        h.viewYaw = qe(c.startYaw + c.deltaYaw * d), h.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * d, h.viewFov = c.startFov + (c.targetFov - c.startFov) * d, kt.backgroundDirty = !0, kt.dirty = !0, l >= 1 && (h.viewTween = null);
      }
      if (h.viewInertia.vx = Number(Ce.state.inertia.vx || 0), h.viewInertia.vy = Number(Ce.state.inertia.vy || 0), h.viewInertia.active = !!Ce.state.inertia.active, Ce.stepInertia(i) && (h.viewInertia.vx = Number(Ce.state.inertia.vx || 0), h.viewInertia.vy = Number(Ce.state.inertia.vy || 0), h.viewInertia.active = !!Ce.state.inertia.active, kt.backgroundDirty = !0, kt.dirty = !0), (kt.dirty || i - kt.lastSizeCheckTs >= 220) && (Gl(), kt.lastSizeCheckTs = i), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame(Es);
          return;
        }
        kt.dirty = !1, dg();
      }
      kt.rafId = requestAnimationFrame(Es);
    }
  }
  function gg() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function ae() {
    r || (h.historyController.commitActionGroup(JSON.stringify(jf(p))), Ls());
  }
  function Li(i) {
    if (r) return;
    const o = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Ls(), !o) return;
    const c = JSON.parse(o);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, c), h.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], yn(), sn(), Gt(), Cn(), pt({ cause: "cutout_frame" });
  }
  function Kl() {
    var c, l;
    const i = Array.isArray((c = h.historyController) == null ? void 0 : c.entries) ? h.historyController.entries : [], o = Number((l = h.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function sn() {
    var w, b, v;
    Y == null || Y.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const N = S.getAttribute("data-tool-mode") === h.primaryTool;
      S.classList.toggle("active", N), S.setAttribute("aria-pressed", N ? "true" : "false");
    });
    const i = h.primaryTool === "paint" || h.primaryTool === "mask";
    if (ut && st(i), !i) {
      Nt.forEach((S) => {
        S.classList.remove("is-active");
      }), Mt && (Mt.hidden = !0);
      return;
    }
    const o = h.primaryTool, c = Nt.find((S) => String(S.getAttribute("data-paint-pane") || "") === o) || null;
    if (Nt.forEach((S) => {
      S.classList.toggle("is-active", S === c);
    }), x.forEach((S) => {
      S.hidden = !1;
    }), D.forEach((S) => {
      S.hidden = !1;
    }), et && (clearTimeout(et), et = 0), I.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === h.paintTool);
    }), I.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === h.maskTool);
    }), Et) {
      const S = h.paintTool !== "eraser";
      Et.hidden = !1, Et.classList.toggle("disabled", !S), !S && Mt && !Mt.hidden && (et = window.setTimeout(() => {
        Mt.hidden = !0, et = 0;
      }, 170));
      const N = ((w = Co.find((F) => Io(h.paintColor, F.color))) == null ? void 0 : w.id) || "";
      Et.querySelectorAll("[data-paint-color-swatch]").forEach((F) => {
        const V = F.getAttribute("data-paint-color-swatch") === N;
        F.classList.toggle("active", V), F.setAttribute("aria-pressed", V ? "true" : "false"), F.disabled = !S;
      });
      const k = Et.querySelector("[data-paint-color-custom]");
      if (k) {
        const F = !N;
        k.classList.toggle("active", F), k.style.setProperty("--custom-color", xn(h.customPaintColor, 1)), k.setAttribute("aria-pressed", F ? "true" : "false"), k.disabled = !S;
      }
      if (Ae && (Ae.value = String(Math.round(j(Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), nn && (nn.textContent = `${Math.round(j(Number(((v = h.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), ee && (ee.style.background = xn(h.customPaintColor)), Mt) {
        const F = Yi(h.customPaintColor);
        Mt.style.setProperty("--picker-hue-color", xn({ ...lc(F.h, 1, 1), a: 1 }, 1)), Mt.style.setProperty("--picker-sat", `${j(F.s, 0, 1) * 100}%`), Mt.style.setProperty("--picker-val", `${(1 - j(F.v, 0, 1)) * 100}%`), Mt.style.setProperty("--picker-hue", `${j(F.h, 0, 1) * 100}%`);
      }
      if (He) {
        const F = Yi(h.customPaintColor);
        He.style.left = `${j(F.s, 0, 1) * 100}%`, He.style.top = `${(1 - j(F.v, 0, 1)) * 100}%`;
      }
      if (je) {
        const F = Yi(h.customPaintColor);
        je.style.left = `${j(F.h, 0, 1) * 100}%`;
      }
      if (rn && gn) {
        const F = Array.from({ length: 8 }, (V, X) => h.customPaintHistory[X] || null);
        gn.innerHTML = F.map((V, X) => `
          <button class="pano-paint-color-history-dot${V ? "" : " empty"}" type="button" data-paint-history-index="${X}" ${V ? `style="--swatch:${xn(V, 1)}"` : ""} aria-label="Recent color ${X + 1}" ${V ? "" : "disabled"}></button>
        `).join(""), gn.querySelectorAll("[data-paint-history-index]").forEach((V) => {
          V.onclick = () => {
            const X = Number(V.getAttribute("data-paint-history-index")), H = h.customPaintHistory[X];
            H && (h.customPaintColor = cn(H), h.paintColor = cn(H), sn());
          };
        });
      }
    }
    const l = gr(h.primaryTool === "paint" ? h.paintTool : h.maskTool), d = h.brushSizes[l] ?? 10, m = tp();
    x.forEach((S) => {
      S.classList.toggle("disabled", m);
    }), G.forEach((S) => {
      S.value = String(d);
      const N = (d - 1) / 119 * 100;
      S.style.setProperty("--v", `${j(N, 0, 100)}%`), S.disabled = m;
    }), K.forEach((S) => {
      S.textContent = String(d);
    });
  }
  function Wr(i, o, c, l, d, m, w, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = c, v.dataset.min = String(d), v.dataset.max = String(m), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${d}' max='${m}' step='${w}' value='${Number(o[c] || 0)}'><input type='number' min='${d}' max='${m}' step='${w}' value='${uc(o[c] || 0)}'>`;
    const [S, N] = v.querySelectorAll("input"), k = () => {
      const V = Number(d), X = Number(m), B = (Number(S.value) - V) / Math.max(1e-6, X - V) * 100;
      S.style.setProperty("--v", `${j(B, 0, 100)}%`);
    };
    S.disabled = !b, N.disabled = !b;
    const F = (V) => {
      if (!b) return;
      let X = Number(V);
      Number.isNaN(X) && (X = 0), X = j(X, d, m), c === "yaw_deg" && (X = qe(X)), o[c] = X, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = Lr(o)), S.value = String(X), N.value = uc(X), k(), pt();
    };
    S.oninput = () => F(S.value), N.oninput = () => F(N.value), S.onchange = () => ae(), N.onchange = () => ae(), k(), i.appendChild(v);
  }
  function Ds() {
    const i = le();
    if (!i) return;
    h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: oi(i)
    }, J.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const w = m.dataset.key;
      if (!w || !(w in i)) return;
      const b = m.querySelector("input[type='range']"), v = m.querySelector("input[type='number']");
      if (!b || !v) return;
      const S = Number(m.dataset.min ?? b.min ?? 0), N = Number(m.dataset.max ?? b.max ?? 0);
      let k = Number(i[w] || 0);
      Number.isNaN(k) && (k = 0), k = j(k, S, N);
      const F = String(k);
      b.value !== F && (b.value = F);
      const V = uc(k);
      v.value !== V && (v.value = V);
      const X = (k - S) / Math.max(1e-6, N - S) * 100;
      b.style.setProperty("--v", `${j(X, 0, 100)}%`);
    });
    const c = oi(i), l = J.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), J.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function Wl({ disabled: i = !1, onChange: o }) {
    const c = We(p.coverage), l = document.createElement("div");
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
    const d = l.querySelector("[data-setting='coverage']"), m = (w) => {
      const b = We(w);
      d.setAttribute("data-selected", b === 180 ? "1" : "0"), d.querySelectorAll(".pano-segment-btn").forEach((v) => {
        v.setAttribute("aria-pressed", We(v.getAttribute("data-value")) === b ? "true" : "false"), v.disabled = !!i;
      });
    };
    return d.querySelectorAll(".pano-segment-btn").forEach((w) => {
      w.onclick = () => {
        if (i) return;
        const b = We(w.getAttribute("data-value"));
        b !== We(p.coverage) && (o == null || o(b), m(b));
      };
    }), m(c), l;
  }
  function Gt() {
    var at, Pt, Ft, It, Tt, Vt, jt, Ut, he, Zr, Jr, $i, Ya, Qr, ti, Vi;
    if (a) return;
    const i = [...J.children].slice(0, 2);
    J.innerHTML = "", i.forEach((At) => J.appendChild(At));
    const o = J.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const At = document.createElement("div");
      At.className = "pano-inspector", At.appendChild(Wl({
        onChange: (Kt) => {
          var oe;
          p.coverage = Kt, h.coverage = Kt, g && (g.value = String(Kt), (oe = g.callback) == null || oe.call(g, g.value)), kt.backgroundDirty = !0, pt(), Gt();
        }
      }));
      const Bt = document.createElement("details");
      Bt.className = "pano-ui-settings", Bt.open = !1, Bt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Rt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(at = p.ui_settings) != null && at.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Pt = p.ui_settings) != null && Pt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ft = p.ui_settings) != null && Ft.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(It = p.ui_settings) != null && It.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tt = p.ui_settings) != null && Tt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Vt = p.ui_settings) != null && Vt.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const ue = Bt.querySelector("[data-setting='invert-x']"), In = Bt.querySelector("[data-setting='invert-y']"), Jn = Bt.querySelector("[data-ui-picker='quality']"), En = Bt.querySelector("[data-action='ui-reset-defaults']"), Qn = (Kt, oe, vn, ei) => {
        const mr = Kt.querySelector(".pano-picker-trigger"), zi = Kt.querySelector(".pano-picker-label"), _n = Kt.querySelector(".pano-picker-pop"), yr = () => {
          const Tn = String(vn()), Rn = oe.find((Hi) => String(Hi.value) === Tn) || oe[0];
          zi.textContent = Rn.label, _n.innerHTML = "", oe.forEach((Hi) => {
            const ji = document.createElement("button");
            ji.type = "button", ji.className = `pano-picker-item${String(Hi.value) === Tn ? " active" : ""}`, ji.textContent = Hi.label, ji.onclick = () => {
              ei(Hi.value), _n.hidden = !0, yr(), pr(), pt();
            }, _n.appendChild(ji);
          });
        };
        return mr.onclick = (Tn) => {
          Tn.stopPropagation(), Bt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Rn) => {
            Rn !== _n && (Rn.hidden = !0);
          }), _n.hidden = !_n.hidden;
        }, yr(), yr;
      }, Dn = (Kt, oe) => {
        Kt.setAttribute("data-selected", oe ? "1" : "0"), Kt.querySelectorAll(".pano-segment-btn").forEach((vn) => {
          vn.setAttribute("aria-pressed", vn.getAttribute("data-value") === (oe ? "1" : "0") ? "true" : "false");
        });
      };
      ue.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const oe = Kt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = oe, Dn(ue, oe), pr(), pt();
        };
      }), In.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const oe = Kt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = oe, Dn(In, oe), pr(), pt();
        };
      });
      const Ot = Qn(
        Jn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Kt) => {
          const oe = String(Kt || "balanced");
          p.ui_settings.preview_quality = oe === "draft" || oe === "high" ? oe : "balanced";
        }
      );
      En.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Dn(ue, !1), Dn(In, !1), Ot(), pr(), pt();
      }, At.appendChild(Bt), J.appendChild(At);
      const Yt = document.createElement("div");
      Yt.className = "pano-side-footer", Yt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Yt.querySelector("[data-action='close-preview']").onclick = () => Xr(), J.appendChild(Yt), Fi(At);
      return;
    }
    const c = le(), l = Pn(), d = ml();
    l.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && d !== "stroke" && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (d === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (d === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: oi(c)
    });
    const m = h.panelLastValues || (e === "stickers" || d === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = d === "stroke" ? null : c, b = w || m, v = !!w, S = document.createElement("div");
    S.className = "pano-inspector", S.appendChild(Wl({
      disabled: r,
      onChange: (At) => {
        var Bt, ue;
        p.coverage = At, h.coverage = At, g && (g.value = String(At), (Bt = g.callback) == null || Bt.call(g, g.value)), be(), (ue = t.setDirtyCanvas) == null || ue.call(t, !0, !0), Gt(), Ht(), pt();
      }
    }));
    const N = document.createElement("div");
    for (N.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; N.firstChild; ) S.appendChild(N.firstChild);
    if (J.appendChild(S), e === "stickers" || e === "cutout") {
      const At = document.createElement("div");
      At.className = "pano-field-wide pano-target-row";
      const Bt = "Selection";
      At.innerHTML = `
        <label>${Bt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const ue = At.querySelector(".pano-picker-trigger"), In = At.querySelector(".pano-picker-label"), Jn = At.querySelector(".pano-picker-pop"), En = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Me().forEach((Ot, Yt) => {
        var vn, ei;
        const Kt = ve(Ot) ? String(Ot.id || Er) : String(((ei = (vn = p.assets) == null ? void 0 : vn[Ot.asset_id]) == null ? void 0 : ei.name) || Ot.asset_id || Ot.id), oe = `${Yt + 1}. ${Kt}${ve(Ot) && Gr(Ot) ? " (hidden)" : ""}`;
        En.push({ id: Ot.id, label: oe, item: Ot, kind: "image" });
      }) : Xh().forEach((Ot) => {
        En.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const Qn = (w == null ? void 0 : w.id) || "", Dn = En.find((Ot) => Ot.id === Qn) || En[0];
      In.innerHTML = Dn.item ? yl(Dn) : go(String(Dn.label || "")), Jn.innerHTML = "", En.forEach((Ot) => {
        const Yt = document.createElement("button");
        Yt.type = "button", Yt.className = `pano-picker-item${Ot.id === Qn ? " active" : ""}`, Yt.innerHTML = Ot.item ? yl(Ot) : go(String(Ot.label || "")), Yt.onclick = () => {
          Jn.hidden = !0, Ea(Ot.item || null);
          const Kt = Ot.item || null;
          if (Kt && !xe(Kt)) {
            const oe = qe(Number(Kt.yaw_deg || 0)), vn = j(Number(Kt.pitch_deg || 0), -89.9, 89.9);
            De(oe, vn, h.viewFov);
          }
          Gt(), Ht(), pt();
        }, Jn.appendChild(Yt);
      }), ue.disabled = En.length <= 1, ue.onclick = (Ot) => {
        Ot.stopPropagation(), !ue.disabled && (Jn.hidden = !Jn.hidden);
      }, S.appendChild(At);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Rt.copy}<span>Copy State</span></button>`;
    const F = k.querySelector("[data-action='copy-state-inline']");
    F.disabled = !v || d === "stroke" || l.length > 1, F.onclick = async () => {
      if (!v || d === "stroke" || l.length > 1) return;
      const At = JSON.stringify(e === "cutout" && d !== "image" ? xl(b) : cp(c));
      try {
        await navigator.clipboard.writeText(At);
        const Bt = F.querySelector("span");
        Bt && (Bt.textContent = "Copied", window.setTimeout(() => {
          Bt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(k);
    const V = document.createElement("div");
    V.className = `pano-params${h.panelWasEnabled ? "" : " disabled"}`, S.appendChild(V), l.length > 1 ? (V.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, V.classList.toggle("disabled", !v), h.panelWasEnabled = v, Da()) : (Wr(V, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !r), Wr(V, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !r), Wr(V, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !r), Wr(V, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !r), e === "stickers" || d === "image" ? Wr(V, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !r) : Wr(V, b, "roll_deg", "Roll", -180, 180, 0.1, v && !r), v !== h.panelWasEnabled ? requestAnimationFrame(() => {
      V.classList.toggle("disabled", !v);
    }) : V.classList.toggle("disabled", !v), h.panelWasEnabled = v, Da());
    const X = document.createElement("div");
    X.className = "pano-visibility-section", X.innerHTML = `
      <div class="pano-section-title">
        <span>Layers</span>
      </div>
      <div class="pano-visibility-stack">
        <div class="pano-visibility-row" data-visibility-row="mask">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Rt.circle_dashed_tool}</span><span>Mask</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="mask" aria-label="Toggle mask"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="objects">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Rt.image}</span><span>Paint / Images</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="objects" aria-label="Toggle paint and images"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="panorama">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Rt.globe}</span><span>Panorama</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="panorama" aria-label="Toggle panorama"></button>
        </div>
      </div>
    `;
    const H = Array.isArray((Ut = (jt = p == null ? void 0 : p.painting) == null ? void 0 : jt.paint) == null ? void 0 : Ut.strokes) ? p.painting.paint.strokes.length : 0, B = Array.isArray((Zr = (he = p == null ? void 0 : p.painting) == null ? void 0 : he.mask) == null ? void 0 : Zr.strokes) ? p.painting.mask.strokes.length : 0, nt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((At) => String((At == null ? void 0 : At.name) || "")) : [], mt = Fh(
      t,
      nt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), tt = !!String((mt == null ? void 0 : mt.src) || "").trim() || vl("pano_input_images").length > 0, gt = Array.isArray(Me()) && Me().length > 0 || H > 0, bt = B > 0, _t = (At) => At === "panorama" ? tt : At === "objects" ? gt : bt, vt = (At, Bt) => {
      const ue = At.closest("[data-visibility-row]"), In = _t(String(At.getAttribute("data-visibility") || ""));
      At.innerHTML = Bt ? Rt.eye : Rt.eye_dashed, At.setAttribute("aria-pressed", Bt ? "true" : "false"), At.setAttribute("data-tip", Bt ? "Hide" : "Show"), At.disabled = !In, At.classList.toggle("active", !!Bt), ue == null || ue.classList.toggle("is-hidden", !Bt), ue == null || ue.classList.toggle("is-disabled", !In);
    };
    if (X.querySelectorAll("[data-visibility]").forEach((At) => {
      const Bt = String(At.getAttribute("data-visibility") || ""), ue = () => Bt === "panorama" ? !!h.showPanorama : Bt === "objects" ? !!h.showObjects : !!h.showMask;
      vt(At, ue()), At.onclick = () => {
        _t(Bt) && (Bt === "panorama" ? h.showPanorama = !h.showPanorama : Bt === "objects" ? h.showObjects = !h.showObjects : h.showMask = !h.showMask, vt(At, ue()), pt());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild(X), !r) {
      const At = document.createElement("details");
      At.className = "pano-ui-settings", At.open = !1, At.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Rt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Jr = p.ui_settings) != null && Jr.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${($i = p.ui_settings) != null && $i.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ya = p.ui_settings) != null && Ya.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Qr = p.ui_settings) != null && Qr.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(ti = p.ui_settings) != null && ti.invert_view_y ? "false" : "true"}">Normal</button>
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
      const Bt = At.querySelector("[data-setting='invert-x']"), ue = At.querySelector("[data-setting='invert-y']"), In = At.querySelector("[data-ui-picker='quality']"), Jn = At.querySelector("[data-action='ui-reset-defaults']"), En = (Ot, Yt, Kt, oe) => {
        const vn = Ot.querySelector(".pano-picker-trigger"), ei = Ot.querySelector(".pano-picker-label"), mr = Ot.querySelector(".pano-picker-pop"), zi = () => {
          const _n = String(Kt()), yr = Yt.find((Tn) => String(Tn.value) === _n) || Yt[0];
          ei.textContent = yr.label, mr.innerHTML = "", Yt.forEach((Tn) => {
            const Rn = document.createElement("button");
            Rn.type = "button", Rn.className = `pano-picker-item${String(Tn.value) === _n ? " active" : ""}`, Rn.textContent = Tn.label, Rn.onclick = () => {
              oe(Tn.value), mr.hidden = !0, zi(), pr(), t.setDirtyCanvas(!0, !0), pt();
            }, mr.appendChild(Rn);
          });
        };
        return vn.onclick = (_n) => {
          _n.stopPropagation(), At.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((yr) => {
            yr !== mr && (yr.hidden = !0);
          }), mr.hidden = !mr.hidden;
        }, zi(), zi;
      }, Qn = (Ot, Yt) => {
        Ot.setAttribute("data-selected", Yt ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
          Kt.setAttribute("aria-pressed", Kt.getAttribute("data-value") === (Yt ? "1" : "0") ? "true" : "false");
        });
      };
      Bt.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Yt = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = Yt, Qn(Bt, Yt), pr(), t.setDirtyCanvas(!0, !0), pt();
        };
      }), ue.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Yt = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = Yt, Qn(ue, Yt), pr(), t.setDirtyCanvas(!0, !0), pt();
        };
      });
      const Dn = En(
        In,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Ot) => {
          const Yt = String(Ot || "balanced");
          p.ui_settings.preview_quality = Yt === "draft" || Yt === "high" ? Yt : "balanced";
        }
      );
      Jn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Qn(Bt, !1), Qn(ue, !1), Dn(), pr(), t.setDirtyCanvas(!0, !0), pt();
      }, S.appendChild(At);
    }
    const W = document.createElement("div");
    W.className = "pano-side-footer", W.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, W.querySelector("[data-action='cancel-close']").onclick = () => Xr(), W.querySelector("[data-action='save-close']").onclick = () => {
      tu(), Xr();
    }, J.appendChild(W), Fi(S);
  }
  function ja(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function ql(i) {
    if (r || e !== "stickers" && e !== "cutout" || !ja(i)) return;
    const o = mo("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((w, b) => {
        const v = new Image();
        v.onload = () => w(v), v.onerror = () => b(new Error("image load failed")), v.src = c;
      });
      ht.set(o, l);
      const d = mo("st");
      p.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: kr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: bl()
      }), Ea(p.stickers[p.stickers.length - 1]), eu(), ae(), Gt(), Ht(), pt();
      const m = (async () => {
        const w = await Ss(i, String(i.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (p.assets[o] = w, Kr(), be(), Gt(), Ht(), pt());
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
        var w;
        return String((m == null ? void 0 : m.id) || "") === String(((w = h.selection) == null ? void 0 : w.id) || "");
      }) && Ea(null), Gt(), Ht(), pt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function Yl(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Ts() {
    r || e !== "stickers" && e !== "cutout" || Yl((i) => {
      ql(i);
    });
  }
  async function mg(i) {
    var S;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = le();
    if (!o || !Re(o) || ve(o) || !ja(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), d = l ? Ge(((S = p.assets) == null ? void 0 : S[l]) || null) : null, m = Number(o.vFOV_deg || 0), w = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = mo("asset"), v = URL.createObjectURL(i);
    try {
      const N = await new Promise((F, V) => {
        const X = new Image();
        X.onload = () => F(X), X.onerror = () => V(new Error("image load failed")), X.src = v;
      });
      ht.set(b, N), o.asset_id = b, o.vFOV_deg = kr(
        Number(o.hFOV_deg || 30),
        Number(N.naturalWidth || N.width || 1),
        Number(N.naturalHeight || N.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, on(), ae(), Gt(), Ht(), pt();
      const k = (async () => {
        const F = await Ss(i, String(i.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((H) => String((H == null ? void 0 : H.id) || "") === c && String((H == null ? void 0 : H.asset_id) || "") === b) && (p.assets[b] = F, Kr(), be(), Gt(), Ht(), pt());
      })();
      ta.set(b, k);
      try {
        await k;
      } finally {
        ta.delete(b);
      }
    } catch {
      delete p.assets[b], ht.delete(b);
      const N = (Array.isArray(p.stickers) ? p.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === c) || null;
      N && String(N.asset_id || "") === b && (l && d && (p.assets[l] = d), N.asset_id = l, N.vFOV_deg = m, N.crop = w ? { ...w } : null), on(), Gt(), Ht(), pt();
    } finally {
      URL.revokeObjectURL(v);
    }
  }
  function yg() {
    if (r) return;
    const i = le();
    !i || !Re(i) || ve(i) || Yl((o) => {
      mg(o);
    });
  }
  async function bg() {
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
        const w = await fetch(m).then((k) => k.blob()), b = String(w.type || "image/png").split("/")[1] || "png", v = String((d == null ? void 0 : d.name) || `${l}.${b}`), S = new File([w], v, { type: w.type || "image/png" }), N = await Ss(S, v);
        p.assets[l] = {
          ...N,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (be(), pt());
  }
  function Lv() {
  }
  function vg() {
    r || e === "cutout" && (p.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, p.active.selected_shot_id = null, ae(), be(), Gt(), pt());
  }
  function _g() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const c of i)
      ve(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function Xl(i, o, c = "Clear") {
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
      const w = d.querySelector("[data-action='cancel']"), b = d.querySelector("[data-action='confirm']");
      w.onclick = () => m(!1), b.onclick = () => m(!0), R.appendChild(d), b.focus();
    });
  }
  async function Zl() {
    var c, l;
    if (r || !await Xl(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ua(null), yn();
    const o = _g();
    e === "stickers" ? (p.stickers = o, p.assets = {}, h.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, Kr()) : (p.stickers = o, p.assets = {}, p.shots = [], h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Kr()), ae(), be(), Gt(), Ht(), pt();
  }
  async function wg(i) {
    var m, w, b, v;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = Yr(o);
    if (!(!l.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((w = h.interaction) == null ? void 0 : w.layerKind) === o) || !await Xl(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = h.interaction) == null ? void 0 : b.kind) === "draw" && ((v = h.interaction) == null ? void 0 : v.layerKind) === o) {
        const S = Xn();
        S && h.paintEngine.cancelActiveStroke(S), h.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = un().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (ke().length = 0), yn(), ae(), be(), Gt(), Ht(), sn(), pt();
    }
  }
  function xg() {
    if (r) return;
    const i = le();
    if (!i || !Re(i) || ve(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = mo("st"), o.yaw_deg = qe((o.yaw_deg || 0) + 8), o.z_index = bl(), p.stickers.push(o), p.active.selected_sticker_id = o.id, h.selectedId = o.id, h.selectedIds = [o.id], on(), ae(), be(), Ht(), Gt(), pt();
  }
  function Jl() {
    var c, l, d, m, w, b;
    if (r) return;
    const i = Pn(), o = le();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const v = new Set(i.filter((k) => xe(k)).map((k) => String(k.actionGroupId || k.id || ""))), S = new Set(i.filter((k) => Ue(k)).map((k) => Te(k.rasterObjectId || k.id || ""))), N = new Set(i.filter(Re).map((k) => String(k.id || "")));
        v.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (c = p.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((k) => !v.has(String((k == null ? void 0 : k.actionGroupId) || ""))), p.painting.groups = ke().filter((k) => !v.has(String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || ""))), yn()), S.size > 0 && (p.painting.raster_objects = un().filter((k) => !S.has(String((k == null ? void 0 : k.id) || ""))), Ri()), N.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((k) => N.has(String((k == null ? void 0 : k.id) || "")) ? ve(k) ? (Gr(k) || (k.visible = !1), !0) : !1 : !0), Kr(), on()), h.selectedId = null, h.selectedIds = [], ae(), be(), Gt(), Ht(), pt();
        return;
      }
      if (xe(o)) {
        const v = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((m = (d = p.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? p.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== v), p.painting.groups = ke().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== v), yn(), h.selectedId = null, h.selectedIds = [], ae(), be(), Gt(), Ht(), pt();
        return;
      }
      if (Ue(o)) {
        const v = Te(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = un().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== v), Ri(), h.selectedId = null, h.selectedIds = [], ae(), be(), Gt(), Ht(), pt();
        return;
      }
      if (e === "stickers" || Re(o)) {
        if (ve(o)) {
          if (Gr(o)) return;
          o.visible = !1, on(), ae(), be(), Gt(), Ht(), pt();
          return;
        }
        p.stickers = p.stickers.filter((v) => v.id !== o.id), Kr(), on(), h.selectedId = ((w = p.stickers[0]) == null ? void 0 : w.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, ae(), be(), Gt(), Ht(), pt();
        return;
      }
      vg();
    }
  }
  function Sg(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const F = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(F)) {
        const [H, B] = F.split(":").map((nt) => Number(nt));
        if (Number.isFinite(H) && Number.isFinite(B)) return H >= B;
      }
      const V = Number(i.hFOV_deg || 64), X = Number(i.vFOV_deg || 40);
      return Math.abs(V - X) > 1e-6 ? V >= X : Dc(i) >= 1;
    })();
    let [d, m] = c[String(o)] || c["1:1"];
    d >= m !== l && ([d, m] = [m, d]);
    const w = d / m, b = j(Number(i.hFOV_deg || 64), 1, 179), v = j(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * v)), N = j(S * Math.sqrt(w), 1, 179), k = j(S / Math.sqrt(w), 1, 179);
    i.hFOV_deg = N, i.vFOV_deg = k, i.aspect_id = String(o);
  }
  function Ng(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = Lr(i);
  }
  function Ql() {
    Br().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Mg() {
    if (r) return;
    const i = Pn();
    if (!le() || i.length === 0) return;
    Ql();
    const c = Br(), l = new Set(i.map((b) => Re(b) ? `sticker:${String(b.id || "")}` : Ue(b) ? `rasterObject:${Te(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (c.forEach((b) => {
      var S, N;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((N = b.item) == null ? void 0 : N.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : m.push(b);
    }), !d.length || d[d.length - 1] === c[c.length - 1]) return;
    [...m, ...d].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), on(), ae(), be(), Ht(), pt();
  }
  function kg() {
    if (r) return;
    const i = Pn();
    if (!le() || i.length === 0) return;
    Ql();
    const c = Br(), l = new Set(i.map((b) => Re(b) ? `sticker:${String(b.id || "")}` : Ue(b) ? `rasterObject:${Te(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (c.forEach((b) => {
      var S, N;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((N = b.item) == null ? void 0 : N.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : m.push(b);
    }), !d.length || d[0] === c[0]) return;
    [...d, ...m].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), on(), ae(), be(), Ht(), pt();
  }
  function tu() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = Rc(f.value, Number(p.output_preset || 2048))), g && (p.coverage = We(g.value)), y && (p.bg_color = String(y.value || p.bg_color || "#00ff00")), Cn(), t.setDirtyCanvas(!0, !0));
  }
  function Cn() {
    var o;
    if (r) return;
    p.coverage = We(p.coverage);
    const i = JSON.stringify(p);
    _ && (_.value = i, (o = _.callback) == null || o.call(_, i));
  }
  function pr() {
    p.ui_settings = uv(p.ui_settings), r || Cn();
  }
  function be() {
    var i;
    r || (Cn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function eu() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", sn(), Gt());
  }
  function qr(i) {
    const o = A.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * A.width,
      y: (i.clientY - o.top) / o.height * A.height
    };
  }
  function Ua(i) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function nu() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Pe() {
    return null;
  }
  function Oi(i = Pe()) {
    return null;
  }
  function ru() {
    return !1;
  }
  function bn(i, o = performance.now()) {
    if (h.mode === "unwrap") {
      const m = dr(), w = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (w % 1 + 1) % 1,
        v: j(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = xs(i.x, i.y), { lon: l, lat: d } = Cl(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Zn(i, o, c = performance.now()) {
    return null;
  }
  function Pg(i, o) {
    return !1;
  }
  function Ag(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function gr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? er : Qe[o] ? o : h.activeBrushPresetId || er;
  }
  function iu() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (nu() || ru());
  }
  function au() {
    var i;
    return iu() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ba(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), d = o !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, w = m.inside !== d || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return h.pointerPos = { x: c, y: l, inside: d }, w;
  }
  function Cg() {
    var N, k;
    if (!au()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? h.maskTool : h.paintTool, c = gr(o), l = Qe[c] || Qe[er], d = Number(h.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(3, m * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : cn(h.paintColor), v = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : j(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : j(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: w,
      fillStyle: xn(b, v),
      strokeStyle: xn(b, S),
      x: Number(((N = h.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((k = h.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function Ig() {
    var F, V, X;
    const i = Cg();
    if (!C) return;
    if (!i) {
      C.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", d = 0, m = i.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let N = Number(i.hotspotX ?? o * 0.5), k = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = Xo, c = Xo, l = "0", w = "0", b = "none", N = Zb, k = Jb, m = rv(i.fillStyle, S, v);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const H = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * H), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, d = Number(((X = (V = i.preset) == null ? void 0 : V.angle) == null ? void 0 : X.value) || 0) * Rr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    C.style.display = "block", C.style.width = `${Math.round(o)}px`, C.style.height = `${Math.round(c)}px`, C.style.borderRadius = l, C.style.border = w, C.style.boxShadow = b, C.style.background = m, C.style.backgroundRepeat = "no-repeat", C.style.backgroundPosition = "center", C.style.backgroundSize = "contain", C.style.transform = `translate(${Math.round(i.x - N)}px, ${Math.round(i.y - k)}px) rotate(${d}deg)`;
  }
  function Eg() {
    var mt;
    if (!T || !q) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? h.maskTool : h.paintTool;
    if (o === "lasso_fill") return;
    const c = gr(o), l = Qe[c] || Qe[er], d = Number(h.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(6, m * 0.5), b = o === "eraser", v = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : cn(h.paintColor), S = i === "mask" ? xn(v, 0.22) : b ? "rgba(255,255,255,0.14)" : xn(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), N = i === "mask" ? xn(v, 0.96) : b ? "rgba(255,255,255,0.72)" : xn(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let k = w * 2, F = w * 2, V = "999px", X = 0, H = S;
    const B = "rgba(222, 222, 222, 0.72)", nt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const tt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, w * 2 * tt), F = Math.max(10, w * 2), V = `${Math.min(8, F * 0.42)}px`, X = Number(((mt = l == null ? void 0 : l.angle) == null ? void 0 : mt.value) || 0) * Rr;
    } else o === "brush" ? H = `radial-gradient(circle at 50% 50%, ${N} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, w * 1.8), F = k, H = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : b && (H = "rgba(255,255,255,0.12)");
    q.style.width = `${Math.round(k)}px`, q.style.height = `${Math.round(F)}px`, q.style.borderRadius = V, q.style.background = H, q.style.border = `1px solid ${B}`, q.style.boxShadow = `0 0 0 1px ${nt}`, q.style.transform = `rotate(${X}deg)`, U && (clearTimeout(U), U = 0), T.classList.remove("fade-out"), T.classList.add("show");
  }
  function Ga() {
    !T || !T.classList.contains("show") || (T.classList.add("fade-out"), U && clearTimeout(U), U = window.setTimeout(() => {
      T.classList.remove("show", "fade-out"), U = 0;
    }, 180));
  }
  function Dg(i, o, c, l) {
    const d = gr(o), m = Qe[d] || Qe[er], w = h.brushSizes[d] ?? 10, b = Math.max(1, w) * Math.max(0.1, m.sizeScale ?? 1), v = Ag(l, b), S = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), N = {
      id: si(i),
      actionGroupId: si("ag"),
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
        rawPoints: S.map((k) => ({ ...k })),
        points: S.map((k) => ({ ...k }))
      }
    };
    return Of(N, m), Number(m.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function Tg(i, o, c, l) {
    const d = c.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = gr(o), w = Qe[m] || Qe[er], b = {
      id: si(i),
      actionGroupId: si("ag"),
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
    return Of(b, w), Number(w.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Yr(i) {
    const o = p.painting || (p.painting = ua(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Rg(i, o, c = performance.now()) {
    let l;
    if (h.mode === "frame") {
      const S = Pe();
      if (!S) return !1;
      l = Zn(o, S, c);
    } else
      l = bn(o, c);
    const d = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, w = d[d.length - 1];
    if (w) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(w.u ?? w.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (S < 15e-4 && N < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...b }), m.push({ ...b });
    const v = Xn();
    if (v) {
      const S = h.paintEngine.ensureTarget(v);
      h.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Lg(i, o, c = performance.now()) {
    var w, b;
    let l;
    if (h.mode === "frame") {
      const v = Pe();
      if (!v) return !1;
      l = Zn(o, v, c);
    } else
      l = bn(o, c);
    const d = (b = (w = i == null ? void 0 : i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(d)) return !1;
    const m = d[d.length - 1];
    if (m) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (v < 15e-4 && S < 15e-4) return !1;
    }
    return d.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Og(i) {
    var tt, gt, bt, _t, vt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    za();
    const c = Xn(), l = Di(c.width, c.height);
    if (!jl(l, o, { w: c.width, h: c.height })) return !1;
    const d = ((gt = (tt = l.ctx) == null ? void 0 : tt.getImageData(0, 0, c.width, c.height)) == null ? void 0 : gt.data) || null;
    if (!d) return !1;
    const m = new Map(ke().map((W) => [String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim(), W ? { ...W } : null])), w = [], b = [], v = [...un().filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") !== "paint")];
    let S = !1, N = Br().reduce((W, at) => Math.max(W, Number((at == null ? void 0 : at.z_index) || 0)), -1) + 1;
    function k(W, at, Pt, Ft = 8) {
      let It = at, Tt = Pt, Vt = -1, jt = -1;
      for (let Ut = 0; Ut < Pt; Ut += 1)
        for (let he = 0; he < at; he += 1)
          W[(Ut * at + he) * 4 + 3] <= Ft || (he < It && (It = he), Ut < Tt && (Tt = Ut), he > Vt && (Vt = he), Ut > jt && (jt = Ut));
      return Vt < It || jt < Tt ? null : { minX: It, minY: Tt, maxX: Vt, maxY: jt };
    }
    const F = k(d, c.width, c.height, 8);
    if (!F) return !1;
    function V(W, at) {
      return !W || !at ? !1 : !(W.maxX < at.minX || at.maxX < W.minX || W.maxY < at.minY || at.maxY < W.minY);
    }
    function X(W, at) {
      const Pt = ur((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "", "paint", at);
      if (!Pt) return null;
      const Ft = Pt.centerUv.u - Pt.halfW, It = Pt.centerUv.u + Pt.halfW, Tt = Pt.centerUv.v - Pt.halfH, Vt = Pt.centerUv.v + Pt.halfH, jt = c.width, Ut = c.height;
      return {
        minX: Math.floor((Ft % 1 + 1) % 1 * jt),
        maxX: Math.ceil((It % 1 + 1) % 1 * jt),
        minY: Math.floor(j(Tt, 0, 1) * Ut),
        maxY: Math.ceil(j(Vt, 0, 1) * Ut),
        wraps: It - Ft >= 1 || Ft < 0 || It > 1
      };
    }
    function H(W) {
      const at = (W == null ? void 0 : W.bbox) || null;
      if (!at) return null;
      const Pt = (W == null ? void 0 : W.transform) || {}, Ft = c.width, It = c.height, Tt = Number(at.u0 || 0) + Number(Pt.du || 0), Vt = Number(at.u1 || 0) + Number(Pt.du || 0), jt = Number(at.v0 || 0) + Number(Pt.dv || 0), Ut = Number(at.v1 || 0) + Number(Pt.dv || 0);
      return {
        minX: Math.floor((Tt % 1 + 1) % 1 * Ft),
        maxX: Math.ceil((Vt % 1 + 1) % 1 * Ft),
        minY: Math.floor(j(jt, 0, 1) * It),
        maxY: Math.ceil(j(Ut, 0, 1) * It),
        wraps: Vt - Tt >= 1 || Tt < 0 || Vt > 1
      };
    }
    function B(W) {
      return W ? W.wraps ? V(F, { minX: 0, maxX: W.maxX, minY: W.minY, maxY: W.maxY }) || V(F, { minX: W.minX, maxX: c.width - 1, minY: W.minY, maxY: W.maxY }) : V(F, W) : !0;
    }
    function nt(W) {
      if (!W) return { touched: !1, canvas: null };
      const at = Di(c.width, c.height, { readback: !0 });
      at.ctx.drawImage(W, 0, 0);
      const Pt = at.ctx.getImageData(0, 0, c.width, c.height);
      at.ctx.save(), at.ctx.globalCompositeOperation = "destination-out", at.ctx.drawImage(l.canvas, 0, 0), at.ctx.restore();
      const Ft = at.ctx.getImageData(0, 0, c.width, c.height);
      for (let It = 0; It < c.width * c.height; It += 1) {
        if (d[It * 4 + 3] <= 8) continue;
        const Vt = Pt.data[It * 4 + 3], jt = Ft.data[It * 4 + 3];
        if (Vt > jt)
          return { touched: !0, canvas: at.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function mt(W, at, Pt) {
      const Ft = Number(Pt == null ? void 0 : Pt.z_index), It = og(W, at, Pt).map((Tt, Vt) => ({
        ...Tt,
        z_index: Number.isFinite(Ft) ? Ft + Vt * 1e-3 : N + Vt * 1e-3
      }));
      return It.length && (N = Math.max(N, ...It.map((Tt) => Number((Tt == null ? void 0 : Tt.z_index) || 0))) + 1), It;
    }
    for (const W of ke()) {
      const at = String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim();
      if (!at) continue;
      const Pt = mn(at, "paint");
      if (!B(X(W, Pt))) {
        b.push(W), w.push(...Pt);
        continue;
      }
      const Ft = ((_t = (bt = h.paintEngine) == null ? void 0 : bt.getGroupTarget) == null ? void 0 : _t.call(bt, at)) || null, It = ((vt = Ft == null ? void 0 : Ft.committedPaint) == null ? void 0 : vt.canvas) || null;
      if (!It) {
        b.push(W), w.push(...Pt);
        continue;
      }
      const Tt = nt(It);
      if (!Tt.touched || !Tt.canvas) {
        b.push(W), w.push(...Pt);
        continue;
      }
      S = !0;
      const Vt = mt(Tt.canvas, "paint", m.get(at) || W || {});
      v.push(...Vt);
    }
    for (const W of un().filter((at) => String((at == null ? void 0 : at.layerKind) || "paint") === "paint")) {
      if (!B(H(W))) {
        v.push(W);
        continue;
      }
      const at = kl(W, null);
      if (!at) {
        v.push(W);
        continue;
      }
      const Pt = nt(at);
      if (!Pt.touched || !Pt.canvas) {
        v.push(W);
        continue;
      }
      S = !0;
      const Ft = mt(Pt.canvas, "paint", W);
      v.push(...Ft);
    }
    return S ? (p.painting.paint.strokes = w, p.painting.groups = b.sort((W, at) => Number((W == null ? void 0 : W.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), p.painting.raster_objects = v.sort((W, at) => Number((W == null ? void 0 : W.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), Ci({ preservePanelValues: !1 }), !0) : !1;
  }
  function Fg(i) {
    var m, w, b, v;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((w = i == null ? void 0 : i.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Is(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Og(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && ul((b = i.stroke) == null ? void 0 : b.actionGroupId), Yr(i.layerKind).push(i.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Is(d, i.stroke.targetSpace, !0), l && ul((v = i.stroke) == null ? void 0 : v.actionGroupId), Yr(i.layerKind).push(i.stroke), !0);
  }
  function ou(i) {
    if (e === "cutout" && h.mode === "frame")
      return null;
    const o = [
      ...fl(!1).slice().sort((c, l) => Number((l == null ? void 0 : l.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var l;
        return c.type === "strokeGroup" ? Ai(ka("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Pi(Pa(((l = c.item) == null ? void 0 : l.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...e === "cutout" ? Vl().filter((c) => ms()) : []
    ];
    for (const c of o) {
      if (xe(c)) {
        const d = an(c);
        if (!(d != null && d.visible)) continue;
        const m = Array.isArray(d.strokePaths) ? d.strokePaths : [];
        for (const w of m) {
          const b = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!b.length) continue;
          if (w.closed && b.length >= 3 && _r(i, b)) return { item: c, geom: d };
          const v = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let S = 0; S < b.length - 1; S += 1)
            if (Vf(i, b[S], b[S + 1]) <= v * v) return { item: c, geom: d };
          if (b.length === 1 && fi(i, b[0]) <= v * v) return { item: c, geom: d };
        }
        continue;
      }
      if (Ue(c)) {
        const d = an(c);
        if (!(d != null && d.visible)) continue;
        if (gp(c, d, i)) return { item: c, geom: d };
        continue;
      }
      const l = an(c);
      if (l.visible && _r(i, l.corners))
        return { item: c, geom: l };
    }
    return null;
  }
  function Rs(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => fi(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], w = m.x - i.center.x, b = m.y - i.center.y, v = w * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const d = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of d) {
        const w = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && w.length >= 3 && _r(o, w)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < w.length - 1; v += 1)
          if (Vf(o, w[v], w[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return _r(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return _r(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((d) => fi(d, o) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => fi(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], d = l.x - i.center.x, m = l.y - i.center.y, w = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: w };
    }
    return fi(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : _r(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function su(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function $g(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function Vg(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => $g(i, d))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!_r({ x: c, y: l }, o.corners);
  }
  function de(i) {
    if (Ig(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? A.style.cursor = "none" : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? A.style.cursor = "grabbing" : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? A.style.cursor = "move" : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" ? A.style.cursor = h.interaction.cursor || "nwse-resize" : h.interaction.kind === "rotate" ? A.style.cursor = "grabbing" : A.style.cursor = "default";
      return;
    }
    if (au()) {
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
    const o = le(), c = o ? an(o) : null, l = o ? fr(o) : !1, d = l ? { kind: "none", cursor: "default" } : Rs(c, i);
    if (!l && d.kind !== "none") {
      A.style.cursor = d.cursor;
      return;
    }
    if (h.primaryTool === "cursor" && ou(i)) {
      A.style.cursor = "default";
      return;
    }
    A.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function Ht() {
    if (!rt) return;
    const i = le(), o = Pn();
    if (!i && o.length === 0 || h.interaction) {
      rt.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const vt = "multi", W = vs(o);
      if (h.menuMode !== vt)
        rt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Rt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Rt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${W ? "Unlock" : "Lock"}" data-tip="${W ? "Unlock" : "Lock"}">${W ? Rt.lock_open : Rt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Rt.delete}</button>
        `, h.menuMode = vt, h.menuSize.measured = !1, Fi(rt);
      else {
        const At = rt.querySelector("[data-action='toggle-lock']");
        At && (At.innerHTML = W ? Rt.lock_open : Rt.lock_closed, At.setAttribute("aria-label", W ? "Unlock" : "Lock"), At.setAttribute("data-tip", W ? "Unlock" : "Lock"));
      }
      const at = bs(o);
      if (!(at != null && at.visible)) {
        rt.style.display = "none";
        return;
      }
      const Pt = at.corners.map((At) => At.x), Ft = at.corners.map((At) => At.y), It = Math.min(...Pt), Tt = Math.max(...Pt), Vt = Math.max(...Ft), jt = rt.style.display, Ut = rt.style.visibility;
      rt.style.display = "flex", rt.style.visibility = "hidden";
      const he = rt.getBoundingClientRect(), Zr = Math.round(Number((he == null ? void 0 : he.width) || 0)) || rt.offsetWidth || h.menuSize.w || 220, Jr = Math.round(Number((he == null ? void 0 : he.height) || 0)) || rt.offsetHeight || h.menuSize.h || 40;
      h.menuSize.w = Number.isFinite(Zr) && Zr > 0 ? Zr : 220, h.menuSize.h = Number.isFinite(Jr) && Jr > 0 ? Jr : 40, rt.style.display = jt, rt.style.visibility = Ut, h.menuSize.measured = !0;
      const $i = h.menuSize.w, Ya = h.menuSize.h, Qr = 14;
      rt.style.display = "flex";
      let ti = (It + Tt) * 0.5 - $i * 0.5, Vi = Vt + 18;
      if (ti = j(ti, Qr, A.width - $i - Qr), Vi + Ya > A.height - Qr) {
        rt.style.display = "none";
        return;
      }
      rt.style.left = `${ti}px`, rt.style.top = `${Vi}px`;
      return;
    }
    const c = ml(), l = fr(i), d = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${ve(i) ? "external" : "normal"}` : `cutout:${h.cutoutAspectOpen ? "open" : "closed"}`;
    if (h.menuMode !== d) {
      if (c === "stroke")
        rt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Rt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Rt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Rt.lock_open : Rt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Rt.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        rt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Rt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Rt.send_back}</button>
          ${ve(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Rt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Rt.replace_image}</button>`}
          ${ve(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Rt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Rt.lock_open : Rt.lock_closed}</button>
          ${ve(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Rt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Rt.delete}</button>`}
        `;
      else {
        const vt = oi(i);
        rt.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Rt.aspect}</button>
            <div class="pano-aspect-popover${h.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${vt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${vt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${vt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${vt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Rt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Rt.lock_open : Rt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Rt.delete}</button>
        `;
      }
      h.menuMode = d, h.menuSize.measured = !1, Fi(rt);
    }
    if ((e === "stickers" || c === "image") && ve(i)) {
      const vt = rt.querySelector("[data-action='back-initial']");
      if (vt) {
        const at = ip();
        vt.disabled = !at, vt.setAttribute("aria-disabled", at ? "false" : "true"), vt.setAttribute("data-tip", at ? "Back to initial position" : "Already at initial position");
      }
      const W = rt.querySelector("[data-action='toggle-visible']");
      if (W) {
        const at = Gr(i);
        W.innerHTML = at ? Rt.eye : Rt.eye_dashed, W.setAttribute("aria-label", at ? "Show" : "Hide"), W.setAttribute("data-tip", at ? "Show input image" : "Hide input image");
      }
    }
    const m = rt.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Rt.lock_open : Rt.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const w = an(i);
    if (!(w != null && w.visible)) {
      rt.style.display = "none";
      return;
    }
    const b = w.corners, v = b.map((vt) => vt.x), S = b.map((vt) => vt.y), N = Math.min(...v), k = Math.max(...v), F = Math.max(...S), V = rt.style.display, X = rt.style.visibility;
    rt.style.display = "flex", rt.style.visibility = "hidden";
    const H = rt.getBoundingClientRect(), B = Math.round(Number((H == null ? void 0 : H.width) || 0)) || rt.offsetWidth || h.menuSize.w || 220, nt = Math.round(Number((H == null ? void 0 : H.height) || 0)) || rt.offsetHeight || h.menuSize.h || 40;
    h.menuSize.w = Number.isFinite(B) && B > 0 ? B : 220, h.menuSize.h = Number.isFinite(nt) && nt > 0 ? nt : 40, rt.style.display = V, rt.style.visibility = X, h.menuSize.measured = !0;
    const mt = h.menuSize.w, tt = h.menuSize.h, gt = 14;
    rt.style.display = "flex";
    let bt = (N + k) * 0.5 - mt * 0.5, _t = F + 18;
    if (!Number.isFinite(bt) || !Number.isFinite(_t)) {
      rt.style.display = "none";
      return;
    }
    if (bt = j(bt, gt, A.width - mt - gt), _t + tt > A.height - gt) {
      rt.style.display = "none";
      return;
    }
    rt.style.left = `${bt}px`, rt.style.top = `${_t}px`;
  }
  function Ka() {
    lt && (me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null, lt.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function zg(i) {
    if (!lt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    lt.textContent = o;
    const c = R.getBoundingClientRect(), l = i.getBoundingClientRect(), d = 8, m = lt.offsetWidth || 100, w = lt.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), v = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    lt.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - c.left + l.width * 0.5 - m * 0.5, N = l.top - c.top - w - 8;
    if (b)
      lt.classList.add("pano-tooltip-tool-rail"), S = l.right - c.left + 10, N = l.top - c.top + l.height * 0.5 - w * 0.5, S = j(S, d, Math.max(d, c.width - m - d)), N = j(N, d, Math.max(d, c.height - w - d));
    else if (v) {
      lt.classList.add("pano-tooltip-footer");
      const k = i.closest(".pano-paint-footer"), F = k ? k.getBoundingClientRect() : l;
      S = F.left - c.left + F.width * 0.5 - m * 0.5, N = F.bottom - c.top + 5, S = j(S, d, Math.max(d, c.width - m - d)), N = Math.max(d, N);
    }
    S = j(S, d, Math.max(d, c.width - m - d)), N = Math.max(d, N), lt.style.left = `${S}px`, lt.style.top = `${N}px`, lt.classList.add("show");
  }
  function Fi(i) {
    i.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        me.target = o, me.timer && clearTimeout(me.timer), me.timer = window.setTimeout(() => {
          me.target === o && zg(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        me.target === o && (me.target = null), Ka();
      }), o.addEventListener("pointerdown", Ka));
    });
  }
  const Ce = fs({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = qe(Number(i.yaw || 0)), h.viewPitch = j(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = j(Number(i.fov || h.viewFov || 100), 35, 140);
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
    getUnwrapRect: dr,
    onInteraction: () => {
      kt.backgroundDirty = !0, kt.dirty = !0;
    }
  });
  A.onpointerdown = (i) => {
    const o = qr(i);
    if (Ba(o, !0), h.viewTween = null, Ce.state.inertia.active = !1, Ce.state.inertia.vx = 0, Ce.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), h.mode !== "frame") {
        const b = h.mode === "unwrap" ? o : Ua(i);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ce.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      de(o), A.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (h.mode === "pano") {
        const b = Ua(i);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ce.startDrag(b.x, b.y, i.pointerId, performance.now()), de(o), A.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (Mt && !Mt.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (nu() || ru())) {
      const b = h.primaryTool === "mask" ? "mask" : "paint", v = h.primaryTool === "mask" ? h.maskTool : h.paintTool, S = { kind: "ERP_GLOBAL" }, N = bn(o, performance.now());
      h.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: si("live"),
        stroke: v === "lasso_fill" ? Tg(b, v, [N], S) : Dg(b, v, [N], S)
      }, Ei();
      const k = Xn();
      if (k)
        if (h.paintEngine.beginStroke(h.interaction.stroke, k), h.interaction.kind === "paint_stroke") {
          const F = h.paintEngine.ensureTarget(k), V = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), X = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          h.paintEngine.appendStrokePoint(F, V, X, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, k);
      de(o), A.setPointerCapture(i.pointerId), pt();
      return;
    }
    const c = Pn(), l = le(), d = c.length > 1 ? bs(c) : l ? an(l) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: o, current: o }, de(o), A.setPointerCapture(i.pointerId), pt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (d != null && d.visible)) {
      if ((c.some((v) => fr(v)) ? { kind: "none" } : Rs(d, o)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: c.map((v) => v),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: c.filter((v) => Re(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var N, k;
              const S = an(v);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((v) => xe(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: Ge(mn(v.actionGroupId, v.layerKind)),
            frameSnapshot: Ge(ur(v.actionGroupId, v.layerKind)),
            center: (() => {
              var N, k;
              const S = an(v);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ys(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: c.filter((v) => Ue(v)).map((v) => ({
            id: Te(v.rasterObjectId || v.id || ""),
            snapshot: Ge(un().find((S) => String((S == null ? void 0 : S.id) || "") === Te(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var N, k;
              const S = an(v);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: El(v)
          }))
        }, de(o), A.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const b = fr(l) ? { kind: "none" } : Rs(d, o);
      if (b.kind === "scale") {
        h.interaction = xe(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Ge(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ge(ur(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, de(o), A.setPointerCapture(i.pointerId);
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
        }, de(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        h.interaction = xe(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: Ge(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ge(ur(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, de(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (xe(l)) {
          const v = h.mode === "frame" ? (() => {
            const S = Pe();
            return S ? Zn(o, S, performance.now()) : null;
          })() : bn(o, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: Ge(mn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ge(ur(l.actionGroupId, l.layerKind))
          }, de(o), A.setPointerCapture(i.pointerId);
          return;
        }
        if (Ue(l)) {
          const v = h.mode === "frame" ? (() => {
            const S = Pe();
            return S ? Zn(o, S, performance.now()) : null;
          })() : bn(o, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: Ge(un().find((S) => String((S == null ? void 0 : S.id) || "") === Te(l.rasterObjectId || l.id || "")))
          }, de(o), A.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, de(o), A.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = ou(o);
    if (m) {
      const b = h.selectedId !== m.item.id;
      if (b && h.selectedId && (ae(), Cn()), Ea(m.item), e === "cutout" && b && (h.cutoutAspectOpen = !1), b && Gt(), Ht(), pt(), fr(m.item)) {
        de(o);
        return;
      }
      h.interaction = {
        kind: xe(m.item) ? "move_stroke_group" : Ue(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: xe(m.item) || Ue(m.item) ? h.mode === "frame" ? (() => {
          const v = Pe();
          return v ? Zn(o, v, performance.now()) : null;
        })() : bn(o, performance.now()) : null,
        snapshot: xe(m.item) ? Ge(mn(m.item.actionGroupId, m.item.layerKind)) : Ue(m.item) ? Ge(un().find((v) => String((v == null ? void 0 : v.id) || "") === Te(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: xe(m.item) ? Ge(ur(m.item.actionGroupId, m.item.layerKind)) : null
      }, de(o), A.setPointerCapture(i.pointerId);
      return;
    }
    const w = !!h.selectedId;
    if (w && (ae(), Cn()), Ci(), w && Gt(), Ht(), pt(), h.mode === "pano") {
      const b = Ua(i);
      h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ce.startDrag(b.x, b.y, i.pointerId, performance.now()), de(o), A.setPointerCapture(i.pointerId);
    }
  }, A.onpointermove = (i) => {
    var l, d, m, w, b, v, S, N, k, F, V, X, H, B, nt, mt, tt, gt;
    const o = qr(i);
    if (Ba(o, !0), !h.interaction) {
      de(o);
      return;
    }
    de(o);
    const c = h.interaction;
    if (c.kind === "paint_stroke") {
      const bt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let _t = !1;
      bt.forEach((vt) => {
        const W = qr(vt);
        Rg(c, W, performance.now()) && (_t = !0);
      }), _t && pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const bt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let _t = !1;
      if (bt.forEach((vt) => {
        const W = qr(vt);
        Lg(c, W, performance.now()) && (_t = !0);
      }), _t) {
        const vt = Xn();
        vt && h.paintEngine.updateActiveStroke(c.stroke, vt), pt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const bt = performance.now(), _t = h.mode === "unwrap" ? o : Ua(i);
      Ce.moveDrag(_t.x, _t.y, h.mode === "unwrap" ? "unwrap" : "pano", bt), c.lastTs = bt, c.last = _t, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      h.frameView.panX += o.x - c.last.x, h.frameView.panY += o.y - c.last.y, c.last = o, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const bt = o.x - c.offset.x, _t = o.y - c.offset.y;
      if (h.mode === "frame" && e === "cutout")
        return;
      if (h.mode === "unwrap") {
        const vt = dr(), W = j((bt - vt.x) / Math.max(vt.w, 1), 0, 1), at = j((_t - vt.y) / Math.max(vt.h, 1), 0, 1);
        c.item.yaw_deg = qe(W * 360 - 180), c.item.pitch_deg = j(90 - at * 180, -90, 90);
      } else {
        const vt = xs(bt, _t), W = $f(vt);
        c.item.yaw_deg = W.yaw, c.item.pitch_deg = W.pitch;
      }
      Re(c.item) && on(), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const bt = h.mode === "frame" ? (() => {
        const W = Pe();
        return W ? Zn(o, W, performance.now()) : null;
      })() : bn(o, performance.now());
      if (!bt || !c.startUv) return;
      const _t = fn(Number(bt.u || 0), Number(c.startUv.u || 0)), vt = Number(bt.v || 0) - Number(c.startUv.v || 0);
      hl((l = c.item) == null ? void 0 : l.actionGroupId, _t, vt, c.snapshot, (d = c.item) == null ? void 0 : d.layerKind, c.frameSnapshot) && (yn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const bt = h.mode === "frame" ? (() => {
        const W = Pe();
        return W ? Zn(o, W, performance.now()) : null;
      })() : bn(o, performance.now());
      if (!bt || !c.startUv) return;
      const _t = fn(Number(bt.u || 0), Number(c.startUv.u || 0)), vt = Number(bt.v || 0) - Number(c.startUv.v || 0);
      gl(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((w = c.item) == null ? void 0 : w.id) || "", _t, vt, c.snapshot) && (Ri(), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const bt = o.x - Number(((b = c.offset) == null ? void 0 : b.x) || 0), _t = o.y - Number(((v = c.offset) == null ? void 0 : v.y) || 0);
      let vt = !1, W = !1, at = !1;
      const Pt = bt - Number(((S = c.startCenter) == null ? void 0 : S.x) || bt), Ft = _t - Number(((N = c.startCenter) == null ? void 0 : N.y) || _t);
      for (const It of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Tt = (e === "cutout" ? gs() : Me()).find((jt) => String((jt == null ? void 0 : jt.id) || "") === String(It.id || ""));
        if (!Tt || !Re(Tt)) continue;
        const Vt = {
          x: Number(((k = It.center) == null ? void 0 : k.x) || 0) + Pt,
          y: Number(((F = It.center) == null ? void 0 : F.y) || 0) + Ft
        };
        if (!(h.mode === "frame" && e === "cutout")) {
          if (h.mode === "unwrap") {
            const jt = dr(), Ut = j((Vt.x - jt.x) / Math.max(jt.w, 1), 0, 1), he = j((Vt.y - jt.y) / Math.max(jt.h, 1), 0, 1);
            Tt.yaw_deg = qe(Ut * 360 - 180), Tt.pitch_deg = j(90 - he * 180, -90, 90);
          } else {
            const jt = xs(Vt.x, Vt.y), Ut = $f(jt);
            Tt.yaw_deg = Ut.yaw, Tt.pitch_deg = Ut.pitch;
          }
          vt = !0;
        }
      }
      for (const It of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Tt = {
          x: Number(((V = It.center) == null ? void 0 : V.x) || 0) + Pt,
          y: Number(((X = It.center) == null ? void 0 : X.y) || 0) + Ft
        }, Vt = h.mode === "frame" ? (() => {
          const Ut = Pe();
          return Ut ? Zn(Tt, Ut, performance.now()) : null;
        })() : bn(Tt, performance.now()), jt = It.centerUv || null;
        if (Vt && jt) {
          const Ut = fn(Number(Vt.u || 0), Number(jt.u || 0)), he = Number(Vt.v || 0) - Number(jt.v || 0);
          hl(It.id, Ut, he, It.snapshot, It.layerKind, It.frameSnapshot) && (vt = !0, W = !0);
        }
      }
      for (const It of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Tt = {
          x: Number(((H = It.center) == null ? void 0 : H.x) || 0) + Pt,
          y: Number(((B = It.center) == null ? void 0 : B.y) || 0) + Ft
        }, Vt = h.mode === "frame" ? (() => {
          const Ut = Pe();
          return Ut ? Zn(Tt, Ut, performance.now()) : null;
        })() : bn(Tt, performance.now()), jt = It.centerUv || null;
        if (Vt && jt) {
          const Ut = fn(Number(Vt.u || 0), Number(jt.u || 0)), he = Number(Vt.v || 0) - Number(jt.v || 0);
          gl(It.id, Ut, he, It.snapshot) && (vt = !0, at = !0);
        }
      }
      vt && (W ? yn({ rebuildPaintEngine: !1 }) : at ? Ri() : on(), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const _t = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      pl((nt = c.item) == null ? void 0 : nt.actionGroupId, _t, 0, c.snapshot, (mt = c.item) == null ? void 0 : mt.layerKind, c.frameSnapshot) && (yn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let bt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * Rr;
      i.shiftKey && (bt = Math.round(bt / 45) * 45), pl((tt = c.item) == null ? void 0 : tt.actionGroupId, 1, bt, c.snapshot, (gt = c.item) == null ? void 0 : gt.layerKind, c.frameSnapshot) && (yn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const _t = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = j(c.startHFOV * _t, 1, 179), c.item.vFOV_deg = j(c.startVFOV * _t, 1, 179), c.item.aspect_id = Lr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const _t = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = j(c.startHFOV * _t, 1, 179), c.item.aspect_id = Lr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const _t = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = j(c.startVFOV * _t, 1, 179), c.item.aspect_id = Lr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let _t = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * Rr, vt = c.startRot - _t;
      i.shiftKey && (vt = Math.round(vt / 45) * 45);
      const W = Re(c.item) ? "rot_deg" : "roll_deg";
      c.item[W] = vt, pt({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, c, l, d, m, w;
    const i = h.interaction;
    if (((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Ei(), Fg(h.interaction)) {
        yn();
        const b = String(((l = h.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = ke().find((N) => String((N == null ? void 0 : N.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const v = Xn();
        v && (String(((d = h.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(v), zl()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, v)), ae(), Cn(), Gt(), Ht(), t.setDirtyCanvas(!0, !0), pt();
      } else {
        const b = Xn();
        b && h.paintEngine.cancelActiveStroke(b);
      }
    else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = su(h.interaction.start, h.interaction.current), S = [
        ...e === "cutout" ? Vl().filter((N) => !0) : [...Me()],
        ...jh(),
        ...Uh()
      ].filter((N) => Vg(b, an(N)));
      Yh(S, ((w = S[S.length - 1]) == null ? void 0 : w.id) || null), e === "cutout" && S.length && (h.cutoutAspectOpen = !1), Gt(), Ht(), pt();
    } else if (h.interaction && h.interaction.kind !== "view" && h.interaction.kind !== "pan_frame") {
      let b = !1;
      (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (b = !0), h.interaction.kind === "move_raster_object" && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? yn({ rebuildPaintEngine: !0 }) : Ri()), ae(), Cn(), t.setDirtyCanvas(!0, !0), Ds(), h.hqFrames = 1, Ht(), pt();
    }
    h.interaction = null, Ei(), i && i.kind === "view" && Ce.endDrag(performance.now()), Ta(), Ht(), de(h.pointerPos), pt();
  }, A.onpointercancel = () => {
    var i, o, c;
    if (((i = h.interaction) == null ? void 0 : i.kind) === "view" && Ce.endDrag(performance.now()), ((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Ei();
      const l = Xn();
      l && h.paintEngine.cancelActiveStroke(l);
    }
    h.interaction = null, Ei(), Ta(), de(h.pointerPos), pt({ localOnly: !0 });
  }, A.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, A.onmousemove = (i) => {
    const o = qr(i);
    Ba(o, !0), !h.interaction && de(o);
  }, A.onmouseleave = () => {
    Ba(h.pointerPos, !1), de(h.pointerPos);
  }, A.onwheel = (i) => {
    if (h.mode === "frame") {
      qr(i), i.deltaY < 0 || 1 / 1.1, Pg() && pt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    h.mode === "pano" && (Ce.applyWheelEvent(i) && pt({ localOnly: !0 }), i.preventDefault());
  }, A.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), kn(!0));
  }, A.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), ye.depth = 0, kn(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((d) => ja(d));
    c && ql(c);
  };
  const cu = (i) => {
    e !== "stickers" && e !== "cutout" || r || qn(i) && (ye.depth += 1, kn(!0), i.preventDefault());
  }, lu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!ye.active && qn(i) && kn(!0), ye.active && i.preventDefault());
  }, uu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !ye.active) return;
    ye.depth = Math.max(0, ye.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (ye.depth === 0 || o) && kn(!1);
  }, fu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (ye.depth = 0, kn(!1), qn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", cu, !0), window.addEventListener("dragover", lu, !0), window.addEventListener("dragleave", uu, !0), window.addEventListener("drop", fu, !0), Ct.forEach((i) => {
    i.onclick = () => {
      i.disabled || (h.mode = i.dataset.view, e === "cutout" && h.mode === "frame" && le() && ms(le()), eu(), Ta(), pt());
    };
  });
  function Ls() {
    const { canUndo: i, canRedo: o } = Kl();
    I.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !i;
    }), I.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const Os = I.querySelector("[data-action='undo']");
  Os && (Os.onclick = () => {
    r || Os.disabled || Li(-1);
  });
  const Fs = I.querySelector("[data-action='redo']");
  Fs && (Fs.onclick = () => {
    r || Fs.disabled || Li(1);
  });
  const du = I.querySelector("[data-action='add']");
  du && (du.onclick = () => {
    r || (e === "stickers" || e === "cutout" ? Ts() : void 0);
  });
  const hu = I.querySelector("[data-action='clear']");
  hu && (hu.onclick = () => {
    r || Zl();
  });
  const pu = I.querySelector("[data-action='save']");
  pu && (pu.onclick = () => {
    r || tu();
  }), I.querySelector("[data-action='reset-view']").onclick = () => {
    De(0, 0, 100, 180, 680);
  };
  const Pr = I.querySelector("[data-action='toggle-grid']"), $s = () => {
    if (!Pr) return;
    const i = !!h.showGrid;
    Pr.innerHTML = i ? Rt.eye : Rt.eye_dashed, Pr.setAttribute("aria-pressed", i ? "true" : "false"), Pr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Pr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Pr && ($s(), Pr.onclick = () => {
    h.showGrid = !h.showGrid, dv(t == null ? void 0 : t.id, h.showGrid), $s(), pt();
  }), Y && (Y.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-mode") || "cursor");
      h.primaryTool = o, (o === "paint" || o === "mask") && Ci({ preservePanelValues: !0 }), sn(), Gt(), Ht(), pt();
    };
  }), Y.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && i.disabled)) {
        if (o === "undo") Li(-1);
        else if (o === "redo") Li(1);
        else if (o === "clear") Zl();
        else if (o === "add") Ts();
        else if (o === "add-image") Ts();
        else if (o === "add-or-look") return;
      }
    };
  })), I.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "paint";
      const o = String(i.getAttribute("data-paint-tool") || "pen");
      h.paintTool = o, Ci({ preservePanelValues: !0 }), Qe[o] && (h.activeBrushPresetId = o), sn(), Gt(), Ht(), pt();
    };
  }), I.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "mask", h.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), Ci({ preservePanelValues: !0 }), sn(), Gt(), Ht(), pt();
    };
  }), $.forEach((i) => {
    i.onclick = () => {
      const o = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      wg(o);
    };
  }), G.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(i.value)))), c = gr(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      G.forEach((d) => {
        d.value = String(o), d.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), K.forEach((d) => {
        d.textContent = String(o);
      }), Eg();
    }, i.onchange = () => Ga(), i.addEventListener("pointerup", Ga), i.addEventListener("pointercancel", Ga), i.addEventListener("blur", Ga);
  }), Et) {
    Et.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Co.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (h.paintColor = cn(c.color), Q(!0), sn());
      };
    });
    const i = Et.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), Mt && !Mt.hidden ? Q(!0) : St(), sn();
    });
  }
  const Hg = (i, o) => {
    var b;
    if (!Se) return;
    const c = Se.getBoundingClientRect(), l = j((i - c.left) / Math.max(1, c.width), 0, 1), d = 1 - j((o - c.top) / Math.max(1, c.height), 0, 1), m = Yi(h.customPaintColor), w = { ...lc(m.h, l, d), a: Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    h.customPaintColor = cn(w), h.paintColor = cn(w), sn();
  }, jg = (i) => {
    var m;
    if (!Ne) return;
    const o = Ne.getBoundingClientRect(), c = j((i - o.left) / Math.max(1, o.width), 0, 1), l = Yi(h.customPaintColor), d = { ...lc(c, l.s, l.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = cn(d), h.paintColor = cn(d), sn();
  }, gu = (i, o) => {
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
    i.preventDefault(), i.stopPropagation(), gu(i, (o) => Hg(o.clientX, o.clientY));
  }), Ne && (Ne.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), gu(i, (o) => jg(o.clientX));
  }), Ae && (Ae.oninput = () => {
    const i = { ...h.customPaintColor, a: j(Number(Ae.value) / 100, 0, 1) };
    h.customPaintColor = cn(i), h.paintColor = cn(i), sn();
  });
  const mu = () => {
    if (!ot) return;
    const i = !!h.fullscreen;
    ot.innerHTML = i ? Rt.fullscreen_close : Rt.fullscreen, ot.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), ot.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, Wa = (i) => {
    const o = !!i;
    h.fullscreen !== o && (h.fullscreen = o, I.classList.toggle("pano-modal-fullscreen", o), o ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), $s(), mu(), pt());
  }, yu = () => document.fullscreenElement === E, Ug = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        Wa(!h.fullscreen);
        return;
      }
      yu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = E.requestFullscreen) == null ? void 0 : i.call(E));
    } catch {
      Wa(!h.fullscreen);
    }
  }, bu = () => {
    document.fullscreenEnabled && Wa(yu());
  };
  document.addEventListener("fullscreenchange", bu), ot && (mu(), ot.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), Ug();
  });
  const vu = () => {
    if (!wt) return;
    const i = !!h.outputPreviewExpanded;
    wt.innerHTML = i ? Rt.fullscreen_close : Rt.fullscreen, wt.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), wt.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  wt && (vu(), wt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const o = !h.outputPreviewExpanded;
    h.outputPreviewExpanded = o, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = o ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), vu(), pt();
  }), rt.addEventListener("click", (i) => {
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!r) {
      if (c === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ht(), pt();
        return;
      }
      if (c === "aspect-set") {
        const l = le();
        if (!l) return;
        const d = String(o.getAttribute("data-aspect") || "1:1");
        Sg(l, d), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ds(), ae(), be(), Ht(), pt();
        return;
      }
      if (c === "rotate-90") {
        const l = le();
        if (!l) return;
        Ng(l), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ds(), ae(), be(), Ht(), pt();
        return;
      }
      if (c === "bring-front") {
        Mg();
        return;
      }
      if (c === "send-back") {
        kg();
        return;
      }
      if (c === "duplicate") {
        xg();
        return;
      }
      if (c === "replace-image") {
        yg();
        return;
      }
      if (c === "toggle-lock") {
        qh();
        return;
      }
      if (c === "back-initial") {
        np();
        return;
      }
      if (c === "toggle-visible") {
        ep();
        return;
      }
      if (c === "delete") {
        Jl();
        return;
      }
      pt();
    }
  });
  const Vs = t.onExecuted, zs = t.onConnectionsChange;
  let Hs = null, js = null, Us = null;
  !r && e === "stickers" && (Us = (i = "sync") => {
    Sl(i);
  }, t.__panoExternalStickerSync = Us, Hs = function(...o) {
    var c;
    typeof Vs == "function" && Vs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = Hs, js = function(...o) {
    var c;
    typeof zs == "function" && zs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = js), r || (Ec.set(String(t.id ?? "0"), () => ks()), Sp() && ks());
  const Xr = () => {
    var i, o, c, l, d, m, w, b, v;
    Ec.delete(String(t.id ?? "0")), r || ks(), document.fullscreenElement === E && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", bu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (d = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (b = (w = (m = hn) == null ? void 0 : m.canvas) == null ? void 0 : w.setDirty) == null || b.call(w, !0, !0), Ka(), gg(), (v = dt == null ? void 0 : dt.dispose) == null || v.call(dt), kn(!1), window.removeEventListener("keydown", _u, !0), window.removeEventListener("keydown", wu, !0), window.removeEventListener("keydown", qa, !0), window.removeEventListener("keyup", qa, !0), window.removeEventListener("keydown", xu, !0), window.removeEventListener("dragenter", cu, !0), window.removeEventListener("dragover", lu, !0), window.removeEventListener("dragleave", uu, !0), window.removeEventListener("drop", fu, !0), !r && e === "stickers" && (t.onExecuted === Hs && (t.onExecuted = Vs), t.onConnectionsChange === js && (t.onConnectionsChange = zs), t.__panoExternalStickerSync === Us && (t.__panoExternalStickerSync = null)), P.unmount(), M.remove();
  }, _u = (i) => {
    var o, c, l, d;
    if (i.key === "Escape") {
      if (h.fullscreen && document.fullscreenElement === E) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), Wa(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (d = i.stopImmediatePropagation) == null || d.call(i), Xr();
    }
  }, wu = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const w = i.target, b = ((w == null ? void 0 : w.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || w != null && w.isContentEditable || !le() || (Jl(), i.preventDefault(), i.stopPropagation());
  }, qa = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    h.marqueeModifier !== o && (h.marqueeModifier = o, de(h.pointerPos));
  }, xu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: w } = Kl();
    i.shiftKey && !w || !i.shiftKey && !m || (Li(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", _u, !0), window.addEventListener("keydown", wu, !0), window.addEventListener("keydown", qa, !0), window.addEventListener("keyup", qa, !0), window.addEventListener("keydown", xu, !0), E.addEventListener("pointerdown", (i) => {
    i.target === E && Xr();
  }), Fi(I), !r && e === "stickers" && Sl("open"), bg(), ae(), Ls(), sn(), ut && requestAnimationFrame(() => {
    ut.classList.add("is-ready");
  }), Gt(), Da(), Gl(), de(h.pointerPos), pt(), kt.rafId = requestAnimationFrame(Es);
}
function Gf(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
    var _, p;
    try {
      (_ = y.__panoDomRestore) == null || _.call(y);
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
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && vv(y), ll(y), wv(y, Yo);
    const M = dn(y, Yo);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const I = M.callback;
      M.callback = (A) => {
        var R;
        const O = I ? I(A) : void 0;
        return (R = y.setDirtyCanvas) == null || R.call(y, !0, !1), O;
      };
    }
    const P = dn(y, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (E = P.callback) == null || E.call(P, "#00ff00")), n === "PanoramaStickers") {
      Tc(y, r, () => ha(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    Tc(y, r, () => ha(y, "cutout")), hb(y, {
      buttonText: r,
      onOpen: () => ha(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
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
function Tv(t) {
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
function Rv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    ll(t), Tc(t, "Open Preview", () => ha(t, "stickers", { readOnly: !0, hideSidebar: !1 })), db(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => ha(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
hn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Ec.values()].map((r) => {
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
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Gf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Gf(t, e, "PanoramaCutout", "Open Cutout Editor"), Nc(n) && Tv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    ll(t), Nc(e) && Rv(t);
  }
});
