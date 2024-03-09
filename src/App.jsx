
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage.jsx";
import Registration from "./pages/registration-page/Registration.jsx";
import "./App.css";
import Rules from "./components/rules/Rules.jsx";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="rules" element={< Rules/>}/>
      </Routes>

  );
}

export default App;
