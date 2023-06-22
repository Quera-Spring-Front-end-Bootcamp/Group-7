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
function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login");
  // }, []);

  // const { isLogin, setIsLogin } = useContext(UserContext);
  const authCtx = useContext(AuthContext);
  const spinnerCtx = useContext(SpinnerContext);
  // const handleLogin = () => {
  //   setIsLogin(true);
  // };

  return (
    <>
      {spinnerCtx.backEndModalVisibility && <HttpRequestModal />}
      {spinnerCtx.spinnerVisibility && <RequesWaitingPage />}
      <Routes>
        {authCtx.isLoggedIn && <Route path="/" element={<HomePage />} />}
        {authCtx.isLoggedIn && <Route path="/profile" element={<Profile />} />}

        {!authCtx.isLoggedIn && (
          <Route path="/login" element={<LoginRegister />} />
        )}
        {authCtx.isLoggedIn && <Route path="*" element={<HomePage />} />}
        {!authCtx.isLoggedIn && <Route path="*" element={<LoginRegister />} />}

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
