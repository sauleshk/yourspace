import Header from "./components/Header/index"
import './App.css';
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Problem from "./components/problem";
import { Route, Routes, } from "react-router-dom";
import HomePage from "./Auth/HomePage";
import RegisterPage from "./Auth/RegisterPage";
import LoginPage from "./Auth/LoginPage";

function App() {
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
