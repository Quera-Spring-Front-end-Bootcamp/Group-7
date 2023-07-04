import { useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faTags,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faEye, faFlag } from "@fortawesome/free-regular-svg-icons";
import NewTaskPriority from "./NewTaskPriority";
import NewTaskTag from "./NewTaskTag";
import NewTaskCalendar from "./NewTaskCalendar";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { outsideComponentClick } from "../mostlyUsed/outsideComponentClick/outsideComponentClick";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../context/auth-context";
import SpinnerContext from "../../context/spinner-context";
import DataContext from "../../context/data-context";
const NewTask = ({ handleClose, boardID }) => {
  const { sendServerRequest: addNewTask } = useHttp();
  const [priorityMenuVisibility, setPriorityMenuVisibility] = useState(false);
  const [priority, setPriority] = useState("text-[#B2ACAC]");
  const [tagsMenuVisibility, setTagsMenuVisibility] = useState(false);
  const [calendarVisibility, setCalendarVisibility] = useState(false);
  const textAreaRef = useRef();
  const taskNameRef = useRef();
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const { onSetBoadrs, boards } = useContext(DataContext);

  const addTaskResponseHandler = (data) => {
    // const indexOfBoard = boards.map(val => val._id).indexOf(data.data.board)
    // boards[indexOfBoard].tasks.push(data.data)
    // onSetBoadrs(e => [...e])
    handleClose(false);
    spinnerCtx.modalMsgHandler("تسک جدید با موفقیت ساخته شد");
    spinnerCtx.toggleModal();
  };

  const wrapperRef = useRef(null);
  outsideComponentClick(wrapperRef, setTagsMenuVisibility);

  const priorityShowHandler = () => {
    setPriorityMenuVisibility(true);
  };
  const priorityHandler = () => {
    setPriorityMenuVisibility(false);
  };
  const prioritySelectHandler = (priorityColor) => {
    setPriority(priorityColor);
    setPriorityMenuVisibility(false);
  };
  const tagsShowHandler = () => {
    setTagsMenuVisibility(true);
  };
  const tagsHandler = () => {
    setTagsMenuVisibility(false);
  };
  const calendarShowHandler = () => {
    setCalendarVisibility(true);
  };
  const calendarHandler = () => {
    setCalendarVisibility(false);
  };
  const createNewTaskHandler = () => {
    if (
      taskNameRef.current.value.trim() !== "" &&
      textAreaRef.current.value.trim() !== ""
    ) {
      addNewTask(
        {
          url: "http://localhost:3000/api/task",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authCtx.accessToken,
          },
          body: {
            name: taskNameRef.current.value,
            description: textAreaRef.current.value,
            boardId: boardID,
            label: [{ deadline: "" }, { priority: priority }],
            deadline: new Date(),
          },
        },
        addTaskResponseHandler
      );
    }
  };

  return (
    <BackDrop handleClose={handleClose}>
      <div className="flex justify-center items-center ">
        <div className="fixed left-0 top-0 bg-black opacity-50"></div>
        <div className="w-[1000px] p-4 relative z-10 bg-white rounded-2xl">
          <div className="flex justify-between items-center">
            <FontAwesomeIcon
              onClick={() => handleClose(false)}
              icon={faXmark}
              className="text-[#BDBDBD] cursor-pointer"
            />
            <div className="flex jsutify-end items-center gap-2">
              <input
                ref={taskNameRef}
                type="text"
                placeholder="عنوان تسک"
                className="placeholder:text-xl text-xl border p-1 rounded"
              />
              <div className="w-[15px] h-[15px] bg-[#D9D9D9]"></div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 my-8">
            <p className="flex justify-center items-center border rounded-full h-[35px] w-[35px] border-[2px] border-dotted">
              <FontAwesomeIcon icon={faUserPlus} className="text-[#BDBDBD] " />
            </p>

            <p>برای</p>
            <p className="rounded-md border px-2 py-1 w-[150px]">پروژه اول</p>
            <p>در</p>
          </div>

          <textarea
            ref={textAreaRef}
            placeholder="توضیحاتی برای تسک بنویسید"
            className="w-full border p-4 h-[100px] rounded-lg resize-none overflow-hidden"
          ></textarea>

          <div className="flex items-center justify-end gap-3 my-8">
            <button className="flex items-center justify-end gap-2 border border-[#208D8E] rounded-md px-2 py-1">
              <p>آپلود فایل</p>
              <FontAwesomeIcon icon={faLink} className="text-[#208D8E] " />
            </button>
            <p>افزودن پیوست</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="py-1 px-2 bg-[#208D8E] text-white text-xs text-center rounded-md w-[120px] h-[30px] "
              onClick={createNewTaskHandler}
            >
              ساخت تسک
            </button>
            <div className="flex items-center justify-end gap-4">
              <button className="flex justify-center items-center  h-[40px] w-[40px] relative">
                <p className="absolute flex justify-center items-center w-[20px] h-[20px] bg-[#4AB7D8] text-xs right-[0px] top-0 rounded-full">
                  ۲
                </p>
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-[#BDBDBD] text-xl "
                />
              </button>
              <button
                className="relative flex justify-center items-center border rounded-full h-[40px] w-[40px] border-[2px] border-dotted"
                onClick={tagsShowHandler}
                ref={wrapperRef}
              >
                <FontAwesomeIcon icon={faTags} className="text-[#BDBDBD] " />
                {tagsMenuVisibility && <NewTaskTag onClickTags={tagsHandler} />}
              </button>
              <button
                className="relative flex justify-center items-center border rounded-full h-[40px] w-[40px] border-[2px] border-dotted"
                onClick={calendarShowHandler}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-[#BDBDBD] "
                />
                {calendarVisibility && (
                  <NewTaskCalendar onClickCalendar={calendarHandler} />
                )}
              </button>
              <button
                className={`flex relative justify-center items-center ${priority.replace(
                  "text",
                  "border"
                )} rounded-full h-[40px] w-[40px] border-[2px] border-dotted`}
                onClick={priorityShowHandler}
              >
                <FontAwesomeIcon icon={faFlag} className={`${priority}`} />
                {priorityMenuVisibility && (
                  <NewTaskPriority
                    onClickPriority={priorityHandler}
                    onSelectPriority={prioritySelectHandler}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default NewTask;
