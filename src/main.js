import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Particles
import Particles from "vue3-particles";
// Flicking
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css"; // Supports IE10+, using CSS flex

// Create app
createApp(App).use(Flicking).use(Particles).mount("#app");