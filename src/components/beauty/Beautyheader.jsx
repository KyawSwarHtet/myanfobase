import React from "react";
import "../technology/technology.css";
import { Link } from "react-router-dom";

const Beautyheader = () => {
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
          <h4>Beauty</h4>
        </div>
        <div className="sectop">
          <h1>BEAUTY</h1>
        </div>
        <div className="Catabutton">
          <button className="tec">Make-up</button>
          <button className="tec">Beauty Blogger</button>
          <button className="tec">Skin care</button>
          <button className="tec">Beauty clinic</button>
          <button className="tec">Natural</button>
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

export default Beautyheader;
