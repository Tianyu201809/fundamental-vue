<script lang="ts">
import Vue, { VNode, VNodeData, CreateElement } from "vue";
import { PropValidator } from "vue/types/options";
import Table from "./Table.vue";

import {
  RecycleScroller,
  DynamicScroller,
  DynamicScrollerItem
  // @ts-ignore
} from "vue-virtual-scroller";

export default Vue.extend({
  name: "FdVirtualizedTable",
  extends: Table,
  props: {
    rowHeight: {
      type: Number
    } as PropValidator<number>,
    minRowHeight: {
      type: Number,
      default: 30
    } as PropValidator<number>
  },
  mounted() {
    // todo: updateSize should also be called during resized and data updated events
    this.updateSize();
  },
  computed: {
    classes(): string[] {
      return [
        "fd-virtualized-table",
        // @ts-ignore: property 'x' does not exist on type CombinedVueInstance
        this.striped ? "fd-table--striped" : "",
        // @ts-ignore: property 'x' does not exist on type CombinedVueInstance
        this.borderless ? "fd-table--no-borders" : ""
      ];
    },
    isDynamicRowHeight(): boolean {
      return isNaN(this.rowHeight);
    }
  },
  methods: {
    renderTable(h: CreateElement): VNode {
      const vnodeData: VNodeData = {
        staticClass: "fd-table",
        class: this.classes
      };

      // todo: table header (click and sort)

      if (!this.isDynamicRowHeight) {
        return h(RecycleScroller, {
          ...vnodeData,
          attrs: {
            // @ts-ignore: property 'x' does not exist on type CombinedVueInstance
            items: this.items,
            itemSize: this.rowHeight,
            keyField: "id"
          },
          scopedSlots: {
            default: this.$scopedSlots.row
          }
        });
      } else {
        return h(DynamicScroller, {
          ...vnodeData,
          attrs: {
            // @ts-ignore: property 'x' does not exist on type CombinedVueInstance
            items: this.items,
            minItemSize: this.minRowHeight
          },
          scopedSlots: {
            default: ({ item, index, active }) =>
              h(
                DynamicScrollerItem,
                {
                  props: {
                    item,
                    active,
                    sizeDependencies: [item.id],
                    dataIndex: index
                  }
                },
                this.$scopedSlots.row && this.$scopedSlots.row({ item })
              )
          }
        });
      }
    },

    // Update width of the table
    async updateSize() {
      await this.$nextTick();

      const select = this.$el.querySelector;
      const itemWrapper = select(".vue-recycle-scroller__item-wrapper");
      const itemView = select(".vue-recycle-scroller__item-view");

      if (itemWrapper == null) return;
      if (itemView == null || itemView.firstElementChild == null) return;

      if (!this.isDynamicRowHeight) {
        // @ts-ignore: need to convert to HTMLElement
        itemWrapper.style.width = `${itemView.firstElementChild.clientWidth}px`;
      } else {
        // SORRY!!!
        if (itemView.firstElementChild.firstElementChild == null) return;

        // @ts-ignore: need to convert to HTMLElement
        itemWrapper.style.width = `${
          itemView.firstElementChild.firstElementChild.clientWidth
        }px`;
      }
    }
  },
  data() {
    return {
      isVirtualized: true
    };
  }
});
</script>
