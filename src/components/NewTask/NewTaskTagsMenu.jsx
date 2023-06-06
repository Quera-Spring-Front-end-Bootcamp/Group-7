import { useContext } from "react";
import TagsContext from "../../context/tags-context";
const NewTaskTagsMenu = (props) => {
  const tagsCtx = useContext(TagsContext);

  const tagRemoveHandler = () => {
    tagsCtx.removeTag(props.clickedTag);
  };

  const tagChangeColorHandler = () => {
    tagsCtx.changeTagColor(props.clickedTag);
  };
  return (
    <div className="absolute z-50 hidden group-hover/tag:block bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 w-[100px] top-0 right-0">
      <ul>
        <li onClick={tagRemoveHandler}>1</li>
        <li>2</li>
        <li onClick={tagChangeColorHandler}>3</li>
      </ul>
    </div>
  );
};
export default NewTaskTagsMenu;
