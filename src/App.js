import Header from "./components/Header/index"
import './App.css';
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Problem from "./components/problem";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aboutus />
      <Problem />
    </div>
  );
}

export default App;
