import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";
import data3 from "./Data3";
import data32 from "./Data32";
import Ourteam from "./Ourteam";
const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-about-section">
        <div className="aboutus-img">
          <img src="./aboutimg.jpg" alt="car" />
        </div>
        <div className="aboutus-text">
          <h1>The Leading Rental Marketplace</h1>
          <p>
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. legentis
            in iis qui facit eorum claritatem. Investigationes demonstraverunt
            lectores legere me lius quod ii legunt saepius.
          </p>
          <Link to="/listingcars">
            <button>Discover More</button>
          </Link>
        </div>
      </div>
      <div className="ourteam">
        <h3 className="ourteam-title">OUR TEAM</h3>
        <div className="ourteam-body">
          {data3.map((item, id) => (
            <Ourteam
              src={item.src}
              name={item.name}
              key={id}
              position={item.position}
            />
          ))}
        </div>
        <div className="ourteam-body2">
          {data32.map((item, id) => (
            <Ourteam
              src={item.src}
              name={item.name}
              key={id}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
