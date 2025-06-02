import React from "react";
import { Link } from "react-router-dom";
import "./ui.css";
import img from "./images/logo1.png"

function Nav() {
  return (
    <div className="navbarr ">
      <nav className="navbar1 flex container1">
        <a href="/" className="imagesection">
          <img src={img} className="nav-img" alt="logo" />
        </a>
        <section className="section">
          <ul1 className="nav-ul flex">
            <Link className="linkss" to={"/home"}>
              Home
            </Link>
            <Link className="linkss">Help</Link>
            <Link className="bttn1" to={"/"}>
              Sign in
            </Link>
          </ul1>
        </section>
      </nav>
    </div>
  );
}

export default Nav;
