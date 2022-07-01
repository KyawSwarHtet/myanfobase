import Footer from "../../components/footer/Footer";
import Healthbanner from "../../components/health/Healthbanner";
import Healthheader from "../../components/health/Healthheader";
import Healthrightbar from "../../components/health/Healthrightbar";
import Healthsidebar from "../../components/health/Healthsidebar";
import "./health.css"

export default function Health() {
  return (
    <>
      <Healthheader />
      <Healthbanner />
      <section className="tecbody container">
              <Healthsidebar />
              <Healthrightbar />
      </section>
      <Footer />
    </>
  );
}
