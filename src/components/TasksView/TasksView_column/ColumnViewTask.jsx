import { useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faPlus,
  faFileArrowDown,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFlag,
  faSquareCheck,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import TaskInformation from "../../pop-ups/TaskInformation";
import useHttp from "../../../hooks/use-http";
import SpinnerContext from "../../../context/spinner-context";
import AuthContext from "../../../context/auth-context";
import NewTaskTag from "../../NewTask/NewTaskTag";
import NewTaskTagsMenu from "../../NewTask/NewTaskTagsMenu";
import TagsContext from "../../../context/tags-context";
const ColumnViewTask = (props) => {
  const [showTaskInfo, setShowTaskInfo] = useState(false);
  const [dragStart, setDragStart] = useState(false);
  const [showTagsMenu, setShowTagsMenu] = useState(false);
  const [taskTagsList, setTaskTagList] = useState([]);
  const [tagColorMenu, setTagcolorMenu] = useState(false);
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const tagsCtx = useContext(TagsContext);
  const { sendServerRequest: fetchTags } = useHttp();

  const { sendServerRequest: deleteTask } = useHttp();

  const addNewTagToTaskHandler = (data) => {
    console.log(props.deadline);
    setTaskTagList((prev) => {
      return [...prev, data];
    });
  };

  const addTagHandler = (e) => {
    e.stopPropagation();
    tagsCtx.setTagNames(taskTagsList);
    setShowTagsMenu(true);
  };
  useEffect(() => {
    const fetchedTagsHandler = (result) => {
      setTaskTagList(result.data.tags);
    };
    fetchTags(
      {
        url: "http://localhost:3000/api/tags/task/" + props.id,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      fetchedTagsHandler
    );
  }, []);

  const dragStartHandler = useCallback(() => {
    props.getDragedTaskID(props.id);
    setDragStart(true);
  }, []);
  const dragEndHandler = () => {
    setDragStart(false);
  };

  const showTaskInfoHandler = () => {
    setShowTaskInfo(true);
  };
  const closeTaskInfo = () => {
    setShowTaskInfo(false);
  };
  const removeTaskResponseHandler = (data) => {
    spinnerCtx.modalMsgHandler("تسک با موفقیت حذف گردید");
    spinnerCtx.toggleModal();
  };
  const taskDeleteHandler = (e) => {
    e.stopPropagation();
    deleteTask(
      {
        url: "http://localhost:3000/api/task/" + props.id,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      removeTaskResponseHandler
    );
  };
  return (
    <>
      {showTaskInfo && (
        <TaskInformation
          onClose={closeTaskInfo}
          name={props.name}
          description={props.description}
          id={props.id}
          img={
            "https://boomerangapp.ir/wp-content/themes/boomerang/inc/img/Character-Woman-1.png"
          }
          deadline={props.deadline}
        />
      )}
      <div
        className={`group ${
          dragStart ? "border-2 border-indigo-500 border-solid " : ""
        }
      
         cursor-pointer bg-white w-[100%] shadow-[0_2px_8px_rgba(0,0,0,0.18)] mt-[20px] p-2.5 rounded`}
        onClick={showTaskInfoHandler}
        draggable={true}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        {props.image && (
          <img
            src="https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1685923200&Signature=UeMOqkV1w38scmGxoFI04AHpQNG969oOeo869JXVvs9qwUd5Z~9cnu0qaoNrXLzyV0vXqNm50lRfH3KS57MhgiinTWMWB3Typ8Xc1HLJmUv9FmfTMeNhfVbh6ej3~OA5Gy6CKy52bA0t8UtrcYw080a1oBBII6YvxRnX1Czhgjp77Q5h~mViPGynuTzd4qgYfaxI-fyEUVgoGm4FUfr2FGGifRe8qyhTRPjgrCcA1E5Pz7kJoes1qv~j5wec-u4WhpwzOHXaMo7Tf5x1a-u3X1ekHhsbbvXENOxUUUmAqnD8Nww-2iHjDJlDc5qAg5SGyyL-ryhXgM8yi4bfBuMUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="work place"
            className="w-full rounded h-auto mb-4"
          />
        )}
        <div className="flex justify-between items-center mb-4">
          <p className="text-[10px] bg-[#EAF562] w-[35px] h-[35px] flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in">
            {localStorage.getItem("first_name")
              ? localStorage.getItem("first_name").slice(0, 1).toUpperCase() +
                " " +
                localStorage.getItem("last_name").slice(0, 1).toUpperCase()
              : localStorage.getItem("user").slice(0, 2).toUpperCase()}
          </p>
          <p className="text-[10px] text-[#534D60]">پروژه اول</p>
        </div>
        <div>
          <p className="text-xs mb-4">
            <FontAwesomeIcon className="text-gray-300" icon={faAlignRight} />{" "}
            {props.name}
          </p>
        </div>
        <div className="flex justify-end items-center gap-2 mb-4">
          <p className="text-[14px] text-gray-300 mr-2">
            <span>۵/۱۵ </span>
            <FontAwesomeIcon icon={faSquareCheck} />
          </p>
          <p className="text-[12px] flex gap-0.5">
            <span>مهر - فردا</span>
            <span>۵</span>
          </p>
          <FontAwesomeIcon
            className={`${
              props.label.priority ? props.label.priority : "text-[#B2ACAC]"
            }`}
            icon={faFlag}
          />
        </div>

        <div className="relative flex items-center justify-between text-[12px] mb-4">
          <button onClick={addTagHandler}>
            <FontAwesomeIcon icon={faPlus} />
            {showTagsMenu && (
              <NewTaskTag
                onClickTags={setShowTagsMenu}
                taskId={props.id}
                onAddNewTag={addNewTagToTaskHandler}
                taskTags={taskTagsList}
              />
            )}
          </button>
          <div className="flex items-center justify-end text-[12px] flex-wrap">
            {taskTagsList.map((tag) => {
              return (
                <p
                  className={`pl-[10px] pr-[5px] py-[3px] ml-[5px] mb-[5px] rounded-l-lg`}
                  key={tag._id}
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.tagName}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center border-t-[1px] border-slate-300 border-solid h-[0]  group-hover:h-[40px] opacity-0 group-hover:opacity-100 transition-width duration-300 ease-in">
          <button className="relative group/menu">
            <p>...</p>
            <ul className="absolute left-[0] bottom-[0] z-10 w-[165px] p-[15px] rounded-xl bg-white hidden group-hover/menu:block shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">واگذاری تسک</p>
                <FontAwesomeIcon icon={faPenToSquare} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">لغو واگذاری تسک</p>
                <FontAwesomeIcon icon={faXmark} />
              </li>
              <li
                className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60 relative"
                onClick={taskDeleteHandler}
              >
                <p className="text-xs">حذف تسک</p>
                <FontAwesomeIcon icon={faTrashCan} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 hover:opacity-60">
                <p className="text-xs">افزودن تگ</p>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </li>
            </ul>
          </button>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
    </>
  );
};
export default ColumnViewTask;
