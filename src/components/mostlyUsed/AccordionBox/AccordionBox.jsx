import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown, faPlus, faPalette, faLink, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import ShareProject from "../../Share/ShareProject";
import ShareWorkSpace from "../../Share/ShareWorkSpace";
import { outsideComponentClick } from "../outsideComponentClick/outsideComponentClick";

const AccordionBox = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(1);
  const [showSubBoxSpace, setShowSubBoxSpace] = useState(false);
  const [showSubBoxProject, setShowSubBoxProject] = useState(false);
  const [showSpaceShare, setShowSpaceShare] = useState(false)
  const [showProjectShare, setShowProjectShare] = useState(false)

  const wrapperRef1 = useRef(null);
  outsideComponentClick(wrapperRef1, setShowSubBoxSpace);
  const wrapperRef2 = useRef(null);
  outsideComponentClick(wrapperRef2, setShowSubBoxProject);

  const handleSpaceOptions = (index) => {
    setShowSubBoxSpace(index);
    setShowSubBoxProject(false);
  };
  const handleProjectOptions = (index) => {
    setShowSubBoxSpace(false);
    setShowSubBoxProject(index);
  };

  const handleShareClick = (place)=>{
    console.log(place);
    if(place === "space"){
      setShowSpaceShare(true); 
      console.log("/////// space")
    }else if(place === "project") {
      setShowProjectShare(true) 
      console.log("/////// project");
    }
    setShowSubBoxProject(false)
    setShowSubBoxSpace(false)
  }

  const SubBoxSpace = () => {
    return (
      <ul ref={wrapperRef1} className="absolute right-[15px] top-[0] z-10 w-[190px] p-[15px] rounded-xl bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ساختن پروژه جدید</p>
          <FontAwesomeIcon icon={faPlus} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ویرایش نام ورک اسپیس</p>
          <FontAwesomeIcon icon={faPenToSquare} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ویرایش رنگ</p>
          <FontAwesomeIcon icon={faPalette} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">کپی لینک</p>
          <FontAwesomeIcon icon={faLink} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer text-red-700 ">
          <p className="text-xs">حذف</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </li>
        <li onClick={()=> handleShareClick("space")} className="flex w-full justify-end items-center gap-2 bg-[#208D8E] rounded p-2 text-white  cursor-pointer ">
          <p className="text-xs">اشتراک گذاری</p>
          <FontAwesomeIcon icon={faShareNodes} />
        </li>
      </ul>
    );
  };
  const SubBoxProject = () => {
    return (
      <ul ref={wrapperRef2} className="absolute right-[15px] top-[0] z-10 w-[190px] p-[15px] rounded-xl bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ساختن تسک جدید</p>
          <FontAwesomeIcon icon={faPlus} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ویرایش نام پروژه</p>
          <FontAwesomeIcon icon={faPenToSquare} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">کپی لینک</p>
          <FontAwesomeIcon icon={faLink} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer text-red-700 ">
          <p className="text-xs">حذف</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </li>
        <li onClick={()=> handleShareClick("project")} className="flex w-full justify-end items-center gap-2 bg-[#208D8E] rounded p-2 text-white  cursor-pointer ">
          <p className="text-xs">اشتراک گذاری</p>
          <FontAwesomeIcon icon={faShareNodes} />
        </li>
      </ul>
    );
  };

  console.log(sections);
  return (
    <div className="flex flex-col gap-6">
      {showSpaceShare && <ShareWorkSpace handleClose={setShowSpaceShare} />}
      {showProjectShare && <ShareProject handleClose={setShowProjectShare} />}
      {sections.map((item, index) => (
        <div key={item.id} className="flex flex-col relative">
          <div className="group/container flex flex-row-reverse items-center justify-between">
            <button
              className="flex flex-row-reverse"
              onClick={() =>
                setActiveSection(activeSection === index ? -1 : index)
              }
            >
              <div
                className="w-5 h-5 ml-2 rounded"
                style={{ backgroundColor: item.sideColor }}
              ></div>
              <p>{item.title}</p>
            </button>
            <span className=" relative ">
              <p
                className=" opacity-0 group-hover/container:opacity-100 mt-[-6px] transition-opacity duration-200 ease-in-out cursor-pointer"
                onClick={() => handleSpaceOptions(item.id)}
              >
                ...
              </p>
              {showSubBoxSpace === item.id && <SubBoxSpace />}
            </span>
          </div>
          <div
            className="transition-[max-height] duration-500 ease-in-out max-h-0 overflow-hidden"
            style={{ maxHeight: activeSection === index ? "300px" : "0px" }}
          >
            {item.projects.length > 0 && (
              <div className="p-[10px] mr-7 flex flex-col gap-4 mt-3">
                {item.projects.map((item2, index2) => (
                  <div className="flex flex-row-reverse w-full items-center justify-between group/container ease-in-out duration-200 hover:bg-[#E9F9FF] p-1.5 rounded ">
                    <p>{item2.title}</p>
                      <p
                        className=" opacity-0 group-hover/container:opacity-100 mt-[-6px] transition-opacity duration-200 ease-in-out cursor-pointer"
                        onClick={() => handleProjectOptions(item2.id)}
                      >
                        ...
                      </p>
                    <span className=" absolute left-[20px] ">
                      {showSubBoxProject === item2.id && <SubBoxProject />}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionBox;
