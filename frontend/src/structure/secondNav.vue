<template>
  <div class="reset-this">
    <b-navbar class="navbar2">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
             
        <b-button @click="callStorefunc()"
        size="is-small"
        icon-left="menu" 
        inverted>
        Toggle Me
        </b-button>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-warning">
                        <strong>Profile</strong>
                    </a>
                    <a class="button is-light">
                        Status
                    </a>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
    
    </div> 
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