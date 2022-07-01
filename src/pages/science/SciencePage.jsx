import React from "react";
import "./sciencebody.css";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Science from "../../components/science/Science";

import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";

export default function SciencePage() {
  return (
    <>
      <section className="container">
        <Science />
        <section className="sciencebody">
          <ScienceMain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
