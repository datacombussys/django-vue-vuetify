<template>
  <div class="reset-this">
    <div class="user-table">
      <h3>Blog Articles</h3>
      <div v-for="blog in blogs" v-bind:key="blog.id">
        <h2>Blog Title: {{ blog.title }}</h2>
        <p>Blog Content: {{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  create() {
    this.$store.dispatch("fetchBlogs");
  },

  beforeMount() {
    this.blogs = this.$store.getters.getBlogs;
    console.log(this.blogs, "userblogs Computed");
    return this.$store.getters.getBlogs;
  }
};
</script>

<style lang="scss">
</style>