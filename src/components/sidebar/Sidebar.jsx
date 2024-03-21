import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Sidebar = ({setShowPartyCart}) => {

  const handleCreatePary = () => {
    setShowPartyCart(true); 
  }
 
  return (
    <div className={styles.sidebar}>
      <Link className={styles.link} to='/'><img className={styles.logo} src={logo} alt="logo" /></Link>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <Link className={styles.sideBar_link}  to='/'>
            <span className={styles.span}>
              <svg width="21" height="23" viewBox="0 0 21 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.25 5.844C13.25 5.45565 13.436 5.10449 13.651 4.79491C13.872 4.47767 14 4.10135 14 3.69769C14 2.56436 12.993 1.64655 11.75 1.64655C10.507 1.64655 9.5 2.56546 9.5 3.69769C9.5 4.10135 9.628 4.47767 9.849 4.79491C10.064 5.10449 10.25 5.45565 10.25 5.844C10.2504 5.9378 10.2336 6.03074 10.2006 6.11731C10.1675 6.20387 10.1189 6.28228 10.0577 6.34789C9.99637 6.4135 9.92366 6.46497 9.84384 6.49925C9.76402 6.53352 9.67872 6.5499 9.593 6.5474C8.20166 6.50356 6.81271 6.39406 5.43 6.21922C5.616 7.98375 5.723 9.77453 5.745 11.5872C5.74593 11.6823 5.72958 11.7766 5.6969 11.8647C5.66422 11.9528 5.61587 12.0329 5.55465 12.1004C5.49343 12.1678 5.42056 12.2213 5.34028 12.2578C5.26 12.2942 5.17391 12.3128 5.087 12.3125C4.732 12.3125 4.411 12.109 4.128 11.8738C3.84137 11.6289 3.4887 11.4946 3.125 11.492C2.089 11.492 1.25 12.5936 1.25 13.9534C1.25 15.3132 2.09 16.4148 3.125 16.4148C3.494 16.4148 3.838 16.2747 4.128 16.033C4.411 15.7978 4.732 15.5943 5.087 15.5943C5.397 15.5943 5.642 15.8787 5.619 16.2178C5.49461 18.0726 5.28031 19.9189 4.977 21.7488C6.495 21.9567 8.035 22.0868 9.593 22.1361C9.67872 22.1386 9.76402 22.1222 9.84384 22.0879C9.92366 22.0536 9.99637 22.0022 10.0577 21.9366C10.1189 21.8709 10.1675 21.7925 10.2006 21.706C10.2336 21.6194 10.2504 21.5265 10.25 21.4327C10.25 21.0443 10.064 20.6932 9.849 20.3836C9.62511 20.07 9.5024 19.6842 9.5 19.2864C9.5 18.1541 10.508 17.2352 11.75 17.2352C12.993 17.2352 14 18.1541 14 19.2864C14 19.69 13.872 20.0663 13.651 20.3836C13.436 20.6932 13.251 21.0443 13.251 21.4327C13.251 21.797 13.528 22.0879 13.861 22.0672C15.6805 21.9501 17.4924 21.72 19.288 21.378C19.5597 19.6695 19.7539 17.9473 19.87 16.2178C19.8752 16.1379 19.8653 16.0576 19.8409 15.9821C19.8164 15.9065 19.778 15.8373 19.7279 15.7788C19.6779 15.7202 19.6173 15.6736 19.5501 15.6419C19.4828 15.6101 19.4103 15.5939 19.337 15.5943C18.982 15.5943 18.661 15.7978 18.378 16.033C18.088 16.2747 17.744 16.4148 17.375 16.4148C16.34 16.4148 15.5 15.3132 15.5 13.9534C15.5 12.5936 16.34 11.492 17.375 11.492C17.745 11.492 18.088 11.632 18.378 11.8738C18.661 12.109 18.982 12.3125 19.338 12.3125C19.4249 12.3128 19.511 12.2942 19.5913 12.2578C19.6716 12.2213 19.7444 12.1678 19.8057 12.1004C19.8669 12.0329 19.9152 11.9528 19.9479 11.8647C19.9806 11.7766 19.9969 11.6823 19.996 11.5872C19.972 9.6267 19.8484 7.66918 19.626 5.72367C17.74 6.09779 15.816 6.35159 13.86 6.47739C13.7813 6.48217 13.7025 6.46928 13.6285 6.43951C13.5545 6.40974 13.4869 6.36372 13.4297 6.30429C13.3726 6.24486 13.3272 6.17327 13.2963 6.09392C13.2653 6.01458 13.2496 5.93025 13.25 5.844Z" stroke="currentStroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Join Party
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link onClick={handleCreatePary} className={styles.sideBar_link} >
            <span className={styles.span}>
              <svg width="18" height="21" viewBox="0 0 18 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 15.9334H13.875M13.875 15.9334H17.25M13.875 15.9334V12.2414M13.875 15.9334V19.6255M3 8.95955H5.25C5.84674 8.95955 6.41903 8.70022 6.84099 8.23863C7.26295 7.77703 7.5 7.15097 7.5 6.49818V4.03681C7.5 3.38401 7.26295 2.75795 6.84099 2.29636C6.41903 1.83476 5.84674 1.57544 5.25 1.57544H3C2.40326 1.57544 1.83097 1.83476 1.40901 2.29636C0.987053 2.75795 0.75 3.38401 0.75 4.03681V6.49818C0.75 7.15097 0.987053 7.77703 1.40901 8.23863C1.83097 8.70022 2.40326 8.95955 3 8.95955ZM3 19.6255H5.25C5.84674 19.6255 6.41903 19.3662 6.84099 18.9046C7.26295 18.443 7.5 17.8169 7.5 17.1641V14.7027C7.5 14.0499 7.26295 13.4239 6.84099 12.9623C6.41903 12.5007 5.84674 12.2414 5.25 12.2414H3C2.40326 12.2414 1.83097 12.5007 1.40901 12.9623C0.987053 13.4239 0.75 14.0499 0.75 14.7027V17.1641C0.75 17.8169 0.987053 18.443 1.40901 18.9046C1.83097 19.3662 2.40326 19.6255 3 19.6255ZM12.75 8.95955H15C15.5967 8.95955 16.169 8.70022 16.591 8.23863C17.0129 7.77703 17.25 7.15097 17.25 6.49818V4.03681C17.25 3.38401 17.0129 2.75795 16.591 2.29636C16.169 1.83476 15.5967 1.57544 15 1.57544H12.75C12.1533 1.57544 11.581 1.83476 11.159 2.29636C10.7371 2.75795 10.5 3.38401 10.5 4.03681V6.49818C10.5 7.15097 10.7371 7.77703 11.159 8.23863C11.581 8.70022 12.1533 8.95955 12.75 8.95955Z" stroke="currentStroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Make Party
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar