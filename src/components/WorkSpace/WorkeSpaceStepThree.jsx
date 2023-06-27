const WorkeSpaceStepThree = (props) => {

  const showSpaceInfo = () => {
    console.log(props.spaceInfo);
    props.onSubmitWorkspace()
  };
  return (
    <div className="p-4 pb-0">
      <p className="text-center text-2xl">مرور اطلاعات</p>
      <div className="my-4">
        <div className="border border-solid border-slate-300 rounded p-4 flex justify-between flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <p>{props.spaceInfo.name}</p>
            <p>نام ورک‌اسپیس</p>
          </div>
          <div className="flex justify-between items-center">
            <div
              className="w-[15px] h-[15px]"
              style={{ backgroundColor: props.spaceInfo.color }}
            ></div>
            <p>رنگ ورک‌اسپیس</p>
          </div>
          <div className="flex justify-between items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1686528000&Signature=gDMcsGrilTmefen7E6-fTuMSXq67FXHluF2K-oT61QO7irMH4wFGrj1SokU8fduAdWYDrGhNHsoCk7~iwUkC3KbMAfuJJVyBABWBVqB121dm5BUhNpsElQ5Ja0I180qlVn567gxUa4lKwZd9KJy9yOBEQ~vB1VT5njU5lVSVbwQUCMJMSut1WJQAfHV2LuuVkgonJHBT8maqFpX3q4hy4Y2kQwx~HwI2b5KiWc1uoXZR2Iplb-3BYmz7Tl8zsvf0VkdLOLqNu8gvxFZT72Sge2A7KkOuTLJi14ZkjOnbIhMIL6TSn204eFJg5Wz4HWvo2hNDVwgjaZXbhQu2hYZB~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="user avatar"
              className="w-[35px] h-[35px] rounded-full"
            />
            <p>اعضا</p>
          </div>
        </div>
        <button
          className="w-full bg-[#208D8E] p-2.5 rounded mt-8 text-white text-center text-sm"
          onClick={showSpaceInfo}
        >
          ساختن ورک‌اسپیس
        </button>
      </div>
    </div>
  );
};
export default WorkeSpaceStepThree;
