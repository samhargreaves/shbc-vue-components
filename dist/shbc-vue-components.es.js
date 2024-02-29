import { computed as re, withDirectives as je, openBlock as x, createElementBlock as E, vModelCheckbox as Zc, defineComponent as dr, watch as Ta, h as jt, createBlock as se, unref as B, createCommentVNode as z, createElementVNode as P, normalizeClass as K, createTextVNode as pe, toDisplayString as U, renderSlot as H, vModelSelect as $p, Fragment as ce, createVNode as ge, withCtx as Ae, vShow as zt, ref as be, onMounted as Wt, vModelText as Ip, resolveDirective as Dp, normalizeProps as Ve, guardReactiveProps as Ke, renderList as Qe, resolveDynamicComponent as jo, mergeProps as Ln, toHandlers as Rp, Transition as Fr, withModifiers as Mt, withKeys as kr, normalizeStyle as Qi, shallowRef as Np, markRaw as tu, reactive as pl, onUnmounted as Kn, toRefs as Lp, nextTick as Fp, Teleport as Mp } from "vue";
const Bp = ["value"], _O = {
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
    return (a, o) => je((x(), E("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: "rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500"
    }, null, 8, Bp)), [
      [Zc, i.value]
    ]);
  }
};
function ru(t, e) {
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
    e % 2 ? ru(Object(r), !0).forEach(function(n) {
      we(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ua(t) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ua(t);
}
function jp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function zp(t, e, r) {
  return e && nu(t.prototype, e), r && nu(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function we(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function hl(t, e) {
  return Vp(t) || Wp(t, e) || ef(t, e) || Gp();
}
function Jn(t) {
  return Up(t) || Hp(t) || ef(t) || qp();
}
function Up(t) {
  if (Array.isArray(t))
    return vs(t);
}
function Vp(t) {
  if (Array.isArray(t))
    return t;
}
function Hp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Wp(t, e) {
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
function ef(t, e) {
  if (t) {
    if (typeof t == "string")
      return vs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vs(t, e);
  }
}
function vs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function qp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var iu = function() {
}, ml = {}, tf = {}, rf = null, nf = {
  mark: iu,
  measure: iu
};
try {
  typeof window < "u" && (ml = window), typeof document < "u" && (tf = document), typeof MutationObserver < "u" && (rf = MutationObserver), typeof performance < "u" && (nf = performance);
} catch {
}
var Yp = ml.navigator || {}, au = Yp.userAgent, ou = au === void 0 ? "" : au, Ut = ml, oe = tf, su = rf, ki = nf;
Ut.document;
var _t = !!oe.documentElement && !!oe.head && typeof oe.addEventListener == "function" && typeof oe.createElement == "function", af = ~ou.indexOf("MSIE") || ~ou.indexOf("Trident/"), Ti, Pi, $i, Ii, Di, St = "___FONT_AWESOME___", bs = 16, of = "fa", sf = "svg-inline--fa", cr = "data-fa-i2svg", ws = "data-fa-pseudo-element", Kp = "data-fa-pseudo-element-pending", gl = "data-prefix", yl = "data-icon", lu = "fontawesome-i2svg", Jp = "async", Xp = ["HTML", "HEAD", "STYLE", "SCRIPT"], lf = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), ie = "classic", fe = "sharp", vl = [ie, fe];
function Xn(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[ie];
    }
  });
}
var Fn = Xn((Ti = {}, we(Ti, ie, {
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
}), we(Ti, fe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ti)), Mn = Xn((Pi = {}, we(Pi, ie, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), we(Pi, fe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Pi)), Bn = Xn(($i = {}, we($i, ie, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), we($i, fe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), $i)), Qp = Xn((Ii = {}, we(Ii, ie, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), we(Ii, fe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ii)), Zp = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, uf = "fa-layers-text", eh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, th = Xn((Di = {}, we(Di, ie, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), we(Di, fe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Di)), cf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], rh = cf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), nh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ar = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jn = /* @__PURE__ */ new Set();
Object.keys(Mn[ie]).map(jn.add.bind(jn));
Object.keys(Mn[fe]).map(jn.add.bind(jn));
var ih = [].concat(vl, Jn(jn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ar.GROUP, ar.SWAP_OPACITY, ar.PRIMARY, ar.SECONDARY]).concat(cf.map(function(t) {
  return "".concat(t, "x");
})).concat(rh.map(function(t) {
  return "w-".concat(t);
})), kn = Ut.FontAwesomeConfig || {};
function ah(t) {
  var e = oe.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function oh(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (oe && typeof oe.querySelector == "function") {
  var sh = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  sh.forEach(function(t) {
    var e = hl(t, 2), r = e[0], n = e[1], i = oh(ah(r));
    i != null && (kn[n] = i);
  });
}
var ff = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: of,
  replacementClass: sf,
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
kn.familyPrefix && (kn.cssPrefix = kn.familyPrefix);
var jr = D(D({}, ff), kn);
jr.autoReplaceSvg || (jr.observeMutations = !1);
var N = {};
Object.keys(ff).forEach(function(t) {
  Object.defineProperty(N, t, {
    enumerable: !0,
    set: function(r) {
      jr[t] = r, Tn.forEach(function(n) {
        return n(N);
      });
    },
    get: function() {
      return jr[t];
    }
  });
});
Object.defineProperty(N, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    jr.cssPrefix = e, Tn.forEach(function(r) {
      return r(N);
    });
  },
  get: function() {
    return jr.cssPrefix;
  }
});
Ut.FontAwesomeConfig = N;
var Tn = [];
function lh(t) {
  return Tn.push(t), function() {
    Tn.splice(Tn.indexOf(t), 1);
  };
}
var Rt = bs, st = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function uh(t) {
  if (!(!t || !_t)) {
    var e = oe.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = oe.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
    }
    return oe.head.insertBefore(e, n), t;
  }
}
var ch = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function zn() {
  for (var t = 12, e = ""; t-- > 0; )
    e += ch[Math.random() * 62 | 0];
  return e;
}
function Kr(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function bl(t) {
  return t.classList ? Kr(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function df(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fh(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(df(t[r]), '" ');
  }, "").trim();
}
function Pa(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function wl(t) {
  return t.size !== st.size || t.x !== st.x || t.y !== st.y || t.rotate !== st.rotate || t.flipX || t.flipY;
}
function dh(t) {
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
function ph(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? bs : r, i = t.height, a = i === void 0 ? bs : i, o = t.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && af ? u += "translate(".concat(e.x / Rt - n / 2, "em, ").concat(e.y / Rt - a / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(e.x / Rt, "em), calc(-50% + ").concat(e.y / Rt, "em)) ") : u += "translate(".concat(e.x / Rt, "em, ").concat(e.y / Rt, "em) "), u += "scale(".concat(e.size / Rt * (e.flipX ? -1 : 1), ", ").concat(e.size / Rt * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var hh = `:root, :host {
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
function pf() {
  var t = of, e = sf, r = N.cssPrefix, n = N.replacementClass, i = hh;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
var uu = !1;
function zo() {
  N.autoAddCss && !uu && (uh(pf()), uu = !0);
}
var mh = {
  mixout: function() {
    return {
      dom: {
        css: pf,
        insertCss: zo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        zo();
      },
      beforeI2svg: function() {
        zo();
      }
    };
  }
}, Ot = Ut || {};
Ot[St] || (Ot[St] = {});
Ot[St].styles || (Ot[St].styles = {});
Ot[St].hooks || (Ot[St].hooks = {});
Ot[St].shims || (Ot[St].shims = []);
var Xe = Ot[St], hf = [], gh = function t() {
  oe.removeEventListener("DOMContentLoaded", t), ca = 1, hf.map(function(e) {
    return e();
  });
}, ca = !1;
_t && (ca = (oe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(oe.readyState), ca || oe.addEventListener("DOMContentLoaded", gh));
function yh(t) {
  _t && (ca ? setTimeout(t, 0) : hf.push(t));
}
function Qn(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? df(t) : "<".concat(e, " ").concat(fh(n), ">").concat(a.map(Qn).join(""), "</").concat(e, ">");
}
function cu(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var vh = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Uo = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? vh(r, i) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, e[c], c, e);
  return f;
};
function bh(t) {
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
function xs(t) {
  var e = bh(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function wh(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function fu(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Ss(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = fu(e);
  typeof Xe.hooks.addPack == "function" && !i ? Xe.hooks.addPack(t, fu(e)) : Xe.styles[t] = D(D({}, Xe.styles[t] || {}), a), t === "fas" && Ss("fa", e);
}
var Ri, Ni, Li, Rr = Xe.styles, xh = Xe.shims, Sh = (Ri = {}, we(Ri, ie, Object.values(Bn[ie])), we(Ri, fe, Object.values(Bn[fe])), Ri), xl = null, mf = {}, gf = {}, yf = {}, vf = {}, bf = {}, Oh = (Ni = {}, we(Ni, ie, Object.keys(Fn[ie])), we(Ni, fe, Object.keys(Fn[fe])), Ni);
function Ah(t) {
  return ~ih.indexOf(t);
}
function Eh(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !Ah(i) ? i : null;
}
var wf = function() {
  var e = function(a) {
    return Uo(Rr, function(o, s, u) {
      return o[u] = Uo(s, a, {}), o;
    }, {});
  };
  mf = e(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  }), gf = e(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        i[u] = o;
      });
    }
    return i;
  }), bf = e(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(u) {
      i[u] = o;
    }), i;
  });
  var r = "far" in Rr || N.autoFetchSvg, n = Uo(xh, function(i, a) {
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
  yf = n.names, vf = n.unicodes, xl = $a(N.styleDefault, {
    family: N.familyDefault
  });
};
lh(function(t) {
  xl = $a(t.styleDefault, {
    family: N.familyDefault
  });
});
wf();
function Sl(t, e) {
  return (mf[t] || {})[e];
}
function _h(t, e) {
  return (gf[t] || {})[e];
}
function or(t, e) {
  return (bf[t] || {})[e];
}
function xf(t) {
  return yf[t] || {
    prefix: null,
    iconName: null
  };
}
function Ch(t) {
  var e = vf[t], r = Sl("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Vt() {
  return xl;
}
var Ol = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function $a(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? ie : r, i = Fn[n][t], a = Mn[n][t] || Mn[n][i], o = t in Xe.styles ? t : null;
  return a || o || null;
}
var du = (Li = {}, we(Li, ie, Object.keys(Bn[ie])), we(Li, fe, Object.keys(Bn[fe])), Li);
function Ia(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, we(e, ie, "".concat(N.cssPrefix, "-").concat(ie)), we(e, fe, "".concat(N.cssPrefix, "-").concat(fe)), e), o = null, s = ie;
  (t.includes(a[ie]) || t.some(function(c) {
    return du[ie].includes(c);
  })) && (s = ie), (t.includes(a[fe]) || t.some(function(c) {
    return du[fe].includes(c);
  })) && (s = fe);
  var u = t.reduce(function(c, f) {
    var p = Eh(N.cssPrefix, f);
    if (Rr[f] ? (f = Sh[s].includes(f) ? Qp[s][f] : f, o = f, c.prefix = f) : Oh[s].indexOf(f) > -1 ? (o = f, c.prefix = $a(f, {
      family: s
    })) : p ? c.iconName = p : f !== N.replacementClass && f !== a[ie] && f !== a[fe] && c.rest.push(f), !i && c.prefix && c.iconName) {
      var g = o === "fa" ? xf(c.iconName) : {}, v = or(c.prefix, c.iconName);
      g.prefix && (o = null), c.iconName = g.iconName || v || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Rr.far && Rr.fas && !N.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Ol());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === fe && (Rr.fass || N.autoFetchSvg) && (u.prefix = "fass", u.iconName = or(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = Vt() || "fas"), u;
}
var kh = /* @__PURE__ */ function() {
  function t() {
    jp(this, t), this.definitions = {};
  }
  return zp(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = D(D({}, r.definitions[s] || {}), o[s]), Ss(s, o[s]);
        var u = Bn[ie][s];
        u && Ss(u, o[s]), wf();
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
}(), pu = [], Nr = {}, Mr = {}, Th = Object.keys(Mr);
function Ph(t, e) {
  var r = e.mixoutsTo;
  return pu = t, Nr = {}, Object.keys(Mr).forEach(function(n) {
    Th.indexOf(n) === -1 && delete Mr[n];
  }), pu.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (r[o] = i[o]), ua(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = i[o][s];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(o) {
        Nr[o] || (Nr[o] = []), Nr[o].push(a[o]);
      });
    }
    n.provides && n.provides(Mr);
  }), r;
}
function Os(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = Nr[t] || [];
  return a.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function fr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = Nr[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function At() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Mr[t] ? Mr[t].apply(null, e) : void 0;
}
function As(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || Vt();
  if (e)
    return e = or(r, e) || e, cu(Sf.definitions, r, e) || cu(Xe.styles, r, e);
}
var Sf = new kh(), $h = function() {
  N.autoReplaceSvg = !1, N.observeMutations = !1, fr("noAuto");
}, Ih = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return _t ? (fr("beforeI2svg", e), At("pseudoElements2svg", e), At("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0), N.observeMutations = !0, yh(function() {
      Rh({
        autoReplaceSvgRoot: r
      }), fr("watch", e);
    });
  }
}, Dh = {
  icon: function(e) {
    if (e === null)
      return null;
    if (ua(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: or(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = $a(e[0]);
      return {
        prefix: n,
        iconName: or(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(N.cssPrefix, "-")) > -1 || e.match(Zp))) {
      var i = Ia(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || Vt(),
        iconName: or(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = Vt();
      return {
        prefix: a,
        iconName: or(a, e) || e
      };
    }
  }
}, ze = {
  noAuto: $h,
  config: N,
  dom: Ih,
  parse: Dh,
  library: Sf,
  findIconDefinition: As,
  toHtml: Qn
}, Rh = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? oe : r;
  (Object.keys(Xe.styles).length > 0 || N.autoFetchSvg) && _t && N.autoReplaceSvg && ze.dom.i2svg({
    node: n
  });
};
function Da(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return Qn(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (_t) {
        var n = oe.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Nh(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, o = t.transform;
  if (wl(o) && r.found && !n.found) {
    var s = r.width, u = r.height, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Pa(D(D({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Lh(t) {
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
function Al(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, o = t.transform, s = t.symbol, u = t.title, c = t.maskId, f = t.titleId, p = t.extra, g = t.watchable, v = g === void 0 ? !1 : g, h = n.found ? n : r, y = h.width, b = h.height, w = i === "fak", _ = [N.replacementClass, a ? "".concat(N.cssPrefix, "-").concat(a) : ""].filter(function(M) {
    return p.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(p.classes).join(" "), O = {
    children: [],
    attributes: D(D({}, p.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: _,
      role: p.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(b)
    })
  }, C = w && !~p.classes.indexOf("fa-fw") ? {
    width: "".concat(y / b * 16 * 0.0625, "em")
  } : {};
  v && (O.attributes[cr] = ""), u && (O.children.push({
    tag: "title",
    attributes: {
      id: O.attributes["aria-labelledby"] || "title-".concat(f || zn())
    },
    children: [u]
  }), delete O.attributes.title);
  var $ = D(D({}, O), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: D(D({}, C), p.styles)
  }), T = n.found && r.found ? At("generateAbstractMask", $) || {
    children: [],
    attributes: {}
  } : At("generateAbstractIcon", $) || {
    children: [],
    attributes: {}
  }, I = T.children, R = T.attributes;
  return $.children = I, $.attributes = R, s ? Lh($) : Nh($);
}
function hu(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, o = t.extra, s = t.watchable, u = s === void 0 ? !1 : s, c = D(D(D({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[cr] = "");
  var f = D({}, o.styles);
  wl(i) && (f.transform = ph({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var p = Pa(f);
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
function Fh(t) {
  var e = t.content, r = t.title, n = t.extra, i = D(D(D({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Pa(n.styles);
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
var Vo = Xe.styles;
function Es(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = hl(n, 1), a = i[0], o = null;
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
var Mh = {
  found: !1,
  width: 512,
  height: 512
};
function Bh(t, e) {
  !lf && !N.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function _s(t, e) {
  var r = e;
  return e === "fa" && N.styleDefault !== null && (e = Vt()), new Promise(function(n, i) {
    if (At("missingIconAbstract"), r === "fa") {
      var a = xf(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Vo[e] && Vo[e][t]) {
      var o = Vo[e][t];
      return n(Es(o));
    }
    Bh(t, e), n(D(D({}, Mh), {}, {
      icon: N.showMissingIcons && t ? At("missingIconAbstract") || {} : {}
    }));
  });
}
var mu = function() {
}, Cs = N.measurePerformance && ki && ki.mark && ki.measure ? ki : {
  mark: mu,
  measure: mu
}, _n = 'FA "6.5.1"', jh = function(e) {
  return Cs.mark("".concat(_n, " ").concat(e, " begins")), function() {
    return Of(e);
  };
}, Of = function(e) {
  Cs.mark("".concat(_n, " ").concat(e, " ends")), Cs.measure("".concat(_n, " ").concat(e), "".concat(_n, " ").concat(e, " begins"), "".concat(_n, " ").concat(e, " ends"));
}, El = {
  begin: jh,
  end: Of
}, Zi = function() {
};
function gu(t) {
  var e = t.getAttribute ? t.getAttribute(cr) : null;
  return typeof e == "string";
}
function zh(t) {
  var e = t.getAttribute ? t.getAttribute(gl) : null, r = t.getAttribute ? t.getAttribute(yl) : null;
  return e && r;
}
function Uh(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(N.replacementClass);
}
function Vh() {
  if (N.autoReplaceSvg === !0)
    return ea.replace;
  var t = ea[N.autoReplaceSvg];
  return t || ea.replace;
}
function Hh(t) {
  return oe.createElementNS("http://www.w3.org/2000/svg", t);
}
function Wh(t) {
  return oe.createElement(t);
}
function Af(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? Hh : Wh : r;
  if (typeof t == "string")
    return oe.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    i.setAttribute(o, t.attributes[o]);
  });
  var a = t.children || [];
  return a.forEach(function(o) {
    i.appendChild(Af(o, {
      ceFn: n
    }));
  }), i;
}
function qh(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var ea = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Af(i), r);
      }), r.getAttribute(cr) === null && N.keepOriginalSource) {
        var n = oe.createComment(qh(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~bl(r).indexOf(N.replacementClass))
      return ea.replace(e);
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
      return Qn(s);
    }).join(`
`);
    r.setAttribute(cr, ""), r.innerHTML = o;
  }
};
function yu(t) {
  t();
}
function Ef(t, e) {
  var r = typeof e == "function" ? e : Zi;
  if (t.length === 0)
    r();
  else {
    var n = yu;
    N.mutateApproach === Jp && (n = Ut.requestAnimationFrame || yu), n(function() {
      var i = Vh(), a = El.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var _l = !1;
function _f() {
  _l = !0;
}
function ks() {
  _l = !1;
}
var fa = null;
function vu(t) {
  if (su && N.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? Zi : e, n = t.nodeCallback, i = n === void 0 ? Zi : n, a = t.pseudoElementsCallback, o = a === void 0 ? Zi : a, s = t.observeMutationsRoot, u = s === void 0 ? oe : s;
    fa = new su(function(c) {
      if (!_l) {
        var f = Vt();
        Kr(c).forEach(function(p) {
          if (p.type === "childList" && p.addedNodes.length > 0 && !gu(p.addedNodes[0]) && (N.searchPseudoElements && o(p.target), r(p.target)), p.type === "attributes" && p.target.parentNode && N.searchPseudoElements && o(p.target.parentNode), p.type === "attributes" && gu(p.target) && ~nh.indexOf(p.attributeName))
            if (p.attributeName === "class" && zh(p.target)) {
              var g = Ia(bl(p.target)), v = g.prefix, h = g.iconName;
              p.target.setAttribute(gl, v || f), h && p.target.setAttribute(yl, h);
            } else
              Uh(p.target) && i(p.target);
        });
      }
    }), _t && fa.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Gh() {
  fa && fa.disconnect();
}
function Yh(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Kh(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Ia(bl(t));
  return i.prefix || (i.prefix = Vt()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = _h(i.prefix, t.innerText) || Sl(i.prefix, xs(t.innerText))), !i.iconName && N.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function Jh(t) {
  var e = Kr(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return N.autoA11y && (r ? e["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(n || zn()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function Xh() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: st,
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
function bu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = Kh(t), n = r.iconName, i = r.prefix, a = r.rest, o = Jh(t), s = Os("parseNodeAttributes", {}, t), u = e.styleParser ? Yh(t) : [];
  return D({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: st,
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
var Qh = Xe.styles;
function Cf(t) {
  var e = N.autoReplaceSvg === "nest" ? bu(t, {
    styleParser: !1
  }) : bu(t);
  return ~e.extra.classes.indexOf(uf) ? At("generateLayersText", t, e) : At("generateSvgReplacementMutation", t, e);
}
var Ht = /* @__PURE__ */ new Set();
vl.map(function(t) {
  Ht.add("fa-".concat(t));
});
Object.keys(Fn[ie]).map(Ht.add.bind(Ht));
Object.keys(Fn[fe]).map(Ht.add.bind(Ht));
Ht = Jn(Ht);
function wu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!_t)
    return Promise.resolve();
  var r = oe.documentElement.classList, n = function(p) {
    return r.add("".concat(lu, "-").concat(p));
  }, i = function(p) {
    return r.remove("".concat(lu, "-").concat(p));
  }, a = N.autoFetchSvg ? Ht : vl.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(Qh));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(uf, ":not([").concat(cr, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(cr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Kr(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = El.begin("onTree"), c = s.reduce(function(f, p) {
    try {
      var g = Cf(p);
      g && f.push(g);
    } catch (v) {
      lf || v.name === "MissingIcon" && console.error(v);
    }
    return f;
  }, []);
  return new Promise(function(f, p) {
    Promise.all(c).then(function(g) {
      Ef(g, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), f();
      });
    }).catch(function(g) {
      u(), p(g);
    });
  });
}
function Zh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Cf(t).then(function(r) {
    r && Ef([r], e);
  });
}
function em(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : As(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : As(i || {})), t(n, D(D({}, r), {}, {
      mask: i
    }));
  };
}
var tm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? st : n, a = r.symbol, o = a === void 0 ? !1 : a, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, p = r.title, g = p === void 0 ? null : p, v = r.titleId, h = v === void 0 ? null : v, y = r.classes, b = y === void 0 ? [] : y, w = r.attributes, _ = w === void 0 ? {} : w, O = r.styles, C = O === void 0 ? {} : O;
  if (e) {
    var $ = e.prefix, T = e.iconName, I = e.icon;
    return Da(D({
      type: "icon"
    }, e), function() {
      return fr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), N.autoA11y && (g ? _["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(h || zn()) : (_["aria-hidden"] = "true", _.focusable = "false")), Al({
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
        iconName: T,
        transform: D(D({}, st), i),
        symbol: o,
        title: g,
        maskId: f,
        titleId: h,
        extra: {
          attributes: _,
          styles: C,
          classes: b
        }
      });
    });
  }
}, rm = {
  mixout: function() {
    return {
      icon: em(tm)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = wu, r.nodeCallback = Zh, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? oe : n, a = r.callback, o = a === void 0 ? function() {
      } : a;
      return wu(i, o);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, o = n.titleId, s = n.prefix, u = n.transform, c = n.symbol, f = n.mask, p = n.maskId, g = n.extra;
      return new Promise(function(v, h) {
        Promise.all([_s(i, s), f.iconName ? _s(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(y) {
          var b = hl(y, 2), w = b[0], _ = b[1];
          v([r, Al({
            icons: {
              main: w,
              mask: _
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
      var n = r.children, i = r.attributes, a = r.main, o = r.transform, s = r.styles, u = Pa(s);
      u.length > 0 && (i.style = u);
      var c;
      return wl(o) && (c = At("generateAbstractTransformGrouping", {
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
}, nm = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Da({
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
              class: ["".concat(N.cssPrefix, "-layers")].concat(Jn(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, im = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, p = f === void 0 ? {} : f;
        return Da({
          type: "counter",
          content: r
        }, function() {
          return fr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Fh({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: p,
              classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(Jn(s))
            }
          });
        });
      }
    };
  }
}, am = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? st : i, o = n.title, s = o === void 0 ? null : o, u = n.classes, c = u === void 0 ? [] : u, f = n.attributes, p = f === void 0 ? {} : f, g = n.styles, v = g === void 0 ? {} : g;
        return Da({
          type: "text",
          content: r
        }, function() {
          return fr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), hu({
            content: r,
            transform: D(D({}, st), a),
            title: s,
            extra: {
              attributes: p,
              styles: v,
              classes: ["".concat(N.cssPrefix, "-layers-text")].concat(Jn(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, o = n.extra, s = null, u = null;
      if (af) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, u = f.height / c;
      }
      return N.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, hu({
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
}, om = new RegExp('"', "ug"), xu = [1105920, 1112319];
function sm(t) {
  var e = t.replace(om, ""), r = wh(e, 0), n = r >= xu[0] && r <= xu[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: xs(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Su(t, e) {
  var r = "".concat(Kp).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Kr(t.children), o = a.filter(function(I) {
      return I.getAttribute(ws) === e;
    })[0], s = Ut.getComputedStyle(t, e), u = s.getPropertyValue("font-family").match(eh), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return t.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var p = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(u[2]) ? fe : ie, v = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Mn[g][u[2].toLowerCase()] : th[g][c], h = sm(p), y = h.value, b = h.isSecondary, w = u[0].startsWith("FontAwesome"), _ = Sl(v, y), O = _;
      if (w) {
        var C = Ch(y);
        C.iconName && C.prefix && (_ = C.iconName, v = C.prefix);
      }
      if (_ && !b && (!o || o.getAttribute(gl) !== v || o.getAttribute(yl) !== O)) {
        t.setAttribute(r, O), o && t.removeChild(o);
        var $ = Xh(), T = $.extra;
        T.attributes[ws] = e, _s(_, v).then(function(I) {
          var R = Al(D(D({}, $), {}, {
            icons: {
              main: I,
              mask: Ol()
            },
            prefix: v,
            iconName: O,
            extra: T,
            watchable: !0
          })), M = oe.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(M, t.firstChild) : t.appendChild(M), M.outerHTML = R.map(function(k) {
            return Qn(k);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function lm(t) {
  return Promise.all([Su(t, "::before"), Su(t, "::after")]);
}
function um(t) {
  return t.parentNode !== document.head && !~Xp.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(ws) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ou(t) {
  if (_t)
    return new Promise(function(e, r) {
      var n = Kr(t.querySelectorAll("*")).filter(um).map(lm), i = El.begin("searchPseudoElements");
      _f(), Promise.all(n).then(function() {
        i(), ks(), e();
      }).catch(function() {
        i(), ks(), r();
      });
    });
}
var cm = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Ou, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? oe : n;
      N.searchPseudoElements && Ou(i);
    };
  }
}, Au = !1, fm = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          _f(), Au = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        vu(Os("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Gh();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Au ? ks() : vu(Os("mutationObserverCallbacks", {
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
}, dm = {
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
}, Ho = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function _u(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function pm(t) {
  return t.tag === "g" ? t.children : [t];
}
var hm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Ia(i.split(" ").map(function(o) {
          return o.trim();
        })) : Ol();
        return a.prefix || (a.prefix = Vt()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.mask, s = r.maskId, u = r.transform, c = a.width, f = a.icon, p = o.width, g = o.icon, v = dh({
        transform: u,
        containerWidth: p,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: D(D({}, Ho), {}, {
          fill: "white"
        })
      }, y = f.children ? {
        children: f.children.map(_u)
      } : {}, b = {
        tag: "g",
        attributes: D({}, v.inner),
        children: [_u(D({
          tag: f.tag,
          attributes: D(D({}, f.attributes), v.path)
        }, y))]
      }, w = {
        tag: "g",
        attributes: D({}, v.outer),
        children: [b]
      }, _ = "mask-".concat(s || zn()), O = "clip-".concat(s || zn()), C = {
        tag: "mask",
        attributes: D(D({}, Ho), {}, {
          id: _,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, w]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: pm(g)
        }, C]
      };
      return n.push($, {
        tag: "rect",
        attributes: D({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(_, ")")
        }, Ho)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, mm = {
  provides: function(e) {
    var r = !1;
    Ut.matchMedia && (r = Ut.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, gm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, ym = [mh, rm, nm, im, am, cm, fm, dm, hm, mm, gm];
Ph(ym, {
  mixoutsTo: ze
});
ze.noAuto;
var kf = ze.config, Ra = ze.library;
ze.dom;
var da = ze.parse;
ze.findIconDefinition;
ze.toHtml;
var vm = ze.icon;
ze.layer;
var bm = ze.text;
ze.counter;
function Cu(t, e) {
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
    e % 2 ? Cu(Object(r), !0).forEach(function(n) {
      Ne(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Cu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function pa(t) {
  "@babel/helpers - typeof";
  return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pa(t);
}
function Ne(t, e, r) {
  return e = Cm(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function wm(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function xm(t, e) {
  if (t == null)
    return {};
  var r = wm(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ts(t) {
  return Sm(t) || Om(t) || Am(t) || Em();
}
function Sm(t) {
  if (Array.isArray(t))
    return Ps(t);
}
function Om(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Am(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ps(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ps(t, e);
  }
}
function Ps(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Em() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _m(t, e) {
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
function Cm(t) {
  var e = _m(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var km = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tf = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(w, _, O) {
      if (!c(_) || p(_) || g(_) || v(_) || u(_))
        return _;
      var C, $ = 0, T = 0;
      if (f(_))
        for (C = [], T = _.length; $ < T; $++)
          C.push(r(w, _[$], O));
      else {
        C = {};
        for (var I in _)
          Object.prototype.hasOwnProperty.call(_, I) && (C[w(I, O)] = r(w, _[I], O));
      }
      return C;
    }, n = function(w, _) {
      _ = _ || {};
      var O = _.separator || "_", C = _.split || /(?=[A-Z])/;
      return w.split(C).join(O);
    }, i = function(w) {
      return h(w) ? w : (w = w.replace(/[\-_\s]+(.)?/g, function(_, O) {
        return O ? O.toUpperCase() : "";
      }), w.substr(0, 1).toLowerCase() + w.substr(1));
    }, a = function(w) {
      var _ = i(w);
      return _.substr(0, 1).toUpperCase() + _.substr(1);
    }, o = function(w, _) {
      return n(w, _).toLowerCase();
    }, s = Object.prototype.toString, u = function(w) {
      return typeof w == "function";
    }, c = function(w) {
      return w === Object(w);
    }, f = function(w) {
      return s.call(w) == "[object Array]";
    }, p = function(w) {
      return s.call(w) == "[object Date]";
    }, g = function(w) {
      return s.call(w) == "[object RegExp]";
    }, v = function(w) {
      return s.call(w) == "[object Boolean]";
    }, h = function(w) {
      return w = w - 0, w === w;
    }, y = function(w, _) {
      var O = _ && "process" in _ ? _.process : _;
      return typeof O != "function" ? w : function(C, $) {
        return O(C, w, $);
      };
    }, b = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(w, _) {
        return r(y(i, _), w);
      },
      decamelizeKeys: function(w, _) {
        return r(y(o, _), w, _);
      },
      pascalizeKeys: function(w, _) {
        return r(y(a, _), w);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = b : e.humps = b;
  })(km);
})(Tf);
var Tm = Tf.exports, Pm = ["class", "style"];
function $m(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = Tm.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function Im(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function Cl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Cl(u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.class = Im(f);
        break;
      case "style":
        u.style = $m(f);
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
  var a = r.style, o = a === void 0 ? {} : a, s = xm(r, Pm);
  return jt(t.tag, Je(Je(Je({}, e), {}, {
    class: i.class,
    style: Je(Je({}, i.style), o)
  }, i.attrs), s), n);
}
var Pf = !1;
try {
  Pf = process.env.NODE_ENV === "production";
} catch {
}
function Dm() {
  if (!Pf && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Pn(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Ne({}, t, e) : {};
}
function Rm(t) {
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
function ku(t) {
  if (t && pa(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (da.icon)
    return da.icon(t);
  if (t === null)
    return null;
  if (pa(t) === "object" && t.prefix && t.iconName)
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
var ha = dr({
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
      return ku(e.icon);
    }), a = re(function() {
      return Pn("classes", Rm(e));
    }), o = re(function() {
      return Pn("transform", typeof e.transform == "string" ? da.transform(e.transform) : e.transform);
    }), s = re(function() {
      return Pn("mask", ku(e.mask));
    }), u = re(function() {
      return vm(i.value, Je(Je(Je(Je({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Ta(u, function(f) {
      if (!f)
        return Dm("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = re(function() {
      return u.value ? Cl(u.value.abstract[0], {}, n) : null;
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
    var n = r.slots, i = kf.familyPrefix, a = re(function() {
      return ["".concat(i, "-layers")].concat(Ts(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return jt("div", {
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
    var n = r.attrs, i = kf.familyPrefix, a = re(function() {
      return Pn("classes", [].concat(Ts(e.counter ? ["".concat(i, "-layers-counter")] : []), Ts(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = re(function() {
      return Pn("transform", typeof e.transform == "string" ? da.transform(e.transform) : e.transform);
    }), s = re(function() {
      var c = bm(e.value.toString(), Je(Je({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = re(function() {
      return Cl(s.value, {}, n);
    });
    return function() {
      return u.value;
    };
  }
});
var $f = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const Nm = { class: "relative mb-4 flex w-full max-w-full items-stretch" }, Lm = {
  key: 0,
  class: "flex items-center"
}, Fm = ["id", "disabled", "required", "name"], Mm = ["required", "disabled", "name"], Bm = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, jm = ["href"], CO = {
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
    sublabel: String
  },
  setup(t) {
    Ra.add($f);
    const e = t;
    function r(n) {
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (x(), E("div", null, [
      t.noLabel ? z("", !0) : (x(), se(B(kl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field),
        sublabel: t.sublabel,
        required: t.required
      }, null, 8, ["for", "value", "sublabel", "required"])),
      P("div", Nm, [
        t.type === "checkbox" ? (x(), E("label", Lm, [
          je(P("input", {
            id: t.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": i[0] || (i[0] = (a) => e.form[t.field] = a),
            disabled: e.disabled,
            required: e.required,
            name: t.name ?? t.field
          }, null, 8, Fm), [
            [Zc, e.form[t.field]]
          ]),
          P("div", {
            class: K(["toggle-switch focusable !ml-0", {
              checked: e.form[t.field],
              disabled: e.disabled
            }])
          }, null, 2),
          pe(" " + U(t.switchDescription ? t.switchDescription : "Enable"), 1)
        ])) : t.type === "select" ? je((x(), E("select", {
          key: 1,
          "onUpdate:modelValue": i[1] || (i[1] = (a) => e.form[t.field] = a),
          required: e.required,
          disabled: e.disabled,
          name: t.name ?? t.field,
          class: "focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        }, [
          H(n.$slots, "default")
        ], 8, Mm)), [
          [$p, e.form[t.field]]
        ]) : (x(), E(ce, { key: 2 }, [
          t.addon ? (x(), E("span", Bm, U(t.addon), 1)) : z("", !0),
          ge(B(Ym), {
            id: t.field,
            type: t.type,
            class: K(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
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
          t.submitBtn ? (x(), se(B(ow), {
            key: 1,
            form: t.form,
            class: "z-[2] inline-block rounded-l-none",
            id: "button-input"
          }, {
            default: Ae(() => [
              pe(U(t.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form"])) : z("", !0),
          t.whatsApp ? (x(), E("a", {
            key: 2,
            class: "z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg",
            href: t.whatsApp,
            target: "_blank"
          }, [
            ge(B(ha), {
              icon: "fab fa-whatsapp",
              size: "2xl"
            })
          ], 8, jm)) : z("", !0)
        ], 64))
      ]),
      ge(B(Zn), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
}, zm = { class: "text-sm text-red-600" }, Zn = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => je((x(), E("div", null, [
      P("p", zm, U(t.message), 1)
    ], 512)), [
      [zt, t.message]
    ]);
  }
}, Um = { class: "font-medium block text-sm text-gray-700" }, Vm = { key: 0 }, Hm = { key: 1 }, Wm = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, qm = {
  key: 3,
  class: "ml-1 text-red-500"
}, kl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required"],
  setup(t) {
    return (e, r) => (x(), E("label", Um, [
      t.value ? (x(), E("span", Vm, U(t.value), 1)) : (x(), E("span", Hm, [
        H(e.$slots, "default")
      ])),
      t.sublabel ? (x(), E("span", Wm, U(t.sublabel), 1)) : z("", !0),
      t.required ? (x(), E("span", qm, "*")) : z("", !0)
    ]));
  }
}, Gm = ["value"], Ym = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = be(null);
    return Wt(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (x(), E("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, Gm));
  }
}, Km = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Jm = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], kO = {
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
    return (n, i) => (x(), E("div", null, [
      t.noLabel ? z("", !0) : (x(), se(B(kl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field)
      }, null, 8, ["for", "value"])),
      P("div", Km, [
        je(P("textarea", {
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
        }, null, 40, Jm), [
          [Ip, e.form[t.field]]
        ])
      ]),
      ge(B(Zn), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Xm = Object.defineProperty, Qm = Object.defineProperties, Zm = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, eg = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, Pu = (t, e, r) => e in t ? Xm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tr = (t, e) => {
  for (var r in e || (e = {}))
    eg.call(e, r) && Pu(t, r, e[r]);
  if (Tu)
    for (var r of Tu(e))
      tg.call(e, r) && Pu(t, r, e[r]);
  return t;
}, $u = (t, e) => Qm(t, Zm(e));
const rg = {
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
}, ng = {
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
}, ig = {
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
}, Tl = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, ag = {}, og = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, sg = /* @__PURE__ */ P("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), lg = [
  sg
];
function ug(t, e) {
  return x(), E("svg", og, lg);
}
const cg = /* @__PURE__ */ Tl(ag, [["render", ug]]), fg = {}, dg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, pg = /* @__PURE__ */ P("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), hg = [
  pg
];
function mg(t, e) {
  return x(), E("svg", dg, hg);
}
const gg = /* @__PURE__ */ Tl(fg, [["render", mg]]), Iu = {
  Deselect: cg,
  OpenIndicator: gg
}, yg = {
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
function vg(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let bg = 0;
function wg() {
  return ++bg;
}
const xg = {
  components: Tr({}, Iu),
  directives: { appendToBody: yg },
  mixins: [rg, ng, ig],
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
          return t.hasOwnProperty("id") ? t.id : vg(t);
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
      default: () => wg()
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
          attributes: Tr({
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
        header: $u(Tr({}, t), { deselect: this.deselect }),
        footer: $u(Tr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Tr(Tr({}, Iu), this.components);
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
}, Sg = ["dir"], Og = ["id", "aria-expanded", "aria-owns"], Ag = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Eg = ["disabled", "title", "aria-label", "onClick"], _g = {
  ref: "actions",
  class: "vs__actions"
}, Cg = ["disabled"], kg = { class: "vs__spinner" }, Tg = ["id"], Pg = ["id", "aria-selected", "onMouseover", "onClick"], $g = {
  key: 0,
  class: "vs__no-options"
}, Ig = /* @__PURE__ */ pe(" Sorry, no matching options. "), Dg = ["id"];
function Rg(t, e, r, n, i, a) {
  const o = Dp("append-to-body");
  return x(), E("div", {
    dir: r.dir,
    class: K(["v-select", a.stateClasses])
  }, [
    H(t.$slots, "header", Ve(Ke(a.scope.header))),
    P("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => a.toggleDropdown(s))
    }, [
      P("div", Ag, [
        (x(!0), E(ce, null, Qe(a.selectedValue, (s, u) => H(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (x(), E("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            H(t.$slots, "selected-option", Ve(Ke(a.normalizeOptionForSlot(s))), () => [
              pe(U(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (x(), E("button", {
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
              (x(), se(jo(a.childComponents.Deselect)))
            ], 8, Eg)) : z("", !0)
          ]))
        ])), 256)),
        H(t.$slots, "search", Ve(Ke(a.scope.search)), () => [
          P("input", Ln({ class: "vs__search" }, a.scope.search.attributes, Rp(a.scope.search.events)), null, 16)
        ])
      ], 512),
      P("div", _g, [
        je(P("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (x(), se(jo(a.childComponents.Deselect)))
        ], 8, Cg), [
          [zt, a.showClearButton]
        ]),
        H(t.$slots, "open-indicator", Ve(Ke(a.scope.openIndicator)), () => [
          r.noDrop ? z("", !0) : (x(), se(jo(a.childComponents.OpenIndicator), Ve(Ln({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        H(t.$slots, "spinner", Ve(Ke(a.scope.spinner)), () => [
          je(P("div", kg, "Loading...", 512), [
            [zt, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Og),
    ge(Fr, { name: r.transition }, {
      default: Ae(() => [
        a.dropdownOpen ? je((x(), E("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = Mt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          H(t.$slots, "list-header", Ve(Ke(a.scope.listHeader))),
          (x(!0), E(ce, null, Qe(a.filteredOptions, (s, u) => (x(), E("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(s),
            role: "option",
            class: K(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && u === t.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": u === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": u === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = u : null,
            onClick: Mt((c) => r.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            H(t.$slots, "option", Ve(Ke(a.normalizeOptionForSlot(s))), () => [
              pe(U(r.getOptionLabel(s)), 1)
            ])
          ], 42, Pg))), 128)),
          a.filteredOptions.length === 0 ? (x(), E("li", $g, [
            H(t.$slots, "no-options", Ve(Ke(a.scope.noOptions)), () => [
              Ig
            ])
          ])) : z("", !0),
          H(t.$slots, "list-footer", Ve(Ke(a.scope.listFooter)))
        ], 40, Tg)), [
          [o]
        ]) : (x(), E("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Dg))
      ]),
      _: 3
    }, 8, ["name"]),
    H(t.$slots, "footer", Ve(Ke(a.scope.footer)))
  ], 10, Sg);
}
const Ng = /* @__PURE__ */ Tl(xg, [["render", Rg]]);
const TO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return Ra.add($f), (e, r) => (x(), se(B(Ng), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, yt = {
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
function Lg(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const If = {
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
      default: (t, e) => t.match(Lg(e))
    }
  }
}, Fg = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Mg = {
  name: "ModelSelect",
  mixins: [If],
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
      yt.openOptions(this);
    },
    blurInput() {
      yt.blurInput(this);
    },
    closeOptions() {
      yt.closeOptions(this);
    },
    prevItem() {
      yt.prevItem(this);
    },
    nextItem() {
      yt.nextItem(this);
    },
    enterItem() {
      yt.enterItem(this);
    },
    pointerSet(t) {
      yt.pointerSet(this, t);
    },
    pointerAdjust() {
      yt.pointerAdjust(this);
    },
    mousedownItem() {
      yt.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, Bg = /* @__PURE__ */ P("i", { class: "dropdown icon" }, null, -1), jg = ["disabled", "tabindex", "id", "name", "value"], zg = ["data-vss-custom-attr"], Ug = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Vg(t, e, r, n, i, a) {
  return x(), E("div", {
    class: K(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    Bg,
    P("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: i.searchText,
      onInput: e[0] || (e[0] = (o) => i.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = Mt((...o) => a.openOptions && a.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = kr((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = kr(Mt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = kr((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = kr((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = kr(Mt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = kr((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, jg),
    P("div", {
      class: K(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, U(a.inputText), 11, zg),
    P("div", {
      class: K(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = Mt(() => {
      }, ["prevent"])),
      style: Qi(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), E(ce, null, Qe(a.filteredOptions, (o, s) => (x(), E("div", {
        key: s,
        class: K(["item", { selected: o.selected || i.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: Mt((u) => a.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...u) => a.mousedownItem && a.mousedownItem(...u)),
        onMouseenter: (u) => a.pointerSet(s)
      }, [
        H(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          pe(U(o.text), 1)
        ])
      ], 42, Ug))), 128))
    ], 38)
  ], 34);
}
const Du = /* @__PURE__ */ Fg(Mg, [["render", Vg]]), Ru = {
  name: "ModelListSelect",
  mixins: [If],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return jt(Du, {
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
    ModelSelect: Du
  }
};
const PO = {
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
    isDisabled: {
      type: Boolean,
      default: !1
    },
    noForm: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = e, n = (i) => {
      let a = [];
      return i.split("_").join(" ").split(" ").map(function(o) {
        a.push(o[0].toUpperCase() + o.slice(1));
      }), a.join(" ");
    };
    return (i, a) => (x(), E("div", null, [
      !t.noLabel && (t.label || t.field) ? (x(), se(B(kl), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field)
      }, null, 8, ["for", "value"])) : z("", !0),
      t.noForm ? (x(), se(B(Ru), {
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
        "is-disabled": t.isDisabled
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"])) : (x(), E(ce, { key: 2 }, [
        ge(B(Ru), {
          id: t.id ?? t.field,
          list: t.list,
          modelValue: t.form[t.field],
          "onUpdate:modelValue": [
            a[1] || (a[1] = (o) => t.form[t.field] = o),
            a[2] || (a[2] = (o) => r("update:modelValue", o))
          ],
          "option-value": t.optionValue,
          "option-text": t.optionText,
          "option-disabled": t.optionDisabled,
          placeholder: t.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
          "is-disabled": t.isDisabled
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"]),
        ge(B(Zn), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
};
function Df(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Hg } = Object.prototype, { getPrototypeOf: Pl } = Object, Na = ((t) => (e) => {
  const r = Hg.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (t) => (t = t.toLowerCase(), (e) => Na(e) === t), La = (t) => (e) => typeof e === t, { isArray: Jr } = Array, Un = La("undefined");
function Wg(t) {
  return t !== null && !Un(t) && t.constructor !== null && !Un(t.constructor) && He(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Rf = dt("ArrayBuffer");
function qg(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Rf(t.buffer), e;
}
const Gg = La("string"), He = La("function"), Nf = La("number"), Fa = (t) => t !== null && typeof t == "object", Yg = (t) => t === !0 || t === !1, ta = (t) => {
  if (Na(t) !== "object")
    return !1;
  const e = Pl(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Kg = dt("Date"), Jg = dt("File"), Xg = dt("Blob"), Qg = dt("FileList"), Zg = (t) => Fa(t) && He(t.pipe), ey = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || He(t.append) && ((e = Na(t)) === "formdata" || // detect form-data instance
  e === "object" && He(t.toString) && t.toString() === "[object FormData]"));
}, ty = dt("URLSearchParams"), ry = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ei(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Jr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Lf(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const Ff = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Mf = (t) => !Un(t) && t !== Ff;
function $s() {
  const { caseless: t } = Mf(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Lf(e, i) || i;
    ta(e[a]) && ta(n) ? e[a] = $s(e[a], n) : ta(n) ? e[a] = $s({}, n) : Jr(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ei(arguments[n], r);
  return e;
}
const ny = (t, e, r, { allOwnKeys: n } = {}) => (ei(e, (i, a) => {
  r && He(i) ? t[a] = Df(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), iy = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), ay = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, oy = (t, e, r, n) => {
  let i, a, o;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Pl(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, sy = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, ly = (t) => {
  if (!t)
    return null;
  if (Jr(t))
    return t;
  let e = t.length;
  if (!Nf(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, uy = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Pl(Uint8Array)), cy = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, fy = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, dy = dt("HTMLFormElement"), py = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Nu = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), hy = dt("RegExp"), Bf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ei(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, my = (t) => {
  Bf(t, (e, r) => {
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
}, gy = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Jr(t) ? n(t) : n(String(t).split(e)), r;
}, yy = () => {
}, vy = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Wo = "abcdefghijklmnopqrstuvwxyz", Lu = "0123456789", jf = {
  DIGIT: Lu,
  ALPHA: Wo,
  ALPHA_DIGIT: Wo + Wo.toUpperCase() + Lu
}, by = (t = 16, e = jf.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function wy(t) {
  return !!(t && He(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const xy = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Fa(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = Jr(n) ? [] : {};
        return ei(n, (o, s) => {
          const u = r(o, i + 1);
          !Un(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Sy = dt("AsyncFunction"), Oy = (t) => t && (Fa(t) || He(t)) && He(t.then) && He(t.catch), A = {
  isArray: Jr,
  isArrayBuffer: Rf,
  isBuffer: Wg,
  isFormData: ey,
  isArrayBufferView: qg,
  isString: Gg,
  isNumber: Nf,
  isBoolean: Yg,
  isObject: Fa,
  isPlainObject: ta,
  isUndefined: Un,
  isDate: Kg,
  isFile: Jg,
  isBlob: Xg,
  isRegExp: hy,
  isFunction: He,
  isStream: Zg,
  isURLSearchParams: ty,
  isTypedArray: uy,
  isFileList: Qg,
  forEach: ei,
  merge: $s,
  extend: ny,
  trim: ry,
  stripBOM: iy,
  inherits: ay,
  toFlatObject: oy,
  kindOf: Na,
  kindOfTest: dt,
  endsWith: sy,
  toArray: ly,
  forEachEntry: cy,
  matchAll: fy,
  isHTMLForm: dy,
  hasOwnProperty: Nu,
  hasOwnProp: Nu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bf,
  freezeMethods: my,
  toObjectSet: gy,
  toCamelCase: py,
  noop: yy,
  toFiniteNumber: vy,
  findKey: Lf,
  global: Ff,
  isContextDefined: Mf,
  ALPHABET: jf,
  generateString: by,
  isSpecCompliantForm: wy,
  toJSONObject: xy,
  isAsyncFn: Sy,
  isThenable: Oy
};
function Y(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
A.inherits(Y, Error, {
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
const zf = Y.prototype, Uf = {};
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
  Uf[t] = { value: t };
});
Object.defineProperties(Y, Uf);
Object.defineProperty(zf, "isAxiosError", { value: !0 });
Y.from = (t, e, r, n, i, a) => {
  const o = Object.create(zf);
  return A.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Y.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Ay = null;
function Is(t) {
  return A.isPlainObject(t) || A.isArray(t);
}
function Vf(t) {
  return A.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Fu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = Vf(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Ey(t) {
  return A.isArray(t) && !t.some(Is);
}
const _y = A.toFlatObject(A, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ma(t, e, r) {
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
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(h) || A.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, y, b) {
    let w = h;
    if (h && !b && typeof h == "object") {
      if (A.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (A.isArray(h) && Ey(h) || (A.isFileList(h) || A.endsWith(y, "[]")) && (w = A.toArray(h)))
        return y = Vf(y), w.forEach(function(O, C) {
          !(A.isUndefined(O) || O === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fu([y], C, a) : o === null ? y : y + "[]",
            c(O)
          );
        }), !1;
    }
    return Is(h) ? !0 : (e.append(Fu(b, y, a), c(h)), !1);
  }
  const p = [], g = Object.assign(_y, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Is
  });
  function v(h, y) {
    if (!A.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(h), A.forEach(h, function(w, _) {
        (!(A.isUndefined(w) || w === null) && i.call(
          e,
          w,
          A.isString(_) ? _.trim() : _,
          y,
          g
        )) === !0 && v(w, y ? y.concat(_) : [_]);
      }), p.pop();
    }
  }
  if (!A.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function Mu(t) {
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
function $l(t, e) {
  this._pairs = [], t && Ma(t, this, e);
}
const Hf = $l.prototype;
Hf.append = function(e, r) {
  this._pairs.push([e, r]);
};
Hf.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Mu);
  } : Mu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Cy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Wf(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Cy, i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = A.isURLSearchParams(e) ? e.toString() : new $l(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class ky {
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
const Bu = ky, qf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ty = typeof URLSearchParams < "u" ? URLSearchParams : $l, Py = typeof FormData < "u" ? FormData : null, $y = typeof Blob < "u" ? Blob : null, Iy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ty,
    FormData: Py,
    Blob: $y
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gf = typeof window < "u" && typeof document < "u", Dy = ((t) => Gf && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Ry = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ny = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gf,
  hasStandardBrowserEnv: Dy,
  hasStandardBrowserWebWorkerEnv: Ry
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ...Ny,
  ...Iy
};
function Ly(t, e) {
  return Ma(t, new lt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return lt.isNode && A.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Fy(t) {
  return A.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function My(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function Yf(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && A.isArray(i) ? i.length : o, u ? (A.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !A.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && A.isArray(i[o]) && (i[o] = My(i[o])), !s);
  }
  if (A.isFormData(t) && A.isFunction(t.entries)) {
    const r = {};
    return A.forEachEntry(t, (n, i) => {
      e(Fy(n), i, r, 0);
    }), r;
  }
  return null;
}
function By(t, e, r) {
  if (A.isString(t))
    try {
      return (e || JSON.parse)(t), A.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Il = {
  transitional: qf,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = A.isObject(e);
    if (a && A.isHTMLForm(e) && (e = new FormData(e)), A.isFormData(e))
      return i ? JSON.stringify(Yf(e)) : e;
    if (A.isArrayBuffer(e) || A.isBuffer(e) || A.isStream(e) || A.isFile(e) || A.isBlob(e))
      return e;
    if (A.isArrayBufferView(e))
      return e.buffer;
    if (A.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ly(e, this.formSerializer).toString();
      if ((s = A.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ma(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), By(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Il.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && A.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? Y.from(s, Y.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: lt.classes.FormData,
    Blob: lt.classes.Blob
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
  Il.headers[t] = {};
});
const Dl = Il, jy = A.toObjectSet([
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
]), zy = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && jy[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ju = Symbol("internals");
function vn(t) {
  return t && String(t).trim().toLowerCase();
}
function ra(t) {
  return t === !1 || t == null ? t : A.isArray(t) ? t.map(ra) : String(t);
}
function Uy(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Vy = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function qo(t, e, r, n, i) {
  if (A.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!A.isString(e)) {
    if (A.isString(n))
      return e.indexOf(n) !== -1;
    if (A.isRegExp(n))
      return n.test(e);
  }
}
function Hy(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Wy(t, e) {
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
class Ba {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, u, c) {
      const f = vn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = A.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = ra(s));
    }
    const o = (s, u) => A.forEach(s, (c, f) => a(c, f, u));
    return A.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : A.isString(e) && (e = e.trim()) && !Vy(e) ? o(zy(e), r) : e != null && a(r, e, n), this;
  }
  get(e, r) {
    if (e = vn(e), e) {
      const n = A.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Uy(i);
        if (A.isFunction(r))
          return r.call(this, i, n);
        if (A.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = vn(e), e) {
      const n = A.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || qo(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = vn(o), o) {
        const s = A.findKey(n, o);
        s && (!r || qo(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return A.isArray(e) ? e.forEach(a) : a(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || qo(this, this[a], a, e, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return A.forEach(this, (i, a) => {
      const o = A.findKey(n, a);
      if (o) {
        r[o] = ra(i), delete r[a];
        return;
      }
      const s = e ? Hy(a) : String(a).trim();
      s !== a && delete r[a], r[s] = ra(i), n[s] = !0;
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
    const n = (this[ju] = this[ju] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = vn(o);
      n[s] || (Wy(i, o), n[s] = !0);
    }
    return A.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
Ba.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(Ba.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
A.freezeMethods(Ba);
const xt = Ba;
function Go(t, e) {
  const r = this || Dl, n = e || r, i = xt.from(n.headers);
  let a = n.data;
  return A.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function Kf(t) {
  return !!(t && t.__CANCEL__);
}
function ti(t, e, r) {
  Y.call(this, t ?? "canceled", Y.ERR_CANCELED, e, r), this.name = "CanceledError";
}
A.inherits(ti, Y, {
  __CANCEL__: !0
});
function qy(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new Y(
    "Request failed with status code " + r.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Gy = lt.hasStandardBrowserEnv ? (
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
function Yy(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ky(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Jf(t, e) {
  return t && !Yy(e) ? Ky(t, e) : e;
}
const Jy = lt.hasStandardBrowserEnv ? (
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
function Xy(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Qy(t, e) {
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
function zu(t, e) {
  let r = 0;
  const n = Qy(50, 250);
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
const Zy = typeof XMLHttpRequest < "u", ev = Zy && function(t) {
  return new Promise(function(r, n) {
    let i = t.data;
    const a = xt.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (A.isFormData(i)) {
      if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((f = a.getContentType()) !== !1) {
        const [y, ...b] = f ? f.split(";").map((w) => w.trim()).filter(Boolean) : [];
        a.setContentType([y || "multipart/form-data", ...b].join("; "));
      }
    }
    let p = new XMLHttpRequest();
    if (t.auth) {
      const y = t.auth.username || "", b = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(y + ":" + b));
    }
    const g = Jf(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), Wf(g, t.params, t.paramsSerializer), !0), p.timeout = t.timeout;
    function v() {
      if (!p)
        return;
      const y = xt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), w = {
        data: !o || o === "text" || o === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: y,
        config: t,
        request: p
      };
      qy(function(O) {
        r(O), c();
      }, function(O) {
        n(O), c();
      }, w), p = null;
    }
    if ("onloadend" in p ? p.onloadend = v : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, p.onabort = function() {
      p && (n(new Y("Request aborted", Y.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      n(new Y("Network Error", Y.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let b = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const w = t.transitional || qf;
      t.timeoutErrorMessage && (b = t.timeoutErrorMessage), n(new Y(
        b,
        w.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        t,
        p
      )), p = null;
    }, lt.hasStandardBrowserEnv && (s && A.isFunction(s) && (s = s(t)), s || s !== !1 && Jy(g))) {
      const y = t.xsrfHeaderName && t.xsrfCookieName && Gy.read(t.xsrfCookieName);
      y && a.set(t.xsrfHeaderName, y);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in p && A.forEach(a.toJSON(), function(b, w) {
      p.setRequestHeader(w, b);
    }), A.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), o && o !== "json" && (p.responseType = t.responseType), typeof t.onDownloadProgress == "function" && p.addEventListener("progress", zu(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", zu(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (y) => {
      p && (n(!y || y.type ? new ti(null, t, p) : y), p.abort(), p = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const h = Xy(g);
    if (h && lt.protocols.indexOf(h) === -1) {
      n(new Y("Unsupported protocol " + h + ":", Y.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Ds = {
  http: Ay,
  xhr: ev
};
A.forEach(Ds, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Uu = (t) => `- ${t}`, tv = (t) => A.isFunction(t) || t === null || t === !1, Xf = {
  getAdapter: (t) => {
    t = A.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !tv(r) && (n = Ds[(o = String(r)).toLowerCase()], n === void 0))
        throw new Y(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Uu).join(`
`) : " " + Uu(a[0]) : "as no adapter specified";
      throw new Y(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ds
};
function Yo(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ti(null, t);
}
function Vu(t) {
  return Yo(t), t.headers = xt.from(t.headers), t.data = Go.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Xf.getAdapter(t.adapter || Dl.adapter)(t).then(function(n) {
    return Yo(t), n.data = Go.call(
      t,
      t.transformResponse,
      n
    ), n.headers = xt.from(n.headers), n;
  }, function(n) {
    return Kf(n) || (Yo(t), n && n.response && (n.response.data = Go.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = xt.from(n.response.headers))), Promise.reject(n);
  });
}
const Hu = (t) => t instanceof xt ? t.toJSON() : t;
function zr(t, e) {
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
    headers: (c, f) => i(Hu(c), Hu(f), !0)
  };
  return A.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, g = p(t[f], e[f], f);
    A.isUndefined(g) && p !== s || (r[f] = g);
  }), r;
}
const Qf = "1.6.7", Rl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Rl[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Wu = {};
Rl.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + Qf + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new Y(
        i(o, " has been removed" + (r ? " in " + r : "")),
        Y.ERR_DEPRECATED
      );
    return r && !Wu[o] && (Wu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
function rv(t, e, r) {
  if (typeof t != "object")
    throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], u = s === void 0 || o(s, a, t);
      if (u !== !0)
        throw new Y("option " + a + " must be " + u, Y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Y("Unknown option " + a, Y.ERR_BAD_OPTION);
  }
}
const Rs = {
  assertOptions: rv,
  validators: Rl
}, Nt = Rs.validators;
class ma {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Bu(),
      response: new Bu()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = zr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Rs.assertOptions(n, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), i != null && (A.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Rs.assertOptions(i, {
      encode: Nt.function,
      serialize: Nt.function
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
    ), r.headers = xt.concat(o, a);
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
      const h = [Vu.bind(this), void 0];
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
      f = Vu.call(this, v);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, g = c.length; p < g; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = zr(this.defaults, e);
    const r = Jf(e.baseURL, e.url);
    return Wf(r, e.params, e.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function(e) {
  ma.prototype[e] = function(r, n) {
    return this.request(zr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(zr(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  ma.prototype[e] = r(), ma.prototype[e + "Form"] = r(!0);
});
const na = ma;
class Nl {
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
      n.reason || (n.reason = new ti(a, o, s), r(n.reason));
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
      token: new Nl(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const nv = Nl;
function iv(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function av(t) {
  return A.isObject(t) && t.isAxiosError === !0;
}
const Ns = {
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
Object.entries(Ns).forEach(([t, e]) => {
  Ns[e] = t;
});
const ov = Ns;
function Zf(t) {
  const e = new na(t), r = Df(na.prototype.request, e);
  return A.extend(r, na.prototype, e, { allOwnKeys: !0 }), A.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Zf(zr(t, i));
  }, r;
}
const ye = Zf(Dl);
ye.Axios = na;
ye.CanceledError = ti;
ye.CancelToken = nv;
ye.isCancel = Kf;
ye.VERSION = Qf;
ye.toFormData = Ma;
ye.AxiosError = Y;
ye.Cancel = ye.CanceledError;
ye.all = function(e) {
  return Promise.all(e);
};
ye.spread = iv;
ye.isAxiosError = av;
ye.mergeConfig = zr;
ye.AxiosHeaders = xt;
ye.formToJSON = (t) => Yf(A.isHTMLForm(t) ? new FormData(t) : t);
ye.getAdapter = Xf.getAdapter;
ye.HttpStatusCode = ov;
ye.default = ye;
const qu = ye;
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ja(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function sv(t) {
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
var lv = function(e) {
  return uv(e) && !cv(e);
};
function uv(t) {
  return !!t && typeof t == "object";
}
function cv(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || pv(t);
}
var fv = typeof Symbol == "function" && Symbol.for, dv = fv ? Symbol.for("react.element") : 60103;
function pv(t) {
  return t.$$typeof === dv;
}
function hv(t) {
  return Array.isArray(t) ? [] : {};
}
function Vn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ur(hv(t), t, e) : t;
}
function mv(t, e, r) {
  return t.concat(e).map(function(n) {
    return Vn(n, r);
  });
}
function gv(t, e) {
  if (!e.customMerge)
    return Ur;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Ur;
}
function yv(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Gu(t) {
  return Object.keys(t).concat(yv(t));
}
function ed(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function vv(t, e) {
  return ed(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function bv(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Gu(t).forEach(function(i) {
    n[i] = Vn(t[i], r);
  }), Gu(e).forEach(function(i) {
    vv(t, i) || (ed(t, i) && r.isMergeableObject(e[i]) ? n[i] = gv(i, r)(t[i], e[i], r) : n[i] = Vn(e[i], r));
  }), n;
}
function Ur(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || mv, r.isMergeableObject = r.isMergeableObject || lv, r.cloneUnlessOtherwiseSpecified = Vn;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : bv(t, e, r) : Vn(e, r);
}
Ur.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return Ur(n, i, r);
  }, {});
};
var wv = Ur, xv = wv;
const Sv = /* @__PURE__ */ ja(xv);
var Ov = Error, Av = EvalError, Ev = RangeError, _v = ReferenceError, td = SyntaxError, ri = TypeError, Cv = URIError, kv = function() {
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
}, Yu = typeof Symbol < "u" && Symbol, Tv = kv, Pv = function() {
  return typeof Yu != "function" || typeof Symbol != "function" || typeof Yu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Tv();
}, Ku = {
  foo: {}
}, $v = Object, Iv = function() {
  return { __proto__: Ku }.foo === Ku.foo && !({ __proto__: null } instanceof $v);
}, Dv = "Function.prototype.bind called on incompatible ", Rv = Object.prototype.toString, Nv = Math.max, Lv = "[object Function]", Ju = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, Fv = function(e, r) {
  for (var n = [], i = r || 0, a = 0; i < e.length; i += 1, a += 1)
    n[a] = e[i];
  return n;
}, Mv = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, Bv = function(e) {
  var r = this;
  if (typeof r != "function" || Rv.apply(r) !== Lv)
    throw new TypeError(Dv + r);
  for (var n = Fv(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        Ju(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Ju(n, arguments)
    );
  }, o = Nv(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + Mv(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, jv = Bv, Ll = Function.prototype.bind || jv, zv = Function.prototype.call, Uv = Object.prototype.hasOwnProperty, Vv = Ll, Hv = Vv.call(zv, Uv), W, Wv = Ov, qv = Av, Gv = Ev, Yv = _v, Vr = td, Br = ri, Kv = Cv, rd = Function, Ko = function(t) {
  try {
    return rd('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, lr = Object.getOwnPropertyDescriptor;
if (lr)
  try {
    lr({}, "");
  } catch {
    lr = null;
  }
var Jo = function() {
  throw new Br();
}, Jv = lr ? function() {
  try {
    return arguments.callee, Jo;
  } catch {
    try {
      return lr(arguments, "callee").get;
    } catch {
      return Jo;
    }
  }
}() : Jo, Pr = Pv(), Xv = Iv(), Oe = Object.getPrototypeOf || (Xv ? function(t) {
  return t.__proto__;
} : null), Dr = {}, Qv = typeof Uint8Array > "u" || !Oe ? W : Oe(Uint8Array), ur = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? W : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? W : ArrayBuffer,
  "%ArrayIteratorPrototype%": Pr && Oe ? Oe([][Symbol.iterator]()) : W,
  "%AsyncFromSyncIteratorPrototype%": W,
  "%AsyncFunction%": Dr,
  "%AsyncGenerator%": Dr,
  "%AsyncGeneratorFunction%": Dr,
  "%AsyncIteratorPrototype%": Dr,
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
  "%Error%": Wv,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": qv,
  "%Float32Array%": typeof Float32Array > "u" ? W : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? W : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? W : FinalizationRegistry,
  "%Function%": rd,
  "%GeneratorFunction%": Dr,
  "%Int8Array%": typeof Int8Array > "u" ? W : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? W : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? W : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Pr && Oe ? Oe(Oe([][Symbol.iterator]())) : W,
  "%JSON%": typeof JSON == "object" ? JSON : W,
  "%Map%": typeof Map > "u" ? W : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Pr || !Oe ? W : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? W : Promise,
  "%Proxy%": typeof Proxy > "u" ? W : Proxy,
  "%RangeError%": Gv,
  "%ReferenceError%": Yv,
  "%Reflect%": typeof Reflect > "u" ? W : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? W : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Pr || !Oe ? W : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? W : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Pr && Oe ? Oe(""[Symbol.iterator]()) : W,
  "%Symbol%": Pr ? Symbol : W,
  "%SyntaxError%": Vr,
  "%ThrowTypeError%": Jv,
  "%TypedArray%": Qv,
  "%TypeError%": Br,
  "%Uint8Array%": typeof Uint8Array > "u" ? W : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? W : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? W : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? W : Uint32Array,
  "%URIError%": Kv,
  "%WeakMap%": typeof WeakMap > "u" ? W : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? W : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? W : WeakSet
};
if (Oe)
  try {
    null.error;
  } catch (t) {
    var Zv = Oe(Oe(t));
    ur["%Error.prototype%"] = Zv;
  }
var eb = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Ko("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Ko("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Ko("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && Oe && (r = Oe(i.prototype));
  }
  return ur[e] = r, r;
}, Xu = {
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
}, ni = Ll, ga = Hv, tb = ni.call(Function.call, Array.prototype.concat), rb = ni.call(Function.apply, Array.prototype.splice), Qu = ni.call(Function.call, String.prototype.replace), ya = ni.call(Function.call, String.prototype.slice), nb = ni.call(Function.call, RegExp.prototype.exec), ib = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ab = /\\(\\)?/g, ob = function(e) {
  var r = ya(e, 0, 1), n = ya(e, -1);
  if (r === "%" && n !== "%")
    throw new Vr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Vr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Qu(e, ib, function(a, o, s, u) {
    i[i.length] = s ? Qu(u, ab, "$1") : o || a;
  }), i;
}, sb = function(e, r) {
  var n = e, i;
  if (ga(Xu, n) && (i = Xu[n], n = "%" + i[0] + "%"), ga(ur, n)) {
    var a = ur[n];
    if (a === Dr && (a = eb(n)), typeof a > "u" && !r)
      throw new Br("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Vr("intrinsic " + e + " does not exist!");
}, pr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Br("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Br('"allowMissing" argument must be a boolean');
  if (nb(/^%?[^%]*%?$/, e) === null)
    throw new Vr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ob(e), i = n.length > 0 ? n[0] : "", a = sb("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], rb(n, tb([0, 1], c)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var g = n[f], v = ya(g, 0, 1), h = ya(g, -1);
    if ((v === '"' || v === "'" || v === "`" || h === '"' || h === "'" || h === "`") && v !== h)
      throw new Vr("property names with quotes must have matching quotes");
    if ((g === "constructor" || !p) && (u = !0), i += "." + g, o = "%" + i + "%", ga(ur, o))
      s = ur[o];
    else if (s != null) {
      if (!(g in s)) {
        if (!r)
          throw new Br("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (lr && f + 1 >= n.length) {
        var y = lr(s, g);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[g];
      } else
        p = ga(s, g), s = s[g];
      p && !u && (ur[o] = s);
    }
  }
  return s;
}, nd = { exports: {} }, lb = pr, Ls = lb("%Object.defineProperty%", !0), Fs = function() {
  if (Ls)
    try {
      return Ls({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Fs.hasArrayLengthDefineBug = function() {
  if (!Fs())
    return null;
  try {
    return Ls([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var id = Fs, ub = pr, ia = ub("%Object.getOwnPropertyDescriptor%", !0);
if (ia)
  try {
    ia([], "length");
  } catch {
    ia = null;
  }
var ad = ia, cb = id(), fb = pr, $n = cb && fb("%Object.defineProperty%", !0);
if ($n)
  try {
    $n({}, "a", { value: 1 });
  } catch {
    $n = !1;
  }
var db = td, $r = ri, Zu = ad, pb = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new $r("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new $r("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new $r("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new $r("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new $r("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new $r("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!Zu && Zu(e, r);
  if ($n)
    $n(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: n,
      writable: a === null && u ? u.writable : !a
    });
  else if (s || !i && !a && !o)
    e[r] = n;
  else
    throw new db("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, hb = pr, ec = pb, mb = id(), tc = ad, rc = ri, gb = hb("%Math.floor%"), yb = function(e, r) {
  if (typeof e != "function")
    throw new rc("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || gb(r) !== r)
    throw new rc("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && tc) {
    var o = tc(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (mb ? ec(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : ec(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Ll, r = pr, n = yb, i = ri, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
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
})(nd);
var vb = nd.exports, od = pr, sd = vb, bb = sd(od("String.prototype.indexOf")), wb = function(e, r) {
  var n = od(e, !!r);
  return typeof n == "function" && bb(e, ".prototype.") > -1 ? sd(n) : n;
};
const xb = {}, Sb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xb
}, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ sv(Sb);
var Fl = typeof Map == "function" && Map.prototype, Xo = Object.getOwnPropertyDescriptor && Fl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, va = Fl && Xo && typeof Xo.get == "function" ? Xo.get : null, nc = Fl && Map.prototype.forEach, Ml = typeof Set == "function" && Set.prototype, Qo = Object.getOwnPropertyDescriptor && Ml ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ba = Ml && Qo && typeof Qo.get == "function" ? Qo.get : null, ic = Ml && Set.prototype.forEach, Ob = typeof WeakMap == "function" && WeakMap.prototype, In = Ob ? WeakMap.prototype.has : null, Ab = typeof WeakSet == "function" && WeakSet.prototype, Dn = Ab ? WeakSet.prototype.has : null, Eb = typeof WeakRef == "function" && WeakRef.prototype, ac = Eb ? WeakRef.prototype.deref : null, _b = Boolean.prototype.valueOf, Cb = Object.prototype.toString, kb = Function.prototype.toString, Tb = String.prototype.match, Bl = String.prototype.slice, Bt = String.prototype.replace, Pb = String.prototype.toUpperCase, oc = String.prototype.toLowerCase, ld = RegExp.prototype.test, sc = Array.prototype.concat, at = Array.prototype.join, $b = Array.prototype.slice, lc = Math.floor, Ms = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Zo = Object.getOwnPropertySymbols, Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Hr = typeof Symbol == "function" && typeof Symbol.iterator == "object", $e = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Hr || "symbol") ? Symbol.toStringTag : null, ud = Object.prototype.propertyIsEnumerable, uc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function cc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || ld.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -lc(-t) : lc(t);
    if (n !== t) {
      var i = String(n), a = Bl.call(e, i.length + 1);
      return Bt.call(i, r, "$&_") + "." + Bt.call(Bt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Bt.call(e, r, "$&_");
}
var js = We, fc = js.custom, dc = fd(fc) ? fc : null, Ib = function t(e, r, n, i) {
  var a = r || {};
  if (Ft(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ft(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Ft(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ft(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ft(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return pd(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return s ? cc(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? cc(e, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return zs(e) ? "[Array]" : "[Object]";
  var p = Jb(a, n);
  if (typeof i > "u")
    i = [];
  else if (dd(i, e) >= 0)
    return "[Circular]";
  function g(ee, ue, he) {
    if (ue && (i = $b.call(i), i.push(ue)), he) {
      var xe = {
        depth: a.depth
      };
      return Ft(a, "quoteStyle") && (xe.quoteStyle = a.quoteStyle), t(ee, xe, n + 1, i);
    }
    return t(ee, a, n + 1, i);
  }
  if (typeof e == "function" && !pc(e)) {
    var v = zb(e), h = Fi(e, g);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (h.length > 0 ? " { " + at.call(h, ", ") + " }" : "");
  }
  if (fd(e)) {
    var y = Hr ? Bt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Bs.call(e);
    return typeof e == "object" && !Hr ? bn(y) : y;
  }
  if (Gb(e)) {
    for (var b = "<" + oc.call(String(e.nodeName)), w = e.attributes || [], _ = 0; _ < w.length; _++)
      b += " " + w[_].name + "=" + cd(Db(w[_].value), "double", a);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + oc.call(String(e.nodeName)) + ">", b;
  }
  if (zs(e)) {
    if (e.length === 0)
      return "[]";
    var O = Fi(e, g);
    return p && !Kb(O) ? "[" + Us(O, p) + "]" : "[ " + at.call(O, ", ") + " ]";
  }
  if (Nb(e)) {
    var C = Fi(e, g);
    return !("cause" in Error.prototype) && "cause" in e && !ud.call(e, "cause") ? "{ [" + String(e) + "] " + at.call(sc.call("[cause]: " + g(e.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + at.call(C, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (dc && typeof e[dc] == "function" && js)
      return js(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Ub(e)) {
    var $ = [];
    return nc && nc.call(e, function(ee, ue) {
      $.push(g(ue, e, !0) + " => " + g(ee, e));
    }), hc("Map", va.call(e), $, p);
  }
  if (Wb(e)) {
    var T = [];
    return ic && ic.call(e, function(ee) {
      T.push(g(ee, e));
    }), hc("Set", ba.call(e), T, p);
  }
  if (Vb(e))
    return es("WeakMap");
  if (qb(e))
    return es("WeakSet");
  if (Hb(e))
    return es("WeakRef");
  if (Fb(e))
    return bn(g(Number(e)));
  if (Bb(e))
    return bn(g(Ms.call(e)));
  if (Mb(e))
    return bn(_b.call(e));
  if (Lb(e))
    return bn(g(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === ut)
    return "{ [object globalThis] }";
  if (!Rb(e) && !pc(e)) {
    var I = Fi(e, g), R = uc ? uc(e) === Object.prototype : e instanceof Object || e.constructor === Object, M = e instanceof Object ? "" : "null prototype", k = !R && $e && Object(e) === e && $e in e ? Bl.call(qt(e), 8, -1) : M ? "Object" : "", F = R || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", V = F + (k || M ? "[" + at.call(sc.call([], k || [], M || []), ": ") + "] " : "");
    return I.length === 0 ? V + "{}" : p ? V + "{" + Us(I, p) + "}" : V + "{ " + at.call(I, ", ") + " }";
  }
  return String(e);
};
function cd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Db(t) {
  return Bt.call(String(t), /"/g, "&quot;");
}
function zs(t) {
  return qt(t) === "[object Array]" && (!$e || !(typeof t == "object" && $e in t));
}
function Rb(t) {
  return qt(t) === "[object Date]" && (!$e || !(typeof t == "object" && $e in t));
}
function pc(t) {
  return qt(t) === "[object RegExp]" && (!$e || !(typeof t == "object" && $e in t));
}
function Nb(t) {
  return qt(t) === "[object Error]" && (!$e || !(typeof t == "object" && $e in t));
}
function Lb(t) {
  return qt(t) === "[object String]" && (!$e || !(typeof t == "object" && $e in t));
}
function Fb(t) {
  return qt(t) === "[object Number]" && (!$e || !(typeof t == "object" && $e in t));
}
function Mb(t) {
  return qt(t) === "[object Boolean]" && (!$e || !(typeof t == "object" && $e in t));
}
function fd(t) {
  if (Hr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Bs)
    return !1;
  try {
    return Bs.call(t), !0;
  } catch {
  }
  return !1;
}
function Bb(t) {
  if (!t || typeof t != "object" || !Ms)
    return !1;
  try {
    return Ms.call(t), !0;
  } catch {
  }
  return !1;
}
var jb = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Ft(t, e) {
  return jb.call(t, e);
}
function qt(t) {
  return Cb.call(t);
}
function zb(t) {
  if (t.name)
    return t.name;
  var e = Tb.call(kb.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function dd(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function Ub(t) {
  if (!va || !t || typeof t != "object")
    return !1;
  try {
    va.call(t);
    try {
      ba.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Vb(t) {
  if (!In || !t || typeof t != "object")
    return !1;
  try {
    In.call(t, In);
    try {
      Dn.call(t, Dn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Hb(t) {
  if (!ac || !t || typeof t != "object")
    return !1;
  try {
    return ac.call(t), !0;
  } catch {
  }
  return !1;
}
function Wb(t) {
  if (!ba || !t || typeof t != "object")
    return !1;
  try {
    ba.call(t);
    try {
      va.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function qb(t) {
  if (!Dn || !t || typeof t != "object")
    return !1;
  try {
    Dn.call(t, Dn);
    try {
      In.call(t, In);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Gb(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function pd(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return pd(Bl.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = Bt.call(Bt.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Yb);
  return cd(i, "single", e);
}
function Yb(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Pb.call(e.toString(16));
}
function bn(t) {
  return "Object(" + t + ")";
}
function es(t) {
  return t + " { ? }";
}
function hc(t, e, r, n) {
  var i = n ? Us(r, n) : at.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function Kb(t) {
  for (var e = 0; e < t.length; e++)
    if (dd(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Jb(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = at.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: at.call(Array(e + 1), r)
  };
}
function Us(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + at.call(t, "," + r) + `
` + e.prev;
}
function Fi(t, e) {
  var r = zs(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = Ft(t, i) ? e(t[i], t) : "";
  }
  var a = typeof Zo == "function" ? Zo(t) : [], o;
  if (Hr) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in t)
    Ft(t, u) && (r && String(Number(u)) === u && u < t.length || Hr && o["$" + u] instanceof Symbol || (ld.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof Zo == "function")
    for (var c = 0; c < a.length; c++)
      ud.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var hd = pr, Xr = wb, Xb = Ib, Qb = ri, Mi = hd("%WeakMap%", !0), Bi = hd("%Map%", !0), Zb = Xr("WeakMap.prototype.get", !0), e0 = Xr("WeakMap.prototype.set", !0), t0 = Xr("WeakMap.prototype.has", !0), r0 = Xr("Map.prototype.get", !0), n0 = Xr("Map.prototype.set", !0), i0 = Xr("Map.prototype.has", !0), jl = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, a0 = function(t, e) {
  var r = jl(t, e);
  return r && r.value;
}, o0 = function(t, e, r) {
  var n = jl(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, s0 = function(t, e) {
  return !!jl(t, e);
}, l0 = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new Qb("Side channel does not contain " + Xb(a));
    },
    get: function(a) {
      if (Mi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Zb(e, a);
      } else if (Bi) {
        if (r)
          return r0(r, a);
      } else if (n)
        return a0(n, a);
    },
    has: function(a) {
      if (Mi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return t0(e, a);
      } else if (Bi) {
        if (r)
          return i0(r, a);
      } else if (n)
        return s0(n, a);
      return !1;
    },
    set: function(a, o) {
      Mi && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Mi()), e0(e, a, o)) : Bi ? (r || (r = new Bi()), n0(r, a, o)) : (n || (n = { key: {}, next: null }), o0(n, a, o));
    }
  };
  return i;
}, u0 = String.prototype.replace, c0 = /%20/g, ts = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, zl = {
  default: ts.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return u0.call(t, c0, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: ts.RFC1738,
  RFC3986: ts.RFC3986
}, f0 = zl, rs = Object.prototype.hasOwnProperty, ir = Array.isArray, nt = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), d0 = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (ir(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, md = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, p0 = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (ir(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !rs.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return ir(e) && !ir(r) && (i = md(e, n)), ir(e) && ir(r) ? (r.forEach(function(a, o) {
    if (rs.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return rs.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
  }, i);
}, h0 = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, m0 = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, g0 = function(e, r, n, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === f0.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + nt[c];
      continue;
    }
    if (c < 2048) {
      s = s + (nt[192 | c >> 6] + nt[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (nt[224 | c >> 12] + nt[128 | c >> 6 & 63] + nt[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), s += nt[240 | c >> 18] + nt[128 | c >> 12 & 63] + nt[128 | c >> 6 & 63] + nt[128 | c & 63];
  }
  return s;
}, y0 = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return d0(r), e;
}, v0 = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, b0 = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, w0 = function(e, r) {
  return [].concat(e, r);
}, x0 = function(e, r) {
  if (ir(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, gd = {
  arrayToObject: md,
  assign: h0,
  combine: w0,
  compact: y0,
  decode: m0,
  encode: g0,
  isBuffer: b0,
  isRegExp: v0,
  maybeMap: x0,
  merge: p0
}, yd = l0, aa = gd, Rn = zl, S0 = Object.prototype.hasOwnProperty, mc = {
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
}, wt = Array.isArray, O0 = Array.prototype.push, vd = function(t, e) {
  O0.apply(t, wt(e) ? e : [e]);
}, A0 = Date.prototype.toISOString, gc = Rn.default, Pe = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: aa.encode,
  encodeValuesOnly: !1,
  format: gc,
  formatter: Rn.formatters[gc],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return A0.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, E0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ns = {}, _0 = function t(e, r, n, i, a, o, s, u, c, f, p, g, v, h, y, b) {
  for (var w = e, _ = b, O = 0, C = !1; (_ = _.get(ns)) !== void 0 && !C; ) {
    var $ = _.get(e);
    if (O += 1, typeof $ < "u") {
      if ($ === O)
        throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof _.get(ns) > "u" && (O = 0);
  }
  if (typeof u == "function" ? w = u(r, w) : w instanceof Date ? w = p(w) : n === "comma" && wt(w) && (w = aa.maybeMap(w, function(xe) {
    return xe instanceof Date ? p(xe) : xe;
  })), w === null) {
    if (a)
      return s && !h ? s(r, Pe.encoder, y, "key", g) : r;
    w = "";
  }
  if (E0(w) || aa.isBuffer(w)) {
    if (s) {
      var T = h ? r : s(r, Pe.encoder, y, "key", g);
      return [v(T) + "=" + v(s(w, Pe.encoder, y, "value", g))];
    }
    return [v(r) + "=" + v(String(w))];
  }
  var I = [];
  if (typeof w > "u")
    return I;
  var R;
  if (n === "comma" && wt(w))
    h && s && (w = aa.maybeMap(w, s)), R = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
  else if (wt(u))
    R = u;
  else {
    var M = Object.keys(w);
    R = c ? M.sort(c) : M;
  }
  for (var k = i && wt(w) && w.length === 1 ? r + "[]" : r, F = 0; F < R.length; ++F) {
    var V = R[F], ee = typeof V == "object" && typeof V.value < "u" ? V.value : w[V];
    if (!(o && ee === null)) {
      var ue = wt(w) ? typeof n == "function" ? n(k, V) : k : k + (f ? "." + V : "[" + V + "]");
      b.set(e, O);
      var he = yd();
      he.set(ns, b), vd(I, t(
        ee,
        ue,
        n,
        i,
        a,
        o,
        n === "comma" && h && wt(w) ? null : s,
        u,
        c,
        f,
        p,
        g,
        v,
        h,
        y,
        he
      ));
    }
  }
  return I;
}, C0 = function(e) {
  if (!e)
    return Pe;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Pe.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Rn.default;
  if (typeof e.format < "u") {
    if (!S0.call(Rn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Rn.formatters[n], a = Pe.filter;
  return (typeof e.filter == "function" || wt(e.filter)) && (a = e.filter), {
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
}, k0 = function(t, e) {
  var r = t, n = C0(e), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : wt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in mc ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var u = mc[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = yd(), p = 0; p < i.length; ++p) {
    var g = i[p];
    n.skipNulls && r[g] === null || vd(o, _0(
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
}, Wr = gd, Vs = Object.prototype.hasOwnProperty, T0 = Array.isArray, Se = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Wr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, P0 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, bd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, $0 = "utf8=%26%2310003%3B", I0 = "utf8=%E2%9C%93", D0 = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === I0 ? c = "utf-8" : o[u] === $0 && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], p = f.indexOf("]="), g = p === -1 ? f.indexOf("=") : p + 1, v, h;
      g === -1 ? (v = r.decoder(f, Se.decoder, c, "key"), h = r.strictNullHandling ? null : "") : (v = r.decoder(f.slice(0, g), Se.decoder, c, "key"), h = Wr.maybeMap(
        bd(f.slice(g + 1), r),
        function(y) {
          return r.decoder(y, Se.decoder, c, "value");
        }
      )), h && r.interpretNumericEntities && c === "iso-8859-1" && (h = P0(h)), f.indexOf("[]=") > -1 && (h = T0(h) ? [h] : h), Vs.call(n, v) ? n[v] = Wr.combine(n[v], h) : n[v] = h;
    }
  return n;
}, R0 = function(t, e, r, n) {
  for (var i = n ? e : bd(e, r), a = t.length - 1; a >= 0; --a) {
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
}, N0 = function(e, r, n, i) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), c = u ? a.slice(0, u.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && Vs.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; n.depth > 0 && (u = s.exec(a)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && Vs.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), R0(f, r, n, i);
  }
}, L0 = function(e) {
  if (!e)
    return Se;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? Se.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Se.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Se.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Se.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Se.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Se.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Se.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Se.decoder,
    delimiter: typeof e.delimiter == "string" || Wr.isRegExp(e.delimiter) ? e.delimiter : Se.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Se.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Se.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Se.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Se.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Se.strictNullHandling
  };
}, F0 = function(t, e) {
  var r = L0(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? D0(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = N0(s, n[s], r, typeof t == "string");
    i = Wr.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : Wr.compact(i);
}, M0 = k0, B0 = F0, j0 = zl, yc = {
  formats: j0,
  parse: B0,
  stringify: M0
}, z0 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(ut, function() {
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
      var b = r.render(!y), w = b.querySelector(n.barSelector), _ = n.speed, O = n.easing;
      return b.offsetWidth, s(function(C) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(w, o(h, _, O)), h === 1 ? (u(b, {
          transition: "none",
          opacity: 1
        }), b.offsetWidth, setTimeout(function() {
          u(b, {
            transition: "all " + _ + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), C();
          }, _);
        }, _)) : setTimeout(C, _);
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
      var b = y.querySelector(n.barSelector), w = h ? "-100" : a(r.status || 0), _ = document.querySelector(n.parent), O;
      return u(b, {
        transition: "all 0 linear",
        transform: "translate3d(" + w + "%,0,0)"
      }), n.showSpinner || (O = y.querySelector(n.spinnerSelector), O && v(O)), _ != document.body && f(_, "nprogress-custom-parent"), _.appendChild(y), y;
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
      var w;
      return n.positionUsing === "translate3d" ? w = { transform: "translate3d(" + a(h) + "%,0,0)" } : n.positionUsing === "translate" ? w = { transform: "translate(" + a(h) + "%,0)" } : w = { "margin-left": a(h) + "%" }, w.transition = "all " + y + "ms " + b, w;
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
      function b(C) {
        return C.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function($, T) {
          return T.toUpperCase();
        });
      }
      function w(C) {
        var $ = document.body.style;
        if (C in $)
          return C;
        for (var T = h.length, I = C.charAt(0).toUpperCase() + C.slice(1), R; T--; )
          if (R = h[T] + I, R in $)
            return R;
        return C;
      }
      function _(C) {
        return C = b(C), y[C] || (y[C] = w(C));
      }
      function O(C, $, T) {
        $ = _($), C.style[$] = T;
      }
      return function(C, $) {
        var T = arguments, I, R;
        if (T.length == 2)
          for (I in $)
            R = $[I], R !== void 0 && $.hasOwnProperty(I) && O(C, I, R);
        else
          O(C, T[1], T[2]);
      };
    }();
    function c(h, y) {
      var b = typeof h == "string" ? h : g(h);
      return b.indexOf(" " + y + " ") >= 0;
    }
    function f(h, y) {
      var b = g(h), w = b + y;
      c(b, y) || (h.className = w.substring(1));
    }
    function p(h, y) {
      var b = g(h), w;
      c(h, y) && (w = b.replace(" " + y + " ", " "), h.className = w.substring(1, w.length - 1));
    }
    function g(h) {
      return (" " + (h.className || "") + " ").replace(/\s+/gi, " ");
    }
    function v(h) {
      h && h.parentNode && h.parentNode.removeChild(h);
    }
    return r;
  });
})(z0);
function wd(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function Ct(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var U0 = (t) => Ct("before", { cancelable: !0, detail: { visit: t } }), V0 = (t) => Ct("error", { detail: { errors: t } }), H0 = (t) => Ct("exception", { cancelable: !0, detail: { exception: t } }), vc = (t) => Ct("finish", { detail: { visit: t } }), W0 = (t) => Ct("invalid", { cancelable: !0, detail: { response: t } }), wn = (t) => Ct("navigate", { detail: { page: t } }), q0 = (t) => Ct("progress", { detail: { progress: t } }), G0 = (t) => Ct("start", { detail: { visit: t } }), Y0 = (t) => Ct("success", { detail: { page: t } });
function Hs(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Hs(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Hs(e));
}
function xd(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Od(e, Sd(r, n), t[n]);
  return e;
}
function Sd(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Od(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Od(t, Sd(e, n.toString()), r[n]));
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
  xd(r, t, e);
}
var K0 = { modal: null, listener: null, show(t) {
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
function Ir(t) {
  return new URL(t.toString(), window.location.toString());
}
function Ul(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = yc.stringify(Sv(yc.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function xn(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var bc = typeof window > "u", J0 = class {
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
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => wn(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", wd(this.handleScrollEvent.bind(this), 100), !0);
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
      this.restoreScrollPositions(), wn(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, xn(window.location).href === xn(t).href && window.location.reload();
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
      e.preserveScroll && this.restoreScrollPositions(), wn(t);
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
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, vc(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, vc(t), t.onFinish(t));
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
  }, onError: w = () => {
  }, queryStringArrayFormat: _ = "brackets" } = {}) {
    let O = typeof t == "string" ? Ir(t) : t;
    if ((Hs(r) || c) && !(r instanceof FormData) && (r = xd(r)), !(r instanceof FormData)) {
      let [T, I] = Ul(e, O, r, _);
      O = Ir(T), r = I;
    }
    let C = { url: O, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, headers: s, errorBag: u, forceFormData: c, queryStringArrayFormat: _, cancelled: !1, completed: !1, interrupted: !1 };
    if (p(C) === !1 || !U0(C))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let $ = this.createVisitId();
    this.activeVisit = { ...C, onCancelToken: f, onBefore: p, onStart: g, onProgress: v, onFinish: h, onCancel: y, onSuccess: b, onError: w, queryStringArrayFormat: _, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), G0(C), g(C), qu({ method: e, url: xn(O).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...u && u.length ? { "X-Inertia-Error-Bag": u } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (T) => {
      r instanceof FormData && (T.percentage = T.progress ? Math.round(T.progress * 100) : 0, q0(T), v(T));
    } }).then((T) => {
      var k;
      if (!this.isInertiaResponse(T))
        return Promise.reject({ response: T });
      let I = T.data;
      o.length && I.component === this.page.component && (I.props = { ...this.page.props, ...I.props }), i = this.resolvePreserveOption(i, I), a = this.resolvePreserveOption(a, I), a && ((k = window.history.state) != null && k.rememberedState) && I.component === this.page.component && (I.rememberedState = window.history.state.rememberedState);
      let R = O, M = Ir(I.url);
      return R.hash && !M.hash && xn(R).href === M.href && (M.hash = R.hash, I.url = M.href), this.setPage(I, { visitId: $, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let T = this.page.props.errors || {};
      if (Object.keys(T).length > 0) {
        let I = u ? T[u] ? T[u] : {} : T;
        return V0(I), w(I);
      }
      return Y0(this.page), b(this.page);
    }).catch((T) => {
      if (this.isInertiaResponse(T.response))
        return this.setPage(T.response.data, { visitId: $ });
      if (this.isLocationVisitResponse(T.response)) {
        let I = Ir(T.response.headers["x-inertia-location"]), R = O;
        R.hash && !I.hash && xn(R).href === I.href && (I.hash = R.hash), this.locationVisit(I, i === !0);
      } else if (T.response)
        W0(T.response) && K0.show(T.response.data);
      else
        return Promise.reject(T);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((T) => {
      if (!qu.isCancel(T)) {
        let I = H0(T);
        if (this.activeVisit && this.finishVisit(this.activeVisit), I)
          return Promise.reject(T);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || Ir(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || wn(t);
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
          this.restoreScrollPositions(), wn(e);
        }));
      });
    } else {
      let e = Ir(this.page.url);
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
    bc || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!bc)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let i = e(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, X0 = { buildDOMElement(t) {
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
}, update: wd(function(t) {
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
function Q0(t, e, r) {
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
    t ? r(u()) : X0.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = a();
    return { update: (p) => s(f, p), disconnect: () => o(f) };
  } };
}
function Ad(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var sr = new J0(), wa = { exports: {} };
wa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]", v = "[object Number]", h = "[object Object]", y = "[object Promise]", b = "[object RegExp]", w = "[object Set]", _ = "[object String]", O = "[object Symbol]", C = "[object WeakMap]", $ = "[object ArrayBuffer]", T = "[object DataView]", I = "[object Float32Array]", R = "[object Float64Array]", M = "[object Int8Array]", k = "[object Int16Array]", F = "[object Int32Array]", V = "[object Uint8Array]", ee = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", he = "[object Uint32Array]", xe = /[\\^$.*+?()[\]{}|]/g, kt = /\w*$/, Tt = /^\[object .+?Constructor\]$/, Pt = /^(?:0|[1-9]\d*)$/, J = {};
  J[a] = J[o] = J[$] = J[T] = J[s] = J[u] = J[I] = J[R] = J[M] = J[k] = J[F] = J[g] = J[v] = J[h] = J[b] = J[w] = J[_] = J[O] = J[V] = J[ee] = J[ue] = J[he] = !0, J[c] = J[f] = J[C] = !1;
  var $t = typeof ut == "object" && ut && ut.Object === Object && ut, Qr = typeof self == "object" && self && self.Object === Object && self, de = $t || Qr || Function("return this")(), qe = e && !e.nodeType && e, q = qe && !0 && t && !t.nodeType && t, Gt = q && q.exports === qe;
  function Zr(l, d) {
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
  function mr(l, d) {
    for (var m = -1, S = d.length, j = l.length; ++m < S; )
      l[j + m] = d[m];
    return l;
  }
  function Kt(l, d, m, S) {
    var j = -1, L = l ? l.length : 0;
    for (S && L && (m = l[++j]); ++j < L; )
      m = d(m, l[j], j, l);
    return m;
  }
  function Jt(l, d) {
    for (var m = -1, S = Array(l); ++m < l; )
      S[m] = d(m);
    return S;
  }
  function gr(l, d) {
    return l == null ? void 0 : l[d];
  }
  function en(l) {
    var d = !1;
    if (l != null && typeof l.toString != "function")
      try {
        d = !!(l + "");
      } catch {
      }
    return d;
  }
  function li(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S, j) {
      m[++d] = [j, S];
    }), m;
  }
  function tn(l, d) {
    return function(m) {
      return l(d(m));
    };
  }
  function ui(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S) {
      m[++d] = S;
    }), m;
  }
  var Qa = Array.prototype, Za = Function.prototype, yr = Object.prototype, rn = de["__core-js_shared__"], ci = function() {
    var l = /[^.]+$/.exec(rn && rn.keys && rn.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), fi = Za.toString, Ze = yr.hasOwnProperty, vr = yr.toString, eo = RegExp(
    "^" + fi.call(Ze).replace(xe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xt = Gt ? de.Buffer : void 0, br = de.Symbol, nn = de.Uint8Array, Ue = tn(Object.getPrototypeOf, Object), di = Object.create, pi = yr.propertyIsEnumerable, to = Qa.splice, an = Object.getOwnPropertySymbols, wr = Xt ? Xt.isBuffer : void 0, hi = tn(Object.keys, Object), xr = Ye(de, "DataView"), Qt = Ye(de, "Map"), Ge = Ye(de, "Promise"), Sr = Ye(de, "Set"), on = Ye(de, "WeakMap"), Zt = Ye(Object, "create"), sn = Ie(xr), er = Ie(Qt), ln = Ie(Ge), un = Ie(Sr), cn = Ie(on), It = br ? br.prototype : void 0, mi = It ? It.valueOf : void 0;
  function pt(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function ro() {
    this.__data__ = Zt ? Zt(null) : {};
  }
  function no(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function io(l) {
    var d = this.__data__;
    if (Zt) {
      var m = d[l];
      return m === n ? void 0 : m;
    }
    return Ze.call(d, l) ? d[l] : void 0;
  }
  function gi(l) {
    var d = this.__data__;
    return Zt ? d[l] !== void 0 : Ze.call(d, l);
  }
  function fn(l, d) {
    var m = this.__data__;
    return m[l] = Zt && d === void 0 ? n : d, this;
  }
  pt.prototype.clear = ro, pt.prototype.delete = no, pt.prototype.get = io, pt.prototype.has = gi, pt.prototype.set = fn;
  function Ee(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function ao() {
    this.__data__ = [];
  }
  function oo(l) {
    var d = this.__data__, m = Ar(d, l);
    if (m < 0)
      return !1;
    var S = d.length - 1;
    return m == S ? d.pop() : to.call(d, m, 1), !0;
  }
  function so(l) {
    var d = this.__data__, m = Ar(d, l);
    return m < 0 ? void 0 : d[m][1];
  }
  function lo(l) {
    return Ar(this.__data__, l) > -1;
  }
  function uo(l, d) {
    var m = this.__data__, S = Ar(m, l);
    return S < 0 ? m.push([l, d]) : m[S][1] = d, this;
  }
  Ee.prototype.clear = ao, Ee.prototype.delete = oo, Ee.prototype.get = so, Ee.prototype.has = lo, Ee.prototype.set = uo;
  function Ce(l) {
    var d = -1, m = l ? l.length : 0;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function co() {
    this.__data__ = {
      hash: new pt(),
      map: new (Qt || Ee)(),
      string: new pt()
    };
  }
  function fo(l) {
    return rr(this, l).delete(l);
  }
  function po(l) {
    return rr(this, l).get(l);
  }
  function ho(l) {
    return rr(this, l).has(l);
  }
  function mo(l, d) {
    return rr(this, l).set(l, d), this;
  }
  Ce.prototype.clear = co, Ce.prototype.delete = fo, Ce.prototype.get = po, Ce.prototype.has = ho, Ce.prototype.set = mo;
  function De(l) {
    this.__data__ = new Ee(l);
  }
  function go() {
    this.__data__ = new Ee();
  }
  function yo(l) {
    return this.__data__.delete(l);
  }
  function vo(l) {
    return this.__data__.get(l);
  }
  function bo(l) {
    return this.__data__.has(l);
  }
  function wo(l, d) {
    var m = this.__data__;
    if (m instanceof Ee) {
      var S = m.__data__;
      if (!Qt || S.length < r - 1)
        return S.push([l, d]), this;
      m = this.__data__ = new Ce(S);
    }
    return m.set(l, d), this;
  }
  De.prototype.clear = go, De.prototype.delete = yo, De.prototype.get = vo, De.prototype.has = bo, De.prototype.set = wo;
  function Or(l, d) {
    var m = mn(l) || _r(l) ? Jt(l.length, String) : [], S = m.length, j = !!S;
    for (var L in l)
      (d || Ze.call(l, L)) && !(j && (L == "length" || Ro(L, S))) && m.push(L);
    return m;
  }
  function yi(l, d, m) {
    var S = l[d];
    (!(Ze.call(l, d) && Si(S, m)) || m === void 0 && !(d in l)) && (l[d] = m);
  }
  function Ar(l, d) {
    for (var m = l.length; m--; )
      if (Si(l[m][0], d))
        return m;
    return -1;
  }
  function et(l, d) {
    return l && hn(d, yn(d), l);
  }
  function dn(l, d, m, S, j, L, G) {
    var X;
    if (S && (X = L ? S(l, j, L, G) : S(l)), X !== void 0)
      return X;
    if (!rt(l))
      return l;
    var me = mn(l);
    if (me) {
      if (X = Io(l), !d)
        return To(l, X);
    } else {
      var Q = mt(l), ke = Q == f || Q == p;
      if (Oi(l))
        return Er(l, d);
      if (Q == h || Q == a || ke && !L) {
        if (en(l))
          return L ? l : {};
        if (X = tt(ke ? {} : l), !d)
          return Po(l, et(X, l));
      } else {
        if (!J[Q])
          return L ? l : {};
        X = Do(l, Q, dn, d);
      }
    }
    G || (G = new De());
    var Re = G.get(l);
    if (Re)
      return Re;
    if (G.set(l, X), !me)
      var ve = m ? $o(l) : yn(l);
    return Yt(ve || l, function(Te, _e) {
      ve && (_e = Te, Te = l[_e]), yi(X, _e, dn(Te, d, m, S, _e, l, G));
    }), X;
  }
  function xo(l) {
    return rt(l) ? di(l) : {};
  }
  function So(l, d, m) {
    var S = d(l);
    return mn(l) ? S : mr(S, m(l));
  }
  function Oo(l) {
    return vr.call(l);
  }
  function Ao(l) {
    if (!rt(l) || Lo(l))
      return !1;
    var d = gn(l) || en(l) ? eo : Tt;
    return d.test(Ie(l));
  }
  function Eo(l) {
    if (!wi(l))
      return hi(l);
    var d = [];
    for (var m in Object(l))
      Ze.call(l, m) && m != "constructor" && d.push(m);
    return d;
  }
  function Er(l, d) {
    if (d)
      return l.slice();
    var m = new l.constructor(l.length);
    return l.copy(m), m;
  }
  function pn(l) {
    var d = new l.constructor(l.byteLength);
    return new nn(d).set(new nn(l)), d;
  }
  function tr(l, d) {
    var m = d ? pn(l.buffer) : l.buffer;
    return new l.constructor(m, l.byteOffset, l.byteLength);
  }
  function vi(l, d, m) {
    var S = d ? m(li(l), !0) : li(l);
    return Kt(S, Zr, new l.constructor());
  }
  function bi(l) {
    var d = new l.constructor(l.source, kt.exec(l));
    return d.lastIndex = l.lastIndex, d;
  }
  function _o(l, d, m) {
    var S = d ? m(ui(l), !0) : ui(l);
    return Kt(S, Le, new l.constructor());
  }
  function Co(l) {
    return mi ? Object(mi.call(l)) : {};
  }
  function ko(l, d) {
    var m = d ? pn(l.buffer) : l.buffer;
    return new l.constructor(m, l.byteOffset, l.length);
  }
  function To(l, d) {
    var m = -1, S = l.length;
    for (d || (d = Array(S)); ++m < S; )
      d[m] = l[m];
    return d;
  }
  function hn(l, d, m, S) {
    m || (m = {});
    for (var j = -1, L = d.length; ++j < L; ) {
      var G = d[j], X = S ? S(m[G], l[G], G, m, l) : void 0;
      yi(m, G, X === void 0 ? l[G] : X);
    }
    return m;
  }
  function Po(l, d) {
    return hn(l, ht(l), d);
  }
  function $o(l) {
    return So(l, yn, ht);
  }
  function rr(l, d) {
    var m = l.__data__;
    return No(d) ? m[typeof d == "string" ? "string" : "hash"] : m.map;
  }
  function Ye(l, d) {
    var m = gr(l, d);
    return Ao(m) ? m : void 0;
  }
  var ht = an ? tn(an, Object) : Mo, mt = Oo;
  (xr && mt(new xr(new ArrayBuffer(1))) != T || Qt && mt(new Qt()) != g || Ge && mt(Ge.resolve()) != y || Sr && mt(new Sr()) != w || on && mt(new on()) != C) && (mt = function(l) {
    var d = vr.call(l), m = d == h ? l.constructor : void 0, S = m ? Ie(m) : void 0;
    if (S)
      switch (S) {
        case sn:
          return T;
        case er:
          return g;
        case ln:
          return y;
        case un:
          return w;
        case cn:
          return C;
      }
    return d;
  });
  function Io(l) {
    var d = l.length, m = l.constructor(d);
    return d && typeof l[0] == "string" && Ze.call(l, "index") && (m.index = l.index, m.input = l.input), m;
  }
  function tt(l) {
    return typeof l.constructor == "function" && !wi(l) ? xo(Ue(l)) : {};
  }
  function Do(l, d, m, S) {
    var j = l.constructor;
    switch (d) {
      case $:
        return pn(l);
      case s:
      case u:
        return new j(+l);
      case T:
        return tr(l, S);
      case I:
      case R:
      case M:
      case k:
      case F:
      case V:
      case ee:
      case ue:
      case he:
        return ko(l, S);
      case g:
        return vi(l, S, m);
      case v:
      case _:
        return new j(l);
      case b:
        return bi(l);
      case w:
        return _o(l, S, m);
      case O:
        return Co(l);
    }
  }
  function Ro(l, d) {
    return d = d ?? i, !!d && (typeof l == "number" || Pt.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function No(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function Lo(l) {
    return !!ci && ci in l;
  }
  function wi(l) {
    var d = l && l.constructor, m = typeof d == "function" && d.prototype || yr;
    return l === m;
  }
  function Ie(l) {
    if (l != null) {
      try {
        return fi.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function xi(l) {
    return dn(l, !0, !0);
  }
  function Si(l, d) {
    return l === d || l !== l && d !== d;
  }
  function _r(l) {
    return Fo(l) && Ze.call(l, "callee") && (!pi.call(l, "callee") || vr.call(l) == a);
  }
  var mn = Array.isArray;
  function Cr(l) {
    return l != null && Ai(l.length) && !gn(l);
  }
  function Fo(l) {
    return Ei(l) && Cr(l);
  }
  var Oi = wr || Bo;
  function gn(l) {
    var d = rt(l) ? vr.call(l) : "";
    return d == f || d == p;
  }
  function Ai(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function rt(l) {
    var d = typeof l;
    return !!l && (d == "object" || d == "function");
  }
  function Ei(l) {
    return !!l && typeof l == "object";
  }
  function yn(l) {
    return Cr(l) ? Or(l) : Eo(l);
  }
  function Mo() {
    return [];
  }
  function Bo() {
    return !1;
  }
  t.exports = xi;
})(wa, wa.exports);
var Z0 = wa.exports;
const vt = /* @__PURE__ */ ja(Z0);
var xa = { exports: {} };
xa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", g = "[object Error]", v = "[object Function]", h = "[object GeneratorFunction]", y = "[object Map]", b = "[object Number]", w = "[object Null]", _ = "[object Object]", O = "[object Promise]", C = "[object Proxy]", $ = "[object RegExp]", T = "[object Set]", I = "[object String]", R = "[object Symbol]", M = "[object Undefined]", k = "[object WeakMap]", F = "[object ArrayBuffer]", V = "[object DataView]", ee = "[object Float32Array]", ue = "[object Float64Array]", he = "[object Int8Array]", xe = "[object Int16Array]", kt = "[object Int32Array]", Tt = "[object Uint8Array]", Pt = "[object Uint8ClampedArray]", J = "[object Uint16Array]", $t = "[object Uint32Array]", Qr = /[\\^$.*+?()[\]{}|]/g, de = /^\[object .+?Constructor\]$/, qe = /^(?:0|[1-9]\d*)$/, q = {};
  q[ee] = q[ue] = q[he] = q[xe] = q[kt] = q[Tt] = q[Pt] = q[J] = q[$t] = !0, q[s] = q[u] = q[F] = q[f] = q[V] = q[p] = q[g] = q[v] = q[y] = q[b] = q[_] = q[$] = q[T] = q[I] = q[k] = !1;
  var Gt = typeof ut == "object" && ut && ut.Object === Object && ut, Zr = typeof self == "object" && self && self.Object === Object && self, Le = Gt || Zr || Function("return this")(), Yt = e && !e.nodeType && e, mr = Yt && !0 && t && !t.nodeType && t, Kt = mr && mr.exports === Yt, Jt = Kt && Gt.process, gr = function() {
    try {
      return Jt && Jt.binding && Jt.binding("util");
    } catch {
    }
  }(), en = gr && gr.isTypedArray;
  function li(l, d) {
    for (var m = -1, S = l == null ? 0 : l.length, j = 0, L = []; ++m < S; ) {
      var G = l[m];
      d(G, m, l) && (L[j++] = G);
    }
    return L;
  }
  function tn(l, d) {
    for (var m = -1, S = d.length, j = l.length; ++m < S; )
      l[j + m] = d[m];
    return l;
  }
  function ui(l, d) {
    for (var m = -1, S = l == null ? 0 : l.length; ++m < S; )
      if (d(l[m], m, l))
        return !0;
    return !1;
  }
  function Qa(l, d) {
    for (var m = -1, S = Array(l); ++m < l; )
      S[m] = d(m);
    return S;
  }
  function Za(l) {
    return function(d) {
      return l(d);
    };
  }
  function yr(l, d) {
    return l.has(d);
  }
  function rn(l, d) {
    return l == null ? void 0 : l[d];
  }
  function ci(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S, j) {
      m[++d] = [j, S];
    }), m;
  }
  function fi(l, d) {
    return function(m) {
      return l(d(m));
    };
  }
  function Ze(l) {
    var d = -1, m = Array(l.size);
    return l.forEach(function(S) {
      m[++d] = S;
    }), m;
  }
  var vr = Array.prototype, eo = Function.prototype, Xt = Object.prototype, br = Le["__core-js_shared__"], nn = eo.toString, Ue = Xt.hasOwnProperty, di = function() {
    var l = /[^.]+$/.exec(br && br.keys && br.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), pi = Xt.toString, to = RegExp(
    "^" + nn.call(Ue).replace(Qr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), an = Kt ? Le.Buffer : void 0, wr = Le.Symbol, hi = Le.Uint8Array, xr = Xt.propertyIsEnumerable, Qt = vr.splice, Ge = wr ? wr.toStringTag : void 0, Sr = Object.getOwnPropertySymbols, on = an ? an.isBuffer : void 0, Zt = fi(Object.keys, Object), sn = ht(Le, "DataView"), er = ht(Le, "Map"), ln = ht(Le, "Promise"), un = ht(Le, "Set"), cn = ht(Le, "WeakMap"), It = ht(Object, "create"), mi = Ie(sn), pt = Ie(er), ro = Ie(ln), no = Ie(un), io = Ie(cn), gi = wr ? wr.prototype : void 0, fn = gi ? gi.valueOf : void 0;
  function Ee(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function ao() {
    this.__data__ = It ? It(null) : {}, this.size = 0;
  }
  function oo(l) {
    var d = this.has(l) && delete this.__data__[l];
    return this.size -= d ? 1 : 0, d;
  }
  function so(l) {
    var d = this.__data__;
    if (It) {
      var m = d[l];
      return m === n ? void 0 : m;
    }
    return Ue.call(d, l) ? d[l] : void 0;
  }
  function lo(l) {
    var d = this.__data__;
    return It ? d[l] !== void 0 : Ue.call(d, l);
  }
  function uo(l, d) {
    var m = this.__data__;
    return this.size += this.has(l) ? 0 : 1, m[l] = It && d === void 0 ? n : d, this;
  }
  Ee.prototype.clear = ao, Ee.prototype.delete = oo, Ee.prototype.get = so, Ee.prototype.has = lo, Ee.prototype.set = uo;
  function Ce(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function co() {
    this.__data__ = [], this.size = 0;
  }
  function fo(l) {
    var d = this.__data__, m = Er(d, l);
    if (m < 0)
      return !1;
    var S = d.length - 1;
    return m == S ? d.pop() : Qt.call(d, m, 1), --this.size, !0;
  }
  function po(l) {
    var d = this.__data__, m = Er(d, l);
    return m < 0 ? void 0 : d[m][1];
  }
  function ho(l) {
    return Er(this.__data__, l) > -1;
  }
  function mo(l, d) {
    var m = this.__data__, S = Er(m, l);
    return S < 0 ? (++this.size, m.push([l, d])) : m[S][1] = d, this;
  }
  Ce.prototype.clear = co, Ce.prototype.delete = fo, Ce.prototype.get = po, Ce.prototype.has = ho, Ce.prototype.set = mo;
  function De(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.clear(); ++d < m; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function go() {
    this.size = 0, this.__data__ = {
      hash: new Ee(),
      map: new (er || Ce)(),
      string: new Ee()
    };
  }
  function yo(l) {
    var d = Ye(this, l).delete(l);
    return this.size -= d ? 1 : 0, d;
  }
  function vo(l) {
    return Ye(this, l).get(l);
  }
  function bo(l) {
    return Ye(this, l).has(l);
  }
  function wo(l, d) {
    var m = Ye(this, l), S = m.size;
    return m.set(l, d), this.size += m.size == S ? 0 : 1, this;
  }
  De.prototype.clear = go, De.prototype.delete = yo, De.prototype.get = vo, De.prototype.has = bo, De.prototype.set = wo;
  function Or(l) {
    var d = -1, m = l == null ? 0 : l.length;
    for (this.__data__ = new De(); ++d < m; )
      this.add(l[d]);
  }
  function yi(l) {
    return this.__data__.set(l, n), this;
  }
  function Ar(l) {
    return this.__data__.has(l);
  }
  Or.prototype.add = Or.prototype.push = yi, Or.prototype.has = Ar;
  function et(l) {
    var d = this.__data__ = new Ce(l);
    this.size = d.size;
  }
  function dn() {
    this.__data__ = new Ce(), this.size = 0;
  }
  function xo(l) {
    var d = this.__data__, m = d.delete(l);
    return this.size = d.size, m;
  }
  function So(l) {
    return this.__data__.get(l);
  }
  function Oo(l) {
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
  et.prototype.clear = dn, et.prototype.delete = xo, et.prototype.get = So, et.prototype.has = Oo, et.prototype.set = Ao;
  function Eo(l, d) {
    var m = _r(l), S = !m && Si(l), j = !m && !S && Cr(l), L = !m && !S && !j && Ei(l), G = m || S || j || L, X = G ? Qa(l.length, String) : [], me = X.length;
    for (var Q in l)
      (d || Ue.call(l, Q)) && !(G && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      j && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      L && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
      Do(Q, me))) && X.push(Q);
    return X;
  }
  function Er(l, d) {
    for (var m = l.length; m--; )
      if (xi(l[m][0], d))
        return m;
    return -1;
  }
  function pn(l, d, m) {
    var S = d(l);
    return _r(l) ? S : tn(S, m(l));
  }
  function tr(l) {
    return l == null ? l === void 0 ? M : w : Ge && Ge in Object(l) ? mt(l) : wi(l);
  }
  function vi(l) {
    return rt(l) && tr(l) == s;
  }
  function bi(l, d, m, S, j) {
    return l === d ? !0 : l == null || d == null || !rt(l) && !rt(d) ? l !== l && d !== d : _o(l, d, m, S, bi, j);
  }
  function _o(l, d, m, S, j, L) {
    var G = _r(l), X = _r(d), me = G ? u : tt(l), Q = X ? u : tt(d);
    me = me == s ? _ : me, Q = Q == s ? _ : Q;
    var ke = me == _, Re = Q == _, ve = me == Q;
    if (ve && Cr(l)) {
      if (!Cr(d))
        return !1;
      G = !0, ke = !1;
    }
    if (ve && !ke)
      return L || (L = new et()), G || Ei(l) ? hn(l, d, m, S, j, L) : Po(l, d, me, m, S, j, L);
    if (!(m & i)) {
      var Te = ke && Ue.call(l, "__wrapped__"), _e = Re && Ue.call(d, "__wrapped__");
      if (Te || _e) {
        var Dt = Te ? l.value() : l, gt = _e ? d.value() : d;
        return L || (L = new et()), j(Dt, gt, m, S, L);
      }
    }
    return ve ? (L || (L = new et()), $o(l, d, m, S, j, L)) : !1;
  }
  function Co(l) {
    if (!Ai(l) || No(l))
      return !1;
    var d = Oi(l) ? to : de;
    return d.test(Ie(l));
  }
  function ko(l) {
    return rt(l) && gn(l.length) && !!q[tr(l)];
  }
  function To(l) {
    if (!Lo(l))
      return Zt(l);
    var d = [];
    for (var m in Object(l))
      Ue.call(l, m) && m != "constructor" && d.push(m);
    return d;
  }
  function hn(l, d, m, S, j, L) {
    var G = m & i, X = l.length, me = d.length;
    if (X != me && !(G && me > X))
      return !1;
    var Q = L.get(l);
    if (Q && L.get(d))
      return Q == d;
    var ke = -1, Re = !0, ve = m & a ? new Or() : void 0;
    for (L.set(l, d), L.set(d, l); ++ke < X; ) {
      var Te = l[ke], _e = d[ke];
      if (S)
        var Dt = G ? S(_e, Te, ke, d, l, L) : S(Te, _e, ke, l, d, L);
      if (Dt !== void 0) {
        if (Dt)
          continue;
        Re = !1;
        break;
      }
      if (ve) {
        if (!ui(d, function(gt, nr) {
          if (!yr(ve, nr) && (Te === gt || j(Te, gt, m, S, L)))
            return ve.push(nr);
        })) {
          Re = !1;
          break;
        }
      } else if (!(Te === _e || j(Te, _e, m, S, L))) {
        Re = !1;
        break;
      }
    }
    return L.delete(l), L.delete(d), Re;
  }
  function Po(l, d, m, S, j, L, G) {
    switch (m) {
      case V:
        if (l.byteLength != d.byteLength || l.byteOffset != d.byteOffset)
          return !1;
        l = l.buffer, d = d.buffer;
      case F:
        return !(l.byteLength != d.byteLength || !L(new hi(l), new hi(d)));
      case f:
      case p:
      case b:
        return xi(+l, +d);
      case g:
        return l.name == d.name && l.message == d.message;
      case $:
      case I:
        return l == d + "";
      case y:
        var X = ci;
      case T:
        var me = S & i;
        if (X || (X = Ze), l.size != d.size && !me)
          return !1;
        var Q = G.get(l);
        if (Q)
          return Q == d;
        S |= a, G.set(l, d);
        var ke = hn(X(l), X(d), S, j, L, G);
        return G.delete(l), ke;
      case R:
        if (fn)
          return fn.call(l) == fn.call(d);
    }
    return !1;
  }
  function $o(l, d, m, S, j, L) {
    var G = m & i, X = rr(l), me = X.length, Q = rr(d), ke = Q.length;
    if (me != ke && !G)
      return !1;
    for (var Re = me; Re--; ) {
      var ve = X[Re];
      if (!(G ? ve in d : Ue.call(d, ve)))
        return !1;
    }
    var Te = L.get(l);
    if (Te && L.get(d))
      return Te == d;
    var _e = !0;
    L.set(l, d), L.set(d, l);
    for (var Dt = G; ++Re < me; ) {
      ve = X[Re];
      var gt = l[ve], nr = d[ve];
      if (S)
        var eu = G ? S(nr, gt, ve, d, l, L) : S(gt, nr, ve, l, d, L);
      if (!(eu === void 0 ? gt === nr || j(gt, nr, m, S, L) : eu)) {
        _e = !1;
        break;
      }
      Dt || (Dt = ve == "constructor");
    }
    if (_e && !Dt) {
      var _i = l.constructor, Ci = d.constructor;
      _i != Ci && "constructor" in l && "constructor" in d && !(typeof _i == "function" && _i instanceof _i && typeof Ci == "function" && Ci instanceof Ci) && (_e = !1);
    }
    return L.delete(l), L.delete(d), _e;
  }
  function rr(l) {
    return pn(l, yn, Io);
  }
  function Ye(l, d) {
    var m = l.__data__;
    return Ro(d) ? m[typeof d == "string" ? "string" : "hash"] : m.map;
  }
  function ht(l, d) {
    var m = rn(l, d);
    return Co(m) ? m : void 0;
  }
  function mt(l) {
    var d = Ue.call(l, Ge), m = l[Ge];
    try {
      l[Ge] = void 0;
      var S = !0;
    } catch {
    }
    var j = pi.call(l);
    return S && (d ? l[Ge] = m : delete l[Ge]), j;
  }
  var Io = Sr ? function(l) {
    return l == null ? [] : (l = Object(l), li(Sr(l), function(d) {
      return xr.call(l, d);
    }));
  } : Mo, tt = tr;
  (sn && tt(new sn(new ArrayBuffer(1))) != V || er && tt(new er()) != y || ln && tt(ln.resolve()) != O || un && tt(new un()) != T || cn && tt(new cn()) != k) && (tt = function(l) {
    var d = tr(l), m = d == _ ? l.constructor : void 0, S = m ? Ie(m) : "";
    if (S)
      switch (S) {
        case mi:
          return V;
        case pt:
          return y;
        case ro:
          return O;
        case no:
          return T;
        case io:
          return k;
      }
    return d;
  });
  function Do(l, d) {
    return d = d ?? o, !!d && (typeof l == "number" || qe.test(l)) && l > -1 && l % 1 == 0 && l < d;
  }
  function Ro(l) {
    var d = typeof l;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? l !== "__proto__" : l === null;
  }
  function No(l) {
    return !!di && di in l;
  }
  function Lo(l) {
    var d = l && l.constructor, m = typeof d == "function" && d.prototype || Xt;
    return l === m;
  }
  function wi(l) {
    return pi.call(l);
  }
  function Ie(l) {
    if (l != null) {
      try {
        return nn.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function xi(l, d) {
    return l === d || l !== l && d !== d;
  }
  var Si = vi(function() {
    return arguments;
  }()) ? vi : function(l) {
    return rt(l) && Ue.call(l, "callee") && !xr.call(l, "callee");
  }, _r = Array.isArray;
  function mn(l) {
    return l != null && gn(l.length) && !Oi(l);
  }
  var Cr = on || Bo;
  function Fo(l, d) {
    return bi(l, d);
  }
  function Oi(l) {
    if (!Ai(l))
      return !1;
    var d = tr(l);
    return d == v || d == h || d == c || d == C;
  }
  function gn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Ai(l) {
    var d = typeof l;
    return l != null && (d == "object" || d == "function");
  }
  function rt(l) {
    return l != null && typeof l == "object";
  }
  var Ei = en ? Za(en) : ko;
  function yn(l) {
    return mn(l) ? Eo(l) : To(l);
  }
  function Mo() {
    return [];
  }
  function Bo() {
    return !1;
  }
  t.exports = Fo;
})(xa, xa.exports);
var e1 = xa.exports;
const t1 = /* @__PURE__ */ ja(e1);
function r1(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? sr.restore(r) : null, a = vt(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = pl({ ...i ? i.data : vt(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((f, p) => (f[p] = this[p], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, p) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? a = this.data() : a = Object.assign({}, vt(a), typeof f == "string" ? { [f]: p } : f), this;
  }, reset(...f) {
    let p = vt(typeof n == "object" ? a : n()), g = vt(p);
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
      return a = vt(this.data()), this.isDirty = !1, b;
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
  return Ta(c, (f) => {
    c.isDirty = !t1(c.data(), a), r && sr.remember(vt(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var Fe = be(null), ot = be(null), is = Np(null), ji = be(null), wc = null;
dr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  Fe.value = e ? tu(e) : null, ot.value = t, ji.value = null;
  let a = typeof window > "u";
  return wc = Q0(a, n, i), a || (sr.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    Fe.value = tu(o.component), ot.value = o.page, ji.value = o.preserveState ? ji.value : Date.now();
  } }), sr.on("navigate", () => wc.forceUpdate())), () => {
    if (Fe.value) {
      Fe.value.inheritAttrs = !!Fe.value.inheritAttrs;
      let o = jt(Fe.value, { ...ot.value.props, key: ji.value });
      return is.value && (Fe.value.layout = is.value, is.value = null), Fe.value.layout ? typeof Fe.value.layout == "function" ? Fe.value.layout(jt, o) : (Array.isArray(Fe.value.layout) ? Fe.value.layout : [Fe.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, jt(u, { ...ot.value.props }, () => s))) : o;
    }
  };
} });
function n1() {
  return pl({ props: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.props;
  }), url: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.url;
  }), component: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.component;
  }), version: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.version;
  }), scrollRegions: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: re(() => {
    var t;
    return (t = ot.value) == null ? void 0 : t.rememberedState;
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
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Ul(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), jt(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      Ad(s) && (s.preventDefault(), sr.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function $O(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function i1(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function IO(t) {
  return n1().props.auth.permissions.includes(t);
}
let Ws = null;
function DO(t) {
  Ws = t;
}
function za() {
  return Ws === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Ws;
}
const ct = dr({
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
      const n = za(), i = t.as.toLowerCase(), a = t.method.toLowerCase(), [o, s] = Ul(
        a,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`
      ), jt(
        t.as,
        {
          ...r,
          ...i === "a" ? { href: o } : {},
          onClick: (u) => {
            Ad(u) && (u.preventDefault(), n.visit(o, {
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
function ii(t, e, r, n) {
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
function ai(t, e) {
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
function a1(t, e) {
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
function o1() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(a1(arguments[e]));
  return t;
}
var s1 = /* @__PURE__ */ new Map([
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
function Ua(t, e) {
  var r = l1(t);
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
function l1(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = s1.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var u1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function c1(t) {
  return ii(this, void 0, void 0, function() {
    return ai(this, function(e) {
      return [2, f1(t) && t.dataTransfer ? h1(t.dataTransfer, t.type) : d1(t)];
    });
  });
}
function f1(t) {
  return !!t.dataTransfer;
}
function d1(t) {
  var e = p1(t.target) ? t.target.files ? qs(t.target.files) : [] : [];
  return e.map(function(r) {
    return Ua(r);
  });
}
function p1(t) {
  return t !== null;
}
function h1(t, e) {
  return ii(this, void 0, void 0, function() {
    var r, n;
    return ai(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = qs(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(m1))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, xc(Ed(n))];
        case 2:
          return [2, xc(qs(t.files).map(function(a) {
            return Ua(a);
          }))];
      }
    });
  });
}
function xc(t) {
  return t.filter(function(e) {
    return u1.indexOf(e.name) === -1;
  });
}
function qs(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function m1(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Sc(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? _d(e) : Sc(t);
}
function Ed(t) {
  return t.reduce(function(e, r) {
    return o1(e, Array.isArray(r) ? Ed(r) : [r]);
  }, []);
}
function Sc(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Ua(e);
  return Promise.resolve(r);
}
function g1(t) {
  return ii(this, void 0, void 0, function() {
    return ai(this, function(e) {
      return [2, t.isDirectory ? _d(t) : y1(t)];
    });
  });
}
function _d(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var i = [];
    function a() {
      var o = this;
      e.readEntries(function(s) {
        return ii(o, void 0, void 0, function() {
          var u, c, f;
          return ai(this, function(p) {
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
                f = Promise.all(s.map(g1)), i.push(f), a(), p.label = 6;
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
function y1(t) {
  return ii(this, void 0, void 0, function() {
    return ai(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(i) {
          var a = Ua(i, t.fullPath);
          r(a);
        }, function(i) {
          n(i);
        });
      })];
    });
  });
}
var Cd = function(t, e) {
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
function Oc(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function v1(t, e, r, n) {
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
function b1(t, e) {
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
function Gs(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function w1(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function x1(t) {
  return t.includes("Edge/");
}
function S1(t) {
  return t === void 0 && (t = window.navigator.userAgent), w1(t) || x1(t);
}
function Ac(t) {
  t.preventDefault();
}
function zi(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function Sa(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var O1 = "file-invalid-type", A1 = "file-too-large", E1 = "file-too-small", _1 = "too-many-files", C1 = {
  code: _1,
  message: "Too many files"
}, k1 = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: O1,
    message: "File type must be ".concat(e)
  };
};
function Sn(t) {
  return t != null;
}
var T1 = Cd.default, P1 = T1 || Cd;
function kd(t, e) {
  var r = t.type === "application/x-moz-file" || P1(t, e);
  return [r, r ? null : k1(e)];
}
var Ec = function(t) {
  return {
    code: A1,
    message: "File is larger than ".concat(t, " bytes")
  };
}, _c = function(t) {
  return {
    code: E1,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Td(t, e, r) {
  if (Sn(t.size) && t.size)
    if (Sn(e) && Sn(r)) {
      if (t.size > r)
        return [!1, Ec(r)];
      if (t.size < e)
        return [!1, _c(e)];
    } else {
      if (Sn(e) && t.size < e)
        return [!1, _c(e)];
      if (Sn(r) && t.size > r)
        return [!1, Ec(r)];
    }
  return [!0, null];
}
function bt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return t.some(function(a) {
      return !Sa(r) && a && a.apply(void 0, Gs([r], n, !1)), Sa(r);
    });
  };
}
function $1(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = kd(s, r)[0], c = Td(s, n, i)[0];
    return u && c;
  });
}
var I1 = {
  disabled: !1,
  getFilesFromEvent: c1,
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
function Pd(t) {
  t === void 0 && (t = {});
  var e = be(Me(Me({}, I1), t));
  Ta(function() {
    return Me({}, t);
  }, function(k) {
    e.value = Me(Me({}, e.value), k);
  });
  var r = be(), n = be(), i = pl({
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
    var k = e.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var F = n.value.files;
        F && !F.length && (i.isFileDialogActive = !1, typeof k == "function" && k());
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
    var k = e.value.noClick;
    k || (S1() ? setTimeout(a, 0) : a());
  }
  var f = be([]), p = function(k) {
    if (r.value) {
      var F = r.value.$el || r.value;
      F.contains(k.target) || (k.preventDefault(), f.value = []);
    }
  };
  Wt(function() {
    window.addEventListener("focus", o, !1);
    var k = e.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", Ac, !1), document.addEventListener("drop", p, !1));
  }), Kn(function() {
    window.removeEventListener("focus", o, !1);
    var k = e.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", Ac), document.removeEventListener("drop", p));
  });
  function g(k) {
    var F = e.value.noDragEventsBubbling;
    F && k.stopPropagation();
  }
  function v(k) {
    return v1(this, void 0, void 0, function() {
      var F, V, ee, ue, he;
      return b1(this, function(xe) {
        switch (xe.label) {
          case 0:
            return F = e.value, V = F.getFilesFromEvent, ee = F.noDragEventsBubbling, ue = F.onDragEnter, k.preventDefault(), g(k), f.value = Gs(Gs([], f.value, !0), [k.target], !1), zi(k) ? V ? [4, V(k)] : [2] : [3, 2];
          case 1:
            if (he = xe.sent(), he || (he = []), Sa(k) && !ee)
              return [2];
            i.draggedFiles = he, i.isDragActive = !0, ue && ue(k), xe.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function h(k) {
    var F = e.value.onDragOver;
    if (k.preventDefault(), g(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return zi(k) && F && F(k), !1;
  }
  function y(k) {
    k.preventDefault(), g(k);
    var F = f.value.filter(function(ue) {
      if (!r.value)
        return !1;
      var he = r.value.$el || r.value;
      return he.contains(ue);
    }), V = F.indexOf(k.target);
    if (V !== -1 && F.splice(V, 1), f.value = F, !(F.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var ee = e.value.onDragLeave;
      zi(k) && ee && ee(k);
    }
  }
  function b(k) {
    k.preventDefault(), g(k), f.value = [];
    var F = e.value, V = F.getFilesFromEvent, ee = F.noDragEventsBubbling, ue = F.accept, he = F.minSize, xe = F.maxSize, kt = F.multiple, Tt = F.maxFiles, Pt = F.onDrop, J = F.onDropRejected, $t = F.onDropAccepted;
    if (zi(k)) {
      if (!V)
        return;
      Promise.resolve(V(k)).then(function(Qr) {
        if (!(Sa(k) && !ee)) {
          var de = [], qe = [];
          Qr.forEach(function(q) {
            var Gt = kd(q, ue), Zr = Gt[0], Le = Gt[1], Yt = Td(q, he, xe), mr = Yt[0], Kt = Yt[1];
            if (Zr && mr)
              de.push(q);
            else {
              var Jt = [Le, Kt].filter(function(gr) {
                return gr;
              });
              qe.push({ file: q, errors: Jt });
            }
          }), (!kt && de.length > 1 || kt && Tt >= 1 && de.length > Tt) && (de.forEach(function(q) {
            qe.push({ file: q, errors: [C1] });
          }), de.splice(0)), i.acceptedFiles = de, i.fileRejections = qe, Pt && Pt(de, qe, k), qe.length > 0 && J && J(qe, k), de.length > 0 && $t && $t(de, k);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var w = function(k) {
    return e.value.disabled ? void 0 : k;
  }, _ = function(k) {
    return e.value.noKeyboard ? void 0 : w(k);
  }, O = function(k) {
    return e.value.noDrag ? void 0 : w(k);
  }, C = function(k) {
    k === void 0 && (k = {});
    var F = k.onFocus, V = k.onBlur, ee = k.onClick, ue = k.onDragEnter, he = k.onDragenter, xe = k.onDragOver, kt = k.onDragover, Tt = k.onDragLeave, Pt = k.onDragleave, J = k.onDrop, $t = Oc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Me(Me({ onFocus: _(bt(F, s)), onBlur: _(bt(V, u)), onClick: w(bt(ee, c)), onDragenter: O(bt(ue, he, v)), onDragover: O(bt(xe, kt, h)), onDragleave: O(bt(Tt, Pt, y)), onDrop: O(bt(J, b)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), $t);
  }, $ = function(k) {
    k.stopPropagation();
  };
  function T(k) {
    k === void 0 && (k = {});
    var F = k.onChange, V = k.onClick, ee = Oc(k, ["onChange", "onClick"]), ue = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: w(bt(F, b)),
      onClick: w(bt(V, $)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Me(Me({}, ue), ee);
  }
  var I = re(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), R = re(function() {
    return I.value > 0 && $1({
      files: i.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), M = re(function() {
    return I.value > 0 && !R.value;
  });
  return Me(Me({}, Lp(i)), { isDragAccept: R, isDragReject: M, isFocused: re(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: C, getInputProps: T, rootRef: r, inputRef: n, open: w(a) });
}
const D1 = { class: "flex w-full flex-col" }, R1 = {
  key: 0,
  class: "select-none text-black"
}, N1 = ["name"], L1 = {
  key: 1,
  class: "select-none"
}, F1 = { key: 2 }, M1 = {
  key: 3,
  class: "select-none"
}, RO = {
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
    za();
    const e = t, r = be(null), n = (c) => {
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
    }, { getRootProps: a, getInputProps: o, isDragActive: s, ...u } = Pd({
      onDrop: i,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var p;
      return x(), E("div", D1, [
        P("div", {
          class: K(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": B(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          P("div", Ln({ class: "p-4' font-medium flex h-20 w-full cursor-copy flex-col items-center justify-center" }, B(a)()), [
            t.label ? (x(), E("p", R1, U(t.label), 1)) : z("", !0),
            P("input", Ln(B(o)(), { name: t.field }), null, 16, N1),
            B(s) ? (x(), E("span", L1, "Drop the " + U(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (x(), E("span", F1, U(((p = t.form[t.field]) == null ? void 0 : p.path) ?? "File prepared"), 1)) : (x(), E("span", M1, "Drag 'n' drop " + U(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        ge(B(Zn), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, B1 = { class: "flex w-full" }, j1 = { key: 0 }, z1 = { key: 1 }, U1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, V1 = ["onClick"], H1 = /* @__PURE__ */ P("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), W1 = ["src"], q1 = ["value"], G1 = { class: "flex items-center gap-4" }, Y1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, K1 = {
  key: 1,
  class: "mt-2"
}, J1 = /* @__PURE__ */ P("hr", null, null, -1), X1 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, Q1 = { class: "-m-1 flex flex-wrap md:-m-2" }, Z1 = { class: "flex w-1/3 flex-wrap" }, ew = { class: "h-full w-full p-1 shadow md:p-2" }, tw = ["src"], NO = {
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
    const e = za(), r = t, n = r1({
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
    const { getRootProps: u, getInputProps: c, ...f } = Pd({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (p, g) => (x(), E(ce, null, [
      t.canUpload ? (x(), E("form", {
        key: 0,
        onSubmit: Mt(i, ["prevent"]),
        class: "w-full"
      }, [
        P("div", B1, [
          P("div", {
            class: K(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": p.dragEneted }])
          }, [
            P("div", Ln({ class: "p-4' font-medium flex h-20 w-full cursor-copy items-center justify-center" }, B(u)()), [
              P("input", Ve(Ke(B(c)())), null, 16),
              p.isDragActive ? (x(), E("span", j1, "Drop the files here ...")) : (x(), E("span", z1, "Drag 'n' drop images here"))
            ], 16),
            B(n).image.length > 0 ? (x(), E("div", U1, [
              (x(!0), E(ce, null, Qe(B(n).image, (v, h) => (x(), E("div", {
                class: "relative cursor-pointer select-none",
                onClick: (y) => s(h),
                key: h
              }, [
                H1,
                P("img", {
                  src: v.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, W1)
              ], 8, V1))), 128))
            ])) : z("", !0)
          ], 2),
          ge(B(Tp), {
            class: K(["inline rounded-l-none", { "cursor-not-allowed": B(n).image.length == 0 }]),
            disabled: B(n).image.length == 0
          }, {
            default: Ae(() => [
              pe(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          B(n).progress ? (x(), E("progress", {
            key: 0,
            value: B(n).progress.percentage,
            max: "100"
          }, U(B(n).progress.percentage) + "% ", 9, q1)) : z("", !0)
        ]),
        p.$page.props.errors.image ? (x(), se(B(Zn), {
          key: 0,
          class: "mt-2",
          message: p.$page.props.errors.image
        }, null, 8, ["message"])) : z("", !0),
        P("div", G1, [
          ge(Fr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: Ae(() => [
              B(n).recentlySuccessful ? (x(), E("p", Y1, " Images uploaded. ")) : z("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : z("", !0),
      t.images.length ? (x(), E("div", K1, [
        J1,
        P("div", X1, [
          P("div", Q1, [
            (x(!0), E(ce, null, Qe(t.images, (v) => (x(), E("div", Z1, [
              P("div", ew, [
                P("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: v.url
                }, null, 8, tw),
                t.canUpload ? (x(), se(B(ct), {
                  key: 0,
                  href: p.route("images.delete", v.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: Ae(() => [
                    pe(" Delete Image ")
                  ]),
                  _: 2
                }, 1032, ["href"])) : z("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : z("", !0)
    ], 64));
  }
}, rw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, nw = ["name", "value", "id", "checked"], iw = ["for"], LO = {
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
    return (i, a) => (x(), E("div", rw, [
      P("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 ring-accent focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, nw),
      P("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, U(t.label), 9, iw)
    ]));
  }
}, aw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, ow = {
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
    return (e, r) => (x(), se(B(Tp), {
      disabled: t.form.processing || t.disabled,
      type: t.type,
      class: "focusable"
    }, {
      default: Ae(() => [
        P("div", {
          class: K({ "opacity-25": t.form.processing })
        }, [
          H(e.$slots, "default")
        ], 2),
        t.form.processing ? (x(), E("div", aw, [
          ge(B(Pp), { class: "aspect-square !h-full !w-auto text-white" })
        ])) : z("", !0)
      ]),
      _: 3
    }, 8, ["disabled", "type"]));
  }
}, sw = ["id"], lw = {
  key: 0,
  class: "text-sm text-gray-600"
}, uw = { class: "flex flex-col" }, FO = {
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
    const e = t, r = be(null), n = be(null), i = be(null), a = be(null), o = () => {
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
    return e.sticky && (Wt(() => {
      Fp(() => {
        u(), window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), n.value.addEventListener("scroll", s, {
          passive: !0
        });
      });
    }), Kn(() => {
      var c;
      window.removeEventListener("scroll", o), window.removeEventListener("resize", u), (c = n.value) == null || c.removeEventListener("scroll", s);
    })), (c, f) => (x(), E("div", {
      class: K({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (x(), E("p", lw, "Found: " + U(t.total), 1)) : z("", !0),
      P("div", uw, [
        P("div", {
          class: K({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: n
        }, [
          P("table", {
            class: K(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-pink-500": t.collapsable
            }]),
            ref_key: "table",
            ref: r
          }, [
            t.sticky ? (x(), E("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: i,
              class: "fixed hidden w-full overflow-hidden bg-neutral-100"
            }, [
              P("div", {
                ref_key: "sticky_header",
                ref: a,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : z("", !0),
            H(c.$slots, "default")
          ], 2)
        ], 2)
      ]),
      t.links ? (x(), se(B(kp), {
        key: 1,
        class: "mt-6",
        links: t.links
      }, null, 8, ["links"])) : z("", !0)
    ], 10, sw));
  }
}, Vl = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, cw = {}, fw = { class: "font-medium border-b bg-neutral-100 dark:border-neutral-500" };
function dw(t, e) {
  return x(), E("thead", fw, [
    H(t.$slots, "default")
  ]);
}
const MO = /* @__PURE__ */ Vl(cw, [["render", dw]]);
var pw = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, hw = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, mw = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, gw = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, yw = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, vw = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, bw = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
};
const ww = {
  key: 0,
  class: "order-arrows absolute right-3 top-0 flex h-full items-center md:right-4"
}, BO = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    Ra.add(gw, pw);
    const e = t, r = be("asc"), n = be(!1);
    let i = null;
    const a = za();
    Wt(() => {
      e.orderBy && (i = a.on("navigate", o));
    }), Kn(() => {
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
    return (c, f) => (x(), E("th", {
      scope: "col",
      class: K(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      H(c.$slots, "default"),
      t.orderBy ? (x(), E("span", ww, [
        ge(B(ha), {
          icon: "fa-sort-up",
          class: K(["absolute", u("desc")])
        }, null, 8, ["class"]),
        ge(B(ha), {
          icon: "fa-sort-down",
          class: K(["absolute", u("asc")])
        }, null, 8, ["class"])
      ])) : z("", !0)
    ], 2));
  }
}, xw = {}, Sw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function Ow(t, e) {
  return x(), E("td", Sw, [
    H(t.$slots, "default")
  ]);
}
const jO = /* @__PURE__ */ Vl(xw, [["render", Ow]]), Aw = ["data-te-target", "aria-controls"], zO = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (x(), E("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      H(e.$slots, "default")
    ], 8, Aw));
  }
};
var Hl = { exports: {} }, ne = String, $d = function() {
  return { isColorSupported: !1, reset: ne, bold: ne, dim: ne, italic: ne, underline: ne, inverse: ne, hidden: ne, strikethrough: ne, black: ne, red: ne, green: ne, yellow: ne, blue: ne, magenta: ne, cyan: ne, white: ne, gray: ne, bgBlack: ne, bgRed: ne, bgGreen: ne, bgYellow: ne, bgBlue: ne, bgMagenta: ne, bgCyan: ne, bgWhite: ne };
};
Hl.exports = $d();
Hl.exports.createColors = $d;
var Ew = Hl.exports;
let Cc = Ew, kc = We, Ys = class Id extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Id);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Cc.isColorSupported), kc && e && (r = kc(r));
    let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), o = String(a).length, s, u;
    if (e) {
      let { bold: c, gray: f, red: p } = Cc.createColors(!0);
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
var Wl = Ys;
Ys.default = Ys;
var oi = {};
oi.isClean = Symbol("isClean");
oi.my = Symbol("my");
const Tc = {
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
function _w(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Ks = class {
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
      return Tc[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + _w(n);
      this[s] ? i = this[s](o, e) : o.walk((u) => {
        if (i = u.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = Tc[n]), o.rawCache[n] = i, i;
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
var Dd = Ks;
Ks.default = Ks;
let Cw = Dd;
function Js(t, e) {
  new Cw(e).stringify(t);
}
var Va = Js;
Js.default = Js;
let { isClean: Ui, my: kw } = oi, Tw = Wl, Pw = Dd, $w = Va;
function Xs(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let i = t[n], a = typeof i;
    n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((o) => Xs(o, r)) : (a === "object" && i !== null && (i = Xs(i)), r[n] = i);
  }
  return r;
}
let Qs = class {
  constructor(e = {}) {
    this.raws = {}, this[Ui] = !1, this[kw] = !0;
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
    let r = Xs(this);
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
    return new Tw(e);
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
    if (this[Ui]) {
      this[Ui] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Ui] = !1;
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
    return new Pw().raw(this, e, r);
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
  toString(e = $w) {
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
var Ha = Qs;
Qs.default = Qs;
let Iw = Ha, Zs = class extends Iw {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Wa = Zs;
Zs.default = Zs;
let Dw = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Rw = (t, e = 21) => (r = e) => {
  let n = "", i = r;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, Nw = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += Dw[Math.random() * 64 | 0];
  return e;
};
var Lw = { nanoid: Nw, customAlphabet: Rw };
let { SourceMapConsumer: Pc, SourceMapGenerator: $c } = We, { existsSync: Fw, readFileSync: Mw } = We, { dirname: as, join: Bw } = We;
function jw(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let el = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = as(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Pc(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
    if (i.test(e) || a.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return jw(e.substr(RegExp.lastMatch.length));
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
    if (this.root = as(e), Fw(e))
      return this.mapFile = e, Mw(e, "utf-8").toString().trim();
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
        if (r instanceof Pc)
          return $c.fromSourceMap(r).toString();
        if (r instanceof $c)
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
        return e && (n = Bw(as(e), n)), this.loadFile(n);
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
var Rd = el;
el.default = el;
let { SourceMapConsumer: zw, SourceMapGenerator: Uw } = We, { fileURLToPath: Ic, pathToFileURL: Vi } = We, { isAbsolute: tl, resolve: rl } = We, { nanoid: Vw } = Lw, os = We, Dc = Wl, Hw = Rd, ss = Symbol("fromOffsetCache"), Ww = !!(zw && Uw), Rc = !!(rl && tl), Oa = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Rc || /^\w+:\/\//.test(r.from) || tl(r.from) ? this.file = r.from : this.file = rl(r.from)), Rc && Ww) {
      let n = new Hw(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Vw(6) + ">"), this.map && (this.map.file = this.from);
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
    return u ? a = new Dc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      i.plugin
    ) : a = new Dc(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: s, line: o },
      this.css,
      this.file,
      i.plugin
    ), a.input = { column: n, endColumn: s, endLine: o, line: r, source: this.css }, this.file && (Vi && (a.input.url = Vi(this.file).toString()), a.input.file = this.file), a;
  }
  fromOffset(e) {
    let r, n;
    if (this[ss])
      n = this[ss];
    else {
      let a = this.css.split(`
`);
      n = new Array(a.length);
      let o = 0;
      for (let s = 0, u = a.length; s < u; s++)
        n[s] = o, o += a[s].length + 1;
      this[ss] = n;
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
    return /^\w+:\/\//.test(e) ? e : rl(this.map.consumer().sourceRoot || this.map.root || ".", e);
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
    tl(o.source) ? u = Vi(o.source) : u = new URL(
      o.source,
      this.map.consumer().sourceRoot || Vi(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: u.toString()
    };
    if (u.protocol === "file:")
      if (Ic)
        c.file = Ic(u);
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
var qa = Oa;
Oa.default = Oa;
os && os.registerInput && os.registerInput(Oa);
let { SourceMapConsumer: Nd, SourceMapGenerator: oa } = We, { dirname: sa, relative: Ld, resolve: Fd, sep: Md } = We, { pathToFileURL: Nc } = We, qw = qa, Gw = !!(Nd && oa), Yw = !!(sa && Fd && Ld && Md), Kw = class {
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
      let r = this.toUrl(this.path(e.file)), n = e.root || sa(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new Nd(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), Yw && Gw && this.isMap())
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
      e.file = this.outputFile(), this.map = oa.fromSourceMap(e);
    } else
      this.map = new oa({ file: this.outputFile() }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new oa({ file: this.outputFile() });
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
    let n = this.opts.to ? sa(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = sa(Fd(n, this.mapOpts.annotation)));
    let i = Ld(n, e);
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
        let e = new qw(this.originalCSS, this.opts);
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
    if (Nc) {
      let n = Nc(e).toString();
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
    Md === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var Bd = Kw;
let Jw = Ha, nl = class extends Jw {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ga = nl;
nl.default = nl;
let { isClean: jd, my: zd } = oi, Ud = Wa, Vd = Ga, Xw = Ha, Hd, ql, Gl, Wd;
function qd(t) {
  return t.map((e) => (e.nodes && (e.nodes = qd(e.nodes)), delete e.source, e));
}
function Gd(t) {
  if (t[jd] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      Gd(e);
}
let Et = class Yd extends Xw {
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
      e = qd(Hd(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Ud(e)];
    } else if (e.selector)
      e = [new ql(e)];
    else if (e.name)
      e = [new Gl(e)];
    else if (e.text)
      e = [new Vd(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[zd] || Yd.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[jd] && Gd(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
  Hd = t;
};
Et.registerRule = (t) => {
  ql = t;
};
Et.registerAtRule = (t) => {
  Gl = t;
};
Et.registerRoot = (t) => {
  Wd = t;
};
var hr = Et;
Et.default = Et;
Et.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Gl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, ql.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, Ud.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Vd.prototype) : t.type === "root" && Object.setPrototypeOf(t, Wd.prototype), t[zd] = !0, t.nodes && t.nodes.forEach((e) => {
    Et.rebuild(e);
  });
};
let Qw = hr, Kd, Jd, Hn = class extends Qw {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Kd(new Jd(), this, e).stringify();
  }
};
Hn.registerLazyResult = (t) => {
  Kd = t;
};
Hn.registerProcessor = (t) => {
  Jd = t;
};
var Yl = Hn;
Hn.default = Hn;
let Lc = {};
var Xd = function(e) {
  Lc[e] || (Lc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let il = class {
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
var Qd = il;
il.default = il;
let Zw = Qd, al = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new Zw(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Kl = al;
al.default = al;
const ls = "'".charCodeAt(0), Fc = '"'.charCodeAt(0), Hi = "\\".charCodeAt(0), Mc = "/".charCodeAt(0), Wi = `
`.charCodeAt(0), On = " ".charCodeAt(0), qi = "\f".charCodeAt(0), Gi = "	".charCodeAt(0), Yi = "\r".charCodeAt(0), ex = "[".charCodeAt(0), tx = "]".charCodeAt(0), rx = "(".charCodeAt(0), nx = ")".charCodeAt(0), ix = "{".charCodeAt(0), ax = "}".charCodeAt(0), ox = ";".charCodeAt(0), sx = "*".charCodeAt(0), lx = ":".charCodeAt(0), ux = "@".charCodeAt(0), Ki = /[\t\n\f\r "#'()/;[\\\]{}]/g, Ji = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, cx = /.[\r\n"'(/\\]/, Bc = /[\da-f]/i;
var fx = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, u, c, f, p, g, v, h, y = n.length, b = 0, w = [], _ = [];
  function O() {
    return b;
  }
  function C(R) {
    throw e.error("Unclosed " + R, b);
  }
  function $() {
    return _.length === 0 && b >= y;
  }
  function T(R) {
    if (_.length)
      return _.pop();
    if (b >= y)
      return;
    let M = R ? R.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(b), a) {
      case Wi:
      case On:
      case Gi:
      case Yi:
      case qi: {
        o = b;
        do
          o += 1, a = n.charCodeAt(o);
        while (a === On || a === Wi || a === Gi || a === Yi || a === qi);
        h = ["space", n.slice(b, o)], b = o - 1;
        break;
      }
      case ex:
      case tx:
      case ix:
      case ax:
      case lx:
      case ox:
      case nx: {
        let k = String.fromCharCode(a);
        h = [k, k, b];
        break;
      }
      case rx: {
        if (g = w.length ? w.pop()[1] : "", v = n.charCodeAt(b + 1), g === "url" && v !== ls && v !== Fc && v !== On && v !== Wi && v !== Gi && v !== qi && v !== Yi) {
          o = b;
          do {
            if (f = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || M) {
                o = b;
                break;
              } else
                C("bracket");
            for (p = o; n.charCodeAt(p - 1) === Hi; )
              p -= 1, f = !f;
          } while (f);
          h = ["brackets", n.slice(b, o + 1), b, o], b = o;
        } else
          o = n.indexOf(")", b + 1), u = n.slice(b, o + 1), o === -1 || cx.test(u) ? h = ["(", "(", b] : (h = ["brackets", u, b, o], b = o);
        break;
      }
      case ls:
      case Fc: {
        s = a === ls ? "'" : '"', o = b;
        do {
          if (f = !1, o = n.indexOf(s, o + 1), o === -1)
            if (i || M) {
              o = b + 1;
              break;
            } else
              C("string");
          for (p = o; n.charCodeAt(p - 1) === Hi; )
            p -= 1, f = !f;
        } while (f);
        h = ["string", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case ux: {
        Ki.lastIndex = b + 1, Ki.test(n), Ki.lastIndex === 0 ? o = n.length - 1 : o = Ki.lastIndex - 2, h = ["at-word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case Hi: {
        for (o = b, c = !0; n.charCodeAt(o + 1) === Hi; )
          o += 1, c = !c;
        if (a = n.charCodeAt(o + 1), c && a !== Mc && a !== On && a !== Wi && a !== Gi && a !== Yi && a !== qi && (o += 1, Bc.test(n.charAt(o)))) {
          for (; Bc.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === On && (o += 1);
        }
        h = ["word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      default: {
        a === Mc && n.charCodeAt(b + 1) === sx ? (o = n.indexOf("*/", b + 2) + 1, o === 0 && (i || M ? o = n.length : C("comment")), h = ["comment", n.slice(b, o + 1), b, o], b = o) : (Ji.lastIndex = b + 1, Ji.test(n), Ji.lastIndex === 0 ? o = n.length - 1 : o = Ji.lastIndex - 2, h = ["word", n.slice(b, o + 1), b, o], w.push(h), b = o);
        break;
      }
    }
    return b++, h;
  }
  function I(R) {
    _.push(R);
  }
  return {
    back: I,
    endOfFile: $,
    nextToken: T,
    position: O
  };
};
let Zd = hr, Aa = class extends Zd {
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
var Jl = Aa;
Aa.default = Aa;
Zd.registerAtRule(Aa);
let ep = hr, tp, rp, qr = class extends ep {
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
    return new tp(new rp(), this, e).stringify();
  }
};
qr.registerLazyResult = (t) => {
  tp = t;
};
qr.registerProcessor = (t) => {
  rp = t;
};
var si = qr;
qr.default = qr;
ep.registerRoot(qr);
let Wn = {
  comma(t) {
    return Wn.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return Wn.split(t, e);
  },
  split(t, e, r) {
    let n = [], i = "", a = !1, o = 0, s = !1, u = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === u && (s = !1) : f === '"' || f === "'" ? (s = !0, u = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (a = !0), a ? (i !== "" && n.push(i.trim()), i = "", a = !1) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }
};
var np = Wn;
Wn.default = Wn;
let ip = hr, dx = np, Ea = class extends ip {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return dx.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Xl = Ea;
Ea.default = Ea;
ip.registerRule(Ea);
let px = Wa, hx = fx, mx = Ga, gx = Jl, yx = si, jc = Xl;
const zc = {
  empty: !0,
  space: !0
};
function vx(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let bx = class {
  constructor(e) {
    this.input = e, this.root = new yx(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new gx();
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
    let r = new mx();
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
    this.tokenizer = hx(this.input);
  }
  decl(e, r) {
    let n = new px();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || vx(e)
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
    let r = new jc();
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
      a = n[g], o = a[0], o === "space" && g === s - 1 && !i ? c = !1 : o === "comment" ? (p = n[g - 1] ? n[g - 1][0] : "empty", f = n[g + 1] ? n[g + 1][0] : "empty", !zc[p] && !zc[f] ? u.slice(-1) === "," ? c = !1 : u += a[1] : c = !1) : u += a[1];
    if (!c) {
      let g = n.reduce((v, h) => v + h[1], "");
      e.raws[r] = { raw: g, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new jc();
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
var wx = bx;
let xx = hr, Sx = wx, Ox = qa;
function _a(t, e) {
  let r = new Ox(t, e), n = new Sx(r);
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
var Ql = _a;
_a.default = _a;
xx.registerParse(_a);
let { isClean: it, my: Ax } = oi, Ex = Bd, _x = Va, Cx = hr, kx = Yl, Tx = Xd, Uc = Kl, Px = Ql, $x = si;
const Ix = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Dx = {
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
}, Rx = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Gr = 0;
function An(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function ap(t) {
  let e = !1, r = Ix[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    Gr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Gr, r + "Exit"] : [r, r + "Exit"];
}
function Vc(t) {
  let e;
  return t.type === "document" ? e = ["Document", Gr, "DocumentExit"] : t.type === "root" ? e = ["Root", Gr, "RootExit"] : e = ap(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function ol(t) {
  return t[it] = !1, t.nodes && t.nodes.forEach((e) => ol(e)), t;
}
let sl = {}, Yr = class op {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = ol(r);
    else if (r instanceof op || r instanceof Uc)
      i = ol(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = Px;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[Ax] && Cx.rebuild(i);
    }
    this.result = new Uc(e, i, n), this.helpers = { ...sl, postcss: sl, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
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
          if (!Dx[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Rx[n])
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
      if (An(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[it]; ) {
        e[it] = !0;
        let r = [Vc(e)];
        for (; r.length > 0; ) {
          let n = this.visitTick(r);
          if (An(n))
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
          return An(r[0]) ? Promise.all(r) : r;
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
    let e = this.result.opts, r = _x;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new Ex(r, this.result.root, this.result.opts).generate();
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
      if (An(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[it]; )
        e[it] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Tx(
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
      if (An(a))
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
        if (n.indexes[o] += 1, !s[it]) {
          s[it] = !0, e.push(Vc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === Gr) {
        n.nodes && n.nodes.length && (n[it] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[it] = !0;
    let r = ap(e);
    for (let n of r)
      if (n === Gr)
        e.nodes && e.each((i) => {
          i[it] || this.walkSync(i);
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
Yr.registerPostcss = (t) => {
  sl = t;
};
var sp = Yr;
Yr.default = Yr;
$x.registerLazyResult(Yr);
kx.registerLazyResult(Yr);
let Nx = Bd, Lx = Va, Fx = Xd, Mx = Ql;
const Bx = Kl;
let ll = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = Lx;
    this.result = new Bx(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new Nx(a, i, this._opts, r);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Fx(
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
    let e, r = Mx;
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
var jx = ll;
ll.default = ll;
let zx = jx, Ux = sp, Vx = Yl, Hx = si, qn = class {
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
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new zx(this, e, r) : new Ux(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Wx = qn;
qn.default = qn;
Hx.registerProcessor(qn);
Vx.registerProcessor(qn);
let qx = Wa, Gx = Rd, Yx = Ga, Kx = Jl, Jx = qa, Xx = si, Qx = Xl;
function Gn(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Gn(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: Jx.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: Gx.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Gn(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new Xx(n);
  if (n.type === "decl")
    return new qx(n);
  if (n.type === "rule")
    return new Qx(n);
  if (n.type === "comment")
    return new Yx(n);
  if (n.type === "atrule")
    return new Kx(n);
  throw new Error("Unknown node type: " + t.type);
}
var Zx = Gn;
Gn.default = Gn;
let eS = Wl, lp = Wa, tS = sp, rS = hr, Zl = Wx, nS = Va, iS = Zx, up = Yl, aS = Qd, cp = Ga, fp = Jl, oS = Kl, sS = qa, lS = Ql, uS = np, dp = Xl, pp = si, cS = Ha;
function te(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Zl(t);
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
    return s.postcssPlugin = e, s.postcssVersion = new Zl().version, s;
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
te.stringify = nS;
te.parse = lS;
te.fromJSON = iS;
te.list = uS;
te.comment = (t) => new cp(t);
te.atRule = (t) => new fp(t);
te.decl = (t) => new lp(t);
te.rule = (t) => new dp(t);
te.root = (t) => new pp(t);
te.document = (t) => new up(t);
te.CssSyntaxError = eS;
te.Declaration = lp;
te.Container = rS;
te.Processor = Zl;
te.Document = up;
te.Comment = cp;
te.Warning = aS;
te.AtRule = fp;
te.Result = oS;
te.Input = sS;
te.Rule = dp;
te.Root = pp;
te.Node = cS;
tS.registerPostcss(te);
var fS = te;
te.default = te;
const le = /* @__PURE__ */ ja(fS);
le.stringify;
le.fromJSON;
le.plugin;
le.parse;
le.list;
le.document;
le.comment;
le.atRule;
le.rule;
le.decl;
le.root;
le.CssSyntaxError;
le.Declaration;
le.Container;
le.Processor;
le.Document;
le.Comment;
le.Warning;
le.AtRule;
le.Result;
le.Input;
le.Rule;
le.Root;
le.Node;
const dS = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, pS = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, hS = { key: 0 }, mS = {
  key: 1,
  class: "ml-1"
}, gS = { class: "flex w-fit flex-wrap" }, yS = {
  key: 0,
  class: "font-semibold"
}, vS = { class: "mb-1" }, bS = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, wS = { class: "w-full break-words" }, xS = { class: "mb-1 flex flex-col" }, SS = { key: 1 }, iA = {
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
      return x(), E("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        P("div", dS, [
          e.itemId || e.timeStamp ? (x(), E("div", pS, [
            e.itemId ? (x(), E(ce, { key: 0 }, [
              e.itemId.routeName ? (x(), se(B(ct), {
                key: 1,
                href: r.route(
                  e.itemId.routeName,
                  e.itemId.routeData ? e.itemId.routeData : e.itemId.id
                )
              }, {
                default: Ae(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (x(), E(ce, { key: 0 }, [
                    pe("#")
                  ], 64)) : z("", !0),
                  pe(" " + U(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), E("span", hS, [
                e.itemId.prefix || e.itemId.prefix == null ? (x(), E(ce, { key: 0 }, [
                  pe("#")
                ], 64)) : z("", !0),
                pe(" " + U(e.itemId.id), 1)
              ]))
            ], 64)) : z("", !0),
            e.timeStamp ? (x(), E("span", mS, [
              e.itemId ? (x(), E(ce, { key: 0 }, [
                pe("-")
              ], 64)) : z("", !0),
              pe(" " + U(e.timeStamp), 1)
            ])) : z("", !0)
          ])) : z("", !0),
          P("div", gS, [
            (x(!0), E(ce, null, Qe(t.pills, (a, o) => (x(), E(ce, { key: o }, [
              a.text ? (x(), E("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border p-1 px-2 text-white bg-primary",
                style: Qi({
                  backgroundColor: a.color ? a.color : null
                })
              }, U(a.text), 5)) : z("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (x(), E(ce, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (x(), E("p", yS, U(e.title.text), 1)) : (x(), se(B(ct), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: Ae(() => [
              pe(U(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : z("", !0),
        P("div", vS, [
          e.extraText ? (x(), E("p", bS, [
            pe(" Engineer Note: "),
            P("span", wS, U(e.extraText), 1)
          ])) : z("", !0)
        ]),
        P("div", xS, [
          (x(!0), E(ce, null, Qe(t.options, (a, o) => (x(), E(ce, null, [
            !a.routeName && !a.href ? (x(), E("span", {
              key: 0,
              style: Qi({ color: a.color ? a.color : "#000" })
            }, U(a.text), 5)) : (x(), se(B(ct), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: Qi({ color: a.color ? a.color : "#000" })
            }, {
              default: Ae(() => [
                pe(U(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (x(), E("div", SS, [
          P("span", null, U(e.amount.text + B(i1)(e.amount.amount)), 1)
        ])) : z("", !0),
        P("div", null, [
          H(r.$slots, "default")
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
const us = (() => {
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
})(), la = {
  setData(t, e, r) {
    us.set(t, e, r);
  },
  getData(t, e) {
    return us.get(t, e);
  },
  removeData(t, e) {
    us.delete(t, e);
  }
}, OS = 1e6, AS = 1e3, ul = "transitionend", ES = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), _S = (t) => {
  do
    t += Math.floor(Math.random() * OS);
  while (document.getElementById(t));
  return t;
}, hp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, mp = (t) => {
  const e = hp(t);
  return e && document.querySelector(e) ? e : null;
}, Yn = (t) => {
  const e = hp(t);
  return e ? document.querySelector(e) : null;
}, CS = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * AS);
}, kS = (t) => {
  t.dispatchEvent(new Event(ul));
}, gp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), cl = (t) => gp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, Ca = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && gp(a) ? "element" : ES(a);
    if (!new RegExp(i).test(o))
      throw new Error(
        `${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`
      );
  });
}, Ya = (t) => {
  if (!t || t.getClientRects().length === 0)
    return !1;
  if (t.style && t.parentNode && t.parentNode.style) {
    const e = getComputedStyle(t), r = getComputedStyle(t.parentNode);
    return getComputedStyle(t).getPropertyValue("visibility") === "visible" || e.display !== "none" && r.display !== "none" && e.visibility !== "hidden";
  }
  return !1;
}, Ka = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", TS = (t) => {
  t.offsetHeight;
}, yp = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, cs = [], PS = (t) => {
  document.readyState === "loading" ? (cs.length || document.addEventListener("DOMContentLoaded", () => {
    cs.forEach((e) => e());
  }), cs.push(t)) : t();
}, ft = () => document.documentElement.dir === "rtl", $S = (t) => document.createElement(t), Hc = (t) => {
  typeof t == "function" && t();
}, IS = (t, e, r = !0) => {
  if (!r) {
    Hc(t);
    return;
  }
  const n = 5, i = CS(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(ul, o), Hc(t));
  };
  e.addEventListener(ul, o), setTimeout(() => {
    a || kS(e);
  }, i);
}, DS = /[^.]*(?=\..*)\.|.*/, RS = /\..*/, NS = /::\d+$/, fs = {};
let Wc = 1;
const LS = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, FS = /^(mouseenter|mouseleave)/i, vp = /* @__PURE__ */ new Set([
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
function bp(t, e) {
  return e && `${e}::${Wc++}` || t.uidEvent || Wc++;
}
function wp(t) {
  const e = bp(t);
  return t.uidEvent = e, fs[e] = fs[e] || {}, fs[e];
}
function MS(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && ae.off(t, n.type, e), e.apply(t, [n]);
  };
}
function BS(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && ae.off(t, i.type, r), r.apply(o, [i]);
    return null;
  };
}
function xp(t, e, r = null) {
  const n = Object.keys(t);
  for (let i = 0, a = n.length; i < a; i++) {
    const o = t[n[i]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function Sp(t, e, r) {
  const n = typeof e == "string", i = n ? r : e;
  let a = Op(t);
  return vp.has(a) || (a = t), [n, i, a];
}
function qc(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), FS.test(e)) {
    const v = (h) => function(y) {
      if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
        return h.call(this, y);
    };
    n ? n = v(n) : r = v(r);
  }
  const [a, o, s] = Sp(
    e,
    r,
    n
  ), u = wp(t), c = u[s] || (u[s] = {}), f = xp(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const p = bp(
    o,
    e.replace(DS, "")
  ), g = a ? BS(t, r, n) : MS(t, r);
  g.delegationSelector = a ? r : null, g.originalHandler = o, g.oneOff = i, g.uidEvent = p, c[p] = g, t.addEventListener(s, g, a);
}
function fl(t, e, r, n, i) {
  const a = xp(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function jS(t, e, r, n) {
  const i = e[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const o = i[a];
      fl(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Op(t) {
  return t = t.replace(RS, ""), LS[t] || t;
}
const ae = {
  on(t, e, r, n) {
    qc(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    qc(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = Sp(
      e,
      r,
      n
    ), s = o !== e, u = wp(t), c = e.startsWith(".");
    if (typeof a < "u") {
      if (!u || !u[o])
        return;
      fl(
        t,
        u,
        o,
        a,
        i ? r : null
      );
      return;
    }
    c && Object.keys(u).forEach((p) => {
      jS(
        t,
        u,
        p,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((p) => {
      const g = p.replace(NS, "");
      if (!s || e.includes(g)) {
        const v = f[p];
        fl(
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
    const n = yp(), i = Op(e), a = e !== i, o = vp.has(i);
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
}, zS = "5.1.3";
class Ap {
  constructor(e) {
    e = cl(e), e && (this._element = e, la.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    la.removeData(this._element, this.constructor.DATA_KEY), ae.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    IS(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return la.getData(cl(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return zS;
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
function ds(t) {
  return t === "true" ? !0 : t === "false" ? !1 : t === Number(t).toString() ? Number(t) : t === "" || t === "null" ? null : t;
}
function ps(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const Z = {
  setDataAttribute(t, e, r) {
    t.setAttribute(`data-te-${ps(e)}`, r);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-te-${ps(e)}`);
  },
  getDataAttributes(t) {
    if (!t)
      return {};
    const e = {};
    return Object.keys(t.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ds(t.dataset[r]);
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
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ds(e[r]);
    }), e;
  },
  getDataAttribute(t, e) {
    return ds(
      t.getAttribute(`data-te-${ps(e)}`)
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
    t && hs(e).forEach((r) => {
      t.classList.contains(r) ? t.classList.remove(r) : t.classList.add(r);
    });
  },
  addClass(t, e) {
    hs(e).forEach(
      (r) => !t.classList.contains(r) && t.classList.add(r)
    );
  },
  addStyle(t, e) {
    Object.keys(e).forEach((r) => {
      t.style[r] = e[r];
    });
  },
  removeClass(t, e) {
    hs(e).forEach(
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
function hs(t) {
  return typeof t == "string" ? t.split(" ") : Array.isArray(t) ? t : !1;
}
const US = 3, Be = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== US; )
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
      (r) => !Ka(r) && Ya(r)
    );
  }
};
ft();
ft();
ft();
ft();
ft();
ft();
const ms = "collapse", Ep = "te.collapse", Ja = `.${Ep}`, Gc = {
  toggle: !0,
  parent: null
}, VS = {
  toggle: "boolean",
  parent: "(null|element)"
}, HS = `show${Ja}`, WS = `shown${Ja}`, qS = `hide${Ja}`, GS = `hidden${Ja}`, gs = "data-te-collapse-show", Yc = "data-te-collapse-collapsed", Xi = "data-te-collapse-collapsing", YS = "data-te-collapse-horizontal", Lr = "data-te-collapse-item", Kc = `:scope [${Lr}] [${Lr}]`, KS = "width", JS = "height", XS = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Jc = "[data-te-collapse-init]", QS = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, ZS = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Nn extends Ap {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Be.find(Jc);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], u = mp(s), c = Be.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Gc;
  }
  static get NAME() {
    return ms;
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
        Kc,
        this._config.parent
      );
      e = Be.find(
        XS,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Be.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? Nn.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (ae.trigger(this._element, HS).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && Nn.getOrCreateInstance(u, { toggle: !1 }).hide(), r || la.setData(u, Ep, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), Z.addClass(this._element, a), this._element.removeAttribute(Lr), this._element.setAttribute(Xi, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, this._classes.hidden), Z.removeClass(this._element, a), Z.addClass(this._element, this._classes.visible), this._element.removeAttribute(Xi), this._element.setAttribute(Lr, ""), this._element.setAttribute(gs, ""), this._element.style[i] = "", ae.trigger(this._element, WS);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || ae.trigger(this._element, qS).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, TS(this._element), Z.addClass(this._element, r), Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Xi, ""), this._element.removeAttribute(Lr), this._element.removeAttribute(gs);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Yn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, r), Z.addClass(this._element, this._classes.visible), Z.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Xi), this._element.setAttribute(Lr, ""), ae.trigger(this._element, GS);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(gs);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...Gc,
      ...Z.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = cl(e.parent), Ca(ms, e, VS), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...QS,
      ...r,
      ...e
    }, Ca(ms, e, ZS), e;
  }
  _getDimension() {
    return this._element.hasAttribute(YS) ? KS : JS;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Be.find(
      Kc,
      this._config.parent
    );
    Be.find(Jc, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Yn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(Yc) : n.setAttribute(`${Yc}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = Nn.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let Xc = [];
const e2 = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  Xc.includes(n) || (Xc.push(n), ae.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ka(this))
        return;
      const a = Yn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && t.getOrCreateInstance(a)[e]();
    }
  ));
}, ys = "alert", t2 = "te.alert", _p = `.${t2}`, r2 = `close${_p}`, n2 = `closed${_p}`, En = "data-te-alert-show", i2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Qc = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, a2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, o2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class ka extends Ap {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return i2;
  }
  static get Default() {
    return Qc;
  }
  static get NAME() {
    return ys;
  }
  // Public
  close() {
    if (ae.trigger(this._element, r2).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, Z.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(En), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(En) && (Z.removeClass(this._element, "hidden"), Z.addClass(this._element, "block"), Ya(this._element))) {
        const e = (r) => {
          Z.removeClass(this._element, "hidden"), Z.addClass(this._element, "block"), ae.off(r.target, "animationend", e);
        };
        this._element.setAttribute(En, ""), ae.on(this._element, "animationend", e);
      }
      this._config.animation && (Z.removeClass(this._element, this._classes.fadeOut), Z.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(En)) {
      this._element.removeAttribute(En);
      const e = (r) => {
        Z.addClass(this._element, "hidden"), Z.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), ae.off(r.target, "animationend", e);
      };
      ae.on(this._element, "animationend", e), Z.removeClass(this._element, this._classes.fadeIn), Z.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (e2(ka, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...Qc,
      ...Z.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, Ca(ys, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...a2,
      ...r,
      ...e
    }, Ca(ys, e, o2), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), ae.trigger(this._element, n2), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = ka.getOrCreateInstance(this);
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
      var O = {};
      return function(C) {
        if (O[C] === void 0) {
          var $ = document.querySelector(C);
          if (window.HTMLIFrameElement && $ instanceof window.HTMLIFrameElement)
            try {
              $ = $.contentDocument.head;
            } catch {
              $ = null;
            }
          O[C] = $;
        }
        return O[C];
      };
    }(), u = [];
    function c(O) {
      for (var C = -1, $ = 0; $ < u.length; $++)
        if (u[$].identifier === O) {
          C = $;
          break;
        }
      return C;
    }
    function f(O, C) {
      for (var $ = {}, T = [], I = 0; I < O.length; I++) {
        var R = O[I], M = C.base ? R[0] + C.base : R[0], k = $[M] || 0, F = "".concat(M, " ").concat(k);
        $[M] = k + 1;
        var V = c(F), ee = { css: R[1], media: R[2], sourceMap: R[3] };
        V !== -1 ? (u[V].references++, u[V].updater(ee)) : u.push({ identifier: F, updater: _(ee, C), references: 1 }), T.push(F);
      }
      return T;
    }
    function p(O) {
      var C = document.createElement("style"), $ = O.attributes || {};
      if ($.nonce === void 0) {
        var T = a.nc;
        T && ($.nonce = T);
      }
      if (Object.keys($).forEach(function(R) {
        C.setAttribute(R, $[R]);
      }), typeof O.insert == "function")
        O.insert(C);
      else {
        var I = s(O.insert || "head");
        if (!I)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        I.appendChild(C);
      }
      return C;
    }
    var g, v = (g = [], function(O, C) {
      return g[O] = C, g.filter(Boolean).join(`
`);
    });
    function h(O, C, $, T) {
      var I = $ ? "" : T.media ? "@media ".concat(T.media, " {").concat(T.css, "}") : T.css;
      if (O.styleSheet)
        O.styleSheet.cssText = v(C, I);
      else {
        var R = document.createTextNode(I), M = O.childNodes;
        M[C] && O.removeChild(M[C]), M.length ? O.insertBefore(R, M[C]) : O.appendChild(R);
      }
    }
    function y(O, C, $) {
      var T = $.css, I = $.media, R = $.sourceMap;
      if (I ? O.setAttribute("media", I) : O.removeAttribute("media"), R && typeof btoa < "u" && (T += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R)))), " */")), O.styleSheet)
        O.styleSheet.cssText = T;
      else {
        for (; O.firstChild; )
          O.removeChild(O.firstChild);
        O.appendChild(document.createTextNode(T));
      }
    }
    var b = null, w = 0;
    function _(O, C) {
      var $, T, I;
      if (C.singleton) {
        var R = w++;
        $ = b || (b = p(C)), T = h.bind(null, $, R, !1), I = h.bind(null, $, R, !0);
      } else
        $ = p(C), T = y.bind(null, $, C), I = function() {
          (function(M) {
            if (M.parentNode === null)
              return !1;
            M.parentNode.removeChild(M);
          })($);
        };
      return T(O), function(M) {
        if (M) {
          if (M.css === O.css && M.media === O.media && M.sourceMap === O.sourceMap)
            return;
          T(O = M);
        } else
          I();
      };
    }
    n.exports = function(O, C) {
      (C = C || {}).singleton || typeof C.singleton == "boolean" || (C.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var $ = f(O = O || [], C);
      return function(T) {
        if (T = T || [], Object.prototype.toString.call(T) === "[object Array]") {
          for (var I = 0; I < $.length; I++) {
            var R = c($[I]);
            u[R].references--;
          }
          for (var M = f(T, C), k = 0; k < $.length; k++) {
            var F = c($[k]);
            u[F].references === 0 && (u[F].updater(), u.splice(F, 1));
          }
          $ = M;
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
_S("chips-input-");
const Lt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, s2 = {
  line: {
    options: {
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
      ...Lt,
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
var Xa = function(t) {
  this.element = t, this.handlers = {};
}, Cp = { isEmpty: { configurable: !0 } };
Xa.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Xa.prototype.unbind = function(t, e) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (r.element.removeEventListener(t, n, !1), !1);
  });
};
Xa.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Cp.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Xa.prototype, Cp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
$S("div");
const l2 = (t) => {
  PS(() => {
    const e = yp();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, u2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, c2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ka(this) && t.getOrCreateInstance(this).show();
    }
  );
}, f2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Yn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ka(this))
        return;
      ae.one(n, t.EVENT_HIDDEN, () => {
        Ya(this) && this.focus();
      });
      const i = Be.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, d2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, p2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Yn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), ae.one(n, t.EVENT_SHOW, (a) => {
        a.defaultPrevented || ae.one(n, t.EVENT_HIDDEN, () => {
          Ya(this) && this.focus();
        });
      });
      const i = Be.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      i && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, h2 = (t, e) => {
  ae.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, m2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = mp(this);
      Be.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, g2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, y2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, v2 = (t, e) => {
  Be.find(e).forEach((r) => {
    new t(r);
  }), ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, b2 = (t, e) => {
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
        ...s2[s.type]
      });
    }
    return null;
  });
};
class w2 {
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
const dl = new w2(), Cn = {
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
    advanced: b2
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: d2
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: m2
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: u2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: p2
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: h2
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: f2
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: c2
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: g2
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: y2
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: v2
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, x2 = (t) => Cn[t.NAME] || null, S2 = (t, e) => {
  if (!t || !e.allowReinits && dl.isInited(t.NAME))
    return;
  dl.add(t.NAME);
  const r = x2(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (l2(t), r != null && r.advanced) {
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
}, O2 = (t, e) => {
  t.forEach((r) => S2(r, e));
}, A2 = {
  allowReinits: !1,
  checkOtherImports: !1
}, E2 = (t, e = {}) => {
  e = { ...A2, ...e };
  const r = Object.keys(Cn).map((n) => {
    if (document.querySelector(Cn[n].selector)) {
      const i = t[Cn[n].name];
      return !i && !dl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${Cn[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  O2(r, e);
}, _2 = { role: "alert" }, C2 = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, k2 = /* @__PURE__ */ P("button", {
  type: "button",
  class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
  "data-te-alert-dismiss": "",
  "aria-label": "Close"
}, [
  /* @__PURE__ */ P("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
    /* @__PURE__ */ P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: "h-6 w-6"
    }, [
      /* @__PURE__ */ P("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), aA = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return Wt(() => {
      E2({ Alert: ka });
    }), (e, r) => (x(), E("div", _2, [
      P("div", null, [
        P("div", C2, [
          H(e.$slots, "default"),
          k2
        ])
      ])
    ]));
  }
}, T2 = ["aria-controls"], P2 = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, $2 = ["id"], I2 = {
  __name: "CollapsibleSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = be(null), n = be(null), i = be(e.open);
    Wt(() => {
      n.value = new Nn(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (x(), E("div", {
      class: K(["mt-2 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      P("div", {
        class: K(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        P("div", {
          onClick: a,
          class: "focusable !block rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable"
        }, [
          pe(U(t.header) + " ", 1),
          P("button", P2, U(i.value ? "Hide" : "Show"), 1)
        ], 8, T2),
        P("div", {
          class: "!visible hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          P("div", {
            class: K([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            H(o.$slots, "default")
          ], 2)
        ], 8, $2)
      ], 2)
    ], 2));
  }
}, D2 = { class: "relative" }, oA = {
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
    Wt(() => document.addEventListener("keydown", r)), Kn(() => document.removeEventListener("keydown", r));
    const n = re(() => ({
      48: "w-48"
    })[e.width.toString()]), i = re(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = be(!1);
    return (o, s) => (x(), E("div", D2, [
      P("div", {
        onClick: s[0] || (s[0] = (u) => a.value = !a.value)
      }, [
        H(o.$slots, "trigger")
      ]),
      je(P("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => a.value = !1)
      }, null, 512), [
        [zt, a.value]
      ]),
      ge(Fr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: Ae(() => [
          je(P("div", {
            class: K(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (u) => a.value = !1)
          }, [
            P("div", {
              class: K(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              H(o.$slots, "content")
            ], 2)
          ], 2), [
            [zt, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, sA = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (x(), se(B(ct), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: Ae(() => [
        H(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, R2 = ["href", "target"], lA = {
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
    return (n, i) => t.href && (t.method || t.data) ? (x(), se(B(ct), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: K(["focusable font-medium cursor-pointer select-none rounded px-2 leading-normal", r()]),
      as: "button"
    }, {
      default: Ae(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (x(), E("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: K(["focusable font-medium cursor-pointer select-none rounded px-2 leading-normal", r()])
    }, [
      H(n.$slots, "default")
    ], 10, R2));
  }
}, N2 = {
  class: "relative",
  "data-te-dropdown-ref": ""
}, L2 = {
  class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button",
  id: "dropdownMenuButton3",
  "data-te-dropdown-toggle-ref": "",
  "aria-expanded": "false",
  "data-te-ripple-init": "",
  "data-te-ripple-color": "light"
}, F2 = /* @__PURE__ */ P("span", { class: "mx-1 w-2" }, [
  /* @__PURE__ */ P("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "h-5 w-5"
  }, [
    /* @__PURE__ */ P("path", {
      "fill-rule": "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      "clip-rule": "evenodd"
    })
  ])
], -1), M2 = {
  class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
  "aria-labelledby": "dropdownMenuButton3",
  "data-te-dropdown-menu-ref": ""
}, uA = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (x(), E("div", N2, [
      P("button", L2, [
        pe(U(t.title) + " ", 1),
        F2
      ]),
      P("ul", M2, [
        H(e.$slots, "default")
      ])
    ]));
  }
}, B2 = ["href"], cA = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (x(), E("li", null, [
      P("a", {
        class: "focusable block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, U(t.title), 9, B2)
    ]));
  }
}, fA = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (x(), se(B(I2), { header: t.header }, {
      default: Ae(() => [
        ge(B(tO), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, j2 = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, z2 = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, U2 = {
  key: 0,
  class: "text-center"
}, V2 = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, H2 = { class: "flex-start w-full md:flex" }, W2 = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, q2 = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, G2 = { class: "mb-1 flex justify-between" }, Y2 = { class: "text-sm text-neutral-500" }, K2 = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, J2 = {
  key: 1,
  class: "text-sm text-primary-500"
}, X2 = { class: "text-sm text-neutral-500" }, Q2 = { class: "font-medium" }, Z2 = {
  key: 0,
  class: "line-through"
}, eO = ["innerHTML"], tO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return Ra.add(yw, hw, bw, mw, vw), (e, r) => t.logs == null ? (x(), E("div", j2, [
      ge(B(Pp))
    ])) : (x(), E("div", z2, [
      t.logs.total ? (x(), E("ol", V2, [
        (x(!0), E(ce, null, Qe(t.logs.data, (n) => {
          var i;
          return x(), E("li", {
            key: n.id
          }, [
            P("div", H2, [
              P("div", W2, [
                ge(B(ha), {
                  icon: n.icon
                }, null, 8, ["icon"])
              ]),
              P("div", q2, [
                P("div", G2, [
                  P("span", Y2, [
                    pe(U(n.event_formatted) + " ", 1),
                    n.reference ? (x(), E("span", K2, U(n.reference), 1)) : z("", !0),
                    n.causer ? (x(), E("span", J2, "(" + U((i = n.causer) == null ? void 0 : i.first_name) + ")", 1)) : z("", !0)
                  ]),
                  P("span", X2, U(n.created_date_full), 1)
                ]),
                (x(!0), E(ce, null, Qe(n.changes_formatted, (a, o) => (x(), E("p", {
                  key: o,
                  class: "mb-0 text-neutral-700"
                }, [
                  P("span", Q2, U(o) + ":", 1),
                  a.old ? (x(), E("span", Z2, U(a.old), 1)) : z("", !0),
                  pe(" " + U(a.new), 1)
                ]))), 128)),
                n.description_details ? (x(), E("p", {
                  key: 0,
                  class: "text-neutral-700",
                  innerHTML: n.description_details
                }, null, 8, eO)) : z("", !0)
              ])
            ])
          ]);
        }), 128))
      ])) : (x(), E("p", U2, "No Data")),
      t.logs.links ? (x(), se(B(kp), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : z("", !0)
    ]));
  }
}, rO = {
  class: "modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0",
  "scroll-region": ""
}, nO = /* @__PURE__ */ P("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1), iO = [
  nO
], dA = {
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
    Ta(
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
    Wt(() => document.addEventListener("keydown", a)), Kn(() => {
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
    return (s, u) => (x(), se(Mp, { to: "body" }, [
      ge(Fr, { "leave-active-class": "duration-200" }, {
        default: Ae(() => [
          je(P("div", rO, [
            ge(Fr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ae(() => [
                je(P("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, iO, 512), [
                  [zt, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            ge(Fr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: Ae(() => [
                je(P("div", {
                  class: K(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value])
                }, [
                  t.show ? H(s.$slots, "default", { key: 0 }) : z("", !0)
                ], 2), [
                  [zt, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 512), [
            [zt, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, aO = { class: "ml-3 flex-1 whitespace-nowrap" }, pA = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = re(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (x(), se(B(ct), {
      href: t.href,
      class: K(r.value)
    }, {
      default: Ae(() => [
        H(n.$slots, "icon"),
        P("span", aO, [
          H(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, oO = {
  key: 0,
  class: "flex justify-center"
}, sO = { "aria-label": "Page navigation" }, lO = { class: "list-style-none flex" }, uO = ["innerHTML"], cO = ["innerHTML", "onClick"], kp = {
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
    return (o, s) => i.value.length > 3 ? (x(), E("div", oO, [
      P("nav", sO, [
        P("ul", lO, [
          (x(!0), E(ce, null, Qe(i.value, (u, c) => (x(), E("li", { key: c }, [
            t.linkReturn ? (x(), E(ce, { key: 0 }, [
              u.url === null ? (x(), E("button", {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                onClick: s[0] || (s[0] = (f) => a(""))
              }, null, 8, uO)) : (x(), E("button", {
                key: 1,
                class: K(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
                innerHTML: u.label,
                onClick: (f) => a(u.url)
              }, null, 10, cO))
            ], 64)) : (x(), E(ce, { key: 1 }, [
              u.url === null ? (x(), se(B(ct), {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                href: ""
              }, null, 8, ["innerHTML"])) : (x(), se(B(ct), {
                key: 1,
                class: K(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
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
    ])) : z("", !0);
  }
}, fO = ["type", "disabled"], Tp = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (x(), E("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      H(e.$slots, "default")
    ], 8, fO));
  }
}, dO = ["type"], hA = {
  __name: "DangerButton",
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(t) {
    return (e, r) => (x(), E("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700"
    }, [
      H(e.$slots, "default")
    ], 8, dO));
  }
}, mA = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = re(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (x(), se(B(ct), {
      href: t.href,
      class: K(r.value)
    }, {
      default: Ae(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, pO = ["type"], gA = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (x(), E("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      H(e.$slots, "default")
    ], 8, pO));
  }
}, hO = {
  key: 0,
  class: "relative mb-2 rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, yA = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !0,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (x(), E("div", {
      class: K(["rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      P("div", {
        class: K(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (x(), E("div", hO, [
          P("span", null, U(t.header), 1),
          H(e.$slots, "headerButton")
        ])) : z("", !0),
        P("div", {
          class: K({ "px-4 pb-2": t.header })
        }, [
          H(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, mO = {}, gO = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, yO = /* @__PURE__ */ P("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), vO = [
  yO
];
function bO(t, e) {
  return x(), E("div", gO, vO);
}
const Pp = /* @__PURE__ */ Vl(mO, [["render", bO]]), wO = { class: "flex flex-wrap gap-2 lg:flex-nowrap" }, xO = ["onClick"], SO = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, OO = { class: "font-medium text-xl leading-tight text-neutral-800" }, AO = { class: "flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" }, vA = {
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
    return (o, s) => (x(), E("div", null, [
      P("div", wO, [
        (x(!0), E(ce, null, Qe(t.stats, (u) => (x(), E("div", {
          class: K(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(u.name)
          }]),
          onClick: (c) => i(u.name),
          key: u.value
        }, [
          P("div", null, [
            P("div", SO, [
              P("h5", OO, U(u.value), 1)
            ])
          ]),
          P("div", AO, U(u.label ?? u.name), 1)
        ], 10, xO))), 128))
      ])
    ]));
  }
}, bA = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  aA as Alert,
  _O as Checkbox,
  I2 as CollapsibleSection,
  hA as DangerButton,
  oA as Dropdown,
  sA as DropdownLink,
  TO as DropdownSearchbar,
  RO as FileDropZoneInput,
  NO as Images,
  CO as Input,
  Zn as InputError,
  kl as InputLabel,
  lA as LinkButton,
  uA as LinkDropdownButton,
  cA as LinkDropdownButtonItem,
  fA as Logs,
  tO as LogsContent,
  dA as Modal,
  pA as NavLink,
  kp as Pagination,
  Tp as PrimaryButton,
  LO as RadioButton,
  mA as ResponsiveNavLink,
  PO as SearchSelect,
  gA as SecondaryButton,
  yA as Section,
  Pp as Spinner,
  vA as Stats,
  ow as SubmitButton,
  FO as Table,
  iA as TableItemCard,
  jO as Td,
  Ym as TextInput,
  kO as Textarea,
  BO as Th,
  MO as Thead,
  zO as TrCollapseHandler,
  bA as default,
  za as getInertiaRouter,
  IO as hasPermission,
  i1 as moneyFormat,
  $O as numberFormat,
  DO as setInertiaRouter
};
