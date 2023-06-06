import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFill,
  faPallet,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import TagsContext from "../../context/tags-context";
import NewTaskTagsColor from "./NewTaskTagsColor";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const NewTaskTagsMenu = (props) => {
  const tagsCtx = useContext(TagsContext);
  const [colorMenuVisibility, setColorMenuVisibility] = useState(false);
  const tagRemoveHandler = () => {
    tagsCtx.removeTag(props.clickedTag);
  };

  const tagChangeColorHandler = (color) => {
    tagsCtx.changeTagColor(props.clickedTag, color);
  };
  const showColorMenuHandler = () => {
    setColorMenuVisibility((prevStete) => !prevStete);
  };
  return (
    <div className="absolute z-50 hidden group-hover/tag:block bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 w-[100px] top-0 right-0">
      <ul className="text-[10px] text-[#1E1E1E]">
        <li
          className="flex justify-end items-center gap-1 mb-2"
          onClick={tagRemoveHandler}
        >
          <p>حذف</p>
          <FontAwesomeIcon icon={faXmark} />
        </li>
        <li className="flex justify-end items-center gap-1 mb-2">
          <p>ویرایش تگ</p>
          <FontAwesomeIcon icon={faPenToSquare} />
        </li>
        <li
          onClick={showColorMenuHandler}
          className="relative flex justify-end items-center gap-1"
        >
          {colorMenuVisibility && (
            <NewTaskTagsColor onChooseColor={tagChangeColorHandler} />
          )}
          <p>ویرایش رنگ</p>
          <FontAwesomeIcon icon={faFill} />
        </li>
      </ul>
    </div>
  );
};
export default NewTaskTagsMenu;
