import { useState } from "react";
import Img from "../../../assets/img/expandcircle.png";
import Img2 from "../../../assets/img/girl1.png";
import Img3 from "../../../assets/img/boy1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const ListViewTask = (props) => {
  return (
    <div className="w-full px-1 my-3 flex justify-between items-center ">
      <div className="flex justify-between items-center w-[50%]">
        <p className="w-[25%] text-center text-sm">
          <FontAwesomeIcon icon={faAlignLeft} />
        </p>
        <p className="w-[25%] text-center text-sm">
          <FontAwesomeIcon icon={faFlag} />
        </p>
        <p className="w-[25%] text-center text-sm">6آبان</p>
        <div className="w-[25%] text-center flex justify-center [&>*:nth-child(1)]:ml-0">
          <img
            src={Img2}
            alt="image"
            className="rounded-full w-[35px] h-[35px] -ml-3"
          />
          <img
            src={Img3}
            alt="image 3"
            className="rounded-full w-[35px] h-[35px] -ml-3"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 items-center w-[50%] pr-6">
        <p className="text-sm">این یک تایتل برای تسک است</p>
        <p className="w-[12px] h-[12px] rounded bg-[#ff0000]"></p>
      </div>
    </div>
  );
};
export default ListViewTask;
