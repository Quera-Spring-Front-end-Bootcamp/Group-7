import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import useHttp from "../../hooks/use-http";

import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import AuthContext from "../../context/auth-context";
const AssignTask = (props) => {
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [searchedUser, setSsearchedUser] = useState([]);
  const [error, setError] = useState(false);
  const nameInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const { sendServerRequest: searchUser } = useHttp();
  const { sendServerRequest: fetchAssignedUsers } = useHttp();
  const { sendServerRequest: assignTask } = useHttp();
  const { sendServerRequest: unAssignTask } = useHttp();

  const searchedUserHandler = (result) => {
    setSsearchedUser([
      {
        username: result.data.username,
        id: result.data._id,
      },
    ]);
    nameInputRef.current.value = "";
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

  const assighnResultHandler = (result) => {
    setAssignedUsers((prev) => {
      return [...prev, result.data];
    });
    setSsearchedUser([]);
  };

  const assignTaskHandler = () => {
    assignTask(
      {
        url:
          "http://localhost:3000/api/task/" +
          props.id +
          "/assign/" +
          searchedUser[0].id,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      assighnResultHandler
    );
  };
  const unAssighnResultHandler = (result) => {};
  const unassignTaskHandler = (e) => {
    let arg1 = e.target.getAttribute("data-arg1");

    let newArr = assignedUsers.filter((user) => {
      return user.user.username !== arg1;
    });
    setAssignedUsers(newArr);
    unAssignTask(
      {
        url: "http://localhost:3000/api/task/" + props.id + "/assign/" + arg1,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      unAssighnResultHandler
    );
  };

  useEffect(() => {
    const handleFetchedAssigns = (result) => {
      setAssignedUsers(result.data.taskAssigns);
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
          {searchedUser.map((user) => {
            return (
              <div
                className="flex justify-between items-center border-solid border-[1px] border-salte-300 p-1 rounded"
                key={user.id + user._id}
                title="واگذاری تسک"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={assignTaskHandler}
                  className="cursor-pointer"
                />
                <p>{user.username}</p>
              </div>
            );
          })}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-sm text-[#7D828C]">واگذاری شده به</p>
            <div className="flex justify-between flex-col items-end">
              {assignedUsers.length === 0 ? (
                <p className="text-[#ff0000] text-sm">
                  این پروژه به کاربری واگذار نشده است
                </p>
              ) : (
                assignedUsers.map((user) => {
                  return (
                    <div className="flex justify-between items-center p-1 mb-1 border-solid border-[1px] w-full border-slate-300 rounded">
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={unassignTaskHandler}
                        data-arg1={user.user.username}
                        className="text-[#ff0000] cursor-pointer"
                      />
                      <p>{user.user.username}</p>
                    </div>
                  );
                })
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
