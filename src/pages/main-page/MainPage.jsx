import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { setProps } from '../../redux/actions.js';
import "./MainPage.css";

function MainPage() {
  // const dispatch = useDispatch();
  
  // // Function that sends data to Redux storage
  // const sendPropsToRedux = () => {
  //   const propsToSend = {  };
  //   dispatch(setProps(propsToSend));
  // };

  return (
    <div className="main-wrapper">
      <p> MainPage</p>
      <Link to={"registration"}>to the registration</Link>
      <p>link</p>
      <Link to={"rules"}>to the rule</Link>
    </div>
  );
}

export default MainPage;
