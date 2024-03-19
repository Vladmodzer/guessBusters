import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import React from 'react'

const Header = () => {
  return (    
    <div className={styles.link}>
        <Link to="/profile">profile</Link>
    </div>    
  )
}

export default Header