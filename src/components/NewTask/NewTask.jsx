import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faTags,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faEye, faFlag } from "@fortawesome/free-regular-svg-icons";

const NewTask = () => {
  return (
    <BackDrop>
      <div className="relative w-[1000px] p-4">
        <div className="flex justify-between items-center">
          <FontAwesomeIcon icon={faXmark} className="text-[#BDBDBD]" />
          <div className="flex jsutify-end items-center gap-2">
            <p className="text-2xl">عنوان تسک</p>
            <div className="w-[15px] h-[15px] bg-[#D9D9D9]"></div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 my-8">
          <p className="flex justify-center items-center border rounded-full h-[35px] w-[35px] border-[2px] border-dotted">
            <FontAwesomeIcon icon={faUserPlus} className="text-[#BDBDBD] " />
          </p>

          <p>برای</p>
          <p className="rounded-md border px-2 py-1 w-[150px]">پروژه اول</p>
          <p>در</p>
        </div>

        <textarea
          placeholder="توضیحاتی برای تسک بنویسید"
          className="w-full border p-4 h-[40px] rounded-lg resize-none"
        ></textarea>

        <div className="flex items-center justify-end gap-3 my-8">
          <button className="flex items-center justify-end gap-2 border border-[#208D8E] rounded-md px-2 py-1">
            <p>آپلود فایل</p>
            <FontAwesomeIcon icon={faLink} className="text-[#208D8E] " />
          </button>
          <p>افزودن پیوست</p>
        </div>

        <div className="flex items-center justify-between">
          <button className="py-1 px-2 bg-[#208D8E] text-white text-xs text-center rounded-md w-[120px] h-[30px]">
            ساخت تسک
          </button>
          <div className="flex items-center justify-end gap-4">
            <button className="flex justify-center items-center  h-[40px] w-[40px] relative">
              <p className="absolute flex justify-center items-center w-[20px] h-[20px] bg-[#4AB7D8] text-xs right-[0px] top-0 rounded-full">
                ۲
              </p>
              <FontAwesomeIcon
                icon={faEye}
                className="text-[#BDBDBD] text-xl "
              />
            </button>
            <button className="flex justify-center items-center border rounded-full h-[40px] w-[40px] border-[2px] border-dotted">
              <FontAwesomeIcon icon={faTags} className="text-[#BDBDBD] " />
            </button>
            <button className="flex justify-center items-center border rounded-full h-[40px] w-[40px] border-[2px] border-dotted">
              <FontAwesomeIcon icon={faCalendar} className="text-[#BDBDBD] " />
            </button>
            <button className="flex justify-center items-center border rounded-full h-[40px] w-[40px] border-[2px] border-dotted">
              <FontAwesomeIcon icon={faFlag} className="text-[#BDBDBD] " />
            </button>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default NewTask;
