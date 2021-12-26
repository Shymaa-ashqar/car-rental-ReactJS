import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
function Login({ setLogged, setSubmitted }) {
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
        index = i;
        localStorage.setItem("logged_user", JSON.stringify(Userss[index]));
        setLogged(localStorage.getItem("logged_user"));
        setSubmitted(localStorage.getItem("logged_user"));
        switch (sessionStorage.getItem("from")) {
          case "call": {
            navigate("/contactus");
            break;
          }
          case "listing": {
            navigate("/listingcars");
            break;
          }
          default:
            navigate("/");
        }

        return (flag = false);
      }
    }
    if (flag === true) {
      alert("your Password Or Email is not correct ");
    }
  };

  return (
    <div className="logIn">
      <div className="d-flex justify-content-center h-100">
        <div className="card1">
          <div className="card-body">
            <h3>Sign In</h3>
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
              <div className="reg">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="login-btn float-right login_btn2"
                  />
                </div>
                <div className="card-footer2">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/Signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
