<template>
  <div :aria-label="this.ariaLabel">
    <Header :items="this.header"></Header>
    <ul class="fd-tree">
      <Row v-for="(row, index) in this.data" :key="index">
        <slot :treeRow="row"></slot>
      </Row>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop, PropOptions } from "vue/types/options";
import Header from "./Header.vue";
import Row from "./Row.vue";
export default Vue.extend({
  name: "FdTree",
  components: { Header, Row },
  props: {
    ariaLabel: String as Prop<string | null>,
    header: { type: Array, default: () => [] } as PropOptions<Array<string>>,
    data: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
