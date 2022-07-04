import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Innovation from "../../components/technology/SubcateTechno/Innovation";
import InnovationBanner from "../../components/technology/SubcateTechno/InnovationBanner";

export default function InnovationPage() {
  return (
    <>
      <section className="container">
        <Innovation />
        <InnovationBanner />
        <section className="tecbody">
          <Subcatemain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
