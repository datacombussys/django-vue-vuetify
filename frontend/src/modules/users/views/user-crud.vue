<template>
  <div class="user-crud-grid">
    <div class="top-row-data">
      <div class="dash-top">
        <userDashInfo-view></userDashInfo-view>
      </div>
    </div>
    <div class="main-section-row">
      <div class="dash-left">
        <userBlogForm-view></serBlogForm-view>
      </div>
      <div class="dash-right">
        <userBlogTable-view></userBlogTable-view>
      </div>
    </div>
    <div class="bottom-row">
      <div class="dash-bottom">
        <userDashInfo-view></userDashInfo-view>
      </div>
    </div>
  </div>
</template>

<script>
import userBlogTable from "../../../modules/users/views/userBlogs.vue";
import userDash from "../../../modules/users/views/sample-content.vue";
import userBlogForm from "../../../modules/users/views/userBlogs.vue";

export default {
  data() {
    return {};
  },
  components: {
    "userBlog-view": userBlogTable,
    "userDashInfo-view": userDash,
    "userBlogForm-view": userBlogForm
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/_main/user-crud.scss";
</style>