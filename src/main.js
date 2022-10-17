import { createApp } from "vue";
import App from "./App.vue";
import "../public/assets/style/style.css";
import router from "./router";

createApp(App).use(router).mount("#app");
