import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Particles
import Particles from "vue3-particles";
// Flicking
import Flicking from "@egjs/vue3-flicking";
import "@egjs/flicking/dist/flicking.css"; // Supports IE10+, using CSS flex
// Countdown
import VueCountdown from '@chenfengyuan/vue-countdown';

// Create app
createApp(App).use(Flicking).use(Particles).mount("#app");