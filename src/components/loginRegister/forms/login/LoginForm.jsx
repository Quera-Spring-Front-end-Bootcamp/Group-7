import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../../hooks/use-http";
import SpinnerContext from "../../../../context/spinner-context";
import Input from "../premades/Input";
import AuthContext from "../../../../context/auth-context";

let regex = new RegExp("[a-z0-9]+@[a-z]+[.][a-z]{2,3}");

const loginReducerState = {
  emailIsNotValid: undefined,
  emailInputValue: "",
  passwordIsNotValid: undefined,
  passwordInputValue: "",
  loginFormIsValid: false,
};

const loginFormReducer = (state, action) => {
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
    return { ...state, loginFormIsValid: action.validity };
  }
  return loginReducerState;
};

const LoginForm = (props) => {
  const navigate = useNavigate();
  const spinnerCtx = useContext(SpinnerContext);
  const authContext = useContext(AuthContext);

  const [loginFormState, dispatchLoginForm] = useReducer(
    loginFormReducer,
    loginReducerState
  );

  const userLoginDataHandler = (loginData) => {
    console.log(loginData);

    localStorage.setItem("access_token", loginData.data.accessToken);
    localStorage.setItem("refresh_token", loginData.data.refreshToken);

    authContext.login(
      loginData.data.accessToken,
      loginData.data.refreshToken,
      loginData.data.toBeSendUserData._id,
      loginData.data.toBeSendUserData.username,
    );
    navigate("/");
  };

  const { sendServerRequest } = useHttp();

  const registerBtnClickHandler = () => {
    props.showRegisterForm(props);
  };

  const forgetPassHandler = () => {
    props.showForgetPass();
  };

  const emailBlurHandler = (e) => {
    if (!regex.test(e.target.value.toLowerCase())) {
      dispatchLoginForm({ type: "EMAIL_BLUR", validity: true });
    }
  };

  const emailChangeHandler = (e) => {
    dispatchLoginForm({
      type: "EMAIL_CHANGE",
      validity: false,
      value: e.target.value,
    });
    if (regex.test(e.target.value.toLowerCase())) {
      dispatchLoginForm({
        type: "FORM_VALIDITY",
        validity: !(loginFormState.passwordIsNotValid ?? true),
        value: e.target.value,
      });
    } else {
      dispatchLoginForm({
        type: "FORM_VALIDITY",
        validity: false,
        value: e.target.value,
      });
    }
  };

  const passwordBlurHandler = (e) => {
    if (e.target.value.trim().length < 8) {
      dispatchLoginForm({ type: "PASSWORD_BLUR", validity: true });
    }
  };

  const passwordChangeHandler = (e) => {
    dispatchLoginForm({
      type: "PASSWORD_CHANGE",
      validity: false,
      value: e.target.value,
    });
    if (e.target.value.trim().length >= 8) {
      dispatchLoginForm({
        type: "FORM_VALIDITY",
        validity: !(loginFormState.emailIsNotValid ?? true),
        value: e.target.value,
      });
    } else {
      dispatchLoginForm({
        type: "FORM_VALIDITY",
        validity: false,
        value: e.target.value,
      });
    }
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    sendServerRequest(
      {
        url: "http://localhost:3000/api/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          emailOrUsername: loginFormState.emailInputValue,
          password: loginFormState.passwordInputValue,
        },
      },
      userLoginDataHandler
    );
  };

  return (
    <form className="" onSubmit={loginFormSubmitHandler}>
      <h2 className="text-center text-2xl mb-8">{`(: به کوئرا تسک منیجر خوش برگشتی`}</h2>
      <Input
        title="ایمیل"
        id="login-form__email"
        inputIsNotValid={loginFormState.emailIsNotValid}
        type="text"
        value = {loginFormState.emailInputValue}
        inputBlurHandler={emailBlurHandler}
        inputChangeHandler={emailChangeHandler}
        placeholder="example@sth.sth"
        value={loginFormState.emailInputValue}
      />
      <Input
        title="رمز عبور"
        id="login-form__password"
        inputIsNotValid={loginFormState.passwordIsNotValid}
        type="text"
        value = {loginFormState.passwordInputValue}
        inputBlurHandler={passwordBlurHandler}
        inputChangeHandler={passwordChangeHandler}
        value={loginFormState.passwordInputValue}
      />
      <p
        className="mb-4 text-sm text-[#208D8E] cursor-pointer"
        onClick={forgetPassHandler}
      >
        رمز عبور را فراموش کرده ای؟
      </p>
      <button
        className="w-full bg-[#208D8E] h-[40px] text-white text-sm text-center mb-4 rounded-md disabled:bg-slate-400 cursor-pointer disabled:cursor-not-allowed"
        type="submit"
        disabled={!loginFormState.loginFormIsValid}
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
