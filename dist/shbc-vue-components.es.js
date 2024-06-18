import { computed as le, withDirectives as Xe, openBlock as E, createElementBlock as I, normalizeClass as Z, vModelCheckbox as Od, defineComponent as qr, watch as Lr, h as pr, mergeModels as Am, ref as ce, useModel as Em, onMounted as st, createBlock as se, unref as q, createCommentVNode as J, createElementVNode as L, renderSlot as K, toDisplayString as X, createVNode as we, Transition as Fr, withCtx as xe, vModelSelect as _m, Fragment as de, createTextVNode as ve, vShow as hr, vModelText as Cm, resolveDirective as km, normalizeProps as at, guardReactiveProps as dt, renderList as bt, resolveDynamicComponent as ks, mergeProps as xi, toHandlers as Pm, withModifiers as fr, withKeys as ln, normalizeStyle as za, shallowRef as Tm, markRaw as lc, reactive as su, onUnmounted as Ri, toRefs as $m, nextTick as Im, Teleport as Dm, pushScopeId as Rm, popScopeId as Nm } from "vue";
const Lm = ["value"], dC = {
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
  setup(t, { emit: e }) {
    const r = e, n = t, i = le({
      get() {
        return n.checked;
      },
      set(a) {
        r("update:checked", a);
      }
    });
    return (a, o) => Xe((E(), I("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => i.value = s),
      class: Z(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [t.customClass]: t.customClass }])
    }, null, 10, Lm)), [
      [Od, i.value]
    ]);
  }
};
function uc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function V(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? uc(Object(r), !0).forEach(function(n) {
      Ce(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : uc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function to(t) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, to(t);
}
function Fm(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function cc(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Mm(t, e, r) {
  return e && cc(t.prototype, e), r && cc(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ce(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function lu(t, e) {
  return Bm(t) || Um(t, e) || Ad(t, e) || Hm();
}
function Ni(t) {
  return jm(t) || zm(t) || Ad(t) || Vm();
}
function jm(t) {
  if (Array.isArray(t))
    return ll(t);
}
function Bm(t) {
  if (Array.isArray(t))
    return t;
}
function zm(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Um(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, a = !1, o, s;
    try {
      for (r = r.call(t); !(i = (o = r.next()).done) && (n.push(o.value), !(e && n.length === e)); i = !0)
        ;
    } catch (l) {
      a = !0, s = l;
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
function Ad(t, e) {
  if (t) {
    if (typeof t == "string")
      return ll(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ll(t, e);
  }
}
function ll(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Vm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fc = function() {
}, uu = {}, Ed = {}, _d = null, Cd = {
  mark: fc,
  measure: fc
};
try {
  typeof window < "u" && (uu = window), typeof document < "u" && (Ed = document), typeof MutationObserver < "u" && (_d = MutationObserver), typeof performance < "u" && (Cd = performance);
} catch {
}
var Wm = uu.navigator || {}, dc = Wm.userAgent, pc = dc === void 0 ? "" : dc, gr = uu, ge = Ed, hc = _d, ha = Cd;
gr.document;
var Zt = !!ge.documentElement && !!ge.head && typeof ge.addEventListener == "function" && typeof ge.createElement == "function", kd = ~pc.indexOf("MSIE") || ~pc.indexOf("Trident/"), ma, ga, ya, va, ba, Kt = "___FONT_AWESOME___", ul = 16, Pd = "fa", Td = "svg-inline--fa", Ur = "data-fa-i2svg", cl = "data-fa-pseudo-element", qm = "data-fa-pseudo-element-pending", cu = "data-prefix", fu = "data-icon", mc = "fontawesome-i2svg", Gm = "async", Ym = ["HTML", "HEAD", "STYLE", "SCRIPT"], $d = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), me = "classic", be = "sharp", du = [me, be];
function Li(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[me];
    }
  });
}
var Si = Li((ma = {}, Ce(ma, me, {
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
}), Ce(ma, be, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ma)), Oi = Li((ga = {}, Ce(ga, me, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ce(ga, be, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), ga)), Ai = Li((ya = {}, Ce(ya, me, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ce(ya, be, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), ya)), Km = Li((va = {}, Ce(va, me, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ce(va, be, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), va)), Jm = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, Id = "fa-layers-text", Xm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Qm = Li((ba = {}, Ce(ba, me, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ce(ba, be, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), ba)), Dd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zm = Dd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), eg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Dr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ei = /* @__PURE__ */ new Set();
Object.keys(Oi[me]).map(Ei.add.bind(Ei));
Object.keys(Oi[be]).map(Ei.add.bind(Ei));
var tg = [].concat(du, Ni(Ei), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Dr.GROUP, Dr.SWAP_OPACITY, Dr.PRIMARY, Dr.SECONDARY]).concat(Dd.map(function(t) {
  return "".concat(t, "x");
})).concat(Zm.map(function(t) {
  return "w-".concat(t);
})), di = gr.FontAwesomeConfig || {};
function rg(t) {
  var e = ge.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function ng(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (ge && typeof ge.querySelector == "function") {
  var ig = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ig.forEach(function(t) {
    var e = lu(t, 2), r = e[0], n = e[1], i = ng(rg(r));
    i != null && (di[n] = i);
  });
}
var Rd = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Pd,
  replacementClass: Td,
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
di.familyPrefix && (di.cssPrefix = di.familyPrefix);
var xn = V(V({}, Rd), di);
xn.autoReplaceSvg || (xn.observeMutations = !1);
var W = {};
Object.keys(Rd).forEach(function(t) {
  Object.defineProperty(W, t, {
    enumerable: !0,
    set: function(r) {
      xn[t] = r, pi.forEach(function(n) {
        return n(W);
      });
    },
    get: function() {
      return xn[t];
    }
  });
});
Object.defineProperty(W, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    xn.cssPrefix = e, pi.forEach(function(r) {
      return r(W);
    });
  },
  get: function() {
    return xn.cssPrefix;
  }
});
gr.FontAwesomeConfig = W;
var pi = [];
function ag(t) {
  return pi.push(t), function() {
    pi.splice(pi.indexOf(t), 1);
  };
}
var ar = ul, Tt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function og(t) {
  if (!(!t || !Zt)) {
    var e = ge.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = ge.head.childNodes, n = null, i = r.length - 1; i > -1; i--) {
      var a = r[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
    }
    return ge.head.insertBefore(e, n), t;
  }
}
var sg = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _i() {
  for (var t = 12, e = ""; t-- > 0; )
    e += sg[Math.random() * 62 | 0];
  return e;
}
function Ln(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function pu(t) {
  return t.classList ? Ln(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function Nd(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function lg(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(Nd(t[r]), '" ');
  }, "").trim();
}
function Ao(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function hu(t) {
  return t.size !== Tt.size || t.x !== Tt.x || t.y !== Tt.y || t.rotate !== Tt.rotate || t.flipX || t.flipY;
}
function ug(t) {
  var e = t.transform, r = t.containerWidth, n = t.iconWidth, i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: c
  };
}
function cg(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? ul : r, i = t.height, a = i === void 0 ? ul : i, o = t.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && kd ? l += "translate(".concat(e.x / ar - n / 2, "em, ").concat(e.y / ar - a / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(e.x / ar, "em), calc(-50% + ").concat(e.y / ar, "em)) ") : l += "translate(".concat(e.x / ar, "em, ").concat(e.y / ar, "em) "), l += "scale(".concat(e.size / ar * (e.flipX ? -1 : 1), ", ").concat(e.size / ar * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var fg = `:root, :host {
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
function Ld() {
  var t = Pd, e = Td, r = W.cssPrefix, n = W.replacementClass, i = fg;
  if (r !== t || n !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
var gc = !1;
function Ps() {
  W.autoAddCss && !gc && (og(Ld()), gc = !0);
}
var dg = {
  mixout: function() {
    return {
      dom: {
        css: Ld,
        insertCss: Ps
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ps();
      },
      beforeI2svg: function() {
        Ps();
      }
    };
  }
}, Jt = gr || {};
Jt[Kt] || (Jt[Kt] = {});
Jt[Kt].styles || (Jt[Kt].styles = {});
Jt[Kt].hooks || (Jt[Kt].hooks = {});
Jt[Kt].shims || (Jt[Kt].shims = []);
var mt = Jt[Kt], Fd = [], pg = function t() {
  ge.removeEventListener("DOMContentLoaded", t), ro = 1, Fd.map(function(e) {
    return e();
  });
}, ro = !1;
Zt && (ro = (ge.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ge.readyState), ro || ge.addEventListener("DOMContentLoaded", pg));
function hg(t) {
  Zt && (ro ? setTimeout(t, 0) : Fd.push(t));
}
function Fi(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, i = t.children, a = i === void 0 ? [] : i;
  return typeof t == "string" ? Nd(t) : "<".concat(e, " ").concat(lg(n), ">").concat(a.map(Fi).join(""), "</").concat(e, ">");
}
function yc(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var mg = function(e, r) {
  return function(n, i, a, o) {
    return e.call(r, n, i, a, o);
  };
}, Ts = function(e, r, n, i) {
  var a = Object.keys(e), o = a.length, s = i !== void 0 ? mg(r, i) : r, l, c, f;
  for (n === void 0 ? (l = 1, f = e[a[0]]) : (l = 0, f = n); l < o; l++)
    c = a[l], f = s(f, e[c], c, e);
  return f;
};
function gg(t) {
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
function fl(t) {
  var e = gg(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function yg(t, e) {
  var r = t.length, n = t.charCodeAt(e), i;
  return n >= 55296 && n <= 56319 && r > e + 1 && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function vc(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], i = !!n.icon;
    return i ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function dl(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, i = n === void 0 ? !1 : n, a = vc(e);
  typeof mt.hooks.addPack == "function" && !i ? mt.hooks.addPack(t, vc(e)) : mt.styles[t] = V(V({}, mt.styles[t] || {}), a), t === "fas" && dl("fa", e);
}
var wa, xa, Sa, mn = mt.styles, vg = mt.shims, bg = (wa = {}, Ce(wa, me, Object.values(Ai[me])), Ce(wa, be, Object.values(Ai[be])), wa), mu = null, Md = {}, jd = {}, Bd = {}, zd = {}, Ud = {}, wg = (xa = {}, Ce(xa, me, Object.keys(Si[me])), Ce(xa, be, Object.keys(Si[be])), xa);
function xg(t) {
  return ~tg.indexOf(t);
}
function Sg(t, e) {
  var r = e.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === t && i !== "" && !xg(i) ? i : null;
}
var Vd = function() {
  var e = function(a) {
    return Ts(mn, function(o, s, l) {
      return o[l] = Ts(s, a, {}), o;
    }, {});
  };
  Md = e(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        i[l.toString(16)] = o;
      });
    }
    return i;
  }), jd = e(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        i[l] = o;
      });
    }
    return i;
  }), Ud = e(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(l) {
      i[l] = o;
    }), i;
  });
  var r = "far" in mn || W.autoFetchSvg, n = Ts(vg, function(i, a) {
    var o = a[0], s = a[1], l = a[2];
    return s === "far" && !r && (s = "fas"), typeof o == "string" && (i.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (i.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  Bd = n.names, zd = n.unicodes, mu = Eo(W.styleDefault, {
    family: W.familyDefault
  });
};
ag(function(t) {
  mu = Eo(t.styleDefault, {
    family: W.familyDefault
  });
});
Vd();
function gu(t, e) {
  return (Md[t] || {})[e];
}
function Og(t, e) {
  return (jd[t] || {})[e];
}
function Rr(t, e) {
  return (Ud[t] || {})[e];
}
function Hd(t) {
  return Bd[t] || {
    prefix: null,
    iconName: null
  };
}
function Ag(t) {
  var e = zd[t], r = gu("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function yr() {
  return mu;
}
var yu = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Eo(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? me : r, i = Si[n][t], a = Oi[n][t] || Oi[n][i], o = t in mt.styles ? t : null;
  return a || o || null;
}
var bc = (Sa = {}, Ce(Sa, me, Object.keys(Ai[me])), Ce(Sa, be, Object.keys(Ai[be])), Sa);
function _o(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, i = n === void 0 ? !1 : n, a = (e = {}, Ce(e, me, "".concat(W.cssPrefix, "-").concat(me)), Ce(e, be, "".concat(W.cssPrefix, "-").concat(be)), e), o = null, s = me;
  (t.includes(a[me]) || t.some(function(c) {
    return bc[me].includes(c);
  })) && (s = me), (t.includes(a[be]) || t.some(function(c) {
    return bc[be].includes(c);
  })) && (s = be);
  var l = t.reduce(function(c, f) {
    var d = Sg(W.cssPrefix, f);
    if (mn[f] ? (f = bg[s].includes(f) ? Km[s][f] : f, o = f, c.prefix = f) : wg[s].indexOf(f) > -1 ? (o = f, c.prefix = Eo(f, {
      family: s
    })) : d ? c.iconName = d : f !== W.replacementClass && f !== a[me] && f !== a[be] && c.rest.push(f), !i && c.prefix && c.iconName) {
      var g = o === "fa" ? Hd(c.iconName) : {}, S = Rr(c.prefix, c.iconName);
      g.prefix && (o = null), c.iconName = g.iconName || S || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !mn.far && mn.fas && !W.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, yu());
  return (t.includes("fa-brands") || t.includes("fab")) && (l.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === be && (mn.fass || W.autoFetchSvg) && (l.prefix = "fass", l.iconName = Rr(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = yr() || "fas"), l;
}
var Eg = /* @__PURE__ */ function() {
  function t() {
    Fm(this, t), this.definitions = {};
  }
  return Mm(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = V(V({}, r.definitions[s] || {}), o[s]), dl(s, o[s]);
        var l = Ai[me][s];
        l && dl(l, o[s]), Vd();
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
        var o = i[a], s = o.prefix, l = o.iconName, c = o.icon, f = c[2];
        r[s] || (r[s] = {}), f.length > 0 && f.forEach(function(d) {
          typeof d == "string" && (r[s][d] = c);
        }), r[s][l] = c;
      }), r;
    }
  }]), t;
}(), wc = [], gn = {}, vn = {}, _g = Object.keys(vn);
function Cg(t, e) {
  var r = e.mixoutsTo;
  return wc = t, gn = {}, Object.keys(vn).forEach(function(n) {
    _g.indexOf(n) === -1 && delete vn[n];
  }), wc.forEach(function(n) {
    var i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (r[o] = i[o]), to(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = i[o][s];
      });
    }), n.hooks) {
      var a = n.hooks();
      Object.keys(a).forEach(function(o) {
        gn[o] || (gn[o] = []), gn[o].push(a[o]);
      });
    }
    n.provides && n.provides(vn);
  }), r;
}
function pl(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  var a = gn[t] || [];
  return a.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function Vr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = gn[t] || [];
  i.forEach(function(a) {
    a.apply(null, r);
  });
}
function Xt() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return vn[t] ? vn[t].apply(null, e) : void 0;
}
function hl(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || yr();
  if (e)
    return e = Rr(r, e) || e, yc(Wd.definitions, r, e) || yc(mt.styles, r, e);
}
var Wd = new Eg(), kg = function() {
  W.autoReplaceSvg = !1, W.observeMutations = !1, Vr("noAuto");
}, Pg = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Zt ? (Vr("beforeI2svg", e), Xt("pseudoElements2svg", e), Xt("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    W.autoReplaceSvg === !1 && (W.autoReplaceSvg = !0), W.observeMutations = !0, hg(function() {
      $g({
        autoReplaceSvgRoot: r
      }), Vr("watch", e);
    });
  }
}, Tg = {
  icon: function(e) {
    if (e === null)
      return null;
    if (to(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Rr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Eo(e[0]);
      return {
        prefix: n,
        iconName: Rr(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(W.cssPrefix, "-")) > -1 || e.match(Jm))) {
      var i = _o(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || yr(),
        iconName: Rr(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof e == "string") {
      var a = yr();
      return {
        prefix: a,
        iconName: Rr(a, e) || e
      };
    }
  }
}, rt = {
  noAuto: kg,
  config: W,
  dom: Pg,
  parse: Tg,
  library: Wd,
  findIconDefinition: hl,
  toHtml: Fi
}, $g = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? ge : r;
  (Object.keys(mt.styles).length > 0 || W.autoFetchSvg) && Zt && W.autoReplaceSvg && rt.dom.i2svg({
    node: n
  });
};
function Co(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return Fi(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (Zt) {
        var n = ge.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Ig(t) {
  var e = t.children, r = t.main, n = t.mask, i = t.attributes, a = t.styles, o = t.transform;
  if (hu(o) && r.found && !n.found) {
    var s = r.width, l = r.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = Ao(V(V({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: e
  }];
}
function Dg(t) {
  var e = t.prefix, r = t.iconName, n = t.children, i = t.attributes, a = t.symbol, o = a === !0 ? "".concat(e, "-").concat(W.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: V(V({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function vu(t) {
  var e = t.icons, r = e.main, n = e.mask, i = t.prefix, a = t.iconName, o = t.transform, s = t.symbol, l = t.title, c = t.maskId, f = t.titleId, d = t.extra, g = t.watchable, S = g === void 0 ? !1 : g, m = n.found ? n : r, b = m.width, O = m.height, A = i === "fak", k = [W.replacementClass, a ? "".concat(W.cssPrefix, "-").concat(a) : ""].filter(function(M) {
    return d.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(d.classes).join(" "), C = {
    children: [],
    attributes: V(V({}, d.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: k,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(O)
    })
  }, _ = A && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(b / O * 16 * 0.0625, "em")
  } : {};
  S && (C.attributes[Ur] = ""), l && (C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(f || _i())
    },
    children: [l]
  }), delete C.attributes.title);
  var D = V(V({}, C), {}, {
    prefix: i,
    iconName: a,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: V(V({}, _), d.styles)
  }), $ = n.found && r.found ? Xt("generateAbstractMask", D) || {
    children: [],
    attributes: {}
  } : Xt("generateAbstractIcon", D) || {
    children: [],
    attributes: {}
  }, N = $.children, B = $.attributes;
  return D.children = N, D.attributes = B, s ? Dg(D) : Ig(D);
}
function xc(t) {
  var e = t.content, r = t.width, n = t.height, i = t.transform, a = t.title, o = t.extra, s = t.watchable, l = s === void 0 ? !1 : s, c = V(V(V({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (c[Ur] = "");
  var f = V({}, o.styles);
  hu(i) && (f.transform = cg({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var d = Ao(f);
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
function Rg(t) {
  var e = t.content, r = t.title, n = t.extra, i = V(V(V({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Ao(n.styles);
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
var $s = mt.styles;
function ml(t) {
  var e = t[0], r = t[1], n = t.slice(4), i = lu(n, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(W.cssPrefix, "-").concat(Dr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Dr.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(W.cssPrefix, "-").concat(Dr.PRIMARY),
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
var Ng = {
  found: !1,
  width: 512,
  height: 512
};
function Lg(t, e) {
  !$d && !W.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function gl(t, e) {
  var r = e;
  return e === "fa" && W.styleDefault !== null && (e = yr()), new Promise(function(n, i) {
    if (Xt("missingIconAbstract"), r === "fa") {
      var a = Hd(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && $s[e] && $s[e][t]) {
      var o = $s[e][t];
      return n(ml(o));
    }
    Lg(t, e), n(V(V({}, Ng), {}, {
      icon: W.showMissingIcons && t ? Xt("missingIconAbstract") || {} : {}
    }));
  });
}
var Sc = function() {
}, yl = W.measurePerformance && ha && ha.mark && ha.measure ? ha : {
  mark: Sc,
  measure: Sc
}, ci = 'FA "6.5.1"', Fg = function(e) {
  return yl.mark("".concat(ci, " ").concat(e, " begins")), function() {
    return qd(e);
  };
}, qd = function(e) {
  yl.mark("".concat(ci, " ").concat(e, " ends")), yl.measure("".concat(ci, " ").concat(e), "".concat(ci, " ").concat(e, " begins"), "".concat(ci, " ").concat(e, " ends"));
}, bu = {
  begin: Fg,
  end: qd
}, Ua = function() {
};
function Oc(t) {
  var e = t.getAttribute ? t.getAttribute(Ur) : null;
  return typeof e == "string";
}
function Mg(t) {
  var e = t.getAttribute ? t.getAttribute(cu) : null, r = t.getAttribute ? t.getAttribute(fu) : null;
  return e && r;
}
function jg(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(W.replacementClass);
}
function Bg() {
  if (W.autoReplaceSvg === !0)
    return Va.replace;
  var t = Va[W.autoReplaceSvg];
  return t || Va.replace;
}
function zg(t) {
  return ge.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ug(t) {
  return ge.createElement(t);
}
function Gd(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? zg : Ug : r;
  if (typeof t == "string")
    return ge.createTextNode(t);
  var i = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    i.setAttribute(o, t.attributes[o]);
  });
  var a = t.children || [];
  return a.forEach(function(o) {
    i.appendChild(Gd(o, {
      ceFn: n
    }));
  }), i;
}
function Vg(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var Va = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(i) {
        r.parentNode.insertBefore(Gd(i), r);
      }), r.getAttribute(Ur) === null && W.keepOriginalSource) {
        var n = ge.createComment(Vg(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~pu(r).indexOf(W.replacementClass))
      return Va.replace(e);
    var i = new RegExp("".concat(W.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var a = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === W.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", a.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return Fi(s);
    }).join(`
`);
    r.setAttribute(Ur, ""), r.innerHTML = o;
  }
};
function Ac(t) {
  t();
}
function Yd(t, e) {
  var r = typeof e == "function" ? e : Ua;
  if (t.length === 0)
    r();
  else {
    var n = Ac;
    W.mutateApproach === Gm && (n = gr.requestAnimationFrame || Ac), n(function() {
      var i = Bg(), a = bu.begin("mutate");
      t.map(i), a(), r();
    });
  }
}
var wu = !1;
function Kd() {
  wu = !0;
}
function vl() {
  wu = !1;
}
var no = null;
function Ec(t) {
  if (hc && W.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? Ua : e, n = t.nodeCallback, i = n === void 0 ? Ua : n, a = t.pseudoElementsCallback, o = a === void 0 ? Ua : a, s = t.observeMutationsRoot, l = s === void 0 ? ge : s;
    no = new hc(function(c) {
      if (!wu) {
        var f = yr();
        Ln(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Oc(d.addedNodes[0]) && (W.searchPseudoElements && o(d.target), r(d.target)), d.type === "attributes" && d.target.parentNode && W.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && Oc(d.target) && ~eg.indexOf(d.attributeName))
            if (d.attributeName === "class" && Mg(d.target)) {
              var g = _o(pu(d.target)), S = g.prefix, m = g.iconName;
              d.target.setAttribute(cu, S || f), m && d.target.setAttribute(fu, m);
            } else
              jg(d.target) && i(d.target);
        });
      }
    }), Zt && no.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Hg() {
  no && no.disconnect();
}
function Wg(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function qg(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", i = _o(pu(t));
  return i.prefix || (i.prefix = yr()), e && r && (i.prefix = e, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Og(i.prefix, t.innerText) || gu(i.prefix, fl(t.innerText))), !i.iconName && W.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
}
function Gg(t) {
  var e = Ln(t.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return W.autoA11y && (r ? e["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(n || _i()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function Yg() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Tt,
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
function _c(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = qg(t), n = r.iconName, i = r.prefix, a = r.rest, o = Gg(t), s = pl("parseNodeAttributes", {}, t), l = e.styleParser ? Wg(t) : [];
  return V({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: Tt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, s);
}
var Kg = mt.styles;
function Jd(t) {
  var e = W.autoReplaceSvg === "nest" ? _c(t, {
    styleParser: !1
  }) : _c(t);
  return ~e.extra.classes.indexOf(Id) ? Xt("generateLayersText", t, e) : Xt("generateSvgReplacementMutation", t, e);
}
var vr = /* @__PURE__ */ new Set();
du.map(function(t) {
  vr.add("fa-".concat(t));
});
Object.keys(Si[me]).map(vr.add.bind(vr));
Object.keys(Si[be]).map(vr.add.bind(vr));
vr = Ni(vr);
function Cc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Zt)
    return Promise.resolve();
  var r = ge.documentElement.classList, n = function(d) {
    return r.add("".concat(mc, "-").concat(d));
  }, i = function(d) {
    return r.remove("".concat(mc, "-").concat(d));
  }, a = W.autoFetchSvg ? vr : du.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(Kg));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(Id, ":not([").concat(Ur, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(Ur, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Ln(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  var l = bu.begin("onTree"), c = s.reduce(function(f, d) {
    try {
      var g = Jd(d);
      g && f.push(g);
    } catch (S) {
      $d || S.name === "MissingIcon" && console.error(S);
    }
    return f;
  }, []);
  return new Promise(function(f, d) {
    Promise.all(c).then(function(g) {
      Yd(g, function() {
        n("active"), n("complete"), i("pending"), typeof e == "function" && e(), l(), f();
      });
    }).catch(function(g) {
      l(), d(g);
    });
  });
}
function Jg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Jd(t).then(function(r) {
    r && Yd([r], e);
  });
}
function Xg(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : hl(e || {}), i = r.mask;
    return i && (i = (i || {}).icon ? i : hl(i || {})), t(n, V(V({}, r), {}, {
      mask: i
    }));
  };
}
var Qg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? Tt : n, a = r.symbol, o = a === void 0 ? !1 : a, s = r.mask, l = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, d = r.title, g = d === void 0 ? null : d, S = r.titleId, m = S === void 0 ? null : S, b = r.classes, O = b === void 0 ? [] : b, A = r.attributes, k = A === void 0 ? {} : A, C = r.styles, _ = C === void 0 ? {} : C;
  if (e) {
    var D = e.prefix, $ = e.iconName, N = e.icon;
    return Co(V({
      type: "icon"
    }, e), function() {
      return Vr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), W.autoA11y && (g ? k["aria-labelledby"] = "".concat(W.replacementClass, "-title-").concat(m || _i()) : (k["aria-hidden"] = "true", k.focusable = "false")), vu({
        icons: {
          main: ml(N),
          mask: l ? ml(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: D,
        iconName: $,
        transform: V(V({}, Tt), i),
        symbol: o,
        title: g,
        maskId: f,
        titleId: m,
        extra: {
          attributes: k,
          styles: _,
          classes: O
        }
      });
    });
  }
}, Zg = {
  mixout: function() {
    return {
      icon: Xg(Qg)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Cc, r.nodeCallback = Jg, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, i = n === void 0 ? ge : n, a = r.callback, o = a === void 0 ? function() {
      } : a;
      return Cc(i, o);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var i = n.iconName, a = n.title, o = n.titleId, s = n.prefix, l = n.transform, c = n.symbol, f = n.mask, d = n.maskId, g = n.extra;
      return new Promise(function(S, m) {
        Promise.all([gl(i, s), f.iconName ? gl(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(b) {
          var O = lu(b, 2), A = O[0], k = O[1];
          S([r, vu({
            icons: {
              main: A,
              mask: k
            },
            prefix: s,
            iconName: i,
            transform: l,
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
      var n = r.children, i = r.attributes, a = r.main, o = r.transform, s = r.styles, l = Ao(s);
      l.length > 0 && (i.style = l);
      var c;
      return hu(o) && (c = Xt("generateAbstractTransformGrouping", {
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
}, ey = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.classes, a = i === void 0 ? [] : i;
        return Co({
          type: "layer"
        }, function() {
          Vr("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var o = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(W.cssPrefix, "-layers")].concat(Ni(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, ty = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.title, a = i === void 0 ? null : i, o = n.classes, s = o === void 0 ? [] : o, l = n.attributes, c = l === void 0 ? {} : l, f = n.styles, d = f === void 0 ? {} : f;
        return Co({
          type: "counter",
          content: r
        }, function() {
          return Vr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Rg({
            content: r.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(W.cssPrefix, "-layers-counter")].concat(Ni(s))
            }
          });
        });
      }
    };
  }
}, ry = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transform, a = i === void 0 ? Tt : i, o = n.title, s = o === void 0 ? null : o, l = n.classes, c = l === void 0 ? [] : l, f = n.attributes, d = f === void 0 ? {} : f, g = n.styles, S = g === void 0 ? {} : g;
        return Co({
          type: "text",
          content: r
        }, function() {
          return Vr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), xc({
            content: r,
            transform: V(V({}, Tt), a),
            title: s,
            extra: {
              attributes: d,
              styles: S,
              classes: ["".concat(W.cssPrefix, "-layers-text")].concat(Ni(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var i = n.title, a = n.transform, o = n.extra, s = null, l = null;
      if (kd) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, l = f.height / c;
      }
      return W.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, xc({
        content: r.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: i,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, ny = new RegExp('"', "ug"), kc = [1105920, 1112319];
function iy(t) {
  var e = t.replace(ny, ""), r = yg(e, 0), n = r >= kc[0] && r <= kc[1], i = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: fl(i ? e[0] : e),
    isSecondary: n || i
  };
}
function Pc(t, e) {
  var r = "".concat(qm).concat(e.replace(":", "-"));
  return new Promise(function(n, i) {
    if (t.getAttribute(r) !== null)
      return n();
    var a = Ln(t.children), o = a.filter(function(N) {
      return N.getAttribute(cl) === e;
    })[0], s = gr.getComputedStyle(t, e), l = s.getPropertyValue("font-family").match(Xm), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), n();
    if (l && f !== "none" && f !== "") {
      var d = s.getPropertyValue("content"), g = ~["Sharp"].indexOf(l[2]) ? be : me, S = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Oi[g][l[2].toLowerCase()] : Qm[g][c], m = iy(d), b = m.value, O = m.isSecondary, A = l[0].startsWith("FontAwesome"), k = gu(S, b), C = k;
      if (A) {
        var _ = Ag(b);
        _.iconName && _.prefix && (k = _.iconName, S = _.prefix);
      }
      if (k && !O && (!o || o.getAttribute(cu) !== S || o.getAttribute(fu) !== C)) {
        t.setAttribute(r, C), o && t.removeChild(o);
        var D = Yg(), $ = D.extra;
        $.attributes[cl] = e, gl(k, S).then(function(N) {
          var B = vu(V(V({}, D), {}, {
            icons: {
              main: N,
              mask: yu()
            },
            prefix: S,
            iconName: C,
            extra: $,
            watchable: !0
          })), M = ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(M, t.firstChild) : t.appendChild(M), M.outerHTML = B.map(function(P) {
            return Fi(P);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function ay(t) {
  return Promise.all([Pc(t, "::before"), Pc(t, "::after")]);
}
function oy(t) {
  return t.parentNode !== document.head && !~Ym.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(cl) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Tc(t) {
  if (Zt)
    return new Promise(function(e, r) {
      var n = Ln(t.querySelectorAll("*")).filter(oy).map(ay), i = bu.begin("searchPseudoElements");
      Kd(), Promise.all(n).then(function() {
        i(), vl(), e();
      }).catch(function() {
        i(), vl(), r();
      });
    });
}
var sy = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Tc, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, i = n === void 0 ? ge : n;
      W.searchPseudoElements && Tc(i);
    };
  }
}, $c = !1, ly = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Kd(), $c = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Ec(pl("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Hg();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        $c ? vl() : Ec(pl("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Ic = function(e) {
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
}, uy = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return Ic(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-transform");
        return i && (r.transform = Ic(i)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, i = r.transform, a = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), f = "rotate(".concat(i.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(c, " ").concat(f)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, S = {
        outer: s,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: V({}, S.outer),
        children: [{
          tag: "g",
          attributes: V({}, S.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: V(V({}, n.icon.attributes), S.path)
          }]
        }]
      };
    };
  }
}, Is = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Dc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function cy(t) {
  return t.tag === "g" ? t.children : [t];
}
var fy = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-mask"), a = i ? _o(i.split(" ").map(function(o) {
          return o.trim();
        })) : yu();
        return a.prefix || (a.prefix = yr()), r.mask = a, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, i = r.attributes, a = r.main, o = r.mask, s = r.maskId, l = r.transform, c = a.width, f = a.icon, d = o.width, g = o.icon, S = ug({
        transform: l,
        containerWidth: d,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: V(V({}, Is), {}, {
          fill: "white"
        })
      }, b = f.children ? {
        children: f.children.map(Dc)
      } : {}, O = {
        tag: "g",
        attributes: V({}, S.inner),
        children: [Dc(V({
          tag: f.tag,
          attributes: V(V({}, f.attributes), S.path)
        }, b))]
      }, A = {
        tag: "g",
        attributes: V({}, S.outer),
        children: [O]
      }, k = "mask-".concat(s || _i()), C = "clip-".concat(s || _i()), _ = {
        tag: "mask",
        attributes: V(V({}, Is), {}, {
          id: k,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, A]
      }, D = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: C
          },
          children: cy(g)
        }, _]
      };
      return n.push(D, {
        tag: "rect",
        attributes: V({
          fill: "currentColor",
          "clip-path": "url(#".concat(C, ")"),
          mask: "url(#".concat(k, ")")
        }, Is)
      }), {
        children: n,
        attributes: i
      };
    };
  }
}, dy = {
  provides: function(e) {
    var r = !1;
    gr.matchMedia && (r = gr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: V(V({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = V(V({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: V(V({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: V(V({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: V(V({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: V(V({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: V(V({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: V(V({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: V(V({}, o), {}, {
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
}, py = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var i = n.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return r.symbol = a, r;
      }
    };
  }
}, hy = [dg, Zg, ey, ty, ry, sy, ly, uy, fy, dy, py];
Cg(hy, {
  mixoutsTo: rt
});
rt.noAuto;
var Xd = rt.config, Mi = rt.library;
rt.dom;
var io = rt.parse;
rt.findIconDefinition;
rt.toHtml;
var my = rt.icon;
rt.layer;
var gy = rt.text;
rt.counter;
function Rc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rc(Object(r), !0).forEach(function(n) {
      Ge(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Rc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ao(t) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ao(t);
}
function Ge(t, e, r) {
  return e = Ay(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function yy(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function vy(t, e) {
  if (t == null)
    return {};
  var r = yy(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function bl(t) {
  return by(t) || wy(t) || xy(t) || Sy();
}
function by(t) {
  if (Array.isArray(t))
    return wl(t);
}
function wy(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function xy(t, e) {
  if (t) {
    if (typeof t == "string")
      return wl(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wl(t, e);
  }
}
function wl(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Sy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oy(t, e) {
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
function Ay(t) {
  var e = Oy(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Ey = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qd = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(A, k, C) {
      if (!c(k) || d(k) || g(k) || S(k) || l(k))
        return k;
      var _, D = 0, $ = 0;
      if (f(k))
        for (_ = [], $ = k.length; D < $; D++)
          _.push(r(A, k[D], C));
      else {
        _ = {};
        for (var N in k)
          Object.prototype.hasOwnProperty.call(k, N) && (_[A(N, C)] = r(A, k[N], C));
      }
      return _;
    }, n = function(A, k) {
      k = k || {};
      var C = k.separator || "_", _ = k.split || /(?=[A-Z])/;
      return A.split(_).join(C);
    }, i = function(A) {
      return m(A) ? A : (A = A.replace(/[\-_\s]+(.)?/g, function(k, C) {
        return C ? C.toUpperCase() : "";
      }), A.substr(0, 1).toLowerCase() + A.substr(1));
    }, a = function(A) {
      var k = i(A);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, o = function(A, k) {
      return n(A, k).toLowerCase();
    }, s = Object.prototype.toString, l = function(A) {
      return typeof A == "function";
    }, c = function(A) {
      return A === Object(A);
    }, f = function(A) {
      return s.call(A) == "[object Array]";
    }, d = function(A) {
      return s.call(A) == "[object Date]";
    }, g = function(A) {
      return s.call(A) == "[object RegExp]";
    }, S = function(A) {
      return s.call(A) == "[object Boolean]";
    }, m = function(A) {
      return A = A - 0, A === A;
    }, b = function(A, k) {
      var C = k && "process" in k ? k.process : k;
      return typeof C != "function" ? A : function(_, D) {
        return C(_, A, D);
      };
    }, O = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(A, k) {
        return r(b(i, k), A);
      },
      decamelizeKeys: function(A, k) {
        return r(b(o, k), A, k);
      },
      pascalizeKeys: function(A, k) {
        return r(b(a, k), A);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = O : e.humps = O;
  })(Ey);
})(Qd);
var _y = Qd.exports, Cy = ["class", "style"];
function ky(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), i = _y.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return e[i] = a, e;
  }, {});
}
function Py(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(l) {
    return xu(l);
  }), i = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        l.class = Py(f);
        break;
      case "style":
        l.style = ky(f);
        break;
      default:
        l.attrs[c] = f;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var a = r.style, o = a === void 0 ? {} : a, s = vy(r, Cy);
  return pr(t.tag, ht(ht(ht({}, e), {}, {
    class: i.class,
    style: ht(ht({}, i.style), o)
  }, i.attrs), s), n);
}
var Zd = !1;
try {
  Zd = process.env.NODE_ENV === "production";
} catch {
}
function Ty() {
  if (!Zd && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function hi(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Ge({}, t, e) : {};
}
function $y(t) {
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
  }, Ge(e, "fa-".concat(t.size), t.size !== null), Ge(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), Ge(e, "fa-pull-".concat(t.pull), t.pull !== null), Ge(e, "fa-swap-opacity", t.swapOpacity), Ge(e, "fa-bounce", t.bounce), Ge(e, "fa-shake", t.shake), Ge(e, "fa-beat", t.beat), Ge(e, "fa-fade", t.fade), Ge(e, "fa-beat-fade", t.beatFade), Ge(e, "fa-flash", t.flash), Ge(e, "fa-spin-pulse", t.spinPulse), Ge(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Nc(t) {
  if (t && ao(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (io.icon)
    return io.icon(t);
  if (t === null)
    return null;
  if (ao(t) === "object" && t.prefix && t.iconName)
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
var mr = qr({
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
    var n = r.attrs, i = le(function() {
      return Nc(e.icon);
    }), a = le(function() {
      return hi("classes", $y(e));
    }), o = le(function() {
      return hi("transform", typeof e.transform == "string" ? io.transform(e.transform) : e.transform);
    }), s = le(function() {
      return hi("mask", Nc(e.mask));
    }), l = le(function() {
      return my(i.value, ht(ht(ht(ht({}, a.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Lr(l, function(f) {
      if (!f)
        return Ty("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var c = le(function() {
      return l.value ? xu(l.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
qr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, i = Xd.familyPrefix, a = le(function() {
      return ["".concat(i, "-layers")].concat(bl(e.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return pr("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
qr({
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
    var n = r.attrs, i = Xd.familyPrefix, a = le(function() {
      return hi("classes", [].concat(bl(e.counter ? ["".concat(i, "-layers-counter")] : []), bl(e.position ? ["".concat(i, "-layers-").concat(e.position)] : [])));
    }), o = le(function() {
      return hi("transform", typeof e.transform == "string" ? io.transform(e.transform) : e.transform);
    }), s = le(function() {
      var c = gy(e.value.toString(), ht(ht({}, o.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = le(function() {
      return xu(s.value, {}, n);
    });
    return function() {
      return l.value;
    };
  }
});
var Iy = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, xl = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Dy = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, Ry = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Ny = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Ly = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, Fy = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, My = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
}, Lc = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, jy = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, ep = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const Gr = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, By = { class: "relative flex w-full max-w-full items-stretch" }, zy = {
  key: 0,
  class: "flex items-center"
}, Uy = {
  key: 1,
  class: "mr-1"
}, Vy = ["id", "disabled", "required", "name"], Hy = { key: 5 }, Wy = ["required", "disabled", "name"], qy = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, Gy = ["href"], Yy = {
  __name: "Input",
  props: /* @__PURE__ */ Am({
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
  setup(t, { emit: e }) {
    Mi.add(ep, Ry, jy);
    const r = t;
    function n(l) {
      let c = [];
      return l.split("_").join(" ").split(" ").map(function(f) {
        c.push(f[0].toUpperCase() + f.slice(1));
      }), c.join(" ");
    }
    const i = e, a = ce(!1), o = Em(t, "modelValue"), s = ce();
    return st(() => {
      a.value = !r.form, s.value = a.value ? o.value : r.form[r.field];
    }), Lr(
      () => s.value,
      (l, c) => {
        l !== c && (a.value ? o.value = l : r.form[r.field] = l, i("update:modelValue", l));
      }
    ), Lr(
      () => r.form,
      (l) => {
        s.value = a.value ? o.value : l[r.field];
      }
    ), Lr(
      () => o.value,
      (l) => {
        s.value = l;
      }
    ), (l, c) => {
      var f, d, g, S, m, b, O, A;
      return E(), I("div", {
        class: Z(t.noLabel ? "mb-2" : "mb-4")
      }, [
        t.noLabel ? J("", !0) : (E(), se(q(Su), {
          key: 0,
          customClass: t.labelCustomClass,
          for: t.field,
          value: t.label ? t.label : t.field ? n(t.field) : "",
          sublabel: t.sublabel,
          required: t.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        L("div", By, [
          t.type === "switch" || t.type === "checkbox" ? (E(), I("label", zy, [
            (f = l.$slots) != null && f.leftDescription ? K(l.$slots, "leftDescription", { key: 0 }, void 0, !0) : t.leftDescription ? (E(), I("span", Uy, X(t.leftDescription ? t.leftDescription : "Disable"), 1)) : J("", !0),
            Xe(L("input", {
              id: t.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": c[0] || (c[0] = (k) => s.value = k),
              disabled: r.disabled,
              required: r.required,
              name: t.name ?? t.field
            }, null, 8, Vy), [
              [Od, s.value]
            ]),
            t.type === "switch" ? (E(), I("div", {
              key: 2,
              tabindex: "0",
              class: Z(["toggle-switch focusable !ml-0", {
                checked: s.value,
                disabled: r.disabled
              }])
            }, null, 2)) : (E(), I("div", {
              key: 3,
              tabindex: "0",
              class: Z(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": r.disabled,
                [t.checkboxCustomClass]: t.checkboxCustomClass
              }])
            }, [
              we(Fr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: xe(() => [
                  r.form[t.field] ? (E(), se(q(mr), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (E(), se(q(mr), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (d = l.$slots) != null && d.rightDescription ? K(l.$slots, "rightDescription", { key: 4 }, void 0, !0) : t.rightDescription ? (E(), I("span", Hy, X(t.rightDescription), 1)) : J("", !0)
          ])) : t.type === "select" ? Xe((E(), I("select", {
            key: 1,
            "onUpdate:modelValue": c[1] || (c[1] = (k) => s.value = k),
            required: r.required,
            disabled: r.disabled,
            name: t.name ?? t.field,
            class: "focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
          }, [
            K(l.$slots, "default", {}, void 0, !0)
          ], 8, Wy)), [
            [_m, s.value]
          ]) : (E(), I(de, { key: 2 }, [
            t.addon ? (E(), I("span", qy, X(t.addon), 1)) : J("", !0),
            we(q(tv), {
              id: t.field,
              type: t.type,
              class: Z(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "!rounded-l-none": t.addon,
                "!rounded-r-none": !!t.submitBtn || t.whatsApp || ((g = l.$slots) == null ? void 0 : g.submit),
                [t.inputCustomClass]: !!t.inputCustomClass
              }]),
              modelValue: s.value,
              "onUpdate:modelValue": c[2] || (c[2] = (k) => s.value = k),
              required: r.required,
              disabled: r.disabled,
              autocomplete: t.field,
              min: r.min,
              max: r.max,
              step: r.step,
              placeholder: r.placeholder,
              autofocus: r.autofocus,
              pattern: r.pattern,
              name: t.name ?? t.field
            }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
            t.form ? (E(), I(de, { key: 1 }, [
              t.submitBtn ? (E(), se(q(Lf), {
                key: 0,
                form: t.form,
                class: Z(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: `submit-button-${t.field}`
              }, {
                default: xe(() => [
                  ve(X(t.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : J("", !0),
              (S = l.$slots) != null && S.submit ? (E(), se(q(Lf), {
                key: 1,
                form: t.form,
                class: Z(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: "button-input"
              }, {
                default: xe(() => [
                  K(l.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : J("", !0)
            ], 64)) : J("", !0),
            t.whatsApp ? (E(), I("a", {
              key: 2,
              class: Z(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", t.buttonCustomClass]),
              href: t.whatsApp,
              target: "_blank"
            }, [
              we(q(mr), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, Gy)) : J("", !0)
          ], 64))
        ]),
        t.error || (b = (m = t.form) == null ? void 0 : m.errors) != null && b[t.field] ? (E(), se(q(ji), {
          key: 1,
          message: t.error ? t.error : (A = (O = t.form) == null ? void 0 : O.errors) == null ? void 0 : A[t.field],
          class: "mt-2"
        }, null, 8, ["message"])) : J("", !0)
      ], 2);
    };
  }
}, pC = /* @__PURE__ */ Gr(Yy, [["__scopeId", "data-v-043ab6a5"]]), Ky = { class: "text-sm text-red-600" }, ji = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => Xe((E(), I("div", null, [
      L("p", Ky, X(t.message), 1)
    ], 512)), [
      [hr, t.message]
    ]);
  }
}, Jy = { key: 0 }, Xy = { key: 1 }, Qy = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Zy = {
  key: 3,
  class: "ml-1 text-red-500"
}, Su = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(t) {
    return (e, r) => (E(), I("label", {
      class: Z(["mb-1 block text-sm font-medium text-gray-700", t.customClass])
    }, [
      t.value ? (E(), I("span", Jy, X(t.value), 1)) : (E(), I("span", Xy, [
        K(e.$slots, "default")
      ])),
      t.sublabel ? (E(), I("span", Qy, X(t.sublabel), 1)) : J("", !0),
      t.required ? (E(), I("span", Zy, "*")) : J("", !0)
    ], 2));
  }
}, ev = ["value"], tv = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = ce(null);
    return st(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, i) => (E(), I("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, ev));
  }
}, rv = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, nv = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], hC = {
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
    return (n, i) => (E(), I("div", null, [
      t.noLabel ? J("", !0) : (E(), se(q(Su), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field)
      }, null, 8, ["for", "value"])),
      L("div", rv, [
        Xe(L("textarea", {
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
        }, null, 40, nv), [
          [Cm, e.form[t.field]]
        ])
      ]),
      we(q(ji), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var iv = Object.defineProperty, av = Object.defineProperties, ov = Object.getOwnPropertyDescriptors, Fc = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, lv = Object.prototype.propertyIsEnumerable, Mc = (t, e, r) => e in t ? iv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, un = (t, e) => {
  for (var r in e || (e = {}))
    sv.call(e, r) && Mc(t, r, e[r]);
  if (Fc)
    for (var r of Fc(e))
      lv.call(e, r) && Mc(t, r, e[r]);
  return t;
}, jc = (t, e) => av(t, ov(e));
const uv = {
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
}, cv = {
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
}, fv = {
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
}, Ou = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, dv = {}, pv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, hv = /* @__PURE__ */ L("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), mv = [
  hv
];
function gv(t, e) {
  return E(), I("svg", pv, mv);
}
const yv = /* @__PURE__ */ Ou(dv, [["render", gv]]), vv = {}, bv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, wv = /* @__PURE__ */ L("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), xv = [
  wv
];
function Sv(t, e) {
  return E(), I("svg", bv, xv);
}
const Ov = /* @__PURE__ */ Ou(vv, [["render", Sv]]), Bc = {
  Deselect: yv,
  OpenIndicator: Ov
}, Av = {
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
function Ev(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let _v = 0;
function Cv() {
  return ++_v;
}
const kv = {
  components: un({}, Bc),
  directives: { appendToBody: Av },
  mixins: [uv, cv, fv],
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
          return t.hasOwnProperty("id") ? t.id : Ev(t);
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
      default: () => Cv()
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
          attributes: un({
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
        header: jc(un({}, t), { deselect: this.deselect }),
        footer: jc(un({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return un(un({}, Bc), this.components);
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
}, Pv = ["dir"], Tv = ["id", "aria-expanded", "aria-owns"], $v = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Iv = ["disabled", "title", "aria-label", "onClick"], Dv = {
  ref: "actions",
  class: "vs__actions"
}, Rv = ["disabled"], Nv = { class: "vs__spinner" }, Lv = ["id"], Fv = ["id", "aria-selected", "onMouseover", "onClick"], Mv = {
  key: 0,
  class: "vs__no-options"
}, jv = /* @__PURE__ */ ve(" Sorry, no matching options. "), Bv = ["id"];
function zv(t, e, r, n, i, a) {
  const o = km("append-to-body");
  return E(), I("div", {
    dir: r.dir,
    class: Z(["v-select", a.stateClasses])
  }, [
    K(t.$slots, "header", at(dt(a.scope.header))),
    L("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => a.toggleDropdown(s))
    }, [
      L("div", $v, [
        (E(!0), I(de, null, bt(a.selectedValue, (s, l) => K(t.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(s),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (E(), I("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            K(t.$slots, "selected-option", at(dt(a.normalizeOptionForSlot(s))), () => [
              ve(X(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (E(), I("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => i.deselectButtons[l] = c,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(s)}`,
              "aria-label": `Deselect ${r.getOptionLabel(s)}`,
              onClick: (c) => a.deselect(s)
            }, [
              (E(), se(ks(a.childComponents.Deselect)))
            ], 8, Iv)) : J("", !0)
          ]))
        ])), 256)),
        K(t.$slots, "search", at(dt(a.scope.search)), () => [
          L("input", xi({ class: "vs__search" }, a.scope.search.attributes, Pm(a.scope.search.events)), null, 16)
        ])
      ], 512),
      L("div", Dv, [
        Xe(L("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => a.clearSelection && a.clearSelection(...s))
        }, [
          (E(), se(ks(a.childComponents.Deselect)))
        ], 8, Rv), [
          [hr, a.showClearButton]
        ]),
        K(t.$slots, "open-indicator", at(dt(a.scope.openIndicator)), () => [
          r.noDrop ? J("", !0) : (E(), se(ks(a.childComponents.OpenIndicator), at(xi({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        K(t.$slots, "spinner", at(dt(a.scope.spinner)), () => [
          Xe(L("div", Nv, "Loading...", 512), [
            [hr, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Tv),
    we(Fr, { name: r.transition }, {
      default: xe(() => [
        a.dropdownOpen ? Xe((E(), I("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = fr((...s) => a.onMousedown && a.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => a.onMouseUp && a.onMouseUp(...s))
        }, [
          K(t.$slots, "list-header", at(dt(a.scope.listHeader))),
          (E(!0), I(de, null, bt(a.filteredOptions, (s, l) => (E(), I("li", {
            id: `vs${r.uid}__option-${l}`,
            key: r.getOptionKey(s),
            role: "option",
            class: Z(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(s) && l === t.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(s),
              "vs__dropdown-option--highlight": l === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": l === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = l : null,
            onClick: fr((c) => r.selectable(s) ? a.select(s) : null, ["prevent", "stop"])
          }, [
            K(t.$slots, "option", at(dt(a.normalizeOptionForSlot(s))), () => [
              ve(X(r.getOptionLabel(s)), 1)
            ])
          ], 42, Fv))), 128)),
          a.filteredOptions.length === 0 ? (E(), I("li", Mv, [
            K(t.$slots, "no-options", at(dt(a.scope.noOptions)), () => [
              jv
            ])
          ])) : J("", !0),
          K(t.$slots, "list-footer", at(dt(a.scope.listFooter)))
        ], 40, Lv)), [
          [o]
        ]) : (E(), I("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Bv))
      ]),
      _: 3
    }, 8, ["name"]),
    K(t.$slots, "footer", at(dt(a.scope.footer)))
  ], 10, Pv);
}
const Uv = /* @__PURE__ */ Ou(kv, [["render", zv]]);
const mC = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return Mi.add(ep), (e, r) => (E(), se(q(Uv), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Ht = {
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
function Vv(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const tp = {
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
      default: (t, e) => t.match(Vv(e))
    }
  }
}, Hv = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Wv = {
  name: "ModelSelect",
  mixins: [tp],
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
      Ht.openOptions(this);
    },
    blurInput() {
      Ht.blurInput(this);
    },
    closeOptions() {
      Ht.closeOptions(this);
    },
    prevItem() {
      Ht.prevItem(this);
    },
    nextItem() {
      Ht.nextItem(this);
    },
    enterItem() {
      Ht.enterItem(this);
    },
    pointerSet(t) {
      Ht.pointerSet(this, t);
    },
    pointerAdjust() {
      Ht.pointerAdjust(this);
    },
    mousedownItem() {
      Ht.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, qv = /* @__PURE__ */ L("i", { class: "dropdown icon" }, null, -1), Gv = ["disabled", "tabindex", "id", "name", "value"], Yv = ["data-vss-custom-attr"], Kv = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Jv(t, e, r, n, i, a) {
  return E(), I("div", {
    class: Z(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => a.openOptions && a.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => a.openOptions && a.openOptions(...o))
  }, [
    qv,
    L("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: i.searchText,
      onInput: e[0] || (e[0] = (o) => i.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = fr((...o) => a.openOptions && a.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = ln((...o) => a.closeOptions && a.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = ln(fr((...o) => a.enterItem && a.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => a.blurInput && a.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = ln((...o) => a.prevItem && a.prevItem(...o), ["up"])),
        e[5] || (e[5] = ln((...o) => a.nextItem && a.nextItem(...o), ["down"])),
        e[6] || (e[6] = ln(fr(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = ln((...o) => a.deleteTextOrItem && a.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, Gv),
    L("div", {
      class: Z(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, X(a.inputText), 11, Yv),
    L("div", {
      class: Z(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = fr(() => {
      }, ["prevent"])),
      style: za(a.menuStyle),
      tabindex: "-1"
    }, [
      (E(!0), I(de, null, bt(a.filteredOptions, (o, s) => (E(), I("div", {
        key: s,
        class: Z(["item", { selected: o.selected || i.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": a.customAttrs[s] ? a.customAttrs[s] : "",
        onClick: fr((l) => a.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...l) => a.mousedownItem && a.mousedownItem(...l)),
        onMouseenter: (l) => a.pointerSet(s)
      }, [
        K(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          ve(X(o.text), 1)
        ])
      ], 42, Kv))), 128))
    ], 38)
  ], 34);
}
const zc = /* @__PURE__ */ Hv(Wv, [["render", Jv]]), Uc = {
  name: "ModelListSelect",
  mixins: [tp],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return pr(zc, {
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
    ModelSelect: zc
  }
};
const Xv = {
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
    return (i, a) => (E(), I("div", null, [
      !t.noLabel && (t.label || t.field) ? (E(), se(q(Su), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field)
      }, null, 8, ["for", "value"])) : J("", !0),
      t.noForm ? (E(), se(q(Uc), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled"])) : (E(), I(de, { key: 2 }, [
        we(q(Uc), {
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
        we(q(ji), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Qv = /* @__PURE__ */ Gr(Xv, [["__scopeId", "data-v-cebb574a"]]);
function rp(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Zv } = Object.prototype, { getPrototypeOf: Au } = Object, ko = ((t) => (e) => {
  const r = Zv.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Rt = (t) => (t = t.toLowerCase(), (e) => ko(e) === t), Po = (t) => (e) => typeof e === t, { isArray: Fn } = Array, Ci = Po("undefined");
function eb(t) {
  return t !== null && !Ci(t) && t.constructor !== null && !Ci(t.constructor) && ot(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const np = Rt("ArrayBuffer");
function tb(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && np(t.buffer), e;
}
const rb = Po("string"), ot = Po("function"), ip = Po("number"), To = (t) => t !== null && typeof t == "object", nb = (t) => t === !0 || t === !1, Ha = (t) => {
  if (ko(t) !== "object")
    return !1;
  const e = Au(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ib = Rt("Date"), ab = Rt("File"), ob = Rt("Blob"), sb = Rt("FileList"), lb = (t) => To(t) && ot(t.pipe), ub = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ot(t.append) && ((e = ko(t)) === "formdata" || // detect form-data instance
  e === "object" && ot(t.toString) && t.toString() === "[object FormData]"));
}, cb = Rt("URLSearchParams"), fb = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bi(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Fn(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function ap(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const op = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), sp = (t) => !Ci(t) && t !== op;
function Sl() {
  const { caseless: t } = sp(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && ap(e, i) || i;
    Ha(e[a]) && Ha(n) ? e[a] = Sl(e[a], n) : Ha(n) ? e[a] = Sl({}, n) : Fn(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Bi(arguments[n], r);
  return e;
}
const db = (t, e, r, { allOwnKeys: n } = {}) => (Bi(e, (i, a) => {
  r && ot(i) ? t[a] = rp(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), pb = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), hb = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, mb = (t, e, r, n) => {
  let i, a, o;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Au(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, gb = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, yb = (t) => {
  if (!t)
    return null;
  if (Fn(t))
    return t;
  let e = t.length;
  if (!ip(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, vb = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Au(Uint8Array)), bb = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, wb = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, xb = Rt("HTMLFormElement"), Sb = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), Vc = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Ob = Rt("RegExp"), lp = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Bi(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, Ab = (t) => {
  lp(t, (e, r) => {
    if (ot(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (ot(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Eb = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Fn(t) ? n(t) : n(String(t).split(e)), r;
}, _b = () => {
}, Cb = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Ds = "abcdefghijklmnopqrstuvwxyz", Hc = "0123456789", up = {
  DIGIT: Hc,
  ALPHA: Ds,
  ALPHA_DIGIT: Ds + Ds.toUpperCase() + Hc
}, kb = (t = 16, e = up.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Pb(t) {
  return !!(t && ot(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Tb = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (To(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = Fn(n) ? [] : {};
        return Bi(n, (o, s) => {
          const l = r(o, i + 1);
          !Ci(l) && (a[s] = l);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, $b = Rt("AsyncFunction"), Ib = (t) => t && (To(t) || ot(t)) && ot(t.then) && ot(t.catch), R = {
  isArray: Fn,
  isArrayBuffer: np,
  isBuffer: eb,
  isFormData: ub,
  isArrayBufferView: tb,
  isString: rb,
  isNumber: ip,
  isBoolean: nb,
  isObject: To,
  isPlainObject: Ha,
  isUndefined: Ci,
  isDate: ib,
  isFile: ab,
  isBlob: ob,
  isRegExp: Ob,
  isFunction: ot,
  isStream: lb,
  isURLSearchParams: cb,
  isTypedArray: vb,
  isFileList: sb,
  forEach: Bi,
  merge: Sl,
  extend: db,
  trim: fb,
  stripBOM: pb,
  inherits: hb,
  toFlatObject: mb,
  kindOf: ko,
  kindOfTest: Rt,
  endsWith: gb,
  toArray: yb,
  forEachEntry: bb,
  matchAll: wb,
  isHTMLForm: xb,
  hasOwnProperty: Vc,
  hasOwnProp: Vc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lp,
  freezeMethods: Ab,
  toObjectSet: Eb,
  toCamelCase: Sb,
  noop: _b,
  toFiniteNumber: Cb,
  findKey: ap,
  global: op,
  isContextDefined: sp,
  ALPHABET: up,
  generateString: kb,
  isSpecCompliantForm: Pb,
  toJSONObject: Tb,
  isAsyncFn: $b,
  isThenable: Ib
};
function ae(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
R.inherits(ae, Error, {
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
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const cp = ae.prototype, fp = {};
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
  fp[t] = { value: t };
});
Object.defineProperties(ae, fp);
Object.defineProperty(cp, "isAxiosError", { value: !0 });
ae.from = (t, e, r, n, i, a) => {
  const o = Object.create(cp);
  return R.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ae.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Db = null;
function Ol(t) {
  return R.isPlainObject(t) || R.isArray(t);
}
function dp(t) {
  return R.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Wc(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = dp(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Rb(t) {
  return R.isArray(t) && !t.some(Ol);
}
const Nb = R.toFlatObject(R, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function $o(t, e, r) {
  if (!R.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = R.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, O) {
    return !R.isUndefined(O[b]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(e);
  if (!R.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (R.isDate(m))
      return m.toISOString();
    if (!l && R.isBlob(m))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(m) || R.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, b, O) {
    let A = m;
    if (m && !O && typeof m == "object") {
      if (R.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), m = JSON.stringify(m);
      else if (R.isArray(m) && Rb(m) || (R.isFileList(m) || R.endsWith(b, "[]")) && (A = R.toArray(m)))
        return b = dp(b), A.forEach(function(C, _) {
          !(R.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Wc([b], _, a) : o === null ? b : b + "[]",
            c(C)
          );
        }), !1;
    }
    return Ol(m) ? !0 : (e.append(Wc(O, b, a), c(m)), !1);
  }
  const d = [], g = Object.assign(Nb, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Ol
  });
  function S(m, b) {
    if (!R.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      d.push(m), R.forEach(m, function(A, k) {
        (!(R.isUndefined(A) || A === null) && i.call(
          e,
          A,
          R.isString(k) ? k.trim() : k,
          b,
          g
        )) === !0 && S(A, b ? b.concat(k) : [k]);
      }), d.pop();
    }
  }
  if (!R.isObject(t))
    throw new TypeError("data must be an object");
  return S(t), e;
}
function qc(t) {
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
function Eu(t, e) {
  this._pairs = [], t && $o(t, this, e);
}
const pp = Eu.prototype;
pp.append = function(e, r) {
  this._pairs.push([e, r]);
};
pp.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, qc);
  } : qc;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Lb(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function hp(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Lb, i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = R.isURLSearchParams(e) ? e.toString() : new Eu(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Fb {
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
    R.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Gc = Fb, mp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mb = typeof URLSearchParams < "u" ? URLSearchParams : Eu, jb = typeof FormData < "u" ? FormData : null, Bb = typeof Blob < "u" ? Blob : null, zb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Mb,
    FormData: jb,
    Blob: Bb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gp = typeof window < "u" && typeof document < "u", Ub = ((t) => gp && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), Vb = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: gp,
  hasStandardBrowserEnv: Ub,
  hasStandardBrowserWebWorkerEnv: Vb
}, Symbol.toStringTag, { value: "Module" })), $t = {
  ...Hb,
  ...zb
};
function Wb(t, e) {
  return $o(t, new $t.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return $t.isNode && R.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function qb(t) {
  return R.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Gb(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function yp(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), l = a >= r.length;
    return o = !o && R.isArray(i) ? i.length : o, l ? (R.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !R.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && R.isArray(i[o]) && (i[o] = Gb(i[o])), !s);
  }
  if (R.isFormData(t) && R.isFunction(t.entries)) {
    const r = {};
    return R.forEachEntry(t, (n, i) => {
      e(qb(n), i, r, 0);
    }), r;
  }
  return null;
}
function Yb(t, e, r) {
  if (R.isString(t))
    try {
      return (e || JSON.parse)(t), R.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const _u = {
  transitional: mp,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = R.isObject(e);
    if (a && R.isHTMLForm(e) && (e = new FormData(e)), R.isFormData(e))
      return i ? JSON.stringify(yp(e)) : e;
    if (R.isArrayBuffer(e) || R.isBuffer(e) || R.isStream(e) || R.isFile(e) || R.isBlob(e))
      return e;
    if (R.isArrayBufferView(e))
      return e.buffer;
    if (R.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Wb(e, this.formSerializer).toString();
      if ((s = R.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return $o(
          s ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Yb(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || _u.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (e && R.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? ae.from(s, ae.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: $t.classes.FormData,
    Blob: $t.classes.Blob
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
R.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  _u.headers[t] = {};
});
const Cu = _u, Kb = R.toObjectSet([
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
]), Jb = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Kb[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Yc = Symbol("internals");
function ri(t) {
  return t && String(t).trim().toLowerCase();
}
function Wa(t) {
  return t === !1 || t == null ? t : R.isArray(t) ? t.map(Wa) : String(t);
}
function Xb(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Qb = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Rs(t, e, r, n, i) {
  if (R.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!R.isString(e)) {
    if (R.isString(n))
      return e.indexOf(n) !== -1;
    if (R.isRegExp(n))
      return n.test(e);
  }
}
function Zb(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function e0(t, e) {
  const r = R.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, e, i, a, o);
      },
      configurable: !0
    });
  });
}
class Io {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, l, c) {
      const f = ri(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = R.findKey(i, f);
      (!d || i[d] === void 0 || c === !0 || c === void 0 && i[d] !== !1) && (i[d || l] = Wa(s));
    }
    const o = (s, l) => R.forEach(s, (c, f) => a(c, f, l));
    return R.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : R.isString(e) && (e = e.trim()) && !Qb(e) ? o(Jb(e), r) : e != null && a(r, e, n), this;
  }
  get(e, r) {
    if (e = ri(e), e) {
      const n = R.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Xb(i);
        if (R.isFunction(r))
          return r.call(this, i, n);
        if (R.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = ri(e), e) {
      const n = R.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Rs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = ri(o), o) {
        const s = R.findKey(n, o);
        s && (!r || Rs(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return R.isArray(e) ? e.forEach(a) : a(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || Rs(this, this[a], a, e, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return R.forEach(this, (i, a) => {
      const o = R.findKey(n, a);
      if (o) {
        r[o] = Wa(i), delete r[a];
        return;
      }
      const s = e ? Zb(a) : String(a).trim();
      s !== a && delete r[a], r[s] = Wa(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && R.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Yc] = this[Yc] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = ri(o);
      n[s] || (e0(i, o), n[s] = !0);
    }
    return R.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
Io.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(Io.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
R.freezeMethods(Io);
const Yt = Io;
function Ns(t, e) {
  const r = this || Cu, n = e || r, i = Yt.from(n.headers);
  let a = n.data;
  return R.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function vp(t) {
  return !!(t && t.__CANCEL__);
}
function zi(t, e, r) {
  ae.call(this, t ?? "canceled", ae.ERR_CANCELED, e, r), this.name = "CanceledError";
}
R.inherits(zi, ae, {
  __CANCEL__: !0
});
function t0(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new ae(
    "Request failed with status code " + r.status,
    [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const r0 = $t.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      R.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), R.isString(n) && o.push("path=" + n), R.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function n0(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function i0(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function bp(t, e) {
  return t && !n0(e) ? i0(t, e) : e;
}
const a0 = $t.hasStandardBrowserEnv ? (
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
      const s = R.isString(o) ? i(o) : o;
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
function o0(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function s0(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), f = n[a];
    o || (o = c), r[i] = l, n[i] = c;
    let d = a, g = 0;
    for (; d !== i; )
      g += r[d++], d = d % t;
    if (i = (i + 1) % t, i === a && (a = (a + 1) % t), c - o < e)
      return;
    const S = f && c - f;
    return S ? Math.round(g * 1e3 / S) : void 0;
  };
}
function Kc(t, e) {
  let r = 0;
  const n = s0(50, 250);
  return (i) => {
    const a = i.loaded, o = i.lengthComputable ? i.total : void 0, s = a - r, l = n(s), c = a <= o;
    r = a;
    const f = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && o && c ? (o - a) / l : void 0,
      event: i
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const l0 = typeof XMLHttpRequest < "u", u0 = l0 && function(t) {
  return new Promise(function(r, n) {
    let i = t.data;
    const a = Yt.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, l;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l);
    }
    let f;
    if (R.isFormData(i)) {
      if ($t.hasStandardBrowserEnv || $t.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((f = a.getContentType()) !== !1) {
        const [b, ...O] = f ? f.split(";").map((A) => A.trim()).filter(Boolean) : [];
        a.setContentType([b || "multipart/form-data", ...O].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const b = t.auth.username || "", O = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(b + ":" + O));
    }
    const g = bp(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), hp(g, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function S() {
      if (!d)
        return;
      const b = Yt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), A = {
        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: b,
        config: t,
        request: d
      };
      t0(function(C) {
        r(C), c();
      }, function(C) {
        n(C), c();
      }, A), d = null;
    }
    if ("onloadend" in d ? d.onloadend = S : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, d.onabort = function() {
      d && (n(new ae("Request aborted", ae.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      n(new ae("Network Error", ae.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let O = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const A = t.transitional || mp;
      t.timeoutErrorMessage && (O = t.timeoutErrorMessage), n(new ae(
        O,
        A.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
        t,
        d
      )), d = null;
    }, $t.hasStandardBrowserEnv && (s && R.isFunction(s) && (s = s(t)), s || s !== !1 && a0(g))) {
      const b = t.xsrfHeaderName && t.xsrfCookieName && r0.read(t.xsrfCookieName);
      b && a.set(t.xsrfHeaderName, b);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in d && R.forEach(a.toJSON(), function(O, A) {
      d.setRequestHeader(A, O);
    }), R.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), o && o !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Kc(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Kc(t.onUploadProgress)), (t.cancelToken || t.signal) && (l = (b) => {
      d && (n(!b || b.type ? new zi(null, t, d) : b), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
    const m = o0(g);
    if (m && $t.protocols.indexOf(m) === -1) {
      n(new ae("Unsupported protocol " + m + ":", ae.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(i || null);
  });
}, Al = {
  http: Db,
  xhr: u0
};
R.forEach(Al, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Jc = (t) => `- ${t}`, c0 = (t) => R.isFunction(t) || t === null || t === !1, wp = {
  getAdapter: (t) => {
    t = R.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !c0(r) && (n = Al[(o = String(r)).toLowerCase()], n === void 0))
        throw new ae(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Jc).join(`
`) : " " + Jc(a[0]) : "as no adapter specified";
      throw new ae(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Al
};
function Ls(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new zi(null, t);
}
function Xc(t) {
  return Ls(t), t.headers = Yt.from(t.headers), t.data = Ns.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), wp.getAdapter(t.adapter || Cu.adapter)(t).then(function(n) {
    return Ls(t), n.data = Ns.call(
      t,
      t.transformResponse,
      n
    ), n.headers = Yt.from(n.headers), n;
  }, function(n) {
    return vp(n) || (Ls(t), n && n.response && (n.response.data = Ns.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = Yt.from(n.response.headers))), Promise.reject(n);
  });
}
const Qc = (t) => t instanceof Yt ? t.toJSON() : t;
function Sn(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, d) {
    return R.isPlainObject(c) && R.isPlainObject(f) ? R.merge.call({ caseless: d }, c, f) : R.isPlainObject(f) ? R.merge({}, f) : R.isArray(f) ? f.slice() : f;
  }
  function i(c, f, d) {
    if (R.isUndefined(f)) {
      if (!R.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, f, d);
  }
  function a(c, f) {
    if (!R.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if (R.isUndefined(f)) {
      if (!R.isUndefined(c))
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
  const l = {
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
    headers: (c, f) => i(Qc(c), Qc(f), !0)
  };
  return R.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = l[f] || i, g = d(t[f], e[f], f);
    R.isUndefined(g) && d !== s || (r[f] = g);
  }), r;
}
const xp = "1.6.7", ku = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ku[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Zc = {};
ku.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + xp + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new ae(
        i(o, " has been removed" + (r ? " in " + r : "")),
        ae.ERR_DEPRECATED
      );
    return r && !Zc[o] && (Zc[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
function f0(t, e, r) {
  if (typeof t != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], l = s === void 0 || o(s, a, t);
      if (l !== !0)
        throw new ae("option " + a + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ae("Unknown option " + a, ae.ERR_BAD_OPTION);
  }
}
const El = {
  assertOptions: f0,
  validators: ku
}, or = El.validators;
class oo {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Gc(),
      response: new Gc()
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
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Sn(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && El.assertOptions(n, {
      silentJSONParsing: or.transitional(or.boolean),
      forcedJSONParsing: or.transitional(or.boolean),
      clarifyTimeoutError: or.transitional(or.boolean)
    }, !1), i != null && (R.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : El.assertOptions(i, {
      encode: or.function,
      serialize: or.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && R.merge(
      a.common,
      a[r.method]
    );
    a && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), r.headers = Yt.concat(o, a);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(r) === !1 || (l = l && b.synchronous, s.unshift(b.fulfilled, b.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(b) {
      c.push(b.fulfilled, b.rejected);
    });
    let f, d = 0, g;
    if (!l) {
      const m = [Xc.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, c), g = m.length, f = Promise.resolve(r); d < g; )
        f = f.then(m[d++], m[d++]);
      return f;
    }
    g = s.length;
    let S = r;
    for (d = 0; d < g; ) {
      const m = s[d++], b = s[d++];
      try {
        S = m(S);
      } catch (O) {
        b.call(this, O);
        break;
      }
    }
    try {
      f = Xc.call(this, S);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, g = c.length; d < g; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(e) {
    e = Sn(this.defaults, e);
    const r = bp(e.baseURL, e.url);
    return hp(r, e.params, e.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function(e) {
  oo.prototype[e] = function(r, n) {
    return this.request(Sn(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(Sn(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  oo.prototype[e] = r(), oo.prototype[e + "Form"] = r(!0);
});
const qa = oo;
class Pu {
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
      n.reason || (n.reason = new zi(a, o, s), r(n.reason));
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
      token: new Pu(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
const d0 = Pu;
function p0(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function h0(t) {
  return R.isObject(t) && t.isAxiosError === !0;
}
const _l = {
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
Object.entries(_l).forEach(([t, e]) => {
  _l[e] = t;
});
const m0 = _l;
function Sp(t) {
  const e = new qa(t), r = rp(qa.prototype.request, e);
  return R.extend(r, qa.prototype, e, { allOwnKeys: !0 }), R.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Sp(Sn(t, i));
  }, r;
}
const Ae = Sp(Cu);
Ae.Axios = qa;
Ae.CanceledError = zi;
Ae.CancelToken = d0;
Ae.isCancel = vp;
Ae.VERSION = xp;
Ae.toFormData = $o;
Ae.AxiosError = ae;
Ae.Cancel = Ae.CanceledError;
Ae.all = function(e) {
  return Promise.all(e);
};
Ae.spread = p0;
Ae.isAxiosError = h0;
Ae.mergeConfig = Sn;
Ae.AxiosHeaders = Yt;
Ae.formToJSON = (t) => yp(R.isHTMLForm(t) ? new FormData(t) : t);
Ae.getAdapter = wp.getAdapter;
Ae.HttpStatusCode = m0;
Ae.default = Ae;
const ef = Ae;
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Do(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function g0(t) {
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
var y0 = function(e) {
  return v0(e) && !b0(e);
};
function v0(t) {
  return !!t && typeof t == "object";
}
function b0(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || S0(t);
}
var w0 = typeof Symbol == "function" && Symbol.for, x0 = w0 ? Symbol.for("react.element") : 60103;
function S0(t) {
  return t.$$typeof === x0;
}
function O0(t) {
  return Array.isArray(t) ? [] : {};
}
function ki(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? On(O0(t), t, e) : t;
}
function A0(t, e, r) {
  return t.concat(e).map(function(n) {
    return ki(n, r);
  });
}
function E0(t, e) {
  if (!e.customMerge)
    return On;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : On;
}
function _0(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function tf(t) {
  return Object.keys(t).concat(_0(t));
}
function Op(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function C0(t, e) {
  return Op(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function k0(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && tf(t).forEach(function(i) {
    n[i] = ki(t[i], r);
  }), tf(e).forEach(function(i) {
    C0(t, i) || (Op(t, i) && r.isMergeableObject(e[i]) ? n[i] = E0(i, r)(t[i], e[i], r) : n[i] = ki(e[i], r));
  }), n;
}
function On(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || A0, r.isMergeableObject = r.isMergeableObject || y0, r.cloneUnlessOtherwiseSpecified = ki;
  var n = Array.isArray(e), i = Array.isArray(t), a = n === i;
  return a ? n ? r.arrayMerge(t, e, r) : k0(t, e, r) : ki(e, r);
}
On.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, i) {
    return On(n, i, r);
  }, {});
};
var P0 = On, T0 = P0;
const $0 = /* @__PURE__ */ Do(T0);
var I0 = Error, D0 = EvalError, R0 = RangeError, N0 = ReferenceError, Ap = SyntaxError, Ui = TypeError, L0 = URIError, F0 = function() {
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
}, rf = typeof Symbol < "u" && Symbol, M0 = F0, j0 = function() {
  return typeof rf != "function" || typeof Symbol != "function" || typeof rf("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : M0();
}, nf = {
  foo: {}
}, B0 = Object, z0 = function() {
  return { __proto__: nf }.foo === nf.foo && !({ __proto__: null } instanceof B0);
}, U0 = "Function.prototype.bind called on incompatible ", V0 = Object.prototype.toString, H0 = Math.max, W0 = "[object Function]", af = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, q0 = function(e, r) {
  for (var n = [], i = r || 0, a = 0; i < e.length; i += 1, a += 1)
    n[a] = e[i];
  return n;
}, G0 = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, Y0 = function(e) {
  var r = this;
  if (typeof r != "function" || V0.apply(r) !== W0)
    throw new TypeError(U0 + r);
  for (var n = q0(arguments, 1), i, a = function() {
    if (this instanceof i) {
      var f = r.apply(
        this,
        af(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      af(n, arguments)
    );
  }, o = H0(0, r.length - n.length), s = [], l = 0; l < o; l++)
    s[l] = "$" + l;
  if (i = Function("binder", "return function (" + G0(s, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, K0 = Y0, Tu = Function.prototype.bind || K0, J0 = Function.prototype.call, X0 = Object.prototype.hasOwnProperty, Q0 = Tu, Z0 = Q0.call(J0, X0), te, e1 = I0, t1 = D0, r1 = R0, n1 = N0, An = Ap, bn = Ui, i1 = L0, Ep = Function, Fs = function(t) {
  try {
    return Ep('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Mr = Object.getOwnPropertyDescriptor;
if (Mr)
  try {
    Mr({}, "");
  } catch {
    Mr = null;
  }
var Ms = function() {
  throw new bn();
}, a1 = Mr ? function() {
  try {
    return arguments.callee, Ms;
  } catch {
    try {
      return Mr(arguments, "callee").get;
    } catch {
      return Ms;
    }
  }
}() : Ms, cn = j0(), o1 = z0(), Pe = Object.getPrototypeOf || (o1 ? function(t) {
  return t.__proto__;
} : null), pn = {}, s1 = typeof Uint8Array > "u" || !Pe ? te : Pe(Uint8Array), jr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? te : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? te : ArrayBuffer,
  "%ArrayIteratorPrototype%": cn && Pe ? Pe([][Symbol.iterator]()) : te,
  "%AsyncFromSyncIteratorPrototype%": te,
  "%AsyncFunction%": pn,
  "%AsyncGenerator%": pn,
  "%AsyncGeneratorFunction%": pn,
  "%AsyncIteratorPrototype%": pn,
  "%Atomics%": typeof Atomics > "u" ? te : Atomics,
  "%BigInt%": typeof BigInt > "u" ? te : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? te : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? te : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? te : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": e1,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": t1,
  "%Float32Array%": typeof Float32Array > "u" ? te : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? te : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? te : FinalizationRegistry,
  "%Function%": Ep,
  "%GeneratorFunction%": pn,
  "%Int8Array%": typeof Int8Array > "u" ? te : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? te : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? te : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": cn && Pe ? Pe(Pe([][Symbol.iterator]())) : te,
  "%JSON%": typeof JSON == "object" ? JSON : te,
  "%Map%": typeof Map > "u" ? te : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !cn || !Pe ? te : Pe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? te : Promise,
  "%Proxy%": typeof Proxy > "u" ? te : Proxy,
  "%RangeError%": r1,
  "%ReferenceError%": n1,
  "%Reflect%": typeof Reflect > "u" ? te : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? te : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !cn || !Pe ? te : Pe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? te : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": cn && Pe ? Pe(""[Symbol.iterator]()) : te,
  "%Symbol%": cn ? Symbol : te,
  "%SyntaxError%": An,
  "%ThrowTypeError%": a1,
  "%TypedArray%": s1,
  "%TypeError%": bn,
  "%Uint8Array%": typeof Uint8Array > "u" ? te : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? te : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? te : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? te : Uint32Array,
  "%URIError%": i1,
  "%WeakMap%": typeof WeakMap > "u" ? te : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? te : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? te : WeakSet
};
if (Pe)
  try {
    null.error;
  } catch (t) {
    var l1 = Pe(Pe(t));
    jr["%Error.prototype%"] = l1;
  }
var u1 = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Fs("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Fs("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Fs("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && Pe && (r = Pe(i.prototype));
  }
  return jr[e] = r, r;
}, of = {
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
}, Vi = Tu, so = Z0, c1 = Vi.call(Function.call, Array.prototype.concat), f1 = Vi.call(Function.apply, Array.prototype.splice), sf = Vi.call(Function.call, String.prototype.replace), lo = Vi.call(Function.call, String.prototype.slice), d1 = Vi.call(Function.call, RegExp.prototype.exec), p1 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, h1 = /\\(\\)?/g, m1 = function(e) {
  var r = lo(e, 0, 1), n = lo(e, -1);
  if (r === "%" && n !== "%")
    throw new An("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new An("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return sf(e, p1, function(a, o, s, l) {
    i[i.length] = s ? sf(l, h1, "$1") : o || a;
  }), i;
}, g1 = function(e, r) {
  var n = e, i;
  if (so(of, n) && (i = of[n], n = "%" + i[0] + "%"), so(jr, n)) {
    var a = jr[n];
    if (a === pn && (a = u1(n)), typeof a > "u" && !r)
      throw new bn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: a
    };
  }
  throw new An("intrinsic " + e + " does not exist!");
}, Yr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new bn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new bn('"allowMissing" argument must be a boolean');
  if (d1(/^%?[^%]*%?$/, e) === null)
    throw new An("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = m1(e), i = n.length > 0 ? n[0] : "", a = g1("%" + i + "%", r), o = a.name, s = a.value, l = !1, c = a.alias;
  c && (i = c[0], f1(n, c1([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var g = n[f], S = lo(g, 0, 1), m = lo(g, -1);
    if ((S === '"' || S === "'" || S === "`" || m === '"' || m === "'" || m === "`") && S !== m)
      throw new An("property names with quotes must have matching quotes");
    if ((g === "constructor" || !d) && (l = !0), i += "." + g, o = "%" + i + "%", so(jr, o))
      s = jr[o];
    else if (s != null) {
      if (!(g in s)) {
        if (!r)
          throw new bn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Mr && f + 1 >= n.length) {
        var b = Mr(s, g);
        d = !!b, d && "get" in b && !("originalValue" in b.get) ? s = b.get : s = s[g];
      } else
        d = so(s, g), s = s[g];
      d && !l && (jr[o] = s);
    }
  }
  return s;
}, _p = { exports: {} }, y1 = Yr, Cl = y1("%Object.defineProperty%", !0), kl = function() {
  if (Cl)
    try {
      return Cl({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
kl.hasArrayLengthDefineBug = function() {
  if (!kl())
    return null;
  try {
    return Cl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Cp = kl, v1 = Yr, Ga = v1("%Object.getOwnPropertyDescriptor%", !0);
if (Ga)
  try {
    Ga([], "length");
  } catch {
    Ga = null;
  }
var kp = Ga, b1 = Cp(), w1 = Yr, mi = b1 && w1("%Object.defineProperty%", !0);
if (mi)
  try {
    mi({}, "a", { value: 1 });
  } catch {
    mi = !1;
  }
var x1 = Ap, fn = Ui, lf = kp, S1 = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new fn("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new fn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new fn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new fn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new fn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new fn("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!lf && lf(e, r);
  if (mi)
    mi(e, r, {
      configurable: o === null && l ? l.configurable : !o,
      enumerable: i === null && l ? l.enumerable : !i,
      value: n,
      writable: a === null && l ? l.writable : !a
    });
  else if (s || !i && !a && !o)
    e[r] = n;
  else
    throw new x1("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, O1 = Yr, uf = S1, A1 = Cp(), cf = kp, ff = Ui, E1 = O1("%Math.floor%"), _1 = function(e, r) {
  if (typeof e != "function")
    throw new ff("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || E1(r) !== r)
    throw new ff("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0;
  if ("length" in e && cf) {
    var o = cf(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
  }
  return (i || a || !n) && (A1 ? uf(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : uf(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Tu, r = Yr, n = _1, i = Ui, a = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, a), l = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (l)
    try {
      l({}, "a", { value: 1 });
    } catch {
      l = null;
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
  l ? l(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(_p);
var C1 = _p.exports, Pp = Yr, Tp = C1, k1 = Tp(Pp("String.prototype.indexOf")), P1 = function(e, r) {
  var n = Pp(e, !!r);
  return typeof n == "function" && k1(e, ".prototype.") > -1 ? Tp(n) : n;
};
const T1 = {}, $1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T1
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ g0($1);
var $u = typeof Map == "function" && Map.prototype, js = Object.getOwnPropertyDescriptor && $u ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, uo = $u && js && typeof js.get == "function" ? js.get : null, df = $u && Map.prototype.forEach, Iu = typeof Set == "function" && Set.prototype, Bs = Object.getOwnPropertyDescriptor && Iu ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, co = Iu && Bs && typeof Bs.get == "function" ? Bs.get : null, pf = Iu && Set.prototype.forEach, I1 = typeof WeakMap == "function" && WeakMap.prototype, gi = I1 ? WeakMap.prototype.has : null, D1 = typeof WeakSet == "function" && WeakSet.prototype, yi = D1 ? WeakSet.prototype.has : null, R1 = typeof WeakRef == "function" && WeakRef.prototype, hf = R1 ? WeakRef.prototype.deref : null, N1 = Boolean.prototype.valueOf, L1 = Object.prototype.toString, F1 = Function.prototype.toString, M1 = String.prototype.match, Du = String.prototype.slice, dr = String.prototype.replace, j1 = String.prototype.toUpperCase, mf = String.prototype.toLowerCase, $p = RegExp.prototype.test, gf = Array.prototype.concat, kt = Array.prototype.join, B1 = Array.prototype.slice, yf = Math.floor, Pl = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, zs = Object.getOwnPropertySymbols, Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, En = typeof Symbol == "function" && typeof Symbol.iterator == "object", Fe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === En || "symbol") ? Symbol.toStringTag : null, Ip = Object.prototype.propertyIsEnumerable, vf = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function bf(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || $p.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -yf(-t) : yf(t);
    if (n !== t) {
      var i = String(n), a = Du.call(e, i.length + 1);
      return dr.call(i, r, "$&_") + "." + dr.call(dr.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return dr.call(e, r, "$&_");
}
var $l = Ye, wf = $l.custom, xf = Rp(wf) ? wf : null, z1 = function t(e, r, n, i) {
  var a = r || {};
  if (cr(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (cr(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = cr(a, "customInspect") ? a.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (cr(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (cr(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Lp(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? bf(e, l) : l;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? bf(e, c) : c;
  }
  var f = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Il(e) ? "[Array]" : "[Object]";
  var d = aw(a, n);
  if (typeof i > "u")
    i = [];
  else if (Np(i, e) >= 0)
    return "[Circular]";
  function g(y, x, v) {
    if (x && (i = B1.call(i), i.push(x)), v) {
      var z = {
        depth: a.depth
      };
      return cr(a, "quoteStyle") && (z.quoteStyle = a.quoteStyle), t(y, z, n + 1, i);
    }
    return t(y, a, n + 1, i);
  }
  if (typeof e == "function" && !Sf(e)) {
    var S = J1(e), m = Oa(e, g);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (m.length > 0 ? " { " + kt.call(m, ", ") + " }" : "");
  }
  if (Rp(e)) {
    var b = En ? dr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Tl.call(e);
    return typeof e == "object" && !En ? ni(b) : b;
  }
  if (rw(e)) {
    for (var O = "<" + mf.call(String(e.nodeName)), A = e.attributes || [], k = 0; k < A.length; k++)
      O += " " + A[k].name + "=" + Dp(U1(A[k].value), "double", a);
    return O += ">", e.childNodes && e.childNodes.length && (O += "..."), O += "</" + mf.call(String(e.nodeName)) + ">", O;
  }
  if (Il(e)) {
    if (e.length === 0)
      return "[]";
    var C = Oa(e, g);
    return d && !iw(C) ? "[" + Dl(C, d) + "]" : "[ " + kt.call(C, ", ") + " ]";
  }
  if (H1(e)) {
    var _ = Oa(e, g);
    return !("cause" in Error.prototype) && "cause" in e && !Ip.call(e, "cause") ? "{ [" + String(e) + "] " + kt.call(gf.call("[cause]: " + g(e.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + kt.call(_, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (xf && typeof e[xf] == "function" && $l)
      return $l(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (X1(e)) {
    var D = [];
    return df && df.call(e, function(y, x) {
      D.push(g(x, e, !0) + " => " + g(y, e));
    }), Of("Map", uo.call(e), D, d);
  }
  if (ew(e)) {
    var $ = [];
    return pf && pf.call(e, function(y) {
      $.push(g(y, e));
    }), Of("Set", co.call(e), $, d);
  }
  if (Q1(e))
    return Us("WeakMap");
  if (tw(e))
    return Us("WeakSet");
  if (Z1(e))
    return Us("WeakRef");
  if (q1(e))
    return ni(g(Number(e)));
  if (Y1(e))
    return ni(g(Pl.call(e)));
  if (G1(e))
    return ni(N1.call(e));
  if (W1(e))
    return ni(g(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === gt)
    return "{ [object globalThis] }";
  if (!V1(e) && !Sf(e)) {
    var N = Oa(e, g), B = vf ? vf(e) === Object.prototype : e instanceof Object || e.constructor === Object, M = e instanceof Object ? "" : "null prototype", P = !B && Fe && Object(e) === e && Fe in e ? Du.call(br(e), 8, -1) : M ? "Object" : "", U = B || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", h = U + (P || M ? "[" + kt.call(gf.call([], P || [], M || []), ": ") + "] " : "");
    return N.length === 0 ? h + "{}" : d ? h + "{" + Dl(N, d) + "}" : h + "{ " + kt.call(N, ", ") + " }";
  }
  return String(e);
};
function Dp(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function U1(t) {
  return dr.call(String(t), /"/g, "&quot;");
}
function Il(t) {
  return br(t) === "[object Array]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function V1(t) {
  return br(t) === "[object Date]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function Sf(t) {
  return br(t) === "[object RegExp]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function H1(t) {
  return br(t) === "[object Error]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function W1(t) {
  return br(t) === "[object String]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function q1(t) {
  return br(t) === "[object Number]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function G1(t) {
  return br(t) === "[object Boolean]" && (!Fe || !(typeof t == "object" && Fe in t));
}
function Rp(t) {
  if (En)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Tl)
    return !1;
  try {
    return Tl.call(t), !0;
  } catch {
  }
  return !1;
}
function Y1(t) {
  if (!t || typeof t != "object" || !Pl)
    return !1;
  try {
    return Pl.call(t), !0;
  } catch {
  }
  return !1;
}
var K1 = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function cr(t, e) {
  return K1.call(t, e);
}
function br(t) {
  return L1.call(t);
}
function J1(t) {
  if (t.name)
    return t.name;
  var e = M1.call(F1.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Np(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function X1(t) {
  if (!uo || !t || typeof t != "object")
    return !1;
  try {
    uo.call(t);
    try {
      co.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Q1(t) {
  if (!gi || !t || typeof t != "object")
    return !1;
  try {
    gi.call(t, gi);
    try {
      yi.call(t, yi);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Z1(t) {
  if (!hf || !t || typeof t != "object")
    return !1;
  try {
    return hf.call(t), !0;
  } catch {
  }
  return !1;
}
function ew(t) {
  if (!co || !t || typeof t != "object")
    return !1;
  try {
    co.call(t);
    try {
      uo.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function tw(t) {
  if (!yi || !t || typeof t != "object")
    return !1;
  try {
    yi.call(t, yi);
    try {
      gi.call(t, gi);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function rw(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Lp(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Lp(Du.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = dr.call(dr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, nw);
  return Dp(i, "single", e);
}
function nw(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + j1.call(e.toString(16));
}
function ni(t) {
  return "Object(" + t + ")";
}
function Us(t) {
  return t + " { ? }";
}
function Of(t, e, r, n) {
  var i = n ? Dl(r, n) : kt.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function iw(t) {
  for (var e = 0; e < t.length; e++)
    if (Np(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function aw(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = kt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: kt.call(Array(e + 1), r)
  };
}
function Dl(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + kt.call(t, "," + r) + `
` + e.prev;
}
function Oa(t, e) {
  var r = Il(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = cr(t, i) ? e(t[i], t) : "";
  }
  var a = typeof zs == "function" ? zs(t) : [], o;
  if (En) {
    o = {};
    for (var s = 0; s < a.length; s++)
      o["$" + a[s]] = a[s];
  }
  for (var l in t)
    cr(t, l) && (r && String(Number(l)) === l && l < t.length || En && o["$" + l] instanceof Symbol || ($p.call(/[^\w$]/, l) ? n.push(e(l, t) + ": " + e(t[l], t)) : n.push(l + ": " + e(t[l], t))));
  if (typeof zs == "function")
    for (var c = 0; c < a.length; c++)
      Ip.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var Fp = Yr, Mn = P1, ow = z1, sw = Ui, Aa = Fp("%WeakMap%", !0), Ea = Fp("%Map%", !0), lw = Mn("WeakMap.prototype.get", !0), uw = Mn("WeakMap.prototype.set", !0), cw = Mn("WeakMap.prototype.has", !0), fw = Mn("Map.prototype.get", !0), dw = Mn("Map.prototype.set", !0), pw = Mn("Map.prototype.has", !0), Ru = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, hw = function(t, e) {
  var r = Ru(t, e);
  return r && r.value;
}, mw = function(t, e, r) {
  var n = Ru(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, gw = function(t, e) {
  return !!Ru(t, e);
}, yw = function() {
  var e, r, n, i = {
    assert: function(a) {
      if (!i.has(a))
        throw new sw("Side channel does not contain " + ow(a));
    },
    get: function(a) {
      if (Aa && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return lw(e, a);
      } else if (Ea) {
        if (r)
          return fw(r, a);
      } else if (n)
        return hw(n, a);
    },
    has: function(a) {
      if (Aa && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return cw(e, a);
      } else if (Ea) {
        if (r)
          return pw(r, a);
      } else if (n)
        return gw(n, a);
      return !1;
    },
    set: function(a, o) {
      Aa && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Aa()), uw(e, a, o)) : Ea ? (r || (r = new Ea()), dw(r, a, o)) : (n || (n = { key: {}, next: null }), mw(n, a, o));
    }
  };
  return i;
}, vw = String.prototype.replace, bw = /%20/g, Vs = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Nu = {
  default: Vs.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return vw.call(t, bw, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Vs.RFC1738,
  RFC3986: Vs.RFC3986
}, ww = Nu, Hs = Object.prototype.hasOwnProperty, Ir = Array.isArray, _t = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), xw = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (Ir(n)) {
      for (var i = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && i.push(n[a]);
      r.obj[r.prop] = i;
    }
  }
}, Mp = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, Sw = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (Ir(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Hs.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return Ir(e) && !Ir(r) && (i = Mp(e, n)), Ir(e) && Ir(r) ? (r.forEach(function(a, o) {
    if (Hs.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && a && typeof a == "object" ? e[o] = t(s, a, n) : e.push(a);
    } else
      e[o] = a;
  }), e) : Object.keys(r).reduce(function(a, o) {
    var s = r[o];
    return Hs.call(a, o) ? a[o] = t(a[o], s, n) : a[o] = s, a;
  }, i);
}, Ow = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, Aw = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ew = function(e, r, n, i, a) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < o.length; ++l) {
    var c = o.charCodeAt(l);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === ww.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(l);
      continue;
    }
    if (c < 128) {
      s = s + _t[c];
      continue;
    }
    if (c < 2048) {
      s = s + (_t[192 | c >> 6] + _t[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (_t[224 | c >> 12] + _t[128 | c >> 6 & 63] + _t[128 | c & 63]);
      continue;
    }
    l += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(l) & 1023), s += _t[240 | c >> 18] + _t[128 | c >> 12 & 63] + _t[128 | c >> 6 & 63] + _t[128 | c & 63];
  }
  return s;
}, _w = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var a = r[i], o = a.obj[a.prop], s = Object.keys(o), l = 0; l < s.length; ++l) {
      var c = s[l], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return xw(r), e;
}, Cw = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, kw = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Pw = function(e, r) {
  return [].concat(e, r);
}, Tw = function(e, r) {
  if (Ir(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, jp = {
  arrayToObject: Mp,
  assign: Ow,
  combine: Pw,
  compact: _w,
  decode: Aw,
  encode: Ew,
  isBuffer: kw,
  isRegExp: Cw,
  maybeMap: Tw,
  merge: Sw
}, Bp = yw, Ya = jp, vi = Nu, $w = Object.prototype.hasOwnProperty, Af = {
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
}, Gt = Array.isArray, Iw = Array.prototype.push, zp = function(t, e) {
  Iw.apply(t, Gt(e) ? e : [e]);
}, Dw = Date.prototype.toISOString, Ef = vi.default, Le = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Ya.encode,
  encodeValuesOnly: !1,
  format: Ef,
  formatter: vi.formatters[Ef],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Dw.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Rw = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ws = {}, Nw = function t(e, r, n, i, a, o, s, l, c, f, d, g, S, m, b, O) {
  for (var A = e, k = O, C = 0, _ = !1; (k = k.get(Ws)) !== void 0 && !_; ) {
    var D = k.get(e);
    if (C += 1, typeof D < "u") {
      if (D === C)
        throw new RangeError("Cyclic object value");
      _ = !0;
    }
    typeof k.get(Ws) > "u" && (C = 0);
  }
  if (typeof l == "function" ? A = l(r, A) : A instanceof Date ? A = d(A) : n === "comma" && Gt(A) && (A = Ya.maybeMap(A, function(z) {
    return z instanceof Date ? d(z) : z;
  })), A === null) {
    if (a)
      return s && !m ? s(r, Le.encoder, b, "key", g) : r;
    A = "";
  }
  if (Rw(A) || Ya.isBuffer(A)) {
    if (s) {
      var $ = m ? r : s(r, Le.encoder, b, "key", g);
      return [S($) + "=" + S(s(A, Le.encoder, b, "value", g))];
    }
    return [S(r) + "=" + S(String(A))];
  }
  var N = [];
  if (typeof A > "u")
    return N;
  var B;
  if (n === "comma" && Gt(A))
    m && s && (A = Ya.maybeMap(A, s)), B = [{ value: A.length > 0 ? A.join(",") || null : void 0 }];
  else if (Gt(l))
    B = l;
  else {
    var M = Object.keys(A);
    B = c ? M.sort(c) : M;
  }
  for (var P = i && Gt(A) && A.length === 1 ? r + "[]" : r, U = 0; U < B.length; ++U) {
    var h = B[U], y = typeof h == "object" && typeof h.value < "u" ? h.value : A[h];
    if (!(o && y === null)) {
      var x = Gt(A) ? typeof n == "function" ? n(P, h) : P : P + (f ? "." + h : "[" + h + "]");
      O.set(e, C);
      var v = Bp();
      v.set(Ws, O), zp(N, t(
        y,
        x,
        n,
        i,
        a,
        o,
        n === "comma" && m && Gt(A) ? null : s,
        l,
        c,
        f,
        d,
        g,
        S,
        m,
        b,
        v
      ));
    }
  }
  return N;
}, Lw = function(e) {
  if (!e)
    return Le;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Le.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = vi.default;
  if (typeof e.format < "u") {
    if (!$w.call(vi.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = vi.formatters[n], a = Le.filter;
  return (typeof e.filter == "function" || Gt(e.filter)) && (a = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Le.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Le.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Le.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Le.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Le.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Le.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Le.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Le.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Le.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Le.strictNullHandling
  };
}, Fw = function(t, e) {
  var r = t, n = Lw(e), i, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Gt(n.filter) && (a = n.filter, i = a);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in Af ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var l = Af[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = l === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var f = Bp(), d = 0; d < i.length; ++d) {
    var g = i[d];
    n.skipNulls && r[g] === null || zp(o, Nw(
      r[g],
      g,
      l,
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
}, _n = jp, Rl = Object.prototype.hasOwnProperty, Mw = Array.isArray, ke = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: _n.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, jw = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Up = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Bw = "utf8=%26%2310003%3B", zw = "utf8=%E2%9C%93", Uw = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, a), s = -1, l, c = r.charset;
  if (r.charsetSentinel)
    for (l = 0; l < o.length; ++l)
      o[l].indexOf("utf8=") === 0 && (o[l] === zw ? c = "utf-8" : o[l] === Bw && (c = "iso-8859-1"), s = l, l = o.length);
  for (l = 0; l < o.length; ++l)
    if (l !== s) {
      var f = o[l], d = f.indexOf("]="), g = d === -1 ? f.indexOf("=") : d + 1, S, m;
      g === -1 ? (S = r.decoder(f, ke.decoder, c, "key"), m = r.strictNullHandling ? null : "") : (S = r.decoder(f.slice(0, g), ke.decoder, c, "key"), m = _n.maybeMap(
        Up(f.slice(g + 1), r),
        function(b) {
          return r.decoder(b, ke.decoder, c, "value");
        }
      )), m && r.interpretNumericEntities && c === "iso-8859-1" && (m = jw(m)), f.indexOf("[]=") > -1 && (m = Mw(m) ? [m] : m), Rl.call(n, S) ? n[S] = _n.combine(n[S], m) : n[S] = m;
    }
  return n;
}, Vw = function(t, e, r, n) {
  for (var i = n ? e : Up(e, r), a = t.length - 1; a >= 0; --a) {
    var o, s = t[a];
    if (s === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(l, 10);
      !r.parseArrays && l === "" ? o = { 0: i } : !isNaN(c) && s !== l && String(c) === l && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (o = [], o[c] = i) : l !== "__proto__" && (o[l] = i);
    }
    i = o;
  }
  return i;
}, Hw = function(e, r, n, i) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = n.depth > 0 && o.exec(a), c = l ? a.slice(0, l.index) : a, f = [];
    if (c) {
      if (!n.plainObjects && Rl.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var d = 0; n.depth > 0 && (l = s.exec(a)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && Rl.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(l[1]);
    }
    return l && f.push("[" + a.slice(l.index) + "]"), Vw(f, r, n, i);
  }
}, Ww = function(e) {
  if (!e)
    return ke;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? ke.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? ke.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ke.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ke.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ke.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ke.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : ke.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : ke.decoder,
    delimiter: typeof e.delimiter == "string" || _n.isRegExp(e.delimiter) ? e.delimiter : ke.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ke.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ke.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ke.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ke.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ke.strictNullHandling
  };
}, qw = function(t, e) {
  var r = Ww(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Uw(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(n), o = 0; o < a.length; ++o) {
    var s = a[o], l = Hw(s, n[s], r, typeof t == "string");
    i = _n.merge(i, l, r);
  }
  return r.allowSparse === !0 ? i : _n.compact(i);
}, Gw = Fw, Yw = qw, Kw = Nu, _f = {
  formats: Kw,
  parse: Yw,
  stringify: Gw
}, Jw = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(gt, function() {
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
      var b, O;
      for (b in m)
        O = m[b], O !== void 0 && m.hasOwnProperty(b) && (n[b] = O);
      return this;
    }, r.status = null, r.set = function(m) {
      var b = r.isStarted();
      m = i(m, n.minimum, 1), r.status = m === 1 ? null : m;
      var O = r.render(!b), A = O.querySelector(n.barSelector), k = n.speed, C = n.easing;
      return O.offsetWidth, s(function(_) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), l(A, o(m, k, C)), m === 1 ? (l(O, {
          transition: "none",
          opacity: 1
        }), O.offsetWidth, setTimeout(function() {
          l(O, {
            transition: "all " + k + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), _();
          }, k);
        }, k)) : setTimeout(_, k);
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
      var b = r.status;
      return b ? (typeof m != "number" && (m = (1 - b) * i(Math.random() * b, 0.1, 0.95)), b = i(b + m, 0, 0.994), r.set(b)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var m = 0, b = 0;
      r.promise = function(O) {
        return !O || O.state() === "resolved" ? this : (b === 0 && r.start(), m++, b++, O.always(function() {
          b--, b === 0 ? (m = 0, r.done()) : r.set((m - b) / m);
        }), this);
      };
    }(), r.render = function(m) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var b = document.createElement("div");
      b.id = "nprogress", b.innerHTML = n.template;
      var O = b.querySelector(n.barSelector), A = m ? "-100" : a(r.status || 0), k = document.querySelector(n.parent), C;
      return l(O, {
        transition: "all 0 linear",
        transform: "translate3d(" + A + "%,0,0)"
      }), n.showSpinner || (C = b.querySelector(n.spinnerSelector), C && S(C)), k != document.body && f(k, "nprogress-custom-parent"), k.appendChild(b), b;
    }, r.remove = function() {
      d(document.documentElement, "nprogress-busy"), d(document.querySelector(n.parent), "nprogress-custom-parent");
      var m = document.getElementById("nprogress");
      m && S(m);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var m = document.body.style, b = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
      return b + "Perspective" in m ? "translate3d" : b + "Transform" in m ? "translate" : "margin";
    };
    function i(m, b, O) {
      return m < b ? b : m > O ? O : m;
    }
    function a(m) {
      return (-1 + m) * 100;
    }
    function o(m, b, O) {
      var A;
      return n.positionUsing === "translate3d" ? A = { transform: "translate3d(" + a(m) + "%,0,0)" } : n.positionUsing === "translate" ? A = { transform: "translate(" + a(m) + "%,0)" } : A = { "margin-left": a(m) + "%" }, A.transition = "all " + b + "ms " + O, A;
    }
    var s = function() {
      var m = [];
      function b() {
        var O = m.shift();
        O && O(b);
      }
      return function(O) {
        m.push(O), m.length == 1 && b();
      };
    }(), l = function() {
      var m = ["Webkit", "O", "Moz", "ms"], b = {};
      function O(_) {
        return _.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(D, $) {
          return $.toUpperCase();
        });
      }
      function A(_) {
        var D = document.body.style;
        if (_ in D)
          return _;
        for (var $ = m.length, N = _.charAt(0).toUpperCase() + _.slice(1), B; $--; )
          if (B = m[$] + N, B in D)
            return B;
        return _;
      }
      function k(_) {
        return _ = O(_), b[_] || (b[_] = A(_));
      }
      function C(_, D, $) {
        D = k(D), _.style[D] = $;
      }
      return function(_, D) {
        var $ = arguments, N, B;
        if ($.length == 2)
          for (N in D)
            B = D[N], B !== void 0 && D.hasOwnProperty(N) && C(_, N, B);
        else
          C(_, $[1], $[2]);
      };
    }();
    function c(m, b) {
      var O = typeof m == "string" ? m : g(m);
      return O.indexOf(" " + b + " ") >= 0;
    }
    function f(m, b) {
      var O = g(m), A = O + b;
      c(O, b) || (m.className = A.substring(1));
    }
    function d(m, b) {
      var O = g(m), A;
      c(m, b) && (A = O.replace(" " + b + " ", " "), m.className = A.substring(1, A.length - 1));
    }
    function g(m) {
      return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
    }
    function S(m) {
      m && m.parentNode && m.parentNode.removeChild(m);
    }
    return r;
  });
})(Jw);
function Vp(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function er(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var Xw = (t) => er("before", { cancelable: !0, detail: { visit: t } }), Qw = (t) => er("error", { detail: { errors: t } }), Zw = (t) => er("exception", { cancelable: !0, detail: { exception: t } }), Cf = (t) => er("finish", { detail: { visit: t } }), ex = (t) => er("invalid", { cancelable: !0, detail: { response: t } }), ii = (t) => er("navigate", { detail: { page: t } }), tx = (t) => er("progress", { detail: { progress: t } }), rx = (t) => er("start", { detail: { visit: t } }), nx = (t) => er("success", { detail: { page: t } });
function Nl(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Nl(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Nl(e));
}
function Hp(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && qp(e, Wp(r, n), t[n]);
  return e;
}
function Wp(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function qp(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => qp(t, Wp(e, n.toString()), r[n]));
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
  Hp(r, t, e);
}
var ix = { modal: null, listener: null, show(t) {
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
function dn(t) {
  return new URL(t.toString(), window.location.toString());
}
function Lu(t, e, r, n = "brackets") {
  let i = /^https?:\/\//.test(e.toString()), a = i || e.toString().startsWith("/"), o = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, l = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = _f.stringify($0(_f.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", l ? c.hash : ""].join(""), r];
}
function ai(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var kf = typeof window > "u", ax = class {
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
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => ii(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Vp(this.handleScrollEvent.bind(this), 100), !0);
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
      this.restoreScrollPositions(), ii(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, ai(window.location).href === ai(t).href && window.location.reload();
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
      e.preserveScroll && this.restoreScrollPositions(), ii(t);
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
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, Cf(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, Cf(t), t.onFinish(t));
  }
  resolvePreserveOption(t, e) {
    return typeof t == "function" ? t(e) : t === "errors" ? Object.keys(e.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: e = "get", data: r = {}, replace: n = !1, preserveScroll: i = !1, preserveState: a = !1, only: o = [], headers: s = {}, errorBag: l = "", forceFormData: c = !1, onCancelToken: f = () => {
  }, onBefore: d = () => {
  }, onStart: g = () => {
  }, onProgress: S = () => {
  }, onFinish: m = () => {
  }, onCancel: b = () => {
  }, onSuccess: O = () => {
  }, onError: A = () => {
  }, queryStringArrayFormat: k = "brackets" } = {}) {
    let C = typeof t == "string" ? dn(t) : t;
    if ((Nl(r) || c) && !(r instanceof FormData) && (r = Hp(r)), !(r instanceof FormData)) {
      let [$, N] = Lu(e, C, r, k);
      C = dn($), r = N;
    }
    let _ = { url: C, method: e, data: r, replace: n, preserveScroll: i, preserveState: a, only: o, headers: s, errorBag: l, forceFormData: c, queryStringArrayFormat: k, cancelled: !1, completed: !1, interrupted: !1 };
    if (d(_) === !1 || !Xw(_))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let D = this.createVisitId();
    this.activeVisit = { ..._, onCancelToken: f, onBefore: d, onStart: g, onProgress: S, onFinish: m, onCancel: b, onSuccess: O, onError: A, queryStringArrayFormat: k, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), rx(_), g(_), ef({ method: e, url: ai(C).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...l && l.length ? { "X-Inertia-Error-Bag": l } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: ($) => {
      r instanceof FormData && ($.percentage = $.progress ? Math.round($.progress * 100) : 0, tx($), S($));
    } }).then(($) => {
      var P;
      if (!this.isInertiaResponse($))
        return Promise.reject({ response: $ });
      let N = $.data;
      o.length && N.component === this.page.component && (N.props = { ...this.page.props, ...N.props }), i = this.resolvePreserveOption(i, N), a = this.resolvePreserveOption(a, N), a && ((P = window.history.state) != null && P.rememberedState) && N.component === this.page.component && (N.rememberedState = window.history.state.rememberedState);
      let B = C, M = dn(N.url);
      return B.hash && !M.hash && ai(B).href === M.href && (M.hash = B.hash, N.url = M.href), this.setPage(N, { visitId: D, replace: n, preserveScroll: i, preserveState: a });
    }).then(() => {
      let $ = this.page.props.errors || {};
      if (Object.keys($).length > 0) {
        let N = l ? $[l] ? $[l] : {} : $;
        return Qw(N), A(N);
      }
      return nx(this.page), O(this.page);
    }).catch(($) => {
      if (this.isInertiaResponse($.response))
        return this.setPage($.response.data, { visitId: D });
      if (this.isLocationVisitResponse($.response)) {
        let N = dn($.response.headers["x-inertia-location"]), B = C;
        B.hash && !N.hash && ai(B).href === N.href && (N.hash = B.hash), this.locationVisit(N, i === !0);
      } else if ($.response)
        ex($.response) && ix.show($.response.data);
      else
        return Promise.reject($);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch(($) => {
      if (!ef.isCancel($)) {
        let N = Zw($);
        if (this.activeVisit && this.finishVisit(this.activeVisit), N)
          return Promise.reject($);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: i = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((a) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || dn(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: a, page: t, preserveState: i }).then(() => {
        n || this.resetScrollPositions(), r || ii(t);
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
          this.restoreScrollPositions(), ii(e);
        }));
      });
    } else {
      let e = dn(this.page.url);
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
    kf || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!kf)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let i = e(n);
      n.cancelable && !n.defaultPrevented && i === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, ox = { buildDOMElement(t) {
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
}, update: Vp(function(t) {
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
function sx(t, e, r) {
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
  function l() {
    let f = e(""), d = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, g = Object.values(n).reduce((S, m) => S.concat(m), []).reduce((S, m) => {
      if (m.indexOf("<") === -1)
        return S;
      if (m.indexOf("<title ") === 0) {
        let O = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return S.title = O ? `${O[1]}${e(O[2])}${O[3]}` : m, S;
      }
      let b = m.match(/ inertia="[^"]+"/);
      return b ? S[b[0]] = m : S[Object.keys(S).length] = m, S;
    }, d);
    return Object.values(g);
  }
  function c() {
    t ? r(l()) : ox.update(l());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = a();
    return { update: (d) => s(f, d), disconnect: () => o(f) };
  } };
}
function Gp(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var Nr = new ax(), fo = { exports: {} };
fo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", l = "[object Date]", c = "[object Error]", f = "[object Function]", d = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Object]", b = "[object Promise]", O = "[object RegExp]", A = "[object Set]", k = "[object String]", C = "[object Symbol]", _ = "[object WeakMap]", D = "[object ArrayBuffer]", $ = "[object DataView]", N = "[object Float32Array]", B = "[object Float64Array]", M = "[object Int8Array]", P = "[object Int16Array]", U = "[object Int32Array]", h = "[object Uint8Array]", y = "[object Uint8ClampedArray]", x = "[object Uint16Array]", v = "[object Uint32Array]", z = /[\\^$.*+?()[\]{}|]/g, F = /\w*$/, j = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[a] = Y[o] = Y[D] = Y[$] = Y[s] = Y[l] = Y[N] = Y[B] = Y[M] = Y[P] = Y[U] = Y[g] = Y[S] = Y[m] = Y[O] = Y[A] = Y[k] = Y[C] = Y[h] = Y[y] = Y[x] = Y[v] = !0, Y[c] = Y[f] = Y[_] = !1;
  var Me = typeof gt == "object" && gt && gt.Object === Object && gt, Ue = typeof self == "object" && self && self.Object === Object && self, pe = Me || Ue || Function("return this")(), Ee = e && !e.nodeType && e, Q = Ee && !0 && t && !t.nodeType && t, nt = Q && Q.exports === Ee;
  function lt(u, p) {
    return u.set(p[0], p[1]), u;
  }
  function Se(u, p) {
    return u.add(p), u;
  }
  function Nt(u, p) {
    for (var w = -1, T = u ? u.length : 0; ++w < T && p(u[w], w, u) !== !1; )
      ;
    return u;
  }
  function tr(u, p) {
    for (var w = -1, T = p.length, ee = u.length; ++w < T; )
      u[ee + w] = p[w];
    return u;
  }
  function ut(u, p, w, T) {
    var ee = -1, G = u ? u.length : 0;
    for (T && G && (w = u[++ee]); ++ee < G; )
      w = p(w, u[ee], ee, u);
    return w;
  }
  function Lt(u, p) {
    for (var w = -1, T = Array(u); ++w < u; )
      T[w] = p(w);
    return T;
  }
  function Ft(u, p) {
    return u == null ? void 0 : u[p];
  }
  function xr(u) {
    var p = !1;
    if (u != null && typeof u.toString != "function")
      try {
        p = !!(u + "");
      } catch {
      }
    return p;
  }
  function Xr(u) {
    var p = -1, w = Array(u.size);
    return u.forEach(function(T, ee) {
      w[++p] = [ee, T];
    }), w;
  }
  function rr(u, p) {
    return function(w) {
      return u(p(w));
    };
  }
  function Sr(u) {
    var p = -1, w = Array(u.size);
    return u.forEach(function(T) {
      w[++p] = T;
    }), w;
  }
  var Bn = Array.prototype, zn = Function.prototype, Ve = Object.prototype, xt = pe["__core-js_shared__"], Or = function() {
    var u = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
    return u ? "Symbol(src)_1." + u : "";
  }(), Ar = zn.toString, He = Ve.hasOwnProperty, Mt = Ve.toString, Qr = RegExp(
    "^" + Ar.call(He).replace(z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), St = nt ? pe.Buffer : void 0, jt = pe.Symbol, Un = pe.Uint8Array, it = rr(Object.getPrototypeOf, Object), Qi = Object.create, Zi = Ve.propertyIsEnumerable, Ho = Bn.splice, Vn = Object.getOwnPropertySymbols, Zr = St ? St.isBuffer : void 0, ea = rr(Object.keys, Object), en = ft(pe, "DataView"), Er = ft(pe, "Map"), ct = ft(pe, "Promise"), tn = ft(pe, "Set"), Hn = ft(pe, "WeakMap"), _r = ft(Object, "create"), Wn = je(en), Cr = je(Er), qn = je(ct), Gn = je(tn), Yn = je(Hn), nr = jt ? jt.prototype : void 0, ta = nr ? nr.valueOf : void 0;
  function Bt(u) {
    var p = -1, w = u ? u.length : 0;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function Wo() {
    this.__data__ = _r ? _r(null) : {};
  }
  function qo(u) {
    return this.has(u) && delete this.__data__[u];
  }
  function Go(u) {
    var p = this.__data__;
    if (_r) {
      var w = p[u];
      return w === n ? void 0 : w;
    }
    return He.call(p, u) ? p[u] : void 0;
  }
  function ra(u) {
    var p = this.__data__;
    return _r ? p[u] !== void 0 : He.call(p, u);
  }
  function Kn(u, p) {
    var w = this.__data__;
    return w[u] = _r && p === void 0 ? n : p, this;
  }
  Bt.prototype.clear = Wo, Bt.prototype.delete = qo, Bt.prototype.get = Go, Bt.prototype.has = ra, Bt.prototype.set = Kn;
  function Te(u) {
    var p = -1, w = u ? u.length : 0;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function Yo() {
    this.__data__ = [];
  }
  function Ko(u) {
    var p = this.__data__, w = nn(p, u);
    if (w < 0)
      return !1;
    var T = p.length - 1;
    return w == T ? p.pop() : Ho.call(p, w, 1), !0;
  }
  function Jo(u) {
    var p = this.__data__, w = nn(p, u);
    return w < 0 ? void 0 : p[w][1];
  }
  function Xo(u) {
    return nn(this.__data__, u) > -1;
  }
  function Qo(u, p) {
    var w = this.__data__, T = nn(w, u);
    return T < 0 ? w.push([u, p]) : w[T][1] = p, this;
  }
  Te.prototype.clear = Yo, Te.prototype.delete = Ko, Te.prototype.get = Jo, Te.prototype.has = Xo, Te.prototype.set = Qo;
  function De(u) {
    var p = -1, w = u ? u.length : 0;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function Zo() {
    this.__data__ = {
      hash: new Bt(),
      map: new (Er || Te)(),
      string: new Bt()
    };
  }
  function es(u) {
    return Pr(this, u).delete(u);
  }
  function ts(u) {
    return Pr(this, u).get(u);
  }
  function rs(u) {
    return Pr(this, u).has(u);
  }
  function ns(u, p) {
    return Pr(this, u).set(u, p), this;
  }
  De.prototype.clear = Zo, De.prototype.delete = es, De.prototype.get = ts, De.prototype.has = rs, De.prototype.set = ns;
  function We(u) {
    this.__data__ = new Te(u);
  }
  function is() {
    this.__data__ = new Te();
  }
  function as(u) {
    return this.__data__.delete(u);
  }
  function os(u) {
    return this.__data__.get(u);
  }
  function ss(u) {
    return this.__data__.has(u);
  }
  function ls(u, p) {
    var w = this.__data__;
    if (w instanceof Te) {
      var T = w.__data__;
      if (!Er || T.length < r - 1)
        return T.push([u, p]), this;
      w = this.__data__ = new De(T);
    }
    return w.set(u, p), this;
  }
  We.prototype.clear = is, We.prototype.delete = as, We.prototype.get = os, We.prototype.has = ss, We.prototype.set = ls;
  function rn(u, p) {
    var w = Zn(u) || on(u) ? Lt(u.length, String) : [], T = w.length, ee = !!T;
    for (var G in u)
      (p || He.call(u, G)) && !(ee && (G == "length" || Ss(G, T))) && w.push(G);
    return w;
  }
  function na(u, p, w) {
    var T = u[p];
    (!(He.call(u, p) && la(T, w)) || w === void 0 && !(p in u)) && (u[p] = w);
  }
  function nn(u, p) {
    for (var w = u.length; w--; )
      if (la(u[w][0], p))
        return w;
    return -1;
  }
  function Ot(u, p) {
    return u && Qn(p, ti(p), u);
  }
  function Jn(u, p, w, T, ee, G, re) {
    var oe;
    if (T && (oe = G ? T(u, ee, G, re) : T(u)), oe !== void 0)
      return oe;
    if (!Et(u))
      return u;
    var Oe = Zn(u);
    if (Oe) {
      if (oe = ws(u), !p)
        return ys(u, oe);
    } else {
      var ue = Ut(u), Re = ue == f || ue == d;
      if (ua(u))
        return an(u, p);
      if (ue == m || ue == a || Re && !G) {
        if (xr(u))
          return G ? u : {};
        if (oe = At(Re ? {} : u), !p)
          return vs(u, Ot(oe, u));
      } else {
        if (!Y[ue])
          return G ? u : {};
        oe = xs(u, ue, Jn, p);
      }
    }
    re || (re = new We());
    var qe = re.get(u);
    if (qe)
      return qe;
    if (re.set(u, oe), !Oe)
      var _e = w ? bs(u) : ti(u);
    return Nt(_e || u, function(Ne, $e) {
      _e && ($e = Ne, Ne = u[$e]), na(oe, $e, Jn(Ne, p, w, T, $e, u, re));
    }), oe;
  }
  function us(u) {
    return Et(u) ? Qi(u) : {};
  }
  function cs(u, p, w) {
    var T = p(u);
    return Zn(u) ? T : tr(T, w(u));
  }
  function fs(u) {
    return Mt.call(u);
  }
  function ds(u) {
    if (!Et(u) || As(u))
      return !1;
    var p = ei(u) || xr(u) ? Qr : j;
    return p.test(je(u));
  }
  function ps(u) {
    if (!oa(u))
      return ea(u);
    var p = [];
    for (var w in Object(u))
      He.call(u, w) && w != "constructor" && p.push(w);
    return p;
  }
  function an(u, p) {
    if (p)
      return u.slice();
    var w = new u.constructor(u.length);
    return u.copy(w), w;
  }
  function Xn(u) {
    var p = new u.constructor(u.byteLength);
    return new Un(p).set(new Un(u)), p;
  }
  function kr(u, p) {
    var w = p ? Xn(u.buffer) : u.buffer;
    return new u.constructor(w, u.byteOffset, u.byteLength);
  }
  function ia(u, p, w) {
    var T = p ? w(Xr(u), !0) : Xr(u);
    return ut(T, lt, new u.constructor());
  }
  function aa(u) {
    var p = new u.constructor(u.source, F.exec(u));
    return p.lastIndex = u.lastIndex, p;
  }
  function hs(u, p, w) {
    var T = p ? w(Sr(u), !0) : Sr(u);
    return ut(T, Se, new u.constructor());
  }
  function ms(u) {
    return ta ? Object(ta.call(u)) : {};
  }
  function gs(u, p) {
    var w = p ? Xn(u.buffer) : u.buffer;
    return new u.constructor(w, u.byteOffset, u.length);
  }
  function ys(u, p) {
    var w = -1, T = u.length;
    for (p || (p = Array(T)); ++w < T; )
      p[w] = u[w];
    return p;
  }
  function Qn(u, p, w, T) {
    w || (w = {});
    for (var ee = -1, G = p.length; ++ee < G; ) {
      var re = p[ee], oe = T ? T(w[re], u[re], re, w, u) : void 0;
      na(w, re, oe === void 0 ? u[re] : oe);
    }
    return w;
  }
  function vs(u, p) {
    return Qn(u, zt(u), p);
  }
  function bs(u) {
    return cs(u, ti, zt);
  }
  function Pr(u, p) {
    var w = u.__data__;
    return Os(p) ? w[typeof p == "string" ? "string" : "hash"] : w.map;
  }
  function ft(u, p) {
    var w = Ft(u, p);
    return ds(w) ? w : void 0;
  }
  var zt = Vn ? rr(Vn, Object) : _s, Ut = fs;
  (en && Ut(new en(new ArrayBuffer(1))) != $ || Er && Ut(new Er()) != g || ct && Ut(ct.resolve()) != b || tn && Ut(new tn()) != A || Hn && Ut(new Hn()) != _) && (Ut = function(u) {
    var p = Mt.call(u), w = p == m ? u.constructor : void 0, T = w ? je(w) : void 0;
    if (T)
      switch (T) {
        case Wn:
          return $;
        case Cr:
          return g;
        case qn:
          return b;
        case Gn:
          return A;
        case Yn:
          return _;
      }
    return p;
  });
  function ws(u) {
    var p = u.length, w = u.constructor(p);
    return p && typeof u[0] == "string" && He.call(u, "index") && (w.index = u.index, w.input = u.input), w;
  }
  function At(u) {
    return typeof u.constructor == "function" && !oa(u) ? us(it(u)) : {};
  }
  function xs(u, p, w, T) {
    var ee = u.constructor;
    switch (p) {
      case D:
        return Xn(u);
      case s:
      case l:
        return new ee(+u);
      case $:
        return kr(u, T);
      case N:
      case B:
      case M:
      case P:
      case U:
      case h:
      case y:
      case x:
      case v:
        return gs(u, T);
      case g:
        return ia(u, T, w);
      case S:
      case k:
        return new ee(u);
      case O:
        return aa(u);
      case A:
        return hs(u, T, w);
      case C:
        return ms(u);
    }
  }
  function Ss(u, p) {
    return p = p ?? i, !!p && (typeof u == "number" || H.test(u)) && u > -1 && u % 1 == 0 && u < p;
  }
  function Os(u) {
    var p = typeof u;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? u !== "__proto__" : u === null;
  }
  function As(u) {
    return !!Or && Or in u;
  }
  function oa(u) {
    var p = u && u.constructor, w = typeof p == "function" && p.prototype || Ve;
    return u === w;
  }
  function je(u) {
    if (u != null) {
      try {
        return Ar.call(u);
      } catch {
      }
      try {
        return u + "";
      } catch {
      }
    }
    return "";
  }
  function sa(u) {
    return Jn(u, !0, !0);
  }
  function la(u, p) {
    return u === p || u !== u && p !== p;
  }
  function on(u) {
    return Es(u) && He.call(u, "callee") && (!Zi.call(u, "callee") || Mt.call(u) == a);
  }
  var Zn = Array.isArray;
  function sn(u) {
    return u != null && ca(u.length) && !ei(u);
  }
  function Es(u) {
    return fa(u) && sn(u);
  }
  var ua = Zr || Cs;
  function ei(u) {
    var p = Et(u) ? Mt.call(u) : "";
    return p == f || p == d;
  }
  function ca(u) {
    return typeof u == "number" && u > -1 && u % 1 == 0 && u <= i;
  }
  function Et(u) {
    var p = typeof u;
    return !!u && (p == "object" || p == "function");
  }
  function fa(u) {
    return !!u && typeof u == "object";
  }
  function ti(u) {
    return sn(u) ? rn(u) : ps(u);
  }
  function _s() {
    return [];
  }
  function Cs() {
    return !1;
  }
  t.exports = sa;
})(fo, fo.exports);
var lx = fo.exports;
const Wt = /* @__PURE__ */ Do(lx);
var po = { exports: {} };
po.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, o = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", g = "[object Error]", S = "[object Function]", m = "[object GeneratorFunction]", b = "[object Map]", O = "[object Number]", A = "[object Null]", k = "[object Object]", C = "[object Promise]", _ = "[object Proxy]", D = "[object RegExp]", $ = "[object Set]", N = "[object String]", B = "[object Symbol]", M = "[object Undefined]", P = "[object WeakMap]", U = "[object ArrayBuffer]", h = "[object DataView]", y = "[object Float32Array]", x = "[object Float64Array]", v = "[object Int8Array]", z = "[object Int16Array]", F = "[object Int32Array]", j = "[object Uint8Array]", H = "[object Uint8ClampedArray]", Y = "[object Uint16Array]", Me = "[object Uint32Array]", Ue = /[\\^$.*+?()[\]{}|]/g, pe = /^\[object .+?Constructor\]$/, Ee = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[y] = Q[x] = Q[v] = Q[z] = Q[F] = Q[j] = Q[H] = Q[Y] = Q[Me] = !0, Q[s] = Q[l] = Q[U] = Q[f] = Q[h] = Q[d] = Q[g] = Q[S] = Q[b] = Q[O] = Q[k] = Q[D] = Q[$] = Q[N] = Q[P] = !1;
  var nt = typeof gt == "object" && gt && gt.Object === Object && gt, lt = typeof self == "object" && self && self.Object === Object && self, Se = nt || lt || Function("return this")(), Nt = e && !e.nodeType && e, tr = Nt && !0 && t && !t.nodeType && t, ut = tr && tr.exports === Nt, Lt = ut && nt.process, Ft = function() {
    try {
      return Lt && Lt.binding && Lt.binding("util");
    } catch {
    }
  }(), xr = Ft && Ft.isTypedArray;
  function Xr(u, p) {
    for (var w = -1, T = u == null ? 0 : u.length, ee = 0, G = []; ++w < T; ) {
      var re = u[w];
      p(re, w, u) && (G[ee++] = re);
    }
    return G;
  }
  function rr(u, p) {
    for (var w = -1, T = p.length, ee = u.length; ++w < T; )
      u[ee + w] = p[w];
    return u;
  }
  function Sr(u, p) {
    for (var w = -1, T = u == null ? 0 : u.length; ++w < T; )
      if (p(u[w], w, u))
        return !0;
    return !1;
  }
  function Bn(u, p) {
    for (var w = -1, T = Array(u); ++w < u; )
      T[w] = p(w);
    return T;
  }
  function zn(u) {
    return function(p) {
      return u(p);
    };
  }
  function Ve(u, p) {
    return u.has(p);
  }
  function xt(u, p) {
    return u == null ? void 0 : u[p];
  }
  function Or(u) {
    var p = -1, w = Array(u.size);
    return u.forEach(function(T, ee) {
      w[++p] = [ee, T];
    }), w;
  }
  function Ar(u, p) {
    return function(w) {
      return u(p(w));
    };
  }
  function He(u) {
    var p = -1, w = Array(u.size);
    return u.forEach(function(T) {
      w[++p] = T;
    }), w;
  }
  var Mt = Array.prototype, Qr = Function.prototype, St = Object.prototype, jt = Se["__core-js_shared__"], Un = Qr.toString, it = St.hasOwnProperty, Qi = function() {
    var u = /[^.]+$/.exec(jt && jt.keys && jt.keys.IE_PROTO || "");
    return u ? "Symbol(src)_1." + u : "";
  }(), Zi = St.toString, Ho = RegExp(
    "^" + Un.call(it).replace(Ue, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Vn = ut ? Se.Buffer : void 0, Zr = Se.Symbol, ea = Se.Uint8Array, en = St.propertyIsEnumerable, Er = Mt.splice, ct = Zr ? Zr.toStringTag : void 0, tn = Object.getOwnPropertySymbols, Hn = Vn ? Vn.isBuffer : void 0, _r = Ar(Object.keys, Object), Wn = zt(Se, "DataView"), Cr = zt(Se, "Map"), qn = zt(Se, "Promise"), Gn = zt(Se, "Set"), Yn = zt(Se, "WeakMap"), nr = zt(Object, "create"), ta = je(Wn), Bt = je(Cr), Wo = je(qn), qo = je(Gn), Go = je(Yn), ra = Zr ? Zr.prototype : void 0, Kn = ra ? ra.valueOf : void 0;
  function Te(u) {
    var p = -1, w = u == null ? 0 : u.length;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function Yo() {
    this.__data__ = nr ? nr(null) : {}, this.size = 0;
  }
  function Ko(u) {
    var p = this.has(u) && delete this.__data__[u];
    return this.size -= p ? 1 : 0, p;
  }
  function Jo(u) {
    var p = this.__data__;
    if (nr) {
      var w = p[u];
      return w === n ? void 0 : w;
    }
    return it.call(p, u) ? p[u] : void 0;
  }
  function Xo(u) {
    var p = this.__data__;
    return nr ? p[u] !== void 0 : it.call(p, u);
  }
  function Qo(u, p) {
    var w = this.__data__;
    return this.size += this.has(u) ? 0 : 1, w[u] = nr && p === void 0 ? n : p, this;
  }
  Te.prototype.clear = Yo, Te.prototype.delete = Ko, Te.prototype.get = Jo, Te.prototype.has = Xo, Te.prototype.set = Qo;
  function De(u) {
    var p = -1, w = u == null ? 0 : u.length;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function Zo() {
    this.__data__ = [], this.size = 0;
  }
  function es(u) {
    var p = this.__data__, w = an(p, u);
    if (w < 0)
      return !1;
    var T = p.length - 1;
    return w == T ? p.pop() : Er.call(p, w, 1), --this.size, !0;
  }
  function ts(u) {
    var p = this.__data__, w = an(p, u);
    return w < 0 ? void 0 : p[w][1];
  }
  function rs(u) {
    return an(this.__data__, u) > -1;
  }
  function ns(u, p) {
    var w = this.__data__, T = an(w, u);
    return T < 0 ? (++this.size, w.push([u, p])) : w[T][1] = p, this;
  }
  De.prototype.clear = Zo, De.prototype.delete = es, De.prototype.get = ts, De.prototype.has = rs, De.prototype.set = ns;
  function We(u) {
    var p = -1, w = u == null ? 0 : u.length;
    for (this.clear(); ++p < w; ) {
      var T = u[p];
      this.set(T[0], T[1]);
    }
  }
  function is() {
    this.size = 0, this.__data__ = {
      hash: new Te(),
      map: new (Cr || De)(),
      string: new Te()
    };
  }
  function as(u) {
    var p = ft(this, u).delete(u);
    return this.size -= p ? 1 : 0, p;
  }
  function os(u) {
    return ft(this, u).get(u);
  }
  function ss(u) {
    return ft(this, u).has(u);
  }
  function ls(u, p) {
    var w = ft(this, u), T = w.size;
    return w.set(u, p), this.size += w.size == T ? 0 : 1, this;
  }
  We.prototype.clear = is, We.prototype.delete = as, We.prototype.get = os, We.prototype.has = ss, We.prototype.set = ls;
  function rn(u) {
    var p = -1, w = u == null ? 0 : u.length;
    for (this.__data__ = new We(); ++p < w; )
      this.add(u[p]);
  }
  function na(u) {
    return this.__data__.set(u, n), this;
  }
  function nn(u) {
    return this.__data__.has(u);
  }
  rn.prototype.add = rn.prototype.push = na, rn.prototype.has = nn;
  function Ot(u) {
    var p = this.__data__ = new De(u);
    this.size = p.size;
  }
  function Jn() {
    this.__data__ = new De(), this.size = 0;
  }
  function us(u) {
    var p = this.__data__, w = p.delete(u);
    return this.size = p.size, w;
  }
  function cs(u) {
    return this.__data__.get(u);
  }
  function fs(u) {
    return this.__data__.has(u);
  }
  function ds(u, p) {
    var w = this.__data__;
    if (w instanceof De) {
      var T = w.__data__;
      if (!Cr || T.length < r - 1)
        return T.push([u, p]), this.size = ++w.size, this;
      w = this.__data__ = new We(T);
    }
    return w.set(u, p), this.size = w.size, this;
  }
  Ot.prototype.clear = Jn, Ot.prototype.delete = us, Ot.prototype.get = cs, Ot.prototype.has = fs, Ot.prototype.set = ds;
  function ps(u, p) {
    var w = on(u), T = !w && la(u), ee = !w && !T && sn(u), G = !w && !T && !ee && fa(u), re = w || T || ee || G, oe = re ? Bn(u.length, String) : [], Oe = oe.length;
    for (var ue in u)
      (p || it.call(u, ue)) && !(re && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ue == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ee && (ue == "offset" || ue == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      G && (ue == "buffer" || ue == "byteLength" || ue == "byteOffset") || // Skip index properties.
      xs(ue, Oe))) && oe.push(ue);
    return oe;
  }
  function an(u, p) {
    for (var w = u.length; w--; )
      if (sa(u[w][0], p))
        return w;
    return -1;
  }
  function Xn(u, p, w) {
    var T = p(u);
    return on(u) ? T : rr(T, w(u));
  }
  function kr(u) {
    return u == null ? u === void 0 ? M : A : ct && ct in Object(u) ? Ut(u) : oa(u);
  }
  function ia(u) {
    return Et(u) && kr(u) == s;
  }
  function aa(u, p, w, T, ee) {
    return u === p ? !0 : u == null || p == null || !Et(u) && !Et(p) ? u !== u && p !== p : hs(u, p, w, T, aa, ee);
  }
  function hs(u, p, w, T, ee, G) {
    var re = on(u), oe = on(p), Oe = re ? l : At(u), ue = oe ? l : At(p);
    Oe = Oe == s ? k : Oe, ue = ue == s ? k : ue;
    var Re = Oe == k, qe = ue == k, _e = Oe == ue;
    if (_e && sn(u)) {
      if (!sn(p))
        return !1;
      re = !0, Re = !1;
    }
    if (_e && !Re)
      return G || (G = new Ot()), re || fa(u) ? Qn(u, p, w, T, ee, G) : vs(u, p, Oe, w, T, ee, G);
    if (!(w & i)) {
      var Ne = Re && it.call(u, "__wrapped__"), $e = qe && it.call(p, "__wrapped__");
      if (Ne || $e) {
        var ir = Ne ? u.value() : u, Vt = $e ? p.value() : p;
        return G || (G = new Ot()), ee(ir, Vt, w, T, G);
      }
    }
    return _e ? (G || (G = new Ot()), bs(u, p, w, T, ee, G)) : !1;
  }
  function ms(u) {
    if (!ca(u) || Os(u))
      return !1;
    var p = ua(u) ? Ho : pe;
    return p.test(je(u));
  }
  function gs(u) {
    return Et(u) && ei(u.length) && !!Q[kr(u)];
  }
  function ys(u) {
    if (!As(u))
      return _r(u);
    var p = [];
    for (var w in Object(u))
      it.call(u, w) && w != "constructor" && p.push(w);
    return p;
  }
  function Qn(u, p, w, T, ee, G) {
    var re = w & i, oe = u.length, Oe = p.length;
    if (oe != Oe && !(re && Oe > oe))
      return !1;
    var ue = G.get(u);
    if (ue && G.get(p))
      return ue == p;
    var Re = -1, qe = !0, _e = w & a ? new rn() : void 0;
    for (G.set(u, p), G.set(p, u); ++Re < oe; ) {
      var Ne = u[Re], $e = p[Re];
      if (T)
        var ir = re ? T($e, Ne, Re, p, u, G) : T(Ne, $e, Re, u, p, G);
      if (ir !== void 0) {
        if (ir)
          continue;
        qe = !1;
        break;
      }
      if (_e) {
        if (!Sr(p, function(Vt, Tr) {
          if (!Ve(_e, Tr) && (Ne === Vt || ee(Ne, Vt, w, T, G)))
            return _e.push(Tr);
        })) {
          qe = !1;
          break;
        }
      } else if (!(Ne === $e || ee(Ne, $e, w, T, G))) {
        qe = !1;
        break;
      }
    }
    return G.delete(u), G.delete(p), qe;
  }
  function vs(u, p, w, T, ee, G, re) {
    switch (w) {
      case h:
        if (u.byteLength != p.byteLength || u.byteOffset != p.byteOffset)
          return !1;
        u = u.buffer, p = p.buffer;
      case U:
        return !(u.byteLength != p.byteLength || !G(new ea(u), new ea(p)));
      case f:
      case d:
      case O:
        return sa(+u, +p);
      case g:
        return u.name == p.name && u.message == p.message;
      case D:
      case N:
        return u == p + "";
      case b:
        var oe = Or;
      case $:
        var Oe = T & i;
        if (oe || (oe = He), u.size != p.size && !Oe)
          return !1;
        var ue = re.get(u);
        if (ue)
          return ue == p;
        T |= a, re.set(u, p);
        var Re = Qn(oe(u), oe(p), T, ee, G, re);
        return re.delete(u), Re;
      case B:
        if (Kn)
          return Kn.call(u) == Kn.call(p);
    }
    return !1;
  }
  function bs(u, p, w, T, ee, G) {
    var re = w & i, oe = Pr(u), Oe = oe.length, ue = Pr(p), Re = ue.length;
    if (Oe != Re && !re)
      return !1;
    for (var qe = Oe; qe--; ) {
      var _e = oe[qe];
      if (!(re ? _e in p : it.call(p, _e)))
        return !1;
    }
    var Ne = G.get(u);
    if (Ne && G.get(p))
      return Ne == p;
    var $e = !0;
    G.set(u, p), G.set(p, u);
    for (var ir = re; ++qe < Oe; ) {
      _e = oe[qe];
      var Vt = u[_e], Tr = p[_e];
      if (T)
        var sc = re ? T(Tr, Vt, _e, p, u, G) : T(Vt, Tr, _e, u, p, G);
      if (!(sc === void 0 ? Vt === Tr || ee(Vt, Tr, w, T, G) : sc)) {
        $e = !1;
        break;
      }
      ir || (ir = _e == "constructor");
    }
    if ($e && !ir) {
      var da = u.constructor, pa = p.constructor;
      da != pa && "constructor" in u && "constructor" in p && !(typeof da == "function" && da instanceof da && typeof pa == "function" && pa instanceof pa) && ($e = !1);
    }
    return G.delete(u), G.delete(p), $e;
  }
  function Pr(u) {
    return Xn(u, ti, ws);
  }
  function ft(u, p) {
    var w = u.__data__;
    return Ss(p) ? w[typeof p == "string" ? "string" : "hash"] : w.map;
  }
  function zt(u, p) {
    var w = xt(u, p);
    return ms(w) ? w : void 0;
  }
  function Ut(u) {
    var p = it.call(u, ct), w = u[ct];
    try {
      u[ct] = void 0;
      var T = !0;
    } catch {
    }
    var ee = Zi.call(u);
    return T && (p ? u[ct] = w : delete u[ct]), ee;
  }
  var ws = tn ? function(u) {
    return u == null ? [] : (u = Object(u), Xr(tn(u), function(p) {
      return en.call(u, p);
    }));
  } : _s, At = kr;
  (Wn && At(new Wn(new ArrayBuffer(1))) != h || Cr && At(new Cr()) != b || qn && At(qn.resolve()) != C || Gn && At(new Gn()) != $ || Yn && At(new Yn()) != P) && (At = function(u) {
    var p = kr(u), w = p == k ? u.constructor : void 0, T = w ? je(w) : "";
    if (T)
      switch (T) {
        case ta:
          return h;
        case Bt:
          return b;
        case Wo:
          return C;
        case qo:
          return $;
        case Go:
          return P;
      }
    return p;
  });
  function xs(u, p) {
    return p = p ?? o, !!p && (typeof u == "number" || Ee.test(u)) && u > -1 && u % 1 == 0 && u < p;
  }
  function Ss(u) {
    var p = typeof u;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? u !== "__proto__" : u === null;
  }
  function Os(u) {
    return !!Qi && Qi in u;
  }
  function As(u) {
    var p = u && u.constructor, w = typeof p == "function" && p.prototype || St;
    return u === w;
  }
  function oa(u) {
    return Zi.call(u);
  }
  function je(u) {
    if (u != null) {
      try {
        return Un.call(u);
      } catch {
      }
      try {
        return u + "";
      } catch {
      }
    }
    return "";
  }
  function sa(u, p) {
    return u === p || u !== u && p !== p;
  }
  var la = ia(function() {
    return arguments;
  }()) ? ia : function(u) {
    return Et(u) && it.call(u, "callee") && !en.call(u, "callee");
  }, on = Array.isArray;
  function Zn(u) {
    return u != null && ei(u.length) && !ua(u);
  }
  var sn = Hn || Cs;
  function Es(u, p) {
    return aa(u, p);
  }
  function ua(u) {
    if (!ca(u))
      return !1;
    var p = kr(u);
    return p == S || p == m || p == c || p == _;
  }
  function ei(u) {
    return typeof u == "number" && u > -1 && u % 1 == 0 && u <= o;
  }
  function ca(u) {
    var p = typeof u;
    return u != null && (p == "object" || p == "function");
  }
  function Et(u) {
    return u != null && typeof u == "object";
  }
  var fa = xr ? zn(xr) : gs;
  function ti(u) {
    return Zn(u) ? ps(u) : ys(u);
  }
  function _s() {
    return [];
  }
  function Cs() {
    return !1;
  }
  t.exports = Es;
})(po, po.exports);
var ux = po.exports;
const cx = /* @__PURE__ */ Do(ux);
function fx(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, i = r ? Nr.restore(r) : null, a = Wt(typeof n == "object" ? n : n()), o = null, s = null, l = (f) => f, c = su({ ...i ? i.data : Wt(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((f, d) => (f[d] = this[d], f), {});
  }, transform(f) {
    return l = f, this;
  }, defaults(f, d) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? a = this.data() : a = Object.assign({}, Wt(a), typeof f == "string" ? { [f]: d } : f), this;
  }, reset(...f) {
    let d = Wt(typeof n == "object" ? a : n()), g = Wt(d);
    return f.length === 0 ? (a = g, Object.assign(this, d)) : Object.keys(d).filter((S) => f.includes(S)).forEach((S) => {
      a[S] = g[S], this[S] = d[S];
    }), this;
  }, setError(f, d) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: d } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((d, g) => ({ ...d, ...f.length > 0 && !f.includes(g) ? { [g]: this.errors[g] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, d, g = {}) {
    let S = l(this.data()), m = { ...g, onCancelToken: (b) => {
      if (o = b, g.onCancelToken)
        return g.onCancelToken(b);
    }, onBefore: (b) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), g.onBefore)
        return g.onBefore(b);
    }, onStart: (b) => {
      if (this.processing = !0, g.onStart)
        return g.onStart(b);
    }, onProgress: (b) => {
      if (this.progress = b, g.onProgress)
        return g.onProgress(b);
    }, onSuccess: async (b) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let O = g.onSuccess ? await g.onSuccess(b) : null;
      return a = Wt(this.data()), this.isDirty = !1, O;
    }, onError: (b) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(b), g.onError)
        return g.onError(b);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, g.onCancel)
        return g.onCancel();
    }, onFinish: (b) => {
      if (this.processing = !1, this.progress = null, o = null, g.onFinish)
        return g.onFinish(b);
    } };
    f === "delete" ? Nr.delete(d, { ...m, data: S }) : Nr[f](d, S, m);
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
  return Lr(c, (f) => {
    c.isDirty = !cx(c.data(), a), r && Nr.remember(Wt(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var Ke = ce(null), Pt = ce(null), qs = Tm(null), _a = ce(null), Pf = null;
qr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  Ke.value = e ? lc(e) : null, Pt.value = t, _a.value = null;
  let a = typeof window > "u";
  return Pf = sx(a, n, i), a || (Nr.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    Ke.value = lc(o.component), Pt.value = o.page, _a.value = o.preserveState ? _a.value : Date.now();
  } }), Nr.on("navigate", () => Pf.forceUpdate())), () => {
    if (Ke.value) {
      Ke.value.inheritAttrs = !!Ke.value.inheritAttrs;
      let o = pr(Ke.value, { ...Pt.value.props, key: _a.value });
      return qs.value && (Ke.value.layout = qs.value, qs.value = null), Ke.value.layout ? typeof Ke.value.layout == "function" ? Ke.value.layout(pr, o) : (Array.isArray(Ke.value.layout) ? Ke.value.layout : [Ke.value.layout]).concat(o).reverse().reduce((s, l) => (l.inheritAttrs = !!l.inheritAttrs, pr(l, { ...Pt.value.props }, () => s))) : o;
    }
  };
} });
function dx() {
  return su({ props: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.props;
  }), url: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.url;
  }), component: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.component;
  }), version: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.version;
  }), scrollRegions: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: le(() => {
    var t;
    return (t = Pt.value) == null ? void 0 : t.rememberedState;
  }) });
}
qr({ props: { title: { type: String, required: !1 } }, data() {
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
qr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), i = t.method.toLowerCase(), [a, o] = Lu(i, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && i !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${a}" method="${i}" as="button">...</Link>`), pr(t.as, { ...r, ...n === "a" ? { href: a } : {}, onClick: (s) => {
      Gp(s) && (s.preventDefault(), Nr.visit(a, { data: o, method: i, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? i !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function gC(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function px(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function yC(t) {
  return dx().props.auth.permissions.includes(t);
}
let Ll = null;
function vC(t) {
  Ll = t;
}
function Hi() {
  return Ll === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Ll;
}
const yt = qr({
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
      const n = Hi(), i = t.as.toLowerCase(), a = t.method.toLowerCase(), [o, s] = Lu(
        a,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${a}" as="button">...</Link>`
      ), pr(
        t.as,
        {
          ...r,
          ...i === "a" ? { href: o } : {},
          onClick: (l) => {
            Gp(l) && (l.preventDefault(), n.visit(o, {
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
function Wi(t, e, r, n) {
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
    function l(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function qi(t, e) {
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
      return l([c, f]);
    };
  }
  function l(c) {
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
function hx(t, e) {
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
function mx() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(hx(arguments[e]));
  return t;
}
var gx = /* @__PURE__ */ new Map([
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
function Ro(t, e) {
  var r = yx(t);
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
function yx(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), i = gx.get(n);
    i && Object.defineProperty(t, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var vx = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function bx(t) {
  return Wi(this, void 0, void 0, function() {
    return qi(this, function(e) {
      return [2, wx(t) && t.dataTransfer ? Ox(t.dataTransfer, t.type) : xx(t)];
    });
  });
}
function wx(t) {
  return !!t.dataTransfer;
}
function xx(t) {
  var e = Sx(t.target) ? t.target.files ? Fl(t.target.files) : [] : [];
  return e.map(function(r) {
    return Ro(r);
  });
}
function Sx(t) {
  return t !== null;
}
function Ox(t, e) {
  return Wi(this, void 0, void 0, function() {
    var r, n;
    return qi(this, function(i) {
      switch (i.label) {
        case 0:
          return t.items ? (r = Fl(t.items).filter(function(a) {
            return a.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(Ax))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, Tf(Yp(n))];
        case 2:
          return [2, Tf(Fl(t.files).map(function(a) {
            return Ro(a);
          }))];
      }
    });
  });
}
function Tf(t) {
  return t.filter(function(e) {
    return vx.indexOf(e.name) === -1;
  });
}
function Fl(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function Ax(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return $f(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? Kp(e) : $f(t);
}
function Yp(t) {
  return t.reduce(function(e, r) {
    return mx(e, Array.isArray(r) ? Yp(r) : [r]);
  }, []);
}
function $f(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Ro(e);
  return Promise.resolve(r);
}
function Ex(t) {
  return Wi(this, void 0, void 0, function() {
    return qi(this, function(e) {
      return [2, t.isDirectory ? Kp(t) : _x(t)];
    });
  });
}
function Kp(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var i = [];
    function a() {
      var o = this;
      e.readEntries(function(s) {
        return Wi(o, void 0, void 0, function() {
          var l, c, f;
          return qi(this, function(d) {
            switch (d.label) {
              case 0:
                if (s.length)
                  return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return l = d.sent(), r(l), [3, 4];
              case 3:
                return c = d.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(s.map(Ex)), i.push(f), a(), d.label = 6;
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
function _x(t) {
  return Wi(this, void 0, void 0, function() {
    return qi(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(i) {
          var a = Ro(i, t.fullPath);
          r(a);
        }, function(i) {
          n(i);
        });
      })];
    });
  });
}
var Jp = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(","), n = t.name || "", i = (t.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
    return r.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : i === s;
    });
  }
  return !0;
}, Je = function() {
  return Je = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Je.apply(this, arguments);
};
function If(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Cx(t, e, r, n) {
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
    function l(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(s, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function kx(t, e) {
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
      return l([c, f]);
    };
  }
  function l(c) {
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
function Ml(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Px(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function Tx(t) {
  return t.includes("Edge/");
}
function $x(t) {
  return t === void 0 && (t = window.navigator.userAgent), Px(t) || Tx(t);
}
function Df(t) {
  t.preventDefault();
}
function Ca(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function ho(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var Ix = "file-invalid-type", Dx = "file-too-large", Rx = "file-too-small", Nx = "too-many-files", Lx = {
  code: Nx,
  message: "Too many files"
}, Fx = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: Ix,
    message: "File type must be ".concat(e)
  };
};
function oi(t) {
  return t != null;
}
var Mx = Jp.default, jx = Mx || Jp;
function Xp(t, e) {
  var r = t.type === "application/x-moz-file" || jx(t, e);
  return [r, r ? null : Fx(e)];
}
var Rf = function(t) {
  return {
    code: Dx,
    message: "File is larger than ".concat(t, " bytes")
  };
}, Nf = function(t) {
  return {
    code: Rx,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Qp(t, e, r) {
  if (oi(t.size) && t.size)
    if (oi(e) && oi(r)) {
      if (t.size > r)
        return [!1, Rf(r)];
      if (t.size < e)
        return [!1, Nf(e)];
    } else {
      if (oi(e) && t.size < e)
        return [!1, Nf(e)];
      if (oi(r) && t.size > r)
        return [!1, Rf(r)];
    }
  return [!0, null];
}
function qt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return t.some(function(a) {
      return !ho(r) && a && a.apply(void 0, Ml([r], n, !1)), ho(r);
    });
  };
}
function Bx(t) {
  var e = t.files, r = t.accept, n = t.minSize, i = t.maxSize, a = t.multiple, o = t.maxFiles;
  return !a && e.length > 1 || a && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var l = Xp(s, r)[0], c = Qp(s, n, i)[0];
    return l && c;
  });
}
var zx = {
  disabled: !1,
  getFilesFromEvent: bx,
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
function Zp(t) {
  t === void 0 && (t = {});
  var e = ce(Je(Je({}, zx), t));
  Lr(function() {
    return Je({}, t);
  }, function(P) {
    e.value = Je(Je({}, e.value), P);
  });
  var r = ce(), n = ce(), i = su({
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
    var P = e.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var U = n.value.files;
        U && !U.length && (i.isFileDialogActive = !1, typeof P == "function" && P());
      }
    }, 300);
  };
  function s() {
    i.isFocused = !0;
  }
  function l() {
    i.isFocused = !1;
  }
  function c() {
    var P = e.value.noClick;
    P || ($x() ? setTimeout(a, 0) : a());
  }
  var f = ce([]), d = function(P) {
    if (r.value) {
      var U = r.value.$el || r.value;
      U.contains(P.target) || (P.preventDefault(), f.value = []);
    }
  };
  st(function() {
    window.addEventListener("focus", o, !1);
    var P = e.value.preventDropOnDocument;
    P && (document.addEventListener("dragover", Df, !1), document.addEventListener("drop", d, !1));
  }), Ri(function() {
    window.removeEventListener("focus", o, !1);
    var P = e.value.preventDropOnDocument;
    P && (document.removeEventListener("dragover", Df), document.removeEventListener("drop", d));
  });
  function g(P) {
    var U = e.value.noDragEventsBubbling;
    U && P.stopPropagation();
  }
  function S(P) {
    return Cx(this, void 0, void 0, function() {
      var U, h, y, x, v;
      return kx(this, function(z) {
        switch (z.label) {
          case 0:
            return U = e.value, h = U.getFilesFromEvent, y = U.noDragEventsBubbling, x = U.onDragEnter, P.preventDefault(), g(P), f.value = Ml(Ml([], f.value, !0), [P.target], !1), Ca(P) ? h ? [4, h(P)] : [2] : [3, 2];
          case 1:
            if (v = z.sent(), v || (v = []), ho(P) && !y)
              return [2];
            i.draggedFiles = v, i.isDragActive = !0, x && x(P), z.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(P) {
    var U = e.value.onDragOver;
    if (P.preventDefault(), g(P), P.dataTransfer)
      try {
        P.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Ca(P) && U && U(P), !1;
  }
  function b(P) {
    P.preventDefault(), g(P);
    var U = f.value.filter(function(x) {
      if (!r.value)
        return !1;
      var v = r.value.$el || r.value;
      return v.contains(x);
    }), h = U.indexOf(P.target);
    if (h !== -1 && U.splice(h, 1), f.value = U, !(U.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var y = e.value.onDragLeave;
      Ca(P) && y && y(P);
    }
  }
  function O(P) {
    P.preventDefault(), g(P), f.value = [];
    var U = e.value, h = U.getFilesFromEvent, y = U.noDragEventsBubbling, x = U.accept, v = U.minSize, z = U.maxSize, F = U.multiple, j = U.maxFiles, H = U.onDrop, Y = U.onDropRejected, Me = U.onDropAccepted;
    if (Ca(P)) {
      if (!h)
        return;
      Promise.resolve(h(P)).then(function(Ue) {
        if (!(ho(P) && !y)) {
          var pe = [], Ee = [];
          Ue.forEach(function(Q) {
            var nt = Xp(Q, x), lt = nt[0], Se = nt[1], Nt = Qp(Q, v, z), tr = Nt[0], ut = Nt[1];
            if (lt && tr)
              pe.push(Q);
            else {
              var Lt = [Se, ut].filter(function(Ft) {
                return Ft;
              });
              Ee.push({ file: Q, errors: Lt });
            }
          }), (!F && pe.length > 1 || F && j >= 1 && pe.length > j) && (pe.forEach(function(Q) {
            Ee.push({ file: Q, errors: [Lx] });
          }), pe.splice(0)), i.acceptedFiles = pe, i.fileRejections = Ee, H && H(pe, Ee, P), Ee.length > 0 && Y && Y(Ee, P), pe.length > 0 && Me && Me(pe, P);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var A = function(P) {
    return e.value.disabled ? void 0 : P;
  }, k = function(P) {
    return e.value.noKeyboard ? void 0 : A(P);
  }, C = function(P) {
    return e.value.noDrag ? void 0 : A(P);
  }, _ = function(P) {
    P === void 0 && (P = {});
    var U = P.onFocus, h = P.onBlur, y = P.onClick, x = P.onDragEnter, v = P.onDragenter, z = P.onDragOver, F = P.onDragover, j = P.onDragLeave, H = P.onDragleave, Y = P.onDrop, Me = If(P, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Je(Je({ onFocus: k(qt(U, s)), onBlur: k(qt(h, l)), onClick: A(qt(y, c)), onDragenter: C(qt(x, v, S)), onDragover: C(qt(z, F, m)), onDragleave: C(qt(j, H, b)), onDrop: C(qt(Y, O)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), Me);
  }, D = function(P) {
    P.stopPropagation();
  };
  function $(P) {
    P === void 0 && (P = {});
    var U = P.onChange, h = P.onClick, y = If(P, ["onChange", "onClick"]), x = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: A(qt(U, O)),
      onClick: A(qt(h, D)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Je(Je({}, x), y);
  }
  var N = le(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), B = le(function() {
    return N.value > 0 && Bx({
      files: i.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), M = le(function() {
    return N.value > 0 && !B.value;
  });
  return Je(Je({}, $m(i)), { isDragAccept: B, isDragReject: M, isFocused: le(function() {
    return i.isFocused && !e.value.disabled;
  }), getRootProps: _, getInputProps: $, rootRef: r, inputRef: n, open: A(a) });
}
const Ux = { class: "flex w-full flex-col" }, Vx = {
  key: 0,
  class: "select-none text-black"
}, Hx = ["name"], Wx = {
  key: 1,
  class: "select-none"
}, qx = { key: 2 }, Gx = {
  key: 3,
  class: "select-none"
}, bC = {
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
    Hi();
    const e = t, r = ce(null), n = (c) => {
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
    }, { getRootProps: a, getInputProps: o, isDragActive: s, ...l } = Zp({
      onDrop: i,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var d;
      return E(), I("div", Ux, [
        L("div", {
          class: Z(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": q(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          L("div", xi({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, q(a)()), [
            t.label ? (E(), I("p", Vx, X(t.label), 1)) : J("", !0),
            L("input", xi(q(o)(), { name: t.field }), null, 16, Hx),
            q(s) ? (E(), I("span", Wx, "Drop the " + X(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (E(), I("span", qx, X(((d = t.form[t.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (E(), I("span", Gx, "Drag 'n' drop " + X(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        we(q(ji), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, Yx = { class: "flex w-full" }, Kx = { key: 0 }, Jx = { key: 1 }, Xx = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Qx = ["onClick"], Zx = /* @__PURE__ */ L("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), e2 = ["src"], t2 = ["value"], r2 = { class: "flex items-center gap-4" }, n2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, i2 = {
  key: 1,
  class: "mt-2"
}, a2 = /* @__PURE__ */ L("hr", null, null, -1), o2 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, s2 = { class: "-m-1 flex flex-wrap md:-m-2" }, l2 = { class: "flex w-1/3 flex-wrap" }, u2 = { class: "h-full w-full p-1 shadow md:p-2" }, c2 = ["src"], wC = {
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
    const e = Hi(), r = t, n = fx({
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
    const { getRootProps: l, getInputProps: c, ...f } = Zp({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (d, g) => (E(), I(de, null, [
      t.canUpload ? (E(), I("form", {
        key: 0,
        onSubmit: fr(i, ["prevent"]),
        class: "w-full"
      }, [
        L("div", Yx, [
          L("div", {
            class: Z(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": d.dragEneted }])
          }, [
            L("div", xi({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, q(l)()), [
              L("input", at(dt(q(c)())), null, 16),
              d.isDragActive ? (E(), I("span", Kx, "Drop the files here ...")) : (E(), I("span", Jx, "Drag 'n' drop images here"))
            ], 16),
            q(n).image.length > 0 ? (E(), I("div", Xx, [
              (E(!0), I(de, null, bt(q(n).image, (S, m) => (E(), I("div", {
                class: "relative cursor-pointer select-none",
                onClick: (b) => s(m),
                key: m
              }, [
                Zx,
                L("img", {
                  src: S.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, e2)
              ], 8, Qx))), 128))
            ])) : J("", !0)
          ], 2),
          we(q(xm), {
            class: Z(["inline rounded-l-none", { "cursor-not-allowed": q(n).image.length == 0 }]),
            disabled: q(n).image.length == 0
          }, {
            default: xe(() => [
              ve(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          q(n).progress ? (E(), I("progress", {
            key: 0,
            value: q(n).progress.percentage,
            max: "100"
          }, X(q(n).progress.percentage) + "%", 9, t2)) : J("", !0)
        ]),
        d.$page.props.errors.image ? (E(), se(q(ji), {
          key: 0,
          class: "mt-2",
          message: d.$page.props.errors.image
        }, null, 8, ["message"])) : J("", !0),
        L("div", r2, [
          we(Fr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: xe(() => [
              q(n).recentlySuccessful ? (E(), I("p", n2, "Images uploaded.")) : J("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : J("", !0),
      t.images.length ? (E(), I("div", i2, [
        a2,
        L("div", o2, [
          L("div", s2, [
            (E(!0), I(de, null, bt(t.images, (S) => (E(), I("div", l2, [
              L("div", u2, [
                L("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: S.url
                }, null, 8, c2),
                t.canUpload ? (E(), se(q(yt), {
                  key: 0,
                  href: d.route("images.delete", S.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: xe(() => [
                    ve(" Delete Image ")
                  ]),
                  _: 2
                }, 1032, ["href"])) : J("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : J("", !0)
    ], 64));
  }
}, f2 = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, d2 = ["name", "value", "id", "checked"], p2 = ["for"], xC = {
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
    return (i, a) => (E(), I("div", f2, [
      L("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, d2),
      L("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, X(t.label), 9, p2)
    ]));
  }
}, h2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Lf = {
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
  setup(t) {
    return (e, r) => {
      var n;
      return E(), se(q(xm), {
        disabled: t.loading || ((n = t.form) == null ? void 0 : n.processing) || t.disabled,
        type: t.type,
        class: "focusable"
      }, {
        default: xe(() => {
          var i, a;
          return [
            L("div", {
              class: Z({ "opacity-25": ((i = t.form) == null ? void 0 : i.processing) || t.loading })
            }, [
              K(e.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (E(), I("div", h2, [
              we(q(Sm), { class: "aspect-square !h-full !w-auto text-white" })
            ])) : J("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, m2 = ["id"], g2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, y2 = { class: "flex flex-col" }, SC = {
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
    const e = Hi(), r = t, n = ce(null), i = ce(null), a = ce(null), o = ce(null), s = () => {
      const f = n.value, d = f.getBoundingClientRect().top, g = document.querySelector("nav").offsetHeight, S = d - g, m = a.value, b = f.getBoundingClientRect().height + d - g * 2;
      if (S <= 0 && b > 0) {
        if (m.dataset.sticky === "true")
          return;
        m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${g}px`, m.style.width = i.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, l = () => {
      o.value.style.marginLeft = -i.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value)
        return;
      const f = n.value.querySelector("thead tr");
      let d = o.value;
      d.innerHTML = "";
      let g = f == null ? void 0 : f.querySelectorAll("th");
      g == null || g.forEach((m) => {
        const b = m.cloneNode(!0);
        b.style.width = m.offsetWidth + "px", d.appendChild(b);
      });
      const S = a.value;
      S.style.width = i.value.offsetWidth + "px";
    };
    return r.sticky && (e.on("navigate", () => {
      Im(() => {
        c();
      });
    }), st(() => {
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), i.value.addEventListener("scroll", l, { passive: !0 });
    }), Ri(() => {
      var f;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (f = i.value) == null || f.removeEventListener("scroll", l);
    })), (f, d) => (E(), I("div", {
      class: Z({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (E(), I("p", g2, "Found: " + X(t.total), 1)) : J("", !0),
      L("div", y2, [
        L("div", {
          class: Z({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: i
        }, [
          L("table", {
            class: Z(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": t.collapsable,
              " border-separate border-spacing-y-5 px-2": t.seperate
            }]),
            ref_key: "table",
            ref: n
          }, [
            t.sticky ? (E(), I("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: a,
              class: "fixed isolate z-50 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              L("div", {
                ref_key: "sticky_header",
                ref: o,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : J("", !0),
            K(f.$slots, "default")
          ], 2)
        ], 2)
      ]),
      t.links ? (E(), se(q(wm), {
        key: 1,
        class: "mt-6",
        links: t.links
      }, null, 8, ["links"])) : J("", !0)
    ], 10, m2));
  }
}, v2 = {}, b2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function w2(t, e) {
  return E(), I("thead", b2, [
    K(t.$slots, "default")
  ]);
}
const OC = /* @__PURE__ */ Gr(v2, [["render", w2]]), x2 = { class: "flex items-center justify-between" }, S2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, AC = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    Mi.add(Ny, Iy);
    const e = t, r = ce("asc"), n = ce(!1);
    let i = null;
    const a = Hi();
    st(() => {
      e.orderBy && (i = a.on("navigate", o));
    }), Ri(() => {
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
    }, l = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (E(), I("th", {
      scope: "col",
      class: Z(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      L("div", x2, [
        K(c.$slots, "default"),
        t.orderBy ? (E(), I("span", S2, [
          we(q(mr), {
            icon: "fa-sort-up",
            class: Z(["absolute", l("desc")])
          }, null, 8, ["class"]),
          we(q(mr), {
            icon: "fa-sort-down",
            class: Z(["absolute", l("asc")])
          }, null, 8, ["class"])
        ])) : J("", !0)
      ])
    ], 2));
  }
}, O2 = {}, A2 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function E2(t, e) {
  return E(), I("td", A2, [
    K(t.$slots, "default")
  ]);
}
const _2 = /* @__PURE__ */ Gr(O2, [["render", E2]]), C2 = ["data-te-target", "aria-controls"], EC = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (E(), I("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      K(e.$slots, "default")
    ], 8, C2));
  }
}, k2 = { colspan: "999" }, P2 = ["id"], _C = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (E(), I("tr", null, [
      L("td", k2, [
        L("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          K(e.$slots, "default")
        ], 8, P2)
      ])
    ]));
  }
};
var Fu = { exports: {} }, he = String, eh = function() {
  return { isColorSupported: !1, reset: he, bold: he, dim: he, italic: he, underline: he, inverse: he, hidden: he, strikethrough: he, black: he, red: he, green: he, yellow: he, blue: he, magenta: he, cyan: he, white: he, gray: he, bgBlack: he, bgRed: he, bgGreen: he, bgYellow: he, bgBlue: he, bgMagenta: he, bgCyan: he, bgWhite: he };
};
Fu.exports = eh();
Fu.exports.createColors = eh;
var T2 = Fu.exports;
let Ff = T2, Mf = Ye, jl = class th extends Error {
  constructor(e, r, n, i, a, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, a && (this.file = a), i && (this.source = i), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, th);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Ff.isColorSupported), Mf && e && (r = Mf(r));
    let n = r.split(/\r?\n/), i = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, n.length), o = String(a).length, s, l;
    if (e) {
      let { bold: c, gray: f, red: d } = Ff.createColors(!0);
      s = (g) => c(d(g)), l = (g) => f(g);
    } else
      s = l = (c) => c;
    return n.slice(i, a).map((c, f) => {
      let d = i + 1 + f, g = " " + (" " + d).slice(-o) + " | ";
      if (d === this.line) {
        let S = l(g.replace(/\d/g, " ")) + c.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return s(">") + l(g) + c + `
 ` + S + s("^");
      }
      return " " + l(g) + c;
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
var Mu = jl;
jl.default = jl;
var Gi = {};
Gi.isClean = Symbol("isClean");
Gi.my = Symbol("my");
const jf = {
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
function $2(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Bl = class {
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
      return jf[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + $2(n);
      this[s] ? i = this[s](o, e) : o.walk((l) => {
        if (i = l.raws[r], typeof i < "u")
          return !1;
      });
    }
    return typeof i > "u" && (i = jf[n]), o.rawCache[n] = i, i;
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
var rh = Bl;
Bl.default = Bl;
let I2 = rh;
function zl(t, e) {
  new I2(e).stringify(t);
}
var No = zl;
zl.default = zl;
let { isClean: ka, my: D2 } = Gi, R2 = Mu, N2 = rh, L2 = No;
function Ul(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let i = t[n], a = typeof i;
    n === "parent" && a === "object" ? e && (r[n] = e) : n === "source" ? r[n] = i : Array.isArray(i) ? r[n] = i.map((o) => Ul(o, r)) : (a === "object" && i !== null && (i = Ul(i)), r[n] = i);
  }
  return r;
}
let Vl = class {
  constructor(e = {}) {
    this.raws = {}, this[ka] = !1, this[D2] = !0;
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
    let r = Ul(this);
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
    return new R2(e);
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
    if (this[ka]) {
      this[ka] = !1;
      let e = this;
      for (; e = e.parent; )
        e[ka] = !1;
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
    return new N2().raw(this, e, r);
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
        n[o] = s.map((l) => typeof l == "object" && l.toJSON ? l.toJSON(null, r) : l);
      else if (typeof s == "object" && s.toJSON)
        n[o] = s.toJSON(null, r);
      else if (o === "source") {
        let l = r.get(s.input);
        l == null && (l = a, r.set(s.input, a), a++), n[o] = {
          end: s.end,
          inputId: l,
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
  toString(e = L2) {
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
var Lo = Vl;
Vl.default = Vl;
let F2 = Lo, Hl = class extends F2 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Fo = Hl;
Hl.default = Hl;
let M2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", j2 = (t, e = 21) => (r = e) => {
  let n = "", i = r;
  for (; i--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, B2 = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += M2[Math.random() * 64 | 0];
  return e;
};
var z2 = { nanoid: B2, customAlphabet: j2 };
let { SourceMapConsumer: Bf, SourceMapGenerator: zf } = Ye, { existsSync: U2, readFileSync: V2 } = Ye, { dirname: Gs, join: H2 } = Ye;
function W2(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let Wl = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, i = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = Gs(this.mapFile)), i && (this.text = i);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Bf(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, i = /^data:application\/json;charset=utf-?8,/, a = /^data:application\/json,/;
    if (i.test(e) || a.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return W2(e.substr(RegExp.lastMatch.length));
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
    if (this.root = Gs(e), U2(e))
      return this.mapFile = e, V2(e, "utf-8").toString().trim();
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
        if (r instanceof Bf)
          return zf.fromSourceMap(r).toString();
        if (r instanceof zf)
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
        return e && (n = H2(Gs(e), n)), this.loadFile(n);
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
var nh = Wl;
Wl.default = Wl;
let { SourceMapConsumer: q2, SourceMapGenerator: G2 } = Ye, { fileURLToPath: Uf, pathToFileURL: Pa } = Ye, { isAbsolute: ql, resolve: Gl } = Ye, { nanoid: Y2 } = z2, Ys = Ye, Vf = Mu, K2 = nh, Ks = Symbol("fromOffsetCache"), J2 = !!(q2 && G2), Hf = !!(Gl && ql), mo = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!Hf || /^\w+:\/\//.test(r.from) || ql(r.from) ? this.file = r.from : this.file = Gl(r.from)), Hf && J2) {
      let n = new K2(this.css, r);
      if (n.text) {
        this.map = n;
        let i = n.consumer().file;
        !this.file && i && (this.file = this.mapResolve(i));
      }
    }
    this.file || (this.id = "<input css " + Y2(6) + ">"), this.map && (this.map.file = this.from);
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
    let l = this.origin(r, n, o, s);
    return l ? a = new Vf(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      i.plugin
    ) : a = new Vf(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: s, line: o },
      this.css,
      this.file,
      i.plugin
    ), a.input = { column: n, endColumn: s, endLine: o, line: r, source: this.css }, this.file && (Pa && (a.input.url = Pa(this.file).toString()), a.input.file = this.file), a;
  }
  fromOffset(e) {
    let r, n;
    if (this[Ks])
      n = this[Ks];
    else {
      let a = this.css.split(`
`);
      n = new Array(a.length);
      let o = 0;
      for (let s = 0, l = a.length; s < l; s++)
        n[s] = o, o += a[s].length + 1;
      this[Ks] = n;
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
    return /^\w+:\/\//.test(e) ? e : Gl(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, r, n, i) {
    if (!this.map)
      return !1;
    let a = this.map.consumer(), o = a.originalPositionFor({ column: r, line: e });
    if (!o.source)
      return !1;
    let s;
    typeof n == "number" && (s = a.originalPositionFor({ column: i, line: n }));
    let l;
    ql(o.source) ? l = Pa(o.source) : l = new URL(
      o.source,
      this.map.consumer().sourceRoot || Pa(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: l.toString()
    };
    if (l.protocol === "file:")
      if (Uf)
        c.file = Uf(l);
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
var Mo = mo;
mo.default = mo;
Ys && Ys.registerInput && Ys.registerInput(mo);
let { SourceMapConsumer: ih, SourceMapGenerator: Ka } = Ye, { dirname: Ja, relative: ah, resolve: oh, sep: sh } = Ye, { pathToFileURL: Wf } = Ye, X2 = Mo, Q2 = !!(ih && Ka), Z2 = !!(Ja && oh && ah && sh), eS = class {
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
      let r = this.toUrl(this.path(e.file)), n = e.root || Ja(e.file), i;
      this.mapOpts.sourcesContent === !1 ? (i = new ih(e.text), i.sourcesContent && (i.sourcesContent = null)) : i = e.consumer(), this.map.applySourceMap(i, r, this.toUrl(this.path(n)));
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
    if (this.clearAnnotation(), Z2 && Q2 && this.isMap())
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
      e.file = this.outputFile(), this.map = Ka.fromSourceMap(e);
    } else
      this.map = new Ka({ file: this.outputFile() }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new Ka({ file: this.outputFile() });
    let e = 1, r = 1, n = "<no source>", i = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, a, o;
    this.stringify(this.root, (s, l, c) => {
      if (this.css += s, l && c !== "end" && (i.generated.line = e, i.generated.column = r - 1, l.source && l.source.start ? (i.source = this.sourcePath(l), i.original.line = l.source.start.line, i.original.column = l.source.start.column - 1, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, this.map.addMapping(i))), a = s.match(/\n/g), a ? (e += a.length, o = s.lastIndexOf(`
`), r = s.length - o) : r += s.length, l && c !== "start") {
        let f = l.parent || { raws: {} };
        (!(l.type === "decl" || l.type === "atrule" && !l.nodes) || l !== f.last || f.raws.semicolon) && (l.source && l.source.end ? (i.source = this.sourcePath(l), i.original.line = l.source.end.line, i.original.column = l.source.end.column - 1, i.generated.line = e, i.generated.column = r - 2, this.map.addMapping(i)) : (i.source = n, i.original.line = 1, i.original.column = 0, i.generated.line = e, i.generated.column = r - 1, this.map.addMapping(i)));
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
    let n = this.opts.to ? Ja(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = Ja(oh(n, this.mapOpts.annotation)));
    let i = ah(n, e);
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
        let e = new X2(this.originalCSS, this.opts);
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
    if (Wf) {
      let n = Wf(e).toString();
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
    sh === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var lh = eS;
let tS = Lo, Yl = class extends tS {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var jo = Yl;
Yl.default = Yl;
let { isClean: uh, my: ch } = Gi, fh = Fo, dh = jo, rS = Lo, ph, ju, Bu, hh;
function mh(t) {
  return t.map((e) => (e.nodes && (e.nodes = mh(e.nodes)), delete e.source, e));
}
function gh(t) {
  if (t[uh] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      gh(e);
}
let Qt = class yh extends rS {
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
      e = mh(ph(e).nodes);
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
      typeof e.value != "string" && (e.value = String(e.value)), e = [new fh(e)];
    } else if (e.selector)
      e = [new ju(e)];
    else if (e.name)
      e = [new Bu(e)];
    else if (e.text)
      e = [new dh(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((i) => (i[ch] || yh.rebuild(i), i = i.proxyOf, i.parent && i.parent.removeChild(i), i[uh] && gh(i), typeof i.raws.before > "u" && r && typeof r.raws.before < "u" && (i.raws.before = r.raws.before.replace(/\S/g, "")), i.parent = this.proxyOf, i));
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
Qt.registerParse = (t) => {
  ph = t;
};
Qt.registerRule = (t) => {
  ju = t;
};
Qt.registerAtRule = (t) => {
  Bu = t;
};
Qt.registerRoot = (t) => {
  hh = t;
};
var Kr = Qt;
Qt.default = Qt;
Qt.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Bu.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, ju.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, fh.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, dh.prototype) : t.type === "root" && Object.setPrototypeOf(t, hh.prototype), t[ch] = !0, t.nodes && t.nodes.forEach((e) => {
    Qt.rebuild(e);
  });
};
let nS = Kr, vh, bh, Pi = class extends nS {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new vh(new bh(), this, e).stringify();
  }
};
Pi.registerLazyResult = (t) => {
  vh = t;
};
Pi.registerProcessor = (t) => {
  bh = t;
};
var zu = Pi;
Pi.default = Pi;
let qf = {};
var wh = function(e) {
  qf[e] || (qf[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Kl = class {
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
var xh = Kl;
Kl.default = Kl;
let iS = xh, Jl = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new iS(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Uu = Jl;
Jl.default = Jl;
const Js = "'".charCodeAt(0), Gf = '"'.charCodeAt(0), Ta = "\\".charCodeAt(0), Yf = "/".charCodeAt(0), $a = `
`.charCodeAt(0), si = " ".charCodeAt(0), Ia = "\f".charCodeAt(0), Da = "	".charCodeAt(0), Ra = "\r".charCodeAt(0), aS = "[".charCodeAt(0), oS = "]".charCodeAt(0), sS = "(".charCodeAt(0), lS = ")".charCodeAt(0), uS = "{".charCodeAt(0), cS = "}".charCodeAt(0), fS = ";".charCodeAt(0), dS = "*".charCodeAt(0), pS = ":".charCodeAt(0), hS = "@".charCodeAt(0), Na = /[\t\n\f\r "#'()/;[\\\]{}]/g, La = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, mS = /.[\r\n"'(/\\]/, Kf = /[\da-f]/i;
var gS = function(e, r = {}) {
  let n = e.css.valueOf(), i = r.ignoreErrors, a, o, s, l, c, f, d, g, S, m, b = n.length, O = 0, A = [], k = [];
  function C() {
    return O;
  }
  function _(B) {
    throw e.error("Unclosed " + B, O);
  }
  function D() {
    return k.length === 0 && O >= b;
  }
  function $(B) {
    if (k.length)
      return k.pop();
    if (O >= b)
      return;
    let M = B ? B.ignoreUnclosed : !1;
    switch (a = n.charCodeAt(O), a) {
      case $a:
      case si:
      case Da:
      case Ra:
      case Ia: {
        o = O;
        do
          o += 1, a = n.charCodeAt(o);
        while (a === si || a === $a || a === Da || a === Ra || a === Ia);
        m = ["space", n.slice(O, o)], O = o - 1;
        break;
      }
      case aS:
      case oS:
      case uS:
      case cS:
      case pS:
      case fS:
      case lS: {
        let P = String.fromCharCode(a);
        m = [P, P, O];
        break;
      }
      case sS: {
        if (g = A.length ? A.pop()[1] : "", S = n.charCodeAt(O + 1), g === "url" && S !== Js && S !== Gf && S !== si && S !== $a && S !== Da && S !== Ia && S !== Ra) {
          o = O;
          do {
            if (f = !1, o = n.indexOf(")", o + 1), o === -1)
              if (i || M) {
                o = O;
                break;
              } else
                _("bracket");
            for (d = o; n.charCodeAt(d - 1) === Ta; )
              d -= 1, f = !f;
          } while (f);
          m = ["brackets", n.slice(O, o + 1), O, o], O = o;
        } else
          o = n.indexOf(")", O + 1), l = n.slice(O, o + 1), o === -1 || mS.test(l) ? m = ["(", "(", O] : (m = ["brackets", l, O, o], O = o);
        break;
      }
      case Js:
      case Gf: {
        s = a === Js ? "'" : '"', o = O;
        do {
          if (f = !1, o = n.indexOf(s, o + 1), o === -1)
            if (i || M) {
              o = O + 1;
              break;
            } else
              _("string");
          for (d = o; n.charCodeAt(d - 1) === Ta; )
            d -= 1, f = !f;
        } while (f);
        m = ["string", n.slice(O, o + 1), O, o], O = o;
        break;
      }
      case hS: {
        Na.lastIndex = O + 1, Na.test(n), Na.lastIndex === 0 ? o = n.length - 1 : o = Na.lastIndex - 2, m = ["at-word", n.slice(O, o + 1), O, o], O = o;
        break;
      }
      case Ta: {
        for (o = O, c = !0; n.charCodeAt(o + 1) === Ta; )
          o += 1, c = !c;
        if (a = n.charCodeAt(o + 1), c && a !== Yf && a !== si && a !== $a && a !== Da && a !== Ra && a !== Ia && (o += 1, Kf.test(n.charAt(o)))) {
          for (; Kf.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === si && (o += 1);
        }
        m = ["word", n.slice(O, o + 1), O, o], O = o;
        break;
      }
      default: {
        a === Yf && n.charCodeAt(O + 1) === dS ? (o = n.indexOf("*/", O + 2) + 1, o === 0 && (i || M ? o = n.length : _("comment")), m = ["comment", n.slice(O, o + 1), O, o], O = o) : (La.lastIndex = O + 1, La.test(n), La.lastIndex === 0 ? o = n.length - 1 : o = La.lastIndex - 2, m = ["word", n.slice(O, o + 1), O, o], A.push(m), O = o);
        break;
      }
    }
    return O++, m;
  }
  function N(B) {
    k.push(B);
  }
  return {
    back: N,
    endOfFile: D,
    nextToken: $,
    position: C
  };
};
let Sh = Kr, go = class extends Sh {
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
var Vu = go;
go.default = go;
Sh.registerAtRule(go);
let Oh = Kr, Ah, Eh, Cn = class extends Oh {
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
    return new Ah(new Eh(), this, e).stringify();
  }
};
Cn.registerLazyResult = (t) => {
  Ah = t;
};
Cn.registerProcessor = (t) => {
  Eh = t;
};
var Yi = Cn;
Cn.default = Cn;
Oh.registerRoot(Cn);
let Ti = {
  comma(t) {
    return Ti.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return Ti.split(t, e);
  },
  split(t, e, r) {
    let n = [], i = "", a = !1, o = 0, s = !1, l = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === l && (s = !1) : f === '"' || f === "'" ? (s = !0, l = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (a = !0), a ? (i !== "" && n.push(i.trim()), i = "", a = !1) : i += f;
    return (r || i !== "") && n.push(i.trim()), n;
  }
};
var _h = Ti;
Ti.default = Ti;
let Ch = Kr, yS = _h, yo = class extends Ch {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return yS.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Hu = yo;
yo.default = yo;
Ch.registerRule(yo);
let vS = Fo, bS = gS, wS = jo, xS = Vu, SS = Yi, Jf = Hu;
const Xf = {
  empty: !0,
  space: !0
};
function OS(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let AS = class {
  constructor(e) {
    this.input = e, this.root = new SS(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new xS();
    r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
    let n, i, a, o = !1, s = !1, l = [], c = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), n = e[0], n === "(" || n === "[" ? c.push(n === "(" ? ")" : "]") : n === "{" && c.length > 0 ? c.push("}") : n === c[c.length - 1] && c.pop(), c.length === 0)
        if (n === ";") {
          r.source.end = this.getPosition(e[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (n === "{") {
          s = !0;
          break;
        } else if (n === "}") {
          if (l.length > 0) {
            for (a = l.length - 1, i = l[a]; i && i[0] === "space"; )
              i = l[--a];
            i && (r.source.end = this.getPosition(i[3] || i[2]), r.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          l.push(e);
      else
        l.push(e);
      if (this.tokenizer.endOfFile()) {
        o = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(l), l.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(l), this.raw(r, "params", l), o && (e = l[l.length - 1], r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), s && (r.nodes = [], this.current = r);
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
    let r = new wS();
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
    this.tokenizer = bS(this.input);
  }
  decl(e, r) {
    let n = new vS();
    this.init(n, e[0][2]);
    let i = e[e.length - 1];
    for (i[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      i[3] || i[2] || OS(e)
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
    let r = new Jf();
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
    let r = !1, n = null, i = !1, a = null, o = [], s = e[1].startsWith("--"), l = [], c = e;
    for (; c; ) {
      if (n = c[0], l.push(c), n === "(" || n === "[")
        a || (a = c), o.push(n === "(" ? ")" : "]");
      else if (s && i && n === "{")
        a || (a = c), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (i) {
            this.decl(l, s);
            return;
          } else
            break;
        else if (n === "{") {
          this.rule(l);
          return;
        } else if (n === "}") {
          this.tokenizer.back(l.pop()), r = !0;
          break;
        } else
          n === ":" && (i = !0);
      else
        n === o[o.length - 1] && (o.pop(), o.length === 0 && (a = null));
      c = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), o.length > 0 && this.unclosedBracket(a), r && i) {
      if (!s)
        for (; l.length && (c = l[l.length - 1][0], !(c !== "space" && c !== "comment")); )
          this.tokenizer.back(l.pop());
      this.decl(l, s);
    } else
      this.unknownWord(l);
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
    let a, o, s = n.length, l = "", c = !0, f, d;
    for (let g = 0; g < s; g += 1)
      a = n[g], o = a[0], o === "space" && g === s - 1 && !i ? c = !1 : o === "comment" ? (d = n[g - 1] ? n[g - 1][0] : "empty", f = n[g + 1] ? n[g + 1][0] : "empty", !Xf[d] && !Xf[f] ? l.slice(-1) === "," ? c = !1 : l += a[1] : c = !1) : l += a[1];
    if (!c) {
      let g = n.reduce((S, m) => S + m[1], "");
      e.raws[r] = { raw: g, value: l };
    }
    e[r] = l;
  }
  rule(e) {
    e.pop();
    let r = new Jf();
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
var ES = AS;
let _S = Kr, CS = ES, kS = Mo;
function vo(t, e) {
  let r = new kS(t, e), n = new CS(r);
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
var Wu = vo;
vo.default = vo;
_S.registerParse(vo);
let { isClean: Ct, my: PS } = Gi, TS = lh, $S = No, IS = Kr, DS = zu, RS = wh, Qf = Uu, NS = Wu, LS = Yi;
const FS = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, MS = {
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
}, jS = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, kn = 0;
function li(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function kh(t) {
  let e = !1, r = FS[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    kn,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, kn, r + "Exit"] : [r, r + "Exit"];
}
function Zf(t) {
  let e;
  return t.type === "document" ? e = ["Document", kn, "DocumentExit"] : t.type === "root" ? e = ["Root", kn, "RootExit"] : e = kh(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function Xl(t) {
  return t[Ct] = !1, t.nodes && t.nodes.forEach((e) => Xl(e)), t;
}
let Ql = {}, Pn = class Ph {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let i;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      i = Xl(r);
    else if (r instanceof Ph || r instanceof Qf)
      i = Xl(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let a = NS;
      n.syntax && (a = n.syntax.parse), n.parser && (a = n.parser), a.parse && (a = a.parse);
      try {
        i = a(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      i && !i[PS] && IS.rebuild(i);
    }
    this.result = new Qf(e, i, n), this.helpers = { ...Ql, postcss: Ql, result: this.result }, this.plugins = this.processor.plugins.map((a) => typeof a == "object" && a.prepare ? { ...a, ...a.prepare(this.result) } : a);
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
        let i = n.postcssPlugin, a = n.postcssVersion, o = this.result.processor.version, s = a.split("."), l = o.split(".");
        (s[0] !== l[0] || parseInt(s[1]) > parseInt(l[1])) && console.error(
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
          if (!MS[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!jS[n])
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
      if (li(n))
        try {
          await n;
        } catch (i) {
          throw this.handleError(i);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Ct]; ) {
        e[Ct] = !0;
        let r = [Zf(e)];
        for (; r.length > 0; ) {
          let n = this.visitTick(r);
          if (li(n))
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
          return li(r[0]) ? Promise.all(r) : r;
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
    let e = this.result.opts, r = $S;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let i = new TS(r, this.result.root, this.result.opts).generate();
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
      if (li(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Ct]; )
        e[Ct] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || RS(
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
      if (li(a))
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
      } catch (l) {
        throw this.handleError(l, n);
      }
    }
    if (r.iterator !== 0) {
      let o = r.iterator, s;
      for (; s = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !s[Ct]) {
          s[Ct] = !0, e.push(Zf(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let a = r.events;
    for (; r.eventIndex < a.length; ) {
      let o = a[r.eventIndex];
      if (r.eventIndex += 1, o === kn) {
        n.nodes && n.nodes.length && (n[Ct] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[Ct] = !0;
    let r = kh(e);
    for (let n of r)
      if (n === kn)
        e.nodes && e.each((i) => {
          i[Ct] || this.walkSync(i);
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
Pn.registerPostcss = (t) => {
  Ql = t;
};
var Th = Pn;
Pn.default = Pn;
LS.registerLazyResult(Pn);
DS.registerLazyResult(Pn);
let BS = lh, zS = No, US = wh, VS = Wu;
const HS = Uu;
let Zl = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let i, a = zS;
    this.result = new HS(this._processor, i, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new BS(a, i, this._opts, r);
    if (s.isMap()) {
      let [l, c] = s.generate();
      l && (this.result.css = l), c && (this.result.map = c);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || US(
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
    let e, r = VS;
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
var WS = Zl;
Zl.default = Zl;
let qS = WS, GS = Th, YS = zu, KS = Yi, $i = class {
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
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new qS(this, e, r) : new GS(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var JS = $i;
$i.default = $i;
KS.registerProcessor($i);
YS.registerProcessor($i);
let XS = Fo, QS = nh, ZS = jo, eO = Vu, tO = Mo, rO = Yi, nO = Hu;
function Ii(t, e) {
  if (Array.isArray(t))
    return t.map((i) => Ii(i));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let i of r) {
      let a = { ...i, __proto__: tO.prototype };
      a.map && (a.map = {
        ...a.map,
        __proto__: QS.prototype
      }), e.push(a);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((i) => Ii(i, e))), n.source) {
    let { inputId: i, ...a } = n.source;
    n.source = a, i != null && (n.source.input = e[i]);
  }
  if (n.type === "root")
    return new rO(n);
  if (n.type === "decl")
    return new XS(n);
  if (n.type === "rule")
    return new nO(n);
  if (n.type === "comment")
    return new ZS(n);
  if (n.type === "atrule")
    return new eO(n);
  throw new Error("Unknown node type: " + t.type);
}
var iO = Ii;
Ii.default = Ii;
let aO = Mu, $h = Fo, oO = Th, sO = Kr, qu = JS, lO = No, uO = iO, Ih = zu, cO = xh, Dh = jo, Rh = Vu, fO = Uu, dO = Mo, pO = Wu, hO = _h, Nh = Hu, Lh = Yi, mO = Lo;
function fe(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new qu(t);
}
fe.plugin = function(e, r) {
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
    return s.postcssPlugin = e, s.postcssVersion = new qu().version, s;
  }
  let a;
  return Object.defineProperty(i, "postcss", {
    get() {
      return a || (a = i()), a;
    }
  }), i.process = function(o, s, l) {
    return fe([i(l)]).process(o, s);
  }, i;
};
fe.stringify = lO;
fe.parse = pO;
fe.fromJSON = uO;
fe.list = hO;
fe.comment = (t) => new Dh(t);
fe.atRule = (t) => new Rh(t);
fe.decl = (t) => new $h(t);
fe.rule = (t) => new Nh(t);
fe.root = (t) => new Lh(t);
fe.document = (t) => new Ih(t);
fe.CssSyntaxError = aO;
fe.Declaration = $h;
fe.Container = sO;
fe.Processor = qu;
fe.Document = Ih;
fe.Comment = Dh;
fe.Warning = cO;
fe.AtRule = Rh;
fe.Result = fO;
fe.Input = dO;
fe.Rule = Nh;
fe.Root = Lh;
fe.Node = mO;
oO.registerPostcss(fe);
var gO = fe;
fe.default = fe;
const ye = /* @__PURE__ */ Do(gO);
ye.stringify;
ye.fromJSON;
ye.plugin;
ye.parse;
ye.list;
ye.document;
ye.comment;
ye.atRule;
ye.rule;
ye.decl;
ye.root;
ye.CssSyntaxError;
ye.Declaration;
ye.Container;
ye.Processor;
ye.Document;
ye.Comment;
ye.Warning;
ye.AtRule;
ye.Result;
ye.Input;
ye.Rule;
ye.Root;
ye.Node;
const yO = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, vO = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, bO = { key: 0 }, wO = {
  key: 1,
  class: "ml-1"
}, xO = { class: "flex w-fit flex-wrap" }, SO = {
  key: 0,
  class: "font-semibold"
}, OO = { class: "mb-1" }, AO = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, EO = { class: "w-full break-words" }, _O = { class: "mb-1 flex flex-col" }, CO = { key: 1 }, VC = {
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
      return E(), I("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        L("div", yO, [
          e.itemId || e.timeStamp ? (E(), I("div", vO, [
            e.itemId ? (E(), I(de, { key: 0 }, [
              e.itemId.routeName ? (E(), se(q(yt), {
                key: 1,
                href: r.route(e.itemId.routeName, e.itemId.routeData ? e.itemId.routeData : e.itemId.id)
              }, {
                default: xe(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (E(), I(de, { key: 0 }, [
                    ve("#")
                  ], 64)) : J("", !0),
                  ve(" " + X(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (E(), I("span", bO, [
                e.itemId.prefix || e.itemId.prefix == null ? (E(), I(de, { key: 0 }, [
                  ve("#")
                ], 64)) : J("", !0),
                ve(" " + X(e.itemId.id), 1)
              ]))
            ], 64)) : J("", !0),
            e.timeStamp ? (E(), I("span", wO, [
              e.itemId ? (E(), I(de, { key: 0 }, [
                ve("-")
              ], 64)) : J("", !0),
              ve(" " + X(e.timeStamp), 1)
            ])) : J("", !0)
          ])) : J("", !0),
          L("div", xO, [
            (E(!0), I(de, null, bt(t.pills, (a, o) => (E(), I(de, { key: o }, [
              a.text ? (E(), I("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: za({
                  backgroundColor: a.color ? a.color : null
                })
              }, X(a.text), 5)) : J("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (E(), I(de, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (E(), I("p", SO, X(e.title.text), 1)) : (E(), se(q(yt), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: xe(() => [
              ve(X(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : J("", !0),
        L("div", OO, [
          e.extraText ? (E(), I("p", AO, [
            ve(" Engineer Note: "),
            L("span", EO, X(e.extraText), 1)
          ])) : J("", !0)
        ]),
        L("div", _O, [
          (E(!0), I(de, null, bt(t.options, (a, o) => (E(), I(de, null, [
            !a.routeName && !a.href ? (E(), I("span", {
              key: 0,
              style: za({ color: a.color ? a.color : "#000" })
            }, X(a.text), 5)) : (E(), se(q(yt), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: za({ color: a.color ? a.color : "#000" })
            }, {
              default: xe(() => [
                ve(X(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = e.amount) != null && i.amount ? (E(), I("div", CO, [
          L("span", null, X(e.amount.text + q(px)(e.amount.amount)), 1)
        ])) : J("", !0),
        L("div", null, [
          K(r.$slots, "default")
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
const Xs = (() => {
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
})(), Xa = {
  setData(t, e, r) {
    Xs.set(t, e, r);
  },
  getData(t, e) {
    return Xs.get(t, e);
  },
  removeData(t, e) {
    Xs.delete(t, e);
  }
}, kO = 1e6, PO = 1e3, eu = "transitionend", TO = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), $O = (t) => {
  do
    t += Math.floor(Math.random() * kO);
  while (document.getElementById(t));
  return t;
}, Fh = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, Mh = (t) => {
  const e = Fh(t);
  return e && document.querySelector(e) ? e : null;
}, Tn = (t) => {
  const e = Fh(t);
  return e ? document.querySelector(e) : null;
}, IO = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), i = Number.parseFloat(r);
  return !n && !i ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * PO);
}, DO = (t) => {
  t.dispatchEvent(new Event(eu));
}, bo = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), wo = (t) => bo(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, Di = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = e[n], o = a && bo(a) ? "element" : TO(a);
    if (!new RegExp(i).test(o))
      throw new Error(
        `${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`
      );
  });
}, Ki = (t) => {
  if (!t || t.getClientRects().length === 0)
    return !1;
  if (t.style && t.parentNode && t.parentNode.style) {
    const e = getComputedStyle(t), r = getComputedStyle(t.parentNode);
    return getComputedStyle(t).getPropertyValue("visibility") === "visible" || e.display !== "none" && r.display !== "none" && e.visibility !== "hidden";
  }
  return !1;
}, Br = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", ed = () => function() {
}, RO = (t) => {
  t.offsetHeight;
}, jh = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, Qs = [], NO = (t) => {
  document.readyState === "loading" ? (Qs.length || document.addEventListener("DOMContentLoaded", () => {
    Qs.forEach((e) => e());
  }), Qs.push(t)) : t();
}, It = () => document.documentElement.dir === "rtl", LO = (t) => document.createElement(t), td = (t) => {
  typeof t == "function" && t();
}, FO = (t, e, r = !0) => {
  if (!r) {
    td(t);
    return;
  }
  const n = 5, i = IO(e) + n;
  let a = !1;
  const o = ({ target: s }) => {
    s === e && (a = !0, e.removeEventListener(eu, o), td(t));
  };
  e.addEventListener(eu, o), setTimeout(() => {
    a || DO(e);
  }, i);
}, MO = (t, e, r, n) => {
  let i = t.indexOf(e);
  if (i === -1)
    return t[!r && n ? t.length - 1 : 0];
  const a = t.length;
  return i += r ? 1 : -1, n && (i = (i + a) % a), t[Math.max(0, Math.min(i, a - 1))];
}, jO = /[^.]*(?=\..*)\.|.*/, BO = /\..*/, zO = /::\d+$/, Zs = {};
let rd = 1;
const UO = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, VO = /^(mouseenter|mouseleave)/i, Bh = /* @__PURE__ */ new Set([
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
function zh(t, e) {
  return e && `${e}::${rd++}` || t.uidEvent || rd++;
}
function Uh(t) {
  const e = zh(t);
  return t.uidEvent = e, Zs[e] = Zs[e] || {}, Zs[e];
}
function HO(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && ne.off(t, n.type, e), e.apply(t, [n]);
  };
}
function WO(t, e, r) {
  return function n(i) {
    const a = t.querySelectorAll(e);
    for (let { target: o } = i; o && o !== this; o = o.parentNode)
      for (let s = a.length; s--; "")
        if (a[s] === o)
          return i.delegateTarget = o, n.oneOff && ne.off(t, i.type, r), r.apply(o, [i]);
    return null;
  };
}
function Vh(t, e, r = null) {
  const n = Object.keys(t);
  for (let i = 0, a = n.length; i < a; i++) {
    const o = t[n[i]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function Hh(t, e, r) {
  const n = typeof e == "string", i = n ? r : e;
  let a = Wh(t);
  return Bh.has(a) || (a = t), [n, i, a];
}
function nd(t, e, r, n, i) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), VO.test(e)) {
    const S = (m) => function(b) {
      if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
        return m.call(this, b);
    };
    n ? n = S(n) : r = S(r);
  }
  const [a, o, s] = Hh(
    e,
    r,
    n
  ), l = Uh(t), c = l[s] || (l[s] = {}), f = Vh(
    c,
    o,
    a ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && i;
    return;
  }
  const d = zh(
    o,
    e.replace(jO, "")
  ), g = a ? WO(t, r, n) : HO(t, r);
  g.delegationSelector = a ? r : null, g.originalHandler = o, g.oneOff = i, g.uidEvent = d, c[d] = g, t.addEventListener(s, g, a);
}
function tu(t, e, r, n, i) {
  const a = Vh(e[r], n, i);
  a && (t.removeEventListener(r, a, !!i), delete e[r][a.uidEvent]);
}
function qO(t, e, r, n) {
  const i = e[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const o = i[a];
      tu(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Wh(t) {
  return t = t.replace(BO, ""), UO[t] || t;
}
const ne = {
  on(t, e, r, n) {
    nd(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    nd(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [i, a, o] = Hh(
      e,
      r,
      n
    ), s = o !== e, l = Uh(t), c = e.startsWith(".");
    if (typeof a < "u") {
      if (!l || !l[o])
        return;
      tu(
        t,
        l,
        o,
        a,
        i ? r : null
      );
      return;
    }
    c && Object.keys(l).forEach((d) => {
      qO(
        t,
        l,
        d,
        e.slice(1)
      );
    });
    const f = l[o] || {};
    Object.keys(f).forEach((d) => {
      const g = d.replace(zO, "");
      if (!s || e.includes(g)) {
        const S = f[d];
        tu(
          t,
          l,
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
    const n = jh(), i = Wh(e), a = e !== i, o = Bh.has(i);
    let s, l = !0, c = !0, f = !1, d = null;
    return a && n && (s = n.Event(e, r), n(t).trigger(s), l = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented()), o ? (d = document.createEvent("HTMLEvents"), d.initEvent(i, l, !0)) : d = new CustomEvent(e, {
      bubbles: l,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((g) => {
      Object.defineProperty(d, g, {
        get() {
          return r[g];
        }
      });
    }), f && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && typeof s < "u" && s.preventDefault(), d;
  }
}, GO = "5.1.3";
class Gu {
  constructor(e) {
    e = wo(e), e && (this._element = e, Xa.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Xa.removeData(this._element, this.constructor.DATA_KEY), ne.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    FO(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return Xa.getData(wo(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return GO;
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
var Be = "top", Ze = "bottom", et = "right", ze = "left", Ji = "auto", jn = [Be, Ze, et, ze], Hr = "start", $n = "end", qh = "clippingParents", Yu = "viewport", hn = "popper", Gh = "reference", ru = /* @__PURE__ */ jn.reduce(function(t, e) {
  return t.concat([e + "-" + Hr, e + "-" + $n]);
}, []), Ku = /* @__PURE__ */ [].concat(jn, [Ji]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Hr, e + "-" + $n]);
}, []), Yh = "beforeRead", Kh = "read", Jh = "afterRead", Xh = "beforeMain", Qh = "main", Zh = "afterMain", em = "beforeWrite", tm = "write", rm = "afterWrite", xo = [Yh, Kh, Jh, Xh, Qh, Zh, em, tm, rm];
function Dt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function tt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Wr(t) {
  var e = tt(t).Element;
  return t instanceof e || t instanceof Element;
}
function Qe(t) {
  var e = tt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Ju(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = tt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function YO(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, a = e.elements[r];
    !Qe(a) || !Dt(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(o) {
      var s = i[o];
      s === !1 ? a.removeAttribute(o) : a.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function KO(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var i = e.elements[n], a = e.attributes[n] || {}, o = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), s = o.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Qe(i) || !Dt(i) || (Object.assign(i.style, s), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Xu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: YO,
  effect: KO,
  requires: ["computeStyles"]
};
function vt(t) {
  return t.split("-")[0];
}
var zr = Math.max, So = Math.min, In = Math.round;
function nu() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function nm() {
  return !/^((?!chrome|android).)*safari/i.test(nu());
}
function Dn(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), i = 1, a = 1;
  e && Qe(t) && (i = t.offsetWidth > 0 && In(n.width) / t.offsetWidth || 1, a = t.offsetHeight > 0 && In(n.height) / t.offsetHeight || 1);
  var o = Wr(t) ? tt(t) : window, s = o.visualViewport, l = !nm() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / i, f = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / i, g = n.height / a;
  return {
    width: d,
    height: g,
    top: f,
    right: c + d,
    bottom: f + g,
    left: c,
    x: c,
    y: f
  };
}
function Qu(t) {
  var e = Dn(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function im(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Ju(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function wt(t) {
  return tt(t).getComputedStyle(t);
}
function JO(t) {
  return ["table", "td", "th"].indexOf(Dt(t)) >= 0;
}
function wr(t) {
  return ((Wr(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Bo(t) {
  return Dt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Ju(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wr(t)
  );
}
function id(t) {
  return !Qe(t) || // https://github.com/popperjs/popper-core/issues/837
  wt(t).position === "fixed" ? null : t.offsetParent;
}
function XO(t) {
  var e = /firefox/i.test(nu()), r = /Trident/i.test(nu());
  if (r && Qe(t)) {
    var n = wt(t);
    if (n.position === "fixed")
      return null;
  }
  var i = Bo(t);
  for (Ju(i) && (i = i.host); Qe(i) && ["html", "body"].indexOf(Dt(i)) < 0; ) {
    var a = wt(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Xi(t) {
  for (var e = tt(t), r = id(t); r && JO(r) && wt(r).position === "static"; )
    r = id(r);
  return r && (Dt(r) === "html" || Dt(r) === "body" && wt(r).position === "static") ? e : r || XO(t) || e;
}
function Zu(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function bi(t, e, r) {
  return zr(t, So(e, r));
}
function QO(t, e, r) {
  var n = bi(t, e, r);
  return n > r ? r : n;
}
function am() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function om(t) {
  return Object.assign({}, am(), t);
}
function sm(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var ZO = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, om(typeof t != "number" ? t : sm(t, jn));
};
function eA(t) {
  var e, r = t.state, n = t.name, i = t.options, a = r.elements.arrow, o = r.modifiersData.popperOffsets, s = vt(r.placement), l = Zu(s), c = [ze, et].indexOf(s) >= 0, f = c ? "height" : "width";
  if (!(!a || !o)) {
    var d = ZO(i.padding, r), g = Qu(a), S = l === "y" ? Be : ze, m = l === "y" ? Ze : et, b = r.rects.reference[f] + r.rects.reference[l] - o[l] - r.rects.popper[f], O = o[l] - r.rects.reference[l], A = Xi(a), k = A ? l === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, C = b / 2 - O / 2, _ = d[S], D = k - g[f] - d[m], $ = k / 2 - g[f] / 2 + C, N = bi(_, $, D), B = l;
    r.modifiersData[n] = (e = {}, e[B] = N, e.centerOffset = N - $, e);
  }
}
function tA(t) {
  var e = t.state, r = t.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  if (i != null && !(typeof i == "string" && (i = e.elements.popper.querySelector(i), !i))) {
    if ({}.NODE_ENV !== "production" && (Qe(i) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !im(e.elements.popper, i)) {
      ({}).NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    e.elements.arrow = i;
  }
}
const lm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: eA,
  effect: tA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Rn(t) {
  return t.split("-")[1];
}
var rA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nA(t, e) {
  var r = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: In(r * i) / i || 0,
    y: In(n * i) / i || 0
  };
}
function ad(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, a = t.variation, o = t.offsets, s = t.position, l = t.gpuAcceleration, c = t.adaptive, f = t.roundOffsets, d = t.isFixed, g = o.x, S = g === void 0 ? 0 : g, m = o.y, b = m === void 0 ? 0 : m, O = typeof f == "function" ? f({
    x: S,
    y: b
  }) : {
    x: S,
    y: b
  };
  S = O.x, b = O.y;
  var A = o.hasOwnProperty("x"), k = o.hasOwnProperty("y"), C = ze, _ = Be, D = window;
  if (c) {
    var $ = Xi(r), N = "clientHeight", B = "clientWidth";
    if ($ === tt(r) && ($ = wr(r), wt($).position !== "static" && s === "absolute" && (N = "scrollHeight", B = "scrollWidth")), $ = $, i === Be || (i === ze || i === et) && a === $n) {
      _ = Ze;
      var M = d && $ === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[N]
      );
      b -= M - n.height, b *= l ? 1 : -1;
    }
    if (i === ze || (i === Be || i === Ze) && a === $n) {
      C = et;
      var P = d && $ === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[B]
      );
      S -= P - n.width, S *= l ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: s
  }, c && rA), h = f === !0 ? nA({
    x: S,
    y: b
  }, tt(r)) : {
    x: S,
    y: b
  };
  if (S = h.x, b = h.y, l) {
    var y;
    return Object.assign({}, U, (y = {}, y[_] = k ? "0" : "", y[C] = A ? "0" : "", y.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + b + "px)" : "translate3d(" + S + "px, " + b + "px, 0)", y));
  }
  return Object.assign({}, U, (e = {}, e[_] = k ? b + "px" : "", e[C] = A ? S + "px" : "", e.transform = "", e));
}
function iA(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, a = r.adaptive, o = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s;
  if ({}.NODE_ENV !== "production") {
    var c = wt(e.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(d) {
      return c.indexOf(d) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var f = {
    placement: vt(e.placement),
    variation: Rn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ad(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ad(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const ec = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iA,
  data: {}
};
var Fa = {
  passive: !0
};
function aA(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, a = i === void 0 ? !0 : i, o = n.resize, s = o === void 0 ? !0 : o, l = tt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return a && c.forEach(function(f) {
    f.addEventListener("scroll", r.update, Fa);
  }), s && l.addEventListener("resize", r.update, Fa), function() {
    a && c.forEach(function(f) {
      f.removeEventListener("scroll", r.update, Fa);
    }), s && l.removeEventListener("resize", r.update, Fa);
  };
}
const tc = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: aA,
  data: {}
};
var oA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qa(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return oA[e];
  });
}
var sA = {
  start: "end",
  end: "start"
};
function od(t) {
  return t.replace(/start|end/g, function(e) {
    return sA[e];
  });
}
function rc(t) {
  var e = tt(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function nc(t) {
  return Dn(wr(t)).left + rc(t).scrollLeft;
}
function lA(t, e) {
  var r = tt(t), n = wr(t), i = r.visualViewport, a = n.clientWidth, o = n.clientHeight, s = 0, l = 0;
  if (i) {
    a = i.width, o = i.height;
    var c = nm();
    (c || !c && e === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s + nc(t),
    y: l
  };
}
function uA(t) {
  var e, r = wr(t), n = rc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, a = zr(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = zr(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + nc(t), l = -n.scrollTop;
  return wt(i || r).direction === "rtl" && (s += zr(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: l
  };
}
function ic(t) {
  var e = wt(t), r = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function um(t) {
  return ["html", "body", "#document"].indexOf(Dt(t)) >= 0 ? t.ownerDocument.body : Qe(t) && ic(t) ? t : um(Bo(t));
}
function wi(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = um(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), a = tt(n), o = i ? [a].concat(a.visualViewport || [], ic(n) ? n : []) : n, s = e.concat(o);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(wi(Bo(o)))
  );
}
function iu(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function cA(t, e) {
  var r = Dn(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function sd(t, e, r) {
  return e === Yu ? iu(lA(t, r)) : Wr(e) ? cA(e, r) : iu(uA(wr(t)));
}
function fA(t) {
  var e = wi(Bo(t)), r = ["absolute", "fixed"].indexOf(wt(t).position) >= 0, n = r && Qe(t) ? Xi(t) : t;
  return Wr(n) ? e.filter(function(i) {
    return Wr(i) && im(i, n) && Dt(i) !== "body";
  }) : [];
}
function dA(t, e, r, n) {
  var i = e === "clippingParents" ? fA(t) : [].concat(e), a = [].concat(i, [r]), o = a[0], s = a.reduce(function(l, c) {
    var f = sd(t, c, n);
    return l.top = zr(f.top, l.top), l.right = So(f.right, l.right), l.bottom = So(f.bottom, l.bottom), l.left = zr(f.left, l.left), l;
  }, sd(t, o, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function cm(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? vt(n) : null, a = n ? Rn(n) : null, o = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, l;
  switch (i) {
    case Be:
      l = {
        x: o,
        y: e.y - r.height
      };
      break;
    case Ze:
      l = {
        x: o,
        y: e.y + e.height
      };
      break;
    case et:
      l = {
        x: e.x + e.width,
        y: s
      };
      break;
    case ze:
      l = {
        x: e.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Zu(i) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (a) {
      case Hr:
        l[c] = l[c] - (e[f] / 2 - r[f] / 2);
        break;
      case $n:
        l[c] = l[c] + (e[f] / 2 - r[f] / 2);
        break;
    }
  }
  return l;
}
function Nn(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, a = r.strategy, o = a === void 0 ? t.strategy : a, s = r.boundary, l = s === void 0 ? qh : s, c = r.rootBoundary, f = c === void 0 ? Yu : c, d = r.elementContext, g = d === void 0 ? hn : d, S = r.altBoundary, m = S === void 0 ? !1 : S, b = r.padding, O = b === void 0 ? 0 : b, A = om(typeof O != "number" ? O : sm(O, jn)), k = g === hn ? Gh : hn, C = t.rects.popper, _ = t.elements[m ? k : g], D = dA(Wr(_) ? _ : _.contextElement || wr(t.elements.popper), l, f, o), $ = Dn(t.elements.reference), N = cm({
    reference: $,
    element: C,
    strategy: "absolute",
    placement: i
  }), B = iu(Object.assign({}, C, N)), M = g === hn ? B : $, P = {
    top: D.top - M.top + A.top,
    bottom: M.bottom - D.bottom + A.bottom,
    left: D.left - M.left + A.left,
    right: M.right - D.right + A.right
  }, U = t.modifiersData.offset;
  if (g === hn && U) {
    var h = U[i];
    Object.keys(P).forEach(function(y) {
      var x = [et, Ze].indexOf(y) >= 0 ? 1 : -1, v = [Be, Ze].indexOf(y) >= 0 ? "y" : "x";
      P[y] += h[v] * x;
    });
  }
  return P;
}
function pA(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, a = r.rootBoundary, o = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Ku : l, f = Rn(n), d = f ? s ? ru : ru.filter(function(m) {
    return Rn(m) === f;
  }) : jn, g = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  g.length === 0 && (g = d, {}.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var S = g.reduce(function(m, b) {
    return m[b] = Nn(t, {
      placement: b,
      boundary: i,
      rootBoundary: a,
      padding: o
    })[vt(b)], m;
  }, {});
  return Object.keys(S).sort(function(m, b) {
    return S[m] - S[b];
  });
}
function hA(t) {
  if (vt(t) === Ji)
    return [];
  var e = Qa(t);
  return [od(t), e, od(e)];
}
function mA(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !0 : o, l = r.fallbackPlacements, c = r.padding, f = r.boundary, d = r.rootBoundary, g = r.altBoundary, S = r.flipVariations, m = S === void 0 ? !0 : S, b = r.allowedAutoPlacements, O = e.options.placement, A = vt(O), k = A === O, C = l || (k || !m ? [Qa(O)] : hA(O)), _ = [O].concat(C).reduce(function(Ee, Q) {
      return Ee.concat(vt(Q) === Ji ? pA(e, {
        placement: Q,
        boundary: f,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: b
      }) : Q);
    }, []), D = e.rects.reference, $ = e.rects.popper, N = /* @__PURE__ */ new Map(), B = !0, M = _[0], P = 0; P < _.length; P++) {
      var U = _[P], h = vt(U), y = Rn(U) === Hr, x = [Be, Ze].indexOf(h) >= 0, v = x ? "width" : "height", z = Nn(e, {
        placement: U,
        boundary: f,
        rootBoundary: d,
        altBoundary: g,
        padding: c
      }), F = x ? y ? et : ze : y ? Ze : Be;
      D[v] > $[v] && (F = Qa(F));
      var j = Qa(F), H = [];
      if (a && H.push(z[h] <= 0), s && H.push(z[F] <= 0, z[j] <= 0), H.every(function(Ee) {
        return Ee;
      })) {
        M = U, B = !1;
        break;
      }
      N.set(U, H);
    }
    if (B)
      for (var Y = m ? 3 : 1, Me = function(Ee) {
        var Q = _.find(function(nt) {
          var lt = N.get(nt);
          if (lt)
            return lt.slice(0, Ee).every(function(Se) {
              return Se;
            });
        });
        if (Q)
          return M = Q, "break";
      }, Ue = Y; Ue > 0; Ue--) {
        var pe = Me(Ue);
        if (pe === "break")
          break;
      }
    e.placement !== M && (e.modifiersData[n]._skip = !0, e.placement = M, e.reset = !0);
  }
}
const fm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mA,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ld(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function ud(t) {
  return [Be, et, Ze, ze].some(function(e) {
    return t[e] >= 0;
  });
}
function gA(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, a = e.modifiersData.preventOverflow, o = Nn(e, {
    elementContext: "reference"
  }), s = Nn(e, {
    altBoundary: !0
  }), l = ld(o, n), c = ld(s, i, a), f = ud(l), d = ud(c);
  e.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
const dm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gA
};
function yA(t, e, r) {
  var n = vt(t), i = [ze, Be].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, o = a[0], s = a[1];
  return o = o || 0, s = (s || 0) * i, [ze, et].indexOf(n) >= 0 ? {
    x: s,
    y: o
  } : {
    x: o,
    y: s
  };
}
function vA(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, a = i === void 0 ? [0, 0] : i, o = Ku.reduce(function(f, d) {
    return f[d] = yA(d, e.rects, a), f;
  }, {}), s = o[e.placement], l = s.x, c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = o;
}
const pm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vA
};
function bA(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = cm({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const ac = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bA,
  data: {}
};
function wA(t) {
  return t === "x" ? "y" : "x";
}
function xA(t) {
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, a = i === void 0 ? !0 : i, o = r.altAxis, s = o === void 0 ? !1 : o, l = r.boundary, c = r.rootBoundary, f = r.altBoundary, d = r.padding, g = r.tether, S = g === void 0 ? !0 : g, m = r.tetherOffset, b = m === void 0 ? 0 : m, O = Nn(e, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: f
  }), A = vt(e.placement), k = Rn(e.placement), C = !k, _ = Zu(A), D = wA(_), $ = e.modifiersData.popperOffsets, N = e.rects.reference, B = e.rects.popper, M = typeof b == "function" ? b(Object.assign({}, e.rects, {
    placement: e.placement
  })) : b, P = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), U = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, h = {
    x: 0,
    y: 0
  };
  if ($) {
    if (a) {
      var y, x = _ === "y" ? Be : ze, v = _ === "y" ? Ze : et, z = _ === "y" ? "height" : "width", F = $[_], j = F + O[x], H = F - O[v], Y = S ? -B[z] / 2 : 0, Me = k === Hr ? N[z] : B[z], Ue = k === Hr ? -B[z] : -N[z], pe = e.elements.arrow, Ee = S && pe ? Qu(pe) : {
        width: 0,
        height: 0
      }, Q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : am(), nt = Q[x], lt = Q[v], Se = bi(0, N[z], Ee[z]), Nt = C ? N[z] / 2 - Y - Se - nt - P.mainAxis : Me - Se - nt - P.mainAxis, tr = C ? -N[z] / 2 + Y + Se + lt + P.mainAxis : Ue + Se + lt + P.mainAxis, ut = e.elements.arrow && Xi(e.elements.arrow), Lt = ut ? _ === "y" ? ut.clientTop || 0 : ut.clientLeft || 0 : 0, Ft = (y = U == null ? void 0 : U[_]) != null ? y : 0, xr = F + Nt - Ft - Lt, Xr = F + tr - Ft, rr = bi(S ? So(j, xr) : j, F, S ? zr(H, Xr) : H);
      $[_] = rr, h[_] = rr - F;
    }
    if (s) {
      var Sr, Bn = _ === "x" ? Be : ze, zn = _ === "x" ? Ze : et, Ve = $[D], xt = D === "y" ? "height" : "width", Or = Ve + O[Bn], Ar = Ve - O[zn], He = [Be, ze].indexOf(A) !== -1, Mt = (Sr = U == null ? void 0 : U[D]) != null ? Sr : 0, Qr = He ? Or : Ve - N[xt] - B[xt] - Mt + P.altAxis, St = He ? Ve + N[xt] + B[xt] - Mt - P.altAxis : Ar, jt = S && He ? QO(Qr, Ve, St) : bi(S ? Qr : Or, Ve, S ? St : Ar);
      $[D] = jt, h[D] = jt - Ve;
    }
    e.modifiersData[n] = h;
  }
}
const hm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xA,
  requiresIfExists: ["offset"]
};
function SA(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function OA(t) {
  return t === tt(t) || !Qe(t) ? rc(t) : SA(t);
}
function AA(t) {
  var e = t.getBoundingClientRect(), r = In(e.width) / t.offsetWidth || 1, n = In(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function EA(t, e, r) {
  r === void 0 && (r = !1);
  var n = Qe(e), i = Qe(e) && AA(e), a = wr(e), o = Dn(t, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Dt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ic(a)) && (s = OA(e)), Qe(e) ? (l = Dn(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : a && (l.x = nc(a))), {
    x: o.left + s.scrollLeft - l.x,
    y: o.top + s.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function _A(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(a) {
    e.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(s) {
      if (!r.has(s)) {
        var l = e.get(s);
        l && i(l);
      }
    }), n.push(a);
  }
  return t.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function CA(t) {
  var e = _A(t);
  return xo.reduce(function(r, n) {
    return r.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function kA(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function sr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, t);
}
var $r = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', PA = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', cd = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function TA(t) {
  t.forEach(function(e) {
    [].concat(Object.keys(e), cd).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof e.name != "string" && console.error(sr($r, String(e.name), '"name"', '"string"', '"' + String(e.name) + '"'));
          break;
        case "enabled":
          typeof e.enabled != "boolean" && console.error(sr($r, e.name, '"enabled"', '"boolean"', '"' + String(e.enabled) + '"'));
          break;
        case "phase":
          xo.indexOf(e.phase) < 0 && console.error(sr($r, e.name, '"phase"', "either " + xo.join(", "), '"' + String(e.phase) + '"'));
          break;
        case "fn":
          typeof e.fn != "function" && console.error(sr($r, e.name, '"fn"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "effect":
          e.effect != null && typeof e.effect != "function" && console.error(sr($r, e.name, '"effect"', '"function"', '"' + String(e.fn) + '"'));
          break;
        case "requires":
          e.requires != null && !Array.isArray(e.requires) && console.error(sr($r, e.name, '"requires"', '"array"', '"' + String(e.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(e.requiresIfExists) || console.error(sr($r, e.name, '"requiresIfExists"', '"array"', '"' + String(e.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + e.name + '" modifier, valid properties are ' + cd.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      e.requires && e.requires.forEach(function(n) {
        t.find(function(i) {
          return i.name === n;
        }) == null && console.error(sr(PA, String(e.name), n, n));
      });
    });
  });
}
function $A(t, e) {
  var r = /* @__PURE__ */ new Set();
  return t.filter(function(n) {
    var i = e(n);
    if (!r.has(i))
      return r.add(i), !0;
  });
}
function IA(t) {
  var e = t.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var fd = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", DA = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", dd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pd() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function zo(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, i = e.defaultOptions, a = i === void 0 ? dd : i;
  return function(o, s, l) {
    l === void 0 && (l = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dd, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, g = {
      state: c,
      setOptions: function(b) {
        var O = typeof b == "function" ? b(c.options) : b;
        m(), c.options = Object.assign({}, a, c.options, O), c.scrollParents = {
          reference: Wr(o) ? wi(o) : o.contextElement ? wi(o.contextElement) : [],
          popper: wi(s)
        };
        var A = CA(IA([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = A.filter(function(M) {
          return M.enabled;
        }), {}.NODE_ENV !== "production") {
          var k = $A([].concat(A, c.options.modifiers), function(M) {
            var P = M.name;
            return P;
          });
          if (TA(k), vt(c.options.placement) === Ji) {
            var C = c.orderedModifiers.find(function(M) {
              var P = M.name;
              return P === "flip";
            });
            C || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var _ = wt(s), D = _.marginTop, $ = _.marginRight, N = _.marginBottom, B = _.marginLeft;
          [D, $, N, B].some(function(M) {
            return parseFloat(M);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return S(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var b = c.elements, O = b.reference, A = b.popper;
          if (!pd(O, A)) {
            ({}).NODE_ENV !== "production" && console.error(fd);
            return;
          }
          c.rects = {
            reference: EA(O, Xi(A), c.options.strategy === "fixed"),
            popper: Qu(A)
          }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
            return c.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var k = 0, C = 0; C < c.orderedModifiers.length; C++) {
            if ({}.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(DA);
              break;
            }
            if (c.reset === !0) {
              c.reset = !1, C = -1;
              continue;
            }
            var _ = c.orderedModifiers[C], D = _.fn, $ = _.options, N = $ === void 0 ? {} : $, B = _.name;
            typeof D == "function" && (c = D({
              state: c,
              options: N,
              name: B,
              instance: g
            }) || c);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: kA(function() {
        return new Promise(function(b) {
          g.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!pd(o, s))
      return {}.NODE_ENV !== "production" && console.error(fd), g;
    g.setOptions(l).then(function(b) {
      !d && l.onFirstUpdate && l.onFirstUpdate(b);
    });
    function S() {
      c.orderedModifiers.forEach(function(b) {
        var O = b.name, A = b.options, k = A === void 0 ? {} : A, C = b.effect;
        if (typeof C == "function") {
          var _ = C({
            state: c,
            name: O,
            instance: g,
            options: k
          }), D = function() {
          };
          f.push(_ || D);
        }
      });
    }
    function m() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return g;
  };
}
var RA = /* @__PURE__ */ zo(), NA = [tc, ac, ec, Xu], LA = /* @__PURE__ */ zo({
  defaultModifiers: NA
}), FA = [tc, ac, ec, Xu, pm, fm, hm, lm, dm], mm = /* @__PURE__ */ zo({
  defaultModifiers: FA
});
const MA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: Zh,
  afterRead: Jh,
  afterWrite: rm,
  applyStyles: Xu,
  arrow: lm,
  auto: Ji,
  basePlacements: jn,
  beforeMain: Xh,
  beforeRead: Yh,
  beforeWrite: em,
  bottom: Ze,
  clippingParents: qh,
  computeStyles: ec,
  createPopper: mm,
  createPopperBase: RA,
  createPopperLite: LA,
  detectOverflow: Nn,
  end: $n,
  eventListeners: tc,
  flip: fm,
  hide: dm,
  left: ze,
  main: Qh,
  modifierPhases: xo,
  offset: pm,
  placements: Ku,
  popper: hn,
  popperGenerator: zo,
  popperOffsets: ac,
  preventOverflow: hm,
  read: Kh,
  reference: Gh,
  right: et,
  start: Hr,
  top: Be,
  variationPlacements: ru,
  viewport: Yu,
  write: tm
}, Symbol.toStringTag, { value: "Module" }));
function el(t) {
  return t === "true" ? !0 : t === "false" ? !1 : t === Number(t).toString() ? Number(t) : t === "" || t === "null" ? null : t;
}
function tl(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const ie = {
  setDataAttribute(t, e, r) {
    t.setAttribute(`data-te-${tl(e)}`, r);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-te-${tl(e)}`);
  },
  getDataAttributes(t) {
    if (!t)
      return {};
    const e = {};
    return Object.keys(t.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = el(t.dataset[r]);
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
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = el(e[r]);
    }), e;
  },
  getDataAttribute(t, e) {
    return el(
      t.getAttribute(`data-te-${tl(e)}`)
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
    t && rl(e).forEach((r) => {
      t.classList.contains(r) ? t.classList.remove(r) : t.classList.add(r);
    });
  },
  addClass(t, e) {
    rl(e).forEach(
      (r) => !t.classList.contains(r) && t.classList.add(r)
    );
  },
  addStyle(t, e) {
    Object.keys(e).forEach((r) => {
      t.style[r] = e[r];
    });
  },
  removeClass(t, e) {
    rl(e).forEach(
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
function rl(t) {
  return typeof t == "string" ? t.split(" ") : Array.isArray(t) ? t : !1;
}
const jA = 3, Ie = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== jA; )
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
      (r) => !Br(r) && Ki(r)
    );
  }
}, nl = "dropdown", BA = "te.dropdown", Jr = `.${BA}`, oc = ".data-api", Za = "Escape", hd = "Space", md = "Tab", au = "ArrowUp", eo = "ArrowDown", zA = 2, UA = new RegExp(
  `${au}|${eo}|${Za}`
), VA = `hide${Jr}`, HA = `hidden${Jr}`, WA = `show${Jr}`, qA = `shown${Jr}`, GA = `click${Jr}${oc}`, gd = `keydown${Jr}${oc}`, YA = `keyup${Jr}${oc}`, lr = "show", KA = "dropup", JA = "dropend", XA = "dropstart", QA = "[data-te-navbar-ref]", Ma = "[data-te-dropdown-toggle-ref]", il = "[data-te-dropdown-menu-ref]", ZA = "[data-te-navbar-nav-ref]", eE = "[data-te-dropdown-menu-ref] [data-te-dropdown-item-ref]:not(.disabled):not(:disabled)", tE = It() ? "top-end" : "top-start", rE = It() ? "top-start" : "top-end", nE = It() ? "bottom-end" : "bottom-start", iE = It() ? "bottom-start" : "bottom-end", aE = It() ? "left-start" : "right-start", oE = It() ? "right-start" : "left-start", sE = [{ opacity: "0" }, { opacity: "1" }], lE = [{ opacity: "1" }, { opacity: "0" }], ja = {
  duration: 550,
  iterations: 1,
  easing: "ease",
  fill: "both"
}, uE = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0,
  dropdownAnimation: "on"
}, cE = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string"
};
class pt extends Gu {
  constructor(e, r) {
    super(e), this._popper = null, this._config = this._getConfig(r), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const n = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !n, this._didInit = !1, this._init();
  }
  // Getters
  static get Default() {
    return uE;
  }
  static get DefaultType() {
    return cE;
  }
  static get NAME() {
    return nl;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Br(this._element) || this._isShown(this._menu))
      return;
    const e = {
      relatedTarget: this._element
    };
    if (ne.trigger(
      this._element,
      WA,
      e
    ).defaultPrevented)
      return;
    const r = pt.getParentFromElement(this._element);
    this._inNavbar ? ie.setDataAttribute(this._menu, "popper", "none") : this._createPopper(r), "ontouchstart" in document.documentElement && !r.closest(ZA) && [].concat(...document.body.children).forEach((n) => ne.on(n, "mouseover", ed)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.setAttribute(`data-te-dropdown-${lr}`, ""), this._animationCanPlay && this._menu.animate(sE, ja), this._element.setAttribute(`data-te-dropdown-${lr}`, ""), setTimeout(
      () => {
        ne.trigger(this._element, qA, e);
      },
      this._animationCanPlay ? ja.duration : 0
    );
  }
  hide() {
    if (Br(this._element) || !this._isShown(this._menu))
      return;
    const e = {
      relatedTarget: this._element
    };
    this._completeHide(e);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (ne.on(
      document,
      gd,
      Ma,
      pt.dataApiKeydownHandler
    ), ne.on(
      document,
      gd,
      il,
      pt.dataApiKeydownHandler
    ), ne.on(document, GA, pt.clearMenus), ne.on(document, YA, pt.clearMenus), this._didInit = !0);
  }
  _completeHide(e) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || ne.trigger(
      this._element,
      VA,
      e
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((r) => ne.off(r, "mouseover", ed)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(
      lE,
      ja
    )), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-te-dropdown-${lr}`), this._element.removeAttribute(`data-te-dropdown-${lr}`), this._element.setAttribute("aria-expanded", "false"), ie.removeDataAttribute(this._menu, "popper"), ne.trigger(this._element, HA, e);
      },
      this._animationCanPlay ? ja.duration : 0
    ));
  }
  _getConfig(e) {
    if (e = {
      ...this.constructor.Default,
      ...ie.getDataAttributes(this._element),
      ...e
    }, Di(nl, e, this.constructor.DefaultType), typeof e.reference == "object" && !bo(e.reference) && typeof e.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${nl.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return e;
  }
  _createPopper(e) {
    if (typeof MA > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let r = this._element;
    this._config.reference === "parent" ? r = e : bo(this._config.reference) ? r = wo(this._config.reference) : typeof this._config.reference == "object" && (r = this._config.reference);
    const n = this._getPopperConfig(), i = n.modifiers.find(
      (a) => a.name === "applyStyles" && a.enabled === !1
    );
    this._popper = mm(
      r,
      this._menu,
      n
    ), i && ie.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(e = this._element) {
    return e.dataset[`teDropdown${lr.charAt(0).toUpperCase() + lr.slice(1)}`] === "";
  }
  _getMenuElement() {
    return Ie.next(this._element, il)[0];
  }
  _getPlacement() {
    const e = this._element.parentNode;
    if (e.dataset.teDropdownPosition === JA)
      return aE;
    if (e.dataset.teDropdownPosition === XA)
      return oE;
    const r = e.dataset.teDropdownAlignment === "end";
    return e.dataset.teDropdownPosition === KA ? r ? rE : tE : r ? iE : nE;
  }
  _detectNavbar() {
    return this._element.closest(QA) !== null;
  }
  _getOffset() {
    const { offset: e } = this._config;
    return typeof e == "string" ? e.split(",").map((r) => Number.parseInt(r, 10)) : typeof e == "function" ? (r) => e(r, this._element) : e;
  }
  _getPopperConfig() {
    const e = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (e.modifiers = [
      {
        name: "applyStyles",
        enabled: !1
      }
    ]), {
      ...e,
      ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
    };
  }
  _selectMenuItem({ key: e, target: r }) {
    const n = Ie.find(
      eE,
      this._menu
    ).filter(Ki);
    n.length && MO(
      n,
      r,
      e === eo,
      !n.includes(r)
    ).focus();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = pt.getOrCreateInstance(this, e);
      if (typeof e == "string") {
        if (typeof r[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        r[e]();
      }
    });
  }
  static clearMenus(e) {
    if (e && (e.button === zA || e.type === "keyup" && e.key !== md))
      return;
    const r = Ie.find(Ma);
    for (let n = 0, i = r.length; n < i; n++) {
      const a = pt.getInstance(r[n]);
      if (!a || a._config.autoClose === !1 || !a._isShown())
        continue;
      const o = {
        relatedTarget: a._element
      };
      if (e) {
        const s = e.composedPath(), l = s.includes(a._menu);
        if (s.includes(a._element) || a._config.autoClose === "inside" && !l || a._config.autoClose === "outside" && l || a._menu.contains(e.target) && (e.type === "keyup" && e.key === md || /input|select|option|textarea|form/i.test(e.target.tagName)))
          continue;
        e.type === "click" && (o.clickEvent = e);
      }
      a._completeHide(o);
    }
  }
  static getParentFromElement(e) {
    return Tn(e) || e.parentNode;
  }
  static dataApiKeydownHandler(e) {
    if (/input|textarea/i.test(e.target.tagName) ? e.key === hd || e.key !== Za && (e.key !== eo && e.key !== au || e.target.closest(il)) : !UA.test(e.key))
      return;
    const r = this.dataset[`teDropdown${lr.charAt(0).toUpperCase() + lr.slice(1)}`] === "";
    if (!r && e.key === Za || (e.preventDefault(), e.stopPropagation(), Br(this)))
      return;
    const n = this.matches(Ma) ? this : Ie.prev(this, Ma)[0], i = pt.getOrCreateInstance(n);
    if (e.key === Za) {
      i.hide();
      return;
    }
    if (e.key === au || e.key === eo) {
      r || i.show(), i._selectMenuItem(e);
      return;
    }
    (!r || e.key === hd) && pt.clearMenus();
  }
}
const al = "collapse", gm = "te.collapse", Uo = `.${gm}`, yd = {
  toggle: !0,
  parent: null
}, fE = {
  toggle: "boolean",
  parent: "(null|element)"
}, dE = `show${Uo}`, pE = `shown${Uo}`, hE = `hide${Uo}`, mE = `hidden${Uo}`, ol = "data-te-collapse-show", vd = "data-te-collapse-collapsed", Ba = "data-te-collapse-collapsing", gE = "data-te-collapse-horizontal", yn = "data-te-collapse-item", bd = `:scope [${yn}] [${yn}]`, yE = "width", vE = "height", bE = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", wd = "[data-te-collapse-init]", wE = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, xE = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class wn extends Gu {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = Ie.find(wd);
    for (let a = 0, o = i.length; a < o; a++) {
      const s = i[a], l = Mh(s), c = Ie.find(l).filter(
        (f) => f === this._element
      );
      l !== null && c.length && (this._selector = l, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return yd;
  }
  static get NAME() {
    return al;
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
      const l = Ie.find(
        bd,
        this._config.parent
      );
      e = Ie.find(
        bE,
        this._config.parent
      ).filter((c) => !l.includes(c));
    }
    const n = Ie.findOne(this._selector);
    if (e.length) {
      const l = e.find((c) => n !== c);
      if (r = l ? wn.getInstance(l) : null, r && r._isTransitioning)
        return;
    }
    if (ne.trigger(this._element, dE).defaultPrevented)
      return;
    e.forEach((l) => {
      n !== l && wn.getOrCreateInstance(l, { toggle: !1 }).hide(), r || Xa.setData(l, gm, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    ie.removeClass(this._element, this._classes.visible), ie.removeClass(this._element, this._classes.hidden), ie.addClass(this._element, a), this._element.removeAttribute(yn), this._element.setAttribute(Ba, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, ie.removeClass(this._element, this._classes.hidden), ie.removeClass(this._element, a), ie.addClass(this._element, this._classes.visible), this._element.removeAttribute(Ba), this._element.setAttribute(yn, ""), this._element.setAttribute(ol, ""), this._element.style[i] = "", ne.trigger(this._element, pE);
    }, s = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[i] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || ne.trigger(this._element, hE).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, RO(this._element), ie.addClass(this._element, r), ie.removeClass(this._element, this._classes.visible), ie.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Ba, ""), this._element.removeAttribute(yn), this._element.removeAttribute(ol);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const o = this._triggerArray[a], s = Tn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, ie.removeClass(this._element, r), ie.addClass(this._element, this._classes.visible), ie.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Ba), this._element.setAttribute(yn, ""), ne.trigger(this._element, mE);
    };
    this._element.style[e] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(ol);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...yd,
      ...ie.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = wo(e.parent), Di(al, e, fE), e;
  }
  _getClasses(e) {
    const r = ie.getDataClassAttributes(this._element);
    return e = {
      ...wE,
      ...r,
      ...e
    }, Di(al, e, xE), e;
  }
  _getDimension() {
    return this._element.hasAttribute(gE) ? yE : vE;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Ie.find(
      bd,
      this._config.parent
    );
    Ie.find(wd, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Tn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(vd) : n.setAttribute(`${vd}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = wn.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let xd = [];
const SE = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  xd.includes(n) || (xd.push(n), ne.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Br(this))
        return;
      const a = Tn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && t.getOrCreateInstance(a)[e]();
    }
  ));
}, sl = "alert", OE = "te.alert", ym = `.${OE}`, AE = `close${ym}`, EE = `closed${ym}`, ui = "data-te-alert-show", _E = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Sd = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, CE = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, kE = {
  fadeIn: "string",
  fadeOut: "string"
};
class Oo extends Gu {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return _E;
  }
  static get Default() {
    return Sd;
  }
  static get NAME() {
    return sl;
  }
  // Public
  close() {
    if (ne.trigger(this._element, AE).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, ie.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(ui), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(ui) && (ie.removeClass(this._element, "hidden"), ie.addClass(this._element, "block"), Ki(this._element))) {
        const e = (r) => {
          ie.removeClass(this._element, "hidden"), ie.addClass(this._element, "block"), ne.off(r.target, "animationend", e);
        };
        this._element.setAttribute(ui, ""), ne.on(this._element, "animationend", e);
      }
      this._config.animation && (ie.removeClass(this._element, this._classes.fadeOut), ie.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(ui)) {
      this._element.removeAttribute(ui);
      const e = (r) => {
        ie.addClass(this._element, "hidden"), ie.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), ne.off(r.target, "animationend", e);
      };
      ne.on(this._element, "animationend", e), ie.removeClass(this._element, this._classes.fadeIn), ie.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (SE(Oo, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...Sd,
      ...ie.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, Di(sl, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = ie.getDataClassAttributes(this._element);
    return e = {
      ...CE,
      ...r,
      ...e
    }, Di(sl, e, kE), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), ne.trigger(this._element, EE), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = Oo.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (r[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        r[e](this);
      }
    });
  }
}
It(), It();
(() => {
  var t = { 454: (n, i, a) => {
    a.d(i, { Z: () => l });
    var o = a(645), s = a.n(o)()(function(c) {
      return c[1];
    });
    s.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = s;
  }, 645: (n) => {
    n.exports = function(i) {
      var a = [];
      return a.toString = function() {
        return this.map(function(o) {
          var s = i(o);
          return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
        }).join("");
      }, a.i = function(o, s, l) {
        typeof o == "string" && (o = [[null, o, ""]]);
        var c = {};
        if (l)
          for (var f = 0; f < this.length; f++) {
            var d = this[f][0];
            d != null && (c[d] = !0);
          }
        for (var g = 0; g < o.length; g++) {
          var S = [].concat(o[g]);
          l && c[S[0]] || (s && (S[2] ? S[2] = "".concat(s, " and ").concat(S[2]) : S[2] = s), a.push(S));
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
            var s, l;
            return (o = o || {}).bubbles = !!o.bubbles, o.cancelable = !!o.cancelable, (s = document.createEvent("CustomEvent")).initCustomEvent(a, o.bubbles, o.cancelable, o.detail), l = s.preventDefault, s.preventDefault = function() {
              l.call(this);
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
      var C = {};
      return function(_) {
        if (C[_] === void 0) {
          var D = document.querySelector(_);
          if (window.HTMLIFrameElement && D instanceof window.HTMLIFrameElement)
            try {
              D = D.contentDocument.head;
            } catch {
              D = null;
            }
          C[_] = D;
        }
        return C[_];
      };
    }(), l = [];
    function c(C) {
      for (var _ = -1, D = 0; D < l.length; D++)
        if (l[D].identifier === C) {
          _ = D;
          break;
        }
      return _;
    }
    function f(C, _) {
      for (var D = {}, $ = [], N = 0; N < C.length; N++) {
        var B = C[N], M = _.base ? B[0] + _.base : B[0], P = D[M] || 0, U = "".concat(M, " ").concat(P);
        D[M] = P + 1;
        var h = c(U), y = { css: B[1], media: B[2], sourceMap: B[3] };
        h !== -1 ? (l[h].references++, l[h].updater(y)) : l.push({ identifier: U, updater: k(y, _), references: 1 }), $.push(U);
      }
      return $;
    }
    function d(C) {
      var _ = document.createElement("style"), D = C.attributes || {};
      if (D.nonce === void 0) {
        var $ = a.nc;
        $ && (D.nonce = $);
      }
      if (Object.keys(D).forEach(function(B) {
        _.setAttribute(B, D[B]);
      }), typeof C.insert == "function")
        C.insert(_);
      else {
        var N = s(C.insert || "head");
        if (!N)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        N.appendChild(_);
      }
      return _;
    }
    var g, S = (g = [], function(C, _) {
      return g[C] = _, g.filter(Boolean).join(`
`);
    });
    function m(C, _, D, $) {
      var N = D ? "" : $.media ? "@media ".concat($.media, " {").concat($.css, "}") : $.css;
      if (C.styleSheet)
        C.styleSheet.cssText = S(_, N);
      else {
        var B = document.createTextNode(N), M = C.childNodes;
        M[_] && C.removeChild(M[_]), M.length ? C.insertBefore(B, M[_]) : C.appendChild(B);
      }
    }
    function b(C, _, D) {
      var $ = D.css, N = D.media, B = D.sourceMap;
      if (N ? C.setAttribute("media", N) : C.removeAttribute("media"), B && typeof btoa < "u" && ($ += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(B)))), " */")), C.styleSheet)
        C.styleSheet.cssText = $;
      else {
        for (; C.firstChild; )
          C.removeChild(C.firstChild);
        C.appendChild(document.createTextNode($));
      }
    }
    var O = null, A = 0;
    function k(C, _) {
      var D, $, N;
      if (_.singleton) {
        var B = A++;
        D = O || (O = d(_)), $ = m.bind(null, D, B, !1), N = m.bind(null, D, B, !0);
      } else
        D = d(_), $ = b.bind(null, D, _), N = function() {
          (function(M) {
            if (M.parentNode === null)
              return !1;
            M.parentNode.removeChild(M);
          })(D);
        };
      return $(C), function(M) {
        if (M) {
          if (M.css === C.css && M.media === C.media && M.sourceMap === C.sourceMap)
            return;
          $(C = M);
        } else
          N();
      };
    }
    n.exports = function(C, _) {
      (_ = _ || {}).singleton || typeof _.singleton == "boolean" || (_.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var D = f(C = C || [], _);
      return function($) {
        if ($ = $ || [], Object.prototype.toString.call($) === "[object Array]") {
          for (var N = 0; N < D.length; N++) {
            var B = c(D[N]);
            l[B].references--;
          }
          for (var M = f($, _), P = 0; P < D.length; P++) {
            var U = c(D[P]);
            l[U].references === 0 && (l[U].updater(), l.splice(U, 1));
          }
          D = M;
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
    function o(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var c = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        l.dispatchEvent(c) || (l.value = "");
      }
    }
    function s(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    i()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals, r(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? o(l.target) : s(l.target);
    }, !0), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? s(l.target) : o(l.target);
    }, !0);
  })();
})();
It();
It();
$O("chips-input-");
const ur = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, PE = {
  line: {
    options: {
      ...ur,
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
      ...ur,
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
      ...ur,
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
      ...ur,
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
      ...ur,
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
      ...ur,
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
      ...ur,
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
      ...ur,
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
var Vo = function(t) {
  this.element = t, this.handlers = {};
}, vm = { isEmpty: { configurable: !0 } };
Vo.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Vo.prototype.unbind = function(t, e) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (r.element.removeEventListener(t, n, !1), !1);
  });
};
Vo.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
vm.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Vo.prototype, vm);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
LO("div");
const TE = (t) => {
  NO(() => {
    const e = jh();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, $E = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, IE = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Br(this) && t.getOrCreateInstance(this).show();
    }
  );
}, DE = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Tn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Br(this))
        return;
      ne.one(n, t.EVENT_HIDDEN, () => {
        Ki(this) && this.focus();
      });
      const i = Ie.findOne(t.OPEN_SELECTOR);
      i && i !== n && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, RE = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, NE = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Tn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), ne.one(n, t.EVENT_SHOW, (a) => {
        a.defaultPrevented || ne.one(n, t.EVENT_HIDDEN, () => {
          Ki(this) && this.focus();
        });
      });
      const i = Ie.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      i && t.getInstance(i).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, LE = (t, e) => {
  ne.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, FE = (t, e) => {
  ne.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = Mh(this);
      Ie.find(n).forEach((i) => {
        t.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, ME = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, jE = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, BE = (t, e) => {
  Ie.find(e).forEach((r) => {
    new t(r);
  }), ne.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, zE = (t, e) => {
  const r = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", n = (a) => typeof a != "string" ? a : r(a) ? JSON.parse(a.replace(/'/g, '"')) : a, i = (a) => {
    const o = {};
    return Object.keys(a).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const l = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        o[l] = n(a[s]);
      }
    }), o;
  };
  Ie.find(e).forEach((a) => {
    if (ie.getDataAttribute(a, "chart") !== "bubble" && ie.getDataAttribute(a, "chart") !== "scatter") {
      const o = ie.getDataAttributes(a), s = {
        data: {
          datasets: [i(o)]
        }
      };
      return o.chart && (s.type = o.chart), o.labels && (s.data.labels = JSON.parse(o.labels.replace(/'/g, '"'))), new t(a, {
        ...s,
        ...PE[s.type]
      });
    }
    return null;
  });
};
class UE {
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
const ou = new UE(), fi = {
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
    advanced: zE
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: RE
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: FE
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: $E
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: NE
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: LE
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: DE
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: IE
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: ME
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: jE
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: BE
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, VE = (t) => fi[t.NAME] || null, HE = (t, e) => {
  if (!t || !e.allowReinits && ou.isInited(t.NAME))
    return;
  ou.add(t.NAME);
  const r = VE(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (TE(t), r != null && r.advanced) {
    r == null || r.advanced(t, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(t, r == null ? void 0 : r.selector);
    return;
  }
  Ie.find(r == null ? void 0 : r.selector).forEach((i) => {
    let a = t.getInstance(i);
    a || (a = new t(i), r != null && r.onInit && a[r.onInit]());
  });
}, WE = (t, e) => {
  t.forEach((r) => HE(r, e));
}, qE = {
  allowReinits: !1,
  checkOtherImports: !1
}, bm = (t, e = {}) => {
  e = { ...qE, ...e };
  const r = Object.keys(fi).map((n) => {
    if (document.querySelector(fi[n].selector)) {
      const i = t[fi[n].name];
      return !i && !ou.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${fi[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  WE(r, e);
}, GE = { role: "alert" }, YE = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, KE = /* @__PURE__ */ L("button", {
  type: "button",
  class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
  "data-te-alert-dismiss": "",
  "aria-label": "Close"
}, [
  /* @__PURE__ */ L("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
    /* @__PURE__ */ L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: "h-6 w-6"
    }, [
      /* @__PURE__ */ L("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), HC = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return st(() => {
      bm({ Alert: Oo });
    }), (e, r) => (E(), I("div", GE, [
      L("div", null, [
        L("div", YE, [
          K(e.$slots, "default"),
          KE
        ])
      ])
    ]));
  }
}, JE = ["aria-controls"], XE = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, QE = ["id"], ZE = {
  __name: "CollapsableSection",
  props: {
    header: String,
    open: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, r = ce(null), n = ce(null), i = ce(e.open);
    st(() => {
      n.value = new wn(r.value, {
        toggle: e.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (E(), I("div", {
      class: Z(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      L("div", {
        class: Z(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        L("div", {
          onClick: a,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable"
        }, [
          ve(X(t.header) + " ", 1),
          L("button", XE, X(i.value ? "Hide" : "Show"), 1)
        ], 8, JE),
        L("div", {
          class: "!visible hidden overflow-hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          L("div", {
            class: Z([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            K(o.$slots, "default")
          ], 2)
        ], 8, QE)
      ], 2)
    ], 2));
  }
}, e_ = { class: "relative" }, WC = {
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
    st(() => document.addEventListener("keydown", r)), Ri(() => document.removeEventListener("keydown", r));
    const n = le(() => isNaN(parseInt(e.width)) ? e.width : "w-" + e.width), i = le(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), a = ce(!1);
    return (o, s) => (E(), I("div", e_, [
      L("div", {
        onClick: s[0] || (s[0] = (l) => a.value = !a.value)
      }, [
        K(o.$slots, "trigger")
      ]),
      Xe(L("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (l) => a.value = !1)
      }, null, 512), [
        [hr, a.value]
      ]),
      we(Fr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: xe(() => [
          Xe(L("div", {
            class: Z(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (l) => a.value = !1)
          }, [
            L("div", {
              class: Z(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              K(o.$slots, "content")
            ], 2)
          ], 2), [
            [hr, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, qC = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (E(), se(q(yt), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: xe(() => [
        K(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, t_ = ["href", "target"], GC = {
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
    return (n, i) => t.href && (t.method || t.data) ? (E(), se(q(yt), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: Z(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: xe(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (E(), I("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: Z(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      K(n.$slots, "default")
    ], 10, t_));
  }
}, r_ = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, n_ = ["id"], i_ = /* @__PURE__ */ L("span", { class: "mx-1 w-2" }, [
  /* @__PURE__ */ L("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "h-5 w-5"
  }, [
    /* @__PURE__ */ L("path", {
      "fill-rule": "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      "clip-rule": "evenodd"
    })
  ])
], -1), a_ = ["aria-labelledby"], YC = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return st(() => {
      bm({ Dropdown: pt }, { allowReinits: !0 });
    }), (e, r) => (E(), I("div", r_, [
      L("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: t.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        ve(X(t.title) + " ", 1),
        i_
      ], 8, n_),
      L("ul", {
        class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
        "aria-labelledby": t.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        K(e.$slots, "default")
      ], 8, a_)
    ]));
  }
}, o_ = ["href"], KC = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (E(), I("li", null, [
      L("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, X(t.title), 9, o_)
    ]));
  }
}, JC = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (E(), se(q(ZE), { header: t.header }, {
      default: xe(() => [
        we(q(S_), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, s_ = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, l_ = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, u_ = {
  key: 0,
  class: "text-center"
}, c_ = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, f_ = { class: "flex-start w-full md:flex" }, d_ = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, p_ = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, h_ = { class: "mb-1 flex justify-between" }, m_ = { class: "text-sm text-neutral-500" }, g_ = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, y_ = {
  key: 1,
  class: "text-sm text-primary-500"
}, v_ = { class: "text-sm text-neutral-500" }, b_ = { class: "font-medium" }, w_ = {
  key: 0,
  class: "line-through"
}, x_ = ["innerHTML"], S_ = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return Mi.add(Ly, xl, My, Dy, Fy), (e, r) => t.logs == null ? (E(), I("div", s_, [
      we(q(Sm))
    ])) : (E(), I("div", l_, [
      t.logs.total ? (E(), I("ol", c_, [
        (E(!0), I(de, null, bt(t.logs.data, (n) => (E(), I("li", {
          key: n.id
        }, [
          L("div", f_, [
            L("div", d_, [
              we(q(mr), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            L("div", p_, [
              L("div", h_, [
                L("span", m_, [
                  ve(X(n.event_formatted) + " ", 1),
                  n.reference ? (E(), I("span", g_, X(n.reference), 1)) : J("", !0),
                  n.causer ? (E(), I(de, { key: 1 }, [
                    n.causer.id ? (E(), se(q(yt), {
                      key: 0,
                      href: e.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: xe(() => [
                        ve(" (" + X(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (E(), I("span", y_, "(" + X(n.causer.first_name) + ")", 1))
                  ], 64)) : J("", !0)
                ]),
                L("span", v_, X(n.created_date_full), 1)
              ]),
              (E(!0), I(de, null, bt(n.changes_formatted, (i, a) => (E(), I("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                L("span", b_, X(a) + ":", 1),
                i.old ? (E(), I("span", w_, X(i.old), 1)) : J("", !0),
                ve(" " + X(i.new), 1)
              ]))), 128)),
              n.description_details ? (E(), I("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, x_)) : J("", !0)
            ])
          ])
        ]))), 128))
      ])) : (E(), I("p", u_, "No Data")),
      t.logs.links ? (E(), se(q(wm), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : J("", !0)
    ]));
  }
}, O_ = /* @__PURE__ */ L("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1), A_ = [
  O_
], XC = {
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
    Lr(
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
    st(() => document.addEventListener("keydown", a)), Ri(() => {
      document.removeEventListener("keydown", a), document.body.style.overflow = null;
    });
    const o = le(() => {
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
    return (s, l) => (E(), se(Dm, { to: "body" }, [
      we(Fr, { "leave-active-class": "duration-200" }, {
        default: xe(() => [
          Xe(L("div", {
            class: Z(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: t.alignCenter, "mb-16 items-center justify-center": t.alignCenter }]),
            "scroll-region": ""
          }, [
            we(Fr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: xe(() => [
                Xe(L("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, A_, 512), [
                  [hr, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            we(Fr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: xe(() => [
                Xe(L("div", {
                  class: Z(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value + (t.showBorder ? " border-pink rounded-md border-2 border-solid" : "")])
                }, [
                  t.show ? K(s.$slots, "default", { key: 0 }) : J("", !0)
                ], 2), [
                  [hr, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [hr, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, E_ = { class: "ml-3 flex-1 whitespace-nowrap" }, QC = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = le(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (E(), se(q(yt), {
      href: t.href,
      class: Z(r.value)
    }, {
      default: xe(() => [
        K(n.$slots, "icon"),
        L("span", E_, [
          K(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, __ = {
  key: 0,
  class: "flex justify-center"
}, C_ = { "aria-label": "Page navigation" }, k_ = ["innerHTML"], P_ = ["innerHTML", "onClick"], wm = {
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
    }
  },
  emits: ["change"],
  setup(t, { emit: e }) {
    const r = e, n = t, i = le(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const o = n.links[0], s = n.links[n.links.length - 1], l = n.links.findIndex((d) => d.active);
      let c = Math.max(1, l - Math.floor(n.maxPagesToShow / 2)), f = Math.min(n.links.length - 2, c + n.maxPagesToShow - 1);
      return f - c < n.maxPagesToShow - 1 && (c = Math.max(1, f - n.maxPagesToShow + 1)), [o, ...n.links.slice(c, f + 1), s];
    }), a = (o) => {
      r("change", o);
    };
    return (o, s) => i.value.length > 3 ? (E(), I("div", __, [
      L("nav", C_, [
        L("ul", {
          class: Z(["list-style-none flex", { [t.customListClass]: t.customListClass }])
        }, [
          (E(!0), I(de, null, bt(i.value, (l, c) => (E(), I("li", { key: c }, [
            t.linkReturn ? (E(), I(de, { key: 0 }, [
              l.url === null ? (E(), I("button", {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: l.label,
                onClick: s[0] || (s[0] = (f) => a(""))
              }, null, 10, k_)) : (E(), I("button", {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": l.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: l.active && t.customActiveLinkClass
                }]),
                innerHTML: l.label,
                onClick: (f) => a(l.url)
              }, null, 10, P_))
            ], 64)) : (E(), I(de, { key: 1 }, [
              l.url === null ? (E(), se(q(yt), {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: l.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (E(), se(q(yt), {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": l.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: l.active && t.customActiveLinkClass
                }]),
                href: l.url,
                innerHTML: l.label,
                preserveScroll: t.logs,
                preserveState: t.logs,
                only: t.logs ? ["logs"] : []
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])
    ])) : J("", !0);
  }
}, T_ = ["type", "disabled"], xm = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (E(), I("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      K(e.$slots, "default")
    ], 8, T_));
  }
}, $_ = ["type", "disabled"], ZC = {
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
    return (e, r) => (E(), I("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      K(e.$slots, "default")
    ], 8, $_));
  }
}, ek = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = le(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (E(), se(q(yt), {
      href: t.href,
      class: Z(r.value)
    }, {
      default: xe(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, I_ = ["type"], tk = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (E(), I("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      K(e.$slots, "default")
    ], 8, I_));
  }
}, D_ = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, R_ = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, rk = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (E(), I("div", {
      class: Z(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      L("div", {
        class: Z(["sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (E(), I("div", D_, [
          L("span", null, X(t.header), 1),
          e.$slots.headerButton ? (E(), I("div", R_, [
            K(e.$slots, "headerButton")
          ])) : J("", !0)
        ])) : J("", !0),
        L("div", {
          class: Z({ "px-4 pb-2": t.header })
        }, [
          K(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, N_ = {}, L_ = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, F_ = /* @__PURE__ */ L("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), M_ = [
  F_
];
function j_(t, e) {
  return E(), I("div", L_, M_);
}
const Sm = /* @__PURE__ */ Gr(N_, [["render", j_]]), B_ = { class: "flex flex-wrap gap-2 lg:flex-nowrap" }, z_ = ["onClick"], U_ = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, V_ = { class: "text-xl font-medium leading-tight text-neutral-800" }, H_ = { class: "flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2" }, nk = {
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
    return (o, s) => (E(), I("div", null, [
      L("div", B_, [
        (E(!0), I(de, null, bt(t.stats, (l) => (E(), I("div", {
          class: Z(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(l.name)
          }]),
          onClick: (c) => i(l.name),
          key: l.value
        }, [
          L("div", null, [
            L("div", U_, [
              L("h5", V_, X(l.value), 1)
            ])
          ]),
          L("div", H_, X(l.label ?? l.name), 1)
        ], 10, z_))), 128))
      ])
    ]));
  }
}, ik = {
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
    const r = t, n = e, i = ce([]), a = ce(1), o = ce(!0), s = ce(0), l = ce(""), c = (d) => {
      a.value = 1, s.value = 0, l.value = d, f();
    }, f = async (d = !1) => {
      var b;
      const g = new URLSearchParams();
      if (g.append("term", l.value), g.append("page", a.value), r.queryParams && Object.keys(r.queryParams).forEach((O) => {
        g.append(O, r.queryParams[O]);
      }), d) {
        const O = ((b = r.form) == null ? void 0 : b[r.field]) || r.modelValue;
        O && g.append("ajax_id", O);
      }
      const m = await (await fetch(`${r.url}?${g.toString()}`)).json();
      if (o.value = m.current_page < m.last_page, a.value === 1) {
        i.value = m.data;
        return;
      }
      i.value = i.value.concat(m.data);
    };
    return st(() => {
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
    }), (d, g) => (E(), se(q(Qv), {
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
const W_ = (t) => (Rm("data-v-03a62b00"), t = t(), Nm(), t), q_ = ["id", "aria-controls"], G_ = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, Y_ = /* @__PURE__ */ W_(() => /* @__PURE__ */ L("svg", {
  class: "h-3 w-3 transform",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ L("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 4 4 4-4"
  })
], -1)), K_ = ["id"], J_ = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(t) {
    const e = t, r = ce(null), n = ce(null), i = ce(e.show);
    st(() => {
      n.value = new wn(r.value, {
        toggle: e.show
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (o, s) => (E(), I("li", null, [
      L("button", {
        id: t.name,
        onClick: a,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": t.name ? t.name.replaceAll(" ", "_") : "collapsable"
      }, [
        K(o.$slots, "icon", {}, void 0, !0),
        L("span", G_, X(t.name), 1),
        Y_
      ], 8, q_),
      L("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: t.name ? t.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        K(o.$slots, "default", {}, void 0, !0)
      ], 8, K_)
    ]));
  }
}, ak = /* @__PURE__ */ Gr(J_, [["__scopeId", "data-v-03a62b00"]]), X_ = {}, Q_ = { class: "border-t border-gray-100" }, Z_ = { class: "divide-y divide-gray-100" };
function eC(t, e) {
  return E(), I("div", Q_, [
    L("dl", Z_, [
      K(t.$slots, "default")
    ])
  ]);
}
const ok = /* @__PURE__ */ Gr(X_, [["render", eC]]), tC = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, rC = { class: "flex items-center text-sm font-medium" }, nC = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, iC = { class: "flex min-h-full items-center" }, aC = { class: "flex-grow" }, oC = {
  key: 0,
  class: "ml-4 flex-shrink-0"
}, sC = { class: "flex-grow" }, lC = { class: "ml-4 flex-shrink-0" }, sk = {
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
    Mi.add(xl, Lc);
    const e = t, r = ce(!1), n = () => {
      e.editable && (r.value = !r.value);
    };
    return (i, a) => (E(), I("div", tC, [
      L("dt", rC, [
        ve(X(t.label) + " ", 1),
        K(i.$slots, "label")
      ]),
      L("dd", nC, [
        L("div", iC, [
          r.value ? (E(), I(de, { key: 1 }, [
            L("div", sC, [
              K(i.$slots, "edit")
            ]),
            L("span", lC, [
              L("button", {
                type: "button",
                onClick: n,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                we(q(mr), { icon: q(Lc) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (E(), I(de, { key: 0 }, [
            L("div", aC, [
              K(i.$slots, "default"),
              ve(" " + X(t.value), 1)
            ]),
            t.editable ? (E(), I("span", oC, [
              L("button", {
                type: "button",
                onClick: n,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                we(q(mr), { icon: q(xl) }, null, 8, ["icon"])
              ])
            ])) : J("", !0)
          ], 64))
        ])
      ])
    ]));
  }
};
var Om = { exports: {} };
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
    o ? i = gt : a && (i = self);
    var s = !i.JS_MD5_NO_COMMON_JS && !0 && t.exports, l = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], b;
    if (l) {
      var O = new ArrayBuffer(68);
      b = new Uint8Array(O), m = new Uint32Array(O);
    }
    var A = Array.isArray;
    (i.JS_MD5_NO_NODE_JS || !A) && (A = function(h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
    var k = ArrayBuffer.isView;
    l && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !k) && (k = function(h) {
      return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
    });
    var C = function(h) {
      var y = typeof h;
      if (y === "string")
        return [h, !0];
      if (y !== "object" || h === null)
        throw new Error(e);
      if (l && h.constructor === ArrayBuffer)
        return [new Uint8Array(h), !1];
      if (!A(h) && !k(h))
        throw new Error(e);
      return [h, !1];
    }, _ = function(h) {
      return function(y) {
        return new M(!0).update(y)[h]();
      };
    }, D = function() {
      var h = _("hex");
      o && (h = $(h)), h.create = function() {
        return new M();
      }, h.update = function(v) {
        return h.create().update(v);
      };
      for (var y = 0; y < g.length; ++y) {
        var x = g[y];
        h[x] = _(x);
      }
      return h;
    }, $ = function(h) {
      var y = Ye, x = Ye.Buffer, v;
      x.from && !i.JS_MD5_NO_BUFFER_FROM ? v = x.from : v = function(F) {
        return new x(F);
      };
      var z = function(F) {
        if (typeof F == "string")
          return y.createHash("md5").update(F, "utf8").digest("hex");
        if (F == null)
          throw new Error(e);
        return F.constructor === ArrayBuffer && (F = new Uint8Array(F)), A(F) || k(F) || F.constructor === x ? y.createHash("md5").update(v(F)).digest("hex") : h(F);
      };
      return z;
    }, N = function(h) {
      return function(y, x) {
        return new P(y, !0).update(x)[h]();
      };
    }, B = function() {
      var h = N("hex");
      h.create = function(v) {
        return new P(v);
      }, h.update = function(v, z) {
        return h.create(v).update(z);
      };
      for (var y = 0; y < g.length; ++y) {
        var x = g[y];
        h[x] = N(x);
      }
      return h;
    };
    function M(h) {
      if (h)
        m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = b;
      else if (l) {
        var y = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(y), this.blocks = new Uint32Array(y);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    M.prototype.update = function(h) {
      if (this.finalized)
        throw new Error(r);
      var y = C(h);
      h = y[0];
      for (var x = y[1], v, z = 0, F, j = h.length, H = this.blocks, Y = this.buffer8; z < j; ) {
        if (this.hashed && (this.hashed = !1, H[0] = H[16], H[16] = H[1] = H[2] = H[3] = H[4] = H[5] = H[6] = H[7] = H[8] = H[9] = H[10] = H[11] = H[12] = H[13] = H[14] = H[15] = 0), x)
          if (l)
            for (F = this.start; z < j && F < 64; ++z)
              v = h.charCodeAt(z), v < 128 ? Y[F++] = v : v < 2048 ? (Y[F++] = 192 | v >>> 6, Y[F++] = 128 | v & 63) : v < 55296 || v >= 57344 ? (Y[F++] = 224 | v >>> 12, Y[F++] = 128 | v >>> 6 & 63, Y[F++] = 128 | v & 63) : (v = 65536 + ((v & 1023) << 10 | h.charCodeAt(++z) & 1023), Y[F++] = 240 | v >>> 18, Y[F++] = 128 | v >>> 12 & 63, Y[F++] = 128 | v >>> 6 & 63, Y[F++] = 128 | v & 63);
          else
            for (F = this.start; z < j && F < 64; ++z)
              v = h.charCodeAt(z), v < 128 ? H[F >>> 2] |= v << d[F++ & 3] : v < 2048 ? (H[F >>> 2] |= (192 | v >>> 6) << d[F++ & 3], H[F >>> 2] |= (128 | v & 63) << d[F++ & 3]) : v < 55296 || v >= 57344 ? (H[F >>> 2] |= (224 | v >>> 12) << d[F++ & 3], H[F >>> 2] |= (128 | v >>> 6 & 63) << d[F++ & 3], H[F >>> 2] |= (128 | v & 63) << d[F++ & 3]) : (v = 65536 + ((v & 1023) << 10 | h.charCodeAt(++z) & 1023), H[F >>> 2] |= (240 | v >>> 18) << d[F++ & 3], H[F >>> 2] |= (128 | v >>> 12 & 63) << d[F++ & 3], H[F >>> 2] |= (128 | v >>> 6 & 63) << d[F++ & 3], H[F >>> 2] |= (128 | v & 63) << d[F++ & 3]);
        else if (l)
          for (F = this.start; z < j && F < 64; ++z)
            Y[F++] = h[z];
        else
          for (F = this.start; z < j && F < 64; ++z)
            H[F >>> 2] |= h[z] << d[F++ & 3];
        this.lastByteIndex = F, this.bytes += F - this.start, F >= 64 ? (this.start = F - 64, this.hash(), this.hashed = !0) : this.start = F;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, M.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var h = this.blocks, y = this.lastByteIndex;
        h[y >>> 2] |= f[y & 3], y >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, M.prototype.hash = function() {
      var h, y, x, v, z, F, j = this.blocks;
      this.first ? (h = j[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, v = (-1732584194 ^ h & 2004318071) + j[1] - 117830708, v = (v << 12 | v >>> 20) + h << 0, x = (-271733879 ^ v & (h ^ -271733879)) + j[2] - 1126478375, x = (x << 17 | x >>> 15) + v << 0, y = (h ^ x & (v ^ h)) + j[3] - 1316259209, y = (y << 22 | y >>> 10) + x << 0) : (h = this.h0, y = this.h1, x = this.h2, v = this.h3, h += (v ^ y & (x ^ v)) + j[0] - 680876936, h = (h << 7 | h >>> 25) + y << 0, v += (x ^ h & (y ^ x)) + j[1] - 389564586, v = (v << 12 | v >>> 20) + h << 0, x += (y ^ v & (h ^ y)) + j[2] + 606105819, x = (x << 17 | x >>> 15) + v << 0, y += (h ^ x & (v ^ h)) + j[3] - 1044525330, y = (y << 22 | y >>> 10) + x << 0), h += (v ^ y & (x ^ v)) + j[4] - 176418897, h = (h << 7 | h >>> 25) + y << 0, v += (x ^ h & (y ^ x)) + j[5] + 1200080426, v = (v << 12 | v >>> 20) + h << 0, x += (y ^ v & (h ^ y)) + j[6] - 1473231341, x = (x << 17 | x >>> 15) + v << 0, y += (h ^ x & (v ^ h)) + j[7] - 45705983, y = (y << 22 | y >>> 10) + x << 0, h += (v ^ y & (x ^ v)) + j[8] + 1770035416, h = (h << 7 | h >>> 25) + y << 0, v += (x ^ h & (y ^ x)) + j[9] - 1958414417, v = (v << 12 | v >>> 20) + h << 0, x += (y ^ v & (h ^ y)) + j[10] - 42063, x = (x << 17 | x >>> 15) + v << 0, y += (h ^ x & (v ^ h)) + j[11] - 1990404162, y = (y << 22 | y >>> 10) + x << 0, h += (v ^ y & (x ^ v)) + j[12] + 1804603682, h = (h << 7 | h >>> 25) + y << 0, v += (x ^ h & (y ^ x)) + j[13] - 40341101, v = (v << 12 | v >>> 20) + h << 0, x += (y ^ v & (h ^ y)) + j[14] - 1502002290, x = (x << 17 | x >>> 15) + v << 0, y += (h ^ x & (v ^ h)) + j[15] + 1236535329, y = (y << 22 | y >>> 10) + x << 0, h += (x ^ v & (y ^ x)) + j[1] - 165796510, h = (h << 5 | h >>> 27) + y << 0, v += (y ^ x & (h ^ y)) + j[6] - 1069501632, v = (v << 9 | v >>> 23) + h << 0, x += (h ^ y & (v ^ h)) + j[11] + 643717713, x = (x << 14 | x >>> 18) + v << 0, y += (v ^ h & (x ^ v)) + j[0] - 373897302, y = (y << 20 | y >>> 12) + x << 0, h += (x ^ v & (y ^ x)) + j[5] - 701558691, h = (h << 5 | h >>> 27) + y << 0, v += (y ^ x & (h ^ y)) + j[10] + 38016083, v = (v << 9 | v >>> 23) + h << 0, x += (h ^ y & (v ^ h)) + j[15] - 660478335, x = (x << 14 | x >>> 18) + v << 0, y += (v ^ h & (x ^ v)) + j[4] - 405537848, y = (y << 20 | y >>> 12) + x << 0, h += (x ^ v & (y ^ x)) + j[9] + 568446438, h = (h << 5 | h >>> 27) + y << 0, v += (y ^ x & (h ^ y)) + j[14] - 1019803690, v = (v << 9 | v >>> 23) + h << 0, x += (h ^ y & (v ^ h)) + j[3] - 187363961, x = (x << 14 | x >>> 18) + v << 0, y += (v ^ h & (x ^ v)) + j[8] + 1163531501, y = (y << 20 | y >>> 12) + x << 0, h += (x ^ v & (y ^ x)) + j[13] - 1444681467, h = (h << 5 | h >>> 27) + y << 0, v += (y ^ x & (h ^ y)) + j[2] - 51403784, v = (v << 9 | v >>> 23) + h << 0, x += (h ^ y & (v ^ h)) + j[7] + 1735328473, x = (x << 14 | x >>> 18) + v << 0, y += (v ^ h & (x ^ v)) + j[12] - 1926607734, y = (y << 20 | y >>> 12) + x << 0, z = y ^ x, h += (z ^ v) + j[5] - 378558, h = (h << 4 | h >>> 28) + y << 0, v += (z ^ h) + j[8] - 2022574463, v = (v << 11 | v >>> 21) + h << 0, F = v ^ h, x += (F ^ y) + j[11] + 1839030562, x = (x << 16 | x >>> 16) + v << 0, y += (F ^ x) + j[14] - 35309556, y = (y << 23 | y >>> 9) + x << 0, z = y ^ x, h += (z ^ v) + j[1] - 1530992060, h = (h << 4 | h >>> 28) + y << 0, v += (z ^ h) + j[4] + 1272893353, v = (v << 11 | v >>> 21) + h << 0, F = v ^ h, x += (F ^ y) + j[7] - 155497632, x = (x << 16 | x >>> 16) + v << 0, y += (F ^ x) + j[10] - 1094730640, y = (y << 23 | y >>> 9) + x << 0, z = y ^ x, h += (z ^ v) + j[13] + 681279174, h = (h << 4 | h >>> 28) + y << 0, v += (z ^ h) + j[0] - 358537222, v = (v << 11 | v >>> 21) + h << 0, F = v ^ h, x += (F ^ y) + j[3] - 722521979, x = (x << 16 | x >>> 16) + v << 0, y += (F ^ x) + j[6] + 76029189, y = (y << 23 | y >>> 9) + x << 0, z = y ^ x, h += (z ^ v) + j[9] - 640364487, h = (h << 4 | h >>> 28) + y << 0, v += (z ^ h) + j[12] - 421815835, v = (v << 11 | v >>> 21) + h << 0, F = v ^ h, x += (F ^ y) + j[15] + 530742520, x = (x << 16 | x >>> 16) + v << 0, y += (F ^ x) + j[2] - 995338651, y = (y << 23 | y >>> 9) + x << 0, h += (x ^ (y | ~v)) + j[0] - 198630844, h = (h << 6 | h >>> 26) + y << 0, v += (y ^ (h | ~x)) + j[7] + 1126891415, v = (v << 10 | v >>> 22) + h << 0, x += (h ^ (v | ~y)) + j[14] - 1416354905, x = (x << 15 | x >>> 17) + v << 0, y += (v ^ (x | ~h)) + j[5] - 57434055, y = (y << 21 | y >>> 11) + x << 0, h += (x ^ (y | ~v)) + j[12] + 1700485571, h = (h << 6 | h >>> 26) + y << 0, v += (y ^ (h | ~x)) + j[3] - 1894986606, v = (v << 10 | v >>> 22) + h << 0, x += (h ^ (v | ~y)) + j[10] - 1051523, x = (x << 15 | x >>> 17) + v << 0, y += (v ^ (x | ~h)) + j[1] - 2054922799, y = (y << 21 | y >>> 11) + x << 0, h += (x ^ (y | ~v)) + j[8] + 1873313359, h = (h << 6 | h >>> 26) + y << 0, v += (y ^ (h | ~x)) + j[15] - 30611744, v = (v << 10 | v >>> 22) + h << 0, x += (h ^ (v | ~y)) + j[6] - 1560198380, x = (x << 15 | x >>> 17) + v << 0, y += (v ^ (x | ~h)) + j[13] + 1309151649, y = (y << 21 | y >>> 11) + x << 0, h += (x ^ (y | ~v)) + j[4] - 145523070, h = (h << 6 | h >>> 26) + y << 0, v += (y ^ (h | ~x)) + j[11] - 1120210379, v = (v << 10 | v >>> 22) + h << 0, x += (h ^ (v | ~y)) + j[2] + 718787259, x = (x << 15 | x >>> 17) + v << 0, y += (v ^ (x | ~h)) + j[9] - 343485551, y = (y << 21 | y >>> 11) + x << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = y - 271733879 << 0, this.h2 = x - 1732584194 << 0, this.h3 = v + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + y << 0, this.h2 = this.h2 + x << 0, this.h3 = this.h3 + v << 0);
    }, M.prototype.hex = function() {
      this.finalize();
      var h = this.h0, y = this.h1, x = this.h2, v = this.h3;
      return c[h >>> 4 & 15] + c[h & 15] + c[h >>> 12 & 15] + c[h >>> 8 & 15] + c[h >>> 20 & 15] + c[h >>> 16 & 15] + c[h >>> 28 & 15] + c[h >>> 24 & 15] + c[y >>> 4 & 15] + c[y & 15] + c[y >>> 12 & 15] + c[y >>> 8 & 15] + c[y >>> 20 & 15] + c[y >>> 16 & 15] + c[y >>> 28 & 15] + c[y >>> 24 & 15] + c[x >>> 4 & 15] + c[x & 15] + c[x >>> 12 & 15] + c[x >>> 8 & 15] + c[x >>> 20 & 15] + c[x >>> 16 & 15] + c[x >>> 28 & 15] + c[x >>> 24 & 15] + c[v >>> 4 & 15] + c[v & 15] + c[v >>> 12 & 15] + c[v >>> 8 & 15] + c[v >>> 20 & 15] + c[v >>> 16 & 15] + c[v >>> 28 & 15] + c[v >>> 24 & 15];
    }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
      this.finalize();
      var h = this.h0, y = this.h1, x = this.h2, v = this.h3;
      return [
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        y & 255,
        y >>> 8 & 255,
        y >>> 16 & 255,
        y >>> 24 & 255,
        x & 255,
        x >>> 8 & 255,
        x >>> 16 & 255,
        x >>> 24 & 255,
        v & 255,
        v >>> 8 & 255,
        v >>> 16 & 255,
        v >>> 24 & 255
      ];
    }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
      this.finalize();
      var h = new ArrayBuffer(16), y = new Uint32Array(h);
      return y[0] = this.h0, y[1] = this.h1, y[2] = this.h2, y[3] = this.h3, h;
    }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
      for (var h, y, x, v = "", z = this.array(), F = 0; F < 15; )
        h = z[F++], y = z[F++], x = z[F++], v += S[h >>> 2] + S[(h << 4 | y >>> 4) & 63] + S[(y << 2 | x >>> 6) & 63] + S[x & 63];
      return h = z[F], v += S[h >>> 2] + S[h << 4 & 63] + "==", v;
    };
    function P(h, y) {
      var x, v = C(h);
      if (h = v[0], v[1]) {
        var z = [], F = h.length, j = 0, H;
        for (x = 0; x < F; ++x)
          H = h.charCodeAt(x), H < 128 ? z[j++] = H : H < 2048 ? (z[j++] = 192 | H >>> 6, z[j++] = 128 | H & 63) : H < 55296 || H >= 57344 ? (z[j++] = 224 | H >>> 12, z[j++] = 128 | H >>> 6 & 63, z[j++] = 128 | H & 63) : (H = 65536 + ((H & 1023) << 10 | h.charCodeAt(++x) & 1023), z[j++] = 240 | H >>> 18, z[j++] = 128 | H >>> 12 & 63, z[j++] = 128 | H >>> 6 & 63, z[j++] = 128 | H & 63);
        h = z;
      }
      h.length > 64 && (h = new M(!0).update(h).array());
      var Y = [], Me = [];
      for (x = 0; x < 64; ++x) {
        var Ue = h[x] || 0;
        Y[x] = 92 ^ Ue, Me[x] = 54 ^ Ue;
      }
      M.call(this, y), this.update(Me), this.oKeyPad = Y, this.inner = !0, this.sharedMemory = y;
    }
    P.prototype = new M(), P.prototype.finalize = function() {
      if (M.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var h = this.array();
        M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), M.prototype.finalize.call(this);
      }
    };
    var U = D();
    U.md5 = U, U.md5.hmac = B(), s ? t.exports = U : i.md5 = U;
  })();
})(Om);
var uC = Om.exports;
const cC = ["src", "alt"], lk = {
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
    const e = t, r = le(() => uC.md5(e.email.trim().toLowerCase())), n = le(() => `https://www.gravatar.com/avatar/${r.value}?s=${e.size}`), i = le(() => `Gravatar for ${e.email}`);
    return (a, o) => (E(), I("img", {
      src: n.value,
      alt: i.value
    }, null, 8, cC));
  }
}, uk = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (E(), se(_2, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id,
      class: "cursor-pointer"
    }, {
      default: xe(() => [
        K(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, ck = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  HC as Alert,
  dC as Checkbox,
  ZE as CollapsableSection,
  ZE as CollapsibleSection,
  ZC as DangerButton,
  ok as DescriptionList,
  sk as DescriptionListItem,
  WC as Dropdown,
  qC as DropdownLink,
  mC as DropdownSearchbar,
  bC as FileDropZoneInput,
  lk as GravatarImg,
  wC as Images,
  pC as Input,
  ji as InputError,
  Su as InputLabel,
  GC as LinkButton,
  YC as LinkDropdownButton,
  KC as LinkDropdownButtonItem,
  JC as Logs,
  S_ as LogsContent,
  XC as Modal,
  ak as NavCollapse,
  QC as NavLink,
  wm as Pagination,
  xm as PrimaryButton,
  xC as RadioButton,
  ek as ResponsiveNavLink,
  Qv as SearchSelect,
  tk as SecondaryButton,
  rk as Section,
  ik as Select2ajax,
  Sm as Spinner,
  nk as Stats,
  Lf as SubmitButton,
  SC as Table,
  VC as TableItemCard,
  _2 as Td,
  uk as TdCollapseHandler,
  tv as TextInput,
  hC as Textarea,
  AC as Th,
  OC as Thead,
  _C as TrCollapse,
  EC as TrCollapseHandler,
  ck as default,
  Hi as getInertiaRouter,
  yC as hasPermission,
  px as moneyFormat,
  gC as numberFormat,
  vC as setInertiaRouter
};
