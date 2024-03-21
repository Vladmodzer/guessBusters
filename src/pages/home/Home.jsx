import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PartyCart from "../../components/party_cart/PartyCart";
import { useEffect, useState } from "react";

function Home() {
  const [showPartyCart, setShowPartyCart] = useState(false);

  return (
    <div className="page_wrapper">
      <Sidebar setShowPartyCart={setShowPartyCart}/>
      <div className="page">
        <Header />
        <main className={styles.home_main}>
          {showPartyCart && <PartyCart />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
