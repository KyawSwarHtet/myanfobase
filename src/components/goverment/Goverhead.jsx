import React from "react";
import { Link } from "react-router-dom";
export default function Goverhead() {
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
            <h4>Government</h4>
          </Link>
        </div>
        <div className="travel-main">
          <h1>Government</h1>
        </div>
        <div className="button">
          <Link to="/ministry">
            <button className="tec">Ministry</button>
          </Link>
          <Link to="/police_station">
            <button className="tec">Police Station</button>
          </Link>
          <Link to="/leader">
            <button className="tec">Leader</button>
          </Link>
          <Link to="/passport">
            <button className="tec">Passport</button>
          </Link>
          <Link to="/law">
            <button className="tec">Law</button>
          </Link>
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
