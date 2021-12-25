import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../contactUs/Contactus.css";

function ContactUs() {
  let obj = { fName: "", lName: "", Email: "" };

  let logged = JSON.parse(localStorage.getItem("logged_user"))
    ? JSON.parse(localStorage.getItem("logged_user"))
    : obj;

  const [formInfo, setFormInfo] = useState(logged);
  const handleChange = (e, attr) => {
    setFormInfo({ ...formInfo, [attr]: e.target.value });
  };
  const checkConsults = (e) => {
    e.preventDefault();

    let userInfo = {
      fName: formInfo.fName,
      lName: formInfo.lName,
      email: formInfo.email,
      Phone: formInfo.Phone,
      Date: formInfo.Date,
      message: formInfo.message,
    };

    if (localStorage.getItem("consults")) {
      if (formInfo.fName.length > 4 && formInfo.lName.length > 4) {
        console.log(formInfo.fName);
        let consults = JSON.parse(localStorage.getItem("consults"));
        consults.push(userInfo);
        localStorage.setItem("consults", JSON.stringify(consults));
        alert(
          "Your request is submitted correctly and you will be contacted on the selected date"
        );
      } else {
        alert("wrong");
      }
    } else {
      const consults = [];
      consults.push(userInfo);
      localStorage.setItem("consults", JSON.stringify(consults));
    }
  };

  return (
    <>
      <div className="contactWrapper">
        <div className="contactForm">
          <h2>Contact Us</h2>
          <p>
            Kindly fill the below information inorder to call you or{" "}
            <Link Link to="/Login">
              <span id="contSpan">Login</span>
            </Link>
          </p>
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
                User name must be more than 2
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
                User name must be more than 2
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
            ></input>

            <input
              name="Date"
              value={formInfo.Date}
              onChange={handleChange}
              className="contactInput"
              type={"date"}
              id="Date"
              placeholder="Date"
              required
            ></input>

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
        <div className="contactDetails">
          <ul id="contactDetails">
            <a href="#" class="fas fa-phone-alt">
              {" "}
              +962798452640
            </a>
            <a
              href="https://maps.google.com"
              targrt="_blank"
              class="fas fa-map-marker-alt"
            >
              {" "}
              Our location
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              class="fas fa-envelope"
            >
              {" "}
              Email
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
