import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faFileArrowDown,
  faPlus,
  faPalette,
  faLink,
  faShareNodes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../../context/provider";
import useHttp from "../../../hooks/use-http";
import NewProject from "../../Project/NewProject";
import ShareProject from "../../Share/ShareProject";
import ShareWorkSpace from "../../Share/ShareWorkSpace";
import WorkeSpaceStepTwo from "../../WorkSpace/WorkeSpaceStepTwo";
import BackDrop from "../BackDrop/BackDrop";
import { outsideComponentClick } from "../outsideComponentClick/outsideComponentClick";

const AccordionBox = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(1);
  const [showSubBoxSpace, setShowSubBoxSpace] = useState(false);
  const [showSubBoxProject, setShowSubBoxProject] = useState(false);
  const [showSpaceShare, setShowSpaceShare] = useState(false);
  const [showProjectShare, setShowProjectShare] = useState(false);
  const [workspaceColor, setWorkspaceColor] = useState("");
  const [editingColorId, setEditingColorId] = useState("");
  const [isEditing, setIsEditing] = useState({
    spaceName: false,
    spaceColor: false,
    projectName: false,
  });
  const [showNewProject, setShowNewProject] = useState(false)

  const { sendServerRequest: deleteWorkspace } = useHttp();
  const { sendServerRequest: editWorkspaceName } = useHttp();
  const { sendServerRequest: editWorkspaceColor } = useHttp();
  const { sendServerRequest: deleteProject } = useHttp();
  const { sendServerRequest: editProjectName } = useHttp();
  const contextData = useContext(UserContext);

  const otherFunc = () => {
    setIsEditing({
      spaceName: false,
      spaceColor: false,
      projectName: false,
    });
  };

  const wrapperRef1 = useRef(null);
  outsideComponentClick(wrapperRef1, setShowSubBoxSpace, otherFunc);
  const wrapperRef2 = useRef(null);
  outsideComponentClick(wrapperRef2, setShowSubBoxProject);

  const handleSpaceOptions = (index) => {
    setShowSubBoxSpace(index);
    setShowSubBoxProject(false);
  };
  const handleProjectOptions = (index) => {
    setShowSubBoxSpace(false);
    setIsEditing({
      spaceName: false,
      spaceColor: false,
      projectName: false,
    });
    setShowSubBoxProject(index);
  };

  const handleShareClick = (place) => {
    console.log(place);
    if (place === "space") {
      setShowSpaceShare(true);
      console.log("/////// space");
    } else if (place === "project") {
      setShowProjectShare(true);
      console.log("/////// project");
    }
    setShowSubBoxProject(false);
    setShowSubBoxSpace(false);
    setIsEditing({
      spaceName: false,
      spaceColor: false,
      projectName: false,
    });
  };

  const handleSpaceDelete = (item) => {
    if (
      confirm(`آیا از پاک کردن اسپیس با نام " ${item.name} " اطمینان دارید؟`)
    ) {
      const deletedWorkspace = (val) => {
        console.log(val);
        contextData.setSpaces((e) =>
          e.filter((data) => data._id !== val.data._id)
        );
      };
      

      deleteWorkspace(
        {
          url: `http://localhost:3000/api/workspace/${item._id}`,
          method: "DELETE",
        },
        deletedWorkspace
      );
    }
  };
  const handleProjectDelete=(item)=>{
    console.log(item)
    if (
      confirm(`آیا از پاک کردن پروژه با نام " ${item.name} " اطمینان دارید؟`)
    ) {
      const deletedProject = (val) => {
        console.log(val);
        

        const spaceIndex = contextData.spaces.map(e => e._id).indexOf(val.data.workspace)
        console.log(spaceIndex)
        const newProjects = contextData.spaces
        newProjects[spaceIndex].projects = newProjects[spaceIndex].projects.filter((data) => data._id !== val.data._id)
        contextData.setSpaces([...newProjects])
      
       
      };
      

      deleteProject(
        {
          url: `http://localhost:3000/api/projects/${item._id}`,
          method: "DELETE",
        },
        deletedProject
      );
    }
  }

  const handleEditSpaceName = (e, item) => {
    console.log(e.target.value);
    if (e.key === "Enter" && e.target.value !== "") {
      const EditedSpaceName = (val) => {
        console.log(val);
        console.log(contextData.spaces);
        const editedIndex = contextData.spaces
          .map((e) => e._id)
          .indexOf(val.data._id);
        console.log(editedIndex);
        contextData.spaces[editedIndex].name = val.data.name;
        contextData.setSpaces([...contextData.spaces]);
        isEditing.spaceName = false;
        setIsEditing({ ...isEditing });
      };

      editWorkspaceName(
        {
          url: `http://localhost:3000/api/workspace/${item._id}`,
          method: "PATCH",
          body: {
            name: e.target.value,
          },
        },
        EditedSpaceName
      );
    }
  };

  const handleEditProjectName = (e, item) => {
    console.log(e.target.value);
    if (e.key === "Enter" && e.target.value !== "") {
      const EditedProjectName = (val) => {
        const editedSpaceIndex = contextData.spaces.map((e) => e._id).indexOf(val.data.workspace);
        const editedProjectsIndex = contextData.spaces[editedSpaceIndex].projects.map((e) => e._id).indexOf(val.data._id);
        contextData.spaces[editedSpaceIndex].projects[editedProjectsIndex].name = val.data.name;
        contextData.setSpaces([...contextData.spaces]);
        setIsEditing(e => {return{...e, projectName: false}});
      };

      editProjectName(
        {
          url: `http://localhost:3000/api/projects/${item._id}`,
          method: "PUT",
          body: {
            name: e.target.value,
          },
        },
        EditedProjectName
      );
    }
  };

  const handleEditSpaceColor = (item) => {
    const EditedSpaceColor = (val) => {
      const editedIndex = contextData.spaces
        .map((e) => e._id)
        .indexOf(val.data._id);
      console.log(editedIndex);
      contextData.spaces[editedIndex].image = val.data.image;
      contextData.setSpaces([...contextData.spaces]);
      setIsEditing((prev) => {
        return { ...prev, spaceColor: false };
      });
    };

    editWorkspaceColor(
      {
        url: `http://localhost:3000/api/workspace/${editingColorId}`,
        method: "PATCH",
        body: {
          image: workspaceColor,
        },
      },
      EditedSpaceColor
    );
  };

  const SubBoxSpace = ({ item }) => {
    console.log(item);
    return (
      <ul
        ref={wrapperRef1}
        className="absolute right-[15px] top-[0] z-10 w-[190px] p-[15px] rounded-xl bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]"
      >
        <li onClick={()=>{setShowNewProject(item._id); setShowSubBoxSpace(false)}} className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ساختن پروژه جدید</p>
          <FontAwesomeIcon icon={faPlus} />
        </li>

        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          {isEditing.spaceName ? (
            <div className=" bg-gray-200 h-7 w-full flex justify-center items-center rounded">
              <button
              onClick={() => setIsEditing(e => {return {...e, spaceName: false}})}
              className=" text-[#323232] ml-1 mt-[2px]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
              <input
                className="w-[90%] bg-gray-200 text-xs"
                placeholder="برای تایید اینتر بزنید"
                onKeyUp={(e) => handleEditSpaceName(e, item)}
                defaultValue = {item.name}
              />
              
            </div>
          ) : (
            <>
              <p onClick={() => {setIsEditing((prev)=>{ return {...prev,spaceName:true } });  }} className="text-xs" >
                ویرایش نام ورک اسپیس
              </p>
              <FontAwesomeIcon icon={faPenToSquare} />
            </>
          )}
        </li>
        <li
          onClick={() => {
            setIsEditing((e) => {
              return { ...e, spaceColor: true };
            });
            setShowSubBoxSpace(false);
            setEditingColorId(item._id);
          }}
          className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer "
        >
          <p className="text-xs">ویرایش رنگ</p>
          <FontAwesomeIcon icon={faPalette} />
        </li>

        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">کپی لینک</p>
          <FontAwesomeIcon icon={faLink} />
        </li>
        <li
          onClick={() => handleSpaceDelete(item)}
          className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer text-red-700 "
        >
          <p className="text-xs">حذف</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </li>
        <li
          onClick={() => handleShareClick("space")}
          className="flex w-full justify-end items-center gap-2 bg-[#208D8E] rounded p-2 text-white  cursor-pointer "
        >
          <p className="text-xs">اشتراک گذاری</p>
          <FontAwesomeIcon icon={faShareNodes} />
        </li>
      </ul>
    );
  };
  const SubBoxProject = ({item}) => {
    return (
      <ul
        ref={wrapperRef2}
        className="absolute right-[15px] top-[0] z-10 w-[190px] p-[15px] rounded-xl bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]"
      >
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">ساختن تسک جدید</p>
          <FontAwesomeIcon icon={faPlus} />
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
        {isEditing.projectName ? (
            <div className=" bg-gray-200 h-7 w-full flex justify-center items-center rounded">
              <button
              onClick={() => setIsEditing(e => {return {...e, projectName: false}})}
              className=" text-[#323232] ml-1 mt-[2px]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
              <input
                className="w-[90%] bg-gray-200 text-xs"
                placeholder="برای تایید اینتر بزنید"
                onKeyUp={(e) => handleEditProjectName(e, item)}
                defaultValue = {item.name}
              />
              
            </div>
          ) : (
            <>
          <p  onClick={() => {setIsEditing((prev)=>{ return {...prev,projectName:true } });  }} className="text-xs">ویرایش نام پروژه</p>
          <FontAwesomeIcon icon={faPenToSquare} />
          </>
            )}
        </li>
        <li className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer ">
          <p className="text-xs">کپی لینک</p>
          <FontAwesomeIcon icon={faLink} />
        </li>
        <li  className="flex w-full justify-end items-center gap-2 mb-4 cursor-pointer text-red-700 ">
          <p  onClick={()=>handleProjectDelete(item)} className="text-xs">حذف</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </li>
        <li
          onClick={() => handleShareClick("project")}
          className="flex w-full justify-end items-center gap-2 bg-[#208D8E] rounded p-2 text-white  cursor-pointer "
        >
          <p className="text-xs">اشتراک گذاری</p>
          <FontAwesomeIcon icon={faShareNodes} />
        </li>
      </ul>
    );
  };

  console.log(sections);
  return (
    <div className="flex flex-col gap-6">
      {showNewProject && <NewProject handleClose={setShowNewProject} spaceId={showNewProject} />}
      {isEditing.spaceColor && (
        <BackDrop>
          <div className="w-[500px] relative">
            <div className="flex justify-center items-center gap-x-2 absolute left-[50%] bottom-[-55px] translate-x-[-50%]"></div>
            <button
              onClick={() => setIsEditing(e => {return {...e, spaceColor: false}})}
              className="absolute text-[#323232] top-[24px] right-[16px]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <WorkeSpaceStepTwo
              setWorkspaceColor={setWorkspaceColor}
              onSelectColor={handleEditSpaceColor}
            />
          </div>
        </BackDrop>
      )}
      {showSpaceShare && <ShareWorkSpace handleClose={setShowSpaceShare} />}
      {showProjectShare && <ShareProject handleClose={setShowProjectShare} />}
      {sections.map((item, index) => (
        <div key={item._id} className="flex flex-col relative">
          <div className="group/container flex flex-row-reverse items-center justify-between">
            <button
              className="flex flex-row-reverse"
              onClick={() =>
                setActiveSection(activeSection === index ? -1 : index)
              }
            >
              <div
                className="w-5 h-5 ml-2 rounded"
                style={{ backgroundColor: item.image }}
              ></div>
              <p>{item.name}</p>
            </button>
            <span className=" relative ">
              <p
                className=" opacity-0 group-hover/container:opacity-100 mt-[-6px] transition-opacity duration-200 ease-in-out cursor-pointer"
                onClick={() => handleSpaceOptions(item._id)}
              >
                ...
              </p>
              {showSubBoxSpace === item._id && <SubBoxSpace item={item} />}
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
                    <p>{item2.name}</p>
                    <p
                      className=" opacity-0 group-hover/container:opacity-100 mt-[-6px] transition-opacity duration-200 ease-in-out cursor-pointer"
                      onClick={() => handleProjectOptions(item2._id)}
                    >
                      ...
                    </p>
                    <span className=" absolute left-[20px] ">
                      {showSubBoxProject === item2._id && <SubBoxProject item={item2}/>}
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
