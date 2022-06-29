import "./navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../public/main_logo.webp";
import { getData } from "../../redux/data/action";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div className="nav">
      <div className="nav-name">WORLDWIDE SHIPING</div>
      {/* adding the cart and login icon  */}
      <div className="nav-itemDetails">
        <Link to={"/signin"}>LOG IN</Link>
        <Link to={"/"}>CART()</Link>
        <SearchIcon className="nav-icon" />
      </div>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav-link">
        <Link to={"/collections"}>BAND T-SHIRTS</Link>
        <Link to={"/aboutUs"}>ABOUT US</Link>
        <Link to={""}>THE ARTISTS</Link>
        <Link to={""}>WORLD CANCER DAY</Link>
        <Link to={""}>PRESS</Link>
      </div>
    </div>
  );
};
