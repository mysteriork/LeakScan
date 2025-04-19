import React, { useState } from "react";
import axios from "axios";
import "./ui.css";
import hmimg from "./images/home1.png";

function Ui() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const checkBreach = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5500/breach/check/${input}`
      );

      setResult(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error checking breach", error);
    }
    setLoading(false);
  };

  return (
    <div id="container">
      <h2 id="hd1">Check if Your Email Was Breached</h2>
      <input
        className="inp1"
        type="text"
        placeholder="Enter Email, Domain, Username here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="btn1" onClick={checkBreach}>
        Check
      </button>

      {loading && (
        <div>
          {/* <p
            style={{
              marginLeft: "33px",
              marginTop: "31px",
              fontSize: "larger",
              color: "white",
            }}
          >
            loading data...
          </p> */}
          <div className="circle1" style={{ margin: "34px 0 0 94px" }}>
            <div className="circle"></div>
          </div>
        </div>
      )}

      {result && result.breaches && (
        <div className="divTop">
          <h4
            style={{
              color: "darkblue",
              fontFamily: "cursive",
              marginLeft: "40px",
            }}
          >
            Your account was breached,
            <strong style={{ color: "red", backgroundColor: "black" }}>
              Be ALERT !!!
            </strong>
          </h4>

          {result.breaches.sources.length > 0 ? (
            <div
              className="dataTable1"
              style={{ height: result.breaches ? "500px" : "100px" }}
            >
              <div className="dataTable">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <strong>Place</strong>
                      </th>
                      <th>
                        <strong>Date/Year</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breaches.sources.map((b, index) => (
                      <tr key={index}>
                        <td>{b.name}</td>
                        <td>{b.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p>no data found</p>
          )}
        </div>
      )}

      <div className="homeimg1">
        <img src={hmimg} alt="home image" className="homeimg" />
      </div>
    </div>
  );
}

export default Ui;
