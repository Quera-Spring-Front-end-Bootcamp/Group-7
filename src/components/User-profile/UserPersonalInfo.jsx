const UserPersonalInfo = () => {
  return (
    <>
      <h2 className="text-xl mb-4">اطلاعات فردی</h2>
      <div className="flex justify-end items-center gap-x-4">
        <div className="flex flex-col justify-center items-end gap-y-4">
          <button className="border-solid border-[#208D8E] text-[#208D8E] border-2 p-2.5 rounded-lg">
            ویرایش تصویر پروفایل
          </button>
          <small className="text-[10px]">
            .این تصویر برای عموم قابل نمایش است
          </small>
        </div>
        <p className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#EAF562] text-3xl">
          NM
        </p>
      </div>
      <form className=" w-[400px]">
        <div className="mb-4">
          <label
            htmlFor="personal-info__name"
            className="block text-[14px] mb-1"
          >
            نام
          </label>
          <input
            type="text"
            id="personal-info__name"
            className="w-full border border-solid border-slate-500 rounded h-[35px] p-1"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="personal-info__surname"
            className="block text-[14px] mb-1"
          >
            نام خانوادگی
          </label>
          <input
            type="text"
            id="personal-info__surname"
            className="w-full border border-solid border-slate-500 rounded h-[35px] p-1"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="personal-info__phone"
            className="block text-[14px] mb-1"
          >
            شماره موبایل
          </label>
          <input
            type="number"
            id="personal-info__phone"
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
export default UserPersonalInfo;
