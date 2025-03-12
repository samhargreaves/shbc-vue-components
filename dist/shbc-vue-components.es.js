import { computed as fe, withDirectives as vt, createElementBlock as B, openBlock as F, normalizeClass as te, vModelCheckbox as Ff, defineComponent as fr, watch as xr, h as lr, mergeModels as Dl, ref as de, useModel as zh, onMounted as Ct, createBlock as pe, createCommentVNode as Z, createElementVNode as U, unref as J, renderSlot as Q, toDisplayString as re, createVNode as De, Transition as qr, withCtx as $e, vModelSelect as Vh, Fragment as Ae, createTextVNode as ke, vShow as Sr, vModelText as Hh, resolveDirective as Wh, normalizeProps as Et, guardReactiveProps as Rt, renderList as Lt, resolveDynamicComponent as La, mergeProps as Un, toHandlers as Gh, withModifiers as vr, withKeys as rn, normalizeStyle as Nn, shallowRef as Kh, markRaw as $l, onUnmounted as dn, reactive as il, toRefs as Jh, nextTick as Yh, Teleport as Xh } from "vue";
const Qh = ["value"], qS = {
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
    const r = t, n = e, i = fe({
      get() {
        return n.checked;
      },
      set(a) {
        r("update:checked", a);
      }
    });
    return (a, s) => vt((F(), B("input", {
      type: "checkbox",
      value: e.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => i.value = l),
      class: te(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [e.customClass]: e.customClass }])
    }, null, 10, Qh)), [
      [Ff, i.value]
    ]);
  }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Zh(e, t, r) {
  return (t = tp(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(r), !0).forEach(function(n) {
      Zh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ep(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tp(e) {
  var t = ep(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Nl = () => {
};
let al = {}, If = {}, Df = null, $f = {
  mark: Nl,
  measure: Nl
};
try {
  typeof window < "u" && (al = window), typeof document < "u" && (If = document), typeof MutationObserver < "u" && (Df = MutationObserver), typeof performance < "u" && ($f = performance);
} catch {
}
const {
  userAgent: Ml = ""
} = al.navigator || {}, Ar = al, Ce = If, Bl = Df, mi = $f;
Ar.document;
const dr = !!Ce.documentElement && !!Ce.head && typeof Ce.addEventListener == "function" && typeof Ce.createElement == "function", Lf = ~Ml.indexOf("MSIE") || ~Ml.indexOf("Trident/");
var rp = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, np = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Nf = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, ip = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Mf = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], at = "classic", Ui = "duotone", ap = "sharp", sp = "sharp-duotone", Bf = [at, Ui, ap, sp], op = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, lp = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, up = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), cp = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, fp = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ql = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, dp = ["kit"], hp = {
  kit: {
    "fa-kit": "fak"
  }
}, pp = ["fak", "fakd"], mp = {
  kit: {
    fak: "fa-kit"
  }
}, jl = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, gi = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, gp = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], yp = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], bp = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, vp = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, wp = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Ao = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, xp = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Eo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...gp, ...xp], Sp = ["solid", "regular", "light", "thin", "duotone", "brands"], qf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ap = qf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ep = [...Object.keys(wp), ...Sp, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", gi.GROUP, gi.SWAP_OPACITY, gi.PRIMARY, gi.SECONDARY].concat(qf.map((e) => "".concat(e, "x"))).concat(Ap.map((e) => "w-".concat(e))), Cp = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const ur = "___FONT_AWESOME___", Co = 16, jf = "fa", Uf = "svg-inline--fa", Ur = "data-fa-i2svg", Oo = "data-fa-pseudo-element", Op = "data-fa-pseudo-element-pending", sl = "data-prefix", ol = "data-icon", Ul = "fontawesome-i2svg", Pp = "async", _p = ["HTML", "HEAD", "STYLE", "SCRIPT"], zf = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Gn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[at];
    }
  });
}
const Vf = V({}, Nf);
Vf[at] = V(V(V(V({}, {
  "fa-duotone": "duotone"
}), Nf[at]), ql.kit), ql["kit-duotone"]);
const kp = Gn(Vf), Po = V({}, cp);
Po[at] = V(V(V(V({}, {
  duotone: "fad"
}), Po[at]), jl.kit), jl["kit-duotone"]);
const zl = Gn(Po), _o = V({}, Ao);
_o[at] = V(V({}, _o[at]), mp.kit);
const ll = Gn(_o), ko = V({}, vp);
ko[at] = V(V({}, ko[at]), hp.kit);
Gn(ko);
const Tp = rp, Hf = "fa-layers-text", Rp = np, Fp = V({}, op);
Gn(Fp);
const Ip = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Na = ip, Dp = [...dp, ...Ep], Mn = Ar.FontAwesomeConfig || {};
function $p(e) {
  var t = Ce.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Lp(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ce && typeof Ce.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = Lp($p(r));
  i != null && (Mn[n] = i);
});
const Wf = {
  styleDefault: "solid",
  familyDefault: at,
  cssPrefix: jf,
  replacementClass: Uf,
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
Mn.familyPrefix && (Mn.cssPrefix = Mn.familyPrefix);
const cn = V(V({}, Wf), Mn);
cn.autoReplaceSvg || (cn.observeMutations = !1);
const Y = {};
Object.keys(Wf).forEach((e) => {
  Object.defineProperty(Y, e, {
    enumerable: !0,
    set: function(t) {
      cn[e] = t, Bn.forEach((r) => r(Y));
    },
    get: function() {
      return cn[e];
    }
  });
});
Object.defineProperty(Y, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    cn.cssPrefix = e, Bn.forEach((t) => t(Y));
  },
  get: function() {
    return cn.cssPrefix;
  }
});
Ar.FontAwesomeConfig = Y;
const Bn = [];
function Np(e) {
  return Bn.push(e), () => {
    Bn.splice(Bn.indexOf(e), 1);
  };
}
const yr = Co, Gt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Mp(e) {
  if (!e || !dr)
    return;
  const t = Ce.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = Ce.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const a = r[i], s = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (n = a);
  }
  return Ce.head.insertBefore(t, n), e;
}
const Bp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function zn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Bp[Math.random() * 62 | 0];
  return t;
}
function hn(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function ul(e) {
  return e.classList ? hn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Gf(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function qp(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(Gf(e[r]), '" '), "").trim();
}
function zi(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function cl(e) {
  return e.size !== Gt.size || e.x !== Gt.x || e.y !== Gt.y || e.rotate !== Gt.rotate || e.flipX || e.flipY;
}
function jp(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), p = {
    transform: "".concat(a, " ").concat(s, " ").concat(l)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: p,
    path: u
  };
}
function Up(e) {
  let {
    transform: t,
    width: r = Co,
    height: n = Co,
    startCentered: i = !1
  } = e, a = "";
  return i && Lf ? a += "translate(".concat(t.x / yr - r / 2, "em, ").concat(t.y / yr - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / yr, "em), calc(-50% + ").concat(t.y / yr, "em)) ") : a += "translate(".concat(t.x / yr, "em, ").concat(t.y / yr, "em) "), a += "scale(".concat(t.size / yr * (t.flipX ? -1 : 1), ", ").concat(t.size / yr * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var zp = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;
function Kf() {
  const e = jf, t = Uf, r = Y.cssPrefix, n = Y.replacementClass;
  let i = zp;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(l, ".".concat(n));
  }
  return i;
}
let Vl = !1;
function Ma() {
  Y.autoAddCss && !Vl && (Mp(Kf()), Vl = !0);
}
var Vp = {
  mixout() {
    return {
      dom: {
        css: Kf,
        insertCss: Ma
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ma();
      },
      beforeI2svg() {
        Ma();
      }
    };
  }
};
const cr = Ar || {};
cr[ur] || (cr[ur] = {});
cr[ur].styles || (cr[ur].styles = {});
cr[ur].hooks || (cr[ur].hooks = {});
cr[ur].shims || (cr[ur].shims = []);
var Kt = cr[ur];
const Jf = [], Yf = function() {
  Ce.removeEventListener("DOMContentLoaded", Yf), Fi = 1, Jf.map((e) => e());
};
let Fi = !1;
dr && (Fi = (Ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ce.readyState), Fi || Ce.addEventListener("DOMContentLoaded", Yf));
function Hp(e) {
  dr && (Fi ? setTimeout(e, 0) : Jf.push(e));
}
function Kn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? Gf(e) : "<".concat(t, " ").concat(qp(r), ">").concat(n.map(Kn).join(""), "</").concat(t, ">");
}
function Hl(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ba = function(t, r, n, i) {
  var a = Object.keys(t), s = a.length, l = r, p, u, o;
  for (n === void 0 ? (p = 1, o = t[a[0]]) : (p = 0, o = n); p < s; p++)
    u = a[p], o = l(o, t[u], u, t);
  return o;
};
function Wp(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const a = e.charCodeAt(r++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
function To(e) {
  const t = Wp(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Gp(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function Wl(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Ro(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Wl(t);
  typeof Kt.hooks.addPack == "function" && !n ? Kt.hooks.addPack(e, Wl(t)) : Kt.styles[e] = V(V({}, Kt.styles[e] || {}), i), e === "fas" && Ro("fa", t);
}
const {
  styles: Vn,
  shims: Kp
} = Kt, Xf = Object.keys(ll), Jp = Xf.reduce((e, t) => (e[t] = Object.keys(ll[t]), e), {});
let fl = null, Qf = {}, Zf = {}, ed = {}, td = {}, rd = {};
function Yp(e) {
  return ~Dp.indexOf(e);
}
function Xp(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !Yp(i) ? i : null;
}
const nd = () => {
  const e = (n) => Ba(Vn, (i, a, s) => (i[s] = Ba(a, n, {}), i), {});
  Qf = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((l) => typeof l == "number").forEach((l) => {
    n[l.toString(16)] = a;
  }), n)), Zf = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((l) => typeof l == "string").forEach((l) => {
    n[l] = a;
  }), n)), rd = e((n, i, a) => {
    const s = i[2];
    return n[a] = a, s.forEach((l) => {
      n[l] = a;
    }), n;
  });
  const t = "far" in Vn || Y.autoFetchSvg, r = Ba(Kp, (n, i) => {
    const a = i[0];
    let s = i[1];
    const l = i[2];
    return s === "far" && !t && (s = "fas"), typeof a == "string" && (n.names[a] = {
      prefix: s,
      iconName: l
    }), typeof a == "number" && (n.unicodes[a.toString(16)] = {
      prefix: s,
      iconName: l
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  ed = r.names, td = r.unicodes, fl = Vi(Y.styleDefault, {
    family: Y.familyDefault
  });
};
Np((e) => {
  fl = Vi(e.styleDefault, {
    family: Y.familyDefault
  });
});
nd();
function dl(e, t) {
  return (Qf[e] || {})[t];
}
function Qp(e, t) {
  return (Zf[e] || {})[t];
}
function Nr(e, t) {
  return (rd[e] || {})[t];
}
function id(e) {
  return ed[e] || {
    prefix: null,
    iconName: null
  };
}
function Zp(e) {
  const t = td[e], r = dl("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Er() {
  return fl;
}
const ad = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function em(e) {
  let t = at;
  const r = Xf.reduce((n, i) => (n[i] = "".concat(Y.cssPrefix, "-").concat(i), n), {});
  return Bf.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => Jp[n].includes(i))) && (t = n);
  }), t;
}
function Vi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = at
  } = t, n = kp[r][e];
  if (r === Ui && !e)
    return "fad";
  const i = zl[r][e] || zl[r][n], a = e in Kt.styles ? e : null;
  return i || a || null;
}
function tm(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = Xp(Y.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Gl(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Hi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = Eo.concat(yp), a = Gl(e.filter((f) => i.includes(f))), s = Gl(e.filter((f) => !Eo.includes(f))), l = a.filter((f) => (n = f, !Mf.includes(f))), [p = null] = l, u = em(a), o = V(V({}, tm(s)), {}, {
    prefix: Vi(p, {
      family: u
    })
  });
  return V(V(V({}, o), am({
    values: e,
    family: u,
    styles: Vn,
    config: Y,
    canonical: o,
    givenPrefix: n
  })), rm(r, n, o));
}
function rm(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? id(i) : {}, s = Nr(n, i);
  return i = a.iconName || s || i, n = a.prefix || n, n === "far" && !Vn.far && Vn.fas && !Y.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const nm = Bf.filter((e) => e !== at || e !== Ui), im = Object.keys(Ao).filter((e) => e !== at).map((e) => Object.keys(Ao[e])).flat();
function am(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: s = {}
  } = e, l = r === Ui, p = t.includes("fa-duotone") || t.includes("fad"), u = s.familyDefault === "duotone", o = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!l && (p || u || o) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && nm.includes(r) && (Object.keys(a).find((h) => im.includes(h)) || s.autoFetchSvg)) {
    const h = up.get(r).defaultShortPrefixId;
    n.prefix = h, n.iconName = Nr(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = Er() || "fas"), n;
}
class sm {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = V(V({}, this.definitions[a] || {}), i[a]), Ro(a, i[a]);
      const s = ll[at][a];
      s && Ro(s, i[a]), nd();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((i) => {
      const {
        prefix: a,
        iconName: s,
        icon: l
      } = n[i], p = l[2];
      t[a] || (t[a] = {}), p.length > 0 && p.forEach((u) => {
        typeof u == "string" && (t[a][u] = l);
      }), t[a][s] = l;
    }), t;
  }
}
let Kl = [], an = {};
const on = {}, om = Object.keys(on);
function lm(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Kl = e, an = {}, Object.keys(on).forEach((n) => {
    om.indexOf(n) === -1 && delete on[n];
  }), Kl.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((s) => {
        r[a] || (r[a] = {}), r[a][s] = i[a][s];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((s) => {
        an[s] || (an[s] = []), an[s].push(a[s]);
      });
    }
    n.provides && n.provides(on);
  }), r;
}
function Fo(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return (an[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...n]);
  }), t;
}
function zr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (an[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function Cr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return on[e] ? on[e].apply(null, t) : void 0;
}
function Io(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || Er();
  if (t)
    return t = Nr(r, t) || t, Hl(sd.definitions, r, t) || Hl(Kt.styles, r, t);
}
const sd = new sm(), um = () => {
  Y.autoReplaceSvg = !1, Y.observeMutations = !1, zr("noAuto");
}, cm = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return dr ? (zr("beforeI2svg", e), Cr("pseudoElements2svg", e), Cr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0), Y.observeMutations = !0, Hp(() => {
      dm({
        autoReplaceSvgRoot: t
      }), zr("watch", e);
    });
  }
}, fm = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Nr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Vi(e[0]);
      return {
        prefix: r,
        iconName: Nr(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Y.cssPrefix, "-")) > -1 || e.match(Tp))) {
      const t = Hi(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Er(),
        iconName: Nr(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Er();
      return {
        prefix: t,
        iconName: Nr(t, e) || e
      };
    }
  }
}, xt = {
  noAuto: um,
  config: Y,
  dom: cm,
  parse: fm,
  library: sd,
  findIconDefinition: Io,
  toHtml: Kn
}, dm = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ce
  } = e;
  (Object.keys(Kt.styles).length > 0 || Y.autoFetchSvg) && dr && Y.autoReplaceSvg && xt.dom.i2svg({
    node: t
  });
};
function Wi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Kn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!dr) return;
      const r = Ce.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function hm(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: s
  } = e;
  if (cl(s) && r.found && !n.found) {
    const {
      width: l,
      height: p
    } = r, u = {
      x: l / p / 2,
      y: 0.5
    };
    i.style = zi(V(V({}, a), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function pm(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: i,
    symbol: a
  } = e;
  const s = a === !0 ? "".concat(t, "-").concat(Y.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: V(V({}, i), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function hl(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: i,
    transform: a,
    symbol: s,
    title: l,
    maskId: p,
    titleId: u,
    extra: o,
    watchable: f = !1
  } = e, {
    width: h,
    height: d
  } = r.found ? r : t, m = pp.includes(n), y = [Y.replacementClass, i ? "".concat(Y.cssPrefix, "-").concat(i) : ""].filter((E) => o.classes.indexOf(E) === -1).filter((E) => E !== "" || !!E).concat(o.classes).join(" ");
  let g = {
    children: [],
    attributes: V(V({}, o.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: y,
      role: o.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(d)
    })
  };
  const b = m && !~o.classes.indexOf("fa-fw") ? {
    width: "".concat(h / d * 16 * 0.0625, "em")
  } : {};
  f && (g.attributes[Ur] = ""), l && (g.children.push({
    tag: "title",
    attributes: {
      id: g.attributes["aria-labelledby"] || "title-".concat(u || zn())
    },
    children: [l]
  }), delete g.attributes.title);
  const v = V(V({}, g), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: p,
    transform: a,
    symbol: s,
    styles: V(V({}, b), o.styles)
  }), {
    children: S,
    attributes: O
  } = r.found && t.found ? Cr("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : Cr("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  };
  return v.children = S, v.attributes = O, s ? pm(v) : hm(v);
}
function Jl(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: s,
    watchable: l = !1
  } = e, p = V(V(V({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (p[Ur] = "");
  const u = V({}, s.styles);
  cl(i) && (u.transform = Up({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), u["-webkit-transform"] = u.transform);
  const o = zi(u);
  o.length > 0 && (p.style = o);
  const f = [];
  return f.push({
    tag: "span",
    attributes: p,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function mm(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = V(V(V({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = zi(n.styles);
  a.length > 0 && (i.style = a);
  const s = [];
  return s.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
const {
  styles: qa
} = Kt;
function Do(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(Y.cssPrefix, "-").concat(Na.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Na.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Y.cssPrefix, "-").concat(Na.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: i
  };
}
const gm = {
  found: !1,
  width: 512,
  height: 512
};
function ym(e, t) {
  !zf && !Y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function $o(e, t) {
  let r = t;
  return t === "fa" && Y.styleDefault !== null && (t = Er()), new Promise((n, i) => {
    if (r === "fa") {
      const a = id(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && qa[t] && qa[t][e]) {
      const a = qa[t][e];
      return n(Do(a));
    }
    ym(e, t), n(V(V({}, gm), {}, {
      icon: Y.showMissingIcons && e ? Cr("missingIconAbstract") || {} : {}
    }));
  });
}
const Yl = () => {
}, Lo = Y.measurePerformance && mi && mi.mark && mi.measure ? mi : {
  mark: Yl,
  measure: Yl
}, Fn = 'FA "6.7.2"', bm = (e) => (Lo.mark("".concat(Fn, " ").concat(e, " begins")), () => od(e)), od = (e) => {
  Lo.mark("".concat(Fn, " ").concat(e, " ends")), Lo.measure("".concat(Fn, " ").concat(e), "".concat(Fn, " ").concat(e, " begins"), "".concat(Fn, " ").concat(e, " ends"));
};
var pl = {
  begin: bm,
  end: od
};
const Ai = () => {
};
function Xl(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ur) : null) == "string";
}
function vm(e) {
  const t = e.getAttribute ? e.getAttribute(sl) : null, r = e.getAttribute ? e.getAttribute(ol) : null;
  return t && r;
}
function wm(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Y.replacementClass);
}
function xm() {
  return Y.autoReplaceSvg === !0 ? Ei.replace : Ei[Y.autoReplaceSvg] || Ei.replace;
}
function Sm(e) {
  return Ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function Am(e) {
  return Ce.createElement(e);
}
function ld(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? Sm : Am
  } = t;
  if (typeof e == "string")
    return Ce.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(ld(a, {
      ceFn: r
    }));
  }), n;
}
function Em(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ei = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(ld(r), t);
      }), t.getAttribute(Ur) === null && Y.keepOriginalSource) {
        let r = Ce.createComment(Em(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~ul(t).indexOf(Y.replacementClass))
      return Ei.replace(e);
    const n = new RegExp("".concat(Y.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((s, l) => (l === Y.replacementClass || l.match(n) ? s.toSvg.push(l) : s.toNode.push(l), s), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Kn(a)).join(`
`);
    t.setAttribute(Ur, ""), t.innerHTML = i;
  }
};
function Ql(e) {
  e();
}
function ud(e, t) {
  const r = typeof t == "function" ? t : Ai;
  if (e.length === 0)
    r();
  else {
    let n = Ql;
    Y.mutateApproach === Pp && (n = Ar.requestAnimationFrame || Ql), n(() => {
      const i = xm(), a = pl.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let ml = !1;
function cd() {
  ml = !0;
}
function No() {
  ml = !1;
}
let Ii = null;
function Zl(e) {
  if (!Bl || !Y.observeMutations)
    return;
  const {
    treeCallback: t = Ai,
    nodeCallback: r = Ai,
    pseudoElementsCallback: n = Ai,
    observeMutationsRoot: i = Ce
  } = e;
  Ii = new Bl((a) => {
    if (ml) return;
    const s = Er();
    hn(a).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !Xl(l.addedNodes[0]) && (Y.searchPseudoElements && n(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && Y.searchPseudoElements && n(l.target.parentNode), l.type === "attributes" && Xl(l.target) && ~Ip.indexOf(l.attributeName))
        if (l.attributeName === "class" && vm(l.target)) {
          const {
            prefix: p,
            iconName: u
          } = Hi(ul(l.target));
          l.target.setAttribute(sl, p || s), u && l.target.setAttribute(ol, u);
        } else wm(l.target) && r(l.target);
    });
  }), dr && Ii.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Cm() {
  Ii && Ii.disconnect();
}
function Om(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), s = a[0], l = a.slice(1);
    return s && l.length > 0 && (n[s] = l.join(":").trim()), n;
  }, {})), r;
}
function Pm(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Hi(ul(e));
  return i.prefix || (i.prefix = Er()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Qp(i.prefix, e.innerText) || dl(i.prefix, To(e.innerText))), !i.iconName && Y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function _m(e) {
  const t = hn(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return Y.autoA11y && (r ? t["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(n || zn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function km() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Gt,
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
function eu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Pm(e), a = _m(e), s = Fo("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Om(e) : [];
  return V({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: Gt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: a
    }
  }, s);
}
const {
  styles: Tm
} = Kt;
function fd(e) {
  const t = Y.autoReplaceSvg === "nest" ? eu(e, {
    styleParser: !1
  }) : eu(e);
  return ~t.extra.classes.indexOf(Hf) ? Cr("generateLayersText", e, t) : Cr("generateSvgReplacementMutation", e, t);
}
function Rm() {
  return [...fp, ...Eo];
}
function tu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!dr) return Promise.resolve();
  const r = Ce.documentElement.classList, n = (o) => r.add("".concat(Ul, "-").concat(o)), i = (o) => r.remove("".concat(Ul, "-").concat(o)), a = Y.autoFetchSvg ? Rm() : Mf.concat(Object.keys(Tm));
  a.includes("fa") || a.push("fa");
  const s = [".".concat(Hf, ":not([").concat(Ur, "])")].concat(a.map((o) => ".".concat(o, ":not([").concat(Ur, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = hn(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const p = pl.begin("onTree"), u = l.reduce((o, f) => {
    try {
      const h = fd(f);
      h && o.push(h);
    } catch (h) {
      zf || h.name === "MissingIcon" && console.error(h);
    }
    return o;
  }, []);
  return new Promise((o, f) => {
    Promise.all(u).then((h) => {
      ud(h, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), p(), o();
      });
    }).catch((h) => {
      p(), f(h);
    });
  });
}
function Fm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fd(e).then((r) => {
    r && ud([r], t);
  });
}
function Im(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Io(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : Io(i || {})), e(n, V(V({}, r), {}, {
      mask: i
    }));
  };
}
const Dm = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = Gt,
    symbol: n = !1,
    mask: i = null,
    maskId: a = null,
    title: s = null,
    titleId: l = null,
    classes: p = [],
    attributes: u = {},
    styles: o = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: h,
    icon: d
  } = e;
  return Wi(V({
    type: "icon"
  }, e), () => (zr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Y.autoA11y && (s ? u["aria-labelledby"] = "".concat(Y.replacementClass, "-title-").concat(l || zn()) : (u["aria-hidden"] = "true", u.focusable = "false")), hl({
    icons: {
      main: Do(d),
      mask: i ? Do(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: h,
    transform: V(V({}, Gt), r),
    symbol: n,
    title: s,
    maskId: a,
    titleId: l,
    extra: {
      attributes: u,
      styles: o,
      classes: p
    }
  })));
};
var $m = {
  mixout() {
    return {
      icon: Im(Dm)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = tu, e.nodeCallback = Fm, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = Ce,
        callback: n = () => {
        }
      } = t;
      return tu(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: i,
        titleId: a,
        prefix: s,
        transform: l,
        symbol: p,
        mask: u,
        maskId: o,
        extra: f
      } = r;
      return new Promise((h, d) => {
        Promise.all([$o(n, s), u.iconName ? $o(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [y, g] = m;
          h([t, hl({
            icons: {
              main: y,
              mask: g
            },
            prefix: s,
            iconName: n,
            transform: l,
            symbol: p,
            maskId: o,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(d);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        transform: a,
        styles: s
      } = t;
      const l = zi(s);
      l.length > 0 && (n.style = l);
      let p;
      return cl(a) && (p = Cr("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(p || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, Lm = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return Wi({
          type: "layer"
        }, () => {
          zr("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let n = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              n = n.concat(a.abstract);
            }) : n = n.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Y.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, Nm = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return Wi({
          type: "counter",
          content: e
        }, () => (zr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), mm({
          content: e.toString(),
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(Y.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, Mm = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = Gt,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: s = {}
        } = t;
        return Wi({
          type: "text",
          content: e
        }, () => (zr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Jl({
          content: e,
          transform: V(V({}, Gt), r),
          title: n,
          extra: {
            attributes: a,
            styles: s,
            classes: ["".concat(Y.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, r) {
      const {
        title: n,
        transform: i,
        extra: a
      } = r;
      let s = null, l = null;
      if (Lf) {
        const p = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        s = u.width / p, l = u.height / p;
      }
      return Y.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Jl({
        content: t.innerHTML,
        width: s,
        height: l,
        transform: i,
        title: n,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Bm = new RegExp('"', "ug"), ru = [1105920, 1112319], nu = V(V(V(V({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), lp), Cp), bp), Mo = Object.keys(nu).reduce((e, t) => (e[t.toLowerCase()] = nu[t], e), {}), qm = Object.keys(Mo).reduce((e, t) => {
  const r = Mo[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function jm(e) {
  const t = e.replace(Bm, ""), r = Gp(t, 0), n = r >= ru[0] && r <= ru[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: To(i ? t[0] : t),
    isSecondary: n || i
  };
}
function Um(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (Mo[r] || {})[i] || qm[r];
}
function iu(e, t) {
  const r = "".concat(Op).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const s = hn(e.children).filter((h) => h.getAttribute(Oo) === t)[0], l = Ar.getComputedStyle(e, t), p = l.getPropertyValue("font-family"), u = p.match(Rp), o = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (s && !u)
      return e.removeChild(s), n();
    if (u && f !== "none" && f !== "") {
      const h = l.getPropertyValue("content");
      let d = Um(p, o);
      const {
        value: m,
        isSecondary: y
      } = jm(h), g = u[0].startsWith("FontAwesome");
      let b = dl(d, m), v = b;
      if (g) {
        const S = Zp(m);
        S.iconName && S.prefix && (b = S.iconName, d = S.prefix);
      }
      if (b && !y && (!s || s.getAttribute(sl) !== d || s.getAttribute(ol) !== v)) {
        e.setAttribute(r, v), s && e.removeChild(s);
        const S = km(), {
          extra: O
        } = S;
        O.attributes[Oo] = t, $o(b, d).then((E) => {
          const C = hl(V(V({}, S), {}, {
            icons: {
              main: E,
              mask: ad()
            },
            prefix: d,
            iconName: v,
            extra: O,
            watchable: !0
          })), T = Ce.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(T, e.firstChild) : e.appendChild(T), T.outerHTML = C.map((L) => Kn(L)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function zm(e) {
  return Promise.all([iu(e, "::before"), iu(e, "::after")]);
}
function Vm(e) {
  return e.parentNode !== document.head && !~_p.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Oo) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function au(e) {
  if (dr)
    return new Promise((t, r) => {
      const n = hn(e.querySelectorAll("*")).filter(Vm).map(zm), i = pl.begin("searchPseudoElements");
      cd(), Promise.all(n).then(() => {
        i(), No(), t();
      }).catch(() => {
        i(), No(), r();
      });
    });
}
var Hm = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = au, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = Ce
      } = t;
      Y.searchPseudoElements && au(r);
    };
  }
};
let su = !1;
var Wm = {
  mixout() {
    return {
      dom: {
        unwatch() {
          cd(), su = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Zl(Fo("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Cm();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        su ? No() : Zl(Fo("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ou = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, n) => {
    const i = n.toLowerCase().split("-"), a = i[0];
    let s = i.slice(1).join("-");
    if (a && s === "h")
      return r.flipX = !0, r;
    if (a && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, t);
};
var Gm = {
  mixout() {
    return {
      parse: {
        transform: (e) => ou(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = ou(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: r,
        transform: n,
        containerWidth: i,
        iconWidth: a
      } = t;
      const s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), p = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), u = "rotate(".concat(n.rotate, " 0 0)"), o = {
        transform: "".concat(l, " ").concat(p, " ").concat(u)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: o,
        path: f
      };
      return {
        tag: "g",
        attributes: V({}, h.outer),
        children: [{
          tag: "g",
          attributes: V({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: V(V({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
};
const ja = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function lu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Km(e) {
  return e.tag === "g" ? e.children : [e];
}
var Jm = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Hi(r.split(" ").map((i) => i.trim())) : ad();
        return n.prefix || (n.prefix = Er()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        mask: a,
        maskId: s,
        transform: l
      } = t;
      const {
        width: p,
        icon: u
      } = i, {
        width: o,
        icon: f
      } = a, h = jp({
        transform: l,
        containerWidth: o,
        iconWidth: p
      }), d = {
        tag: "rect",
        attributes: V(V({}, ja), {}, {
          fill: "white"
        })
      }, m = u.children ? {
        children: u.children.map(lu)
      } : {}, y = {
        tag: "g",
        attributes: V({}, h.inner),
        children: [lu(V({
          tag: u.tag,
          attributes: V(V({}, u.attributes), h.path)
        }, m))]
      }, g = {
        tag: "g",
        attributes: V({}, h.outer),
        children: [y]
      }, b = "mask-".concat(s || zn()), v = "clip-".concat(s || zn()), S = {
        tag: "mask",
        attributes: V(V({}, ja), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [d, g]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: Km(f)
        }, S]
      };
      return r.push(O, {
        tag: "rect",
        attributes: V({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(b, ")")
        }, ja)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, Ym = {
  provides(e) {
    let t = !1;
    Ar.matchMedia && (t = Ar.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: V(V({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = V(V({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: V(V({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: V(V({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: V(V({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: V(V({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: V(V({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: V(V({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: V(V({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Xm = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, Qm = [Vp, $m, Lm, Nm, Mm, Hm, Wm, Gm, Jm, Ym, Xm];
lm(Qm, {
  mixoutsTo: xt
});
xt.noAuto;
const dd = xt.config, Jn = xt.library;
xt.dom;
const Di = xt.parse;
xt.findIconDefinition;
xt.toHtml;
const Zm = xt.icon;
xt.layer;
const eg = xt.text;
xt.counter;
function uu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uu(Object(r), !0).forEach(function(n) {
      ft(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tg(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rg(e) {
  var t = tg(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function ft(e, t, r) {
  return t = rg(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ng(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ig(e, t) {
  if (e == null) return {};
  var r = ng(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Bo(e) {
  return ag(e) || sg(e) || og(e) || lg();
}
function ag(e) {
  if (Array.isArray(e)) return qo(e);
}
function sg(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function og(e, t) {
  if (e) {
    if (typeof e == "string") return qo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qo(e, t);
  }
}
function qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ug = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hd = { exports: {} };
(function(e) {
  (function(t) {
    var r = function(b, v, S) {
      if (!u(v) || f(v) || h(v) || d(v) || p(v))
        return v;
      var O, E = 0, C = 0;
      if (o(v))
        for (O = [], C = v.length; E < C; E++)
          O.push(r(b, v[E], S));
      else {
        O = {};
        for (var T in v)
          Object.prototype.hasOwnProperty.call(v, T) && (O[b(T, S)] = r(b, v[T], S));
      }
      return O;
    }, n = function(b, v) {
      v = v || {};
      var S = v.separator || "_", O = v.split || /(?=[A-Z])/;
      return b.split(O).join(S);
    }, i = function(b) {
      return m(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function(v, S) {
        return S ? S.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, a = function(b) {
      var v = i(b);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, s = function(b, v) {
      return n(b, v).toLowerCase();
    }, l = Object.prototype.toString, p = function(b) {
      return typeof b == "function";
    }, u = function(b) {
      return b === Object(b);
    }, o = function(b) {
      return l.call(b) == "[object Array]";
    }, f = function(b) {
      return l.call(b) == "[object Date]";
    }, h = function(b) {
      return l.call(b) == "[object RegExp]";
    }, d = function(b) {
      return l.call(b) == "[object Boolean]";
    }, m = function(b) {
      return b = b - 0, b === b;
    }, y = function(b, v) {
      var S = v && "process" in v ? v.process : v;
      return typeof S != "function" ? b : function(O, E) {
        return S(O, b, E);
      };
    }, g = {
      camelize: i,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(b, v) {
        return r(y(i, v), b);
      },
      decamelizeKeys: function(b, v) {
        return r(y(s, v), b, v);
      },
      pascalizeKeys: function(b, v) {
        return r(y(a, v), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(ug);
})(hd);
var cg = hd.exports, fg = ["class", "style"];
function dg(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), i = cg.camelize(r.slice(0, n)), a = r.slice(n + 1).trim();
    return t[i] = a, t;
  }, {});
}
function hg(e) {
  return e.split(/\s+/).reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
function gl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(p) {
    return gl(p);
  }), i = Object.keys(e.attributes || {}).reduce(function(p, u) {
    var o = e.attributes[u];
    switch (u) {
      case "class":
        p.class = hg(o);
        break;
      case "style":
        p.style = dg(o);
        break;
      default:
        p.attrs[u] = o;
    }
    return p;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var a = r.style, s = a === void 0 ? {} : a, l = ig(r, fg);
  return lr(e.tag, It(It(It({}, t), {}, {
    class: i.class,
    style: It(It({}, i.style), s)
  }, i.attrs), l), n);
}
var pd = !1;
try {
  pd = process.env.NODE_ENV === "production";
} catch {
}
function pg() {
  if (!pd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function qn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ft({}, e, t) : {};
}
function mg(e) {
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
  }, ft(ft(ft(ft(ft(ft(ft(ft(ft(ft(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), ft(ft(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function cu(e) {
  if (e && $i(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Di.icon)
    return Di.icon(e);
  if (e === null)
    return null;
  if ($i(e) === "object" && e.prefix && e.iconName)
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
var Wt = fr({
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
    var n = r.attrs, i = fe(function() {
      return cu(t.icon);
    }), a = fe(function() {
      return qn("classes", mg(t));
    }), s = fe(function() {
      return qn("transform", typeof t.transform == "string" ? Di.transform(t.transform) : t.transform);
    }), l = fe(function() {
      return qn("mask", cu(t.mask));
    }), p = fe(function() {
      return Zm(i.value, It(It(It(It({}, a.value), s.value), l.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    xr(p, function(o) {
      if (!o)
        return pg("Could not find one or more icon(s)", i.value, l.value);
    }, {
      immediate: !0
    });
    var u = fe(function() {
      return p.value ? gl(p.value.abstract[0], {}, n) : null;
    });
    return function() {
      return u.value;
    };
  }
});
fr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.slots, i = dd.familyPrefix, a = fe(function() {
      return ["".concat(i, "-layers")].concat(Bo(t.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return lr("div", {
        class: a.value
      }, n.default ? n.default() : []);
    };
  }
});
fr({
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
    var n = r.attrs, i = dd.familyPrefix, a = fe(function() {
      return qn("classes", [].concat(Bo(t.counter ? ["".concat(i, "-layers-counter")] : []), Bo(t.position ? ["".concat(i, "-layers-").concat(t.position)] : [])));
    }), s = fe(function() {
      return qn("transform", typeof t.transform == "string" ? Di.transform(t.transform) : t.transform);
    }), l = fe(function() {
      var u = eg(t.value.toString(), It(It({}, s.value), a.value)), o = u.abstract;
      return t.counter && (o[0].attributes.class = o[0].attributes.class.replace("fa-layers-text", "")), o[0];
    }), p = fe(function() {
      return gl(l.value, {}, n);
    });
    return function() {
      return p.value;
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const gg = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, jo = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, yg = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, bg = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, fu = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, du = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, vg = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, wg = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, xg = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Sg = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, hu = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ag = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const md = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, pn = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Eg = { class: "relative flex w-full max-w-full items-stretch" }, Cg = {
  key: 0,
  class: "flex items-center"
}, Og = {
  key: 1,
  class: "mr-1"
}, Pg = ["id", "disabled", "required", "name"], _g = { key: 5 }, kg = ["required", "disabled", "name"], Tg = {
  key: 0,
  class: "border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500"
}, Rg = ["href"], Fg = {
  __name: "Input",
  props: /* @__PURE__ */ Dl({
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
  emits: /* @__PURE__ */ Dl(["changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    Jn.add(md, bg, Ag, du, fu);
    const n = e;
    function i(y) {
      let g = [];
      return y.split("_").join(" ").split(" ").map(function(b) {
        g.push(b[0].toUpperCase() + b.slice(1));
      }), g.join(" ");
    }
    const a = r, s = de(!1), l = zh(e, "modelValue"), p = de(), u = de(), o = de(n.type);
    Ct(() => {
      s.value = !n.form, p.value = s.value ? l.value : n.form[n.field];
    }), xr(
      () => p.value,
      (y, g) => {
        if (y !== g) {
          if (s.value ? l.value = y : n.form[n.field] = y, u.value = g, a("update:modelValue", y), f.value) {
            f.value = !1;
            return;
          }
          a("changed", { value: y, old_value: g });
        }
      }
    );
    const f = de(!1), h = (y) => {
      p.value = y, f.value = !0;
    }, d = () => u.value;
    xr(
      () => n.field ? n.form[n.field] : null,
      (y) => {
        p.value = s.value ? l.value : y;
      },
      {
        deep: !0
      }
    ), xr(
      () => l.value,
      (y) => {
        p.value = y;
      }
    );
    const m = () => {
      o.value = o.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: m,
      setValueSilently: h,
      getPreviousValue: d
    }), (y, g) => {
      var b, v, S, O, E, C, T, L;
      return F(), B("div", {
        class: te(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Z("", !0) : (F(), pe(J(yl), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? i(e.field) : "",
          sublabel: e.sublabel,
          required: e.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        U("div", Eg, [
          e.type === "switch" || e.type === "checkbox" ? (F(), B("label", Cg, [
            (b = y.$slots) != null && b.leftDescription ? Q(y.$slots, "leftDescription", { key: 0 }, void 0, !0) : e.leftDescription ? (F(), B("span", Og, re(e.leftDescription ? e.leftDescription : "Disable"), 1)) : Z("", !0),
            vt(U("input", {
              id: e.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": g[0] || (g[0] = (M) => p.value = M),
              disabled: n.disabled,
              required: n.required,
              name: e.name ?? e.field
            }, null, 8, Pg), [
              [Ff, p.value]
            ]),
            e.type === "switch" ? (F(), B("div", {
              key: 2,
              tabindex: "0",
              class: te(["toggle-switch focusable ml-0!", {
                checked: p.value,
                disabled: n.disabled
              }])
            }, null, 2)) : (F(), B("div", {
              key: 3,
              tabindex: "0",
              class: te(["focusable text-primary mr-1 p-1", {
                "text-gray-500!": n.disabled,
                [e.checkboxCustomClass]: e.checkboxCustomClass
              }])
            }, [
              De(qr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: $e(() => [
                  n.form[e.field] ? (F(), pe(J(Wt), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (F(), pe(J(Wt), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (v = y.$slots) != null && v.rightDescription ? Q(y.$slots, "rightDescription", { key: 4 }, void 0, !0) : e.rightDescription ? (F(), B("span", _g, re(e.rightDescription), 1)) : Z("", !0)
          ])) : e.type === "select" ? vt((F(), B("select", {
            key: 1,
            "onUpdate:modelValue": g[1] || (g[1] = (M) => p.value = M),
            required: n.required,
            disabled: n.disabled,
            name: e.name ?? e.field,
            class: "focusable block w-full rounded border-gray-300 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
          }, [
            Q(y.$slots, "default", {}, void 0, !0)
          ], 8, kg)), [
            [Vh, p.value]
          ]) : (F(), B(Ae, { key: 2 }, [
            e.addon ? (F(), B("span", Tg, re(e.addon), 1)) : Z("", !0),
            De(J(Bg), {
              id: e.field,
              type: o.value,
              class: te(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none!": e.addon,
                "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((S = y.$slots) == null ? void 0 : S.submit),
                [e.inputCustomClass]: !!e.inputCustomClass
              }]),
              modelValue: p.value,
              "onUpdate:modelValue": g[2] || (g[2] = (M) => p.value = M),
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
            e.form ? (F(), B(Ae, { key: 1 }, [
              e.submitBtn ? (F(), pe(J(Hc), {
                key: 0,
                form: e.form,
                class: te(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: $e(() => [
                  ke(re(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Z("", !0),
              (O = y.$slots) != null && O.submit ? (F(), pe(J(Hc), {
                key: 1,
                form: e.form,
                class: te(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: $e(() => [
                  Q(y.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : Z("", !0)
            ], 64)) : Z("", !0),
            e.whatsApp ? (F(), B("a", {
              key: 2,
              class: te(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              De(J(Wt), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, Rg)) : Z("", !0),
            e.type == "password" && !e.hidePasswordToggler ? (F(), B("div", {
              key: 3,
              onClick: m,
              class: "absolute top-0 right-0 z-2 flex h-full w-11 cursor-pointer items-center justify-center rounded-r bg-gray-300 text-xs leading-normal font-medium text-white"
            }, [
              o.value === "password" ? (F(), pe(J(Wt), {
                key: 0,
                icon: J(du),
                size: "2xl"
              }, null, 8, ["icon"])) : (F(), pe(J(Wt), {
                key: 1,
                icon: J(fu),
                size: "2xl"
              }, null, 8, ["icon"]))
            ])) : Z("", !0)
          ], 64))
        ]),
        e.error || (C = (E = e.form) == null ? void 0 : E.errors) != null && C[e.field] ? (F(), pe(J(Yn), {
          key: 1,
          message: e.error ? e.error : (L = (T = e.form) == null ? void 0 : T.errors) == null ? void 0 : L[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Z("", !0)
      ], 2);
    };
  }
}, jS = /* @__PURE__ */ pn(Fg, [["__scopeId", "data-v-8808e60a"]]), Ig = { class: "text-sm text-red-600" }, Yn = {
  __name: "InputError",
  props: ["message"],
  setup(e) {
    return (t, r) => vt((F(), B("div", null, [
      U("p", Ig, re(e.message), 1)
    ], 512)), [
      [Sr, e.message]
    ]);
  }
}, Dg = { key: 0 }, $g = { key: 1 }, Lg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, Ng = {
  key: 3,
  class: "ml-1 text-red-500"
}, yl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(e) {
    return (t, r) => (F(), B("label", {
      class: te(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (F(), B("span", Dg, re(e.value), 1)) : (F(), B("span", $g, [
        Q(t.$slots, "default")
      ])),
      e.sublabel ? (F(), B("span", Lg, re(e.sublabel), 1)) : Z("", !0),
      e.required ? (F(), B("span", Ng, "*")) : Z("", !0)
    ], 2));
  }
}, Mg = ["value"], Bg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { expose: t }) {
    const r = de(null);
    return Ct(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), t({ focus: () => r.value.focus() }), (n, i) => (F(), B("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: e.modelValue,
      onInput: i[0] || (i[0] = (a) => n.$emit("update:modelValue", a.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, Mg));
  }
}, qg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, jg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], US = {
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
      let i = [];
      return n.split("_").join(" ").split(" ").map(function(a) {
        i.push(a[0].toUpperCase() + a.slice(1));
      }), i.join(" ");
    }
    return (n, i) => (F(), B("div", null, [
      e.noLabel ? Z("", !0) : (F(), pe(J(yl), {
        key: 0,
        for: e.field,
        value: e.label ? e.label : r(e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])),
      U("div", qg, [
        vt(U("textarea", {
          id: e.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": i[0] || (i[0] = (a) => t.form[e.field] = a),
          required: t.required,
          disabled: t.disabled,
          autocomplete: e.field,
          placeholder: t.placeholder,
          autofocus: t.autofocus,
          rows: t.rows,
          onInput: i[1] || (i[1] = (a) => n.$emit("update:modelValue", a.target.value))
        }, null, 40, jg), [
          [Hh, t.form[e.field]]
        ])
      ]),
      De(J(Yn), {
        class: "mt-2",
        message: t.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
var Ug = Object.defineProperty, zg = Object.defineProperties, Vg = Object.getOwnPropertyDescriptors, pu = Object.getOwnPropertySymbols, Hg = Object.prototype.hasOwnProperty, Wg = Object.prototype.propertyIsEnumerable, mu = (e, t, r) => t in e ? Ug(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, nn = (e, t) => {
  for (var r in t || (t = {}))
    Hg.call(t, r) && mu(e, r, t[r]);
  if (pu)
    for (var r of pu(t))
      Wg.call(t, r) && mu(e, r, t[r]);
  return e;
}, gu = (e, t) => zg(e, Vg(t));
const Gg = {
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
        const r = this.getDropdownViewport(), { top: n, bottom: i, height: a } = t.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop;
        if (i > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = t.offsetTop - (r.height - a);
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
}, Kg = {
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
}, Jg = {
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
}, bl = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Yg = {}, Xg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Qg = /* @__PURE__ */ U("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Zg = [
  Qg
];
function ey(e, t) {
  return F(), B("svg", Xg, Zg);
}
const ty = /* @__PURE__ */ bl(Yg, [["render", ey]]), ry = {}, ny = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, iy = /* @__PURE__ */ U("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), ay = [
  iy
];
function sy(e, t) {
  return F(), B("svg", ny, ay);
}
const oy = /* @__PURE__ */ bl(ry, [["render", sy]]), yu = {
  Deselect: ty,
  OpenIndicator: oy
}, ly = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: r,
        top: n,
        left: i,
        width: a
      } = t.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, l = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: a + "px",
        left: s + i + "px",
        top: l + n + r + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function uy(e) {
  const t = {};
  return Object.keys(e).sort().forEach((r) => {
    t[r] = e[r];
  }), JSON.stringify(t);
}
let cy = 0;
function fy() {
  return ++cy;
}
const dy = {
  components: nn({}, yu),
  directives: { appendToBody: ly },
  mixins: [Gg, Kg, Jg],
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
          return e.hasOwnProperty("id") ? e.id : uy(e);
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
      default(e, t, { width: r, top: n, left: i }) {
        e.style.top = n, e.style.left = i, e.style.width = r;
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
      default: () => fy()
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
          attributes: nn({
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
        header: gu(nn({}, e), { deselect: this.deselect }),
        footer: gu(nn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return nn(nn({}, yu), this.components);
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
      const t = (i) => (i.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (i) => this.maybeDeleteValue(),
        9: (i) => this.onTab(),
        27: (i) => this.onEscape(),
        38: (i) => (i.preventDefault(), this.typeAheadUp()),
        40: (i) => (i.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((i) => r[i] = t);
      const n = this.mapKeydown(r, this);
      if (typeof n[e.keyCode] == "function")
        return n[e.keyCode](e);
    }
  }
}, hy = ["dir"], py = ["id", "aria-expanded", "aria-owns"], my = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, gy = ["disabled", "title", "aria-label", "onClick"], yy = {
  ref: "actions",
  class: "vs__actions"
}, by = ["disabled"], vy = { class: "vs__spinner" }, wy = ["id"], xy = ["id", "aria-selected", "onMouseover", "onClick"], Sy = {
  key: 0,
  class: "vs__no-options"
}, Ay = /* @__PURE__ */ ke(" Sorry, no matching options. "), Ey = ["id"];
function Cy(e, t, r, n, i, a) {
  const s = Wh("append-to-body");
  return F(), B("div", {
    dir: r.dir,
    class: te(["v-select", a.stateClasses])
  }, [
    Q(e.$slots, "header", Et(Rt(a.scope.header))),
    U("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (l) => a.toggleDropdown(l))
    }, [
      U("div", my, [
        (F(!0), B(Ae, null, Lt(a.selectedValue, (l, p) => Q(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(l),
          deselect: a.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (F(), B("span", {
            key: r.getOptionKey(l),
            class: "vs__selected"
          }, [
            Q(e.$slots, "selected-option", Et(Rt(a.normalizeOptionForSlot(l))), () => [
              ke(re(r.getOptionLabel(l)), 1)
            ]),
            r.multiple ? (F(), B("button", {
              key: 0,
              ref_for: !0,
              ref: (u) => i.deselectButtons[p] = u,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(l)}`,
              "aria-label": `Deselect ${r.getOptionLabel(l)}`,
              onClick: (u) => a.deselect(l)
            }, [
              (F(), pe(La(a.childComponents.Deselect)))
            ], 8, gy)) : Z("", !0)
          ]))
        ])), 256)),
        Q(e.$slots, "search", Et(Rt(a.scope.search)), () => [
          U("input", Un({ class: "vs__search" }, a.scope.search.attributes, Gh(a.scope.search.events)), null, 16)
        ])
      ], 512),
      U("div", yy, [
        vt(U("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...l) => a.clearSelection && a.clearSelection(...l))
        }, [
          (F(), pe(La(a.childComponents.Deselect)))
        ], 8, by), [
          [Sr, a.showClearButton]
        ]),
        Q(e.$slots, "open-indicator", Et(Rt(a.scope.openIndicator)), () => [
          r.noDrop ? Z("", !0) : (F(), pe(La(a.childComponents.OpenIndicator), Et(Un({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        Q(e.$slots, "spinner", Et(Rt(a.scope.spinner)), () => [
          vt(U("div", vy, "Loading...", 512), [
            [Sr, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, py),
    De(qr, { name: r.transition }, {
      default: $e(() => [
        a.dropdownOpen ? vt((F(), B("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = vr((...l) => a.onMousedown && a.onMousedown(...l), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...l) => a.onMouseUp && a.onMouseUp(...l))
        }, [
          Q(e.$slots, "list-header", Et(Rt(a.scope.listHeader))),
          (F(!0), B(Ae, null, Lt(a.filteredOptions, (l, p) => (F(), B("li", {
            id: `vs${r.uid}__option-${p}`,
            key: r.getOptionKey(l),
            role: "option",
            class: te(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(l) && p === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(l),
              "vs__dropdown-option--highlight": p === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(l)
            }]),
            "aria-selected": p === e.typeAheadPointer ? !0 : null,
            onMouseover: (u) => r.selectable(l) ? e.typeAheadPointer = p : null,
            onClick: vr((u) => r.selectable(l) ? a.select(l) : null, ["prevent", "stop"])
          }, [
            Q(e.$slots, "option", Et(Rt(a.normalizeOptionForSlot(l))), () => [
              ke(re(r.getOptionLabel(l)), 1)
            ])
          ], 42, xy))), 128)),
          a.filteredOptions.length === 0 ? (F(), B("li", Sy, [
            Q(e.$slots, "no-options", Et(Rt(a.scope.noOptions)), () => [
              Ay
            ])
          ])) : Z("", !0),
          Q(e.$slots, "list-footer", Et(Rt(a.scope.listFooter)))
        ], 40, wy)), [
          [s]
        ]) : (F(), B("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, Ey))
      ]),
      _: 3
    }, 8, ["name"]),
    Q(e.$slots, "footer", Et(Rt(a.scope.footer)))
  ], 10, hy);
}
const Oy = /* @__PURE__ */ bl(dy, [["render", Cy]]), zS = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return Jn.add(md), (t, r) => (F(), pe(J(Oy), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, ar = {
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
    const n = e.$refs.menu.offsetHeight, i = Math.ceil((e.$refs.menu.scrollTop + e.$el.offsetHeight) / n), a = Math.ceil(r / n);
    i !== a && (e.$refs.menu.scrollTop = (a - 1) * e.$refs.menu.offsetHeight);
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
function Py(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const gd = {
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
      default: (e, t) => e.match(Py(t))
    }
  }
}, _y = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, ky = {
  name: "ModelSelect",
  mixins: [gd],
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
      ar.openOptions(this);
    },
    blurInput() {
      ar.blurInput(this);
    },
    closeOptions() {
      ar.closeOptions(this);
    },
    prevItem() {
      ar.prevItem(this);
    },
    nextItem() {
      ar.nextItem(this);
    },
    enterItem() {
      ar.enterItem(this);
    },
    pointerSet(e) {
      ar.pointerSet(this, e);
    },
    pointerAdjust() {
      ar.pointerAdjust(this);
    },
    mousedownItem() {
      ar.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, Ty = /* @__PURE__ */ U("i", { class: "dropdown icon" }, null, -1), Ry = ["disabled", "tabindex", "id", "name", "value"], Fy = ["data-vss-custom-attr"], Iy = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function Dy(e, t, r, n, i, a) {
  return F(), B("div", {
    class: te(["ui fluid search selection dropdown", { "active visible": i.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    Ty,
    U("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: i.searchText,
      onInput: t[0] || (t[0] = (s) => i.searchText = s.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = vr((...s) => a.openOptions && a.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = rn((...s) => a.closeOptions && a.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = rn(vr((...s) => a.enterItem && a.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => a.blurInput && a.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = rn((...s) => a.prevItem && a.prevItem(...s), ["up"])),
        t[5] || (t[5] = rn((...s) => a.nextItem && a.nextItem(...s), ["down"])),
        t[6] || (t[6] = rn(vr(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = rn((...s) => a.deleteTextOrItem && a.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, Ry),
    U("div", {
      class: te(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, re(a.inputText), 11, Fy),
    U("div", {
      class: te(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = vr(() => {
      }, ["prevent"])),
      style: Nn(a.menuStyle),
      tabindex: "-1"
    }, [
      (F(!0), B(Ae, null, Lt(a.filteredOptions, (s, l) => (F(), B("div", {
        key: l,
        class: te(["item", { selected: s.selected || i.pointer === l, disabled: s.disabled }]),
        "data-vss-custom-attr": a.customAttrs[l] ? a.customAttrs[l] : "",
        onClick: vr((p) => a.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...p) => a.mousedownItem && a.mousedownItem(...p)),
        onMouseenter: (p) => a.pointerSet(l)
      }, [
        Q(e.$slots, "default", {
          option: s,
          idx: l
        }, () => [
          ke(re(s.text), 1)
        ])
      ], 42, Iy))), 128))
    ], 38)
  ], 34);
}
const bu = /* @__PURE__ */ _y(ky, [["render", Dy]]), vu = {
  name: "ModelListSelect",
  mixins: [gd],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return lr(bu, {
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
    ModelSelect: bu
  }
}, $y = {
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
    const r = t, n = (i) => {
      let a = [];
      return i.split("_").join(" ").split(" ").map(function(s) {
        a.push(s[0].toUpperCase() + s.slice(1));
      }), a.join(" ");
    };
    return (i, a) => (F(), B("div", null, [
      !e.noLabel && (e.label || e.field) ? (F(), pe(J(yl), {
        key: 0,
        for: e.id ?? e.field,
        value: n(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Z("", !0),
      e.noForm ? (F(), pe(J(vu), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list relative! mt-0! h-[42px] max-w-full! rounded! border-gray-300! shadow!",
        "onUpdate:modelValue": a[0] || (a[0] = (s) => r("update:modelValue", s)),
        onSearchchange: a[1] || (a[1] = (s) => r("searchchange", s)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (F(), B(Ae, { key: 2 }, [
        De(J(vu), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            a[2] || (a[2] = (s) => e.form[e.field] = s),
            a[3] || (a[3] = (s) => r("update:modelValue", s))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list relative! mt-0! h-[42px] max-w-full! rounded! border-gray-300! px-3! shadow!",
          onSearchchange: a[4] || (a[4] = (s) => r("searchchange", s)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        De(J(Yn), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, Ly = /* @__PURE__ */ pn($y, [["__scopeId", "data-v-0a588376"]]);
var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ny(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ua, wu;
function My() {
  if (wu) return Ua;
  wu = 1;
  var e = function(v) {
    return t(v) && !r(v);
  };
  function t(b) {
    return !!b && typeof b == "object";
  }
  function r(b) {
    var v = Object.prototype.toString.call(b);
    return v === "[object RegExp]" || v === "[object Date]" || a(b);
  }
  var n = typeof Symbol == "function" && Symbol.for, i = n ? Symbol.for("react.element") : 60103;
  function a(b) {
    return b.$$typeof === i;
  }
  function s(b) {
    return Array.isArray(b) ? [] : {};
  }
  function l(b, v) {
    return v.clone !== !1 && v.isMergeableObject(b) ? y(s(b), b, v) : b;
  }
  function p(b, v, S) {
    return b.concat(v).map(function(O) {
      return l(O, S);
    });
  }
  function u(b, v) {
    if (!v.customMerge)
      return y;
    var S = v.customMerge(b);
    return typeof S == "function" ? S : y;
  }
  function o(b) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(b).filter(function(v) {
      return Object.propertyIsEnumerable.call(b, v);
    }) : [];
  }
  function f(b) {
    return Object.keys(b).concat(o(b));
  }
  function h(b, v) {
    try {
      return v in b;
    } catch {
      return !1;
    }
  }
  function d(b, v) {
    return h(b, v) && !(Object.hasOwnProperty.call(b, v) && Object.propertyIsEnumerable.call(b, v));
  }
  function m(b, v, S) {
    var O = {};
    return S.isMergeableObject(b) && f(b).forEach(function(E) {
      O[E] = l(b[E], S);
    }), f(v).forEach(function(E) {
      d(b, E) || (h(b, E) && S.isMergeableObject(v[E]) ? O[E] = u(E, S)(b[E], v[E], S) : O[E] = l(v[E], S));
    }), O;
  }
  function y(b, v, S) {
    S = S || {}, S.arrayMerge = S.arrayMerge || p, S.isMergeableObject = S.isMergeableObject || e, S.cloneUnlessOtherwiseSpecified = l;
    var O = Array.isArray(v), E = Array.isArray(b), C = O === E;
    return C ? O ? S.arrayMerge(b, v, S) : m(b, v, S) : l(v, S);
  }
  y.all = function(v, S) {
    if (!Array.isArray(v))
      throw new Error("first argument should be an array");
    return v.reduce(function(O, E) {
      return y(O, E, S);
    }, {});
  };
  var g = y;
  return Ua = g, Ua;
}
var By = My();
const qy = /* @__PURE__ */ Xn(By);
var za, xu;
function mn() {
  return xu || (xu = 1, za = TypeError), za;
}
const jy = {}, Uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jy
}, Symbol.toStringTag, { value: "Module" })), dt = /* @__PURE__ */ Ny(Uy);
var Va, Su;
function Gi() {
  if (Su) return Va;
  Su = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = i && a && typeof a.get == "function" ? a.get : null, l = i && Set.prototype.forEach, p = typeof WeakMap == "function" && WeakMap.prototype, u = p ? WeakMap.prototype.has : null, o = typeof WeakSet == "function" && WeakSet.prototype, f = o ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, d = h ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, b = String.prototype.match, v = String.prototype.slice, S = String.prototype.replace, O = String.prototype.toUpperCase, E = String.prototype.toLowerCase, C = RegExp.prototype.test, T = Array.prototype.concat, L = Array.prototype.join, M = Array.prototype.slice, R = Math.floor, z = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, w = Object.getOwnPropertySymbols, P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, _ = typeof Symbol == "function" && typeof Symbol.iterator == "object", A = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === _ || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, j = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(I) {
    return I.__proto__;
  } : null);
  function $(I, D) {
    if (I === 1 / 0 || I === -1 / 0 || I !== I || I && I > -1e3 && I < 1e3 || C.call(/e/, D))
      return D;
    var le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof I == "number") {
      var ce = I < 0 ? -R(-I) : R(I);
      if (ce !== I) {
        var ge = String(ce), ne = v.call(D, ge.length + 1);
        return S.call(ge, le, "$&_") + "." + S.call(S.call(ne, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return S.call(D, le, "$&_");
  }
  var H = dt, K = H.custom, Te = Fe(K) ? K : null, qe = {
    __proto__: null,
    double: '"',
    single: "'"
  }, G = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Va = function I(D, le, ce, ge) {
    var ne = le || {};
    if (ze(ne, "quoteStyle") && !ze(qe, ne.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ze(ne, "maxStringLength") && (typeof ne.maxStringLength == "number" ? ne.maxStringLength < 0 && ne.maxStringLength !== 1 / 0 : ne.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var tt = ze(ne, "customInspect") ? ne.customInspect : !0;
    if (typeof tt != "boolean" && tt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ze(ne, "indent") && ne.indent !== null && ne.indent !== "	" && !(parseInt(ne.indent, 10) === ne.indent && ne.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ze(ne, "numericSeparator") && typeof ne.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var pt = ne.numericSeparator;
    if (typeof D > "u")
      return "undefined";
    if (D === null)
      return "null";
    if (typeof D == "boolean")
      return D ? "true" : "false";
    if (typeof D == "string")
      return qt(D, ne);
    if (typeof D == "number") {
      if (D === 0)
        return 1 / 0 / D > 0 ? "0" : "-0";
      var Ne = String(D);
      return pt ? $(D, Ne) : Ne;
    }
    if (typeof D == "bigint") {
      var ut = String(D) + "n";
      return pt ? $(D, ut) : ut;
    }
    var Qt = typeof ne.depth > "u" ? 5 : ne.depth;
    if (typeof ce > "u" && (ce = 0), ce >= Qt && Qt > 0 && typeof D == "object")
      return We(D) ? "[Array]" : "[Object]";
    var St = vn(ne, ce);
    if (typeof ge > "u")
      ge = [];
    else if (st(ge, D) >= 0)
      return "[Circular]";
    function je(jt, mr, xn) {
      if (mr && (ge = M.call(ge), ge.push(mr)), xn) {
        var Xe = {
          depth: ne.depth
        };
        return ze(ne, "quoteStyle") && (Xe.quoteStyle = ne.quoteStyle), I(jt, Xe, ce + 1, ge);
      }
      return I(jt, ne, ce + 1, ge);
    }
    if (typeof D == "function" && !Se(D)) {
      var _r = Bt(D), At = kt(D, je);
      return "[Function" + (_r ? ": " + _r : " (anonymous)") + "]" + (At.length > 0 ? " { " + L.call(At, ", ") + " }" : "");
    }
    if (Fe(D)) {
      var Gr = _ ? S.call(String(D), /^(Symbol\(.*\))_[^)]*$/, "$1") : P.call(D);
      return typeof D == "object" && !_ ? _t(Gr) : Gr;
    }
    if (bn(D)) {
      for (var Zt = "<" + E.call(String(D.nodeName)), kr = D.attributes || [], er = 0; er < kr.length; er++)
        Zt += " " + kr[er].name + "=" + Oe(ee(kr[er].value), "double", ne);
      return Zt += ">", D.childNodes && D.childNodes.length && (Zt += "..."), Zt += "</" + E.call(String(D.nodeName)) + ">", Zt;
    }
    if (We(D)) {
      if (D.length === 0)
        return "[]";
      var tr = kt(D, je);
      return St && !Wr(tr) ? "[" + Xt(tr, St) + "]" : "[ " + L.call(tr, ", ") + " ]";
    }
    if (oe(D)) {
      var Me = kt(D, je);
      return !("cause" in Error.prototype) && "cause" in D && !W.call(D, "cause") ? "{ [" + String(D) + "] " + L.call(T.call("[cause]: " + je(D.cause), Me), ", ") + " }" : Me.length === 0 ? "[" + String(D) + "]" : "{ [" + String(D) + "] " + L.call(Me, ", ") + " }";
    }
    if (typeof D == "object" && tt) {
      if (Te && typeof D[Te] == "function" && H)
        return H(D, { depth: Qt - ce });
      if (tt !== "symbol" && typeof D.inspect == "function")
        return D.inspect();
    }
    if (Je(D)) {
      var Kr = [];
      return n && n.call(D, function(jt, mr) {
        Kr.push(je(mr, D, !0) + " => " + je(jt, D));
      }), Pr("Map", r.call(D), Kr, St);
    }
    if (Ye(D)) {
      var Jr = [];
      return l && l.call(D, function(jt) {
        Jr.push(je(jt, D));
      }), Pr("Set", s.call(D), Jr, St);
    }
    if (Ot(D))
      return et("WeakMap");
    if (hr(D))
      return et("WeakSet");
    if (Pt(D))
      return et("WeakRef");
    if (ue(D))
      return _t(je(Number(D)));
    if (Ke(D))
      return _t(je(z.call(D)));
    if (xe(D))
      return _t(m.call(D));
    if (he(D))
      return _t(je(String(D)));
    if (typeof window < "u" && D === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && D === globalThis || typeof Dt < "u" && D === Dt)
      return "{ [object globalThis] }";
    if (!Pe(D) && !Se(D)) {
      var Tr = kt(D, je), Yr = j ? j(D) === Object.prototype : D instanceof Object || D.constructor === Object, Rr = D instanceof Object ? "" : "null prototype", Ve = !Yr && A && Object(D) === D && A in D ? v.call(Ze(D), 8, -1) : Rr ? "Object" : "", wn = Yr || typeof D.constructor != "function" ? "" : D.constructor.name ? D.constructor.name + " " : "", Fr = wn + (Ve || Rr ? "[" + L.call(T.call([], Ve || [], Rr || []), ": ") + "] " : "");
      return Tr.length === 0 ? Fr + "{}" : St ? Fr + "{" + Xt(Tr, St) + "}" : Fr + "{ " + L.call(Tr, ", ") + " }";
    }
    return String(D);
  };
  function Oe(I, D, le) {
    var ce = le.quoteStyle || D, ge = qe[ce];
    return ge + I + ge;
  }
  function ee(I) {
    return S.call(String(I), /"/g, "&quot;");
  }
  function Re(I) {
    return !A || !(typeof I == "object" && (A in I || typeof I[A] < "u"));
  }
  function We(I) {
    return Ze(I) === "[object Array]" && Re(I);
  }
  function Pe(I) {
    return Ze(I) === "[object Date]" && Re(I);
  }
  function Se(I) {
    return Ze(I) === "[object RegExp]" && Re(I);
  }
  function oe(I) {
    return Ze(I) === "[object Error]" && Re(I);
  }
  function he(I) {
    return Ze(I) === "[object String]" && Re(I);
  }
  function ue(I) {
    return Ze(I) === "[object Number]" && Re(I);
  }
  function xe(I) {
    return Ze(I) === "[object Boolean]" && Re(I);
  }
  function Fe(I) {
    if (_)
      return I && typeof I == "object" && I instanceof Symbol;
    if (typeof I == "symbol")
      return !0;
    if (!I || typeof I != "object" || !P)
      return !1;
    try {
      return P.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Ke(I) {
    if (!I || typeof I != "object" || !z)
      return !1;
    try {
      return z.call(I), !0;
    } catch {
    }
    return !1;
  }
  var Ie = Object.prototype.hasOwnProperty || function(I) {
    return I in this;
  };
  function ze(I, D) {
    return Ie.call(I, D);
  }
  function Ze(I) {
    return y.call(I);
  }
  function Bt(I) {
    if (I.name)
      return I.name;
    var D = b.call(g.call(I), /^function\s*([\w$]+)/);
    return D ? D[1] : null;
  }
  function st(I, D) {
    if (I.indexOf)
      return I.indexOf(D);
    for (var le = 0, ce = I.length; le < ce; le++)
      if (I[le] === D)
        return le;
    return -1;
  }
  function Je(I) {
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
  function Ot(I) {
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
  function Pt(I) {
    if (!d || !I || typeof I != "object")
      return !1;
    try {
      return d.call(I), !0;
    } catch {
    }
    return !1;
  }
  function Ye(I) {
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
  function hr(I) {
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
  function bn(I) {
    return !I || typeof I != "object" ? !1 : typeof HTMLElement < "u" && I instanceof HTMLElement ? !0 : typeof I.nodeName == "string" && typeof I.getAttribute == "function";
  }
  function qt(I, D) {
    if (I.length > D.maxStringLength) {
      var le = I.length - D.maxStringLength, ce = "... " + le + " more character" + (le > 1 ? "s" : "");
      return qt(v.call(I, 0, D.maxStringLength), D) + ce;
    }
    var ge = G[D.quoteStyle || "single"];
    ge.lastIndex = 0;
    var ne = S.call(S.call(I, ge, "\\$1"), /[\x00-\x1f]/g, pr);
    return Oe(ne, "single", D);
  }
  function pr(I) {
    var D = I.charCodeAt(0), le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[D];
    return le ? "\\" + le : "\\x" + (D < 16 ? "0" : "") + O.call(D.toString(16));
  }
  function _t(I) {
    return "Object(" + I + ")";
  }
  function et(I) {
    return I + " { ? }";
  }
  function Pr(I, D, le, ce) {
    var ge = ce ? Xt(le, ce) : L.call(le, ", ");
    return I + " (" + D + ") {" + ge + "}";
  }
  function Wr(I) {
    for (var D = 0; D < I.length; D++)
      if (st(I[D], `
`) >= 0)
        return !1;
    return !0;
  }
  function vn(I, D) {
    var le;
    if (I.indent === "	")
      le = "	";
    else if (typeof I.indent == "number" && I.indent > 0)
      le = L.call(Array(I.indent + 1), " ");
    else
      return null;
    return {
      base: le,
      prev: L.call(Array(D + 1), le)
    };
  }
  function Xt(I, D) {
    if (I.length === 0)
      return "";
    var le = `
` + D.prev + D.base;
    return le + L.call(I, "," + le) + `
` + D.prev;
  }
  function kt(I, D) {
    var le = We(I), ce = [];
    if (le) {
      ce.length = I.length;
      for (var ge = 0; ge < I.length; ge++)
        ce[ge] = ze(I, ge) ? D(I[ge], I) : "";
    }
    var ne = typeof w == "function" ? w(I) : [], tt;
    if (_) {
      tt = {};
      for (var pt = 0; pt < ne.length; pt++)
        tt["$" + ne[pt]] = ne[pt];
    }
    for (var Ne in I)
      ze(I, Ne) && (le && String(Number(Ne)) === Ne && Ne < I.length || _ && tt["$" + Ne] instanceof Symbol || (C.call(/[^\w$]/, Ne) ? ce.push(D(Ne, I) + ": " + D(I[Ne], I)) : ce.push(Ne + ": " + D(I[Ne], I))));
    if (typeof w == "function")
      for (var ut = 0; ut < ne.length; ut++)
        W.call(I, ne[ut]) && ce.push("[" + D(ne[ut]) + "]: " + D(I[ne[ut]], I));
    return ce;
  }
  return Va;
}
var Ha, Au;
function zy() {
  if (Au) return Ha;
  Au = 1;
  var e = /* @__PURE__ */ Gi(), t = /* @__PURE__ */ mn(), r = function(l, p, u) {
    for (var o = l, f; (f = o.next) != null; o = f)
      if (f.key === p)
        return o.next = f.next, u || (f.next = /** @type {NonNullable<typeof list.next>} */
        l.next, l.next = f), f;
  }, n = function(l, p) {
    if (l) {
      var u = r(l, p);
      return u && u.value;
    }
  }, i = function(l, p, u) {
    var o = r(l, p);
    o ? o.value = u : l.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: p,
      next: l.next,
      value: u
    };
  }, a = function(l, p) {
    return l ? !!r(l, p) : !1;
  }, s = function(l, p) {
    if (l)
      return r(l, p, !0);
  };
  return Ha = function() {
    var p, u = {
      assert: function(o) {
        if (!u.has(o))
          throw new t("Side channel does not contain " + e(o));
      },
      delete: function(o) {
        var f = p && p.next, h = s(p, o);
        return h && f && f === h && (p = void 0), !!h;
      },
      get: function(o) {
        return n(p, o);
      },
      has: function(o) {
        return a(p, o);
      },
      set: function(o, f) {
        p || (p = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          p,
          o,
          f
        );
      }
    };
    return u;
  }, Ha;
}
var Wa, Eu;
function yd() {
  return Eu || (Eu = 1, Wa = Object), Wa;
}
var Ga, Cu;
function Vy() {
  return Cu || (Cu = 1, Ga = Error), Ga;
}
var Ka, Ou;
function Hy() {
  return Ou || (Ou = 1, Ka = EvalError), Ka;
}
var Ja, Pu;
function Wy() {
  return Pu || (Pu = 1, Ja = RangeError), Ja;
}
var Ya, _u;
function Gy() {
  return _u || (_u = 1, Ya = ReferenceError), Ya;
}
var Xa, ku;
function Ky() {
  return ku || (ku = 1, Xa = SyntaxError), Xa;
}
var Qa, Tu;
function Jy() {
  return Tu || (Tu = 1, Qa = URIError), Qa;
}
var Za, Ru;
function Yy() {
  return Ru || (Ru = 1, Za = Math.abs), Za;
}
var es, Fu;
function Xy() {
  return Fu || (Fu = 1, es = Math.floor), es;
}
var ts, Iu;
function Qy() {
  return Iu || (Iu = 1, ts = Math.max), ts;
}
var rs, Du;
function Zy() {
  return Du || (Du = 1, rs = Math.min), rs;
}
var ns, $u;
function e0() {
  return $u || ($u = 1, ns = Math.pow), ns;
}
var is, Lu;
function t0() {
  return Lu || (Lu = 1, is = Math.round), is;
}
var as, Nu;
function r0() {
  return Nu || (Nu = 1, as = Number.isNaN || function(t) {
    return t !== t;
  }), as;
}
var ss, Mu;
function n0() {
  if (Mu) return ss;
  Mu = 1;
  var e = /* @__PURE__ */ r0();
  return ss = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, ss;
}
var os, Bu;
function i0() {
  return Bu || (Bu = 1, os = Object.getOwnPropertyDescriptor), os;
}
var ls, qu;
function bd() {
  if (qu) return ls;
  qu = 1;
  var e = /* @__PURE__ */ i0();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ls = e, ls;
}
var us, ju;
function a0() {
  if (ju) return us;
  ju = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return us = e, us;
}
var cs, Uu;
function s0() {
  return Uu || (Uu = 1, cs = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var a in t)
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
      if (l.value !== i || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), cs;
}
var fs, zu;
function o0() {
  if (zu) return fs;
  zu = 1;
  var e = typeof Symbol < "u" && Symbol, t = s0();
  return fs = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, fs;
}
var ds, Vu;
function vd() {
  return Vu || (Vu = 1, ds = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ds;
}
var hs, Hu;
function wd() {
  if (Hu) return hs;
  Hu = 1;
  var e = /* @__PURE__ */ yd();
  return hs = e.getPrototypeOf || null, hs;
}
var ps, Wu;
function l0() {
  if (Wu) return ps;
  Wu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(p, u) {
    for (var o = [], f = 0; f < p.length; f += 1)
      o[f] = p[f];
    for (var h = 0; h < u.length; h += 1)
      o[h + p.length] = u[h];
    return o;
  }, a = function(p, u) {
    for (var o = [], f = u, h = 0; f < p.length; f += 1, h += 1)
      o[h] = p[f];
    return o;
  }, s = function(l, p) {
    for (var u = "", o = 0; o < l.length; o += 1)
      u += l[o], o + 1 < l.length && (u += p);
    return u;
  };
  return ps = function(p) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var o = a(arguments, 1), f, h = function() {
      if (this instanceof f) {
        var b = u.apply(
          this,
          i(o, arguments)
        );
        return Object(b) === b ? b : this;
      }
      return u.apply(
        p,
        i(o, arguments)
      );
    }, d = r(0, u.length - o.length), m = [], y = 0; y < d; y++)
      m[y] = "$" + y;
    if (f = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var g = function() {
      };
      g.prototype = u.prototype, f.prototype = new g(), g.prototype = null;
    }
    return f;
  }, ps;
}
var ms, Gu;
function Ki() {
  if (Gu) return ms;
  Gu = 1;
  var e = l0();
  return ms = Function.prototype.bind || e, ms;
}
var gs, Ku;
function vl() {
  return Ku || (Ku = 1, gs = Function.prototype.call), gs;
}
var ys, Ju;
function xd() {
  return Ju || (Ju = 1, ys = Function.prototype.apply), ys;
}
var bs, Yu;
function u0() {
  return Yu || (Yu = 1, bs = typeof Reflect < "u" && Reflect && Reflect.apply), bs;
}
var vs, Xu;
function c0() {
  if (Xu) return vs;
  Xu = 1;
  var e = Ki(), t = xd(), r = vl(), n = u0();
  return vs = n || e.call(r, t), vs;
}
var ws, Qu;
function Sd() {
  if (Qu) return ws;
  Qu = 1;
  var e = Ki(), t = /* @__PURE__ */ mn(), r = vl(), n = c0();
  return ws = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return n(e, r, a);
  }, ws;
}
var xs, Zu;
function f0() {
  if (Zu) return xs;
  Zu = 1;
  var e = Sd(), t = /* @__PURE__ */ bd(), r;
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
  ), i = Object, a = i.getPrototypeOf;
  return xs = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : i(l));
    }
  ) : !1, xs;
}
var Ss, ec;
function d0() {
  if (ec) return Ss;
  ec = 1;
  var e = vd(), t = wd(), r = /* @__PURE__ */ f0();
  return Ss = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Ss;
}
var As, tc;
function h0() {
  if (tc) return As;
  tc = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ki();
  return As = r.call(e, t), As;
}
var Es, rc;
function wl() {
  if (rc) return Es;
  rc = 1;
  var e, t = /* @__PURE__ */ yd(), r = /* @__PURE__ */ Vy(), n = /* @__PURE__ */ Hy(), i = /* @__PURE__ */ Wy(), a = /* @__PURE__ */ Gy(), s = /* @__PURE__ */ Ky(), l = /* @__PURE__ */ mn(), p = /* @__PURE__ */ Jy(), u = /* @__PURE__ */ Yy(), o = /* @__PURE__ */ Xy(), f = /* @__PURE__ */ Qy(), h = /* @__PURE__ */ Zy(), d = /* @__PURE__ */ e0(), m = /* @__PURE__ */ t0(), y = /* @__PURE__ */ n0(), g = Function, b = function(Se) {
    try {
      return g('"use strict"; return (' + Se + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ bd(), S = /* @__PURE__ */ a0(), O = function() {
    throw new l();
  }, E = v ? function() {
    try {
      return arguments.callee, O;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return O;
      }
    }
  }() : O, C = o0()(), T = d0(), L = wd(), M = vd(), R = xd(), z = vl(), w = {}, P = typeof Uint8Array > "u" || !T ? e : T(Uint8Array), _ = {
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
    "%Object.getOwnPropertyDescriptor%": v,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": a,
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
    "%TypedArray%": P,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": p,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": z,
    "%Function.prototype.apply%": R,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": L,
    "%Math.abs%": u,
    "%Math.floor%": o,
    "%Math.max%": f,
    "%Math.min%": h,
    "%Math.pow%": d,
    "%Math.round%": m,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": M
  };
  if (T)
    try {
      null.error;
    } catch (Se) {
      var A = T(T(Se));
      _["%Error.prototype%"] = A;
    }
  var W = function Se(oe) {
    var he;
    if (oe === "%AsyncFunction%")
      he = b("async function () {}");
    else if (oe === "%GeneratorFunction%")
      he = b("function* () {}");
    else if (oe === "%AsyncGeneratorFunction%")
      he = b("async function* () {}");
    else if (oe === "%AsyncGenerator%") {
      var ue = Se("%AsyncGeneratorFunction%");
      ue && (he = ue.prototype);
    } else if (oe === "%AsyncIteratorPrototype%") {
      var xe = Se("%AsyncGenerator%");
      xe && T && (he = T(xe.prototype));
    }
    return _[oe] = he, he;
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
  }, $ = Ki(), H = /* @__PURE__ */ h0(), K = $.call(z, Array.prototype.concat), Te = $.call(R, Array.prototype.splice), qe = $.call(z, String.prototype.replace), G = $.call(z, String.prototype.slice), Oe = $.call(z, RegExp.prototype.exec), ee = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Re = /\\(\\)?/g, We = function(oe) {
    var he = G(oe, 0, 1), ue = G(oe, -1);
    if (he === "%" && ue !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (ue === "%" && he !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var xe = [];
    return qe(oe, ee, function(Fe, Ke, Ie, ze) {
      xe[xe.length] = Ie ? qe(ze, Re, "$1") : Ke || Fe;
    }), xe;
  }, Pe = function(oe, he) {
    var ue = oe, xe;
    if (H(j, ue) && (xe = j[ue], ue = "%" + xe[0] + "%"), H(_, ue)) {
      var Fe = _[ue];
      if (Fe === w && (Fe = W(ue)), typeof Fe > "u" && !he)
        throw new l("intrinsic " + oe + " exists, but is not available. Please file an issue!");
      return {
        alias: xe,
        name: ue,
        value: Fe
      };
    }
    throw new s("intrinsic " + oe + " does not exist!");
  };
  return Es = function(oe, he) {
    if (typeof oe != "string" || oe.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof he != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (Oe(/^%?[^%]*%?$/, oe) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var ue = We(oe), xe = ue.length > 0 ? ue[0] : "", Fe = Pe("%" + xe + "%", he), Ke = Fe.name, Ie = Fe.value, ze = !1, Ze = Fe.alias;
    Ze && (xe = Ze[0], Te(ue, K([0, 1], Ze)));
    for (var Bt = 1, st = !0; Bt < ue.length; Bt += 1) {
      var Je = ue[Bt], Ot = G(Je, 0, 1), Pt = G(Je, -1);
      if ((Ot === '"' || Ot === "'" || Ot === "`" || Pt === '"' || Pt === "'" || Pt === "`") && Ot !== Pt)
        throw new s("property names with quotes must have matching quotes");
      if ((Je === "constructor" || !st) && (ze = !0), xe += "." + Je, Ke = "%" + xe + "%", H(_, Ke))
        Ie = _[Ke];
      else if (Ie != null) {
        if (!(Je in Ie)) {
          if (!he)
            throw new l("base intrinsic for " + oe + " exists, but the property is not available.");
          return;
        }
        if (v && Bt + 1 >= ue.length) {
          var Ye = v(Ie, Je);
          st = !!Ye, st && "get" in Ye && !("originalValue" in Ye.get) ? Ie = Ye.get : Ie = Ie[Je];
        } else
          st = H(Ie, Je), Ie = Ie[Je];
        st && !ze && (_[Ke] = Ie);
      }
    }
    return Ie;
  }, Es;
}
var Cs, nc;
function Ad() {
  if (nc) return Cs;
  nc = 1;
  var e = /* @__PURE__ */ wl(), t = Sd(), r = t([e("%String.prototype.indexOf%")]);
  return Cs = function(i, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!a)
    );
    return typeof s == "function" && r(i, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Cs;
}
var Os, ic;
function Ed() {
  if (ic) return Os;
  ic = 1;
  var e = /* @__PURE__ */ wl(), t = /* @__PURE__ */ Ad(), r = /* @__PURE__ */ Gi(), n = /* @__PURE__ */ mn(), i = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), l = t("Map.prototype.has", !0), p = t("Map.prototype.delete", !0), u = t("Map.prototype.size", !0);
  return Os = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, h = {
      assert: function(d) {
        if (!h.has(d))
          throw new n("Side channel does not contain " + r(d));
      },
      delete: function(d) {
        if (f) {
          var m = p(f, d);
          return u(f) === 0 && (f = void 0), m;
        }
        return !1;
      },
      get: function(d) {
        if (f)
          return a(f, d);
      },
      has: function(d) {
        return f ? l(f, d) : !1;
      },
      set: function(d, m) {
        f || (f = new i()), s(f, d, m);
      }
    };
    return h;
  }, Os;
}
var Ps, ac;
function p0() {
  if (ac) return Ps;
  ac = 1;
  var e = /* @__PURE__ */ wl(), t = /* @__PURE__ */ Ad(), r = /* @__PURE__ */ Gi(), n = Ed(), i = /* @__PURE__ */ mn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), l = t("WeakMap.prototype.set", !0), p = t("WeakMap.prototype.has", !0), u = t("WeakMap.prototype.delete", !0);
  return Ps = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, h, d = {
        assert: function(m) {
          if (!d.has(m))
            throw new i("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (a && m && (typeof m == "object" || typeof m == "function")) {
            if (f)
              return u(f, m);
          } else if (n && h)
            return h.delete(m);
          return !1;
        },
        get: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? s(f, m) : h && h.get(m);
        },
        has: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && f ? p(f, m) : !!h && h.has(m);
        },
        set: function(m, y) {
          a && m && (typeof m == "object" || typeof m == "function") ? (f || (f = new a()), l(f, m, y)) : n && (h || (h = n()), h.set(m, y));
        }
      };
      return d;
    }
  ) : n, Ps;
}
var _s, sc;
function m0() {
  if (sc) return _s;
  sc = 1;
  var e = /* @__PURE__ */ mn(), t = /* @__PURE__ */ Gi(), r = zy(), n = Ed(), i = p0(), a = i || n || r;
  return _s = function() {
    var l, p = {
      assert: function(u) {
        if (!p.has(u))
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
        l || (l = a()), l.set(u, o);
      }
    };
    return p;
  }, _s;
}
var ks, oc;
function xl() {
  if (oc) return ks;
  oc = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return ks = {
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
  }, ks;
}
var Ts, lc;
function Cd() {
  if (lc) return Ts;
  lc = 1;
  var e = /* @__PURE__ */ xl(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var g = [], b = 0; b < 256; ++b)
      g.push("%" + ((b < 16 ? "0" : "") + b.toString(16)).toUpperCase());
    return g;
  }(), i = function(b) {
    for (; b.length > 1; ) {
      var v = b.pop(), S = v.obj[v.prop];
      if (r(S)) {
        for (var O = [], E = 0; E < S.length; ++E)
          typeof S[E] < "u" && O.push(S[E]);
        v.obj[v.prop] = O;
      }
    }
  }, a = function(b, v) {
    for (var S = v && v.plainObjects ? { __proto__: null } : {}, O = 0; O < b.length; ++O)
      typeof b[O] < "u" && (S[O] = b[O]);
    return S;
  }, s = function g(b, v, S) {
    if (!v)
      return b;
    if (typeof v != "object" && typeof v != "function") {
      if (r(b))
        b.push(v);
      else if (b && typeof b == "object")
        (S && (S.plainObjects || S.allowPrototypes) || !t.call(Object.prototype, v)) && (b[v] = !0);
      else
        return [b, v];
      return b;
    }
    if (!b || typeof b != "object")
      return [b].concat(v);
    var O = b;
    return r(b) && !r(v) && (O = a(b, S)), r(b) && r(v) ? (v.forEach(function(E, C) {
      if (t.call(b, C)) {
        var T = b[C];
        T && typeof T == "object" && E && typeof E == "object" ? b[C] = g(T, E, S) : b.push(E);
      } else
        b[C] = E;
    }), b) : Object.keys(v).reduce(function(E, C) {
      var T = v[C];
      return t.call(E, C) ? E[C] = g(E[C], T, S) : E[C] = T, E;
    }, O);
  }, l = function(b, v) {
    return Object.keys(v).reduce(function(S, O) {
      return S[O] = v[O], S;
    }, b);
  }, p = function(g, b, v) {
    var S = g.replace(/\+/g, " ");
    if (v === "iso-8859-1")
      return S.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(S);
    } catch {
      return S;
    }
  }, u = 1024, o = function(b, v, S, O, E) {
    if (b.length === 0)
      return b;
    var C = b;
    if (typeof b == "symbol" ? C = Symbol.prototype.toString.call(b) : typeof b != "string" && (C = String(b)), S === "iso-8859-1")
      return escape(C).replace(/%u[0-9a-f]{4}/gi, function(P) {
        return "%26%23" + parseInt(P.slice(2), 16) + "%3B";
      });
    for (var T = "", L = 0; L < C.length; L += u) {
      for (var M = C.length >= u ? C.slice(L, L + u) : C, R = [], z = 0; z < M.length; ++z) {
        var w = M.charCodeAt(z);
        if (w === 45 || w === 46 || w === 95 || w === 126 || w >= 48 && w <= 57 || w >= 65 && w <= 90 || w >= 97 && w <= 122 || E === e.RFC1738 && (w === 40 || w === 41)) {
          R[R.length] = M.charAt(z);
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
        z += 1, w = 65536 + ((w & 1023) << 10 | M.charCodeAt(z) & 1023), R[R.length] = n[240 | w >> 18] + n[128 | w >> 12 & 63] + n[128 | w >> 6 & 63] + n[128 | w & 63];
      }
      T += R.join("");
    }
    return T;
  }, f = function(b) {
    for (var v = [{ obj: { o: b }, prop: "o" }], S = [], O = 0; O < v.length; ++O)
      for (var E = v[O], C = E.obj[E.prop], T = Object.keys(C), L = 0; L < T.length; ++L) {
        var M = T[L], R = C[M];
        typeof R == "object" && R !== null && S.indexOf(R) === -1 && (v.push({ obj: C, prop: M }), S.push(R));
      }
    return i(v), b;
  }, h = function(b) {
    return Object.prototype.toString.call(b) === "[object RegExp]";
  }, d = function(b) {
    return !b || typeof b != "object" ? !1 : !!(b.constructor && b.constructor.isBuffer && b.constructor.isBuffer(b));
  }, m = function(b, v) {
    return [].concat(b, v);
  }, y = function(b, v) {
    if (r(b)) {
      for (var S = [], O = 0; O < b.length; O += 1)
        S.push(v(b[O]));
      return S;
    }
    return v(b);
  };
  return Ts = {
    arrayToObject: a,
    assign: l,
    combine: m,
    compact: f,
    decode: p,
    encode: o,
    isBuffer: d,
    isRegExp: h,
    maybeMap: y,
    merge: s
  }, Ts;
}
var Rs, uc;
function g0() {
  if (uc) return Rs;
  uc = 1;
  var e = m0(), t = /* @__PURE__ */ Cd(), r = /* @__PURE__ */ xl(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, b) {
      return g + "[" + b + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, a = Array.isArray, s = Array.prototype.push, l = function(y, g) {
    s.apply(y, a(g) ? g : [g]);
  }, p = Date.prototype.toISOString, u = r.default, o = {
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
      return p.call(g);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(g) {
    return typeof g == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint";
  }, h = {}, d = function y(g, b, v, S, O, E, C, T, L, M, R, z, w, P, _, A, W, j) {
    for (var $ = g, H = j, K = 0, Te = !1; (H = H.get(h)) !== void 0 && !Te; ) {
      var qe = H.get(g);
      if (K += 1, typeof qe < "u") {
        if (qe === K)
          throw new RangeError("Cyclic object value");
        Te = !0;
      }
      typeof H.get(h) > "u" && (K = 0);
    }
    if (typeof M == "function" ? $ = M(b, $) : $ instanceof Date ? $ = w($) : v === "comma" && a($) && ($ = t.maybeMap($, function(Ke) {
      return Ke instanceof Date ? w(Ke) : Ke;
    })), $ === null) {
      if (E)
        return L && !A ? L(b, o.encoder, W, "key", P) : b;
      $ = "";
    }
    if (f($) || t.isBuffer($)) {
      if (L) {
        var G = A ? b : L(b, o.encoder, W, "key", P);
        return [_(G) + "=" + _(L($, o.encoder, W, "value", P))];
      }
      return [_(b) + "=" + _(String($))];
    }
    var Oe = [];
    if (typeof $ > "u")
      return Oe;
    var ee;
    if (v === "comma" && a($))
      A && L && ($ = t.maybeMap($, L)), ee = [{ value: $.length > 0 ? $.join(",") || null : void 0 }];
    else if (a(M))
      ee = M;
    else {
      var Re = Object.keys($);
      ee = R ? Re.sort(R) : Re;
    }
    var We = T ? String(b).replace(/\./g, "%2E") : String(b), Pe = S && a($) && $.length === 1 ? We + "[]" : We;
    if (O && a($) && $.length === 0)
      return Pe + "[]";
    for (var Se = 0; Se < ee.length; ++Se) {
      var oe = ee[Se], he = typeof oe == "object" && oe && typeof oe.value < "u" ? oe.value : $[oe];
      if (!(C && he === null)) {
        var ue = z && T ? String(oe).replace(/\./g, "%2E") : String(oe), xe = a($) ? typeof v == "function" ? v(Pe, ue) : Pe : Pe + (z ? "." + ue : "[" + ue + "]");
        j.set(g, K);
        var Fe = e();
        Fe.set(h, j), l(Oe, y(
          he,
          xe,
          v,
          S,
          O,
          E,
          C,
          T,
          v === "comma" && A && a($) ? null : L,
          M,
          R,
          z,
          w,
          P,
          _,
          A,
          W,
          Fe
        ));
      }
    }
    return Oe;
  }, m = function(g) {
    if (!g)
      return o;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var b = g.charset || o.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var v = r.default;
    if (typeof g.format < "u") {
      if (!n.call(r.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      v = g.format;
    }
    var S = r.formatters[v], O = o.filter;
    (typeof g.filter == "function" || a(g.filter)) && (O = g.filter);
    var E;
    if (g.arrayFormat in i ? E = g.arrayFormat : "indices" in g ? E = g.indices ? "indices" : "repeat" : E = o.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var C = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : o.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : o.addQueryPrefix,
      allowDots: C,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : o.allowEmptyArrays,
      arrayFormat: E,
      charset: b,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : o.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? o.delimiter : g.delimiter,
      encode: typeof g.encode == "boolean" ? g.encode : o.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : o.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : o.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : o.encodeValuesOnly,
      filter: O,
      format: v,
      formatter: S,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : o.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : o.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : o.strictNullHandling
    };
  };
  return Rs = function(y, g) {
    var b = y, v = m(g), S, O;
    typeof v.filter == "function" ? (O = v.filter, b = O("", b)) : a(v.filter) && (O = v.filter, S = O);
    var E = [];
    if (typeof b != "object" || b === null)
      return "";
    var C = i[v.arrayFormat], T = C === "comma" && v.commaRoundTrip;
    S || (S = Object.keys(b)), v.sort && S.sort(v.sort);
    for (var L = e(), M = 0; M < S.length; ++M) {
      var R = S[M], z = b[R];
      v.skipNulls && z === null || l(E, d(
        z,
        R,
        C,
        T,
        v.allowEmptyArrays,
        v.strictNullHandling,
        v.skipNulls,
        v.encodeDotInKeys,
        v.encode ? v.encoder : null,
        v.filter,
        v.sort,
        v.allowDots,
        v.serializeDate,
        v.format,
        v.formatter,
        v.encodeValuesOnly,
        v.charset,
        L
      ));
    }
    var w = E.join(v.delimiter), P = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), w.length > 0 ? P + w : "";
  }, Rs;
}
var Fs, cc;
function y0() {
  if (cc) return Fs;
  cc = 1;
  var e = /* @__PURE__ */ Cd(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, i = function(h) {
    return h.replace(/&#(\d+);/g, function(d, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, a = function(h, d, m) {
    if (h && typeof h == "string" && d.comma && h.indexOf(",") > -1)
      return h.split(",");
    if (d.throwOnLimitExceeded && m >= d.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + d.arrayLimit + " element" + (d.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return h;
  }, s = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", p = function(d, m) {
    var y = { __proto__: null }, g = m.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var b = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, v = g.split(
      m.delimiter,
      m.throwOnLimitExceeded ? b + 1 : b
    );
    if (m.throwOnLimitExceeded && v.length > b)
      throw new RangeError("Parameter limit exceeded. Only " + b + " parameter" + (b === 1 ? "" : "s") + " allowed.");
    var S = -1, O, E = m.charset;
    if (m.charsetSentinel)
      for (O = 0; O < v.length; ++O)
        v[O].indexOf("utf8=") === 0 && (v[O] === l ? E = "utf-8" : v[O] === s && (E = "iso-8859-1"), S = O, O = v.length);
    for (O = 0; O < v.length; ++O)
      if (O !== S) {
        var C = v[O], T = C.indexOf("]="), L = T === -1 ? C.indexOf("=") : T + 1, M, R;
        L === -1 ? (M = m.decoder(C, n.decoder, E, "key"), R = m.strictNullHandling ? null : "") : (M = m.decoder(C.slice(0, L), n.decoder, E, "key"), R = e.maybeMap(
          a(
            C.slice(L + 1),
            m,
            r(y[M]) ? y[M].length : 0
          ),
          function(w) {
            return m.decoder(w, n.decoder, E, "value");
          }
        )), R && m.interpretNumericEntities && E === "iso-8859-1" && (R = i(String(R))), C.indexOf("[]=") > -1 && (R = r(R) ? [R] : R);
        var z = t.call(y, M);
        z && m.duplicates === "combine" ? y[M] = e.combine(y[M], R) : (!z || m.duplicates === "last") && (y[M] = R);
      }
    return y;
  }, u = function(h, d, m, y) {
    var g = 0;
    if (h.length > 0 && h[h.length - 1] === "[]") {
      var b = h.slice(0, -1).join("");
      g = Array.isArray(d) && d[b] ? d[b].length : 0;
    }
    for (var v = y ? d : a(d, m, g), S = h.length - 1; S >= 0; --S) {
      var O, E = h[S];
      if (E === "[]" && m.parseArrays)
        O = m.allowEmptyArrays && (v === "" || m.strictNullHandling && v === null) ? [] : e.combine([], v);
      else {
        O = m.plainObjects ? { __proto__: null } : {};
        var C = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E, T = m.decodeDotInKeys ? C.replace(/%2E/g, ".") : C, L = parseInt(T, 10);
        !m.parseArrays && T === "" ? O = { 0: v } : !isNaN(L) && E !== T && String(L) === T && L >= 0 && m.parseArrays && L <= m.arrayLimit ? (O = [], O[L] = v) : T !== "__proto__" && (O[T] = v);
      }
      v = O;
    }
    return v;
  }, o = function(d, m, y, g) {
    if (d) {
      var b = y.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d, v = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, O = y.depth > 0 && v.exec(b), E = O ? b.slice(0, O.index) : b, C = [];
      if (E) {
        if (!y.plainObjects && t.call(Object.prototype, E) && !y.allowPrototypes)
          return;
        C.push(E);
      }
      for (var T = 0; y.depth > 0 && (O = S.exec(b)) !== null && T < y.depth; ) {
        if (T += 1, !y.plainObjects && t.call(Object.prototype, O[1].slice(1, -1)) && !y.allowPrototypes)
          return;
        C.push(O[1]);
      }
      if (O) {
        if (y.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + y.depth + " and strictDepth is true");
        C.push("[" + b.slice(O.index) + "]");
      }
      return u(C, m, y, g);
    }
  }, f = function(d) {
    if (!d)
      return n;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof d.throwOnLimitExceeded < "u" && typeof d.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var m = typeof d.charset > "u" ? n.charset : d.charset, y = typeof d.duplicates > "u" ? n.duplicates : d.duplicates;
    if (y !== "combine" && y !== "first" && y !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : n.allowDots : !!d.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : n.allowSparse,
      arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : n.arrayLimit,
      charset: m,
      charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : n.charsetSentinel,
      comma: typeof d.comma == "boolean" ? d.comma : n.comma,
      decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof d.decoder == "function" ? d.decoder : n.decoder,
      delimiter: typeof d.delimiter == "string" || e.isRegExp(d.delimiter) ? d.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : n.depth,
      duplicates: y,
      ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : n.parameterLimit,
      parseArrays: d.parseArrays !== !1,
      plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : n.plainObjects,
      strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : n.strictDepth,
      strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof d.throwOnLimitExceeded == "boolean" ? d.throwOnLimitExceeded : !1
    };
  };
  return Fs = function(h, d) {
    var m = f(d);
    if (h === "" || h === null || typeof h > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var y = typeof h == "string" ? p(h, m) : h, g = m.plainObjects ? { __proto__: null } : {}, b = Object.keys(y), v = 0; v < b.length; ++v) {
      var S = b[v], O = o(S, y[S], m, typeof h == "string");
      g = e.merge(g, O, m);
    }
    return m.allowSparse === !0 ? g : e.compact(g);
  }, Fs;
}
var Is, fc;
function b0() {
  if (fc) return Is;
  fc = 1;
  var e = /* @__PURE__ */ g0(), t = /* @__PURE__ */ y0(), r = /* @__PURE__ */ xl();
  return Is = {
    formats: r,
    parse: t,
    stringify: e
  }, Is;
}
var dc = /* @__PURE__ */ b0();
function Od(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: v0 } = Object.prototype, { getPrototypeOf: Sl } = Object, Ji = /* @__PURE__ */ ((e) => (t) => {
  const r = v0.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Nt = (e) => (e = e.toLowerCase(), (t) => Ji(t) === e), Yi = (e) => (t) => typeof t === e, { isArray: gn } = Array, Hn = Yi("undefined");
function w0(e) {
  return e !== null && !Hn(e) && e.constructor !== null && !Hn(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pd = Nt("ArrayBuffer");
function x0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pd(e.buffer), t;
}
const S0 = Yi("string"), wt = Yi("function"), _d = Yi("number"), Xi = (e) => e !== null && typeof e == "object", A0 = (e) => e === !0 || e === !1, Ci = (e) => {
  if (Ji(e) !== "object")
    return !1;
  const t = Sl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, E0 = Nt("Date"), C0 = Nt("File"), O0 = Nt("Blob"), P0 = Nt("FileList"), _0 = (e) => Xi(e) && wt(e.pipe), k0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = Ji(e)) === "formdata" || // detect form-data instance
  t === "object" && wt(e.toString) && e.toString() === "[object FormData]"));
}, T0 = Nt("URLSearchParams"), [R0, F0, I0, D0] = ["ReadableStream", "Request", "Response", "Headers"].map(Nt), $0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), gn(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let l;
    for (n = 0; n < s; n++)
      l = a[n], t.call(null, e[l], l, e);
  }
}
function kd(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Mr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Td = (e) => !Hn(e) && e !== Mr;
function Uo() {
  const { caseless: e } = Td(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && kd(t, i) || i;
    Ci(t[a]) && Ci(n) ? t[a] = Uo(t[a], n) : Ci(n) ? t[a] = Uo({}, n) : gn(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Qn(arguments[n], r);
  return t;
}
const L0 = (e, t, r, { allOwnKeys: n } = {}) => (Qn(t, (i, a) => {
  r && wt(i) ? e[a] = Od(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), N0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), M0 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, B0 = (e, t, r, n) => {
  let i, a, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      s = i[a], (!n || n(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = r !== !1 && Sl(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, q0 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, j0 = (e) => {
  if (!e) return null;
  if (gn(e)) return e;
  let t = e.length;
  if (!_d(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, U0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Sl(Uint8Array)), z0 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, V0 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, H0 = Nt("HTMLFormElement"), W0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), hc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), G0 = Nt("RegExp"), Rd = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Qn(r, (i, a) => {
    let s;
    (s = t(i, a, e)) !== !1 && (n[a] = s || i);
  }), Object.defineProperties(e, n);
}, K0 = (e) => {
  Rd(e, (t, r) => {
    if (wt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (wt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, J0 = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return gn(e) ? n(e) : n(String(e).split(t)), r;
}, Y0 = () => {
}, X0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Q0(e) {
  return !!(e && wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Z0 = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Xi(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = gn(n) ? [] : {};
        return Qn(n, (s, l) => {
          const p = r(s, i + 1);
          !Hn(p) && (a[l] = p);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, eb = Nt("AsyncFunction"), tb = (e) => e && (Xi(e) || wt(e)) && wt(e.then) && wt(e.catch), Fd = ((e, t) => e ? setImmediate : t ? ((r, n) => (Mr.addEventListener("message", ({ source: i, data: a }) => {
  i === Mr && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), Mr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  wt(Mr.postMessage)
), rb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Mr) : typeof process < "u" && process.nextTick || Fd, N = {
  isArray: gn,
  isArrayBuffer: Pd,
  isBuffer: w0,
  isFormData: k0,
  isArrayBufferView: x0,
  isString: S0,
  isNumber: _d,
  isBoolean: A0,
  isObject: Xi,
  isPlainObject: Ci,
  isReadableStream: R0,
  isRequest: F0,
  isResponse: I0,
  isHeaders: D0,
  isUndefined: Hn,
  isDate: E0,
  isFile: C0,
  isBlob: O0,
  isRegExp: G0,
  isFunction: wt,
  isStream: _0,
  isURLSearchParams: T0,
  isTypedArray: U0,
  isFileList: P0,
  forEach: Qn,
  merge: Uo,
  extend: L0,
  trim: $0,
  stripBOM: N0,
  inherits: M0,
  toFlatObject: B0,
  kindOf: Ji,
  kindOfTest: Nt,
  endsWith: q0,
  toArray: j0,
  forEachEntry: z0,
  matchAll: V0,
  isHTMLForm: H0,
  hasOwnProperty: hc,
  hasOwnProp: hc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Rd,
  freezeMethods: K0,
  toObjectSet: J0,
  toCamelCase: W0,
  noop: Y0,
  toFiniteNumber: X0,
  findKey: kd,
  global: Mr,
  isContextDefined: Td,
  isSpecCompliantForm: Q0,
  toJSONObject: Z0,
  isAsyncFn: eb,
  isThenable: tb,
  setImmediate: Fd,
  asap: rb
};
function se(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
N.inherits(se, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Id = se.prototype, Dd = {};
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
  Dd[e] = { value: e };
});
Object.defineProperties(se, Dd);
Object.defineProperty(Id, "isAxiosError", { value: !0 });
se.from = (e, t, r, n, i, a) => {
  const s = Object.create(Id);
  return N.toFlatObject(e, s, function(p) {
    return p !== Error.prototype;
  }, (l) => l !== "isAxiosError"), se.call(s, e.message, t, r, n, i), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const nb = null;
function zo(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function $d(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pc(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = $d(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function ib(e) {
  return N.isArray(e) && !e.some(zo);
}
const ab = N.toFlatObject(N, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Qi(e, t, r) {
  if (!N.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = N.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, g) {
    return !N.isUndefined(g[y]);
  });
  const n = r.metaTokens, i = r.visitor || o, a = r.dots, s = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (N.isDate(m))
      return m.toISOString();
    if (!p && N.isBlob(m))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(m) || N.isTypedArray(m) ? p && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function o(m, y, g) {
    let b = m;
    if (m && !g && typeof m == "object") {
      if (N.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (N.isArray(m) && ib(m) || (N.isFileList(m) || N.endsWith(y, "[]")) && (b = N.toArray(m)))
        return y = $d(y), b.forEach(function(S, O) {
          !(N.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? pc([y], O, a) : s === null ? y : y + "[]",
            u(S)
          );
        }), !1;
    }
    return zo(m) ? !0 : (t.append(pc(g, y, a), u(m)), !1);
  }
  const f = [], h = Object.assign(ab, {
    defaultVisitor: o,
    convertValue: u,
    isVisitable: zo
  });
  function d(m, y) {
    if (!N.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(m), N.forEach(m, function(b, v) {
        (!(N.isUndefined(b) || b === null) && i.call(
          t,
          b,
          N.isString(v) ? v.trim() : v,
          y,
          h
        )) === !0 && d(b, y ? y.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!N.isObject(e))
    throw new TypeError("data must be an object");
  return d(e), t;
}
function mc(e) {
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
function Al(e, t) {
  this._pairs = [], e && Qi(e, this, t);
}
const Ld = Al.prototype;
Ld.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ld.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, mc);
  } : mc;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function sb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Nd(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || sb;
  N.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = N.isURLSearchParams(t) ? t.toString() : new Al(t, r).toString(n), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class gc {
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
    N.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Md = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ob = typeof URLSearchParams < "u" ? URLSearchParams : Al, lb = typeof FormData < "u" ? FormData : null, ub = typeof Blob < "u" ? Blob : null, cb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ob,
    FormData: lb,
    Blob: ub
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, El = typeof window < "u" && typeof document < "u", Vo = typeof navigator == "object" && navigator || void 0, fb = El && (!Vo || ["ReactNative", "NativeScript", "NS"].indexOf(Vo.product) < 0), db = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", hb = El && window.location.href || "http://localhost", pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: El,
  hasStandardBrowserEnv: fb,
  hasStandardBrowserWebWorkerEnv: db,
  navigator: Vo,
  origin: hb
}, Symbol.toStringTag, { value: "Module" })), it = {
  ...pb,
  ...cb
};
function mb(e, t) {
  return Qi(e, new it.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return it.isNode && N.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gb(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yb(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Bd(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), p = a >= r.length;
    return s = !s && N.isArray(i) ? i.length : s, p ? (N.hasOwnProp(i, s) ? i[s] = [i[s], n] : i[s] = n, !l) : ((!i[s] || !N.isObject(i[s])) && (i[s] = []), t(r, n, i[s], a) && N.isArray(i[s]) && (i[s] = yb(i[s])), !l);
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const r = {};
    return N.forEachEntry(e, (n, i) => {
      t(gb(n), i, r, 0);
    }), r;
  }
  return null;
}
function bb(e, t, r) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Zn = {
  transitional: Md,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = N.isObject(t);
    if (a && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
      return i ? JSON.stringify(Bd(t)) : t;
    if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t) || N.isReadableStream(t))
      return t;
    if (N.isArrayBufferView(t))
      return t.buffer;
    if (N.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mb(t, this.formSerializer).toString();
      if ((l = N.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Qi(
          l ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), bb(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Zn.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (N.isResponse(t) || N.isReadableStream(t))
      return t;
    if (t && N.isString(t) && (n && !this.responseType || i)) {
      const s = !(r && r.silentJSONParsing) && i;
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
    FormData: it.classes.FormData,
    Blob: it.classes.Blob
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zn.headers[e] = {};
});
const vb = N.toObjectSet([
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
]), wb = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), r = s.substring(0, i).trim().toLowerCase(), n = s.substring(i + 1).trim(), !(!r || t[r] && vb[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, yc = Symbol("internals");
function _n(e) {
  return e && String(e).trim().toLowerCase();
}
function Oi(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Oi) : String(e);
}
function xb(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Sb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ds(e, t, r, n, i) {
  if (N.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!N.isString(t)) {
    if (N.isString(n))
      return t.indexOf(n) !== -1;
    if (N.isRegExp(n))
      return n.test(t);
  }
}
function Ab(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Eb(e, t) {
  const r = N.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, s) {
        return this[n].call(this, t, i, a, s);
      },
      configurable: !0
    });
  });
}
let ht = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(l, p, u) {
      const o = _n(p);
      if (!o)
        throw new Error("header name must be a non-empty string");
      const f = N.findKey(i, o);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || p] = Oi(l));
    }
    const s = (l, p) => N.forEach(l, (u, o) => a(u, o, p));
    if (N.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (N.isString(t) && (t = t.trim()) && !Sb(t))
      s(wb(t), r);
    else if (N.isHeaders(t))
      for (const [l, p] of t.entries())
        a(p, l, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = _n(t), t) {
      const n = N.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return xb(i);
        if (N.isFunction(r))
          return r.call(this, i, n);
        if (N.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = _n(t), t) {
      const n = N.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ds(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (s = _n(s), s) {
        const l = N.findKey(n, s);
        l && (!r || Ds(n, n[l], l, r)) && (delete n[l], i = !0);
      }
    }
    return N.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Ds(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return N.forEach(this, (i, a) => {
      const s = N.findKey(n, a);
      if (s) {
        r[s] = Oi(i), delete r[a];
        return;
      }
      const l = t ? Ab(a) : String(a).trim();
      l !== a && delete r[a], r[l] = Oi(i), n[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && N.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[yc] = this[yc] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(s) {
      const l = _n(s);
      n[l] || (Eb(i, s), n[l] = !0);
    }
    return N.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(ht.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
N.freezeMethods(ht);
function $s(e, t) {
  const r = this || Zn, n = t || r, i = ht.from(n.headers);
  let a = n.data;
  return N.forEach(e, function(l) {
    a = l.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function qd(e) {
  return !!(e && e.__CANCEL__);
}
function yn(e, t, r) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, t, r), this.name = "CanceledError";
}
N.inherits(yn, se, {
  __CANCEL__: !0
});
function jd(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new se(
    "Request failed with status code " + r.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Cb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ob(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), o = n[a];
    s || (s = u), r[i] = p, n[i] = u;
    let f = a, h = 0;
    for (; f !== i; )
      h += r[f++], f = f % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), u - s < t)
      return;
    const d = o && u - o;
    return d ? Math.round(h * 1e3 / d) : void 0;
  };
}
function Pb(e, t) {
  let r = 0, n = 1e3 / t, i, a;
  const s = (u, o = Date.now()) => {
    r = o, i = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const o = Date.now(), f = o - r;
    f >= n ? s(u, o) : (i = u, a || (a = setTimeout(() => {
      a = null, s(i);
    }, n - f)));
  }, () => i && s(i)];
}
const Li = (e, t, r = 3) => {
  let n = 0;
  const i = Ob(50, 250);
  return Pb((a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, p = s - n, u = i(p), o = s <= l;
    n = s;
    const f = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: p,
      rate: u || void 0,
      estimated: u && l && o ? (l - s) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, bc = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, vc = (e) => (...t) => N.asap(() => e(...t)), _b = it.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, it.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(it.origin),
  it.navigator && /(msie|trident)/i.test(it.navigator.userAgent)
) : () => !0, kb = it.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      N.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), N.isString(n) && s.push("path=" + n), N.isString(i) && s.push("domain=" + i), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Tb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ud(e, t, r) {
  let n = !Tb(t);
  return e && n || r == !1 ? Rb(e, t) : t;
}
const wc = (e) => e instanceof ht ? { ...e } : e;
function Vr(e, t) {
  t = t || {};
  const r = {};
  function n(u, o, f, h) {
    return N.isPlainObject(u) && N.isPlainObject(o) ? N.merge.call({ caseless: h }, u, o) : N.isPlainObject(o) ? N.merge({}, o) : N.isArray(o) ? o.slice() : o;
  }
  function i(u, o, f, h) {
    if (N.isUndefined(o)) {
      if (!N.isUndefined(u))
        return n(void 0, u, f, h);
    } else return n(u, o, f, h);
  }
  function a(u, o) {
    if (!N.isUndefined(o))
      return n(void 0, o);
  }
  function s(u, o) {
    if (N.isUndefined(o)) {
      if (!N.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, o);
  }
  function l(u, o, f) {
    if (f in t)
      return n(u, o);
    if (f in e)
      return n(void 0, u);
  }
  const p = {
    url: a,
    method: a,
    data: a,
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
    headers: (u, o, f) => i(wc(u), wc(o), f, !0)
  };
  return N.forEach(Object.keys(Object.assign({}, e, t)), function(o) {
    const f = p[o] || i, h = f(e[o], t[o], o);
    N.isUndefined(h) && f !== l || (r[o] = h);
  }), r;
}
const zd = (e) => {
  const t = Vr({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: s, auth: l } = t;
  t.headers = s = ht.from(s), t.url = Nd(Ud(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let p;
  if (N.isFormData(r)) {
    if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((p = s.getContentType()) !== !1) {
      const [u, ...o] = p ? p.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...o].join("; "));
    }
  }
  if (it.hasStandardBrowserEnv && (n && N.isFunction(n) && (n = n(t)), n || n !== !1 && _b(t.url))) {
    const u = i && a && kb.read(a);
    u && s.set(i, u);
  }
  return t;
}, Fb = typeof XMLHttpRequest < "u", Ib = Fb && function(e) {
  return new Promise(function(r, n) {
    const i = zd(e);
    let a = i.data;
    const s = ht.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: p, onDownloadProgress: u } = i, o, f, h, d, m;
    function y() {
      d && d(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(o), i.signal && i.signal.removeEventListener("abort", o);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function b() {
      if (!g)
        return;
      const S = ht.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: S,
        config: e,
        request: g
      };
      jd(function(T) {
        r(T), y();
      }, function(T) {
        n(T), y();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = b : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, g.onabort = function() {
      g && (n(new se("Request aborted", se.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new se("Network Error", se.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let O = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const E = i.transitional || Md;
      i.timeoutErrorMessage && (O = i.timeoutErrorMessage), n(new se(
        O,
        E.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        e,
        g
      )), g = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in g && N.forEach(s.toJSON(), function(O, E) {
      g.setRequestHeader(E, O);
    }), N.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), l && l !== "json" && (g.responseType = i.responseType), u && ([h, m] = Li(u, !0), g.addEventListener("progress", h)), p && g.upload && ([f, d] = Li(p), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", d)), (i.cancelToken || i.signal) && (o = (S) => {
      g && (n(!S || S.type ? new yn(null, e, g) : S), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(o), i.signal && (i.signal.aborted ? o() : i.signal.addEventListener("abort", o)));
    const v = Cb(i.url);
    if (v && it.protocols.indexOf(v) === -1) {
      n(new se("Unsupported protocol " + v + ":", se.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(a || null);
  });
}, Db = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(u) {
      if (!i) {
        i = !0, l();
        const o = u instanceof Error ? u : this.reason;
        n.abort(o instanceof se ? o : new yn(o instanceof Error ? o.message : o));
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new se(`timeout ${t} of ms exceeded`, se.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: p } = n;
    return p.unsubscribe = () => N.asap(l), p;
  }
}, $b = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + t, yield e.slice(n, i), n = i;
}, Lb = async function* (e, t) {
  for await (const r of Nb(e))
    yield* $b(r, t);
}, Nb = async function* (e) {
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
}, xc = (e, t, r, n) => {
  const i = Lb(e, t);
  let a = 0, s, l = (p) => {
    s || (s = !0, n && n(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: u, value: o } = await i.next();
        if (u) {
          l(), p.close();
          return;
        }
        let f = o.byteLength;
        if (r) {
          let h = a += f;
          r(h);
        }
        p.enqueue(new Uint8Array(o));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(p) {
      return l(p), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Zi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Vd = Zi && typeof ReadableStream == "function", Mb = Zi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Hd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Bb = Vd && Hd(() => {
  let e = !1;
  const t = new Request(it.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Sc = 64 * 1024, Ho = Vd && Hd(() => N.isReadableStream(new Response("").body)), Ni = {
  stream: Ho && ((e) => e.body)
};
Zi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ni[t] && (Ni[t] = N.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new se(`Response type '${t}' is not supported`, se.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const qb = async (e) => {
  if (e == null)
    return 0;
  if (N.isBlob(e))
    return e.size;
  if (N.isSpecCompliantForm(e))
    return (await new Request(it.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (N.isArrayBufferView(e) || N.isArrayBuffer(e))
    return e.byteLength;
  if (N.isURLSearchParams(e) && (e = e + ""), N.isString(e))
    return (await Mb(e)).byteLength;
}, jb = async (e, t) => {
  const r = N.toFiniteNumber(e.getContentLength());
  return r ?? qb(t);
}, Ub = Zi && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: l,
    onUploadProgress: p,
    responseType: u,
    headers: o,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = zd(e);
  u = u ? (u + "").toLowerCase() : "text";
  let d = Db([i, a && a.toAbortSignal()], s), m;
  const y = d && d.unsubscribe && (() => {
    d.unsubscribe();
  });
  let g;
  try {
    if (p && Bb && r !== "get" && r !== "head" && (g = await jb(o, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (N.isFormData(n) && (C = E.headers.get("content-type")) && o.setContentType(C), E.body) {
        const [T, L] = bc(
          g,
          Li(vc(p))
        );
        n = xc(E.body, Sc, T, L);
      }
    }
    N.isString(f) || (f = f ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    m = new Request(t, {
      ...h,
      signal: d,
      method: r.toUpperCase(),
      headers: o.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: b ? f : void 0
    });
    let v = await fetch(m);
    const S = Ho && (u === "stream" || u === "response");
    if (Ho && (l || S && y)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((M) => {
        E[M] = v[M];
      });
      const C = N.toFiniteNumber(v.headers.get("content-length")), [T, L] = l && bc(
        C,
        Li(vc(l), !0)
      ) || [];
      v = new Response(
        xc(v.body, Sc, T, () => {
          L && L(), y && y();
        }),
        E
      );
    }
    u = u || "text";
    let O = await Ni[N.findKey(Ni, u) || "text"](v, e);
    return !S && y && y(), await new Promise((E, C) => {
      jd(E, C, {
        data: O,
        headers: ht.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: m
      });
    });
  } catch (b) {
    throw y && y(), b && b.name === "TypeError" && /fetch/i.test(b.message) ? Object.assign(
      new se("Network Error", se.ERR_NETWORK, e, m),
      {
        cause: b.cause || b
      }
    ) : se.from(b, b && b.code, e, m);
  }
}), Wo = {
  http: nb,
  xhr: Ib,
  fetch: Ub
};
N.forEach(Wo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ac = (e) => `- ${e}`, zb = (e) => N.isFunction(e) || e === null || e === !1, Wd = {
  getAdapter: (e) => {
    e = N.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let s;
      if (n = r, !zb(r) && (n = Wo[(s = String(r)).toLowerCase()], n === void 0))
        throw new se(`Unknown adapter '${s}'`);
      if (n)
        break;
      i[s || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([l, p]) => `adapter ${l} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Ac).join(`
`) : " " + Ac(a[0]) : "as no adapter specified";
      throw new se(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Wo
};
function Ls(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yn(null, e);
}
function Ec(e) {
  return Ls(e), e.headers = ht.from(e.headers), e.data = $s.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Wd.getAdapter(e.adapter || Zn.adapter)(e).then(function(n) {
    return Ls(e), n.data = $s.call(
      e,
      e.transformResponse,
      n
    ), n.headers = ht.from(n.headers), n;
  }, function(n) {
    return qd(n) || (Ls(e), n && n.response && (n.response.data = $s.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = ht.from(n.response.headers))), Promise.reject(n);
  });
}
const Gd = "1.8.3", ea = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ea[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Cc = {};
ea.transitional = function(t, r, n) {
  function i(a, s) {
    return "[Axios v" + Gd + "] Transitional option '" + a + "'" + s + (n ? ". " + n : "");
  }
  return (a, s, l) => {
    if (t === !1)
      throw new se(
        i(s, " has been removed" + (r ? " in " + r : "")),
        se.ERR_DEPRECATED
      );
    return r && !Cc[s] && (Cc[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, s, l) : !0;
  };
};
ea.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Vb(e, t, r) {
  if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], s = t[a];
    if (s) {
      const l = e[a], p = l === void 0 || s(l, a, e);
      if (p !== !0)
        throw new se("option " + a + " must be " + p, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new se("Unknown option " + a, se.ERR_BAD_OPTION);
  }
}
const Pi = {
  assertOptions: Vb,
  validators: ea
}, Ht = Pi.validators;
let jr = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new gc(),
      response: new gc()
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
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Vr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Pi.assertOptions(n, {
      silentJSONParsing: Ht.transitional(Ht.boolean),
      forcedJSONParsing: Ht.transitional(Ht.boolean),
      clarifyTimeoutError: Ht.transitional(Ht.boolean)
    }, !1), i != null && (N.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Pi.assertOptions(i, {
      encode: Ht.function,
      serialize: Ht.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Pi.assertOptions(r, {
      baseUrl: Ht.spelling("baseURL"),
      withXsrfToken: Ht.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = a && N.merge(
      a.common,
      a[r.method]
    );
    a && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), r.headers = ht.concat(s, a);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (p = p && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let o, f = 0, h;
    if (!p) {
      const m = [Ec.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, u), h = m.length, o = Promise.resolve(r); f < h; )
        o = o.then(m[f++], m[f++]);
      return o;
    }
    h = l.length;
    let d = r;
    for (f = 0; f < h; ) {
      const m = l[f++], y = l[f++];
      try {
        d = m(d);
      } catch (g) {
        y.call(this, g);
        break;
      }
    }
    try {
      o = Ec.call(this, d);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, h = u.length; f < h; )
      o = o.then(u[f++], u[f++]);
    return o;
  }
  getUri(t) {
    t = Vr(this.defaults, t);
    const r = Ud(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Nd(r, t.params, t.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(t) {
  jr.prototype[t] = function(r, n) {
    return this.request(Vr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, s, l) {
      return this.request(Vr(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  jr.prototype[t] = r(), jr.prototype[t + "Form"] = r(!0);
});
let Hb = class Kd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const s = new Promise((l) => {
        n.subscribe(l), a = l;
      }).then(i);
      return s.cancel = function() {
        n.unsubscribe(a);
      }, s;
    }, t(function(a, s, l) {
      n.reason || (n.reason = new yn(a, s, l), r(n.reason));
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
      token: new Kd(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function Wb(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Gb(e) {
  return N.isObject(e) && e.isAxiosError === !0;
}
const Go = {
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
Object.entries(Go).forEach(([e, t]) => {
  Go[t] = e;
});
function Jd(e) {
  const t = new jr(e), r = Od(jr.prototype.request, t);
  return N.extend(r, jr.prototype, t, { allOwnKeys: !0 }), N.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return Jd(Vr(e, i));
  }, r;
}
const Le = Jd(Zn);
Le.Axios = jr;
Le.CanceledError = yn;
Le.CancelToken = Hb;
Le.isCancel = qd;
Le.VERSION = Gd;
Le.toFormData = Qi;
Le.AxiosError = se;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = Wb;
Le.isAxiosError = Gb;
Le.mergeConfig = Vr;
Le.AxiosHeaders = ht;
Le.formToJSON = (e) => Bd(N.isHTMLForm(e) ? new FormData(e) : e);
Le.getAdapter = Wd.getAdapter;
Le.HttpStatusCode = Go;
Le.default = Le;
const {
  Axios: WS,
  AxiosError: GS,
  CanceledError: KS,
  isCancel: JS,
  CancelToken: YS,
  VERSION: XS,
  all: QS,
  Cancel: ZS,
  isAxiosError: e2,
  spread: t2,
  toFormData: r2,
  AxiosHeaders: n2,
  HttpStatusCode: i2,
  formToJSON: a2,
  getAdapter: s2,
  mergeConfig: o2
} = Le;
function Ko(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function Mt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Oc = (e) => Mt("before", { cancelable: !0, detail: { visit: e } }), Kb = (e) => Mt("error", { detail: { errors: e } }), Jb = (e) => Mt("exception", { cancelable: !0, detail: { exception: e } }), Yb = (e) => Mt("finish", { detail: { visit: e } }), Xb = (e) => Mt("invalid", { cancelable: !0, detail: { response: e } }), jn = (e) => Mt("navigate", { detail: { page: e } }), Qb = (e) => Mt("progress", { detail: { progress: e } }), Zb = (e) => Mt("start", { detail: { visit: e } }), ev = (e) => Mt("success", { detail: { page: e } }), tv = (e, t) => Mt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), rv = (e) => Mt("prefetching", { detail: { visit: e } }), lt = class {
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
lt.locationVisitKey = "inertiaLocationVisit";
var nv = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Yd(), r = await Xd(), n = await uv(r);
  if (!n) throw new Error("Unable to encrypt history");
  return await av(t, n, e);
}, fn = { key: "historyKey", iv: "historyIv" }, iv = async (e) => {
  let t = Yd(), r = await Xd();
  if (!r) throw new Error("Unable to decrypt history");
  return await sv(t, r, e);
}, av = async (e, t, r) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), i = JSON.stringify(r), a = new Uint8Array(i.length * 3), s = n.encodeInto(i, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, sv = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, r);
  return JSON.parse(new TextDecoder().decode(n));
}, Yd = () => {
  let e = lt.get(fn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return lt.set(fn.iv, Array.from(t)), t;
}, ov = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), lv = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  lt.set(fn.key, Array.from(new Uint8Array(t)));
}, uv = async (e) => {
  if (e) return e;
  let t = await ov();
  return t ? (await lv(t), t) : null;
}, Xd = async () => {
  let e = lt.get(fn.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, Ft = class {
  static save() {
    be.saveScrollPositions(Array.from(this.regions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })));
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
      let i = t[n];
      i && (typeof r.scrollTo == "function" ? r.scrollTo(i.left, i.top) : (r.scrollTop = i.top, r.scrollLeft = i.left));
    });
  }
  static restoreDocument() {
    let t = be.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(t.left, t.top);
  }
  static onScroll(t) {
    let r = t.target;
    typeof r.hasAttribute == "function" && r.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    be.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Jo(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Jo(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Jo(t));
}
var Pc = (e) => e instanceof FormData;
function Qd(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && eh(t, Zd(r, n), e[n]);
  return t;
}
function Zd(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function eh(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => eh(e, Zd(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  Qd(r, e, t);
}
function wr(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var cv = (e, t, r, n, i) => {
  let a = typeof e == "string" ? wr(e) : e;
  if ((Jo(t) || n) && !Pc(t) && (t = Qd(t)), Pc(t)) return [a, t];
  let [s, l] = Cl(r, a, t, i);
  return [wr(s), l];
};
function Cl(e, t, r, n = "brackets") {
  let i = /^https?:\/\//.test(t.toString()), a = i || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(r).length, p = t.toString().includes("#"), u = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (u.search = dc.stringify(qy(dc.parse(u.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[i ? `${u.protocol}//${u.host}` : "", a ? u.pathname : "", s ? u.pathname.substring(1) : "", l ? u.search : "", p ? u.hash : ""].join(""), r];
}
function Mi(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var _c = (e, t) => {
  e.hash && !t.hash && Mi(e).href === t.href && (t.hash = e.hash);
}, Yo = (e, t) => Mi(e).href === Mi(t).href, fv = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: r }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = r, this;
  }
  set(e, { replace: t = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let i = this.componentId;
    return e.clearHistory && be.clear(), this.resolve(e.component).then((a) => {
      if (i !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let s = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || Yo(wr(e.url), s), new Promise((l) => {
        t ? be.replaceState(e, () => l(null)) : be.pushState(e, () => l(null));
      }).then(() => {
        let l = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, l && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: n }).then(() => {
          r || Ft.reset(), Br.fireInternalEvent("loadDeferredProps"), t || jn(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, be.setCurrent(e), this.swap({ component: r, page: e, preserveState: t })));
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
}, ae = new fv(), th = class {
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
}, In = typeof window > "u", kn = new th(), kc = !In && /CriOS/.test(window.navigator.userAgent), dv = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({ ...ae.get(), rememberedState: { ...((r = ae.get()) == null ? void 0 : r.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, r;
    if (!In) return (r = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : r[e];
  }
  pushState(e, t = null) {
    if (!In) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, kn.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doPushState({ page: r }, e.url), t && t();
        };
        kc ? setTimeout(n) : n();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? nv(e).then(t) : t(e));
  }
  processQueue() {
    return kn.process();
  }
  decrypt(e = null) {
    var r;
    if (In) return Promise.resolve(e ?? ae.get());
    let t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? iv(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    kn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e }, this.current.url);
    }));
  }
  saveDocumentScrollPosition(e) {
    kn.add(() => Promise.resolve().then(() => {
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
    if (ae.merge(e), !In) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, kn.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doReplaceState({ page: r }, e.url), t && t();
        };
        kc ? setTimeout(n) : n();
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
    lt.remove(fn.key), lt.remove(fn.iv);
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
var be = new dv(), hv = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Ko(Ft.onWindowScroll.bind(Ft), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Ko(Ft.onScroll.bind(Ft), 100), !0);
  }
  onGlobalEvent(t, r) {
    let n = (i) => {
      let a = r(i);
      i.cancelable && !i.defaultPrevented && a === !1 && i.preventDefault();
    };
    return this.registerListener(`inertia:${t}`, n);
  }
  on(t, r) {
    return this.internalListeners.push({ event: t, listener: r }), () => {
      this.internalListeners = this.internalListeners.filter((n) => n.listener !== r);
    };
  }
  onMissingHistoryItem() {
    ae.clear(), this.fireInternalEvent("missingHistoryItem");
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
      let n = wr(ae.get().url);
      n.hash = window.location.hash, be.replaceState({ ...ae.get(), url: n.href }), Ft.reset();
      return;
    }
    if (!be.isValidState(r)) return this.onMissingHistoryItem();
    be.decrypt(r.page).then((n) => {
      ae.setQuietly(n, { preserveState: !1 }).then(() => {
        Ft.restore(be.getScrollRegions()), jn(ae.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Br = new hv(), pv = class {
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
}, Ns = new pv(), mv = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ns.isReload() && be.deleteState(be.rememberedState);
  }
  static handleBackForward() {
    if (!Ns.isBackForward() || !be.hasAnyState()) return !1;
    let e = be.getScrollRegions();
    return be.decrypt().then((t) => {
      ae.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        Ft.restore(e), jn(ae.get());
      });
    }).catch(() => {
      Br.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!lt.exists(lt.locationVisitKey)) return !1;
    let e = lt.get(lt.locationVisitKey) || {};
    return lt.remove(lt.locationVisitKey), typeof window < "u" && ae.setUrlHash(window.location.hash), be.decrypt().then(() => {
      let t = be.getState(be.rememberedState, {}), r = be.getScrollRegions();
      ae.remember(t), ae.set(ae.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && Ft.restore(r), jn(ae.get());
      });
    }).catch(() => {
      Br.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && ae.setUrlHash(window.location.hash), ae.set(ae.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Ns.isReload() && Ft.restore(be.getScrollRegions()), jn(ae.get());
    });
  }
}, gv = class {
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
}, yv = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    let n = new gv(e, t, r);
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
}, bv = new yv(), rh = (e, t, r) => {
  if (e === t) return !0;
  for (let n in e) if (!r.includes(n) && e[n] !== t[n] && !vv(e[n], t[n])) return !1;
  return !0;
}, vv = (e, t) => {
  switch (typeof e) {
    case "object":
      return rh(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, wv = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Tc = (e) => {
  if (typeof e == "number") return e;
  for (let [t, r] of Object.entries(wv)) if (e.endsWith(t)) return parseFloat(e) * r;
  return parseInt(e);
}, xv = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let n = this.findCached(e);
    if (!e.fresh && n && n.staleTimestamp > Date.now()) return Promise.resolve();
    let [i, a] = this.extractStaleValues(r), s = new Promise((l, p) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), p();
      }, onError: (u) => {
        this.remove(e), e.onError(u), p();
      }, onPrefetching(u) {
        e.onPrefetching(u);
      }, onPrefetched(u, o) {
        e.onPrefetched(u, o);
      }, onPrefetchResponse(u) {
        l(u);
      } });
    }).then((l) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + i, response: s, singleUse: r === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, a), this.inFlightRequests = this.inFlightRequests.filter((p) => !this.paramsAreEqual(p.params, e)), l.handlePrefetch(), l));
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
    return [Tc(t), Tc(r)];
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
    return rh(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, Lr = new xv(), Sv = class nh {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let r = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...r, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new nh(t);
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = ae.get().component);
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
}, Av = { modal: null, listener: null, show(e) {
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
} }, Ev = new th(), Rc = class ih {
  constructor(t, r, n) {
    this.requestParams = t, this.response = r, this.originatingPage = n;
  }
  static create(t, r, n) {
    return new ih(t, r, n);
  }
  async handlePrefetch() {
    Yo(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Ev.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), tv(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await be.processQueue(), be.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = ae.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let r = this.getScopedErrors(t);
      return Kb(r), this.requestParams.all().onError(r);
    }
    ev(ae.get()), await this.requestParams.all().onSuccess(ae.get()), be.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let r = wr(this.getHeader("x-inertia-location"));
      return _c(this.requestParams.all().url, r), this.locationVisit(r);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (Xb(t)) return Av.show(t.data);
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
      if (lt.set(lt.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      Yo(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = be.preserveUrl ? ae.get().url : this.pageUrl(t), ae.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    if (this.originatingPage.component !== ae.get().component) return !1;
    let r = wr(this.originatingPage.url), n = wr(ae.get().url);
    return r.origin === n.origin && r.pathname === n.pathname;
  }
  pageUrl(t) {
    let r = wr(t.url);
    return _c(this.requestParams.all().url, r), r.pathname + r.search + r.hash;
  }
  mergeProps(t) {
    this.requestParams.isPartial() && t.component === ae.get().component && ((t.mergeProps || []).forEach((r) => {
      let n = t.props[r];
      Array.isArray(n) ? t.props[r] = [...ae.get().props[r] || [], ...n] : typeof n == "object" && (t.props[r] = { ...ae.get().props[r] || [], ...n });
    }), t.props = { ...ae.get().props, ...t.props });
  }
  async setRememberedState(t) {
    let r = await be.getState(be.rememberedState, {});
    this.requestParams.all().preserveState && r && t.component === ae.get().component && (t.rememberedState = r);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Fc = class ah {
  constructor(t, r) {
    this.page = r, this.requestHasFinished = !1, this.requestParams = Sv.create(t), this.cancelToken = new AbortController();
  }
  static create(t, r) {
    return new ah(t, r);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), Zb(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), rv(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return Le({ method: this.requestParams.all().method, url: Mi(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((r) => (this.response = Rc.create(this.requestParams, r, this.page), this.response.handle())).catch((r) => r != null && r.response ? (this.response = Rc.create(this.requestParams, r.response, this.page), this.response.handle()) : Promise.reject(r)).catch((r) => {
      if (!Le.isCancel(r) && Jb(r)) return Promise.reject(r);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, Yb(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: r }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, Qb(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return ae.get().version && (t["X-Inertia-Version"] = ae.get().version), t;
  }
}, Ic = class {
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
    var i;
    this.shouldCancel(n) && ((i = this.requests.shift()) == null || i.cancel({ interrupted: r, cancelled: t }));
  }
  shouldCancel(t) {
    return t ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, Cv = class {
  constructor() {
    this.syncRequestStream = new Ic({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Ic({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    ae.init({ initialPage: e, resolveComponent: t, swapComponent: r }), mv.handle(), Br.init(), Br.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Br.on("loadDeferredProps", () => {
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
    be.remember(e, t);
  }
  restore(e = "default") {
    return be.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Br.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, r = {}) {
    return bv.add(e, () => this.reload(t), { autoStart: r.autoStart ?? !0, keepAlive: r.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let r = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), n = this.getVisitEvents(t);
    if (n.onBefore(r) === !1 || !Oc(r)) return;
    let i = r.async ? this.asyncRequestStream : this.syncRequestStream;
    i.interruptInFlight(), !ae.isCleared() && !r.preserveUrl && Ft.save();
    let a = { ...r, ...n }, s = Lr.get(a);
    s ? (Dc(s.inFlight), Lr.use(s, a)) : (Dc(!0), i.send(Fc.create(a, ae.get())));
  }
  getCached(e, t = {}) {
    return Lr.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    Lr.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    Lr.removeAll();
  }
  getPrefetching(e, t = {}) {
    return Lr.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: r = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), i = n.url.origin + n.url.pathname + n.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (i === a) return;
    let s = this.getVisitEvents(t);
    if (s.onBefore(n) === !1 || !Oc(n)) return;
    Nv(), this.asyncRequestStream.interruptInFlight();
    let l = { ...n, ...s };
    new Promise((p) => {
      let u = () => {
        ae.get() ? p() : setTimeout(u, 50);
      };
      u();
    }).then(() => {
      Lr.add(l, (p) => {
        this.asyncRequestStream.send(Fc.create(p, ae.get()));
      }, { cacheFor: r });
    });
  }
  clearHistory() {
    be.clear();
  }
  decryptHistory() {
    return be.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let r = ae.get(), n = typeof e.props == "function" ? e.props(r.props) : e.props ?? r.props;
    ae.set({ ...r, ...e, props: n }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, r = {}) {
    let n = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [i, a] = cv(e, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...n, ...r, url: i, data: a };
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
    let e = (t = ae.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([r, n]) => {
      this.reload({ only: n });
    });
  }
}, Ov = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script ")) return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((i) => {
    n.setAttribute(i, r.getAttribute(i) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Ko(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, s;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let i = t.splice(n, 1)[0];
    i && !r.isEqualNode(i) && ((s = r == null ? void 0 : r.parentNode) == null || s.replaceChild(i, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function Pv(e, t, r) {
  let n = {}, i = 0;
  function a() {
    let o = i += 1;
    return n[o] = [], o.toString();
  }
  function s(o) {
    o === null || Object.keys(n).indexOf(o) === -1 || (delete n[o], u());
  }
  function l(o, f = []) {
    o !== null && Object.keys(n).indexOf(o) > -1 && (n[o] = f), u();
  }
  function p() {
    let o = t(""), f = { ...o ? { title: `<title inertia="">${o}</title>` } : {} }, h = Object.values(n).reduce((d, m) => d.concat(m), []).reduce((d, m) => {
      if (m.indexOf("<") === -1) return d;
      if (m.indexOf("<title ") === 0) {
        let g = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return d.title = g ? `${g[1]}${t(g[2])}${g[3]}` : m, d;
      }
      let y = m.match(/ inertia="[^"]+"/);
      return y ? d[y[0]] = m : d[Object.keys(d).length] = m, d;
    }, f);
    return Object.values(h);
  }
  function u() {
    e ? r(p()) : Ov.update(p());
  }
  return u(), { forceUpdate: u, createProvider: function() {
    let o = a();
    return { update: (f) => l(o, f), disconnect: () => s(o) };
  } };
}
var Be = "nprogress", Ge = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Or = null, _v = (e) => {
  Object.assign(Ge, e), Ge.includeCSS && Dv(Ge.color);
}, ta = (e) => {
  let t = sh();
  e = fh(e, Ge.minimum, 1), Or = e === 1 ? null : e;
  let r = Tv(!t), n = r.querySelector(Ge.barSelector), i = Ge.speed, a = Ge.easing;
  r.offsetWidth, Iv((s) => {
    let l = Ge.positionUsing === "translate3d" ? { transition: `all ${i}ms ${a}`, transform: `translate3d(${_i(e)}%,0,0)` } : Ge.positionUsing === "translate" ? { transition: `all ${i}ms ${a}`, transform: `translate(${_i(e)}%,0)` } : { marginLeft: `${_i(e)}%` };
    for (let p in l) n.style[p] = l[p];
    if (e !== 1) return setTimeout(s, i);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${i}ms linear`, r.style.opacity = "0", setTimeout(() => {
        ch(), s();
      }, i);
    }, i);
  });
}, sh = () => typeof Or == "number", oh = () => {
  Or || ta(0);
  let e = function() {
    setTimeout(function() {
      Or && (lh(), e());
    }, Ge.trickleSpeed);
  };
  Ge.trickle && e();
}, kv = (e) => {
  !e && !Or || (lh(0.3 + 0.5 * Math.random()), ta(1));
}, lh = (e) => {
  let t = Or;
  if (t === null) return oh();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let n in r) if (t >= r[n][0] && t < r[n][1]) return parseFloat(n);
    return 0;
  })(), ta(fh(t + e, 0, 0.994));
}, Tv = (e) => {
  var a;
  if (Rv()) return document.getElementById(Be);
  document.documentElement.classList.add(`${Be}-busy`);
  let t = document.createElement("div");
  t.id = Be, t.innerHTML = Ge.template;
  let r = t.querySelector(Ge.barSelector), n = e ? "-100" : _i(Or || 0), i = uh();
  return r.style.transition = "all 0 linear", r.style.transform = `translate3d(${n}%,0,0)`, Ge.showSpinner || ((a = t.querySelector(Ge.spinnerSelector)) == null || a.remove()), i !== document.body && i.classList.add(`${Be}-custom-parent`), i.appendChild(t), t;
}, uh = () => Fv(Ge.parent) ? Ge.parent : document.querySelector(Ge.parent), ch = () => {
  var e;
  document.documentElement.classList.remove(`${Be}-busy`), uh().classList.remove(`${Be}-custom-parent`), (e = document.getElementById(Be)) == null || e.remove();
}, Rv = () => document.getElementById(Be) !== null, Fv = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function fh(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var _i = (e) => (-1 + e) * 100, Iv = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), Dv = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${Be} {
      pointer-events: none;
    }

    #${Be} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${Be} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${Be} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${Be} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${Be}-spinner 400ms linear infinite;
    }

    .${Be}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${Be}-custom-parent #${Be} .spinner,
    .${Be}-custom-parent #${Be} .bar {
      position: absolute;
    }

    @keyframes ${Be}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, ln = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${Be} { display: none; }`, e;
})(), $v = () => {
  if (ln && document.head.contains(ln)) return document.head.removeChild(ln);
}, Lv = () => {
  ln && !document.head.contains(ln) && document.head.appendChild(ln);
}, dh = { configure: _v, isStarted: sh, done: kv, set: ta, remove: ch, start: oh, status: Or, show: $v, hide: Lv }, ki = 0, Dc = (e = !1) => {
  ki = Math.max(0, ki - 1), (e || ki === 0) && dh.show();
}, Nv = () => {
  ki++, dh.hide();
};
function Ti(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Jt = new Cv();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var Dn = { exports: {} };
Dn.exports;
var $c;
function Mv() {
  return $c || ($c = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, a = "[object Arguments]", s = "[object Array]", l = "[object Boolean]", p = "[object Date]", u = "[object Error]", o = "[object Function]", f = "[object GeneratorFunction]", h = "[object Map]", d = "[object Number]", m = "[object Object]", y = "[object Promise]", g = "[object RegExp]", b = "[object Set]", v = "[object String]", S = "[object Symbol]", O = "[object WeakMap]", E = "[object ArrayBuffer]", C = "[object DataView]", T = "[object Float32Array]", L = "[object Float64Array]", M = "[object Int8Array]", R = "[object Int16Array]", z = "[object Int32Array]", w = "[object Uint8Array]", P = "[object Uint8ClampedArray]", _ = "[object Uint16Array]", A = "[object Uint32Array]", W = /[\\^$.*+?()[\]{}|]/g, j = /\w*$/, $ = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, K = {};
    K[a] = K[s] = K[E] = K[C] = K[l] = K[p] = K[T] = K[L] = K[M] = K[R] = K[z] = K[h] = K[d] = K[m] = K[g] = K[b] = K[v] = K[S] = K[w] = K[P] = K[_] = K[A] = !0, K[u] = K[o] = K[O] = !1;
    var Te = typeof Dt == "object" && Dt && Dt.Object === Object && Dt, qe = typeof self == "object" && self && self.Object === Object && self, G = Te || qe || Function("return this")(), Oe = t && !t.nodeType && t, ee = Oe && !0 && e && !e.nodeType && e, Re = ee && ee.exports === Oe;
    function We(c, x) {
      return c.set(x[0], x[1]), c;
    }
    function Pe(c, x) {
      return c.add(x), c;
    }
    function Se(c, x) {
      for (var k = -1, q = c ? c.length : 0; ++k < q && x(c[k], k, c) !== !1; )
        ;
      return c;
    }
    function oe(c, x) {
      for (var k = -1, q = x.length, ie = c.length; ++k < q; )
        c[ie + k] = x[k];
      return c;
    }
    function he(c, x, k, q) {
      for (var ie = -1, X = c ? c.length : 0; ++ie < X; )
        k = x(k, c[ie], ie, c);
      return k;
    }
    function ue(c, x) {
      for (var k = -1, q = Array(c); ++k < c; )
        q[k] = x(k);
      return q;
    }
    function xe(c, x) {
      return c == null ? void 0 : c[x];
    }
    function Fe(c) {
      var x = !1;
      if (c != null && typeof c.toString != "function")
        try {
          x = !!(c + "");
        } catch {
        }
      return x;
    }
    function Ke(c) {
      var x = -1, k = Array(c.size);
      return c.forEach(function(q, ie) {
        k[++x] = [ie, q];
      }), k;
    }
    function Ie(c, x) {
      return function(k) {
        return c(x(k));
      };
    }
    function ze(c) {
      var x = -1, k = Array(c.size);
      return c.forEach(function(q) {
        k[++x] = q;
      }), k;
    }
    var Ze = Array.prototype, Bt = Function.prototype, st = Object.prototype, Je = G["__core-js_shared__"], Ot = function() {
      var c = /[^.]+$/.exec(Je && Je.keys && Je.keys.IE_PROTO || "");
      return c ? "Symbol(src)_1." + c : "";
    }(), Pt = Bt.toString, Ye = st.hasOwnProperty, hr = st.toString, bn = RegExp(
      "^" + Pt.call(Ye).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), qt = Re ? G.Buffer : void 0, pr = G.Symbol, _t = G.Uint8Array, et = Ie(Object.getPrototypeOf, Object), Pr = Object.create, Wr = st.propertyIsEnumerable, vn = Ze.splice, Xt = Object.getOwnPropertySymbols, kt = qt ? qt.isBuffer : void 0, I = Ie(Object.keys, Object), D = Tt(G, "DataView"), le = Tt(G, "Map"), ce = Tt(G, "Promise"), ge = Tt(G, "Set"), ne = Tt(G, "WeakMap"), tt = Tt(Object, "create"), pt = ot(D), Ne = ot(le), ut = ot(ce), Qt = ot(ge), St = ot(ne), je = pr ? pr.prototype : void 0, _r = je ? je.valueOf : void 0;
    function At(c) {
      var x = -1, k = c ? c.length : 0;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Gr() {
      this.__data__ = tt ? tt(null) : {};
    }
    function Zt(c) {
      return this.has(c) && delete this.__data__[c];
    }
    function kr(c) {
      var x = this.__data__;
      if (tt) {
        var k = x[c];
        return k === n ? void 0 : k;
      }
      return Ye.call(x, c) ? x[c] : void 0;
    }
    function er(c) {
      var x = this.__data__;
      return tt ? x[c] !== void 0 : Ye.call(x, c);
    }
    function tr(c, x) {
      var k = this.__data__;
      return k[c] = tt && x === void 0 ? n : x, this;
    }
    At.prototype.clear = Gr, At.prototype.delete = Zt, At.prototype.get = kr, At.prototype.has = er, At.prototype.set = tr;
    function Me(c) {
      var x = -1, k = c ? c.length : 0;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Kr() {
      this.__data__ = [];
    }
    function Jr(c) {
      var x = this.__data__, k = Qr(x, c);
      if (k < 0)
        return !1;
      var q = x.length - 1;
      return k == q ? x.pop() : vn.call(x, k, 1), !0;
    }
    function Tr(c) {
      var x = this.__data__, k = Qr(x, c);
      return k < 0 ? void 0 : x[k][1];
    }
    function Yr(c) {
      return Qr(this.__data__, c) > -1;
    }
    function Rr(c, x) {
      var k = this.__data__, q = Qr(k, c);
      return q < 0 ? k.push([c, x]) : k[q][1] = x, this;
    }
    Me.prototype.clear = Kr, Me.prototype.delete = Jr, Me.prototype.get = Tr, Me.prototype.has = Yr, Me.prototype.set = Rr;
    function Ve(c) {
      var x = -1, k = c ? c.length : 0;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function wn() {
      this.__data__ = {
        hash: new At(),
        map: new (le || Me)(),
        string: new At()
      };
    }
    function Fr(c) {
      return Dr(this, c).delete(c);
    }
    function jt(c) {
      return Dr(this, c).get(c);
    }
    function mr(c) {
      return Dr(this, c).has(c);
    }
    function xn(c, x) {
      return Dr(this, c).set(c, x), this;
    }
    Ve.prototype.clear = wn, Ve.prototype.delete = Fr, Ve.prototype.get = jt, Ve.prototype.has = mr, Ve.prototype.set = xn;
    function Xe(c) {
      this.__data__ = new Me(c);
    }
    function da() {
      this.__data__ = new Me();
    }
    function ha(c) {
      return this.__data__.delete(c);
    }
    function pa(c) {
      return this.__data__.get(c);
    }
    function ma(c) {
      return this.__data__.has(c);
    }
    function ga(c, x) {
      var k = this.__data__;
      if (k instanceof Me) {
        var q = k.__data__;
        if (!le || q.length < r - 1)
          return q.push([c, x]), this;
        k = this.__data__ = new Ve(q);
      }
      return k.set(c, x), this;
    }
    Xe.prototype.clear = da, Xe.prototype.delete = ha, Xe.prototype.get = pa, Xe.prototype.has = ma, Xe.prototype.set = ga;
    function Xr(c, x) {
      var k = Cn(c) || en(c) ? ue(c.length, String) : [], q = k.length, ie = !!q;
      for (var X in c)
        Ye.call(c, X) && !(ie && (X == "length" || Ta(X, q))) && k.push(X);
      return k;
    }
    function ii(c, x, k) {
      var q = c[x];
      (!(Ye.call(c, x) && ui(q, k)) || k === void 0 && !(x in c)) && (c[x] = k);
    }
    function Qr(c, x) {
      for (var k = c.length; k--; )
        if (ui(c[k][0], x))
          return k;
      return -1;
    }
    function Ut(c, x) {
      return c && En(x, Pn(x), c);
    }
    function Sn(c, x, k, q, ie, X, ye) {
      var me;
      if (q && (me = X ? q(c, ie, X, ye) : q(c)), me !== void 0)
        return me;
      if (!Vt(c))
        return c;
      var Ue = Cn(c);
      if (Ue) {
        if (me = _a(c), !x)
          return Ca(c, me);
      } else {
        var ve = nr(c), rt = ve == o || ve == f;
        if (ci(c))
          return Zr(c, x);
        if (ve == m || ve == a || rt && !X) {
          if (Fe(c))
            return X ? c : {};
          if (me = zt(rt ? {} : c), !x)
            return Oa(c, Ut(me, c));
        } else {
          if (!K[ve])
            return X ? c : {};
          me = ka(c, ve, Sn, x);
        }
      }
      ye || (ye = new Xe());
      var ct = ye.get(c);
      if (ct)
        return ct;
      if (ye.set(c, me), !Ue)
        var He = k ? Pa(c) : Pn(c);
      return Se(He || c, function(nt, Qe) {
        He && (Qe = nt, nt = c[Qe]), ii(me, Qe, Sn(nt, x, k, q, Qe, c, ye));
      }), me;
    }
    function ya(c) {
      return Vt(c) ? Pr(c) : {};
    }
    function ba(c, x, k) {
      var q = x(c);
      return Cn(c) ? q : oe(q, k(c));
    }
    function va(c) {
      return hr.call(c);
    }
    function wa(c) {
      if (!Vt(c) || Fa(c))
        return !1;
      var x = On(c) || Fe(c) ? bn : $;
      return x.test(ot(c));
    }
    function xa(c) {
      if (!oi(c))
        return I(c);
      var x = [];
      for (var k in Object(c))
        Ye.call(c, k) && k != "constructor" && x.push(k);
      return x;
    }
    function Zr(c, x) {
      if (x)
        return c.slice();
      var k = new c.constructor(c.length);
      return c.copy(k), k;
    }
    function An(c) {
      var x = new c.constructor(c.byteLength);
      return new _t(x).set(new _t(c)), x;
    }
    function Ir(c, x) {
      var k = x ? An(c.buffer) : c.buffer;
      return new c.constructor(k, c.byteOffset, c.byteLength);
    }
    function ai(c, x, k) {
      var q = x ? k(Ke(c), !0) : Ke(c);
      return he(q, We, new c.constructor());
    }
    function si(c) {
      var x = new c.constructor(c.source, j.exec(c));
      return x.lastIndex = c.lastIndex, x;
    }
    function Sa(c, x, k) {
      var q = x ? k(ze(c), !0) : ze(c);
      return he(q, Pe, new c.constructor());
    }
    function Aa(c) {
      return _r ? Object(_r.call(c)) : {};
    }
    function Ea(c, x) {
      var k = x ? An(c.buffer) : c.buffer;
      return new c.constructor(k, c.byteOffset, c.length);
    }
    function Ca(c, x) {
      var k = -1, q = c.length;
      for (x || (x = Array(q)); ++k < q; )
        x[k] = c[k];
      return x;
    }
    function En(c, x, k, q) {
      k || (k = {});
      for (var ie = -1, X = x.length; ++ie < X; ) {
        var ye = x[ie], me = void 0;
        ii(k, ye, me === void 0 ? c[ye] : me);
      }
      return k;
    }
    function Oa(c, x) {
      return En(c, rr(c), x);
    }
    function Pa(c) {
      return ba(c, Pn, rr);
    }
    function Dr(c, x) {
      var k = c.__data__;
      return Ra(x) ? k[typeof x == "string" ? "string" : "hash"] : k.map;
    }
    function Tt(c, x) {
      var k = xe(c, x);
      return wa(k) ? k : void 0;
    }
    var rr = Xt ? Ie(Xt, Object) : Da, nr = va;
    (D && nr(new D(new ArrayBuffer(1))) != C || le && nr(new le()) != h || ce && nr(ce.resolve()) != y || ge && nr(new ge()) != b || ne && nr(new ne()) != O) && (nr = function(c) {
      var x = hr.call(c), k = x == m ? c.constructor : void 0, q = k ? ot(k) : void 0;
      if (q)
        switch (q) {
          case pt:
            return C;
          case Ne:
            return h;
          case ut:
            return y;
          case Qt:
            return b;
          case St:
            return O;
        }
      return x;
    });
    function _a(c) {
      var x = c.length, k = c.constructor(x);
      return x && typeof c[0] == "string" && Ye.call(c, "index") && (k.index = c.index, k.input = c.input), k;
    }
    function zt(c) {
      return typeof c.constructor == "function" && !oi(c) ? ya(et(c)) : {};
    }
    function ka(c, x, k, q) {
      var ie = c.constructor;
      switch (x) {
        case E:
          return An(c);
        case l:
        case p:
          return new ie(+c);
        case C:
          return Ir(c, q);
        case T:
        case L:
        case M:
        case R:
        case z:
        case w:
        case P:
        case _:
        case A:
          return Ea(c, q);
        case h:
          return ai(c, q, k);
        case d:
        case v:
          return new ie(c);
        case g:
          return si(c);
        case b:
          return Sa(c, q, k);
        case S:
          return Aa(c);
      }
    }
    function Ta(c, x) {
      return x = x ?? i, !!x && (typeof c == "number" || H.test(c)) && c > -1 && c % 1 == 0 && c < x;
    }
    function Ra(c) {
      var x = typeof c;
      return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? c !== "__proto__" : c === null;
    }
    function Fa(c) {
      return !!Ot && Ot in c;
    }
    function oi(c) {
      var x = c && c.constructor, k = typeof x == "function" && x.prototype || st;
      return c === k;
    }
    function ot(c) {
      if (c != null) {
        try {
          return Pt.call(c);
        } catch {
        }
        try {
          return c + "";
        } catch {
        }
      }
      return "";
    }
    function li(c) {
      return Sn(c, !0, !0);
    }
    function ui(c, x) {
      return c === x || c !== c && x !== x;
    }
    function en(c) {
      return Ia(c) && Ye.call(c, "callee") && (!Wr.call(c, "callee") || hr.call(c) == a);
    }
    var Cn = Array.isArray;
    function tn(c) {
      return c != null && fi(c.length) && !On(c);
    }
    function Ia(c) {
      return di(c) && tn(c);
    }
    var ci = kt || $a;
    function On(c) {
      var x = Vt(c) ? hr.call(c) : "";
      return x == o || x == f;
    }
    function fi(c) {
      return typeof c == "number" && c > -1 && c % 1 == 0 && c <= i;
    }
    function Vt(c) {
      var x = typeof c;
      return !!c && (x == "object" || x == "function");
    }
    function di(c) {
      return !!c && typeof c == "object";
    }
    function Pn(c) {
      return tn(c) ? Xr(c) : xa(c);
    }
    function Da() {
      return [];
    }
    function $a() {
      return !1;
    }
    e.exports = li;
  }(Dn, Dn.exports)), Dn.exports;
}
var Bv = Mv();
const sr = /* @__PURE__ */ Xn(Bv);
var $n = { exports: {} };
$n.exports;
var Lc;
function qv() {
  return Lc || (Lc = 1, function(e, t) {
    var r = 200, n = "__lodash_hash_undefined__", i = 1, a = 2, s = 9007199254740991, l = "[object Arguments]", p = "[object Array]", u = "[object AsyncFunction]", o = "[object Boolean]", f = "[object Date]", h = "[object Error]", d = "[object Function]", m = "[object GeneratorFunction]", y = "[object Map]", g = "[object Number]", b = "[object Null]", v = "[object Object]", S = "[object Promise]", O = "[object Proxy]", E = "[object RegExp]", C = "[object Set]", T = "[object String]", L = "[object Symbol]", M = "[object Undefined]", R = "[object WeakMap]", z = "[object ArrayBuffer]", w = "[object DataView]", P = "[object Float32Array]", _ = "[object Float64Array]", A = "[object Int8Array]", W = "[object Int16Array]", j = "[object Int32Array]", $ = "[object Uint8Array]", H = "[object Uint8ClampedArray]", K = "[object Uint16Array]", Te = "[object Uint32Array]", qe = /[\\^$.*+?()[\]{}|]/g, G = /^\[object .+?Constructor\]$/, Oe = /^(?:0|[1-9]\d*)$/, ee = {};
    ee[P] = ee[_] = ee[A] = ee[W] = ee[j] = ee[$] = ee[H] = ee[K] = ee[Te] = !0, ee[l] = ee[p] = ee[z] = ee[o] = ee[w] = ee[f] = ee[h] = ee[d] = ee[y] = ee[g] = ee[v] = ee[E] = ee[C] = ee[T] = ee[R] = !1;
    var Re = typeof Dt == "object" && Dt && Dt.Object === Object && Dt, We = typeof self == "object" && self && self.Object === Object && self, Pe = Re || We || Function("return this")(), Se = t && !t.nodeType && t, oe = Se && !0 && e && !e.nodeType && e, he = oe && oe.exports === Se, ue = he && Re.process, xe = function() {
      try {
        return ue && ue.binding && ue.binding("util");
      } catch {
      }
    }(), Fe = xe && xe.isTypedArray;
    function Ke(c, x) {
      for (var k = -1, q = c == null ? 0 : c.length, ie = 0, X = []; ++k < q; ) {
        var ye = c[k];
        x(ye, k, c) && (X[ie++] = ye);
      }
      return X;
    }
    function Ie(c, x) {
      for (var k = -1, q = x.length, ie = c.length; ++k < q; )
        c[ie + k] = x[k];
      return c;
    }
    function ze(c, x) {
      for (var k = -1, q = c == null ? 0 : c.length; ++k < q; )
        if (x(c[k], k, c))
          return !0;
      return !1;
    }
    function Ze(c, x) {
      for (var k = -1, q = Array(c); ++k < c; )
        q[k] = x(k);
      return q;
    }
    function Bt(c) {
      return function(x) {
        return c(x);
      };
    }
    function st(c, x) {
      return c.has(x);
    }
    function Je(c, x) {
      return c == null ? void 0 : c[x];
    }
    function Ot(c) {
      var x = -1, k = Array(c.size);
      return c.forEach(function(q, ie) {
        k[++x] = [ie, q];
      }), k;
    }
    function Pt(c, x) {
      return function(k) {
        return c(x(k));
      };
    }
    function Ye(c) {
      var x = -1, k = Array(c.size);
      return c.forEach(function(q) {
        k[++x] = q;
      }), k;
    }
    var hr = Array.prototype, bn = Function.prototype, qt = Object.prototype, pr = Pe["__core-js_shared__"], _t = bn.toString, et = qt.hasOwnProperty, Pr = function() {
      var c = /[^.]+$/.exec(pr && pr.keys && pr.keys.IE_PROTO || "");
      return c ? "Symbol(src)_1." + c : "";
    }(), Wr = qt.toString, vn = RegExp(
      "^" + _t.call(et).replace(qe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Xt = he ? Pe.Buffer : void 0, kt = Pe.Symbol, I = Pe.Uint8Array, D = qt.propertyIsEnumerable, le = hr.splice, ce = kt ? kt.toStringTag : void 0, ge = Object.getOwnPropertySymbols, ne = Xt ? Xt.isBuffer : void 0, tt = Pt(Object.keys, Object), pt = rr(Pe, "DataView"), Ne = rr(Pe, "Map"), ut = rr(Pe, "Promise"), Qt = rr(Pe, "Set"), St = rr(Pe, "WeakMap"), je = rr(Object, "create"), _r = ot(pt), At = ot(Ne), Gr = ot(ut), Zt = ot(Qt), kr = ot(St), er = kt ? kt.prototype : void 0, tr = er ? er.valueOf : void 0;
    function Me(c) {
      var x = -1, k = c == null ? 0 : c.length;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function Kr() {
      this.__data__ = je ? je(null) : {}, this.size = 0;
    }
    function Jr(c) {
      var x = this.has(c) && delete this.__data__[c];
      return this.size -= x ? 1 : 0, x;
    }
    function Tr(c) {
      var x = this.__data__;
      if (je) {
        var k = x[c];
        return k === n ? void 0 : k;
      }
      return et.call(x, c) ? x[c] : void 0;
    }
    function Yr(c) {
      var x = this.__data__;
      return je ? x[c] !== void 0 : et.call(x, c);
    }
    function Rr(c, x) {
      var k = this.__data__;
      return this.size += this.has(c) ? 0 : 1, k[c] = je && x === void 0 ? n : x, this;
    }
    Me.prototype.clear = Kr, Me.prototype.delete = Jr, Me.prototype.get = Tr, Me.prototype.has = Yr, Me.prototype.set = Rr;
    function Ve(c) {
      var x = -1, k = c == null ? 0 : c.length;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function wn() {
      this.__data__ = [], this.size = 0;
    }
    function Fr(c) {
      var x = this.__data__, k = Zr(x, c);
      if (k < 0)
        return !1;
      var q = x.length - 1;
      return k == q ? x.pop() : le.call(x, k, 1), --this.size, !0;
    }
    function jt(c) {
      var x = this.__data__, k = Zr(x, c);
      return k < 0 ? void 0 : x[k][1];
    }
    function mr(c) {
      return Zr(this.__data__, c) > -1;
    }
    function xn(c, x) {
      var k = this.__data__, q = Zr(k, c);
      return q < 0 ? (++this.size, k.push([c, x])) : k[q][1] = x, this;
    }
    Ve.prototype.clear = wn, Ve.prototype.delete = Fr, Ve.prototype.get = jt, Ve.prototype.has = mr, Ve.prototype.set = xn;
    function Xe(c) {
      var x = -1, k = c == null ? 0 : c.length;
      for (this.clear(); ++x < k; ) {
        var q = c[x];
        this.set(q[0], q[1]);
      }
    }
    function da() {
      this.size = 0, this.__data__ = {
        hash: new Me(),
        map: new (Ne || Ve)(),
        string: new Me()
      };
    }
    function ha(c) {
      var x = Tt(this, c).delete(c);
      return this.size -= x ? 1 : 0, x;
    }
    function pa(c) {
      return Tt(this, c).get(c);
    }
    function ma(c) {
      return Tt(this, c).has(c);
    }
    function ga(c, x) {
      var k = Tt(this, c), q = k.size;
      return k.set(c, x), this.size += k.size == q ? 0 : 1, this;
    }
    Xe.prototype.clear = da, Xe.prototype.delete = ha, Xe.prototype.get = pa, Xe.prototype.has = ma, Xe.prototype.set = ga;
    function Xr(c) {
      var x = -1, k = c == null ? 0 : c.length;
      for (this.__data__ = new Xe(); ++x < k; )
        this.add(c[x]);
    }
    function ii(c) {
      return this.__data__.set(c, n), this;
    }
    function Qr(c) {
      return this.__data__.has(c);
    }
    Xr.prototype.add = Xr.prototype.push = ii, Xr.prototype.has = Qr;
    function Ut(c) {
      var x = this.__data__ = new Ve(c);
      this.size = x.size;
    }
    function Sn() {
      this.__data__ = new Ve(), this.size = 0;
    }
    function ya(c) {
      var x = this.__data__, k = x.delete(c);
      return this.size = x.size, k;
    }
    function ba(c) {
      return this.__data__.get(c);
    }
    function va(c) {
      return this.__data__.has(c);
    }
    function wa(c, x) {
      var k = this.__data__;
      if (k instanceof Ve) {
        var q = k.__data__;
        if (!Ne || q.length < r - 1)
          return q.push([c, x]), this.size = ++k.size, this;
        k = this.__data__ = new Xe(q);
      }
      return k.set(c, x), this.size = k.size, this;
    }
    Ut.prototype.clear = Sn, Ut.prototype.delete = ya, Ut.prototype.get = ba, Ut.prototype.has = va, Ut.prototype.set = wa;
    function xa(c, x) {
      var k = en(c), q = !k && ui(c), ie = !k && !q && tn(c), X = !k && !q && !ie && di(c), ye = k || q || ie || X, me = ye ? Ze(c.length, String) : [], Ue = me.length;
      for (var ve in c)
        et.call(c, ve) && !(ye && // Safari 9 has enumerable `arguments.length` in strict mode.
        (ve == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        ie && (ve == "offset" || ve == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        X && (ve == "buffer" || ve == "byteLength" || ve == "byteOffset") || // Skip index properties.
        ka(ve, Ue))) && me.push(ve);
      return me;
    }
    function Zr(c, x) {
      for (var k = c.length; k--; )
        if (li(c[k][0], x))
          return k;
      return -1;
    }
    function An(c, x, k) {
      var q = x(c);
      return en(c) ? q : Ie(q, k(c));
    }
    function Ir(c) {
      return c == null ? c === void 0 ? M : b : ce && ce in Object(c) ? nr(c) : oi(c);
    }
    function ai(c) {
      return Vt(c) && Ir(c) == l;
    }
    function si(c, x, k, q, ie) {
      return c === x ? !0 : c == null || x == null || !Vt(c) && !Vt(x) ? c !== c && x !== x : Sa(c, x, k, q, si, ie);
    }
    function Sa(c, x, k, q, ie, X) {
      var ye = en(c), me = en(x), Ue = ye ? p : zt(c), ve = me ? p : zt(x);
      Ue = Ue == l ? v : Ue, ve = ve == l ? v : ve;
      var rt = Ue == v, ct = ve == v, He = Ue == ve;
      if (He && tn(c)) {
        if (!tn(x))
          return !1;
        ye = !0, rt = !1;
      }
      if (He && !rt)
        return X || (X = new Ut()), ye || di(c) ? En(c, x, k, q, ie, X) : Oa(c, x, Ue, k, q, ie, X);
      if (!(k & i)) {
        var nt = rt && et.call(c, "__wrapped__"), Qe = ct && et.call(x, "__wrapped__");
        if (nt || Qe) {
          var gr = nt ? c.value() : c, ir = Qe ? x.value() : x;
          return X || (X = new Ut()), ie(gr, ir, k, q, X);
        }
      }
      return He ? (X || (X = new Ut()), Pa(c, x, k, q, ie, X)) : !1;
    }
    function Aa(c) {
      if (!fi(c) || Ra(c))
        return !1;
      var x = ci(c) ? vn : G;
      return x.test(ot(c));
    }
    function Ea(c) {
      return Vt(c) && On(c.length) && !!ee[Ir(c)];
    }
    function Ca(c) {
      if (!Fa(c))
        return tt(c);
      var x = [];
      for (var k in Object(c))
        et.call(c, k) && k != "constructor" && x.push(k);
      return x;
    }
    function En(c, x, k, q, ie, X) {
      var ye = k & i, me = c.length, Ue = x.length;
      if (me != Ue && !(ye && Ue > me))
        return !1;
      var ve = X.get(c);
      if (ve && X.get(x))
        return ve == x;
      var rt = -1, ct = !0, He = k & a ? new Xr() : void 0;
      for (X.set(c, x), X.set(x, c); ++rt < me; ) {
        var nt = c[rt], Qe = x[rt];
        if (q)
          var gr = ye ? q(Qe, nt, rt, x, c, X) : q(nt, Qe, rt, c, x, X);
        if (gr !== void 0) {
          if (gr)
            continue;
          ct = !1;
          break;
        }
        if (He) {
          if (!ze(x, function(ir, $r) {
            if (!st(He, $r) && (nt === ir || ie(nt, ir, k, q, X)))
              return He.push($r);
          })) {
            ct = !1;
            break;
          }
        } else if (!(nt === Qe || ie(nt, Qe, k, q, X))) {
          ct = !1;
          break;
        }
      }
      return X.delete(c), X.delete(x), ct;
    }
    function Oa(c, x, k, q, ie, X, ye) {
      switch (k) {
        case w:
          if (c.byteLength != x.byteLength || c.byteOffset != x.byteOffset)
            return !1;
          c = c.buffer, x = x.buffer;
        case z:
          return !(c.byteLength != x.byteLength || !X(new I(c), new I(x)));
        case o:
        case f:
        case g:
          return li(+c, +x);
        case h:
          return c.name == x.name && c.message == x.message;
        case E:
        case T:
          return c == x + "";
        case y:
          var me = Ot;
        case C:
          var Ue = q & i;
          if (me || (me = Ye), c.size != x.size && !Ue)
            return !1;
          var ve = ye.get(c);
          if (ve)
            return ve == x;
          q |= a, ye.set(c, x);
          var rt = En(me(c), me(x), q, ie, X, ye);
          return ye.delete(c), rt;
        case L:
          if (tr)
            return tr.call(c) == tr.call(x);
      }
      return !1;
    }
    function Pa(c, x, k, q, ie, X) {
      var ye = k & i, me = Dr(c), Ue = me.length, ve = Dr(x), rt = ve.length;
      if (Ue != rt && !ye)
        return !1;
      for (var ct = Ue; ct--; ) {
        var He = me[ct];
        if (!(ye ? He in x : et.call(x, He)))
          return !1;
      }
      var nt = X.get(c);
      if (nt && X.get(x))
        return nt == x;
      var Qe = !0;
      X.set(c, x), X.set(x, c);
      for (var gr = ye; ++ct < Ue; ) {
        He = me[ct];
        var ir = c[He], $r = x[He];
        if (q)
          var Il = ye ? q($r, ir, He, x, c, X) : q(ir, $r, He, c, x, X);
        if (!(Il === void 0 ? ir === $r || ie(ir, $r, k, q, X) : Il)) {
          Qe = !1;
          break;
        }
        gr || (gr = He == "constructor");
      }
      if (Qe && !gr) {
        var hi = c.constructor, pi = x.constructor;
        hi != pi && "constructor" in c && "constructor" in x && !(typeof hi == "function" && hi instanceof hi && typeof pi == "function" && pi instanceof pi) && (Qe = !1);
      }
      return X.delete(c), X.delete(x), Qe;
    }
    function Dr(c) {
      return An(c, Pn, _a);
    }
    function Tt(c, x) {
      var k = c.__data__;
      return Ta(x) ? k[typeof x == "string" ? "string" : "hash"] : k.map;
    }
    function rr(c, x) {
      var k = Je(c, x);
      return Aa(k) ? k : void 0;
    }
    function nr(c) {
      var x = et.call(c, ce), k = c[ce];
      try {
        c[ce] = void 0;
        var q = !0;
      } catch {
      }
      var ie = Wr.call(c);
      return q && (x ? c[ce] = k : delete c[ce]), ie;
    }
    var _a = ge ? function(c) {
      return c == null ? [] : (c = Object(c), Ke(ge(c), function(x) {
        return D.call(c, x);
      }));
    } : Da, zt = Ir;
    (pt && zt(new pt(new ArrayBuffer(1))) != w || Ne && zt(new Ne()) != y || ut && zt(ut.resolve()) != S || Qt && zt(new Qt()) != C || St && zt(new St()) != R) && (zt = function(c) {
      var x = Ir(c), k = x == v ? c.constructor : void 0, q = k ? ot(k) : "";
      if (q)
        switch (q) {
          case _r:
            return w;
          case At:
            return y;
          case Gr:
            return S;
          case Zt:
            return C;
          case kr:
            return R;
        }
      return x;
    });
    function ka(c, x) {
      return x = x ?? s, !!x && (typeof c == "number" || Oe.test(c)) && c > -1 && c % 1 == 0 && c < x;
    }
    function Ta(c) {
      var x = typeof c;
      return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? c !== "__proto__" : c === null;
    }
    function Ra(c) {
      return !!Pr && Pr in c;
    }
    function Fa(c) {
      var x = c && c.constructor, k = typeof x == "function" && x.prototype || qt;
      return c === k;
    }
    function oi(c) {
      return Wr.call(c);
    }
    function ot(c) {
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
    function li(c, x) {
      return c === x || c !== c && x !== x;
    }
    var ui = ai(/* @__PURE__ */ function() {
      return arguments;
    }()) ? ai : function(c) {
      return Vt(c) && et.call(c, "callee") && !D.call(c, "callee");
    }, en = Array.isArray;
    function Cn(c) {
      return c != null && On(c.length) && !ci(c);
    }
    var tn = ne || $a;
    function Ia(c, x) {
      return si(c, x);
    }
    function ci(c) {
      if (!fi(c))
        return !1;
      var x = Ir(c);
      return x == d || x == m || x == u || x == O;
    }
    function On(c) {
      return typeof c == "number" && c > -1 && c % 1 == 0 && c <= s;
    }
    function fi(c) {
      var x = typeof c;
      return c != null && (x == "object" || x == "function");
    }
    function Vt(c) {
      return c != null && typeof c == "object";
    }
    var di = Fe ? Bt(Fe) : Ea;
    function Pn(c) {
      return Cn(c) ? xa(c) : Ca(c);
    }
    function Da() {
      return [];
    }
    function $a() {
      return !1;
    }
    e.exports = Ia;
  }($n, $n.exports)), $n.exports;
}
var jv = qv();
const Uv = /* @__PURE__ */ Xn(jv);
function zv(e, t) {
  let r = typeof e == "string" ? e : null, n = (typeof e == "string" ? t : e) ?? {}, i = r ? Jt.restore(r) : null, a = sr(typeof n == "function" ? n() : n), s = null, l = null, p = (o) => o, u = il({ ...i ? i.data : sr(a), isDirty: !1, errors: i ? i.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((o, f) => (o[f] = this[f], o), {});
  }, transform(o) {
    return p = o, this;
  }, defaults(o, f) {
    if (typeof n == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof o > "u" ? (a = this.data(), this.isDirty = !1) : a = Object.assign({}, sr(a), typeof o == "string" ? { [o]: f } : o), this;
  }, reset(...o) {
    let f = sr(typeof n == "function" ? n() : a), h = sr(f);
    return o.length === 0 ? (a = h, Object.assign(this, f)) : Object.keys(f).filter((d) => o.includes(d)).forEach((d) => {
      a[d] = h[d], this[d] = f[d];
    }), this;
  }, setError(o, f) {
    return Object.assign(this.errors, typeof o == "string" ? { [o]: f } : o), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...o) {
    return this.errors = Object.keys(this.errors).reduce((f, h) => ({ ...f, ...o.length > 0 && !o.includes(h) ? { [h]: this.errors[h] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(o, f, h = {}) {
    let d = p(this.data()), m = { ...h, onCancelToken: (y) => {
      if (s = y, h.onCancelToken) return h.onCancelToken(y);
    }, onBefore: (y) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(l), h.onBefore) return h.onBefore(y);
    }, onStart: (y) => {
      if (this.processing = !0, h.onStart) return h.onStart(y);
    }, onProgress: (y) => {
      if (this.progress = y, h.onProgress) return h.onProgress(y);
    }, onSuccess: async (y) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, l = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let g = h.onSuccess ? await h.onSuccess(y) : null;
      return a = sr(this.data()), this.isDirty = !1, g;
    }, onError: (y) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(y), h.onError) return h.onError(y);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, h.onCancel) return h.onCancel();
    }, onFinish: (y) => {
      if (this.processing = !1, this.progress = null, s = null, h.onFinish) return h.onFinish(y);
    } };
    o === "delete" ? Jt.delete(f, { ...m, data: d }) : Jt[o](f, d, m);
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
  return xr(u, (o) => {
    u.isDirty = !Uv(u.data(), a), r && Jt.remember(sr(o.__remember()), r);
  }, { immediate: !0, deep: !0 }), u;
}
var mt = de(null), yt = de(null), Ms = Kh(null), yi = de(null), Nc = null;
fr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: i }) {
  mt.value = t ? $l(t) : null, yt.value = e, yi.value = null;
  let a = typeof window > "u";
  return Nc = Pv(a, n, i), a || (Jt.init({ initialPage: e, resolveComponent: r, swapComponent: async (s) => {
    mt.value = $l(s.component), yt.value = s.page, yi.value = s.preserveState ? yi.value : Date.now();
  } }), Jt.on("navigate", () => Nc.forceUpdate())), () => {
    if (mt.value) {
      mt.value.inheritAttrs = !!mt.value.inheritAttrs;
      let s = lr(mt.value, { ...yt.value.props, key: yi.value });
      return Ms.value && (mt.value.layout = Ms.value, Ms.value = null), mt.value.layout ? typeof mt.value.layout == "function" ? mt.value.layout(lr, s) : (Array.isArray(mt.value.layout) ? mt.value.layout : [mt.value.layout]).concat(s).reverse().reduce((l, p) => (p.inheritAttrs = !!p.inheritAttrs, lr(p, { ...yt.value.props }, () => l))) : s;
    }
  };
} });
function Vv() {
  return il({ props: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.props;
  }), url: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.url;
  }), component: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.component;
  }), version: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.version;
  }), clearHistory: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.mergeProps;
  }), rememberedState: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: fe(() => {
    var e;
    return (e = yt.value) == null ? void 0 : e.encryptHistory;
  }) });
}
fr({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
fr({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(e) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(e.type) > -1;
}, renderTagStart(e) {
  e.props = e.props || {}, e.props.inertia = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
  let t = Object.keys(e.props).reduce((r, n) => {
    let i = e.props[n];
    return ["key", "head-key"].includes(n) ? r : i === "" ? r + ` ${n}` : r + ` ${n}="${i}"`;
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
fr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: r }) {
  let n = de(0), i = de(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  Ct(() => {
    a.includes("mount") && y();
  }), dn(() => {
    clearTimeout(i.value);
  });
  let l = e.method.toLowerCase(), p = l !== "get" ? "button" : e.as.toLowerCase(), u = fe(() => Cl(l, e.href || "", e.data, e.queryStringArrayFormat)), o = fe(() => u.value[0]), f = fe(() => u.value[1]), h = fe(() => ({ a: { href: o.value }, button: { type: "button" } })), d = { data: f.value, method: l, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? l !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, m = { ...d, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (S) => {
    n.value++, e.onStart(S);
  }, onProgress: e.onProgress, onFinish: (S) => {
    n.value--, e.onFinish(S);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, y = () => {
    Jt.prefetch(o.value, d, { cacheFor: s });
  }, g = { onClick: (S) => {
    Ti(S) && (S.preventDefault(), Jt.visit(o.value, m));
  } }, b = { onMouseenter: () => {
    i.value = setTimeout(() => {
      y();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(i.value);
  }, onClick: g.onClick }, v = { onMousedown: (S) => {
    Ti(S) && (S.preventDefault(), y());
  }, onMouseup: (S) => {
    S.preventDefault(), Jt.visit(o.value, m);
  }, onClick: (S) => {
    Ti(S) && S.preventDefault();
  } };
  return () => lr(p, { ...r, ...h.value[p] || {}, "data-loading": n.value > 0 ? "" : void 0, ...a.includes("hover") ? b : a.includes("click") ? v : g }, t);
} });
fr({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    Jt.reload({ ...t, onStart: (r) => {
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
  return (this.$props.always || !this.loaded) && e.push(lr(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function d2(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function Hv(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function h2(e) {
  return Vv().props.auth.permissions.includes(e);
}
let Xo = null;
function p2(e) {
  Xo = e;
}
function ei() {
  return Xo === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@shbc/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Xo;
}
const $t = fr({
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
      const n = ei(), i = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, l] = Cl(
        a,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return i === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${s}" method="${a}" as="button">...</Link>`
      ), lr(
        e.as,
        {
          ...r,
          ...i === "a" ? { href: s } : {},
          onClick: (p) => {
            Ti(p) && (p.preventDefault(), n.visit(s, {
              data: l,
              method: a,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? a !== "get",
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
function ti(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(o) {
      try {
        u(n.next(o));
      } catch (f) {
        s(f);
      }
    }
    function p(o) {
      try {
        u(n.throw(o));
      } catch (f) {
        s(f);
      }
    }
    function u(o) {
      o.done ? a(o.value) : i(o.value).then(l, p);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function ri(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = l(0), s.throw = l(1), s.return = l(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(u) {
    return function(o) {
      return p([u, o]);
    };
  }
  function p(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = u;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(u);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (o) {
      u = [6, o], i = 0;
    } finally {
      n = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Wv(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), i, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function Gv() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Wv(arguments[t]));
  return e;
}
var Kv = /* @__PURE__ */ new Map([
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
function ra(e, t) {
  var r = Jv(e);
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
function Jv(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), i = Kv.get(n);
    i && Object.defineProperty(e, "type", {
      value: i,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var Yv = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Xv(e) {
  return ti(this, void 0, void 0, function() {
    return ri(this, function(t) {
      return [2, Qv(e) && e.dataTransfer ? t1(e.dataTransfer, e.type) : Zv(e)];
    });
  });
}
function Qv(e) {
  return !!e.dataTransfer;
}
function Zv(e) {
  var t = e1(e.target) ? e.target.files ? Qo(e.target.files) : [] : [];
  return t.map(function(r) {
    return ra(r);
  });
}
function e1(e) {
  return e !== null;
}
function t1(e, t) {
  return ti(this, void 0, void 0, function() {
    var r, n;
    return ri(this, function(i) {
      switch (i.label) {
        case 0:
          return e.items ? (r = Qo(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(r1))]) : [3, 2];
        case 1:
          return n = i.sent(), [2, Mc(hh(n))];
        case 2:
          return [2, Mc(Qo(e.files).map(function(a) {
            return ra(a);
          }))];
      }
    });
  });
}
function Mc(e) {
  return e.filter(function(t) {
    return Yv.indexOf(t.name) === -1;
  });
}
function Qo(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function r1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Bc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? ph(t) : Bc(e);
}
function hh(e) {
  return e.reduce(function(t, r) {
    return Gv(t, Array.isArray(r) ? hh(r) : [r]);
  }, []);
}
function Bc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var r = ra(t);
  return Promise.resolve(r);
}
function n1(e) {
  return ti(this, void 0, void 0, function() {
    return ri(this, function(t) {
      return [2, e.isDirectory ? ph(e) : i1(e)];
    });
  });
}
function ph(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var i = [];
    function a() {
      var s = this;
      t.readEntries(function(l) {
        return ti(s, void 0, void 0, function() {
          var p, u, o;
          return ri(this, function(f) {
            switch (f.label) {
              case 0:
                if (l.length) return [3, 5];
                f.label = 1;
              case 1:
                return f.trys.push([1, 3, , 4]), [4, Promise.all(i)];
              case 2:
                return p = f.sent(), r(p), [3, 4];
              case 3:
                return u = f.sent(), n(u), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                o = Promise.all(l.map(n1)), i.push(o), a(), f.label = 6;
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
    a();
  });
}
function i1(e) {
  return ti(this, void 0, void 0, function() {
    return ri(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(i) {
          var a = ra(i, e.fullPath);
          r(a);
        }, function(i) {
          n(i);
        });
      })];
    });
  });
}
var bi = {}, qc;
function a1() {
  return qc || (qc = 1, bi.__esModule = !0, bi.default = function(e, t) {
    if (e && t) {
      var r = Array.isArray(t) ? t : t.split(",");
      if (r.length === 0)
        return !0;
      var n = e.name || "", i = (e.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
      return r.some(function(s) {
        var l = s.trim().toLowerCase();
        return l.charAt(0) === "." ? n.toLowerCase().endsWith(l) : l.endsWith("/*") ? a === l.replace(/\/.*$/, "") : i === l;
      });
    }
    return !0;
  }), bi;
}
var s1 = a1();
const mh = /* @__PURE__ */ Xn(s1);
var gt = function() {
  return gt = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, gt.apply(this, arguments);
};
function jc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function o1(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(o) {
      try {
        u(n.next(o));
      } catch (f) {
        s(f);
      }
    }
    function p(o) {
      try {
        u(n.throw(o));
      } catch (f) {
        s(f);
      }
    }
    function u(o) {
      o.done ? a(o.value) : i(o.value).then(l, p);
    }
    u((n = n.apply(e, [])).next());
  });
}
function l1(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
  return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(u) {
    return function(o) {
      return p([u, o]);
    };
  }
  function p(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = u;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(u);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (o) {
      u = [6, o], i = 0;
    } finally {
      n = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Zo(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function u1(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function c1(e) {
  return e.includes("Edge/");
}
function f1(e) {
  return e === void 0 && (e = window.navigator.userAgent), u1(e) || c1(e);
}
function Uc(e) {
  e.preventDefault();
}
function vi(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Bi(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var d1 = "file-invalid-type", h1 = "file-too-large", p1 = "file-too-small", m1 = "too-many-files", g1 = {
  code: m1,
  message: "Too many files"
}, y1 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: d1,
    message: "File type must be ".concat(t)
  };
};
function Tn(e) {
  return e != null;
}
var b1 = mh.default, v1 = b1 || mh;
function gh(e, t) {
  var r = e.type === "application/x-moz-file" || v1(e, t);
  return [r, r ? null : y1(t)];
}
var zc = function(e) {
  return {
    code: h1,
    message: "File is larger than ".concat(e, " bytes")
  };
}, Vc = function(e) {
  return {
    code: p1,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function yh(e, t, r) {
  if (Tn(e.size) && e.size)
    if (Tn(t) && Tn(r)) {
      if (e.size > r)
        return [!1, zc(r)];
      if (e.size < t)
        return [!1, Vc(t)];
    } else {
      if (Tn(t) && e.size < t)
        return [!1, Vc(t)];
      if (Tn(r) && e.size > r)
        return [!1, zc(r)];
    }
  return [!0, null];
}
function or() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    return e.some(function(a) {
      return !Bi(r) && a && a.apply(void 0, Zo([r], n, !1)), Bi(r);
    });
  };
}
function w1(e) {
  var t = e.files, r = e.accept, n = e.minSize, i = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(l) {
    var p = gh(l, r)[0], u = yh(l, n, i)[0];
    return p && u;
  });
}
var x1 = {
  disabled: !1,
  getFilesFromEvent: Xv,
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
function bh(e) {
  e === void 0 && (e = {});
  var t = de(gt(gt({}, x1), e));
  xr(function() {
    return gt({}, e);
  }, function(R) {
    t.value = gt(gt({}, t.value), R);
  });
  var r = de(), n = de(), i = il({
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
  }, s = function() {
    var R = t.value.onFileDialogCancel;
    i.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var z = n.value.files;
        z && !z.length && (i.isFileDialogActive = !1, typeof R == "function" && R());
      }
    }, 300);
  };
  function l() {
    i.isFocused = !0;
  }
  function p() {
    i.isFocused = !1;
  }
  function u() {
    var R = t.value.noClick;
    R || (f1() ? setTimeout(a, 0) : a());
  }
  var o = de([]), f = function(R) {
    if (r.value) {
      var z = r.value.$el || r.value;
      z.contains(R.target) || (R.preventDefault(), o.value = []);
    }
  };
  Ct(function() {
    window.addEventListener("focus", s, !1);
    var R = t.value.preventDropOnDocument;
    R && (document.addEventListener("dragover", Uc, !1), document.addEventListener("drop", f, !1));
  }), dn(function() {
    window.removeEventListener("focus", s, !1);
    var R = t.value.preventDropOnDocument;
    R && (document.removeEventListener("dragover", Uc), document.removeEventListener("drop", f));
  });
  function h(R) {
    var z = t.value.noDragEventsBubbling;
    z && R.stopPropagation();
  }
  function d(R) {
    return o1(this, void 0, void 0, function() {
      var z, w, P, _, A;
      return l1(this, function(W) {
        switch (W.label) {
          case 0:
            return z = t.value, w = z.getFilesFromEvent, P = z.noDragEventsBubbling, _ = z.onDragEnter, R.preventDefault(), h(R), o.value = Zo(Zo([], o.value, !0), [R.target], !1), vi(R) ? w ? [4, w(R)] : [2] : [3, 2];
          case 1:
            if (A = W.sent(), A || (A = []), Bi(R) && !P)
              return [2];
            i.draggedFiles = A, i.isDragActive = !0, _ && _(R), W.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(R) {
    var z = t.value.onDragOver;
    if (R.preventDefault(), h(R), R.dataTransfer)
      try {
        R.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return vi(R) && z && z(R), !1;
  }
  function y(R) {
    R.preventDefault(), h(R);
    var z = o.value.filter(function(_) {
      if (!r.value)
        return !1;
      var A = r.value.$el || r.value;
      return A.contains(_);
    }), w = z.indexOf(R.target);
    if (w !== -1 && z.splice(w, 1), o.value = z, !(z.length > 0)) {
      i.draggedFiles = [], i.isDragActive = !1;
      var P = t.value.onDragLeave;
      vi(R) && P && P(R);
    }
  }
  function g(R) {
    R.preventDefault(), h(R), o.value = [];
    var z = t.value, w = z.getFilesFromEvent, P = z.noDragEventsBubbling, _ = z.accept, A = z.minSize, W = z.maxSize, j = z.multiple, $ = z.maxFiles, H = z.onDrop, K = z.onDropRejected, Te = z.onDropAccepted;
    if (vi(R)) {
      if (!w)
        return;
      Promise.resolve(w(R)).then(function(qe) {
        if (!(Bi(R) && !P)) {
          var G = [], Oe = [];
          qe.forEach(function(ee) {
            var Re = gh(ee, _), We = Re[0], Pe = Re[1], Se = yh(ee, A, W), oe = Se[0], he = Se[1];
            if (We && oe)
              G.push(ee);
            else {
              var ue = [Pe, he].filter(function(xe) {
                return xe;
              });
              Oe.push({ file: ee, errors: ue });
            }
          }), (!j && G.length > 1 || j && $ >= 1 && G.length > $) && (G.forEach(function(ee) {
            Oe.push({ file: ee, errors: [g1] });
          }), G.splice(0)), i.acceptedFiles = G, i.fileRejections = Oe, H && H(G, Oe, R), Oe.length > 0 && K && K(Oe, R), G.length > 0 && Te && Te(G, R);
        }
      });
    }
    i.isFileDialogActive = !1, i.isDragActive = !1, i.draggedFiles = [], i.acceptedFiles = [], i.fileRejections = [];
  }
  var b = function(R) {
    return t.value.disabled ? void 0 : R;
  }, v = function(R) {
    return t.value.noKeyboard ? void 0 : b(R);
  }, S = function(R) {
    return t.value.noDrag ? void 0 : b(R);
  }, O = function(R) {
    R === void 0 && (R = {});
    var z = R.onFocus, w = R.onBlur, P = R.onClick, _ = R.onDragEnter, A = R.onDragenter, W = R.onDragOver, j = R.onDragover, $ = R.onDragLeave, H = R.onDragleave, K = R.onDrop, Te = jc(R, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return gt(gt({ onFocus: v(or(z, l)), onBlur: v(or(w, p)), onClick: b(or(P, u)), onDragenter: S(or(_, A, d)), onDragover: S(or(W, j, m)), onDragleave: S(or($, H, y)), onDrop: S(or(K, g)), ref: r }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Te);
  }, E = function(R) {
    R.stopPropagation();
  };
  function C(R) {
    R === void 0 && (R = {});
    var z = R.onChange, w = R.onClick, P = jc(R, ["onChange", "onClick"]), _ = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: b(or(z, g)),
      onClick: b(or(w, E)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return gt(gt({}, _), P);
  }
  var T = fe(function() {
    return i.draggedFiles ? i.draggedFiles.length : 0;
  }), L = fe(function() {
    return T.value > 0 && w1({
      files: i.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), M = fe(function() {
    return T.value > 0 && !L.value;
  });
  return gt(gt({}, Jh(i)), { isDragAccept: L, isDragReject: M, isFocused: fe(function() {
    return i.isFocused && !t.value.disabled;
  }), getRootProps: O, getInputProps: C, rootRef: r, inputRef: n, open: b(a) });
}
const S1 = { class: "flex w-full flex-col" }, A1 = {
  key: 0,
  class: "select-none text-black"
}, E1 = ["name"], C1 = {
  key: 1,
  class: "select-none"
}, O1 = { key: 2 }, P1 = {
  key: 3,
  class: "select-none"
}, m2 = {
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
    ei();
    const t = e, r = de(null), n = (u) => {
      let o = [];
      return u.split("_").join(" ").split(" ").map(function(f) {
        o.push(f[0].toUpperCase() + f.slice(1));
      }), o.join(" ");
    }, i = (u, o) => {
      var f;
      if (r.value = null, o && o.length > 0) {
        o[0].errors && (r.value = (f = o[0]) == null ? void 0 : f.errors.map((h) => h.message).join(", ")), console.error(o);
        return;
      }
      if (!u || u.length === 0) {
        r.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = u : t.form[t.field] = u[0];
    }, { getRootProps: a, getInputProps: s, isDragActive: l, ...p } = bh({
      onDrop: i,
      multiple: t.multiple,
      accept: t.accept
    });
    return (u, o) => {
      var f;
      return F(), B("div", S1, [
        U("div", {
          class: te(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": J(l),
            "border-red-600 bg-primary-100": t.form.errors[e.field] ?? r.value
          }])
        }, [
          U("div", Un({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, J(a)()), [
            e.label ? (F(), B("p", A1, re(e.label), 1)) : Z("", !0),
            U("input", Un(J(s)(), { name: e.field }), null, 16, E1),
            J(l) ? (F(), B("span", C1, "Drop the " + re(n(e.field)) + " here ...", 1)) : e.form[e.field] ? (F(), B("span", O1, re(((f = e.form[e.field]) == null ? void 0 : f.path) ?? "File prepared"), 1)) : (F(), B("span", P1, "Drag 'n' drop " + re(n(e.field)) + " here", 1))
          ], 16)
        ], 2),
        De(J(Yn), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, _1 = { class: "flex w-full" }, k1 = { key: 0 }, T1 = { key: 1 }, R1 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, F1 = ["onClick"], I1 = ["src"], D1 = ["value"], $1 = { class: "flex items-center gap-4" }, L1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, N1 = {
  key: 1,
  class: "mt-2"
}, M1 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, B1 = { class: "-m-1 flex flex-wrap md:-m-2" }, q1 = { class: "flex w-1/3 flex-wrap" }, j1 = { class: "h-full w-full p-1 shadow md:p-2" }, U1 = ["src"], g2 = {
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
    const t = ei(), r = e, n = zv({
      image: []
    });
    function i() {
      let f = new FormData();
      n.image.forEach((h, d) => {
        f.append(`image[${d}]`, h.file);
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
    function a(f) {
      f.forEach((h) => {
        let d = new FileReader();
        d.onload = (m) => {
          n.image.push({ file: h, dataUrl: m.target.result });
        }, d.readAsDataURL(h);
      });
    }
    const s = (f, h) => {
      if (h && h.length > 0) {
        console.error(h);
        return;
      }
      a(f);
    };
    function l(f) {
      n.image.splice(f, 1);
    }
    const { getRootProps: p, getInputProps: u, ...o } = bh({
      onDrop: s,
      multiple: !0,
      accept: "image/*"
    });
    return (f, h) => (F(), B(Ae, null, [
      e.canUpload ? (F(), B("form", {
        key: 0,
        onSubmit: vr(i, ["prevent"]),
        class: "w-full"
      }, [
        U("div", _1, [
          U("div", {
            class: te(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": f.dragEneted }])
          }, [
            U("div", Un({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, J(p)()), [
              U("input", Et(Rt(J(u)())), null, 16),
              f.isDragActive ? (F(), B("span", k1, "Drop the files here ...")) : (F(), B("span", T1, "Drag 'n' drop images here"))
            ], 16),
            J(n).image.length > 0 ? (F(), B("div", R1, [
              (F(!0), B(Ae, null, Lt(J(n).image, (d, m) => (F(), B("div", {
                class: "relative cursor-pointer select-none",
                onClick: (y) => l(m),
                key: m
              }, [
                h[0] || (h[0] = U("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                U("img", {
                  src: d.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, I1)
              ], 8, F1))), 128))
            ])) : Z("", !0)
          ], 2),
          De(J(jh), {
            class: te(["inline rounded-l-none", { "cursor-not-allowed": J(n).image.length == 0 }]),
            disabled: J(n).image.length == 0
          }, {
            default: $e(() => h[1] || (h[1] = [
              ke(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          J(n).progress ? (F(), B("progress", {
            key: 0,
            value: J(n).progress.percentage,
            max: "100"
          }, re(J(n).progress.percentage) + "%", 9, D1)) : Z("", !0)
        ]),
        f.$page.props.errors.image ? (F(), pe(J(Yn), {
          key: 0,
          class: "mt-2",
          message: f.$page.props.errors.image
        }, null, 8, ["message"])) : Z("", !0),
        U("div", $1, [
          De(qr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: $e(() => [
              J(n).recentlySuccessful ? (F(), B("p", L1, "Images uploaded.")) : Z("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Z("", !0),
      e.images.length ? (F(), B("div", N1, [
        h[3] || (h[3] = U("hr", null, null, -1)),
        U("div", M1, [
          U("div", B1, [
            (F(!0), B(Ae, null, Lt(e.images, (d) => (F(), B("div", q1, [
              U("div", j1, [
                U("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: d.url
                }, null, 8, U1),
                e.canUpload ? (F(), pe(J($t), {
                  key: 0,
                  href: f.route("images.delete", d.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: $e(() => h[2] || (h[2] = [
                    ke(" Delete Image ")
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
}, z1 = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, V1 = ["name", "value", "id", "checked"], H1 = ["for"], y2 = {
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
    const r = t, n = (i) => {
      r("update:modelValue", i.target.value);
    };
    return (i, a) => (F(), B("div", z1, [
      U("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-1 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-hidden focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: e.name,
        value: e.value,
        id: e.id,
        checked: e.modelValue === e.value,
        onChange: n
      }, null, 40, V1),
      U("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: e.id
      }, re(e.label), 9, H1)
    ]));
  }
}, W1 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Hc = {
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
      return F(), pe(J(jh), {
        disabled: e.loading || ((n = e.form) == null ? void 0 : n.processing) || e.disabled,
        type: e.type,
        class: "focusable"
      }, {
        default: $e(() => {
          var i, a;
          return [
            U("div", {
              class: te({ "opacity-25": ((i = e.form) == null ? void 0 : i.processing) || e.loading })
            }, [
              Q(t.$slots, "default")
            ], 2),
            (a = e.form) != null && a.processing || e.loading ? (F(), B("div", W1, [
              De(J(Uh), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Z("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, G1 = ["id"], K1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, J1 = { class: "flex flex-col" }, b2 = {
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
    const t = ei(), r = e, n = de(null), i = de(null), a = de(null), s = de(null), l = () => {
      const o = n.value, f = o.getBoundingClientRect().top, h = document.querySelector("nav").offsetHeight, d = f - h, m = a.value, y = o.getBoundingClientRect().height + f - h * 2;
      if (d <= 0 && y > 0) {
        if (m.dataset.sticky === "true") return;
        u(), m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${h}px`, m.style.width = i.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, p = () => {
      s.value.style.marginLeft = -i.value.scrollLeft + "px";
    }, u = () => {
      if (!n.value) return;
      const o = n.value.querySelector("thead tr");
      let f = s.value;
      f.innerHTML = "";
      let h = o == null ? void 0 : o.querySelectorAll("th");
      h == null || h.forEach((m) => {
        const y = m.cloneNode(!0);
        y.style.width = m.offsetWidth + "px", f.appendChild(y), y.addEventListener("click", () => {
          m.click();
        });
      });
      const d = a.value;
      d.style.width = i.value.offsetWidth + "px";
    };
    return r.sticky && (t.on("navigate", () => {
      Yh(() => {
        u();
      });
    }), Ct(() => {
      u(), window.addEventListener("scroll", l, { passive: !0 }), window.addEventListener("resize", u, { passive: !0 }), i.value.addEventListener("scroll", p, { passive: !0 });
    }), dn(() => {
      var o;
      window.removeEventListener("scroll", l), window.removeEventListener("resize", u), (o = i.value) == null || o.removeEventListener("scroll", p);
    })), (o, f) => (F(), B("div", {
      class: te({
        "visible! hidden": e.collapsable,
        "overflow-hidden": e.overflow
      }),
      id: e.collapse_id,
      "data-te-collapse-item": ""
    }, [
      e.total ? (F(), B("p", K1, "Found: " + re(e.total), 1)) : Z("", !0),
      U("div", J1, [
        U("div", {
          class: te({ "overflow-x-auto": e.overflow }),
          ref_key: "table_container",
          ref: i
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
            e.sticky ? (F(), B("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: a,
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
      o.$slots.pagination ? Q(o.$slots, "pagination", { key: 1 }) : e.links ? (F(), pe(J(qh), {
        key: 2,
        class: "mt-6",
        links: e.links
      }, null, 8, ["links"])) : Z("", !0)
    ], 10, G1));
  }
}, Y1 = {}, X1 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function Q1(e, t) {
  return F(), B("thead", X1, [
    Q(e.$slots, "default")
  ]);
}
const v2 = /* @__PURE__ */ pn(Y1, [["render", Q1]]), Z1 = { class: "flex items-center justify-between" }, ew = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, w2 = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(e) {
    Jn.add(vg, gg);
    const t = e, r = de("asc"), n = de(!1);
    let i = null;
    const a = ei();
    Ct(() => {
      t.orderBy && (i = a.on("navigate", s));
    }), dn(() => {
      i == null || i();
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
      o.order_by = t.orderBy, o.order_dir = u, a.get(route(route().current()), o, {
        preserveState: !0
      }), r.value = u, n.value = !0;
    }, p = (u) => r.value === u && n.value ? "active text-primary" : "text-gray-400";
    return (u, o) => (F(), B("th", {
      scope: "col",
      class: te(["relative py-4 text-center md:px-6 md:text-left", e.orderBy ? "cursor-pointer" : ""]),
      onClick: l
    }, [
      U("div", Z1, [
        Q(u.$slots, "default"),
        e.orderBy ? (F(), B("span", ew, [
          De(J(Wt), {
            icon: "fa-sort-up",
            class: te(["absolute", p("desc")])
          }, null, 8, ["class"]),
          De(J(Wt), {
            icon: "fa-sort-down",
            class: te(["absolute", p("asc")])
          }, null, 8, ["class"])
        ])) : Z("", !0)
      ])
    ], 2));
  }
}, tw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, rw = { class: "td-label hidden font-bold" }, nw = {
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
    return (r, n) => (F(), B("td", tw, [
      U("span", rw, re(t.label), 1),
      Q(r.$slots, "default")
    ]));
  }
}, iw = ["data-te-target", "aria-controls"], x2 = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (F(), B("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      Q(t.$slots, "default")
    ], 8, iw));
  }
}, aw = { colspan: "999" }, sw = ["id"], S2 = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (F(), B("tr", null, [
      U("td", aw, [
        U("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          Q(t.$slots, "default")
        ], 8, sw)
      ])
    ]));
  }
};
var wi = { exports: {} }, Wc;
function ow() {
  if (Wc) return wi.exports;
  Wc = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return wi.exports = t(), wi.exports.createColors = t, wi.exports;
}
var Bs, Gc;
function Ol() {
  if (Gc) return Bs;
  Gc = 1;
  let e = /* @__PURE__ */ ow(), t = dt;
  class r extends Error {
    constructor(i, a, s, l, p, u) {
      super(i), this.name = "CssSyntaxError", this.reason = i, p && (this.file = p), l && (this.source = l), u && (this.plugin = u), typeof a < "u" && typeof s < "u" && (typeof a == "number" ? (this.line = a, this.column = s) : (this.line = a.line, this.column = a.column, this.endLine = s.line, this.endColumn = s.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, r);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(i) {
      if (!this.source) return "";
      let a = this.source;
      i == null && (i = e.isColorSupported);
      let s = (d) => d, l = (d) => d, p = (d) => d;
      if (i) {
        let { bold: d, gray: m, red: y } = e.createColors(!0);
        l = (g) => d(y(g)), s = (g) => m(g), t && (p = (g) => t(g));
      }
      let u = a.split(/\r?\n/), o = Math.max(this.line - 3, 0), f = Math.min(this.line + 2, u.length), h = String(f).length;
      return u.slice(o, f).map((d, m) => {
        let y = o + 1 + m, g = " " + (" " + y).slice(-h) + " | ";
        if (y === this.line) {
          if (d.length > 160) {
            let v = 20, S = Math.max(0, this.column - v), O = Math.max(
              this.column + v,
              this.endColumn + v
            ), E = d.slice(S, O), C = s(g.replace(/\d/g, " ")) + d.slice(0, Math.min(this.column - 1, v - 1)).replace(/[^\t]/g, " ");
            return l(">") + s(g) + p(E) + `
 ` + C + l("^");
          }
          let b = s(g.replace(/\d/g, " ")) + d.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return l(">") + s(g) + p(d) + `
 ` + b + l("^");
        }
        return " " + s(g) + p(d);
      }).join(`
`);
    }
    toString() {
      let i = this.showSourceCode();
      return i && (i = `

` + i + `
`), this.name + ": " + this.message + i;
    }
  }
  return Bs = r, r.default = r, Bs;
}
var qs, Kc;
function vh() {
  if (Kc) return qs;
  Kc = 1;
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
    constructor(i) {
      this.builder = i;
    }
    atrule(i, a) {
      let s = "@" + i.name, l = i.params ? this.rawValue(i, "params") : "";
      if (typeof i.raws.afterName < "u" ? s += i.raws.afterName : l && (s += " "), i.nodes)
        this.block(i, s + l);
      else {
        let p = (i.raws.between || "") + (a ? ";" : "");
        this.builder(s + l + p, i);
      }
    }
    beforeAfter(i, a) {
      let s;
      i.type === "decl" ? s = this.raw(i, null, "beforeDecl") : i.type === "comment" ? s = this.raw(i, null, "beforeComment") : a === "before" ? s = this.raw(i, null, "beforeRule") : s = this.raw(i, null, "beforeClose");
      let l = i.parent, p = 0;
      for (; l && l.type !== "root"; )
        p += 1, l = l.parent;
      if (s.includes(`
`)) {
        let u = this.raw(i, null, "indent");
        if (u.length)
          for (let o = 0; o < p; o++) s += u;
      }
      return s;
    }
    block(i, a) {
      let s = this.raw(i, "between", "beforeOpen");
      this.builder(a + s + "{", i, "start");
      let l;
      i.nodes && i.nodes.length ? (this.body(i), l = this.raw(i, "after")) : l = this.raw(i, "after", "emptyBody"), l && this.builder(l), this.builder("}", i, "end");
    }
    body(i) {
      let a = i.nodes.length - 1;
      for (; a > 0 && i.nodes[a].type === "comment"; )
        a -= 1;
      let s = this.raw(i, "semicolon");
      for (let l = 0; l < i.nodes.length; l++) {
        let p = i.nodes[l], u = this.raw(p, "before");
        u && this.builder(u), this.stringify(p, a !== l || s);
      }
    }
    comment(i) {
      let a = this.raw(i, "left", "commentLeft"), s = this.raw(i, "right", "commentRight");
      this.builder("/*" + a + i.text + s + "*/", i);
    }
    decl(i, a) {
      let s = this.raw(i, "between", "colon"), l = i.prop + s + this.rawValue(i, "value");
      i.important && (l += i.raws.important || " !important"), a && (l += ";"), this.builder(l, i);
    }
    document(i) {
      this.body(i);
    }
    raw(i, a, s) {
      let l;
      if (s || (s = a), a && (l = i.raws[a], typeof l < "u"))
        return l;
      let p = i.parent;
      if (s === "before" && (!p || p.type === "root" && p.first === i || p && p.type === "document"))
        return "";
      if (!p) return e[s];
      let u = i.root();
      if (u.rawCache || (u.rawCache = {}), typeof u.rawCache[s] < "u")
        return u.rawCache[s];
      if (s === "before" || s === "after")
        return this.beforeAfter(i, s);
      {
        let o = "raw" + t(s);
        this[o] ? l = this[o](u, i) : u.walk((f) => {
          if (l = f.raws[a], typeof l < "u") return !1;
        });
      }
      return typeof l > "u" && (l = e[s]), u.rawCache[s] = l, l;
    }
    rawBeforeClose(i) {
      let a;
      return i.walk((s) => {
        if (s.nodes && s.nodes.length > 0 && typeof s.raws.after < "u")
          return a = s.raws.after, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), !1;
      }), a && (a = a.replace(/\S/g, "")), a;
    }
    rawBeforeComment(i, a) {
      let s;
      return i.walkComments((l) => {
        if (typeof l.raws.before < "u")
          return s = l.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), typeof s > "u" ? s = this.raw(a, null, "beforeDecl") : s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeDecl(i, a) {
      let s;
      return i.walkDecls((l) => {
        if (typeof l.raws.before < "u")
          return s = l.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), typeof s > "u" ? s = this.raw(a, null, "beforeRule") : s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeOpen(i) {
      let a;
      return i.walk((s) => {
        if (s.type !== "decl" && (a = s.raws.between, typeof a < "u"))
          return !1;
      }), a;
    }
    rawBeforeRule(i) {
      let a;
      return i.walk((s) => {
        if (s.nodes && (s.parent !== i || i.first !== s) && typeof s.raws.before < "u")
          return a = s.raws.before, a.includes(`
`) && (a = a.replace(/[^\n]+$/, "")), !1;
      }), a && (a = a.replace(/\S/g, "")), a;
    }
    rawColon(i) {
      let a;
      return i.walkDecls((s) => {
        if (typeof s.raws.between < "u")
          return a = s.raws.between.replace(/[^\s:]/g, ""), !1;
      }), a;
    }
    rawEmptyBody(i) {
      let a;
      return i.walk((s) => {
        if (s.nodes && s.nodes.length === 0 && (a = s.raws.after, typeof a < "u"))
          return !1;
      }), a;
    }
    rawIndent(i) {
      if (i.raws.indent) return i.raws.indent;
      let a;
      return i.walk((s) => {
        let l = s.parent;
        if (l && l !== i && l.parent && l.parent === i && typeof s.raws.before < "u") {
          let p = s.raws.before.split(`
`);
          return a = p[p.length - 1], a = a.replace(/\S/g, ""), !1;
        }
      }), a;
    }
    rawSemicolon(i) {
      let a;
      return i.walk((s) => {
        if (s.nodes && s.nodes.length && s.last.type === "decl" && (a = s.raws.semicolon, typeof a < "u"))
          return !1;
      }), a;
    }
    rawValue(i, a) {
      let s = i[a], l = i.raws[a];
      return l && l.value === s ? l.raw : s;
    }
    root(i) {
      this.body(i), i.raws.after && this.builder(i.raws.after);
    }
    rule(i) {
      this.block(i, this.rawValue(i, "selector")), i.raws.ownSemicolon && this.builder(i.raws.ownSemicolon, i, "end");
    }
    stringify(i, a) {
      if (!this[i.type])
        throw new Error(
          "Unknown AST node type " + i.type + ". Maybe you need to change PostCSS stringifier."
        );
      this[i.type](i, a);
    }
  }
  return qs = r, r.default = r, qs;
}
var js, Jc;
function na() {
  if (Jc) return js;
  Jc = 1;
  let e = vh();
  function t(r, n) {
    new e(n).stringify(r);
  }
  return js = t, t.default = t, js;
}
var xi = {}, Yc;
function Pl() {
  return Yc || (Yc = 1, xi.isClean = Symbol("isClean"), xi.my = Symbol("my")), xi;
}
var Us, Xc;
function ia() {
  if (Xc) return Us;
  Xc = 1;
  let e = Ol(), t = vh(), r = na(), { isClean: n, my: i } = Pl();
  function a(p, u) {
    let o = new p.constructor();
    for (let f in p) {
      if (!Object.prototype.hasOwnProperty.call(p, f) || f === "proxyCache") continue;
      let h = p[f], d = typeof h;
      f === "parent" && d === "object" ? u && (o[f] = u) : f === "source" ? o[f] = h : Array.isArray(h) ? o[f] = h.map((m) => a(m, o)) : (d === "object" && h !== null && (h = a(h)), o[f] = h);
    }
    return o;
  }
  function s(p, u) {
    if (u && typeof u.offset < "u")
      return u.offset;
    let o = 1, f = 1, h = 0;
    for (let d = 0; d < p.length; d++) {
      if (f === u.line && o === u.column) {
        h = d;
        break;
      }
      p[d] === `
` ? (o = 1, f += 1) : o += 1;
    }
    return h;
  }
  class l {
    get proxyOf() {
      return this;
    }
    constructor(u = {}) {
      this.raws = {}, this[n] = !1, this[i] = !0;
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
      let o = a(this);
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
        let { end: f, start: h } = this.rangeBy(o);
        return this.source.input.error(
          u,
          { column: h.column, line: h.line },
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
        let f = "document" in this.source.input ? this.source.input.document : this.source.input.css, d = f.slice(
          s(f, this.source.start),
          s(f, this.source.end)
        ).indexOf(u.word);
        d !== -1 && (o = this.positionInside(d));
      }
      return o;
    }
    positionInside(u) {
      let o = this.source.start.column, f = this.source.start.line, h = "document" in this.source.input ? this.source.input.document : this.source.input.css, d = s(h, this.source.start), m = d + u;
      for (let y = d; y < m; y++)
        h[y] === `
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
        let h = "document" in this.source.input ? this.source.input.document : this.source.input.css, m = h.slice(
          s(h, this.source.start),
          s(h, this.source.end)
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
        for (let h of u)
          h === this ? f = !0 : f ? (this.parent.insertAfter(o, h), o = h) : this.parent.insertBefore(o, h);
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
      let f = {}, h = o == null;
      o = o || /* @__PURE__ */ new Map();
      let d = 0;
      for (let m in this) {
        if (!Object.prototype.hasOwnProperty.call(this, m) || m === "parent" || m === "proxyCache") continue;
        let y = this[m];
        if (Array.isArray(y))
          f[m] = y.map((g) => typeof g == "object" && g.toJSON ? g.toJSON(null, o) : g);
        else if (typeof y == "object" && y.toJSON)
          f[m] = y.toJSON(null, o);
        else if (m === "source") {
          let g = o.get(y.input);
          g == null && (g = d, o.set(y.input, d), d++), f[m] = {
            end: y.end,
            inputId: g,
            start: y.start
          };
        } else
          f[m] = y;
      }
      return h && (f.inputs = [...o.keys()].map((m) => m.toJSON())), f;
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
      let h = { node: this };
      for (let d in f) h[d] = f[d];
      return u.warn(o, h);
    }
  }
  return Us = l, l.default = l, Us;
}
var zs, Qc;
function aa() {
  if (Qc) return zs;
  Qc = 1;
  let e = ia();
  class t extends e {
    constructor(n) {
      super(n), this.type = "comment";
    }
  }
  return zs = t, t.default = t, zs;
}
var Vs, Zc;
function sa() {
  if (Zc) return Vs;
  Zc = 1;
  let e = ia();
  class t extends e {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(n) {
      n && typeof n.value < "u" && typeof n.value != "string" && (n = { ...n, value: String(n.value) }), super(n), this.type = "decl";
    }
  }
  return Vs = t, t.default = t, Vs;
}
var Hs, ef;
function Hr() {
  if (ef) return Hs;
  ef = 1;
  let e = aa(), t = sa(), r = ia(), { isClean: n, my: i } = Pl(), a, s, l, p;
  function u(h) {
    return h.map((d) => (d.nodes && (d.nodes = u(d.nodes)), delete d.source, d));
  }
  function o(h) {
    if (h[n] = !1, h.proxyOf.nodes)
      for (let d of h.proxyOf.nodes)
        o(d);
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
    append(...d) {
      for (let m of d) {
        let y = this.normalize(m, this.last);
        for (let g of y) this.proxyOf.nodes.push(g);
      }
      return this.markDirty(), this;
    }
    cleanRaws(d) {
      if (super.cleanRaws(d), this.nodes)
        for (let m of this.nodes) m.cleanRaws(d);
    }
    each(d) {
      if (!this.proxyOf.nodes) return;
      let m = this.getIterator(), y, g;
      for (; this.indexes[m] < this.proxyOf.nodes.length && (y = this.indexes[m], g = d(this.proxyOf.nodes[y], y), g !== !1); )
        this.indexes[m] += 1;
      return delete this.indexes[m], g;
    }
    every(d) {
      return this.nodes.every(d);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let d = this.lastEach;
      return this.indexes[d] = 0, d;
    }
    getProxyProcessor() {
      return {
        get(d, m) {
          return m === "proxyOf" ? d : d[m] ? m === "each" || typeof m == "string" && m.startsWith("walk") ? (...y) => d[m](
            ...y.map((g) => typeof g == "function" ? (b, v) => g(b.toProxy(), v) : g)
          ) : m === "every" || m === "some" ? (y) => d[m](
            (g, ...b) => y(g.toProxy(), ...b)
          ) : m === "root" ? () => d.root().toProxy() : m === "nodes" ? d.nodes.map((y) => y.toProxy()) : m === "first" || m === "last" ? d[m].toProxy() : d[m] : d[m];
        },
        set(d, m, y) {
          return d[m] === y || (d[m] = y, (m === "name" || m === "params" || m === "selector") && d.markDirty()), !0;
        }
      };
    }
    index(d) {
      return typeof d == "number" ? d : (d.proxyOf && (d = d.proxyOf), this.proxyOf.nodes.indexOf(d));
    }
    insertAfter(d, m) {
      let y = this.index(d), g = this.normalize(m, this.proxyOf.nodes[y]).reverse();
      y = this.index(d);
      for (let v of g) this.proxyOf.nodes.splice(y + 1, 0, v);
      let b;
      for (let v in this.indexes)
        b = this.indexes[v], y < b && (this.indexes[v] = b + g.length);
      return this.markDirty(), this;
    }
    insertBefore(d, m) {
      let y = this.index(d), g = y === 0 ? "prepend" : !1, b = this.normalize(
        m,
        this.proxyOf.nodes[y],
        g
      ).reverse();
      y = this.index(d);
      for (let S of b) this.proxyOf.nodes.splice(y, 0, S);
      let v;
      for (let S in this.indexes)
        v = this.indexes[S], y <= v && (this.indexes[S] = v + b.length);
      return this.markDirty(), this;
    }
    normalize(d, m) {
      if (typeof d == "string")
        d = u(s(d).nodes);
      else if (typeof d > "u")
        d = [];
      else if (Array.isArray(d)) {
        d = d.slice(0);
        for (let g of d)
          g.parent && g.parent.removeChild(g, "ignore");
      } else if (d.type === "root" && this.type !== "document") {
        d = d.nodes.slice(0);
        for (let g of d)
          g.parent && g.parent.removeChild(g, "ignore");
      } else if (d.type)
        d = [d];
      else if (d.prop) {
        if (typeof d.value > "u")
          throw new Error("Value field is missed in node creation");
        typeof d.value != "string" && (d.value = String(d.value)), d = [new t(d)];
      } else if (d.selector || d.selectors)
        d = [new p(d)];
      else if (d.name)
        d = [new a(d)];
      else if (d.text)
        d = [new e(d)];
      else
        throw new Error("Unknown node type in node creation");
      return d.map((g) => (g[i] || f.rebuild(g), g = g.proxyOf, g.parent && g.parent.removeChild(g), g[n] && o(g), g.raws || (g.raws = {}), typeof g.raws.before > "u" && m && typeof m.raws.before < "u" && (g.raws.before = m.raws.before.replace(/\S/g, "")), g.parent = this.proxyOf, g));
    }
    prepend(...d) {
      d = d.reverse();
      for (let m of d) {
        let y = this.normalize(m, this.first, "prepend").reverse();
        for (let g of y) this.proxyOf.nodes.unshift(g);
        for (let g in this.indexes)
          this.indexes[g] = this.indexes[g] + y.length;
      }
      return this.markDirty(), this;
    }
    push(d) {
      return d.parent = this, this.proxyOf.nodes.push(d), this;
    }
    removeAll() {
      for (let d of this.proxyOf.nodes) d.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(d) {
      d = this.index(d), this.proxyOf.nodes[d].parent = void 0, this.proxyOf.nodes.splice(d, 1);
      let m;
      for (let y in this.indexes)
        m = this.indexes[y], m >= d && (this.indexes[y] = m - 1);
      return this.markDirty(), this;
    }
    replaceValues(d, m, y) {
      return y || (y = m, m = {}), this.walkDecls((g) => {
        m.props && !m.props.includes(g.prop) || m.fast && !g.value.includes(m.fast) || (g.value = g.value.replace(d, y));
      }), this.markDirty(), this;
    }
    some(d) {
      return this.nodes.some(d);
    }
    walk(d) {
      return this.each((m, y) => {
        let g;
        try {
          g = d(m, y);
        } catch (b) {
          throw m.addToError(b);
        }
        return g !== !1 && m.walk && (g = m.walk(d)), g;
      });
    }
    walkAtRules(d, m) {
      return m ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "atrule" && d.test(y.name))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "atrule" && y.name === d)
          return m(y, g);
      }) : (m = d, this.walk((y, g) => {
        if (y.type === "atrule")
          return m(y, g);
      }));
    }
    walkComments(d) {
      return this.walk((m, y) => {
        if (m.type === "comment")
          return d(m, y);
      });
    }
    walkDecls(d, m) {
      return m ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "decl" && d.test(y.prop))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "decl" && y.prop === d)
          return m(y, g);
      }) : (m = d, this.walk((y, g) => {
        if (y.type === "decl")
          return m(y, g);
      }));
    }
    walkRules(d, m) {
      return m ? d instanceof RegExp ? this.walk((y, g) => {
        if (y.type === "rule" && d.test(y.selector))
          return m(y, g);
      }) : this.walk((y, g) => {
        if (y.type === "rule" && y.selector === d)
          return m(y, g);
      }) : (m = d, this.walk((y, g) => {
        if (y.type === "rule")
          return m(y, g);
      }));
    }
  }
  return f.registerParse = (h) => {
    s = h;
  }, f.registerRule = (h) => {
    p = h;
  }, f.registerAtRule = (h) => {
    a = h;
  }, f.registerRoot = (h) => {
    l = h;
  }, Hs = f, f.default = f, f.rebuild = (h) => {
    h.type === "atrule" ? Object.setPrototypeOf(h, a.prototype) : h.type === "rule" ? Object.setPrototypeOf(h, p.prototype) : h.type === "decl" ? Object.setPrototypeOf(h, t.prototype) : h.type === "comment" ? Object.setPrototypeOf(h, e.prototype) : h.type === "root" && Object.setPrototypeOf(h, l.prototype), h[i] = !0, h.nodes && h.nodes.forEach((d) => {
      f.rebuild(d);
    });
  }, Hs;
}
var Ws, tf;
function _l() {
  if (tf) return Ws;
  tf = 1;
  let e = Hr();
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
  return Ws = t, t.default = t, e.registerAtRule(t), Ws;
}
var Gs, rf;
function kl() {
  if (rf) return Gs;
  rf = 1;
  let e = Hr(), t, r;
  class n extends e {
    constructor(a) {
      super({ type: "document", ...a }), this.nodes || (this.nodes = []);
    }
    toResult(a = {}) {
      return new t(new r(), this, a).stringify();
    }
  }
  return n.registerLazyResult = (i) => {
    t = i;
  }, n.registerProcessor = (i) => {
    r = i;
  }, Gs = n, n.default = n, Gs;
}
var Ks, nf;
function lw() {
  if (nf) return Ks;
  nf = 1;
  let e = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return Ks = { nanoid: (n = 21) => {
    let i = "", a = n | 0;
    for (; a--; )
      i += e[Math.random() * 64 | 0];
    return i;
  }, customAlphabet: (n, i = 21) => (a = i) => {
    let s = "", l = a | 0;
    for (; l--; )
      s += n[Math.random() * n.length | 0];
    return s;
  } }, Ks;
}
var Js, af;
function wh() {
  if (af) return Js;
  af = 1;
  let { existsSync: e, readFileSync: t } = dt, { dirname: r, join: n } = dt, { SourceMapConsumer: i, SourceMapGenerator: a } = dt;
  function s(p) {
    return Buffer ? Buffer.from(p, "base64").toString() : window.atob(p);
  }
  class l {
    constructor(u, o) {
      if (o.map === !1) return;
      this.loadAnnotation(u), this.inline = this.startWith(this.annotation, "data:");
      let f = o.map ? o.map.prev : void 0, h = this.loadMap(o.from, f);
      !this.mapFile && o.from && (this.mapFile = o.from), this.mapFile && (this.root = r(this.mapFile)), h && (this.text = h);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new i(this.text)), this.consumerCache;
    }
    decodeInline(u) {
      let o = /^data:application\/json;charset=utf-?8;base64,/, f = /^data:application\/json;base64,/, h = /^data:application\/json;charset=utf-?8,/, d = /^data:application\/json,/, m = u.match(h) || u.match(d);
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
      let f = u.lastIndexOf(o.pop()), h = u.indexOf("*/", f);
      f > -1 && h > -1 && (this.annotation = this.getAnnotationURL(u.substring(f, h)));
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
            let h = this.loadFile(f);
            if (!h)
              throw new Error(
                "Unable to load previous source map: " + f.toString()
              );
            return h;
          }
        } else {
          if (o instanceof i)
            return a.fromSourceMap(o).toString();
          if (o instanceof a)
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
  return Js = l, l.default = l, Js;
}
var Ys, sf;
function oa() {
  if (sf) return Ys;
  sf = 1;
  let { nanoid: e } = /* @__PURE__ */ lw(), { isAbsolute: t, resolve: r } = dt, { SourceMapConsumer: n, SourceMapGenerator: i } = dt, { fileURLToPath: a, pathToFileURL: s } = dt, l = Ol(), p = wh(), u = dt, o = Symbol("fromOffsetCache"), f = !!(n && i), h = !!(r && t);
  class d {
    get from() {
      return this.file || this.id;
    }
    constructor(y, g = {}) {
      if (y === null || typeof y > "u" || typeof y == "object" && !y.toString)
        throw new Error(`PostCSS received ${y} instead of CSS string`);
      if (this.css = y.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, g.document && (this.document = g.document.toString()), g.from && (!h || /^\w+:\/\//.test(g.from) || t(g.from) ? this.file = g.from : this.file = r(g.from)), h && f) {
        let b = new p(this.css, g);
        if (b.text) {
          this.map = b;
          let v = b.consumer().file;
          !this.file && v && (this.file = this.mapResolve(v));
        }
      }
      this.file || (this.id = "<input css " + e(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(y, g, b, v = {}) {
      let S, O, E;
      if (g && typeof g == "object") {
        let T = g, L = b;
        if (typeof T.offset == "number") {
          let M = this.fromOffset(T.offset);
          g = M.line, b = M.col;
        } else
          g = T.line, b = T.column;
        if (typeof L.offset == "number") {
          let M = this.fromOffset(L.offset);
          O = M.line, S = M.col;
        } else
          O = L.line, S = L.column;
      } else if (!b) {
        let T = this.fromOffset(g);
        g = T.line, b = T.col;
      }
      let C = this.origin(g, b, O, S);
      return C ? E = new l(
        y,
        C.endLine === void 0 ? C.line : { column: C.column, line: C.line },
        C.endLine === void 0 ? C.column : { column: C.endColumn, line: C.endLine },
        C.source,
        C.file,
        v.plugin
      ) : E = new l(
        y,
        O === void 0 ? g : { column: b, line: g },
        O === void 0 ? b : { column: S, line: O },
        this.css,
        this.file,
        v.plugin
      ), E.input = { column: b, endColumn: S, endLine: O, line: g, source: this.css }, this.file && (s && (E.input.url = s(this.file).toString()), E.input.file = this.file), E;
    }
    fromOffset(y) {
      let g, b;
      if (this[o])
        b = this[o];
      else {
        let S = this.css.split(`
`);
        b = new Array(S.length);
        let O = 0;
        for (let E = 0, C = S.length; E < C; E++)
          b[E] = O, O += S[E].length + 1;
        this[o] = b;
      }
      g = b[b.length - 1];
      let v = 0;
      if (y >= g)
        v = b.length - 1;
      else {
        let S = b.length - 2, O;
        for (; v < S; )
          if (O = v + (S - v >> 1), y < b[O])
            S = O - 1;
          else if (y >= b[O + 1])
            v = O + 1;
          else {
            v = O;
            break;
          }
      }
      return {
        col: y - b[v] + 1,
        line: v + 1
      };
    }
    mapResolve(y) {
      return /^\w+:\/\//.test(y) ? y : r(this.map.consumer().sourceRoot || this.map.root || ".", y);
    }
    origin(y, g, b, v) {
      if (!this.map) return !1;
      let S = this.map.consumer(), O = S.originalPositionFor({ column: g, line: y });
      if (!O.source) return !1;
      let E;
      typeof b == "number" && (E = S.originalPositionFor({ column: v, line: b }));
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
        if (a)
          T.file = a(C);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let L = S.sourceContentFor(O.source);
      return L && (T.source = L), T;
    }
    toJSON() {
      let y = {};
      for (let g of ["hasBOM", "css", "file", "id"])
        this[g] != null && (y[g] = this[g]);
      return this.map && (y.map = { ...this.map }, y.map.consumerCache && (y.map.consumerCache = void 0)), y;
    }
  }
  return Ys = d, d.default = d, u && u.registerInput && u.registerInput(d), Ys;
}
var Xs, of;
function ni() {
  if (of) return Xs;
  of = 1;
  let e = Hr(), t, r;
  class n extends e {
    constructor(a) {
      super(a), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(a, s, l) {
      let p = super.normalize(a);
      if (s) {
        if (l === "prepend")
          this.nodes.length > 1 ? s.raws.before = this.nodes[1].raws.before : delete s.raws.before;
        else if (this.first !== s)
          for (let u of p)
            u.raws.before = s.raws.before;
      }
      return p;
    }
    removeChild(a, s) {
      let l = this.index(a);
      return !s && l === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[l].raws.before), super.removeChild(a);
    }
    toResult(a = {}) {
      return new t(new r(), this, a).stringify();
    }
  }
  return n.registerLazyResult = (i) => {
    t = i;
  }, n.registerProcessor = (i) => {
    r = i;
  }, Xs = n, n.default = n, e.registerRoot(n), Xs;
}
var Qs, lf;
function xh() {
  if (lf) return Qs;
  lf = 1;
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
      let i = [], a = "", s = !1, l = 0, p = !1, u = "", o = !1;
      for (let f of t)
        o ? o = !1 : f === "\\" ? o = !0 : p ? f === u && (p = !1) : f === '"' || f === "'" ? (p = !0, u = f) : f === "(" ? l += 1 : f === ")" ? l > 0 && (l -= 1) : l === 0 && r.includes(f) && (s = !0), s ? (a !== "" && i.push(a.trim()), a = "", s = !1) : a += f;
      return (n || a !== "") && i.push(a.trim()), i;
    }
  };
  return Qs = e, e.default = e, Qs;
}
var Zs, uf;
function Tl() {
  if (uf) return Zs;
  uf = 1;
  let e = Hr(), t = xh();
  class r extends e {
    get selectors() {
      return t.comma(this.selector);
    }
    set selectors(i) {
      let a = this.selector ? this.selector.match(/,\s*/) : null, s = a ? a[0] : "," + this.raw("between", "beforeOpen");
      this.selector = i.join(s);
    }
    constructor(i) {
      super(i), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return Zs = r, r.default = r, e.registerRule(r), Zs;
}
var eo, cf;
function uw() {
  if (cf) return eo;
  cf = 1;
  let e = _l(), t = aa(), r = sa(), n = oa(), i = wh(), a = ni(), s = Tl();
  function l(p, u) {
    if (Array.isArray(p)) return p.map((h) => l(h));
    let { inputs: o, ...f } = p;
    if (o) {
      u = [];
      for (let h of o) {
        let d = { ...h, __proto__: n.prototype };
        d.map && (d.map = {
          ...d.map,
          __proto__: i.prototype
        }), u.push(d);
      }
    }
    if (f.nodes && (f.nodes = p.nodes.map((h) => l(h, u))), f.source) {
      let { inputId: h, ...d } = f.source;
      f.source = d, h != null && (f.source.input = u[h]);
    }
    if (f.type === "root")
      return new a(f);
    if (f.type === "decl")
      return new r(f);
    if (f.type === "rule")
      return new s(f);
    if (f.type === "comment")
      return new t(f);
    if (f.type === "atrule")
      return new e(f);
    throw new Error("Unknown node type: " + p.type);
  }
  return eo = l, l.default = l, eo;
}
var to, ff;
function Sh() {
  if (ff) return to;
  ff = 1;
  let { dirname: e, relative: t, resolve: r, sep: n } = dt, { SourceMapConsumer: i, SourceMapGenerator: a } = dt, { pathToFileURL: s } = dt, l = oa(), p = !!(i && a), u = !!(e && r && t && n);
  class o {
    constructor(h, d, m, y) {
      this.stringify = h, this.mapOpts = m.map || {}, this.root = d, this.opts = m, this.css = y, this.originalCSS = y, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let h;
      this.isInline() ? h = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? h = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? h = this.mapOpts.annotation(this.opts.to, this.root) : h = this.outputFile() + ".map";
      let d = `
`;
      this.css.includes(`\r
`) && (d = `\r
`), this.css += d + "/*# sourceMappingURL=" + h + " */";
    }
    applyPrevMaps() {
      for (let h of this.previous()) {
        let d = this.toUrl(this.path(h.file)), m = h.root || e(h.file), y;
        this.mapOpts.sourcesContent === !1 ? (y = new i(h.text), y.sourcesContent && (y.sourcesContent = null)) : y = h.consumer(), this.map.applySourceMap(y, d, this.toUrl(this.path(m)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let h;
          for (let d = this.root.nodes.length - 1; d >= 0; d--)
            h = this.root.nodes[d], h.type === "comment" && h.text.startsWith("# sourceMappingURL=") && this.root.removeChild(d);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), u && p && this.isMap())
        return this.generateMap();
      {
        let h = "";
        return this.stringify(this.root, (d) => {
          h += d;
        }), [h];
      }
    }
    generateMap() {
      if (this.root)
        this.generateString();
      else if (this.previous().length === 1) {
        let h = this.previous()[0].consumer();
        h.file = this.outputFile(), this.map = a.fromSourceMap(h, {
          ignoreInvalidMapping: !0
        });
      } else
        this.map = new a({
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
      this.css = "", this.map = new a({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      });
      let h = 1, d = 1, m = "<no source>", y = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      }, g, b;
      this.stringify(this.root, (v, S, O) => {
        if (this.css += v, S && O !== "end" && (y.generated.line = h, y.generated.column = d - 1, S.source && S.source.start ? (y.source = this.sourcePath(S), y.original.line = S.source.start.line, y.original.column = S.source.start.column - 1, this.map.addMapping(y)) : (y.source = m, y.original.line = 1, y.original.column = 0, this.map.addMapping(y))), b = v.match(/\n/g), b ? (h += b.length, g = v.lastIndexOf(`
`), d = v.length - g) : d += v.length, S && O !== "start") {
          let E = S.parent || { raws: {} };
          (!(S.type === "decl" || S.type === "atrule" && !S.nodes) || S !== E.last || E.raws.semicolon) && (S.source && S.source.end ? (y.source = this.sourcePath(S), y.original.line = S.source.end.line, y.original.column = S.source.end.column - 1, y.generated.line = h, y.generated.column = d - 2, this.map.addMapping(y)) : (y.source = m, y.original.line = 1, y.original.column = 0, y.generated.line = h, y.generated.column = d - 1, this.map.addMapping(y)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((h) => h.annotation) : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u")
        return this.mapOpts.inline;
      let h = this.mapOpts.annotation;
      return typeof h < "u" && h !== !0 ? !1 : this.previous().length ? this.previous().some((d) => d.inline) : !0;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((h) => h.withContent()) : !0;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(h) {
      if (this.mapOpts.absolute || h.charCodeAt(0) === 60 || /^\w+:\/\//.test(h)) return h;
      let d = this.memoizedPaths.get(h);
      if (d) return d;
      let m = this.opts.to ? e(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (m = e(r(m, this.mapOpts.annotation)));
      let y = t(m, h);
      return this.memoizedPaths.set(h, y), y;
    }
    previous() {
      if (!this.previousMaps)
        if (this.previousMaps = [], this.root)
          this.root.walk((h) => {
            if (h.source && h.source.input.map) {
              let d = h.source.input.map;
              this.previousMaps.includes(d) || this.previousMaps.push(d);
            }
          });
        else {
          let h = new l(this.originalCSS, this.opts);
          h.map && this.previousMaps.push(h.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let h = {};
      if (this.root)
        this.root.walk((d) => {
          if (d.source) {
            let m = d.source.input.from;
            if (m && !h[m]) {
              h[m] = !0;
              let y = this.usesFileUrls ? this.toFileUrl(m) : this.toUrl(this.path(m));
              this.map.setSourceContent(y, d.source.input.css);
            }
          }
        });
      else if (this.css) {
        let d = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(d, this.css);
      }
    }
    sourcePath(h) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(h.source.input.from) : this.toUrl(this.path(h.source.input.from));
    }
    toBase64(h) {
      return Buffer ? Buffer.from(h).toString("base64") : window.btoa(unescape(encodeURIComponent(h)));
    }
    toFileUrl(h) {
      let d = this.memoizedFileURLs.get(h);
      if (d) return d;
      if (s) {
        let m = s(h).toString();
        return this.memoizedFileURLs.set(h, m), m;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(h) {
      let d = this.memoizedURLs.get(h);
      if (d) return d;
      n === "\\" && (h = h.replace(/\\/g, "/"));
      let m = encodeURI(h).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(h, m), m;
    }
  }
  return to = o, to;
}
var ro, df;
function cw() {
  if (df) return ro;
  df = 1;
  const e = 39, t = 34, r = 92, n = 47, i = 10, a = 32, s = 12, l = 9, p = 13, u = 91, o = 93, f = 40, h = 41, d = 123, m = 125, y = 59, g = 42, b = 58, v = 64, S = /[\t\n\f\r "#'()/;[\\\]{}]/g, O = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, E = /.[\r\n"'(/\\]/, C = /[\da-f]/i;
  return ro = function(L, M = {}) {
    let R = L.css.valueOf(), z = M.ignoreErrors, w, P, _, A, W, j, $, H, K, Te, qe = R.length, G = 0, Oe = [], ee = [];
    function Re() {
      return G;
    }
    function We(he) {
      throw L.error("Unclosed " + he, G);
    }
    function Pe() {
      return ee.length === 0 && G >= qe;
    }
    function Se(he) {
      if (ee.length) return ee.pop();
      if (G >= qe) return;
      let ue = he ? he.ignoreUnclosed : !1;
      switch (w = R.charCodeAt(G), w) {
        case i:
        case a:
        case l:
        case p:
        case s: {
          A = G;
          do
            A += 1, w = R.charCodeAt(A);
          while (w === a || w === i || w === l || w === p || w === s);
          j = ["space", R.slice(G, A)], G = A - 1;
          break;
        }
        case u:
        case o:
        case d:
        case m:
        case b:
        case y:
        case h: {
          let xe = String.fromCharCode(w);
          j = [xe, xe, G];
          break;
        }
        case f: {
          if (Te = Oe.length ? Oe.pop()[1] : "", K = R.charCodeAt(G + 1), Te === "url" && K !== e && K !== t && K !== a && K !== i && K !== l && K !== s && K !== p) {
            A = G;
            do {
              if ($ = !1, A = R.indexOf(")", A + 1), A === -1)
                if (z || ue) {
                  A = G;
                  break;
                } else
                  We("bracket");
              for (H = A; R.charCodeAt(H - 1) === r; )
                H -= 1, $ = !$;
            } while ($);
            j = ["brackets", R.slice(G, A + 1), G, A], G = A;
          } else
            A = R.indexOf(")", G + 1), P = R.slice(G, A + 1), A === -1 || E.test(P) ? j = ["(", "(", G] : (j = ["brackets", P, G, A], G = A);
          break;
        }
        case e:
        case t: {
          W = w === e ? "'" : '"', A = G;
          do {
            if ($ = !1, A = R.indexOf(W, A + 1), A === -1)
              if (z || ue) {
                A = G + 1;
                break;
              } else
                We("string");
            for (H = A; R.charCodeAt(H - 1) === r; )
              H -= 1, $ = !$;
          } while ($);
          j = ["string", R.slice(G, A + 1), G, A], G = A;
          break;
        }
        case v: {
          S.lastIndex = G + 1, S.test(R), S.lastIndex === 0 ? A = R.length - 1 : A = S.lastIndex - 2, j = ["at-word", R.slice(G, A + 1), G, A], G = A;
          break;
        }
        case r: {
          for (A = G, _ = !0; R.charCodeAt(A + 1) === r; )
            A += 1, _ = !_;
          if (w = R.charCodeAt(A + 1), _ && w !== n && w !== a && w !== i && w !== l && w !== p && w !== s && (A += 1, C.test(R.charAt(A)))) {
            for (; C.test(R.charAt(A + 1)); )
              A += 1;
            R.charCodeAt(A + 1) === a && (A += 1);
          }
          j = ["word", R.slice(G, A + 1), G, A], G = A;
          break;
        }
        default: {
          w === n && R.charCodeAt(G + 1) === g ? (A = R.indexOf("*/", G + 2) + 1, A === 0 && (z || ue ? A = R.length : We("comment")), j = ["comment", R.slice(G, A + 1), G, A], G = A) : (O.lastIndex = G + 1, O.test(R), O.lastIndex === 0 ? A = R.length - 1 : A = O.lastIndex - 2, j = ["word", R.slice(G, A + 1), G, A], Oe.push(j), G = A);
          break;
        }
      }
      return G++, j;
    }
    function oe(he) {
      ee.push(he);
    }
    return {
      back: oe,
      endOfFile: Pe,
      nextToken: Se,
      position: Re
    };
  }, ro;
}
var no, hf;
function fw() {
  if (hf) return no;
  hf = 1;
  let e = _l(), t = aa(), r = sa(), n = ni(), i = Tl(), a = cw();
  const s = {
    empty: !0,
    space: !0
  };
  function l(u) {
    for (let o = u.length - 1; o >= 0; o--) {
      let f = u[o], h = f[3] || f[2];
      if (h) return h;
    }
  }
  class p {
    constructor(o) {
      this.input = o, this.root = new n(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: o, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(o) {
      let f = new e();
      f.name = o[1].slice(1), f.name === "" && this.unnamedAtrule(f, o), this.init(f, o[2]);
      let h, d, m, y = !1, g = !1, b = [], v = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (o = this.tokenizer.nextToken(), h = o[0], h === "(" || h === "[" ? v.push(h === "(" ? ")" : "]") : h === "{" && v.length > 0 ? v.push("}") : h === v[v.length - 1] && v.pop(), v.length === 0)
          if (h === ";") {
            f.source.end = this.getPosition(o[2]), f.source.end.offset++, this.semicolon = !0;
            break;
          } else if (h === "{") {
            g = !0;
            break;
          } else if (h === "}") {
            if (b.length > 0) {
              for (m = b.length - 1, d = b[m]; d && d[0] === "space"; )
                d = b[--m];
              d && (f.source.end = this.getPosition(d[3] || d[2]), f.source.end.offset++);
            }
            this.end(o);
            break;
          } else
            b.push(o);
        else
          b.push(o);
        if (this.tokenizer.endOfFile()) {
          y = !0;
          break;
        }
      }
      f.raws.between = this.spacesAndCommentsFromEnd(b), b.length ? (f.raws.afterName = this.spacesAndCommentsFromStart(b), this.raw(f, "params", b), y && (o = b[b.length - 1], f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++, this.spaces = f.raws.between, f.raws.between = "")) : (f.raws.afterName = "", f.params = ""), g && (f.nodes = [], this.current = f);
    }
    checkMissedSemicolon(o) {
      let f = this.colon(o);
      if (f === !1) return;
      let h = 0, d;
      for (let m = f - 1; m >= 0 && (d = o[m], !(d[0] !== "space" && (h += 1, h === 2))); m--)
        ;
      throw this.input.error(
        "Missed semicolon",
        d[0] === "word" ? d[3] + 1 : d[2]
      );
    }
    colon(o) {
      let f = 0, h, d, m;
      for (let [y, g] of o.entries()) {
        if (d = g, m = d[0], m === "(" && (f += 1), m === ")" && (f -= 1), f === 0 && m === ":")
          if (!h)
            this.doubleColon(d);
          else {
            if (h[0] === "word" && h[1] === "progid")
              continue;
            return y;
          }
        h = d;
      }
      return !1;
    }
    comment(o) {
      let f = new t();
      this.init(f, o[2]), f.source.end = this.getPosition(o[3] || o[2]), f.source.end.offset++;
      let h = o[1].slice(2, -2);
      if (/^\s*$/.test(h))
        f.text = "", f.raws.left = h, f.raws.right = "";
      else {
        let d = h.match(/^(\s*)([^]*\S)(\s*)$/);
        f.text = d[2], f.raws.left = d[1], f.raws.right = d[3];
      }
    }
    createTokenizer() {
      this.tokenizer = a(this.input);
    }
    decl(o, f) {
      let h = new r();
      this.init(h, o[0][2]);
      let d = o[o.length - 1];
      for (d[0] === ";" && (this.semicolon = !0, o.pop()), h.source.end = this.getPosition(
        d[3] || d[2] || l(o)
      ), h.source.end.offset++; o[0][0] !== "word"; )
        o.length === 1 && this.unknownWord(o), h.raws.before += o.shift()[1];
      for (h.source.start = this.getPosition(o[0][2]), h.prop = ""; o.length; ) {
        let v = o[0][0];
        if (v === ":" || v === "space" || v === "comment")
          break;
        h.prop += o.shift()[1];
      }
      h.raws.between = "";
      let m;
      for (; o.length; )
        if (m = o.shift(), m[0] === ":") {
          h.raws.between += m[1];
          break;
        } else
          m[0] === "word" && /\w/.test(m[1]) && this.unknownWord([m]), h.raws.between += m[1];
      (h.prop[0] === "_" || h.prop[0] === "*") && (h.raws.before += h.prop[0], h.prop = h.prop.slice(1));
      let y = [], g;
      for (; o.length && (g = o[0][0], !(g !== "space" && g !== "comment")); )
        y.push(o.shift());
      this.precheckMissedSemicolon(o);
      for (let v = o.length - 1; v >= 0; v--) {
        if (m = o[v], m[1].toLowerCase() === "!important") {
          h.important = !0;
          let S = this.stringFrom(o, v);
          S = this.spacesFromEnd(o) + S, S !== " !important" && (h.raws.important = S);
          break;
        } else if (m[1].toLowerCase() === "important") {
          let S = o.slice(0), O = "";
          for (let E = v; E > 0; E--) {
            let C = S[E][0];
            if (O.trim().startsWith("!") && C !== "space")
              break;
            O = S.pop()[1] + O;
          }
          O.trim().startsWith("!") && (h.important = !0, h.raws.important = O, o = S);
        }
        if (m[0] !== "space" && m[0] !== "comment")
          break;
      }
      o.some((v) => v[0] !== "space" && v[0] !== "comment") && (h.raws.between += y.map((v) => v[1]).join(""), y = []), this.raw(h, "value", y.concat(o), f), h.value.includes(":") && !f && this.checkMissedSemicolon(o);
    }
    doubleColon(o) {
      throw this.input.error(
        "Double colon",
        { offset: o[2] },
        { offset: o[2] + o[1].length }
      );
    }
    emptyRule(o) {
      let f = new i();
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
      let f = !1, h = null, d = !1, m = null, y = [], g = o[1].startsWith("--"), b = [], v = o;
      for (; v; ) {
        if (h = v[0], b.push(v), h === "(" || h === "[")
          m || (m = v), y.push(h === "(" ? ")" : "]");
        else if (g && d && h === "{")
          m || (m = v), y.push("}");
        else if (y.length === 0)
          if (h === ";")
            if (d) {
              this.decl(b, g);
              return;
            } else
              break;
          else if (h === "{") {
            this.rule(b);
            return;
          } else if (h === "}") {
            this.tokenizer.back(b.pop()), f = !0;
            break;
          } else h === ":" && (d = !0);
        else h === y[y.length - 1] && (y.pop(), y.length === 0 && (m = null));
        v = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (f = !0), y.length > 0 && this.unclosedBracket(m), f && d) {
        if (!g)
          for (; b.length && (v = b[b.length - 1][0], !(v !== "space" && v !== "comment")); )
            this.tokenizer.back(b.pop());
        this.decl(b, g);
      } else
        this.unknownWord(b);
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
    raw(o, f, h, d) {
      let m, y, g = h.length, b = "", v = !0, S, O;
      for (let E = 0; E < g; E += 1)
        m = h[E], y = m[0], y === "space" && E === g - 1 && !d ? v = !1 : y === "comment" ? (O = h[E - 1] ? h[E - 1][0] : "empty", S = h[E + 1] ? h[E + 1][0] : "empty", !s[O] && !s[S] ? b.slice(-1) === "," ? v = !1 : b += m[1] : v = !1) : b += m[1];
      if (!v) {
        let E = h.reduce((C, T) => C + T[1], "");
        o.raws[f] = { raw: E, value: b };
      }
      o[f] = b;
    }
    rule(o) {
      o.pop();
      let f = new i();
      this.init(f, o[0][2]), f.raws.between = this.spacesAndCommentsFromEnd(o), this.raw(f, "selector", o), this.current = f;
    }
    spacesAndCommentsFromEnd(o) {
      let f, h = "";
      for (; o.length && (f = o[o.length - 1][0], !(f !== "space" && f !== "comment")); )
        h = o.pop()[1] + h;
      return h;
    }
    // Errors
    spacesAndCommentsFromStart(o) {
      let f, h = "";
      for (; o.length && (f = o[0][0], !(f !== "space" && f !== "comment")); )
        h += o.shift()[1];
      return h;
    }
    spacesFromEnd(o) {
      let f, h = "";
      for (; o.length && (f = o[o.length - 1][0], f === "space"); )
        h = o.pop()[1] + h;
      return h;
    }
    stringFrom(o, f) {
      let h = "";
      for (let d = f; d < o.length; d++)
        h += o[d][1];
      return o.splice(f, o.length - f), h;
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
  return no = p, no;
}
var io, pf;
function Rl() {
  if (pf) return io;
  pf = 1;
  let e = Hr(), t = oa(), r = fw();
  function n(i, a) {
    let s = new t(i, a), l = new r(s);
    try {
      l.parse();
    } catch (p) {
      throw process.env.NODE_ENV !== "production" && p.name === "CssSyntaxError" && a && a.from && (/\.scss$/i.test(a.from) ? p.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(a.from) ? p.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(a.from) && (p.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), p;
    }
    return l.root;
  }
  return io = n, n.default = n, e.registerParse(n), io;
}
var ao, mf;
function Ah() {
  if (mf) return ao;
  mf = 1;
  class e {
    constructor(r, n = {}) {
      if (this.type = "warning", this.text = r, n.node && n.node.source) {
        let i = n.node.rangeBy(n);
        this.line = i.start.line, this.column = i.start.column, this.endLine = i.end.line, this.endColumn = i.end.column;
      }
      for (let i in n) this[i] = n[i];
    }
    toString() {
      return this.node ? this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return ao = e, e.default = e, ao;
}
var so, gf;
function Fl() {
  if (gf) return so;
  gf = 1;
  let e = Ah();
  class t {
    get content() {
      return this.css;
    }
    constructor(n, i, a) {
      this.processor = n, this.messages = [], this.root = i, this.opts = a, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(n, i = {}) {
      i.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (i.plugin = this.lastPlugin.postcssPlugin);
      let a = new e(n, i);
      return this.messages.push(a), a;
    }
    warnings() {
      return this.messages.filter((n) => n.type === "warning");
    }
  }
  return so = t, t.default = t, so;
}
var oo, yf;
function Eh() {
  if (yf) return oo;
  yf = 1;
  let e = {};
  return oo = function(r) {
    e[r] || (e[r] = !0, typeof console < "u" && console.warn && console.warn(r));
  }, oo;
}
var lo, bf;
function Ch() {
  if (bf) return lo;
  bf = 1;
  let e = Hr(), t = kl(), r = Sh(), n = Rl(), i = Fl(), a = ni(), s = na(), { isClean: l, my: p } = Pl(), u = Eh();
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
  }, h = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
  }, d = 0;
  function m(O) {
    return typeof O == "object" && typeof O.then == "function";
  }
  function y(O) {
    let E = !1, C = o[O.type];
    return O.type === "decl" ? E = O.prop.toLowerCase() : O.type === "atrule" && (E = O.name.toLowerCase()), E && O.append ? [
      C,
      C + "-" + E,
      d,
      C + "Exit",
      C + "Exit-" + E
    ] : E ? [C, C + "-" + E, C + "Exit", C + "Exit-" + E] : O.append ? [C, d, C + "Exit"] : [C, C + "Exit"];
  }
  function g(O) {
    let E;
    return O.type === "document" ? E = ["Document", d, "DocumentExit"] : O.type === "root" ? E = ["Root", d, "RootExit"] : E = y(O), {
      eventIndex: 0,
      events: E,
      iterator: 0,
      node: O,
      visitorIndex: 0,
      visitors: []
    };
  }
  function b(O) {
    return O[l] = !1, O.nodes && O.nodes.forEach((E) => b(E)), O;
  }
  let v = {};
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
      let L;
      if (typeof C == "object" && C !== null && (C.type === "root" || C.type === "document"))
        L = b(C);
      else if (C instanceof S || C instanceof i)
        L = b(C.root), C.map && (typeof T.map > "u" && (T.map = {}), T.map.inline || (T.map.inline = !1), T.map.prev = C.map);
      else {
        let M = n;
        T.syntax && (M = T.syntax.parse), T.parser && (M = T.parser), M.parse && (M = M.parse);
        try {
          L = M(C, T);
        } catch (R) {
          this.processed = !0, this.error = R;
        }
        L && !L[p] && e.rebuild(L);
      }
      this.result = new i(E, L, T), this.helpers = { ...v, postcss: v, result: this.result }, this.plugins = this.processor.plugins.map((M) => typeof M == "object" && M.prepare ? { ...M, ...M.prepare(this.result) } : M);
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
          let L = T.postcssPlugin, M = T.postcssVersion, R = this.result.processor.version, z = M.split("."), w = R.split(".");
          (z[0] !== w[0] || parseInt(z[1]) > parseInt(w[1])) && console.error(
            "Unknown error from PostCSS plugin. Your current PostCSS version is " + R + ", but " + L + " uses " + M + ". Perhaps this is the source of the error below."
          );
        }
      } catch (L) {
        console && console.error && console.error(L);
      }
      return E;
    }
    prepareVisitors() {
      this.listeners = {};
      let E = (C, T, L) => {
        this.listeners[T] || (this.listeners[T] = []), this.listeners[T].push([C, L]);
      };
      for (let C of this.plugins)
        if (typeof C == "object")
          for (let T in C) {
            if (!f[T] && /^[A-Z]/.test(T))
              throw new Error(
                `Unknown event ${T} in ${C.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!h[T])
              if (typeof C[T] == "object")
                for (let L in C[T])
                  L === "*" ? E(C, T, C[T][L]) : E(
                    C,
                    T + "-" + L.toLowerCase(),
                    C[T][L]
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
          } catch (L) {
            throw this.handleError(L);
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
              } catch (L) {
                let M = C[C.length - 1].node;
                throw this.handleError(L, M);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [C, T] of this.listeners.OnceExit) {
            this.result.lastPlugin = C;
            try {
              if (E.type === "document") {
                let L = E.nodes.map(
                  (M) => T(M, this.helpers)
                );
                await Promise.all(L);
              } else
                await T(E, this.helpers);
            } catch (L) {
              throw this.handleError(L);
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
      let L = new r(C, this.result.root, this.result.opts).generate();
      return this.result.css = L[0], this.result.map = L[1], this.result;
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
      for (let [T, L] of E) {
        this.result.lastPlugin = T;
        let M;
        try {
          M = L(C, this.helpers);
        } catch (R) {
          throw this.handleError(R, C.proxyOf);
        }
        if (C.type !== "root" && C.type !== "document" && !C.parent)
          return !0;
        if (m(M))
          throw this.getAsyncError();
      }
    }
    visitTick(E) {
      let C = E[E.length - 1], { node: T, visitors: L } = C;
      if (T.type !== "root" && T.type !== "document" && !T.parent) {
        E.pop();
        return;
      }
      if (L.length > 0 && C.visitorIndex < L.length) {
        let [R, z] = L[C.visitorIndex];
        C.visitorIndex += 1, C.visitorIndex === L.length && (C.visitors = [], C.visitorIndex = 0), this.result.lastPlugin = R;
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
      let M = C.events;
      for (; C.eventIndex < M.length; ) {
        let R = M[C.eventIndex];
        if (C.eventIndex += 1, R === d) {
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
        if (T === d)
          E.nodes && E.each((L) => {
            L[l] || this.walkSync(L);
          });
        else {
          let L = this.listeners[T];
          if (L && this.visitSync(L, E.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return S.registerPostcss = (O) => {
    v = O;
  }, lo = S, S.default = S, a.registerLazyResult(S), t.registerLazyResult(S), lo;
}
var uo, vf;
function dw() {
  if (vf) return uo;
  vf = 1;
  let e = Sh(), t = Rl();
  const r = Fl();
  let n = na(), i = Eh();
  class a {
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
      let l, p = t;
      try {
        l = p(this._css, this._opts);
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
    constructor(l, p, u) {
      p = p.toString(), this.stringified = !1, this._processor = l, this._css = p, this._opts = u, this._map = void 0;
      let o, f = n;
      this.result = new r(this._processor, o, this._opts), this.result.css = p;
      let h = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return h.root;
        }
      });
      let d = new e(f, o, this._opts, p);
      if (d.isMap()) {
        let [m, y] = d.generate();
        m && (this.result.css = m), y && (this.result.map = y);
      } else
        d.clearAnnotation(), this.result.css = d.css;
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
    then(l, p) {
      return process.env.NODE_ENV !== "production" && ("from" in this._opts || i(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(l, p);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return uo = a, a.default = a, uo;
}
var co, wf;
function hw() {
  if (wf) return co;
  wf = 1;
  let e = kl(), t = Ch(), r = dw(), n = ni();
  class i {
    constructor(s = []) {
      this.version = "8.5.3", this.plugins = this.normalize(s);
    }
    normalize(s) {
      let l = [];
      for (let p of s)
        if (p.postcss === !0 ? p = p() : p.postcss && (p = p.postcss), typeof p == "object" && Array.isArray(p.plugins))
          l = l.concat(p.plugins);
        else if (typeof p == "object" && p.postcssPlugin)
          l.push(p);
        else if (typeof p == "function")
          l.push(p);
        else if (typeof p == "object" && (p.parse || p.stringify)) {
          if (process.env.NODE_ENV !== "production")
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
        } else
          throw new Error(p + " is not a PostCSS plugin");
      return l;
    }
    process(s, l = {}) {
      return !this.plugins.length && !l.parser && !l.stringifier && !l.syntax ? new r(this, s, l) : new t(this, s, l);
    }
    use(s) {
      return this.plugins = this.plugins.concat(this.normalize([s])), this;
    }
  }
  return co = i, i.default = i, n.registerProcessor(i), e.registerProcessor(i), co;
}
var fo, xf;
function pw() {
  if (xf) return fo;
  xf = 1;
  let e = _l(), t = aa(), r = Hr(), n = Ol(), i = sa(), a = kl(), s = uw(), l = oa(), p = Ch(), u = xh(), o = ia(), f = Rl(), h = hw(), d = Fl(), m = ni(), y = Tl(), g = na(), b = Ah();
  function v(...S) {
    return S.length === 1 && Array.isArray(S[0]) && (S = S[0]), new h(S);
  }
  return v.plugin = function(O, E) {
    let C = !1;
    function T(...M) {
      console && console.warn && !C && (C = !0, console.warn(
        O + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
        O + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
      ));
      let R = E(...M);
      return R.postcssPlugin = O, R.postcssVersion = new h().version, R;
    }
    let L;
    return Object.defineProperty(T, "postcss", {
      get() {
        return L || (L = T()), L;
      }
    }), T.process = function(M, R, z) {
      return v([T(z)]).process(M, R);
    }, T;
  }, v.stringify = g, v.parse = f, v.fromJSON = s, v.list = u, v.comment = (S) => new t(S), v.atRule = (S) => new e(S), v.decl = (S) => new i(S), v.rule = (S) => new y(S), v.root = (S) => new m(S), v.document = (S) => new a(S), v.CssSyntaxError = n, v.Declaration = i, v.Container = r, v.Processor = h, v.Document = a, v.Comment = t, v.Warning = b, v.AtRule = e, v.Result = d, v.Input = l, v.Rule = y, v.Root = m, v.Node = o, p.registerPostcss(v), fo = v, v.default = v, fo;
}
var mw = pw();
const _e = /* @__PURE__ */ Xn(mw);
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
const gw = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, yw = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, bw = { key: 0 }, vw = {
  key: 1,
  class: "ml-1"
}, ww = { class: "flex w-fit flex-wrap" }, xw = {
  key: 0,
  class: "font-semibold"
}, Sw = { class: "mb-1" }, Aw = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, Ew = { class: "w-full break-words" }, Cw = { class: "mb-1 flex flex-col" }, Ow = { key: 1 }, A2 = {
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
      var i;
      return F(), B("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        U("div", gw, [
          t.itemId || t.timeStamp ? (F(), B("div", yw, [
            t.itemId ? (F(), B(Ae, { key: 0 }, [
              t.itemId.routeName ? (F(), pe(J($t), {
                key: 1,
                href: r.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: $e(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (F(), B(Ae, { key: 0 }, [
                    ke("#")
                  ], 64)) : Z("", !0),
                  ke(" " + re(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (F(), B("span", bw, [
                t.itemId.prefix || t.itemId.prefix == null ? (F(), B(Ae, { key: 0 }, [
                  ke("#")
                ], 64)) : Z("", !0),
                ke(" " + re(t.itemId.id), 1)
              ]))
            ], 64)) : Z("", !0),
            t.timeStamp ? (F(), B("span", vw, [
              t.itemId ? (F(), B(Ae, { key: 0 }, [
                ke("-")
              ], 64)) : Z("", !0),
              ke(" " + re(t.timeStamp), 1)
            ])) : Z("", !0)
          ])) : Z("", !0),
          U("div", ww, [
            (F(!0), B(Ae, null, Lt(e.pills, (a, s) => (F(), B(Ae, { key: s }, [
              a.text ? (F(), B("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: Nn({
                  backgroundColor: a.color ? a.color : null
                })
              }, re(a.text), 5)) : Z("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (F(), B(Ae, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (F(), B("p", xw, re(t.title.text), 1)) : (F(), pe(J($t), {
            key: 1,
            href: t.title.href ? t.title.href : r.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: $e(() => [
              ke(re(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Z("", !0),
        U("div", Sw, [
          t.extraText ? (F(), B("p", Aw, [
            n[0] || (n[0] = ke(" Engineer Note: ")),
            U("span", Ew, re(t.extraText), 1)
          ])) : Z("", !0)
        ]),
        U("div", Cw, [
          (F(!0), B(Ae, null, Lt(e.options, (a, s) => (F(), B(Ae, null, [
            !a.routeName && !a.href ? (F(), B("span", {
              key: 0,
              style: Nn({ color: a.color ? a.color : "#000" })
            }, re(a.text), 5)) : (F(), pe(J($t), {
              key: 1,
              href: a.href ? a.href : r.route(a.routeName, a.routeData),
              style: Nn({ color: a.color ? a.color : "#000" })
            }, {
              default: $e(() => [
                ke(re(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (i = t.amount) != null && i.amount ? (F(), B("div", Ow, [
          U("span", null, re(t.amount.text + J(Hv)(t.amount.amount)), 1)
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
const ho = /* @__PURE__ */ (() => {
  const e = {};
  let t = 1;
  return {
    set(r, n, i) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: t
      }, t++), e[r[n].id] = i;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const i = r[n];
      return i.key === n ? e[i.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const i = r[n];
      i.key === n && (delete e[i.id], delete r[n]);
    }
  };
})(), Ri = {
  setData(e, t, r) {
    ho.set(e, t, r);
  },
  getData(e, t) {
    return ho.get(e, t);
  },
  removeData(e, t) {
    ho.delete(e, t);
  }
}, Pw = 1e6, _w = 1e3, el = "transitionend", kw = (e) => e == null ? `${e}` : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Tw = (e) => {
  do
    e += Math.floor(Math.random() * Pw);
  while (document.getElementById(e));
  return e;
}, Oh = (e) => {
  let t = e.getAttribute("data-te-target");
  if (!t || t === "#") {
    let r = e.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), t = r && r !== "#" ? r.trim() : null;
  }
  return t;
}, Ph = (e) => {
  const t = Oh(e);
  return t && document.querySelector(t) ? t : null;
}, Wn = (e) => {
  const t = Oh(e);
  return t ? document.querySelector(t) : null;
}, Rw = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: r } = window.getComputedStyle(e);
  const n = Number.parseFloat(t), i = Number.parseFloat(r);
  return !n && !i ? 0 : (t = t.split(",")[0], r = r.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(r)) * _w);
}, Fw = (e) => {
  e.dispatchEvent(new Event(el));
}, _h = (e) => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"), tl = (e) => _h(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(e) : null, qi = (e, t, r) => {
  Object.keys(r).forEach((n) => {
    const i = r[n], a = t[n], s = a && _h(a) ? "element" : kw(a);
    if (!new RegExp(i).test(s))
      throw new Error(
        `${e.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`
      );
  });
}, la = (e) => {
  if (!e || e.getClientRects().length === 0)
    return !1;
  if (e.style && e.parentNode && e.parentNode.style) {
    const t = getComputedStyle(e), r = getComputedStyle(e.parentNode);
    return getComputedStyle(e).getPropertyValue("visibility") === "visible" || t.display !== "none" && r.display !== "none" && t.visibility !== "hidden";
  }
  return !1;
}, ua = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false", Iw = (e) => {
  e.offsetHeight;
}, kh = () => {
  const { jQuery: e } = window;
  return e && !document.body.hasAttribute("data-te-no-jquery") ? e : null;
}, po = [], Dw = (e) => {
  document.readyState === "loading" ? (po.length || document.addEventListener("DOMContentLoaded", () => {
    po.forEach((t) => t());
  }), po.push(e)) : e();
}, Yt = () => document.documentElement.dir === "rtl", $w = (e) => document.createElement(e), Sf = (e) => {
  typeof e == "function" && e();
}, Lw = (e, t, r = !0) => {
  if (!r) {
    Sf(e);
    return;
  }
  const n = 5, i = Rw(t) + n;
  let a = !1;
  const s = ({ target: l }) => {
    l === t && (a = !0, t.removeEventListener(el, s), Sf(e));
  };
  t.addEventListener(el, s), setTimeout(() => {
    a || Fw(t);
  }, i);
}, Nw = /[^.]*(?=\..*)\.|.*/, Mw = /\..*/, Bw = /::\d+$/, mo = {};
let Af = 1;
const qw = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, jw = /^(mouseenter|mouseleave)/i, Th = /* @__PURE__ */ new Set([
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
function Rh(e, t) {
  return t && `${t}::${Af++}` || e.uidEvent || Af++;
}
function Fh(e) {
  const t = Rh(e);
  return e.uidEvent = t, mo[t] = mo[t] || {}, mo[t];
}
function Uw(e, t) {
  return function r(n) {
    return n.delegateTarget = e, r.oneOff && Ee.off(e, n.type, t), t.apply(e, [n]);
  };
}
function zw(e, t, r) {
  return function n(i) {
    const a = e.querySelectorAll(t);
    for (let { target: s } = i; s && s !== this; s = s.parentNode)
      for (let l = a.length; l--; "")
        if (a[l] === s)
          return i.delegateTarget = s, n.oneOff && Ee.off(e, i.type, r), r.apply(s, [i]);
    return null;
  };
}
function Ih(e, t, r = null) {
  const n = Object.keys(e);
  for (let i = 0, a = n.length; i < a; i++) {
    const s = e[n[i]];
    if (s.originalHandler === t && s.delegationSelector === r)
      return s;
  }
  return null;
}
function Dh(e, t, r) {
  const n = typeof t == "string", i = n ? r : t;
  let a = $h(e);
  return Th.has(a) || (a = e), [n, i, a];
}
function Ef(e, t, r, n, i) {
  if (typeof t != "string" || !e)
    return;
  if (r || (r = n, n = null), jw.test(t)) {
    const d = (m) => function(y) {
      if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
        return m.call(this, y);
    };
    n ? n = d(n) : r = d(r);
  }
  const [a, s, l] = Dh(
    t,
    r,
    n
  ), p = Fh(e), u = p[l] || (p[l] = {}), o = Ih(
    u,
    s,
    a ? r : null
  );
  if (o) {
    o.oneOff = o.oneOff && i;
    return;
  }
  const f = Rh(
    s,
    t.replace(Nw, "")
  ), h = a ? zw(e, r, n) : Uw(e, r);
  h.delegationSelector = a ? r : null, h.originalHandler = s, h.oneOff = i, h.uidEvent = f, u[f] = h, e.addEventListener(l, h, a);
}
function rl(e, t, r, n, i) {
  const a = Ih(t[r], n, i);
  a && (e.removeEventListener(r, a, !!i), delete t[r][a.uidEvent]);
}
function Vw(e, t, r, n) {
  const i = t[r] || {};
  Object.keys(i).forEach((a) => {
    if (a.includes(n)) {
      const s = i[a];
      rl(
        e,
        t,
        r,
        s.originalHandler,
        s.delegationSelector
      );
    }
  });
}
function $h(e) {
  return e = e.replace(Mw, ""), qw[e] || e;
}
const Ee = {
  on(e, t, r, n) {
    Ef(e, t, r, n, !1);
  },
  one(e, t, r, n) {
    Ef(e, t, r, n, !0);
  },
  off(e, t, r, n) {
    if (typeof t != "string" || !e)
      return;
    const [i, a, s] = Dh(
      t,
      r,
      n
    ), l = s !== t, p = Fh(e), u = t.startsWith(".");
    if (typeof a < "u") {
      if (!p || !p[s])
        return;
      rl(
        e,
        p,
        s,
        a,
        i ? r : null
      );
      return;
    }
    u && Object.keys(p).forEach((f) => {
      Vw(
        e,
        p,
        f,
        t.slice(1)
      );
    });
    const o = p[s] || {};
    Object.keys(o).forEach((f) => {
      const h = f.replace(Bw, "");
      if (!l || t.includes(h)) {
        const d = o[f];
        rl(
          e,
          p,
          s,
          d.originalHandler,
          d.delegationSelector
        );
      }
    });
  },
  trigger(e, t, r) {
    if (typeof t != "string" || !e)
      return null;
    const n = kh(), i = $h(t), a = t !== i, s = Th.has(i);
    let l, p = !0, u = !0, o = !1, f = null;
    return a && n && (l = n.Event(t, r), n(e).trigger(l), p = !l.isPropagationStopped(), u = !l.isImmediatePropagationStopped(), o = l.isDefaultPrevented()), s ? (f = document.createEvent("HTMLEvents"), f.initEvent(i, p, !0)) : f = new CustomEvent(t, {
      bubbles: p,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((h) => {
      Object.defineProperty(f, h, {
        get() {
          return r[h];
        }
      });
    }), o && f.preventDefault(), u && e.dispatchEvent(f), f.defaultPrevented && typeof l < "u" && l.preventDefault(), f;
  }
}, Hw = "5.1.3";
class Lh {
  constructor(t) {
    t = tl(t), t && (this._element = t, Ri.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Ri.removeData(this._element, this.constructor.DATA_KEY), Ee.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, r, n = !0) {
    Lw(t, r, n);
  }
  /** Static */
  static getInstance(t) {
    return Ri.getData(tl(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, r = {}) {
    return this.getInstance(t) || new this(t, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return Hw;
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
function go(e) {
  return e === "true" ? !0 : e === "false" ? !1 : e === Number(e).toString() ? Number(e) : e === "" || e === "null" ? null : e;
}
function yo(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const we = {
  setDataAttribute(e, t, r) {
    e.setAttribute(`data-te-${yo(t)}`, r);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-te-${yo(t)}`);
  },
  getDataAttributes(e) {
    if (!e)
      return {};
    const t = {};
    return Object.keys(e.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = go(e.dataset[r]);
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
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = go(t[r]);
    }), t;
  },
  getDataAttribute(e, t) {
    return go(
      e.getAttribute(`data-te-${yo(t)}`)
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
    e && bo(t).forEach((r) => {
      e.classList.contains(r) ? e.classList.remove(r) : e.classList.add(r);
    });
  },
  addClass(e, t) {
    bo(t).forEach(
      (r) => !e.classList.contains(r) && e.classList.add(r)
    );
  },
  addStyle(e, t) {
    Object.keys(t).forEach((r) => {
      e.style[r] = t[r];
    });
  },
  removeClass(e, t) {
    bo(t).forEach(
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
function bo(e) {
  return typeof e == "string" ? e.split(" ") : Array.isArray(e) ? e : !1;
}
const Ww = 3, bt = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== Ww; )
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
      (r) => !ua(r) && la(r)
    );
  }
};
Yt();
Yt();
Yt();
Yt();
Yt();
Yt();
const vo = "collapse", Nh = "te.collapse", ca = `.${Nh}`, Cf = {
  toggle: !0,
  parent: null
}, Gw = {
  toggle: "boolean",
  parent: "(null|element)"
}, Kw = `show${ca}`, Jw = `shown${ca}`, Yw = `hide${ca}`, Xw = `hidden${ca}`, wo = "data-te-collapse-show", Of = "data-te-collapse-collapsed", Si = "data-te-collapse-collapsing", Qw = "data-te-collapse-horizontal", sn = "data-te-collapse-item", Pf = `:scope [${sn}] [${sn}]`, Zw = "width", ex = "height", tx = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", _f = "[data-te-collapse-init]", rx = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, nx = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class un extends Lh {
  constructor(t, r, n) {
    super(t), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const i = bt.find(_f);
    for (let a = 0, s = i.length; a < s; a++) {
      const l = i[a], p = Ph(l), u = bt.find(p).filter(
        (o) => o === this._element
      );
      p !== null && u.length && (this._selector = p, this._triggerArray.push(l));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Cf;
  }
  static get NAME() {
    return vo;
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
      const p = bt.find(
        Pf,
        this._config.parent
      );
      t = bt.find(
        tx,
        this._config.parent
      ).filter((u) => !p.includes(u));
    }
    const n = bt.findOne(this._selector);
    if (t.length) {
      const p = t.find((u) => n !== u);
      if (r = p ? un.getInstance(p) : null, r && r._isTransitioning)
        return;
    }
    if (Ee.trigger(this._element, Kw).defaultPrevented)
      return;
    t.forEach((p) => {
      n !== p && un.getOrCreateInstance(p, { toggle: !1 }).hide(), r || Ri.setData(p, Nh, null);
    });
    const i = this._getDimension(), a = i === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    we.removeClass(this._element, this._classes.visible), we.removeClass(this._element, this._classes.hidden), we.addClass(this._element, a), this._element.removeAttribute(sn), this._element.setAttribute(Si, ""), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, we.removeClass(this._element, this._classes.hidden), we.removeClass(this._element, a), we.addClass(this._element, this._classes.visible), this._element.removeAttribute(Si), this._element.setAttribute(sn, ""), this._element.setAttribute(wo, ""), this._element.style[i] = "", Ee.trigger(this._element, Jw);
    }, l = `scroll${i[0].toUpperCase() + i.slice(1)}`;
    this._queueCallback(s, this._element, !0), this._element.style[i] = `${this._element[l]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || Ee.trigger(this._element, Yw).defaultPrevented)
      return;
    const t = this._getDimension(), r = t === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Iw(this._element), we.addClass(this._element, r), we.removeClass(this._element, this._classes.visible), we.removeClass(this._element, this._classes.hidden), this._element.setAttribute(Si, ""), this._element.removeAttribute(sn), this._element.removeAttribute(wo);
    const n = this._triggerArray.length;
    for (let a = 0; a < n; a++) {
      const s = this._triggerArray[a], l = Wn(s);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([s], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, we.removeClass(this._element, r), we.addClass(this._element, this._classes.visible), we.addClass(this._element, this._classes.hidden), this._element.removeAttribute(Si), this._element.setAttribute(sn, ""), Ee.trigger(this._element, Xw);
    };
    this._element.style[t] = "", this._queueCallback(i, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(wo);
  }
  // Private
  _getConfig(t) {
    return t = {
      ...Cf,
      ...we.getDataAttributes(this._element),
      ...t
    }, t.toggle = !!t.toggle, t.parent = tl(t.parent), qi(vo, t, Gw), t;
  }
  _getClasses(t) {
    const r = we.getDataClassAttributes(this._element);
    return t = {
      ...rx,
      ...r,
      ...t
    }, qi(vo, t, nx), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Qw) ? Zw : ex;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = bt.find(
      Pf,
      this._config.parent
    );
    bt.find(_f, this._config.parent).filter((r) => !t.includes(r)).forEach((r) => {
      const n = Wn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(t, r) {
    t.length && t.forEach((n) => {
      r ? n.removeAttribute(Of) : n.setAttribute(`${Of}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = {};
      typeof t == "string" && /show|hide/.test(t) && (r.toggle = !1);
      const n = un.getOrCreateInstance(this, r);
      if (typeof t == "string") {
        if (typeof n[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
let kf = [];
const ix = (e, t = "hide") => {
  const r = `click.dismiss${e.EVENT_KEY}`, n = e.NAME;
  kf.includes(n) || (kf.push(n), Ee.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(i) {
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), ua(this))
        return;
      const a = Wn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      a && e.getOrCreateInstance(a)[t]();
    }
  ));
}, xo = "alert", ax = "te.alert", Mh = `.${ax}`, sx = `close${Mh}`, ox = `closed${Mh}`, Rn = "data-te-alert-show", lx = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, Tf = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, ux = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, cx = {
  fadeIn: "string",
  fadeOut: "string"
};
class ji extends Lh {
  constructor(t, r, n) {
    super(t), this._element = t, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return lx;
  }
  static get Default() {
    return Tf;
  }
  static get NAME() {
    return xo;
  }
  // Public
  close() {
    if (Ee.trigger(this._element, sx).defaultPrevented)
      return;
    let t = 0;
    this._config.animation && (t = 300, we.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Rn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, t);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Rn) && (we.removeClass(this._element, "hidden"), we.addClass(this._element, "block"), la(this._element))) {
        const t = (r) => {
          we.removeClass(this._element, "hidden"), we.addClass(this._element, "block"), Ee.off(r.target, "animationend", t);
        };
        this._element.setAttribute(Rn, ""), Ee.on(this._element, "animationend", t);
      }
      this._config.animation && (we.removeClass(this._element, this._classes.fadeOut), we.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Rn)) {
      this._element.removeAttribute(Rn);
      const t = (r) => {
        we.addClass(this._element, "hidden"), we.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), Ee.off(r.target, "animationend", t);
      };
      Ee.on(this._element, "animationend", t), we.removeClass(this._element, this._classes.fadeIn), we.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (ix(ji, "close"), this._didInit = !0);
  }
  _getConfig(t) {
    return t = {
      ...Tf,
      ...we.getDataAttributes(this._element),
      ...typeof t == "object" && t ? t : {}
    }, qi(xo, t, this.constructor.DefaultType), t;
  }
  _getClasses(t) {
    const r = we.getDataClassAttributes(this._element);
    return t = {
      ...ux,
      ...r,
      ...t
    }, qi(xo, t, cx), t;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), Ee.trigger(this._element, ox), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const r = ji.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (r[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        r[t](this);
      }
    });
  }
}
Yt(), Yt();
(() => {
  var e = { 454: (n, i, a) => {
    a.d(i, { Z: () => p });
    var s = a(645), l = a.n(s)()(function(u) {
      return u[1];
    });
    l.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const p = l;
  }, 645: (n) => {
    n.exports = function(i) {
      var a = [];
      return a.toString = function() {
        return this.map(function(s) {
          var l = i(s);
          return s[2] ? "@media ".concat(s[2], " {").concat(l, "}") : l;
        }).join("");
      }, a.i = function(s, l, p) {
        typeof s == "string" && (s = [[null, s, ""]]);
        var u = {};
        if (p)
          for (var o = 0; o < this.length; o++) {
            var f = this[o][0];
            f != null && (u[f] = !0);
          }
        for (var h = 0; h < s.length; h++) {
          var d = [].concat(s[h]);
          p && u[d[0]] || (l && (d[2] ? d[2] = "".concat(l, " and ").concat(d[2]) : d[2] = l), a.push(d));
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
          var i = function(a, s) {
            var l, p;
            return (s = s || {}).bubbles = !!s.bubbles, s.cancelable = !!s.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(a, s.bubbles, s.cancelable, s.detail), p = l.preventDefault, l.preventDefault = function() {
              p.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return !0;
                } });
              } catch {
                this.defaultPrevented = !0;
              }
            }, l;
          };
          i.prototype = window.Event.prototype, window.CustomEvent = i;
        }
    })();
  }, 379: (n, i, a) => {
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
    }(), p = [];
    function u(S) {
      for (var O = -1, E = 0; E < p.length; E++)
        if (p[E].identifier === S) {
          O = E;
          break;
        }
      return O;
    }
    function o(S, O) {
      for (var E = {}, C = [], T = 0; T < S.length; T++) {
        var L = S[T], M = O.base ? L[0] + O.base : L[0], R = E[M] || 0, z = "".concat(M, " ").concat(R);
        E[M] = R + 1;
        var w = u(z), P = { css: L[1], media: L[2], sourceMap: L[3] };
        w !== -1 ? (p[w].references++, p[w].updater(P)) : p.push({ identifier: z, updater: v(P, O), references: 1 }), C.push(z);
      }
      return C;
    }
    function f(S) {
      var O = document.createElement("style"), E = S.attributes || {};
      if (E.nonce === void 0) {
        var C = a.nc;
        C && (E.nonce = C);
      }
      if (Object.keys(E).forEach(function(L) {
        O.setAttribute(L, E[L]);
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
    var h, d = (h = [], function(S, O) {
      return h[S] = O, h.filter(Boolean).join(`
`);
    });
    function m(S, O, E, C) {
      var T = E ? "" : C.media ? "@media ".concat(C.media, " {").concat(C.css, "}") : C.css;
      if (S.styleSheet)
        S.styleSheet.cssText = d(O, T);
      else {
        var L = document.createTextNode(T), M = S.childNodes;
        M[O] && S.removeChild(M[O]), M.length ? S.insertBefore(L, M[O]) : S.appendChild(L);
      }
    }
    function y(S, O, E) {
      var C = E.css, T = E.media, L = E.sourceMap;
      if (T ? S.setAttribute("media", T) : S.removeAttribute("media"), L && typeof btoa < "u" && (C += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(L)))), " */")), S.styleSheet)
        S.styleSheet.cssText = C;
      else {
        for (; S.firstChild; )
          S.removeChild(S.firstChild);
        S.appendChild(document.createTextNode(C));
      }
    }
    var g = null, b = 0;
    function v(S, O) {
      var E, C, T;
      if (O.singleton) {
        var L = b++;
        E = g || (g = f(O)), C = m.bind(null, E, L, !1), T = m.bind(null, E, L, !0);
      } else
        E = f(O), C = y.bind(null, E, O), T = function() {
          (function(M) {
            if (M.parentNode === null)
              return !1;
            M.parentNode.removeChild(M);
          })(E);
        };
      return C(S), function(M) {
        if (M) {
          if (M.css === S.css && M.media === S.media && M.sourceMap === S.sourceMap)
            return;
          C(S = M);
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
            var L = u(E[T]);
            p[L].references--;
          }
          for (var M = o(C, O), R = 0; R < E.length; R++) {
            var z = u(E[R]);
            p[z].references === 0 && (p[z].updater(), p.splice(z, 1));
          }
          E = M;
        }
      };
    };
  } }, t = {};
  function r(n) {
    var i = t[n];
    if (i !== void 0)
      return i.exports;
    var a = t[n] = { id: n, exports: {} };
    return e[n](a, a.exports, r), a.exports;
  }
  r.n = (n) => {
    var i = n && n.__esModule ? () => n.default : () => n;
    return r.d(i, { a: i }), i;
  }, r.d = (n, i) => {
    for (var a in i)
      r.o(i, a) && !r.o(n, a) && Object.defineProperty(n, a, { enumerable: !0, get: i[a] });
  }, r.o = (n, i) => Object.prototype.hasOwnProperty.call(n, i), (() => {
    var n = r(379), i = r.n(n), a = r(454);
    function s(p) {
      if (!p.hasAttribute("autocompleted")) {
        p.setAttribute("autocompleted", "");
        var u = new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !0, detail: null });
        p.dispatchEvent(u) || (p.value = "");
      }
    }
    function l(p) {
      p.hasAttribute("autocompleted") && (p.removeAttribute("autocompleted"), p.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: !0, cancelable: !1, detail: null })));
    }
    i()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals, r(810), document.addEventListener("animationstart", function(p) {
      p.animationName === "onautofillstart" ? s(p.target) : l(p.target);
    }, !0), document.addEventListener("input", function(p) {
      p.inputType !== "insertReplacementText" && "data" in p ? l(p.target) : s(p.target);
    }, !0);
  })();
})();
Yt();
Yt();
Tw("chips-input-");
const br = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, fx = {
  line: {
    options: {
      ...br,
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
      ...br,
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
      ...br,
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
      ...br,
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
      ...br,
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
      ...br,
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
      ...br,
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
      ...br,
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
var fa = function(e) {
  this.element = e, this.handlers = {};
}, Bh = { isEmpty: { configurable: !0 } };
fa.prototype.bind = function(e, t) {
  typeof this.handlers[e] > "u" && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
};
fa.prototype.unbind = function(e, t) {
  var r = this;
  this.handlers[e] = this.handlers[e].filter(function(n) {
    return t && n !== t ? !0 : (r.element.removeEventListener(e, n, !1), !1);
  });
};
fa.prototype.unbindAll = function() {
  for (var e in this.handlers)
    this.unbind(e);
};
Bh.isEmpty.get = function() {
  var e = this;
  return Object.keys(this.handlers).every(
    function(t) {
      return e.handlers[t].length === 0;
    }
  );
};
Object.defineProperties(fa.prototype, Bh);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style;
$w("div");
const dx = (e) => {
  Dw(() => {
    const t = kh();
    if (t) {
      const r = e.NAME, n = t.fn[r];
      t.fn[r] = e.jQueryInterface, t.fn[r].Constructor = e, t.fn[r].noConflict = () => (t.fn[r] = n, e.jQueryInterface);
    }
  });
}, hx = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      r.preventDefault(), e.getOrCreateInstance(this).toggle();
    }
  );
}, px = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !ua(this) && e.getOrCreateInstance(this).show();
    }
  );
}, mx = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      const n = Wn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), ua(this))
        return;
      Ee.one(n, e.EVENT_HIDDEN, () => {
        la(this) && this.focus();
      });
      const i = bt.findOne(e.OPEN_SELECTOR);
      i && i !== n && e.getInstance(i).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, gx = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}`,
    t,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(t);
      e.getOrCreateInstance(n).toggle();
    }
  );
}, yx = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}`,
    t,
    function(r) {
      const n = Wn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ee.one(n, e.EVENT_SHOW, (a) => {
        a.defaultPrevented || Ee.one(n, e.EVENT_HIDDEN, () => {
          la(this) && this.focus();
        });
      });
      const i = bt.findOne(
        `[${e.OPEN_SELECTOR}="true"]`
      );
      i && e.getInstance(i).hide(), e.getOrCreateInstance(n).toggle(this);
    }
  );
}, bx = (e, t) => {
  Ee.one(
    document,
    "mousedown",
    t,
    e.autoInitial(new e())
  );
}, vx = (e, t) => {
  Ee.on(
    document,
    `click.te.${e.NAME}.data-api`,
    t,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = Ph(this);
      bt.find(n).forEach((i) => {
        e.getOrCreateInstance(i, { toggle: !1 }).toggle();
      });
    }
  );
}, wx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, xx = (e, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(r) {
    return new e(r);
  });
}, Sx = (e, t) => {
  bt.find(t).forEach((r) => {
    new e(r);
  }), Ee.on(
    document,
    `click.te.${e.NAME}.data-api`,
    `${t} img:not([data-te-lightbox-disabled])`,
    e.toggle()
  );
}, Ax = (e, t) => {
  const r = (a) => a[0] === "{" && a[a.length - 1] === "}" || a[0] === "[" && a[a.length - 1] === "]", n = (a) => typeof a != "string" ? a : r(a) ? JSON.parse(a.replace(/'/g, '"')) : a, i = (a) => {
    const s = {};
    return Object.keys(a).forEach((l) => {
      if (l.match(/dataset.*/)) {
        const p = l.slice(7, 8).toLowerCase().concat(l.slice(8));
        s[p] = n(a[l]);
      }
    }), s;
  };
  bt.find(t).forEach((a) => {
    if (we.getDataAttribute(a, "chart") !== "bubble" && we.getDataAttribute(a, "chart") !== "scatter") {
      const s = we.getDataAttributes(a), l = {
        data: {
          datasets: [i(s)]
        }
      };
      return s.chart && (l.type = s.chart), s.labels && (l.data.labels = JSON.parse(s.labels.replace(/'/g, '"'))), new e(a, {
        ...l,
        ...fx[l.type]
      });
    }
    return null;
  });
};
class Ex {
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
const nl = new Ex(), Ln = {
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
    advanced: Ax
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: gx
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: vx
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: hx
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: yx
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: bx
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: mx
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: px
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: wx
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: xx
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: Sx
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, Cx = (e) => Ln[e.NAME] || null, Ox = (e, t) => {
  if (!e || !t.allowReinits && nl.isInited(e.NAME))
    return;
  nl.add(e.NAME);
  const r = Cx(e), n = (r == null ? void 0 : r.isToggler) || !1;
  if (dx(e), r != null && r.advanced) {
    r == null || r.advanced(e, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(e, r == null ? void 0 : r.selector);
    return;
  }
  bt.find(r == null ? void 0 : r.selector).forEach((i) => {
    let a = e.getInstance(i);
    a || (a = new e(i), r != null && r.onInit && a[r.onInit]());
  });
}, Px = (e, t) => {
  e.forEach((r) => Ox(r, t));
}, _x = {
  allowReinits: !1,
  checkOtherImports: !1
}, kx = (e, t = {}) => {
  t = { ..._x, ...t };
  const r = Object.keys(Ln).map((n) => {
    if (document.querySelector(Ln[n].selector)) {
      const i = e[Ln[n].name];
      return !i && !nl.isInited(n) && t.checkOtherImports && console.warn(
        `Please import ${Ln[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), i;
    }
  });
  Px(r, t);
}, Tx = { role: "alert" }, Rx = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-xs data-te-alert-show:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, E2 = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(e) {
    return Ct(() => {
      kx({ Alert: ji });
    }), (t, r) => (F(), B("div", Tx, [
      U("div", null, [
        U("div", Rx, [
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
}, Fx = ["aria-controls"], Ix = {
  class: "text-primary hover:text-primary-700 text-xs leading-normal font-semibold uppercase",
  type: "button"
}, Dx = ["id"], $x = {
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
    const t = e, r = de(null), n = de(null), i = de(t.open);
    Ct(() => {
      n.value = new un(r.value, {
        toggle: t.open
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (s, l) => (F(), B("div", {
      class: te(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !e.header }])
    }, [
      U("div", {
        class: te(["bg-white sm:rounded-lg", { "p-1": !e.header }])
      }, [
        U("div", {
          onClick: a,
          class: "focusable block! cursor-pointer rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": e.header ? e.header.replaceAll(" ", "_") : "collapsable",
          style: Nn({ backgroundColor: e.headerColor })
        }, [
          ke(re(e.header) + " ", 1),
          U("button", Ix, re(i.value ? "Hide" : "Show"), 1)
        ], 12, Fx),
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
        ], 8, Dx)
      ], 2)
    ], 2));
  }
}, Lx = { class: "relative" }, C2 = {
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
      a.value && s.key === "Escape" && (a.value = !1);
    };
    Ct(() => document.addEventListener("keydown", r)), dn(() => document.removeEventListener("keydown", r));
    const n = fe(() => isNaN(parseInt(t.width)) ? t.width : "w-" + t.width), i = fe(() => t.align === "left" ? "origin-top-left left-0" : t.align === "right" ? "origin-top-right right-0" : "origin-top"), a = de(!1);
    return (s, l) => (F(), B("div", Lx, [
      U("div", {
        onClick: l[0] || (l[0] = (p) => a.value = !a.value)
      }, [
        Q(s.$slots, "trigger")
      ]),
      vt(U("div", {
        class: "fixed inset-0 z-40",
        onClick: l[1] || (l[1] = (p) => a.value = !1)
      }, null, 512), [
        [Sr, a.value]
      ]),
      De(qr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: $e(() => [
          vt(U("div", {
            class: te(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, i.value]]),
            style: { display: "none" },
            onClick: l[2] || (l[2] = (p) => a.value = !1)
          }, [
            U("div", {
              class: te(["rounded ring-1 ring-black ring-opacity-5", e.contentClasses])
            }, [
              Q(s.$slots, "content")
            ], 2)
          ], 2), [
            [Sr, a.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, O2 = {
  __name: "DropdownLink",
  setup(e) {
    return (t, r) => (F(), pe(J($t), { class: "focusable block w-full cursor-pointer px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden" }, {
      default: $e(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}, Nx = ["href", "target"], P2 = {
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
    return (n, i) => e.href && (e.method || e.data) ? (F(), pe(J($t), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: te(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: $e(() => [
        Q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (F(), B("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: te(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      Q(n.$slots, "default")
    ], 10, Nx));
  }
}, Mx = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, Bx = ["id"], qx = ["aria-labelledby"], _2 = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(e) {
    return (t, r) => (F(), B("div", Mx, [
      U("button", {
        class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
        type: "button",
        id: e.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        ke(re(e.title) + " ", 1),
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
      ], 8, Bx),
      U("ul", {
        class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
        "aria-labelledby": e.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        Q(t.$slots, "default")
      ], 8, qx)
    ]));
  }
}, jx = ["href"], k2 = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(e) {
    return (t, r) => (F(), B("li", null, [
      U("a", {
        class: "focusable inline-flex w-full cursor-pointer items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href,
        "data-te-dropdown-item-ref": ""
      }, re(e.title), 9, jx)
    ]));
  }
}, T2 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, r) => (F(), pe(J($x), { header: e.header }, {
      default: $e(() => [
        De(J(nS), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, Ux = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, zx = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, Vx = {
  key: 0,
  class: "text-center"
}, Hx = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, Wx = { class: "flex-start w-full md:flex" }, Gx = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, Kx = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, Jx = { class: "mb-1 flex justify-between" }, Yx = { class: "text-sm text-neutral-500" }, Xx = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, Qx = {
  key: 1,
  class: "text-sm text-primary-500"
}, Zx = { class: "text-sm text-neutral-500" }, eS = { class: "font-medium" }, tS = {
  key: 0,
  class: "line-through"
}, rS = ["innerHTML"], nS = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return Jn.add(wg, jo, Sg, yg, xg), (t, r) => e.logs == null ? (F(), B("div", Ux, [
      De(J(Uh))
    ])) : (F(), B("div", zx, [
      e.logs.total ? (F(), B("ol", Hx, [
        (F(!0), B(Ae, null, Lt(e.logs.data, (n) => (F(), B("li", {
          key: n.id
        }, [
          U("div", Wx, [
            U("div", Gx, [
              De(J(Wt), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            U("div", Kx, [
              U("div", Jx, [
                U("span", Yx, [
                  ke(re(n.event_formatted) + " ", 1),
                  n.reference ? (F(), B("span", Xx, re(n.reference), 1)) : Z("", !0),
                  n.causer ? (F(), B(Ae, { key: 1 }, [
                    n.causer.id ? (F(), pe(J($t), {
                      key: 0,
                      href: t.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: $e(() => [
                        ke(" (" + re(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (F(), B("span", Qx, "(" + re(n.causer.first_name) + ")", 1))
                  ], 64)) : Z("", !0)
                ]),
                U("span", Zx, re(n.created_date_full), 1)
              ]),
              (F(!0), B(Ae, null, Lt(n.changes_formatted, (i, a) => (F(), B("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                U("span", eS, re(a) + ":", 1),
                i.old ? (F(), B("span", tS, re(i.old), 1)) : Z("", !0),
                ke(" " + re(i.new), 1)
              ]))), 128)),
              n.description_details ? (F(), B("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, rS)) : Z("", !0)
            ])
          ])
        ]))), 128))
      ])) : (F(), B("p", Vx, "No Data")),
      e.logs.links ? (F(), pe(J(qh), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Z("", !0)
    ]));
  }
}, R2 = {
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
    xr(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const i = () => {
      r.closeable && n("close");
    }, a = (l) => {
      l.key === "Escape" && r.show && i();
    };
    Ct(() => document.addEventListener("keydown", a)), dn(() => {
      document.removeEventListener("keydown", a), document.body.style.overflow = null;
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
    return (l, p) => (F(), pe(Xh, { to: "body" }, [
      De(qr, { "leave-active-class": "duration-200" }, {
        default: $e(() => [
          vt(U("div", {
            class: te(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            De(qr, {
              "enter-active-class": "backdrop-transition enter ease-out duration-[200ms]",
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": "backdrop-transition leave ease-in duration-[200ms]",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: $e(() => [
                vt(U("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: i
                }, p[0] || (p[0] = [
                  U("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1)
                ]), 512), [
                  [Sr, e.show]
                ])
              ]),
              _: 1
            }),
            De(qr, {
              "enter-active-class": "modal-transition enter ease-out duration-[200ms]",
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": "modal-transition leave ease-in duration-[200ms]",
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: $e(() => [
                vt(U("div", {
                  class: te(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", s.value + (e.showBorder ? " border-pink rounded-md border-2 border-solid" : "")])
                }, [
                  e.show ? Q(l.$slots, "default", { key: 0 }) : Z("", !0)
                ], 2), [
                  [Sr, e.show]
                ])
              ]),
              _: 3
            })
          ], 2), [
            [Sr, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, iS = { class: "ml-3 flex-1 whitespace-nowrap" }, F2 = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(e) {
    const t = e, r = fe(
      () => t.active ? "focusable flex cursor-pointer items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, i) => (F(), pe(J($t), {
      href: e.href,
      class: te(r.value)
    }, {
      default: $e(() => [
        Q(n.$slots, "icon"),
        U("span", iS, [
          Q(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, aS = {
  key: 0,
  class: "flex justify-center"
}, sS = { "aria-label": "Page navigation" }, oS = ["innerHTML"], lS = ["innerHTML", "onClick"], qh = {
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
    const r = t, n = e, i = fe(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const s = n.links[0], l = n.links[n.links.length - 1], p = n.links.findIndex((f) => f.active);
      let u = Math.max(1, p - Math.floor(n.maxPagesToShow / 2)), o = Math.min(n.links.length - 2, u + n.maxPagesToShow - 1);
      return o - u < n.maxPagesToShow - 1 && (u = Math.max(1, o - n.maxPagesToShow + 1)), [s, ...n.links.slice(u, o + 1), l];
    }), a = (s) => {
      r("change", s);
    };
    return (s, l) => i.value.length > 3 ? (F(), B("div", aS, [
      U("nav", sS, [
        U("ul", {
          class: te(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (F(!0), B(Ae, null, Lt(i.value, (p, u) => (F(), B("li", { key: u }, [
            e.linkReturn ? (F(), B(Ae, { key: 0 }, [
              p.url === null ? (F(), B("button", {
                key: 0,
                class: te(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: p.label,
                onClick: l[0] || (l[0] = (o) => a(""))
              }, null, 10, oS)) : (F(), B("button", {
                key: 1,
                class: te(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: p.active && e.customActiveLinkClass
                }]),
                innerHTML: p.label,
                onClick: (o) => a(p.url)
              }, null, 10, lS))
            ], 64)) : (F(), B(Ae, { key: 1 }, [
              p.url === null ? (F(), pe(J($t), {
                key: 0,
                class: te(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: p.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (F(), pe(J($t), {
                key: 1,
                class: te(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": p.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: p.active && e.customActiveLinkClass
                }]),
                href: p.url,
                innerHTML: p.label,
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
}, uS = ["type", "disabled"], jh = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(e) {
    return (t, r) => (F(), B("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 inline-flex cursor-pointer items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Q(t.$slots, "default")
    ], 8, uS));
  }
}, cS = ["type", "disabled"], I2 = {
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
    return (t, r) => (F(), B("button", {
      type: e.type,
      disabled: e.disabled,
      class: "focusable inline-flex cursor-pointer items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      Q(t.$slots, "default")
    ], 8, cS));
  }
}, D2 = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(e) {
    const t = e, r = fe(
      () => t.active ? "focusable block cursor-pointer w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block cursor-pointer w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, i) => (F(), pe(J($t), {
      href: e.href,
      class: te(r.value)
    }, {
      default: $e(() => [
        Q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, fS = ["type"], $2 = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(e) {
    return (t, r) => (F(), B("button", {
      type: e.type,
      class: "focusable focus:ring-accent-500 inline-flex cursor-pointer items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-gray-700 uppercase shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:opacity-25"
    }, [
      Q(t.$slots, "default")
    ], 8, fS));
  }
}, dS = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, hS = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, L2 = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(e) {
    return (t, r) => (F(), B("div", {
      class: te(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !e.header, "overflow-hidden": e.overflow }])
    }, [
      U("div", {
        class: te(["sm:rounded-lg", { "p-1": !e.header }])
      }, [
        e.header ? (F(), B("div", dS, [
          U("span", null, re(e.header), 1),
          t.$slots.headerButton ? (F(), B("div", hS, [
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
}, pS = {}, mS = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
};
function gS(e, t) {
  return F(), B("div", mS, t[0] || (t[0] = [
    U("span", { class: "absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!" }, "Loading...", -1)
  ]));
}
const Uh = /* @__PURE__ */ pn(pS, [["render", gS]]), yS = ["onClick"], bS = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, N2 = {
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
    const r = t, n = e, i = (s) => {
      a(s) && (s = null), r("updateSearch", s);
    }, a = (s) => n.statusName != null ? route().params[n.statusName] == s : route().params.status == s;
    return (s, l) => (F(), B("div", null, [
      U("div", {
        class: te(["flex flex-wrap gap-2 lg:flex-nowrap", { [e.customContainerClass]: e.customContainerClass }])
      }, [
        (F(!0), B(Ae, null, Lt(e.stats, (p) => (F(), B("div", {
          class: te(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": a(p.name),
            [e.customStatClass]: e.customStatClass
          }]),
          onClick: (u) => i(p.name),
          key: p.value
        }, [
          U("div", null, [
            U("div", bS, [
              U("h5", {
                class: te(["text-xl font-medium leading-tight text-neutral-800", { [e.customStatValueClass]: e.customStatValueClass }])
              }, re(p.value), 3)
            ])
          ]),
          U("div", {
            class: te(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [e.customStatLabelClass]: e.customStatLabelClass }])
          }, re(p.label ?? p.name), 3)
        ], 10, yS))), 128))
      ], 2)
    ]));
  }
}, M2 = {
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
    const r = e, n = t, i = de([]), a = de(1), s = de(!0), l = de(0), p = de(""), u = de(((y = r.form) == null ? void 0 : y[r.field]) || r.modelValue), o = de(u.value), f = de(null), h = (g) => {
      o.value = u.value, u.value = g, n("update:modelValue", g), g || (d(""), f.value = null);
    }, d = (g) => {
      g == "" && u.value && u.value !== o.value || (a.value = 1, l.value = 0, p.value = g, m());
    }, m = async (g = !1) => {
      const b = new URLSearchParams();
      b.append("term", p.value), b.append("page", a.value), r.queryParams && Object.keys(r.queryParams).forEach((O) => {
        b.append(O, r.queryParams[O]);
      }), g && u.value && b.append("ajax_id", u.value);
      const S = await (await fetch(`${r.url}?${b.toString()}`)).json();
      if (s.value = S.current_page < S.last_page, a.value === 1) {
        if (i.value = S.data, u.value) {
          const O = i.value.find((E) => E[r.optionValue] == u.value);
          f.value = O ? O[r.optionText] : null;
        }
        return;
      }
      i.value = i.value.concat(S.data);
    };
    return Ct(() => {
      m(!0);
      const g = document.getElementById(r.id).parentNode.querySelector(".menu");
      g == null || g.addEventListener(
        "scroll",
        (b) => {
          b.target.scrollTop > l.value && b.target.scrollTop + b.target.clientHeight >= b.target.scrollHeight && s.value && (a.value++, m());
        },
        {
          passive: !0
        }
      );
    }), (g, b) => (F(), pe(J(Ly), {
      id: e.id,
      label: e.label,
      list: i.value,
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
      "onUpdate:modelValue": b[0] || (b[0] = (v) => h(v)),
      onSearchchange: d,
      filterPredicate: (v, S) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
}, vS = ["id", "aria-controls"], wS = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, xS = ["id"], SS = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(e) {
    const t = e, r = de(null), n = de(null), i = de(t.show);
    Ct(() => {
      n.value = new un(r.value, {
        toggle: t.show
      });
    });
    const a = () => {
      n.value.toggle(), i.value = !i.value;
    };
    return (s, l) => (F(), B("li", null, [
      U("button", {
        id: e.name,
        onClick: a,
        class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": e.name ? e.name.replaceAll(" ", "_") : "collapsable"
      }, [
        Q(s.$slots, "icon", {}, void 0, !0),
        U("span", wS, re(e.name), 1),
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
      ], 8, vS),
      U("ul", {
        class: "visible! hidden space-y-1 px-4",
        id: e.name ? e.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        Q(s.$slots, "default", {}, void 0, !0)
      ], 8, xS)
    ]));
  }
}, B2 = /* @__PURE__ */ pn(SS, [["__scopeId", "data-v-2270be7c"]]), AS = {}, ES = { class: "border-t border-gray-100" }, CS = { class: "divide-y divide-gray-100" };
function OS(e, t) {
  return F(), B("div", ES, [
    U("dl", CS, [
      Q(e.$slots, "default")
    ])
  ]);
}
const q2 = /* @__PURE__ */ pn(AS, [["render", OS]]), PS = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, _S = { class: "flex items-center text-sm font-medium" }, kS = {
  key: 0,
  class: "ml-1 text-red-500"
}, TS = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, RS = { class: "flex min-h-full items-center" }, FS = { class: "grow slot-content" }, IS = { class: "ml-4 shrink-0" }, DS = { class: "grow slot-edit" }, $S = { class: "ml-4 shrink-0" }, j2 = {
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
    Jn.add(jo, hu);
    const t = e, r = de(t.editable ? t.forceEditing : !1), n = () => {
      t.editable && (r.value = !r.value);
    };
    return xr(() => t.forceEditing, (i) => {
      t.editable && (r.value = i);
    }), (i, a) => (F(), B("div", PS, [
      U("dt", _S, [
        ke(re(e.label) + " ", 1),
        Q(i.$slots, "label"),
        e.required ? (F(), B("span", kS, "*")) : Z("", !0)
      ]),
      U("dd", TS, [
        U("div", RS, [
          r.value ? (F(), B(Ae, { key: 1 }, [
            U("div", DS, [
              Q(i.$slots, "edit")
            ]),
            U("span", $S, [
              U("button", {
                type: "button",
                onClick: n,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                De(J(Wt), { icon: J(hu) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (F(), B(Ae, { key: 0 }, [
            U("div", FS, [
              Q(i.$slots, "default"),
              ke(" " + re(e.value), 1)
            ]),
            U("span", IS, [
              e.editable ? (F(), B("button", {
                key: 0,
                type: "button",
                onClick: n,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                De(J(Wt), { icon: J(jo) }, null, 8, ["icon"])
              ])) : Z("", !0),
              Q(i.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var So = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Rf;
function LS() {
  return Rf || (Rf = 1, function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", i = n ? window : {};
      i.JS_MD5_NO_WINDOW && (n = !1);
      var a = !n && typeof self == "object", s = !i.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? i = Dt : a && (i = self);
      var l = !i.JS_MD5_NO_COMMON_JS && !0 && e.exports, p = !i.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", u = "0123456789abcdef".split(""), o = [128, 32768, 8388608, -2147483648], f = [0, 8, 16, 24], h = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], y;
      if (p) {
        var g = new ArrayBuffer(68);
        y = new Uint8Array(g), m = new Uint32Array(g);
      }
      var b = Array.isArray;
      (i.JS_MD5_NO_NODE_JS || !b) && (b = function(w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      });
      var v = ArrayBuffer.isView;
      p && (i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !v) && (v = function(w) {
        return typeof w == "object" && w.buffer && w.buffer.constructor === ArrayBuffer;
      });
      var S = function(w) {
        var P = typeof w;
        if (P === "string")
          return [w, !0];
        if (P !== "object" || w === null)
          throw new Error(t);
        if (p && w.constructor === ArrayBuffer)
          return [new Uint8Array(w), !1];
        if (!b(w) && !v(w))
          throw new Error(t);
        return [w, !1];
      }, O = function(w) {
        return function(P) {
          return new M(!0).update(P)[w]();
        };
      }, E = function() {
        var w = O("hex");
        s && (w = C(w)), w.create = function() {
          return new M();
        }, w.update = function(A) {
          return w.create().update(A);
        };
        for (var P = 0; P < h.length; ++P) {
          var _ = h[P];
          w[_] = O(_);
        }
        return w;
      }, C = function(w) {
        var P = dt, _ = dt.Buffer, A;
        _.from && !i.JS_MD5_NO_BUFFER_FROM ? A = _.from : A = function(j) {
          return new _(j);
        };
        var W = function(j) {
          if (typeof j == "string")
            return P.createHash("md5").update(j, "utf8").digest("hex");
          if (j == null)
            throw new Error(t);
          return j.constructor === ArrayBuffer && (j = new Uint8Array(j)), b(j) || v(j) || j.constructor === _ ? P.createHash("md5").update(A(j)).digest("hex") : w(j);
        };
        return W;
      }, T = function(w) {
        return function(P, _) {
          return new R(P, !0).update(_)[w]();
        };
      }, L = function() {
        var w = T("hex");
        w.create = function(A) {
          return new R(A);
        }, w.update = function(A, W) {
          return w.create(A).update(W);
        };
        for (var P = 0; P < h.length; ++P) {
          var _ = h[P];
          w[_] = T(_);
        }
        return w;
      };
      function M(w) {
        if (w)
          m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = y;
        else if (p) {
          var P = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(P), this.blocks = new Uint32Array(P);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      M.prototype.update = function(w) {
        if (this.finalized)
          throw new Error(r);
        var P = S(w);
        w = P[0];
        for (var _ = P[1], A, W = 0, j, $ = w.length, H = this.blocks, K = this.buffer8; W < $; ) {
          if (this.hashed && (this.hashed = !1, H[0] = H[16], H[16] = H[1] = H[2] = H[3] = H[4] = H[5] = H[6] = H[7] = H[8] = H[9] = H[10] = H[11] = H[12] = H[13] = H[14] = H[15] = 0), _)
            if (p)
              for (j = this.start; W < $ && j < 64; ++W)
                A = w.charCodeAt(W), A < 128 ? K[j++] = A : A < 2048 ? (K[j++] = 192 | A >>> 6, K[j++] = 128 | A & 63) : A < 55296 || A >= 57344 ? (K[j++] = 224 | A >>> 12, K[j++] = 128 | A >>> 6 & 63, K[j++] = 128 | A & 63) : (A = 65536 + ((A & 1023) << 10 | w.charCodeAt(++W) & 1023), K[j++] = 240 | A >>> 18, K[j++] = 128 | A >>> 12 & 63, K[j++] = 128 | A >>> 6 & 63, K[j++] = 128 | A & 63);
            else
              for (j = this.start; W < $ && j < 64; ++W)
                A = w.charCodeAt(W), A < 128 ? H[j >>> 2] |= A << f[j++ & 3] : A < 2048 ? (H[j >>> 2] |= (192 | A >>> 6) << f[j++ & 3], H[j >>> 2] |= (128 | A & 63) << f[j++ & 3]) : A < 55296 || A >= 57344 ? (H[j >>> 2] |= (224 | A >>> 12) << f[j++ & 3], H[j >>> 2] |= (128 | A >>> 6 & 63) << f[j++ & 3], H[j >>> 2] |= (128 | A & 63) << f[j++ & 3]) : (A = 65536 + ((A & 1023) << 10 | w.charCodeAt(++W) & 1023), H[j >>> 2] |= (240 | A >>> 18) << f[j++ & 3], H[j >>> 2] |= (128 | A >>> 12 & 63) << f[j++ & 3], H[j >>> 2] |= (128 | A >>> 6 & 63) << f[j++ & 3], H[j >>> 2] |= (128 | A & 63) << f[j++ & 3]);
          else if (p)
            for (j = this.start; W < $ && j < 64; ++W)
              K[j++] = w[W];
          else
            for (j = this.start; W < $ && j < 64; ++W)
              H[j >>> 2] |= w[W] << f[j++ & 3];
          this.lastByteIndex = j, this.bytes += j - this.start, j >= 64 ? (this.start = j - 64, this.hash(), this.hashed = !0) : this.start = j;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, M.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var w = this.blocks, P = this.lastByteIndex;
          w[P >>> 2] |= o[P & 3], P >= 56 && (this.hashed || this.hash(), w[0] = w[16], w[16] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0), w[14] = this.bytes << 3, w[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, M.prototype.hash = function() {
        var w, P, _, A, W, j, $ = this.blocks;
        this.first ? (w = $[0] - 680876937, w = (w << 7 | w >>> 25) - 271733879 << 0, A = (-1732584194 ^ w & 2004318071) + $[1] - 117830708, A = (A << 12 | A >>> 20) + w << 0, _ = (-271733879 ^ A & (w ^ -271733879)) + $[2] - 1126478375, _ = (_ << 17 | _ >>> 15) + A << 0, P = (w ^ _ & (A ^ w)) + $[3] - 1316259209, P = (P << 22 | P >>> 10) + _ << 0) : (w = this.h0, P = this.h1, _ = this.h2, A = this.h3, w += (A ^ P & (_ ^ A)) + $[0] - 680876936, w = (w << 7 | w >>> 25) + P << 0, A += (_ ^ w & (P ^ _)) + $[1] - 389564586, A = (A << 12 | A >>> 20) + w << 0, _ += (P ^ A & (w ^ P)) + $[2] + 606105819, _ = (_ << 17 | _ >>> 15) + A << 0, P += (w ^ _ & (A ^ w)) + $[3] - 1044525330, P = (P << 22 | P >>> 10) + _ << 0), w += (A ^ P & (_ ^ A)) + $[4] - 176418897, w = (w << 7 | w >>> 25) + P << 0, A += (_ ^ w & (P ^ _)) + $[5] + 1200080426, A = (A << 12 | A >>> 20) + w << 0, _ += (P ^ A & (w ^ P)) + $[6] - 1473231341, _ = (_ << 17 | _ >>> 15) + A << 0, P += (w ^ _ & (A ^ w)) + $[7] - 45705983, P = (P << 22 | P >>> 10) + _ << 0, w += (A ^ P & (_ ^ A)) + $[8] + 1770035416, w = (w << 7 | w >>> 25) + P << 0, A += (_ ^ w & (P ^ _)) + $[9] - 1958414417, A = (A << 12 | A >>> 20) + w << 0, _ += (P ^ A & (w ^ P)) + $[10] - 42063, _ = (_ << 17 | _ >>> 15) + A << 0, P += (w ^ _ & (A ^ w)) + $[11] - 1990404162, P = (P << 22 | P >>> 10) + _ << 0, w += (A ^ P & (_ ^ A)) + $[12] + 1804603682, w = (w << 7 | w >>> 25) + P << 0, A += (_ ^ w & (P ^ _)) + $[13] - 40341101, A = (A << 12 | A >>> 20) + w << 0, _ += (P ^ A & (w ^ P)) + $[14] - 1502002290, _ = (_ << 17 | _ >>> 15) + A << 0, P += (w ^ _ & (A ^ w)) + $[15] + 1236535329, P = (P << 22 | P >>> 10) + _ << 0, w += (_ ^ A & (P ^ _)) + $[1] - 165796510, w = (w << 5 | w >>> 27) + P << 0, A += (P ^ _ & (w ^ P)) + $[6] - 1069501632, A = (A << 9 | A >>> 23) + w << 0, _ += (w ^ P & (A ^ w)) + $[11] + 643717713, _ = (_ << 14 | _ >>> 18) + A << 0, P += (A ^ w & (_ ^ A)) + $[0] - 373897302, P = (P << 20 | P >>> 12) + _ << 0, w += (_ ^ A & (P ^ _)) + $[5] - 701558691, w = (w << 5 | w >>> 27) + P << 0, A += (P ^ _ & (w ^ P)) + $[10] + 38016083, A = (A << 9 | A >>> 23) + w << 0, _ += (w ^ P & (A ^ w)) + $[15] - 660478335, _ = (_ << 14 | _ >>> 18) + A << 0, P += (A ^ w & (_ ^ A)) + $[4] - 405537848, P = (P << 20 | P >>> 12) + _ << 0, w += (_ ^ A & (P ^ _)) + $[9] + 568446438, w = (w << 5 | w >>> 27) + P << 0, A += (P ^ _ & (w ^ P)) + $[14] - 1019803690, A = (A << 9 | A >>> 23) + w << 0, _ += (w ^ P & (A ^ w)) + $[3] - 187363961, _ = (_ << 14 | _ >>> 18) + A << 0, P += (A ^ w & (_ ^ A)) + $[8] + 1163531501, P = (P << 20 | P >>> 12) + _ << 0, w += (_ ^ A & (P ^ _)) + $[13] - 1444681467, w = (w << 5 | w >>> 27) + P << 0, A += (P ^ _ & (w ^ P)) + $[2] - 51403784, A = (A << 9 | A >>> 23) + w << 0, _ += (w ^ P & (A ^ w)) + $[7] + 1735328473, _ = (_ << 14 | _ >>> 18) + A << 0, P += (A ^ w & (_ ^ A)) + $[12] - 1926607734, P = (P << 20 | P >>> 12) + _ << 0, W = P ^ _, w += (W ^ A) + $[5] - 378558, w = (w << 4 | w >>> 28) + P << 0, A += (W ^ w) + $[8] - 2022574463, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, _ += (j ^ P) + $[11] + 1839030562, _ = (_ << 16 | _ >>> 16) + A << 0, P += (j ^ _) + $[14] - 35309556, P = (P << 23 | P >>> 9) + _ << 0, W = P ^ _, w += (W ^ A) + $[1] - 1530992060, w = (w << 4 | w >>> 28) + P << 0, A += (W ^ w) + $[4] + 1272893353, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, _ += (j ^ P) + $[7] - 155497632, _ = (_ << 16 | _ >>> 16) + A << 0, P += (j ^ _) + $[10] - 1094730640, P = (P << 23 | P >>> 9) + _ << 0, W = P ^ _, w += (W ^ A) + $[13] + 681279174, w = (w << 4 | w >>> 28) + P << 0, A += (W ^ w) + $[0] - 358537222, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, _ += (j ^ P) + $[3] - 722521979, _ = (_ << 16 | _ >>> 16) + A << 0, P += (j ^ _) + $[6] + 76029189, P = (P << 23 | P >>> 9) + _ << 0, W = P ^ _, w += (W ^ A) + $[9] - 640364487, w = (w << 4 | w >>> 28) + P << 0, A += (W ^ w) + $[12] - 421815835, A = (A << 11 | A >>> 21) + w << 0, j = A ^ w, _ += (j ^ P) + $[15] + 530742520, _ = (_ << 16 | _ >>> 16) + A << 0, P += (j ^ _) + $[2] - 995338651, P = (P << 23 | P >>> 9) + _ << 0, w += (_ ^ (P | ~A)) + $[0] - 198630844, w = (w << 6 | w >>> 26) + P << 0, A += (P ^ (w | ~_)) + $[7] + 1126891415, A = (A << 10 | A >>> 22) + w << 0, _ += (w ^ (A | ~P)) + $[14] - 1416354905, _ = (_ << 15 | _ >>> 17) + A << 0, P += (A ^ (_ | ~w)) + $[5] - 57434055, P = (P << 21 | P >>> 11) + _ << 0, w += (_ ^ (P | ~A)) + $[12] + 1700485571, w = (w << 6 | w >>> 26) + P << 0, A += (P ^ (w | ~_)) + $[3] - 1894986606, A = (A << 10 | A >>> 22) + w << 0, _ += (w ^ (A | ~P)) + $[10] - 1051523, _ = (_ << 15 | _ >>> 17) + A << 0, P += (A ^ (_ | ~w)) + $[1] - 2054922799, P = (P << 21 | P >>> 11) + _ << 0, w += (_ ^ (P | ~A)) + $[8] + 1873313359, w = (w << 6 | w >>> 26) + P << 0, A += (P ^ (w | ~_)) + $[15] - 30611744, A = (A << 10 | A >>> 22) + w << 0, _ += (w ^ (A | ~P)) + $[6] - 1560198380, _ = (_ << 15 | _ >>> 17) + A << 0, P += (A ^ (_ | ~w)) + $[13] + 1309151649, P = (P << 21 | P >>> 11) + _ << 0, w += (_ ^ (P | ~A)) + $[4] - 145523070, w = (w << 6 | w >>> 26) + P << 0, A += (P ^ (w | ~_)) + $[11] - 1120210379, A = (A << 10 | A >>> 22) + w << 0, _ += (w ^ (A | ~P)) + $[2] + 718787259, _ = (_ << 15 | _ >>> 17) + A << 0, P += (A ^ (_ | ~w)) + $[9] - 343485551, P = (P << 21 | P >>> 11) + _ << 0, this.first ? (this.h0 = w + 1732584193 << 0, this.h1 = P - 271733879 << 0, this.h2 = _ - 1732584194 << 0, this.h3 = A + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + w << 0, this.h1 = this.h1 + P << 0, this.h2 = this.h2 + _ << 0, this.h3 = this.h3 + A << 0);
      }, M.prototype.hex = function() {
        this.finalize();
        var w = this.h0, P = this.h1, _ = this.h2, A = this.h3;
        return u[w >>> 4 & 15] + u[w & 15] + u[w >>> 12 & 15] + u[w >>> 8 & 15] + u[w >>> 20 & 15] + u[w >>> 16 & 15] + u[w >>> 28 & 15] + u[w >>> 24 & 15] + u[P >>> 4 & 15] + u[P & 15] + u[P >>> 12 & 15] + u[P >>> 8 & 15] + u[P >>> 20 & 15] + u[P >>> 16 & 15] + u[P >>> 28 & 15] + u[P >>> 24 & 15] + u[_ >>> 4 & 15] + u[_ & 15] + u[_ >>> 12 & 15] + u[_ >>> 8 & 15] + u[_ >>> 20 & 15] + u[_ >>> 16 & 15] + u[_ >>> 28 & 15] + u[_ >>> 24 & 15] + u[A >>> 4 & 15] + u[A & 15] + u[A >>> 12 & 15] + u[A >>> 8 & 15] + u[A >>> 20 & 15] + u[A >>> 16 & 15] + u[A >>> 28 & 15] + u[A >>> 24 & 15];
      }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
        this.finalize();
        var w = this.h0, P = this.h1, _ = this.h2, A = this.h3;
        return [
          w & 255,
          w >>> 8 & 255,
          w >>> 16 & 255,
          w >>> 24 & 255,
          P & 255,
          P >>> 8 & 255,
          P >>> 16 & 255,
          P >>> 24 & 255,
          _ & 255,
          _ >>> 8 & 255,
          _ >>> 16 & 255,
          _ >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255
        ];
      }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
        this.finalize();
        var w = new ArrayBuffer(16), P = new Uint32Array(w);
        return P[0] = this.h0, P[1] = this.h1, P[2] = this.h2, P[3] = this.h3, w;
      }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
        for (var w, P, _, A = "", W = this.array(), j = 0; j < 15; )
          w = W[j++], P = W[j++], _ = W[j++], A += d[w >>> 2] + d[(w << 4 | P >>> 4) & 63] + d[(P << 2 | _ >>> 6) & 63] + d[_ & 63];
        return w = W[j], A += d[w >>> 2] + d[w << 4 & 63] + "==", A;
      };
      function R(w, P) {
        var _, A = S(w);
        if (w = A[0], A[1]) {
          var W = [], j = w.length, $ = 0, H;
          for (_ = 0; _ < j; ++_)
            H = w.charCodeAt(_), H < 128 ? W[$++] = H : H < 2048 ? (W[$++] = 192 | H >>> 6, W[$++] = 128 | H & 63) : H < 55296 || H >= 57344 ? (W[$++] = 224 | H >>> 12, W[$++] = 128 | H >>> 6 & 63, W[$++] = 128 | H & 63) : (H = 65536 + ((H & 1023) << 10 | w.charCodeAt(++_) & 1023), W[$++] = 240 | H >>> 18, W[$++] = 128 | H >>> 12 & 63, W[$++] = 128 | H >>> 6 & 63, W[$++] = 128 | H & 63);
          w = W;
        }
        w.length > 64 && (w = new M(!0).update(w).array());
        var K = [], Te = [];
        for (_ = 0; _ < 64; ++_) {
          var qe = w[_] || 0;
          K[_] = 92 ^ qe, Te[_] = 54 ^ qe;
        }
        M.call(this, P), this.update(Te), this.oKeyPad = K, this.inner = !0, this.sharedMemory = P;
      }
      R.prototype = new M(), R.prototype.finalize = function() {
        if (M.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var w = this.array();
          M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(w), M.prototype.finalize.call(this);
        }
      };
      var z = E();
      z.md5 = z, z.md5.hmac = L(), l ? e.exports = z : i.md5 = z;
    })();
  }(So)), So.exports;
}
var NS = LS();
const MS = ["src", "alt"], U2 = {
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
    const t = e, r = fe(() => NS.md5(t.email.trim().toLowerCase())), n = fe(() => `https://www.gravatar.com/avatar/${r.value}?s=${t.size}`), i = fe(() => `Gravatar for ${t.email}`);
    return (a, s) => (F(), B("img", {
      src: n.value,
      alt: i.value
    }, null, 8, MS));
  }
}, z2 = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, r) => (F(), pe(nw, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id,
      class: "cursor-pointer"
    }, {
      default: $e(() => [
        Q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, V2 = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  E2 as Alert,
  qS as Checkbox,
  $x as CollapsableSection,
  $x as CollapsibleSection,
  I2 as DangerButton,
  q2 as DescriptionList,
  j2 as DescriptionListItem,
  C2 as Dropdown,
  O2 as DropdownLink,
  zS as DropdownSearchbar,
  m2 as FileDropZoneInput,
  U2 as GravatarImg,
  g2 as Images,
  jS as Input,
  Yn as InputError,
  yl as InputLabel,
  P2 as LinkButton,
  _2 as LinkDropdownButton,
  k2 as LinkDropdownButtonItem,
  T2 as Logs,
  nS as LogsContent,
  R2 as Modal,
  B2 as NavCollapse,
  F2 as NavLink,
  qh as Pagination,
  jh as PrimaryButton,
  y2 as RadioButton,
  D2 as ResponsiveNavLink,
  Ly as SearchSelect,
  $2 as SecondaryButton,
  L2 as Section,
  M2 as Select2ajax,
  Uh as Spinner,
  N2 as Stats,
  Hc as SubmitButton,
  b2 as Table,
  A2 as TableItemCard,
  nw as Td,
  z2 as TdCollapseHandler,
  Bg as TextInput,
  US as Textarea,
  w2 as Th,
  v2 as Thead,
  S2 as TrCollapse,
  x2 as TrCollapseHandler,
  V2 as default,
  ei as getInertiaRouter,
  h2 as hasPermission,
  Hv as moneyFormat,
  d2 as numberFormat,
  p2 as setInertiaRouter
};
