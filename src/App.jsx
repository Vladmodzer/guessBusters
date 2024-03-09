import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage.jsx";
import Registration from "./pages/registration-page/Registration.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="registration" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
