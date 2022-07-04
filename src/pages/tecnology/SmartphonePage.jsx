import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Smartphone from "../../components/technology/SubcateTechno/Smartphone";
import SmartphoneBanner from "../../components/technology/SubcateTechno/SmartphoneBanner";

export default function SmartphonePage() {
  return (
    <>
      <section className="container">
        <Smartphone />
        <SmartphoneBanner />
        <section className="tecbody">
          <Subcatemain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
