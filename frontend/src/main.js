import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

// import consolidated css including bootsrap
import "./assets/scss/main.css";

//Popper
import "popper.js/dist/popper.js";

//Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

// jquery
global.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueAxios,
  axios,
  // vuetify,
  render: h => h(App)
}).$mount("#app");
