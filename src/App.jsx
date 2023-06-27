import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginRegister from "./pages/loginRegister";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/provider";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import NewWorkSpace from "./components/WorkSpace/NewWorkSpace";
import ShareProject from "./components/Share/ShareProject";
import NewTask from "./components/NewTask/NewTask";
import TagsProvider from "./context/TagsProvider";
import NewTaskCalender from "./components/NewTask/NewTaskCalendar";
import ShareWorkSpace from "./components/Share/ShareWorkSpace";
import RequesWaitingPage from "./components/mostlyUsed/RequesWaitingPage/RequesWaitingPage";
import SpinnerContext from "./context/spinner-context";
import HttpRequestModal from "./components/mostlyUsed/RequesWaitingPage/HttpRequestModal";
import AuthContext from "./context/auth-context";
import useHttp from "./hooks/use-http";
function App() {
  const navigate = useNavigate();
  const { sendServerRequest: getAccessToken } = useHttp();
  const { sendServerRequest: getSpaces } = useHttp();
  const [fixUseEffectBehave, setFixUseEffectBehave] = useState(false);

  // useEffect(() => {
  //   navigate("/login");
  // }, []);

  // const { isLogin, setIsLogin } = useContext(UserContext);
  const { accessToken, refreshToken, logout, isLoggedIn, login, userID } =
    useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  const spaceContext = useContext(UserContext);
  // const handleLogin = () => {
  //   setIsLogin(true);
  // };

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
      login(res.data.accessToken, refreshToken, userID);
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

        {/* <Route
          path="/login"
          element={authCtx.isLoggedIn ? <Navigate to="/" /> : <LoginRegister />}
        />
        <Route
          path="/"
          element={authCtx.isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authCtx.isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/task"
          element={authCtx.isLoggedIn ? <NewTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/abc"
          element={
            authCtx.isLoggedIn ? <NewTaskCalender /> : <Navigate to="/login" />
          }
        /> */}
      </Routes>
    </>
    // </Router>
  );
  // <Profile />
  // <HomePage />
  // <NewWorkSpace />
  // <ShareProject />
  // <ShareWorkSpace />
  // <TagsProvider>
  // <NewTask />
  // </TagsProvider>
  // <NewTaskCalender />
}

export default App;
