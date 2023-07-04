import { useContext, useEffect, useRef, useState } from "react";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCirclePlay,
  faLink,
  faMagnifyingGlass,
  faShareNodes,
  faTags,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareCheck,
  faFlag,
  faSquarePlus,
  faEye,
  faCommentDots,
  faFaceSmile,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../context/auth-context";
import SpinnerContext from "../../context/spinner-context";
const TaskInformation = (props) => {
  const [showComent, setShowComment] = useState(false);
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const commentInputRef = useRef();
  const { sendServerRequest: addComment } = useHttp();
  const { sendServerRequest: fetchComments } = useHttp();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchedCommentsHandler = (result) => {
      setComments(result.data);
    };
    fetchComments(
      {
        url: "http://localhost:3000/api/comments/task/" + props.id,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      fetchedCommentsHandler
    );
  }, []);

  const addCommentHandler = (data) => {
    spinnerCtx.modalMsgHandler("نظر شما با موفقیت ثبت گردید");
    spinnerCtx.toggleModal();
    setTimeout(() => {
      commentInputRef.current.value = "";
    }, 10);
  };

  const newCommentHandler = () => {
    if (commentInputRef.current.value.trim() !== "") {
      addComment(
        {
          url: "http://localhost:3000/api/comments",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authCtx.accessToken,
          },
          body: {
            text: commentInputRef.current.value,
            taskId: props.id,
          },
        },
        addCommentHandler
      );
    } else {
      console.log("too short");
    }
  };

  const showCommentHandler = () => {
    setShowComment((prevState) => !prevState);
  };
  const xMarkClickHandler = () => {
    props.onClose();
  };
  return (
    <BackDrop>
      <div className="w-[90vw] h-[90vh] flex justify-center items-center overflow-hidden">
        <div className="relative w-1/2 h-full border-r-2 border-slate-200 border-solid">
          <button
            className="absolute left-[10px] top-[15px]"
            onClick={xMarkClickHandler}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className=" h-1/4 w-full border-b-2 border-slate-200 border-solid flex justify-between items-center  p-4">
            <div>
              <button className="relative w-[35px] h-[35px] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-slate-300 text-2xl ml-2"
                />
                <p className="absolute bg-[#4AB7D8] text-xs w-[18px] h-[18px] flex justify-center items-center -top-[4px] -right-[8px] rounded-full">
                  ۲
                </p>
              </button>
            </div>

            <ul className="flex justify-between items-center h-full gap-4">
              <li className="flex justify-center items-end flex-col ">
                <p className="text-slate-300 text-[10px]">ددلاین</p>
                <p className="text-md mt-2">پس‌فردا</p>
              </li>
              <li className="flex justify-center items-end flex-col border-solid border-slate-300 border-l-[1px] pl-4 py-4">
                <p className="text-slate-300 text-[10px]">زمان</p>
                <p className="text-md mt-2">
                  00 : 00 : 00{" "}
                  <FontAwesomeIcon
                    icon={faCirclePlay}
                    className="text-white text-md text-[#80C959]"
                  />{" "}
                </p>
              </li>
              <li className="flex justify-center items-end flex-col border-solid border-slate-300 border-l-[1px] pl-4 py-4">
                <p className="text-slate-300 text-[10px]">ساخته‌شده در</p>
                <p className="text-md mt-2">اردیبهشت ۱۴۰۲</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end p-4">
            <div className="flex justify-between items-center w-full mb-4 ">
              <p className="flex justify-center items-center gap-1 text-slate-300">
                <small>ساعت پیش</small>
                <i>1</i>
              </p>
              <div className="flex justify-center items-center">
                <p>این تسک را ساختید</p>
                <a href="#" className="text-[#208D8E] ml-1">
                  شما
                </a>
              </div>
            </div>
            <div className="flex justify-between flex-col items-end w-full mb-4 h-[160px] overflow-auto">
              {comments.map((comment) => {
                return (
                  <div className="mb-2" key={comment._id}>
                    <p className="text-[#208D8E] mb-1 text-xl">
                      {comment.user.username}
                    </p>
                    <p className="text-sm">{comment.text}</p>
                  </div>
                );
              })}
            </div>

            <div
              className={`w-full absolute bottom-[5px] left-[0] z-50 ${
                showComent ? "translate-y-0" : "translate-y-3/4"
              } cursor-pointer rounded borde-solid border-[#F4F4F4] border-[1px] ${
                showComent
                  ? "shadow-[0_-4px_12px_rgba(0,0,0,0.25)]"
                  : "shadow-sm"
              } text-slate-300 p-4 transition-transform duration-500 ease-linear`}
            >
              <div
                className="flex justify-between items-center"
                onClick={showCommentHandler}
              >
                <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
                <p>کامنت</p>
              </div>
              <textarea
                id="comment-area"
                className="w-full my-4 text-black resize-none"
                ref={commentInputRef}
              ></textarea>
              <div className="flex justify-between items-center">
                <button
                  className="rounded p-2 text-white text-[12px] bg-[#208D8E]"
                  onClick={newCommentHandler}
                >
                  ثبت کامنت
                </button>
                <div className="flex gap-4 items-center text-xl">
                  <FontAwesomeIcon icon={faFaceSmile} />
                  <FontAwesomeIcon icon={faNoteSticky} />
                  <FontAwesomeIcon icon={faLink} />
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/2 h-full">
          <div className=" h-1/4 w-full border-b-2 border-slate-200 border-solid flex justify-between items-center  p-2">
            <div className="flex justify-between items-center gap-x-2">
              <p className="text-slate-300 tracking-wider">...</p>
              <button className="flex justify-between items-center gap-x-2">
                <p className="text-sm">اشتراک گذاری</p>
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="text-slate-300"
                />
              </button>
            </div>

            <ul className="w-[60%] flex justify-between items-center h-full">
              <li>
                <button className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#FB0606] border-2 border-[#FB0606] border-dotted">
                  <FontAwesomeIcon icon={faFlag} />
                </button>
              </li>
              <li className="flex justify-center items-center">
                <button className="w-[35px] h-[35px] -m-[15px] rounded-full flex justify-center items-center text-slate-300 border-2 border-slate-300 border-dotted">
                  <FontAwesomeIcon icon={faUserPlus} />
                </button>
                <img
                  src={props.img}
                  alt="girl-pic"
                  className="w-[35px] h-[35px] rounded-full"
                />
              </li>
              <li className="h-[30px]">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="h-[30px] w-[30px] text-slate-300"
                />
              </li>
              <li className="  text-white">
                <button className="flex items-center gap-1">
                  <p className="bg-[#F84747] w-[25px] h-[30px] justify-center rounded-l-md flex items-center">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </p>
                  <p className="bg-[#F84747] w-[100px] justify-center items-center flex  h-[30px]">
                    Open
                  </p>
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-end px-2 py-4">
            <button className="w-[35px] h-[35px]  rounded-full flex justify-center items-center text-slate-300 border-2 border-slate-300 border-dotted">
              <FontAwesomeIcon icon={faTags} />
            </button>
            <h1 className="mt-6 mb-2 text-xl">{props.name}</h1>
            <p className="p-2 text-base border-2 border-slate-300 rounded-lg border-solid w-full">
              {props.description}
            </p>
            <a href="#" className="mt-8 mb-4">
              <button className="text-[#208D8E] flex gap-x-2 justify-center items center">
                <p className="text-sm">اضافه کردن چک لیست</p>
                <FontAwesomeIcon icon={faSquarePlus} />
              </button>
            </a>
            <a href="#" className="mb-2">
              <button className="text-[#208D8E] flex gap-x-2 justify-center items center">
                <p className="text-sm">اضافه کردن پیوست</p>
                <FontAwesomeIcon icon={faSquarePlus} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </BackDrop>
  );
};
export default TaskInformation;
