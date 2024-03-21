import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.jpeg";
function Footer() {
  return (
    <footer>
      <div className={styles.lincs_box}>
        <Link className={styles.footer_link}>Privacy</Link>
        <Link className={styles.footer_link}>Legal</Link>
        <Link className={styles.footer_link}>Terms</Link>
        <Link className={styles.footer_link}>Cookie Policy</Link>
        <Link className={styles.footer_link}>Cookies settings</Link>
      </div>
      <div className={styles.logo_box}>
        <Link className={styles.footer_link}>2024 Merry busters company </Link>
        <Link className={styles.footer_link}>
            <img className={styles.footer_logo} src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
