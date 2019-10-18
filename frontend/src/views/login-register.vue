<template>
  <div class="clearfix">
    <div
      id="full-height"
      class="d-flex flex-column justify-content-center align-items-center bg-image"
    >
      <div>
        <h1>Welcome!</h1>
        <hr />
        <br />
      </div>
      <div>
        <loginTabs-view></loginTabs-view>
      </div>
    </div>
  </div>
</template>
<script>
import loginTabs from "../components/login-register-tabs.vue";

export default {
  data() {
    return {};
  },
  components: {
    "loginTabs-view": loginTabs
  }
};
</script>

<style lang="scss" scoped>
</style>