<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Leave all unchecked to filter on all data"
          class="mb-0"
        >
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template v-slot:cell(name)="row"></template>

      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >Info modal</b-button>
        <b-button
          size="sm"
          @click="row.toggleDetails"
        >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <b-row class="flex-pagination">
      <div class="pagination-item">
        <b-col sm="12" md="12" xl="12" class="my-1">
          <b-form-group
            label="Per page"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="3"
            label-align-sm="right"
            label-size="sm"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>
      </div>
      <div class="pagination-item"></div>
      <div class="pagination-item">
        <b-col sm="12" md="12" xl="12" class="my-1">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </div>
    </b-row>

    <!-- Info modals -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      items: [
        {
          author: 2,
          title: "Lorem Ipsum",
          content: "all of the content you need..."
        },
        {
          author: 2,
          title: "who is lorem",
          content:
            "lorem ipsum dolor.Eget gravida cum sociis natoque. Gravida arcu ac tortor dignissim convallis. Orci porta non pulvinar /n neque laoreet. Et malesuada fames ac turpis egestas sed. Quisque non tellus orci ac. Lectus arcu bibendum at varius. Lectus magna /n fringilla urna porttitor rhoncus dolor purus. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Aenean et tortor at /n risus viverra. Aliquet nibh praesent tristique magna sit amet purus gravida. Penatibus et magnis dis parturient montes. Neque ornare /n aenean euismod elementum nisi quis eleifend q"
        },
        {
          author: 3,
          title: "Lectus Lorem",
          content:
            "Lectus arcu bibendum at varius. Lectus magna /n fringilla urna porttitor rhoncus dolor purus. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Aenean et tortor at /n risus viverra. Aliquet nibh praesent tristique magna sit amet purus gravida. Penatibus et magnis dis parturient montes. Neque ornare /n aenean euismod elementum nisi quis eleifend quam. Ac auctor augue mauris augue neque gravida in fermentum. Faucibus scelerisque /n eleifend donec pretium vulputate sapien nec. Id velit ut tortor pretium viverra suspendis"
        }
      ],
      fields: [
        {
          key: "author",
          label: "Author ID",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "title",
          label: "Title",
          sortable: true,
          class: "text-center"
        },
        {
          key: "content",
          label: "Content"
        },
        { key: "actions", label: "Actions" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
  //   create() {
  //     this.$store.dispatch("fetchBlogs");
  //   },
  //   beforeMount() {
  //     this.blogs = this.$store.getters.getBlogs;
  //     console.log(this.blogs, "userblogs Computed");
  //     return this.$store.getters.getBlogs;
  //   }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_main/datatables.scss";
</style>