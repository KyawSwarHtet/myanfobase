import React from "react";

export default function Goverhead() {
  return (
    <>
      <section className="container travel">
        <div className="travel-top">
          <h4>Home</h4>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <h4>Goverment</h4>
        </div>
        <div className="travel-main">
          <h1>Goverment</h1>
        </div>
        <div className="button">
          <button className="tec">Ministry</button>
          <button className="tec">Police Station</button>
          <button className="tec">Electric-Station</button>
          <button className="tec">Passport</button>
          <button className="tec">SomeOne</button>
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
