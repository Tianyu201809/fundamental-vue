<title>Virtualized Table</title>

<template>
  <FdVirtualizedTable
    striped
    :headers="headers"
    :items="items"
    :row-height="108"
  >
    <template slot="row" slot-scope="{ item }">
      <FdTableRow>
        <FdTableCell
          :key="col"
          v-for="col in Object.keys(item).filter(k => k !== 'id')"
          >{{ item[col] }}</FdTableCell
        >
      </FdTableRow>
    </template>
  </FdVirtualizedTable>
</template>

<script>
export default {
  mounted() {},
  computed: {
    headers() {
      return Array.from({ length: this.cols }).map((_, c) => `Col #${c}`);
    },
    items() {
      return Array.from({ length: this.rows }).map((_, r) => {
        const row = { id: `id-${r}` };
        Array.from({ length: this.cols }).map((_, c) => {
          row[`col${c}`] = `Row #${r}, Col #${c}`;
        });
        return row;
      });
    }
  },
  data: () => ({
    rows: 100,
    cols: 50
  })
};
</script>

<style>
.vue-recycle-scroller {
  height: 300px;
  overflow: scroll;
  padding: 0 !important;
}
</style>
