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
function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login");
  // }, []);

  const { isLogin, setIsLogin } = useContext(UserContext);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      <RequesWaitingPage />
      <Routes>
        <Route
          path="/login"
          element={
            isLogin ? (
              <Navigate to="/" />
            ) : (
              <LoginRegister handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/"
          element={isLogin ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/task"
          element={isLogin ? <NewTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/abc"
          element={isLogin ? <NewTaskCalender /> : <Navigate to="/login" />}
        />
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
