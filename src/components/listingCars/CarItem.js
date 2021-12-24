import React from "react";
import "./ListingCars.css";
import { useNavigate } from "react-router-dom";

function CarItem(props) {
  let navigate = useNavigate();

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
              navigate(`/bookingForm/${props.carsData.id}`);
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
