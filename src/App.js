import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Listingcars from "./components/listingCars/Listingcars";
import BookingForm from "./components/listingCars/BookingForm";
import carsData from "./components/listingCars/carsData";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
import { useState } from "react";
function App() {
  const [cars_Data, setData] = useState(carsData);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
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
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
