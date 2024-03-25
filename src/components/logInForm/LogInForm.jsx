import HeaderButton from "../buttons/HeaderButton";
import styles from "./LogInForm.module.css";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isCheckRadioBtn, setCheckRadioBtn] = useState(false);
  const handleCheckRadioBtn = () => {
    setCheckRadioBtn(!isCheckRadioBtn);
    console.log(isCheckRadioBtn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправить данные формы на сервер
    console.log("Логин:", username, password, rememberMe);
  };

  return (
    <form
      className={`${styles.login} common_registration_styles`}
      onSubmit={handleSubmit}
    >
      <h1 className={styles.login_tittle}>Log in</h1>
      <div className={styles.user_name_box}>
        <label htmlFor="username">User name</label>
        <input
          className={`${styles.login_input} common_registration_inputs`}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="current_username"
        />
      </div>
      <div className={styles.password_box}>
        <label htmlFor="password">Password</label>
        <input
          className={`${styles.login_input} common_registration_inputs`}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current_password"
        />
      </div>
      <div className={styles.remember_box}>
        <div className={styles.radio_box}>
          <input
            className={`${styles.radio_btn}`}
            onClick={handleCheckRadioBtn}
            style={
              isCheckRadioBtn
                ? { background: `var(--highlight-color)` }
                : { background: "transparent" }
            }
            type="radio"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className={styles.rememberMe} htmlFor="rememberMe">
            Remember
          </label>
        </div>

        <a className={styles.forgot_pass} href="#">
          Forgot Password?
        </a>
      </div>
      <HeaderButton
        className={styles.reg_btn}
        width="76%"
        type="submit"
        btnText={"LOG IN"}
      />
    </form>
  );
};

export default LoginForm;
