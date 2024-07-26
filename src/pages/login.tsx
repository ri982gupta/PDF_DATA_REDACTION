import { useState } from "react";
import { Icon } from "@blueprintjs/core";
import loginStyles from "./login.module.scss";
import { useNavigate, Route, Routes } from "react-router-dom";
import Link from '@mui/material/Link';
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {

  const [action, setAction] = useState("Login");
  const [loading, setLoading] = useState(false);  // New loading state
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitL = async () => {
    try {
      setLoading(true); // Set loading to true on button click
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        formData
      );
      console.log(response.data)
      if (response.data.success) {
        sessionStorage.setItem('userData', JSON.stringify(response.data.user));
        Swal.fire("login successfull");
        navigate("/dashboard",{ state: {name:response.data.user[1]} });
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false); // Set loading to false after request completes (success or failure)
    }
  };

  const handleSubmitR = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        formData
      );
      setFormData({
        email: "",
        name: "",
        password: "",
      });
      setAction("Login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <>

      <div className={loginStyles.loginPage}>
        <div className={loginStyles.container}>
          <div className={loginStyles.header}>
            <div className={loginStyles.text}>{action}</div>
            <div className={loginStyles.underline}></div>
          </div>
          <div className={loginStyles.inputs}>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className={"input"}>
                <Icon icon="at" size={23} className={loginStyles.icon} />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="input">
              <Icon size={23} icon="user" className={loginStyles.icon} />
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <Icon size={23} icon="key" className={loginStyles.icon} />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
         
          <div className="submit-container">
        {loading ? ( // Display loading UI if loading is true
          <div className="loader" >
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        ) : (
          action === "Login" ? (
            <>
              <button
                className={action === "Login" ? "submit gray" : "submit"}
                onClick={handleSubmitL}
              >Login</button>
              <Link
                style={{ color: "white" }}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Don't have an account? register here
              </Link>
            </>
          ) : (
            <>
              <button
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={handleSubmitR}
              >Sign Up</button>
              <Link
                style={{ color: "white" }}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Already have an account, login here
              </Link>
            </>
          )
        )}
      </div>
        </div>
      </div>
    </>
  );
};

export default Login;







