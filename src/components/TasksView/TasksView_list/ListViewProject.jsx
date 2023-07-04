import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import ListViewBoard from "./ListViewBoard";
import DataContext from "../../../context/data-context";
const ListViewProject = (props) => {

  const { onSetBoadrs, boards, projectId, selectedProject, setProjectId, setSelectedProject, setActiveAccordionSection } = useContext(DataContext);

  return (
    <div className="w-full">
      <div className="flex justify-end gap-2 items-center">
        <h2 className="text-lg">{props.title}</h2>
        <button className="text-xs flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1px] border-black border-solid">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      {/* we need a map on getProjectsByWorkSpaceID */}
      {console.log(boards)}
      {boards.map((item)=>{
        (<>
          <ListViewBoard title={item.name} />
          <ListViewBoard title={item.name}/>
          </>
        )
      })}
    </div>
  );
};
export default ListViewProject;
