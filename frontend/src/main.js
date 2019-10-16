import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

// import 'bootstrap/dist/js/bootstrap'
import "bootstrap";

// import plugins individually - require exports-loader
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tooltip";

// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/scss/bootstrap.scss";

// import { CollapsePlugin } from "bootstrap-vue";
// Vue.use(CollapsePlugin);

// jquery
global.$ = $;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount("#app");
