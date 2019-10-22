<template>
  <div class="wrapper pt-5">
    <!--Sidebar -->
    <nav id="sidebar" class="bg-primary">
      <div class="sidebar-header bg-info">
        <h3>My SIDEBAR</h3>
      </div>
      <div class="bg-primary">
        <ul class="list-unstyled components">
          <p class="text-white">Welcome {First_Name}</p>
          <!-- Using Collapse Bootstrap element -->
          <li class="active">
            <b-button variant="link" v-b-toggle="'collapse-1'" class="m-1 nav-link">User Dashboard</b-button>
            <b-collapse id="collapse-1">
              <b-card>
                <ul id="homeSubmenu" class>
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
                <ul id="homeSubmenu" class>
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
            <b-button variant="link" v-b-toggle="'collapse-3'" class="m-1 nav-link">Message Center</b-button>
            <b-collapse id="collapse-3">
              <b-card>
                <ul id="homeSubmenu" class>
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
    <div id="navbar2" class="content-fluid w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-0">
        <div class="d-flex flex-row">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
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
      <div class="section float-left container-fluid pl-3">
        <section>
          <button @click="counter">Click Me</button>
          <p>Count: {{ count }}</p>
          <p>this is where rthe router links go</p>
          <div class="line"></div>
          <router-view name="home-view"></router-view>
          <router-view name="saas-view"></router-view>
          <router-view name="test-view"></router-view>
        </section>
      </div>
    </div>
    <!--END CONTENT -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    counter: function() {
      this.count += 1;
    }
  }
};
</script>



<style lang="scss">
@import "../assets/scss/_main/drawer.scss";
</style>