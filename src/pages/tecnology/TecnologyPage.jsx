import Latestbar from "../../components/catepagerightbar/Latestbar";
import Technology from "../../components/technology/Technology";
import Tecmain from "../../components/catepagerightbar/Tecmain";
import "./tecnologyPage.css";

import Footer from "../../components/footer/Footer";
export default function TecnologyPages() {
  return (
    <>
      <section className="container">
        <Technology />
        <section className="tecbody">
          <Tecmain />
          <Latestbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
