import React from "react";
import {useNavigate}  from "react-router-dom"
 import "./popup1.css"
const Popup1 = props => {
const navigate = useNavigate()

  return (
    <div className="popup-box">
      <div className="box">
        <h3>Thank you, our team will be happy to contact you!</h3>
        <button  className = "finalBtn" onClick = {()=>navigate('/')}>Explore Cars</button>
      </div>
    </div>
  );
};
 
export default Popup1;