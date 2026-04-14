import * as Ca from "../../scripts/app.js";
import { app as dn } from "../../scripts/app.js";
import { api as Qe } from "../../scripts/api.js";
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
const de = {}, Ai = [], qn = () => {
}, Xf = () => !1, ls = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), us = (t) => t.startsWith("onUpdate:"), Be = Object.assign, Xc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Wg = Object.prototype.hasOwnProperty, ee = (t, e) => Wg.call(t, e), Ft = Array.isArray, Ii = (t) => Fo(t) === "[object Map]", Zf = (t) => Fo(t) === "[object Set]", Au = (t) => Fo(t) === "[object Date]", jt = (t) => typeof t == "function", Ce = (t) => typeof t == "string", Yn = (t) => typeof t == "symbol", se = (t) => t !== null && typeof t == "object", Jf = (t) => (se(t) || jt(t)) && jt(t.then) && jt(t.catch), Qf = Object.prototype.toString, Fo = (t) => Qf.call(t), qg = (t) => Fo(t).slice(8, -1), td = (t) => Fo(t) === "[object Object]", Zc = (t) => Ce(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, bo = /* @__PURE__ */ Yc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Yg = /-\w/g, en = fs(
  (t) => t.replace(Yg, (e) => e.slice(1).toUpperCase())
), Xg = /\B([A-Z])/g, ti = fs(
  (t) => t.replace(Xg, "-$1").toLowerCase()
), ds = fs((t) => t.charAt(0).toUpperCase() + t.slice(1)), rc = fs(
  (t) => t ? `on${ds(t)}` : ""
), Gn = (t, e) => !Object.is(t, e), ic = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, ed = (t, e, n, r = !1) => {
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
let Iu;
const hs = () => Iu || (Iu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ps(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = Ce(r) ? em(r) : ps(r);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ce(t) || se(t))
    return t;
}
const Jg = /;(?![^(]*\))/g, Qg = /:([^]+)/, tm = /\/\*[^]*?\*\//g;
function em(t) {
  const e = {};
  return t.replace(tm, "").split(Jg).forEach((n) => {
    if (n) {
      const r = n.split(Qg);
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
const nm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rm = /* @__PURE__ */ Yc(nm);
function nd(t) {
  return !!t || t === "";
}
function im(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Jc(t[r], e[r]);
  return n;
}
function Jc(t, e) {
  if (t === e) return !0;
  let n = Au(t), r = Au(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Yn(t), r = Yn(e), n || r)
    return t === e;
  if (n = Ft(t), r = Ft(e), n || r)
    return n && r ? im(t, e) : !1;
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
const rd = (t) => !!(t && t.__v_isRef === !0), id = (t) => Ce(t) ? t : t == null ? "" : Ft(t) || se(t) && (t.toString === Qf || !jt(t.toString)) ? rd(t) ? id(t.value) : JSON.stringify(t, od, 2) : String(t), od = (t, e) => rd(e) ? od(t, e.value) : Ii(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, o], c) => (n[oc(r, c) + " =>"] = o, n),
    {}
  )
} : Zf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => oc(n))
} : Yn(e) ? oc(e) : se(e) && !Ft(e) && !td(e) ? String(e) : e, oc = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cn;
class om {
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
function am() {
  return cn;
}
let fe;
const ac = /* @__PURE__ */ new WeakSet();
class ad {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Eu(this), ld(this);
    const e = fe, n = Cn;
    fe = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      ud(this), fe = e, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        el(e);
      this.deps = this.depsTail = void 0, Eu(this), this.onStop && this.onStop(), this.flags &= -2;
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
let sd = 0, vo, _o;
function cd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = _o, _o = t;
    return;
  }
  t.next = vo, vo = t;
}
function Qc() {
  sd++;
}
function tl() {
  if (--sd > 0)
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
function ld(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function ud(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), el(r), sm(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  t.deps = e, t.depsTail = n;
}
function Mc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (fd(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function fd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Eo) || (t.globalVersion = Eo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Mc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = fe, r = Cn;
  fe = t, Cn = !0;
  try {
    ld(t);
    const o = t.fn(t._value);
    (e.version === 0 || Gn(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    fe = n, Cn = r, ud(t), t.flags &= -3;
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
function sm(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Cn = !0;
const dd = [];
function cr() {
  dd.push(Cn), Cn = !1;
}
function lr() {
  const t = dd.pop();
  Cn = t === void 0 ? !0 : t;
}
function Eu(t) {
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
class cm {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!fe || !Cn || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new cm(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, hd(n);
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
function Ve(t, e, n) {
  if (Cn && fe) {
    let r = Pc.get(t);
    r || Pc.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new nl()), o.map = r, o.key = n), o.track();
  }
}
function sr(t, e, n, r, o, c) {
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
        (M === "length" || M === To || !Yn(M) && M >= p) && f(w);
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
  const e = /* @__PURE__ */ te(t);
  return e === t ? e : (Ve(e, "iterate", To), /* @__PURE__ */ gn(t) ? e : e.map(An));
}
function ms(t) {
  return Ve(t = /* @__PURE__ */ te(t), "iterate", To), t;
}
function Un(t, e) {
  return /* @__PURE__ */ ur(t) ? Fi(/* @__PURE__ */ Kr(t) ? An(e) : e) : An(e);
}
const lm = {
  __proto__: null,
  [Symbol.iterator]() {
    return sc(this, Symbol.iterator, (t) => Un(this, t));
  },
  concat(...t) {
    return gi(this).concat(
      ...t.map((e) => Ft(e) ? gi(e) : e)
    );
  },
  entries() {
    return sc(this, "entries", (t) => (t[1] = Un(this, t[1]), t));
  },
  every(t, e) {
    return nr(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return nr(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Un(this, r)),
      arguments
    );
  },
  find(t, e) {
    return nr(
      this,
      "find",
      t,
      e,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return nr(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return nr(
      this,
      "findLast",
      t,
      e,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return nr(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return nr(this, "forEach", t, e, void 0, arguments);
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
    return nr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ao(this, "pop");
  },
  push(...t) {
    return ao(this, "push", t);
  },
  reduce(t, ...e) {
    return Tu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Tu(this, "reduceRight", t, e);
  },
  shift() {
    return ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return nr(this, "some", t, e, void 0, arguments);
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
    return sc(this, "values", (t) => Un(this, t));
  }
};
function sc(t, e, n) {
  const r = ms(t), o = r[e]();
  return r !== t && !/* @__PURE__ */ gn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const um = Array.prototype;
function nr(t, e, n, r, o, c) {
  const u = ms(t), f = u !== t && !/* @__PURE__ */ gn(t), m = u[e];
  if (m !== um[e]) {
    const w = m.apply(t, c);
    return f ? An(w) : w;
  }
  let y = n;
  u !== t && (f ? y = function(w, M) {
    return n.call(this, Un(t, w), M, t);
  } : n.length > 2 && (y = function(w, M) {
    return n.call(this, w, M, t);
  }));
  const p = m.call(u, y, r);
  return f && o ? o(p) : p;
}
function Tu(t, e, n, r) {
  const o = ms(t), c = o !== t && !/* @__PURE__ */ gn(t);
  let u = n, f = !1;
  o !== t && (c ? (f = r.length === 0, u = function(y, p, w) {
    return f && (f = !1, y = Un(t, y)), n.call(this, y, Un(t, p), w, t);
  }) : n.length > 3 && (u = function(y, p, w) {
    return n.call(this, y, p, w, t);
  }));
  const m = o[e](u, ...r);
  return f ? Un(t, m) : m;
}
function cc(t, e, n) {
  const r = /* @__PURE__ */ te(t);
  Ve(r, "iterate", To);
  const o = r[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ al(n[0]) ? (n[0] = /* @__PURE__ */ te(n[0]), r[e](...n)) : o;
}
function ao(t, e, n = []) {
  cr(), Qc();
  const r = (/* @__PURE__ */ te(t))[e].apply(t, n);
  return tl(), lr(), r;
}
const fm = /* @__PURE__ */ Yc("__proto__,__v_isRef,__isVue"), pd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Yn)
);
function dm(t) {
  Yn(t) || (t = String(t));
  const e = /* @__PURE__ */ te(this);
  return Ve(e, "has", t), e.hasOwnProperty(t);
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
      return r === (o ? c ? xm : vd : c ? bd : yd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let m;
      if (u && (m = lm[n]))
        return m;
      if (n === "hasOwnProperty")
        return dm;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ue(e) ? e : r
    );
    if ((Yn(n) ? pd.has(n) : fm(n)) || (o || Ve(e, "get", n), c))
      return f;
    if (/* @__PURE__ */ Ue(f)) {
      const m = u && Zc(n) ? f : f.value;
      return o && se(m) ? /* @__PURE__ */ Ac(m) : m;
    }
    return se(f) ? o ? /* @__PURE__ */ Ac(f) : /* @__PURE__ */ il(f) : f;
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
      const y = /* @__PURE__ */ ur(c);
      if (!/* @__PURE__ */ gn(r) && !/* @__PURE__ */ ur(r) && (c = /* @__PURE__ */ te(c), r = /* @__PURE__ */ te(r)), !u && /* @__PURE__ */ Ue(c) && !/* @__PURE__ */ Ue(r))
        return y || (c.value = r), !0;
    }
    const f = u ? Number(n) < e.length : ee(e, n), m = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Ue(e) ? e : o
    );
    return e === /* @__PURE__ */ te(o) && (f ? Gn(r, c) && sr(e, "set", n, r) : sr(e, "add", n, r)), m;
  }
  deleteProperty(e, n) {
    const r = ee(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && r && sr(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Yn(n) || !pd.has(n)) && Ve(e, "has", n), r;
  }
  ownKeys(e) {
    return Ve(
      e,
      "iterate",
      Ft(e) ? "length" : Gr
    ), Reflect.ownKeys(e);
  }
}
class hm extends gd {
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
const pm = /* @__PURE__ */ new md(), gm = /* @__PURE__ */ new hm(), mm = /* @__PURE__ */ new md(!0);
const Cc = (t) => t, ca = (t) => Reflect.getPrototypeOf(t);
function ym(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, c = /* @__PURE__ */ te(o), u = Ii(c), f = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, y = o[t](...r), p = n ? Cc : e ? Fi : An;
    return !e && Ve(
      c,
      "iterate",
      m ? kc : Gr
    ), Be(
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
function bm(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ te(c), f = /* @__PURE__ */ te(o);
      t || (Gn(o, f) && Ve(u, "get", o), Ve(u, "get", f));
      const { has: m } = ca(u), y = e ? Cc : t ? Fi : An;
      if (m.call(u, o))
        return y(c.get(o));
      if (m.call(u, f))
        return y(c.get(f));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Ve(/* @__PURE__ */ te(o), "iterate", Gr), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ te(c), f = /* @__PURE__ */ te(o);
      return t || (Gn(o, f) && Ve(u, "has", o), Ve(u, "has", f)), o === f ? c.has(o) : c.has(o) || c.has(f);
    },
    forEach(o, c) {
      const u = this, f = u.__v_raw, m = /* @__PURE__ */ te(f), y = e ? Cc : t ? Fi : An;
      return !t && Ve(m, "iterate", Gr), f.forEach((p, w) => o.call(c, y(p), y(w), u));
    }
  };
  return Be(
    n,
    t ? {
      add: la("add"),
      set: la("set"),
      delete: la("delete"),
      clear: la("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ te(this), u = ca(c), f = /* @__PURE__ */ te(o), m = !e && !/* @__PURE__ */ gn(o) && !/* @__PURE__ */ ur(o) ? f : o;
        return u.has.call(c, m) || Gn(o, m) && u.has.call(c, o) || Gn(f, m) && u.has.call(c, f) || (c.add(m), sr(c, "add", m, m)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ gn(c) && !/* @__PURE__ */ ur(c) && (c = /* @__PURE__ */ te(c));
        const u = /* @__PURE__ */ te(this), { has: f, get: m } = ca(u);
        let y = f.call(u, o);
        y || (o = /* @__PURE__ */ te(o), y = f.call(u, o));
        const p = m.call(u, o);
        return u.set(o, c), y ? Gn(c, p) && sr(u, "set", o, c) : sr(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ te(this), { has: u, get: f } = ca(c);
        let m = u.call(c, o);
        m || (o = /* @__PURE__ */ te(o), m = u.call(c, o)), f && f.call(c, o);
        const y = c.delete(o);
        return m && sr(c, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ te(this), c = o.size !== 0, u = o.clear();
        return c && sr(
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
    n[o] = ym(o, t, e);
  }), n;
}
function rl(t, e) {
  const n = bm(t, e);
  return (r, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    ee(n, o) && o in r ? n : r,
    o,
    c
  );
}
const vm = {
  get: /* @__PURE__ */ rl(!1, !1)
}, _m = {
  get: /* @__PURE__ */ rl(!1, !0)
}, wm = {
  get: /* @__PURE__ */ rl(!0, !1)
};
const yd = /* @__PURE__ */ new WeakMap(), bd = /* @__PURE__ */ new WeakMap(), vd = /* @__PURE__ */ new WeakMap(), xm = /* @__PURE__ */ new WeakMap();
function Sm(t) {
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
function Nm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Sm(qg(t));
}
// @__NO_SIDE_EFFECTS__
function il(t) {
  return /* @__PURE__ */ ur(t) ? t : ol(
    t,
    !1,
    pm,
    vm,
    yd
  );
}
// @__NO_SIDE_EFFECTS__
function Mm(t) {
  return ol(
    t,
    !1,
    mm,
    _m,
    bd
  );
}
// @__NO_SIDE_EFFECTS__
function Ac(t) {
  return ol(
    t,
    !0,
    gm,
    wm,
    vd
  );
}
function ol(t, e, n, r, o) {
  if (!se(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Nm(t);
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
  return /* @__PURE__ */ ur(t) ? /* @__PURE__ */ Kr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ur(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function al(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ te(e) : t;
}
function Pm(t) {
  return !ee(t, "__v_skip") && Object.isExtensible(t) && ed(t, "__v_skip", !0), t;
}
const An = (t) => se(t) ? /* @__PURE__ */ il(t) : t, Fi = (t) => se(t) ? /* @__PURE__ */ Ac(t) : t;
// @__NO_SIDE_EFFECTS__
function Ue(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function km(t) {
  return Cm(t, !1);
}
function Cm(t, e) {
  return /* @__PURE__ */ Ue(t) ? t : new Am(t, e);
}
class Am {
  constructor(e, n) {
    this.dep = new nl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ te(e), this._value = n ? e : An(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gn(e) || /* @__PURE__ */ ur(e);
    e = r ? e : /* @__PURE__ */ te(e), Gn(e, n) && (this._rawValue = e, this._value = r ? e : An(e), this.dep.trigger());
  }
}
function sl(t) {
  return /* @__PURE__ */ Ue(t) ? t.value : t;
}
const Im = {
  get: (t, e, n) => e === "__v_raw" ? t : sl(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return /* @__PURE__ */ Ue(o) && !/* @__PURE__ */ Ue(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function _d(t) {
  return /* @__PURE__ */ Kr(t) ? t : new Proxy(t, Im);
}
class Em {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new nl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Eo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return cd(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return fd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Tm(t, e, n = !1) {
  let r, o;
  return jt(t) ? r = t : (r = t.get, o = t.set), new Em(r, o, n);
}
const ua = {}, ja = /* @__PURE__ */ new WeakMap();
let Vr;
function Lm(t, e = !1, n = Vr) {
  if (n) {
    let r = ja.get(n);
    r || ja.set(n, r = []), r.push(t);
  }
}
function Dm(t, e, n = de) {
  const { immediate: r, deep: o, once: c, scheduler: u, augmentJob: f, call: m } = n, y = (S) => o ? S : /* @__PURE__ */ gn(S) || o === !1 || o === 0 ? kr(S, 1) : kr(S);
  let p, w, M, k, A = !1, C = !1;
  if (/* @__PURE__ */ Ue(t) ? (w = () => t.value, A = /* @__PURE__ */ gn(t)) : /* @__PURE__ */ Kr(t) ? (w = () => y(t), A = !0) : Ft(t) ? (C = !0, A = t.some((S) => /* @__PURE__ */ Kr(S) || /* @__PURE__ */ gn(S)), w = () => t.map((S) => {
    if (/* @__PURE__ */ Ue(S))
      return S.value;
    if (/* @__PURE__ */ Kr(S))
      return y(S);
    if (jt(S))
      return m ? m(S, 2) : S();
  })) : jt(t) ? e ? w = m ? () => m(t, 2) : t : w = () => {
    if (M) {
      cr();
      try {
        M();
      } finally {
        lr();
      }
    }
    const S = Vr;
    Vr = p;
    try {
      return m ? m(t, 3, [k]) : t(k);
    } finally {
      Vr = S;
    }
  } : w = qn, e && o) {
    const S = w, W = o === !0 ? 1 / 0 : o;
    w = () => kr(S(), W);
  }
  const $ = am(), R = () => {
    p.stop(), $ && $.active && Xc($.effects, p);
  };
  if (c && e) {
    const S = e;
    e = (...W) => {
      S(...W), R();
    };
  }
  let D = C ? new Array(t.length).fill(ua) : ua;
  const H = (S) => {
    if (!(!(p.flags & 1) || !p.dirty && !S))
      if (e) {
        const W = p.run();
        if (o || A || (C ? W.some((Q, at) => Gn(Q, D[at])) : Gn(W, D))) {
          M && M();
          const Q = Vr;
          Vr = p;
          try {
            const at = [
              W,
              // pass undefined as the old value when it's changed for the first time
              D === ua ? void 0 : C && D[0] === ua ? [] : D,
              k
            ];
            D = W, m ? m(e, 3, at) : (
              // @ts-expect-error
              e(...at)
            );
          } finally {
            Vr = Q;
          }
        }
      } else
        p.run();
  };
  return f && f(H), p = new ad(w), p.scheduler = u ? () => u(H, !1) : H, k = (S) => Lm(S, !1, p), M = p.onStop = () => {
    const S = ja.get(p);
    if (S) {
      if (m)
        m(S, 4);
      else
        for (const W of S) W();
      ja.delete(p);
    }
  }, e ? r ? H(!0) : D = p.run() : u ? u(H.bind(null, !0), !0) : p.run(), R.pause = p.pause.bind(p), R.resume = p.resume.bind(p), R.stop = R, R;
}
function kr(t, e = 1 / 0, n) {
  if (e <= 0 || !se(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Ue(t))
    kr(t.value, e, n);
  else if (Ft(t))
    for (let r = 0; r < t.length; r++)
      kr(t[r], e, n);
  else if (Zf(t) || Ii(t))
    t.forEach((r) => {
      kr(r, e, n);
    });
  else if (td(t)) {
    for (const r in t)
      kr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && kr(t[r], e, n);
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
function Xn(t, e, n, r) {
  if (jt(t)) {
    const o = $o(t, e, n, r);
    return o && Jf(o) && o.catch((c) => {
      ys(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(Xn(t[c], e, n, r));
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
      cr(), $o(c, null, 10, [
        t,
        m,
        y
      ]), lr();
      return;
    }
  }
  Rm(t, n, o, r, u);
}
function Rm(t, e, n, r = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Je = [];
let zn = -1;
const Ei = [];
let Pr = null, wi = 0;
const wd = /* @__PURE__ */ Promise.resolve();
let Ua = null;
function xd(t) {
  const e = Ua || wd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Om(t) {
  let e = zn + 1, n = Je.length;
  for (; e < n; ) {
    const r = e + n >>> 1, o = Je[r], c = Lo(o);
    c < t || c === t && o.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function cl(t) {
  if (!(t.flags & 1)) {
    const e = Lo(t), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Lo(n) ? Je.push(t) : Je.splice(Om(e), 0, t), t.flags |= 1, Sd();
  }
}
function Sd() {
  Ua || (Ua = wd.then(Md));
}
function Fm(t) {
  Ft(t) ? Ei.push(...t) : Pr && t.id === -1 ? Pr.splice(wi + 1, 0, t) : t.flags & 1 || (Ei.push(t), t.flags |= 1), Sd();
}
function Lu(t, e, n = zn + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Nd(t) {
  if (Ei.length) {
    const e = [...new Set(Ei)].sort(
      (n, r) => Lo(n) - Lo(r)
    );
    if (Ei.length = 0, Pr) {
      Pr.push(...e);
      return;
    }
    for (Pr = e, wi = 0; wi < Pr.length; wi++) {
      const n = Pr[wi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pr = null, wi = 0;
  }
}
const Lo = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Md(t) {
  try {
    for (zn = 0; zn < Je.length; zn++) {
      const e = Je[zn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), $o(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; zn < Je.length; zn++) {
      const e = Je[zn];
      e && (e.flags &= -2);
    }
    zn = -1, Je.length = 0, Nd(), Ua = null, (Je.length || Ei.length) && Md();
  }
}
let kn = null, Pd = null;
function Ba(t) {
  const e = kn;
  return kn = t, Pd = t && t.type.__scopeId || null, e;
}
function $m(t, e = kn, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && Gu(-1);
    const c = Ba(e);
    let u;
    try {
      u = t(...o);
    } finally {
      Ba(c), r._d && Gu(1);
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
    m && (cr(), Xn(m, n, 8, [
      t.el,
      f,
      t,
      e
    ]), lr());
  }
}
function Hm(t, e) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), n[t] = e;
  }
}
function Aa(t, e, n = !1) {
  const r = H0();
  if (r || Li) {
    let o = Li ? Li._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && jt(e) ? e.call(r && r.proxy) : e;
  }
}
const Vm = /* @__PURE__ */ Symbol.for("v-scx"), zm = () => Aa(Vm);
function Ia(t, e, n) {
  return kd(t, e, n);
}
function kd(t, e, n = de) {
  const { immediate: r, deep: o, flush: c, once: u } = n, f = Be({}, n), m = e && r || !e && c !== "post";
  let y;
  if (Ro) {
    if (c === "sync") {
      const k = zm();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = qn, k.resume = qn, k.pause = qn, k;
    }
  }
  const p = je;
  f.call = (k, A, C) => Xn(k, p, A, C);
  let w = !1;
  c === "post" ? f.scheduler = (k) => {
    sn(k, p && p.suspense);
  } : c !== "sync" && (w = !0, f.scheduler = (k, A) => {
    A ? k() : cl(k);
  }), f.augmentJob = (k) => {
    e && (k.flags |= 4), w && (k.flags |= 2, p && (k.id = p.uid, k.i = p));
  };
  const M = Dm(t, e, f);
  return Ro && (y ? y.push(M) : m && M()), M;
}
function jm(t, e, n) {
  const r = this.proxy, o = Ce(t) ? t.includes(".") ? Cd(r, t) : () => r[t] : t.bind(r, r);
  let c;
  jt(e) ? c = e : (c = e.handler, n = e);
  const u = Ho(this), f = kd(o, c.bind(r), n);
  return u(), f;
}
function Cd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Um = /* @__PURE__ */ Symbol("_vte"), Bm = (t) => t.__isTeleport, Gm = /* @__PURE__ */ Symbol("_leaveCb");
function ll(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, ll(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ad(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Du(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function wo(t, e, n, r, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (C, $) => wo(
        C,
        e && (Ft(e) ? e[$] : e),
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
  const c = r.shapeFlag & 4 ? hl(r.component) : r.el, u = o ? null : c, { i: f, r: m } = t, y = e && e.r, p = f.refs === de ? f.refs = {} : f.refs, w = f.setupState, M = /* @__PURE__ */ te(w), k = w === de ? Xf : (C) => Du(p, C) ? !1 : ee(M, C), A = (C, $) => !($ && Du(p, $));
  if (y != null && y !== m) {
    if (Ru(e), Ce(y))
      p[y] = null, k(y) && (w[y] = null);
    else if (/* @__PURE__ */ Ue(y)) {
      const C = e;
      A(y, C.k) && (y.value = null), C.k && (p[C.k] = null);
    }
  }
  if (jt(m))
    $o(m, f, 12, [u, p]);
  else {
    const C = Ce(m), $ = /* @__PURE__ */ Ue(m);
    if (C || $) {
      const R = () => {
        if (t.f) {
          const D = C ? k(m) ? w[m] : p[m] : A() || !t.k ? m.value : p[t.k];
          if (o)
            Ft(D) && Xc(D, c);
          else if (Ft(D))
            D.includes(c) || D.push(c);
          else if (C)
            p[m] = [c], k(m) && (w[m] = p[m]);
          else {
            const H = [c];
            A(m, t.k) && (m.value = H), t.k && (p[t.k] = H);
          }
        } else C ? (p[m] = u, k(m) && (w[m] = u)) : $ && (A(m, t.k) && (m.value = u), t.k && (p[t.k] = u));
      };
      if (u) {
        const D = () => {
          R(), Ga.delete(t);
        };
        D.id = -1, Ga.set(t, D), sn(D, n);
      } else
        Ru(t), R();
    }
  }
}
function Ru(t) {
  const e = Ga.get(t);
  e && (e.flags |= 8, Ga.delete(t));
}
hs().requestIdleCallback;
hs().cancelIdleCallback;
const xo = (t) => !!t.type.__asyncLoader, Id = (t) => t.type.__isKeepAlive;
function Km(t, e) {
  Ed(t, "a", e);
}
function Wm(t, e) {
  Ed(t, "da", e);
}
function Ed(t, e, n = je) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (bs(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Id(o.parent.vnode) && qm(r, e, n, o), o = o.parent;
  }
}
function qm(t, e, n, r) {
  const o = bs(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Dd(() => {
    Xc(r[e], o);
  }, n);
}
function bs(t, e, n = je, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      cr();
      const f = Ho(n), m = Xn(e, n, t, u);
      return f(), lr(), m;
    });
    return r ? o.unshift(c) : o.push(c), c;
  }
}
const fr = (t) => (e, n = je) => {
  (!Ro || t === "sp") && bs(t, (...r) => e(...r), n);
}, Ym = fr("bm"), Td = fr("m"), Xm = fr(
  "bu"
), Zm = fr("u"), Ld = fr(
  "bum"
), Dd = fr("um"), Jm = fr(
  "sp"
), Qm = fr("rtg"), t0 = fr("rtc");
function e0(t, e = je) {
  bs("ec", t, e);
}
const n0 = "components", Rd = /* @__PURE__ */ Symbol.for("v-ndc");
function r0(t) {
  return Ce(t) ? i0(n0, t, !1) || t : t || Rd;
}
function i0(t, e, n = !0, r = !1) {
  const o = kn || je;
  if (o) {
    const c = o.type;
    {
      const f = B0(
        c,
        !1
      );
      if (f && (f === e || f === en(e) || f === ds(en(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ou(o[t] || c[t], e) || // global registration
      Ou(o.appContext[t], e)
    );
    return !u && r ? c : u;
  }
}
function Ou(t, e) {
  return t && (t[e] || t[en(e)] || t[ds(en(e))]);
}
function Ti(t, e, n, r) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ce(t)) {
    const f = u && /* @__PURE__ */ Kr(t);
    let m = !1, y = !1;
    f && (m = !/* @__PURE__ */ gn(t), y = /* @__PURE__ */ ur(t), t = ms(t)), o = new Array(t.length);
    for (let p = 0, w = t.length; p < w; p++)
      o[p] = e(
        m ? y ? Fi(An(t[p])) : An(t[p]) : t[p],
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
const Ic = (t) => t ? rh(t) ? hl(t) : Ic(t.parent) : null, So = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
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
    $options: (t) => Fd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      cl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = xd.bind(t.proxy)),
    $watch: (t) => jm.bind(t)
  })
), lc = (t, e) => t !== de && !t.__isScriptSetup && ee(t, e), o0 = {
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
        if (o !== de && ee(o, e))
          return u[e] = 2, o[e];
        if (ee(c, e))
          return u[e] = 3, c[e];
        if (n !== de && ee(n, e))
          return u[e] = 4, n[e];
        Ec && (u[e] = 0);
      }
    }
    const y = So[e];
    let p, w;
    if (y)
      return e === "$attrs" && Ve(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== de && ee(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      w = m.config.globalProperties, ee(w, e)
    )
      return w[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: c } = t;
    return lc(o, e) ? (o[e] = n, !0) : r !== de && ee(r, e) ? (r[e] = n, !0) : ee(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, props: c, type: u }
  }, f) {
    let m;
    return !!(n[f] || t !== de && f[0] !== "$" && ee(t, f) || lc(e, f) || ee(c, f) || ee(r, f) || ee(So, f) || ee(o.config.globalProperties, f) || (m = u.__cssModules) && m[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ee(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Fu(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Ec = !0;
function a0(t) {
  const e = Fd(t), n = t.proxy, r = t.ctx;
  Ec = !1, e.beforeCreate && $u(e.beforeCreate, t, "bc");
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
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: D,
    destroyed: H,
    unmounted: S,
    render: W,
    renderTracked: Q,
    renderTriggered: at,
    errorCaptured: et,
    serverPrefetch: Y,
    // public API
    expose: O,
    inheritAttrs: rt,
    // assets
    components: mt,
    directives: lt,
    filters: Z
  } = e;
  if (y && s0(y, r, null), u)
    for (const it in u) {
      const ct = u[it];
      jt(ct) && (r[it] = ct.bind(n));
    }
  if (o) {
    const it = o.call(n, n);
    se(it) && (t.data = /* @__PURE__ */ il(it));
  }
  if (Ec = !0, c)
    for (const it in c) {
      const ct = c[it], wt = jt(ct) ? ct.bind(n, n) : jt(ct.get) ? ct.get.bind(n, n) : qn, Rt = !jt(ct) && jt(ct.set) ? ct.set.bind(n) : qn, J = Di({
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
      Od(f[it], r, n, it);
  if (m) {
    const it = jt(m) ? m.call(n) : m;
    Reflect.ownKeys(it).forEach((ct) => {
      Hm(ct, it[ct]);
    });
  }
  p && $u(p, t, "c");
  function st(it, ct) {
    Ft(ct) ? ct.forEach((wt) => it(wt.bind(n))) : ct && it(ct.bind(n));
  }
  if (st(Ym, w), st(Td, M), st(Xm, k), st(Zm, A), st(Km, C), st(Wm, $), st(e0, et), st(t0, Q), st(Qm, at), st(Ld, D), st(Dd, S), st(Jm, Y), Ft(O))
    if (O.length) {
      const it = t.exposed || (t.exposed = {});
      O.forEach((ct) => {
        Object.defineProperty(it, ct, {
          get: () => n[ct],
          set: (wt) => n[ct] = wt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  W && t.render === qn && (t.render = W), rt != null && (t.inheritAttrs = rt), mt && (t.components = mt), lt && (t.directives = lt), Y && Ad(t);
}
function s0(t, e, n = qn) {
  Ft(t) && (t = Tc(t));
  for (const r in t) {
    const o = t[r];
    let c;
    se(o) ? "default" in o ? c = Aa(
      o.from || r,
      o.default,
      !0
    ) : c = Aa(o.from || r) : c = Aa(o), /* @__PURE__ */ Ue(c) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[r] = c;
  }
}
function $u(t, e, n) {
  Xn(
    Ft(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Od(t, e, n, r) {
  let o = r.includes(".") ? Cd(n, r) : () => n[r];
  if (Ce(t)) {
    const c = e[t];
    jt(c) && Ia(o, c);
  } else if (jt(t))
    Ia(o, t.bind(n));
  else if (se(t))
    if (Ft(t))
      t.forEach((c) => Od(c, e, n, r));
    else {
      const c = jt(t.handler) ? t.handler.bind(n) : e[t.handler];
      jt(c) && Ia(o, c, t);
    }
}
function Fd(t) {
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
      const f = c0[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const c0 = {
  data: Hu,
  props: Vu,
  emits: Vu,
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
  watch: u0,
  // provide / inject
  provide: Hu,
  inject: l0
};
function Hu(t, e) {
  return e ? t ? function() {
    return Be(
      jt(t) ? t.call(this, this) : t,
      jt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function l0(t, e) {
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
function Ze(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function po(t, e) {
  return t ? Be(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Vu(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Be(
    /* @__PURE__ */ Object.create(null),
    Fu(t),
    Fu(e ?? {})
  ) : e;
}
function u0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Be(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Ze(t[r], e[r]);
  return n;
}
function $d() {
  return {
    app: null,
    config: {
      isNativeTag: Xf,
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
let f0 = 0;
function d0(t, e) {
  return function(r, o = null) {
    jt(r) || (r = Be({}, r)), o != null && !se(o) && (o = null);
    const c = $d(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let m = !1;
    const y = c.app = {
      _uid: f0++,
      _component: r,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: K0,
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
          const k = y._ceVNode || tn(r, o);
          return k.appContext = c, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(k, p, M), m = !0, y._container = p, p.__vue_app__ = y, hl(k.component);
        }
      },
      onUnmount(p) {
        f.push(p);
      },
      unmount() {
        m && (Xn(
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
const h0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${en(e)}Modifiers`] || t[`${ti(e)}Modifiers`];
function p0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || de;
  let o = n;
  const c = e.startsWith("update:"), u = c && h0(r, e.slice(7));
  u && (u.trim && (o = n.map((p) => Ce(p) ? p.trim() : p)), u.number && (o = n.map(Zg)));
  let f, m = r[f = rc(e)] || // also try camelCase event handler (#2249)
  r[f = rc(en(e))];
  !m && c && (m = r[f = rc(ti(e))]), m && Xn(
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
    t.emitted[f] = !0, Xn(
      y,
      t,
      6,
      o
    );
  }
}
const g0 = /* @__PURE__ */ new WeakMap();
function Hd(t, e, n = !1) {
  const r = n ? g0 : e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, f = !1;
  if (!jt(t)) {
    const m = (y) => {
      const p = Hd(y, e, !0);
      p && (f = !0, Be(u, p));
    };
    !n && e.mixins.length && e.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !c && !f ? (se(t) && r.set(t, null), null) : (Ft(c) ? c.forEach((m) => u[m] = null) : Be(u, c), se(t) && r.set(t, u), u);
}
function vs(t, e) {
  return !t || !ls(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ee(t, e[0].toLowerCase() + e.slice(1)) || ee(t, ti(e)) || ee(t, e));
}
function zu(t) {
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
  } = t, $ = Ba(t);
  let R, D;
  try {
    if (n.shapeFlag & 4) {
      const S = o || r, W = S;
      R = Bn(
        y.call(
          W,
          S,
          p,
          w,
          k,
          M,
          A
        )
      ), D = f;
    } else {
      const S = e;
      R = Bn(
        S.length > 1 ? S(
          w,
          { attrs: f, slots: u, emit: m }
        ) : S(
          w,
          null
        )
      ), D = e.props ? f : m0(f);
    }
  } catch (S) {
    No.length = 0, ys(S, t, 1), R = tn(Cr);
  }
  let H = R;
  if (D && C !== !1) {
    const S = Object.keys(D), { shapeFlag: W } = H;
    S.length && W & 7 && (c && S.some(us) && (D = y0(
      D,
      c
    )), H = $i(H, D, !1, !0));
  }
  return n.dirs && (H = $i(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && ll(H, n.transition), R = H, Ba($), R;
}
const m0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ls(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, y0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!us(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function b0(t, e, n) {
  const { props: r, children: o, component: c } = t, { props: u, children: f, patchFlag: m } = e, y = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return r ? ju(r, u, y) : !!u;
    if (m & 8) {
      const p = e.dynamicProps;
      for (let w = 0; w < p.length; w++) {
        const M = p[w];
        if (Vd(u, r, M) && !vs(y, M))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? ju(r, u, y) : !0 : !!u;
  return !1;
}
function ju(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    if (Vd(e, t, c) && !vs(n, c))
      return !0;
  }
  return !1;
}
function Vd(t, e, n) {
  const r = t[n], o = e[n];
  return n === "style" && se(r) && se(o) ? !Jc(r, o) : r !== o;
}
function v0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = r, t = o), o === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const zd = {}, jd = () => Object.create(zd), Ud = (t) => Object.getPrototypeOf(t) === zd;
function _0(t, e, n, r = !1) {
  const o = {}, c = jd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Bd(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = r ? o : /* @__PURE__ */ Mm(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function w0(t, e, n, r) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ te(o), [m] = t.propsOptions;
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
        if (vs(t.emitsOptions, M))
          continue;
        const k = e[M];
        if (m)
          if (ee(c, M))
            k !== c[M] && (c[M] = k, y = !0);
          else {
            const A = en(M);
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
    Bd(t, e, o, c) && (y = !0);
    let p;
    for (const w in f)
      (!e || // for camelCase
      !ee(e, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ti(w)) === w || !ee(e, p))) && (m ? n && // for camelCase
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
        (!e || !ee(e, w)) && (delete c[w], y = !0);
  }
  y && sr(t.attrs, "set", "");
}
function Bd(t, e, n, r) {
  const [o, c] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let m in e) {
      if (bo(m))
        continue;
      const y = e[m];
      let p;
      o && ee(o, p = en(m)) ? !c || !c.includes(p) ? n[p] = y : (f || (f = {}))[p] = y : vs(t.emitsOptions, m) || (!(m in r) || y !== r[m]) && (r[m] = y, u = !0);
    }
  if (c) {
    const m = /* @__PURE__ */ te(n), y = f || de;
    for (let p = 0; p < c.length; p++) {
      const w = c[p];
      n[w] = Lc(
        o,
        m,
        w,
        y[w],
        t,
        !ee(y, w)
      );
    }
  }
  return u;
}
function Lc(t, e, n, r, o, c) {
  const u = t[n];
  if (u != null) {
    const f = ee(u, "default");
    if (f && r === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && jt(m)) {
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
    ] && (r === "" || r === ti(n)) && (r = !0));
  }
  return r;
}
const x0 = /* @__PURE__ */ new WeakMap();
function Gd(t, e, n = !1) {
  const r = n ? x0 : e.propsCache, o = r.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, f = [];
  let m = !1;
  if (!jt(t)) {
    const p = (w) => {
      m = !0;
      const [M, k] = Gd(w, e, !0);
      Be(u, M), k && f.push(...k);
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  if (!c && !m)
    return se(t) && r.set(t, Ai), Ai;
  if (Ft(c))
    for (let p = 0; p < c.length; p++) {
      const w = en(c[p]);
      Uu(w) && (u[w] = de);
    }
  else if (c)
    for (const p in c) {
      const w = en(p);
      if (Uu(w)) {
        const M = c[p], k = u[w] = Ft(M) || jt(M) ? { type: M } : Be({}, M), A = k.type;
        let C = !1, $ = !0;
        if (Ft(A))
          for (let R = 0; R < A.length; ++R) {
            const D = A[R], H = jt(D) && D.name;
            if (H === "Boolean") {
              C = !0;
              break;
            } else H === "String" && ($ = !1);
          }
        else
          C = jt(A) && A.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = $, (C || ee(k, "default")) && f.push(w);
      }
    }
  const y = [u, f];
  return se(t) && r.set(t, y), y;
}
function Uu(t) {
  return t[0] !== "$" && !bo(t);
}
const ul = (t) => t === "_" || t === "_ctx" || t === "$stable", fl = (t) => Ft(t) ? t.map(Bn) : [Bn(t)], S0 = (t, e, n) => {
  if (e._n)
    return e;
  const r = $m((...o) => fl(e(...o)), n);
  return r._c = !1, r;
}, Kd = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (ul(o)) continue;
    const c = t[o];
    if (jt(c))
      e[o] = S0(o, c, r);
    else if (c != null) {
      const u = fl(c);
      e[o] = () => u;
    }
  }
}, Wd = (t, e) => {
  const n = fl(e);
  t.slots.default = () => n;
}, qd = (t, e, n) => {
  for (const r in e)
    (n || !ul(r)) && (t[r] = e[r]);
}, N0 = (t, e, n) => {
  const r = t.slots = jd();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (qd(r, e, n), n && ed(r, "_", o, !0)) : Kd(e, r);
  } else e && Wd(t, e);
}, M0 = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let c = !0, u = de;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? c = !1 : qd(o, e, n) : (c = !e.$stable, Kd(e, o)), u = e;
  } else e && (Wd(t, e), u = { default: 1 });
  if (c)
    for (const f in o)
      !ul(f) && u[f] == null && delete o[f];
}, sn = I0;
function P0(t) {
  return k0(t);
}
function k0(t, e) {
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
    setScopeId: k = qn,
    insertStaticContent: A
  } = t, C = (I, L, V, q = null, K = null, X = null, vt = void 0, bt = null, pt = !!L.dynamicChildren) => {
    if (I === L)
      return;
    I && !so(I, L) && (q = St(I), Mt(I, K, X, !0), I = null), L.patchFlag === -2 && (pt = !1, L.dynamicChildren = null);
    const { type: nt, ref: h, shapeFlag: yt } = L;
    switch (nt) {
      case _s:
        $(I, L, V, q);
        break;
      case Cr:
        R(I, L, V, q);
        break;
      case Ea:
        I == null && D(L, V, q, vt);
        break;
      case ze:
        mt(
          I,
          L,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt
        );
        break;
      default:
        yt & 1 ? W(
          I,
          L,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt
        ) : yt & 6 ? lt(
          I,
          L,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt
        ) : (yt & 64 || yt & 128) && nt.process(
          I,
          L,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt,
          $t
        );
    }
    h != null && K ? wo(h, I && I.ref, X, L || I, !L) : h == null && I && I.ref != null && wo(I.ref, null, X, I, !0);
  }, $ = (I, L, V, q) => {
    if (I == null)
      r(
        L.el = f(L.children),
        V,
        q
      );
    else {
      const K = L.el = I.el;
      L.children !== I.children && y(K, L.children);
    }
  }, R = (I, L, V, q) => {
    I == null ? r(
      L.el = m(L.children || ""),
      V,
      q
    ) : L.el = I.el;
  }, D = (I, L, V, q) => {
    [I.el, I.anchor] = A(
      I.children,
      L,
      V,
      q,
      I.el,
      I.anchor
    );
  }, H = ({ el: I, anchor: L }, V, q) => {
    let K;
    for (; I && I !== L; )
      K = M(I), r(I, V, q), I = K;
    r(L, V, q);
  }, S = ({ el: I, anchor: L }) => {
    let V;
    for (; I && I !== L; )
      V = M(I), o(I), I = V;
    o(L);
  }, W = (I, L, V, q, K, X, vt, bt, pt) => {
    if (L.type === "svg" ? vt = "svg" : L.type === "math" && (vt = "mathml"), I == null)
      Q(
        L,
        V,
        q,
        K,
        X,
        vt,
        bt,
        pt
      );
    else {
      const nt = I.el && I.el._isVueCE ? I.el : null;
      try {
        nt && nt._beginPatch(), Y(
          I,
          L,
          K,
          X,
          vt,
          bt,
          pt
        );
      } finally {
        nt && nt._endPatch();
      }
    }
  }, Q = (I, L, V, q, K, X, vt, bt) => {
    let pt, nt;
    const { props: h, shapeFlag: yt, transition: Ct, dirs: It } = I;
    if (pt = I.el = u(
      I.type,
      X,
      h && h.is,
      h
    ), yt & 8 ? p(pt, I.children) : yt & 16 && et(
      I.children,
      pt,
      null,
      q,
      K,
      uc(I, X),
      vt,
      bt
    ), It && Fr(I, null, q, "created"), at(pt, I, I.scopeId, vt, q), h) {
      for (const kt in h)
        kt !== "value" && !bo(kt) && c(pt, kt, null, h[kt], X, q);
      "value" in h && c(pt, "value", null, h.value, X), (nt = h.onVnodeBeforeMount) && $n(nt, q, I);
    }
    It && Fr(I, null, q, "beforeMount");
    const Yt = C0(K, Ct);
    Yt && Ct.beforeEnter(pt), r(pt, L, V), ((nt = h && h.onVnodeMounted) || Yt || It) && sn(() => {
      try {
        nt && $n(nt, q, I), Yt && Ct.enter(pt), It && Fr(I, null, q, "mounted");
      } finally {
      }
    }, K);
  }, at = (I, L, V, q, K) => {
    if (V && k(I, V), q)
      for (let X = 0; X < q.length; X++)
        k(I, q[X]);
    if (K) {
      let X = K.subTree;
      if (L === X || Jd(X.type) && (X.ssContent === L || X.ssFallback === L)) {
        const vt = K.vnode;
        at(
          I,
          vt,
          vt.scopeId,
          vt.slotScopeIds,
          K.parent
        );
      }
    }
  }, et = (I, L, V, q, K, X, vt, bt, pt = 0) => {
    for (let nt = pt; nt < I.length; nt++) {
      const h = I[nt] = bt ? ar(I[nt]) : Bn(I[nt]);
      C(
        null,
        h,
        L,
        V,
        q,
        K,
        X,
        vt,
        bt
      );
    }
  }, Y = (I, L, V, q, K, X, vt) => {
    const bt = L.el = I.el;
    let { patchFlag: pt, dynamicChildren: nt, dirs: h } = L;
    pt |= I.patchFlag & 16;
    const yt = I.props || de, Ct = L.props || de;
    let It;
    if (V && $r(V, !1), (It = Ct.onVnodeBeforeUpdate) && $n(It, V, L, I), h && Fr(L, I, V, "beforeUpdate"), V && $r(V, !0), (yt.innerHTML && Ct.innerHTML == null || yt.textContent && Ct.textContent == null) && p(bt, ""), nt ? O(
      I.dynamicChildren,
      nt,
      bt,
      V,
      q,
      uc(L, K),
      X
    ) : vt || ct(
      I,
      L,
      bt,
      null,
      V,
      q,
      uc(L, K),
      X,
      !1
    ), pt > 0) {
      if (pt & 16)
        rt(bt, yt, Ct, V, K);
      else if (pt & 2 && yt.class !== Ct.class && c(bt, "class", null, Ct.class, K), pt & 4 && c(bt, "style", yt.style, Ct.style, K), pt & 8) {
        const Yt = L.dynamicProps;
        for (let kt = 0; kt < Yt.length; kt++) {
          const Wt = Yt[kt], Zt = yt[Wt], Me = Ct[Wt];
          (Me !== Zt || Wt === "value") && c(bt, Wt, Zt, Me, K, V);
        }
      }
      pt & 1 && I.children !== L.children && p(bt, L.children);
    } else !vt && nt == null && rt(bt, yt, Ct, V, K);
    ((It = Ct.onVnodeUpdated) || h) && sn(() => {
      It && $n(It, V, L, I), h && Fr(L, I, V, "updated");
    }, q);
  }, O = (I, L, V, q, K, X, vt) => {
    for (let bt = 0; bt < L.length; bt++) {
      const pt = I[bt], nt = L[bt], h = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        pt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (pt.type === ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(pt, nt) || // - In the case of a component, it could contain anything.
        pt.shapeFlag & 198) ? w(pt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      C(
        pt,
        nt,
        h,
        null,
        q,
        K,
        X,
        vt,
        !0
      );
    }
  }, rt = (I, L, V, q, K) => {
    if (L !== V) {
      if (L !== de)
        for (const X in L)
          !bo(X) && !(X in V) && c(
            I,
            X,
            L[X],
            null,
            K,
            q
          );
      for (const X in V) {
        if (bo(X)) continue;
        const vt = V[X], bt = L[X];
        vt !== bt && X !== "value" && c(I, X, bt, vt, K, q);
      }
      "value" in V && c(I, "value", L.value, V.value, K);
    }
  }, mt = (I, L, V, q, K, X, vt, bt, pt) => {
    const nt = L.el = I ? I.el : f(""), h = L.anchor = I ? I.anchor : f("");
    let { patchFlag: yt, dynamicChildren: Ct, slotScopeIds: It } = L;
    It && (bt = bt ? bt.concat(It) : It), I == null ? (r(nt, V, q), r(h, V, q), et(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      V,
      h,
      K,
      X,
      vt,
      bt,
      pt
    )) : yt > 0 && yt & 64 && Ct && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren && I.dynamicChildren.length === Ct.length ? (O(
      I.dynamicChildren,
      Ct,
      V,
      K,
      X,
      vt,
      bt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || K && L === K.subTree) && Yd(
      I,
      L,
      !0
      /* shallow */
    )) : ct(
      I,
      L,
      V,
      h,
      K,
      X,
      vt,
      bt,
      pt
    );
  }, lt = (I, L, V, q, K, X, vt, bt, pt) => {
    L.slotScopeIds = bt, I == null ? L.shapeFlag & 512 ? K.ctx.activate(
      L,
      V,
      q,
      vt,
      pt
    ) : Z(
      L,
      V,
      q,
      K,
      X,
      vt,
      pt
    ) : U(I, L, pt);
  }, Z = (I, L, V, q, K, X, vt) => {
    const bt = I.component = $0(
      I,
      q,
      K
    );
    if (Id(I) && (bt.ctx.renderer = $t), V0(bt, !1, vt), bt.asyncDep) {
      if (K && K.registerDep(bt, st, vt), !I.el) {
        const pt = bt.subTree = tn(Cr);
        R(null, pt, L, V), I.placeholder = pt.el;
      }
    } else
      st(
        bt,
        I,
        L,
        V,
        K,
        X,
        vt
      );
  }, U = (I, L, V) => {
    const q = L.component = I.component;
    if (b0(I, L, V))
      if (q.asyncDep && !q.asyncResolved) {
        it(q, L, V);
        return;
      } else
        q.next = L, q.update();
    else
      L.el = I.el, q.vnode = L;
  }, st = (I, L, V, q, K, X, vt) => {
    const bt = () => {
      if (I.isMounted) {
        let { next: yt, bu: Ct, u: It, parent: Yt, vnode: kt } = I;
        {
          const nn = Xd(I);
          if (nn) {
            yt && (yt.el = kt.el, it(I, yt, vt)), nn.asyncDep.then(() => {
              sn(() => {
                I.isUnmounted || nt();
              }, K);
            });
            return;
          }
        }
        let Wt = yt, Zt;
        $r(I, !1), yt ? (yt.el = kt.el, it(I, yt, vt)) : yt = kt, Ct && ic(Ct), (Zt = yt.props && yt.props.onVnodeBeforeUpdate) && $n(Zt, Yt, yt, kt), $r(I, !0);
        const Me = zu(I), Ee = I.subTree;
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
        ), yt.el = Me.el, Wt === null && v0(I, Me.el), It && sn(It, K), (Zt = yt.props && yt.props.onVnodeUpdated) && sn(
          () => $n(Zt, Yt, yt, kt),
          K
        );
      } else {
        let yt;
        const { el: Ct, props: It } = L, { bm: Yt, m: kt, parent: Wt, root: Zt, type: Me } = I, Ee = xo(L);
        $r(I, !1), Yt && ic(Yt), !Ee && (yt = It && It.onVnodeBeforeMount) && $n(yt, Wt, L), $r(I, !0);
        {
          Zt.ce && Zt.ce._hasShadowRoot() && Zt.ce._injectChildStyle(
            Me,
            I.parent ? I.parent.type : void 0
          );
          const nn = I.subTree = zu(I);
          C(
            null,
            nn,
            V,
            q,
            I,
            K,
            X
          ), L.el = nn.el;
        }
        if (kt && sn(kt, K), !Ee && (yt = It && It.onVnodeMounted)) {
          const nn = L;
          sn(
            () => $n(yt, Wt, nn),
            K
          );
        }
        (L.shapeFlag & 256 || Wt && xo(Wt.vnode) && Wt.vnode.shapeFlag & 256) && I.a && sn(I.a, K), I.isMounted = !0, L = V = q = null;
      }
    };
    I.scope.on();
    const pt = I.effect = new ad(bt);
    I.scope.off();
    const nt = I.update = pt.run.bind(pt), h = I.job = pt.runIfDirty.bind(pt);
    h.i = I, h.id = I.uid, pt.scheduler = () => cl(h), $r(I, !0), nt();
  }, it = (I, L, V) => {
    L.component = I;
    const q = I.vnode.props;
    I.vnode = L, I.next = null, w0(I, L.props, q, V), M0(I, L.children, V), cr(), Lu(I), lr();
  }, ct = (I, L, V, q, K, X, vt, bt, pt = !1) => {
    const nt = I && I.children, h = I ? I.shapeFlag : 0, yt = L.children, { patchFlag: Ct, shapeFlag: It } = L;
    if (Ct > 0) {
      if (Ct & 128) {
        Rt(
          nt,
          yt,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt
        );
        return;
      } else if (Ct & 256) {
        wt(
          nt,
          yt,
          V,
          q,
          K,
          X,
          vt,
          bt,
          pt
        );
        return;
      }
    }
    It & 8 ? (h & 16 && Pt(nt, K, X), yt !== nt && p(V, yt)) : h & 16 ? It & 16 ? Rt(
      nt,
      yt,
      V,
      q,
      K,
      X,
      vt,
      bt,
      pt
    ) : Pt(nt, K, X, !0) : (h & 8 && p(V, ""), It & 16 && et(
      yt,
      V,
      q,
      K,
      X,
      vt,
      bt,
      pt
    ));
  }, wt = (I, L, V, q, K, X, vt, bt, pt) => {
    I = I || Ai, L = L || Ai;
    const nt = I.length, h = L.length, yt = Math.min(nt, h);
    let Ct;
    for (Ct = 0; Ct < yt; Ct++) {
      const It = L[Ct] = pt ? ar(L[Ct]) : Bn(L[Ct]);
      C(
        I[Ct],
        It,
        V,
        null,
        K,
        X,
        vt,
        bt,
        pt
      );
    }
    nt > h ? Pt(
      I,
      K,
      X,
      !0,
      !1,
      yt
    ) : et(
      L,
      V,
      q,
      K,
      X,
      vt,
      bt,
      pt,
      yt
    );
  }, Rt = (I, L, V, q, K, X, vt, bt, pt) => {
    let nt = 0;
    const h = L.length;
    let yt = I.length - 1, Ct = h - 1;
    for (; nt <= yt && nt <= Ct; ) {
      const It = I[nt], Yt = L[nt] = pt ? ar(L[nt]) : Bn(L[nt]);
      if (so(It, Yt))
        C(
          It,
          Yt,
          V,
          null,
          K,
          X,
          vt,
          bt,
          pt
        );
      else
        break;
      nt++;
    }
    for (; nt <= yt && nt <= Ct; ) {
      const It = I[yt], Yt = L[Ct] = pt ? ar(L[Ct]) : Bn(L[Ct]);
      if (so(It, Yt))
        C(
          It,
          Yt,
          V,
          null,
          K,
          X,
          vt,
          bt,
          pt
        );
      else
        break;
      yt--, Ct--;
    }
    if (nt > yt) {
      if (nt <= Ct) {
        const It = Ct + 1, Yt = It < h ? L[It].el : q;
        for (; nt <= Ct; )
          C(
            null,
            L[nt] = pt ? ar(L[nt]) : Bn(L[nt]),
            V,
            Yt,
            K,
            X,
            vt,
            bt,
            pt
          ), nt++;
      }
    } else if (nt > Ct)
      for (; nt <= yt; )
        Mt(I[nt], K, X, !0), nt++;
    else {
      const It = nt, Yt = nt, kt = /* @__PURE__ */ new Map();
      for (nt = Yt; nt <= Ct; nt++) {
        const Ge = L[nt] = pt ? ar(L[nt]) : Bn(L[nt]);
        Ge.key != null && kt.set(Ge.key, nt);
      }
      let Wt, Zt = 0;
      const Me = Ct - Yt + 1;
      let Ee = !1, nn = 0;
      const rn = new Array(Me);
      for (nt = 0; nt < Me; nt++) rn[nt] = 0;
      for (nt = It; nt <= yt; nt++) {
        const Ge = I[nt];
        if (Zt >= Me) {
          Mt(Ge, K, X, !0);
          continue;
        }
        let pn;
        if (Ge.key != null)
          pn = kt.get(Ge.key);
        else
          for (Wt = Yt; Wt <= Ct; Wt++)
            if (rn[Wt - Yt] === 0 && so(Ge, L[Wt])) {
              pn = Wt;
              break;
            }
        pn === void 0 ? Mt(Ge, K, X, !0) : (rn[pn - Yt] = nt + 1, pn >= nn ? nn = pn : Ee = !0, C(
          Ge,
          L[pn],
          V,
          null,
          K,
          X,
          vt,
          bt,
          pt
        ), Zt++);
      }
      const Ie = Ee ? A0(rn) : Ai;
      for (Wt = Ie.length - 1, nt = Me - 1; nt >= 0; nt--) {
        const Ge = Yt + nt, pn = L[Ge], dr = L[Ge + 1], hr = Ge + 1 < h ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          dr.el || Zd(dr)
        ) : q;
        rn[nt] === 0 ? C(
          null,
          pn,
          V,
          hr,
          K,
          X,
          vt,
          bt,
          pt
        ) : Ee && (Wt < 0 || nt !== Ie[Wt] ? J(pn, V, hr, 2) : Wt--);
      }
    }
  }, J = (I, L, V, q, K = null) => {
    const { el: X, type: vt, transition: bt, children: pt, shapeFlag: nt } = I;
    if (nt & 6) {
      J(I.component.subTree, L, V, q);
      return;
    }
    if (nt & 128) {
      I.suspense.move(L, V, q);
      return;
    }
    if (nt & 64) {
      vt.move(I, L, V, $t);
      return;
    }
    if (vt === ze) {
      r(X, L, V);
      for (let yt = 0; yt < pt.length; yt++)
        J(pt[yt], L, V, q);
      r(I.anchor, L, V);
      return;
    }
    if (vt === Ea) {
      H(I, L, V);
      return;
    }
    if (q !== 2 && nt & 1 && bt)
      if (q === 0)
        bt.beforeEnter(X), r(X, L, V), sn(() => bt.enter(X), K);
      else {
        const { leave: yt, delayLeave: Ct, afterLeave: It } = bt, Yt = () => {
          I.ctx.isUnmounted ? o(X) : r(X, L, V);
        }, kt = () => {
          X._isLeaving && X[Gm](
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
  }, Mt = (I, L, V, q = !1, K = !1) => {
    const {
      type: X,
      props: vt,
      ref: bt,
      children: pt,
      dynamicChildren: nt,
      shapeFlag: h,
      patchFlag: yt,
      dirs: Ct,
      cacheIndex: It,
      memo: Yt
    } = I;
    if (yt === -2 && (K = !1), bt != null && (cr(), wo(bt, null, V, I, !0), lr()), It != null && (L.renderCache[It] = void 0), h & 256) {
      L.ctx.deactivate(I);
      return;
    }
    const kt = h & 1 && Ct, Wt = !xo(I);
    let Zt;
    if (Wt && (Zt = vt && vt.onVnodeBeforeUnmount) && $n(Zt, L, I), h & 6)
      z(I.component, V, q);
    else {
      if (h & 128) {
        I.suspense.unmount(V, q);
        return;
      }
      kt && Fr(I, null, L, "beforeUnmount"), h & 64 ? I.type.remove(
        I,
        L,
        V,
        $t,
        q
      ) : nt && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !nt.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== ze || yt > 0 && yt & 64) ? Pt(
        nt,
        L,
        V,
        !1,
        !0
      ) : (X === ze && yt & 384 || !K && h & 16) && Pt(pt, L, V), q && Bt(I);
    }
    const Me = Yt != null && It == null;
    (Wt && (Zt = vt && vt.onVnodeUnmounted) || kt || Me) && sn(() => {
      Zt && $n(Zt, L, I), kt && Fr(I, null, L, "unmounted"), Me && (I.el = null);
    }, V);
  }, Bt = (I) => {
    const { type: L, el: V, anchor: q, transition: K } = I;
    if (L === ze) {
      ye(V, q);
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
      const { leave: vt, delayLeave: bt } = K, pt = () => vt(V, X);
      bt ? bt(I.el, X, pt) : pt();
    } else
      X();
  }, ye = (I, L) => {
    let V;
    for (; I !== L; )
      V = M(I), o(I), I = V;
    o(L);
  }, z = (I, L, V) => {
    const { bum: q, scope: K, job: X, subTree: vt, um: bt, m: pt, a: nt } = I;
    Bu(pt), Bu(nt), q && ic(q), K.stop(), X && (X.flags |= 8, Mt(vt, I, L, V)), bt && sn(bt, L), sn(() => {
      I.isUnmounted = !0;
    }, L);
  }, Pt = (I, L, V, q = !1, K = !1, X = 0) => {
    for (let vt = X; vt < I.length; vt++)
      Mt(I[vt], L, V, q, K);
  }, St = (I) => {
    if (I.shapeFlag & 6)
      return St(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const L = M(I.anchor || I.el), V = L && L[Um];
    return V ? M(V) : L;
  };
  let Dt = !1;
  const zt = (I, L, V) => {
    let q;
    I == null ? L._vnode && (Mt(L._vnode, null, null, !0), q = L._vnode.component) : C(
      L._vnode || null,
      I,
      L,
      null,
      null,
      null,
      V
    ), L._vnode = I, Dt || (Dt = !0, Lu(q), Nd(), Dt = !1);
  }, $t = {
    p: C,
    um: Mt,
    m: J,
    r: Bt,
    mt: Z,
    mc: et,
    pc: ct,
    pbc: O,
    n: St,
    o: t
  };
  return {
    render: zt,
    hydrate: void 0,
    createApp: d0(zt)
  };
}
function uc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function $r({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function C0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Yd(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (Ft(r) && Ft(o))
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      let f = o[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[c] = ar(o[c]), f.el = u.el), !n && f.patchFlag !== -2 && Yd(u, f)), f.type === _s && (f.patchFlag === -1 && (f = o[c] = ar(f)), f.el = u.el), f.type === Cr && !f.el && (f.el = u.el);
    }
}
function A0(t) {
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
function Xd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Xd(e);
}
function Bu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Zd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Zd(e.subTree) : null;
}
const Jd = (t) => t.__isSuspense;
function I0(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : Fm(t);
}
const ze = /* @__PURE__ */ Symbol.for("v-fgt"), _s = /* @__PURE__ */ Symbol.for("v-txt"), Cr = /* @__PURE__ */ Symbol.for("v-cmt"), Ea = /* @__PURE__ */ Symbol.for("v-stc"), No = [];
let hn = null;
function xe(t = !1) {
  No.push(hn = t ? null : []);
}
function E0() {
  No.pop(), hn = No[No.length - 1] || null;
}
let Do = 1;
function Gu(t, e = !1) {
  Do += t, t < 0 && hn && e && (hn.hasOnce = !0);
}
function Qd(t) {
  return t.dynamicChildren = Do > 0 ? hn || Ai : null, E0(), Do > 0 && hn && hn.push(t), t;
}
function $e(t, e, n, r, o, c) {
  return Qd(
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
  return Qd(
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
function th(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function so(t, e) {
  return t.type === e.type && t.key === e.key;
}
const eh = ({ key: t }) => t ?? null, Ta = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ce(t) || /* @__PURE__ */ Ue(t) || jt(t) ? { i: kn, r: t, k: e, f: !!n } : t : null);
function _e(t, e = null, n = null, r = 0, o = null, c = t === ze ? 0 : 1, u = !1, f = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && eh(e),
    ref: e && Ta(e),
    scopeId: Pd,
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
    ctx: kn
  };
  return f ? (dl(m, n), c & 128 && t.normalize(m)) : n && (m.shapeFlag |= Ce(n) ? 8 : 16), Do > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && hn.push(m), m;
}
const tn = T0;
function T0(t, e = null, n = null, r = 0, o = null, c = !1) {
  if ((!t || t === Rd) && (t = Cr), th(t)) {
    const f = $i(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && dl(f, n), Do > 0 && !c && hn && (f.shapeFlag & 6 ? hn[hn.indexOf(t)] = f : hn.push(f)), f.patchFlag = -2, f;
  }
  if (G0(t) && (t = t.__vccOpts), e) {
    e = L0(e);
    let { class: f, style: m } = e;
    f && !Ce(f) && (e.class = gs(f)), se(m) && (/* @__PURE__ */ al(m) && !Ft(m) && (m = Be({}, m)), e.style = ps(m));
  }
  const u = Ce(t) ? 1 : Jd(t) ? 128 : Bm(t) ? 64 : se(t) ? 4 : jt(t) ? 2 : 0;
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
function L0(t) {
  return t ? /* @__PURE__ */ al(t) || Ud(t) ? Be({}, t) : t : null;
}
function $i(t, e, n = !1, r = !1) {
  const { props: o, ref: c, patchFlag: u, children: f, transition: m } = t, y = e ? nh(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && eh(y),
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
  return m && r && ll(
    p,
    m.clone(p)
  ), p;
}
function D0(t = " ", e = 0) {
  return tn(_s, null, t, e);
}
function R0(t, e) {
  const n = tn(Ea, null, t);
  return n.staticCount = e, n;
}
function La(t = "", e = !1) {
  return e ? (xe(), zi(Cr, null, t)) : tn(Cr, null, t);
}
function Bn(t) {
  return t == null || typeof t == "boolean" ? tn(Cr) : Ft(t) ? tn(
    ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : th(t) ? ar(t) : tn(_s, null, String(t));
}
function ar(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : $i(t);
}
function dl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), dl(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !Ud(e) ? e._ctx = kn : o === 3 && kn && (kn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else jt(e) ? (e = { default: e, _ctx: kn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [D0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function nh(...t) {
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
function $n(t, e, n, r = null) {
  Xn(t, e, 7, [
    n,
    r
  ]);
}
const O0 = $d();
let F0 = 0;
function $0(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || O0, c = {
    uid: F0++,
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
    scope: new om(
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
    propsOptions: Gd(r, o),
    emitsOptions: Hd(r, o),
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = p0.bind(null, c), t.ce && t.ce(c), c;
}
let je = null;
const H0 = () => je || kn;
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
const Ho = (t) => {
  const e = je;
  return Wa(t), t.scope.on(), () => {
    t.scope.off(), Wa(e);
  };
}, Ku = () => {
  je && je.scope.off(), Wa(null);
};
function rh(t) {
  return t.vnode.shapeFlag & 4;
}
let Ro = !1;
function V0(t, e = !1, n = !1) {
  e && Dc(e);
  const { props: r, children: o } = t.vnode, c = rh(t);
  _0(t, r, c, e), N0(t, o, n || e);
  const u = c ? z0(t, e) : void 0;
  return e && Dc(!1), u;
}
function z0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, o0);
  const { setup: r } = n;
  if (r) {
    cr();
    const o = t.setupContext = r.length > 1 ? U0(t) : null, c = Ho(t), u = $o(
      r,
      t,
      0,
      [
        t.props,
        o
      ]
    ), f = Jf(u);
    if (lr(), c(), (f || t.sp) && !xo(t) && Ad(t), f) {
      if (u.then(Ku, Ku), e)
        return u.then((m) => {
          Wu(t, m);
        }).catch((m) => {
          ys(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Wu(t, u);
  } else
    ih(t);
}
function Wu(t, e, n) {
  jt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : se(e) && (t.setupState = _d(e)), ih(t);
}
function ih(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || qn);
  {
    const o = Ho(t);
    cr();
    try {
      a0(t);
    } finally {
      lr(), o();
    }
  }
}
const j0 = {
  get(t, e) {
    return Ve(t, "get", ""), t[e];
  }
};
function U0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, j0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function hl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(_d(Pm(t.exposed)), {
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
function B0(t, e = !0) {
  return jt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function G0(t) {
  return jt(t) && "__vccOpts" in t;
}
const Di = (t, e) => /* @__PURE__ */ Tm(t, e, Ro), K0 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rc;
const qu = typeof window < "u" && window.trustedTypes;
if (qu)
  try {
    Rc = /* @__PURE__ */ qu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const oh = Rc ? (t) => Rc.createHTML(t) : (t) => t, W0 = "http://www.w3.org/2000/svg", q0 = "http://www.w3.org/1998/Math/MathML", or = typeof document < "u" ? document : null, Yu = or && /* @__PURE__ */ or.createElement("template"), Y0 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e === "svg" ? or.createElementNS(W0, t) : e === "mathml" ? or.createElementNS(q0, t) : n ? or.createElement(t, { is: n }) : or.createElement(t);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => or.createTextNode(t),
  createComment: (t) => or.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => or.querySelector(t),
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
      Yu.innerHTML = oh(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = Yu.content;
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
}, X0 = /* @__PURE__ */ Symbol("_vtc");
function Z0(t, e, n) {
  const r = t[X0];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Xu = /* @__PURE__ */ Symbol("_vod"), J0 = /* @__PURE__ */ Symbol("_vsh"), Q0 = /* @__PURE__ */ Symbol(""), t1 = /(?:^|;)\s*display\s*:/;
function e1(t, e, n) {
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
      const u = r[Q0];
      u && (n += ";" + u), r.cssText = n, c = t1.test(n);
    }
  } else e && t.removeAttribute("style");
  Xu in t && (t[Xu] = c ? r.display : "", t[J0] && (r.display = "none"));
}
const Zu = /\s*!important$/;
function Da(t, e, n) {
  if (Ft(n))
    n.forEach((r) => Da(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = n1(t, e);
    Zu.test(n) ? t.setProperty(
      ti(r),
      n.replace(Zu, ""),
      "important"
    ) : t[r] = n;
  }
}
const Ju = ["Webkit", "Moz", "ms"], fc = {};
function n1(t, e) {
  const n = fc[e];
  if (n)
    return n;
  let r = en(e);
  if (r !== "filter" && r in t)
    return fc[e] = r;
  r = ds(r);
  for (let o = 0; o < Ju.length; o++) {
    const c = Ju[o] + r;
    if (c in t)
      return fc[e] = c;
  }
  return e;
}
const Qu = "http://www.w3.org/1999/xlink";
function tf(t, e, n, r, o, c = rm(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Qu, e.slice(6, e.length)) : t.setAttributeNS(Qu, e, n) : n == null || c && !nd(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : Yn(n) ? String(n) : n
  );
}
function ef(t, e, n, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? oh(n) : n);
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
    f === "boolean" ? n = nd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function r1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function i1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const nf = /* @__PURE__ */ Symbol("_vei");
function o1(t, e, n, r, o = null) {
  const c = t[nf] || (t[nf] = {}), u = c[e];
  if (r && u)
    u.value = r;
  else {
    const [f, m] = a1(e);
    if (r) {
      const y = c[e] = l1(
        r,
        o
      );
      r1(t, f, y, m);
    } else u && (i1(t, f, u, m), c[e] = void 0);
  }
}
const rf = /(?:Once|Passive|Capture)$/;
function a1(t) {
  let e;
  if (rf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(rf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ti(t.slice(2)), e];
}
let dc = 0;
const s1 = /* @__PURE__ */ Promise.resolve(), c1 = () => dc || (s1.then(() => dc = 0), dc = Date.now());
function l1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Xn(
      u1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = c1(), n;
}
function u1(t, e) {
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
const of = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, f1 = (t, e, n, r, o, c) => {
  const u = o === "svg";
  e === "class" ? Z0(t, r, u) : e === "style" ? e1(t, n, r) : ls(e) ? us(e) || o1(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : d1(t, e, r, u)) ? (ef(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && tf(t, e, r, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (h1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ce(r))) ? ef(t, en(e), r, c, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), tf(t, e, r, u));
};
function d1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && of(e) && jt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return of(e) && Ce(n) ? !1 : e in t;
}
function h1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = en(e);
  return Array.isArray(n) ? n.some((o) => en(o) === r) : Object.keys(n).some((o) => en(o) === r);
}
const p1 = ["ctrl", "shift", "alt", "meta"], g1 = {
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
  exact: (t, e) => p1.some((n) => t[`${n}Key`] && !e.includes(n))
}, m1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const f = g1[e[u]];
      if (f && f(o, e)) return;
    }
    return t(o, ...c);
  }));
}, y1 = /* @__PURE__ */ Be({ patchProp: f1 }, Y0);
let af;
function b1() {
  return af || (af = P0(y1));
}
const v1 = ((...t) => {
  const e = b1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const o = w1(r);
    if (!o) return;
    const c = e._component;
    !jt(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, _1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function _1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function w1(t) {
  return Ce(t) ? document.querySelector(t) : t;
}
const Te = Math.PI / 180, ah = Math.PI * 2, x1 = 2048;
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
function sf(t, e) {
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
function S1(t, e) {
  const n = Number(t || 0) * Te, r = Number(e || 0) * Te, o = Math.cos(r);
  return Ar(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Oa(t, e, n = 0) {
  const r = S1(t, e);
  let o = Ar(0, 1, 0);
  Math.abs(Ra(r, o)) > 0.999 && (o = Ar(0, 0, 1));
  let c = go(sf(o, r)), u = go(sf(r, c));
  const f = Number(n || 0) * Te, m = Math.cos(f), y = Math.sin(f), p = qa(Mi(c, m), Mi(u, y)), w = qa(Mi(c, -y), Mi(u, m));
  return c = go(p), u = go(w), { fwd: r, right: c, up: u };
}
function N1(t, e) {
  const n = (Number(t || 0) - 0.5) * ah, r = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(r);
  return Ar(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function cf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, x1), f = Math.min(1, u / Math.max(r, o));
  return {
    sourceWidth: r,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(o * f))
  };
}
function lf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}
function uf(t, e, n) {
  const r = lf(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = lf(t, t.FRAGMENT_SHADER, n);
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
const ff = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, M1 = `#version 300 es
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
}`, P1 = `#version 300 es
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
function k1(t) {
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
function C1() {
  const t = document.createElement("canvas");
  let e = null, n = null, r = null, o = null, c = null, u = null, f = null, m = null, y = null, p = null, w = !1, M = cf(1, 1, 1), k = null, A = null, C = null, $ = null;
  const R = /* @__PURE__ */ new Map();
  let D = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function H(z = null, Pt = null) {
    const St = e.createTexture();
    return e.bindTexture(e.TEXTURE_2D, St), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, z ?? e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, Pt ?? e.CLAMP_TO_EDGE), St;
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
      }), e ? (n = uf(e, ff, M1), r = uf(e, ff, P1), k = {
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
      ]), e.STATIC_DRAW), c = H(e.REPEAT, e.CLAMP_TO_EDGE), u = H(e.REPEAT, e.CLAMP_TO_EDGE), f = H(e.REPEAT, e.CLAMP_TO_EDGE), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), w = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function W() {
    var z;
    if (e) {
      try {
        o && e.deleteBuffer(o), c && e.deleteTexture(c), u && e.deleteTexture(u), f && e.deleteTexture(f), R.forEach((Pt) => {
          mt(Pt);
        }), n && e.deleteProgram(n), r && e.deleteProgram(r), (z = e.getExtension("WEBGL_lose_context")) == null || z.loseContext();
      } catch {
      }
      e = null, n = null, r = null, o = null, c = null, u = null, f = null, R.clear(), m = null, y = null, p = null, D = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, C = null, $ = null, w = !1;
    }
  }
  function Q(z, Pt, St = 1) {
    M = cf(z, Pt, St), (t.width !== M.width || t.height !== M.height) && (t.width = M.width, t.height = M.height);
  }
  function at(z, Pt, St = [], Dt = { width: 0, height: 0 }, zt = !1) {
    if (!e || !z || !Pt) return !1;
    const $t = Math.max(1, Number(Pt.width || Pt.videoWidth || Pt.naturalWidth || 0)), Gt = Math.max(1, Number(Pt.height || Pt.videoHeight || Pt.naturalHeight || 0)), I = Array.isArray(St) ? St.filter((L) => L && L.w > 0 && L.h > 0) : [];
    if (!I.length) return !1;
    if (e.bindTexture(e.TEXTURE_2D, z), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, zt ? 1 : 0), Dt.width !== $t || Dt.height !== Gt)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), Dt.width = $t, Dt.height = Gt, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (C || (C = document.createElement("canvas"), $ = C.getContext("2d")), !$)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const L of I) {
      const V = Math.max(0, Math.floor(Number(L.x || 0))), q = Math.max(0, Math.floor(Number(L.y || 0))), K = Math.min($t - V, Math.ceil(Number(L.w || 0))), X = Math.min(Gt - q, Math.ceil(Number(L.h || 0)));
      if (!(K <= 0 || X <= 0)) {
        if (C.width !== K || C.height !== X) {
          if (C.width = K, C.height = X, $ = C.getContext("2d"), !$)
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, K, X);
        $.drawImage(Pt, V, q, K, X, 0, 0, K, X), e.texSubImage2D(e.TEXTURE_2D, 0, V, q, e.RGBA, e.UNSIGNED_BYTE, C);
      }
    }
    return e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function et(z, Pt, St, Dt, zt = null, $t = !1) {
    if (!S()) return !1;
    if (!St)
      return z === "background" ? m = null : z === "paint" ? y = null : p = null, !1;
    const Gt = String(Dt ?? ""), I = z === "background" ? m : z === "paint" ? y : p, L = D[z], V = Math.max(1, Number(St.width || St.videoWidth || St.naturalWidth || 0)), q = Math.max(1, Number(St.height || St.videoHeight || St.naturalHeight || 0)), K = L.width !== V || L.height !== q;
    return I === Gt && !K && !(Array.isArray(zt) && zt.length) || (e.bindTexture(e.TEXTURE_2D, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $t ? 1 : 0), (Array.isArray(zt) && zt.length ? at(Pt, St, zt, L, $t) : !1) || (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, St), L.width = V, L.height = q), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), z === "background" ? m = Gt : z === "paint" ? y = Gt : p = Gt), !0;
  }
  function Y(z, Pt) {
    return et("background", c, z, Pt, null, !0);
  }
  function O(z, Pt, St = null) {
    return et("paint", u, z, Pt, St, !0);
  }
  function rt(z, Pt, St = null) {
    return et("mask", f, z, Pt, St, !0);
  }
  function mt(z) {
    z != null && z.texture && e && e.deleteTexture(z.texture);
  }
  function lt(z) {
    if (!e || !(z != null && z.assetId) || !(z != null && z.source)) return null;
    const Pt = String(z.assetId), St = String(z.revision ?? ""), Dt = z.source, zt = Math.max(1, Number(Dt.width || Dt.naturalWidth || Dt.videoWidth || 0)), $t = Math.max(1, Number(Dt.height || Dt.naturalHeight || Dt.videoHeight || 0));
    if (zt <= 0 || $t <= 0) return null;
    let Gt = R.get(Pt);
    return Gt || (Gt = {
      texture: H(e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, R.set(Pt, Gt)), (Gt.revision !== St || Gt.width !== zt || Gt.height !== $t) && (e.bindTexture(e.TEXTURE_2D, Gt.texture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Dt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Gt.revision = St, Gt.width = zt, Gt.height = $t), Gt.texture;
  }
  function Z(z = []) {
    if (!S()) return !1;
    const Pt = /* @__PURE__ */ new Set();
    return z.forEach((St) => {
      !(St != null && St.assetId) || !(St != null && St.source) || (Pt.add(String(St.assetId)), lt(St));
    }), R.forEach((St, Dt) => {
      Pt.has(Dt) || (mt(St), R.delete(Dt));
    }), !0;
  }
  function U() {
    return S() ? (e.viewport(0, 0, t.width, t.height), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), !0) : !1;
  }
  function st(z) {
    e.useProgram(z), e.bindBuffer(e.ARRAY_BUFFER, o), e.enableVertexAttribArray(0), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0);
  }
  function it(z, Pt = {}) {
    if (!m) return null;
    e.disable(e.BLEND), st(n), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.uniform1i(k.background, 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, u), e.uniform1i(k.paint, 1), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, f), e.uniform1i(k.mask, 2), e.uniform2f(k.viewport, Math.max(1, M.width), Math.max(1, M.height)), e.uniform1i(k.mode, (z == null ? void 0 : z.mode) === "unwrap" ? 0 : (z == null ? void 0 : z.mode) === "cutout" ? 2 : 1);
    const St = fa(z, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return e.uniform1f(k.yaw, Number(St.yawDeg || 0) * Te), e.uniform1f(k.pitch, Number(St.pitchDeg || 0) * Te), e.uniform1f(k.roll, Number(St.rollDeg || 0) * Te), e.uniform1f(k.hFov, ge(Number(St.hFovDeg || 90), 0.1, 179) * Te), e.uniform1f(k.vFov, ge(Number(St.vFovDeg || 60), 0.1, 179) * Te), e.uniform1f(k.opacity, ge(Number(Pt.backgroundOpacity ?? 1), 0, 1)), e.uniform1f(k.paintOpacity, ge(Number(Pt.paintOpacity ?? 1), 0, 1)), e.uniform1f(k.maskOpacity, ge(Number(Pt.maskOpacity ?? 0.55), 0, 1)), e.uniform1i(k.hasPaint, y != null ? 1 : 0), e.uniform1i(k.hasMask, p != null ? 1 : 0), e.uniform1i(k.showMaskTint, Pt.showMaskTint === !1 ? 0 : 1), e.uniform3f(k.maskTint, 34 / 255, 197 / 255, 94 / 255), e.drawArrays(e.TRIANGLES, 0, 6), t;
  }
  function ct(z, Pt, St) {
    var L;
    if (!((L = z == null ? void 0 : z.stickers) != null && L.length) || !(Pt != null && Pt.length)) return;
    const Dt = (St == null ? void 0 : St.mode) === "unwrap" ? 0 : (St == null ? void 0 : St.mode) === "cutout" ? 2 : 1, zt = fa(St, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, $t = Oa(zt.yawDeg, zt.pitchDeg, zt.rollDeg), Gt = /* @__PURE__ */ new Map();
    Pt.forEach((V) => {
      const q = lt(V);
      q && Gt.set(String(V.assetId || ""), q);
    }), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), st(r), e.uniform1i(A.texture, 0), e.uniform1i(A.mode, Dt), e.uniform3f(A.viewRight, $t.right.x, $t.right.y, $t.right.z), e.uniform3f(A.viewUp, $t.up.x, $t.up.y, $t.up.z), e.uniform3f(A.viewFwd, $t.fwd.x, $t.fwd.y, $t.fwd.z), e.uniform1f(A.viewHfov, ge(Number(zt.hFovDeg || 90), 0.1, 179) * Te), e.uniform1f(A.viewVfov, ge(Number(zt.vFovDeg || 60), 0.1, 179) * Te), [...z.stickers].sort((V, q) => Number((V == null ? void 0 : V.zIndex) || 0) - Number((q == null ? void 0 : q.zIndex) || 0)).forEach((V) => {
      const q = Gt.get(String((V == null ? void 0 : V.assetId) || ""));
      if (!q) return;
      const K = k1(V), X = K.crop;
      e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, q), e.uniform3f(A.stickerRight, K.right.x, K.right.y, K.right.z), e.uniform3f(A.stickerUp, K.up.x, K.up.y, K.up.z), e.uniform3f(A.stickerFwd, K.fwd.x, K.fwd.y, K.fwd.z), e.uniform1f(A.stickerTanX, Math.max(1e-6, K.tanX)), e.uniform1f(A.stickerTanY, Math.max(1e-6, K.tanY)), e.uniform4f(
        A.crop,
        ge(Number(X.x0 ?? 0), 0, 1),
        ge(Number(X.y0 ?? 0), 0, 1),
        ge(Number(X.x1 ?? 1), 0, 1),
        ge(Number(X.y1 ?? 1), 0, 1)
      ), e.uniform1f(A.opacity, K.opacity), e.drawArrays(e.TRIANGLES, 0, 6);
    }), e.disable(e.BLEND);
  }
  function wt(z) {
    return !U() || !m ? null : (it({
      mode: "panorama",
      yawDeg: (z == null ? void 0 : z.yawDeg) || 0,
      pitchDeg: (z == null ? void 0 : z.pitchDeg) || 0,
      fovDeg: (z == null ? void 0 : z.fovDeg) || 100
    }, z), t);
  }
  function Rt(z) {
    return !U() || !m ? null : (it({ mode: "unwrap" }, z), t);
  }
  function J(z) {
    return !U() || !m ? null : (it({
      mode: "cutout",
      yawDeg: (z == null ? void 0 : z.yawDeg) || 0,
      pitchDeg: (z == null ? void 0 : z.pitchDeg) || 0,
      rollDeg: (z == null ? void 0 : z.rollDeg) || 0,
      hFovDeg: (z == null ? void 0 : z.hFovDeg) || 90,
      vFovDeg: (z == null ? void 0 : z.vFovDeg) || 60
    }, z), t);
  }
  function Mt(z = {}) {
    return !S() || (Q(z.width, z.height, z.dpr || 1), !U()) ? null : (z.backgroundSource && (Y(z.backgroundSource, z.backgroundRevision ?? ""), it(z.view, z)), Z(z.textures || []), ct(
      z.scene || { stickers: [] },
      z.textures || [],
      z.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function Bt(z, Pt, St) {
    const Dt = Math.max(1, Number((z == null ? void 0 : z.viewportWidth) || M.sourceWidth || M.width || 1)), zt = Math.max(1, Number((z == null ? void 0 : z.viewportHeight) || M.sourceHeight || M.height || 1)), $t = Number(Pt), Gt = Number(St);
    if (!Number.isFinite($t) || !Number.isFinite(Gt)) return null;
    if ((z == null ? void 0 : z.mode) === "unwrap")
      return { u: ($t / Dt % 1 + 1) % 1, v: ge(Gt / zt, 0, 1) };
    const I = fa(z, Dt, zt);
    if (!I) return null;
    const L = Oa(I.yawDeg, I.pitchDeg, I.rollDeg), V = ($t - Dt * 0.5) / (Dt * 0.5) * Math.tan(ge(I.hFovDeg, 1, 179) * Te * 0.5), q = (zt * 0.5 - Gt) / (zt * 0.5) * Math.tan(ge(I.vFovDeg, 0.1, 179) * Te * 0.5), K = go(qa(qa(Mi(L.right, V), Mi(L.up, q)), L.fwd));
    return {
      u: (Math.atan2(K.x, K.z) / ah + 0.5 + 1) % 1,
      v: ge(0.5 - Math.asin(ge(K.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ye(z, Pt, St) {
    const Dt = Math.max(1, Number((z == null ? void 0 : z.viewportWidth) || M.sourceWidth || M.width || 1)), zt = Math.max(1, Number((z == null ? void 0 : z.viewportHeight) || M.sourceHeight || M.height || 1));
    if ((z == null ? void 0 : z.mode) === "unwrap")
      return {
        x: (Number(Pt || 0) % 1 + 1) % 1 * Dt,
        y: ge(Number(St || 0), 0, 1) * zt,
        visible: !0
      };
    const $t = fa(z, Dt, zt);
    if (!$t)
      return { x: Dt * 0.5, y: zt * 0.5, visible: !1 };
    const Gt = Oa($t.yawDeg, $t.pitchDeg, $t.rollDeg), I = N1(Pt, St), L = Ra(I, Gt.right), V = Ra(I, Gt.up), q = Ra(I, Gt.fwd);
    if (q <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const K = Dt * 0.5 + L / q * (Dt * 0.5 / Math.tan(ge($t.hFovDeg, 1, 179) * Te * 0.5)), X = zt * 0.5 - V / q * (zt * 0.5 / Math.tan(ge($t.vFovDeg, 0.1, 179) * Te * 0.5));
    return { x: K, y: X, visible: K >= 0 && K <= Dt && X >= 0 && X <= zt };
  }
  return {
    init: S,
    dispose: W,
    setViewport: Q,
    setBackgroundErp: Y,
    setPaintErp: O,
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
const df = "__shared_renderer";
function A1(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function I1(t, e) {
  var c;
  const n = A1(t);
  if (!n) return null;
  let r = n.get(df);
  if (!r) {
    const u = C1();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    r = { renderer: u }, n.set(df, r);
  }
  let o = n.get(e);
  return o || (o = { renderer: r.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function E1(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function T1(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function L1(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function ji(t = {}) {
  const e = t.owner || null, n = t.ctx || null, r = L1(t);
  if (!e || !n || !(r != null && r.w) || !(r != null && r.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = I1(e, o), u = t.backgroundSource || t.img || null, f = t.scene || { stickers: [], selectedId: null, hoveredId: null }, m = Array.isArray(t.textures) ? t.textures : [], y = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const p = c.renderer, w = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), M = t.backgroundRevision != null, k = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, A = M ? String(t.backgroundRevision) : k ? "" : E1(u), C = Number(t.backgroundOpacity ?? 1), R = f.stickers.length === 0 && m.length === 0 && (!!M || !k), D = `${Math.round(r.w)}x${Math.round(r.h)}|${w}|${T1(y)}|${A}|${C.toFixed(3)}`;
  if (R && c.lastRenderKey === D && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, r.x, r.y, r.w, r.h), !0;
  const H = p.renderScene({
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
  if (!H) return !1;
  if (R) {
    const S = H.width, W = H.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== S || c.cachedCanvas.height !== W) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = S, c.cachedCanvas.height = W);
    const Q = c.cachedCanvas.getContext("2d");
    Q.clearRect(0, 0, S, W), Q.drawImage(H, 0, 0), c.lastRenderKey = D;
  } else
    c.lastRenderKey = null;
  return n.drawImage(H, r.x, r.y, r.w, r.h), !0;
}
function D1(t = {}) {
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
function pl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function jn(t, e, n) {
  if (!t) return xi(e, n);
  const r = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== o) && (t.canvas.width = r, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function pe(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let hc = null, pc = null, hf = null, pf = null, oe = null, co = null, Xe = null, Sr = null;
function R1() {
  if (pc) return pc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), pc = n, n;
}
function mi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  hc = jn(hc, n, r);
  const o = hc;
  pe(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", pf !== o.ctx && (hf = o.ctx.createPattern(R1(), "repeat"), pf = o.ctx), o.ctx.fillStyle = hf, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function O1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function F1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function $1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function H1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const we = /* @__PURE__ */ new Map(), gl = 128;
function V1(t, e, n, r, o, c) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), m = `${u}:${f.toFixed(2)}:${n}:${r}:${o}:${c.toFixed(3)}`;
  if (we.has(m)) {
    const D = we.get(m);
    return we.delete(m), we.set(m, D), D;
  }
  we.size >= gl && we.delete(we.keys().next().value);
  const y = u * 2 + 2, p = u + 1, w = pl(y, y), M = w.getContext("2d"), k = f * u, A = u + 1, C = `rgba(${n},${r},${o},${c})`, $ = `rgba(${n},${r},${o},0)`, R = M.createRadialGradient(p, p, k, p, p, A);
  return R.addColorStop(0, C), R.addColorStop(1, $), M.fillStyle = R, M.fillRect(0, 0, y, y), we.set(m, w), w;
}
function z1(t, e, n, r, o, c, u) {
  const { r: f, g: m, b: y, a: p } = r, w = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), k = Math.max(0, o), A = Math.max(0, Math.min(0.99, c)), C = Math.max(0, Math.min(1, u ?? 0)), $ = `chisel:${w}:${M}:${n.toFixed(2)}:${f}:${m}:${y}:${p.toFixed(3)}:${k.toFixed(2)}:${A.toFixed(2)}:${C.toFixed(2)}`;
  if (we.has($)) {
    const et = we.get($);
    return we.delete($), we.set($, et), et;
  }
  we.size >= gl && we.delete(we.keys().next().value);
  const R = pl(w, M), D = R.getContext("2d"), H = D.createImageData(w, M), S = H.data, W = Math.max(0, t - e), Q = Math.max(0, Math.min(1, n)), at = 1 + k;
  for (let et = 0; et < M; et++)
    for (let Y = 0; Y < w; Y++) {
      const O = Y + 0.5 - t, rt = et + 0.5 - e, mt = Math.max(Math.abs(O) - W, 0), Z = Math.hypot(mt, rt) / e;
      if (Z >= 1) continue;
      const U = Z <= Q ? 1 : Math.max(0, (1 - Z) / Math.max(1e-4, 1 - Q)), st = 1 - Z, it = 1 + k * (1 - st) * (1 - st), ct = 1 - A * st * st, wt = it * ct / at;
      let Rt = 1;
      if (C > 0) {
        const Bt = Math.floor((rt + e) / 1.5), ye = Math.floor((O + t) / 8), z = Wr(Ri(Bt * 41 + 500, ye * 19 + 300));
        Rt = 1 - C * 0.42 * z;
      }
      const J = Math.round(255 * Math.min(1, p * U * wt * Rt));
      if (J <= 0) continue;
      const Mt = (et * w + Y) * 4;
      S[Mt] = f, S[Mt + 1] = m, S[Mt + 2] = y, S[Mt + 3] = J;
    }
  return D.putImageData(H, 0, 0), we.set($, R), R;
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
function j1(t, e, n, r, o, c, u) {
  const f = t + 0.5 - n, m = e + 0.5 - r, y = Math.max(0, n - r), p = Math.max(Math.abs(f) - y, 0), w = Math.hypot(p, m) / r;
  if (w >= 1) return 0;
  const M = Wr(Ri(t * 17 + 3, e * 13 + 7)), k = w + c * 0.22 * (M - 0.5);
  if (k >= 1) return 0;
  const A = k <= o ? 1 : Math.max(0, (1 - k) / Math.max(1e-4, 1 - o)), C = U1(t, e, f, m, n, r), $ = c * 0.55;
  if (C < $) return 0;
  const D = 0.45 + 0.55 * ((C - $) / Math.max(1e-4, 1 - $));
  return Math.round(255 * Math.min(1, u * A * D));
}
function U1(t, e, n, r, o, c) {
  const u = Math.floor((n + o) / 3), f = Math.floor((r + c) / 2), m = Wr(Ri(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + o) / 1.5), p = Math.floor((r + c) / 1.5), w = Wr(Ri(y * 23 + 800, p * 29 + 500)), M = Wr(Ri(t * 3 + 100, e * 5 + 200));
  return m * 0.55 + w * 0.3 + M * 0.15;
}
function B1(t, e, n, r, o) {
  const { r: c, g: u, b: f, a: m } = r, y = Math.max(2, Math.ceil(t) * 2), p = Math.max(2, Math.ceil(e) * 2), w = Math.max(0, Math.min(1, o)), M = `crayon:${y}:${p}:${n.toFixed(2)}:${c}:${u}:${f}:${m.toFixed(3)}:${w.toFixed(2)}`;
  if (we.has(M)) {
    const D = we.get(M);
    return we.delete(M), we.set(M, D), D;
  }
  we.size >= gl && we.delete(we.keys().next().value);
  const k = pl(y, p), A = k.getContext("2d"), C = A.createImageData(y, p), $ = C.data, R = Math.max(0, Math.min(1, n));
  for (let D = 0; D < p; D++)
    for (let H = 0; H < y; H++) {
      const S = j1(H, D, t, e, R, w, m);
      if (S <= 0) continue;
      const W = (D * y + H) * 4;
      $[W] = c, $[W + 1] = u, $[W + 2] = f, $[W + 3] = S;
    }
  return A.putImageData(C, 0, 0), we.set(M, k), k;
}
function sh(t, e, n) {
  var k;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), o = $1(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = G1(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), m = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), y = H1(e, o), p = e == null ? void 0 : e.scatter, w = p ? { radius: Number(p.radius ?? 1.5), count: Math.max(1, Math.round(p.count ?? 6)) } : null;
  let M;
  if (r === "chisel") {
    const A = o * f, C = o, $ = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), D = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    M = z1(A, C, c, u, $, R, D);
  } else if (r === "crayon") {
    const A = o * f, C = o, $ = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    M = B1(A, C, c, u, $);
  } else
    M = V1(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: M, radiusPx: o, spacingPx: y, desc: n, aspect: f, angle: m, stampKind: r, scatter: w };
}
function G1(t) {
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
function K1(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function gf(t, e, n, r, o) {
  const c = t.angle, u = t.desc.width;
  function f(y, p) {
    c === 0 ? t.ctx.drawImage(t.stampTex, y - o, p - r, o * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, p), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -r, o * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const m = c === 0 ? o : o * Math.abs(Math.cos(c)) + r * Math.abs(Math.sin(c));
  e - m < 0 && f(e + u, n), e + m > u && f(e - u, n);
}
function ml(t, e, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: m, count: y } = t.scatter, p = m * t.radiusPx * o, w = Ri(e, n);
    for (let M = 0; M < y; M++) {
      const k = Wr(w + M * 2) * Math.PI * 2, A = Math.sqrt(Wr(w + M * 2 + 1)) * p, C = e + Math.cos(k) * A, $ = n + Math.sin(k) * A, R = Math.max(0.5, t.radiusPx * o * 0.48), D = (0.5 - $ / Math.max(1, t.desc.height)) * Math.PI, H = R * t.aspect / Math.max(0.05, Math.cos(D));
      gf(t, C, $, R, H);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = c * t.aspect / Math.max(0.05, Math.cos(u));
  gf(t, e, n, c, f);
}
function mf(t, e, n) {
  const r = F1(e);
  if (!t || r.length === 0) return;
  const o = n.width, c = n.height, u = sh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let k = Number(r[M].u || 0) * o;
    const A = Number(r[M].v || 0) * c;
    M > 0 && Math.abs(k - f[M - 1].x) > o * 0.5 && (k += k < f[M - 1].x ? o : -o), f.push({ x: k, y: A });
  }
  if (ml(u, f[0].x, f[0].y, 1), f.length === 1) {
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
  const o = n.width, c = n.height, u = K1(e), f = [];
  let m = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const k = O1(r[M]);
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
  c >= 0.999 ? mf(t, e, n) : (co = jn(co, n.width, n.height), pe(co), mf(co.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(co.canvas, 0, 0), t.restore());
}
function Nr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Oo(t, e, n, r, o, c) {
  const u = r - e, f = o - n, m = Math.hypot(u, f);
  if (m < 1e-9) return c;
  let y = t.spacingPx - c;
  for (; y <= m; ) {
    const p = y / m;
    ml(t, e + u * p, n + f * p, 1), y += t.spacingPx;
  }
  return m - y + t.spacingPx;
}
function Ya(t, e, n, r, o, c) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, m = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, p = 0, w = f, M = w + m, k = M + y, A = M - w, C = 16;
  let $ = c, R = n.x, D = n.y;
  for (let H = 1; H <= C; H++) {
    const S = w + A * H / C, W = ((w - S) * e.x + (S - p) * n.x) / (w - p), Q = ((w - S) * e.y + (S - p) * n.y) / (w - p), at = ((M - S) * n.x + (S - w) * r.x) / (M - w), et = ((M - S) * n.y + (S - w) * r.y) / (M - w), Y = ((k - S) * r.x + (S - M) * o.x) / (k - M), O = ((k - S) * r.y + (S - M) * o.y) / (k - M), rt = ((M - S) * W + (S - p) * at) / (M - p), mt = ((M - S) * Q + (S - p) * et) / (M - p), lt = ((k - S) * at + (S - w) * Y) / (k - w), Z = ((k - S) * et + (S - w) * O) / (k - w), U = ((M - S) * rt + (S - w) * lt) / (M - w), st = ((M - S) * mt + (S - w) * Z) / (M - w);
    $ = Oo(t, R, D, U, st, $), R = U, D = st;
  }
  return $;
}
function W1(t, e, n, r) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, f = n * c.height, m = t.activeStroke;
  let y = e * u;
  if (m && Math.abs(y - m.prev.x) > u * 0.5 && (y += y < m.prev.x ? u : -u), !m) {
    const k = sh(o, r, c), A = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), C = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), $ = String((r == null ? void 0 : r.toolKind) || "") === "eraser", R = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", ml(k, y, f, 1), t.activeStroke = {
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
      isEraser: $,
      layerKind: R,
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
  function M(O) {
    return {
      actionGroupId: O,
      descriptor: r,
      committedPaint: xi(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function k(O) {
    let rt = o.get(O);
    return rt || (rt = M(O), o.set(O, rt)), rt;
  }
  function A(O) {
    return p === "mask" ? u : y ? k(y) : f;
  }
  function C(O) {
    var ct;
    const rt = !w || w.length !== O.length || O.some((wt, Rt) => wt !== w[Rt]);
    let mt = u.displayDirty || f.displayDirty || rt;
    for (const wt of O) {
      const Rt = o.get(wt);
      if (Rt != null && Rt.displayDirty) {
        mt = !0;
        break;
      }
    }
    if (!mt) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const wt of O) {
      const Rt = o.get(wt);
      Rt && (Rt.displayDirty = !1);
    }
    w = [...O];
    const lt = m.ctx;
    pe(m);
    const Z = p === "paint" && ((ct = y ? o.get(y) : f) == null ? void 0 : ct.activeStroke) || null, U = !!(Z != null && Z.isEraser);
    for (const wt of O) {
      const Rt = o.get(wt);
      if (!Rt) continue;
      const Mt = y === Rt.actionGroupId && p === "paint" ? Rt.activeStroke : null;
      if (U)
        oe = jn(oe, e, n), pe(oe), oe.ctx.drawImage(Rt.committedPaint.canvas, 0, 0), Nr(oe.ctx, c.canvas), lt.drawImage(oe.canvas, 0, 0);
      else if (lt.drawImage(Rt.committedPaint.canvas, 0, 0), Mt) {
        const Bt = Rt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Mt.strokeOpacity ?? 1));
        lt.save(), lt.globalAlpha = Bt, lt.drawImage(c.canvas, 0, 0), lt.restore();
      }
    }
    const st = p === "mask", it = u.activeStroke;
    st && (it != null && it.isEraser) ? (oe = jn(oe, e, n), pe(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), Nr(oe.ctx, c.canvas), mi(lt, oe.canvas)) : (mi(lt, u.committedMask.canvas), st && it && mi(lt, c.canvas));
  }
  function $(O) {
    var mt, lt, Z, U, st;
    for (const it of o.values())
      pe(it.committedPaint), pe(it.currentStroke), it.activeStroke = null, it.displayDirty = !0;
    pe(u.committedMask), pe(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, w = null;
    const rt = [
      ...Array.isArray((lt = (mt = O == null ? void 0 : O.painting) == null ? void 0 : mt.paint) == null ? void 0 : lt.strokes) ? O.painting.paint.strokes : [],
      ...Array.isArray((U = (Z = O == null ? void 0 : O.painting) == null ? void 0 : Z.mask) == null ? void 0 : U.strokes) ? O.painting.mask.strokes : []
    ];
    for (const it of rt) {
      if (((st = it == null ? void 0 : it.targetSpace) == null ? void 0 : st.kind) !== "ERP_GLOBAL") continue;
      const ct = String((it == null ? void 0 : it.layerKind) || "paint"), Rt = String((it == null ? void 0 : it.toolKind) || "pen") === "eraser";
      if (ct === "mask") {
        const J = u.descriptor;
        Rt ? (oe = jn(oe, J.width, J.height), pe(oe), ha(oe.ctx, it, J), Nr(u.committedMask.ctx, oe.canvas)) : ha(u.committedMask.ctx, it, J);
        continue;
      }
      if (Rt) {
        oe = jn(oe, r.width, r.height), pe(oe), ha(oe.ctx, it, r);
        for (const J of o.values())
          Nr(J.committedPaint.ctx, oe.canvas), J.displayDirty = !0;
      } else {
        const J = String((it == null ? void 0 : it.actionGroupId) || "__default__"), Mt = k(J), Bt = Mt.descriptor;
        ha(Mt.committedPaint.ctx, it, Bt), Mt.displayDirty = !0;
      }
    }
    C([...o.keys()]);
  }
  function R(O, rt) {
    p = String((O == null ? void 0 : O.layerKind) || "");
    const mt = String((O == null ? void 0 : O.toolKind) || "") === "eraser";
    if (p === "mask")
      y = null, pe(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const lt = mt ? f : k(String((O == null ? void 0 : O.actionGroupId) || "__default__"));
      y = mt ? "" : String((O == null ? void 0 : O.actionGroupId) || "__default__"), pe(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    }
  }
  function D(O, rt) {
    const mt = String((O == null ? void 0 : O.layerKind) || "paint"), lt = String((O == null ? void 0 : O.toolKind) || "") === "eraser", Z = mt === "mask" ? u : lt ? f : k(String((O == null ? void 0 : O.actionGroupId) || y || "__default__")), U = Z.activeStroke, st = Z.descriptor;
    if (U && U.pointCount > 1) {
      const ct = Z.currentStroke.ctx;
      ct.globalCompositeOperation = "source-over";
      const wt = {
        ctx: ct,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: st,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter
      };
      U.pointCount === 2 ? Oo(wt, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : Ya(wt, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    Z.lassoPreviewActive && (pe(Z.currentStroke), Fa(Z.currentStroke.ctx, O, st), Z.lassoPreviewActive = !1);
    const it = mt === "mask" ? u.committedMask : Z.committedPaint;
    if (lt && mt === "paint")
      for (const ct of o.values())
        Nr(ct.committedPaint.ctx, Z.currentStroke.canvas), ct.displayDirty = !0;
    else if (lt)
      Nr(it.ctx, Z.currentStroke.canvas);
    else {
      const ct = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      it.ctx.save(), it.ctx.globalAlpha = ct, it.ctx.drawImage(Z.currentStroke.canvas, 0, 0), it.ctx.restore();
    }
    pe(Z.currentStroke), Z.activeStroke = null, Z.displayDirty = !0, y = null, p = "", C([...o.keys()]);
  }
  function H(O) {
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
  function S(O, rt) {
    var lt;
    if (p = String((O == null ? void 0 : O.layerKind) || ""), String(((lt = O == null ? void 0 : O.geometry) == null ? void 0 : lt.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        pe(u.currentStroke), Fa(u.currentStroke.ctx, O, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const Z = String((O == null ? void 0 : O.toolKind) || "") === "eraser", U = Z ? f : k(String((O == null ? void 0 : O.actionGroupId) || y || "__default__"));
        y = Z ? "" : String((O == null ? void 0 : O.actionGroupId) || y || "__default__"), pe(U.currentStroke), Fa(U.currentStroke.ctx, O, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      C([...o.keys()]);
    }
  }
  function W(O) {
    return C(O ?? [...o.keys()]), {
      displayPaint: m,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function Q(O) {
    return o.get(String(O)) ?? null;
  }
  function at() {
    return [...o.keys()];
  }
  function et(O) {
    var st;
    const rt = o.get(String(O));
    if (!rt) return null;
    const mt = p === "paint" && y === rt.actionGroupId, lt = p === "paint" && ((st = y ? o.get(y) : f) == null ? void 0 : st.activeStroke) || null;
    if (lt != null && lt.isEraser)
      return Xe = jn(Xe, e, n), pe(Xe), Xe.ctx.drawImage(rt.committedPaint.canvas, 0, 0), Nr(Xe.ctx, c.canvas), Xe.canvas;
    const Z = mt ? rt.activeStroke : null;
    if (!Z) return rt.committedPaint.canvas;
    Xe = jn(Xe, e, n), pe(Xe), Xe.ctx.drawImage(rt.committedPaint.canvas, 0, 0);
    const U = rt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Z.strokeOpacity ?? 1));
    return Xe.ctx.save(), Xe.ctx.globalAlpha = U, Xe.ctx.drawImage(c.canvas, 0, 0), Xe.ctx.restore(), Xe.canvas;
  }
  function Y() {
    return Sr = jn(Sr, e, n), pe(Sr), mi(Sr.ctx, u.committedMask.canvas), p === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (oe = jn(oe, e, n), pe(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), Nr(oe.ctx, c.canvas), pe(Sr), mi(Sr.ctx, oe.canvas)) : mi(Sr.ctx, c.canvas)), Sr.canvas;
  }
  return {
    rebuildCommitted: $,
    beginStroke: R,
    appendStrokePoint: W1,
    updateActiveStroke: S,
    commitActiveStroke: D,
    cancelActiveStroke: H,
    getErpTarget: W,
    ensureTarget: A,
    getGroupTarget: Q,
    getGroupDisplayCanvas: et,
    getMaskDisplayCanvas: Y,
    getAllGroupIds: at
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function $a(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Fe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function q1(t, e) {
  let n = Fe(e) - Fe(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const yf = 0.12, Y1 = 3, X1 = 35, Z1 = 140, gc = 100, J1 = 20, bf = 0.8;
function Q1(t) {
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
  function m($, R = null) {
    u && u($, R);
  }
  function y($, R, D = null, H = performance.now()) {
    return f.drag.active = !0, f.drag.lastX = Number($ || 0), f.drag.lastY = Number(R || 0), f.drag.lastTs = Number(H || performance.now()), f.drag.pointerId = D, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.lastTs = f.drag.lastTs, f.velHistory = [], m("drag", { phase: "start", x: f.drag.lastX, y: f.drag.lastY, pointerId: D }), !0;
  }
  function p($, R, D = "pano", H = performance.now()) {
    if (!f.drag.active) return !1;
    const S = Number(H || performance.now()), W = Number($), Q = Number(R), at = W - f.drag.lastX, et = Q - f.drag.lastY;
    f.drag.lastX = W, f.drag.lastY = Q, f.drag.lastTs = S;
    const Y = r() || { x: 1, y: 1 }, O = Number(Y.x || 1), rt = Number(Y.y || 1), mt = { ...e() };
    let lt = 0, Z = 0;
    if (D === "unwrap") {
      const st = o() || { w: 1, h: 1 }, it = Math.max(1, Number(st.w || 1)), ct = Math.max(1, Number(st.h || 1)), wt = at / it, Rt = et / ct;
      lt = -wt * 360 * O, Z = Rt * 180 * rt;
    } else
      lt = -at * yf * O, Z = et * yf * rt;
    mt.yaw = Fe(Number(mt.yaw || 0) + lt), mt.pitch = j(Number(mt.pitch || 0) + Z, -89.9, 89.9), n(mt), f.velHistory.push({ ts: S, yaw: mt.yaw, pitch: mt.pitch });
    let U = 0;
    for (; U < f.velHistory.length - 1 && f.velHistory[U].ts < S - 100; ) U++;
    return U > 0 && f.velHistory.splice(0, U), f.inertia.active = !1, f.inertia.lastTs = S, c(), m("drag", { phase: "move", dx: at, dy: et, dYaw: lt, dPitch: Z }), !0;
  }
  function w($ = performance.now()) {
    if (!f.drag.active) return !1;
    f.drag.active = !1;
    const R = Number($ || performance.now());
    f.drag.lastTs = R;
    const D = f.velHistory.filter((S) => R - S.ts <= 80);
    if (D.length >= 2) {
      const S = D[0], W = D.at(-1), Q = Math.max(1e-3, (W.ts - S.ts) / 1e3);
      let at = W.yaw - S.yaw;
      at > 180 && (at -= 360), at < -180 && (at += 360), f.inertia.vx = at / Q, f.inertia.vy = (W.pitch - S.pitch) / Q;
    } else
      f.inertia.vx = 0, f.inertia.vy = 0;
    f.velHistory = [];
    const H = Math.hypot(f.inertia.vx, f.inertia.vy);
    return f.inertia.active = H > J1, f.inertia.lastTs = R, m("drag", { phase: "end", speed: H, inertiaActive: f.inertia.active }), !0;
  }
  function M($ = performance.now()) {
    if (!f.inertia.active) return !1;
    const R = Number($ || performance.now()), D = Math.max(1e-3, (R - (f.inertia.lastTs || R)) / 1e3);
    f.inertia.lastTs = R;
    const H = { ...e() };
    H.yaw = Fe(Number(H.yaw || 0) + f.inertia.vx * D), H.pitch = j(Number(H.pitch || 0) + f.inertia.vy * D, -89.9, 89.9);
    const S = Math.exp(-5.5 * D);
    return f.inertia.vx *= S, f.inertia.vy *= S, Math.abs(f.inertia.vx) < bf && Math.abs(f.inertia.vy) < bf && (f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.active = !1), n(H), c(), f.inertia.active;
  }
  function k($) {
    const R = Math.sign(Number($ || 0));
    if (!R) return !1;
    const D = { ...e() }, H = Number(D.fov || gc);
    return D.fov = j(H + R * Y1, X1, Z1), n(D), c(), m("wheel", { deltaSign: R, fovBefore: H, fovAfter: D.fov }), !0;
  }
  function A($) {
    return k(Math.sign(Q1($)));
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
function Pn(t, e = 0) {
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
function ty(t, e) {
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
function ey(t, e, n = 0) {
  const r = ty(t, e), o = Xr(0, 1, 0);
  let c = vf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Xr(1, 0, 0)), c = mo(c);
  let u = mo(vf(r, c));
  const f = Number(n || 0) * Yr, m = Math.cos(f), y = Math.sin(f), p = Xa(Pi(c, m), Pi(u, y)), w = Xa(Pi(c, -y), Pi(u, m));
  return { fwd: r, right: mo(p), up: mo(w) };
}
function ny(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function _f(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return !1;
  const [y, p, w] = ny(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const M = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, A = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, $ = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, R = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  return t.transform(M, C, k, $, A, R), t.drawImage(e, 0, 0), t.restore(), !0;
}
function ry(t, e) {
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
function ch(t) {
  const e = t || {}, n = Pn(e.yaw_deg, 0), r = Pn(e.pitch_deg, 0), o = Pn(e.roll_deg ?? e.rot_deg, 0), c = $a(Pn(e.hFOV_deg, 90), 1, 179), u = $a(Pn(e.vFOV_deg, 60), 1, 179), f = Math.tan(c * Yr * 0.5) / Math.max(1e-6, Math.tan(u * Yr * 0.5)), m = $a(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: m
  };
}
function iy(t, e, n, r, o, c = "balanced") {
  const u = (Y = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Pn(r == null ? void 0 : r.w, 0),
      rectH: Pn(r == null ? void 0 : r.h, 0),
      imageW: Pn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Pn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...Y
    };
  };
  if (!t || !e || !n || !r || !o)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const f = Pn(r.w, 0), m = Pn(r.h, 0);
  if (f <= 1 || m <= 1)
    return u({ reason: "invalid_rect", rectW: f, rectH: m }), !1;
  const y = Number(n.naturalWidth || n.width || 0), p = Number(n.naturalHeight || n.height || 0);
  if (y <= 1 || p <= 1)
    return u({ reason: "invalid_image", imageW: y, imageH: p }), !1;
  const w = ry(e, n) || n, { yaw: M, pitch: k, roll: A, hfov: C, vfov: $ } = ch(o), R = ey(M, k, A), D = Math.tan(C * Yr * 0.5), H = Math.tan($ * Yr * 0.5), S = c === "high" ? 20 : c === "draft" ? 10 : 14, W = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let Q = 0;
  const at = Array.from({ length: W + 1 }, () => Array(S + 1).fill(null)), et = Array.from({ length: W + 1 }, () => Array(S + 1).fill(null));
  for (let Y = 0; Y <= W; Y += 1)
    for (let O = 0; O <= S; O += 1) {
      const rt = O / S, mt = Y / W, lt = (rt * 2 - 1) * D, Z = (1 - mt * 2) * H, U = mo(Xa(Xa(R.fwd, Pi(R.right, lt)), Pi(R.up, Z))), st = Math.atan2(U.x, U.z), it = Math.asin($a(U.y, -1, 1));
      let ct = (st / (2 * Math.PI) + 0.5) * y;
      for (; ct < 0; ) ct += y;
      for (; ct >= y; ) ct -= y;
      const wt = (0.5 - it / Math.PI) * p;
      at[Y][O] = { x: r.x + rt * r.w, y: r.y + mt * r.h }, et[Y][O] = { x: ct, y: wt };
    }
  for (let Y = 0; Y < W; Y += 1)
    for (let O = 0; O < S; O += 1) {
      const rt = at[Y][O], mt = at[Y][O + 1], lt = at[Y + 1][O], Z = at[Y + 1][O + 1], U = { ...et[Y][O] }, st = { ...et[Y][O + 1] }, it = { ...et[Y + 1][O] }, ct = { ...et[Y + 1][O + 1] }, wt = Math.min(U.x, st.x, it.x, ct.x);
      Math.max(U.x, st.x, it.x, ct.x) - wt > y * 0.5 && [U, st, it, ct].forEach((J) => {
        J.x < y * 0.5 && (J.x += y);
      }), _f(t, w, U, st, ct, rt, mt, Z) && (Q += 1), _f(t, w, U, ct, it, rt, Z, lt) && (Q += 1);
    }
  return u({
    drawnTriCount: Q,
    Nu: S,
    Nv: W,
    rectW: f,
    rectH: m,
    imageW: y,
    imageH: p,
    reason: "ok"
  }), Q > 0;
}
const lh = 0.28;
function oy(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), r = j(Number(e.y0 ?? 0), 0, 1), o = j(Number(e.x1 ?? 1), 0, 1), c = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(r, c),
    x1: Math.max(n, o),
    y1: Math.max(r, c)
  };
}
function ay(t, e = {}) {
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
    crop: oy(t.crop),
    opacity: f ? lh : j(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function xs(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => ay(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function uh(t, e, n = {}) {
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
function yl(t) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: j(Number((t == null ? void 0 : t.fov) || 100), 1, 179)
  };
}
function sy(t) {
  return yl(t);
}
function ki(t) {
  const e = ch(t || {});
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
const { app: me } = Ca;
function $c() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Ca == null ? void 0 : Ca.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Zr = Math.PI / 180, Hi = { Nu: 14, Nv: 9 }, mc = { Nu: 24, Nv: 14 }, wf = { Nu: 32, Nv: 20 }, cy = 10, ly = 120;
function fh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qt(t, e, n = null) {
  if (!fh()) return;
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
function uy() {
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
function fy(t) {
  const e = Ir(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function dh(t, e, n) {
  fy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Hc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function hh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function dy(t) {
  return Fc(hh(t));
}
function qr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = me == null ? void 0 : me.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, o].join("|");
}
function ph(t, e = null) {
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
            }), gh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Qt(r, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
          }
      });
    }, 300));
  }
};
function gh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = r === "cutout" ? "dom" : ph(r, t).chosenPath, c = Hc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (c === o && c !== "none" && u === r && f === m) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = m, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Oi(t, { keepMonitor: r === "stickers" }), Qy(t, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Hc(t);
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
function hy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Oi(t, e = {}) {
  var f, m, y, p, w;
  if (!t) return;
  Qa.unregister(t), hy(t);
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
function xf(t, e) {
  return Jr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function pa(t, e) {
  return Jr(t.x * e, t.y * e, t.z * e);
}
function yc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Sf(t, e) {
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
function bl(t, e, n = 0) {
  const r = zr(t, e), o = Jr(0, 1, 0);
  let c = Sf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Jr(1, 0, 0)), c = ga(c);
  let u = ga(Sf(r, c));
  const f = n * Zr, m = Math.cos(f), y = Math.sin(f), p = xf(pa(c, m), pa(u, y)), w = xf(pa(c, -y), pa(u, m));
  return { fwd: r, right: ga(p), up: ga(w) };
}
function py(t, e = "#00ff00") {
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
function gy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Za(t, "state_json")) == null ? void 0 : n.value) || "");
}
function mh(t) {
  var c;
  const e = gy(t), n = String(((c = Za(t, "bg_color")) == null ? void 0 : c.value) || "#1a1a1e"), r = t.__panoStateCache;
  if (r && r.source === e && r.bg === n)
    return r.parsed;
  const o = py(e, n);
  return t.__panoStateCache = { source: e, bg: n, parsed: o }, o;
}
function Za(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Nf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function yh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function my(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function bh(t) {
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
  return !r && n != null && (r = my(t == null ? void 0 : t.graph, n)), r;
}
function yy(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function vl(t, e = []) {
  const n = yy(t), r = [];
  return e.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : e;
}
function Mf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Ja(t, e) {
  const n = Mf(t), r = Mf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function by(t, e = ["erp_image", "bg_erp"]) {
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
    const M = yh(t == null ? void 0 : t.graph, w), { originId: k } = bh(M);
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
    this.bound || !((t = Qe) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var p, w, M, k, A;
        if (!c) return;
        const u = Ja(r, c == null ? void 0 : c.id), m = by(c, ["erp_image", "bg_erp"]).some((C) => Ja(r, C)), y = u ? "self" : m ? "upstream" : "global_executed";
        Qt(c, "exec-refresh", { executedId: r, reason: y }), zc(c), Qt(c, "invalidate", { cachesCleared: !0 }), (w = (p = c.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || w.call(p), (M = c.setDirtyCanvas) == null || M.call(c, !0, !0), (A = (k = c.graph) == null ? void 0 : k.setDirtyCanvas) == null || A.call(k, !0, !0), Qt(c, "draw-request", {
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
  return typeof ((c = Qe) == null ? void 0 : c.apiURL) == "function" ? Qe.apiURL(o) : o;
}
function vy(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function _y(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function wy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function _h(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (vy(e)) return [e];
  const { filename: n, subfolder: r } = _y(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => ts({
    filename: n,
    subfolder: r,
    type: c
  }));
  return wy([...o, e]);
}
function xy(t) {
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
function Vc(t) {
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
function Kn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Kn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return ts({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Kn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ts(t);
}
function wh(t, e) {
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
function Sy(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), r(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function Ny(t, e) {
  try {
    const n = Sy(e);
    let r = "";
    for (const o of n)
      if (r = Kn(o), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Qt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: wh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Qt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Qt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function My(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Vc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...c, ...u] : [...c, ...u];
  let m = "";
  for (const R of f)
    if (m = Kn(R), m) break;
  if (!m) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), w = _h(m).map((R) => wh(R, y));
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
  const $ = () => {
    if (C += 1, C >= w.length) {
      t.__panoOwnOutputImageCache === k && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    A.src = w[C];
  };
  return A.onload = () => {
    var R;
    t.__panoOwnOutputImageCache === k && k.pendingImg === A && k.pendingSrc === M && (k.src = M, k.img = A, k.pendingSrc = "", k.pendingImg = null), e == null || e(), (R = t.setDirtyCanvas) == null || R.call(t, !0, !0);
  }, A.onerror = () => {
    if (C + 1 >= w.length) {
      t.__panoOwnOutputImageCache === k && k.pendingImg === A && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    $();
  }, k.pendingSrc = M, k.pendingImg = A, $(), k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : A;
}
function Py(t, e = []) {
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
    const A = yh(t.graph, k), { originId: C, originSlot: $ } = bh(A);
    if (C == null) continue;
    const R = vh(t, w, C);
    if (!R) continue;
    const D = Number($ || 0), H = Vc((R == null ? void 0 : R.id) ?? C), S = Array.isArray(H == null ? void 0 : H.images) ? H.images : [];
    if (S.length) {
      const et = [];
      D >= 0 && D < S.length && et.push(S[D]), et.push(...S);
      for (const Y of et) {
        const O = Kn(Y);
        if (O)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: O, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let W = [];
    try {
      W = typeof (me == null ? void 0 : me.getNodeImageUrls) == "function" ? me.getNodeImageUrls(R) || [] : [];
    } catch {
      W = [];
    }
    if (Array.isArray(W) && W.length) {
      const et = [];
      D >= 0 && D < W.length && et.push(W[D]), et.push(...W);
      for (const Y of et) {
        const O = Kn(Y);
        if (O)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: O, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const Q = Array.isArray(R == null ? void 0 : R.imgs) ? R.imgs : [];
    if (Q.length) {
      const et = [];
      D >= 0 && D < Q.length && et.push(Q[D]), et.push(...Q);
      for (const Y of et) {
        const O = Kn(Y);
        if (O)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: O, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const at = (y = R == null ? void 0 : R.widgets) == null ? void 0 : y.find((et) => String((et == null ? void 0 : et.name) || "").toLowerCase() === "image");
    if (at) {
      let et = Kn(at.value);
      if (et && !et.includes("/") && !et.includes(":") && (R.comfyClass === "LoadImage" || R.type === "LoadImage") && (et = Qe.apiURL(`/view?filename=${encodeURIComponent(et)}&type=input&subfolder=`)), et)
        return Qt(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: et, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = Vc(t == null ? void 0 : t.id), m = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && m.push(...f.pano_input_images), Array.isArray((p = f == null ? void 0 : f.ui) == null ? void 0 : p.pano_input_images) && m.push(...f.ui.pano_input_images), m.length > 0)
    for (const w of m) {
      const M = Kn(w);
      if (M)
        return Qt(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Qt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function ky(t, e = []) {
  const n = Py(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const o = _h(r);
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
  const r = ky(t, e);
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
function xh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Mr(t, e, n = "") {
  const r = xh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o, Qt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < ly ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Qt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function jc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / o, f = r / c, m = Math.min(u, f);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function Pf(t, e, n = 1) {
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
function Cy(t) {
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
function Sh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = o, m = o / u;
  return m > c && (m = c, f = c * u), {
    x: n + (o - f) * 0.5,
    y: r + (c - m) * 0.5,
    w: f,
    h: m
  };
}
function Ay(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = Sh(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Iy(t, e) {
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
function Ey(t, e = null) {
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
  const n = Ey(t) + 2, r = 8, o = Ir(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: r, y: n, w: c, h: u };
}
function Nh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const o = xy(n);
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
function Ty(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Mh(t, e) {
  return xs(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Ph(t, e, n) {
  return uh(e, (r, o) => Nh(t, r, o), { scene: n });
}
function Ly(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function ns(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return;
  const [y, p, w] = Ly(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const M = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, A = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, $ = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, R = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  t.transform(M, C, k, $, A, R), t.drawImage(e, 0, 0), t.restore();
}
function kh(t, e, n, r) {
  const o = yc(t, e.right), c = yc(t, e.up), u = yc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / r, m = o / u / r;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Ch(t, e, n, r, o, c, u, f = 12, m = 9) {
  var Z;
  const y = j(Number(u.hFOV_deg || 30), 1, 179) * Zr, p = j(Number(u.vFOV_deg || 30), 1, 179) * Zr, w = Math.tan(y * 0.5), M = Math.tan(p * 0.5), k = u.crop || {}, A = j(Number(k.x0 ?? 0), 0, 1), C = j(Number(k.y0 ?? 0), 0, 1), $ = j(Number(k.x1 ?? 1), 0, 1), R = j(Number(k.y1 ?? 1), 0, 1), D = Math.max(1e-4, $ - A), H = Math.max(1e-4, R - C), S = bl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), W = [], Q = [], at = [], et = [];
  for (let U = 0; U <= m; U++) {
    const st = U / m, ct = (1 - (C + st * H) * 2) * M;
    for (let wt = 0; wt <= f; wt++) {
      const Rt = wt / f, Mt = ((A + Rt * D) * 2 - 1) * w, Bt = S.fwd.x + S.right.x * Mt + S.up.x * ct, ye = S.fwd.y + S.right.y * Mt + S.up.y * ct, z = S.fwd.z + S.right.z * Mt + S.up.z * ct, Pt = Math.hypot(Bt, ye, z) || 1e-8, St = Bt / Pt, Dt = ye / Pt, zt = z / Pt, $t = St * r.right.x + Dt * r.right.y + zt * r.right.z, Gt = St * r.up.x + Dt * r.up.y + zt * r.up.z, I = St * r.fwd.x + Dt * r.fwd.y + zt * r.fwd.z;
      if (I <= 1e-4)
        W[U] || (W[U] = []), Q[U] || (Q[U] = []), W[U][wt] = null, Q[U][wt] = null;
      else {
        const L = Gt / I / o, V = $t / I / o;
        W[U] || (W[U] = []), Q[U] || (Q[U] = []), W[U][wt] = n.x + n.w * 0.5 + V * n.h * 0.5, Q[U][wt] = n.y + n.h * 0.5 - L * n.h * 0.5;
      }
      at[U] || (at[U] = []), et[U] || (et[U] = []), at[U][wt] = Rt, et[U][wt] = st;
    }
  }
  const Y = (Z = c.assets) == null ? void 0 : Z[u.asset_id], O = Nh(e, u.asset_id, Y);
  if (!O || !O.complete || !O.naturalWidth) return;
  const rt = Number(O.naturalWidth || O.width || 1), mt = Number(O.naturalHeight || O.height || 1), lt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = lt;
  for (let U = 0; U < m; U++)
    for (let st = 0; st < f; st++) {
      const it = W[U][st], ct = Q[U][st], wt = W[U][st + 1], Rt = Q[U][st + 1], J = W[U + 1][st], Mt = Q[U + 1][st], Bt = W[U + 1][st + 1], ye = Q[U + 1][st + 1];
      if (it === null || wt === null || J === null || Bt === null) continue;
      const z = at[U][st] * rt, Pt = et[U][st] * mt, St = at[U][st + 1] * rt, Dt = et[U][st + 1] * mt, zt = at[U + 1][st] * rt, $t = et[U + 1][st] * mt, Gt = at[U + 1][st + 1] * rt, I = et[U + 1][st + 1] * mt;
      ns(t, O, { x: z, y: Pt }, { x: St, y: Dt }, { x: Gt, y: I }, { x: it, y: ct }, { x: wt, y: Rt }, { x: Bt, y: ye }), ns(t, O, { x: z, y: Pt }, { x: Gt, y: I }, { x: zt, y: $t }, { x: it, y: ct }, { x: Bt, y: ye }, { x: J, y: Mt });
    }
}
function Dy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = mh(t), o = Uc(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = bl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Zr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const f = es(
    t,
    vl(t, ["erp_image", "bg_erp"]),
    () => {
      var S;
      return (S = t.setDirtyCanvas) == null ? void 0 : S.call(t, !0, !1);
    }
  ), m = !!(f && f.complete && (f.naturalWidth || f.width)), y = Eh(t), p = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = y || p, M = Hi, k = Mh(t, r), A = Ph(t, r, k), C = yl(t.__panoPreviewView), $ = m ? ji({
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
  }) : !1, R = w ? 8 : 12, D = w ? 6 : 9, H = Ty(t, r);
  if (!m || H.length === 0) {
    const S = jc(e == null ? void 0 : e.canvas, o);
    Ah(e, o, c, u, S);
  }
  !$ && m && rs(t, e, o, c, u, f, M), !$ && H.length > 0 && H.forEach((S) => Ch(e, t, o, c, u, r, S, R, D)), e.restore();
}
function Ha(t, e, n, r) {
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
  const o = Oy(t, e, r);
  return o || null;
}
function Ry(t, e) {
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
function Oy(t, e, n) {
  var o, c;
  const r = Ry(e, n || (me == null ? void 0 : me.canvas));
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
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", dh(t, 320, 180), Si(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, k;
    const w = e ? e.apply(this, arguments) : void 0;
    try {
      const A = arguments[0];
      A && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), Dy(this, A, r));
    } catch {
    }
    return w;
  }, t.onResize = function() {
    var M;
    const w = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, is(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Th(this, 220, null), w;
  };
  const r = ws({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (w) => {
      t.__panoPreviewView = w;
    },
    onInteraction: () => {
      var w;
      Ih(t), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(w, M, k) {
    var A;
    try {
      if (!((A = this.flags) != null && A.collapsed)) {
        const C = Ha(this, w, M, k) || { x: 0, y: 0 }, $ = Ir(this), R = Number(($ == null ? void 0 : $[0]) || 0), D = Number(($ == null ? void 0 : $[1]) || 0);
        if (C.x >= R - 20 && C.y >= D - 20)
          return o ? o.apply(this, arguments) : void 0;
        const S = Uc(this);
        if (Nf(C.x, C.y, S))
          return (w == null ? void 0 : w.button) === 0 && r.startDrag(C.x, C.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(w, M, k) {
    try {
      const A = Ha(this, w, M, k);
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
      const $ = Ha(this, w, M, k), R = Uc(this);
      if (!$ || !Nf($.x, $.y, R)) return m ? m.apply(this, arguments) : void 0;
      const D = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign(D)) && ((C = this.setDirtyCanvas) == null || C.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
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
function Fy(t, e) {
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
function $y(t, e) {
  var y, p, w, M, k, A, C, $, R, D, H, S;
  const n = (p = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : p.strokes, r = (M = (w = e == null ? void 0 : e.painting) == null ? void 0 : w.mask) == null ? void 0 : M.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(r) && r.length > 0;
  if (!o && !c) return null;
  const u = Fy(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Oc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: r || null,
    groups: ((k = e == null ? void 0 : e.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((A = e == null ? void 0 : e.painting) == null ? void 0 : A.raster_objects) || null
  };
  return (((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.paint) !== m.paint || (($ = t.__panoPreviewPaintRevision) == null ? void 0 : $.mask) !== m.mask || ((R = t.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== m.groups || ((D = t.__panoPreviewPaintRevision) == null ? void 0 : D.rasterObjects) !== m.rasterObjects) && (t.__panoPreviewPaintRevision = m, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((H = e == null ? void 0 : e.painting) == null ? void 0 : H.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((S = e == null ? void 0 : e.painting) == null ? void 0 : S.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Hy(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Vy(t, e) {
  const n = $y(t, e);
  if (!n) return null;
  const r = Hy(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function zy(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, o = Kn(r);
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
function kf(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = zy(t, e, () => {
      var m, y;
      return (y = (m = t.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const o = Vy(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function jy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Uy(t, e, n, r) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== r) && (o = document.createElement("canvas"), o.width = n, o.height = r, t[e] = o), o;
}
function By(t, e, n, r, o, c) {
  if (!e || !n || !(r > 0) || !(o > 0)) return;
  const u = jy(n);
  if (u.width === r && u.height === o) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  const m = Uy(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  try {
    m.clearRect(0, 0, u.width, u.height), m.drawImage(n, 0, 0, u.width, u.height);
    const y = m.getImageData(0, 0, u.width, u.height).data, p = e.getImageData(0, 0, r, o), w = p.data, M = Math.max(0, u.width - 1), k = Math.max(0, u.height - 1);
    for (let A = 0; A < o; A += 1) {
      const C = (A + 0.5) * u.height / o - 0.5, $ = j(Math.floor(C), 0, k), R = j($ + 1, 0, k), D = j(C - $, 0, 1);
      for (let H = 0; H < r; H += 1) {
        const S = (H + 0.5) * u.width / r - 0.5, W = j(Math.floor(S), 0, M), Q = j(W + 1, 0, M), at = j(S - W, 0, 1);
        let et = 0, Y = 0, O = 0, rt = 0;
        const mt = (U, st, it) => {
          const ct = (st * u.width + U) * 4, wt = (y[ct + 3] || 0) / 255;
          et += wt * it, Y += (y[ct] || 0) / 255 * wt * it, O += (y[ct + 1] || 0) / 255 * wt * it, rt += (y[ct + 2] || 0) / 255 * wt * it;
        };
        if (mt(W, $, (1 - at) * (1 - D)), mt(Q, $, at * (1 - D)), mt(W, R, (1 - at) * D), mt(Q, R, at * D), et <= 1e-6) continue;
        const lt = (A * r + H) * 4, Z = 1 - et;
        w[lt] = Math.round(j((Y + w[lt] / 255 * Z) * 255, 0, 255)), w[lt + 1] = Math.round(j((O + w[lt + 1] / 255 * Z) * 255, 0, 255)), w[lt + 2] = Math.round(j((rt + w[lt + 2] / 255 * Z) * 255, 0, 255)), w[lt + 3] = 255;
      }
    }
    e.putImageData(p, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, o);
  }
}
function Cf(t, e, n, r) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${r}`;
  let m = t.__panoPreviewBgPaint;
  if (!m || m.__revKey !== f || m.width !== o || m.height !== c) {
    (!m || m.width !== o || m.height !== c) && (m = document.createElement("canvas"), m.width = o, m.height = c, t.__panoPreviewBgPaint = m);
    const y = m.getContext("2d");
    y.clearRect(0, 0, o, c), y.drawImage(e, 0, 0, o, c), By(t, y, n, o, c, "__panoPreviewOverlayScratch"), m.__revKey = f;
  }
  return m;
}
function Gy(t, e, n, r = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  xh(t, o);
  const c = mh(t), u = o === "cutout" ? My(t, () => {
    var C, $;
    return ($ = (C = t.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : $.call(C);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), m = e.parentElement, y = 1, p = Math.max(1, Number((m == null ? void 0 : m.clientWidth) || e.clientWidth || 0)), w = Math.max(1, Number((m == null ? void 0 : m.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(p * y)), k = Math.max(64, Math.round(w * y)), A = e.getContext("2d");
  if (A)
    if (o === "cutout") {
      const C = Cy(c), $ = es(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var Z, U;
          return (U = (Z = t.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : U.call(Z);
        }
      ), R = !!($ && $.complete && ($.naturalWidth || $.width));
      (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const D = { x: 0, y: 0, w: M, h: k }, H = f ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : R ? j(Number(($.naturalWidth || $.width) / Math.max(1, Number($.naturalHeight || $.height || 1))), 0.05, 20) : 1, S = C ? ki(C) : null, W = j(Number((S == null ? void 0 : S.aspect) || H || 1), 0.05, 20), Q = Sh(D, W), at = jc(e, D);
      A.setTransform(1, 0, 0, 1, 0, 0), A.fillStyle = "#070707", A.fillRect(0, 0, M, k);
      const et = t == null ? void 0 : t.__panoCutoutPreviewSurface, Y = (et == null ? void 0 : et.source) || null;
      if (!!(Y && Number(Y.width || 0) > 1 && Number(Y.height || 0) > 1)) {
        A.drawImage(Y, Q.x, Q.y, Q.w, Q.h), uo(t, !1), Mr(t, !1, "");
        return;
      }
      let rt = "none", mt = "Open editor and add frame", lt = "";
      if (f)
        A.drawImage(u, Q.x, Q.y, Q.w, Q.h);
      else if (lt = String(($ == null ? void 0 : $.src) || ""), C)
        $ && !R ? rt = "loading" : R ? (rt = "empty", mt = "Open editor or run node") : (rt = "empty", mt = "Connect ERP image");
      else {
        if (R) {
          const Z = kf(t, c), U = Z != null && Z.source ? Cf(t, $, Z.source, Z.revision || "") : $;
          Ay(A, U, D, 0.44);
        }
        rt = "empty", mt = "Open editor and add frame";
      }
      rt === "loading" ? (Pf(A, Q, at), uo(t, !1), Mr(t, !0, lt)) : rt === "empty" ? (uo(t, !0, mt), Mr(t, !1, "")) : (uo(t, !1), Mr(t, !1, ""));
    } else {
      uo(t, !1), (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const C = { x: 0, y: 0, w: M, h: k }, $ = jc(e, C);
      A.setTransform(1, 0, 0, 1, 0, 0), A.clearRect(0, 0, M, k), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = bl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), D = Math.tan(Number(t.__panoPreviewView.fov || 100) * Zr * 0.5), H = es(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var Z, U;
          return (U = (Z = t.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : U.call(Z);
        }
      ), S = !!(H && H.complete && (H.naturalWidth || H.width));
      A.fillStyle = "#1a1a1e", A.fillRect(0, 0, M, k);
      const W = Mh(t, c), Q = Ph(t, c, W), at = yl(t.__panoPreviewView), et = kf(t, c), Y = (et == null ? void 0 : et.source) || null, O = S && Y ? Cf(t, H, Y, (et == null ? void 0 : et.revision) || "") : H, rt = O !== H ? String(O.__revKey || "") : H ? [
        String(H.currentSrc || H.src || ""),
        Number(H.naturalWidth || H.width || 0),
        Number(H.naturalHeight || H.height || 0)
      ].join("|") : "", mt = S ? ji({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: A,
        rect: C,
        backgroundSource: O,
        backgroundRevision: rt,
        textures: Q,
        scene: W,
        view: at
      }) : !1, lt = W.stickers;
      if (S && mt)
        Mr(t, !1, "");
      else if (S)
        rs(t, A, C, R, D, O, Hi), Mr(t, !1, "");
      else if (Y)
        rs(t, A, C, R, D, Y, Hi), Mr(t, !!H && !S, String((H == null ? void 0 : H.src) || ""));
      else {
        const Z = !!H && !S;
        Mr(t, Z, String((H == null ? void 0 : H.src) || "")), Z && Pf(A, C, $);
      }
      if ((!S || lt.length === 0) && Ah(A, C, R, D, $), !mt && lt.length > 0) {
        const Z = Eh(t), U = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, st = Z || U, it = st ? 8 : 12, ct = st ? 6 : 9;
        lt.forEach((wt) => Ch(A, t, C, R, D, c, wt, it, ct));
      } else if (!H || !S) {
        const Z = Math.max(14, Math.round(16 * $));
        A.fillStyle = "rgba(212,212,216,0.85)", A.font = `600 ${Z}px Plus Jakarta Sans, Geist, sans-serif`, A.textAlign = "center", A.fillText("Open editor to add stickers", M * 0.5, k * 0.5 + 24 * $);
      }
    }
}
function rs(t, e, n, r, o, c, u = mc) {
  if (!(!!c && (typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas || typeof ImageBitmap < "u" && c instanceof ImageBitmap) || !!c && c.complete && (c.naturalWidth || c.width))) return;
  const y = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (D1({
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
  const k = Iy(t, c) || c, A = Math.max(4, Number((u == null ? void 0 : u.Nu) || mc.Nu)), C = Math.max(4, Number((u == null ? void 0 : u.Nv) || mc.Nv)), $ = A <= Hi.Nu && C <= Hi.Nv ? 0.24 : A >= wf.Nu && C >= wf.Nv ? 0.42 : 0.34, R = [], D = [];
  for (let Q = 0; Q <= C; Q++)
    R[Q] = [], D[Q] = [];
  const H = n.x + n.w * 0.5, S = n.y + n.h * 0.5, W = n.h * 0.5;
  for (let Q = 0; Q <= C; Q++) {
    const at = n.y + n.h * Q / C, et = (S - at) / W * o;
    for (let Y = 0; Y <= A; Y++) {
      const O = n.x + n.w * Y / A, rt = (O - H) / W * o, mt = r.fwd.x + r.right.x * rt + r.up.x * et, lt = r.fwd.y + r.right.y * rt + r.up.y * et, Z = r.fwd.z + r.right.z * rt + r.up.z * et, U = Math.hypot(mt, lt, Z) || 1e-8, st = mt / U, it = lt / U, ct = Z / U, wt = Math.atan2(st, ct), Rt = Math.asin(j(it, -1, 1));
      let J = (wt / (2 * Math.PI) + 0.5) * p;
      for (; J < 0; ) J += p;
      for (; J >= p; ) J -= p;
      const Mt = (0.5 - Rt / Math.PI) * w;
      R[Q][Y] = { x: O, y: at }, D[Q][Y] = { x: J, y: Mt };
    }
  }
  e.save(), e.__panoTriExpandPx = $, e.globalAlpha = 1;
  for (let Q = 0; Q < C; Q += 1)
    for (let at = 0; at < A; at += 1) {
      const et = R[Q][at], Y = R[Q][at + 1], O = R[Q + 1][at], rt = R[Q + 1][at + 1];
      if (!et || !Y || !O || !rt) continue;
      const mt = { ...D[Q][at] }, lt = { ...D[Q][at + 1] }, Z = { ...D[Q + 1][at] }, U = { ...D[Q + 1][at + 1] }, st = Math.min(mt.x, lt.x, Z.x, U.x);
      Math.max(mt.x, lt.x, Z.x, U.x) - st > p * 0.5 && [mt, lt, Z, U].forEach((ct) => {
        ct.x < p * 0.5 && (ct.x += p);
      }), ns(e, k, mt, lt, U, et, Y, rt), ns(e, k, mt, U, Z, et, rt, O);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function Af(t, e, n, r, o, c, u = 1) {
  let f = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const m of e) {
    const y = kh(m, n, r, o);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Ah(t, e, n, r, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const p = [];
    for (let w = -180; w <= 180; w += 15) p.push(zr(w, y));
    Af(t, p, n, e, r, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const p = [];
    for (let w = -89; w <= 89; w += 15) p.push(zr(y, w));
    Af(t, p, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
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
    const p = kh(y.dir, n, e, r);
    p && t.fillText(y.name, p.x, p.y + 20 * o);
  }), t.restore();
}
function Ky(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Ih(t) {
  const e = Ky(t);
  e.dragging = !1, e.hqFrames = cy;
}
function is(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Eh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function Wy(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function qy(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const o = Number(t.clientX) - Number(r.left || 0), c = Number(t.clientY) - Number(r.top || 0);
  return o >= r.width - n && c >= r.height - n;
}
function yi(t, e) {
  return qy(t, e) ? !1 : (Wy(t), !0);
}
function Yy() {
  var n;
  const t = (n = me == null ? void 0 : me.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function Xy(t) {
  var n;
  if (!t) return;
  const e = (n = me == null ? void 0 : me.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function Zy(t, e = 360, n = 260) {
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
function Jy(t, e = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function If(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, is(t, 150), e == null || e(), Th(t, 180, e);
    }
  };
}
function Th(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function Si(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function Qy(t, e = {}) {
  var Rt;
  const n = e.__allowStandalone === !0, r = dy(t);
  if (r && !n) {
    Qt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: hh(t) });
    return;
  }
  r && Zy(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Qa.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || Mo.unregister(t);
  const m = String(e.__panoForcedPath || "").trim(), y = o ? ph(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: qr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (m === "dom" || m === "legacy_draw") && (y.chosenPath = m, y.reason = "controller_target_backend");
  const p = o ? y.chosenPath : "dom", w = y.signature || qr(t), M = Number(t.__panoRebindGeneration || 0), k = Hc(t);
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
  const A = e.noPreview === !0, C = o || A ? 0 : 56, $ = document.createElement("div");
  if (uy(), $.className = "pano-node-preview-dom", $.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), A && $.classList.add("pano-node-preview--no-preview"), $.setAttribute("data-capture-wheel", "true"), $.setAttribute("tabindex", "-1"), $.style.cssText = [
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
    const J = t.addDOMWidget($c(), "preview", $, If(t, null));
    Si(t), t.__panoDomPreview = { widget: J, root: $, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const R = document.createElement("div");
  R.style.cssText = [
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
  ].join(";"), H.textContent = "Open editor and add frame", R.appendChild(D), R.appendChild(H), $.appendChild(R), dh(t, 120, 120), Si(t);
  let S = null;
  try {
    Jy(t, C, () => {
      var J, Mt;
      return (Mt = (J = t.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Mt.call(J);
    }), S = t.addDOMWidget(
      $c(),
      "preview",
      $,
      If(t, () => {
        var J, Mt;
        return (Mt = (J = t.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Mt.call(J);
      }, C)
    );
  } catch {
    o && ma(t);
    return;
  }
  const W = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, Q = () => {
    W.needsDraw = !0, W.raf || (W.raf = requestAnimationFrame(Y));
  }, at = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    is(t, 150), Q();
  }) : null;
  at == null || at.observe(R);
  const et = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const J = 3, Mt = (Bt) => {
      requestAnimationFrame(() => {
        var z;
        const ye = !!($ != null && $.isConnected && (R != null && R.isConnected) && (D != null && D.isConnected) && Number(R.clientHeight || 0) > 0 && Number(D.clientHeight || 0) > 0);
        if (!ye && Bt < J) {
          Mt(Bt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Qt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: ye ? "dom_ok" : "dom_fail",
          wrapH: Number((R == null ? void 0 : R.clientHeight) || 0),
          canvasH: Number((D == null ? void 0 : D.clientHeight) || 0),
          attempt: Bt
        }), !ye) {
          if (c) {
            Qt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((R == null ? void 0 : R.clientHeight) || 0),
              canvasH: Number((D == null ? void 0 : D.clientHeight) || 0)
            });
            return;
          }
          Qt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Oi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ma(t), (z = t.setDirtyCanvas) == null || z.call(t, !0, !0);
        }
      });
    };
    Mt(1);
  }, Y = (J) => {
    var Bt, ye, z;
    W.raf = 0;
    const Mt = O.stepInertia(J);
    (W.needsDraw || Mt) && (W.needsDraw = !1, (Bt = t.flags) != null && Bt.collapsed || Gy(t, D, null, O), (ye = t.setDirtyCanvas) == null || ye.call(t, !0, !1)), (Mt || W.needsDraw) && (W.raf = requestAnimationFrame(Y)), fh() && (!t.__panoDebugLastTs || J - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = J, Qt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Ir(t),
      root: lo($),
      wrap: lo(R),
      canvas: lo(D),
      rootParent: lo($.parentElement),
      rootGrandParent: lo((z = $.parentElement) == null ? void 0 : z.parentElement),
      canvasIntrinsic: { width: Number(D.width || 0), height: Number(D.height || 0) }
    }));
  }, O = ws({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (J) => {
      t.__panoPreviewView = J;
    },
    onInteraction: () => {
      Q();
    }
  });
  D.addEventListener("pointerdown", (J) => {
    var Mt, Bt;
    yi(J, R) && u && J.button === 0 && ((Mt = $.focus) == null || Mt.call($), (Bt = D.setPointerCapture) == null || Bt.call(D, J.pointerId), D.style.cursor = "grabbing", O.startDrag(J.clientX, J.clientY, J.pointerId));
  }), D.addEventListener("pointermove", (J) => {
    !u || !O.state.drag.active || (yi(J, R), O.moveDrag(J.clientX, J.clientY, "pano"));
  });
  const rt = (J) => {
    var Mt;
    !u || !O.state.drag.active || (yi(J, R), (Mt = D.releasePointerCapture) == null || Mt.call(D, J.pointerId), D.style.cursor = "grab", O.endDrag(), Ih(t), Q());
  };
  D.addEventListener("pointerup", rt), D.addEventListener("pointercancel", rt), D.addEventListener("pointerleave", (J) => {
    O.state.drag.active && rt(J);
  });
  const mt = (J) => {
    var Bt, ye, z;
    if (Qt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !yi(J, R) || !u) return;
    const Mt = Yy();
    O.applyWheelEvent(J) && Q(), (Bt = J.preventDefault) == null || Bt.call(J), (ye = J.stopPropagation) == null || ye.call(J), (z = J.stopImmediatePropagation) == null || z.call(J), requestAnimationFrame(() => {
      var Pt, St;
      Xy(Mt), (St = (Pt = me == null ? void 0 : me.canvas) == null ? void 0 : Pt.setDirty) == null || St.call(Pt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((J) => {
    R.addEventListener(J, mt, { passive: !1, capture: !0 }), D.addEventListener(J, mt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((J) => {
    D.addEventListener(J, (Mt) => yi(Mt, R)), R.addEventListener(J, (Mt) => yi(Mt, R));
  });
  const lt = Za(t, "state_json");
  if (lt && !lt.__panoPreviewPatchedCb) {
    lt.__panoPreviewPatchedCb = !0;
    const J = lt.callback;
    lt.callback = (Mt) => {
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
  const U = t.onRemoved, st = t.onResize, it = t.onExecuted;
  t.onExecuted = function(J) {
    Ny(t, J), zc(t), Si(t), Q();
    const Mt = it ? it.apply(this, arguments) : void 0;
    return Si(t), Mt;
  };
  const ct = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return zc(t), Si(t), Q(), ct ? ct.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var Mt;
    const J = st ? st.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, is(this, 150), Q(), (Mt = this.setDirtyCanvas) == null || Mt.call(this, !0, !1), J;
  }, t.onRemoved = function() {
    return wt(), Mo.unregister(this), Qa.unregister(this), U ? U.apply(this, arguments) : void 0;
  };
  const wt = () => {
    var J;
    W.raf && cancelAnimationFrame(W.raf), (J = at == null ? void 0 : at.disconnect) == null || J.call(at), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = st, t.onExecuted = it, t.onConnectionsChange = ct, t.onRemoved = U;
  };
  t.__panoDomRestore = wt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: S, root: $, canvas: D, requestDraw: Q, state: W, emptyHintEl: H }, et(), Q();
}
function Ef(t, e = {}) {
  gh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const os = Math.PI / 180;
function Qr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Tf(t, e) {
  return Qr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ya(t, e) {
  return Qr(t.x * e, t.y * e, t.z * e);
}
function Lf(t, e) {
  return Qr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ba(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Qr(t.x / e, t.y / e, t.z / e);
}
function tb(t, e) {
  const n = t * os, r = e * os, o = Math.cos(r);
  return Qr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function eb(t, e, n = 0) {
  const r = tb(t, e), o = Qr(0, 1, 0);
  let c = Lf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Qr(1, 0, 0)), c = ba(c);
  const u = ba(Lf(r, c)), f = n * os, m = Math.cos(f), y = Math.sin(f), p = Tf(ya(c, m), ya(u, y)), w = Tf(ya(c, -y), ya(u, m));
  return { fwd: r, right: ba(p), up: ba(w) };
}
const va = 140, nb = 180, Df = 40, bc = 10;
function Rf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Of(t, e) {
  const n = Rf(t), r = Rf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ff(t) {
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
      return Ff({
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
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Ff(t);
}
function $f(t) {
  var o;
  const e = (o = dn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (Of(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if (Of(c, n)) return e[c];
  return null;
}
function rb(t, e = "erp_image") {
  var A, C, $, R, D, H, S, W, Q, at, et, Y;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const o = n.find((O) => String((O == null ? void 0 : O.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const O = n.find((rt) => String((rt == null ? void 0 : rt.type) || "").toUpperCase() === "IMAGE" && (rt == null ? void 0 : rt.link) != null);
    (O == null ? void 0 : O.link) != null && (r = O.link);
  }
  if (r == null) return "";
  const c = ((C = (A = t == null ? void 0 : t.graph) == null ? void 0 : A.links) == null ? void 0 : C[r]) || ((D = (R = ($ = dn) == null ? void 0 : $.graph) == null ? void 0 : R.links) == null ? void 0 : D[r]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (W = (S = (H = dn) == null ? void 0 : H.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : W.call(S, u), m = $f(u), y = $f(t == null ? void 0 : t.id), p = [
    m == null ? void 0 : m.images,
    (Q = m == null ? void 0 : m.ui) == null ? void 0 : Q.pano_input_images,
    m == null ? void 0 : m.pano_input_images,
    (at = y == null ? void 0 : y.ui) == null ? void 0 : at.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const O of p)
    if (Array.isArray(O))
      for (const rt of O) {
        const mt = Po(rt);
        if (mt) return mt;
      }
  let w = [];
  try {
    w = typeof ((et = dn) == null ? void 0 : et.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(f) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const O of w) {
      const rt = Po(O);
      if (rt) return rt;
    }
  if (f) {
    const O = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const rt of O) {
      const mt = Po(rt);
      if (mt) return mt;
    }
  }
  const M = (Y = f == null ? void 0 : f.widgets) == null ? void 0 : Y.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image"), k = String((M == null ? void 0 : M.value) || "").trim();
  return k ? Qe.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function Hf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Vf(t, e, n, r, o, c) {
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || r <= 1) {
    Hf(e, n, r);
    return;
  }
  const u = eb(Number(o.yaw || 0), Number(o.pitch || 0), 0), f = Math.tan(Number(o.fov || 100) * os * 0.5);
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
    view: sy(o)
  }) || (rs(t, e, { x: 0, y: 0, w: n, h: r }, u, f, c, Hi), Hf(e, n, r));
}
function zf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class ib {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ws({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Fe(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${va}px`,
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
          return va;
        },
        getHeight() {
          return va;
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
            minHeight: Math.max(va, Number(c.minHeight || 0)),
            minWidth: Math.max(nb, Number(c.minWidth || 0))
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
      return zf(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const c = Ha(this, n, r, o), u = e.getLegacyPreviewRect();
      if (!c || !zf(c.x, c.y, u))
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
    const e = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - bc * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Df - bc);
    return { x: bc, y: Df, w: e, h: n };
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
    const e = rb(this.node, this.imageInputName);
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
function ob(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new ib(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function ab(t, e, n) {
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
function Lh(t) {
  return !!(t != null && t.prototype);
}
function Bc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function sb(t, e = {}) {
  Lh(t) || ob(t, {
    ...e,
    onOpen: Bc(t, e.onOpen)
  });
}
function cb(t, e = {}) {
  if (!Lh(t)) {
    Ef(t, {
      ...e,
      onOpen: Bc(t, e.onOpen)
    });
    return;
  }
  ab(t, "cutout_preview", (n) => {
    Ef(n, {
      ...e,
      onOpen: Bc(n, e.onOpen)
    });
  });
}
function lb(t = {}) {
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
  const y = ki(o), p = typeof m == "function" ? !!m(n, r, y, c, String(u || "cutout_preview")) : !1, w = !p && !!c && !!iy(
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
}, rr = "pen";
function jf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function ub(t = 80, e = null, n = 8) {
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
function fb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function db(t) {
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
function hb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function pb(t, e) {
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
    const c = pb(o, e);
    if (!c) return null;
    r.push(c);
  }
  return r.length >= n ? r : null;
}
function gb(t, e, n, r) {
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
function mb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = hb(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), o = gb(t.geometry, n, r, e === "paint");
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
function Uf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const o = mb(r, e);
    o && n.strokes.push(o);
  }
  return n;
}
function yb(t) {
  if (!t || typeof t != "object") return null;
  const e = ae(t.u0, null), n = ae(t.v0, null), r = ae(t.u1, null), o = ae(t.v1, null);
  if (e == null || n == null || r == null || o == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(e), v0: c(n), u1: c(r), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function bb(t) {
  const e = t || {};
  return {
    du: ae(e.du, 0) ?? 0,
    dv: ae(e.dv, 0) ?? 0,
    rot_deg: ae(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ae(e.scale, 1) ?? 1)
  };
}
function vb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = yb(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, ae(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: bb(t.transform)
  } : null;
}
function _b(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const o = vb(r, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function ko(t) {
  const e = fb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: db(t.groups),
    paint: Uf(t.paint, "paint"),
    mask: Uf(t.mask, "mask"),
    raster_objects: _b(t.raster_objects)
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
    return (r, o) => (xe(), zi(r0(t.tag), nh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, wb = { class: "pano-floating-right" }, xb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", wb, [
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
}, Sb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Nb = ["data-paint-pane"], Mb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Pb = ["data-paint-color-swatch", "aria-label"], kb = ["data-paint-footer"], Cb = ["data-paint-group"], Ab = ["hidden"], Ib = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (xe(), $e("div", Sb, [
      (xe(!0), $e(ze, null, Ti(t.panes, (o) => (xe(), $e("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (xe(), $e("div", Mb, [
          (xe(!0), $e(ze, null, Ti(t.paintSwatches, (c) => (xe(), $e("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: ps(e(c))
          }, null, 12, Pb))), 128)),
          r[0] || (r[0] = R0('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
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
          ], 8, Cb),
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
            tn(as, {
              icon: sl(ce).clear,
              label: o.clearLabel,
              tip: o.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": o.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Ab)
        ], 8, kb)
      ], 8, Nb))), 128))
    ]));
  }
}, Eb = {
  class: "pano-side",
  "data-side": ""
}, Tb = { class: "pano-side-head" }, Lb = ["innerHTML"], Db = {
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
    return (o, c) => (xe(), $e("div", Eb, [
      _e("div", Tb, [
        _e("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Lb),
        c[0] || (c[0] = _e("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = _e("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Rb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Ob = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", Rb, [
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
}, Fb = { class: "pano-floating-top" }, $b = ["data-view-count"], Hb = ["data-view", "aria-pressed", "aria-label"], Vb = ["innerHTML"], zb = { class: "label" }, jb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", Fb, [
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
          }, null, 8, Vb),
          _e("span", zb, id(r.label), 1)
        ], 10, Hb))), 128))
      ], 8, $b)
    ]));
  }
};
function Dh(t = "stickers") {
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
const Ub = ["aria-label"], Bb = { class: "pano-stage-wrap" }, Gb = ["innerHTML"], Kb = {
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
    const f = /* @__PURE__ */ km(null), m = Di(() => n.readOnly === !0), y = Di(() => n.shellPreset || Dh(n.type)), p = Di(() => {
      var H;
      const D = Array.isArray((H = y.value) == null ? void 0 : H.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return m.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ce.fullscreen
      }), D;
    });
    function w() {
      const D = f.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((H) => H instanceof HTMLElement ? !H.hidden && H.tabIndex >= 0 && H.offsetParent !== null : !1) : [];
    }
    function M() {
      var S;
      const H = w()[0] || f.value;
      (S = H == null ? void 0 : H.focus) == null || S.call(H);
    }
    function k() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function A(D) {
      var H, S, W, Q;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const at = w();
          if (!at.length) {
            D.preventDefault(), (S = (H = f.value) == null ? void 0 : H.focus) == null || S.call(H);
            return;
          }
          const et = at[0], Y = at[at.length - 1], O = document.activeElement;
          if (D.shiftKey) {
            (O === et || O === f.value || !((W = f.value) != null && W.contains(O))) && (D.preventDefault(), Y.focus());
            return;
          }
          (O === Y || !((Q = f.value) != null && Q.contains(O))) && (D.preventDefault(), et.focus());
          return;
        }
        D.key === "Escape" && r("close");
      }
    }
    function C() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function $() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function R(D) {
      document.removeEventListener("keydown", A), D ? (u || (u = document.activeElement), C(), document.addEventListener("keydown", A), xd(() => {
        M();
      })) : ($(), k());
    }
    return Td(() => {
      R(n.open);
    }), Ld(() => {
      $(), document.removeEventListener("keydown", A), k();
    }), Ia(() => n.open, (D) => {
      R(D);
    }), (D, H) => t.open ? (xe(), $e("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: H[0] || (H[0] = m1((S) => r("close"), ["self"]))
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
        _e("div", Bb, [
          H[1] || (H[1] = _e("canvas", {
            class: "pano-stage",
            width: "1600",
            height: "800"
          }, null, -1)),
          H[2] || (H[2] = _e("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            _e("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          m.value ? La("", !0) : (xe(), $e(ze, { key: 0 }, [
            tn(Ob, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            tn(Ib, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          tn(jb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          tn(xb, { buttons: p.value }, null, 8, ["buttons"]),
          H[3] || (H[3] = _e("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          _e("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: sl(ce).fullscreen
          }, null, 8, Gb),
          H[4] || (H[4] = _e("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? La("", !0) : (xe(), zi(Db, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Ub)
    ])) : La("", !0);
  }
}, Gc = "state_json", Hr = "sticker_image_1", vc = "external_image", _c = "pano_sticker_input_images", Va = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Oe = Math.PI / 180, Ur = 180 / Math.PI, ss = 24, Wb = 4, qb = 4, yo = /* @__PURE__ */ new Map(), Kc = /* @__PURE__ */ new Map(), Lt = {
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
function Yb(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function Xb(t) {
  return 1 - Math.pow(1 - t, 3);
}
function Zb(t) {
  return t * t * t;
}
function Wn(t, e, n) {
  return { x: t, y: e, z: n };
}
function wa(t, e) {
  return Wn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function xa(t, e) {
  return Wn(t.x * e, t.y * e, t.z * e);
}
function Sn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Sa(t, e) {
  return Wn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function bi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Wn(t.x / e, t.y / e, t.z / e);
}
function Hn(t, e) {
  const n = t * Oe, r = e * Oe, o = Math.cos(r);
  return Wn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Na(t) {
  return {
    yaw: Fe(Math.atan2(t.x, t.z) * Ur),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Ur, -90, 90)
  };
}
function ir(t, e) {
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
  const m = j((c * r + u * o) / f, 0, 1), y = Number(e.x || 0) + r * m, p = Number(e.y || 0) + o * m, w = Number(t.x || 0) - y, M = Number(t.y || 0) - p;
  return w * w + M * M;
}
function Nn(t, e, n) {
  return t + (e - t) * n;
}
function Mn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function Jb(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Ma = { fillStyle: "", url: "" };
function Qb(t, e, n) {
  if (Ma.url && Ma.fillStyle === String(t || ""))
    return Ma.url;
  const r = Jb(`
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
    r: j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: j(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function an(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function tv(t) {
  return Va.some((e) => za(t, e.color));
}
function xc(t, e, n) {
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
function Sc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Bf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Rh(t, e) {
  const n = Bf(t, 1), r = Bf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), f = (w, M) => M ? f(M, w % M) : w, m = f(c, u) || 1, y = Math.max(1, Math.round(c / m)), p = Math.max(1, Math.round(u / m));
  return `${y}:${p}`;
}
function Wc(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Oe, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Oe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ev(t) {
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
  return ev(e) || Rh(e, 1);
}
function nv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Br(e), e;
}
function vi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Br(t);
}
function rv() {
  if (document.getElementById("pano-suite-style-link")) return;
  const t = document.createElement("link");
  t.id = "pano-suite-style-link", t.rel = "stylesheet", t.href = new URL("./pano_editor.css", import.meta.url).toString(), document.head.appendChild(t);
}
const Oh = "pano_suite.ui_settings.v1", Fh = "pano_suite.node_grid_visibility.v1";
let Ni = null, Vn = null, Pa = { text: null, parsed: null };
function Co(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function iv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Oh)) || "").trim();
    if (!e) return Ni ? Co(Ni) : null;
    const n = JSON.parse(e), r = Co(n);
    return Ni = r, r;
  } catch {
    return Ni ? Co(Ni) : null;
  }
}
function ov(t) {
  var n;
  const e = Co(t);
  Ni = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Oh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function $h() {
  var t;
  if (Vn && typeof Vn == "object")
    return Vn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Fh)) || "").trim();
    if (!e)
      return Vn = {}, Vn;
    const n = JSON.parse(e);
    return Vn = n && typeof n == "object" ? n : {}, Vn;
  } catch {
    return Vn = {}, Vn;
  }
}
function av(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = $h()[n];
  return typeof o == "boolean" ? o : !!e;
}
function sv(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = $h();
  r[n] = !!e, Vn = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Fh, JSON.stringify(r));
  } catch {
  }
}
function cv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function lv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function uv(t) {
  var r, o;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Gf(t) {
  const { paintCount: e, maskCount: n } = uv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function Kf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function fv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : nv(e)) : [];
}
function dv(t, e = 2048, n = "#00ff00") {
  const r = iv(), o = {
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
      assets: cv(u.assets),
      stickers: lv(u.stickers),
      shots: fv(u.shots),
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
function hv(t, e) {
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
function pv(t, e) {
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
function Wf(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function Hh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function gv(t, e) {
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
function mv(t, e, n = null) {
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
  return !r && n != null && (r = gv(t == null ? void 0 : t.graph, n)), r;
}
function cs(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((o = Qe) == null ? void 0 : o.apiURL) == "function" ? Qe.apiURL(r) : r;
}
function yv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function bv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function vv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function zh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (yv(e)) return [e];
  const { filename: n, subfolder: r } = bv(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => cs({
    filename: n,
    subfolder: r,
    type: c
  }));
  return vv([...o, e]);
}
function _v(t) {
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
function Vi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Vi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return cs({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Vi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : cs(t);
}
function wv(t, e = -1) {
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
    const o = Vi(r);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function xv(t, e, n, r = null) {
  var w;
  const o = Ao(t == null ? void 0 : t.id), c = Array.isArray((w = o == null ? void 0 : o.ui) == null ? void 0 : w[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, f = Vi(u);
  if (!f) return null;
  const m = `__ui__${e}`, y = n.get(m);
  if (y && y.__panoSrc === f) return y;
  const p = new Image();
  return p.__panoSrc = f, p.onload = () => {
    typeof r == "function" && r(p);
  }, p.src = f, n.set(m, p), p;
}
function Sv(t, e) {
  var D, H;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = r.findIndex((S) => String((S == null ? void 0 : S.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = r[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Hh(t.graph, u), { originId: m, originSlot: y } = Vh(f);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const p = mv(t, o, m), w = Number(y || 0);
  if (!p) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((D = dn) == null ? void 0 : D.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(p) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const S = [];
    w >= 0 && w < M.length && S.push(M[w]), S.push(...M);
    const W = Nc(S);
    if (W.length) return { src: W[0], srcCandidates: W, sourceType: "appNodeImageUrls", inputName: n };
  }
  const k = Ao((p == null ? void 0 : p.id) ?? m), A = wv(k, w), C = Nc(A);
  if (C.length) return { src: C[0], srcCandidates: C, sourceType: "nodeOutputs", inputName: n };
  const $ = Array.isArray(p == null ? void 0 : p.imgs) ? p.imgs : [];
  if ($.length) {
    const S = [];
    w >= 0 && w < $.length && S.push($[w]), S.push(...$);
    const W = Nc(S);
    if (W.length) return { src: W[0], srcCandidates: W, sourceType: "nodeImgs", inputName: n };
  }
  const R = (H = p == null ? void 0 : p.widgets) == null ? void 0 : H.find((S) => String((S == null ? void 0 : S.name) || "").toLowerCase() === "image");
  if (R) {
    let S = Vi(R.value);
    if (S && !S.includes("/") && !S.includes(":") && (p.comfyClass === "LoadImage" || p.type === "LoadImage") && (S = Qe.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`)), S) return { src: S, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Nv(t, e, n, r = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = zh(o);
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
function Mv(t, e, n, r = null) {
  const o = Array.isArray(n) ? n.map((A) => String(A || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), f = t.__panoLinkedInputImageCache.get(c);
  if (f && f.srcRaw === u && f.img) return f.img;
  const m = [], y = /* @__PURE__ */ new Set();
  if (o.forEach((A) => {
    zh(A).forEach((C) => {
      const $ = String(C || "").trim();
      !$ || y.has($) || (y.add($), m.push($));
    });
  }), !m.length) return null;
  const p = new Image(), w = { srcRaw: u, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(c, w);
  let M = -1;
  const k = () => {
    var C, $;
    if (M += 1, M >= m.length) {
      try {
        ($ = (C = t.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || $.call(C, c);
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
function jh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const o = Sv(t, r);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function qf(t, e = [], n = null, r = "") {
  const o = Array.isArray(e) ? e : [e], c = jh(t, o), u = String(r || o.join("|") || "image_exact"), f = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (f.length) return Mv(t, u, f, n);
  const m = String((c == null ? void 0 : c.src) || "").trim();
  return m ? Nv(t, u, m, n) : null;
}
function Io(t, e, n = {}) {
  var ia, Nu, Mu, oa, Pu, ku, aa, Cu;
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, c = r, u = hv(t, e);
  rv();
  const f = Ci(t, "output_preset"), m = Ci(t, "bg_color"), y = Ci(t, Gc), p = dv(
    String((y == null ? void 0 : y.value) || ""),
    Wf(f == null ? void 0 : f.value, 2048),
    String((m == null ? void 0 : m.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), (Nu = (ia = t.__panoDomPreview) == null ? void 0 : ia.requestDraw) == null || Nu.call(ia), (Mu = t.setDirtyCanvas) == null || Mu.call(t, !0, !0), (Pu = (oa = t.graph) == null ? void 0 : oa.setDirtyCanvas) == null || Pu.call(oa, !0, !0), (Cu = (aa = (ku = dn) == null ? void 0 : ku.canvas) == null ? void 0 : aa.setDirty) == null || Cu.call(aa, !0, !0), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = document.createElement("div");
  document.body.appendChild(w);
  const M = v1(Kb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: Dh(e),
    paintSwatches: Va.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Mn(i.color, 1)
    })),
    onClose: () => fi()
  });
  try {
    M.mount(w);
  } catch (i) {
    try {
      M.unmount();
    } catch {
    }
    throw w.remove(), i;
  }
  const k = w.querySelector(".pano-modal-overlay"), A = w.querySelector(".pano-modal"), C = A == null ? void 0 : A.querySelector("canvas"), $ = A == null ? void 0 : A.querySelector(".pano-stage-wrap");
  if (!k || !A || !C || !$)
    throw M.unmount(), w.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const R = document.createElement("div");
  R.setAttribute("aria-hidden", "true"), R.style.position = "absolute", R.style.left = "0", R.style.top = "0", R.style.pointerEvents = "none", R.style.zIndex = "12", R.style.display = "none", R.style.willChange = "transform,width,height,background,border-radius", $ == null || $.appendChild(R);
  const D = document.createElement("div");
  D.className = "pano-paint-size-preview", D.setAttribute("aria-hidden", "true");
  const H = document.createElement("div");
  H.className = "pano-paint-size-preview-sample", D.appendChild(H), $ == null || $.appendChild(D);
  const S = C.getContext("2d"), W = A.querySelector("[data-side]"), Q = A.querySelectorAll("[data-view]"), at = A.querySelector(".pano-view-toggle"), et = A.querySelector("[data-fov-value]"), Y = A.querySelector("[data-selection-menu]"), O = A.querySelector("[data-action='toggle-output-preview-size']"), rt = A.querySelector("[data-tool-ui-action='add-or-look']"), mt = A.querySelector("[data-view='frame']"), lt = A.querySelector("[data-action='toggle-fullscreen']"), Z = A.querySelector("[data-tooltip]"), U = A.querySelector("[data-tool-rail]"), st = A.querySelector("[data-paint-dock]"), it = Array.from(A.querySelectorAll("[data-paint-pane]")), ct = A.querySelector("[data-paint-color-row]"), wt = A.querySelector("[data-paint-color-pop]"), Rt = A.querySelector("[data-paint-color-preview]"), J = A.querySelector("[data-paint-color-sv]"), Mt = A.querySelector("[data-paint-color-sv-cursor]"), Bt = A.querySelector("[data-paint-hue-strip]"), ye = A.querySelector("[data-paint-hue-handle]"), z = A.querySelector("[data-paint-alpha-slider]"), Pt = A.querySelector("[data-paint-alpha-value]"), St = A.querySelector("[data-paint-color-history-wrap]"), Dt = A.querySelector("[data-paint-color-history]"), zt = Array.from(A.querySelectorAll("[data-paint-size-row]")), $t = Array.from(A.querySelectorAll("[data-paint-clear-row]")), Gt = Array.from(A.querySelectorAll("[data-paint-layer-clear-current]")), I = Array.from(A.querySelectorAll("[data-paint-size-slider]")), L = Array.from(A.querySelectorAll("[data-paint-size-value]"));
  let V = 0, q = 0;
  e === "cutout" && (C.style.opacity = "0"), o && (W == null || W.remove(), A.classList.add("pano-modal-readonly"));
  function K(i) {
    st && st.classList.toggle("is-hidden", !i);
  }
  const X = () => {
    if (!h.customPaintSessionStart) return;
    if (za(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (tv(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      fn(h.customPaintColor),
      ...h.customPaintHistory.filter((a) => !za(a, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, vt = (i = !1) => {
    !wt || wt.hidden || (i ? X() : h.customPaintSessionStart = null, wt.hidden = !0);
  }, bt = () => {
    wt && (wt.hidden && (h.customPaintSessionStart = fn(h.customPaintColor)), wt.hidden = !1);
  };
  A.addEventListener("pointerdown", (i) => {
    ea(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), vt(!0), e === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Xt(), ft())));
  });
  const pt = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, nt = JSON.stringify(Kf(p)), h = {
    mode: "pano",
    selectedId: pt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: ub(80, { entries: [nt], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: rr,
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
    showGrid: av(t == null ? void 0 : t.id, !0),
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
  e === "stickers" && (h.selectedId = null, p.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
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
    Zt.active !== a && (Zt.active = a, $.classList.toggle("drop-active", a));
  }
  function nn(i, a, s = h.viewFov, l = 140, d = 620) {
    const g = q1(h.viewYaw, i), _ = a - h.viewPitch, b = s - h.viewFov, v = Math.hypot(g, _) + Math.abs(b) * 0.6, N = Math.round(j(l + v * 2.2, l, d));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: g
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, ft();
  }
  gp();
  function rn() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function Ie() {
    const i = p.painting || (p.painting = ko(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Ge(i = "paint") {
    var d, g;
    const a = Array.isArray((g = (d = p.painting) == null ? void 0 : d[i]) == null ? void 0 : g.strokes) ? p.painting[i].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function pn() {
    return Ge("paint");
  }
  function dr(i, a) {
    const s = String(a || "").trim();
    return s ? `${i === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function hr(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ke(i) {
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
  function _l(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return null;
    const l = Ie();
    let d = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return d ? a != null && (d.z_index = Math.max(0, Number(a || 0))) : (d = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? Ss() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Uh() {
    const i = new Set(pn()), s = Ie().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      s.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ss(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), p.painting.groups = s, s;
  }
  function Bh(i, a, s) {
    const l = [];
    for (const T of s) {
      const F = T == null ? void 0 : T.geometry, G = (F == null ? void 0 : F.geometryKind) === "lasso_fill" ? F == null ? void 0 : F.points : (F == null ? void 0 : F.processedPoints) || (F == null ? void 0 : F.rawPoints) || (F == null ? void 0 : F.points) || [];
      Array.isArray(G) && l.push(...G);
    }
    if (!l.length) return null;
    let d = 0, g = 0;
    l.forEach((T) => {
      d += Number((T == null ? void 0 : T.u) || 0), g += Number((T == null ? void 0 : T.v) || 0);
    });
    const _ = d / l.length;
    let b = 1 / 0, v = -1 / 0, N = 1 / 0, x = -1 / 0;
    l.forEach((T) => {
      const F = Ki(Number((T == null ? void 0 : T.u) || 0), _);
      b = Math.min(b, F), v = Math.max(v, F);
      const G = Number((T == null ? void 0 : T.v) || 0);
      N = Math.min(N, G), x = Math.max(x, G);
    });
    const P = s.reduce((T, F) => {
      const G = _r(String((F == null ? void 0 : F.toolKind) || "pen")), tt = on[G] || on[rr], gt = Math.max(1, Number((F == null ? void 0 : F.size) || 10)) * Math.max(0.1, Number((tt == null ? void 0 : tt.sizeScale) ?? 1));
      return Math.max(T, gt);
    }, 0), E = Math.max(35e-4, P / 2048);
    return {
      centerUv: { u: ((_ + (b + v) * 0.5) % 1 + 1) % 1, v: j((N + x) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - b) * 0.5 + E,
      halfH: (x - N) * 0.5 + E,
      uvPad: E
    };
  }
  function Er(i, a, s) {
    const l = String(i || "").trim();
    if (!l) return null;
    const d = Ie().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === l);
    if (!d) return null;
    if (!d.frame) {
      const g = s || yn(l, a);
      d.frame = Bh(l, a, g);
    }
    return d.frame;
  }
  function Tr() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), a = Uh().map((d) => ({
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
    return [...i, ...a, ...s].sort((d, g) => Number(d.z_index || 0) - Number(g.z_index || 0));
  }
  function Bi(i = !0) {
    var s, l, d, g, _, b;
    const a = Tr().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (i) {
      const v = String(((l = (s = h.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), N = String(((g = (d = h.interaction) == null ? void 0 : d.stroke) == null ? void 0 : g.layerKind) || "").trim(), x = String(((b = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && N === "paint" && x !== "eraser" && !a.includes(v) && a.push(v);
    }
    return a;
  }
  function Ns(i = !0) {
    var b, v, N, x, P, E;
    const a = Tr();
    if (!i) return a;
    const s = String(((v = (b = h.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((x = (N = h.interaction) == null ? void 0 : N.stroke) == null ? void 0 : x.layerKind) || "").trim(), d = String(((E = (P = h.interaction) == null ? void 0 : P.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || d === "eraser" || a.some((T) => T.type === "strokeGroup" && String(T.actionGroupId || "") === s))
      return a;
    const g = be();
    let _ = a.reduce((T, F) => Math.max(T, Number((F == null ? void 0 : F.z_index) || 0)), -1) + 1;
    return g && Ae(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((T, F) => Number((T == null ? void 0 : T.z_index) || 0) - Number((F == null ? void 0 : F.z_index) || 0));
  }
  function Gh() {
    return Ie().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => ni(dr("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Kh() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => ei(hr((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Vo(i = h.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function wl(i = h.interaction) {
    if (e !== "cutout") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return Vo(i) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Wh(i = h.interaction) {
    if (!wl(i)) return 0;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function Gi() {
    var d, g, _, b, v, N, x;
    const i = h.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!Vo(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const P = ((d = i == null ? void 0 : i.stroke) == null ? void 0 : d.geometry) || null, E = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.layerKind) || ""), T = ((_ = P == null ? void 0 : P.rawPoints) == null ? void 0 : _.length) ?? ((b = P == null ? void 0 : P.points) == null ? void 0 : b.length) ?? 0, F = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${E || "paint"}_${a}_live${F}_${T}_${h.livePaintInteractionRevision}`;
    }
    const s = String(((v = i == null ? void 0 : i.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((x = i == null ? void 0 : i.item) == null ? void 0 : x.id) || "");
    return `_${a}_${s || l || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Ms() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function mn(i) {
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
    const a = Ke(i);
    if (!a) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: hr(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function We(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = Ke(i.rasterObjectId || i.id || "");
    return !!a && !!ei(hr(a));
  }
  function ni(i) {
    const a = Ui(i), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = Ie().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === s || String((d == null ? void 0 : d.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: dr("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Ae(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), s = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!ni(dr(s, a));
  }
  function yn(i, a = null) {
    const s = Ui(i, a), l = String(s.actionGroupId || "").trim();
    return l ? ui(s.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function qh(i, a = "paint") {
    var g, _, b;
    const s = String(i || "").trim(), d = `${String(a || "paint").trim() || "paint"}:${s}:${h.mode}:${Rr()}`;
    if (h.mode === "frame") {
      const v = ie(), N = String((v == null ? void 0 : v.id) || ""), x = v ? Ye(v) : null;
      return `${d}:frame:${N}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}:${Math.round(Number(((g = h.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = h.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = h.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function zo(i, a, s) {
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
  function xl(i, a = null, s = null) {
    var N;
    const l = Ui(i, a), d = Array.isArray(s) ? s : yn(l.actionGroupId, l.layerKind), g = [];
    if (d.forEach((x) => {
      const P = (x == null ? void 0 : x.geometry) || null, E = (P == null ? void 0 : P.geometryKind) === "lasso_fill" ? P == null ? void 0 : P.points : (P == null ? void 0 : P.processedPoints) || (P == null ? void 0 : P.rawPoints) || (P == null ? void 0 : P.points) || [];
      Array.isArray(E) && g.push(...E);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((N = g[0]) == null ? void 0 : N.u) || 0);
    let b = 0, v = 0;
    return g.forEach((x) => {
      b += _ + Ki(Number((x == null ? void 0 : x.u) || 0), _), v += Number((x == null ? void 0 : x.v) || 0);
    }), {
      u: (b / g.length % 1 + 1) % 1,
      v: j(v / g.length, 0, 1)
    };
  }
  function jo(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), d), b = Number(i.v || 0) - g, v = Number(l || 0) * Oe, N = Math.cos(v), x = Math.sin(v), P = Math.max(0.02, Number(s || 1)), E = (_ * N - b * x) * P, T = (_ * x + b * N) * P;
    return {
      ...i,
      u: ((d + E) % 1 + 1) % 1,
      v: j(g + T, 0, 1)
    };
  }
  function Sl(i, a, s, l = null, d = null, g = null) {
    const _ = Ui(i, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ui(_.layerKind), N = Array.isArray(l) ? new Map(l.map((P) => [String((P == null ? void 0 : P.id) || ""), P])) : null;
    let x = !1;
    if (v.forEach((P) => {
      if (String((P == null ? void 0 : P.actionGroupId) || "").trim() !== b) return;
      const E = (N == null ? void 0 : N.get(String((P == null ? void 0 : P.id) || ""))) || P, T = P == null ? void 0 : P.geometry, F = E == null ? void 0 : E.geometry;
      !T || !F || (Array.isArray(F.points) && (T.points = F.points.map((G) => zo(G, a, s)), x = !0), Array.isArray(F.rawPoints) && (T.rawPoints = F.rawPoints.map((G) => zo(G, a, s)), x = !0), Array.isArray(F.processedPoints) && (T.processedPoints = F.processedPoints.map((G) => zo(G, a, s)), x = !0));
    }), x && g) {
      const P = Ie().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === b);
      P && (P.frame = {
        ...g,
        centerUv: {
          u: ((g.centerUv.u + a) % 1 + 1) % 1,
          v: j(g.centerUv.v + s, 0, 1)
        }
      });
    }
    return x;
  }
  function Nl(i, a = 1, s = 0, l = null, d = null, g = null) {
    const _ = Ui(i, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ui(_.layerKind), N = Array.isArray(l) ? l : yn(b, _.layerKind), x = Array.isArray(N) ? new Map(N.map((T) => [String((T == null ? void 0 : T.id) || ""), T])) : null, P = (g == null ? void 0 : g.centerUv) ?? xl(b, _.layerKind, N);
    let E = !1;
    if (v.forEach((T) => {
      if (String((T == null ? void 0 : T.actionGroupId) || "").trim() !== b) return;
      const F = (x == null ? void 0 : x.get(String((T == null ? void 0 : T.id) || ""))) || T, G = T == null ? void 0 : T.geometry, tt = F == null ? void 0 : F.geometry;
      !G || !tt || (Array.isArray(tt.points) && (G.points = tt.points.map((gt) => jo(gt, P, a, s)), E = !0), Array.isArray(tt.rawPoints) && (G.rawPoints = tt.rawPoints.map((gt) => jo(gt, P, a, s)), E = !0), Array.isArray(tt.processedPoints) && (G.processedPoints = tt.processedPoints.map((gt) => jo(gt, P, a, s)), E = !0));
    }), E && g) {
      const T = Number(a || 1), F = Ie().find((G) => String((G == null ? void 0 : G.actionGroupId) || "") === b);
      F && (F.frame = {
        centerUv: g.centerUv,
        rot_deg: Number(g.rot_deg || 0) + Number(s || 0),
        halfW: g.halfW * T,
        halfH: g.halfH * T,
        uvPad: g.uvPad
      });
    }
    return E;
  }
  function Ml(i, a, s, l = null) {
    const d = Ke(i);
    if (!d) return !1;
    const g = ln().find((x) => String((x == null ? void 0 : x.id) || "").trim() === d);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, b = (_ == null ? void 0 : _.transform) || {}, v = Number(b.du || 0) + Number(a || 0), N = j(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = v, g.transform.dv = N, !0;
  }
  function be() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const a = ni(i);
    if (a) return a;
    const s = ei(i);
    return s || (e === "cutout" ? Ms().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : rn().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function In() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || s.has(d)) return;
      s.add(d);
      const g = d === String(h.selectedId || "") ? be() : ni(d) || ei(d) || (e === "cutout" ? Ms().find((_) => String((_ == null ? void 0 : _.id) || "") === d) : rn().find((_) => String((_ == null ? void 0 : _.id) || "") === d));
      g && a.push(g);
    }), a;
  }
  function Ps(i = null) {
    const a = Array.isArray(i) ? i : In();
    if (!a || a.length < 2) return null;
    const s = a.map((N) => De(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.x) || 0))), d = s.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.y) || 0))), g = Math.min(...l), _ = Math.max(...l), b = Math.min(...d), v = Math.max(...d);
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
  function Yh(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(h.selectedIds) && h.selectedIds.includes(a);
  }
  function Pl() {
    const i = be();
    return i ? Ae(i) || We(i) ? "stroke" : mn(i) ? "frame" : "image" : null;
  }
  function pr(i) {
    if (!i || typeof i != "object") return !1;
    if (Ae(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), s = Ie().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (We(i)) {
      const a = Ke(i.rasterObjectId || i.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return i.locked === !0;
  }
  function ks(i = null) {
    const a = Array.isArray(i) ? i : In();
    return a.length > 0 && a.every((s) => pr(s));
  }
  function Xh(i, a) {
    const s = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Ae(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), d = Ie().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    if (We(i)) {
      const l = Ke(i.rasterObjectId || i.id || ""), d = ln().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !d || d.locked === s ? !1 : (d.locked = s, !0);
    }
    return i.locked === s ? !1 : (i.locked = s, !0);
  }
  function Zh() {
    if (r) return;
    const i = In();
    if (!i.length) return;
    const a = !ks(i);
    let s = !1;
    i.forEach((l) => {
      Xh(l, a) && (s = !0);
    }), s && (le(), Se(), Xt(), ft());
  }
  function Uo(i) {
    h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && Le(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && mn(i) ? p.active.selected_shot_id = i.id || null : i ? mn(i) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function Jh(i, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), h.selectedIds = s;
    const d = String(a || "").trim();
    h.selectedId = d && s.includes(d) ? d : s[s.length - 1] || null;
    const g = be();
    p.active.selected_sticker_id = g && Le(g) && g.id || null, g && mn(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function Qh() {
    const i = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const d = Pe(s) ? String(s.id || Hr) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: d
      };
    });
    return [...i, ...a];
  }
  function tp(i) {
    return i === "frame" ? Lt.camera : i === "stroke" ? Lt.paintbrush_vertical_tool : Lt.image;
  }
  function kl(i) {
    return !i || !i.item ? ka(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${tp(i.kind)}</span><span>${ka(String(i.label || ""))}</span>`;
  }
  function Cl() {
    return Ss();
  }
  function Pe(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Hr || String(i.source_kind || "") === vc;
  }
  function ri(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function ep(i) {
    return Pe(i) && ri(i) ? lh : 1;
  }
  function np() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function rp() {
    return String(np() || "") === "lasso_fill";
  }
  function ip() {
    if (r) return;
    const i = be();
    !i || !Pe(i) || (i.visible = ri(i), bn(), le(), Se(), ne(), Xt(), ft());
  }
  function op() {
    if (r || e !== "stickers") return;
    const i = be();
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
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), le(), Se(), ne(), Xt(), ft();
  }
  function ap(i) {
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
  function sp() {
    const i = be();
    if (!i || !Pe(i)) return !1;
    const a = ap(i);
    if (!a) return !1;
    const s = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(s(i.yaw_deg, a.yaw_deg) && s(i.pitch_deg, a.pitch_deg) && s(i.hFOV_deg, a.hFOV_deg) && s(i.vFOV_deg, a.vFOV_deg) && s(i.rot_deg, a.rot_deg));
  }
  function Al(i) {
    var s;
    const a = Ao(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[i]) ? a.ui[i] : Array.isArray(a == null ? void 0 : a[i]) ? a[i] : [];
  }
  function cp(i) {
    const a = Ao(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, i) ? a.ui[i] : a && Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
  }
  function lp(i, a = null) {
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
    const s = Al(i), l = Array.isArray(s) && s.length ? s[0] : null, d = Vi(l);
    if (!d) return null;
    const g = `__ui__${i}`, _ = yt.get(g);
    if (_ && _.__panoSrc === d) return _;
    const b = new Image();
    return b.__panoSrc = d, b.onload = () => {
      typeof a == "function" ? a(b) : ft();
    }, b.src = d, yt.set(g, b), b;
  }
  function Il(i = null) {
    const a = qf(t, ["sticker_image"], i, "sticker_image_exact");
    return a || Cs(_c, i);
  }
  function El(i) {
    const a = String(i || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Lr(i, a, s) {
    const l = Math.max(1, Number(a || 1)), d = Math.max(1, Number(s || 1)), g = j(Number(i || 30), 0.1, 179) * Oe, _ = 2 * Math.atan(Math.tan(g * 0.5) * (d / l));
    return j(_ * Ur, 0.1, 179);
  }
  function up(i) {
    const a = String(i || "").trim();
    if (!a) return null;
    try {
      const s = JSON.parse(a);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let d = null;
      if (typeof l == "number" && Number.isInteger(l) ? d = l : typeof l == "string" && /^\d+$/.test(l) && (d = Number.parseInt(l, 10)), d !== 1) return null;
      const g = s.pose;
      if (!g || typeof g != "object") return null;
      const _ = Number(g.yaw_deg), b = Number(g.pitch_deg), v = Number(g.roll_deg), N = Number(g.hFOV_deg);
      if (![_, b, v, N].every((T) => Number.isFinite(T))) return null;
      let x = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(x, -0) && (x = 0);
      const P = {
        yaw_deg: x,
        pitch_deg: j(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(N, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (P.source_aspect = E), P;
    } catch {
      return null;
    }
  }
  function Tl(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), g = Wc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Fe(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function fp(i) {
    var b;
    if (!i || typeof i != "object") return Tl(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), g = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(d) && Number.isFinite(g)) {
      const v = j(d, 0.1, 179) * Oe, N = j(g, 0.1, 179) * Oe, x = Math.tan(N * 0.5);
      if (Math.abs(x) > 1e-6) {
        const P = Math.tan(v * 0.5) / x;
        Number.isFinite(P) && P > 0 && (_ = P);
      }
    }
    if (i != null && i.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[i.asset_id])) {
      const v = p.assets[i.asset_id], N = Number((v == null ? void 0 : v.w) || 0), x = Number((v == null ? void 0 : v.h) || 0);
      N > 0 && x > 0 && (_ = N / x);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Fe(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function dp(i) {
    var l, d, g, _, b;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(i)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const v = Hh(t.graph, s), { originId: N, originSlot: x } = Vh(v), P = Ao(N), E = [
        P == null ? void 0 : P.output,
        P == null ? void 0 : P.result,
        (l = P == null ? void 0 : P.data) == null ? void 0 : l.output,
        (d = P == null ? void 0 : P.data) == null ? void 0 : d.result,
        (g = P == null ? void 0 : P.ui) == null ? void 0 : g.output,
        (_ = P == null ? void 0 : P.ui) == null ? void 0 : _.result
      ];
      for (const T of E) {
        if (!Array.isArray(T)) continue;
        const F = Number(x || 0), G = T[F];
        if (typeof G == "string" && G.trim()) return G;
      }
    }
    return String(((b = Ci(t, i)) == null ? void 0 : b.value) || "");
  }
  function hp(i, a, s) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : up(a);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Lr(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Lr(30, d, g),
      rot_deg: 0
    };
  }
  function Ll(i = "sync") {
    if (e !== "stickers" || r) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((T) => String((T == null ? void 0 : T.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = Il(() => {
      var T;
      (T = t.__panoExternalStickerSync) == null || T.call(t, "image-loaded");
    }), d = lp(cp("pano_sticker_input_pose"), null), g = dp("sticker_state"), _ = El(d && typeof d == "object" ? JSON.stringify(d) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((T) => String((T == null ? void 0 : T.id) || "") === Hr);
    if (s == null) {
      v >= 0 && (b.splice(v, 1), h.selectedId === Hr && (h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null), Se(), ne(), Xt(), ft());
      return;
    }
    const N = b.reduce((T, F) => Math.max(T, Number((F == null ? void 0 : F.z_index) || 0)), -1);
    let x = v >= 0 ? b[v] : null;
    const P = !x || Number(x.source_link_id ?? -1) !== Number(s) || String(x.source_state_hash || "") !== _;
    x || (x = {
      id: Hr,
      source_kind: vc
    }, b.push(x)), x.id = Hr, x.source_kind = vc, x.source_link_id = Number(s), x.source_state_hash = _, x.visible = x.visible !== !1;
    let E = !1;
    if (P) {
      const T = hp(d, g, l);
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
    E && (Se(), ne(), Xt()), ft();
  }
  function ii(i = {}) {
    const s = i.preservePanelValues !== !1 ? be() : null;
    s && (h.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: vi(s)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function pp() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = i.find((d) => String((d == null ? void 0 : d.id) || "") === a) || i[0];
    s && (p.active.selected_shot_id = s.id || null, h.viewYaw = Fe(Number(s.yaw_deg || 0)), h.viewPitch = j(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function Bo() {
    if (!rt) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (rt.innerHTML = Lt.crosshair, rt.setAttribute("aria-label", "Look at frame"), rt.setAttribute("data-tip", "Look at frame")) : (rt.innerHTML = Lt.plus_circle, rt.setAttribute("aria-label", "Add frame"), rt.setAttribute("data-tip", "Add frame"));
  }
  function Go() {
    const i = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    h.mode === "frame" && !i && (h.mode = "pano"), mt && (mt.disabled = !i, mt.setAttribute("aria-disabled", i ? "false" : "true")), Q.forEach((a) => {
      const s = a.dataset.view === h.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), at && at.setAttribute("data-selected", h.mode), ou() ? ve(h.pointerPos) : C.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function gp() {
    const a = $l({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function As() {
    const i = Hn(h.viewYaw, h.viewPitch);
    let a = Wn(0, 1, 0);
    Math.abs(Sn(i, a)) > 0.999 && (a = Wn(0, 0, 1));
    const s = bi(Sa(a, i)), l = bi(Sa(i, s));
    return { right: s, up: l, fwd: i };
  }
  function Wi(i) {
    const { right: a, up: s, fwd: l } = As(), d = Sn(i, a), g = Sn(i, s), _ = Sn(i, l);
    if (_ <= 1e-5) return null;
    const b = C.width, v = C.height, N = h.viewFov * Oe, x = 2 * Math.atan(Math.tan(N / 2) * (v / b)), P = b / 2 / Math.tan(N / 2), E = v / 2 / Math.tan(x / 2);
    return {
      x: b / 2 + d / _ * P,
      y: v / 2 - g / _ * E,
      z: _
    };
  }
  function Is(i, a) {
    const { right: s, up: l, fwd: d } = As(), g = C.width, _ = C.height, b = h.viewFov * Oe, v = 2 * Math.atan(Math.tan(b / 2) * (_ / g)), N = (i - g / 2) / (g / 2) * Math.tan(b / 2), x = (_ / 2 - a) / (_ / 2) * Math.tan(v / 2), P = wa(wa(xa(s, N), xa(l, x)), d);
    return bi(P);
  }
  function gr() {
    const i = C.width, a = C.height, s = 2;
    if (i / Math.max(a, 1) >= s) {
      const b = a, v = b * s;
      return { x: (i - v) * 0.5, y: 0, w: v, h: b };
    }
    const d = i, g = d / s;
    return { x: 0, y: (a - g) * 0.5, w: d, h: g };
  }
  function mp(i) {
    var _;
    if (i && typeof i == "object" && (Pe(i) || i.external === !0))
      return Il(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const a = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const s = yt.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], d = _v(l);
    if (!d) return null;
    const g = new Image();
    return g.onload = () => ft(), g.src = d, yt.set(a, g), g;
  }
  function Dl(i, a = null) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ct.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const d = new Image();
    return d.onload = () => {
      typeof a == "function" && a();
    }, d.src = s, Ct.set(s, d), d;
  }
  function yp(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = It.get(a);
    if (s) return s.ready ? s : null;
    const l = Dl(i, () => {
      const x = It.get(a);
      x && (x.ready = !1), ft({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), g = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = d, _.height = g;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, d, g), b.drawImage(l, 0, 0, d, g);
    const v = b.getImageData(0, 0, d, g).data, N = { canvas: _, width: d, height: g, alpha: v, ready: !0 };
    return It.set(a, N), N;
  }
  function bp(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), d), b = Number(i.v || 0) - g, v = Math.max(0.02, Number(s || 1)), N = Number(l || 0) * Oe, x = Math.cos(N), P = Math.sin(N), E = _ / v, T = b / v, F = E * x + T * P, G = -E * P + T * x;
    return {
      ...i,
      u: ((d + F) % 1 + 1) % 1,
      v: g + G
    };
  }
  function vp(i, a) {
    if (!i || !a) return null;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return null;
    const l = (i == null ? void 0 : i.transform) || {}, d = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = bp(
      g,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const N = Ki(Number(_.u || 0), Number(s.u0 || 0)) / b, x = (Number(_.v || 0) - Number(s.v0 || 0)) / v;
    if (N < 0 || N > 1 || x < 0 || x > 1) return 0;
    const P = yp(i);
    if (!P) return null;
    const E = j(Math.floor(N * P.width), 0, P.width - 1), T = j(Math.floor(x * P.height), 0, P.height - 1);
    return Number(P.alpha[(T * P.width + E) * 4 + 3] || 0);
  }
  function Rl(i, a, s, l = null) {
    if (!(a != null && a.visible) || !ir(s, a.corners)) return !1;
    const d = l || vn(s, performance.now()), g = vp(i, d);
    return g === null ? !0 : g > 8;
  }
  function _p() {
    var l, d, g, _, b, v, N, x;
    const i = ((d = (l = h.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, Bi(!1))) || null, a = Math.max(1, Number(((g = i == null ? void 0 : i.descriptor) == null ? void 0 : g.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((v = i == null ? void 0 : i.descriptor) == null ? void 0 : v.height) || ((x = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : x.height) || 1024));
    return { width: a, height: s };
  }
  function Ol(i = null) {
    var b, v, N, x, P, E, T, F, G, tt, gt, Nt, dt;
    si();
    const a = Array.isArray(i) ? i : Bi(!1), s = ((v = (b = h.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, a)) || null, l = Math.max(1, Number(((N = s == null ? void 0 : s.descriptor) == null ? void 0 : N.width) || ((P = (x = s == null ? void 0 : s.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : P.width) || 2048)), d = Math.max(1, Number(((E = s == null ? void 0 : s.descriptor) == null ? void 0 : E.height) || ((F = (T = s == null ? void 0 : s.displayPaint) == null ? void 0 : T.canvas) == null ? void 0 : F.height) || 1024));
    (!h._rasterComposeSurface || Number(((G = h._rasterComposeSurface.canvas) == null ? void 0 : G.width) || 0) !== l || Number(((tt = h._rasterComposeSurface.canvas) == null ? void 0 : tt.height) || 0) !== d) && (h._rasterComposeSurface = Dr(l, d));
    const g = h._rasterComposeSurface;
    g.ctx.clearRect(0, 0, l, d);
    let _ = !1;
    for (const _t of Tr()) {
      if (_t.type === "strokeGroup") {
        const ht = ((Nt = (gt = h.paintEngine) == null ? void 0 : gt.getGroupDisplayCanvas) == null ? void 0 : Nt.call(gt, _t.actionGroupId)) || null;
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
  function wp(i = null) {
    var b, v, N, x, P, E, T;
    si();
    const a = i || ((v = (b = h.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, Bi(!1))) || null, s = ((N = a == null ? void 0 : a.committedMask) == null ? void 0 : N.canvas) || null, l = Math.max(1, Number(((x = a == null ? void 0 : a.descriptor) == null ? void 0 : x.width) || (s == null ? void 0 : s.width) || 2048)), d = Math.max(1, Number(((P = a == null ? void 0 : a.descriptor) == null ? void 0 : P.height) || (s == null ? void 0 : s.height) || 1024)), g = ln().filter((F) => String((F == null ? void 0 : F.layerKind) || "paint") === "mask").slice().sort((F, G) => Number((F == null ? void 0 : F.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0));
    if (!s && !g.length) return null;
    (!h._maskComposeSurface || Number(((E = h._maskComposeSurface.canvas) == null ? void 0 : E.width) || 0) !== l || Number(((T = h._maskComposeSurface.canvas) == null ? void 0 : T.height) || 0) !== d) && (h._maskComposeSurface = Dr(l, d));
    const _ = h._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, d), s && _.ctx.drawImage(s, 0, 0);
    for (const F of g) {
      const G = Ko(F, () => ft());
      G && _.ctx.drawImage(G, 0, 0);
    }
    return _.canvas;
  }
  function xp() {
    var T, F, G;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = Zn(), l = `${Gi()}:${s.width}:${s.height}`;
    if (((T = h._activePaintEraserPreviewInfo) == null ? void 0 : T.cacheKey) === l)
      return h._activePaintEraserPreviewInfo.value || null;
    const d = an(a), g = (d == null ? void 0 : d.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const tt = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = zs(tt, d.targetSpace, !0);
    }
    const _ = Dr(s.width, s.height);
    if (!Wl(_, d, { w: s.width, h: s.height })) return null;
    const b = ((G = (F = _.ctx) == null ? void 0 : F.getImageData(0, 0, s.width, s.height)) == null ? void 0 : G.data) || null;
    if (!b) return null;
    let v = s.width, N = s.height, x = -1, P = -1;
    for (let tt = 0; tt < s.height; tt += 1)
      for (let gt = 0; gt < s.width; gt += 1)
        b[(tt * s.width + gt) * 4 + 3] <= 8 || (gt < v && (v = gt), tt < N && (N = tt), gt > x && (x = gt), tt > P && (P = tt));
    if (x < v || P < N)
      return h._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: v, minY: N, maxX: x, maxY: P },
      key: `${l}:${v}:${N}:${x}:${P}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function qi() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Sp(i, a, s) {
    var l, d;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const g = i.item.bbox, _ = ((d = i.item) == null ? void 0 : d.transform) || {}, b = Number(g.u0 || 0) + Number(_.du || 0), v = Number(g.u1 || 0) + Number(_.du || 0), N = Number(g.v0 || 0) + Number(_.dv || 0), x = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(N, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (i.type === "strokeGroup") {
      const g = yn(i.actionGroupId, "paint"), _ = Er(i.actionGroupId, "paint", g);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, v = _.centerUv.u + _.halfW, N = _.centerUv.v - _.halfH, x = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(N, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    return null;
  }
  function Np(i, a, s) {
    if (!i || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], d = l(i), g = l(a);
    return d.some((_) => g.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Fl(i, a, s) {
    var P, E, T;
    if (!i || !a || !((P = s == null ? void 0 : s.surface) != null && P.canvas) || a.type !== "rasterObject") return i;
    const l = Number(i.width || s.surface.canvas.width || 0), d = Number(i.height || s.surface.canvas.height || 0);
    if (l < 1 || d < 1) return i;
    const g = Sp(a, l, d);
    if (g && !Np(g, s.bounds, l)) return i;
    const _ = String(((E = a.item) == null ? void 0 : E.id) || a.id || ""), b = ((T = a.item) == null ? void 0 : T.transform) || {}, v = `${s.key}:${_}:${l}:${d}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, N = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(v)) return N.get(v);
    const x = Dr(l, d);
    return x.ctx.clearRect(0, 0, l, d), x.ctx.drawImage(i, 0, 0), x.ctx.save(), x.ctx.globalCompositeOperation = "destination-out", x.ctx.drawImage(s.surface.canvas, 0, 0), x.ctx.restore(), N.size > 64 && N.clear(), N.set(v, x.canvas), x.canvas;
  }
  function Ko(i, a = null) {
    const s = Ke((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!s || !l) return null;
    const d = Dl(i, a);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: g, height: _ } = _p(), b = (i == null ? void 0 : i.transform) || {}, v = [
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
      Rr()
    ].join(":"), N = Yt.get(v);
    if (N) return N;
    Yt.size > 64 && Yt.clear();
    const x = document.createElement("canvas");
    x.width = g, x.height = _;
    const P = x.getContext("2d");
    if (!P) return null;
    const E = Number(l.u0 || 0) * g, T = Number(l.v0 || 0) * _, F = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), G = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), tt = E + F * 0.5 + Number(b.du || 0) * g, gt = T + G * 0.5 + Number(b.dv || 0) * _, Nt = Number(b.rot_deg || 0) * Oe, dt = Math.max(0.01, Number(b.scale || 1));
    for (const _t of [-g, 0, g])
      P.save(), P.translate(tt + _t, gt), P.rotate(Nt), P.scale(dt, dt), P.drawImage(d, -F * 0.5, -G * 0.5, F, G), P.restore();
    return Yt.set(v, x), x;
  }
  function Mp(i) {
    return xs(p, {
      stickers: i ? [i] : [],
      selectedId: h.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Pp(i, a) {
    return uh(
      p,
      (s, l, d) => mp(d || s),
      { scene: a, stickers: i ? [i] : [] }
    );
  }
  function Wo(i, a, s, l, d = "modal_object_view") {
    var v, N, x, P, E;
    if (!i || !a || !s) return !1;
    let g = !1;
    const _ = xp();
    if (l && h.showPanorama) {
      const T = da({
        owner: t,
        cacheKey: `${d}_bg_only`,
        ctx: i,
        rect: a,
        img: l,
        view: s
      });
      g = g || !!T;
    }
    if (h.showObjects)
      for (const T of Ns(!0)) {
        if (T.type === "sticker" && T.item) {
          const F = Mp(T.item), G = Pp(T.item, F), tt = ji({
            owner: t,
            cacheKey: `${d}_sticker_${String(T.id || T.item.id || "")}`,
            ctx: i,
            rect: a,
            backgroundSource: null,
            textures: G,
            scene: F,
            view: s
          });
          g = g || !!tt;
          continue;
        }
        if (T.type === "rasterObject" && T.item) {
          let F = Ko(T.item, () => ft());
          if (!F) continue;
          const G = _ ? `_${_.key}` : "";
          _ && (F = Fl(F, T, _));
          const tt = ((v = T.item) == null ? void 0 : v.transform) || {};
          da({
            owner: t,
            cacheKey: `${d}_raster_${String(T.id || T.item.id || "")}`,
            ctx: i,
            rect: a,
            img: F,
            view: s,
            backgroundRevision: `${ai()}_raster_${String(T.id || T.item.id || "")}_${Number(tt.du || 0).toFixed(6)}_${Number(tt.dv || 0).toFixed(6)}_${Number(tt.rot_deg || 0).toFixed(3)}_${Number(tt.scale || 1).toFixed(4)}${G}`,
            backgroundOpacity: 1
          }), g = !0;
          continue;
        }
        if (T.type === "strokeGroup") {
          let F = ((x = (N = h.paintEngine) == null ? void 0 : N.getGroupDisplayCanvas) == null ? void 0 : x.call(N, T.actionGroupId)) || null;
          if (!F) continue;
          _ && (F = Fl(F, T, _)), da({
            owner: t,
            cacheKey: `${d}_group_${String(T.actionGroupId || "")}`,
            ctx: i,
            rect: a,
            img: F,
            view: s,
            backgroundRevision: `${Rr()}_${String(T.actionGroupId || "")}${Gi()}`,
            backgroundOpacity: 1
          }), g = !0;
        }
      }
    const b = h.showMask && ((E = (P = h.paintEngine) == null ? void 0 : P.getMaskDisplayCanvas) == null ? void 0 : E.call(P)) || null;
    return b && (da({
      owner: t,
      cacheKey: `${d}_mask`,
      ctx: i,
      rect: a,
      img: b,
      view: s,
      backgroundRevision: `${Rr()}${Gi()}_mask`,
      backgroundOpacity: 1
    }), g = !0), g;
  }
  async function Es(i, a = "sticker.png") {
    const s = new FormData();
    s.append("image", i), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await Qe.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const d = await l.json(), g = String((d == null ? void 0 : d.name) || "").trim();
    if (!g)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((d == null ? void 0 : d.subfolder) || "panorama_stickers"),
      storage: String((d == null ? void 0 : d.type) || "input"),
      name: String((i == null ? void 0 : i.name) || a)
    };
  }
  async function Ts(i, a) {
    const s = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, a), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const d = await Qe.fetchApi("/upload/image", { method: "POST", body: l });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const g = await d.json(), _ = String((g == null ? void 0 : g.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((g == null ? void 0 : g.subfolder) || "panorama_stickers"),
      storage: String((g == null ? void 0 : g.type) || "input")
    };
  }
  let Ls = null, qo = !1;
  function kp() {
    const i = Gf(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = ai();
    return !a || typeof a != "object" || String(a.revision || "") !== s || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function Ds() {
    const i = String(t.id ?? "0"), a = yo.get(i);
    if (qo && a) return a;
    const s = (async () => {
      var g, _, b, v, N, x, P, E, T, F;
      const l = ai(), d = Gf(p.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ls = l, Tn());
        return;
      }
      if (Ls !== l && !qo) {
        qo = !0;
        try {
          si();
          const G = Bi(!1), tt = ((_ = (g = h.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, G)) || null, gt = Ol(G), Nt = wp(tt), dt = Math.max(1, Number(((b = tt == null ? void 0 : tt.descriptor) == null ? void 0 : b.width) || (gt == null ? void 0 : gt.width) || (Nt == null ? void 0 : Nt.width) || 2048)), _t = Math.max(1, Number(((v = tt == null ? void 0 : tt.descriptor) == null ? void 0 : v.height) || (gt == null ? void 0 : gt.height) || (Nt == null ? void 0 : Nt.height) || 1024));
          (!gt && d.totalPaintCount > 0 || !Nt && d.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((N = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== dt || Number(((x = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : x.height) || 0) !== _t) && (h._paintLayerSyncBlankSurface = Dr(dt, _t)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, dt, _t));
          const ht = gt || d.totalPaintCount > 0 && ((P = h._paintLayerSyncBlankSurface) == null ? void 0 : P.canvas) || null, xt = Nt || d.totalMaskCount > 0 && ((E = h._paintLayerSyncBlankSurface) == null ? void 0 : E.canvas) || null;
          if (!ht && !xt) return;
          let ut = null, B = null;
          const ot = [];
          if (d.totalPaintCount > 0) {
            ut = await Ts(ht, `pano_paint_${i}.png`);
            for (const Et of G) {
              const Ot = String(Et || "").trim();
              if (!Ot) continue;
              const Tt = ((F = (T = h.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : F.call(T, Ot)) || null;
              if (!Tt) continue;
              const Ht = Ot.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ut = await Ts(Tt, `pano_group_${i}_${Ht}.png`);
              Ut && ot.push({
                id: Ot,
                actionGroupId: Ot,
                image: Ut
              });
            }
          }
          d.totalMaskCount > 0 && (B = await Ts(xt, `pano_mask_${i}.png`)), l === ai() && (p.painting_layer = {
            paint: ut,
            mask: B,
            groups: ot,
            revision: l
          }, Ls = l, Tn());
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
    const i = xv(t, "pano_input_images", yt, () => ft());
    if (i) return i;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let d = [];
    return r && (s || l) ? d = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], qf(t, d, () => ft(), `background:${d.join("|")}`);
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
      lat: Math.asin(j(i.y, -1, 1))
    };
  }
  function Os(i, a = null) {
    const { lon: s, lat: l } = Rs(i), d = gr();
    let g = d.x + (s / (2 * Math.PI) + 0.5) * d.w;
    const _ = d.y + (0.5 - l / Math.PI) * d.h;
    if (a !== null) {
      for (; g - a > d.w / 2; ) g -= d.w;
      for (; g - a < -d.w / 2; ) g += d.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Yo(i) {
    const a = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let s = Wn(0, 1, 0);
    Math.abs(Sn(a, s)) > 0.999 && (s = Wn(0, 0, 1));
    const l = bi(Sa(s, a)), d = bi(Sa(a, l)), g = Math.tan(j(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Oe), _ = Math.tan(j(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Oe), b = Number(i.rot_deg || i.roll_deg || 0) * Oe, v = Math.cos(b), N = Math.sin(b);
    return {
      centerDir: a,
      right: l,
      up: d,
      tanX: g,
      tanY: _,
      cr: v,
      sr: N
    };
  }
  function mr(i, a, s) {
    const l = a * i.cr - s * i.sr, d = a * i.sr + s * i.cr;
    return bi(wa(wa(i.centerDir, xa(i.right, l)), xa(i.up, d)));
  }
  function $l(i) {
    const a = Yo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => mr(a, l * a.tanX, d * a.tanY));
  }
  function Hl(i, a, s) {
    const l = Yo(i), d = (a * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return mr(l, d, g);
  }
  function Cp(i) {
    const a = (i == null ? void 0 : i.bbox) || null, s = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: j((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ap(i) {
    var v, N, x, P;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = i == null ? void 0 : i.transform) == null ? void 0 : v.scale) || 1)), d = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), g = Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.du) || 0), _ = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((E) => zo(jo(E, s, l, d), g, _));
  }
  function Ip(i) {
    const a = Ke((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), s = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, d = `${a}:${h.mode}:${Rr()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (h.mode === "frame") {
      const g = ie(), _ = g ? Ye(g) : null;
      return `${d}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ep(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = [
      mn(i) ? "frame" : Le(i) ? "sticker" : "item",
      a,
      h.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      vi(i)
    ].join(":");
    if (h.mode === "frame") {
      const d = ie(), g = d ? Ye(d) : null;
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Tp() {
    var a;
    const i = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return i === "draft" ? h.hqFrames && h.hqFrames > 0 ? [28, 20] : h.interaction ? [12, 9] : [20, 14] : i === "high" ? h.hqFrames && h.hqFrames > 0 ? [48, 36] : h.interaction ? [20, 14] : [36, 26] : h.hqFrames && h.hqFrames > 0 ? [40, 30] : h.interaction ? [16, 12] : [28, 20];
  }
  function Lp(i = !1) {
    const a = C.width, s = C.height, l = gr();
    if (S.globalAlpha = 1, S.lineWidth = 1, i || (S.fillStyle = "#070707", S.fillRect(0, 0, a, s), S.fillStyle = "#070707", S.fillRect(l.x, l.y, l.w, l.h)), si(), Wo(
      S,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      oi(),
      "modal_unwrap"
    ), h.showGrid && !h.fullscreen) {
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
      const d = l.y + l.h * 0.57;
      S.fillText("Left", l.x + l.w * 0.25, d), S.fillText("Front", l.x + l.w * 0.5, d), S.fillText("Right", l.x + l.w * 0.75, d), S.fillText("Back", l.x + 38, d), S.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function Vl(i, a, s = 1) {
    let l = !1;
    S.strokeStyle = a, S.lineWidth = s, S.beginPath();
    for (const d of i) {
      const g = Wi(d);
      if (!g) {
        l = !1;
        continue;
      }
      l ? S.lineTo(g.x, g.y) : (S.moveTo(g.x, g.y), l = !0);
    }
    S.stroke();
  }
  function Dp(i = !1) {
    const a = C.width, s = C.height;
    if (i || (S.fillStyle = "#070707", S.fillRect(0, 0, a, s)), si(), Wo(
      S,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: h.viewYaw,
        pitchDeg: h.viewPitch,
        fovDeg: h.viewFov
      },
      oi(),
      "modal_pano"
    ), h.showGrid && !h.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push(Hn(d, _));
        Vl(g, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push(Hn(_, d));
        Vl(g, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Hn(-90, 0) },
        { name: "Front", dir: Hn(0, 0) },
        { name: "Right", dir: Hn(90, 0) },
        { name: "Back", dir: Hn(180, 0) }
      ];
      S.fillStyle = "rgba(250, 250, 250, 0.42)", S.font = "500 11px Geist, sans-serif", S.textAlign = "center", l.forEach((d) => {
        const g = Wi(d.dir);
        g && S.fillText(d.name, g.x, g.y + 24);
      });
    }
  }
  function zl(i, a = null, s = null) {
    if (h.mode === "frame") {
      const l = a || ie();
      if (!l) return [];
      const d = s || Ye(l);
      return dg(i, l, d);
    }
    return lg(i);
  }
  function Rp(i, a) {
    const s = String(i.actionGroupId || i.id || "").trim(), l = yn(s, i.layerKind), d = [], g = [], _ = h.mode === "frame" ? ie() : null, b = _ ? Ye(_) : null;
    for (const dt of l) {
      const _t = (dt == null ? void 0 : dt.geometry) || null, ht = (_t == null ? void 0 : _t.geometryKind) === "lasso_fill" ? _t == null ? void 0 : _t.points : (_t == null ? void 0 : _t.processedPoints) || (_t == null ? void 0 : _t.rawPoints) || (_t == null ? void 0 : _t.points) || [], xt = zl(ht, _, b).filter((ot) => Number.isFinite(ot == null ? void 0 : ot.x) && Number.isFinite(ot == null ? void 0 : ot.y));
      if (!xt.length) continue;
      g.push(...xt);
      const ut = _r(String((dt == null ? void 0 : dt.toolKind) || "pen")), B = on[ut] || on[rr];
      d.push({
        points: xt,
        closed: String((_t == null ? void 0 : _t.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((dt == null ? void 0 : dt.size) || 10) * Math.max(0.1, Number((B == null ? void 0 : B.sizeScale) ?? 1)) + 10),
        layerKind: String((dt == null ? void 0 : dt.layerKind) || i.layerKind || "paint")
      });
    }
    if (!g.length) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(a, dt), dt;
    }
    let v = 1 / 0, N = 1 / 0, x = -1 / 0, P = -1 / 0;
    for (const dt of d)
      for (const ht of Array.isArray(dt == null ? void 0 : dt.points) ? dt.points : []) {
        const xt = Number((ht == null ? void 0 : ht.x) || 0), ut = Number((ht == null ? void 0 : ht.y) || 0);
        v = Math.min(v, xt - 2), N = Math.min(N, ut - 2), x = Math.max(x, xt + 2), P = Math.max(P, ut + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(N) || !Number.isFinite(x) || !Number.isFinite(P)) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(a, dt), dt;
    }
    const E = [
      { x: v, y: N },
      { x, y: N },
      { x, y: P },
      { x: v, y: P }
    ], T = { x: (v + x) * 0.5, y: (N + P) * 0.5 }, F = { x: T.x, y: N }, G = { x, y: T.y }, tt = { x: T.x, y: P }, gt = { x: v, y: T.y }, Nt = {
      kind: "strokeGroup",
      center: T,
      corners: E,
      edgeMidpoints: [
        { edge: "top", x: F.x, y: F.y, a: E[0], b: E[1] },
        { edge: "right", x: G.x, y: G.y, a: E[1], b: E[2] },
        { edge: "bottom", x: tt.x, y: tt.y, a: E[2], b: E[3] },
        { edge: "left", x: gt.x, y: gt.y, a: E[3], b: E[0] }
      ],
      rotateStemBase: F,
      rotateHandle: { x: F.x, y: F.y - 30 },
      strokePaths: d,
      visible: !0
    };
    return h._strokeGeomCache.set(a, Nt), Nt;
  }
  function Op(i, a) {
    const s = Ap(i), l = zl(s);
    if (!Array.isArray(l) || l.length < 4) {
      const b = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(a, b), b;
    }
    const d = l.slice(0, 4).map((b) => ({ x: Number((b == null ? void 0 : b.x) || 0), y: Number((b == null ? void 0 : b.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: d.reduce((b, v) => b + Number(v.x || 0), 0) / d.length,
        y: d.reduce((b, v) => b + Number(v.y || 0), 0) / d.length
      },
      corners: d,
      visible: !0
    };
    return h._strokeGeomCache.set(a, _), _;
  }
  function yr(i, a = null, s = null, l = null) {
    if (h.mode === "frame") {
      const Nt = s || ie(), dt = l || Ye(Nt), _t = Nt ? Ji(Nt, i) : null;
      return _t ? {
        x: Number(dt.x || 0) + Number(_t.x || 0) * Number(dt.w || 0),
        y: Number(dt.y || 0) + Number(_t.y || 0) * Number(dt.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Os(i, a);
    const { right: d, up: g, fwd: _ } = As(), b = Sn(i, d), v = Sn(i, g), N = Sn(i, _), x = C.width, P = C.height, E = h.viewFov * Oe, T = 2 * Math.atan(Math.tan(E / 2) * (P / Math.max(x, 1))), F = x / 2 / Math.tan(E / 2), G = P / 2 / Math.tan(T / 2), tt = Math.max(N, 1e-4), gt = Math.max(x, P) * 2;
    return {
      x: j(x / 2 + b / tt * F, -gt, x + gt),
      y: j(P / 2 - v / tt * G, -gt, P + gt),
      z: tt
    };
  }
  function Fp(i) {
    const a = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), s = h.mode === "frame" ? ie() : null, l = s ? Ye(s) : null, d = yr(a, null, s, l);
    if (!d) return { visible: !1 };
    const g = Yo(i), b = $l(i).map((ht) => yr(ht, d.x, s, l)), v = mr(g, 0, g.tanY), N = mr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), x = yr(v, d.x, s, l), P = yr(N, (x == null ? void 0 : x.x) ?? d.x, s, l), E = ((P == null ? void 0 : P.x) ?? x.x) - x.x, T = ((P == null ? void 0 : P.y) ?? x.y) - x.y, F = Math.hypot(E, T) || 1, G = {
      x: x.x + E / F * 30,
      y: x.y + T / F * 30
    }, tt = yr(mr(g, 0, g.tanY), d.x, s, l), gt = yr(mr(g, g.tanX, 0), d.x, s, l), Nt = yr(mr(g, 0, -g.tanY), d.x, s, l), dt = yr(mr(g, -g.tanX, 0), d.x, s, l), _t = [
      {
        edge: "top",
        x: tt.x,
        y: tt.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: gt.x,
        y: gt.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: Nt.x,
        y: Nt.y,
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
      center: { x: d.x, y: d.y },
      corners: b.map((ht) => ({ x: ht.x, y: ht.y })),
      edgeMidpoints: _t,
      rotateStemBase: { x: x.x, y: x.y },
      rotateHandle: G,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function De(i) {
    if (Ae(i)) {
      const d = String(i.actionGroupId || i.id || "").trim(), g = qh(d, i.layerKind), _ = h._strokeGeomCache.get(g);
      return _ || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Rp(i, g));
    }
    if (We(i)) {
      const d = Ip(i), g = h._strokeGeomCache.get(d);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Op(i, d));
    }
    const a = Ep(i), s = h._strokeGeomCache.get(a);
    if (s) return s;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const l = Fp(i);
    return h._strokeGeomCache.set(a, l), l;
  }
  function Xo(i, a, s, l = null) {
    const d = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let b = 0, v = 0;
      a === 0 ? (b = _, v = 0) : a === 1 ? (b = 1, v = _) : a === 2 ? (b = 1 - _, v = 1) : (b = 0, v = 1 - _);
      const N = Hl(i, b, v), x = h.mode === "unwrap" ? Os(N, l) : Wi(N);
      x && d.push(x);
    }
    return d;
  }
  function $p(i, a) {
    const s = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = h.mode === "unwrap" ? Os(s) : null, d = l ? l.x : null, g = h.mode === "pano" ? 28 : 20, _ = [
      Xo(i, 0, g, d),
      Xo(i, 1, g, d),
      Xo(i, 2, g, d),
      Xo(i, 3, g, d)
    ];
    S.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", S.lineWidth = a ? 2 : 1, S.beginPath();
    let b = !1;
    for (const v of _)
      for (const N of v)
        b ? S.lineTo(N.x, N.y) : (S.moveTo(N.x, N.y), b = !0);
    S.closePath(), S.stroke();
  }
  function Hp() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (h.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function Fs() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (h.mode === "frame") return i;
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
      const d = S.globalAlpha;
      S.globalAlpha = ep(i), h.mode === "frame" ? (S.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", S.lineWidth = s ? 2 : 1, $s(S, a.corners), S.stroke()) : $p(i, s), S.globalAlpha = d;
      return;
    }
    S.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $s(S, a.corners), S.fill(), S.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", S.lineWidth = s ? 2.8 : 1.9, $s(S, a.corners), S.stroke();
  }
  function zp(i, a, s) {
    S.fillStyle = s, a.corners.forEach((l) => {
      S.beginPath(), S.arc(l.x, l.y, 6.5, 0, Math.PI * 2), S.fill();
    }), mn(i) && (S.strokeStyle = s, S.lineCap = "round", S.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var x, P, E, T;
      const d = (((x = l.b) == null ? void 0 : x.x) ?? l.x) - (((P = l.a) == null ? void 0 : P.x) ?? l.x), g = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((T = l.a) == null ? void 0 : T.y) ?? l.y), _ = Math.hypot(d, g) || 1, b = d / _, v = g / _, N = 10;
      S.beginPath(), S.moveTo(l.x - b * N, l.y - v * N), S.lineTo(l.x + b * N, l.y + v * N), S.stroke();
    }), S.lineCap = "butt"), Ae(i) || (S.strokeStyle = "rgba(250, 250, 250, 0.9)", S.lineWidth = 1.8, S.beginPath(), S.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), S.lineTo(a.rotateHandle.x, a.rotateHandle.y), S.stroke(), S.fillStyle = s, S.beginPath(), S.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), S.fill());
  }
  function jp() {
    var b;
    const [i, a] = Tp(), s = In(), l = s.length > 1, d = e === "cutout" ? Hp() : rn(), g = d.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${mn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== d || h._sortedItemsCache.orderKey !== g) && (h._sortedItemsCache = {
      src: d,
      orderKey: g,
      sorted: [...d]
    });
    const _ = h._sortedItemsCache.sorted;
    for (const v of _) {
      const N = !l && Yh(v);
      if (h.mode === "frame" && !N || !h.showObjects && !mn(v)) continue;
      const x = De(v);
      if (e !== "stickers" && !x.visible)
        continue;
      const P = Le(v), E = pr(v);
      if (Vp(v, x, N, E), N && x.visible) {
        const T = E ? "#ff4d4f" : P && Pe(v) ? "#f59e0b" : "#0070f3";
        zp(v, x, T);
      }
    }
    if (l) {
      const v = Ps(s);
      if (v != null && v.visible) {
        const N = ks(s) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(v.corners[0].x, v.corners[0].y);
        for (let x = 1; x < v.corners.length; x += 1) S.lineTo(v.corners[x].x, v.corners[x].y);
        S.closePath(), S.stroke(), S.setLineDash([]), S.fillStyle = N, v.corners.forEach((x) => {
          S.beginPath(), S.arc(x.x, x.y, 6.5, 0, Math.PI * 2), S.fill();
        }), S.restore();
      }
    } else
      s.forEach((v) => {
        if (!Ae(v) && !We(v)) return;
        const N = De(v);
        if (!(N != null && N.visible)) return;
        const x = pr(v) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(N.corners[0].x, N.corners[0].y);
        for (let P = 1; P < N.corners.length; P += 1) S.lineTo(N.corners[P].x, N.corners[P].y);
        S.closePath(), S.stroke(), S.setLineDash([]), Ae(v) && (S.fillStyle = x, N.corners.forEach((P) => {
          S.beginPath(), S.arc(P.x, P.y, 6.5, 0, Math.PI * 2), S.fill();
        })), S.restore();
      });
    if (((b = h.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = cu(h.interaction.start, h.interaction.current);
      S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.9)", S.fillStyle = "rgba(255, 255, 255, 0.08)", S.lineWidth = 1, S.setLineDash([5, 4]), S.beginPath(), S.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), S.fill(), S.stroke(), S.restore();
    }
    h.hqFrames && i >= 40 && a >= 30 && (h.hqFrames -= 1, h.hqFrames > 0 && ft());
  }
  function jl(i) {
    const a = ki(i), s = j(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Up() {
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
  function Ul(i, a = {}) {
    if (!i) return "";
    const s = oi(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", d = jl(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      JSON.stringify(i || null),
      ai(),
      Up(),
      Gi(),
      l,
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "mask:1" : "mask:0",
      `${d.width}x${d.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function Bl(i = {}) {
    var b, v;
    if (e !== "cutout") return null;
    const a = i.shot || ie();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = jl(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = Ul(a, i);
    if (((b = t.__panoCutoutPreviewSurface) == null ? void 0 : b.source) === t.__panoCutoutPreviewCanvas && ((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const d = t.__panoCutoutPreviewCanvas, g = d.getContext("2d");
    return g ? Gp(
      g,
      { x: 0, y: 0, w: s.width, h: s.height },
      a,
      {
        cachePrefix: "shared_cutout_preview_surface",
        quality: String(i.quality || "balanced")
      }
    ) ? (t.__panoCutoutPreviewSurface = {
      source: d,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null : (t.__panoCutoutPreviewSurface = null, null);
  }
  function Bp() {
    if (e !== "cutout") return;
    const i = ie();
    if (!i) {
      h.outputPreviewRect = null, O && (O.style.display = "none");
      return;
    }
    const a = 14, s = j(Number(h.outputPreviewAnim ?? (h.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), d = Math.max(260, Math.min(560, C.width * 0.62)), g = Math.max(76, Math.min(150, C.height * 0.22)), _ = Math.max(160, Math.min(340, C.height * 0.48)), b = Nn(l, d, s), v = Nn(g, _, s), N = ki(i), x = Number((N == null ? void 0 : N.aspect) || 1);
    let P = b, E = P / x;
    E > v && (E = v, P = E * x);
    const T = C.width - a - P, F = a, G = 12;
    h.outputPreviewRect = { x: T, y: F, w: P, h: E };
    const tt = () => {
      if (!O) return;
      const xt = `${Math.round(T + P - 8 - 24)}px`, ut = `${Math.round(F + 8)}px`;
      O.style.display = "inline-flex", O.style.left !== xt && (O.style.left = xt), O.style.top !== ut && (O.style.top = ut);
    }, gt = (xt, ut, B, ot, Et) => {
      const Ot = Math.max(0, Math.min(Et, Math.min(B, ot) * 0.5));
      S.beginPath(), typeof S.roundRect == "function" ? S.roundRect(xt, ut, B, ot, Ot) : (S.moveTo(xt + Ot, ut), S.arcTo(xt + B, ut, xt + B, ut + ot, Ot), S.arcTo(xt + B, ut + ot, xt, ut + ot, Ot), S.arcTo(xt, ut + ot, xt, ut, Ot), S.arcTo(xt, ut, xt + B, ut, Ot)), S.closePath();
    };
    S.save(), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 22, S.shadowOffsetX = 0, S.shadowOffsetY = 8, S.fillStyle = "rgba(10, 10, 10, 0.72)", gt(T, F, P, E, G), S.fill(), S.restore(), S.save(), gt(T, F, P, E, G), S.clip();
    const Nt = Ul(i, { quality: "balanced" });
    let dt = t.__panoCutoutPreviewSurface;
    (!dt || dt.revision !== Nt) && !h.interaction && !h.cutoutPreviewSurfaceRaf && !h.cutoutPreviewSurfaceTimer && (dt = Bl({ shot: i, quality: "balanced" }));
    const _t = (dt == null ? void 0 : dt.source) || null, ht = !!(_t && Number(_t.width || 0) > 1 && Number(_t.height || 0) > 1);
    if ((dt == null ? void 0 : dt.revision) !== Nt && Hs(), !ht) {
      S.fillStyle = "rgba(255, 255, 255, 0.06)", S.fillRect(T, F, P, E), S.strokeStyle = "rgba(255, 255, 255, 0.12)", S.lineWidth = 1, S.strokeRect(T + 0.5, F + 0.5, P - 1, E - 1), Hs(), S.restore(), tt();
      return;
    }
    S.drawImage(_t, T, F, P, E), S.restore(), tt();
  }
  function Gp(i, a, s, l = {}) {
    const d = oi();
    return lb({
      owner: t,
      ctx: i,
      rect: a,
      shot: s,
      bgImage: d,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: Wo
    });
  }
  function Kp() {
    Bl();
  }
  function Hs() {
    if (e !== "cutout") return;
    const i = performance.now(), a = Wh(), s = i - Number(h.cutoutPreviewSurfaceLastTs || 0);
    if (h.cutoutPreviewSurfaceRaf || h.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      h.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var d, g, _, b, v, N, x, P;
        h.cutoutPreviewSurfaceRaf = 0, h.cutoutPreviewSurfaceLastTs = performance.now(), Kp(), kt.dirty = !0, (g = (d = t.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || g.call(d), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (v = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || v.call(b, !0, !0), (P = (x = (N = dn) == null ? void 0 : N.canvas) == null ? void 0 : x.setDirty) == null || P.call(x, !0, !0);
      });
    };
    if (s >= a) {
      l();
      return;
    }
    h.cutoutPreviewSurfaceTimer = window.setTimeout(() => {
      h.cutoutPreviewSurfaceTimer = 0, h.cutoutPreviewSurfaceRaf || l();
    }, Math.max(0, Math.ceil(a - s)));
  }
  function Vs(i, a) {
    if (!i || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return Hl(i, s, l);
  }
  function Xi(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(s);
    return Wn(l * Math.sin(a), Math.sin(s), l * Math.cos(a));
  }
  function qe(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function br(i, a, s, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: He(i, "widthScale", 1),
      pressureLike: He(i, "pressureLike", 1)
    }, ...l, u: a, v: s };
  }
  function Wp(i, a, s) {
    const l = qe(i), d = qe(a);
    return br(i, Nn(l.x, d.x, s), Nn(l.y, d.y, s), {
      t: Nn(Number((i == null ? void 0 : i.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: Nn(He(i, "widthScale", 1), He(a, "widthScale", 1), s),
      pressureLike: Nn(He(i, "pressureLike", 1), He(a, "pressureLike", 1), s)
    });
  }
  function qp(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function zs(i, a, s = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [br(i[0], qe(i[0]).x, qe(i[0]).y)];
    const l = qp(a, s), d = (x, P) => {
      const E = [0];
      for (let _t = 1; _t < x.length; _t += 1) {
        const ht = qe(x[_t - 1]), xt = qe(x[_t]);
        E.push(E[_t - 1] + Math.hypot(xt.x - ht.x, xt.y - ht.y));
      }
      const T = E[E.length - 1] || 0;
      if (T <= 1e-8) {
        const _t = x[0], ht = qe(_t);
        return [br(_t, ht.x, ht.y)];
      }
      const F = [];
      let G = 0;
      for (let _t = 0; _t <= T + 1e-9; _t += P) {
        for (; G < E.length - 2 && E[G + 1] < _t; ) G += 1;
        const ht = E[G], xt = E[G + 1], ut = Math.max(1e-8, xt - ht);
        F.push(Wp(x[G], x[G + 1], j((_t - ht) / ut, 0, 1)));
      }
      const tt = x[x.length - 1], gt = qe(tt), Nt = F[F.length - 1], dt = Nt ? qe(Nt) : null;
      return (!dt || Math.hypot(dt.x - gt.x, dt.y - gt.y) > P * 0.35) && F.push(br(tt, gt.x, gt.y)), F;
    }, g = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const P = [br(x[0], qe(x[0]).x, qe(x[0]).y)];
      for (let E = 0; E < x.length - 1; E += 1) {
        const T = x[E], F = x[E + 1], G = qe(T), tt = qe(F), gt = br(
          T,
          G.x * 0.75 + tt.x * 0.25,
          G.y * 0.75 + tt.y * 0.25,
          {
            t: Number(T.t || 0) * 0.75 + Number(F.t || 0) * 0.25,
            widthScale: He(T, "widthScale", 1) * 0.75 + He(F, "widthScale", 1) * 0.25,
            pressureLike: He(T, "pressureLike", 1) * 0.75 + He(F, "pressureLike", 1) * 0.25
          }
        ), Nt = br(
          T,
          G.x * 0.25 + tt.x * 0.75,
          G.y * 0.25 + tt.y * 0.75,
          {
            t: Number(T.t || 0) * 0.25 + Number(F.t || 0) * 0.75,
            widthScale: He(T, "widthScale", 1) * 0.25 + He(F, "widthScale", 1) * 0.75,
            pressureLike: He(T, "pressureLike", 1) * 0.25 + He(F, "pressureLike", 1) * 0.75
          }
        );
        P.push(gt, Nt);
      }
      return P.push(br(x[x.length - 1], qe(x[x.length - 1]).x, qe(x[x.length - 1]).y)), P;
    }, _ = d(i, l);
    if (_.length < 3) return _;
    const b = s ? 2 : 1;
    let v = _.slice();
    for (let x = 0; x < b; x += 1) v = g(v);
    return d(v, Math.max(l * 0.75, 55e-5));
  }
  function He(i, a, s = 1) {
    const l = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function Yp(i) {
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
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ai() {
    const i = Zo();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Xp() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function Zp() {
    h.paintCompositeRevision += 1;
  }
  function Jp() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Gl() {
    var i, a;
    h.paintEngineRevisionKey = null, (a = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, p), h.paintEngineRevisionKey = Rr();
  }
  function bn() {
    h.objectVisualRevision = Number(h.objectVisualRevision || 0) + 1, Jp();
  }
  function En({ rebuildPaintEngine: i = !1 } = {}) {
    Xp(), bn(), i && Gl();
  }
  function Zi() {
    Zp(), bn();
  }
  function si() {
    var l;
    const i = Zo(), a = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== a && (h.paintEngine = Oc(i), h.paintEngineDescriptorKey = a, h.paintEngineRevisionKey = "");
    const s = Rr();
    h.paintEngineRevisionKey !== s && (h.paintEngineRevisionKey = s, (l = h.paintEngine) == null || l.rebuildCommitted(p));
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
  function Zn() {
    return Zo();
  }
  function Qp(i, a, s, l, d = null) {
    const g = Yp(i), _ = He(a, "widthScale", 1) * He(a, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? d ? Math.max(0.5, g.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Oe) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function tg(i, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), d = String((a == null ? void 0 : a.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (i.globalAlpha = d === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = g ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${v})`;
  }
  function eg(i, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function ng(i, a, s, l, d = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    i.save(), tg(i, s, d);
    const _ = (b) => eg(i, b, g);
    if (a.length === 1) {
      _(a[0]), i.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const v = a[b], N = a[b + 1];
      if (!v || !N) continue;
      const x = Number(v.x || 0), P = Number(v.y || 0), E = Number(N.x || 0), T = Number(N.y || 0), F = Math.max(0.5, Math.min(g, Number(v.radiusPx || 0.5))), G = Math.max(0.5, Math.min(g, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(P) || !Number.isFinite(E) || !Number.isFinite(T) || !Number.isFinite(F) || !Number.isFinite(G)) continue;
      const tt = E - x, gt = T - P, Nt = Math.hypot(tt, gt);
      if (!Number.isFinite(Nt) || Nt < 1e-6) {
        _(v);
        continue;
      }
      if (Nt > Math.max(l.w, l.h) * 0.5) continue;
      const dt = Math.max(0.5, Math.min(F, G)), _t = Math.max(0.35, Math.min(dt * 0.4, 2.25)), ht = Math.max(1, Math.ceil(Nt / _t));
      for (let xt = 0; xt <= ht; xt += 1) {
        const ut = xt / ht;
        _({
          x: Nn(x, E, ut),
          y: Nn(P, T, ut),
          radiusPx: Nn(F, G, ut)
        });
      }
    }
    _(a[a.length - 1]), i.restore();
  }
  function rg(i, a, s, l) {
    ng(i, a, s, l, { preview: !1 });
  }
  function ig(i, a, s, l, d) {
    var b, v, N, x;
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
    i.beginPath(), i.moveTo(Number(((b = a[0]) == null ? void 0 : b[g]) || 0) * l.w, Number(((v = a[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let P = 1; P < a.length; P += 1)
      i.lineTo(Number(((N = a[P]) == null ? void 0 : N[g]) || 0) * l.w, Number(((x = a[P]) == null ? void 0 : x[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Kl(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function og(i, a) {
    const s = Kl(i);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: Qp(i, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function Wl(i, a, s = null) {
    var b, v, N, x;
    if (!(i != null && i.ctx) || !a) return !1;
    const l = s || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = i.canvas) == null ? void 0 : v.height) || 0) }, d = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((N = a == null ? void 0 : a.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((x = a == null ? void 0 : a.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return ig(i.ctx, Kl(d), d, l), !0;
    const _ = og(d, l);
    return _.length ? (rg(i.ctx, _, d, l), !0) : !1;
  }
  function ag(i, a, s, l = 8) {
    const d = new Uint8Array(a * s), g = [], _ = new Int32Array(a * s), b = new Int32Array(a * s);
    for (let v = 0; v < s; v += 1)
      for (let N = 0; N < a; N += 1) {
        const x = v * a + N;
        if (d[x] || i[x] <= l) continue;
        let P = 0, E = 0;
        _[E] = N, b[E] = v, E += 1, d[x] = 1;
        const T = [];
        let F = N, G = v, tt = N, gt = v;
        for (; P < E; ) {
          const Nt = _[P], dt = b[P];
          P += 1, T.push({ x: Nt, y: dt }), Nt < F && (F = Nt), dt < G && (G = dt), Nt > tt && (tt = Nt), dt > gt && (gt = dt);
          const _t = [
            [Nt - 1, dt],
            [Nt + 1, dt],
            [Nt, dt - 1],
            [Nt, dt + 1]
          ];
          for (const [ht, xt] of _t) {
            if (ht < 0 || xt < 0 || ht >= a || xt >= s) continue;
            const ut = xt * a + ht;
            d[ut] || i[ut] <= l || (d[ut] = 1, _[E] = ht, b[E] = xt, E += 1);
          }
        }
        g.push({ pixels: T, minX: F, minY: G, maxX: tt, maxY: gt });
      }
    return g;
  }
  function sg(i, a, s = {}) {
    var N;
    const l = Number((i == null ? void 0 : i.width) || 0), d = Number((i == null ? void 0 : i.height) || 0), g = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!g || l < 1 || d < 1) return [];
    const _ = g.getImageData(0, 0, l, d), b = new Uint8Array(l * d);
    for (let x = 0; x < b.length; x += 1) b[x] = _.data[x * 4 + 3];
    return ag(b, l, d, 8).map((x, P) => {
      const E = x.maxX - x.minX + 1, T = x.maxY - x.minY + 1, F = document.createElement("canvas");
      F.width = E, F.height = T;
      const G = F.getContext("2d");
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
          v0: x.minY / d,
          u1: (x.maxX + 1) / l,
          v1: (x.maxY + 1) / d
        },
        rasterDataUrl: F.toDataURL("image/png"),
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
    const s = Yo(i), l = Sn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = Sn(a, s.right) / l, g = Sn(a, s.up) / l, _ = d * s.cr + g * s.sr, b = -d * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function cg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const s = gr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function lg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const s = gr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function ug(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let s = 0; s < i.length; s += 1) {
      const l = i[s], d = i[(s + 1) % i.length];
      if (!l || !d || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(d.x) || !Number.isFinite(d.y) || Math.hypot(Number(d.x) - Number(l.x), Number(d.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function fg(i, a, s) {
    if (!Array.isArray(i) || i.length < 3 || !a || !s) return [];
    const l = [];
    for (const d of i) {
      const g = Xi(d), _ = Ji(a, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return ug(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function dg(i, a, s) {
    if (!Array.isArray(i) || i.length < 1 || !a || !s) return [];
    const l = [];
    for (const d of i) {
      const g = Xi(d), _ = Ji(a, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function hg() {
    var l;
    const i = ie(), a = Ye(i), s = oi();
    if (!i || !a) return !1;
    if (S.save(), S.fillStyle = "#050505", S.fillRect(0, 0, C.width, C.height), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 24, S.shadowOffsetX = 0, S.shadowOffsetY = 10, S.fillStyle = "rgba(14, 14, 14, 1)", S.fillRect(a.x, a.y, a.w, a.h), S.restore(), S.save(), S.beginPath(), S.rect(a.x, a.y, a.w, a.h), S.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const d = ki(i);
      Wo(S, a, d, s, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
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
  function pg() {
    var v, N;
    if (((v = h.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, a = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let s;
    if (h.mode === "frame") {
      const x = ie(), P = Ye(x);
      s = fg(a, x, P);
    } else
      s = cg(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", d = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(d.r || 0) * 255), _ = Math.round(Number(d.g || 0) * 255), b = Math.round(Number(d.b || 0) * 255);
    S.save(), S.beginPath(), S.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let x = 1; x < s.length; x++) S.lineTo(Number(s[x].x || 0), Number(s[x].y || 0));
    S.closePath(), l ? (S.lineWidth = 2, S.setLineDash([6, 6]), S.lineDashOffset = 0, S.strokeStyle = "rgba(0,0,0,0.96)", S.stroke(), S.lineDashOffset = -6, S.strokeStyle = "rgba(255,255,255,0.96)", S.stroke(), S.setLineDash([]), S.lineDashOffset = 0) : (S.lineWidth = 1.5, S.setLineDash([6, 4]), S.strokeStyle = `rgba(${g},${_},${b},1)`, S.stroke(), S.setLineDash([])), S.restore();
  }
  function gg() {
    h.mode === "frame" ? hg() : h.mode === "unwrap" ? Lp(!1) : Dp(!1), jp(), h.mode !== "frame" && Bp(), pg(), et && (et.textContent = `${Math.round(h.viewFov)}°`), Xt(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, C.style.opacity = "1");
  }
  function mg() {
    var a;
    if (e !== "cutout") return !1;
    const i = String(((a = h.interaction) == null ? void 0 : a.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function yg(i = {}) {
    var l, d, g, _;
    const a = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && Hs();
      return;
    }
    let s = null;
    try {
      const b = Bi(!1), v = Vo(), N = ((_ = (g = (d = (l = h.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, b)) == null ? void 0 : g.displayPaint) == null ? void 0 : _.canvas) || null, x = v ? null : Ol(b), P = v ? N || x : x || N;
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
    var g, _, b, v, N, x, P, E;
    const a = !!i.localOnly, s = String(i.cause || "");
    a && Vo() && (h.livePaintInteractionRevision += 1), (!a || s === "selection" || s === "mode" || s === "cutout_frame") && (Bo(), Go());
    const d = e === "cutout" && (!a || s === "paint" || s === "cutout_frame" || s === "frame_transform" || s === "frame_view" || wl() || mg());
    yg({ updateCutoutPreview: d }), (d || !a || e !== "cutout") && ((_ = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (b = t.setDirtyCanvas) == null || b.call(t, !0, !1)), a || ((N = (v = t.graph) == null ? void 0 : v.setDirtyCanvas) == null || N.call(v, !0, !0), (E = (P = (x = dn) == null ? void 0 : x.canvas) == null ? void 0 : P.setDirty) == null || E.call(P, !0, !0)), kt.dirty = !0;
  }
  function ql() {
    const i = C.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), s = Math.max(2, Math.round(i.height));
    return C.width !== a || C.height !== s ? (C.width = a, C.height = s, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function js(i = performance.now()) {
    var a;
    if (kt.running) {
      if (kt.lastTickTs = i, h.outputPreviewAnim !== h.outputPreviewAnimTo) {
        const s = Math.max(1, Number(h.outputPreviewAnimDurationMs)), l = j((i - Number(h.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? Xb(l) : Zb(l);
        h.outputPreviewAnim = Nn(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, g), kt.dirty = !0, l >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
      }
      if ((a = h.viewTween) != null && a.active) {
        const s = h.viewTween, l = j((i - s.startTs) / s.durationMs, 0, 1), d = Yb(l);
        h.viewYaw = Fe(s.startYaw + s.deltaYaw * d), h.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * d, h.viewFov = s.startFov + (s.targetFov - s.startFov) * d, kt.dirty = !0, l >= 1 && (h.viewTween = null);
      }
      if (h.viewInertia.vx = Number(Re.state.inertia.vx || 0), h.viewInertia.vy = Number(Re.state.inertia.vy || 0), h.viewInertia.active = !!Re.state.inertia.active, Re.stepInertia(i) && (h.viewInertia.vx = Number(Re.state.inertia.vx || 0), h.viewInertia.vy = Number(Re.state.inertia.vy || 0), h.viewInertia.active = !!Re.state.inertia.active, kt.dirty = !0), (kt.dirty || i - kt.lastSizeCheckTs >= 220) && (ql(), kt.lastSizeCheckTs = i), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame(js);
          return;
        }
        kt.dirty = !1, gg();
      }
      kt.rafId = requestAnimationFrame(js);
    }
  }
  function bg() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function le() {
    r || (h.historyController.commitActionGroup(JSON.stringify(Kf(p))), qs());
  }
  function Qi(i) {
    if (r) return;
    const a = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (qs(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), h.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], En(), un(), ne(), Tn(), ft({ cause: "cutout_frame" });
  }
  function Yl() {
    var s, l;
    const i = Array.isArray((s = h.historyController) == null ? void 0 : s.entries) ? h.historyController.entries : [], a = Number((l = h.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function un() {
    var _, b, v;
    U == null || U.querySelectorAll("[data-tool-mode]").forEach((N) => {
      const x = N.getAttribute("data-tool-mode") === h.primaryTool;
      N.classList.toggle("active", x), N.setAttribute("aria-pressed", x ? "true" : "false");
    });
    const i = h.primaryTool === "paint" || h.primaryTool === "mask";
    if (st && K(i), !i) {
      it.forEach((N) => {
        N.classList.remove("is-active");
      }), wt && (wt.hidden = !0);
      return;
    }
    const a = h.primaryTool, s = it.find((N) => String(N.getAttribute("data-paint-pane") || "") === a) || null;
    if (it.forEach((N) => {
      N.classList.toggle("is-active", N === s);
    }), zt.forEach((N) => {
      N.hidden = !1;
    }), $t.forEach((N) => {
      N.hidden = !1;
    }), q && (clearTimeout(q), q = 0), A.querySelectorAll("[data-paint-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-paint-tool") === h.paintTool);
    }), A.querySelectorAll("[data-mask-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-mask-tool") === h.maskTool);
    }), ct) {
      const N = h.paintTool !== "eraser";
      ct.hidden = !1, ct.classList.toggle("disabled", !N), !N && wt && !wt.hidden && (q = window.setTimeout(() => {
        wt.hidden = !0, q = 0;
      }, 170));
      const x = ((_ = Va.find((E) => za(h.paintColor, E.color))) == null ? void 0 : _.id) || "";
      ct.querySelectorAll("[data-paint-color-swatch]").forEach((E) => {
        const T = E.getAttribute("data-paint-color-swatch") === x;
        E.classList.toggle("active", T), E.setAttribute("aria-pressed", T ? "true" : "false"), E.disabled = !N;
      });
      const P = ct.querySelector("[data-paint-color-custom]");
      if (P) {
        const E = !x;
        P.classList.toggle("active", E), P.style.setProperty("--custom-color", Mn(h.customPaintColor, 1)), P.setAttribute("aria-pressed", E ? "true" : "false"), P.disabled = !N;
      }
      if (z && (z.value = String(Math.round(j(Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), Pt && (Pt.textContent = `${Math.round(j(Number(((v = h.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Rt && (Rt.style.background = Mn(h.customPaintColor)), wt) {
        const E = fo(h.customPaintColor);
        wt.style.setProperty("--picker-hue-color", Mn({ ...xc(E.h, 1, 1), a: 1 }, 1)), wt.style.setProperty("--picker-sat", `${j(E.s, 0, 1) * 100}%`), wt.style.setProperty("--picker-val", `${(1 - j(E.v, 0, 1)) * 100}%`), wt.style.setProperty("--picker-hue", `${j(E.h, 0, 1) * 100}%`);
      }
      if (Mt) {
        const E = fo(h.customPaintColor);
        Mt.style.left = `${j(E.s, 0, 1) * 100}%`, Mt.style.top = `${(1 - j(E.v, 0, 1)) * 100}%`;
      }
      if (ye) {
        const E = fo(h.customPaintColor);
        ye.style.left = `${j(E.h, 0, 1) * 100}%`;
      }
      if (St && Dt) {
        const E = Array.from({ length: 8 }, (T, F) => h.customPaintHistory[F] || null);
        Dt.innerHTML = E.map((T, F) => `
          <button class="pano-paint-color-history-dot${T ? "" : " empty"}" type="button" data-paint-history-index="${F}" ${T ? `style="--swatch:${Mn(T, 1)}"` : ""} aria-label="Recent color ${F + 1}" ${T ? "" : "disabled"}></button>
        `).join(""), Dt.querySelectorAll("[data-paint-history-index]").forEach((T) => {
          T.onclick = () => {
            const F = Number(T.getAttribute("data-paint-history-index")), G = h.customPaintHistory[F];
            G && (h.customPaintColor = fn(G), h.paintColor = fn(G), un());
          };
        });
      }
    }
    const l = _r(h.primaryTool === "paint" ? h.paintTool : h.maskTool), d = h.brushSizes[l] ?? 10, g = rp();
    zt.forEach((N) => {
      N.classList.toggle("disabled", g);
    }), I.forEach((N) => {
      N.value = String(d);
      const x = (d - 1) / 119 * 100;
      N.style.setProperty("--v", `${j(x, 0, 100)}%`), N.disabled = g;
    }), L.forEach((N) => {
      N.textContent = String(d);
    });
  }
  function ci(i, a, s, l, d, g, _, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = s, v.dataset.min = String(d), v.dataset.max = String(g), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${d}' max='${g}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${d}' max='${g}' step='${_}' value='${Sc(a[s] || 0)}'>`;
    const [N, x] = v.querySelectorAll("input"), P = () => {
      const T = Number(d), F = Number(g), tt = (Number(N.value) - T) / Math.max(1e-6, F - T) * 100;
      N.style.setProperty("--v", `${j(tt, 0, 100)}%`);
    };
    N.disabled = !b, x.disabled = !b;
    const E = (T) => {
      if (!b) return;
      let F = Number(T);
      Number.isNaN(F) && (F = 0), F = j(F, d, g), s === "yaw_deg" && (F = Fe(F)), a[s] = F, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = Br(a)), N.value = String(F), x.value = Sc(F), P(), ft();
    };
    N.oninput = () => E(N.value), x.oninput = () => E(x.value), N.onchange = () => le(), x.onchange = () => le(), P(), i.appendChild(v);
  }
  function Us() {
    const i = be();
    if (!i) return;
    h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: vi(i)
    }, W.querySelectorAll(".pano-field[data-key]").forEach((g) => {
      const _ = g.dataset.key;
      if (!_ || !(_ in i)) return;
      const b = g.querySelector("input[type='range']"), v = g.querySelector("input[type='number']");
      if (!b || !v) return;
      const N = Number(g.dataset.min ?? b.min ?? 0), x = Number(g.dataset.max ?? b.max ?? 0);
      let P = Number(i[_] || 0);
      Number.isNaN(P) && (P = 0), P = j(P, N, x);
      const E = String(P);
      b.value !== E && (b.value = E);
      const T = Sc(P);
      v.value !== T && (v.value = T);
      const F = (P - N) / Math.max(1e-6, x - N) * 100;
      b.style.setProperty("--v", `${j(F, 0, 100)}%`);
    });
    const s = vi(i), l = W.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), W.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((g) => {
      g.classList.toggle("active", String(g.getAttribute("data-aspect")) === s);
    });
  }
  function ne() {
    var ot, Et, Ot, Tt, Ht, Ut, Kt, qt, he, Jn, Qn, eo, sa, di, hi, no;
    if (o) return;
    const i = [...W.children].slice(0, 2);
    W.innerHTML = "", i.forEach((At) => W.appendChild(At));
    const a = W.querySelector(".pano-side-actions");
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
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Ht = p.ui_settings) != null && Ht.invert_view_y ? "false" : "true"}">Normal</button>
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
      const ke = Jt.querySelector("[data-setting='invert-x']"), Ln = Jt.querySelector("[data-setting='invert-y']"), tr = Jt.querySelector("[data-ui-picker='quality']"), Dn = Jt.querySelector("[data-action='ui-reset-defaults']"), er = (ue, Ne, wn, pi) => {
        const wr = ue.querySelector(".pano-picker-trigger"), ro = ue.querySelector(".pano-picker-label"), xn = ue.querySelector(".pano-picker-pop"), xr = () => {
          const On = String(wn()), Fn = Ne.find((io) => String(io.value) === On) || Ne[0];
          ro.textContent = Fn.label, xn.innerHTML = "", Ne.forEach((io) => {
            const oo = document.createElement("button");
            oo.type = "button", oo.className = `pano-picker-item${String(io.value) === On ? " active" : ""}`, oo.textContent = io.label, oo.onclick = () => {
              pi(io.value), xn.hidden = !0, xr(), vr(), ft();
            }, xn.appendChild(oo);
          });
        };
        return wr.onclick = (On) => {
          On.stopPropagation(), Jt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Fn) => {
            Fn !== xn && (Fn.hidden = !0);
          }), xn.hidden = !xn.hidden;
        }, xr(), xr;
      }, Rn = (ue, Ne) => {
        ue.setAttribute("data-selected", Ne ? "1" : "0"), ue.querySelectorAll(".pano-segment-btn").forEach((wn) => {
          wn.setAttribute("aria-pressed", wn.getAttribute("data-value") === (Ne ? "1" : "0") ? "true" : "false");
        });
      };
      ke.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const Ne = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = Ne, Rn(ke, Ne), vr(), ft();
        };
      }), Ln.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const Ne = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = Ne, Rn(Ln, Ne), vr(), ft();
        };
      });
      const Vt = er(
        tr,
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
      Dn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Rn(ke, !1), Rn(Ln, !1), Vt(), vr(), ft();
      }, At.appendChild(Jt), W.appendChild(At);
      const re = document.createElement("div");
      re.className = "pano-side-footer", re.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', re.querySelector("[data-action='close-preview']").onclick = () => fi(), W.appendChild(re), to(At);
      return;
    }
    const s = be(), l = In(), d = Pl();
    l.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && d !== "stroke" && (h.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (d === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (d === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: vi(s)
    });
    const g = h.panelLastValues || (e === "stickers" || d === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = d === "stroke" ? null : s, b = _ || g, v = !!_, N = document.createElement("div");
    N.className = "pano-inspector";
    const x = document.createElement("div");
    for (x.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; x.firstChild; ) N.appendChild(x.firstChild);
    if (W.appendChild(N), e === "stickers" || e === "cutout") {
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
      const ke = At.querySelector(".pano-picker-trigger"), Ln = At.querySelector(".pano-picker-label"), tr = At.querySelector(".pano-picker-pop"), Dn = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? rn().forEach((Vt, re) => {
        var wn, pi;
        const ue = Pe(Vt) ? String(Vt.id || Hr) : String(((pi = (wn = p.assets) == null ? void 0 : wn[Vt.asset_id]) == null ? void 0 : pi.name) || Vt.asset_id || Vt.id), Ne = `${re + 1}. ${ue}${Pe(Vt) && ri(Vt) ? " (hidden)" : ""}`;
        Dn.push({ id: Vt.id, label: Ne, item: Vt, kind: "image" });
      }) : Qh().forEach((Vt) => {
        Dn.push({ id: Vt.item.id, label: Vt.label, item: Vt.item, kind: Vt.kind });
      });
      const er = (_ == null ? void 0 : _.id) || "", Rn = Dn.find((Vt) => Vt.id === er) || Dn[0];
      Ln.innerHTML = Rn.item ? kl(Rn) : ka(String(Rn.label || "")), tr.innerHTML = "", Dn.forEach((Vt) => {
        const re = document.createElement("button");
        re.type = "button", re.className = `pano-picker-item${Vt.id === er ? " active" : ""}`, re.innerHTML = Vt.item ? kl(Vt) : ka(String(Vt.label || "")), re.onclick = () => {
          tr.hidden = !0, Uo(Vt.item || null);
          const ue = Vt.item || null;
          if (ue && !Ae(ue)) {
            const Ne = Fe(Number(ue.yaw_deg || 0)), wn = j(Number(ue.pitch_deg || 0), -89.9, 89.9);
            nn(Ne, wn, h.viewFov);
          }
          ne(), Xt(), ft();
        }, tr.appendChild(re);
      }), ke.disabled = Dn.length <= 1, ke.onclick = (Vt) => {
        Vt.stopPropagation(), !ke.disabled && (tr.hidden = !tr.hidden);
      }, N.appendChild(At);
    }
    const P = document.createElement("div");
    P.className = "pano-state-actions", P.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Lt.copy}<span>Copy State</span></button>`;
    const E = P.querySelector("[data-action='copy-state-inline']");
    E.disabled = !v || d === "stroke" || l.length > 1, E.onclick = async () => {
      if (!v || d === "stroke" || l.length > 1) return;
      const At = JSON.stringify(e === "cutout" && d !== "image" ? Tl(b) : fp(s));
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
    T.className = `pano-params${h.panelWasEnabled ? "" : " disabled"}`, N.appendChild(T), l.length > 1 ? (T.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, T.classList.toggle("disabled", !v), h.panelWasEnabled = v, Bo()) : (ci(T, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !r), ci(T, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !r), ci(T, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !r), ci(T, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !r), e === "stickers" || d === "image" ? ci(T, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !r) : ci(T, b, "roll_deg", "Roll", -180, 180, 0.1, v && !r), v !== h.panelWasEnabled ? requestAnimationFrame(() => {
      T.classList.toggle("disabled", !v);
    }) : T.classList.toggle("disabled", !v), h.panelWasEnabled = v, Bo());
    const F = document.createElement("div");
    F.className = "pano-visibility-section", F.innerHTML = `
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
    const G = Array.isArray((qt = (Kt = p == null ? void 0 : p.painting) == null ? void 0 : Kt.paint) == null ? void 0 : qt.strokes) ? p.painting.paint.strokes.length : 0, tt = Array.isArray((Jn = (he = p == null ? void 0 : p.painting) == null ? void 0 : he.mask) == null ? void 0 : Jn.strokes) ? p.painting.mask.strokes.length : 0, gt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((At) => String((At == null ? void 0 : At.name) || "")) : [], Nt = jh(
      t,
      gt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), dt = !!String((Nt == null ? void 0 : Nt.src) || "").trim() || Al("pano_input_images").length > 0, _t = Array.isArray(rn()) && rn().length > 0 || G > 0, ht = tt > 0, xt = (At) => At === "panorama" ? dt : At === "objects" ? _t : ht, ut = (At, Jt) => {
      const ke = At.closest("[data-visibility-row]"), Ln = xt(String(At.getAttribute("data-visibility") || ""));
      At.innerHTML = Jt ? Lt.eye : Lt.eye_dashed, At.setAttribute("aria-pressed", Jt ? "true" : "false"), At.setAttribute("data-tip", Jt ? "Hide" : "Show"), At.disabled = !Ln, At.classList.toggle("active", !!Jt), ke == null || ke.classList.toggle("is-hidden", !Jt), ke == null || ke.classList.toggle("is-disabled", !Ln);
    };
    if (F.querySelectorAll("[data-visibility]").forEach((At) => {
      const Jt = String(At.getAttribute("data-visibility") || ""), ke = () => Jt === "panorama" ? !!h.showPanorama : Jt === "objects" ? !!h.showObjects : !!h.showMask;
      ut(At, ke()), At.onclick = () => {
        xt(Jt) && (Jt === "panorama" ? h.showPanorama = !h.showPanorama : Jt === "objects" ? h.showObjects = !h.showObjects : h.showMask = !h.showMask, ut(At, ke()), ft());
      };
    }), N.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), N.appendChild(F), !r) {
      const At = document.createElement("details");
      At.className = "pano-ui-settings", At.open = !1, At.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Lt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Qn = p.ui_settings) != null && Qn.invert_view_x ? "1" : "0"}">
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
      const Jt = At.querySelector("[data-setting='invert-x']"), ke = At.querySelector("[data-setting='invert-y']"), Ln = At.querySelector("[data-ui-picker='quality']"), tr = At.querySelector("[data-action='ui-reset-defaults']"), Dn = (Vt, re, ue, Ne) => {
        const wn = Vt.querySelector(".pano-picker-trigger"), pi = Vt.querySelector(".pano-picker-label"), wr = Vt.querySelector(".pano-picker-pop"), ro = () => {
          const xn = String(ue()), xr = re.find((On) => String(On.value) === xn) || re[0];
          pi.textContent = xr.label, wr.innerHTML = "", re.forEach((On) => {
            const Fn = document.createElement("button");
            Fn.type = "button", Fn.className = `pano-picker-item${String(On.value) === xn ? " active" : ""}`, Fn.textContent = On.label, Fn.onclick = () => {
              Ne(On.value), wr.hidden = !0, ro(), vr(), t.setDirtyCanvas(!0, !0), ft();
            }, wr.appendChild(Fn);
          });
        };
        return wn.onclick = (xn) => {
          xn.stopPropagation(), At.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((xr) => {
            xr !== wr && (xr.hidden = !0);
          }), wr.hidden = !wr.hidden;
        }, ro(), ro;
      }, er = (Vt, re) => {
        Vt.setAttribute("data-selected", re ? "1" : "0"), Vt.querySelectorAll(".pano-segment-btn").forEach((ue) => {
          ue.setAttribute("aria-pressed", ue.getAttribute("data-value") === (re ? "1" : "0") ? "true" : "false");
        });
      };
      Jt.querySelectorAll(".pano-segment-btn").forEach((Vt) => {
        Vt.onclick = () => {
          const re = Vt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = re, er(Jt, re), vr(), t.setDirtyCanvas(!0, !0), ft();
        };
      }), ke.querySelectorAll(".pano-segment-btn").forEach((Vt) => {
        Vt.onclick = () => {
          const re = Vt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = re, er(ke, re), vr(), t.setDirtyCanvas(!0, !0), ft();
        };
      });
      const Rn = Dn(
        Ln,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Vt) => {
          const re = String(Vt || "balanced");
          p.ui_settings.preview_quality = re === "draft" || re === "high" ? re : "balanced";
        }
      );
      tr.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", er(Jt, !1), er(ke, !1), Rn(), vr(), t.setDirtyCanvas(!0, !0), ft();
      }, N.appendChild(At);
    }
    const B = document.createElement("div");
    B.className = "pano-side-footer", B.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, B.querySelector("[data-action='cancel-close']").onclick = () => fi(), B.querySelector("[data-action='save-close']").onclick = () => {
      ru(), fi();
    }, W.appendChild(B), to(N);
  }
  function Jo(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(i.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Xl(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Jo(i)) return;
    const a = ho("asset"), s = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = s;
      });
      yt.set(a, l);
      const d = await Es(i, String(i.name || a));
      p.assets[a] = d;
      const g = ho("st");
      p.stickers.push({
        id: g,
        asset_id: a,
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Lr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Cl()
      }), Uo(p.stickers[p.stickers.length - 1]), Gs(), le(), Se(), ne(), Xt(), ft();
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete p.assets[a], yt.delete(a);
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Zl(i) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof i != "function" || i(s);
    }, a.click();
  }
  function Bs() {
    r || e !== "stickers" && e !== "cutout" || Zl((i) => {
      Xl(i);
    });
  }
  async function vg(i) {
    if (r || e !== "stickers" && e !== "cutout") return;
    const a = be();
    if (!a || !Le(a) || Pe(a) || !Jo(i)) return;
    const s = ho("asset"), l = URL.createObjectURL(i);
    try {
      const d = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = l;
      });
      yt.set(s, d);
      const g = await Es(i, String(i.name || s));
      p.assets[s] = g, a.asset_id = s, a.vFOV_deg = Lr(
        Number(a.hFOV_deg || 30),
        Number(d.naturalWidth || d.width || 1),
        Number(d.naturalHeight || d.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Yi(), bn(), le(), Se(), ne(), Xt(), ft();
    } catch (d) {
      console.error("[PanoramaSuite] failed to replace sticker asset", d), delete p.assets[s], yt.delete(s);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function _g() {
    if (r) return;
    const i = be();
    !i || !Le(i) || Pe(i) || Zl((a) => {
      vg(a);
    });
  }
  async function wg() {
    if (r || e !== "stickers") return;
    const i = p.assets && typeof p.assets == "object" ? p.assets : {}, a = Object.entries(i).filter(([, l]) => {
      const d = String((l == null ? void 0 : l.type) || "").toLowerCase(), g = String((l == null ? void 0 : l.value) || "");
      return d === "dataurl" && g.startsWith("data:image");
    });
    if (!a.length) return;
    let s = !1;
    for (const [l, d] of a)
      try {
        const g = String((d == null ? void 0 : d.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((P) => P.blob()), b = String(_.type || "image/png").split("/")[1] || "png", v = String((d == null ? void 0 : d.name) || `${l}.${b}`), N = new File([_], v, { type: _.type || "image/png" }), x = await Es(N, v);
        p.assets[l] = {
          ...x,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, s = !0;
      } catch (g) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: g });
      }
    s && (Se(), ft());
  }
  function Jl() {
    r || e === "cutout" && (Gs(), p.shots = [{
      id: ho("sh"),
      yaw_deg: h.viewYaw,
      pitch_deg: h.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Rh(64, 40)
    }], Uo(p.shots[0]), h.cutoutAspectOpen = !1, le(), Se(), ne(), ft({ cause: "cutout_frame" }));
  }
  function xg() {
    r || e === "cutout" && (p.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, p.active.selected_shot_id = null, le(), Se(), ne(), ft());
  }
  function Sg() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of i)
      Pe(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function Ql(i, a, s = "Clear") {
    return new Promise((l) => {
      const d = document.createElement("div");
      d.className = "pano-canvas-confirm", d.innerHTML = `
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
        d.remove(), l(!!v);
      };
      d.addEventListener("pointerdown", (v) => {
        v.target === d && g(!1);
      });
      const _ = d.querySelector("[data-action='cancel']"), b = d.querySelector("[data-action='confirm']");
      _.onclick = () => g(!1), b.onclick = () => g(!0), $.appendChild(d), b.focus();
    });
  }
  async function tu() {
    var s, l;
    if (r || !await Ql(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ko(null), En();
    const a = Sg();
    e === "stickers" ? (p.stickers = a, p.assets = {}, h.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, Yi()) : (p.stickers = a, p.assets = {}, p.shots = [], h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Yi()), le(), Se(), ne(), Xt(), ft();
  }
  async function Ng(i) {
    var g, _, b, v;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = ui(a);
    if (!(!l.length && !(((g = h.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = h.interaction) == null ? void 0 : _.layerKind) === a) || !await Ql(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = h.interaction) == null ? void 0 : b.kind) === "draw" && ((v = h.interaction) == null ? void 0 : v.layerKind) === a) {
        const N = Zn();
        N && h.paintEngine.cancelActiveStroke(N), h.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = ln().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== a), a === "paint" && (Ie().length = 0), En(), le(), Se(), ne(), Xt(), un(), ft();
    }
  }
  function Mg() {
    if (r) return;
    const i = be();
    if (!i || !Le(i) || Pe(i)) return;
    const a = JSON.parse(JSON.stringify(i));
    a.id = ho("st"), a.yaw_deg = Fe((a.yaw_deg || 0) + 8), a.z_index = Cl(), p.stickers.push(a), p.active.selected_sticker_id = a.id, h.selectedId = a.id, h.selectedIds = [a.id], bn(), le(), Se(), Xt(), ne(), ft();
  }
  function eu() {
    var s, l, d, g, _, b, v;
    if (r) return;
    const i = In(), a = be();
    if (!(!a && i.length === 0)) {
      if (i.length > 1) {
        const N = new Set(i.filter((E) => Ae(E)).map((E) => String(E.actionGroupId || E.id || ""))), x = new Set(i.filter((E) => We(E)).map((E) => Ke(E.rasterObjectId || E.id || ""))), P = new Set(i.filter(Le).map((E) => String(E.id || "")));
        N.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((E) => !N.has(String((E == null ? void 0 : E.actionGroupId) || ""))), p.painting.groups = Ie().filter((E) => !N.has(String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || ""))), En()), x.size > 0 && (p.painting.raster_objects = ln().filter((E) => !x.has(String((E == null ? void 0 : E.id) || ""))), Zi()), P.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((E) => P.has(String((E == null ? void 0 : E.id) || "")) ? Pe(E) ? (ri(E) || (E.visible = !1), !0) : !1 : !0), Yi(), bn()), h.selectedId = null, h.selectedIds = [], le(), Se(), ne(), Xt(), ft();
        return;
      }
      if (Ae(a)) {
        const N = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (d = p.painting) == null ? void 0 : d.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== N), p.painting.groups = Ie().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== N), En(), h.selectedId = null, h.selectedIds = [], le(), Se(), ne(), Xt(), ft();
        return;
      }
      if (We(a)) {
        const N = Ke(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = ln().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== N), Zi(), h.selectedId = null, h.selectedIds = [], le(), Se(), ne(), Xt(), ft();
        return;
      }
      if (e === "stickers" || Le(a)) {
        if (Pe(a)) {
          if (ri(a)) return;
          a.visible = !1, bn(), le(), Se(), ne(), Xt(), ft();
          return;
        }
        p.stickers = p.stickers.filter((N) => N.id !== a.id), Yi(), bn(), h.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((b = p.stickers[0]) == null ? void 0 : b.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, le(), Se(), ne(), Xt(), ft();
        return;
      }
      xg();
    }
  }
  function Pg(i, a) {
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
      const T = Number(i.hFOV_deg || 64), F = Number(i.vFOV_deg || 40);
      return Math.abs(T - F) > 1e-6 ? T >= F : Wc(i) >= 1;
    })();
    let [d, g] = s[String(a)] || s["1:1"];
    d >= g !== l && ([d, g] = [g, d]);
    const _ = d / g, b = j(Number(i.hFOV_deg || 64), 1, 179), v = j(Number(i.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, b * v)), x = j(N * Math.sqrt(_), 1, 179), P = j(N / Math.sqrt(_), 1, 179);
    i.hFOV_deg = x, i.vFOV_deg = P, i.aspect_id = String(a);
  }
  function kg(i) {
    if (!i) return;
    const a = Math.max(1, Number(i.hFOV_deg || 90)), s = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = s, i.vFOV_deg = a, i.aspect_id = Br(i);
  }
  function nu() {
    Tr().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function Cg() {
    if (r) return;
    const i = In();
    if (!be() || i.length === 0) return;
    nu();
    const s = Tr(), l = new Set(i.map((b) => Le(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], g = [];
    if (s.forEach((b) => {
      var N, x;
      const v = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((x = b.item) == null ? void 0 : x.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : g.push(b);
    }), !d.length || d[d.length - 1] === s[s.length - 1]) return;
    [...g, ...d].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), bn(), le(), Se(), Xt(), ft();
  }
  function Ag() {
    if (r) return;
    const i = In();
    if (!be() || i.length === 0) return;
    nu();
    const s = Tr(), l = new Set(i.map((b) => Le(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], g = [];
    if (s.forEach((b) => {
      var N, x;
      const v = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((x = b.item) == null ? void 0 : x.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : g.push(b);
    }), !d.length || d[0] === s[0]) return;
    [...d, ...g].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), bn(), le(), Se(), Xt(), ft();
  }
  function ru() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = Wf(f.value, Number(p.output_preset || 2048))), m && (p.bg_color = String(m.value || p.bg_color || "#00ff00")), Tn(), t.setDirtyCanvas(!0, !0));
  }
  function Tn() {
    var a;
    if (r) return;
    const i = JSON.stringify(p);
    y && (y.value = i, (a = y.callback) == null || a.call(y, i));
  }
  function vr() {
    p.ui_settings = ov(p.ui_settings), r || Tn();
  }
  function Se() {
    var i;
    r || (Tn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function Gs() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", un(), ne());
  }
  function li(i) {
    const a = C.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * C.width,
      y: (i.clientY - a.top) / a.height * C.height
    };
  }
  function iu() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function ie() {
    var s;
    if (e !== "cutout") return null;
    const i = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === a) || i[0] || null;
  }
  function Ye(i = ie()) {
    var E, T, F, G;
    if (!i) return null;
    const a = Math.max(1e-4, Number(((E = ki(i)) == null ? void 0 : E.aspect) || 1)), s = 56, l = Math.max(80, C.width - s * 2), d = Math.max(80, C.height - s * 2);
    let g = l, _ = g / a;
    _ > d && (_ = d, g = _ * a);
    const b = Math.max(0.1, Number(((T = h.frameView) == null ? void 0 : T.zoom) || 1)), v = g * b, N = _ * b, x = Number(((F = h.frameView) == null ? void 0 : F.panX) || 0), P = Number(((G = h.frameView) == null ? void 0 : G.panY) || 0);
    return {
      x: (C.width - v) * 0.5 + x,
      y: (C.height - N) * 0.5 + P,
      w: v,
      h: N
    };
  }
  function Ks() {
    return e === "cutout" && h.mode === "frame" && !!ie();
  }
  function vn(i, a = performance.now()) {
    if (h.mode === "unwrap") {
      const g = gr(), _ = (i.x - g.x) / Math.max(1, g.w), b = (i.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: j(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Is(i.x, i.y), { lon: l, lat: d } = Rs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - d / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function _n(i, a, s = performance.now()) {
    const l = Ye(a);
    if (!l) return null;
    const d = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, g = Vs(a, d);
    if (!g) return null;
    const { lon: _, lat: b } = Rs(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Ig(i, a) {
    var N;
    const s = ie(), l = Ye(s);
    if (!s || !l) return !1;
    const d = Math.max(0.1, Number(((N = h.frameView) == null ? void 0 : N.zoom) || 1)), g = j(d * Number(a), 0.25, 12);
    if (Math.abs(g - d) < 1e-6) return !1;
    const _ = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    h.frameView.zoom = g;
    const v = Ye(s);
    return v ? (h.frameView.panX += Number(i.x) - (v.x + v.w * _), h.frameView.panY += Number(i.y) - (v.y + v.h * b), !0) : !1;
  }
  function Eg(i, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function _r(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? rr : on[a] ? a : h.activeBrushPresetId || rr;
  }
  function ou() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (iu() || Ks());
  }
  function au() {
    var i;
    return ou() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Qo(i, a = !0) {
    const s = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), d = a !== !1, g = h.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== d || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return h.pointerPos = { x: s, y: l, inside: d }, _;
  }
  function Tg() {
    var x, P;
    if (!au()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? h.maskTool : h.paintTool, s = _r(a), l = on[s] || on[rr], d = Number(h.brushSizes[s] ?? 10), g = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), b = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(h.paintColor), v = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : j(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : j(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: Mn(b, v),
      strokeStyle: Mn(b, N),
      x: Number(((x = h.pointerPos) == null ? void 0 : x.x) || 0),
      y: Number(((P = h.pointerPos) == null ? void 0 : P.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Lg() {
    var E, T, F;
    const i = Tg();
    if (!R) return;
    if (!i) {
      R.style.display = "none";
      return;
    }
    let a = i.radius * 2, s = i.radius * 2, l = "999px", d = 0, g = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let x = Number(i.hotspotX ?? a * 0.5), P = Number(i.hotspotY ?? s * 0.5);
    if (i.toolKind === "lasso_fill")
      a = ss, s = ss, l = "0", _ = "0", b = "none", x = Wb, P = qb, g = Qb(i.fillStyle, N, v);
    else if (i.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const G = Math.max(1, Number(((E = i.preset) == null ? void 0 : E.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * G), s = Math.max(6, i.radius * 2), l = `${Math.min(6, s * 0.42)}px`, d = Number(((F = (T = i.preset) == null ? void 0 : T.angle) == null ? void 0 : F.value) || 0) * Ur;
    } else i.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    R.style.display = "block", R.style.width = `${Math.round(a)}px`, R.style.height = `${Math.round(s)}px`, R.style.borderRadius = l, R.style.border = _, R.style.boxShadow = b, R.style.background = g, R.style.backgroundRepeat = "no-repeat", R.style.backgroundPosition = "center", R.style.backgroundSize = "contain", R.style.transform = `translate(${Math.round(i.x - x)}px, ${Math.round(i.y - P)}px) rotate(${d}deg)`;
  }
  function Dg() {
    var Nt;
    if (!D || !H) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? h.maskTool : h.paintTool;
    if (a === "lasso_fill") return;
    const s = _r(a), l = on[s] || on[rr], d = Number(h.brushSizes[s] ?? 10), g = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), b = a === "eraser", v = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(h.paintColor), N = i === "mask" ? Mn(v, 0.22) : b ? "rgba(255,255,255,0.14)" : Mn(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), x = i === "mask" ? Mn(v, 0.96) : b ? "rgba(255,255,255,0.72)" : Mn(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let P = _ * 2, E = _ * 2, T = "999px", F = 0, G = N;
    const tt = "rgba(222, 222, 222, 0.72)", gt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      G = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const dt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      P = Math.max(16, _ * 2 * dt), E = Math.max(10, _ * 2), T = `${Math.min(8, E * 0.42)}px`, F = Number(((Nt = l == null ? void 0 : l.angle) == null ? void 0 : Nt.value) || 0) * Ur;
    } else a === "brush" ? G = `radial-gradient(circle at 50% 50%, ${x} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (P = Math.max(18, _ * 1.8), E = P, G = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${x} 43%, ${x} 58%, rgba(0,0,0,0) 59%)`) : b && (G = "rgba(255,255,255,0.12)");
    H.style.width = `${Math.round(P)}px`, H.style.height = `${Math.round(E)}px`, H.style.borderRadius = T, H.style.background = G, H.style.border = `1px solid ${tt}`, H.style.boxShadow = `0 0 0 1px ${gt}`, H.style.transform = `rotate(${F}deg)`, V && (clearTimeout(V), V = 0), D.classList.remove("fade-out"), D.classList.add("show");
  }
  function ta() {
    !D || !D.classList.contains("show") || (D.classList.add("fade-out"), V && clearTimeout(V), V = window.setTimeout(() => {
      D.classList.remove("show", "fade-out"), V = 0;
    }, 180));
  }
  function Rg(i, a, s, l) {
    const d = _r(a), g = on[d] || on[rr], _ = h.brushSizes[d] ?? 10, b = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), v = Eg(l, b), N = s.map((P) => ({
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
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((P) => ({ ...P })),
        points: N.map((P) => ({ ...P }))
      }
    };
    return jf(x, g), x;
  }
  function Og(i, a, s, l) {
    const d = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), g = _r(a), _ = on[g] || on[rr], b = {
      id: _i(i),
      actionGroupId: _i("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
      layerKind: i,
      toolKind: a,
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
    return jf(b, _), b;
  }
  function ui(i) {
    const a = p.painting || (p.painting = ko(null)), s = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Fg(i, a, s = performance.now()) {
    let l;
    if (h.mode === "frame") {
      const N = ie();
      if (!N) return !1;
      l = _n(a, N, s);
    } else
      l = vn(a, s);
    const d = i.stroke.geometry.rawPoints || i.stroke.geometry.points, g = i.stroke.geometry.points, _ = d[d.length - 1];
    if (_) {
      const N = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (N < 15e-4 && x < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...b }), g.push({ ...b });
    const v = Zn();
    if (v) {
      const N = h.paintEngine.ensureTarget(v);
      h.paintEngine.appendStrokePoint(N, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function $g(i, a, s = performance.now()) {
    var _, b;
    let l;
    if (h.mode === "frame") {
      const v = ie();
      if (!v) return !1;
      l = _n(a, v, s);
    } else
      l = vn(a, s);
    const d = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(d)) return !1;
    const g = d[d.length - 1];
    if (g) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (v < 15e-4 && N < 15e-4) return !1;
    }
    return d.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Hg(i) {
    var dt, _t, ht, xt, ut;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    si();
    const s = Zn(), l = Dr(s.width, s.height);
    if (!Wl(l, a, { w: s.width, h: s.height })) return !1;
    const d = ((_t = (dt = l.ctx) == null ? void 0 : dt.getImageData(0, 0, s.width, s.height)) == null ? void 0 : _t.data) || null;
    if (!d) return !1;
    const g = new Map(Ie().map((B) => [String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim(), B ? { ...B } : null])), _ = [], b = [], v = [...ln().filter((B) => String((B == null ? void 0 : B.layerKind) || "paint") !== "paint")];
    let N = !1, x = Tr().reduce((B, ot) => Math.max(B, Number((ot == null ? void 0 : ot.z_index) || 0)), -1) + 1;
    function P(B, ot, Et, Ot = 8) {
      let Tt = ot, Ht = Et, Ut = -1, Kt = -1;
      for (let qt = 0; qt < Et; qt += 1)
        for (let he = 0; he < ot; he += 1)
          B[(qt * ot + he) * 4 + 3] <= Ot || (he < Tt && (Tt = he), qt < Ht && (Ht = qt), he > Ut && (Ut = he), qt > Kt && (Kt = qt));
      return Ut < Tt || Kt < Ht ? null : { minX: Tt, minY: Ht, maxX: Ut, maxY: Kt };
    }
    const E = P(d, s.width, s.height, 8);
    if (!E) return !1;
    function T(B, ot) {
      return !B || !ot ? !1 : !(B.maxX < ot.minX || ot.maxX < B.minX || B.maxY < ot.minY || ot.maxY < B.minY);
    }
    function F(B, ot) {
      const Et = Er((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "", "paint", ot);
      if (!Et) return null;
      const Ot = Et.centerUv.u - Et.halfW, Tt = Et.centerUv.u + Et.halfW, Ht = Et.centerUv.v - Et.halfH, Ut = Et.centerUv.v + Et.halfH, Kt = s.width, qt = s.height;
      return {
        minX: Math.floor((Ot % 1 + 1) % 1 * Kt),
        maxX: Math.ceil((Tt % 1 + 1) % 1 * Kt),
        minY: Math.floor(j(Ht, 0, 1) * qt),
        maxY: Math.ceil(j(Ut, 0, 1) * qt),
        wraps: Tt - Ot >= 1 || Ot < 0 || Tt > 1
      };
    }
    function G(B) {
      const ot = (B == null ? void 0 : B.bbox) || null;
      if (!ot) return null;
      const Et = (B == null ? void 0 : B.transform) || {}, Ot = s.width, Tt = s.height, Ht = Number(ot.u0 || 0) + Number(Et.du || 0), Ut = Number(ot.u1 || 0) + Number(Et.du || 0), Kt = Number(ot.v0 || 0) + Number(Et.dv || 0), qt = Number(ot.v1 || 0) + Number(Et.dv || 0);
      return {
        minX: Math.floor((Ht % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((Ut % 1 + 1) % 1 * Ot),
        minY: Math.floor(j(Kt, 0, 1) * Tt),
        maxY: Math.ceil(j(qt, 0, 1) * Tt),
        wraps: Ut - Ht >= 1 || Ht < 0 || Ut > 1
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
        if (d[Tt * 4 + 3] <= 8) continue;
        const Ut = Et.data[Tt * 4 + 3], Kt = Ot.data[Tt * 4 + 3];
        if (Ut > Kt)
          return { touched: !0, canvas: ot.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Nt(B, ot, Et) {
      const Ot = Number(Et == null ? void 0 : Et.z_index), Tt = sg(B, ot, Et).map((Ht, Ut) => ({
        ...Ht,
        z_index: Number.isFinite(Ot) ? Ot + Ut * 1e-3 : x + Ut * 1e-3
      }));
      return Tt.length && (x = Math.max(x, ...Tt.map((Ht) => Number((Ht == null ? void 0 : Ht.z_index) || 0))) + 1), Tt;
    }
    for (const B of Ie()) {
      const ot = String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim();
      if (!ot) continue;
      const Et = yn(ot, "paint");
      if (!tt(F(B, Et))) {
        b.push(B), _.push(...Et);
        continue;
      }
      const Ot = ((xt = (ht = h.paintEngine) == null ? void 0 : ht.getGroupTarget) == null ? void 0 : xt.call(ht, ot)) || null, Tt = ((ut = Ot == null ? void 0 : Ot.committedPaint) == null ? void 0 : ut.canvas) || null;
      if (!Tt) {
        b.push(B), _.push(...Et);
        continue;
      }
      const Ht = gt(Tt);
      if (!Ht.touched || !Ht.canvas) {
        b.push(B), _.push(...Et);
        continue;
      }
      N = !0;
      const Ut = Nt(Ht.canvas, "paint", g.get(ot) || B || {});
      v.push(...Ut);
    }
    for (const B of ln().filter((ot) => String((ot == null ? void 0 : ot.layerKind) || "paint") === "paint")) {
      if (!tt(G(B))) {
        v.push(B);
        continue;
      }
      const ot = Ko(B, null);
      if (!ot) {
        v.push(B);
        continue;
      }
      const Et = gt(ot);
      if (!Et.touched || !Et.canvas) {
        v.push(B);
        continue;
      }
      N = !0;
      const Ot = Nt(Et.canvas, "paint", B);
      v.push(...Ot);
    }
    return N ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((B, ot) => Number((B == null ? void 0 : B.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), p.painting.raster_objects = v.sort((B, ot) => Number((B == null ? void 0 : B.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function Vg(i) {
    var g, _, b, v;
    const a = ((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = zs(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), Hg(i);
    const l = i.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && _l((b = i.stroke) == null ? void 0 : b.actionGroupId), ui(i.layerKind).push(i.stroke), !0);
    const d = a.rawPoints || a.points || [];
    return d.length < 1 ? !1 : (a.processedPoints = zs(d, i.stroke.targetSpace, !0), l && _l((v = i.stroke) == null ? void 0 : v.actionGroupId), ui(i.layerKind).push(i.stroke), !0);
  }
  function su(i) {
    var s;
    if (e === "cutout" && h.mode === "frame") {
      const l = ie(), d = Ye(l);
      if (!l || !d || !(Number((i == null ? void 0 : i.x) || 0) >= Number(d.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(d.x || 0) + Number(d.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(d.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(d.y || 0) + Number(d.h || 0))) return null;
      const _ = _n(i, l, performance.now()), b = _ ? Xi(_) : null;
      if (b)
        for (const N of Fs()) {
          if (!Le(N)) continue;
          const x = Ji(N, b);
          if (x && Number(x.x) >= 0 && Number(x.x) <= 1 && Number(x.y) >= 0 && Number(x.y) <= 1) {
            const P = De(N);
            if (P != null && P.visible) return { item: N, geom: P };
          }
        }
      const v = Ns(!1).slice().sort((N, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of v) {
        if (N.type === "strokeGroup") {
          const E = ni(dr("paint", N.actionGroupId || N.id || ""));
          if (!E) continue;
          const T = De(E);
          if (!(T != null && T.visible)) continue;
          const F = Array.isArray(T.strokePaths) ? T.strokePaths : [];
          for (const G of F) {
            const tt = Array.isArray(G == null ? void 0 : G.points) ? G.points : [];
            if (!tt.length) continue;
            if (G.closed && tt.length >= 3 && ir(i, tt)) return { item: E, geom: T };
            const gt = Math.max(8, Number((G == null ? void 0 : G.lineWidth) || 0) * 0.5 + 6);
            for (let Nt = 0; Nt < tt.length - 1; Nt += 1)
              if (wc(i, tt[Nt], tt[Nt + 1]) <= gt * gt) return { item: E, geom: T };
            if (tt.length === 1 && jr(i, tt[0]) <= gt * gt) return { item: E, geom: T };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const E = ei(hr(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!E) continue;
          const T = De(E);
          if (Rl(E, T, i, _)) return { item: E, geom: T };
          continue;
        }
        const x = N.item;
        if (!x || !Le(x) || !b) continue;
        const P = Ji(x, b);
        if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
          const E = De(x);
          if (E != null && E.visible) return { item: x, geom: E };
        }
      }
      return null;
    }
    const a = [
      ...Ns(!1).slice().sort((l, d) => Number((d == null ? void 0 : d.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var d;
        return l.type === "strokeGroup" ? ni(dr("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ei(hr(((d = l.item) == null ? void 0 : d.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Fs().filter((l) => mn(l)) : []
    ];
    for (const l of a) {
      if (Ae(l)) {
        const g = De(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of _) {
          const v = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!v.length) continue;
          if (b.closed && v.length >= 3 && ir(i, v)) return { item: l, geom: g };
          const N = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < v.length - 1; x += 1)
            if (wc(i, v[x], v[x + 1]) <= N * N) return { item: l, geom: g };
          if (v.length === 1 && jr(i, v[0]) <= N * N) return { item: l, geom: g };
        }
        continue;
      }
      if (We(l)) {
        const g = De(l);
        if (!(g != null && g.visible)) continue;
        if (Rl(l, g, i)) return { item: l, geom: g };
        continue;
      }
      const d = De(l);
      if (d.visible && ir(i, d.corners))
        return { item: l, geom: d };
    }
    return null;
  }
  function Ws(i, a) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((g) => jr(g, a) <= 121);
      if (l >= 0) {
        const g = i.corners[l], _ = g.x - i.center.x, b = g.y - i.center.y, v = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const d = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of d) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && ir(a, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (wc(a, _[v], _[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return ir(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return ir(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((d) => jr(d, a) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = i.corners.findIndex((l) => jr(l, a) <= 121);
    if (s >= 0) {
      const l = i.corners[s], d = l.x - i.center.x, g = l.y - i.center.y, _ = d * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return jr(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : ir(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function cu(i, a) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function zg(i, a) {
    return !!i && !!a && Number(a.x) >= Number(i.x0) && Number(a.x) <= Number(i.x1) && Number(a.y) >= Number(i.y0) && Number(a.y) <= Number(i.y1);
  }
  function jg(i, a) {
    if (!i || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((d) => zg(i, d))) return !0;
    const s = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ir({ x: s, y: l }, a.corners);
  }
  function ve(i) {
    if (Lg(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" ? C.style.cursor = h.interaction.cursor || "nwse-resize" : h.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (au()) {
      C.style.cursor = "none";
      return;
    }
    if (h.mode === "frame" && h.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const a = be(), s = a ? De(a) : null, l = a ? pr(a) : !1, d = l ? { kind: "none", cursor: "default" } : Ws(s, i);
    if (!l && d.kind !== "none") {
      C.style.cursor = d.cursor;
      return;
    }
    if (h.primaryTool === "cursor" && su(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function Xt() {
    if (!Y) return;
    const i = be(), a = In();
    if (!i && a.length === 0 || h.interaction) {
      Y.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const ut = "multi", B = ks(a);
      if (h.menuMode !== ut)
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${B ? "Unlock" : "Lock"}" data-tip="${B ? "Unlock" : "Lock"}">${B ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `, h.menuMode = ut, h.menuSize.measured = !1, to(Y);
      else {
        const At = Y.querySelector("[data-action='toggle-lock']");
        At && (At.innerHTML = B ? Lt.lock_open : Lt.lock_closed, At.setAttribute("aria-label", B ? "Unlock" : "Lock"), At.setAttribute("data-tip", B ? "Unlock" : "Lock"));
      }
      const ot = Ps(a);
      if (!(ot != null && ot.visible)) {
        Y.style.display = "none";
        return;
      }
      const Et = ot.corners.map((At) => At.x), Ot = ot.corners.map((At) => At.y), Tt = Math.min(...Et), Ht = Math.max(...Et), Ut = Math.max(...Ot), Kt = Y.style.display, qt = Y.style.visibility;
      Y.style.display = "flex", Y.style.visibility = "hidden";
      const he = Y.getBoundingClientRect(), Jn = Math.round(Number((he == null ? void 0 : he.width) || 0)) || Y.offsetWidth || h.menuSize.w || 220, Qn = Math.round(Number((he == null ? void 0 : he.height) || 0)) || Y.offsetHeight || h.menuSize.h || 40;
      h.menuSize.w = Number.isFinite(Jn) && Jn > 0 ? Jn : 220, h.menuSize.h = Number.isFinite(Qn) && Qn > 0 ? Qn : 40, Y.style.display = Kt, Y.style.visibility = qt, h.menuSize.measured = !0;
      const eo = h.menuSize.w, sa = h.menuSize.h, di = 14;
      Y.style.display = "flex";
      let hi = (Tt + Ht) * 0.5 - eo * 0.5, no = Ut + 18;
      if (hi = j(hi, di, C.width - eo - di), no + sa > C.height - di) {
        Y.style.display = "none";
        return;
      }
      Y.style.left = `${hi}px`, Y.style.top = `${no}px`;
      return;
    }
    const s = Pl(), l = pr(i), d = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Pe(i) ? "external" : "normal"}` : `cutout:${h.cutoutAspectOpen ? "open" : "closed"}`;
    if (h.menuMode !== d) {
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
        const ut = vi(i);
        Y.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Lt.aspect}</button>
            <div class="pano-aspect-popover${h.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${ut === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${ut === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${ut === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${ut === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Lt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `;
      }
      h.menuMode = d, h.menuSize.measured = !1, to(Y);
    }
    if ((e === "stickers" || s === "image") && Pe(i)) {
      const ut = Y.querySelector("[data-action='back-initial']");
      if (ut) {
        const ot = sp();
        ut.disabled = !ot, ut.setAttribute("aria-disabled", ot ? "false" : "true"), ut.setAttribute("data-tip", ot ? "Back to initial position" : "Already at initial position");
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
    const b = _.corners, v = b.map((ut) => ut.x), N = b.map((ut) => ut.y), x = Math.min(...v), P = Math.max(...v), E = Math.max(...N), T = Y.style.display, F = Y.style.visibility;
    Y.style.display = "flex", Y.style.visibility = "hidden";
    const G = Y.getBoundingClientRect(), tt = Math.round(Number((G == null ? void 0 : G.width) || 0)) || Y.offsetWidth || h.menuSize.w || 220, gt = Math.round(Number((G == null ? void 0 : G.height) || 0)) || Y.offsetHeight || h.menuSize.h || 40;
    h.menuSize.w = Number.isFinite(tt) && tt > 0 ? tt : 220, h.menuSize.h = Number.isFinite(gt) && gt > 0 ? gt : 40, Y.style.display = T, Y.style.visibility = F, h.menuSize.measured = !0;
    const Nt = h.menuSize.w, dt = h.menuSize.h, _t = 14;
    Y.style.display = "flex";
    let ht = (x + P) * 0.5 - Nt * 0.5, xt = E + 18;
    if (!Number.isFinite(ht) || !Number.isFinite(xt)) {
      Y.style.display = "none";
      return;
    }
    if (ht = j(ht, _t, C.width - Nt - _t), xt + dt > C.height - _t) {
      Y.style.display = "none";
      return;
    }
    Y.style.left = `${ht}px`, Y.style.top = `${xt}px`;
  }
  function ea() {
    Z && (Wt.timer && (clearTimeout(Wt.timer), Wt.timer = 0), Wt.target = null, Z.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Ug(i) {
    if (!Z || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    Z.textContent = a;
    const s = $.getBoundingClientRect(), l = i.getBoundingClientRect(), d = 8, g = Z.offsetWidth || 100, _ = Z.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), v = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    Z.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let N = l.left - s.left + l.width * 0.5 - g * 0.5, x = l.top - s.top - _ - 8;
    if (b)
      Z.classList.add("pano-tooltip-tool-rail"), N = l.right - s.left + 10, x = l.top - s.top + l.height * 0.5 - _ * 0.5, N = j(N, d, Math.max(d, s.width - g - d)), x = j(x, d, Math.max(d, s.height - _ - d));
    else if (v) {
      Z.classList.add("pano-tooltip-footer");
      const P = i.closest(".pano-paint-footer"), E = P ? P.getBoundingClientRect() : l;
      N = E.left - s.left + E.width * 0.5 - g * 0.5, x = E.bottom - s.top + 5, N = j(N, d, Math.max(d, s.width - g - d)), x = Math.max(d, x);
    }
    N = j(N, d, Math.max(d, s.width - g - d)), x = Math.max(d, x), Z.style.left = `${N}px`, Z.style.top = `${x}px`, Z.classList.add("show");
  }
  function to(i) {
    i.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        Wt.target = a, Wt.timer && clearTimeout(Wt.timer), Wt.timer = window.setTimeout(() => {
          Wt.target === a && Ug(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        Wt.target === a && (Wt.target = null), ea();
      }), a.addEventListener("pointerdown", ea));
    });
  }
  const Re = ws({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Fe(Number(i.yaw || 0)), h.viewPitch = j(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = j(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = p.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: gr,
    onInteraction: () => {
      kt.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const a = li(i);
    if (Qo(a, !0), h.viewTween = null, Re.state.inertia.active = !1, Re.state.inertia.vx = 0, Re.state.inertia.vy = 0, i.button === 1) {
      i.preventDefault(), h.mode !== "frame" && (h.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now())), ve(a), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      h.mode === "pano" && (h.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now()), ve(a), C.setPointerCapture(i.pointerId));
      return;
    }
    if (wt && !wt.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (iu() || Ks())) {
      const b = h.primaryTool === "mask" ? "mask" : "paint", v = h.primaryTool === "mask" ? h.maskTool : h.paintTool, N = Ks() ? ie() : null, x = { kind: "ERP_GLOBAL" }, P = N ? _n(a, N, performance.now()) : vn(a, performance.now());
      h.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: _i("live"),
        stroke: v === "lasso_fill" ? Og(b, v, [P], x) : Rg(b, v, [P], x)
      }, qi();
      const E = Zn();
      if (E)
        if (h.paintEngine.beginStroke(h.interaction.stroke, E), h.interaction.kind === "paint_stroke") {
          const T = h.paintEngine.ensureTarget(E), F = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), G = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          h.paintEngine.appendStrokePoint(T, F, G, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, E);
      ve(a), C.setPointerCapture(i.pointerId), ft();
      return;
    }
    const s = In(), l = be(), d = s.length > 1 ? Ps(s) : l ? De(l) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: a, current: a }, ve(a), C.setPointerCapture(i.pointerId), ft({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (d != null && d.visible)) {
      if ((s.some((v) => pr(v)) ? { kind: "none" } : Ws(d, a)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: a.x - d.center.x, y: a.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: s.filter((v) => Le(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var x, P;
              const N = De(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Ae(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: an(yn(v.actionGroupId, v.layerKind)),
            frameSnapshot: an(Er(v.actionGroupId, v.layerKind)),
            center: (() => {
              var x, P;
              const N = De(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: xl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => We(v)).map((v) => ({
            id: Ke(v.rasterObjectId || v.id || ""),
            snapshot: an(ln().find((N) => String((N == null ? void 0 : N.id) || "") === Ke(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var x, P;
              const N = De(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Cp(v)
          }))
        }, ve(a), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const b = pr(l) ? { kind: "none" } : Ws(d, a);
      if (b.kind === "scale") {
        h.interaction = Ae(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          snapshot: an(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: an(Er(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, ve(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        h.interaction = {
          kind: b.kind,
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(a.x - d.center.x, a.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ve(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        h.interaction = Ae(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(a.y - d.center.y, a.x - d.center.x),
          snapshot: an(yn(l.actionGroupId, l.layerKind)),
          frameSnapshot: an(Er(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - d.center.y, a.x - d.center.x)
        }, ve(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Ae(l)) {
          const v = h.mode === "frame" ? (() => {
            const N = ie();
            return N ? _n(a, N, performance.now()) : null;
          })() : vn(a, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: an(yn(l.actionGroupId, l.layerKind)),
            frameSnapshot: an(Er(l.actionGroupId, l.layerKind))
          }, ve(a), C.setPointerCapture(i.pointerId);
          return;
        }
        if (We(l)) {
          const v = h.mode === "frame" ? (() => {
            const N = ie();
            return N ? _n(a, N, performance.now()) : null;
          })() : vn(a, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: an(ln().find((N) => String((N == null ? void 0 : N.id) || "") === Ke(l.rasterObjectId || l.id || "")))
          }, ve(a), C.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - d.center.x, y: a.y - d.center.y }
        }, ve(a), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const g = su(a);
    if (g) {
      const b = h.selectedId !== g.item.id;
      if (b && h.selectedId && (le(), Tn()), Uo(g.item), e === "cutout" && b && (h.cutoutAspectOpen = !1), b && ne(), Xt(), ft(), b) {
        ve(a);
        return;
      }
      if (pr(g.item)) {
        ve(a);
        return;
      }
      h.interaction = {
        kind: Ae(g.item) ? "move_stroke_group" : We(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: a.x - g.geom.center.x, y: a.y - g.geom.center.y },
        startUv: Ae(g.item) || We(g.item) ? h.mode === "frame" ? (() => {
          const v = ie();
          return v ? _n(a, v, performance.now()) : null;
        })() : vn(a, performance.now()) : null,
        snapshot: Ae(g.item) ? an(yn(g.item.actionGroupId, g.item.layerKind)) : We(g.item) ? an(ln().find((v) => String((v == null ? void 0 : v.id) || "") === Ke(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Ae(g.item) ? an(Er(g.item.actionGroupId, g.item.layerKind)) : null
      }, ve(a), C.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!h.selectedId;
    _ && (le(), Tn()), ii(), _ && ne(), Xt(), ft(), h.mode === "pano" && (h.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now()), ve(a), C.setPointerCapture(i.pointerId));
  }, C.onpointermove = (i) => {
    var l, d, g, _, b, v, N, x, P, E, T, F, G, tt, gt, Nt, dt, _t;
    const a = li(i);
    if (Qo(a, !0), !h.interaction) {
      ve(a);
      return;
    }
    ve(a);
    const s = h.interaction;
    if (s.kind === "paint_stroke") {
      const ht = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let xt = !1;
      ht.forEach((ut) => {
        const B = li(ut);
        Fg(s, B, performance.now()) && (xt = !0);
      }), xt && ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ht = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let xt = !1;
      if (ht.forEach((ut) => {
        const B = li(ut);
        $g(s, B, performance.now()) && (xt = !0);
      }), xt) {
        const ut = Zn();
        ut && h.paintEngine.updateActiveStroke(s.stroke, ut), ft({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ht = performance.now();
      Re.moveDrag(a.x, a.y, h.mode === "unwrap" ? "unwrap" : "pano", ht), s.lastTs = ht, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      h.frameView.panX += a.x - s.last.x, h.frameView.panY += a.y - s.last.y, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ht = a.x - s.offset.x, xt = a.y - s.offset.y;
      if (h.mode === "frame" && e === "cutout") {
        const ut = ie(), B = Ye(ut);
        if (!ut || !B) return;
        const ot = {
          x: j((ht - B.x) / Math.max(1, B.w), 0, 1),
          y: j((xt - B.y) / Math.max(1, B.h), 0, 1)
        }, Et = Vs(ut, ot);
        if (!Et) return;
        const Ot = Na(Et);
        s.item.yaw_deg = Ot.yaw, s.item.pitch_deg = Ot.pitch;
      } else if (h.mode === "unwrap") {
        const ut = gr(), B = j((ht - ut.x) / Math.max(ut.w, 1), 0, 1), ot = j((xt - ut.y) / Math.max(ut.h, 1), 0, 1);
        s.item.yaw_deg = Fe(B * 360 - 180), s.item.pitch_deg = j(90 - ot * 180, -90, 90);
      } else {
        const ut = Is(ht, xt), B = Na(ut);
        s.item.yaw_deg = B.yaw, s.item.pitch_deg = B.pitch;
      }
      ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ht = h.mode === "frame" ? (() => {
        const B = ie();
        return B ? _n(a, B, performance.now()) : null;
      })() : vn(a, performance.now());
      if (!ht || !s.startUv) return;
      const xt = Number(ht.u || 0) - Number(s.startUv.u || 0), ut = Number(ht.v || 0) - Number(s.startUv.v || 0);
      Sl((l = s.item) == null ? void 0 : l.actionGroupId, xt, ut, s.snapshot, (d = s.item) == null ? void 0 : d.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ht = h.mode === "frame" ? (() => {
        const B = ie();
        return B ? _n(a, B, performance.now()) : null;
      })() : vn(a, performance.now());
      if (!ht || !s.startUv) return;
      const xt = Number(ht.u || 0) - Number(s.startUv.u || 0), ut = Number(ht.v || 0) - Number(s.startUv.v || 0);
      Ml(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", xt, ut, s.snapshot) && (Zi(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ht = a.x - Number(((b = s.offset) == null ? void 0 : b.x) || 0), xt = a.y - Number(((v = s.offset) == null ? void 0 : v.y) || 0);
      let ut = !1, B = !1, ot = !1;
      const Et = ht - Number(((N = s.startCenter) == null ? void 0 : N.x) || ht), Ot = xt - Number(((x = s.startCenter) == null ? void 0 : x.y) || xt);
      for (const Tt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ht = (e === "cutout" ? Ms() : rn()).find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === String(Tt.id || ""));
        if (!Ht || !Le(Ht)) continue;
        const Ut = {
          x: Number(((P = Tt.center) == null ? void 0 : P.x) || 0) + Et,
          y: Number(((E = Tt.center) == null ? void 0 : E.y) || 0) + Ot
        };
        if (h.mode === "frame" && e === "cutout") {
          const Kt = ie(), qt = Ye(Kt);
          if (!Kt || !qt) continue;
          const he = {
            x: j((Ut.x - qt.x) / Math.max(1, qt.w), 0, 1),
            y: j((Ut.y - qt.y) / Math.max(1, qt.h), 0, 1)
          }, Jn = Vs(Kt, he);
          if (!Jn) continue;
          const Qn = Na(Jn);
          Ht.yaw_deg = Qn.yaw, Ht.pitch_deg = Qn.pitch;
        } else if (h.mode === "unwrap") {
          const Kt = gr(), qt = j((Ut.x - Kt.x) / Math.max(Kt.w, 1), 0, 1), he = j((Ut.y - Kt.y) / Math.max(Kt.h, 1), 0, 1);
          Ht.yaw_deg = Fe(qt * 360 - 180), Ht.pitch_deg = j(90 - he * 180, -90, 90);
        } else {
          const Kt = Is(Ut.x, Ut.y), qt = Na(Kt);
          Ht.yaw_deg = qt.yaw, Ht.pitch_deg = qt.pitch;
        }
        ut = !0;
      }
      for (const Tt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ht = {
          x: Number(((T = Tt.center) == null ? void 0 : T.x) || 0) + Et,
          y: Number(((F = Tt.center) == null ? void 0 : F.y) || 0) + Ot
        }, Ut = h.mode === "frame" ? (() => {
          const qt = ie();
          return qt ? _n(Ht, qt, performance.now()) : null;
        })() : vn(Ht, performance.now()), Kt = Tt.centerUv || null;
        if (Ut && Kt) {
          const qt = Number(Ut.u || 0) - Number(Kt.u || 0), he = Number(Ut.v || 0) - Number(Kt.v || 0);
          Sl(Tt.id, qt, he, Tt.snapshot, Tt.layerKind, Tt.frameSnapshot) && (ut = !0, B = !0);
        }
      }
      for (const Tt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ht = {
          x: Number(((G = Tt.center) == null ? void 0 : G.x) || 0) + Et,
          y: Number(((tt = Tt.center) == null ? void 0 : tt.y) || 0) + Ot
        }, Ut = h.mode === "frame" ? (() => {
          const qt = ie();
          return qt ? _n(Ht, qt, performance.now()) : null;
        })() : vn(Ht, performance.now()), Kt = Tt.centerUv || null;
        if (Ut && Kt) {
          const qt = Number(Ut.u || 0) - Number(Kt.u || 0), he = Number(Ut.v || 0) - Number(Kt.v || 0);
          Ml(Tt.id, qt, he, Tt.snapshot) && (ut = !0, ot = !0);
        }
      }
      ut && (B ? En({ rebuildPaintEngine: !0 }) : ot ? Zi() : bn(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Nl((gt = s.item) == null ? void 0 : gt.actionGroupId, xt, 0, s.snapshot, (Nt = s.item) == null ? void 0 : Nt.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ht = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Ur;
      i.shiftKey && (ht = Math.round(ht / 45) * 45), Nl((dt = s.item) == null ? void 0 : dt.actionGroupId, 1, ht, s.snapshot, (_t = s.item) == null ? void 0 : _t.layerKind, s.frameSnapshot) && (En({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * xt, 1, 179), s.item.vFOV_deg = j(s.startVFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = j(s.startVFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let xt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Ur, ut = s.startRot - xt;
      i.shiftKey && (ut = Math.round(ut / 45) * 45);
      const B = Le(s.item) ? "rot_deg" : "roll_deg";
      s.item[B] = ut, ft({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var a, s, l, d, g, _;
    const i = h.interaction;
    if (((a = h.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (qi(), Vg(h.interaction)) {
        En();
        const b = String(((l = h.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const N = Ie().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === b);
          N && (N.frame = null);
        }
        const v = Zn();
        v && (String(((d = h.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(v), Gl()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, v)), le(), Tn(), ne(), Xt(), t.setDirtyCanvas(!0, !0), ft();
      } else {
        const b = Zn();
        b && h.paintEngine.cancelActiveStroke(b);
      }
    else if (((g = h.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = cu(h.interaction.start, h.interaction.current), N = [
        ...e === "cutout" ? Fs().filter((x) => !mn(x)) : [...rn()],
        ...Gh(),
        ...Kh()
      ].filter((x) => jg(b, De(x)));
      Jh(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && N.length && (h.cutoutAspectOpen = !1), ne(), Xt(), ft();
    } else if (h.interaction && h.interaction.kind !== "view" && h.interaction.kind !== "pan_frame") {
      let b = !1;
      (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (b = !0), h.interaction.kind === "move_raster_object" && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (b = !0), b && Zi(), le(), Tn(), t.setDirtyCanvas(!0, !0), Us(), h.hqFrames = 1, Xt(), ft();
    }
    h.interaction = null, qi(), i && i.kind === "view" && Re.endDrag(performance.now()), Go(), Xt(), ve(h.pointerPos), ft();
  }, C.onpointercancel = () => {
    var i, a, s;
    if (((i = h.interaction) == null ? void 0 : i.kind) === "view" && Re.endDrag(performance.now()), ((a = h.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = h.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      qi();
      const l = Zn();
      l && h.paintEngine.cancelActiveStroke(l);
    }
    h.interaction = null, qi(), Go(), ve(h.pointerPos), ft({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const a = li(i);
    Qo(a, !0), !h.interaction && ve(a);
  }, C.onmouseleave = () => {
    Qo(h.pointerPos, !1), ve(h.pointerPos);
  }, C.onwheel = (i) => {
    if (h.mode === "frame") {
      const a = li(i), s = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      Ig(a, s) && ft({ localOnly: !0 }), i.preventDefault();
      return;
    }
    h.mode === "pano" && (Re.applyWheelEvent(i) && ft({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Ee(!0));
  }, C.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Zt.depth = 0, Ee(!1);
    const s = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((d) => Jo(d));
    s && Xl(s);
  };
  const lu = (i) => {
    e !== "stickers" && e !== "cutout" || r || Me(i) && (Zt.depth += 1, Ee(!0), i.preventDefault());
  }, uu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!Zt.active && Me(i) && Ee(!0), Zt.active && i.preventDefault());
  }, fu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !Zt.active) return;
    Zt.depth = Math.max(0, Zt.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Zt.depth === 0 || a) && Ee(!1);
  }, du = (i) => {
    e !== "stickers" && e !== "cutout" || r || (Zt.depth = 0, Ee(!1), Me(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", lu, !0), window.addEventListener("dragover", uu, !0), window.addEventListener("dragleave", fu, !0), window.addEventListener("drop", du, !0), Q.forEach((i) => {
    i.onclick = () => {
      i.disabled || (h.mode = i.dataset.view, e === "cutout" && h.mode === "frame" && be() && mn(be()) && (ii({ preservePanelValues: !0 }), ne(), Xt()), Gs(), Go(), ft());
    };
  });
  function qs() {
    const { canUndo: i, canRedo: a } = Yl();
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
  const hu = A.querySelector("[data-action='add']");
  hu && (hu.onclick = () => {
    r || (e === "stickers" ? Bs() : Jl());
  });
  const pu = A.querySelector("[data-action='clear']");
  pu && (pu.onclick = () => {
    r || tu();
  });
  const gu = A.querySelector("[data-action='save']");
  gu && (gu.onclick = () => {
    r || ru();
  }), A.querySelector("[data-action='reset-view']").onclick = () => {
    nn(0, 0, 100, 180, 680);
  };
  const Or = A.querySelector("[data-action='toggle-grid']"), Zs = () => {
    if (!Or) return;
    const i = !!h.showGrid;
    Or.innerHTML = i ? Lt.eye : Lt.eye_dashed, Or.setAttribute("aria-pressed", i ? "true" : "false"), Or.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Or.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Or && (Zs(), Or.onclick = () => {
    h.showGrid = !h.showGrid, sv(t == null ? void 0 : t.id, h.showGrid), Zs(), ft();
  }), U && (U.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-mode") || "cursor");
      h.primaryTool = a, (a === "paint" || a === "mask") && ii({ preservePanelValues: !0 }), un(), ne(), Xt(), ft();
    };
  }), U.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && i.disabled)) {
        if (a === "undo") Qi(-1);
        else if (a === "redo") Qi(1);
        else if (a === "clear") tu();
        else if (a === "add") Bs();
        else if (a === "add-image") Bs();
        else if (a === "add-or-look") {
          const s = ie();
          if ((p.shots || []).length === 0)
            Jl();
          else {
            const l = s;
            if (!l) return;
            h.selectedId = l.id || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_shot_id = h.selectedId;
            const d = Fe(Number(l.yaw_deg || 0)), g = j(Number(l.pitch_deg || 0), -89.9, 89.9);
            nn(d, g, h.viewFov), ne(), Xt(), ft();
          }
        }
      }
    };
  })), A.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "paint";
      const a = String(i.getAttribute("data-paint-tool") || "pen");
      h.paintTool = a, ii({ preservePanelValues: !0 }), on[a] && (h.activeBrushPresetId = a), un(), ne(), Xt(), ft();
    };
  }), A.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "mask", h.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ii({ preservePanelValues: !0 }), un(), ne(), Xt(), ft();
    };
  }), Gt.forEach((i) => {
    i.onclick = () => {
      const a = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Ng(a);
    };
  }), I.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(i.value)))), s = _r(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      I.forEach((d) => {
        d.value = String(a), d.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), L.forEach((d) => {
        d.textContent = String(a);
      }), Dg();
    }, i.onchange = () => ta(), i.addEventListener("pointerup", ta), i.addEventListener("pointercancel", ta), i.addEventListener("blur", ta);
  }), ct) {
    ct.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Va.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (h.paintColor = fn(s.color), vt(!0), un());
      };
    });
    const i = ct.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), wt && !wt.hidden ? vt(!0) : bt(), un();
    });
  }
  const Bg = (i, a) => {
    var b;
    if (!J) return;
    const s = J.getBoundingClientRect(), l = j((i - s.left) / Math.max(1, s.width), 0, 1), d = 1 - j((a - s.top) / Math.max(1, s.height), 0, 1), g = fo(h.customPaintColor), _ = { ...xc(g.h, l, d), a: Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    h.customPaintColor = fn(_), h.paintColor = fn(_), un();
  }, Gg = (i) => {
    var g;
    if (!Bt) return;
    const a = Bt.getBoundingClientRect(), s = j((i - a.left) / Math.max(1, a.width), 0, 1), l = fo(h.customPaintColor), d = { ...xc(s, l.s, l.v), a: Number(((g = h.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    h.customPaintColor = fn(d), h.paintColor = fn(d), un();
  }, mu = (i, a) => {
    const s = i.pointerId;
    a(i);
    const l = (g) => {
      g.pointerId === s && a(g);
    }, d = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  J && (J.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), mu(i, (a) => Bg(a.clientX, a.clientY));
  }), Bt && (Bt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), mu(i, (a) => Gg(a.clientX));
  }), z && (z.oninput = () => {
    const i = { ...h.customPaintColor, a: j(Number(z.value) / 100, 0, 1) };
    h.customPaintColor = fn(i), h.paintColor = fn(i), un();
  });
  const yu = () => {
    if (!lt) return;
    const i = !!h.fullscreen;
    lt.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, lt.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), lt.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, na = (i) => {
    const a = !!i;
    h.fullscreen !== a && (h.fullscreen = a, A.classList.toggle("pano-modal-fullscreen", a), a ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Zs(), yu(), ft());
  }, bu = () => document.fullscreenElement === k, Kg = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        na(!h.fullscreen);
        return;
      }
      bu() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = k.requestFullscreen) == null ? void 0 : i.call(k));
    } catch {
      na(!h.fullscreen);
    }
  }, vu = () => {
    document.fullscreenEnabled && na(bu());
  };
  document.addEventListener("fullscreenchange", vu), lt && (yu(), lt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), Kg();
  });
  const _u = () => {
    if (!O) return;
    const i = !!h.outputPreviewExpanded;
    O.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, O.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), O.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  O && (_u(), O.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const a = !h.outputPreviewExpanded;
    h.outputPreviewExpanded = a, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = a ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), _u(), ft();
  }), Y.addEventListener("click", (i) => {
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!r) {
      if (s === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Xt(), ft();
        return;
      }
      if (s === "aspect-set") {
        const l = be();
        if (!l) return;
        const d = String(a.getAttribute("data-aspect") || "1:1");
        Pg(l, d), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Us(), le(), Se(), Xt(), ft();
        return;
      }
      if (s === "rotate-90") {
        const l = be();
        if (!l) return;
        kg(l), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Us(), le(), Se(), Xt(), ft();
        return;
      }
      if (s === "bring-front") {
        Cg();
        return;
      }
      if (s === "send-back") {
        Ag();
        return;
      }
      if (s === "duplicate") {
        Mg();
        return;
      }
      if (s === "replace-image") {
        _g();
        return;
      }
      if (s === "toggle-lock") {
        Zh();
        return;
      }
      if (s === "back-initial") {
        op();
        return;
      }
      if (s === "toggle-visible") {
        ip();
        return;
      }
      if (s === "delete") {
        eu();
        return;
      }
      ft();
    }
  });
  const Js = t.onExecuted, Qs = t.onConnectionsChange;
  let tc = null, ec = null, nc = null;
  !r && e === "stickers" && (nc = (i = "sync") => {
    Ll(i);
  }, t.__panoExternalStickerSync = nc, tc = function(...a) {
    var s;
    typeof Js == "function" && Js.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = tc, ec = function(...a) {
    var s;
    typeof Qs == "function" && Qs.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = ec), r || (Kc.set(String(t.id ?? "0"), () => Ds()), kp() && Ds());
  const fi = () => {
    var i, a, s, l, d, g, _, b;
    h.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(h.cutoutPreviewSurfaceRaf), h.cutoutPreviewSurfaceRaf = 0), h.cutoutPreviewSurfaceTimer && (clearTimeout(h.cutoutPreviewSurfaceTimer), h.cutoutPreviewSurfaceTimer = 0), Kc.delete(String(t.id ?? "0")), r || Ds(), document.fullscreenElement === k && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", vu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (d = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (b = (_ = (g = dn) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), ea(), bg(), Ee(!1), window.removeEventListener("keydown", wu, !0), window.removeEventListener("keydown", xu, !0), window.removeEventListener("keydown", ra, !0), window.removeEventListener("keyup", ra, !0), window.removeEventListener("keydown", Su, !0), window.removeEventListener("dragenter", lu, !0), window.removeEventListener("dragover", uu, !0), window.removeEventListener("dragleave", fu, !0), window.removeEventListener("drop", du, !0), !r && e === "stickers" && (t.onExecuted === tc && (t.onExecuted = Js), t.onConnectionsChange === ec && (t.onConnectionsChange = Qs), t.__panoExternalStickerSync === nc && (t.__panoExternalStickerSync = null)), M.unmount(), w.remove();
  }, wu = (i) => {
    var a, s, l, d;
    if (i.key === "Escape") {
      if (h.fullscreen && document.fullscreenElement === k) {
        i.preventDefault(), i.stopPropagation(), (a = i.stopImmediatePropagation) == null || a.call(i), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), na(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (d = i.stopImmediatePropagation) == null || d.call(i), fi();
    }
  }, xu = (i) => {
    const a = String(i.key || ""), s = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !be() || (eu(), i.preventDefault(), i.stopPropagation());
  }, ra = (i) => {
    const a = !!(i.ctrlKey || i.metaKey);
    h.marqueeModifier !== a && (h.marqueeModifier = a, ve(h.pointerPos));
  }, Su = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), s = String(i.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = i.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = Yl();
    i.shiftKey && !_ || !i.shiftKey && !g || (Qi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", wu, !0), window.addEventListener("keydown", xu, !0), window.addEventListener("keydown", ra, !0), window.addEventListener("keyup", ra, !0), window.addEventListener("keydown", Su, !0), k.addEventListener("pointerdown", (i) => {
    i.target === k && fi();
  }), to(A), pp(), !r && e === "stickers" && Ll("open"), wg(), le(), qs(), un(), st && requestAnimationFrame(() => {
    st.classList.add("is-ready");
  }), ne(), Bo(), ql(), ve(h.pointerPos), ft(), kt.rafId = requestAnimationFrame(js);
}
function Yf(t, e, n, r) {
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
    o(y), pv(y, Gc);
    const M = Ci(y, Gc);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const C = M.callback;
      M.callback = ($) => {
        var D;
        const R = C ? C($) : void 0;
        return (D = y.setDirtyCanvas) == null || D.call(y, !0, !1), R;
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
    qc(y, r, () => Io(y, "cutout")), cb(y, {
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
function Pv(t) {
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
function kv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !r && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    qc(t, "Open Preview", () => Io(t, "stickers", { readOnly: !0, hideSidebar: !1 })), sb(t, {
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
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Yf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Yf(t, e, "PanoramaCutout", "Open Cutout Editor"), Fc(n) && Pv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Fc(e) && kv(t);
  }
});
