import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Particles from "vue3-particles";
import Flicking from "@egjs/vue3-flicking";

import "@egjs/flicking/dist/flicking.css"; // Supports IE10+, using CSS flex

createApp(App).use(Flicking).use(Particles).mount("#app");
