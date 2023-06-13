import { Fragment, useState } from "react";
import HomePageSidebar from "../components/layout/homePage_sidebar/HomePageSidebar";
import UserProfileSideBar from "../components/User-profile/UserProfileSideBar";
import UserPersonalInfo from "../components/User-profile/UserPersonalInfo";
import UserAccountInfo from "../components/User-profile/UserAccountInfo";
import UserAccountSetting from "../components/User-profile/UserAccountSetting";
const Profile = () => {
  const [profileVisibleSection, setProfileVisibleSection] =
    useState("personalInfo");
  const changeVisibleSecHandler = (state) => {
    setProfileVisibleSection(state);
  };
  return (
    <div className="flex flex-row-reverse m-0">
      <div className="w-[24%] min-w-[300px] border-l border-slate-500 h-screen">
        {/* <HomePageSidebar /> */}
        <UserProfileSideBar
          onChangeVisibleSec={changeVisibleSecHandler}
          activeBG={profileVisibleSection}
        />
      </div>
      <div className=" w-[76%] h-screen pt-32 px-10">
        <div className="flex flex-col items-end gap-y-4">
          {profileVisibleSection === "personalInfo" ? (
            <UserPersonalInfo />
          ) : profileVisibleSection === "accountInfo" ? (
            <UserAccountInfo />
          ) : (
            <UserAccountSetting />
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
