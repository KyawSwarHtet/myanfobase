import React from "react";
import { Link } from "react-router-dom";

export default function Entermentheader() {
  return (
    <>
      <section className="container travel">
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
          <h4>Entertainment</h4>
        </div>
        <div className="sectop">
          <h1>ENTERTAINMENT</h1>
        </div>
        <div className="Catabutton">
          <button className="tec">Korean</button>
          <button className="tec">Movie</button>
          <button className="tec">Inrenational</button>
          <button className="tec">Cinema</button>
          <button className="tec">Music</button>
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
}
