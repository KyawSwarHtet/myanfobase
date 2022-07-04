import React from "react";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Footer from "../../components/footer/Footer";
import Literature from "../../components/literature/Literature";
import LiteratureMain from "../../components/literature/LiteratureMain";
import "./literaturebody.css";

export default function LiteraturePage() {
  return (
    <>
      <section className="container">
        <Literature />
        <section className="literaturebody">
          <LiteratureMain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
