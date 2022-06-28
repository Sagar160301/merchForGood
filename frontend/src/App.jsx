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
import { useEffect, useState } from "react";
import { Product } from "./pages/product/product";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState(false);

  useEffect(() => {
    dispatch(getData());
    setData(!data);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
