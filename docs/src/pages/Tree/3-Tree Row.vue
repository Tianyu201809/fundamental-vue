<title>Tree with TreeHeader and TreeRow</title>
<template>
  <div>
    <FdTreeHeader :items="headerItems"></FdTreeHeader>
    <FdTreeData>
      <div>
        <FdTreeRow v-for="rowItems in rows" :key="rowItems.index">
          <FdTreeItem
            v-for="item in rowItems.rowItems"
            :key="item.index"
            :firstItem="item.index === '1'"
            >{{ item.item }}</FdTreeItem
          >
        </FdTreeRow>
      </div>
    </FdTreeData>
  </div>
</template>

<script>
export default {
  data: () => ({
    headerItems: ["header 1", "header 2", "header 3", "header 4"],
    rows: [
      {
        rowItems: [
          { item: "R1 Item 1", index: "1" },
          { item: "R1 Item 2", index: "2" },
          { item: "R1 Item 3", index: "3" },
          { item: "R1 Item 4", index: "4" }
        ],
        index: "1"
      },
      {
        rowItems: [
          { item: "R2 Item 1", index: "1" },
          { item: "R2 Item 2", index: "2" },
          { item: "R2 Item 3", index: "3" },
          { item: "R2 Item 4", index: "4" }
        ],
        index: "2"
      }
    ]
  })
};
</script>
