import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import styles from "./Registration.module.css";
import { useState } from "react";
import LogInForm from "../../components/logInForm/LogInForm";
function Registration() {
  const [isHeaderBtn, setHeaderBtn] = useState(true);

  return (
    <div className="page_wrapper">
      <Sidebar />
      <div className="page">
        <Header setHeaderBtn={setHeaderBtn} isHeaderBtn={isHeaderBtn} />
        <main className={styles.reg_main}>
          {isHeaderBtn ? <RegistrationForm /> : <LogInForm/>}
        </main>
      </div>
    </div>
  );
}

export default Registration;
