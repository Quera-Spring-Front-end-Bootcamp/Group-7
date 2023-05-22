import { useContext, useState } from "react";
import { UserContext } from "../../../../context/provider";
import GreenButton from "../../../mostlyUsed/GreenButton/GreenButton"

const LoginForm = () => {

    const contextData = useContext(UserContext);

    const [emailData, setEmailData] = useState("")
    const [passwordData, setPasswordData] = useState("")

    const changeEmail = (e) => {
        setEmailData(e.target.value)
    }

    const changePassword = (e) => {
        setPasswordData(e.target.value)
    }

    return (
        <div className="flex items-center justify-center h-auto" style={{ transition: "all 0.5s ease-in-out" }}>
            <div className="w-auto h-full bg-white shadow-[0px_12px_50px_0px_rgba(0,0,0,0.18)] rounded-[20px] p-6">
                <h1 className="mb-8 text-[32px]">(:به کوئرا تسک منیجر خوش برگشتی</h1>
                <p className="text-base">ایمیل</p>
                <input onChange={(e) => changeEmail(e)} value={emailData} className="w-full h-[40px] border-[#0006] border-[1px] rounded-md mb-5 px-2.5" />
                <p className="text-base">رمز عبور</p>
                <input onChange={(e) => changePassword(e)} value={passwordData} className="w-full h-[40px] border-[#0006] border-[1px] rounded-md px-2.5" />
                <p onClick={() => contextData.setLoginFormState("forgetPassword")} className="text-sm mt-1 text-[#208D8E] mb-[30px] cursor-pointer hover:text-[#0c5050]">رمز عبور را فراموش کرده ای؟</p>
                <GreenButton text="ورود" width="100%" height="40px" />
                <p className="text-center mt-3">ثبت نام نکرده ای؟  <a onClick={() => { contextData.setLoginFormState("register") }} className="text-[#208D8E] hover:text-[#0c5050] cursor-pointer">ثبت نام</a> </p>
            </div>
        </div>
    )
}

export default LoginForm