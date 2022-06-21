import "./advtecbar.css";
import Subscribeform from "./Subscribeform";

export default function Advtecbar() {
  return (
    <>
      <div className="adv-connection">
        <div className="adv-image">
          <img src="/images/homeimgs/tecadv.jpg" alt="" />
        </div>
        <div className="advdata">
          <div className="advh4">
            <h4>
              Best Selling BLOG and MAGAZING <br />
              Theme of All Time
            </h4>
          </div>
          <div className="adv-button">
            <button className="advbuynow">Buy Now </button>
          </div>

          <p className="adv-size"> 300*250 Ad</p>
        </div>
      </div>
          {/* star connected */}
          

      <div className="Stayconnect-title">
        <h2>Stay Connected</h2>
        <span className="stayunderline"></span>
      </div>

      <div className="connect-socials">
        <div className="connect-social">
          <div className="connect-logo">
            <img src="images/homeimgs/Facebook_f_logo_(2021).svg.png" alt="" />
          </div>
          <div className="followers">
            <p>
              <strong>21,998</strong>
            </p>
            <p>Funs</p>
          </div>
        </div>
        <div className="connect-social">
          <div className="connect-logo">
            <img src="images/homeimgs/utube.png" alt="" />
          </div>
          <div className="followers">
            <p>
              <strong>21,998</strong>
            </p>
            <p>Funs</p>
          </div>
        </div>
        <div className="connect-social">
          <div className="connect-logo">
            <img src="images/homeimgs/twitter.png" alt="" />
          </div>
          <div className="followers">
            <p>
              <strong>21,998</strong>
            </p>
            <p>Funs</p>
          </div>
        </div>
          </div>
          <Subscribeform />
    </>
  );
}
