import { useEffect } from "react";
import LoginRegister from "./pages/LoginRegister";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/login" Component={LoginRegister} />
      </Routes>
    </>
  );
}

export default App;
