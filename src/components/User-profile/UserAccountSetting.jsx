import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const UserAccountSetting = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [nightVision, setNightVision] = useState(false);

  const nightVisionSettings = nightVision
    ? "right-[1px] rounded-r-3xl bg-[#208D8E] left-[unset]"
    : "left-[1px] rounded-l-3xl bg-[#8A8989] right-[unset]";

  const colorPickerHandler = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };
  const changeThemeHandler = (e) => {
    setNightVision((prevState) => !prevState);
  };
  const themeColor = [
    "rgb(120, 198, 176)",
    "rgb(118, 188, 134)",
    "rgb(128, 220, 105)",
    "rgb(228, 97, 97)",
    "rgb(225, 126, 128)",
    "rgb(236, 129, 130)",
    "rgb(243, 197, 103)",
    "rgb(229, 122, 87)",
    "rgb(241, 162, 92)",
  ];
  return (
    <>
      <h2 className="text-xl mb-4">تنظیمات</h2>

      <form className=" w-[400px]">
        <div className="mb-8">
          <p className="block text-[14px] mb-2">انتخاب تم</p>
          <div className="flex flex-row-reverse items-center justify-start gap-x-2">
            <button
              type="button"
              className="bg-[#208D8E] w-[40px] h-[40px] rounded-full text-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>

            {themeColor.map((colorBox) => {
              return (
                <div
                  className={`w-[20px] h-[20px] rounded-full cursor-pointer`}
                  key={colorBox}
                  style={{
                    backgroundColor: colorBox,
                    outline:
                      selectedColor === colorBox ? "2px solid #00C4FF" : "none",
                  }}
                  onClick={colorPickerHandler}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="my-8 flex items-center justify-end gap-4">
          <p>حالت شب</p>
          <label
            onClick={changeThemeHandler}
            htmlFor="account-setting_theme"
            className="h-[24px] border border-black border-solid rounded-3xl relative w-[60px] inline-block p-1 cursor-pointer"
          >
            <div
              className={`absolute h-[20px] w-[28px] top-[1px] ${nightVisionSettings} transition-all duration-200 ease-linear`}
            ></div>
          </label>
          <input
            type="checkbox"
            id="account-setting_theme"
            className="hidden"
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
export default UserAccountSetting;
