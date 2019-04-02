<template>
  <ul class="fd-tree">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { PropOptions } from "vue/types/options";
export default Vue.extend({
  name: "FdTreeData",
  props: {
    branches: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
