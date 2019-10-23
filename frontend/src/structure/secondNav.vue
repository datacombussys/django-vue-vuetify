<template>
  <div class="reset-this">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-0">
      <div class="d-flex flex-row">
        <button @click="callStorefunc()" type="button" class="btn btn-info">
          <span>Toggle Sidebar</span>
        </button>
        <div id="navbarNav" class="justify-content-end">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-white" to="/home/test">Dashboard</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-white" to="/home/saas">SAAS</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-white" disabled to="/">TestPage</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    callStorefunc() {
      this.$store.commit("invertSidebar");
    }
  }
};
</script>

<style lang="scss">
</style>