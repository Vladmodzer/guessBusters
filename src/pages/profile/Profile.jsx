import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import bg from "../../assets/bgmistery.png";
import ava from "../../assets/userOne.png";

function Profile() {
  const [showPartyCart, setShowPartyCart] = useState(false);
  return (
    <div className="page_wrapper">
      <Sidebar setShowPartyCart={setShowPartyCart}/>
      <div className="page">
        <Header />
        <main className={styles.profile_main}>
          <div className={styles.bg}></div>
          <div className={styles.user_data}>
            <div className={styles.user_data_block}>
              <div className={styles.name_loc}>
                <div className={styles.user_name}>UserOne</div>
                <div className={styles.user_loc}>Germany</div>
              </div>
              <div className={styles.user_email}>player@gmail.com</div>
            </div>
            <button className={styles.edit_btn}>
              Edit
            </button>
          </div>
          <div className={styles.user_info}>
            <div className={styles.user_stat}>
              <div className={styles.info_title}>
                Stats
                <form>
                  <select id="mode" name="mode">
                    <option value="apple">General</option>
                    <option value="banana">Extended</option>
                    <option value="orange">Minimal</option>
                  </select>
                </form>
              </div>
              <div className={styles.stat_item}>
                Total games: 10
              </div>
              <div className={styles.stat_item}>
                Likes: 30
              </div>
              <div className={styles.stat_item}>
                Medals: 5
              </div>
              <div className={styles.stat_item}>
                Answers: 40
              </div>
              <div className={styles.stat_item}>
                Playstreak: 3 days
              </div>
            </div>
          <div className={styles.user_lang}>
            <div className={styles.lang_title}>
              Language
              <button className={styles.edit_btn}>
                Edit
              </button>
            </div>
            <div className={styles.lang_category}>
              <div className={styles.cat_title}>
                Native language
              </div>
              <div className={styles.category_list}>
                <div className={styles.category_item}>Russian</div>
                <div className={styles.category_item}>Ukrainian</div>
              </div>
            </div>
            <div className={styles.lang_category}>
            <div className={styles.cat_title}>
                Fluent language
              </div>
              <div className={styles.category_list}>
                <div className={styles.category_item}>English</div>
              </div>
            </div>
            <div className={styles.lang_category}>
            <div className={styles.cat_title}>
                Learning language
              </div>
              <div className={styles.category_list}>
                <div className={styles.category_item}>Germany</div>
              </div>
            </div>
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;