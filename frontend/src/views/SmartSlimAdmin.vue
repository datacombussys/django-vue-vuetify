<template>
  <div class="reset-this">
    <!-- BEGIN Page Wrapper -->
    <!-- BEGIN Left Aside -->
    <aside class="page-sidebar">
      <div class="page-logo">
        <p>Enter Company logo here</p>
      </div>
      <!-- BEGIN PRIMARY NAVIGATION -->
      <nav class="js-primary-nav">
        <div class="nav-filter">
          <div class="position-relative">
            <p>Enter filter field here</p>
          </div>
          <div class="info-card">
            <p>Enter image avatar here. This is the other side of the filter menu</p>
          </div>
          <ul class="js-nav-menu">
            <li>
              <a href="#">
                <v-icon>IconHere</v-icon>
                <span class="nav-link-text">Items go here</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!---------- END PRIMARY NAVIGATION ---------->
      <!---------- NAV FOOTER ---------->
      <div class="nav-footer shadow-top">
        <a
          href="#"
          onclick="return false;"
          data-action="toggle"
          data-class="nav-function-minify"
          class="hidden-md-down"
        >
          <v-icon class="ni ni-chevron-right"></v-icon>
        </a>
      </div>
      <!-- END NAV FOOTER -->
    </aside>
    <!---------- END Left Aside ---------->
    <!---------- BEGIN Page Header ---------->
    <header class="page-header">
      <div class="page-logo">
        <a
          href="#"
          class="page-logo-link press-scale-down d-flex align-items-center position-relative"
          data-toggle="modal"
          data-target="#modal-shortcut"
        >
          <img src="#" alt="SmartAdmin WebApp" aria-roledescription="logo" />
          <span class="page-logo-text mr-1">Datacom Business Systems</span>
          <span class="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
          <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
        </a>
      </div>
    </header>
    <!---------- END Page Header ---------->
    <!---------- BEGIN Page Content ---------->
    <!-- the #js-page-content id is needed for some plugins to initialize -->
    <main class="js-page-content">
      <p>The main body content goes here</p>
    </main>
    <!-- this overlay is activated only when mobile menu is triggered -->
    <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
    <!---------- END Page Content ---------->
    <!---------- BEGIN Page Footer ---------->
    <footer class="page-footer">
      <div class="d-flex align-items-center flex-1 text-muted">
        <span class="hidden-md-down fw-700">
          2019 © SmartAdmin by&nbsp;
          <a
            href="https://www.gotbootstrap.com"
            class="text-primary fw-500"
            title="gotbootstrap.com"
            target="_blank"
          >gotbootstrap.com</a>
        </span>
      </div>
    </footer>
    <!---------- END Page Footer ---------->
    <!---------- END Page Wrapper ---------->
    <h2>test of h2 tag and scss</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/app.core.scss";
</style>
