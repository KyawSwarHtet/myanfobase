import React from "react";
import "./beauty.css"
import BeautyRighrbar from "../../components/beauty/Bearightbar";
import Beautybanner from "../../components/beauty/Beautybanner";
import Beautyheader from "../../components/beauty/Beautyheader";
import BeautySidebar from "../../components/beauty/Beautysidebar";
import Footer from "../../components/footer/Footer";


export default function Beauty() {
  return (
    <>
      <Beautyheader />
      <Beautybanner />

      <section className="tecbody container">
        <BeautySidebar />
        <BeautyRighrbar />
      </section>
      <Footer />
    </>
  );
}
