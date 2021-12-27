import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <img src="./logo-footer.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod
            tempor incididunt ut labore.
          </p>
          <Link to="/signup">
            <button className="footer-signup-btn">Start With Us</button>
          </Link>
        </div>
        <div className="contactus-footer">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone-alt" />
            +962777685048
          </p>
          <p>
            <i className="fas fa-envelope" /> carrent@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />
            Jordan, Amman
          </p>
        </div>
        <div className="footer-top-right">
          <h3>Explore</h3>
          <Link to="/">
            <button>Explore More</button>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-footer">
          {/* <h3>Follow Us</h3> */}
          <ul>
            <Link to="//www.facebook.com" target="_blank">
              <i className="social fa-brands fa-facebook"></i>
            </Link>
            <Link to="//www.instagram.com/" target="_blank">
              <i className="social fa-brands fa-instagram"></i>
            </Link>
            <Link to="//twitter.com/" target="_blank">
              <i className="social fa-brands fa-twitter"></i>
            </Link>
          </ul>
        </div>
        <div className="copyright-footer">
          <p>&copy; 2022 Car-Rent . All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
