<template>
  <div :aria-label="this.ariaLabel">
    <Header :items="this.header"></Header>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
import Header from "./Header.vue";
export default Vue.extend({
  name: "FdTree",
  components: { Header },
  props: {
    ariaLabel: String as Prop<string | null>,
    header: { type: Array, default: () => [] } as PropOptions<Array<string>>,
    data: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
