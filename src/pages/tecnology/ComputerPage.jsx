import React from "react";
import "./tecnology.css";
import Footer from "../../components/footer/Footer";

import Computer from "../../components/subcategory/Computer";
import Subcategorybanner from "../../components/subcategory/Subcategorybanner";
import Subcatemain from "../../components/subcategory/Subcatemain";
import Latestbar from "../../components/catepagerightbar/Latestbar";

export default function ComputerPage() {
  return (
    <>
      <section className="container">
        <Computer />
        <Subcategorybanner />
        <section className="tecbody">
          <Subcatemain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
