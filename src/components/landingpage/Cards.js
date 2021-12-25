import React from "react";
import { Link } from "react-router-dom";
const Cards = ({ src, title, des }) => {
  return (
    <div>
      <div class="card" style={{ width: "20rem" }}>
        <img class="card-img-top" src={src} alt="Card one" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{des}</p>
          <Link to="/" class="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
