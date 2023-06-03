import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLink,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const ShareProject = () => {
  return (
    <BackDrop>
      <div className="w-[500px] relative p-4">
        <button className="absolute text-[#323232] top-[20px] right-[16px]">
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

          <div className="flex justify-between items-center">
            <button className="text-xs border border-solid border-slate-300 px-2 py-1 rounded-md flex justify-between items-center gap-3 relative">
              <FontAwesomeIcon icon={faChevronDown} />
              <p>دسترسی کامل</p>
              <div className="absolute p-4 shadow-[0_3px_8px_0_rgba(0,0,0,0.2)] rounded-lg w-[250px] z-10 left-[-1px] top-[-1px] bg-white">
                <ul>
                  <li className="mb-4">
                    <p className="text-xs">دسترسی کامل</p>
                    <small className="text-[10px]">
                      توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف
                      پروژه
                    </small>
                  </li>
                  <li className="mb-4">
                    <p className="text-xs">دسترسی ویرایش</p>
                    <small className="text-[10px]">
                      توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه.
                      نمی‌تواند پروژه را حذف یا تسک جدید بسازد.
                    </small>
                  </li>
                  <li className="mb-4">
                    <p className="text-xs">دسترسی کامنت</p>
                    <small className="text-[10px]">
                      توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر
                      دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.
                    </small>
                  </li>
                  <li className="mb-2">
                    <p className="text-xs">فقط دسترسی مشاهده</p>
                    <small className="text-[10px]">
                      توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.
                    </small>
                  </li>
                </ul>
              </div>
            </button>

            <div className="flex justify-end items-center gap-x-2">
              <p className="text-sm px-2 py-1 rounded-md">
                sararahimi@gmail.com
              </p>
              <p className="text-sm w-[34px] h-[34px] rounded-full bg-[#F27474] flex justify-center items-center">
                SR
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default ShareProject;
