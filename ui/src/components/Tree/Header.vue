<template>
  <div class="fd-tree fd-tree--header">
    <div class="fd-tree__row fd-tree__row--header">
      <Item
        v-for="item in headerItems"
        :firstItem="item.index === 0"
        :key="item.index"
        :hierarchyButton="item.index === 0"
        >{{ item.text }}</Item
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
  computed: {
    headerItems(): Array<object> {
      return this.items.map((text: string, index: number) => {
        return { text, index };
      });
    }
  },
  props: {
    ariaLabel: String as Prop<string | null>,
    items: { type: Array, default: () => [] } as PropOptions<Array<string>>
  }
});
</script>
