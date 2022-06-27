import React from "react";
import "./theader.css";
const Theader = () => {
  return (
    <>
      <section className="container travel">
        <div className="travel-top">
          <h4>Home</h4>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <h4>Travel</h4>
        </div>
        <div className="travel-main">
          <h1>Travel</h1>
        </div>
        <div className="button">
          <button className="tec">Pagoda</button>
          <button className="tec">Beach</button>
          <button className="tec">Waterfall</button>
          <button className="tec">Mountains</button>
          <button className="tec">Advanture trip</button>
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
};

export default Theader;
