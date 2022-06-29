import React from "react";
import "../travelling/tbanner.css"
const Beautyheader = () => {
  return (
    <>
      <section className="container travel">
        <div className="travel-top">
          <h4>Home</h4>
          <div className="travel-icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          <h4>Beauty</h4>
        </div>
        <div className="travel-main">
          <h1>Beauty</h1>
        </div>
        <div className="button">
          <button className="tec">Make Up</button>
          <button className="tec">Skincare</button>
          <button className="tec">beauty blogger</button>
          <button className="tec">Skin Clinic</button>
          <button className="tec">Beauty Salon</button>
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

export default Beautyheader;
