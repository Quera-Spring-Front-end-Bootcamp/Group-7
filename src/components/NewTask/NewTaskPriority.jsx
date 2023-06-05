import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";

const PriorityRow = (props) => {
  return (
    <li
      className={`${
        props.margin ?? "mb-0"
      } flex justify-end items-center gap-3 w-full`}
    >
      <p className="text-sm">{props.title}</p>
      <FontAwesomeIcon
        icon={props.iconName ?? faFlag}
        className={props.bgColor}
      />
    </li>
  );
};

const NewTaskPriority = (props) => {
  const priorityHnadler = (e) => {
    if (e.target.id === "priority-menu__backdrop") {
      props.onClickPriority({ val: "noPriority" });
      e.stopPropagation();
    }
  };
  return (
    <>
      <div
        className="fixed z-1 left-0 top-0 w-screen h-screen bg-black opacity-10"
        onClick={priorityHnadler}
        id="priority-menu__backdrop"
      ></div>
      <div className="z-10 absolute w-[150px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 bottom-[35px] left-[-55px]">
        <ul>
          <PriorityRow
            title={"فوری"}
            bgColor={"text-[#FB0606]"}
            margin={"mb-2"}
          />
          <PriorityRow
            title={"بالا"}
            bgColor={"text-[#FFE605]"}
            margin={"mb-2"}
          />
          <PriorityRow
            title={"متوسط"}
            bgColor={"text-[#09DBCE]"}
            margin={"mb-2"}
          />
          <PriorityRow
            title={"پایین"}
            bgColor={"text-[#B2ACAC]"}
            margin={"mb-4"}
          />
          <PriorityRow
            title={"حذف اولویت"}
            bgColor={"text-[#E45454]"}
            iconName={faXmark}
          />
        </ul>
      </div>
    </>
  );
};
export default NewTaskPriority;
