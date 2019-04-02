import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "inprogress",
    icon: "add",
    related: [
      "FdTreeItem",
      "FdTreeHeader",
      "FdTreeRow",
      "FdTreeBranch",
      "FdTreeData",
      "FdTree"
    ]
  };
};
