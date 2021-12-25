import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import data from "./Data";
import data2 from "./Data2";
import Cards from "./Cards";
import Testimonials from "./Testimonials";

const Landingpage = () => {
  return (
    <div>
      <div className="ladingpage-slider">
        <div className="ladingpage-slider-container-btn">
          <p>Make Your Life Easy</p>
          <Link to="/">
            <button>RENT NOW</button>
          </Link>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner  ">
            <div class="carousel-item active" data-interval="500">
              <img class="d-block w-100  " src="./car1.jpg" alt="car one" />
            </div>
            <div class="carousel-item" data-interval="500">
              <img class="d-block w-100" src="./car2.jpg" alt="car two" />
            </div>
            <div class="carousel-item" data-interval="500">
              <img class="d-block w-100" src="./car3.jpg" alt="car three" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="landingpage-explore">
        <h3>EXPLORE OUR CARS</h3>
        <div className="landingpage-explore-cars">
          {data.map((item, id) => (
            <Cards src={item.src} des={item.des} key={id} title={item.title} />
          ))}
        </div>
      </div>
      <div className="landingpage-about">
        <div className="landingpage-about-img">
          <img src="./car3.jpg" alt="car" />
        </div>
        <div className="landingpage-about-text">
          <h3>About Premium Rent A Car</h3>
          <p>
            The Mercedes-Benz Cars range covers every passenger car segment:
            from the urban microcar by smart, to the exclusive product range by
            Mercedes-Benz and Mercedes-Maybach, to the performance and sports
            cars by Mercedes-AMG. With Mercedes-EQ, Mercedes-Benz Cars is
            driving forward the systematic development of alternative drives:
            the aim is to electrify the entire portfolio by 2022.
          </p>
        </div>
      </div>
      <div className="landingpage-Testimonials">
        <h3>Our Testimonials</h3>
        <div className="landingpage-Testimonials-cards">
          {data2.map((item, id) => (
            <Testimonials
              src={item.src}
              des={item.des}
              key={id}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
