import { useState, useContext } from "react";
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
const ColumnViewHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const [dragOverShadow, SetragOverShadow] = useState(false);
  const [dropedTaskId, setDropedTaskId] = useState(123);
  const { sendServerRequest: changeBoardOfTask } = useHttp();
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
      <div
        className={` group/container w-full shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded py-2 px-3 border-solid border-t-[1px]`}
        style={{ borderColor: props.borderColor }}
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
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">ویرایش نام ستون</p>
                <FontAwesomeIcon icon={faPenToSquare} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">افزودن تسک</p>
                <FontAwesomeIcon icon={faPlus} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">آرشیو تمام تسکها</p>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 hover:opacity-60">
                <p className="text-xs">حذف ستون</p>
                <FontAwesomeIcon icon={faTrashCan} />
              </li>
            </ul>
          </button>
        </div>
        <div>
          <span className="inline-flex bg-slate-100 w-[20px] justify-center items-center rounded-lg">
            {props.count}
          </span>
          <span className="ml-1">{props.title}</span>
        </div>
      </div>
      {props.tasks.map((task) => (
        <ColumnViewTask
          description={task.description}
          deadline={task.deadline}
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
