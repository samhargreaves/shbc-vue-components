import { createApp } from "vue";
import Test from "./Test.vue";
import "./main.css";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/atom-one-dark.css";

const app = createApp(Test);
app.use(VueHighlightJS);
app.mount("#app");
