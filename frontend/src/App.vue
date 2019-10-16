<template>
  <v-app>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
import BootNav from "./structure/nav.vue";
import Footerbar from "./structure/footer.vue";
import Navbar from "./structure/navbar.vue";

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


<style lang="scss" scoped>
@import "./assets/css/global.css";
</style>
