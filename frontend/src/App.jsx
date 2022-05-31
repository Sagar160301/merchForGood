import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;