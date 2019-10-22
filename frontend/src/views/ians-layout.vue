<template>
  <div class="reset-this">
    <div id="main-layout">
      <div class="sticky-nav">
        <stickynavbar-view></stickynavbar-view>
      </div>
      <div class="header-nav">
        <div id="main-flex1">
          <div class="hamburger">Hamburger Icon</div>
          <div class="breadcrumb">
            <breadcrumbs-view></breadcrumbs-view>
          </div>
        </div>
        <div id="main-flex2">
          <div class="pills">
            <headernav-view></headernav-view>
          </div>
          <div class="userdata">User Data Here</div>
        </div>
      </div>
      <div class="aside-nav">
        <leftnav-view></leftnav-view>
      </div>
      <div class="logo-area">Datacom Business Systems</div>
      <div class="main-content">
        Main content area
        <table-vue></table-vue>
      </div>
      <div class="footer-section">Footer Needs to stick to bottom of screen</div>
    </div>
  </div>
</template>

<script>
import leftNav from "../structure/left-nav.vue";
import table from "../components/table.vue";

import headerNav from "../structure/nav.vue";
import Breadcrumbs from "../components/breadcrumbs.vue";

export default {
  data() {
    return {};
  },
  components: {
    "table-vue": table,

    "headernav-view": headerNav,
    "leftnav-view": leftNav,
    "breadcrumbs-view": Breadcrumbs
  }
};
</script>

<style scoped>
/* mobile grid */
#main-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 5px;
  max-width: 720px;
  margin: 0 auto;
  grid-template-areas:
    "nav nav nav nav nav"
    "header header header header header"
    "aside aside aside aside aside"
    "main main main main main"
    "footer footer footer footer footer";
}
/* desktop grid */
@media screen and (min-width: 760px) {
  #main-layout {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 5px;
    max-width: 1920px;
    margin: 0 auto;
    grid-template-areas:
      "snav snav snav snav snav"
      "logo headnav headnav headnav headnav"
      "asidenav main main main main"
      "asidenav main main main main"
      "asidenav main main main main"
      "asidenav main main main main"
      "asidenav main main main main"
      "asidenav footer footer footer footer";
  }
}

#main-layout > * {
  padding: 0px;
  margin: 0px;
  background: #e5f8ff;
  padding: 30px;
}
.sticky-nav {
  grid-area: snav;
}
.header-nav {
  grid-area: headnav;
}
.aside-nav {
  grid-area: asidenav;
}
.main-content {
  grid-area: main;
}
.logo-area {
  grid-area: logo;
}
.footer-section {
  grid-area: footer;
}
#main-flex1 {
  padding: 0px;
  margin: 0px;
  display: flex;
}
#main-flex2 {
  padding: 0px;
  margin: 0px;
  display: flex;
}
div.breadcrumb {
  flex: 1;
  order: 2;
  justify-content: right;
}
div.pills {
  flex: 1;
  order: 2;
}
div.hamburger {
  flex: 1;
  order: 1;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
div.pagedata {
  flex: 1;
  order: 2;
}
div.userdata {
  flex: 1;
  order: 3;
}
div {
  border: 1px solid;
}
</style>
