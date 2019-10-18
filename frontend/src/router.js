import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Users from "./modules/users/views/Users.vue";
import UsersDash from "./modules/users/views/dashboard.vue";

import HomeView from "./views/homeview.vue";
import Ian from "./views/ians-layout.vue";
import loginView from "./views/login-register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: loginView
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      // import(/* webpackChunkName: "about" */ "./views/login-register.vue")
    },
    // Users Module - Routes
    {
      path: "/users",
      component: Users,
      children: [
        {
          name: "route",
          path: "/users/dash",
          component: UsersDash
        }
      ]
    },
    {
      path: "/hv",
      name: "hv",
      component: HomeView
    },
    {
      path: "/ian",
      name: "ian",
      component: Ian
    }
  ]
});
