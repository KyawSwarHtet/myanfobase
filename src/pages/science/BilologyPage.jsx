import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import ScienceMain from "../../components/science/ScienceMain";
import Biology from "../../components/science/SubcateScience/Biology";
import BiologyBanner from "../../components/science/SubcateScience/BiologyBanner";

export default function BilologyPage() {
  return (
    <>
      <section className="container">
        <Biology />
        <BiologyBanner />
        <section className="tecbody">
          <ScienceMain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
