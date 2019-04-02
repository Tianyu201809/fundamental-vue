import Branch from "./Branch.vue";
import Data from "./Data.vue";
import Header from "./Header.vue";
import Item from "./Item.vue";
import Row from "./Row.vue";
import Tree from "./Tree.vue";
import { pluginify } from "@/util";
export default pluginify(Branch, Data, Header, Item, Row, Tree);
export { Branch, Data, Header, Item, Row, Tree };
