import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import ShareProjectUser from "./ShareProjectUser";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
const ShareProject = ({handleClose}) => {
  return (
    <BackDrop handleClose={handleClose} >
      <div className="flex justify-center items-center">
        <div className="fixed left-0 top-0  bg-black opacity-50"></div>
        <div className="w-[500px] p-4 relative z-10 bg-white rounded-xl">
          <button onClick={() => handleClose(false)} className="absolute text-[#323232] top-[20px] right-[16px]">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className=" pb-0">
            <p className="text-center text-xl">به اشتراک‌گذاری پروژه‌</p>
            <div className="relative my-8">
              <input
                type="text"
                id="share-project__email"
                className="w-full h-[40px] bg-[#F0F1F3] rounded-lg pr-2 pl-[95px]"
                placeholder="دعوت با ایمیل"
              />
              <button className="absolute h-[40px] w-[90px] bg-[#208D8E] left-[0] top-[0] text-white text-center rounded-l-lg">
                ارسال
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button className="border border-solid border-[#E9EBF0] rounded-md px-3 py-[3px] text-xs text-[#1E1E1E]">
              کپی لینک
            </button>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm text-[#1E1E1E]">لینک خصوصی</p>
              <FontAwesomeIcon className="text-[#323232]" icon={faLink} />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="text-sm text-[#7D828C]">اشتراک‌گذاشته شده با</p>
            <div className="flex justify-between items-center">
              <p className="text-xs border border-solid border-slate-300 px-2 py-1 rounded-md">
                دسترسی کامل
              </p>
              <div className="flex justify-end items-center gap-x-2">
                <p className="text-xs bg-[#A5E4F8] px-2 py-1 rounded-md">
                  workspace owner
                </p>
                <p className="text-sm">من</p>
                <img
                  src="https://s3-alpha-sig.figma.com/img/0e35/b8e1/c386fc03b862ed171fd63bb7292d7d01?Expires=1686528000&Signature=gDMcsGrilTmefen7E6-fTuMSXq67FXHluF2K-oT61QO7irMH4wFGrj1SokU8fduAdWYDrGhNHsoCk7~iwUkC3KbMAfuJJVyBABWBVqB121dm5BUhNpsElQ5Ja0I180qlVn567gxUa4lKwZd9KJy9yOBEQ~vB1VT5njU5lVSVbwQUCMJMSut1WJQAfHV2LuuVkgonJHBT8maqFpX3q4hy4Y2kQwx~HwI2b5KiWc1uoXZR2Iplb-3BYmz7Tl8zsvf0VkdLOLqNu8gvxFZT72Sge2A7KkOuTLJi14ZkjOnbIhMIL6TSn204eFJg5Wz4HWvo2hNDVwgjaZXbhQu2hYZB~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="user image"
                  className="w-[34px] h-[34px] rounded-full"
                />
              </div>
            </div>

            <ShareProjectUser
              userEmail="sararahimi@gmail.com"
              userAbbr="SR"
              projectsAccess={false}
            />
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default ShareProject;
