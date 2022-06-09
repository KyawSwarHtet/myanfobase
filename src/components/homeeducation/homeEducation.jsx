import React from "react";
import AdvertiseEducation from "./AdvertiseEducation";

import "./homeeducation.css";

import TrainingClass from "./trainingClass";

export default function HomeEducation() {
  return (
    <section>
      <div className="container titleEducation">
        <h2>Technology Tranning Class</h2>
        <span className="headerline"></span>
      </div>
      <div id="homeeducation" className="container edusection">
        <TrainingClass />
        <AdvertiseEducation />
      </div>
    </section>
  );
}
