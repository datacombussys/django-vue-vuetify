<template>
  <div>
    <h3>Router-Links Below</h3>
    <router-view />
    <router-view name="userdash-view" />
    <router-view name="usertest-view" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>