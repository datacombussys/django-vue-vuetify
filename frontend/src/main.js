import Vue from "vue";
import "./plugins/axios";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

//Popper
import "popper.js/dist/popper.js";

//Axios
// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);
// Vue.prototype.$axios = axios;
import "./plugins/axios.js";

//Import Buefy
import "./plugins/buefy.js";

//filters
import VueFilters from "./plugins/filters.js";

// import MAIN SCSS SASS and LESS files

import "./assets/less/main.less";
import "./assets/sass/main.sass";
import "./assets/scss/main.scss";

// import Ant-Design-Vue
import "./plugins/ant-design-vue.js";

//Import Framework7 Components
import Framework7 from "framework7/framework7.esm.bundle.js";
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";

// Import Icons and App Custom Styles
import "./css/icons.css";
import "./css/app.css";

Framework7.use(Framework7Vue);

// jquery
import $ from "jquery";
global.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // VueAxios,
  // axios,
  // VueFilters,
  // vuetify,
  render: h => h(App)
}).$mount("#app");
