import * as Ta from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
import { api as tn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function tl(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const de = {}, Ci = [], Wn = () => {
}, rd = () => !1, ps = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), gs = (t) => t.startsWith("onUpdate:"), Ge = Object.assign, el = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, cm = Object.prototype.hasOwnProperty, te = (t, e) => cm.call(t, e), Ft = Array.isArray, Ai = (t) => zo(t) === "[object Map]", id = (t) => zo(t) === "[object Set]", Lu = (t) => zo(t) === "[object Date]", Vt = (t) => typeof t == "function", Ee = (t) => typeof t == "string", qn = (t) => typeof t == "symbol", ae = (t) => t !== null && typeof t == "object", od = (t) => (ae(t) || Vt(t)) && Vt(t.then) && Vt(t.catch), ad = Object.prototype.toString, zo = (t) => ad.call(t), lm = (t) => zo(t).slice(8, -1), sd = (t) => zo(t) === "[object Object]", nl = (t) => Ee(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, wo = /* @__PURE__ */ tl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ms = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, um = /-\w/g, nn = ms(
  (t) => t.replace(um, (e) => e.slice(1).toUpperCase())
), fm = /\B([A-Z])/g, Zr = ms(
  (t) => t.replace(fm, "-$1").toLowerCase()
), ys = ms((t) => t.charAt(0).toUpperCase() + t.slice(1)), cc = ms(
  (t) => t ? `on${ys(t)}` : ""
), Bn = (t, e) => !Object.is(t, e), lc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, cd = (t, e, n, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, dm = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Du;
const bs = () => Du || (Du = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vs(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], o = Ee(i) ? mm(i) : vs(i);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ee(t) || ae(t))
    return t;
}
const hm = /;(?![^(]*\))/g, pm = /:([^]+)/, gm = /\/\*[^]*?\*\//g;
function mm(t) {
  const e = {};
  return t.replace(gm, "").split(hm).forEach((n) => {
    if (n) {
      const i = n.split(pm);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function _s(t) {
  let e = "";
  if (Ee(t))
    e = t;
  else if (Ft(t))
    for (let n = 0; n < t.length; n++) {
      const i = _s(t[n]);
      i && (e += i + " ");
    }
  else if (ae(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const ym = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bm = /* @__PURE__ */ tl(ym);
function ld(t) {
  return !!t || t === "";
}
function vm(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = rl(t[i], e[i]);
  return n;
}
function rl(t, e) {
  if (t === e) return !0;
  let n = Lu(t), i = Lu(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = qn(t), i = qn(e), n || i)
    return t === e;
  if (n = Ft(t), i = Ft(e), n || i)
    return n && i ? vm(t, e) : !1;
  if (n = ae(t), i = ae(e), n || i) {
    if (!n || !i)
      return !1;
    const o = Object.keys(t).length, c = Object.keys(e).length;
    if (o !== c)
      return !1;
    for (const u in t) {
      const h = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (h && !g || !h && g || !rl(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const ud = (t) => !!(t && t.__v_isRef === !0), fd = (t) => Ee(t) ? t : t == null ? "" : Ft(t) || ae(t) && (t.toString === ad || !Vt(t.toString)) ? ud(t) ? fd(t.value) : JSON.stringify(t, dd, 2) : String(t), dd = (t, e) => ud(e) ? dd(t, e.value) : Ai(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, o], c) => (n[uc(i, c) + " =>"] = o, n),
    {}
  )
} : id(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => uc(n))
} : qn(e) ? uc(e) : ae(e) && !Ft(e) && !sd(e) ? String(e) : e, uc = (t, e = "") => {
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
class _m {
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
function wm() {
  return sn;
}
let fe;
const fc = /* @__PURE__ */ new WeakSet();
class hd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, sn && sn.active && sn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fc.has(this) && (fc.delete(this), this.trigger()));
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
    this.flags |= 2, Ru(this), md(this);
    const e = fe, n = kn;
    fe = this, kn = !0;
    try {
      return this.fn();
    } finally {
      yd(this), fe = e, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        al(e);
      this.deps = this.depsTail = void 0, Ru(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ic(this) && this.run();
  }
  get dirty() {
    return Ic(this);
  }
}
let pd = 0, xo, So;
function gd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = So, So = t;
    return;
  }
  t.next = xo, xo = t;
}
function il() {
  pd++;
}
function ol() {
  if (--pd > 0)
    return;
  if (So) {
    let e = So;
    for (So = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; xo; ) {
    let e = xo;
    for (xo = void 0; e; ) {
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
function md(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function yd(t) {
  let e, n = t.depsTail, i = n;
  for (; i; ) {
    const o = i.prevDep;
    i.version === -1 ? (i === n && (n = o), al(i), xm(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = o;
  }
  t.deps = e, t.depsTail = n;
}
function Ic(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (bd(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function bd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Do) || (t.globalVersion = Do, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Ic(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = fe, i = kn;
  fe = t, kn = !0;
  try {
    md(t);
    const o = t.fn(t._value);
    (e.version === 0 || Bn(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    fe = n, kn = i, yd(t), t.flags &= -3;
  }
}
function al(t, e = !1) {
  const { dep: n, prevSub: i, nextSub: o } = t;
  if (i && (i.nextSub = o, t.prevSub = void 0), o && (o.prevSub = i, t.nextSub = void 0), n.subs === t && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      al(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function xm(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let kn = !0;
const vd = [];
function sr() {
  vd.push(kn), kn = !1;
}
function cr() {
  const t = vd.pop();
  kn = t === void 0 ? !0 : t;
}
function Ru(t) {
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
let Do = 0;
class Sm {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!fe || !kn || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new Sm(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, _d(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = i);
    }
    return n;
  }
  trigger(e) {
    this.version++, Do++, this.notify(e);
  }
  notify(e) {
    il();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ol();
    }
  }
}
function _d(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        _d(i);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ec = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ Symbol(
  ""
), Tc = /* @__PURE__ */ Symbol(
  ""
), Ro = /* @__PURE__ */ Symbol(
  ""
);
function ze(t, e, n) {
  if (kn && fe) {
    let i = Ec.get(t);
    i || Ec.set(t, i = /* @__PURE__ */ new Map());
    let o = i.get(n);
    o || (i.set(n, o = new sl()), o.map = i, o.key = n), o.track();
  }
}
function ar(t, e, n, i, o, c) {
  const u = Ec.get(t);
  if (!u) {
    Do++;
    return;
  }
  const h = (g) => {
    g && g.trigger();
  };
  if (il(), e === "clear")
    u.forEach(h);
  else {
    const g = Ft(t), b = g && nl(n);
    if (g && n === "length") {
      const p = Number(i);
      u.forEach((w, N) => {
        (N === "length" || N === Ro || !qn(N) && N >= p) && h(w);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && h(u.get(n)), b && h(u.get(Ro)), e) {
        case "add":
          g ? b && h(u.get("length")) : (h(u.get(Ur)), Ai(t) && h(u.get(Tc)));
          break;
        case "delete":
          g || (h(u.get(Ur)), Ai(t) && h(u.get(Tc)));
          break;
        case "set":
          Ai(t) && h(u.get(Ur));
          break;
      }
  }
  ol();
}
function pi(t) {
  const e = /* @__PURE__ */ Qt(t);
  return e === t ? e : (ze(e, "iterate", Ro), /* @__PURE__ */ gn(t) ? e : e.map(Cn));
}
function ws(t) {
  return ze(t = /* @__PURE__ */ Qt(t), "iterate", Ro), t;
}
function Un(t, e) {
  return /* @__PURE__ */ lr(t) ? Oi(/* @__PURE__ */ jr(t) ? Cn(e) : e) : Cn(e);
}
const Nm = {
  __proto__: null,
  [Symbol.iterator]() {
    return dc(this, Symbol.iterator, (t) => Un(this, t));
  },
  concat(...t) {
    return pi(this).concat(
      ...t.map((e) => Ft(e) ? pi(e) : e)
    );
  },
  entries() {
    return dc(this, "entries", (t) => (t[1] = Un(this, t[1]), t));
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
    return hc(this, "includes", t);
  },
  indexOf(...t) {
    return hc(this, "indexOf", t);
  },
  join(t) {
    return pi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return hc(this, "lastIndexOf", t);
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
    return Ou(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Ou(this, "reduceRight", t, e);
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
    return pi(this).toReversed();
  },
  toSorted(t) {
    return pi(this).toSorted(t);
  },
  toSpliced(...t) {
    return pi(this).toSpliced(...t);
  },
  unshift(...t) {
    return so(this, "unshift", t);
  },
  values() {
    return dc(this, "values", (t) => Un(this, t));
  }
};
function dc(t, e, n) {
  const i = ws(t), o = i[e]();
  return i !== t && !/* @__PURE__ */ gn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const Mm = Array.prototype;
function er(t, e, n, i, o, c) {
  const u = ws(t), h = u !== t && !/* @__PURE__ */ gn(t), g = u[e];
  if (g !== Mm[e]) {
    const w = g.apply(t, c);
    return h ? Cn(w) : w;
  }
  let b = n;
  u !== t && (h ? b = function(w, N) {
    return n.call(this, Un(t, w), N, t);
  } : n.length > 2 && (b = function(w, N) {
    return n.call(this, w, N, t);
  }));
  const p = g.call(u, b, i);
  return h && o ? o(p) : p;
}
function Ou(t, e, n, i) {
  const o = ws(t), c = o !== t && !/* @__PURE__ */ gn(t);
  let u = n, h = !1;
  o !== t && (c ? (h = i.length === 0, u = function(b, p, w) {
    return h && (h = !1, b = Un(t, b)), n.call(this, b, Un(t, p), w, t);
  }) : n.length > 3 && (u = function(b, p, w) {
    return n.call(this, b, p, w, t);
  }));
  const g = o[e](u, ...i);
  return h ? Un(t, g) : g;
}
function hc(t, e, n) {
  const i = /* @__PURE__ */ Qt(t);
  ze(i, "iterate", Ro);
  const o = i[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ fl(n[0]) ? (n[0] = /* @__PURE__ */ Qt(n[0]), i[e](...n)) : o;
}
function so(t, e, n = []) {
  sr(), il();
  const i = (/* @__PURE__ */ Qt(t))[e].apply(t, n);
  return ol(), cr(), i;
}
const Pm = /* @__PURE__ */ tl("__proto__,__v_isRef,__isVue"), wd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qn)
);
function km(t) {
  qn(t) || (t = String(t));
  const e = /* @__PURE__ */ Qt(this);
  return ze(e, "has", t), e.hasOwnProperty(t);
}
class xd {
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
      return i === (o ? c ? Fm : Pd : c ? Md : Nd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let g;
      if (u && (g = Nm[n]))
        return g;
      if (n === "hasOwnProperty")
        return km;
    }
    const h = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Be(e) ? e : i
    );
    if ((qn(n) ? wd.has(n) : Pm(n)) || (o || ze(e, "get", n), c))
      return h;
    if (/* @__PURE__ */ Be(h)) {
      const g = u && nl(n) ? h : h.value;
      return o && ae(g) ? /* @__PURE__ */ Dc(g) : g;
    }
    return ae(h) ? o ? /* @__PURE__ */ Dc(h) : /* @__PURE__ */ ll(h) : h;
  }
}
class Sd extends xd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, o) {
    let c = e[n];
    const u = Ft(e) && nl(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ lr(c);
      if (!/* @__PURE__ */ gn(i) && !/* @__PURE__ */ lr(i) && (c = /* @__PURE__ */ Qt(c), i = /* @__PURE__ */ Qt(i)), !u && /* @__PURE__ */ Be(c) && !/* @__PURE__ */ Be(i))
        return b || (c.value = i), !0;
    }
    const h = u ? Number(n) < e.length : te(e, n), g = Reflect.set(
      e,
      n,
      i,
      /* @__PURE__ */ Be(e) ? e : o
    );
    return e === /* @__PURE__ */ Qt(o) && (h ? Bn(i, c) && ar(e, "set", n, i) : ar(e, "add", n, i)), g;
  }
  deleteProperty(e, n) {
    const i = te(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && i && ar(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!qn(n) || !wd.has(n)) && ze(e, "has", n), i;
  }
  ownKeys(e) {
    return ze(
      e,
      "iterate",
      Ft(e) ? "length" : Ur
    ), Reflect.ownKeys(e);
  }
}
class Cm extends xd {
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
const Am = /* @__PURE__ */ new Sd(), Im = /* @__PURE__ */ new Cm(), Em = /* @__PURE__ */ new Sd(!0);
const Lc = (t) => t, fa = (t) => Reflect.getPrototypeOf(t);
function Tm(t, e, n) {
  return function(...i) {
    const o = this.__v_raw, c = /* @__PURE__ */ Qt(o), u = Ai(c), h = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, b = o[t](...i), p = n ? Lc : e ? Oi : Cn;
    return !e && ze(
      c,
      "iterate",
      g ? Tc : Ur
    ), Ge(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: w, done: N } = b.next();
          return N ? { value: w, done: N } : {
            value: h ? [p(w[0]), p(w[1])] : p(w),
            done: N
          };
        }
      }
    );
  };
}
function da(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Lm(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), h = /* @__PURE__ */ Qt(o);
      t || (Bn(o, h) && ze(u, "get", o), ze(u, "get", h));
      const { has: g } = fa(u), b = e ? Lc : t ? Oi : Cn;
      if (g.call(u, o))
        return b(c.get(o));
      if (g.call(u, h))
        return b(c.get(h));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && ze(/* @__PURE__ */ Qt(o), "iterate", Ur), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), h = /* @__PURE__ */ Qt(o);
      return t || (Bn(o, h) && ze(u, "has", o), ze(u, "has", h)), o === h ? c.has(o) : c.has(o) || c.has(h);
    },
    forEach(o, c) {
      const u = this, h = u.__v_raw, g = /* @__PURE__ */ Qt(h), b = e ? Lc : t ? Oi : Cn;
      return !t && ze(g, "iterate", Ur), h.forEach((p, w) => o.call(c, b(p), b(w), u));
    }
  };
  return Ge(
    n,
    t ? {
      add: da("add"),
      set: da("set"),
      delete: da("delete"),
      clear: da("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ Qt(this), u = fa(c), h = /* @__PURE__ */ Qt(o), g = !e && !/* @__PURE__ */ gn(o) && !/* @__PURE__ */ lr(o) ? h : o;
        return u.has.call(c, g) || Bn(o, g) && u.has.call(c, o) || Bn(h, g) && u.has.call(c, h) || (c.add(g), ar(c, "add", g, g)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ gn(c) && !/* @__PURE__ */ lr(c) && (c = /* @__PURE__ */ Qt(c));
        const u = /* @__PURE__ */ Qt(this), { has: h, get: g } = fa(u);
        let b = h.call(u, o);
        b || (o = /* @__PURE__ */ Qt(o), b = h.call(u, o));
        const p = g.call(u, o);
        return u.set(o, c), b ? Bn(c, p) && ar(u, "set", o, c) : ar(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ Qt(this), { has: u, get: h } = fa(c);
        let g = u.call(c, o);
        g || (o = /* @__PURE__ */ Qt(o), g = u.call(c, o)), h && h.call(c, o);
        const b = c.delete(o);
        return g && ar(c, "delete", o, void 0), b;
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
    n[o] = Tm(o, t, e);
  }), n;
}
function cl(t, e) {
  const n = Lm(t, e);
  return (i, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? i : Reflect.get(
    te(n, o) && o in i ? n : i,
    o,
    c
  );
}
const Dm = {
  get: /* @__PURE__ */ cl(!1, !1)
}, Rm = {
  get: /* @__PURE__ */ cl(!1, !0)
}, Om = {
  get: /* @__PURE__ */ cl(!0, !1)
};
const Nd = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new WeakMap(), Pd = /* @__PURE__ */ new WeakMap(), Fm = /* @__PURE__ */ new WeakMap();
function $m(t) {
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
function Hm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : $m(lm(t));
}
// @__NO_SIDE_EFFECTS__
function ll(t) {
  return /* @__PURE__ */ lr(t) ? t : ul(
    t,
    !1,
    Am,
    Dm,
    Nd
  );
}
// @__NO_SIDE_EFFECTS__
function Vm(t) {
  return ul(
    t,
    !1,
    Em,
    Rm,
    Md
  );
}
// @__NO_SIDE_EFFECTS__
function Dc(t) {
  return ul(
    t,
    !0,
    Im,
    Om,
    Pd
  );
}
function ul(t, e, n, i, o) {
  if (!ae(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Hm(t);
  if (c === 0)
    return t;
  const u = o.get(t);
  if (u)
    return u;
  const h = new Proxy(
    t,
    c === 2 ? i : n
  );
  return o.set(t, h), h;
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
function gn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function fl(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Qt(e) : t;
}
function zm(t) {
  return !te(t, "__v_skip") && Object.isExtensible(t) && cd(t, "__v_skip", !0), t;
}
const Cn = (t) => ae(t) ? /* @__PURE__ */ ll(t) : t, Oi = (t) => ae(t) ? /* @__PURE__ */ Dc(t) : t;
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Um(t) {
  return jm(t, !1);
}
function jm(t, e) {
  return /* @__PURE__ */ Be(t) ? t : new Bm(t, e);
}
class Bm {
  constructor(e, n) {
    this.dep = new sl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Qt(e), this._value = n ? e : Cn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ gn(e) || /* @__PURE__ */ lr(e);
    e = i ? e : /* @__PURE__ */ Qt(e), Bn(e, n) && (this._rawValue = e, this._value = i ? e : Cn(e), this.dep.trigger());
  }
}
function dl(t) {
  return /* @__PURE__ */ Be(t) ? t.value : t;
}
const Gm = {
  get: (t, e, n) => e === "__v_raw" ? t : dl(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const o = t[e];
    return /* @__PURE__ */ Be(o) && !/* @__PURE__ */ Be(n) ? (o.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function kd(t) {
  return /* @__PURE__ */ jr(t) ? t : new Proxy(t, Gm);
}
class Km {
  constructor(e, n, i) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new sl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Do - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
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
function Wm(t, e, n = !1) {
  let i, o;
  return Vt(t) ? i = t : (i = t.get, o = t.set), new Km(i, o, n);
}
const ha = {}, Wa = /* @__PURE__ */ new WeakMap();
let Fr;
function qm(t, e = !1, n = Fr) {
  if (n) {
    let i = Wa.get(n);
    i || Wa.set(n, i = []), i.push(t);
  }
}
function Ym(t, e, n = de) {
  const { immediate: i, deep: o, once: c, scheduler: u, augmentJob: h, call: g } = n, b = (R) => o ? R : /* @__PURE__ */ gn(R) || o === !1 || o === 0 ? Nr(R, 1) : Nr(R);
  let p, w, N, C, A = !1, k = !1;
  if (/* @__PURE__ */ Be(t) ? (w = () => t.value, A = /* @__PURE__ */ gn(t)) : /* @__PURE__ */ jr(t) ? (w = () => b(t), A = !0) : Ft(t) ? (k = !0, A = t.some((R) => /* @__PURE__ */ jr(R) || /* @__PURE__ */ gn(R)), w = () => t.map((R) => {
    if (/* @__PURE__ */ Be(R))
      return R.value;
    if (/* @__PURE__ */ jr(R))
      return b(R);
    if (Vt(R))
      return g ? g(R, 2) : R();
  })) : Vt(t) ? e ? w = g ? () => g(t, 2) : t : w = () => {
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
      return g ? g(t, 3, [C]) : t(C);
    } finally {
      Fr = R;
    }
  } : w = Wn, e && o) {
    const R = w, M = o === !0 ? 1 / 0 : o;
    w = () => Nr(R(), M);
  }
  const H = wm(), O = () => {
    p.stop(), H && H.active && el(H.effects, p);
  };
  if (c && e) {
    const R = e;
    e = (...M) => {
      R(...M), O();
    };
  }
  let D = k ? new Array(t.length).fill(ha) : ha;
  const V = (R) => {
    if (!(!(p.flags & 1) || !p.dirty && !R))
      if (e) {
        const M = p.run();
        if (o || A || (k ? M.some((Q, at) => Bn(Q, D[at])) : Bn(M, D))) {
          N && N();
          const Q = Fr;
          Fr = p;
          try {
            const at = [
              M,
              // pass undefined as the old value when it's changed for the first time
              D === ha ? void 0 : k && D[0] === ha ? [] : D,
              C
            ];
            D = M, g ? g(e, 3, at) : (
              // @ts-expect-error
              e(...at)
            );
          } finally {
            Fr = Q;
          }
        }
      } else
        p.run();
  };
  return h && h(V), p = new hd(w), p.scheduler = u ? () => u(V, !1) : V, C = (R) => qm(R, !1, p), N = p.onStop = () => {
    const R = Wa.get(p);
    if (R) {
      if (g)
        g(R, 4);
      else
        for (const M of R) M();
      Wa.delete(p);
    }
  }, e ? i ? V(!0) : D = p.run() : u ? u(V.bind(null, !0), !0) : p.run(), O.pause = p.pause.bind(p), O.resume = p.resume.bind(p), O.stop = O, O;
}
function Nr(t, e = 1 / 0, n) {
  if (e <= 0 || !ae(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Be(t))
    Nr(t.value, e, n);
  else if (Ft(t))
    for (let i = 0; i < t.length; i++)
      Nr(t[i], e, n);
  else if (id(t) || Ai(t))
    t.forEach((i) => {
      Nr(i, e, n);
    });
  else if (sd(t)) {
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
function Uo(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (o) {
    xs(o, e, n);
  }
}
function Yn(t, e, n, i) {
  if (Vt(t)) {
    const o = Uo(t, e, n, i);
    return o && od(o) && o.catch((c) => {
      xs(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(Yn(t[c], e, n, i));
    return o;
  }
}
function xs(t, e, n, i = !0) {
  const o = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || de;
  if (e) {
    let h = e.parent;
    const g = e.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; h; ) {
      const p = h.ec;
      if (p) {
        for (let w = 0; w < p.length; w++)
          if (p[w](t, g, b) === !1)
            return;
      }
      h = h.parent;
    }
    if (c) {
      sr(), Uo(c, null, 10, [
        t,
        g,
        b
      ]), cr();
      return;
    }
  }
  Xm(t, n, o, i, u);
}
function Xm(t, e, n, i = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Qe = [];
let Vn = -1;
const Ii = [];
let Sr = null, _i = 0;
const Cd = /* @__PURE__ */ Promise.resolve();
let qa = null;
function Ad(t) {
  const e = qa || Cd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Zm(t) {
  let e = Vn + 1, n = Qe.length;
  for (; e < n; ) {
    const i = e + n >>> 1, o = Qe[i], c = Oo(o);
    c < t || c === t && o.flags & 2 ? e = i + 1 : n = i;
  }
  return e;
}
function hl(t) {
  if (!(t.flags & 1)) {
    const e = Oo(t), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Oo(n) ? Qe.push(t) : Qe.splice(Zm(e), 0, t), t.flags |= 1, Id();
  }
}
function Id() {
  qa || (qa = Cd.then(Td));
}
function Jm(t) {
  Ft(t) ? Ii.push(...t) : Sr && t.id === -1 ? Sr.splice(_i + 1, 0, t) : t.flags & 1 || (Ii.push(t), t.flags |= 1), Id();
}
function Fu(t, e, n = Vn + 1) {
  for (; n < Qe.length; n++) {
    const i = Qe[n];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Qe.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ed(t) {
  if (Ii.length) {
    const e = [...new Set(Ii)].sort(
      (n, i) => Oo(n) - Oo(i)
    );
    if (Ii.length = 0, Sr) {
      Sr.push(...e);
      return;
    }
    for (Sr = e, _i = 0; _i < Sr.length; _i++) {
      const n = Sr[_i];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Sr = null, _i = 0;
  }
}
const Oo = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Td(t) {
  try {
    for (Vn = 0; Vn < Qe.length; Vn++) {
      const e = Qe[Vn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Uo(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Vn < Qe.length; Vn++) {
      const e = Qe[Vn];
      e && (e.flags &= -2);
    }
    Vn = -1, Qe.length = 0, Ed(), qa = null, (Qe.length || Ii.length) && Td();
  }
}
let Pn = null, Ld = null;
function Ya(t) {
  const e = Pn;
  return Pn = t, Ld = t && t.type.__scopeId || null, e;
}
function Qm(t, e = Pn, n) {
  if (!e || t._n)
    return t;
  const i = (...o) => {
    i._d && Yu(-1);
    const c = Ya(e);
    let u;
    try {
      u = t(...o);
    } finally {
      Ya(c), i._d && Yu(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Dr(t, e, n, i) {
  const o = t.dirs, c = e && e.dirs;
  for (let u = 0; u < o.length; u++) {
    const h = o[u];
    c && (h.oldValue = c[u].value);
    let g = h.dir[i];
    g && (sr(), Yn(g, n, 8, [
      t.el,
      h,
      t,
      e
    ]), cr());
  }
}
function t0(t, e) {
  if (je) {
    let n = je.provides;
    const i = je.parent && je.parent.provides;
    i === n && (n = je.provides = Object.create(i)), n[t] = e;
  }
}
function La(t, e, n = !1) {
  const i = Q0();
  if (i || Ti) {
    let o = Ti ? Ti._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && Vt(e) ? e.call(i && i.proxy) : e;
  }
}
const e0 = /* @__PURE__ */ Symbol.for("v-scx"), n0 = () => La(e0);
function Da(t, e, n) {
  return Dd(t, e, n);
}
function Dd(t, e, n = de) {
  const { immediate: i, deep: o, flush: c, once: u } = n, h = Ge({}, n), g = e && i || !e && c !== "post";
  let b;
  if ($o) {
    if (c === "sync") {
      const C = n0();
      b = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!g) {
      const C = () => {
      };
      return C.stop = Wn, C.resume = Wn, C.pause = Wn, C;
    }
  }
  const p = je;
  h.call = (C, A, k) => Yn(C, p, A, k);
  let w = !1;
  c === "post" ? h.scheduler = (C) => {
    an(C, p && p.suspense);
  } : c !== "sync" && (w = !0, h.scheduler = (C, A) => {
    A ? C() : hl(C);
  }), h.augmentJob = (C) => {
    e && (C.flags |= 4), w && (C.flags |= 2, p && (C.id = p.uid, C.i = p));
  };
  const N = Ym(t, e, h);
  return $o && (b ? b.push(N) : g && N()), N;
}
function r0(t, e, n) {
  const i = this.proxy, o = Ee(t) ? t.includes(".") ? Rd(i, t) : () => i[t] : t.bind(i, i);
  let c;
  Vt(e) ? c = e : (c = e.handler, n = e);
  const u = jo(this), h = Dd(o, c.bind(i), n);
  return u(), h;
}
function Rd(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let o = 0; o < n.length && i; o++)
      i = i[n[o]];
    return i;
  };
}
const i0 = /* @__PURE__ */ Symbol("_vte"), o0 = (t) => t.__isTeleport, a0 = /* @__PURE__ */ Symbol("_leaveCb");
function pl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, pl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Od(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function $u(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Xa = /* @__PURE__ */ new WeakMap();
function No(t, e, n, i, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (k, H) => No(
        k,
        e && (Ft(e) ? e[H] : e),
        n,
        i,
        o
      )
    );
    return;
  }
  if (Mo(i) && !o) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && No(t, e, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? bl(i.component) : i.el, u = o ? null : c, { i: h, r: g } = t, b = e && e.r, p = h.refs === de ? h.refs = {} : h.refs, w = h.setupState, N = /* @__PURE__ */ Qt(w), C = w === de ? rd : (k) => $u(p, k) ? !1 : te(N, k), A = (k, H) => !(H && $u(p, H));
  if (b != null && b !== g) {
    if (Hu(e), Ee(b))
      p[b] = null, C(b) && (w[b] = null);
    else if (/* @__PURE__ */ Be(b)) {
      const k = e;
      A(b, k.k) && (b.value = null), k.k && (p[k.k] = null);
    }
  }
  if (Vt(g))
    Uo(g, h, 12, [u, p]);
  else {
    const k = Ee(g), H = /* @__PURE__ */ Be(g);
    if (k || H) {
      const O = () => {
        if (t.f) {
          const D = k ? C(g) ? w[g] : p[g] : A() || !t.k ? g.value : p[t.k];
          if (o)
            Ft(D) && el(D, c);
          else if (Ft(D))
            D.includes(c) || D.push(c);
          else if (k)
            p[g] = [c], C(g) && (w[g] = p[g]);
          else {
            const V = [c];
            A(g, t.k) && (g.value = V), t.k && (p[t.k] = V);
          }
        } else k ? (p[g] = u, C(g) && (w[g] = u)) : H && (A(g, t.k) && (g.value = u), t.k && (p[t.k] = u));
      };
      if (u) {
        const D = () => {
          O(), Xa.delete(t);
        };
        D.id = -1, Xa.set(t, D), an(D, n);
      } else
        Hu(t), O();
    }
  }
}
function Hu(t) {
  const e = Xa.get(t);
  e && (e.flags |= 8, Xa.delete(t));
}
bs().requestIdleCallback;
bs().cancelIdleCallback;
const Mo = (t) => !!t.type.__asyncLoader, Fd = (t) => t.type.__isKeepAlive;
function s0(t, e) {
  $d(t, "a", e);
}
function c0(t, e) {
  $d(t, "da", e);
}
function $d(t, e, n = je) {
  const i = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (Ss(e, i, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Fd(o.parent.vnode) && l0(i, e, n, o), o = o.parent;
  }
}
function l0(t, e, n, i) {
  const o = Ss(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  zd(() => {
    el(i[e], o);
  }, n);
}
function Ss(t, e, n = je, i = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      sr();
      const h = jo(n), g = Yn(e, n, t, u);
      return h(), cr(), g;
    });
    return i ? o.unshift(c) : o.push(c), c;
  }
}
const ur = (t) => (e, n = je) => {
  (!$o || t === "sp") && Ss(t, (...i) => e(...i), n);
}, u0 = ur("bm"), Hd = ur("m"), f0 = ur(
  "bu"
), d0 = ur("u"), Vd = ur(
  "bum"
), zd = ur("um"), h0 = ur(
  "sp"
), p0 = ur("rtg"), g0 = ur("rtc");
function m0(t, e = je) {
  Ss("ec", t, e);
}
const y0 = "components", Ud = /* @__PURE__ */ Symbol.for("v-ndc");
function b0(t) {
  return Ee(t) ? v0(y0, t, !1) || t : t || Ud;
}
function v0(t, e, n = !0, i = !1) {
  const o = Pn || je;
  if (o) {
    const c = o.type;
    {
      const h = i1(
        c,
        !1
      );
      if (h && (h === e || h === nn(e) || h === ys(nn(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vu(o[t] || c[t], e) || // global registration
      Vu(o.appContext[t], e)
    );
    return !u && i ? c : u;
  }
}
function Vu(t, e) {
  return t && (t[e] || t[nn(e)] || t[ys(nn(e))]);
}
function Ei(t, e, n, i) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ee(t)) {
    const h = u && /* @__PURE__ */ jr(t);
    let g = !1, b = !1;
    h && (g = !/* @__PURE__ */ gn(t), b = /* @__PURE__ */ lr(t), t = ws(t)), o = new Array(t.length);
    for (let p = 0, w = t.length; p < w; p++)
      o[p] = e(
        g ? b ? Oi(Cn(t[p])) : Cn(t[p]) : t[p],
        p,
        void 0,
        c
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let h = 0; h < t; h++)
      o[h] = e(h + 1, h, void 0, c);
  } else if (ae(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (h, g) => e(h, g, void 0, c)
      );
    else {
      const h = Object.keys(t);
      o = new Array(h.length);
      for (let g = 0, b = h.length; g < b; g++) {
        const p = h[g];
        o[g] = e(t[p], p, g, c);
      }
    }
  else
    o = [];
  return o;
}
const Rc = (t) => t ? fh(t) ? bl(t) : Rc(t.parent) : null, Po = (
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
    $parent: (t) => Rc(t.parent),
    $root: (t) => Rc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Bd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      hl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Ad.bind(t.proxy)),
    $watch: (t) => r0.bind(t)
  })
), pc = (t, e) => t !== de && !t.__isScriptSetup && te(t, e), _0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: o, props: c, accessCache: u, type: h, appContext: g } = t;
    if (e[0] !== "$") {
      const N = u[e];
      if (N !== void 0)
        switch (N) {
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
        if (pc(i, e))
          return u[e] = 1, i[e];
        if (o !== de && te(o, e))
          return u[e] = 2, o[e];
        if (te(c, e))
          return u[e] = 3, c[e];
        if (n !== de && te(n, e))
          return u[e] = 4, n[e];
        Oc && (u[e] = 0);
      }
    }
    const b = Po[e];
    let p, w;
    if (b)
      return e === "$attrs" && ze(t.attrs, "get", ""), b(t);
    if (
      // css module (injected by vue-loader)
      (p = h.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== de && te(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      w = g.config.globalProperties, te(w, e)
    )
      return w[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: o, ctx: c } = t;
    return pc(o, e) ? (o[e] = n, !0) : i !== de && te(i, e) ? (i[e] = n, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: o, props: c, type: u }
  }, h) {
    let g;
    return !!(n[h] || t !== de && h[0] !== "$" && te(t, h) || pc(e, h) || te(c, h) || te(i, h) || te(Po, h) || te(o.config.globalProperties, h) || (g = u.__cssModules) && g[h]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function zu(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Oc = !0;
function w0(t) {
  const e = Bd(t), n = t.proxy, i = t.ctx;
  Oc = !1, e.beforeCreate && Uu(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: c,
    methods: u,
    watch: h,
    provide: g,
    inject: b,
    // lifecycle
    created: p,
    beforeMount: w,
    mounted: N,
    beforeUpdate: C,
    updated: A,
    activated: k,
    deactivated: H,
    beforeDestroy: O,
    beforeUnmount: D,
    destroyed: V,
    unmounted: R,
    render: M,
    renderTracked: Q,
    renderTriggered: at,
    errorCaptured: tt,
    serverPrefetch: bt,
    // public API
    expose: F,
    inheritAttrs: W,
    // assets
    components: pt,
    directives: ft,
    filters: it
  } = e;
  if (b && x0(b, i, null), u)
    for (const rt in u) {
      const gt = u[rt];
      Vt(gt) && (i[rt] = gt.bind(n));
    }
  if (o) {
    const rt = o.call(n, n);
    ae(rt) && (t.data = /* @__PURE__ */ ll(rt));
  }
  if (Oc = !0, c)
    for (const rt in c) {
      const gt = c[rt], St = Vt(gt) ? gt.bind(n, n) : Vt(gt.get) ? gt.get.bind(n, n) : Wn, At = !Vt(gt) && Vt(gt.set) ? gt.set.bind(n) : Wn, X = Li({
        get: St,
        set: At
      });
      Object.defineProperty(i, rt, {
        enumerable: !0,
        configurable: !0,
        get: () => X.value,
        set: (Nt) => X.value = Nt
      });
    }
  if (h)
    for (const rt in h)
      jd(h[rt], i, n, rt);
  if (g) {
    const rt = Vt(g) ? g.call(n) : g;
    Reflect.ownKeys(rt).forEach((gt) => {
      t0(gt, rt[gt]);
    });
  }
  p && Uu(p, t, "c");
  function et(rt, gt) {
    Ft(gt) ? gt.forEach((St) => rt(St.bind(n))) : gt && rt(gt.bind(n));
  }
  if (et(u0, w), et(Hd, N), et(f0, C), et(d0, A), et(s0, k), et(c0, H), et(m0, tt), et(g0, Q), et(p0, at), et(Vd, D), et(zd, R), et(h0, bt), Ft(F))
    if (F.length) {
      const rt = t.exposed || (t.exposed = {});
      F.forEach((gt) => {
        Object.defineProperty(rt, gt, {
          get: () => n[gt],
          set: (St) => n[gt] = St,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  M && t.render === Wn && (t.render = M), W != null && (t.inheritAttrs = W), pt && (t.components = pt), ft && (t.directives = ft), bt && Od(t);
}
function x0(t, e, n = Wn) {
  Ft(t) && (t = Fc(t));
  for (const i in t) {
    const o = t[i];
    let c;
    ae(o) ? "default" in o ? c = La(
      o.from || i,
      o.default,
      !0
    ) : c = La(o.from || i) : c = La(o), /* @__PURE__ */ Be(c) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[i] = c;
  }
}
function Uu(t, e, n) {
  Yn(
    Ft(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function jd(t, e, n, i) {
  let o = i.includes(".") ? Rd(n, i) : () => n[i];
  if (Ee(t)) {
    const c = e[t];
    Vt(c) && Da(o, c);
  } else if (Vt(t))
    Da(o, t.bind(n));
  else if (ae(t))
    if (Ft(t))
      t.forEach((c) => jd(c, e, n, i));
    else {
      const c = Vt(t.handler) ? t.handler.bind(n) : e[t.handler];
      Vt(c) && Da(o, c, t);
    }
}
function Bd(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: o,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = t.appContext, h = c.get(e);
  let g;
  return h ? g = h : !o.length && !n && !i ? g = e : (g = {}, o.length && o.forEach(
    (b) => Za(g, b, u, !0)
  ), Za(g, e, u)), ae(e) && c.set(e, g), g;
}
function Za(t, e, n, i = !1) {
  const { mixins: o, extends: c } = e;
  c && Za(t, c, n, !0), o && o.forEach(
    (u) => Za(t, u, n, !0)
  );
  for (const u in e)
    if (!(i && u === "expose")) {
      const h = S0[u] || n && n[u];
      t[u] = h ? h(t[u], e[u]) : e[u];
    }
  return t;
}
const S0 = {
  data: ju,
  props: Bu,
  emits: Bu,
  // objects
  methods: go,
  computed: go,
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
  components: go,
  directives: go,
  // watch
  watch: M0,
  // provide / inject
  provide: ju,
  inject: N0
};
function ju(t, e) {
  return e ? t ? function() {
    return Ge(
      Vt(t) ? t.call(this, this) : t,
      Vt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function N0(t, e) {
  return go(Fc(t), Fc(e));
}
function Fc(t) {
  if (Ft(t)) {
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
function go(t, e) {
  return t ? Ge(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Bu(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ge(
    /* @__PURE__ */ Object.create(null),
    zu(t),
    zu(e ?? {})
  ) : e;
}
function M0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ge(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Je(t[i], e[i]);
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
let P0 = 0;
function k0(t, e) {
  return function(i, o = null) {
    Vt(i) || (i = Ge({}, i)), o != null && !ae(o) && (o = null);
    const c = Gd(), u = /* @__PURE__ */ new WeakSet(), h = [];
    let g = !1;
    const b = c.app = {
      _uid: P0++,
      _component: i,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: a1,
      get config() {
        return c.config;
      },
      set config(p) {
      },
      use(p, ...w) {
        return u.has(p) || (p && Vt(p.install) ? (u.add(p), p.install(b, ...w)) : Vt(p) && (u.add(p), p(b, ...w))), b;
      },
      mixin(p) {
        return c.mixins.includes(p) || c.mixins.push(p), b;
      },
      component(p, w) {
        return w ? (c.components[p] = w, b) : c.components[p];
      },
      directive(p, w) {
        return w ? (c.directives[p] = w, b) : c.directives[p];
      },
      mount(p, w, N) {
        if (!g) {
          const C = b._ceVNode || en(i, o);
          return C.appContext = c, N === !0 ? N = "svg" : N === !1 && (N = void 0), t(C, p, N), g = !0, b._container = p, p.__vue_app__ = b, bl(C.component);
        }
      },
      onUnmount(p) {
        h.push(p);
      },
      unmount() {
        g && (Yn(
          h,
          b._instance,
          16
        ), t(null, b._container), delete b._container.__vue_app__);
      },
      provide(p, w) {
        return c.provides[p] = w, b;
      },
      runWithContext(p) {
        const w = Ti;
        Ti = b;
        try {
          return p();
        } finally {
          Ti = w;
        }
      }
    };
    return b;
  };
}
let Ti = null;
const C0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${nn(e)}Modifiers`] || t[`${Zr(e)}Modifiers`];
function A0(t, e, ...n) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || de;
  let o = n;
  const c = e.startsWith("update:"), u = c && C0(i, e.slice(7));
  u && (u.trim && (o = n.map((p) => Ee(p) ? p.trim() : p)), u.number && (o = n.map(dm)));
  let h, g = i[h = cc(e)] || // also try camelCase event handler (#2249)
  i[h = cc(nn(e))];
  !g && c && (g = i[h = cc(Zr(e))]), g && Yn(
    g,
    t,
    6,
    o
  );
  const b = i[h + "Once"];
  if (b) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[h])
      return;
    t.emitted[h] = !0, Yn(
      b,
      t,
      6,
      o
    );
  }
}
const I0 = /* @__PURE__ */ new WeakMap();
function Kd(t, e, n = !1) {
  const i = n ? I0 : e.emitsCache, o = i.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, h = !1;
  if (!Vt(t)) {
    const g = (b) => {
      const p = Kd(b, e, !0);
      p && (h = !0, Ge(u, p));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !c && !h ? (ae(t) && i.set(t, null), null) : (Ft(c) ? c.forEach((g) => u[g] = null) : Ge(u, c), ae(t) && i.set(t, u), u);
}
function Ns(t, e) {
  return !t || !ps(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, Zr(e)) || te(t, e));
}
function Gu(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: o,
    propsOptions: [c],
    slots: u,
    attrs: h,
    emit: g,
    render: b,
    renderCache: p,
    props: w,
    data: N,
    setupState: C,
    ctx: A,
    inheritAttrs: k
  } = t, H = Ya(t);
  let O, D;
  try {
    if (n.shapeFlag & 4) {
      const R = o || i, M = R;
      O = jn(
        b.call(
          M,
          R,
          p,
          w,
          C,
          N,
          A
        )
      ), D = h;
    } else {
      const R = e;
      O = jn(
        R.length > 1 ? R(
          w,
          { attrs: h, slots: u, emit: g }
        ) : R(
          w,
          null
        )
      ), D = e.props ? h : E0(h);
    }
  } catch (R) {
    ko.length = 0, xs(R, t, 1), O = en(Mr);
  }
  let V = O;
  if (D && k !== !1) {
    const R = Object.keys(D), { shapeFlag: M } = V;
    R.length && M & 7 && (c && R.some(gs) && (D = T0(
      D,
      c
    )), V = Fi(V, D, !1, !0));
  }
  return n.dirs && (V = Fi(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && pl(V, n.transition), O = V, Ya(H), O;
}
const E0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ps(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, T0 = (t, e) => {
  const n = {};
  for (const i in t)
    (!gs(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function L0(t, e, n) {
  const { props: i, children: o, component: c } = t, { props: u, children: h, patchFlag: g } = e, b = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return i ? Ku(i, u, b) : !!u;
    if (g & 8) {
      const p = e.dynamicProps;
      for (let w = 0; w < p.length; w++) {
        const N = p[w];
        if (Wd(u, i, N) && !Ns(b, N))
          return !0;
      }
    }
  } else
    return (o || h) && (!h || !h.$stable) ? !0 : i === u ? !1 : i ? u ? Ku(i, u, b) : !0 : !!u;
  return !1;
}
function Ku(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    if (Wd(e, t, c) && !Ns(n, c))
      return !0;
  }
  return !1;
}
function Wd(t, e, n) {
  const i = t[n], o = e[n];
  return n === "style" && ae(i) && ae(o) ? !rl(i, o) : i !== o;
}
function D0({ vnode: t, parent: e, suspense: n }, i) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = i, t = o), o === t)
      (t = e.vnode).el = i, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = i);
}
const qd = {}, Yd = () => Object.create(qd), Xd = (t) => Object.getPrototypeOf(t) === qd;
function R0(t, e, n, i = !1) {
  const o = {}, c = Yd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zd(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = i ? o : /* @__PURE__ */ Vm(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function O0(t, e, n, i) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, h = /* @__PURE__ */ Qt(o), [g] = t.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const p = t.vnode.dynamicProps;
      for (let w = 0; w < p.length; w++) {
        let N = p[w];
        if (Ns(t.emitsOptions, N))
          continue;
        const C = e[N];
        if (g)
          if (te(c, N))
            C !== c[N] && (c[N] = C, b = !0);
          else {
            const A = nn(N);
            o[A] = $c(
              g,
              h,
              A,
              C,
              t,
              !1
            );
          }
        else
          C !== c[N] && (c[N] = C, b = !0);
      }
    }
  } else {
    Zd(t, e, o, c) && (b = !0);
    let p;
    for (const w in h)
      (!e || // for camelCase
      !te(e, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Zr(w)) === w || !te(e, p))) && (g ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[w] = $c(
        g,
        h,
        w,
        void 0,
        t,
        !0
      )) : delete o[w]);
    if (c !== h)
      for (const w in c)
        (!e || !te(e, w)) && (delete c[w], b = !0);
  }
  b && ar(t.attrs, "set", "");
}
function Zd(t, e, n, i) {
  const [o, c] = t.propsOptions;
  let u = !1, h;
  if (e)
    for (let g in e) {
      if (wo(g))
        continue;
      const b = e[g];
      let p;
      o && te(o, p = nn(g)) ? !c || !c.includes(p) ? n[p] = b : (h || (h = {}))[p] = b : Ns(t.emitsOptions, g) || (!(g in i) || b !== i[g]) && (i[g] = b, u = !0);
    }
  if (c) {
    const g = /* @__PURE__ */ Qt(n), b = h || de;
    for (let p = 0; p < c.length; p++) {
      const w = c[p];
      n[w] = $c(
        o,
        g,
        w,
        b[w],
        t,
        !te(b, w)
      );
    }
  }
  return u;
}
function $c(t, e, n, i, o, c) {
  const u = t[n];
  if (u != null) {
    const h = te(u, "default");
    if (h && i === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Vt(g)) {
        const { propsDefaults: b } = o;
        if (n in b)
          i = b[n];
        else {
          const p = jo(o);
          i = b[n] = g.call(
            null,
            e
          ), p();
        }
      } else
        i = g;
      o.ce && o.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !h ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Zr(n)) && (i = !0));
  }
  return i;
}
const F0 = /* @__PURE__ */ new WeakMap();
function Jd(t, e, n = !1) {
  const i = n ? F0 : e.propsCache, o = i.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, h = [];
  let g = !1;
  if (!Vt(t)) {
    const p = (w) => {
      g = !0;
      const [N, C] = Jd(w, e, !0);
      Ge(u, N), C && h.push(...C);
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  if (!c && !g)
    return ae(t) && i.set(t, Ci), Ci;
  if (Ft(c))
    for (let p = 0; p < c.length; p++) {
      const w = nn(c[p]);
      Wu(w) && (u[w] = de);
    }
  else if (c)
    for (const p in c) {
      const w = nn(p);
      if (Wu(w)) {
        const N = c[p], C = u[w] = Ft(N) || Vt(N) ? { type: N } : Ge({}, N), A = C.type;
        let k = !1, H = !0;
        if (Ft(A))
          for (let O = 0; O < A.length; ++O) {
            const D = A[O], V = Vt(D) && D.name;
            if (V === "Boolean") {
              k = !0;
              break;
            } else V === "String" && (H = !1);
          }
        else
          k = Vt(A) && A.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = k, C[
          1
          /* shouldCastTrue */
        ] = H, (k || te(C, "default")) && h.push(w);
      }
    }
  const b = [u, h];
  return ae(t) && i.set(t, b), b;
}
function Wu(t) {
  return t[0] !== "$" && !wo(t);
}
const gl = (t) => t === "_" || t === "_ctx" || t === "$stable", ml = (t) => Ft(t) ? t.map(jn) : [jn(t)], $0 = (t, e, n) => {
  if (e._n)
    return e;
  const i = Qm((...o) => ml(e(...o)), n);
  return i._c = !1, i;
}, Qd = (t, e, n) => {
  const i = t._ctx;
  for (const o in t) {
    if (gl(o)) continue;
    const c = t[o];
    if (Vt(c))
      e[o] = $0(o, c, i);
    else if (c != null) {
      const u = ml(c);
      e[o] = () => u;
    }
  }
}, th = (t, e) => {
  const n = ml(e);
  t.slots.default = () => n;
}, eh = (t, e, n) => {
  for (const i in e)
    (n || !gl(i)) && (t[i] = e[i]);
}, H0 = (t, e, n) => {
  const i = t.slots = Yd();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (eh(i, e, n), n && cd(i, "_", o, !0)) : Qd(e, i);
  } else e && th(t, e);
}, V0 = (t, e, n) => {
  const { vnode: i, slots: o } = t;
  let c = !0, u = de;
  if (i.shapeFlag & 32) {
    const h = e._;
    h ? n && h === 1 ? c = !1 : eh(o, e, n) : (c = !e.$stable, Qd(e, o)), u = e;
  } else e && (th(t, e), u = { default: 1 });
  if (c)
    for (const h in o)
      !gl(h) && u[h] == null && delete o[h];
}, an = G0;
function z0(t) {
  return U0(t);
}
function U0(t, e) {
  const n = bs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: o,
    patchProp: c,
    createElement: u,
    createText: h,
    createComment: g,
    setText: b,
    setElementText: p,
    parentNode: w,
    nextSibling: N,
    setScopeId: C = Wn,
    insertStaticContent: A
  } = t, k = (I, L, z, J = null, q = null, Y = null, nt = void 0, ct = null, dt = !!L.dynamicChildren) => {
    if (I === L)
      return;
    I && !co(I, L) && (J = U(I), Nt(I, q, Y, !0), I = null), L.patchFlag === -2 && (dt = !1, L.dynamicChildren = null);
    const { type: ot, ref: Et, shapeFlag: xt } = L;
    switch (ot) {
      case Ms:
        H(I, L, z, J);
        break;
      case Mr:
        O(I, L, z, J);
        break;
      case Ra:
        I == null && D(L, z, J, nt);
        break;
      case Ue:
        pt(
          I,
          L,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt
        );
        break;
      default:
        xt & 1 ? M(
          I,
          L,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt
        ) : xt & 6 ? ft(
          I,
          L,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt
        ) : (xt & 64 || xt & 128) && ot.process(
          I,
          L,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt,
          Rt
        );
    }
    Et != null && q ? No(Et, I && I.ref, Y, L || I, !L) : Et == null && I && I.ref != null && No(I.ref, null, Y, I, !0);
  }, H = (I, L, z, J) => {
    if (I == null)
      i(
        L.el = h(L.children),
        z,
        J
      );
    else {
      const q = L.el = I.el;
      L.children !== I.children && b(q, L.children);
    }
  }, O = (I, L, z, J) => {
    I == null ? i(
      L.el = g(L.children || ""),
      z,
      J
    ) : L.el = I.el;
  }, D = (I, L, z, J) => {
    [I.el, I.anchor] = A(
      I.children,
      L,
      z,
      J,
      I.el,
      I.anchor
    );
  }, V = ({ el: I, anchor: L }, z, J) => {
    let q;
    for (; I && I !== L; )
      q = N(I), i(I, z, J), I = q;
    i(L, z, J);
  }, R = ({ el: I, anchor: L }) => {
    let z;
    for (; I && I !== L; )
      z = N(I), o(I), I = z;
    o(L);
  }, M = (I, L, z, J, q, Y, nt, ct, dt) => {
    if (L.type === "svg" ? nt = "svg" : L.type === "math" && (nt = "mathml"), I == null)
      Q(
        L,
        z,
        J,
        q,
        Y,
        nt,
        ct,
        dt
      );
    else {
      const ot = I.el && I.el._isVueCE ? I.el : null;
      try {
        ot && ot._beginPatch(), bt(
          I,
          L,
          q,
          Y,
          nt,
          ct,
          dt
        );
      } finally {
        ot && ot._endPatch();
      }
    }
  }, Q = (I, L, z, J, q, Y, nt, ct) => {
    let dt, ot;
    const { props: Et, shapeFlag: xt, transition: f, dirs: Ct } = I;
    if (dt = I.el = u(
      I.type,
      Y,
      Et && Et.is,
      Et
    ), xt & 8 ? p(dt, I.children) : xt & 16 && tt(
      I.children,
      dt,
      null,
      J,
      q,
      gc(I, Y),
      nt,
      ct
    ), Ct && Dr(I, null, J, "created"), at(dt, I, I.scopeId, nt, J), Et) {
      for (const Yt in Et)
        Yt !== "value" && !wo(Yt) && c(dt, Yt, null, Et[Yt], Y, J);
      "value" in Et && c(dt, "value", null, Et.value, Y), (ot = Et.onVnodeBeforeMount) && Fn(ot, J, I);
    }
    Ct && Dr(I, null, J, "beforeMount");
    const Wt = j0(q, f);
    Wt && f.beforeEnter(dt), i(dt, L, z), ((ot = Et && Et.onVnodeMounted) || Wt || Ct) && an(() => {
      try {
        ot && Fn(ot, J, I), Wt && f.enter(dt), Ct && Dr(I, null, J, "mounted");
      } finally {
      }
    }, q);
  }, at = (I, L, z, J, q) => {
    if (z && C(I, z), J)
      for (let Y = 0; Y < J.length; Y++)
        C(I, J[Y]);
    if (q) {
      let Y = q.subTree;
      if (L === Y || oh(Y.type) && (Y.ssContent === L || Y.ssFallback === L)) {
        const nt = q.vnode;
        at(
          I,
          nt,
          nt.scopeId,
          nt.slotScopeIds,
          q.parent
        );
      }
    }
  }, tt = (I, L, z, J, q, Y, nt, ct, dt = 0) => {
    for (let ot = dt; ot < I.length; ot++) {
      const Et = I[ot] = ct ? or(I[ot]) : jn(I[ot]);
      k(
        null,
        Et,
        L,
        z,
        J,
        q,
        Y,
        nt,
        ct
      );
    }
  }, bt = (I, L, z, J, q, Y, nt) => {
    const ct = L.el = I.el;
    let { patchFlag: dt, dynamicChildren: ot, dirs: Et } = L;
    dt |= I.patchFlag & 16;
    const xt = I.props || de, f = L.props || de;
    let Ct;
    if (z && Rr(z, !1), (Ct = f.onVnodeBeforeUpdate) && Fn(Ct, z, L, I), Et && Dr(L, I, z, "beforeUpdate"), z && Rr(z, !0), (xt.innerHTML && f.innerHTML == null || xt.textContent && f.textContent == null) && p(ct, ""), ot ? F(
      I.dynamicChildren,
      ot,
      ct,
      z,
      J,
      gc(L, q),
      Y
    ) : nt || gt(
      I,
      L,
      ct,
      null,
      z,
      J,
      gc(L, q),
      Y,
      !1
    ), dt > 0) {
      if (dt & 16)
        W(ct, xt, f, z, q);
      else if (dt & 2 && xt.class !== f.class && c(ct, "class", null, f.class, q), dt & 4 && c(ct, "style", xt.style, f.style, q), dt & 8) {
        const Wt = L.dynamicProps;
        for (let Yt = 0; Yt < Wt.length; Yt++) {
          const Xt = Wt[Yt], Pt = xt[Xt], ee = f[Xt];
          (ee !== Pt || Xt === "value") && c(ct, Xt, Pt, ee, q, z);
        }
      }
      dt & 1 && I.children !== L.children && p(ct, L.children);
    } else !nt && ot == null && W(ct, xt, f, z, q);
    ((Ct = f.onVnodeUpdated) || Et) && an(() => {
      Ct && Fn(Ct, z, L, I), Et && Dr(L, I, z, "updated");
    }, J);
  }, F = (I, L, z, J, q, Y, nt) => {
    for (let ct = 0; ct < L.length; ct++) {
      const dt = I[ct], ot = L[ct], Et = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        dt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (dt.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !co(dt, ot) || // - In the case of a component, it could contain anything.
        dt.shapeFlag & 198) ? w(dt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      k(
        dt,
        ot,
        Et,
        null,
        J,
        q,
        Y,
        nt,
        !0
      );
    }
  }, W = (I, L, z, J, q) => {
    if (L !== z) {
      if (L !== de)
        for (const Y in L)
          !wo(Y) && !(Y in z) && c(
            I,
            Y,
            L[Y],
            null,
            q,
            J
          );
      for (const Y in z) {
        if (wo(Y)) continue;
        const nt = z[Y], ct = L[Y];
        nt !== ct && Y !== "value" && c(I, Y, ct, nt, q, J);
      }
      "value" in z && c(I, "value", L.value, z.value, q);
    }
  }, pt = (I, L, z, J, q, Y, nt, ct, dt) => {
    const ot = L.el = I ? I.el : h(""), Et = L.anchor = I ? I.anchor : h("");
    let { patchFlag: xt, dynamicChildren: f, slotScopeIds: Ct } = L;
    Ct && (ct = ct ? ct.concat(Ct) : Ct), I == null ? (i(ot, z, J), i(Et, z, J), tt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      z,
      Et,
      q,
      Y,
      nt,
      ct,
      dt
    )) : xt > 0 && xt & 64 && f && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren && I.dynamicChildren.length === f.length ? (F(
      I.dynamicChildren,
      f,
      z,
      q,
      Y,
      nt,
      ct
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || q && L === q.subTree) && nh(
      I,
      L,
      !0
      /* shallow */
    )) : gt(
      I,
      L,
      z,
      Et,
      q,
      Y,
      nt,
      ct,
      dt
    );
  }, ft = (I, L, z, J, q, Y, nt, ct, dt) => {
    L.slotScopeIds = ct, I == null ? L.shapeFlag & 512 ? q.ctx.activate(
      L,
      z,
      J,
      nt,
      dt
    ) : it(
      L,
      z,
      J,
      q,
      Y,
      nt,
      dt
    ) : G(I, L, dt);
  }, it = (I, L, z, J, q, Y, nt) => {
    const ct = I.component = J0(
      I,
      J,
      q
    );
    if (Fd(I) && (ct.ctx.renderer = Rt), t1(ct, !1, nt), ct.asyncDep) {
      if (q && q.registerDep(ct, et, nt), !I.el) {
        const dt = ct.subTree = en(Mr);
        O(null, dt, L, z), I.placeholder = dt.el;
      }
    } else
      et(
        ct,
        I,
        L,
        z,
        q,
        Y,
        nt
      );
  }, G = (I, L, z) => {
    const J = L.component = I.component;
    if (L0(I, L, z))
      if (J.asyncDep && !J.asyncResolved) {
        rt(J, L, z);
        return;
      } else
        J.next = L, J.update();
    else
      L.el = I.el, J.vnode = L;
  }, et = (I, L, z, J, q, Y, nt) => {
    const ct = () => {
      if (I.isMounted) {
        let { next: xt, bu: f, u: Ct, parent: Wt, vnode: Yt } = I;
        {
          const rn = rh(I);
          if (rn) {
            xt && (xt.el = Yt.el, rt(I, xt, nt)), rn.asyncDep.then(() => {
              an(() => {
                I.isUnmounted || ot();
              }, q);
            });
            return;
          }
        }
        let Xt = xt, Pt;
        Rr(I, !1), xt ? (xt.el = Yt.el, rt(I, xt, nt)) : xt = Yt, f && lc(f), (Pt = xt.props && xt.props.onVnodeBeforeUpdate) && Fn(Pt, Wt, xt, Yt), Rr(I, !0);
        const ee = Gu(I), Ne = I.subTree;
        I.subTree = ee, k(
          Ne,
          ee,
          // parent may have changed if it's in a teleport
          w(Ne.el),
          // anchor may have changed if it's in a fragment
          U(Ne),
          I,
          q,
          Y
        ), xt.el = ee.el, Xt === null && D0(I, ee.el), Ct && an(Ct, q), (Pt = xt.props && xt.props.onVnodeUpdated) && an(
          () => Fn(Pt, Wt, xt, Yt),
          q
        );
      } else {
        let xt;
        const { el: f, props: Ct } = L, { bm: Wt, m: Yt, parent: Xt, root: Pt, type: ee } = I, Ne = Mo(L);
        Rr(I, !1), Wt && lc(Wt), !Ne && (xt = Ct && Ct.onVnodeBeforeMount) && Fn(xt, Xt, L), Rr(I, !0);
        {
          Pt.ce && Pt.ce._hasShadowRoot() && Pt.ce._injectChildStyle(
            ee,
            I.parent ? I.parent.type : void 0
          );
          const rn = I.subTree = Gu(I);
          k(
            null,
            rn,
            z,
            J,
            I,
            q,
            Y
          ), L.el = rn.el;
        }
        if (Yt && an(Yt, q), !Ne && (xt = Ct && Ct.onVnodeMounted)) {
          const rn = L;
          an(
            () => Fn(xt, Xt, rn),
            q
          );
        }
        (L.shapeFlag & 256 || Xt && Mo(Xt.vnode) && Xt.vnode.shapeFlag & 256) && I.a && an(I.a, q), I.isMounted = !0, L = z = J = null;
      }
    };
    I.scope.on();
    const dt = I.effect = new hd(ct);
    I.scope.off();
    const ot = I.update = dt.run.bind(dt), Et = I.job = dt.runIfDirty.bind(dt);
    Et.i = I, Et.id = I.uid, dt.scheduler = () => hl(Et), Rr(I, !0), ot();
  }, rt = (I, L, z) => {
    L.component = I;
    const J = I.vnode.props;
    I.vnode = L, I.next = null, O0(I, L.props, J, z), V0(I, L.children, z), sr(), Fu(I), cr();
  }, gt = (I, L, z, J, q, Y, nt, ct, dt = !1) => {
    const ot = I && I.children, Et = I ? I.shapeFlag : 0, xt = L.children, { patchFlag: f, shapeFlag: Ct } = L;
    if (f > 0) {
      if (f & 128) {
        At(
          ot,
          xt,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt
        );
        return;
      } else if (f & 256) {
        St(
          ot,
          xt,
          z,
          J,
          q,
          Y,
          nt,
          ct,
          dt
        );
        return;
      }
    }
    Ct & 8 ? (Et & 16 && Se(ot, q, Y), xt !== ot && p(z, xt)) : Et & 16 ? Ct & 16 ? At(
      ot,
      xt,
      z,
      J,
      q,
      Y,
      nt,
      ct,
      dt
    ) : Se(ot, q, Y, !0) : (Et & 8 && p(z, ""), Ct & 16 && tt(
      xt,
      z,
      J,
      q,
      Y,
      nt,
      ct,
      dt
    ));
  }, St = (I, L, z, J, q, Y, nt, ct, dt) => {
    I = I || Ci, L = L || Ci;
    const ot = I.length, Et = L.length, xt = Math.min(ot, Et);
    let f;
    for (f = 0; f < xt; f++) {
      const Ct = L[f] = dt ? or(L[f]) : jn(L[f]);
      k(
        I[f],
        Ct,
        z,
        null,
        q,
        Y,
        nt,
        ct,
        dt
      );
    }
    ot > Et ? Se(
      I,
      q,
      Y,
      !0,
      !1,
      xt
    ) : tt(
      L,
      z,
      J,
      q,
      Y,
      nt,
      ct,
      dt,
      xt
    );
  }, At = (I, L, z, J, q, Y, nt, ct, dt) => {
    let ot = 0;
    const Et = L.length;
    let xt = I.length - 1, f = Et - 1;
    for (; ot <= xt && ot <= f; ) {
      const Ct = I[ot], Wt = L[ot] = dt ? or(L[ot]) : jn(L[ot]);
      if (co(Ct, Wt))
        k(
          Ct,
          Wt,
          z,
          null,
          q,
          Y,
          nt,
          ct,
          dt
        );
      else
        break;
      ot++;
    }
    for (; ot <= xt && ot <= f; ) {
      const Ct = I[xt], Wt = L[f] = dt ? or(L[f]) : jn(L[f]);
      if (co(Ct, Wt))
        k(
          Ct,
          Wt,
          z,
          null,
          q,
          Y,
          nt,
          ct,
          dt
        );
      else
        break;
      xt--, f--;
    }
    if (ot > xt) {
      if (ot <= f) {
        const Ct = f + 1, Wt = Ct < Et ? L[Ct].el : J;
        for (; ot <= f; )
          k(
            null,
            L[ot] = dt ? or(L[ot]) : jn(L[ot]),
            z,
            Wt,
            q,
            Y,
            nt,
            ct,
            dt
          ), ot++;
      }
    } else if (ot > f)
      for (; ot <= xt; )
        Nt(I[ot], q, Y, !0), ot++;
    else {
      const Ct = ot, Wt = ot, Yt = /* @__PURE__ */ new Map();
      for (ot = Wt; ot <= f; ot++) {
        const Me = L[ot] = dt ? or(L[ot]) : jn(L[ot]);
        Me.key != null && Yt.set(Me.key, ot);
      }
      let Xt, Pt = 0;
      const ee = f - Wt + 1;
      let Ne = !1, rn = 0;
      const cn = new Array(ee);
      for (ot = 0; ot < ee; ot++) cn[ot] = 0;
      for (ot = Ct; ot <= xt; ot++) {
        const Me = I[ot];
        if (Pt >= ee) {
          Nt(Me, q, Y, !0);
          continue;
        }
        let se;
        if (Me.key != null)
          se = Yt.get(Me.key);
        else
          for (Xt = Wt; Xt <= f; Xt++)
            if (cn[Xt - Wt] === 0 && co(Me, L[Xt])) {
              se = Xt;
              break;
            }
        se === void 0 ? Nt(Me, q, Y, !0) : (cn[se - Wt] = ot + 1, se >= rn ? rn = se : Ne = !0, k(
          Me,
          L[se],
          z,
          null,
          q,
          Y,
          nt,
          ct,
          dt
        ), Pt++);
      }
      const Jr = Ne ? B0(cn) : Ci;
      for (Xt = Jr.length - 1, ot = ee - 1; ot >= 0; ot--) {
        const Me = Wt + ot, se = L[Me], Bo = L[Me + 1], Go = Me + 1 < Et ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bo.el || ih(Bo)
        ) : J;
        cn[ot] === 0 ? k(
          null,
          se,
          z,
          Go,
          q,
          Y,
          nt,
          ct,
          dt
        ) : Ne && (Xt < 0 || ot !== Jr[Xt] ? X(se, z, Go, 2) : Xt--);
      }
    }
  }, X = (I, L, z, J, q = null) => {
    const { el: Y, type: nt, transition: ct, children: dt, shapeFlag: ot } = I;
    if (ot & 6) {
      X(I.component.subTree, L, z, J);
      return;
    }
    if (ot & 128) {
      I.suspense.move(L, z, J);
      return;
    }
    if (ot & 64) {
      nt.move(I, L, z, Rt);
      return;
    }
    if (nt === Ue) {
      i(Y, L, z);
      for (let xt = 0; xt < dt.length; xt++)
        X(dt[xt], L, z, J);
      i(I.anchor, L, z);
      return;
    }
    if (nt === Ra) {
      V(I, L, z);
      return;
    }
    if (J !== 2 && ot & 1 && ct)
      if (J === 0)
        ct.beforeEnter(Y), i(Y, L, z), an(() => ct.enter(Y), q);
      else {
        const { leave: xt, delayLeave: f, afterLeave: Ct } = ct, Wt = () => {
          I.ctx.isUnmounted ? o(Y) : i(Y, L, z);
        }, Yt = () => {
          Y._isLeaving && Y[a0](
            !0
            /* cancelled */
          ), xt(Y, () => {
            Wt(), Ct && Ct();
          });
        };
        f ? f(Y, Wt, Yt) : Yt();
      }
    else
      i(Y, L, z);
  }, Nt = (I, L, z, J = !1, q = !1) => {
    const {
      type: Y,
      props: nt,
      ref: ct,
      children: dt,
      dynamicChildren: ot,
      shapeFlag: Et,
      patchFlag: xt,
      dirs: f,
      cacheIndex: Ct,
      memo: Wt
    } = I;
    if (xt === -2 && (q = !1), ct != null && (sr(), No(ct, null, z, I, !0), cr()), Ct != null && (L.renderCache[Ct] = void 0), Et & 256) {
      L.ctx.deactivate(I);
      return;
    }
    const Yt = Et & 1 && f, Xt = !Mo(I);
    let Pt;
    if (Xt && (Pt = nt && nt.onVnodeBeforeUnmount) && Fn(Pt, L, I), Et & 6)
      pe(I.component, z, J);
    else {
      if (Et & 128) {
        I.suspense.unmount(z, J);
        return;
      }
      Yt && Dr(I, null, L, "beforeUnmount"), Et & 64 ? I.type.remove(
        I,
        L,
        z,
        Rt,
        J
      ) : ot && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ot.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== Ue || xt > 0 && xt & 64) ? Se(
        ot,
        L,
        z,
        !1,
        !0
      ) : (Y === Ue && xt & 384 || !q && Et & 16) && Se(dt, L, z), J && Ut(I);
    }
    const ee = Wt != null && Ct == null;
    (Xt && (Pt = nt && nt.onVnodeUnmounted) || Yt || ee) && an(() => {
      Pt && Fn(Pt, L, I), Yt && Dr(I, null, L, "unmounted"), ee && (I.el = null);
    }, z);
  }, Ut = (I) => {
    const { type: L, el: z, anchor: J, transition: q } = I;
    if (L === Ue) {
      he(z, J);
      return;
    }
    if (L === Ra) {
      R(I);
      return;
    }
    const Y = () => {
      o(z), q && !q.persisted && q.afterLeave && q.afterLeave();
    };
    if (I.shapeFlag & 1 && q && !q.persisted) {
      const { leave: nt, delayLeave: ct } = q, dt = () => nt(z, Y);
      ct ? ct(I.el, Y, dt) : dt();
    } else
      Y();
  }, he = (I, L) => {
    let z;
    for (; I !== L; )
      z = N(I), o(I), I = z;
    o(L);
  }, pe = (I, L, z) => {
    const { bum: J, scope: q, job: Y, subTree: nt, um: ct, m: dt, a: ot } = I;
    qu(dt), qu(ot), J && lc(J), q.stop(), Y && (Y.flags |= 8, Nt(nt, I, L, z)), ct && an(ct, L), an(() => {
      I.isUnmounted = !0;
    }, L);
  }, Se = (I, L, z, J = !1, q = !1, Y = 0) => {
    for (let nt = Y; nt < I.length; nt++)
      Nt(I[nt], L, z, J, q);
  }, U = (I) => {
    if (I.shapeFlag & 6)
      return U(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const L = N(I.anchor || I.el), z = L && L[i0];
    return z ? N(z) : L;
  };
  let kt = !1;
  const Mt = (I, L, z) => {
    let J;
    I == null ? L._vnode && (Nt(L._vnode, null, null, !0), J = L._vnode.component) : k(
      L._vnode || null,
      I,
      L,
      null,
      null,
      null,
      z
    ), L._vnode = I, kt || (kt = !0, Fu(J), Ed(), kt = !1);
  }, Rt = {
    p: k,
    um: Nt,
    m: X,
    r: Ut,
    mt: it,
    mc: tt,
    pc: gt,
    pbc: F,
    n: U,
    o: t
  };
  return {
    render: Mt,
    hydrate: void 0,
    createApp: k0(Mt)
  };
}
function gc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Rr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function j0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function nh(t, e, n = !1) {
  const i = t.children, o = e.children;
  if (Ft(i) && Ft(o))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let h = o[c];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = o[c] = or(o[c]), h.el = u.el), !n && h.patchFlag !== -2 && nh(u, h)), h.type === Ms && (h.patchFlag === -1 && (h = o[c] = or(h)), h.el = u.el), h.type === Mr && !h.el && (h.el = u.el);
    }
}
function B0(t) {
  const e = t.slice(), n = [0];
  let i, o, c, u, h;
  const g = t.length;
  for (i = 0; i < g; i++) {
    const b = t[i];
    if (b !== 0) {
      if (o = n[n.length - 1], t[o] < b) {
        e[i] = o, n.push(i);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        h = c + u >> 1, t[n[h]] < b ? c = h + 1 : u = h;
      b < t[n[c]] && (c > 0 && (e[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = e[u];
  return n;
}
function rh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : rh(e);
}
function qu(t) {
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
const oh = (t) => t.__isSuspense;
function G0(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : Jm(t);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), Ms = /* @__PURE__ */ Symbol.for("v-txt"), Mr = /* @__PURE__ */ Symbol.for("v-cmt"), Ra = /* @__PURE__ */ Symbol.for("v-stc"), ko = [];
let dn = null;
function xe(t = !1) {
  ko.push(dn = t ? null : []);
}
function K0() {
  ko.pop(), dn = ko[ko.length - 1] || null;
}
let Fo = 1;
function Yu(t, e = !1) {
  Fo += t, t < 0 && dn && e && (dn.hasOnce = !0);
}
function ah(t) {
  return t.dynamicChildren = Fo > 0 ? dn || Ci : null, K0(), Fo > 0 && dn && dn.push(t), t;
}
function He(t, e, n, i, o, c) {
  return ah(
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
function Vi(t, e, n, i, o) {
  return ah(
    en(
      t,
      e,
      n,
      i,
      o,
      !0
    )
  );
}
function sh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function co(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ch = ({ key: t }) => t ?? null, Oa = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ee(t) || /* @__PURE__ */ Be(t) || Vt(t) ? { i: Pn, r: t, k: e, f: !!n } : t : null);
function Ie(t, e = null, n = null, i = 0, o = null, c = t === Ue ? 0 : 1, u = !1, h = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ch(e),
    ref: e && Oa(e),
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
    shapeFlag: c,
    patchFlag: i,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pn
  };
  return h ? (yl(g, n), c & 128 && t.normalize(g)) : n && (g.shapeFlag |= Ee(n) ? 8 : 16), Fo > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  dn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && dn.push(g), g;
}
const en = W0;
function W0(t, e = null, n = null, i = 0, o = null, c = !1) {
  if ((!t || t === Ud) && (t = Mr), sh(t)) {
    const h = Fi(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && yl(h, n), Fo > 0 && !c && dn && (h.shapeFlag & 6 ? dn[dn.indexOf(t)] = h : dn.push(h)), h.patchFlag = -2, h;
  }
  if (o1(t) && (t = t.__vccOpts), e) {
    e = q0(e);
    let { class: h, style: g } = e;
    h && !Ee(h) && (e.class = _s(h)), ae(g) && (/* @__PURE__ */ fl(g) && !Ft(g) && (g = Ge({}, g)), e.style = vs(g));
  }
  const u = Ee(t) ? 1 : oh(t) ? 128 : o0(t) ? 64 : ae(t) ? 4 : Vt(t) ? 2 : 0;
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
function q0(t) {
  return t ? /* @__PURE__ */ fl(t) || Xd(t) ? Ge({}, t) : t : null;
}
function Fi(t, e, n = !1, i = !1) {
  const { props: o, ref: c, patchFlag: u, children: h, transition: g } = t, b = e ? uh(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: b,
    key: b && ch(b),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ft(c) ? c.concat(Oa(e)) : [c, Oa(e)] : Oa(e)
    ) : c,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: h,
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
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Fi(t.ssContent),
    ssFallback: t.ssFallback && Fi(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && i && pl(
    p,
    g.clone(p)
  ), p;
}
function Y0(t = " ", e = 0) {
  return en(Ms, null, t, e);
}
function lh(t, e) {
  const n = en(Ra, null, t);
  return n.staticCount = e, n;
}
function Fa(t = "", e = !1) {
  return e ? (xe(), Vi(Mr, null, t)) : en(Mr, null, t);
}
function jn(t) {
  return t == null || typeof t == "boolean" ? en(Mr) : Ft(t) ? en(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : sh(t) ? or(t) : en(Ms, null, String(t));
}
function or(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Fi(t);
}
function yl(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), yl(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !Xd(e) ? e._ctx = Pn : o === 3 && Pn && (Pn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Vt(e) ? (e = { default: e, _ctx: Pn }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Y0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function uh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const o in i)
      if (o === "class")
        e.class !== i.class && (e.class = _s([e.class, i.class]));
      else if (o === "style")
        e.style = vs([e.style, i.style]);
      else if (ps(o)) {
        const c = e[o], u = i[o];
        u && c !== u && !(Ft(c) && c.includes(u)) ? e[o] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gs(o) && (e[o] = u);
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
const X0 = Gd();
let Z0 = 0;
function J0(t, e, n) {
  const i = t.type, o = (e ? e.appContext : t.appContext) || X0, c = {
    uid: Z0++,
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
    scope: new _m(
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
    propsOptions: Jd(i, o),
    emitsOptions: Kd(i, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: de,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = A0.bind(null, c), t.ce && t.ce(c), c;
}
let je = null;
const Q0 = () => je || Pn;
let Ja, Hc;
{
  const t = bs(), e = (n, i) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(i), (c) => {
      o.length > 1 ? o.forEach((u) => u(c)) : o[0](c);
    };
  };
  Ja = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Hc = e(
    "__VUE_SSR_SETTERS__",
    (n) => $o = n
  );
}
const jo = (t) => {
  const e = je;
  return Ja(t), t.scope.on(), () => {
    t.scope.off(), Ja(e);
  };
}, Xu = () => {
  je && je.scope.off(), Ja(null);
};
function fh(t) {
  return t.vnode.shapeFlag & 4;
}
let $o = !1;
function t1(t, e = !1, n = !1) {
  e && Hc(e);
  const { props: i, children: o } = t.vnode, c = fh(t);
  R0(t, i, c, e), H0(t, o, n || e);
  const u = c ? e1(t, e) : void 0;
  return e && Hc(!1), u;
}
function e1(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, _0);
  const { setup: i } = n;
  if (i) {
    sr();
    const o = t.setupContext = i.length > 1 ? r1(t) : null, c = jo(t), u = Uo(
      i,
      t,
      0,
      [
        t.props,
        o
      ]
    ), h = od(u);
    if (cr(), c(), (h || t.sp) && !Mo(t) && Od(t), h) {
      if (u.then(Xu, Xu), e)
        return u.then((g) => {
          Zu(t, g);
        }).catch((g) => {
          xs(g, t, 0);
        });
      t.asyncDep = u;
    } else
      Zu(t, u);
  } else
    dh(t);
}
function Zu(t, e, n) {
  Vt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ae(e) && (t.setupState = kd(e)), dh(t);
}
function dh(t, e, n) {
  const i = t.type;
  t.render || (t.render = i.render || Wn);
  {
    const o = jo(t);
    sr();
    try {
      w0(t);
    } finally {
      cr(), o();
    }
  }
}
const n1 = {
  get(t, e) {
    return ze(t, "get", ""), t[e];
  }
};
function r1(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, n1),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function bl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(kd(zm(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Po)
        return Po[n](t);
    },
    has(e, n) {
      return n in e || n in Po;
    }
  })) : t.proxy;
}
function i1(t, e = !0) {
  return Vt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function o1(t) {
  return Vt(t) && "__vccOpts" in t;
}
const Li = (t, e) => /* @__PURE__ */ Wm(t, e, $o), a1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vc;
const Ju = typeof window < "u" && window.trustedTypes;
if (Ju)
  try {
    Vc = /* @__PURE__ */ Ju.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const hh = Vc ? (t) => Vc.createHTML(t) : (t) => t, s1 = "http://www.w3.org/2000/svg", c1 = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, Qu = ir && /* @__PURE__ */ ir.createElement("template"), l1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const o = e === "svg" ? ir.createElementNS(s1, t) : e === "mathml" ? ir.createElementNS(c1, t) : n ? ir.createElement(t, { is: n }) : ir.createElement(t);
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
      Qu.innerHTML = hh(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const h = Qu.content;
      if (i === "svg" || i === "mathml") {
        const g = h.firstChild;
        for (; g.firstChild; )
          h.appendChild(g.firstChild);
        h.removeChild(g);
      }
      e.insertBefore(h, n);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, u1 = /* @__PURE__ */ Symbol("_vtc");
function f1(t, e, n) {
  const i = t[u1];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const tf = /* @__PURE__ */ Symbol("_vod"), d1 = /* @__PURE__ */ Symbol("_vsh"), h1 = /* @__PURE__ */ Symbol(""), p1 = /(?:^|;)\s*display\s*:/;
function g1(t, e, n) {
  const i = t.style, o = Ee(n);
  let c = !1;
  if (n && !o) {
    if (e)
      if (Ee(e))
        for (const u of e.split(";")) {
          const h = u.slice(0, u.indexOf(":")).trim();
          n[h] == null && $a(i, h, "");
        }
      else
        for (const u in e)
          n[u] == null && $a(i, u, "");
    for (const u in n)
      u === "display" && (c = !0), $a(i, u, n[u]);
  } else if (o) {
    if (e !== n) {
      const u = i[h1];
      u && (n += ";" + u), i.cssText = n, c = p1.test(n);
    }
  } else e && t.removeAttribute("style");
  tf in t && (t[tf] = c ? i.display : "", t[d1] && (i.display = "none"));
}
const ef = /\s*!important$/;
function $a(t, e, n) {
  if (Ft(n))
    n.forEach((i) => $a(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = m1(t, e);
    ef.test(n) ? t.setProperty(
      Zr(i),
      n.replace(ef, ""),
      "important"
    ) : t[i] = n;
  }
}
const nf = ["Webkit", "Moz", "ms"], mc = {};
function m1(t, e) {
  const n = mc[e];
  if (n)
    return n;
  let i = nn(e);
  if (i !== "filter" && i in t)
    return mc[e] = i;
  i = ys(i);
  for (let o = 0; o < nf.length; o++) {
    const c = nf[o] + i;
    if (c in t)
      return mc[e] = c;
  }
  return e;
}
const rf = "http://www.w3.org/1999/xlink";
function of(t, e, n, i, o, c = bm(e)) {
  i && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(rf, e.slice(6, e.length)) : t.setAttributeNS(rf, e, n) : n == null || c && !ld(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : qn(n) ? String(n) : n
  );
}
function af(t, e, n, i, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? hh(n) : n);
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const h = c === "OPTION" ? t.getAttribute("value") || "" : t.value, g = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (h !== g || !("_value" in t)) && (t.value = g), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const h = typeof t[e];
    h === "boolean" ? n = ld(n) : n == null && h === "string" ? (n = "", u = !0) : h === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function y1(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function b1(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const sf = /* @__PURE__ */ Symbol("_vei");
function v1(t, e, n, i, o = null) {
  const c = t[sf] || (t[sf] = {}), u = c[e];
  if (i && u)
    u.value = i;
  else {
    const [h, g] = _1(e);
    if (i) {
      const b = c[e] = S1(
        i,
        o
      );
      y1(t, h, b, g);
    } else u && (b1(t, h, u, g), c[e] = void 0);
  }
}
const cf = /(?:Once|Passive|Capture)$/;
function _1(t) {
  let e;
  if (cf.test(t)) {
    e = {};
    let i;
    for (; i = t.match(cf); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Zr(t.slice(2)), e];
}
let yc = 0;
const w1 = /* @__PURE__ */ Promise.resolve(), x1 = () => yc || (w1.then(() => yc = 0), yc = Date.now());
function S1(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Yn(
      N1(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = x1(), n;
}
function N1(t, e) {
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
const lf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, M1 = (t, e, n, i, o, c) => {
  const u = o === "svg";
  e === "class" ? f1(t, i, u) : e === "style" ? g1(t, n, i) : ps(e) ? gs(e) || v1(t, e, n, i, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : P1(t, e, i, u)) ? (af(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && of(t, e, i, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (k1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ee(i))) ? af(t, nn(e), i, c, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), of(t, e, i, u));
};
function P1(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && lf(e) && Vt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return lf(e) && Ee(n) ? !1 : e in t;
}
function k1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const i = nn(e);
  return Array.isArray(n) ? n.some((o) => nn(o) === i) : Object.keys(n).some((o) => nn(o) === i);
}
const C1 = ["ctrl", "shift", "alt", "meta"], A1 = {
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
  exact: (t, e) => C1.some((n) => t[`${n}Key`] && !e.includes(n))
}, I1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), i = e.join(".");
  return n[i] || (n[i] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const h = A1[e[u]];
      if (h && h(o, e)) return;
    }
    return t(o, ...c);
  }));
}, E1 = /* @__PURE__ */ Ge({ patchProp: M1 }, l1);
let uf;
function T1() {
  return uf || (uf = z0(E1));
}
const L1 = ((...t) => {
  const e = T1().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const o = R1(i);
    if (!o) return;
    const c = e._component;
    !Vt(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, D1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function D1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function R1(t) {
  return Ee(t) ? document.querySelector(t) : t;
}
const Le = Math.PI / 180, ph = Math.PI * 2, O1 = 2048;
function F1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_GL_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoGlDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function $1(t) {
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
function bc(t, e, n, i = {}) {
  F1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...i,
    source: $1(n)
  });
}
function ye(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Pr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Qa(t, e) {
  return Pr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ni(t, e) {
  return Pr(t.x * e, t.y * e, t.z * e);
}
function Ha(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function ff(t, e) {
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
function H1(t, e) {
  const n = Number(t || 0) * Le, i = Number(e || 0) * Le, o = Math.cos(i);
  return Pr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function Va(t, e, n = 0) {
  const i = H1(t, e);
  let o = Pr(0, 1, 0);
  Math.abs(Ha(i, o)) > 0.999 && (o = Pr(0, 0, 1));
  let c = mo(ff(o, i)), u = mo(ff(i, c));
  const h = Number(n || 0) * Le, g = Math.cos(h), b = Math.sin(h), p = Qa(Ni(c, g), Ni(u, b)), w = Qa(Ni(c, -b), Ni(u, g));
  return c = mo(p), u = mo(w), { fwd: i, right: c, up: u };
}
function V1(t, e) {
  const n = (Number(t || 0) - 0.5) * ph, i = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(i);
  return Pr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function df(t, e, n = 1) {
  const i = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, O1), h = Math.min(1, u / Math.max(i, o));
  return {
    sourceWidth: i,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: h,
    width: Math.max(1, Math.round(i * h)),
    height: Math.max(1, Math.round(o * h))
  };
}
function hf(t, e, n) {
  const i = t.createShader(e);
  if (t.shaderSource(i, n), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(i) || "shader compile failed";
    throw t.deleteShader(i), new Error(o);
  }
  return i;
}
function pf(t, e, n) {
  const i = hf(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = hf(t, t.FRAGMENT_SHADER, n);
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
const gf = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, z1 = `#version 300 es
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
}`, U1 = `#version 300 es
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
function pa(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const i = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), o = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(ye(i, 1, 179) * Le * 0.5) * (n / Math.max(e, 1))) / Le);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: ye(i, 1, 179),
    vFovDeg: ye(o, 0.1, 179)
  };
}
function j1(t) {
  const e = Va(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(ye(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * Le),
    tanY: Math.tan(ye(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * Le),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ye(Number(t.opacity ?? 1), 0, 1)
  };
}
function gh(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, o = null, c = null, u = null, h = null, g = null, b = null, p = null, w = null, N = !1, C = df(1, 1, 1), A = null, k = null, H = null, O = null;
  const D = /* @__PURE__ */ new Map();
  let V = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function R(U = null, kt = null) {
    const Mt = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Mt), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, U ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, kt ?? n.CLAMP_TO_EDGE), Mt;
  }
  function M() {
    if (N) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = pf(n, gf, z1), o = pf(n, gf, U1), A = {
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
      }, k = {
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
      ]), n.STATIC_DRAW), u = R(n.REPEAT, n.CLAMP_TO_EDGE), h = R(n.REPEAT, n.CLAMP_TO_EDGE), g = R(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function Q() {
    var U;
    if (n) {
      try {
        c && n.deleteBuffer(c), u && n.deleteTexture(u), h && n.deleteTexture(h), g && n.deleteTexture(g), D.forEach((kt) => {
          it(kt);
        }), i && n.deleteProgram(i), o && n.deleteProgram(o), (U = n.getExtension("WEBGL_lose_context")) == null || U.loseContext();
      } catch {
      }
      n = null, i = null, o = null, c = null, u = null, h = null, g = null, D.clear(), b = null, p = null, w = null, V = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, H = null, O = null, N = !1;
    }
  }
  function at(U, kt, Mt = 1) {
    C = df(U, kt, Mt), (e.width !== C.width || e.height !== C.height) && (e.width = C.width, e.height = C.height);
  }
  function tt(U) {
    U === "background" ? b = null : U === "paint" ? p = null : w = null, V[U] && (V[U].width = 0, V[U].height = 0);
  }
  function bt(U, kt, Mt = [], Rt = { width: 0, height: 0 }, jt = !1) {
    if (!n || !U || !kt) return !1;
    const I = Number(kt.width || kt.videoWidth || kt.naturalWidth || 0), L = Number(kt.height || kt.videoHeight || kt.naturalHeight || 0);
    if (!(I > 1) || !(L > 1)) return !1;
    const z = Array.isArray(Mt) ? Mt.filter((J) => J && J.w > 0 && J.h > 0) : [];
    if (!z.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, U), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, jt ? 1 : 0), Rt.width !== I || Rt.height !== L)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, kt), Rt.width = I, Rt.height = L, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (H || (H = document.createElement("canvas"), O = H.getContext("2d")), !O)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, kt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const J of z) {
      const q = Math.max(0, Math.floor(Number(J.x || 0))), Y = Math.max(0, Math.floor(Number(J.y || 0))), nt = Math.min(I - q, Math.ceil(Number(J.w || 0))), ct = Math.min(L - Y, Math.ceil(Number(J.h || 0)));
      if (!(nt <= 0 || ct <= 0)) {
        if (H.width !== nt || H.height !== ct) {
          if (H.width = nt, H.height = ct, O = H.getContext("2d"), !O)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, kt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          O.clearRect(0, 0, nt, ct);
        O.drawImage(kt, q, Y, nt, ct, 0, 0, nt, ct), n.texSubImage2D(n.TEXTURE_2D, 0, q, Y, n.RGBA, n.UNSIGNED_BYTE, H);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function F(U, kt, Mt, Rt, jt = null, I = !1) {
    if (!M()) return !1;
    if (!Mt)
      return tt(U), !1;
    const L = String(Rt ?? ""), z = U === "background" ? b : U === "paint" ? p : w, J = V[U], q = Number(Mt.width || Mt.videoWidth || Mt.naturalWidth || 0), Y = Number(Mt.height || Mt.videoHeight || Mt.naturalHeight || 0), nt = J.width !== q || J.height !== Y;
    if (z === L && !nt && !(Array.isArray(jt) && jt.length)) return !0;
    if (!(q > 0) || !(Y > 0))
      return bc(U, "skip-invalid-size", Mt, { revision: L, sourceWidth: q, sourceHeight: Y }), tt(U), !1;
    if (n.bindTexture(n.TEXTURE_2D, kt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I ? 1 : 0), !(Array.isArray(jt) && jt.length ? bt(kt, Mt, jt, J, I) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt);
      const dt = n.getError();
      if (dt !== n.NO_ERROR)
        return bc(U, "texImage2D-error", Mt, {
          revision: L,
          sourceWidth: q,
          sourceHeight: Y,
          glError: dt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), tt(U), !1;
      J.width = q, J.height = Y;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), U === "background" ? b = L : U === "paint" ? p = L : w = L, !0;
  }
  function W(U, kt) {
    return F("background", u, U, kt, null, !0);
  }
  function pt(U, kt, Mt = null) {
    return F("paint", h, U, kt, Mt, !0);
  }
  function ft(U, kt, Mt = null) {
    return F("mask", g, U, kt, Mt, !0);
  }
  function it(U) {
    U != null && U.texture && n && n.deleteTexture(U.texture);
  }
  function G(U) {
    if (!n || !(U != null && U.assetId) || !(U != null && U.source)) return null;
    const kt = String(U.assetId), Mt = String(U.revision ?? ""), Rt = U.source, jt = Number(Rt.width || Rt.naturalWidth || Rt.videoWidth || 0), I = Number(Rt.height || Rt.naturalHeight || Rt.videoHeight || 0);
    if (jt <= 0 || I <= 0) return null;
    let L = D.get(kt);
    if (L || (L = {
      texture: R(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(kt, L)), L.revision !== Mt || L.width !== jt || L.height !== I) {
      n.bindTexture(n.TEXTURE_2D, L.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Rt);
      const z = n.getError();
      if (z !== n.NO_ERROR)
        return bc(`sticker:${kt}`, "texImage2D-error", Rt, {
          revision: Mt,
          width: jt,
          height: I,
          glError: z
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), L.revision = Mt, L.width = jt, L.height = I;
    }
    return L.texture;
  }
  function et(U = []) {
    if (!M()) return !1;
    const kt = /* @__PURE__ */ new Set();
    return U.forEach((Mt) => {
      !(Mt != null && Mt.assetId) || !(Mt != null && Mt.source) || (kt.add(String(Mt.assetId)), G(Mt));
    }), D.forEach((Mt, Rt) => {
      kt.has(Rt) || (it(Mt), D.delete(Rt));
    }), !0;
  }
  function rt() {
    return M() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function gt(U) {
    n.useProgram(U), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function St(U, kt = {}) {
    if (!b) return null;
    n.disable(n.BLEND), gt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, u), n.uniform1i(A.background, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(A.paint, 1), n.activeTexture(n.TEXTURE2), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(A.mask, 2), n.uniform2f(A.viewport, Math.max(1, C.width), Math.max(1, C.height)), n.uniform1i(A.mode, (U == null ? void 0 : U.mode) === "unwrap" ? 0 : (U == null ? void 0 : U.mode) === "cutout" ? 2 : 1);
    const Mt = pa(U, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(A.yaw, Number(Mt.yawDeg || 0) * Le), n.uniform1f(A.pitch, Number(Mt.pitchDeg || 0) * Le), n.uniform1f(A.roll, Number(Mt.rollDeg || 0) * Le), n.uniform1f(A.hFov, ye(Number(Mt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(A.vFov, ye(Number(Mt.vFovDeg || 60), 0.1, 179) * Le), n.uniform1f(A.opacity, ye(Number(kt.backgroundOpacity ?? 1), 0, 1)), n.uniform1f(A.paintOpacity, ye(Number(kt.paintOpacity ?? 1), 0, 1)), n.uniform1f(A.maskOpacity, ye(Number(kt.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(A.hasPaint, p != null ? 1 : 0), n.uniform1i(A.hasMask, w != null ? 1 : 0), n.uniform1i(A.showMaskTint, kt.showMaskTint === !1 ? 0 : 1), n.uniform3f(A.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function At(U, kt, Mt) {
    var J;
    if (!((J = U == null ? void 0 : U.stickers) != null && J.length) || !(kt != null && kt.length)) return;
    const Rt = (Mt == null ? void 0 : Mt.mode) === "unwrap" ? 0 : (Mt == null ? void 0 : Mt.mode) === "cutout" ? 2 : 1, jt = pa(Mt, C.width, C.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, I = Va(jt.yawDeg, jt.pitchDeg, jt.rollDeg), L = /* @__PURE__ */ new Map();
    kt.forEach((q) => {
      const Y = G(q);
      Y && L.set(String(q.assetId || ""), Y);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(o), n.uniform1i(k.texture, 0), n.uniform1i(k.mode, Rt), n.uniform3f(k.viewRight, I.right.x, I.right.y, I.right.z), n.uniform3f(k.viewUp, I.up.x, I.up.y, I.up.z), n.uniform3f(k.viewFwd, I.fwd.x, I.fwd.y, I.fwd.z), n.uniform1f(k.viewHfov, ye(Number(jt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(k.viewVfov, ye(Number(jt.vFovDeg || 60), 0.1, 179) * Le), [...U.stickers].sort((q, Y) => Number((q == null ? void 0 : q.zIndex) || 0) - Number((Y == null ? void 0 : Y.zIndex) || 0)).forEach((q) => {
      const Y = L.get(String((q == null ? void 0 : q.assetId) || ""));
      if (!Y) return;
      const nt = j1(q), ct = nt.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Y), n.uniform3f(k.stickerRight, nt.right.x, nt.right.y, nt.right.z), n.uniform3f(k.stickerUp, nt.up.x, nt.up.y, nt.up.z), n.uniform3f(k.stickerFwd, nt.fwd.x, nt.fwd.y, nt.fwd.z), n.uniform1f(k.stickerTanX, Math.max(1e-6, nt.tanX)), n.uniform1f(k.stickerTanY, Math.max(1e-6, nt.tanY)), n.uniform4f(
        k.crop,
        ye(Number(ct.x0 ?? 0), 0, 1),
        ye(Number(ct.y0 ?? 0), 0, 1),
        ye(Number(ct.x1 ?? 1), 0, 1),
        ye(Number(ct.y1 ?? 1), 0, 1)
      ), n.uniform1f(k.opacity, nt.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function X(U) {
    return !rt() || !b ? null : (St({
      mode: "panorama",
      yawDeg: (U == null ? void 0 : U.yawDeg) || 0,
      pitchDeg: (U == null ? void 0 : U.pitchDeg) || 0,
      fovDeg: (U == null ? void 0 : U.fovDeg) || 100
    }, U), e);
  }
  function Nt(U) {
    return !rt() || !b ? null : (St({ mode: "unwrap" }, U), e);
  }
  function Ut(U) {
    return !rt() || !b ? null : (St({
      mode: "cutout",
      yawDeg: (U == null ? void 0 : U.yawDeg) || 0,
      pitchDeg: (U == null ? void 0 : U.pitchDeg) || 0,
      rollDeg: (U == null ? void 0 : U.rollDeg) || 0,
      hFovDeg: (U == null ? void 0 : U.hFovDeg) || 90,
      vFovDeg: (U == null ? void 0 : U.vFovDeg) || 60
    }, U), e);
  }
  function he(U = {}) {
    return !M() || (at(U.width, U.height, U.dpr || 1), !rt()) ? null : (U.backgroundSource && (W(U.backgroundSource, U.backgroundRevision ?? ""), St(U.view, U)), et(U.textures || []), At(
      U.scene || { stickers: [] },
      U.textures || [],
      U.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e);
  }
  function pe(U, kt, Mt) {
    const Rt = Math.max(1, Number((U == null ? void 0 : U.viewportWidth) || C.sourceWidth || C.width || 1)), jt = Math.max(1, Number((U == null ? void 0 : U.viewportHeight) || C.sourceHeight || C.height || 1)), I = Number(kt), L = Number(Mt);
    if (!Number.isFinite(I) || !Number.isFinite(L)) return null;
    if ((U == null ? void 0 : U.mode) === "unwrap")
      return { u: (I / Rt % 1 + 1) % 1, v: ye(L / jt, 0, 1) };
    const z = pa(U, Rt, jt);
    if (!z) return null;
    const J = Va(z.yawDeg, z.pitchDeg, z.rollDeg), q = (I - Rt * 0.5) / (Rt * 0.5) * Math.tan(ye(z.hFovDeg, 1, 179) * Le * 0.5), Y = (jt * 0.5 - L) / (jt * 0.5) * Math.tan(ye(z.vFovDeg, 0.1, 179) * Le * 0.5), nt = mo(Qa(Qa(Ni(J.right, q), Ni(J.up, Y)), J.fwd));
    return {
      u: (Math.atan2(nt.x, nt.z) / ph + 0.5 + 1) % 1,
      v: ye(0.5 - Math.asin(ye(nt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function Se(U, kt, Mt) {
    const Rt = Math.max(1, Number((U == null ? void 0 : U.viewportWidth) || C.sourceWidth || C.width || 1)), jt = Math.max(1, Number((U == null ? void 0 : U.viewportHeight) || C.sourceHeight || C.height || 1));
    if ((U == null ? void 0 : U.mode) === "unwrap")
      return {
        x: (Number(kt || 0) % 1 + 1) % 1 * Rt,
        y: ye(Number(Mt || 0), 0, 1) * jt,
        visible: !0
      };
    const I = pa(U, Rt, jt);
    if (!I)
      return { x: Rt * 0.5, y: jt * 0.5, visible: !1 };
    const L = Va(I.yawDeg, I.pitchDeg, I.rollDeg), z = V1(kt, Mt), J = Ha(z, L.right), q = Ha(z, L.up), Y = Ha(z, L.fwd);
    if (Y <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const nt = Rt * 0.5 + J / Y * (Rt * 0.5 / Math.tan(ye(I.hFovDeg, 1, 179) * Le * 0.5)), ct = jt * 0.5 - q / Y * (jt * 0.5 / Math.tan(ye(I.vFovDeg, 0.1, 179) * Le * 0.5));
    return { x: nt, y: ct, visible: nt >= 0 && nt <= Rt && ct >= 0 && ct <= jt };
  }
  return {
    init: M,
    dispose: Q,
    setViewport: at,
    setBackgroundErp: W,
    setPaintErp: pt,
    setMaskErp: ft,
    renderPanorama: X,
    renderUnwrap: Nt,
    renderCutout: Ut,
    renderScene: he,
    screenToErpUv: pe,
    erpUvToScreen: Se,
    getCanvas() {
      return e;
    },
    isSupported() {
      return M();
    },
    getViewport() {
      return { ...C };
    }
  };
}
const mf = "__shared_renderer";
function B1(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function G1(t, e) {
  var c;
  const n = B1(t);
  if (!n) return null;
  let i = n.get(mf);
  if (!i) {
    const u = gh();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    i = { renderer: u }, n.set(mf, i);
  }
  let o = n.get(e);
  return o || (o = { renderer: i.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function K1(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function W1(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function q1(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function zi(t = {}) {
  const e = t.owner || null, n = t.ctx || null, i = q1(t);
  if (!e || !n || !(i != null && i.w) || !(i != null && i.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = G1(e, o), u = t.backgroundSource || t.img || null, h = t.scene || { stickers: [], selectedId: null, hoveredId: null }, g = Array.isArray(t.textures) ? t.textures : [], b = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const p = c.renderer, w = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), N = t.backgroundRevision != null, C = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, A = N ? String(t.backgroundRevision) : C ? "" : K1(u), k = Number(t.backgroundOpacity ?? 1), O = h.stickers.length === 0 && g.length === 0 && (!!N || !C), D = `${Math.round(i.w)}x${Math.round(i.h)}|${w}|${W1(b)}|${A}|${k.toFixed(3)}`;
  if (O && c.lastRenderKey === D && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, i.x, i.y, i.w, i.h), !0;
  const V = p.renderScene({
    width: i.w,
    height: i.h,
    dpr: w,
    backgroundSource: u,
    backgroundRevision: A,
    textures: g,
    scene: h,
    view: b,
    backgroundOpacity: k
  });
  if (!V) return !1;
  if (O) {
    const R = V.width, M = V.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== R || c.cachedCanvas.height !== M) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = R, c.cachedCanvas.height = M);
    const Q = c.cachedCanvas.getContext("2d");
    Q ? (Q.clearRect(0, 0, R, M), Q.drawImage(V, 0, 0), c.lastRenderKey = D) : c.lastRenderKey = null;
  } else
    c.lastRenderKey = null;
  return n.drawImage(V, i.x, i.y, i.w, i.h), !0;
}
function Y1(t = {}) {
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
  }, zi({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function ga(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return zi({
    ...t,
    cacheKey: t.cacheKey || "cutout_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function wi(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function mh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function X1(t, e) {
  mh() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function yf(t, e = 8) {
  var p;
  const n = (p = t == null ? void 0 : t.getContext) == null ? void 0 : p.call(t, "2d"), i = Number((t == null ? void 0 : t.width) || 0), o = Number((t == null ? void 0 : t.height) || 0);
  if (!n || i < 1 || o < 1) return null;
  const c = n.getImageData(0, 0, i, o).data;
  let u = i, h = o, g = -1, b = -1;
  for (let w = 0; w < o; w += 1)
    for (let N = 0; N < i; N += 1)
      c[(w * i + N) * 4 + 3] <= e || (N < u && (u = N), w < h && (h = w), N > g && (g = N), w > b && (b = w));
  return g < u || b < h ? null : {
    minX: u,
    minY: h,
    maxX: g,
    maxY: b,
    width: g - u + 1,
    height: b - h + 1,
    aspect: Number(((g - u + 1) / Math.max(1, b - h + 1)).toFixed(4))
  };
}
function vl(t, e) {
  const n = Math.max(1, Math.ceil(t)), i = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const o = document.createElement("canvas");
  return o.width = n, o.height = i, o;
}
function zn(t, e, n) {
  if (!t) return wi(e, n);
  const i = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== i || t.canvas.height !== o) && (t.canvas.width = i, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function me(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let vc = null, _c = null, bf = null, vf = null, ie = null, lo = null, Xe = null, _r = null;
function Z1() {
  if (_c) return _c;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, e, e), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = t, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(e, e), i.moveTo(-e / 2, e / 2), i.lineTo(e / 2, e + e / 2), i.moveTo(e / 2, -e / 2), i.lineTo(e + e / 2, e / 2), i.stroke(), _c = n, n;
}
function gi(t, e) {
  if (!t || !e) return;
  const n = e.width, i = e.height;
  vc = zn(vc, n, i);
  const o = vc;
  me(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", vf !== o.ctx && (bf = o.ctx.createPattern(Z1(), "repeat"), vf = o.ctx), o.ctx.fillStyle = bf, o.ctx.fillRect(0, 0, n, i), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function J1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function Q1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function ty(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), i = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function ey(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const i = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * e * 2);
}
const we = /* @__PURE__ */ new Map(), _l = 128;
function ny(t, e, n, i, o, c) {
  const u = Math.max(1, Math.round(t)), h = Math.max(0, Math.min(1, e)), g = `${u}:${h.toFixed(2)}:${n}:${i}:${o}:${c.toFixed(3)}`;
  if (we.has(g)) {
    const D = we.get(g);
    return we.delete(g), we.set(g, D), D;
  }
  we.size >= _l && we.delete(we.keys().next().value);
  const b = u * 2 + 2, p = u + 1, w = vl(b, b), N = w.getContext("2d"), C = h * u, A = u + 1, k = `rgba(${n},${i},${o},${c})`, H = `rgba(${n},${i},${o},0)`, O = N.createRadialGradient(p, p, C, p, p, A);
  return O.addColorStop(0, k), O.addColorStop(1, H), N.fillStyle = O, N.fillRect(0, 0, b, b), we.set(g, w), w;
}
function ry(t, e, n, i, o, c, u) {
  const { r: h, g, b, a: p } = i, w = Math.max(2, Math.ceil(t) * 2), N = Math.max(2, Math.ceil(e) * 2), C = Math.max(0, o), A = Math.max(0, Math.min(0.99, c)), k = Math.max(0, Math.min(1, u ?? 0)), H = `chisel:${w}:${N}:${n.toFixed(2)}:${h}:${g}:${b}:${p.toFixed(3)}:${C.toFixed(2)}:${A.toFixed(2)}:${k.toFixed(2)}`;
  if (we.has(H)) {
    const tt = we.get(H);
    return we.delete(H), we.set(H, tt), tt;
  }
  we.size >= _l && we.delete(we.keys().next().value);
  const O = vl(w, N), D = O.getContext("2d"), V = D.createImageData(w, N), R = V.data, M = Math.max(0, t - e), Q = Math.max(0, Math.min(1, n)), at = 1 + C;
  for (let tt = 0; tt < N; tt++)
    for (let bt = 0; bt < w; bt++) {
      const F = bt + 0.5 - t, W = tt + 0.5 - e, pt = Math.max(Math.abs(F) - M, 0), it = Math.hypot(pt, W) / e;
      if (it >= 1) continue;
      const G = it <= Q ? 1 : Math.max(0, (1 - it) / Math.max(1e-4, 1 - Q)), et = 1 - it, rt = 1 + C * (1 - et) * (1 - et), gt = 1 - A * et * et, St = rt * gt / at;
      let At = 1;
      if (k > 0) {
        const Ut = Math.floor((W + e) / 1.5), he = Math.floor((F + t) / 8), pe = Br(Di(Ut * 41 + 500, he * 19 + 300));
        At = 1 - k * 0.42 * pe;
      }
      const X = Math.round(255 * Math.min(1, p * G * St * At));
      if (X <= 0) continue;
      const Nt = (tt * w + bt) * 4;
      R[Nt] = h, R[Nt + 1] = g, R[Nt + 2] = b, R[Nt + 3] = X;
    }
  return D.putImageData(V, 0, 0), we.set(H, O), O;
}
function Di(t, e) {
  const n = Math.trunc(Math.round(t * 4)), i = Math.trunc(Math.round(e * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ i & 255, 16777619), o = Math.imul(o ^ i >> 8 & 255, 16777619), o >>> 0;
}
function Br(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function iy(t, e, n, i, o, c, u) {
  const h = t + 0.5 - n, g = e + 0.5 - i, b = Math.max(0, n - i), p = Math.max(Math.abs(h) - b, 0), w = Math.hypot(p, g) / i;
  if (w >= 1) return 0;
  const N = Br(Di(t * 17 + 3, e * 13 + 7)), C = w + c * 0.22 * (N - 0.5);
  if (C >= 1) return 0;
  const A = C <= o ? 1 : Math.max(0, (1 - C) / Math.max(1e-4, 1 - o)), k = oy(t, e, h, g, n, i), H = c * 0.55;
  if (k < H) return 0;
  const D = 0.45 + 0.55 * ((k - H) / Math.max(1e-4, 1 - H));
  return Math.round(255 * Math.min(1, u * A * D));
}
function oy(t, e, n, i, o, c) {
  const u = Math.floor((n + o) / 3), h = Math.floor((i + c) / 2), g = Br(Di(u * 13 + 700, h * 17 + 400)), b = Math.floor((n + o) / 1.5), p = Math.floor((i + c) / 1.5), w = Br(Di(b * 23 + 800, p * 29 + 500)), N = Br(Di(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + w * 0.3 + N * 0.15;
}
function ay(t, e, n, i, o) {
  const { r: c, g: u, b: h, a: g } = i, b = Math.max(2, Math.ceil(t) * 2), p = Math.max(2, Math.ceil(e) * 2), w = Math.max(0, Math.min(1, o)), N = `crayon:${b}:${p}:${n.toFixed(2)}:${c}:${u}:${h}:${g.toFixed(3)}:${w.toFixed(2)}`;
  if (we.has(N)) {
    const D = we.get(N);
    return we.delete(N), we.set(N, D), D;
  }
  we.size >= _l && we.delete(we.keys().next().value);
  const C = vl(b, p), A = C.getContext("2d"), k = A.createImageData(b, p), H = k.data, O = Math.max(0, Math.min(1, n));
  for (let D = 0; D < p; D++)
    for (let V = 0; V < b; V++) {
      const R = iy(V, D, t, e, O, w, g);
      if (R <= 0) continue;
      const M = (D * b + V) * 4;
      H[M] = c, H[M + 1] = u, H[M + 2] = h, H[M + 3] = R;
    }
  return A.putImageData(k, 0, 0), we.set(N, C), C;
}
function yh(t, e, n) {
  var k, H;
  const i = String((e == null ? void 0 : e.stampKind) || "round"), o = ty(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = sy(e), h = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), b = ey(e, o), p = String(((H = e == null ? void 0 : e.targetSpace) == null ? void 0 : H.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && p !== "unwrap", N = e == null ? void 0 : e.scatter, C = N ? { radius: Number(N.radius ?? 1.5), count: Math.max(1, Math.round(N.count ?? 6)) } : null;
  let A;
  if (i === "chisel") {
    const O = o * h, D = o, V = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), M = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    A = ry(O, D, c, u, V, R, M);
  } else if (i === "crayon") {
    const O = o * h, D = o, V = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    A = ay(O, D, c, u, V);
  } else
    A = ny(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: A, radiusPx: o, spacingPx: b, desc: n, aspect: h, angle: g, stampKind: i, scatter: C, latitudeCorrection: w };
}
function sy(t) {
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
function cy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const i = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${o})`;
}
function _f(t, e, n, i, o) {
  const c = t.angle, u = t.desc.width;
  function h(b, p) {
    c === 0 ? t.ctx.drawImage(t.stampTex, b - o, p - i, o * 2, i * 2) : (t.ctx.save(), t.ctx.translate(b, p), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -i, o * 2, i * 2), t.ctx.restore());
  }
  h(e, n);
  const g = c === 0 ? o : o * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  e - g < 0 && h(e + u, n), e + g > u && h(e - u, n);
}
function wl(t, e, n, i) {
  const o = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (t.scatter) {
    const { radius: b, count: p } = t.scatter, w = b * t.radiusPx * o, N = Di(e, n);
    for (let C = 0; C < p; C++) {
      const A = Br(N + C * 2) * Math.PI * 2, k = Math.sqrt(Br(N + C * 2 + 1)) * w, H = e + Math.cos(A) * k, O = n + Math.sin(A) * k, D = Math.max(0.5, t.radiusPx * o * 0.48), V = (0.5 - O / Math.max(1, t.desc.height)) * Math.PI, R = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, M = D * t.aspect * R;
      _f(t, H, O, D, M);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, h = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = c * t.aspect * h;
  _f(t, e, n, c, g);
}
function wf(t, e, n) {
  const i = Q1(e);
  if (!t || i.length === 0) return;
  const o = n.width, c = n.height, u = yh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const h = [];
  for (let N = 0; N < i.length; N++) {
    let C = Number(i[N].u || 0) * o;
    const A = Number(i[N].v || 0) * c;
    N > 0 && Math.abs(C - h[N - 1].x) > o * 0.5 && (C += C < h[N - 1].x ? o : -o), h.push({ x: C, y: A });
  }
  if (wl(u, h[0].x, h[0].y, 1), h.length === 1) {
    t.restore();
    return;
  }
  let g = h[0], b = h[0], p = h[0], w = 0;
  for (let N = 1; N < h.length; N++) {
    const C = h[N], A = { x: (b.x + C.x) * 0.5, y: (b.y + C.y) * 0.5 };
    N === 1 ? w = Ho(u, p.x, p.y, A.x, A.y, w) : w = ts(u, g, p, A, C, w), g = b, b = C, p = A;
  }
  h.length === 2 ? Ho(u, p.x, p.y, b.x, b.y, w) : ts(u, g, p, b, b, w), t.restore();
}
function za(t, e, n) {
  var w;
  const i = Array.isArray((w = e == null ? void 0 : e.geometry) == null ? void 0 : w.points) ? e.geometry.points : [];
  if (!t || i.length < 3) return;
  const o = n.width, c = n.height, u = cy(e), h = [];
  let g = 1 / 0, b = -1 / 0;
  for (let N = 0; N < i.length; N++) {
    const C = J1(i[N]);
    let A = Number(C.x || 0) * o;
    N > 0 && Math.abs(A - h[N - 1].x) > o * 0.5 && (A += A < h[N - 1].x ? o : -o), h.push({ x: A, y: Number(C.y || 0) * c }), A < g && (g = A), A > b && (b = A);
  }
  function p(N) {
    t.beginPath(), t.moveTo(h[0].x + N, h[0].y);
    for (let C = 1; C < h.length; C++) t.lineTo(h[C].x + N, h[C].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, p(0), g < 0 && p(o), b > o && p(-o), t.restore();
}
function ma(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    za(t, e, n);
    return;
  }
  const c = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  c >= 0.999 ? wf(t, e, n) : (lo = zn(lo, n.width, n.height), me(lo), wf(lo.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(lo.canvas, 0, 0), t.restore());
}
function wr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Ho(t, e, n, i, o, c) {
  const u = i - e, h = o - n, g = Math.hypot(u, h);
  if (g < 1e-9) return c;
  let b = t.spacingPx - c;
  for (; b <= g; ) {
    const p = b / g;
    wl(t, e + u * p, n + h * p, 1), b += t.spacingPx;
  }
  return g - b + t.spacingPx;
}
function ts(t, e, n, i, o, c) {
  const h = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - i.x, o.y - i.y)) + 1e-4, p = 0, w = h, N = w + g, C = N + b, A = N - w, k = 16;
  let H = c, O = n.x, D = n.y;
  for (let V = 1; V <= k; V++) {
    const R = w + A * V / k, M = ((w - R) * e.x + (R - p) * n.x) / (w - p), Q = ((w - R) * e.y + (R - p) * n.y) / (w - p), at = ((N - R) * n.x + (R - w) * i.x) / (N - w), tt = ((N - R) * n.y + (R - w) * i.y) / (N - w), bt = ((C - R) * i.x + (R - N) * o.x) / (C - N), F = ((C - R) * i.y + (R - N) * o.y) / (C - N), W = ((N - R) * M + (R - p) * at) / (N - p), pt = ((N - R) * Q + (R - p) * tt) / (N - p), ft = ((C - R) * at + (R - w) * bt) / (C - w), it = ((C - R) * tt + (R - w) * F) / (C - w), G = ((N - R) * W + (R - w) * ft) / (N - w), et = ((N - R) * pt + (R - w) * it) / (N - w);
    H = Ho(t, O, D, G, et, H), O = G, D = et;
  }
  return H;
}
function ly(t, e, n, i) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, h = n * c.height, g = t.activeStroke;
  let b = e * u;
  if (g && Math.abs(b - g.prev.x) > u * 0.5 && (b += b < g.prev.x ? u : -u), !g) {
    const C = yh(o, i, c), A = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), k = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), H = String((i == null ? void 0 : i.toolKind) || "") === "eraser", O = String((i == null ? void 0 : i.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", wl(C, b, h, 1), t.activeStroke = {
      pprev: { x: b, y: h },
      prev: { x: b, y: h },
      lastMidX: b,
      lastMidY: h,
      stampTex: C.stampTex,
      radiusPx: C.radiusPx,
      spacingPx: C.spacingPx,
      aspect: C.aspect,
      angle: C.angle,
      stampKind: C.stampKind,
      scatter: C.scatter,
      latitudeCorrection: C.latitudeCorrection,
      strokeOpacity: A,
      velocityWidthFactor: k,
      distSinceStamp: 0,
      isEraser: H,
      layerKind: O,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const p = (g.prev.x + b) * 0.5, w = (g.prev.y + h) * 0.5;
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
  g.pointCount === 1 ? g.distSinceStamp = Ho(N, g.lastMidX, g.lastMidY, p, w, g.distSinceStamp) : g.distSinceStamp = ts(
    N,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: p, y: w },
    { x: b, y: h },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: b, y: h }, g.lastMidX = p, g.lastMidY = w, g.pointCount++, t.displayDirty = !0;
}
function zc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), i = { kind: "ERP_GLOBAL", width: e, height: n }, o = /* @__PURE__ */ new Map(), c = wi(e, n), u = {
    descriptor: i,
    committedMask: wi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: wi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = wi(e, n);
  let b = null, p = "", w = null;
  function N(F) {
    return {
      actionGroupId: F,
      descriptor: i,
      committedPaint: wi(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function C(F) {
    let W = o.get(F);
    return W || (W = N(F), o.set(F, W)), W;
  }
  function A(F) {
    return p === "mask" ? u : b ? C(b) : h;
  }
  function k(F) {
    var gt;
    const W = !w || w.length !== F.length || F.some((St, At) => St !== w[At]);
    let pt = u.displayDirty || h.displayDirty || W;
    for (const St of F) {
      const At = o.get(St);
      if (At != null && At.displayDirty) {
        pt = !0;
        break;
      }
    }
    if (!pt) return;
    u.displayDirty = !1, h.displayDirty = !1;
    for (const St of F) {
      const At = o.get(St);
      At && (At.displayDirty = !1);
    }
    w = [...F];
    const ft = g.ctx;
    me(g);
    const it = p === "paint" && ((gt = b ? o.get(b) : h) == null ? void 0 : gt.activeStroke) || null, G = !!(it != null && it.isEraser);
    for (const St of F) {
      const At = o.get(St);
      if (!At) continue;
      const Nt = b === At.actionGroupId && p === "paint" ? At.activeStroke : null;
      if (G)
        ie = zn(ie, e, n), me(ie), ie.ctx.drawImage(At.committedPaint.canvas, 0, 0), wr(ie.ctx, c.canvas), ft.drawImage(ie.canvas, 0, 0);
      else if (ft.drawImage(At.committedPaint.canvas, 0, 0), Nt) {
        const Ut = At.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Nt.strokeOpacity ?? 1));
        ft.save(), ft.globalAlpha = Ut, ft.drawImage(c.canvas, 0, 0), ft.restore();
      }
    }
    const et = p === "mask", rt = u.activeStroke;
    et && (rt != null && rt.isEraser) ? (ie = zn(ie, e, n), me(ie), ie.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(ie.ctx, c.canvas), gi(ft, ie.canvas)) : (gi(ft, u.committedMask.canvas), et && rt && gi(ft, c.canvas));
  }
  function H(F) {
    var pt, ft, it, G, et;
    for (const rt of o.values())
      me(rt.committedPaint), me(rt.currentStroke), rt.activeStroke = null, rt.displayDirty = !0;
    me(u.committedMask), me(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, h.displayDirty = !0, w = null;
    const W = [
      ...Array.isArray((ft = (pt = F == null ? void 0 : F.painting) == null ? void 0 : pt.paint) == null ? void 0 : ft.strokes) ? F.painting.paint.strokes : [],
      ...Array.isArray((G = (it = F == null ? void 0 : F.painting) == null ? void 0 : it.mask) == null ? void 0 : G.strokes) ? F.painting.mask.strokes : []
    ];
    for (const rt of W) {
      if (((et = rt == null ? void 0 : rt.targetSpace) == null ? void 0 : et.kind) !== "ERP_GLOBAL") continue;
      const gt = String((rt == null ? void 0 : rt.layerKind) || "paint"), At = String((rt == null ? void 0 : rt.toolKind) || "pen") === "eraser";
      if (gt === "mask") {
        const X = u.descriptor;
        At ? (ie = zn(ie, X.width, X.height), me(ie), ma(ie.ctx, rt, X), wr(u.committedMask.ctx, ie.canvas)) : ma(u.committedMask.ctx, rt, X);
        continue;
      }
      if (At) {
        ie = zn(ie, i.width, i.height), me(ie), ma(ie.ctx, rt, i);
        for (const X of o.values())
          wr(X.committedPaint.ctx, ie.canvas), X.displayDirty = !0;
      } else {
        const X = String((rt == null ? void 0 : rt.actionGroupId) || "__default__"), Nt = C(X), Ut = Nt.descriptor;
        ma(Nt.committedPaint.ctx, rt, Ut), Nt.displayDirty = !0;
      }
    }
    k([...o.keys()]);
  }
  function O(F, W) {
    p = String((F == null ? void 0 : F.layerKind) || "");
    const pt = String((F == null ? void 0 : F.toolKind) || "") === "eraser";
    if (p === "mask")
      b = null, me(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ft = pt ? h : C(String((F == null ? void 0 : F.actionGroupId) || "__default__"));
      b = pt ? "" : String((F == null ? void 0 : F.actionGroupId) || "__default__"), me(ft.currentStroke), ft.activeStroke = null, ft.displayDirty = !0;
    }
  }
  function D(F, W) {
    var gt;
    const pt = String((F == null ? void 0 : F.layerKind) || "paint"), ft = String((F == null ? void 0 : F.toolKind) || "") === "eraser", it = pt === "mask" ? u : ft ? h : C(String((F == null ? void 0 : F.actionGroupId) || b || "__default__")), G = it.activeStroke, et = it.descriptor;
    if (G && G.pointCount > 1) {
      const St = it.currentStroke.ctx;
      St.globalCompositeOperation = "source-over";
      const At = {
        ctx: St,
        stampTex: G.stampTex,
        radiusPx: G.radiusPx,
        spacingPx: G.spacingPx,
        desc: et,
        aspect: G.aspect,
        angle: G.angle,
        stampKind: G.stampKind,
        scatter: G.scatter,
        latitudeCorrection: G.latitudeCorrection
      };
      G.pointCount === 2 ? Ho(At, G.lastMidX, G.lastMidY, G.prev.x, G.prev.y, G.distSinceStamp) : ts(At, G.pprev, { x: G.lastMidX, y: G.lastMidY }, G.prev, G.prev, G.distSinceStamp);
    }
    it.lassoPreviewActive && (me(it.currentStroke), za(it.currentStroke.ctx, F, et), it.lassoPreviewActive = !1);
    const rt = pt === "mask" ? u.committedMask : it.committedPaint;
    if (ft && pt === "paint")
      for (const St of o.values())
        wr(St.committedPaint.ctx, it.currentStroke.canvas), St.displayDirty = !0;
    else if (ft)
      wr(rt.ctx, it.currentStroke.canvas);
    else {
      const St = Math.max(0, Math.min(1, (G == null ? void 0 : G.strokeOpacity) ?? 1));
      rt.ctx.save(), rt.ctx.globalAlpha = St, rt.ctx.drawImage(it.currentStroke.canvas, 0, 0), rt.ctx.restore();
    }
    mh() && X1("commit-bounds", {
      layerKind: pt,
      toolKind: String((F == null ? void 0 : F.toolKind) || ""),
      targetKind: String((et == null ? void 0 : et.kind) || ""),
      targetWidth: Number((et == null ? void 0 : et.width) || 0),
      targetHeight: Number((et == null ? void 0 : et.height) || 0),
      targetViewMode: String(((gt = F == null ? void 0 : F.targetSpace) == null ? void 0 : gt.viewMode) || ""),
      strokeAspect: Number((F == null ? void 0 : F.aspect) ?? 1),
      activeBounds: yf(it.currentStroke.canvas),
      surfaceBounds: yf(rt.canvas)
    }), me(it.currentStroke), it.activeStroke = null, it.displayDirty = !0, b = null, p = "", k([...o.keys()]);
  }
  function V(F) {
    if (p === "mask")
      me(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (p === "paint" && !b)
      me(h.currentStroke), h.activeStroke = null, h.lassoPreviewActive = !1, h.displayDirty = !0;
    else if (b) {
      const W = o.get(b);
      W && (me(W.currentStroke), W.activeStroke = null, W.lassoPreviewActive = !1, W.displayDirty = !0);
    }
    b = null, p = "", k([...o.keys()]);
  }
  function R(F, W) {
    var ft;
    if (p = String((F == null ? void 0 : F.layerKind) || ""), String(((ft = F == null ? void 0 : F.geometry) == null ? void 0 : ft.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        me(u.currentStroke), za(u.currentStroke.ctx, F, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const it = String((F == null ? void 0 : F.toolKind) || "") === "eraser", G = it ? h : C(String((F == null ? void 0 : F.actionGroupId) || b || "__default__"));
        b = it ? "" : String((F == null ? void 0 : F.actionGroupId) || b || "__default__"), me(G.currentStroke), za(G.currentStroke.ctx, F, G.descriptor), G.lassoPreviewActive = !0, G.displayDirty = !0;
      }
      k([...o.keys()]);
    }
  }
  function M(F) {
    return k(F ?? [...o.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function Q(F) {
    return o.get(String(F)) ?? null;
  }
  function at() {
    return [...o.keys()];
  }
  function tt(F) {
    var et;
    const W = o.get(String(F));
    if (!W) return null;
    const pt = p === "paint" && b === W.actionGroupId, ft = p === "paint" && ((et = b ? o.get(b) : h) == null ? void 0 : et.activeStroke) || null;
    if (ft != null && ft.isEraser)
      return Xe = zn(Xe, e, n), me(Xe), Xe.ctx.drawImage(W.committedPaint.canvas, 0, 0), wr(Xe.ctx, c.canvas), Xe.canvas;
    const it = pt ? W.activeStroke : null;
    if (!it) return W.committedPaint.canvas;
    Xe = zn(Xe, e, n), me(Xe), Xe.ctx.drawImage(W.committedPaint.canvas, 0, 0);
    const G = W.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, it.strokeOpacity ?? 1));
    return Xe.ctx.save(), Xe.ctx.globalAlpha = G, Xe.ctx.drawImage(c.canvas, 0, 0), Xe.ctx.restore(), Xe.canvas;
  }
  function bt() {
    return _r = zn(_r, e, n), me(_r), gi(_r.ctx, u.committedMask.canvas), p === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (ie = zn(ie, e, n), me(ie), ie.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(ie.ctx, c.canvas), me(_r), gi(_r.ctx, ie.canvas)) : gi(_r.ctx, c.canvas)), _r.canvas;
  }
  return {
    rebuildCommitted: H,
    beginStroke: O,
    appendStrokePoint: ly,
    updateActiveStroke: R,
    commitActiveStroke: D,
    cancelActiveStroke: V,
    getErpTarget: M,
    ensureTarget: A,
    getGroupTarget: Q,
    getGroupDisplayCanvas: tt,
    getMaskDisplayCanvas: bt,
    getAllGroupIds: at
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ua(t, e, n) {
  const i = Number(t);
  return Number.isFinite(i) ? Math.max(Number(e), Math.min(Number(n), i)) : Number(e);
}
function $e(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function uy(t, e) {
  let n = $e(e) - $e(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const xf = Math.PI / 180, Sf = 0.12, fy = 3, dy = 35, hy = 140, yo = 100, py = 20, Nf = 0.8;
function gy(t, e, n) {
  const i = Math.max(1, Number(e || 1)), o = Math.max(1, Number(n || 1)), c = j(Number(t || yo), 1, 179) * xf;
  return 2 * Math.atan(Math.tan(c * 0.5) * (o / i)) / xf;
}
function my(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Ps(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: yo })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), i = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), o = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), h = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(O, D = null) {
    h && h(O, D);
  }
  function p(O, D, V = null, R = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(O || 0), g.drag.lastY = Number(D || 0), g.drag.lastTs = Number(R || performance.now()), g.drag.pointerId = V, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], b("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: V }), !0;
  }
  function w(O, D, V = "pano", R = performance.now()) {
    if (!g.drag.active) return !1;
    const M = Number(R || performance.now()), Q = Number(O), at = Number(D), tt = Q - g.drag.lastX, bt = at - g.drag.lastY;
    g.drag.lastX = Q, g.drag.lastY = at, g.drag.lastTs = M;
    const F = i() || { x: 1, y: 1 }, W = Number(F.x || 1), pt = Number(F.y || 1), ft = { ...e() };
    let it = 0, G = 0;
    if (V === "unwrap") {
      const rt = o() || { w: 1, h: 1 }, gt = Math.max(1, Number(rt.w || 1)), St = Math.max(1, Number(rt.h || 1)), At = tt / gt, X = bt / St;
      it = -At * 360 * W, G = X * 180 * pt;
    } else {
      const rt = c() || { w: 0, h: 0 }, gt = Math.max(1, Number(rt.w || 0)), St = Math.max(1, Number(rt.h || 0));
      if (gt > 1 && St > 1) {
        const At = j(Number(ft.fov || yo), 1, 179), X = j(gy(At, gt, St), 0.1, 179);
        it = -(tt / gt) * At * W, G = bt / St * X * pt;
      } else
        it = -tt * Sf * W, G = bt * Sf * pt;
    }
    ft.yaw = $e(Number(ft.yaw || 0) + it), ft.pitch = j(Number(ft.pitch || 0) + G, -89.9, 89.9), n(ft), g.velHistory.push({ ts: M, yaw: ft.yaw, pitch: ft.pitch });
    let et = 0;
    for (; et < g.velHistory.length - 1 && g.velHistory[et].ts < M - 100; ) et++;
    return et > 0 && g.velHistory.splice(0, et), g.inertia.active = !1, g.inertia.lastTs = M, u(), b("drag", { phase: "move", dx: tt, dy: bt, dYaw: it, dPitch: G }), !0;
  }
  function N(O = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const D = Number(O || performance.now());
    g.drag.lastTs = D;
    const V = g.velHistory.filter((M) => D - M.ts <= 80);
    if (V.length >= 2) {
      const M = V[0], Q = V.at(-1), at = Math.max(1e-3, (Q.ts - M.ts) / 1e3);
      let tt = Q.yaw - M.yaw;
      tt > 180 && (tt -= 360), tt < -180 && (tt += 360), g.inertia.vx = tt / at, g.inertia.vy = (Q.pitch - M.pitch) / at;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const R = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = R > py, g.inertia.lastTs = D, b("drag", { phase: "end", speed: R, inertiaActive: g.inertia.active }), !0;
  }
  function C(O = performance.now()) {
    if (!g.inertia.active) return !1;
    const D = Number(O || performance.now()), V = Math.max(1e-3, (D - (g.inertia.lastTs || D)) / 1e3);
    g.inertia.lastTs = D;
    const R = { ...e() };
    R.yaw = $e(Number(R.yaw || 0) + g.inertia.vx * V), R.pitch = j(Number(R.pitch || 0) + g.inertia.vy * V, -89.9, 89.9);
    const M = Math.exp(-5.5 * V);
    return g.inertia.vx *= M, g.inertia.vy *= M, Math.abs(g.inertia.vx) < Nf && Math.abs(g.inertia.vy) < Nf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(R), u(), g.inertia.active;
  }
  function A(O) {
    const D = Math.sign(Number(O || 0));
    if (!D) return !1;
    const V = { ...e() }, R = Number(V.fov || yo);
    return V.fov = j(R + D * fy, dy, hy), n(V), u(), b("wheel", { deltaSign: D, fovBefore: R, fovAfter: V.fov }), !0;
  }
  function k(O) {
    return A(Math.sign(my(O)));
  }
  function H() {
    n({ yaw: 0, pitch: 0, fov: yo }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: p,
    moveDrag: w,
    endDrag: N,
    stepInertia: C,
    applyWheel: A,
    applyWheelEvent: k,
    resetView: H
  };
}
function Uc(t) {
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
function es(t, e) {
  return Wr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Mi(t, e) {
  return Wr(t.x * e, t.y * e, t.z * e);
}
function bo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Wr(t.x / e, t.y / e, t.z / e);
}
function yy(t, e) {
  const n = Number(t || 0) * Kr, i = Number(e || 0) * Kr, o = Math.cos(i);
  return Wr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function Mf(t, e) {
  return Wr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function by(t, e, n = 0) {
  const i = yy(t, e), o = Wr(0, 1, 0);
  let c = Mf(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Wr(1, 0, 0)), c = bo(c);
  let u = bo(Mf(i, c));
  const h = Number(n || 0) * Kr, g = Math.cos(h), b = Math.sin(h), p = es(Mi(c, g), Mi(u, b)), w = es(Mi(c, -b), Mi(u, g));
  return { fwd: i, right: bo(p), up: bo(w) };
}
function vy(t, e, n, i = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (h) => {
    const g = h.x - o, b = h.y - c, p = Math.hypot(g, b) || 1;
    return { x: h.x + g / p * i, y: h.y + b / p * i };
  };
  return [u(t), u(e), u(n)];
}
function Pf(t, e, n, i, o, c, u, h) {
  const g = n.x * (i.y - o.y) + i.x * (o.y - n.y) + o.x * (n.y - i.y);
  if (Math.abs(g) < 1e-6) return !1;
  const [b, p, w] = vy(c, u, h, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(b.x, b.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const N = (c.x * (i.y - o.y) + u.x * (o.y - n.y) + h.x * (n.y - i.y)) / g, C = (c.x * (o.x - i.x) + u.x * (n.x - o.x) + h.x * (i.x - n.x)) / g, A = (c.x * (i.x * o.y - o.x * i.y) + u.x * (o.x * n.y - n.x * o.y) + h.x * (n.x * i.y - i.x * n.y)) / g, k = (c.y * (i.y - o.y) + u.y * (o.y - n.y) + h.y * (n.y - i.y)) / g, H = (c.y * (o.x - i.x) + u.y * (n.x - o.x) + h.y * (i.x - n.x)) / g, O = (c.y * (i.x * o.y - o.x * i.y) + u.y * (o.x * n.y - n.x * o.y) + h.y * (n.x * i.y - i.x * n.y)) / g;
  return t.transform(N, k, C, H, A, O), t.drawImage(e, 0, 0), t.restore(), !0;
}
function _y(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), i = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || i <= 1) return null;
  t.__panoSharedWrappedErpCache || (t.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoSharedWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === i) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = i;
  const h = u.getContext("2d");
  return h ? (h.drawImage(e, 0, 0, n, i), h.drawImage(e, n, 0, n, i), t.__panoSharedWrappedErpCache = { src: o, w: n, h: i, canvas: u }, u) : null;
}
function bh(t) {
  const e = t || {}, n = Mn(e.yaw_deg, 0), i = Mn(e.pitch_deg, 0), o = Mn(e.roll_deg ?? e.rot_deg, 0), c = Ua(Mn(e.hFOV_deg, 90), 1, 179), u = Ua(Mn(e.vFOV_deg, 60), 1, 179), h = Math.tan(c * Kr * 0.5) / Math.max(1e-6, Math.tan(u * Kr * 0.5)), g = Ua(h, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: g
  };
}
function wy(t, e, n, i, o, c = "balanced") {
  const u = (bt = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Mn(i == null ? void 0 : i.w, 0),
      rectH: Mn(i == null ? void 0 : i.h, 0),
      imageW: Mn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Mn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...bt
    };
  };
  if (!t || !e || !n || !i || !o)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const h = Mn(i.w, 0), g = Mn(i.h, 0);
  if (h <= 1 || g <= 1)
    return u({ reason: "invalid_rect", rectW: h, rectH: g }), !1;
  const b = Number(n.naturalWidth || n.width || 0), p = Number(n.naturalHeight || n.height || 0);
  if (b <= 1 || p <= 1)
    return u({ reason: "invalid_image", imageW: b, imageH: p }), !1;
  const w = _y(e, n) || n, { yaw: N, pitch: C, roll: A, hfov: k, vfov: H } = bh(o), O = by(N, C, A), D = Math.tan(k * Kr * 0.5), V = Math.tan(H * Kr * 0.5), R = c === "high" ? 20 : c === "draft" ? 10 : 14, M = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let Q = 0;
  const at = Array.from({ length: M + 1 }, () => Array(R + 1).fill(null)), tt = Array.from({ length: M + 1 }, () => Array(R + 1).fill(null));
  for (let bt = 0; bt <= M; bt += 1)
    for (let F = 0; F <= R; F += 1) {
      const W = F / R, pt = bt / M, ft = (W * 2 - 1) * D, it = (1 - pt * 2) * V, G = bo(es(es(O.fwd, Mi(O.right, ft)), Mi(O.up, it))), et = Math.atan2(G.x, G.z), rt = Math.asin(Ua(G.y, -1, 1));
      let gt = (et / (2 * Math.PI) + 0.5) * b;
      for (; gt < 0; ) gt += b;
      for (; gt >= b; ) gt -= b;
      const St = (0.5 - rt / Math.PI) * p;
      at[bt][F] = { x: i.x + W * i.w, y: i.y + pt * i.h }, tt[bt][F] = { x: gt, y: St };
    }
  for (let bt = 0; bt < M; bt += 1)
    for (let F = 0; F < R; F += 1) {
      const W = at[bt][F], pt = at[bt][F + 1], ft = at[bt + 1][F], it = at[bt + 1][F + 1], G = { ...tt[bt][F] }, et = { ...tt[bt][F + 1] }, rt = { ...tt[bt + 1][F] }, gt = { ...tt[bt + 1][F + 1] }, St = Math.min(G.x, et.x, rt.x, gt.x);
      Math.max(G.x, et.x, rt.x, gt.x) - St > b * 0.5 && [G, et, rt, gt].forEach((X) => {
        X.x < b * 0.5 && (X.x += b);
      }), Pf(t, w, G, et, gt, W, pt, it) && (Q += 1), Pf(t, w, G, gt, rt, W, it, ft) && (Q += 1);
    }
  return u({
    drawnTriCount: Q,
    Nu: R,
    Nv: M,
    rectW: h,
    rectH: g,
    imageW: b,
    imageH: p,
    reason: "ok"
  }), Q > 0;
}
const vh = 0.28;
function xy(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), i = j(Number(e.y0 ?? 0), 0, 1), o = j(Number(e.x1 ?? 1), 0, 1), c = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(i, c),
    x1: Math.max(n, o),
    y1: Math.max(i, c)
  };
}
function Sy(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), i = t.type === "external_image" || t.source_kind === "external_image", o = n || (i ? String(t.id || "").trim() : ""), c = e.includeHidden === !0, u = t.visible === !1, h = c && i && u;
  return {
    id: String(t.id || ""),
    assetId: o,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: j(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: j(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: xy(t.crop),
    opacity: h ? vh : j(Number(t.opacity ?? 1), 0, 1),
    visible: h ? !0 : t.visible !== !1,
    external: i
  };
}
function Vo(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.includeHidden === !0;
  return {
    stickers: n.map((u) => Sy(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, h) => Number(u.zIndex || 0) - Number(h.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function jc(t, e, n = {}) {
  if (typeof e != "function") return [];
  const i = n.scene || Vo(t, n), o = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((h) => {
    var A;
    const g = String((h == null ? void 0 : h.assetId) || "").trim(), b = g || (h != null && h.external ? String((h == null ? void 0 : h.id) || "").trim() : "");
    if (!b || u.has(b)) return;
    const p = g ? o[g] : null, w = e(b, p, h);
    if (w instanceof HTMLImageElement && !w.complete) return;
    const N = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.videoWidth) || (w == null ? void 0 : w.width) || 0), C = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.videoHeight) || (w == null ? void 0 : w.height) || 0);
    !w || N <= 0 || C <= 0 || (u.add(b), c.push({
      assetId: b,
      source: w,
      revision: String(((A = n.revisionFor) == null ? void 0 : A.call(n, b, p, w)) ?? [
        b,
        Number(w.naturalWidth || w.videoWidth || w.width || 0),
        Number(w.naturalHeight || w.videoHeight || w.height || 0),
        String(w.currentSrc || w.src || "")
      ].join("|"))
    }));
  }), c;
}
function xl(t) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: j(Number((t == null ? void 0 : t.fov) || 100), 1, 179)
  };
}
function Ny(t) {
  return xl(t);
}
function Pi(t) {
  const e = bh(t || {});
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
const { app: be } = Ta;
function Bc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Ta == null ? void 0 : Ta.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const qr = Math.PI / 180, $i = { Nu: 14, Nv: 9 }, wc = { Nu: 24, Nv: 14 }, kf = { Nu: 32, Nv: 20 }, My = 10, Py = 120;
function _h() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Jt(t, e, n = null) {
  if (!_h()) return;
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
function ky() {
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
function Cy(t) {
  const e = kr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function wh(t, e, n) {
  Cy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Gc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function xh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Ay(t) {
  return Uc(xh(t));
}
function Gr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = be == null ? void 0 : be.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, i, n, o].join("|");
}
function Sh(t, e = null) {
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
const Co = {
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
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, Jt(i, "path.switch", {
              from: String(i.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), Nh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Jt(i, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
          }
      });
    }, 300));
  }
};
function Nh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = i === "cutout" ? "dom" : Sh(i, t).chosenPath, c = Gc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", h = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (c === o && c !== "none" && u === i && h === g) {
        t.__panoAttachOptions = { ...n, mode: i }, t.__panoPreviewMode = i, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Ri(t, { keepMonitor: i === "stickers" }), mb(t, { ...n, mode: i, __panoForcedPath: o }), this.activeBackend = Gc(t);
    },
    rebind(n = {}) {
      const i = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ri(t, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Ri(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Iy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Ri(t, e = {}) {
  var h, g, b, p, w;
  if (!t) return;
  is.unregister(t), Iy(t);
  const n = !!t.__panoDomPreview, i = !!t.__panoLegacyPreviewHooked, o = typeof t.__panoDomRestore == "function", c = typeof t.__panoLegacyRestore == "function";
  try {
    (h = t.__panoDomRestore) == null || h.call(t);
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
      (b = u.state) != null && b.raf && cancelAnimationFrame(u.state.raf);
    } catch {
    }
    try {
      (w = (p = u.root) == null ? void 0 : p.remove) == null || w.call(p);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((N) => {
      if (N === (u == null ? void 0 : u.widget)) return !1;
      const C = String((N == null ? void 0 : N.name) || ""), A = String((N == null ? void 0 : N.type) || ""), k = Bc();
      return !(C === k || A === k || C === "pano_preview" || A === "pano_preview" || C === "preview" && A === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Jt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || o,
    removedLegacy: i || c,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Co.unregister(t);
}
function Yr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Cf(t, e) {
  return Yr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ya(t, e) {
  return Yr(t.x * e, t.y * e, t.z * e);
}
function xc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Af(t, e) {
  return Yr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ba(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yr(t.x / e, t.y / e, t.z / e);
}
function $r(t, e) {
  const n = t * qr, i = e * qr, o = Math.cos(i);
  return Yr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function Sl(t, e, n = 0) {
  const i = $r(t, e), o = Yr(0, 1, 0);
  let c = Af(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Yr(1, 0, 0)), c = ba(c);
  let u = ba(Af(i, c));
  const h = n * qr, g = Math.cos(h), b = Math.sin(h), p = Cf(ya(c, g), ya(u, b)), w = Cf(ya(c, -b), ya(u, g));
  return { fwd: i, right: ba(p), up: ba(w) };
}
function Ey(t, e = "#00ff00") {
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
function Ty(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = ns(t, "state_json")) == null ? void 0 : n.value) || "");
}
function Mh(t) {
  var c;
  const e = Ty(t), n = String(((c = ns(t, "bg_color")) == null ? void 0 : c.value) || "#1a1a1e"), i = t.__panoStateCache;
  if (i && i.source === e && i.bg === n)
    return i.parsed;
  const o = Ey(e, n);
  return t.__panoStateCache = { source: e, bg: n, parsed: o }, o;
}
function ns(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function If(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Ph(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Ly(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
}
function kh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Ch(t, e, n = null) {
  var o, c;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((o = i == null ? void 0 : i.isSubgraphNode) != null && o.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, h = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      h != null && h.outputNode && (i = h.outputNode);
    } catch {
    }
  return !i && n != null && (i = Ly(t == null ? void 0 : t.graph, n)), i;
}
function Dy(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Nl(t, e = []) {
  const n = Dy(t), i = [];
  return e.forEach((o) => {
    n.includes(String(o)) && i.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !i.includes(o) && i.push(o);
  }), i.length ? i : e;
}
function Ef(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function rs(t, e) {
  const n = Ef(t), i = Ef(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Ry(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const o = Nl(t, e).map((b) => n.findIndex((p) => String((p == null ? void 0 : p.name) || "") === String(b))).filter((b) => b >= 0), c = n.map((b, p) => ({ input: b, idx: p })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), u = [.../* @__PURE__ */ new Set([...o, ...c])], h = [];
  for (const b of u) {
    const p = Ch(t, b);
    if ((p == null ? void 0 : p.id) != null) {
      h.push(String(p.id));
      continue;
    }
    const w = (g = n[b]) == null ? void 0 : g.link;
    if (w == null) continue;
    const N = Ph(t == null ? void 0 : t.graph, w), { originId: C } = kh(N);
    C != null && h.push(String(C));
  }
  return [...new Set(h)];
}
const is = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = tn) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var p, w, N, C, A;
        if (!c) return;
        const u = rs(i, c == null ? void 0 : c.id), g = Ry(c, ["erp_image", "bg_erp"]).some((k) => rs(i, k)), b = u ? "self" : g ? "upstream" : "global_executed";
        Jt(c, "exec-refresh", { executedId: i, reason: b }), Wc(c), Jt(c, "invalidate", { cachesCleared: !0 }), (w = (p = c.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || w.call(p), (N = c.setDirtyCanvas) == null || N.call(c, !0, !0), (A = (C = c.graph) == null ? void 0 : C.setDirtyCanvas) == null || A.call(C, !0, !0), Jt(c, "draw-request", {
          route: String(c.__panoPreviewMode || ""),
          mode: String(c.__panoPreviewMode || ""),
          reason: b
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
function os(t) {
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
  return typeof ((c = tn) == null ? void 0 : c.apiURL) == "function" ? tn.apiURL(o) : o;
}
function Oy(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Fy(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const o = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: o, subfolder: c };
}
function $y(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const o = String(i || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Ah(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Oy(e)) return [e];
  const { filename: n, subfolder: i } = Fy(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => os({
    filename: n,
    subfolder: i,
    type: c
  }));
  return $y([...o, e]);
}
function Hy(t) {
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
function Kc(t) {
  const e = be == null ? void 0 : be.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
  const o = n;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (rs(c, o)) return e.get(c);
  } else {
    const c = Object.keys(e);
    for (const u of c)
      if (rs(u, o)) return e[u];
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
      return os({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Gn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : os(t);
}
function Ih(t, e) {
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
function Vy(t) {
  const e = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function zy(t, e) {
  try {
    const n = Vy(e);
    let i = "";
    for (const o of n)
      if (i = Gn(o), i) break;
    i ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(i || ""), Jt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: Ih(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Jt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Jt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function Uy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const i = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Kc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], h = i ? [i, ...c, ...u] : [...c, ...u];
  let g = "";
  for (const O of h)
    if (g = Gn(O), g) break;
  if (!g) return null;
  const b = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), w = Ah(g).map((O) => Ih(O, b));
  if (!w.length) return null;
  const N = `${g}|rev:${b}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const C = t.__panoOwnOutputImageCache;
  if (C.img && C.src === N) return C.img;
  if (C.pendingImg && C.pendingSrc === N)
    return C.img && (C.img.complete || C.img.naturalWidth || C.img.width) ? C.img : C.pendingImg;
  const A = new Image();
  let k = -1;
  const H = () => {
    if (k += 1, k >= w.length) {
      t.__panoOwnOutputImageCache === C && (C.pendingSrc = "", C.pendingImg = null);
      return;
    }
    A.src = w[k];
  };
  return A.onload = () => {
    var O;
    t.__panoOwnOutputImageCache === C && C.pendingImg === A && C.pendingSrc === N && (C.src = N, C.img = A, C.pendingSrc = "", C.pendingImg = null), e == null || e(), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0);
  }, A.onerror = () => {
    if (k + 1 >= w.length) {
      t.__panoOwnOutputImageCache === C && C.pendingImg === A && (C.pendingSrc = "", C.pendingImg = null);
      return;
    }
    H();
  }, C.pendingSrc = N, C.pendingImg = A, H(), C.img && (C.img.complete || C.img.naturalWidth || C.img.width) ? C.img : A;
}
function jy(t, e = []) {
  var b, p;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = Nl(t, e), o = i.map((w) => n.findIndex((N) => String((N == null ? void 0 : N.name) || "") === String(w))).filter((w) => w >= 0), c = n.map((w, N) => ({ input: w, idx: N })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), u = [.../* @__PURE__ */ new Set([...o, ...c])];
  Jt(t, "image-resolve", {
    inputCandidates: i,
    resolvedIndices: u,
    stage: "start"
  });
  for (const w of u) {
    const N = n[w], C = N == null ? void 0 : N.link;
    if (C == null) continue;
    const A = Ph(t.graph, C), { originId: k, originSlot: H } = kh(A);
    if (k == null) continue;
    const O = Ch(t, w, k);
    if (!O) continue;
    const D = Number(H || 0), V = Kc((O == null ? void 0 : O.id) ?? k), R = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (R.length) {
      const tt = [];
      D >= 0 && D < R.length && tt.push(R[D]), tt.push(...R);
      for (const bt of tt) {
        const F = Gn(bt);
        if (F)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: F, sourceType: "nodeOutputs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    let M = [];
    try {
      M = typeof (be == null ? void 0 : be.getNodeImageUrls) == "function" ? be.getNodeImageUrls(O) || [] : [];
    } catch {
      M = [];
    }
    if (Array.isArray(M) && M.length) {
      const tt = [];
      D >= 0 && D < M.length && tt.push(M[D]), tt.push(...M);
      for (const bt of tt) {
        const F = Gn(bt);
        if (F)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: F, sourceType: "appNodeImageUrls", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const Q = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (Q.length) {
      const tt = [];
      D >= 0 && D < Q.length && tt.push(Q[D]), tt.push(...Q);
      for (const bt of tt) {
        const F = Gn(bt);
        if (F)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: F, sourceType: "nodeImgs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const at = (b = O == null ? void 0 : O.widgets) == null ? void 0 : b.find((tt) => String((tt == null ? void 0 : tt.name) || "").toLowerCase() === "image");
    if (at) {
      let tt = Gn(at.value);
      if (tt && !tt.includes("/") && !tt.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (tt = tn.apiURL(`/view?filename=${encodeURIComponent(tt)}&type=input&subfolder=`)), tt)
        return Jt(t, "image-resolve", {
          inputName: String((N == null ? void 0 : N.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: tt, sourceType: "widget", inputName: String((N == null ? void 0 : N.name) || "") };
    }
  }
  const h = Kc(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(h == null ? void 0 : h.pano_input_images) && g.push(...h.pano_input_images), Array.isArray((p = h == null ? void 0 : h.ui) == null ? void 0 : p.pano_input_images) && g.push(...h.ui.pano_input_images), g.length > 0)
    for (const w of g) {
      const N = Gn(w);
      if (N)
        return Jt(t, "image-resolve", { sourceType: "selfOutput", src: N, stage: "hit" }), { src: N, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Jt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function By(t, e = []) {
  const n = jy(t, e), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Ah(i);
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(c);
  if (u && u.srcRaw === i && u.img) return u.img;
  const h = new Image(), g = { srcRaw: i, resolvedSrc: "", img: h };
  t.__panoLinkedInputImageCache.set(c, g);
  let b = -1;
  const p = () => {
    var N, C;
    if (b += 1, b >= o.length) {
      try {
        (C = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || C.call(N, c);
      } catch {
      }
      Jt(t, "image-load", {
        ok: !1,
        src: i,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: o.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const w = o[b];
    g.resolvedSrc = w, h.src = w;
  };
  return h.onload = () => {
    var w;
    Jt(t, "image-load", {
      ok: !0,
      src: i,
      resolvedSrc: String(g.resolvedSrc || h.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: b + 1
    }), (w = t.setDirtyCanvas) == null || w.call(t, !0, !0);
  }, h.onerror = (w) => {
    var N, C;
    if (b + 1 < o.length) {
      p();
      return;
    }
    try {
      (C = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || C.call(N, c);
    } catch {
    }
    Jt(t, "image-load", {
      ok: !1,
      src: i,
      resolvedSrc: String(g.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: b + 1,
      errorType: String((w == null ? void 0 : w.type) || "error")
    });
  }, p(), h;
}
function as(t, e = [], n = null) {
  const i = By(t, e);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function Wc(t) {
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
  const n = t.__panoRenderCache, i = String(e || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function xr(t, e, n = "") {
  const i = Eh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = o, Jt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : i.isLoading ? o - Number(i.loadingSinceTs || 0) < Py ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, Jt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function qc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || i)), u = n / o, h = i / c, g = Math.min(u, h);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Tf(t, e, n = 1) {
  const i = Number((e == null ? void 0 : e.x) || 0), o = Number((e == null ? void 0 : e.y) || 0), c = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (c <= 0 || u <= 0) return;
  const h = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), b = Math.max(Math.round(34 * n), h + Math.round(14 * n)), p = i + (c - g) * 0.5, w = o + (u - b) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(p, w, g, b, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${h}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", p + g * 0.5, w + b * 0.5 + 0.5), t.restore();
}
function fo(t, e, n = "Open editor and add frame") {
  var o;
  const i = (o = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : o.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = e ? "flex" : "none");
}
function Gy(t) {
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
function Th(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let h = o, g = o / u;
  return g > c && (g = c, h = c * u), {
    x: n + (o - h) * 0.5,
    y: i + (c - g) * 0.5,
    w: h,
    h: g
  };
}
function Ky(t, e, n, i = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = Th(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const h = Math.max(0, Math.min(1, Number(i) || 0));
  return h > 0 && (t.fillStyle = `rgba(0,0,0,${h})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Wy(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), i = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || i <= 1) return null;
  t.__panoWrappedErpCache || (t.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === i) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = i;
  const h = u.getContext("2d");
  return h ? (h.drawImage(e, 0, 0, n, i), h.drawImage(e, n, 0, n, i), t.__panoWrappedErpCache = { src: o, w: n, h: i, canvas: u }, u) : null;
}
function qy(t, e = null) {
  const i = Array.isArray(t.widgets) ? t.widgets : [];
  let o = 32;
  return i.forEach((c) => {
    var h;
    if (c === e || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof c.computeSize == "function" ? c.computeSize(((h = kr(t)) == null ? void 0 : h[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    o += u;
  }), o;
}
function ja(t) {
  const n = qy(t) + 2, i = 8, o = kr(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: i, y: n, w: c, h: u };
}
function Lh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(e || "");
  if (!i) return null;
  const o = Hy(n);
  if (!o) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(o);
  if (c != null && c.img)
    return t.__panoPreviewImageCache.set(i, { src: o, img: c.img }), c.img;
  const u = t.__panoPreviewImageCache.get(i);
  if (u && u.src === o) return u.img;
  const h = new Image();
  return h.src = o, h.onload = () => {
    var g;
    return (g = t.setDirtyCanvas) == null ? void 0 : g.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(o, { img: h }), t.__panoPreviewImageCache.set(i, { src: o, img: h }), h;
}
function Yy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Dh(t, e) {
  return Vo(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Rh(t, e, n) {
  return jc(e, (i, o) => Lh(t, i, o), { scene: n });
}
function Xy(t, e, n, i = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (h) => {
    const g = h.x - o, b = h.y - c, p = Math.hypot(g, b) || 1;
    return { x: h.x + g / p * i, y: h.y + b / p * i };
  };
  return [u(t), u(e), u(n)];
}
function ss(t, e, n, i, o, c, u, h) {
  const g = n.x * (i.y - o.y) + i.x * (o.y - n.y) + o.x * (n.y - i.y);
  if (Math.abs(g) < 1e-6) return;
  const [b, p, w] = Xy(c, u, h, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(b.x, b.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const N = (c.x * (i.y - o.y) + u.x * (o.y - n.y) + h.x * (n.y - i.y)) / g, C = (c.x * (o.x - i.x) + u.x * (n.x - o.x) + h.x * (i.x - n.x)) / g, A = (c.x * (i.x * o.y - o.x * i.y) + u.x * (o.x * n.y - n.x * o.y) + h.x * (n.x * i.y - i.x * n.y)) / g, k = (c.y * (i.y - o.y) + u.y * (o.y - n.y) + h.y * (n.y - i.y)) / g, H = (c.y * (o.x - i.x) + u.y * (n.x - o.x) + h.y * (i.x - n.x)) / g, O = (c.y * (i.x * o.y - o.x * i.y) + u.y * (o.x * n.y - n.x * o.y) + h.y * (n.x * i.y - i.x * n.y)) / g;
  t.transform(N, k, C, H, A, O), t.drawImage(e, 0, 0), t.restore();
}
function Oh(t, e, n, i) {
  const o = xc(t, e.right), c = xc(t, e.up), u = xc(t, e.fwd);
  if (u <= 1e-4) return null;
  const h = c / u / i, g = o / u / i;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - h * n.h * 0.5 };
}
function Fh(t, e, n, i, o, c, u, h = 12, g = 9) {
  var it;
  const b = j(Number(u.hFOV_deg || 30), 1, 179) * qr, p = j(Number(u.vFOV_deg || 30), 1, 179) * qr, w = Math.tan(b * 0.5), N = Math.tan(p * 0.5), C = u.crop || {}, A = j(Number(C.x0 ?? 0), 0, 1), k = j(Number(C.y0 ?? 0), 0, 1), H = j(Number(C.x1 ?? 1), 0, 1), O = j(Number(C.y1 ?? 1), 0, 1), D = Math.max(1e-4, H - A), V = Math.max(1e-4, O - k), R = Sl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), M = [], Q = [], at = [], tt = [];
  for (let G = 0; G <= g; G++) {
    const et = G / g, gt = (1 - (k + et * V) * 2) * N;
    for (let St = 0; St <= h; St++) {
      const At = St / h, Nt = ((A + At * D) * 2 - 1) * w, Ut = R.fwd.x + R.right.x * Nt + R.up.x * gt, he = R.fwd.y + R.right.y * Nt + R.up.y * gt, pe = R.fwd.z + R.right.z * Nt + R.up.z * gt, Se = Math.hypot(Ut, he, pe) || 1e-8, U = Ut / Se, kt = he / Se, Mt = pe / Se, Rt = U * i.right.x + kt * i.right.y + Mt * i.right.z, jt = U * i.up.x + kt * i.up.y + Mt * i.up.z, I = U * i.fwd.x + kt * i.fwd.y + Mt * i.fwd.z;
      if (I <= 1e-4)
        M[G] || (M[G] = []), Q[G] || (Q[G] = []), M[G][St] = null, Q[G][St] = null;
      else {
        const L = jt / I / o, z = Rt / I / o;
        M[G] || (M[G] = []), Q[G] || (Q[G] = []), M[G][St] = n.x + n.w * 0.5 + z * n.h * 0.5, Q[G][St] = n.y + n.h * 0.5 - L * n.h * 0.5;
      }
      at[G] || (at[G] = []), tt[G] || (tt[G] = []), at[G][St] = At, tt[G][St] = et;
    }
  }
  const bt = (it = c.assets) == null ? void 0 : it[u.asset_id], F = Lh(e, u.asset_id, bt);
  if (!F || !F.complete || !F.naturalWidth) return;
  const W = Number(F.naturalWidth || F.width || 1), pt = Number(F.naturalHeight || F.height || 1), ft = h < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = ft;
  for (let G = 0; G < g; G++)
    for (let et = 0; et < h; et++) {
      const rt = M[G][et], gt = Q[G][et], St = M[G][et + 1], At = Q[G][et + 1], X = M[G + 1][et], Nt = Q[G + 1][et], Ut = M[G + 1][et + 1], he = Q[G + 1][et + 1];
      if (rt === null || St === null || X === null || Ut === null) continue;
      const pe = at[G][et] * W, Se = tt[G][et] * pt, U = at[G][et + 1] * W, kt = tt[G][et + 1] * pt, Mt = at[G + 1][et] * W, Rt = tt[G + 1][et] * pt, jt = at[G + 1][et + 1] * W, I = tt[G + 1][et + 1] * pt;
      ss(t, F, { x: pe, y: Se }, { x: U, y: kt }, { x: jt, y: I }, { x: rt, y: gt }, { x: St, y: At }, { x: Ut, y: he }), ss(t, F, { x: pe, y: Se }, { x: jt, y: I }, { x: Mt, y: Rt }, { x: rt, y: gt }, { x: Ut, y: he }, { x: X, y: Nt });
    }
}
function Zy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const i = Mh(t), o = ja(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = Sl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const h = as(
    t,
    Nl(t, ["erp_image", "bg_erp"]),
    () => {
      var R;
      return (R = t.setDirtyCanvas) == null ? void 0 : R.call(t, !0, !1);
    }
  ), g = !!(h && h.complete && (h.naturalWidth || h.width)), b = Vh(t), p = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = b || p, N = $i, C = Dh(t, i), A = Rh(t, i, C), k = xl(t.__panoPreviewView), H = g ? zi({
    owner: t,
    cacheKey: "runtime_panorama_scene",
    ctx: e,
    rect: o,
    backgroundSource: h,
    backgroundRevision: [
      String(h.currentSrc || h.src || ""),
      Number(h.naturalWidth || h.width || 0),
      Number(h.naturalHeight || h.height || 0)
    ].join("|"),
    textures: A,
    scene: C,
    view: k
  }) : !1, O = w ? 8 : 12, D = w ? 6 : 9, V = Yy(t, i);
  if (!g || V.length === 0) {
    const R = qc(e == null ? void 0 : e.canvas, o);
    $h(e, o, c, u, R);
  }
  !H && g && cs(t, e, o, c, u, h, N), !H && V.length > 0 && V.forEach((R) => Fh(e, t, o, c, u, i, R, O, D)), e.restore();
}
function Ba(t, e, n, i) {
  var c, u, h, g, b, p;
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
      const w = i.convertEventToCanvasOffset(e);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((h = t == null ? void 0 : t.pos) == null ? void 0 : h[0]) || 0),
          y: Number(w[1]) - Number(((g = t == null ? void 0 : t.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((b = t == null ? void 0 : t.pos) == null ? void 0 : b[0]) || 0),
      y: Number(e.canvasY) - Number(((p = t == null ? void 0 : t.pos) == null ? void 0 : p[1]) || 0)
    };
  const o = Qy(t, e, i);
  return o || null;
}
function Jy(t, e) {
  var w, N;
  const n = Number(t == null ? void 0 : t.clientX), i = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const o = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, c = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), u = (e == null ? void 0 : e.ds) || ((N = be == null ? void 0 : be.canvas) == null ? void 0 : N.ds);
  if (!c || !u) return null;
  const h = Number(u.scale || 1);
  if (!Number.isFinite(h) || Math.abs(h) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], b = (n - Number(c.left || 0)) / h - Number(g[0] || 0), p = (i - Number(c.top || 0)) / h - Number(g[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(p) ? null : { x: b, y: p };
}
function Qy(t, e, n) {
  var o, c;
  const i = Jy(e, n || (be == null ? void 0 : be.canvas));
  return i ? {
    x: i.x - Number(((o = t == null ? void 0 : t.pos) == null ? void 0 : o[0]) || 0),
    y: i.y - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function va(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Jt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: kr(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", wh(t, 320, 180), xi(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var N, C;
    const w = e ? e.apply(this, arguments) : void 0;
    try {
      const A = arguments[0];
      A && !((N = this.flags) != null && N.collapsed) && (i.stepInertia(performance.now()) && ((C = this.setDirtyCanvas) == null || C.call(this, !0, !1)), Zy(this, A, i));
    } catch {
    }
    return w;
  }, t.onResize = function() {
    var N;
    const w = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ls(this, 150), (N = this.setDirtyCanvas) == null || N.call(this, !0, !0), zh(this, 220, null), w;
  };
  const i = Ps({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (w) => {
      t.__panoPreviewView = w;
    },
    getViewportSize: () => {
      const w = ja(t);
      return {
        w: Math.max(1, Number((w == null ? void 0 : w.w) || 0)),
        h: Math.max(1, Number((w == null ? void 0 : w.h) || 0))
      };
    },
    onInteraction: () => {
      var w;
      Hh(t), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(w, N, C) {
    var A;
    try {
      if (!((A = this.flags) != null && A.collapsed)) {
        const k = Ba(this, w, N, C) || { x: 0, y: 0 }, H = kr(this), O = Number((H == null ? void 0 : H[0]) || 0), D = Number((H == null ? void 0 : H[1]) || 0);
        if (k.x >= O - 20 && k.y >= D - 20)
          return o ? o.apply(this, arguments) : void 0;
        const R = ja(this);
        if (If(k.x, k.y, R))
          return (w == null ? void 0 : w.button) === 0 && i.startDrag(k.x, k.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(w, N, C) {
    try {
      const A = Ba(this, w, N, C);
      if (i.state.drag.active) {
        if (typeof (w == null ? void 0 : w.buttons) == "number" && (w.buttons & 1) === 0)
          return i.endDrag(), !0;
        const k = A || i.state.drag;
        return i.moveDrag(k.x, k.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = t.onMouseUp;
  t.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const h = t.onMouseLeave;
  t.onMouseLeave = function() {
    const w = h ? h.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), w;
  };
  const g = t.onMouseWheel;
  t.onMouseWheel = function(w, N, C) {
    var A, k;
    try {
      if ((A = this.flags) != null && A.collapsed) return g ? g.apply(this, arguments) : void 0;
      const H = Ba(this, w, N, C), O = ja(this);
      if (!H || !If(H.x, H.y, O)) return g ? g.apply(this, arguments) : void 0;
      const D = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof N == "number" ? N : 0));
      return i.applyWheel(Math.sign(D)) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const b = t.onRemoved, p = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = o, t.onMouseMove = c, t.onMouseUp = u, t.onMouseLeave = h, t.onMouseWheel = g, t.onRemoved = b, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = p, t.onRemoved = function() {
    return p(), Co.unregister(this), is.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function tb(t, e) {
  const n = as(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var u, h;
      return (h = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : h.call(u);
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
function eb(t, e) {
  var b, p, w, N, C, A, k, H, O, D, V, R;
  const n = (p = (b = e == null ? void 0 : e.painting) == null ? void 0 : b.paint) == null ? void 0 : p.strokes, i = (N = (w = e == null ? void 0 : e.painting) == null ? void 0 : w.mask) == null ? void 0 : N.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!o && !c) return null;
  const u = tb(t, e), h = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== h) && (t.__panoPreviewPaintEngine = zc(u), t.__panoPreviewPaintDescriptorKey = h, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: i || null,
    groups: ((C = e == null ? void 0 : e.painting) == null ? void 0 : C.groups) || null,
    rasterObjects: ((A = e == null ? void 0 : e.painting) == null ? void 0 : A.raster_objects) || null
  };
  return (((k = t.__panoPreviewPaintRevision) == null ? void 0 : k.paint) !== g.paint || ((H = t.__panoPreviewPaintRevision) == null ? void 0 : H.mask) !== g.mask || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== g.groups || ((D = t.__panoPreviewPaintRevision) == null ? void 0 : D.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((V = e == null ? void 0 : e.painting) == null ? void 0 : V.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function nb(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function rb(t, e) {
  const n = eb(t, e);
  if (!n) return null;
  const i = nb(e);
  return n.getErpTarget(i).displayPaint.canvas;
}
function ib(t, e, n = null) {
  var h;
  const i = (h = e == null ? void 0 : e.painting_layer) == null ? void 0 : h.paint, o = Gn(i);
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
function Lf(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const h = ib(t, e, () => {
      var g, b;
      return (b = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : b.call(g);
    });
    if (h && (h.complete || h.naturalWidth || h.width))
      return {
        source: h,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || h.currentSrc || h.src || "")
      };
  }
  const o = rb(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function ob(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function ab(t, e, n, i) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== i) && (o = document.createElement("canvas"), o.width = n, o.height = i, t[e] = o), o;
}
function sb(t, e, n, i, o, c) {
  if (!e || !n || !(i > 0) || !(o > 0)) return;
  const u = ob(n);
  if (u.width === i && u.height === o) {
    e.drawImage(n, 0, 0, i, o);
    return;
  }
  const g = ab(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, i, o);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const b = g.getImageData(0, 0, u.width, u.height).data, p = e.getImageData(0, 0, i, o), w = p.data, N = Math.max(0, u.width - 1), C = Math.max(0, u.height - 1);
    for (let A = 0; A < o; A += 1) {
      const k = (A + 0.5) * u.height / o - 0.5, H = j(Math.floor(k), 0, C), O = j(H + 1, 0, C), D = j(k - H, 0, 1);
      for (let V = 0; V < i; V += 1) {
        const R = (V + 0.5) * u.width / i - 0.5, M = j(Math.floor(R), 0, N), Q = j(M + 1, 0, N), at = j(R - M, 0, 1);
        let tt = 0, bt = 0, F = 0, W = 0;
        const pt = (G, et, rt) => {
          const gt = (et * u.width + G) * 4, St = (b[gt + 3] || 0) / 255;
          tt += St * rt, bt += (b[gt] || 0) / 255 * St * rt, F += (b[gt + 1] || 0) / 255 * St * rt, W += (b[gt + 2] || 0) / 255 * St * rt;
        };
        if (pt(M, H, (1 - at) * (1 - D)), pt(Q, H, at * (1 - D)), pt(M, O, (1 - at) * D), pt(Q, O, at * D), tt <= 1e-6) continue;
        const ft = (A * i + V) * 4, it = 1 - tt;
        w[ft] = Math.round(j((bt + w[ft] / 255 * it) * 255, 0, 255)), w[ft + 1] = Math.round(j((F + w[ft + 1] / 255 * it) * 255, 0, 255)), w[ft + 2] = Math.round(j((W + w[ft + 2] / 255 * it) * 255, 0, 255)), w[ft + 3] = 255;
      }
    }
    e.putImageData(p, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, i, o);
  }
}
function Df(t, e, n, i) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), h = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${i}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== h || g.width !== o || g.height !== c) {
    (!g || g.width !== o || g.height !== c) && (g = document.createElement("canvas"), g.width = o, g.height = c, t.__panoPreviewBgPaint = g);
    const b = g.getContext("2d");
    b.clearRect(0, 0, o, c), b.drawImage(e, 0, 0, o, c), sb(t, b, n, o, c, "__panoPreviewOverlayScratch"), g.__revKey = h;
  }
  return g;
}
function cb(t, e, n, i = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  Eh(t, o);
  const c = Mh(t), u = o === "cutout" ? Uy(t, () => {
    var k, H;
    return (H = (k = t.__panoDomPreview) == null ? void 0 : k.requestDraw) == null ? void 0 : H.call(k);
  }) : null, h = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, b = 1, p = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), w = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), N = Math.max(64, Math.round(p * b)), C = Math.max(64, Math.round(w * b)), A = e.getContext("2d");
  if (A)
    if (o === "cutout") {
      const k = Gy(c), H = as(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, G;
          return (G = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : G.call(it);
        }
      ), O = !!(H && H.complete && (H.naturalWidth || H.width));
      (e.width !== N || e.height !== C) && (e.width = N, e.height = C);
      const D = { x: 0, y: 0, w: N, h: C }, V = h ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : O ? j(Number((H.naturalWidth || H.width) / Math.max(1, Number(H.naturalHeight || H.height || 1))), 0.05, 20) : 1, R = k ? Pi(k) : null, M = j(Number((R == null ? void 0 : R.aspect) || V || 1), 0.05, 20), Q = Th(D, M), at = qc(e, D);
      A.setTransform(1, 0, 0, 1, 0, 0), A.fillStyle = "#070707", A.fillRect(0, 0, N, C);
      const tt = t == null ? void 0 : t.__panoCutoutPreviewSurface, bt = (tt == null ? void 0 : tt.source) || null;
      if (!!(bt && Number(bt.width || 0) > 1 && Number(bt.height || 0) > 1)) {
        A.drawImage(bt, Q.x, Q.y, Q.w, Q.h), fo(t, !1), xr(t, !1, "");
        return;
      }
      let W = "none", pt = "Open editor and add frame", ft = "";
      if (h)
        A.drawImage(u, Q.x, Q.y, Q.w, Q.h);
      else if (ft = String((H == null ? void 0 : H.src) || ""), k)
        H && !O ? W = "loading" : O ? (W = "empty", pt = "Open editor or run node") : (W = "empty", pt = "Connect ERP image");
      else {
        if (O) {
          const it = Lf(t, c), G = it != null && it.source ? Df(t, H, it.source, it.revision || "") : H;
          Ky(A, G, D, 0.44);
        }
        W = "empty", pt = "Open editor and add frame";
      }
      W === "loading" ? (Tf(A, Q, at), fo(t, !1), xr(t, !0, ft)) : W === "empty" ? (fo(t, !0, pt), xr(t, !1, "")) : (fo(t, !1), xr(t, !1, ""));
    } else {
      fo(t, !1), (e.width !== N || e.height !== C) && (e.width = N, e.height = C);
      const k = { x: 0, y: 0, w: N, h: C }, H = qc(e, k);
      A.setTransform(1, 0, 0, 1, 0, 0), A.clearRect(0, 0, N, C), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = Sl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), D = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5), V = as(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, G;
          return (G = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : G.call(it);
        }
      ), R = !!(V && V.complete && (V.naturalWidth || V.width));
      A.fillStyle = "#1a1a1e", A.fillRect(0, 0, N, C);
      const M = Dh(t, c), Q = Rh(t, c, M), at = xl(t.__panoPreviewView), tt = Lf(t, c), bt = (tt == null ? void 0 : tt.source) || null, F = R && bt ? Df(t, V, bt, (tt == null ? void 0 : tt.revision) || "") : V, W = F !== V ? String(F.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "", pt = R ? zi({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: A,
        rect: k,
        backgroundSource: F,
        backgroundRevision: W,
        textures: Q,
        scene: M,
        view: at
      }) : !1, ft = M.stickers;
      if (R && pt)
        xr(t, !1, "");
      else if (R)
        cs(t, A, k, O, D, F, $i), xr(t, !1, "");
      else if (bt)
        cs(t, A, k, O, D, bt, $i), xr(t, !!V && !R, String((V == null ? void 0 : V.src) || ""));
      else {
        const it = !!V && !R;
        xr(t, it, String((V == null ? void 0 : V.src) || "")), it && Tf(A, k, H);
      }
      if ((!R || ft.length === 0) && $h(A, k, O, D, H), !pt && ft.length > 0) {
        const it = Vh(t), G = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, et = it || G, rt = et ? 8 : 12, gt = et ? 6 : 9;
        ft.forEach((St) => Fh(A, t, k, O, D, c, St, rt, gt));
      } else if (!V || !R) {
        const it = Math.max(14, Math.round(16 * H));
        A.fillStyle = "rgba(212,212,216,0.85)", A.font = `600 ${it}px Plus Jakarta Sans, Geist, sans-serif`, A.textAlign = "center", A.fillText("Open editor to add stickers", N * 0.5, C * 0.5 + 24 * H);
      }
    }
}
function cs(t, e, n, i, o, c, u = wc) {
  if (!(!!c && (typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas || typeof ImageBitmap < "u" && c instanceof ImageBitmap) || !!c && c.complete && (c.naturalWidth || c.width))) return;
  const b = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (Y1({
    owner: t,
    cacheKey: "runtime_pano_bg",
    ctx: e,
    rect: n,
    img: c,
    mode: "panorama",
    yawDeg: Number(b.yaw || 0),
    pitchDeg: Number(b.pitch || 0),
    fovDeg: Number(b.fov || 100)
  })) return;
  const p = Number(c.naturalWidth || c.width || 0), w = Number(c.naturalHeight || c.height || 0);
  if (p <= 1 || w <= 1) return;
  const C = Wy(t, c) || c, A = Math.max(4, Number((u == null ? void 0 : u.Nu) || wc.Nu)), k = Math.max(4, Number((u == null ? void 0 : u.Nv) || wc.Nv)), H = A <= $i.Nu && k <= $i.Nv ? 0.24 : A >= kf.Nu && k >= kf.Nv ? 0.42 : 0.34, O = [], D = [];
  for (let Q = 0; Q <= k; Q++)
    O[Q] = [], D[Q] = [];
  const V = n.x + n.w * 0.5, R = n.y + n.h * 0.5, M = n.h * 0.5;
  for (let Q = 0; Q <= k; Q++) {
    const at = n.y + n.h * Q / k, tt = (R - at) / M * o;
    for (let bt = 0; bt <= A; bt++) {
      const F = n.x + n.w * bt / A, W = (F - V) / M * o, pt = i.fwd.x + i.right.x * W + i.up.x * tt, ft = i.fwd.y + i.right.y * W + i.up.y * tt, it = i.fwd.z + i.right.z * W + i.up.z * tt, G = Math.hypot(pt, ft, it) || 1e-8, et = pt / G, rt = ft / G, gt = it / G, St = Math.atan2(et, gt), At = Math.asin(j(rt, -1, 1));
      let X = (St / (2 * Math.PI) + 0.5) * p;
      for (; X < 0; ) X += p;
      for (; X >= p; ) X -= p;
      const Nt = (0.5 - At / Math.PI) * w;
      O[Q][bt] = { x: F, y: at }, D[Q][bt] = { x: X, y: Nt };
    }
  }
  e.save(), e.__panoTriExpandPx = H, e.globalAlpha = 1;
  for (let Q = 0; Q < k; Q += 1)
    for (let at = 0; at < A; at += 1) {
      const tt = O[Q][at], bt = O[Q][at + 1], F = O[Q + 1][at], W = O[Q + 1][at + 1];
      if (!tt || !bt || !F || !W) continue;
      const pt = { ...D[Q][at] }, ft = { ...D[Q][at + 1] }, it = { ...D[Q + 1][at] }, G = { ...D[Q + 1][at + 1] }, et = Math.min(pt.x, ft.x, it.x, G.x);
      Math.max(pt.x, ft.x, it.x, G.x) - et > p * 0.5 && [pt, ft, it, G].forEach((gt) => {
        gt.x < p * 0.5 && (gt.x += p);
      }), ss(e, C, pt, ft, G, tt, bt, W), ss(e, C, pt, G, it, tt, W, F);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function Rf(t, e, n, i, o, c, u = 1) {
  let h = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const b = Oh(g, n, i, o);
    if (!b) {
      h = !1;
      continue;
    }
    h ? t.lineTo(b.x, b.y) : (t.moveTo(b.x, b.y), h = !0);
  }
  t.stroke();
}
function $h(t, e, n, i, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const p = [];
    for (let w = -180; w <= 180; w += 15) p.push($r(w, b));
    Rf(t, p, n, e, i, b === 0 ? u : c, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const p = [];
    for (let w = -89; w <= 89; w += 15) p.push($r(b, w));
    Rf(t, p, n, e, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, b % 90 === 0 ? 1.2 : 1);
  }
  const h = [
    { name: "Front", dir: $r(0, 0) },
    { name: "Right", dir: $r(90, 0) },
    { name: "Back", dir: $r(180, 0) },
    { name: "Left", dir: $r(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * o));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", h.forEach((b) => {
    const p = Oh(b.dir, n, e, i);
    p && t.fillText(b.name, p.x, p.y + 20 * o);
  }), t.restore();
}
function lb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Hh(t) {
  const e = lb(t);
  e.dragging = !1, e.hqFrames = My;
}
function ls(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Vh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function ub(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function fb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const i = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!i) return !1;
  const o = Number(t.clientX) - Number(i.left || 0), c = Number(t.clientY) - Number(i.top || 0);
  return o >= i.width - n && c >= i.height - n;
}
function mi(t, e) {
  return fb(t, e) ? !1 : (ub(t), !0);
}
function db() {
  var n;
  const t = (n = be == null ? void 0 : be.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function hb(t) {
  var n;
  if (!t) return;
  const e = (n = be == null ? void 0 : be.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function pb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const i = kr(t), o = Number((i == null ? void 0 : i[0]) || 0), c = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(o) || !Number.isFinite(c) || o >= e && c >= n) return;
  const u = [Math.max(e, o), Math.max(n, c)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Jt(t, "size.bootstrap", { from: [o, c], to: u });
  } catch (h) {
    Jt(t, "size.bootstrap.error", { message: String((h == null ? void 0 : h.message) || h || "unknown") });
  }
}
function gb(t, e = 0, n = null, i = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function Of(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, ls(t, 150), e == null || e(), zh(t, 180, e);
    }
  };
}
function zh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    t.__panoResizeSettleTimer = null, n == null || n(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function xi(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function mb(t, e = {}) {
  var At;
  const n = e.__allowStandalone === !0, i = Ay(t);
  if (i && !n) {
    Jt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: xh(t) });
    return;
  }
  i && pb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", is.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const h = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || Co.unregister(t);
  const g = String(e.__panoForcedPath || "").trim(), b = o ? Sh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Gr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (g === "dom" || g === "legacy_draw") && (b.chosenPath = g, b.reason = "controller_target_backend");
  const p = o ? b.chosenPath : "dom", w = b.signature || Gr(t), N = Number(t.__panoRebindGeneration || 0), C = Gc(t);
  if (Jt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: h,
    mode: t.__panoPreviewMode,
    legacyFrontend: p === "legacy_draw",
    activeBackend: C,
    targetBackend: p,
    chosenPath: p,
    pathReason: b.reason,
    signature: w,
    generation: N,
    frontendVersionRaw: b.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: kr(t)
  }), t.__panoFrontendSig = w, t.__panoStickersPath = p, o && Co.register(t), o && p === "legacy_draw") {
    if (c) return;
    Ri(t, { keepMonitor: !0 }), va(t);
    return;
  }
  if ((At = t.__panoDomPreview) != null && At.widget) return;
  if (t.__panoLegacyPreviewHooked && Ri(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    o && !c && va(t);
    return;
  }
  const A = e.noPreview === !0, k = o || A ? 0 : 56, H = document.createElement("div");
  if (ky(), H.className = "pano-node-preview-dom", H.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), A && H.classList.add("pano-node-preview--no-preview"), H.setAttribute("data-capture-wheel", "true"), H.setAttribute("tabindex", "-1"), H.style.cssText = [
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
    const X = t.addDOMWidget(Bc(), "preview", H, Of(t, null));
    xi(t), t.__panoDomPreview = { widget: X, root: H, requestDraw: () => {
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
  const D = document.createElement("canvas");
  D.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", O.appendChild(D), O.appendChild(V), H.appendChild(O), wh(t, 120, 120), xi(t);
  let R = null;
  try {
    gb(t, k, () => {
      var X, Nt;
      return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
    }), R = t.addDOMWidget(
      Bc(),
      "preview",
      H,
      Of(t, () => {
        var X, Nt;
        return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
      }, k)
    );
  } catch {
    o && va(t);
    return;
  }
  const M = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, Q = () => {
    M.needsDraw = !0, M.raf || (M.raf = requestAnimationFrame(bt));
  }, at = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ls(t, 150), Q();
  }) : null;
  at == null || at.observe(O);
  const tt = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const X = 3, Nt = (Ut) => {
      requestAnimationFrame(() => {
        var pe;
        const he = !!(H != null && H.isConnected && (O != null && O.isConnected) && (D != null && D.isConnected) && Number(O.clientHeight || 0) > 0 && Number(D.clientHeight || 0) > 0);
        if (!he && Ut < X) {
          Nt(Ut + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Jt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: he ? "dom_ok" : "dom_fail",
          wrapH: Number((O == null ? void 0 : O.clientHeight) || 0),
          canvasH: Number((D == null ? void 0 : D.clientHeight) || 0),
          attempt: Ut
        }), !he) {
          if (c) {
            Jt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((O == null ? void 0 : O.clientHeight) || 0),
              canvasH: Number((D == null ? void 0 : D.clientHeight) || 0)
            });
            return;
          }
          Jt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Ri(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", va(t), (pe = t.setDirtyCanvas) == null || pe.call(t, !0, !0);
        }
      });
    };
    Nt(1);
  }, bt = (X) => {
    var Ut, he, pe;
    M.raf = 0;
    const Nt = F.stepInertia(X);
    (M.needsDraw || Nt) && (M.needsDraw = !1, (Ut = t.flags) != null && Ut.collapsed || cb(t, D, null, F), (he = t.setDirtyCanvas) == null || he.call(t, !0, !1)), (Nt || M.needsDraw) && (M.raf = requestAnimationFrame(bt)), _h() && (!t.__panoDebugLastTs || X - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = X, Jt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: kr(t),
      root: uo(H),
      wrap: uo(O),
      canvas: uo(D),
      rootParent: uo(H.parentElement),
      rootGrandParent: uo((pe = H.parentElement) == null ? void 0 : pe.parentElement),
      canvasIntrinsic: { width: Number(D.width || 0), height: Number(D.height || 0) }
    }));
  }, F = Ps({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (X) => {
      t.__panoPreviewView = X;
    },
    onInteraction: () => {
      Q();
    }
  });
  D.addEventListener("pointerdown", (X) => {
    var Nt, Ut;
    mi(X, O) && u && X.button === 0 && ((Nt = H.focus) == null || Nt.call(H), (Ut = D.setPointerCapture) == null || Ut.call(D, X.pointerId), D.style.cursor = "grabbing", F.startDrag(X.clientX, X.clientY, X.pointerId));
  }), D.addEventListener("pointermove", (X) => {
    !u || !F.state.drag.active || (mi(X, O), F.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const W = (X) => {
    var Nt;
    !u || !F.state.drag.active || (mi(X, O), (Nt = D.releasePointerCapture) == null || Nt.call(D, X.pointerId), D.style.cursor = "grab", F.endDrag(), Hh(t), Q());
  };
  D.addEventListener("pointerup", W), D.addEventListener("pointercancel", W), D.addEventListener("pointerleave", (X) => {
    F.state.drag.active && W(X);
  });
  const pt = (X) => {
    var Ut, he, pe;
    if (Jt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !mi(X, O) || !u) return;
    const Nt = db();
    F.applyWheelEvent(X) && Q(), (Ut = X.preventDefault) == null || Ut.call(X), (he = X.stopPropagation) == null || he.call(X), (pe = X.stopImmediatePropagation) == null || pe.call(X), requestAnimationFrame(() => {
      var Se, U;
      hb(Nt), (U = (Se = be == null ? void 0 : be.canvas) == null ? void 0 : Se.setDirty) == null || U.call(Se, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    O.addEventListener(X, pt, { passive: !1, capture: !0 }), D.addEventListener(X, pt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    D.addEventListener(X, (Nt) => mi(Nt, O)), O.addEventListener(X, (Nt) => mi(Nt, O));
  });
  const ft = ns(t, "state_json");
  if (ft && !ft.__panoPreviewPatchedCb) {
    ft.__panoPreviewPatchedCb = !0;
    const X = ft.callback;
    ft.callback = (Nt) => {
      const Ut = X ? X(Nt) : void 0;
      return Q(), Ut;
    };
  }
  const it = ns(t, "bg_color");
  if (it && !it.__panoPreviewPatchedCb) {
    it.__panoPreviewPatchedCb = !0;
    const X = it.callback;
    it.callback = (Nt) => {
      const Ut = X ? X(Nt) : void 0;
      return Q(), Ut;
    };
  }
  const G = t.onRemoved, et = t.onResize, rt = t.onExecuted;
  t.onExecuted = function(X) {
    zy(t, X), Wc(t), xi(t), Q();
    const Nt = rt ? rt.apply(this, arguments) : void 0;
    return xi(t), Nt;
  };
  const gt = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Wc(t), xi(t), Q(), gt ? gt.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var Nt;
    const X = et ? et.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ls(this, 150), Q(), (Nt = this.setDirtyCanvas) == null || Nt.call(this, !0, !1), X;
  }, t.onRemoved = function() {
    return St(), Co.unregister(this), is.unregister(this), G ? G.apply(this, arguments) : void 0;
  };
  const St = () => {
    var X;
    M.raf && cancelAnimationFrame(M.raf), (X = at == null ? void 0 : at.disconnect) == null || X.call(at), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = et, t.onExecuted = rt, t.onConnectionsChange = gt, t.onRemoved = G;
  };
  t.__panoDomRestore = St, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: R, root: H, canvas: D, requestDraw: Q, state: M, emptyHintEl: V }, tt(), Q();
}
function Ff(t, e = {}) {
  Nh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const us = Math.PI / 180;
function Xr(t, e, n) {
  return { x: t, y: e, z: n };
}
function $f(t, e) {
  return Xr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function _a(t, e) {
  return Xr(t.x * e, t.y * e, t.z * e);
}
function Hf(t, e) {
  return Xr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function wa(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Xr(t.x / e, t.y / e, t.z / e);
}
function yb(t, e) {
  const n = t * us, i = e * us, o = Math.cos(i);
  return Xr(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function bb(t, e, n = 0) {
  const i = yb(t, e), o = Xr(0, 1, 0);
  let c = Hf(o, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Xr(1, 0, 0)), c = wa(c);
  const u = wa(Hf(i, c)), h = n * us, g = Math.cos(h), b = Math.sin(h), p = $f(_a(c, g), _a(u, b)), w = $f(_a(c, -b), _a(u, g));
  return { fwd: i, right: wa(p), up: wa(w) };
}
const xa = 140, vb = 180, Vf = 40, Sc = 10;
function zf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Uf(t, e) {
  const n = zf(t), i = zf(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function jf(t) {
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
  return typeof ((c = tn) == null ? void 0 : c.apiURL) == "function" ? tn.apiURL(o) : o;
}
function Ao(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Ao(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return jf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const i = Ao(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : jf(t);
}
function Bf(t) {
  var o;
  const e = (o = pn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (Uf(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if (Uf(c, n)) return e[c];
  return null;
}
function _b(t, e = "erp_image") {
  var A, k, H, O, D, V, R, M, Q, at, tt, bt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let i = null;
  const o = n.find((F) => String((F == null ? void 0 : F.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (i = o.link), i == null) {
    const F = n.find((W) => String((W == null ? void 0 : W.type) || "").toUpperCase() === "IMAGE" && (W == null ? void 0 : W.link) != null);
    (F == null ? void 0 : F.link) != null && (i = F.link);
  }
  if (i == null) return "";
  const c = ((k = (A = t == null ? void 0 : t.graph) == null ? void 0 : A.links) == null ? void 0 : k[i]) || ((D = (O = (H = pn) == null ? void 0 : H.graph) == null ? void 0 : O.links) == null ? void 0 : D[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const h = (M = (R = (V = pn) == null ? void 0 : V.graph) == null ? void 0 : R.getNodeById) == null ? void 0 : M.call(R, u), g = Bf(u), b = Bf(t == null ? void 0 : t.id), p = [
    g == null ? void 0 : g.images,
    (Q = g == null ? void 0 : g.ui) == null ? void 0 : Q.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (at = b == null ? void 0 : b.ui) == null ? void 0 : at.pano_input_images,
    b == null ? void 0 : b.pano_input_images
  ];
  for (const F of p)
    if (Array.isArray(F))
      for (const W of F) {
        const pt = Ao(W);
        if (pt) return pt;
      }
  let w = [];
  try {
    w = typeof ((tt = pn) == null ? void 0 : tt.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(h) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const F of w) {
      const W = Ao(F);
      if (W) return W;
    }
  if (h) {
    const F = Array.isArray(h == null ? void 0 : h.imgs) ? h.imgs : [];
    for (const W of F) {
      const pt = Ao(W);
      if (pt) return pt;
    }
  }
  const N = (bt = h == null ? void 0 : h.widgets) == null ? void 0 : bt.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image"), C = String((N == null ? void 0 : N.value) || "").trim();
  return C ? tn.apiURL(`/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`) : "";
}
function Gf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Kf(t, e, n, i, o, c) {
  if (e.clearRect(0, 0, n, i), e.fillStyle = "#070707", e.fillRect(0, 0, n, i), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || i <= 1) {
    Gf(e, n, i);
    return;
  }
  const u = bb(Number(o.yaw || 0), Number(o.pitch || 0), 0), h = Math.tan(Number(o.fov || 100) * us * 0.5);
  zi({
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
    scene: Vo(null, {}),
    view: Ny(o)
  }) || (cs(t, e, { x: 0, y: 0, w: n, h: i }, u, h, c, $i), Gf(e, n, i));
}
function Wf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class wb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ps({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: $e(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: j(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: j(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, c, u, h;
        const i = (c = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : c.call(o);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((h = this.canvas) == null ? void 0 : h.clientHeight) || 0))
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
        `min-height:${xa}px`,
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
          return xa;
        },
        getHeight() {
          return xa;
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
            minHeight: Math.max(xa, Number(c.minHeight || 0)),
            minWidth: Math.max(vb, Number(c.minWidth || 0))
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
      var c, u, h;
      o.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = e.setPointerCapture) == null || u.call(e, o.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (h = o.stopImmediatePropagation) == null || h.call(o));
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
      return Wf(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var b, p, w, N, C, A;
      const c = Ba(this, n, i, o), u = e.getLegacyPreviewRect();
      if (!c || !Wf(c.x, c.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const h = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((b = e.view) == null ? void 0 : b.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(h));
      return Number(((p = e.view) == null ? void 0 : p.fov) || 100), g && ((w = this.setDirtyCanvas) == null || w.call(this, !0, !1)), (N = n == null ? void 0 : n.preventDefault) == null || N.call(n), (C = n == null ? void 0 : n.stopPropagation) == null || C.call(n), (A = n == null ? void 0 : n.stopImmediatePropagation) == null || A.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, o, c, u;
    const e = Math.max(80, Number(((o = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : o[0]) || 0) - Sc * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Vf - Sc);
    return { x: Sc, y: Vf, w: e, h: n };
  }
  drawLegacy(e) {
    var i, o;
    if (!e || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Kf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, i = Math.max(1, Math.round(e.width * n)), o = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== i || this.canvas.height !== o) && (this.canvas.width = i, this.canvas.height = o, this.requestDraw());
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
    var o, c;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(e);
    this.canvas && this.ctx ? (Kf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (o = this.node).setDirtyCanvas) == null || c.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
          this.node.widgets = this.node.widgets.filter((h) => h !== this.widget);
        } catch {
        }
      this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved, this.node.__panoPreviewNodeRuntime = null;
    }
  }
}
function xb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new wb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function Sb(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(e)}`;
  if (t[i]) return;
  t[i] = !0;
  const o = `[PanoramaPreview:${String(e)}]`, c = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const g = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (b) {
      try {
        console.warn(o, "onNodeCreated wiring skipped:", b);
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
    } catch (b) {
      try {
        console.warn(o, "onConfigure wiring skipped:", b);
      } catch {
      }
    }
    return g;
  };
  const h = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const g = h ? h.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (b) {
      try {
        console.warn(o, "onAdded wiring skipped:", b);
      } catch {
      }
    }
    return g;
  };
}
function Uh(t) {
  return !!(t != null && t.prototype);
}
function Yc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function Nb(t, e = {}) {
  Uh(t) || xb(t, {
    ...e,
    onOpen: Yc(t, e.onOpen)
  });
}
function Mb(t, e = {}) {
  if (!Uh(t)) {
    Ff(t, {
      ...e,
      onOpen: Yc(t, e.onOpen)
    });
    return;
  }
  Sb(t, "cutout_preview", (n) => {
    Ff(n, {
      ...e,
      onOpen: Yc(n, e.onOpen)
    });
  });
}
function Pb(t = {}) {
  const {
    owner: e = null,
    ctx: n = null,
    rect: i = null,
    shot: o = null,
    bgImage: c = null,
    cachePrefix: u = "cutout_preview",
    quality: h = "balanced",
    drawDisplayList: g = null
  } = t;
  if (!n || !i || !o) return !1;
  const b = Pi(o), p = typeof g == "function" ? !!g(n, i, b, c, String(u || "cutout_preview")) : !1, w = !p && !!c && !!wy(
    n,
    e,
    c,
    i,
    o,
    String(h || "balanced")
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
}, nr = "pen";
function qf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function kb(t = 80, e = null, n = 8) {
  const i = [];
  let o = -1;
  const c = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function h(b) {
    if (i.splice(0, i.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((w) => {
      i.push(String(w || ""));
    }), !i.length)) return;
    const p = Number(b.index);
    Number.isInteger(p) ? p === -1 ? o = -1 : o = Math.max(0, Math.min(i.length - 1, p)) : o = i.length - 1;
  }
  function g(b) {
    i[o] !== b && (i.splice(o + 1), i.push(b), i.length > c && i.shift(), o = i.length - 1);
  }
  return h(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      g(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = o - 1;
      return b < 0 || b >= i.length ? null : (o = b, i[o]);
    },
    redo() {
      const b = o + 1;
      return b < 0 || b >= i.length ? null : (o = b, i[o]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const b = i.length, p = Math.max(0, b - u), w = o >= 0 ? Math.min(p, o) : p, N = i.slice(w), C = o < 0 ? -1 : Math.max(-1, Math.min(N.length - 1, o - w));
      return {
        version: 1,
        entries: N,
        index: C
      };
    },
    hydrate: h
  };
}
function oe(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function Cb() {
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
  for (const i of t) {
    if (!i || typeof i != "object") continue;
    const o = String(i.actionGroupId || i.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const c = oe(i.z_index ?? i.zIndex, e.length);
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
function Ib(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Eb(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = oe(t.t, 0), i = oe(t.widthScale, null), o = oe(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const c = oe(t.u, null), u = oe(t.v, null);
    if (c == null || u == null) return null;
    const h = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (h.widthScale = Math.max(0, i)), o != null && (h.pressureLike = Math.max(0, o)), h;
  }
  if (e.kind === "FRAME_LOCAL") {
    const c = oe(t.u, null), u = oe(t.v, null);
    if (c == null || u == null) return null;
    const h = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: c,
      v: u,
      t: n
    };
    return i != null && (h.widthScale = Math.max(0, i)), o != null && (h.pressureLike = Math.max(0, o)), h;
  }
  return null;
}
function Sa(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const i = [];
  for (const o of t) {
    const c = Eb(o, e);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function Tb(t, e, n, i) {
  if (!t || typeof t != "object") return null;
  const o = String(t.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const g = Sa(t.points, e, 3);
    return g ? { geometryKind: o, points: g } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const c = Sa(t.points, e, 1);
  if (!c) return null;
  const u = Sa(t.rawPoints, e, 1), h = Sa(t.processedPoints, e, 1);
  return {
    geometryKind: o,
    points: c,
    rawPoints: u || c.map((g) => ({ ...g })),
    processedPoints: h || c.map((g) => ({ ...g }))
  };
}
function Lb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Ib(t.targetSpace);
  if (!n) return null;
  const i = String(t.toolKind || "").trim(), o = Tb(t.geometry, n, i, e === "paint");
  if (!o) return null;
  const c = oe(t.size, null), u = oe(t.opacity, null);
  if (c == null || u == null) return null;
  const h = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!h || !g) return null;
  const b = oe(t.radiusValue, null), p = String(t.radiusModel || "").trim() || null;
  let w = null;
  if (e === "paint") {
    const N = t.color;
    if (!N || typeof N != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, oe(N.r, 0))),
      g: Math.max(0, Math.min(1, oe(N.g, 0))),
      b: Math.max(0, Math.min(1, oe(N.b, 0))),
      a: Math.max(0, Math.min(1, oe(N.a, 1)))
    };
  }
  return {
    id: h,
    actionGroupId: g,
    targetSpace: n,
    layerKind: e,
    toolKind: i,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: oe(t.hardness, null),
    flow: oe(t.flow, null),
    spacing: oe(t.spacing, null),
    createdAt: Math.trunc(oe(t.createdAt, 0)),
    color: w,
    radiusModel: p,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Yf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const i of t.strokes) {
    const o = Lb(i, e);
    o && n.strokes.push(o);
  }
  return n;
}
function Db(t) {
  if (!t || typeof t != "object") return null;
  const e = oe(t.u0, null), n = oe(t.v0, null), i = oe(t.u1, null), o = oe(t.v1, null);
  if (e == null || n == null || i == null || o == null) return null;
  const c = (h) => Math.max(0, Math.min(1, h)), u = { u0: c(e), v0: c(n), u1: c(i), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Rb(t) {
  const e = t || {};
  return {
    du: oe(e.du, 0) ?? 0,
    dv: oe(e.dv, 0) ?? 0,
    rot_deg: oe(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, oe(e.scale, 1) ?? 1)
  };
}
function Ob(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const i = String(t.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = Db(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, oe(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: Rb(t.transform)
  } : null;
}
function Fb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t) {
    const o = Ob(i, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function Io(t) {
  const e = Cb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: Ab(t.groups),
    paint: Yf(t.paint, "paint"),
    mask: Yf(t.mask, "mask"),
    raster_objects: Fb(t.raster_objects)
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
}, fs = {
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
    const e = t, n = Li(() => {
      const i = { ...e.attrs };
      return e.tag === "button" && i.type == null && (i.type = e.type), e.label && (i["aria-label"] = e.label), e.tip && (i["data-tip"] = e.tip), e.pressed != null && (i["aria-pressed"] = e.pressed), i;
    });
    return (i, o) => (xe(), Vi(b0(t.tag), uh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, $b = { class: "pano-floating-right" }, Hb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), He("div", $b, [
      n[0] || (n[0] = Ie("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (xe(!0), He(Ue, null, Ei(t.buttons, (i) => (xe(), Vi(fs, {
        key: i.action,
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { "data-action": i.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Vb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, zb = ["data-paint-pane"], Ub = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, jb = ["data-paint-color-swatch", "aria-label"], Bb = ["data-paint-footer"], Gb = ["data-paint-group"], Kb = ["hidden"], Wb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, i) => (xe(), He("div", Vb, [
      (xe(!0), He(Ue, null, Ei(t.panes, (o) => (xe(), He("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (xe(), He("div", Ub, [
          (xe(!0), He(Ue, null, Ei(t.paintSwatches, (c) => (xe(), He("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: vs(e(c))
          }, null, 12, jb))), 128)),
          i[0] || (i[0] = lh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Fa("", !0),
        Ie("div", {
          class: "pano-paint-footer",
          "data-paint-footer": o.footer
        }, [
          Ie("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": o.group
          }, [
            (xe(!0), He(Ue, null, Ei(o.tools, (c) => (xe(), Vi(fs, {
              key: `${o.key}-${c.key}`,
              icon: c.icon,
              label: c.label,
              tip: c.tip,
              attrs: { [c.attr]: c.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Gb),
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
            en(fs, {
              icon: dl(ce).clear,
              label: o.clearLabel,
              tip: o.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": o.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Kb)
        ], 8, Bb)
      ], 8, zb))), 128))
    ]));
  }
}, qb = {
  class: "pano-side",
  "data-side": ""
}, Yb = { class: "pano-side-head" }, Xb = ["innerHTML"], Zb = {
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
    const i = Li(() => `<span class="pano-side-title-icon" aria-hidden="true">${ce.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (o, c) => (xe(), He("div", qb, [
      Ie("div", Yb, [
        Ie("div", {
          class: "pano-side-title",
          innerHTML: i.value
        }, null, 8, Xb),
        c[0] || (c[0] = Ie("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = Ie("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Jb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Qb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), He("div", Jb, [
      (xe(!0), He(Ue, null, Ei(t.buttons, (i) => (xe(), Vi(fs, {
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
}, tv = { class: "pano-floating-top" }, ev = ["data-view-count"], nv = ["data-view", "aria-pressed", "aria-label"], rv = ["innerHTML"], iv = { class: "label" }, ov = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), He("div", tv, [
      Ie("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (xe(!0), He(Ue, null, Ei(t.buttons, (i) => (xe(), He("button", {
          key: i.key,
          class: _s(["pano-view-btn", i.extraClass]),
          "data-view": i.key,
          "aria-pressed": i.pressed,
          "aria-label": i.label
        }, [
          Ie("span", {
            innerHTML: i.icon
          }, null, 8, rv),
          Ie("span", iv, fd(i.label), 1)
        ], 10, nv))), 128))
      ], 8, ev)
    ]));
  }
};
function jh(t = "stickers") {
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
const av = ["aria-label"], sv = { class: "pano-stage-wrap" }, cv = ["innerHTML"], lv = {
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
    const h = /* @__PURE__ */ Um(null), g = Li(() => n.readOnly === !0), b = Li(() => n.shellPreset || jh(n.type)), p = Li(() => {
      var V;
      const D = Array.isArray((V = b.value) == null ? void 0 : V.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return g.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ce.fullscreen
      }), D;
    });
    function w() {
      const D = h.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((V) => V instanceof HTMLElement ? !V.hidden && V.tabIndex >= 0 && V.offsetParent !== null : !1) : [];
    }
    function N() {
      var R;
      const V = w()[0] || h.value;
      (R = V == null ? void 0 : V.focus) == null || R.call(V);
    }
    function C() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function A(D) {
      var V, R, M, Q;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const at = w();
          if (!at.length) {
            D.preventDefault(), (R = (V = h.value) == null ? void 0 : V.focus) == null || R.call(V);
            return;
          }
          const tt = at[0], bt = at[at.length - 1], F = document.activeElement;
          if (D.shiftKey) {
            (F === tt || F === h.value || !((M = h.value) != null && M.contains(F))) && (D.preventDefault(), bt.focus());
            return;
          }
          (F === bt || !((Q = h.value) != null && Q.contains(F))) && (D.preventDefault(), tt.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function k() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function H() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function O(D) {
      document.removeEventListener("keydown", A), D ? (u || (u = document.activeElement), k(), document.addEventListener("keydown", A), Ad(() => {
        N();
      })) : (H(), C());
    }
    return Hd(() => {
      O(n.open);
    }), Vd(() => {
      H(), document.removeEventListener("keydown", A), C();
    }), Da(() => n.open, (D) => {
      O(D);
    }), (D, V) => t.open ? (xe(), He("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: V[0] || (V[0] = I1((R) => i("close"), ["self"]))
    }, [
      Ie("section", {
        ref_key: "modalRef",
        ref: h,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        Ie("div", sv, [
          V[1] || (V[1] = lh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Fa("", !0) : (xe(), He(Ue, { key: 0 }, [
            en(Qb, {
              buttons: b.value.toolButtons || []
            }, null, 8, ["buttons"]),
            en(Wb, {
              "paint-swatches": t.paintSwatches,
              panes: b.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          en(ov, {
            buttons: b.value.viewButtons || []
          }, null, 8, ["buttons"]),
          en(Hb, { buttons: p.value }, null, 8, ["buttons"]),
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
            innerHTML: dl(ce).fullscreen
          }, null, 8, cv),
          V[3] || (V[3] = Ie("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Fa("", !0) : (xe(), Vi(Zb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, av)
    ])) : Fa("", !0);
  }
}, Xc = "state_json", Or = "sticker_image_1", Nc = "external_image", Mc = "pano_sticker_input_images", Ga = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Fe = Math.PI / 180, Vr = 180 / Math.PI, ds = 24, uv = 4, fv = 4, vo = /* @__PURE__ */ new Map(), Zc = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), Dt = {
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
function dv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function hv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function pv(t) {
  return t * t * t;
}
function Kn(t, e, n) {
  return { x: t, y: e, z: n };
}
function Na(t, e) {
  return Kn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ma(t, e) {
  return Kn(t.x * e, t.y * e, t.z * e);
}
function xn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Pa(t, e) {
  return Kn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function yi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Kn(t.x / e, t.y / e, t.z / e);
}
function $n(t, e) {
  const n = t * Fe, i = e * Fe, o = Math.cos(i);
  return Kn(o * Math.sin(n), Math.sin(i), o * Math.cos(n));
}
function ka(t) {
  return {
    yaw: $e(Math.atan2(t.x, t.z) * Vr),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Vr, -90, 90)
  };
}
function rr(t, e) {
  let n = !1;
  for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
    const c = e[i].x, u = e[i].y, h = e[o].x, g = e[o].y;
    u > t.y != g > t.y && t.x < (h - c) * (t.y - u) / (g - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function Hr(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return n * n + i * i;
}
function Pc(t, e, n) {
  const i = Number(n.x || 0) - Number(e.x || 0), o = Number(n.y || 0) - Number(e.y || 0), c = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), h = i * i + o * o;
  if (h <= 1e-6) return Hr(t, e);
  const g = j((c * i + u * o) / h, 0, 1), b = Number(e.x || 0) + i * g, p = Number(e.y || 0) + o * g, w = Number(t.x || 0) - b, N = Number(t.y || 0) - p;
  return w * w + N * N;
}
function Sn(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function gv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Ca = { fillStyle: "", url: "" };
function mv(t, e, n) {
  if (Ca.url && Ca.fillStyle === String(t || ""))
    return Ca.url;
  const i = gv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ds}" height="${ds}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ca = { fillStyle: String(t || ""), url: i }, i;
}
function Ka(t, e, n = 0.015) {
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
function Ze(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function yv(t) {
  return Ga.some((e) => Ka(t, e.color));
}
function kc(t, e, n) {
  const i = (Number(t) % 1 + 1) % 1, o = j(Number(e), 0, 1), c = j(Number(n), 0, 1);
  if (o <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), h = i * 6 - u, g = c * (1 - o), b = c * (1 - h * o), p = c * (1 - (1 - h) * o);
  switch (u % 6) {
    case 0:
      return { r: c, g: p, b: g };
    case 1:
      return { r: b, g: c, b: g };
    case 2:
      return { r: g, g: c, b: p };
    case 3:
      return { r: g, g: b, b: c };
    case 4:
      return { r: p, g, b: c };
    default:
      return { r: c, g, b };
  }
}
function ho(t) {
  const e = j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), i = j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), o = Math.max(e, n, i), c = Math.min(e, n, i), u = o - c;
  let h = 0;
  u > 1e-6 && (o === e ? h = ((n - i) / u + (n < i ? 6 : 0)) / 6 : o === n ? h = ((i - e) / u + 2) / 6 : h = ((e - n) / u + 4) / 6);
  const g = o <= 1e-6 ? 0 : u / o;
  return { h, s: g, v: o };
}
function Cc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Xf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Bh(t, e) {
  const n = Xf(t, 1), i = Xf(e, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(i * o)), h = (w, N) => N ? h(N, w % N) : w, g = h(c, u) || 1, b = Math.max(1, Math.round(c / g)), p = Math.max(1, Math.round(u / g));
  return `${b}:${p}`;
}
function Jc(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Fe, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Fe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function bv(t) {
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
function zr(t) {
  const e = Jc(t);
  return bv(e) || Bh(e, 1);
}
function vv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = zr(e), e;
}
function bi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : zr(t);
}
let Aa = null;
function _v() {
  return Aa || (Aa = new Promise((t) => {
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
  }), Aa);
}
const Gh = "pano_suite.ui_settings.v1", Kh = "pano_suite.node_grid_visibility.v1";
let Si = null, Hn = null, Ia = { text: null, parsed: null };
function Eo(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function wv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Gh)) || "").trim();
    if (!e) return Si ? Eo(Si) : null;
    const n = JSON.parse(e), i = Eo(n);
    return Si = i, i;
  } catch {
    return Si ? Eo(Si) : null;
  }
}
function xv(t) {
  var n;
  const e = Eo(t);
  Si = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Gh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Wh() {
  var t;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Kh)) || "").trim();
    if (!e)
      return Hn = {}, Hn;
    const n = JSON.parse(e);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function Sv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = Wh()[n];
  return typeof o == "boolean" ? o : !!e;
}
function Nv(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const i = Wh();
  i[n] = !!e, Hn = i;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Kh, JSON.stringify(i));
  } catch {
  }
}
function Mv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, i]) => {
    e[n] = i && typeof i == "object" ? { ...i } : i;
  }), e;
}
function Pv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function kv(t) {
  var i, o;
  const e = Array.isArray((i = t == null ? void 0 : t.paint) == null ? void 0 : i.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Zf(t) {
  const { paintCount: e, maskCount: n } = kv(t), i = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function vi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Jf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Cv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : vv(e)) : [];
}
function Av(t, e = 2048, n = "#00ff00") {
  const i = wv(), o = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Io(null),
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
    if (Ia.text === c ? u = Ia.parsed : (u = JSON.parse(c), Ia = { text: c, parsed: u }), !u || typeof u != "object" || Array.isArray(u)) return o;
    const h = {
      ...o,
      ...u,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Mv(u.assets),
      stickers: Pv(u.stickers),
      shots: Cv(u.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Io(u.painting),
      painting_layer: u.painting_layer && typeof u.painting_layer == "object" ? u.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(u.ui_settings && u.ui_settings.invert_view_x),
        invert_view_y: !!(u.ui_settings && u.ui_settings.invert_view_y),
        preview_quality: (() => {
          var b;
          const g = String(((b = u.ui_settings) == null ? void 0 : b.preview_quality) || "balanced");
          return g === "draft" || g === "balanced" || g === "high" ? g : "balanced";
        })()
      },
      active: u.active && typeof u.active == "object" ? { ...u.active } : { ...o.active }
    };
    return i && (h.ui_settings = Eo({ ...h.ui_settings, ...i })), delete h.editor_history, h;
  } catch {
    return Ia = { text: c, parsed: null }, o;
  }
}
function ki(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function Ea(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Iv(t, e) {
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
function Ev(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((i) => {
    var c, u;
    const o = String((i == null ? void 0 : i.name) || "");
    (o === e || o.trim() === e || o.toLowerCase().includes(String(e).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.inputEl) != null && c.style && (i.inputEl.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Qc(t, e, n) {
  var c, u;
  if (!t || typeof t.addWidget != "function") return null;
  let o = (Array.isArray(t.widgets) ? t.widgets : []).find((h) => String((h == null ? void 0 : h.name) || "") === String(e));
  return o ? (o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", (c = o.inputEl) != null && c.style && (o.inputEl.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = ""), (typeof o.computeSize != "function" || o.computeSize() == null || o.hidden) && (o.computeSize = () => {
    var h;
    return [Math.max(120, Number(((h = t == null ? void 0 : t.size) == null ? void 0 : h[0]) || 0) - 20), 30];
  }), o) : (o = t.addWidget("button", e, null, n), o && (o.serialize = !1), o);
}
function po(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Qf(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(i);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function Tv() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function td(t, e) {
  Tv() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function qh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Lv(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
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
function Dv(t, e, n = null) {
  var o, c;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((o = i == null ? void 0 : i.isSubgraphNode) != null && o.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, h = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      h != null && h.outputNode && (i = h.outputNode);
    } catch {
    }
  return !i && n != null && (i = Lv(t == null ? void 0 : t.graph, n)), i;
}
function hs(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((o = tn) == null ? void 0 : o.apiURL) == "function" ? tn.apiURL(i) : i;
}
function Rv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Ov(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const o = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: o, subfolder: c };
}
function Fv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const o = String(i || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Xh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Rv(e)) return [e];
  const { filename: n, subfolder: i } = Ov(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => hs({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Fv([...o, e]);
}
function $v(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? hs({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function To(t) {
  var i;
  const e = (i = pn) == null ? void 0 : i.nodeOutputs;
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
      const n = String(t[1] || "").trim(), i = String(t[2] || "output").trim() || "output";
      return hs({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Hi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : hs(t);
}
function Hv(t, e = -1) {
  var o;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((o = t == null ? void 0 : t.ui) == null ? void 0 : o.images) && t.ui.images.length && n.push(t.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (e >= 0 && e < c.length && i.push(c[e]), i.push(...c));
  return i;
}
function Ac(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t || []) {
    const o = Hi(i);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function Vv(t, e, n, i = null) {
  var w;
  const o = To(t == null ? void 0 : t.id), c = Array.isArray((w = o == null ? void 0 : o.ui) == null ? void 0 : w[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, h = Hi(u);
  if (!h) return null;
  const g = `__ui__${e}`, b = n.get(g);
  if (b && b.__panoSrc === h) return b;
  const p = new Image();
  return p.__panoSrc = h, p.onload = () => {
    typeof i == "function" && i(p);
  }, p.src = h, n.set(g, p), p;
}
function zv(t, e) {
  var D, V;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = i.findIndex((R) => String((R == null ? void 0 : R.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const h = qh(t.graph, u), { originId: g, originSlot: b } = Yh(h);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const p = Dv(t, o, g), w = Number(b || 0);
  if (!p) return { src: "", sourceType: "", inputName: n };
  let N = [];
  try {
    N = typeof ((D = pn) == null ? void 0 : D.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(p) || [] : [];
  } catch {
    N = [];
  }
  if (Array.isArray(N) && N.length) {
    const R = [];
    w >= 0 && w < N.length && R.push(N[w]), R.push(...N);
    const M = Ac(R);
    if (M.length) return { src: M[0], srcCandidates: M, sourceType: "appNodeImageUrls", inputName: n };
  }
  const C = To((p == null ? void 0 : p.id) ?? g), A = Hv(C, w), k = Ac(A);
  if (k.length) return { src: k[0], srcCandidates: k, sourceType: "nodeOutputs", inputName: n };
  const H = Array.isArray(p == null ? void 0 : p.imgs) ? p.imgs : [];
  if (H.length) {
    const R = [];
    w >= 0 && w < H.length && R.push(H[w]), R.push(...H);
    const M = Ac(R);
    if (M.length) return { src: M[0], srcCandidates: M, sourceType: "nodeImgs", inputName: n };
  }
  const O = (V = p == null ? void 0 : p.widgets) == null ? void 0 : V.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
  if (O) {
    let R = Hi(O.value);
    if (R && !R.includes("/") && !R.includes(":") && (p.comfyClass === "LoadImage" || p.type === "LoadImage") && (R = tn.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R) return { src: R, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Uv(t, e, n, i = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = Xh(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), h = t.__panoLinkedInputImageCache.get(u);
  if (h && h.srcRaw === o && h.img) return h.img;
  const g = new Image(), b = { srcRaw: o, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, b);
  let p = -1;
  const w = () => {
    var C, A;
    if (p += 1, p >= c.length) {
      try {
        (A = (C = t.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || A.call(C, u);
      } catch {
      }
      return;
    }
    const N = c[p];
    b.resolvedSrc = N, g.src = N;
  };
  return g.onload = () => {
    var N;
    i == null || i(), (N = t.setDirtyCanvas) == null || N.call(t, !0, !0);
  }, g.onerror = () => {
    var N, C;
    if (p + 1 < c.length) {
      w();
      return;
    }
    try {
      (C = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || C.call(N, u);
    } catch {
    }
  }, w(), g;
}
function jv(t, e, n, i = null) {
  const o = Array.isArray(n) ? n.map((A) => String(A || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), h = t.__panoLinkedInputImageCache.get(c);
  if (h && h.srcRaw === u && h.img) return h.img;
  const g = [], b = /* @__PURE__ */ new Set();
  if (o.forEach((A) => {
    Xh(A).forEach((k) => {
      const H = String(k || "").trim();
      !H || b.has(H) || (b.add(H), g.push(H));
    });
  }), !g.length) return null;
  const p = new Image(), w = { srcRaw: u, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(c, w);
  let N = -1;
  const C = () => {
    var k, H;
    if (N += 1, N >= g.length) {
      try {
        (H = (k = t.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || H.call(k, c);
      } catch {
      }
      return;
    }
    const A = g[N];
    w.resolvedSrc = A, p.src = A;
  };
  return p.onload = () => {
    var A;
    i == null || i(), (A = t.setDirtyCanvas) == null || A.call(t, !0, !0);
  }, p.onerror = () => {
    var A, k;
    if (N + 1 < g.length) {
      C();
      return;
    }
    try {
      (k = (A = t.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || k.call(A, c);
    } catch {
    }
  }, C(), p;
}
function Zh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const i of n) {
    const o = zv(t, i);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function ed(t, e = [], n = null, i = "") {
  const o = Array.isArray(e) ? e : [e], c = Zh(t, o), u = String(i || o.join("|") || "image_exact"), h = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (h.length) return jv(t, u, h, n);
  const g = String((c == null ? void 0 : c.src) || "").trim();
  return g ? Uv(t, u, g, n) : null;
}
async function Lo(t, e, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, u = Iv(t, e);
  await _v();
  const h = ki(t, "output_preset"), g = ki(t, "bg_color"), b = ki(t, Xc), p = Av(
    String((b == null ? void 0 : b.value) || ""),
    Qf(h == null ? void 0 : h.value, 2048),
    String((g == null ? void 0 : g.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = document.createElement("div");
  document.body.appendChild(w);
  const N = L1(lv, {
    open: !0,
    type: e,
    readOnly: i,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: jh(e),
    paintSwatches: Ga.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Nn(r.color, 1)
    })),
    onClose: () => ui()
  });
  try {
    N.mount(w);
  } catch (r) {
    try {
      N.unmount();
    } catch {
    }
    throw w.remove(), r;
  }
  const C = w.querySelector(".pano-modal-overlay"), A = w.querySelector(".pano-modal"), k = A == null ? void 0 : A.querySelector("[data-stage-overlay]"), H = A == null ? void 0 : A.querySelector("[data-stage-background]"), O = A == null ? void 0 : A.querySelector(".pano-stage-wrap");
  if (!C || !A || !k || !H || !O)
    throw N.unmount(), w.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const D = document.createElement("div");
  D.setAttribute("aria-hidden", "true"), D.style.position = "absolute", D.style.left = "0", D.style.top = "0", D.style.pointerEvents = "none", D.style.zIndex = "12", D.style.display = "none", D.style.willChange = "transform,width,height,background,border-radius", O == null || O.appendChild(D);
  const V = document.createElement("div");
  V.className = "pano-paint-size-preview", V.setAttribute("aria-hidden", "true");
  const R = document.createElement("div");
  R.className = "pano-paint-size-preview-sample", V.appendChild(R), O == null || O.appendChild(V);
  const M = k.getContext("2d"), Q = gh({ targetCanvas: H }), at = A.querySelector("[data-side]"), tt = A.querySelectorAll("[data-view]"), bt = A.querySelector(".pano-view-toggle"), F = A.querySelector("[data-fov-value]"), W = A.querySelector("[data-selection-menu]"), pt = A.querySelector("[data-action='toggle-output-preview-size']"), ft = A.querySelector("[data-tool-ui-action='add-or-look']"), it = A.querySelector("[data-view='frame']"), G = A.querySelector("[data-action='toggle-fullscreen']"), et = A.querySelector("[data-tooltip]"), rt = A.querySelector("[data-tool-rail]"), gt = A.querySelector("[data-paint-dock]"), St = Array.from(A.querySelectorAll("[data-paint-pane]")), At = A.querySelector("[data-paint-color-row]"), X = A.querySelector("[data-paint-color-pop]"), Nt = A.querySelector("[data-paint-color-preview]"), Ut = A.querySelector("[data-paint-color-sv]"), he = A.querySelector("[data-paint-color-sv-cursor]"), pe = A.querySelector("[data-paint-hue-strip]"), Se = A.querySelector("[data-paint-hue-handle]"), U = A.querySelector("[data-paint-alpha-slider]"), kt = A.querySelector("[data-paint-alpha-value]"), Mt = A.querySelector("[data-paint-color-history-wrap]"), Rt = A.querySelector("[data-paint-color-history]"), jt = Array.from(A.querySelectorAll("[data-paint-size-row]")), I = Array.from(A.querySelectorAll("[data-paint-clear-row]")), L = Array.from(A.querySelectorAll("[data-paint-layer-clear-current]")), z = Array.from(A.querySelectorAll("[data-paint-size-slider]")), J = Array.from(A.querySelectorAll("[data-paint-size-value]"));
  let q = 0, Y = 0;
  O == null || O.removeAttribute("data-stage-ready"), O == null || O.setAttribute("data-stage-loading-kind", "boot"), k.style.opacity = "1", H.style.opacity = "0", o && (at == null || at.remove(), A.classList.add("pano-modal-readonly"));
  function nt(r) {
    gt && gt.classList.toggle("is-hidden", !r);
  }
  const ct = () => {
    if (!f.customPaintSessionStart) return;
    if (Ka(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (yv(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const r = [
      fn(f.customPaintColor),
      ...f.customPaintHistory.filter((a) => !Ka(a, f.customPaintColor))
    ];
    f.customPaintHistory = r.slice(0, 8), f.customPaintSessionStart = null;
  }, dt = (r = !1) => {
    !X || X.hidden || (r ? ct() : f.customPaintSessionStart = null, X.hidden = !0);
  }, ot = () => {
    X && (X.hidden && (f.customPaintSessionStart = fn(f.customPaintColor)), X.hidden = !1);
  };
  A.addEventListener("pointerdown", (r) => {
    sa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), dt(!0), e === "cutout" && f.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, Gt(), ht())));
  });
  const Et = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, xt = JSON.stringify(Jf(p)), f = {
    mode: "pano",
    selectedId: Et,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: kb(80, { entries: [xt], index: 0 }),
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
    paintEngine: zc(),
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
  const Ct = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Pt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, ee = {
    timer: 0,
    target: null
  }, Ne = {
    active: !1,
    depth: 0
  };
  function rn(r) {
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
    return a.files && a.files.length ? Array.from(a.files).some((s) => ra(s)) : !1;
  }
  function cn(r) {
    const a = !!r;
    Ne.active !== a && (Ne.active = a, O.classList.toggle("drop-active", a));
  }
  function Jr(r, a, s = f.viewFov, l = 140, d = 620) {
    const m = uy(f.viewYaw, r), _ = a - f.viewPitch, y = s - f.viewFov, v = Math.hypot(m, _) + Math.abs(y) * 0.6, S = Math.round(j(l + v * 2.2, l, d));
    f.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: f.viewYaw,
      startPitch: f.viewPitch,
      startFov: f.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: m
    }, f.viewInertia.active = !1, f.viewInertia.vx = 0, f.viewInertia.vy = 0, ht();
  }
  Np();
  function Me() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function se() {
    const r = p.painting || (p.painting = Io(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Bo(r = "paint") {
    var d, m;
    const a = Array.isArray((m = (d = p.painting) == null ? void 0 : d[r]) == null ? void 0 : m.strokes) ? p.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const y = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !y || l.has(y) || (l.add(y), s.push(y));
    }
    return s;
  }
  function Go() {
    return Bo("paint");
  }
  function Ui(r, a) {
    const s = String(a || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function ji(r) {
    const a = String(r || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ke(r) {
    const a = String(r || "").trim();
    if (!a) return "";
    const s = a.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : a).trim();
  }
  function Bi(r, a = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function ks() {
    var a;
    let r = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of se())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Ml(r, a = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = se();
    let d = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return d ? a != null && (d.z_index = Math.max(0, Number(a || 0))) : (d = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? ks() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Jh() {
    const r = new Set(Go()), s = se().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: ks(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), p.painting.groups = s, s;
  }
  function Qh(r, a, s) {
    const l = [];
    for (const T of s) {
      const $ = T == null ? void 0 : T.geometry, B = ($ == null ? void 0 : $.geometryKind) === "lasso_fill" ? $ == null ? void 0 : $.points : ($ == null ? void 0 : $.processedPoints) || ($ == null ? void 0 : $.rawPoints) || ($ == null ? void 0 : $.points) || [];
      Array.isArray(B) && l.push(...B);
    }
    if (!l.length) return null;
    let d = 0, m = 0;
    l.forEach((T) => {
      d += Number((T == null ? void 0 : T.u) || 0), m += Number((T == null ? void 0 : T.v) || 0);
    });
    const _ = d / l.length;
    let y = 1 / 0, v = -1 / 0, S = 1 / 0, x = -1 / 0;
    l.forEach((T) => {
      const $ = Wi(Number((T == null ? void 0 : T.u) || 0), _);
      y = Math.min(y, $), v = Math.max(v, $);
      const B = Number((T == null ? void 0 : T.v) || 0);
      S = Math.min(S, B), x = Math.max(x, B);
    });
    const P = s.reduce((T, $) => {
      const B = yr(String(($ == null ? void 0 : $.toolKind) || "pen")), Z = on[B] || on[nr], st = Math.max(1, Number(($ == null ? void 0 : $.size) || 10)) * Math.max(0.1, Number((Z == null ? void 0 : Z.sizeScale) ?? 1));
      return Math.max(T, st);
    }, 0), E = Math.max(35e-4, P / 2048);
    return {
      centerUv: { u: ((_ + (y + v) * 0.5) % 1 + 1) % 1, v: j((S + x) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - y) * 0.5 + E,
      halfH: (x - S) * 0.5 + E,
      uvPad: E
    };
  }
  function Cr(r, a, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const d = se().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!d) return null;
    if (!d.frame) {
      const m = s || yn(l, a);
      d.frame = Qh(l, a, m);
    }
    return d.frame;
  }
  function Ar() {
    var l;
    const r = (Array.isArray(p.stickers) ? p.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), a = Jh().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), s = (Array.isArray((l = p.painting) == null ? void 0 : l.raster_objects) ? p.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...r, ...a, ...s].sort((d, m) => Number(d.z_index || 0) - Number(m.z_index || 0));
  }
  function Gi(r = !0) {
    var s, l, d, m, _, y;
    const a = Ar().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (r) {
      const v = String(((l = (s = f.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((m = (d = f.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), x = String(((y = (_ = f.interaction) == null ? void 0 : _.stroke) == null ? void 0 : y.toolKind) || "").trim();
      v && S === "paint" && x !== "eraser" && !a.includes(v) && a.push(v);
    }
    return a;
  }
  function Cs(r = !0) {
    var y, v, S, x, P, E;
    const a = Ar();
    if (!r) return a;
    const s = String(((v = (y = f.interaction) == null ? void 0 : y.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((x = (S = f.interaction) == null ? void 0 : S.stroke) == null ? void 0 : x.layerKind) || "").trim(), d = String(((E = (P = f.interaction) == null ? void 0 : P.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || d === "eraser" || a.some((T) => T.type === "strokeGroup" && String(T.actionGroupId || "") === s))
      return a;
    const m = ve();
    let _ = a.reduce((T, $) => Math.max(T, Number(($ == null ? void 0 : $.z_index) || 0)), -1) + 1;
    return m && Te(m) && String(m.actionGroupId || "") === s && (_ = Number(m.z_index || 0)), [
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
  function tp() {
    return se().slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => ti(Ui("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ep() {
    var r;
    return (Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => Qr(ji((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Ko(r = f.interaction) {
    const a = String((r == null ? void 0 : r.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Pl(r = f.interaction) {
    if (e !== "cutout") return !1;
    const a = String((r == null ? void 0 : r.kind) || "");
    return Ko(r) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function np(r = f.interaction) {
    if (!Pl(r)) return 0;
    const a = String((r == null ? void 0 : r.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function Ki() {
    var d, m, _, y, v, S, x;
    const r = f.interaction, a = String((r == null ? void 0 : r.kind) || "");
    if (!Ko(r)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const P = ((d = r == null ? void 0 : r.stroke) == null ? void 0 : d.geometry) || null, E = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), T = ((_ = P == null ? void 0 : P.rawPoints) == null ? void 0 : _.length) ?? ((y = P == null ? void 0 : P.points) == null ? void 0 : y.length) ?? 0, $ = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${E || "paint"}_${a}_live${$}_${T}_${f.livePaintInteractionRevision}`;
    }
    const s = String(((v = r == null ? void 0 : r.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((x = r == null ? void 0 : r.item) == null ? void 0 : x.id) || "");
    return `_${a}_${s || l || "active"}_${f.livePaintInteractionRevision}`;
  }
  function As() {
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
  function Qr(r) {
    const a = Ke(r);
    if (!a) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: ji(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function We(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const a = Ke(r.rasterObjectId || r.id || "");
    return !!a && !!Qr(ji(a));
  }
  function ti(r) {
    const a = Bi(r), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = se().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === s || String((d == null ? void 0 : d.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Ui("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Te(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const a = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!a && !!ti(Ui(s, a));
  }
  function yn(r, a = null) {
    const s = Bi(r, a), l = String(s.actionGroupId || "").trim();
    return l ? li(s.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function rp(r, a = "paint") {
    var m, _, y;
    const s = String(r || "").trim(), d = `${String(a || "paint").trim() || "paint"}:${s}:${f.mode}:${Tr()}`;
    if (f.mode === "frame") {
      const v = re(), S = String((v == null ? void 0 : v.id) || ""), x = v ? Ye(v) : null;
      return `${d}:frame:${S}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}:${Math.round(Number(((m = f.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = f.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((y = f.frameView) == null ? void 0 : y.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((k == null ? void 0 : k.width) || 0))}:${Math.round(Number((k == null ? void 0 : k.height) || 0))}`;
  }
  function Wo(r, a, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: j(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Wi(r, a) {
    let s = Number(r || 0) - Number(a || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function kl(r, a = null, s = null) {
    var S;
    const l = Bi(r, a), d = Array.isArray(s) ? s : yn(l.actionGroupId, l.layerKind), m = [];
    if (d.forEach((x) => {
      const P = (x == null ? void 0 : x.geometry) || null, E = (P == null ? void 0 : P.geometryKind) === "lasso_fill" ? P == null ? void 0 : P.points : (P == null ? void 0 : P.processedPoints) || (P == null ? void 0 : P.rawPoints) || (P == null ? void 0 : P.points) || [];
      Array.isArray(E) && m.push(...E);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = m[0]) == null ? void 0 : S.u) || 0);
    let y = 0, v = 0;
    return m.forEach((x) => {
      y += _ + Wi(Number((x == null ? void 0 : x.u) || 0), _), v += Number((x == null ? void 0 : x.v) || 0);
    }), {
      u: (y / m.length % 1 + 1) % 1,
      v: j(v / m.length, 0, 1)
    };
  }
  function qo(r, a, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), _ = Wi(Number(r.u || 0), d), y = Number(r.v || 0) - m, v = Number(l || 0) * Fe, S = Math.cos(v), x = Math.sin(v), P = Math.max(0.02, Number(s || 1)), E = (_ * S - y * x) * P, T = (_ * x + y * S) * P;
    return {
      ...r,
      u: ((d + E) % 1 + 1) % 1,
      v: j(m + T, 0, 1)
    };
  }
  function Cl(r, a, s, l = null, d = null, m = null) {
    const _ = Bi(r, d), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const v = li(_.layerKind), S = Array.isArray(l) ? new Map(l.map((P) => [String((P == null ? void 0 : P.id) || ""), P])) : null;
    let x = !1;
    if (v.forEach((P) => {
      if (String((P == null ? void 0 : P.actionGroupId) || "").trim() !== y) return;
      const E = (S == null ? void 0 : S.get(String((P == null ? void 0 : P.id) || ""))) || P, T = P == null ? void 0 : P.geometry, $ = E == null ? void 0 : E.geometry;
      !T || !$ || (Array.isArray($.points) && (T.points = $.points.map((B) => Wo(B, a, s)), x = !0), Array.isArray($.rawPoints) && (T.rawPoints = $.rawPoints.map((B) => Wo(B, a, s)), x = !0), Array.isArray($.processedPoints) && (T.processedPoints = $.processedPoints.map((B) => Wo(B, a, s)), x = !0));
    }), x && m) {
      const P = se().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === y);
      P && (P.frame = {
        ...m,
        centerUv: {
          u: ((m.centerUv.u + a) % 1 + 1) % 1,
          v: j(m.centerUv.v + s, 0, 1)
        }
      });
    }
    return x;
  }
  function Al(r, a = 1, s = 0, l = null, d = null, m = null) {
    const _ = Bi(r, d), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const v = li(_.layerKind), S = Array.isArray(l) ? l : yn(y, _.layerKind), x = Array.isArray(S) ? new Map(S.map((T) => [String((T == null ? void 0 : T.id) || ""), T])) : null, P = (m == null ? void 0 : m.centerUv) ?? kl(y, _.layerKind, S);
    let E = !1;
    if (v.forEach((T) => {
      if (String((T == null ? void 0 : T.actionGroupId) || "").trim() !== y) return;
      const $ = (x == null ? void 0 : x.get(String((T == null ? void 0 : T.id) || ""))) || T, B = T == null ? void 0 : T.geometry, Z = $ == null ? void 0 : $.geometry;
      !B || !Z || (Array.isArray(Z.points) && (B.points = Z.points.map((st) => qo(st, P, a, s)), E = !0), Array.isArray(Z.rawPoints) && (B.rawPoints = Z.rawPoints.map((st) => qo(st, P, a, s)), E = !0), Array.isArray(Z.processedPoints) && (B.processedPoints = Z.processedPoints.map((st) => qo(st, P, a, s)), E = !0));
    }), E && m) {
      const T = Number(a || 1), $ = se().find((B) => String((B == null ? void 0 : B.actionGroupId) || "") === y);
      $ && ($.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(s || 0),
        halfW: m.halfW * T,
        halfH: m.halfH * T,
        uvPad: m.uvPad
      });
    }
    return E;
  }
  function Il(r, a, s, l = null) {
    const d = Ke(r);
    if (!d) return !1;
    const m = ln().find((x) => String((x == null ? void 0 : x.id) || "").trim() === d);
    if (!m) return !1;
    const _ = l && typeof l == "object" ? l : m, y = (_ == null ? void 0 : _.transform) || {}, v = Number(y.du || 0) + Number(a || 0), S = j(Number(y.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = S, !0;
  }
  function ve() {
    const r = String(f.selectedId || "");
    if (!r) return null;
    const a = ti(r);
    if (a) return a;
    const s = Qr(r);
    return s || (e === "cutout" ? As().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Me().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function An() {
    const r = Array.isArray(f.selectedIds) && f.selectedIds.length ? f.selectedIds : f.selectedId ? [f.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || s.has(d)) return;
      s.add(d);
      const m = d === String(f.selectedId || "") ? ve() : ti(d) || Qr(d) || (e === "cutout" ? As().find((_) => String((_ == null ? void 0 : _.id) || "") === d) : Me().find((_) => String((_ == null ? void 0 : _.id) || "") === d));
      m && a.push(m);
    }), a;
  }
  function Is(r = null) {
    const a = Array.isArray(r) ? r : An();
    if (!a || a.length < 2) return null;
    const s = a.map((S) => Re(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((x) => Number((x == null ? void 0 : x.x) || 0))), d = s.flatMap((S) => S.corners.map((x) => Number((x == null ? void 0 : x.y) || 0))), m = Math.min(...l), _ = Math.max(...l), y = Math.min(...d), v = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (y + v) * 0.5 },
      corners: [
        { x: m, y },
        { x: _, y },
        { x: _, y: v },
        { x: m, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y, a: { x: m, y }, b: { x: _, y } },
        { edge: "right", x: _, y: (y + v) * 0.5, a: { x: _, y }, b: { x: _, y: v } },
        { edge: "bottom", x: (m + _) * 0.5, y: v, a: { x: _, y: v }, b: { x: m, y: v } },
        { edge: "left", x: m, y: (y + v) * 0.5, a: { x: m, y: v }, b: { x: m, y } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y },
      rotateHandle: { x: (m + _) * 0.5, y: y - 30 }
    };
  }
  function ip(r) {
    const a = String((r == null ? void 0 : r.id) || "").trim();
    return !!a && Array.isArray(f.selectedIds) && f.selectedIds.includes(a);
  }
  function El() {
    const r = ve();
    return r ? Te(r) || We(r) ? "stroke" : mn(r) ? "frame" : "image" : null;
  }
  function fr(r) {
    if (!r || typeof r != "object") return !1;
    if (Te(r)) {
      const a = String(r.actionGroupId || r.id || "").trim(), s = se().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (We(r)) {
      const a = Ke(r.rasterObjectId || r.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Es(r = null) {
    const a = Array.isArray(r) ? r : An();
    return a.length > 0 && a.every((s) => fr(s));
  }
  function op(r, a) {
    const s = a === !0;
    if (!r || typeof r != "object") return !1;
    if (Te(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), d = se().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    if (We(r)) {
      const l = Ke(r.rasterObjectId || r.id || ""), d = ln().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function ap() {
    if (i) return;
    const r = An();
    if (!r.length) return;
    const a = !Es(r);
    let s = !1;
    r.forEach((l) => {
      op(l, a) && (s = !0);
    }), s && (le(), Pe(), Gt(), ht());
  }
  function qi(r) {
    f.selectedId = (r == null ? void 0 : r.id) || null, f.selectedIds = r != null && r.id ? [r.id] : [], r && De(r) ? p.active.selected_sticker_id = r.id || null : p.active.selected_sticker_id = null, r && mn(r) ? p.active.selected_shot_id = r.id || null : r ? mn(r) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function sp(r, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((_) => {
      const y = String((_ == null ? void 0 : _.id) || "").trim();
      !y || l.has(y) || (l.add(y), s.push(y));
    }), f.selectedIds = s;
    const d = String(a || "").trim();
    f.selectedId = d && s.includes(d) ? d : s[s.length - 1] || null;
    const m = ve();
    p.active.selected_sticker_id = m && De(m) && m.id || null, m && mn(m) ? p.active.selected_shot_id = m.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function cp() {
    const r = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var m, _;
      const d = Ce(s) ? String(s.id || Or) : String(((_ = (m = p.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: d
      };
    });
    return [...r, ...a];
  }
  function lp(r) {
    return r === "frame" ? Dt.camera : r === "stroke" ? Dt.paintbrush_vertical_tool : Dt.image;
  }
  function Tl(r) {
    return !r || !r.item ? Ea(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${lp(r.kind)}</span><span>${Ea(String(r.label || ""))}</span>`;
  }
  function Ll() {
    return ks();
  }
  function Ce(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Or || String(r.source_kind || "") === Nc;
  }
  function ei(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function up(r) {
    return Ce(r) && ei(r) ? vh : 1;
  }
  function fp() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
  }
  function dp() {
    return String(fp() || "") === "lasso_fill";
  }
  function hp() {
    if (i) return;
    const r = ve();
    !r || !Ce(r) || (r.visible = ei(r), hn(), le(), Pe(), qt(), Gt(), ht());
  }
  function pp() {
    if (i || e !== "stickers") return;
    const r = ve();
    if (!r || !Ce(r)) return;
    const a = r.initial_pose;
    if (!a || typeof a != "object") return;
    r.yaw_deg = Number(a.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(a.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(a.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ts(Mc, () => {
      ht();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Ir(
      Number(a.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(a.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(a.rot_deg ?? r.rot_deg ?? 0), le(), Pe(), qt(), Gt(), ht();
  }
  function gp(r) {
    if (!r || !Ce(r)) return null;
    const a = r.initial_pose;
    if (!a || typeof a != "object") return null;
    const s = {
      yaw_deg: Number(a.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? r.rot_deg ?? 0)
    }, l = Ts(Mc, () => {
      ht();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Ir(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function mp() {
    const r = ve();
    if (!r || !Ce(r)) return !1;
    const a = gp(r);
    if (!a) return !1;
    const s = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(s(r.yaw_deg, a.yaw_deg) && s(r.pitch_deg, a.pitch_deg) && s(r.hFOV_deg, a.hFOV_deg) && s(r.vFOV_deg, a.vFOV_deg) && s(r.rot_deg, a.rot_deg));
  }
  function Dl(r) {
    var s;
    const a = To(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[r]) ? a.ui[r] : Array.isArray(a == null ? void 0 : a[r]) ? a[r] : [];
  }
  function yp(r) {
    const a = To(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, r) ? a.ui[r] : a && Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
  }
  function bp(r, a = null) {
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
  function Ts(r, a = null) {
    const s = Dl(r), l = Array.isArray(s) && s.length ? s[0] : null, d = Hi(l);
    if (!d) return null;
    const m = `__ui__${r}`, _ = Ct.get(m);
    if (_ && _.__panoSrc === d) return _;
    const y = new Image();
    return y.__panoSrc = d, y.onload = () => {
      typeof a == "function" ? a(y) : ht();
    }, y.src = d, Ct.set(m, y), y;
  }
  function Rl(r = null) {
    const a = ed(t, ["sticker_image"], r, "sticker_image_exact");
    return a || Ts(Mc, r);
  }
  function Ol(r) {
    const a = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Ir(r, a, s) {
    const l = Math.max(1, Number(a || 1)), d = Math.max(1, Number(s || 1)), m = j(Number(r || 30), 0.1, 179) * Fe, _ = 2 * Math.atan(Math.tan(m * 0.5) * (d / l));
    return j(_ * Vr, 0.1, 179);
  }
  function vp(r) {
    const a = String(r || "").trim();
    if (!a) return null;
    try {
      const s = JSON.parse(a);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let d = null;
      if (typeof l == "number" && Number.isInteger(l) ? d = l : typeof l == "string" && /^\d+$/.test(l) && (d = Number.parseInt(l, 10)), d !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), y = Number(m.pitch_deg), v = Number(m.roll_deg), S = Number(m.hFOV_deg);
      if (![_, y, v, S].every((T) => Number.isFinite(T))) return null;
      let x = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(x, -0) && (x = 0);
      const P = {
        yaw_deg: x,
        pitch_deg: j(y, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(S, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (P.source_aspect = E), P;
    } catch {
      return null;
    }
  }
  function Fl(r) {
    const a = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), m = Jc(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function _p(r) {
    var y;
    if (!r || typeof r != "object") return Fl(null);
    const a = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), d = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const v = j(d, 0.1, 179) * Fe, S = j(m, 0.1, 179) * Fe, x = Math.tan(S * 0.5);
      if (Math.abs(x) > 1e-6) {
        const P = Math.tan(v * 0.5) / x;
        Number.isFinite(P) && P > 0 && (_ = P);
      }
    }
    if (r != null && r.asset_id && ((y = p == null ? void 0 : p.assets) != null && y[r.asset_id])) {
      const v = p.assets[r.asset_id], S = Number((v == null ? void 0 : v.w) || 0), x = Number((v == null ? void 0 : v.h) || 0);
      S > 0 && x > 0 && (_ = S / x);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function wp(r) {
    var l, d, m, _, y;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(r)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const v = qh(t.graph, s), { originId: S, originSlot: x } = Yh(v), P = To(S), E = [
        P == null ? void 0 : P.output,
        P == null ? void 0 : P.result,
        (l = P == null ? void 0 : P.data) == null ? void 0 : l.output,
        (d = P == null ? void 0 : P.data) == null ? void 0 : d.result,
        (m = P == null ? void 0 : P.ui) == null ? void 0 : m.output,
        (_ = P == null ? void 0 : P.ui) == null ? void 0 : _.result
      ];
      for (const T of E) {
        if (!Array.isArray(T)) continue;
        const $ = Number(x || 0), B = T[$];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((y = ki(t, r)) == null ? void 0 : y.value) || "");
  }
  function xp(r, a, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : vp(a);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), y = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Ir(l.hFOV_deg, _, y),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(f.viewYaw || 0),
      pitch_deg: Number(f.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ir(30, d, m),
      rot_deg: 0
    };
  }
  function $l(r = "sync") {
    if (e !== "stickers" || i) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((T) => String((T == null ? void 0 : T.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = Rl(() => {
      var T;
      (T = t.__panoExternalStickerSync) == null || T.call(t, "image-loaded");
    }), d = bp(yp("pano_sticker_input_pose"), null), m = wp("sticker_state"), _ = Ol(d && typeof d == "object" ? JSON.stringify(d) : m), y = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = y.findIndex((T) => String((T == null ? void 0 : T.id) || "") === Or);
    if (s == null) {
      v >= 0 && (y.splice(v, 1), f.selectedId === Or && (f.selectedId = null, f.selectedIds = [], p.active.selected_sticker_id = null), Pe(), qt(), Gt(), ht());
      return;
    }
    const S = y.reduce((T, $) => Math.max(T, Number(($ == null ? void 0 : $.z_index) || 0)), -1);
    let x = v >= 0 ? y[v] : null;
    const P = !x || Number(x.source_link_id ?? -1) !== Number(s) || String(x.source_state_hash || "") !== _;
    x || (x = {
      id: Or,
      source_kind: Nc
    }, y.push(x)), x.id = Or, x.source_kind = Nc, x.source_link_id = Number(s), x.source_state_hash = _, x.visible = x.visible !== !1;
    let E = !1;
    if (P) {
      const T = xp(d, m, l);
      Object.assign(x, T, {
        initial_pose: { ...T },
        visible: !0,
        z_index: S + 1
      }), E = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const T = Ir(
        Number(x.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(x.vFOV_deg || 0) - T) > 1e-6 && (x.vFOV_deg = T, E = !0);
    }
    E && (Pe(), qt(), Gt()), ht();
  }
  function ni(r = {}) {
    const s = r.preservePanelValues !== !1 ? ve() : null;
    s && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: bi(s)
    }), f.selectedId = null, f.selectedIds = [], f.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Sp() {
    var l;
    if (e !== "cutout") return;
    const r = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(r) || r.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = r.find((d) => String((d == null ? void 0 : d.id) || "") === a) || r[0];
    s && (p.active.selected_shot_id = s.id || null, f.viewYaw = $e(Number(s.yaw_deg || 0)), f.viewPitch = j(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function Yo() {
    if (!ft) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (ft.innerHTML = Dt.crosshair, ft.setAttribute("aria-label", "Look at frame"), ft.setAttribute("data-tip", "Look at frame")) : (ft.innerHTML = Dt.plus_circle, ft.setAttribute("aria-label", "Add frame"), ft.setAttribute("data-tip", "Add frame"));
  }
  function Xo() {
    const r = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    f.mode === "frame" && !r && (f.mode = "pano"), it && (it.disabled = !r, it.setAttribute("aria-disabled", r ? "false" : "true")), tt.forEach((a) => {
      const s = a.dataset.view === f.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), bt && bt.setAttribute("data-selected", f.mode), pu() ? _e(f.pointerPos) : k.style.cursor = f.mode === "pano" ? "grab" : "default";
  }
  function Np() {
    const a = Bl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Ls() {
    const r = $n(f.viewYaw, f.viewPitch);
    let a = Kn(0, 1, 0);
    Math.abs(xn(r, a)) > 0.999 && (a = Kn(0, 0, 1));
    const s = yi(Pa(a, r)), l = yi(Pa(r, s));
    return { right: s, up: l, fwd: r };
  }
  function Yi(r) {
    const { right: a, up: s, fwd: l } = Ls(), d = xn(r, a), m = xn(r, s), _ = xn(r, l);
    if (_ <= 1e-5) return null;
    const y = k.width, v = k.height, S = f.viewFov * Fe, x = 2 * Math.atan(Math.tan(S / 2) * (v / y)), P = y / 2 / Math.tan(S / 2), E = v / 2 / Math.tan(x / 2);
    return {
      x: y / 2 + d / _ * P,
      y: v / 2 - m / _ * E,
      z: _
    };
  }
  function Ds(r, a) {
    const { right: s, up: l, fwd: d } = Ls(), m = k.width, _ = k.height, y = f.viewFov * Fe, v = 2 * Math.atan(Math.tan(y / 2) * (_ / m)), S = (r - m / 2) / (m / 2) * Math.tan(y / 2), x = (_ / 2 - a) / (_ / 2) * Math.tan(v / 2), P = Na(Na(Ma(s, S), Ma(l, x)), d);
    return yi(P);
  }
  function dr() {
    const r = k.width, a = k.height, s = 2;
    if (r / Math.max(a, 1) >= s) {
      const y = a, v = y * s;
      return { x: (r - v) * 0.5, y: 0, w: v, h: y };
    }
    const d = r, m = d / s;
    return { x: 0, y: (a - m) * 0.5, w: d, h: m };
  }
  function Rs(r) {
    var _;
    if (r && typeof r == "object" && (Ce(r) || r.external === !0))
      return Rl(() => {
        var y;
        (y = t.__panoExternalStickerSync) == null || y.call(t, "image-loaded");
      });
    const a = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!a) return null;
    const s = Ct.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], d = $v(l);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => ht(), m.src = d, Ct.set(a, m), m;
  }
  function Hl(r, a = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Wt.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const d = new Image();
    return d.onload = () => {
      typeof a == "function" && a();
    }, d.src = s, Wt.set(s, d), d;
  }
  function Mp(r) {
    const a = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = Yt.get(a);
    if (s) return s.ready ? s : null;
    const l = Hl(r, () => {
      const x = Yt.get(a);
      x && (x.ready = !1), ht({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = d, _.height = m;
    const y = _.getContext("2d", { willReadFrequently: !0 });
    if (!y) return null;
    y.clearRect(0, 0, d, m), y.drawImage(l, 0, 0, d, m);
    const v = y.getImageData(0, 0, d, m).data, S = { canvas: _, width: d, height: m, alpha: v, ready: !0 };
    return Yt.set(a, S), S;
  }
  function Pp(r, a, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const d = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), _ = Wi(Number(r.u || 0), d), y = Number(r.v || 0) - m, v = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * Fe, x = Math.cos(S), P = Math.sin(S), E = _ / v, T = y / v, $ = E * x + T * P, B = -E * P + T * x;
    return {
      ...r,
      u: ((d + $) % 1 + 1) % 1,
      v: m + B
    };
  }
  function kp(r, a) {
    if (!r || !a) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, d = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = Pp(
      m,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), y = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(y > 1e-6) || !(v > 1e-6)) return null;
    const S = Wi(Number(_.u || 0), Number(s.u0 || 0)) / y, x = (Number(_.v || 0) - Number(s.v0 || 0)) / v;
    if (S < 0 || S > 1 || x < 0 || x > 1) return 0;
    const P = Mp(r);
    if (!P) return null;
    const E = j(Math.floor(S * P.width), 0, P.width - 1), T = j(Math.floor(x * P.height), 0, P.height - 1);
    return Number(P.alpha[(T * P.width + E) * 4 + 3] || 0);
  }
  function Vl(r, a, s, l = null) {
    if (!(a != null && a.visible) || !rr(s, a.corners)) return !1;
    const d = l || bn(s, performance.now()), m = kp(r, d);
    return m === null ? !0 : m > 8;
  }
  function Cp() {
    var l, d, m, _, y, v, S, x;
    const r = ((d = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, Gi(!1))) || null, a = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((y = (_ = r == null ? void 0 : r.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : y.width) || 2048)), s = Math.max(1, Number(((v = r == null ? void 0 : r.descriptor) == null ? void 0 : v.height) || ((x = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : x.height) || 1024));
    return { width: a, height: s };
  }
  function zl(r = null) {
    var y, v, S, x, P, E, T, $, B, Z, st, wt, ut;
    ai();
    const a = Array.isArray(r) ? r : Gi(!1), s = ((v = (y = f.paintEngine) == null ? void 0 : y.getErpTarget) == null ? void 0 : v.call(y, a)) || null, l = Math.max(1, Number(((S = s == null ? void 0 : s.descriptor) == null ? void 0 : S.width) || ((P = (x = s == null ? void 0 : s.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : P.width) || 2048)), d = Math.max(1, Number(((E = s == null ? void 0 : s.descriptor) == null ? void 0 : E.height) || (($ = (T = s == null ? void 0 : s.displayPaint) == null ? void 0 : T.canvas) == null ? void 0 : $.height) || 1024));
    (!f._rasterComposeSurface || Number(((B = f._rasterComposeSurface.canvas) == null ? void 0 : B.width) || 0) !== l || Number(((Z = f._rasterComposeSurface.canvas) == null ? void 0 : Z.height) || 0) !== d) && (f._rasterComposeSurface = Er(l, d));
    const m = f._rasterComposeSurface;
    m.ctx.clearRect(0, 0, l, d);
    let _ = !1;
    for (const _t of Ar()) {
      if (_t.type === "strokeGroup") {
        const yt = ((wt = (st = f.paintEngine) == null ? void 0 : st.getGroupDisplayCanvas) == null ? void 0 : wt.call(st, _t.actionGroupId)) || null;
        if (!yt) continue;
        m.ctx.drawImage(yt, 0, 0), _ = !0;
        continue;
      }
      if (_t.type === "rasterObject" && String(((ut = _t.item) == null ? void 0 : ut.layerKind) || "paint") === "paint") {
        const yt = Zo(_t.item, () => ht());
        if (!yt) continue;
        m.ctx.drawImage(yt, 0, 0), _ = !0;
      }
    }
    return _ ? m.canvas : null;
  }
  function Ap(r = null) {
    var y, v, S, x, P, E, T;
    ai();
    const a = r || ((v = (y = f.paintEngine) == null ? void 0 : y.getErpTarget) == null ? void 0 : v.call(y, Gi(!1))) || null, s = ((S = a == null ? void 0 : a.committedMask) == null ? void 0 : S.canvas) || null, l = Math.max(1, Number(((x = a == null ? void 0 : a.descriptor) == null ? void 0 : x.width) || (s == null ? void 0 : s.width) || 2048)), d = Math.max(1, Number(((P = a == null ? void 0 : a.descriptor) == null ? void 0 : P.height) || (s == null ? void 0 : s.height) || 1024)), m = ln().filter(($) => String(($ == null ? void 0 : $.layerKind) || "paint") === "mask").slice().sort(($, B) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((B == null ? void 0 : B.z_index) || 0));
    if (!s && !m.length) return null;
    (!f._maskComposeSurface || Number(((E = f._maskComposeSurface.canvas) == null ? void 0 : E.width) || 0) !== l || Number(((T = f._maskComposeSurface.canvas) == null ? void 0 : T.height) || 0) !== d) && (f._maskComposeSurface = Er(l, d));
    const _ = f._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, d), s && _.ctx.drawImage(s, 0, 0);
    for (const $ of m) {
      const B = Zo($, () => ht());
      B && _.ctx.drawImage(B, 0, 0);
    }
    return _.canvas;
  }
  function Ip() {
    var T, $, B;
    const r = f.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const a = (r == null ? void 0 : r.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = Xn(), l = `${Ki()}:${s.width}:${s.height}`;
    if (((T = f._activePaintEraserPreviewInfo) == null ? void 0 : T.cacheKey) === l)
      return f._activePaintEraserPreviewInfo.value || null;
    const d = Ze(a), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Ks(Z, d.targetSpace, !0);
    }
    const _ = Er(s.width, s.height);
    if (!nu(_, d, { w: s.width, h: s.height })) return null;
    const y = ((B = ($ = _.ctx) == null ? void 0 : $.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!y) return null;
    let v = s.width, S = s.height, x = -1, P = -1;
    for (let Z = 0; Z < s.height; Z += 1)
      for (let st = 0; st < s.width; st += 1)
        y[(Z * s.width + st) * 4 + 3] <= 8 || (st < v && (v = st), Z < S && (S = Z), st > x && (x = st), Z > P && (P = Z));
    if (x < v || P < S)
      return f._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: v, minY: S, maxX: x, maxY: P },
      key: `${l}:${v}:${S}:${x}:${P}`
    };
    return f._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function Xi() {
    f._activePaintEraserPreviewInfo = null, f._liveEraserPreviewCanvasCache = null;
  }
  function Ep(r, a, s) {
    var l, d;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const m = r.item.bbox, _ = ((d = r.item) == null ? void 0 : d.transform) || {}, y = Number(m.u0 || 0) + Number(_.du || 0), v = Number(m.u1 || 0) + Number(_.du || 0), S = Number(m.v0 || 0) + Number(_.dv || 0), x = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((y % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - y >= 1 || y < 0 || v > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = yn(r.actionGroupId, "paint"), _ = Cr(r.actionGroupId, "paint", m);
      if (!_) return null;
      const y = _.centerUv.u - _.halfW, v = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, x = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((y % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - y >= 1 || y < 0 || v > 1
      };
    }
    return null;
  }
  function Tp(r, a, s) {
    if (!r || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], d = l(r), m = l(a);
    return d.some((_) => m.some((y) => !(_.maxX < y.minX || y.maxX < _.minX || _.maxY < y.minY || y.maxY < _.minY)));
  }
  function Ul(r, a, s) {
    var P, E, T;
    if (!r || !a || !((P = s == null ? void 0 : s.surface) != null && P.canvas) || a.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), d = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || d < 1) return r;
    const m = Ep(a, l, d);
    if (m && !Tp(m, s.bounds, l)) return r;
    const _ = String(((E = a.item) == null ? void 0 : E.id) || a.id || ""), y = ((T = a.item) == null ? void 0 : T.transform) || {}, v = `${s.key}:${_}:${l}:${d}:${Number(y.du || 0).toFixed(6)}:${Number(y.dv || 0).toFixed(6)}:${Number(y.rot_deg || 0).toFixed(3)}:${Number(y.scale || 1).toFixed(4)}`, S = f._liveEraserPreviewCanvasCache instanceof Map ? f._liveEraserPreviewCanvasCache : f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const x = Er(l, d);
    return x.ctx.clearRect(0, 0, l, d), x.ctx.drawImage(r, 0, 0), x.ctx.save(), x.ctx.globalCompositeOperation = "destination-out", x.ctx.drawImage(s.surface.canvas, 0, 0), x.ctx.restore(), S.size > 64 && S.clear(), S.set(v, x.canvas), x.canvas;
  }
  function Zo(r, a = null) {
    const s = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const d = Hl(r, a);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: _ } = Cp(), y = (r == null ? void 0 : r.transform) || {}, v = [
      s,
      m,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      y.du,
      y.dv,
      y.rot_deg,
      y.scale,
      Tr()
    ].join(":"), S = Xt.get(v);
    if (S) return S;
    Xt.size > 64 && Xt.clear();
    const x = document.createElement("canvas");
    x.width = m, x.height = _;
    const P = x.getContext("2d");
    if (!P) return null;
    const E = Number(l.u0 || 0) * m, T = Number(l.v0 || 0) * _, $ = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), Z = E + $ * 0.5 + Number(y.du || 0) * m, st = T + B * 0.5 + Number(y.dv || 0) * _, wt = Number(y.rot_deg || 0) * Fe, ut = Math.max(0.01, Number(y.scale || 1));
    for (const _t of [-m, 0, m])
      P.save(), P.translate(Z + _t, st), P.rotate(wt), P.scale(ut, ut), P.drawImage(d, -$ * 0.5, -B * 0.5, $, B), P.restore();
    return Xt.set(v, x), x;
  }
  function Lp() {
    return Vo(p, {
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Dp(r) {
    return jc(
      p,
      (a, s, l) => Rs(l || a),
      { scene: r }
    );
  }
  function Rp(r) {
    return Vo(p, {
      stickers: r ? [r] : [],
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Op(r, a) {
    return jc(
      p,
      (s, l, d) => Rs(d || s),
      { scene: a, stickers: r ? [r] : [] }
    );
  }
  function Jo(r, a, s, l, d = "modal_object_view") {
    var P, E, T, $, B;
    if (!r || !a || !s) return !1;
    let m = !1;
    const _ = Ip(), y = Wl(a, s);
    let v = !1;
    const S = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (y)
      v = Kp(
        a,
        s,
        S && f.showPanorama ? l : null,
        `${d}_bg_gl`
      ), m = m || !!v;
    else if (S && f.showPanorama) {
      const Z = ga({
        owner: t,
        cacheKey: `${d}_bg_only`,
        ctx: r,
        rect: a,
        img: l,
        view: s
      });
      m = m || !!Z;
    }
    if (f.showObjects)
      for (const Z of Cs(!0)) {
        if (Z.type === "sticker" && Z.item) {
          if (y && v) continue;
          const st = Rp(Z.item), wt = Op(Z.item, st), ut = zi({
            owner: t,
            cacheKey: `${d}_sticker_${String(Z.id || Z.item.id || "")}`,
            ctx: r,
            rect: a,
            backgroundSource: null,
            textures: wt,
            scene: st,
            view: s
          });
          m = m || !!ut;
          continue;
        }
        if (Z.type === "rasterObject" && Z.item) {
          let st = Zo(Z.item, () => ht());
          if (!st) continue;
          const wt = _ ? `_${_.key}` : "";
          _ && (st = Ul(st, Z, _));
          const ut = ((P = Z.item) == null ? void 0 : P.transform) || {};
          ga({
            owner: t,
            cacheKey: `${d}_raster_${String(Z.id || Z.item.id || "")}`,
            ctx: r,
            rect: a,
            img: st,
            view: s,
            backgroundRevision: `${oi()}_raster_${String(Z.id || Z.item.id || "")}_${Number(ut.du || 0).toFixed(6)}_${Number(ut.dv || 0).toFixed(6)}_${Number(ut.rot_deg || 0).toFixed(3)}_${Number(ut.scale || 1).toFixed(4)}${wt}`,
            backgroundOpacity: 1
          }), m = !0;
          continue;
        }
        if (Z.type === "strokeGroup") {
          let st = ((T = (E = f.paintEngine) == null ? void 0 : E.getGroupDisplayCanvas) == null ? void 0 : T.call(E, Z.actionGroupId)) || null;
          if (!st) continue;
          _ && (st = Ul(st, Z, _)), ga({
            owner: t,
            cacheKey: `${d}_group_${String(Z.actionGroupId || "")}`,
            ctx: r,
            rect: a,
            img: st,
            view: s,
            backgroundRevision: `${Tr()}_${String(Z.actionGroupId || "")}${Ki()}`,
            backgroundOpacity: 1
          }), m = !0;
        }
      }
    const x = f.showMask && ((B = ($ = f.paintEngine) == null ? void 0 : $.getMaskDisplayCanvas) == null ? void 0 : B.call($)) || null;
    return x && (ga({
      owner: t,
      cacheKey: `${d}_mask`,
      ctx: r,
      rect: a,
      img: x,
      view: s,
      backgroundRevision: `${Tr()}${Ki()}_mask`,
      backgroundOpacity: 1
    }), m = !0), m;
  }
  async function Os(r, a = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await tn.fetchApi("/upload/image", { method: "POST", body: s });
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
      name: String((r == null ? void 0 : r.name) || a)
    };
  }
  async function Fs(r, a) {
    const s = await new Promise((y) => r.toBlob(y, "image/png")), l = new FormData();
    l.append("image", s, a), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const d = await tn.fetchApi("/upload/image", { method: "POST", body: l });
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
  let $s = null, Qo = !1;
  function Fp() {
    const r = Zf(p.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = oi();
    return !a || typeof a != "object" || String(a.revision || "") !== s || r.totalPaintCount > 0 && !a.paint || r.totalMaskCount > 0 && !a.mask;
  }
  function Hs() {
    const r = String(t.id ?? "0"), a = vo.get(r);
    if (Qo && a) return a;
    const s = (async () => {
      var m, _, y, v, S, x, P, E, T, $;
      const l = oi(), d = Zf(p.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, $s = l, En());
        return;
      }
      if ($s !== l && !Qo) {
        Qo = !0;
        try {
          ai();
          const B = Gi(!1), Z = ((_ = (m = f.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, B)) || null, st = zl(B), wt = Ap(Z), ut = Math.max(1, Number(((y = Z == null ? void 0 : Z.descriptor) == null ? void 0 : y.width) || (st == null ? void 0 : st.width) || (wt == null ? void 0 : wt.width) || 2048)), _t = Math.max(1, Number(((v = Z == null ? void 0 : Z.descriptor) == null ? void 0 : v.height) || (st == null ? void 0 : st.height) || (wt == null ? void 0 : wt.height) || 1024));
          (!st && d.totalPaintCount > 0 || !wt && d.totalMaskCount > 0) && ((!f._paintLayerSyncBlankSurface || Number(((S = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : S.width) || 0) !== ut || Number(((x = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : x.height) || 0) !== _t) && (f._paintLayerSyncBlankSurface = Er(ut, _t)), f._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ut, _t));
          const yt = st || d.totalPaintCount > 0 && ((P = f._paintLayerSyncBlankSurface) == null ? void 0 : P.canvas) || null, vt = wt || d.totalMaskCount > 0 && ((E = f._paintLayerSyncBlankSurface) == null ? void 0 : E.canvas) || null;
          if (!yt && !vt) return;
          let mt = null, K = null;
          const lt = [];
          if (d.totalPaintCount > 0) {
            mt = await Fs(yt, `pano_paint_${r}.png`);
            for (const Tt of B) {
              const Ot = String(Tt || "").trim();
              if (!Ot) continue;
              const Lt = (($ = (T = f.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : $.call(T, Ot)) || null;
              if (!Lt) continue;
              const $t = Ot.replace(/[^a-zA-Z0-9_-]+/g, "_"), zt = await Fs(Lt, `pano_group_${r}_${$t}.png`);
              zt && lt.push({
                id: Ot,
                actionGroupId: Ot,
                image: zt
              });
            }
          }
          d.totalMaskCount > 0 && (K = await Fs(vt, `pano_mask_${r}.png`)), l === oi() && (p.painting_layer = {
            paint: mt,
            mask: K,
            groups: lt,
            revision: l
          }, $s = l, En());
        } catch (B) {
          console.warn("[pano] paint layer upload failed:", B);
        } finally {
          Qo = !1;
        }
      }
    })();
    return vo.set(r, s), s.finally(() => {
      vo.get(r) === s && vo.delete(r);
    }), s;
  }
  function ri() {
    const r = Vv(t, "pano_input_images", Ct, () => ht());
    if (r) return r;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let d = [];
    return i && (s || l) ? d = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], ed(t, d, () => ht(), `background:${d.join("|")}`);
  }
  function jl(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function $p() {
    if (!Pt.hasPresentedFrame) return "boot";
    let r = !1, a = !1;
    if (f.showPanorama) {
      const s = ri();
      r = !!s && !jl(s);
    }
    if (f.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const d = Rs(l);
        if (d && !jl(d)) {
          a = !0;
          break;
        }
      }
    }
    return r && a ? "mixed" : r ? "background" : a ? "stickers" : "";
  }
  function ii() {
    const r = new Set(
      (p.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(p.assets || {}).forEach((a) => {
      r.has(a) || (delete p.assets[a], Ct.delete(a));
    });
  }
  function Vs(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(j(r.y, -1, 1))
    };
  }
  function zs(r, a = null) {
    const { lon: s, lat: l } = Vs(r), d = dr();
    let m = d.x + (s / (2 * Math.PI) + 0.5) * d.w;
    const _ = d.y + (0.5 - l / Math.PI) * d.h;
    if (a !== null) {
      for (; m - a > d.w / 2; ) m -= d.w;
      for (; m - a < -d.w / 2; ) m += d.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function ta(r) {
    const a = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Kn(0, 1, 0);
    Math.abs(xn(a, s)) > 0.999 && (s = Kn(0, 0, 1));
    const l = yi(Pa(s, a)), d = yi(Pa(a, l)), m = Math.tan(j(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Fe), _ = Math.tan(j(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Fe), y = Number(r.rot_deg || r.roll_deg || 0) * Fe, v = Math.cos(y), S = Math.sin(y);
    return {
      centerDir: a,
      right: l,
      up: d,
      tanX: m,
      tanY: _,
      cr: v,
      sr: S
    };
  }
  function hr(r, a, s) {
    const l = a * r.cr - s * r.sr, d = a * r.sr + s * r.cr;
    return yi(Na(Na(r.centerDir, Ma(r.right, l)), Ma(r.up, d)));
  }
  function Bl(r) {
    const a = ta(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => hr(a, l * a.tanX, d * a.tanY));
  }
  function Gl(r, a, s) {
    const l = ta(r), d = (a * 2 - 1) * l.tanX, m = (1 - s * 2) * l.tanY;
    return hr(l, d, m);
  }
  function Hp(r) {
    const a = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: j((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Vp(r) {
    var v, S, x, P;
    const a = (r == null ? void 0 : r.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = r == null ? void 0 : r.transform) == null ? void 0 : v.scale) || 1)), d = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), m = Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.du) || 0), _ = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((E) => Wo(qo(E, s, l, d), m, _));
  }
  function zp(r) {
    const a = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, d = `${a}:${f.mode}:${Tr()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (f.mode === "frame") {
      const m = re(), _ = m ? Ye(m) : null;
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((k == null ? void 0 : k.width) || 0))}:${Math.round(Number((k == null ? void 0 : k.height) || 0))}`;
  }
  function Up(r) {
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
      bi(r)
    ].join(":");
    if (f.mode === "frame") {
      const d = re(), m = d ? Ye(d) : null;
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((k == null ? void 0 : k.width) || 0))}:${Math.round(Number((k == null ? void 0 : k.height) || 0))}`;
  }
  function jp() {
    var a;
    const r = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return r === "draft" ? f.hqFrames && f.hqFrames > 0 ? [28, 20] : f.interaction ? [12, 9] : [20, 14] : r === "high" ? f.hqFrames && f.hqFrames > 0 ? [48, 36] : f.interaction ? [20, 14] : [36, 26] : f.hqFrames && f.hqFrames > 0 ? [40, 30] : f.interaction ? [16, 12] : [28, 20];
  }
  function Kl() {
    var r;
    return !!(H && ((r = Q == null ? void 0 : Q.isSupported) != null && r.call(Q)));
  }
  function Wl(r, a) {
    return !Kl() || e !== "stickers" || String((a == null ? void 0 : a.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((k == null ? void 0 : k.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((k == null ? void 0 : k.height) || 0));
  }
  function Bp() {
    return f.showObjects ? Lp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Gp(r) {
    return !f.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Dp(r);
  }
  function ql() {
    if (!H) return;
    const r = H.getContext("webgl2");
    if (r)
      r.viewport(0, 0, H.width, H.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const a = H.getContext("2d");
      a && (a.clearRect(0, 0, H.width, H.height), a.fillStyle = "#070707", a.fillRect(0, 0, H.width, H.height));
    }
    Pt.backgroundWasVisible = !1, Pt.backgroundDirty = !1;
  }
  function Kp(r, a, s, l = "modal_bg_gl") {
    if (!Wl(r, a)) return !1;
    if (!Pt.backgroundDirty && Pt.backgroundWasVisible) return !0;
    const d = Bp(), m = Gp(d), _ = !!s && !!s.complete && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1;
    if (!_ && m.length === 0)
      return ql(), !1;
    const y = _ ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "none";
    return Q.renderScene({
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundSource: _ ? s : null,
      backgroundRevision: _ ? `${l}:${y}` : "",
      textures: m,
      scene: d,
      view: a,
      backgroundOpacity: 1
    }) ? (Pt.backgroundWasVisible = !0, Pt.backgroundDirty = !1, !0) : (ql(), !1);
  }
  function Wp(r = !1) {
    const a = k.width, s = k.height, l = dr();
    if (M.globalAlpha = 1, M.lineWidth = 1, r || (M.fillStyle = "#070707", M.fillRect(0, 0, a, s), M.fillStyle = "#070707", M.fillRect(l.x, l.y, l.w, l.h)), ai(), Jo(
      M,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ri(),
      "modal_unwrap"
    ), f.showGrid && !f.fullscreen) {
      M.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = l.x + l.w * m / 16;
        M.beginPath(), M.moveTo(_, l.y), M.lineTo(_, l.y + l.h), M.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = l.y + l.h * m / 8;
        M.beginPath(), M.moveTo(l.x, _), M.lineTo(l.x + l.w, _), M.stroke();
      }
      M.strokeStyle = "rgba(250, 250, 250, 0.86)", M.lineWidth = 1.2, M.beginPath(), M.moveTo(l.x, l.y + l.h / 2), M.lineTo(l.x + l.w, l.y + l.h / 2), M.stroke(), M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center";
      const d = l.y + l.h * 0.57;
      M.fillText("Left", l.x + l.w * 0.25, d), M.fillText("Front", l.x + l.w * 0.5, d), M.fillText("Right", l.x + l.w * 0.75, d), M.fillText("Back", l.x + 38, d), M.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function Yl(r, a, s = 1) {
    let l = !1;
    M.strokeStyle = a, M.lineWidth = s, M.beginPath();
    for (const d of r) {
      const m = Yi(d);
      if (!m) {
        l = !1;
        continue;
      }
      l ? M.lineTo(m.x, m.y) : (M.moveTo(m.x, m.y), l = !0);
    }
    M.stroke();
  }
  function qp(r = !1) {
    const a = k.width, s = k.height;
    if (r || (Kl() ? M.clearRect(0, 0, a, s) : (M.fillStyle = "#070707", M.fillRect(0, 0, a, s))), ai(), Jo(
      M,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: f.viewYaw,
        pitchDeg: f.viewPitch,
        fovDeg: f.viewFov
      },
      ri(),
      "modal_pano"
    ), f.showGrid && !f.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push($n(d, _));
        Yl(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push($n(_, d));
        Yl(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center", l.forEach((d) => {
        const m = Yi(d.dir);
        m && M.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function Xl(r, a = null, s = null) {
    if (f.mode === "frame") {
      const l = a || re();
      if (!l) return [];
      const d = s || Ye(l);
      return Pg(r, l, d);
    }
    return Sg(r);
  }
  function Yp(r, a) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = yn(s, r.layerKind), d = [], m = [], _ = f.mode === "frame" ? re() : null, y = _ ? Ye(_) : null;
    for (const ut of l) {
      const _t = (ut == null ? void 0 : ut.geometry) || null, yt = (_t == null ? void 0 : _t.geometryKind) === "lasso_fill" ? _t == null ? void 0 : _t.points : (_t == null ? void 0 : _t.processedPoints) || (_t == null ? void 0 : _t.rawPoints) || (_t == null ? void 0 : _t.points) || [], vt = Xl(yt, _, y).filter((lt) => Number.isFinite(lt == null ? void 0 : lt.x) && Number.isFinite(lt == null ? void 0 : lt.y));
      if (!vt.length) continue;
      m.push(...vt);
      const mt = yr(String((ut == null ? void 0 : ut.toolKind) || "pen")), K = on[mt] || on[nr];
      d.push({
        points: vt,
        closed: String((_t == null ? void 0 : _t.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ut == null ? void 0 : ut.size) || 10) * Math.max(0.1, Number((K == null ? void 0 : K.sizeScale) ?? 1)) + 10),
        layerKind: String((ut == null ? void 0 : ut.layerKind) || r.layerKind || "paint")
      });
    }
    if (!m.length) {
      const ut = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(a, ut), ut;
    }
    let v = 1 / 0, S = 1 / 0, x = -1 / 0, P = -1 / 0;
    for (const ut of d)
      for (const yt of Array.isArray(ut == null ? void 0 : ut.points) ? ut.points : []) {
        const vt = Number((yt == null ? void 0 : yt.x) || 0), mt = Number((yt == null ? void 0 : yt.y) || 0);
        v = Math.min(v, vt - 2), S = Math.min(S, mt - 2), x = Math.max(x, vt + 2), P = Math.max(P, mt + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(S) || !Number.isFinite(x) || !Number.isFinite(P)) {
      const ut = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(a, ut), ut;
    }
    const E = [
      { x: v, y: S },
      { x, y: S },
      { x, y: P },
      { x: v, y: P }
    ], T = { x: (v + x) * 0.5, y: (S + P) * 0.5 }, $ = { x: T.x, y: S }, B = { x, y: T.y }, Z = { x: T.x, y: P }, st = { x: v, y: T.y }, wt = {
      kind: "strokeGroup",
      center: T,
      corners: E,
      edgeMidpoints: [
        { edge: "top", x: $.x, y: $.y, a: E[0], b: E[1] },
        { edge: "right", x: B.x, y: B.y, a: E[1], b: E[2] },
        { edge: "bottom", x: Z.x, y: Z.y, a: E[2], b: E[3] },
        { edge: "left", x: st.x, y: st.y, a: E[3], b: E[0] }
      ],
      rotateStemBase: $,
      rotateHandle: { x: $.x, y: $.y - 30 },
      strokePaths: d,
      visible: !0
    };
    return f._strokeGeomCache.set(a, wt), wt;
  }
  function Xp(r, a) {
    const s = Vp(r), l = Xl(s);
    if (!Array.isArray(l) || l.length < 4) {
      const y = { visible: !1, kind: "rasterObject" };
      return f._strokeGeomCache.set(a, y), y;
    }
    const d = l.slice(0, 4).map((y) => ({ x: Number((y == null ? void 0 : y.x) || 0), y: Number((y == null ? void 0 : y.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: d.reduce((y, v) => y + Number(v.x || 0), 0) / d.length,
        y: d.reduce((y, v) => y + Number(v.y || 0), 0) / d.length
      },
      corners: d,
      visible: !0
    };
    return f._strokeGeomCache.set(a, _), _;
  }
  function pr(r, a = null, s = null, l = null) {
    if (f.mode === "frame") {
      const wt = s || re(), ut = l || Ye(wt), _t = wt ? Qi(wt, r) : null;
      return _t ? {
        x: Number(ut.x || 0) + Number(_t.x || 0) * Number(ut.w || 0),
        y: Number(ut.y || 0) + Number(_t.y || 0) * Number(ut.h || 0),
        z: 1
      } : null;
    }
    if (f.mode === "unwrap") return zs(r, a);
    const { right: d, up: m, fwd: _ } = Ls(), y = xn(r, d), v = xn(r, m), S = xn(r, _), x = k.width, P = k.height, E = f.viewFov * Fe, T = 2 * Math.atan(Math.tan(E / 2) * (P / Math.max(x, 1))), $ = x / 2 / Math.tan(E / 2), B = P / 2 / Math.tan(T / 2), Z = Math.max(S, 1e-4), st = Math.max(x, P) * 2;
    return {
      x: j(x / 2 + y / Z * $, -st, x + st),
      y: j(P / 2 - v / Z * B, -st, P + st),
      z: Z
    };
  }
  function Zp(r) {
    const a = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = f.mode === "frame" ? re() : null, l = s ? Ye(s) : null, d = pr(a, null, s, l);
    if (!d) return { visible: !1 };
    const m = ta(r), y = Bl(r).map((yt) => pr(yt, d.x, s, l)), v = hr(m, 0, m.tanY), S = hr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), x = pr(v, d.x, s, l), P = pr(S, (x == null ? void 0 : x.x) ?? d.x, s, l), E = ((P == null ? void 0 : P.x) ?? x.x) - x.x, T = ((P == null ? void 0 : P.y) ?? x.y) - x.y, $ = Math.hypot(E, T) || 1, B = {
      x: x.x + E / $ * 30,
      y: x.y + T / $ * 30
    }, Z = pr(hr(m, 0, m.tanY), d.x, s, l), st = pr(hr(m, m.tanX, 0), d.x, s, l), wt = pr(hr(m, 0, -m.tanY), d.x, s, l), ut = pr(hr(m, -m.tanX, 0), d.x, s, l), _t = [
      {
        edge: "top",
        x: Z.x,
        y: Z.y,
        a: { x: y[0].x, y: y[0].y },
        b: { x: y[1].x, y: y[1].y }
      },
      {
        edge: "right",
        x: st.x,
        y: st.y,
        a: { x: y[1].x, y: y[1].y },
        b: { x: y[2].x, y: y[2].y }
      },
      {
        edge: "bottom",
        x: wt.x,
        y: wt.y,
        a: { x: y[2].x, y: y[2].y },
        b: { x: y[3].x, y: y[3].y }
      },
      {
        edge: "left",
        x: ut.x,
        y: ut.y,
        a: { x: y[3].x, y: y[3].y },
        b: { x: y[0].x, y: y[0].y }
      }
    ];
    return {
      center: { x: d.x, y: d.y },
      corners: y.map((yt) => ({ x: yt.x, y: yt.y })),
      edgeMidpoints: _t,
      rotateStemBase: { x: x.x, y: x.y },
      rotateHandle: B,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Re(r) {
    if (Te(r)) {
      const d = String(r.actionGroupId || r.id || "").trim(), m = rp(d, r.layerKind), _ = f._strokeGeomCache.get(m);
      return _ || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Yp(r, m));
    }
    if (We(r)) {
      const d = zp(r), m = f._strokeGeomCache.get(d);
      return m || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Xp(r, d));
    }
    const a = Up(r), s = f._strokeGeomCache.get(a);
    if (s) return s;
    f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear();
    const l = Zp(r);
    return f._strokeGeomCache.set(a, l), l;
  }
  function ea(r, a, s, l = null) {
    const d = [];
    for (let m = 0; m <= s; m += 1) {
      const _ = m / s;
      let y = 0, v = 0;
      a === 0 ? (y = _, v = 0) : a === 1 ? (y = 1, v = _) : a === 2 ? (y = 1 - _, v = 1) : (y = 0, v = 1 - _);
      const S = Gl(r, y, v), x = f.mode === "unwrap" ? zs(S, l) : Yi(S);
      x && d.push(x);
    }
    return d;
  }
  function Jp(r, a) {
    const s = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = f.mode === "unwrap" ? zs(s) : null, d = l ? l.x : null, m = f.mode === "pano" ? 28 : 20, _ = [
      ea(r, 0, m, d),
      ea(r, 1, m, d),
      ea(r, 2, m, d),
      ea(r, 3, m, d)
    ];
    M.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", M.lineWidth = a ? 2 : 1, M.beginPath();
    let y = !1;
    for (const v of _)
      for (const S of v)
        y ? M.lineTo(S.x, S.y) : (M.moveTo(S.x, S.y), y = !0);
    M.closePath(), M.stroke();
  }
  function Qp() {
    const r = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (f.mode === "frame") return r;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...r, ...a];
  }
  function Us() {
    const r = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (f.mode === "frame") return r;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...r, ...a];
  }
  function js(r, a = []) {
    if (!(!r || !Array.isArray(a) || a.length < 4)) {
      r.beginPath(), r.moveTo(a[0].x, a[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(a[s].x, a[s].y);
      r.closePath();
    }
  }
  function tg(r, a, s, l) {
    if (De(r)) {
      const d = M.globalAlpha;
      M.globalAlpha = up(r), f.mode === "frame" ? (M.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", M.lineWidth = s ? 2 : 1, js(M, a.corners), M.stroke()) : Jp(r, s), M.globalAlpha = d;
      return;
    }
    M.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", js(M, a.corners), M.fill(), M.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", M.lineWidth = s ? 2.8 : 1.9, js(M, a.corners), M.stroke();
  }
  function eg(r, a, s) {
    M.fillStyle = s, a.corners.forEach((l) => {
      M.beginPath(), M.arc(l.x, l.y, 6.5, 0, Math.PI * 2), M.fill();
    }), mn(r) && (M.strokeStyle = s, M.lineCap = "round", M.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var x, P, E, T;
      const d = (((x = l.b) == null ? void 0 : x.x) ?? l.x) - (((P = l.a) == null ? void 0 : P.x) ?? l.x), m = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((T = l.a) == null ? void 0 : T.y) ?? l.y), _ = Math.hypot(d, m) || 1, y = d / _, v = m / _, S = 10;
      M.beginPath(), M.moveTo(l.x - y * S, l.y - v * S), M.lineTo(l.x + y * S, l.y + v * S), M.stroke();
    }), M.lineCap = "butt"), Te(r) || (M.strokeStyle = "rgba(250, 250, 250, 0.9)", M.lineWidth = 1.8, M.beginPath(), M.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), M.lineTo(a.rotateHandle.x, a.rotateHandle.y), M.stroke(), M.fillStyle = s, M.beginPath(), M.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), M.fill());
  }
  function ng() {
    var y;
    const [r, a] = jp(), s = An(), l = s.length > 1, d = e === "cutout" ? Qp() : Me(), m = d.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${mn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!f._sortedItemsCache || f._sortedItemsCache.src !== d || f._sortedItemsCache.orderKey !== m) && (f._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const _ = f._sortedItemsCache.sorted;
    for (const v of _) {
      const S = !l && ip(v);
      if (f.mode === "frame" && !S || !f.showObjects && !mn(v)) continue;
      const x = Re(v);
      if (e !== "stickers" && !x.visible)
        continue;
      const P = De(v), E = fr(v);
      if (tg(v, x, S, E), S && x.visible) {
        const T = E ? "#ff4d4f" : P && Ce(v) ? "#f59e0b" : "#0070f3";
        eg(v, x, T);
      }
    }
    if (l) {
      const v = Is(s);
      if (v != null && v.visible) {
        const S = Es(s) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(v.corners[0].x, v.corners[0].y);
        for (let x = 1; x < v.corners.length; x += 1) M.lineTo(v.corners[x].x, v.corners[x].y);
        M.closePath(), M.stroke(), M.setLineDash([]), M.fillStyle = S, v.corners.forEach((x) => {
          M.beginPath(), M.arc(x.x, x.y, 6.5, 0, Math.PI * 2), M.fill();
        }), M.restore();
      }
    } else
      s.forEach((v) => {
        if (!Te(v) && !We(v)) return;
        const S = Re(v);
        if (!(S != null && S.visible)) return;
        const x = fr(v) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(S.corners[0].x, S.corners[0].y);
        for (let P = 1; P < S.corners.length; P += 1) M.lineTo(S.corners[P].x, S.corners[P].y);
        M.closePath(), M.stroke(), M.setLineDash([]), Te(v) && (M.fillStyle = x, S.corners.forEach((P) => {
          M.beginPath(), M.arc(P.x, P.y, 6.5, 0, Math.PI * 2), M.fill();
        })), M.restore();
      });
    if (((y = f.interaction) == null ? void 0 : y.kind) === "marquee_select") {
      const v = yu(f.interaction.start, f.interaction.current);
      M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.9)", M.fillStyle = "rgba(255, 255, 255, 0.08)", M.lineWidth = 1, M.setLineDash([5, 4]), M.beginPath(), M.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), M.fill(), M.stroke(), M.restore();
    }
    f.hqFrames && r >= 40 && a >= 30 && (f.hqFrames -= 1, f.hqFrames > 0 && ht());
  }
  function Zl(r) {
    const a = Pi(r), s = j(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function rg() {
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
  function Jl(r, a = {}) {
    if (!r) return "";
    const s = ri(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", d = Zl(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      JSON.stringify(r || null),
      oi(),
      rg(),
      Ki(),
      l,
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "mask:1" : "mask:0",
      `${d.width}x${d.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function Ql(r = {}) {
    var y, v;
    if (e !== "cutout") return null;
    const a = r.shot || re();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = Zl(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = Jl(a, r);
    if (((y = t.__panoCutoutPreviewSurface) == null ? void 0 : y.source) === t.__panoCutoutPreviewCanvas && ((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const d = t.__panoCutoutPreviewCanvas, m = d.getContext("2d");
    return m ? og(
      m,
      { x: 0, y: 0, w: s.width, h: s.height },
      a,
      {
        cachePrefix: "shared_cutout_preview_surface",
        quality: String(r.quality || "balanced")
      }
    ) ? (t.__panoCutoutPreviewSurface = {
      source: d,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null : (t.__panoCutoutPreviewSurface = null, null);
  }
  function ig() {
    if (e !== "cutout") return;
    const r = re();
    if (!r) {
      f.outputPreviewRect = null, pt && (pt.style.display = "none");
      return;
    }
    const a = 14, s = j(Number(f.outputPreviewAnim ?? (f.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, k.width * 0.28)), d = Math.max(260, Math.min(560, k.width * 0.62)), m = Math.max(76, Math.min(150, k.height * 0.22)), _ = Math.max(160, Math.min(340, k.height * 0.48)), y = Sn(l, d, s), v = Sn(m, _, s), S = Pi(r), x = Number((S == null ? void 0 : S.aspect) || 1);
    let P = y, E = P / x;
    E > v && (E = v, P = E * x);
    const T = k.width - a - P, $ = a, B = 12;
    f.outputPreviewRect = { x: T, y: $, w: P, h: E };
    const Z = () => {
      if (!pt) return;
      const vt = `${Math.round(T + P - 8 - 24)}px`, mt = `${Math.round($ + 8)}px`;
      pt.style.display = "inline-flex", pt.style.left !== vt && (pt.style.left = vt), pt.style.top !== mt && (pt.style.top = mt);
    }, st = (vt, mt, K, lt, Tt) => {
      const Ot = Math.max(0, Math.min(Tt, Math.min(K, lt) * 0.5));
      M.beginPath(), typeof M.roundRect == "function" ? M.roundRect(vt, mt, K, lt, Ot) : (M.moveTo(vt + Ot, mt), M.arcTo(vt + K, mt, vt + K, mt + lt, Ot), M.arcTo(vt + K, mt + lt, vt, mt + lt, Ot), M.arcTo(vt, mt + lt, vt, mt, Ot), M.arcTo(vt, mt, vt + K, mt, Ot)), M.closePath();
    };
    M.save(), M.shadowColor = "rgba(0, 0, 0, 0.45)", M.shadowBlur = 22, M.shadowOffsetX = 0, M.shadowOffsetY = 8, M.fillStyle = "rgba(10, 10, 10, 0.72)", st(T, $, P, E, B), M.fill(), M.restore(), M.save(), st(T, $, P, E, B), M.clip();
    const wt = Jl(r, { quality: "balanced" });
    let ut = t.__panoCutoutPreviewSurface;
    (!ut || ut.revision !== wt) && !f.interaction && !f.cutoutPreviewSurfaceRaf && !f.cutoutPreviewSurfaceTimer && (ut = Ql({ shot: r, quality: "balanced" }));
    const _t = (ut == null ? void 0 : ut.source) || null, yt = !!(_t && Number(_t.width || 0) > 1 && Number(_t.height || 0) > 1);
    if ((ut == null ? void 0 : ut.revision) !== wt && Bs(), !yt) {
      M.fillStyle = "rgba(255, 255, 255, 0.06)", M.fillRect(T, $, P, E), M.strokeStyle = "rgba(255, 255, 255, 0.12)", M.lineWidth = 1, M.strokeRect(T + 0.5, $ + 0.5, P - 1, E - 1), Bs(), M.restore(), Z();
      return;
    }
    M.drawImage(_t, T, $, P, E), M.restore(), Z();
  }
  function og(r, a, s, l = {}) {
    const d = ri();
    return Pb({
      owner: t,
      ctx: r,
      rect: a,
      shot: s,
      bgImage: d,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: Jo
    });
  }
  function ag() {
    Ql();
  }
  function Bs() {
    if (e !== "cutout") return;
    const r = performance.now(), a = np(), s = r - Number(f.cutoutPreviewSurfaceLastTs || 0);
    if (f.cutoutPreviewSurfaceRaf || f.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      f.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var d, m, _, y, v, S, x, P;
        f.cutoutPreviewSurfaceRaf = 0, f.cutoutPreviewSurfaceLastTs = performance.now(), ag(), Pt.dirty = !0, (m = (d = t.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || m.call(d), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (v = (y = t.graph) == null ? void 0 : y.setDirtyCanvas) == null || v.call(y, !0, !0), (P = (x = (S = pn) == null ? void 0 : S.canvas) == null ? void 0 : x.setDirty) == null || P.call(x, !0, !0);
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
  function Gs(r, a) {
    if (!r || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return Gl(r, s, l);
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
  function sg(r, a, s) {
    const l = qe(r), d = qe(a);
    return gr(r, Sn(l.x, d.x, s), Sn(l.y, d.y, s), {
      t: Sn(Number((r == null ? void 0 : r.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: Sn(Ve(r, "widthScale", 1), Ve(a, "widthScale", 1), s),
      pressureLike: Sn(Ve(r, "pressureLike", 1), Ve(a, "pressureLike", 1), s)
    });
  }
  function cg(r, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function Ks(r, a, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    if (r.length === 1) return [gr(r[0], qe(r[0]).x, qe(r[0]).y)];
    const l = cg(a, s), d = (x, P) => {
      const E = [0];
      for (let _t = 1; _t < x.length; _t += 1) {
        const yt = qe(x[_t - 1]), vt = qe(x[_t]);
        E.push(E[_t - 1] + Math.hypot(vt.x - yt.x, vt.y - yt.y));
      }
      const T = E[E.length - 1] || 0;
      if (T <= 1e-8) {
        const _t = x[0], yt = qe(_t);
        return [gr(_t, yt.x, yt.y)];
      }
      const $ = [];
      let B = 0;
      for (let _t = 0; _t <= T + 1e-9; _t += P) {
        for (; B < E.length - 2 && E[B + 1] < _t; ) B += 1;
        const yt = E[B], vt = E[B + 1], mt = Math.max(1e-8, vt - yt);
        $.push(sg(x[B], x[B + 1], j((_t - yt) / mt, 0, 1)));
      }
      const Z = x[x.length - 1], st = qe(Z), wt = $[$.length - 1], ut = wt ? qe(wt) : null;
      return (!ut || Math.hypot(ut.x - st.x, ut.y - st.y) > P * 0.35) && $.push(gr(Z, st.x, st.y)), $;
    }, m = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const P = [gr(x[0], qe(x[0]).x, qe(x[0]).y)];
      for (let E = 0; E < x.length - 1; E += 1) {
        const T = x[E], $ = x[E + 1], B = qe(T), Z = qe($), st = gr(
          T,
          B.x * 0.75 + Z.x * 0.25,
          B.y * 0.75 + Z.y * 0.25,
          {
            t: Number(T.t || 0) * 0.75 + Number($.t || 0) * 0.25,
            widthScale: Ve(T, "widthScale", 1) * 0.75 + Ve($, "widthScale", 1) * 0.25,
            pressureLike: Ve(T, "pressureLike", 1) * 0.75 + Ve($, "pressureLike", 1) * 0.25
          }
        ), wt = gr(
          T,
          B.x * 0.25 + Z.x * 0.75,
          B.y * 0.25 + Z.y * 0.75,
          {
            t: Number(T.t || 0) * 0.25 + Number($.t || 0) * 0.75,
            widthScale: Ve(T, "widthScale", 1) * 0.25 + Ve($, "widthScale", 1) * 0.75,
            pressureLike: Ve(T, "pressureLike", 1) * 0.25 + Ve($, "pressureLike", 1) * 0.75
          }
        );
        P.push(st, wt);
      }
      return P.push(gr(x[x.length - 1], qe(x[x.length - 1]).x, qe(x[x.length - 1]).y)), P;
    }, _ = d(r, l);
    if (_.length < 3) return _;
    const y = s ? 2 : 1;
    let v = _.slice();
    for (let x = 0; x < y; x += 1) v = m(v);
    return d(v, Math.max(l * 0.75, 55e-5));
  }
  function Ve(r, a, s = 1) {
    const l = Number(r == null ? void 0 : r[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function lg(r) {
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
  function Er(r, a) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(r)), s.height = Math.max(1, Math.round(a));
    const l = s.getContext("2d");
    return l && (l.clearRect(0, 0, s.width, s.height), l.imageSmoothingEnabled = !0), { canvas: s, ctx: l };
  }
  function Tr() {
    const r = na();
    return `${String(f.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function oi() {
    const r = na();
    return `${String(f.paintStrokeRevision)}:${String(f.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function ug() {
    f.paintStrokeRevision += 1, f.paintCompositeRevision += 1;
  }
  function fg() {
    f.paintCompositeRevision += 1;
  }
  function dg() {
    f._sortedItemsCache = null, f._strokeGeomCache.clear();
  }
  function tu() {
    var r, a;
    f.paintEngineRevisionKey = null, (a = (r = f.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || a.call(r, p), f.paintEngineRevisionKey = Tr();
  }
  function hn() {
    f.objectVisualRevision = Number(f.objectVisualRevision || 0) + 1, dg();
  }
  function In({ rebuildPaintEngine: r = !1 } = {}) {
    ug(), hn(), r && tu();
  }
  function Ji() {
    fg(), hn();
  }
  function ai() {
    var l;
    const r = na(), a = `${r.width}x${r.height}`;
    f.paintEngineDescriptorKey !== a && (f.paintEngine = zc(r), f.paintEngineDescriptorKey = a, f.paintEngineRevisionKey = "");
    const s = Tr();
    f.paintEngineRevisionKey !== s && (f.paintEngineRevisionKey = s, (l = f.paintEngine) == null || l.rebuildCommitted(p));
  }
  function na() {
    const r = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function Xn() {
    return na();
  }
  function hg(r, a, s, l, d = null) {
    const m = lg(r), _ = Ve(a, "widthScale", 1) * Ve(a, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * _) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Fe) * s * _) : Math.max(0.5, m.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * _);
  }
  function pg(r, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), d = String((a == null ? void 0 : a.toolKind) || "pen"), m = s.preview === !0, _ = m ? 0.78 : 1;
    if (r.globalAlpha = d === "marker" ? 0.7 * _ : 1, l === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const y = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = m ? Math.max(0.28, Number(y.a ?? 1) * 0.88) : Math.max(0.12, Number(y.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(y.r || 0) * 255)}, ${Math.round(Number(y.g || 0) * 255)}, ${Math.round(Number(y.b || 0) * 255)}, ${v})`;
  }
  function gg(r, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function mg(r, a, s, l, d = {}) {
    if (!r || !Array.isArray(a) || !a.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    r.save(), pg(r, s, d);
    const _ = (y) => gg(r, y, m);
    if (a.length === 1) {
      _(a[0]), r.restore();
      return;
    }
    for (let y = 0; y < a.length - 1; y += 1) {
      const v = a[y], S = a[y + 1];
      if (!v || !S) continue;
      const x = Number(v.x || 0), P = Number(v.y || 0), E = Number(S.x || 0), T = Number(S.y || 0), $ = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(P) || !Number.isFinite(E) || !Number.isFinite(T) || !Number.isFinite($) || !Number.isFinite(B)) continue;
      const Z = E - x, st = T - P, wt = Math.hypot(Z, st);
      if (!Number.isFinite(wt) || wt < 1e-6) {
        _(v);
        continue;
      }
      if (wt > Math.max(l.w, l.h) * 0.5) continue;
      const ut = Math.max(0.5, Math.min($, B)), _t = Math.max(0.35, Math.min(ut * 0.4, 2.25)), yt = Math.max(1, Math.ceil(wt / _t));
      for (let vt = 0; vt <= yt; vt += 1) {
        const mt = vt / yt;
        _({
          x: Sn(x, E, mt),
          y: Sn(P, T, mt),
          radiusPx: Sn($, B, mt)
        });
      }
    }
    _(a[a.length - 1]), r.restore();
  }
  function yg(r, a, s, l) {
    mg(r, a, s, l, { preview: !1 });
  }
  function bg(r, a, s, l, d) {
    var y, v, S, x;
    if (!r || !Array.isArray(a) || a.length < 3) return;
    const m = "u", _ = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const P = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(P.r || 0) * 255)}, ${Math.round(Number(P.g || 0) * 255)}, ${Math.round(Number(P.b || 0) * 255)}, ${Number(P.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((y = a[0]) == null ? void 0 : y[m]) || 0) * l.w, Number(((v = a[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let P = 1; P < a.length; P += 1)
      r.lineTo(Number(((S = a[P]) == null ? void 0 : S[m]) || 0) * l.w, Number(((x = a[P]) == null ? void 0 : x[_]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function eu(r) {
    const a = (r == null ? void 0 : r.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function vg(r, a) {
    const s = eu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: hg(r, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function nu(r, a, s = null) {
    var y, v, S, x;
    if (!(r != null && r.ctx) || !a) return !1;
    const l = s || { w: Number(((y = r.canvas) == null ? void 0 : y.width) || 0), h: Number(((v = r.canvas) == null ? void 0 : v.height) || 0) }, d = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((S = a == null ? void 0 : a.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((x = a == null ? void 0 : a.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return bg(r.ctx, eu(d), d, l), !0;
    const _ = vg(d, l);
    return _.length ? (yg(r.ctx, _, d, l), !0) : !1;
  }
  function _g(r, a, s, l = 8) {
    const d = new Uint8Array(a * s), m = [], _ = new Int32Array(a * s), y = new Int32Array(a * s);
    for (let v = 0; v < s; v += 1)
      for (let S = 0; S < a; S += 1) {
        const x = v * a + S;
        if (d[x] || r[x] <= l) continue;
        let P = 0, E = 0;
        _[E] = S, y[E] = v, E += 1, d[x] = 1;
        const T = [];
        let $ = S, B = v, Z = S, st = v;
        for (; P < E; ) {
          const wt = _[P], ut = y[P];
          P += 1, T.push({ x: wt, y: ut }), wt < $ && ($ = wt), ut < B && (B = ut), wt > Z && (Z = wt), ut > st && (st = ut);
          const _t = [
            [wt - 1, ut],
            [wt + 1, ut],
            [wt, ut - 1],
            [wt, ut + 1]
          ];
          for (const [yt, vt] of _t) {
            if (yt < 0 || vt < 0 || yt >= a || vt >= s) continue;
            const mt = vt * a + yt;
            d[mt] || r[mt] <= l || (d[mt] = 1, _[E] = yt, y[E] = vt, E += 1);
          }
        }
        m.push({ pixels: T, minX: $, minY: B, maxX: Z, maxY: st });
      }
    return m;
  }
  function wg(r, a, s = {}) {
    var S;
    const l = Number((r == null ? void 0 : r.width) || 0), d = Number((r == null ? void 0 : r.height) || 0), m = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!m || l < 1 || d < 1) return [];
    const _ = m.getImageData(0, 0, l, d), y = new Uint8Array(l * d);
    for (let x = 0; x < y.length; x += 1) y[x] = _.data[x * 4 + 3];
    return _g(y, l, d, 8).map((x, P) => {
      const E = x.maxX - x.minX + 1, T = x.maxY - x.minY + 1, $ = document.createElement("canvas");
      $.width = E, $.height = T;
      const B = $.getContext("2d");
      if (!B) return null;
      const Z = B.createImageData(E, T);
      return x.pixels.forEach(({ x: st, y: wt }) => {
        const ut = (wt * l + st) * 4, _t = ((wt - x.minY) * E + (st - x.minX)) * 4;
        Z.data[_t + 0] = _.data[ut + 0], Z.data[_t + 1] = _.data[ut + 1], Z.data[_t + 2] = _.data[ut + 2], Z.data[_t + 3] = _.data[ut + 3];
      }), B.putImageData(Z, 0, 0), {
        id: vi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + P * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: x.minX / l,
          v0: x.minY / d,
          u1: (x.maxX + 1) / l,
          v1: (x.maxY + 1) / d
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
    const s = ta(r), l = xn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = xn(a, s.right) / l, m = xn(a, s.up) / l, _ = d * s.cr + m * s.sr, y = -d * s.sr + m * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - y / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function xg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (f.mode === "unwrap") {
      const s = dr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = r.map((s) => Yi(Zi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function Sg(r) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (f.mode === "unwrap") {
      const s = dr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = r.map((s) => Yi(Zi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function Ng(r, a = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], d = r[(s + 1) % r.length];
      if (!l || !d || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(d.x) || !Number.isFinite(d.y) || Math.hypot(Number(d.x) - Number(l.x), Number(d.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function Mg(r, a, s) {
    if (!Array.isArray(r) || r.length < 3 || !a || !s) return [];
    const l = [];
    for (const d of r) {
      const m = Zi(d), _ = Qi(a, m);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return Ng(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Pg(r, a, s) {
    if (!Array.isArray(r) || r.length < 1 || !a || !s) return [];
    const l = [];
    for (const d of r) {
      const m = Zi(d), _ = Qi(a, m);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function kg() {
    var l;
    const r = re(), a = Ye(r), s = ri();
    if (!r || !a) return !1;
    if (M.save(), M.fillStyle = "#050505", M.fillRect(0, 0, k.width, k.height), M.shadowColor = "rgba(0, 0, 0, 0.45)", M.shadowBlur = 24, M.shadowOffsetX = 0, M.shadowOffsetY = 10, M.fillStyle = "rgba(14, 14, 14, 1)", M.fillRect(a.x, a.y, a.w, a.h), M.restore(), M.save(), M.beginPath(), M.rect(a.x, a.y, a.w, a.h), M.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const d = Pi(r);
      Jo(M, a, d, s, `modal_frame_${String(r.id || "")}`) || drawCutoutProjectionPreview(
        M,
        t,
        s,
        a,
        r,
        String(((l = p.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      M.fillStyle = "rgba(255, 255, 255, 0.03)", M.fillRect(a.x, a.y, a.w, a.h);
    return M.restore(), M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.12)", M.lineWidth = 1, M.strokeRect(a.x + 0.5, a.y + 0.5, a.w - 1, a.h - 1), M.restore(), !0;
  }
  function Cg() {
    var v, S;
    if (((v = f.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const r = f.interaction.stroke, a = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (f.mode === "frame") {
      const x = re(), P = Ye(x);
      s = Mg(a, x, P);
    } else
      s = xg(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", d = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), _ = Math.round(Number(d.g || 0) * 255), y = Math.round(Number(d.b || 0) * 255);
    M.save(), M.beginPath(), M.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let x = 1; x < s.length; x++) M.lineTo(Number(s[x].x || 0), Number(s[x].y || 0));
    M.closePath(), l ? (M.lineWidth = 2, M.setLineDash([6, 6]), M.lineDashOffset = 0, M.strokeStyle = "rgba(0,0,0,0.96)", M.stroke(), M.lineDashOffset = -6, M.strokeStyle = "rgba(255,255,255,0.96)", M.stroke(), M.setLineDash([]), M.lineDashOffset = 0) : (M.lineWidth = 1.5, M.setLineDash([6, 4]), M.strokeStyle = `rgba(${m},${_},${y},1)`, M.stroke(), M.setLineDash([])), M.restore();
  }
  function Ag() {
    f.mode === "frame" ? kg() : f.mode === "unwrap" ? Wp(!1) : qp(!1), ng(), f.mode !== "frame" && ig(), Cg(), F && (F.textContent = `${Math.round(f.viewFov)}°`), Gt(), Pt.hasPresentedFrame || (Pt.hasPresentedFrame = !0, H.style.opacity = "1");
    const r = $p();
    r ? (O == null || O.removeAttribute("data-stage-ready"), O == null || O.setAttribute("data-stage-loading-kind", r)) : (O == null || O.setAttribute("data-stage-ready", ""), O == null || O.removeAttribute("data-stage-loading-kind"));
  }
  function Ig() {
    var a;
    if (e !== "cutout") return !1;
    const r = String(((a = f.interaction) == null ? void 0 : a.kind) || "");
    return r === "move" || r === "scale" || r === "scale_x" || r === "scale_y" || r === "rotate";
  }
  function Eg(r = f.interaction) {
    if (e !== "stickers" || f.mode !== "pano") return !1;
    const a = String((r == null ? void 0 : r.kind) || "");
    return a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Tg(r = {}) {
    var l, d, m, _;
    const a = r.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && Bs();
      return;
    }
    let s = null;
    try {
      const y = Gi(!1), v = Ko(), S = ((_ = (m = (d = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, y)) == null ? void 0 : m.displayPaint) == null ? void 0 : _.canvas) || null, x = v ? null : zl(y), P = v ? S || x : x || S;
      P && (s = {
        source: P,
        revision: `${oi()}:${Ki()}`
      });
    } catch {
      s = null;
    }
    t.__panoLivePaintSurface = s;
  }
  function ht(r = {}) {
    var v, S, x, P, E, T, $, B, Z, st;
    const a = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), d = String(((v = f.interaction) == null ? void 0 : v.kind) || "");
    (!a || d === "view" || d === "pan_frame" || Eg() || !!((S = f.viewTween) != null && S.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (Pt.backgroundDirty = !0), a && Ko() && (f.livePaintInteractionRevision += 1), (!a || l === "selection" || l === "mode" || l === "cutout_frame") && (Yo(), Xo());
    const y = e === "cutout" && (!a || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Pl() || Ig());
    Tg({ updateCutoutPreview: y }), s && (y || !a || e !== "cutout") && ((P = (x = t.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || P.call(x), (E = t.setDirtyCanvas) == null || E.call(t, !0, !1)), s && !a && (($ = (T = t.graph) == null ? void 0 : T.setDirtyCanvas) == null || $.call(T, !0, !0), (st = (Z = (B = pn) == null ? void 0 : B.canvas) == null ? void 0 : Z.setDirty) == null || st.call(Z, !0, !0)), Pt.dirty = !0;
  }
  function ru() {
    const r = k.getBoundingClientRect(), a = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return k.width !== a || k.height !== s ? (k.width = a, k.height = s, Pt.backgroundDirty = !0, Pt.dirty = !0, e === "cutout" && (Pt.pendingStableLayoutFrames = Math.max(Number(Pt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Ws(r = performance.now()) {
    var a;
    if (Pt.running) {
      if (Pt.lastTickTs = r, f.outputPreviewAnim !== f.outputPreviewAnimTo) {
        const s = Math.max(1, Number(f.outputPreviewAnimDurationMs)), l = j((r - Number(f.outputPreviewAnimStartTs || 0)) / s, 0, 1), m = f.outputPreviewAnimTo > f.outputPreviewAnimFrom ? hv(l) : pv(l);
        f.outputPreviewAnim = Sn(f.outputPreviewAnimFrom, f.outputPreviewAnimTo, m), Pt.dirty = !0, l >= 1 && (f.outputPreviewAnim = f.outputPreviewAnimTo);
      }
      if ((a = f.viewTween) != null && a.active) {
        const s = f.viewTween, l = j((r - s.startTs) / s.durationMs, 0, 1), d = dv(l);
        f.viewYaw = $e(s.startYaw + s.deltaYaw * d), f.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * d, f.viewFov = s.startFov + (s.targetFov - s.startFov) * d, Pt.backgroundDirty = !0, Pt.dirty = !0, l >= 1 && (f.viewTween = null);
      }
      if (f.viewInertia.vx = Number(Oe.state.inertia.vx || 0), f.viewInertia.vy = Number(Oe.state.inertia.vy || 0), f.viewInertia.active = !!Oe.state.inertia.active, Oe.stepInertia(r) && (f.viewInertia.vx = Number(Oe.state.inertia.vx || 0), f.viewInertia.vy = Number(Oe.state.inertia.vy || 0), f.viewInertia.active = !!Oe.state.inertia.active, Pt.backgroundDirty = !0, Pt.dirty = !0), (Pt.dirty || r - Pt.lastSizeCheckTs >= 220) && (ru(), Pt.lastSizeCheckTs = r), Pt.pendingStableLayoutFrames > 0 && (Pt.pendingStableLayoutFrames -= 1, Pt.dirty = !0), Pt.dirty) {
        if (Pt.pendingStableLayoutFrames > 0) {
          Pt.rafId = requestAnimationFrame(Ws);
          return;
        }
        Pt.dirty = !1, Ag();
      }
      Pt.rafId = requestAnimationFrame(Ws);
    }
  }
  function Lg() {
    Pt.running = !1, Pt.rafId && cancelAnimationFrame(Pt.rafId), Pt.rafId = 0;
  }
  function le() {
    i || (f.historyController.commitActionGroup(JSON.stringify(Jf(p))), Qs());
  }
  function to(r) {
    if (i) return;
    const a = r < 0 ? f.historyController.undo() : f.historyController.redo();
    if (Qs(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), f.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, f.selectedIds = f.selectedId ? [f.selectedId] : [], In(), un(), qt(), En(), ht({ cause: "cutout_frame" });
  }
  function iu() {
    var s, l;
    const r = Array.isArray((s = f.historyController) == null ? void 0 : s.entries) ? f.historyController.entries : [], a = Number((l = f.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && a > 0,
      canRedo: !i && r.length > 1 && a >= 0 && a < r.length - 1
    };
  }
  function un() {
    var _, y, v;
    rt == null || rt.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const x = S.getAttribute("data-tool-mode") === f.primaryTool;
      S.classList.toggle("active", x), S.setAttribute("aria-pressed", x ? "true" : "false");
    });
    const r = f.primaryTool === "paint" || f.primaryTool === "mask";
    if (gt && nt(r), !r) {
      St.forEach((S) => {
        S.classList.remove("is-active");
      }), X && (X.hidden = !0);
      return;
    }
    const a = f.primaryTool, s = St.find((S) => String(S.getAttribute("data-paint-pane") || "") === a) || null;
    if (St.forEach((S) => {
      S.classList.toggle("is-active", S === s);
    }), jt.forEach((S) => {
      S.hidden = !1;
    }), I.forEach((S) => {
      S.hidden = !1;
    }), Y && (clearTimeout(Y), Y = 0), A.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === f.paintTool);
    }), A.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === f.maskTool);
    }), At) {
      const S = f.paintTool !== "eraser";
      At.hidden = !1, At.classList.toggle("disabled", !S), !S && X && !X.hidden && (Y = window.setTimeout(() => {
        X.hidden = !0, Y = 0;
      }, 170));
      const x = ((_ = Ga.find((E) => Ka(f.paintColor, E.color))) == null ? void 0 : _.id) || "";
      At.querySelectorAll("[data-paint-color-swatch]").forEach((E) => {
        const T = E.getAttribute("data-paint-color-swatch") === x;
        E.classList.toggle("active", T), E.setAttribute("aria-pressed", T ? "true" : "false"), E.disabled = !S;
      });
      const P = At.querySelector("[data-paint-color-custom]");
      if (P) {
        const E = !x;
        P.classList.toggle("active", E), P.style.setProperty("--custom-color", Nn(f.customPaintColor, 1)), P.setAttribute("aria-pressed", E ? "true" : "false"), P.disabled = !S;
      }
      if (U && (U.value = String(Math.round(j(Number(((y = f.customPaintColor) == null ? void 0 : y.a) ?? 1), 0, 1) * 100))), kt && (kt.textContent = `${Math.round(j(Number(((v = f.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Nt && (Nt.style.background = Nn(f.customPaintColor)), X) {
        const E = ho(f.customPaintColor);
        X.style.setProperty("--picker-hue-color", Nn({ ...kc(E.h, 1, 1), a: 1 }, 1)), X.style.setProperty("--picker-sat", `${j(E.s, 0, 1) * 100}%`), X.style.setProperty("--picker-val", `${(1 - j(E.v, 0, 1)) * 100}%`), X.style.setProperty("--picker-hue", `${j(E.h, 0, 1) * 100}%`);
      }
      if (he) {
        const E = ho(f.customPaintColor);
        he.style.left = `${j(E.s, 0, 1) * 100}%`, he.style.top = `${(1 - j(E.v, 0, 1)) * 100}%`;
      }
      if (Se) {
        const E = ho(f.customPaintColor);
        Se.style.left = `${j(E.h, 0, 1) * 100}%`;
      }
      if (Mt && Rt) {
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
    const l = yr(f.primaryTool === "paint" ? f.paintTool : f.maskTool), d = f.brushSizes[l] ?? 10, m = dp();
    jt.forEach((S) => {
      S.classList.toggle("disabled", m);
    }), z.forEach((S) => {
      S.value = String(d);
      const x = (d - 1) / 119 * 100;
      S.style.setProperty("--v", `${j(x, 0, 100)}%`), S.disabled = m;
    }), J.forEach((S) => {
      S.textContent = String(d);
    });
  }
  function si(r, a, s, l, d, m, _, y = !0) {
    const v = document.createElement("div");
    v.dataset.key = s, v.dataset.min = String(d), v.dataset.max = String(m), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${d}' max='${m}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${d}' max='${m}' step='${_}' value='${Cc(a[s] || 0)}'>`;
    const [S, x] = v.querySelectorAll("input"), P = () => {
      const T = Number(d), $ = Number(m), Z = (Number(S.value) - T) / Math.max(1e-6, $ - T) * 100;
      S.style.setProperty("--v", `${j(Z, 0, 100)}%`);
    };
    S.disabled = !y, x.disabled = !y;
    const E = (T) => {
      if (!y) return;
      let $ = Number(T);
      Number.isNaN($) && ($ = 0), $ = j($, d, m), s === "yaw_deg" && ($ = $e($)), a[s] = $, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = zr(a)), S.value = String($), x.value = Cc($), P(), ht();
    };
    S.oninput = () => E(S.value), x.oninput = () => E(x.value), S.onchange = () => le(), x.onchange = () => le(), P(), r.appendChild(v);
  }
  function qs() {
    const r = ve();
    if (!r) return;
    f.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: bi(r)
    }, at.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const _ = m.dataset.key;
      if (!_ || !(_ in r)) return;
      const y = m.querySelector("input[type='range']"), v = m.querySelector("input[type='number']");
      if (!y || !v) return;
      const S = Number(m.dataset.min ?? y.min ?? 0), x = Number(m.dataset.max ?? y.max ?? 0);
      let P = Number(r[_] || 0);
      Number.isNaN(P) && (P = 0), P = j(P, S, x);
      const E = String(P);
      y.value !== E && (y.value = E);
      const T = Cc(P);
      v.value !== T && (v.value = T);
      const $ = (P - S) / Math.max(1e-6, x - S) * 100;
      y.style.setProperty("--v", `${j($, 0, 100)}%`);
    });
    const s = bi(r), l = at.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), at.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === s);
    });
  }
  function qt() {
    var lt, Tt, Ot, Lt, $t, zt, Bt, Kt, ge, Zn, Jn, no, ua, fi, di, ro;
    if (o) return;
    const r = [...at.children].slice(0, 2);
    at.innerHTML = "", r.forEach((It) => at.appendChild(It));
    const a = at.querySelector(".pano-side-actions");
    if (a && (a.innerHTML = ""), c) {
      const It = document.createElement("div");
      It.className = "pano-inspector";
      const Zt = document.createElement("details");
      Zt.className = "pano-ui-settings", Zt.open = !1, Zt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(lt = p.ui_settings) != null && lt.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tt = p.ui_settings) != null && Tt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ot = p.ui_settings) != null && Ot.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Lt = p.ui_settings) != null && Lt.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${($t = p.ui_settings) != null && $t.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(zt = p.ui_settings) != null && zt.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Ae = Zt.querySelector("[data-setting='invert-x']"), Tn = Zt.querySelector("[data-setting='invert-y']"), Qn = Zt.querySelector("[data-ui-picker='quality']"), Ln = Zt.querySelector("[data-action='ui-reset-defaults']"), tr = (ue, ke, _n, hi) => {
        const br = ue.querySelector(".pano-picker-trigger"), io = ue.querySelector(".pano-picker-label"), wn = ue.querySelector(".pano-picker-pop"), vr = () => {
          const Rn = String(_n()), On = ke.find((oo) => String(oo.value) === Rn) || ke[0];
          io.textContent = On.label, wn.innerHTML = "", ke.forEach((oo) => {
            const ao = document.createElement("button");
            ao.type = "button", ao.className = `pano-picker-item${String(oo.value) === Rn ? " active" : ""}`, ao.textContent = oo.label, ao.onclick = () => {
              hi(oo.value), wn.hidden = !0, vr(), mr(), ht();
            }, wn.appendChild(ao);
          });
        };
        return br.onclick = (Rn) => {
          Rn.stopPropagation(), Zt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((On) => {
            On !== wn && (On.hidden = !0);
          }), wn.hidden = !wn.hidden;
        }, vr(), vr;
      }, Dn = (ue, ke) => {
        ue.setAttribute("data-selected", ke ? "1" : "0"), ue.querySelectorAll(".pano-segment-btn").forEach((_n) => {
          _n.setAttribute("aria-pressed", _n.getAttribute("data-value") === (ke ? "1" : "0") ? "true" : "false");
        });
      };
      Ae.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const ke = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = ke, Dn(Ae, ke), mr(), ht();
        };
      }), Tn.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const ke = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = ke, Dn(Tn, ke), mr(), ht();
        };
      });
      const Ht = tr(
        Qn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (ue) => {
          const ke = String(ue || "balanced");
          p.ui_settings.preview_quality = ke === "draft" || ke === "high" ? ke : "balanced";
        }
      );
      Ln.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Dn(Ae, !1), Dn(Tn, !1), Ht(), mr(), ht();
      }, It.appendChild(Zt), at.appendChild(It);
      const ne = document.createElement("div");
      ne.className = "pano-side-footer", ne.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', ne.querySelector("[data-action='close-preview']").onclick = () => ui(), at.appendChild(ne), eo(It);
      return;
    }
    const s = ve(), l = An(), d = El();
    l.length > 1 && (f.panelLastValues = f.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && d !== "stroke" && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (d === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (d === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: bi(s)
    });
    const m = f.panelLastValues || (e === "stickers" || d === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = d === "stroke" ? null : s, y = _ || m, v = !!_, S = document.createElement("div");
    S.className = "pano-inspector";
    const x = document.createElement("div");
    for (x.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; x.firstChild; ) S.appendChild(x.firstChild);
    if (at.appendChild(S), e === "stickers" || e === "cutout") {
      const It = document.createElement("div");
      It.className = "pano-field-wide pano-target-row";
      const Zt = "Selection";
      It.innerHTML = `
        <label>${Zt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const Ae = It.querySelector(".pano-picker-trigger"), Tn = It.querySelector(".pano-picker-label"), Qn = It.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Me().forEach((Ht, ne) => {
        var _n, hi;
        const ue = Ce(Ht) ? String(Ht.id || Or) : String(((hi = (_n = p.assets) == null ? void 0 : _n[Ht.asset_id]) == null ? void 0 : hi.name) || Ht.asset_id || Ht.id), ke = `${ne + 1}. ${ue}${Ce(Ht) && ei(Ht) ? " (hidden)" : ""}`;
        Ln.push({ id: Ht.id, label: ke, item: Ht, kind: "image" });
      }) : cp().forEach((Ht) => {
        Ln.push({ id: Ht.item.id, label: Ht.label, item: Ht.item, kind: Ht.kind });
      });
      const tr = (_ == null ? void 0 : _.id) || "", Dn = Ln.find((Ht) => Ht.id === tr) || Ln[0];
      Tn.innerHTML = Dn.item ? Tl(Dn) : Ea(String(Dn.label || "")), Qn.innerHTML = "", Ln.forEach((Ht) => {
        const ne = document.createElement("button");
        ne.type = "button", ne.className = `pano-picker-item${Ht.id === tr ? " active" : ""}`, ne.innerHTML = Ht.item ? Tl(Ht) : Ea(String(Ht.label || "")), ne.onclick = () => {
          Qn.hidden = !0, qi(Ht.item || null);
          const ue = Ht.item || null;
          if (ue && !Te(ue)) {
            const ke = $e(Number(ue.yaw_deg || 0)), _n = j(Number(ue.pitch_deg || 0), -89.9, 89.9);
            Jr(ke, _n, f.viewFov);
          }
          qt(), Gt(), ht();
        }, Qn.appendChild(ne);
      }), Ae.disabled = Ln.length <= 1, Ae.onclick = (Ht) => {
        Ht.stopPropagation(), !Ae.disabled && (Qn.hidden = !Qn.hidden);
      }, S.appendChild(It);
    }
    const P = document.createElement("div");
    P.className = "pano-state-actions", P.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Dt.copy}<span>Copy State</span></button>`;
    const E = P.querySelector("[data-action='copy-state-inline']");
    E.disabled = !v || d === "stroke" || l.length > 1, E.onclick = async () => {
      if (!v || d === "stroke" || l.length > 1) return;
      const It = JSON.stringify(e === "cutout" && d !== "image" ? Fl(y) : _p(s));
      try {
        await navigator.clipboard.writeText(It);
        const Zt = E.querySelector("span");
        Zt && (Zt.textContent = "Copied", window.setTimeout(() => {
          Zt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(P);
    const T = document.createElement("div");
    T.className = `pano-params${f.panelWasEnabled ? "" : " disabled"}`, S.appendChild(T), l.length > 1 ? (T.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, T.classList.toggle("disabled", !v), f.panelWasEnabled = v, Yo()) : (si(T, y, "yaw_deg", "Yaw", -180, 180, 0.1, v && !i), si(T, y, "pitch_deg", "Pitch", -90, 90, 0.1, v && !i), si(T, y, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !i), si(T, y, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !i), e === "stickers" || d === "image" ? si(T, y, "rot_deg", "Rotation", -180, 180, 0.1, v && !i) : si(T, y, "roll_deg", "Roll", -180, 180, 0.1, v && !i), v !== f.panelWasEnabled ? requestAnimationFrame(() => {
      T.classList.toggle("disabled", !v);
    }) : T.classList.toggle("disabled", !v), f.panelWasEnabled = v, Yo());
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
    const B = Array.isArray((Kt = (Bt = p == null ? void 0 : p.painting) == null ? void 0 : Bt.paint) == null ? void 0 : Kt.strokes) ? p.painting.paint.strokes.length : 0, Z = Array.isArray((Zn = (ge = p == null ? void 0 : p.painting) == null ? void 0 : ge.mask) == null ? void 0 : Zn.strokes) ? p.painting.mask.strokes.length : 0, st = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((It) => String((It == null ? void 0 : It.name) || "")) : [], wt = Zh(
      t,
      st.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ut = !!String((wt == null ? void 0 : wt.src) || "").trim() || Dl("pano_input_images").length > 0, _t = Array.isArray(Me()) && Me().length > 0 || B > 0, yt = Z > 0, vt = (It) => It === "panorama" ? ut : It === "objects" ? _t : yt, mt = (It, Zt) => {
      const Ae = It.closest("[data-visibility-row]"), Tn = vt(String(It.getAttribute("data-visibility") || ""));
      It.innerHTML = Zt ? Dt.eye : Dt.eye_dashed, It.setAttribute("aria-pressed", Zt ? "true" : "false"), It.setAttribute("data-tip", Zt ? "Hide" : "Show"), It.disabled = !Tn, It.classList.toggle("active", !!Zt), Ae == null || Ae.classList.toggle("is-hidden", !Zt), Ae == null || Ae.classList.toggle("is-disabled", !Tn);
    };
    if ($.querySelectorAll("[data-visibility]").forEach((It) => {
      const Zt = String(It.getAttribute("data-visibility") || ""), Ae = () => Zt === "panorama" ? !!f.showPanorama : Zt === "objects" ? !!f.showObjects : !!f.showMask;
      mt(It, Ae()), It.onclick = () => {
        vt(Zt) && (Zt === "panorama" ? f.showPanorama = !f.showPanorama : Zt === "objects" ? f.showObjects = !f.showObjects : f.showMask = !f.showMask, mt(It, Ae()), ht());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild($), !i) {
      const It = document.createElement("details");
      It.className = "pano-ui-settings", It.open = !1, It.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Jn = p.ui_settings) != null && Jn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(no = p.ui_settings) != null && no.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ua = p.ui_settings) != null && ua.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(fi = p.ui_settings) != null && fi.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(di = p.ui_settings) != null && di.invert_view_y ? "false" : "true"}">Normal</button>
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
      const Zt = It.querySelector("[data-setting='invert-x']"), Ae = It.querySelector("[data-setting='invert-y']"), Tn = It.querySelector("[data-ui-picker='quality']"), Qn = It.querySelector("[data-action='ui-reset-defaults']"), Ln = (Ht, ne, ue, ke) => {
        const _n = Ht.querySelector(".pano-picker-trigger"), hi = Ht.querySelector(".pano-picker-label"), br = Ht.querySelector(".pano-picker-pop"), io = () => {
          const wn = String(ue()), vr = ne.find((Rn) => String(Rn.value) === wn) || ne[0];
          hi.textContent = vr.label, br.innerHTML = "", ne.forEach((Rn) => {
            const On = document.createElement("button");
            On.type = "button", On.className = `pano-picker-item${String(Rn.value) === wn ? " active" : ""}`, On.textContent = Rn.label, On.onclick = () => {
              ke(Rn.value), br.hidden = !0, io(), mr(), t.setDirtyCanvas(!0, !0), ht();
            }, br.appendChild(On);
          });
        };
        return _n.onclick = (wn) => {
          wn.stopPropagation(), It.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((vr) => {
            vr !== br && (vr.hidden = !0);
          }), br.hidden = !br.hidden;
        }, io(), io;
      }, tr = (Ht, ne) => {
        Ht.setAttribute("data-selected", ne ? "1" : "0"), Ht.querySelectorAll(".pano-segment-btn").forEach((ue) => {
          ue.setAttribute("aria-pressed", ue.getAttribute("data-value") === (ne ? "1" : "0") ? "true" : "false");
        });
      };
      Zt.querySelectorAll(".pano-segment-btn").forEach((Ht) => {
        Ht.onclick = () => {
          const ne = Ht.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = ne, tr(Zt, ne), mr(), t.setDirtyCanvas(!0, !0), ht();
        };
      }), Ae.querySelectorAll(".pano-segment-btn").forEach((Ht) => {
        Ht.onclick = () => {
          const ne = Ht.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = ne, tr(Ae, ne), mr(), t.setDirtyCanvas(!0, !0), ht();
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
      Qn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", tr(Zt, !1), tr(Ae, !1), Dn(), mr(), t.setDirtyCanvas(!0, !0), ht();
      }, S.appendChild(It);
    }
    const K = document.createElement("div");
    K.className = "pano-side-footer", K.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, K.querySelector("[data-action='cancel-close']").onclick = () => ui(), K.querySelector("[data-action='save-close']").onclick = () => {
      du(), ui();
    }, at.appendChild(K), eo(S);
  }
  function ra(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function ou(r) {
    if (i || e !== "stickers" && e !== "cutout" || !ra(r)) return;
    const a = po("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((_, y) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => y(new Error("image load failed")), v.src = s;
      });
      Ct.set(a, l);
      const d = po("st");
      p.stickers.push({
        id: d,
        asset_id: a,
        yaw_deg: f.viewYaw,
        pitch_deg: f.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ir(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Ll()
      }), qi(p.stickers[p.stickers.length - 1]), Xs(), le(), qt(), Gt(), ht();
      const m = (async () => {
        const _ = await Os(r, String(r.name || a));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === a).length && (p.assets[a] = _, ii(), Pe(), qt(), Gt(), ht());
      })();
      _o.set(a, m);
      try {
        await m;
      } finally {
        _o.delete(a);
      }
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete p.assets[a], Ct.delete(a);
      const d = Array.isArray(p.stickers) ? p.stickers : [], m = d.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") === a);
      m.length && (p.stickers = d.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") !== a), m.some((_) => {
        var y;
        return String((_ == null ? void 0 : _.id) || "") === String(((y = f.selection) == null ? void 0 : y.id) || "");
      }) && qi(null), qt(), Gt(), ht());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function au(r) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, a.click();
  }
  function Ys() {
    i || e !== "stickers" && e !== "cutout" || au((r) => {
      ou(r);
    });
  }
  async function Dg(r) {
    var S;
    if (i || e !== "stickers" && e !== "cutout") return;
    const a = ve();
    if (!a || !De(a) || Ce(a) || !ra(r)) return;
    const s = String(a.id || ""), l = String(a.asset_id || ""), d = l ? Ze(((S = p.assets) == null ? void 0 : S[l]) || null) : null, m = Number(a.vFOV_deg || 0), _ = a.crop && typeof a.crop == "object" ? { ...a.crop } : null, y = po("asset"), v = URL.createObjectURL(r);
    try {
      const x = await new Promise((E, T) => {
        const $ = new Image();
        $.onload = () => E($), $.onerror = () => T(new Error("image load failed")), $.src = v;
      });
      Ct.set(y, x), a.asset_id = y, a.vFOV_deg = Ir(
        Number(a.hFOV_deg || 30),
        Number(x.naturalWidth || x.width || 1),
        Number(x.naturalHeight || x.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, hn(), le(), qt(), Gt(), ht();
      const P = (async () => {
        const E = await Os(r, String(r.name || y));
        (Array.isArray(p.stickers) ? p.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === y) && (p.assets[y] = E, ii(), Pe(), qt(), Gt(), ht());
      })();
      _o.set(y, P);
      try {
        await P;
      } finally {
        _o.delete(y);
      }
    } catch (x) {
      console.error("[PanoramaSuite] failed to replace sticker asset", x), delete p.assets[y], Ct.delete(y);
      const P = (Array.isArray(p.stickers) ? p.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === s) || null;
      P && String(P.asset_id || "") === y && (l && d && (p.assets[l] = d), P.asset_id = l, P.vFOV_deg = m, P.crop = _ ? { ..._ } : null), hn(), qt(), Gt(), ht();
    } finally {
      URL.revokeObjectURL(v);
    }
  }
  function Rg() {
    if (i) return;
    const r = ve();
    !r || !De(r) || Ce(r) || au((a) => {
      Dg(a);
    });
  }
  async function Og() {
    if (i || e !== "stickers") return;
    const r = p.assets && typeof p.assets == "object" ? p.assets : {}, a = Object.entries(r).filter(([, l]) => {
      const d = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return d === "dataurl" && m.startsWith("data:image");
    });
    if (!a.length) return;
    let s = !1;
    for (const [l, d] of a)
      try {
        const m = String((d == null ? void 0 : d.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((P) => P.blob()), y = String(_.type || "image/png").split("/")[1] || "png", v = String((d == null ? void 0 : d.name) || `${l}.${y}`), S = new File([_], v, { type: _.type || "image/png" }), x = await Os(S, v);
        p.assets[l] = {
          ...x,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, s = !0;
      } catch (m) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: m });
      }
    s && (Pe(), ht());
  }
  function su() {
    i || e === "cutout" && (Xs(), p.shots = [{
      id: po("sh"),
      yaw_deg: f.viewYaw,
      pitch_deg: f.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Bh(64, 40)
    }], qi(p.shots[0]), f.cutoutAspectOpen = !1, le(), Pe(), qt(), ht({ cause: "cutout_frame" }));
  }
  function Fg() {
    i || e === "cutout" && (p.shots = [], f.selectedId = null, f.selectedIds = [], f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, p.active.selected_shot_id = null, le(), Pe(), qt(), ht());
  }
  function $g() {
    const r = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of r)
      Ce(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function cu(r, a, s = "Clear") {
    return new Promise((l) => {
      const d = document.createElement("div");
      d.className = "pano-canvas-confirm", d.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${r}">
          <div class="pano-canvas-confirm-title">${r}</div>
          <div class="pano-canvas-confirm-text">${a}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${s}</button>
          </div>
        </div>
      `;
      const m = (v) => {
        d.remove(), l(!!v);
      };
      d.addEventListener("pointerdown", (v) => {
        v.target === d && m(!1);
      });
      const _ = d.querySelector("[data-action='cancel']"), y = d.querySelector("[data-action='confirm']");
      _.onclick = () => m(!1), y.onclick = () => m(!0), O.appendChild(d), y.focus();
    });
  }
  async function lu() {
    var s, l;
    if (i || !await cu(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = Io(null), In();
    const a = $g();
    e === "stickers" ? (p.stickers = a, p.assets = {}, f.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, ii()) : (p.stickers = a, p.assets = {}, p.shots = [], f.selectedId = null, f.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, ii()), le(), Pe(), qt(), Gt(), ht();
  }
  async function Hg(r) {
    var m, _, y, v;
    if (i) return;
    const a = r === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = li(a);
    if (!(!l.length && !(((m = f.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = f.interaction) == null ? void 0 : _.layerKind) === a) || !await cu(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((y = f.interaction) == null ? void 0 : y.kind) === "draw" && ((v = f.interaction) == null ? void 0 : v.layerKind) === a) {
        const S = Xn();
        S && f.paintEngine.cancelActiveStroke(S), f.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = ln().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== a), a === "paint" && (se().length = 0), In(), le(), Pe(), qt(), Gt(), un(), ht();
    }
  }
  function Vg() {
    if (i) return;
    const r = ve();
    if (!r || !De(r) || Ce(r)) return;
    const a = JSON.parse(JSON.stringify(r));
    a.id = po("st"), a.yaw_deg = $e((a.yaw_deg || 0) + 8), a.z_index = Ll(), p.stickers.push(a), p.active.selected_sticker_id = a.id, f.selectedId = a.id, f.selectedIds = [a.id], hn(), le(), Pe(), Gt(), qt(), ht();
  }
  function uu() {
    var s, l, d, m, _, y, v;
    if (i) return;
    const r = An(), a = ve();
    if (!(!a && r.length === 0)) {
      if (r.length > 1) {
        const S = new Set(r.filter((E) => Te(E)).map((E) => String(E.actionGroupId || E.id || ""))), x = new Set(r.filter((E) => We(E)).map((E) => Ke(E.rasterObjectId || E.id || ""))), P = new Set(r.filter(De).map((E) => String(E.id || "")));
        S.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || ""))), p.painting.groups = se().filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || ""))), In()), x.size > 0 && (p.painting.raster_objects = ln().filter((E) => !x.has(String((E == null ? void 0 : E.id) || ""))), Ji()), P.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((E) => P.has(String((E == null ? void 0 : E.id) || "")) ? Ce(E) ? (ei(E) || (E.visible = !1), !0) : !1 : !0), ii(), hn()), f.selectedId = null, f.selectedIds = [], le(), Pe(), qt(), Gt(), ht();
        return;
      }
      if (Te(a)) {
        const S = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((m = (d = p.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? p.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== S), p.painting.groups = se().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== S), In(), f.selectedId = null, f.selectedIds = [], le(), Pe(), qt(), Gt(), ht();
        return;
      }
      if (We(a)) {
        const S = Ke(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = ln().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== S), Ji(), f.selectedId = null, f.selectedIds = [], le(), Pe(), qt(), Gt(), ht();
        return;
      }
      if (e === "stickers" || De(a)) {
        if (Ce(a)) {
          if (ei(a)) return;
          a.visible = !1, hn(), le(), Pe(), qt(), Gt(), ht();
          return;
        }
        p.stickers = p.stickers.filter((S) => S.id !== a.id), ii(), hn(), f.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((y = p.stickers[0]) == null ? void 0 : y.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, le(), Pe(), qt(), Gt(), ht();
        return;
      }
      Fg();
    }
  }
  function zg(r, a) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const E = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(E)) {
        const [B, Z] = E.split(":").map((st) => Number(st));
        if (Number.isFinite(B) && Number.isFinite(Z)) return B >= Z;
      }
      const T = Number(r.hFOV_deg || 64), $ = Number(r.vFOV_deg || 40);
      return Math.abs(T - $) > 1e-6 ? T >= $ : Jc(r) >= 1;
    })();
    let [d, m] = s[String(a)] || s["1:1"];
    d >= m !== l && ([d, m] = [m, d]);
    const _ = d / m, y = j(Number(r.hFOV_deg || 64), 1, 179), v = j(Number(r.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, y * v)), x = j(S * Math.sqrt(_), 1, 179), P = j(S / Math.sqrt(_), 1, 179);
    r.hFOV_deg = x, r.vFOV_deg = P, r.aspect_id = String(a);
  }
  function Ug(r) {
    if (!r) return;
    const a = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = a, r.aspect_id = zr(r);
  }
  function fu() {
    Ar().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function jg() {
    if (i) return;
    const r = An();
    if (!ve() || r.length === 0) return;
    fu();
    const s = Ar(), l = new Set(r.map((y) => De(y) ? `sticker:${String(y.id || "")}` : We(y) ? `rasterObject:${Ke(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), d = [], m = [];
    if (s.forEach((y) => {
      var S, x;
      const v = y.type === "sticker" ? `sticker:${String(((S = y.item) == null ? void 0 : S.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((x = y.item) == null ? void 0 : x.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(v) ? d.push(y) : m.push(y);
    }), !d.length || d[d.length - 1] === s[s.length - 1]) return;
    [...m, ...d].forEach((y, v) => {
      y.type === "sticker" && y.item && (y.item.z_index = v), y.type === "strokeGroup" && y.item && (y.item.z_index = v), y.type === "rasterObject" && y.item && (y.item.z_index = v);
    }), hn(), le(), Pe(), Gt(), ht();
  }
  function Bg() {
    if (i) return;
    const r = An();
    if (!ve() || r.length === 0) return;
    fu();
    const s = Ar(), l = new Set(r.map((y) => De(y) ? `sticker:${String(y.id || "")}` : We(y) ? `rasterObject:${Ke(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), d = [], m = [];
    if (s.forEach((y) => {
      var S, x;
      const v = y.type === "sticker" ? `sticker:${String(((S = y.item) == null ? void 0 : S.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((x = y.item) == null ? void 0 : x.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(v) ? d.push(y) : m.push(y);
    }), !d.length || d[0] === s[0]) return;
    [...d, ...m].forEach((y, v) => {
      y.type === "sticker" && y.item && (y.item.z_index = v), y.type === "strokeGroup" && y.item && (y.item.z_index = v), y.type === "rasterObject" && y.item && (y.item.z_index = v);
    }), hn(), le(), Pe(), Gt(), ht();
  }
  function du() {
    i || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", h && (p.output_preset = Qf(h.value, Number(p.output_preset || 2048))), g && (p.bg_color = String(g.value || p.bg_color || "#00ff00")), En(), t.setDirtyCanvas(!0, !0));
  }
  function En() {
    var a;
    if (i) return;
    const r = JSON.stringify(p);
    b && (b.value = r, (a = b.callback) == null || a.call(b, r));
  }
  function mr() {
    p.ui_settings = xv(p.ui_settings), i || En();
  }
  function Pe() {
    var r;
    i || (En(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0));
  }
  function Xs() {
    f.primaryTool !== "cursor" && (f.primaryTool = "cursor", un(), qt());
  }
  function ci(r) {
    const a = k.getBoundingClientRect();
    return {
      x: (r.clientX - a.left) / a.width * k.width,
      y: (r.clientY - a.top) / a.height * k.height
    };
  }
  function ia(r) {
    const a = k.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(a.left || 0),
      y: Number(r.clientY) - Number(a.top || 0)
    };
  }
  function hu() {
    return f.mode === "pano" || f.mode === "unwrap";
  }
  function re() {
    var s;
    if (e !== "cutout") return null;
    const r = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === a) || r[0] || null;
  }
  function Ye(r = re()) {
    var E, T, $, B;
    if (!r) return null;
    const a = Math.max(1e-4, Number(((E = Pi(r)) == null ? void 0 : E.aspect) || 1)), s = 56, l = Math.max(80, k.width - s * 2), d = Math.max(80, k.height - s * 2);
    let m = l, _ = m / a;
    _ > d && (_ = d, m = _ * a);
    const y = Math.max(0.1, Number(((T = f.frameView) == null ? void 0 : T.zoom) || 1)), v = m * y, S = _ * y, x = Number((($ = f.frameView) == null ? void 0 : $.panX) || 0), P = Number(((B = f.frameView) == null ? void 0 : B.panY) || 0);
    return {
      x: (k.width - v) * 0.5 + x,
      y: (k.height - S) * 0.5 + P,
      w: v,
      h: S
    };
  }
  function Zs() {
    return e === "cutout" && f.mode === "frame" && !!re();
  }
  function bn(r, a = performance.now()) {
    if (f.mode === "unwrap") {
      const m = dr(), _ = (r.x - m.x) / Math.max(1, m.w), y = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: j(y, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Ds(r.x, r.y), { lon: l, lat: d } = Vs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - d / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function vn(r, a, s = performance.now()) {
    const l = Ye(a);
    if (!l) return null;
    const d = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    }, m = Gs(a, d);
    if (!m) return null;
    const { lon: _, lat: y } = Vs(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - y / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Gg(r, a) {
    var S;
    const s = re(), l = Ye(s);
    if (!s || !l) return !1;
    const d = Math.max(0.1, Number(((S = f.frameView) == null ? void 0 : S.zoom) || 1)), m = j(d * Number(a), 0.25, 12);
    if (Math.abs(m - d) < 1e-6) return !1;
    const _ = (Number(r.x) - l.x) / Math.max(1e-6, l.w), y = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    f.frameView.zoom = m;
    const v = Ye(s);
    return v ? (f.frameView.panX += Number(r.x) - (v.x + v.w * _), f.frameView.panY += Number(r.y) - (v.y + v.h * y), !0) : !1;
  }
  function Kg(r, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function yr(r) {
    const a = String(r || "").trim();
    return a === "eraser" ? nr : on[a] ? a : f.activeBrushPresetId || nr;
  }
  function pu() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (hu() || Zs());
  }
  function gu() {
    var r;
    return pu() && ((r = f.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function oa(r, a = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), d = a !== !1, m = f.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== d || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - l) > 0.01;
    return f.pointerPos = { x: s, y: l, inside: d }, _;
  }
  function Wg() {
    var x, P;
    if (!gu()) return null;
    const r = f.primaryTool === "mask" ? "mask" : "paint", a = r === "mask" ? f.maskTool : f.paintTool, s = yr(a), l = on[s] || on[nr], d = Number(f.brushSizes[s] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), y = r === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(f.paintColor), v = r === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : j(Math.max(0.16, Number(y.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : a === "eraser" ? 0.75 : j(Math.max(0.46, Number(y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: Nn(y, v),
      strokeStyle: Nn(y, S),
      x: Number(((x = f.pointerPos) == null ? void 0 : x.x) || 0),
      y: Number(((P = f.pointerPos) == null ? void 0 : P.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function qg() {
    var E, T, $;
    const r = Wg();
    if (!D) return;
    if (!r) {
      D.style.display = "none";
      return;
    }
    let a = r.radius * 2, s = r.radius * 2, l = "999px", d = 0, m = r.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let x = Number(r.hotspotX ?? a * 0.5), P = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      a = ds, s = ds, l = "0", _ = "0", y = "none", x = uv, P = fv, m = mv(r.fillStyle, S, v);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((E = r.preset) == null ? void 0 : E.aspect) ?? 1));
      a = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, d = Number((($ = (T = r.preset) == null ? void 0 : T.angle) == null ? void 0 : $.value) || 0) * Vr;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    D.style.display = "block", D.style.width = `${Math.round(a)}px`, D.style.height = `${Math.round(s)}px`, D.style.borderRadius = l, D.style.border = _, D.style.boxShadow = y, D.style.background = m, D.style.backgroundRepeat = "no-repeat", D.style.backgroundPosition = "center", D.style.backgroundSize = "contain", D.style.transform = `translate(${Math.round(r.x - x)}px, ${Math.round(r.y - P)}px) rotate(${d}deg)`;
  }
  function Yg() {
    var wt;
    if (!V || !R) return;
    const r = f.primaryTool === "mask" ? "mask" : "paint", a = r === "mask" ? f.maskTool : f.paintTool;
    if (a === "lasso_fill") return;
    const s = yr(a), l = on[s] || on[nr], d = Number(f.brushSizes[s] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), y = a === "eraser", v = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : y ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(f.paintColor), S = r === "mask" ? Nn(v, 0.22) : y ? "rgba(255,255,255,0.14)" : Nn(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), x = r === "mask" ? Nn(v, 0.96) : y ? "rgba(255,255,255,0.72)" : Nn(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let P = _ * 2, E = _ * 2, T = "999px", $ = 0, B = S;
    const Z = "rgba(222, 222, 222, 0.72)", st = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const ut = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      P = Math.max(16, _ * 2 * ut), E = Math.max(10, _ * 2), T = `${Math.min(8, E * 0.42)}px`, $ = Number(((wt = l == null ? void 0 : l.angle) == null ? void 0 : wt.value) || 0) * Vr;
    } else a === "brush" ? B = `radial-gradient(circle at 50% 50%, ${x} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (P = Math.max(18, _ * 1.8), E = P, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${x} 43%, ${x} 58%, rgba(0,0,0,0) 59%)`) : y && (B = "rgba(255,255,255,0.12)");
    R.style.width = `${Math.round(P)}px`, R.style.height = `${Math.round(E)}px`, R.style.borderRadius = T, R.style.background = B, R.style.border = `1px solid ${Z}`, R.style.boxShadow = `0 0 0 1px ${st}`, R.style.transform = `rotate(${$}deg)`, q && (clearTimeout(q), q = 0), V.classList.remove("fade-out"), V.classList.add("show");
  }
  function aa() {
    !V || !V.classList.contains("show") || (V.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      V.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function Xg(r, a, s, l) {
    const d = yr(a), m = on[d] || on[nr], _ = f.brushSizes[d] ?? 10, y = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), v = Kg(l, y), S = s.map((P) => ({
      ...P,
      t: Number((P == null ? void 0 : P.t) || 0),
      widthScale: Number.isFinite(Number(P == null ? void 0 : P.widthScale)) ? Math.max(0, Number(P.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(P == null ? void 0 : P.pressureLike)) ? Math.max(0, Number(P.pressureLike)) : 1
    })), x = {
      id: vi(r),
      actionGroupId: vi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: a,
      size: y,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((P) => ({ ...P })),
        points: S.map((P) => ({ ...P }))
      }
    };
    return qf(x, m), td("stroke-created", {
      mode: f.mode,
      layerKind: r,
      toolKind: a,
      presetId: d,
      presetAspect: Number(m.aspect ?? 1),
      strokeAspect: Number(x.aspect ?? 1),
      stampKind: String(x.stampKind || ""),
      size: Number(x.size || 0),
      radiusModel: String(x.radiusModel || ""),
      radiusValue: Number(x.radiusValue || 0),
      targetSpace: { ...x.targetSpace }
    }), x;
  }
  function Zg(r, a, s, l) {
    const d = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = yr(a), _ = on[m] || on[nr], y = {
      id: vi(r),
      actionGroupId: vi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: a,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((v) => ({ ...v }))
      }
    };
    return qf(y, _), td("lasso-created", {
      mode: f.mode,
      layerKind: r,
      toolKind: a,
      presetId: m,
      presetAspect: Number(_.aspect ?? 1),
      strokeAspect: Number(y.aspect ?? 1),
      stampKind: String(y.stampKind || ""),
      targetSpace: { ...y.targetSpace }
    }), y;
  }
  function li(r) {
    const a = p.painting || (p.painting = Io(null)), s = a[r] || (a[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Jg(r, a, s = performance.now()) {
    let l;
    if (f.mode === "frame") {
      const S = re();
      if (!S) return !1;
      l = vn(a, S, s);
    } else
      l = bn(a, s);
    const d = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, _ = d[d.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && x < 15e-4) return !1;
    }
    const y = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...y }), m.push({ ...y });
    const v = Xn();
    if (v) {
      const S = f.paintEngine.ensureTarget(v);
      f.paintEngine.appendStrokePoint(S, Number(y.u ?? 0), Number(y.v ?? 0), r.stroke);
    }
    return !0;
  }
  function Qg(r, a, s = performance.now()) {
    var _, y;
    let l;
    if (f.mode === "frame") {
      const v = re();
      if (!v) return !1;
      l = vn(a, v, s);
    } else
      l = bn(a, s);
    const d = (y = (_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points;
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
  function tm(r) {
    var ut, _t, yt, vt, mt;
    const a = (r == null ? void 0 : r.stroke) || null;
    if (!a || (r == null ? void 0 : r.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    ai();
    const s = Xn(), l = Er(s.width, s.height);
    if (!nu(l, a, { w: s.width, h: s.height })) return !1;
    const d = ((_t = (ut = l.ctx) == null ? void 0 : ut.getImageData(0, 0, s.width, s.height)) == null ? void 0 : _t.data) || null;
    if (!d) return !1;
    const m = new Map(se().map((K) => [String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim(), K ? { ...K } : null])), _ = [], y = [], v = [...ln().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") !== "paint")];
    let S = !1, x = Ar().reduce((K, lt) => Math.max(K, Number((lt == null ? void 0 : lt.z_index) || 0)), -1) + 1;
    function P(K, lt, Tt, Ot = 8) {
      let Lt = lt, $t = Tt, zt = -1, Bt = -1;
      for (let Kt = 0; Kt < Tt; Kt += 1)
        for (let ge = 0; ge < lt; ge += 1)
          K[(Kt * lt + ge) * 4 + 3] <= Ot || (ge < Lt && (Lt = ge), Kt < $t && ($t = Kt), ge > zt && (zt = ge), Kt > Bt && (Bt = Kt));
      return zt < Lt || Bt < $t ? null : { minX: Lt, minY: $t, maxX: zt, maxY: Bt };
    }
    const E = P(d, s.width, s.height, 8);
    if (!E) return !1;
    function T(K, lt) {
      return !K || !lt ? !1 : !(K.maxX < lt.minX || lt.maxX < K.minX || K.maxY < lt.minY || lt.maxY < K.minY);
    }
    function $(K, lt) {
      const Tt = Cr((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "", "paint", lt);
      if (!Tt) return null;
      const Ot = Tt.centerUv.u - Tt.halfW, Lt = Tt.centerUv.u + Tt.halfW, $t = Tt.centerUv.v - Tt.halfH, zt = Tt.centerUv.v + Tt.halfH, Bt = s.width, Kt = s.height;
      return {
        minX: Math.floor((Ot % 1 + 1) % 1 * Bt),
        maxX: Math.ceil((Lt % 1 + 1) % 1 * Bt),
        minY: Math.floor(j($t, 0, 1) * Kt),
        maxY: Math.ceil(j(zt, 0, 1) * Kt),
        wraps: Lt - Ot >= 1 || Ot < 0 || Lt > 1
      };
    }
    function B(K) {
      const lt = (K == null ? void 0 : K.bbox) || null;
      if (!lt) return null;
      const Tt = (K == null ? void 0 : K.transform) || {}, Ot = s.width, Lt = s.height, $t = Number(lt.u0 || 0) + Number(Tt.du || 0), zt = Number(lt.u1 || 0) + Number(Tt.du || 0), Bt = Number(lt.v0 || 0) + Number(Tt.dv || 0), Kt = Number(lt.v1 || 0) + Number(Tt.dv || 0);
      return {
        minX: Math.floor(($t % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((zt % 1 + 1) % 1 * Ot),
        minY: Math.floor(j(Bt, 0, 1) * Lt),
        maxY: Math.ceil(j(Kt, 0, 1) * Lt),
        wraps: zt - $t >= 1 || $t < 0 || zt > 1
      };
    }
    function Z(K) {
      return K ? K.wraps ? T(E, { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY }) || T(E, { minX: K.minX, maxX: s.width - 1, minY: K.minY, maxY: K.maxY }) : T(E, K) : !0;
    }
    function st(K) {
      if (!K) return { touched: !1, canvas: null };
      const lt = Er(s.width, s.height);
      lt.ctx.drawImage(K, 0, 0);
      const Tt = lt.ctx.getImageData(0, 0, s.width, s.height);
      lt.ctx.save(), lt.ctx.globalCompositeOperation = "destination-out", lt.ctx.drawImage(l.canvas, 0, 0), lt.ctx.restore();
      const Ot = lt.ctx.getImageData(0, 0, s.width, s.height);
      for (let Lt = 0; Lt < s.width * s.height; Lt += 1) {
        if (d[Lt * 4 + 3] <= 8) continue;
        const zt = Tt.data[Lt * 4 + 3], Bt = Ot.data[Lt * 4 + 3];
        if (zt > Bt)
          return { touched: !0, canvas: lt.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function wt(K, lt, Tt) {
      const Ot = Number(Tt == null ? void 0 : Tt.z_index), Lt = wg(K, lt, Tt).map(($t, zt) => ({
        ...$t,
        z_index: Number.isFinite(Ot) ? Ot + zt * 1e-3 : x + zt * 1e-3
      }));
      return Lt.length && (x = Math.max(x, ...Lt.map(($t) => Number(($t == null ? void 0 : $t.z_index) || 0))) + 1), Lt;
    }
    for (const K of se()) {
      const lt = String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim();
      if (!lt) continue;
      const Tt = yn(lt, "paint");
      if (!Z($(K, Tt))) {
        y.push(K), _.push(...Tt);
        continue;
      }
      const Ot = ((vt = (yt = f.paintEngine) == null ? void 0 : yt.getGroupTarget) == null ? void 0 : vt.call(yt, lt)) || null, Lt = ((mt = Ot == null ? void 0 : Ot.committedPaint) == null ? void 0 : mt.canvas) || null;
      if (!Lt) {
        y.push(K), _.push(...Tt);
        continue;
      }
      const $t = st(Lt);
      if (!$t.touched || !$t.canvas) {
        y.push(K), _.push(...Tt);
        continue;
      }
      S = !0;
      const zt = wt($t.canvas, "paint", m.get(lt) || K || {});
      v.push(...zt);
    }
    for (const K of ln().filter((lt) => String((lt == null ? void 0 : lt.layerKind) || "paint") === "paint")) {
      if (!Z(B(K))) {
        v.push(K);
        continue;
      }
      const lt = Zo(K, null);
      if (!lt) {
        v.push(K);
        continue;
      }
      const Tt = st(lt);
      if (!Tt.touched || !Tt.canvas) {
        v.push(K);
        continue;
      }
      S = !0;
      const Ot = wt(Tt.canvas, "paint", K);
      v.push(...Ot);
    }
    return S ? (p.painting.paint.strokes = _, p.painting.groups = y.sort((K, lt) => Number((K == null ? void 0 : K.z_index) || 0) - Number((lt == null ? void 0 : lt.z_index) || 0)), p.painting.raster_objects = v.sort((K, lt) => Number((K == null ? void 0 : K.z_index) || 0) - Number((lt == null ? void 0 : lt.z_index) || 0)), ni({ preservePanelValues: !1 }), !0) : !1;
  }
  function em(r) {
    var m, _, y, v;
    const a = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = r == null ? void 0 : r.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = Ks(a.rawPoints || a.points || [], r.stroke.targetSpace, !0)), tm(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && Ml((y = r.stroke) == null ? void 0 : y.actionGroupId), li(r.layerKind).push(r.stroke), !0);
    const d = a.rawPoints || a.points || [];
    return d.length < 1 ? !1 : (a.processedPoints = Ks(d, r.stroke.targetSpace, !0), l && Ml((v = r.stroke) == null ? void 0 : v.actionGroupId), li(r.layerKind).push(r.stroke), !0);
  }
  function mu(r) {
    var s;
    if (e === "cutout" && f.mode === "frame") {
      const l = re(), d = Ye(l);
      if (!l || !d || !(Number((r == null ? void 0 : r.x) || 0) >= Number(d.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(d.x || 0) + Number(d.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(d.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(d.y || 0) + Number(d.h || 0))) return null;
      const _ = vn(r, l, performance.now()), y = _ ? Zi(_) : null;
      if (y)
        for (const S of Us()) {
          if (!De(S)) continue;
          const x = Qi(S, y);
          if (x && Number(x.x) >= 0 && Number(x.x) <= 1 && Number(x.y) >= 0 && Number(x.y) <= 1) {
            const P = Re(S);
            if (P != null && P.visible) return { item: S, geom: P };
          }
        }
      const v = Cs(!1).slice().sort((S, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of v) {
        if (S.type === "strokeGroup") {
          const E = ti(Ui("paint", S.actionGroupId || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (!(T != null && T.visible)) continue;
          const $ = Array.isArray(T.strokePaths) ? T.strokePaths : [];
          for (const B of $) {
            const Z = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!Z.length) continue;
            if (B.closed && Z.length >= 3 && rr(r, Z)) return { item: E, geom: T };
            const st = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let wt = 0; wt < Z.length - 1; wt += 1)
              if (Pc(r, Z[wt], Z[wt + 1]) <= st * st) return { item: E, geom: T };
            if (Z.length === 1 && Hr(r, Z[0]) <= st * st) return { item: E, geom: T };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const E = Qr(ji(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (Vl(E, T, r, _)) return { item: E, geom: T };
          continue;
        }
        const x = S.item;
        if (!x || !De(x) || !y) continue;
        const P = Qi(x, y);
        if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
          const E = Re(x);
          if (E != null && E.visible) return { item: x, geom: E };
        }
      }
      return null;
    }
    const a = [
      ...Cs(!1).slice().sort((l, d) => Number((d == null ? void 0 : d.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var d;
        return l.type === "strokeGroup" ? ti(Ui("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Qr(ji(((d = l.item) == null ? void 0 : d.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Us().filter((l) => mn(l)) : []
    ];
    for (const l of a) {
      if (Te(l)) {
        const m = Re(l);
        if (!(m != null && m.visible)) continue;
        const _ = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const y of _) {
          const v = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
          if (!v.length) continue;
          if (y.closed && v.length >= 3 && rr(r, v)) return { item: l, geom: m };
          const S = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < v.length - 1; x += 1)
            if (Pc(r, v[x], v[x + 1]) <= S * S) return { item: l, geom: m };
          if (v.length === 1 && Hr(r, v[0]) <= S * S) return { item: l, geom: m };
        }
        continue;
      }
      if (We(l)) {
        const m = Re(l);
        if (!(m != null && m.visible)) continue;
        if (Vl(l, m, r)) return { item: l, geom: m };
        continue;
      }
      const d = Re(l);
      if (d.visible && rr(r, d.corners))
        return { item: l, geom: d };
    }
    return null;
  }
  function Js(r, a) {
    if (!r || !r.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((m) => Hr(m, a) <= 121);
      if (l >= 0) {
        const m = r.corners[l], _ = m.x - r.center.x, y = m.y - r.center.y, v = _ * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const d = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of d) {
        const _ = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && _.length >= 3 && rr(a, _)) return { kind: "move", cursor: "default" };
        const y = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (Pc(a, _[v], _[v + 1]) <= y * y) return { kind: "move", cursor: "default" };
      }
      return rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject")
      return rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((d) => Hr(d, a) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => Hr(l, a) <= 121);
    if (s >= 0) {
      const l = r.corners[s], d = l.x - r.center.x, m = l.y - r.center.y, _ = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return Hr(r.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : rr(a, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
  }
  function yu(r, a) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function nm(r, a) {
    return !!r && !!a && Number(a.x) >= Number(r.x0) && Number(a.x) <= Number(r.x1) && Number(a.y) >= Number(r.y0) && Number(a.y) <= Number(r.y1);
  }
  function rm(r, a) {
    if (!r || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((d) => nm(r, d))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!rr({ x: s, y: l }, a.corners);
  }
  function _e(r) {
    if (qg(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? k.style.cursor = "none" : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" ? k.style.cursor = "grabbing" : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? k.style.cursor = "move" : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" ? k.style.cursor = f.interaction.cursor || "nwse-resize" : f.interaction.kind === "rotate" ? k.style.cursor = "grabbing" : k.style.cursor = "default";
      return;
    }
    if (gu()) {
      k.style.cursor = "none";
      return;
    }
    if (f.mode === "frame" && f.primaryTool !== "cursor") {
      k.style.cursor = "default";
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      k.style.cursor = "default";
      return;
    }
    const a = ve(), s = a ? Re(a) : null, l = a ? fr(a) : !1, d = l ? { kind: "none", cursor: "default" } : Js(s, r);
    if (!l && d.kind !== "none") {
      k.style.cursor = d.cursor;
      return;
    }
    if (f.primaryTool === "cursor" && mu(r)) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = f.mode === "pano" ? "grab" : "default";
  }
  function Gt() {
    if (!W) return;
    const r = ve(), a = An();
    if (!r && a.length === 0 || f.interaction) {
      W.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const mt = "multi", K = Es(a);
      if (f.menuMode !== mt)
        W.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${K ? "Unlock" : "Lock"}" data-tip="${K ? "Unlock" : "Lock"}">${K ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `, f.menuMode = mt, f.menuSize.measured = !1, eo(W);
      else {
        const It = W.querySelector("[data-action='toggle-lock']");
        It && (It.innerHTML = K ? Dt.lock_open : Dt.lock_closed, It.setAttribute("aria-label", K ? "Unlock" : "Lock"), It.setAttribute("data-tip", K ? "Unlock" : "Lock"));
      }
      const lt = Is(a);
      if (!(lt != null && lt.visible)) {
        W.style.display = "none";
        return;
      }
      const Tt = lt.corners.map((It) => It.x), Ot = lt.corners.map((It) => It.y), Lt = Math.min(...Tt), $t = Math.max(...Tt), zt = Math.max(...Ot), Bt = W.style.display, Kt = W.style.visibility;
      W.style.display = "flex", W.style.visibility = "hidden";
      const ge = W.getBoundingClientRect(), Zn = Math.round(Number((ge == null ? void 0 : ge.width) || 0)) || W.offsetWidth || f.menuSize.w || 220, Jn = Math.round(Number((ge == null ? void 0 : ge.height) || 0)) || W.offsetHeight || f.menuSize.h || 40;
      f.menuSize.w = Number.isFinite(Zn) && Zn > 0 ? Zn : 220, f.menuSize.h = Number.isFinite(Jn) && Jn > 0 ? Jn : 40, W.style.display = Bt, W.style.visibility = Kt, f.menuSize.measured = !0;
      const no = f.menuSize.w, ua = f.menuSize.h, fi = 14;
      W.style.display = "flex";
      let di = (Lt + $t) * 0.5 - no * 0.5, ro = zt + 18;
      if (di = j(di, fi, k.width - no - fi), ro + ua > k.height - fi) {
        W.style.display = "none";
        return;
      }
      W.style.left = `${di}px`, W.style.top = `${ro}px`;
      return;
    }
    const s = El(), l = fr(r), d = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Ce(r) ? "external" : "normal"}` : `cutout:${f.cutoutAspectOpen ? "open" : "closed"}`;
    if (f.menuMode !== d) {
      if (s === "stroke")
        W.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      else if (e === "stickers" || s === "image")
        W.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          ${Ce(r) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Dt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Dt.replace_image}</button>`}
          ${Ce(r) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Dt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          ${Ce(r) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Dt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>`}
        `;
      else {
        const mt = bi(r);
        W.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Dt.aspect}</button>
            <div class="pano-aspect-popover${f.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${mt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${mt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${mt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${mt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Dt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      }
      f.menuMode = d, f.menuSize.measured = !1, eo(W);
    }
    if ((e === "stickers" || s === "image") && Ce(r)) {
      const mt = W.querySelector("[data-action='back-initial']");
      if (mt) {
        const lt = mp();
        mt.disabled = !lt, mt.setAttribute("aria-disabled", lt ? "false" : "true"), mt.setAttribute("data-tip", lt ? "Back to initial position" : "Already at initial position");
      }
      const K = W.querySelector("[data-action='toggle-visible']");
      if (K) {
        const lt = ei(r);
        K.innerHTML = lt ? Dt.eye : Dt.eye_dashed, K.setAttribute("aria-label", lt ? "Show" : "Hide"), K.setAttribute("data-tip", lt ? "Show input image" : "Hide input image");
      }
    }
    const m = W.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Dt.lock_open : Dt.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = Re(r);
    if (!(_ != null && _.visible)) {
      W.style.display = "none";
      return;
    }
    const y = _.corners, v = y.map((mt) => mt.x), S = y.map((mt) => mt.y), x = Math.min(...v), P = Math.max(...v), E = Math.max(...S), T = W.style.display, $ = W.style.visibility;
    W.style.display = "flex", W.style.visibility = "hidden";
    const B = W.getBoundingClientRect(), Z = Math.round(Number((B == null ? void 0 : B.width) || 0)) || W.offsetWidth || f.menuSize.w || 220, st = Math.round(Number((B == null ? void 0 : B.height) || 0)) || W.offsetHeight || f.menuSize.h || 40;
    f.menuSize.w = Number.isFinite(Z) && Z > 0 ? Z : 220, f.menuSize.h = Number.isFinite(st) && st > 0 ? st : 40, W.style.display = T, W.style.visibility = $, f.menuSize.measured = !0;
    const wt = f.menuSize.w, ut = f.menuSize.h, _t = 14;
    W.style.display = "flex";
    let yt = (x + P) * 0.5 - wt * 0.5, vt = E + 18;
    if (!Number.isFinite(yt) || !Number.isFinite(vt)) {
      W.style.display = "none";
      return;
    }
    if (yt = j(yt, _t, k.width - wt - _t), vt + ut > k.height - _t) {
      W.style.display = "none";
      return;
    }
    W.style.left = `${yt}px`, W.style.top = `${vt}px`;
  }
  function sa() {
    et && (ee.timer && (clearTimeout(ee.timer), ee.timer = 0), ee.target = null, et.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function im(r) {
    if (!et || !r || !r.isConnected) return;
    const a = String(r.getAttribute("data-tip") || "").trim();
    if (!a) return;
    et.textContent = a;
    const s = O.getBoundingClientRect(), l = r.getBoundingClientRect(), d = 8, m = et.offsetWidth || 100, _ = et.offsetHeight || 24, y = !!r.closest(".pano-floating-left"), v = !!r.closest(".pano-paint-footer") || !!r.closest(".pano-paint-color-float");
    et.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - s.left + l.width * 0.5 - m * 0.5, x = l.top - s.top - _ - 8;
    if (y)
      et.classList.add("pano-tooltip-tool-rail"), S = l.right - s.left + 10, x = l.top - s.top + l.height * 0.5 - _ * 0.5, S = j(S, d, Math.max(d, s.width - m - d)), x = j(x, d, Math.max(d, s.height - _ - d));
    else if (v) {
      et.classList.add("pano-tooltip-footer");
      const P = r.closest(".pano-paint-footer"), E = P ? P.getBoundingClientRect() : l;
      S = E.left - s.left + E.width * 0.5 - m * 0.5, x = E.bottom - s.top + 5, S = j(S, d, Math.max(d, s.width - m - d)), x = Math.max(d, x);
    }
    S = j(S, d, Math.max(d, s.width - m - d)), x = Math.max(d, x), et.style.left = `${S}px`, et.style.top = `${x}px`, et.classList.add("show");
  }
  function eo(r) {
    r.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        ee.target = a, ee.timer && clearTimeout(ee.timer), ee.timer = window.setTimeout(() => {
          ee.target === a && im(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        ee.target === a && (ee.target = null), sa();
      }), a.addEventListener("pointerdown", sa));
    });
  }
  const Oe = Ps({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (r) => {
      f.viewYaw = $e(Number(r.yaw || 0)), f.viewPitch = j(Number(r.pitch || 0), -89.9, 89.9), f.viewFov = j(Number(r.fov || f.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || k.clientWidth || 0)),
        h: Math.max(1, Number(r.height || k.clientHeight || 0))
      };
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
  k.onpointerdown = (r) => {
    const a = ci(r);
    if (oa(a, !0), f.viewTween = null, Oe.state.inertia.active = !1, Oe.state.inertia.vx = 0, Oe.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), f.mode !== "frame") {
        const y = f.mode === "unwrap" ? a : ia(r);
        f.interaction = { kind: "view", last: y, lastTs: performance.now() }, Oe.startDrag(y.x, y.y, r.pointerId, performance.now());
      }
      _e(a), k.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (f.mode === "pano") {
        const y = ia(r);
        f.interaction = { kind: "view", last: y, lastTs: performance.now() }, Oe.startDrag(y.x, y.y, r.pointerId, performance.now()), _e(a), k.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (X && !X.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (hu() || Zs())) {
      const y = f.primaryTool === "mask" ? "mask" : "paint", v = f.primaryTool === "mask" ? f.maskTool : f.paintTool, S = Zs() ? re() : null, x = { kind: "ERP_GLOBAL" }, P = S ? vn(a, S, performance.now()) : bn(a, performance.now());
      f.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: y,
        _livePreviewToken: vi("live"),
        stroke: v === "lasso_fill" ? Zg(y, v, [P], x) : Xg(y, v, [P], x)
      }, Xi();
      const E = Xn();
      if (E)
        if (f.paintEngine.beginStroke(f.interaction.stroke, E), f.interaction.kind === "paint_stroke") {
          const T = f.paintEngine.ensureTarget(E), $ = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), B = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          f.paintEngine.appendStrokePoint(T, $, B, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, E);
      _e(a), k.setPointerCapture(r.pointerId), ht();
      return;
    }
    const s = An(), l = ve(), d = s.length > 1 ? Is(s) : l ? Re(l) : null;
    if (f.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      f.interaction = { kind: "marquee_select", start: a, current: a }, _e(a), k.setPointerCapture(r.pointerId), ht({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (d != null && d.visible)) {
      if ((s.some((v) => fr(v)) ? { kind: "none" } : Js(d, a)).kind === "move") {
        f.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: a.x - d.center.x, y: a.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: s.filter((v) => De(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var x, P;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((P = S.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Te(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: Ze(yn(v.actionGroupId, v.layerKind)),
            frameSnapshot: Ze(Cr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var x, P;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((P = S.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: kl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => We(v)).map((v) => ({
            id: Ke(v.rasterObjectId || v.id || ""),
            snapshot: Ze(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var x, P;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((P = S.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Hp(v)
          }))
        }, _e(a), k.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const y = fr(l) ? { kind: "none" } : Js(d, a);
      if (y.kind === "scale") {
        f.interaction = Te(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          snapshot: Ze(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ze(Cr(l.actionGroupId, l.layerKind)),
          cursor: y.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor
        }, _e(a), k.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "scale_x" || y.kind === "scale_y") {
        f.interaction = {
          kind: y.kind,
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor,
          edge: y.edge
        }, _e(a), k.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "rotate") {
        f.interaction = Te(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(a.y - d.center.y, a.x - d.center.x),
          snapshot: Ze(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Ze(Cr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - d.center.y, a.x - d.center.x)
        }, _e(a), k.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "move") {
        if (Te(l)) {
          const v = f.mode === "frame" ? (() => {
            const S = re();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: Ze(yn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Ze(Cr(l.actionGroupId, l.layerKind))
          }, _e(a), k.setPointerCapture(r.pointerId);
          return;
        }
        if (We(l)) {
          const v = f.mode === "frame" ? (() => {
            const S = re();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: Ze(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(l.rasterObjectId || l.id || "")))
          }, _e(a), k.setPointerCapture(r.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - d.center.x, y: a.y - d.center.y }
        }, _e(a), k.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = mu(a);
    if (m) {
      const y = f.selectedId !== m.item.id;
      if (y && f.selectedId && (le(), En()), qi(m.item), e === "cutout" && y && (f.cutoutAspectOpen = !1), y && qt(), Gt(), ht(), y) {
        _e(a);
        return;
      }
      if (fr(m.item)) {
        _e(a);
        return;
      }
      f.interaction = {
        kind: Te(m.item) ? "move_stroke_group" : We(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: a.x - m.geom.center.x, y: a.y - m.geom.center.y },
        startUv: Te(m.item) || We(m.item) ? f.mode === "frame" ? (() => {
          const v = re();
          return v ? vn(a, v, performance.now()) : null;
        })() : bn(a, performance.now()) : null,
        snapshot: Te(m.item) ? Ze(yn(m.item.actionGroupId, m.item.layerKind)) : We(m.item) ? Ze(ln().find((v) => String((v == null ? void 0 : v.id) || "") === Ke(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Te(m.item) ? Ze(Cr(m.item.actionGroupId, m.item.layerKind)) : null
      }, _e(a), k.setPointerCapture(r.pointerId);
      return;
    }
    const _ = !!f.selectedId;
    if (_ && (le(), En()), ni(), _ && qt(), Gt(), ht(), f.mode === "pano") {
      const y = ia(r);
      f.interaction = { kind: "view", last: y, lastTs: performance.now() }, Oe.startDrag(y.x, y.y, r.pointerId, performance.now()), _e(a), k.setPointerCapture(r.pointerId);
    }
  }, k.onpointermove = (r) => {
    var l, d, m, _, y, v, S, x, P, E, T, $, B, Z, st, wt, ut, _t;
    const a = ci(r);
    if (oa(a, !0), !f.interaction) {
      _e(a);
      return;
    }
    _e(a);
    const s = f.interaction;
    if (s.kind === "paint_stroke") {
      const yt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let vt = !1;
      yt.forEach((mt) => {
        const K = ci(mt);
        Jg(s, K, performance.now()) && (vt = !0);
      }), vt && ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const yt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let vt = !1;
      if (yt.forEach((mt) => {
        const K = ci(mt);
        Qg(s, K, performance.now()) && (vt = !0);
      }), vt) {
        const mt = Xn();
        mt && f.paintEngine.updateActiveStroke(s.stroke, mt), ht({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const yt = performance.now(), vt = f.mode === "unwrap" ? a : ia(r);
      Oe.moveDrag(vt.x, vt.y, f.mode === "unwrap" ? "unwrap" : "pano", yt), s.lastTs = yt, s.last = vt, ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      f.frameView.panX += a.x - s.last.x, f.frameView.panY += a.y - s.last.y, s.last = a, ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const yt = a.x - s.offset.x, vt = a.y - s.offset.y;
      if (f.mode === "frame" && e === "cutout") {
        const mt = re(), K = Ye(mt);
        if (!mt || !K) return;
        const lt = {
          x: j((yt - K.x) / Math.max(1, K.w), 0, 1),
          y: j((vt - K.y) / Math.max(1, K.h), 0, 1)
        }, Tt = Gs(mt, lt);
        if (!Tt) return;
        const Ot = ka(Tt);
        s.item.yaw_deg = Ot.yaw, s.item.pitch_deg = Ot.pitch;
      } else if (f.mode === "unwrap") {
        const mt = dr(), K = j((yt - mt.x) / Math.max(mt.w, 1), 0, 1), lt = j((vt - mt.y) / Math.max(mt.h, 1), 0, 1);
        s.item.yaw_deg = $e(K * 360 - 180), s.item.pitch_deg = j(90 - lt * 180, -90, 90);
      } else {
        const mt = Ds(yt, vt), K = ka(mt);
        s.item.yaw_deg = K.yaw, s.item.pitch_deg = K.pitch;
      }
      ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const yt = f.mode === "frame" ? (() => {
        const K = re();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!yt || !s.startUv) return;
      const vt = Number(yt.u || 0) - Number(s.startUv.u || 0), mt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      Cl((l = s.item) == null ? void 0 : l.actionGroupId, vt, mt, s.snapshot, (d = s.item) == null ? void 0 : d.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const yt = f.mode === "frame" ? (() => {
        const K = re();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!yt || !s.startUv) return;
      const vt = Number(yt.u || 0) - Number(s.startUv.u || 0), mt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      Il(((m = s.item) == null ? void 0 : m.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", vt, mt, s.snapshot) && (Ji(), ht({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const yt = a.x - Number(((y = s.offset) == null ? void 0 : y.x) || 0), vt = a.y - Number(((v = s.offset) == null ? void 0 : v.y) || 0);
      let mt = !1, K = !1, lt = !1;
      const Tt = yt - Number(((S = s.startCenter) == null ? void 0 : S.x) || yt), Ot = vt - Number(((x = s.startCenter) == null ? void 0 : x.y) || vt);
      for (const Lt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const $t = (e === "cutout" ? As() : Me()).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === String(Lt.id || ""));
        if (!$t || !De($t)) continue;
        const zt = {
          x: Number(((P = Lt.center) == null ? void 0 : P.x) || 0) + Tt,
          y: Number(((E = Lt.center) == null ? void 0 : E.y) || 0) + Ot
        };
        if (f.mode === "frame" && e === "cutout") {
          const Bt = re(), Kt = Ye(Bt);
          if (!Bt || !Kt) continue;
          const ge = {
            x: j((zt.x - Kt.x) / Math.max(1, Kt.w), 0, 1),
            y: j((zt.y - Kt.y) / Math.max(1, Kt.h), 0, 1)
          }, Zn = Gs(Bt, ge);
          if (!Zn) continue;
          const Jn = ka(Zn);
          $t.yaw_deg = Jn.yaw, $t.pitch_deg = Jn.pitch;
        } else if (f.mode === "unwrap") {
          const Bt = dr(), Kt = j((zt.x - Bt.x) / Math.max(Bt.w, 1), 0, 1), ge = j((zt.y - Bt.y) / Math.max(Bt.h, 1), 0, 1);
          $t.yaw_deg = $e(Kt * 360 - 180), $t.pitch_deg = j(90 - ge * 180, -90, 90);
        } else {
          const Bt = Ds(zt.x, zt.y), Kt = ka(Bt);
          $t.yaw_deg = Kt.yaw, $t.pitch_deg = Kt.pitch;
        }
        mt = !0;
      }
      for (const Lt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const $t = {
          x: Number(((T = Lt.center) == null ? void 0 : T.x) || 0) + Tt,
          y: Number((($ = Lt.center) == null ? void 0 : $.y) || 0) + Ot
        }, zt = f.mode === "frame" ? (() => {
          const Kt = re();
          return Kt ? vn($t, Kt, performance.now()) : null;
        })() : bn($t, performance.now()), Bt = Lt.centerUv || null;
        if (zt && Bt) {
          const Kt = Number(zt.u || 0) - Number(Bt.u || 0), ge = Number(zt.v || 0) - Number(Bt.v || 0);
          Cl(Lt.id, Kt, ge, Lt.snapshot, Lt.layerKind, Lt.frameSnapshot) && (mt = !0, K = !0);
        }
      }
      for (const Lt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const $t = {
          x: Number(((B = Lt.center) == null ? void 0 : B.x) || 0) + Tt,
          y: Number(((Z = Lt.center) == null ? void 0 : Z.y) || 0) + Ot
        }, zt = f.mode === "frame" ? (() => {
          const Kt = re();
          return Kt ? vn($t, Kt, performance.now()) : null;
        })() : bn($t, performance.now()), Bt = Lt.centerUv || null;
        if (zt && Bt) {
          const Kt = Number(zt.u || 0) - Number(Bt.u || 0), ge = Number(zt.v || 0) - Number(Bt.v || 0);
          Il(Lt.id, Kt, ge, Lt.snapshot) && (mt = !0, lt = !0);
        }
      }
      mt && (K ? In({ rebuildPaintEngine: !0 }) : lt ? Ji() : hn(), ht({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const vt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Al((st = s.item) == null ? void 0 : st.actionGroupId, vt, 0, s.snapshot, (wt = s.item) == null ? void 0 : wt.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let yt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Vr;
      r.shiftKey && (yt = Math.round(yt / 45) * 45), Al((ut = s.item) == null ? void 0 : ut.actionGroupId, 1, yt, s.snapshot, (_t = s.item) == null ? void 0 : _t.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const vt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * vt, 1, 179), s.item.vFOV_deg = j(s.startVFOV * vt, 1, 179), s.item.aspect_id = zr(s.item), ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const vt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * vt, 1, 179), s.item.aspect_id = zr(s.item), ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const vt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = j(s.startVFOV * vt, 1, 179), s.item.aspect_id = zr(s.item), ht({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let vt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Vr, mt = s.startRot - vt;
      r.shiftKey && (mt = Math.round(mt / 45) * 45);
      const K = De(s.item) ? "rot_deg" : "roll_deg";
      s.item[K] = mt, ht({ localOnly: !0 });
    }
  }, k.onpointerup = () => {
    var a, s, l, d, m, _;
    const r = f.interaction;
    if (((a = f.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (Xi(), em(f.interaction)) {
        In();
        const y = String(((l = f.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (y) {
          const S = se().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === y);
          S && (S.frame = null);
        }
        const v = Xn();
        v && (String(((d = f.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(v), tu()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, v)), le(), En(), qt(), Gt(), t.setDirtyCanvas(!0, !0), ht();
      } else {
        const y = Xn();
        y && f.paintEngine.cancelActiveStroke(y);
      }
    else if (((m = f.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = yu(f.interaction.start, f.interaction.current), S = [
        ...e === "cutout" ? Us().filter((x) => !mn(x)) : [...Me()],
        ...tp(),
        ...ep()
      ].filter((x) => rm(y, Re(x)));
      sp(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && S.length && (f.cutoutAspectOpen = !1), qt(), Gt(), ht();
    } else if (f.interaction && f.interaction.kind !== "view" && f.interaction.kind !== "pan_frame") {
      let y = !1;
      (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (y = !0), f.interaction.kind === "move_raster_object" && (y = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (y = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (y = !0), y && Ji(), le(), En(), t.setDirtyCanvas(!0, !0), qs(), f.hqFrames = 1, Gt(), ht();
    }
    f.interaction = null, Xi(), r && r.kind === "view" && Oe.endDrag(performance.now()), Xo(), Gt(), _e(f.pointerPos), ht();
  }, k.onpointercancel = () => {
    var r, a, s;
    if (((r = f.interaction) == null ? void 0 : r.kind) === "view" && Oe.endDrag(performance.now()), ((a = f.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Xi();
      const l = Xn();
      l && f.paintEngine.cancelActiveStroke(l);
    }
    f.interaction = null, Xi(), Xo(), _e(f.pointerPos), ht({ localOnly: !0 });
  }, k.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, k.onmousemove = (r) => {
    const a = ci(r);
    oa(a, !0), !f.interaction && _e(a);
  }, k.onmouseleave = () => {
    oa(f.pointerPos, !1), _e(f.pointerPos);
  }, k.onwheel = (r) => {
    if (f.mode === "frame") {
      const a = ci(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Gg(a, s) && ht({ localOnly: !0 }), r.preventDefault();
      return;
    }
    f.mode === "pano" && (Oe.applyWheelEvent(r) && ht({ localOnly: !0 }), r.preventDefault());
  }, k.ondragover = (r) => {
    e !== "stickers" && e !== "cutout" || i || (r.preventDefault(), cn(!0));
  }, k.ondrop = (r) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Ne.depth = 0, cn(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((d) => ra(d));
    s && ou(s);
  };
  const bu = (r) => {
    e !== "stickers" && e !== "cutout" || i || rn(r) && (Ne.depth += 1, cn(!0), r.preventDefault());
  }, vu = (r) => {
    e !== "stickers" && e !== "cutout" || i || (!Ne.active && rn(r) && cn(!0), Ne.active && r.preventDefault());
  }, _u = (r) => {
    if (e !== "stickers" && e !== "cutout" || i || !Ne.active) return;
    Ne.depth = Math.max(0, Ne.depth - 1);
    const a = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Ne.depth === 0 || a) && cn(!1);
  }, wu = (r) => {
    e !== "stickers" && e !== "cutout" || i || (Ne.depth = 0, cn(!1), rn(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", bu, !0), window.addEventListener("dragover", vu, !0), window.addEventListener("dragleave", _u, !0), window.addEventListener("drop", wu, !0), tt.forEach((r) => {
    r.onclick = () => {
      r.disabled || (f.mode = r.dataset.view, e === "cutout" && f.mode === "frame" && ve() && mn(ve()) && (ni({ preservePanelValues: !0 }), qt(), Gt()), Xs(), Xo(), ht());
    };
  });
  function Qs() {
    const { canUndo: r, canRedo: a } = iu();
    A.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((s) => {
      s.disabled = !r;
    }), A.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((s) => {
      s.disabled = !a;
    });
  }
  const tc = A.querySelector("[data-action='undo']");
  tc && (tc.onclick = () => {
    i || tc.disabled || to(-1);
  });
  const ec = A.querySelector("[data-action='redo']");
  ec && (ec.onclick = () => {
    i || ec.disabled || to(1);
  });
  const xu = A.querySelector("[data-action='add']");
  xu && (xu.onclick = () => {
    i || (e === "stickers" ? Ys() : su());
  });
  const Su = A.querySelector("[data-action='clear']");
  Su && (Su.onclick = () => {
    i || lu();
  });
  const Nu = A.querySelector("[data-action='save']");
  Nu && (Nu.onclick = () => {
    i || du();
  }), A.querySelector("[data-action='reset-view']").onclick = () => {
    Jr(0, 0, 100, 180, 680);
  };
  const Lr = A.querySelector("[data-action='toggle-grid']"), nc = () => {
    if (!Lr) return;
    const r = !!f.showGrid;
    Lr.innerHTML = r ? Dt.eye : Dt.eye_dashed, Lr.setAttribute("aria-pressed", r ? "true" : "false"), Lr.setAttribute("aria-label", r ? "Hide Grid" : "Show Grid"), Lr.setAttribute("data-tip", r ? "Hide grid" : "Show grid");
  };
  if (Lr && (nc(), Lr.onclick = () => {
    f.showGrid = !f.showGrid, Nv(t == null ? void 0 : t.id, f.showGrid), nc(), ht();
  }), rt && (rt.querySelectorAll("[data-tool-mode]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const a = String(r.getAttribute("data-tool-mode") || "cursor");
      f.primaryTool = a, (a === "paint" || a === "mask") && ni({ preservePanelValues: !0 }), un(), qt(), Gt(), ht();
    };
  }), rt.querySelectorAll("[data-tool-ui-action]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const a = String(r.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && r.disabled)) {
        if (a === "undo") to(-1);
        else if (a === "redo") to(1);
        else if (a === "clear") lu();
        else if (a === "add") Ys();
        else if (a === "add-image") Ys();
        else if (a === "add-or-look") {
          const s = re();
          if ((p.shots || []).length === 0)
            su();
          else {
            const l = s;
            if (!l) return;
            f.selectedId = l.id || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], p.active.selected_shot_id = f.selectedId;
            const d = $e(Number(l.yaw_deg || 0)), m = j(Number(l.pitch_deg || 0), -89.9, 89.9);
            Jr(d, m, f.viewFov), qt(), Gt(), ht();
          }
        }
      }
    };
  })), A.querySelectorAll("[data-paint-tool]").forEach((r) => {
    r.onclick = () => {
      f.primaryTool = "paint";
      const a = String(r.getAttribute("data-paint-tool") || "pen");
      f.paintTool = a, ni({ preservePanelValues: !0 }), on[a] && (f.activeBrushPresetId = a), un(), qt(), Gt(), ht();
    };
  }), A.querySelectorAll("[data-mask-tool]").forEach((r) => {
    r.onclick = () => {
      f.primaryTool = "mask", f.maskTool = String(r.getAttribute("data-mask-tool") || "pen"), ni({ preservePanelValues: !0 }), un(), qt(), Gt(), ht();
    };
  }), L.forEach((r) => {
    r.onclick = () => {
      const a = String(r.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Hg(a);
    };
  }), z.forEach((r) => {
    r.oninput = () => {
      if (r.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(r.value)))), s = yr(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      z.forEach((d) => {
        d.value = String(a), d.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), J.forEach((d) => {
        d.textContent = String(a);
      }), Yg();
    }, r.onchange = () => aa(), r.addEventListener("pointerup", aa), r.addEventListener("pointercancel", aa), r.addEventListener("blur", aa);
  }), At) {
    At.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Ga.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (f.paintColor = fn(s.color), dt(!0), un());
      };
    });
    const r = At.querySelector("[data-paint-color-custom]");
    r && (r.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), X && !X.hidden ? dt(!0) : ot(), un();
    });
  }
  const om = (r, a) => {
    var y;
    if (!Ut) return;
    const s = Ut.getBoundingClientRect(), l = j((r - s.left) / Math.max(1, s.width), 0, 1), d = 1 - j((a - s.top) / Math.max(1, s.height), 0, 1), m = ho(f.customPaintColor), _ = { ...kc(m.h, l, d), a: Number(((y = f.customPaintColor) == null ? void 0 : y.a) ?? 1) };
    f.customPaintColor = fn(_), f.paintColor = fn(_), un();
  }, am = (r) => {
    var m;
    if (!pe) return;
    const a = pe.getBoundingClientRect(), s = j((r - a.left) / Math.max(1, a.width), 0, 1), l = ho(f.customPaintColor), d = { ...kc(s, l.s, l.v), a: Number(((m = f.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    f.customPaintColor = fn(d), f.paintColor = fn(d), un();
  }, Mu = (r, a) => {
    const s = r.pointerId;
    a(r);
    const l = (m) => {
      m.pointerId === s && a(m);
    }, d = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  Ut && (Ut.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Mu(r, (a) => om(a.clientX, a.clientY));
  }), pe && (pe.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Mu(r, (a) => am(a.clientX));
  }), U && (U.oninput = () => {
    const r = { ...f.customPaintColor, a: j(Number(U.value) / 100, 0, 1) };
    f.customPaintColor = fn(r), f.paintColor = fn(r), un();
  });
  const Pu = () => {
    if (!G) return;
    const r = !!f.fullscreen;
    G.innerHTML = r ? Dt.fullscreen_close : Dt.fullscreen, G.setAttribute("aria-label", r ? "Exit Fullscreen" : "Fullscreen"), G.setAttribute("data-tip", r ? "Exit fullscreen" : "Fullscreen");
  }, ca = (r) => {
    const a = !!r;
    f.fullscreen !== a && (f.fullscreen = a, A.classList.toggle("pano-modal-fullscreen", a), a ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), nc(), Pu(), ht());
  }, ku = () => document.fullscreenElement === C, sm = async () => {
    var r, a;
    try {
      if (!document.fullscreenEnabled) {
        ca(!f.fullscreen);
        return;
      }
      ku() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((r = C.requestFullscreen) == null ? void 0 : r.call(C));
    } catch {
      ca(!f.fullscreen);
    }
  }, Cu = () => {
    document.fullscreenEnabled && ca(ku());
  };
  document.addEventListener("fullscreenchange", Cu), G && (Pu(), G.onclick = (r) => {
    r.preventDefault(), r.stopPropagation(), sm();
  });
  const Au = () => {
    if (!pt) return;
    const r = !!f.outputPreviewExpanded;
    pt.innerHTML = r ? Dt.fullscreen_close : Dt.fullscreen, pt.setAttribute("aria-label", r ? "Reduce Preview" : "Expand Preview"), pt.setAttribute("data-tip", r ? "Reduce preview" : "Expand preview");
  };
  pt && (Au(), pt.onclick = (r) => {
    r.preventDefault(), r.stopPropagation();
    const a = !f.outputPreviewExpanded;
    f.outputPreviewExpanded = a, f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = a ? 1 : 0, f.outputPreviewAnimStartTs = performance.now(), Au(), ht();
  }), W.addEventListener("click", (r) => {
    const a = r.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!i) {
      if (s === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, Gt(), ht();
        return;
      }
      if (s === "aspect-set") {
        const l = ve();
        if (!l) return;
        const d = String(a.getAttribute("data-aspect") || "1:1");
        zg(l, d), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, qs(), le(), Pe(), Gt(), ht();
        return;
      }
      if (s === "rotate-90") {
        const l = ve();
        if (!l) return;
        Ug(l), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, qs(), le(), Pe(), Gt(), ht();
        return;
      }
      if (s === "bring-front") {
        jg();
        return;
      }
      if (s === "send-back") {
        Bg();
        return;
      }
      if (s === "duplicate") {
        Vg();
        return;
      }
      if (s === "replace-image") {
        Rg();
        return;
      }
      if (s === "toggle-lock") {
        ap();
        return;
      }
      if (s === "back-initial") {
        pp();
        return;
      }
      if (s === "toggle-visible") {
        hp();
        return;
      }
      if (s === "delete") {
        uu();
        return;
      }
      ht();
    }
  });
  const rc = t.onExecuted, ic = t.onConnectionsChange;
  let oc = null, ac = null, sc = null;
  !i && e === "stickers" && (sc = (r = "sync") => {
    $l(r);
  }, t.__panoExternalStickerSync = sc, oc = function(...a) {
    var s;
    typeof rc == "function" && rc.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = oc, ac = function(...a) {
    var s;
    typeof ic == "function" && ic.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = ac), i || (Zc.set(String(t.id ?? "0"), () => Hs()), Fp() && Hs());
  const ui = () => {
    var r, a, s, l, d, m, _, y, v;
    f.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(f.cutoutPreviewSurfaceRaf), f.cutoutPreviewSurfaceRaf = 0), f.cutoutPreviewSurfaceTimer && (clearTimeout(f.cutoutPreviewSurfaceTimer), f.cutoutPreviewSurfaceTimer = 0), Zc.delete(String(t.id ?? "0")), i || Hs(), document.fullscreenElement === C && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Cu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (d = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (y = (_ = (m = pn) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || y.call(_, !0, !0), sa(), Lg(), (v = Q == null ? void 0 : Q.dispose) == null || v.call(Q), cn(!1), window.removeEventListener("keydown", Iu, !0), window.removeEventListener("keydown", Eu, !0), window.removeEventListener("keydown", la, !0), window.removeEventListener("keyup", la, !0), window.removeEventListener("keydown", Tu, !0), window.removeEventListener("dragenter", bu, !0), window.removeEventListener("dragover", vu, !0), window.removeEventListener("dragleave", _u, !0), window.removeEventListener("drop", wu, !0), !i && e === "stickers" && (t.onExecuted === oc && (t.onExecuted = rc), t.onConnectionsChange === ac && (t.onConnectionsChange = ic), t.__panoExternalStickerSync === sc && (t.__panoExternalStickerSync = null)), N.unmount(), w.remove();
  }, Iu = (r) => {
    var a, s, l, d;
    if (r.key === "Escape") {
      if (f.fullscreen && document.fullscreenElement === C) {
        r.preventDefault(), r.stopPropagation(), (a = r.stopImmediatePropagation) == null || a.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), ca(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (d = r.stopImmediatePropagation) == null || d.call(r), ui();
    }
  }, Eu = (r) => {
    const a = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = r.target, y = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    y === "INPUT" || y === "TEXTAREA" || _ != null && _.isContentEditable || !ve() || (uu(), r.preventDefault(), r.stopPropagation());
  }, la = (r) => {
    const a = !!(r.ctrlKey || r.metaKey);
    f.marqueeModifier !== a && (f.marqueeModifier = a, _e(f.pointerPos));
  }, Tu = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const a = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = r.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = iu();
    r.shiftKey && !_ || !r.shiftKey && !m || (to(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Iu, !0), window.addEventListener("keydown", Eu, !0), window.addEventListener("keydown", la, !0), window.addEventListener("keyup", la, !0), window.addEventListener("keydown", Tu, !0), C.addEventListener("pointerdown", (r) => {
    r.target === C && ui();
  }), eo(A), Sp(), !i && e === "stickers" && $l("open"), Og(), le(), Qs(), un(), gt && requestAnimationFrame(() => {
    gt.classList.add("is-ready");
  }), qt(), Yo(), ru(), _e(f.pointerPos), ht(), Pt.rafId = requestAnimationFrame(Ws);
}
function nd(t, e, n, i) {
  if (!(t != null && t.prototype)) return;
  const o = (b) => {
    var p, w;
    try {
      (p = b.__panoDomRestore) == null || p.call(b);
    } catch {
    }
    try {
      (w = b.__panoLegacyRestore) == null || w.call(b);
    } catch {
    }
    b.__panoDomPreview = null, b.__panoLegacyPreviewHooked = !1, b.__panoPreviewHooked = !1, b.__panoPreviewAttached = !1, b.__panoPreviewMountKey = null;
  };
  function c(b) {
    var A;
    const p = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === p) return;
    o(b), Ev(b, Xc);
    const N = ki(b, Xc);
    if (N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const k = N.callback;
      N.callback = (H) => {
        var D;
        const O = k ? k(H) : void 0;
        return (D = b.setDirtyCanvas) == null || D.call(b, !0, !1), O;
      };
    }
    const C = ki(b, "bg_color");
    if (C && (C.value == null || String(C.value).trim() === "" || String(C.value).toLowerCase() === "#000000") && (C.value = "#00ff00", (A = C.callback) == null || A.call(C, "#00ff00")), n === "PanoramaStickers") {
      Qc(b, i, () => Lo(b, "stickers"));
      {
        b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = p;
        return;
      }
    }
    Qc(b, i, () => Lo(b, "cutout")), Mb(b, {
      buttonText: i,
      onOpen: () => Lo(b, "cutout")
    }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = p;
  }
  const u = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const b = u ? u.apply(this, arguments) : void 0;
    return c(this), b;
  };
  const h = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const b = h ? h.apply(this, arguments) : void 0;
    return this.widgets && c(this), b;
  };
  const g = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const b = g ? g.apply(this, arguments) : void 0;
    return this.widgets && c(this), b;
  };
}
function Bv(t) {
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
function Gv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const i = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !i && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    Qc(t, "Open Preview", () => Lo(t, "stickers", { readOnly: !0, hideSidebar: !1 })), Nb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => Lo(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
pn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Zc.values()].map((i) => {
      try {
        return typeof i == "function" ? i() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...vo.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [..._o.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && nd(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && nd(t, e, "PanoramaCutout", "Open Cutout Editor"), Uc(n) && Bv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Uc(e) && Gv(t);
  }
});
