import React from "react";
import { Link } from "react-router-dom";
export default function Histhead() {
  return (
    <>
      <section className="container travel">
        <div className="top">
          <Link to="/" className="link1">
            <h4>Home</h4>
          </Link>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <Link to="/" className="link1">
            <h4>History</h4>
          </Link>
        </div>
        <div className="travel-main">
          <h1>History</h1>
        </div>
        <div className="button">
          <button className="tec">Culture</button>
          <button className="tec">Dynasty</button>
          <button className="tec">Religion</button>
          <button className="tec">Dress Code</button>
          <button className="tec">Region & State</button>
        </div>
        <div className="para">
          <p>
            We've reviewed our advice for Myanmar. We continue to advise you 'do
            not travel' to Myanmar due to ongoing civil unrest and armed
            conflict. If it's safe to do so, leave Myanmar via commercial
            airline. Remain aware of the security environment at all times.
          </p>
        </div>
      </section>
    </>
  );
}
