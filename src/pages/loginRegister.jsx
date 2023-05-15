import { useState } from "react";
import ForgetPasswordForm from "../components/loginRegister/forms/forgetPassword";
import ForgetPasswordMassageForm from "../components/loginRegister/forms/forgetPasswordMassage";
import LoginForm from "../components/loginRegister/forms/login";
import RegisterForm from "../components/loginRegister/forms/register";

import Card from "../components/loginRegister/forms/UI/Card";
const LoginRegister = () => {
  const [loginFormState, setLoginFormState] = useState("login");
  return (
    <div className="w-screen h-screen relative overflow-hidden flex justify-center items-center">
      <Card />
      <div className="absolute left-[80px] right-[80px] top-[40px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-2.5">
          <button className="bg-[#208D8E] text-white rounded-md text-sm w-[90px] h-[40px] flex justify-center items-center">
            ورود
          </button>
          <p className="text-base">قبلا ثبت نام کرده ای؟</p>
        </div>
        <h2 className="text-[26px] font-extrabold bg-gradient-to-r from-[#06846f] to-[#54bee8] text-transparent bg-clip-text">
          کوئرا تسک منیجر
        </h2>
      </div>
      <div
        className={`  absolute left-0 top-[50%] w-screen h-screen -skew-y-6 bg-gradient-to-r from-[#06846f] from-[0.35%] to-[#54bee8] to-[103.4%]`}
      ></div>
    </div>
  );
};
export default LoginRegister;
