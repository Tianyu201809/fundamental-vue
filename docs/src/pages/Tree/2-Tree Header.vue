<title>Tree Header</title>
<template>
  <FdTreeHeader :items="headerItems"></FdTreeHeader>
</template>

<script>
export default {
  data: () => ({
    headerItems: ["Column 1", "Column 2", "Column 3"]
  })
};
</script>
