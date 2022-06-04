import "./button.scss";
import { Link } from "react-router-dom";

export const Button = ({ text, link, path }) => {
  return (
    <div className="button">
      <div>{text}</div>
      <Link to={path ? path : "/"}>{link}</Link>
    </div>
  );
};
