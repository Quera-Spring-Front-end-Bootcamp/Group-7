import HomePageSidebar from "./homePage_sidebar/HomePageSidebar";
import MainPageTopBox from "./MainPageTopBox/MainPageTopBox";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row-reverse h-[100vh]">
      <HomePageSidebar />
      <div className=" w-[74%] p-5 relative box-content ">
        <MainPageTopBox />
        <div className=" w-full h-[85%] ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
