import React from "react";
import "./ListingCars.css";
import { useNavigate } from "react-router-dom";

function CarItem(props) {
  let navigate = useNavigate();
  let logged = localStorage.getItem("logged_user");
  return (
    <div className="car-item">
      <div className="car-container">
        <div className="img">
          <img src={props.carsData.src} />
        </div>
        <div className="text">
          <h3>
            {props.carsData.name} {props.carsData.model}
          </h3>
          <p className="price">
            <span>{props.carsData.price}$</span> /Day
          </p>
          <button
            className="btn"
            onClick={() => {
              logged
                ? navigate(`/bookingForm/${props.carsData.id}`)
                : sessionStorage.setItem("from", "listing") ||
                  navigate("/Login");
            }}
          >
            Book Now
          </button>
          <div className="info">
            <i className="fas fa-caret-right "></i>
            <span> 2 Seats</span>
            <i className="fas fa-caret-right "></i>
            <span> 2 Bags</span>
            <i className="fas fa-caret-right "></i>
            <span> Airbags</span>
            <i className="fas fa-caret-right"></i>
            <span> Manual/Auto</span>
            <i className="fas fa-caret-right "></i>
            <span> AC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
