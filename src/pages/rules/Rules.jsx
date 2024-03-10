import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
  return (
    <div>
      <p>Rules</p>
      <p>link</p>
      <Link to={"/"}>to the main page</Link>
      <p>link</p>
      <Link to={"/registration"}>to the registration</Link>
    </div>
  );
}

export default Rules;
