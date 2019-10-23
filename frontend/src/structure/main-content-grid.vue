<template>
  <div class="main-dash-grid">
    <div class="dash-infobar">
      <userDashInfo-view></userDashInfo-view>
    </div>
    <div class="dash-charting">
      <userDashInfo-view></userDashInfo-view>
    </div>
    <div class="dash-main">
      <userDashInfo-view></userDashInfo-view>
    </div>
    <div class="dash-bottom">
      <userDashInfo-view></userDashInfo-view>
    </div>
  </div>
</template>

<script>
import userDash from "../modules/users/views/dashboard.vue";
export default {
  data() {
    return {};
  },
  components: {
    "userDashInfo-view": userDash
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_main/main-content-grid.scss";
</style>