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
    // <Router>
    // <Routes>
    //   <Route
    //     path="/login"
    //     element={isLogin ? <Navigate to="/" /> : <LoginRegister handleLogin={handleLogin} />}
    //   />
    //   <Route
    //     path="/"
    //     element={isLogin ? <HomePage /> : <Navigate to="/login" />}
    //   />
    // </Routes>
    // </Router>
    // <Profile />
    // <HomePage />
    // <NewWorkSpace />
    <ShareProject />
  );
}

export default App;
