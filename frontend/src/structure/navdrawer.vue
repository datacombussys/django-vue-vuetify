<template>
  <div class="wrapper pt-5">
    <!--Sidebar -->
    <nav id="sidebar" v-bind:class="collapseSidebar" class="bg-primary">
      <div class="sidebar-header bg-info">
        <h3>BOOTSTRAP SIDEBAR</h3>
      </div>
      <div class="bg-primary">
        <ul class="list-unstyled components">
          <p class="text-white">Application Nav</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >Home</a>
            <ul id="homeSubmenu" class="collapse">
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
          </li>

          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >Page</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">page1</a>
              </li>
              <li>
                <a href="#">page2</a>
              </li>
              <li>
                <a href="#">page3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a href="#" class="download">Download code</a>
          </li>
          <li>
            <a href="#" class="article">article</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button type="button" id="sidebarCollapse" v-on:click="active=!active" class="btn btn-info">
          <i class="fa fa-align-justify"></i>
          <span>Toggle Sidebar</span>
        </button>
        <!--<a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled text-white">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="main-content container-fluid pl-3">
        <button @click="counter">Click Me</button>
        <p>Count: {{ count }}</p>
        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="line"></div>
        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="line"></div>
        <div class="line"></div>
      </section>
    </div>
    <!--END CONTENT -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: true,
      count: 0
    };
  },
  computed: {
    "loginTabs-view": loginTabs
  },
  methods: {
    counter: function() {
      this.count += 1;
    }
  },
  mounted: {
    collapseSidebar: function() {
      return {
        active: this.active
      };
    }
  }
};
</script>

<script>
export default {};
</script>



<style scoped>
@import "../assets/scss/_main/_drawer.scss";
</style>