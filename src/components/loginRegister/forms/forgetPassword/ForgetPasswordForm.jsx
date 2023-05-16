import { useState } from "react";
import Input from "../UI/Input";

let regex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}");

const ForgetPasswordForm = () => {
  const [emailValidity, setEmailValidity] = useState(false);

  const emailValidationHandler = (e) => {
    if (!regex.test(e.target.value.toLowerCase())) {
      setEmailValidity(true);
    }
  };
  const emailChangeHandler = () => {
    setEmailValidity(false);
  };
  return (
    <form className="w-[450px]">
      <h2 className="text-center text-2xl mb-8">{`فراموشی رمز عبور`}</h2>
      <Input
        title="ایمیل خود را وارد کنید"
        id="forget-pass__email"
        inputIsValid={emailValidity}
        type="text"
        inputBlurHandler={emailValidationHandler}
        inputChangeHandler={emailChangeHandler}
      />
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center rounded-md rounded-md"
        type="submit"
      >
        دریافت ایمیل بازیابی رمز عبور
      </button>
    </form>
  );
};

export default ForgetPasswordForm;
