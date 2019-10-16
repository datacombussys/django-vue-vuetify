<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <p>This is the Home View. again</p>
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <p class="bgbg">This is new test text for CSS actually SCSS</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_modules/_custom.scss";
</style>