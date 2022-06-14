import React from "react";
import "./viedonav.css";
import { Link } from "react-router-dom";
const ViedoNav = () => {
  return (
    <section>
      <div className="Vedionav">
        <h2>Viedo</h2>
        <div className="Viedo_nav">
          <ul>
            <li>
              <Link to="">Beauty</Link>
            </li>
            <li>
              <Link to="">Education</Link>
            </li>
            <li>
              <Link to="">Sport</Link>
            </li>
            <li>
              <Link to="">Economic</Link>
            </li>
            <li>
              <Link to="">Political</Link>
            </li>
            <li>
              <Link to="">Entertainment</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ViedoNav;
