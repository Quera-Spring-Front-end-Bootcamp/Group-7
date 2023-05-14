import { useState } from "react"
import ForgetPasswordForm from "../components/loginRegister/forms/forgetPassword"
import ForgetPasswordMassageForm from "../components/loginRegister/forms/forgetPasswordMassage"
import LoginForm from "../components/loginRegister/forms/login"
import RegisterForm from "../components/loginRegister/forms/register"

const LoginRedister = () => {

    const [loginFormState, setLoginFormState] = useState("login")

    const FormHandler = () => {
        switch (loginFormState) {
            case "login":
                return <LoginForm/>
            case "register":
                return <RegisterForm/>
            case "forgetPassword":
                return <ForgetPasswordForm/>
            case "forgetPasswordMassage":
                return <ForgetPasswordMassageForm/>
            default:
                return
        }
    }


    return (
        <div className="w-[100vw]">
            <p className="" >login register page</p>
            <button className="border-solid border-2 border-sky-500 mx-5" onClick={()=>{setLoginFormState("login")}} > login </button>
            <button className="border-solid border-2 border-sky-500 mx-5" onClick={()=>{setLoginFormState("register")}} > register </button>
            <button className="border-solid border-2 border-sky-500 mx-5" onClick={()=>{setLoginFormState("forgetPassword")}} > forget password </button>
            <button className="border-solid border-2 border-sky-500 mx-5" onClick={()=>{setLoginFormState("forgetPasswordMassage")}} > forget password massage </button>
            <FormHandler />
            {/* <p> Hello World! </p> */}
        </div>
    )
}
export default LoginRedister