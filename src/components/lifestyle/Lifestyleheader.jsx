import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";
const Lifestyleheader = () => {
  return (
    <>
      <section className="technology container">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="homelink1">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          {/* <h4>Home</h4> */}
          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          {/* <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul> */}
          <h4>Lifestyle</h4>
        </div>
        <div className="sectop">
          <h1>LIFESTYLE</h1>
        </div>
        <div className="Catabutton">
          <button className="tec">Exercise</button>
          <button className="tec">Healthy Life</button>
          <button className="tec">Luxury</button>
          <button className="tec">Family</button>
          <button className="tec">Modern</button>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>
    </>
  );
};

export default Lifestyleheader;
