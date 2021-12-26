import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Header({ submitted, setSubmitted, logged, setLogged }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-nav">
        <Link to="/">
          <img src="/car-rent-logo.png" alt="logo" />
        </Link>
        <button className="burger-menu" onClick={() => setShowNav(!showNav)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="nav-options">
        <ul id={showNav ? "hidden" : null}>
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            {" "}
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            {" "}
            <Link to="/listingcars">LISTING CARS</Link>
          </li>
          <li>
            {" "}
            <Link to="/contactus">CONTACT US</Link>
          </li>
        </ul>
      </div>

      <div className="register-btn">
        <ul id={showNav ? "hiddenbtn" : null}>
          <li>
            {!logged && (
              <Link to="/login">
                <button  className="login-btn-header">Login</button>
              </Link>
            )}
          </li>
          <li>
            {logged ? (
              <Link to="/login">
                <button
                  className="logout-btn-header"
                  onClick={() => {
                    localStorage.removeItem("logged_user");
                    setLogged(localStorage.getItem("logged_user"));
                    setSubmitted(localStorage.getItem("logged_user"));
                    sessionStorage.removeItem("from");
                  }}
                >
                  Logout
                </button>
              </Link>
            ) : null}
          </li>
          <li>
            {!logged && (
              <Link to="/signup">
                {" "}
                <button className="signup-btn-header">Signup</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
