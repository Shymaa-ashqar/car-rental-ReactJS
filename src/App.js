import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/Contactus";
import Listingcars from "./components/listingCars/Listingcars";
import BookingForm from "./components/listingCars/BookingForm";
import carsData from "./components/listingCars/carsData";
import Signup from "./components/registration/Signup";
import Login from "./components/registration/Login";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
import { useState } from "react";
function App() {
  const [logged, setLogged] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cars_Data, setData] = useState(carsData);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/listingcars" element={<Listingcars />} />
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} /> */}
          <Route
            path="/listingcars"
            element={<Listingcars cars={cars_Data} />}
          />
          <Route
            path="/bookingForm/:id"
            element={<BookingForm cars={cars_Data} />}
          />
          <Route path="/Login" element={<Login setLogged={setLogged} />} />
          <Route
            path="/signup"
            element={<Signup setSubmitted={setSubmitted} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
