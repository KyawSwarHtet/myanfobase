import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import Popularslider from "../popularslider/Popularslider.jsx";

const HomeHeader = () => {
  return (
    <>
      <section className="header">
        <div className="header-sec">
          <ul className="header-nav">
            <div className="logo">
              <li>Myanfobase</li>
            </div>

            <li className="li-menu">
              <Link to="/">
                <i className="uil uil-home"></i>
              </Link>
              <p>Home</p>
            </li>

            <li className="li-menu">
              <Link to="/search">
                <i className="uil uil-search"></i>
              </Link>
              <p>Search</p>
            </li>

            <li className="li-menu">
              <a href="#">
                <i class="uil uil-align-justify"></i>
              </a>
              {/* <div className="browser-detail">
                <ul>
                  <li>
                    <Link to="/entertainnment">Entertainment&Pop Culture</Link>
                  </li>
                  <li>
                    <Link to="/techology">Techology</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                  <li>
                    <Link to="/travel">Travel</Link>T
                  </li>
                  <li>
                    <Link to="/beauty">Beauty</Link>
                  </li>
                  <li>
                    <Link to="/lifestyle">Lifestyle&social issue</Link>
                  </li>
                  <li>
                    <Link to="/Health">Health&Medical</Link>
                  </li>
                  <li>
                    <Link to="/government">Government</Link>
                  </li>
                </ul>
              </div> */}
              <p>Browser</p>
            </li>
            <ul className="lang-log">
              <li className="sec-lang-log">
                <img
                  className="lang-logo"
                  src="images/homeimgs/lang.jpg"
                  alt=""
                />
                <p>Langu</p>
              </li>
              <li className="sec-lang-log">
                <Link to="/login">
                  <i class="uil uil-user"></i>
                </Link>
                <p>Login</p>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <section className="home-banner">
        <div className="home-banner-detail">
          <h1>MyanfobasE</h1>
          <h3>MYANMAR INFORMATION BASE</h3>
          <div className="search-banner">
            <input
              type="text"
              placeholder="Search in here...."
              id="searchinput"
            />
            <button className="search-button">
              <i className="uil uil-search"></i>
            </button>
          </div>
          <div className="banner-botton">
            <h2>Welcome to our Page</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </section>
      <span className="header-bottom-line"></span>
      <Slider />

      {/* text slider */}
      {/* <section className="categories">
        <div className="total-cat">
          <button className="cat-arrow-btn">
            <i class="uil uil-arrow-left"></i>
          </button>
          <h5>Entertainment&Pop Culture</h5>
          <h5>Techology</h5>
          <h5>History</h5>
          <h5>Travel</h5>
          <h5>Beauty</h5>
          <h5>Lifestyle&social issue</h5>
          <h5>Health&Medical</h5>
          <h5>Government</h5>

          <button className="cat-arrow-btn">
            <i class="uil uil-arrow-right"></i>
          </button>
        </div>
      </section> */}

      <section className="popular-header">
        <div className="popular-title">
          <h3>Popular Now</h3>
          <span className="popular-now-line"></span>
        </div>
        <div className="popular-p">
          <Popularslider />
          {/* <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
          <div className="popular-arrow">
            <button className="popular-arrow-btn">
              <i class="uil uil-arrow-left"></i>
            </button>
            <button className="popular-arrow-btn">
              <i class="uil uil-arrow-right"></i>
            </button>
          </div> */}
        </div>
      </section>
      <section className="popular-body container">
        <div className="first-grid">
          <div className="popular-bignew">
            <button className="popular-health">Health</button>
            <p>
              popular-health Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
            </p>
            <h5>Author name. 31.5.2022</h5>
          </div>
          <div>
            <div className="popular-secnew">
              <button className="popular-health">Travel</button>
              <p>Where can I get some?</p>
            </div>
            <div className="sec-grid">
              <div className="popular-thirdnew">
                <button className="popular-health">Fashion</button>
                <p>Where can I get some?</p>
              </div>
              <div className="popular-fouthnew">
                <button className="popular-health">Culture</button>
                <p>Where can I get some?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeHeader;
