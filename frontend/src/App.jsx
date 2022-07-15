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
import { useCallback, useEffect, useState } from "react";
import { Product } from "./pages/product/product";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { SearchBox } from "./components/searchBox/SearchBox";
import cookie from "react-cookies";
import { addCartData } from "./redux/cart/action";

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

  const cartProduct = useCallback(async () => {
    try {
      let token = cookie.load("token");
      if (token == undefined) {
        token = "abc";
      }
      let res = await fetch("http://localhost:5902/cartProduct", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    dispatch(getData());
    setData(!data);
    // cartProduct();
  }, []);

  return (
    <div className="App">
      <Navbar search={changeSearchPage} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collections" element={<Collection />}></Route>
        <Route
          path="/signup"
          element={<SignUp cartProduct={cartProduct} />}
        ></Route>
        <Route
          path="/signin"
          element={<SignIn cartProduct={cartProduct} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<Product cartProduct={cartProduct} />}
        ></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
      {search ? <SearchBox search={changeSearchPage} /> : null}
    </div>
  );
}

export default App;
