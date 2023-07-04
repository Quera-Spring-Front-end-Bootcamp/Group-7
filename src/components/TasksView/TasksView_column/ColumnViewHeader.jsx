import { useState, useContext, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faPlus,
  faFileArrowDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFlag,
  faSquareCheck,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import classes from "./TasksView_list.module.css";
import ColumnViewTask from "./ColumnViewTask";
import AuthContext from "../../../context/auth-context";
import SpinnerContext from "../../../context/spinner-context";
import DataContext from "../../../context/data-context";
const ColumnViewHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const { onSetBoadrs, boards } = useContext(DataContext);
  const [dragOverShadow, SetragOverShadow] = useState(false);
  const [dropedTaskId, setDropedTaskId] = useState(123);
  const [isEditingBoardName, setIsEditingBoardName] = useState(false);
  const [editingBoardNameValue, setEditingBoardNameValue] = useState(
    props.title
  );
    const [randomColor, setRandomColor] = useState("")

  const { sendServerRequest: changeBoardOfTask } = useHttp();
  const { sendServerRequest: editBoard } = useHttp();
  const { sendServerRequest: deleteBoard } = useHttp();

  useEffect(()=>{
    const color = [
      "orange",
      "black",
      "yellow",
      "gray",
      "green",
      "purple",
      "red",
      "brown",
      "pink",
      "blue"
    ];
  
    const random = Math.floor(Math.random() * color.length)
    if(!randomColor){setRandomColor(color[random])}
  },[])

  const taskAddHandler = () => {
    props.OnAddNewTask(props.id);
    props.handleClose(true);
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  const dragEnterHandler = (e) => {
    e.preventDefault();
    props.onDragItem();
    SetragOverShadow(true);
  };
  const dragLeaveHandler = () => {
    SetragOverShadow(false);
  };
  const dragedItemHandler = (dragedTaskId) => {
    props.onDragItem(dragedTaskId);
  };
  const changedTaskBoarddataHandler = (data) => {
    spinnerCtx.modalMsgHandler("بورد تسک مورد نظر با موفقیت تغییر کرد");
    spinnerCtx.toggleModal();
    console.log(data);
  };
  const dragDropHandler = (event) => {
    event.preventDefault();
    let concatesURL = "http://localhost:3000/api/task/".concat(
      props.dragItem,
      "/board/",
      props.id
    );
    changeBoardOfTask(
      {
        url: concatesURL,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      changedTaskBoarddataHandler
    );
    SetragOverShadow(false);
    props.counterReset();
    console.log(dropedTaskId, dragOverShadow);
  };

  const onEditBoardNameHandler = () => {
    const editedBoard = (val) => {
      setIsEditingBoardName(false);
      setEditingBoardNameValue("");
      boards.map((e) => {
        if (e._id === val.data._id) {
          e.name = val.data.name;
        }
      });
      onSetBoadrs((e) => [...e]);
    };

    editBoard(
      {
        url: `http://localhost:3000/api/board/${props.id}`,
        method: "PUT",
        body: {
          name: editingBoardNameValue,
        },
      },
      editedBoard
    );
  };

  const handleBoardDelete = () => {
    const deletedBoard = (val) => {
      onSetBoadrs((prev) => prev.filter((e) => e._id !== val.data._id));
    };
    if (confirm(`آیا از پاک کردن ستون با نام ${props.title} اطمینان دارید؟`)) {
      deleteBoard(
        {
          url: `http://localhost:3000/api/board/${props.id}`,
          method: "DELETE",
        },
        deletedBoard
      );
    }
  };

  return (
    <div
      className={` ${classes.box} ${
        dragOverShadow ? "shadow-[0_2px_8px_rgba(255,0,0,0.99)]" : ""
      } `}
      onDragOver={dragOverHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dragDropHandler}
    >
      {isEditingBoardName ? (
        <div
          className={` group/container shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded border-solid border-t-[1px] h-[42px] w-[250px] cursor-pointer box-content	 `}
          style={{ borderColor: randomColor }}
        >
          <div className=" flex items-center justify-center h-[25px] gap-2 opacity-0 group-hover/container:opacity-100 transition-opacity duration-200 ease-in"></div>
          <div className="flex items-center ">
            {/* <span className="inline-flex bg-slate-100 w-[20px] justify-center items-center rounded-lg">
            {props.count}
          </span> */}
            <button
              className="text-xs text-white p-1 rounded mx-1 bg-red-500"
              onClick={() => {
                setIsEditingBoardName(false);
                setEditingBoardNameValue("");
              }}
            >
              بستن
            </button>
            <button
              className="text-xs text-white p-1 rounded mr-1 bg-[#208D8E]"
              onClick={onEditBoardNameHandler}
            >
              افزودن
            </button>
            <input
              className="border border-gray-200 rounded pr-1 mr-1 text-sm"
              onChange={(e) => setEditingBoardNameValue(e.target.value)}
              value={editingBoardNameValue}
            />
          </div>
        </div>
      ) : (
        <div
          className={` group/container w-full shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded py-2 px-3 border-solid border-t-[1px]`}
          style={{ borderColor: randomColor}}
        >
          <div className=" flex items-center justify-center h-[25px] gap-2 opacity-0 group-hover/container:opacity-100 transition-opacity duration-200 ease-in">
            <button
              className=" group/button relative flex items-center justify-center h-[25px] w-[25px]"
              onClick={taskAddHandler}
            >
              <FontAwesomeIcon icon={faPlus} />
              <p className="absolute text-xs whitespace-nowrap bg-slate-700 text-white p-1 rounded left-[-100%] top-[-25px] opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 ease-in">
                افزودن تسک
              </p>
            </button>
            <button className="relative group/menu ">
              <p className="tracking-wider -translate-y-[3px]">...</p>
              <ul className="absolute left-[0] top-[0] z-10 w-[165px] p-[15px] rounded-xl bg-white hidden group-hover/menu:block shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
                <li
                  onClick={() => {
                    setIsEditingBoardName(true);
                    setEditingBoardNameValue(props.title);
                  }}
                  className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60"
                >
                  <p className="text-xs">ویرایش نام ستون</p>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </li>
                <li
                  onClick={taskAddHandler}
                  className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60"
                >
                  <p className="text-xs">افزودن تسک</p>
                  <FontAwesomeIcon icon={faPlus} />
                </li>
                <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                  <p className="text-xs">آرشیو تمام تسکها</p>
                  <FontAwesomeIcon icon={faFileArrowDown} />
                </li>
                <li
                  onClick={handleBoardDelete}
                  className="flex w-full justify-end items-center gap-2 hover:opacity-60"
                >
                  <p className="text-xs">حذف ستون</p>
                  <FontAwesomeIcon icon={faTrashCan} />
                </li>
              </ul>
            </button>
          </div>
          <div>
            <span className="inline-flex bg-slate-100 w-[20px] justify-center items-center rounded-lg">
              {props.tasks.length}
            </span>
            <span className="ml-1">{props.title}</span>
          </div>
        </div>
      )}
      {props.tasks.map((task) => (
        <ColumnViewTask
          description={task.description}
          name={task.name}
          id={task._id}
          key={task._id}
          label={task.label}
          getDragedTaskID={dragedItemHandler}
        />
      ))}
    </div>
  );
};
export default ColumnViewHeader;
