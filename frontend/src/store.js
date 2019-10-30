import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleSB: false,
    blogs: []
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
    },
    fetchBlogs(state, payload) {
      console.log("fetchBlogs mutations");
      state.blogs = payload;
    }
  },
  actions: {
    fetchBlogs(context) {
      axios.get("/api/blog/").then(response => {
        console.log(response.data, "fetch data actions");
        context.commit("fetchBlogs", response.data);
      });
    }
  },
  getters: {
    sideToggleState(state) {
      console.log(state.toggleSB);
      return state.toggleSB;
    },
    getBlogs(state) {
      console.log(state.blogs, "from getter blog");
      return state.blogs;
    }
  }
});
