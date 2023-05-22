const ResetPasswordForm = () => {
  return (
    <form className="w-[450px]">
      <h2 className="text-center text-2xl mb-8">{`بازیابی کلمه عبور`}</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="new-pass">
          رمز عبور جدید
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="new-pass"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm" htmlFor="confirm-pass">
          تکرار رمز عبور جدید
        </label>
        <input
          className="w-full border border-[#aaaaaa] rounded-md h-[40px]"
          type="text"
          id="confirm-pass"
        />
      </div>
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center"
        type="submit"
      >
        ذخیره
      </button>
    </form>
  );
};

export default ResetPasswordForm;
