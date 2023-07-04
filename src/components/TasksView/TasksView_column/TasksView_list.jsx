import ColumnViewHeader from "./ColumnViewHeader";
import ColumnViewTask from "./ColumnViewTask";
import classes from "./TasksView_list.module.css";
import NewTask from "../../NewTask/NewTask";
import { useEffect, useState, useContext } from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/auth-context";
import DataContext from "../../../context/data-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

let counter = 0;
const TasksViewColumn = (props) => {
  const authCtx = useContext(AuthContext);
  const {
    onSetBoadrs,
    boards,
    projectId,
    selectedProject,
    setProjectId,
    setSelectedProject,
    setActiveAccordionSection,
  } = useContext(DataContext);
  const [dragItem, setDragItem] = useState();
  const [addingNewBoard, setAddingNewBoard] = useState(false);
  const [newBoardValue, setNewBoardValue] = useState("");

  const { sendServerRequest: fetchBoards } = useHttp();
  const { sendServerRequest: addBoard } = useHttp();

  const dragItemHandler = (itemId) => {
    if (counter <= 0) {
      console.log(itemId);
      setDragItem(itemId);
      counter = 1;
    }
  };
  const counterReset = () => {
    counter = 0;
  };

  useEffect(() => {
    const getBoardsHandler = (boards) => {
      onSetBoadrs(boards.data);
    };
    if (projectId) {
      fetchBoards(
        {
          url: "http://localhost:3000/api/board/" + projectId,
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authCtx.accessToken,
          },
        },
        getBoardsHandler
      );
    }
  }, [fetchBoards]);

  const addNewBoard = () => {
    const createdBoard = (val) => {
      setAddingNewBoard(false);
      setNewBoardValue("");
      onSetBoadrs((e) => [...e, val.data]);
    };

    if (newBoardValue !== "") {
      addBoard(
        {
          url: `http://localhost:3000/api/board`,
          method: "POST",
          body: {
            name: newBoardValue,
            projectId: projectId,
          },
        },
        createdBoard
      );
    }
  };

  return (
    <div className={classes.container}>
      {boards.map((board) => (
        <ColumnViewHeader
          handleClose={props.handleClose}
          OnAddNewTask={props.OnAddNewTask}
          title={board.name}
          count={"۰"}
          borderColor={board.color}
          id={board._id}
          key={board._id}
          tasks={board.tasks}
          onDragItem={dragItemHandler}
          dragItem={dragItem}
          counterReset={counterReset}
        />
      ))}
      {!selectedProject ? (
        <div>یک پروژه را انتخاب نمایید</div>
      ) : (
        <>
          {addingNewBoard && (
            <div
              className={` group/container shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded border-solid border-t-[1px] m-1 h-[42px] w-[250px] cursor-pointer box-content	 `}
              style={{ borderColor: props.borderColor }}
            >
              <div className=" flex items-center justify-center h-[25px] gap-2 opacity-0 group-hover/container:opacity-100 transition-opacity duration-200 ease-in"></div>
              <div className="flex items-center ">
                {/* <span className="inline-flex bg-slate-100 w-[20px] justify-center items-center rounded-lg">
            {props.count}
          </span> */}
                <button
                  className="text-xs text-white p-1 rounded mx-1 bg-red-500"
                  onClick={() => {
                    setAddingNewBoard(false);
                    setNewBoardValue("");
                  }}
                >
                  بستن
                </button>
                <button
                  className="text-xs text-white p-1 rounded mr-1 bg-[#208D8E]"
                  onClick={addNewBoard}
                >
                  افزودن
                </button>
                <input
                  className="border border-gray-200 rounded pr-1 mr-1 text-sm"
                  onChange={(e) => setNewBoardValue(e.target.value)}
                  value={newBoardValue}
                />
              </div>
            </div>
          )}
          <div
            className={` group/container shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded py-2 px-3 border-solid border-t-[1px] m-1 h-[42px] min-w-[250px] w-[250px] cursor-pointer `}
            style={{ borderColor: props.borderColor }}
          >
            <div className=" flex items-center justify-center h-[25px] gap-2 opacity-0 group-hover/container:opacity-100 transition-opacity duration-200 ease-in"></div>
            <div
              onClick={() => setAddingNewBoard(true)}
              className="flex items-center "
            >
              {/* <span className="inline-flex bg-slate-100 w-[20px] justify-center items-center rounded-lg">
            {props.count}
          </span> */}
              <span className="mx-1 text-sm ">ساختن ستون جدید</span>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TasksViewColumn;
