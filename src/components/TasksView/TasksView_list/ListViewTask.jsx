import { useState } from "react";
import Img from "../../../assets/img/expandcircle.png";
import Img2 from "../../../assets/img/girl1.png";
import Img3 from "../../../assets/img/boy1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
const ListViewTask = (props) => {
  return (
    <div className="w-full px-1 my-3 flex justify-between items-center ">
      <div className="flex justify-between items-center w-[50%]">
        <h2 className="w-[25%] text-center">توضیحات</h2>
        <h2 className="w-[25%] text-center">اولیویت</h2>
        <h2 className="w-[25%] text-center">ددلاین</h2>
        <h2 className="w-[25%] text-center">اعضا</h2>
      </div>

      <div className="flex justify-end gap-2 items-center w-[50%] pr-6">
        <p className="text-sm">این یک تایتل برای تسک است</p>
        <p className="w-[12px] h-[12px] rounded bg-[#ff0000]"></p>
      </div>
    </div>
  );
};
export default ListViewTask;
