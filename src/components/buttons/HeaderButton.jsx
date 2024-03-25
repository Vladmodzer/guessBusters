import styles from "./HeaderButton.module.css";

function HeaderButton({ btnText,width,setHeaderBtn, isHeaderBtn}) {
  const handleHeaderBtn = () => {
    setHeaderBtn(!isHeaderBtn);
    console.log("sigh up close");
    console.log(isHeaderBtn);
  };
  return <button
  onClick={handleHeaderBtn}
   className={`${styles.header_button}`}
   style={{ width: width }}
   >
    {btnText}</button>;
}

export default HeaderButton;
