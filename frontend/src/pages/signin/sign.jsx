import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "react-router-dom";
import "../signup/signup.scss";
export const SignIn = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div className="sign-up-section">
      <h1>LOG IN</h1>
      <form action="">
        <Input onChange={handleChange} name={"Email"} type={"email"} />
        <Input onChange={handleChange} name={"Password"} type={"password"} />
      </form>
      <div className="auth-button">
        <Button text={"Sign In"} path={"/signup"} />
        <Link to={"/signup"}>CREATE ACCOUNT</Link>
      </div>
    </div>
  );
};
