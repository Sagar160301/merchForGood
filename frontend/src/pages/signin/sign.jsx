import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
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
      <Button text={"Sign Up"} link={"CREATE ACCOUNT"} path={"/signup"} />
    </div>
  );
};
