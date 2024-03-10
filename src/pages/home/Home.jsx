import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className={styles.main_wrapper}>
      <p> MainPage</p>
      <Link to="/registration">to the registration</Link>
      <p>link</p>
      <Link to="/rules">to the rule</Link>
      <Sidebar/>
    </div>
  );
}

export default Home;
