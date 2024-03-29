import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PartyCart from "../../components/party_cart/PartyCart";
import { useState } from "react";

function Home() {
  const [showPartyCart, setShowPartyCart] = useState(false);
  const [isburgerMenu, setBurgerMenu] = useState(true);

  return (
    <div className="page_wrapper">
      <Sidebar setShowPartyCart={setShowPartyCart} isburgerMenu={isburgerMenu}/>
      <div className="page">
        <Header isburgerMenu={isburgerMenu} setBurgerMenu={setBurgerMenu} />
        <main className={styles.home_main}>
          {showPartyCart && <PartyCart setShowPartyCart={setShowPartyCart} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
