import "./HomePageSidebar_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
  faDoorOpen,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
// import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import AccordionBox from "../../mostlyUsed/AccordionBox/AccordionBox";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/provider";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import NewWorkSpace from "../../WorkSpace/NewWorkSpace";
import useHttp from "../../../hooks/use-http";

const HomePageSidebar = () => {
  const authCtx = useContext(AuthContext);
  const { spaces } = useContext(UserContext);

  const [showNewWorkSpace, setShowNewWorkSpace] = useState(false);
  const [inputval, setInputval] = useState("");

  const navigate = useNavigate();

  // const sections = [
  //     {
  //       title: 'Section 1',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //     },
  //     {
  //       title: 'Section 2',
  //       content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  //     },
  //     {
  //       title: 'Section 3',
  //       content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  //     }
  //   ];
  const newWorkSpaceCreated = (val) =>{
    console.log(val);
  }

  const createNewWorkspace =  useHttp(
		{
		  url: "http://localhost:3000/api/workspace/create",
		  method: "POST",
		  body: {
        name: "new space",
		  },
		},
		newWorkSpaceCreated
	  );

  const userLogOutHandler = () => {
    authCtx.logout();
    localStorage.clear();
  };

  const handleNewWorkSpaceClick = () => {
    setShowNewWorkSpace((val) => !val);
  };

  return (
    <div className="w-[23%] min-w-[23%] border-l border-slate-500 pt-8 pr-8 pl-4 flex flex-col justify-between text-[14px]">
      {showNewWorkSpace && <NewWorkSpace handleClose={setShowNewWorkSpace} />}
      <div className="flex flex-col gap-4">
        <h1 className="headerTitle bg-clip-text text-[28px] font-extrabold mb-6">
          کوئرا تسک منیجر
        </h1>
        <div className="flex flex-row-reverse justify-between">
          <p>ورک اسپیس ها</p>
          <div className="flex flex-row-reverse gap-5">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center">
          <FontAwesomeIcon
            className="absolute mr-4 text-[20px]"
            icon={faMagnifyingGlass}
          />
          <input
            value={inputval}
            onChange={(e) => setInputval(e.target.value)}
            className="bg-[#F6F7F9] rounded h-[40px] pr-12 w-full"
          />
        </div>
        <button
          onClick={handleNewWorkSpaceClick}
          className="bg-[#D3D3D3] hover:bg-[#c5c5c5] h-8 w-full flex items-center justify-center gap-2 rounded "
        >
          {" "}
          <p className="text-[13px]">ساختن اسپیس جدید</p>{" "}
          <FontAwesomeIcon icon={faSquarePlus} />{" "}
        </button>
        <AccordionBox spacesFilter={inputval} sections={spaces} />
      </div>
      <div className="flex flex-col gap-5 items-end">
        <div
          onClick={() => navigate("/profile")}
          className="flex flex-row-reverse items-center gap-2 mt-4 cursor-pointer"
        >
          <div className="w-[35px] h-[35px] bg-[#EAF562] rounded-[50%] flex justify-center items-center text-[10px]">
            {localStorage.getItem("first_name")
              ? localStorage.getItem("first_name").slice(0, 1).toUpperCase() +
                " " +
                localStorage.getItem("last_name").slice(0, 1).toUpperCase()
              : localStorage.getItem("user").slice(0, 2).toUpperCase()}
          </div>
          <p>
            {localStorage.getItem("first_name")
              ? localStorage.getItem("first_name") +
                " " +
                localStorage.getItem("last_name")
              : localStorage.getItem("user")}
          </p>
        </div>
        <button
          className="flex flex-row-reverse mr-2 mb-2 gap-2 opacity-60 items-center w-[100px]"
          onClick={userLogOutHandler}
        >
          <FontAwesomeIcon className="text-[20px]" icon={faDoorOpen} />
          <p>خروج</p>
        </button>
      </div>
    </div>
  );
};

export default HomePageSidebar;
