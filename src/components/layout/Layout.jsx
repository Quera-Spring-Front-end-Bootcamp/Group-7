import HomePageSidebar from "./homePage_sidebar/HomePageSidebar"
import MainPageTopBox from "./MainPageTopBox/MainPageTopBox"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-row-reverse h-[100vh]">
            <HomePageSidebar />
            <div className="flex flex-col w-full p-5">
                <MainPageTopBox />
                {children}
            </div>
        </div>
    )
}

export default Layout