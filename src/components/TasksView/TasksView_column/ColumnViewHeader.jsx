import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./TasksView_list.module.css";
import ColumnViewTask from "./ColumnViewTask";
const ColumnViewHeader = (props) => {
  const taskAddHandler = () => {
    props.OnAddNewTask(props.id);
    props.handleClose(true);
  };

  return (
    <div className={classes.box}>
      <div
        className={`group/container w-full shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex justify-between rounded py-2 px-3 border-solid border-t-[1px]`}
        style={{ borderColor: props.borderColor }}
      >
        <div className="flex items-center justify-center h-[25px] gap-2 opacity-0 group-hover/container:opacity-100 transition-opacity duration-200 ease-in">
          <button
            className="group/button relative flex items-center justify-center h-[25px] w-[25px]"
            onClick={taskAddHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
            <p className="absolute text-xs whitespace-nowrap bg-slate-700 text-white p-1 rounded left-[-100%] top-[-25px] opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 ease-in">
              افزودن تسک
            </p>
          </button>
          <span className="tracking-wider -translate-y-[3px]">...</span>
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
          name={task.name}
          id={task._id}
          key={task._id}
        />
      ))}
    </div>
  );
};
export default ColumnViewHeader;
