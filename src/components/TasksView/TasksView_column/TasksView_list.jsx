import ColumnViewHeader from "./ColumnViewHeader";
import classes from "./TasksView_list.module.css";
const TasksViewColumn = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <ColumnViewHeader title="Open" count={"۰"} borderColor={"#F98F2E"} />
      </div>
      <div className={classes.box}>2</div>
      <div className={classes.box}>3</div>
      <div className={classes.box}>4</div>
      <div className={classes.box}>5</div>
    </div>
  );
};

export default TasksViewColumn;
