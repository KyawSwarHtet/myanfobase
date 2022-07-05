import React from "react";
import "./lifestyle.css"
import Lifestyleheader from "../../components/lifestyle/Lifestyleheader";
import Lifestylebanner from "../../components/lifestyle/Lifestylebanner";
import Lifestylerightbar from "../../components/lifestyle/Lifestylerightbar";
import Footer from "../../components/footer/Footer";
import Lifestylesidebar from "../../components/lifestyle/Lifestylesidebar";

export default function Lifestyle() {
  return (
    <>
      <section className="container">
        <Lifestyleheader />
        <Lifestylebanner />
        <section className="tecbody">
          <Lifestylesidebar />
          <Lifestylerightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
