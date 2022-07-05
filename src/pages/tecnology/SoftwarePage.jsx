import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Software from "../../components/technology/SubcateTechno/Software";
import SoftwareBanner from "../../components/technology/SubcateTechno/SoftwareBanner";

export default function SoftwarePage() {
  return (
    <>
      <section className="container">
        <Software />
        <SoftwareBanner />
        <section className="tecbody">
          <Subcatemain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
