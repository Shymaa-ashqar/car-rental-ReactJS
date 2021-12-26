import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="contactus-footer">
        <h3>Contact Us</h3>
        <p>Mobile: +962777685048</p>
        <p>Email: carrent@gmail.com</p>
      </div>
      <div className="social-footer">
        <h3>Follow Us</h3>
        <ul>
          <Link to="#">
            <i className="social fa-brands fa-facebook"></i>
          </Link>
          <Link to="#">
            <i className="social fa-brands fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="social fa-brands fa-twitter"></i>
          </Link>
        </ul>
      </div>
      <div className="copyright-footer">
        <p>&copy; 2022 Car-Rent . All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
