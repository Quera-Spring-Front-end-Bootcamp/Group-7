import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import UserAccessPermissions from "./UserAccessPermissions";
import UserProjectPermissions from "./UserProjectPermissions";

const ShareProjectUser = (props) => {
  const [userAccessMenuVisibility, setUserAccessMenuVisibility] =
    useState(false);
  const [userAccessPermission, setUserAccessPermission] =
    useState("دسترسی کامل");

  const [userProjectMenuVisibility, setUserProjectMenuVisibility] =
    useState(false);
  const [userProjectAccessibility, setUserProjectAccessibility] =
    useState("همه پروژه ها");

  const accessMenuHandler = () => {
    setUserAccessMenuVisibility(true);
  };
  const hideAccessMenuHandler = () => {
    setUserAccessMenuVisibility(false);
  };
  const accessChangeHandler = (permission) => {
    setUserAccessMenuVisibility(false);

    setUserAccessPermission(permission);
  };

  const projectMenuHandler = () => {
    setUserProjectMenuVisibility(true);
  };
  const hideProjectMenuHandler = () => {
    setUserProjectMenuVisibility(false);
  };
  const projectChangeHandler = (permission) => {
    setUserProjectMenuVisibility(false);

    setUserProjectAccessibility(permission);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-1">
        <div
          className="text-xs cursor-pointer border border-solid border-slate-300 px-2 py-1 rounded-md flex justify-between items-center gap-3 relative"
          onClick={accessMenuHandler}
        >
          <FontAwesomeIcon icon={faChevronDown} />
          {userAccessMenuVisibility && (
            <UserAccessPermissions
              onClose={hideAccessMenuHandler}
              onChangePermission={accessChangeHandler}
            />
          )}
          <p>{userAccessPermission}</p>
        </div>

        {props.projectsAccess && (
          <div
            className="text-xs cursor-pointer border border-solid border-slate-300 px-2 py-1 rounded-md flex justify-between items-center gap-3 relative"
            onClick={projectMenuHandler}
          >
            <FontAwesomeIcon icon={faChevronDown} />
            {userProjectMenuVisibility && (
              <UserProjectPermissions
                onClose={hideProjectMenuHandler}
                onChangePermission={projectChangeHandler}
              />
            )}
            <p>{userProjectAccessibility}</p>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center gap-x-2">
        <p className="text-sm px-2 py-1 rounded-md">{props.userEmail}</p>
        <p className="text-sm w-[34px] h-[34px] rounded-full bg-[#F27474] flex justify-center items-center">
          {props.userAbbr}
        </p>
      </div>
    </div>
  );
};
export default ShareProjectUser;
