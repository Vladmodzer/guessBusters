import { useState } from "react";
import styles from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import HeaderButton from "../buttons/HeaderButton";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    repeatPassword: "",
    email: "",
    iAgree: false,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? value : value.trim(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Обработать форму и отправить данные на сервер

    console.log("Форма отправлена!");
  };
  const [xPosition, setXPosition] = useState(0); // Initial position

  const handleClick = () => {
    setXPosition(xPosition === 19 ? 0 : 19); // Update position on click (add 100px)
  };

  return (
    <form
      className={`${styles.form} common_registration_styles`}
      onSubmit={handleSubmit}
    >
      <h1 className={styles.title}>Sign up</h1>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="userName">
          User name
        </label>
        <input
          className={`${styles.input} common_registration_inputs`}
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          autoComplete="new-userName"
        />
        <p className={styles.reg_text}>
          Be sure to choose a family-friendly username. You cannot change it
          later, and any accounts with inappropriate usernames will be closed!
        </p>
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={`${styles.input} common_registration_inputs`}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <div className={styles.password_indicator}>
          <div className={styles.indicator_box}>
          <div className={`${styles.indicator}`}></div>
          <div className={`${styles.indicator}`}></div>
          <div className={`${styles.indicator}`}></div>
          <div className={`${styles.indicator}`}></div>
          </div>
          <div className={styles.text_box}>
            <p className={styles.indicator_text}>Strong password</p>
          </div>
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="repeatPassword">
          Repeat Password
        </label>
        <input
          className={`${styles.input} common_registration_inputs`}
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          autoComplete="password"
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={`${styles.input} common_registration_inputs`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="new-email"
        />
        <p>We will only use it for password reset.</p>
      </div>
      <div className={styles.checkboxGroup}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="iAgree"
          name="iAgree"
          checked={formData.iAgree}
          onChange={handleChange}
          autoComplete="checkbox"
        />
        <label className={styles.label} htmlFor="iAgree">
          <input type="checkbox" id="toggle" className={styles.toggle_button} />
          <label htmlFor="toggle" className={styles.toggle_label}>
            <span
              style={{ left: `${xPosition}px` }}
              onClick={handleClick}
              className={styles.toggle_inner}
            ></span>
          </label>
          I agree that I will follow all Lichess policies.
        </label>
      </div>
      <p className={styles.reg_text}>
        Also note that making multiple accounts is strongly discouraged and
        excessive multi-accounting will lead to being banned. By registering,
        you agree to be bound by our Terms of Service.Read about our Privacy
        policy.
      </p>

      <HeaderButton
        className={styles.reg_btn}
        width="76%"
        type="submit"
        btnText={"REGISTER"}
      />
  
    </form>
  );
};

export default RegistrationForm;
