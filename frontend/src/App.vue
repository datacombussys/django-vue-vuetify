<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
import BootNav from "./structure/nav.vue";
import Footerbar from "./structure/footer.vue";
import Navbar from "./structure/stickyHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    "headerbar-view": BootNav,
    "navbar-view": Navbar
  }
};
</script>


<style lang="scss">
</style>
