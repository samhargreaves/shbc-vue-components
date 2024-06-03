import { computed as oe, withDirectives as He, openBlock as O, createElementBlock as C, vModelCheckbox as rf, defineComponent as mr, watch as Ia, h as Ut, mergeModels as Np, ref as ue, useModel as Fp, onMounted as at, createBlock as ae, unref as W, createCommentVNode as K, createElementVNode as D, normalizeClass as Z, renderSlot as Y, toDisplayString as X, createVNode as be, Transition as cr, withCtx as we, vModelSelect as Lp, Fragment as fe, createTextVNode as ye, vShow as Vt, vModelText as Mp, resolveDirective as Bp, normalizeProps as Ge, guardReactiveProps as Ze, renderList as it, resolveDynamicComponent as zo, mergeProps as Mn, toHandlers as jp, withModifiers as jt, withKeys as Ir, normalizeStyle as ra, shallowRef as zp, markRaw as ru, reactive as ml, onUnmounted as Xn, toRefs as Up, nextTick as Vp, Teleport as Hp, pushScopeId as Wp, popScopeId as qp } from "vue";
const Gp = ["value"], sA = {
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
    const r = e, n = t, i = oe({
      get() {
        return n.checked;
      },
      set(a) {
        r("update:checked", a);
      }
    });
    return (a, o) => He((O(), C("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: "rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500"
    }, null, 8, Gp)), [
      [rf, i.value]
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
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nu(Object(r), !0).forEach(function(n) {
      Ee(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nu(Object(r)).forEach(function(n) {
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
function Yp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function iu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Kp(t, e, r) {
  return e && iu(t.prototype, e), r && iu(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ee(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function gl(t, e) {
  return Xp(t) || Zp(t, e) || nf(t, e) || th();
}
function Qn(t) {
  return Jp(t) || Qp(t) || nf(t) || eh();
}
function Jp(t) {
  if (Array.isArray(t))
    return bs(t);
}
function Xp(t) {
  if (Array.isArray(t))
    return t;
}
function Qp(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Zp(t, e) {
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
function nf(t, e) {
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
function eh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function th() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var au = function() {
}, yl = {}, af = {}, of = null, sf = {
  mark: au,
  measure: au
};
try {
  typeof window < "u" && (yl = window), typeof document < "u" && (af = document), typeof MutationObserver < "u" && (of = MutationObserver), typeof performance < "u" && (sf = performance);
} catch {
}
var rh = yl.navigator || {}, ou = rh.userAgent, su = ou === void 0 ? "" : ou, Wt = yl, me = af, lu = of, Ii = sf;
Wt.document;
var $t = !!me.documentElement && !!me.head && typeof me.addEventListener == "function" && typeof me.createElement == "function", lf = ~su.indexOf("MSIE") || ~su.indexOf("Trident/"), Di, Ri, Ni, Fi, Li, Ct = "___FONT_AWESOME___", ws = 16, uf = "fa", cf = "svg-inline--fa", pr = "data-fa-i2svg", xs = "data-fa-pseudo-element", nh = "data-fa-pseudo-element-pending", vl = "data-prefix", bl = "data-icon", uu = "fontawesome-i2svg", ih = "async", ah = ["HTML", "HEAD", "STYLE", "SCRIPT"], ff = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), pe = "classic", ve = "sharp", wl = [pe, ve];
function Zn(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[pe];
    }
  });
}
var Bn = Zn((Di = {}, Ee(Di, pe, {
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
}), Ee(Di, ve, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Di)), jn = Zn((Ri = {}, Ee(Ri, pe, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ee(Ri, ve, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Ri)), zn = Zn((Ni = {}, Ee(Ni, pe, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ee(Ni, ve, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Ni)), oh = Zn((Fi = {}, Ee(Fi, pe, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ee(Fi, ve, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Fi)), sh = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, df = "fa-layers-text", lh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, uh = Zn((Li = {}, Ee(Li, pe, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ee(Li, ve, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Li)), pf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ch = pf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), fh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], sr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Un = /* @__PURE__ */ new Set();
Object.keys(jn[pe]).map(Un.add.bind(Un));
Object.keys(jn[ve]).map(Un.add.bind(Un));
var dh = [].concat(wl, Qn(Un), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", sr.GROUP, sr.SWAP_OPACITY, sr.PRIMARY, sr.SECONDARY]).concat(pf.map(function(t) {
  return "".concat(t, "x");
})).concat(ch.map(function(t) {
  return "w-".concat(t);
})), $n = Wt.FontAwesomeConfig || {};
function ph(t) {
  var e = me.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function hh(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (me && typeof me.querySelector == "function") {
  var mh = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  mh.forEach(function(t) {
    var e = gl(t, 2), r = e[0], n = e[1], i = hh(ph(r));
    i != null && ($n[n] = i);
  });
}
var hf = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: uf,
  replacementClass: cf,
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
var Hr = z(z({}, hf), $n);
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
var H = {};
Object.keys(hf).forEach(function(t) {
  Object.defineProperty(H, t, {
    enumerable: !0,
    set: function(r) {
      Hr[t] = r, In.forEach(function(n) {
        return n(H);
      });
    },
    get: function() {
      return Hr[t];
    }
  });
});
Object.defineProperty(H, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Hr.cssPrefix = e, In.forEach(function(r) {
      return r(H);
    });
  },
  get: function() {
    return Hr.cssPrefix;
  }
});
Wt.FontAwesomeConfig = H;
var In = [];
function gh(t) {
  return In.push(t), function() {
    In.splice(In.indexOf(t), 1);
  };
}
var Ft = ws, ht = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function yh(t) {
  if (!(!t || !$t)) {
    var e = me.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = me.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
    }
    return me.head.insertBefore(e, n), t;
  }
}
var vh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Vn() {
  for (var t = 12, e = ""; t-- > 0; )
    e += vh[Math.random() * 62 | 0];
  return e;
}
function Zr(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function xl(t) {
  return t.classList ? Zr(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function mf(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function bh(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(mf(t[r]), '" ');
  }, "").trim();
}
function Da(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function Sl(t) {
  return t.size !== ht.size || t.x !== ht.x || t.y !== ht.y || t.rotate !== ht.rotate || t.flipX || t.flipY;
}
function wh(t) {
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
function xh(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? ws : r, i = t.height, a = i === void 0 ? ws : i, o = t.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && lf ? u += "translate(".concat(e.x / Ft - n / 2, "em, ").concat(e.y / Ft - a / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(e.x / Ft, "em), calc(-50% + ").concat(e.y / Ft, "em)) ") : u += "translate(".concat(e.x / Ft, "em, ").concat(e.y / Ft, "em) "), u += "scale(".concat(e.size / Ft * (e.flipX ? -1 : 1), ", ").concat(e.size / Ft * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var Sh = `:root, :host {
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
function gf() {
  var t = uf, e = cf, r = H.cssPrefix, n = H.replacementClass, i = Sh;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
var cu = !1;
function Uo() {
  H.autoAddCss && !cu && (yh(gf()), cu = !0);
}
var Oh = {
  mixout: function() {
    return {
      dom: {
        css: gf,
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
}, kt = Wt || {};
kt[Ct] || (kt[Ct] = {});
kt[Ct].styles || (kt[Ct].styles = {});
kt[Ct].hooks || (kt[Ct].hooks = {});
kt[Ct].shims || (kt[Ct].shims = []);
var tt = kt[Ct], yf = [], Ah = function t() {
  me.removeEventListener("DOMContentLoaded", t), ha = 1, yf.map(function(e) {
    return e();
  });
}, ha = !1;
$t && (ha = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(me.readyState), ha || me.addEventListener("DOMContentLoaded", Ah));
function Eh(t) {
  $t && (ha ? setTimeout(t, 0) : yf.push(t));
}
function ei(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? mf(t) : "<".concat(e, " ").concat(bh(n), ">").concat(a.map(ei).join(""), "</").concat(e, ">");
}
function fu(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var _h = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Vo = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? _h(r, i) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, e[c], c, e);
  return f;
};
function Ch(t) {
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
  var e = Ch(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function kh(t, e) {
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
  typeof tt.hooks.addPack == "function" && !i ? tt.hooks.addPack(t, du(e)) : tt.styles[t] = z(z({}, tt.styles[t] || {}), a), t === "fas" && Os("fa", e);
}
var Mi, Bi, ji, Mr = tt.styles, Th = tt.shims, Ph = (Mi = {}, Ee(Mi, pe, Object.values(zn[pe])), Ee(Mi, ve, Object.values(zn[ve])), Mi), Ol = null, vf = {}, bf = {}, wf = {}, xf = {}, Sf = {}, $h = (Bi = {}, Ee(Bi, pe, Object.keys(Bn[pe])), Ee(Bi, ve, Object.keys(Bn[ve])), Bi);
function Ih(t) {
  return ~dh.indexOf(t);
}
function Dh(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !Ih(i) ? i : null;
}
var Of = function() {
  var e = function(a) {
    return Vo(Mr, function(o, s, u) {
      return o[u] = Vo(s, a, {}), o;
    }, {});
  };
  vf = e(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  }), bf = e(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        i[u] = o;
      });
    }
    return i;
  }), Sf = e(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(u) {
      i[u] = o;
    }), i;
  });
  var r = "far" in Mr || H.autoFetchSvg, n = Vo(Th, function(i, a) {
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
  wf = n.names, xf = n.unicodes, Ol = Ra(H.styleDefault, {
    family: H.familyDefault
  });
};
gh(function(t) {
  Ol = Ra(t.styleDefault, {
    family: H.familyDefault
  });
});
Of();
function Al(t, e) {
  return (vf[t] || {})[e];
}
function Rh(t, e) {
  return (bf[t] || {})[e];
}
function lr(t, e) {
  return (Sf[t] || {})[e];
}
function Af(t) {
  return wf[t] || {
    prefix: null,
    iconName: null
  };
}
function Nh(t) {
  var e = xf[t], r = Al("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function qt() {
  return Ol;
}
var El = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ra(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? pe : r, i = Bn[n][t], a = jn[n][t] || jn[n][i], o = t in tt.styles ? t : null;
  return a || o || null;
}
var pu = (ji = {}, Ee(ji, pe, Object.keys(zn[pe])), Ee(ji, ve, Object.keys(zn[ve])), ji);
function Na(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, Ee(e, pe, "".concat(H.cssPrefix, "-").concat(pe)), Ee(e, ve, "".concat(H.cssPrefix, "-").concat(ve)), e), o = null, s = pe;
  (t.includes(a[pe]) || t.some(function(c) {
    return pu[pe].includes(c);
  })) && (s = pe), (t.includes(a[ve]) || t.some(function(c) {
    return pu[ve].includes(c);
  })) && (s = ve);
  var u = t.reduce(function(c, f) {
    var d = Dh(H.cssPrefix, f);
    if (Mr[f] ? (f = Ph[s].includes(f) ? oh[s][f] : f, o = f, c.prefix = f) : $h[s].indexOf(f) > -1 ? (o = f, c.prefix = Ra(f, {
      family: s
    })) : d ? c.iconName = d : f !== H.replacementClass && f !== a[pe] && f !== a[ve] && c.rest.push(f), !i && c.prefix && c.iconName) {
      var g = o === "fa" ? Af(c.iconName) : {}, S = lr(c.prefix, c.iconName);
      g.prefix && (o = null), c.iconName = g.iconName || S || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Mr.far && Mr.fas && !H.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, El());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === ve && (Mr.fass || H.autoFetchSvg) && (u.prefix = "fass", u.iconName = lr(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = qt() || "fas"), u;
}
var Fh = /* @__PURE__ */ function() {
  function t() {
    Yp(this, t), this.definitions = {};
  }
  return Kp(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = z(z({}, r.definitions[s] || {}), o[s]), Os(s, o[s]);
        var u = zn[pe][s];
        u && Os(u, o[s]), Of();
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
        r[s] || (r[s] = {}), f.length > 0 && f.forEach(function(d) {
          typeof d == "string" && (r[s][d] = c);
        }), r[s][u] = c;
      }), r;
    }
  }]), t;
}(), hu = [], Br = {}, zr = {}, Lh = Object.keys(zr);
function Mh(t, e) {
  var r = e.mixoutsTo;
  return hu = t, Br = {}, Object.keys(zr).forEach(function(n) {
    Lh.indexOf(n) === -1 && delete zr[n];
  }), hu.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (r[o] = i[o]), pa(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = i[o][s];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(o) {
        Br[o] || (Br[o] = []), Br[o].push(a[o]);
      });
    }
    n.provides && n.provides(zr);
  }), r;
}
function As(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = Br[t] || [];
  return a.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function hr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = Br[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function Tt() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return zr[t] ? zr[t].apply(null, e) : void 0;
}
function Es(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || qt();
  if (e)
    return e = lr(r, e) || e, fu(Ef.definitions, r, e) || fu(tt.styles, r, e);
}
var Ef = new Fh(), Bh = function() {
  H.autoReplaceSvg = !1, H.observeMutations = !1, hr("noAuto");
}, jh = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $t ? (hr("beforeI2svg", e), Tt("pseudoElements2svg", e), Tt("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0), H.observeMutations = !0, Eh(function() {
      Uh({
        autoReplaceSvgRoot: r
      }), hr("watch", e);
    });
  }
}, zh = {
  icon: function(e) {
    if (e === null)
      return null;
    if (pa(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: lr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ra(e[0]);
      return {
        prefix: n,
        iconName: lr(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(H.cssPrefix, "-")) > -1 || e.match(sh))) {
      var i = Na(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || qt(),
        iconName: lr(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = qt();
      return {
        prefix: a,
        iconName: lr(a, e) || e
      };
    }
  }
}, We = {
  noAuto: Bh,
  config: H,
  dom: jh,
  parse: zh,
  library: Ef,
  findIconDefinition: Es,
  toHtml: ei
}, Uh = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? me : r;
  (Object.keys(tt.styles).length > 0 || H.autoFetchSvg) && $t && H.autoReplaceSvg && We.dom.i2svg({
    node: n
  });
};
function Fa(t, e) {
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
      if ($t) {
        var n = me.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Vh(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, o = t.transform;
  if (Sl(o) && r.found && !n.found) {
    var s = r.width, u = r.height, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Da(z(z({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Hh(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, o = a === !0 ? "".concat(e, "-").concat(H.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: z(z({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function _l(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, o = t.transform, s = t.symbol, u = t.title, c = t.maskId, f = t.titleId, d = t.extra, g = t.watchable, S = g === void 0 ? !1 : g, m = n.found ? n : r, x = m.width, A = m.height, E = i === "fak", P = [H.replacementClass, a ? "".concat(H.cssPrefix, "-").concat(a) : ""].filter(function(B) {
    return d.classes.indexOf(B) === -1;
  }).filter(function(B) {
    return B !== "" || !!B;
  }).concat(d.classes).join(" "), k = {
    children: [],
    attributes: z(z({}, d.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: P,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(A)
    })
  }, $ = E && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / A * 16 * 0.0625, "em")
  } : {};
  S && (k.attributes[pr] = ""), u && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(f || Vn())
    },
    children: [u]
  }), delete k.attributes.title);
  var L = z(z({}, k), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: z(z({}, $), d.styles)
  }), R = n.found && r.found ? Tt("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : Tt("generateAbstractIcon", L) || {
    children: [],
    attributes: {}
  }, M = R.children, U = R.attributes;
  return L.children = M, L.attributes = U, s ? Hh(L) : Vh(L);
}
function mu(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, o = t.extra, s = t.watchable, u = s === void 0 ? !1 : s, c = z(z(z({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[pr] = "");
  var f = z({}, o.styles);
  Sl(i) && (f.transform = xh({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var d = Da(f);
  d.length > 0 && (c.style = d);
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
function Wh(t) {
  var e = t.content, r = t.title, n = t.extra, i = z(z(z({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Da(n.styles);
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
var Ho = tt.styles;
function _s(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = gl(n, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(H.cssPrefix, "-").concat(sr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(sr.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(H.cssPrefix, "-").concat(sr.PRIMARY),
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
var qh = {
  found: !1,
  width: 512,
  height: 512
};
function Gh(t, e) {
  !ff && !H.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Cs(t, e) {
  var r = e;
  return e === "fa" && H.styleDefault !== null && (e = qt()), new Promise(function(n, i) {
    if (Tt("missingIconAbstract"), r === "fa") {
      var a = Af(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && Ho[e] && Ho[e][t]) {
      var o = Ho[e][t];
      return n(_s(o));
    }
    Gh(t, e), n(z(z({}, qh), {}, {
      icon: H.showMissingIcons && t ? Tt("missingIconAbstract") || {} : {}
    }));
  });
}
var gu = function() {
}, ks = H.measurePerformance && Ii && Ii.mark && Ii.measure ? Ii : {
  mark: gu,
  measure: gu
}, Tn = 'FA "6.5.1"', Yh = function(e) {
  return ks.mark("".concat(Tn, " ").concat(e, " begins")), function() {
    return _f(e);
  };
}, _f = function(e) {
  ks.mark("".concat(Tn, " ").concat(e, " ends")), ks.measure("".concat(Tn, " ").concat(e), "".concat(Tn, " ").concat(e, " begins"), "".concat(Tn, " ").concat(e, " ends"));
}, Cl = {
  begin: Yh,
  end: _f
}, na = function() {
};
function yu(t) {
  var e = t.getAttribute ? t.getAttribute(pr) : null;
  return typeof e == "string";
}
function Kh(t) {
  var e = t.getAttribute ? t.getAttribute(vl) : null, r = t.getAttribute ? t.getAttribute(bl) : null;
  return e && r;
}
function Jh(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(H.replacementClass);
}
function Xh() {
  if (H.autoReplaceSvg === !0)
    return ia.replace;
  var t = ia[H.autoReplaceSvg];
  return t || ia.replace;
}
function Qh(t) {
  return me.createElementNS("http://www.w3.org/2000/svg", t);
}
function Zh(t) {
  return me.createElement(t);
}
function Cf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? Qh : Zh : r;
  if (typeof t == "string")
    return me.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    i.setAttribute(o, t.attributes[o]);
  });
  var a = t.children || [];
  return a.forEach(function(o) {
    i.appendChild(Cf(o, {
      ceFn: n
    }));
  }), i;
}
function em(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var ia = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Cf(i), r);
      }), r.getAttribute(pr) === null && H.keepOriginalSource) {
        var n = me.createComment(em(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~xl(r).indexOf(H.replacementClass))
      return ia.replace(e);
    var i = new RegExp("".concat(H.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(s, u) {
        return u === H.replacementClass || u.match(i) ? s.toSvg.push(u) : s.toNode.push(u), s;
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
    r.setAttribute(pr, ""), r.innerHTML = o;
  }
};
function vu(t) {
  t();
}
function kf(t, e) {
  var r = typeof e == "function" ? e : na;
  if (t.length === 0)
    r();
  else {
    var n = vu;
    H.mutateApproach === ih && (n = Wt.requestAnimationFrame || vu), n(function() {
      var i = Xh(), a = Cl.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var kl = !1;
function Tf() {
  kl = !0;
}
function Ts() {
  kl = !1;
}
var ma = null;
function bu(t) {
  if (lu && H.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? na : e, n = t.nodeCallback, i = n === void 0 ? na : n, a = t.pseudoElementsCallback, o = a === void 0 ? na : a, s = t.observeMutationsRoot, u = s === void 0 ? me : s;
    ma = new lu(function(c) {
      if (!kl) {
        var f = qt();
        Zr(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !yu(d.addedNodes[0]) && (H.searchPseudoElements && o(d.target), r(d.target)), d.type === "attributes" && d.target.parentNode && H.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && yu(d.target) && ~fh.indexOf(d.attributeName))
            if (d.attributeName === "class" && Kh(d.target)) {
              var g = Na(xl(d.target)), S = g.prefix, m = g.iconName;
              d.target.setAttribute(vl, S || f), m && d.target.setAttribute(bl, m);
            } else
              Jh(d.target) && i(d.target);
        });
      }
    }), $t && ma.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function tm() {
  ma && ma.disconnect();
}
function rm(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function nm(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = Na(xl(t));
  return i.prefix || (i.prefix = qt()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Rh(i.prefix, t.innerText) || Al(i.prefix, Ss(t.innerText))), !i.iconName && H.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function im(t) {
  var e = Zr(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return H.autoA11y && (r ? e["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(n || Vn()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function am() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ht,
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
  }, r = nm(t), n = r.iconName, i = r.prefix, a = r.rest, o = im(t), s = As("parseNodeAttributes", {}, t), u = e.styleParser ? rm(t) : [];
  return z({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: ht,
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
var om = tt.styles;
function Pf(t) {
  var e = H.autoReplaceSvg === "nest" ? wu(t, {
    styleParser: !1
  }) : wu(t);
  return ~e.extra.classes.indexOf(df) ? Tt("generateLayersText", t, e) : Tt("generateSvgReplacementMutation", t, e);
}
var Gt = /* @__PURE__ */ new Set();
wl.map(function(t) {
  Gt.add("fa-".concat(t));
});
Object.keys(Bn[pe]).map(Gt.add.bind(Gt));
Object.keys(Bn[ve]).map(Gt.add.bind(Gt));
Gt = Qn(Gt);
function xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$t)
    return Promise.resolve();
  var r = me.documentElement.classList, n = function(d) {
    return r.add("".concat(uu, "-").concat(d));
  }, i = function(d) {
    return r.remove("".concat(uu, "-").concat(d));
  }, a = H.autoFetchSvg ? Gt : wl.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(om));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(df, ":not([").concat(pr, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(pr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Zr(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var u = Cl.begin("onTree"), c = s.reduce(function(f, d) {
    try {
      var g = Pf(d);
      g && f.push(g);
    } catch (S) {
      ff || S.name === "MissingIcon" && console.error(S);
    }
    return f;
  }, []);
  return new Promise(function(f, d) {
    Promise.all(c).then(function(g) {
      kf(g, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), u(), f();
      });
    }).catch(function(g) {
      u(), d(g);
    });
  });
}
function sm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pf(t).then(function(r) {
    r && kf([r], e);
  });
}
function lm(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Es(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : Es(i || {})), t(n, z(z({}, r), {}, {
      mask: i
    }));
  };
}
var um = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? ht : n, a = r.symbol, o = a === void 0 ? !1 : a, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, d = r.title, g = d === void 0 ? null : d, S = r.titleId, m = S === void 0 ? null : S, x = r.classes, A = x === void 0 ? [] : x, E = r.attributes, P = E === void 0 ? {} : E, k = r.styles, $ = k === void 0 ? {} : k;
  if (e) {
    var L = e.prefix, R = e.iconName, M = e.icon;
    return Fa(z({
      type: "icon"
    }, e), function() {
      return hr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), H.autoA11y && (g ? P["aria-labelledby"] = "".concat(H.replacementClass, "-title-").concat(m || Vn()) : (P["aria-hidden"] = "true", P.focusable = "false")), _l({
        icons: {
          main: _s(M),
          mask: u ? _s(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: L,
        iconName: R,
        transform: z(z({}, ht), i),
        symbol: o,
        title: g,
        maskId: f,
        titleId: m,
        extra: {
          attributes: P,
          styles: $,
          classes: A
        }
      });
    });
  }
}, cm = {
  mixout: function() {
    return {
      icon: lm(um)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = xu, r.nodeCallback = sm, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? me : n, a = r.callback, o = a === void 0 ? function() {
      } : a;
      return xu(i, o);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, o = n.titleId, s = n.prefix, u = n.transform, c = n.symbol, f = n.mask, d = n.maskId, g = n.extra;
      return new Promise(function(S, m) {
        Promise.all([Cs(i, s), f.iconName ? Cs(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var A = gl(x, 2), E = A[0], P = A[1];
          S([r, _l({
            icons: {
              main: E,
              mask: P
            },
            prefix: s,
            iconName: i,
            transform: u,
            symbol: c,
            maskId: d,
            title: a,
            titleId: o,
            extra: g,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.transform, s = r.styles, u = Da(s);
      u.length > 0 && (i.style = u);
      var c;
      return Sl(o) && (c = Tt("generateAbstractTransformGrouping", {
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
}, fm = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Fa({
          type: "layer"
        }, function() {
          hr("beforeDOMElementCreation", {
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
              class: ["".concat(H.cssPrefix, "-layers")].concat(Qn(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, dm = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, d = f === void 0 ? {} : f;
        return Fa({
          type: "counter",
          content: r
        }, function() {
          return hr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Wh({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(H.cssPrefix, "-layers-counter")].concat(Qn(s))
            }
          });
        });
      }
    };
  }
}, pm = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? ht : i, o = n.title, s = o === void 0 ? null : o, u = n.classes, c = u === void 0 ? [] : u, f = n.attributes, d = f === void 0 ? {} : f, g = n.styles, S = g === void 0 ? {} : g;
        return Fa({
          type: "text",
          content: r
        }, function() {
          return hr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), mu({
            content: r,
            transform: z(z({}, ht), a),
            title: s,
            extra: {
              attributes: d,
              styles: S,
              classes: ["".concat(H.cssPrefix, "-layers-text")].concat(Qn(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, o = n.extra, s = null, u = null;
      if (lf) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, u = f.height / c;
      }
      return H.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, mu({
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
}, hm = new RegExp('"', "ug"), Su = [1105920, 1112319];
function mm(t) {
  var e = t.replace(hm, ""), r = kh(e, 0), n = r >= Su[0] && r <= Su[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Ss(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Ou(t, e) {
  var r = "".concat(nh).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Zr(t.children), o = a.filter(function(M) {
      return M.getAttribute(xs) === e;
    })[0], s = Wt.getComputedStyle(t, e), u = s.getPropertyValue("font-family").match(lh), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return t.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var d = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(u[2]) ? ve : pe, S = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? jn[g][u[2].toLowerCase()] : uh[g][c], m = mm(d), x = m.value, A = m.isSecondary, E = u[0].startsWith("FontAwesome"), P = Al(S, x), k = P;
      if (E) {
        var $ = Nh(x);
        $.iconName && $.prefix && (P = $.iconName, S = $.prefix);
      }
      if (P && !A && (!o || o.getAttribute(vl) !== S || o.getAttribute(bl) !== k)) {
        t.setAttribute(r, k), o && t.removeChild(o);
        var L = am(), R = L.extra;
        R.attributes[xs] = e, Cs(P, S).then(function(M) {
          var U = _l(z(z({}, L), {}, {
            icons: {
              main: M,
              mask: El()
            },
            prefix: S,
            iconName: k,
            extra: R,
            watchable: !0
          })), B = me.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(B, t.firstChild) : t.appendChild(B), B.outerHTML = U.map(function(I) {
            return ei(I);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function gm(t) {
  return Promise.all([Ou(t, "::before"), Ou(t, "::after")]);
}
function ym(t) {
  return t.parentNode !== document.head && !~ah.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(xs) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Au(t) {
  if ($t)
    return new Promise(function(e, r) {
      var n = Zr(t.querySelectorAll("*")).filter(ym).map(gm), i = Cl.begin("searchPseudoElements");
      Tf(), Promise.all(n).then(function() {
        i(), Ts(), e();
      }).catch(function() {
        i(), Ts(), r();
      });
    });
}
var vm = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Au, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? me : n;
      H.searchPseudoElements && Au(i);
    };
  }
}, Eu = !1, bm = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Tf(), Eu = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        bu(As("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        tm();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Eu ? Ts() : bu(As("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, _u = function(e) {
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
}, wm = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return _u(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = _u(i)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, i = r.transform, a = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, u = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), f = "rotate(".concat(i.rotate, " 0 0)"), d = {
        transform: "".concat(u, " ").concat(c, " ").concat(f)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, S = {
        outer: s,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: z({}, S.outer),
        children: [{
          tag: "g",
          attributes: z({}, S.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: z(z({}, n.icon.attributes), S.path)
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
function xm(t) {
  return t.tag === "g" ? t.children : [t];
}
var Sm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? Na(i.split(" ").map(function(o) {
          return o.trim();
        })) : El();
        return a.prefix || (a.prefix = qt()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.mask, s = r.maskId, u = r.transform, c = a.width, f = a.icon, d = o.width, g = o.icon, S = wh({
        transform: u,
        containerWidth: d,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: z(z({}, Wo), {}, {
          fill: "white"
        })
      }, x = f.children ? {
        children: f.children.map(Cu)
      } : {}, A = {
        tag: "g",
        attributes: z({}, S.inner),
        children: [Cu(z({
          tag: f.tag,
          attributes: z(z({}, f.attributes), S.path)
        }, x))]
      }, E = {
        tag: "g",
        attributes: z({}, S.outer),
        children: [A]
      }, P = "mask-".concat(s || Vn()), k = "clip-".concat(s || Vn()), $ = {
        tag: "mask",
        attributes: z(z({}, Wo), {}, {
          id: P,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, E]
      }, L = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: k
          },
          children: xm(g)
        }, $]
      };
      return n.push(L, {
        tag: "rect",
        attributes: z({
          fill: "currentColor",
          "clip-path": "url(#".concat(k, ")"),
          mask: "url(#".concat(P, ")")
        }, Wo)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, Om = {
  provides: function(e) {
    var r = !1;
    Wt.matchMedia && (r = Wt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = z(z({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: z(z({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: z(z({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: z(z({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: z(z({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: z(z({}, o), {}, {
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
}, Am = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, Em = [Oh, cm, fm, dm, pm, vm, bm, wm, Sm, Om, Am];
Mh(Em, {
  mixoutsTo: We
});
We.noAuto;
var $f = We.config, ti = We.library;
We.dom;
var ga = We.parse;
We.findIconDefinition;
We.toHtml;
var _m = We.icon;
We.layer;
var Cm = We.text;
We.counter;
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
function et(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ku(Object(r), !0).forEach(function(n) {
      Me(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ku(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ya(t) {
  "@babel/helpers - typeof";
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ya(t);
}
function Me(t, e, r) {
  return e = Nm(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function km(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function Tm(t, e) {
  if (t == null)
    return {};
  var r = km(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ps(t) {
  return Pm(t) || $m(t) || Im(t) || Dm();
}
function Pm(t) {
  if (Array.isArray(t))
    return $s(t);
}
function $m(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Im(t, e) {
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
function Dm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rm(t, e) {
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
function Nm(t) {
  var e = Rm(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Fm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, If = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(E, P, k) {
      if (!c(P) || d(P) || g(P) || S(P) || u(P))
        return P;
      var $, L = 0, R = 0;
      if (f(P))
        for ($ = [], R = P.length; L < R; L++)
          $.push(r(E, P[L], k));
      else {
        $ = {};
        for (var M in P)
          Object.prototype.hasOwnProperty.call(P, M) && ($[E(M, k)] = r(E, P[M], k));
      }
      return $;
    }, n = function(E, P) {
      P = P || {};
      var k = P.separator || "_", $ = P.split || /(?=[A-Z])/;
      return E.split($).join(k);
    }, i = function(E) {
      return m(E) ? E : (E = E.replace(/[\-_\s]+(.)?/g, function(P, k) {
        return k ? k.toUpperCase() : "";
      }), E.substr(0, 1).toLowerCase() + E.substr(1));
    }, a = function(E) {
      var P = i(E);
      return P.substr(0, 1).toUpperCase() + P.substr(1);
    }, o = function(E, P) {
      return n(E, P).toLowerCase();
    }, s = Object.prototype.toString, u = function(E) {
      return typeof E == "function";
    }, c = function(E) {
      return E === Object(E);
    }, f = function(E) {
      return s.call(E) == "[object Array]";
    }, d = function(E) {
      return s.call(E) == "[object Date]";
    }, g = function(E) {
      return s.call(E) == "[object RegExp]";
    }, S = function(E) {
      return s.call(E) == "[object Boolean]";
    }, m = function(E) {
      return E = E - 0, E === E;
    }, x = function(E, P) {
      var k = P && "process" in P ? P.process : P;
      return typeof k != "function" ? E : function($, L) {
        return k($, E, L);
      };
    }, A = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(E, P) {
        return r(x(i, P), E);
      },
      decamelizeKeys: function(E, P) {
        return r(x(o, P), E, P);
      },
      pascalizeKeys: function(E, P) {
        return r(x(a, P), E);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(Fm);
})(If);
var Lm = If.exports, Mm = ["class", "style"];
function Bm(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = Lm.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function jm(t) {
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
        u.class = jm(f);
        break;
      case "style":
        u.style = Bm(f);
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
  var a = r.style, o = a === void 0 ? {} : a, s = Tm(r, Mm);
  return Ut(t.tag, et(et(et({}, e), {}, {
    class: i.class,
    style: et(et({}, i.style), o)
  }, i.attrs), s), n);
}
var Df = !1;
try {
  Df = process.env.NODE_ENV === "production";
} catch {
}
function zm() {
  if (!Df && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Dn(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Me({}, t, e) : {};
}
function Um(t) {
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
  }, Me(e, "fa-".concat(t.size), t.size !== null), Me(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), Me(e, "fa-pull-".concat(t.pull), t.pull !== null), Me(e, "fa-swap-opacity", t.swapOpacity), Me(e, "fa-bounce", t.bounce), Me(e, "fa-shake", t.shake), Me(e, "fa-beat", t.beat), Me(e, "fa-fade", t.fade), Me(e, "fa-beat-fade", t.beatFade), Me(e, "fa-flash", t.flash), Me(e, "fa-spin-pulse", t.spinPulse), Me(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Tu(t) {
  if (t && ya(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (ga.icon)
    return ga.icon(t);
  if (t === null)
    return null;
  if (ya(t) === "object" && t.prefix && t.iconName)
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
var Ht = mr({
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
    var n = r.attrs, i = oe(function() {
      return Tu(e.icon);
    }), a = oe(function() {
      return Dn("classes", Um(e));
    }), o = oe(function() {
      return Dn("transform", typeof e.transform == "string" ? ga.transform(e.transform) : e.transform);
    }), s = oe(function() {
      return Dn("mask", Tu(e.mask));
    }), u = oe(function() {
      return _m(i.value, et(et(et(et({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Ia(u, function(f) {
      if (!f)
        return zm("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = oe(function() {
      return u.value ? Tl(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
mr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, i = $f.familyPrefix, a = oe(function() {
      return ["".concat(i, "-layers")].concat(Ps(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return Ut("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
mr({
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
    var n = r.attrs, i = $f.familyPrefix, a = oe(function() {
      return Dn("classes", [].concat(Ps(e.counter ? ["".concat(i, "-layers-counter")] : []), Ps(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = oe(function() {
      return Dn("transform", typeof e.transform == "string" ? ga.transform(e.transform) : e.transform);
    }), s = oe(function() {
      var c = Cm(e.value.toString(), et(et({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = oe(function() {
      return Tl(s.value, {}, n);
    });
    return function() {
      return u.value;
    };
  }
});
var Vm = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Is = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Hm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, Wm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, qm = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Gm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, Ym = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Km = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
}, Pu = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Jm = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, Rf = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const gr = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Xm = {
  key: 0,
  class: "flex items-center"
}, Qm = {
  key: 1,
  class: "mr-1"
}, Zm = ["id", "disabled", "required", "name"], eg = { key: 5 }, tg = ["required", "disabled", "name"], rg = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, ng = ["href"], ig = {
  __name: "Input",
  props: /* @__PURE__ */ Np({
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
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    switchDescription: String,
    sublabel: String,
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
  emits: ["update:modelValue"],
  setup(t) {
    ti.add(Rf, Wm, Jm);
    const e = t;
    function r(o) {
      let s = [];
      return o.split("_").join(" ").split(" ").map(function(u) {
        s.push(u[0].toUpperCase() + u.slice(1));
      }), s.join(" ");
    }
    const n = ue(!1), i = Fp(t, "modelValue"), a = ue();
    return at(() => {
      n.value = !e.form, n ? a.value = i.value : a.value = e.form[e.field];
    }), watch(
      () => a.value,
      (o) => {
        n ? i.value = o : e.form[e.field] = o;
      }
    ), watch(
      () => e.form,
      () => {
        n ? a.value = i.value : a.value = e.form[e.field];
      }
    ), (o, s) => {
      var u, c, f, d;
      return O(), C("div", null, [
        t.noLabel ? K("", !0) : (O(), ae(W(Pl), {
          key: 0,
          customClass: t.labelCustomClass,
          for: t.field,
          value: t.label ? t.label : t.field ? r(t.field) : "",
          sublabel: t.sublabel,
          required: t.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        D("div", {
          class: Z(["relative flex w-full max-w-full items-stretch", t.noLabel ? "mb-1" : "mb-4"])
        }, [
          t.type === "switch" || t.type === "checkbox" ? (O(), C("label", Xm, [
            (u = o.$slots) != null && u.leftDescription ? Y(o.$slots, "leftDescription", { key: 0 }, void 0, !0) : t.leftDescription ? (O(), C("span", Qm, X(t.leftDescription ? t.leftDescription : "Disable"), 1)) : K("", !0),
            He(D("input", {
              id: t.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": s[0] || (s[0] = (g) => a.value = g),
              disabled: e.disabled,
              required: e.required,
              name: t.name ?? t.field
            }, null, 8, Zm), [
              [rf, a.value]
            ]),
            t.type === "switch" ? (O(), C("div", {
              key: 2,
              tabindex: "0",
              class: Z(["toggle-switch focusable !ml-0", {
                checked: a.value,
                disabled: e.disabled
              }])
            }, null, 2)) : (O(), C("div", {
              key: 3,
              tabindex: "0",
              class: Z(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": e.disabled,
                [t.checkboxCustomClass]: t.checkboxCustomClass
              }])
            }, [
              be(cr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: we(() => [
                  e.form[t.field] ? (O(), ae(W(Ht), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (O(), ae(W(Ht), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (c = o.$slots) != null && c.rightDescription ? Y(o.$slots, "rightDescription", { key: 4 }, void 0, !0) : t.rightDescription ? (O(), C("span", eg, X(t.rightDescription), 1)) : K("", !0)
          ])) : t.type === "select" ? He((O(), C("select", {
            key: 1,
            "onUpdate:modelValue": s[1] || (s[1] = (g) => a.value = g),
            required: e.required,
            disabled: e.disabled,
            name: t.name ?? t.field,
            class: "focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
          }, [
            Y(o.$slots, "default", {}, void 0, !0)
          ], 8, tg)), [
            [Lp, a.value]
          ]) : (O(), C(fe, { key: 2 }, [
            t.addon ? (O(), C("span", rg, X(t.addon), 1)) : K("", !0),
            be(W(fg), {
              id: t.field,
              type: t.type,
              class: Z(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "!rounded-l-none": t.addon,
                "!rounded-r-none": !!t.submitBtn || t.whatsApp || ((f = o.$slots) == null ? void 0 : f.submit),
                [t.inputCustomClass]: !!t.inputCustomClass
              }]),
              modelValue: a.value,
              "onUpdate:modelValue": s[2] || (s[2] = (g) => a.value = g),
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
            t.form ? (O(), C(fe, { key: 1 }, [
              t.submitBtn ? (O(), ae(W(Tc), {
                key: 0,
                form: t.form,
                class: Z(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: `submit-button-${t.field}`
              }, {
                default: we(() => [
                  ye(X(t.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : K("", !0),
              (d = o.$slots) != null && d.submit ? (O(), ae(W(Tc), {
                key: 1,
                form: t.form,
                class: Z(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: "button-input"
              }, {
                default: we(() => [
                  Y(o.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : K("", !0)
            ], 64)) : K("", !0),
            t.whatsApp ? (O(), C("a", {
              key: 2,
              class: Z(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", t.buttonCustomClass]),
              href: t.whatsApp,
              target: "_blank"
            }, [
              be(W(Ht), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, ng)) : K("", !0)
          ], 64))
        ], 2),
        t.form || t.error ? (O(), ae(W(ri), {
          key: 1,
          class: "mt-2",
          message: t.form ? t.form[t.field] : t.error
        }, null, 8, ["message"])) : K("", !0)
      ]);
    };
  }
}, lA = /* @__PURE__ */ gr(ig, [["__scopeId", "data-v-e7a8c1e3"]]), ag = { class: "text-sm text-red-600" }, ri = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => He((O(), C("div", null, [
      D("p", ag, X(t.message), 1)
    ], 512)), [
      [Vt, t.message]
    ]);
  }
}, og = { key: 0 }, sg = { key: 1 }, lg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, ug = {
  key: 3,
  class: "ml-1 text-red-500"
}, Pl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(t) {
    return (e, r) => (O(), C("label", {
      class: Z(["mb-1 block text-sm font-medium text-gray-700", t.customClass])
    }, [
      t.value ? (O(), C("span", og, X(t.value), 1)) : (O(), C("span", sg, [
        Y(e.$slots, "default")
      ])),
      t.sublabel ? (O(), C("span", lg, X(t.sublabel), 1)) : K("", !0),
      t.required ? (O(), C("span", ug, "*")) : K("", !0)
    ], 2));
  }
}, cg = ["value"], fg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = ue(null);
    return at(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (O(), C("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, cg));
  }
}, dg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, pg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], uA = {
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
    return (n, i) => (O(), C("div", null, [
      t.noLabel ? K("", !0) : (O(), ae(W(Pl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field)
      }, null, 8, ["for", "value"])),
      D("div", dg, [
        He(D("textarea", {
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
        }, null, 40, pg), [
          [Mp, e.form[t.field]]
        ])
      ]),
      be(W(ri), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var hg = Object.defineProperty, mg = Object.defineProperties, gg = Object.getOwnPropertyDescriptors, $u = Object.getOwnPropertySymbols, yg = Object.prototype.hasOwnProperty, vg = Object.prototype.propertyIsEnumerable, Iu = (t, e, r) => e in t ? hg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Dr = (t, e) => {
  for (var r in e || (e = {}))
    yg.call(e, r) && Iu(t, r, e[r]);
  if ($u)
    for (var r of $u(e))
      vg.call(e, r) && Iu(t, r, e[r]);
  return t;
}, Du = (t, e) => mg(t, gg(e));
const bg = {
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
}, wg = {
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
}, xg = {
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
}, Sg = {}, Og = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Ag = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Eg = [
  Ag
];
function _g(t, e) {
  return O(), C("svg", Og, Eg);
}
const Cg = /* @__PURE__ */ $l(Sg, [["render", _g]]), kg = {}, Tg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Pg = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), $g = [
  Pg
];
function Ig(t, e) {
  return O(), C("svg", Tg, $g);
}
const Dg = /* @__PURE__ */ $l(kg, [["render", Ig]]), Ru = {
  Deselect: Cg,
  OpenIndicator: Dg
}, Rg = {
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
function Ng(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let Fg = 0;
function Lg() {
  return ++Fg;
}
const Mg = {
  components: Dr({}, Ru),
  directives: { appendToBody: Rg },
  mixins: [bg, wg, xg],
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
          return t.hasOwnProperty("id") ? t.id : Ng(t);
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
      default: () => Lg()
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
          attributes: Dr({
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
        header: Du(Dr({}, t), { deselect: this.deselect }),
        footer: Du(Dr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Dr(Dr({}, Ru), this.components);
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
}, Bg = ["dir"], jg = ["id", "aria-expanded", "aria-owns"], zg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Ug = ["disabled", "title", "aria-label", "onClick"], Vg = {
  ref: "actions",
  class: "vs__actions"
}, Hg = ["disabled"], Wg = { class: "vs__spinner" }, qg = ["id"], Gg = ["id", "aria-selected", "onMouseover", "onClick"], Yg = {
  key: 0,
  class: "vs__no-options"
}, Kg = /* @__PURE__ */ ye(" Sorry, no matching options. "), Jg = ["id"];
function Xg(t, e, r, n, i, a) {
  const o = Bp("append-to-body");
  return O(), C("div", {
    dir: r.dir,
    class: Z(["v-select", a.stateClasses])
  }, [
    Y(t.$slots, "header", Ge(Ze(a.scope.header))),
    D("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => a.toggleDropdown(s))
    }, [
      D("div", zg, [
        (O(!0), C(fe, null, it(a.selectedValue, (s, u) => Y(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (O(), C("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            Y(t.$slots, "selected-option", Ge(Ze(a.normalizeOptionForSlot(s))), () => [
              ye(X(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (O(), C("button", {
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
              (O(), ae(zo(a.childComponents.Deselect)))
            ], 8, Ug)) : K("", !0)
          ]))
        ])), 256)),
        Y(t.$slots, "search", Ge(Ze(a.scope.search)), () => [
          D("input", Mn({ class: "vs__search" }, a.scope.search.attributes, jp(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", Vg, [
        He(D("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (O(), ae(zo(a.childComponents.Deselect)))
        ], 8, Hg), [
          [Vt, a.showClearButton]
        ]),
        Y(t.$slots, "open-indicator", Ge(Ze(a.scope.openIndicator)), () => [
          r.noDrop ? K("", !0) : (O(), ae(zo(a.childComponents.OpenIndicator), Ge(Mn({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        Y(t.$slots, "spinner", Ge(Ze(a.scope.spinner)), () => [
          He(D("div", Wg, "Loading...", 512), [
            [Vt, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, jg),
    be(cr, { name: r.transition }, {
      default: we(() => [
        a.dropdownOpen ? He((O(), C("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = jt((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          Y(t.$slots, "list-header", Ge(Ze(a.scope.listHeader))),
          (O(!0), C(fe, null, it(a.filteredOptions, (s, u) => (O(), C("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(s),
            role: "option",
            class: Z(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && u === t.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": u === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": u === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = u : null,
            onClick: jt((c) => r.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            Y(t.$slots, "option", Ge(Ze(a.normalizeOptionForSlot(s))), () => [
              ye(X(r.getOptionLabel(s)), 1)
            ])
          ], 42, Gg))), 128)),
          a.filteredOptions.length === 0 ? (O(), C("li", Yg, [
            Y(t.$slots, "no-options", Ge(Ze(a.scope.noOptions)), () => [
              Kg
            ])
          ])) : K("", !0),
          Y(t.$slots, "list-footer", Ge(Ze(a.scope.listFooter)))
        ], 40, qg)), [
          [o]
        ]) : (O(), C("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Jg))
      ]),
      _: 3
    }, 8, ["name"]),
    Y(t.$slots, "footer", Ge(Ze(a.scope.footer)))
  ], 10, Bg);
}
const Qg = /* @__PURE__ */ $l(Mg, [["render", Xg]]);
const cA = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return ti.add(Rf), (e, r) => (O(), ae(W(Qg), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, St = {
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
function Zg(t) {
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
      default: (t, e) => t.match(Zg(e))
    }
  }
}, ey = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, ty = {
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
      St.openOptions(this);
    },
    blurInput() {
      St.blurInput(this);
    },
    closeOptions() {
      St.closeOptions(this);
    },
    prevItem() {
      St.prevItem(this);
    },
    nextItem() {
      St.nextItem(this);
    },
    enterItem() {
      St.enterItem(this);
    },
    pointerSet(t) {
      St.pointerSet(this, t);
    },
    pointerAdjust() {
      St.pointerAdjust(this);
    },
    mousedownItem() {
      St.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, ry = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), ny = ["disabled", "tabindex", "id", "name", "value"], iy = ["data-vss-custom-attr"], ay = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function oy(t, e, r, n, i, a) {
  return O(), C("div", {
    class: Z(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    ry,
    D("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: i.searchText,
      onInput: e[0] || (e[0] = (o) => i.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = jt((...o) => a.openOptions && a.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = Ir((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = Ir(jt((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = Ir((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = Ir((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = Ir(jt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = Ir((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, ny),
    D("div", {
      class: Z(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, X(a.inputText), 11, iy),
    D("div", {
      class: Z(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = jt(() => {
      }, ["prevent"])),
      style: ra(a.menuStyle),
      tabindex: "-1"
    }, [
      (O(!0), C(fe, null, it(a.filteredOptions, (o, s) => (O(), C("div", {
        key: s,
        class: Z(["item", { selected: o.selected || i.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: jt((u) => a.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...u) => a.mousedownItem && a.mousedownItem(...u)),
        onMouseenter: (u) => a.pointerSet(s)
      }, [
        Y(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          ye(X(o.text), 1)
        ])
      ], 42, ay))), 128))
    ], 38)
  ], 34);
}
const Nu = /* @__PURE__ */ ey(ty, [["render", oy]]), Fu = {
  name: "ModelListSelect",
  mixins: [Nf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Ut(Nu, {
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
    ModelSelect: Nu
  }
};
const sy = {
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
    return (i, a) => (O(), C("div", null, [
      !t.noLabel && (t.label || t.field) ? (O(), ae(W(Pl), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field)
      }, null, 8, ["for", "value"])) : K("", !0),
      t.noForm ? (O(), ae(W(Fu), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"])) : (O(), C(fe, { key: 2 }, [
        be(W(Fu), {
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
        be(W(ri), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, ly = /* @__PURE__ */ gr(sy, [["__scopeId", "data-v-cebb574a"]]);
function Ff(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: uy } = Object.prototype, { getPrototypeOf: Il } = Object, La = ((t) => (e) => {
  const r = uy.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (t) => (t = t.toLowerCase(), (e) => La(e) === t), Ma = (t) => (e) => typeof e === t, { isArray: en } = Array, Hn = Ma("undefined");
function cy(t) {
  return t !== null && !Hn(t) && t.constructor !== null && !Hn(t.constructor) && Ye(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Lf = yt("ArrayBuffer");
function fy(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Lf(t.buffer), e;
}
const dy = Ma("string"), Ye = Ma("function"), Mf = Ma("number"), Ba = (t) => t !== null && typeof t == "object", py = (t) => t === !0 || t === !1, aa = (t) => {
  if (La(t) !== "object")
    return !1;
  const e = Il(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, hy = yt("Date"), my = yt("File"), gy = yt("Blob"), yy = yt("FileList"), vy = (t) => Ba(t) && Ye(t.pipe), by = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ye(t.append) && ((e = La(t)) === "formdata" || // detect form-data instance
  e === "object" && Ye(t.toString) && t.toString() === "[object FormData]"));
}, wy = yt("URLSearchParams"), xy = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ni(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), en(t))
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
const jf = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), zf = (t) => !Hn(t) && t !== jf;
function Ds() {
  const { caseless: t } = zf(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Bf(e, i) || i;
    aa(e[a]) && aa(n) ? e[a] = Ds(e[a], n) : aa(n) ? e[a] = Ds({}, n) : en(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ni(arguments[n], r);
  return e;
}
const Sy = (t, e, r, { allOwnKeys: n } = {}) => (ni(e, (i, a) => {
  r && Ye(i) ? t[a] = Ff(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), Oy = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Ay = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Ey = (t, e, r, n) => {
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
}, _y = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Cy = (t) => {
  if (!t)
    return null;
  if (en(t))
    return t;
  let e = t.length;
  if (!Mf(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, ky = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Il(Uint8Array)), Ty = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, Py = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, $y = yt("HTMLFormElement"), Iy = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Lu = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Dy = yt("RegExp"), Uf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ni(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, Ry = (t) => {
  Uf(t, (e, r) => {
    if (Ye(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (Ye(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ny = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return en(t) ? n(t) : n(String(t).split(e)), r;
}, Fy = () => {
}, Ly = (t, e) => (t = +t, Number.isFinite(t) ? t : e), qo = "abcdefghijklmnopqrstuvwxyz", Mu = "0123456789", Vf = {
  DIGIT: Mu,
  ALPHA: qo,
  ALPHA_DIGIT: qo + qo.toUpperCase() + Mu
}, My = (t = 16, e = Vf.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function By(t) {
  return !!(t && Ye(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const jy = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (Ba(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = en(n) ? [] : {};
        return ni(n, (o, s) => {
          const u = r(o, i + 1);
          !Hn(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, zy = yt("AsyncFunction"), Uy = (t) => t && (Ba(t) || Ye(t)) && Ye(t.then) && Ye(t.catch), T = {
  isArray: en,
  isArrayBuffer: Lf,
  isBuffer: cy,
  isFormData: by,
  isArrayBufferView: fy,
  isString: dy,
  isNumber: Mf,
  isBoolean: py,
  isObject: Ba,
  isPlainObject: aa,
  isUndefined: Hn,
  isDate: hy,
  isFile: my,
  isBlob: gy,
  isRegExp: Dy,
  isFunction: Ye,
  isStream: vy,
  isURLSearchParams: wy,
  isTypedArray: ky,
  isFileList: yy,
  forEach: ni,
  merge: Ds,
  extend: Sy,
  trim: xy,
  stripBOM: Oy,
  inherits: Ay,
  toFlatObject: Ey,
  kindOf: La,
  kindOfTest: yt,
  endsWith: _y,
  toArray: Cy,
  forEachEntry: Ty,
  matchAll: Py,
  isHTMLForm: $y,
  hasOwnProperty: Lu,
  hasOwnProp: Lu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Uf,
  freezeMethods: Ry,
  toObjectSet: Ny,
  toCamelCase: Iy,
  noop: Fy,
  toFiniteNumber: Ly,
  findKey: Bf,
  global: jf,
  isContextDefined: zf,
  ALPHABET: Vf,
  generateString: My,
  isSpecCompliantForm: By,
  toJSONObject: jy,
  isAsyncFn: zy,
  isThenable: Uy
};
function ne(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
T.inherits(ne, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Hf = ne.prototype, Wf = {};
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
Object.defineProperties(ne, Wf);
Object.defineProperty(Hf, "isAxiosError", { value: !0 });
ne.from = (t, e, r, n, i, a) => {
  const o = Object.create(Hf);
  return T.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ne.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Vy = null;
function Rs(t) {
  return T.isPlainObject(t) || T.isArray(t);
}
function qf(t) {
  return T.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Bu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = qf(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Hy(t) {
  return T.isArray(t) && !t.some(Rs);
}
const Wy = T.toFlatObject(T, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ja(t, e, r) {
  if (!T.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = T.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, A) {
    return !T.isUndefined(A[x]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(e);
  if (!T.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (T.isDate(m))
      return m.toISOString();
    if (!u && T.isBlob(m))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(m) || T.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, x, A) {
    let E = m;
    if (m && !A && typeof m == "object") {
      if (T.endsWith(x, "{}"))
        x = n ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if (T.isArray(m) && Hy(m) || (T.isFileList(m) || T.endsWith(x, "[]")) && (E = T.toArray(m)))
        return x = qf(x), E.forEach(function(k, $) {
          !(T.isUndefined(k) || k === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Bu([x], $, a) : o === null ? x : x + "[]",
            c(k)
          );
        }), !1;
    }
    return Rs(m) ? !0 : (e.append(Bu(A, x, a), c(m)), !1);
  }
  const d = [], g = Object.assign(Wy, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Rs
  });
  function S(m, x) {
    if (!T.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(m), T.forEach(m, function(E, P) {
        (!(T.isUndefined(E) || E === null) && i.call(
          e,
          E,
          T.isString(P) ? P.trim() : P,
          x,
          g
        )) === !0 && S(E, x ? x.concat(P) : [P]);
      }), d.pop();
    }
  }
  if (!T.isObject(t))
    throw new TypeError("data must be an object");
  return S(t), e;
}
function ju(t) {
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
  this._pairs = [], t && ja(t, this, e);
}
const Gf = Dl.prototype;
Gf.append = function(e, r) {
  this._pairs.push([e, r]);
};
Gf.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, ju);
  } : ju;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function qy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yf(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || qy, i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = T.isURLSearchParams(e) ? e.toString() : new Dl(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Gy {
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
    T.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const zu = Gy, Kf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yy = typeof URLSearchParams < "u" ? URLSearchParams : Dl, Ky = typeof FormData < "u" ? FormData : null, Jy = typeof Blob < "u" ? Blob : null, Xy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yy,
    FormData: Ky,
    Blob: Jy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jf = typeof window < "u" && typeof document < "u", Qy = ((t) => Jf && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Zy = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jf,
  hasStandardBrowserEnv: Qy,
  hasStandardBrowserWebWorkerEnv: Zy
}, Symbol.toStringTag, { value: "Module" })), mt = {
  ...ev,
  ...Xy
};
function tv(t, e) {
  return ja(t, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return mt.isNode && T.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function rv(t) {
  return T.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function nv(t) {
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
    return o = !o && T.isArray(i) ? i.length : o, u ? (T.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !T.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && T.isArray(i[o]) && (i[o] = nv(i[o])), !s);
  }
  if (T.isFormData(t) && T.isFunction(t.entries)) {
    const r = {};
    return T.forEachEntry(t, (n, i) => {
      e(rv(n), i, r, 0);
    }), r;
  }
  return null;
}
function iv(t, e, r) {
  if (T.isString(t))
    try {
      return (e || JSON.parse)(t), T.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Rl = {
  transitional: Kf,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = T.isObject(e);
    if (a && T.isHTMLForm(e) && (e = new FormData(e)), T.isFormData(e))
      return i ? JSON.stringify(Xf(e)) : e;
    if (T.isArrayBuffer(e) || T.isBuffer(e) || T.isStream(e) || T.isFile(e) || T.isBlob(e))
      return e;
    if (T.isArrayBufferView(e))
      return e.buffer;
    if (T.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return tv(e, this.formSerializer).toString();
      if ((s = T.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ja(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), iv(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Rl.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && T.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? ne.from(s, ne.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: mt.classes.FormData,
    Blob: mt.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rl.headers[t] = {};
});
const Nl = Rl, av = T.toObjectSet([
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
]), ov = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && av[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Uu = Symbol("internals");
function xn(t) {
  return t && String(t).trim().toLowerCase();
}
function oa(t) {
  return t === !1 || t == null ? t : T.isArray(t) ? t.map(oa) : String(t);
}
function sv(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const lv = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Go(t, e, r, n, i) {
  if (T.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!T.isString(e)) {
    if (T.isString(n))
      return e.indexOf(n) !== -1;
    if (T.isRegExp(n))
      return n.test(e);
  }
}
function uv(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function cv(t, e) {
  const r = T.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, e, i, a, o);
      },
      configurable: !0
    });
  });
}
class za {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, u, c) {
      const f = xn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(i, f);
      (!d || i[d] === void 0 || c === !0 || c === void 0 && i[d] !== !1) && (i[d || u] = oa(s));
    }
    const o = (s, u) => T.forEach(s, (c, f) => a(c, f, u));
    return T.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : T.isString(e) && (e = e.trim()) && !lv(e) ? o(ov(e), r) : e != null && a(r, e, n), this;
  }
  get(e, r) {
    if (e = xn(e), e) {
      const n = T.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return sv(i);
        if (T.isFunction(r))
          return r.call(this, i, n);
        if (T.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = xn(e), e) {
      const n = T.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Go(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = xn(o), o) {
        const s = T.findKey(n, o);
        s && (!r || Go(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return T.isArray(e) ? e.forEach(a) : a(e), i;
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
    return T.forEach(this, (i, a) => {
      const o = T.findKey(n, a);
      if (o) {
        r[o] = oa(i), delete r[a];
        return;
      }
      const s = e ? uv(a) : String(a).trim();
      s !== a && delete r[a], r[s] = oa(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && T.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Uu] = this[Uu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = xn(o);
      n[s] || (cv(i, o), n[s] = !0);
    }
    return T.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
za.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(za.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
T.freezeMethods(za);
const _t = za;
function Yo(t, e) {
  const r = this || Nl, n = e || r, i = _t.from(n.headers);
  let a = n.data;
  return T.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function Qf(t) {
  return !!(t && t.__CANCEL__);
}
function ii(t, e, r) {
  ne.call(this, t ?? "canceled", ne.ERR_CANCELED, e, r), this.name = "CanceledError";
}
T.inherits(ii, ne, {
  __CANCEL__: !0
});
function fv(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new ne(
    "Request failed with status code " + r.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const dv = mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      T.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), T.isString(n) && o.push("path=" + n), T.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function pv(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function hv(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Zf(t, e) {
  return t && !pv(e) ? hv(t, e) : e;
}
const mv = mt.hasStandardBrowserEnv ? (
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
      const s = T.isString(o) ? i(o) : o;
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
function gv(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function yv(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = n[a];
    o || (o = c), r[i] = u, n[i] = c;
    let d = a, g = 0;
    for (; d !== i; )
      g += r[d++], d = d % t;
    if (i = (i + 1) % t, i === a && (a = (a + 1) % t), c - o < e)
      return;
    const S = f && c - f;
    return S ? Math.round(g * 1e3 / S) : void 0;
  };
}
function Vu(t, e) {
  let r = 0;
  const n = yv(50, 250);
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
const vv = typeof XMLHttpRequest < "u", bv = vv && function(t) {
  return new Promise(function(r, n) {
    let i = t.data;
    const a = _t.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (T.isFormData(i)) {
      if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((f = a.getContentType()) !== !1) {
        const [x, ...A] = f ? f.split(";").map((E) => E.trim()).filter(Boolean) : [];
        a.setContentType([x || "multipart/form-data", ...A].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const x = t.auth.username || "", A = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(x + ":" + A));
    }
    const g = Zf(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), Yf(g, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function S() {
      if (!d)
        return;
      const x = _t.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), E = {
        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: x,
        config: t,
        request: d
      };
      fv(function(k) {
        r(k), c();
      }, function(k) {
        n(k), c();
      }, E), d = null;
    }
    if ("onloadend" in d ? d.onloadend = S : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, d.onabort = function() {
      d && (n(new ne("Request aborted", ne.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      n(new ne("Network Error", ne.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let A = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const E = t.transitional || Kf;
      t.timeoutErrorMessage && (A = t.timeoutErrorMessage), n(new ne(
        A,
        E.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        t,
        d
      )), d = null;
    }, mt.hasStandardBrowserEnv && (s && T.isFunction(s) && (s = s(t)), s || s !== !1 && mv(g))) {
      const x = t.xsrfHeaderName && t.xsrfCookieName && dv.read(t.xsrfCookieName);
      x && a.set(t.xsrfHeaderName, x);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in d && T.forEach(a.toJSON(), function(A, E) {
      d.setRequestHeader(E, A);
    }), T.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), o && o !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Vu(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Vu(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (x) => {
      d && (n(!x || x.type ? new ii(null, t, d) : x), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const m = gv(g);
    if (m && mt.protocols.indexOf(m) === -1) {
      n(new ne("Unsupported protocol " + m + ":", ne.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(i || null);
  });
}, Ns = {
  http: Vy,
  xhr: bv
};
T.forEach(Ns, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Hu = (t) => `- ${t}`, wv = (t) => T.isFunction(t) || t === null || t === !1, ed = {
  getAdapter: (t) => {
    t = T.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !wv(r) && (n = Ns[(o = String(r)).toLowerCase()], n === void 0))
        throw new ne(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Hu).join(`
`) : " " + Hu(a[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ns
};
function Ko(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ii(null, t);
}
function Wu(t) {
  return Ko(t), t.headers = _t.from(t.headers), t.data = Yo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ed.getAdapter(t.adapter || Nl.adapter)(t).then(function(n) {
    return Ko(t), n.data = Yo.call(
      t,
      t.transformResponse,
      n
    ), n.headers = _t.from(n.headers), n;
  }, function(n) {
    return Qf(n) || (Ko(t), n && n.response && (n.response.data = Yo.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = _t.from(n.response.headers))), Promise.reject(n);
  });
}
const qu = (t) => t instanceof _t ? t.toJSON() : t;
function Wr(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, d) {
    return T.isPlainObject(c) && T.isPlainObject(f) ? T.merge.call({ caseless: d }, c, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function i(c, f, d) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, f, d);
  }
  function a(c, f) {
    if (!T.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, d) {
    if (d in e)
      return n(c, f);
    if (d in t)
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
    headers: (c, f) => i(qu(c), qu(f), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = u[f] || i, g = d(t[f], e[f], f);
    T.isUndefined(g) && d !== s || (r[f] = g);
  }), r;
}
const td = "1.6.7", Fl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Fl[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Gu = {};
Fl.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + td + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new ne(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ne.ERR_DEPRECATED
      );
    return r && !Gu[o] && (Gu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
function xv(t, e, r) {
  if (typeof t != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], u = s === void 0 || o(s, a, t);
      if (u !== !0)
        throw new ne("option " + a + " must be " + u, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ne("Unknown option " + a, ne.ERR_BAD_OPTION);
  }
}
const Fs = {
  assertOptions: xv,
  validators: Fl
}, Lt = Fs.validators;
class va {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new zu(),
      response: new zu()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Wr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Fs.assertOptions(n, {
      silentJSONParsing: Lt.transitional(Lt.boolean),
      forcedJSONParsing: Lt.transitional(Lt.boolean),
      clarifyTimeoutError: Lt.transitional(Lt.boolean)
    }, !1), i != null && (T.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Fs.assertOptions(i, {
      encode: Lt.function,
      serialize: Lt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && T.merge(
      a.common,
      a[r.method]
    );
    a && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), r.headers = _t.concat(o, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(r) === !1 || (u = u && x.synchronous, s.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(x) {
      c.push(x.fulfilled, x.rejected);
    });
    let f, d = 0, g;
    if (!u) {
      const m = [Wu.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, c), g = m.length, f = Promise.resolve(r); d < g; )
        f = f.then(m[d++], m[d++]);
      return f;
    }
    g = s.length;
    let S = r;
    for (d = 0; d < g; ) {
      const m = s[d++], x = s[d++];
      try {
        S = m(S);
      } catch (A) {
        x.call(this, A);
        break;
      }
    }
    try {
      f = Wu.call(this, S);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, g = c.length; d < g; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(e) {
    e = Wr(this.defaults, e);
    const r = Zf(e.baseURL, e.url);
    return Yf(r, e.params, e.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(e) {
  va.prototype[e] = function(r, n) {
    return this.request(Wr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(Wr(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  va.prototype[e] = r(), va.prototype[e + "Form"] = r(!0);
});
const sa = va;
class Ll {
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
      token: new Ll(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const Sv = Ll;
function Ov(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Av(t) {
  return T.isObject(t) && t.isAxiosError === !0;
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
const Ev = Ls;
function rd(t) {
  const e = new sa(t), r = Ff(sa.prototype.request, e);
  return T.extend(r, sa.prototype, e, { allOwnKeys: !0 }), T.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return rd(Wr(t, i));
  }, r;
}
const Oe = rd(Nl);
Oe.Axios = sa;
Oe.CanceledError = ii;
Oe.CancelToken = Sv;
Oe.isCancel = Qf;
Oe.VERSION = td;
Oe.toFormData = ja;
Oe.AxiosError = ne;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(e) {
  return Promise.all(e);
};
Oe.spread = Ov;
Oe.isAxiosError = Av;
Oe.mergeConfig = Wr;
Oe.AxiosHeaders = _t;
Oe.formToJSON = (t) => Xf(T.isHTMLForm(t) ? new FormData(t) : t);
Oe.getAdapter = ed.getAdapter;
Oe.HttpStatusCode = Ev;
Oe.default = Oe;
const Yu = Oe;
var rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ua(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function _v(t) {
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
var Cv = function(e) {
  return kv(e) && !Tv(e);
};
function kv(t) {
  return !!t && typeof t == "object";
}
function Tv(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Iv(t);
}
var Pv = typeof Symbol == "function" && Symbol.for, $v = Pv ? Symbol.for("react.element") : 60103;
function Iv(t) {
  return t.$$typeof === $v;
}
function Dv(t) {
  return Array.isArray(t) ? [] : {};
}
function Wn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? qr(Dv(t), t, e) : t;
}
function Rv(t, e, r) {
  return t.concat(e).map(function(n) {
    return Wn(n, r);
  });
}
function Nv(t, e) {
  if (!e.customMerge)
    return qr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : qr;
}
function Fv(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Ku(t) {
  return Object.keys(t).concat(Fv(t));
}
function nd(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Lv(t, e) {
  return nd(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Mv(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Ku(t).forEach(function(i) {
    n[i] = Wn(t[i], r);
  }), Ku(e).forEach(function(i) {
    Lv(t, i) || (nd(t, i) && r.isMergeableObject(e[i]) ? n[i] = Nv(i, r)(t[i], e[i], r) : n[i] = Wn(e[i], r));
  }), n;
}
function qr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Rv, r.isMergeableObject = r.isMergeableObject || Cv, r.cloneUnlessOtherwiseSpecified = Wn;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : Mv(t, e, r) : Wn(e, r);
}
qr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return qr(n, i, r);
  }, {});
};
var Bv = qr, jv = Bv;
const zv = /* @__PURE__ */ Ua(jv);
var Uv = Error, Vv = EvalError, Hv = RangeError, Wv = ReferenceError, id = SyntaxError, ai = TypeError, qv = URIError, Gv = function() {
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
}, Ju = typeof Symbol < "u" && Symbol, Yv = Gv, Kv = function() {
  return typeof Ju != "function" || typeof Symbol != "function" || typeof Ju("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Yv();
}, Xu = {
  foo: {}
}, Jv = Object, Xv = function() {
  return { __proto__: Xu }.foo === Xu.foo && !({ __proto__: null } instanceof Jv);
}, Qv = "Function.prototype.bind called on incompatible ", Zv = Object.prototype.toString, eb = Math.max, tb = "[object Function]", Qu = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, rb = function(e, r) {
  for (var n = [], i = r || 0, a = 0; i < e.length; i += 1, a += 1)
    n[a] = e[i];
  return n;
}, nb = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, ib = function(e) {
  var r = this;
  if (typeof r != "function" || Zv.apply(r) !== tb)
    throw new TypeError(Qv + r);
  for (var n = rb(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        Qu(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      Qu(n, arguments)
    );
  }, o = eb(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (i = Function("binder", "return function (" + nb(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, ab = ib, Ml = Function.prototype.bind || ab, ob = Function.prototype.call, sb = Object.prototype.hasOwnProperty, lb = Ml, ub = lb.call(ob, sb), ee, cb = Uv, fb = Vv, db = Hv, pb = Wv, Gr = id, Ur = ai, hb = qv, ad = Function, Jo = function(t) {
  try {
    return ad('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, fr = Object.getOwnPropertyDescriptor;
if (fr)
  try {
    fr({}, "");
  } catch {
    fr = null;
  }
var Xo = function() {
  throw new Ur();
}, mb = fr ? function() {
  try {
    return arguments.callee, Xo;
  } catch {
    try {
      return fr(arguments, "callee").get;
    } catch {
      return Xo;
    }
  }
}() : Xo, Rr = Kv(), gb = Xv(), Ce = Object.getPrototypeOf || (gb ? function(t) {
  return t.__proto__;
} : null), Lr = {}, yb = typeof Uint8Array > "u" || !Ce ? ee : Ce(Uint8Array), dr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? ee : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ee : ArrayBuffer,
  "%ArrayIteratorPrototype%": Rr && Ce ? Ce([][Symbol.iterator]()) : ee,
  "%AsyncFromSyncIteratorPrototype%": ee,
  "%AsyncFunction%": Lr,
  "%AsyncGenerator%": Lr,
  "%AsyncGeneratorFunction%": Lr,
  "%AsyncIteratorPrototype%": Lr,
  "%Atomics%": typeof Atomics > "u" ? ee : Atomics,
  "%BigInt%": typeof BigInt > "u" ? ee : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? ee : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? ee : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? ee : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": cb,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": fb,
  "%Float32Array%": typeof Float32Array > "u" ? ee : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? ee : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ee : FinalizationRegistry,
  "%Function%": ad,
  "%GeneratorFunction%": Lr,
  "%Int8Array%": typeof Int8Array > "u" ? ee : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? ee : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? ee : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Rr && Ce ? Ce(Ce([][Symbol.iterator]())) : ee,
  "%JSON%": typeof JSON == "object" ? JSON : ee,
  "%Map%": typeof Map > "u" ? ee : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Rr || !Ce ? ee : Ce((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? ee : Promise,
  "%Proxy%": typeof Proxy > "u" ? ee : Proxy,
  "%RangeError%": db,
  "%ReferenceError%": pb,
  "%Reflect%": typeof Reflect > "u" ? ee : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? ee : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Rr || !Ce ? ee : Ce((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ee : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Rr && Ce ? Ce(""[Symbol.iterator]()) : ee,
  "%Symbol%": Rr ? Symbol : ee,
  "%SyntaxError%": Gr,
  "%ThrowTypeError%": mb,
  "%TypedArray%": yb,
  "%TypeError%": Ur,
  "%Uint8Array%": typeof Uint8Array > "u" ? ee : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ee : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? ee : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? ee : Uint32Array,
  "%URIError%": hb,
  "%WeakMap%": typeof WeakMap > "u" ? ee : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? ee : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? ee : WeakSet
};
if (Ce)
  try {
    null.error;
  } catch (t) {
    var vb = Ce(Ce(t));
    dr["%Error.prototype%"] = vb;
  }
var bb = function t(e) {
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
    i && Ce && (r = Ce(i.prototype));
  }
  return dr[e] = r, r;
}, Zu = {
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
}, oi = Ml, ba = ub, wb = oi.call(Function.call, Array.prototype.concat), xb = oi.call(Function.apply, Array.prototype.splice), ec = oi.call(Function.call, String.prototype.replace), wa = oi.call(Function.call, String.prototype.slice), Sb = oi.call(Function.call, RegExp.prototype.exec), Ob = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ab = /\\(\\)?/g, Eb = function(e) {
  var r = wa(e, 0, 1), n = wa(e, -1);
  if (r === "%" && n !== "%")
    throw new Gr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Gr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return ec(e, Ob, function(a, o, s, u) {
    i[i.length] = s ? ec(u, Ab, "$1") : o || a;
  }), i;
}, _b = function(e, r) {
  var n = e, i;
  if (ba(Zu, n) && (i = Zu[n], n = "%" + i[0] + "%"), ba(dr, n)) {
    var a = dr[n];
    if (a === Lr && (a = bb(n)), typeof a > "u" && !r)
      throw new Ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new Gr("intrinsic " + e + " does not exist!");
}, yr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Ur("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Ur('"allowMissing" argument must be a boolean');
  if (Sb(/^%?[^%]*%?$/, e) === null)
    throw new Gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Eb(e), i = n.length > 0 ? n[0] : "", a = _b("%" + i + "%", r), o = a.name, s = a.value, u = !1, c = a.alias;
  c && (i = c[0], xb(n, wb([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var g = n[f], S = wa(g, 0, 1), m = wa(g, -1);
    if ((S === '"' || S === "'" || S === "`" || m === '"' || m === "'" || m === "`") && S !== m)
      throw new Gr("property names with quotes must have matching quotes");
    if ((g === "constructor" || !d) && (u = !0), i += "." + g, o = "%" + i + "%", ba(dr, o))
      s = dr[o];
    else if (s != null) {
      if (!(g in s)) {
        if (!r)
          throw new Ur("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (fr && f + 1 >= n.length) {
        var x = fr(s, g);
        d = !!x, d && "get" in x && !("originalValue" in x.get) ? s = x.get : s = s[g];
      } else
        d = ba(s, g), s = s[g];
      d && !u && (dr[o] = s);
    }
  }
  return s;
}, od = { exports: {} }, Cb = yr, Ms = Cb("%Object.defineProperty%", !0), Bs = function() {
  if (Ms)
    try {
      return Ms({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Bs.hasArrayLengthDefineBug = function() {
  if (!Bs())
    return null;
  try {
    return Ms([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var sd = Bs, kb = yr, la = kb("%Object.getOwnPropertyDescriptor%", !0);
if (la)
  try {
    la([], "length");
  } catch {
    la = null;
  }
var ld = la, Tb = sd(), Pb = yr, Rn = Tb && Pb("%Object.defineProperty%", !0);
if (Rn)
  try {
    Rn({}, "a", { value: 1 });
  } catch {
    Rn = !1;
  }
var $b = id, Nr = ai, tc = ld, Ib = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Nr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Nr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Nr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Nr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Nr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Nr("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!tc && tc(e, r);
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
    throw new $b("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Db = yr, rc = Ib, Rb = sd(), nc = ld, ic = ai, Nb = Db("%Math.floor%"), Fb = function(e, r) {
  if (typeof e != "function")
    throw new ic("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Nb(r) !== r)
    throw new ic("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && nc) {
    var o = nc(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (Rb ? rc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : rc(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Ml, r = yr, n = Fb, i = ai, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(g) {
    if (typeof g != "function")
      throw new i("a function is required");
    var S = s(e, o, arguments);
    return n(
      S,
      1 + c(0, g.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return s(e, a, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(od);
var Lb = od.exports, ud = yr, cd = Lb, Mb = cd(ud("String.prototype.indexOf")), Bb = function(e, r) {
  var n = ud(e, !!r);
  return typeof n == "function" && Mb(e, ".prototype.") > -1 ? cd(n) : n;
};
const jb = {}, zb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jb
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ _v(zb);
var Bl = typeof Map == "function" && Map.prototype, Qo = Object.getOwnPropertyDescriptor && Bl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, xa = Bl && Qo && typeof Qo.get == "function" ? Qo.get : null, ac = Bl && Map.prototype.forEach, jl = typeof Set == "function" && Set.prototype, Zo = Object.getOwnPropertyDescriptor && jl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Sa = jl && Zo && typeof Zo.get == "function" ? Zo.get : null, oc = jl && Set.prototype.forEach, Ub = typeof WeakMap == "function" && WeakMap.prototype, Nn = Ub ? WeakMap.prototype.has : null, Vb = typeof WeakSet == "function" && WeakSet.prototype, Fn = Vb ? WeakSet.prototype.has : null, Hb = typeof WeakRef == "function" && WeakRef.prototype, sc = Hb ? WeakRef.prototype.deref : null, Wb = Boolean.prototype.valueOf, qb = Object.prototype.toString, Gb = Function.prototype.toString, Yb = String.prototype.match, zl = String.prototype.slice, zt = String.prototype.replace, Kb = String.prototype.toUpperCase, lc = String.prototype.toLowerCase, fd = RegExp.prototype.test, uc = Array.prototype.concat, dt = Array.prototype.join, Jb = Array.prototype.slice, cc = Math.floor, js = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, es = Object.getOwnPropertySymbols, zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Yr = typeof Symbol == "function" && typeof Symbol.iterator == "object", Re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Yr || "symbol") ? Symbol.toStringTag : null, dd = Object.prototype.propertyIsEnumerable, fc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function dc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || fd.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -cc(-t) : cc(t);
    if (n !== t) {
      var i = String(n), a = zl.call(e, i.length + 1);
      return zt.call(i, r, "$&_") + "." + zt.call(zt.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return zt.call(e, r, "$&_");
}
var Us = Be, pc = Us.custom, hc = hd(pc) ? pc : null, Xb = function t(e, r, n, i) {
  var a = r || {};
  if (Bt(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Bt(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Bt(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Bt(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Bt(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
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
    return s ? dc(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? dc(e, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Vs(e) ? "[Array]" : "[Object]";
  var d = m0(a, n);
  if (typeof i > "u")
    i = [];
  else if (md(i, e) >= 0)
    return "[Circular]";
  function g(v, w, y) {
    if (w && (i = Jb.call(i), i.push(w)), y) {
      var j = {
        depth: a.depth
      };
      return Bt(a, "quoteStyle") && (j.quoteStyle = a.quoteStyle), t(v, j, n + 1, i);
    }
    return t(v, a, n + 1, i);
  }
  if (typeof e == "function" && !mc(e)) {
    var S = o0(e), m = zi(e, g);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (m.length > 0 ? " { " + dt.call(m, ", ") + " }" : "");
  }
  if (hd(e)) {
    var x = Yr ? zt.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : zs.call(e);
    return typeof e == "object" && !Yr ? Sn(x) : x;
  }
  if (d0(e)) {
    for (var A = "<" + lc.call(String(e.nodeName)), E = e.attributes || [], P = 0; P < E.length; P++)
      A += " " + E[P].name + "=" + pd(Qb(E[P].value), "double", a);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + lc.call(String(e.nodeName)) + ">", A;
  }
  if (Vs(e)) {
    if (e.length === 0)
      return "[]";
    var k = zi(e, g);
    return d && !h0(k) ? "[" + Hs(k, d) + "]" : "[ " + dt.call(k, ", ") + " ]";
  }
  if (e0(e)) {
    var $ = zi(e, g);
    return !("cause" in Error.prototype) && "cause" in e && !dd.call(e, "cause") ? "{ [" + String(e) + "] " + dt.call(uc.call("[cause]: " + g(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + dt.call($, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (hc && typeof e[hc] == "function" && Us)
      return Us(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (s0(e)) {
    var L = [];
    return ac && ac.call(e, function(v, w) {
      L.push(g(w, e, !0) + " => " + g(v, e));
    }), gc("Map", xa.call(e), L, d);
  }
  if (c0(e)) {
    var R = [];
    return oc && oc.call(e, function(v) {
      R.push(g(v, e));
    }), gc("Set", Sa.call(e), R, d);
  }
  if (l0(e))
    return ts("WeakMap");
  if (f0(e))
    return ts("WeakSet");
  if (u0(e))
    return ts("WeakRef");
  if (r0(e))
    return Sn(g(Number(e)));
  if (i0(e))
    return Sn(g(js.call(e)));
  if (n0(e))
    return Sn(Wb.call(e));
  if (t0(e))
    return Sn(g(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === rt)
    return "{ [object globalThis] }";
  if (!Zb(e) && !mc(e)) {
    var M = zi(e, g), U = fc ? fc(e) === Object.prototype : e instanceof Object || e.constructor === Object, B = e instanceof Object ? "" : "null prototype", I = !U && Re && Object(e) === e && Re in e ? zl.call(Yt(e), 8, -1) : B ? "Object" : "", V = U || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", h = V + (I || B ? "[" + dt.call(uc.call([], I || [], B || []), ": ") + "] " : "");
    return M.length === 0 ? h + "{}" : d ? h + "{" + Hs(M, d) + "}" : h + "{ " + dt.call(M, ", ") + " }";
  }
  return String(e);
};
function pd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Qb(t) {
  return zt.call(String(t), /"/g, "&quot;");
}
function Vs(t) {
  return Yt(t) === "[object Array]" && (!Re || !(typeof t == "object" && Re in t));
}
function Zb(t) {
  return Yt(t) === "[object Date]" && (!Re || !(typeof t == "object" && Re in t));
}
function mc(t) {
  return Yt(t) === "[object RegExp]" && (!Re || !(typeof t == "object" && Re in t));
}
function e0(t) {
  return Yt(t) === "[object Error]" && (!Re || !(typeof t == "object" && Re in t));
}
function t0(t) {
  return Yt(t) === "[object String]" && (!Re || !(typeof t == "object" && Re in t));
}
function r0(t) {
  return Yt(t) === "[object Number]" && (!Re || !(typeof t == "object" && Re in t));
}
function n0(t) {
  return Yt(t) === "[object Boolean]" && (!Re || !(typeof t == "object" && Re in t));
}
function hd(t) {
  if (Yr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !zs)
    return !1;
  try {
    return zs.call(t), !0;
  } catch {
  }
  return !1;
}
function i0(t) {
  if (!t || typeof t != "object" || !js)
    return !1;
  try {
    return js.call(t), !0;
  } catch {
  }
  return !1;
}
var a0 = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Bt(t, e) {
  return a0.call(t, e);
}
function Yt(t) {
  return qb.call(t);
}
function o0(t) {
  if (t.name)
    return t.name;
  var e = Yb.call(Gb.call(t), /^function\s*([\w$]+)/);
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
function s0(t) {
  if (!xa || !t || typeof t != "object")
    return !1;
  try {
    xa.call(t);
    try {
      Sa.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function l0(t) {
  if (!Nn || !t || typeof t != "object")
    return !1;
  try {
    Nn.call(t, Nn);
    try {
      Fn.call(t, Fn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function u0(t) {
  if (!sc || !t || typeof t != "object")
    return !1;
  try {
    return sc.call(t), !0;
  } catch {
  }
  return !1;
}
function c0(t) {
  if (!Sa || !t || typeof t != "object")
    return !1;
  try {
    Sa.call(t);
    try {
      xa.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function f0(t) {
  if (!Fn || !t || typeof t != "object")
    return !1;
  try {
    Fn.call(t, Fn);
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
function d0(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function gd(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return gd(zl.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = zt.call(zt.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, p0);
  return pd(i, "single", e);
}
function p0(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Kb.call(e.toString(16));
}
function Sn(t) {
  return "Object(" + t + ")";
}
function ts(t) {
  return t + " { ? }";
}
function gc(t, e, r, n) {
  var i = n ? Hs(r, n) : dt.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function h0(t) {
  for (var e = 0; e < t.length; e++)
    if (md(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function m0(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = dt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: dt.call(Array(e + 1), r)
  };
}
function Hs(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + dt.call(t, "," + r) + `
` + e.prev;
}
function zi(t, e) {
  var r = Vs(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = Bt(t, i) ? e(t[i], t) : "";
  }
  var a = typeof es == "function" ? es(t) : [], o;
  if (Yr) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var u in t)
    Bt(t, u) && (r && String(Number(u)) === u && u < t.length || Yr && o["$" + u] instanceof Symbol || (fd.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof es == "function")
    for (var c = 0; c < a.length; c++)
      dd.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var yd = yr, tn = Bb, g0 = Xb, y0 = ai, Ui = yd("%WeakMap%", !0), Vi = yd("%Map%", !0), v0 = tn("WeakMap.prototype.get", !0), b0 = tn("WeakMap.prototype.set", !0), w0 = tn("WeakMap.prototype.has", !0), x0 = tn("Map.prototype.get", !0), S0 = tn("Map.prototype.set", !0), O0 = tn("Map.prototype.has", !0), Ul = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, A0 = function(t, e) {
  var r = Ul(t, e);
  return r && r.value;
}, E0 = function(t, e, r) {
  var n = Ul(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, _0 = function(t, e) {
  return !!Ul(t, e);
}, C0 = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new y0("Side channel does not contain " + g0(a));
    },
    get: function(a) {
      if (Ui && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return v0(e, a);
      } else if (Vi) {
        if (r)
          return x0(r, a);
      } else if (n)
        return A0(n, a);
    },
    has: function(a) {
      if (Ui && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return w0(e, a);
      } else if (Vi) {
        if (r)
          return O0(r, a);
      } else if (n)
        return _0(n, a);
      return !1;
    },
    set: function(a, o) {
      Ui && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Ui()), b0(e, a, o)) : Vi ? (r || (r = new Vi()), S0(r, a, o)) : (n || (n = { key: {}, next: null }), E0(n, a, o));
    }
  };
  return i;
}, k0 = String.prototype.replace, T0 = /%20/g, rs = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Vl = {
  default: rs.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return k0.call(t, T0, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: rs.RFC1738,
  RFC3986: rs.RFC3986
}, P0 = Vl, ns = Object.prototype.hasOwnProperty, or = Array.isArray, ct = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), $0 = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (or(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, vd = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, I0 = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (or(e))
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
  return or(e) && !or(r) && (i = vd(e, n)), or(e) && or(r) ? (r.forEach(function(a, o) {
    if (ns.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return ns.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
  }, i);
}, D0 = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, R0 = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, N0 = function(e, r, n, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === P0.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + ct[c];
      continue;
    }
    if (c < 2048) {
      s = s + (ct[192 | c >> 6] + ct[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (ct[224 | c >> 12] + ct[128 | c >> 6 & 63] + ct[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), s += ct[240 | c >> 18] + ct[128 | c >> 12 & 63] + ct[128 | c >> 6 & 63] + ct[128 | c & 63];
  }
  return s;
}, F0 = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return $0(r), e;
}, L0 = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, M0 = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, B0 = function(e, r) {
  return [].concat(e, r);
}, j0 = function(e, r) {
  if (or(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, bd = {
  arrayToObject: vd,
  assign: D0,
  combine: B0,
  compact: F0,
  decode: R0,
  encode: N0,
  isBuffer: M0,
  isRegExp: L0,
  maybeMap: j0,
  merge: I0
}, wd = C0, ua = bd, Ln = Vl, z0 = Object.prototype.hasOwnProperty, yc = {
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
}, Et = Array.isArray, U0 = Array.prototype.push, xd = function(t, e) {
  U0.apply(t, Et(e) ? e : [e]);
}, V0 = Date.prototype.toISOString, vc = Ln.default, De = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ua.encode,
  encodeValuesOnly: !1,
  format: vc,
  formatter: Ln.formatters[vc],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return V0.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, H0 = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, is = {}, W0 = function t(e, r, n, i, a, o, s, u, c, f, d, g, S, m, x, A) {
  for (var E = e, P = A, k = 0, $ = !1; (P = P.get(is)) !== void 0 && !$; ) {
    var L = P.get(e);
    if (k += 1, typeof L < "u") {
      if (L === k)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof P.get(is) > "u" && (k = 0);
  }
  if (typeof u == "function" ? E = u(r, E) : E instanceof Date ? E = d(E) : n === "comma" && Et(E) && (E = ua.maybeMap(E, function(j) {
    return j instanceof Date ? d(j) : j;
  })), E === null) {
    if (a)
      return s && !m ? s(r, De.encoder, x, "key", g) : r;
    E = "";
  }
  if (H0(E) || ua.isBuffer(E)) {
    if (s) {
      var R = m ? r : s(r, De.encoder, x, "key", g);
      return [S(R) + "=" + S(s(E, De.encoder, x, "value", g))];
    }
    return [S(r) + "=" + S(String(E))];
  }
  var M = [];
  if (typeof E > "u")
    return M;
  var U;
  if (n === "comma" && Et(E))
    m && s && (E = ua.maybeMap(E, s)), U = [{ value: E.length > 0 ? E.join(",") || null : void 0 }];
  else if (Et(u))
    U = u;
  else {
    var B = Object.keys(E);
    U = c ? B.sort(c) : B;
  }
  for (var I = i && Et(E) && E.length === 1 ? r + "[]" : r, V = 0; V < U.length; ++V) {
    var h = U[V], v = typeof h == "object" && typeof h.value < "u" ? h.value : E[h];
    if (!(o && v === null)) {
      var w = Et(E) ? typeof n == "function" ? n(I, h) : I : I + (f ? "." + h : "[" + h + "]");
      A.set(e, k);
      var y = wd();
      y.set(is, A), xd(M, t(
        v,
        w,
        n,
        i,
        a,
        o,
        n === "comma" && m && Et(E) ? null : s,
        u,
        c,
        f,
        d,
        g,
        S,
        m,
        x,
        y
      ));
    }
  }
  return M;
}, q0 = function(e) {
  if (!e)
    return De;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || De.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Ln.default;
  if (typeof e.format < "u") {
    if (!z0.call(Ln.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Ln.formatters[n], a = De.filter;
  return (typeof e.filter == "function" || Et(e.filter)) && (a = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : De.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? De.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : De.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? De.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : De.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : De.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : De.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : De.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : De.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : De.strictNullHandling
  };
}, G0 = function(t, e) {
  var r = t, n = q0(e), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Et(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in yc ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var u = yc[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = wd(), d = 0; d < i.length; ++d) {
    var g = i[d];
    n.skipNulls && r[g] === null || xd(o, W0(
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
  var S = o.join(n.delimiter), m = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), S.length > 0 ? m + S : "";
}, Kr = bd, Ws = Object.prototype.hasOwnProperty, Y0 = Array.isArray, _e = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Kr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, K0 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Sd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, J0 = "utf8=%26%2310003%3B", X0 = "utf8=%E2%9C%93", Q0 = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === X0 ? c = "utf-8" : o[u] === J0 && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], d = f.indexOf("]="), g = d === -1 ? f.indexOf("=") : d + 1, S, m;
      g === -1 ? (S = r.decoder(f, _e.decoder, c, "key"), m = r.strictNullHandling ? null : "") : (S = r.decoder(f.slice(0, g), _e.decoder, c, "key"), m = Kr.maybeMap(
        Sd(f.slice(g + 1), r),
        function(x) {
          return r.decoder(x, _e.decoder, c, "value");
        }
      )), m && r.interpretNumericEntities && c === "iso-8859-1" && (m = K0(m)), f.indexOf("[]=") > -1 && (m = Y0(m) ? [m] : m), Ws.call(n, S) ? n[S] = Kr.combine(n[S], m) : n[S] = m;
    }
  return n;
}, Z0 = function(t, e, r, n) {
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
}, e1 = function(e, r, n, i) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(a), c = u ? a.slice(0, u.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && Ws.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var d = 0; n.depth > 0 && (u = s.exec(a)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && Ws.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + a.slice(u.index) + "]"), Z0(f, r, n, i);
  }
}, t1 = function(e) {
  if (!e)
    return _e;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? _e.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? _e.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : _e.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : _e.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : _e.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : _e.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : _e.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : _e.decoder,
    delimiter: typeof e.delimiter == "string" || Kr.isRegExp(e.delimiter) ? e.delimiter : _e.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : _e.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : _e.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : _e.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : _e.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : _e.strictNullHandling
  };
}, r1 = function(t, e) {
  var r = t1(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Q0(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], u = e1(s, n[s], r, typeof t == "string");
    i = Kr.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : Kr.compact(i);
}, n1 = G0, i1 = r1, a1 = Vl, bc = {
  formats: a1,
  parse: i1,
  stringify: n1
}, o1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(rt, function() {
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
      var x, A;
      for (x in m)
        A = m[x], A !== void 0 && m.hasOwnProperty(x) && (n[x] = A);
      return this;
    }, r.status = null, r.set = function(m) {
      var x = r.isStarted();
      m = i(m, n.minimum, 1), r.status = m === 1 ? null : m;
      var A = r.render(!x), E = A.querySelector(n.barSelector), P = n.speed, k = n.easing;
      return A.offsetWidth, s(function($) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(E, o(m, P, k)), m === 1 ? (u(A, {
          transition: "none",
          opacity: 1
        }), A.offsetWidth, setTimeout(function() {
          u(A, {
            transition: "all " + P + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), $();
          }, P);
        }, P)) : setTimeout($, P);
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
      var x = r.status;
      return x ? (typeof m != "number" && (m = (1 - x) * i(Math.random() * x, 0.1, 0.95)), x = i(x + m, 0, 0.994), r.set(x)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var m = 0, x = 0;
      r.promise = function(A) {
        return !A || A.state() === "resolved" ? this : (x === 0 && r.start(), m++, x++, A.always(function() {
          x--, x === 0 ? (m = 0, r.done()) : r.set((m - x) / m);
        }), this);
      };
    }(), r.render = function(m) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var x = document.createElement("div");
      x.id = "nprogress", x.innerHTML = n.template;
      var A = x.querySelector(n.barSelector), E = m ? "-100" : a(r.status || 0), P = document.querySelector(n.parent), k;
      return u(A, {
        transition: "all 0 linear",
        transform: "translate3d(" + E + "%,0,0)"
      }), n.showSpinner || (k = x.querySelector(n.spinnerSelector), k && S(k)), P != document.body && f(P, "nprogress-custom-parent"), P.appendChild(x), x;
    }, r.remove = function() {
      d(document.documentElement, "nprogress-busy"), d(document.querySelector(n.parent), "nprogress-custom-parent");
      var m = document.getElementById("nprogress");
      m && S(m);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var m = document.body.style, x = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
      return x + "Perspective" in m ? "translate3d" : x + "Transform" in m ? "translate" : "margin";
    };
    function i(m, x, A) {
      return m < x ? x : m > A ? A : m;
    }
    function a(m) {
      return (-1 + m) * 100;
    }
    function o(m, x, A) {
      var E;
      return n.positionUsing === "translate3d" ? E = { transform: "translate3d(" + a(m) + "%,0,0)" } : n.positionUsing === "translate" ? E = { transform: "translate(" + a(m) + "%,0)" } : E = { "margin-left": a(m) + "%" }, E.transition = "all " + x + "ms " + A, E;
    }
    var s = function() {
      var m = [];
      function x() {
        var A = m.shift();
        A && A(x);
      }
      return function(A) {
        m.push(A), m.length == 1 && x();
      };
    }(), u = function() {
      var m = ["Webkit", "O", "Moz", "ms"], x = {};
      function A($) {
        return $.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(L, R) {
          return R.toUpperCase();
        });
      }
      function E($) {
        var L = document.body.style;
        if ($ in L)
          return $;
        for (var R = m.length, M = $.charAt(0).toUpperCase() + $.slice(1), U; R--; )
          if (U = m[R] + M, U in L)
            return U;
        return $;
      }
      function P($) {
        return $ = A($), x[$] || (x[$] = E($));
      }
      function k($, L, R) {
        L = P(L), $.style[L] = R;
      }
      return function($, L) {
        var R = arguments, M, U;
        if (R.length == 2)
          for (M in L)
            U = L[M], U !== void 0 && L.hasOwnProperty(M) && k($, M, U);
        else
          k($, R[1], R[2]);
      };
    }();
    function c(m, x) {
      var A = typeof m == "string" ? m : g(m);
      return A.indexOf(" " + x + " ") >= 0;
    }
    function f(m, x) {
      var A = g(m), E = A + x;
      c(A, x) || (m.className = E.substring(1));
    }
    function d(m, x) {
      var A = g(m), E;
      c(m, x) && (E = A.replace(" " + x + " ", " "), m.className = E.substring(1, E.length - 1));
    }
    function g(m) {
      return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
    }
    function S(m) {
      m && m.parentNode && m.parentNode.removeChild(m);
    }
    return r;
  });
})(o1);
function Od(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function It(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var s1 = (t) => It("before", { cancelable: !0, detail: { visit: t } }), l1 = (t) => It("error", { detail: { errors: t } }), u1 = (t) => It("exception", { cancelable: !0, detail: { exception: t } }), wc = (t) => It("finish", { detail: { visit: t } }), c1 = (t) => It("invalid", { cancelable: !0, detail: { response: t } }), On = (t) => It("navigate", { detail: { page: t } }), f1 = (t) => It("progress", { detail: { progress: t } }), d1 = (t) => It("start", { detail: { visit: t } }), p1 = (t) => It("success", { detail: { page: t } });
function qs(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => qs(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => qs(e));
}
function Ad(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && _d(e, Ed(r, n), t[n]);
  return e;
}
function Ed(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function _d(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => _d(t, Ed(e, n.toString()), r[n]));
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
  Ad(r, t, e);
}
var h1 = { modal: null, listener: null, show(t) {
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
function Fr(t) {
  return new URL(t.toString(), window.location.toString());
}
function Hl(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = bc.stringify(zv(bc.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function An(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var xc = typeof window > "u", m1 = class {
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
      this.restoreScrollPositions(), On(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, An(window.location).href === An(t).href && window.location.reload();
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
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, wc(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, wc(t), t.onFinish(t));
  }
  resolvePreserveOption(t, e) {
    return typeof t == "function" ? t(e) : t === "errors" ? Object.keys(e.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: e = "get", data: r = {}, replace: n = !1, preserveScroll: i = !1, preserveState: a = !1, only: o = [], headers: s = {}, errorBag: u = "", forceFormData: c = !1, onCancelToken: f = () => {
  }, onBefore: d = () => {
  }, onStart: g = () => {
  }, onProgress: S = () => {
  }, onFinish: m = () => {
  }, onCancel: x = () => {
  }, onSuccess: A = () => {
  }, onError: E = () => {
  }, queryStringArrayFormat: P = "brackets" } = {}) {
    let k = typeof t == "string" ? Fr(t) : t;
    if ((qs(r) || c) && !(r instanceof FormData) && (r = Ad(r)), !(r instanceof FormData)) {
      let [R, M] = Hl(e, k, r, P);
      k = Fr(R), r = M;
    }
    let $ = { url: k, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, headers: s, errorBag: u, forceFormData: c, queryStringArrayFormat: P, cancelled: !1, completed: !1, interrupted: !1 };
    if (d($) === !1 || !s1($))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let L = this.createVisitId();
    this.activeVisit = { ...$, onCancelToken: f, onBefore: d, onStart: g, onProgress: S, onFinish: m, onCancel: x, onSuccess: A, onError: E, queryStringArrayFormat: P, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), d1($), g($), Yu({ method: e, url: An(k).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...u && u.length ? { "X-Inertia-Error-Bag": u } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (R) => {
      r instanceof FormData && (R.percentage = R.progress ? Math.round(R.progress * 100) : 0, f1(R), S(R));
    } }).then((R) => {
      var I;
      if (!this.isInertiaResponse(R))
        return Promise.reject({ response: R });
      let M = R.data;
      o.length && M.component === this.page.component && (M.props = { ...this.page.props, ...M.props }), i = this.resolvePreserveOption(i, M), a = this.resolvePreserveOption(a, M), a && ((I = window.history.state) != null && I.rememberedState) && M.component === this.page.component && (M.rememberedState = window.history.state.rememberedState);
      let U = k, B = Fr(M.url);
      return U.hash && !B.hash && An(U).href === B.href && (B.hash = U.hash, M.url = B.href), this.setPage(M, { visitId: L, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let R = this.page.props.errors || {};
      if (Object.keys(R).length > 0) {
        let M = u ? R[u] ? R[u] : {} : R;
        return l1(M), E(M);
      }
      return p1(this.page), A(this.page);
    }).catch((R) => {
      if (this.isInertiaResponse(R.response))
        return this.setPage(R.response.data, { visitId: L });
      if (this.isLocationVisitResponse(R.response)) {
        let M = Fr(R.response.headers["x-inertia-location"]), U = k;
        U.hash && !M.hash && An(U).href === M.href && (M.hash = U.hash), this.locationVisit(M, i === !0);
      } else if (R.response)
        c1(R.response) && h1.show(R.response.data);
      else
        return Promise.reject(R);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((R) => {
      if (!Yu.isCancel(R)) {
        let M = u1(R);
        if (this.activeVisit && this.finishVisit(this.activeVisit), M)
          return Promise.reject(R);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || Fr(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
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
      let e = Fr(this.page.url);
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
    xc || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!xc)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let i = e(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, g1 = { buildDOMElement(t) {
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
function y1(t, e, r) {
  let n = {}, i = 0;
  function a() {
    let f = i += 1;
    return n[f] = [], f.toString();
  }
  function o(f) {
    f === null || Object.keys(n).indexOf(f) === -1 || (delete n[f], c());
  }
  function s(f, d = []) {
    f !== null && Object.keys(n).indexOf(f) > -1 && (n[f] = d), c();
  }
  function u() {
    let f = e(""), d = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, g = Object.values(n).reduce((S, m) => S.concat(m), []).reduce((S, m) => {
      if (m.indexOf("<") === -1)
        return S;
      if (m.indexOf("<title ") === 0) {
        let A = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return S.title = A ? `${A[1]}${e(A[2])}${A[3]}` : m, S;
      }
      let x = m.match(/ inertia="[^"]+"/);
      return x ? S[x[0]] = m : S[Object.keys(S).length] = m, S;
    }, d);
    return Object.values(g);
  }
  function c() {
    t ? r(u()) : g1.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = a();
    return { update: (d) => s(f, d), disconnect: () => o(f) };
  } };
}
function Cd(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var ur = new m1(), Oa = { exports: {} };
Oa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", d = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Object]", x = "[object Promise]", A = "[object RegExp]", E = "[object Set]", P = "[object String]", k = "[object Symbol]", $ = "[object WeakMap]", L = "[object ArrayBuffer]", R = "[object DataView]", M = "[object Float32Array]", U = "[object Float64Array]", B = "[object Int8Array]", I = "[object Int16Array]", V = "[object Int32Array]", h = "[object Uint8Array]", v = "[object Uint8ClampedArray]", w = "[object Uint16Array]", y = "[object Uint32Array]", j = /[\\^$.*+?()[\]{}|]/g, F = /\w*$/, N = /^\[object .+?Constructor\]$/, G = /^(?:0|[1-9]\d*)$/, J = {};
  J[a] = J[o] = J[L] = J[R] = J[s] = J[u] = J[M] = J[U] = J[B] = J[I] = J[V] = J[g] = J[S] = J[m] = J[A] = J[E] = J[P] = J[k] = J[h] = J[v] = J[w] = J[y] = !0, J[c] = J[f] = J[$] = !1;
  var Ke = typeof rt == "object" && rt && rt.Object === Object && rt, Dt = typeof self == "object" && self && self.Object === Object && self, xe = Ke || Dt || Function("return this")(), Je = e && !e.nodeType && e, te = Je && !0 && t && !t.nodeType && t, Kt = te && te.exports === Je;
  function rn(l, p) {
    return l.set(p[0], p[1]), l;
  }
  function je(l, p) {
    return l.add(p), l;
  }
  function Jt(l, p) {
    for (var b = -1, _ = l ? l.length : 0; ++b < _ && p(l[b], b, l) !== !1; )
      ;
    return l;
  }
  function br(l, p) {
    for (var b = -1, _ = p.length, Q = l.length; ++b < _; )
      l[Q + b] = p[b];
    return l;
  }
  function Xt(l, p, b, _) {
    var Q = -1, q = l ? l.length : 0;
    for (_ && q && (b = l[++Q]); ++Q < q; )
      b = p(b, l[Q], Q, l);
    return b;
  }
  function Qt(l, p) {
    for (var b = -1, _ = Array(l); ++b < l; )
      _[b] = p(b);
    return _;
  }
  function wr(l, p) {
    return l == null ? void 0 : l[p];
  }
  function nn(l) {
    var p = !1;
    if (l != null && typeof l.toString != "function")
      try {
        p = !!(l + "");
      } catch {
      }
    return p;
  }
  function di(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(_, Q) {
      b[++p] = [Q, _];
    }), b;
  }
  function an(l, p) {
    return function(b) {
      return l(p(b));
    };
  }
  function pi(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(_) {
      b[++p] = _;
    }), b;
  }
  var Za = Array.prototype, eo = Function.prototype, xr = Object.prototype, on = xe["__core-js_shared__"], hi = function() {
    var l = /[^.]+$/.exec(on && on.keys && on.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), mi = eo.toString, ot = xr.hasOwnProperty, Sr = xr.toString, to = RegExp(
    "^" + mi.call(ot).replace(j, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Zt = Kt ? xe.Buffer : void 0, Or = xe.Symbol, sn = xe.Uint8Array, qe = an(Object.getPrototypeOf, Object), gi = Object.create, yi = xr.propertyIsEnumerable, ro = Za.splice, ln = Object.getOwnPropertySymbols, Ar = Zt ? Zt.isBuffer : void 0, vi = an(Object.keys, Object), Er = Qe(xe, "DataView"), er = Qe(xe, "Map"), Xe = Qe(xe, "Promise"), _r = Qe(xe, "Set"), un = Qe(xe, "WeakMap"), tr = Qe(Object, "create"), cn = Ne(Er), rr = Ne(er), fn = Ne(Xe), dn = Ne(_r), pn = Ne(un), Rt = Or ? Or.prototype : void 0, bi = Rt ? Rt.valueOf : void 0;
  function vt(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function no() {
    this.__data__ = tr ? tr(null) : {};
  }
  function io(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function ao(l) {
    var p = this.__data__;
    if (tr) {
      var b = p[l];
      return b === n ? void 0 : b;
    }
    return ot.call(p, l) ? p[l] : void 0;
  }
  function wi(l) {
    var p = this.__data__;
    return tr ? p[l] !== void 0 : ot.call(p, l);
  }
  function hn(l, p) {
    var b = this.__data__;
    return b[l] = tr && p === void 0 ? n : p, this;
  }
  vt.prototype.clear = no, vt.prototype.delete = io, vt.prototype.get = ao, vt.prototype.has = wi, vt.prototype.set = hn;
  function ke(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function oo() {
    this.__data__ = [];
  }
  function so(l) {
    var p = this.__data__, b = kr(p, l);
    if (b < 0)
      return !1;
    var _ = p.length - 1;
    return b == _ ? p.pop() : ro.call(p, b, 1), !0;
  }
  function lo(l) {
    var p = this.__data__, b = kr(p, l);
    return b < 0 ? void 0 : p[b][1];
  }
  function uo(l) {
    return kr(this.__data__, l) > -1;
  }
  function co(l, p) {
    var b = this.__data__, _ = kr(b, l);
    return _ < 0 ? b.push([l, p]) : b[_][1] = p, this;
  }
  ke.prototype.clear = oo, ke.prototype.delete = so, ke.prototype.get = lo, ke.prototype.has = uo, ke.prototype.set = co;
  function Pe(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function fo() {
    this.__data__ = {
      hash: new vt(),
      map: new (er || ke)(),
      string: new vt()
    };
  }
  function po(l) {
    return ir(this, l).delete(l);
  }
  function ho(l) {
    return ir(this, l).get(l);
  }
  function mo(l) {
    return ir(this, l).has(l);
  }
  function go(l, p) {
    return ir(this, l).set(l, p), this;
  }
  Pe.prototype.clear = fo, Pe.prototype.delete = po, Pe.prototype.get = ho, Pe.prototype.has = mo, Pe.prototype.set = go;
  function Fe(l) {
    this.__data__ = new ke(l);
  }
  function yo() {
    this.__data__ = new ke();
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
  function xo(l, p) {
    var b = this.__data__;
    if (b instanceof ke) {
      var _ = b.__data__;
      if (!er || _.length < r - 1)
        return _.push([l, p]), this;
      b = this.__data__ = new Pe(_);
    }
    return b.set(l, p), this;
  }
  Fe.prototype.clear = yo, Fe.prototype.delete = vo, Fe.prototype.get = bo, Fe.prototype.has = wo, Fe.prototype.set = xo;
  function Cr(l, p) {
    var b = vn(l) || Pr(l) ? Qt(l.length, String) : [], _ = b.length, Q = !!_;
    for (var q in l)
      (p || ot.call(l, q)) && !(Q && (q == "length" || No(q, _))) && b.push(q);
    return b;
  }
  function xi(l, p, b) {
    var _ = l[p];
    (!(ot.call(l, p) && _i(_, b)) || b === void 0 && !(p in l)) && (l[p] = b);
  }
  function kr(l, p) {
    for (var b = l.length; b--; )
      if (_i(l[b][0], p))
        return b;
    return -1;
  }
  function st(l, p) {
    return l && yn(p, wn(p), l);
  }
  function mn(l, p, b, _, Q, q, re) {
    var ie;
    if (_ && (ie = q ? _(l, Q, q, re) : _(l)), ie !== void 0)
      return ie;
    if (!ut(l))
      return l;
    var Se = vn(l);
    if (Se) {
      if (ie = Do(l), !p)
        return Po(l, ie);
    } else {
      var se = wt(l), $e = se == f || se == d;
      if (Ci(l))
        return Tr(l, p);
      if (se == m || se == a || $e && !q) {
        if (nn(l))
          return q ? l : {};
        if (ie = lt($e ? {} : l), !p)
          return $o(l, st(ie, l));
      } else {
        if (!J[se])
          return q ? l : {};
        ie = Ro(l, se, mn, p);
      }
    }
    re || (re = new Fe());
    var Le = re.get(l);
    if (Le)
      return Le;
    if (re.set(l, ie), !Se)
      var Ae = b ? Io(l) : wn(l);
    return Jt(Ae || l, function(Ie, Te) {
      Ae && (Te = Ie, Ie = l[Te]), xi(ie, Te, mn(Ie, p, b, _, Te, l, re));
    }), ie;
  }
  function So(l) {
    return ut(l) ? gi(l) : {};
  }
  function Oo(l, p, b) {
    var _ = p(l);
    return vn(l) ? _ : br(_, b(l));
  }
  function Ao(l) {
    return Sr.call(l);
  }
  function Eo(l) {
    if (!ut(l) || Lo(l))
      return !1;
    var p = bn(l) || nn(l) ? to : N;
    return p.test(Ne(l));
  }
  function _o(l) {
    if (!Ai(l))
      return vi(l);
    var p = [];
    for (var b in Object(l))
      ot.call(l, b) && b != "constructor" && p.push(b);
    return p;
  }
  function Tr(l, p) {
    if (p)
      return l.slice();
    var b = new l.constructor(l.length);
    return l.copy(b), b;
  }
  function gn(l) {
    var p = new l.constructor(l.byteLength);
    return new sn(p).set(new sn(l)), p;
  }
  function nr(l, p) {
    var b = p ? gn(l.buffer) : l.buffer;
    return new l.constructor(b, l.byteOffset, l.byteLength);
  }
  function Si(l, p, b) {
    var _ = p ? b(di(l), !0) : di(l);
    return Xt(_, rn, new l.constructor());
  }
  function Oi(l) {
    var p = new l.constructor(l.source, F.exec(l));
    return p.lastIndex = l.lastIndex, p;
  }
  function Co(l, p, b) {
    var _ = p ? b(pi(l), !0) : pi(l);
    return Xt(_, je, new l.constructor());
  }
  function ko(l) {
    return bi ? Object(bi.call(l)) : {};
  }
  function To(l, p) {
    var b = p ? gn(l.buffer) : l.buffer;
    return new l.constructor(b, l.byteOffset, l.length);
  }
  function Po(l, p) {
    var b = -1, _ = l.length;
    for (p || (p = Array(_)); ++b < _; )
      p[b] = l[b];
    return p;
  }
  function yn(l, p, b, _) {
    b || (b = {});
    for (var Q = -1, q = p.length; ++Q < q; ) {
      var re = p[Q], ie = _ ? _(b[re], l[re], re, b, l) : void 0;
      xi(b, re, ie === void 0 ? l[re] : ie);
    }
    return b;
  }
  function $o(l, p) {
    return yn(l, bt(l), p);
  }
  function Io(l) {
    return Oo(l, wn, bt);
  }
  function ir(l, p) {
    var b = l.__data__;
    return Fo(p) ? b[typeof p == "string" ? "string" : "hash"] : b.map;
  }
  function Qe(l, p) {
    var b = wr(l, p);
    return Eo(b) ? b : void 0;
  }
  var bt = ln ? an(ln, Object) : Bo, wt = Ao;
  (Er && wt(new Er(new ArrayBuffer(1))) != R || er && wt(new er()) != g || Xe && wt(Xe.resolve()) != x || _r && wt(new _r()) != E || un && wt(new un()) != $) && (wt = function(l) {
    var p = Sr.call(l), b = p == m ? l.constructor : void 0, _ = b ? Ne(b) : void 0;
    if (_)
      switch (_) {
        case cn:
          return R;
        case rr:
          return g;
        case fn:
          return x;
        case dn:
          return E;
        case pn:
          return $;
      }
    return p;
  });
  function Do(l) {
    var p = l.length, b = l.constructor(p);
    return p && typeof l[0] == "string" && ot.call(l, "index") && (b.index = l.index, b.input = l.input), b;
  }
  function lt(l) {
    return typeof l.constructor == "function" && !Ai(l) ? So(qe(l)) : {};
  }
  function Ro(l, p, b, _) {
    var Q = l.constructor;
    switch (p) {
      case L:
        return gn(l);
      case s:
      case u:
        return new Q(+l);
      case R:
        return nr(l, _);
      case M:
      case U:
      case B:
      case I:
      case V:
      case h:
      case v:
      case w:
      case y:
        return To(l, _);
      case g:
        return Si(l, _, b);
      case S:
      case P:
        return new Q(l);
      case A:
        return Oi(l);
      case E:
        return Co(l, _, b);
      case k:
        return ko(l);
    }
  }
  function No(l, p) {
    return p = p ?? i, !!p && (typeof l == "number" || G.test(l)) && l > -1 && l % 1 == 0 && l < p;
  }
  function Fo(l) {
    var p = typeof l;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? l !== "__proto__" : l === null;
  }
  function Lo(l) {
    return !!hi && hi in l;
  }
  function Ai(l) {
    var p = l && l.constructor, b = typeof p == "function" && p.prototype || xr;
    return l === b;
  }
  function Ne(l) {
    if (l != null) {
      try {
        return mi.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function Ei(l) {
    return mn(l, !0, !0);
  }
  function _i(l, p) {
    return l === p || l !== l && p !== p;
  }
  function Pr(l) {
    return Mo(l) && ot.call(l, "callee") && (!yi.call(l, "callee") || Sr.call(l) == a);
  }
  var vn = Array.isArray;
  function $r(l) {
    return l != null && ki(l.length) && !bn(l);
  }
  function Mo(l) {
    return Ti(l) && $r(l);
  }
  var Ci = Ar || jo;
  function bn(l) {
    var p = ut(l) ? Sr.call(l) : "";
    return p == f || p == d;
  }
  function ki(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= i;
  }
  function ut(l) {
    var p = typeof l;
    return !!l && (p == "object" || p == "function");
  }
  function Ti(l) {
    return !!l && typeof l == "object";
  }
  function wn(l) {
    return $r(l) ? Cr(l) : _o(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = Ei;
})(Oa, Oa.exports);
var v1 = Oa.exports;
const Ot = /* @__PURE__ */ Ua(v1);
var Aa = { exports: {} };
Aa.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", g = "[object Error]", S = "[object Function]", m = "[object GeneratorFunction]", x = "[object Map]", A = "[object Number]", E = "[object Null]", P = "[object Object]", k = "[object Promise]", $ = "[object Proxy]", L = "[object RegExp]", R = "[object Set]", M = "[object String]", U = "[object Symbol]", B = "[object Undefined]", I = "[object WeakMap]", V = "[object ArrayBuffer]", h = "[object DataView]", v = "[object Float32Array]", w = "[object Float64Array]", y = "[object Int8Array]", j = "[object Int16Array]", F = "[object Int32Array]", N = "[object Uint8Array]", G = "[object Uint8ClampedArray]", J = "[object Uint16Array]", Ke = "[object Uint32Array]", Dt = /[\\^$.*+?()[\]{}|]/g, xe = /^\[object .+?Constructor\]$/, Je = /^(?:0|[1-9]\d*)$/, te = {};
  te[v] = te[w] = te[y] = te[j] = te[F] = te[N] = te[G] = te[J] = te[Ke] = !0, te[s] = te[u] = te[V] = te[f] = te[h] = te[d] = te[g] = te[S] = te[x] = te[A] = te[P] = te[L] = te[R] = te[M] = te[I] = !1;
  var Kt = typeof rt == "object" && rt && rt.Object === Object && rt, rn = typeof self == "object" && self && self.Object === Object && self, je = Kt || rn || Function("return this")(), Jt = e && !e.nodeType && e, br = Jt && !0 && t && !t.nodeType && t, Xt = br && br.exports === Jt, Qt = Xt && Kt.process, wr = function() {
    try {
      return Qt && Qt.binding && Qt.binding("util");
    } catch {
    }
  }(), nn = wr && wr.isTypedArray;
  function di(l, p) {
    for (var b = -1, _ = l == null ? 0 : l.length, Q = 0, q = []; ++b < _; ) {
      var re = l[b];
      p(re, b, l) && (q[Q++] = re);
    }
    return q;
  }
  function an(l, p) {
    for (var b = -1, _ = p.length, Q = l.length; ++b < _; )
      l[Q + b] = p[b];
    return l;
  }
  function pi(l, p) {
    for (var b = -1, _ = l == null ? 0 : l.length; ++b < _; )
      if (p(l[b], b, l))
        return !0;
    return !1;
  }
  function Za(l, p) {
    for (var b = -1, _ = Array(l); ++b < l; )
      _[b] = p(b);
    return _;
  }
  function eo(l) {
    return function(p) {
      return l(p);
    };
  }
  function xr(l, p) {
    return l.has(p);
  }
  function on(l, p) {
    return l == null ? void 0 : l[p];
  }
  function hi(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(_, Q) {
      b[++p] = [Q, _];
    }), b;
  }
  function mi(l, p) {
    return function(b) {
      return l(p(b));
    };
  }
  function ot(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(_) {
      b[++p] = _;
    }), b;
  }
  var Sr = Array.prototype, to = Function.prototype, Zt = Object.prototype, Or = je["__core-js_shared__"], sn = to.toString, qe = Zt.hasOwnProperty, gi = function() {
    var l = /[^.]+$/.exec(Or && Or.keys && Or.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), yi = Zt.toString, ro = RegExp(
    "^" + sn.call(qe).replace(Dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ln = Xt ? je.Buffer : void 0, Ar = je.Symbol, vi = je.Uint8Array, Er = Zt.propertyIsEnumerable, er = Sr.splice, Xe = Ar ? Ar.toStringTag : void 0, _r = Object.getOwnPropertySymbols, un = ln ? ln.isBuffer : void 0, tr = mi(Object.keys, Object), cn = bt(je, "DataView"), rr = bt(je, "Map"), fn = bt(je, "Promise"), dn = bt(je, "Set"), pn = bt(je, "WeakMap"), Rt = bt(Object, "create"), bi = Ne(cn), vt = Ne(rr), no = Ne(fn), io = Ne(dn), ao = Ne(pn), wi = Ar ? Ar.prototype : void 0, hn = wi ? wi.valueOf : void 0;
  function ke(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function oo() {
    this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
  }
  function so(l) {
    var p = this.has(l) && delete this.__data__[l];
    return this.size -= p ? 1 : 0, p;
  }
  function lo(l) {
    var p = this.__data__;
    if (Rt) {
      var b = p[l];
      return b === n ? void 0 : b;
    }
    return qe.call(p, l) ? p[l] : void 0;
  }
  function uo(l) {
    var p = this.__data__;
    return Rt ? p[l] !== void 0 : qe.call(p, l);
  }
  function co(l, p) {
    var b = this.__data__;
    return this.size += this.has(l) ? 0 : 1, b[l] = Rt && p === void 0 ? n : p, this;
  }
  ke.prototype.clear = oo, ke.prototype.delete = so, ke.prototype.get = lo, ke.prototype.has = uo, ke.prototype.set = co;
  function Pe(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function fo() {
    this.__data__ = [], this.size = 0;
  }
  function po(l) {
    var p = this.__data__, b = Tr(p, l);
    if (b < 0)
      return !1;
    var _ = p.length - 1;
    return b == _ ? p.pop() : er.call(p, b, 1), --this.size, !0;
  }
  function ho(l) {
    var p = this.__data__, b = Tr(p, l);
    return b < 0 ? void 0 : p[b][1];
  }
  function mo(l) {
    return Tr(this.__data__, l) > -1;
  }
  function go(l, p) {
    var b = this.__data__, _ = Tr(b, l);
    return _ < 0 ? (++this.size, b.push([l, p])) : b[_][1] = p, this;
  }
  Pe.prototype.clear = fo, Pe.prototype.delete = po, Pe.prototype.get = ho, Pe.prototype.has = mo, Pe.prototype.set = go;
  function Fe(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var _ = l[p];
      this.set(_[0], _[1]);
    }
  }
  function yo() {
    this.size = 0, this.__data__ = {
      hash: new ke(),
      map: new (rr || Pe)(),
      string: new ke()
    };
  }
  function vo(l) {
    var p = Qe(this, l).delete(l);
    return this.size -= p ? 1 : 0, p;
  }
  function bo(l) {
    return Qe(this, l).get(l);
  }
  function wo(l) {
    return Qe(this, l).has(l);
  }
  function xo(l, p) {
    var b = Qe(this, l), _ = b.size;
    return b.set(l, p), this.size += b.size == _ ? 0 : 1, this;
  }
  Fe.prototype.clear = yo, Fe.prototype.delete = vo, Fe.prototype.get = bo, Fe.prototype.has = wo, Fe.prototype.set = xo;
  function Cr(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.__data__ = new Fe(); ++p < b; )
      this.add(l[p]);
  }
  function xi(l) {
    return this.__data__.set(l, n), this;
  }
  function kr(l) {
    return this.__data__.has(l);
  }
  Cr.prototype.add = Cr.prototype.push = xi, Cr.prototype.has = kr;
  function st(l) {
    var p = this.__data__ = new Pe(l);
    this.size = p.size;
  }
  function mn() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function So(l) {
    var p = this.__data__, b = p.delete(l);
    return this.size = p.size, b;
  }
  function Oo(l) {
    return this.__data__.get(l);
  }
  function Ao(l) {
    return this.__data__.has(l);
  }
  function Eo(l, p) {
    var b = this.__data__;
    if (b instanceof Pe) {
      var _ = b.__data__;
      if (!rr || _.length < r - 1)
        return _.push([l, p]), this.size = ++b.size, this;
      b = this.__data__ = new Fe(_);
    }
    return b.set(l, p), this.size = b.size, this;
  }
  st.prototype.clear = mn, st.prototype.delete = So, st.prototype.get = Oo, st.prototype.has = Ao, st.prototype.set = Eo;
  function _o(l, p) {
    var b = Pr(l), _ = !b && _i(l), Q = !b && !_ && $r(l), q = !b && !_ && !Q && Ti(l), re = b || _ || Q || q, ie = re ? Za(l.length, String) : [], Se = ie.length;
    for (var se in l)
      (p || qe.call(l, se)) && !(re && // Safari 9 has enumerable `arguments.length` in strict mode.
      (se == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Q && (se == "offset" || se == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      q && (se == "buffer" || se == "byteLength" || se == "byteOffset") || // Skip index properties.
      Ro(se, Se))) && ie.push(se);
    return ie;
  }
  function Tr(l, p) {
    for (var b = l.length; b--; )
      if (Ei(l[b][0], p))
        return b;
    return -1;
  }
  function gn(l, p, b) {
    var _ = p(l);
    return Pr(l) ? _ : an(_, b(l));
  }
  function nr(l) {
    return l == null ? l === void 0 ? B : E : Xe && Xe in Object(l) ? wt(l) : Ai(l);
  }
  function Si(l) {
    return ut(l) && nr(l) == s;
  }
  function Oi(l, p, b, _, Q) {
    return l === p ? !0 : l == null || p == null || !ut(l) && !ut(p) ? l !== l && p !== p : Co(l, p, b, _, Oi, Q);
  }
  function Co(l, p, b, _, Q, q) {
    var re = Pr(l), ie = Pr(p), Se = re ? u : lt(l), se = ie ? u : lt(p);
    Se = Se == s ? P : Se, se = se == s ? P : se;
    var $e = Se == P, Le = se == P, Ae = Se == se;
    if (Ae && $r(l)) {
      if (!$r(p))
        return !1;
      re = !0, $e = !1;
    }
    if (Ae && !$e)
      return q || (q = new st()), re || Ti(l) ? yn(l, p, b, _, Q, q) : $o(l, p, Se, b, _, Q, q);
    if (!(b & i)) {
      var Ie = $e && qe.call(l, "__wrapped__"), Te = Le && qe.call(p, "__wrapped__");
      if (Ie || Te) {
        var Nt = Ie ? l.value() : l, xt = Te ? p.value() : p;
        return q || (q = new st()), Q(Nt, xt, b, _, q);
      }
    }
    return Ae ? (q || (q = new st()), Io(l, p, b, _, Q, q)) : !1;
  }
  function ko(l) {
    if (!ki(l) || Fo(l))
      return !1;
    var p = Ci(l) ? ro : xe;
    return p.test(Ne(l));
  }
  function To(l) {
    return ut(l) && bn(l.length) && !!te[nr(l)];
  }
  function Po(l) {
    if (!Lo(l))
      return tr(l);
    var p = [];
    for (var b in Object(l))
      qe.call(l, b) && b != "constructor" && p.push(b);
    return p;
  }
  function yn(l, p, b, _, Q, q) {
    var re = b & i, ie = l.length, Se = p.length;
    if (ie != Se && !(re && Se > ie))
      return !1;
    var se = q.get(l);
    if (se && q.get(p))
      return se == p;
    var $e = -1, Le = !0, Ae = b & a ? new Cr() : void 0;
    for (q.set(l, p), q.set(p, l); ++$e < ie; ) {
      var Ie = l[$e], Te = p[$e];
      if (_)
        var Nt = re ? _(Te, Ie, $e, p, l, q) : _(Ie, Te, $e, l, p, q);
      if (Nt !== void 0) {
        if (Nt)
          continue;
        Le = !1;
        break;
      }
      if (Ae) {
        if (!pi(p, function(xt, ar) {
          if (!xr(Ae, ar) && (Ie === xt || Q(Ie, xt, b, _, q)))
            return Ae.push(ar);
        })) {
          Le = !1;
          break;
        }
      } else if (!(Ie === Te || Q(Ie, Te, b, _, q))) {
        Le = !1;
        break;
      }
    }
    return q.delete(l), q.delete(p), Le;
  }
  function $o(l, p, b, _, Q, q, re) {
    switch (b) {
      case h:
        if (l.byteLength != p.byteLength || l.byteOffset != p.byteOffset)
          return !1;
        l = l.buffer, p = p.buffer;
      case V:
        return !(l.byteLength != p.byteLength || !q(new vi(l), new vi(p)));
      case f:
      case d:
      case A:
        return Ei(+l, +p);
      case g:
        return l.name == p.name && l.message == p.message;
      case L:
      case M:
        return l == p + "";
      case x:
        var ie = hi;
      case R:
        var Se = _ & i;
        if (ie || (ie = ot), l.size != p.size && !Se)
          return !1;
        var se = re.get(l);
        if (se)
          return se == p;
        _ |= a, re.set(l, p);
        var $e = yn(ie(l), ie(p), _, Q, q, re);
        return re.delete(l), $e;
      case U:
        if (hn)
          return hn.call(l) == hn.call(p);
    }
    return !1;
  }
  function Io(l, p, b, _, Q, q) {
    var re = b & i, ie = ir(l), Se = ie.length, se = ir(p), $e = se.length;
    if (Se != $e && !re)
      return !1;
    for (var Le = Se; Le--; ) {
      var Ae = ie[Le];
      if (!(re ? Ae in p : qe.call(p, Ae)))
        return !1;
    }
    var Ie = q.get(l);
    if (Ie && q.get(p))
      return Ie == p;
    var Te = !0;
    q.set(l, p), q.set(p, l);
    for (var Nt = re; ++Le < Se; ) {
      Ae = ie[Le];
      var xt = l[Ae], ar = p[Ae];
      if (_)
        var tu = re ? _(ar, xt, Ae, p, l, q) : _(xt, ar, Ae, l, p, q);
      if (!(tu === void 0 ? xt === ar || Q(xt, ar, b, _, q) : tu)) {
        Te = !1;
        break;
      }
      Nt || (Nt = Ae == "constructor");
    }
    if (Te && !Nt) {
      var Pi = l.constructor, $i = p.constructor;
      Pi != $i && "constructor" in l && "constructor" in p && !(typeof Pi == "function" && Pi instanceof Pi && typeof $i == "function" && $i instanceof $i) && (Te = !1);
    }
    return q.delete(l), q.delete(p), Te;
  }
  function ir(l) {
    return gn(l, wn, Do);
  }
  function Qe(l, p) {
    var b = l.__data__;
    return No(p) ? b[typeof p == "string" ? "string" : "hash"] : b.map;
  }
  function bt(l, p) {
    var b = on(l, p);
    return ko(b) ? b : void 0;
  }
  function wt(l) {
    var p = qe.call(l, Xe), b = l[Xe];
    try {
      l[Xe] = void 0;
      var _ = !0;
    } catch {
    }
    var Q = yi.call(l);
    return _ && (p ? l[Xe] = b : delete l[Xe]), Q;
  }
  var Do = _r ? function(l) {
    return l == null ? [] : (l = Object(l), di(_r(l), function(p) {
      return Er.call(l, p);
    }));
  } : Bo, lt = nr;
  (cn && lt(new cn(new ArrayBuffer(1))) != h || rr && lt(new rr()) != x || fn && lt(fn.resolve()) != k || dn && lt(new dn()) != R || pn && lt(new pn()) != I) && (lt = function(l) {
    var p = nr(l), b = p == P ? l.constructor : void 0, _ = b ? Ne(b) : "";
    if (_)
      switch (_) {
        case bi:
          return h;
        case vt:
          return x;
        case no:
          return k;
        case io:
          return R;
        case ao:
          return I;
      }
    return p;
  });
  function Ro(l, p) {
    return p = p ?? o, !!p && (typeof l == "number" || Je.test(l)) && l > -1 && l % 1 == 0 && l < p;
  }
  function No(l) {
    var p = typeof l;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? l !== "__proto__" : l === null;
  }
  function Fo(l) {
    return !!gi && gi in l;
  }
  function Lo(l) {
    var p = l && l.constructor, b = typeof p == "function" && p.prototype || Zt;
    return l === b;
  }
  function Ai(l) {
    return yi.call(l);
  }
  function Ne(l) {
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
  function Ei(l, p) {
    return l === p || l !== l && p !== p;
  }
  var _i = Si(function() {
    return arguments;
  }()) ? Si : function(l) {
    return ut(l) && qe.call(l, "callee") && !Er.call(l, "callee");
  }, Pr = Array.isArray;
  function vn(l) {
    return l != null && bn(l.length) && !Ci(l);
  }
  var $r = un || jo;
  function Mo(l, p) {
    return Oi(l, p);
  }
  function Ci(l) {
    if (!ki(l))
      return !1;
    var p = nr(l);
    return p == S || p == m || p == c || p == $;
  }
  function bn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function ki(l) {
    var p = typeof l;
    return l != null && (p == "object" || p == "function");
  }
  function ut(l) {
    return l != null && typeof l == "object";
  }
  var Ti = nn ? eo(nn) : To;
  function wn(l) {
    return vn(l) ? _o(l) : Po(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = Mo;
})(Aa, Aa.exports);
var b1 = Aa.exports;
const w1 = /* @__PURE__ */ Ua(b1);
function x1(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? ur.restore(r) : null, a = Ot(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = ml({ ...i ? i.data : Ot(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((f, d) => (f[d] = this[d], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, d) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? a = this.data() : a = Object.assign({}, Ot(a), typeof f == "string" ? { [f]: d } : f), this;
  }, reset(...f) {
    let d = Ot(typeof n == "object" ? a : n()), g = Ot(d);
    return f.length === 0 ? (a = g, Object.assign(this, d)) : Object.keys(d).filter((S) => f.includes(S)).forEach((S) => {
      a[S] = g[S], this[S] = d[S];
    }), this;
  }, setError(f, d) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: d } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((d, g) => ({ ...d, ...f.length > 0 && !f.includes(g) ? { [g]: this.errors[g] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, d, g = {}) {
    let S = u(this.data()), m = { ...g, onCancelToken: (x) => {
      if (o = x, g.onCancelToken)
        return g.onCancelToken(x);
    }, onBefore: (x) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), g.onBefore)
        return g.onBefore(x);
    }, onStart: (x) => {
      if (this.processing = !0, g.onStart)
        return g.onStart(x);
    }, onProgress: (x) => {
      if (this.progress = x, g.onProgress)
        return g.onProgress(x);
    }, onSuccess: async (x) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let A = g.onSuccess ? await g.onSuccess(x) : null;
      return a = Ot(this.data()), this.isDirty = !1, A;
    }, onError: (x) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(x), g.onError)
        return g.onError(x);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, g.onCancel)
        return g.onCancel();
    }, onFinish: (x) => {
      if (this.processing = !1, this.progress = null, o = null, g.onFinish)
        return g.onFinish(x);
    } };
    f === "delete" ? ur.delete(d, { ...m, data: S }) : ur[f](d, S, m);
  }, get(f, d) {
    this.submit("get", f, d);
  }, post(f, d) {
    this.submit("post", f, d);
  }, put(f, d) {
    this.submit("put", f, d);
  }, patch(f, d) {
    this.submit("patch", f, d);
  }, delete(f, d) {
    this.submit("delete", f, d);
  }, cancel() {
    o && o.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(f) {
    Object.assign(this, f.data), this.setError(f.errors);
  } });
  return Ia(c, (f) => {
    c.isDirty = !w1(c.data(), a), r && ur.remember(Ot(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var ze = ue(null), pt = ue(null), as = zp(null), Hi = ue(null), Sc = null;
mr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  ze.value = e ? ru(e) : null, pt.value = t, Hi.value = null;
  let a = typeof window > "u";
  return Sc = y1(a, n, i), a || (ur.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    ze.value = ru(o.component), pt.value = o.page, Hi.value = o.preserveState ? Hi.value : Date.now();
  } }), ur.on("navigate", () => Sc.forceUpdate())), () => {
    if (ze.value) {
      ze.value.inheritAttrs = !!ze.value.inheritAttrs;
      let o = Ut(ze.value, { ...pt.value.props, key: Hi.value });
      return as.value && (ze.value.layout = as.value, as.value = null), ze.value.layout ? typeof ze.value.layout == "function" ? ze.value.layout(Ut, o) : (Array.isArray(ze.value.layout) ? ze.value.layout : [ze.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, Ut(u, { ...pt.value.props }, () => s))) : o;
    }
  };
} });
function S1() {
  return ml({ props: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.props;
  }), url: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.url;
  }), component: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.component;
  }), version: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.version;
  }), scrollRegions: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: oe(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.rememberedState;
  }) });
}
mr({ props: { title: { type: String, required: !1 } }, data() {
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
mr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Hl(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), Ut(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      Cd(s) && (s.preventDefault(), ur.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function fA(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function O1(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function dA(t) {
  return S1().props.auth.permissions.includes(t);
}
let Gs = null;
function pA(t) {
  Gs = t;
}
function si() {
  return Gs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Gs;
}
const nt = mr({
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
      const n = si(), i = t.as.toLowerCase(), a = t.method.toLowerCase(), [o, s] = Hl(
        a,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`
      ), Ut(
        t.as,
        {
          ...r,
          ...i === "a" ? { href: o } : {},
          onClick: (u) => {
            Cd(u) && (u.preventDefault(), n.visit(o, {
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
function li(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function ui(t, e) {
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
function A1(t, e) {
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
function E1() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(A1(arguments[e]));
  return t;
}
var _1 = /* @__PURE__ */ new Map([
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
  var r = C1(t);
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
function C1(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = _1.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var k1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function T1(t) {
  return li(this, void 0, void 0, function() {
    return ui(this, function(e) {
      return [2, P1(t) && t.dataTransfer ? D1(t.dataTransfer, t.type) : $1(t)];
    });
  });
}
function P1(t) {
  return !!t.dataTransfer;
}
function $1(t) {
  var e = I1(t.target) ? t.target.files ? Ys(t.target.files) : [] : [];
  return e.map(function(r) {
    return Va(r);
  });
}
function I1(t) {
  return t !== null;
}
function D1(t, e) {
  return li(this, void 0, void 0, function() {
    var r, n;
    return ui(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = Ys(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(R1))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, Oc(kd(n))];
        case 2:
          return [2, Oc(Ys(t.files).map(function(a) {
            return Va(a);
          }))];
      }
    });
  });
}
function Oc(t) {
  return t.filter(function(e) {
    return k1.indexOf(e.name) === -1;
  });
}
function Ys(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function R1(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Ac(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? Td(e) : Ac(t);
}
function kd(t) {
  return t.reduce(function(e, r) {
    return E1(e, Array.isArray(r) ? kd(r) : [r]);
  }, []);
}
function Ac(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Va(e);
  return Promise.resolve(r);
}
function N1(t) {
  return li(this, void 0, void 0, function() {
    return ui(this, function(e) {
      return [2, t.isDirectory ? Td(t) : F1(t)];
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
        return li(o, void 0, void 0, function() {
          var u, c, f;
          return ui(this, function(d) {
            switch (d.label) {
              case 0:
                if (s.length)
                  return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return u = d.sent(), r(u), [3, 4];
              case 3:
                return c = d.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(s.map(N1)), i.push(f), a(), d.label = 6;
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
function F1(t) {
  return li(this, void 0, void 0, function() {
    return ui(this, function(e) {
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
var Pd = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(","), n = t.name || "", i = (t.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
    return r.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : i === s;
    });
  }
  return !0;
}, Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ue.apply(this, arguments);
};
function Ec(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function L1(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function M1(t, e) {
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
function Ks(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function B1(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function j1(t) {
  return t.includes("Edge/");
}
function z1(t) {
  return t === void 0 && (t = window.navigator.userAgent), B1(t) || j1(t);
}
function _c(t) {
  t.preventDefault();
}
function Wi(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function Ea(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var U1 = "file-invalid-type", V1 = "file-too-large", H1 = "file-too-small", W1 = "too-many-files", q1 = {
  code: W1,
  message: "Too many files"
}, G1 = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: U1,
    message: "File type must be ".concat(e)
  };
};
function En(t) {
  return t != null;
}
var Y1 = Pd.default, K1 = Y1 || Pd;
function $d(t, e) {
  var r = t.type === "application/x-moz-file" || K1(t, e);
  return [r, r ? null : G1(e)];
}
var Cc = function(t) {
  return {
    code: V1,
    message: "File is larger than ".concat(t, " bytes")
  };
}, kc = function(t) {
  return {
    code: H1,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Id(t, e, r) {
  if (En(t.size) && t.size)
    if (En(e) && En(r)) {
      if (t.size > r)
        return [!1, Cc(r)];
      if (t.size < e)
        return [!1, kc(e)];
    } else {
      if (En(e) && t.size < e)
        return [!1, kc(e)];
      if (En(r) && t.size > r)
        return [!1, Cc(r)];
    }
  return [!0, null];
}
function At() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return t.some(function(a) {
      return !Ea(r) && a && a.apply(void 0, Ks([r], n, !1)), Ea(r);
    });
  };
}
function J1(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = $d(s, r)[0], c = Id(s, n, i)[0];
    return u && c;
  });
}
var X1 = {
  disabled: !1,
  getFilesFromEvent: T1,
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
  var e = ue(Ue(Ue({}, X1), t));
  Ia(function() {
    return Ue({}, t);
  }, function(I) {
    e.value = Ue(Ue({}, e.value), I);
  });
  var r = ue(), n = ue(), i = ml({
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
    var I = e.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var V = n.value.files;
        V && !V.length && (i.isFileDialogActive = !1, typeof I == "function" && I());
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
    var I = e.value.noClick;
    I || (z1() ? setTimeout(a, 0) : a());
  }
  var f = ue([]), d = function(I) {
    if (r.value) {
      var V = r.value.$el || r.value;
      V.contains(I.target) || (I.preventDefault(), f.value = []);
    }
  };
  at(function() {
    window.addEventListener("focus", o, !1);
    var I = e.value.preventDropOnDocument;
    I && (document.addEventListener("dragover", _c, !1), document.addEventListener("drop", d, !1));
  }), Xn(function() {
    window.removeEventListener("focus", o, !1);
    var I = e.value.preventDropOnDocument;
    I && (document.removeEventListener("dragover", _c), document.removeEventListener("drop", d));
  });
  function g(I) {
    var V = e.value.noDragEventsBubbling;
    V && I.stopPropagation();
  }
  function S(I) {
    return L1(this, void 0, void 0, function() {
      var V, h, v, w, y;
      return M1(this, function(j) {
        switch (j.label) {
          case 0:
            return V = e.value, h = V.getFilesFromEvent, v = V.noDragEventsBubbling, w = V.onDragEnter, I.preventDefault(), g(I), f.value = Ks(Ks([], f.value, !0), [I.target], !1), Wi(I) ? h ? [4, h(I)] : [2] : [3, 2];
          case 1:
            if (y = j.sent(), y || (y = []), Ea(I) && !v)
              return [2];
            i.draggedFiles = y, i.isDragActive = !0, w && w(I), j.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(I) {
    var V = e.value.onDragOver;
    if (I.preventDefault(), g(I), I.dataTransfer)
      try {
        I.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Wi(I) && V && V(I), !1;
  }
  function x(I) {
    I.preventDefault(), g(I);
    var V = f.value.filter(function(w) {
      if (!r.value)
        return !1;
      var y = r.value.$el || r.value;
      return y.contains(w);
    }), h = V.indexOf(I.target);
    if (h !== -1 && V.splice(h, 1), f.value = V, !(V.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var v = e.value.onDragLeave;
      Wi(I) && v && v(I);
    }
  }
  function A(I) {
    I.preventDefault(), g(I), f.value = [];
    var V = e.value, h = V.getFilesFromEvent, v = V.noDragEventsBubbling, w = V.accept, y = V.minSize, j = V.maxSize, F = V.multiple, N = V.maxFiles, G = V.onDrop, J = V.onDropRejected, Ke = V.onDropAccepted;
    if (Wi(I)) {
      if (!h)
        return;
      Promise.resolve(h(I)).then(function(Dt) {
        if (!(Ea(I) && !v)) {
          var xe = [], Je = [];
          Dt.forEach(function(te) {
            var Kt = $d(te, w), rn = Kt[0], je = Kt[1], Jt = Id(te, y, j), br = Jt[0], Xt = Jt[1];
            if (rn && br)
              xe.push(te);
            else {
              var Qt = [je, Xt].filter(function(wr) {
                return wr;
              });
              Je.push({ file: te, errors: Qt });
            }
          }), (!F && xe.length > 1 || F && N >= 1 && xe.length > N) && (xe.forEach(function(te) {
            Je.push({ file: te, errors: [q1] });
          }), xe.splice(0)), i.acceptedFiles = xe, i.fileRejections = Je, G && G(xe, Je, I), Je.length > 0 && J && J(Je, I), xe.length > 0 && Ke && Ke(xe, I);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var E = function(I) {
    return e.value.disabled ? void 0 : I;
  }, P = function(I) {
    return e.value.noKeyboard ? void 0 : E(I);
  }, k = function(I) {
    return e.value.noDrag ? void 0 : E(I);
  }, $ = function(I) {
    I === void 0 && (I = {});
    var V = I.onFocus, h = I.onBlur, v = I.onClick, w = I.onDragEnter, y = I.onDragenter, j = I.onDragOver, F = I.onDragover, N = I.onDragLeave, G = I.onDragleave, J = I.onDrop, Ke = Ec(I, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Ue(Ue({ onFocus: P(At(V, s)), onBlur: P(At(h, u)), onClick: E(At(v, c)), onDragenter: k(At(w, y, S)), onDragover: k(At(j, F, m)), onDragleave: k(At(N, G, x)), onDrop: k(At(J, A)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), Ke);
  }, L = function(I) {
    I.stopPropagation();
  };
  function R(I) {
    I === void 0 && (I = {});
    var V = I.onChange, h = I.onClick, v = Ec(I, ["onChange", "onClick"]), w = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: E(At(V, A)),
      onClick: E(At(h, L)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Ue(Ue({}, w), v);
  }
  var M = oe(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), U = oe(function() {
    return M.value > 0 && J1({
      files: i.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), B = oe(function() {
    return M.value > 0 && !U.value;
  });
  return Ue(Ue({}, Up(i)), { isDragAccept: U, isDragReject: B, isFocused: oe(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: $, getInputProps: R, rootRef: r, inputRef: n, open: E(a) });
}
const Q1 = { class: "flex w-full flex-col" }, Z1 = {
  key: 0,
  class: "select-none text-black"
}, ew = ["name"], tw = {
  key: 1,
  class: "select-none"
}, rw = { key: 2 }, nw = {
  key: 3,
  class: "select-none"
}, hA = {
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
    si();
    const e = t, r = ue(null), n = (c) => {
      let f = [];
      return c.split("_").join(" ").split(" ").map(function(d) {
        f.push(d[0].toUpperCase() + d.slice(1));
      }), f.join(" ");
    }, i = (c, f) => {
      var d;
      if (r.value = null, f && f.length > 0) {
        f[0].errors && (r.value = (d = f[0]) == null ? void 0 : d.errors.map((g) => g.message).join(", ")), console.error(f);
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
      var d;
      return O(), C("div", Q1, [
        D("div", {
          class: Z(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": W(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          D("div", Mn({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, W(a)()), [
            t.label ? (O(), C("p", Z1, X(t.label), 1)) : K("", !0),
            D("input", Mn(W(o)(), { name: t.field }), null, 16, ew),
            W(s) ? (O(), C("span", tw, "Drop the " + X(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (O(), C("span", rw, X(((d = t.form[t.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (O(), C("span", nw, "Drag 'n' drop " + X(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        be(W(ri), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, iw = { class: "flex w-full" }, aw = { key: 0 }, ow = { key: 1 }, sw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, lw = ["onClick"], uw = /* @__PURE__ */ D("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), cw = ["src"], fw = ["value"], dw = { class: "flex items-center gap-4" }, pw = {
  key: 0,
  class: "text-sm text-gray-600"
}, hw = {
  key: 1,
  class: "mt-2"
}, mw = /* @__PURE__ */ D("hr", null, null, -1), gw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, yw = { class: "-m-1 flex flex-wrap md:-m-2" }, vw = { class: "flex w-1/3 flex-wrap" }, bw = { class: "h-full w-full p-1 shadow md:p-2" }, ww = ["src"], mA = {
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
    const e = si(), r = t, n = x1({
      image: []
    });
    function i() {
      let d = new FormData();
      n.image.forEach((g, S) => {
        d.append(`image[${S}]`, g.file);
      }), d.append("item_type", r.itemType), d.append("item_id", r.itemId), e.post(route(r.endPoint), d, {
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
    function a(d) {
      d.forEach((g) => {
        let S = new FileReader();
        S.onload = (m) => {
          n.image.push({ file: g, dataUrl: m.target.result });
        }, S.readAsDataURL(g);
      });
    }
    const o = (d, g) => {
      if (g && g.length > 0) {
        console.error(g);
        return;
      }
      a(d);
    };
    function s(d) {
      n.image.splice(d, 1);
    }
    const { getRootProps: u, getInputProps: c, ...f } = Dd({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (d, g) => (O(), C(fe, null, [
      t.canUpload ? (O(), C("form", {
        key: 0,
        onSubmit: jt(i, ["prevent"]),
        class: "w-full"
      }, [
        D("div", iw, [
          D("div", {
            class: Z(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": d.dragEneted }])
          }, [
            D("div", Mn({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, W(u)()), [
              D("input", Ge(Ze(W(c)())), null, 16),
              d.isDragActive ? (O(), C("span", aw, "Drop the files here ...")) : (O(), C("span", ow, "Drag 'n' drop images here"))
            ], 16),
            W(n).image.length > 0 ? (O(), C("div", sw, [
              (O(!0), C(fe, null, it(W(n).image, (S, m) => (O(), C("div", {
                class: "relative cursor-pointer select-none",
                onClick: (x) => s(m),
                key: m
              }, [
                uw,
                D("img", {
                  src: S.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, cw)
              ], 8, lw))), 128))
            ])) : K("", !0)
          ], 2),
          be(W(Ip), {
            class: Z(["inline rounded-l-none", { "cursor-not-allowed": W(n).image.length == 0 }]),
            disabled: W(n).image.length == 0
          }, {
            default: we(() => [
              ye(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          W(n).progress ? (O(), C("progress", {
            key: 0,
            value: W(n).progress.percentage,
            max: "100"
          }, X(W(n).progress.percentage) + "%", 9, fw)) : K("", !0)
        ]),
        d.$page.props.errors.image ? (O(), ae(W(ri), {
          key: 0,
          class: "mt-2",
          message: d.$page.props.errors.image
        }, null, 8, ["message"])) : K("", !0),
        D("div", dw, [
          be(cr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: we(() => [
              W(n).recentlySuccessful ? (O(), C("p", pw, "Images uploaded.")) : K("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : K("", !0),
      t.images.length ? (O(), C("div", hw, [
        mw,
        D("div", gw, [
          D("div", yw, [
            (O(!0), C(fe, null, it(t.images, (S) => (O(), C("div", vw, [
              D("div", bw, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: S.url
                }, null, 8, ww),
                t.canUpload ? (O(), ae(W(nt), {
                  key: 0,
                  href: d.route("images.delete", S.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: we(() => [
                    ye(" Delete Image ")
                  ]),
                  _: 2
                }, 1032, ["href"])) : K("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : K("", !0)
    ], 64));
  }
}, xw = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, Sw = ["name", "value", "id", "checked"], Ow = ["for"], gA = {
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
    return (i, a) => (O(), C("div", xw, [
      D("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, Sw),
      D("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, X(t.label), 9, Ow)
    ]));
  }
}, Aw = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Tc = {
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
    return (e, r) => (O(), ae(W(Ip), {
      disabled: t.form.processing || t.disabled,
      type: t.type,
      class: "focusable"
    }, {
      default: we(() => [
        D("div", {
          class: Z({ "opacity-25": t.form.processing })
        }, [
          Y(e.$slots, "default")
        ], 2),
        t.form.processing ? (O(), C("div", Aw, [
          be(W(Dp), { class: "aspect-square !h-full !w-auto text-white" })
        ])) : K("", !0)
      ]),
      _: 3
    }, 8, ["disabled", "type"]));
  }
}, Ew = ["id"], _w = {
  key: 0,
  class: "text-sm text-gray-600"
}, Cw = { class: "flex flex-col" }, yA = {
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
    }
  },
  setup(t) {
    const e = si(), r = t, n = ue(null), i = ue(null), a = ue(null), o = ue(null), s = () => {
      const f = n.value, d = f.getBoundingClientRect().top, g = document.querySelector("nav").offsetHeight, S = d - g, m = a.value, x = f.getBoundingClientRect().height + d - g * 2;
      if (S <= 0 && x > 0) {
        if (m.dataset.sticky === "true")
          return;
        m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${g}px`, m.style.width = i.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, u = () => {
      o.value.style.marginLeft = -i.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value)
        return;
      const f = n.value.querySelector("thead tr");
      let d = o.value;
      d.innerHTML = "";
      let g = f == null ? void 0 : f.querySelectorAll("th");
      g == null || g.forEach((m) => {
        const x = m.cloneNode(!0);
        x.style.width = m.offsetWidth + "px", d.appendChild(x);
      });
      const S = a.value;
      S.style.width = i.value.offsetWidth + "px";
    };
    return r.sticky && (e.on("navigate", () => {
      Vp(() => {
        c();
      });
    }), at(() => {
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), i.value.addEventListener("scroll", u, { passive: !0 });
    }), Xn(() => {
      var f;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (f = i.value) == null || f.removeEventListener("scroll", u);
    })), (f, d) => (O(), C("div", {
      class: Z({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (O(), C("p", _w, "Found: " + X(t.total), 1)) : K("", !0),
      D("div", Cw, [
        D("div", {
          class: Z({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: i
        }, [
          D("table", {
            class: Z(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": t.collapsable,
              " border-separate border-spacing-y-5 px-2": t.seperate
            }]),
            ref_key: "table",
            ref: n
          }, [
            t.sticky ? (O(), C("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: a,
              class: "fixed isolate z-50 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              D("div", {
                ref_key: "sticky_header",
                ref: o,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : K("", !0),
            Y(f.$slots, "default")
          ], 2)
        ], 2)
      ]),
      t.links ? (O(), ae(W($p), {
        key: 1,
        class: "mt-6",
        links: t.links
      }, null, 8, ["links"])) : K("", !0)
    ], 10, Ew));
  }
}, kw = {}, Tw = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function Pw(t, e) {
  return O(), C("thead", Tw, [
    Y(t.$slots, "default")
  ]);
}
const vA = /* @__PURE__ */ gr(kw, [["render", Pw]]), $w = { class: "flex items-center justify-between" }, Iw = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, bA = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    ti.add(qm, Vm);
    const e = t, r = ue("asc"), n = ue(!1);
    let i = null;
    const a = si();
    at(() => {
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
    return (c, f) => (O(), C("th", {
      scope: "col",
      class: Z(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      D("div", $w, [
        Y(c.$slots, "default"),
        t.orderBy ? (O(), C("span", Iw, [
          be(W(Ht), {
            icon: "fa-sort-up",
            class: Z(["absolute", u("desc")])
          }, null, 8, ["class"]),
          be(W(Ht), {
            icon: "fa-sort-down",
            class: Z(["absolute", u("asc")])
          }, null, 8, ["class"])
        ])) : K("", !0)
      ])
    ], 2));
  }
}, Dw = {}, Rw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function Nw(t, e) {
  return O(), C("td", Rw, [
    Y(t.$slots, "default")
  ]);
}
const Fw = /* @__PURE__ */ gr(Dw, [["render", Nw]]), Lw = ["data-te-target", "aria-controls"], wA = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (O(), C("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      Y(e.$slots, "default")
    ], 8, Lw));
  }
}, Mw = { colspan: "999" }, Bw = ["id"], xA = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (O(), C("tr", null, [
      D("td", Mw, [
        D("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          Y(e.$slots, "default")
        ], 8, Bw)
      ])
    ]));
  }
};
var Wl = { exports: {} }, de = String, Rd = function() {
  return { isColorSupported: !1, reset: de, bold: de, dim: de, italic: de, underline: de, inverse: de, hidden: de, strikethrough: de, black: de, red: de, green: de, yellow: de, blue: de, magenta: de, cyan: de, white: de, gray: de, bgBlack: de, bgRed: de, bgGreen: de, bgYellow: de, bgBlue: de, bgMagenta: de, bgCyan: de, bgWhite: de };
};
Wl.exports = Rd();
Wl.exports.createColors = Rd;
var jw = Wl.exports;
let Pc = jw, $c = Be, Js = class Nd extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Nd);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Pc.isColorSupported), $c && e && (r = $c(r));
    let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), o = String(a).length, s, u;
    if (e) {
      let { bold: c, gray: f, red: d } = Pc.createColors(!0);
      s = (g) => c(d(g)), u = (g) => f(g);
    } else
      s = u = (c) => c;
    return n.slice(i, a).map((c, f) => {
      let d = i + 1 + f, g = " " + (" " + d).slice(-o) + " | ";
      if (d === this.line) {
        let S = u(g.replace(/\d/g, " ")) + c.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return s(">") + u(g) + c + `
 ` + S + s("^");
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
var ci = {};
ci.isClean = Symbol("isClean");
ci.my = Symbol("my");
const Ic = {
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
function zw(t) {
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
      return Ic[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + zw(n);
      this[s] ? i = this[s](o, e) : o.walk((u) => {
        if (i = u.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = Ic[n]), o.rawCache[n] = i, i;
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
var Fd = Xs;
Xs.default = Xs;
let Uw = Fd;
function Qs(t, e) {
  new Uw(e).stringify(t);
}
var Ha = Qs;
Qs.default = Qs;
let { isClean: qi, my: Vw } = ci, Hw = ql, Ww = Fd, qw = Ha;
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
    this.raws = {}, this[qi] = !1, this[Vw] = !0;
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
    return new Hw(e);
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
    if (this[qi]) {
      this[qi] = !1;
      let e = this;
      for (; e = e.parent; )
        e[qi] = !1;
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
    return new Ww().raw(this, e, r);
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
  toString(e = qw) {
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
let Gw = Wa, tl = class extends Gw {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var qa = tl;
tl.default = tl;
let Yw = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Kw = (t, e = 21) => (r = e) => {
  let n = "", i = r;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, Jw = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += Yw[Math.random() * 64 | 0];
  return e;
};
var Xw = { nanoid: Jw, customAlphabet: Kw };
let { SourceMapConsumer: Dc, SourceMapGenerator: Rc } = Be, { existsSync: Qw, readFileSync: Zw } = Be, { dirname: os, join: ex } = Be;
function tx(t) {
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
    return this.consumerCache || (this.consumerCache = new Dc(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
    if (i.test(e) || a.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return tx(e.substr(RegExp.lastMatch.length));
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
    if (this.root = os(e), Qw(e))
      return this.mapFile = e, Zw(e, "utf-8").toString().trim();
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
        if (r instanceof Dc)
          return Rc.fromSourceMap(r).toString();
        if (r instanceof Rc)
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
        return e && (n = ex(os(e), n)), this.loadFile(n);
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
let { SourceMapConsumer: rx, SourceMapGenerator: nx } = Be, { fileURLToPath: Nc, pathToFileURL: Gi } = Be, { isAbsolute: nl, resolve: il } = Be, { nanoid: ix } = Xw, ss = Be, Fc = ql, ax = Ld, ls = Symbol("fromOffsetCache"), ox = !!(rx && nx), Lc = !!(il && nl), _a = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Lc || /^\w+:\/\//.test(r.from) || nl(r.from) ? this.file = r.from : this.file = il(r.from)), Lc && ox) {
      let n = new ax(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + ix(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, r, n, i = {}) {
    let a, o, s;
    if (r && typeof r == "object") {
      let c = r, f = n;
      if (typeof c.offset == "number") {
        let d = this.fromOffset(c.offset);
        r = d.line, n = d.col;
      } else
        r = c.line, n = c.column;
      if (typeof f.offset == "number") {
        let d = this.fromOffset(f.offset);
        o = d.line, s = d.col;
      } else
        o = f.line, s = f.column;
    } else if (!n) {
      let c = this.fromOffset(r);
      r = c.line, n = c.col;
    }
    let u = this.origin(r, n, o, s);
    return u ? a = new Fc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      i.plugin
    ) : a = new Fc(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: s, line: o },
      this.css,
      this.file,
      i.plugin
    ), a.input = { column: n, endColumn: s, endLine: o, line: r, source: this.css }, this.file && (Gi && (a.input.url = Gi(this.file).toString()), a.input.file = this.file), a;
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
    nl(o.source) ? u = Gi(o.source) : u = new URL(
      o.source,
      this.map.consumer().sourceRoot || Gi(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: u.toString()
    };
    if (u.protocol === "file:")
      if (Nc)
        c.file = Nc(u);
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
var Ga = _a;
_a.default = _a;
ss && ss.registerInput && ss.registerInput(_a);
let { SourceMapConsumer: Md, SourceMapGenerator: ca } = Be, { dirname: fa, relative: Bd, resolve: jd, sep: zd } = Be, { pathToFileURL: Mc } = Be, sx = Ga, lx = !!(Md && ca), ux = !!(fa && jd && Bd && zd), cx = class {
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
      let r = this.toUrl(this.path(e.file)), n = e.root || fa(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new Md(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), ux && lx && this.isMap())
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
      e.file = this.outputFile(), this.map = ca.fromSourceMap(e);
    } else
      this.map = new ca({ file: this.outputFile() }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new ca({ file: this.outputFile() });
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
    let n = this.opts.to ? fa(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = fa(jd(n, this.mapOpts.annotation)));
    let i = Bd(n, e);
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
        let e = new sx(this.originalCSS, this.opts);
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
    if (Mc) {
      let n = Mc(e).toString();
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
    zd === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var Ud = cx;
let fx = Wa, al = class extends fx {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Ya = al;
al.default = al;
let { isClean: Vd, my: Hd } = ci, Wd = qa, qd = Ya, dx = Wa, Gd, Gl, Yl, Yd;
function Kd(t) {
  return t.map((e) => (e.nodes && (e.nodes = Kd(e.nodes)), delete e.source, e));
}
function Jd(t) {
  if (t[Vd] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      Jd(e);
}
let Pt = class Xd extends dx {
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
      e = Kd(Gd(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Wd(e)];
    } else if (e.selector)
      e = [new Gl(e)];
    else if (e.name)
      e = [new Yl(e)];
    else if (e.text)
      e = [new qd(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[Hd] || Xd.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[Vd] && Jd(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
Pt.registerParse = (t) => {
  Gd = t;
};
Pt.registerRule = (t) => {
  Gl = t;
};
Pt.registerAtRule = (t) => {
  Yl = t;
};
Pt.registerRoot = (t) => {
  Yd = t;
};
var vr = Pt;
Pt.default = Pt;
Pt.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Yl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, Gl.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, Wd.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, qd.prototype) : t.type === "root" && Object.setPrototypeOf(t, Yd.prototype), t[Hd] = !0, t.nodes && t.nodes.forEach((e) => {
    Pt.rebuild(e);
  });
};
let px = vr, Qd, Zd, qn = class extends px {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Qd(new Zd(), this, e).stringify();
  }
};
qn.registerLazyResult = (t) => {
  Qd = t;
};
qn.registerProcessor = (t) => {
  Zd = t;
};
var Kl = qn;
qn.default = qn;
let Bc = {};
var ep = function(e) {
  Bc[e] || (Bc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
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
var tp = ol;
ol.default = ol;
let hx = tp, sl = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new hx(e, r);
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
const us = "'".charCodeAt(0), jc = '"'.charCodeAt(0), Yi = "\\".charCodeAt(0), zc = "/".charCodeAt(0), Ki = `
`.charCodeAt(0), _n = " ".charCodeAt(0), Ji = "\f".charCodeAt(0), Xi = "	".charCodeAt(0), Qi = "\r".charCodeAt(0), mx = "[".charCodeAt(0), gx = "]".charCodeAt(0), yx = "(".charCodeAt(0), vx = ")".charCodeAt(0), bx = "{".charCodeAt(0), wx = "}".charCodeAt(0), xx = ";".charCodeAt(0), Sx = "*".charCodeAt(0), Ox = ":".charCodeAt(0), Ax = "@".charCodeAt(0), Zi = /[\t\n\f\r "#'()/;[\\\]{}]/g, ea = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Ex = /.[\r\n"'(/\\]/, Uc = /[\da-f]/i;
var _x = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, u, c, f, d, g, S, m, x = n.length, A = 0, E = [], P = [];
  function k() {
    return A;
  }
  function $(U) {
    throw e.error("Unclosed " + U, A);
  }
  function L() {
    return P.length === 0 && A >= x;
  }
  function R(U) {
    if (P.length)
      return P.pop();
    if (A >= x)
      return;
    let B = U ? U.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(A), a) {
      case Ki:
      case _n:
      case Xi:
      case Qi:
      case Ji: {
        o = A;
        do
          o += 1, a = n.charCodeAt(o);
        while (a === _n || a === Ki || a === Xi || a === Qi || a === Ji);
        m = ["space", n.slice(A, o)], A = o - 1;
        break;
      }
      case mx:
      case gx:
      case bx:
      case wx:
      case Ox:
      case xx:
      case vx: {
        let I = String.fromCharCode(a);
        m = [I, I, A];
        break;
      }
      case yx: {
        if (g = E.length ? E.pop()[1] : "", S = n.charCodeAt(A + 1), g === "url" && S !== us && S !== jc && S !== _n && S !== Ki && S !== Xi && S !== Ji && S !== Qi) {
          o = A;
          do {
            if (f = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || B) {
                o = A;
                break;
              } else
                $("bracket");
            for (d = o; n.charCodeAt(d - 1) === Yi; )
              d -= 1, f = !f;
          } while (f);
          m = ["brackets", n.slice(A, o + 1), A, o], A = o;
        } else
          o = n.indexOf(")", A + 1), u = n.slice(A, o + 1), o === -1 || Ex.test(u) ? m = ["(", "(", A] : (m = ["brackets", u, A, o], A = o);
        break;
      }
      case us:
      case jc: {
        s = a === us ? "'" : '"', o = A;
        do {
          if (f = !1, o = n.indexOf(s, o + 1), o === -1)
            if (i || B) {
              o = A + 1;
              break;
            } else
              $("string");
          for (d = o; n.charCodeAt(d - 1) === Yi; )
            d -= 1, f = !f;
        } while (f);
        m = ["string", n.slice(A, o + 1), A, o], A = o;
        break;
      }
      case Ax: {
        Zi.lastIndex = A + 1, Zi.test(n), Zi.lastIndex === 0 ? o = n.length - 1 : o = Zi.lastIndex - 2, m = ["at-word", n.slice(A, o + 1), A, o], A = o;
        break;
      }
      case Yi: {
        for (o = A, c = !0; n.charCodeAt(o + 1) === Yi; )
          o += 1, c = !c;
        if (a = n.charCodeAt(o + 1), c && a !== zc && a !== _n && a !== Ki && a !== Xi && a !== Qi && a !== Ji && (o += 1, Uc.test(n.charAt(o)))) {
          for (; Uc.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === _n && (o += 1);
        }
        m = ["word", n.slice(A, o + 1), A, o], A = o;
        break;
      }
      default: {
        a === zc && n.charCodeAt(A + 1) === Sx ? (o = n.indexOf("*/", A + 2) + 1, o === 0 && (i || B ? o = n.length : $("comment")), m = ["comment", n.slice(A, o + 1), A, o], A = o) : (ea.lastIndex = A + 1, ea.test(n), ea.lastIndex === 0 ? o = n.length - 1 : o = ea.lastIndex - 2, m = ["word", n.slice(A, o + 1), A, o], E.push(m), A = o);
        break;
      }
    }
    return A++, m;
  }
  function M(U) {
    P.push(U);
  }
  return {
    back: M,
    endOfFile: L,
    nextToken: R,
    position: k
  };
};
let rp = vr, Ca = class extends rp {
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
var Xl = Ca;
Ca.default = Ca;
rp.registerAtRule(Ca);
let np = vr, ip, ap, Jr = class extends np {
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
    return new ip(new ap(), this, e).stringify();
  }
};
Jr.registerLazyResult = (t) => {
  ip = t;
};
Jr.registerProcessor = (t) => {
  ap = t;
};
var fi = Jr;
Jr.default = Jr;
np.registerRoot(Jr);
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
var op = Gn;
Gn.default = Gn;
let sp = vr, Cx = op, ka = class extends sp {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return Cx.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Ql = ka;
ka.default = ka;
sp.registerRule(ka);
let kx = qa, Tx = _x, Px = Ya, $x = Xl, Ix = fi, Vc = Ql;
const Hc = {
  empty: !0,
  space: !0
};
function Dx(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let Rx = class {
  constructor(e) {
    this.input = e, this.root = new Ix(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new $x();
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
    let r = new Px();
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
    this.tokenizer = Tx(this.input);
  }
  decl(e, r) {
    let n = new kx();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || Dx(e)
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
        let f = e.slice(0), d = "";
        for (let g = c; g > 0; g--) {
          let S = f[g][0];
          if (d.trim().indexOf("!") === 0 && S !== "space")
            break;
          d = f.pop()[1] + d;
        }
        d.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = d, e = f);
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
    let r = new Vc();
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
    let a, o, s = n.length, u = "", c = !0, f, d;
    for (let g = 0; g < s; g += 1)
      a = n[g], o = a[0], o === "space" && g === s - 1 && !i ? c = !1 : o === "comment" ? (d = n[g - 1] ? n[g - 1][0] : "empty", f = n[g + 1] ? n[g + 1][0] : "empty", !Hc[d] && !Hc[f] ? u.slice(-1) === "," ? c = !1 : u += a[1] : c = !1) : u += a[1];
    if (!c) {
      let g = n.reduce((S, m) => S + m[1], "");
      e.raws[r] = { raw: g, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new Vc();
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
var Nx = Rx;
let Fx = vr, Lx = Nx, Mx = Ga;
function Ta(t, e) {
  let r = new Mx(t, e), n = new Lx(r);
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
var Zl = Ta;
Ta.default = Ta;
Fx.registerParse(Ta);
let { isClean: ft, my: Bx } = ci, jx = Ud, zx = Ha, Ux = vr, Vx = Kl, Hx = ep, Wc = Jl, Wx = Zl, qx = fi;
const Gx = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Yx = {
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
}, Kx = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Xr = 0;
function Cn(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function lp(t) {
  let e = !1, r = Gx[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    Xr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Xr, r + "Exit"] : [r, r + "Exit"];
}
function qc(t) {
  let e;
  return t.type === "document" ? e = ["Document", Xr, "DocumentExit"] : t.type === "root" ? e = ["Root", Xr, "RootExit"] : e = lp(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function ll(t) {
  return t[ft] = !1, t.nodes && t.nodes.forEach((e) => ll(e)), t;
}
let ul = {}, Qr = class up {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = ll(r);
    else if (r instanceof up || r instanceof Wc)
      i = ll(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = Wx;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[Bx] && Ux.rebuild(i);
    }
    this.result = new Wc(e, i, n), this.helpers = { ...ul, postcss: ul, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
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
          if (!Yx[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Kx[n])
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
      for (; !e[ft]; ) {
        e[ft] = !0;
        let r = [qc(e)];
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
    let e = this.result.opts, r = zx;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new jx(r, this.result.root, this.result.opts).generate();
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
      for (; !e[ft]; )
        e[ft] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Hx(
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
        if (n.indexes[o] += 1, !s[ft]) {
          s[ft] = !0, e.push(qc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === Xr) {
        n.nodes && n.nodes.length && (n[ft] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[ft] = !0;
    let r = lp(e);
    for (let n of r)
      if (n === Xr)
        e.nodes && e.each((i) => {
          i[ft] || this.walkSync(i);
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
Qr.registerPostcss = (t) => {
  ul = t;
};
var cp = Qr;
Qr.default = Qr;
qx.registerLazyResult(Qr);
Vx.registerLazyResult(Qr);
let Jx = Ud, Xx = Ha, Qx = ep, Zx = Zl;
const e2 = Jl;
let cl = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = Xx;
    this.result = new e2(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new Jx(a, i, this._opts, r);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Qx(
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
    let e, r = Zx;
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
var t2 = cl;
cl.default = cl;
let r2 = t2, n2 = cp, i2 = Kl, a2 = fi, Yn = class {
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
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new r2(this, e, r) : new n2(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var o2 = Yn;
Yn.default = Yn;
a2.registerProcessor(Yn);
i2.registerProcessor(Yn);
let s2 = qa, l2 = Ld, u2 = Ya, c2 = Xl, f2 = Ga, d2 = fi, p2 = Ql;
function Kn(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Kn(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: f2.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: l2.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Kn(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new d2(n);
  if (n.type === "decl")
    return new s2(n);
  if (n.type === "rule")
    return new p2(n);
  if (n.type === "comment")
    return new u2(n);
  if (n.type === "atrule")
    return new c2(n);
  throw new Error("Unknown node type: " + t.type);
}
var h2 = Kn;
Kn.default = Kn;
let m2 = ql, fp = qa, g2 = cp, y2 = vr, eu = o2, v2 = Ha, b2 = h2, dp = Kl, w2 = tp, pp = Ya, hp = Xl, x2 = Jl, S2 = Ga, O2 = Zl, A2 = op, mp = Ql, gp = fi, E2 = Wa;
function ce(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new eu(t);
}
ce.plugin = function(e, r) {
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
    return ce([i(u)]).process(o, s);
  }, i;
};
ce.stringify = v2;
ce.parse = O2;
ce.fromJSON = b2;
ce.list = A2;
ce.comment = (t) => new pp(t);
ce.atRule = (t) => new hp(t);
ce.decl = (t) => new fp(t);
ce.rule = (t) => new mp(t);
ce.root = (t) => new gp(t);
ce.document = (t) => new dp(t);
ce.CssSyntaxError = m2;
ce.Declaration = fp;
ce.Container = y2;
ce.Processor = eu;
ce.Document = dp;
ce.Comment = pp;
ce.Warning = w2;
ce.AtRule = hp;
ce.Result = x2;
ce.Input = S2;
ce.Rule = mp;
ce.Root = gp;
ce.Node = E2;
g2.registerPostcss(ce);
var _2 = ce;
ce.default = ce;
const ge = /* @__PURE__ */ Ua(_2);
ge.stringify;
ge.fromJSON;
ge.plugin;
ge.parse;
ge.list;
ge.document;
ge.comment;
ge.atRule;
ge.rule;
ge.decl;
ge.root;
ge.CssSyntaxError;
ge.Declaration;
ge.Container;
ge.Processor;
ge.Document;
ge.Comment;
ge.Warning;
ge.AtRule;
ge.Result;
ge.Input;
ge.Rule;
ge.Root;
ge.Node;
const C2 = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, k2 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, T2 = { key: 0 }, P2 = {
  key: 1,
  class: "ml-1"
}, $2 = { class: "flex w-fit flex-wrap" }, I2 = {
  key: 0,
  class: "font-semibold"
}, D2 = { class: "mb-1" }, R2 = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, N2 = { class: "w-full break-words" }, F2 = { class: "mb-1 flex flex-col" }, L2 = { key: 1 }, MA = {
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
      return O(), C("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", C2, [
          e.itemId || e.timeStamp ? (O(), C("div", k2, [
            e.itemId ? (O(), C(fe, { key: 0 }, [
              e.itemId.routeName ? (O(), ae(W(nt), {
                key: 1,
                href: r.route(e.itemId.routeName, e.itemId.routeData ? e.itemId.routeData : e.itemId.id)
              }, {
                default: we(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (O(), C(fe, { key: 0 }, [
                    ye("#")
                  ], 64)) : K("", !0),
                  ye(" " + X(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (O(), C("span", T2, [
                e.itemId.prefix || e.itemId.prefix == null ? (O(), C(fe, { key: 0 }, [
                  ye("#")
                ], 64)) : K("", !0),
                ye(" " + X(e.itemId.id), 1)
              ]))
            ], 64)) : K("", !0),
            e.timeStamp ? (O(), C("span", P2, [
              e.itemId ? (O(), C(fe, { key: 0 }, [
                ye("-")
              ], 64)) : K("", !0),
              ye(" " + X(e.timeStamp), 1)
            ])) : K("", !0)
          ])) : K("", !0),
          D("div", $2, [
            (O(!0), C(fe, null, it(t.pills, (a, o) => (O(), C(fe, { key: o }, [
              a.text ? (O(), C("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: ra({
                  backgroundColor: a.color ? a.color : null
                })
              }, X(a.text), 5)) : K("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (O(), C(fe, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (O(), C("p", I2, X(e.title.text), 1)) : (O(), ae(W(nt), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: we(() => [
              ye(X(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : K("", !0),
        D("div", D2, [
          e.extraText ? (O(), C("p", R2, [
            ye(" Engineer Note: "),
            D("span", N2, X(e.extraText), 1)
          ])) : K("", !0)
        ]),
        D("div", F2, [
          (O(!0), C(fe, null, it(t.options, (a, o) => (O(), C(fe, null, [
            !a.routeName && !a.href ? (O(), C("span", {
              key: 0,
              style: ra({ color: a.color ? a.color : "#000" })
            }, X(a.text), 5)) : (O(), ae(W(nt), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: ra({ color: a.color ? a.color : "#000" })
            }, {
              default: we(() => [
                ye(X(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (O(), C("div", L2, [
          D("span", null, X(e.amount.text + W(O1)(e.amount.amount)), 1)
        ])) : K("", !0),
        D("div", null, [
          Y(r.$slots, "default")
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
})(), da = {
  setData(t, e, r) {
    cs.set(t, e, r);
  },
  getData(t, e) {
    return cs.get(t, e);
  },
  removeData(t, e) {
    cs.delete(t, e);
  }
}, M2 = 1e6, B2 = 1e3, fl = "transitionend", j2 = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), z2 = (t) => {
  do
    t += Math.floor(Math.random() * M2);
  while (document.getElementById(t));
  return t;
}, yp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, vp = (t) => {
  const e = yp(t);
  return e && document.querySelector(e) ? e : null;
}, Jn = (t) => {
  const e = yp(t);
  return e ? document.querySelector(e) : null;
}, U2 = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * B2);
}, V2 = (t) => {
  t.dispatchEvent(new Event(fl));
}, bp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), dl = (t) => bp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, Pa = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && bp(a) ? "element" : j2(a);
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
}, Ja = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", H2 = (t) => {
  t.offsetHeight;
}, wp = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, fs = [], W2 = (t) => {
  document.readyState === "loading" ? (fs.length || document.addEventListener("DOMContentLoaded", () => {
    fs.forEach((e) => e());
  }), fs.push(t)) : t();
}, gt = () => document.documentElement.dir === "rtl", q2 = (t) => document.createElement(t), Gc = (t) => {
  typeof t == "function" && t();
}, G2 = (t, e, r = !0) => {
  if (!r) {
    Gc(t);
    return;
  }
  const n = 5, i = U2(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(fl, o), Gc(t));
  };
  e.addEventListener(fl, o), setTimeout(() => {
    a || V2(e);
  }, i);
}, Y2 = /[^.]*(?=\..*)\.|.*/, K2 = /\..*/, J2 = /::\d+$/, ds = {};
let Yc = 1;
const X2 = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Q2 = /^(mouseenter|mouseleave)/i, xp = /* @__PURE__ */ new Set([
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
function Sp(t, e) {
  return e && `${e}::${Yc++}` || t.uidEvent || Yc++;
}
function Op(t) {
  const e = Sp(t);
  return t.uidEvent = e, ds[e] = ds[e] || {}, ds[e];
}
function Z2(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && he.off(t, n.type, e), e.apply(t, [n]);
  };
}
function eS(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && he.off(t, i.type, r), r.apply(o, [i]);
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
  let a = _p(t);
  return xp.has(a) || (a = t), [n, i, a];
}
function Kc(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), Q2.test(e)) {
    const S = (m) => function(x) {
      if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
        return m.call(this, x);
    };
    n ? n = S(n) : r = S(r);
  }
  const [a, o, s] = Ep(
    e,
    r,
    n
  ), u = Op(t), c = u[s] || (u[s] = {}), f = Ap(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const d = Sp(
    o,
    e.replace(Y2, "")
  ), g = a ? eS(t, r, n) : Z2(t, r);
  g.delegationSelector = a ? r : null, g.originalHandler = o, g.oneOff = i, g.uidEvent = d, c[d] = g, t.addEventListener(s, g, a);
}
function pl(t, e, r, n, i) {
  const a = Ap(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function tS(t, e, r, n) {
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
function _p(t) {
  return t = t.replace(K2, ""), X2[t] || t;
}
const he = {
  on(t, e, r, n) {
    Kc(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    Kc(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = Ep(
      e,
      r,
      n
    ), s = o !== e, u = Op(t), c = e.startsWith(".");
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
    c && Object.keys(u).forEach((d) => {
      tS(
        t,
        u,
        d,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((d) => {
      const g = d.replace(J2, "");
      if (!s || e.includes(g)) {
        const S = f[d];
        pl(
          t,
          u,
          o,
          S.originalHandler,
          S.delegationSelector
        );
      }
    });
  },
  trigger(t, e, r) {
    if (typeof e != "string" || !t)
      return null;
    const n = wp(), i = _p(e), a = e !== i, o = xp.has(i);
    let s, u = !0, c = !0, f = !1, d = null;
    return a && n && (s = n.Event(e, r), n(t).trigger(s), u = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented()), o ? (d = document.createEvent("HTMLEvents"), d.initEvent(i, u, !0)) : d = new CustomEvent(e, {
      bubbles: u,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((g) => {
      Object.defineProperty(d, g, {
        get() {
          return r[g];
        }
      });
    }), f && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && typeof s < "u" && s.preventDefault(), d;
  }
}, rS = "5.1.3";
class Cp {
  constructor(e) {
    e = dl(e), e && (this._element = e, da.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    da.removeData(this._element, this.constructor.DATA_KEY), he.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    G2(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return da.getData(dl(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return rS;
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
const le = {
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
const nS = 3, Ve = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== nS; )
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
gt();
gt();
gt();
gt();
gt();
gt();
const gs = "collapse", kp = "te.collapse", Xa = `.${kp}`, Jc = {
  toggle: !0,
  parent: null
}, iS = {
  toggle: "boolean",
  parent: "(null|element)"
}, aS = `show${Xa}`, oS = `shown${Xa}`, sS = `hide${Xa}`, lS = `hidden${Xa}`, ys = "data-te-collapse-show", Xc = "data-te-collapse-collapsed", ta = "data-te-collapse-collapsing", uS = "data-te-collapse-horizontal", jr = "data-te-collapse-item", Qc = `:scope [${jr}] [${jr}]`, cS = "width", fS = "height", dS = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", Zc = "[data-te-collapse-init]", pS = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, hS = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Vr extends Cp {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Ve.find(Zc);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], u = vp(s), c = Ve.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Jc;
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
      const u = Ve.find(
        Qc,
        this._config.parent
      );
      e = Ve.find(
        dS,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Ve.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? Vr.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (he.trigger(this._element, aS).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && Vr.getOrCreateInstance(u, { toggle: !1 }).hide(), r || da.setData(u, kp, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    le.removeClass(this._element, this._classes.visible), le.removeClass(this._element, this._classes.hidden), le.addClass(this._element, a), this._element.removeAttribute(jr), this._element.setAttribute(ta, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, le.removeClass(this._element, this._classes.hidden), le.removeClass(this._element, a), le.addClass(this._element, this._classes.visible), this._element.removeAttribute(ta), this._element.setAttribute(jr, ""), this._element.setAttribute(ys, ""), this._element.style[i] = "", he.trigger(this._element, oS);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || he.trigger(this._element, sS).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, H2(this._element), le.addClass(this._element, r), le.removeClass(this._element, this._classes.visible), le.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ta, ""), this._element.removeAttribute(jr), this._element.removeAttribute(ys);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Jn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, le.removeClass(this._element, r), le.addClass(this._element, this._classes.visible), le.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ta), this._element.setAttribute(jr, ""), he.trigger(this._element, lS);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(ys);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...Jc,
      ...le.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = dl(e.parent), Pa(gs, e, iS), e;
  }
  _getClasses(e) {
    const r = le.getDataClassAttributes(this._element);
    return e = {
      ...pS,
      ...r,
      ...e
    }, Pa(gs, e, hS), e;
  }
  _getDimension() {
    return this._element.hasAttribute(uS) ? cS : fS;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Ve.find(
      Qc,
      this._config.parent
    );
    Ve.find(Zc, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Jn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(Xc) : n.setAttribute(`${Xc}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = Vr.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let ef = [];
const mS = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  ef.includes(n) || (ef.push(n), he.on(
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
}, vs = "alert", gS = "te.alert", Tp = `.${gS}`, yS = `close${Tp}`, vS = `closed${Tp}`, kn = "data-te-alert-show", bS = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, tf = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, wS = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, xS = {
  fadeIn: "string",
  fadeOut: "string"
};
class $a extends Cp {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return bS;
  }
  static get Default() {
    return tf;
  }
  static get NAME() {
    return vs;
  }
  // Public
  close() {
    if (he.trigger(this._element, yS).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, le.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(kn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(kn) && (le.removeClass(this._element, "hidden"), le.addClass(this._element, "block"), Ka(this._element))) {
        const e = (r) => {
          le.removeClass(this._element, "hidden"), le.addClass(this._element, "block"), he.off(r.target, "animationend", e);
        };
        this._element.setAttribute(kn, ""), he.on(this._element, "animationend", e);
      }
      this._config.animation && (le.removeClass(this._element, this._classes.fadeOut), le.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(kn)) {
      this._element.removeAttribute(kn);
      const e = (r) => {
        le.addClass(this._element, "hidden"), le.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), he.off(r.target, "animationend", e);
      };
      he.on(this._element, "animationend", e), le.removeClass(this._element, this._classes.fadeIn), le.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (mS($a, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...tf,
      ...le.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, Pa(vs, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = le.getDataClassAttributes(this._element);
    return e = {
      ...wS,
      ...r,
      ...e
    }, Pa(vs, e, xS), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), he.trigger(this._element, vS), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = $a.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (r[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        r[e](this);
      }
    });
  }
}
gt(), gt();
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
            var d = this[f][0];
            d != null && (c[d] = !0);
          }
        for (var g = 0; g < o.length; g++) {
          var S = [].concat(o[g]);
          u && c[S[0]] || (s && (S[2] ? S[2] = "".concat(s, " and ").concat(S[2]) : S[2] = s), a.push(S));
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
      var k = {};
      return function($) {
        if (k[$] === void 0) {
          var L = document.querySelector($);
          if (window.HTMLIFrameElement && L instanceof window.HTMLIFrameElement)
            try {
              L = L.contentDocument.head;
            } catch {
              L = null;
            }
          k[$] = L;
        }
        return k[$];
      };
    }(), u = [];
    function c(k) {
      for (var $ = -1, L = 0; L < u.length; L++)
        if (u[L].identifier === k) {
          $ = L;
          break;
        }
      return $;
    }
    function f(k, $) {
      for (var L = {}, R = [], M = 0; M < k.length; M++) {
        var U = k[M], B = $.base ? U[0] + $.base : U[0], I = L[B] || 0, V = "".concat(B, " ").concat(I);
        L[B] = I + 1;
        var h = c(V), v = { css: U[1], media: U[2], sourceMap: U[3] };
        h !== -1 ? (u[h].references++, u[h].updater(v)) : u.push({ identifier: V, updater: P(v, $), references: 1 }), R.push(V);
      }
      return R;
    }
    function d(k) {
      var $ = document.createElement("style"), L = k.attributes || {};
      if (L.nonce === void 0) {
        var R = a.nc;
        R && (L.nonce = R);
      }
      if (Object.keys(L).forEach(function(U) {
        $.setAttribute(U, L[U]);
      }), typeof k.insert == "function")
        k.insert($);
      else {
        var M = s(k.insert || "head");
        if (!M)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        M.appendChild($);
      }
      return $;
    }
    var g, S = (g = [], function(k, $) {
      return g[k] = $, g.filter(Boolean).join(`
`);
    });
    function m(k, $, L, R) {
      var M = L ? "" : R.media ? "@media ".concat(R.media, " {").concat(R.css, "}") : R.css;
      if (k.styleSheet)
        k.styleSheet.cssText = S($, M);
      else {
        var U = document.createTextNode(M), B = k.childNodes;
        B[$] && k.removeChild(B[$]), B.length ? k.insertBefore(U, B[$]) : k.appendChild(U);
      }
    }
    function x(k, $, L) {
      var R = L.css, M = L.media, U = L.sourceMap;
      if (M ? k.setAttribute("media", M) : k.removeAttribute("media"), U && typeof btoa < "u" && (R += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U)))), " */")), k.styleSheet)
        k.styleSheet.cssText = R;
      else {
        for (; k.firstChild; )
          k.removeChild(k.firstChild);
        k.appendChild(document.createTextNode(R));
      }
    }
    var A = null, E = 0;
    function P(k, $) {
      var L, R, M;
      if ($.singleton) {
        var U = E++;
        L = A || (A = d($)), R = m.bind(null, L, U, !1), M = m.bind(null, L, U, !0);
      } else
        L = d($), R = x.bind(null, L, $), M = function() {
          (function(B) {
            if (B.parentNode === null)
              return !1;
            B.parentNode.removeChild(B);
          })(L);
        };
      return R(k), function(B) {
        if (B) {
          if (B.css === k.css && B.media === k.media && B.sourceMap === k.sourceMap)
            return;
          R(k = B);
        } else
          M();
      };
    }
    n.exports = function(k, $) {
      ($ = $ || {}).singleton || typeof $.singleton == "boolean" || ($.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var L = f(k = k || [], $);
      return function(R) {
        if (R = R || [], Object.prototype.toString.call(R) === "[object Array]") {
          for (var M = 0; M < L.length; M++) {
            var U = c(L[M]);
            u[U].references--;
          }
          for (var B = f(R, $), I = 0; I < L.length; I++) {
            var V = c(L[I]);
            u[V].references === 0 && (u[V].updater(), u.splice(V, 1));
          }
          L = B;
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
gt();
gt();
z2("chips-input-");
const Mt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, SS = {
  line: {
    options: {
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
      ...Mt,
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
}, Pp = { isEmpty: { configurable: !0 } };
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
Pp.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Qa.prototype, Pp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
q2("div");
const OS = (t) => {
  W2(() => {
    const e = wp();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, AS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, ES = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ja(this) && t.getOrCreateInstance(this).show();
    }
  );
}, _S = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Jn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ja(this))
        return;
      he.one(n, t.EVENT_HIDDEN, () => {
        Ka(this) && this.focus();
      });
      const i = Ve.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, CS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, kS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Jn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), he.one(n, t.EVENT_SHOW, (a) => {
        a.defaultPrevented || he.one(n, t.EVENT_HIDDEN, () => {
          Ka(this) && this.focus();
        });
      });
      const i = Ve.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      i && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, TS = (t, e) => {
  he.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, PS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = vp(this);
      Ve.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, $S = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, IS = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, DS = (t, e) => {
  Ve.find(e).forEach((r) => {
    new t(r);
  }), he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, RS = (t, e) => {
  const r = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", n = (a) => typeof a != "string" ? a : r(a) ? JSON.parse(a.replace(/'/g, '"')) : a, i = (a) => {
    const o = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const u = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        o[u] = n(a[s]);
      }
    }), o;
  };
  Ve.find(e).forEach((a) => {
    if (le.getDataAttribute(a, "chart") !== "bubble" && le.getDataAttribute(a, "chart") !== "scatter") {
      const o = le.getDataAttributes(a), s = {
        data: {
          datasets: [i(o)]
        }
      };
      return o.chart && (s.type = o.chart), o.labels && (s.data.labels = JSON.parse(o.labels.replace(/'/g, '"'))), new t(a, {
        ...s,
        ...SS[s.type]
      });
    }
    return null;
  });
};
class NS {
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
const hl = new NS(), Pn = {
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
    advanced: RS
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: CS
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: PS
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: AS
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: kS
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: TS
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: _S
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: ES
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: $S
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: IS
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: DS
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, FS = (t) => Pn[t.NAME] || null, LS = (t, e) => {
  if (!t || !e.allowReinits && hl.isInited(t.NAME))
    return;
  hl.add(t.NAME);
  const r = FS(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (OS(t), r != null && r.advanced) {
    r == null || r.advanced(t, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(t, r == null ? void 0 : r.selector);
    return;
  }
  Ve.find(r == null ? void 0 : r.selector).forEach((i) => {
    let a = t.getInstance(i);
    a || (a = new t(i), r != null && r.onInit && a[r.onInit]());
  });
}, MS = (t, e) => {
  t.forEach((r) => LS(r, e));
}, BS = {
  allowReinits: !1,
  checkOtherImports: !1
}, jS = (t, e = {}) => {
  e = { ...BS, ...e };
  const r = Object.keys(Pn).map((n) => {
    if (document.querySelector(Pn[n].selector)) {
      const i = t[Pn[n].name];
      return !i && !hl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${Pn[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  MS(r, e);
}, zS = { role: "alert" }, US = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, VS = /* @__PURE__ */ D("button", {
  type: "button",
  class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
  "data-te-alert-dismiss": "",
  "aria-label": "Close"
}, [
  /* @__PURE__ */ D("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
    /* @__PURE__ */ D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: "h-6 w-6"
    }, [
      /* @__PURE__ */ D("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), BA = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return at(() => {
      jS({ Alert: $a });
    }), (e, r) => (O(), C("div", zS, [
      D("div", null, [
        D("div", US, [
          Y(e.$slots, "default"),
          VS
        ])
      ])
    ]));
  }
}, HS = ["aria-controls"], WS = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, qS = ["id"], GS = {
  __name: "CollapsableSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = ue(null), n = ue(null), i = ue(e.open);
    at(() => {
      n.value = new Vr(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (O(), C("div", {
      class: Z(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      D("div", {
        class: Z(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        D("div", {
          onClick: a,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable"
        }, [
          ye(X(t.header) + " ", 1),
          D("button", WS, X(i.value ? "Hide" : "Show"), 1)
        ], 8, HS),
        D("div", {
          class: "!visible hidden overflow-hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          D("div", {
            class: Z([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            Y(o.$slots, "default")
          ], 2)
        ], 8, qS)
      ], 2)
    ], 2));
  }
}, YS = { class: "relative" }, jA = {
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
    at(() => document.addEventListener("keydown", r)), Xn(() => document.removeEventListener("keydown", r));
    const n = oe(() => isNaN(parseInt(e.width)) ? e.width : "w-" + e.width), i = oe(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = ue(!1);
    return (o, s) => (O(), C("div", YS, [
      D("div", {
        onClick: s[0] || (s[0] = (u) => a.value = !a.value)
      }, [
        Y(o.$slots, "trigger")
      ]),
      He(D("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => a.value = !1)
      }, null, 512), [
        [Vt, a.value]
      ]),
      be(cr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: we(() => [
          He(D("div", {
            class: Z(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (u) => a.value = !1)
          }, [
            D("div", {
              class: Z(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              Y(o.$slots, "content")
            ], 2)
          ], 2), [
            [Vt, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, zA = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (O(), ae(W(nt), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: we(() => [
        Y(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, KS = ["href", "target"], UA = {
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
    return (n, i) => t.href && (t.method || t.data) ? (O(), ae(W(nt), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: Z(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: we(() => [
        Y(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (O(), C("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: Z(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      Y(n.$slots, "default")
    ], 10, KS));
  }
}, JS = {
  class: "relative",
  "data-te-dropdown-ref": ""
}, XS = {
  class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
  type: "button",
  id: "dropdownMenuButton3",
  "data-te-dropdown-toggle-ref": "",
  "aria-expanded": "false",
  "data-te-ripple-init": "",
  "data-te-ripple-color": "light"
}, QS = /* @__PURE__ */ D("span", { class: "mx-1 w-2" }, [
  /* @__PURE__ */ D("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "h-5 w-5"
  }, [
    /* @__PURE__ */ D("path", {
      "fill-rule": "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      "clip-rule": "evenodd"
    })
  ])
], -1), ZS = {
  class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
  "aria-labelledby": "dropdownMenuButton3",
  "data-te-dropdown-menu-ref": ""
}, VA = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (O(), C("div", JS, [
      D("button", XS, [
        ye(X(t.title) + " ", 1),
        QS
      ]),
      D("ul", ZS, [
        Y(e.$slots, "default")
      ])
    ]));
  }
}, eO = ["href"], HA = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (O(), C("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, X(t.title), 9, eO)
    ]));
  }
}, WA = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (O(), ae(W(GS), { header: t.header }, {
      default: we(() => [
        be(W(gO), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, tO = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, rO = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, nO = {
  key: 0,
  class: "text-center"
}, iO = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, aO = { class: "flex-start w-full md:flex" }, oO = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, sO = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, lO = { class: "mb-1 flex justify-between" }, uO = { class: "text-sm text-neutral-500" }, cO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, fO = {
  key: 1,
  class: "text-sm text-primary-500"
}, dO = { class: "text-sm text-neutral-500" }, pO = { class: "font-medium" }, hO = {
  key: 0,
  class: "line-through"
}, mO = ["innerHTML"], gO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return ti.add(Gm, Is, Km, Hm, Ym), (e, r) => t.logs == null ? (O(), C("div", tO, [
      be(W(Dp))
    ])) : (O(), C("div", rO, [
      t.logs.total ? (O(), C("ol", iO, [
        (O(!0), C(fe, null, it(t.logs.data, (n) => (O(), C("li", {
          key: n.id
        }, [
          D("div", aO, [
            D("div", oO, [
              be(W(Ht), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            D("div", sO, [
              D("div", lO, [
                D("span", uO, [
                  ye(X(n.event_formatted) + " ", 1),
                  n.reference ? (O(), C("span", cO, X(n.reference), 1)) : K("", !0),
                  n.causer ? (O(), C(fe, { key: 1 }, [
                    n.causer.id ? (O(), ae(W(nt), {
                      key: 0,
                      href: e.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: we(() => [
                        ye(" (" + X(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (O(), C("span", fO, "(" + X(n.causer.first_name) + ")", 1))
                  ], 64)) : K("", !0)
                ]),
                D("span", dO, X(n.created_date_full), 1)
              ]),
              (O(!0), C(fe, null, it(n.changes_formatted, (i, a) => (O(), C("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", pO, X(a) + ":", 1),
                i.old ? (O(), C("span", hO, X(i.old), 1)) : K("", !0),
                ye(" " + X(i.new), 1)
              ]))), 128)),
              n.description_details ? (O(), C("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, mO)) : K("", !0)
            ])
          ])
        ]))), 128))
      ])) : (O(), C("p", nO, "No Data")),
      t.logs.links ? (O(), ae(W($p), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : K("", !0)
    ]));
  }
}, yO = /* @__PURE__ */ D("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1), vO = [
  yO
], qA = {
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
  setup(t, { emit: e }) {
    const r = t, n = e;
    Ia(
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
    at(() => document.addEventListener("keydown", a)), Xn(() => {
      document.removeEventListener("keydown", a), document.body.style.overflow = null;
    });
    const o = oe(() => {
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
    return (s, u) => (O(), ae(Hp, { to: "body" }, [
      be(cr, { "leave-active-class": "duration-200" }, {
        default: we(() => [
          He(D("div", {
            class: Z(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: t.alignCenter, "mb-16 items-center justify-center": t.alignCenter }]),
            "scroll-region": ""
          }, [
            be(cr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: we(() => [
                He(D("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, vO, 512), [
                  [Vt, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            be(cr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: we(() => [
                He(D("div", {
                  class: Z(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value + (t.showBorder ? " border-pink rounded-md border-2 border-solid" : "")])
                }, [
                  t.show ? Y(s.$slots, "default", { key: 0 }) : K("", !0)
                ], 2), [
                  [Vt, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [Vt, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, bO = { class: "ml-3 flex-1 whitespace-nowrap" }, GA = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = oe(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (O(), ae(W(nt), {
      href: t.href,
      class: Z(r.value)
    }, {
      default: we(() => [
        Y(n.$slots, "icon"),
        D("span", bO, [
          Y(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, wO = {
  key: 0,
  class: "flex justify-center"
}, xO = { "aria-label": "Page navigation" }, SO = { class: "list-style-none flex" }, OO = ["innerHTML"], AO = ["innerHTML", "onClick"], $p = {
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
    const r = e, n = t, i = oe(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const o = n.links[0], s = n.links[n.links.length - 1], u = n.links.findIndex((d) => d.active);
      let c = Math.max(1, u - Math.floor(n.maxPagesToShow / 2)), f = Math.min(n.links.length - 2, c + n.maxPagesToShow - 1);
      return f - c < n.maxPagesToShow - 1 && (c = Math.max(1, f - n.maxPagesToShow + 1)), [o, ...n.links.slice(c, f + 1), s];
    }), a = (o) => {
      r("change", o);
    };
    return (o, s) => i.value.length > 3 ? (O(), C("div", wO, [
      D("nav", xO, [
        D("ul", SO, [
          (O(!0), C(fe, null, it(i.value, (u, c) => (O(), C("li", { key: c }, [
            t.linkReturn ? (O(), C(fe, { key: 0 }, [
              u.url === null ? (O(), C("button", {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                onClick: s[0] || (s[0] = (f) => a(""))
              }, null, 8, OO)) : (O(), C("button", {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
                innerHTML: u.label,
                onClick: (f) => a(u.url)
              }, null, 10, AO))
            ], 64)) : (O(), C(fe, { key: 1 }, [
              u.url === null ? (O(), ae(W(nt), {
                key: 0,
                class: "focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400",
                innerHTML: u.label,
                href: ""
              }, null, 8, ["innerHTML"])) : (O(), ae(W(nt), {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", { "font-bold text-primary": u.active }]),
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
    ])) : K("", !0);
  }
}, EO = ["type", "disabled"], Ip = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (O(), C("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Y(e.$slots, "default")
    ], 8, EO));
  }
}, _O = ["type", "disabled"], YA = {
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
  setup(t) {
    return (e, r) => (O(), C("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Y(e.$slots, "default")
    ], 8, _O));
  }
}, KA = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = oe(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (O(), ae(W(nt), {
      href: t.href,
      class: Z(r.value)
    }, {
      default: we(() => [
        Y(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, CO = ["type"], JA = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (O(), C("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      Y(e.$slots, "default")
    ], 8, CO));
  }
}, kO = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, TO = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, XA = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (O(), C("div", {
      class: Z(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      D("div", {
        class: Z(["sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (O(), C("div", kO, [
          D("span", null, X(t.header), 1),
          e.$slots.headerButton ? (O(), C("div", TO, [
            Y(e.$slots, "headerButton")
          ])) : K("", !0)
        ])) : K("", !0),
        D("div", {
          class: Z({ "px-4 pb-2": t.header })
        }, [
          Y(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, PO = {}, $O = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, IO = /* @__PURE__ */ D("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), DO = [
  IO
];
function RO(t, e) {
  return O(), C("div", $O, DO);
}
const Dp = /* @__PURE__ */ gr(PO, [["render", RO]]), NO = { class: "flex flex-wrap gap-2 lg:flex-nowrap" }, FO = ["onClick"], LO = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, MO = { class: "text-xl font-medium leading-tight text-neutral-800" }, BO = { class: "flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" }, QA = {
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
    return (o, s) => (O(), C("div", null, [
      D("div", NO, [
        (O(!0), C(fe, null, it(t.stats, (u) => (O(), C("div", {
          class: Z(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(u.name)
          }]),
          onClick: (c) => i(u.name),
          key: u.value
        }, [
          D("div", null, [
            D("div", LO, [
              D("h5", MO, X(u.value), 1)
            ])
          ]),
          D("div", BO, X(u.label ?? u.name), 1)
        ], 10, FO))), 128))
      ])
    ]));
  }
}, ZA = {
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
    },
    queryParams: {
      type: Object
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const r = t, n = e, i = ue([]), a = ue(1), o = ue(!0), s = ue(0), u = ue(""), c = (d) => {
      a.value = 1, s.value = 0, u.value = d, f();
    }, f = async (d = !1) => {
      var x;
      const g = new URLSearchParams();
      if (g.append("term", u.value), g.append("page", a.value), r.queryParams && Object.keys(r.queryParams).forEach((A) => {
        g.append(A, r.queryParams[A]);
      }), d) {
        const A = ((x = r.form) == null ? void 0 : x[r.field]) || r.modelValue;
        A && g.append("ajax_id", A);
      }
      const m = await (await fetch(`${r.url}?${g.toString()}`)).json();
      if (o.value = m.current_page < m.last_page, a.value === 1) {
        i.value = m.data;
        return;
      }
      i.value = i.value.concat(m.data);
    };
    return at(() => {
      f(!0);
      const d = document.getElementById(r.id).parentNode.querySelector(".menu");
      d == null || d.addEventListener(
        "scroll",
        (g) => {
          g.target.scrollTop > s.value && g.target.scrollTop + g.target.clientHeight >= g.target.scrollHeight && o.value && (a.value++, f());
        },
        {
          passive: !0
        }
      );
    }), (d, g) => (O(), ae(W(ly), {
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
      "onUpdate:modelValue": g[0] || (g[0] = (S) => n("update:modelValue", S)),
      onSearchchange: c
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm"]));
  }
};
const jO = (t) => (Wp("data-v-03a62b00"), t = t(), qp(), t), zO = ["id", "aria-controls"], UO = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, VO = /* @__PURE__ */ jO(() => /* @__PURE__ */ D("svg", {
  class: "h-3 w-3 transform",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ D("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 4 4 4-4"
  })
], -1)), HO = ["id"], WO = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(t) {
    const e = t, r = ue(null), n = ue(null), i = ue(e.show);
    at(() => {
      n.value = new Vr(r.value, {
        toggle: e.show
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (O(), C("li", null, [
      D("button", {
        id: t.name,
        onClick: a,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": t.name ? t.name.replaceAll(" ", "_") : "collapsable"
      }, [
        Y(o.$slots, "icon", {}, void 0, !0),
        D("span", UO, X(t.name), 1),
        VO
      ], 8, zO),
      D("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: t.name ? t.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        Y(o.$slots, "default", {}, void 0, !0)
      ], 8, HO)
    ]));
  }
}, eE = /* @__PURE__ */ gr(WO, [["__scopeId", "data-v-03a62b00"]]), qO = {}, GO = { class: "border-t border-gray-100" }, YO = { class: "divide-y divide-gray-100" };
function KO(t, e) {
  return O(), C("div", GO, [
    D("dl", YO, [
      Y(t.$slots, "default")
    ])
  ]);
}
const tE = /* @__PURE__ */ gr(qO, [["render", KO]]), JO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, XO = { class: "flex items-center text-sm font-medium" }, QO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, ZO = { class: "flex min-h-full items-center" }, eA = { class: "flex-grow" }, tA = {
  key: 0,
  class: "ml-4 flex-shrink-0"
}, rA = { class: "flex-grow" }, nA = { class: "ml-4 flex-shrink-0" }, rE = {
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
    ti.add(Is, Pu);
    const e = t, r = ue(!1), n = () => {
      e.editable && (r.value = !r.value);
    };
    return (i, a) => (O(), C("div", JO, [
      D("dt", XO, [
        ye(X(t.label) + " ", 1),
        Y(i.$slots, "label")
      ]),
      D("dd", QO, [
        D("div", ZO, [
          r.value ? (O(), C(fe, { key: 1 }, [
            D("div", rA, [
              Y(i.$slots, "edit")
            ]),
            D("span", nA, [
              D("button", {
                type: "button",
                onClick: n,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                be(W(Ht), { icon: W(Pu) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (O(), C(fe, { key: 0 }, [
            D("div", eA, [
              Y(i.$slots, "default"),
              ye(" " + X(t.value), 1)
            ]),
            t.editable ? (O(), C("span", tA, [
              D("button", {
                type: "button",
                onClick: n,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                be(W(Ht), { icon: W(Is) }, null, 8, ["icon"])
              ])
            ])) : K("", !0)
          ], 64))
        ])
      ])
    ]));
  }
};
var Rp = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
    i.JS_MD5_NO_WINDOW && (n = !1);
    var a = !n && typeof self == "object", o = !i.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    o ? i = rt : a && (i = self);
    var s = !i.JS_MD5_NO_COMMON_JS && !0 && t.exports, u = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], x;
    if (u) {
      var A = new ArrayBuffer(68);
      x = new Uint8Array(A), m = new Uint32Array(A);
    }
    var E = Array.isArray;
    (i.JS_MD5_NO_NODE_JS || !E) && (E = function(h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
    var P = ArrayBuffer.isView;
    u && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !P) && (P = function(h) {
      return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
    });
    var k = function(h) {
      var v = typeof h;
      if (v === "string")
        return [h, !0];
      if (v !== "object" || h === null)
        throw new Error(e);
      if (u && h.constructor === ArrayBuffer)
        return [new Uint8Array(h), !1];
      if (!E(h) && !P(h))
        throw new Error(e);
      return [h, !1];
    }, $ = function(h) {
      return function(v) {
        return new B(!0).update(v)[h]();
      };
    }, L = function() {
      var h = $("hex");
      o && (h = R(h)), h.create = function() {
        return new B();
      }, h.update = function(y) {
        return h.create().update(y);
      };
      for (var v = 0; v < g.length; ++v) {
        var w = g[v];
        h[w] = $(w);
      }
      return h;
    }, R = function(h) {
      var v = Be, w = Be.Buffer, y;
      w.from && !i.JS_MD5_NO_BUFFER_FROM ? y = w.from : y = function(F) {
        return new w(F);
      };
      var j = function(F) {
        if (typeof F == "string")
          return v.createHash("md5").update(F, "utf8").digest("hex");
        if (F == null)
          throw new Error(e);
        return F.constructor === ArrayBuffer && (F = new Uint8Array(F)), E(F) || P(F) || F.constructor === w ? v.createHash("md5").update(y(F)).digest("hex") : h(F);
      };
      return j;
    }, M = function(h) {
      return function(v, w) {
        return new I(v, !0).update(w)[h]();
      };
    }, U = function() {
      var h = M("hex");
      h.create = function(y) {
        return new I(y);
      }, h.update = function(y, j) {
        return h.create(y).update(j);
      };
      for (var v = 0; v < g.length; ++v) {
        var w = g[v];
        h[w] = M(w);
      }
      return h;
    };
    function B(h) {
      if (h)
        m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = x;
      else if (u) {
        var v = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(v), this.blocks = new Uint32Array(v);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    B.prototype.update = function(h) {
      if (this.finalized)
        throw new Error(r);
      var v = k(h);
      h = v[0];
      for (var w = v[1], y, j = 0, F, N = h.length, G = this.blocks, J = this.buffer8; j < N; ) {
        if (this.hashed && (this.hashed = !1, G[0] = G[16], G[16] = G[1] = G[2] = G[3] = G[4] = G[5] = G[6] = G[7] = G[8] = G[9] = G[10] = G[11] = G[12] = G[13] = G[14] = G[15] = 0), w)
          if (u)
            for (F = this.start; j < N && F < 64; ++j)
              y = h.charCodeAt(j), y < 128 ? J[F++] = y : y < 2048 ? (J[F++] = 192 | y >>> 6, J[F++] = 128 | y & 63) : y < 55296 || y >= 57344 ? (J[F++] = 224 | y >>> 12, J[F++] = 128 | y >>> 6 & 63, J[F++] = 128 | y & 63) : (y = 65536 + ((y & 1023) << 10 | h.charCodeAt(++j) & 1023), J[F++] = 240 | y >>> 18, J[F++] = 128 | y >>> 12 & 63, J[F++] = 128 | y >>> 6 & 63, J[F++] = 128 | y & 63);
          else
            for (F = this.start; j < N && F < 64; ++j)
              y = h.charCodeAt(j), y < 128 ? G[F >>> 2] |= y << d[F++ & 3] : y < 2048 ? (G[F >>> 2] |= (192 | y >>> 6) << d[F++ & 3], G[F >>> 2] |= (128 | y & 63) << d[F++ & 3]) : y < 55296 || y >= 57344 ? (G[F >>> 2] |= (224 | y >>> 12) << d[F++ & 3], G[F >>> 2] |= (128 | y >>> 6 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | y & 63) << d[F++ & 3]) : (y = 65536 + ((y & 1023) << 10 | h.charCodeAt(++j) & 1023), G[F >>> 2] |= (240 | y >>> 18) << d[F++ & 3], G[F >>> 2] |= (128 | y >>> 12 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | y >>> 6 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | y & 63) << d[F++ & 3]);
        else if (u)
          for (F = this.start; j < N && F < 64; ++j)
            J[F++] = h[j];
        else
          for (F = this.start; j < N && F < 64; ++j)
            G[F >>> 2] |= h[j] << d[F++ & 3];
        this.lastByteIndex = F, this.bytes += F - this.start, F >= 64 ? (this.start = F - 64, this.hash(), this.hashed = !0) : this.start = F;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, B.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var h = this.blocks, v = this.lastByteIndex;
        h[v >>> 2] |= f[v & 3], v >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, B.prototype.hash = function() {
      var h, v, w, y, j, F, N = this.blocks;
      this.first ? (h = N[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, y = (-1732584194 ^ h & 2004318071) + N[1] - 117830708, y = (y << 12 | y >>> 20) + h << 0, w = (-271733879 ^ y & (h ^ -271733879)) + N[2] - 1126478375, w = (w << 17 | w >>> 15) + y << 0, v = (h ^ w & (y ^ h)) + N[3] - 1316259209, v = (v << 22 | v >>> 10) + w << 0) : (h = this.h0, v = this.h1, w = this.h2, y = this.h3, h += (y ^ v & (w ^ y)) + N[0] - 680876936, h = (h << 7 | h >>> 25) + v << 0, y += (w ^ h & (v ^ w)) + N[1] - 389564586, y = (y << 12 | y >>> 20) + h << 0, w += (v ^ y & (h ^ v)) + N[2] + 606105819, w = (w << 17 | w >>> 15) + y << 0, v += (h ^ w & (y ^ h)) + N[3] - 1044525330, v = (v << 22 | v >>> 10) + w << 0), h += (y ^ v & (w ^ y)) + N[4] - 176418897, h = (h << 7 | h >>> 25) + v << 0, y += (w ^ h & (v ^ w)) + N[5] + 1200080426, y = (y << 12 | y >>> 20) + h << 0, w += (v ^ y & (h ^ v)) + N[6] - 1473231341, w = (w << 17 | w >>> 15) + y << 0, v += (h ^ w & (y ^ h)) + N[7] - 45705983, v = (v << 22 | v >>> 10) + w << 0, h += (y ^ v & (w ^ y)) + N[8] + 1770035416, h = (h << 7 | h >>> 25) + v << 0, y += (w ^ h & (v ^ w)) + N[9] - 1958414417, y = (y << 12 | y >>> 20) + h << 0, w += (v ^ y & (h ^ v)) + N[10] - 42063, w = (w << 17 | w >>> 15) + y << 0, v += (h ^ w & (y ^ h)) + N[11] - 1990404162, v = (v << 22 | v >>> 10) + w << 0, h += (y ^ v & (w ^ y)) + N[12] + 1804603682, h = (h << 7 | h >>> 25) + v << 0, y += (w ^ h & (v ^ w)) + N[13] - 40341101, y = (y << 12 | y >>> 20) + h << 0, w += (v ^ y & (h ^ v)) + N[14] - 1502002290, w = (w << 17 | w >>> 15) + y << 0, v += (h ^ w & (y ^ h)) + N[15] + 1236535329, v = (v << 22 | v >>> 10) + w << 0, h += (w ^ y & (v ^ w)) + N[1] - 165796510, h = (h << 5 | h >>> 27) + v << 0, y += (v ^ w & (h ^ v)) + N[6] - 1069501632, y = (y << 9 | y >>> 23) + h << 0, w += (h ^ v & (y ^ h)) + N[11] + 643717713, w = (w << 14 | w >>> 18) + y << 0, v += (y ^ h & (w ^ y)) + N[0] - 373897302, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ y & (v ^ w)) + N[5] - 701558691, h = (h << 5 | h >>> 27) + v << 0, y += (v ^ w & (h ^ v)) + N[10] + 38016083, y = (y << 9 | y >>> 23) + h << 0, w += (h ^ v & (y ^ h)) + N[15] - 660478335, w = (w << 14 | w >>> 18) + y << 0, v += (y ^ h & (w ^ y)) + N[4] - 405537848, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ y & (v ^ w)) + N[9] + 568446438, h = (h << 5 | h >>> 27) + v << 0, y += (v ^ w & (h ^ v)) + N[14] - 1019803690, y = (y << 9 | y >>> 23) + h << 0, w += (h ^ v & (y ^ h)) + N[3] - 187363961, w = (w << 14 | w >>> 18) + y << 0, v += (y ^ h & (w ^ y)) + N[8] + 1163531501, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ y & (v ^ w)) + N[13] - 1444681467, h = (h << 5 | h >>> 27) + v << 0, y += (v ^ w & (h ^ v)) + N[2] - 51403784, y = (y << 9 | y >>> 23) + h << 0, w += (h ^ v & (y ^ h)) + N[7] + 1735328473, w = (w << 14 | w >>> 18) + y << 0, v += (y ^ h & (w ^ y)) + N[12] - 1926607734, v = (v << 20 | v >>> 12) + w << 0, j = v ^ w, h += (j ^ y) + N[5] - 378558, h = (h << 4 | h >>> 28) + v << 0, y += (j ^ h) + N[8] - 2022574463, y = (y << 11 | y >>> 21) + h << 0, F = y ^ h, w += (F ^ v) + N[11] + 1839030562, w = (w << 16 | w >>> 16) + y << 0, v += (F ^ w) + N[14] - 35309556, v = (v << 23 | v >>> 9) + w << 0, j = v ^ w, h += (j ^ y) + N[1] - 1530992060, h = (h << 4 | h >>> 28) + v << 0, y += (j ^ h) + N[4] + 1272893353, y = (y << 11 | y >>> 21) + h << 0, F = y ^ h, w += (F ^ v) + N[7] - 155497632, w = (w << 16 | w >>> 16) + y << 0, v += (F ^ w) + N[10] - 1094730640, v = (v << 23 | v >>> 9) + w << 0, j = v ^ w, h += (j ^ y) + N[13] + 681279174, h = (h << 4 | h >>> 28) + v << 0, y += (j ^ h) + N[0] - 358537222, y = (y << 11 | y >>> 21) + h << 0, F = y ^ h, w += (F ^ v) + N[3] - 722521979, w = (w << 16 | w >>> 16) + y << 0, v += (F ^ w) + N[6] + 76029189, v = (v << 23 | v >>> 9) + w << 0, j = v ^ w, h += (j ^ y) + N[9] - 640364487, h = (h << 4 | h >>> 28) + v << 0, y += (j ^ h) + N[12] - 421815835, y = (y << 11 | y >>> 21) + h << 0, F = y ^ h, w += (F ^ v) + N[15] + 530742520, w = (w << 16 | w >>> 16) + y << 0, v += (F ^ w) + N[2] - 995338651, v = (v << 23 | v >>> 9) + w << 0, h += (w ^ (v | ~y)) + N[0] - 198630844, h = (h << 6 | h >>> 26) + v << 0, y += (v ^ (h | ~w)) + N[7] + 1126891415, y = (y << 10 | y >>> 22) + h << 0, w += (h ^ (y | ~v)) + N[14] - 1416354905, w = (w << 15 | w >>> 17) + y << 0, v += (y ^ (w | ~h)) + N[5] - 57434055, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~y)) + N[12] + 1700485571, h = (h << 6 | h >>> 26) + v << 0, y += (v ^ (h | ~w)) + N[3] - 1894986606, y = (y << 10 | y >>> 22) + h << 0, w += (h ^ (y | ~v)) + N[10] - 1051523, w = (w << 15 | w >>> 17) + y << 0, v += (y ^ (w | ~h)) + N[1] - 2054922799, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~y)) + N[8] + 1873313359, h = (h << 6 | h >>> 26) + v << 0, y += (v ^ (h | ~w)) + N[15] - 30611744, y = (y << 10 | y >>> 22) + h << 0, w += (h ^ (y | ~v)) + N[6] - 1560198380, w = (w << 15 | w >>> 17) + y << 0, v += (y ^ (w | ~h)) + N[13] + 1309151649, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~y)) + N[4] - 145523070, h = (h << 6 | h >>> 26) + v << 0, y += (v ^ (h | ~w)) + N[11] - 1120210379, y = (y << 10 | y >>> 22) + h << 0, w += (h ^ (y | ~v)) + N[2] + 718787259, w = (w << 15 | w >>> 17) + y << 0, v += (y ^ (w | ~h)) + N[9] - 343485551, v = (v << 21 | v >>> 11) + w << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = v - 271733879 << 0, this.h2 = w - 1732584194 << 0, this.h3 = y + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + v << 0, this.h2 = this.h2 + w << 0, this.h3 = this.h3 + y << 0);
    }, B.prototype.hex = function() {
      this.finalize();
      var h = this.h0, v = this.h1, w = this.h2, y = this.h3;
      return c[h >>> 4 & 15] + c[h & 15] + c[h >>> 12 & 15] + c[h >>> 8 & 15] + c[h >>> 20 & 15] + c[h >>> 16 & 15] + c[h >>> 28 & 15] + c[h >>> 24 & 15] + c[v >>> 4 & 15] + c[v & 15] + c[v >>> 12 & 15] + c[v >>> 8 & 15] + c[v >>> 20 & 15] + c[v >>> 16 & 15] + c[v >>> 28 & 15] + c[v >>> 24 & 15] + c[w >>> 4 & 15] + c[w & 15] + c[w >>> 12 & 15] + c[w >>> 8 & 15] + c[w >>> 20 & 15] + c[w >>> 16 & 15] + c[w >>> 28 & 15] + c[w >>> 24 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 28 & 15] + c[y >>> 24 & 15];
    }, B.prototype.toString = B.prototype.hex, B.prototype.digest = function() {
      this.finalize();
      var h = this.h0, v = this.h1, w = this.h2, y = this.h3;
      return [
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        v & 255,
        v >>> 8 & 255,
        v >>> 16 & 255,
        v >>> 24 & 255,
        w & 255,
        w >>> 8 & 255,
        w >>> 16 & 255,
        w >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255
      ];
    }, B.prototype.array = B.prototype.digest, B.prototype.arrayBuffer = function() {
      this.finalize();
      var h = new ArrayBuffer(16), v = new Uint32Array(h);
      return v[0] = this.h0, v[1] = this.h1, v[2] = this.h2, v[3] = this.h3, h;
    }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.base64 = function() {
      for (var h, v, w, y = "", j = this.array(), F = 0; F < 15; )
        h = j[F++], v = j[F++], w = j[F++], y += S[h >>> 2] + S[(h << 4 | v >>> 4) & 63] + S[(v << 2 | w >>> 6) & 63] + S[w & 63];
      return h = j[F], y += S[h >>> 2] + S[h << 4 & 63] + "==", y;
    };
    function I(h, v) {
      var w, y = k(h);
      if (h = y[0], y[1]) {
        var j = [], F = h.length, N = 0, G;
        for (w = 0; w < F; ++w)
          G = h.charCodeAt(w), G < 128 ? j[N++] = G : G < 2048 ? (j[N++] = 192 | G >>> 6, j[N++] = 128 | G & 63) : G < 55296 || G >= 57344 ? (j[N++] = 224 | G >>> 12, j[N++] = 128 | G >>> 6 & 63, j[N++] = 128 | G & 63) : (G = 65536 + ((G & 1023) << 10 | h.charCodeAt(++w) & 1023), j[N++] = 240 | G >>> 18, j[N++] = 128 | G >>> 12 & 63, j[N++] = 128 | G >>> 6 & 63, j[N++] = 128 | G & 63);
        h = j;
      }
      h.length > 64 && (h = new B(!0).update(h).array());
      var J = [], Ke = [];
      for (w = 0; w < 64; ++w) {
        var Dt = h[w] || 0;
        J[w] = 92 ^ Dt, Ke[w] = 54 ^ Dt;
      }
      B.call(this, v), this.update(Ke), this.oKeyPad = J, this.inner = !0, this.sharedMemory = v;
    }
    I.prototype = new B(), I.prototype.finalize = function() {
      if (B.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var h = this.array();
        B.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), B.prototype.finalize.call(this);
      }
    };
    var V = L();
    V.md5 = V, V.md5.hmac = U(), s ? t.exports = V : i.md5 = V;
  })();
})(Rp);
var iA = Rp.exports;
const aA = ["src", "alt"], nE = {
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
  setup(t) {
    const e = t, r = oe(() => iA.md5(e.email.trim().toLowerCase())), n = oe(() => `https://www.gravatar.com/avatar/${r.value}?s=${e.size}`), i = oe(() => `Gravatar for ${e.email}`);
    return (a, o) => (O(), C("img", {
      src: n.value,
      alt: i.value
    }, null, 8, aA));
  }
}, iE = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (O(), ae(Fw, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id,
      class: "cursor-pointer"
    }, {
      default: we(() => [
        Y(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, aE = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  BA as Alert,
  sA as Checkbox,
  GS as CollapsableSection,
  GS as CollapsibleSection,
  YA as DangerButton,
  tE as DescriptionList,
  rE as DescriptionListItem,
  jA as Dropdown,
  zA as DropdownLink,
  cA as DropdownSearchbar,
  hA as FileDropZoneInput,
  nE as GravatarImg,
  mA as Images,
  lA as Input,
  ri as InputError,
  Pl as InputLabel,
  UA as LinkButton,
  VA as LinkDropdownButton,
  HA as LinkDropdownButtonItem,
  WA as Logs,
  gO as LogsContent,
  qA as Modal,
  eE as NavCollapse,
  GA as NavLink,
  $p as Pagination,
  Ip as PrimaryButton,
  gA as RadioButton,
  KA as ResponsiveNavLink,
  ly as SearchSelect,
  JA as SecondaryButton,
  XA as Section,
  ZA as Select2ajax,
  Dp as Spinner,
  QA as Stats,
  Tc as SubmitButton,
  yA as Table,
  MA as TableItemCard,
  Fw as Td,
  iE as TdCollapseHandler,
  fg as TextInput,
  uA as Textarea,
  bA as Th,
  vA as Thead,
  xA as TrCollapse,
  wA as TrCollapseHandler,
  aE as default,
  si as getInertiaRouter,
  dA as hasPermission,
  O1 as moneyFormat,
  fA as numberFormat,
  pA as setInertiaRouter
};
