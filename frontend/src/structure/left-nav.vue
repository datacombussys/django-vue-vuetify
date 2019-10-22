<template>
  <div class="reset-this">
    <nav :class="{'collapsedsb': toggleSB}" class="main-nav bg-primary">
      <div class="sidebar-header">
        <h3>My SIDEBAR</h3>
      </div>
      <div class="bg-primary nav-menu-list">
        <ul class="list-unstyled components">
          <p class="text-white">Welcome First-name</p>
          <!-- Using Collapse Bootstrap element -->
          <li class="active">
            <b-button variant="link" v-b-toggle="'collapse-1'" class="m-1 nav-link">User Dashboard</b-button>
            <b-collapse id="collapse-1">
              <b-card>
                <ul class="nav-submenu">
                  <li>
                    <a href="#">home1</a>
                  </li>
                  <li>
                    <a href="#">home2</a>
                  </li>
                  <li>
                    <a href="#">home3</a>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </li>
          <!-- End First Collapse -->
          <!-- Using Collapse Bootstrap element -->
          <li class="active">
            <b-button variant="link" v-b-toggle="'collapse-2'" class="m-1 nav-link">My Applications</b-button>
            <b-collapse id="collapse-2">
              <b-card>
                <ul class="nav-submenu">
                  <li>
                    <a href="#">home1</a>
                  </li>
                  <li>
                    <a href="#">home2</a>
                  </li>
                  <li>
                    <a href="#">home3</a>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </li>
          <!-- End Second Collapse -->
          <!-- Using Collapse Bootstrap element -->
          <li class="active">
            <b-button variant="link" v-b-toggle="'collapse-3'" class="m-1 nav-link">Message Center</b-button>
            <b-collapse id="collapse-3">
              <b-card>
                <ul class="nav-submenu">
                  <li>
                    <a href="#">home1</a>
                  </li>
                  <li>
                    <a href="#">home2</a>
                  </li>
                  <li>
                    <a href="#">home3</a>
                  </li>
                </ul>
              </b-card>
            </b-collapse>
          </li>
          <!-- End Third Collapse -->
        </ul>
        <div class="nav-menu-list">
          <ul class="list-unstyled CTAs">
            <li>
              <a href="#" class="download">Download code</a>
            </li>
            <li>
              <a href="#" class="article">article</a>
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
    return {
      data123: false
    };
  },
  computed: {
    toggleSB() {
      return this.$store.getters.sidebarToggle;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_main/main-grid-styling.scss";
@import "../assets/scss/_main/main-grid.scss";
</style>