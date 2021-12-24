import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/registration/Signup";
import Login from "./components/registration/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Landingpage />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/listingcars" element={<Listingcars />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          cd
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
