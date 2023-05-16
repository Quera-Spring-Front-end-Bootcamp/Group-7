const RegisterForm = () => {
  return (
    <form className="">
      <h2 className="text-center text-2xl mb-8">{`ثبت نام در کوئرا تسک منیجر`}</h2>
      <div className="mb-2">
        <label className="block mb-1 text-sm" htmlFor="first-name">
          نام کامل
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="first-name"
        />
      </div>
      <div className="mb-2">
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
      <p className="text-base mb-4">
        .قوانین و مقررات را می پذیرم <input type="checkbox" id="have-account" />
      </p>
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center rounded-md"
        type="submit"
      >
        ثبت نام
      </button>
    </form>
  );
};

export default RegisterForm;
