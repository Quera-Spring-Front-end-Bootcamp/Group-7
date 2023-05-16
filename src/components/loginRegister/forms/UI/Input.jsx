const Input = (props) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={`w-full border border-[#aaaaaa] rounded-md h-[40px] px-1 block ${
          props.inputIsValid && "wrong"
        }`}
        type={props.type}
        id={props.id}
        onBlur={props.inputBlurHandler}
        onChange={props.inputChangeHandler}
        style={{ direction: "ltr" }}
      />
    </div>
  );
};
export default Input;
