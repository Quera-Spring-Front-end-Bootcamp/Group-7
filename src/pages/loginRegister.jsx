import { useContext, useState } from "react"
import ForgetPasswordForm from "../components/loginRegister/forms/forgetPassword"
import ForgetPasswordMassageForm from "../components/loginRegister/forms/forgetPasswordMassage"
import LoginForm from "../components/loginRegister/forms/login"
import RegisterForm from "../components/loginRegister/forms/register"
import LoginRegisterHeader from "../components/loginRegister/header"
import { UserContext } from "../context/provider"

const LoginRegister = () => {

    // const [loginFormState, setLoginFormState] = useState("login")

    const contextData = useContext(UserContext);

    console.log(contextData);
    const FormHandler = () => {
        switch (contextData.loginFormState) {
            case "login":
                return <LoginForm />
            case "register":
                return <RegisterForm />
            case "forgetPassword":
                return <ForgetPasswordForm />
            case "forgetPasswordMassage":
                return <ForgetPasswordMassageForm />
            default:
                return
        }
    }


    return (
        <div className="w-[100vw]">
            <div className="absolute z-[-1] bottom-0" style={{
                // position: "absolute",
                // width: "150%",
                // height: "1000px",
                // left: "0px",
                // top: "450px",
                // transform: "rotate(-10deg)",
                // background: "linear-gradient(269.55deg, #06846F 0.35%, #54BEE8 103.4%)",
            }}>
                <svg width="100%" height="574" viewBox="0 0 1440 574" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 260L1440 0V574H0V260Z" fill="url(#paint0_linear_4_7)" />
                    <defs>
                        <linearGradient id="paint0_linear_4_7" x1="100%" y1="257.5" x2="-55" y2="287" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#06846F" />
                            <stop offset="1" stop-color="#54BEE8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <LoginRegisterHeader />
            <FormHandler />
        </div>
    )
}
export default LoginRegister