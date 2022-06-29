import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";
import { useState } from "react";
import { auth } from "../../functions/authFuncton";

import cookie from "react-cookies";

export const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="sign-up-section">
      <h1>CREATE ACCOUNT</h1>
      <form action="">
        <div className="sign-up-name">
          <Input onChange={handleChange} name={"FirstName"} type={"text"} />
          <Input onChange={handleChange} name={"LastName"} type={"text"} />
        </div>
        <Input onChange={handleChange} name={"Email"} type={"email"} />
        <Input onChange={handleChange} name={"Password"} type={"password"} />
      </form>
      <div className="auth-button">
        <Button
          text={"Sign Up"}
          onClick={async () => {
            try {
              if (
                user.Email &&
                user.Password &&
                user.FirstName &&
                user.LastName
              ) {
                let token = await auth("/signup", user);

                cookie.save("token", token);

                navigate("/");
              } else {
                alert("please fill the details");
              }
            } catch (error) {
              alert(error);
            }
          }}
        />
        <Link to={"/"}>RETURN TO STORE</Link>
      </div>
    </div>
  );
};
