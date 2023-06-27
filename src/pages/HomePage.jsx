import { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import TasksViewCalendar from "../components/TasksView/TasksView_calendar/TasksViewCalendar";
import TasksViewColumn from "../components/TasksView/TasksView_column/TasksView_list";
import TasksViewList from "../components/TasksView/TasksView_list/TasksView_list";
import { UserContext } from "../context/provider";
import persianDate from "persian-date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import TagsProvider from "../context/TagsProvider";
import NewTask from "../components/NewTask/NewTask";

const HomePage = () => {
  const [receivedBoardID, setReceivedBoardID] = useState();
  //   const { taskManagerState } = useContext(UserContext);

  const { taskManagerState, setCurrentDay } = useContext(UserContext);

  const [showNewtaskComponent, setShowNewtaskComponent] = useState(false);

  const CloseCreateTaskHandler = (value) => {
    setShowNewtaskComponent(value);
  };

  const addNewTaskHandler = (boardID) => {
    setReceivedBoardID(boardID);
  };
  useEffect(() => {
    setCurrentDay(new persianDate(new Date()));
  }, []);

  const ShowTasksHandler = () => {
    switch (taskManagerState) {
      case "list":
        return <TasksViewList />;
      case "column":
        return (
          <TasksViewColumn
            handleClose={CloseCreateTaskHandler}
            OnAddNewTask={addNewTaskHandler}
          />
        );
      case "calendar":
        return <TasksViewCalendar />;
      default:
        return;
    }
  };

  return (
    <Layout>
      {showNewtaskComponent && (
        <TagsProvider>
          <NewTask
            handleClose={CloseCreateTaskHandler}
            boardID={receivedBoardID}
          />
        </TagsProvider>
      )}
      <ShowTasksHandler />
      <button
        onClick={() => setShowNewtaskComponent(true)}
        className="fixed left-[20px] bottom-[20px] flex justify-center items-center p-3 text-white bg-[#208D8E] rounded-md gap-x-2"
      >
        <p>افزودن تسک</p>
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
    </Layout>
  );
};

export default HomePage;
