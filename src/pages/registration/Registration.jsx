import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <div className="registration-wrapper">
      <p> Registration</p>
      <p>link</p>
      <Link to={"/"}>to the main page</Link>
      <p>link</p>
      <Link to={"/rules"}>to the rules</Link>

    </div>
  );
}

export default Registration;
