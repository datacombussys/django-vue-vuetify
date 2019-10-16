<template>
  <div class="reset-this">
    <div id="main-layout">
      <div class="sticky-nav">
        <stickynavbar-view></stickynavbar-view>
      </div>
      <div class="header-nav">
        <headernav-view></headernav-view>
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
import leftNav from "../components/left-nav.vue";
import table from "../components/table.vue";
import stickyNav from "../components/navbar.vue";
import headerNav from "../components/nav.vue";

export default {
  data() {
    return {};
  },
  components: {
    "table-vue": table,
    "stickynavbar-view": stickyNav,
    "headernav-view": headerNav,
    "leftnav-view": leftNav
  }
};
</script>

<style scoped>
@import "../assets/css/global.css";

body {
  color: rgb(0, 0, 0);
  font-family: "Nunito Semibold";
  text-align: center;
}
/* mobile grid */
#main-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
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
    grid-auto-rows: minmax(100px, auto);
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
  background: #c1ebfc;
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
</style>
