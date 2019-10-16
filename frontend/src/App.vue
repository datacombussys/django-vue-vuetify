<template>
  <v-app>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
import BootNav from "./components/nav.vue";
import Footerbar from "./components/footer.vue";
import Navbar from "./components/navbar.vue";

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
