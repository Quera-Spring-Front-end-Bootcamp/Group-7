import React from "react";
const TagsContext = React.createContext({
  tags: [],
  removeTag: (tag) => {},
  addTag: (tag) => {},
  changeTagColor: (tag, color) => {},
});
export default TagsContext;
