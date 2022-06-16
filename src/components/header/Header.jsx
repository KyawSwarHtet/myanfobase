import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import Language from "./dropdown/Language";

import "./header.css";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
<<<<<<< HEAD
    <section className="headerPadding">
      <div className="headercolor">
        <nav className="headerwrap ">
          <ul className="headerfirst">
            <li>
              <Link to="/" className="nav-logo">
                <img src="./images/homeimgs/logo2.png" alt="" />
              </Link>
            </li>
            <li>
              <Link to="/" className="flex hoverclor">
                <i class="uil uil-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/search" className="flex hoverclor">
                <i class="uil uil-search"></i>
                <span>Search</span>
              </Link>
            </li>
            <li
              className="homeMenu"
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="flex hoverclor">
                <i class="uil uil-list-ul"></i>
                <span>Menu</span>
              </div>
              {dropdown && <Dropdown className="dropdownWrap" />}
            </li>
            <li>
              <Link to="new" className="flex hoverclor">
                <i class="uil uil-plus-circle"></i>
                <span>New</span>
              </Link>
            </li>
          </ul>
          <ul className="headersecond">
            <li>
              <Link to="/subscribe" className="flex">
                <button className="subscribebtn">Subscribe</button>
              </Link>
            </li>
            <li className="language"></li>
            <li>
              <Link to="/signup" className="login">
                <i class="uil uil-user loginicon"></i>
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* {dropdown && <Dropdown id="dropdownWrap" />} */}
    </section>
=======
    <div className="headercolor">
      <nav className="headerwrap ">
        <ul className="headerfirst">
          <li>
            <Link to="/" className="nav-logo">
              <img src="./images/homeimgs/logo2.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/" className="flex hoverclor">
              <i class="uil uil-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex hoverclor">
              <i class="uil uil-search"></i>
              <span>Search</span>
            </Link>
          </li>
          <li
            className="homeMenu"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div className="flex hoverclor">
              <i class="uil uil-list-ul"></i>
              <span>Menu</span>
            </div>
            {dropdown && <Dropdown className="dropdownWrap" />}
          </li>
          <li>
            <Link to="new" className="flex hoverclor">
              <i class="uil uil-plus-circle"></i>
              <span>New</span>
            </Link>
          </li>
        </ul>
        <ul className="headersecond">
          <li>
            <Link to="/subscribe" className="flex">
              <button className="subscribebtn">Subscribe</button>
            </Link>
          </li>
          <li className="language">
            {/* <img src="./images/homeimgs/englang.jpg" alt="" />
              <span>Eng</span> */}
            <Language label="choose an language" />
          </li>
          <li>
            <Link to="/signup" className="login">
              <i class="uil uil-user loginicon"></i>
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
>>>>>>> master
  );
}
