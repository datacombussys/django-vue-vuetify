<template>
  <div class="container-fluid p-0">
    <div class="fixed-top">
      <top-header-view></top-header-view>
    </div>
    <div class="pt-2">
      <nav-content></nav-content>
    </div>
    <div class="fixed-bottom">
      <footer-view></footer-view>
    </div>
  </div>
</template>

<script>
import topHeader from "../structure/topheader.vue";
import navContent from "../structure/newdrawer.vue";
import footer from "../structure/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    "top-header-view": topHeader,
    "nav-content": navContent,
    "footer-view": footer
  }
};
</script>

<style lang="scss" scoped>
</style>