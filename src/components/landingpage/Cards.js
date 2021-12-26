import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ src, title, des }) => {
  return (
    <div className="cars-cards">
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={src} alt="Card one" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <Link to="/listingcars" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
