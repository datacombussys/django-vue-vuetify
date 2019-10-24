import Vue from "vue";
import Vuex from "vuex";

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
    fetchBlogs(state) {
      Vue.axios.get("http://127.0.0.1:8080/api/blog/").then(response => {
        console.log(response.data, "fetch data mutations");
        state.blogs = response.data;
      });
    }
  },
  actions: {
    fetchBlogs(context) {
      context.commit("fetchBlogs");
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

// {
//   author: "",
//   title: "",
//   content: "",
//   date_posted: "",
//   last_updated: "",
//   slug: "",
//   blog_title_image: ""
// }
