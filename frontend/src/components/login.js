import React from "react";
import "./ui.css";
import lglogo from "./images/home.png";
const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5500/auth/google";
  };

  return (
    <>
      <div id="container1">
        <div className="lgimg1">
          <img src={lglogo} alt="loginimage" className="lgimg" />
        </div>
        <div className="container2">
          <h2
            style={{
              color: "white",
              fontFamily: "fantasy",
              fontSize: "x-large",
            }}
          >
            Sign in with your valid{" "}
            <strong style={{ color: "yellow" }}>"Email Id"</strong> to Continue
            !
          </h2>
          <button className="btnLogin" onClick={handleLogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
