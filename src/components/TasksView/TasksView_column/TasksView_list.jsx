import ColumnViewHeader from "./ColumnViewHeader";
import ColumnViewTask from "./ColumnViewTask";
import classes from "./TasksView_list.module.css";
import NewTask from "../../NewTask/NewTask";
import { useEffect, useState, useContext } from "react";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../context/auth-context";

const TasksViewColumn = (props) => {
  const authCtx = useContext(AuthContext);
  const { sendServerRequest: some } = useHttp();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const getBoardsHandler = (boards) => {
      console.log(boards);
      setBoards(boards.data);
    };

    some(
      {
        url: "http://localhost:3000/api/board/649a89d8ea4f124fdddaca88",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
      },
      getBoardsHandler
    );
  }, [some]);

  return (
    <div className={classes.container}>
      {boards.map((board) => (
        <ColumnViewHeader
          handleClose={props.handleClose}
          title={board.name}
          count={"۰"}
          borderColor={board.color}
          id={board._id}
          key={board._id}
          tasks={board.tasks}
        />
      ))}
    </div>
  );
};

export default TasksViewColumn;
