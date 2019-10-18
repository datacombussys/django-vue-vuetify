<template>
  <div class="reset-this">
    <div class="fixed-top">
      <stickyHeader-view></stickyHeader-view>
    </div>
    <div class="pt-2">
      <drawer-view></drawer-view>
    </div>
    <div class="fixed-bottom">
      <footer-view></footer-view>
    </div>
  </div>
</template>

<script>
import drawerNav from "../structure/navdrawer.vue";
import sHeader from "../structure/stickyHeader.vue";
import footer from "../structure/footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    "drawer-view": drawerNav,
    "stickyHeader-view": sHeader,
    "footer-view": footer
  }
};
</script>

<style>
@import "../assets/scss/_main/_skeleton.scss";
</style>