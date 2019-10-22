<template>
  <div>
    <maingrid-view></maingrid-view>
  </div>
</template>


<script>
import mainView from "./views/newhome.vue";
import mainGrid from "./structure/maingrid.vue";

export default {
  data() {
    return {};
  },
  components: {
    "main-view": mainView,
    "maingrid-view": mainGrid
  }
};
</script>


<style lang="scss">
</style>
