<title>Tree</title>
<template>
  <div>
    <FdTree :header="headerItems" :data="rows">
      <template slot-scope="scope">
        <FdTreeItem
          v-for="(item, index) in scope.rowItems"
          :key="index"
          :firstItem="index === 0"
          :hierarchyButton="scope.rows && scope.rows.length && index === 0"
          >{{ item.item }}</FdTreeItem
        >
      </template>
    </FdTree>
  </div>
</template>
,<script>
export default {
  data: () => ({
    headerItems: ["Column 1", "Column 2", "Column 3", "Column 4"],
    rows: [
      {
        rowItems: [
          { item: "R1 Item 1" },
          { item: "R1 Item 2" },
          { item: "R1 Item 3" },
          { item: "R1 Item 4" }
        ],
        rows: [
          {
            rowItems: [
              { item: "R11 Item 1" },
              { item: "R11 Item 2" },
              { item: "R11 Item 3" },
              { item: "R11 Item 4" }
            ],
            rows: [
              {
                rowItems: [
                  { item: "R111 Item 1" },
                  { item: "R111 Item 2" },
                  { item: "R111 Item 3" },
                  { item: "R111 Item 4" }
                ]
              }
            ]
          },
          {
            rowItems: [
              { item: "R12 Item 1" },
              { item: "R12 Item 2" },
              { item: "R12 Item 3" },
              { item: "R12 Item 4" }
            ]
          }
        ]
      },
      {
        rowItems: [
          { item: "R2 Item 1" },
          { item: "R2 Item 2" },
          { item: "R2 Item 3" },
          { item: "R2 Item 4" }
        ]
      }
    ]
  })
};
</script>
