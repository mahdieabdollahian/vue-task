import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import HttpService from "@/services/http.services";
import store from "./store";
import i18n from "./utils/i18n";
import "./assets/scss/globalStyle.scss";

HttpService.init();
createApp(App).use(router).use(store).use(i18n).mount("#app");
