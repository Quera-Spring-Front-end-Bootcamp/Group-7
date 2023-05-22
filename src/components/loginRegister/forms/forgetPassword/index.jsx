import GreenButton from "../../../mostlyUsed/GreenButton/GreenButton"

const ForgetPasswordForm = () => {
    return(
        <div className="flex items-center justify-center h-auto">
            <div className="w-auto min-w-[450px] h-full bg-white shadow-[0px_12px_50px_0px_rgba(0,0,0,0.18)] rounded-[20px] p-6  ">
                <h1 className="mb-8 text-[32px] text-center">فراموشی رمز عبور</h1>
                <p className="text-base">ایمیل خود را وارد کنید</p>
                <input className="w-full h-[40px] border-[#0006] border-[1px] rounded-md mb-5" />
                <GreenButton text="دریافت ایمیل بازیابی رمز عبور" width="100%" height="40px" />
            </div>
        </div>
    )
}

export default ForgetPasswordForm