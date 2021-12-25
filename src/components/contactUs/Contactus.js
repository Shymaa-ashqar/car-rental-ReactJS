import React from 'react'
import  { useState } from "react";
import { Link} from 'react-router-dom';
import '../contactUs/Contactus.css'

function ContactUs() {

let obj={fName:"",
lName:"",Email:""}

let logged=JSON.parse(localStorage.getItem("logged_user"))?JSON.parse(localStorage.getItem("logged_user")):obj;

    const [formInfo, setFormInfo] = useState(
        
            logged  
    );
     

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo({ ...formInfo, [name]: value });
      };


     const checkConsults=(e)=>{
     
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
            onChange={handleChange}
            name="fName"
            className="contactInput"
            type={"text"}
            id="firstName"
            placeholder="  First Name"
            required
          ></input> 
         
          <input
            name="lName"
            value={formInfo.lName}
            onChange={handleChange}
            className="contactInput"
            type={"text"}
            id="lastName"
            placeholder="  Last Name"
            required
          ></input>
        
          
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
            placeholder="+962"
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
            placeholder="Start typing"
            
          ></input>
         
          <button className="contactSubmit">Submit</button>
        </form> </div>
        <div className='contactDetails'>
<ul id="contactDetails">
 <a   href="#" class="fas fa-phone-alt">  +962798452640</a>
 <a  href="#"class="fas fa-map-marker-alt">  Our location</a>
 <a href="#"class="fas fa-envelope">  Email</a>


</ul>

        </div></div>
        </>
    )
}

export default ContactUs

