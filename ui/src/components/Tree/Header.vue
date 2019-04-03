<template>
  <div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
      <Item
        v-for="(headerText,i) in this.items"
        :firstItem="i === 0"
        :key="i"
        :hierarchyButton="i === 0"
        >{{ headerText }}</Item
      >
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
import Item from "./Item.vue";
export default Vue.extend({
  name: "FdTreeHeader",
  components: { Item },
  props: {
    ariaLabel: String as Prop<string | null>,
    items: { type: Array, default: () => [] } as PropOptions<Array<string>>
  }
});
</script>
