<template>
  <ul :aria-label="this.ariaLabel" v-if="this.hasChildren" :class="classes">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
export default Vue.extend({
  name: "FdTreeBranch",
  computed: {
    classes(): string[] {
      const childLevel =
        this.childLevel > 0
          ? []
          : [`fd-tree__group--sublevel-${this.childLevel}`];
      const rowHidden = this.showChildren ? ["is-hidden"] : [];
      return ["fd-tree__group", ...childLevel, ...rowHidden];
    }
  },
  props: {
    ariaLabel: String as Prop<string | null>,
    childLevel: { type: Number, default: 0 },
    hasChildren: { type: Boolean, default: false },
    showChildren: { type: Boolean, default: false },
    children: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
