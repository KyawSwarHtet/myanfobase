import React from "react";
import "./lastnews.css";
import News from "./News";
import Todaylist from "./Todaylist";

const LastNews = () => {
  return (
    <section className="container">
      <h1>Lastest News</h1>
      <span className="headerline"></span>
      <div className="NewsSec">
        <div className="lastnew">
          <News />
          <Todaylist />
        </div>
      </div>
    </section>
  );
};

export default LastNews;
