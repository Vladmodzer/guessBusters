import { Link } from "react-router-dom";
import styles from "./PartyCart.module.css";

function PartyCart({setShowPartyCart}) {
  const handleCreatePary = () => {
    setShowPartyCart(false); 
  }
  return (
    <Link className={styles.party_cart}>
      <p>{"PartyCart"}</p>
      <p>{3}</p>
      <button onClick={handleCreatePary} className={styles.button}>
        <svg
          className={styles.cross}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
       
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Link>
  );
}

export default PartyCart;
