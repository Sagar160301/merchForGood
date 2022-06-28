import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "react-router-dom";
import "../signup/signup.scss";
import { auth } from "../../functions/authFuncton";
import { useState } from "react";
import { addToken } from "../../redux/authToken/action";
import { useDispatch } from "react-redux";
export const SignIn = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="sign-up-section">
      <h1>LOG IN</h1>
      <form action="">
        <Input onChange={handleChange} name={"Email"} type={"email"} />
        <Input onChange={handleChange} name={"Password"} type={"password"} />
      </form>
      <div className="auth-button">
        <Button
          text={"Sign In"}
          path={"/signup"}
          onClick={async () => {
            try {
              if (user.Email && user.Password) {
                let token = auth("/signin", user);
                dispatch(addToken(token));
              } else {
                alert("please enter email and password");
              }
            } catch (error) {
              alert(error);
            }
          }}
        />
        <Link to={"/signup"}>CREATE ACCOUNT</Link>
      </div>
    </div>
  );
};
