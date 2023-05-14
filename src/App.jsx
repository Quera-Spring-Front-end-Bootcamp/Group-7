import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginRedister from "./pages/loginRegister"
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <>
      <Routes>
        <Route exact path="/login" Component={LoginRedister} />
      </Routes>
    </>
  )
}

export default App
