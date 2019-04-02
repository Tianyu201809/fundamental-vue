<template>
  <div
    :aria-label="this.ariaLabel"
    :class="['fd-tree__col', this.firstItem ? 'fd-tree__col--control' : '']"
  >
    <button v-if="this.hierarchyButton" class="fd-tree__control"></button>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
export default Vue.extend({
  name: "FdTreeItem",
  props: {
    ariaLabel: String as Prop<string | null>,
    firstItem: { type: Boolean, default: false },
    hierarchyButton: { type: Boolean, default: false }
  }
});
</script>
