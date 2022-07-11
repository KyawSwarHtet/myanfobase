import React from "react";
import { useParams } from "react-router-dom";
import Latestbar from "../../components/catepagerightbar/Latestbar";
import Detailbanner from "../../components/detailpagecompo/Detailbanner";
import Footer from "../../components/footer/Footer";
import LiteraturePopular from "../../components/literature/LiteraturePopular";
import "./detailpage.css";

export default function DetailPage() {
  const detailid = useParams();
  console.log("detalid is ", detailid);

  return (
    <>
      <section className="container detailbody">
        <Detailbanner detailid={detailid} />

        <div className="allRightBar">
          <LiteraturePopular />
          <Latestbar />
        </div>
      </section>
      <Footer />
    </>
  );
}
