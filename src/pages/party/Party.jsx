import { Link } from "react-router-dom";
import styles from "./Party.module.css";

const Party = () => {
  return (
    <div>
      <p>Party</p>
      <Link to={"/"}>back to home</Link>
    </div>
  );
};

export default Party;
