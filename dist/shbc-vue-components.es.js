import { computed as re, withDirectives as Ve, openBlock as x, createElementBlock as A, vModelCheckbox as tf, defineComponent as Yr, watch as Ta, h as sr, createBlock as se, unref as B, createCommentVNode as z, createElementVNode as P, normalizeClass as K, createTextVNode as me, toDisplayString as U, Fragment as ce, createVNode as ge, vShow as zt, renderSlot as H, ref as be, onMounted as Wt, vModelText as Rp, resolveDirective as Np, normalizeProps as Ue, guardReactiveProps as Ke, renderList as Qe, resolveDynamicComponent as jo, mergeProps as Fn, toHandlers as Lp, Transition as Lr, withCtx as Ee, withModifiers as Mt, withKeys as Cr, normalizeStyle as Qi, shallowRef as Fp, markRaw as tu, reactive as dl, onUnmounted as Jn, toRefs as Mp, nextTick as Bp, Teleport as jp } from "vue";
const zp = ["value"], Up = {
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
    return (a, o) => Ve((x(), A("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: "rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500"
    }, null, 8, zp)), [
      [tf, i.value]
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
function Vp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Hp(t, e, r) {
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
function pl(t, e) {
  return qp(t) || Yp(t, e) || rf(t, e) || Jp();
}
function Xn(t) {
  return Wp(t) || Gp(t) || rf(t) || Kp();
}
function Wp(t) {
  if (Array.isArray(t))
    return vs(t);
}
function qp(t) {
  if (Array.isArray(t))
    return t;
}
function Gp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Yp(t, e) {
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
function Kp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var iu = function() {
}, hl = {}, nf = {}, af = null, of = {
  mark: iu,
  measure: iu
};
try {
  typeof window < "u" && (hl = window), typeof document < "u" && (nf = document), typeof MutationObserver < "u" && (af = MutationObserver), typeof performance < "u" && (of = performance);
} catch {
}
var Xp = hl.navigator || {}, au = Xp.userAgent, ou = au === void 0 ? "" : au, Ut = hl, oe = nf, su = af, ki = of;
Ut.document;
var Et = !!oe.documentElement && !!oe.head && typeof oe.addEventListener == "function" && typeof oe.createElement == "function", sf = ~ou.indexOf("MSIE") || ~ou.indexOf("Trident/"), Ti, Pi, $i, Ii, Di, St = "___FONT_AWESOME___", bs = 16, lf = "fa", uf = "svg-inline--fa", cr = "data-fa-i2svg", ws = "data-fa-pseudo-element", Qp = "data-fa-pseudo-element-pending", ml = "data-prefix", gl = "data-icon", lu = "fontawesome-i2svg", Zp = "async", eh = ["HTML", "HEAD", "STYLE", "SCRIPT"], cf = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), ie = "classic", fe = "sharp", yl = [ie, fe];
function Qn(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[ie];
    }
  });
}
var Mn = Qn((Ti = {}, we(Ti, ie, {
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
}), Ti)), Bn = Qn((Pi = {}, we(Pi, ie, {
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
}), Pi)), jn = Qn(($i = {}, we($i, ie, {
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
}), $i)), th = Qn((Ii = {}, we(Ii, ie, {
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
}), Ii)), rh = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ff = "fa-layers-text", nh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, ih = Qn((Di = {}, we(Di, ie, {
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
}), Di)), df = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ah = df.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), oh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ar = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, zn = /* @__PURE__ */ new Set();
Object.keys(Bn[ie]).map(zn.add.bind(zn));
Object.keys(Bn[fe]).map(zn.add.bind(zn));
var sh = [].concat(yl, Xn(zn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ar.GROUP, ar.SWAP_OPACITY, ar.PRIMARY, ar.SECONDARY]).concat(df.map(function(t) {
  return "".concat(t, "x");
})).concat(ah.map(function(t) {
  return "w-".concat(t);
})), Tn = Ut.FontAwesomeConfig || {};
function lh(t) {
  var e = oe.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function uh(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (oe && typeof oe.querySelector == "function") {
  var ch = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ch.forEach(function(t) {
    var e = pl(t, 2), r = e[0], n = e[1], i = uh(lh(r));
    i != null && (Tn[n] = i);
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
Tn.familyPrefix && (Tn.cssPrefix = Tn.familyPrefix);
var Br = D(D({}, pf), Tn);
Br.autoReplaceSvg || (Br.observeMutations = !1);
var N = {};
Object.keys(pf).forEach(function(t) {
  Object.defineProperty(N, t, {
    enumerable: !0,
    set: function(r) {
      Br[t] = r, Pn.forEach(function(n) {
        return n(N);
      });
    },
    get: function() {
      return Br[t];
    }
  });
});
Object.defineProperty(N, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Br.cssPrefix = e, Pn.forEach(function(r) {
      return r(N);
    });
  },
  get: function() {
    return Br.cssPrefix;
  }
});
Ut.FontAwesomeConfig = N;
var Pn = [];
function fh(t) {
  return Pn.push(t), function() {
    Pn.splice(Pn.indexOf(t), 1);
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
function dh(t) {
  if (!(!t || !Et)) {
    var e = oe.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = oe.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
    }
    return oe.head.insertBefore(e, n), t;
  }
}
var ph = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Un() {
  for (var t = 12, e = ""; t-- > 0; )
    e += ph[Math.random() * 62 | 0];
  return e;
}
function Kr(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function vl(t) {
  return t.classList ? Kr(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function hf(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hh(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(hf(t[r]), '" ');
  }, "").trim();
}
function Pa(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function bl(t) {
  return t.size !== st.size || t.x !== st.x || t.y !== st.y || t.rotate !== st.rotate || t.flipX || t.flipY;
}
function mh(t) {
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
function gh(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? bs : r, i = t.height, a = i === void 0 ? bs : i, o = t.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && sf ? u += "translate(".concat(e.x / Rt - n / 2, "em, ").concat(e.y / Rt - a / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(e.x / Rt, "em), calc(-50% + ").concat(e.y / Rt, "em)) ") : u += "translate(".concat(e.x / Rt, "em, ").concat(e.y / Rt, "em) "), u += "scale(".concat(e.size / Rt * (e.flipX ? -1 : 1), ", ").concat(e.size / Rt * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var yh = `:root, :host {
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
  var t = lf, e = uf, r = N.cssPrefix, n = N.replacementClass, i = yh;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
var uu = !1;
function zo() {
  N.autoAddCss && !uu && (dh(mf()), uu = !0);
}
var vh = {
  mixout: function() {
    return {
      dom: {
        css: mf,
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
var Xe = Ot[St], gf = [], bh = function t() {
  oe.removeEventListener("DOMContentLoaded", t), ca = 1, gf.map(function(e) {
    return e();
  });
}, ca = !1;
Et && (ca = (oe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(oe.readyState), ca || oe.addEventListener("DOMContentLoaded", bh));
function wh(t) {
  Et && (ca ? setTimeout(t, 0) : gf.push(t));
}
function Zn(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? hf(t) : "<".concat(e, " ").concat(hh(n), ">").concat(a.map(Zn).join(""), "</").concat(e, ">");
}
function cu(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var xh = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Uo = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? xh(r, i) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, e[c], c, e);
  return f;
};
function Sh(t) {
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
  var e = Sh(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Oh(t, e) {
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
var Ri, Ni, Li, Dr = Xe.styles, _h = Xe.shims, Ah = (Ri = {}, we(Ri, ie, Object.values(jn[ie])), we(Ri, fe, Object.values(jn[fe])), Ri), wl = null, yf = {}, vf = {}, bf = {}, wf = {}, xf = {}, Eh = (Ni = {}, we(Ni, ie, Object.keys(Mn[ie])), we(Ni, fe, Object.keys(Mn[fe])), Ni);
function Ch(t) {
  return ~sh.indexOf(t);
}
function kh(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !Ch(i) ? i : null;
}
var Sf = function() {
  var e = function(a) {
    return Uo(Dr, function(o, s, u) {
      return o[u] = Uo(s, a, {}), o;
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
  var r = "far" in Dr || N.autoFetchSvg, n = Uo(_h, function(i, a) {
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
  bf = n.names, wf = n.unicodes, wl = $a(N.styleDefault, {
    family: N.familyDefault
  });
};
fh(function(t) {
  wl = $a(t.styleDefault, {
    family: N.familyDefault
  });
});
Sf();
function xl(t, e) {
  return (yf[t] || {})[e];
}
function Th(t, e) {
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
function Ph(t) {
  var e = wf[t], r = xl("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Vt() {
  return wl;
}
var Sl = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function $a(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? ie : r, i = Mn[n][t], a = Bn[n][t] || Bn[n][i], o = t in Xe.styles ? t : null;
  return a || o || null;
}
var du = (Li = {}, we(Li, ie, Object.keys(jn[ie])), we(Li, fe, Object.keys(jn[fe])), Li);
function Ia(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, we(e, ie, "".concat(N.cssPrefix, "-").concat(ie)), we(e, fe, "".concat(N.cssPrefix, "-").concat(fe)), e), o = null, s = ie;
  (t.includes(a[ie]) || t.some(function(c) {
    return du[ie].includes(c);
  })) && (s = ie), (t.includes(a[fe]) || t.some(function(c) {
    return du[fe].includes(c);
  })) && (s = fe);
  var u = t.reduce(function(c, f) {
    var p = kh(N.cssPrefix, f);
    if (Dr[f] ? (f = Ah[s].includes(f) ? th[s][f] : f, o = f, c.prefix = f) : Eh[s].indexOf(f) > -1 ? (o = f, c.prefix = $a(f, {
      family: s
    })) : p ? c.iconName = p : f !== N.replacementClass && f !== a[ie] && f !== a[fe] && c.rest.push(f), !i && c.prefix && c.iconName) {
      var g = o === "fa" ? Of(c.iconName) : {}, v = or(c.prefix, c.iconName);
      g.prefix && (o = null), c.iconName = g.iconName || v || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Dr.far && Dr.fas && !N.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Sl());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === fe && (Dr.fass || N.autoFetchSvg) && (u.prefix = "fass", u.iconName = or(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = Vt() || "fas"), u;
}
var $h = /* @__PURE__ */ function() {
  function t() {
    Vp(this, t), this.definitions = {};
  }
  return Hp(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = D(D({}, r.definitions[s] || {}), o[s]), Ss(s, o[s]);
        var u = jn[ie][s];
        u && Ss(u, o[s]), Sf();
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
}(), pu = [], Rr = {}, Fr = {}, Ih = Object.keys(Fr);
function Dh(t, e) {
  var r = e.mixoutsTo;
  return pu = t, Rr = {}, Object.keys(Fr).forEach(function(n) {
    Ih.indexOf(n) === -1 && delete Fr[n];
  }), pu.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (r[o] = i[o]), ua(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = i[o][s];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(o) {
        Rr[o] || (Rr[o] = []), Rr[o].push(a[o]);
      });
    }
    n.provides && n.provides(Fr);
  }), r;
}
function Os(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = Rr[t] || [];
  return a.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function fr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = Rr[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function _t() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Fr[t] ? Fr[t].apply(null, e) : void 0;
}
function _s(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || Vt();
  if (e)
    return e = or(r, e) || e, cu(_f.definitions, r, e) || cu(Xe.styles, r, e);
}
var _f = new $h(), Rh = function() {
  N.autoReplaceSvg = !1, N.observeMutations = !1, fr("noAuto");
}, Nh = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Et ? (fr("beforeI2svg", e), _t("pseudoElements2svg", e), _t("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0), N.observeMutations = !0, wh(function() {
      Fh({
        autoReplaceSvgRoot: r
      }), fr("watch", e);
    });
  }
}, Lh = {
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
    if (typeof e == "string" && (e.indexOf("".concat(N.cssPrefix, "-")) > -1 || e.match(rh))) {
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
}, je = {
  noAuto: Rh,
  config: N,
  dom: Nh,
  parse: Lh,
  library: _f,
  findIconDefinition: _s,
  toHtml: Zn
}, Fh = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? oe : r;
  (Object.keys(Xe.styles).length > 0 || N.autoFetchSvg) && Et && N.autoReplaceSvg && je.dom.i2svg({
    node: n
  });
};
function Da(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return Zn(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Et) {
        var n = oe.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Mh(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, o = t.transform;
  if (bl(o) && r.found && !n.found) {
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
function Bh(t) {
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
function Ol(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, o = t.transform, s = t.symbol, u = t.title, c = t.maskId, f = t.titleId, p = t.extra, g = t.watchable, v = g === void 0 ? !1 : g, m = n.found ? n : r, y = m.width, b = m.height, w = i === "fak", E = [N.replacementClass, a ? "".concat(N.cssPrefix, "-").concat(a) : ""].filter(function(M) {
    return p.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(p.classes).join(" "), O = {
    children: [],
    attributes: D(D({}, p.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: E,
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
      id: O.attributes["aria-labelledby"] || "title-".concat(f || Un())
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
  }), T = n.found && r.found ? _t("generateAbstractMask", $) || {
    children: [],
    attributes: {}
  } : _t("generateAbstractIcon", $) || {
    children: [],
    attributes: {}
  }, I = T.children, R = T.attributes;
  return $.children = I, $.attributes = R, s ? Bh($) : Mh($);
}
function hu(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, o = t.extra, s = t.watchable, u = s === void 0 ? !1 : s, c = D(D(D({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[cr] = "");
  var f = D({}, o.styles);
  bl(i) && (f.transform = gh({
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
function jh(t) {
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
function As(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = pl(n, 1), a = i[0], o = null;
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
var zh = {
  found: !1,
  width: 512,
  height: 512
};
function Uh(t, e) {
  !cf && !N.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Es(t, e) {
  var r = e;
  return e === "fa" && N.styleDefault !== null && (e = Vt()), new Promise(function(n, i) {
    if (_t("missingIconAbstract"), r === "fa") {
      var a = Of(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Vo[e] && Vo[e][t]) {
      var o = Vo[e][t];
      return n(As(o));
    }
    Uh(t, e), n(D(D({}, zh), {}, {
      icon: N.showMissingIcons && t ? _t("missingIconAbstract") || {} : {}
    }));
  });
}
var mu = function() {
}, Cs = N.measurePerformance && ki && ki.mark && ki.measure ? ki : {
  mark: mu,
  measure: mu
}, Cn = 'FA "6.5.1"', Vh = function(e) {
  return Cs.mark("".concat(Cn, " ").concat(e, " begins")), function() {
    return Af(e);
  };
}, Af = function(e) {
  Cs.mark("".concat(Cn, " ").concat(e, " ends")), Cs.measure("".concat(Cn, " ").concat(e), "".concat(Cn, " ").concat(e, " begins"), "".concat(Cn, " ").concat(e, " ends"));
}, _l = {
  begin: Vh,
  end: Af
}, Zi = function() {
};
function gu(t) {
  var e = t.getAttribute ? t.getAttribute(cr) : null;
  return typeof e == "string";
}
function Hh(t) {
  var e = t.getAttribute ? t.getAttribute(ml) : null, r = t.getAttribute ? t.getAttribute(gl) : null;
  return e && r;
}
function Wh(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(N.replacementClass);
}
function qh() {
  if (N.autoReplaceSvg === !0)
    return ea.replace;
  var t = ea[N.autoReplaceSvg];
  return t || ea.replace;
}
function Gh(t) {
  return oe.createElementNS("http://www.w3.org/2000/svg", t);
}
function Yh(t) {
  return oe.createElement(t);
}
function Ef(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? Gh : Yh : r;
  if (typeof t == "string")
    return oe.createTextNode(t);
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
function Kh(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var ea = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Ef(i), r);
      }), r.getAttribute(cr) === null && N.keepOriginalSource) {
        var n = oe.createComment(Kh(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~vl(r).indexOf(N.replacementClass))
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
      return Zn(s);
    }).join(`
`);
    r.setAttribute(cr, ""), r.innerHTML = o;
  }
};
function yu(t) {
  t();
}
function Cf(t, e) {
  var r = typeof e == "function" ? e : Zi;
  if (t.length === 0)
    r();
  else {
    var n = yu;
    N.mutateApproach === Zp && (n = Ut.requestAnimationFrame || yu), n(function() {
      var i = qh(), a = _l.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var Al = !1;
function kf() {
  Al = !0;
}
function ks() {
  Al = !1;
}
var fa = null;
function vu(t) {
  if (su && N.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? Zi : e, n = t.nodeCallback, i = n === void 0 ? Zi : n, a = t.pseudoElementsCallback, o = a === void 0 ? Zi : a, s = t.observeMutationsRoot, u = s === void 0 ? oe : s;
    fa = new su(function(c) {
      if (!Al) {
        var f = Vt();
        Kr(c).forEach(function(p) {
          if (p.type === "childList" && p.addedNodes.length > 0 && !gu(p.addedNodes[0]) && (N.searchPseudoElements && o(p.target), r(p.target)), p.type === "attributes" && p.target.parentNode && N.searchPseudoElements && o(p.target.parentNode), p.type === "attributes" && gu(p.target) && ~oh.indexOf(p.attributeName))
            if (p.attributeName === "class" && Hh(p.target)) {
              var g = Ia(vl(p.target)), v = g.prefix, m = g.iconName;
              p.target.setAttribute(ml, v || f), m && p.target.setAttribute(gl, m);
            } else
              Wh(p.target) && i(p.target);
        });
      }
    }), Et && fa.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Jh() {
  fa && fa.disconnect();
}
function Xh(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Qh(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Ia(vl(t));
  return i.prefix || (i.prefix = Vt()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Th(i.prefix, t.innerText) || xl(i.prefix, xs(t.innerText))), !i.iconName && N.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function Zh(t) {
  var e = Kr(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return N.autoA11y && (r ? e["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(n || Un()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function em() {
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
  }, r = Qh(t), n = r.iconName, i = r.prefix, a = r.rest, o = Zh(t), s = Os("parseNodeAttributes", {}, t), u = e.styleParser ? Xh(t) : [];
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
var tm = Xe.styles;
function Tf(t) {
  var e = N.autoReplaceSvg === "nest" ? bu(t, {
    styleParser: !1
  }) : bu(t);
  return ~e.extra.classes.indexOf(ff) ? _t("generateLayersText", t, e) : _t("generateSvgReplacementMutation", t, e);
}
var Ht = /* @__PURE__ */ new Set();
yl.map(function(t) {
  Ht.add("fa-".concat(t));
});
Object.keys(Mn[ie]).map(Ht.add.bind(Ht));
Object.keys(Mn[fe]).map(Ht.add.bind(Ht));
Ht = Xn(Ht);
function wu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Et)
    return Promise.resolve();
  var r = oe.documentElement.classList, n = function(p) {
    return r.add("".concat(lu, "-").concat(p));
  }, i = function(p) {
    return r.remove("".concat(lu, "-").concat(p));
  }, a = N.autoFetchSvg ? Ht : yl.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(tm));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(ff, ":not([").concat(cr, "])")].concat(a.map(function(f) {
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
  var u = _l.begin("onTree"), c = s.reduce(function(f, p) {
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
function rm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Tf(t).then(function(r) {
    r && Cf([r], e);
  });
}
function nm(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : _s(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : _s(i || {})), t(n, D(D({}, r), {}, {
      mask: i
    }));
  };
}
var im = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? st : n, a = r.symbol, o = a === void 0 ? !1 : a, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, p = r.title, g = p === void 0 ? null : p, v = r.titleId, m = v === void 0 ? null : v, y = r.classes, b = y === void 0 ? [] : y, w = r.attributes, E = w === void 0 ? {} : w, O = r.styles, C = O === void 0 ? {} : O;
  if (e) {
    var $ = e.prefix, T = e.iconName, I = e.icon;
    return Da(D({
      type: "icon"
    }, e), function() {
      return fr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), N.autoA11y && (g ? E["aria-labelledby"] = "".concat(N.replacementClass, "-title-").concat(m || Un()) : (E["aria-hidden"] = "true", E.focusable = "false")), Ol({
        icons: {
          main: As(I),
          mask: u ? As(u.icon) : {
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
        titleId: m,
        extra: {
          attributes: E,
          styles: C,
          classes: b
        }
      });
    });
  }
}, am = {
  mixout: function() {
    return {
      icon: nm(im)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = wu, r.nodeCallback = rm, r;
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
      return new Promise(function(v, m) {
        Promise.all([Es(i, s), f.iconName ? Es(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(y) {
          var b = pl(y, 2), w = b[0], E = b[1];
          v([r, Ol({
            icons: {
              main: w,
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
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.transform, s = r.styles, u = Pa(s);
      u.length > 0 && (i.style = u);
      var c;
      return bl(o) && (c = _t("generateAbstractTransformGrouping", {
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
}, om = {
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
              class: ["".concat(N.cssPrefix, "-layers")].concat(Xn(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, sm = {
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
          }), jh({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: p,
              classes: ["".concat(N.cssPrefix, "-layers-counter")].concat(Xn(s))
            }
          });
        });
      }
    };
  }
}, lm = {
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
              classes: ["".concat(N.cssPrefix, "-layers-text")].concat(Xn(c))
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
}, um = new RegExp('"', "ug"), xu = [1105920, 1112319];
function cm(t) {
  var e = t.replace(um, ""), r = Oh(e, 0), n = r >= xu[0] && r <= xu[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: xs(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Su(t, e) {
  var r = "".concat(Qp).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Kr(t.children), o = a.filter(function(I) {
      return I.getAttribute(ws) === e;
    })[0], s = Ut.getComputedStyle(t, e), u = s.getPropertyValue("font-family").match(nh), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return t.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var p = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(u[2]) ? fe : ie, v = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Bn[g][u[2].toLowerCase()] : ih[g][c], m = cm(p), y = m.value, b = m.isSecondary, w = u[0].startsWith("FontAwesome"), E = xl(v, y), O = E;
      if (w) {
        var C = Ph(y);
        C.iconName && C.prefix && (E = C.iconName, v = C.prefix);
      }
      if (E && !b && (!o || o.getAttribute(ml) !== v || o.getAttribute(gl) !== O)) {
        t.setAttribute(r, O), o && t.removeChild(o);
        var $ = em(), T = $.extra;
        T.attributes[ws] = e, Es(E, v).then(function(I) {
          var R = Ol(D(D({}, $), {}, {
            icons: {
              main: I,
              mask: Sl()
            },
            prefix: v,
            iconName: O,
            extra: T,
            watchable: !0
          })), M = oe.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(M, t.firstChild) : t.appendChild(M), M.outerHTML = R.map(function(k) {
            return Zn(k);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function fm(t) {
  return Promise.all([Su(t, "::before"), Su(t, "::after")]);
}
function dm(t) {
  return t.parentNode !== document.head && !~eh.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(ws) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ou(t) {
  if (Et)
    return new Promise(function(e, r) {
      var n = Kr(t.querySelectorAll("*")).filter(dm).map(fm), i = _l.begin("searchPseudoElements");
      kf(), Promise.all(n).then(function() {
        i(), ks(), e();
      }).catch(function() {
        i(), ks(), r();
      });
    });
}
var pm = {
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
}, _u = !1, hm = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          kf(), _u = !0;
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
        Jh();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        _u ? ks() : vu(Os("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Au = function(e) {
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
}, mm = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Au(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Au(i)), r;
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
function Eu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function gm(t) {
  return t.tag === "g" ? t.children : [t];
}
var ym = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Ia(i.split(" ").map(function(o) {
          return o.trim();
        })) : Sl();
        return a.prefix || (a.prefix = Vt()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.mask, s = r.maskId, u = r.transform, c = a.width, f = a.icon, p = o.width, g = o.icon, v = mh({
        transform: u,
        containerWidth: p,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: D(D({}, Ho), {}, {
          fill: "white"
        })
      }, y = f.children ? {
        children: f.children.map(Eu)
      } : {}, b = {
        tag: "g",
        attributes: D({}, v.inner),
        children: [Eu(D({
          tag: f.tag,
          attributes: D(D({}, f.attributes), v.path)
        }, y))]
      }, w = {
        tag: "g",
        attributes: D({}, v.outer),
        children: [b]
      }, E = "mask-".concat(s || Un()), O = "clip-".concat(s || Un()), C = {
        tag: "mask",
        attributes: D(D({}, Ho), {}, {
          id: E,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, w]
      }, $ = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: gm(g)
        }, C]
      };
      return n.push($, {
        tag: "rect",
        attributes: D({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(E, ")")
        }, Ho)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, vm = {
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
}, bm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, wm = [vh, am, om, sm, lm, pm, hm, mm, ym, vm, bm];
Dh(wm, {
  mixoutsTo: je
});
je.noAuto;
var Pf = je.config, Ra = je.library;
je.dom;
var da = je.parse;
je.findIconDefinition;
je.toHtml;
var xm = je.icon;
je.layer;
var Sm = je.text;
je.counter;
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
  return e = Pm(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Om(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function _m(t, e) {
  if (t == null)
    return {};
  var r = Om(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ts(t) {
  return Am(t) || Em(t) || Cm(t) || km();
}
function Am(t) {
  if (Array.isArray(t))
    return Ps(t);
}
function Em(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Cm(t, e) {
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
function km() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tm(t, e) {
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
function Pm(t) {
  var e = Tm(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var $m = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $f = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(w, E, O) {
      if (!c(E) || p(E) || g(E) || v(E) || u(E))
        return E;
      var C, $ = 0, T = 0;
      if (f(E))
        for (C = [], T = E.length; $ < T; $++)
          C.push(r(w, E[$], O));
      else {
        C = {};
        for (var I in E)
          Object.prototype.hasOwnProperty.call(E, I) && (C[w(I, O)] = r(w, E[I], O));
      }
      return C;
    }, n = function(w, E) {
      E = E || {};
      var O = E.separator || "_", C = E.split || /(?=[A-Z])/;
      return w.split(C).join(O);
    }, i = function(w) {
      return m(w) ? w : (w = w.replace(/[\-_\s]+(.)?/g, function(E, O) {
        return O ? O.toUpperCase() : "";
      }), w.substr(0, 1).toLowerCase() + w.substr(1));
    }, a = function(w) {
      var E = i(w);
      return E.substr(0, 1).toUpperCase() + E.substr(1);
    }, o = function(w, E) {
      return n(w, E).toLowerCase();
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
    }, m = function(w) {
      return w = w - 0, w === w;
    }, y = function(w, E) {
      var O = E && "process" in E ? E.process : E;
      return typeof O != "function" ? w : function(C, $) {
        return O(C, w, $);
      };
    }, b = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(w, E) {
        return r(y(i, E), w);
      },
      decamelizeKeys: function(w, E) {
        return r(y(o, E), w, E);
      },
      pascalizeKeys: function(w, E) {
        return r(y(a, E), w);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = b : e.humps = b;
  })($m);
})($f);
var Im = $f.exports, Dm = ["class", "style"];
function Rm(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = Im.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function Nm(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function El(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return El(u);
  }), i = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.class = Nm(f);
        break;
      case "style":
        u.style = Rm(f);
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
  var a = r.style, o = a === void 0 ? {} : a, s = _m(r, Dm);
  return sr(t.tag, Je(Je(Je({}, e), {}, {
    class: i.class,
    style: Je(Je({}, i.style), o)
  }, i.attrs), s), n);
}
var If = !1;
try {
  If = process.env.NODE_ENV === "production";
} catch {
}
function Lm() {
  if (!If && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function $n(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Ne({}, t, e) : {};
}
function Fm(t) {
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
var ha = Yr({
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
      return $n("classes", Fm(e));
    }), o = re(function() {
      return $n("transform", typeof e.transform == "string" ? da.transform(e.transform) : e.transform);
    }), s = re(function() {
      return $n("mask", ku(e.mask));
    }), u = re(function() {
      return xm(i.value, Je(Je(Je(Je({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Ta(u, function(f) {
      if (!f)
        return Lm("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = re(function() {
      return u.value ? El(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
Yr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, i = Pf.familyPrefix, a = re(function() {
      return ["".concat(i, "-layers")].concat(Ts(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return sr("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
Yr({
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
      return $n("classes", [].concat(Ts(e.counter ? ["".concat(i, "-layers-counter")] : []), Ts(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = re(function() {
      return $n("transform", typeof e.transform == "string" ? da.transform(e.transform) : e.transform);
    }), s = re(function() {
      var c = Sm(e.value.toString(), Je(Je({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = re(function() {
      return El(s.value, {}, n);
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
const Mm = { class: "relative mb-4 flex w-full max-w-full items-stretch" }, Bm = {
  key: 0,
  class: "flex items-center"
}, jm = ["id", "disabled", "required", "name"], zm = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Um = ["disabled"], Vm = ["href"], Hm = {
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
    Ra.add(Df);
    const e = t;
    function r(n) {
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (x(), A("div", null, [
      t.noLabel ? z("", !0) : (x(), se(B(Na), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field),
        sublabel: t.sublabel,
        required: t.required
      }, null, 8, ["for", "value", "sublabel", "required"])),
      P("div", Mm, [
        t.type === "checkbox" ? (x(), A("label", Bm, [
          Ve(P("input", {
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
          P("div", {
            class: K(["toggle-switch focusable !ml-0", {
              checked: e.form[t.field],
              disabled: e.disabled
            }])
          }, null, 2),
          me(" " + U(t.switchDescription ? t.switchDescription : "Enable"), 1)
        ])) : (x(), A(ce, { key: 1 }, [
          t.addon ? (x(), A("span", zm, U(t.addon), 1)) : z("", !0),
          ge(B(Rf), {
            id: t.field,
            type: t.type,
            class: K(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
              "!rounded-l-none": t.addon,
              "!rounded-r-none": !!t.submitBtn,
              "!rounded-r-none": t.whatsApp
            }]),
            modelValue: e.form[t.field],
            "onUpdate:modelValue": i[1] || (i[1] = (a) => e.form[t.field] = a),
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
          t.submitBtn ? (x(), A("button", {
            key: 1,
            disabled: e.form.processing,
            class: "font-medium z-[2] inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg",
            type: "submit",
            id: "button-input"
          }, U(t.submitBtn), 9, Um)) : z("", !0),
          t.whatsApp ? (x(), A("a", {
            key: 2,
            class: "font-medium z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg",
            href: t.whatsApp,
            target: "_blank"
          }, [
            ge(B(ha), {
              icon: "fab fa-whatsapp",
              size: "2xl"
            })
          ], 8, Vm)) : z("", !0)
        ], 64))
      ]),
      ge(B(Jr), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
}, Wm = { class: "text-sm text-red-600" }, Jr = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => Ve((x(), A("div", null, [
      P("p", Wm, U(t.message), 1)
    ], 512)), [
      [zt, t.message]
    ]);
  }
}, qm = { class: "font-medium block text-sm text-gray-700" }, Gm = { key: 0 }, Ym = { key: 1 }, Km = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Jm = {
  key: 3,
  class: "ml-1 text-red-500"
}, Na = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required"],
  setup(t) {
    return (e, r) => (x(), A("label", qm, [
      t.value ? (x(), A("span", Gm, U(t.value), 1)) : (x(), A("span", Ym, [
        H(e.$slots, "default")
      ])),
      t.sublabel ? (x(), A("span", Km, U(t.sublabel), 1)) : z("", !0),
      t.required ? (x(), A("span", Jm, "*")) : z("", !0)
    ]));
  }
}, Xm = ["value"], Rf = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = be(null);
    return Wt(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (x(), A("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, Xm));
  }
}, Qm = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Zm = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], eg = {
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
    return (n, i) => (x(), A("div", null, [
      t.noLabel ? z("", !0) : (x(), se(B(Na), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field)
      }, null, 8, ["for", "value"])),
      P("div", Qm, [
        Ve(P("textarea", {
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
        }, null, 40, Zm), [
          [Rp, e.form[t.field]]
        ])
      ]),
      ge(B(Jr), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var tg = Object.defineProperty, rg = Object.defineProperties, ng = Object.getOwnPropertyDescriptors, Tu = Object.getOwnPropertySymbols, ig = Object.prototype.hasOwnProperty, ag = Object.prototype.propertyIsEnumerable, Pu = (t, e, r) => e in t ? tg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kr = (t, e) => {
  for (var r in e || (e = {}))
    ig.call(e, r) && Pu(t, r, e[r]);
  if (Tu)
    for (var r of Tu(e))
      ag.call(e, r) && Pu(t, r, e[r]);
  return t;
}, $u = (t, e) => rg(t, ng(e));
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
}, Cl = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, ug = {}, cg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, fg = /* @__PURE__ */ P("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), dg = [
  fg
];
function pg(t, e) {
  return x(), A("svg", cg, dg);
}
const hg = /* @__PURE__ */ Cl(ug, [["render", pg]]), mg = {}, gg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, yg = /* @__PURE__ */ P("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), vg = [
  yg
];
function bg(t, e) {
  return x(), A("svg", gg, vg);
}
const wg = /* @__PURE__ */ Cl(mg, [["render", bg]]), Iu = {
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
  components: kr({}, Iu),
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
          attributes: kr({
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
        header: $u(kr({}, t), { deselect: this.deselect }),
        footer: $u(kr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return kr(kr({}, Iu), this.components);
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
}, Lg = /* @__PURE__ */ me(" Sorry, no matching options. "), Fg = ["id"];
function Mg(t, e, r, n, i, a) {
  const o = Np("append-to-body");
  return x(), A("div", {
    dir: r.dir,
    class: K(["v-select", a.stateClasses])
  }, [
    H(t.$slots, "header", Ue(Ke(a.scope.header))),
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
      P("div", kg, [
        (x(!0), A(ce, null, Qe(a.selectedValue, (s, u) => H(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (x(), A("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            H(t.$slots, "selected-option", Ue(Ke(a.normalizeOptionForSlot(s))), () => [
              me(U(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (x(), A("button", {
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
            ], 8, Tg)) : z("", !0)
          ]))
        ])), 256)),
        H(t.$slots, "search", Ue(Ke(a.scope.search)), () => [
          P("input", Fn({ class: "vs__search" }, a.scope.search.attributes, Lp(a.scope.search.events)), null, 16)
        ])
      ], 512),
      P("div", Pg, [
        Ve(P("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (x(), se(jo(a.childComponents.Deselect)))
        ], 8, $g), [
          [zt, a.showClearButton]
        ]),
        H(t.$slots, "open-indicator", Ue(Ke(a.scope.openIndicator)), () => [
          r.noDrop ? z("", !0) : (x(), se(jo(a.childComponents.OpenIndicator), Ue(Fn({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        H(t.$slots, "spinner", Ue(Ke(a.scope.spinner)), () => [
          Ve(P("div", Ig, "Loading...", 512), [
            [zt, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Cg),
    ge(Lr, { name: r.transition }, {
      default: Ee(() => [
        a.dropdownOpen ? Ve((x(), A("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = Mt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          H(t.$slots, "list-header", Ue(Ke(a.scope.listHeader))),
          (x(!0), A(ce, null, Qe(a.filteredOptions, (s, u) => (x(), A("li", {
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
            H(t.$slots, "option", Ue(Ke(a.normalizeOptionForSlot(s))), () => [
              me(U(r.getOptionLabel(s)), 1)
            ])
          ], 42, Rg))), 128)),
          a.filteredOptions.length === 0 ? (x(), A("li", Ng, [
            H(t.$slots, "no-options", Ue(Ke(a.scope.noOptions)), () => [
              Lg
            ])
          ])) : z("", !0),
          H(t.$slots, "list-footer", Ue(Ke(a.scope.listFooter)))
        ], 40, Dg)), [
          [o]
        ]) : (x(), A("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Fg))
      ]),
      _: 3
    }, 8, ["name"]),
    H(t.$slots, "footer", Ue(Ke(a.scope.footer)))
  ], 10, Eg);
}
const Bg = /* @__PURE__ */ Cl(Ag, [["render", Mg]]);
const jg = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return Ra.add(Df), (e, r) => (x(), se(B(Bg), {
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
function zg(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Nf = {
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
      default: (t, e) => t.match(zg(e))
    }
  }
}, Ug = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Vg = {
  name: "ModelSelect",
  mixins: [Nf],
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
}, Hg = /* @__PURE__ */ P("i", { class: "dropdown icon" }, null, -1), Wg = ["disabled", "tabindex", "id", "name", "value"], qg = ["data-vss-custom-attr"], Gg = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Yg(t, e, r, n, i, a) {
  return x(), A("div", {
    class: K(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    Hg,
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
        e[2] || (e[2] = Cr((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = Cr(Mt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = Cr((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = Cr((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = Cr(Mt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = Cr((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, Wg),
    P("div", {
      class: K(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, U(a.inputText), 11, qg),
    P("div", {
      class: K(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = Mt(() => {
      }, ["prevent"])),
      style: Qi(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), A(ce, null, Qe(a.filteredOptions, (o, s) => (x(), A("div", {
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
          me(U(o.text), 1)
        ])
      ], 42, Gg))), 128))
    ], 38)
  ], 34);
}
const Du = /* @__PURE__ */ Ug(Vg, [["render", Yg]]), Ru = {
  name: "ModelListSelect",
  mixins: [Nf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return sr(Du, {
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
const Kg = {
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
    return (i, a) => (x(), A("div", null, [
      !t.noLabel && (t.label || t.field) ? (x(), se(B(Na), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"])) : (x(), A(ce, { key: 2 }, [
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
        ge(B(Jr), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
};
function Lf(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Jg } = Object.prototype, { getPrototypeOf: kl } = Object, La = ((t) => (e) => {
  const r = Jg.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (t) => (t = t.toLowerCase(), (e) => La(e) === t), Fa = (t) => (e) => typeof e === t, { isArray: Xr } = Array, Vn = Fa("undefined");
function Xg(t) {
  return t !== null && !Vn(t) && t.constructor !== null && !Vn(t.constructor) && He(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ff = dt("ArrayBuffer");
function Qg(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Ff(t.buffer), e;
}
const Zg = Fa("string"), He = Fa("function"), Mf = Fa("number"), Ma = (t) => t !== null && typeof t == "object", ey = (t) => t === !0 || t === !1, ta = (t) => {
  if (La(t) !== "object")
    return !1;
  const e = kl(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ty = dt("Date"), ry = dt("File"), ny = dt("Blob"), iy = dt("FileList"), ay = (t) => Ma(t) && He(t.pipe), oy = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || He(t.append) && ((e = La(t)) === "formdata" || // detect form-data instance
  e === "object" && He(t.toString) && t.toString() === "[object FormData]"));
}, sy = dt("URLSearchParams"), ly = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ei(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Xr(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Bf(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const jf = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), zf = (t) => !Vn(t) && t !== jf;
function $s() {
  const { caseless: t } = zf(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Bf(e, i) || i;
    ta(e[a]) && ta(n) ? e[a] = $s(e[a], n) : ta(n) ? e[a] = $s({}, n) : Xr(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ei(arguments[n], r);
  return e;
}
const uy = (t, e, r, { allOwnKeys: n } = {}) => (ei(e, (i, a) => {
  r && He(i) ? t[a] = Lf(i, r) : t[a] = i;
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
    t = r !== !1 && kl(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, py = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, hy = (t) => {
  if (!t)
    return null;
  if (Xr(t))
    return t;
  let e = t.length;
  if (!Mf(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, my = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && kl(Uint8Array)), gy = (t, e) => {
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
}, vy = dt("HTMLFormElement"), by = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Nu = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), wy = dt("RegExp"), Uf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ei(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, xy = (t) => {
  Uf(t, (e, r) => {
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
  return Xr(t) ? n(t) : n(String(t).split(e)), r;
}, Oy = () => {
}, _y = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Wo = "abcdefghijklmnopqrstuvwxyz", Lu = "0123456789", Vf = {
  DIGIT: Lu,
  ALPHA: Wo,
  ALPHA_DIGIT: Wo + Wo.toUpperCase() + Lu
}, Ay = (t = 16, e = Vf.ALPHA_DIGIT) => {
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
        const a = Xr(n) ? [] : {};
        return ei(n, (o, s) => {
          const u = r(o, i + 1);
          !Vn(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, ky = dt("AsyncFunction"), Ty = (t) => t && (Ma(t) || He(t)) && He(t.then) && He(t.catch), _ = {
  isArray: Xr,
  isArrayBuffer: Ff,
  isBuffer: Xg,
  isFormData: oy,
  isArrayBufferView: Qg,
  isString: Zg,
  isNumber: Mf,
  isBoolean: ey,
  isObject: Ma,
  isPlainObject: ta,
  isUndefined: Vn,
  isDate: ty,
  isFile: ry,
  isBlob: ny,
  isRegExp: wy,
  isFunction: He,
  isStream: ay,
  isURLSearchParams: sy,
  isTypedArray: my,
  isFileList: iy,
  forEach: ei,
  merge: $s,
  extend: uy,
  trim: ly,
  stripBOM: cy,
  inherits: fy,
  toFlatObject: dy,
  kindOf: La,
  kindOfTest: dt,
  endsWith: py,
  toArray: hy,
  forEachEntry: gy,
  matchAll: yy,
  isHTMLForm: vy,
  hasOwnProperty: Nu,
  hasOwnProp: Nu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Uf,
  freezeMethods: xy,
  toObjectSet: Sy,
  toCamelCase: by,
  noop: Oy,
  toFiniteNumber: _y,
  findKey: Bf,
  global: jf,
  isContextDefined: zf,
  ALPHABET: Vf,
  generateString: Ay,
  isSpecCompliantForm: Ey,
  toJSONObject: Cy,
  isAsyncFn: ky,
  isThenable: Ty
};
function Y(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
_.inherits(Y, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Hf = Y.prototype, Wf = {};
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
  Wf[t] = { value: t };
});
Object.defineProperties(Y, Wf);
Object.defineProperty(Hf, "isAxiosError", { value: !0 });
Y.from = (t, e, r, n, i, a) => {
  const o = Object.create(Hf);
  return _.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Y.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Py = null;
function Is(t) {
  return _.isPlainObject(t) || _.isArray(t);
}
function qf(t) {
  return _.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Fu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = qf(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function $y(t) {
  return _.isArray(t) && !t.some(Is);
}
const Iy = _.toFlatObject(_, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ba(t, e, r) {
  if (!_.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = _.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, b) {
    return !_.isUndefined(b[y]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(e);
  if (!_.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (_.isDate(m))
      return m.toISOString();
    if (!u && _.isBlob(m))
      throw new Y("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(m) || _.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, y, b) {
    let w = m;
    if (m && !b && typeof m == "object") {
      if (_.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (_.isArray(m) && $y(m) || (_.isFileList(m) || _.endsWith(y, "[]")) && (w = _.toArray(m)))
        return y = qf(y), w.forEach(function(O, C) {
          !(_.isUndefined(O) || O === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fu([y], C, a) : o === null ? y : y + "[]",
            c(O)
          );
        }), !1;
    }
    return Is(m) ? !0 : (e.append(Fu(b, y, a), c(m)), !1);
  }
  const p = [], g = Object.assign(Iy, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Is
  });
  function v(m, y) {
    if (!_.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(m), _.forEach(m, function(w, E) {
        (!(_.isUndefined(w) || w === null) && i.call(
          e,
          w,
          _.isString(E) ? E.trim() : E,
          y,
          g
        )) === !0 && v(w, y ? y.concat(E) : [E]);
      }), p.pop();
    }
  }
  if (!_.isObject(t))
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
function Tl(t, e) {
  this._pairs = [], t && Ba(t, this, e);
}
const Gf = Tl.prototype;
Gf.append = function(e, r) {
  this._pairs.push([e, r]);
};
Gf.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Mu);
  } : Mu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Dy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yf(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Dy, i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = _.isURLSearchParams(e) ? e.toString() : new Tl(e, r).toString(n), a) {
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
    _.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Bu = Ry, Kf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ny = typeof URLSearchParams < "u" ? URLSearchParams : Tl, Ly = typeof FormData < "u" ? FormData : null, Fy = typeof Blob < "u" ? Blob : null, My = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ny,
    FormData: Ly,
    Blob: Fy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jf = typeof window < "u" && typeof document < "u", By = ((t) => Jf && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), jy = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jf,
  hasStandardBrowserEnv: By,
  hasStandardBrowserWebWorkerEnv: jy
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ...zy,
  ...My
};
function Uy(t, e) {
  return Ba(t, new lt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return lt.isNode && _.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Vy(t) {
  return _.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
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
function Xf(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && _.isArray(i) ? i.length : o, u ? (_.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !_.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && _.isArray(i[o]) && (i[o] = Hy(i[o])), !s);
  }
  if (_.isFormData(t) && _.isFunction(t.entries)) {
    const r = {};
    return _.forEachEntry(t, (n, i) => {
      e(Vy(n), i, r, 0);
    }), r;
  }
  return null;
}
function Wy(t, e, r) {
  if (_.isString(t))
    try {
      return (e || JSON.parse)(t), _.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Pl = {
  transitional: Kf,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = _.isObject(e);
    if (a && _.isHTMLForm(e) && (e = new FormData(e)), _.isFormData(e))
      return i ? JSON.stringify(Xf(e)) : e;
    if (_.isArrayBuffer(e) || _.isBuffer(e) || _.isStream(e) || _.isFile(e) || _.isBlob(e))
      return e;
    if (_.isArrayBufferView(e))
      return e.buffer;
    if (_.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Uy(e, this.formSerializer).toString();
      if ((s = _.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
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
    const r = this.transitional || Pl.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && _.isString(e) && (n && !this.responseType || i)) {
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Pl.headers[t] = {};
});
const $l = Pl, qy = _.toObjectSet([
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
}, ju = Symbol("internals");
function bn(t) {
  return t && String(t).trim().toLowerCase();
}
function ra(t) {
  return t === !1 || t == null ? t : _.isArray(t) ? t.map(ra) : String(t);
}
function Yy(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Ky = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function qo(t, e, r, n, i) {
  if (_.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!_.isString(e)) {
    if (_.isString(n))
      return e.indexOf(n) !== -1;
    if (_.isRegExp(n))
      return n.test(e);
  }
}
function Jy(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Xy(t, e) {
  const r = _.toCamelCase(" " + e);
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
      const f = bn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = _.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = ra(s));
    }
    const o = (s, u) => _.forEach(s, (c, f) => a(c, f, u));
    return _.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : _.isString(e) && (e = e.trim()) && !Ky(e) ? o(Gy(e), r) : e != null && a(r, e, n), this;
  }
  get(e, r) {
    if (e = bn(e), e) {
      const n = _.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Yy(i);
        if (_.isFunction(r))
          return r.call(this, i, n);
        if (_.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = bn(e), e) {
      const n = _.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || qo(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = bn(o), o) {
        const s = _.findKey(n, o);
        s && (!r || qo(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return _.isArray(e) ? e.forEach(a) : a(e), i;
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
    return _.forEach(this, (i, a) => {
      const o = _.findKey(n, a);
      if (o) {
        r[o] = ra(i), delete r[a];
        return;
      }
      const s = e ? Jy(a) : String(a).trim();
      s !== a && delete r[a], r[s] = ra(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && _.isArray(n) ? n.join(", ") : n);
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
      const s = bn(o);
      n[s] || (Xy(i, o), n[s] = !0);
    }
    return _.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
ja.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(ja.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
_.freezeMethods(ja);
const xt = ja;
function Go(t, e) {
  const r = this || $l, n = e || r, i = xt.from(n.headers);
  let a = n.data;
  return _.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function Qf(t) {
  return !!(t && t.__CANCEL__);
}
function ti(t, e, r) {
  Y.call(this, t ?? "canceled", Y.ERR_CANCELED, e, r), this.name = "CanceledError";
}
_.inherits(ti, Y, {
  __CANCEL__: !0
});
function Qy(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new Y(
    "Request failed with status code " + r.status,
    [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Zy = lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      _.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), _.isString(n) && o.push("path=" + n), _.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function Zf(t, e) {
  return t && !ev(e) ? tv(t, e) : e;
}
const rv = lt.hasStandardBrowserEnv ? (
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
      const s = _.isString(o) ? i(o) : o;
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
function zu(t, e) {
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
    const a = xt.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (_.isFormData(i)) {
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
    const g = Zf(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), Yf(g, t.params, t.paramsSerializer), !0), p.timeout = t.timeout;
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
      Qy(function(O) {
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
      const w = t.transitional || Kf;
      t.timeoutErrorMessage && (b = t.timeoutErrorMessage), n(new Y(
        b,
        w.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
        t,
        p
      )), p = null;
    }, lt.hasStandardBrowserEnv && (s && _.isFunction(s) && (s = s(t)), s || s !== !1 && rv(g))) {
      const y = t.xsrfHeaderName && t.xsrfCookieName && Zy.read(t.xsrfCookieName);
      y && a.set(t.xsrfHeaderName, y);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in p && _.forEach(a.toJSON(), function(b, w) {
      p.setRequestHeader(w, b);
    }), _.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), o && o !== "json" && (p.responseType = t.responseType), typeof t.onDownloadProgress == "function" && p.addEventListener("progress", zu(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", zu(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (y) => {
      p && (n(!y || y.type ? new ti(null, t, p) : y), p.abort(), p = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const m = nv(g);
    if (m && lt.protocols.indexOf(m) === -1) {
      n(new Y("Unsupported protocol " + m + ":", Y.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Ds = {
  http: Py,
  xhr: ov
};
_.forEach(Ds, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Uu = (t) => `- ${t}`, sv = (t) => _.isFunction(t) || t === null || t === !1, ed = {
  getAdapter: (t) => {
    t = _.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !sv(r) && (n = Ds[(o = String(r)).toLowerCase()], n === void 0))
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
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ed.getAdapter(t.adapter || $l.adapter)(t).then(function(n) {
    return Yo(t), n.data = Go.call(
      t,
      t.transformResponse,
      n
    ), n.headers = xt.from(n.headers), n;
  }, function(n) {
    return Qf(n) || (Yo(t), n && n.response && (n.response.data = Go.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = xt.from(n.response.headers))), Promise.reject(n);
  });
}
const Hu = (t) => t instanceof xt ? t.toJSON() : t;
function jr(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, p) {
    return _.isPlainObject(c) && _.isPlainObject(f) ? _.merge.call({ caseless: p }, c, f) : _.isPlainObject(f) ? _.merge({}, f) : _.isArray(f) ? f.slice() : f;
  }
  function i(c, f, p) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(c))
        return n(void 0, c, p);
    } else
      return n(c, f, p);
  }
  function a(c, f) {
    if (!_.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (_.isUndefined(f)) {
      if (!_.isUndefined(c))
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
  return _.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, g = p(t[f], e[f], f);
    _.isUndefined(g) && p !== s || (r[f] = g);
  }), r;
}
const td = "1.6.7", Il = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Il[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Wu = {};
Il.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + td + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
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
function lv(t, e, r) {
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
  assertOptions: lv,
  validators: Il
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = jr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Rs.assertOptions(n, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), i != null && (_.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Rs.assertOptions(i, {
      encode: Nt.function,
      serialize: Nt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && _.merge(
      a.common,
      a[r.method]
    );
    a && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
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
      const m = [Vu.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, c), g = m.length, f = Promise.resolve(r); p < g; )
        f = f.then(m[p++], m[p++]);
      return f;
    }
    g = s.length;
    let v = r;
    for (p = 0; p < g; ) {
      const m = s[p++], y = s[p++];
      try {
        v = m(v);
      } catch (b) {
        y.call(this, b);
        break;
      }
    }
    try {
      f = Vu.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, g = c.length; p < g; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = jr(this.defaults, e);
    const r = Zf(e.baseURL, e.url);
    return Yf(r, e.params, e.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(e) {
  ma.prototype[e] = function(r, n) {
    return this.request(jr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(jr(s || {}, {
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
class Dl {
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
      token: new Dl(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const uv = Dl;
function cv(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function fv(t) {
  return _.isObject(t) && t.isAxiosError === !0;
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
const dv = Ns;
function rd(t) {
  const e = new na(t), r = Lf(na.prototype.request, e);
  return _.extend(r, na.prototype, e, { allOwnKeys: !0 }), _.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return rd(jr(t, i));
  }, r;
}
const ye = rd($l);
ye.Axios = na;
ye.CanceledError = ti;
ye.CancelToken = uv;
ye.isCancel = Qf;
ye.VERSION = td;
ye.toFormData = Ba;
ye.AxiosError = Y;
ye.Cancel = ye.CanceledError;
ye.all = function(e) {
  return Promise.all(e);
};
ye.spread = cv;
ye.isAxiosError = fv;
ye.mergeConfig = jr;
ye.AxiosHeaders = xt;
ye.formToJSON = (t) => Xf(_.isHTMLForm(t) ? new FormData(t) : t);
ye.getAdapter = ed.getAdapter;
ye.HttpStatusCode = dv;
ye.default = ye;
const qu = ye;
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
function Hn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? zr(wv(t), t, e) : t;
}
function xv(t, e, r) {
  return t.concat(e).map(function(n) {
    return Hn(n, r);
  });
}
function Sv(t, e) {
  if (!e.customMerge)
    return zr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : zr;
}
function Ov(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Gu(t) {
  return Object.keys(t).concat(Ov(t));
}
function nd(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function _v(t, e) {
  return nd(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Av(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Gu(t).forEach(function(i) {
    n[i] = Hn(t[i], r);
  }), Gu(e).forEach(function(i) {
    _v(t, i) || (nd(t, i) && r.isMergeableObject(e[i]) ? n[i] = Sv(i, r)(t[i], e[i], r) : n[i] = Hn(e[i], r));
  }), n;
}
function zr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || xv, r.isMergeableObject = r.isMergeableObject || hv, r.cloneUnlessOtherwiseSpecified = Hn;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : Av(t, e, r) : Hn(e, r);
}
zr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return zr(n, i, r);
  }, {});
};
var Ev = zr, Cv = Ev;
const kv = /* @__PURE__ */ za(Cv);
var Tv = Error, Pv = EvalError, $v = RangeError, Iv = ReferenceError, id = SyntaxError, ri = TypeError, Dv = URIError, Rv = function() {
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
}, Yu = typeof Symbol < "u" && Symbol, Nv = Rv, Lv = function() {
  return typeof Yu != "function" || typeof Symbol != "function" || typeof Yu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Nv();
}, Ku = {
  foo: {}
}, Fv = Object, Mv = function() {
  return { __proto__: Ku }.foo === Ku.foo && !({ __proto__: null } instanceof Fv);
}, Bv = "Function.prototype.bind called on incompatible ", jv = Object.prototype.toString, zv = Math.max, Uv = "[object Function]", Ju = function(e, r) {
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
        Ju(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Ju(n, arguments)
    );
  }, o = zv(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + Hv(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, qv = Wv, Rl = Function.prototype.bind || qv, Gv = Function.prototype.call, Yv = Object.prototype.hasOwnProperty, Kv = Rl, Jv = Kv.call(Gv, Yv), W, Xv = Tv, Qv = Pv, Zv = $v, eb = Iv, Ur = id, Mr = ri, tb = Dv, ad = Function, Ko = function(t) {
  try {
    return ad('"use strict"; return (' + t + ").constructor;")();
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
  throw new Mr();
}, rb = lr ? function() {
  try {
    return arguments.callee, Jo;
  } catch {
    try {
      return lr(arguments, "callee").get;
    } catch {
      return Jo;
    }
  }
}() : Jo, Tr = Lv(), nb = Mv(), Oe = Object.getPrototypeOf || (nb ? function(t) {
  return t.__proto__;
} : null), Ir = {}, ib = typeof Uint8Array > "u" || !Oe ? W : Oe(Uint8Array), ur = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? W : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? W : ArrayBuffer,
  "%ArrayIteratorPrototype%": Tr && Oe ? Oe([][Symbol.iterator]()) : W,
  "%AsyncFromSyncIteratorPrototype%": W,
  "%AsyncFunction%": Ir,
  "%AsyncGenerator%": Ir,
  "%AsyncGeneratorFunction%": Ir,
  "%AsyncIteratorPrototype%": Ir,
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
  "%Function%": ad,
  "%GeneratorFunction%": Ir,
  "%Int8Array%": typeof Int8Array > "u" ? W : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? W : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? W : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Tr && Oe ? Oe(Oe([][Symbol.iterator]())) : W,
  "%JSON%": typeof JSON == "object" ? JSON : W,
  "%Map%": typeof Map > "u" ? W : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Tr || !Oe ? W : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
  "%SetIteratorPrototype%": typeof Set > "u" || !Tr || !Oe ? W : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? W : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Tr && Oe ? Oe(""[Symbol.iterator]()) : W,
  "%Symbol%": Tr ? Symbol : W,
  "%SyntaxError%": Ur,
  "%ThrowTypeError%": rb,
  "%TypedArray%": ib,
  "%TypeError%": Mr,
  "%Uint8Array%": typeof Uint8Array > "u" ? W : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? W : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? W : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? W : Uint32Array,
  "%URIError%": tb,
  "%WeakMap%": typeof WeakMap > "u" ? W : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? W : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? W : WeakSet
};
if (Oe)
  try {
    null.error;
  } catch (t) {
    var ab = Oe(Oe(t));
    ur["%Error.prototype%"] = ab;
  }
var ob = function t(e) {
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
}, ni = Rl, ga = Jv, sb = ni.call(Function.call, Array.prototype.concat), lb = ni.call(Function.apply, Array.prototype.splice), Qu = ni.call(Function.call, String.prototype.replace), ya = ni.call(Function.call, String.prototype.slice), ub = ni.call(Function.call, RegExp.prototype.exec), cb = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, fb = /\\(\\)?/g, db = function(e) {
  var r = ya(e, 0, 1), n = ya(e, -1);
  if (r === "%" && n !== "%")
    throw new Ur("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ur("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Qu(e, cb, function(a, o, s, u) {
    i[i.length] = s ? Qu(u, fb, "$1") : o || a;
  }), i;
}, pb = function(e, r) {
  var n = e, i;
  if (ga(Xu, n) && (i = Xu[n], n = "%" + i[0] + "%"), ga(ur, n)) {
    var a = ur[n];
    if (a === Ir && (a = ob(n)), typeof a > "u" && !r)
      throw new Mr("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Ur("intrinsic " + e + " does not exist!");
}, dr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Mr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Mr('"allowMissing" argument must be a boolean');
  if (ub(/^%?[^%]*%?$/, e) === null)
    throw new Ur("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = db(e), i = n.length > 0 ? n[0] : "", a = pb("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], lb(n, sb([0, 1], c)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var g = n[f], v = ya(g, 0, 1), m = ya(g, -1);
    if ((v === '"' || v === "'" || v === "`" || m === '"' || m === "'" || m === "`") && v !== m)
      throw new Ur("property names with quotes must have matching quotes");
    if ((g === "constructor" || !p) && (u = !0), i += "." + g, o = "%" + i + "%", ga(ur, o))
      s = ur[o];
    else if (s != null) {
      if (!(g in s)) {
        if (!r)
          throw new Mr("base intrinsic for " + e + " exists, but the property is not available.");
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
}, od = { exports: {} }, hb = dr, Ls = hb("%Object.defineProperty%", !0), Fs = function() {
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
var sd = Fs, mb = dr, ia = mb("%Object.getOwnPropertyDescriptor%", !0);
if (ia)
  try {
    ia([], "length");
  } catch {
    ia = null;
  }
var ld = ia, gb = sd(), yb = dr, In = gb && yb("%Object.defineProperty%", !0);
if (In)
  try {
    In({}, "a", { value: 1 });
  } catch {
    In = !1;
  }
var vb = id, Pr = ri, Zu = ld, bb = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Pr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Pr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Pr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Pr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Pr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Pr("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!Zu && Zu(e, r);
  if (In)
    In(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: n,
      writable: a === null && u ? u.writable : !a
    });
  else if (s || !i && !a && !o)
    e[r] = n;
  else
    throw new vb("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, wb = dr, ec = bb, xb = sd(), tc = ld, rc = ri, Sb = wb("%Math.floor%"), Ob = function(e, r) {
  if (typeof e != "function")
    throw new rc("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Sb(r) !== r)
    throw new rc("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && tc) {
    var o = tc(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (xb ? ec(
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
  var e = Rl, r = dr, n = Ob, i = ri, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
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
})(od);
var _b = od.exports, ud = dr, cd = _b, Ab = cd(ud("String.prototype.indexOf")), Eb = function(e, r) {
  var n = ud(e, !!r);
  return typeof n == "function" && Ab(e, ".prototype.") > -1 ? cd(n) : n;
};
const Cb = {}, kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cb
}, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ pv(kb);
var Nl = typeof Map == "function" && Map.prototype, Xo = Object.getOwnPropertyDescriptor && Nl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, va = Nl && Xo && typeof Xo.get == "function" ? Xo.get : null, nc = Nl && Map.prototype.forEach, Ll = typeof Set == "function" && Set.prototype, Qo = Object.getOwnPropertyDescriptor && Ll ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ba = Ll && Qo && typeof Qo.get == "function" ? Qo.get : null, ic = Ll && Set.prototype.forEach, Tb = typeof WeakMap == "function" && WeakMap.prototype, Dn = Tb ? WeakMap.prototype.has : null, Pb = typeof WeakSet == "function" && WeakSet.prototype, Rn = Pb ? WeakSet.prototype.has : null, $b = typeof WeakRef == "function" && WeakRef.prototype, ac = $b ? WeakRef.prototype.deref : null, Ib = Boolean.prototype.valueOf, Db = Object.prototype.toString, Rb = Function.prototype.toString, Nb = String.prototype.match, Fl = String.prototype.slice, Bt = String.prototype.replace, Lb = String.prototype.toUpperCase, oc = String.prototype.toLowerCase, fd = RegExp.prototype.test, sc = Array.prototype.concat, at = Array.prototype.join, Fb = Array.prototype.slice, lc = Math.floor, Ms = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Zo = Object.getOwnPropertySymbols, Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Vr = typeof Symbol == "function" && typeof Symbol.iterator == "object", $e = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Vr || "symbol") ? Symbol.toStringTag : null, dd = Object.prototype.propertyIsEnumerable, uc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function cc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || fd.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -lc(-t) : lc(t);
    if (n !== t) {
      var i = String(n), a = Fl.call(e, i.length + 1);
      return Bt.call(i, r, "$&_") + "." + Bt.call(Bt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Bt.call(e, r, "$&_");
}
var js = We, fc = js.custom, dc = hd(fc) ? fc : null, Mb = function t(e, r, n, i) {
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
    return gd(e, a);
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
  var p = r0(a, n);
  if (typeof i > "u")
    i = [];
  else if (md(i, e) >= 0)
    return "[Circular]";
  function g(ee, ue, pe) {
    if (ue && (i = Fb.call(i), i.push(ue)), pe) {
      var xe = {
        depth: a.depth
      };
      return Ft(a, "quoteStyle") && (xe.quoteStyle = a.quoteStyle), t(ee, xe, n + 1, i);
    }
    return t(ee, a, n + 1, i);
  }
  if (typeof e == "function" && !pc(e)) {
    var v = Gb(e), m = Fi(e, g);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (m.length > 0 ? " { " + at.call(m, ", ") + " }" : "");
  }
  if (hd(e)) {
    var y = Vr ? Bt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Bs.call(e);
    return typeof e == "object" && !Vr ? wn(y) : y;
  }
  if (Zb(e)) {
    for (var b = "<" + oc.call(String(e.nodeName)), w = e.attributes || [], E = 0; E < w.length; E++)
      b += " " + w[E].name + "=" + pd(Bb(w[E].value), "double", a);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + oc.call(String(e.nodeName)) + ">", b;
  }
  if (zs(e)) {
    if (e.length === 0)
      return "[]";
    var O = Fi(e, g);
    return p && !t0(O) ? "[" + Us(O, p) + "]" : "[ " + at.call(O, ", ") + " ]";
  }
  if (zb(e)) {
    var C = Fi(e, g);
    return !("cause" in Error.prototype) && "cause" in e && !dd.call(e, "cause") ? "{ [" + String(e) + "] " + at.call(sc.call("[cause]: " + g(e.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + at.call(C, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (dc && typeof e[dc] == "function" && js)
      return js(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Yb(e)) {
    var $ = [];
    return nc && nc.call(e, function(ee, ue) {
      $.push(g(ue, e, !0) + " => " + g(ee, e));
    }), hc("Map", va.call(e), $, p);
  }
  if (Xb(e)) {
    var T = [];
    return ic && ic.call(e, function(ee) {
      T.push(g(ee, e));
    }), hc("Set", ba.call(e), T, p);
  }
  if (Kb(e))
    return es("WeakMap");
  if (Qb(e))
    return es("WeakSet");
  if (Jb(e))
    return es("WeakRef");
  if (Vb(e))
    return wn(g(Number(e)));
  if (Wb(e))
    return wn(g(Ms.call(e)));
  if (Hb(e))
    return wn(Ib.call(e));
  if (Ub(e))
    return wn(g(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === ut)
    return "{ [object globalThis] }";
  if (!jb(e) && !pc(e)) {
    var I = Fi(e, g), R = uc ? uc(e) === Object.prototype : e instanceof Object || e.constructor === Object, M = e instanceof Object ? "" : "null prototype", k = !R && $e && Object(e) === e && $e in e ? Fl.call(qt(e), 8, -1) : M ? "Object" : "", F = R || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", V = F + (k || M ? "[" + at.call(sc.call([], k || [], M || []), ": ") + "] " : "");
    return I.length === 0 ? V + "{}" : p ? V + "{" + Us(I, p) + "}" : V + "{ " + at.call(I, ", ") + " }";
  }
  return String(e);
};
function pd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Bb(t) {
  return Bt.call(String(t), /"/g, "&quot;");
}
function zs(t) {
  return qt(t) === "[object Array]" && (!$e || !(typeof t == "object" && $e in t));
}
function jb(t) {
  return qt(t) === "[object Date]" && (!$e || !(typeof t == "object" && $e in t));
}
function pc(t) {
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
function hd(t) {
  if (Vr)
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
function Wb(t) {
  if (!t || typeof t != "object" || !Ms)
    return !1;
  try {
    return Ms.call(t), !0;
  } catch {
  }
  return !1;
}
var qb = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Ft(t, e) {
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
function md(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function Yb(t) {
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
function Kb(t) {
  if (!Dn || !t || typeof t != "object")
    return !1;
  try {
    Dn.call(t, Dn);
    try {
      Rn.call(t, Rn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Jb(t) {
  if (!ac || !t || typeof t != "object")
    return !1;
  try {
    return ac.call(t), !0;
  } catch {
  }
  return !1;
}
function Xb(t) {
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
function Qb(t) {
  if (!Rn || !t || typeof t != "object")
    return !1;
  try {
    Rn.call(t, Rn);
    try {
      Dn.call(t, Dn);
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
function gd(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return gd(Fl.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = Bt.call(Bt.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, e0);
  return pd(i, "single", e);
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
function wn(t) {
  return "Object(" + t + ")";
}
function es(t) {
  return t + " { ? }";
}
function hc(t, e, r, n) {
  var i = n ? Us(r, n) : at.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function t0(t) {
  for (var e = 0; e < t.length; e++)
    if (md(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function r0(t, e) {
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
  if (Vr) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in t)
    Ft(t, u) && (r && String(Number(u)) === u && u < t.length || Vr && o["$" + u] instanceof Symbol || (fd.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof Zo == "function")
    for (var c = 0; c < a.length; c++)
      dd.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var yd = dr, Qr = Eb, n0 = Mb, i0 = ri, Mi = yd("%WeakMap%", !0), Bi = yd("%Map%", !0), a0 = Qr("WeakMap.prototype.get", !0), o0 = Qr("WeakMap.prototype.set", !0), s0 = Qr("WeakMap.prototype.has", !0), l0 = Qr("Map.prototype.get", !0), u0 = Qr("Map.prototype.set", !0), c0 = Qr("Map.prototype.has", !0), Ml = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, f0 = function(t, e) {
  var r = Ml(t, e);
  return r && r.value;
}, d0 = function(t, e, r) {
  var n = Ml(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, p0 = function(t, e) {
  return !!Ml(t, e);
}, h0 = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new i0("Side channel does not contain " + n0(a));
    },
    get: function(a) {
      if (Mi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return a0(e, a);
      } else if (Bi) {
        if (r)
          return l0(r, a);
      } else if (n)
        return f0(n, a);
    },
    has: function(a) {
      if (Mi && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return s0(e, a);
      } else if (Bi) {
        if (r)
          return c0(r, a);
      } else if (n)
        return p0(n, a);
      return !1;
    },
    set: function(a, o) {
      Mi && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Mi()), o0(e, a, o)) : Bi ? (r || (r = new Bi()), u0(r, a, o)) : (n || (n = { key: {}, next: null }), d0(n, a, o));
    }
  };
  return i;
}, m0 = String.prototype.replace, g0 = /%20/g, ts = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Bl = {
  default: ts.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return m0.call(t, g0, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: ts.RFC1738,
  RFC3986: ts.RFC3986
}, y0 = Bl, rs = Object.prototype.hasOwnProperty, ir = Array.isArray, nt = function() {
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
}, vd = function(e, r) {
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
      (n && (n.plainObjects || n.allowPrototypes) || !rs.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return ir(e) && !ir(r) && (i = vd(e, n)), ir(e) && ir(r) ? (r.forEach(function(a, o) {
    if (rs.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return rs.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
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
}, bd = {
  arrayToObject: vd,
  assign: w0,
  combine: E0,
  compact: O0,
  decode: x0,
  encode: S0,
  isBuffer: A0,
  isRegExp: _0,
  maybeMap: C0,
  merge: b0
}, wd = h0, aa = bd, Nn = Bl, k0 = Object.prototype.hasOwnProperty, mc = {
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
}, wt = Array.isArray, T0 = Array.prototype.push, xd = function(t, e) {
  T0.apply(t, wt(e) ? e : [e]);
}, P0 = Date.prototype.toISOString, gc = Nn.default, Pe = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: aa.encode,
  encodeValuesOnly: !1,
  format: gc,
  formatter: Nn.formatters[gc],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return P0.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, $0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ns = {}, I0 = function t(e, r, n, i, a, o, s, u, c, f, p, g, v, m, y, b) {
  for (var w = e, E = b, O = 0, C = !1; (E = E.get(ns)) !== void 0 && !C; ) {
    var $ = E.get(e);
    if (O += 1, typeof $ < "u") {
      if ($ === O)
        throw new RangeError("Cyclic object value");
      C = !0;
    }
    typeof E.get(ns) > "u" && (O = 0);
  }
  if (typeof u == "function" ? w = u(r, w) : w instanceof Date ? w = p(w) : n === "comma" && wt(w) && (w = aa.maybeMap(w, function(xe) {
    return xe instanceof Date ? p(xe) : xe;
  })), w === null) {
    if (a)
      return s && !m ? s(r, Pe.encoder, y, "key", g) : r;
    w = "";
  }
  if ($0(w) || aa.isBuffer(w)) {
    if (s) {
      var T = m ? r : s(r, Pe.encoder, y, "key", g);
      return [v(T) + "=" + v(s(w, Pe.encoder, y, "value", g))];
    }
    return [v(r) + "=" + v(String(w))];
  }
  var I = [];
  if (typeof w > "u")
    return I;
  var R;
  if (n === "comma" && wt(w))
    m && s && (w = aa.maybeMap(w, s)), R = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
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
      var pe = wd();
      pe.set(ns, b), xd(I, t(
        ee,
        ue,
        n,
        i,
        a,
        o,
        n === "comma" && m && wt(w) ? null : s,
        u,
        c,
        f,
        p,
        g,
        v,
        m,
        y,
        pe
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
  var n = Nn.default;
  if (typeof e.format < "u") {
    if (!k0.call(Nn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Nn.formatters[n], a = Pe.filter;
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
}, R0 = function(t, e) {
  var r = t, n = D0(e), i, a;
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
  for (var f = wd(), p = 0; p < i.length; ++p) {
    var g = i[p];
    n.skipNulls && r[g] === null || xd(o, I0(
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
  var v = o.join(n.delimiter), m = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), v.length > 0 ? m + v : "";
}, Hr = bd, Vs = Object.prototype.hasOwnProperty, N0 = Array.isArray, Se = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Hr.decode,
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
}, Sd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, F0 = "utf8=%26%2310003%3B", M0 = "utf8=%E2%9C%93", B0 = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === M0 ? c = "utf-8" : o[u] === F0 && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], p = f.indexOf("]="), g = p === -1 ? f.indexOf("=") : p + 1, v, m;
      g === -1 ? (v = r.decoder(f, Se.decoder, c, "key"), m = r.strictNullHandling ? null : "") : (v = r.decoder(f.slice(0, g), Se.decoder, c, "key"), m = Hr.maybeMap(
        Sd(f.slice(g + 1), r),
        function(y) {
          return r.decoder(y, Se.decoder, c, "value");
        }
      )), m && r.interpretNumericEntities && c === "iso-8859-1" && (m = L0(m)), f.indexOf("[]=") > -1 && (m = N0(m) ? [m] : m), Vs.call(n, v) ? n[v] = Hr.combine(n[v], m) : n[v] = m;
    }
  return n;
}, j0 = function(t, e, r, n) {
  for (var i = n ? e : Sd(e, r), a = t.length - 1; a >= 0; --a) {
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
      if (!n.plainObjects && Vs.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; n.depth > 0 && (u = s.exec(a)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && Vs.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), j0(f, r, n, i);
  }
}, U0 = function(e) {
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
    delimiter: typeof e.delimiter == "string" || Hr.isRegExp(e.delimiter) ? e.delimiter : Se.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Se.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Se.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Se.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Se.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Se.strictNullHandling
  };
}, V0 = function(t, e) {
  var r = U0(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? B0(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = z0(s, n[s], r, typeof t == "string");
    i = Hr.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : Hr.compact(i);
}, H0 = R0, W0 = V0, q0 = Bl, yc = {
  formats: q0,
  parse: W0,
  stringify: H0
}, G0 = { exports: {} };
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
    r.configure = function(m) {
      var y, b;
      for (y in m)
        b = m[y], b !== void 0 && m.hasOwnProperty(y) && (n[y] = b);
      return this;
    }, r.status = null, r.set = function(m) {
      var y = r.isStarted();
      m = i(m, n.minimum, 1), r.status = m === 1 ? null : m;
      var b = r.render(!y), w = b.querySelector(n.barSelector), E = n.speed, O = n.easing;
      return b.offsetWidth, s(function(C) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(w, o(m, E, O)), m === 1 ? (u(b, {
          transition: "none",
          opacity: 1
        }), b.offsetWidth, setTimeout(function() {
          u(b, {
            transition: "all " + E + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), C();
          }, E);
        }, E)) : setTimeout(C, E);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var m = function() {
        setTimeout(function() {
          r.status && (r.trickle(), m());
        }, n.trickleSpeed);
      };
      return n.trickle && m(), this;
    }, r.done = function(m) {
      return !m && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(m) {
      var y = r.status;
      return y ? (typeof m != "number" && (m = (1 - y) * i(Math.random() * y, 0.1, 0.95)), y = i(y + m, 0, 0.994), r.set(y)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var m = 0, y = 0;
      r.promise = function(b) {
        return !b || b.state() === "resolved" ? this : (y === 0 && r.start(), m++, y++, b.always(function() {
          y--, y === 0 ? (m = 0, r.done()) : r.set((m - y) / m);
        }), this);
      };
    }(), r.render = function(m) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var y = document.createElement("div");
      y.id = "nprogress", y.innerHTML = n.template;
      var b = y.querySelector(n.barSelector), w = m ? "-100" : a(r.status || 0), E = document.querySelector(n.parent), O;
      return u(b, {
        transition: "all 0 linear",
        transform: "translate3d(" + w + "%,0,0)"
      }), n.showSpinner || (O = y.querySelector(n.spinnerSelector), O && v(O)), E != document.body && f(E, "nprogress-custom-parent"), E.appendChild(y), y;
    }, r.remove = function() {
      p(document.documentElement, "nprogress-busy"), p(document.querySelector(n.parent), "nprogress-custom-parent");
      var m = document.getElementById("nprogress");
      m && v(m);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var m = document.body.style, y = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
      return y + "Perspective" in m ? "translate3d" : y + "Transform" in m ? "translate" : "margin";
    };
    function i(m, y, b) {
      return m < y ? y : m > b ? b : m;
    }
    function a(m) {
      return (-1 + m) * 100;
    }
    function o(m, y, b) {
      var w;
      return n.positionUsing === "translate3d" ? w = { transform: "translate3d(" + a(m) + "%,0,0)" } : n.positionUsing === "translate" ? w = { transform: "translate(" + a(m) + "%,0)" } : w = { "margin-left": a(m) + "%" }, w.transition = "all " + y + "ms " + b, w;
    }
    var s = function() {
      var m = [];
      function y() {
        var b = m.shift();
        b && b(y);
      }
      return function(b) {
        m.push(b), m.length == 1 && y();
      };
    }(), u = function() {
      var m = ["Webkit", "O", "Moz", "ms"], y = {};
      function b(C) {
        return C.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function($, T) {
          return T.toUpperCase();
        });
      }
      function w(C) {
        var $ = document.body.style;
        if (C in $)
          return C;
        for (var T = m.length, I = C.charAt(0).toUpperCase() + C.slice(1), R; T--; )
          if (R = m[T] + I, R in $)
            return R;
        return C;
      }
      function E(C) {
        return C = b(C), y[C] || (y[C] = w(C));
      }
      function O(C, $, T) {
        $ = E($), C.style[$] = T;
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
    function c(m, y) {
      var b = typeof m == "string" ? m : g(m);
      return b.indexOf(" " + y + " ") >= 0;
    }
    function f(m, y) {
      var b = g(m), w = b + y;
      c(b, y) || (m.className = w.substring(1));
    }
    function p(m, y) {
      var b = g(m), w;
      c(m, y) && (w = b.replace(" " + y + " ", " "), m.className = w.substring(1, w.length - 1));
    }
    function g(m) {
      return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
    }
    function v(m) {
      m && m.parentNode && m.parentNode.removeChild(m);
    }
    return r;
  });
})(G0);
function Od(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function Ct(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var Y0 = (t) => Ct("before", { cancelable: !0, detail: { visit: t } }), K0 = (t) => Ct("error", { detail: { errors: t } }), J0 = (t) => Ct("exception", { cancelable: !0, detail: { exception: t } }), vc = (t) => Ct("finish", { detail: { visit: t } }), X0 = (t) => Ct("invalid", { cancelable: !0, detail: { response: t } }), xn = (t) => Ct("navigate", { detail: { page: t } }), Q0 = (t) => Ct("progress", { detail: { progress: t } }), Z0 = (t) => Ct("start", { detail: { visit: t } }), e1 = (t) => Ct("success", { detail: { page: t } });
function Hs(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Hs(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Hs(e));
}
function _d(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Ed(e, Ad(r, n), t[n]);
  return e;
}
function Ad(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Ed(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Ed(t, Ad(e, n.toString()), r[n]));
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
  _d(r, t, e);
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
function $r(t) {
  return new URL(t.toString(), window.location.toString());
}
function Cd(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = yc.stringify(kv(yc.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function Sn(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var bc = typeof window > "u", r1 = class {
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
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => xn(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Od(this.handleScrollEvent.bind(this), 100), !0);
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
      this.restoreScrollPositions(), xn(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, Sn(window.location).href === Sn(t).href && window.location.reload();
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
      e.preserveScroll && this.restoreScrollPositions(), xn(t);
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
  }, onFinish: m = () => {
  }, onCancel: y = () => {
  }, onSuccess: b = () => {
  }, onError: w = () => {
  }, queryStringArrayFormat: E = "brackets" } = {}) {
    let O = typeof t == "string" ? $r(t) : t;
    if ((Hs(r) || c) && !(r instanceof FormData) && (r = _d(r)), !(r instanceof FormData)) {
      let [T, I] = Cd(e, O, r, E);
      O = $r(T), r = I;
    }
    let C = { url: O, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, headers: s, errorBag: u, forceFormData: c, queryStringArrayFormat: E, cancelled: !1, completed: !1, interrupted: !1 };
    if (p(C) === !1 || !Y0(C))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let $ = this.createVisitId();
    this.activeVisit = { ...C, onCancelToken: f, onBefore: p, onStart: g, onProgress: v, onFinish: m, onCancel: y, onSuccess: b, onError: w, queryStringArrayFormat: E, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), Z0(C), g(C), qu({ method: e, url: Sn(O).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...u && u.length ? { "X-Inertia-Error-Bag": u } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (T) => {
      r instanceof FormData && (T.percentage = T.progress ? Math.round(T.progress * 100) : 0, Q0(T), v(T));
    } }).then((T) => {
      var k;
      if (!this.isInertiaResponse(T))
        return Promise.reject({ response: T });
      let I = T.data;
      o.length && I.component === this.page.component && (I.props = { ...this.page.props, ...I.props }), i = this.resolvePreserveOption(i, I), a = this.resolvePreserveOption(a, I), a && ((k = window.history.state) != null && k.rememberedState) && I.component === this.page.component && (I.rememberedState = window.history.state.rememberedState);
      let R = O, M = $r(I.url);
      return R.hash && !M.hash && Sn(R).href === M.href && (M.hash = R.hash, I.url = M.href), this.setPage(I, { visitId: $, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let T = this.page.props.errors || {};
      if (Object.keys(T).length > 0) {
        let I = u ? T[u] ? T[u] : {} : T;
        return K0(I), w(I);
      }
      return e1(this.page), b(this.page);
    }).catch((T) => {
      if (this.isInertiaResponse(T.response))
        return this.setPage(T.response.data, { visitId: $ });
      if (this.isLocationVisitResponse(T.response)) {
        let I = $r(T.response.headers["x-inertia-location"]), R = O;
        R.hash && !I.hash && Sn(R).href === I.href && (I.hash = R.hash), this.locationVisit(I, i === !0);
      } else if (T.response)
        X0(T.response) && t1.show(T.response.data);
      else
        return Promise.reject(T);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((T) => {
      if (!qu.isCancel(T)) {
        let I = J0(T);
        if (this.activeVisit && this.finishVisit(this.activeVisit), I)
          return Promise.reject(T);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || $r(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || xn(t);
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
          this.restoreScrollPositions(), xn(e);
        }));
      });
    } else {
      let e = $r(this.page.url);
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
}, update: Od(function(t) {
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
    let f = e(""), p = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, g = Object.values(n).reduce((v, m) => v.concat(m), []).reduce((v, m) => {
      if (m.indexOf("<") === -1)
        return v;
      if (m.indexOf("<title ") === 0) {
        let b = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return v.title = b ? `${b[1]}${e(b[2])}${b[3]}` : m, v;
      }
      let y = m.match(/ inertia="[^"]+"/);
      return y ? v[y[0]] = m : v[Object.keys(v).length] = m, v;
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
function a1(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var jt = new r1(), wa = { exports: {} };
wa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]", v = "[object Number]", m = "[object Object]", y = "[object Promise]", b = "[object RegExp]", w = "[object Set]", E = "[object String]", O = "[object Symbol]", C = "[object WeakMap]", $ = "[object ArrayBuffer]", T = "[object DataView]", I = "[object Float32Array]", R = "[object Float64Array]", M = "[object Int8Array]", k = "[object Int16Array]", F = "[object Int32Array]", V = "[object Uint8Array]", ee = "[object Uint8ClampedArray]", ue = "[object Uint16Array]", pe = "[object Uint32Array]", xe = /[\\^$.*+?()[\]{}|]/g, kt = /\w*$/, Tt = /^\[object .+?Constructor\]$/, Pt = /^(?:0|[1-9]\d*)$/, J = {};
  J[a] = J[o] = J[$] = J[T] = J[s] = J[u] = J[I] = J[R] = J[M] = J[k] = J[F] = J[g] = J[v] = J[m] = J[b] = J[w] = J[E] = J[O] = J[V] = J[ee] = J[ue] = J[pe] = !0, J[c] = J[f] = J[C] = !1;
  var $t = typeof ut == "object" && ut && ut.Object === Object && ut, Zr = typeof self == "object" && self && self.Object === Object && self, de = $t || Zr || Function("return this")(), qe = e && !e.nodeType && e, q = qe && !0 && t && !t.nodeType && t, Gt = q && q.exports === qe;
  function en(l, d) {
    return l.set(d[0], d[1]), l;
  }
  function Le(l, d) {
    return l.add(d), l;
  }
  function Yt(l, d) {
    for (var h = -1, S = l ? l.length : 0; ++h < S && d(l[h], h, l) !== !1; )
      ;
    return l;
  }
  function hr(l, d) {
    for (var h = -1, S = d.length, j = l.length; ++h < S; )
      l[j + h] = d[h];
    return l;
  }
  function Kt(l, d, h, S) {
    var j = -1, L = l ? l.length : 0;
    for (S && L && (h = l[++j]); ++j < L; )
      h = d(h, l[j], j, l);
    return h;
  }
  function Jt(l, d) {
    for (var h = -1, S = Array(l); ++h < l; )
      S[h] = d(h);
    return S;
  }
  function mr(l, d) {
    return l == null ? void 0 : l[d];
  }
  function tn(l) {
    var d = !1;
    if (l != null && typeof l.toString != "function")
      try {
        d = !!(l + "");
      } catch {
      }
    return d;
  }
  function li(l) {
    var d = -1, h = Array(l.size);
    return l.forEach(function(S, j) {
      h[++d] = [j, S];
    }), h;
  }
  function rn(l, d) {
    return function(h) {
      return l(d(h));
    };
  }
  function ui(l) {
    var d = -1, h = Array(l.size);
    return l.forEach(function(S) {
      h[++d] = S;
    }), h;
  }
  var Qa = Array.prototype, Za = Function.prototype, gr = Object.prototype, nn = de["__core-js_shared__"], ci = function() {
    var l = /[^.]+$/.exec(nn && nn.keys && nn.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), fi = Za.toString, Ze = gr.hasOwnProperty, yr = gr.toString, eo = RegExp(
    "^" + fi.call(Ze).replace(xe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Xt = Gt ? de.Buffer : void 0, vr = de.Symbol, an = de.Uint8Array, ze = rn(Object.getPrototypeOf, Object), di = Object.create, pi = gr.propertyIsEnumerable, to = Qa.splice, on = Object.getOwnPropertySymbols, br = Xt ? Xt.isBuffer : void 0, hi = rn(Object.keys, Object), wr = Ye(de, "DataView"), Qt = Ye(de, "Map"), Ge = Ye(de, "Promise"), xr = Ye(de, "Set"), sn = Ye(de, "WeakMap"), Zt = Ye(Object, "create"), ln = Ie(wr), er = Ie(Qt), un = Ie(Ge), cn = Ie(xr), fn = Ie(sn), It = vr ? vr.prototype : void 0, mi = It ? It.valueOf : void 0;
  function pt(l) {
    var d = -1, h = l ? l.length : 0;
    for (this.clear(); ++d < h; ) {
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
      var h = d[l];
      return h === n ? void 0 : h;
    }
    return Ze.call(d, l) ? d[l] : void 0;
  }
  function gi(l) {
    var d = this.__data__;
    return Zt ? d[l] !== void 0 : Ze.call(d, l);
  }
  function dn(l, d) {
    var h = this.__data__;
    return h[l] = Zt && d === void 0 ? n : d, this;
  }
  pt.prototype.clear = ro, pt.prototype.delete = no, pt.prototype.get = io, pt.prototype.has = gi, pt.prototype.set = dn;
  function _e(l) {
    var d = -1, h = l ? l.length : 0;
    for (this.clear(); ++d < h; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function ao() {
    this.__data__ = [];
  }
  function oo(l) {
    var d = this.__data__, h = Or(d, l);
    if (h < 0)
      return !1;
    var S = d.length - 1;
    return h == S ? d.pop() : to.call(d, h, 1), !0;
  }
  function so(l) {
    var d = this.__data__, h = Or(d, l);
    return h < 0 ? void 0 : d[h][1];
  }
  function lo(l) {
    return Or(this.__data__, l) > -1;
  }
  function uo(l, d) {
    var h = this.__data__, S = Or(h, l);
    return S < 0 ? h.push([l, d]) : h[S][1] = d, this;
  }
  _e.prototype.clear = ao, _e.prototype.delete = oo, _e.prototype.get = so, _e.prototype.has = lo, _e.prototype.set = uo;
  function Ce(l) {
    var d = -1, h = l ? l.length : 0;
    for (this.clear(); ++d < h; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function co() {
    this.__data__ = {
      hash: new pt(),
      map: new (Qt || _e)(),
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
    this.__data__ = new _e(l);
  }
  function go() {
    this.__data__ = new _e();
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
    var h = this.__data__;
    if (h instanceof _e) {
      var S = h.__data__;
      if (!Qt || S.length < r - 1)
        return S.push([l, d]), this;
      h = this.__data__ = new Ce(S);
    }
    return h.set(l, d), this;
  }
  De.prototype.clear = go, De.prototype.delete = yo, De.prototype.get = vo, De.prototype.has = bo, De.prototype.set = wo;
  function Sr(l, d) {
    var h = gn(l) || Ar(l) ? Jt(l.length, String) : [], S = h.length, j = !!S;
    for (var L in l)
      (d || Ze.call(l, L)) && !(j && (L == "length" || Ro(L, S))) && h.push(L);
    return h;
  }
  function yi(l, d, h) {
    var S = l[d];
    (!(Ze.call(l, d) && Si(S, h)) || h === void 0 && !(d in l)) && (l[d] = h);
  }
  function Or(l, d) {
    for (var h = l.length; h--; )
      if (Si(l[h][0], d))
        return h;
    return -1;
  }
  function et(l, d) {
    return l && mn(d, vn(d), l);
  }
  function pn(l, d, h, S, j, L, G) {
    var X;
    if (S && (X = L ? S(l, j, L, G) : S(l)), X !== void 0)
      return X;
    if (!rt(l))
      return l;
    var he = gn(l);
    if (he) {
      if (X = Io(l), !d)
        return To(l, X);
    } else {
      var Q = mt(l), ke = Q == f || Q == p;
      if (Oi(l))
        return _r(l, d);
      if (Q == m || Q == a || ke && !L) {
        if (tn(l))
          return L ? l : {};
        if (X = tt(ke ? {} : l), !d)
          return Po(l, et(X, l));
      } else {
        if (!J[Q])
          return L ? l : {};
        X = Do(l, Q, pn, d);
      }
    }
    G || (G = new De());
    var Re = G.get(l);
    if (Re)
      return Re;
    if (G.set(l, X), !he)
      var ve = h ? $o(l) : vn(l);
    return Yt(ve || l, function(Te, Ae) {
      ve && (Ae = Te, Te = l[Ae]), yi(X, Ae, pn(Te, d, h, S, Ae, l, G));
    }), X;
  }
  function xo(l) {
    return rt(l) ? di(l) : {};
  }
  function So(l, d, h) {
    var S = d(l);
    return gn(l) ? S : hr(S, h(l));
  }
  function Oo(l) {
    return yr.call(l);
  }
  function _o(l) {
    if (!rt(l) || Lo(l))
      return !1;
    var d = yn(l) || tn(l) ? eo : Tt;
    return d.test(Ie(l));
  }
  function Ao(l) {
    if (!wi(l))
      return hi(l);
    var d = [];
    for (var h in Object(l))
      Ze.call(l, h) && h != "constructor" && d.push(h);
    return d;
  }
  function _r(l, d) {
    if (d)
      return l.slice();
    var h = new l.constructor(l.length);
    return l.copy(h), h;
  }
  function hn(l) {
    var d = new l.constructor(l.byteLength);
    return new an(d).set(new an(l)), d;
  }
  function tr(l, d) {
    var h = d ? hn(l.buffer) : l.buffer;
    return new l.constructor(h, l.byteOffset, l.byteLength);
  }
  function vi(l, d, h) {
    var S = d ? h(li(l), !0) : li(l);
    return Kt(S, en, new l.constructor());
  }
  function bi(l) {
    var d = new l.constructor(l.source, kt.exec(l));
    return d.lastIndex = l.lastIndex, d;
  }
  function Eo(l, d, h) {
    var S = d ? h(ui(l), !0) : ui(l);
    return Kt(S, Le, new l.constructor());
  }
  function Co(l) {
    return mi ? Object(mi.call(l)) : {};
  }
  function ko(l, d) {
    var h = d ? hn(l.buffer) : l.buffer;
    return new l.constructor(h, l.byteOffset, l.length);
  }
  function To(l, d) {
    var h = -1, S = l.length;
    for (d || (d = Array(S)); ++h < S; )
      d[h] = l[h];
    return d;
  }
  function mn(l, d, h, S) {
    h || (h = {});
    for (var j = -1, L = d.length; ++j < L; ) {
      var G = d[j], X = S ? S(h[G], l[G], G, h, l) : void 0;
      yi(h, G, X === void 0 ? l[G] : X);
    }
    return h;
  }
  function Po(l, d) {
    return mn(l, ht(l), d);
  }
  function $o(l) {
    return So(l, vn, ht);
  }
  function rr(l, d) {
    var h = l.__data__;
    return No(d) ? h[typeof d == "string" ? "string" : "hash"] : h.map;
  }
  function Ye(l, d) {
    var h = mr(l, d);
    return _o(h) ? h : void 0;
  }
  var ht = on ? rn(on, Object) : Mo, mt = Oo;
  (wr && mt(new wr(new ArrayBuffer(1))) != T || Qt && mt(new Qt()) != g || Ge && mt(Ge.resolve()) != y || xr && mt(new xr()) != w || sn && mt(new sn()) != C) && (mt = function(l) {
    var d = yr.call(l), h = d == m ? l.constructor : void 0, S = h ? Ie(h) : void 0;
    if (S)
      switch (S) {
        case ln:
          return T;
        case er:
          return g;
        case un:
          return y;
        case cn:
          return w;
        case fn:
          return C;
      }
    return d;
  });
  function Io(l) {
    var d = l.length, h = l.constructor(d);
    return d && typeof l[0] == "string" && Ze.call(l, "index") && (h.index = l.index, h.input = l.input), h;
  }
  function tt(l) {
    return typeof l.constructor == "function" && !wi(l) ? xo(ze(l)) : {};
  }
  function Do(l, d, h, S) {
    var j = l.constructor;
    switch (d) {
      case $:
        return hn(l);
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
      case pe:
        return ko(l, S);
      case g:
        return vi(l, S, h);
      case v:
      case E:
        return new j(l);
      case b:
        return bi(l);
      case w:
        return Eo(l, S, h);
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
    var d = l && l.constructor, h = typeof d == "function" && d.prototype || gr;
    return l === h;
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
    return pn(l, !0, !0);
  }
  function Si(l, d) {
    return l === d || l !== l && d !== d;
  }
  function Ar(l) {
    return Fo(l) && Ze.call(l, "callee") && (!pi.call(l, "callee") || yr.call(l) == a);
  }
  var gn = Array.isArray;
  function Er(l) {
    return l != null && _i(l.length) && !yn(l);
  }
  function Fo(l) {
    return Ai(l) && Er(l);
  }
  var Oi = br || Bo;
  function yn(l) {
    var d = rt(l) ? yr.call(l) : "";
    return d == f || d == p;
  }
  function _i(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function rt(l) {
    var d = typeof l;
    return !!l && (d == "object" || d == "function");
  }
  function Ai(l) {
    return !!l && typeof l == "object";
  }
  function vn(l) {
    return Er(l) ? Sr(l) : Ao(l);
  }
  function Mo() {
    return [];
  }
  function Bo() {
    return !1;
  }
  t.exports = xi;
})(wa, wa.exports);
var o1 = wa.exports;
const vt = /* @__PURE__ */ za(o1);
var xa = { exports: {} };
xa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", p = "[object Date]", g = "[object Error]", v = "[object Function]", m = "[object GeneratorFunction]", y = "[object Map]", b = "[object Number]", w = "[object Null]", E = "[object Object]", O = "[object Promise]", C = "[object Proxy]", $ = "[object RegExp]", T = "[object Set]", I = "[object String]", R = "[object Symbol]", M = "[object Undefined]", k = "[object WeakMap]", F = "[object ArrayBuffer]", V = "[object DataView]", ee = "[object Float32Array]", ue = "[object Float64Array]", pe = "[object Int8Array]", xe = "[object Int16Array]", kt = "[object Int32Array]", Tt = "[object Uint8Array]", Pt = "[object Uint8ClampedArray]", J = "[object Uint16Array]", $t = "[object Uint32Array]", Zr = /[\\^$.*+?()[\]{}|]/g, de = /^\[object .+?Constructor\]$/, qe = /^(?:0|[1-9]\d*)$/, q = {};
  q[ee] = q[ue] = q[pe] = q[xe] = q[kt] = q[Tt] = q[Pt] = q[J] = q[$t] = !0, q[s] = q[u] = q[F] = q[f] = q[V] = q[p] = q[g] = q[v] = q[y] = q[b] = q[E] = q[$] = q[T] = q[I] = q[k] = !1;
  var Gt = typeof ut == "object" && ut && ut.Object === Object && ut, en = typeof self == "object" && self && self.Object === Object && self, Le = Gt || en || Function("return this")(), Yt = e && !e.nodeType && e, hr = Yt && !0 && t && !t.nodeType && t, Kt = hr && hr.exports === Yt, Jt = Kt && Gt.process, mr = function() {
    try {
      return Jt && Jt.binding && Jt.binding("util");
    } catch {
    }
  }(), tn = mr && mr.isTypedArray;
  function li(l, d) {
    for (var h = -1, S = l == null ? 0 : l.length, j = 0, L = []; ++h < S; ) {
      var G = l[h];
      d(G, h, l) && (L[j++] = G);
    }
    return L;
  }
  function rn(l, d) {
    for (var h = -1, S = d.length, j = l.length; ++h < S; )
      l[j + h] = d[h];
    return l;
  }
  function ui(l, d) {
    for (var h = -1, S = l == null ? 0 : l.length; ++h < S; )
      if (d(l[h], h, l))
        return !0;
    return !1;
  }
  function Qa(l, d) {
    for (var h = -1, S = Array(l); ++h < l; )
      S[h] = d(h);
    return S;
  }
  function Za(l) {
    return function(d) {
      return l(d);
    };
  }
  function gr(l, d) {
    return l.has(d);
  }
  function nn(l, d) {
    return l == null ? void 0 : l[d];
  }
  function ci(l) {
    var d = -1, h = Array(l.size);
    return l.forEach(function(S, j) {
      h[++d] = [j, S];
    }), h;
  }
  function fi(l, d) {
    return function(h) {
      return l(d(h));
    };
  }
  function Ze(l) {
    var d = -1, h = Array(l.size);
    return l.forEach(function(S) {
      h[++d] = S;
    }), h;
  }
  var yr = Array.prototype, eo = Function.prototype, Xt = Object.prototype, vr = Le["__core-js_shared__"], an = eo.toString, ze = Xt.hasOwnProperty, di = function() {
    var l = /[^.]+$/.exec(vr && vr.keys && vr.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), pi = Xt.toString, to = RegExp(
    "^" + an.call(ze).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), on = Kt ? Le.Buffer : void 0, br = Le.Symbol, hi = Le.Uint8Array, wr = Xt.propertyIsEnumerable, Qt = yr.splice, Ge = br ? br.toStringTag : void 0, xr = Object.getOwnPropertySymbols, sn = on ? on.isBuffer : void 0, Zt = fi(Object.keys, Object), ln = ht(Le, "DataView"), er = ht(Le, "Map"), un = ht(Le, "Promise"), cn = ht(Le, "Set"), fn = ht(Le, "WeakMap"), It = ht(Object, "create"), mi = Ie(ln), pt = Ie(er), ro = Ie(un), no = Ie(cn), io = Ie(fn), gi = br ? br.prototype : void 0, dn = gi ? gi.valueOf : void 0;
  function _e(l) {
    var d = -1, h = l == null ? 0 : l.length;
    for (this.clear(); ++d < h; ) {
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
      var h = d[l];
      return h === n ? void 0 : h;
    }
    return ze.call(d, l) ? d[l] : void 0;
  }
  function lo(l) {
    var d = this.__data__;
    return It ? d[l] !== void 0 : ze.call(d, l);
  }
  function uo(l, d) {
    var h = this.__data__;
    return this.size += this.has(l) ? 0 : 1, h[l] = It && d === void 0 ? n : d, this;
  }
  _e.prototype.clear = ao, _e.prototype.delete = oo, _e.prototype.get = so, _e.prototype.has = lo, _e.prototype.set = uo;
  function Ce(l) {
    var d = -1, h = l == null ? 0 : l.length;
    for (this.clear(); ++d < h; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function co() {
    this.__data__ = [], this.size = 0;
  }
  function fo(l) {
    var d = this.__data__, h = _r(d, l);
    if (h < 0)
      return !1;
    var S = d.length - 1;
    return h == S ? d.pop() : Qt.call(d, h, 1), --this.size, !0;
  }
  function po(l) {
    var d = this.__data__, h = _r(d, l);
    return h < 0 ? void 0 : d[h][1];
  }
  function ho(l) {
    return _r(this.__data__, l) > -1;
  }
  function mo(l, d) {
    var h = this.__data__, S = _r(h, l);
    return S < 0 ? (++this.size, h.push([l, d])) : h[S][1] = d, this;
  }
  Ce.prototype.clear = co, Ce.prototype.delete = fo, Ce.prototype.get = po, Ce.prototype.has = ho, Ce.prototype.set = mo;
  function De(l) {
    var d = -1, h = l == null ? 0 : l.length;
    for (this.clear(); ++d < h; ) {
      var S = l[d];
      this.set(S[0], S[1]);
    }
  }
  function go() {
    this.size = 0, this.__data__ = {
      hash: new _e(),
      map: new (er || Ce)(),
      string: new _e()
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
    var h = Ye(this, l), S = h.size;
    return h.set(l, d), this.size += h.size == S ? 0 : 1, this;
  }
  De.prototype.clear = go, De.prototype.delete = yo, De.prototype.get = vo, De.prototype.has = bo, De.prototype.set = wo;
  function Sr(l) {
    var d = -1, h = l == null ? 0 : l.length;
    for (this.__data__ = new De(); ++d < h; )
      this.add(l[d]);
  }
  function yi(l) {
    return this.__data__.set(l, n), this;
  }
  function Or(l) {
    return this.__data__.has(l);
  }
  Sr.prototype.add = Sr.prototype.push = yi, Sr.prototype.has = Or;
  function et(l) {
    var d = this.__data__ = new Ce(l);
    this.size = d.size;
  }
  function pn() {
    this.__data__ = new Ce(), this.size = 0;
  }
  function xo(l) {
    var d = this.__data__, h = d.delete(l);
    return this.size = d.size, h;
  }
  function So(l) {
    return this.__data__.get(l);
  }
  function Oo(l) {
    return this.__data__.has(l);
  }
  function _o(l, d) {
    var h = this.__data__;
    if (h instanceof Ce) {
      var S = h.__data__;
      if (!er || S.length < r - 1)
        return S.push([l, d]), this.size = ++h.size, this;
      h = this.__data__ = new De(S);
    }
    return h.set(l, d), this.size = h.size, this;
  }
  et.prototype.clear = pn, et.prototype.delete = xo, et.prototype.get = So, et.prototype.has = Oo, et.prototype.set = _o;
  function Ao(l, d) {
    var h = Ar(l), S = !h && Si(l), j = !h && !S && Er(l), L = !h && !S && !j && Ai(l), G = h || S || j || L, X = G ? Qa(l.length, String) : [], he = X.length;
    for (var Q in l)
      (d || ze.call(l, Q)) && !(G && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      j && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      L && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
      Do(Q, he))) && X.push(Q);
    return X;
  }
  function _r(l, d) {
    for (var h = l.length; h--; )
      if (xi(l[h][0], d))
        return h;
    return -1;
  }
  function hn(l, d, h) {
    var S = d(l);
    return Ar(l) ? S : rn(S, h(l));
  }
  function tr(l) {
    return l == null ? l === void 0 ? M : w : Ge && Ge in Object(l) ? mt(l) : wi(l);
  }
  function vi(l) {
    return rt(l) && tr(l) == s;
  }
  function bi(l, d, h, S, j) {
    return l === d ? !0 : l == null || d == null || !rt(l) && !rt(d) ? l !== l && d !== d : Eo(l, d, h, S, bi, j);
  }
  function Eo(l, d, h, S, j, L) {
    var G = Ar(l), X = Ar(d), he = G ? u : tt(l), Q = X ? u : tt(d);
    he = he == s ? E : he, Q = Q == s ? E : Q;
    var ke = he == E, Re = Q == E, ve = he == Q;
    if (ve && Er(l)) {
      if (!Er(d))
        return !1;
      G = !0, ke = !1;
    }
    if (ve && !ke)
      return L || (L = new et()), G || Ai(l) ? mn(l, d, h, S, j, L) : Po(l, d, he, h, S, j, L);
    if (!(h & i)) {
      var Te = ke && ze.call(l, "__wrapped__"), Ae = Re && ze.call(d, "__wrapped__");
      if (Te || Ae) {
        var Dt = Te ? l.value() : l, gt = Ae ? d.value() : d;
        return L || (L = new et()), j(Dt, gt, h, S, L);
      }
    }
    return ve ? (L || (L = new et()), $o(l, d, h, S, j, L)) : !1;
  }
  function Co(l) {
    if (!_i(l) || No(l))
      return !1;
    var d = Oi(l) ? to : de;
    return d.test(Ie(l));
  }
  function ko(l) {
    return rt(l) && yn(l.length) && !!q[tr(l)];
  }
  function To(l) {
    if (!Lo(l))
      return Zt(l);
    var d = [];
    for (var h in Object(l))
      ze.call(l, h) && h != "constructor" && d.push(h);
    return d;
  }
  function mn(l, d, h, S, j, L) {
    var G = h & i, X = l.length, he = d.length;
    if (X != he && !(G && he > X))
      return !1;
    var Q = L.get(l);
    if (Q && L.get(d))
      return Q == d;
    var ke = -1, Re = !0, ve = h & a ? new Sr() : void 0;
    for (L.set(l, d), L.set(d, l); ++ke < X; ) {
      var Te = l[ke], Ae = d[ke];
      if (S)
        var Dt = G ? S(Ae, Te, ke, d, l, L) : S(Te, Ae, ke, l, d, L);
      if (Dt !== void 0) {
        if (Dt)
          continue;
        Re = !1;
        break;
      }
      if (ve) {
        if (!ui(d, function(gt, nr) {
          if (!gr(ve, nr) && (Te === gt || j(Te, gt, h, S, L)))
            return ve.push(nr);
        })) {
          Re = !1;
          break;
        }
      } else if (!(Te === Ae || j(Te, Ae, h, S, L))) {
        Re = !1;
        break;
      }
    }
    return L.delete(l), L.delete(d), Re;
  }
  function Po(l, d, h, S, j, L, G) {
    switch (h) {
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
        var he = S & i;
        if (X || (X = Ze), l.size != d.size && !he)
          return !1;
        var Q = G.get(l);
        if (Q)
          return Q == d;
        S |= a, G.set(l, d);
        var ke = mn(X(l), X(d), S, j, L, G);
        return G.delete(l), ke;
      case R:
        if (dn)
          return dn.call(l) == dn.call(d);
    }
    return !1;
  }
  function $o(l, d, h, S, j, L) {
    var G = h & i, X = rr(l), he = X.length, Q = rr(d), ke = Q.length;
    if (he != ke && !G)
      return !1;
    for (var Re = he; Re--; ) {
      var ve = X[Re];
      if (!(G ? ve in d : ze.call(d, ve)))
        return !1;
    }
    var Te = L.get(l);
    if (Te && L.get(d))
      return Te == d;
    var Ae = !0;
    L.set(l, d), L.set(d, l);
    for (var Dt = G; ++Re < he; ) {
      ve = X[Re];
      var gt = l[ve], nr = d[ve];
      if (S)
        var eu = G ? S(nr, gt, ve, d, l, L) : S(gt, nr, ve, l, d, L);
      if (!(eu === void 0 ? gt === nr || j(gt, nr, h, S, L) : eu)) {
        Ae = !1;
        break;
      }
      Dt || (Dt = ve == "constructor");
    }
    if (Ae && !Dt) {
      var Ei = l.constructor, Ci = d.constructor;
      Ei != Ci && "constructor" in l && "constructor" in d && !(typeof Ei == "function" && Ei instanceof Ei && typeof Ci == "function" && Ci instanceof Ci) && (Ae = !1);
    }
    return L.delete(l), L.delete(d), Ae;
  }
  function rr(l) {
    return hn(l, vn, Io);
  }
  function Ye(l, d) {
    var h = l.__data__;
    return Ro(d) ? h[typeof d == "string" ? "string" : "hash"] : h.map;
  }
  function ht(l, d) {
    var h = nn(l, d);
    return Co(h) ? h : void 0;
  }
  function mt(l) {
    var d = ze.call(l, Ge), h = l[Ge];
    try {
      l[Ge] = void 0;
      var S = !0;
    } catch {
    }
    var j = pi.call(l);
    return S && (d ? l[Ge] = h : delete l[Ge]), j;
  }
  var Io = xr ? function(l) {
    return l == null ? [] : (l = Object(l), li(xr(l), function(d) {
      return wr.call(l, d);
    }));
  } : Mo, tt = tr;
  (ln && tt(new ln(new ArrayBuffer(1))) != V || er && tt(new er()) != y || un && tt(un.resolve()) != O || cn && tt(new cn()) != T || fn && tt(new fn()) != k) && (tt = function(l) {
    var d = tr(l), h = d == E ? l.constructor : void 0, S = h ? Ie(h) : "";
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
    var d = l && l.constructor, h = typeof d == "function" && d.prototype || Xt;
    return l === h;
  }
  function wi(l) {
    return pi.call(l);
  }
  function Ie(l) {
    if (l != null) {
      try {
        return an.call(l);
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
    return rt(l) && ze.call(l, "callee") && !wr.call(l, "callee");
  }, Ar = Array.isArray;
  function gn(l) {
    return l != null && yn(l.length) && !Oi(l);
  }
  var Er = sn || Bo;
  function Fo(l, d) {
    return bi(l, d);
  }
  function Oi(l) {
    if (!_i(l))
      return !1;
    var d = tr(l);
    return d == v || d == m || d == c || d == C;
  }
  function yn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function _i(l) {
    var d = typeof l;
    return l != null && (d == "object" || d == "function");
  }
  function rt(l) {
    return l != null && typeof l == "object";
  }
  var Ai = tn ? Za(tn) : ko;
  function vn(l) {
    return gn(l) ? Ao(l) : To(l);
  }
  function Mo() {
    return [];
  }
  function Bo() {
    return !1;
  }
  t.exports = Fo;
})(xa, xa.exports);
var s1 = xa.exports;
const l1 = /* @__PURE__ */ za(s1);
function u1(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? jt.restore(r) : null, a = vt(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = dl({ ...i ? i.data : vt(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
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
    let v = u(this.data()), m = { ...g, onCancelToken: (y) => {
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
    f === "delete" ? jt.delete(p, { ...m, data: v }) : jt[f](p, v, m);
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
    c.isDirty = !l1(c.data(), a), r && jt.remember(vt(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var Fe = be(null), ot = be(null), is = Fp(null), ji = be(null), wc = null;
Yr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  Fe.value = e ? tu(e) : null, ot.value = t, ji.value = null;
  let a = typeof window > "u";
  return wc = i1(a, n, i), a || (jt.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    Fe.value = tu(o.component), ot.value = o.page, ji.value = o.preserveState ? ji.value : Date.now();
  } }), jt.on("navigate", () => wc.forceUpdate())), () => {
    if (Fe.value) {
      Fe.value.inheritAttrs = !!Fe.value.inheritAttrs;
      let o = sr(Fe.value, { ...ot.value.props, key: ji.value });
      return is.value && (Fe.value.layout = is.value, is.value = null), Fe.value.layout ? typeof Fe.value.layout == "function" ? Fe.value.layout(sr, o) : (Array.isArray(Fe.value.layout) ? Fe.value.layout : [Fe.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, sr(u, { ...ot.value.props }, () => s))) : o;
    }
  };
} });
function c1() {
  return dl({ props: re(() => {
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
Yr({ props: { title: { type: String, required: !1 } }, data() {
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
var f1 = Yr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Cd(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), sr(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      a1(s) && (s.preventDefault(), jt.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} }), ct = f1;
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
function d1(t, e) {
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
function p1() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(d1(arguments[e]));
  return t;
}
var h1 = /* @__PURE__ */ new Map([
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
  var r = m1(t);
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
function m1(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = h1.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var g1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function y1(t) {
  return ii(this, void 0, void 0, function() {
    return ai(this, function(e) {
      return [2, v1(t) && t.dataTransfer ? x1(t.dataTransfer, t.type) : b1(t)];
    });
  });
}
function v1(t) {
  return !!t.dataTransfer;
}
function b1(t) {
  var e = w1(t.target) ? t.target.files ? Ws(t.target.files) : [] : [];
  return e.map(function(r) {
    return Ua(r);
  });
}
function w1(t) {
  return t !== null;
}
function x1(t, e) {
  return ii(this, void 0, void 0, function() {
    var r, n;
    return ai(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = Ws(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(S1))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, xc(kd(n))];
        case 2:
          return [2, xc(Ws(t.files).map(function(a) {
            return Ua(a);
          }))];
      }
    });
  });
}
function xc(t) {
  return t.filter(function(e) {
    return g1.indexOf(e.name) === -1;
  });
}
function Ws(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function S1(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Sc(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? Td(e) : Sc(t);
}
function kd(t) {
  return t.reduce(function(e, r) {
    return p1(e, Array.isArray(r) ? kd(r) : [r]);
  }, []);
}
function Sc(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Ua(e);
  return Promise.resolve(r);
}
function O1(t) {
  return ii(this, void 0, void 0, function() {
    return ai(this, function(e) {
      return [2, t.isDirectory ? Td(t) : _1(t)];
    });
  });
}
function Td(t) {
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
                f = Promise.all(s.map(O1)), i.push(f), a(), p.label = 6;
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
function _1(t) {
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
var Pd = function(t, e) {
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
function A1(t, e, r, n) {
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
function E1(t, e) {
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
function qs(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function C1(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function k1(t) {
  return t.includes("Edge/");
}
function T1(t) {
  return t === void 0 && (t = window.navigator.userAgent), C1(t) || k1(t);
}
function _c(t) {
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
var P1 = "file-invalid-type", $1 = "file-too-large", I1 = "file-too-small", D1 = "too-many-files", R1 = {
  code: D1,
  message: "Too many files"
}, N1 = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: P1,
    message: "File type must be ".concat(e)
  };
};
function On(t) {
  return t != null;
}
var L1 = Pd.default, F1 = L1 || Pd;
function $d(t, e) {
  var r = t.type === "application/x-moz-file" || F1(t, e);
  return [r, r ? null : N1(e)];
}
var Ac = function(t) {
  return {
    code: $1,
    message: "File is larger than ".concat(t, " bytes")
  };
}, Ec = function(t) {
  return {
    code: I1,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Id(t, e, r) {
  if (On(t.size) && t.size)
    if (On(e) && On(r)) {
      if (t.size > r)
        return [!1, Ac(r)];
      if (t.size < e)
        return [!1, Ec(e)];
    } else {
      if (On(e) && t.size < e)
        return [!1, Ec(e)];
      if (On(r) && t.size > r)
        return [!1, Ac(r)];
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
      return !Sa(r) && a && a.apply(void 0, qs([r], n, !1)), Sa(r);
    });
  };
}
function M1(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = $d(s, r)[0], c = Id(s, n, i)[0];
    return u && c;
  });
}
var B1 = {
  disabled: !1,
  getFilesFromEvent: y1,
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
function Dd(t) {
  t === void 0 && (t = {});
  var e = be(Me(Me({}, B1), t));
  Ta(function() {
    return Me({}, t);
  }, function(k) {
    e.value = Me(Me({}, e.value), k);
  });
  var r = be(), n = be(), i = dl({
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
    k || (T1() ? setTimeout(a, 0) : a());
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
    k && (document.addEventListener("dragover", _c, !1), document.addEventListener("drop", p, !1));
  }), Jn(function() {
    window.removeEventListener("focus", o, !1);
    var k = e.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", _c), document.removeEventListener("drop", p));
  });
  function g(k) {
    var F = e.value.noDragEventsBubbling;
    F && k.stopPropagation();
  }
  function v(k) {
    return A1(this, void 0, void 0, function() {
      var F, V, ee, ue, pe;
      return E1(this, function(xe) {
        switch (xe.label) {
          case 0:
            return F = e.value, V = F.getFilesFromEvent, ee = F.noDragEventsBubbling, ue = F.onDragEnter, k.preventDefault(), g(k), f.value = qs(qs([], f.value, !0), [k.target], !1), zi(k) ? V ? [4, V(k)] : [2] : [3, 2];
          case 1:
            if (pe = xe.sent(), pe || (pe = []), Sa(k) && !ee)
              return [2];
            i.draggedFiles = pe, i.isDragActive = !0, ue && ue(k), xe.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(k) {
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
      var pe = r.value.$el || r.value;
      return pe.contains(ue);
    }), V = F.indexOf(k.target);
    if (V !== -1 && F.splice(V, 1), f.value = F, !(F.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var ee = e.value.onDragLeave;
      zi(k) && ee && ee(k);
    }
  }
  function b(k) {
    k.preventDefault(), g(k), f.value = [];
    var F = e.value, V = F.getFilesFromEvent, ee = F.noDragEventsBubbling, ue = F.accept, pe = F.minSize, xe = F.maxSize, kt = F.multiple, Tt = F.maxFiles, Pt = F.onDrop, J = F.onDropRejected, $t = F.onDropAccepted;
    if (zi(k)) {
      if (!V)
        return;
      Promise.resolve(V(k)).then(function(Zr) {
        if (!(Sa(k) && !ee)) {
          var de = [], qe = [];
          Zr.forEach(function(q) {
            var Gt = $d(q, ue), en = Gt[0], Le = Gt[1], Yt = Id(q, pe, xe), hr = Yt[0], Kt = Yt[1];
            if (en && hr)
              de.push(q);
            else {
              var Jt = [Le, Kt].filter(function(mr) {
                return mr;
              });
              qe.push({ file: q, errors: Jt });
            }
          }), (!kt && de.length > 1 || kt && Tt >= 1 && de.length > Tt) && (de.forEach(function(q) {
            qe.push({ file: q, errors: [R1] });
          }), de.splice(0)), i.acceptedFiles = de, i.fileRejections = qe, Pt && Pt(de, qe, k), qe.length > 0 && J && J(qe, k), de.length > 0 && $t && $t(de, k);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var w = function(k) {
    return e.value.disabled ? void 0 : k;
  }, E = function(k) {
    return e.value.noKeyboard ? void 0 : w(k);
  }, O = function(k) {
    return e.value.noDrag ? void 0 : w(k);
  }, C = function(k) {
    k === void 0 && (k = {});
    var F = k.onFocus, V = k.onBlur, ee = k.onClick, ue = k.onDragEnter, pe = k.onDragenter, xe = k.onDragOver, kt = k.onDragover, Tt = k.onDragLeave, Pt = k.onDragleave, J = k.onDrop, $t = Oc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Me(Me({ onFocus: E(bt(F, s)), onBlur: E(bt(V, u)), onClick: w(bt(ee, c)), onDragenter: O(bt(ue, pe, v)), onDragover: O(bt(xe, kt, m)), onDragleave: O(bt(Tt, Pt, y)), onDrop: O(bt(J, b)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), $t);
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
    return I.value > 0 && M1({
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
  return Me(Me({}, Mp(i)), { isDragAccept: R, isDragReject: M, isFocused: re(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: C, getInputProps: T, rootRef: r, inputRef: n, open: w(a) });
}
const j1 = { class: "flex w-full flex-col" }, z1 = {
  key: 0,
  class: "select-none text-black"
}, U1 = ["name"], V1 = {
  key: 1,
  class: "select-none"
}, H1 = { key: 2 }, W1 = {
  key: 3,
  class: "select-none"
}, q1 = {
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
    }, { getRootProps: a, getInputProps: o, isDragActive: s, ...u } = Dd({
      onDrop: i,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var p;
      return x(), A("div", j1, [
        P("div", {
          class: K(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": B(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          P("div", Fn({ class: "p-4' font-medium flex h-20 w-full cursor-copy flex-col items-center justify-center" }, B(a)()), [
            t.label ? (x(), A("p", z1, U(t.label), 1)) : z("", !0),
            P("input", Fn(B(o)(), { name: t.field }), null, 16, U1),
            B(s) ? (x(), A("span", V1, "Drop the " + U(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (x(), A("span", H1, U(((p = t.form[t.field]) == null ? void 0 : p.path) ?? "File prepared"), 1)) : (x(), A("span", W1, "Drag 'n' drop " + U(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        ge(B(Jr), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, G1 = { class: "flex w-full" }, Y1 = { key: 0 }, K1 = { key: 1 }, J1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, X1 = ["onClick"], Q1 = /* @__PURE__ */ P("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), Z1 = ["src"], ew = ["value"], tw = { class: "flex items-center gap-4" }, rw = {
  key: 0,
  class: "text-sm text-gray-600"
}, nw = {
  key: 1,
  class: "mt-2"
}, iw = /* @__PURE__ */ P("hr", null, null, -1), aw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, ow = { class: "-m-1 flex flex-wrap md:-m-2" }, sw = { class: "flex w-1/3 flex-wrap" }, lw = { class: "h-full w-full p-1 shadow md:p-2" }, uw = ["src"], cw = {
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
    const e = t, r = u1({
      image: []
    });
    function n() {
      let f = new FormData();
      r.image.forEach((p, g) => {
        f.append(`image[${g}]`, p.file);
      }), f.append("item_type", e.itemType), f.append("item_id", e.itemId), jt.post(route(e.endPoint), f, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _method: "post",
        forceFormData: !0,
        onFinish: () => {
          r.recentlySuccessful = !0, r.image = [];
        }
      });
    }
    function i(f) {
      f.forEach((p) => {
        let g = new FileReader();
        g.onload = (v) => {
          r.image.push({ file: p, dataUrl: v.target.result });
        }, g.readAsDataURL(p);
      });
    }
    const a = (f, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      i(f);
    };
    function o(f) {
      r.image.splice(f, 1);
    }
    const { getRootProps: s, getInputProps: u, ...c } = Dd({
      onDrop: a,
      multiple: !0,
      accept: "image/*"
    });
    return (f, p) => (x(), A(ce, null, [
      t.canUpload ? (x(), A("form", {
        key: 0,
        onSubmit: Mt(n, ["prevent"]),
        class: "w-full"
      }, [
        P("div", G1, [
          P("div", {
            class: K(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            P("div", Fn({ class: "p-4' font-medium flex h-20 w-full cursor-copy items-center justify-center" }, B(s)()), [
              P("input", Ue(Ke(B(u)())), null, 16),
              f.isDragActive ? (x(), A("span", Y1, "Drop the files here ...")) : (x(), A("span", K1, "Drag 'n' drop images here"))
            ], 16),
            B(r).image.length > 0 ? (x(), A("div", J1, [
              (x(!0), A(ce, null, Qe(B(r).image, (g, v) => (x(), A("div", {
                class: "relative cursor-pointer select-none",
                onClick: (m) => o(v),
                key: v
              }, [
                Q1,
                P("img", {
                  src: g.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Z1)
              ], 8, X1))), 128))
            ])) : z("", !0)
          ], 2),
          ge(B(Ql), {
            class: K(["inline rounded-l-none", { "cursor-not-allowed": B(r).image.length == 0 }]),
            disabled: B(r).image.length == 0
          }, {
            default: Ee(() => [
              me(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          B(r).progress ? (x(), A("progress", {
            key: 0,
            value: B(r).progress.percentage,
            max: "100"
          }, U(B(r).progress.percentage) + "% ", 9, ew)) : z("", !0)
        ]),
        f.$page.props.errors.image ? (x(), se(B(Jr), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : z("", !0),
        P("div", tw, [
          ge(Lr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: Ee(() => [
              B(r).recentlySuccessful ? (x(), A("p", rw, " Images uploaded. ")) : z("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : z("", !0),
      t.images.length ? (x(), A("div", nw, [
        iw,
        P("div", aw, [
          P("div", ow, [
            (x(!0), A(ce, null, Qe(t.images, (g) => (x(), A("div", sw, [
              P("div", lw, [
                P("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: g.url
                }, null, 8, uw),
                t.canUpload ? (x(), se(B(ct), {
                  key: 0,
                  href: f.route("images.delete", g.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: Ee(() => [
                    me(" Delete Image ")
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
}, fw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, dw = ["name", "value", "id", "checked"], pw = ["for"], hw = {
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
    return (i, a) => (x(), A("div", fw, [
      P("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, dw),
      P("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, U(t.label), 9, pw)
    ]));
  }
}, mw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, gw = {
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
    return (e, r) => (x(), se(B(Ql), {
      disabled: t.form.processing || t.disabled,
      type: t.type
    }, {
      default: Ee(() => [
        P("div", {
          class: K({ "opacity-25": t.form.processing })
        }, [
          H(e.$slots, "default")
        ], 2),
        t.form.processing ? (x(), A("div", mw, [
          ge(B(Zl), { class: "aspect-square !h-full !w-auto text-white" })
        ])) : z("", !0)
      ]),
      _: 3
    }, 8, ["disabled", "type"]));
  }
}, yw = ["id"], vw = {
  key: 0,
  class: "text-sm text-gray-600"
}, bw = { class: "flex flex-col" }, ww = {
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
      const c = r.value, f = c.getBoundingClientRect().top, p = document.querySelector("nav").offsetHeight, g = f - p, v = i.value, m = c.getBoundingClientRect().height + f - p * 2;
      if (g <= 0 && m > 0) {
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
        const m = v.cloneNode(!0);
        m.style.width = v.offsetWidth + "px", f.appendChild(m);
      });
      const g = i.value;
      g.style.width = n.value.offsetWidth + "px";
    };
    return e.sticky && (Wt(() => {
      Bp(() => {
        u(), window.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), n.value.addEventListener("scroll", s, {
          passive: !0
        });
      });
    }), Jn(() => {
      var c;
      window.removeEventListener("scroll", o), window.removeEventListener("resize", u), (c = n.value) == null || c.removeEventListener("scroll", s);
    })), (c, f) => (x(), A("div", {
      class: K({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (x(), A("p", vw, "Found: " + U(t.total), 1)) : z("", !0),
      P("div", bw, [
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
            t.sticky ? (x(), A("div", {
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
      t.links ? (x(), se(B(Xl), {
        key: 1,
        class: "mt-6",
        links: t.links
      }, null, 8, ["links"])) : z("", !0)
    ], 10, yw));
  }
}, jl = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, xw = {}, Sw = { class: "font-medium border-b bg-neutral-100 dark:border-neutral-500" };
function Ow(t, e) {
  return x(), A("thead", Sw, [
    H(t.$slots, "default")
  ]);
}
const _w = /* @__PURE__ */ jl(xw, [["render", Ow]]);
var Aw = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Ew = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Cw = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, kw = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Tw = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, Pw = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, $w = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
};
function t_(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function Iw(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function r_(t) {
  return c1().props.auth.permissions.includes(t);
}
let Rd = null;
function n_(t) {
  Rd = t;
}
function Cc() {
  return Rd;
}
const Dw = {
  key: 0,
  class: "order-arrows absolute right-3 top-0 flex h-full items-center md:right-4"
}, Rw = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    Ra.add(kw, Aw);
    const e = t, r = be("asc"), n = be(!1);
    let i = null;
    const a = Cc();
    Wt(() => {
      e.orderBy && (console.log(Cc()), i = a.on("navigate", o));
    }), Jn(() => {
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
      f.order_by = e.orderBy, f.order_dir = c, console.log(a), a.get(route(route().current()), f, {
        preserveState: !0
      }), r.value = c, n.value = !0;
    }, u = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (x(), A("th", {
      scope: "col",
      class: K(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      H(c.$slots, "default"),
      t.orderBy ? (x(), A("span", Dw, [
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
}, Nw = {}, Lw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function Fw(t, e) {
  return x(), A("td", Lw, [
    H(t.$slots, "default")
  ]);
}
const Mw = /* @__PURE__ */ jl(Nw, [["render", Fw]]), Bw = ["data-te-target", "aria-controls"], jw = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (x(), A("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      H(e.$slots, "default")
    ], 8, Bw));
  }
};
var zl = { exports: {} }, ne = String, Nd = function() {
  return { isColorSupported: !1, reset: ne, bold: ne, dim: ne, italic: ne, underline: ne, inverse: ne, hidden: ne, strikethrough: ne, black: ne, red: ne, green: ne, yellow: ne, blue: ne, magenta: ne, cyan: ne, white: ne, gray: ne, bgBlack: ne, bgRed: ne, bgGreen: ne, bgYellow: ne, bgBlue: ne, bgMagenta: ne, bgCyan: ne, bgWhite: ne };
};
zl.exports = Nd();
zl.exports.createColors = Nd;
var zw = zl.exports;
let kc = zw, Tc = We, Gs = class Ld extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Ld);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = kc.isColorSupported), Tc && e && (r = Tc(r));
    let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), o = String(a).length, s, u;
    if (e) {
      let { bold: c, gray: f, red: p } = kc.createColors(!0);
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
var Ul = Gs;
Gs.default = Gs;
var oi = {};
oi.isClean = Symbol("isClean");
oi.my = Symbol("my");
const Pc = {
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
function Uw(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Ys = class {
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
      return Pc[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + Uw(n);
      this[s] ? i = this[s](o, e) : o.walk((u) => {
        if (i = u.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = Pc[n]), o.rawCache[n] = i, i;
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
var Fd = Ys;
Ys.default = Ys;
let Vw = Fd;
function Ks(t, e) {
  new Vw(e).stringify(t);
}
var Va = Ks;
Ks.default = Ks;
let { isClean: Ui, my: Hw } = oi, Ww = Ul, qw = Fd, Gw = Va;
function Js(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let i = t[n], a = typeof i;
    n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((o) => Js(o, r)) : (a === "object" && i !== null && (i = Js(i)), r[n] = i);
  }
  return r;
}
let Xs = class {
  constructor(e = {}) {
    this.raws = {}, this[Ui] = !1, this[Hw] = !0;
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
    let r = Js(this);
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
    return new Ww(e);
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
    return new qw().raw(this, e, r);
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
  toString(e = Gw) {
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
var Ha = Xs;
Xs.default = Xs;
let Yw = Ha, Qs = class extends Yw {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Wa = Qs;
Qs.default = Qs;
let Kw = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Jw = (t, e = 21) => (r = e) => {
  let n = "", i = r;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, Xw = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += Kw[Math.random() * 64 | 0];
  return e;
};
var Qw = { nanoid: Xw, customAlphabet: Jw };
let { SourceMapConsumer: $c, SourceMapGenerator: Ic } = We, { existsSync: Zw, readFileSync: ex } = We, { dirname: as, join: tx } = We;
function rx(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let Zs = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = as(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new $c(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
    if (i.test(e) || a.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return rx(e.substr(RegExp.lastMatch.length));
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
    if (this.root = as(e), Zw(e))
      return this.mapFile = e, ex(e, "utf-8").toString().trim();
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
        if (r instanceof $c)
          return Ic.fromSourceMap(r).toString();
        if (r instanceof Ic)
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
        return e && (n = tx(as(e), n)), this.loadFile(n);
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
var Md = Zs;
Zs.default = Zs;
let { SourceMapConsumer: nx, SourceMapGenerator: ix } = We, { fileURLToPath: Dc, pathToFileURL: Vi } = We, { isAbsolute: el, resolve: tl } = We, { nanoid: ax } = Qw, os = We, Rc = Ul, ox = Md, ss = Symbol("fromOffsetCache"), sx = !!(nx && ix), Nc = !!(tl && el), Oa = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Nc || /^\w+:\/\//.test(r.from) || el(r.from) ? this.file = r.from : this.file = tl(r.from)), Nc && sx) {
      let n = new ox(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + ax(6) + ">"), this.map && (this.map.file = this.from);
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
    return u ? a = new Rc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      i.plugin
    ) : a = new Rc(
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
    return /^\w+:\/\//.test(e) ? e : tl(this.map.consumer().sourceRoot || this.map.root || ".", e);
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
    el(o.source) ? u = Vi(o.source) : u = new URL(
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
      if (Dc)
        c.file = Dc(u);
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
let { SourceMapConsumer: Bd, SourceMapGenerator: oa } = We, { dirname: sa, relative: jd, resolve: zd, sep: Ud } = We, { pathToFileURL: Lc } = We, lx = qa, ux = !!(Bd && oa), cx = !!(sa && zd && jd && Ud), fx = class {
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
      this.mapOpts.sourcesContent === !1 ? (i = new Bd(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), cx && ux && this.isMap())
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
    typeof this.mapOpts.annotation == "string" && (n = sa(zd(n, this.mapOpts.annotation)));
    let i = jd(n, e);
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
        let e = new lx(this.originalCSS, this.opts);
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
    if (Lc) {
      let n = Lc(e).toString();
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
    Ud === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var Vd = fx;
let dx = Ha, rl = class extends dx {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ga = rl;
rl.default = rl;
let { isClean: Hd, my: Wd } = oi, qd = Wa, Gd = Ga, px = Ha, Yd, Vl, Hl, Kd;
function Jd(t) {
  return t.map((e) => (e.nodes && (e.nodes = Jd(e.nodes)), delete e.source, e));
}
function Xd(t) {
  if (t[Hd] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      Xd(e);
}
let At = class Qd extends px {
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
      e = Jd(Yd(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new qd(e)];
    } else if (e.selector)
      e = [new Vl(e)];
    else if (e.name)
      e = [new Hl(e)];
    else if (e.text)
      e = [new Gd(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Wd] || Qd.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Hd] && Xd(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
At.registerParse = (t) => {
  Yd = t;
};
At.registerRule = (t) => {
  Vl = t;
};
At.registerAtRule = (t) => {
  Hl = t;
};
At.registerRoot = (t) => {
  Kd = t;
};
var pr = At;
At.default = At;
At.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Hl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, Vl.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, qd.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Gd.prototype) : t.type === "root" && Object.setPrototypeOf(t, Kd.prototype), t[Wd] = !0, t.nodes && t.nodes.forEach((e) => {
    At.rebuild(e);
  });
};
let hx = pr, Zd, ep, Wn = class extends hx {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Zd(new ep(), this, e).stringify();
  }
};
Wn.registerLazyResult = (t) => {
  Zd = t;
};
Wn.registerProcessor = (t) => {
  ep = t;
};
var Wl = Wn;
Wn.default = Wn;
let Fc = {};
var tp = function(e) {
  Fc[e] || (Fc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let nl = class {
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
var rp = nl;
nl.default = nl;
let mx = rp, il = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new mx(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var ql = il;
il.default = il;
const ls = "'".charCodeAt(0), Mc = '"'.charCodeAt(0), Hi = "\\".charCodeAt(0), Bc = "/".charCodeAt(0), Wi = `
`.charCodeAt(0), _n = " ".charCodeAt(0), qi = "\f".charCodeAt(0), Gi = "	".charCodeAt(0), Yi = "\r".charCodeAt(0), gx = "[".charCodeAt(0), yx = "]".charCodeAt(0), vx = "(".charCodeAt(0), bx = ")".charCodeAt(0), wx = "{".charCodeAt(0), xx = "}".charCodeAt(0), Sx = ";".charCodeAt(0), Ox = "*".charCodeAt(0), _x = ":".charCodeAt(0), Ax = "@".charCodeAt(0), Ki = /[\t\n\f\r "#'()/;[\\\]{}]/g, Ji = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Ex = /.[\r\n"'(/\\]/, jc = /[\da-f]/i;
var Cx = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, u, c, f, p, g, v, m, y = n.length, b = 0, w = [], E = [];
  function O() {
    return b;
  }
  function C(R) {
    throw e.error("Unclosed " + R, b);
  }
  function $() {
    return E.length === 0 && b >= y;
  }
  function T(R) {
    if (E.length)
      return E.pop();
    if (b >= y)
      return;
    let M = R ? R.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(b), a) {
      case Wi:
      case _n:
      case Gi:
      case Yi:
      case qi: {
        o = b;
        do
          o += 1, a = n.charCodeAt(o);
        while (a === _n || a === Wi || a === Gi || a === Yi || a === qi);
        m = ["space", n.slice(b, o)], b = o - 1;
        break;
      }
      case gx:
      case yx:
      case wx:
      case xx:
      case _x:
      case Sx:
      case bx: {
        let k = String.fromCharCode(a);
        m = [k, k, b];
        break;
      }
      case vx: {
        if (g = w.length ? w.pop()[1] : "", v = n.charCodeAt(b + 1), g === "url" && v !== ls && v !== Mc && v !== _n && v !== Wi && v !== Gi && v !== qi && v !== Yi) {
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
          m = ["brackets", n.slice(b, o + 1), b, o], b = o;
        } else
          o = n.indexOf(")", b + 1), u = n.slice(b, o + 1), o === -1 || Ex.test(u) ? m = ["(", "(", b] : (m = ["brackets", u, b, o], b = o);
        break;
      }
      case ls:
      case Mc: {
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
        m = ["string", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case Ax: {
        Ki.lastIndex = b + 1, Ki.test(n), Ki.lastIndex === 0 ? o = n.length - 1 : o = Ki.lastIndex - 2, m = ["at-word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      case Hi: {
        for (o = b, c = !0; n.charCodeAt(o + 1) === Hi; )
          o += 1, c = !c;
        if (a = n.charCodeAt(o + 1), c && a !== Bc && a !== _n && a !== Wi && a !== Gi && a !== Yi && a !== qi && (o += 1, jc.test(n.charAt(o)))) {
          for (; jc.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === _n && (o += 1);
        }
        m = ["word", n.slice(b, o + 1), b, o], b = o;
        break;
      }
      default: {
        a === Bc && n.charCodeAt(b + 1) === Ox ? (o = n.indexOf("*/", b + 2) + 1, o === 0 && (i || M ? o = n.length : C("comment")), m = ["comment", n.slice(b, o + 1), b, o], b = o) : (Ji.lastIndex = b + 1, Ji.test(n), Ji.lastIndex === 0 ? o = n.length - 1 : o = Ji.lastIndex - 2, m = ["word", n.slice(b, o + 1), b, o], w.push(m), b = o);
        break;
      }
    }
    return b++, m;
  }
  function I(R) {
    E.push(R);
  }
  return {
    back: I,
    endOfFile: $,
    nextToken: T,
    position: O
  };
};
let np = pr, _a = class extends np {
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
var Gl = _a;
_a.default = _a;
np.registerAtRule(_a);
let ip = pr, ap, op, Wr = class extends ip {
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
    return new ap(new op(), this, e).stringify();
  }
};
Wr.registerLazyResult = (t) => {
  ap = t;
};
Wr.registerProcessor = (t) => {
  op = t;
};
var si = Wr;
Wr.default = Wr;
ip.registerRoot(Wr);
let qn = {
  comma(t) {
    return qn.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return qn.split(t, e);
  },
  split(t, e, r) {
    let n = [], i = "", a = !1, o = 0, s = !1, u = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === u && (s = !1) : f === '"' || f === "'" ? (s = !0, u = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (a = !0), a ? (i !== "" && n.push(i.trim()), i = "", a = !1) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }
};
var sp = qn;
qn.default = qn;
let lp = pr, kx = sp, Aa = class extends lp {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return kx.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Yl = Aa;
Aa.default = Aa;
lp.registerRule(Aa);
let Tx = Wa, Px = Cx, $x = Ga, Ix = Gl, Dx = si, zc = Yl;
const Uc = {
  empty: !0,
  space: !0
};
function Rx(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let Nx = class {
  constructor(e) {
    this.input = e, this.root = new Dx(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new Ix();
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
    let r = new $x();
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
    this.tokenizer = Px(this.input);
  }
  decl(e, r) {
    let n = new Tx();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || Rx(e)
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
    let r = new zc();
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
      a = n[g], o = a[0], o === "space" && g === s - 1 && !i ? c = !1 : o === "comment" ? (p = n[g - 1] ? n[g - 1][0] : "empty", f = n[g + 1] ? n[g + 1][0] : "empty", !Uc[p] && !Uc[f] ? u.slice(-1) === "," ? c = !1 : u += a[1] : c = !1) : u += a[1];
    if (!c) {
      let g = n.reduce((v, m) => v + m[1], "");
      e.raws[r] = { raw: g, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new zc();
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
var Lx = Nx;
let Fx = pr, Mx = Lx, Bx = qa;
function Ea(t, e) {
  let r = new Bx(t, e), n = new Mx(r);
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
var Kl = Ea;
Ea.default = Ea;
Fx.registerParse(Ea);
let { isClean: it, my: jx } = oi, zx = Vd, Ux = Va, Vx = pr, Hx = Wl, Wx = tp, Vc = ql, qx = Kl, Gx = si;
const Yx = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Kx = {
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
}, Jx = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, qr = 0;
function An(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function up(t) {
  let e = !1, r = Yx[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    qr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, qr, r + "Exit"] : [r, r + "Exit"];
}
function Hc(t) {
  let e;
  return t.type === "document" ? e = ["Document", qr, "DocumentExit"] : t.type === "root" ? e = ["Root", qr, "RootExit"] : e = up(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function al(t) {
  return t[it] = !1, t.nodes && t.nodes.forEach((e) => al(e)), t;
}
let ol = {}, Gr = class cp {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = al(r);
    else if (r instanceof cp || r instanceof Vc)
      i = al(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = qx;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[jx] && Vx.rebuild(i);
    }
    this.result = new Vc(e, i, n), this.helpers = { ...ol, postcss: ol, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
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
          if (!Kx[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Jx[n])
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
        let r = [Hc(e)];
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
    let e = this.result.opts, r = Ux;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new zx(r, this.result.root, this.result.opts).generate();
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Wx(
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
          s[it] = !0, e.push(Hc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === qr) {
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
    let r = up(e);
    for (let n of r)
      if (n === qr)
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
Gr.registerPostcss = (t) => {
  ol = t;
};
var fp = Gr;
Gr.default = Gr;
Gx.registerLazyResult(Gr);
Hx.registerLazyResult(Gr);
let Xx = Vd, Qx = Va, Zx = tp, eS = Kl;
const tS = ql;
let sl = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = Qx;
    this.result = new tS(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new Xx(a, i, this._opts, r);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Zx(
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
    let e, r = eS;
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
var rS = sl;
sl.default = sl;
let nS = rS, iS = fp, aS = Wl, oS = si, Gn = class {
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
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new nS(this, e, r) : new iS(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var sS = Gn;
Gn.default = Gn;
oS.registerProcessor(Gn);
aS.registerProcessor(Gn);
let lS = Wa, uS = Md, cS = Ga, fS = Gl, dS = qa, pS = si, hS = Yl;
function Yn(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Yn(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: dS.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: uS.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Yn(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new pS(n);
  if (n.type === "decl")
    return new lS(n);
  if (n.type === "rule")
    return new hS(n);
  if (n.type === "comment")
    return new cS(n);
  if (n.type === "atrule")
    return new fS(n);
  throw new Error("Unknown node type: " + t.type);
}
var mS = Yn;
Yn.default = Yn;
let gS = Ul, dp = Wa, yS = fp, vS = pr, Jl = sS, bS = Va, wS = mS, pp = Wl, xS = rp, hp = Ga, mp = Gl, SS = ql, OS = qa, _S = Kl, AS = sp, gp = Yl, yp = si, ES = Ha;
function te(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Jl(t);
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
    return s.postcssPlugin = e, s.postcssVersion = new Jl().version, s;
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
te.stringify = bS;
te.parse = _S;
te.fromJSON = wS;
te.list = AS;
te.comment = (t) => new hp(t);
te.atRule = (t) => new mp(t);
te.decl = (t) => new dp(t);
te.rule = (t) => new gp(t);
te.root = (t) => new yp(t);
te.document = (t) => new pp(t);
te.CssSyntaxError = gS;
te.Declaration = dp;
te.Container = vS;
te.Processor = Jl;
te.Document = pp;
te.Comment = hp;
te.Warning = xS;
te.AtRule = mp;
te.Result = SS;
te.Input = OS;
te.Rule = gp;
te.Root = yp;
te.Node = ES;
yS.registerPostcss(te);
var CS = te;
te.default = te;
const le = /* @__PURE__ */ za(CS);
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
const kS = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, TS = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, PS = { key: 0 }, $S = {
  key: 1,
  class: "ml-1"
}, IS = { class: "flex w-fit flex-wrap" }, DS = {
  key: 0,
  class: "font-semibold"
}, RS = { class: "mb-1" }, NS = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, LS = { class: "w-full break-words" }, FS = { class: "mb-1 flex flex-col" }, MS = { key: 1 }, BS = {
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
      return x(), A("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        P("div", kS, [
          e.itemId || e.timeStamp ? (x(), A("div", TS, [
            e.itemId ? (x(), A(ce, { key: 0 }, [
              e.itemId.routeName ? (x(), se(B(ct), {
                key: 1,
                href: r.route(
                  e.itemId.routeName,
                  e.itemId.routeData ? e.itemId.routeData : e.itemId.id
                )
              }, {
                default: Ee(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (x(), A(ce, { key: 0 }, [
                    me("#")
                  ], 64)) : z("", !0),
                  me(" " + U(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), A("span", PS, [
                e.itemId.prefix || e.itemId.prefix == null ? (x(), A(ce, { key: 0 }, [
                  me("#")
                ], 64)) : z("", !0),
                me(" " + U(e.itemId.id), 1)
              ]))
            ], 64)) : z("", !0),
            e.timeStamp ? (x(), A("span", $S, [
              e.itemId ? (x(), A(ce, { key: 0 }, [
                me("-")
              ], 64)) : z("", !0),
              me(" " + U(e.timeStamp), 1)
            ])) : z("", !0)
          ])) : z("", !0),
          P("div", IS, [
            (x(!0), A(ce, null, Qe(t.pills, (a, o) => (x(), A(ce, { key: o }, [
              a.text ? (x(), A("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border p-1 px-2 text-white bg-primary",
                style: Qi({
                  backgroundColor: a.color ? a.color : null
                })
              }, U(a.text), 5)) : z("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (x(), A(ce, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (x(), A("p", DS, U(e.title.text), 1)) : (x(), se(B(ct), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: Ee(() => [
              me(U(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : z("", !0),
        P("div", RS, [
          e.extraText ? (x(), A("p", NS, [
            me(" Engineer Note: "),
            P("span", LS, U(e.extraText), 1)
          ])) : z("", !0)
        ]),
        P("div", FS, [
          (x(!0), A(ce, null, Qe(t.options, (a, o) => (x(), A(ce, null, [
            !a.routeName && !a.href ? (x(), A("span", {
              key: 0,
              style: Qi({ color: a.color ? a.color : "#000" })
            }, U(a.text), 5)) : (x(), se(B(ct), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: Qi({ color: a.color ? a.color : "#000" })
            }, {
              default: Ee(() => [
                me(U(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (x(), A("div", MS, [
          P("span", null, U(e.amount.text + B(Iw)(e.amount.amount)), 1)
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
}, jS = 1e6, zS = 1e3, ll = "transitionend", US = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), VS = (t) => {
  do
    t += Math.floor(Math.random() * jS);
  while (document.getElementById(t));
  return t;
}, vp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, bp = (t) => {
  const e = vp(t);
  return e && document.querySelector(e) ? e : null;
}, Kn = (t) => {
  const e = vp(t);
  return e ? document.querySelector(e) : null;
}, HS = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * zS);
}, WS = (t) => {
  t.dispatchEvent(new Event(ll));
}, wp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), ul = (t) => wp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, Ca = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && wp(a) ? "element" : US(a);
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
}, Ka = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", qS = (t) => {
  t.offsetHeight;
}, xp = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, cs = [], GS = (t) => {
  document.readyState === "loading" ? (cs.length || document.addEventListener("DOMContentLoaded", () => {
    cs.forEach((e) => e());
  }), cs.push(t)) : t();
}, ft = () => document.documentElement.dir === "rtl", YS = (t) => document.createElement(t), Wc = (t) => {
  typeof t == "function" && t();
}, KS = (t, e, r = !0) => {
  if (!r) {
    Wc(t);
    return;
  }
  const n = 5, i = HS(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(ll, o), Wc(t));
  };
  e.addEventListener(ll, o), setTimeout(() => {
    a || WS(e);
  }, i);
}, JS = /[^.]*(?=\..*)\.|.*/, XS = /\..*/, QS = /::\d+$/, fs = {};
let qc = 1;
const ZS = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, e2 = /^(mouseenter|mouseleave)/i, Sp = /* @__PURE__ */ new Set([
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
function Op(t, e) {
  return e && `${e}::${qc++}` || t.uidEvent || qc++;
}
function _p(t) {
  const e = Op(t);
  return t.uidEvent = e, fs[e] = fs[e] || {}, fs[e];
}
function t2(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && ae.off(t, n.type, e), e.apply(t, [n]);
  };
}
function r2(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && ae.off(t, i.type, r), r.apply(o, [i]);
    return null;
  };
}
function Ap(t, e, r = null) {
  const n = Object.keys(t);
  for (let i = 0, a = n.length; i < a; i++) {
    const o = t[n[i]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function Ep(t, e, r) {
  const n = typeof e == "string", i = n ? r : e;
  let a = Cp(t);
  return Sp.has(a) || (a = t), [n, i, a];
}
function Gc(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), e2.test(e)) {
    const v = (m) => function(y) {
      if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
        return m.call(this, y);
    };
    n ? n = v(n) : r = v(r);
  }
  const [a, o, s] = Ep(
    e,
    r,
    n
  ), u = _p(t), c = u[s] || (u[s] = {}), f = Ap(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const p = Op(
    o,
    e.replace(JS, "")
  ), g = a ? r2(t, r, n) : t2(t, r);
  g.delegationSelector = a ? r : null, g.originalHandler = o, g.oneOff = i, g.uidEvent = p, c[p] = g, t.addEventListener(s, g, a);
}
function cl(t, e, r, n, i) {
  const a = Ap(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function n2(t, e, r, n) {
  const i = e[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const o = i[a];
      cl(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Cp(t) {
  return t = t.replace(XS, ""), ZS[t] || t;
}
const ae = {
  on(t, e, r, n) {
    Gc(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    Gc(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = Ep(
      e,
      r,
      n
    ), s = o !== e, u = _p(t), c = e.startsWith(".");
    if (typeof a < "u") {
      if (!u || !u[o])
        return;
      cl(
        t,
        u,
        o,
        a,
        i ? r : null
      );
      return;
    }
    c && Object.keys(u).forEach((p) => {
      n2(
        t,
        u,
        p,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((p) => {
      const g = p.replace(QS, "");
      if (!s || e.includes(g)) {
        const v = f[p];
        cl(
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
    const n = xp(), i = Cp(e), a = e !== i, o = Sp.has(i);
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
}, i2 = "5.1.3";
class kp {
  constructor(e) {
    e = ul(e), e && (this._element = e, la.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    la.removeData(this._element, this.constructor.DATA_KEY), ae.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    KS(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return la.getData(ul(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return i2;
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
const a2 = 3, Be = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== a2; )
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
const ms = "collapse", Tp = "te.collapse", Ja = `.${Tp}`, Yc = {
  toggle: !0,
  parent: null
}, o2 = {
  toggle: "boolean",
  parent: "(null|element)"
}, s2 = `show${Ja}`, l2 = `shown${Ja}`, u2 = `hide${Ja}`, c2 = `hidden${Ja}`, gs = "data-te-collapse-show", Kc = "data-te-collapse-collapsed", Xi = "data-te-collapse-collapsing", f2 = "data-te-collapse-horizontal", Nr = "data-te-collapse-item", Jc = `:scope [${Nr}] [${Nr}]`, d2 = "width", p2 = "height", h2 = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Xc = "[data-te-collapse-init]", m2 = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, g2 = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Ln extends kp {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Be.find(Xc);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], u = bp(s), c = Be.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Yc;
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
        Jc,
        this._config.parent
      );
      e = Be.find(
        h2,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Be.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? Ln.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (ae.trigger(this._element, s2).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && Ln.getOrCreateInstance(u, { toggle: !1 }).hide(), r || la.setData(u, Tp, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), Z.addClass(this._element, a), this._element.removeAttribute(Nr), this._element.setAttribute(Xi, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, this._classes.hidden), Z.removeClass(this._element, a), Z.addClass(this._element, this._classes.visible), this._element.removeAttribute(Xi), this._element.setAttribute(Nr, ""), this._element.setAttribute(gs, ""), this._element.style[i] = "", ae.trigger(this._element, l2);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || ae.trigger(this._element, u2).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, qS(this._element), Z.addClass(this._element, r), Z.removeClass(this._element, this._classes.visible), Z.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Xi, ""), this._element.removeAttribute(Nr), this._element.removeAttribute(gs);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Kn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, Z.removeClass(this._element, r), Z.addClass(this._element, this._classes.visible), Z.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Xi), this._element.setAttribute(Nr, ""), ae.trigger(this._element, c2);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(gs);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...Yc,
      ...Z.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = ul(e.parent), Ca(ms, e, o2), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...m2,
      ...r,
      ...e
    }, Ca(ms, e, g2), e;
  }
  _getDimension() {
    return this._element.hasAttribute(f2) ? d2 : p2;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Be.find(
      Jc,
      this._config.parent
    );
    Be.find(Xc, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Kn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(Kc) : n.setAttribute(`${Kc}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = Ln.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let Qc = [];
const y2 = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  Qc.includes(n) || (Qc.push(n), ae.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ka(this))
        return;
      const a = Kn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && t.getOrCreateInstance(a)[e]();
    }
  ));
}, ys = "alert", v2 = "te.alert", Pp = `.${v2}`, b2 = `close${Pp}`, w2 = `closed${Pp}`, En = "data-te-alert-show", x2 = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Zc = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, S2 = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, O2 = {
  fadeIn: "string",
  fadeOut: "string"
};
class ka extends kp {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return x2;
  }
  static get Default() {
    return Zc;
  }
  static get NAME() {
    return ys;
  }
  // Public
  close() {
    if (ae.trigger(this._element, b2).defaultPrevented)
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
    this._didInit || (y2(ka, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...Zc,
      ...Z.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, Ca(ys, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = Z.getDataClassAttributes(this._element);
    return e = {
      ...S2,
      ...r,
      ...e
    }, Ca(ys, e, O2), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), ae.trigger(this._element, w2), this.dispose();
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
        V !== -1 ? (u[V].references++, u[V].updater(ee)) : u.push({ identifier: F, updater: E(ee, C), references: 1 }), T.push(F);
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
    function m(O, C, $, T) {
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
    function E(O, C) {
      var $, T, I;
      if (C.singleton) {
        var R = w++;
        $ = b || (b = p(C)), T = m.bind(null, $, R, !1), I = m.bind(null, $, R, !0);
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
VS("chips-input-");
const Lt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, _2 = {
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
}, $p = { isEmpty: { configurable: !0 } };
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
$p.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Xa.prototype, $p);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
YS("div");
const A2 = (t) => {
  GS(() => {
    const e = xp();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, E2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, C2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ka(this) && t.getOrCreateInstance(this).show();
    }
  );
}, k2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Kn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ka(this))
        return;
      ae.one(n, t.EVENT_HIDDEN, () => {
        Ya(this) && this.focus();
      });
      const i = Be.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, T2 = (t, e) => {
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
}, P2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Kn(this);
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
}, $2 = (t, e) => {
  ae.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, I2 = (t, e) => {
  ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = bp(this);
      Be.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, D2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, R2 = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, N2 = (t, e) => {
  Be.find(e).forEach((r) => {
    new t(r);
  }), ae.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, L2 = (t, e) => {
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
        ..._2[s.type]
      });
    }
    return null;
  });
};
class F2 {
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
const fl = new F2(), kn = {
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
    advanced: L2
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: T2
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: I2
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: E2
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: P2
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: $2
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: k2
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: C2
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: D2
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: R2
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: N2
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, M2 = (t) => kn[t.NAME] || null, B2 = (t, e) => {
  if (!t || !e.allowReinits && fl.isInited(t.NAME))
    return;
  fl.add(t.NAME);
  const r = M2(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (A2(t), r != null && r.advanced) {
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
}, j2 = (t, e) => {
  t.forEach((r) => B2(r, e));
}, z2 = {
  allowReinits: !1,
  checkOtherImports: !1
}, U2 = (t, e = {}) => {
  e = { ...z2, ...e };
  const r = Object.keys(kn).map((n) => {
    if (document.querySelector(kn[n].selector)) {
      const i = t[kn[n].name];
      return !i && !fl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${kn[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  j2(r, e);
}, V2 = { role: "alert" }, H2 = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, W2 = /* @__PURE__ */ P("button", {
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
], -1), q2 = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return Wt(() => {
      U2({ Alert: ka });
    }), (e, r) => (x(), A("div", V2, [
      P("div", null, [
        P("div", H2, [
          H(e.$slots, "default"),
          W2
        ])
      ])
    ]));
  }
}, G2 = ["aria-controls"], Y2 = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, K2 = ["id"], Ip = {
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
      n.value = new Ln(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (x(), A("div", {
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
          me(U(t.header) + " ", 1),
          P("button", Y2, U(i.value ? "Hide" : "Show"), 1)
        ], 8, G2),
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
        ], 8, K2)
      ], 2)
    ], 2));
  }
}, J2 = { class: "relative" }, X2 = {
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
    Wt(() => document.addEventListener("keydown", r)), Jn(() => document.removeEventListener("keydown", r));
    const n = re(() => ({
      48: "w-48"
    })[e.width.toString()]), i = re(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = be(!1);
    return (o, s) => (x(), A("div", J2, [
      P("div", {
        onClick: s[0] || (s[0] = (u) => a.value = !a.value)
      }, [
        H(o.$slots, "trigger")
      ]),
      Ve(P("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => a.value = !1)
      }, null, 512), [
        [zt, a.value]
      ]),
      ge(Lr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: Ee(() => [
          Ve(P("div", {
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
}, Q2 = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (x(), se(B(ct), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: Ee(() => [
        H(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Z2 = ["href", "target"], eO = {
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
      default: Ee(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (x(), A("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: K(["focusable font-medium cursor-pointer select-none rounded px-2 leading-normal", r()])
    }, [
      H(n.$slots, "default")
    ], 10, Z2));
  }
}, tO = {
  class: "relative",
  "data-te-dropdown-ref": ""
}, rO = {
  class: "flex items-center whitespace-nowrap rounded bg-primary px-2 text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button",
  id: "dropdownMenuButton3",
  "data-te-dropdown-toggle-ref": "",
  "aria-expanded": "false",
  "data-te-ripple-init": "",
  "data-te-ripple-color": "light"
}, nO = /* @__PURE__ */ P("span", { class: "mx-1 w-2" }, [
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
], -1), iO = {
  class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
  "aria-labelledby": "dropdownMenuButton3",
  "data-te-dropdown-menu-ref": ""
}, aO = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (x(), A("div", tO, [
      P("button", rO, [
        me(U(t.title) + " ", 1),
        nO
      ]),
      P("ul", iO, [
        H(e.$slots, "default")
      ])
    ]));
  }
}, oO = ["href"], sO = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (x(), A("li", null, [
      P("a", {
        class: "block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, U(t.title), 9, oO)
    ]));
  }
}, lO = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (x(), se(B(Ip), { header: t.header }, {
      default: Ee(() => [
        ge(B(Dp), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, uO = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, cO = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, fO = {
  key: 0,
  class: "text-center"
}, dO = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, pO = { class: "flex-start w-full md:flex" }, hO = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, mO = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, gO = { class: "mb-1 flex justify-between" }, yO = { class: "text-sm text-neutral-500" }, vO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, bO = {
  key: 1,
  class: "text-sm text-primary-500"
}, wO = { class: "text-sm text-neutral-500" }, xO = { class: "font-medium" }, SO = {
  key: 0,
  class: "line-through"
}, OO = ["innerHTML"], Dp = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return Ra.add(Tw, Ew, $w, Cw, Pw), (e, r) => t.logs == null ? (x(), A("div", uO, [
      ge(B(Zl))
    ])) : (x(), A("div", cO, [
      t.logs.total ? (x(), A("ol", dO, [
        (x(!0), A(ce, null, Qe(t.logs.data, (n) => {
          var i;
          return x(), A("li", {
            key: n.id
          }, [
            P("div", pO, [
              P("div", hO, [
                ge(B(ha), {
                  icon: n.icon
                }, null, 8, ["icon"])
              ]),
              P("div", mO, [
                P("div", gO, [
                  P("span", yO, [
                    me(U(n.event_formatted) + " ", 1),
                    n.reference ? (x(), A("span", vO, U(n.reference), 1)) : z("", !0),
                    n.causer ? (x(), A("span", bO, "(" + U((i = n.causer) == null ? void 0 : i.first_name) + ")", 1)) : z("", !0)
                  ]),
                  P("span", wO, U(n.created_date_full), 1)
                ]),
                (x(!0), A(ce, null, Qe(n.changes_formatted, (a, o) => (x(), A("p", {
                  key: o,
                  class: "mb-0 text-neutral-700"
                }, [
                  P("span", xO, U(o) + ":", 1),
                  a.old ? (x(), A("span", SO, U(a.old), 1)) : z("", !0),
                  me(" " + U(a.new), 1)
                ]))), 128)),
                n.description_details ? (x(), A("p", {
                  key: 0,
                  class: "text-neutral-700",
                  innerHTML: n.description_details
                }, null, 8, OO)) : z("", !0)
              ])
            ])
          ]);
        }), 128))
      ])) : (x(), A("p", fO, "No Data")),
      t.logs.links ? (x(), se(B(Xl), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : z("", !0)
    ]));
  }
}, _O = {
  class: "fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0",
  "scroll-region": ""
}, AO = /* @__PURE__ */ P("div", { class: "absolute inset-0 bg-gray-500 opacity-75" }, null, -1), EO = [
  AO
], CO = {
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
    Wt(() => document.addEventListener("keydown", a)), Jn(() => {
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
    return (s, u) => (x(), se(jp, { to: "body" }, [
      ge(Lr, { "leave-active-class": "duration-200" }, {
        default: Ee(() => [
          Ve(P("div", _O, [
            ge(Lr, {
              "enter-active-class": "ease-out duration-300",
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": "ease-in duration-200",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ee(() => [
                Ve(P("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, EO, 512), [
                  [zt, t.show]
                ])
              ]),
              _: 1
            }),
            ge(Lr, {
              "enter-active-class": "ease-out duration-300",
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": "ease-in duration-200",
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: Ee(() => [
                Ve(P("div", {
                  class: K(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value])
                }, [
                  t.show ? H(s.$slots, "default", { key: 0 }) : z("", !0)
                ], 2), [
                  [zt, t.show]
                ])
              ]),
              _: 3
            })
          ], 512), [
            [zt, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, kO = { class: "ml-3 flex-1 whitespace-nowrap" }, TO = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = re(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (x(), se(B(ct), {
      href: t.href,
      class: K(r.value)
    }, {
      default: Ee(() => [
        H(n.$slots, "icon"),
        P("span", kO, [
          H(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, PO = {
  key: 0,
  class: "flex justify-center"
}, $O = { "aria-label": "Page navigation" }, IO = { class: "list-style-none flex" }, DO = ["innerHTML"], RO = ["innerHTML", "onClick"], Xl = {
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
    return (o, s) => i.value.length > 3 ? (x(), A("div", PO, [
      P("nav", $O, [
        P("ul", IO, [
          (x(!0), A(ce, null, Qe(i.value, (u, c) => (x(), A("li", { key: c }, [
            t.linkReturn ? (x(), A(ce, { key: 0 }, [
              u.url === null ? (x(), A("button", {
                key: 0,
                class: "pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                onClick: s[0] || (s[0] = (f) => a(""))
              }, null, 8, DO)) : (x(), A("button", {
                key: 1,
                class: K(["relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
                innerHTML: u.label,
                onClick: (f) => a(u.url)
              }, null, 10, RO))
            ], 64)) : (x(), A(ce, { key: 1 }, [
              u.url === null ? (x(), se(B(ct), {
                key: 0,
                class: "pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                href: ""
              }, null, 8, ["innerHTML"])) : (x(), se(B(ct), {
                key: 1,
                class: K(["relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
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
}, NO = ["type", "disabled"], Ql = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (x(), A("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      H(e.$slots, "default")
    ], 8, NO));
  }
}, LO = ["type"], FO = {
  __name: "DangerButton",
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(t) {
    return (e, r) => (x(), A("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700"
    }, [
      H(e.$slots, "default")
    ], 8, LO));
  }
}, MO = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = re(
      () => e.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (x(), se(B(ct), {
      href: t.href,
      class: K(r.value)
    }, {
      default: Ee(() => [
        H(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, BO = ["type"], jO = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (x(), A("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      H(e.$slots, "default")
    ], 8, BO));
  }
}, zO = {
  key: 0,
  class: "relative mb-2 rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, UO = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !0,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (x(), A("div", {
      class: K(["rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      P("div", {
        class: K(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (x(), A("div", zO, [
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
}, VO = {}, HO = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, WO = /* @__PURE__ */ P("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), qO = [
  WO
];
function GO(t, e) {
  return x(), A("div", HO, qO);
}
const Zl = /* @__PURE__ */ jl(VO, [["render", GO]]), YO = { class: "flex flex-wrap gap-2 lg:flex-nowrap" }, KO = ["onClick"], JO = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, XO = { class: "font-medium text-xl leading-tight text-neutral-800" }, QO = { class: "flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" }, ZO = {
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
    return (o, s) => (x(), A("div", null, [
      P("div", YO, [
        (x(!0), A(ce, null, Qe(t.stats, (u) => (x(), A("div", {
          class: K(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(u.name)
          }]),
          onClick: (c) => i(u.name),
          key: u.value
        }, [
          P("div", null, [
            P("div", JO, [
              P("h5", XO, U(u.value), 1)
            ])
          ]),
          P("div", QO, U(u.label ?? u.name), 1)
        ], 10, KO))), 128))
      ])
    ]));
  }
}, ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert: q2,
  Checkbox: Up,
  CollapsibleSection: Ip,
  DangerButton: FO,
  Dropdown: X2,
  DropdownLink: Q2,
  DropdownSearchbar: jg,
  FileDropZoneInput: q1,
  Images: cw,
  Input: Hm,
  InputError: Jr,
  InputLabel: Na,
  LinkButton: eO,
  LinkDropdownButton: aO,
  LinkDropdownButtonItem: sO,
  Logs: lO,
  LogsContent: Dp,
  Modal: CO,
  NavLink: TO,
  Pagination: Xl,
  PrimaryButton: Ql,
  RadioButton: hw,
  ResponsiveNavLink: MO,
  SearchSelect: Kg,
  SecondaryButton: jO,
  Section: UO,
  Spinner: Zl,
  Stats: ZO,
  SubmitButton: gw,
  Table: ww,
  TableItemCard: BS,
  Td: Mw,
  TextInput: Rf,
  Textarea: eg,
  Th: Rw,
  Thead: _w,
  TrCollapseHandler: jw
}, Symbol.toStringTag, { value: "Module" })), w_ = {
  install(t) {
    for (const e in ef)
      t.component(e, ef[e]);
  }
};
export {
  q2 as Alert,
  Up as Checkbox,
  Ip as CollapsibleSection,
  FO as DangerButton,
  X2 as Dropdown,
  Q2 as DropdownLink,
  jg as DropdownSearchbar,
  q1 as FileDropZoneInput,
  cw as Images,
  Hm as Input,
  Jr as InputError,
  Na as InputLabel,
  eO as LinkButton,
  aO as LinkDropdownButton,
  sO as LinkDropdownButtonItem,
  lO as Logs,
  Dp as LogsContent,
  CO as Modal,
  TO as NavLink,
  Xl as Pagination,
  Ql as PrimaryButton,
  hw as RadioButton,
  MO as ResponsiveNavLink,
  Kg as SearchSelect,
  jO as SecondaryButton,
  UO as Section,
  Zl as Spinner,
  ZO as Stats,
  gw as SubmitButton,
  ww as Table,
  BS as TableItemCard,
  Mw as Td,
  Rf as TextInput,
  eg as Textarea,
  Rw as Th,
  _w as Thead,
  jw as TrCollapseHandler,
  w_ as default,
  Cc as getInertiaRouter,
  r_ as hasPermission,
  Iw as moneyFormat,
  t_ as numberFormat,
  n_ as setInertiaRouter
};
