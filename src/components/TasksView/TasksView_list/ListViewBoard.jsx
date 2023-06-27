import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import ListViewTask from "./ListViewTask";
const ListViewBoard = (props) => {
  return (
    <div className="w-full px-3 my-6 flex justify-center items-center flex-col">
      <div className="w-full px-1 flex justify-between items-center">
        <div className="flex justify-between items-center w-[50%]">
          <h2 className="w-[25%] text-center">توضیحات</h2>
          <h2 className="w-[25%] text-center">اولیویت</h2>
          <h2 className="w-[25%] text-center">ددلاین</h2>
          <h2 className="w-[25%] text-center">اعضا</h2>
        </div>

        <div className="flex justify-end gap-2 items-center w-[50%]">
          <p className="text-sm"> {2} تسک</p>
          <h2 className="text-lg bg-[#ff00ff] rounded px-2">{props.title}</h2>
          <button className="text-[10px] flex justify-center items-center w-[18px] h-[18px] rounded-full border-[1px] border-black border-solid">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      <div className="w-full  pt-2 flex justify-between items-center flex-col ">
        {/* we need a map on getProjectsByWorkSpaceID property of boards */}

        <ListViewTask />
        <ListViewTask />
      </div>
    </div>
  );
};
export default ListViewBoard;
