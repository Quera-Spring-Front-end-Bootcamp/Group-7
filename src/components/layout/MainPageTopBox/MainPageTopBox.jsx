import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../context/provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faTableColumns,
  faCalendarDays,
  faShareNodes,
  faMagnifyingGlass,
  faFilter,
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import persianDate from "persian-date";
import SelectComponent from "./selectComponent/selectComponent";
import ShareProject from "../../Share/ShareProject";

const MainPageTopBox = () => {
  const {
    taskManagerState,
    setTaskManagerState,
    currentDay,
    setCurrentDay,
    filters,
    setFilters,
  } = useContext(UserContext);

  const [underline, setUnderline] = useState();
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [showShareComponent, setShowShareComponent] = useState(false)
  // const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    if (taskManagerState === "list") {
      setUnderline({ transform: `translate(-124px, 0px)`, width: "138px" });
    } else if (taskManagerState === "column") {
      setUnderline({ transform: `translate(-284px, 0px)`, width: "130px" });
    } else if (taskManagerState === "calendar") {
      setUnderline({ transform: `translate(-441px, 0px)`, width: "70px" });
    }
  }, [taskManagerState]);

  const handleChangeMonth = (action) => {
    const newDate =
      action === "next"
        ? currentDay.add("month", -1)
        : currentDay.add("month", +1);
    setCurrentDay(newDate);
    console.log(
      newDateEn,
      currentDay.toCalendar("gregorian").format("YYYY/M/D")
    );
  };

  const handleSetToday = () => {
    setCurrentDay(new persianDate());
  };

  const addNewFilter = () => {
    setFilters((val) => [
      ...val,
      { id: Math.random(), option: "", tag: "", is: "" },
    ]);
  };

  const handleDeleteTask = (DeletedId) => {
    setFilters((val) => val.filter((obj) => obj.id !== DeletedId));
  };

  let scrollPosition = 0
  const handleScroll = (e) => {
    scrollPosition = e.target.scrollTop;
    console.log(scrollPosition);
  };

  const FilterBox = () => {
    return (
      <div className="absolute bg-white mt-[255px] w-[70%] h-[280px] rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.2)] p-5 flex flex-col gap-3 items-end z-[1]">
        <div className=" flex flex-row-reverse justify-between w-full ">
          <h2 className="text-xl">فیلتر ها</h2>
          <FontAwesomeIcon
            className="text-[15px] p-0 m-0 cursor-pointer "
            icon={faXmark}
            onClick={() => setShowFilterBox(false)}
          />
        </div>
        <div ref={scrollRef} onScroll={handleScroll} className=" overflow-scroll scroll-smooth flex flex-col w-full h-full items-end gap-2 ">
          {filters.map(
            (item, index) => (
              console.log(item),
              (
                <div
                  key={item.id}
                  className="w-full h-9 min-h-9 flex flex-row-reverse items-center justify-between "
                >
                  <div className=" h-9 gap-3 flex flex-row-reverse items-center text-sm ">
                    <p>تسک هایی که</p>
                    {/* <input className="bg-blue-300" type="text" /> */}
                    <SelectComponent type="where" width="130px" topHeight={scrollPosition} index={index} />
                    <p>آن ها</p>
                    <SelectComponent type="tags" width="120px" topHeight={scrollPosition} index={index} />
                    <SelectComponent type="isOrNot" width="80px" topHeight={scrollPosition} index={index} />
                  </div>
                  <FontAwesomeIcon
                    className="text-sm cursor-pointer"
                    onClick={() => handleDeleteTask(item.id)}
                    icon={faTrashCan}
                  />
                </div>
              )
            )
          )}
          <p
            className="text-[#208D8E] text-xs cursor-pointer w-fit "
            onClick={addNewFilter}
          >
            افزودن فیلتر جدید
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className=" min-h-[15%] h-[15%] w-full flex flex-col justify-center items-center">
      {showShareComponent && <ShareProject handleClose={setShowShareComponent} />}
      <div className="h-1/2 h-full w-full flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse gap-4 items-center">
          <p className="border-slate-500 border-l pl-4 text-2xl">پروژه اول</p>
          <p
            onClick={() => {
              setTaskManagerState("list");
            }}
            className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${
              taskManagerState === "list" && "text-[#208D8E]"
            }`}
          >
            نمایش لیستی <FontAwesomeIcon icon={faListCheck} />
          </p>
          <p
            onClick={() => {
              setTaskManagerState("column");
            }}
            className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${
              taskManagerState === "column" && "text-[#208D8E]"
            }`}
          >
            نمایش ستونی <FontAwesomeIcon icon={faTableColumns} />
          </p>
          <p
            onClick={() => {
              setTaskManagerState("calendar");
            }}
            className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${
              taskManagerState === "calendar" && "text-[#208D8E]"
            }`}
          >
            تقویم <FontAwesomeIcon icon={faCalendarDays} />
          </p>
        </div>
        <div onClick={() => setShowShareComponent(true)} className="flex flex-row-reverse gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faShareNodes} />
          <p className="text-sm">اشتراک گذاری</p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-400 flex flex-row-reverse flex items-center">
        <div
          className="h-[3px] bg-[#208D8E] rounded transition-all ease-in-out duration-500"
          style={underline}
        ></div>
      </div>
      <div className="h-1/2 border-b h-full border-slate-500 w-full flex flex-row-reverse items-center gap-5">
        <div className="flex flex-row-reverse items-center ">
          <FontAwesomeIcon
            className="absolute mr-4 text-[20px]"
            icon={faMagnifyingGlass}
          />
          <input
            placeholder="جستجو بین تسک ها"
            className="h-[20px] w-[270px] pr-[50px] text-[12px] border-slate-500 border-l"
          />
        </div>
        {taskManagerState === "calendar" ? (
          <div className="flex flex-row-reverse gap-4 text-[12px] items-center">
            <p onClick={handleSetToday} className="cursor-pointer">
              امروز
            </p>
            <FontAwesomeIcon
              onClick={() => handleChangeMonth("next")}
              className="text-sm mr-1 cursor-pointer"
              icon={faChevronRight}
            />
            <FontAwesomeIcon
              onClick={() => handleChangeMonth("prev")}
              className="text-sm ml-1 cursor-pointer"
              icon={faChevronLeft}
            />
            <p>
              {currentDay.toLocale("fa").format("MMMM")}{" "}
              {currentDay.toLocale("fa").format("YYYY")}
            </p>
          </div>
        ) : (
          <>
            <div
              className="flex flex-row-reverse gap-2 items-center mr-6 cursor-pointer"
              onClick={() => setShowFilterBox((val) => !val)}
            >
              <FontAwesomeIcon className="text-lg" icon={faFilter} />
              <p className="text-sm"> فیلتر</p>
            </div>
            <p className="text-xs">دسته بندی شده با: وضعیت</p>
            {showFilterBox ? <FilterBox /> : <></>}
          </>
        )}
      </div>
    </div>
  );
};

export default MainPageTopBox;
