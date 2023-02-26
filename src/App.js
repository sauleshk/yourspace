import Header from "./components/Header/index"
import './App.scss';
import { Route, Routes, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import authHook from "./hooks/auth.hook";
import { useEffect } from "react";
import Gift from "./pages/Gift/Gift";

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
        <Route path="/gift" element={<Gift />} />
      </Routes>
    </div>
  );
}

export default App;
