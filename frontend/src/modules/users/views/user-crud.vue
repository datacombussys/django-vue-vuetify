<template>
  <div class="user-crud-grid">
    <div class="top-row-data">
      <div class="dash-top">
        <userDashInfo-view></userDashInfo-view>
      </div>
    </div>
    <div class="main-section-row">
      <div class="dash-left"></div>
      <div class="dash-right">
        <!-- <userBlogTable-view></userBlogTable-view> -->
        <userBlogBuefy-view></userBlogBuefy-view>
      </div>
    </div>
    <div class="bottom-row">
      <div class="dash-bottom">
        <!-- <userBlogTemplate-view></userBlogTemplate-view> -->
        <userDashInfo-view></userDashInfo-view>
      </div>
    </div>
  </div>
</template>

<script>
import userBlogTable from "../../../modules/users/views/user-blog-table.vue";
import userSample from "../../../modules/users/views/sample-content.vue";
import userBlogTemplate from "../../../modules/users/views/userBlogs.vue";
// import userBlogForm from "../../../modules/users/views/userBlogForm.vue";
import userBlogBuefy from "../../../modules/users/views/user-blog-table-buefy.vue";

export default {
  data() {
    return {};
  },
  components: {
    "userBlogTable-view": userBlogTable,
    "userDashInfo-view": userSample,
    "userBlogTemplate-view": userBlogTemplate,
    // "userBlogForm-view": userBlogForm,
    "userBlogBuefy-view": userBlogBuefy
  }
};
</script>

<style lang="scss">
@import "../../../assets/scss/_main/user-crud.scss";
</style>