import { useState, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import useHttp from "../../hooks/use-http";
import SpinnerContext from "../../context/spinner-context";
const numReg = new RegExp("09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}");

const UserPersonalInfo = () => {
  const { sendServerRequest } = useHttp();
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const [nameValidity, setNameValidity] = useState(true);
  const [lastNameValidity, setLastNameValidity] = useState(true);
  const [phoneValidity, setPhoneValidity] = useState(true);

  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const phoneInputRef = useRef();

  const userChangeInfoHandler = (data) => {
    spinnerCtx.modalMsgHandler("اطلاعات با موفقیت بروزرسانی شد");
    spinnerCtx.toggleModal();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      numReg.test(phoneInputRef.current.value) &&
      nameInputRef.current.value.trim() !== 0 &&
      lastNameInputRef.current.value.trim() !== 0
    ) {
      sendServerRequest(
        {
          url:
            "http://localhost:3000/api/users/" +
            localStorage.getItem("user_ID"),
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": authCtx.accessToken,
          },
          body: {
            firstname: nameInputRef.current.value,
            lastname: lastNameInputRef.current.value,
            phone: phoneInputRef.current.value,
          },
        },
        userChangeInfoHandler
      );

      nameInputRef.current.value = "";
      lastNameInputRef.current.value = "";
      phoneInputRef.current.value = "";
      console.log("yes");
    } else {
      if (nameInputRef.current.value.trim().length === 0) {
        setNameValidity(false);
      }
      if (lastNameInputRef.current.value.trim().length === 0) {
        setLastNameValidity(false);
      }
      if (!numReg.test(phoneInputRef.current.value)) {
        setPhoneValidity(false);
      }
    }
  };

  const nameBlurHandler = () => {
    if (nameInputRef.current.value.trim().length === 0) {
      setNameValidity(false);
    }
  };

  const nameChangeHandler = () => {
    setNameValidity(true);
  };

  const lastNameBlurHandler = () => {
    if (lastNameInputRef.current.value.trim().length === 0) {
      setLastNameValidity(false);
    }
  };

  const lastNameChangeHandler = () => {
    setLastNameValidity(true);
  };
  const phoneBlurHandler = () => {
    if (!numReg.test(phoneInputRef.current.value)) {
      setPhoneValidity(false);
    }
  };

  const phoneChangeHandler = () => {
    setPhoneValidity(true);
  };
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
      <form className=" w-[400px]" onSubmit={formSubmitHandler}>
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
            className={`w-full border border-solid border-slate-500 rounded h-[35px] p-1 ${
              nameValidity ? "" : "wrong"
            }`}
            ref={nameInputRef}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
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
            className={`w-full border border-solid border-slate-500 rounded h-[35px] p-1 ${
              lastNameValidity ? "" : "wrong"
            }`}
            ref={lastNameInputRef}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
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
            className={`w-full border border-solid border-slate-500 rounded h-[35px] p-1 ${
              phoneValidity ? "" : "wrong"
            }`}
            ref={phoneInputRef}
            onBlur={phoneBlurHandler}
            onChange={phoneChangeHandler}
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
