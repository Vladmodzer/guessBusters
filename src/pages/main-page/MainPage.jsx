import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-wrapper">
      <p> MainPage</p>
      <Link to={"registration"}>to the registration</Link>
    </div>
  );
}

export default MainPage;
