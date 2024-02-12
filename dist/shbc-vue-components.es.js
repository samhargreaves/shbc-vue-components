import { openBlock as l, createElementBlock as s } from "vue";
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, r] of o)
    e[c] = r;
  return e;
}, p = {};
function a(t, o) {
  return l(), s("button", null, "Click me");
}
const f = /* @__PURE__ */ _(p, [["render", a]]), n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: f
}, Symbol.toStringTag, { value: "Module" })), u = {
  install(t) {
    for (const o in n)
      t.component(o, n[o]);
  }
};
export {
  f as Button,
  u as default
};
