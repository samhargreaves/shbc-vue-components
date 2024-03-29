import { computed as re, withDirectives as je, openBlock as w, createElementBlock as O, vModelCheckbox as tf, defineComponent as dr, watch as $a, h as zt, createBlock as ie, unref as F, createCommentVNode as V, createElementVNode as C, normalizeClass as Y, createTextVNode as ce, toDisplayString as z, renderSlot as j, vModelSelect as Dp, Fragment as ae, createVNode as he, withCtx as we, vShow as Ut, ref as ne, onMounted as dt, vModelText as Rp, resolveDirective as Np, normalizeProps as Ve, guardReactiveProps as Ke, renderList as Ze, resolveDynamicComponent as zo, mergeProps as Mn, toHandlers as Lp, Transition as Mr, withModifiers as Bt, withKeys as Tr, normalizeStyle as ta, shallowRef as Fp, markRaw as ru, reactive as ml, onUnmounted as Xn, toRefs as Mp, nextTick as Bp, Teleport as jp, pushScopeId as zp, popScopeId as Up } from "vue";
const Vp = ["value"], QO = {
  __name: "Checkbox",
  props: {
    checked: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(t, { emit: e }) {
    const r = e, n = t, i = re({
      get() {
        return n.checked;
      },
      set(a) {
        r("update:checked", a);
      }
    });
    return (a, o) => je((w(), O("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: "rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500"
    }, null, 8, Vp)), [
      [tf, i.value]
    ]);
  }
};
function nu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nu(Object(r), !0).forEach(function(n) {
      xe(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function da(t) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, da(t);
}
function Hp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function iu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Wp(t, e, r) {
  return e && iu(t.prototype, e), r && iu(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function xe(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function gl(t, e) {
  return Gp(t) || Kp(t, e) || rf(t, e) || Xp();
}
function Qn(t) {
  return qp(t) || Yp(t) || rf(t) || Jp();
}
function qp(t) {
  if (Array.isArray(t))
    return bs(t);
}
function Gp(t) {
  if (Array.isArray(t))
    return t;
}
function Yp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Kp(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, a = !1, o, s;
    try {
      for (r = r.call(t); !(i = (o = r.next()).done) && (n.push(o.value), !(e && n.length === e)); i = !0)
        ;
    } catch (u) {
      a = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return n;
  }
}
function rf(t, e) {
  if (t) {
    if (typeof t == "string")
      return bs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bs(t, e);
  }
}
function bs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Jp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var au = function() {
}, yl = {}, nf = {}, af = null, of = {
  mark: au,
  measure: au
};
try {
  typeof window < "u" && (yl = window), typeof document < "u" && (nf = document), typeof MutationObserver < "u" && (af = MutationObserver), typeof performance < "u" && (of = performance);
} catch {
}
var Qp = yl.navigator || {}, ou = Qp.userAgent, su = ou === void 0 ? "" : ou, Vt = yl, ue = nf, lu = af, $i = of;
Vt.document;
var Ct = !!ue.documentElement && !!ue.head && typeof ue.addEventListener == "function" && typeof ue.createElement == "function", sf = ~su.indexOf("MSIE") || ~su.indexOf("Trident/"), Ii, Di, Ri, Ni, Li, Ot = "___FONT_AWESOME___", ws = 16, lf = "fa", uf = "svg-inline--fa", cr = "data-fa-i2svg", xs = "data-fa-pseudo-element", Zp = "data-fa-pseudo-element-pending", vl = "data-prefix", bl = "data-icon", uu = "fontawesome-i2svg", eh = "async", th = ["HTML", "HEAD", "STYLE", "SCRIPT"], cf = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), se = "classic", pe = "sharp", wl = [se, pe];
function Zn(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[se];
    }
  });
}
var Bn = Zn((Ii = {}, xe(Ii, se, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), xe(Ii, pe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ii)), jn = Zn((Di = {}, xe(Di, se, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), xe(Di, pe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Di)), zn = Zn((Ri = {}, xe(Ri, se, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), xe(Ri, pe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Ri)), rh = Zn((Ni = {}, xe(Ni, se, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), xe(Ni, pe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ni)), nh = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ff = "fa-layers-text", ih = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, ah = Zn((Li = {}, xe(Li, se, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), xe(Li, pe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Li)), df = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oh = df.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), sh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ar = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Un = /* @__PURE__ */ new Set();
Object.keys(jn[se]).map(Un.add.bind(Un));
Object.keys(jn[pe]).map(Un.add.bind(Un));
var lh = [].concat(wl, Qn(Un), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ar.GROUP, ar.SWAP_OPACITY, ar.PRIMARY, ar.SECONDARY]).concat(df.map(function(t) {
  return "".concat(t, "x");
})).concat(oh.map(function(t) {
  return "w-".concat(t);
})), $n = Vt.FontAwesomeConfig || {};
function uh(t) {
  var e = ue.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function ch(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (ue && typeof ue.querySelector == "function") {
  var fh = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  fh.forEach(function(t) {
    var e = gl(t, 2), r = e[0], n = e[1], i = ch(uh(r));
    i != null && ($n[n] = i);
  });
}
var pf = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: lf,
  replacementClass: uf,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
$n.familyPrefix && ($n.cssPrefix = $n.familyPrefix);
var Ur = D(D({}, pf), $n);
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
var N = {};
Object.keys(pf).forEach(function(t) {
  Object.defineProperty(N, t, {
    enumerable: !0,
    set: function(r) {
      Ur[t] = r, In.forEach(function(n) {
        return n(N);
      });
    },
    get: function() {
      return Ur[t];
    }
  });
});
Object.defineProperty(N, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ur.cssPrefix = e, In.forEach(function(r) {
      return r(N);
    });
  },
  get: function() {
    return Ur.cssPrefix;
  }
});
Vt.FontAwesomeConfig = N;
var In = [];
function dh(t) {
  return In.push(t), function() {
    In.splice(In.indexOf(t), 1);
  };
}
var Nt = ws, lt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ph(t) {
  if (!(!t || !Ct)) {
    var e = ue.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = ue.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
    }
    return ue.head.insertBefore(e, n), t;
  }
}
var hh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Vn() {
  for (var t = 12, e = ""; t-- > 0; )
    e += hh[Math.random() * 62 | 0];
  return e;
}
function Qr(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function xl(t) {
  return t.classList ? Qr(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function hf(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function mh(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(hf(t[r]), '" ');
  }, "").trim();
}
function Ia(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function Sl(t) {
  return t.size !== lt.size || t.x !== lt.x || t.y !== lt.y || t.rotate !== lt.rotate || t.flipX || t.flipY;
}
function gh(t) {
  var e = t.transform, r = t.containerWidth, n = t.iconWidth, i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: c
  };
}
function yh(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? ws : r, i = t.height, a = i === void 0 ? ws : i, o = t.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && sf ? u += "translate(".concat(e.x / Nt - n / 2, "em, ").concat(e.y / Nt - a / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(e.x / Nt, "em), calc(-50% + ").concat(e.y / Nt, "em)) ") : u += "translate(".concat(e.x / Nt, "em, ").concat(e.y / Nt, "em) "), u += "scale(".concat(e.size / Nt * (e.flipX ? -1 : 1), ", ").concat(e.size / Nt * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var vh = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function mf() {
  var t = lf, e = uf, r = N.cssPrefix, n = N.replacementClass, i = vh;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
var cu = !1;
function Uo() {
  N.autoAddCss && !cu && (ph(mf()), cu = !0);
}
var bh = {
  mixout: function() {
    return {
      dom: {
        css: mf,
        insertCss: Uo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Uo();
      },
      beforeI2svg: function() {
        Uo();
      }
    };
  }
}, _t = Vt || {};
_t[Ot] || (_t[Ot] = {});
_t[Ot].styles || (_t[Ot].styles = {});
_t[Ot].hooks || (_t[Ot].hooks = {});
_t[Ot].shims || (_t[Ot].shims = []);
var Xe = _t[Ot], gf = [], wh = function t() {
  ue.removeEventListener("DOMContentLoaded", t), pa = 1, gf.map(function(e) {
    return e();
  });
}, pa = !1;
Ct && (pa = (ue.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ue.readyState), pa || ue.addEventListener("DOMContentLoaded", wh));
function xh(t) {
  Ct && (pa ? setTimeout(t, 0) : gf.push(t));
}
function ei(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? hf(t) : "<".concat(e, " ").concat(mh(n), ">").concat(a.map(ei).join(""), "</").concat(e, ">");
}
function fu(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var Sh = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Vo = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? Sh(r, i) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, e[c], c, e);
  return f;
};
function Oh(t) {
  for (var e = [], r = 0, n = t.length; r < n; ) {
    var i = t.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      var a = t.charCodeAt(r++);
      (a & 64512) == 56320 ? e.push(((i & 1023) << 10) + (a & 1023) + 65536) : (e.push(i), r--);
    } else
      e.push(i);
  }
  return e;
}
function Ss(t) {
  var e = Oh(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function _h(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function du(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Os(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = du(e);
  typeof Xe.hooks.addPack == "function" && !i ? Xe.hooks.addPack(t, du(e)) : Xe.styles[t] = D(D({}, Xe.styles[t] || {}), a), t === "fas" && Os("fa", e);
}
var Fi, Mi, Bi, Nr = Xe.styles, Ah = Xe.shims, Eh = (Fi = {}, xe(Fi, se, Object.values(zn[se])), xe(Fi, pe, Object.values(zn[pe])), Fi), Ol = null, yf = {}, vf = {}, bf = {}, wf = {}, xf = {}, Ch = (Mi = {}, xe(Mi, se, Object.keys(Bn[se])), xe(Mi, pe, Object.keys(Bn[pe])), Mi);
function kh(t) {
  return ~lh.indexOf(t);
}
function Th(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !kh(i) ? i : null;
}
var Sf = function() {
  var e = function(a) {
    return Vo(Nr, function(o, s, u) {
      return o[u] = Vo(s, a, {}), o;
    }, {});
  };
  yf = e(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  }), vf = e(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        i[u] = o;
      });
    }
    return i;
  }), xf = e(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(u) {
      i[u] = o;
    }), i;
  });
  var r = "far" in Nr || N.autoFetchSvg, n = Vo(Ah, function(i, a) {
    var o = a[0], s = a[1], u = a[2];
    return s === "far" && !r && (s = "fas"), typeof o == "string" && (i.names[o] = {
      prefix: s,
      iconName: u
    }), typeof o == "number" && (i.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: u
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  bf = n.names, wf = n.unicodes, Ol = Da(N.styleDefault, {
    family: N.familyDefault
  });
};
dh(function(t) {
  Ol = Da(t.styleDefault, {
    family: N.familyDefault
  });
});
Sf();
function _l(t, e) {
  return (yf[t] || {})[e];
}
function Ph(t, e) {
  return (vf[t] || {})[e];
}
function or(t, e) {
  return (xf[t] || {})[e];
}
function Of(t) {
  return bf[t] || {
    prefix: null,
    iconName: null
  };
}
function $h(t) {
  var e = wf[t], r = _l("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ht() {
  return Ol;
}
var Al = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Da(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? se : r, i = Bn[n][t], a = jn[n][t] || jn[n][i], o = t in Xe.styles ? t : null;
  return a || o || null;
}
var pu = (Bi = {}, xe(Bi, se, Object.keys(zn[se])), xe(Bi, pe, Object.keys(zn[pe])), Bi);
function Ra(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, xe(e, se, "".concat(N.cssPrefix, "-").concat(se)), xe(e, pe, "".concat(N.cssPrefix, "-").concat(pe)), e), o = null, s = se;
  (t.includes(a[se]) || t.some(function(c) {
    return pu[se].includes(c);
  })) && (s = se), (t.includes(a[pe]) || t.some(function(c) {
    return pu[pe].includes(c);
  })) && (s = pe);
  var u = t.reduce(function(c, f) {
    var p = Th(N.cssPrefix, f);
    if (Nr[f] ? (f = Eh[s].includes(f) ? rh[s][f] : f, o = f, c.prefix = f) : Ch[s].indexOf(f) > -1 ? (o = f, c.prefix = Da(f, {
      family: s
    })) : p ? c.iconName = p : f !== N.replacementClass && f !== a[se] && f !== a[pe] && c.rest.push(f), !i && c.prefix && c.iconName) {
      var g = o === "fa" ? Of(c.iconName) : {}, v = or(c.prefix, c.iconName);
      g.prefix && (o = null), c.iconName = g.iconName || v || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Nr.far && Nr.fas && !N.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Al());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === pe && (Nr.fass || N.autoFetchSvg) && (u.prefix = "fass", u.iconName = or(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = Ht() || "fas"), u;
}
var Ih = /* @__PURE__ */ function() {
  function t() {
    Hp(this, t), this.definitions = {};
  }
  return Wp(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = D(D({}, r.definitions[s] || {}), o[s]), Os(s, o[s]);
        var u = zn[se][s];
        u && Os(u, o[s]), Sf();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var i = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(i).map(function(a) {
        var o = i[a], s = o.prefix, u = o.iconName, c = o.icon, f = c[2];
        r[s] || (r[s] = {}), f.length > 0 && f.forEach(function(p) {
          typeof p == "string" && (r[s][p] = c);
        }), r[s][u] = c;
      }), r;
    }
  }]), t;
}(), hu = [], Lr = {}, Br = {}, Dh = Object.keys(Br);
function Rh(t, e) {
  var r = e.mixoutsTo;
  return hu = t, Lr = {}, Object.keys(Br).forEach(function(n) {
    Dh.indexOf(n) === -1 && delete Br[n];
  }), hu.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (r[o] = i[o]), da(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = i[o][s];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(o) {
        Lr[o] || (Lr[o] = []), Lr[o].push(a[o]);
      });
    }
    n.provides && n.provides(Br);
  }), r;
}
function _s(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = Lr[t] || [];
  return a.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function fr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = Lr[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function At() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Br[t] ? Br[t].apply(null, e) : void 0;
}
function As(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || Ht();
  if (e)
    return e = or(r, e) || e, fu(_f.definitions, r, e) || fu(Xe.styles, r, e);
}
var _f = new Ih(), Nh = function() {
  N.autoReplaceSvg = !1, N.observeMutations = !1, fr("noAuto");
}, Lh = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ct ? (fr("beforeI2svg", e), At("pseudoElements2svg", e), At("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0), N.observeMutations = !0, xh(function() {
      Mh({
        autoReplaceSvgRoot: r
      }), fr("watch", e);
    });
  }
}, Fh = {
  icon: function(e) {
    if (e === null)
      return null;
    if (da(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: or(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Da(e[0]);
      return {
        prefix: n,
        iconName: or(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(N.cssPrefix, "-")) > -1 || e.match(nh))) {
      var i = Ra(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Ht(),
        iconName: or(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = Ht();
      return {
        prefix: a,
        iconName: or(a, e) || e
      };
    }
  }
}, ze = {
  noAuto: Nh,
  config: N,
  dom: Lh,
  parse: Fh,
  library: _f,
  findIconDefinition: As,
  toHtml: ei
}, Mh = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? ue : r;
  (Object.keys(Xe.styles).length > 0 || N.autoFetchSvg) && Ct && N.autoReplaceSvg && ze.dom.i2svg({
    node: n
  });
};
function Na(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return ei(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Ct) {
        var n = ue.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Bh(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, o = t.transform;
  if (Sl(o) && r.found && !n.found) {
    var s = r.width, u = r.height, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Ia(D(D({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function jh(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, o = a === !0 ? "".concat(e, "-").concat(N.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: D(D({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function El(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, o = t.transform, s = t.symbol, u = t.title, c = t.maskId, f = t.titleId, p = t.extra, g = t.watchable, v = g === void 0 ? !1 : g, h = n.found ? n : r, y = h.width, b = h.height, x = i === "fak", E = [N.replacementClass, a ? "".concat(N.cssPrefix, "-").concat(a) : ""].filter(function(B) {
    return p.classes.indexOf(B) === -1;
  }).filter(function(B) {
    return B !== "" || !!B;
  }).concat(p.classes).join(" "), _ = {
    children: [],
    attributes: D(D({}, p.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: E,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(b)
    })
  }, k = x && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(y / b * 16 * 0.0625, "em")
  } : {};
  v && (_.attributes[cr] = ""), u && (_.children.push({
    tag: "title",
    attributes: {
      id: _.attributes["aria-labelledby"] || "title-".concat(f || Vn())
    },
    children: [u]
  }), delete _.attributes.title);
  var $ = D(D({}, _), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: D(D({}, k), p.styles)
  }), P = n.found && r.found ? At("generateAbstractMask", $) || {
    children: [],
    attributes: {}
  } : At("generateAbstractIcon", $) || {
    children: [],
    attributes: {}
  }, I = P.children, R = P.attributes;
  return $.children = I, $.attributes = R, s ? jh($) : Bh($);
}
function mu(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, o = t.extra, s = t.watchable, u = s === void 0 ? !1 : s, c = D(D(D({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[cr] = "");
  var f = D({}, o.styles);
  Sl(i) && (f.transform = yh({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var p = Ia(f);
  p.length > 0 && (c.style = p);
  var g = [];
  return g.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), a && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), g;
}
function zh(t) {
  var e = t.content, r = t.title, n = t.extra, i = D(D(D({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Ia(n.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [e]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
var Ho = Xe.styles;
function Es(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = gl(n, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(N.cssPrefix, "-").concat(ar.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(N.cssPrefix, "-").concat(ar.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(N.cssPrefix, "-").concat(ar.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: e,
    height: r,
    icon: o
  };
}
var Uh = {
  found: !1,
  width: 512,
  height: 512
};
function Vh(t, e) {
  !cf && !N.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Cs(t, e) {
  var r = e;
  return e === "fa" && N.styleDefault !== null && (e = Ht()), new Promise(function(n, i) {
    if (At("missingIconAbstract"), r === "fa") {
      var a = Of(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Ho[e] && Ho[e][t]) {
      var o = Ho[e][t];
      return n(Es(o));
    }
    Vh(t, e), n(D(D({}, Uh), {}, {
      icon: N.showMissingIcons && t ? At("missingIconAbstract") || {} : {}
    }));
  });
}
var gu = function() {
}, ks = N.measurePerformance && $i && $i.mark && $i.measure ? $i : {
  mark: gu,
  measure: gu
}, Tn = 'FA "6.5.1"', Hh = function(e) {
  return ks.mark("".concat(Tn, " ").concat(e, " begins")), function() {
    return Af(e);
  };
}, Af = function(e) {
  ks.mark("".concat(Tn, " ").concat(e, " ends")), ks.measure("".concat(Tn, " ").concat(e), "".concat(Tn, " ").concat(e, " begins"), "".concat(Tn, " ").concat(e, " ends"));
}, Cl = {
  begin: Hh,
  end: Af
}, ra = function() {
};
function yu(t) {
  var e = t.getAttribute ? t.getAttribute(cr) : null;
  return typeof e == "string";
}
function Wh(t) {
  var e = t.getAttribute ? t.getAttribute(vl) : null, r = t.getAttribute ? t.getAttribute(bl) : null;
  return e && r;
}
function qh(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(N.replacementClass);
}
function Gh() {
  if (N.autoReplaceSvg === !0)
    return na.replace;
  var t = na[N.autoReplaceSvg];
  return t || na.replace;
}
function Yh(t) {
  return ue.createElementNS("http://www.w3.org/2000/svg", t);
}
function Kh(t) {
  return ue.createElement(t);
}
function Ef(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? Yh : Kh : r;
  if (typeof t == "string")
    return ue.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    i.setAttribute(o, t.attributes[o]);
  });
  var a = t.children || [];
  return a.forEach(function(o) {
    i.appendChild(Ef(o, {
      ceFn: n
    }));
  }), i;
}
function Jh(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var na = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Ef(i), r);
      }), r.getAttribute(cr) === null && N.keepOriginalSource) {
        var n = ue.createComment(Jh(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~xl(r).indexOf(N.replacementClass))
      return na.replace(e);
    var i = new RegExp("".concat(N.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(s, u) {
        return u === N.replacementClass || u.match(i) ? s.toSvg.push(u) : s.toNode.push(u), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", a.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return ei(s);
    }).join(`
`);
    r.setAttribute(cr, ""), r.innerHTML = o;
  }
};
function vu(t) {
  t();
}
function Cf(t, e) {
  var r = typeof e == "function" ? e : ra;
  if (t.length === 0)
    r();
  else {
    var n = vu;
    N.mutateApproach === eh && (n = Vt.requestAnimationFrame || vu), n(function() {
      var i = Gh(), a = Cl.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var kl = !1;
function kf() {
  kl = !0;
}
function Ts() {
  kl = !1;
}
var ha = null;
function bu(t) {
  if (lu && N.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? ra : e, n = t.nodeCallback, i = n === void 0 ? ra : n, a = t.pseudoElementsCallback, o = a === void 0 ? ra : a, s = t.observeMutationsRoot, u = s === void 0 ? ue : s;
    ha = new lu(function(c) {
      if (!kl) {
        var f = Ht();
        Qr(c).forEach(function(p) {
          if (p.type === "childList" && p.addedNodes.length > 0 && !yu(p.addedNodes[0]) && (N.searchPseudoElements && o(p.target), r(p.target)), p.type === "attributes" && p.target.parentNode && N.searchPseudoElements && o(p.target.parentNode), p.type === "attributes" && yu(p.target) && ~sh.indexOf(p.attributeName))
            if (p.attributeName === "class" && Wh(p.target)) {
              var g = Ra(xl(p.target)), v = g.prefix, h = g.iconName;
              p.target.setAttribute(vl, v || f), h && p.target.setAttribute(bl, h);
            } else
              qh(p.target) && i(p.target);
        });
      }
    }), Ct && ha.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Xh() {
  ha && ha.disconnect();
}
function Qh(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Zh(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Ra(xl(t));
  return i.prefix || (i.prefix = Ht()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Ph(i.prefix, t.innerText) || _l(i.prefix, Ss(t.innerText))), !i.iconName && N.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function em(t) {
  var e = Qr(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return N.autoA11y && (r ? e["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(n || Vn()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function tm() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: lt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function wu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = Zh(t), n = r.iconName, i = r.prefix, a = r.rest, o = em(t), s = _s("parseNodeAttributes", {}, t), u = e.styleParser ? Qh(t) : [];
  return D({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: lt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: u,
      attributes: o
    }
  }, s);
}
var rm = Xe.styles;
function Tf(t) {
  var e = N.autoReplaceSvg === "nest" ? wu(t, {
    styleParser: !1
  }) : wu(t);
  return ~e.extra.classes.indexOf(ff) ? At("generateLayersText", t, e) : At("generateSvgReplacementMutation", t, e);
}
var Wt = /* @__PURE__ */ new Set();
wl.map(function(t) {
  Wt.add("fa-".concat(t));
});
Object.keys(Bn[se]).map(Wt.add.bind(Wt));
Object.keys(Bn[pe]).map(Wt.add.bind(Wt));
Wt = Qn(Wt);
function xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ct)
    return Promise.resolve();
  var r = ue.documentElement.classList, n = function(p) {
    return r.add("".concat(uu, "-").concat(p));
  }, i = function(p) {
    return r.remove("".concat(uu, "-").concat(p));
  }, a = N.autoFetchSvg ? Wt : wl.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(rm));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(ff, ":not([").concat(cr, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(cr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Qr(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = Cl.begin("onTree"), c = s.reduce(function(f, p) {
    try {
      var g = Tf(p);
      g && f.push(g);
    } catch (v) {
      cf || v.name === "MissingIcon" && console.error(v);
    }
    return f;
  }, []);
  return new Promise(function(f, p) {
    Promise.all(c).then(function(g) {
      Cf(g, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), f();
      });
    }).catch(function(g) {
      u(), p(g);
    });
  });
}
function nm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Tf(t).then(function(r) {
    r && Cf([r], e);
  });
}
function im(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : As(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : As(i || {})), t(n, D(D({}, r), {}, {
      mask: i
    }));
  };
}
var am = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? lt : n, a = r.symbol, o = a === void 0 ? !1 : a, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, p = r.title, g = p === void 0 ? null : p, v = r.titleId, h = v === void 0 ? null : v, y = r.classes, b = y === void 0 ? [] : y, x = r.attributes, E = x === void 0 ? {} : x, _ = r.styles, k = _ === void 0 ? {} : _;
  if (e) {
    var $ = e.prefix, P = e.iconName, I = e.icon;
    return Na(D({
      type: "icon"
    }, e), function() {
      return fr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), N.autoA11y && (g ? E["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(h || Vn()) : (E["aria-hidden"] = "true", E.focusable = "false")), El({
        icons: {
          main: Es(I),
          mask: u ? Es(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: $,
        iconName: P,
        transform: D(D({}, lt), i),
        symbol: o,
        title: g,
        maskId: f,
        titleId: h,
        extra: {
          attributes: E,
          styles: k,
          classes: b
        }
      });
    });
  }
}, om = {
  mixout: function() {
    return {
      icon: im(am)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = xu, r.nodeCallback = nm, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? ue : n, a = r.callback, o = a === void 0 ? function() {
      } : a;
      return xu(i, o);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, o = n.titleId, s = n.prefix, u = n.transform, c = n.symbol, f = n.mask, p = n.maskId, g = n.extra;
      return new Promise(function(v, h) {
        Promise.all([Cs(i, s), f.iconName ? Cs(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(y) {
          var b = gl(y, 2), x = b[0], E = b[1];
          v([r, El({
            icons: {
              main: x,
              mask: E
            },
            prefix: s,
            iconName: i,
            transform: u,
            symbol: c,
            maskId: p,
            title: a,
            titleId: o,
            extra: g,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.transform, s = r.styles, u = Ia(s);
      u.length > 0 && (i.style = u);
      var c;
      return Sl(o) && (c = At("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(c || a.icon), {
        children: n,
        attributes: i
      };
    };
  }
}, sm = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Na({
          type: "layer"
        }, function() {
          fr("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var o = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(u) {
              o = o.concat(u.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(N.cssPrefix, "-layers")].concat(Qn(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, lm = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, p = f === void 0 ? {} : f;
        return Na({
          type: "counter",
          content: r
        }, function() {
          return fr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), zh({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: p,
              classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(Qn(s))
            }
          });
        });
      }
    };
  }
}, um = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? lt : i, o = n.title, s = o === void 0 ? null : o, u = n.classes, c = u === void 0 ? [] : u, f = n.attributes, p = f === void 0 ? {} : f, g = n.styles, v = g === void 0 ? {} : g;
        return Na({
          type: "text",
          content: r
        }, function() {
          return fr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), mu({
            content: r,
            transform: D(D({}, lt), a),
            title: s,
            extra: {
              attributes: p,
              styles: v,
              classes: ["".concat(N.cssPrefix, "-layers-text")].concat(Qn(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, o = n.extra, s = null, u = null;
      if (sf) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, u = f.height / c;
      }
      return N.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, mu({
        content: r.innerHTML,
        width: s,
        height: u,
        transform: a,
        title: i,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, cm = new RegExp('"', "ug"), Su = [1105920, 1112319];
function fm(t) {
  var e = t.replace(cm, ""), r = _h(e, 0), n = r >= Su[0] && r <= Su[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Ss(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Ou(t, e) {
  var r = "".concat(Zp).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Qr(t.children), o = a.filter(function(I) {
      return I.getAttribute(xs) === e;
    })[0], s = Vt.getComputedStyle(t, e), u = s.getPropertyValue("font-family").match(ih), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return t.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var p = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(u[2]) ? pe : se, v = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? jn[g][u[2].toLowerCase()] : ah[g][c], h = fm(p), y = h.value, b = h.isSecondary, x = u[0].startsWith("FontAwesome"), E = _l(v, y), _ = E;
      if (x) {
        var k = $h(y);
        k.iconName && k.prefix && (E = k.iconName, v = k.prefix);
      }
      if (E && !b && (!o || o.getAttribute(vl) !== v || o.getAttribute(bl) !== _)) {
        t.setAttribute(r, _), o && t.removeChild(o);
        var $ = tm(), P = $.extra;
        P.attributes[xs] = e, Cs(E, v).then(function(I) {
          var R = El(D(D({}, $), {}, {
            icons: {
              main: I,
              mask: Al()
            },
            prefix: v,
            iconName: _,
            extra: P,
            watchable: !0
          })), B = ue.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(B, t.firstChild) : t.appendChild(B), B.outerHTML = R.map(function(T) {
            return ei(T);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function dm(t) {
  return Promise.all([Ou(t, "::before"), Ou(t, "::after")]);
}
function pm(t) {
  return t.parentNode !== document.head && !~th.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(xs) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function _u(t) {
  if (Ct)
    return new Promise(function(e, r) {
      var n = Qr(t.querySelectorAll("*")).filter(pm).map(dm), i = Cl.begin("searchPseudoElements");
      kf(), Promise.all(n).then(function() {
        i(), Ts(), e();
      }).catch(function() {
        i(), Ts(), r();
      });
    });
}
var hm = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = _u, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? ue : n;
      N.searchPseudoElements && _u(i);
    };
  }
}, Au = !1, mm = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          kf(), Au = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        bu(_s("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Xh();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Au ? Ts() : bu(_s("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Eu = function(e) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(n, i) {
    var a = i.toLowerCase().split("-"), o = a[0], s = a.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, r);
}, gm = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Eu(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Eu(i)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, i = r.transform, a = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), f = "rotate(".concat(i.rotate, " 0 0)"), p = {
        transform: "".concat(u, " ").concat(c, " ").concat(f)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, v = {
        outer: s,
        inner: p,
        path: g
      };
      return {
        tag: "g",
        attributes: D({}, v.outer),
        children: [{
          tag: "g",
          attributes: D({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: D(D({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, Wo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Cu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function ym(t) {
  return t.tag === "g" ? t.children : [t];
}
var vm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Ra(i.split(" ").map(function(o) {
          return o.trim();
        })) : Al();
        return a.prefix || (a.prefix = Ht()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.mask, s = r.maskId, u = r.transform, c = a.width, f = a.icon, p = o.width, g = o.icon, v = gh({
        transform: u,
        containerWidth: p,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: D(D({}, Wo), {}, {
          fill: "white"
        })
      }, y = f.children ? {
        children: f.children.map(Cu)
      } : {}, b = {
        tag: "g",
        attributes: D({}, v.inner),
        children: [Cu(D({
          tag: f.tag,
          attributes: D(D({}, f.attributes), v.path)
        }, y))]
      }, x = {
        tag: "g",
        attributes: D({}, v.outer),
        children: [b]
      }, E = "mask-".concat(s || Vn()), _ = "clip-".concat(s || Vn()), k = {
        tag: "mask",
        attributes: D(D({}, Wo), {}, {
          id: E,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, x]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: ym(g)
        }, k]
      };
      return n.push($, {
        tag: "rect",
        attributes: D({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(E, ")")
        }, Wo)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, bm = {
  provides: function(e) {
    var r = !1;
    Vt.matchMedia && (r = Vt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: D(D({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = D(D({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: D(D({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: D(D({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: D(D({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: D(D({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: D(D({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: D(D({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: D(D({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, wm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, xm = [bh, om, sm, lm, um, hm, mm, gm, vm, bm, wm];
Rh(xm, {
  mixoutsTo: ze
});
ze.noAuto;
var Pf = ze.config, ti = ze.library;
ze.dom;
var ma = ze.parse;
ze.findIconDefinition;
ze.toHtml;
var Sm = ze.icon;
ze.layer;
var Om = ze.text;
ze.counter;
function ku(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Je(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ku(Object(r), !0).forEach(function(n) {
      Ne(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ku(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ga(t) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ga(t);
}
function Ne(t, e, r) {
  return e = $m(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function _m(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function Am(t, e) {
  if (t == null)
    return {};
  var r = _m(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ps(t) {
  return Em(t) || Cm(t) || km(t) || Tm();
}
function Em(t) {
  if (Array.isArray(t))
    return $s(t);
}
function Cm(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function km(t, e) {
  if (t) {
    if (typeof t == "string")
      return $s(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $s(t, e);
  }
}
function $s(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Tm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pm(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function $m(t) {
  var e = Pm(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Im = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $f = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(x, E, _) {
      if (!c(E) || p(E) || g(E) || v(E) || u(E))
        return E;
      var k, $ = 0, P = 0;
      if (f(E))
        for (k = [], P = E.length; $ < P; $++)
          k.push(r(x, E[$], _));
      else {
        k = {};
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (k[x(I, _)] = r(x, E[I], _));
      }
      return k;
    }, n = function(x, E) {
      E = E || {};
      var _ = E.separator || "_", k = E.split || /(?=[A-Z])/;
      return x.split(k).join(_);
    }, i = function(x) {
      return h(x) ? x : (x = x.replace(/[\-_\s]+(.)?/g, function(E, _) {
        return _ ? _.toUpperCase() : "";
      }), x.substr(0, 1).toLowerCase() + x.substr(1));
    }, a = function(x) {
      var E = i(x);
      return E.substr(0, 1).toUpperCase() + E.substr(1);
    }, o = function(x, E) {
      return n(x, E).toLowerCase();
    }, s = Object.prototype.toString, u = function(x) {
      return typeof x == "function";
    }, c = function(x) {
      return x === Object(x);
    }, f = function(x) {
      return s.call(x) == "[object Array]";
    }, p = function(x) {
      return s.call(x) == "[object Date]";
    }, g = function(x) {
      return s.call(x) == "[object RegExp]";
    }, v = function(x) {
      return s.call(x) == "[object Boolean]";
    }, h = function(x) {
      return x = x - 0, x === x;
    }, y = function(x, E) {
      var _ = E && "process" in E ? E.process : E;
      return typeof _ != "function" ? x : function(k, $) {
        return _(k, x, $);
      };
    }, b = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(x, E) {
        return r(y(i, E), x);
      },
      decamelizeKeys: function(x, E) {
        return r(y(o, E), x, E);
      },
      pascalizeKeys: function(x, E) {
        return r(y(a, E), x);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = b : e.humps = b;
  })(Im);
})($f);
var Dm = $f.exports, Rm = ["class", "style"];
function Nm(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = Dm.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function Lm(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function Tl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Tl(u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.class = Lm(f);
        break;
      case "style":
        u.style = Nm(f);
        break;
      default:
        u.attrs[c] = f;
    }
    return u;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var a = r.style, o = a === void 0 ? {} : a, s = Am(r, Rm);
  return zt(t.tag, Je(Je(Je({}, e), {}, {
    class: i.class,
    style: Je(Je({}, i.style), o)
  }, i.attrs), s), n);
}
var If = !1;
try {
  If = process.env.NODE_ENV === "production";
} catch {
}
function Fm() {
  if (!If && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Dn(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Ne({}, t, e) : {};
}
function Mm(t) {
  var e, r = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, Ne(e, "fa-".concat(t.size), t.size !== null), Ne(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), Ne(e, "fa-pull-".concat(t.pull), t.pull !== null), Ne(e, "fa-swap-opacity", t.swapOpacity), Ne(e, "fa-bounce", t.bounce), Ne(e, "fa-shake", t.shake), Ne(e, "fa-beat", t.beat), Ne(e, "fa-fade", t.fade), Ne(e, "fa-beat-fade", t.beatFade), Ne(e, "fa-flash", t.flash), Ne(e, "fa-spin-pulse", t.spinPulse), Ne(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Tu(t) {
  if (t && ga(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (ma.icon)
    return ma.icon(t);
  if (t === null)
    return null;
  if (ga(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var Vr = dr({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.attrs, i = re(function() {
      return Tu(e.icon);
    }), a = re(function() {
      return Dn("classes", Mm(e));
    }), o = re(function() {
      return Dn("transform", typeof e.transform == "string" ? ma.transform(e.transform) : e.transform);
    }), s = re(function() {
      return Dn("mask", Tu(e.mask));
    }), u = re(function() {
      return Sm(i.value, Je(Je(Je(Je({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    $a(u, function(f) {
      if (!f)
        return Fm("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = re(function() {
      return u.value ? Tl(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
dr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, i = Pf.familyPrefix, a = re(function() {
      return ["".concat(i, "-layers")].concat(Ps(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return zt("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
dr({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, r) {
    var n = r.attrs, i = Pf.familyPrefix, a = re(function() {
      return Dn("classes", [].concat(Ps(e.counter ? ["".concat(i, "-layers-counter")] : []), Ps(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = re(function() {
      return Dn("transform", typeof e.transform == "string" ? ma.transform(e.transform) : e.transform);
    }), s = re(function() {
      var c = Om(e.value.toString(), Je(Je({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = re(function() {
      return Tl(s.value, {}, n);
    });
    return function() {
      return u.value;
    };
  }
});
var Df = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const pr = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Bm = {
  key: 0,
  class: "flex items-center"
}, jm = ["id", "disabled", "required", "name"], zm = ["required", "disabled", "name"], Um = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Vm = ["href"], Hm = {
  __name: "Input",
  props: {
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: Number | String,
    max: Number | String,
    step: Number | String,
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    submitBtn: String,
    autofocus: Boolean,
    pattern: String,
    whatsApp: String,
    switchDescription: String,
    sublabel: String,
    modelValue: {},
    noForm: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    ti.add(Df);
    const e = t;
    function r(n) {
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (w(), O("div", null, [
      t.noLabel ? V("", !0) : (w(), ie(F(Pl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field),
        sublabel: t.sublabel,
        required: t.required
      }, null, 8, ["for", "value", "sublabel", "required"])),
      C("div", {
        class: Y(["relative flex w-full max-w-full items-stretch", t.noLabel ? "" : "mb-4"])
      }, [
        t.type === "checkbox" ? (w(), O("label", Bm, [
          je(C("input", {
            id: t.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": i[0] || (i[0] = (a) => e.form[t.field] = a),
            disabled: e.disabled,
            required: e.required,
            name: t.name ?? t.field
          }, null, 8, jm), [
            [tf, e.form[t.field]]
          ]),
          C("div", {
            class: Y(["toggle-switch focusable !ml-0", {
              checked: e.form[t.field],
              disabled: e.disabled
            }])
          }, null, 2),
          ce(" " + z(t.switchDescription ? t.switchDescription : "Enable") + " ", 1),
          j(n.$slots, "switchDescription", {}, void 0, !0)
        ])) : t.type === "select" ? je((w(), O("select", {
          key: 1,
          "onUpdate:modelValue": i[1] || (i[1] = (a) => e.form[t.field] = a),
          required: e.required,
          disabled: e.disabled,
          name: t.name ?? t.field,
          class: "focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        }, [
          j(n.$slots, "default", {}, void 0, !0)
        ], 8, zm)), [
          [Dp, e.form[t.field]]
        ]) : (w(), O(ae, { key: 2 }, [
          t.addon ? (w(), O("span", Um, z(t.addon), 1)) : V("", !0),
          he(F(Qm), {
            id: t.field,
            type: t.type,
            class: Y(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
              "!rounded-l-none": t.addon,
              "!rounded-r-none": !!t.submitBtn || t.whatsApp
            }]),
            modelValue: e.form[t.field],
            "onUpdate:modelValue": i[2] || (i[2] = (a) => e.form[t.field] = a),
            required: e.required,
            disabled: e.disabled,
            autocomplete: t.field,
            min: e.min,
            max: e.max,
            step: e.step,
            placeholder: e.placeholder,
            autofocus: e.autofocus,
            pattern: e.pattern,
            name: t.name ?? t.field
          }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
          t.submitBtn ? (w(), ie(F(dw), {
            key: 1,
            form: t.form,
            class: "z-[2] inline-block rounded-l-none",
            id: "button-input"
          }, {
            default: we(() => [
              ce(z(t.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form"])) : V("", !0),
          t.whatsApp ? (w(), O("a", {
            key: 2,
            class: "z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg",
            href: t.whatsApp,
            target: "_blank"
          }, [
            he(F(Vr), {
              icon: "fab fa-whatsapp",
              size: "2xl"
            })
          ], 8, Vm)) : V("", !0)
        ], 64))
      ], 2),
      he(F(ri), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
}, ZO = /* @__PURE__ */ pr(Hm, [["__scopeId", "data-v-a86f4663"]]), Wm = { class: "text-sm text-red-600" }, ri = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => je((w(), O("div", null, [
      C("p", Wm, z(t.message), 1)
    ], 512)), [
      [Ut, t.message]
    ]);
  }
}, qm = { class: "font-medium block mb-1 text-sm text-gray-700" }, Gm = { key: 0 }, Ym = { key: 1 }, Km = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Jm = {
  key: 3,
  class: "ml-1 text-red-500"
}, Pl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required"],
  setup(t) {
    return (e, r) => (w(), O("label", qm, [
      t.value ? (w(), O("span", Gm, z(t.value), 1)) : (w(), O("span", Ym, [
        j(e.$slots, "default")
      ])),
      t.sublabel ? (w(), O("span", Km, z(t.sublabel), 1)) : V("", !0),
      t.required ? (w(), O("span", Jm, "*")) : V("", !0)
    ]));
  }
}, Xm = ["value"], Qm = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = ne(null);
    return dt(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (w(), O("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, Xm));
  }
}, Zm = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, eg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], e_ = {
  __name: "Textarea",
  props: {
    field: String,
    label: String,
    required: Boolean,
    disabled: Boolean,
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    autofocus: Boolean,
    modelValue: String,
    rows: Number
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = t;
    function r(n) {
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (w(), O("div", null, [
      t.noLabel ? V("", !0) : (w(), ie(F(Pl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field)
      }, null, 8, ["for", "value"])),
      C("div", Zm, [
        je(C("textarea", {
          id: t.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": i[0] || (i[0] = (a) => e.form[t.field] = a),
          required: e.required,
          disabled: e.disabled,
          autocomplete: t.field,
          placeholder: e.placeholder,
          autofocus: e.autofocus,
          rows: e.rows,
          onInput: i[1] || (i[1] = (a) => n.$emit("update:modelValue", a.target.value))
        }, null, 40, eg), [
          [Rp, e.form[t.field]]
        ])
      ]),
      he(F(ri), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var tg = Object.defineProperty, rg = Object.defineProperties, ng = Object.getOwnPropertyDescriptors, Pu = Object.getOwnPropertySymbols, ig = Object.prototype.hasOwnProperty, ag = Object.prototype.propertyIsEnumerable, $u = (t, e, r) => e in t ? tg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Pr = (t, e) => {
  for (var r in e || (e = {}))
    ig.call(e, r) && $u(t, r, e[r]);
  if (Pu)
    for (var r of Pu(e))
      ag.call(e, r) && $u(t, r, e[r]);
  return t;
}, Iu = (t, e) => rg(t, ng(e));
const og = {
  props: {
    autoscroll: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(t) {
      this.autoscroll && t && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t;
      const e = ((t = this.$refs.dropdownMenu) == null ? void 0 : t.children[this.typeAheadPointer]) || !1;
      if (e) {
        const r = this.getDropdownViewport(), { top: n, bottom: i, height: a } = e.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (i > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (r.height - a);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, sg = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let t = 0; t < this.filteredOptions.length; t++)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    open(t) {
      t && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let t = this.typeAheadPointer - 1; t >= 0; t--)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    typeAheadDown() {
      for (let t = this.typeAheadPointer + 1; t < this.filteredOptions.length; t++)
        if (this.selectable(this.filteredOptions[t])) {
          this.typeAheadPointer = t;
          break;
        }
    },
    typeAheadSelect() {
      const t = this.filteredOptions[this.typeAheadPointer];
      t && this.selectable(t) && this.select(t);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, lg = {
  props: {
    loading: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mutableLoading: !1
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(t) {
      this.mutableLoading = t;
    }
  },
  methods: {
    toggleLoading(t = null) {
      return t == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = t;
    }
  }
}, $l = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, ug = {}, cg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, fg = /* @__PURE__ */ C("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), dg = [
  fg
];
function pg(t, e) {
  return w(), O("svg", cg, dg);
}
const hg = /* @__PURE__ */ $l(ug, [["render", pg]]), mg = {}, gg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, yg = /* @__PURE__ */ C("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), vg = [
  yg
];
function bg(t, e) {
  return w(), O("svg", gg, vg);
}
const wg = /* @__PURE__ */ $l(mg, [["render", bg]]), Du = {
  Deselect: hg,
  OpenIndicator: wg
}, xg = {
  mounted(t, { instance: e }) {
    if (e.appendToBody) {
      const {
        height: r,
        top: n,
        left: i,
        width: a
      } = e.$refs.toggle.getBoundingClientRect();
      let o = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
      t.unbindPosition = e.calculatePosition(t, e, {
        width: a + "px",
        left: o + i + "px",
        top: s + n + r + "px"
      }), document.body.appendChild(t);
    }
  },
  unmounted(t, { instance: e }) {
    e.appendToBody && (t.unbindPosition && typeof t.unbindPosition == "function" && t.unbindPosition(), t.parentNode && t.parentNode.removeChild(t));
  }
};
function Sg(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let Og = 0;
function _g() {
  return ++Og;
}
const Ag = {
  components: Pr({}, Du),
  directives: { appendToBody: xg },
  mixins: [og, sg, lg],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    deselectFromDropdown: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: !0
    },
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (t) => t
    },
    selectable: {
      type: Function,
      default: (t) => !0
    },
    getOptionLabel: {
      type: Function,
      default(t) {
        return typeof t == "object" ? t.hasOwnProperty(this.label) ? t[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(t)}.
https://vue-select.org/api/props.html#getoptionlabel`) : t;
      }
    },
    getOptionKey: {
      type: Function,
      default(t) {
        if (typeof t != "object")
          return t;
        try {
          return t.hasOwnProperty("id") ? t.id : Sg(t);
        } catch (e) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, t, e);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !0
    },
    filterBy: {
      type: Function,
      default(t, e, r) {
        return (e || "").toLocaleLowerCase().indexOf(r.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(t, e) {
        return t.filter((r) => {
          let n = this.getOptionLabel(r);
          return typeof n == "number" && (n = n.toString()), this.filterBy(r, n, e);
        });
      }
    },
    createOption: {
      type: Function,
      default(t) {
        return typeof this.optionList[0] == "object" ? { [this.label]: t } : t;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (t) => ["function", "boolean"].includes(typeof t)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: t, multiple: e }) {
        return t && !e;
      }
    },
    noDrop: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: !1
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (t, e) => t
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(t, e, { width: r, top: n, left: i }) {
        t.style.top = n, t.style.left = i, t.style.width = r;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: t, open: e, mutableLoading: r }) {
        return t ? !1 : e && !r;
      }
    },
    uid: {
      type: [String, Number],
      default: () => _g()
    }
  },
  data() {
    return {
      search: "",
      open: !1,
      isComposing: !1,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue > "u" || this.isReducingValues;
    },
    selectedValue() {
      let t = this.modelValue;
      return this.isTrackingValues && (t = this.$data._value), t != null && t !== "" ? [].concat(t) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const t = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: Pr({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = !0,
            compositionend: () => this.isComposing = !1,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (e) => this.search = e.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: t,
        listFooter: t,
        header: Iu(Pr({}, t), { deselect: this.deselect }),
        footer: Iu(Pr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Pr(Pr({}, Du), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const t = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return t;
      const e = this.search.length ? this.filter(t, this.search, this) : t;
      if (this.taggable && this.search.length) {
        const r = this.createOption(this.search);
        this.optionExists(r) || e.unshift(r);
      }
      return e;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(t, e) {
      const r = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(t, e, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && r() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(t) {
        this.isTrackingValues && this.setInternalValueFromOptions(t);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(t) {
      this.$emit(t ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(t) {
      Array.isArray(t) ? this.$data._value = t.map((e) => this.findOptionFromReducedValue(e)) : this.$data._value = this.findOptionFromReducedValue(t);
    },
    select(t) {
      this.$emit("option:selecting", t), this.isOptionSelected(t) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(t) : (this.taggable && !this.optionExists(t) && (this.$emit("option:created", t), this.pushTag(t)), this.multiple && (t = this.selectedValue.concat(t)), this.updateValue(t), this.$emit("option:selected", t)), this.onAfterSelect(t);
    },
    deselect(t) {
      this.$emit("option:deselecting", t), this.updateValue(this.selectedValue.filter((e) => !this.optionComparator(e, t))), this.$emit("option:deselected", t);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(t) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(t) {
      typeof this.modelValue > "u" && (this.$data._value = t), t !== null && (Array.isArray(t) ? t = t.map((e) => this.reduce(e)) : t = this.reduce(t)), this.$emit("update:modelValue", t);
    },
    toggleDropdown(t) {
      const e = t.target !== this.searchEl;
      e && t.preventDefault();
      const r = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || r.filter(Boolean).some((n) => n.contains(t.target) || n === t.target)) {
        t.preventDefault();
        return;
      }
      this.open && e ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(t) {
      return this.selectedValue.some((e) => this.optionComparator(e, t));
    },
    isOptionDeselectable(t) {
      return this.isOptionSelected(t) && this.deselectFromDropdown;
    },
    optionComparator(t, e) {
      return this.getOptionKey(t) === this.getOptionKey(e);
    },
    findOptionFromReducedValue(t) {
      const e = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(t), r = [...this.options, ...this.pushedTags].filter(e);
      return r.length === 1 ? r[0] : r.find((n) => this.optionComparator(n, this.$data._value)) || t;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let t = null;
        this.multiple && (t = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(t);
      }
    },
    optionExists(t) {
      return this.optionList.some((e) => this.optionComparator(e, t));
    },
    normalizeOptionForSlot(t) {
      return typeof t == "object" ? t : { [this.label]: t };
    },
    pushTag(t) {
      this.pushedTags.push(t);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: t, multiple: e } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: t, multiple: e }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = !0, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = !0;
    },
    onMouseUp() {
      this.mousedown = !1;
    },
    onSearchKeyDown(t) {
      const e = (i) => (i.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (i) => this.maybeDeleteValue(),
        9: (i) => this.onTab(),
        27: (i) => this.onEscape(),
        38: (i) => (i.preventDefault(), this.typeAheadUp()),
        40: (i) => (i.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((i) => r[i] = e);
      const n = this.mapKeydown(r, this);
      if (typeof n[t.keyCode] == "function")
        return n[t.keyCode](t);
    }
  }
}, Eg = ["dir"], Cg = ["id", "aria-expanded", "aria-owns"], kg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Tg = ["disabled", "title", "aria-label", "onClick"], Pg = {
  ref: "actions",
  class: "vs__actions"
}, $g = ["disabled"], Ig = { class: "vs__spinner" }, Dg = ["id"], Rg = ["id", "aria-selected", "onMouseover", "onClick"], Ng = {
  key: 0,
  class: "vs__no-options"
}, Lg = /* @__PURE__ */ ce(" Sorry, no matching options. "), Fg = ["id"];
function Mg(t, e, r, n, i, a) {
  const o = Np("append-to-body");
  return w(), O("div", {
    dir: r.dir,
    class: Y(["v-select", a.stateClasses])
  }, [
    j(t.$slots, "header", Ve(Ke(a.scope.header))),
    C("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => a.toggleDropdown(s))
    }, [
      C("div", kg, [
        (w(!0), O(ae, null, Ze(a.selectedValue, (s, u) => j(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (w(), O("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            j(t.$slots, "selected-option", Ve(Ke(a.normalizeOptionForSlot(s))), () => [
              ce(z(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (w(), O("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => i.deselectButtons[u] = c,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(s)}`,
              "aria-label": `Deselect ${r.getOptionLabel(s)}`,
              onClick: (c) => a.deselect(s)
            }, [
              (w(), ie(zo(a.childComponents.Deselect)))
            ], 8, Tg)) : V("", !0)
          ]))
        ])), 256)),
        j(t.$slots, "search", Ve(Ke(a.scope.search)), () => [
          C("input", Mn({ class: "vs__search" }, a.scope.search.attributes, Lp(a.scope.search.events)), null, 16)
        ])
      ], 512),
      C("div", Pg, [
        je(C("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (w(), ie(zo(a.childComponents.Deselect)))
        ], 8, $g), [
          [Ut, a.showClearButton]
        ]),
        j(t.$slots, "open-indicator", Ve(Ke(a.scope.openIndicator)), () => [
          r.noDrop ? V("", !0) : (w(), ie(zo(a.childComponents.OpenIndicator), Ve(Mn({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(t.$slots, "spinner", Ve(Ke(a.scope.spinner)), () => [
          je(C("div", Ig, "Loading...", 512), [
            [Ut, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Cg),
    he(Mr, { name: r.transition }, {
      default: we(() => [
        a.dropdownOpen ? je((w(), O("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = Bt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          j(t.$slots, "list-header", Ve(Ke(a.scope.listHeader))),
          (w(!0), O(ae, null, Ze(a.filteredOptions, (s, u) => (w(), O("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(s),
            role: "option",
            class: Y(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && u === t.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": u === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": u === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = u : null,
            onClick: Bt((c) => r.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            j(t.$slots, "option", Ve(Ke(a.normalizeOptionForSlot(s))), () => [
              ce(z(r.getOptionLabel(s)), 1)
            ])
          ], 42, Rg))), 128)),
          a.filteredOptions.length === 0 ? (w(), O("li", Ng, [
            j(t.$slots, "no-options", Ve(Ke(a.scope.noOptions)), () => [
              Lg
            ])
          ])) : V("", !0),
          j(t.$slots, "list-footer", Ve(Ke(a.scope.listFooter)))
        ], 40, Dg)), [
          [o]
        ]) : (w(), O("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Fg))
      ]),
      _: 3
    }, 8, ["name"]),
    j(t.$slots, "footer", Ve(Ke(a.scope.footer)))
  ], 10, Eg);
}
const Bg = /* @__PURE__ */ $l(Ag, [["render", Mg]]);
const t_ = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return ti.add(Df), (e, r) => (w(), ie(F(Bg), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, vt = {
  // cursor on input
  openOptions(t) {
    t.$refs.input.focus(), t.showMenu = !0, t.mousedownState = !1;
  },
  blurInput(t) {
    t.mousedownState || (t.searchText = "", t.closeOptions()), t.$emit("blur");
  },
  closeOptions(t) {
    t.$refs.input.blur(), t.showMenu = !1;
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem(t) {
    const e = t.pointer - 1, r = t.$el.offsetHeight * e;
    e >= 0 && (t.pointer = e), t.$refs.menu.scrollTop = r;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(t) {
    const e = t.pointer + 1, r = t.$el.offsetHeight * e;
    e <= t.filteredOptions.length - 1 && (t.pointer = e);
    const n = t.$refs.menu.offsetHeight, i = Math.ceil((t.$refs.menu.scrollTop + t.$el.offsetHeight) / n), a = Math.ceil(r / n);
    i !== a && (t.$refs.menu.scrollTop = (a - 1) * t.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(t) {
    const e = t.filteredOptions[t.pointer], r = e.disabled;
    e && !r && t.selectItem(e);
  },
  // mouse enter event on item
  pointerSet(t, e) {
    t.pointer = e;
  },
  pointerAdjust(t) {
    t.pointer >= t.filteredOptions.length - 1 && (t.pointer = t.filteredOptions.length ? t.filteredOptions.length - 1 : 0);
  },
  mousedownItem(t) {
    t.mousedownState = !0;
  }
};
function jg(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Rf = {
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    isError: {
      type: Boolean,
      default: !1
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    isDisabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    filterPredicate: {
      type: Function,
      default: (t, e) => t.match(jg(e))
    }
  }
}, zg = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Ug = {
  name: "ModelSelect",
  mixins: [Rf],
  emits: ["blur", "searchchange", "update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    customAttr: {
      type: Function,
      default: () => ""
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      showMenu: !1,
      searchText: "",
      mousedownState: !1,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    value(t) {
      this.pointer = this.filteredOptions.findIndex((e) => e.value === this.optionValue(t));
    },
    filteredOptions() {
      this.pointerAdjust();
    },
    searchText() {
      this.$emit("searchchange", this.searchText);
    }
  },
  computed: {
    searchTextCustomAttr() {
      return this.selectedOption && this.selectedOption.value ? this.customAttr(this.selectedOption) : "";
    },
    inputText() {
      if (this.searchText)
        return "";
      {
        let t = this.placeholder;
        return this.selectedOption && (t = this.selectedOption.text), t;
      }
    },
    customAttrs() {
      try {
        if (Array.isArray(this.options))
          return this.options.map((t) => this.customAttr(t));
      } catch {
      }
      return [];
    },
    textClass() {
      return !this.selectedOption && this.placeholder ? "default" : "";
    },
    menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle() {
      return {
        display: this.showMenu ? "block" : "none"
      };
    },
    filteredOptions() {
      return this.searchText ? this.options.filter((t) => {
        try {
          return this.filterPredicate(t.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.options;
    },
    selectedOption() {
      return this.options.find((t) => t.value === this.optionValue(this.modelValue));
    }
  },
  methods: {
    deleteTextOrItem() {
      !this.searchText && this.modelValue && (this.selectItem({}), this.openOptions());
    },
    openOptions() {
      vt.openOptions(this);
    },
    blurInput() {
      vt.blurInput(this);
    },
    closeOptions() {
      vt.closeOptions(this);
    },
    prevItem() {
      vt.prevItem(this);
    },
    nextItem() {
      vt.nextItem(this);
    },
    enterItem() {
      vt.enterItem(this);
    },
    pointerSet(t) {
      vt.pointerSet(this, t);
    },
    pointerAdjust() {
      vt.pointerAdjust(this);
    },
    mousedownItem() {
      vt.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, Vg = /* @__PURE__ */ C("i", { class: "dropdown icon" }, null, -1), Hg = ["disabled", "tabindex", "id", "name", "value"], Wg = ["data-vss-custom-attr"], qg = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Gg(t, e, r, n, i, a) {
  return w(), O("div", {
    class: Y(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    Vg,
    C("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: i.searchText,
      onInput: e[0] || (e[0] = (o) => i.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = Bt((...o) => a.openOptions && a.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = Tr((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = Tr(Bt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = Tr((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = Tr((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = Tr(Bt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = Tr((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, Hg),
    C("div", {
      class: Y(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, z(a.inputText), 11, Wg),
    C("div", {
      class: Y(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = Bt(() => {
      }, ["prevent"])),
      style: ta(a.menuStyle),
      tabindex: "-1"
    }, [
      (w(!0), O(ae, null, Ze(a.filteredOptions, (o, s) => (w(), O("div", {
        key: s,
        class: Y(["item", { selected: o.selected || i.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: Bt((u) => a.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...u) => a.mousedownItem && a.mousedownItem(...u)),
        onMouseenter: (u) => a.pointerSet(s)
      }, [
        j(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          ce(z(o.text), 1)
        ])
      ], 42, qg))), 128))
    ], 38)
  ], 34);
}
const Ru = /* @__PURE__ */ zg(Ug, [["render", Gg]]), Nu = {
  name: "ModelListSelect",
  mixins: [Rf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return zt(Ru, {
      id: this.id,
      name: this.name,
      options: this.options,
      modelValue: this.innerValue,
      isError: this.isError,
      isDisabled: this.isDisabled,
      placeholder: this.placeholder,
      filterPredicate: this.filterPredicate,
      onBlur: () => this.$emit("blur"),
      "onUpdate:modelValue": this.onInput,
      onSearchchange: (t) => this.$emit("searchchange", t)
    });
  },
  props: {
    modelValue: {
      type: [String, Number, Object, Boolean]
    },
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    optionDisabled: {
      type: String
    }
  },
  computed: {
    options() {
      return this.list.map((t) => ({ value: t[this.optionValue], text: this.buildText(t), disabled: !!t[this.optionDisabled] }));
    },
    innerValue() {
      return this.modelValue ? typeof this.modelValue == "object" ? this.modelValue ? {
        value: this.modelValue[this.optionValue],
        text: this.buildText(this.modelValue),
        disabled: !!this.modelValue[this.optionDisabled]
      } : { value: "", text: "", disabled: !1 } : this.modelValue : this.modelValue;
    }
  },
  methods: {
    buildText(t) {
      return t[this.optionValue] !== void 0 ? this.customText ? this.customText(t) : t[this.optionText] : "";
    },
    onInput(t) {
      if (t === void 0)
        return this.$emit("update:modelValue", "");
      if (Object.keys(t).length === 0 && t.constructor === Object)
        this.$emit("update:modelValue", t);
      else if (typeof t == "object") {
        const e = this.list.find((r) => r[this.optionValue] === t.value);
        this.$emit("update:modelValue", e);
      } else
        this.$emit("update:modelValue", t);
    }
  },
  components: {
    ModelSelect: Ru
  }
};
const Yg = {
  __name: "SearchSelect",
  props: {
    id: {
      type: String,
      required: !0
    },
    label: {
      type: String
    },
    list: {
      type: Array,
      required: !0
    },
    optionValue: {
      type: String,
      required: !0
    },
    optionText: {
      type: String,
      required: !0
    },
    optionDisabled: {
      type: String
    },
    placeholder: {
      type: String
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noForm: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "searchchange"],
  setup(t, { emit: e }) {
    const r = e, n = (i) => {
      let a = [];
      return i.split("_").join(" ").split(" ").map(function(o) {
        a.push(o[0].toUpperCase() + o.slice(1));
      }), a.join(" ");
    };
    return (i, a) => (w(), O("div", null, [
      !t.noLabel && (t.label || t.field) ? (w(), ie(F(Pl), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field)
      }, null, 8, ["for", "value"])) : V("", !0),
      t.noForm ? (w(), ie(F(Nu), {
        key: 1,
        id: t.id ?? t.field,
        list: t.list,
        modelValue: t.modelValue,
        "option-value": t.optionValue,
        "option-text": t.optionText,
        "option-disabled": t.optionDisabled,
        placeholder: t.placeholder,
        class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
        "onUpdate:modelValue": a[0] || (a[0] = (o) => r("update:modelValue", o)),
        onSearchchange: a[1] || (a[1] = (o) => r("searchchange", o)),
        "is-disabled": t.disabled
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"])) : (w(), O(ae, { key: 2 }, [
        he(F(Nu), {
          id: t.id ?? t.field,
          list: t.list,
          modelValue: t.form[t.field],
          "onUpdate:modelValue": [
            a[2] || (a[2] = (o) => t.form[t.field] = o),
            a[3] || (a[3] = (o) => r("update:modelValue", o))
          ],
          "option-value": t.optionValue,
          "option-text": t.optionText,
          "option-disabled": t.optionDisabled,
          placeholder: t.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow",
          onSearchchange: a[4] || (a[4] = (o) => r("searchchange", o)),
          "is-disabled": t.disabled
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"]),
        he(F(ri), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Kg = /* @__PURE__ */ pr(Yg, [["__scopeId", "data-v-c29ec715"]]);
function Nf(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Jg } = Object.prototype, { getPrototypeOf: Il } = Object, La = ((t) => (e) => {
  const r = Jg.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pt = (t) => (t = t.toLowerCase(), (e) => La(e) === t), Fa = (t) => (e) => typeof e === t, { isArray: Zr } = Array, Hn = Fa("undefined");
function Xg(t) {
  return t !== null && !Hn(t) && t.constructor !== null && !Hn(t.constructor) && He(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Lf = pt("ArrayBuffer");
function Qg(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Lf(t.buffer), e;
}
const Zg = Fa("string"), He = Fa("function"), Ff = Fa("number"), Ma = (t) => t !== null && typeof t == "object", ey = (t) => t === !0 || t === !1, ia = (t) => {
  if (La(t) !== "object")
    return !1;
  const e = Il(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ty = pt("Date"), ry = pt("File"), ny = pt("Blob"), iy = pt("FileList"), ay = (t) => Ma(t) && He(t.pipe), oy = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || He(t.append) && ((e = La(t)) === "formdata" || // detect form-data instance
  e === "object" && He(t.toString) && t.toString() === "[object FormData]"));
}, sy = pt("URLSearchParams"), ly = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ni(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Zr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Mf(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Bf = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), jf = (t) => !Hn(t) && t !== Bf;
function Is() {
  const { caseless: t } = jf(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Mf(e, i) || i;
    ia(e[a]) && ia(n) ? e[a] = Is(e[a], n) : ia(n) ? e[a] = Is({}, n) : Zr(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ni(arguments[n], r);
  return e;
}
const uy = (t, e, r, { allOwnKeys: n } = {}) => (ni(e, (i, a) => {
  r && He(i) ? t[a] = Nf(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), cy = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), fy = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, dy = (t, e, r, n) => {
  let i, a, o;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Il(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, py = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, hy = (t) => {
  if (!t)
    return null;
  if (Zr(t))
    return t;
  let e = t.length;
  if (!Ff(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, my = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Il(Uint8Array)), gy = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, yy = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, vy = pt("HTMLFormElement"), by = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Lu = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), wy = pt("RegExp"), zf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ni(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, xy = (t) => {
  zf(t, (e, r) => {
    if (He(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (He(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Sy = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Zr(t) ? n(t) : n(String(t).split(e)), r;
}, Oy = () => {
}, _y = (t, e) => (t = +t, Number.isFinite(t) ? t : e), qo = "abcdefghijklmnopqrstuvwxyz", Fu = "0123456789", Uf = {
  DIGIT: Fu,
  ALPHA: qo,
  ALPHA_DIGIT: qo + qo.toUpperCase() + Fu
}, Ay = (t = 16, e = Uf.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Ey(t) {
  return !!(t && He(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Cy = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Ma(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = Zr(n) ? [] : {};
        return ni(n, (o, s) => {
          const u = r(o, i + 1);
          !Hn(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, ky = pt("AsyncFunction"), Ty = (t) => t && (Ma(t) || He(t)) && He(t.then) && He(t.catch), A = {
  isArray: Zr,
  isArrayBuffer: Lf,
  isBuffer: Xg,
  isFormData: oy,
  isArrayBufferView: Qg,
  isString: Zg,
  isNumber: Ff,
  isBoolean: ey,
  isObject: Ma,
  isPlainObject: ia,
  isUndefined: Hn,
  isDate: ty,
  isFile: ry,
  isBlob: ny,
  isRegExp: wy,
  isFunction: He,
  isStream: ay,
  isURLSearchParams: sy,
  isTypedArray: my,
  isFileList: iy,
  forEach: ni,
  merge: Is,
  extend: uy,
  trim: ly,
  stripBOM: cy,
  inherits: fy,
  toFlatObject: dy,
  kindOf: La,
  kindOfTest: pt,
  endsWith: py,
  toArray: hy,
  forEachEntry: gy,
  matchAll: yy,
  isHTMLForm: vy,
  hasOwnProperty: Lu,
  hasOwnProp: Lu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zf,
  freezeMethods: xy,
  toObjectSet: Sy,
  toCamelCase: by,
  noop: Oy,
  toFiniteNumber: _y,
  findKey: Mf,
  global: Bf,
  isContextDefined: jf,
  ALPHABET: Uf,
  generateString: Ay,
  isSpecCompliantForm: Ey,
  toJSONObject: Cy,
  isAsyncFn: ky,
  isThenable: Ty
};
function K(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
A.inherits(K, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Vf = K.prototype, Hf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Hf[t] = { value: t };
});
Object.defineProperties(K, Hf);
Object.defineProperty(Vf, "isAxiosError", { value: !0 });
K.from = (t, e, r, n, i, a) => {
  const o = Object.create(Vf);
  return A.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), K.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Py = null;
function Ds(t) {
  return A.isPlainObject(t) || A.isArray(t);
}
function Wf(t) {
  return A.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Mu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = Wf(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function $y(t) {
  return A.isArray(t) && !t.some(Ds);
}
const Iy = A.toFlatObject(A, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ba(t, e, r) {
  if (!A.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = A.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, b) {
    return !A.isUndefined(b[y]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(e);
  if (!A.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (A.isDate(h))
      return h.toISOString();
    if (!u && A.isBlob(h))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(h) || A.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, y, b) {
    let x = h;
    if (h && !b && typeof h == "object") {
      if (A.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (A.isArray(h) && $y(h) || (A.isFileList(h) || A.endsWith(y, "[]")) && (x = A.toArray(h)))
        return y = Wf(y), x.forEach(function(_, k) {
          !(A.isUndefined(_) || _ === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Mu([y], k, a) : o === null ? y : y + "[]",
            c(_)
          );
        }), !1;
    }
    return Ds(h) ? !0 : (e.append(Mu(b, y, a), c(h)), !1);
  }
  const p = [], g = Object.assign(Iy, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Ds
  });
  function v(h, y) {
    if (!A.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(h), A.forEach(h, function(x, E) {
        (!(A.isUndefined(x) || x === null) && i.call(
          e,
          x,
          A.isString(E) ? E.trim() : E,
          y,
          g
        )) === !0 && v(x, y ? y.concat(E) : [E]);
      }), p.pop();
    }
  }
  if (!A.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function Bu(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function Dl(t, e) {
  this._pairs = [], t && Ba(t, this, e);
}
const qf = Dl.prototype;
qf.append = function(e, r) {
  this._pairs.push([e, r]);
};
qf.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Bu);
  } : Bu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Dy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gf(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Dy, i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = A.isURLSearchParams(e) ? e.toString() : new Dl(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Ry {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    A.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const ju = Ry, Yf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ny = typeof URLSearchParams < "u" ? URLSearchParams : Dl, Ly = typeof FormData < "u" ? FormData : null, Fy = typeof Blob < "u" ? Blob : null, My = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ny,
    FormData: Ly,
    Blob: Fy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Kf = typeof window < "u" && typeof document < "u", By = ((t) => Kf && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), jy = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Kf,
  hasStandardBrowserEnv: By,
  hasStandardBrowserWebWorkerEnv: jy
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...zy,
  ...My
};
function Uy(t, e) {
  return Ba(t, new ut.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return ut.isNode && A.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Vy(t) {
  return A.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Hy(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function Jf(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && A.isArray(i) ? i.length : o, u ? (A.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !A.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && A.isArray(i[o]) && (i[o] = Hy(i[o])), !s);
  }
  if (A.isFormData(t) && A.isFunction(t.entries)) {
    const r = {};
    return A.forEachEntry(t, (n, i) => {
      e(Vy(n), i, r, 0);
    }), r;
  }
  return null;
}
function Wy(t, e, r) {
  if (A.isString(t))
    try {
      return (e || JSON.parse)(t), A.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Rl = {
  transitional: Yf,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = A.isObject(e);
    if (a && A.isHTMLForm(e) && (e = new FormData(e)), A.isFormData(e))
      return i ? JSON.stringify(Jf(e)) : e;
    if (A.isArrayBuffer(e) || A.isBuffer(e) || A.isStream(e) || A.isFile(e) || A.isBlob(e))
      return e;
    if (A.isArrayBufferView(e))
      return e.buffer;
    if (A.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Uy(e, this.formSerializer).toString();
      if ((s = A.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ba(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Wy(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Rl.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && A.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? K.from(s, K.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ut.classes.FormData,
    Blob: ut.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rl.headers[t] = {};
});
const Nl = Rl, qy = A.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Gy = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && qy[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, zu = Symbol("internals");
function xn(t) {
  return t && String(t).trim().toLowerCase();
}
function aa(t) {
  return t === !1 || t == null ? t : A.isArray(t) ? t.map(aa) : String(t);
}
function Yy(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Ky = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Go(t, e, r, n, i) {
  if (A.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!A.isString(e)) {
    if (A.isString(n))
      return e.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(e);
  }
}
function Jy(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Xy(t, e) {
  const r = A.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, e, i, a, o);
      },
      configurable: !0
    });
  });
}
class ja {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, u, c) {
      const f = xn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = A.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = aa(s));
    }
    const o = (s, u) => A.forEach(s, (c, f) => a(c, f, u));
    return A.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : A.isString(e) && (e = e.trim()) && !Ky(e) ? o(Gy(e), r) : e != null && a(r, e, n), this;
  }
  get(e, r) {
    if (e = xn(e), e) {
      const n = A.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Yy(i);
        if (A.isFunction(r))
          return r.call(this, i, n);
        if (A.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = xn(e), e) {
      const n = A.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Go(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = xn(o), o) {
        const s = A.findKey(n, o);
        s && (!r || Go(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return A.isArray(e) ? e.forEach(a) : a(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || Go(this, this[a], a, e, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return A.forEach(this, (i, a) => {
      const o = A.findKey(n, a);
      if (o) {
        r[o] = aa(i), delete r[a];
        return;
      }
      const s = e ? Jy(a) : String(a).trim();
      s !== a && delete r[a], r[s] = aa(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && A.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[zu] = this[zu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = xn(o);
      n[s] || (Xy(i, o), n[s] = !0);
    }
    return A.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
ja.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(ja.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
A.freezeMethods(ja);
const St = ja;
function Yo(t, e) {
  const r = this || Nl, n = e || r, i = St.from(n.headers);
  let a = n.data;
  return A.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function Xf(t) {
  return !!(t && t.__CANCEL__);
}
function ii(t, e, r) {
  K.call(this, t ?? "canceled", K.ERR_CANCELED, e, r), this.name = "CanceledError";
}
A.inherits(ii, K, {
  __CANCEL__: !0
});
function Qy(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new K(
    "Request failed with status code " + r.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Zy = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      A.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), A.isString(n) && o.push("path=" + n), A.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ev(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function tv(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Qf(t, e) {
  return t && !ev(e) ? tv(t, e) : e;
}
const rv = ut.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(a) {
      let o = a;
      return e && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = i(window.location.href), function(o) {
      const s = A.isString(o) ? i(o) : o;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function nv(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function iv(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = n[a];
    o || (o = c), r[i] = u, n[i] = c;
    let p = a, g = 0;
    for (; p !== i; )
      g += r[p++], p = p % t;
    if (i = (i + 1) % t, i === a && (a = (a + 1) % t), c - o < e)
      return;
    const v = f && c - f;
    return v ? Math.round(g * 1e3 / v) : void 0;
  };
}
function Uu(t, e) {
  let r = 0;
  const n = iv(50, 250);
  return (i) => {
    const a = i.loaded, o = i.lengthComputable ? i.total : void 0, s = a - r, u = n(s), c = a <= o;
    r = a;
    const f = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && o && c ? (o - a) / u : void 0,
      event: i
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const av = typeof XMLHttpRequest < "u", ov = av && function(t) {
  return new Promise(function(r, n) {
    let i = t.data;
    const a = St.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (A.isFormData(i)) {
      if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((f = a.getContentType()) !== !1) {
        const [y, ...b] = f ? f.split(";").map((x) => x.trim()).filter(Boolean) : [];
        a.setContentType([y || "multipart/form-data", ...b].join("; "));
      }
    }
    let p = new XMLHttpRequest();
    if (t.auth) {
      const y = t.auth.username || "", b = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(y + ":" + b));
    }
    const g = Qf(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), Gf(g, t.params, t.paramsSerializer), !0), p.timeout = t.timeout;
    function v() {
      if (!p)
        return;
      const y = St.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), x = {
        data: !o || o === "text" || o === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: y,
        config: t,
        request: p
      };
      Qy(function(_) {
        r(_), c();
      }, function(_) {
        n(_), c();
      }, x), p = null;
    }
    if ("onloadend" in p ? p.onloadend = v : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, p.onabort = function() {
      p && (n(new K("Request aborted", K.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      n(new K("Network Error", K.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let b = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const x = t.transitional || Yf;
      t.timeoutErrorMessage && (b = t.timeoutErrorMessage), n(new K(
        b,
        x.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        t,
        p
      )), p = null;
    }, ut.hasStandardBrowserEnv && (s && A.isFunction(s) && (s = s(t)), s || s !== !1 && rv(g))) {
      const y = t.xsrfHeaderName && t.xsrfCookieName && Zy.read(t.xsrfCookieName);
      y && a.set(t.xsrfHeaderName, y);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in p && A.forEach(a.toJSON(), function(b, x) {
      p.setRequestHeader(x, b);
    }), A.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), o && o !== "json" && (p.responseType = t.responseType), typeof t.onDownloadProgress == "function" && p.addEventListener("progress", Uu(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", Uu(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (y) => {
      p && (n(!y || y.type ? new ii(null, t, p) : y), p.abort(), p = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const h = nv(g);
    if (h && ut.protocols.indexOf(h) === -1) {
      n(new K("Unsupported protocol " + h + ":", K.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Rs = {
  http: Py,
  xhr: ov
};
A.forEach(Rs, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Vu = (t) => `- ${t}`, sv = (t) => A.isFunction(t) || t === null || t === !1, Zf = {
  getAdapter: (t) => {
    t = A.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !sv(r) && (n = Rs[(o = String(r)).toLowerCase()], n === void 0))
        throw new K(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Vu).join(`
`) : " " + Vu(a[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Rs
};
function Ko(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ii(null, t);
}
function Hu(t) {
  return Ko(t), t.headers = St.from(t.headers), t.data = Yo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Zf.getAdapter(t.adapter || Nl.adapter)(t).then(function(n) {
    return Ko(t), n.data = Yo.call(
      t,
      t.transformResponse,
      n
    ), n.headers = St.from(n.headers), n;
  }, function(n) {
    return Xf(n) || (Ko(t), n && n.response && (n.response.data = Yo.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = St.from(n.response.headers))), Promise.reject(n);
  });
}
const Wu = (t) => t instanceof St ? t.toJSON() : t;
function Hr(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, p) {
    return A.isPlainObject(c) && A.isPlainObject(f) ? A.merge.call({ caseless: p }, c, f) : A.isPlainObject(f) ? A.merge({}, f) : A.isArray(f) ? f.slice() : f;
  }
  function i(c, f, p) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(c))
        return n(void 0, c, p);
    } else
      return n(c, f, p);
  }
  function a(c, f) {
    if (!A.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, p) {
    if (p in e)
      return n(c, f);
    if (p in t)
      return n(void 0, c);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (c, f) => i(Wu(c), Wu(f), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, g = p(t[f], e[f], f);
    A.isUndefined(g) && p !== s || (r[f] = g);
  }), r;
}
const ed = "1.6.7", Ll = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ll[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const qu = {};
Ll.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + ed + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new K(
        i(o, " has been removed" + (r ? " in " + r : "")),
        K.ERR_DEPRECATED
      );
    return r && !qu[o] && (qu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
function lv(t, e, r) {
  if (typeof t != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], u = s === void 0 || o(s, a, t);
      if (u !== !0)
        throw new K("option " + a + " must be " + u, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new K("Unknown option " + a, K.ERR_BAD_OPTION);
  }
}
const Ns = {
  assertOptions: lv,
  validators: Ll
}, Lt = Ns.validators;
class ya {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ju(),
      response: new ju()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Hr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Ns.assertOptions(n, {
      silentJSONParsing: Lt.transitional(Lt.boolean),
      forcedJSONParsing: Lt.transitional(Lt.boolean),
      clarifyTimeoutError: Lt.transitional(Lt.boolean)
    }, !1), i != null && (A.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Ns.assertOptions(i, {
      encode: Lt.function,
      serialize: Lt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && A.merge(
      a.common,
      a[r.method]
    );
    a && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete a[h];
      }
    ), r.headers = St.concat(o, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (u = u && y.synchronous, s.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let f, p = 0, g;
    if (!u) {
      const h = [Hu.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, c), g = h.length, f = Promise.resolve(r); p < g; )
        f = f.then(h[p++], h[p++]);
      return f;
    }
    g = s.length;
    let v = r;
    for (p = 0; p < g; ) {
      const h = s[p++], y = s[p++];
      try {
        v = h(v);
      } catch (b) {
        y.call(this, b);
        break;
      }
    }
    try {
      f = Hu.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, g = c.length; p < g; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = Hr(this.defaults, e);
    const r = Qf(e.baseURL, e.url);
    return Gf(r, e.params, e.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(e) {
  ya.prototype[e] = function(r, n) {
    return this.request(Hr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(Hr(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  ya.prototype[e] = r(), ya.prototype[e + "Form"] = r(!0);
});
const oa = ya;
class Fl {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, e(function(a, o, s) {
      n.reason || (n.reason = new ii(a, o, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Fl(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const uv = Fl;
function cv(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function fv(t) {
  return A.isObject(t) && t.isAxiosError === !0;
}
const Ls = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ls).forEach(([t, e]) => {
  Ls[e] = t;
});
const dv = Ls;
function td(t) {
  const e = new oa(t), r = Nf(oa.prototype.request, e);
  return A.extend(r, oa.prototype, e, { allOwnKeys: !0 }), A.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return td(Hr(t, i));
  }, r;
}
const ve = td(Nl);
ve.Axios = oa;
ve.CanceledError = ii;
ve.CancelToken = uv;
ve.isCancel = Xf;
ve.VERSION = ed;
ve.toFormData = Ba;
ve.AxiosError = K;
ve.Cancel = ve.CanceledError;
ve.all = function(e) {
  return Promise.all(e);
};
ve.spread = cv;
ve.isAxiosError = fv;
ve.mergeConfig = Hr;
ve.AxiosHeaders = St;
ve.formToJSON = (t) => Jf(A.isHTMLForm(t) ? new FormData(t) : t);
ve.getAdapter = Zf.getAdapter;
ve.HttpStatusCode = dv;
ve.default = ve;
const Gu = ve;
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function za(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function pv(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var hv = function(e) {
  return mv(e) && !gv(e);
};
function mv(t) {
  return !!t && typeof t == "object";
}
function gv(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || bv(t);
}
var yv = typeof Symbol == "function" && Symbol.for, vv = yv ? Symbol.for("react.element") : 60103;
function bv(t) {
  return t.$$typeof === vv;
}
function wv(t) {
  return Array.isArray(t) ? [] : {};
}
function Wn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Wr(wv(t), t, e) : t;
}
function xv(t, e, r) {
  return t.concat(e).map(function(n) {
    return Wn(n, r);
  });
}
function Sv(t, e) {
  if (!e.customMerge)
    return Wr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Wr;
}
function Ov(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Yu(t) {
  return Object.keys(t).concat(Ov(t));
}
function rd(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function _v(t, e) {
  return rd(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Av(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Yu(t).forEach(function(i) {
    n[i] = Wn(t[i], r);
  }), Yu(e).forEach(function(i) {
    _v(t, i) || (rd(t, i) && r.isMergeableObject(e[i]) ? n[i] = Sv(i, r)(t[i], e[i], r) : n[i] = Wn(e[i], r));
  }), n;
}
function Wr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || xv, r.isMergeableObject = r.isMergeableObject || hv, r.cloneUnlessOtherwiseSpecified = Wn;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : Av(t, e, r) : Wn(e, r);
}
Wr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return Wr(n, i, r);
  }, {});
};
var Ev = Wr, Cv = Ev;
const kv = /* @__PURE__ */ za(Cv);
var Tv = Error, Pv = EvalError, $v = RangeError, Iv = ReferenceError, nd = SyntaxError, ai = TypeError, Dv = URIError, Rv = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[r] = i;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(e);
  if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Ku = typeof Symbol < "u" && Symbol, Nv = Rv, Lv = function() {
  return typeof Ku != "function" || typeof Symbol != "function" || typeof Ku("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Nv();
}, Ju = {
  foo: {}
}, Fv = Object, Mv = function() {
  return { __proto__: Ju }.foo === Ju.foo && !({ __proto__: null } instanceof Fv);
}, Bv = "Function.prototype.bind called on incompatible ", jv = Object.prototype.toString, zv = Math.max, Uv = "[object Function]", Xu = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, Vv = function(e, r) {
  for (var n = [], i = r || 0, a = 0; i < e.length; i += 1, a += 1)
    n[a] = e[i];
  return n;
}, Hv = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, Wv = function(e) {
  var r = this;
  if (typeof r != "function" || jv.apply(r) !== Uv)
    throw new TypeError(Bv + r);
  for (var n = Vv(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        Xu(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Xu(n, arguments)
    );
  }, o = zv(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + Hv(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, qv = Wv, Ml = Function.prototype.bind || qv, Gv = Function.prototype.call, Yv = Object.prototype.hasOwnProperty, Kv = Ml, Jv = Kv.call(Gv, Yv), W, Xv = Tv, Qv = Pv, Zv = $v, eb = Iv, qr = nd, jr = ai, tb = Dv, id = Function, Jo = function(t) {
  try {
    return id('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, lr = Object.getOwnPropertyDescriptor;
if (lr)
  try {
    lr({}, "");
  } catch {
    lr = null;
  }
var Xo = function() {
  throw new jr();
}, rb = lr ? function() {
  try {
    return arguments.callee, Xo;
  } catch {
    try {
      return lr(arguments, "callee").get;
    } catch {
      return Xo;
    }
  }
}() : Xo, $r = Lv(), nb = Mv(), _e = Object.getPrototypeOf || (nb ? function(t) {
  return t.__proto__;
} : null), Rr = {}, ib = typeof Uint8Array > "u" || !_e ? W : _e(Uint8Array), ur = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? W : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? W : ArrayBuffer,
  "%ArrayIteratorPrototype%": $r && _e ? _e([][Symbol.iterator]()) : W,
  "%AsyncFromSyncIteratorPrototype%": W,
  "%AsyncFunction%": Rr,
  "%AsyncGenerator%": Rr,
  "%AsyncGeneratorFunction%": Rr,
  "%AsyncIteratorPrototype%": Rr,
  "%Atomics%": typeof Atomics > "u" ? W : Atomics,
  "%BigInt%": typeof BigInt > "u" ? W : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? W : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? W : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? W : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Xv,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Qv,
  "%Float32Array%": typeof Float32Array > "u" ? W : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? W : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? W : FinalizationRegistry,
  "%Function%": id,
  "%GeneratorFunction%": Rr,
  "%Int8Array%": typeof Int8Array > "u" ? W : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? W : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? W : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": $r && _e ? _e(_e([][Symbol.iterator]())) : W,
  "%JSON%": typeof JSON == "object" ? JSON : W,
  "%Map%": typeof Map > "u" ? W : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !$r || !_e ? W : _e((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? W : Promise,
  "%Proxy%": typeof Proxy > "u" ? W : Proxy,
  "%RangeError%": Zv,
  "%ReferenceError%": eb,
  "%Reflect%": typeof Reflect > "u" ? W : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? W : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !$r || !_e ? W : _e((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? W : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": $r && _e ? _e(""[Symbol.iterator]()) : W,
  "%Symbol%": $r ? Symbol : W,
  "%SyntaxError%": qr,
  "%ThrowTypeError%": rb,
  "%TypedArray%": ib,
  "%TypeError%": jr,
  "%Uint8Array%": typeof Uint8Array > "u" ? W : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? W : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? W : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? W : Uint32Array,
  "%URIError%": tb,
  "%WeakMap%": typeof WeakMap > "u" ? W : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? W : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? W : WeakSet
};
if (_e)
  try {
    null.error;
  } catch (t) {
    var ab = _e(_e(t));
    ur["%Error.prototype%"] = ab;
  }
var ob = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Jo("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Jo("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Jo("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && _e && (r = _e(i.prototype));
  }
  return ur[e] = r, r;
}, Qu = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, oi = Ml, va = Jv, sb = oi.call(Function.call, Array.prototype.concat), lb = oi.call(Function.apply, Array.prototype.splice), Zu = oi.call(Function.call, String.prototype.replace), ba = oi.call(Function.call, String.prototype.slice), ub = oi.call(Function.call, RegExp.prototype.exec), cb = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fb = /\\(\\)?/g, db = function(e) {
  var r = ba(e, 0, 1), n = ba(e, -1);
  if (r === "%" && n !== "%")
    throw new qr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new qr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Zu(e, cb, function(a, o, s, u) {
    i[i.length] = s ? Zu(u, fb, "$1") : o || a;
  }), i;
}, pb = function(e, r) {
  var n = e, i;
  if (va(Qu, n) && (i = Qu[n], n = "%" + i[0] + "%"), va(ur, n)) {
    var a = ur[n];
    if (a === Rr && (a = ob(n)), typeof a > "u" && !r)
      throw new jr("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new qr("intrinsic " + e + " does not exist!");
}, hr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new jr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new jr('"allowMissing" argument must be a boolean');
  if (ub(/^%?[^%]*%?$/, e) === null)
    throw new qr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = db(e), i = n.length > 0 ? n[0] : "", a = pb("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], lb(n, sb([0, 1], c)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var g = n[f], v = ba(g, 0, 1), h = ba(g, -1);
    if ((v === '"' || v === "'" || v === "`" || h === '"' || h === "'" || h === "`") && v !== h)
      throw new qr("property names with quotes must have matching quotes");
    if ((g === "constructor" || !p) && (u = !0), i += "." + g, o = "%" + i + "%", va(ur, o))
      s = ur[o];
    else if (s != null) {
      if (!(g in s)) {
        if (!r)
          throw new jr("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (lr && f + 1 >= n.length) {
        var y = lr(s, g);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[g];
      } else
        p = va(s, g), s = s[g];
      p && !u && (ur[o] = s);
    }
  }
  return s;
}, ad = { exports: {} }, hb = hr, Fs = hb("%Object.defineProperty%", !0), Ms = function() {
  if (Fs)
    try {
      return Fs({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Ms.hasArrayLengthDefineBug = function() {
  if (!Ms())
    return null;
  try {
    return Fs([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var od = Ms, mb = hr, sa = mb("%Object.getOwnPropertyDescriptor%", !0);
if (sa)
  try {
    sa([], "length");
  } catch {
    sa = null;
  }
var sd = sa, gb = od(), yb = hr, Rn = gb && yb("%Object.defineProperty%", !0);
if (Rn)
  try {
    Rn({}, "a", { value: 1 });
  } catch {
    Rn = !1;
  }
var vb = nd, Ir = ai, ec = sd, bb = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Ir("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Ir("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Ir("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Ir("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Ir("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Ir("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!ec && ec(e, r);
  if (Rn)
    Rn(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: n,
      writable: a === null && u ? u.writable : !a
    });
  else if (s || !i && !a && !o)
    e[r] = n;
  else
    throw new vb("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, wb = hr, tc = bb, xb = od(), rc = sd, nc = ai, Sb = wb("%Math.floor%"), Ob = function(e, r) {
  if (typeof e != "function")
    throw new nc("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Sb(r) !== r)
    throw new nc("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && rc) {
    var o = rc(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (xb ? tc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : tc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Ml, r = hr, n = Ob, i = ai, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(g) {
    if (typeof g != "function")
      throw new i("a function is required");
    var v = s(e, o, arguments);
    return n(
      v,
      1 + c(0, g.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return s(e, a, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(ad);
var _b = ad.exports, ld = hr, ud = _b, Ab = ud(ld("String.prototype.indexOf")), Eb = function(e, r) {
  var n = ld(e, !!r);
  return typeof n == "function" && Ab(e, ".prototype.") > -1 ? ud(n) : n;
};
const Cb = {}, kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cb
}, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ pv(kb);
var Bl = typeof Map == "function" && Map.prototype, Qo = Object.getOwnPropertyDescriptor && Bl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, wa = Bl && Qo && typeof Qo.get == "function" ? Qo.get : null, ic = Bl && Map.prototype.forEach, jl = typeof Set == "function" && Set.prototype, Zo = Object.getOwnPropertyDescriptor && jl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, xa = jl && Zo && typeof Zo.get == "function" ? Zo.get : null, ac = jl && Set.prototype.forEach, Tb = typeof WeakMap == "function" && WeakMap.prototype, Nn = Tb ? WeakMap.prototype.has : null, Pb = typeof WeakSet == "function" && WeakSet.prototype, Ln = Pb ? WeakSet.prototype.has : null, $b = typeof WeakRef == "function" && WeakRef.prototype, oc = $b ? WeakRef.prototype.deref : null, Ib = Boolean.prototype.valueOf, Db = Object.prototype.toString, Rb = Function.prototype.toString, Nb = String.prototype.match, zl = String.prototype.slice, jt = String.prototype.replace, Lb = String.prototype.toUpperCase, sc = String.prototype.toLowerCase, cd = RegExp.prototype.test, lc = Array.prototype.concat, ot = Array.prototype.join, Fb = Array.prototype.slice, uc = Math.floor, Bs = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, es = Object.getOwnPropertySymbols, js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Gr = typeof Symbol == "function" && typeof Symbol.iterator == "object", $e = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Gr || "symbol") ? Symbol.toStringTag : null, fd = Object.prototype.propertyIsEnumerable, cc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function fc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || cd.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -uc(-t) : uc(t);
    if (n !== t) {
      var i = String(n), a = zl.call(e, i.length + 1);
      return jt.call(i, r, "$&_") + "." + jt.call(jt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return jt.call(e, r, "$&_");
}
var zs = We, dc = zs.custom, pc = pd(dc) ? dc : null, Mb = function t(e, r, n, i) {
  var a = r || {};
  if (Mt(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Mt(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Mt(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Mt(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Mt(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return md(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return s ? fc(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? fc(e, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Us(e) ? "[Array]" : "[Object]";
  var p = r0(a, n);
  if (typeof i > "u")
    i = [];
  else if (hd(i, e) >= 0)
    return "[Circular]";
  function g(ee, de, ge) {
    if (de && (i = Fb.call(i), i.push(de)), ge) {
      var Se = {
        depth: a.depth
      };
      return Mt(a, "quoteStyle") && (Se.quoteStyle = a.quoteStyle), t(ee, Se, n + 1, i);
    }
    return t(ee, a, n + 1, i);
  }
  if (typeof e == "function" && !hc(e)) {
    var v = Gb(e), h = ji(e, g);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (h.length > 0 ? " { " + ot.call(h, ", ") + " }" : "");
  }
  if (pd(e)) {
    var y = Gr ? jt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : js.call(e);
    return typeof e == "object" && !Gr ? Sn(y) : y;
  }
  if (Zb(e)) {
    for (var b = "<" + sc.call(String(e.nodeName)), x = e.attributes || [], E = 0; E < x.length; E++)
      b += " " + x[E].name + "=" + dd(Bb(x[E].value), "double", a);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + sc.call(String(e.nodeName)) + ">", b;
  }
  if (Us(e)) {
    if (e.length === 0)
      return "[]";
    var _ = ji(e, g);
    return p && !t0(_) ? "[" + Vs(_, p) + "]" : "[ " + ot.call(_, ", ") + " ]";
  }
  if (zb(e)) {
    var k = ji(e, g);
    return !("cause" in Error.prototype) && "cause" in e && !fd.call(e, "cause") ? "{ [" + String(e) + "] " + ot.call(lc.call("[cause]: " + g(e.cause), k), ", ") + " }" : k.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ot.call(k, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (pc && typeof e[pc] == "function" && zs)
      return zs(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Yb(e)) {
    var $ = [];
    return ic && ic.call(e, function(ee, de) {
      $.push(g(de, e, !0) + " => " + g(ee, e));
    }), mc("Map", wa.call(e), $, p);
  }
  if (Xb(e)) {
    var P = [];
    return ac && ac.call(e, function(ee) {
      P.push(g(ee, e));
    }), mc("Set", xa.call(e), P, p);
  }
  if (Kb(e))
    return ts("WeakMap");
  if (Qb(e))
    return ts("WeakSet");
  if (Jb(e))
    return ts("WeakRef");
  if (Vb(e))
    return Sn(g(Number(e)));
  if (Wb(e))
    return Sn(g(Bs.call(e)));
  if (Hb(e))
    return Sn(Ib.call(e));
  if (Ub(e))
    return Sn(g(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === ct)
    return "{ [object globalThis] }";
  if (!jb(e) && !hc(e)) {
    var I = ji(e, g), R = cc ? cc(e) === Object.prototype : e instanceof Object || e.constructor === Object, B = e instanceof Object ? "" : "null prototype", T = !R && $e && Object(e) === e && $e in e ? zl.call(qt(e), 8, -1) : B ? "Object" : "", M = R || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", H = M + (T || B ? "[" + ot.call(lc.call([], T || [], B || []), ": ") + "] " : "");
    return I.length === 0 ? H + "{}" : p ? H + "{" + Vs(I, p) + "}" : H + "{ " + ot.call(I, ", ") + " }";
  }
  return String(e);
};
function dd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Bb(t) {
  return jt.call(String(t), /"/g, "&quot;");
}
function Us(t) {
  return qt(t) === "[object Array]" && (!$e || !(typeof t == "object" && $e in t));
}
function jb(t) {
  return qt(t) === "[object Date]" && (!$e || !(typeof t == "object" && $e in t));
}
function hc(t) {
  return qt(t) === "[object RegExp]" && (!$e || !(typeof t == "object" && $e in t));
}
function zb(t) {
  return qt(t) === "[object Error]" && (!$e || !(typeof t == "object" && $e in t));
}
function Ub(t) {
  return qt(t) === "[object String]" && (!$e || !(typeof t == "object" && $e in t));
}
function Vb(t) {
  return qt(t) === "[object Number]" && (!$e || !(typeof t == "object" && $e in t));
}
function Hb(t) {
  return qt(t) === "[object Boolean]" && (!$e || !(typeof t == "object" && $e in t));
}
function pd(t) {
  if (Gr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !js)
    return !1;
  try {
    return js.call(t), !0;
  } catch {
  }
  return !1;
}
function Wb(t) {
  if (!t || typeof t != "object" || !Bs)
    return !1;
  try {
    return Bs.call(t), !0;
  } catch {
  }
  return !1;
}
var qb = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Mt(t, e) {
  return qb.call(t, e);
}
function qt(t) {
  return Db.call(t);
}
function Gb(t) {
  if (t.name)
    return t.name;
  var e = Nb.call(Rb.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function hd(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function Yb(t) {
  if (!wa || !t || typeof t != "object")
    return !1;
  try {
    wa.call(t);
    try {
      xa.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Kb(t) {
  if (!Nn || !t || typeof t != "object")
    return !1;
  try {
    Nn.call(t, Nn);
    try {
      Ln.call(t, Ln);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Jb(t) {
  if (!oc || !t || typeof t != "object")
    return !1;
  try {
    return oc.call(t), !0;
  } catch {
  }
  return !1;
}
function Xb(t) {
  if (!xa || !t || typeof t != "object")
    return !1;
  try {
    xa.call(t);
    try {
      wa.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Qb(t) {
  if (!Ln || !t || typeof t != "object")
    return !1;
  try {
    Ln.call(t, Ln);
    try {
      Nn.call(t, Nn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Zb(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function md(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return md(zl.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = jt.call(jt.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, e0);
  return dd(i, "single", e);
}
function e0(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Lb.call(e.toString(16));
}
function Sn(t) {
  return "Object(" + t + ")";
}
function ts(t) {
  return t + " { ? }";
}
function mc(t, e, r, n) {
  var i = n ? Vs(r, n) : ot.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function t0(t) {
  for (var e = 0; e < t.length; e++)
    if (hd(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function r0(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = ot.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: ot.call(Array(e + 1), r)
  };
}
function Vs(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + ot.call(t, "," + r) + `
` + e.prev;
}
function ji(t, e) {
  var r = Us(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = Mt(t, i) ? e(t[i], t) : "";
  }
  var a = typeof es == "function" ? es(t) : [], o;
  if (Gr) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in t)
    Mt(t, u) && (r && String(Number(u)) === u && u < t.length || Gr && o["$" + u] instanceof Symbol || (cd.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof es == "function")
    for (var c = 0; c < a.length; c++)
      fd.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var gd = hr, en = Eb, n0 = Mb, i0 = ai, zi = gd("%WeakMap%", !0), Ui = gd("%Map%", !0), a0 = en("WeakMap.prototype.get", !0), o0 = en("WeakMap.prototype.set", !0), s0 = en("WeakMap.prototype.has", !0), l0 = en("Map.prototype.get", !0), u0 = en("Map.prototype.set", !0), c0 = en("Map.prototype.has", !0), Ul = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, f0 = function(t, e) {
  var r = Ul(t, e);
  return r && r.value;
}, d0 = function(t, e, r) {
  var n = Ul(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, p0 = function(t, e) {
  return !!Ul(t, e);
}, h0 = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new i0("Side channel does not contain " + n0(a));
    },
    get: function(a) {
      if (zi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return a0(e, a);
      } else if (Ui) {
        if (r)
          return l0(r, a);
      } else if (n)
        return f0(n, a);
    },
    has: function(a) {
      if (zi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return s0(e, a);
      } else if (Ui) {
        if (r)
          return c0(r, a);
      } else if (n)
        return p0(n, a);
      return !1;
    },
    set: function(a, o) {
      zi && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new zi()), o0(e, a, o)) : Ui ? (r || (r = new Ui()), u0(r, a, o)) : (n || (n = { key: {}, next: null }), d0(n, a, o));
    }
  };
  return i;
}, m0 = String.prototype.replace, g0 = /%20/g, rs = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Vl = {
  default: rs.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return m0.call(t, g0, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: rs.RFC1738,
  RFC3986: rs.RFC3986
}, y0 = Vl, ns = Object.prototype.hasOwnProperty, ir = Array.isArray, it = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), v0 = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (ir(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, yd = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, b0 = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (ir(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !ns.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return ir(e) && !ir(r) && (i = yd(e, n)), ir(e) && ir(r) ? (r.forEach(function(a, o) {
    if (ns.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return ns.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
  }, i);
}, w0 = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, x0 = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, S0 = function(e, r, n, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === y0.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + it[c];
      continue;
    }
    if (c < 2048) {
      s = s + (it[192 | c >> 6] + it[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (it[224 | c >> 12] + it[128 | c >> 6 & 63] + it[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), s += it[240 | c >> 18] + it[128 | c >> 12 & 63] + it[128 | c >> 6 & 63] + it[128 | c & 63];
  }
  return s;
}, O0 = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return v0(r), e;
}, _0 = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, A0 = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, E0 = function(e, r) {
  return [].concat(e, r);
}, C0 = function(e, r) {
  if (ir(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, vd = {
  arrayToObject: yd,
  assign: w0,
  combine: E0,
  compact: O0,
  decode: x0,
  encode: S0,
  isBuffer: A0,
  isRegExp: _0,
  maybeMap: C0,
  merge: b0
}, bd = h0, la = vd, Fn = Vl, k0 = Object.prototype.hasOwnProperty, gc = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, xt = Array.isArray, T0 = Array.prototype.push, wd = function(t, e) {
  T0.apply(t, xt(e) ? e : [e]);
}, P0 = Date.prototype.toISOString, yc = Fn.default, Pe = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: la.encode,
  encodeValuesOnly: !1,
  format: yc,
  formatter: Fn.formatters[yc],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return P0.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, $0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, is = {}, I0 = function t(e, r, n, i, a, o, s, u, c, f, p, g, v, h, y, b) {
  for (var x = e, E = b, _ = 0, k = !1; (E = E.get(is)) !== void 0 && !k; ) {
    var $ = E.get(e);
    if (_ += 1, typeof $ < "u") {
      if ($ === _)
        throw new RangeError("Cyclic object value");
      k = !0;
    }
    typeof E.get(is) > "u" && (_ = 0);
  }
  if (typeof u == "function" ? x = u(r, x) : x instanceof Date ? x = p(x) : n === "comma" && xt(x) && (x = la.maybeMap(x, function(Se) {
    return Se instanceof Date ? p(Se) : Se;
  })), x === null) {
    if (a)
      return s && !h ? s(r, Pe.encoder, y, "key", g) : r;
    x = "";
  }
  if ($0(x) || la.isBuffer(x)) {
    if (s) {
      var P = h ? r : s(r, Pe.encoder, y, "key", g);
      return [v(P) + "=" + v(s(x, Pe.encoder, y, "value", g))];
    }
    return [v(r) + "=" + v(String(x))];
  }
  var I = [];
  if (typeof x > "u")
    return I;
  var R;
  if (n === "comma" && xt(x))
    h && s && (x = la.maybeMap(x, s)), R = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
  else if (xt(u))
    R = u;
  else {
    var B = Object.keys(x);
    R = c ? B.sort(c) : B;
  }
  for (var T = i && xt(x) && x.length === 1 ? r + "[]" : r, M = 0; M < R.length; ++M) {
    var H = R[M], ee = typeof H == "object" && typeof H.value < "u" ? H.value : x[H];
    if (!(o && ee === null)) {
      var de = xt(x) ? typeof n == "function" ? n(T, H) : T : T + (f ? "." + H : "[" + H + "]");
      b.set(e, _);
      var ge = bd();
      ge.set(is, b), wd(I, t(
        ee,
        de,
        n,
        i,
        a,
        o,
        n === "comma" && h && xt(x) ? null : s,
        u,
        c,
        f,
        p,
        g,
        v,
        h,
        y,
        ge
      ));
    }
  }
  return I;
}, D0 = function(e) {
  if (!e)
    return Pe;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Pe.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Fn.default;
  if (typeof e.format < "u") {
    if (!k0.call(Fn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Fn.formatters[n], a = Pe.filter;
  return (typeof e.filter == "function" || xt(e.filter)) && (a = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Pe.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Pe.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Pe.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Pe.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Pe.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Pe.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Pe.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Pe.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Pe.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Pe.strictNullHandling
  };
}, R0 = function(t, e) {
  var r = t, n = D0(e), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : xt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in gc ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var u = gc[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = bd(), p = 0; p < i.length; ++p) {
    var g = i[p];
    n.skipNulls && r[g] === null || wd(o, I0(
      r[g],
      g,
      u,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var v = o.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), v.length > 0 ? h + v : "";
}, Yr = vd, Hs = Object.prototype.hasOwnProperty, N0 = Array.isArray, Oe = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Yr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, L0 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, xd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, F0 = "utf8=%26%2310003%3B", M0 = "utf8=%E2%9C%93", B0 = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === M0 ? c = "utf-8" : o[u] === F0 && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], p = f.indexOf("]="), g = p === -1 ? f.indexOf("=") : p + 1, v, h;
      g === -1 ? (v = r.decoder(f, Oe.decoder, c, "key"), h = r.strictNullHandling ? null : "") : (v = r.decoder(f.slice(0, g), Oe.decoder, c, "key"), h = Yr.maybeMap(
        xd(f.slice(g + 1), r),
        function(y) {
          return r.decoder(y, Oe.decoder, c, "value");
        }
      )), h && r.interpretNumericEntities && c === "iso-8859-1" && (h = L0(h)), f.indexOf("[]=") > -1 && (h = N0(h) ? [h] : h), Hs.call(n, v) ? n[v] = Yr.combine(n[v], h) : n[v] = h;
    }
  return n;
}, j0 = function(t, e, r, n) {
  for (var i = n ? e : xd(e, r), a = t.length - 1; a >= 0; --a) {
    var o, s = t[a];
    if (s === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(u, 10);
      !r.parseArrays && u === "" ? o = { 0: i } : !isNaN(c) && s !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (o = [], o[c] = i) : u !== "__proto__" && (o[u] = i);
    }
    i = o;
  }
  return i;
}, z0 = function(e, r, n, i) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), c = u ? a.slice(0, u.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && Hs.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; n.depth > 0 && (u = s.exec(a)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && Hs.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), j0(f, r, n, i);
  }
}, U0 = function(e) {
  if (!e)
    return Oe;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? Oe.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Oe.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Oe.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Oe.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Oe.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Oe.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Oe.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Oe.decoder,
    delimiter: typeof e.delimiter == "string" || Yr.isRegExp(e.delimiter) ? e.delimiter : Oe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Oe.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Oe.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Oe.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Oe.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Oe.strictNullHandling
  };
}, V0 = function(t, e) {
  var r = U0(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? B0(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = z0(s, n[s], r, typeof t == "string");
    i = Yr.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : Yr.compact(i);
}, H0 = R0, W0 = V0, q0 = Vl, vc = {
  formats: q0,
  parse: W0,
  stringify: H0
}, G0 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ct, function() {
    var r = {};
    r.version = "0.2.0";
    var n = r.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    r.configure = function(h) {
      var y, b;
      for (y in h)
        b = h[y], b !== void 0 && h.hasOwnProperty(y) && (n[y] = b);
      return this;
    }, r.status = null, r.set = function(h) {
      var y = r.isStarted();
      h = i(h, n.minimum, 1), r.status = h === 1 ? null : h;
      var b = r.render(!y), x = b.querySelector(n.barSelector), E = n.speed, _ = n.easing;
      return b.offsetWidth, s(function(k) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(x, o(h, E, _)), h === 1 ? (u(b, {
          transition: "none",
          opacity: 1
        }), b.offsetWidth, setTimeout(function() {
          u(b, {
            transition: "all " + E + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), k();
          }, E);
        }, E)) : setTimeout(k, E);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var h = function() {
        setTimeout(function() {
          r.status && (r.trickle(), h());
        }, n.trickleSpeed);
      };
      return n.trickle && h(), this;
    }, r.done = function(h) {
      return !h && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(h) {
      var y = r.status;
      return y ? (typeof h != "number" && (h = (1 - y) * i(Math.random() * y, 0.1, 0.95)), y = i(y + h, 0, 0.994), r.set(y)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var h = 0, y = 0;
      r.promise = function(b) {
        return !b || b.state() === "resolved" ? this : (y === 0 && r.start(), h++, y++, b.always(function() {
          y--, y === 0 ? (h = 0, r.done()) : r.set((h - y) / h);
        }), this);
      };
    }(), r.render = function(h) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var y = document.createElement("div");
      y.id = "nprogress", y.innerHTML = n.template;
      var b = y.querySelector(n.barSelector), x = h ? "-100" : a(r.status || 0), E = document.querySelector(n.parent), _;
      return u(b, {
        transition: "all 0 linear",
        transform: "translate3d(" + x + "%,0,0)"
      }), n.showSpinner || (_ = y.querySelector(n.spinnerSelector), _ && v(_)), E != document.body && f(E, "nprogress-custom-parent"), E.appendChild(y), y;
    }, r.remove = function() {
      p(document.documentElement, "nprogress-busy"), p(document.querySelector(n.parent), "nprogress-custom-parent");
      var h = document.getElementById("nprogress");
      h && v(h);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var h = document.body.style, y = "WebkitTransform" in h ? "Webkit" : "MozTransform" in h ? "Moz" : "msTransform" in h ? "ms" : "OTransform" in h ? "O" : "";
      return y + "Perspective" in h ? "translate3d" : y + "Transform" in h ? "translate" : "margin";
    };
    function i(h, y, b) {
      return h < y ? y : h > b ? b : h;
    }
    function a(h) {
      return (-1 + h) * 100;
    }
    function o(h, y, b) {
      var x;
      return n.positionUsing === "translate3d" ? x = { transform: "translate3d(" + a(h) + "%,0,0)" } : n.positionUsing === "translate" ? x = { transform: "translate(" + a(h) + "%,0)" } : x = { "margin-left": a(h) + "%" }, x.transition = "all " + y + "ms " + b, x;
    }
    var s = function() {
      var h = [];
      function y() {
        var b = h.shift();
        b && b(y);
      }
      return function(b) {
        h.push(b), h.length == 1 && y();
      };
    }(), u = function() {
      var h = ["Webkit", "O", "Moz", "ms"], y = {};
      function b(k) {
        return k.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function($, P) {
          return P.toUpperCase();
        });
      }
      function x(k) {
        var $ = document.body.style;
        if (k in $)
          return k;
        for (var P = h.length, I = k.charAt(0).toUpperCase() + k.slice(1), R; P--; )
          if (R = h[P] + I, R in $)
            return R;
        return k;
      }
      function E(k) {
        return k = b(k), y[k] || (y[k] = x(k));
      }
      function _(k, $, P) {
        $ = E($), k.style[$] = P;
      }
      return function(k, $) {
        var P = arguments, I, R;
        if (P.length == 2)
          for (I in $)
            R = $[I], R !== void 0 && $.hasOwnProperty(I) && _(k, I, R);
        else
          _(k, P[1], P[2]);
      };
    }();
    function c(h, y) {
      var b = typeof h == "string" ? h : g(h);
      return b.indexOf(" " + y + " ") >= 0;
    }
    function f(h, y) {
      var b = g(h), x = b + y;
      c(b, y) || (h.className = x.substring(1));
    }
    function p(h, y) {
      var b = g(h), x;
      c(h, y) && (x = b.replace(" " + y + " ", " "), h.className = x.substring(1, x.length - 1));
    }
    function g(h) {
      return (" " + (h.className || "") + " ").replace(/\s+/gi, " ");
    }
    function v(h) {
      h && h.parentNode && h.parentNode.removeChild(h);
    }
    return r;
  });
})(G0);
function Sd(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function kt(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var Y0 = (t) => kt("before", { cancelable: !0, detail: { visit: t } }), K0 = (t) => kt("error", { detail: { errors: t } }), J0 = (t) => kt("exception", { cancelable: !0, detail: { exception: t } }), bc = (t) => kt("finish", { detail: { visit: t } }), X0 = (t) => kt("invalid", { cancelable: !0, detail: { response: t } }), On = (t) => kt("navigate", { detail: { page: t } }), Q0 = (t) => kt("progress", { detail: { progress: t } }), Z0 = (t) => kt("start", { detail: { visit: t } }), e1 = (t) => kt("success", { detail: { page: t } });
function Ws(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Ws(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Ws(e));
}
function Od(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Ad(e, _d(r, n), t[n]);
  return e;
}
function _d(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Ad(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Ad(t, _d(e, n.toString()), r[n]));
  if (r instanceof Date)
    return t.append(e, r.toISOString());
  if (r instanceof File)
    return t.append(e, r, r.name);
  if (r instanceof Blob)
    return t.append(e, r);
  if (typeof r == "boolean")
    return t.append(e, r ? "1" : "0");
  if (typeof r == "string")
    return t.append(e, r);
  if (typeof r == "number")
    return t.append(e, `${r}`);
  if (r == null)
    return t.append(e, "");
  Od(r, t, e);
}
var t1 = { modal: null, listener: null, show(t) {
  typeof t == "object" && (t = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);
  let e = document.createElement("html");
  e.innerHTML = t, e.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(e.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(t) {
  t.keyCode === 27 && this.hide();
} };
function Dr(t) {
  return new URL(t.toString(), window.location.toString());
}
function Hl(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = vc.stringify(kv(vc.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function _n(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var wc = typeof window > "u", r1 = class {
  constructor() {
    this.visitId = null;
  }
  init({ initialPage: t, resolveComponent: e, swapComponent: r }) {
    this.page = t, this.resolveComponent = e, this.swapComponent = r, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var t;
    this.navigationType === "reload" && ((t = window.history.state) != null && t.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(t) {
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => On(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Sd(this.handleScrollEvent.bind(this), 100), !0);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(t) {
    typeof t.target.hasAttribute == "function" && t.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((t, e) => {
      let r = this.page.scrollRegions[e];
      if (r)
        typeof t.scrollTo == "function" ? t.scrollTo(r.left, r.top) : (t.scrollTop = r.top, t.scrollLeft = r.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(t) {
    window.history.state.version = t.version, this.setPage(window.history.state, { preserveScroll: !0, preserveState: !0 }).then(() => {
      this.restoreScrollPositions(), On(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, _n(window.location).href === _n(t).href && window.location.reload();
    } catch {
      return !1;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return !1;
    }
  }
  handleLocationVisit(t) {
    var r, n;
    let e = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), t.url += window.location.hash, t.rememberedState = ((r = window.history.state) == null ? void 0 : r.rememberedState) ?? {}, t.scrollRegions = ((n = window.history.state) == null ? void 0 : n.scrollRegions) ?? [], this.setPage(t, { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
      e.preserveScroll && this.restoreScrollPositions(), On(t);
    });
  }
  isLocationVisitResponse(t) {
    return !!(t && t.status === 409 && t.headers["x-inertia-location"]);
  }
  isInertiaResponse(t) {
    return !!(t != null && t.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(t, { cancelled: e = !1, interrupted: r = !1 }) {
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, bc(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, bc(t), t.onFinish(t));
  }
  resolvePreserveOption(t, e) {
    return typeof t == "function" ? t(e) : t === "errors" ? Object.keys(e.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: e = "get", data: r = {}, replace: n = !1, preserveScroll: i = !1, preserveState: a = !1, only: o = [], headers: s = {}, errorBag: u = "", forceFormData: c = !1, onCancelToken: f = () => {
  }, onBefore: p = () => {
  }, onStart: g = () => {
  }, onProgress: v = () => {
  }, onFinish: h = () => {
  }, onCancel: y = () => {
  }, onSuccess: b = () => {
  }, onError: x = () => {
  }, queryStringArrayFormat: E = "brackets" } = {}) {
    let _ = typeof t == "string" ? Dr(t) : t;
    if ((Ws(r) || c) && !(r instanceof FormData) && (r = Od(r)), !(r instanceof FormData)) {
      let [P, I] = Hl(e, _, r, E);
      _ = Dr(P), r = I;
    }
    let k = { url: _, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, headers: s, errorBag: u, forceFormData: c, queryStringArrayFormat: E, cancelled: !1, completed: !1, interrupted: !1 };
    if (p(k) === !1 || !Y0(k))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let $ = this.createVisitId();
    this.activeVisit = { ...k, onCancelToken: f, onBefore: p, onStart: g, onProgress: v, onFinish: h, onCancel: y, onSuccess: b, onError: x, queryStringArrayFormat: E, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), Z0(k), g(k), Gu({ method: e, url: _n(_).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...u && u.length ? { "X-Inertia-Error-Bag": u } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (P) => {
      r instanceof FormData && (P.percentage = P.progress ? Math.round(P.progress * 100) : 0, Q0(P), v(P));
    } }).then((P) => {
      var T;
      if (!this.isInertiaResponse(P))
        return Promise.reject({ response: P });
      let I = P.data;
      o.length && I.component === this.page.component && (I.props = { ...this.page.props, ...I.props }), i = this.resolvePreserveOption(i, I), a = this.resolvePreserveOption(a, I), a && ((T = window.history.state) != null && T.rememberedState) && I.component === this.page.component && (I.rememberedState = window.history.state.rememberedState);
      let R = _, B = Dr(I.url);
      return R.hash && !B.hash && _n(R).href === B.href && (B.hash = R.hash, I.url = B.href), this.setPage(I, { visitId: $, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let P = this.page.props.errors || {};
      if (Object.keys(P).length > 0) {
        let I = u ? P[u] ? P[u] : {} : P;
        return K0(I), x(I);
      }
      return e1(this.page), b(this.page);
    }).catch((P) => {
      if (this.isInertiaResponse(P.response))
        return this.setPage(P.response.data, { visitId: $ });
      if (this.isLocationVisitResponse(P.response)) {
        let I = Dr(P.response.headers["x-inertia-location"]), R = _;
        R.hash && !I.hash && _n(R).href === I.href && (I.hash = R.hash), this.locationVisit(I, i === !0);
      } else if (P.response)
        X0(P.response) && t1.show(P.response.data);
      else
        return Promise.reject(P);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((P) => {
      if (!Gu.isCancel(P)) {
        let I = J0(P);
        if (this.activeVisit && this.finishVisit(this.activeVisit), I)
          return Promise.reject(P);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || Dr(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || On(t);
      }));
    });
  }
  pushState(t) {
    this.page = t, window.history.pushState(t, "", t.url);
  }
  replaceState(t) {
    this.page = t, window.history.replaceState(t, "", t.url);
  }
  handlePopstateEvent(t) {
    if (t.state !== null) {
      let e = t.state, r = this.createVisitId();
      Promise.resolve(this.resolveComponent(e.component)).then((n) => {
        r === this.visitId && (this.page = e, this.swapComponent({ component: n, page: e, preserveState: !1 }).then(() => {
          this.restoreScrollPositions(), On(e);
        }));
      });
    } else {
      let e = Dr(this.page.url);
      e.hash = window.location.hash, this.replaceState({ ...this.page, url: e.href }), this.resetScrollPositions();
    }
  }
  get(t, e = {}, r = {}) {
    return this.visit(t, { ...r, method: "get", data: e });
  }
  reload(t = {}) {
    return this.visit(window.location.href, { ...t, preserveScroll: !0, preserveState: !0 });
  }
  replace(t, e = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${e.method ?? "get"}() instead.`), this.visit(t, { preserveState: !0, ...e, replace: !0 });
  }
  post(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "post", data: e });
  }
  put(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "put", data: e });
  }
  patch(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "patch", data: e });
  }
  delete(t, e = {}) {
    return this.visit(t, { preserveState: !0, ...e, method: "delete" });
  }
  remember(t, e = "default") {
    var r;
    wc || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!wc)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let i = e(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, n1 = { buildDOMElement(t) {
  let e = document.createElement("template");
  e.innerHTML = t;
  let r = e.content.firstChild;
  if (!t.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((i) => {
    n.setAttribute(i, r.getAttribute(i) || "");
  }), n;
}, isInertiaManagedElement(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.getAttribute("inertia") !== null;
}, findMatchingElementIndex(t, e) {
  let r = t.getAttribute("inertia");
  return r !== null ? e.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Sd(function(t) {
  let e = t.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, o;
    let n = this.findMatchingElementIndex(r, e);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let i = e.splice(n, 1)[0];
    i && !r.isEqualNode(i) && ((o = r == null ? void 0 : r.parentNode) == null || o.replaceChild(i, r));
  }), e.forEach((r) => document.head.appendChild(r));
}, 1) };
function i1(t, e, r) {
  let n = {}, i = 0;
  function a() {
    let f = i += 1;
    return n[f] = [], f.toString();
  }
  function o(f) {
    f === null || Object.keys(n).indexOf(f) === -1 || (delete n[f], c());
  }
  function s(f, p = []) {
    f !== null && Object.keys(n).indexOf(f) > -1 && (n[f] = p), c();
  }
  function u() {
    let f = e(""), p = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, g = Object.values(n).reduce((v, h) => v.concat(h), []).reduce((v, h) => {
      if (h.indexOf("<") === -1)
        return v;
      if (h.indexOf("<title ") === 0) {
        let b = h.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return v.title = b ? `${b[1]}${e(b[2])}${b[3]}` : h, v;
      }
      let y = h.match(/ inertia="[^"]+"/);
      return y ? v[y[0]] = h : v[Object.keys(v).length] = h, v;
    }, p);
    return Object.values(g);
  }
  function c() {
    t ? r(u()) : n1.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = a();
    return { update: (p) => s(f, p), disconnect: () => o(f) };
  } };
}
function Ed(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var sr = new r1(), Sa = { exports: {} };
Sa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]", v = "[object Number]", h = "[object Object]", y = "[object Promise]", b = "[object RegExp]", x = "[object Set]", E = "[object String]", _ = "[object Symbol]", k = "[object WeakMap]", $ = "[object ArrayBuffer]", P = "[object DataView]", I = "[object Float32Array]", R = "[object Float64Array]", B = "[object Int8Array]", T = "[object Int16Array]", M = "[object Int32Array]", H = "[object Uint8Array]", ee = "[object Uint8ClampedArray]", de = "[object Uint16Array]", ge = "[object Uint32Array]", Se = /[\\^$.*+?()[\]{}|]/g, Tt = /\w*$/, Pt = /^\[object .+?Constructor\]$/, $t = /^(?:0|[1-9]\d*)$/, J = {};
  J[a] = J[o] = J[$] = J[P] = J[s] = J[u] = J[I] = J[R] = J[B] = J[T] = J[M] = J[g] = J[v] = J[h] = J[b] = J[x] = J[E] = J[_] = J[H] = J[ee] = J[de] = J[ge] = !0, J[c] = J[f] = J[k] = !1;
  var It = typeof ct == "object" && ct && ct.Object === Object && ct, tn = typeof self == "object" && self && self.Object === Object && self, me = It || tn || Function("return this")(), qe = e && !e.nodeType && e, q = qe && !0 && t && !t.nodeType && t, Gt = q && q.exports === qe;
  function rn(l, d) {
    return l.set(d[0], d[1]), l;
  }
  function Le(l, d) {
    return l.add(d), l;
  }
  function Yt(l, d) {
    for (var m = -1, S = l ? l.length : 0; ++m < S && d(l[m], m, l) !== !1; )
      ;
    return l;
  }
  function gr(l, d) {
    for (var m = -1, S = d.length, U = l.length; ++m < S; )
      l[U + m] = d[m];
    return l;
  }
  function Kt(l, d, m, S) {
    var U = -1, L = l ? l.length : 0;
    for (S && L && (m = l[++U]); ++U < L; )
      m = d(m, l[U], U, l);
    return m;
  }
  function Jt(l, d) {
    for (var m = -1, S = Array(l); ++m < l; )
      S[m] = d(m);
    return S;
  }
  function yr(l, d) {
    return l == null ? void 0 : l[d];
  }
  function nn(l) {
    var d = !1;
    if (l != null && typeof l.toString != "function")
      try {
        d = !!(l + "");
      } catch {
      }
    return d;
  }
  function fi(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S, U) {
      m[++d] = [U, S];
    }), m;
  }
  function an(l, d) {
    return function(m) {
      return l(d(m));
    };
  }
  function di(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S) {
      m[++d] = S;
    }), m;
  }
  var Za = Array.prototype, eo = Function.prototype, vr = Object.prototype, on = me["__core-js_shared__"], pi = function() {
    var l = /[^.]+$/.exec(on && on.keys && on.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), hi = eo.toString, et = vr.hasOwnProperty, br = vr.toString, to = RegExp(
    "^" + hi.call(et).replace(Se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xt = Gt ? me.Buffer : void 0, wr = me.Symbol, sn = me.Uint8Array, Ue = an(Object.getPrototypeOf, Object), mi = Object.create, gi = vr.propertyIsEnumerable, ro = Za.splice, ln = Object.getOwnPropertySymbols, xr = Xt ? Xt.isBuffer : void 0, yi = an(Object.keys, Object), Sr = Ye(me, "DataView"), Qt = Ye(me, "Map"), Ge = Ye(me, "Promise"), Or = Ye(me, "Set"), un = Ye(me, "WeakMap"), Zt = Ye(Object, "create"), cn = Ie(Sr), er = Ie(Qt), fn = Ie(Ge), dn = Ie(Or), pn = Ie(un), Dt = wr ? wr.prototype : void 0, vi = Dt ? Dt.valueOf : void 0;
  function ht(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function no() {
    this.__data__ = Zt ? Zt(null) : {};
  }
  function io(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function ao(l) {
    var d = this.__data__;
    if (Zt) {
      var m = d[l];
      return m === n ? void 0 : m;
    }
    return et.call(d, l) ? d[l] : void 0;
  }
  function bi(l) {
    var d = this.__data__;
    return Zt ? d[l] !== void 0 : et.call(d, l);
  }
  function hn(l, d) {
    var m = this.__data__;
    return m[l] = Zt && d === void 0 ? n : d, this;
  }
  ht.prototype.clear = no, ht.prototype.delete = io, ht.prototype.get = ao, ht.prototype.has = bi, ht.prototype.set = hn;
  function Ae(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function oo() {
    this.__data__ = [];
  }
  function so(l) {
    var d = this.__data__, m = Ar(d, l);
    if (m < 0)
      return !1;
    var S = d.length - 1;
    return m == S ? d.pop() : ro.call(d, m, 1), !0;
  }
  function lo(l) {
    var d = this.__data__, m = Ar(d, l);
    return m < 0 ? void 0 : d[m][1];
  }
  function uo(l) {
    return Ar(this.__data__, l) > -1;
  }
  function co(l, d) {
    var m = this.__data__, S = Ar(m, l);
    return S < 0 ? m.push([l, d]) : m[S][1] = d, this;
  }
  Ae.prototype.clear = oo, Ae.prototype.delete = so, Ae.prototype.get = lo, Ae.prototype.has = uo, Ae.prototype.set = co;
  function Ce(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function fo() {
    this.__data__ = {
      hash: new ht(),
      map: new (Qt || Ae)(),
      string: new ht()
    };
  }
  function po(l) {
    return rr(this, l).delete(l);
  }
  function ho(l) {
    return rr(this, l).get(l);
  }
  function mo(l) {
    return rr(this, l).has(l);
  }
  function go(l, d) {
    return rr(this, l).set(l, d), this;
  }
  Ce.prototype.clear = fo, Ce.prototype.delete = po, Ce.prototype.get = ho, Ce.prototype.has = mo, Ce.prototype.set = go;
  function De(l) {
    this.__data__ = new Ae(l);
  }
  function yo() {
    this.__data__ = new Ae();
  }
  function vo(l) {
    return this.__data__.delete(l);
  }
  function bo(l) {
    return this.__data__.get(l);
  }
  function wo(l) {
    return this.__data__.has(l);
  }
  function xo(l, d) {
    var m = this.__data__;
    if (m instanceof Ae) {
      var S = m.__data__;
      if (!Qt || S.length < r - 1)
        return S.push([l, d]), this;
      m = this.__data__ = new Ce(S);
    }
    return m.set(l, d), this;
  }
  De.prototype.clear = yo, De.prototype.delete = vo, De.prototype.get = bo, De.prototype.has = wo, De.prototype.set = xo;
  function _r(l, d) {
    var m = vn(l) || Cr(l) ? Jt(l.length, String) : [], S = m.length, U = !!S;
    for (var L in l)
      (d || et.call(l, L)) && !(U && (L == "length" || No(L, S))) && m.push(L);
    return m;
  }
  function wi(l, d, m) {
    var S = l[d];
    (!(et.call(l, d) && Ai(S, m)) || m === void 0 && !(d in l)) && (l[d] = m);
  }
  function Ar(l, d) {
    for (var m = l.length; m--; )
      if (Ai(l[m][0], d))
        return m;
    return -1;
  }
  function tt(l, d) {
    return l && yn(d, wn(d), l);
  }
  function mn(l, d, m, S, U, L, G) {
    var X;
    if (S && (X = L ? S(l, U, L, G) : S(l)), X !== void 0)
      return X;
    if (!nt(l))
      return l;
    var ye = vn(l);
    if (ye) {
      if (X = Do(l), !d)
        return Po(l, X);
    } else {
      var Q = gt(l), ke = Q == f || Q == p;
      if (Ei(l))
        return Er(l, d);
      if (Q == h || Q == a || ke && !L) {
        if (nn(l))
          return L ? l : {};
        if (X = rt(ke ? {} : l), !d)
          return $o(l, tt(X, l));
      } else {
        if (!J[Q])
          return L ? l : {};
        X = Ro(l, Q, mn, d);
      }
    }
    G || (G = new De());
    var Re = G.get(l);
    if (Re)
      return Re;
    if (G.set(l, X), !ye)
      var be = m ? Io(l) : wn(l);
    return Yt(be || l, function(Te, Ee) {
      be && (Ee = Te, Te = l[Ee]), wi(X, Ee, mn(Te, d, m, S, Ee, l, G));
    }), X;
  }
  function So(l) {
    return nt(l) ? mi(l) : {};
  }
  function Oo(l, d, m) {
    var S = d(l);
    return vn(l) ? S : gr(S, m(l));
  }
  function _o(l) {
    return br.call(l);
  }
  function Ao(l) {
    if (!nt(l) || Fo(l))
      return !1;
    var d = bn(l) || nn(l) ? to : Pt;
    return d.test(Ie(l));
  }
  function Eo(l) {
    if (!Oi(l))
      return yi(l);
    var d = [];
    for (var m in Object(l))
      et.call(l, m) && m != "constructor" && d.push(m);
    return d;
  }
  function Er(l, d) {
    if (d)
      return l.slice();
    var m = new l.constructor(l.length);
    return l.copy(m), m;
  }
  function gn(l) {
    var d = new l.constructor(l.byteLength);
    return new sn(d).set(new sn(l)), d;
  }
  function tr(l, d) {
    var m = d ? gn(l.buffer) : l.buffer;
    return new l.constructor(m, l.byteOffset, l.byteLength);
  }
  function xi(l, d, m) {
    var S = d ? m(fi(l), !0) : fi(l);
    return Kt(S, rn, new l.constructor());
  }
  function Si(l) {
    var d = new l.constructor(l.source, Tt.exec(l));
    return d.lastIndex = l.lastIndex, d;
  }
  function Co(l, d, m) {
    var S = d ? m(di(l), !0) : di(l);
    return Kt(S, Le, new l.constructor());
  }
  function ko(l) {
    return vi ? Object(vi.call(l)) : {};
  }
  function To(l, d) {
    var m = d ? gn(l.buffer) : l.buffer;
    return new l.constructor(m, l.byteOffset, l.length);
  }
  function Po(l, d) {
    var m = -1, S = l.length;
    for (d || (d = Array(S)); ++m < S; )
      d[m] = l[m];
    return d;
  }
  function yn(l, d, m, S) {
    m || (m = {});
    for (var U = -1, L = d.length; ++U < L; ) {
      var G = d[U], X = S ? S(m[G], l[G], G, m, l) : void 0;
      wi(m, G, X === void 0 ? l[G] : X);
    }
    return m;
  }
  function $o(l, d) {
    return yn(l, mt(l), d);
  }
  function Io(l) {
    return Oo(l, wn, mt);
  }
  function rr(l, d) {
    var m = l.__data__;
    return Lo(d) ? m[typeof d == "string" ? "string" : "hash"] : m.map;
  }
  function Ye(l, d) {
    var m = yr(l, d);
    return Ao(m) ? m : void 0;
  }
  var mt = ln ? an(ln, Object) : Bo, gt = _o;
  (Sr && gt(new Sr(new ArrayBuffer(1))) != P || Qt && gt(new Qt()) != g || Ge && gt(Ge.resolve()) != y || Or && gt(new Or()) != x || un && gt(new un()) != k) && (gt = function(l) {
    var d = br.call(l), m = d == h ? l.constructor : void 0, S = m ? Ie(m) : void 0;
    if (S)
      switch (S) {
        case cn:
          return P;
        case er:
          return g;
        case fn:
          return y;
        case dn:
          return x;
        case pn:
          return k;
      }
    return d;
  });
  function Do(l) {
    var d = l.length, m = l.constructor(d);
    return d && typeof l[0] == "string" && et.call(l, "index") && (m.index = l.index, m.input = l.input), m;
  }
  function rt(l) {
    return typeof l.constructor == "function" && !Oi(l) ? So(Ue(l)) : {};
  }
  function Ro(l, d, m, S) {
    var U = l.constructor;
    switch (d) {
      case $:
        return gn(l);
      case s:
      case u:
        return new U(+l);
      case P:
        return tr(l, S);
      case I:
      case R:
      case B:
      case T:
      case M:
      case H:
      case ee:
      case de:
      case ge:
        return To(l, S);
      case g:
        return xi(l, S, m);
      case v:
      case E:
        return new U(l);
      case b:
        return Si(l);
      case x:
        return Co(l, S, m);
      case _:
        return ko(l);
    }
  }
  function No(l, d) {
    return d = d ?? i, !!d && (typeof l == "number" || $t.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function Lo(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function Fo(l) {
    return !!pi && pi in l;
  }
  function Oi(l) {
    var d = l && l.constructor, m = typeof d == "function" && d.prototype || vr;
    return l === m;
  }
  function Ie(l) {
    if (l != null) {
      try {
        return hi.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function _i(l) {
    return mn(l, !0, !0);
  }
  function Ai(l, d) {
    return l === d || l !== l && d !== d;
  }
  function Cr(l) {
    return Mo(l) && et.call(l, "callee") && (!gi.call(l, "callee") || br.call(l) == a);
  }
  var vn = Array.isArray;
  function kr(l) {
    return l != null && Ci(l.length) && !bn(l);
  }
  function Mo(l) {
    return ki(l) && kr(l);
  }
  var Ei = xr || jo;
  function bn(l) {
    var d = nt(l) ? br.call(l) : "";
    return d == f || d == p;
  }
  function Ci(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function nt(l) {
    var d = typeof l;
    return !!l && (d == "object" || d == "function");
  }
  function ki(l) {
    return !!l && typeof l == "object";
  }
  function wn(l) {
    return kr(l) ? _r(l) : Eo(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = _i;
})(Sa, Sa.exports);
var a1 = Sa.exports;
const bt = /* @__PURE__ */ za(a1);
var Oa = { exports: {} };
Oa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", g = "[object Error]", v = "[object Function]", h = "[object GeneratorFunction]", y = "[object Map]", b = "[object Number]", x = "[object Null]", E = "[object Object]", _ = "[object Promise]", k = "[object Proxy]", $ = "[object RegExp]", P = "[object Set]", I = "[object String]", R = "[object Symbol]", B = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", H = "[object DataView]", ee = "[object Float32Array]", de = "[object Float64Array]", ge = "[object Int8Array]", Se = "[object Int16Array]", Tt = "[object Int32Array]", Pt = "[object Uint8Array]", $t = "[object Uint8ClampedArray]", J = "[object Uint16Array]", It = "[object Uint32Array]", tn = /[\\^$.*+?()[\]{}|]/g, me = /^\[object .+?Constructor\]$/, qe = /^(?:0|[1-9]\d*)$/, q = {};
  q[ee] = q[de] = q[ge] = q[Se] = q[Tt] = q[Pt] = q[$t] = q[J] = q[It] = !0, q[s] = q[u] = q[M] = q[f] = q[H] = q[p] = q[g] = q[v] = q[y] = q[b] = q[E] = q[$] = q[P] = q[I] = q[T] = !1;
  var Gt = typeof ct == "object" && ct && ct.Object === Object && ct, rn = typeof self == "object" && self && self.Object === Object && self, Le = Gt || rn || Function("return this")(), Yt = e && !e.nodeType && e, gr = Yt && !0 && t && !t.nodeType && t, Kt = gr && gr.exports === Yt, Jt = Kt && Gt.process, yr = function() {
    try {
      return Jt && Jt.binding && Jt.binding("util");
    } catch {
    }
  }(), nn = yr && yr.isTypedArray;
  function fi(l, d) {
    for (var m = -1, S = l == null ? 0 : l.length, U = 0, L = []; ++m < S; ) {
      var G = l[m];
      d(G, m, l) && (L[U++] = G);
    }
    return L;
  }
  function an(l, d) {
    for (var m = -1, S = d.length, U = l.length; ++m < S; )
      l[U + m] = d[m];
    return l;
  }
  function di(l, d) {
    for (var m = -1, S = l == null ? 0 : l.length; ++m < S; )
      if (d(l[m], m, l))
        return !0;
    return !1;
  }
  function Za(l, d) {
    for (var m = -1, S = Array(l); ++m < l; )
      S[m] = d(m);
    return S;
  }
  function eo(l) {
    return function(d) {
      return l(d);
    };
  }
  function vr(l, d) {
    return l.has(d);
  }
  function on(l, d) {
    return l == null ? void 0 : l[d];
  }
  function pi(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S, U) {
      m[++d] = [U, S];
    }), m;
  }
  function hi(l, d) {
    return function(m) {
      return l(d(m));
    };
  }
  function et(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S) {
      m[++d] = S;
    }), m;
  }
  var br = Array.prototype, to = Function.prototype, Xt = Object.prototype, wr = Le["__core-js_shared__"], sn = to.toString, Ue = Xt.hasOwnProperty, mi = function() {
    var l = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), gi = Xt.toString, ro = RegExp(
    "^" + sn.call(Ue).replace(tn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ln = Kt ? Le.Buffer : void 0, xr = Le.Symbol, yi = Le.Uint8Array, Sr = Xt.propertyIsEnumerable, Qt = br.splice, Ge = xr ? xr.toStringTag : void 0, Or = Object.getOwnPropertySymbols, un = ln ? ln.isBuffer : void 0, Zt = hi(Object.keys, Object), cn = mt(Le, "DataView"), er = mt(Le, "Map"), fn = mt(Le, "Promise"), dn = mt(Le, "Set"), pn = mt(Le, "WeakMap"), Dt = mt(Object, "create"), vi = Ie(cn), ht = Ie(er), no = Ie(fn), io = Ie(dn), ao = Ie(pn), bi = xr ? xr.prototype : void 0, hn = bi ? bi.valueOf : void 0;
  function Ae(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function oo() {
    this.__data__ = Dt ? Dt(null) : {}, this.size = 0;
  }
  function so(l) {
    var d = this.has(l) && delete this.__data__[l];
    return this.size -= d ? 1 : 0, d;
  }
  function lo(l) {
    var d = this.__data__;
    if (Dt) {
      var m = d[l];
      return m === n ? void 0 : m;
    }
    return Ue.call(d, l) ? d[l] : void 0;
  }
  function uo(l) {
    var d = this.__data__;
    return Dt ? d[l] !== void 0 : Ue.call(d, l);
  }
  function co(l, d) {
    var m = this.__data__;
    return this.size += this.has(l) ? 0 : 1, m[l] = Dt && d === void 0 ? n : d, this;
  }
  Ae.prototype.clear = oo, Ae.prototype.delete = so, Ae.prototype.get = lo, Ae.prototype.has = uo, Ae.prototype.set = co;
  function Ce(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function fo() {
    this.__data__ = [], this.size = 0;
  }
  function po(l) {
    var d = this.__data__, m = Er(d, l);
    if (m < 0)
      return !1;
    var S = d.length - 1;
    return m == S ? d.pop() : Qt.call(d, m, 1), --this.size, !0;
  }
  function ho(l) {
    var d = this.__data__, m = Er(d, l);
    return m < 0 ? void 0 : d[m][1];
  }
  function mo(l) {
    return Er(this.__data__, l) > -1;
  }
  function go(l, d) {
    var m = this.__data__, S = Er(m, l);
    return S < 0 ? (++this.size, m.push([l, d])) : m[S][1] = d, this;
  }
  Ce.prototype.clear = fo, Ce.prototype.delete = po, Ce.prototype.get = ho, Ce.prototype.has = mo, Ce.prototype.set = go;
  function De(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function yo() {
    this.size = 0, this.__data__ = {
      hash: new Ae(),
      map: new (er || Ce)(),
      string: new Ae()
    };
  }
  function vo(l) {
    var d = Ye(this, l).delete(l);
    return this.size -= d ? 1 : 0, d;
  }
  function bo(l) {
    return Ye(this, l).get(l);
  }
  function wo(l) {
    return Ye(this, l).has(l);
  }
  function xo(l, d) {
    var m = Ye(this, l), S = m.size;
    return m.set(l, d), this.size += m.size == S ? 0 : 1, this;
  }
  De.prototype.clear = yo, De.prototype.delete = vo, De.prototype.get = bo, De.prototype.has = wo, De.prototype.set = xo;
  function _r(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.__data__ = new De(); ++d < m; )
      this.add(l[d]);
  }
  function wi(l) {
    return this.__data__.set(l, n), this;
  }
  function Ar(l) {
    return this.__data__.has(l);
  }
  _r.prototype.add = _r.prototype.push = wi, _r.prototype.has = Ar;
  function tt(l) {
    var d = this.__data__ = new Ce(l);
    this.size = d.size;
  }
  function mn() {
    this.__data__ = new Ce(), this.size = 0;
  }
  function So(l) {
    var d = this.__data__, m = d.delete(l);
    return this.size = d.size, m;
  }
  function Oo(l) {
    return this.__data__.get(l);
  }
  function _o(l) {
    return this.__data__.has(l);
  }
  function Ao(l, d) {
    var m = this.__data__;
    if (m instanceof Ce) {
      var S = m.__data__;
      if (!er || S.length < r - 1)
        return S.push([l, d]), this.size = ++m.size, this;
      m = this.__data__ = new De(S);
    }
    return m.set(l, d), this.size = m.size, this;
  }
  tt.prototype.clear = mn, tt.prototype.delete = So, tt.prototype.get = Oo, tt.prototype.has = _o, tt.prototype.set = Ao;
  function Eo(l, d) {
    var m = Cr(l), S = !m && Ai(l), U = !m && !S && kr(l), L = !m && !S && !U && ki(l), G = m || S || U || L, X = G ? Za(l.length, String) : [], ye = X.length;
    for (var Q in l)
      (d || Ue.call(l, Q)) && !(G && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      U && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      L && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
      Ro(Q, ye))) && X.push(Q);
    return X;
  }
  function Er(l, d) {
    for (var m = l.length; m--; )
      if (_i(l[m][0], d))
        return m;
    return -1;
  }
  function gn(l, d, m) {
    var S = d(l);
    return Cr(l) ? S : an(S, m(l));
  }
  function tr(l) {
    return l == null ? l === void 0 ? B : x : Ge && Ge in Object(l) ? gt(l) : Oi(l);
  }
  function xi(l) {
    return nt(l) && tr(l) == s;
  }
  function Si(l, d, m, S, U) {
    return l === d ? !0 : l == null || d == null || !nt(l) && !nt(d) ? l !== l && d !== d : Co(l, d, m, S, Si, U);
  }
  function Co(l, d, m, S, U, L) {
    var G = Cr(l), X = Cr(d), ye = G ? u : rt(l), Q = X ? u : rt(d);
    ye = ye == s ? E : ye, Q = Q == s ? E : Q;
    var ke = ye == E, Re = Q == E, be = ye == Q;
    if (be && kr(l)) {
      if (!kr(d))
        return !1;
      G = !0, ke = !1;
    }
    if (be && !ke)
      return L || (L = new tt()), G || ki(l) ? yn(l, d, m, S, U, L) : $o(l, d, ye, m, S, U, L);
    if (!(m & i)) {
      var Te = ke && Ue.call(l, "__wrapped__"), Ee = Re && Ue.call(d, "__wrapped__");
      if (Te || Ee) {
        var Rt = Te ? l.value() : l, yt = Ee ? d.value() : d;
        return L || (L = new tt()), U(Rt, yt, m, S, L);
      }
    }
    return be ? (L || (L = new tt()), Io(l, d, m, S, U, L)) : !1;
  }
  function ko(l) {
    if (!Ci(l) || Lo(l))
      return !1;
    var d = Ei(l) ? ro : me;
    return d.test(Ie(l));
  }
  function To(l) {
    return nt(l) && bn(l.length) && !!q[tr(l)];
  }
  function Po(l) {
    if (!Fo(l))
      return Zt(l);
    var d = [];
    for (var m in Object(l))
      Ue.call(l, m) && m != "constructor" && d.push(m);
    return d;
  }
  function yn(l, d, m, S, U, L) {
    var G = m & i, X = l.length, ye = d.length;
    if (X != ye && !(G && ye > X))
      return !1;
    var Q = L.get(l);
    if (Q && L.get(d))
      return Q == d;
    var ke = -1, Re = !0, be = m & a ? new _r() : void 0;
    for (L.set(l, d), L.set(d, l); ++ke < X; ) {
      var Te = l[ke], Ee = d[ke];
      if (S)
        var Rt = G ? S(Ee, Te, ke, d, l, L) : S(Te, Ee, ke, l, d, L);
      if (Rt !== void 0) {
        if (Rt)
          continue;
        Re = !1;
        break;
      }
      if (be) {
        if (!di(d, function(yt, nr) {
          if (!vr(be, nr) && (Te === yt || U(Te, yt, m, S, L)))
            return be.push(nr);
        })) {
          Re = !1;
          break;
        }
      } else if (!(Te === Ee || U(Te, Ee, m, S, L))) {
        Re = !1;
        break;
      }
    }
    return L.delete(l), L.delete(d), Re;
  }
  function $o(l, d, m, S, U, L, G) {
    switch (m) {
      case H:
        if (l.byteLength != d.byteLength || l.byteOffset != d.byteOffset)
          return !1;
        l = l.buffer, d = d.buffer;
      case M:
        return !(l.byteLength != d.byteLength || !L(new yi(l), new yi(d)));
      case f:
      case p:
      case b:
        return _i(+l, +d);
      case g:
        return l.name == d.name && l.message == d.message;
      case $:
      case I:
        return l == d + "";
      case y:
        var X = pi;
      case P:
        var ye = S & i;
        if (X || (X = et), l.size != d.size && !ye)
          return !1;
        var Q = G.get(l);
        if (Q)
          return Q == d;
        S |= a, G.set(l, d);
        var ke = yn(X(l), X(d), S, U, L, G);
        return G.delete(l), ke;
      case R:
        if (hn)
          return hn.call(l) == hn.call(d);
    }
    return !1;
  }
  function Io(l, d, m, S, U, L) {
    var G = m & i, X = rr(l), ye = X.length, Q = rr(d), ke = Q.length;
    if (ye != ke && !G)
      return !1;
    for (var Re = ye; Re--; ) {
      var be = X[Re];
      if (!(G ? be in d : Ue.call(d, be)))
        return !1;
    }
    var Te = L.get(l);
    if (Te && L.get(d))
      return Te == d;
    var Ee = !0;
    L.set(l, d), L.set(d, l);
    for (var Rt = G; ++Re < ye; ) {
      be = X[Re];
      var yt = l[be], nr = d[be];
      if (S)
        var tu = G ? S(nr, yt, be, d, l, L) : S(yt, nr, be, l, d, L);
      if (!(tu === void 0 ? yt === nr || U(yt, nr, m, S, L) : tu)) {
        Ee = !1;
        break;
      }
      Rt || (Rt = be == "constructor");
    }
    if (Ee && !Rt) {
      var Ti = l.constructor, Pi = d.constructor;
      Ti != Pi && "constructor" in l && "constructor" in d && !(typeof Ti == "function" && Ti instanceof Ti && typeof Pi == "function" && Pi instanceof Pi) && (Ee = !1);
    }
    return L.delete(l), L.delete(d), Ee;
  }
  function rr(l) {
    return gn(l, wn, Do);
  }
  function Ye(l, d) {
    var m = l.__data__;
    return No(d) ? m[typeof d == "string" ? "string" : "hash"] : m.map;
  }
  function mt(l, d) {
    var m = on(l, d);
    return ko(m) ? m : void 0;
  }
  function gt(l) {
    var d = Ue.call(l, Ge), m = l[Ge];
    try {
      l[Ge] = void 0;
      var S = !0;
    } catch {
    }
    var U = gi.call(l);
    return S && (d ? l[Ge] = m : delete l[Ge]), U;
  }
  var Do = Or ? function(l) {
    return l == null ? [] : (l = Object(l), fi(Or(l), function(d) {
      return Sr.call(l, d);
    }));
  } : Bo, rt = tr;
  (cn && rt(new cn(new ArrayBuffer(1))) != H || er && rt(new er()) != y || fn && rt(fn.resolve()) != _ || dn && rt(new dn()) != P || pn && rt(new pn()) != T) && (rt = function(l) {
    var d = tr(l), m = d == E ? l.constructor : void 0, S = m ? Ie(m) : "";
    if (S)
      switch (S) {
        case vi:
          return H;
        case ht:
          return y;
        case no:
          return _;
        case io:
          return P;
        case ao:
          return T;
      }
    return d;
  });
  function Ro(l, d) {
    return d = d ?? o, !!d && (typeof l == "number" || qe.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function No(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function Lo(l) {
    return !!mi && mi in l;
  }
  function Fo(l) {
    var d = l && l.constructor, m = typeof d == "function" && d.prototype || Xt;
    return l === m;
  }
  function Oi(l) {
    return gi.call(l);
  }
  function Ie(l) {
    if (l != null) {
      try {
        return sn.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function _i(l, d) {
    return l === d || l !== l && d !== d;
  }
  var Ai = xi(function() {
    return arguments;
  }()) ? xi : function(l) {
    return nt(l) && Ue.call(l, "callee") && !Sr.call(l, "callee");
  }, Cr = Array.isArray;
  function vn(l) {
    return l != null && bn(l.length) && !Ei(l);
  }
  var kr = un || jo;
  function Mo(l, d) {
    return Si(l, d);
  }
  function Ei(l) {
    if (!Ci(l))
      return !1;
    var d = tr(l);
    return d == v || d == h || d == c || d == k;
  }
  function bn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Ci(l) {
    var d = typeof l;
    return l != null && (d == "object" || d == "function");
  }
  function nt(l) {
    return l != null && typeof l == "object";
  }
  var ki = nn ? eo(nn) : To;
  function wn(l) {
    return vn(l) ? Eo(l) : Po(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = Mo;
})(Oa, Oa.exports);
var o1 = Oa.exports;
const s1 = /* @__PURE__ */ za(o1);
function l1(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? sr.restore(r) : null, a = bt(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = ml({ ...i ? i.data : bt(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((f, p) => (f[p] = this[p], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, p) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? a = this.data() : a = Object.assign({}, bt(a), typeof f == "string" ? { [f]: p } : f), this;
  }, reset(...f) {
    let p = bt(typeof n == "object" ? a : n()), g = bt(p);
    return f.length === 0 ? (a = g, Object.assign(this, p)) : Object.keys(p).filter((v) => f.includes(v)).forEach((v) => {
      a[v] = g[v], this[v] = p[v];
    }), this;
  }, setError(f, p) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: p } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((p, g) => ({ ...p, ...f.length > 0 && !f.includes(g) ? { [g]: this.errors[g] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, p, g = {}) {
    let v = u(this.data()), h = { ...g, onCancelToken: (y) => {
      if (o = y, g.onCancelToken)
        return g.onCancelToken(y);
    }, onBefore: (y) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), g.onBefore)
        return g.onBefore(y);
    }, onStart: (y) => {
      if (this.processing = !0, g.onStart)
        return g.onStart(y);
    }, onProgress: (y) => {
      if (this.progress = y, g.onProgress)
        return g.onProgress(y);
    }, onSuccess: async (y) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let b = g.onSuccess ? await g.onSuccess(y) : null;
      return a = bt(this.data()), this.isDirty = !1, b;
    }, onError: (y) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(y), g.onError)
        return g.onError(y);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, g.onCancel)
        return g.onCancel();
    }, onFinish: (y) => {
      if (this.processing = !1, this.progress = null, o = null, g.onFinish)
        return g.onFinish(y);
    } };
    f === "delete" ? sr.delete(p, { ...h, data: v }) : sr[f](p, v, h);
  }, get(f, p) {
    this.submit("get", f, p);
  }, post(f, p) {
    this.submit("post", f, p);
  }, put(f, p) {
    this.submit("put", f, p);
  }, patch(f, p) {
    this.submit("patch", f, p);
  }, delete(f, p) {
    this.submit("delete", f, p);
  }, cancel() {
    o && o.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(f) {
    Object.assign(this, f.data), this.setError(f.errors);
  } });
  return $a(c, (f) => {
    c.isDirty = !s1(c.data(), a), r && sr.remember(bt(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var Fe = ne(null), st = ne(null), as = Fp(null), Vi = ne(null), xc = null;
dr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  Fe.value = e ? ru(e) : null, st.value = t, Vi.value = null;
  let a = typeof window > "u";
  return xc = i1(a, n, i), a || (sr.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    Fe.value = ru(o.component), st.value = o.page, Vi.value = o.preserveState ? Vi.value : Date.now();
  } }), sr.on("navigate", () => xc.forceUpdate())), () => {
    if (Fe.value) {
      Fe.value.inheritAttrs = !!Fe.value.inheritAttrs;
      let o = zt(Fe.value, { ...st.value.props, key: Vi.value });
      return as.value && (Fe.value.layout = as.value, as.value = null), Fe.value.layout ? typeof Fe.value.layout == "function" ? Fe.value.layout(zt, o) : (Array.isArray(Fe.value.layout) ? Fe.value.layout : [Fe.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, zt(u, { ...st.value.props }, () => s))) : o;
    }
  };
} });
function u1() {
  return ml({ props: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.props;
  }), url: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.url;
  }), component: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.component;
  }), version: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.version;
  }), scrollRegions: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: re(() => {
    var t;
    return (t = st.value) == null ? void 0 : t.rememberedState;
  }) });
}
dr({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(t) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(t.type) > -1;
}, renderTagStart(t) {
  t.props = t.props || {}, t.props.inertia = t.props["head-key"] !== void 0 ? t.props["head-key"] : "";
  let e = Object.keys(t.props).reduce((r, n) => {
    let i = t.props[n];
    return ["key", "head-key"].includes(n) ? r : i === "" ? r + ` ${n}` : r + ` ${n}="${i}"`;
  }, "");
  return `<${t.type}${e}>`;
}, renderTagChildren(t) {
  return typeof t.children == "string" ? t.children : t.children.reduce((e, r) => e + this.renderTag(r), "");
}, isFunctionNode(t) {
  return typeof t.type == "function";
}, isComponentNode(t) {
  return typeof t.type == "object";
}, isCommentNode(t) {
  return /(comment|cmt)/i.test(t.type.toString());
}, isFragmentNode(t) {
  return /(fragment|fgt|symbol\(\))/i.test(t.type.toString());
}, isTextNode(t) {
  return /(text|txt)/i.test(t.type.toString());
}, renderTag(t) {
  if (this.isTextNode(t))
    return t.children;
  if (this.isFragmentNode(t) || this.isCommentNode(t))
    return "";
  let e = this.renderTagStart(t);
  return t.children && (e += this.renderTagChildren(t)), this.isUnaryTag(t) || (e += `</${t.type}>`), e;
}, addTitleElement(t) {
  return this.title && !t.find((e) => e.startsWith("<title")) && t.push(`<title inertia>${this.title}</title>`), t;
}, renderNodes(t) {
  return this.addTitleElement(t.flatMap((e) => this.resolveNode(e)).map((e) => this.renderTag(e)).filter((e) => e));
}, resolveNode(t) {
  return this.isFunctionNode(t) ? this.resolveNode(t.type()) : this.isComponentNode(t) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(t) && t.children ? t : this.isFragmentNode(t) && t.children ? t.children.flatMap((e) => this.resolveNode(e)) : this.isCommentNode(t) ? [] : t;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
dr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Hl(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), zt(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      Ed(s) && (s.preventDefault(), sr.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function r_(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function c1(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function n_(t) {
  return u1().props.auth.permissions.includes(t);
}
let qs = null;
function i_(t) {
  qs = t;
}
function Ua() {
  return qs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), qs;
}
const Qe = dr({
  name: "Link",
  props: {
    as: {
      type: String,
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: String,
      required: !0
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: !1
    },
    preserveScroll: {
      type: Boolean,
      default: !1
    },
    preserveState: {
      type: Boolean,
      default: null
    },
    only: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    }
  },
  setup(t, { slots: e, attrs: r }) {
    return () => {
      const n = Ua(), i = t.as.toLowerCase(), a = t.method.toLowerCase(), [o, s] = Hl(
        a,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`
      ), zt(
        t.as,
        {
          ...r,
          ...i === "a" ? { href: o } : {},
          onClick: (u) => {
            Ed(u) && (u.preventDefault(), n.visit(o, {
              data: s,
              method: a,
              replace: t.replace,
              preserveScroll: t.preserveScroll,
              preserveState: t.preserveState ?? a !== "get",
              only: t.only,
              headers: t.headers,
              onCancelToken: r.onCancelToken || (() => ({})),
              onBefore: r.onBefore || (() => ({})),
              onStart: r.onStart || (() => ({})),
              onProgress: r.onProgress || (() => ({})),
              onFinish: r.onFinish || (() => ({})),
              onCancel: r.onCancel || (() => ({})),
              onSuccess: r.onSuccess || (() => ({})),
              onError: r.onError || (() => ({}))
            }));
          }
        },
        e
      );
    };
  }
});
function si(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function li(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function f1(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function d1() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(f1(arguments[e]));
  return t;
}
var p1 = /* @__PURE__ */ new Map([
  ["avi", "video/avi"],
  ["gif", "image/gif"],
  ["ico", "image/x-icon"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["mp4", "video/mp4"],
  ["pdf", "application/pdf"],
  ["png", "image/png"],
  ["zip", "application/zip"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
]);
function Va(t, e) {
  var r = h1(t);
  if (typeof r.path != "string") {
    var n = t.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof e == "string" ? e : typeof n == "string" && n.length > 0 ? n : t.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function h1(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = p1.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var m1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function g1(t) {
  return si(this, void 0, void 0, function() {
    return li(this, function(e) {
      return [2, y1(t) && t.dataTransfer ? w1(t.dataTransfer, t.type) : v1(t)];
    });
  });
}
function y1(t) {
  return !!t.dataTransfer;
}
function v1(t) {
  var e = b1(t.target) ? t.target.files ? Gs(t.target.files) : [] : [];
  return e.map(function(r) {
    return Va(r);
  });
}
function b1(t) {
  return t !== null;
}
function w1(t, e) {
  return si(this, void 0, void 0, function() {
    var r, n;
    return li(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = Gs(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(x1))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, Sc(Cd(n))];
        case 2:
          return [2, Sc(Gs(t.files).map(function(a) {
            return Va(a);
          }))];
      }
    });
  });
}
function Sc(t) {
  return t.filter(function(e) {
    return m1.indexOf(e.name) === -1;
  });
}
function Gs(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function x1(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Oc(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? kd(e) : Oc(t);
}
function Cd(t) {
  return t.reduce(function(e, r) {
    return d1(e, Array.isArray(r) ? Cd(r) : [r]);
  }, []);
}
function Oc(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Va(e);
  return Promise.resolve(r);
}
function S1(t) {
  return si(this, void 0, void 0, function() {
    return li(this, function(e) {
      return [2, t.isDirectory ? kd(t) : O1(t)];
    });
  });
}
function kd(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var i = [];
    function a() {
      var o = this;
      e.readEntries(function(s) {
        return si(o, void 0, void 0, function() {
          var u, c, f;
          return li(this, function(p) {
            switch (p.label) {
              case 0:
                if (s.length)
                  return [3, 5];
                p.label = 1;
              case 1:
                return p.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return u = p.sent(), r(u), [3, 4];
              case 3:
                return c = p.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(s.map(S1)), i.push(f), a(), p.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(s) {
        n(s);
      });
    }
    a();
  });
}
function O1(t) {
  return si(this, void 0, void 0, function() {
    return li(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(i) {
          var a = Va(i, t.fullPath);
          r(a);
        }, function(i) {
          n(i);
        });
      })];
    });
  });
}
var Td = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(","), n = t.name || "", i = (t.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
    return r.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : i === s;
    });
  }
  return !0;
}, Me = function() {
  return Me = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Me.apply(this, arguments);
};
function _c(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function _1(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function A1(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < a[1]) {
              r.label = a[1], a = c;
              break;
            }
            if (a && r.label < a[2]) {
              r.label = a[2], r.ops.push(c);
              break;
            }
            a[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ys(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function E1(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function C1(t) {
  return t.includes("Edge/");
}
function k1(t) {
  return t === void 0 && (t = window.navigator.userAgent), E1(t) || C1(t);
}
function Ac(t) {
  t.preventDefault();
}
function Hi(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function _a(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var T1 = "file-invalid-type", P1 = "file-too-large", $1 = "file-too-small", I1 = "too-many-files", D1 = {
  code: I1,
  message: "Too many files"
}, R1 = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: T1,
    message: "File type must be ".concat(e)
  };
};
function An(t) {
  return t != null;
}
var N1 = Td.default, L1 = N1 || Td;
function Pd(t, e) {
  var r = t.type === "application/x-moz-file" || L1(t, e);
  return [r, r ? null : R1(e)];
}
var Ec = function(t) {
  return {
    code: P1,
    message: "File is larger than ".concat(t, " bytes")
  };
}, Cc = function(t) {
  return {
    code: $1,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function $d(t, e, r) {
  if (An(t.size) && t.size)
    if (An(e) && An(r)) {
      if (t.size > r)
        return [!1, Ec(r)];
      if (t.size < e)
        return [!1, Cc(e)];
    } else {
      if (An(e) && t.size < e)
        return [!1, Cc(e)];
      if (An(r) && t.size > r)
        return [!1, Ec(r)];
    }
  return [!0, null];
}
function wt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return t.some(function(a) {
      return !_a(r) && a && a.apply(void 0, Ys([r], n, !1)), _a(r);
    });
  };
}
function F1(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = Pd(s, r)[0], c = $d(s, n, i)[0];
    return u && c;
  });
}
var M1 = {
  disabled: !1,
  getFilesFromEvent: g1,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1
};
function Id(t) {
  t === void 0 && (t = {});
  var e = ne(Me(Me({}, M1), t));
  $a(function() {
    return Me({}, t);
  }, function(T) {
    e.value = Me(Me({}, e.value), T);
  });
  var r = ne(), n = ne(), i = ml({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), a = function() {
    n.value && (i.isFileDialogActive = !0, n.value.value = "", n.value.click());
  }, o = function() {
    var T = e.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var M = n.value.files;
        M && !M.length && (i.isFileDialogActive = !1, typeof T == "function" && T());
      }
    }, 300);
  };
  function s() {
    i.isFocused = !0;
  }
  function u() {
    i.isFocused = !1;
  }
  function c() {
    var T = e.value.noClick;
    T || (k1() ? setTimeout(a, 0) : a());
  }
  var f = ne([]), p = function(T) {
    if (r.value) {
      var M = r.value.$el || r.value;
      M.contains(T.target) || (T.preventDefault(), f.value = []);
    }
  };
  dt(function() {
    window.addEventListener("focus", o, !1);
    var T = e.value.preventDropOnDocument;
    T && (document.addEventListener("dragover", Ac, !1), document.addEventListener("drop", p, !1));
  }), Xn(function() {
    window.removeEventListener("focus", o, !1);
    var T = e.value.preventDropOnDocument;
    T && (document.removeEventListener("dragover", Ac), document.removeEventListener("drop", p));
  });
  function g(T) {
    var M = e.value.noDragEventsBubbling;
    M && T.stopPropagation();
  }
  function v(T) {
    return _1(this, void 0, void 0, function() {
      var M, H, ee, de, ge;
      return A1(this, function(Se) {
        switch (Se.label) {
          case 0:
            return M = e.value, H = M.getFilesFromEvent, ee = M.noDragEventsBubbling, de = M.onDragEnter, T.preventDefault(), g(T), f.value = Ys(Ys([], f.value, !0), [T.target], !1), Hi(T) ? H ? [4, H(T)] : [2] : [3, 2];
          case 1:
            if (ge = Se.sent(), ge || (ge = []), _a(T) && !ee)
              return [2];
            i.draggedFiles = ge, i.isDragActive = !0, de && de(T), Se.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function h(T) {
    var M = e.value.onDragOver;
    if (T.preventDefault(), g(T), T.dataTransfer)
      try {
        T.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Hi(T) && M && M(T), !1;
  }
  function y(T) {
    T.preventDefault(), g(T);
    var M = f.value.filter(function(de) {
      if (!r.value)
        return !1;
      var ge = r.value.$el || r.value;
      return ge.contains(de);
    }), H = M.indexOf(T.target);
    if (H !== -1 && M.splice(H, 1), f.value = M, !(M.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var ee = e.value.onDragLeave;
      Hi(T) && ee && ee(T);
    }
  }
  function b(T) {
    T.preventDefault(), g(T), f.value = [];
    var M = e.value, H = M.getFilesFromEvent, ee = M.noDragEventsBubbling, de = M.accept, ge = M.minSize, Se = M.maxSize, Tt = M.multiple, Pt = M.maxFiles, $t = M.onDrop, J = M.onDropRejected, It = M.onDropAccepted;
    if (Hi(T)) {
      if (!H)
        return;
      Promise.resolve(H(T)).then(function(tn) {
        if (!(_a(T) && !ee)) {
          var me = [], qe = [];
          tn.forEach(function(q) {
            var Gt = Pd(q, de), rn = Gt[0], Le = Gt[1], Yt = $d(q, ge, Se), gr = Yt[0], Kt = Yt[1];
            if (rn && gr)
              me.push(q);
            else {
              var Jt = [Le, Kt].filter(function(yr) {
                return yr;
              });
              qe.push({ file: q, errors: Jt });
            }
          }), (!Tt && me.length > 1 || Tt && Pt >= 1 && me.length > Pt) && (me.forEach(function(q) {
            qe.push({ file: q, errors: [D1] });
          }), me.splice(0)), i.acceptedFiles = me, i.fileRejections = qe, $t && $t(me, qe, T), qe.length > 0 && J && J(qe, T), me.length > 0 && It && It(me, T);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var x = function(T) {
    return e.value.disabled ? void 0 : T;
  }, E = function(T) {
    return e.value.noKeyboard ? void 0 : x(T);
  }, _ = function(T) {
    return e.value.noDrag ? void 0 : x(T);
  }, k = function(T) {
    T === void 0 && (T = {});
    var M = T.onFocus, H = T.onBlur, ee = T.onClick, de = T.onDragEnter, ge = T.onDragenter, Se = T.onDragOver, Tt = T.onDragover, Pt = T.onDragLeave, $t = T.onDragleave, J = T.onDrop, It = _c(T, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Me(Me({ onFocus: E(wt(M, s)), onBlur: E(wt(H, u)), onClick: x(wt(ee, c)), onDragenter: _(wt(de, ge, v)), onDragover: _(wt(Se, Tt, h)), onDragleave: _(wt(Pt, $t, y)), onDrop: _(wt(J, b)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), It);
  }, $ = function(T) {
    T.stopPropagation();
  };
  function P(T) {
    T === void 0 && (T = {});
    var M = T.onChange, H = T.onClick, ee = _c(T, ["onChange", "onClick"]), de = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: x(wt(M, b)),
      onClick: x(wt(H, $)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Me(Me({}, de), ee);
  }
  var I = re(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), R = re(function() {
    return I.value > 0 && F1({
      files: i.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), B = re(function() {
    return I.value > 0 && !R.value;
  });
  return Me(Me({}, Mp(i)), { isDragAccept: R, isDragReject: B, isFocused: re(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: k, getInputProps: P, rootRef: r, inputRef: n, open: x(a) });
}
const B1 = { class: "flex w-full flex-col" }, j1 = {
  key: 0,
  class: "select-none text-black"
}, z1 = ["name"], U1 = {
  key: 1,
  class: "select-none"
}, V1 = { key: 2 }, H1 = {
  key: 3,
  class: "select-none"
}, a_ = {
  __name: "FileDropZoneInput",
  props: {
    accept: { String, default: "image/*" },
    multiple: { Boolean, default: !1 },
    label: String,
    form: Object,
    field: String,
    required: Boolean,
    disabled: Boolean
  },
  setup(t) {
    Ua();
    const e = t, r = ne(null), n = (c) => {
      let f = [];
      return c.split("_").join(" ").split(" ").map(function(p) {
        f.push(p[0].toUpperCase() + p.slice(1));
      }), f.join(" ");
    }, i = (c, f) => {
      var p;
      if (r.value = null, f && f.length > 0) {
        f[0].errors && (r.value = (p = f[0]) == null ? void 0 : p.errors.map((g) => g.message).join(", ")), console.error(f);
        return;
      }
      if (!c || c.length === 0) {
        r.value = `${e.field} is required`;
        return;
      }
      e.multiple ? e.form[e.field] = c : e.form[e.field] = c[0];
    }, { getRootProps: a, getInputProps: o, isDragActive: s, ...u } = Id({
      onDrop: i,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var p;
      return w(), O("div", B1, [
        C("div", {
          class: Y(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": F(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          C("div", Mn({ class: "p-4' font-medium flex h-20 w-full cursor-copy flex-col items-center justify-center" }, F(a)()), [
            t.label ? (w(), O("p", j1, z(t.label), 1)) : V("", !0),
            C("input", Mn(F(o)(), { name: t.field }), null, 16, z1),
            F(s) ? (w(), O("span", U1, "Drop the " + z(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (w(), O("span", V1, z(((p = t.form[t.field]) == null ? void 0 : p.path) ?? "File prepared"), 1)) : (w(), O("span", H1, "Drag 'n' drop " + z(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        he(F(ri), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, W1 = { class: "flex w-full" }, q1 = { key: 0 }, G1 = { key: 1 }, Y1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, K1 = ["onClick"], J1 = /* @__PURE__ */ C("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), X1 = ["src"], Q1 = ["value"], Z1 = { class: "flex items-center gap-4" }, ew = {
  key: 0,
  class: "text-sm text-gray-600"
}, tw = {
  key: 1,
  class: "mt-2"
}, rw = /* @__PURE__ */ C("hr", null, null, -1), nw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, iw = { class: "-m-1 flex flex-wrap md:-m-2" }, aw = { class: "flex w-1/3 flex-wrap" }, ow = { class: "h-full w-full p-1 shadow md:p-2" }, sw = ["src"], o_ = {
  __name: "Images",
  props: {
    images: Object,
    itemType: String,
    itemId: Number,
    canUpload: {
      type: Boolean,
      default: !0
    },
    endPoint: { type: String, default: "images.store" }
  },
  setup(t) {
    const e = Ua(), r = t, n = l1({
      image: []
    });
    function i() {
      let p = new FormData();
      n.image.forEach((g, v) => {
        p.append(`image[${v}]`, g.file);
      }), p.append("item_type", r.itemType), p.append("item_id", r.itemId), e.post(route(r.endPoint), p, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _method: "post",
        forceFormData: !0,
        onFinish: () => {
          n.recentlySuccessful = !0, n.image = [];
        }
      });
    }
    function a(p) {
      p.forEach((g) => {
        let v = new FileReader();
        v.onload = (h) => {
          n.image.push({ file: g, dataUrl: h.target.result });
        }, v.readAsDataURL(g);
      });
    }
    const o = (p, g) => {
      if (g && g.length > 0) {
        console.error(g);
        return;
      }
      a(p);
    };
    function s(p) {
      n.image.splice(p, 1);
    }
    const { getRootProps: u, getInputProps: c, ...f } = Id({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (p, g) => (w(), O(ae, null, [
      t.canUpload ? (w(), O("form", {
        key: 0,
        onSubmit: Bt(i, ["prevent"]),
        class: "w-full"
      }, [
        C("div", W1, [
          C("div", {
            class: Y(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": p.dragEneted }])
          }, [
            C("div", Mn({ class: "p-4' font-medium flex h-20 w-full cursor-copy items-center justify-center" }, F(u)()), [
              C("input", Ve(Ke(F(c)())), null, 16),
              p.isDragActive ? (w(), O("span", q1, "Drop the files here ...")) : (w(), O("span", G1, "Drag 'n' drop images here"))
            ], 16),
            F(n).image.length > 0 ? (w(), O("div", Y1, [
              (w(!0), O(ae, null, Ze(F(n).image, (v, h) => (w(), O("div", {
                class: "relative cursor-pointer select-none",
                onClick: (y) => s(h),
                key: h
              }, [
                J1,
                C("img", {
                  src: v.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, X1)
              ], 8, K1))), 128))
            ])) : V("", !0)
          ], 2),
          he(F($p), {
            class: Y(["inline rounded-l-none", { "cursor-not-allowed": F(n).image.length == 0 }]),
            disabled: F(n).image.length == 0
          }, {
            default: we(() => [
              ce(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          F(n).progress ? (w(), O("progress", {
            key: 0,
            value: F(n).progress.percentage,
            max: "100"
          }, z(F(n).progress.percentage) + "% ", 9, Q1)) : V("", !0)
        ]),
        p.$page.props.errors.image ? (w(), ie(F(ri), {
          key: 0,
          class: "mt-2",
          message: p.$page.props.errors.image
        }, null, 8, ["message"])) : V("", !0),
        C("div", Z1, [
          he(Mr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: we(() => [
              F(n).recentlySuccessful ? (w(), O("p", ew, " Images uploaded. ")) : V("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : V("", !0),
      t.images.length ? (w(), O("div", tw, [
        rw,
        C("div", nw, [
          C("div", iw, [
            (w(!0), O(ae, null, Ze(t.images, (v) => (w(), O("div", aw, [
              C("div", ow, [
                C("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: v.url
                }, null, 8, sw),
                t.canUpload ? (w(), ie(F(Qe), {
                  key: 0,
                  href: p.route("images.delete", v.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: we(() => [
                    ce(" Delete Image ")
                  ]),
                  _: 2
                }, 1032, ["href"])) : V("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : V("", !0)
    ], 64));
  }
}, lw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, uw = ["name", "value", "id", "checked"], cw = ["for"], s_ = {
  __name: "RadioButton",
  props: {
    id: String,
    name: String,
    value: String | null,
    isChecked: {
      type: Boolean,
      default: !1
    },
    modelValue: String,
    // This is used with v-model on the parent component
    label: String
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = e, n = (i) => {
      r("update:modelValue", i.target.value);
    };
    return (i, a) => (w(), O("div", lw, [
      C("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 ring-accent focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, uw),
      C("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, z(t.label), 9, cw)
    ]));
  }
}, fw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, dw = {
  __name: "SubmitButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean,
    form: Object
  },
  setup(t) {
    return (e, r) => (w(), ie(F($p), {
      disabled: t.form.processing || t.disabled,
      type: t.type,
      class: "focusable"
    }, {
      default: we(() => [
        C("div", {
          class: Y({ "opacity-25": t.form.processing })
        }, [
          j(e.$slots, "default")
        ], 2),
        t.form.processing ? (w(), O("div", fw, [
          he(F(Ip), { class: "aspect-square !h-full !w-auto text-white" })
        ])) : V("", !0)
      ]),
      _: 3
    }, 8, ["disabled", "type"]));
  }
}, pw = ["id"], hw = {
  key: 0,
  class: "text-sm text-gray-600"
}, mw = { class: "flex flex-col" }, l_ = {
  __name: "Table",
  props: {
    total: Number,
    links: Array,
    collapsable: {
      type: Boolean,
      default: !1
    },
    collapse_id: {
      type: String,
      default: "collapse"
    },
    sticky: {
      type: Boolean,
      default: !0
    },
    overflow: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const e = t, r = ne(null), n = ne(null), i = ne(null), a = ne(null), o = () => {
      const c = r.value, f = c.getBoundingClientRect().top, p = document.querySelector("nav").offsetHeight, g = f - p, v = i.value, h = c.getBoundingClientRect().height + f - p * 2;
      if (g <= 0 && h > 0) {
        if (v.dataset.sticky === "true")
          return;
        v.style.display = "block", v.dataset.sticky = "true", v.style.top = `${p}px`, v.style.width = n.value.offsetWidth + "px";
        return;
      }
      v.dataset.sticky = "", v.style.display = "";
    }, s = () => {
      a.value.style.marginLeft = -n.value.scrollLeft + "px";
    }, u = () => {
      if (!r.value)
        return;
      const c = r.value.querySelector("thead tr");
      let f = a.value;
      f.innerHTML = "";
      let p = c == null ? void 0 : c.querySelectorAll("th");
      p == null || p.forEach((v) => {
        const h = v.cloneNode(!0);
        h.style.width = v.offsetWidth + "px", f.appendChild(h);
      });
      const g = i.value;
      g.style.width = n.value.offsetWidth + "px";
    };
    return e.sticky && (dt(() => {
      Bp(() => {
        u(), window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), n.value.addEventListener("scroll", s, {
          passive: !0
        });
      });
    }), Xn(() => {
      var c;
      window.removeEventListener("scroll", o), window.removeEventListener("resize", u), (c = n.value) == null || c.removeEventListener("scroll", s);
    })), (c, f) => (w(), O("div", {
      class: Y({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (w(), O("p", hw, "Found: " + z(t.total), 1)) : V("", !0),
      C("div", mw, [
        C("div", {
          class: Y({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: n
        }, [
          C("table", {
            class: Y(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-pink-500": t.collapsable
            }]),
            ref_key: "table",
            ref: r
          }, [
            t.sticky ? (w(), O("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: i,
              class: "fixed hidden w-full overflow-hidden bg-neutral-100"
            }, [
              C("div", {
                ref_key: "sticky_header",
                ref: a,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : V("", !0),
            j(c.$slots, "default")
          ], 2)
        ], 2)
      ]),
      t.links ? (w(), ie(F(Pp), {
        key: 1,
        class: "mt-6",
        links: t.links
      }, null, 8, ["links"])) : V("", !0)
    ], 10, pw));
  }
}, gw = {}, yw = { class: "font-medium border-b bg-neutral-100 dark:border-neutral-500" };
function vw(t, e) {
  return w(), O("thead", yw, [
    j(t.$slots, "default")
  ]);
}
const u_ = /* @__PURE__ */ pr(gw, [["render", vw]]);
var bw = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Ks = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, ww = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, xw = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Sw = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, Ow = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, _w = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
}, kc = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
const Aw = {
  key: 0,
  class: "order-arrows absolute right-3 top-0 flex h-full items-center md:right-4"
}, c_ = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    ti.add(xw, bw);
    const e = t, r = ne("asc"), n = ne(!1);
    let i = null;
    const a = Ua();
    dt(() => {
      e.orderBy && (i = a.on("navigate", o));
    }), Xn(() => {
      i == null || i();
    });
    const o = () => {
      const c = route().params;
      if (c.order_by === e.orderBy) {
        r.value = c.order_dir, n.value = !0;
        return;
      }
      n.value = !1;
    }, s = () => {
      if (!e.orderBy)
        return;
      const c = r.value === "asc" ? "desc" : "asc", f = route().params;
      f.order_by = e.orderBy, f.order_dir = c, a.get(route(route().current()), f, {
        preserveState: !0
      }), r.value = c, n.value = !0;
    }, u = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (w(), O("th", {
      scope: "col",
      class: Y(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      j(c.$slots, "default"),
      t.orderBy ? (w(), O("span", Aw, [
        he(F(Vr), {
          icon: "fa-sort-up",
          class: Y(["absolute", u("desc")])
        }, null, 8, ["class"]),
        he(F(Vr), {
          icon: "fa-sort-down",
          class: Y(["absolute", u("asc")])
        }, null, 8, ["class"])
      ])) : V("", !0)
    ], 2));
  }
}, Ew = {}, Cw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function kw(t, e) {
  return w(), O("td", Cw, [
    j(t.$slots, "default")
  ]);
}
const f_ = /* @__PURE__ */ pr(Ew, [["render", kw]]), Tw = ["data-te-target", "aria-controls"], d_ = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (w(), O("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      j(e.$slots, "default")
    ], 8, Tw));
  }
}, Pw = { colspan: "999" }, $w = ["id"], p_ = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (w(), O("tr", null, [
      C("td", Pw, [
        C("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          j(e.$slots, "default")
        ], 8, $w)
      ])
    ]));
  }
};
var Wl = { exports: {} }, oe = String, Dd = function() {
  return { isColorSupported: !1, reset: oe, bold: oe, dim: oe, italic: oe, underline: oe, inverse: oe, hidden: oe, strikethrough: oe, black: oe, red: oe, green: oe, yellow: oe, blue: oe, magenta: oe, cyan: oe, white: oe, gray: oe, bgBlack: oe, bgRed: oe, bgGreen: oe, bgYellow: oe, bgBlue: oe, bgMagenta: oe, bgCyan: oe, bgWhite: oe };
};
Wl.exports = Dd();
Wl.exports.createColors = Dd;
var Iw = Wl.exports;
let Tc = Iw, Pc = We, Js = class Rd extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Rd);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Tc.isColorSupported), Pc && e && (r = Pc(r));
    let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), o = String(a).length, s, u;
    if (e) {
      let { bold: c, gray: f, red: p } = Tc.createColors(!0);
      s = (g) => c(p(g)), u = (g) => f(g);
    } else
      s = u = (c) => c;
    return n.slice(i, a).map((c, f) => {
      let p = i + 1 + f, g = " " + (" " + p).slice(-o) + " | ";
      if (p === this.line) {
        let v = u(g.replace(/\d/g, " ")) + c.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return s(">") + u(g) + c + `
 ` + v + s("^");
      }
      return " " + u(g) + c;
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var ql = Js;
Js.default = Js;
var ui = {};
ui.isClean = Symbol("isClean");
ui.my = Symbol("my");
const $c = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function Dw(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Xs = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, r) {
    let n = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes)
      this.block(e, n + i);
    else {
      let a = (e.raws.between || "") + (r ? ";" : "");
      this.builder(n + i + a, e);
    }
  }
  beforeAfter(e, r) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : r === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let i = e.parent, a = 0;
    for (; i && i.type !== "root"; )
      a += 1, i = i.parent;
    if (n.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let s = 0; s < a; s++)
          n += o;
    }
    return n;
  }
  block(e, r) {
    let n = this.raw(e, "between", "beforeOpen");
    this.builder(r + n + "{", e, "start");
    let i;
    e.nodes && e.nodes.length ? (this.body(e), i = this.raw(e, "after")) : i = this.raw(e, "after", "emptyBody"), i && this.builder(i), this.builder("}", e, "end");
  }
  body(e) {
    let r = e.nodes.length - 1;
    for (; r > 0 && e.nodes[r].type === "comment"; )
      r -= 1;
    let n = this.raw(e, "semicolon");
    for (let i = 0; i < e.nodes.length; i++) {
      let a = e.nodes[i], o = this.raw(a, "before");
      o && this.builder(o), this.stringify(a, r !== i || n);
    }
  }
  comment(e) {
    let r = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
    this.builder("/*" + r + e.text + n + "*/", e);
  }
  decl(e, r) {
    let n = this.raw(e, "between", "colon"), i = e.prop + n + this.rawValue(e, "value");
    e.important && (i += e.raws.important || " !important"), r && (i += ";"), this.builder(i, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, r, n) {
    let i;
    if (n || (n = r), r && (i = e.raws[r], typeof i < "u"))
      return i;
    let a = e.parent;
    if (n === "before" && (!a || a.type === "root" && a.first === e || a && a.type === "document"))
      return "";
    if (!a)
      return $c[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + Dw(n);
      this[s] ? i = this[s](o, e) : o.walk((u) => {
        if (i = u.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = $c[n]), o.rawCache[n] = i, i;
  }
  rawBeforeClose(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length > 0 && typeof n.raws.after < "u")
        return r = n.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeComment(e, r) {
    let n;
    return e.walkComments((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(r, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(e, r) {
    let n;
    return e.walkDecls((i) => {
      if (typeof i.raws.before < "u")
        return n = i.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(r, null, "beforeRule") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeOpen(e) {
    let r;
    return e.walk((n) => {
      if (n.type !== "decl" && (r = n.raws.between, typeof r < "u"))
        return !1;
    }), r;
  }
  rawBeforeRule(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && (n.parent !== e || e.first !== n) && typeof n.raws.before < "u")
        return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawColon(e) {
    let r;
    return e.walkDecls((n) => {
      if (typeof n.raws.between < "u")
        return r = n.raws.between.replace(/[^\s:]/g, ""), !1;
    }), r;
  }
  rawEmptyBody(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length === 0 && (r = n.raws.after, typeof r < "u"))
        return !1;
    }), r;
  }
  rawIndent(e) {
    if (e.raws.indent)
      return e.raws.indent;
    let r;
    return e.walk((n) => {
      let i = n.parent;
      if (i && i !== e && i.parent && i.parent === e && typeof n.raws.before < "u") {
        let a = n.raws.before.split(`
`);
        return r = a[a.length - 1], r = r.replace(/\S/g, ""), !1;
      }
    }), r;
  }
  rawSemicolon(e) {
    let r;
    return e.walk((n) => {
      if (n.nodes && n.nodes.length && n.last.type === "decl" && (r = n.raws.semicolon, typeof r < "u"))
        return !1;
    }), r;
  }
  rawValue(e, r) {
    let n = e[r], i = e.raws[r];
    return i && i.value === n ? i.raw : n;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, r) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, r);
  }
};
var Nd = Xs;
Xs.default = Xs;
let Rw = Nd;
function Qs(t, e) {
  new Rw(e).stringify(t);
}
var Ha = Qs;
Qs.default = Qs;
let { isClean: Wi, my: Nw } = ui, Lw = ql, Fw = Nd, Mw = Ha;
function Zs(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let i = t[n], a = typeof i;
    n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((o) => Zs(o, r)) : (a === "object" && i !== null && (i = Zs(i)), r[n] = i);
  }
  return r;
}
let el = class {
  constructor(e = {}) {
    this.raws = {}, this[Wi] = !1, this[Nw] = !0;
    for (let r in e)
      if (r === "nodes") {
        this.nodes = [];
        for (let n of e[r])
          typeof n.clone == "function" ? this.append(n.clone()) : this.append(n);
      } else
        this[r] = e[r];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let r = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${r.input.from}:${r.start.line}:${r.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let r in e)
      this[r] = e[r];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let r = Zs(this);
    for (let n in e)
      r[n] = e[n];
    return r;
  }
  cloneAfter(e = {}) {
    let r = this.clone(e);
    return this.parent.insertAfter(this, r), r;
  }
  cloneBefore(e = {}) {
    let r = this.clone(e);
    return this.parent.insertBefore(this, r), r;
  }
  error(e, r = {}) {
    if (this.source) {
      let { end: n, start: i } = this.rangeBy(r);
      return this.source.input.error(
        e,
        { column: i.column, line: i.line },
        { column: n.column, line: n.line },
        r
      );
    }
    return new Lw(e);
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : r === "root" ? () => e.root().toProxy() : e[r];
      },
      set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "prop" || r === "value" || r === "name" || r === "params" || r === "important" || /* c8 ignore next */
        r === "text") && e.markDirty()), !0;
      }
    };
  }
  markDirty() {
    if (this[Wi]) {
      this[Wi] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Wi] = !1;
    }
  }
  next() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, r) {
    let n = this.source.start;
    if (e.index)
      n = this.positionInside(e.index, r);
    else if (e.word) {
      r = this.toString();
      let i = r.indexOf(e.word);
      i !== -1 && (n = this.positionInside(i, r));
    }
    return n;
  }
  positionInside(e, r) {
    let n = r || this.toString(), i = this.source.start.column, a = this.source.start.line;
    for (let o = 0; o < e; o++)
      n[o] === `
` ? (i = 1, a += 1) : i += 1;
    return { column: i, line: a };
  }
  prev() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let r = {
      column: this.source.start.column,
      line: this.source.start.line
    }, n = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: r.column + 1,
      line: r.line
    };
    if (e.word) {
      let i = this.toString(), a = i.indexOf(e.word);
      a !== -1 && (r = this.positionInside(a, i), n = this.positionInside(a + e.word.length, i));
    } else
      e.start ? r = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (r = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line
      } : e.endIndex ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < r.line || n.line === r.line && n.column <= r.column) && (n = { column: r.column + 1, line: r.line }), { end: n, start: r };
  }
  raw(e, r) {
    return new Fw().raw(this, e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let r = this, n = !1;
      for (let i of e)
        i === this ? n = !0 : n ? (this.parent.insertAfter(r, i), r = i) : this.parent.insertBefore(r, i);
      n || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, r) {
    let n = {}, i = r == null;
    r = r || /* @__PURE__ */ new Map();
    let a = 0;
    for (let o in this) {
      if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache")
        continue;
      let s = this[o];
      if (Array.isArray(s))
        n[o] = s.map((u) => typeof u == "object" && u.toJSON ? u.toJSON(null, r) : u);
      else if (typeof s == "object" && s.toJSON)
        n[o] = s.toJSON(null, r);
      else if (o === "source") {
        let u = r.get(s.input);
        u == null && (u = a, r.set(s.input, a), a++), n[o] = {
          end: s.end,
          inputId: u,
          start: s.start
        };
      } else
        n[o] = s;
    }
    return i && (n.inputs = [...r.keys()].map((o) => o.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = Mw) {
    e.stringify && (e = e.stringify);
    let r = "";
    return e(this, (n) => {
      r += n;
    }), r;
  }
  warn(e, r, n) {
    let i = { node: this };
    for (let a in n)
      i[a] = n[a];
    return e.warn(r, i);
  }
  get proxyOf() {
    return this;
  }
};
var Wa = el;
el.default = el;
let Bw = Wa, tl = class extends Bw {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var qa = tl;
tl.default = tl;
let jw = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", zw = (t, e = 21) => (r = e) => {
  let n = "", i = r;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, Uw = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += jw[Math.random() * 64 | 0];
  return e;
};
var Vw = { nanoid: Uw, customAlphabet: zw };
let { SourceMapConsumer: Ic, SourceMapGenerator: Dc } = We, { existsSync: Hw, readFileSync: Ww } = We, { dirname: os, join: qw } = We;
function Gw(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let rl = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = os(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Ic(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
    if (i.test(e) || a.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return Gw(e.substr(RegExp.lastMatch.length));
    let o = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + o);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let r = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!r)
      return;
    let n = e.lastIndexOf(r.pop()), i = e.indexOf("*/", n);
    n > -1 && i > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, i)));
  }
  loadFile(e) {
    if (this.root = os(e), Hw(e))
      return this.mapFile = e, Ww(e, "utf-8").toString().trim();
  }
  loadMap(e, r) {
    if (r === !1)
      return !1;
    if (r) {
      if (typeof r == "string")
        return r;
      if (typeof r == "function") {
        let n = r(e);
        if (n) {
          let i = this.loadFile(n);
          if (!i)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return i;
        }
      } else {
        if (r instanceof Ic)
          return Dc.fromSourceMap(r).toString();
        if (r instanceof Dc)
          return r.toString();
        if (this.isMap(r))
          return JSON.stringify(r);
        throw new Error(
          "Unsupported previous source map format: " + r.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let n = this.annotation;
        return e && (n = qw(os(e), n)), this.loadFile(n);
      }
    }
  }
  startWith(e, r) {
    return e ? e.substr(0, r.length) === r : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Ld = rl;
rl.default = rl;
let { SourceMapConsumer: Yw, SourceMapGenerator: Kw } = We, { fileURLToPath: Rc, pathToFileURL: qi } = We, { isAbsolute: nl, resolve: il } = We, { nanoid: Jw } = Vw, ss = We, Nc = ql, Xw = Ld, ls = Symbol("fromOffsetCache"), Qw = !!(Yw && Kw), Lc = !!(il && nl), Aa = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Lc || /^\w+:\/\//.test(r.from) || nl(r.from) ? this.file = r.from : this.file = il(r.from)), Lc && Qw) {
      let n = new Xw(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Jw(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, r, n, i = {}) {
    let a, o, s;
    if (r && typeof r == "object") {
      let c = r, f = n;
      if (typeof c.offset == "number") {
        let p = this.fromOffset(c.offset);
        r = p.line, n = p.col;
      } else
        r = c.line, n = c.column;
      if (typeof f.offset == "number") {
        let p = this.fromOffset(f.offset);
        o = p.line, s = p.col;
      } else
        o = f.line, s = f.column;
    } else if (!n) {
      let c = this.fromOffset(r);
      r = c.line, n = c.col;
    }
    let u = this.origin(r, n, o, s);
    return u ? a = new Nc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      i.plugin
    ) : a = new Nc(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: s, line: o },
      this.css,
      this.file,
      i.plugin
    ), a.input = { column: n, endColumn: s, endLine: o, line: r, source: this.css }, this.file && (qi && (a.input.url = qi(this.file).toString()), a.input.file = this.file), a;
  }
  fromOffset(e) {
    let r, n;
    if (this[ls])
      n = this[ls];
    else {
      let a = this.css.split(`
`);
      n = new Array(a.length);
      let o = 0;
      for (let s = 0, u = a.length; s < u; s++)
        n[s] = o, o += a[s].length + 1;
      this[ls] = n;
    }
    r = n[n.length - 1];
    let i = 0;
    if (e >= r)
      i = n.length - 1;
    else {
      let a = n.length - 2, o;
      for (; i < a; )
        if (o = i + (a - i >> 1), e < n[o])
          a = o - 1;
        else if (e >= n[o + 1])
          i = o + 1;
        else {
          i = o;
          break;
        }
    }
    return {
      col: e - n[i] + 1,
      line: i + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : il(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, r, n, i) {
    if (!this.map)
      return !1;
    let a = this.map.consumer(), o = a.originalPositionFor({ column: r, line: e });
    if (!o.source)
      return !1;
    let s;
    typeof n == "number" && (s = a.originalPositionFor({ column: i, line: n }));
    let u;
    nl(o.source) ? u = qi(o.source) : u = new URL(
      o.source,
      this.map.consumer().sourceRoot || qi(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: u.toString()
    };
    if (u.protocol === "file:")
      if (Rc)
        c.file = Rc(u);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = a.sourceContentFor(o.source);
    return f && (c.source = f), c;
  }
  toJSON() {
    let e = {};
    for (let r of ["hasBOM", "css", "file", "id"])
      this[r] != null && (e[r] = this[r]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var Ga = Aa;
Aa.default = Aa;
ss && ss.registerInput && ss.registerInput(Aa);
let { SourceMapConsumer: Fd, SourceMapGenerator: ua } = We, { dirname: ca, relative: Md, resolve: Bd, sep: jd } = We, { pathToFileURL: Fc } = We, Zw = Ga, ex = !!(Fd && ua), tx = !!(ca && Bd && Md && jd), rx = class {
  constructor(e, r, n, i) {
    this.stringify = e, this.mapOpts = n.map || {}, this.root = r, this.opts = n, this.css = i, this.originalCSS = i, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let r = `
`;
    this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let r = this.toUrl(this.path(e.file)), n = e.root || ca(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new Fd(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let r = this.root.nodes.length - 1; r >= 0; r--)
          e = this.root.nodes[r], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(r);
      } else
        this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), tx && ex && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (r) => {
        e += r;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = ua.fromSourceMap(e);
    } else
      this.map = new ua({ file: this.outputFile() }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new ua({ file: this.outputFile() });
    let e = 1, r = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, a, o;
    this.stringify(this.root, (s, u, c) => {
      if (this.css += s, u && c !== "end" && (i.generated.line = e, i.generated.column = r - 1, u.source && u.source.start ? (i.source = this.sourcePath(u), i.original.line = u.source.start.line, i.original.column = u.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), a = s.match(/\n/g), a ? (e += a.length, o = s.lastIndexOf(`
`), r = s.length - o) : r += s.length, u && c !== "start") {
        let f = u.parent || { raws: {} };
        (!(u.type === "decl" || u.type === "atrule" && !u.nodes) || u !== f.last || f.raws.semicolon) && (u.source && u.source.end ? (i.source = this.sourcePath(u), i.original.line = u.source.end.line, i.original.column = u.source.end.column - 1, i.generated.line = e, i.generated.column = r - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = r - 1, this.map.addMapping(i)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((r) => r.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e))
      return e;
    let r = this.memoizedPaths.get(e);
    if (r)
      return r;
    let n = this.opts.to ? ca(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = ca(Bd(n, this.mapOpts.annotation)));
    let i = Md(n, e);
    return this.memoizedPaths.set(e, i), i;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let r = e.source.input.map;
            this.previousMaps.includes(r) || this.previousMaps.push(r);
          }
        });
      else {
        let e = new Zw(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((r) => {
        if (r.source) {
          let n = r.source.input.from;
          if (n && !e[n]) {
            e[n] = !0;
            let i = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(i, r.source.input.css);
          }
        }
      });
    else if (this.css) {
      let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(r, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let r = this.memoizedFileURLs.get(e);
    if (r)
      return r;
    if (Fc) {
      let n = Fc(e).toString();
      return this.memoizedFileURLs.set(e, n), n;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let r = this.memoizedURLs.get(e);
    if (r)
      return r;
    jd === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var zd = rx;
let nx = Wa, al = class extends nx {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ya = al;
al.default = al;
let { isClean: Ud, my: Vd } = ui, Hd = qa, Wd = Ya, ix = Wa, qd, Gl, Yl, Gd;
function Yd(t) {
  return t.map((e) => (e.nodes && (e.nodes = Yd(e.nodes)), delete e.source, e));
}
function Kd(t) {
  if (t[Ud] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      Kd(e);
}
let Et = class Jd extends ix {
  append(...e) {
    for (let r of e) {
      let n = this.normalize(r, this.last);
      for (let i of n)
        this.proxyOf.nodes.push(i);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let r of this.nodes)
        r.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes)
      return;
    let r = this.getIterator(), n, i;
    for (; this.indexes[r] < this.proxyOf.nodes.length && (n = this.indexes[r], i = e(this.proxyOf.nodes[n], n), i !== !1); )
      this.indexes[r] += 1;
    return delete this.indexes[r], i;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : e[r] ? r === "each" || typeof r == "string" && r.startsWith("walk") ? (...n) => e[r](
          ...n.map((i) => typeof i == "function" ? (a, o) => i(a.toProxy(), o) : i)
        ) : r === "every" || r === "some" ? (n) => e[r](
          (i, ...a) => n(i.toProxy(), ...a)
        ) : r === "root" ? () => e.root().toProxy() : r === "nodes" ? e.nodes.map((n) => n.toProxy()) : r === "first" || r === "last" ? e[r].toProxy() : e[r] : e[r];
      },
      set(e, r, n) {
        return e[r] === n || (e[r] = n, (r === "name" || r === "params" || r === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, r) {
    let n = this.index(e), i = this.normalize(r, this.proxyOf.nodes[n]).reverse();
    n = this.index(e);
    for (let o of i)
      this.proxyOf.nodes.splice(n + 1, 0, o);
    let a;
    for (let o in this.indexes)
      a = this.indexes[o], n < a && (this.indexes[o] = a + i.length);
    return this.markDirty(), this;
  }
  insertBefore(e, r) {
    let n = this.index(e), i = n === 0 ? "prepend" : !1, a = this.normalize(r, this.proxyOf.nodes[n], i).reverse();
    n = this.index(e);
    for (let s of a)
      this.proxyOf.nodes.splice(n, 0, s);
    let o;
    for (let s in this.indexes)
      o = this.indexes[s], n <= o && (this.indexes[s] = o + a.length);
    return this.markDirty(), this;
  }
  normalize(e, r) {
    if (typeof e == "string")
      e = Yd(qd(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let i of e)
        i.parent && i.parent.removeChild(i, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Hd(e)];
    } else if (e.selector)
      e = [new Gl(e)];
    else if (e.name)
      e = [new Yl(e)];
    else if (e.text)
      e = [new Wd(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Vd] || Jd.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Ud] && Kd(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
  }
  prepend(...e) {
    e = e.reverse();
    for (let r of e) {
      let n = this.normalize(r, this.first, "prepend").reverse();
      for (let i of n)
        this.proxyOf.nodes.unshift(i);
      for (let i in this.indexes)
        this.indexes[i] = this.indexes[i] + n.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes)
      e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let r;
    for (let n in this.indexes)
      r = this.indexes[n], r >= e && (this.indexes[n] = r - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, r, n) {
    return n || (n = r, r = {}), this.walkDecls((i) => {
      r.props && !r.props.includes(i.prop) || r.fast && !i.value.includes(r.fast) || (i.value = i.value.replace(e, n));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((r, n) => {
      let i;
      try {
        i = e(r, n);
      } catch (a) {
        throw r.addToError(a);
      }
      return i !== !1 && r.walk && (i = r.walk(e)), i;
    });
  }
  walkAtRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "atrule" && e.test(n.name))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "atrule" && n.name === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "atrule")
        return r(n, i);
    }));
  }
  walkComments(e) {
    return this.walk((r, n) => {
      if (r.type === "comment")
        return e(r, n);
    });
  }
  walkDecls(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "decl" && e.test(n.prop))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "decl" && n.prop === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "decl")
        return r(n, i);
    }));
  }
  walkRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, i) => {
      if (n.type === "rule" && e.test(n.selector))
        return r(n, i);
    }) : this.walk((n, i) => {
      if (n.type === "rule" && n.selector === e)
        return r(n, i);
    }) : (r = e, this.walk((n, i) => {
      if (n.type === "rule")
        return r(n, i);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Et.registerParse = (t) => {
  qd = t;
};
Et.registerRule = (t) => {
  Gl = t;
};
Et.registerAtRule = (t) => {
  Yl = t;
};
Et.registerRoot = (t) => {
  Gd = t;
};
var mr = Et;
Et.default = Et;
Et.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Yl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, Gl.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, Hd.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Wd.prototype) : t.type === "root" && Object.setPrototypeOf(t, Gd.prototype), t[Vd] = !0, t.nodes && t.nodes.forEach((e) => {
    Et.rebuild(e);
  });
};
let ax = mr, Xd, Qd, qn = class extends ax {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Xd(new Qd(), this, e).stringify();
  }
};
qn.registerLazyResult = (t) => {
  Xd = t;
};
qn.registerProcessor = (t) => {
  Qd = t;
};
var Kl = qn;
qn.default = qn;
let Mc = {};
var Zd = function(e) {
  Mc[e] || (Mc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let ol = class {
  constructor(e, r = {}) {
    if (this.type = "warning", this.text = e, r.node && r.node.source) {
      let n = r.node.rangeBy(r);
      this.line = n.start.line, this.column = n.start.column, this.endLine = n.end.line, this.endColumn = n.end.column;
    }
    for (let n in r)
      this[n] = r[n];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var ep = ol;
ol.default = ol;
let ox = ep, sl = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new ox(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Jl = sl;
sl.default = sl;
const us = "'".charCodeAt(0), Bc = '"'.charCodeAt(0), Gi = "\\".charCodeAt(0), jc = "/".charCodeAt(0), Yi = `
`.charCodeAt(0), En = " ".charCodeAt(0), Ki = "\f".charCodeAt(0), Ji = "	".charCodeAt(0), Xi = "\r".charCodeAt(0), sx = "[".charCodeAt(0), lx = "]".charCodeAt(0), ux = "(".charCodeAt(0), cx = ")".charCodeAt(0), fx = "{".charCodeAt(0), dx = "}".charCodeAt(0), px = ";".charCodeAt(0), hx = "*".charCodeAt(0), mx = ":".charCodeAt(0), gx = "@".charCodeAt(0), Qi = /[\t\n\f\r "#'()/;[\\\]{}]/g, Zi = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, yx = /.[\r\n"'(/\\]/, zc = /[\da-f]/i;
var vx = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, u, c, f, p, g, v, h, y = n.length, b = 0, x = [], E = [];
  function _() {
    return b;
  }
  function k(R) {
    throw e.error("Unclosed " + R, b);
  }
  function $() {
    return E.length === 0 && b >= y;
  }
  function P(R) {
    if (E.length)
      return E.pop();
    if (b >= y)
      return;
    let B = R ? R.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(b), a) {
      case Yi:
      case En:
      case Ji:
      case Xi:
      case Ki: {
        o = b;
        do
          o += 1, a = n.charCodeAt(o);
        while (a === En || a === Yi || a === Ji || a === Xi || a === Ki);
        h = ["space", n.slice(b, o)], b = o - 1;
        break;
      }
      case sx:
      case lx:
      case fx:
      case dx:
      case mx:
      case px:
      case cx: {
        let T = String.fromCharCode(a);
        h = [T, T, b];
        break;
      }
      case ux: {
        if (g = x.length ? x.pop()[1] : "", v = n.charCodeAt(b + 1), g === "url" && v !== us && v !== Bc && v !== En && v !== Yi && v !== Ji && v !== Ki && v !== Xi) {
          o = b;
          do {
            if (f = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || B) {
                o = b;
                break;
              } else
                k("bracket");
            for (p = o; n.charCodeAt(p - 1) === Gi; )
              p -= 1, f = !f;
          } while (f);
          h = ["brackets", n.slice(b, o + 1), b, o], b = o;
        } else
          o = n.indexOf(")", b + 1), u = n.slice(b, o + 1), o === -1 || yx.test(u) ? h = ["(", "(", b] : (h = ["brackets", u, b, o], b = o);
        break;
      }
      case us:
      case Bc: {
        s = a === us ? "'" : '"', o = b;
        do {
          if (f = !1, o = n.indexOf(s, o + 1), o === -1)
            if (i || B) {
              o = b + 1;
              break;
            } else
              k("string");
          for (p = o; n.charCodeAt(p - 1) === Gi; )
            p -= 1, f = !f;
        } while (f);
        h = ["string", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case gx: {
        Qi.lastIndex = b + 1, Qi.test(n), Qi.lastIndex === 0 ? o = n.length - 1 : o = Qi.lastIndex - 2, h = ["at-word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case Gi: {
        for (o = b, c = !0; n.charCodeAt(o + 1) === Gi; )
          o += 1, c = !c;
        if (a = n.charCodeAt(o + 1), c && a !== jc && a !== En && a !== Yi && a !== Ji && a !== Xi && a !== Ki && (o += 1, zc.test(n.charAt(o)))) {
          for (; zc.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === En && (o += 1);
        }
        h = ["word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      default: {
        a === jc && n.charCodeAt(b + 1) === hx ? (o = n.indexOf("*/", b + 2) + 1, o === 0 && (i || B ? o = n.length : k("comment")), h = ["comment", n.slice(b, o + 1), b, o], b = o) : (Zi.lastIndex = b + 1, Zi.test(n), Zi.lastIndex === 0 ? o = n.length - 1 : o = Zi.lastIndex - 2, h = ["word", n.slice(b, o + 1), b, o], x.push(h), b = o);
        break;
      }
    }
    return b++, h;
  }
  function I(R) {
    E.push(R);
  }
  return {
    back: I,
    endOfFile: $,
    nextToken: P,
    position: _
  };
};
let tp = mr, Ea = class extends tp {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Xl = Ea;
Ea.default = Ea;
tp.registerAtRule(Ea);
let rp = mr, np, ip, Kr = class extends rp {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, r, n) {
    let i = super.normalize(e);
    if (r) {
      if (n === "prepend")
        this.nodes.length > 1 ? r.raws.before = this.nodes[1].raws.before : delete r.raws.before;
      else if (this.first !== r)
        for (let a of i)
          a.raws.before = r.raws.before;
    }
    return i;
  }
  removeChild(e, r) {
    let n = this.index(e);
    return !r && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new np(new ip(), this, e).stringify();
  }
};
Kr.registerLazyResult = (t) => {
  np = t;
};
Kr.registerProcessor = (t) => {
  ip = t;
};
var ci = Kr;
Kr.default = Kr;
rp.registerRoot(Kr);
let Gn = {
  comma(t) {
    return Gn.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return Gn.split(t, e);
  },
  split(t, e, r) {
    let n = [], i = "", a = !1, o = 0, s = !1, u = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === u && (s = !1) : f === '"' || f === "'" ? (s = !0, u = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (a = !0), a ? (i !== "" && n.push(i.trim()), i = "", a = !1) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }
};
var ap = Gn;
Gn.default = Gn;
let op = mr, bx = ap, Ca = class extends op {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return bx.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Ql = Ca;
Ca.default = Ca;
op.registerRule(Ca);
let wx = qa, xx = vx, Sx = Ya, Ox = Xl, _x = ci, Uc = Ql;
const Vc = {
  empty: !0,
  space: !0
};
function Ax(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let Ex = class {
  constructor(e) {
    this.input = e, this.root = new _x(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new Ox();
    r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
    let n, i, a, o = !1, s = !1, u = [], c = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? c.push(n === "(" ? ")" : "]") : n === "{" && c.length > 0 ? c.push("}") : n === c[c.length - 1] && c.pop(), c.length === 0)
        if (n === ";") {
          r.source.end = this.getPosition(e[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (n === "{") {
          s = !0;
          break;
        } else if (n === "}") {
          if (u.length > 0) {
            for (a = u.length - 1, i = u[a]; i && i[0] === "space"; )
              i = u[--a];
            i && (r.source.end = this.getPosition(i[3] || i[2]), r.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          u.push(e);
      else
        u.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(u), u.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(u), this.raw(r, "params", u), o && (e = u[u.length - 1], r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), s && (r.nodes = [], this.current = r);
  }
  checkMissedSemicolon(e) {
    let r = this.colon(e);
    if (r === !1)
      return;
    let n = 0, i;
    for (let a = r - 1; a >= 0 && (i = e[a], !(i[0] !== "space" && (n += 1, n === 2))); a--)
      ;
    throw this.input.error(
      "Missed semicolon",
      i[0] === "word" ? i[3] + 1 : i[2]
    );
  }
  colon(e) {
    let r = 0, n, i, a;
    for (let [o, s] of e.entries()) {
      if (n = s, i = n[0], i === "(" && (r += 1), i === ")" && (r -= 1), r === 0 && i === ":")
        if (!a)
          this.doubleColon(n);
        else {
          if (a[0] === "word" && a[1] === "progid")
            continue;
          return o;
        }
      a = n;
    }
    return !1;
  }
  comment(e) {
    let r = new Sx();
    this.init(r, e[2]), r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++;
    let n = e[1].slice(2, -2);
    if (/^\s*$/.test(n))
      r.text = "", r.raws.left = n, r.raws.right = "";
    else {
      let i = n.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = i[2], r.raws.left = i[1], r.raws.right = i[3];
    }
  }
  createTokenizer() {
    this.tokenizer = xx(this.input);
  }
  decl(e, r) {
    let n = new wx();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || Ax(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let c = e[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let a;
    for (; e.length; )
      if (a = e.shift(), a[0] === ":") {
        n.raws.between += a[1];
        break;
      } else
        a[0] === "word" && /\w/.test(a[1]) && this.unknownWord([a]), n.raws.between += a[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let o = [], s;
    for (; e.length && (s = e[0][0], !(s !== "space" && s !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let c = e.length - 1; c >= 0; c--) {
      if (a = e[c], a[1].toLowerCase() === "!important") {
        n.important = !0;
        let f = this.stringFrom(e, c);
        f = this.spacesFromEnd(e) + f, f !== " !important" && (n.raws.important = f);
        break;
      } else if (a[1].toLowerCase() === "important") {
        let f = e.slice(0), p = "";
        for (let g = c; g > 0; g--) {
          let v = f[g][0];
          if (p.trim().indexOf("!") === 0 && v !== "space")
            break;
          p = f.pop()[1] + p;
        }
        p.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = p, e = f);
      }
      if (a[0] !== "space" && a[0] !== "comment")
        break;
    }
    e.some((c) => c[0] !== "space" && c[0] !== "comment") && (n.raws.between += o.map((c) => c[1]).join(""), o = []), this.raw(n, "value", o.concat(e), r), n.value.includes(":") && !r && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let r = new Uc();
    this.init(r, e[2]), r.selector = "", r.raws.between = "", this.current = r;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let r = this.current.nodes[this.current.nodes.length - 1];
      r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let r = this.input.fromOffset(e);
    return {
      column: r.col,
      line: r.line,
      offset: e
    };
  }
  init(e, r) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(r)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let r = !1, n = null, i = !1, a = null, o = [], s = e[1].startsWith("--"), u = [], c = e;
    for (; c; ) {
      if (n = c[0], u.push(c), n === "(" || n === "[")
        a || (a = c), o.push(n === "(" ? ")" : "]");
      else if (s && i && n === "{")
        a || (a = c), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (i) {
            this.decl(u, s);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(u);
          return;
        } else if (n === "}") {
          this.tokenizer.back(u.pop()), r = !0;
          break;
        } else
          n === ":" && (i = !0);
      else
        n === o[o.length - 1] && (o.pop(), o.length === 0 && (a = null));
      c = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), o.length > 0 && this.unclosedBracket(a), r && i) {
      if (!s)
        for (; u.length && (c = u[u.length - 1][0], !(c !== "space" && c !== "comment")); )
          this.tokenizer.back(u.pop());
      this.decl(u, s);
    } else
      this.unknownWord(u);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, r, n, i) {
    let a, o, s = n.length, u = "", c = !0, f, p;
    for (let g = 0; g < s; g += 1)
      a = n[g], o = a[0], o === "space" && g === s - 1 && !i ? c = !1 : o === "comment" ? (p = n[g - 1] ? n[g - 1][0] : "empty", f = n[g + 1] ? n[g + 1][0] : "empty", !Vc[p] && !Vc[f] ? u.slice(-1) === "," ? c = !1 : u += a[1] : c = !1) : u += a[1];
    if (!c) {
      let g = n.reduce((v, h) => v + h[1], "");
      e.raws[r] = { raw: g, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new Uc();
    this.init(r, e[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(r, "selector", e), this.current = r;
  }
  spacesAndCommentsFromEnd(e) {
    let r, n = "";
    for (; e.length && (r = e[e.length - 1][0], !(r !== "space" && r !== "comment")); )
      n = e.pop()[1] + n;
    return n;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let r, n = "";
    for (; e.length && (r = e[0][0], !(r !== "space" && r !== "comment")); )
      n += e.shift()[1];
    return n;
  }
  spacesFromEnd(e) {
    let r, n = "";
    for (; e.length && (r = e[e.length - 1][0], r === "space"); )
      n = e.pop()[1] + n;
    return n;
  }
  stringFrom(e, r) {
    let n = "";
    for (let i = r; i < e.length; i++)
      n += e[i][1];
    return e.splice(r, e.length - r), n;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, r) {
    throw this.input.error(
      "At-rule without name",
      { offset: r[2] },
      { offset: r[2] + r[1].length }
    );
  }
};
var Cx = Ex;
let kx = mr, Tx = Cx, Px = Ga;
function ka(t, e) {
  let r = new Px(t, e), n = new Tx(r);
  try {
    n.parse();
  } catch (i) {
    throw process.env.NODE_ENV !== "production" && i.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? i.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? i.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (i.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), i;
  }
  return n.root;
}
var Zl = ka;
ka.default = ka;
kx.registerParse(ka);
let { isClean: at, my: $x } = ui, Ix = zd, Dx = Ha, Rx = mr, Nx = Kl, Lx = Zd, Hc = Jl, Fx = Zl, Mx = ci;
const Bx = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, jx = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, zx = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Jr = 0;
function Cn(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function sp(t) {
  let e = !1, r = Bx[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    Jr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Jr, r + "Exit"] : [r, r + "Exit"];
}
function Wc(t) {
  let e;
  return t.type === "document" ? e = ["Document", Jr, "DocumentExit"] : t.type === "root" ? e = ["Root", Jr, "RootExit"] : e = sp(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function ll(t) {
  return t[at] = !1, t.nodes && t.nodes.forEach((e) => ll(e)), t;
}
let ul = {}, Xr = class lp {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = ll(r);
    else if (r instanceof lp || r instanceof Hc)
      i = ll(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = Fx;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[$x] && Rx.rebuild(i);
    }
    this.result = new Hc(e, i, n), this.helpers = { ...ul, postcss: ul, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, r) {
    let n = this.result.lastPlugin;
    try {
      if (r && r.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = n.postcssPlugin, e.setMessage();
      else if (n.postcssVersion && process.env.NODE_ENV !== "production") {
        let i = n.postcssPlugin, a = n.postcssVersion, o = this.result.processor.version, s = a.split("."), u = o.split(".");
        (s[0] !== u[0] || parseInt(s[1]) > parseInt(u[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + i + " uses " + a + ". Perhaps this is the source of the error below."
        );
      }
    } catch (i) {
      console && console.error && console.error(i);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (r, n, i) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([r, i]);
    };
    for (let r of this.plugins)
      if (typeof r == "object")
        for (let n in r) {
          if (!jx[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!zx[n])
            if (typeof r[n] == "object")
              for (let i in r[n])
                i === "*" ? e(r, n, r[n][i]) : e(
                  r,
                  n + "-" + i.toLowerCase(),
                  r[n][i]
                );
            else
              typeof r[n] == "function" && e(r, n, r[n]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let r = this.plugins[e], n = this.runOnRoot(r);
      if (Cn(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[at]; ) {
        e[at] = !0;
        let r = [Wc(e)];
        for (; r.length > 0; ) {
          let n = this.visitTick(r);
          if (Cn(n))
            try {
              await n;
            } catch (i) {
              let a = r[r.length - 1].node;
              throw this.handleError(i, a);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [r, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = r;
          try {
            if (e.type === "document") {
              let i = e.nodes.map(
                (a) => n(a, this.helpers)
              );
              await Promise.all(i);
            } else
              await n(e, this.helpers);
          } catch (i) {
            throw this.handleError(i);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let r = this.result.root.nodes.map(
            (n) => e.Once(n, this.helpers)
          );
          return Cn(r[0]) ? Promise.all(r) : r;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (r) {
      throw this.handleError(r);
    }
  }
  stringify() {
    if (this.error)
      throw this.error;
    if (this.stringified)
      return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, r = Dx;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new Ix(r, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error)
      throw this.error;
    if (this.processed)
      return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let r = this.runOnRoot(e);
      if (Cn(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[at]; )
        e[at] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let r of e.nodes)
            this.visitSync(this.listeners.OnceExit, r);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Lx(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this.css;
  }
  visitSync(e, r) {
    for (let [n, i] of e) {
      this.result.lastPlugin = n;
      let a;
      try {
        a = i(r, this.helpers);
      } catch (o) {
        throw this.handleError(o, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (Cn(a))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let r = e[e.length - 1], { node: n, visitors: i } = r;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      e.pop();
      return;
    }
    if (i.length > 0 && r.visitorIndex < i.length) {
      let [o, s] = i[r.visitorIndex];
      r.visitorIndex += 1, r.visitorIndex === i.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return s(n.toProxy(), this.helpers);
      } catch (u) {
        throw this.handleError(u, n);
      }
    }
    if (r.iterator !== 0) {
      let o = r.iterator, s;
      for (; s = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !s[at]) {
          s[at] = !0, e.push(Wc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === Jr) {
        n.nodes && n.nodes.length && (n[at] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[at] = !0;
    let r = sp(e);
    for (let n of r)
      if (n === Jr)
        e.nodes && e.each((i) => {
          i[at] || this.walkSync(i);
        });
      else {
        let i = this.listeners[n];
        if (i && this.visitSync(i, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
Xr.registerPostcss = (t) => {
  ul = t;
};
var up = Xr;
Xr.default = Xr;
Mx.registerLazyResult(Xr);
Nx.registerLazyResult(Xr);
let Ux = zd, Vx = Ha, Hx = Zd, Wx = Zl;
const qx = Jl;
let cl = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = Vx;
    this.result = new qx(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new Ux(a, i, this._opts, r);
    if (s.isMap()) {
      let [u, c] = s.generate();
      u && (this.result.css = u), c && (this.result.map = c);
    } else
      s.clearAnnotation(), this.result.css = s.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error)
      throw this.error;
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Hx(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, r = Wx;
    try {
      e = r(this._css, this._opts);
    } catch (n) {
      this.error = n;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var Gx = cl;
cl.default = cl;
let Yx = Gx, Kx = up, Jx = Kl, Xx = ci, Yn = class {
  constructor(e = []) {
    this.version = "8.4.35", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let r = [];
    for (let n of e)
      if (n.postcss === !0 ? n = n() : n.postcss && (n = n.postcss), typeof n == "object" && Array.isArray(n.plugins))
        r = r.concat(n.plugins);
      else if (typeof n == "object" && n.postcssPlugin)
        r.push(n);
      else if (typeof n == "function")
        r.push(n);
      else if (typeof n == "object" && (n.parse || n.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(n + " is not a PostCSS plugin");
    return r;
  }
  process(e, r = {}) {
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new Yx(this, e, r) : new Kx(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Qx = Yn;
Yn.default = Yn;
Xx.registerProcessor(Yn);
Jx.registerProcessor(Yn);
let Zx = qa, eS = Ld, tS = Ya, rS = Xl, nS = Ga, iS = ci, aS = Ql;
function Kn(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Kn(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: nS.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: eS.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Kn(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new iS(n);
  if (n.type === "decl")
    return new Zx(n);
  if (n.type === "rule")
    return new aS(n);
  if (n.type === "comment")
    return new tS(n);
  if (n.type === "atrule")
    return new rS(n);
  throw new Error("Unknown node type: " + t.type);
}
var oS = Kn;
Kn.default = Kn;
let sS = ql, cp = qa, lS = up, uS = mr, eu = Qx, cS = Ha, fS = oS, fp = Kl, dS = ep, dp = Ya, pp = Xl, pS = Jl, hS = Ga, mS = Zl, gS = ap, hp = Ql, mp = ci, yS = Wa;
function te(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new eu(t);
}
te.plugin = function(e, r) {
  let n = !1;
  function i(...o) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let s = r(...o);
    return s.postcssPlugin = e, s.postcssVersion = new eu().version, s;
  }
  let a;
  return Object.defineProperty(i, "postcss", {
    get() {
      return a || (a = i()), a;
    }
  }), i.process = function(o, s, u) {
    return te([i(u)]).process(o, s);
  }, i;
};
te.stringify = cS;
te.parse = mS;
te.fromJSON = fS;
te.list = gS;
te.comment = (t) => new dp(t);
te.atRule = (t) => new pp(t);
te.decl = (t) => new cp(t);
te.rule = (t) => new hp(t);
te.root = (t) => new mp(t);
te.document = (t) => new fp(t);
te.CssSyntaxError = sS;
te.Declaration = cp;
te.Container = uS;
te.Processor = eu;
te.Document = fp;
te.Comment = dp;
te.Warning = dS;
te.AtRule = pp;
te.Result = pS;
te.Input = hS;
te.Rule = hp;
te.Root = mp;
te.Node = yS;
lS.registerPostcss(te);
var vS = te;
te.default = te;
const fe = /* @__PURE__ */ za(vS);
fe.stringify;
fe.fromJSON;
fe.plugin;
fe.parse;
fe.list;
fe.document;
fe.comment;
fe.atRule;
fe.rule;
fe.decl;
fe.root;
fe.CssSyntaxError;
fe.Declaration;
fe.Container;
fe.Processor;
fe.Document;
fe.Comment;
fe.Warning;
fe.AtRule;
fe.Result;
fe.Input;
fe.Rule;
fe.Root;
fe.Node;
const bS = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, wS = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, xS = { key: 0 }, SS = {
  key: 1,
  class: "ml-1"
}, OS = { class: "flex w-fit flex-wrap" }, _S = {
  key: 0,
  class: "font-semibold"
}, AS = { class: "mb-1" }, ES = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, CS = { class: "w-full break-words" }, kS = { class: "mb-1 flex flex-col" }, TS = { key: 1 }, P_ = {
  __name: "TableItemCard",
  props: {
    key: Number,
    item: Object,
    itemId: {
      type: Object,
      id: {
        type: String,
        required: !0
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        required: !1
      },
      prefix: {
        type: Boolean,
        required: !1,
        default: !0
      }
    },
    extraText: String,
    title: {
      type: Object,
      text: {
        type: String,
        required: !0
      },
      href: {
        type: String,
        default: null,
        required: !1
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        default: null,
        required: !1
      }
    },
    pills: {
      type: Array,
      text: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        required: !1
      }
    },
    options: {
      type: Object,
      text: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        required: !1
      },
      routeName: {
        type: String,
        default: null,
        required: !1
      },
      href: {
        type: String,
        default: null,
        required: !1
      },
      routeData: {
        type: String,
        default: null,
        required: !1
      }
    },
    timeStamp: String,
    amount: {
      text: {
        type: String,
        required: !1,
        default: "Amount: "
      },
      amount: {
        type: String,
        required: !0,
        default: "0.00"
      }
    }
  },
  setup(t) {
    const e = t;
    return (r, n) => {
      var i;
      return w(), O("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        C("div", bS, [
          e.itemId || e.timeStamp ? (w(), O("div", wS, [
            e.itemId ? (w(), O(ae, { key: 0 }, [
              e.itemId.routeName ? (w(), ie(F(Qe), {
                key: 1,
                href: r.route(
                  e.itemId.routeName,
                  e.itemId.routeData ? e.itemId.routeData : e.itemId.id
                )
              }, {
                default: we(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (w(), O(ae, { key: 0 }, [
                    ce("#")
                  ], 64)) : V("", !0),
                  ce(" " + z(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (w(), O("span", xS, [
                e.itemId.prefix || e.itemId.prefix == null ? (w(), O(ae, { key: 0 }, [
                  ce("#")
                ], 64)) : V("", !0),
                ce(" " + z(e.itemId.id), 1)
              ]))
            ], 64)) : V("", !0),
            e.timeStamp ? (w(), O("span", SS, [
              e.itemId ? (w(), O(ae, { key: 0 }, [
                ce("-")
              ], 64)) : V("", !0),
              ce(" " + z(e.timeStamp), 1)
            ])) : V("", !0)
          ])) : V("", !0),
          C("div", OS, [
            (w(!0), O(ae, null, Ze(t.pills, (a, o) => (w(), O(ae, { key: o }, [
              a.text ? (w(), O("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border p-1 px-2 text-white bg-primary",
                style: ta({
                  backgroundColor: a.color ? a.color : null
                })
              }, z(a.text), 5)) : V("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (w(), O(ae, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (w(), O("p", _S, z(e.title.text), 1)) : (w(), ie(F(Qe), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: we(() => [
              ce(z(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : V("", !0),
        C("div", AS, [
          e.extraText ? (w(), O("p", ES, [
            ce(" Engineer Note: "),
            C("span", CS, z(e.extraText), 1)
          ])) : V("", !0)
        ]),
        C("div", kS, [
          (w(!0), O(ae, null, Ze(t.options, (a, o) => (w(), O(ae, null, [
            !a.routeName && !a.href ? (w(), O("span", {
              key: 0,
              style: ta({ color: a.color ? a.color : "#000" })
            }, z(a.text), 5)) : (w(), ie(F(Qe), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: ta({ color: a.color ? a.color : "#000" })
            }, {
              default: we(() => [
                ce(z(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (w(), O("div", TS, [
          C("span", null, z(e.amount.text + F(c1)(e.amount.amount)), 1)
        ])) : V("", !0),
        C("div", null, [
          j(r.$slots, "default")
        ])
      ]);
    };
  }
};
/*!
* Tailwind Elements 1.0.0
* 
* Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/
const cs = (() => {
  const t = {};
  let e = 1;
  return {
    set(r, n, i) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: e
      }, e++), t[r[n].id] = i;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const i = r[n];
      return i.key === n ? t[i.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const i = r[n];
      i.key === n && (delete t[i.id], delete r[n]);
    }
  };
})(), fa = {
  setData(t, e, r) {
    cs.set(t, e, r);
  },
  getData(t, e) {
    return cs.get(t, e);
  },
  removeData(t, e) {
    cs.delete(t, e);
  }
}, PS = 1e6, $S = 1e3, fl = "transitionend", IS = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), DS = (t) => {
  do
    t += Math.floor(Math.random() * PS);
  while (document.getElementById(t));
  return t;
}, gp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, yp = (t) => {
  const e = gp(t);
  return e && document.querySelector(e) ? e : null;
}, Jn = (t) => {
  const e = gp(t);
  return e ? document.querySelector(e) : null;
}, RS = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * $S);
}, NS = (t) => {
  t.dispatchEvent(new Event(fl));
}, vp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), dl = (t) => vp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, Ta = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && vp(a) ? "element" : IS(a);
    if (!new RegExp(i).test(o))
      throw new Error(
        `${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`
      );
  });
}, Ka = (t) => {
  if (!t || t.getClientRects().length === 0)
    return !1;
  if (t.style && t.parentNode && t.parentNode.style) {
    const e = getComputedStyle(t), r = getComputedStyle(t.parentNode);
    return getComputedStyle(t).getPropertyValue("visibility") === "visible" || e.display !== "none" && r.display !== "none" && e.visibility !== "hidden";
  }
  return !1;
}, Ja = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", LS = (t) => {
  t.offsetHeight;
}, bp = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, fs = [], FS = (t) => {
  document.readyState === "loading" ? (fs.length || document.addEventListener("DOMContentLoaded", () => {
    fs.forEach((e) => e());
  }), fs.push(t)) : t();
}, ft = () => document.documentElement.dir === "rtl", MS = (t) => document.createElement(t), qc = (t) => {
  typeof t == "function" && t();
}, BS = (t, e, r = !0) => {
  if (!r) {
    qc(t);
    return;
  }
  const n = 5, i = RS(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(fl, o), qc(t));
  };
  e.addEventListener(fl, o), setTimeout(() => {
    a || NS(e);
  }, i);
}, jS = /[^.]*(?=\..*)\.|.*/, zS = /\..*/, US = /::\d+$/, ds = {};
let Gc = 1;
const VS = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, HS = /^(mouseenter|mouseleave)/i, wp = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function xp(t, e) {
  return e && `${e}::${Gc++}` || t.uidEvent || Gc++;
}
function Sp(t) {
  const e = xp(t);
  return t.uidEvent = e, ds[e] = ds[e] || {}, ds[e];
}
function WS(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && le.off(t, n.type, e), e.apply(t, [n]);
  };
}
function qS(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && le.off(t, i.type, r), r.apply(o, [i]);
    return null;
  };
}
function Op(t, e, r = null) {
  const n = Object.keys(t);
  for (let i = 0, a = n.length; i < a; i++) {
    const o = t[n[i]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function _p(t, e, r) {
  const n = typeof e == "string", i = n ? r : e;
  let a = Ap(t);
  return wp.has(a) || (a = t), [n, i, a];
}
function Yc(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), HS.test(e)) {
    const v = (h) => function(y) {
      if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
        return h.call(this, y);
    };
    n ? n = v(n) : r = v(r);
  }
  const [a, o, s] = _p(
    e,
    r,
    n
  ), u = Sp(t), c = u[s] || (u[s] = {}), f = Op(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const p = xp(
    o,
    e.replace(jS, "")
  ), g = a ? qS(t, r, n) : WS(t, r);
  g.delegationSelector = a ? r : null, g.originalHandler = o, g.oneOff = i, g.uidEvent = p, c[p] = g, t.addEventListener(s, g, a);
}
function pl(t, e, r, n, i) {
  const a = Op(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function GS(t, e, r, n) {
  const i = e[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const o = i[a];
      pl(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Ap(t) {
  return t = t.replace(zS, ""), VS[t] || t;
}
const le = {
  on(t, e, r, n) {
    Yc(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    Yc(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = _p(
      e,
      r,
      n
    ), s = o !== e, u = Sp(t), c = e.startsWith(".");
    if (typeof a < "u") {
      if (!u || !u[o])
        return;
      pl(
        t,
        u,
        o,
        a,
        i ? r : null
      );
      return;
    }
    c && Object.keys(u).forEach((p) => {
      GS(
        t,
        u,
        p,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((p) => {
      const g = p.replace(US, "");
      if (!s || e.includes(g)) {
        const v = f[p];
        pl(
          t,
          u,
          o,
          v.originalHandler,
          v.delegationSelector
        );
      }
    });
  },
  trigger(t, e, r) {
    if (typeof e != "string" || !t)
      return null;
    const n = bp(), i = Ap(e), a = e !== i, o = wp.has(i);
    let s, u = !0, c = !0, f = !1, p = null;
    return a && n && (s = n.Event(e, r), n(t).trigger(s), u = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented()), o ? (p = document.createEvent("HTMLEvents"), p.initEvent(i, u, !0)) : p = new CustomEvent(e, {
      bubbles: u,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((g) => {
      Object.defineProperty(p, g, {
        get() {
          return r[g];
        }
      });
    }), f && p.preventDefault(), c && t.dispatchEvent(p), p.defaultPrevented && typeof s < "u" && s.preventDefault(), p;
  }
}, YS = "5.1.3";
class Ep {
  constructor(e) {
    e = dl(e), e && (this._element = e, fa.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    fa.removeData(this._element, this.constructor.DATA_KEY), le.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    BS(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return fa.getData(dl(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return YS;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `te.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
function ps(t) {
  return t === "true" ? !0 : t === "false" ? !1 : t === Number(t).toString() ? Number(t) : t === "" || t === "null" ? null : t;
}
function hs(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Z = {
  setDataAttribute(t, e, r) {
    t.setAttribute(`data-te-${hs(e)}`, r);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-te-${hs(e)}`);
  },
  getDataAttributes(t) {
    if (!t)
      return {};
    const e = {};
    return Object.keys(t.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ps(t.dataset[r]);
    }), e;
  },
  getDataClassAttributes(t) {
    if (!t)
      return {};
    const e = {
      ...t.dataset
    };
    return Object.keys(e).filter((r) => r.startsWith("teClass")).forEach((r) => {
      let n = r.replace(/^teClass/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ps(e[r]);
    }), e;
  },
  getDataAttribute(t, e) {
    return ps(
      t.getAttribute(`data-te-${hs(e)}`)
    );
  },
  offset(t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + document.body.scrollTop,
      left: e.left + document.body.scrollLeft
    };
  },
  position(t) {
    return {
      top: t.offsetTop,
      left: t.offsetLeft
    };
  },
  style(t, e) {
    Object.assign(t.style, e);
  },
  toggleClass(t, e) {
    t && ms(e).forEach((r) => {
      t.classList.contains(r) ? t.classList.remove(r) : t.classList.add(r);
    });
  },
  addClass(t, e) {
    ms(e).forEach(
      (r) => !t.classList.contains(r) && t.classList.add(r)
    );
  },
  addStyle(t, e) {
    Object.keys(e).forEach((r) => {
      t.style[r] = e[r];
    });
  },
  removeClass(t, e) {
    ms(e).forEach(
      (r) => t.classList.contains(r) && t.classList.remove(r)
    );
  },
  hasClass(t, e) {
    return t.classList.contains(e);
  },
  maxOffset(t) {
    const e = t.getBoundingClientRect();
    return {
      top: e.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: e.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function ms(t) {
  return typeof t == "string" ? t.split(" ") : Array.isArray(t) ? t : !1;
}
const KS = 3, Be = {
  closest(t, e) {
    return t.closest(e);
  },
  matches(t, e) {
    return t.matches(e);
  },
  find(t, e = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(e, t)
    );
  },
  findOne(t, e = document.documentElement) {
    return Element.prototype.querySelector.call(e, t);
  },
  children(t, e) {
    return [].concat(...t.children).filter((r) => r.matches(e));
  },
  parents(t, e) {
    const r = [];
    let n = t.parentNode;
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== KS; )
      this.matches(n, e) && r.push(n), n = n.parentNode;
    return r;
  },
  prev(t, e) {
    let r = t.previousElementSibling;
    for (; r; ) {
      if (r.matches(e))
        return [r];
      r = r.previousElementSibling;
    }
    return [];
  },
  next(t, e) {
    let r = t.nextElementSibling;
    for (; r; ) {
      if (this.matches(r, e))
        return [r];
      r = r.nextElementSibling;
    }
    return [];
  },
  focusableChildren(t) {
    const e = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((r) => `${r}:not([tabindex^="-"])`).join(", ");
    return this.find(e, t).filter(
      (r) => !Ja(r) && Ka(r)
    );
  }
};
ft();
ft();
ft();
ft();
ft();
ft();
const gs = "collapse", Cp = "te.collapse", Xa = `.${Cp}`, Kc = {
  toggle: !0,
  parent: null
}, JS = {
  toggle: "boolean",
  parent: "(null|element)"
}, XS = `show${Xa}`, QS = `shown${Xa}`, ZS = `hide${Xa}`, e2 = `hidden${Xa}`, ys = "data-te-collapse-show", Jc = "data-te-collapse-collapsed", ea = "data-te-collapse-collapsing", t2 = "data-te-collapse-horizontal", Fr = "data-te-collapse-item", Xc = `:scope [${Fr}] [${Fr}]`, r2 = "width", n2 = "height", i2 = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Qc = "[data-te-collapse-init]", a2 = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, o2 = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class zr extends Ep {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Be.find(Qc);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], u = yp(s), c = Be.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Kc;
  }
  static get NAME() {
    return gs;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let e = [], r;
    if (this._config.parent) {
      const u = Be.find(
        Xc,
        this._config.parent
      );
      e = Be.find(
        i2,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Be.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? zr.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (le.trigger(this._element, XS).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && zr.getOrCreateInstance(u, { toggle: !1 }).hide(), r || fa.setData(u, Cp, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), Z.addClass(this._element, a), this._element.removeAttribute(Fr), this._element.setAttribute(ea, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, this._classes.hidden), Z.removeClass(this._element, a), Z.addClass(this._element, this._classes.visible), this._element.removeAttribute(ea), this._element.setAttribute(Fr, ""), this._element.setAttribute(ys, ""), this._element.style[i] = "", le.trigger(this._element, QS);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || le.trigger(this._element, ZS).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, LS(this._element), Z.addClass(this._element, r), Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ea, ""), this._element.removeAttribute(Fr), this._element.removeAttribute(ys);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Jn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, r), Z.addClass(this._element, this._classes.visible), Z.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ea), this._element.setAttribute(Fr, ""), le.trigger(this._element, e2);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(ys);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...Kc,
      ...Z.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = dl(e.parent), Ta(gs, e, JS), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...a2,
      ...r,
      ...e
    }, Ta(gs, e, o2), e;
  }
  _getDimension() {
    return this._element.hasAttribute(t2) ? r2 : n2;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Be.find(
      Xc,
      this._config.parent
    );
    Be.find(Qc, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Jn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(Jc) : n.setAttribute(`${Jc}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = zr.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let Zc = [];
const s2 = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  Zc.includes(n) || (Zc.push(n), le.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ja(this))
        return;
      const a = Jn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && t.getOrCreateInstance(a)[e]();
    }
  ));
}, vs = "alert", l2 = "te.alert", kp = `.${l2}`, u2 = `close${kp}`, c2 = `closed${kp}`, kn = "data-te-alert-show", f2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, ef = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, d2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, p2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class Pa extends Ep {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return f2;
  }
  static get Default() {
    return ef;
  }
  static get NAME() {
    return vs;
  }
  // Public
  close() {
    if (le.trigger(this._element, u2).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, Z.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(kn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(kn) && (Z.removeClass(this._element, "hidden"), Z.addClass(this._element, "block"), Ka(this._element))) {
        const e = (r) => {
          Z.removeClass(this._element, "hidden"), Z.addClass(this._element, "block"), le.off(r.target, "animationend", e);
        };
        this._element.setAttribute(kn, ""), le.on(this._element, "animationend", e);
      }
      this._config.animation && (Z.removeClass(this._element, this._classes.fadeOut), Z.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(kn)) {
      this._element.removeAttribute(kn);
      const e = (r) => {
        Z.addClass(this._element, "hidden"), Z.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), le.off(r.target, "animationend", e);
      };
      le.on(this._element, "animationend", e), Z.removeClass(this._element, this._classes.fadeIn), Z.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (s2(Pa, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...ef,
      ...Z.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, Ta(vs, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...d2,
      ...r,
      ...e
    }, Ta(vs, e, p2), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), le.trigger(this._element, c2), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = Pa.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (r[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        r[e](this);
      }
    });
  }
}
ft(), ft();
(() => {
  var t = { 454: (n, i, a) => {
    a.d(i, { Z: () => u });
    var o = a(645), s = a.n(o)()(function(c) {
      return c[1];
    });
    s.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const u = s;
  }, 645: (n) => {
    n.exports = function(i) {
      var a = [];
      return a.toString = function() {
        return this.map(function(o) {
          var s = i(o);
          return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
        }).join("");
      }, a.i = function(o, s, u) {
        typeof o == "string" && (o = [[null, o, ""]]);
        var c = {};
        if (u)
          for (var f = 0; f < this.length; f++) {
            var p = this[f][0];
            p != null && (c[p] = !0);
          }
        for (var g = 0; g < o.length; g++) {
          var v = [].concat(o[g]);
          u && c[v[0]] || (s && (v[2] ? v[2] = "".concat(s, " and ").concat(v[2]) : v[2] = s), a.push(v));
        }
      }, a;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var n = new window.CustomEvent("test", { cancelable: !0 });
          if (n.preventDefault(), n.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var i = function(a, o) {
            var s, u;
            return (o = o || {}).bubbles = !!o.bubbles, o.cancelable = !!o.cancelable, (s = document.createEvent("CustomEvent")).initCustomEvent(a, o.bubbles, o.cancelable, o.detail), u = s.preventDefault, s.preventDefault = function() {
              u.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, s;
          };
          i.prototype = window.Event.prototype, window.CustomEvent = i;
        }
    })();
  }, 379: (n, i, a) => {
    var o, s = function() {
      var _ = {};
      return function(k) {
        if (_[k] === void 0) {
          var $ = document.querySelector(k);
          if (window.HTMLIFrameElement && $ instanceof window.HTMLIFrameElement)
            try {
              $ = $.contentDocument.head;
            } catch {
              $ = null;
            }
          _[k] = $;
        }
        return _[k];
      };
    }(), u = [];
    function c(_) {
      for (var k = -1, $ = 0; $ < u.length; $++)
        if (u[$].identifier === _) {
          k = $;
          break;
        }
      return k;
    }
    function f(_, k) {
      for (var $ = {}, P = [], I = 0; I < _.length; I++) {
        var R = _[I], B = k.base ? R[0] + k.base : R[0], T = $[B] || 0, M = "".concat(B, " ").concat(T);
        $[B] = T + 1;
        var H = c(M), ee = { css: R[1], media: R[2], sourceMap: R[3] };
        H !== -1 ? (u[H].references++, u[H].updater(ee)) : u.push({ identifier: M, updater: E(ee, k), references: 1 }), P.push(M);
      }
      return P;
    }
    function p(_) {
      var k = document.createElement("style"), $ = _.attributes || {};
      if ($.nonce === void 0) {
        var P = a.nc;
        P && ($.nonce = P);
      }
      if (Object.keys($).forEach(function(R) {
        k.setAttribute(R, $[R]);
      }), typeof _.insert == "function")
        _.insert(k);
      else {
        var I = s(_.insert || "head");
        if (!I)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        I.appendChild(k);
      }
      return k;
    }
    var g, v = (g = [], function(_, k) {
      return g[_] = k, g.filter(Boolean).join(`
`);
    });
    function h(_, k, $, P) {
      var I = $ ? "" : P.media ? "@media ".concat(P.media, " {").concat(P.css, "}") : P.css;
      if (_.styleSheet)
        _.styleSheet.cssText = v(k, I);
      else {
        var R = document.createTextNode(I), B = _.childNodes;
        B[k] && _.removeChild(B[k]), B.length ? _.insertBefore(R, B[k]) : _.appendChild(R);
      }
    }
    function y(_, k, $) {
      var P = $.css, I = $.media, R = $.sourceMap;
      if (I ? _.setAttribute("media", I) : _.removeAttribute("media"), R && typeof btoa < "u" && (P += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R)))), " */")), _.styleSheet)
        _.styleSheet.cssText = P;
      else {
        for (; _.firstChild; )
          _.removeChild(_.firstChild);
        _.appendChild(document.createTextNode(P));
      }
    }
    var b = null, x = 0;
    function E(_, k) {
      var $, P, I;
      if (k.singleton) {
        var R = x++;
        $ = b || (b = p(k)), P = h.bind(null, $, R, !1), I = h.bind(null, $, R, !0);
      } else
        $ = p(k), P = y.bind(null, $, k), I = function() {
          (function(B) {
            if (B.parentNode === null)
              return !1;
            B.parentNode.removeChild(B);
          })($);
        };
      return P(_), function(B) {
        if (B) {
          if (B.css === _.css && B.media === _.media && B.sourceMap === _.sourceMap)
            return;
          P(_ = B);
        } else
          I();
      };
    }
    n.exports = function(_, k) {
      (k = k || {}).singleton || typeof k.singleton == "boolean" || (k.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var $ = f(_ = _ || [], k);
      return function(P) {
        if (P = P || [], Object.prototype.toString.call(P) === "[object Array]") {
          for (var I = 0; I < $.length; I++) {
            var R = c($[I]);
            u[R].references--;
          }
          for (var B = f(P, k), T = 0; T < $.length; T++) {
            var M = c($[T]);
            u[M].references === 0 && (u[M].updater(), u.splice(M, 1));
          }
          $ = B;
        }
      };
    };
  } }, e = {};
  function r(n) {
    var i = e[n];
    if (i !== void 0)
      return i.exports;
    var a = e[n] = { id: n, exports: {} };
    return t[n](a, a.exports, r), a.exports;
  }
  r.n = (n) => {
    var i = n && n.__esModule ? () => n.default : () => n;
    return r.d(i, { a: i }), i;
  }, r.d = (n, i) => {
    for (var a in i)
      r.o(i, a) && !r.o(n, a) && Object.defineProperty(n, a, { enumerable: !0, get: i[a] });
  }, r.o = (n, i) => Object.prototype.hasOwnProperty.call(n, i), (() => {
    var n = r(379), i = r.n(n), a = r(454);
    function o(u) {
      if (!u.hasAttribute("autocompleted")) {
        u.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        u.dispatchEvent(c) || (u.value = "");
      }
    }
    function s(u) {
      u.hasAttribute("autocompleted") && (u.removeAttribute("autocompleted"), u.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    i()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals, r(810), document.addEventListener("animationstart", function(u) {
      u.animationName === "onautofillstart" ? o(u.target) : s(u.target);
    }, !0), document.addEventListener("input", function(u) {
      u.inputType !== "insertReplacementText" && "data" in u ? s(u.target) : o(u.target);
    }, !0);
  })();
})();
ft();
ft();
DS("chips-input-");
const Ft = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, h2 = {
  line: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bar: {
    options: {
      ...Ft,
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !0,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  pie: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  doughnut: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  polarArea: {
    options: {
      ...Ft,
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  radar: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      }
    }
  },
  scatter: {
    options: {
      ...Ft,
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      tooltips: {
        intersect: !1,
        mode: "index"
      },
      datasets: {
        borderColor: "red"
      },
      scales: {
        x: {
          stacked: !0,
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          stacked: !1,
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  },
  bubble: {
    options: {
      ...Ft,
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)"
        }
      },
      responsive: !0,
      legend: {
        display: !0
      },
      scales: {
        x: {
          grid: {
            display: !1
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: !1,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2]
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)"
          }
        }
      }
    }
  }
};
var Qa = function(t) {
  this.element = t, this.handlers = {};
}, Tp = { isEmpty: { configurable: !0 } };
Qa.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Qa.prototype.unbind = function(t, e) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (r.element.removeEventListener(t, n, !1), !1);
  });
};
Qa.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Tp.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Qa.prototype, Tp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
MS("div");
const m2 = (t) => {
  FS(() => {
    const e = bp();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, g2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, y2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ja(this) && t.getOrCreateInstance(this).show();
    }
  );
}, v2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Jn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ja(this))
        return;
      le.one(n, t.EVENT_HIDDEN, () => {
        Ka(this) && this.focus();
      });
      const i = Be.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, b2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, w2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Jn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), le.one(n, t.EVENT_SHOW, (a) => {
        a.defaultPrevented || le.one(n, t.EVENT_HIDDEN, () => {
          Ka(this) && this.focus();
        });
      });
      const i = Be.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      i && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, x2 = (t, e) => {
  le.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, S2 = (t, e) => {
  le.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = yp(this);
      Be.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, O2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, _2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, A2 = (t, e) => {
  Be.find(e).forEach((r) => {
    new t(r);
  }), le.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, E2 = (t, e) => {
  const r = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", n = (a) => typeof a != "string" ? a : r(a) ? JSON.parse(a.replace(/'/g, '"')) : a, i = (a) => {
    const o = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const u = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        o[u] = n(a[s]);
      }
    }), o;
  };
  Be.find(e).forEach((a) => {
    if (Z.getDataAttribute(a, "chart") !== "bubble" && Z.getDataAttribute(a, "chart") !== "scatter") {
      const o = Z.getDataAttributes(a), s = {
        data: {
          datasets: [i(o)]
        }
      };
      return o.chart && (s.type = o.chart), o.labels && (s.data.labels = JSON.parse(o.labels.replace(/'/g, '"'))), new t(a, {
        ...s,
        ...h2[s.type]
      });
    }
    return null;
  });
};
class C2 {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(e) {
    return this.inits.includes(e);
  }
  add(e) {
    this.isInited(e) || this.inits.push(e);
  }
}
const hl = new C2(), Pn = {
  alert: {
    name: "Alert",
    selector: "[data-te-alert-init]",
    isToggler: !1
  },
  animation: {
    name: "Animate",
    selector: "[data-te-animation-init]",
    isToggler: !1
  },
  carousel: {
    name: "Carousel",
    selector: "[data-te-carousel-init]",
    isToggler: !1
  },
  chips: {
    name: "ChipsInput",
    selector: "[data-te-chips-input-init]",
    isToggler: !1
  },
  chip: {
    name: "Chip",
    selector: "[data-te-chip-init]",
    isToggler: !1,
    onInit: "init"
  },
  datepicker: {
    name: "Datepicker",
    selector: "[data-te-datepicker-init]",
    isToggler: !1
  },
  datetimepicker: {
    name: "Datetimepicker",
    selector: "[data-te-date-timepicker-init]",
    isToggler: !1
  },
  input: {
    name: "Input",
    selector: "[data-te-input-wrapper-init]",
    isToggler: !1
  },
  perfectScrollbar: {
    name: "PerfectScrollbar",
    selector: "[data-te-perfect-scrollbar-init]",
    isToggler: !1
  },
  rating: {
    name: "Rating",
    selector: "[data-te-rating-init]",
    isToggler: !1
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-te-spy='scroll']",
    isToggler: !1
  },
  select: {
    name: "Select",
    selector: "[data-te-select-init]",
    isToggler: !1
  },
  sidenav: {
    name: "Sidenav",
    selector: "[data-te-sidenav-init]",
    isToggler: !1
  },
  stepper: {
    name: "Stepper",
    selector: "[data-te-stepper-init]",
    isToggler: !1
  },
  timepicker: {
    name: "Timepicker",
    selector: "[data-te-timepicker-init]",
    isToggler: !1
  },
  toast: {
    name: "Toast",
    selector: "[data-te-toast-init]",
    isToggler: !1
  },
  datatable: {
    name: "Datatable",
    selector: "[data-te-datatable-init]"
  },
  popconfirm: {
    name: "Popconfirm",
    selector: "[data-te-toggle='popconfirm']"
  },
  validation: {
    name: "Validation",
    selector: "[data-te-validation-init]"
  },
  smoothScroll: {
    name: "SmoothScroll",
    selector: "a[data-te-smooth-scroll-init]"
  },
  lazyLoad: {
    name: "LazyLoad",
    selector: "[data-te-lazy-load-init]"
  },
  clipboard: {
    name: "Clipboard",
    selector: "[data-te-clipboard-init]"
  },
  infiniteScroll: {
    name: "InfiniteScroll",
    selector: "[data-te-infinite-scroll-init]"
  },
  loadingManagement: {
    name: "LoadingManagement",
    selector: "[data-te-loading-management-init]"
  },
  sticky: {
    name: "Sticky",
    selector: "[data-te-sticky-init]"
  },
  // advancedInits
  chart: {
    name: "Chart",
    selector: "[data-te-chart]",
    isToggler: !1,
    advanced: E2
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: b2
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: S2
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: g2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: w2
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: x2
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: v2
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: y2
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: O2
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: _2
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: A2
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, k2 = (t) => Pn[t.NAME] || null, T2 = (t, e) => {
  if (!t || !e.allowReinits && hl.isInited(t.NAME))
    return;
  hl.add(t.NAME);
  const r = k2(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (m2(t), r != null && r.advanced) {
    r == null || r.advanced(t, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(t, r == null ? void 0 : r.selector);
    return;
  }
  Be.find(r == null ? void 0 : r.selector).forEach((i) => {
    let a = t.getInstance(i);
    a || (a = new t(i), r != null && r.onInit && a[r.onInit]());
  });
}, P2 = (t, e) => {
  t.forEach((r) => T2(r, e));
}, $2 = {
  allowReinits: !1,
  checkOtherImports: !1
}, I2 = (t, e = {}) => {
  e = { ...$2, ...e };
  const r = Object.keys(Pn).map((n) => {
    if (document.querySelector(Pn[n].selector)) {
      const i = t[Pn[n].name];
      return !i && !hl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${Pn[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  P2(r, e);
}, D2 = { role: "alert" }, R2 = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, N2 = /* @__PURE__ */ C("button", {
  type: "button",
  class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
  "data-te-alert-dismiss": "",
  "aria-label": "Close"
}, [
  /* @__PURE__ */ C("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
    /* @__PURE__ */ C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: "h-6 w-6"
    }, [
      /* @__PURE__ */ C("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), $_ = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return dt(() => {
      I2({ Alert: Pa });
    }), (e, r) => (w(), O("div", D2, [
      C("div", null, [
        C("div", R2, [
          j(e.$slots, "default"),
          N2
        ])
      ])
    ]));
  }
}, L2 = ["aria-controls"], F2 = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, M2 = ["id"], B2 = {
  __name: "CollapsibleSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = ne(null), n = ne(null), i = ne(e.open);
    dt(() => {
      n.value = new zr(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (w(), O("div", {
      class: Y(["mt-2 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      C("div", {
        class: Y(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        C("div", {
          onClick: a,
          class: "focusable !block rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable"
        }, [
          ce(z(t.header) + " ", 1),
          C("button", F2, z(i.value ? "Hide" : "Show"), 1)
        ], 8, L2),
        C("div", {
          class: "!visible hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          C("div", {
            class: Y([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            j(o.$slots, "default")
          ], 2)
        ], 8, M2)
      ], 2)
    ], 2));
  }
}, j2 = { class: "relative" }, I_ = {
  __name: "Dropdown",
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(t) {
    const e = t, r = (o) => {
      a.value && o.key === "Escape" && (a.value = !1);
    };
    dt(() => document.addEventListener("keydown", r)), Xn(() => document.removeEventListener("keydown", r));
    const n = re(() => ({
      48: "w-48"
    })[e.width.toString()]), i = re(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = ne(!1);
    return (o, s) => (w(), O("div", j2, [
      C("div", {
        onClick: s[0] || (s[0] = (u) => a.value = !a.value)
      }, [
        j(o.$slots, "trigger")
      ]),
      je(C("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => a.value = !1)
      }, null, 512), [
        [Ut, a.value]
      ]),
      he(Mr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: we(() => [
          je(C("div", {
            class: Y(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (u) => a.value = !1)
          }, [
            C("div", {
              class: Y(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              j(o.$slots, "content")
            ], 2)
          ], 2), [
            [Ut, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, D_ = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (w(), ie(F(Qe), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: we(() => [
        j(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, z2 = ["href", "target"], R_ = {
  __name: "LinkButton",
  props: {
    href: String,
    colourClasses: {
      default: () => ["bg-primary", "text-white", "hover:bg-primary-700"]
    },
    target: {
      default: () => ["_self"]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    method: String,
    data: Object
  },
  setup(t) {
    const e = t, r = () => e.disabled ? [...e.colourClasses, ["opacity-50", "pointer-events-none"]] : e.colourClasses;
    return (n, i) => t.href && (t.method || t.data) ? (w(), ie(F(Qe), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: Y(["focusable gap-1 text-sm inline-flex justify-center items-center font-medium cursor-pointer select-none rounded px-2 leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: we(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (w(), O("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: Y(["focusable gap-1 text-sm inline-flex justify-center items-center font-medium cursor-pointer select-none rounded px-2 leading-normal", r()]),
      tabindex: "0"
    }, [
      j(n.$slots, "default")
    ], 10, z2));
  }
}, U2 = {
  class: "relative",
  "data-te-dropdown-ref": ""
}, V2 = {
  class: "focusable flex text-sm items-center whitespace-nowrap rounded bg-primary px-2 text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button",
  id: "dropdownMenuButton3",
  "data-te-dropdown-toggle-ref": "",
  "aria-expanded": "false",
  "data-te-ripple-init": "",
  "data-te-ripple-color": "light"
}, H2 = /* @__PURE__ */ C("span", { class: "mx-1 w-2" }, [
  /* @__PURE__ */ C("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "h-5 w-5"
  }, [
    /* @__PURE__ */ C("path", {
      "fill-rule": "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      "clip-rule": "evenodd"
    })
  ])
], -1), W2 = {
  class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
  "aria-labelledby": "dropdownMenuButton3",
  "data-te-dropdown-menu-ref": ""
}, N_ = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (w(), O("div", U2, [
      C("button", V2, [
        ce(z(t.title) + " ", 1),
        H2
      ]),
      C("ul", W2, [
        j(e.$slots, "default")
      ])
    ]));
  }
}, q2 = ["href"], L_ = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (w(), O("li", null, [
      C("a", {
        class: "focusable inline-flex justify-center items-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, z(t.title), 9, q2)
    ]));
  }
}, F_ = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (w(), ie(F(B2), { header: t.header }, {
      default: we(() => [
        he(F(lO), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, G2 = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, Y2 = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, K2 = {
  key: 0,
  class: "text-center"
}, J2 = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, X2 = { class: "flex-start w-full md:flex" }, Q2 = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, Z2 = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, eO = { class: "mb-1 flex justify-between" }, tO = { class: "text-sm text-neutral-500" }, rO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, nO = {
  key: 1,
  class: "text-sm text-primary-500"
}, iO = { class: "text-sm text-neutral-500" }, aO = { class: "font-medium" }, oO = {
  key: 0,
  class: "line-through"
}, sO = ["innerHTML"], lO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return ti.add(Sw, Ks, _w, ww, Ow), (e, r) => t.logs == null ? (w(), O("div", G2, [
      he(F(Ip))
    ])) : (w(), O("div", Y2, [
      t.logs.total ? (w(), O("ol", J2, [
        (w(!0), O(ae, null, Ze(t.logs.data, (n) => (w(), O("li", {
          key: n.id
        }, [
          C("div", X2, [
            C("div", Q2, [
              he(F(Vr), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            C("div", Z2, [
              C("div", eO, [
                C("span", tO, [
                  ce(z(n.event_formatted) + " ", 1),
                  n.reference ? (w(), O("span", rO, z(n.reference), 1)) : V("", !0),
                  n.causer ? (w(), O(ae, { key: 1 }, [
                    n.causer.id ? (w(), ie(F(Qe), {
                      key: 0,
                      href: e.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: we(() => [
                        ce("(" + z(n.causer.first_name) + ")", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (w(), O("span", nO, "(" + z(n.causer.first_name) + ")", 1))
                  ], 64)) : V("", !0)
                ]),
                C("span", iO, z(n.created_date_full), 1)
              ]),
              (w(!0), O(ae, null, Ze(n.changes_formatted, (i, a) => (w(), O("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                C("span", aO, z(a) + ":", 1),
                i.old ? (w(), O("span", oO, z(i.old), 1)) : V("", !0),
                ce(" " + z(i.new), 1)
              ]))), 128)),
              n.description_details ? (w(), O("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, sO)) : V("", !0)
            ])
          ])
        ]))), 128))
      ])) : (w(), O("p", K2, "No Data")),
      t.logs.links ? (w(), ie(F(Pp), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : V("", !0)
    ]));
  }
}, uO = {
  class: "modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0",
  "scroll-region": ""
}, cO = /* @__PURE__ */ C("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1), fO = [
  cO
], M_ = {
  __name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: !0
    },
    hideOverflow: {
      type: Boolean,
      default: !0
    },
    backdropDuration: {
      type: Number,
      default: 200
    },
    modalDuration: {
      type: Number,
      default: 200
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const r = t, n = e;
    $a(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const i = () => {
      r.closeable && n("close");
    }, a = (s) => {
      s.key === "Escape" && r.show && i();
    };
    dt(() => document.addEventListener("keydown", a)), Xn(() => {
      document.removeEventListener("keydown", a), document.body.style.overflow = null;
    });
    const o = re(() => {
      let s = [];
      return s.push(
        {
          sm: "sm:max-w-sm",
          md: "sm:max-w-md",
          lg: "sm:max-w-lg",
          xl: "sm:max-w-xl",
          "2xl": "sm:max-w-2xl",
          "3xl": "sm:max-w-3xl",
          "4xl": "sm:max-w-4xl",
          "5xl": "sm:max-w-5xl",
          "6xl": "sm:max-w-6xl",
          "7xl": "sm:max-w-7xl"
        }[r.maxWidth]
      ), r.hideOverflow && s.push("overflow-hidden"), s.join(" ");
    });
    return (s, u) => (w(), ie(jp, { to: "body" }, [
      he(Mr, { "leave-active-class": "duration-200" }, {
        default: we(() => [
          je(C("div", uO, [
            he(Mr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: we(() => [
                je(C("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, fO, 512), [
                  [Ut, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            he(Mr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: we(() => [
                je(C("div", {
                  class: Y(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value])
                }, [
                  t.show ? j(s.$slots, "default", { key: 0 }) : V("", !0)
                ], 2), [
                  [Ut, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 512), [
            [Ut, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, dO = { class: "ml-3 flex-1 whitespace-nowrap" }, B_ = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = re(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (w(), ie(F(Qe), {
      href: t.href,
      class: Y(r.value)
    }, {
      default: we(() => [
        j(n.$slots, "icon"),
        C("span", dO, [
          j(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, pO = {
  key: 0,
  class: "flex justify-center"
}, hO = { "aria-label": "Page navigation" }, mO = { class: "list-style-none flex" }, gO = ["innerHTML"], yO = ["innerHTML", "onClick"], Pp = {
  __name: "Pagination",
  props: {
    links: Array,
    linkReturn: {
      type: Boolean,
      default: !1
    },
    maxPagesToShow: {
      type: Number,
      default: 20
    },
    logs: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = e, n = t, i = re(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const o = n.links[0], s = n.links[n.links.length - 1], u = n.links.findIndex((p) => p.active);
      let c = Math.max(1, u - Math.floor(n.maxPagesToShow / 2)), f = Math.min(
        n.links.length - 2,
        c + n.maxPagesToShow - 1
      );
      return f - c < n.maxPagesToShow - 1 && (c = Math.max(1, f - n.maxPagesToShow + 1)), [o, ...n.links.slice(c, f + 1), s];
    }), a = (o) => {
      r("change", o);
    };
    return (o, s) => i.value.length > 3 ? (w(), O("div", pO, [
      C("nav", hO, [
        C("ul", mO, [
          (w(!0), O(ae, null, Ze(i.value, (u, c) => (w(), O("li", { key: c }, [
            t.linkReturn ? (w(), O(ae, { key: 0 }, [
              u.url === null ? (w(), O("button", {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                onClick: s[0] || (s[0] = (f) => a(""))
              }, null, 8, gO)) : (w(), O("button", {
                key: 1,
                class: Y(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
                innerHTML: u.label,
                onClick: (f) => a(u.url)
              }, null, 10, yO))
            ], 64)) : (w(), O(ae, { key: 1 }, [
              u.url === null ? (w(), ie(F(Qe), {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                href: ""
              }, null, 8, ["innerHTML"])) : (w(), ie(F(Qe), {
                key: 1,
                class: Y(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
                href: u.url,
                innerHTML: u.label,
                preserveScroll: t.logs,
                preserveState: t.logs,
                only: t.logs ? ["logs"] : []
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ])
      ])
    ])) : V("", !0);
  }
}, vO = ["type", "disabled"], $p = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (w(), O("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      j(e.$slots, "default")
    ], 8, vO));
  }
}, bO = ["type"], j_ = {
  __name: "DangerButton",
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(t) {
    return (e, r) => (w(), O("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700"
    }, [
      j(e.$slots, "default")
    ], 8, bO));
  }
}, z_ = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = re(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (w(), ie(F(Qe), {
      href: t.href,
      class: Y(r.value)
    }, {
      default: we(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, wO = ["type"], U_ = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (w(), O("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      j(e.$slots, "default")
    ], 8, wO));
  }
}, xO = {
  key: 0,
  class: "relative mb-2 rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, SO = {
  key: 0,
  class: "absolute right-0 top-0 mt-1 mr-2"
}, V_ = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !0,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (w(), O("div", {
      class: Y(["rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      C("div", {
        class: Y(["sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (w(), O("div", xO, [
          C("span", null, z(t.header), 1),
          e.$slots.headerButton ? (w(), O("div", SO, [
            j(e.$slots, "headerButton")
          ])) : V("", !0)
        ])) : V("", !0),
        C("div", {
          class: Y({ "px-4 pb-2": t.header })
        }, [
          j(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, OO = {}, _O = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, AO = /* @__PURE__ */ C("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), EO = [
  AO
];
function CO(t, e) {
  return w(), O("div", _O, EO);
}
const Ip = /* @__PURE__ */ pr(OO, [["render", CO]]), kO = { class: "flex flex-wrap gap-2 lg:flex-nowrap" }, TO = ["onClick"], PO = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, $O = { class: "font-medium text-xl leading-tight text-neutral-800" }, IO = { class: "flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" }, H_ = {
  __name: "Stats",
  props: {
    stats: Object,
    statusName: {
      type: String,
      default: null
    }
  },
  setup(t, { emit: e }) {
    const r = e, n = t, i = (o) => {
      a(o) && (o = null), r("updateSearch", o);
    }, a = (o) => n.statusName != null ? route().params[n.statusName] == o : route().params.status == o;
    return (o, s) => (w(), O("div", null, [
      C("div", kO, [
        (w(!0), O(ae, null, Ze(t.stats, (u) => (w(), O("div", {
          class: Y(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(u.name)
          }]),
          onClick: (c) => i(u.name),
          key: u.value
        }, [
          C("div", null, [
            C("div", PO, [
              C("h5", $O, z(u.value), 1)
            ])
          ]),
          C("div", IO, z(u.label ?? u.name), 1)
        ], 10, TO))), 128))
      ])
    ]));
  }
}, W_ = {
  __name: "Select2ajax",
  props: {
    id: {
      type: String,
      required: !0
    },
    label: {
      type: String
    },
    optionValue: {
      type: String,
      default: "value"
    },
    optionText: {
      type: String,
      default: "label"
    },
    optionDisabled: {
      type: String,
      default: "disabled"
    },
    placeholder: {
      type: String
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noForm: {
      type: Boolean,
      default: !1
    },
    // ajax specific props
    url: {
      type: String,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = ne([]), a = ne(1), o = ne(!0), s = ne(0), u = ne(""), c = (p) => {
      a.value = 1, s.value = 0, u.value = p, f();
    }, f = async (p = !1) => {
      var y;
      const g = new URLSearchParams();
      if (g.append("term", u.value), g.append("page", a.value), p) {
        const b = ((y = r.form) == null ? void 0 : y[r.field]) || r.modelValue;
        b && g.append("ajax_id", b);
      }
      const h = await (await fetch(`${r.url}?${g.toString()}`)).json();
      if (o.value = h.current_page < h.last_page, a.value === 1) {
        i.value = h.data;
        return;
      }
      i.value = i.value.concat(h.data);
    };
    return dt(() => {
      f(!0);
      const p = document.getElementById(r.id).parentNode.querySelector(".menu");
      p == null || p.addEventListener(
        "scroll",
        (g) => {
          g.target.scrollTop > s.value && g.target.scrollTop + g.target.clientHeight >= g.target.scrollHeight && o.value && (a.value++, f());
        },
        {
          passive: !0
        }
      );
    }), (p, g) => (w(), ie(F(Kg), {
      id: t.id,
      label: t.label,
      list: i.value,
      optionValue: t.optionValue,
      optionText: t.optionText,
      optionDisabled: t.optionDisabled,
      placeholder: t.placeholder,
      field: t.field,
      form: t.form,
      modelValue: t.modelValue,
      noLabel: t.noLabel,
      disabled: t.disabled,
      noForm: t.noForm,
      "onUpdate:modelValue": g[0] || (g[0] = (v) => n("update:modelValue", v)),
      onSearchchange: c
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm"]));
  }
};
const DO = (t) => (zp("data-v-c909f1b6"), t = t(), Up(), t), RO = ["id", "aria-controls"], NO = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, LO = /* @__PURE__ */ DO(() => /* @__PURE__ */ C("svg", {
  class: "h-3 w-3 transform",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ C("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 4 4 4-4"
  })
], -1)), FO = ["id"], MO = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(t) {
    const e = t, r = ne(null), n = ne(null), i = ne(e.show);
    dt(() => {
      n.value = new zr(r.value, {
        toggle: e.show
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (w(), O("li", null, [
      C("button", {
        id: t.name,
        onClick: a,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": t.name ? t.name.replaceAll(" ", "_") : "collapsable"
      }, [
        j(o.$slots, "icon", {}, void 0, !0),
        C("span", NO, z(t.name), 1),
        LO
      ], 8, RO),
      C("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: t.name ? t.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        j(o.$slots, "default", {}, void 0, !0)
      ], 8, FO)
    ]));
  }
}, q_ = /* @__PURE__ */ pr(MO, [["__scopeId", "data-v-c909f1b6"]]), BO = {}, jO = { class: "border-t border-gray-100" }, zO = { class: "divide-y divide-gray-100" };
function UO(t, e) {
  return w(), O("div", jO, [
    C("dl", zO, [
      j(t.$slots, "default")
    ])
  ]);
}
const G_ = /* @__PURE__ */ pr(BO, [["render", UO]]), VO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, HO = { class: "flex items-center text-sm font-medium" }, WO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, qO = { class: "flex min-h-full items-center" }, GO = { class: "flex-grow" }, YO = {
  key: 0,
  class: "ml-4 flex-shrink-0"
}, KO = { class: "flex-grow" }, JO = { class: "ml-4 flex-shrink-0" }, Y_ = {
  __name: "DescriptionListItem",
  props: {
    editable: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String
    }
  },
  setup(t) {
    ti.add(Ks, kc);
    const e = t, r = ne(!1), n = () => {
      e.editable && (r.value = !r.value);
    };
    return (i, a) => (w(), O("div", VO, [
      C("dt", HO, [
        ce(z(t.label) + " ", 1),
        j(i.$slots, "label")
      ]),
      C("dd", WO, [
        C("div", qO, [
          r.value ? (w(), O(ae, { key: 1 }, [
            C("div", KO, [
              j(i.$slots, "edit")
            ]),
            C("span", JO, [
              C("button", {
                type: "button",
                onClick: n,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                he(F(Vr), { icon: F(kc) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (w(), O(ae, { key: 0 }, [
            C("div", GO, [
              j(i.$slots, "default"),
              ce(" " + z(t.value), 1)
            ]),
            t.editable ? (w(), O("span", YO, [
              C("button", {
                type: "button",
                onClick: n,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                he(F(Vr), { icon: F(Ks) }, null, 8, ["icon"])
              ])
            ])) : V("", !0)
          ], 64))
        ])
      ])
    ]));
  }
}, K_ = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  $_ as Alert,
  QO as Checkbox,
  B2 as CollapsibleSection,
  j_ as DangerButton,
  G_ as DescriptionList,
  Y_ as DescriptionListItem,
  I_ as Dropdown,
  D_ as DropdownLink,
  t_ as DropdownSearchbar,
  a_ as FileDropZoneInput,
  o_ as Images,
  ZO as Input,
  ri as InputError,
  Pl as InputLabel,
  R_ as LinkButton,
  N_ as LinkDropdownButton,
  L_ as LinkDropdownButtonItem,
  F_ as Logs,
  lO as LogsContent,
  M_ as Modal,
  q_ as NavCollapse,
  B_ as NavLink,
  Pp as Pagination,
  $p as PrimaryButton,
  s_ as RadioButton,
  z_ as ResponsiveNavLink,
  Kg as SearchSelect,
  U_ as SecondaryButton,
  V_ as Section,
  W_ as Select2ajax,
  Ip as Spinner,
  H_ as Stats,
  dw as SubmitButton,
  l_ as Table,
  P_ as TableItemCard,
  f_ as Td,
  Qm as TextInput,
  e_ as Textarea,
  c_ as Th,
  u_ as Thead,
  p_ as TrCollapse,
  d_ as TrCollapseHandler,
  K_ as default,
  Ua as getInertiaRouter,
  n_ as hasPermission,
  c1 as moneyFormat,
  r_ as numberFormat,
  i_ as setInertiaRouter
};
