import { useReducer } from "react";
import TagsContext from "./tags-context";
const DUMMY_TAGS = [
  { tagName: "درس", tagColor: "bg-[#ff0000]", id: "tag1" },
  { tagName: "مشق", tagColor: "bg-[#ffff00]", id: "tag2" },
  { tagName: "ورزش", tagColor: "bg-[#ff00ff]", id: "tag3" },
];
const initialTags = {
  tagNames: DUMMY_TAGS,
};

const tagsReducer = (state, action) => {
  if (action.type === "REMOVE-TAG") {
    const newTagsList = state.tagNames.filter((tag) => {
      return tag.id !== action.removedTag.id;
    });
    return {
      tagNames: newTagsList,
    };
  }

  if (action.type === "ADD-TAG") {
    const newTagsList = state.tagNames.concat(action.addedTag);
    return {
      tagNames: newTagsList,
    };
  }

  if (action.type === "CHANGE-TAG-COLOR") {
    const colorCahngedTag = state.tagNames.findIndex((tag) => {
      return tag.id === action.changedColorTag.id;
    });
    const newTagsList = [...state.tagNames];
    newTagsList[colorCahngedTag] = {
      ...newTagsList[colorCahngedTag],
      tagColor: "bg-[#000000]",
    };
    return {
      tagNames: newTagsList,
    };
  }
  return initialTags;
};

const TagsProvider = (props) => {
  const [tagsState, dispatchTags] = useReducer(tagsReducer, initialTags);

  const tagAddHandler = (addedTag) => {
    dispatchTags({ type: "ADD-TAG", addedTag: addedTag });
  };

  const tagRemoveHandler = (removedTag) => {
    dispatchTags({ type: "REMOVE-TAG", removedTag: removedTag });
  };
  const tagColorHandler = (changedColorTag) => {
    dispatchTags({
      type: "CHANGE-TAG-COLOR",
      changedColorTag: changedColorTag,
    });
  };

  const tagsValue = {
    tagNames: tagsState.tagNames,
    searchedTags: tagsState.searchedTags,
    removeTag: tagRemoveHandler,
    addTag: tagAddHandler,
    changeTagColor: tagColorHandler,
  };

  return (
    <TagsContext.Provider value={tagsValue}>
      {props.children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
