import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import ListViewBoard from "./ListViewBoard";
const ListViewProject = (props) => {
  return (
    <div className="w-full">
      <div className="flex justify-end gap-2 items-center">
        <h2 className="text-lg">{props.title}</h2>
        <button className="text-xs flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1px] border-black border-solid">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      {/* we need a map on getProjectsByWorkSpaceID */}
      <ListViewBoard title="Pending" />
      <ListViewBoard title="In Progress" />
    </div>
  );
};
export default ListViewProject;
