import { useContext, useEffect, useState } from "react";

import LoginRegister from "./pages/loginRegister";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/provider";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import RequesWaitingPage from "./components/mostlyUsed/RequesWaitingPage/RequesWaitingPage";
import SpinnerContext from "./context/spinner-context";
import HttpRequestModal from "./components/mostlyUsed/RequesWaitingPage/HttpRequestModal";
import AuthContext from "./context/auth-context";
import useHttp from "./hooks/use-http";
function App() {
  const navigate = useNavigate();
  const { sendServerRequest: getAccessToken } = useHttp();
  const { sendServerRequest: getSpaces } = useHttp();
  const { sendServerRequest: getUserInfo } = useHttp();
  const [fixUseEffectBehave, setFixUseEffectBehave] = useState(false);

  const {
    accessToken,
    refreshToken,
    logout,
    isLoggedIn,
    login,
    userID,
    userDataManager,
  } = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const spaceContext = useContext(UserContext);
  // const handleLogin = () => {
  //   setIsLogin(true);
  // };

  useEffect(() => {
    const saveUserInfoToCtx = (data) => {
      userDataManager(data.data);
    };

    if (userID) {
      getUserInfo(
        { url: "http://localhost:3000/api/users/" + userID },
        saveUserInfoToCtx
      );
    } else {
      console.log("noooooooo!");
    }
  }, [userID]);

  useEffect(() => {
    const getSpacesFunction = () => {
      const gotWorkspaces = (val) => {
        console.log("space valuessss", val);
        spaceContext.setSpaces(val.data)
      };

      getSpaces(
        {
          url: "http://localhost:3000/api/workspace/get-all",
          method: "GET",
        },
        gotWorkspaces
      );
    };

    const getNewAccessToken = (res) => {
      getSpacesFunction();

      localStorage.setItem("access_token", res.data.accessToken);
      login(
        res.data.accessToken,
        localStorage.getItem("refresh_token"),
        localStorage.getItem("user_ID")
      );
      setFixUseEffectBehave(true);
    };

    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("refresh_token")
    ) {
      getAccessToken(
        {
          url: "http://localhost:3000/api/auth/refreshtoken",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            refreshToken: localStorage.getItem("refresh_token"),
          },
        },
        getNewAccessToken
      );
    } else {
      logout();
      setFixUseEffectBehave(true);
    }
  }, [getAccessToken]);

  return (
    <>
      {spinnerCtx.backEndModalVisibility && <HttpRequestModal />}
      {spinnerCtx.spinnerVisibility && <RequesWaitingPage />}
      {!fixUseEffectBehave && <RequesWaitingPage />}

      <Routes>
        {fixUseEffectBehave && isLoggedIn && (
          <Route path="/" element={<HomePage />} />
        )}
        {fixUseEffectBehave && isLoggedIn && (
          <Route path="/profile" element={<Profile />} />
        )}

        {fixUseEffectBehave && !isLoggedIn && (
          <Route path="/login" element={<LoginRegister />} />
        )}
        {fixUseEffectBehave && isLoggedIn && (
          <Route path="*" element={<HomePage />} />
        )}
        {fixUseEffectBehave && !isLoggedIn && (
          <Route path="*" element={<LoginRegister />} />
        )}
      </Routes>
    </>
  );
}

export default App;
