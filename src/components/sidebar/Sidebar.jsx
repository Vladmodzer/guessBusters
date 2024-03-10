import style from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <Link to='/'><img src="../../assets/logo.jpeg" alt="" /></Link>
      <ul className="sidebar_menu">
        <li className="menu_item"><Link to='/'>Join Party</Link></li>
        <li className="menu_item"><Link to='/party'>Make Party</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar