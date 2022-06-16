import { Link } from "react-router-dom";
import Slider from "../slider/Slider.jsx";
import "./homeheader.css";
import "swiper/css/bundle";
import Popularslider from "../popularslider/Popularslider.jsx";

const HomeHeader = () => {
  return (
    <>
      <section className="homeheader">
        <div className="home-banner">
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
        </div>
      </section>

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
          <h2>Popular Now</h2>
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
