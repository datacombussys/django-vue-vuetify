<template>
  <div class="reset-this">
    Pagination Page
    <nav class="pagination">
      <span class="page-stats">{{ pagination.from }} - {{ pagination.to }} of {{ pagination.total }}</span>
      <a
        v-if="paginaiton.prevPageUrl"
        class="button is-small paginaiton-previous"
        @click="$emit('prev');"
      >Prev</a>
      <a class="button is-small paginaiton-previous" v-else :disabled="true">Prev</a>
      <a
        v-if="paginaiton.nextPageUrl"
        class="button is-small paginaiton-previous"
        @click="$emit('next');"
      >Next</a>
      <a class="button is-small paginaiton-previous" v-else :disabled="true">Next</a>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["pagination"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>