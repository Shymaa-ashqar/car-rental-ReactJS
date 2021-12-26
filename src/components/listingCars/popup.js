import React from "react";
import {useNavigate}  from "react-router-dom"
 import "./popup.css"
const Popup = props => {
const navigate = useNavigate()
    const handleSubmit = () => {
        console.log(props.test);
        let lclArr = JSON.parse(localStorage.getItem("reservations"));
        lclArr.push(props.test);
        localStorage.setItem("reservations", JSON.stringify(lclArr));
        navigate("/");
      };
  return (
    <div className="popup-box">
      <div className="box">
        <h3>Are you sure? </h3>
        <button  className = "finalBtn" onClick = {()=>props.setSubmitted(false)} >Cancel</button>
        <button  className = "finalBtn" onClick = {handleSubmit}>Yes, Explore More !</button>
      </div>
    </div>
  );
};
 
export default Popup;