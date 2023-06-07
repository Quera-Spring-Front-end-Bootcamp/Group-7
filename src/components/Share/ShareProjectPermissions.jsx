const PermissionsButton = (props) => {
  const permissionClickHandler = (e) => {
    props.onClick(props.permission, e);
  };
  return (
    <li className=" hover:bg-slate-100 p-2" onClick={permissionClickHandler}>
      <button>
        <p className="text-xs">{props.permission}</p>
        <small className="text-[10px]">{props.description}</small>
      </button>
    </li>
  );
};

const ShareProjectPermissions = (props) => {
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
        className="fixed z-10 left-0 top-0 w-screen h-screen bg-white opacity-10"
        onClick={onClosePermissionMenu}
      ></div>
      <div className="absolute overflow-hidden shadow-[0_3px_8px_0_rgba(0,0,0,0.2)] rounded-lg w-[250px] z-10 left-[-1px] bottom-[-1px] bg-white">
        <ul>
          <PermissionsButton
            onClick={onReceivePermission}
            permission="دسترسی کامل"
            description="توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="دسترسی ویرایش"
            description="توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="دسترسی کامنت"
            description="توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد"
          />
          <PermissionsButton
            onClick={onReceivePermission}
            permission="فقط دسترسی مشاهده"
            description="توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد"
          />
        </ul>
      </div>
    </>
  );
};
export default ShareProjectPermissions;
