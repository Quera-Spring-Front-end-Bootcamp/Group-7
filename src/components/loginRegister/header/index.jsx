import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/provider";
import GreenButton from "../../mostlyUsed/GreenButton/GreenButton"
import "./loginRegister_header.css"

const LoginRegisterHeader = () => {

    const contextData = useContext(UserContext);

    const [headerData, setHeaderData] = useState({buttonText: "ثبت نام", buttonFunc: "register", text:"ثبت نام نکرده ای؟"})

    useEffect(()=>{
        if(contextData.loginFormState === "login"){
            setHeaderData({buttonText: "ثبت نام", buttonFunc: "register", text:"ثبت نام نکرده ای؟"})
        }else{
            setHeaderData({buttonText: "ورود", buttonFunc: "login", text:"قبلا ثبت نام کرده ای؟"})
        }
    },[contextData.loginFormState])

    return(
        <div className="flex justify-between p-[80px] items-center">
            <div className="flex items-center">
                <GreenButton onClick={() => contextData.setLoginFormState(headerData.buttonFunc)} text={headerData.buttonText} width={"95px"} height={"40px"} />
                <p className="px-[5px]"> {headerData.text} </p>
            </div>
            <h1 className="headerTitle text-[32px] font-extrabold">کوئرا تسک منیجر</h1>
        </div>
    )
}

export default LoginRegisterHeader