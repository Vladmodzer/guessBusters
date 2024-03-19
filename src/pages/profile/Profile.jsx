import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Profile() {
  return (
    <div className={styles.main_wrapper}>
      <h2 className={styles.test}> Profile Page</h2>
      <Sidebar/>
    </div>
  );
}

export default Profile;