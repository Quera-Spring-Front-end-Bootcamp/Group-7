import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import BackDrop from "../../mostlyUsed/BackDrop/BackDrop";
import ColumnViewHeader from "./ColumnViewHeader";
import ColumnViewTask from "./ColumnViewTask";
import classes from "./TasksView_list.module.css";
import NewTask from "../../NewTask/NewTask";
import { useState } from "react";
const TasksViewColumn = () => {

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <ColumnViewHeader title="Open" count={"۰"} borderColor={"#F98F2E"} />
        <ColumnViewTask />
      </div>
      <div className={classes.box}>
        <ColumnViewHeader
          title="In progress"
          count={"۰"}
          borderColor={"#2E7FF9"}
        />
      </div>
      <div className={classes.box}>
        <ColumnViewHeader title="Pending" count={"۰"} borderColor={"#DEC908"} />
      </div>
      <div className={classes.box}>
        <ColumnViewHeader title="To Do" count={"۰"} borderColor={"#F98F2E"} />
      </div>
      <div className={classes.box}>
        <ColumnViewHeader title="Done" count={"۰"} borderColor={"#47A992"} />
      </div>
    </div>
  );
};

export default TasksViewColumn;
