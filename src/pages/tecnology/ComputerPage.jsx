import React from "react";
import Footer from "../../components/footer/Footer";
import Computer from "../../components/subcategory/Computer";
import Subcategorybanner from "../../components/subcategory/Subcategorybanner";

export default function ComputerPage() {
  return (
    <>
      <section className="container">
        <Computer />
        <Subcategorybanner />
      </section>
      <Footer />
    </>
  );
}
