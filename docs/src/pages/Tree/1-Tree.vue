<title>Tree</title>
<template>
  <div>
    <FdTree :header="headerItems" :data="rows">
      <template slot-scope="{ treeRow }">
        <FdTreeItem
          :firstItem="true"
          :hierarchyButton="treeRow.rows && treeRow.rows.length > 0"
          >{{ treeRow.rowItems.col1 }}</FdTreeItem
        >
        <FdTreeItem>{{ treeRow.rowItems.col2 }}</FdTreeItem>
        <FdTreeItem>{{ treeRow.rowItems.col3 }}</FdTreeItem>
        <FdTreeItem>{{ treeRow.rowItems.col4 }}</FdTreeItem>
      </template>
    </FdTree>
  </div>
</template>

<script>
export default {
  data: () => ({
    headerItems: ["header 1", "header 2", "header 3", "header 4"],
    rows: [
      {
        rowItems: {
          col1: "R1 Item 1",
          col2: "R1 Item 2",
          col3: "R1 Item 3",
          col4: "R1 Item 4"
        },
        rows: [
          {
            rowItems: {
              col1: "R11 Item 1",
              col2: "R11 Item 2",
              col3: "R11 Item 3",
              col4: "R11 Item 4"
            }
          }
        ]
      },
      {
        rowItems: {
          col1: "R2 Item 1",
          col2: "R2 Item 2",
          col3: "R2 Item 3",
          col4: "R2 Item 4"
        }
      }
    ]
  })
};
</script>
