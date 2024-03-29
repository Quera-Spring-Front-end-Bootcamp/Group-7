const Input = (props) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        className={`w-full border border-[#aaaaaa] rounded-md h-[40px] px-1 block ${
          props.inputIsNotValid && "wrong"
        }`}
        type={props.type}
        id={props.id}
        onBlur={props.inputBlurHandler}
        onChange={props.inputChangeHandler}
        placeholder={props.placeholder || ""}
        style={{ direction: "ltr" }}
        value={props.value}
      />
    </div>
  );
};
export default Input;
