import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
function Login({ setLogged, setSubmitted }) {
  const navigate = useNavigate();
  //   const [formErrors, setFormErrors] = useState({});
  const [formGroup, setFormGrroup] = useState({
    email: "",
    password: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };
  //   const errors = {};
  //   const validate = (values) => {
  //     console.log("hanee");

  //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //     if (!values.email) {
  //       errors.email = "Email is required!";
  //     } else if (!regex.test(values.email)) {
  //       errors.email = "This is not a valid email format!";
  //     }
  //     if (!values.password) {
  //       errors.password = "Password is required";
  //     } else if (values.password.length < 8) {
  //       errors.password = "Password must be more than 8 characters";
  //     }

  //     return errors;
  //   };

  const onSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formGroup));
    let index;
    let flag = true;
    let Userss = [];
    Userss = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < Userss.length; i++) {
      if (
        formGroup.email === Userss[i].email &&
        formGroup.password === Userss[i].password
      ) {
        index = i;
        localStorage.setItem("logged_user", JSON.stringify(Userss[index]));
        setLogged(true);
        setSubmitted(true);
        switch(sessionStorage.getItem("from")){
          case 'call': {navigate("/contactus"); break;}
          case 'listing' : {navigate("/listingcars"); break;}
          default: navigate("/")
        }

        return (flag = false);
      }
    }
    if (flag === true) {
      alert("your Password Or Email is not correct ");
      //   navigate("/SignUp");
    }
  };

  return (
    <div className="logIn">
      <div className="d-flex justify-content-center h-100">
        <div className="card1">
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={Change}
                />
              </div>
              {/* <small className="errorMsg">{formErrors.email}</small> */}
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  onChange={Change}
                />
              </div>
              {/* <small className="errorMsg">{formErrors.confPassword}</small> */}

              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <Link to="/Signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
