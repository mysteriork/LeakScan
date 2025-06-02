import React, { useState } from "react";
import axios from "axios";
import "./ui.css";

function Ui() {
  const [input, setInput] = useState("");
  const [noData, setNoData] = useState(false);
  const [result, setResult] = useState([]);

  const checkBreach = async () => {
    try {
      const response = await axios.get(
        `https://leakscan.onrender.com/breach/check/${input}`
      );
    

      const data = response.data;
      setResult(response.data);

      if (
        !data.breaches ||
        !data.breaches.sources ||
        data.breaches.sources.length === 0
      ) {
        setNoData(true);
      } else {
        setNoData(false); // reset
      }

      console.log(response);
      console.log(result);
    } catch (error) {
      console.error("Error checking breach", error);
      setNoData(true);
    }
    setInput(" ")
  };

  return (
    <div id="container">
      <section
        className="main container1 flex"
        style={{ height: result.breaches ? "220vh" : "170vh" }}
      >
        <div className="hero">
          <h1>Check if Your Email Was Breached</h1>
          <section className="hero1 flex">
            <input
              className="inp1"
              type="text"
              placeholder="enter Email, Domain, Username here ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button className="btn1" onClick={checkBreach}>
              Check
            </button>
          </section>
        </div>
        <div className="hero2 flex">
          <h2>Find - Your - Breach</h2>
          <section className="loading flex">
            <p>
              'LeakScan' is a privacy-focused web application that allows
              users to check whether their personal data — such as{" "}
              <strong style={{ color: "yellow" }}>
                email addresses or social media usernames
              </strong>
              —has been exposed in known data breaches ? The platform connects
              securely with third-party APIs to scan breach databases and alert
              users in real time. FindYourBreach empowers individuals to take
              control of their digital footprint.
            </p>
          </section>
          {noData === true && (
            <strong className="positive">YAY , no breach found ! </strong>
          )}

          <section className="content">
            <hr />
            {result && result.breaches && (
              <div className="divTop">
                <strong
                  style={{
                    color: "red",
                    fontSize: "2rem",
                    fontFamily: "fantasy",
                  }}
                >
                  Oh no ,{" "}
                </strong>
                <strong className="breach"> Breaches found !!!</strong>

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
                              <strong style={{ color: "rgb(233, 51, 121)" }}>
                                Place
                              </strong>
                            </th>
                            <th>
                              <strong style={{ color: "rgb(233, 51, 121)" }}>
                                Year/Date
                              </strong>
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
                  <strong className="positive">YAY , no breach found ! </strong>
                )}
              </div>
            )}
          </section>
        </div>
       
      </section>
    </div>
  );
}

export default Ui;
