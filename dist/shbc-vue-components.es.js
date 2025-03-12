import { computed as fe, withDirectives as xt, createElementBlock as B, openBlock as $, normalizeClass as te, vModelCheckbox as jf, defineComponent as pr, watch as Ar, h as cr, mergeModels as Wl, ref as de, useModel as Wh, onMounted as kt, createBlock as pe, createCommentVNode as Z, createElementVNode as U, unref as Y, renderSlot as Q, toDisplayString as re, createVNode as Le, Transition as zr, withCtx as Ne, vModelSelect as Gh, Fragment as Ae, createTextVNode as Te, vShow as Er, vModelText as Kh, resolveDirective as Yh, normalizeProps as Ot, guardReactiveProps as It, renderList as Bt, resolveDynamicComponent as Qi, mergeProps as Gn, toHandlers as Jh, withModifiers as xr, withKeys as sn, normalizeStyle as Un, shallowRef as Xh, markRaw as Gl, onUnmounted as yn, reactive as pl, toRefs as Qh, nextTick as Zh, Teleport as ep } from "vue";
const tp = ["value"], x2 = {
  __name: "Checkbox",
  props: {
    checked: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      default: null
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const r = t, n = e, a = fe({
      get() {
        return n.checked;
      },
      set(i) {
        r("update:checked", i);
      }
    });
    return (i, s) => xt(($(), B("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => a.value = l),
      class: te(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, tp)), [
      [jf, a.value]
    ]);
  }
};
function Kl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kl(Object(r), !0).forEach(function(n) {
      Ke(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
function rp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function np(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ap(e, t, r) {
  return t && np(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ke(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ml(e, t) {
  return sp(e) || lp(e, t) || Uf(e, t) || cp();
}
function ta(e) {
  return ip(e) || op(e) || Uf(e) || up();
}
function ip(e) {
  if (Array.isArray(e)) return Mo(e);
}
function sp(e) {
  if (Array.isArray(e)) return e;
}
function op(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function lp(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (r = r.call(e); !(a = (s = r.next()).done) && (n.push(s.value), !(t && n.length === t)); a = !0)
        ;
    } catch (d) {
      i = !0, l = d;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i) throw l;
      }
    }
    return n;
  }
}
function Uf(e, t) {
  if (e) {
    if (typeof e == "string") return Mo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mo(e, t);
  }
}
function Mo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function up() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Yl = function() {
}, gl = {}, zf = {}, Vf = null, Hf = {
  mark: Yl,
  measure: Yl
};
try {
  typeof window < "u" && (gl = window), typeof document < "u" && (zf = document), typeof MutationObserver < "u" && (Vf = MutationObserver), typeof performance < "u" && (Hf = performance);
} catch {
}
var fp = gl.navigator || {}, Jl = fp.userAgent, Xl = Jl === void 0 ? "" : Jl, Cr = gl, Oe = zf, Ql = Vf, Ea = Hf;
Cr.document;
var mr = !!Oe.documentElement && !!Oe.head && typeof Oe.addEventListener == "function" && typeof Oe.createElement == "function", Wf = ~Xl.indexOf("MSIE") || ~Xl.indexOf("Trident/"), Ca, Oa, ka, Pa, _a, fr = "___FONT_AWESOME___", Bo = 16, Gf = "fa", Kf = "svg-inline--fa", Hr = "data-fa-i2svg", qo = "data-fa-pseudo-element", dp = "data-fa-pseudo-element-pending", yl = "data-prefix", vl = "data-icon", Zl = "fontawesome-i2svg", hp = "async", pp = ["HTML", "HEAD", "STYLE", "SCRIPT"], Yf = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), Ee = "classic", Fe = "sharp", bl = [Ee, Fe];
function ra(e) {
  return new Proxy(e, {
    get: function(r, n) {
      return n in r ? r[n] : r[Ee];
    }
  });
}
var Kn = ra((Ca = {}, Ke(Ca, Ee, {
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
}), Ke(Ca, Fe, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Ca)), Yn = ra((Oa = {}, Ke(Oa, Ee, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ke(Oa, Fe, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Oa)), Jn = ra((ka = {}, Ke(ka, Ee, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ke(ka, Fe, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), ka)), mp = ra((Pa = {}, Ke(Pa, Ee, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ke(Pa, Fe, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Pa)), gp = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Jf = "fa-layers-text", yp = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, vp = ra((_a = {}, Ke(_a, Ee, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ke(_a, Fe, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), _a)), Xf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bp = Xf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), wp = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Br = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Xn = /* @__PURE__ */ new Set();
Object.keys(Yn[Ee]).map(Xn.add.bind(Xn));
Object.keys(Yn[Fe]).map(Xn.add.bind(Xn));
var xp = [].concat(bl, ta(Xn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Br.GROUP, Br.SWAP_OPACITY, Br.PRIMARY, Br.SECONDARY]).concat(Xf.map(function(e) {
  return "".concat(e, "x");
})).concat(bp.map(function(e) {
  return "w-".concat(e);
})), zn = Cr.FontAwesomeConfig || {};
function Sp(e) {
  var t = Oe.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ap(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Oe && typeof Oe.querySelector == "function") {
  var Ep = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Ep.forEach(function(e) {
    var t = ml(e, 2), r = t[0], n = t[1], a = Ap(Sp(r));
    a != null && (zn[n] = a);
  });
}
var Qf = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Gf,
  replacementClass: Kf,
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
zn.familyPrefix && (zn.cssPrefix = zn.familyPrefix);
var mn = K(K({}, Qf), zn);
mn.autoReplaceSvg || (mn.observeMutations = !1);
var J = {};
Object.keys(Qf).forEach(function(e) {
  Object.defineProperty(J, e, {
    enumerable: !0,
    set: function(r) {
      mn[e] = r, Vn.forEach(function(n) {
        return n(J);
      });
    },
    get: function() {
      return mn[e];
    }
  });
});
Object.defineProperty(J, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    mn.cssPrefix = t, Vn.forEach(function(r) {
      return r(J);
    });
  },
  get: function() {
    return mn.cssPrefix;
  }
});
Cr.FontAwesomeConfig = J;
var Vn = [];
function Cp(e) {
  return Vn.push(e), function() {
    Vn.splice(Vn.indexOf(e), 1);
  };
}
var on = Bo, Jt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Op(e) {
  if (!(!e || !mr)) {
    var t = Oe.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var r = Oe.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var i = r[a], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = i);
    }
    return Oe.head.insertBefore(t, n), e;
  }
}
var kp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Qn() {
  for (var e = 12, t = ""; e-- > 0; )
    t += kp[Math.random() * 62 | 0];
  return t;
}
function vn(e) {
  for (var t = [], r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function wl(e) {
  return e.classList ? vn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Zf(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pp(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, '="').concat(Zf(e[r]), '" ');
  }, "").trim();
}
function ii(e) {
  return Object.keys(e || {}).reduce(function(t, r) {
    return t + "".concat(r, ": ").concat(e[r].trim(), ";");
  }, "");
}
function xl(e) {
  return e.size !== Jt.size || e.x !== Jt.x || e.y !== Jt.y || e.rotate !== Jt.rotate || e.flipX || e.flipY;
}
function _p(e) {
  var t = e.transform, r = e.containerWidth, n = e.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), d = {
    transform: "".concat(i, " ").concat(s, " ").concat(l)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: d,
    path: u
  };
}
function Tp(e) {
  var t = e.transform, r = e.width, n = r === void 0 ? Bo : r, a = e.height, i = a === void 0 ? Bo : a, s = "";
  return Wf ? s += "translate(".concat(t.x / on - n / 2, "em, ").concat(t.y / on - i / 2, "em) ") : s += "translate(calc(-50% + ".concat(t.x / on, "em), calc(-50% + ").concat(t.y / on, "em)) "), s += "scale(".concat(t.size / on * (t.flipX ? -1 : 1), ", ").concat(t.size / on * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Rp = `:root, :host {
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
function ed() {
  var e = Gf, t = Kf, r = J.cssPrefix, n = J.replacementClass, a = Rp;
  if (r !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(l, ".".concat(n));
  }
  return a;
}
var eu = !1;
function Zi() {
  J.autoAddCss && !eu && (Op(ed()), eu = !0);
}
var $p = {
  mixout: function() {
    return {
      dom: {
        css: ed,
        insertCss: Zi
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Zi();
      },
      beforeI2svg: function() {
        Zi();
      }
    };
  }
}, dr = Cr || {};
dr[fr] || (dr[fr] = {});
dr[fr].styles || (dr[fr].styles = {});
dr[fr].hooks || (dr[fr].hooks = {});
dr[fr].shims || (dr[fr].shims = []);
var Lt = dr[fr], td = [], Ip = function e() {
  Oe.removeEventListener("DOMContentLoaded", e), Ya = 1, td.map(function(t) {
    return t();
  });
}, Ya = !1;
mr && (Ya = (Oe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Oe.readyState), Ya || Oe.addEventListener("DOMContentLoaded", Ip));
function Dp(e) {
  mr && (Ya ? setTimeout(e, 0) : td.push(e));
}
function na(e) {
  var t = e.tag, r = e.attributes, n = r === void 0 ? {} : r, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? Zf(e) : "<".concat(t, " ").concat(Pp(n), ">").concat(i.map(na).join(""), "</").concat(t, ">");
}
function tu(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var es = function(t, r, n, a) {
  var i = Object.keys(t), s = i.length, l = r, d, u, o;
  for (n === void 0 ? (d = 1, o = t[i[0]]) : (d = 0, o = n); d < s; d++)
    u = i[d], o = l(o, t[u], u, t);
  return o;
};
function Fp(e) {
  for (var t = [], r = 0, n = e.length; r < n; ) {
    var a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function jo(e) {
  var t = Fp(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Lp(e, t) {
  var r = e.length, n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function ru(e) {
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r], a = !!n.icon;
    return a ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Uo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, i = ru(t);
  typeof Lt.hooks.addPack == "function" && !a ? Lt.hooks.addPack(e, ru(t)) : Lt.styles[e] = K(K({}, Lt.styles[e] || {}), i), e === "fas" && Uo("fa", t);
}
var Ta, Ra, $a, un = Lt.styles, Np = Lt.shims, Mp = (Ta = {}, Ke(Ta, Ee, Object.values(Jn[Ee])), Ke(Ta, Fe, Object.values(Jn[Fe])), Ta), Sl = null, rd = {}, nd = {}, ad = {}, id = {}, sd = {}, Bp = (Ra = {}, Ke(Ra, Ee, Object.keys(Kn[Ee])), Ke(Ra, Fe, Object.keys(Kn[Fe])), Ra);
function qp(e) {
  return ~xp.indexOf(e);
}
function jp(e, t) {
  var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !qp(a) ? a : null;
}
var od = function() {
  var t = function(i) {
    return es(un, function(s, l, d) {
      return s[d] = es(l, i, {}), s;
    }, {});
  };
  rd = t(function(a, i, s) {
    if (i[3] && (a[i[3]] = s), i[2]) {
      var l = i[2].filter(function(d) {
        return typeof d == "number";
      });
      l.forEach(function(d) {
        a[d.toString(16)] = s;
      });
    }
    return a;
  }), nd = t(function(a, i, s) {
    if (a[s] = s, i[2]) {
      var l = i[2].filter(function(d) {
        return typeof d == "string";
      });
      l.forEach(function(d) {
        a[d] = s;
      });
    }
    return a;
  }), sd = t(function(a, i, s) {
    var l = i[2];
    return a[s] = s, l.forEach(function(d) {
      a[d] = s;
    }), a;
  });
  var r = "far" in un || J.autoFetchSvg, n = es(Np, function(a, i) {
    var s = i[0], l = i[1], d = i[2];
    return l === "far" && !r && (l = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: l,
      iconName: d
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: l,
      iconName: d
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  ad = n.names, id = n.unicodes, Sl = si(J.styleDefault, {
    family: J.familyDefault
  });
};
Cp(function(e) {
  Sl = si(e.styleDefault, {
    family: J.familyDefault
  });
});
od();
function Al(e, t) {
  return (rd[e] || {})[t];
}
function Up(e, t) {
  return (nd[e] || {})[t];
}
function qr(e, t) {
  return (sd[e] || {})[t];
}
function ld(e) {
  return ad[e] || {
    prefix: null,
    iconName: null
  };
}
function zp(e) {
  var t = id[e], r = Al("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Or() {
  return Sl;
}
var El = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function si(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? Ee : r, a = Kn[n][e], i = Yn[n][e] || Yn[n][a], s = e in Lt.styles ? e : null;
  return i || s || null;
}
var nu = ($a = {}, Ke($a, Ee, Object.keys(Jn[Ee])), Ke($a, Fe, Object.keys(Jn[Fe])), $a);
function oi(e) {
  var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, i = (t = {}, Ke(t, Ee, "".concat(J.cssPrefix, "-").concat(Ee)), Ke(t, Fe, "".concat(J.cssPrefix, "-").concat(Fe)), t), s = null, l = Ee;
  (e.includes(i[Ee]) || e.some(function(u) {
    return nu[Ee].includes(u);
  })) && (l = Ee), (e.includes(i[Fe]) || e.some(function(u) {
    return nu[Fe].includes(u);
  })) && (l = Fe);
  var d = e.reduce(function(u, o) {
    var f = jp(J.cssPrefix, o);
    if (un[o] ? (o = Mp[l].includes(o) ? mp[l][o] : o, s = o, u.prefix = o) : Bp[l].indexOf(o) > -1 ? (s = o, u.prefix = si(o, {
      family: l
    })) : f ? u.iconName = f : o !== J.replacementClass && o !== i[Ee] && o !== i[Fe] && u.rest.push(o), !a && u.prefix && u.iconName) {
      var p = s === "fa" ? ld(u.iconName) : {}, h = qr(u.prefix, u.iconName);
      p.prefix && (s = null), u.iconName = p.iconName || h || u.iconName, u.prefix = p.prefix || u.prefix, u.prefix === "far" && !un.far && un.fas && !J.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, El());
  return (e.includes("fa-brands") || e.includes("fab")) && (d.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (d.prefix = "fad"), !d.prefix && l === Fe && (un.fass || J.autoFetchSvg) && (d.prefix = "fass", d.iconName = qr(d.prefix, d.iconName) || d.iconName), (d.prefix === "fa" || s === "fa") && (d.prefix = Or() || "fas"), d;
}
var Vp = /* @__PURE__ */ function() {
  function e() {
    rp(this, e), this.definitions = {};
  }
  return ap(e, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var s = a.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(l) {
        r.definitions[l] = K(K({}, r.definitions[l] || {}), s[l]), Uo(l, s[l]);
        var d = Jn[Ee][l];
        d && Uo(d, s[l]), od();
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
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(i) {
        var s = a[i], l = s.prefix, d = s.iconName, u = s.icon, o = u[2];
        r[l] || (r[l] = {}), o.length > 0 && o.forEach(function(f) {
          typeof f == "string" && (r[l][f] = u);
        }), r[l][d] = u;
      }), r;
    }
  }]), e;
}(), au = [], cn = {}, dn = {}, Hp = Object.keys(dn);
function Wp(e, t) {
  var r = t.mixoutsTo;
  return au = e, cn = {}, Object.keys(dn).forEach(function(n) {
    Hp.indexOf(n) === -1 && delete dn[n];
  }), au.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(s) {
      typeof a[s] == "function" && (r[s] = a[s]), Ka(a[s]) === "object" && Object.keys(a[s]).forEach(function(l) {
        r[s] || (r[s] = {}), r[s][l] = a[s][l];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(s) {
        cn[s] || (cn[s] = []), cn[s].push(i[s]);
      });
    }
    n.provides && n.provides(dn);
  }), r;
}
function zo(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var i = cn[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(n));
  }), t;
}
function Wr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = cn[e] || [];
  a.forEach(function(i) {
    i.apply(null, r);
  });
}
function hr() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return dn[e] ? dn[e].apply(null, t) : void 0;
}
function Vo(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, r = e.prefix || Or();
  if (t)
    return t = qr(r, t) || t, tu(ud.definitions, r, t) || tu(Lt.styles, r, t);
}
var ud = new Vp(), Gp = function() {
  J.autoReplaceSvg = !1, J.observeMutations = !1, Wr("noAuto");
}, Kp = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mr ? (Wr("beforeI2svg", t), hr("pseudoElements2svg", t), hr("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
    J.autoReplaceSvg === !1 && (J.autoReplaceSvg = !0), J.observeMutations = !0, Dp(function() {
      Jp({
        autoReplaceSvgRoot: r
      }), Wr("watch", t);
    });
  }
}, Yp = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Ka(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: qr(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = si(t[0]);
      return {
        prefix: n,
        iconName: qr(n, r) || r
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(J.cssPrefix, "-")) > -1 || t.match(gp))) {
      var a = oi(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Or(),
        iconName: qr(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = Or();
      return {
        prefix: i,
        iconName: qr(i, t) || t
      };
    }
  }
}, At = {
  noAuto: Gp,
  config: J,
  dom: Kp,
  parse: Yp,
  library: ud,
  findIconDefinition: Vo,
  toHtml: na
}, Jp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? Oe : r;
  (Object.keys(Lt.styles).length > 0 || J.autoFetchSvg) && mr && J.autoReplaceSvg && At.dom.i2svg({
    node: n
  });
};
function li(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return na(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (mr) {
        var n = Oe.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Xp(e) {
  var t = e.children, r = e.main, n = e.mask, a = e.attributes, i = e.styles, s = e.transform;
  if (xl(s) && r.found && !n.found) {
    var l = r.width, d = r.height, u = {
      x: l / d / 2,
      y: 0.5
    };
    a.style = ii(K(K({}, i), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Qp(e) {
  var t = e.prefix, r = e.iconName, n = e.children, a = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(J.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: K(K({}, a), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function Cl(e) {
  var t = e.icons, r = t.main, n = t.mask, a = e.prefix, i = e.iconName, s = e.transform, l = e.symbol, d = e.title, u = e.maskId, o = e.titleId, f = e.extra, p = e.watchable, h = p === void 0 ? !1 : p, m = n.found ? n : r, y = m.width, g = m.height, v = a === "fak", b = [J.replacementClass, i ? "".concat(J.cssPrefix, "-").concat(i) : ""].filter(function(N) {
    return f.classes.indexOf(N) === -1;
  }).filter(function(N) {
    return N !== "" || !!N;
  }).concat(f.classes).join(" "), S = {
    children: [],
    attributes: K(K({}, f.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: b,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(g)
    })
  }, O = v && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(y / g * 16 * 0.0625, "em")
  } : {};
  h && (S.attributes[Hr] = ""), d && (S.children.push({
    tag: "title",
    attributes: {
      id: S.attributes["aria-labelledby"] || "title-".concat(o || Qn())
    },
    children: [d]
  }), delete S.attributes.title);
  var E = K(K({}, S), {}, {
    prefix: a,
    iconName: i,
    main: r,
    mask: n,
    maskId: u,
    transform: s,
    symbol: l,
    styles: K(K({}, O), f.styles)
  }), C = n.found && r.found ? hr("generateAbstractMask", E) || {
    children: [],
    attributes: {}
  } : hr("generateAbstractIcon", E) || {
    children: [],
    attributes: {}
  }, T = C.children, F = C.attributes;
  return E.children = T, E.attributes = F, l ? Qp(E) : Xp(E);
}
function iu(e) {
  var t = e.content, r = e.width, n = e.height, a = e.transform, i = e.title, s = e.extra, l = e.watchable, d = l === void 0 ? !1 : l, u = K(K(K({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  d && (u[Hr] = "");
  var o = K({}, s.styles);
  xl(a) && (o.transform = Tp({
    transform: a,
    width: r,
    height: n
  }), o["-webkit-transform"] = o.transform);
  var f = ii(o);
  f.length > 0 && (u.style = f);
  var p = [];
  return p.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && p.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), p;
}
function Zp(e) {
  var t = e.content, r = e.title, n = e.extra, a = K(K(K({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = ii(n.styles);
  i.length > 0 && (a.style = i);
  var s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
var ts = Lt.styles;
function Ho(e) {
  var t = e[0], r = e[1], n = e.slice(4), a = ml(n, 1), i = a[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(J.cssPrefix, "-").concat(Br.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(J.cssPrefix, "-").concat(Br.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(J.cssPrefix, "-").concat(Br.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: s
  };
}
var em = {
  found: !1,
  width: 512,
  height: 512
};
function tm(e, t) {
  !Yf && !J.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Wo(e, t) {
  var r = t;
  return t === "fa" && J.styleDefault !== null && (t = Or()), new Promise(function(n, a) {
    if (hr("missingIconAbstract"), r === "fa") {
      var i = ld(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && ts[t] && ts[t][e]) {
      var s = ts[t][e];
      return n(Ho(s));
    }
    tm(e, t), n(K(K({}, em), {}, {
      icon: J.showMissingIcons && e ? hr("missingIconAbstract") || {} : {}
    }));
  });
}
var su = function() {
}, Go = J.measurePerformance && Ea && Ea.mark && Ea.measure ? Ea : {
  mark: su,
  measure: su
}, Nn = 'FA "6.5.1"', rm = function(t) {
  return Go.mark("".concat(Nn, " ").concat(t, " begins")), function() {
    return cd(t);
  };
}, cd = function(t) {
  Go.mark("".concat(Nn, " ").concat(t, " ends")), Go.measure("".concat(Nn, " ").concat(t), "".concat(Nn, " ").concat(t, " begins"), "".concat(Nn, " ").concat(t, " ends"));
}, Ol = {
  begin: rm,
  end: cd
}, Ba = function() {
};
function ou(e) {
  var t = e.getAttribute ? e.getAttribute(Hr) : null;
  return typeof t == "string";
}
function nm(e) {
  var t = e.getAttribute ? e.getAttribute(yl) : null, r = e.getAttribute ? e.getAttribute(vl) : null;
  return t && r;
}
function am(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(J.replacementClass);
}
function im() {
  if (J.autoReplaceSvg === !0)
    return qa.replace;
  var e = qa[J.autoReplaceSvg];
  return e || qa.replace;
}
function sm(e) {
  return Oe.createElementNS("http://www.w3.org/2000/svg", e);
}
function om(e) {
  return Oe.createElement(e);
}
function fd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e.tag === "svg" ? sm : om : r;
  if (typeof e == "string")
    return Oe.createTextNode(e);
  var a = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    a.appendChild(fd(s, {
      ceFn: n
    }));
  }), a;
}
function lm(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var qa = {
  replace: function(t) {
    var r = t[0];
    if (r.parentNode)
      if (t[1].forEach(function(a) {
        r.parentNode.insertBefore(fd(a), r);
      }), r.getAttribute(Hr) === null && J.keepOriginalSource) {
        var n = Oe.createComment(lm(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(t) {
    var r = t[0], n = t[1];
    if (~wl(r).indexOf(J.replacementClass))
      return qa.replace(t);
    var a = new RegExp("".concat(J.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(l, d) {
        return d === J.replacementClass || d.match(a) ? l.toSvg.push(d) : l.toNode.push(d), l;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var s = n.map(function(l) {
      return na(l);
    }).join(`
`);
    r.setAttribute(Hr, ""), r.innerHTML = s;
  }
};
function lu(e) {
  e();
}
function dd(e, t) {
  var r = typeof t == "function" ? t : Ba;
  if (e.length === 0)
    r();
  else {
    var n = lu;
    J.mutateApproach === hp && (n = Cr.requestAnimationFrame || lu), n(function() {
      var a = im(), i = Ol.begin("mutate");
      e.map(a), i(), r();
    });
  }
}
var kl = !1;
function hd() {
  kl = !0;
}
function Ko() {
  kl = !1;
}
var Ja = null;
function uu(e) {
  if (Ql && J.observeMutations) {
    var t = e.treeCallback, r = t === void 0 ? Ba : t, n = e.nodeCallback, a = n === void 0 ? Ba : n, i = e.pseudoElementsCallback, s = i === void 0 ? Ba : i, l = e.observeMutationsRoot, d = l === void 0 ? Oe : l;
    Ja = new Ql(function(u) {
      if (!kl) {
        var o = Or();
        vn(u).forEach(function(f) {
          if (f.type === "childList" && f.addedNodes.length > 0 && !ou(f.addedNodes[0]) && (J.searchPseudoElements && s(f.target), r(f.target)), f.type === "attributes" && f.target.parentNode && J.searchPseudoElements && s(f.target.parentNode), f.type === "attributes" && ou(f.target) && ~wp.indexOf(f.attributeName))
            if (f.attributeName === "class" && nm(f.target)) {
              var p = oi(wl(f.target)), h = p.prefix, m = p.iconName;
              f.target.setAttribute(yl, h || o), m && f.target.setAttribute(vl, m);
            } else am(f.target) && a(f.target);
        });
      }
    }), mr && Ja.observe(d, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function um() {
  Ja && Ja.disconnect();
}
function cm(e) {
  var t = e.getAttribute("style"), r = [];
  return t && (r = t.split(";").reduce(function(n, a) {
    var i = a.split(":"), s = i[0], l = i.slice(1);
    return s && l.length > 0 && (n[s] = l.join(":").trim()), n;
  }, {})), r;
}
function fm(e) {
  var t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", a = oi(wl(e));
  return a.prefix || (a.prefix = Or()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Up(a.prefix, e.innerText) || Al(a.prefix, jo(e.innerText))), !a.iconName && J.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function dm(e) {
  var t = vn(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return J.autoA11y && (r ? t["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(n || Qn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function hm() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Jt,
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
function cu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = fm(e), n = r.iconName, a = r.prefix, i = r.rest, s = dm(e), l = zo("parseNodeAttributes", {}, e), d = t.styleParser ? cm(e) : [];
  return K({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: Jt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: d,
      attributes: s
    }
  }, l);
}
var pm = Lt.styles;
function pd(e) {
  var t = J.autoReplaceSvg === "nest" ? cu(e, {
    styleParser: !1
  }) : cu(e);
  return ~t.extra.classes.indexOf(Jf) ? hr("generateLayersText", e, t) : hr("generateSvgReplacementMutation", e, t);
}
var kr = /* @__PURE__ */ new Set();
bl.map(function(e) {
  kr.add("fa-".concat(e));
});
Object.keys(Kn[Ee]).map(kr.add.bind(kr));
Object.keys(Kn[Fe]).map(kr.add.bind(kr));
kr = ta(kr);
function fu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!mr) return Promise.resolve();
  var r = Oe.documentElement.classList, n = function(f) {
    return r.add("".concat(Zl, "-").concat(f));
  }, a = function(f) {
    return r.remove("".concat(Zl, "-").concat(f));
  }, i = J.autoFetchSvg ? kr : bl.map(function(o) {
    return "fa-".concat(o);
  }).concat(Object.keys(pm));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(Jf, ":not([").concat(Hr, "])")].concat(i.map(function(o) {
    return ".".concat(o, ":not([").concat(Hr, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = vn(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var d = Ol.begin("onTree"), u = l.reduce(function(o, f) {
    try {
      var p = pd(f);
      p && o.push(p);
    } catch (h) {
      Yf || h.name === "MissingIcon" && console.error(h);
    }
    return o;
  }, []);
  return new Promise(function(o, f) {
    Promise.all(u).then(function(p) {
      dd(p, function() {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), d(), o();
      });
    }).catch(function(p) {
      d(), f(p);
    });
  });
}
function mm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pd(e).then(function(r) {
    r && dd([r], t);
  });
}
function gm(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : Vo(t || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : Vo(a || {})), e(n, K(K({}, r), {}, {
      mask: a
    }));
  };
}
var ym = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? Jt : n, i = r.symbol, s = i === void 0 ? !1 : i, l = r.mask, d = l === void 0 ? null : l, u = r.maskId, o = u === void 0 ? null : u, f = r.title, p = f === void 0 ? null : f, h = r.titleId, m = h === void 0 ? null : h, y = r.classes, g = y === void 0 ? [] : y, v = r.attributes, b = v === void 0 ? {} : v, S = r.styles, O = S === void 0 ? {} : S;
  if (t) {
    var E = t.prefix, C = t.iconName, T = t.icon;
    return li(K({
      type: "icon"
    }, t), function() {
      return Wr("beforeDOMElementCreation", {
        iconDefinition: t,
        params: r
      }), J.autoA11y && (p ? b["aria-labelledby"] = "".concat(J.replacementClass, "-title-").concat(m || Qn()) : (b["aria-hidden"] = "true", b.focusable = "false")), Cl({
        icons: {
          main: Ho(T),
          mask: d ? Ho(d.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: E,
        iconName: C,
        transform: K(K({}, Jt), a),
        symbol: s,
        title: p,
        maskId: o,
        titleId: m,
        extra: {
          attributes: b,
          styles: O,
          classes: g
        }
      });
    });
  }
}, vm = {
  mixout: function() {
    return {
      icon: gm(ym)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = fu, r.nodeCallback = mm, r;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? Oe : n, i = r.callback, s = i === void 0 ? function() {
      } : i;
      return fu(a, s);
    }, t.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, i = n.title, s = n.titleId, l = n.prefix, d = n.transform, u = n.symbol, o = n.mask, f = n.maskId, p = n.extra;
      return new Promise(function(h, m) {
        Promise.all([Wo(a, l), o.iconName ? Wo(o.iconName, o.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(y) {
          var g = ml(y, 2), v = g[0], b = g[1];
          h([r, Cl({
            icons: {
              main: v,
              mask: b
            },
            prefix: l,
            iconName: a,
            transform: d,
            symbol: u,
            maskId: f,
            title: i,
            titleId: s,
            extra: p,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, t.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, i = r.main, s = r.transform, l = r.styles, d = ii(l);
      d.length > 0 && (a.style = d);
      var u;
      return xl(s) && (u = hr("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, bm = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, i = a === void 0 ? [] : a;
        return li({
          type: "layer"
        }, function() {
          Wr("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var s = [];
          return r(function(l) {
            Array.isArray(l) ? l.map(function(d) {
              s = s.concat(d.abstract);
            }) : s = s.concat(l.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(J.cssPrefix, "-layers")].concat(ta(i)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, wm = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, i = a === void 0 ? null : a, s = n.classes, l = s === void 0 ? [] : s, d = n.attributes, u = d === void 0 ? {} : d, o = n.styles, f = o === void 0 ? {} : o;
        return li({
          type: "counter",
          content: r
        }, function() {
          return Wr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Zp({
            content: r.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: f,
              classes: ["".concat(J.cssPrefix, "-layers-counter")].concat(ta(l))
            }
          });
        });
      }
    };
  }
}, xm = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, i = a === void 0 ? Jt : a, s = n.title, l = s === void 0 ? null : s, d = n.classes, u = d === void 0 ? [] : d, o = n.attributes, f = o === void 0 ? {} : o, p = n.styles, h = p === void 0 ? {} : p;
        return li({
          type: "text",
          content: r
        }, function() {
          return Wr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), iu({
            content: r,
            transform: K(K({}, Jt), i),
            title: l,
            extra: {
              attributes: f,
              styles: h,
              classes: ["".concat(J.cssPrefix, "-layers-text")].concat(ta(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(r, n) {
      var a = n.title, i = n.transform, s = n.extra, l = null, d = null;
      if (Wf) {
        var u = parseInt(getComputedStyle(r).fontSize, 10), o = r.getBoundingClientRect();
        l = o.width / u, d = o.height / u;
      }
      return J.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([r, iu({
        content: r.innerHTML,
        width: l,
        height: d,
        transform: i,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, Sm = new RegExp('"', "ug"), du = [1105920, 1112319];
function Am(e) {
  var t = e.replace(Sm, ""), r = Lp(t, 0), n = r >= du[0] && r <= du[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: jo(a ? t[0] : t),
    isSecondary: n || a
  };
}
function hu(e, t) {
  var r = "".concat(dp).concat(t.replace(":", "-"));
  return new Promise(function(n, a) {
    if (e.getAttribute(r) !== null)
      return n();
    var i = vn(e.children), s = i.filter(function(T) {
      return T.getAttribute(qo) === t;
    })[0], l = Cr.getComputedStyle(e, t), d = l.getPropertyValue("font-family").match(yp), u = l.getPropertyValue("font-weight"), o = l.getPropertyValue("content");
    if (s && !d)
      return e.removeChild(s), n();
    if (d && o !== "none" && o !== "") {
      var f = l.getPropertyValue("content"), p = ~["Sharp"].indexOf(d[2]) ? Fe : Ee, h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(d[2]) ? Yn[p][d[2].toLowerCase()] : vp[p][u], m = Am(f), y = m.value, g = m.isSecondary, v = d[0].startsWith("FontAwesome"), b = Al(h, y), S = b;
      if (v) {
        var O = zp(y);
        O.iconName && O.prefix && (b = O.iconName, h = O.prefix);
      }
      if (b && !g && (!s || s.getAttribute(yl) !== h || s.getAttribute(vl) !== S)) {
        e.setAttribute(r, S), s && e.removeChild(s);
        var E = hm(), C = E.extra;
        C.attributes[qo] = t, Wo(b, h).then(function(T) {
          var F = Cl(K(K({}, E), {}, {
            icons: {
              main: T,
              mask: El()
            },
            prefix: h,
            iconName: S,
            extra: C,
            watchable: !0
          })), N = Oe.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(N, e.firstChild) : e.appendChild(N), N.outerHTML = F.map(function(R) {
            return na(R);
          }).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function Em(e) {
  return Promise.all([hu(e, "::before"), hu(e, "::after")]);
}
function Cm(e) {
  return e.parentNode !== document.head && !~pp.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(qo) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function pu(e) {
  if (mr)
    return new Promise(function(t, r) {
      var n = vn(e.querySelectorAll("*")).filter(Cm).map(Em), a = Ol.begin("searchPseudoElements");
      hd(), Promise.all(n).then(function() {
        a(), Ko(), t();
      }).catch(function() {
        a(), Ko(), r();
      });
    });
}
var Om = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = pu, r;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? Oe : n;
      J.searchPseudoElements && pu(a);
    };
  }
}, mu = !1, km = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          hd(), mu = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        uu(zo("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        um();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        mu ? Ko() : uu(zo("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, gu = function(t) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, a) {
    var i = a.toLowerCase().split("-"), s = i[0], l = i.slice(1).join("-");
    if (s && l === "h")
      return n.flipX = !0, n;
    if (s && l === "v")
      return n.flipY = !0, n;
    if (l = parseFloat(l), isNaN(l))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + l;
        break;
      case "shrink":
        n.size = n.size - l;
        break;
      case "left":
        n.x = n.x - l;
        break;
      case "right":
        n.x = n.x + l;
        break;
      case "up":
        n.y = n.y - l;
        break;
      case "down":
        n.y = n.y + l;
        break;
      case "rotate":
        n.rotate = n.rotate + l;
        break;
    }
    return n;
  }, r);
}, Pm = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return gu(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = gu(a)), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, i = r.containerWidth, s = r.iconWidth, l = {
        transform: "translate(".concat(i / 2, " 256)")
      }, d = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), o = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(d, " ").concat(u, " ").concat(o)
      }, p = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, h = {
        outer: l,
        inner: f,
        path: p
      };
      return {
        tag: "g",
        attributes: K({}, h.outer),
        children: [{
          tag: "g",
          attributes: K({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: K(K({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, rs = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function yu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _m(e) {
  return e.tag === "g" ? e.children : [e];
}
var Tm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), i = a ? oi(a.split(" ").map(function(s) {
          return s.trim();
        })) : El();
        return i.prefix || (i.prefix = Or()), r.mask = i, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, i = r.main, s = r.mask, l = r.maskId, d = r.transform, u = i.width, o = i.icon, f = s.width, p = s.icon, h = _p({
        transform: d,
        containerWidth: f,
        iconWidth: u
      }), m = {
        tag: "rect",
        attributes: K(K({}, rs), {}, {
          fill: "white"
        })
      }, y = o.children ? {
        children: o.children.map(yu)
      } : {}, g = {
        tag: "g",
        attributes: K({}, h.inner),
        children: [yu(K({
          tag: o.tag,
          attributes: K(K({}, o.attributes), h.path)
        }, y))]
      }, v = {
        tag: "g",
        attributes: K({}, h.outer),
        children: [g]
      }, b = "mask-".concat(l || Qn()), S = "clip-".concat(l || Qn()), O = {
        tag: "mask",
        attributes: K(K({}, rs), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, v]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: S
          },
          children: _m(p)
        }, O]
      };
      return n.push(E, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(S, ")"),
          mask: "url(#".concat(b, ")")
        }, rs)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Rm = {
  provides: function(t) {
    var r = !1;
    Cr.matchMedia && (r = Cr.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: K(K({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = K(K({}, i), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: K(K({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || l.children.push({
        tag: "animate",
        attributes: K(K({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: K(K({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(l), n.push({
        tag: "path",
        attributes: K(K({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: K(K({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: K(K({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: K(K({}, s), {}, {
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
}, $m = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = i, r;
      }
    };
  }
}, Im = [$p, vm, bm, wm, xm, Om, km, Pm, Tm, Rm, $m];
Wp(Im, {
  mixoutsTo: At
});
At.noAuto;
var md = At.config, aa = At.library;
At.dom;
var Xa = At.parse;
At.findIconDefinition;
At.toHtml;
var Dm = At.icon;
At.layer;
var Fm = At.text;
At.counter;
function vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vu(Object(r), !0).forEach(function(n) {
      ht(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
function ht(e, t, r) {
  return t = zm(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Lm(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Nm(e, t) {
  if (e == null) return {};
  var r = Lm(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Yo(e) {
  return Mm(e) || Bm(e) || qm(e) || jm();
}
function Mm(e) {
  if (Array.isArray(e)) return Jo(e);
}
function Bm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qm(e, t) {
  if (e) {
    if (typeof e == "string") return Jo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jo(e, t);
  }
}
function Jo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Um(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zm(e) {
  var t = Um(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Vm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gd = { exports: {} };
(function(e) {
  (function(t) {
    var r = function(v, b, S) {
      if (!u(b) || f(b) || p(b) || h(b) || d(b))
        return b;
      var O, E = 0, C = 0;
      if (o(b))
        for (O = [], C = b.length; E < C; E++)
          O.push(r(v, b[E], S));
      else {
        O = {};
        for (var T in b)
          Object.prototype.hasOwnProperty.call(b, T) && (O[v(T, S)] = r(v, b[T], S));
      }
      return O;
    }, n = function(v, b) {
      b = b || {};
      var S = b.separator || "_", O = b.split || /(?=[A-Z])/;
      return v.split(O).join(S);
    }, a = function(v) {
      return m(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(b, S) {
        return S ? S.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, i = function(v) {
      var b = a(v);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, s = function(v, b) {
      return n(v, b).toLowerCase();
    }, l = Object.prototype.toString, d = function(v) {
      return typeof v == "function";
    }, u = function(v) {
      return v === Object(v);
    }, o = function(v) {
      return l.call(v) == "[object Array]";
    }, f = function(v) {
      return l.call(v) == "[object Date]";
    }, p = function(v) {
      return l.call(v) == "[object RegExp]";
    }, h = function(v) {
      return l.call(v) == "[object Boolean]";
    }, m = function(v) {
      return v = v - 0, v === v;
    }, y = function(v, b) {
      var S = b && "process" in b ? b.process : b;
      return typeof S != "function" ? v : function(O, E) {
        return S(O, v, E);
      };
    }, g = {
      camelize: a,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(v, b) {
        return r(y(a, b), v);
      },
      decamelizeKeys: function(v, b) {
        return r(y(s, b), v, b);
      },
      pascalizeKeys: function(v, b) {
        return r(y(i, b), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(Vm);
})(gd);
var Hm = gd.exports, Wm = ["class", "style"];
function Gm(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = Hm.camelize(r.slice(0, n)), i = r.slice(n + 1).trim();
    return t[a] = i, t;
  }, {});
}
function Km(e) {
  return e.split(/\s+/).reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
function Pl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(d) {
    return Pl(d);
  }), a = Object.keys(e.attributes || {}).reduce(function(d, u) {
    var o = e.attributes[u];
    switch (u) {
      case "class":
        d.class = Km(o);
        break;
      case "style":
        d.style = Gm(o);
        break;
      default:
        d.attrs[u] = o;
    }
    return d;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var i = r.style, s = i === void 0 ? {} : i, l = Nm(r, Wm);
  return cr(e.tag, Ft(Ft(Ft({}, t), {}, {
    class: a.class,
    style: Ft(Ft({}, a.style), s)
  }, a.attrs), l), n);
}
var yd = !1;
try {
  yd = process.env.NODE_ENV === "production";
} catch {
}
function Ym() {
  if (!yd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Hn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ht({}, e, t) : {};
}
function Jm(e) {
  var t, r = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, ht(t, "fa-".concat(e.size), e.size !== null), ht(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), ht(t, "fa-pull-".concat(e.pull), e.pull !== null), ht(t, "fa-swap-opacity", e.swapOpacity), ht(t, "fa-bounce", e.bounce), ht(t, "fa-shake", e.shake), ht(t, "fa-beat", e.beat), ht(t, "fa-fade", e.fade), ht(t, "fa-beat-fade", e.beatFade), ht(t, "fa-flash", e.flash), ht(t, "fa-spin-pulse", e.spinPulse), ht(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function bu(e) {
  if (e && Qa(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Xa.icon)
    return Xa.icon(e);
  if (e === null)
    return null;
  if (Qa(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var Yt = pr({
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
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
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
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
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
  setup: function(t, r) {
    var n = r.attrs, a = fe(function() {
      return bu(t.icon);
    }), i = fe(function() {
      return Hn("classes", Jm(t));
    }), s = fe(function() {
      return Hn("transform", typeof t.transform == "string" ? Xa.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return Hn("mask", bu(t.mask));
    }), d = fe(function() {
      return Dm(a.value, Ft(Ft(Ft(Ft({}, i.value), s.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Ar(d, function(o) {
      if (!o)
        return Ym("Could not find one or more icon(s)", a.value, l.value);
    }, {
      immediate: !0
    });
    var u = fe(function() {
      return d.value ? Pl(d.value.abstract[0], {}, n) : null;
    });
    return function() {
      return u.value;
    };
  }
});
pr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.slots, a = md.familyPrefix, i = fe(function() {
      return ["".concat(a, "-layers")].concat(Yo(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return cr("div", {
        class: i.value
      }, n.default ? n.default() : []);
    };
  }
});
pr({
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
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, r) {
    var n = r.attrs, a = md.familyPrefix, i = fe(function() {
      return Hn("classes", [].concat(Yo(t.counter ? ["".concat(a, "-layers-counter")] : []), Yo(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), s = fe(function() {
      return Hn("transform", typeof t.transform == "string" ? Xa.transform(t.transform) : t.transform);
    }), l = fe(function() {
      var u = Fm(t.value.toString(), Ft(Ft({}, s.value), i.value)), o = u.abstract;
      return t.counter && (o[0].attributes.class = o[0].attributes.class.replace("fa-layers-text", "")), o[0];
    }), d = fe(function() {
      return Pl(l.value, {}, n);
    });
    return function() {
      return d.value;
    };
  }
});
var Xm = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Xo = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Qm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, Zm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, wu = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, xu = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, eg = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, tg = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, rg = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, ng = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
}, Su = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, ag = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, vd = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const bn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, ig = { class: "relative flex w-full max-w-full items-stretch" }, sg = {
  key: 0,
  class: "flex items-center"
}, og = {
  key: 1,
  class: "mr-1"
}, lg = ["id", "disabled", "required", "name"], ug = { key: 5 }, cg = ["required", "disabled", "name"], fg = {
  key: 0,
  class: "border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
}, dg = ["href"], hg = {
  __name: "Input",
  props: /* @__PURE__ */ Wl({
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: { type: [Number, String] },
    max: { type: [Number, String] },
    step: { type: [Number, String] },
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    submitBtn: String,
    autofocus: Boolean,
    pattern: String,
    whatsApp: String,
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    switchDescription: String,
    sublabel: String,
    hidePasswordToggler: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: null
    },
    inputCustomClass: {
      type: String,
      default: ""
    },
    checkboxCustomClass: {
      type: String,
      default: ""
    },
    buttonCustomClass: {
      type: String,
      default: ""
    },
    labelCustomClass: {
      type: String,
      default: ""
    },
    error: String
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Wl(["changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    aa.add(vd, Zm, ag, xu, wu);
    const n = e;
    function a(y) {
      let g = [];
      return y.split("_").join(" ").split(" ").map(function(v) {
        g.push(v[0].toUpperCase() + v.slice(1));
      }), g.join(" ");
    }
    const i = r, s = de(!1), l = Wh(e, "modelValue"), d = de(), u = de(), o = de(n.type);
    kt(() => {
      s.value = !n.form, d.value = s.value ? l.value : n.form[n.field];
    }), Ar(
      () => d.value,
      (y, g) => {
        if (y !== g) {
          if (s.value ? l.value = y : n.form[n.field] = y, u.value = g, i("update:modelValue", y), f.value) {
            f.value = !1;
            return;
          }
          i("changed", { value: y, old_value: g });
        }
      }
    );
    const f = de(!1), p = (y) => {
      d.value = y, f.value = !0;
    }, h = () => u.value;
    Ar(
      () => n.field ? n.form[n.field] : null,
      (y) => {
        d.value = s.value ? l.value : y;
      },
      {
        deep: !0
      }
    ), Ar(
      () => l.value,
      (y) => {
        d.value = y;
      }
    );
    const m = () => {
      o.value = o.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: m,
      setValueSilently: p,
      getPreviousValue: h
    }), (y, g) => {
      var v, b, S, O, E, C, T, F;
      return $(), B("div", {
        class: te(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Z("", !0) : ($(), pe(Y(_l), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? a(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        U("div", ig, [
          e.type === "switch" || e.type === "checkbox" ? ($(), B("label", sg, [
            (v = y.$slots) != null && v.leftDescription ? Q(y.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? ($(), B("span", og, re(e.leftDescription ? e.leftDescription : "Disable"), 1)) : Z("", !0),
            xt(U("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": g[0] || (g[0] = (N) => d.value = N),
              disabled: n.disabled,
              required: n.required,
              name: e.name ?? e.field
            }, null, 8, lg), [
              [jf, d.value]
            ]),
            e.type === "switch" ? ($(), B("div", {
              key: 2,
              tabindex: "0",
              class: te(["toggle-switch focusable ml-0!", {
                checked: d.value,
                disabled: n.disabled
              }])
            }, null, 2)) : ($(), B("div", {
              key: 3,
              tabindex: "0",
              class: te(["focusable text-primary mr-1 p-1", {
                "text-gray-500!": n.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              Le(zr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: Ne(() => [
                  n.form[e.field] ? ($(), pe(Y(Yt), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : ($(), pe(Y(Yt), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (b = y.$slots) != null && b.rightDescription ? Q(y.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? ($(), B("span", ug, re(e.rightDescription), 1)) : Z("", !0)
          ])) : e.type === "select" ? xt(($(), B("select", {
            key: 1,
            "onUpdate:modelValue": g[1] || (g[1] = (N) => d.value = N),
            required: n.required,
            disabled: n.disabled,
            name: e.name ?? e.field,
            class: "focusable block w-full rounded border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
          }, [
            Q(y.$slots, "default", {}, void 0, !0)
          ], 8, cg)), [
            [Gh, d.value]
          ]) : ($(), B(Ae, { key: 2 }, [
            e.addon ? ($(), B("span", fg, re(e.addon), 1)) : Z("", !0),
            Le(Y(wg), {
              id: e.field,
              type: o.value,
              class: te(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none!": e.addon,
                "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((S = y.$slots) == null ? void 0 : S.submit),
                [e.inputCustomClass]: !!e.inputCustomClass
              }]),
              modelValue: d.value,
              "onUpdate:modelValue": g[2] || (g[2] = (N) => d.value = N),
              required: n.required,
              disabled: n.disabled,
              autocomplete: e.autocomplete ?? e.field,
              min: n.min,
              max: n.max,
              step: n.step,
              placeholder: n.placeholder,
              autofocus: n.autofocus,
              pattern: n.pattern,
              name: e.name ?? e.field
            }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
            e.form ? ($(), B(Ae, { key: 1 }, [
              e.submitBtn ? ($(), pe(Y(ef), {
                key: 0,
                form: e.form,
                class: te(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: Ne(() => [
                  Te(re(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Z("", !0),
              (O = y.$slots) != null && O.submit ? ($(), pe(Y(ef), {
                key: 1,
                form: e.form,
                class: te(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: Ne(() => [
                  Q(y.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : Z("", !0)
            ], 64)) : Z("", !0),
            e.whatsApp ? ($(), B("a", {
              key: 2,
              class: te(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Le(Y(Yt), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, dg)) : Z("", !0),
            e.type == "password" && !e.hidePasswordToggler ? ($(), B("div", {
              key: 3,
              onClick: m,
              class: "absolute top-0 right-0 z-2 flex h-full w-11 cursor-pointer items-center justify-center rounded-r bg-gray-300 text-xs leading-normal font-medium text-white"
            }, [
              o.value === "password" ? ($(), pe(Y(Yt), {
                key: 0,
                icon: Y(xu),
                size: "2xl"
              }, null, 8, ["icon"])) : ($(), pe(Y(Yt), {
                key: 1,
                icon: Y(wu),
                size: "2xl"
              }, null, 8, ["icon"]))
            ])) : Z("", !0)
          ], 64))
        ]),
        e.error || (C = (E = e.form) == null ? void 0 : E.errors) != null && C[e.field] ? ($(), pe(Y(ia), {
          key: 1,
          message: e.error ? e.error : (F = (T = e.form) == null ? void 0 : T.errors) == null ? void 0 : F[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Z("", !0)
      ], 2);
    };
  }
}, S2 = /* @__PURE__ */ bn(hg, [["__scopeId", "data-v-8808e60a"]]), pg = { class: "text-sm text-red-600" }, ia = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, r) => xt(($(), B("div", null, [
      U("p", pg, re(e.message), 1)
    ], 512)), [
      [Er, e.message]
    ]);
  }
}, mg = { key: 0 }, gg = { key: 1 }, yg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, vg = {
  key: 3,
  class: "ml-1 text-red-500"
}, _l = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, r) => ($(), B("label", {
      class: te(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? ($(), B("span", mg, re(e.value), 1)) : ($(), B("span", gg, [
        Q(t.$slots, "default")
      ])),
      e.sublabel ? ($(), B("span", yg, re(e.sublabel), 1)) : Z("", !0),
      e.required ? ($(), B("span", vg, "*")) : Z("", !0)
    ], 2));
  }
}, bg = ["value"], wg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const r = de(null);
    return kt(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), t({ focus: () => r.value.focus() }), (n, a) => ($(), B("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: a[0] || (a[0] = (i) => n.$emit("update:modelValue", i.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, bg));
  }
}, xg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, Sg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], A2 = {
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
  setup(e) {
    const t = e;
    function r(n) {
      let a = [];
      return n.split("_").join(" ").split(" ").map(function(i) {
        a.push(i[0].toUpperCase() + i.slice(1));
      }), a.join(" ");
    }
    return (n, a) => ($(), B("div", null, [
      e.noLabel ? Z("", !0) : ($(), pe(Y(_l), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : r(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      U("div", xg, [
        xt(U("textarea", {
          id: e.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": a[0] || (a[0] = (i) => t.form[e.field] = i),
          required: t.required,
          disabled: t.disabled,
          autocomplete: e.field,
          placeholder: t.placeholder,
          autofocus: t.autofocus,
          rows: t.rows,
          onInput: a[1] || (a[1] = (i) => n.$emit("update:modelValue", i.target.value))
        }, null, 40, Sg), [
          [Kh, t.form[e.field]]
        ])
      ]),
      Le(Y(ia), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Ag = Object.defineProperty, Eg = Object.defineProperties, Cg = Object.getOwnPropertyDescriptors, Au = Object.getOwnPropertySymbols, Og = Object.prototype.hasOwnProperty, kg = Object.prototype.propertyIsEnumerable, Eu = (e, t, r) => t in e ? Ag(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ln = (e, t) => {
  for (var r in t || (t = {}))
    Og.call(t, r) && Eu(e, r, t[r]);
  if (Au)
    for (var r of Au(t))
      kg.call(t, r) && Eu(e, r, t[r]);
  return e;
}, Cu = (e, t) => Eg(e, Cg(t));
const Pg = {
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
    open(e) {
      this.autoscroll && e && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var e;
      const t = ((e = this.$refs.dropdownMenu) == null ? void 0 : e.children[this.typeAheadPointer]) || !1;
      if (t) {
        const r = this.getDropdownViewport(), { top: n, bottom: a, height: i } = t.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (a > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (r.height - i);
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
}, _g = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e = 0; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    open(e) {
      e && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e = this.typeAheadPointer - 1; e >= 0; e--)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadDown() {
      for (let e = this.typeAheadPointer + 1; e < this.filteredOptions.length; e++)
        if (this.selectable(this.filteredOptions[e])) {
          this.typeAheadPointer = e;
          break;
        }
    },
    typeAheadSelect() {
      const e = this.filteredOptions[this.typeAheadPointer];
      e && this.selectable(e) && this.select(e);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, Tg = {
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
    loading(e) {
      this.mutableLoading = e;
    }
  },
  methods: {
    toggleLoading(e = null) {
      return e == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e;
    }
  }
}, Tl = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, Rg = {}, $g = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Ig = /* @__PURE__ */ U("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Dg = [
  Ig
];
function Fg(e, t) {
  return $(), B("svg", $g, Dg);
}
const Lg = /* @__PURE__ */ Tl(Rg, [["render", Fg]]), Ng = {}, Mg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Bg = /* @__PURE__ */ U("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), qg = [
  Bg
];
function jg(e, t) {
  return $(), B("svg", Mg, qg);
}
const Ug = /* @__PURE__ */ Tl(Ng, [["render", jg]]), Ou = {
  Deselect: Lg,
  OpenIndicator: Ug
}, zg = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: r,
        top: n,
        left: a,
        width: i
      } = t.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: i + "px",
        left: s + a + "px",
        top: l + n + r + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function Vg(e) {
  const t = {};
  return Object.keys(e).sort().forEach((r) => {
    t[r] = e[r];
  }), JSON.stringify(t);
}
let Hg = 0;
function Wg() {
  return ++Hg;
}
const Gg = {
  components: ln({}, Ou),
  directives: { appendToBody: zg },
  mixins: [Pg, _g, Tg],
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
      default: (e) => e
    },
    selectable: {
      type: Function,
      default: (e) => !0
    },
    getOptionLabel: {
      type: Function,
      default(e) {
        return typeof e == "object" ? e.hasOwnProperty(this.label) ? e[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e;
      }
    },
    getOptionKey: {
      type: Function,
      default(e) {
        if (typeof e != "object")
          return e;
        try {
          return e.hasOwnProperty("id") ? e.id : Vg(e);
        } catch (t) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e, t);
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
      default(e, t, r) {
        return (t || "").toLocaleLowerCase().indexOf(r.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e, t) {
        return e.filter((r) => {
          let n = this.getOptionLabel(r);
          return typeof n == "number" && (n = n.toString()), this.filterBy(r, n, t);
        });
      }
    },
    createOption: {
      type: Function,
      default(e) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e } : e;
      }
    },
    resetOnOptionsChange: {
      default: !1,
      validator: (e) => ["function", "boolean"].includes(typeof e)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e, multiple: t }) {
        return e && !t;
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
      default: (e, t) => e
    },
    appendToBody: {
      type: Boolean,
      default: !1
    },
    calculatePosition: {
      type: Function,
      default(e, t, { width: r, top: n, left: a }) {
        e.style.top = n, e.style.left = a, e.style.width = r;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e, open: t, mutableLoading: r }) {
        return e ? !1 : t && !r;
      }
    },
    uid: {
      type: [String, Number],
      default: () => Wg()
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
      let e = this.modelValue;
      return this.isTrackingValues && (e = this.$data._value), e != null && e !== "" ? [].concat(e) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: ln({
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
            input: (t) => this.search = t.target.value
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
        listHeader: e,
        listFooter: e,
        header: Cu(ln({}, e), { deselect: this.deselect }),
        footer: Cu(ln({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return ln(ln({}, Ou), this.components);
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
      const e = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e;
      const t = this.search.length ? this.filter(e, this.search, this) : e;
      if (this.taggable && this.search.length) {
        const r = this.createOption(this.search);
        this.optionExists(r) || t.unshift(r);
      }
      return t;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e, t) {
      const r = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e, t, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && r() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: !0,
      handler(e) {
        this.isTrackingValues && this.setInternalValueFromOptions(e);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e) {
      this.$emit(e ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e) {
      Array.isArray(e) ? this.$data._value = e.map((t) => this.findOptionFromReducedValue(t)) : this.$data._value = this.findOptionFromReducedValue(e);
    },
    select(e) {
      this.$emit("option:selecting", e), this.isOptionSelected(e) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e) : (this.taggable && !this.optionExists(e) && (this.$emit("option:created", e), this.pushTag(e)), this.multiple && (e = this.selectedValue.concat(e)), this.updateValue(e), this.$emit("option:selected", e)), this.onAfterSelect(e);
    },
    deselect(e) {
      this.$emit("option:deselecting", e), this.updateValue(this.selectedValue.filter((t) => !this.optionComparator(t, e))), this.$emit("option:deselected", e);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e) {
      typeof this.modelValue > "u" && (this.$data._value = e), e !== null && (Array.isArray(e) ? e = e.map((t) => this.reduce(t)) : e = this.reduce(e)), this.$emit("update:modelValue", e);
    },
    toggleDropdown(e) {
      const t = e.target !== this.searchEl;
      t && e.preventDefault();
      const r = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || r.filter(Boolean).some((n) => n.contains(e.target) || n === e.target)) {
        e.preventDefault();
        return;
      }
      this.open && t ? this.searchEl.blur() : this.disabled || (this.open = !0, this.searchEl.focus());
    },
    isOptionSelected(e) {
      return this.selectedValue.some((t) => this.optionComparator(t, e));
    },
    isOptionDeselectable(e) {
      return this.isOptionSelected(e) && this.deselectFromDropdown;
    },
    optionComparator(e, t) {
      return this.getOptionKey(e) === this.getOptionKey(t);
    },
    findOptionFromReducedValue(e) {
      const t = (n) => JSON.stringify(this.reduce(n)) === JSON.stringify(e), r = [...this.options, ...this.pushedTags].filter(t);
      return r.length === 1 ? r[0] : r.find((n) => this.optionComparator(n, this.$data._value)) || e;
    },
    closeSearchOptions() {
      this.open = !1, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e = null;
        this.multiple && (e = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e);
      }
    },
    optionExists(e) {
      return this.optionList.some((t) => this.optionComparator(t, e));
    },
    normalizeOptionForSlot(e) {
      return typeof e == "object" ? e : { [this.label]: e };
    },
    pushTag(e) {
      this.pushedTags.push(e);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = !1;
      else {
        const { clearSearchOnSelect: e, multiple: t } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e, multiple: t }) && (this.search = ""), this.closeSearchOptions();
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
    onSearchKeyDown(e) {
      const t = (a) => (a.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (a) => this.maybeDeleteValue(),
        9: (a) => this.onTab(),
        27: (a) => this.onEscape(),
        38: (a) => (a.preventDefault(), this.typeAheadUp()),
        40: (a) => (a.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((a) => r[a] = t);
      const n = this.mapKeydown(r, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, Kg = ["dir"], Yg = ["id", "aria-expanded", "aria-owns"], Jg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Xg = ["disabled", "title", "aria-label", "onClick"], Qg = {
  ref: "actions",
  class: "vs__actions"
}, Zg = ["disabled"], ey = { class: "vs__spinner" }, ty = ["id"], ry = ["id", "aria-selected", "onMouseover", "onClick"], ny = {
  key: 0,
  class: "vs__no-options"
}, ay = /* @__PURE__ */ Te(" Sorry, no matching options. "), iy = ["id"];
function sy(e, t, r, n, a, i) {
  const s = Yh("append-to-body");
  return $(), B("div", {
    dir: r.dir,
    class: te(["v-select", i.stateClasses])
  }, [
    Q(e.$slots, "header", Ot(It(i.scope.header))),
    U("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (l) => i.toggleDropdown(l))
    }, [
      U("div", Jg, [
        ($(!0), B(Ae, null, Bt(i.selectedValue, (l, d) => Q(e.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(l),
          deselect: i.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          ($(), B("span", {
            key: r.getOptionKey(l),
            class: "vs__selected"
          }, [
            Q(e.$slots, "selected-option", Ot(It(i.normalizeOptionForSlot(l))), () => [
              Te(re(r.getOptionLabel(l)), 1)
            ]),
            r.multiple ? ($(), B("button", {
              key: 0,
              ref_for: !0,
              ref: (u) => a.deselectButtons[d] = u,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(l)}`,
              "aria-label": `Deselect ${r.getOptionLabel(l)}`,
              onClick: (u) => i.deselect(l)
            }, [
              ($(), pe(Qi(i.childComponents.Deselect)))
            ], 8, Xg)) : Z("", !0)
          ]))
        ])), 256)),
        Q(e.$slots, "search", Ot(It(i.scope.search)), () => [
          U("input", Gn({ class: "vs__search" }, i.scope.search.attributes, Jh(i.scope.search.events)), null, 16)
        ])
      ], 512),
      U("div", Qg, [
        xt(U("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...l) => i.clearSelection && i.clearSelection(...l))
        }, [
          ($(), pe(Qi(i.childComponents.Deselect)))
        ], 8, Zg), [
          [Er, i.showClearButton]
        ]),
        Q(e.$slots, "open-indicator", Ot(It(i.scope.openIndicator)), () => [
          r.noDrop ? Z("", !0) : ($(), pe(Qi(i.childComponents.OpenIndicator), Ot(Gn({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        Q(e.$slots, "spinner", Ot(It(i.scope.spinner)), () => [
          xt(U("div", ey, "Loading...", 512), [
            [Er, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Yg),
    Le(zr, { name: r.transition }, {
      default: Ne(() => [
        i.dropdownOpen ? xt(($(), B("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = xr((...l) => i.onMousedown && i.onMousedown(...l), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...l) => i.onMouseUp && i.onMouseUp(...l))
        }, [
          Q(e.$slots, "list-header", Ot(It(i.scope.listHeader))),
          ($(!0), B(Ae, null, Bt(i.filteredOptions, (l, d) => ($(), B("li", {
            id: `vs${r.uid}__option-${d}`,
            key: r.getOptionKey(l),
            role: "option",
            class: te(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(l) && d === e.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(l),
              "vs__dropdown-option--highlight": d === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(l)
            }]),
            "aria-selected": d === e.typeAheadPointer ? !0 : null,
            onMouseover: (u) => r.selectable(l) ? e.typeAheadPointer = d : null,
            onClick: xr((u) => r.selectable(l) ? i.select(l) : null, ["prevent", "stop"])
          }, [
            Q(e.$slots, "option", Ot(It(i.normalizeOptionForSlot(l))), () => [
              Te(re(r.getOptionLabel(l)), 1)
            ])
          ], 42, ry))), 128)),
          i.filteredOptions.length === 0 ? ($(), B("li", ny, [
            Q(e.$slots, "no-options", Ot(It(i.scope.noOptions)), () => [
              ay
            ])
          ])) : Z("", !0),
          Q(e.$slots, "list-footer", Ot(It(i.scope.listFooter)))
        ], 40, ty)), [
          [s]
        ]) : ($(), B("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, iy))
      ]),
      _: 3
    }, 8, ["name"]),
    Q(e.$slots, "footer", Ot(It(i.scope.footer)))
  ], 10, Kg);
}
const oy = /* @__PURE__ */ Tl(Gg, [["render", sy]]), E2 = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return aa.add(vd), (t, r) => ($(), pe(Y(oy), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, or = {
  // cursor on input
  openOptions(e) {
    e.$refs.input.focus(), e.showMenu = !0, e.mousedownState = !1;
  },
  blurInput(e) {
    e.mousedownState || (e.searchText = "", e.closeOptions()), e.$emit("blur");
  },
  closeOptions(e) {
    e.$refs.input.blur(), e.showMenu = !1;
  },
  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem(e) {
    const t = e.pointer - 1, r = e.$el.offsetHeight * t;
    t >= 0 && (e.pointer = t), e.$refs.menu.scrollTop = r;
  },
  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem(e) {
    const t = e.pointer + 1, r = e.$el.offsetHeight * t;
    t <= e.filteredOptions.length - 1 && (e.pointer = t);
    const n = e.$refs.menu.offsetHeight, a = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / n), i = Math.ceil(r / n);
    a !== i && (e.$refs.menu.scrollTop = (i - 1) * e.$refs.menu.offsetHeight);
  },
  // down enter key
  enterItem(e) {
    const t = e.filteredOptions[e.pointer], r = t.disabled;
    t && !r && e.selectItem(t);
  },
  // mouse enter event on item
  pointerSet(e, t) {
    e.pointer = t;
  },
  pointerAdjust(e) {
    e.pointer >= e.filteredOptions.length - 1 && (e.pointer = e.filteredOptions.length ? e.filteredOptions.length - 1 : 0);
  },
  mousedownItem(e) {
    e.mousedownState = !0;
  }
};
function ly(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const bd = {
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
      default: (e, t) => e.match(ly(t))
    }
  }
}, uy = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, cy = {
  name: "ModelSelect",
  mixins: [bd],
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
    value(e) {
      this.pointer = this.filteredOptions.findIndex((t) => t.value === this.optionValue(e));
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
        let e = this.placeholder;
        return this.selectedOption && (e = this.selectedOption.text), e;
      }
    },
    customAttrs() {
      try {
        if (Array.isArray(this.options))
          return this.options.map((e) => this.customAttr(e));
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
      return this.searchText ? this.options.filter((e) => {
        try {
          return this.filterPredicate(e.text, this.searchText);
        } catch {
          return !0;
        }
      }) : this.options;
    },
    selectedOption() {
      return this.options.find((e) => e.value === this.optionValue(this.modelValue));
    }
  },
  methods: {
    deleteTextOrItem() {
      !this.searchText && this.modelValue && (this.selectItem({}), this.openOptions());
    },
    openOptions() {
      or.openOptions(this);
    },
    blurInput() {
      or.blurInput(this);
    },
    closeOptions() {
      or.closeOptions(this);
    },
    prevItem() {
      or.prevItem(this);
    },
    nextItem() {
      or.nextItem(this);
    },
    enterItem() {
      or.enterItem(this);
    },
    pointerSet(e) {
      or.pointerSet(this, e);
    },
    pointerAdjust() {
      or.pointerAdjust(this);
    },
    mousedownItem() {
      or.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, fy = /* @__PURE__ */ U("i", { class: "dropdown icon" }, null, -1), dy = ["disabled", "tabindex", "id", "name", "value"], hy = ["data-vss-custom-attr"], py = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function my(e, t, r, n, a, i) {
  return $(), B("div", {
    class: te(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => i.openOptions && i.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => i.openOptions && i.openOptions(...s))
  }, [
    fy,
    U("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: a.searchText,
      onInput: t[0] || (t[0] = (s) => a.searchText = s.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = xr((...s) => i.openOptions && i.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = sn((...s) => i.closeOptions && i.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = sn(xr((...s) => i.enterItem && i.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => i.blurInput && i.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = sn((...s) => i.prevItem && i.prevItem(...s), ["up"])),
        t[5] || (t[5] = sn((...s) => i.nextItem && i.nextItem(...s), ["down"])),
        t[6] || (t[6] = sn(xr(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = sn((...s) => i.deleteTextOrItem && i.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, dy),
    U("div", {
      class: te(["text", i.textClass]),
      "data-vss-custom-attr": i.searchTextCustomAttr
    }, re(i.inputText), 11, hy),
    U("div", {
      class: te(["menu", i.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = xr(() => {
      }, ["prevent"])),
      style: Un(i.menuStyle),
      tabindex: "-1"
    }, [
      ($(!0), B(Ae, null, Bt(i.filteredOptions, (s, l) => ($(), B("div", {
        key: l,
        class: te(["item", { selected: s.selected || a.pointer === l, disabled: s.disabled }]),
        "data-vss-custom-attr": i.customAttrs[l] ? i.customAttrs[l] : "",
        onClick: xr((d) => i.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...d) => i.mousedownItem && i.mousedownItem(...d)),
        onMouseenter: (d) => i.pointerSet(l)
      }, [
        Q(e.$slots, "default", {
          option: s,
          idx: l
        }, () => [
          Te(re(s.text), 1)
        ])
      ], 42, py))), 128))
    ], 38)
  ], 34);
}
const ku = /* @__PURE__ */ uy(cy, [["render", my]]), Pu = {
  name: "ModelListSelect",
  mixins: [bd],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return cr(ku, {
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
      onSearchchange: (e) => this.$emit("searchchange", e)
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
      return this.list.map((e) => ({ value: e[this.optionValue], text: this.buildText(e), disabled: !!e[this.optionDisabled] }));
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
    buildText(e) {
      return e[this.optionValue] !== void 0 ? this.customText ? this.customText(e) : e[this.optionText] : "";
    },
    onInput(e) {
      if (e === void 0)
        return this.$emit("update:modelValue", "");
      if (Object.keys(e).length === 0 && e.constructor === Object)
        this.$emit("update:modelValue", e);
      else if (typeof e == "object") {
        const t = this.list.find((r) => r[this.optionValue] === e.value);
        this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", e);
    }
  },
  components: {
    ModelSelect: ku
  }
}, gy = {
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
    },
    filterPredicate: {
      type: Function,
      default: (e, t) => e.toLowerCase().includes(t.toLowerCase())
    },
    required: Boolean
  },
  emits: ["update:modelValue", "searchchange"],
  setup(e, { emit: t }) {
    const r = t, n = (a) => {
      let i = [];
      return a.split("_").join(" ").split(" ").map(function(s) {
        i.push(s[0].toUpperCase() + s.slice(1));
      }), i.join(" ");
    };
    return (a, i) => ($(), B("div", null, [
      !e.noLabel && (e.label || e.field) ? ($(), pe(Y(_l), {
        key: 0,
        for: e.id ?? e.field,
        value: n(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Z("", !0),
      e.noForm ? ($(), pe(Y(Pu), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list relative! mt-0! h-[42px] max-w-full! rounded! border-gray-300! shadow!",
        "onUpdate:modelValue": i[0] || (i[0] = (s) => r("update:modelValue", s)),
        onSearchchange: i[1] || (i[1] = (s) => r("searchchange", s)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : ($(), B(Ae, { key: 2 }, [
        Le(Y(Pu), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            i[2] || (i[2] = (s) => e.form[e.field] = s),
            i[3] || (i[3] = (s) => r("update:modelValue", s))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list relative! mt-0! h-[42px] max-w-full! rounded! border-gray-300! px-3! shadow!",
          onSearchchange: i[4] || (i[4] = (s) => r("searchchange", s)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        Le(Y(ia), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, yy = /* @__PURE__ */ bn(gy, [["__scopeId", "data-v-0a588376"]]);
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function vy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ns, _u;
function by() {
  if (_u) return ns;
  _u = 1;
  var e = function(b) {
    return t(b) && !r(b);
  };
  function t(v) {
    return !!v && typeof v == "object";
  }
  function r(v) {
    var b = Object.prototype.toString.call(v);
    return b === "[object RegExp]" || b === "[object Date]" || i(v);
  }
  var n = typeof Symbol == "function" && Symbol.for, a = n ? Symbol.for("react.element") : 60103;
  function i(v) {
    return v.$$typeof === a;
  }
  function s(v) {
    return Array.isArray(v) ? [] : {};
  }
  function l(v, b) {
    return b.clone !== !1 && b.isMergeableObject(v) ? y(s(v), v, b) : v;
  }
  function d(v, b, S) {
    return v.concat(b).map(function(O) {
      return l(O, S);
    });
  }
  function u(v, b) {
    if (!b.customMerge)
      return y;
    var S = b.customMerge(v);
    return typeof S == "function" ? S : y;
  }
  function o(v) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(v).filter(function(b) {
      return Object.propertyIsEnumerable.call(v, b);
    }) : [];
  }
  function f(v) {
    return Object.keys(v).concat(o(v));
  }
  function p(v, b) {
    try {
      return b in v;
    } catch {
      return !1;
    }
  }
  function h(v, b) {
    return p(v, b) && !(Object.hasOwnProperty.call(v, b) && Object.propertyIsEnumerable.call(v, b));
  }
  function m(v, b, S) {
    var O = {};
    return S.isMergeableObject(v) && f(v).forEach(function(E) {
      O[E] = l(v[E], S);
    }), f(b).forEach(function(E) {
      h(v, E) || (p(v, E) && S.isMergeableObject(b[E]) ? O[E] = u(E, S)(v[E], b[E], S) : O[E] = l(b[E], S));
    }), O;
  }
  function y(v, b, S) {
    S = S || {}, S.arrayMerge = S.arrayMerge || d, S.isMergeableObject = S.isMergeableObject || e, S.cloneUnlessOtherwiseSpecified = l;
    var O = Array.isArray(b), E = Array.isArray(v), C = O === E;
    return C ? O ? S.arrayMerge(v, b, S) : m(v, b, S) : l(b, S);
  }
  y.all = function(b, S) {
    if (!Array.isArray(b))
      throw new Error("first argument should be an array");
    return b.reduce(function(O, E) {
      return y(O, E, S);
    }, {});
  };
  var g = y;
  return ns = g, ns;
}
var wy = by();
const xy = /* @__PURE__ */ sa(wy);
var as, Tu;
function wn() {
  return Tu || (Tu = 1, as = TypeError), as;
}
const Sy = {}, Ay = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sy
}, Symbol.toStringTag, { value: "Module" })), pt = /* @__PURE__ */ vy(Ay);
var is, Ru;
function ui() {
  if (Ru) return is;
  Ru = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, a = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = a && i && typeof i.get == "function" ? i.get : null, l = a && Set.prototype.forEach, d = typeof WeakMap == "function" && WeakMap.prototype, u = d ? WeakMap.prototype.has : null, o = typeof WeakSet == "function" && WeakSet.prototype, f = o ? WeakSet.prototype.has : null, p = typeof WeakRef == "function" && WeakRef.prototype, h = p ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, v = String.prototype.match, b = String.prototype.slice, S = String.prototype.replace, O = String.prototype.toUpperCase, E = String.prototype.toLowerCase, C = RegExp.prototype.test, T = Array.prototype.concat, F = Array.prototype.join, N = Array.prototype.slice, R = Math.floor, z = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, w = Object.getOwnPropertySymbols, k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, P = typeof Symbol == "function" && typeof Symbol.iterator == "object", A = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === P || !0) ? Symbol.toStringTag : null, H = Object.prototype.propertyIsEnumerable, j = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(I) {
    return I.__proto__;
  } : null);
  function L(I, D) {
    if (I === 1 / 0 || I === -1 / 0 || I !== I || I && I > -1e3 && I < 1e3 || C.call(/e/, D))
      return D;
    var le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof I == "number") {
      var ce = I < 0 ? -R(-I) : R(I);
      if (ce !== I) {
        var ge = String(ce), ne = b.call(D, ge.length + 1);
        return S.call(ge, le, "$&_") + "." + S.call(S.call(ne, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(D, le, "$&_");
  }
  var V = pt, G = V.custom, Re = Ie(G) ? G : null, Ue = {
    __proto__: null,
    double: '"',
    single: "'"
  }, W = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  is = function I(D, le, ce, ge) {
    var ne = le || {};
    if (He(ne, "quoteStyle") && !He(Ue, ne.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (He(ne, "maxStringLength") && (typeof ne.maxStringLength == "number" ? ne.maxStringLength < 0 && ne.maxStringLength !== 1 / 0 : ne.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var at = He(ne, "customInspect") ? ne.customInspect : !0;
    if (typeof at != "boolean" && at !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (He(ne, "indent") && ne.indent !== null && ne.indent !== "	" && !(parseInt(ne.indent, 10) === ne.indent && ne.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (He(ne, "numericSeparator") && typeof ne.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var gt = ne.numericSeparator;
    if (typeof D > "u")
      return "undefined";
    if (D === null)
      return "null";
    if (typeof D == "boolean")
      return D ? "true" : "false";
    if (typeof D == "string")
      return zt(D, ne);
    if (typeof D == "number") {
      if (D === 0)
        return 1 / 0 / D > 0 ? "0" : "-0";
      var Be = String(D);
      return gt ? L(D, Be) : Be;
    }
    if (typeof D == "bigint") {
      var ft = String(D) + "n";
      return gt ? L(D, ft) : ft;
    }
    var er = typeof ne.depth > "u" ? 5 : ne.depth;
    if (typeof ce > "u" && (ce = 0), ce >= er && er > 0 && typeof D == "object")
      return Ye(D) ? "[Array]" : "[Object]";
    var Et = En(ne, ce);
    if (typeof ge > "u")
      ge = [];
    else if (lt(ge, D) >= 0)
      return "[Circular]";
    function ze(Vt, vr, On) {
      if (vr && (ge = N.call(ge), ge.push(vr)), On) {
        var et = {
          depth: ne.depth
        };
        return He(ne, "quoteStyle") && (et.quoteStyle = ne.quoteStyle), I(Vt, et, ce + 1, ge);
      }
      return I(Vt, ne, ce + 1, ge);
    }
    if (typeof D == "function" && !Se(D)) {
      var Tr = Ut(D), Ct = Rt(D, ze);
      return "[Function" + (Tr ? ": " + Tr : " (anonymous)") + "]" + (Ct.length > 0 ? " { " + F.call(Ct, ", ") + " }" : "");
    }
    if (Ie(D)) {
      var Jr = P ? S.call(String(D), /^(Symbol\(.*\))_[^)]*$/, "$1") : k.call(D);
      return typeof D == "object" && !P ? Tt(Jr) : Jr;
    }
    if (An(D)) {
      for (var tr = "<" + E.call(String(D.nodeName)), Rr = D.attributes || [], rr = 0; rr < Rr.length; rr++)
        tr += " " + Rr[rr].name + "=" + ke(ee(Rr[rr].value), "double", ne);
      return tr += ">", D.childNodes && D.childNodes.length && (tr += "..."), tr += "</" + E.call(String(D.nodeName)) + ">", tr;
    }
    if (Ye(D)) {
      if (D.length === 0)
        return "[]";
      var nr = Rt(D, ze);
      return Et && !Yr(nr) ? "[" + Zt(nr, Et) + "]" : "[ " + F.call(nr, ", ") + " ]";
    }
    if (oe(D)) {
      var qe = Rt(D, ze);
      return !("cause" in Error.prototype) && "cause" in D && !H.call(D, "cause") ? "{ [" + String(D) + "] " + F.call(T.call("[cause]: " + ze(D.cause), qe), ", ") + " }" : qe.length === 0 ? "[" + String(D) + "]" : "{ [" + String(D) + "] " + F.call(qe, ", ") + " }";
    }
    if (typeof D == "object" && at) {
      if (Re && typeof D[Re] == "function" && V)
        return V(D, { depth: er - ce });
      if (at !== "symbol" && typeof D.inspect == "function")
        return D.inspect();
    }
    if (Qe(D)) {
      var Xr = [];
      return n && n.call(D, function(Vt, vr) {
        Xr.push(ze(vr, D, !0) + " => " + ze(Vt, D));
      }), _r("Map", r.call(D), Xr, Et);
    }
    if (Ze(D)) {
      var Qr = [];
      return l && l.call(D, function(Vt) {
        Qr.push(ze(Vt, D));
      }), _r("Set", s.call(D), Qr, Et);
    }
    if (Pt(D))
      return nt("WeakMap");
    if (gr(D))
      return nt("WeakSet");
    if (_t(D))
      return nt("WeakRef");
    if (ue(D))
      return Tt(ze(Number(D)));
    if (Xe(D))
      return Tt(ze(z.call(D)));
    if (xe(D))
      return Tt(m.call(D));
    if (he(D))
      return Tt(ze(String(D)));
    if (typeof window < "u" && D === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && D === globalThis || typeof Nt < "u" && D === Nt)
      return "{ [object globalThis] }";
    if (!Pe(D) && !Se(D)) {
      var $r = Rt(D, ze), Zr = j ? j(D) === Object.prototype : D instanceof Object || D.constructor === Object, Ir = D instanceof Object ? "" : "null prototype", We = !Zr && A && Object(D) === D && A in D ? b.call(rt(D), 8, -1) : Ir ? "Object" : "", Cn = Zr || typeof D.constructor != "function" ? "" : D.constructor.name ? D.constructor.name + " " : "", Dr = Cn + (We || Ir ? "[" + F.call(T.call([], We || [], Ir || []), ": ") + "] " : "");
      return $r.length === 0 ? Dr + "{}" : Et ? Dr + "{" + Zt($r, Et) + "}" : Dr + "{ " + F.call($r, ", ") + " }";
    }
    return String(D);
  };
  function ke(I, D, le) {
    var ce = le.quoteStyle || D, ge = Ue[ce];
    return ge + I + ge;
  }
  function ee(I) {
    return S.call(String(I), /"/g, "&quot;");
  }
  function $e(I) {
    return !A || !(typeof I == "object" && (A in I || typeof I[A] < "u"));
  }
  function Ye(I) {
    return rt(I) === "[object Array]" && $e(I);
  }
  function Pe(I) {
    return rt(I) === "[object Date]" && $e(I);
  }
  function Se(I) {
    return rt(I) === "[object RegExp]" && $e(I);
  }
  function oe(I) {
    return rt(I) === "[object Error]" && $e(I);
  }
  function he(I) {
    return rt(I) === "[object String]" && $e(I);
  }
  function ue(I) {
    return rt(I) === "[object Number]" && $e(I);
  }
  function xe(I) {
    return rt(I) === "[object Boolean]" && $e(I);
  }
  function Ie(I) {
    if (P)
      return I && typeof I == "object" && I instanceof Symbol;
    if (typeof I == "symbol")
      return !0;
    if (!I || typeof I != "object" || !k)
      return !1;
    try {
      return k.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Xe(I) {
    if (!I || typeof I != "object" || !z)
      return !1;
    try {
      return z.call(I), !0;
    } catch {
    }
    return !1;
  }
  var De = Object.prototype.hasOwnProperty || function(I) {
    return I in this;
  };
  function He(I, D) {
    return De.call(I, D);
  }
  function rt(I) {
    return y.call(I);
  }
  function Ut(I) {
    if (I.name)
      return I.name;
    var D = v.call(g.call(I), /^function\s*([\w$]+)/);
    return D ? D[1] : null;
  }
  function lt(I, D) {
    if (I.indexOf)
      return I.indexOf(D);
    for (var le = 0, ce = I.length; le < ce; le++)
      if (I[le] === D)
        return le;
    return -1;
  }
  function Qe(I) {
    if (!r || !I || typeof I != "object")
      return !1;
    try {
      r.call(I);
      try {
        s.call(I);
      } catch {
        return !0;
      }
      return I instanceof Map;
    } catch {
    }
    return !1;
  }
  function Pt(I) {
    if (!u || !I || typeof I != "object")
      return !1;
    try {
      u.call(I, u);
      try {
        f.call(I, f);
      } catch {
        return !0;
      }
      return I instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function _t(I) {
    if (!h || !I || typeof I != "object")
      return !1;
    try {
      return h.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Ze(I) {
    if (!s || !I || typeof I != "object")
      return !1;
    try {
      s.call(I);
      try {
        r.call(I);
      } catch {
        return !0;
      }
      return I instanceof Set;
    } catch {
    }
    return !1;
  }
  function gr(I) {
    if (!f || !I || typeof I != "object")
      return !1;
    try {
      f.call(I, f);
      try {
        u.call(I, u);
      } catch {
        return !0;
      }
      return I instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function An(I) {
    return !I || typeof I != "object" ? !1 : typeof HTMLElement < "u" && I instanceof HTMLElement ? !0 : typeof I.nodeName == "string" && typeof I.getAttribute == "function";
  }
  function zt(I, D) {
    if (I.length > D.maxStringLength) {
      var le = I.length - D.maxStringLength, ce = "... " + le + " more character" + (le > 1 ? "s" : "");
      return zt(b.call(I, 0, D.maxStringLength), D) + ce;
    }
    var ge = W[D.quoteStyle || "single"];
    ge.lastIndex = 0;
    var ne = S.call(S.call(I, ge, "\\$1"), /[\x00-\x1f]/g, yr);
    return ke(ne, "single", D);
  }
  function yr(I) {
    var D = I.charCodeAt(0), le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[D];
    return le ? "\\" + le : "\\x" + (D < 16 ? "0" : "") + O.call(D.toString(16));
  }
  function Tt(I) {
    return "Object(" + I + ")";
  }
  function nt(I) {
    return I + " { ? }";
  }
  function _r(I, D, le, ce) {
    var ge = ce ? Zt(le, ce) : F.call(le, ", ");
    return I + " (" + D + ") {" + ge + "}";
  }
  function Yr(I) {
    for (var D = 0; D < I.length; D++)
      if (lt(I[D], `
`) >= 0)
        return !1;
    return !0;
  }
  function En(I, D) {
    var le;
    if (I.indent === "	")
      le = "	";
    else if (typeof I.indent == "number" && I.indent > 0)
      le = F.call(Array(I.indent + 1), " ");
    else
      return null;
    return {
      base: le,
      prev: F.call(Array(D + 1), le)
    };
  }
  function Zt(I, D) {
    if (I.length === 0)
      return "";
    var le = `
` + D.prev + D.base;
    return le + F.call(I, "," + le) + `
` + D.prev;
  }
  function Rt(I, D) {
    var le = Ye(I), ce = [];
    if (le) {
      ce.length = I.length;
      for (var ge = 0; ge < I.length; ge++)
        ce[ge] = He(I, ge) ? D(I[ge], I) : "";
    }
    var ne = typeof w == "function" ? w(I) : [], at;
    if (P) {
      at = {};
      for (var gt = 0; gt < ne.length; gt++)
        at["$" + ne[gt]] = ne[gt];
    }
    for (var Be in I)
      He(I, Be) && (le && String(Number(Be)) === Be && Be < I.length || P && at["$" + Be] instanceof Symbol || (C.call(/[^\w$]/, Be) ? ce.push(D(Be, I) + ": " + D(I[Be], I)) : ce.push(Be + ": " + D(I[Be], I))));
    if (typeof w == "function")
      for (var ft = 0; ft < ne.length; ft++)
        H.call(I, ne[ft]) && ce.push("[" + D(ne[ft]) + "]: " + D(I[ne[ft]], I));
    return ce;
  }
  return is;
}
var ss, $u;
function Ey() {
  if ($u) return ss;
  $u = 1;
  var e = /* @__PURE__ */ ui(), t = /* @__PURE__ */ wn(), r = function(l, d, u) {
    for (var o = l, f; (f = o.next) != null; o = f)
      if (f.key === d)
        return o.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, n = function(l, d) {
    if (l) {
      var u = r(l, d);
      return u && u.value;
    }
  }, a = function(l, d, u) {
    var o = r(l, d);
    o ? o.value = u : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: d,
      next: l.next,
      value: u
    };
  }, i = function(l, d) {
    return l ? !!r(l, d) : !1;
  }, s = function(l, d) {
    if (l)
      return r(l, d, !0);
  };
  return ss = function() {
    var d, u = {
      assert: function(o) {
        if (!u.has(o))
          throw new t("Side channel does not contain " + e(o));
      },
      delete: function(o) {
        var f = d && d.next, p = s(d, o);
        return p && f && f === p && (d = void 0), !!p;
      },
      get: function(o) {
        return n(d, o);
      },
      has: function(o) {
        return i(d, o);
      },
      set: function(o, f) {
        d || (d = {
          next: void 0
        }), a(
          /** @type {NonNullable<typeof $o>} */
          d,
          o,
          f
        );
      }
    };
    return u;
  }, ss;
}
var os, Iu;
function wd() {
  return Iu || (Iu = 1, os = Object), os;
}
var ls, Du;
function Cy() {
  return Du || (Du = 1, ls = Error), ls;
}
var us, Fu;
function Oy() {
  return Fu || (Fu = 1, us = EvalError), us;
}
var cs, Lu;
function ky() {
  return Lu || (Lu = 1, cs = RangeError), cs;
}
var fs, Nu;
function Py() {
  return Nu || (Nu = 1, fs = ReferenceError), fs;
}
var ds, Mu;
function _y() {
  return Mu || (Mu = 1, ds = SyntaxError), ds;
}
var hs, Bu;
function Ty() {
  return Bu || (Bu = 1, hs = URIError), hs;
}
var ps, qu;
function Ry() {
  return qu || (qu = 1, ps = Math.abs), ps;
}
var ms, ju;
function $y() {
  return ju || (ju = 1, ms = Math.floor), ms;
}
var gs, Uu;
function Iy() {
  return Uu || (Uu = 1, gs = Math.max), gs;
}
var ys, zu;
function Dy() {
  return zu || (zu = 1, ys = Math.min), ys;
}
var vs, Vu;
function Fy() {
  return Vu || (Vu = 1, vs = Math.pow), vs;
}
var bs, Hu;
function Ly() {
  return Hu || (Hu = 1, bs = Math.round), bs;
}
var ws, Wu;
function Ny() {
  return Wu || (Wu = 1, ws = Number.isNaN || function(t) {
    return t !== t;
  }), ws;
}
var xs, Gu;
function My() {
  if (Gu) return xs;
  Gu = 1;
  var e = /* @__PURE__ */ Ny();
  return xs = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, xs;
}
var Ss, Ku;
function By() {
  return Ku || (Ku = 1, Ss = Object.getOwnPropertyDescriptor), Ss;
}
var As, Yu;
function xd() {
  if (Yu) return As;
  Yu = 1;
  var e = /* @__PURE__ */ By();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return As = e, As;
}
var Es, Ju;
function qy() {
  if (Ju) return Es;
  Ju = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Es = e, Es;
}
var Cs, Xu;
function jy() {
  return Xu || (Xu = 1, Cs = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var a = 42;
    t[r] = a;
    for (var i in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (l.value !== a || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Cs;
}
var Os, Qu;
function Uy() {
  if (Qu) return Os;
  Qu = 1;
  var e = typeof Symbol < "u" && Symbol, t = jy();
  return Os = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Os;
}
var ks, Zu;
function Sd() {
  return Zu || (Zu = 1, ks = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ks;
}
var Ps, ec;
function Ad() {
  if (ec) return Ps;
  ec = 1;
  var e = /* @__PURE__ */ wd();
  return Ps = e.getPrototypeOf || null, Ps;
}
var _s, tc;
function zy() {
  if (tc) return _s;
  tc = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(d, u) {
    for (var o = [], f = 0; f < d.length; f += 1)
      o[f] = d[f];
    for (var p = 0; p < u.length; p += 1)
      o[p + d.length] = u[p];
    return o;
  }, i = function(d, u) {
    for (var o = [], f = u, p = 0; f < d.length; f += 1, p += 1)
      o[p] = d[f];
    return o;
  }, s = function(l, d) {
    for (var u = "", o = 0; o < l.length; o += 1)
      u += l[o], o + 1 < l.length && (u += d);
    return u;
  };
  return _s = function(d) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var o = i(arguments, 1), f, p = function() {
      if (this instanceof f) {
        var v = u.apply(
          this,
          a(o, arguments)
        );
        return Object(v) === v ? v : this;
      }
      return u.apply(
        d,
        a(o, arguments)
      );
    }, h = r(0, u.length - o.length), m = [], y = 0; y < h; y++)
      m[y] = "$" + y;
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(p), u.prototype) {
      var g = function() {
      };
      g.prototype = u.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, _s;
}
var Ts, rc;
function ci() {
  if (rc) return Ts;
  rc = 1;
  var e = zy();
  return Ts = Function.prototype.bind || e, Ts;
}
var Rs, nc;
function Rl() {
  return nc || (nc = 1, Rs = Function.prototype.call), Rs;
}
var $s, ac;
function Ed() {
  return ac || (ac = 1, $s = Function.prototype.apply), $s;
}
var Is, ic;
function Vy() {
  return ic || (ic = 1, Is = typeof Reflect < "u" && Reflect && Reflect.apply), Is;
}
var Ds, sc;
function Hy() {
  if (sc) return Ds;
  sc = 1;
  var e = ci(), t = Ed(), r = Rl(), n = Vy();
  return Ds = n || e.call(r, t), Ds;
}
var Fs, oc;
function Cd() {
  if (oc) return Fs;
  oc = 1;
  var e = ci(), t = /* @__PURE__ */ wn(), r = Rl(), n = Hy();
  return Fs = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, Fs;
}
var Ls, lc;
function Wy() {
  if (lc) return Ls;
  lc = 1;
  var e = Cd(), t = /* @__PURE__ */ xd(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, i = a.getPrototypeOf;
  return Ls = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return i(l == null ? l : a(l));
    }
  ) : !1, Ls;
}
var Ns, uc;
function Gy() {
  if (uc) return Ns;
  uc = 1;
  var e = Sd(), t = Ad(), r = /* @__PURE__ */ Wy();
  return Ns = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : r ? function(a) {
    return r(a);
  } : null, Ns;
}
var Ms, cc;
function Ky() {
  if (cc) return Ms;
  cc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = ci();
  return Ms = r.call(e, t), Ms;
}
var Bs, fc;
function $l() {
  if (fc) return Bs;
  fc = 1;
  var e, t = /* @__PURE__ */ wd(), r = /* @__PURE__ */ Cy(), n = /* @__PURE__ */ Oy(), a = /* @__PURE__ */ ky(), i = /* @__PURE__ */ Py(), s = /* @__PURE__ */ _y(), l = /* @__PURE__ */ wn(), d = /* @__PURE__ */ Ty(), u = /* @__PURE__ */ Ry(), o = /* @__PURE__ */ $y(), f = /* @__PURE__ */ Iy(), p = /* @__PURE__ */ Dy(), h = /* @__PURE__ */ Fy(), m = /* @__PURE__ */ Ly(), y = /* @__PURE__ */ My(), g = Function, v = function(Se) {
    try {
      return g('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, b = /* @__PURE__ */ xd(), S = /* @__PURE__ */ qy(), O = function() {
    throw new l();
  }, E = b ? function() {
    try {
      return arguments.callee, O;
    } catch {
      try {
        return b(arguments, "callee").get;
      } catch {
        return O;
      }
    }
  }() : O, C = Uy()(), T = Gy(), F = Ad(), N = Sd(), R = Ed(), z = Rl(), w = {}, k = typeof Uint8Array > "u" || !T ? e : T(Uint8Array), P = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": C && T ? T([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": w,
    "%AsyncGenerator%": w,
    "%AsyncGeneratorFunction%": w,
    "%AsyncIteratorPrototype%": w,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": w,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": C && T ? T(T([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !C || !T ? e : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": b,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": a,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !C || !T ? e : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": C && T ? T(""[Symbol.iterator]()) : e,
    "%Symbol%": C ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": E,
    "%TypedArray%": k,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": d,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": z,
    "%Function.prototype.apply%": R,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": F,
    "%Math.abs%": u,
    "%Math.floor%": o,
    "%Math.max%": f,
    "%Math.min%": p,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": N
  };
  if (T)
    try {
      null.error;
    } catch (Se) {
      var A = T(T(Se));
      P["%Error.prototype%"] = A;
    }
  var H = function Se(oe) {
    var he;
    if (oe === "%AsyncFunction%")
      he = v("async function () {}");
    else if (oe === "%GeneratorFunction%")
      he = v("function* () {}");
    else if (oe === "%AsyncGeneratorFunction%")
      he = v("async function* () {}");
    else if (oe === "%AsyncGenerator%") {
      var ue = Se("%AsyncGeneratorFunction%");
      ue && (he = ue.prototype);
    } else if (oe === "%AsyncIteratorPrototype%") {
      var xe = Se("%AsyncGenerator%");
      xe && T && (he = T(xe.prototype));
    }
    return P[oe] = he, he;
  }, j = {
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
  }, L = ci(), V = /* @__PURE__ */ Ky(), G = L.call(z, Array.prototype.concat), Re = L.call(R, Array.prototype.splice), Ue = L.call(z, String.prototype.replace), W = L.call(z, String.prototype.slice), ke = L.call(z, RegExp.prototype.exec), ee = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $e = /\\(\\)?/g, Ye = function(oe) {
    var he = W(oe, 0, 1), ue = W(oe, -1);
    if (he === "%" && ue !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ue === "%" && he !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var xe = [];
    return Ue(oe, ee, function(Ie, Xe, De, He) {
      xe[xe.length] = De ? Ue(He, $e, "$1") : Xe || Ie;
    }), xe;
  }, Pe = function(oe, he) {
    var ue = oe, xe;
    if (V(j, ue) && (xe = j[ue], ue = "%" + xe[0] + "%"), V(P, ue)) {
      var Ie = P[ue];
      if (Ie === w && (Ie = H(ue)), typeof Ie > "u" && !he)
        throw new l("intrinsic " + oe + " exists, but is not available. Please file an issue!");
      return {
        alias: xe,
        name: ue,
        value: Ie
      };
    }
    throw new s("intrinsic " + oe + " does not exist!");
  };
  return Bs = function(oe, he) {
    if (typeof oe != "string" || oe.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof he != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (ke(/^%?[^%]*%?$/, oe) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ue = Ye(oe), xe = ue.length > 0 ? ue[0] : "", Ie = Pe("%" + xe + "%", he), Xe = Ie.name, De = Ie.value, He = !1, rt = Ie.alias;
    rt && (xe = rt[0], Re(ue, G([0, 1], rt)));
    for (var Ut = 1, lt = !0; Ut < ue.length; Ut += 1) {
      var Qe = ue[Ut], Pt = W(Qe, 0, 1), _t = W(Qe, -1);
      if ((Pt === '"' || Pt === "'" || Pt === "`" || _t === '"' || _t === "'" || _t === "`") && Pt !== _t)
        throw new s("property names with quotes must have matching quotes");
      if ((Qe === "constructor" || !lt) && (He = !0), xe += "." + Qe, Xe = "%" + xe + "%", V(P, Xe))
        De = P[Xe];
      else if (De != null) {
        if (!(Qe in De)) {
          if (!he)
            throw new l("base intrinsic for " + oe + " exists, but the property is not available.");
          return;
        }
        if (b && Ut + 1 >= ue.length) {
          var Ze = b(De, Qe);
          lt = !!Ze, lt && "get" in Ze && !("originalValue" in Ze.get) ? De = Ze.get : De = De[Qe];
        } else
          lt = V(De, Qe), De = De[Qe];
        lt && !He && (P[Xe] = De);
      }
    }
    return De;
  }, Bs;
}
var qs, dc;
function Od() {
  if (dc) return qs;
  dc = 1;
  var e = /* @__PURE__ */ $l(), t = Cd(), r = t([e("%String.prototype.indexOf%")]);
  return qs = function(a, i) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(a, !!i)
    );
    return typeof s == "function" && r(a, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, qs;
}
var js, hc;
function kd() {
  if (hc) return js;
  hc = 1;
  var e = /* @__PURE__ */ $l(), t = /* @__PURE__ */ Od(), r = /* @__PURE__ */ ui(), n = /* @__PURE__ */ wn(), a = e("%Map%", !0), i = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), d = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return js = !!a && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, p = {
      assert: function(h) {
        if (!p.has(h))
          throw new n("Side channel does not contain " + r(h));
      },
      delete: function(h) {
        if (f) {
          var m = d(f, h);
          return u(f) === 0 && (f = void 0), m;
        }
        return !1;
      },
      get: function(h) {
        if (f)
          return i(f, h);
      },
      has: function(h) {
        return f ? l(f, h) : !1;
      },
      set: function(h, m) {
        f || (f = new a()), s(f, h, m);
      }
    };
    return p;
  }, js;
}
var Us, pc;
function Yy() {
  if (pc) return Us;
  pc = 1;
  var e = /* @__PURE__ */ $l(), t = /* @__PURE__ */ Od(), r = /* @__PURE__ */ ui(), n = kd(), a = /* @__PURE__ */ wn(), i = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), d = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Us = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, p, h = {
        assert: function(m) {
          if (!h.has(m))
            throw new a("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (i && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return u(f, m);
          } else if (n && p)
            return p.delete(m);
          return !1;
        },
        get: function(m) {
          return i && m && (typeof m == "object" || typeof m == "function") && f ? s(f, m) : p && p.get(m);
        },
        has: function(m) {
          return i && m && (typeof m == "object" || typeof m == "function") && f ? d(f, m) : !!p && p.has(m);
        },
        set: function(m, y) {
          i && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new i()), l(f, m, y)) : n && (p || (p = n()), p.set(m, y));
        }
      };
      return h;
    }
  ) : n, Us;
}
var zs, mc;
function Jy() {
  if (mc) return zs;
  mc = 1;
  var e = /* @__PURE__ */ wn(), t = /* @__PURE__ */ ui(), r = Ey(), n = kd(), a = Yy(), i = a || n || r;
  return zs = function() {
    var l, d = {
      assert: function(u) {
        if (!d.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!l && l.delete(u);
      },
      get: function(u) {
        return l && l.get(u);
      },
      has: function(u) {
        return !!l && l.has(u);
      },
      set: function(u, o) {
        l || (l = i()), l.set(u, o);
      }
    };
    return d;
  }, zs;
}
var Vs, gc;
function Il() {
  if (gc) return Vs;
  gc = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Vs = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, Vs;
}
var Hs, yc;
function Pd() {
  if (yc) return Hs;
  yc = 1;
  var e = /* @__PURE__ */ Il(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var g = [], v = 0; v < 256; ++v)
      g.push("%" + ((v < 16 ? "0" : "") + v.toString(16)).toUpperCase());
    return g;
  }(), a = function(v) {
    for (; v.length > 1; ) {
      var b = v.pop(), S = b.obj[b.prop];
      if (r(S)) {
        for (var O = [], E = 0; E < S.length; ++E)
          typeof S[E] < "u" && O.push(S[E]);
        b.obj[b.prop] = O;
      }
    }
  }, i = function(v, b) {
    for (var S = b && b.plainObjects ? { __proto__: null } : {}, O = 0; O < v.length; ++O)
      typeof v[O] < "u" && (S[O] = v[O]);
    return S;
  }, s = function g(v, b, S) {
    if (!b)
      return v;
    if (typeof b != "object" && typeof b != "function") {
      if (r(v))
        v.push(b);
      else if (v && typeof v == "object")
        (S && (S.plainObjects || S.allowPrototypes) || !t.call(Object.prototype, b)) && (v[b] = !0);
      else
        return [v, b];
      return v;
    }
    if (!v || typeof v != "object")
      return [v].concat(b);
    var O = v;
    return r(v) && !r(b) && (O = i(v, S)), r(v) && r(b) ? (b.forEach(function(E, C) {
      if (t.call(v, C)) {
        var T = v[C];
        T && typeof T == "object" && E && typeof E == "object" ? v[C] = g(T, E, S) : v.push(E);
      } else
        v[C] = E;
    }), v) : Object.keys(b).reduce(function(E, C) {
      var T = b[C];
      return t.call(E, C) ? E[C] = g(E[C], T, S) : E[C] = T, E;
    }, O);
  }, l = function(v, b) {
    return Object.keys(b).reduce(function(S, O) {
      return S[O] = b[O], S;
    }, v);
  }, d = function(g, v, b) {
    var S = g.replace(/\+/g, " ");
    if (b === "iso-8859-1")
      return S.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }, u = 1024, o = function(v, b, S, O, E) {
    if (v.length === 0)
      return v;
    var C = v;
    if (typeof v == "symbol" ? C = Symbol.prototype.toString.call(v) : typeof v != "string" && (C = String(v)), S === "iso-8859-1")
      return escape(C).replace(/%u[0-9a-f]{4}/gi, function(k) {
        return "%26%23" + parseInt(k.slice(2), 16) + "%3B";
      });
    for (var T = "", F = 0; F < C.length; F += u) {
      for (var N = C.length >= u ? C.slice(F, F + u) : C, R = [], z = 0; z < N.length; ++z) {
        var w = N.charCodeAt(z);
        if (w === 45 || w === 46 || w === 95 || w === 126 || w >= 48 && w <= 57 || w >= 65 && w <= 90 || w >= 97 && w <= 122 || E === e.RFC1738 && (w === 40 || w === 41)) {
          R[R.length] = N.charAt(z);
          continue;
        }
        if (w < 128) {
          R[R.length] = n[w];
          continue;
        }
        if (w < 2048) {
          R[R.length] = n[192 | w >> 6] + n[128 | w & 63];
          continue;
        }
        if (w < 55296 || w >= 57344) {
          R[R.length] = n[224 | w >> 12] + n[128 | w >> 6 & 63] + n[128 | w & 63];
          continue;
        }
        z += 1, w = 65536 + ((w & 1023) << 10 | N.charCodeAt(z) & 1023), R[R.length] = n[240 | w >> 18] + n[128 | w >> 12 & 63] + n[128 | w >> 6 & 63] + n[128 | w & 63];
      }
      T += R.join("");
    }
    return T;
  }, f = function(v) {
    for (var b = [{ obj: { o: v }, prop: "o" }], S = [], O = 0; O < b.length; ++O)
      for (var E = b[O], C = E.obj[E.prop], T = Object.keys(C), F = 0; F < T.length; ++F) {
        var N = T[F], R = C[N];
        typeof R == "object" && R !== null && S.indexOf(R) === -1 && (b.push({ obj: C, prop: N }), S.push(R));
      }
    return a(b), v;
  }, p = function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }, h = function(v) {
    return !v || typeof v != "object" ? !1 : !!(v.constructor && v.constructor.isBuffer && v.constructor.isBuffer(v));
  }, m = function(v, b) {
    return [].concat(v, b);
  }, y = function(v, b) {
    if (r(v)) {
      for (var S = [], O = 0; O < v.length; O += 1)
        S.push(b(v[O]));
      return S;
    }
    return b(v);
  };
  return Hs = {
    arrayToObject: i,
    assign: l,
    combine: m,
    compact: f,
    decode: d,
    encode: o,
    isBuffer: h,
    isRegExp: p,
    maybeMap: y,
    merge: s
  }, Hs;
}
var Ws, vc;
function Xy() {
  if (vc) return Ws;
  vc = 1;
  var e = Jy(), t = /* @__PURE__ */ Pd(), r = /* @__PURE__ */ Il(), n = Object.prototype.hasOwnProperty, a = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, v) {
      return g + "[" + v + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, i = Array.isArray, s = Array.prototype.push, l = function(y, g) {
    s.apply(y, i(g) ? g : [g]);
  }, d = Date.prototype.toISOString, u = r.default, o = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: u,
    formatter: r.formatters[u],
    // deprecated
    indices: !1,
    serializeDate: function(g) {
      return d.call(g);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(g) {
    return typeof g == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint";
  }, p = {}, h = function y(g, v, b, S, O, E, C, T, F, N, R, z, w, k, P, A, H, j) {
    for (var L = g, V = j, G = 0, Re = !1; (V = V.get(p)) !== void 0 && !Re; ) {
      var Ue = V.get(g);
      if (G += 1, typeof Ue < "u") {
        if (Ue === G)
          throw new RangeError("Cyclic object value");
        Re = !0;
      }
      typeof V.get(p) > "u" && (G = 0);
    }
    if (typeof N == "function" ? L = N(v, L) : L instanceof Date ? L = w(L) : b === "comma" && i(L) && (L = t.maybeMap(L, function(Xe) {
      return Xe instanceof Date ? w(Xe) : Xe;
    })), L === null) {
      if (E)
        return F && !A ? F(v, o.encoder, H, "key", k) : v;
      L = "";
    }
    if (f(L) || t.isBuffer(L)) {
      if (F) {
        var W = A ? v : F(v, o.encoder, H, "key", k);
        return [P(W) + "=" + P(F(L, o.encoder, H, "value", k))];
      }
      return [P(v) + "=" + P(String(L))];
    }
    var ke = [];
    if (typeof L > "u")
      return ke;
    var ee;
    if (b === "comma" && i(L))
      A && F && (L = t.maybeMap(L, F)), ee = [{ value: L.length > 0 ? L.join(",") || null : void 0 }];
    else if (i(N))
      ee = N;
    else {
      var $e = Object.keys(L);
      ee = R ? $e.sort(R) : $e;
    }
    var Ye = T ? String(v).replace(/\./g, "%2E") : String(v), Pe = S && i(L) && L.length === 1 ? Ye + "[]" : Ye;
    if (O && i(L) && L.length === 0)
      return Pe + "[]";
    for (var Se = 0; Se < ee.length; ++Se) {
      var oe = ee[Se], he = typeof oe == "object" && oe && typeof oe.value < "u" ? oe.value : L[oe];
      if (!(C && he === null)) {
        var ue = z && T ? String(oe).replace(/\./g, "%2E") : String(oe), xe = i(L) ? typeof b == "function" ? b(Pe, ue) : Pe : Pe + (z ? "." + ue : "[" + ue + "]");
        j.set(g, G);
        var Ie = e();
        Ie.set(p, j), l(ke, y(
          he,
          xe,
          b,
          S,
          O,
          E,
          C,
          T,
          b === "comma" && A && i(L) ? null : F,
          N,
          R,
          z,
          w,
          k,
          P,
          A,
          H,
          Ie
        ));
      }
    }
    return ke;
  }, m = function(g) {
    if (!g)
      return o;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var v = g.charset || o.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var b = r.default;
    if (typeof g.format < "u") {
      if (!n.call(r.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      b = g.format;
    }
    var S = r.formatters[b], O = o.filter;
    (typeof g.filter == "function" || i(g.filter)) && (O = g.filter);
    var E;
    if (g.arrayFormat in a ? E = g.arrayFormat : "indices" in g ? E = g.indices ? "indices" : "repeat" : E = o.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var C = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : o.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : o.addQueryPrefix,
      allowDots: C,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : o.allowEmptyArrays,
      arrayFormat: E,
      charset: v,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : o.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? o.delimiter : g.delimiter,
      encode: typeof g.encode == "boolean" ? g.encode : o.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : o.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : o.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : o.encodeValuesOnly,
      filter: O,
      format: b,
      formatter: S,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : o.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : o.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : o.strictNullHandling
    };
  };
  return Ws = function(y, g) {
    var v = y, b = m(g), S, O;
    typeof b.filter == "function" ? (O = b.filter, v = O("", v)) : i(b.filter) && (O = b.filter, S = O);
    var E = [];
    if (typeof v != "object" || v === null)
      return "";
    var C = a[b.arrayFormat], T = C === "comma" && b.commaRoundTrip;
    S || (S = Object.keys(v)), b.sort && S.sort(b.sort);
    for (var F = e(), N = 0; N < S.length; ++N) {
      var R = S[N], z = v[R];
      b.skipNulls && z === null || l(E, h(
        z,
        R,
        C,
        T,
        b.allowEmptyArrays,
        b.strictNullHandling,
        b.skipNulls,
        b.encodeDotInKeys,
        b.encode ? b.encoder : null,
        b.filter,
        b.sort,
        b.allowDots,
        b.serializeDate,
        b.format,
        b.formatter,
        b.encodeValuesOnly,
        b.charset,
        F
      ));
    }
    var w = E.join(b.delimiter), k = b.addQueryPrefix === !0 ? "?" : "";
    return b.charsetSentinel && (b.charset === "iso-8859-1" ? k += "utf8=%26%2310003%3B&" : k += "utf8=%E2%9C%93&"), w.length > 0 ? k + w : "";
  }, Ws;
}
var Gs, bc;
function Qy() {
  if (bc) return Gs;
  bc = 1;
  var e = /* @__PURE__ */ Pd(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, a = function(p) {
    return p.replace(/&#(\d+);/g, function(h, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, i = function(p, h, m) {
    if (p && typeof p == "string" && h.comma && p.indexOf(",") > -1)
      return p.split(",");
    if (h.throwOnLimitExceeded && m >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return p;
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", d = function(h, m) {
    var y = { __proto__: null }, g = m.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var v = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, b = g.split(
      m.delimiter,
      m.throwOnLimitExceeded ? v + 1 : v
    );
    if (m.throwOnLimitExceeded && b.length > v)
      throw new RangeError("Parameter limit exceeded. Only " + v + " parameter" + (v === 1 ? "" : "s") + " allowed.");
    var S = -1, O, E = m.charset;
    if (m.charsetSentinel)
      for (O = 0; O < b.length; ++O)
        b[O].indexOf("utf8=") === 0 && (b[O] === l ? E = "utf-8" : b[O] === s && (E = "iso-8859-1"), S = O, O = b.length);
    for (O = 0; O < b.length; ++O)
      if (O !== S) {
        var C = b[O], T = C.indexOf("]="), F = T === -1 ? C.indexOf("=") : T + 1, N, R;
        F === -1 ? (N = m.decoder(C, n.decoder, E, "key"), R = m.strictNullHandling ? null : "") : (N = m.decoder(C.slice(0, F), n.decoder, E, "key"), R = e.maybeMap(
          i(
            C.slice(F + 1),
            m,
            r(y[N]) ? y[N].length : 0
          ),
          function(w) {
            return m.decoder(w, n.decoder, E, "value");
          }
        )), R && m.interpretNumericEntities && E === "iso-8859-1" && (R = a(String(R))), C.indexOf("[]=") > -1 && (R = r(R) ? [R] : R);
        var z = t.call(y, N);
        z && m.duplicates === "combine" ? y[N] = e.combine(y[N], R) : (!z || m.duplicates === "last") && (y[N] = R);
      }
    return y;
  }, u = function(p, h, m, y) {
    var g = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var v = p.slice(0, -1).join("");
      g = Array.isArray(h) && h[v] ? h[v].length : 0;
    }
    for (var b = y ? h : i(h, m, g), S = p.length - 1; S >= 0; --S) {
      var O, E = p[S];
      if (E === "[]" && m.parseArrays)
        O = m.allowEmptyArrays && (b === "" || m.strictNullHandling && b === null) ? [] : e.combine([], b);
      else {
        O = m.plainObjects ? { __proto__: null } : {};
        var C = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E, T = m.decodeDotInKeys ? C.replace(/%2E/g, ".") : C, F = parseInt(T, 10);
        !m.parseArrays && T === "" ? O = { 0: b } : !isNaN(F) && E !== T && String(F) === T && F >= 0 && m.parseArrays && F <= m.arrayLimit ? (O = [], O[F] = b) : T !== "__proto__" && (O[T] = b);
      }
      b = O;
    }
    return b;
  }, o = function(h, m, y, g) {
    if (h) {
      var v = y.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, b = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, O = y.depth > 0 && b.exec(v), E = O ? v.slice(0, O.index) : v, C = [];
      if (E) {
        if (!y.plainObjects && t.call(Object.prototype, E) && !y.allowPrototypes)
          return;
        C.push(E);
      }
      for (var T = 0; y.depth > 0 && (O = S.exec(v)) !== null && T < y.depth; ) {
        if (T += 1, !y.plainObjects && t.call(Object.prototype, O[1].slice(1, -1)) && !y.allowPrototypes)
          return;
        C.push(O[1]);
      }
      if (O) {
        if (y.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + y.depth + " and strictDepth is true");
        C.push("[" + v.slice(O.index) + "]");
      }
      return u(C, m, y, g);
    }
  }, f = function(h) {
    if (!h)
      return n;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.decodeDotInKeys < "u" && typeof h.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.decoder !== null && typeof h.decoder < "u" && typeof h.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof h.throwOnLimitExceeded < "u" && typeof h.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var m = typeof h.charset > "u" ? n.charset : h.charset, y = typeof h.duplicates > "u" ? n.duplicates : h.duplicates;
    if (y !== "combine" && y !== "first" && y !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : n.allowDots : !!h.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : n.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : n.arrayLimit,
      charset: m,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : n.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : n.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : n.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : n.depth,
      duplicates: y,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : n.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : n.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : n.strictDepth,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return Gs = function(p, h) {
    var m = f(h);
    if (p === "" || p === null || typeof p > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var y = typeof p == "string" ? d(p, m) : p, g = m.plainObjects ? { __proto__: null } : {}, v = Object.keys(y), b = 0; b < v.length; ++b) {
      var S = v[b], O = o(S, y[S], m, typeof p == "string");
      g = e.merge(g, O, m);
    }
    return m.allowSparse === !0 ? g : e.compact(g);
  }, Gs;
}
var Ks, wc;
function Zy() {
  if (wc) return Ks;
  wc = 1;
  var e = /* @__PURE__ */ Xy(), t = /* @__PURE__ */ Qy(), r = /* @__PURE__ */ Il();
  return Ks = {
    formats: r,
    parse: t,
    stringify: e
  }, Ks;
}
var xc = /* @__PURE__ */ Zy();
function _d(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ev } = Object.prototype, { getPrototypeOf: Dl } = Object, fi = /* @__PURE__ */ ((e) => (t) => {
  const r = ev.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qt = (e) => (e = e.toLowerCase(), (t) => fi(t) === e), di = (e) => (t) => typeof t === e, { isArray: xn } = Array, Zn = di("undefined");
function tv(e) {
  return e !== null && !Zn(e) && e.constructor !== null && !Zn(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Td = qt("ArrayBuffer");
function rv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Td(e.buffer), t;
}
const nv = di("string"), St = di("function"), Rd = di("number"), hi = (e) => e !== null && typeof e == "object", av = (e) => e === !0 || e === !1, ja = (e) => {
  if (fi(e) !== "object")
    return !1;
  const t = Dl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, iv = qt("Date"), sv = qt("File"), ov = qt("Blob"), lv = qt("FileList"), uv = (e) => hi(e) && St(e.pipe), cv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || St(e.append) && ((t = fi(e)) === "formdata" || // detect form-data instance
  t === "object" && St(e.toString) && e.toString() === "[object FormData]"));
}, fv = qt("URLSearchParams"), [dv, hv, pv, mv] = ["ReadableStream", "Request", "Response", "Headers"].map(qt), gv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function oa(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), xn(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let l;
    for (n = 0; n < s; n++)
      l = i[n], t.call(null, e[l], l, e);
  }
}
function $d(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const jr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Id = (e) => !Zn(e) && e !== jr;
function Qo() {
  const { caseless: e } = Id(this) && this || {}, t = {}, r = (n, a) => {
    const i = e && $d(t, a) || a;
    ja(t[i]) && ja(n) ? t[i] = Qo(t[i], n) : ja(n) ? t[i] = Qo({}, n) : xn(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && oa(arguments[n], r);
  return t;
}
const yv = (e, t, r, { allOwnKeys: n } = {}) => (oa(t, (a, i) => {
  r && St(a) ? e[i] = _d(a, r) : e[i] = a;
}, { allOwnKeys: n }), e), vv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bv = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, wv = (e, t, r, n) => {
  let a, i, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      s = a[i], (!n || n(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = r !== !1 && Dl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, xv = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Sv = (e) => {
  if (!e) return null;
  if (xn(e)) return e;
  let t = e.length;
  if (!Rd(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Av = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Dl(Uint8Array)), Ev = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, Cv = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ov = qt("HTMLFormElement"), kv = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), Sc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Pv = qt("RegExp"), Dd = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  oa(r, (a, i) => {
    let s;
    (s = t(a, i, e)) !== !1 && (n[i] = s || a);
  }), Object.defineProperties(e, n);
}, _v = (e) => {
  Dd(e, (t, r) => {
    if (St(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (St(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Tv = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((i) => {
      r[i] = !0;
    });
  };
  return xn(e) ? n(e) : n(String(e).split(t)), r;
}, Rv = () => {
}, $v = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Iv(e) {
  return !!(e && St(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Dv = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (hi(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const i = xn(n) ? [] : {};
        return oa(n, (s, l) => {
          const d = r(s, a + 1);
          !Zn(d) && (i[l] = d);
        }), t[a] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Fv = qt("AsyncFunction"), Lv = (e) => e && (hi(e) || St(e)) && St(e.then) && St(e.catch), Fd = ((e, t) => e ? setImmediate : t ? ((r, n) => (jr.addEventListener("message", ({ source: a, data: i }) => {
  a === jr && i === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), jr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  St(jr.postMessage)
), Nv = typeof queueMicrotask < "u" ? queueMicrotask.bind(jr) : typeof process < "u" && process.nextTick || Fd, M = {
  isArray: xn,
  isArrayBuffer: Td,
  isBuffer: tv,
  isFormData: cv,
  isArrayBufferView: rv,
  isString: nv,
  isNumber: Rd,
  isBoolean: av,
  isObject: hi,
  isPlainObject: ja,
  isReadableStream: dv,
  isRequest: hv,
  isResponse: pv,
  isHeaders: mv,
  isUndefined: Zn,
  isDate: iv,
  isFile: sv,
  isBlob: ov,
  isRegExp: Pv,
  isFunction: St,
  isStream: uv,
  isURLSearchParams: fv,
  isTypedArray: Av,
  isFileList: lv,
  forEach: oa,
  merge: Qo,
  extend: yv,
  trim: gv,
  stripBOM: vv,
  inherits: bv,
  toFlatObject: wv,
  kindOf: fi,
  kindOfTest: qt,
  endsWith: xv,
  toArray: Sv,
  forEachEntry: Ev,
  matchAll: Cv,
  isHTMLForm: Ov,
  hasOwnProperty: Sc,
  hasOwnProp: Sc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dd,
  freezeMethods: _v,
  toObjectSet: Tv,
  toCamelCase: kv,
  noop: Rv,
  toFiniteNumber: $v,
  findKey: $d,
  global: jr,
  isContextDefined: Id,
  isSpecCompliantForm: Iv,
  toJSONObject: Dv,
  isAsyncFn: Fv,
  isThenable: Lv,
  setImmediate: Fd,
  asap: Nv
};
function se(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
M.inherits(se, Error, {
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
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ld = se.prototype, Nd = {};
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
].forEach((e) => {
  Nd[e] = { value: e };
});
Object.defineProperties(se, Nd);
Object.defineProperty(Ld, "isAxiosError", { value: !0 });
se.from = (e, t, r, n, a, i) => {
  const s = Object.create(Ld);
  return M.toFlatObject(e, s, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), se.call(s, e.message, t, r, n, a), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Mv = null;
function Zo(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Md(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ac(e, t, r) {
  return e ? e.concat(t).map(function(a, i) {
    return a = Md(a), !r && i ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Bv(e) {
  return M.isArray(e) && !e.some(Zo);
}
const qv = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function pi(e, t, r) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, g) {
    return !M.isUndefined(g[y]);
  });
  const n = r.metaTokens, a = r.visitor || o, i = r.dots, s = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(a))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (M.isDate(m))
      return m.toISOString();
    if (!d && M.isBlob(m))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(m) || M.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function o(m, y, g) {
    let v = m;
    if (m && !g && typeof m == "object") {
      if (M.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (M.isArray(m) && Bv(m) || (M.isFileList(m) || M.endsWith(y, "[]")) && (v = M.toArray(m)))
        return y = Md(y), v.forEach(function(S, O) {
          !(M.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ac([y], O, i) : s === null ? y : y + "[]",
            u(S)
          );
        }), !1;
    }
    return Zo(m) ? !0 : (t.append(Ac(g, y, i), u(m)), !1);
  }
  const f = [], p = Object.assign(qv, {
    defaultVisitor: o,
    convertValue: u,
    isVisitable: Zo
  });
  function h(m, y) {
    if (!M.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(m), M.forEach(m, function(v, b) {
        (!(M.isUndefined(v) || v === null) && a.call(
          t,
          v,
          M.isString(b) ? b.trim() : b,
          y,
          p
        )) === !0 && h(v, y ? y.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!M.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Ec(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Fl(e, t) {
  this._pairs = [], e && pi(e, this, t);
}
const Bd = Fl.prototype;
Bd.append = function(t, r) {
  this._pairs.push([t, r]);
};
Bd.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ec);
  } : Ec;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function jv(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qd(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || jv;
  M.isFunction(r) && (r = {
    serialize: r
  });
  const a = r && r.serialize;
  let i;
  if (a ? i = a(t, r) : i = M.isURLSearchParams(t) ? t.toString() : new Fl(t, r).toString(n), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Cc {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
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
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    M.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const jd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Uv = typeof URLSearchParams < "u" ? URLSearchParams : Fl, zv = typeof FormData < "u" ? FormData : null, Vv = typeof Blob < "u" ? Blob : null, Hv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Uv,
    FormData: zv,
    Blob: Vv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ll = typeof window < "u" && typeof document < "u", el = typeof navigator == "object" && navigator || void 0, Wv = Ll && (!el || ["ReactNative", "NativeScript", "NS"].indexOf(el.product) < 0), Gv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kv = Ll && window.location.href || "http://localhost", Yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ll,
  hasStandardBrowserEnv: Wv,
  hasStandardBrowserWebWorkerEnv: Gv,
  navigator: el,
  origin: Kv
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...Yv,
  ...Hv
};
function Jv(e, t) {
  return pi(e, new ot.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, i) {
      return ot.isNode && M.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Xv(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Qv(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let i;
  for (n = 0; n < a; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ud(e) {
  function t(r, n, a, i) {
    let s = r[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), d = i >= r.length;
    return s = !s && M.isArray(a) ? a.length : s, d ? (M.hasOwnProp(a, s) ? a[s] = [a[s], n] : a[s] = n, !l) : ((!a[s] || !M.isObject(a[s])) && (a[s] = []), t(r, n, a[s], i) && M.isArray(a[s]) && (a[s] = Qv(a[s])), !l);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return M.forEachEntry(e, (n, a) => {
      t(Xv(n), a, r, 0);
    }), r;
  }
  return null;
}
function Zv(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const la = {
  transitional: jd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, i = M.isObject(t);
    if (i && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
      return a ? JSON.stringify(Ud(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t) || M.isReadableStream(t))
      return t;
    if (M.isArrayBufferView(t))
      return t.buffer;
    if (M.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Jv(t, this.formSerializer).toString();
      if ((l = M.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return pi(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || a ? (r.setContentType("application/json", !1), Zv(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || la.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (M.isResponse(t) || M.isReadableStream(t))
      return t;
    if (t && M.isString(t) && (n && !this.responseType || a)) {
      const s = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? se.from(l, se.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
    FormData: ot.classes.FormData,
    Blob: ot.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  la.headers[e] = {};
});
const eb = M.toObjectSet([
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
]), tb = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), r = s.substring(0, a).trim().toLowerCase(), n = s.substring(a + 1).trim(), !(!r || t[r] && eb[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Oc = Symbol("internals");
function In(e) {
  return e && String(e).trim().toLowerCase();
}
function Ua(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Ua) : String(e);
}
function rb(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const nb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ys(e, t, r, n, a) {
  if (M.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!M.isString(t)) {
    if (M.isString(n))
      return t.indexOf(n) !== -1;
    if (M.isRegExp(n))
      return n.test(t);
  }
}
function ab(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ib(e, t) {
  const r = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, i, s) {
        return this[n].call(this, t, a, i, s);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function i(l, d, u) {
      const o = In(d);
      if (!o)
        throw new Error("header name must be a non-empty string");
      const f = M.findKey(a, o);
      (!f || a[f] === void 0 || u === !0 || u === void 0 && a[f] !== !1) && (a[f || d] = Ua(l));
    }
    const s = (l, d) => M.forEach(l, (u, o) => i(u, o, d));
    if (M.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (M.isString(t) && (t = t.trim()) && !nb(t))
      s(tb(t), r);
    else if (M.isHeaders(t))
      for (const [l, d] of t.entries())
        i(d, l, n);
    else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = In(t), t) {
      const n = M.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return rb(a);
        if (M.isFunction(r))
          return r.call(this, a, n);
        if (M.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = In(t), t) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ys(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function i(s) {
      if (s = In(s), s) {
        const l = M.findKey(n, s);
        l && (!r || Ys(n, n[l], l, r)) && (delete n[l], a = !0);
      }
    }
    return M.isArray(t) ? t.forEach(i) : i(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Ys(this, this[i], i, t, !0)) && (delete this[i], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return M.forEach(this, (a, i) => {
      const s = M.findKey(n, i);
      if (s) {
        r[s] = Ua(a), delete r[i];
        return;
      }
      const l = t ? ab(i) : String(i).trim();
      l !== i && delete r[i], r[l] = Ua(a), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && M.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[Oc] = this[Oc] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function i(s) {
      const l = In(s);
      n[l] || (ib(a, s), n[l] = !0);
    }
    return M.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
M.freezeMethods(mt);
function Js(e, t) {
  const r = this || la, n = t || r, a = mt.from(n.headers);
  let i = n.data;
  return M.forEach(e, function(l) {
    i = l.call(r, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function zd(e) {
  return !!(e && e.__CANCEL__);
}
function Sn(e, t, r) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, t, r), this.name = "CanceledError";
}
M.inherits(Sn, se, {
  __CANCEL__: !0
});
function Vd(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new se(
    "Request failed with status code " + r.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function sb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ob(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), o = n[i];
    s || (s = u), r[a] = d, n[a] = u;
    let f = i, p = 0;
    for (; f !== a; )
      p += r[f++], f = f % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), u - s < t)
      return;
    const h = o && u - o;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function lb(e, t) {
  let r = 0, n = 1e3 / t, a, i;
  const s = (u, o = Date.now()) => {
    r = o, a = null, i && (clearTimeout(i), i = null), e.apply(null, u);
  };
  return [(...u) => {
    const o = Date.now(), f = o - r;
    f >= n ? s(u, o) : (a = u, i || (i = setTimeout(() => {
      i = null, s(a);
    }, n - f)));
  }, () => a && s(a)];
}
const Za = (e, t, r = 3) => {
  let n = 0;
  const a = ob(50, 250);
  return lb((i) => {
    const s = i.loaded, l = i.lengthComputable ? i.total : void 0, d = s - n, u = a(d), o = s <= l;
    n = s;
    const f = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && l && o ? (l - s) / u : void 0,
      event: i,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, kc = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Pc = (e) => (...t) => M.asap(() => e(...t)), ub = ot.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, ot.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(ot.origin),
  ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent)
) : () => !0, cb = ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      M.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), M.isString(n) && s.push("path=" + n), M.isString(a) && s.push("domain=" + a), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function fb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function db(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Hd(e, t, r) {
  let n = !fb(t);
  return e && n || r == !1 ? db(e, t) : t;
}
const _c = (e) => e instanceof mt ? { ...e } : e;
function Gr(e, t) {
  t = t || {};
  const r = {};
  function n(u, o, f, p) {
    return M.isPlainObject(u) && M.isPlainObject(o) ? M.merge.call({ caseless: p }, u, o) : M.isPlainObject(o) ? M.merge({}, o) : M.isArray(o) ? o.slice() : o;
  }
  function a(u, o, f, p) {
    if (M.isUndefined(o)) {
      if (!M.isUndefined(u))
        return n(void 0, u, f, p);
    } else return n(u, o, f, p);
  }
  function i(u, o) {
    if (!M.isUndefined(o))
      return n(void 0, o);
  }
  function s(u, o) {
    if (M.isUndefined(o)) {
      if (!M.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, o);
  }
  function l(u, o, f) {
    if (f in t)
      return n(u, o);
    if (f in e)
      return n(void 0, u);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, o, f) => a(_c(u), _c(o), f, !0)
  };
  return M.forEach(Object.keys(Object.assign({}, e, t)), function(o) {
    const f = d[o] || a, p = f(e[o], t[o], o);
    M.isUndefined(p) && f !== l || (r[o] = p);
  }), r;
}
const Wd = (e) => {
  const t = Gr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: i, headers: s, auth: l } = t;
  t.headers = s = mt.from(s), t.url = qd(Hd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let d;
  if (M.isFormData(r)) {
    if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((d = s.getContentType()) !== !1) {
      const [u, ...o] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...o].join("; "));
    }
  }
  if (ot.hasStandardBrowserEnv && (n && M.isFunction(n) && (n = n(t)), n || n !== !1 && ub(t.url))) {
    const u = a && i && cb.read(i);
    u && s.set(a, u);
  }
  return t;
}, hb = typeof XMLHttpRequest < "u", pb = hb && function(e) {
  return new Promise(function(r, n) {
    const a = Wd(e);
    let i = a.data;
    const s = mt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: u } = a, o, f, p, h, m;
    function y() {
      h && h(), m && m(), a.cancelToken && a.cancelToken.unsubscribe(o), a.signal && a.signal.removeEventListener("abort", o);
    }
    let g = new XMLHttpRequest();
    g.open(a.method.toUpperCase(), a.url, !0), g.timeout = a.timeout;
    function v() {
      if (!g)
        return;
      const S = mt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: S,
        config: e,
        request: g
      };
      Vd(function(T) {
        r(T), y();
      }, function(T) {
        n(T), y();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = v : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, g.onabort = function() {
      g && (n(new se("Request aborted", se.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new se("Network Error", se.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let O = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || jd;
      a.timeoutErrorMessage && (O = a.timeoutErrorMessage), n(new se(
        O,
        E.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in g && M.forEach(s.toJSON(), function(O, E) {
      g.setRequestHeader(E, O);
    }), M.isUndefined(a.withCredentials) || (g.withCredentials = !!a.withCredentials), l && l !== "json" && (g.responseType = a.responseType), u && ([p, m] = Za(u, !0), g.addEventListener("progress", p)), d && g.upload && ([f, h] = Za(d), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", h)), (a.cancelToken || a.signal) && (o = (S) => {
      g && (n(!S || S.type ? new Sn(null, e, g) : S), g.abort(), g = null);
    }, a.cancelToken && a.cancelToken.subscribe(o), a.signal && (a.signal.aborted ? o() : a.signal.addEventListener("abort", o)));
    const b = sb(a.url);
    if (b && ot.protocols.indexOf(b) === -1) {
      n(new se("Unsupported protocol " + b + ":", se.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, mb = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const i = function(u) {
      if (!a) {
        a = !0, l();
        const o = u instanceof Error ? u : this.reason;
        n.abort(o instanceof se ? o : new Sn(o instanceof Error ? o.message : o));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new se(`timeout ${t} of ms exceeded`, se.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: d } = n;
    return d.unsubscribe = () => M.asap(l), d;
  }
}, gb = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, yb = async function* (e, t) {
  for await (const r of vb(e))
    yield* gb(r, t);
}, vb = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Tc = (e, t, r, n) => {
  const a = yb(e, t);
  let i = 0, s, l = (d) => {
    s || (s = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: o } = await a.next();
        if (u) {
          l(), d.close();
          return;
        }
        let f = o.byteLength;
        if (r) {
          let p = i += f;
          r(p);
        }
        d.enqueue(new Uint8Array(o));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(d) {
      return l(d), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, mi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Gd = mi && typeof ReadableStream == "function", bb = mi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Kd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, wb = Gd && Kd(() => {
  let e = !1;
  const t = new Request(ot.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Rc = 64 * 1024, tl = Gd && Kd(() => M.isReadableStream(new Response("").body)), ei = {
  stream: tl && ((e) => e.body)
};
mi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ei[t] && (ei[t] = M.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new se(`Response type '${t}' is not supported`, se.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xb = async (e) => {
  if (e == null)
    return 0;
  if (M.isBlob(e))
    return e.size;
  if (M.isSpecCompliantForm(e))
    return (await new Request(ot.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (M.isArrayBufferView(e) || M.isArrayBuffer(e))
    return e.byteLength;
  if (M.isURLSearchParams(e) && (e = e + ""), M.isString(e))
    return (await bb(e)).byteLength;
}, Sb = async (e, t) => {
  const r = M.toFiniteNumber(e.getContentLength());
  return r ?? xb(t);
}, Ab = mi && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: l,
    onUploadProgress: d,
    responseType: u,
    headers: o,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = Wd(e);
  u = u ? (u + "").toLowerCase() : "text";
  let h = mb([a, i && i.toAbortSignal()], s), m;
  const y = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let g;
  try {
    if (d && wb && r !== "get" && r !== "head" && (g = await Sb(o, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (M.isFormData(n) && (C = E.headers.get("content-type")) && o.setContentType(C), E.body) {
        const [T, F] = kc(
          g,
          Za(Pc(d))
        );
        n = Tc(E.body, Rc, T, F);
      }
    }
    M.isString(f) || (f = f ? "include" : "omit");
    const v = "credentials" in Request.prototype;
    m = new Request(t, {
      ...p,
      signal: h,
      method: r.toUpperCase(),
      headers: o.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: v ? f : void 0
    });
    let b = await fetch(m);
    const S = tl && (u === "stream" || u === "response");
    if (tl && (l || S && y)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((N) => {
        E[N] = b[N];
      });
      const C = M.toFiniteNumber(b.headers.get("content-length")), [T, F] = l && kc(
        C,
        Za(Pc(l), !0)
      ) || [];
      b = new Response(
        Tc(b.body, Rc, T, () => {
          F && F(), y && y();
        }),
        E
      );
    }
    u = u || "text";
    let O = await ei[M.findKey(ei, u) || "text"](b, e);
    return !S && y && y(), await new Promise((E, C) => {
      Vd(E, C, {
        data: O,
        headers: mt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (v) {
    throw y && y(), v && v.name === "TypeError" && /fetch/i.test(v.message) ? Object.assign(
      new se("Network Error", se.ERR_NETWORK, e, m),
      {
        cause: v.cause || v
      }
    ) : se.from(v, v && v.code, e, m);
  }
}), rl = {
  http: Mv,
  xhr: pb,
  fetch: Ab
};
M.forEach(rl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $c = (e) => `- ${e}`, Eb = (e) => M.isFunction(e) || e === null || e === !1, Yd = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let s;
      if (n = r, !Eb(r) && (n = rl[(s = String(r)).toLowerCase()], n === void 0))
        throw new se(`Unknown adapter '${s}'`);
      if (n)
        break;
      a[s || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(a).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map($c).join(`
`) : " " + $c(i[0]) : "as no adapter specified";
      throw new se(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: rl
};
function Xs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Sn(null, e);
}
function Ic(e) {
  return Xs(e), e.headers = mt.from(e.headers), e.data = Js.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Yd.getAdapter(e.adapter || la.adapter)(e).then(function(n) {
    return Xs(e), n.data = Js.call(
      e,
      e.transformResponse,
      n
    ), n.headers = mt.from(n.headers), n;
  }, function(n) {
    return zd(n) || (Xs(e), n && n.response && (n.response.data = Js.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = mt.from(n.response.headers))), Promise.reject(n);
  });
}
const Jd = "1.8.3", gi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gi[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Dc = {};
gi.transitional = function(t, r, n) {
  function a(i, s) {
    return "[Axios v" + Jd + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return (i, s, l) => {
    if (t === !1)
      throw new se(
        a(s, " has been removed" + (r ? " in " + r : "")),
        se.ERR_DEPRECATED
      );
    return r && !Dc[s] && (Dc[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, l) : !0;
  };
};
gi.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Cb(e, t, r) {
  if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const i = n[a], s = t[i];
    if (s) {
      const l = e[i], d = l === void 0 || s(l, i, e);
      if (d !== !0)
        throw new se("option " + i + " must be " + d, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new se("Unknown option " + i, se.ERR_BAD_OPTION);
  }
}
const za = {
  assertOptions: Cb,
  validators: gi
}, Kt = za.validators;
let Vr = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Cc(),
      response: new Cc()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const i = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Gr(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: i } = r;
    n !== void 0 && za.assertOptions(n, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), a != null && (M.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : za.assertOptions(a, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), za.assertOptions(r, {
      baseUrl: Kt.spelling("baseURL"),
      withXsrfToken: Kt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = i && M.merge(
      i.common,
      i[r.method]
    );
    i && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = mt.concat(s, i);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (d = d && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let o, f = 0, p;
    if (!d) {
      const m = [Ic.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, u), p = m.length, o = Promise.resolve(r); f < p; )
        o = o.then(m[f++], m[f++]);
      return o;
    }
    p = l.length;
    let h = r;
    for (f = 0; f < p; ) {
      const m = l[f++], y = l[f++];
      try {
        h = m(h);
      } catch (g) {
        y.call(this, g);
        break;
      }
    }
    try {
      o = Ic.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, p = u.length; f < p; )
      o = o.then(u[f++], u[f++]);
    return o;
  }
  getUri(t) {
    t = Gr(this.defaults, t);
    const r = Hd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return qd(r, t.params, t.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function(t) {
  Vr.prototype[t] = function(r, n) {
    return this.request(Gr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, l) {
      return this.request(Gr(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Vr.prototype[t] = r(), Vr.prototype[t + "Form"] = r(!0);
});
let Ob = class Xd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const s = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(a);
      return s.cancel = function() {
        n.unsubscribe(i);
      }, s;
    }, t(function(i, s, l) {
      n.reason || (n.reason = new Sn(i, s, l), r(n.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Xd(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function kb(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Pb(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const nl = {
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
Object.entries(nl).forEach(([e, t]) => {
  nl[t] = e;
});
function Qd(e) {
  const t = new Vr(e), r = _d(Vr.prototype.request, t);
  return M.extend(r, Vr.prototype, t, { allOwnKeys: !0 }), M.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Qd(Gr(e, a));
  }, r;
}
const Me = Qd(la);
Me.Axios = Vr;
Me.CanceledError = Sn;
Me.CancelToken = Ob;
Me.isCancel = zd;
Me.VERSION = Jd;
Me.toFormData = pi;
Me.AxiosError = se;
Me.Cancel = Me.CanceledError;
Me.all = function(t) {
  return Promise.all(t);
};
Me.spread = kb;
Me.isAxiosError = Pb;
Me.mergeConfig = Gr;
Me.AxiosHeaders = mt;
Me.formToJSON = (e) => Ud(M.isHTMLForm(e) ? new FormData(e) : e);
Me.getAdapter = Yd.getAdapter;
Me.HttpStatusCode = nl;
Me.default = Me;
const {
  Axios: k2,
  AxiosError: P2,
  CanceledError: _2,
  isCancel: T2,
  CancelToken: R2,
  VERSION: $2,
  all: I2,
  Cancel: D2,
  isAxiosError: F2,
  spread: L2,
  toFormData: N2,
  AxiosHeaders: M2,
  HttpStatusCode: B2,
  formToJSON: q2,
  getAdapter: j2,
  mergeConfig: U2
} = Me;
function al(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function jt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Fc = (e) => jt("before", { cancelable: !0, detail: { visit: e } }), _b = (e) => jt("error", { detail: { errors: e } }), Tb = (e) => jt("exception", { cancelable: !0, detail: { exception: e } }), Rb = (e) => jt("finish", { detail: { visit: e } }), $b = (e) => jt("invalid", { cancelable: !0, detail: { response: e } }), Wn = (e) => jt("navigate", { detail: { page: e } }), Ib = (e) => jt("progress", { detail: { progress: e } }), Db = (e) => jt("start", { detail: { visit: e } }), Fb = (e) => jt("success", { detail: { page: e } }), Lb = (e, t) => jt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), Nb = (e) => jt("prefetching", { detail: { visit: e } }), ct = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    let r = this.get(e);
    r === null ? this.set(e, t) : this.set(e, { ...r, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    let r = this.get(e);
    r !== null && (delete r[t], this.set(e, r));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
ct.locationVisitKey = "inertiaLocationVisit";
var Mb = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Zd(), r = await eh(), n = await Vb(r);
  if (!n) throw new Error("Unable to encrypt history");
  return await qb(t, n, e);
}, gn = { key: "historyKey", iv: "historyIv" }, Bb = async (e) => {
  let t = Zd(), r = await eh();
  if (!r) throw new Error("Unable to decrypt history");
  return await jb(t, r, e);
}, qb = async (e, t, r) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), a = JSON.stringify(r), i = new Uint8Array(a.length * 3), s = n.encodeInto(a, i);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, i.subarray(0, s.written));
}, jb = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, r);
  return JSON.parse(new TextDecoder().decode(n));
}, Zd = () => {
  let e = ct.get(gn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return ct.set(gn.iv, Array.from(t)), t;
}, Ub = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), zb = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  ct.set(gn.key, Array.from(new Uint8Array(t)));
}, Vb = async (e) => {
  if (e) return e;
  let t = await Ub();
  return t ? (await zb(t), t) : null;
}, eh = async () => {
  let e = ct.get(gn.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, Dt = class {
  static save() {
    ve.saveScrollPositions(Array.from(this.regions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  static restore(t) {
    this.restoreDocument(), this.regions().forEach((r, n) => {
      let a = t[n];
      a && (typeof r.scrollTo == "function" ? r.scrollTo(a.left, a.top) : (r.scrollTop = a.top, r.scrollLeft = a.left));
    });
  }
  static restoreDocument() {
    let t = ve.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(t.left, t.top);
  }
  static onScroll(t) {
    let r = t.target;
    typeof r.hasAttribute == "function" && r.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    ve.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function il(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => il(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => il(t));
}
var Lc = (e) => e instanceof FormData;
function th(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && nh(t, rh(r, n), e[n]);
  return t;
}
function rh(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function nh(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => nh(e, rh(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  th(r, e, t);
}
function Sr(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var Hb = (e, t, r, n, a) => {
  let i = typeof e == "string" ? Sr(e) : e;
  if ((il(t) || n) && !Lc(t) && (t = th(t)), Lc(t)) return [i, t];
  let [s, l] = Nl(r, i, t, a);
  return [Sr(s), l];
};
function Nl(e, t, r, n = "brackets") {
  let a = /^https?:\/\//.test(t.toString()), i = a || t.toString().startsWith("/"), s = !i && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(r).length, d = t.toString().includes("#"), u = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (u.search = xc.stringify(xy(xc.parse(u.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[a ? `${u.protocol}//${u.host}` : "", i ? u.pathname : "", s ? u.pathname.substring(1) : "", l ? u.search : "", d ? u.hash : ""].join(""), r];
}
function ti(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Nc = (e, t) => {
  e.hash && !t.hash && ti(e).href === t.href && (t.hash = e.hash);
}, sl = (e, t) => ti(e).href === ti(t).href, Wb = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: r }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = r, this;
  }
  set(e, { replace: t = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let a = this.componentId;
    return e.clearHistory && ve.clear(), this.resolve(e.component).then((i) => {
      if (a !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let s = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || sl(Sr(e.url), s), new Promise((l) => {
        t ? ve.replaceState(e, () => l(null)) : ve.pushState(e, () => l(null));
      }).then(() => {
        let l = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, l && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: i, page: e, preserveState: n }).then(() => {
          r || Dt.reset(), Ur.fireInternalEvent("loadDeferredProps"), t || Wn(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, ve.setCurrent(e), this.swap({ component: r, page: e, preserveState: t })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({ component: e, page: t, preserveState: r }) {
    return this.swapComponent({ component: e, page: t, preserveState: r });
  }
  resolve(e) {
    return Promise.resolve(this.resolveComponent(e));
  }
  isTheSame(e) {
    return this.page.component === e.component;
  }
  on(e, t) {
    return this.listeners.push({ event: e, callback: t }), () => {
      this.listeners = this.listeners.filter((r) => r.event !== e && r.callback !== t);
    };
  }
  fireEventsFor(e) {
    this.listeners.filter((t) => t.event === e).forEach((t) => t.callback());
  }
}, ie = new Wb(), ah = class {
  constructor() {
    this.items = [], this.processingPromise = null;
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    let e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
}, Mn = typeof window > "u", Dn = new ah(), Mc = !Mn && /CriOS/.test(window.navigator.userAgent), Gb = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({ ...ie.get(), rememberedState: { ...((r = ie.get()) == null ? void 0 : r.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, r;
    if (!Mn) return (r = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : r[e];
  }
  pushState(e, t = null) {
    if (!Mn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Dn.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doPushState({ page: r }, e.url), t && t();
        };
        Mc ? setTimeout(n) : n();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? Mb(e).then(t) : t(e));
  }
  processQueue() {
    return Dn.process();
  }
  decrypt(e = null) {
    var r;
    if (Mn) return Promise.resolve(e ?? ie.get());
    let t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? Bb(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Dn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e }, this.current.url);
    }));
  }
  saveDocumentScrollPosition(e) {
    Dn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, documentScrollPosition: e }, this.current.url);
    }));
  }
  getScrollRegions() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(e, t = null) {
    if (ie.merge(e), !Mn) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Dn.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doReplaceState({ page: r }, e.url), t && t();
        };
        Mc ? setTimeout(n) : n();
      }));
    }
  }
  doReplaceState(e, t) {
    var r, n;
    window.history.replaceState({ ...e, scrollRegions: e.scrollRegions ?? ((r = window.history.state) == null ? void 0 : r.scrollRegions), documentScrollPosition: e.documentScrollPosition ?? ((n = window.history.state) == null ? void 0 : n.documentScrollPosition) }, "", t);
  }
  doPushState(e, t) {
    window.history.pushState(e, "", t);
  }
  getState(e, t) {
    var r;
    return ((r = this.current) == null ? void 0 : r[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    ct.remove(gn.key), ct.remove(gn.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var ve = new Gb(), Kb = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", al(Dt.onWindowScroll.bind(Dt), 100), !0)), typeof document < "u" && document.addEventListener("scroll", al(Dt.onScroll.bind(Dt), 100), !0);
  }
  onGlobalEvent(t, r) {
    let n = (a) => {
      let i = r(a);
      a.cancelable && !a.defaultPrevented && i === !1 && a.preventDefault();
    };
    return this.registerListener(`inertia:${t}`, n);
  }
  on(t, r) {
    return this.internalListeners.push({ event: t, listener: r }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== r);
    };
  }
  onMissingHistoryItem() {
    ie.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(t) {
    this.internalListeners.filter((r) => r.event === t).forEach((r) => r.listener());
  }
  registerListener(t, r) {
    return document.addEventListener(t, r), () => document.removeEventListener(t, r);
  }
  handlePopstateEvent(t) {
    let r = t.state || null;
    if (r === null) {
      let n = Sr(ie.get().url);
      n.hash = window.location.hash, ve.replaceState({ ...ie.get(), url: n.href }), Dt.reset();
      return;
    }
    if (!ve.isValidState(r)) return this.onMissingHistoryItem();
    ve.decrypt(r.page).then((n) => {
      ie.setQuietly(n, { preserveState: !1 }).then(() => {
        Dt.restore(ve.getScrollRegions()), Wn(ie.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Ur = new Kb(), Yb = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, Qs = new Yb(), Jb = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Qs.isReload() && ve.deleteState(ve.rememberedState);
  }
  static handleBackForward() {
    if (!Qs.isBackForward() || !ve.hasAnyState()) return !1;
    let e = ve.getScrollRegions();
    return ve.decrypt().then((t) => {
      ie.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        Dt.restore(e), Wn(ie.get());
      });
    }).catch(() => {
      Ur.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!ct.exists(ct.locationVisitKey)) return !1;
    let e = ct.get(ct.locationVisitKey) || {};
    return ct.remove(ct.locationVisitKey), typeof window < "u" && ie.setUrlHash(window.location.hash), ve.decrypt().then(() => {
      let t = ve.getState(ve.rememberedState, {}), r = ve.getScrollRegions();
      ie.remember(t), ie.set(ie.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && Dt.restore(r), Wn(ie.get());
      });
    }).catch(() => {
      Ur.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && ie.setUrlHash(window.location.hash), ie.set(ie.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Qs.isReload() && Dt.restore(ve.getScrollRegions()), Wn(ie.get());
    });
  }
}, Xb = class {
  constructor(t, r, n) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = n.keepAlive ?? !1, this.cb = r, this.interval = t, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(t) {
    this.throttle = this.keepAlive ? !1 : t, this.throttle && (this.cbCount = 0);
  }
}, Qb = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    let n = new Xb(e, t, r);
    return this.polls.push(n), { stop: () => n.stop(), start: () => n.start() };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((e) => e.isInBackground(document.hidden));
    }, !1);
  }
}, Zb = new Qb(), ih = (e, t, r) => {
  if (e === t) return !0;
  for (let n in e) if (!r.includes(n) && e[n] !== t[n] && !e0(e[n], t[n])) return !1;
  return !0;
}, e0 = (e, t) => {
  switch (typeof e) {
    case "object":
      return ih(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, t0 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Bc = (e) => {
  if (typeof e == "number") return e;
  for (let [t, r] of Object.entries(t0)) if (e.endsWith(t)) return parseFloat(e) * r;
  return parseInt(e);
}, r0 = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let n = this.findCached(e);
    if (!e.fresh && n && n.staleTimestamp > Date.now()) return Promise.resolve();
    let [a, i] = this.extractStaleValues(r), s = new Promise((l, d) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), d();
      }, onError: (u) => {
        this.remove(e), e.onError(u), d();
      }, onPrefetching(u) {
        e.onPrefetching(u);
      }, onPrefetched(u, o) {
        e.onPrefetched(u, o);
      }, onPrefetchResponse(u) {
        l(u);
      } });
    }).then((l) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + a, response: s, singleUse: r === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, i), this.inFlightRequests = this.inFlightRequests.filter((d) => !this.paramsAreEqual(d.params, e)), l.handlePrefetch(), l));
    return this.inFlightRequests.push({ params: { ...e }, response: s, staleTimestamp: null, inFlight: !0 }), s;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  extractStaleValues(e) {
    let [t, r] = this.cacheForToStaleAndExpires(e);
    return [Bc(t), Bc(r)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e)) return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    let t = this.removalTimers.find((r) => this.paramsAreEqual(r.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((r) => r !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      let r = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({ params: e, timer: r });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    let r = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = r, e.response.then((n) => {
      if (this.currentUseId === r) return n.mergeParams({ ...t, onPrefetched: () => {
      } }), this.removeSingleUseItems(t), n.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((t) => this.paramsAreEqual(t.params, e) ? !t.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((t) => this.paramsAreEqual(t.params, e)) || null;
  }
  paramsAreEqual(e, t) {
    return ih(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, Mr = new r0(), n0 = class sh {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let r = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...r, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new sh(t);
  }
  data() {
    return this.params.method === "get" ? {} : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(t) {
    this.params.onCancelToken({ cancel: t });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: t = !0, interrupted: r = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = t, this.params.interrupted = r;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(t) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(t);
  }
  all() {
    return this.params;
  }
  headers() {
    let t = { ...this.params.headers };
    this.isPartial() && (t["X-Inertia-Partial-Component"] = ie.get().component);
    let r = this.params.only.concat(this.params.reset);
    return r.length > 0 && (t["X-Inertia-Partial-Data"] = r.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: r }) => {
      this.params[t](...r);
    });
  }
  merge(t) {
    this.params = { ...this.params, ...t };
  }
  wrapCallback(t, r) {
    return (...n) => {
      this.recordCallback(r, n), t[r](...n);
    };
  }
  recordCallback(t, r) {
    this.callbacks.push({ name: t, args: r });
  }
  resolvePreserveOption(t, r) {
    return typeof t == "function" ? t(r) : t === "errors" ? Object.keys(r.props.errors || {}).length > 0 : t;
  }
}, a0 = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow) throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, i0 = new ah(), qc = class oh {
  constructor(t, r, n) {
    this.requestParams = t, this.response = r, this.originatingPage = n;
  }
  static create(t, r, n) {
    return new oh(t, r, n);
  }
  async handlePrefetch() {
    sl(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return i0.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), Lb(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await ve.processQueue(), ve.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = ie.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let r = this.getScopedErrors(t);
      return _b(r), this.requestParams.all().onError(r);
    }
    Fb(ie.get()), await this.requestParams.all().onSuccess(ie.get()), ve.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let r = Sr(this.getHeader("x-inertia-location"));
      return Nc(this.requestParams.all().url, r), this.locationVisit(r);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if ($b(t)) return a0.show(t.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(t) {
    return this.response.status === t;
  }
  getHeader(t) {
    return this.response.headers[t];
  }
  hasHeader(t) {
    return this.getHeader(t) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(t) {
    try {
      if (ct.set(ct.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      sl(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = ve.preserveUrl ? ie.get().url : this.pageUrl(t), ie.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(t) {
    if (typeof t != "string") return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  shouldSetPage(t) {
    if (!this.requestParams.all().async || this.originatingPage.component !== t.component) return !0;
    if (this.originatingPage.component !== ie.get().component) return !1;
    let r = Sr(this.originatingPage.url), n = Sr(ie.get().url);
    return r.origin === n.origin && r.pathname === n.pathname;
  }
  pageUrl(t) {
    let r = Sr(t.url);
    return Nc(this.requestParams.all().url, r), r.pathname + r.search + r.hash;
  }
  mergeProps(t) {
    this.requestParams.isPartial() && t.component === ie.get().component && ((t.mergeProps || []).forEach((r) => {
      let n = t.props[r];
      Array.isArray(n) ? t.props[r] = [...ie.get().props[r] || [], ...n] : typeof n == "object" && (t.props[r] = { ...ie.get().props[r] || [], ...n });
    }), t.props = { ...ie.get().props, ...t.props });
  }
  async setRememberedState(t) {
    let r = await ve.getState(ve.rememberedState, {});
    this.requestParams.all().preserveState && r && t.component === ie.get().component && (t.rememberedState = r);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, jc = class lh {
  constructor(t, r) {
    this.page = r, this.requestHasFinished = !1, this.requestParams = n0.create(t), this.cancelToken = new AbortController();
  }
  static create(t, r) {
    return new lh(t, r);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), Db(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), Nb(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return Me({ method: this.requestParams.all().method, url: ti(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((r) => (this.response = qc.create(this.requestParams, r, this.page), this.response.handle())).catch((r) => r != null && r.response ? (this.response = qc.create(this.requestParams, r.response, this.page), this.response.handle()) : Promise.reject(r)).catch((r) => {
      if (!Me.isCancel(r) && Tb(r)) return Promise.reject(r);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Rb(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: r }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, Ib(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return ie.get().version && (t["X-Inertia-Version"] = ie.get().version), t;
  }
}, Uc = class {
  constructor({ maxConcurrent: t, interruptible: r }) {
    this.requests = [], this.maxConcurrent = t, this.interruptible = r;
  }
  send(t) {
    this.requests.push(t), t.send().then(() => {
      this.requests = this.requests.filter((r) => r !== t);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 } = {}, n) {
    var a;
    this.shouldCancel(n) && ((a = this.requests.shift()) == null || a.cancel({ interrupted: r, cancelled: t }));
  }
  shouldCancel(t) {
    return t ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, s0 = class {
  constructor() {
    this.syncRequestStream = new Uc({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Uc({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    ie.init({ initialPage: e, resolveComponent: t, swapComponent: r }), Jb.handle(), Ur.init(), Ur.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Ur.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...e.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e, t = "default") {
    ve.remember(e, t);
  }
  restore(e = "default") {
    return ve.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Ur.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, r = {}) {
    return Zb.add(e, () => this.reload(t), { autoStart: r.autoStart ?? !0, keepAlive: r.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let r = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), n = this.getVisitEvents(t);
    if (n.onBefore(r) === !1 || !Fc(r)) return;
    let a = r.async ? this.asyncRequestStream : this.syncRequestStream;
    a.interruptInFlight(), !ie.isCleared() && !r.preserveUrl && Dt.save();
    let i = { ...r, ...n }, s = Mr.get(i);
    s ? (zc(s.inFlight), Mr.use(s, i)) : (zc(!0), a.send(jc.create(i, ie.get())));
  }
  getCached(e, t = {}) {
    return Mr.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Mr.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Mr.removeAll();
  }
  getPrefetching(e, t = {}) {
    return Mr.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: r = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), a = n.url.origin + n.url.pathname + n.url.search, i = window.location.origin + window.location.pathname + window.location.search;
    if (a === i) return;
    let s = this.getVisitEvents(t);
    if (s.onBefore(n) === !1 || !Fc(n)) return;
    v0(), this.asyncRequestStream.interruptInFlight();
    let l = { ...n, ...s };
    new Promise((d) => {
      let u = () => {
        ie.get() ? d() : setTimeout(u, 50);
      };
      u();
    }).then(() => {
      Mr.add(l, (d) => {
        this.asyncRequestStream.send(jc.create(d, ie.get()));
      }, { cacheFor: r });
    });
  }
  clearHistory() {
    ve.clear();
  }
  decryptHistory() {
    return ve.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let r = ie.get(), n = typeof e.props == "function" ? e.props(r.props) : e.props ?? r.props;
    ie.set({ ...r, ...e, props: n }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, r = {}) {
    let n = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [a, i] = Hb(e, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...n, ...r, url: a, data: i };
  }
  getVisitEvents(e) {
    return { onCancelToken: e.onCancelToken || (() => {
    }), onBefore: e.onBefore || (() => {
    }), onStart: e.onStart || (() => {
    }), onProgress: e.onProgress || (() => {
    }), onFinish: e.onFinish || (() => {
    }), onCancel: e.onCancel || (() => {
    }), onSuccess: e.onSuccess || (() => {
    }), onError: e.onError || (() => {
    }), onPrefetched: e.onPrefetched || (() => {
    }), onPrefetching: e.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var t;
    let e = (t = ie.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([r, n]) => {
      this.reload({ only: n });
    });
  }
}, o0 = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script ")) return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((a) => {
    n.setAttribute(a, r.getAttribute(a) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: al(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var i, s;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (i = r == null ? void 0 : r.parentNode) == null || i.removeChild(r);
      return;
    }
    let a = t.splice(n, 1)[0];
    a && !r.isEqualNode(a) && ((s = r == null ? void 0 : r.parentNode) == null || s.replaceChild(a, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function l0(e, t, r) {
  let n = {}, a = 0;
  function i() {
    let o = a += 1;
    return n[o] = [], o.toString();
  }
  function s(o) {
    o === null || Object.keys(n).indexOf(o) === -1 || (delete n[o], u());
  }
  function l(o, f = []) {
    o !== null && Object.keys(n).indexOf(o) > -1 && (n[o] = f), u();
  }
  function d() {
    let o = t(""), f = { ...o ? { title: `<title inertia="">${o}</title>` } : {} }, p = Object.values(n).reduce((h, m) => h.concat(m), []).reduce((h, m) => {
      if (m.indexOf("<") === -1) return h;
      if (m.indexOf("<title ") === 0) {
        let g = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return h.title = g ? `${g[1]}${t(g[2])}${g[3]}` : m, h;
      }
      let y = m.match(/ inertia="[^"]+"/);
      return y ? h[y[0]] = m : h[Object.keys(h).length] = m, h;
    }, f);
    return Object.values(p);
  }
  function u() {
    e ? r(d()) : o0.update(d());
  }
  return u(), { forceUpdate: u, createProvider: function() {
    let o = i();
    return { update: (f) => l(o, f), disconnect: () => s(o) };
  } };
}
var je = "nprogress", Je = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Pr = null, u0 = (e) => {
  Object.assign(Je, e), Je.includeCSS && m0(Je.color);
}, yi = (e) => {
  let t = uh();
  e = ph(e, Je.minimum, 1), Pr = e === 1 ? null : e;
  let r = f0(!t), n = r.querySelector(Je.barSelector), a = Je.speed, i = Je.easing;
  r.offsetWidth, p0((s) => {
    let l = Je.positionUsing === "translate3d" ? { transition: `all ${a}ms ${i}`, transform: `translate3d(${Va(e)}%,0,0)` } : Je.positionUsing === "translate" ? { transition: `all ${a}ms ${i}`, transform: `translate(${Va(e)}%,0)` } : { marginLeft: `${Va(e)}%` };
    for (let d in l) n.style[d] = l[d];
    if (e !== 1) return setTimeout(s, a);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${a}ms linear`, r.style.opacity = "0", setTimeout(() => {
        hh(), s();
      }, a);
    }, a);
  });
}, uh = () => typeof Pr == "number", ch = () => {
  Pr || yi(0);
  let e = function() {
    setTimeout(function() {
      Pr && (fh(), e());
    }, Je.trickleSpeed);
  };
  Je.trickle && e();
}, c0 = (e) => {
  !e && !Pr || (fh(0.3 + 0.5 * Math.random()), yi(1));
}, fh = (e) => {
  let t = Pr;
  if (t === null) return ch();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let n in r) if (t >= r[n][0] && t < r[n][1]) return parseFloat(n);
    return 0;
  })(), yi(ph(t + e, 0, 0.994));
}, f0 = (e) => {
  var i;
  if (d0()) return document.getElementById(je);
  document.documentElement.classList.add(`${je}-busy`);
  let t = document.createElement("div");
  t.id = je, t.innerHTML = Je.template;
  let r = t.querySelector(Je.barSelector), n = e ? "-100" : Va(Pr || 0), a = dh();
  return r.style.transition = "all 0 linear", r.style.transform = `translate3d(${n}%,0,0)`, Je.showSpinner || ((i = t.querySelector(Je.spinnerSelector)) == null || i.remove()), a !== document.body && a.classList.add(`${je}-custom-parent`), a.appendChild(t), t;
}, dh = () => h0(Je.parent) ? Je.parent : document.querySelector(Je.parent), hh = () => {
  var e;
  document.documentElement.classList.remove(`${je}-busy`), dh().classList.remove(`${je}-custom-parent`), (e = document.getElementById(je)) == null || e.remove();
}, d0 = () => document.getElementById(je) !== null, h0 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function ph(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var Va = (e) => (-1 + e) * 100, p0 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), m0 = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${je} {
      pointer-events: none;
    }

    #${je} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${je} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${je} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${je} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${je}-spinner 400ms linear infinite;
    }

    .${je}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${je}-custom-parent #${je} .spinner,
    .${je}-custom-parent #${je} .bar {
      position: absolute;
    }

    @keyframes ${je}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, hn = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${je} { display: none; }`, e;
})(), g0 = () => {
  if (hn && document.head.contains(hn)) return document.head.removeChild(hn);
}, y0 = () => {
  hn && !document.head.contains(hn) && document.head.appendChild(hn);
}, mh = { configure: u0, isStarted: uh, done: c0, set: yi, remove: hh, start: ch, status: Pr, show: g0, hide: y0 }, Ha = 0, zc = (e = !1) => {
  Ha = Math.max(0, Ha - 1), (e || Ha === 0) && mh.show();
}, v0 = () => {
  Ha++, mh.hide();
};
function Wa(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Xt = new s0();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var Bn = { exports: {} };
Bn.exports;
var Vc;
function b0() {
  return Vc || (Vc = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", a = 9007199254740991, i = "[object Arguments]", s = "[object Array]", l = "[object Boolean]", d = "[object Date]", u = "[object Error]", o = "[object Function]", f = "[object GeneratorFunction]", p = "[object Map]", h = "[object Number]", m = "[object Object]", y = "[object Promise]", g = "[object RegExp]", v = "[object Set]", b = "[object String]", S = "[object Symbol]", O = "[object WeakMap]", E = "[object ArrayBuffer]", C = "[object DataView]", T = "[object Float32Array]", F = "[object Float64Array]", N = "[object Int8Array]", R = "[object Int16Array]", z = "[object Int32Array]", w = "[object Uint8Array]", k = "[object Uint8ClampedArray]", P = "[object Uint16Array]", A = "[object Uint32Array]", H = /[\\^$.*+?()[\]{}|]/g, j = /\w*$/, L = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, G = {};
    G[i] = G[s] = G[E] = G[C] = G[l] = G[d] = G[T] = G[F] = G[N] = G[R] = G[z] = G[p] = G[h] = G[m] = G[g] = G[v] = G[b] = G[S] = G[w] = G[k] = G[P] = G[A] = !0, G[u] = G[o] = G[O] = !1;
    var Re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, Ue = typeof self == "object" && self && self.Object === Object && self, W = Re || Ue || Function("return this")(), ke = t && !t.nodeType && t, ee = ke && !0 && e && !e.nodeType && e, $e = ee && ee.exports === ke;
    function Ye(c, x) {
      return c.set(x[0], x[1]), c;
    }
    function Pe(c, x) {
      return c.add(x), c;
    }
    function Se(c, x) {
      for (var _ = -1, q = c ? c.length : 0; ++_ < q && x(c[_], _, c) !== !1; )
        ;
      return c;
    }
    function oe(c, x) {
      for (var _ = -1, q = x.length, ae = c.length; ++_ < q; )
        c[ae + _] = x[_];
      return c;
    }
    function he(c, x, _, q) {
      for (var ae = -1, X = c ? c.length : 0; ++ae < X; )
        _ = x(_, c[ae], ae, c);
      return _;
    }
    function ue(c, x) {
      for (var _ = -1, q = Array(c); ++_ < c; )
        q[_] = x(_);
      return q;
    }
    function xe(c, x) {
      return c == null ? void 0 : c[x];
    }
    function Ie(c) {
      var x = !1;
      if (c != null && typeof c.toString != "function")
        try {
          x = !!(c + "");
        } catch {
        }
      return x;
    }
    function Xe(c) {
      var x = -1, _ = Array(c.size);
      return c.forEach(function(q, ae) {
        _[++x] = [ae, q];
      }), _;
    }
    function De(c, x) {
      return function(_) {
        return c(x(_));
      };
    }
    function He(c) {
      var x = -1, _ = Array(c.size);
      return c.forEach(function(q) {
        _[++x] = q;
      }), _;
    }
    var rt = Array.prototype, Ut = Function.prototype, lt = Object.prototype, Qe = W["__core-js_shared__"], Pt = function() {
      var c = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
      return c ? "Symbol(src)_1." + c : "";
    }(), _t = Ut.toString, Ze = lt.hasOwnProperty, gr = lt.toString, An = RegExp(
      "^" + _t.call(Ze).replace(H, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), zt = $e ? W.Buffer : void 0, yr = W.Symbol, Tt = W.Uint8Array, nt = De(Object.getPrototypeOf, Object), _r = Object.create, Yr = lt.propertyIsEnumerable, En = rt.splice, Zt = Object.getOwnPropertySymbols, Rt = zt ? zt.isBuffer : void 0, I = De(Object.keys, Object), D = $t(W, "DataView"), le = $t(W, "Map"), ce = $t(W, "Promise"), ge = $t(W, "Set"), ne = $t(W, "WeakMap"), at = $t(Object, "create"), gt = ut(D), Be = ut(le), ft = ut(ce), er = ut(ge), Et = ut(ne), ze = yr ? yr.prototype : void 0, Tr = ze ? ze.valueOf : void 0;
    function Ct(c) {
      var x = -1, _ = c ? c.length : 0;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Jr() {
      this.__data__ = at ? at(null) : {};
    }
    function tr(c) {
      return this.has(c) && delete this.__data__[c];
    }
    function Rr(c) {
      var x = this.__data__;
      if (at) {
        var _ = x[c];
        return _ === n ? void 0 : _;
      }
      return Ze.call(x, c) ? x[c] : void 0;
    }
    function rr(c) {
      var x = this.__data__;
      return at ? x[c] !== void 0 : Ze.call(x, c);
    }
    function nr(c, x) {
      var _ = this.__data__;
      return _[c] = at && x === void 0 ? n : x, this;
    }
    Ct.prototype.clear = Jr, Ct.prototype.delete = tr, Ct.prototype.get = Rr, Ct.prototype.has = rr, Ct.prototype.set = nr;
    function qe(c) {
      var x = -1, _ = c ? c.length : 0;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Xr() {
      this.__data__ = [];
    }
    function Qr(c) {
      var x = this.__data__, _ = tn(x, c);
      if (_ < 0)
        return !1;
      var q = x.length - 1;
      return _ == q ? x.pop() : En.call(x, _, 1), !0;
    }
    function $r(c) {
      var x = this.__data__, _ = tn(x, c);
      return _ < 0 ? void 0 : x[_][1];
    }
    function Zr(c) {
      return tn(this.__data__, c) > -1;
    }
    function Ir(c, x) {
      var _ = this.__data__, q = tn(_, c);
      return q < 0 ? _.push([c, x]) : _[q][1] = x, this;
    }
    qe.prototype.clear = Xr, qe.prototype.delete = Qr, qe.prototype.get = $r, qe.prototype.has = Zr, qe.prototype.set = Ir;
    function We(c) {
      var x = -1, _ = c ? c.length : 0;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Cn() {
      this.__data__ = {
        hash: new Ct(),
        map: new (le || qe)(),
        string: new Ct()
      };
    }
    function Dr(c) {
      return Lr(this, c).delete(c);
    }
    function Vt(c) {
      return Lr(this, c).get(c);
    }
    function vr(c) {
      return Lr(this, c).has(c);
    }
    function On(c, x) {
      return Lr(this, c).set(c, x), this;
    }
    We.prototype.clear = Cn, We.prototype.delete = Dr, We.prototype.get = Vt, We.prototype.has = vr, We.prototype.set = On;
    function et(c) {
      this.__data__ = new qe(c);
    }
    function Pi() {
      this.__data__ = new qe();
    }
    function _i(c) {
      return this.__data__.delete(c);
    }
    function Ti(c) {
      return this.__data__.get(c);
    }
    function Ri(c) {
      return this.__data__.has(c);
    }
    function $i(c, x) {
      var _ = this.__data__;
      if (_ instanceof qe) {
        var q = _.__data__;
        if (!le || q.length < r - 1)
          return q.push([c, x]), this;
        _ = this.__data__ = new We(q);
      }
      return _.set(c, x), this;
    }
    et.prototype.clear = Pi, et.prototype.delete = _i, et.prototype.get = Ti, et.prototype.has = Ri, et.prototype.set = $i;
    function en(c, x) {
      var _ = Tn(c) || nn(c) ? ue(c.length, String) : [], q = _.length, ae = !!q;
      for (var X in c)
        Ze.call(c, X) && !(ae && (X == "length" || Wi(X, q))) && _.push(X);
      return _;
    }
    function ha(c, x, _) {
      var q = c[x];
      (!(Ze.call(c, x) && va(q, _)) || _ === void 0 && !(x in c)) && (c[x] = _);
    }
    function tn(c, x) {
      for (var _ = c.length; _--; )
        if (va(c[_][0], x))
          return _;
      return -1;
    }
    function Ht(c, x) {
      return c && _n(x, $n(x), c);
    }
    function kn(c, x, _, q, ae, X, ye) {
      var me;
      if (q && (me = X ? q(c, ae, X, ye) : q(c)), me !== void 0)
        return me;
      if (!Gt(c))
        return c;
      var Ve = Tn(c);
      if (Ve) {
        if (me = Vi(c), !x)
          return ji(c, me);
      } else {
        var be = ir(c), it = be == o || be == f;
        if (ba(c))
          return rn(c, x);
        if (be == m || be == i || it && !X) {
          if (Ie(c))
            return X ? c : {};
          if (me = Wt(it ? {} : c), !x)
            return Ui(c, Ht(me, c));
        } else {
          if (!G[be])
            return X ? c : {};
          me = Hi(c, be, kn, x);
        }
      }
      ye || (ye = new et());
      var dt = ye.get(c);
      if (dt)
        return dt;
      if (ye.set(c, me), !Ve)
        var Ge = _ ? zi(c) : $n(c);
      return Se(Ge || c, function(st, tt) {
        Ge && (tt = st, st = c[tt]), ha(me, tt, kn(st, x, _, q, tt, c, ye));
      }), me;
    }
    function Ii(c) {
      return Gt(c) ? _r(c) : {};
    }
    function Di(c, x, _) {
      var q = x(c);
      return Tn(c) ? q : oe(q, _(c));
    }
    function Fi(c) {
      return gr.call(c);
    }
    function Li(c) {
      if (!Gt(c) || Ki(c))
        return !1;
      var x = Rn(c) || Ie(c) ? An : L;
      return x.test(ut(c));
    }
    function Ni(c) {
      if (!ga(c))
        return I(c);
      var x = [];
      for (var _ in Object(c))
        Ze.call(c, _) && _ != "constructor" && x.push(_);
      return x;
    }
    function rn(c, x) {
      if (x)
        return c.slice();
      var _ = new c.constructor(c.length);
      return c.copy(_), _;
    }
    function Pn(c) {
      var x = new c.constructor(c.byteLength);
      return new Tt(x).set(new Tt(c)), x;
    }
    function Fr(c, x) {
      var _ = x ? Pn(c.buffer) : c.buffer;
      return new c.constructor(_, c.byteOffset, c.byteLength);
    }
    function pa(c, x, _) {
      var q = x ? _(Xe(c), !0) : Xe(c);
      return he(q, Ye, new c.constructor());
    }
    function ma(c) {
      var x = new c.constructor(c.source, j.exec(c));
      return x.lastIndex = c.lastIndex, x;
    }
    function Mi(c, x, _) {
      var q = x ? _(He(c), !0) : He(c);
      return he(q, Pe, new c.constructor());
    }
    function Bi(c) {
      return Tr ? Object(Tr.call(c)) : {};
    }
    function qi(c, x) {
      var _ = x ? Pn(c.buffer) : c.buffer;
      return new c.constructor(_, c.byteOffset, c.length);
    }
    function ji(c, x) {
      var _ = -1, q = c.length;
      for (x || (x = Array(q)); ++_ < q; )
        x[_] = c[_];
      return x;
    }
    function _n(c, x, _, q) {
      _ || (_ = {});
      for (var ae = -1, X = x.length; ++ae < X; ) {
        var ye = x[ae], me = void 0;
        ha(_, ye, me === void 0 ? c[ye] : me);
      }
      return _;
    }
    function Ui(c, x) {
      return _n(c, ar(c), x);
    }
    function zi(c) {
      return Di(c, $n, ar);
    }
    function Lr(c, x) {
      var _ = c.__data__;
      return Gi(x) ? _[typeof x == "string" ? "string" : "hash"] : _.map;
    }
    function $t(c, x) {
      var _ = xe(c, x);
      return Li(_) ? _ : void 0;
    }
    var ar = Zt ? De(Zt, Object) : Ji, ir = Fi;
    (D && ir(new D(new ArrayBuffer(1))) != C || le && ir(new le()) != p || ce && ir(ce.resolve()) != y || ge && ir(new ge()) != v || ne && ir(new ne()) != O) && (ir = function(c) {
      var x = gr.call(c), _ = x == m ? c.constructor : void 0, q = _ ? ut(_) : void 0;
      if (q)
        switch (q) {
          case gt:
            return C;
          case Be:
            return p;
          case ft:
            return y;
          case er:
            return v;
          case Et:
            return O;
        }
      return x;
    });
    function Vi(c) {
      var x = c.length, _ = c.constructor(x);
      return x && typeof c[0] == "string" && Ze.call(c, "index") && (_.index = c.index, _.input = c.input), _;
    }
    function Wt(c) {
      return typeof c.constructor == "function" && !ga(c) ? Ii(nt(c)) : {};
    }
    function Hi(c, x, _, q) {
      var ae = c.constructor;
      switch (x) {
        case E:
          return Pn(c);
        case l:
        case d:
          return new ae(+c);
        case C:
          return Fr(c, q);
        case T:
        case F:
        case N:
        case R:
        case z:
        case w:
        case k:
        case P:
        case A:
          return qi(c, q);
        case p:
          return pa(c, q, _);
        case h:
        case b:
          return new ae(c);
        case g:
          return ma(c);
        case v:
          return Mi(c, q, _);
        case S:
          return Bi(c);
      }
    }
    function Wi(c, x) {
      return x = x ?? a, !!x && (typeof c == "number" || V.test(c)) && c > -1 && c % 1 == 0 && c < x;
    }
    function Gi(c) {
      var x = typeof c;
      return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? c !== "__proto__" : c === null;
    }
    function Ki(c) {
      return !!Pt && Pt in c;
    }
    function ga(c) {
      var x = c && c.constructor, _ = typeof x == "function" && x.prototype || lt;
      return c === _;
    }
    function ut(c) {
      if (c != null) {
        try {
          return _t.call(c);
        } catch {
        }
        try {
          return c + "";
        } catch {
        }
      }
      return "";
    }
    function ya(c) {
      return kn(c, !0, !0);
    }
    function va(c, x) {
      return c === x || c !== c && x !== x;
    }
    function nn(c) {
      return Yi(c) && Ze.call(c, "callee") && (!Yr.call(c, "callee") || gr.call(c) == i);
    }
    var Tn = Array.isArray;
    function an(c) {
      return c != null && wa(c.length) && !Rn(c);
    }
    function Yi(c) {
      return xa(c) && an(c);
    }
    var ba = Rt || Xi;
    function Rn(c) {
      var x = Gt(c) ? gr.call(c) : "";
      return x == o || x == f;
    }
    function wa(c) {
      return typeof c == "number" && c > -1 && c % 1 == 0 && c <= a;
    }
    function Gt(c) {
      var x = typeof c;
      return !!c && (x == "object" || x == "function");
    }
    function xa(c) {
      return !!c && typeof c == "object";
    }
    function $n(c) {
      return an(c) ? en(c) : Ni(c);
    }
    function Ji() {
      return [];
    }
    function Xi() {
      return !1;
    }
    e.exports = ya;
  }(Bn, Bn.exports)), Bn.exports;
}
var w0 = b0();
const lr = /* @__PURE__ */ sa(w0);
var qn = { exports: {} };
qn.exports;
var Hc;
function x0() {
  return Hc || (Hc = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", a = 1, i = 2, s = 9007199254740991, l = "[object Arguments]", d = "[object Array]", u = "[object AsyncFunction]", o = "[object Boolean]", f = "[object Date]", p = "[object Error]", h = "[object Function]", m = "[object GeneratorFunction]", y = "[object Map]", g = "[object Number]", v = "[object Null]", b = "[object Object]", S = "[object Promise]", O = "[object Proxy]", E = "[object RegExp]", C = "[object Set]", T = "[object String]", F = "[object Symbol]", N = "[object Undefined]", R = "[object WeakMap]", z = "[object ArrayBuffer]", w = "[object DataView]", k = "[object Float32Array]", P = "[object Float64Array]", A = "[object Int8Array]", H = "[object Int16Array]", j = "[object Int32Array]", L = "[object Uint8Array]", V = "[object Uint8ClampedArray]", G = "[object Uint16Array]", Re = "[object Uint32Array]", Ue = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, ke = /^(?:0|[1-9]\d*)$/, ee = {};
    ee[k] = ee[P] = ee[A] = ee[H] = ee[j] = ee[L] = ee[V] = ee[G] = ee[Re] = !0, ee[l] = ee[d] = ee[z] = ee[o] = ee[w] = ee[f] = ee[p] = ee[h] = ee[y] = ee[g] = ee[b] = ee[E] = ee[C] = ee[T] = ee[R] = !1;
    var $e = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, Ye = typeof self == "object" && self && self.Object === Object && self, Pe = $e || Ye || Function("return this")(), Se = t && !t.nodeType && t, oe = Se && !0 && e && !e.nodeType && e, he = oe && oe.exports === Se, ue = he && $e.process, xe = function() {
      try {
        return ue && ue.binding && ue.binding("util");
      } catch {
      }
    }(), Ie = xe && xe.isTypedArray;
    function Xe(c, x) {
      for (var _ = -1, q = c == null ? 0 : c.length, ae = 0, X = []; ++_ < q; ) {
        var ye = c[_];
        x(ye, _, c) && (X[ae++] = ye);
      }
      return X;
    }
    function De(c, x) {
      for (var _ = -1, q = x.length, ae = c.length; ++_ < q; )
        c[ae + _] = x[_];
      return c;
    }
    function He(c, x) {
      for (var _ = -1, q = c == null ? 0 : c.length; ++_ < q; )
        if (x(c[_], _, c))
          return !0;
      return !1;
    }
    function rt(c, x) {
      for (var _ = -1, q = Array(c); ++_ < c; )
        q[_] = x(_);
      return q;
    }
    function Ut(c) {
      return function(x) {
        return c(x);
      };
    }
    function lt(c, x) {
      return c.has(x);
    }
    function Qe(c, x) {
      return c == null ? void 0 : c[x];
    }
    function Pt(c) {
      var x = -1, _ = Array(c.size);
      return c.forEach(function(q, ae) {
        _[++x] = [ae, q];
      }), _;
    }
    function _t(c, x) {
      return function(_) {
        return c(x(_));
      };
    }
    function Ze(c) {
      var x = -1, _ = Array(c.size);
      return c.forEach(function(q) {
        _[++x] = q;
      }), _;
    }
    var gr = Array.prototype, An = Function.prototype, zt = Object.prototype, yr = Pe["__core-js_shared__"], Tt = An.toString, nt = zt.hasOwnProperty, _r = function() {
      var c = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
      return c ? "Symbol(src)_1." + c : "";
    }(), Yr = zt.toString, En = RegExp(
      "^" + Tt.call(nt).replace(Ue, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Zt = he ? Pe.Buffer : void 0, Rt = Pe.Symbol, I = Pe.Uint8Array, D = zt.propertyIsEnumerable, le = gr.splice, ce = Rt ? Rt.toStringTag : void 0, ge = Object.getOwnPropertySymbols, ne = Zt ? Zt.isBuffer : void 0, at = _t(Object.keys, Object), gt = ar(Pe, "DataView"), Be = ar(Pe, "Map"), ft = ar(Pe, "Promise"), er = ar(Pe, "Set"), Et = ar(Pe, "WeakMap"), ze = ar(Object, "create"), Tr = ut(gt), Ct = ut(Be), Jr = ut(ft), tr = ut(er), Rr = ut(Et), rr = Rt ? Rt.prototype : void 0, nr = rr ? rr.valueOf : void 0;
    function qe(c) {
      var x = -1, _ = c == null ? 0 : c.length;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Xr() {
      this.__data__ = ze ? ze(null) : {}, this.size = 0;
    }
    function Qr(c) {
      var x = this.has(c) && delete this.__data__[c];
      return this.size -= x ? 1 : 0, x;
    }
    function $r(c) {
      var x = this.__data__;
      if (ze) {
        var _ = x[c];
        return _ === n ? void 0 : _;
      }
      return nt.call(x, c) ? x[c] : void 0;
    }
    function Zr(c) {
      var x = this.__data__;
      return ze ? x[c] !== void 0 : nt.call(x, c);
    }
    function Ir(c, x) {
      var _ = this.__data__;
      return this.size += this.has(c) ? 0 : 1, _[c] = ze && x === void 0 ? n : x, this;
    }
    qe.prototype.clear = Xr, qe.prototype.delete = Qr, qe.prototype.get = $r, qe.prototype.has = Zr, qe.prototype.set = Ir;
    function We(c) {
      var x = -1, _ = c == null ? 0 : c.length;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Cn() {
      this.__data__ = [], this.size = 0;
    }
    function Dr(c) {
      var x = this.__data__, _ = rn(x, c);
      if (_ < 0)
        return !1;
      var q = x.length - 1;
      return _ == q ? x.pop() : le.call(x, _, 1), --this.size, !0;
    }
    function Vt(c) {
      var x = this.__data__, _ = rn(x, c);
      return _ < 0 ? void 0 : x[_][1];
    }
    function vr(c) {
      return rn(this.__data__, c) > -1;
    }
    function On(c, x) {
      var _ = this.__data__, q = rn(_, c);
      return q < 0 ? (++this.size, _.push([c, x])) : _[q][1] = x, this;
    }
    We.prototype.clear = Cn, We.prototype.delete = Dr, We.prototype.get = Vt, We.prototype.has = vr, We.prototype.set = On;
    function et(c) {
      var x = -1, _ = c == null ? 0 : c.length;
      for (this.clear(); ++x < _; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Pi() {
      this.size = 0, this.__data__ = {
        hash: new qe(),
        map: new (Be || We)(),
        string: new qe()
      };
    }
    function _i(c) {
      var x = $t(this, c).delete(c);
      return this.size -= x ? 1 : 0, x;
    }
    function Ti(c) {
      return $t(this, c).get(c);
    }
    function Ri(c) {
      return $t(this, c).has(c);
    }
    function $i(c, x) {
      var _ = $t(this, c), q = _.size;
      return _.set(c, x), this.size += _.size == q ? 0 : 1, this;
    }
    et.prototype.clear = Pi, et.prototype.delete = _i, et.prototype.get = Ti, et.prototype.has = Ri, et.prototype.set = $i;
    function en(c) {
      var x = -1, _ = c == null ? 0 : c.length;
      for (this.__data__ = new et(); ++x < _; )
        this.add(c[x]);
    }
    function ha(c) {
      return this.__data__.set(c, n), this;
    }
    function tn(c) {
      return this.__data__.has(c);
    }
    en.prototype.add = en.prototype.push = ha, en.prototype.has = tn;
    function Ht(c) {
      var x = this.__data__ = new We(c);
      this.size = x.size;
    }
    function kn() {
      this.__data__ = new We(), this.size = 0;
    }
    function Ii(c) {
      var x = this.__data__, _ = x.delete(c);
      return this.size = x.size, _;
    }
    function Di(c) {
      return this.__data__.get(c);
    }
    function Fi(c) {
      return this.__data__.has(c);
    }
    function Li(c, x) {
      var _ = this.__data__;
      if (_ instanceof We) {
        var q = _.__data__;
        if (!Be || q.length < r - 1)
          return q.push([c, x]), this.size = ++_.size, this;
        _ = this.__data__ = new et(q);
      }
      return _.set(c, x), this.size = _.size, this;
    }
    Ht.prototype.clear = kn, Ht.prototype.delete = Ii, Ht.prototype.get = Di, Ht.prototype.has = Fi, Ht.prototype.set = Li;
    function Ni(c, x) {
      var _ = nn(c), q = !_ && va(c), ae = !_ && !q && an(c), X = !_ && !q && !ae && xa(c), ye = _ || q || ae || X, me = ye ? rt(c.length, String) : [], Ve = me.length;
      for (var be in c)
        nt.call(c, be) && !(ye && // Safari 9 has enumerable `arguments.length` in strict mode.
        (be == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        ae && (be == "offset" || be == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        X && (be == "buffer" || be == "byteLength" || be == "byteOffset") || // Skip index properties.
        Hi(be, Ve))) && me.push(be);
      return me;
    }
    function rn(c, x) {
      for (var _ = c.length; _--; )
        if (ya(c[_][0], x))
          return _;
      return -1;
    }
    function Pn(c, x, _) {
      var q = x(c);
      return nn(c) ? q : De(q, _(c));
    }
    function Fr(c) {
      return c == null ? c === void 0 ? N : v : ce && ce in Object(c) ? ir(c) : ga(c);
    }
    function pa(c) {
      return Gt(c) && Fr(c) == l;
    }
    function ma(c, x, _, q, ae) {
      return c === x ? !0 : c == null || x == null || !Gt(c) && !Gt(x) ? c !== c && x !== x : Mi(c, x, _, q, ma, ae);
    }
    function Mi(c, x, _, q, ae, X) {
      var ye = nn(c), me = nn(x), Ve = ye ? d : Wt(c), be = me ? d : Wt(x);
      Ve = Ve == l ? b : Ve, be = be == l ? b : be;
      var it = Ve == b, dt = be == b, Ge = Ve == be;
      if (Ge && an(c)) {
        if (!an(x))
          return !1;
        ye = !0, it = !1;
      }
      if (Ge && !it)
        return X || (X = new Ht()), ye || xa(c) ? _n(c, x, _, q, ae, X) : Ui(c, x, Ve, _, q, ae, X);
      if (!(_ & a)) {
        var st = it && nt.call(c, "__wrapped__"), tt = dt && nt.call(x, "__wrapped__");
        if (st || tt) {
          var br = st ? c.value() : c, sr = tt ? x.value() : x;
          return X || (X = new Ht()), ae(br, sr, _, q, X);
        }
      }
      return Ge ? (X || (X = new Ht()), zi(c, x, _, q, ae, X)) : !1;
    }
    function Bi(c) {
      if (!wa(c) || Gi(c))
        return !1;
      var x = ba(c) ? En : W;
      return x.test(ut(c));
    }
    function qi(c) {
      return Gt(c) && Rn(c.length) && !!ee[Fr(c)];
    }
    function ji(c) {
      if (!Ki(c))
        return at(c);
      var x = [];
      for (var _ in Object(c))
        nt.call(c, _) && _ != "constructor" && x.push(_);
      return x;
    }
    function _n(c, x, _, q, ae, X) {
      var ye = _ & a, me = c.length, Ve = x.length;
      if (me != Ve && !(ye && Ve > me))
        return !1;
      var be = X.get(c);
      if (be && X.get(x))
        return be == x;
      var it = -1, dt = !0, Ge = _ & i ? new en() : void 0;
      for (X.set(c, x), X.set(x, c); ++it < me; ) {
        var st = c[it], tt = x[it];
        if (q)
          var br = ye ? q(tt, st, it, x, c, X) : q(st, tt, it, c, x, X);
        if (br !== void 0) {
          if (br)
            continue;
          dt = !1;
          break;
        }
        if (Ge) {
          if (!He(x, function(sr, Nr) {
            if (!lt(Ge, Nr) && (st === sr || ae(st, sr, _, q, X)))
              return Ge.push(Nr);
          })) {
            dt = !1;
            break;
          }
        } else if (!(st === tt || ae(st, tt, _, q, X))) {
          dt = !1;
          break;
        }
      }
      return X.delete(c), X.delete(x), dt;
    }
    function Ui(c, x, _, q, ae, X, ye) {
      switch (_) {
        case w:
          if (c.byteLength != x.byteLength || c.byteOffset != x.byteOffset)
            return !1;
          c = c.buffer, x = x.buffer;
        case z:
          return !(c.byteLength != x.byteLength || !X(new I(c), new I(x)));
        case o:
        case f:
        case g:
          return ya(+c, +x);
        case p:
          return c.name == x.name && c.message == x.message;
        case E:
        case T:
          return c == x + "";
        case y:
          var me = Pt;
        case C:
          var Ve = q & a;
          if (me || (me = Ze), c.size != x.size && !Ve)
            return !1;
          var be = ye.get(c);
          if (be)
            return be == x;
          q |= i, ye.set(c, x);
          var it = _n(me(c), me(x), q, ae, X, ye);
          return ye.delete(c), it;
        case F:
          if (nr)
            return nr.call(c) == nr.call(x);
      }
      return !1;
    }
    function zi(c, x, _, q, ae, X) {
      var ye = _ & a, me = Lr(c), Ve = me.length, be = Lr(x), it = be.length;
      if (Ve != it && !ye)
        return !1;
      for (var dt = Ve; dt--; ) {
        var Ge = me[dt];
        if (!(ye ? Ge in x : nt.call(x, Ge)))
          return !1;
      }
      var st = X.get(c);
      if (st && X.get(x))
        return st == x;
      var tt = !0;
      X.set(c, x), X.set(x, c);
      for (var br = ye; ++dt < Ve; ) {
        Ge = me[dt];
        var sr = c[Ge], Nr = x[Ge];
        if (q)
          var Hl = ye ? q(Nr, sr, Ge, x, c, X) : q(sr, Nr, Ge, c, x, X);
        if (!(Hl === void 0 ? sr === Nr || ae(sr, Nr, _, q, X) : Hl)) {
          tt = !1;
          break;
        }
        br || (br = Ge == "constructor");
      }
      if (tt && !br) {
        var Sa = c.constructor, Aa = x.constructor;
        Sa != Aa && "constructor" in c && "constructor" in x && !(typeof Sa == "function" && Sa instanceof Sa && typeof Aa == "function" && Aa instanceof Aa) && (tt = !1);
      }
      return X.delete(c), X.delete(x), tt;
    }
    function Lr(c) {
      return Pn(c, $n, Vi);
    }
    function $t(c, x) {
      var _ = c.__data__;
      return Wi(x) ? _[typeof x == "string" ? "string" : "hash"] : _.map;
    }
    function ar(c, x) {
      var _ = Qe(c, x);
      return Bi(_) ? _ : void 0;
    }
    function ir(c) {
      var x = nt.call(c, ce), _ = c[ce];
      try {
        c[ce] = void 0;
        var q = !0;
      } catch {
      }
      var ae = Yr.call(c);
      return q && (x ? c[ce] = _ : delete c[ce]), ae;
    }
    var Vi = ge ? function(c) {
      return c == null ? [] : (c = Object(c), Xe(ge(c), function(x) {
        return D.call(c, x);
      }));
    } : Ji, Wt = Fr;
    (gt && Wt(new gt(new ArrayBuffer(1))) != w || Be && Wt(new Be()) != y || ft && Wt(ft.resolve()) != S || er && Wt(new er()) != C || Et && Wt(new Et()) != R) && (Wt = function(c) {
      var x = Fr(c), _ = x == b ? c.constructor : void 0, q = _ ? ut(_) : "";
      if (q)
        switch (q) {
          case Tr:
            return w;
          case Ct:
            return y;
          case Jr:
            return S;
          case tr:
            return C;
          case Rr:
            return R;
        }
      return x;
    });
    function Hi(c, x) {
      return x = x ?? s, !!x && (typeof c == "number" || ke.test(c)) && c > -1 && c % 1 == 0 && c < x;
    }
    function Wi(c) {
      var x = typeof c;
      return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? c !== "__proto__" : c === null;
    }
    function Gi(c) {
      return !!_r && _r in c;
    }
    function Ki(c) {
      var x = c && c.constructor, _ = typeof x == "function" && x.prototype || zt;
      return c === _;
    }
    function ga(c) {
      return Yr.call(c);
    }
    function ut(c) {
      if (c != null) {
        try {
          return Tt.call(c);
        } catch {
        }
        try {
          return c + "";
        } catch {
        }
      }
      return "";
    }
    function ya(c, x) {
      return c === x || c !== c && x !== x;
    }
    var va = pa(/* @__PURE__ */ function() {
      return arguments;
    }()) ? pa : function(c) {
      return Gt(c) && nt.call(c, "callee") && !D.call(c, "callee");
    }, nn = Array.isArray;
    function Tn(c) {
      return c != null && Rn(c.length) && !ba(c);
    }
    var an = ne || Xi;
    function Yi(c, x) {
      return ma(c, x);
    }
    function ba(c) {
      if (!wa(c))
        return !1;
      var x = Fr(c);
      return x == h || x == m || x == u || x == O;
    }
    function Rn(c) {
      return typeof c == "number" && c > -1 && c % 1 == 0 && c <= s;
    }
    function wa(c) {
      var x = typeof c;
      return c != null && (x == "object" || x == "function");
    }
    function Gt(c) {
      return c != null && typeof c == "object";
    }
    var xa = Ie ? Ut(Ie) : qi;
    function $n(c) {
      return Tn(c) ? Ni(c) : ji(c);
    }
    function Ji() {
      return [];
    }
    function Xi() {
      return !1;
    }
    e.exports = Yi;
  }(qn, qn.exports)), qn.exports;
}
var S0 = x0();
const A0 = /* @__PURE__ */ sa(S0);
function E0(e, t) {
  let r = typeof e == "string" ? e : null, n = (typeof e == "string" ? t : e) ?? {}, a = r ? Xt.restore(r) : null, i = lr(typeof n == "function" ? n() : n), s = null, l = null, d = (o) => o, u = pl({ ...a ? a.data : lr(i), isDirty: !1, errors: a ? a.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(i).reduce((o, f) => (o[f] = this[f], o), {});
  }, transform(o) {
    return d = o, this;
  }, defaults(o, f) {
    if (typeof n == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof o > "u" ? (i = this.data(), this.isDirty = !1) : i = Object.assign({}, lr(i), typeof o == "string" ? { [o]: f } : o), this;
  }, reset(...o) {
    let f = lr(typeof n == "function" ? n() : i), p = lr(f);
    return o.length === 0 ? (i = p, Object.assign(this, f)) : Object.keys(f).filter((h) => o.includes(h)).forEach((h) => {
      i[h] = p[h], this[h] = f[h];
    }), this;
  }, setError(o, f) {
    return Object.assign(this.errors, typeof o == "string" ? { [o]: f } : o), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...o) {
    return this.errors = Object.keys(this.errors).reduce((f, p) => ({ ...f, ...o.length > 0 && !o.includes(p) ? { [p]: this.errors[p] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(o, f, p = {}) {
    let h = d(this.data()), m = { ...p, onCancelToken: (y) => {
      if (s = y, p.onCancelToken) return p.onCancelToken(y);
    }, onBefore: (y) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), p.onBefore) return p.onBefore(y);
    }, onStart: (y) => {
      if (this.processing = !0, p.onStart) return p.onStart(y);
    }, onProgress: (y) => {
      if (this.progress = y, p.onProgress) return p.onProgress(y);
    }, onSuccess: async (y) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let g = p.onSuccess ? await p.onSuccess(y) : null;
      return i = lr(this.data()), this.isDirty = !1, g;
    }, onError: (y) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(y), p.onError) return p.onError(y);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, p.onCancel) return p.onCancel();
    }, onFinish: (y) => {
      if (this.processing = !1, this.progress = null, s = null, p.onFinish) return p.onFinish(y);
    } };
    o === "delete" ? Xt.delete(f, { ...m, data: h }) : Xt[o](f, h, m);
  }, get(o, f) {
    this.submit("get", o, f);
  }, post(o, f) {
    this.submit("post", o, f);
  }, put(o, f) {
    this.submit("put", o, f);
  }, patch(o, f) {
    this.submit("patch", o, f);
  }, delete(o, f) {
    this.submit("delete", o, f);
  }, cancel() {
    s && s.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(o) {
    Object.assign(this, o.data), this.setError(o.errors);
  } });
  return Ar(u, (o) => {
    u.isDirty = !A0(u.data(), i), r && Xt.remember(lr(o.__remember()), r);
  }, { immediate: !0, deep: !0 }), u;
}
var yt = de(null), bt = de(null), Zs = Xh(null), Ia = de(null), Wc = null;
pr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: a }) {
  yt.value = t ? Gl(t) : null, bt.value = e, Ia.value = null;
  let i = typeof window > "u";
  return Wc = l0(i, n, a), i || (Xt.init({ initialPage: e, resolveComponent: r, swapComponent: async (s) => {
    yt.value = Gl(s.component), bt.value = s.page, Ia.value = s.preserveState ? Ia.value : Date.now();
  } }), Xt.on("navigate", () => Wc.forceUpdate())), () => {
    if (yt.value) {
      yt.value.inheritAttrs = !!yt.value.inheritAttrs;
      let s = cr(yt.value, { ...bt.value.props, key: Ia.value });
      return Zs.value && (yt.value.layout = Zs.value, Zs.value = null), yt.value.layout ? typeof yt.value.layout == "function" ? yt.value.layout(cr, s) : (Array.isArray(yt.value.layout) ? yt.value.layout : [yt.value.layout]).concat(s).reverse().reduce((l, d) => (d.inheritAttrs = !!d.inheritAttrs, cr(d, { ...bt.value.props }, () => l))) : s;
    }
  };
} });
function C0() {
  return pl({ props: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.props;
  }), url: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.url;
  }), component: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.component;
  }), version: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.version;
  }), clearHistory: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.mergeProps;
  }), rememberedState: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: fe(() => {
    var e;
    return (e = bt.value) == null ? void 0 : e.encryptHistory;
  }) });
}
pr({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
pr({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let a = e.props[n];
    return ["key", "head-key"].includes(n) ? r : a === "" ? r + ` ${n}` : r + ` ${n}="${a}"`;
  }, "");
  return `<${e.type}${t}>`;
}, renderTagChildren(e) {
  return typeof e.children == "string" ? e.children : e.children.reduce((t, r) => t + this.renderTag(r), "");
}, isFunctionNode(e) {
  return typeof e.type == "function";
}, isComponentNode(e) {
  return typeof e.type == "object";
}, isCommentNode(e) {
  return /(comment|cmt)/i.test(e.type.toString());
}, isFragmentNode(e) {
  return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
}, isTextNode(e) {
  return /(text|txt)/i.test(e.type.toString());
}, renderTag(e) {
  if (this.isTextNode(e)) return e.children;
  if (this.isFragmentNode(e) || this.isCommentNode(e)) return "";
  let t = this.renderTagStart(e);
  return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${e.type}>`), t;
}, addTitleElement(e) {
  return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title inertia>${this.title}</title>`), e;
}, renderNodes(e) {
  return this.addTitleElement(e.flatMap((t) => this.resolveNode(t)).map((t) => this.renderTag(t)).filter((t) => t));
}, resolveNode(e) {
  return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
} }, render() {
  this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
} });
pr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: r }) {
  let n = de(0), a = de(null), i = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : i.length === 1 && i[0] === "click" ? 0 : 3e4;
  kt(() => {
    i.includes("mount") && y();
  }), yn(() => {
    clearTimeout(a.value);
  });
  let l = e.method.toLowerCase(), d = l !== "get" ? "button" : e.as.toLowerCase(), u = fe(() => Nl(l, e.href || "", e.data, e.queryStringArrayFormat)), o = fe(() => u.value[0]), f = fe(() => u.value[1]), p = fe(() => ({ a: { href: o.value }, button: { type: "button" } })), h = { data: f.value, method: l, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? l !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, m = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (S) => {
    n.value++, e.onStart(S);
  }, onProgress: e.onProgress, onFinish: (S) => {
    n.value--, e.onFinish(S);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, y = () => {
    Xt.prefetch(o.value, h, { cacheFor: s });
  }, g = { onClick: (S) => {
    Wa(S) && (S.preventDefault(), Xt.visit(o.value, m));
  } }, v = { onMouseenter: () => {
    a.value = setTimeout(() => {
      y();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(a.value);
  }, onClick: g.onClick }, b = { onMousedown: (S) => {
    Wa(S) && (S.preventDefault(), y());
  }, onMouseup: (S) => {
    S.preventDefault(), Xt.visit(o.value, m);
  }, onClick: (S) => {
    Wa(S) && S.preventDefault();
  } };
  return () => cr(d, { ...r, ...p.value[d] || {}, "data-loading": n.value > 0 ? "" : void 0, ...i.includes("hover") ? v : i.includes("click") ? b : g }, t);
} });
pr({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    Xt.reload({ ...t, onStart: (r) => {
      var n;
      this.fetching = !0, (n = t.onStart) == null || n.call(t, r);
    }, onFinish: (r) => {
      var n;
      this.loaded = !0, this.fetching = !1, (n = t.onFinish) == null || n.call(t, r);
    } });
  }, { rootMargin: `${this.$props.buffer}px` }), this.observer.observe(this.$el.nextSibling);
}, methods: { getReloadParams() {
  if (this.$props.data) return { only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data] };
  if (!this.$props.params) throw new Error("You must provide either a `data` or `params` prop.");
  return this.$props.params;
} }, render() {
  let e = [];
  return (this.$props.always || !this.loaded) && e.push(cr(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function G2(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function O0(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function K2(e) {
  return C0().props.auth.permissions.includes(e);
}
let ol = null;
function Y2(e) {
  ol = e;
}
function ua() {
  return ol === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), ol;
}
const Mt = pr({
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
  setup(e, { slots: t, attrs: r }) {
    return () => {
      const n = ua(), a = e.as.toLowerCase(), i = e.method.toLowerCase(), [s, l] = Nl(
        i,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return a === "a" && i !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${s}" method="${i}" as="button">...</Link>`
      ), cr(
        e.as,
        {
          ...r,
          ...a === "a" ? { href: s } : {},
          onClick: (d) => {
            Wa(d) && (d.preventDefault(), n.visit(s, {
              data: l,
              method: i,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? i !== "get",
              only: e.only,
              headers: e.headers,
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
        t
      );
    };
  }
});
function ca(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function l(o) {
      try {
        u(n.next(o));
      } catch (f) {
        s(f);
      }
    }
    function d(o) {
      try {
        u(n.throw(o));
      } catch (f) {
        s(f);
      }
    }
    function u(o) {
      o.done ? i(o.value) : a(o.value).then(l, d);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function fa(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(u) {
    return function(o) {
      return d([u, o]);
    };
  }
  function d(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = u;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(u);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (o) {
      u = [6, o], a = 0;
    } finally {
      n = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function k0(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) i.push(a.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function P0() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(k0(arguments[t]));
  return e;
}
var _0 = /* @__PURE__ */ new Map([
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
function vi(e, t) {
  var r = T0(e);
  if (typeof r.path != "string") {
    var n = e.webkitRelativePath;
    Object.defineProperty(r, "path", {
      value: typeof t == "string" ? t : typeof n == "string" && n.length > 0 ? n : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return r;
}
function T0(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), a = _0.get(n);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var R0 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function $0(e) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(t) {
      return [2, I0(e) && e.dataTransfer ? L0(e.dataTransfer, e.type) : D0(e)];
    });
  });
}
function I0(e) {
  return !!e.dataTransfer;
}
function D0(e) {
  var t = F0(e.target) ? e.target.files ? ll(e.target.files) : [] : [];
  return t.map(function(r) {
    return vi(r);
  });
}
function F0(e) {
  return e !== null;
}
function L0(e, t) {
  return ca(this, void 0, void 0, function() {
    var r, n;
    return fa(this, function(a) {
      switch (a.label) {
        case 0:
          return e.items ? (r = ll(e.items).filter(function(i) {
            return i.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(N0))]) : [3, 2];
        case 1:
          return n = a.sent(), [2, Gc(gh(n))];
        case 2:
          return [2, Gc(ll(e.files).map(function(i) {
            return vi(i);
          }))];
      }
    });
  });
}
function Gc(e) {
  return e.filter(function(t) {
    return R0.indexOf(t.name) === -1;
  });
}
function ll(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function N0(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Kc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? yh(t) : Kc(e);
}
function gh(e) {
  return e.reduce(function(t, r) {
    return P0(t, Array.isArray(r) ? gh(r) : [r]);
  }, []);
}
function Kc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var r = vi(t);
  return Promise.resolve(r);
}
function M0(e) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(t) {
      return [2, e.isDirectory ? yh(e) : B0(e)];
    });
  });
}
function yh(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var a = [];
    function i() {
      var s = this;
      t.readEntries(function(l) {
        return ca(s, void 0, void 0, function() {
          var d, u, o;
          return fa(this, function(f) {
            switch (f.label) {
              case 0:
                if (l.length) return [3, 5];
                f.label = 1;
              case 1:
                return f.trys.push([1, 3, , 4]), [4, Promise.all(a)];
              case 2:
                return d = f.sent(), r(d), [3, 4];
              case 3:
                return u = f.sent(), n(u), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                o = Promise.all(l.map(M0)), a.push(o), i(), f.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(l) {
        n(l);
      });
    }
    i();
  });
}
function B0(e) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(a) {
          var i = vi(a, e.fullPath);
          r(i);
        }, function(a) {
          n(a);
        });
      })];
    });
  });
}
var Da = {}, Yc;
function q0() {
  return Yc || (Yc = 1, Da.__esModule = !0, Da.default = function(e, t) {
    if (e && t) {
      var r = Array.isArray(t) ? t : t.split(","), n = e.name || "", a = (e.type || "").toLowerCase(), i = a.replace(/\/.*$/, "");
      return r.some(function(s) {
        var l = s.trim().toLowerCase();
        return l.charAt(0) === "." ? n.toLowerCase().endsWith(l) : l.endsWith("/*") ? i === l.replace(/\/.*$/, "") : a === l;
      });
    }
    return !0;
  }), Da;
}
var j0 = q0();
const vh = /* @__PURE__ */ sa(j0);
var vt = function() {
  return vt = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, vt.apply(this, arguments);
};
function Jc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function U0(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function l(o) {
      try {
        u(n.next(o));
      } catch (f) {
        s(f);
      }
    }
    function d(o) {
      try {
        u(n.throw(o));
      } catch (f) {
        s(f);
      }
    }
    function u(o) {
      o.done ? i(o.value) : a(o.value).then(l, d);
    }
    u((n = n.apply(e, [])).next());
  });
}
function z0(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(u) {
    return function(o) {
      return d([u, o]);
    };
  }
  function d(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = u;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(u);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (o) {
      u = [6, o], a = 0;
    } finally {
      n = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ul(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, i; n < a; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function V0(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function H0(e) {
  return e.includes("Edge/");
}
function W0(e) {
  return e === void 0 && (e = window.navigator.userAgent), V0(e) || H0(e);
}
function Xc(e) {
  e.preventDefault();
}
function Fa(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ri(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var G0 = "file-invalid-type", K0 = "file-too-large", Y0 = "file-too-small", J0 = "too-many-files", X0 = {
  code: J0,
  message: "Too many files"
}, Q0 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: G0,
    message: "File type must be ".concat(t)
  };
};
function Fn(e) {
  return e != null;
}
var Z0 = vh.default, e1 = Z0 || vh;
function bh(e, t) {
  var r = e.type === "application/x-moz-file" || e1(e, t);
  return [r, r ? null : Q0(t)];
}
var Qc = function(e) {
  return {
    code: K0,
    message: "File is larger than ".concat(e, " bytes")
  };
}, Zc = function(e) {
  return {
    code: Y0,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function wh(e, t, r) {
  if (Fn(e.size) && e.size)
    if (Fn(t) && Fn(r)) {
      if (e.size > r)
        return [!1, Qc(r)];
      if (e.size < t)
        return [!1, Zc(t)];
    } else {
      if (Fn(t) && e.size < t)
        return [!1, Zc(t)];
      if (Fn(r) && e.size > r)
        return [!1, Qc(r)];
    }
  return [!0, null];
}
function ur() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    return e.some(function(i) {
      return !ri(r) && i && i.apply(void 0, ul([r], n, !1)), ri(r);
    });
  };
}
function t1(e) {
  var t = e.files, r = e.accept, n = e.minSize, a = e.maxSize, i = e.multiple, s = e.maxFiles;
  return !i && t.length > 1 || i && s >= 1 && t.length > s ? !1 : t.every(function(l) {
    var d = bh(l, r)[0], u = wh(l, n, a)[0];
    return d && u;
  });
}
var r1 = {
  disabled: !1,
  getFilesFromEvent: $0,
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
function xh(e) {
  e === void 0 && (e = {});
  var t = de(vt(vt({}, r1), e));
  Ar(function() {
    return vt({}, e);
  }, function(R) {
    t.value = vt(vt({}, t.value), R);
  });
  var r = de(), n = de(), a = pl({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), i = function() {
    n.value && (a.isFileDialogActive = !0, n.value.value = "", n.value.click());
  }, s = function() {
    var R = t.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var z = n.value.files;
        z && !z.length && (a.isFileDialogActive = !1, typeof R == "function" && R());
      }
    }, 300);
  };
  function l() {
    a.isFocused = !0;
  }
  function d() {
    a.isFocused = !1;
  }
  function u() {
    var R = t.value.noClick;
    R || (W0() ? setTimeout(i, 0) : i());
  }
  var o = de([]), f = function(R) {
    if (r.value) {
      var z = r.value.$el || r.value;
      z.contains(R.target) || (R.preventDefault(), o.value = []);
    }
  };
  kt(function() {
    window.addEventListener("focus", s, !1);
    var R = t.value.preventDropOnDocument;
    R && (document.addEventListener("dragover", Xc, !1), document.addEventListener("drop", f, !1));
  }), yn(function() {
    window.removeEventListener("focus", s, !1);
    var R = t.value.preventDropOnDocument;
    R && (document.removeEventListener("dragover", Xc), document.removeEventListener("drop", f));
  });
  function p(R) {
    var z = t.value.noDragEventsBubbling;
    z && R.stopPropagation();
  }
  function h(R) {
    return U0(this, void 0, void 0, function() {
      var z, w, k, P, A;
      return z0(this, function(H) {
        switch (H.label) {
          case 0:
            return z = t.value, w = z.getFilesFromEvent, k = z.noDragEventsBubbling, P = z.onDragEnter, R.preventDefault(), p(R), o.value = ul(ul([], o.value, !0), [R.target], !1), Fa(R) ? w ? [4, w(R)] : [2] : [3, 2];
          case 1:
            if (A = H.sent(), A || (A = []), ri(R) && !k)
              return [2];
            a.draggedFiles = A, a.isDragActive = !0, P && P(R), H.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(R) {
    var z = t.value.onDragOver;
    if (R.preventDefault(), p(R), R.dataTransfer)
      try {
        R.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Fa(R) && z && z(R), !1;
  }
  function y(R) {
    R.preventDefault(), p(R);
    var z = o.value.filter(function(P) {
      if (!r.value)
        return !1;
      var A = r.value.$el || r.value;
      return A.contains(P);
    }), w = z.indexOf(R.target);
    if (w !== -1 && z.splice(w, 1), o.value = z, !(z.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var k = t.value.onDragLeave;
      Fa(R) && k && k(R);
    }
  }
  function g(R) {
    R.preventDefault(), p(R), o.value = [];
    var z = t.value, w = z.getFilesFromEvent, k = z.noDragEventsBubbling, P = z.accept, A = z.minSize, H = z.maxSize, j = z.multiple, L = z.maxFiles, V = z.onDrop, G = z.onDropRejected, Re = z.onDropAccepted;
    if (Fa(R)) {
      if (!w)
        return;
      Promise.resolve(w(R)).then(function(Ue) {
        if (!(ri(R) && !k)) {
          var W = [], ke = [];
          Ue.forEach(function(ee) {
            var $e = bh(ee, P), Ye = $e[0], Pe = $e[1], Se = wh(ee, A, H), oe = Se[0], he = Se[1];
            if (Ye && oe)
              W.push(ee);
            else {
              var ue = [Pe, he].filter(function(xe) {
                return xe;
              });
              ke.push({ file: ee, errors: ue });
            }
          }), (!j && W.length > 1 || j && L >= 1 && W.length > L) && (W.forEach(function(ee) {
            ke.push({ file: ee, errors: [X0] });
          }), W.splice(0)), a.acceptedFiles = W, a.fileRejections = ke, V && V(W, ke, R), ke.length > 0 && G && G(ke, R), W.length > 0 && Re && Re(W, R);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var v = function(R) {
    return t.value.disabled ? void 0 : R;
  }, b = function(R) {
    return t.value.noKeyboard ? void 0 : v(R);
  }, S = function(R) {
    return t.value.noDrag ? void 0 : v(R);
  }, O = function(R) {
    R === void 0 && (R = {});
    var z = R.onFocus, w = R.onBlur, k = R.onClick, P = R.onDragEnter, A = R.onDragenter, H = R.onDragOver, j = R.onDragover, L = R.onDragLeave, V = R.onDragleave, G = R.onDrop, Re = Jc(R, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return vt(vt({ onFocus: b(ur(z, l)), onBlur: b(ur(w, d)), onClick: v(ur(k, u)), onDragenter: S(ur(P, A, h)), onDragover: S(ur(H, j, m)), onDragleave: S(ur(L, V, y)), onDrop: S(ur(G, g)), ref: r }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Re);
  }, E = function(R) {
    R.stopPropagation();
  };
  function C(R) {
    R === void 0 && (R = {});
    var z = R.onChange, w = R.onClick, k = Jc(R, ["onChange", "onClick"]), P = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: v(ur(z, g)),
      onClick: v(ur(w, E)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return vt(vt({}, P), k);
  }
  var T = fe(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), F = fe(function() {
    return T.value > 0 && t1({
      files: a.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), N = fe(function() {
    return T.value > 0 && !F.value;
  });
  return vt(vt({}, Qh(a)), { isDragAccept: F, isDragReject: N, isFocused: fe(function() {
    return a.isFocused && !t.value.disabled;
  }), getRootProps: O, getInputProps: C, rootRef: r, inputRef: n, open: v(i) });
}
const n1 = { class: "flex w-full flex-col" }, a1 = {
  key: 0,
  class: "select-none text-black"
}, i1 = ["name"], s1 = {
  key: 1,
  class: "select-none"
}, o1 = { key: 2 }, l1 = {
  key: 3,
  class: "select-none"
}, J2 = {
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
  setup(e) {
    ua();
    const t = e, r = de(null), n = (u) => {
      let o = [];
      return u.split("_").join(" ").split(" ").map(function(f) {
        o.push(f[0].toUpperCase() + f.slice(1));
      }), o.join(" ");
    }, a = (u, o) => {
      var f;
      if (r.value = null, o && o.length > 0) {
        o[0].errors && (r.value = (f = o[0]) == null ? void 0 : f.errors.map((p) => p.message).join(", ")), console.error(o);
        return;
      }
      if (!u || u.length === 0) {
        r.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = u : t.form[t.field] = u[0];
    }, { getRootProps: i, getInputProps: s, isDragActive: l, ...d } = xh({
      onDrop: a,
      multiple: t.multiple,
      accept: t.accept
    });
    return (u, o) => {
      var f;
      return $(), B("div", n1, [
        U("div", {
          class: te(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": Y(l),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? r.value
          }])
        }, [
          U("div", Gn({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, Y(i)()), [
            e.label ? ($(), B("p", a1, re(e.label), 1)) : Z("", !0),
            U("input", Gn(Y(s)(), { name: e.field }), null, 16, i1),
            Y(l) ? ($(), B("span", s1, "Drop the " + re(n(e.field)) + " here ...", 1)) : e.form[e.field] ? ($(), B("span", o1, re(((f = e.form[e.field]) == null ? void 0 : f.path) ?? "File prepared"), 1)) : ($(), B("span", l1, "Drag 'n' drop " + re(n(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Le(Y(ia), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, u1 = { class: "flex w-full" }, c1 = { key: 0 }, f1 = { key: 1 }, d1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, h1 = ["onClick"], p1 = ["src"], m1 = ["value"], g1 = { class: "flex items-center gap-4" }, y1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, v1 = {
  key: 1,
  class: "mt-2"
}, b1 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, w1 = { class: "-m-1 flex flex-wrap md:-m-2" }, x1 = { class: "flex w-1/3 flex-wrap" }, S1 = { class: "h-full w-full p-1 shadow md:p-2" }, A1 = ["src"], X2 = {
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
  setup(e) {
    const t = ua(), r = e, n = E0({
      image: []
    });
    function a() {
      let f = new FormData();
      n.image.forEach((p, h) => {
        f.append(`image[${h}]`, p.file);
      }), f.append("item_type", r.itemType), f.append("item_id", r.itemId), t.post(route(r.endPoint), f, {
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
    function i(f) {
      f.forEach((p) => {
        let h = new FileReader();
        h.onload = (m) => {
          n.image.push({ file: p, dataUrl: m.target.result });
        }, h.readAsDataURL(p);
      });
    }
    const s = (f, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      i(f);
    };
    function l(f) {
      n.image.splice(f, 1);
    }
    const { getRootProps: d, getInputProps: u, ...o } = xh({
      onDrop: s,
      multiple: !0,
      accept: "image/*"
    });
    return (f, p) => ($(), B(Ae, null, [
      e.canUpload ? ($(), B("form", {
        key: 0,
        onSubmit: xr(a, ["prevent"]),
        class: "w-full"
      }, [
        U("div", u1, [
          U("div", {
            class: te(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            U("div", Gn({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, Y(d)()), [
              U("input", Ot(It(Y(u)())), null, 16),
              f.isDragActive ? ($(), B("span", c1, "Drop the files here ...")) : ($(), B("span", f1, "Drag 'n' drop images here"))
            ], 16),
            Y(n).image.length > 0 ? ($(), B("div", d1, [
              ($(!0), B(Ae, null, Bt(Y(n).image, (h, m) => ($(), B("div", {
                class: "relative cursor-pointer select-none",
                onClick: (y) => l(m),
                key: m
              }, [
                p[0] || (p[0] = U("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                U("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, p1)
              ], 8, h1))), 128))
            ])) : Z("", !0)
          ], 2),
          Le(Y(Vh), {
            class: te(["inline rounded-l-none", { "cursor-not-allowed": Y(n).image.length == 0 }]),
            disabled: Y(n).image.length == 0
          }, {
            default: Ne(() => p[1] || (p[1] = [
              Te(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          Y(n).progress ? ($(), B("progress", {
            key: 0,
            value: Y(n).progress.percentage,
            max: "100"
          }, re(Y(n).progress.percentage) + "%", 9, m1)) : Z("", !0)
        ]),
        f.$page.props.errors.image ? ($(), pe(Y(ia), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : Z("", !0),
        U("div", g1, [
          Le(zr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: Ne(() => [
              Y(n).recentlySuccessful ? ($(), B("p", y1, "Images uploaded.")) : Z("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Z("", !0),
      e.images.length ? ($(), B("div", v1, [
        p[3] || (p[3] = U("hr", null, null, -1)),
        U("div", b1, [
          U("div", w1, [
            ($(!0), B(Ae, null, Bt(e.images, (h) => ($(), B("div", x1, [
              U("div", S1, [
                U("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, A1),
                e.canUpload ? ($(), pe(Y(Mt), {
                  key: 0,
                  href: f.route("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: Ne(() => p[2] || (p[2] = [
                    Te(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : Z("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : Z("", !0)
    ], 64));
  }
}, E1 = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, C1 = ["name", "value", "id", "checked"], O1 = ["for"], Q2 = {
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
  setup(e, { emit: t }) {
    const r = t, n = (a) => {
      r("update:modelValue", a.target.value);
    };
    return (a, i) => ($(), B("div", E1, [
      U("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: n
      }, null, 40, C1),
      U("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, re(e.label), 9, O1)
    ]));
  }
}, k1 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, ef = {
  __name: "SubmitButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean,
    form: Object,
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return $(), pe(Y(Vh), {
        disabled: e.loading || ((n = e.form) == null ? void 0 : n.processing) || e.disabled,
        type: e.type,
        class: "focusable"
      }, {
        default: Ne(() => {
          var a, i;
          return [
            U("div", {
              class: te({ "opacity-25": ((a = e.form) == null ? void 0 : a.processing) || e.loading })
            }, [
              Q(t.$slots, "default")
            ], 2),
            (i = e.form) != null && i.processing || e.loading ? ($(), B("div", k1, [
              Le(Y(Hh), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Z("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, P1 = ["id"], _1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, T1 = { class: "flex flex-col" }, Z2 = {
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
    },
    seperate: {
      type: Boolean,
      default: !1
    },
    responsive: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = ua(), r = e, n = de(null), a = de(null), i = de(null), s = de(null), l = () => {
      const o = n.value, f = o.getBoundingClientRect().top, p = document.querySelector("nav").offsetHeight, h = f - p, m = i.value, y = o.getBoundingClientRect().height + f - p * 2;
      if (h <= 0 && y > 0) {
        if (m.dataset.sticky === "true") return;
        u(), m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${p}px`, m.style.width = a.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, d = () => {
      s.value.style.marginLeft = -a.value.scrollLeft + "px";
    }, u = () => {
      if (!n.value) return;
      const o = n.value.querySelector("thead tr");
      let f = s.value;
      f.innerHTML = "";
      let p = o == null ? void 0 : o.querySelectorAll("th");
      p == null || p.forEach((m) => {
        const y = m.cloneNode(!0);
        y.style.width = m.offsetWidth + "px", f.appendChild(y), y.addEventListener("click", () => {
          m.click();
        });
      });
      const h = i.value;
      h.style.width = a.value.offsetWidth + "px";
    };
    return r.sticky && (t.on("navigate", () => {
      Zh(() => {
        u();
      });
    }), kt(() => {
      u(), window.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), a.value.addEventListener("scroll", d, { passive: !0 });
    }), yn(() => {
      var o;
      window.removeEventListener("scroll", l), window.removeEventListener("resize", u), (o = a.value) == null || o.removeEventListener("scroll", d);
    })), (o, f) => ($(), B("div", {
      class: te({
        "visible! hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total ? ($(), B("p", _1, "Found: " + re(e.total), 1)) : Z("", !0),
      U("div", T1, [
        U("div", {
          class: te({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: a
        }, [
          U("table", {
            class: te(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": e.collapsable,
              "border-separate border-spacing-y-5 px-2": e.seperate,
              // reponsive classes
              // thead & tbody
              "max-sm:[&_thead]:hidden": e.responsive,
              // td&th
              "max-sm:[&_.td-label]:block! max-sm:[&_td:last-child]:border-b-0! max-sm:[&_td]:flex max-sm:[&_td]:justify-between max-sm:[&_td]:border-b max-sm:[&_td]:px-2!": e.responsive,
              // tr
              "max-sm:[&_tr]:mb-2 max-sm:[&_tr]:flex max-sm:[&_tr]:flex-col max-sm:[&_tr]:rounded-md max-sm:[&_tr]:border max-sm:[&_tr]:border-gray-200 max-sm:[&_tr]:shadow-md": e.responsive
            }]),
            ref_key: "table",
            ref: n
          }, [
            e.sticky ? ($(), B("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: i,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              U("div", {
                ref_key: "sticky_header",
                ref: s,
                class: te(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": e.responsive
                }])
              }, null, 2)
            ], 512)) : Z("", !0),
            Q(o.$slots, "default")
          ], 2)
        ], 2)
      ]),
      o.$slots.pagination ? Q(o.$slots, "pagination", { key: 1 }) : e.links ? ($(), pe(Y(zh), {
        key: 2,
        class: "mt-6",
        links: e.links
      }, null, 8, ["links"])) : Z("", !0)
    ], 10, P1));
  }
}, R1 = {}, $1 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function I1(e, t) {
  return $(), B("thead", $1, [
    Q(e.$slots, "default")
  ]);
}
const eS = /* @__PURE__ */ bn(R1, [["render", I1]]), D1 = { class: "flex items-center justify-between" }, F1 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, tS = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    aa.add(eg, Xm);
    const t = e, r = de("asc"), n = de(!1);
    let a = null;
    const i = ua();
    kt(() => {
      t.orderBy && (a = i.on("navigate", s));
    }), yn(() => {
      a == null || a();
    });
    const s = () => {
      const u = route().params;
      if (u.order_by === t.orderBy) {
        r.value = u.order_dir, n.value = !0;
        return;
      }
      n.value = !1;
    }, l = () => {
      if (!t.orderBy) return;
      const u = r.value === "asc" ? "desc" : "asc", o = route().params;
      o.order_by = t.orderBy, o.order_dir = u, i.get(route(route().current()), o, {
        preserveState: !0
      }), r.value = u, n.value = !0;
    }, d = (u) => r.value === u && n.value ? "active text-primary" : "text-gray-400";
    return (u, o) => ($(), B("th", {
      scope: "col",
      class: te(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: l
    }, [
      U("div", D1, [
        Q(u.$slots, "default"),
        e.orderBy ? ($(), B("span", F1, [
          Le(Y(Yt), {
            icon: "fa-sort-up",
            class: te(["absolute", d("desc")])
          }, null, 8, ["class"]),
          Le(Y(Yt), {
            icon: "fa-sort-down",
            class: te(["absolute", d("asc")])
          }, null, 8, ["class"])
        ])) : Z("", !0)
      ])
    ], 2));
  }
}, L1 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, N1 = { class: "td-label hidden font-bold" }, M1 = {
  __name: "Td",
  props: {
    label: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => ($(), B("td", L1, [
      U("span", N1, re(t.label), 1),
      Q(r.$slots, "default")
    ]));
  }
}, B1 = ["data-te-target", "aria-controls"], rS = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => ($(), B("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      Q(t.$slots, "default")
    ], 8, B1));
  }
}, q1 = { colspan: "999" }, j1 = ["id"], nS = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => ($(), B("tr", null, [
      U("td", q1, [
        U("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          Q(t.$slots, "default")
        ], 8, j1)
      ])
    ]));
  }
};
var La = { exports: {} }, tf;
function U1() {
  if (tf) return La.exports;
  tf = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return La.exports = t(), La.exports.createColors = t, La.exports;
}
var eo, rf;
function Ml() {
  if (rf) return eo;
  rf = 1;
  let e = /* @__PURE__ */ U1(), t = pt;
  class r extends Error {
    constructor(a, i, s, l, d, u) {
      super(a), this.name = "CssSyntaxError", this.reason = a, d && (this.file = d), l && (this.source = l), u && (this.plugin = u), typeof i < "u" && typeof s < "u" && (typeof i == "number" ? (this.line = i, this.column = s) : (this.line = i.line, this.column = i.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, r);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(a) {
      if (!this.source) return "";
      let i = this.source;
      a == null && (a = e.isColorSupported);
      let s = (h) => h, l = (h) => h, d = (h) => h;
      if (a) {
        let { bold: h, gray: m, red: y } = e.createColors(!0);
        l = (g) => h(y(g)), s = (g) => m(g), t && (d = (g) => t(g));
      }
      let u = i.split(/\r?\n/), o = Math.max(this.line - 3, 0), f = Math.min(this.line + 2, u.length), p = String(f).length;
      return u.slice(o, f).map((h, m) => {
        let y = o + 1 + m, g = " " + (" " + y).slice(-p) + " | ";
        if (y === this.line) {
          if (h.length > 160) {
            let b = 20, S = Math.max(0, this.column - b), O = Math.max(
              this.column + b,
              this.endColumn + b
            ), E = h.slice(S, O), C = s(g.replace(/\d/g, " ")) + h.slice(0, Math.min(this.column - 1, b - 1)).replace(/[^\t]/g, " ");
            return l(">") + s(g) + d(E) + `
 ` + C + l("^");
          }
          let v = s(g.replace(/\d/g, " ")) + h.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return l(">") + s(g) + d(h) + `
 ` + v + l("^");
        }
        return " " + s(g) + d(h);
      }).join(`
`);
    }
    toString() {
      let a = this.showSourceCode();
      return a && (a = `

` + a + `
`), this.name + ": " + this.message + a;
    }
  }
  return eo = r, r.default = r, eo;
}
var to, nf;
function Sh() {
  if (nf) return to;
  nf = 1;
  const e = {
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
  function t(n) {
    return n[0].toUpperCase() + n.slice(1);
  }
  class r {
    constructor(a) {
      this.builder = a;
    }
    atrule(a, i) {
      let s = "@" + a.name, l = a.params ? this.rawValue(a, "params") : "";
      if (typeof a.raws.afterName < "u" ? s += a.raws.afterName : l && (s += " "), a.nodes)
        this.block(a, s + l);
      else {
        let d = (a.raws.between || "") + (i ? ";" : "");
        this.builder(s + l + d, a);
      }
    }
    beforeAfter(a, i) {
      let s;
      a.type === "decl" ? s = this.raw(a, null, "beforeDecl") : a.type === "comment" ? s = this.raw(a, null, "beforeComment") : i === "before" ? s = this.raw(a, null, "beforeRule") : s = this.raw(a, null, "beforeClose");
      let l = a.parent, d = 0;
      for (; l && l.type !== "root"; )
        d += 1, l = l.parent;
      if (s.includes(`
`)) {
        let u = this.raw(a, null, "indent");
        if (u.length)
          for (let o = 0; o < d; o++) s += u;
      }
      return s;
    }
    block(a, i) {
      let s = this.raw(a, "between", "beforeOpen");
      this.builder(i + s + "{", a, "start");
      let l;
      a.nodes && a.nodes.length ? (this.body(a), l = this.raw(a, "after")) : l = this.raw(a, "after", "emptyBody"), l && this.builder(l), this.builder("}", a, "end");
    }
    body(a) {
      let i = a.nodes.length - 1;
      for (; i > 0 && a.nodes[i].type === "comment"; )
        i -= 1;
      let s = this.raw(a, "semicolon");
      for (let l = 0; l < a.nodes.length; l++) {
        let d = a.nodes[l], u = this.raw(d, "before");
        u && this.builder(u), this.stringify(d, i !== l || s);
      }
    }
    comment(a) {
      let i = this.raw(a, "left", "commentLeft"), s = this.raw(a, "right", "commentRight");
      this.builder("/*" + i + a.text + s + "*/", a);
    }
    decl(a, i) {
      let s = this.raw(a, "between", "colon"), l = a.prop + s + this.rawValue(a, "value");
      a.important && (l += a.raws.important || " !important"), i && (l += ";"), this.builder(l, a);
    }
    document(a) {
      this.body(a);
    }
    raw(a, i, s) {
      let l;
      if (s || (s = i), i && (l = a.raws[i], typeof l < "u"))
        return l;
      let d = a.parent;
      if (s === "before" && (!d || d.type === "root" && d.first === a || d && d.type === "document"))
        return "";
      if (!d) return e[s];
      let u = a.root();
      if (u.rawCache || (u.rawCache = {}), typeof u.rawCache[s] < "u")
        return u.rawCache[s];
      if (s === "before" || s === "after")
        return this.beforeAfter(a, s);
      {
        let o = "raw" + t(s);
        this[o] ? l = this[o](u, a) : u.walk((f) => {
          if (l = f.raws[i], typeof l < "u") return !1;
        });
      }
      return typeof l > "u" && (l = e[s]), u.rawCache[s] = l, l;
    }
    rawBeforeClose(a) {
      let i;
      return a.walk((s) => {
        if (s.nodes && s.nodes.length > 0 && typeof s.raws.after < "u")
          return i = s.raws.after, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawBeforeComment(a, i) {
      let s;
      return a.walkComments((l) => {
        if (typeof l.raws.before < "u")
          return s = l.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), typeof s > "u" ? s = this.raw(i, null, "beforeDecl") : s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeDecl(a, i) {
      let s;
      return a.walkDecls((l) => {
        if (typeof l.raws.before < "u")
          return s = l.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), typeof s > "u" ? s = this.raw(i, null, "beforeRule") : s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeOpen(a) {
      let i;
      return a.walk((s) => {
        if (s.type !== "decl" && (i = s.raws.between, typeof i < "u"))
          return !1;
      }), i;
    }
    rawBeforeRule(a) {
      let i;
      return a.walk((s) => {
        if (s.nodes && (s.parent !== a || a.first !== s) && typeof s.raws.before < "u")
          return i = s.raws.before, i.includes(`
`) && (i = i.replace(/[^\n]+$/, "")), !1;
      }), i && (i = i.replace(/\S/g, "")), i;
    }
    rawColon(a) {
      let i;
      return a.walkDecls((s) => {
        if (typeof s.raws.between < "u")
          return i = s.raws.between.replace(/[^\s:]/g, ""), !1;
      }), i;
    }
    rawEmptyBody(a) {
      let i;
      return a.walk((s) => {
        if (s.nodes && s.nodes.length === 0 && (i = s.raws.after, typeof i < "u"))
          return !1;
      }), i;
    }
    rawIndent(a) {
      if (a.raws.indent) return a.raws.indent;
      let i;
      return a.walk((s) => {
        let l = s.parent;
        if (l && l !== a && l.parent && l.parent === a && typeof s.raws.before < "u") {
          let d = s.raws.before.split(`
`);
          return i = d[d.length - 1], i = i.replace(/\S/g, ""), !1;
        }
      }), i;
    }
    rawSemicolon(a) {
      let i;
      return a.walk((s) => {
        if (s.nodes && s.nodes.length && s.last.type === "decl" && (i = s.raws.semicolon, typeof i < "u"))
          return !1;
      }), i;
    }
    rawValue(a, i) {
      let s = a[i], l = a.raws[i];
      return l && l.value === s ? l.raw : s;
    }
    root(a) {
      this.body(a), a.raws.after && this.builder(a.raws.after);
    }
    rule(a) {
      this.block(a, this.rawValue(a, "selector")), a.raws.ownSemicolon && this.builder(a.raws.ownSemicolon, a, "end");
    }
    stringify(a, i) {
      if (!this[a.type])
        throw new Error(
          "Unknown AST node type " + a.type + ". Maybe you need to change PostCSS stringifier."
        );
      this[a.type](a, i);
    }
  }
  return to = r, r.default = r, to;
}
var ro, af;
function bi() {
  if (af) return ro;
  af = 1;
  let e = Sh();
  function t(r, n) {
    new e(n).stringify(r);
  }
  return ro = t, t.default = t, ro;
}
var Na = {}, sf;
function Bl() {
  return sf || (sf = 1, Na.isClean = Symbol("isClean"), Na.my = Symbol("my")), Na;
}
var no, of;
function wi() {
  if (of) return no;
  of = 1;
  let e = Ml(), t = Sh(), r = bi(), { isClean: n, my: a } = Bl();
  function i(d, u) {
    let o = new d.constructor();
    for (let f in d) {
      if (!Object.prototype.hasOwnProperty.call(d, f) || f === "proxyCache") continue;
      let p = d[f], h = typeof p;
      f === "parent" && h === "object" ? u && (o[f] = u) : f === "source" ? o[f] = p : Array.isArray(p) ? o[f] = p.map((m) => i(m, o)) : (h === "object" && p !== null && (p = i(p)), o[f] = p);
    }
    return o;
  }
  function s(d, u) {
    if (u && typeof u.offset < "u")
      return u.offset;
    let o = 1, f = 1, p = 0;
    for (let h = 0; h < d.length; h++) {
      if (f === u.line && o === u.column) {
        p = h;
        break;
      }
      d[h] === `
` ? (o = 1, f += 1) : o += 1;
    }
    return p;
  }
  class l {
    get proxyOf() {
      return this;
    }
    constructor(u = {}) {
      this.raws = {}, this[n] = !1, this[a] = !0;
      for (let o in u)
        if (o === "nodes") {
          this.nodes = [];
          for (let f of u[o])
            typeof f.clone == "function" ? this.append(f.clone()) : this.append(f);
        } else
          this[o] = u[o];
    }
    addToError(u) {
      if (u.postcssNode = this, u.stack && this.source && /\n\s{4}at /.test(u.stack)) {
        let o = this.source;
        u.stack = u.stack.replace(
          /\n\s{4}at /,
          `$&${o.input.from}:${o.start.line}:${o.start.column}$&`
        );
      }
      return u;
    }
    after(u) {
      return this.parent.insertAfter(this, u), this;
    }
    assign(u = {}) {
      for (let o in u)
        this[o] = u[o];
      return this;
    }
    before(u) {
      return this.parent.insertBefore(this, u), this;
    }
    cleanRaws(u) {
      delete this.raws.before, delete this.raws.after, u || delete this.raws.between;
    }
    clone(u = {}) {
      let o = i(this);
      for (let f in u)
        o[f] = u[f];
      return o;
    }
    cloneAfter(u = {}) {
      let o = this.clone(u);
      return this.parent.insertAfter(this, o), o;
    }
    cloneBefore(u = {}) {
      let o = this.clone(u);
      return this.parent.insertBefore(this, o), o;
    }
    error(u, o = {}) {
      if (this.source) {
        let { end: f, start: p } = this.rangeBy(o);
        return this.source.input.error(
          u,
          { column: p.column, line: p.line },
          { column: f.column, line: f.line },
          o
        );
      }
      return new e(u);
    }
    getProxyProcessor() {
      return {
        get(u, o) {
          return o === "proxyOf" ? u : o === "root" ? () => u.root().toProxy() : u[o];
        },
        set(u, o, f) {
          return u[o] === f || (u[o] = f, (o === "prop" || o === "value" || o === "name" || o === "params" || o === "important" || /* c8 ignore next */
          o === "text") && u.markDirty()), !0;
        }
      };
    }
    /* c8 ignore next 3 */
    markClean() {
      this[n] = !0;
    }
    markDirty() {
      if (this[n]) {
        this[n] = !1;
        let u = this;
        for (; u = u.parent; )
          u[n] = !1;
      }
    }
    next() {
      if (!this.parent) return;
      let u = this.parent.index(this);
      return this.parent.nodes[u + 1];
    }
    positionBy(u) {
      let o = this.source.start;
      if (u.index)
        o = this.positionInside(u.index);
      else if (u.word) {
        let f = "document" in this.source.input ? this.source.input.document : this.source.input.css, h = f.slice(
          s(f, this.source.start),
          s(f, this.source.end)
        ).indexOf(u.word);
        h !== -1 && (o = this.positionInside(h));
      }
      return o;
    }
    positionInside(u) {
      let o = this.source.start.column, f = this.source.start.line, p = "document" in this.source.input ? this.source.input.document : this.source.input.css, h = s(p, this.source.start), m = h + u;
      for (let y = h; y < m; y++)
        p[y] === `
` ? (o = 1, f += 1) : o += 1;
      return { column: o, line: f };
    }
    prev() {
      if (!this.parent) return;
      let u = this.parent.index(this);
      return this.parent.nodes[u - 1];
    }
    rangeBy(u) {
      let o = {
        column: this.source.start.column,
        line: this.source.start.line
      }, f = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      } : {
        column: o.column + 1,
        line: o.line
      };
      if (u.word) {
        let p = "document" in this.source.input ? this.source.input.document : this.source.input.css, m = p.slice(
          s(p, this.source.start),
          s(p, this.source.end)
        ).indexOf(u.word);
        m !== -1 && (o = this.positionInside(m), f = this.positionInside(
          m + u.word.length
        ));
      } else
        u.start ? o = {
          column: u.start.column,
          line: u.start.line
        } : u.index && (o = this.positionInside(u.index)), u.end ? f = {
          column: u.end.column,
          line: u.end.line
        } : typeof u.endIndex == "number" ? f = this.positionInside(u.endIndex) : u.index && (f = this.positionInside(u.index + 1));
      return (f.line < o.line || f.line === o.line && f.column <= o.column) && (f = { column: o.column + 1, line: o.line }), { end: f, start: o };
    }
    raw(u, o) {
      return new t().raw(this, u, o);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...u) {
      if (this.parent) {
        let o = this, f = !1;
        for (let p of u)
          p === this ? f = !0 : f ? (this.parent.insertAfter(o, p), o = p) : this.parent.insertBefore(o, p);
        f || this.remove();
      }
      return this;
    }
    root() {
      let u = this;
      for (; u.parent && u.parent.type !== "document"; )
        u = u.parent;
      return u;
    }
    toJSON(u, o) {
      let f = {}, p = o == null;
      o = o || /* @__PURE__ */ new Map();
      let h = 0;
      for (let m in this) {
        if (!Object.prototype.hasOwnProperty.call(this, m) || m === "parent" || m === "proxyCache") continue;
        let y = this[m];
        if (Array.isArray(y))
          f[m] = y.map((g) => typeof g == "object" && g.toJSON ? g.toJSON(null, o) : g);
        else if (typeof y == "object" && y.toJSON)
          f[m] = y.toJSON(null, o);
        else if (m === "source") {
          let g = o.get(y.input);
          g == null && (g = h, o.set(y.input, h), h++), f[m] = {
            end: y.end,
            inputId: g,
            start: y.start
          };
        } else
          f[m] = y;
      }
      return p && (f.inputs = [...o.keys()].map((m) => m.toJSON())), f;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(u = r) {
      u.stringify && (u = u.stringify);
      let o = "";
      return u(this, (f) => {
        o += f;
      }), o;
    }
    warn(u, o, f) {
      let p = { node: this };
      for (let h in f) p[h] = f[h];
      return u.warn(o, p);
    }
  }
  return no = l, l.default = l, no;
}
var ao, lf;
function xi() {
  if (lf) return ao;
  lf = 1;
  let e = wi();
  class t extends e {
    constructor(n) {
      super(n), this.type = "comment";
    }
  }
  return ao = t, t.default = t, ao;
}
var io, uf;
function Si() {
  if (uf) return io;
  uf = 1;
  let e = wi();
  class t extends e {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(n) {
      n && typeof n.value < "u" && typeof n.value != "string" && (n = { ...n, value: String(n.value) }), super(n), this.type = "decl";
    }
  }
  return io = t, t.default = t, io;
}
var so, cf;
function Kr() {
  if (cf) return so;
  cf = 1;
  let e = xi(), t = Si(), r = wi(), { isClean: n, my: a } = Bl(), i, s, l, d;
  function u(p) {
    return p.map((h) => (h.nodes && (h.nodes = u(h.nodes)), delete h.source, h));
  }
  function o(p) {
    if (p[n] = !1, p.proxyOf.nodes)
      for (let h of p.proxyOf.nodes)
        o(h);
  }
  class f extends r {
    get first() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...h) {
      for (let m of h) {
        let y = this.normalize(m, this.last);
        for (let g of y) this.proxyOf.nodes.push(g);
      }
      return this.markDirty(), this;
    }
    cleanRaws(h) {
      if (super.cleanRaws(h), this.nodes)
        for (let m of this.nodes) m.cleanRaws(h);
    }
    each(h) {
      if (!this.proxyOf.nodes) return;
      let m = this.getIterator(), y, g;
      for (; this.indexes[m] < this.proxyOf.nodes.length && (y = this.indexes[m], g = h(this.proxyOf.nodes[y], y), g !== !1); )
        this.indexes[m] += 1;
      return delete this.indexes[m], g;
    }
    every(h) {
      return this.nodes.every(h);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let h = this.lastEach;
      return this.indexes[h] = 0, h;
    }
    getProxyProcessor() {
      return {
        get(h, m) {
          return m === "proxyOf" ? h : h[m] ? m === "each" || typeof m == "string" && m.startsWith("walk") ? (...y) => h[m](
            ...y.map((g) => typeof g == "function" ? (v, b) => g(v.toProxy(), b) : g)
          ) : m === "every" || m === "some" ? (y) => h[m](
            (g, ...v) => y(g.toProxy(), ...v)
          ) : m === "root" ? () => h.root().toProxy() : m === "nodes" ? h.nodes.map((y) => y.toProxy()) : m === "first" || m === "last" ? h[m].toProxy() : h[m] : h[m];
        },
        set(h, m, y) {
          return h[m] === y || (h[m] = y, (m === "name" || m === "params" || m === "selector") && h.markDirty()), !0;
        }
      };
    }
    index(h) {
      return typeof h == "number" ? h : (h.proxyOf && (h = h.proxyOf), this.proxyOf.nodes.indexOf(h));
    }
    insertAfter(h, m) {
      let y = this.index(h), g = this.normalize(m, this.proxyOf.nodes[y]).reverse();
      y = this.index(h);
      for (let b of g) this.proxyOf.nodes.splice(y + 1, 0, b);
      let v;
      for (let b in this.indexes)
        v = this.indexes[b], y < v && (this.indexes[b] = v + g.length);
      return this.markDirty(), this;
    }
    insertBefore(h, m) {
      let y = this.index(h), g = y === 0 ? "prepend" : !1, v = this.normalize(
        m,
        this.proxyOf.nodes[y],
        g
      ).reverse();
      y = this.index(h);
      for (let S of v) this.proxyOf.nodes.splice(y, 0, S);
      let b;
      for (let S in this.indexes)
        b = this.indexes[S], y <= b && (this.indexes[S] = b + v.length);
      return this.markDirty(), this;
    }
    normalize(h, m) {
      if (typeof h == "string")
        h = u(s(h).nodes);
      else if (typeof h > "u")
        h = [];
      else if (Array.isArray(h)) {
        h = h.slice(0);
        for (let g of h)
          g.parent && g.parent.removeChild(g, "ignore");
      } else if (h.type === "root" && this.type !== "document") {
        h = h.nodes.slice(0);
        for (let g of h)
          g.parent && g.parent.removeChild(g, "ignore");
      } else if (h.type)
        h = [h];
      else if (h.prop) {
        if (typeof h.value > "u")
          throw new Error("Value field is missed in node creation");
        typeof h.value != "string" && (h.value = String(h.value)), h = [new t(h)];
      } else if (h.selector || h.selectors)
        h = [new d(h)];
      else if (h.name)
        h = [new i(h)];
      else if (h.text)
        h = [new e(h)];
      else
        throw new Error("Unknown node type in node creation");
      return h.map((g) => (g[a] || f.rebuild(g), g = g.proxyOf, g.parent && g.parent.removeChild(g), g[n] && o(g), g.raws || (g.raws = {}), typeof g.raws.before > "u" && m && typeof m.raws.before < "u" && (g.raws.before = m.raws.before.replace(/\S/g, "")), g.parent = this.proxyOf, g));
    }
    prepend(...h) {
      h = h.reverse();
      for (let m of h) {
        let y = this.normalize(m, this.first, "prepend").reverse();
        for (let g of y) this.proxyOf.nodes.unshift(g);
        for (let g in this.indexes)
          this.indexes[g] = this.indexes[g] + y.length;
      }
      return this.markDirty(), this;
    }
    push(h) {
      return h.parent = this, this.proxyOf.nodes.push(h), this;
    }
    removeAll() {
      for (let h of this.proxyOf.nodes) h.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(h) {
      h = this.index(h), this.proxyOf.nodes[h].parent = void 0, this.proxyOf.nodes.splice(h, 1);
      let m;
      for (let y in this.indexes)
        m = this.indexes[y], m >= h && (this.indexes[y] = m - 1);
      return this.markDirty(), this;
    }
    replaceValues(h, m, y) {
      return y || (y = m, m = {}), this.walkDecls((g) => {
        m.props && !m.props.includes(g.prop) || m.fast && !g.value.includes(m.fast) || (g.value = g.value.replace(h, y));
      }), this.markDirty(), this;
    }
    some(h) {
      return this.nodes.some(h);
    }
    walk(h) {
      return this.each((m, y) => {
        let g;
        try {
          g = h(m, y);
        } catch (v) {
          throw m.addToError(v);
        }
        return g !== !1 && m.walk && (g = m.walk(h)), g;
      });
    }
    walkAtRules(h, m) {
      return m ? h instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "atrule" && h.test(y.name))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "atrule" && y.name === h)
          return m(y, g);
      }) : (m = h, this.walk((y, g) => {
        if (y.type === "atrule")
          return m(y, g);
      }));
    }
    walkComments(h) {
      return this.walk((m, y) => {
        if (m.type === "comment")
          return h(m, y);
      });
    }
    walkDecls(h, m) {
      return m ? h instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "decl" && h.test(y.prop))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "decl" && y.prop === h)
          return m(y, g);
      }) : (m = h, this.walk((y, g) => {
        if (y.type === "decl")
          return m(y, g);
      }));
    }
    walkRules(h, m) {
      return m ? h instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "rule" && h.test(y.selector))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "rule" && y.selector === h)
          return m(y, g);
      }) : (m = h, this.walk((y, g) => {
        if (y.type === "rule")
          return m(y, g);
      }));
    }
  }
  return f.registerParse = (p) => {
    s = p;
  }, f.registerRule = (p) => {
    d = p;
  }, f.registerAtRule = (p) => {
    i = p;
  }, f.registerRoot = (p) => {
    l = p;
  }, so = f, f.default = f, f.rebuild = (p) => {
    p.type === "atrule" ? Object.setPrototypeOf(p, i.prototype) : p.type === "rule" ? Object.setPrototypeOf(p, d.prototype) : p.type === "decl" ? Object.setPrototypeOf(p, t.prototype) : p.type === "comment" ? Object.setPrototypeOf(p, e.prototype) : p.type === "root" && Object.setPrototypeOf(p, l.prototype), p[a] = !0, p.nodes && p.nodes.forEach((h) => {
      f.rebuild(h);
    });
  }, so;
}
var oo, ff;
function ql() {
  if (ff) return oo;
  ff = 1;
  let e = Kr();
  class t extends e {
    constructor(n) {
      super(n), this.type = "atrule";
    }
    append(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...n);
    }
    prepend(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...n);
    }
  }
  return oo = t, t.default = t, e.registerAtRule(t), oo;
}
var lo, df;
function jl() {
  if (df) return lo;
  df = 1;
  let e = Kr(), t, r;
  class n extends e {
    constructor(i) {
      super({ type: "document", ...i }), this.nodes || (this.nodes = []);
    }
    toResult(i = {}) {
      return new t(new r(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (a) => {
    t = a;
  }, n.registerProcessor = (a) => {
    r = a;
  }, lo = n, n.default = n, lo;
}
var uo, hf;
function z1() {
  if (hf) return uo;
  hf = 1;
  let e = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return uo = { nanoid: (n = 21) => {
    let a = "", i = n | 0;
    for (; i--; )
      a += e[Math.random() * 64 | 0];
    return a;
  }, customAlphabet: (n, a = 21) => (i = a) => {
    let s = "", l = i | 0;
    for (; l--; )
      s += n[Math.random() * n.length | 0];
    return s;
  } }, uo;
}
var co, pf;
function Ah() {
  if (pf) return co;
  pf = 1;
  let { existsSync: e, readFileSync: t } = pt, { dirname: r, join: n } = pt, { SourceMapConsumer: a, SourceMapGenerator: i } = pt;
  function s(d) {
    return Buffer ? Buffer.from(d, "base64").toString() : window.atob(d);
  }
  class l {
    constructor(u, o) {
      if (o.map === !1) return;
      this.loadAnnotation(u), this.inline = this.startWith(this.annotation, "data:");
      let f = o.map ? o.map.prev : void 0, p = this.loadMap(o.from, f);
      !this.mapFile && o.from && (this.mapFile = o.from), this.mapFile && (this.root = r(this.mapFile)), p && (this.text = p);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new a(this.text)), this.consumerCache;
    }
    decodeInline(u) {
      let o = /^data:application\/json;charset=utf-?8;base64,/, f = /^data:application\/json;base64,/, p = /^data:application\/json;charset=utf-?8,/, h = /^data:application\/json,/, m = u.match(p) || u.match(h);
      if (m)
        return decodeURIComponent(u.substr(m[0].length));
      let y = u.match(o) || u.match(f);
      if (y)
        return s(u.substr(y[0].length));
      let g = u.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + g);
    }
    getAnnotationURL(u) {
      return u.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(u) {
      return typeof u != "object" ? !1 : typeof u.mappings == "string" || typeof u._mappings == "string" || Array.isArray(u.sections);
    }
    loadAnnotation(u) {
      let o = u.match(/\/\*\s*# sourceMappingURL=/g);
      if (!o) return;
      let f = u.lastIndexOf(o.pop()), p = u.indexOf("*/", f);
      f > -1 && p > -1 && (this.annotation = this.getAnnotationURL(u.substring(f, p)));
    }
    loadFile(u) {
      if (this.root = r(u), e(u))
        return this.mapFile = u, t(u, "utf-8").toString().trim();
    }
    loadMap(u, o) {
      if (o === !1) return !1;
      if (o) {
        if (typeof o == "string")
          return o;
        if (typeof o == "function") {
          let f = o(u);
          if (f) {
            let p = this.loadFile(f);
            if (!p)
              throw new Error(
                "Unable to load previous source map: " + f.toString()
              );
            return p;
          }
        } else {
          if (o instanceof a)
            return i.fromSourceMap(o).toString();
          if (o instanceof i)
            return o.toString();
          if (this.isMap(o))
            return JSON.stringify(o);
          throw new Error(
            "Unsupported previous source map format: " + o.toString()
          );
        }
      } else {
        if (this.inline)
          return this.decodeInline(this.annotation);
        if (this.annotation) {
          let f = this.annotation;
          return u && (f = n(r(u), f)), this.loadFile(f);
        }
      }
    }
    startWith(u, o) {
      return u ? u.substr(0, o.length) === o : !1;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return co = l, l.default = l, co;
}
var fo, mf;
function Ai() {
  if (mf) return fo;
  mf = 1;
  let { nanoid: e } = /* @__PURE__ */ z1(), { isAbsolute: t, resolve: r } = pt, { SourceMapConsumer: n, SourceMapGenerator: a } = pt, { fileURLToPath: i, pathToFileURL: s } = pt, l = Ml(), d = Ah(), u = pt, o = Symbol("fromOffsetCache"), f = !!(n && a), p = !!(r && t);
  class h {
    get from() {
      return this.file || this.id;
    }
    constructor(y, g = {}) {
      if (y === null || typeof y > "u" || typeof y == "object" && !y.toString)
        throw new Error(`PostCSS received ${y} instead of CSS string`);
      if (this.css = y.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, g.document && (this.document = g.document.toString()), g.from && (!p || /^\w+:\/\//.test(g.from) || t(g.from) ? this.file = g.from : this.file = r(g.from)), p && f) {
        let v = new d(this.css, g);
        if (v.text) {
          this.map = v;
          let b = v.consumer().file;
          !this.file && b && (this.file = this.mapResolve(b));
        }
      }
      this.file || (this.id = "<input css " + e(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(y, g, v, b = {}) {
      let S, O, E;
      if (g && typeof g == "object") {
        let T = g, F = v;
        if (typeof T.offset == "number") {
          let N = this.fromOffset(T.offset);
          g = N.line, v = N.col;
        } else
          g = T.line, v = T.column;
        if (typeof F.offset == "number") {
          let N = this.fromOffset(F.offset);
          O = N.line, S = N.col;
        } else
          O = F.line, S = F.column;
      } else if (!v) {
        let T = this.fromOffset(g);
        g = T.line, v = T.col;
      }
      let C = this.origin(g, v, O, S);
      return C ? E = new l(
        y,
        C.endLine === void 0 ? C.line : { column: C.column, line: C.line },
        C.endLine === void 0 ? C.column : { column: C.endColumn, line: C.endLine },
        C.source,
        C.file,
        b.plugin
      ) : E = new l(
        y,
        O === void 0 ? g : { column: v, line: g },
        O === void 0 ? v : { column: S, line: O },
        this.css,
        this.file,
        b.plugin
      ), E.input = { column: v, endColumn: S, endLine: O, line: g, source: this.css }, this.file && (s && (E.input.url = s(this.file).toString()), E.input.file = this.file), E;
    }
    fromOffset(y) {
      let g, v;
      if (this[o])
        v = this[o];
      else {
        let S = this.css.split(`
`);
        v = new Array(S.length);
        let O = 0;
        for (let E = 0, C = S.length; E < C; E++)
          v[E] = O, O += S[E].length + 1;
        this[o] = v;
      }
      g = v[v.length - 1];
      let b = 0;
      if (y >= g)
        b = v.length - 1;
      else {
        let S = v.length - 2, O;
        for (; b < S; )
          if (O = b + (S - b >> 1), y < v[O])
            S = O - 1;
          else if (y >= v[O + 1])
            b = O + 1;
          else {
            b = O;
            break;
          }
      }
      return {
        col: y - v[b] + 1,
        line: b + 1
      };
    }
    mapResolve(y) {
      return /^\w+:\/\//.test(y) ? y : r(this.map.consumer().sourceRoot || this.map.root || ".", y);
    }
    origin(y, g, v, b) {
      if (!this.map) return !1;
      let S = this.map.consumer(), O = S.originalPositionFor({ column: g, line: y });
      if (!O.source) return !1;
      let E;
      typeof v == "number" && (E = S.originalPositionFor({ column: b, line: v }));
      let C;
      t(O.source) ? C = s(O.source) : C = new URL(
        O.source,
        this.map.consumer().sourceRoot || s(this.map.mapFile)
      );
      let T = {
        column: O.column,
        endColumn: E && E.column,
        endLine: E && E.line,
        line: O.line,
        url: C.toString()
      };
      if (C.protocol === "file:")
        if (i)
          T.file = i(C);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let F = S.sourceContentFor(O.source);
      return F && (T.source = F), T;
    }
    toJSON() {
      let y = {};
      for (let g of ["hasBOM", "css", "file", "id"])
        this[g] != null && (y[g] = this[g]);
      return this.map && (y.map = { ...this.map }, y.map.consumerCache && (y.map.consumerCache = void 0)), y;
    }
  }
  return fo = h, h.default = h, u && u.registerInput && u.registerInput(h), fo;
}
var ho, gf;
function da() {
  if (gf) return ho;
  gf = 1;
  let e = Kr(), t, r;
  class n extends e {
    constructor(i) {
      super(i), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(i, s, l) {
      let d = super.normalize(i);
      if (s) {
        if (l === "prepend")
          this.nodes.length > 1 ? s.raws.before = this.nodes[1].raws.before : delete s.raws.before;
        else if (this.first !== s)
          for (let u of d)
            u.raws.before = s.raws.before;
      }
      return d;
    }
    removeChild(i, s) {
      let l = this.index(i);
      return !s && l === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[l].raws.before), super.removeChild(i);
    }
    toResult(i = {}) {
      return new t(new r(), this, i).stringify();
    }
  }
  return n.registerLazyResult = (a) => {
    t = a;
  }, n.registerProcessor = (a) => {
    r = a;
  }, ho = n, n.default = n, e.registerRoot(n), ho;
}
var po, yf;
function Eh() {
  if (yf) return po;
  yf = 1;
  let e = {
    comma(t) {
      return e.split(t, [","], !0);
    },
    space(t) {
      let r = [" ", `
`, "	"];
      return e.split(t, r);
    },
    split(t, r, n) {
      let a = [], i = "", s = !1, l = 0, d = !1, u = "", o = !1;
      for (let f of t)
        o ? o = !1 : f === "\\" ? o = !0 : d ? f === u && (d = !1) : f === '"' || f === "'" ? (d = !0, u = f) : f === "(" ? l += 1 : f === ")" ? l > 0 && (l -= 1) : l === 0 && r.includes(f) && (s = !0), s ? (i !== "" && a.push(i.trim()), i = "", s = !1) : i += f;
      return (n || i !== "") && a.push(i.trim()), a;
    }
  };
  return po = e, e.default = e, po;
}
var mo, vf;
function Ul() {
  if (vf) return mo;
  vf = 1;
  let e = Kr(), t = Eh();
  class r extends e {
    get selectors() {
      return t.comma(this.selector);
    }
    set selectors(a) {
      let i = this.selector ? this.selector.match(/,\s*/) : null, s = i ? i[0] : "," + this.raw("between", "beforeOpen");
      this.selector = a.join(s);
    }
    constructor(a) {
      super(a), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return mo = r, r.default = r, e.registerRule(r), mo;
}
var go, bf;
function V1() {
  if (bf) return go;
  bf = 1;
  let e = ql(), t = xi(), r = Si(), n = Ai(), a = Ah(), i = da(), s = Ul();
  function l(d, u) {
    if (Array.isArray(d)) return d.map((p) => l(p));
    let { inputs: o, ...f } = d;
    if (o) {
      u = [];
      for (let p of o) {
        let h = { ...p, __proto__: n.prototype };
        h.map && (h.map = {
          ...h.map,
          __proto__: a.prototype
        }), u.push(h);
      }
    }
    if (f.nodes && (f.nodes = d.nodes.map((p) => l(p, u))), f.source) {
      let { inputId: p, ...h } = f.source;
      f.source = h, p != null && (f.source.input = u[p]);
    }
    if (f.type === "root")
      return new i(f);
    if (f.type === "decl")
      return new r(f);
    if (f.type === "rule")
      return new s(f);
    if (f.type === "comment")
      return new t(f);
    if (f.type === "atrule")
      return new e(f);
    throw new Error("Unknown node type: " + d.type);
  }
  return go = l, l.default = l, go;
}
var yo, wf;
function Ch() {
  if (wf) return yo;
  wf = 1;
  let { dirname: e, relative: t, resolve: r, sep: n } = pt, { SourceMapConsumer: a, SourceMapGenerator: i } = pt, { pathToFileURL: s } = pt, l = Ai(), d = !!(a && i), u = !!(e && r && t && n);
  class o {
    constructor(p, h, m, y) {
      this.stringify = p, this.mapOpts = m.map || {}, this.root = h, this.opts = m, this.css = y, this.originalCSS = y, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let p;
      this.isInline() ? p = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? p = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? p = this.mapOpts.annotation(this.opts.to, this.root) : p = this.outputFile() + ".map";
      let h = `
`;
      this.css.includes(`\r
`) && (h = `\r
`), this.css += h + "/*# sourceMappingURL=" + p + " */";
    }
    applyPrevMaps() {
      for (let p of this.previous()) {
        let h = this.toUrl(this.path(p.file)), m = p.root || e(p.file), y;
        this.mapOpts.sourcesContent === !1 ? (y = new a(p.text), y.sourcesContent && (y.sourcesContent = null)) : y = p.consumer(), this.map.applySourceMap(y, h, this.toUrl(this.path(m)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let p;
          for (let h = this.root.nodes.length - 1; h >= 0; h--)
            p = this.root.nodes[h], p.type === "comment" && p.text.startsWith("# sourceMappingURL=") && this.root.removeChild(h);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), u && d && this.isMap())
        return this.generateMap();
      {
        let p = "";
        return this.stringify(this.root, (h) => {
          p += h;
        }), [p];
      }
    }
    generateMap() {
      if (this.root)
        this.generateString();
      else if (this.previous().length === 1) {
        let p = this.previous()[0].consumer();
        p.file = this.outputFile(), this.map = i.fromSourceMap(p, {
          ignoreInvalidMapping: !0
        });
      } else
        this.map = new i({
          file: this.outputFile(),
          ignoreInvalidMapping: !0
        }), this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new i({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      });
      let p = 1, h = 1, m = "<no source>", y = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      }, g, v;
      this.stringify(this.root, (b, S, O) => {
        if (this.css += b, S && O !== "end" && (y.generated.line = p, y.generated.column = h - 1, S.source && S.source.start ? (y.source = this.sourcePath(S), y.original.line = S.source.start.line, y.original.column = S.source.start.column - 1, this.map.addMapping(y)) : (y.source = m, y.original.line = 1, y.original.column = 0, this.map.addMapping(y))), v = b.match(/\n/g), v ? (p += v.length, g = b.lastIndexOf(`
`), h = b.length - g) : h += b.length, S && O !== "start") {
          let E = S.parent || { raws: {} };
          (!(S.type === "decl" || S.type === "atrule" && !S.nodes) || S !== E.last || E.raws.semicolon) && (S.source && S.source.end ? (y.source = this.sourcePath(S), y.original.line = S.source.end.line, y.original.column = S.source.end.column - 1, y.generated.line = p, y.generated.column = h - 2, this.map.addMapping(y)) : (y.source = m, y.original.line = 1, y.original.column = 0, y.generated.line = p, y.generated.column = h - 1, this.map.addMapping(y)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((p) => p.annotation) : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u")
        return this.mapOpts.inline;
      let p = this.mapOpts.annotation;
      return typeof p < "u" && p !== !0 ? !1 : this.previous().length ? this.previous().some((h) => h.inline) : !0;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((p) => p.withContent()) : !0;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(p) {
      if (this.mapOpts.absolute || p.charCodeAt(0) === 60 || /^\w+:\/\//.test(p)) return p;
      let h = this.memoizedPaths.get(p);
      if (h) return h;
      let m = this.opts.to ? e(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (m = e(r(m, this.mapOpts.annotation)));
      let y = t(m, p);
      return this.memoizedPaths.set(p, y), y;
    }
    previous() {
      if (!this.previousMaps)
        if (this.previousMaps = [], this.root)
          this.root.walk((p) => {
            if (p.source && p.source.input.map) {
              let h = p.source.input.map;
              this.previousMaps.includes(h) || this.previousMaps.push(h);
            }
          });
        else {
          let p = new l(this.originalCSS, this.opts);
          p.map && this.previousMaps.push(p.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let p = {};
      if (this.root)
        this.root.walk((h) => {
          if (h.source) {
            let m = h.source.input.from;
            if (m && !p[m]) {
              p[m] = !0;
              let y = this.usesFileUrls ? this.toFileUrl(m) : this.toUrl(this.path(m));
              this.map.setSourceContent(y, h.source.input.css);
            }
          }
        });
      else if (this.css) {
        let h = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(h, this.css);
      }
    }
    sourcePath(p) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(p.source.input.from) : this.toUrl(this.path(p.source.input.from));
    }
    toBase64(p) {
      return Buffer ? Buffer.from(p).toString("base64") : window.btoa(unescape(encodeURIComponent(p)));
    }
    toFileUrl(p) {
      let h = this.memoizedFileURLs.get(p);
      if (h) return h;
      if (s) {
        let m = s(p).toString();
        return this.memoizedFileURLs.set(p, m), m;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(p) {
      let h = this.memoizedURLs.get(p);
      if (h) return h;
      n === "\\" && (p = p.replace(/\\/g, "/"));
      let m = encodeURI(p).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(p, m), m;
    }
  }
  return yo = o, yo;
}
var vo, xf;
function H1() {
  if (xf) return vo;
  xf = 1;
  const e = 39, t = 34, r = 92, n = 47, a = 10, i = 32, s = 12, l = 9, d = 13, u = 91, o = 93, f = 40, p = 41, h = 123, m = 125, y = 59, g = 42, v = 58, b = 64, S = /[\t\n\f\r "#'()/;[\\\]{}]/g, O = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, E = /.[\r\n"'(/\\]/, C = /[\da-f]/i;
  return vo = function(F, N = {}) {
    let R = F.css.valueOf(), z = N.ignoreErrors, w, k, P, A, H, j, L, V, G, Re, Ue = R.length, W = 0, ke = [], ee = [];
    function $e() {
      return W;
    }
    function Ye(he) {
      throw F.error("Unclosed " + he, W);
    }
    function Pe() {
      return ee.length === 0 && W >= Ue;
    }
    function Se(he) {
      if (ee.length) return ee.pop();
      if (W >= Ue) return;
      let ue = he ? he.ignoreUnclosed : !1;
      switch (w = R.charCodeAt(W), w) {
        case a:
        case i:
        case l:
        case d:
        case s: {
          A = W;
          do
            A += 1, w = R.charCodeAt(A);
          while (w === i || w === a || w === l || w === d || w === s);
          j = ["space", R.slice(W, A)], W = A - 1;
          break;
        }
        case u:
        case o:
        case h:
        case m:
        case v:
        case y:
        case p: {
          let xe = String.fromCharCode(w);
          j = [xe, xe, W];
          break;
        }
        case f: {
          if (Re = ke.length ? ke.pop()[1] : "", G = R.charCodeAt(W + 1), Re === "url" && G !== e && G !== t && G !== i && G !== a && G !== l && G !== s && G !== d) {
            A = W;
            do {
              if (L = !1, A = R.indexOf(")", A + 1), A === -1)
                if (z || ue) {
                  A = W;
                  break;
                } else
                  Ye("bracket");
              for (V = A; R.charCodeAt(V - 1) === r; )
                V -= 1, L = !L;
            } while (L);
            j = ["brackets", R.slice(W, A + 1), W, A], W = A;
          } else
            A = R.indexOf(")", W + 1), k = R.slice(W, A + 1), A === -1 || E.test(k) ? j = ["(", "(", W] : (j = ["brackets", k, W, A], W = A);
          break;
        }
        case e:
        case t: {
          H = w === e ? "'" : '"', A = W;
          do {
            if (L = !1, A = R.indexOf(H, A + 1), A === -1)
              if (z || ue) {
                A = W + 1;
                break;
              } else
                Ye("string");
            for (V = A; R.charCodeAt(V - 1) === r; )
              V -= 1, L = !L;
          } while (L);
          j = ["string", R.slice(W, A + 1), W, A], W = A;
          break;
        }
        case b: {
          S.lastIndex = W + 1, S.test(R), S.lastIndex === 0 ? A = R.length - 1 : A = S.lastIndex - 2, j = ["at-word", R.slice(W, A + 1), W, A], W = A;
          break;
        }
        case r: {
          for (A = W, P = !0; R.charCodeAt(A + 1) === r; )
            A += 1, P = !P;
          if (w = R.charCodeAt(A + 1), P && w !== n && w !== i && w !== a && w !== l && w !== d && w !== s && (A += 1, C.test(R.charAt(A)))) {
            for (; C.test(R.charAt(A + 1)); )
              A += 1;
            R.charCodeAt(A + 1) === i && (A += 1);
          }
          j = ["word", R.slice(W, A + 1), W, A], W = A;
          break;
        }
        default: {
          w === n && R.charCodeAt(W + 1) === g ? (A = R.indexOf("*/", W + 2) + 1, A === 0 && (z || ue ? A = R.length : Ye("comment")), j = ["comment", R.slice(W, A + 1), W, A], W = A) : (O.lastIndex = W + 1, O.test(R), O.lastIndex === 0 ? A = R.length - 1 : A = O.lastIndex - 2, j = ["word", R.slice(W, A + 1), W, A], ke.push(j), W = A);
          break;
        }
      }
      return W++, j;
    }
    function oe(he) {
      ee.push(he);
    }
    return {
      back: oe,
      endOfFile: Pe,
      nextToken: Se,
      position: $e
    };
  }, vo;
}
var bo, Sf;
function W1() {
  if (Sf) return bo;
  Sf = 1;
  let e = ql(), t = xi(), r = Si(), n = da(), a = Ul(), i = H1();
  const s = {
    empty: !0,
    space: !0
  };
  function l(u) {
    for (let o = u.length - 1; o >= 0; o--) {
      let f = u[o], p = f[3] || f[2];
      if (p) return p;
    }
  }
  class d {
    constructor(o) {
      this.input = o, this.root = new n(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: o, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(o) {
      let f = new e();
      f.name = o[1].slice(1), f.name === "" && this.unnamedAtrule(f, o), this.init(f, o[2]);
      let p, h, m, y = !1, g = !1, v = [], b = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (o = this.tokenizer.nextToken(), p = o[0], p === "(" || p === "[" ? b.push(p === "(" ? ")" : "]") : p === "{" && b.length > 0 ? b.push("}") : p === b[b.length - 1] && b.pop(), b.length === 0)
          if (p === ";") {
            f.source.end = this.getPosition(o[2]), f.source.end.offset++, this.semicolon = !0;
            break;
          } else if (p === "{") {
            g = !0;
            break;
          } else if (p === "}") {
            if (v.length > 0) {
              for (m = v.length - 1, h = v[m]; h && h[0] === "space"; )
                h = v[--m];
              h && (f.source.end = this.getPosition(h[3] || h[2]), f.source.end.offset++);
            }
            this.end(o);
            break;
          } else
            v.push(o);
        else
          v.push(o);
        if (this.tokenizer.endOfFile()) {
          y = !0;
          break;
        }
      }
      f.raws.between = this.spacesAndCommentsFromEnd(v), v.length ? (f.raws.afterName = this.spacesAndCommentsFromStart(v), this.raw(f, "params", v), y && (o = v[v.length - 1], f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++, this.spaces = f.raws.between, f.raws.between = "")) : (f.raws.afterName = "", f.params = ""), g && (f.nodes = [], this.current = f);
    }
    checkMissedSemicolon(o) {
      let f = this.colon(o);
      if (f === !1) return;
      let p = 0, h;
      for (let m = f - 1; m >= 0 && (h = o[m], !(h[0] !== "space" && (p += 1, p === 2))); m--)
        ;
      throw this.input.error(
        "Missed semicolon",
        h[0] === "word" ? h[3] + 1 : h[2]
      );
    }
    colon(o) {
      let f = 0, p, h, m;
      for (let [y, g] of o.entries()) {
        if (h = g, m = h[0], m === "(" && (f += 1), m === ")" && (f -= 1), f === 0 && m === ":")
          if (!p)
            this.doubleColon(h);
          else {
            if (p[0] === "word" && p[1] === "progid")
              continue;
            return y;
          }
        p = h;
      }
      return !1;
    }
    comment(o) {
      let f = new t();
      this.init(f, o[2]), f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++;
      let p = o[1].slice(2, -2);
      if (/^\s*$/.test(p))
        f.text = "", f.raws.left = p, f.raws.right = "";
      else {
        let h = p.match(/^(\s*)([^]*\S)(\s*)$/);
        f.text = h[2], f.raws.left = h[1], f.raws.right = h[3];
      }
    }
    createTokenizer() {
      this.tokenizer = i(this.input);
    }
    decl(o, f) {
      let p = new r();
      this.init(p, o[0][2]);
      let h = o[o.length - 1];
      for (h[0] === ";" && (this.semicolon = !0, o.pop()), p.source.end = this.getPosition(
        h[3] || h[2] || l(o)
      ), p.source.end.offset++; o[0][0] !== "word"; )
        o.length === 1 && this.unknownWord(o), p.raws.before += o.shift()[1];
      for (p.source.start = this.getPosition(o[0][2]), p.prop = ""; o.length; ) {
        let b = o[0][0];
        if (b === ":" || b === "space" || b === "comment")
          break;
        p.prop += o.shift()[1];
      }
      p.raws.between = "";
      let m;
      for (; o.length; )
        if (m = o.shift(), m[0] === ":") {
          p.raws.between += m[1];
          break;
        } else
          m[0] === "word" && /\w/.test(m[1]) && this.unknownWord([m]), p.raws.between += m[1];
      (p.prop[0] === "_" || p.prop[0] === "*") && (p.raws.before += p.prop[0], p.prop = p.prop.slice(1));
      let y = [], g;
      for (; o.length && (g = o[0][0], !(g !== "space" && g !== "comment")); )
        y.push(o.shift());
      this.precheckMissedSemicolon(o);
      for (let b = o.length - 1; b >= 0; b--) {
        if (m = o[b], m[1].toLowerCase() === "!important") {
          p.important = !0;
          let S = this.stringFrom(o, b);
          S = this.spacesFromEnd(o) + S, S !== " !important" && (p.raws.important = S);
          break;
        } else if (m[1].toLowerCase() === "important") {
          let S = o.slice(0), O = "";
          for (let E = b; E > 0; E--) {
            let C = S[E][0];
            if (O.trim().startsWith("!") && C !== "space")
              break;
            O = S.pop()[1] + O;
          }
          O.trim().startsWith("!") && (p.important = !0, p.raws.important = O, o = S);
        }
        if (m[0] !== "space" && m[0] !== "comment")
          break;
      }
      o.some((b) => b[0] !== "space" && b[0] !== "comment") && (p.raws.between += y.map((b) => b[1]).join(""), y = []), this.raw(p, "value", y.concat(o), f), p.value.includes(":") && !f && this.checkMissedSemicolon(o);
    }
    doubleColon(o) {
      throw this.input.error(
        "Double colon",
        { offset: o[2] },
        { offset: o[2] + o[1].length }
      );
    }
    emptyRule(o) {
      let f = new a();
      this.init(f, o[2]), f.selector = "", f.raws.between = "", this.current = f;
    }
    end(o) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(o[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(o);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(o) {
      if (this.spaces += o[1], this.current.nodes) {
        let f = this.current.nodes[this.current.nodes.length - 1];
        f && f.type === "rule" && !f.raws.ownSemicolon && (f.raws.ownSemicolon = this.spaces, this.spaces = "", f.source.end = this.getPosition(o[2]), f.source.end.offset += f.raws.ownSemicolon.length);
      }
    }
    // Helpers
    getPosition(o) {
      let f = this.input.fromOffset(o);
      return {
        column: f.col,
        line: f.line,
        offset: o
      };
    }
    init(o, f) {
      this.current.push(o), o.source = {
        input: this.input,
        start: this.getPosition(f)
      }, o.raws.before = this.spaces, this.spaces = "", o.type !== "comment" && (this.semicolon = !1);
    }
    other(o) {
      let f = !1, p = null, h = !1, m = null, y = [], g = o[1].startsWith("--"), v = [], b = o;
      for (; b; ) {
        if (p = b[0], v.push(b), p === "(" || p === "[")
          m || (m = b), y.push(p === "(" ? ")" : "]");
        else if (g && h && p === "{")
          m || (m = b), y.push("}");
        else if (y.length === 0)
          if (p === ";")
            if (h) {
              this.decl(v, g);
              return;
            } else
              break;
          else if (p === "{") {
            this.rule(v);
            return;
          } else if (p === "}") {
            this.tokenizer.back(v.pop()), f = !0;
            break;
          } else p === ":" && (h = !0);
        else p === y[y.length - 1] && (y.pop(), y.length === 0 && (m = null));
        b = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (f = !0), y.length > 0 && this.unclosedBracket(m), f && h) {
        if (!g)
          for (; v.length && (b = v[v.length - 1][0], !(b !== "space" && b !== "comment")); )
            this.tokenizer.back(v.pop());
        this.decl(v, g);
      } else
        this.unknownWord(v);
    }
    parse() {
      let o;
      for (; !this.tokenizer.endOfFile(); )
        switch (o = this.tokenizer.nextToken(), o[0]) {
          case "space":
            this.spaces += o[1];
            break;
          case ";":
            this.freeSemicolon(o);
            break;
          case "}":
            this.end(o);
            break;
          case "comment":
            this.comment(o);
            break;
          case "at-word":
            this.atrule(o);
            break;
          case "{":
            this.emptyRule(o);
            break;
          default:
            this.other(o);
            break;
        }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(o, f, p, h) {
      let m, y, g = p.length, v = "", b = !0, S, O;
      for (let E = 0; E < g; E += 1)
        m = p[E], y = m[0], y === "space" && E === g - 1 && !h ? b = !1 : y === "comment" ? (O = p[E - 1] ? p[E - 1][0] : "empty", S = p[E + 1] ? p[E + 1][0] : "empty", !s[O] && !s[S] ? v.slice(-1) === "," ? b = !1 : v += m[1] : b = !1) : v += m[1];
      if (!b) {
        let E = p.reduce((C, T) => C + T[1], "");
        o.raws[f] = { raw: E, value: v };
      }
      o[f] = v;
    }
    rule(o) {
      o.pop();
      let f = new a();
      this.init(f, o[0][2]), f.raws.between = this.spacesAndCommentsFromEnd(o), this.raw(f, "selector", o), this.current = f;
    }
    spacesAndCommentsFromEnd(o) {
      let f, p = "";
      for (; o.length && (f = o[o.length - 1][0], !(f !== "space" && f !== "comment")); )
        p = o.pop()[1] + p;
      return p;
    }
    // Errors
    spacesAndCommentsFromStart(o) {
      let f, p = "";
      for (; o.length && (f = o[0][0], !(f !== "space" && f !== "comment")); )
        p += o.shift()[1];
      return p;
    }
    spacesFromEnd(o) {
      let f, p = "";
      for (; o.length && (f = o[o.length - 1][0], f === "space"); )
        p = o.pop()[1] + p;
      return p;
    }
    stringFrom(o, f) {
      let p = "";
      for (let h = f; h < o.length; h++)
        p += o[h][1];
      return o.splice(f, o.length - f), p;
    }
    unclosedBlock() {
      let o = this.current.source.start;
      throw this.input.error("Unclosed block", o.line, o.column);
    }
    unclosedBracket(o) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: o[2] },
        { offset: o[2] + 1 }
      );
    }
    unexpectedClose(o) {
      throw this.input.error(
        "Unexpected }",
        { offset: o[2] },
        { offset: o[2] + 1 }
      );
    }
    unknownWord(o) {
      throw this.input.error(
        "Unknown word " + o[0][1],
        { offset: o[0][2] },
        { offset: o[0][2] + o[0][1].length }
      );
    }
    unnamedAtrule(o, f) {
      throw this.input.error(
        "At-rule without name",
        { offset: f[2] },
        { offset: f[2] + f[1].length }
      );
    }
  }
  return bo = d, bo;
}
var wo, Af;
function zl() {
  if (Af) return wo;
  Af = 1;
  let e = Kr(), t = Ai(), r = W1();
  function n(a, i) {
    let s = new t(a, i), l = new r(s);
    try {
      l.parse();
    } catch (d) {
      throw process.env.NODE_ENV !== "production" && d.name === "CssSyntaxError" && i && i.from && (/\.scss$/i.test(i.from) ? d.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(i.from) ? d.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(i.from) && (d.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), d;
    }
    return l.root;
  }
  return wo = n, n.default = n, e.registerParse(n), wo;
}
var xo, Ef;
function Oh() {
  if (Ef) return xo;
  Ef = 1;
  class e {
    constructor(r, n = {}) {
      if (this.type = "warning", this.text = r, n.node && n.node.source) {
        let a = n.node.rangeBy(n);
        this.line = a.start.line, this.column = a.start.column, this.endLine = a.end.line, this.endColumn = a.end.column;
      }
      for (let a in n) this[a] = n[a];
    }
    toString() {
      return this.node ? this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return xo = e, e.default = e, xo;
}
var So, Cf;
function Vl() {
  if (Cf) return So;
  Cf = 1;
  let e = Oh();
  class t {
    get content() {
      return this.css;
    }
    constructor(n, a, i) {
      this.processor = n, this.messages = [], this.root = a, this.opts = i, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(n, a = {}) {
      a.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (a.plugin = this.lastPlugin.postcssPlugin);
      let i = new e(n, a);
      return this.messages.push(i), i;
    }
    warnings() {
      return this.messages.filter((n) => n.type === "warning");
    }
  }
  return So = t, t.default = t, So;
}
var Ao, Of;
function kh() {
  if (Of) return Ao;
  Of = 1;
  let e = {};
  return Ao = function(r) {
    e[r] || (e[r] = !0, typeof console < "u" && console.warn && console.warn(r));
  }, Ao;
}
var Eo, kf;
function Ph() {
  if (kf) return Eo;
  kf = 1;
  let e = Kr(), t = jl(), r = Ch(), n = zl(), a = Vl(), i = da(), s = bi(), { isClean: l, my: d } = Bl(), u = kh();
  const o = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  }, f = {
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
  }, p = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
  }, h = 0;
  function m(O) {
    return typeof O == "object" && typeof O.then == "function";
  }
  function y(O) {
    let E = !1, C = o[O.type];
    return O.type === "decl" ? E = O.prop.toLowerCase() : O.type === "atrule" && (E = O.name.toLowerCase()), E && O.append ? [
      C,
      C + "-" + E,
      h,
      C + "Exit",
      C + "Exit-" + E
    ] : E ? [C, C + "-" + E, C + "Exit", C + "Exit-" + E] : O.append ? [C, h, C + "Exit"] : [C, C + "Exit"];
  }
  function g(O) {
    let E;
    return O.type === "document" ? E = ["Document", h, "DocumentExit"] : O.type === "root" ? E = ["Root", h, "RootExit"] : E = y(O), {
      eventIndex: 0,
      events: E,
      iterator: 0,
      node: O,
      visitorIndex: 0,
      visitors: []
    };
  }
  function v(O) {
    return O[l] = !1, O.nodes && O.nodes.forEach((E) => v(E)), O;
  }
  let b = {};
  class S {
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
    constructor(E, C, T) {
      this.stringified = !1, this.processed = !1;
      let F;
      if (typeof C == "object" && C !== null && (C.type === "root" || C.type === "document"))
        F = v(C);
      else if (C instanceof S || C instanceof a)
        F = v(C.root), C.map && (typeof T.map > "u" && (T.map = {}), T.map.inline || (T.map.inline = !1), T.map.prev = C.map);
      else {
        let N = n;
        T.syntax && (N = T.syntax.parse), T.parser && (N = T.parser), N.parse && (N = N.parse);
        try {
          F = N(C, T);
        } catch (R) {
          this.processed = !0, this.error = R;
        }
        F && !F[d] && e.rebuild(F);
      }
      this.result = new a(E, F, T), this.helpers = { ...b, postcss: b, result: this.result }, this.plugins = this.processor.plugins.map((N) => typeof N == "object" && N.prepare ? { ...N, ...N.prepare(this.result) } : N);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(E) {
      return this.async().catch(E);
    }
    finally(E) {
      return this.async().then(E, E);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(E, C) {
      let T = this.result.lastPlugin;
      try {
        if (C && C.addToError(E), this.error = E, E.name === "CssSyntaxError" && !E.plugin)
          E.plugin = T.postcssPlugin, E.setMessage();
        else if (T.postcssVersion && process.env.NODE_ENV !== "production") {
          let F = T.postcssPlugin, N = T.postcssVersion, R = this.result.processor.version, z = N.split("."), w = R.split(".");
          (z[0] !== w[0] || parseInt(z[1]) > parseInt(w[1])) && console.error(
            "Unknown error from PostCSS plugin. Your current PostCSS version is " + R + ", but " + F + " uses " + N + ". Perhaps this is the source of the error below."
          );
        }
      } catch (F) {
        console && console.error && console.error(F);
      }
      return E;
    }
    prepareVisitors() {
      this.listeners = {};
      let E = (C, T, F) => {
        this.listeners[T] || (this.listeners[T] = []), this.listeners[T].push([C, F]);
      };
      for (let C of this.plugins)
        if (typeof C == "object")
          for (let T in C) {
            if (!f[T] && /^[A-Z]/.test(T))
              throw new Error(
                `Unknown event ${T} in ${C.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!p[T])
              if (typeof C[T] == "object")
                for (let F in C[T])
                  F === "*" ? E(C, T, C[T][F]) : E(
                    C,
                    T + "-" + F.toLowerCase(),
                    C[T][F]
                  );
              else typeof C[T] == "function" && E(C, T, C[T]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let E = 0; E < this.plugins.length; E++) {
        let C = this.plugins[E], T = this.runOnRoot(C);
        if (m(T))
          try {
            await T;
          } catch (F) {
            throw this.handleError(F);
          }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let E = this.result.root;
        for (; !E[l]; ) {
          E[l] = !0;
          let C = [g(E)];
          for (; C.length > 0; ) {
            let T = this.visitTick(C);
            if (m(T))
              try {
                await T;
              } catch (F) {
                let N = C[C.length - 1].node;
                throw this.handleError(F, N);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [C, T] of this.listeners.OnceExit) {
            this.result.lastPlugin = C;
            try {
              if (E.type === "document") {
                let F = E.nodes.map(
                  (N) => T(N, this.helpers)
                );
                await Promise.all(F);
              } else
                await T(E, this.helpers);
            } catch (F) {
              throw this.handleError(F);
            }
          }
      }
      return this.processed = !0, this.stringify();
    }
    runOnRoot(E) {
      this.result.lastPlugin = E;
      try {
        if (typeof E == "object" && E.Once) {
          if (this.result.root.type === "document") {
            let C = this.result.root.nodes.map(
              (T) => E.Once(T, this.helpers)
            );
            return m(C[0]) ? Promise.all(C) : C;
          }
          return E.Once(this.result.root, this.helpers);
        } else if (typeof E == "function")
          return E(this.result.root, this.result);
      } catch (C) {
        throw this.handleError(C);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = !0, this.sync();
      let E = this.result.opts, C = s;
      E.syntax && (C = E.syntax.stringify), E.stringifier && (C = E.stringifier), C.stringify && (C = C.stringify);
      let F = new r(C, this.result.root, this.result.opts).generate();
      return this.result.css = F[0], this.result.map = F[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = !0, this.processing)
        throw this.getAsyncError();
      for (let E of this.plugins) {
        let C = this.runOnRoot(E);
        if (m(C))
          throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let E = this.result.root;
        for (; !E[l]; )
          E[l] = !0, this.walkSync(E);
        if (this.listeners.OnceExit)
          if (E.type === "document")
            for (let C of E.nodes)
              this.visitSync(this.listeners.OnceExit, C);
          else
            this.visitSync(this.listeners.OnceExit, E);
      }
      return this.result;
    }
    then(E, C) {
      return process.env.NODE_ENV !== "production" && ("from" in this.opts || u(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(E, C);
    }
    toString() {
      return this.css;
    }
    visitSync(E, C) {
      for (let [T, F] of E) {
        this.result.lastPlugin = T;
        let N;
        try {
          N = F(C, this.helpers);
        } catch (R) {
          throw this.handleError(R, C.proxyOf);
        }
        if (C.type !== "root" && C.type !== "document" && !C.parent)
          return !0;
        if (m(N))
          throw this.getAsyncError();
      }
    }
    visitTick(E) {
      let C = E[E.length - 1], { node: T, visitors: F } = C;
      if (T.type !== "root" && T.type !== "document" && !T.parent) {
        E.pop();
        return;
      }
      if (F.length > 0 && C.visitorIndex < F.length) {
        let [R, z] = F[C.visitorIndex];
        C.visitorIndex += 1, C.visitorIndex === F.length && (C.visitors = [], C.visitorIndex = 0), this.result.lastPlugin = R;
        try {
          return z(T.toProxy(), this.helpers);
        } catch (w) {
          throw this.handleError(w, T);
        }
      }
      if (C.iterator !== 0) {
        let R = C.iterator, z;
        for (; z = T.nodes[T.indexes[R]]; )
          if (T.indexes[R] += 1, !z[l]) {
            z[l] = !0, E.push(g(z));
            return;
          }
        C.iterator = 0, delete T.indexes[R];
      }
      let N = C.events;
      for (; C.eventIndex < N.length; ) {
        let R = N[C.eventIndex];
        if (C.eventIndex += 1, R === h) {
          T.nodes && T.nodes.length && (T[l] = !0, C.iterator = T.getIterator());
          return;
        } else if (this.listeners[R]) {
          C.visitors = this.listeners[R];
          return;
        }
      }
      E.pop();
    }
    walkSync(E) {
      E[l] = !0;
      let C = y(E);
      for (let T of C)
        if (T === h)
          E.nodes && E.each((F) => {
            F[l] || this.walkSync(F);
          });
        else {
          let F = this.listeners[T];
          if (F && this.visitSync(F, E.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return S.registerPostcss = (O) => {
    b = O;
  }, Eo = S, S.default = S, i.registerLazyResult(S), t.registerLazyResult(S), Eo;
}
var Co, Pf;
function G1() {
  if (Pf) return Co;
  Pf = 1;
  let e = Ch(), t = zl();
  const r = Vl();
  let n = bi(), a = kh();
  class i {
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
      let l, d = t;
      try {
        l = d(this._css, this._opts);
      } catch (u) {
        this.error = u;
      }
      if (this.error)
        throw this.error;
      return this._root = l, l;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(l, d, u) {
      d = d.toString(), this.stringified = !1, this._processor = l, this._css = d, this._opts = u, this._map = void 0;
      let o, f = n;
      this.result = new r(this._processor, o, this._opts), this.result.css = d;
      let p = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return p.root;
        }
      });
      let h = new e(f, o, this._opts, d);
      if (h.isMap()) {
        let [m, y] = h.generate();
        m && (this.result.css = m), y && (this.result.map = y);
      } else
        h.clearAnnotation(), this.result.css = h.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(l) {
      return this.async().catch(l);
    }
    finally(l) {
      return this.async().then(l, l);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(l, d) {
      return process.env.NODE_ENV !== "production" && ("from" in this._opts || a(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(l, d);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return Co = i, i.default = i, Co;
}
var Oo, _f;
function K1() {
  if (_f) return Oo;
  _f = 1;
  let e = jl(), t = Ph(), r = G1(), n = da();
  class a {
    constructor(s = []) {
      this.version = "8.5.3", this.plugins = this.normalize(s);
    }
    normalize(s) {
      let l = [];
      for (let d of s)
        if (d.postcss === !0 ? d = d() : d.postcss && (d = d.postcss), typeof d == "object" && Array.isArray(d.plugins))
          l = l.concat(d.plugins);
        else if (typeof d == "object" && d.postcssPlugin)
          l.push(d);
        else if (typeof d == "function")
          l.push(d);
        else if (typeof d == "object" && (d.parse || d.stringify)) {
          if (process.env.NODE_ENV !== "production")
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
        } else
          throw new Error(d + " is not a PostCSS plugin");
      return l;
    }
    process(s, l = {}) {
      return !this.plugins.length && !l.parser && !l.stringifier && !l.syntax ? new r(this, s, l) : new t(this, s, l);
    }
    use(s) {
      return this.plugins = this.plugins.concat(this.normalize([s])), this;
    }
  }
  return Oo = a, a.default = a, n.registerProcessor(a), e.registerProcessor(a), Oo;
}
var ko, Tf;
function Y1() {
  if (Tf) return ko;
  Tf = 1;
  let e = ql(), t = xi(), r = Kr(), n = Ml(), a = Si(), i = jl(), s = V1(), l = Ai(), d = Ph(), u = Eh(), o = wi(), f = zl(), p = K1(), h = Vl(), m = da(), y = Ul(), g = bi(), v = Oh();
  function b(...S) {
    return S.length === 1 && Array.isArray(S[0]) && (S = S[0]), new p(S);
  }
  return b.plugin = function(O, E) {
    let C = !1;
    function T(...N) {
      console && console.warn && !C && (C = !0, console.warn(
        O + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
        O + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
      ));
      let R = E(...N);
      return R.postcssPlugin = O, R.postcssVersion = new p().version, R;
    }
    let F;
    return Object.defineProperty(T, "postcss", {
      get() {
        return F || (F = T()), F;
      }
    }), T.process = function(N, R, z) {
      return b([T(z)]).process(N, R);
    }, T;
  }, b.stringify = g, b.parse = f, b.fromJSON = s, b.list = u, b.comment = (S) => new t(S), b.atRule = (S) => new e(S), b.decl = (S) => new a(S), b.rule = (S) => new y(S), b.root = (S) => new m(S), b.document = (S) => new i(S), b.CssSyntaxError = n, b.Declaration = a, b.Container = r, b.Processor = p, b.Document = i, b.Comment = t, b.Warning = v, b.AtRule = e, b.Result = h, b.Input = l, b.Rule = y, b.Root = m, b.Node = o, d.registerPostcss(b), ko = b, b.default = b, ko;
}
var J1 = Y1();
const _e = /* @__PURE__ */ sa(J1);
_e.stringify;
_e.fromJSON;
_e.plugin;
_e.parse;
_e.list;
_e.document;
_e.comment;
_e.atRule;
_e.rule;
_e.decl;
_e.root;
_e.CssSyntaxError;
_e.Declaration;
_e.Container;
_e.Processor;
_e.Document;
_e.Comment;
_e.Warning;
_e.AtRule;
_e.Result;
_e.Input;
_e.Rule;
_e.Root;
_e.Node;
const X1 = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, Q1 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, Z1 = { key: 0 }, ew = {
  key: 1,
  class: "ml-1"
}, tw = { class: "flex w-fit flex-wrap" }, rw = {
  key: 0,
  class: "font-semibold"
}, nw = { class: "mb-1" }, aw = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, iw = { class: "w-full break-words" }, sw = { class: "mb-1 flex flex-col" }, ow = { key: 1 }, aS = {
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
  setup(e) {
    const t = e;
    return (r, n) => {
      var a;
      return $(), B("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        U("div", X1, [
          t.itemId || t.timeStamp ? ($(), B("div", Q1, [
            t.itemId ? ($(), B(Ae, { key: 0 }, [
              t.itemId.routeName ? ($(), pe(Y(Mt), {
                key: 1,
                href: r.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: Ne(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? ($(), B(Ae, { key: 0 }, [
                    Te("#")
                  ], 64)) : Z("", !0),
                  Te(" " + re(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : ($(), B("span", Z1, [
                t.itemId.prefix || t.itemId.prefix == null ? ($(), B(Ae, { key: 0 }, [
                  Te("#")
                ], 64)) : Z("", !0),
                Te(" " + re(t.itemId.id), 1)
              ]))
            ], 64)) : Z("", !0),
            t.timeStamp ? ($(), B("span", ew, [
              t.itemId ? ($(), B(Ae, { key: 0 }, [
                Te("-")
              ], 64)) : Z("", !0),
              Te(" " + re(t.timeStamp), 1)
            ])) : Z("", !0)
          ])) : Z("", !0),
          U("div", tw, [
            ($(!0), B(Ae, null, Bt(e.pills, (i, s) => ($(), B(Ae, { key: s }, [
              i.text ? ($(), B("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Un({
                  backgroundColor: i.color ? i.color : null
                })
              }, re(i.text), 5)) : Z("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? ($(), B(Ae, { key: 0 }, [
          !t.title.routeName && !t.title.href ? ($(), B("p", rw, re(t.title.text), 1)) : ($(), pe(Y(Mt), {
            key: 1,
            href: t.title.href ? t.title.href : r.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: Ne(() => [
              Te(re(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Z("", !0),
        U("div", nw, [
          t.extraText ? ($(), B("p", aw, [
            n[0] || (n[0] = Te(" Engineer Note: ")),
            U("span", iw, re(t.extraText), 1)
          ])) : Z("", !0)
        ]),
        U("div", sw, [
          ($(!0), B(Ae, null, Bt(e.options, (i, s) => ($(), B(Ae, null, [
            !i.routeName && !i.href ? ($(), B("span", {
              key: 0,
              style: Un({ color: i.color ? i.color : "#000" })
            }, re(i.text), 5)) : ($(), pe(Y(Mt), {
              key: 1,
              href: i.href ? i.href : r.route(i.routeName, i.routeData),
              style: Un({ color: i.color ? i.color : "#000" })
            }, {
              default: Ne(() => [
                Te(re(i.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (a = t.amount) != null && a.amount ? ($(), B("div", ow, [
          U("span", null, re(t.amount.text + Y(O0)(t.amount.amount)), 1)
        ])) : Z("", !0),
        U("div", null, [
          Q(r.$slots, "default")
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
const Po = /* @__PURE__ */ (() => {
  const e = {};
  let t = 1;
  return {
    set(r, n, a) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: t
      }, t++), e[r[n].id] = a;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const a = r[n];
      return a.key === n ? e[a.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const a = r[n];
      a.key === n && (delete e[a.id], delete r[n]);
    }
  };
})(), Ga = {
  setData(e, t, r) {
    Po.set(e, t, r);
  },
  getData(e, t) {
    return Po.get(e, t);
  },
  removeData(e, t) {
    Po.delete(e, t);
  }
}, lw = 1e6, uw = 1e3, cl = "transitionend", cw = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), fw = (e) => {
  do
    e += Math.floor(Math.random() * lw);
  while (document.getElementById(e));
  return e;
}, _h = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let r = e.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), t = r && r !== "#" ? r.trim() : null;
  }
  return t;
}, Th = (e) => {
  const t = _h(e);
  return t && document.querySelector(t) ? t : null;
}, ea = (e) => {
  const t = _h(e);
  return t ? document.querySelector(t) : null;
}, dw = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e);
  const n = Number.parseFloat(t), a = Number.parseFloat(r);
  return !n && !a ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * uw);
}, hw = (e) => {
  e.dispatchEvent(new Event(cl));
}, Rh = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), fl = (e) => Rh(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, ni = (e, t, r) => {
  Object.keys(r).forEach((n) => {
    const a = r[n], i = t[n], s = i && Rh(i) ? "element" : cw(i);
    if (!new RegExp(a).test(s))
      throw new Error(
        `${e.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${a}".`
      );
  });
}, Ei = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), r = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && r.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, Ci = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", pw = (e) => {
  e.offsetHeight;
}, $h = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, _o = [], mw = (e) => {
  document.readyState === "loading" ? (_o.length || document.addEventListener("DOMContentLoaded", () => {
    _o.forEach((t) => t());
  }), _o.push(e)) : e();
}, Qt = () => document.documentElement.dir === "rtl", gw = (e) => document.createElement(e), Rf = (e) => {
  typeof e == "function" && e();
}, yw = (e, t, r = !0) => {
  if (!r) {
    Rf(e);
    return;
  }
  const n = 5, a = dw(t) + n;
  let i = !1;
  const s = ({ target: l }) => {
    l === t && (i = !0, t.removeEventListener(cl, s), Rf(e));
  };
  t.addEventListener(cl, s), setTimeout(() => {
    i || hw(t);
  }, a);
}, vw = /[^.]*(?=\..*)\.|.*/, bw = /\..*/, ww = /::\d+$/, To = {};
let $f = 1;
const xw = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Sw = /^(mouseenter|mouseleave)/i, Ih = /* @__PURE__ */ new Set([
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
function Dh(e, t) {
  return t && `${t}::${$f++}` || e.uidEvent || $f++;
}
function Fh(e) {
  const t = Dh(e);
  return e.uidEvent = t, To[t] = To[t] || {}, To[t];
}
function Aw(e, t) {
  return function r(n) {
    return n.delegateTarget = e, r.oneOff && Ce.off(e, n.type, t), t.apply(e, [n]);
  };
}
function Ew(e, t, r) {
  return function n(a) {
    const i = e.querySelectorAll(t);
    for (let { target: s } = a; s && s !== this; s = s.parentNode)
      for (let l = i.length; l--; "")
        if (i[l] === s)
          return a.delegateTarget = s, n.oneOff && Ce.off(e, a.type, r), r.apply(s, [a]);
    return null;
  };
}
function Lh(e, t, r = null) {
  const n = Object.keys(e);
  for (let a = 0, i = n.length; a < i; a++) {
    const s = e[n[a]];
    if (s.originalHandler === t && s.delegationSelector === r)
      return s;
  }
  return null;
}
function Nh(e, t, r) {
  const n = typeof t == "string", a = n ? r : t;
  let i = Mh(e);
  return Ih.has(i) || (i = e), [n, a, i];
}
function If(e, t, r, n, a) {
  if (typeof t != "string" || !e)
    return;
  if (r || (r = n, n = null), Sw.test(t)) {
    const h = (m) => function(y) {
      if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
        return m.call(this, y);
    };
    n ? n = h(n) : r = h(r);
  }
  const [i, s, l] = Nh(
    t,
    r,
    n
  ), d = Fh(e), u = d[l] || (d[l] = {}), o = Lh(
    u,
    s,
    i ? r : null
  );
  if (o) {
    o.oneOff = o.oneOff && a;
    return;
  }
  const f = Dh(
    s,
    t.replace(vw, "")
  ), p = i ? Ew(e, r, n) : Aw(e, r);
  p.delegationSelector = i ? r : null, p.originalHandler = s, p.oneOff = a, p.uidEvent = f, u[f] = p, e.addEventListener(l, p, i);
}
function dl(e, t, r, n, a) {
  const i = Lh(t[r], n, a);
  i && (e.removeEventListener(r, i, !!a), delete t[r][i.uidEvent]);
}
function Cw(e, t, r, n) {
  const a = t[r] || {};
  Object.keys(a).forEach((i) => {
    if (i.includes(n)) {
      const s = a[i];
      dl(
        e,
        t,
        r,
        s.originalHandler,
        s.delegationSelector
      );
    }
  });
}
function Mh(e) {
  return e = e.replace(bw, ""), xw[e] || e;
}
const Ce = {
  on(e, t, r, n) {
    If(e, t, r, n, !1);
  },
  one(e, t, r, n) {
    If(e, t, r, n, !0);
  },
  off(e, t, r, n) {
    if (typeof t != "string" || !e)
      return;
    const [a, i, s] = Nh(
      t,
      r,
      n
    ), l = s !== t, d = Fh(e), u = t.startsWith(".");
    if (typeof i < "u") {
      if (!d || !d[s])
        return;
      dl(
        e,
        d,
        s,
        i,
        a ? r : null
      );
      return;
    }
    u && Object.keys(d).forEach((f) => {
      Cw(
        e,
        d,
        f,
        t.slice(1)
      );
    });
    const o = d[s] || {};
    Object.keys(o).forEach((f) => {
      const p = f.replace(ww, "");
      if (!l || t.includes(p)) {
        const h = o[f];
        dl(
          e,
          d,
          s,
          h.originalHandler,
          h.delegationSelector
        );
      }
    });
  },
  trigger(e, t, r) {
    if (typeof t != "string" || !e)
      return null;
    const n = $h(), a = Mh(t), i = t !== a, s = Ih.has(a);
    let l, d = !0, u = !0, o = !1, f = null;
    return i && n && (l = n.Event(t, r), n(e).trigger(l), d = !l.isPropagationStopped(), u = !l.isImmediatePropagationStopped(), o = l.isDefaultPrevented()), s ? (f = document.createEvent("HTMLEvents"), f.initEvent(a, d, !0)) : f = new CustomEvent(t, {
      bubbles: d,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((p) => {
      Object.defineProperty(f, p, {
        get() {
          return r[p];
        }
      });
    }), o && f.preventDefault(), u && e.dispatchEvent(f), f.defaultPrevented && typeof l < "u" && l.preventDefault(), f;
  }
}, Ow = "5.1.3";
class Bh {
  constructor(t) {
    t = fl(t), t && (this._element = t, Ga.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Ga.removeData(this._element, this.constructor.DATA_KEY), Ce.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, r, n = !0) {
    yw(t, r, n);
  }
  /** Static */
  static getInstance(t) {
    return Ga.getData(fl(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, r = {}) {
    return this.getInstance(t) || new this(t, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return Ow;
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
function Ro(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function $o(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const we = {
  setDataAttribute(e, t, r) {
    e.setAttribute(`data-te-${$o(t)}`, r);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${$o(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = Ro(e.dataset[r]);
    }), t;
  },
  getDataClassAttributes(e) {
    if (!e)
      return {};
    const t = {
      ...e.dataset
    };
    return Object.keys(t).filter((r) => r.startsWith("teClass")).forEach((r) => {
      let n = r.replace(/^teClass/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = Ro(t[r]);
    }), t;
  },
  getDataAttribute(e, t) {
    return Ro(
      e.getAttribute(`data-te-${$o(t)}`)
    );
  },
  offset(e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  },
  style(e, t) {
    Object.assign(e.style, t);
  },
  toggleClass(e, t) {
    e && Io(t).forEach((r) => {
      e.classList.contains(r) ? e.classList.remove(r) : e.classList.add(r);
    });
  },
  addClass(e, t) {
    Io(t).forEach(
      (r) => !e.classList.contains(r) && e.classList.add(r)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((r) => {
      e.style[r] = t[r];
    });
  },
  removeClass(e, t) {
    Io(t).forEach(
      (r) => e.classList.contains(r) && e.classList.remove(r)
    );
  },
  hasClass(e, t) {
    return e.classList.contains(t);
  },
  maxOffset(e) {
    const t = e.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function Io(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const kw = 3, wt = {
  closest(e, t) {
    return e.closest(t);
  },
  matches(e, t) {
    return e.matches(t);
  },
  find(e, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, e)
    );
  },
  findOne(e, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, e);
  },
  children(e, t) {
    return [].concat(...e.children).filter((r) => r.matches(t));
  },
  parents(e, t) {
    const r = [];
    let n = e.parentNode;
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== kw; )
      this.matches(n, t) && r.push(n), n = n.parentNode;
    return r;
  },
  prev(e, t) {
    let r = e.previousElementSibling;
    for (; r; ) {
      if (r.matches(t))
        return [r];
      r = r.previousElementSibling;
    }
    return [];
  },
  next(e, t) {
    let r = e.nextElementSibling;
    for (; r; ) {
      if (this.matches(r, t))
        return [r];
      r = r.nextElementSibling;
    }
    return [];
  },
  focusableChildren(e) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((r) => `${r}:not([tabindex^="-"])`).join(", ");
    return this.find(t, e).filter(
      (r) => !Ci(r) && Ei(r)
    );
  }
};
Qt();
Qt();
Qt();
Qt();
Qt();
Qt();
const Do = "collapse", qh = "te.collapse", Oi = `.${qh}`, Df = {
  toggle: !0,
  parent: null
}, Pw = {
  toggle: "boolean",
  parent: "(null|element)"
}, _w = `show${Oi}`, Tw = `shown${Oi}`, Rw = `hide${Oi}`, $w = `hidden${Oi}`, Fo = "data-te-collapse-show", Ff = "data-te-collapse-collapsed", Ma = "data-te-collapse-collapsing", Iw = "data-te-collapse-horizontal", fn = "data-te-collapse-item", Lf = `:scope [${fn}] [${fn}]`, Dw = "width", Fw = "height", Lw = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Nf = "[data-te-collapse-init]", Nw = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, Mw = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class pn extends Bh {
  constructor(t, r, n) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const a = wt.find(Nf);
    for (let i = 0, s = a.length; i < s; i++) {
      const l = a[i], d = Th(l), u = wt.find(d).filter(
        (o) => o === this._element
      );
      d !== null && u.length && (this._selector = d, this._triggerArray.push(l));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Df;
  }
  static get NAME() {
    return Do;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], r;
    if (this._config.parent) {
      const d = wt.find(
        Lf,
        this._config.parent
      );
      t = wt.find(
        Lw,
        this._config.parent
      ).filter((u) => !d.includes(u));
    }
    const n = wt.findOne(this._selector);
    if (t.length) {
      const d = t.find((u) => n !== u);
      if (r = d ? pn.getInstance(d) : null, r && r._isTransitioning)
        return;
    }
    if (Ce.trigger(this._element, _w).defaultPrevented)
      return;
    t.forEach((d) => {
      n !== d && pn.getOrCreateInstance(d, { toggle: !1 }).hide(), r || Ga.setData(d, qh, null);
    });
    const a = this._getDimension(), i = a === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    we.removeClass(this._element, this._classes.visible), we.removeClass(this._element, this._classes.hidden), we.addClass(this._element, i), this._element.removeAttribute(fn), this._element.setAttribute(Ma, ""), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, we.removeClass(this._element, this._classes.hidden), we.removeClass(this._element, i), we.addClass(this._element, this._classes.visible), this._element.removeAttribute(Ma), this._element.setAttribute(fn, ""), this._element.setAttribute(Fo, ""), this._element.style[a] = "", Ce.trigger(this._element, Tw);
    }, l = `scroll${a[0].toUpperCase() + a.slice(1)}`;
    this._queueCallback(s, this._element, !0), this._element.style[a] = `${this._element[l]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || Ce.trigger(this._element, Rw).defaultPrevented)
      return;
    const t = this._getDimension(), r = t === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, pw(this._element), we.addClass(this._element, r), we.removeClass(this._element, this._classes.visible), we.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Ma, ""), this._element.removeAttribute(fn), this._element.removeAttribute(Fo);
    const n = this._triggerArray.length;
    for (let i = 0; i < n; i++) {
      const s = this._triggerArray[i], l = ea(s);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([s], !1);
    }
    this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, we.removeClass(this._element, r), we.addClass(this._element, this._classes.visible), we.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Ma), this._element.setAttribute(fn, ""), Ce.trigger(this._element, $w);
    };
    this._element.style[t] = "", this._queueCallback(a, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(Fo);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Df,
      ...we.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = fl(t.parent), ni(Do, t, Pw), t;
  }
  _getClasses(t) {
    const r = we.getDataClassAttributes(this._element);
    return t = {
      ...Nw,
      ...r,
      ...t
    }, ni(Do, t, Mw), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Iw) ? Dw : Fw;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = wt.find(
      Lf,
      this._config.parent
    );
    wt.find(Nf, this._config.parent).filter((r) => !t.includes(r)).forEach((r) => {
      const n = ea(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(t, r) {
    t.length && t.forEach((n) => {
      r ? n.removeAttribute(Ff) : n.setAttribute(`${Ff}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = {};
      typeof t == "string" && /show|hide/.test(t) && (r.toggle = !1);
      const n = pn.getOrCreateInstance(this, r);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
let Mf = [];
const Bw = (e, t = "hide") => {
  const r = `click.dismiss${e.EVENT_KEY}`, n = e.NAME;
  Mf.includes(n) || (Mf.push(n), Ce.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(a) {
      if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), Ci(this))
        return;
      const i = ea(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      i && e.getOrCreateInstance(i)[t]();
    }
  ));
}, Lo = "alert", qw = "te.alert", jh = `.${qw}`, jw = `close${jh}`, Uw = `closed${jh}`, Ln = "data-te-alert-show", zw = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Bf = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, Vw = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, Hw = {
  fadeIn: "string",
  fadeOut: "string"
};
class ai extends Bh {
  constructor(t, r, n) {
    super(t), this._element = t, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return zw;
  }
  static get Default() {
    return Bf;
  }
  static get NAME() {
    return Lo;
  }
  // Public
  close() {
    if (Ce.trigger(this._element, jw).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, we.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Ln), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Ln) && (we.removeClass(this._element, "hidden"), we.addClass(this._element, "block"), Ei(this._element))) {
        const t = (r) => {
          we.removeClass(this._element, "hidden"), we.addClass(this._element, "block"), Ce.off(r.target, "animationend", t);
        };
        this._element.setAttribute(Ln, ""), Ce.on(this._element, "animationend", t);
      }
      this._config.animation && (we.removeClass(this._element, this._classes.fadeOut), we.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Ln)) {
      this._element.removeAttribute(Ln);
      const t = (r) => {
        we.addClass(this._element, "hidden"), we.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), Ce.off(r.target, "animationend", t);
      };
      Ce.on(this._element, "animationend", t), we.removeClass(this._element, this._classes.fadeIn), we.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (Bw(ai, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...Bf,
      ...we.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, ni(Lo, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const r = we.getDataClassAttributes(this._element);
    return t = {
      ...Vw,
      ...r,
      ...t
    }, ni(Lo, t, Hw), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), Ce.trigger(this._element, Uw), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = ai.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (r[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        r[t](this);
      }
    });
  }
}
Qt(), Qt();
(() => {
  var e = { 454: (n, a, i) => {
    i.d(a, { Z: () => d });
    var s = i(645), l = i.n(s)()(function(u) {
      return u[1];
    });
    l.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const d = l;
  }, 645: (n) => {
    n.exports = function(a) {
      var i = [];
      return i.toString = function() {
        return this.map(function(s) {
          var l = a(s);
          return s[2] ? "@media ".concat(s[2], " {").concat(l, "}") : l;
        }).join("");
      }, i.i = function(s, l, d) {
        typeof s == "string" && (s = [[null, s, ""]]);
        var u = {};
        if (d)
          for (var o = 0; o < this.length; o++) {
            var f = this[o][0];
            f != null && (u[f] = !0);
          }
        for (var p = 0; p < s.length; p++) {
          var h = [].concat(s[p]);
          d && u[h[0]] || (l && (h[2] ? h[2] = "".concat(l, " and ").concat(h[2]) : h[2] = l), i.push(h));
        }
      }, i;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var n = new window.CustomEvent("test", { cancelable: !0 });
          if (n.preventDefault(), n.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var a = function(i, s) {
            var l, d;
            return (s = s || {}).bubbles = !!s.bubbles, s.cancelable = !!s.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(i, s.bubbles, s.cancelable, s.detail), d = l.preventDefault, l.preventDefault = function() {
              d.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          a.prototype = window.Event.prototype, window.CustomEvent = a;
        }
    })();
  }, 379: (n, a, i) => {
    var s, l = /* @__PURE__ */ function() {
      var S = {};
      return function(O) {
        if (S[O] === void 0) {
          var E = document.querySelector(O);
          if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement)
            try {
              E = E.contentDocument.head;
            } catch {
              E = null;
            }
          S[O] = E;
        }
        return S[O];
      };
    }(), d = [];
    function u(S) {
      for (var O = -1, E = 0; E < d.length; E++)
        if (d[E].identifier === S) {
          O = E;
          break;
        }
      return O;
    }
    function o(S, O) {
      for (var E = {}, C = [], T = 0; T < S.length; T++) {
        var F = S[T], N = O.base ? F[0] + O.base : F[0], R = E[N] || 0, z = "".concat(N, " ").concat(R);
        E[N] = R + 1;
        var w = u(z), k = { css: F[1], media: F[2], sourceMap: F[3] };
        w !== -1 ? (d[w].references++, d[w].updater(k)) : d.push({ identifier: z, updater: b(k, O), references: 1 }), C.push(z);
      }
      return C;
    }
    function f(S) {
      var O = document.createElement("style"), E = S.attributes || {};
      if (E.nonce === void 0) {
        var C = i.nc;
        C && (E.nonce = C);
      }
      if (Object.keys(E).forEach(function(F) {
        O.setAttribute(F, E[F]);
      }), typeof S.insert == "function")
        S.insert(O);
      else {
        var T = l(S.insert || "head");
        if (!T)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        T.appendChild(O);
      }
      return O;
    }
    var p, h = (p = [], function(S, O) {
      return p[S] = O, p.filter(Boolean).join(`
`);
    });
    function m(S, O, E, C) {
      var T = E ? "" : C.media ? "@media ".concat(C.media, " {").concat(C.css, "}") : C.css;
      if (S.styleSheet)
        S.styleSheet.cssText = h(O, T);
      else {
        var F = document.createTextNode(T), N = S.childNodes;
        N[O] && S.removeChild(N[O]), N.length ? S.insertBefore(F, N[O]) : S.appendChild(F);
      }
    }
    function y(S, O, E) {
      var C = E.css, T = E.media, F = E.sourceMap;
      if (T ? S.setAttribute("media", T) : S.removeAttribute("media"), F && typeof btoa < "u" && (C += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(F)))), " */")), S.styleSheet)
        S.styleSheet.cssText = C;
      else {
        for (; S.firstChild; )
          S.removeChild(S.firstChild);
        S.appendChild(document.createTextNode(C));
      }
    }
    var g = null, v = 0;
    function b(S, O) {
      var E, C, T;
      if (O.singleton) {
        var F = v++;
        E = g || (g = f(O)), C = m.bind(null, E, F, !1), T = m.bind(null, E, F, !0);
      } else
        E = f(O), C = y.bind(null, E, O), T = function() {
          (function(N) {
            if (N.parentNode === null)
              return !1;
            N.parentNode.removeChild(N);
          })(E);
        };
      return C(S), function(N) {
        if (N) {
          if (N.css === S.css && N.media === S.media && N.sourceMap === S.sourceMap)
            return;
          C(S = N);
        } else
          T();
      };
    }
    n.exports = function(S, O) {
      (O = O || {}).singleton || typeof O.singleton == "boolean" || (O.singleton = (s === void 0 && (s = !!(window && document && document.all && !window.atob)), s));
      var E = o(S = S || [], O);
      return function(C) {
        if (C = C || [], Object.prototype.toString.call(C) === "[object Array]") {
          for (var T = 0; T < E.length; T++) {
            var F = u(E[T]);
            d[F].references--;
          }
          for (var N = o(C, O), R = 0; R < E.length; R++) {
            var z = u(E[R]);
            d[z].references === 0 && (d[z].updater(), d.splice(z, 1));
          }
          E = N;
        }
      };
    };
  } }, t = {};
  function r(n) {
    var a = t[n];
    if (a !== void 0)
      return a.exports;
    var i = t[n] = { id: n, exports: {} };
    return e[n](i, i.exports, r), i.exports;
  }
  r.n = (n) => {
    var a = n && n.__esModule ? () => n.default : () => n;
    return r.d(a, { a }), a;
  }, r.d = (n, a) => {
    for (var i in a)
      r.o(a, i) && !r.o(n, i) && Object.defineProperty(n, i, { enumerable: !0, get: a[i] });
  }, r.o = (n, a) => Object.prototype.hasOwnProperty.call(n, a), (() => {
    var n = r(379), a = r.n(n), i = r(454);
    function s(d) {
      if (!d.hasAttribute("autocompleted")) {
        d.setAttribute("autocompleted", "");
        var u = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        d.dispatchEvent(u) || (d.value = "");
      }
    }
    function l(d) {
      d.hasAttribute("autocompleted") && (d.removeAttribute("autocompleted"), d.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    a()(i.Z, { insert: "head", singleton: !1 }), i.Z.locals, r(810), document.addEventListener("animationstart", function(d) {
      d.animationName === "onautofillstart" ? s(d.target) : l(d.target);
    }, !0), document.addEventListener("input", function(d) {
      d.inputType !== "insertReplacementText" && "data" in d ? l(d.target) : s(d.target);
    }, !0);
  })();
})();
Qt();
Qt();
fw("chips-input-");
const wr = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, Ww = {
  line: {
    options: {
      ...wr,
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
      ...wr,
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
      ...wr,
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
      ...wr,
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
      ...wr,
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
      ...wr,
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
      ...wr,
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
      ...wr,
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
var ki = function(e) {
  this.element = e, this.handlers = {};
}, Uh = { isEmpty: { configurable: !0 } };
ki.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
ki.prototype.unbind = function(e, t) {
  var r = this;
  this.handlers[e] = this.handlers[e].filter(function(n) {
    return t && n !== t ? !0 : (r.element.removeEventListener(e, n, !1), !1);
  });
};
ki.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
Uh.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(ki.prototype, Uh);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style;
gw("div");
const Gw = (e) => {
  mw(() => {
    const t = $h();
    if (t) {
      const r = e.NAME, n = t.fn[r];
      t.fn[r] = e.jQueryInterface, t.fn[r].Constructor = e, t.fn[r].noConflict = () => (t.fn[r] = n, e.jQueryInterface);
    }
  });
}, Kw = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      r.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, Yw = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ci(this) && e.getOrCreateInstance(this).show();
    }
  );
}, Jw = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      const n = ea(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ci(this))
        return;
      Ce.one(n, e.EVENT_HIDDEN, () => {
        Ei(this) && this.focus();
      });
      const a = wt.findOne(e.OPEN_SELECTOR);
      a && a !== n && e.getInstance(a).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, Xw = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(t);
      e.getOrCreateInstance(n).toggle();
    }
  );
}, Qw = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      const n = ea(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ce.one(n, e.EVENT_SHOW, (i) => {
        i.defaultPrevented || Ce.one(n, e.EVENT_HIDDEN, () => {
          Ei(this) && this.focus();
        });
      });
      const a = wt.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      a && e.getInstance(a).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, Zw = (e, t) => {
  Ce.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, ex = (e, t) => {
  Ce.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = Th(this);
      wt.find(n).forEach((a) => {
        e.getOrCreateInstance(a, { toggle: !1 }).toggle();
      });
    }
  );
}, tx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, rx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, nx = (e, t) => {
  wt.find(t).forEach((r) => {
    new e(r);
  }), Ce.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, ax = (e, t) => {
  const r = (i) => i[0] === "{" && i[i.length - 1] === "}" || i[0] === "[" && i[i.length - 1] === "]", n = (i) => typeof i != "string" ? i : r(i) ? JSON.parse(i.replace(/'/g, '"')) : i, a = (i) => {
    const s = {};
    return Object.keys(i).forEach((l) => {
      if (l.match(/dataset.*/)) {
        const d = l.slice(7, 8).toLowerCase().concat(l.slice(8));
        s[d] = n(i[l]);
      }
    }), s;
  };
  wt.find(t).forEach((i) => {
    if (we.getDataAttribute(i, "chart") !== "bubble" && we.getDataAttribute(i, "chart") !== "scatter") {
      const s = we.getDataAttributes(i), l = {
        data: {
          datasets: [a(s)]
        }
      };
      return s.chart && (l.type = s.chart), s.labels && (l.data.labels = JSON.parse(s.labels.replace(/'/g, '"'))), new e(i, {
        ...l,
        ...Ww[l.type]
      });
    }
    return null;
  });
};
class ix {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
}
const hl = new ix(), jn = {
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
    advanced: ax
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: Xw
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: ex
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: Kw
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: Qw
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: Zw
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: Jw
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: Yw
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: tx
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: rx
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: nx
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, sx = (e) => jn[e.NAME] || null, ox = (e, t) => {
  if (!e || !t.allowReinits && hl.isInited(e.NAME))
    return;
  hl.add(e.NAME);
  const r = sx(e), n = (r == null ? void 0 : r.isToggler) || !1;
  if (Gw(e), r != null && r.advanced) {
    r == null || r.advanced(e, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(e, r == null ? void 0 : r.selector);
    return;
  }
  wt.find(r == null ? void 0 : r.selector).forEach((a) => {
    let i = e.getInstance(a);
    i || (i = new e(a), r != null && r.onInit && i[r.onInit]());
  });
}, lx = (e, t) => {
  e.forEach((r) => ox(r, t));
}, ux = {
  allowReinits: !1,
  checkOtherImports: !1
}, cx = (e, t = {}) => {
  t = { ...ux, ...t };
  const r = Object.keys(jn).map((n) => {
    if (document.querySelector(jn[n].selector)) {
      const a = e[jn[n].name];
      return !a && !hl.isInited(n) && t.checkOtherImports && console.warn(
        `Please import ${jn[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), a;
    }
  });
  lx(r, t);
}, fx = { role: "alert" }, dx = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, iS = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return kt(() => {
      cx({ Alert: ai });
    }), (t, r) => ($(), B("div", fx, [
      U("div", null, [
        U("div", dx, [
          Q(t.$slots, "default"),
          r[0] || (r[0] = U("button", {
            type: "button",
            class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-hidden",
            "data-te-alert-dismiss": "",
            "aria-label": "Close"
          }, [
            U("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
              U("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                class: "h-6 w-6"
              }, [
                U("path", {
                  "fill-rule": "evenodd",
                  d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
                  "clip-rule": "evenodd"
                })
              ])
            ])
          ], -1))
        ])
      ])
    ]));
  }
}, hx = ["aria-controls"], px = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, mx = ["id"], gx = {
  __name: "CollapsableSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    },
    headerColor: {
      type: String
    }
  },
  setup(e) {
    const t = e, r = de(null), n = de(null), a = de(t.open);
    kt(() => {
      n.value = new pn(r.value, {
        toggle: t.open
      });
    });
    const i = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (s, l) => ($(), B("div", {
      class: te(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !e.header }])
    }, [
      U("div", {
        class: te(["bg-white sm:rounded-lg", { "p-1": !e.header }])
      }, [
        U("div", {
          onClick: i,
          class: "focusable block! rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          style: Un({ backgroundColor: e.headerColor })
        }, [
          Te(re(e.header) + " ", 1),
          U("button", px, re(a.value ? "Hide" : "Show"), 1)
        ], 12, hx),
        U("div", {
          class: "visible! hidden overflow-hidden",
          id: e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          U("div", {
            class: te([{ "px-4 pb-2": e.header }, "mt-2"])
          }, [
            Q(s.$slots, "default")
          ], 2)
        ], 8, mx)
      ], 2)
    ], 2));
  }
}, yx = { class: "relative" }, sS = {
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
  setup(e) {
    const t = e, r = (s) => {
      i.value && s.key === "Escape" && (i.value = !1);
    };
    kt(() => document.addEventListener("keydown", r)), yn(() => document.removeEventListener("keydown", r));
    const n = fe(() => isNaN(parseInt(t.width)) ? t.width : "w-" + t.width), a = fe(() => t.align === "left" ? "origin-top-left left-0" : t.align === "right" ? "origin-top-right right-0" : "origin-top"), i = de(!1);
    return (s, l) => ($(), B("div", yx, [
      U("div", {
        onClick: l[0] || (l[0] = (d) => i.value = !i.value)
      }, [
        Q(s.$slots, "trigger")
      ]),
      xt(U("div", {
        class: "fixed inset-0 z-40",
        onClick: l[1] || (l[1] = (d) => i.value = !1)
      }, null, 512), [
        [Er, i.value]
      ]),
      Le(zr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: Ne(() => [
          xt(U("div", {
            class: te(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, a.value]]),
            style: { display: "none" },
            onClick: l[2] || (l[2] = (d) => i.value = !1)
          }, [
            U("div", {
              class: te(["rounded ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              Q(s.$slots, "content")
            ], 2)
          ], 2), [
            [Er, i.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, oS = {
  __name: "DropdownLink",
  setup(e) {
    return (t, r) => ($(), pe(Y(Mt), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden" }, {
      default: Ne(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, vx = ["href", "target"], lS = {
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
  setup(e) {
    const t = e, r = () => t.disabled ? [...t.colourClasses, ["opacity-50", "pointer-events-none"]] : t.colourClasses;
    return (n, a) => e.href && (e.method || e.data) ? ($(), pe(Y(Mt), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: te(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: Ne(() => [
        Q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : ($(), B("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: te(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      Q(n.$slots, "default")
    ], 10, vx));
  }
}, bx = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, wx = ["id"], xx = ["aria-labelledby"], uS = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(e) {
    return (t, r) => ($(), B("div", bx, [
      U("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: e.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        Te(re(e.title) + " ", 1),
        r[0] || (r[0] = U("span", { class: "mx-1 w-2" }, [
          U("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            class: "h-5 w-5"
          }, [
            U("path", {
              "fill-rule": "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ], 8, wx),
      U("ul", {
        class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 data-te-dropdown-show:block",
        "aria-labelledby": e.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        Q(t.$slots, "default")
      ], 8, xx)
    ]));
  }
}, Sx = ["href"], cS = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, r) => ($(), B("li", null, [
      U("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href,
        "data-te-dropdown-item-ref": ""
      }, re(e.title), 9, Sx)
    ]));
  }
}, fS = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, r) => ($(), pe(Y(gx), { header: e.header }, {
      default: Ne(() => [
        Le(Y(Mx), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, Ax = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, Ex = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, Cx = {
  key: 0,
  class: "text-center"
}, Ox = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, kx = { class: "flex-start w-full md:flex" }, Px = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, _x = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, Tx = { class: "mb-1 flex justify-between" }, Rx = { class: "text-sm text-neutral-500" }, $x = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, Ix = {
  key: 1,
  class: "text-sm text-primary-500"
}, Dx = { class: "text-sm text-neutral-500" }, Fx = { class: "font-medium" }, Lx = {
  key: 0,
  class: "line-through"
}, Nx = ["innerHTML"], Mx = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return aa.add(tg, Xo, ng, Qm, rg), (t, r) => e.logs == null ? ($(), B("div", Ax, [
      Le(Y(Hh))
    ])) : ($(), B("div", Ex, [
      e.logs.total ? ($(), B("ol", Ox, [
        ($(!0), B(Ae, null, Bt(e.logs.data, (n) => ($(), B("li", {
          key: n.id
        }, [
          U("div", kx, [
            U("div", Px, [
              Le(Y(Yt), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            U("div", _x, [
              U("div", Tx, [
                U("span", Rx, [
                  Te(re(n.event_formatted) + " ", 1),
                  n.reference ? ($(), B("span", $x, re(n.reference), 1)) : Z("", !0),
                  n.causer ? ($(), B(Ae, { key: 1 }, [
                    n.causer.id ? ($(), pe(Y(Mt), {
                      key: 0,
                      href: t.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: Ne(() => [
                        Te(" (" + re(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : ($(), B("span", Ix, "(" + re(n.causer.first_name) + ")", 1))
                  ], 64)) : Z("", !0)
                ]),
                U("span", Dx, re(n.created_date_full), 1)
              ]),
              ($(!0), B(Ae, null, Bt(n.changes_formatted, (a, i) => ($(), B("p", {
                key: i,
                class: "mb-0 text-neutral-700"
              }, [
                U("span", Fx, re(i) + ":", 1),
                a.old ? ($(), B("span", Lx, re(a.old), 1)) : Z("", !0),
                Te(" " + re(a.new), 1)
              ]))), 128)),
              n.description_details ? ($(), B("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, Nx)) : Z("", !0)
            ])
          ])
        ]))), 128))
      ])) : ($(), B("p", Cx, "No Data")),
      e.logs.links ? ($(), pe(Y(zh), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Z("", !0)
    ]));
  }
}, dS = {
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
    },
    alignCenter: {
      type: Boolean,
      default: !1
    },
    showBorder: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = t;
    Ar(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      r.closeable && n("close");
    }, i = (l) => {
      l.key === "Escape" && r.show && a();
    };
    kt(() => document.addEventListener("keydown", i)), yn(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = null;
    });
    const s = fe(() => {
      let l = [];
      return l.push(
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
      ), r.hideOverflow && l.push("overflow-hidden"), l.join(" ");
    });
    return (l, d) => ($(), pe(ep, { to: "body" }, [
      Le(zr, { "leave-active-class": "duration-200" }, {
        default: Ne(() => [
          xt(U("div", {
            class: te(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Le(zr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ne(() => [
                xt(U("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, d[0] || (d[0] = [
                  U("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1)
                ]), 512), [
                  [Er, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Le(zr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: Ne(() => [
                xt(U("div", {
                  class: te(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", s.value + (e.showBorder ? " border-pink rounded-md border-2 border-solid" : "")])
                }, [
                  e.show ? Q(l.$slots, "default", { key: 0 }) : Z("", !0)
                ], 2), [
                  [Er, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Er, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, Bx = { class: "ml-3 flex-1 whitespace-nowrap" }, hS = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, r = fe(
      () => t.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, a) => ($(), pe(Y(Mt), {
      href: e.href,
      class: te(r.value)
    }, {
      default: Ne(() => [
        Q(n.$slots, "icon"),
        U("span", Bx, [
          Q(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, qx = {
  key: 0,
  class: "flex justify-center"
}, jx = { "aria-label": "Page navigation" }, Ux = ["innerHTML"], zx = ["innerHTML", "onClick"], zh = {
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
    },
    customLinkClass: {
      type: String,
      default: ""
    },
    customActiveLinkClass: {
      type: String,
      default: ""
    },
    customListClass: {
      type: String,
      default: ""
    },
    preserveScroll: {
      type: Boolean,
      default: !1
    },
    preserveState: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Array,
      default: []
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = t, n = e, a = fe(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const s = n.links[0], l = n.links[n.links.length - 1], d = n.links.findIndex((f) => f.active);
      let u = Math.max(1, d - Math.floor(n.maxPagesToShow / 2)), o = Math.min(n.links.length - 2, u + n.maxPagesToShow - 1);
      return o - u < n.maxPagesToShow - 1 && (u = Math.max(1, o - n.maxPagesToShow + 1)), [s, ...n.links.slice(u, o + 1), l];
    }), i = (s) => {
      r("change", s);
    };
    return (s, l) => a.value.length > 3 ? ($(), B("div", qx, [
      U("nav", jx, [
        U("ul", {
          class: te(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          ($(!0), B(Ae, null, Bt(a.value, (d, u) => ($(), B("li", { key: u }, [
            e.linkReturn ? ($(), B(Ae, { key: 0 }, [
              d.url === null ? ($(), B("button", {
                key: 0,
                class: te(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: l[0] || (l[0] = (o) => i(""))
              }, null, 10, Ux)) : ($(), B("button", {
                key: 1,
                class: te(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": d.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: d.active && e.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (o) => i(d.url)
              }, null, 10, zx))
            ], 64)) : ($(), B(Ae, { key: 1 }, [
              d.url === null ? ($(), pe(Y(Mt), {
                key: 0,
                class: te(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : ($(), pe(Y(Mt), {
                key: 1,
                class: te(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": d.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: d.active && e.customActiveLinkClass
                }]),
                href: d.url,
                innerHTML: d.label,
                preserveScroll: e.preserveScroll || e.logs,
                preserveState: e.preserveState || e.logs,
                only: e.logs ? ["logs"] : e.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])
    ])) : Z("", !0);
  }
}, Vx = ["type", "disabled"], Vh = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(e) {
    return (t, r) => ($(), B("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Q(t.$slots, "default")
    ], 8, Vx));
  }
}, Hx = ["type", "disabled"], pS = {
  __name: "DangerButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, r) => ($(), B("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Q(t.$slots, "default")
    ], 8, Hx));
  }
}, mS = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, r = fe(
      () => t.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, a) => ($(), pe(Y(Mt), {
      href: e.href,
      class: te(r.value)
    }, {
      default: Ne(() => [
        Q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, Wx = ["type"], gS = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, r) => ($(), B("button", {
      type: e.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      Q(t.$slots, "default")
    ], 8, Wx));
  }
}, Gx = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, Kx = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, yS = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, r) => ($(), B("div", {
      class: te(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      U("div", {
        class: te(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? ($(), B("div", Gx, [
          U("span", null, re(e.header), 1),
          t.$slots.headerButton ? ($(), B("div", Kx, [
            Q(t.$slots, "headerButton")
          ])) : Z("", !0)
        ])) : Z("", !0),
        U("div", {
          class: te({ "px-4 pb-2": e.header })
        }, [
          Q(t.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, Yx = {}, Jx = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function Xx(e, t) {
  return $(), B("div", Jx, t[0] || (t[0] = [
    U("span", { class: "absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!" }, "Loading...", -1)
  ]));
}
const Hh = /* @__PURE__ */ bn(Yx, [["render", Xx]]), Qx = ["onClick"], Zx = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, vS = {
  __name: "Stats",
  props: {
    stats: Object,
    statusName: {
      type: String,
      default: null
    },
    customContainerClass: {
      type: String,
      default: ""
    },
    customStatClass: {
      type: String,
      default: ""
    },
    customStatLabelClass: {
      type: String,
      default: ""
    },
    customStatValueClass: {
      type: String,
      default: ""
    }
  },
  setup(e, { emit: t }) {
    const r = t, n = e, a = (s) => {
      i(s) && (s = null), r("updateSearch", s);
    }, i = (s) => n.statusName != null ? route().params[n.statusName] == s : route().params.status == s;
    return (s, l) => ($(), B("div", null, [
      U("div", {
        class: te(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        ($(!0), B(Ae, null, Bt(e.stats, (d) => ($(), B("div", {
          class: te(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": i(d.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (u) => a(d.name),
          key: d.value
        }, [
          U("div", null, [
            U("div", Zx, [
              U("h5", {
                class: te(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, re(d.value), 3)
            ])
          ]),
          U("div", {
            class: te(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, re(d.label ?? d.name), 3)
        ], 10, Qx))), 128))
      ], 2)
    ]));
  }
}, bS = {
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
    required: Boolean,
    // ajax specific props
    url: {
      type: String,
      required: !0
    },
    queryParams: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var y;
    const r = e, n = t, a = de([]), i = de(1), s = de(!0), l = de(0), d = de(""), u = de(((y = r.form) == null ? void 0 : y[r.field]) || r.modelValue), o = de(u.value), f = de(null), p = (g) => {
      o.value = u.value, u.value = g, n("update:modelValue", g), g || (h(""), f.value = null);
    }, h = (g) => {
      g == "" && u.value && u.value !== o.value || (i.value = 1, l.value = 0, d.value = g, m());
    }, m = async (g = !1) => {
      const v = new URLSearchParams();
      v.append("term", d.value), v.append("page", i.value), r.queryParams && Object.keys(r.queryParams).forEach((O) => {
        v.append(O, r.queryParams[O]);
      }), g && u.value && v.append("ajax_id", u.value);
      const S = await (await fetch(`${r.url}?${v.toString()}`)).json();
      if (s.value = S.current_page < S.last_page, i.value === 1) {
        if (a.value = S.data, u.value) {
          const O = a.value.find((E) => E[r.optionValue] == u.value);
          f.value = O ? O[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(S.data);
    };
    return kt(() => {
      m(!0);
      const g = document.getElementById(r.id).parentNode.querySelector(".menu");
      g == null || g.addEventListener(
        "scroll",
        (v) => {
          v.target.scrollTop > l.value && v.target.scrollTop + v.target.clientHeight >= v.target.scrollHeight && s.value && (i.value++, m());
        },
        {
          passive: !0
        }
      );
    }), (g, v) => ($(), pe(Y(yy), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: f.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": v[0] || (v[0] = (b) => p(b)),
      onSearchchange: h,
      filterPredicate: (b, S) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
}, e2 = ["id", "aria-controls"], t2 = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, r2 = ["id"], n2 = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, r = de(null), n = de(null), a = de(t.show);
    kt(() => {
      n.value = new pn(r.value, {
        toggle: t.show
      });
    });
    const i = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (s, l) => ($(), B("li", null, [
      U("button", {
        id: e.name,
        onClick: i,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": e.name ? e.name.replaceAll(" ", "_") : "collapsable"
      }, [
        Q(s.$slots, "icon", {}, void 0, !0),
        U("span", t2, re(e.name), 1),
        l[0] || (l[0] = U("svg", {
          class: "h-3 w-3 transform",
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 10 6"
        }, [
          U("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 1 4 4 4-4"
          })
        ], -1))
      ], 8, e2),
      U("ul", {
        class: "visible! hidden space-y-1 px-4",
        id: e.name ? e.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        Q(s.$slots, "default", {}, void 0, !0)
      ], 8, r2)
    ]));
  }
}, wS = /* @__PURE__ */ bn(n2, [["__scopeId", "data-v-10854c7c"]]), a2 = {}, i2 = { class: "border-t border-gray-100" }, s2 = { class: "divide-y divide-gray-100" };
function o2(e, t) {
  return $(), B("div", i2, [
    U("dl", s2, [
      Q(e.$slots, "default")
    ])
  ]);
}
const xS = /* @__PURE__ */ bn(a2, [["render", o2]]), l2 = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, u2 = { class: "flex items-center text-sm font-medium" }, c2 = {
  key: 0,
  class: "ml-1 text-red-500"
}, f2 = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, d2 = { class: "flex min-h-full items-center" }, h2 = { class: "grow slot-content" }, p2 = { class: "ml-4 shrink-0" }, m2 = { class: "grow slot-edit" }, g2 = { class: "ml-4 shrink-0" }, SS = {
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
    },
    forceEditing: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    aa.add(Xo, Su);
    const t = e, r = de(t.editable ? t.forceEditing : !1), n = () => {
      t.editable && (r.value = !r.value);
    };
    return Ar(() => t.forceEditing, (a) => {
      t.editable && (r.value = a);
    }), (a, i) => ($(), B("div", l2, [
      U("dt", u2, [
        Te(re(e.label) + " ", 1),
        Q(a.$slots, "label"),
        e.required ? ($(), B("span", c2, "*")) : Z("", !0)
      ]),
      U("dd", f2, [
        U("div", d2, [
          r.value ? ($(), B(Ae, { key: 1 }, [
            U("div", m2, [
              Q(a.$slots, "edit")
            ]),
            U("span", g2, [
              U("button", {
                type: "button",
                onClick: n,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                Le(Y(Yt), { icon: Y(Su) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : ($(), B(Ae, { key: 0 }, [
            U("div", h2, [
              Q(a.$slots, "default"),
              Te(" " + re(e.value), 1)
            ]),
            U("span", p2, [
              e.editable ? ($(), B("button", {
                key: 0,
                type: "button",
                onClick: n,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                Le(Y(Yt), { icon: Y(Xo) }, null, 8, ["icon"])
              ])) : Z("", !0),
              Q(a.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var No = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var qf;
function y2() {
  return qf || (qf = 1, function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
      a.JS_MD5_NO_WINDOW && (n = !1);
      var i = !n && typeof self == "object", s = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? a = Nt : i && (a = self);
      var l = !a.JS_MD5_NO_COMMON_JS && !0 && e.exports, d = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), o = [128, 32768, 8388608, -2147483648], f = [0, 8, 16, 24], p = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], y;
      if (d) {
        var g = new ArrayBuffer(68);
        y = new Uint8Array(g), m = new Uint32Array(g);
      }
      var v = Array.isArray;
      (a.JS_MD5_NO_NODE_JS || !v) && (v = function(w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      });
      var b = ArrayBuffer.isView;
      d && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !b) && (b = function(w) {
        return typeof w == "object" && w.buffer && w.buffer.constructor === ArrayBuffer;
      });
      var S = function(w) {
        var k = typeof w;
        if (k === "string")
          return [w, !0];
        if (k !== "object" || w === null)
          throw new Error(t);
        if (d && w.constructor === ArrayBuffer)
          return [new Uint8Array(w), !1];
        if (!v(w) && !b(w))
          throw new Error(t);
        return [w, !1];
      }, O = function(w) {
        return function(k) {
          return new N(!0).update(k)[w]();
        };
      }, E = function() {
        var w = O("hex");
        s && (w = C(w)), w.create = function() {
          return new N();
        }, w.update = function(A) {
          return w.create().update(A);
        };
        for (var k = 0; k < p.length; ++k) {
          var P = p[k];
          w[P] = O(P);
        }
        return w;
      }, C = function(w) {
        var k = pt, P = pt.Buffer, A;
        P.from && !a.JS_MD5_NO_BUFFER_FROM ? A = P.from : A = function(j) {
          return new P(j);
        };
        var H = function(j) {
          if (typeof j == "string")
            return k.createHash("md5").update(j, "utf8").digest("hex");
          if (j == null)
            throw new Error(t);
          return j.constructor === ArrayBuffer && (j = new Uint8Array(j)), v(j) || b(j) || j.constructor === P ? k.createHash("md5").update(A(j)).digest("hex") : w(j);
        };
        return H;
      }, T = function(w) {
        return function(k, P) {
          return new R(k, !0).update(P)[w]();
        };
      }, F = function() {
        var w = T("hex");
        w.create = function(A) {
          return new R(A);
        }, w.update = function(A, H) {
          return w.create(A).update(H);
        };
        for (var k = 0; k < p.length; ++k) {
          var P = p[k];
          w[P] = T(P);
        }
        return w;
      };
      function N(w) {
        if (w)
          m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = y;
        else if (d) {
          var k = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(k), this.blocks = new Uint32Array(k);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      N.prototype.update = function(w) {
        if (this.finalized)
          throw new Error(r);
        var k = S(w);
        w = k[0];
        for (var P = k[1], A, H = 0, j, L = w.length, V = this.blocks, G = this.buffer8; H < L; ) {
          if (this.hashed && (this.hashed = !1, V[0] = V[16], V[16] = V[1] = V[2] = V[3] = V[4] = V[5] = V[6] = V[7] = V[8] = V[9] = V[10] = V[11] = V[12] = V[13] = V[14] = V[15] = 0), P)
            if (d)
              for (j = this.start; H < L && j < 64; ++H)
                A = w.charCodeAt(H), A < 128 ? G[j++] = A : A < 2048 ? (G[j++] = 192 | A >>> 6, G[j++] = 128 | A & 63) : A < 55296 || A >= 57344 ? (G[j++] = 224 | A >>> 12, G[j++] = 128 | A >>> 6 & 63, G[j++] = 128 | A & 63) : (A = 65536 + ((A & 1023) << 10 | w.charCodeAt(++H) & 1023), G[j++] = 240 | A >>> 18, G[j++] = 128 | A >>> 12 & 63, G[j++] = 128 | A >>> 6 & 63, G[j++] = 128 | A & 63);
            else
              for (j = this.start; H < L && j < 64; ++H)
                A = w.charCodeAt(H), A < 128 ? V[j >>> 2] |= A << f[j++ & 3] : A < 2048 ? (V[j >>> 2] |= (192 | A >>> 6) << f[j++ & 3], V[j >>> 2] |= (128 | A & 63) << f[j++ & 3]) : A < 55296 || A >= 57344 ? (V[j >>> 2] |= (224 | A >>> 12) << f[j++ & 3], V[j >>> 2] |= (128 | A >>> 6 & 63) << f[j++ & 3], V[j >>> 2] |= (128 | A & 63) << f[j++ & 3]) : (A = 65536 + ((A & 1023) << 10 | w.charCodeAt(++H) & 1023), V[j >>> 2] |= (240 | A >>> 18) << f[j++ & 3], V[j >>> 2] |= (128 | A >>> 12 & 63) << f[j++ & 3], V[j >>> 2] |= (128 | A >>> 6 & 63) << f[j++ & 3], V[j >>> 2] |= (128 | A & 63) << f[j++ & 3]);
          else if (d)
            for (j = this.start; H < L && j < 64; ++H)
              G[j++] = w[H];
          else
            for (j = this.start; H < L && j < 64; ++H)
              V[j >>> 2] |= w[H] << f[j++ & 3];
          this.lastByteIndex = j, this.bytes += j - this.start, j >= 64 ? (this.start = j - 64, this.hash(), this.hashed = !0) : this.start = j;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, N.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var w = this.blocks, k = this.lastByteIndex;
          w[k >>> 2] |= o[k & 3], k >= 56 && (this.hashed || this.hash(), w[0] = w[16], w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0), w[14] = this.bytes << 3, w[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, N.prototype.hash = function() {
        var w, k, P, A, H, j, L = this.blocks;
        this.first ? (w = L[0] - 680876937, w = (w << 7 | w >>> 25) - 271733879 << 0, A = (-1732584194 ^ w & 2004318071) + L[1] - 117830708, A = (A << 12 | A >>> 20) + w << 0, P = (-271733879 ^ A & (w ^ -271733879)) + L[2] - 1126478375, P = (P << 17 | P >>> 15) + A << 0, k = (w ^ P & (A ^ w)) + L[3] - 1316259209, k = (k << 22 | k >>> 10) + P << 0) : (w = this.h0, k = this.h1, P = this.h2, A = this.h3, w += (A ^ k & (P ^ A)) + L[0] - 680876936, w = (w << 7 | w >>> 25) + k << 0, A += (P ^ w & (k ^ P)) + L[1] - 389564586, A = (A << 12 | A >>> 20) + w << 0, P += (k ^ A & (w ^ k)) + L[2] + 606105819, P = (P << 17 | P >>> 15) + A << 0, k += (w ^ P & (A ^ w)) + L[3] - 1044525330, k = (k << 22 | k >>> 10) + P << 0), w += (A ^ k & (P ^ A)) + L[4] - 176418897, w = (w << 7 | w >>> 25) + k << 0, A += (P ^ w & (k ^ P)) + L[5] + 1200080426, A = (A << 12 | A >>> 20) + w << 0, P += (k ^ A & (w ^ k)) + L[6] - 1473231341, P = (P << 17 | P >>> 15) + A << 0, k += (w ^ P & (A ^ w)) + L[7] - 45705983, k = (k << 22 | k >>> 10) + P << 0, w += (A ^ k & (P ^ A)) + L[8] + 1770035416, w = (w << 7 | w >>> 25) + k << 0, A += (P ^ w & (k ^ P)) + L[9] - 1958414417, A = (A << 12 | A >>> 20) + w << 0, P += (k ^ A & (w ^ k)) + L[10] - 42063, P = (P << 17 | P >>> 15) + A << 0, k += (w ^ P & (A ^ w)) + L[11] - 1990404162, k = (k << 22 | k >>> 10) + P << 0, w += (A ^ k & (P ^ A)) + L[12] + 1804603682, w = (w << 7 | w >>> 25) + k << 0, A += (P ^ w & (k ^ P)) + L[13] - 40341101, A = (A << 12 | A >>> 20) + w << 0, P += (k ^ A & (w ^ k)) + L[14] - 1502002290, P = (P << 17 | P >>> 15) + A << 0, k += (w ^ P & (A ^ w)) + L[15] + 1236535329, k = (k << 22 | k >>> 10) + P << 0, w += (P ^ A & (k ^ P)) + L[1] - 165796510, w = (w << 5 | w >>> 27) + k << 0, A += (k ^ P & (w ^ k)) + L[6] - 1069501632, A = (A << 9 | A >>> 23) + w << 0, P += (w ^ k & (A ^ w)) + L[11] + 643717713, P = (P << 14 | P >>> 18) + A << 0, k += (A ^ w & (P ^ A)) + L[0] - 373897302, k = (k << 20 | k >>> 12) + P << 0, w += (P ^ A & (k ^ P)) + L[5] - 701558691, w = (w << 5 | w >>> 27) + k << 0, A += (k ^ P & (w ^ k)) + L[10] + 38016083, A = (A << 9 | A >>> 23) + w << 0, P += (w ^ k & (A ^ w)) + L[15] - 660478335, P = (P << 14 | P >>> 18) + A << 0, k += (A ^ w & (P ^ A)) + L[4] - 405537848, k = (k << 20 | k >>> 12) + P << 0, w += (P ^ A & (k ^ P)) + L[9] + 568446438, w = (w << 5 | w >>> 27) + k << 0, A += (k ^ P & (w ^ k)) + L[14] - 1019803690, A = (A << 9 | A >>> 23) + w << 0, P += (w ^ k & (A ^ w)) + L[3] - 187363961, P = (P << 14 | P >>> 18) + A << 0, k += (A ^ w & (P ^ A)) + L[8] + 1163531501, k = (k << 20 | k >>> 12) + P << 0, w += (P ^ A & (k ^ P)) + L[13] - 1444681467, w = (w << 5 | w >>> 27) + k << 0, A += (k ^ P & (w ^ k)) + L[2] - 51403784, A = (A << 9 | A >>> 23) + w << 0, P += (w ^ k & (A ^ w)) + L[7] + 1735328473, P = (P << 14 | P >>> 18) + A << 0, k += (A ^ w & (P ^ A)) + L[12] - 1926607734, k = (k << 20 | k >>> 12) + P << 0, H = k ^ P, w += (H ^ A) + L[5] - 378558, w = (w << 4 | w >>> 28) + k << 0, A += (H ^ w) + L[8] - 2022574463, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, P += (j ^ k) + L[11] + 1839030562, P = (P << 16 | P >>> 16) + A << 0, k += (j ^ P) + L[14] - 35309556, k = (k << 23 | k >>> 9) + P << 0, H = k ^ P, w += (H ^ A) + L[1] - 1530992060, w = (w << 4 | w >>> 28) + k << 0, A += (H ^ w) + L[4] + 1272893353, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, P += (j ^ k) + L[7] - 155497632, P = (P << 16 | P >>> 16) + A << 0, k += (j ^ P) + L[10] - 1094730640, k = (k << 23 | k >>> 9) + P << 0, H = k ^ P, w += (H ^ A) + L[13] + 681279174, w = (w << 4 | w >>> 28) + k << 0, A += (H ^ w) + L[0] - 358537222, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, P += (j ^ k) + L[3] - 722521979, P = (P << 16 | P >>> 16) + A << 0, k += (j ^ P) + L[6] + 76029189, k = (k << 23 | k >>> 9) + P << 0, H = k ^ P, w += (H ^ A) + L[9] - 640364487, w = (w << 4 | w >>> 28) + k << 0, A += (H ^ w) + L[12] - 421815835, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, P += (j ^ k) + L[15] + 530742520, P = (P << 16 | P >>> 16) + A << 0, k += (j ^ P) + L[2] - 995338651, k = (k << 23 | k >>> 9) + P << 0, w += (P ^ (k | ~A)) + L[0] - 198630844, w = (w << 6 | w >>> 26) + k << 0, A += (k ^ (w | ~P)) + L[7] + 1126891415, A = (A << 10 | A >>> 22) + w << 0, P += (w ^ (A | ~k)) + L[14] - 1416354905, P = (P << 15 | P >>> 17) + A << 0, k += (A ^ (P | ~w)) + L[5] - 57434055, k = (k << 21 | k >>> 11) + P << 0, w += (P ^ (k | ~A)) + L[12] + 1700485571, w = (w << 6 | w >>> 26) + k << 0, A += (k ^ (w | ~P)) + L[3] - 1894986606, A = (A << 10 | A >>> 22) + w << 0, P += (w ^ (A | ~k)) + L[10] - 1051523, P = (P << 15 | P >>> 17) + A << 0, k += (A ^ (P | ~w)) + L[1] - 2054922799, k = (k << 21 | k >>> 11) + P << 0, w += (P ^ (k | ~A)) + L[8] + 1873313359, w = (w << 6 | w >>> 26) + k << 0, A += (k ^ (w | ~P)) + L[15] - 30611744, A = (A << 10 | A >>> 22) + w << 0, P += (w ^ (A | ~k)) + L[6] - 1560198380, P = (P << 15 | P >>> 17) + A << 0, k += (A ^ (P | ~w)) + L[13] + 1309151649, k = (k << 21 | k >>> 11) + P << 0, w += (P ^ (k | ~A)) + L[4] - 145523070, w = (w << 6 | w >>> 26) + k << 0, A += (k ^ (w | ~P)) + L[11] - 1120210379, A = (A << 10 | A >>> 22) + w << 0, P += (w ^ (A | ~k)) + L[2] + 718787259, P = (P << 15 | P >>> 17) + A << 0, k += (A ^ (P | ~w)) + L[9] - 343485551, k = (k << 21 | k >>> 11) + P << 0, this.first ? (this.h0 = w + 1732584193 << 0, this.h1 = k - 271733879 << 0, this.h2 = P - 1732584194 << 0, this.h3 = A + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + w << 0, this.h1 = this.h1 + k << 0, this.h2 = this.h2 + P << 0, this.h3 = this.h3 + A << 0);
      }, N.prototype.hex = function() {
        this.finalize();
        var w = this.h0, k = this.h1, P = this.h2, A = this.h3;
        return u[w >>> 4 & 15] + u[w & 15] + u[w >>> 12 & 15] + u[w >>> 8 & 15] + u[w >>> 20 & 15] + u[w >>> 16 & 15] + u[w >>> 28 & 15] + u[w >>> 24 & 15] + u[k >>> 4 & 15] + u[k & 15] + u[k >>> 12 & 15] + u[k >>> 8 & 15] + u[k >>> 20 & 15] + u[k >>> 16 & 15] + u[k >>> 28 & 15] + u[k >>> 24 & 15] + u[P >>> 4 & 15] + u[P & 15] + u[P >>> 12 & 15] + u[P >>> 8 & 15] + u[P >>> 20 & 15] + u[P >>> 16 & 15] + u[P >>> 28 & 15] + u[P >>> 24 & 15] + u[A >>> 4 & 15] + u[A & 15] + u[A >>> 12 & 15] + u[A >>> 8 & 15] + u[A >>> 20 & 15] + u[A >>> 16 & 15] + u[A >>> 28 & 15] + u[A >>> 24 & 15];
      }, N.prototype.toString = N.prototype.hex, N.prototype.digest = function() {
        this.finalize();
        var w = this.h0, k = this.h1, P = this.h2, A = this.h3;
        return [
          w & 255,
          w >>> 8 & 255,
          w >>> 16 & 255,
          w >>> 24 & 255,
          k & 255,
          k >>> 8 & 255,
          k >>> 16 & 255,
          k >>> 24 & 255,
          P & 255,
          P >>> 8 & 255,
          P >>> 16 & 255,
          P >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255
        ];
      }, N.prototype.array = N.prototype.digest, N.prototype.arrayBuffer = function() {
        this.finalize();
        var w = new ArrayBuffer(16), k = new Uint32Array(w);
        return k[0] = this.h0, k[1] = this.h1, k[2] = this.h2, k[3] = this.h3, w;
      }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.base64 = function() {
        for (var w, k, P, A = "", H = this.array(), j = 0; j < 15; )
          w = H[j++], k = H[j++], P = H[j++], A += h[w >>> 2] + h[(w << 4 | k >>> 4) & 63] + h[(k << 2 | P >>> 6) & 63] + h[P & 63];
        return w = H[j], A += h[w >>> 2] + h[w << 4 & 63] + "==", A;
      };
      function R(w, k) {
        var P, A = S(w);
        if (w = A[0], A[1]) {
          var H = [], j = w.length, L = 0, V;
          for (P = 0; P < j; ++P)
            V = w.charCodeAt(P), V < 128 ? H[L++] = V : V < 2048 ? (H[L++] = 192 | V >>> 6, H[L++] = 128 | V & 63) : V < 55296 || V >= 57344 ? (H[L++] = 224 | V >>> 12, H[L++] = 128 | V >>> 6 & 63, H[L++] = 128 | V & 63) : (V = 65536 + ((V & 1023) << 10 | w.charCodeAt(++P) & 1023), H[L++] = 240 | V >>> 18, H[L++] = 128 | V >>> 12 & 63, H[L++] = 128 | V >>> 6 & 63, H[L++] = 128 | V & 63);
          w = H;
        }
        w.length > 64 && (w = new N(!0).update(w).array());
        var G = [], Re = [];
        for (P = 0; P < 64; ++P) {
          var Ue = w[P] || 0;
          G[P] = 92 ^ Ue, Re[P] = 54 ^ Ue;
        }
        N.call(this, k), this.update(Re), this.oKeyPad = G, this.inner = !0, this.sharedMemory = k;
      }
      R.prototype = new N(), R.prototype.finalize = function() {
        if (N.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var w = this.array();
          N.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(w), N.prototype.finalize.call(this);
        }
      };
      var z = E();
      z.md5 = z, z.md5.hmac = F(), l ? e.exports = z : a.md5 = z;
    })();
  }(No)), No.exports;
}
var v2 = y2();
const b2 = ["src", "alt"], AS = {
  __name: "GravatarImg",
  props: {
    email: {
      type: String,
      required: !0
    },
    size: {
      type: Number,
      default: 100
    }
  },
  setup(e) {
    const t = e, r = fe(() => v2.md5(t.email.trim().toLowerCase())), n = fe(() => `https://www.gravatar.com/avatar/${r.value}?s=${t.size}`), a = fe(() => `Gravatar for ${t.email}`);
    return (i, s) => ($(), B("img", {
      src: n.value,
      alt: a.value
    }, null, 8, b2));
  }
}, ES = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => ($(), pe(M1, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: Ne(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, CS = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  iS as Alert,
  x2 as Checkbox,
  gx as CollapsableSection,
  gx as CollapsibleSection,
  pS as DangerButton,
  xS as DescriptionList,
  SS as DescriptionListItem,
  sS as Dropdown,
  oS as DropdownLink,
  E2 as DropdownSearchbar,
  J2 as FileDropZoneInput,
  AS as GravatarImg,
  X2 as Images,
  S2 as Input,
  ia as InputError,
  _l as InputLabel,
  lS as LinkButton,
  uS as LinkDropdownButton,
  cS as LinkDropdownButtonItem,
  fS as Logs,
  Mx as LogsContent,
  dS as Modal,
  wS as NavCollapse,
  hS as NavLink,
  zh as Pagination,
  Vh as PrimaryButton,
  Q2 as RadioButton,
  mS as ResponsiveNavLink,
  yy as SearchSelect,
  gS as SecondaryButton,
  yS as Section,
  bS as Select2ajax,
  Hh as Spinner,
  vS as Stats,
  ef as SubmitButton,
  Z2 as Table,
  aS as TableItemCard,
  M1 as Td,
  ES as TdCollapseHandler,
  wg as TextInput,
  A2 as Textarea,
  tS as Th,
  eS as Thead,
  nS as TrCollapse,
  rS as TrCollapseHandler,
  CS as default,
  ua as getInertiaRouter,
  K2 as hasPermission,
  O0 as moneyFormat,
  G2 as numberFormat,
  Y2 as setInertiaRouter
};
