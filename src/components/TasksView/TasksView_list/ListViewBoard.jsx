import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import ListViewTask from "./ListViewTask";
const ListViewBoard = (props) => {
  const [chevron, setChevron] = useState(false);

  const chevronClickHandler = () => {
    setChevron((prevState) => !prevState);
  };

  return (
    <div
      className={` w-full px-3 my-6 overflow-hidden ${
        chevron ? "h-auto" : "h-[35px]"
      } `}
    >
      <div className="w-full px-1 flex justify-between items-center">
        <div className="flex justify-between items-center w-[50%]">
          <h2
            className={`w-[25%] transition-opacity duration-500 text-center ${
              chevron ? "opacity-100" : "opacity-0"
            }`}
          >
            توضیحات
          </h2>
          <h2
            className={`w-[25%] transition-opacity duration-500 text-center ${
              chevron ? "opacity-100" : "opacity-0"
            }`}
          >
            اولیویت
          </h2>
          <h2
            className={`w-[25%] transition-opacity duration-500 text-center ${
              chevron ? "opacity-100" : "opacity-0"
            }`}
          >
            ددلاین
          </h2>
          <h2
            className={`w-[25%] transition-opacity duration-500 text-center ${
              chevron ? "opacity-100" : "opacity-0"
            }`}
          >
            اعضا
          </h2>
        </div>

        <div className="flex justify-end gap-2 items-center w-[50%]">
          <p className="text-sm" onClick={chevronClickHandler}>
            {" "}
            برد شماره یک
          </p>
          <h2 className="text-lg bg-[#ff00ff] rounded px-2">{props.title}</h2>
          <button
            className={`text-[10px] flex justify-center items-center w-[18px] h-[18px] rounded-full border-[1px] border-black border-solid transition-transform duration-500 ${
              chevron ? "" : "-rotate-180"
            }`}
            onClick={chevronClickHandler}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      <div
        className={`w-full  pt-2 flex justify-between items-center flex-col transition-opacity duration-500 ${
          chevron ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* we need a map on getProjectsByWorkSpaceID property of boards */}

        <ListViewTask title="تسک شماره یک" deadline="30تیر" />
        <ListViewTask title="تسک شماره دو" deadline="12 مرداد" />
      </div>
    </div>
  );
};
export default ListViewBoard;
