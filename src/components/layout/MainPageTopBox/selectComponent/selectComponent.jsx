import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import NewTaskTag from "../../../NewTask/NewTaskTag";
import { outsideComponentClick } from "../../../mostlyUsed/outsideComponentClick/outsideComponentClick";

const SelectComponent = ({ width = "80px", type, topHeight, index }) => {
  const [showNewBox, setShowNewBox] = useState(false);

  const [selectedIsOrNot, setSelectedIsOrNot] = useState(null);
  const [searchValue, setsearchValue] = useState("");

  const wrapperRef = useRef(null);
  outsideComponentClick(wrapperRef, setShowNewBox);

  const newTaskStyles = {
    position: index < 2 ? "static" : "absolute",
    left: 0,
    width: "auto",
  };

  const isOrNotOptions = ["است", "نیست"];
  const whereOptions = ["تاریخ", "تگ", "اعضا", "اولویت"];

  const handleSelect = (item) => {
    if (type === "isOrNot") {
      setSelectedIsOrNot(item);
    }
    setShowNewBox(false);
  };

  const inputChangeHandler = (e) => {
    setsearchValue(e.target.value);
  };

  const InsideComponentHandler = () => {
    switch (type) {
      case "where":
        return (
          <div className=" bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-2 flex flex-col gap-3 text-xs ">
            <div className=" border-b border-gray " >
              <input
                onChange={inputChangeHandler}
                value={searchValue}
                type="text"
                placeholder="جستجو"
                className=" placeholder:text-xs w-full p-1 pr-[20px] bg-transparent"
              />
              <p className="w-[30px] h-[30px] flex justify-center items-center absolute right-0 top-0 bg-transparent text-slate-500 mt-[5px]">
                <FontAwesomeIcon icon={faSearch} />
              </p>
            </div>
            {whereOptions.map((item) => {
              return (
                <p
                  onClick={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  {item}
                </p>
              );
            })}
          </div>
        );
      case "tags":
        return <NewTaskTag moreStyles={newTaskStyles} />;
      case "isOrNot":
        return (
          <div className=" bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-2 flex flex-col gap-3 text-xs ">
            {isOrNotOptions.map((item) => {
              return (
                <p
                  onClick={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  {item}
                </p>
              );
            })}
          </div>
        );
    }
  };

  return (
    <div className=" relative ">
      <div
        onClick={(e) => {
          setShowNewBox(true);
          console.log(e);
        }}
        className="border border-gray-300 w-[80px] h-[20px] rounded flex flex-row-reverse text-[11px] justify-between items-center px-1 whitespace-nowrap cursor-pointer "
        style={{ width: width }}
      >
        {" "}
        <p>
          {type === "isOrNot"
            ? selectedIsOrNot
              ? selectedIsOrNot
              : "انتخاب کنید"
            : "انتخاب کنید"}
        </p>
        <FontAwesomeIcon className=" text-xs " icon={faChevronDown} />
      </div>
      {showNewBox && (
        <div
          ref={wrapperRef}
          className=" absolute z-10 h-[90px] "
          style={{ width: width }}
        >
          <InsideComponentHandler />
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
