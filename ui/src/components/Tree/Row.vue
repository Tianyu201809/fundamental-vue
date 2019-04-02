<template>
<li :aria-label="this.ariaLabel" class="fd-tree__item">
  <div  class="fd-tree__row">
    <slot></slot>
  </div>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
export default Vue.extend({
  name: "FdTreeRow",
  props: {
    ariaLabel: String as Prop<string | null>,
    items: { type: Array, default: () => [] } as PropOptions<Array<string>>
  }
});
</script>
