import React from "react";
import { Link } from "react-router-dom";

export default function Computer() {
  return (
    <section className="technology">
      <div className="top">
        <Link to="/" className="link1">
          <h4>Home</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <Link to="/technology" className="link1">
          <h4>Technology</h4>
        </Link>
        <div className="icon">
          <i className="uil uil-angle-right-b"></i>
        </div>
        <h4>Computer</h4>
      </div>
      <div className="sectop">
        <h1>Computer</h1>
      </div>
      <div className="Catabutton">
        <button className="tec">Computer</button>
        <button className="tec">Electronics</button>
        <button className="tec">Innovation</button>
        <button className="tec">Smartphone</button>
        <button className="tec">Software</button>
      </div>
      {/* <div className="para">
        
      </div> */}
    </section>
  );
}
