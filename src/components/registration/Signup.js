import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup({ setSubmitted }) {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [Isvalidate, setIsvalidate] = useState(false);
  //   console.log(isSubmit);
  const [formGroup, setFormGrroup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const register = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };
  //   useEffect(() => {
  //     console.log(formErrors);
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //       console.log(formGroup);
  //     }
  //   }, [formErrors]);
  let isValidate;
  const validate =   (e, values) => {
    e.preventDefault();
    console.log("hanee");
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.firstName.length <= 2) {
      errors.firstName = "First Name is too short!";
    }
    if (values.lastName.length <= 2) {
      errors.lastName = "Last Name is too short!";
    }
    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (values.confPassword !== values.password) {
      errors.confPassword = "Password is not match";
    } else if (
      values.firstName.length > 2 &&
      values.lastName.length > 2 &&
      regex.test(values.email) &&
      values.password.length > 8 &&
      values.confPassword === values.password
    ) {
      isValidate=true
       reg(e,errors);
    }

  };

  const reg = (e,errors) => {
    e.preventDefault();
    setFormErrors(errors);
    let users = {
      fName: formGroup.firstName,
      lName: formGroup.lastName,
      password: formGroup.password,
      email: formGroup.email,
    };
    let arr = [];

    console.log(users);
    let flag = true;
    if (localStorage.getItem("users")) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === formGroup.email) {
          alert("account is exist please go To login Page");
          navigate("/Login");

          return (flag = false);
        }
      }
      if (flag === true && isValidate === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        // setIsSubmit(!isSubmit);
        setSubmitted(true);
        navigate("/");
      }
    } else if (isValidate === true) {
      arr.push(users);
      //   setIsSubmit(!isSubmit);
      localStorage.setItem("users", JSON.stringify(arr));
      navigate("/")
    }
  };
  return (
    <section className="Register" id="Register">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formGroup, undefined, 2)}</pre>
      )} */}
      <div className="Register-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card2">
            <div className="card-header">
              <h3>Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={(e)=>validate(e,formGroup)} id="form">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={formGroup.firstName}
                    onChange={register}
                  />

                  {/* {isSubmit == true &&
                  formGroup.firstName.length >= 2 ? null : (
                    <small className="errorMsg">
                      "the userName must be more than 2"
                    </small>
                  )} */}
                </div>{" "}
                <small className="errorMsg">{formErrors.firstName}</small>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={formGroup.lastName}
                    onChange={register}
                    required
                  />
                </div>{" "}
                <small className="errorMsg">{formErrors.lastName}</small>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i class="far fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    id="userEmail"
                    type="email"
                    required
                    className="form-control"
                    placeholder="Email"
                    value={formGroup.email}
                    name="email"
                    onChange={register}
                  />{" "}
                </div>
                <small className="errorMsg">{formErrors.email}</small>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    id="userPassword"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value={formGroup.password}
                    onChange={register}
                    required
                    // pattern="^[A-Za-z0-9]{9,16}$"
                  />{" "}
                </div>{" "}
                <small className="errorMsg">{formErrors.password}</small>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    id="userRePassword"
                    type="password"
                    className="form-control"
                    placeholder="Repet Password"
                    name="confPassword"
                    value={formGroup.confPassword}
                    onChange={register}
                    required
                  />{" "}
                </div>
                <small className="errorMsg">{formErrors.confPassword}</small>
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
                Already have an account?<Link to="/Login"> Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
