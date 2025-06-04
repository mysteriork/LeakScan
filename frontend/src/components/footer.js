import React from "react";
import imgone from "./images/google.png";
import imgtwo from "./images/linkedin.png";
import imgthree from "./images/github.png";
import imgseven from "./images/gmail.png";
import imgsix from "./images/discord.png";
import "./ui.css";

function Footer() {
  return (
    <div className="footdiv">
      <section className="footersection container">
        <footer className="footer1 flex">
          <article className="article1 flex">
            <h3>Everything you can imagine is real</h3>
            <label className="footp">
              FindYourBreach is an open-source project built to help users
              identify if their personal information has been exposed in known
              data breaches. We prioritize privacy and never store any sensitive
              data.
              <br />{" "}
              <h4>
                || © 2025 FindYourBreach. All rights reserved. | Built with 🛠️
                by Rachit Kumar
              </h4>
            </label>
          </article>
          <article className="article2">
            <ul>
              <li>contact : (+91)9358974425</li>
              <li>email : callmerachit145@gmail.com</li>
            </ul>
          </article>
        </footer>
        <footer className="subfooter">
          <section className="secone flex">
            <div2>
              <img src={imgone} alt="/" />
            </div2>
            <div2>
              <a href="https://github.com/mysteriork" className="a1">
                <img src={imgthree} alt="/" />
              </a>
            </div2>
            <div2>
              <a href="https://www.linkedin.com/in/rachit-rk/" className="a2">
                {" "}
                <img src={imgtwo} alt="/" />
              </a>
            </div2>
          </section>
          <section className="sectwo flex">
            <div2>
              <img src={imgsix} alt="/" />
            </div2>
            <div2>
              <img src={imgseven} alt="/" />
            </div2>
          </section>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
