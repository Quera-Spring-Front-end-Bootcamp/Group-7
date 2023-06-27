import { useRef } from "react";
const WorkeSpaceStepOne = (props ) => {
  const spaceNameRef = useRef();
  const nextStepHandler = () => {
    console.log(props.wokspaceName);
    if (spaceNameRef.current.value.trim() === "") {
      return;
    }
    props.onSelectName(spaceNameRef.current.value);
  };
  return (
    <div className="p-4 pb-0">
      <p className="text-center text-2xl">ساختن ورک اسپیس جدید</p>
      <div className="my-4">
        <label htmlFor="work-space__name" className="block text-sm mb-2">
          نام ورک‌اسپیس
        </label>
        <input
          type="text"
          id="work-space__name"
          className="w-full border border-solid border-slate-500 rounded h-[40px] p-1"
          ref={spaceNameRef}
          onChange={(e)=>props.setWorkspaceName(e.target.value)}
          value={props.wokspaceName}
        />
        <button
          className="w-full bg-[#208D8E] p-2.5 rounded mt-8 text-white text-center text-sm"
          onClick={nextStepHandler}
        >
          ادامه
        </button>
      </div>
    </div>
  );
};
export default WorkeSpaceStepOne;
