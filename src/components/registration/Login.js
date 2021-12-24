import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [formGroup, setFormGrroup] = useState({
    email: "",
    password: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let index;
    let flag = true;
    let Userss = [];
    Userss = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < Userss.length; i++) {
      if (
        formGroup.email === Userss[i].email &&
        formGroup.password === Userss[i].password
      ) {
        alert("Thank You ...You Can Go ");
        index = i;
        localStorage.setItem("logged_user", JSON.stringify(Userss[index]));

        navigate("/");

        return (flag = false);
      }
    }
    if (flag === true) {
      alert("you Need to sign up ");
      navigate("/SignUp");
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
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
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
