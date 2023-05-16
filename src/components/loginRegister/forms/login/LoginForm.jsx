const LoginForm = (props) => {
  const registerBtnClickHandler = () => {
    props.showRegisterForm(props);
  };
  const forgetPassHandler = () => {
    props.showForgetPass();
  };
  return (
    <form className="">
      <h2 className="text-center text-2xl mb-8">{`(: به کوئرا تسک منیجر خوش برگشتی`}</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="email">
          ایمیل
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="email"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="password">
          رمز عبور
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="password"
        />
      </div>
      <p
        className="mb-4 text-sm text-[#208D8E] cursor-pointer"
        onClick={forgetPassHandler}
      >
        رمز عبور را فراموش کرده ای؟
      </p>
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center mb-4 rounded-md"
        type="submit"
      >
        ورود
      </button>
      <p className="text-base text-center">
        ثبت نام نکرده ای؟{" "}
        <span
          className="text-[#208D8E] cursor-pointer"
          onClick={registerBtnClickHandler}
        >
          ثبت نام
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
