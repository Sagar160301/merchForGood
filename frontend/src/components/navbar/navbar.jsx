import "./navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-name">WORLDWIDE SHIPING</div>
      {/* adding the cart and login icon  */}
      <div className="nav-itemDetails">
        <Link to={"/"}>LOG IN</Link>
        <Link to={"/"}>CART()</Link>
        <SearchIcon className="nav-icon" />
      </div>
    </div>
  );
};
