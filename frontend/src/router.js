import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Grid from "./structure/maingrid.vue";
import mainContent from "./structure/main-content.vue";

import tableView from "./components/table.vue";
import Users from "./modules/users/views/userBlogs.vue";
import UsersDash from "./modules/users/views/sample-content.vue";
import dashBoardTemplate from "./modules/users/views/user-dash-grid.vue";
import userCRUD from "./modules/users/views/user-crud.vue";
import loginView from "./views/login-register.vue";

import dataTable from "./components/datatables/bootstrapTable.vue";

import testPage from "./modules/test/testpage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "home",
      path: "/",
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
      path: "/user",
      component: Home,
      children: [
        {
          path: "table",
          component: dataTable
        },
        {
          path: "test",
          component: testPage
        },
        {
          path: "dash",
          component: dashBoardTemplate
        },
        {
          path: "crud",
          component: userCRUD
        }
      ]
    },
    {
      name: "ian",
      path: "/ian",
      component: dataTable
    }
  ]
});

//Children Nested Format
// {
//   path: "/users",
//   component: Home,
//   children: [
//     {
//       name: "saas-view",
//       path: "/users/dash",
//       component: saas
//     }
//   ]
// },
