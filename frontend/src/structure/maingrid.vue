<template>
  <div class="reset-this">
    <section @click="changeStore" class="grid-layout">
      <div class="main-area">
        <div class="section float-left container-fluid pl-3">
          <mainContent-view></mainContent-view>
        </div>
      </div>
      <div class="top-nav2">
        <secondNav-view></secondNav-view>
      </div>

      <div class="sidebar--left">
        <leftnav-view></leftnav-view>
      </div>

      <!-- <div class="sidebar sidebar--right">
        <rightNav-view></rightNav-view>
      </div>-->
      <header>
        <topNav-view></topNav-view>
      </header>
      <footer>
        <footer-view></footer-view>
      </footer>
    </section>
  </div>
</template>


<script>
import leftNav from "./left-nav.vue";
import rightNav from "./right-nav.vue";
import topNav from "./topNav.vue";
import secondNav from "./secondNav.vue";
import mainContent from "./main-content.vue";
import footer from "./footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    "leftnav-view": leftNav,
    "rightNav-view": rightNav,
    "topNav-view": topNav,
    "secondNav-view": secondNav,
    "mainContent-view": mainContent,
    "footer-view": footer
  },
  methods: {
    changeStore() {
      this.$store.commit("invertSidebar");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_main/main-grid.scss";
@import "../assets/scss/_main/main-grid-styling.scss";
</style>