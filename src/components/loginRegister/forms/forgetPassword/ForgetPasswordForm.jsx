const ForgetPasswordForm = () => {
  return (
    <form className="w-[450px]">
      <h2 className="text-center text-2xl mb-8">{`فراموشی رمز عبور`}</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="email">
          ایمیل خود را وارد کنید
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="email"
        />
      </div>
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center rounded-md rounded-md"
        type="submit"
      >
        دریافت ایمیل بازیابی رمز عبور
      </button>
    </form>
  );
};

export default ForgetPasswordForm;
