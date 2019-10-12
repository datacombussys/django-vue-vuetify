<template>
  <div class="root">
    <v-app>
      <header-view></header-view>

      <router-view></router-view>
    </v-app>
  </div>
</template>


<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
import flatheader from "./components/flatheader.vue";

export default {
  data() {
    return {};
  },
  components: {
    "header-view": Header
  }
};
</script>


<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
