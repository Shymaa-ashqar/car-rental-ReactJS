import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popup1 from "./popup1";
import "../contactUs/Contactus.css";

function ContactUs() {
  let obj = { fName: "", lName: "", Email: "" };

  let logged = JSON.parse(localStorage.getItem("logged_user"))
    ? JSON.parse(localStorage.getItem("logged_user"))
    : obj;

  const [submitted, setSubmitted] = useState(false);
  const [formInfo, setFormInfo] = useState(logged);
  const handleChange = (e, attr) => {
    setFormInfo({ ...formInfo, [attr]: e.target.value });
  };

  //********** Handle Date ********/
  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  let [thisDay, setThisDay] = useState(valueCut1);

  const handleDateChange = (e) => {
    setThisDay(e.target.value);
  };

  const checkConsults = (e) => {
    e.preventDefault();

    let userInfo = {
      fName: formInfo.fName,
      lName: formInfo.lName,
      email: formInfo.email,
      Phone: formInfo.Phone,
      Date: thisDay,
      message: formInfo.message,
    };

    if (localStorage.getItem("consults")) {
      if (formInfo.fName.length > 4 && formInfo.lName.length > 4) {
        let consults = JSON.parse(localStorage.getItem("consults"));
        consults.push(userInfo);
        localStorage.setItem("consults", JSON.stringify(consults));
        setSubmitted(true);
      } else {
        alert("wrong");
      }
    } else {
      const consults = [];
      consults.push(userInfo);
      localStorage.setItem("consults", JSON.stringify(consults));
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="contactWrapper">
        <div className="contactDetails">
          <h3>Don't Hesitate to connect with us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <ul id="contactDetails">
            <Link to="#" className="fas fa-phone-alt">
              {" "}
              +962798452640
            </Link>
            <Link
              to="https://maps.google.com"
              targrt="_blank"
              className="fas fa-map-marker-alt"
            >
              {" "}
              Our location
            </Link>
            <Link
              to="https://www.google.com"
              target="_blank"
              className="fas fa-envelope"
            >
              {" "}
              Email
            </Link>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Contact Us</h2>
          {!localStorage.getItem("logged_user") && (
            <p>
              Kindly fill the below information inorder to call you or{" "}
              <Link
                onClick={() => {
                  sessionStorage.setItem("from", "call");
                }}
                to="/Login"
              >
                <span id="contSpan">Login</span>
              </Link>
            </p>
          )}
          <form onSubmit={checkConsults}>
            <input
              value={formInfo.fName}
              onChange={(e) => {
                handleChange(e, "fName");
              }}
              name="fName"
              className="contactInput"
              type={"text"}
              id="firstName"
              placeholder="  First Name"
              required
            ></input>
            {formInfo.fName.length <= 4 && formInfo.fName.length > 0 ? (
              <small className="errorMessage1">
                User name must be more than 4
              </small>
            ) : (
              ""
            )}

            <input
              name="lName"
              value={formInfo.lName}
              onChange={(e) => {
                handleChange(e, "lName");
              }}
              className="contactInput"
              type={"text"}
              id="lastName"
              placeholder="  Last Name"
              required
            ></input>
            {formInfo.lName.length <= 4 && formInfo.lName.length > 0 ? (
              <small className="errorMessage1">
                User name must be more than 4
              </small>
            ) : (
              ""
            )}

            <input
              name="email"
              value={formInfo.email}
              onChange={handleChange}
              className="contactInput"
              type={"email"}
              id="Email"
              placeholder="  example@123.com"
              required
            ></input>

            <input
              name="Phone"
              value={formInfo.Phone}
              onChange={handleChange}
              className="contactInput"
              type={"telephone"}
              id="Phone"
              placeholder="Enter your mobile number"
              required
            />

            <input
              name="Date"
              onChange={(e) => handleDateChange(e)}
              value={formInfo.Date}
              className="contactInput"
              type={"date"}
              min={valueCut1}
              value={thisDay}
              id="Date"
              placeholder="Date"
              required
            />

            <input
              name="message"
              value={formInfo.message}
              onChange={handleChange}
              className="contactInput"
              type={"text"}
              id="message"
              placeholder="Type your message"
            ></input>

            <button className="contactSubmit">Submit</button>
          </form>{" "}
        </div>
      </div>
      {submitted && <Popup1 />}
    </>
  );
}

export default ContactUs;
