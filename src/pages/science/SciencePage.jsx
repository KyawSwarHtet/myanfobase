import React from "react";
import "./sciencebody.css";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Science from "../../components/science/Science";

import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import ScienceBanner from "../../components/science/ScienceBanner";

export default function SciencePage() {
  return (
    <>
      <section className="container">
        <Science />
        <ScienceBanner />
        <section className="sciencebody">
          <ScienceMain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
