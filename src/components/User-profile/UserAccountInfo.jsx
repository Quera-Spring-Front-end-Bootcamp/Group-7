const UserAccountInfo = () => {
  return (
    <>
      <h2 className="text-xl mb-4">اطلاعات حساب</h2>

      <form className=" w-[400px]">
        <div className="mb-4">
          <label
            htmlFor="personal-info__name"
            className="block text-[14px] mb-1"
          >
            ایمیل
          </label>
          <input
            type="text"
            id="personal-info__name"
            className="w-full border border-solid border-slate-500 rounded h-[35px] p-1"
          />
        </div>
        <div className="mb-4 relative">
          <button className="absolute left-[0] bottom-[0] text-[14px] h-[35px] rounded bg-[#208D8E] px-3 py-2 text-white">
            احراز هویت
          </button>
          <label
            htmlFor="personal-info__name"
            className="block text-[14px] mb-1"
          >
            رمز عبور
          </label>
          <input
            type="text"
            id="personal-info__name"
            className="w-full border border-solid border-slate-500 rounded h-[35px] p-1 pl-28"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="personal-info__name"
            className="block text-[14px] mb-1"
          >
            نام کاربری
          </label>
          <input
            type="number"
            id="personal-info__name"
            className="w-full border border-solid border-slate-500 rounded h-[35px] p-1"
          />
        </div>
        <button
          type="submit"
          className="bg-[#208D8E] text-white w-full text-center text-[14px] rounded h-[35px]"
        >
          ثبت تغییرات
        </button>
      </form>
    </>
  );
};
export default UserAccountInfo;
