<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";

export default Vue.extend({
  name: "FdTableCell",
  inject: {
    table: { default: null }
  },
  props: {
    fixed: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    style(): object {
      return this.fixed ? { left: "0", width: "200px" } : {};
    },
    classes(): string[] {
      // @ts-ignore
      const table = this.table;
      return [
        this.fixed ? "fd-table__fixed-col" : "",
        table.isVirtualized ? "fd-table__col" : ""
      ];
    }
  },
  render(h: CreateElement): VNode {
    // @ts-ignore
    const table = this.table;
    const elementTag = table.isVirtualized ? "div" : "td";

    return h(
      elementTag,
      {
        style: this.style,
        class: this.classes
      },
      this.$slots.default
    );
  }
});
</script>
