import { Routes, Route } from "react-router-dom";
// import { useCallback } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/Footer/Footer";

import { Collection } from "./pages/collections/collection";
import { Home } from "./pages/home/home";
import { useDispatch } from "react-redux";
import { getData } from "./redux/data/action";
import { SignUp } from "./pages/signup/signup";
import { SignIn } from "./pages/signin/sign";
import { useCallback, useEffect, useState } from "react";
import { Product } from "./pages/product/product";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { SearchBox } from "./components/searchBox/SearchBox";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState(false);
  const [search, setSearch] = useState(false);

  const changeSearchPage = useCallback(
    (value) => {
      setSearch(value);
    },
    [search]
  );

  useEffect(() => {
    dispatch(getData());
    setData(!data);
  }, []);

  return (
    <div className="App">
      <Navbar search={changeSearchPage} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
      {search ? <SearchBox search={changeSearchPage} /> : null}
    </div>
  );
}

export default App;
