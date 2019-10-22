import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarOn: false
  },
  mutations: {
    invertSidebar() {
      if (this.state.sidebarOn === false) {
        this.state.sidebarOn = true;
      } else this.state.sidebarOn = false;
      console.log(this.state.sidebarOn);
      return this.state.sidebarOn;
    }
  },
  actions: {},
  getters: {
    sideToggleState() {
      console.log(this.state.sidebarOn);
      return this.state.sidebarOn;
    }
  }
});
