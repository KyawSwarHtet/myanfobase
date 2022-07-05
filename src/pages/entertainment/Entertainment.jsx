import React from "react";
import Entermentbanner from "../../components/enterment/Entermentbanner";
import Entermentheader from "../../components/enterment/Entermentheader";
import EntermentRbar from "../../components/enterment/EntermentRbar";
import Entermentside from "../../components/enterment/Entermentside";
import Footer from "../../components/footer/Footer";

export default function Entertainment() {
  return (
    <>
      <Entermentheader />
      <Entermentbanner />
      <section className="container travel1">
        <Entermentside />
        <EntermentRbar/>
      </section>
      <Footer/>
    </>
  );
}
