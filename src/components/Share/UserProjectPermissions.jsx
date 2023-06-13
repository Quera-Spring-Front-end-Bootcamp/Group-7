const PermissionsButton = (props) => {
  const permissionClickHandler = (e) => {
    props.onClick(props.permission, e);
  };
  return (
    <li className=" hover:bg-slate-100 p-2" onClick={permissionClickHandler}>
      <button>
        <p className="text-xs">{props.permission}</p>
      </button>
    </li>
  );
};

const UserProjectPermissions = (props) => {
  const onClosePermissionMenu = (e) => {
    props.onClose();
    e.stopPropagation();
  };

  const onReceivePermission = (permission, event) => {
    event.stopPropagation();
    props.onChangePermission(permission);
  };

  return (
    <>
      <div
        className="fixed z-10 left-0 top-0 bg-white opacity-10"
        onClick={onClosePermissionMenu}
      ></div>
      <div className="absolute overflow-hidden shadow-[0_3px_8px_0_rgba(0,0,0,0.2)] rounded-lg w-[150px] z-10 left-[-1px] bottom-[-1px] bg-white">
        <ul>
          <PermissionsButton
            onClick={onReceivePermission}
            permission="همه پروژه ها"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="پروژه اول"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="پروژه دوم"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="پروژه سوم"
          />
        </ul>
      </div>
    </>
  );
};
export default UserProjectPermissions;
