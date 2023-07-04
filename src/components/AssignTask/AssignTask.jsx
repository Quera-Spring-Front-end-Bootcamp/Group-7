import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useHttp from "../../hooks/use-http";

import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import AuthContext from "../../context/auth-context";
const AssignTask = (props) => {
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [searchedUser, setSsearchedUser] = useState({});
  const [error, setError] = useState(false);
  const nameInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const { sendServerRequest: searchUser } = useHttp();
  const { sendServerRequest: fetchAssignedUsers } = useHttp();

  const searchedUserHandler = (result) => {
    setSsearchedUser(result.data);
  };

  const searchUserHandler = () => {
    if (nameInputRef.current.value.trim() !== "") {
      searchUser(
        {
          url: "http://localhost:3000/api/users/" + nameInputRef.current.value,
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authCtx.accessToken,
          },
        },
        searchedUserHandler
      );
    }
  };

  useEffect(() => {
    const handleFetchedAssigns = (data) => {
      console.log(data);
    };
    fetchAssignedUsers(
      {
        url: "http://localhost:3000/api/task/" + props.id,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      handleFetchedAssigns
    );
  }, []);
  return (
    <BackDrop>
      <div className="flex justify-center items-center">
        <div className="fixed left-0 top-0  bg-black opacity-50"></div>
        <div className="w-[500px] p-4 relative z-10 bg-white rounded-xl">
          <button
            className="absolute text-[#323232] top-[20px] right-[16px]"
            onClick={props.onCloseAssign}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className=" pb-0">
            <p className="text-center text-xl">واگذاری {props.name}</p>
            <div className="relative my-8">
              <input
                ref={nameInputRef}
                type="text"
                id="share-project__email"
                className="w-full h-[40px] bg-[#F0F1F3] rounded-lg pr-2 pl-[95px]"
                placeholder="نام کاربری"
              />
              <button
                className="absolute h-[40px] w-[90px] bg-[#208D8E] left-[0] top-[0] text-white text-center rounded-l-lg"
                onClick={searchUserHandler}
              >
                جستجو
              </button>
            </div>
          </div>
          {/* {searchedUser.map((user) => {
            return (
              <div className="flex justify-between items center">
                <p>{user.username}</p>
                <p>{user.firstname}</p>
              </div>
            );
          })} */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-sm text-[#7D828C]">واگذاری شده به</p>
            <div className="flex justify-between flex-col items-end">
              {assignedUsers.length === 0 ? (
                <p className="text-[#ff0000] text-sm">
                  این پروژه به کاربری واگذار نشده است
                </p>
              ) : (
                assignedUsers.map((user) => <p>کاربر</p>)
              )}
              {/* کاربران که واگذار شده باید اینجا رندر بشه */}
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default AssignTask;
