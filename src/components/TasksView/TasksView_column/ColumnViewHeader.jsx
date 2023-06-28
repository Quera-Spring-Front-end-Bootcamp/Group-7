import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faPlus,
  faFileArrowDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFlag,
  faSquareCheck,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
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
          <button className="relative group/menu">
            <p className="tracking-wider -translate-y-[3px]">...</p>
            <ul className="absolute left-[0] top-[0] z-10 w-[165px] p-[15px] rounded-xl bg-white hidden group-hover/menu:block shadow-[0_4px_16px_0_rgba(0,0,0,0.16)]">
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">ویرایش نام ستون</p>
                <FontAwesomeIcon icon={faPenToSquare} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">افزودن تسک</p>
                <FontAwesomeIcon icon={faPlus} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 mb-4 hover:opacity-60">
                <p className="text-xs">آرشیو تمام تسکها</p>
                <FontAwesomeIcon icon={faFileArrowDown} />
              </li>
              <li className="flex w-full justify-end items-center gap-2 hover:opacity-60">
                <p className="text-xs">حذف ستون</p>
                <FontAwesomeIcon icon={faTrashCan} />
              </li>
            </ul>
          </button>
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
          label={task.label}
        />
      ))}
    </div>
  );
};
export default ColumnViewHeader;
