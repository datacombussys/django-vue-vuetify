<template>
  <section>
    <b-table :data="blogs" :columns="columns"></b-table>
  </section>
</template>

 <script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      columns: [
        {
          field: "id",
          label: "ID",
          width: "100",
          numeric: true,
          searchable: true
        },
        {
          field: "author",
          label: "Author",
          searchable: true
        },
        {
          field: "title",
          label: "Title",
          searchable: true
        },
        {
          field: "content",
          label: "Content",
          centered: true
        },
        {
          field: "last_updated",
          label: "Last Updated"
        },
        {
          field: "slug",
          label: "Slug"
        }
      ]
    };
  },
  methods: {},
  computed: mapState(["blogs"]),
  beforeCreate() {
    this.$store.dispatch("fetchBlogs");
  },
  created() {
    this.$store.watch(
      (state, getters) => getters.getBlogs,
      payload => {
        console.log(payload, "created response");
      }
    );
  }
};
</script>



