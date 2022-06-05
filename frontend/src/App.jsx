import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import {Footer} from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
      <Footer/>
    </div>
  );
}

export default App;
