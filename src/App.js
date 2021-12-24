import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/Contactus";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Landingpage />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/listingcars" element={<Listingcars />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
