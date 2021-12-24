import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [formGroup, setFormGrroup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  //   const [formErrors, setFormErrors] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     confPassword: "",
  //   });
  //   const [isSubmit, setisSubmit] = useState(false);

  const register = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };
  //   const errors = {};
  //   useEffect(() => {
  //     console.log(formErrors);
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //       console.log(formGroup);
  //     }
  //   }, [formErrors]);
  //   const validate = (e) => {
  //     alert("haneen");
  //     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //     if (!formGroup.firstName.length) {
  //       setFormErrors(...formErrors, (firstName = "First Name can't be blank "));
  //     } else if (formGroup.firstName.length <= 2) {
  //       setFormErrors(...formErrors, (firstName = "First Name is to short"));
  //     }
  //     if (!formGroup.lastName.length) {
  //       setFormErrors(...formErrors, (lastName = "Last Name can't be blank "));
  //     } else if (formGroup.lastName.length <= 2) {
  //       setFormErrors(...formErrors, (lastName = "LastName is to short"));
  //     }
  //     if (!formGroup.email) {
  //       setFormErrors(...formErrors, (email = "Email can't be blank "));
  //     } else if (!regex.test(formGroup.email)) {
  //       setFormErrors.email(
  //         ...(formErrors.email = "this Is not a valid format! ")
  //       );
  //     }
  //     if (!formGroup.password) {
  //       setFormErrors(...formErrors, (password = "Password can't be blank "));
  //     } else if (formGroup.password.length <= 8) {
  //       setFormErrors(
  //         ...formErrors,
  //         (password = "Password must be more than 8letters ")
  //       );
  //     }
  //     if (formGroup.password == !formGroup.confPassword) {
  //       setFormErrors(...formErrors, (confPassword = "password is not match"));
  //     }
  //     return errors;
  //   };

  const reg = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formGroup));
    // setisSubmit(true);
    let users = {
      fName: formGroup.firstName,
      lName: formGroup.lastName,
      password: formGroup.password,
      email: formGroup.email,
    };
    let arr = [];

    console.log(users);
    let flag = true;
    if (localStorage.length !== 0) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].fName === formGroup.firstName) {
          alert("username is exist please go To login Page");
          return (flag = false);
        }
      }
      if (flag === true) {
        arr.push(users);
        localStorage.setItem("users", JSON.stringify(arr));
        alert("Done...Go to login Page");
      }
    } else {
      arr.push(users);
      localStorage.setItem("users", JSON.stringify(arr));
    }
  };
  return (
    <section className="Register" id="Register">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui Message success">Signed in successful</div>:)} */}
      <div className="Register-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card2">
            <div className="card-header">
              <h3>Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={reg} id="form">
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
                    required
                  />
                </div>{" "}
                {/* <small className="errorMsg">{formErrors.firstName}</small> */}
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
                {/* <small className="errorMsg">{formErrors.lastName}</small> */}
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
                {/* <small className="errorMsg">{formErrors.email}</small> */}
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
                {/* <small className="errorMsg">{formErrors.password}</small> */}
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
