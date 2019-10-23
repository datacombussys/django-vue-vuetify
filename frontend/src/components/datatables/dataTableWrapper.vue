<template>
  <div class="projects">
    <div class="tableFilters">
      This is the wrapper page
      <input
        type="text"
        v-model="tableData.search"
        class="input"
        placeholder="Search Table"
      />
      <div class="control">
        <div class="select">
          <select v-model="tableData.length" @change="getProjects()">
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
          </select>
        </div>
      </div>
    </div>
    <datatable :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders">
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.deadline }}</td>
          <td>{{ project.budget }}</td>
          <td>{{ project.status }}</td>
        </tr>
      </tbody>
    </datatable>
  </div>
</template>

<script>
import Datatable from "./datatable.vue";
import Pagination from "./pagination.vue";

export default {
  data() {
    sortOrder: {
    }
    columns: [
      { width: "33%", label: "Deadline", name: "deadline" },
      { width: "33%", label: "Budget", name: "budget" },
      { width: "33%", label: "Status", name: "status" }
    ];
    return {
      projects: [
        { deadline: "01/21/2019", budget: "$32,000", status: "bonkers" },
        { deadline: "01/21/2019", budget: "$32,000", status: "bonkers" },
        { deadline: "01/21/2019", budget: "$32,000", status: "bonkers" },
        { deadline: "01/21/2019", budget: "$32,000", status: "bonkers" },
        { deadline: "01/21/2019", budget: "$32,000", status: "bonkers" }
      ],
      columns: "columns",
      sortKey: "deadline",
      sortOrders: "sortOrders",
      tableData: {
        draw: 0,
        lenghth: 10,
        search: "",
        column: 0,
        dir: "desc"
      },
      pagination: {
        lastPage: "",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextPageUrl: "",
        prevPageUrl: "",
        from: "",
        to: ""
      }
    };
  },
  components: {
    datatables: Datatable,
    pagination: Pagination
  },
  methods: {
    configPagination(data) {
      this.pagination.lastPage = data.lastPage;
      this.pagination.currentPage = data.currentPage;
      this.pagination.total = data.total;
      this.pagination.lastPageUrl = data.lastPageUrl;
      this.pagination.nextPageUrl = data.nextPageUrl;
      this.pagination.prevPageUrl = data.prevPageUrl;
      this.pagination.from = data.from;
      this.pagination.to = data.to;
    }
  }
};
</script>

<style lang="scss">
</style>