import Header from "./components/Header/index"
import './App.css';
import { Route, Routes, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import authHook from "./hooks/auth.hook";
import { useEffect } from "react";

function App() {
  const { getMe, googleLogin } = authHook();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      googleLogin();
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </div>
  );
}

export default App;
