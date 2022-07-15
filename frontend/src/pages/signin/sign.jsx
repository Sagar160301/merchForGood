import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import "../signup/signup.scss";
import { auth } from "../../functions/authFuncton";
import { useState } from "react";
import cookie from "react-cookies";

export const SignIn = ({ cartProduct }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
                let token = await auth("/signin", user);

                if (token) {
                  cookie.save("token", token);

                  navigate("/");
                }
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
