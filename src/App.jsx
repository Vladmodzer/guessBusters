
import { Routes, Route } from "react-router-dom";



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
