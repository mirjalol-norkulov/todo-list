import Vue from "vue";
import constants from "@/constants";

const Constants = {
  install(Vue) {
    Vue.prototype.$constants = constants;
  },
};

Vue.use(Constants);
