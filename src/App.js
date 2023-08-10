import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/AboutUs";
import Overview from "./Pages/Overview";
import History from "./Pages/History";
import Judging from "./Pages/Judging";
import TimeLine from "./Pages/TimeLine";
import ContactBar from "./Pages/ContactBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <HomePage />
        <Overview />
        <Judging />
        <h1>Timeline</h1>
        <TimeLine />
        <History />
        <ContactBar />



    </div>
  );
}

export default App;
