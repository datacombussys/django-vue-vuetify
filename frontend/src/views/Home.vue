<template>
  <div>
    <maingrid-view></maingrid-view>
  </div>
</template>


<script>
import mainGrid from "../structure/maingrid.vue";

export default {
  data() {
    return {};
  },
  components: {
    "maingrid-view": mainGrid
  }
};
</script>


<style>
</style>
