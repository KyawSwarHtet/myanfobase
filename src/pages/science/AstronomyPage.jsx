import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import Astronomy from "../../components/science/SubcateScience/Astronomy";
import AstronomyBanner from "../../components/science/SubcateScience/AstronomyBanner";

export default function AstronomyPage() {
  return (
    <>
      <section className="container">
        <Astronomy />
        <AstronomyBanner />
        <section className="tecbody">
          <ScienceMain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
