 <template>
  <div class="reset-this">
    Datatable page
    <!-- datatable start -->
    <table id="my-table" class="display">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.name"
            @click="$emit('sort', column.name)"
            :class="sortKey === column.name ? (sortOrders[column.name] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting'"
            :style="'width:'+column.width+';'+'cursor:pointer;'"
          >{{ column.label }}</th>
        </tr>
      </thead>
      <slot></slot>
    </table>
    <!-- datatable end -->
  </div>
</template>


<script>
export default {
  props: ["columns", "sortKey", "sortOrders"],
  data() {
    return {};
  },
  // name: "saas-view",
  props: {},
  methods: {}
};
</script>


<style lang="scss">
</style>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchedData: [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          salary: "$3,120",
          start_date: "2011/04/25",
          office: "Edinburgh"
        },
        {
          name: "Garrett Winters",
          position: "Director",
          salary: "$5,300",
          start_date: "2011/07/25",
          office: "Edinburgh"
        }
      ]
    };
  },
  mount: {
    initDataTable() {
      $("#my-table").DataTable({
        data: this.fetchedData
      });
    }
  }
};
</script>

<style>
</style>