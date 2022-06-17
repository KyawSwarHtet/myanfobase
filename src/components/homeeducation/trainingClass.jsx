import React from "react";
import EducationLeft from "./EducationLeft";
import EducationRight from "./EducationRight";
import "./trainingClass.css";

export default function TrainingClass() {
  return (
    <div className="classTop ">
      <article className="homeclass1">
        <div className="classimg">
          <img src="./images/homeimgs/school1.jpg" alt="" />
        </div>
        <h4>Where can I get some?</h4>
        <div className="authTitle">
          <div className="authimg">
            <img
              className="authorimg"
              src="./images/homeimgs/viedo4.jpg"
              alt=""
            />
          </div>
          <h5 className="authorname">Paing Ta kon</h5>
          <span>20.3.2022</span>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <article className="homeclass2">
        <div className="classimg">
          <img src="./images/homeimgs/school3.jpg" alt="" />
        </div>
        <h4>Where can I get some?</h4>
        <div className="authTitle">
          <div className="authimg">
            <img
              className="authorimg"
              src="./images/homeimgs/viedo4.jpg"
              alt=""
            />
          </div>
          <h5 className="authorname">Paing Ta kon</h5>
          <span>20.3.2022</span>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <EducationLeft />
      <EducationRight />
    </div>
  );
}
