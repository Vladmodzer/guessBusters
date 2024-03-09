import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <div className="registration-wrapper">
      <p> Registration</p>
      <Link to={"/"}>to the main page</Link>
    </div>
  );
}

export default Registration;
