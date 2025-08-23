import React from "react";
import "./ui.css";
const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://leakscan-7jh8.onrender.com/auth/google";
  };

  return (
    <>
      <div id="container1">
        <div className="container2">
          <strong className="signinhd">
            Sign in with your valid
            <strong style={{ color: "rgb(29, 113, 187)" }}>
              {" "}
              "Email Id"
            </strong>{" "}
            to Continue !
          </strong>
          <button className="btnLogin" onClick={handleLogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
