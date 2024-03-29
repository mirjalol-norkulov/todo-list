import Vue from "vue";

import "./plugins/constants";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "tailwindcss/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
