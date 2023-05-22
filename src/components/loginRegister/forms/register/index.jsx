import GreenButton from "../../../mostlyUsed/GreenButton/GreenButton"

const RegisterForm = () => {
    return(
        <div className="flex items-center justify-center h-auto">
            <div className="w-auto h-full bg-white shadow-[0px_12px_50px_0px_rgba(0,0,0,0.18)] rounded-[20px] p-6">
                <h1 className="mb-8 text-[32px]">ثبت نام در کوئرا تسک منیجر</h1>
                <p className="text-base">نام کامل</p>
                <input className="w-full h-[40px] border-[#0006] border-[1px] rounded-md mb-5" />
                <p className="text-base">ایمیل</p>
                <input className="w-full h-[40px] border-[#0006] border-[1px] rounded-md mb-5" />
                <p className="text-base">رمز عبور</p>
                <input className="w-full h-[40px] border-[#0006] border-[1px] rounded-md" />
                <p className="text-sm mt-[20px] mb-[20px] flex items-center justify-end">قوانین و مقررات را می پذیرم <input type="checkbox" className="ml-2" /></p>
                <GreenButton text="ورود" width="100%" height="40px" />
            </div>
        </div>
    )
}

export default RegisterForm