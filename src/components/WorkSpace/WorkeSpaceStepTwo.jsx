import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

const WorkeSpaceStepTwo = (props) => {
  const [selectedColor, setSelectedColor] = useState("rgb(125, 130, 140)");

  const nextStepHandler = () => {
    props.onSelectColor(selectedColor);
  };
  const colorPickerHandler = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };
  const themeColor = [
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
    "rgb(95, 108, 124)",
    "rgb(70, 73, 77)",
    "rgb(127, 161, 209)",
  ];
  return (
    <div className="p-4 pb-0">
      <p className="text-center text-2xl">انتخاب رنگ ورک‌اسپیس</p>
      <div className="my-4">
        <div className="flex justify-end items-center gap-8">
          <div>
            <p className="text-sm mb-4">رنگ ورک‌اسپیس</p>
            <div className="flex flex-wrap flex-row-reverse gap-2 w-[280px] my-2">
              <div
                className={`w-[15px] h-[15px] rounded-sm cursor-pointer flex justify-center items-center`}
                style={{
                  outline:
                    selectedColor === "rgb(125, 130, 140)"
                      ? "2px solid #00C4FF"
                      : "none",
                }}
                onClick={() => {
                  setSelectedColor("rgb(125, 130, 140)");
                }}
              >
                <FontAwesomeIcon icon={faBan} className="text-[15px]" />
              </div>
              {themeColor.map((colorBox) => {
                return (
                  <div
                    className={`w-[15px] h-[15px] rounded-sm cursor-pointer`}
                    key={colorBox}
                    style={{
                      backgroundColor: colorBox,
                      outline:
                        selectedColor === colorBox
                          ? "2px solid #00C4FF"
                          : "none",
                    }}
                    onClick={colorPickerHandler}
                  ></div>
                );
              })}
            </div>
          </div>
          <p
            className="text-white bg-[#7D828C] rounded-lg text-2xl w-[70px] h-[70px] text-white flex justify-center items-center "
            style={{ backgroundColor: selectedColor }}
          >
            ت ط
          </p>
        </div>
        <button
          className="w-full bg-[#208D8E] p-2.5 rounded mt-8 text-white text-center text-sm"
          onClick={nextStepHandler}
        >
          ادامه
        </button>
      </div>
    </div>
  );
};
export default WorkeSpaceStepTwo;
