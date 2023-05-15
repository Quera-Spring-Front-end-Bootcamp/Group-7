import { useState } from "react";
import ForgetPasswordForm from "../components/loginRegister/forms/forgetPassword";
import ForgetPasswordMassageForm from "../components/loginRegister/forms/forgetPasswordMassage";
import LoginForm from "../components/loginRegister/forms/login";
import RegisterForm from "../components/loginRegister/forms/register";
const LoginRegister = () => {
  const [loginFormState, setLoginFormState] = useState("login");
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        className={`absolute left-0 top-[50%] w-screen h-screen -skew-y-6 bg-gradient-to-r from-[#06846f] from-[0.35%] to-[#54bee8] to-[103.4%]`}
      ></div>
    </div>
  );
};
export default LoginRegister;
