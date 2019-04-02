<template>
  <div :aria-label="this.ariaLabel">
    <Header :items="this.header"></Header>
    <ul class="fd-tree">
      <Row
        ><template
          v-for="slot in Object.keys($scopedSlots)"
          :slot="slot"
          slot-scope="scope"
          ><slot :name="slot" v-bind="scope"
        /></template>
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
  data: () => ({
    childLevel: 0
  }),
  props: {
    ariaLabel: String as Prop<string | null>,
    header: { type: Array, default: () => [] } as PropOptions<Array<string>>,
    data: { type: Array, default: () => [] } as PropOptions<Array<object>>
  }
});
</script>
