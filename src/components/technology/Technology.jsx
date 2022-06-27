import { Link } from "react-router-dom";
import "./technology.css";

export default function Technology() {
  return (
    <>
      <section className="technology">
        <div className="top">
          <h4>Home</h4>
          <div className="icon">
            <i className="uil uil-angle-right-b"></i>
          </div>
          {/* <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul> */}
          <h4>Technology</h4>
        </div>
        <div className="sectop">
          <h1>TECHNOLOGY</h1>
        </div>
        <div className="Catabutton">
          <Link to="/computer">
            <button className="tec">Computer</button>
          </Link>
          <button className="tec">Electronics</button>
          <button className="tec">Innovation</button>
          <button className="tec">Smartphone</button>
          <button className="tec">Software</button>
        </div>
        <div className="para">
          <p>
            Modern technology has become a total phenomenon for civilization,
            the defining force of a new social order in which efficiency is no
            longer an option but a necessity imposed on all human activity.
          </p>
        </div>
      </section>
      <section className="photo">
        <div className="firstphoto">
          <div className="firstpara">
            <button className="technologypart">Technology</button>
            <h4>How to Mark yourself 'Safe' on Socials Media</h4>
            <p>
              Modern technology has become a total phenomenon for civilization,
              the defining force of a new social order in which efficiency is no
              longer an option but a necessity imposed on all human activity.
            </p>
          </div>
          <img
            className="fbphoto"
            src="./images/homeimgs/technology.jpg"
            alt=""
          />
        </div>
        <div className="secphoto">
          <div className="secrobot">
            <img
              className="robotphoto"
              src="./images/homeimgs/techhyperx.jpg"
              alt=""
            />
            <div className="robotpara">
              <button className="technologypart">Technology</button>
              <h4>Corsair HS80 RGB Wireless Gaming Headset Review</h4>
            </div>
          </div>
          <div className="secair">
            <div className="airbudpara">
              <button className="technologypart">Technology</button>
              <h4>Corsair HS80 RGB Wirless Gaming Headset Review</h4>
            </div>
            <img
              className="airbudphoto"
              src="./images/homeimgs/techkeyboard.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
