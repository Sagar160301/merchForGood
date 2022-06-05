import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/Footer/Footer";
import { Collection } from "./pages/collections/collection";
import { Home } from "./pages/home/home";
import { useDispatch } from "react-redux";
import { getData } from "./redux/data/action";
import { SignUp } from "./pages/signup/signup";
import { SignIn } from "./pages/signin/sign";

function App() {
  const dispatch = useDispatch();
  dispatch(getData());

  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
