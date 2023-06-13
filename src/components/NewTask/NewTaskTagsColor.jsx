import { useContext } from "react";
import TagsContext from "../../context/tags-context";
const tagsColor = [
  "rgb(132, 198, 161)",
  "rgb(120, 198, 176)",
  "rgb(118, 188, 134)",
  "rgb(128, 220, 105)",
  "rgb(228, 97, 97)",
  "rgb(225, 126, 128)",
  "rgb(236, 129, 130)",
  "rgb(243, 197, 103)",
  "rgb(185, 153, 94)",
  "rgb(229, 122, 87)",
  "rgb(241, 162, 92)",
  "rgb(226, 138, 96)",
  "rgb(104, 151, 194)",
  "rgb(116, 170, 221)",
  "rgb(60, 69, 231)",
  "rgb(109, 175, 206)",
  "rgb(108, 178, 247)",
  "rgb(146, 134, 234)",
  "rgb(192, 116, 209)",
  "rgb(72, 103, 116)",
];
const NewTaskTagsColor = (props) => {
  const tagsCtx = useContext(TagsContext);
  const tagColorChangeHandler = (e) => {
    props.onChooseColor(e.target.style.backgroundColor);
  };
  return (
    <div className="absolute flex flex-wrap flex-row-reverse gap-2 z-100 bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 pl-1 w-[131px] bottom-0 right-[80px]">
      {tagsColor.map((colorBox) => {
        return (
          <div
            className={`w-[15px] h-[15px] rounded-sm cursor-pointer`}
            key={colorBox}
            style={{
              backgroundColor: colorBox,
            }}
            onClick={tagColorChangeHandler}
          ></div>
        );
      })}
    </div>
  );
};
export default NewTaskTagsColor;
