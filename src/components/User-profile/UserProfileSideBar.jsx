import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGear,
  faUserCheck,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
const UserProfileSideBar = () => {
  return (
    <div className="mt-20 px-8 flex flex-col justify-start items-end">
      <button className="flex items-center justify-center text-sm text-white bg-[#208D8E] gap-x-2 py-1 px-2 rounded mb-8">
        <p>بازگشت</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <ul className="flex flex-col justify-start items-end gap-y-6 w-full">
        <li className="w-full">
          <button className="flex items-center justify-end gap-x-2 w-full bg-[#C5FFFF] p-1 rounded">
            <p>اطلاعات فردی</p>
            <FontAwesomeIcon icon={faUserPen} />
          </button>
        </li>
        <li className="w-full">
          <button className="flex items-center justify-end gap-x-2 w-full bg-[#C5FFFF] p-1 rounded">
            <p className="text-base">اطلاعات حساب</p>
            <FontAwesomeIcon icon={faUserCheck} />
          </button>
        </li>
        <li className="w-full">
          <button className="flex items-center justify-end gap-x-2 w-full bg-[#C5FFFF] p-1 rounded ">
            <p className="text-base">تنظیمات</p>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default UserProfileSideBar;
