import { useState } from "react";
import Input from "../UI/Input";

let regex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}");

const ForgetPasswordForm = () => {
  const [emailIsNotValid, setEmailIsNotValid] = useState(null);
  const [formValidity, setFormValidity] = useState(false);
  const [recoveryMsg, setRecoveryMsg] = useState(false);
  const passwordRecoveryHandler = (e) => {
    e.preventDefault();
    setRecoveryMsg(true);
  };

  const emailBlurHandler = (e) => {
    if (!regex.test(e.target.value.toLowerCase())) {
      setEmailIsNotValid(true);
    }
  };
  const emailChangeHandler = (e) => {
    setEmailIsNotValid(false);
    if (regex.test(e.target.value.toLowerCase())) {
      setFormValidity(true);
    } else {
      setFormValidity(false);
    }
  };
  const renderedForm = (
    <div>
      <Input
        title="ایمیل خود را وارد کنید"
        id="forget-pass__email"
        inputIsNotValid={emailIsNotValid}
        type="text"
        inputBlurHandler={emailBlurHandler}
        inputChangeHandler={emailChangeHandler}
        placeholder="example@sth.sth"
      />
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center rounded-md rounded-md disabled:bg-slate-400 cursor-pointer disabled:cursor-not-allowed"
        type="submit"
        disabled={!formValidity}
        onClick={passwordRecoveryHandler}
      >
        دریافت ایمیل بازیابی رمز عبور
      </button>
    </div>
  );
  const renderedMsg = (
    <p className="text-[13px]">
      .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
    </p>
  );
  return (
    <form className="w-[450px]">
      <h2 className="text-center text-2xl mb-8">{`فراموشی رمز عبور`}</h2>
      {recoveryMsg ? renderedMsg : renderedForm}
    </form>
  );
};

export default ForgetPasswordForm;
