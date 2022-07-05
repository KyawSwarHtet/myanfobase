import Footer from "../../components/footer/Footer";
import Healthbanner from "../../components/health/Healthbanner";
import Healthrightbar from "../../components/health/Healthrightbar";
import Healthsidebar from "../../components/health/Healthsidebar";
import Healthy from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthy";
import HealthyRightbar from "../../components/lifestyle/lifestyleSetmenu/healthyLife/healthyRightbar";



export default function HealthyPage() {
  return (
    <>
      <section className="container">
        <Healthy/>
        <Healthbanner />
        <section className="tecbody">
          <Healthsidebar />
          <HealthyRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
