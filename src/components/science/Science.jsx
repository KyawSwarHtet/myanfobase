import React from "react";
import { Link } from "react-router-dom";
import "../technology/technology.css";
import "./science.css";

export default function Science() {
  return (
    <>
      <section className="technology">
        <div className="top">
          <div className="homelink">
            <ul>
              <li>
                <Link to="/" className="link1">
                  <h4>Home</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="iconRightArrow">
            <i className="uil uil-angle-right-b"></i>
          </div>

          <h4>Science</h4>
        </div>
        <div className="sectop">
          <h1>Science</h1>
        </div>
        <div className="Catabutton">
          <Link to="/Astronomy">
            <button className="tec">Astronomy</button>
          </Link>
          <button className="tec">Biology</button>
          <button className="tec">Chemistry</button>
          <button className="tec">Earth Science</button>
          <button className="tec">Mathematics</button>
          <button className="tec">Plants</button>
          <button className="tec">Physics</button>
          <button className="tec">Mammals</button>
        </div>
        <div className="para">
          <p>
            How can the sky be blue one day and stormy the next? Why do heavy
            objects tend to fall downwards when dropped? How are birds able to
            fly (and why can't I do the same?)? Human beings have long been
            curious about the world in which we live, striving to identify
            connections among the phenomenons we witness and to understand how
            it all works.
          </p>
        </div>
      </section>
      <section className="photo">
        <div className="firstphoto">
          <div className="tech-firstphoto">
            <img
              className="fbphoto"
              src="./images/science/sciencebanner1.jpg"
              alt=""
            />
          </div>
          <div className="firstpara">
            <button className="cateScience">Science</button>
            <h4 className="sciencecolor">
              How to Mark yourself 'Safe' on Socials Media
            </h4>
            <p>
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </div>
        </div>
        <div className="secphoto">
          <div className="secrobot">
            <div className="tecsecdiv-firstphoto">
              <img
                className="robotphoto"
                src="./images/science/scienceinfo9.jpg"
                alt=""
              />
            </div>
            <div className="robotpara">
              <button className="cateScience">Science</button>
              <h4 className="sciencecolor">
                Corsair HS80 RGB Wireless Gaming Headset Review
              </h4>
            </div>
          </div>
          <div className="secair">
            <div className="tec-lastbannerphotos">
              <img
                className="airbudphoto"
                src="./images/science/sciencebanner11.jpg"
                alt=""
              />
            </div>
            <div className="airbudpara">
              <button className="cateScience">science</button>
              <h4 className="sciencecolor">
                Corsair HS80 RGB Wirless Gaming Headset Review
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
