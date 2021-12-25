import React from 'react'
import  { useState } from "react";
import { Link} from 'react-router-dom';
import '../contactUs/Contactus.css'

function ContactUs() {

let obj={fName:"",
lName:"",Email:"",Flag:"false"}

let logged=JSON.parse(localStorage.getItem("logged_user"))?JSON.parse(localStorage.getItem("logged_user")):obj;
// const [formErrors, setFormErrors] = useState({});

    const [formInfo, setFormInfo] = useState(
        
            logged  
    );
     
    const handleChange = (e, attr) => {
        setFormInfo({ ...formInfo, [attr]: e.target.value });
        console.log(formInfo);
      };



    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormInfo({ ...formInfo, [name]: value });
    //   };

    //   const validate = (values) => {
        
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if (!values.fName) {
    //       errors.fName = "First Name is required!";
    //     } else if (values.fName.length <= 2) {
    //       console.log("ha");
    //       errors.fName = "First Name is too short!";
    //     }
    //     if (!values.lName) {
    //       errors.lName = "Last Name is required!";
    //     } else if (values.lName.length <= 2) {
    //       errors.lName = "Last Name is too short!";
    //     }
    //     if (!values.email) {
    //       errors.email = "Email is required!";
    //     } else if (!regex.test(values.email)) {
    //       errors.email = "This is not a valid email format!";
    //     }}
    

     const checkConsults=(e)=>{

        // setFormErrors(validate(formInfo));
     
         e.preventDefault();

        let userInfo = {
            fName:formInfo.fName,
            lName:formInfo.lName,
            email:formInfo.email,
            Phone:formInfo.Phone,
            Date:formInfo.Date,
            message:formInfo.message
          };

   

          if (!localStorage.getItem("consults")) {
            let consults = [];
        consults.push(userInfo);
        localStorage.setItem("consults", JSON.stringify(consults));
        alert("Your request is submitted correctly and you will be contacted on the selected date");
        
     }
     else{
       const  consults=JSON.parse(localStorage.getItem("consults"))
      
     consults.push(userInfo);
     localStorage.setItem("consults", JSON.stringify(consults));
     alert("Your request is submitted correctly and you will be contacted on the selected date");
     
     }


    }
  
    return (
<>
<div className='contactWrapper'>

        <div className='contactForm'>
        <h2>Contact Us</h2>
        <p>Kindly fill the below information inorder to call you or <Link Link to="/Login"><span id="contSpan">Login</span></Link></p>
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
          {formInfo.fName.length<=2 && formInfo.fName.length>0?<small className='errorMessage1'>User name must be more than 2</small>:""}
         
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
           {formInfo.lName.length<=2 && formInfo.lName.length>0?<small className='errorMessage1'>User name must be more than 2</small>:""}
        
          
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
        </form> </div>
        <div className='contactDetails'>
<ul id="contactDetails">
 <a   href="#" class="fas fa-phone-alt">  +962798452640</a>
 <a  href="https://maps.google.com" targrt="_blank" class="fas fa-map-marker-alt">  Our location</a>
 <a href="https://www.google.com" target="_blank" class="fas fa-envelope">   Email</a>


</ul>

        </div></div>
        </>
    )
}

export default ContactUs

