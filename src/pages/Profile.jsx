import { Fragment } from "react";
import HomePageSidebar from "../components/layout/homePage_sidebar/HomePageSidebar";
import UserProfileSideBar from "../components/User-profile/UserProfileSideBar";
const Profile = () => {
  return (
    <div className="flex flex-row-reverse m-0">
      <div className="w-[24%] min-w-[300px] border-l border-slate-500 h-screen">
        <HomePageSidebar />
        <UserProfileSideBar />
      </div>
      <div className=" w-[76%] h-screen pt-32 px-8">alireza</div>
    </div>
  );
};
export default Profile;
