import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleSB: false
  },
  mutations: {
    invertSidebar() {
      if (this.state.toggleSB === false) {
        this.state.toggleSB = true;
      } else {
        this.state.toggleSB = false;
      }
      console.log(this.state.toggleSB, "mutations");
      return this.state.toggleSB;
    }
  },
  actions: {},
  getters: {
    sideToggleState(state) {
      console.log(state.toggleSB);
      return state.toggleSB;
    }
  }
});
