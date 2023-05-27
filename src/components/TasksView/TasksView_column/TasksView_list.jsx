import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import BackDrop from "../../mostlyUsed/BackDrop/BackDrop";
import ColumnViewHeader from "./ColumnViewHeader";
import ColumnViewTask from "./ColumnViewTask";
import classes from "./TasksView_list.module.css";
const TasksViewColumn = () => {
  return (
    <div className={classes.container}>
      <button className="fixed left-[20px] bottom-[20px] flex justify-center items-center p-3 text-white bg-[#208D8E] rounded-md gap-x-2">
        <p>افزودن تسک</p>
        <FontAwesomeIcon icon={faSquarePlus} />
      </button>
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
