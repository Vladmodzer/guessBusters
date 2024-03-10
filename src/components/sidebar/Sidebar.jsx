import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link className={styles.link} to='/'><img className={styles.logo} src={logo} alt="logo" /></Link>
      <ul className="sidebar_menu">
        <li className="menu_item"><Link to='/'>Join Party</Link></li>
        <li className="menu_item"><Link to='/party'>Make Party</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar