import { useContext, useEffect, useReducer, useState } from "react";
import Input from "../premades/Input";
import useHttp from "../../../../hooks/use-http";
import RequesWaitingPage from "../../../mostlyUsed/RequesWaitingPage/RequesWaitingPage";
import SpinnerContext from "../../../../context/spinner-context";

let emailregex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}");
let nameregex = new RegExp("[a-z]{3,}");
let numRegex = new RegExp("[0-9]");
let upperCaseRegex = new RegExp("[A-Z]");
let registerReducerInit = {
  nameIsNotValid: undefined,
  nameInputValue: "",
  emailIsNotValid: undefined,
  emailInputValue: "",
  passwordIsNotValid: undefined,
  passwordInputValue: "",
  registerFormIsValid: false,
};
const registerFormReducer = (state, action) => {
  if (action.type === "NAME_BLUR") {
    return { ...state, nameIsNotValid: action.validity };
  }
  if (action.type === "NAME_CHANGE") {
    return {
      ...state,
      nameIsNotValid: action.validity,
      nameInputValue: action.value,
    };
  }
  if (action.type === "EMAIL_BLUR") {
    return { ...state, emailIsNotValid: action.validity };
  }
  if (action.type === "EMAIL_CHANGE") {
    return {
      ...state,
      emailIsNotValid: action.validity,
      emailInputValue: action.value,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { ...state, passwordIsNotValid: action.validity };
  }
  if (action.type === "PASSWORD_CHANGE") {
    return {
      ...state,
      passwordIsNotValid: action.validity,
      passwordInputValue: action.value,
    };
  }
  if (action.type === "FORM_VALIDITY") {
    return { ...state, registerFormIsValid: action.validity };
  }
  if (action.type === "USER_REGISTERED") {
    return {
      nameIsNotValid: undefined,
      nameInputValue: "",
      emailIsNotValid: undefined,
      emailInputValue: "",
      passwordIsNotValid: undefined,
      passwordInputValue: "",
      registerFormIsValid: false,
    };
  }
  return registerReducerInit;
};
const RegisterForm = () => {
  const spinnerCtx = useContext(SpinnerContext);

  const [registerFormState, dispatchRegisterForm] = useReducer(
    registerFormReducer,
    registerReducerInit
  );

  const userRegisterDatahandler = (requestResult) => {
    console.log(requestResult);
    dispatchRegisterForm({ type: "USER_REGISTERED" });
    spinnerCtx.modalMsgHandler(
      requestResult.message + " .please login to continue."
    );
    spinnerCtx.toggleModal();
  };
  const { sendServerRequest } = useHttp();

  const [passRequirements, setPassRequirements] = useState({
    passStatus: false,
    passUppercase: false,
    passNumber: false,
    passLength: false,
  });

  const nameBlurHandler = (e) => {
    if (!nameregex.test(e.target.value.toLowerCase())) {
      dispatchRegisterForm({ type: "NAME_BLUR", validity: true });
    }
  };

  const nameChangeHandler = (e) => {
    dispatchRegisterForm({
      type: "NAME_CHANGE",
      validity: false,
      value: e.target.value,
    });
    if (nameregex.test(e.target.value.toLowerCase())) {
      dispatchRegisterForm({
        type: "FORM_VALIDITY",
        validity:
          !(registerFormState.emailIsNotValid ?? true) &&
          !(registerFormState.passwordIsNotValid ?? true),
        value: e.target.value,
      });
    } else {
      dispatchRegisterForm({
        type: "FORM_VALIDITY",
        validity: false,
        value: e.target.value,
      });
    }
  };

  const emailBlurHandler = (e) => {
    if (!emailregex.test(e.target.value.toLowerCase())) {
      dispatchRegisterForm({ type: "EMAIL_BLUR", validity: true });
    }
  };

  const emailChangeHandler = (e) => {
    dispatchRegisterForm({
      type: "EMAIL_CHANGE",
      validity: false,
      value: e.target.value,
    });
    if (emailregex.test(e.target.value.toLowerCase())) {
      dispatchRegisterForm({
        type: "FORM_VALIDITY",
        validity:
          !(registerFormState.nameIsNotValid ?? true) &&
          !(registerFormState.passwordIsNotValid ?? true),
        value: e.target.value,
      });
    } else {
      dispatchRegisterForm({
        type: "FORM_VALIDITY",
        validity: false,
        value: e.target.value,
      });
    }
  };

  const passwordBlurHandler = (e) => {
    if (Object.values(passRequirements).some((val) => val === false)) {
      dispatchRegisterForm({ type: "PASSWORD_BLUR", validity: true });
    }
  };

  const passwordChangeHandler = (e) => {
    dispatchRegisterForm({
      type: "PASSWORD_CHANGE",
      validity: false,
      value: e.target.value,
    });

    setPassRequirements(function (prevState) {
      return { ...prevState, passStatus: true };
    });

    if (e.target.value.trim().length >= 8) {
      setPassRequirements(function (prevState) {
        return { ...prevState, passLength: true };
      });
    } else {
      setPassRequirements(function (prevState) {
        return { ...prevState, passLength: false };
      });
    }
    if (numRegex.test(e.target.value.trim())) {
      setPassRequirements(function (prevState) {
        return { ...prevState, passNumber: true };
      });
    } else {
      setPassRequirements(function (prevState) {
        return { ...prevState, passNumber: false };
      });
    }
    if (upperCaseRegex.test(e.target.value.trim())) {
      setPassRequirements(function (prevState) {
        return { ...prevState, passUppercase: true };
      });
    } else {
      setPassRequirements(function (prevState) {
        return { ...prevState, passUppercase: false };
      });
    }
  };

  const registerFormSubmitHandler = (e) => {
    e.preventDefault();
    // fetch("http://localhost:3000/api/auth/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: "alirezazzz",
    //     email: "alirezaheibati@gmail.com",
    //     password: "password123",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   if (res.ok) {
    //     console.log("ok");
    //   } else {
    //     return res.json().then((data) => {
    //       console.log(data);
    //     });
    //   }
    // });
    console.log(registerFormState);
    sendServerRequest(
      {
        url: "http://localhost:3000/api/auth/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          username: registerFormState.nameInputValue,
          email: registerFormState.emailInputValue,
          password: registerFormState.passwordInputValue,
        },
      },
      userRegisterDatahandler
    );
  };

  useEffect(() => {
    if (Object.values(passRequirements).every((val) => val === true)) {
      dispatchRegisterForm({
        type: "FORM_VALIDITY",
        validity: !(registerFormState.emailIsNotValid ?? true),
      });
    } else {
      dispatchRegisterForm({ type: "FORM_VALIDITY", validity: false });
    }
  }, [
    passRequirements.passLength,
    passRequirements.passNumber,
    passRequirements.passUppercase,
  ]);
  return (
    <form className="" onSubmit={registerFormSubmitHandler}>
      <h2 className="text-center text-2xl mb-8">{`ثبت نام در کوئرا تسک منیجر`}</h2>
      <Input
        title="نام کامل"
        id="register-form__name"
        inputIsNotValid={registerFormState.nameIsNotValid}
        type="text"
        inputBlurHandler={nameBlurHandler}
        inputChangeHandler={nameChangeHandler}
        value={registerFormState.nameInputValue}
      />
      <Input
        title="ایمیل"
        id="register-form__email"
        inputIsNotValid={registerFormState.emailIsNotValid}
        type="text"
        inputBlurHandler={emailBlurHandler}
        inputChangeHandler={emailChangeHandler}
        placeholder="example@sth.sth"
        value={registerFormState.emailInputValue}
      />
      <Input
        title="رمز عبور"
        id="register-form__password"
        inputIsNotValid={registerFormState.passwordIsNotValid}
        type="text"
        inputBlurHandler={passwordBlurHandler}
        inputChangeHandler={passwordChangeHandler}
        value={registerFormState.passwordInputValue}
      />
      <ul
        className={`flex justify-between mb-4 -mt-2 ${
          passRequirements.passStatus ? "block" : "hidden"
        }`}
      >
        <li
          className={`text-[10px] ${
            passRequirements.passUppercase ? "text-[#208D8E]" : "text-[#ff0000]"
          }`}
        >
          حداقل یک حرف بزرگ -
        </li>
        <li
          className={`text-[10px] ${
            passRequirements.passLength ? "text-[#208D8E]" : "text-[#ff0000]"
          }`}
        >
          حداقل هشت کاراکتر -
        </li>
        <li
          className={`text-[10px] ${
            passRequirements.passNumber ? "text-[#208D8E]" : "text-[#ff0000]"
          }`}
        >
          حداقل یک عدد -
        </li>
      </ul>
      <p className="text-base mb-4">
        .قوانین و مقررات را می پذیرم <input type="checkbox" id="have-account" />
      </p>

      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center rounded-md disabled:bg-slate-400 cursor-pointer disabled:cursor-not-allowed"
        type="submit"
        disabled={!registerFormState.registerFormIsValid}
      >
        ثبت نام
      </button>
    </form>
  );
};

export default RegisterForm;
