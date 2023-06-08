import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShareProjectPermissions from "./ShareProjectPermissions";

const ShareProjectUser = (props) => {
  const [permissionsVisibility, setPermissionsVisibility] = useState(false);
  const [ProjectPermission, setProjectPermission] = useState("دسترسی کامل");
  const permissionMenuHandler = () => {
    setPermissionsVisibility(true);
  };
  const hidePermissionMenuHandler = () => {
    setPermissionsVisibility(false);
  };
  const permissionChangeHandler = (permission) => {
    setPermissionsVisibility(false);

    setProjectPermission(permission);
  };
  return (
    <div className="flex justify-between items-center">
      <div
        className="text-xs cursor-pointer border border-solid border-slate-300 px-2 py-1 rounded-md flex justify-between items-center gap-3 relative"
        onClick={permissionMenuHandler}
      >
        <FontAwesomeIcon icon={faChevronDown} />
        {permissionsVisibility && (
          <ShareProjectPermissions
            onClose={hidePermissionMenuHandler}
            onChangePermission={permissionChangeHandler}
          />
        )}
        <p>{ProjectPermission}</p>
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
