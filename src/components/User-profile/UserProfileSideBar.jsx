import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGear,
  faUserCheck,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const UserProfileSideBar = (props) => {

  const navigate = useNavigate();

  const personalInfoVisible = () => {
    props.onChangeVisibleSec("personalInfo");
  };
  const accountInfoVisible = () => {
    props.onChangeVisibleSec("accountInfo");
  };
  const accountSettinVisible = () => {
    props.onChangeVisibleSec("accountSetting");
  };
  return (
    <div className="mt-8 px-8 flex flex-col justify-start items-end">
      <h1 className="headerTitle bg-clip-text text-[28px] font-extrabold mb-6">
          کوئرا تسک منیجر
        </h1>
      <button onClick={() => navigate("/")} className="flex items-center justify-center text-sm text-white bg-[#208D8E] gap-x-2 py-1 px-2 rounded mb-8">
        <p>بازگشت</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <ul className="flex flex-col justify-start items-end gap-y-6 w-full">
        <li className="w-full" onClick={personalInfoVisible}>
          <button
            className={`flex items-center justify-end gap-x-2 w-full p-1 rounded ${
              props.activeBG === "personalInfo" ? "bg-[#C5FFFF]" : ""
            }`}
          >
            <p>اطلاعات فردی</p>
            <FontAwesomeIcon icon={faUserPen} />
          </button>
        </li>
        <li className="w-full" onClick={accountInfoVisible}>
          <button
            className={`flex items-center justify-end gap-x-2 w-full p-1 rounded ${
              props.activeBG === "accountInfo" ? "bg-[#C5FFFF]" : ""
            }`}
          >
            <p className="text-base">اطلاعات حساب</p>
            <FontAwesomeIcon icon={faUserCheck} />
          </button>
        </li>
        <li className="w-full" onClick={accountSettinVisible}>
          <button
            className={`flex items-center justify-end gap-x-2 w-full p-1 rounded ${
              props.activeBG === "accountSetting" ? "bg-[#C5FFFF]" : ""
            }`}
          >
            <p className="text-base">تنظیمات</p>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default UserProfileSideBar;
