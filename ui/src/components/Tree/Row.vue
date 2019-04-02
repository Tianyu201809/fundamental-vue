<template>
  <li class="fd-tree__item">
    <div class="fd-tree__row">
      <slot></slot>
    </div>
    <ul :class="classes">
      <FdTreeRow
        v-for="(item, index) in this.items"
        :key="index"
        :items="item.rows"
        :childLevel="rowLevel"
        >child</FdTreeRow
      >
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
export default Vue.extend({
  name: "FdTreeRow",
  computed: {
    classes(): string[] {
      debugger;
      let childLevel =
        this.childLevel > 0
          ? [
              "fd-tree__group",
              `fd-tree__group--sublevel-${this.childLevel + 1}`
            ]
          : [];
      let rowHidden = this.showChildren ? [] : ["is-hidden"];
      return [...childLevel, ...rowHidden];
    },
    rowLevel(): number {
      return this.childLevel + 1;
    }
  },
  props: {
    ariaLabel: String as Prop<string | null>,
    items: { type: Array, default: () => [] } as PropOptions<Array<string>>,
    childLevel: { type: Number, default: 0 },
    hasChildren: { type: Boolean, default: true },
    showChildren: { type: Boolean, default: true },
    children: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
