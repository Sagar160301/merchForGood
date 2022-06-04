import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import "./signup.scss";
export const SignUp = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
      <Button text={"Sign Up"} link={"RETURN TO STORE"} />
    </div>
  );
};
