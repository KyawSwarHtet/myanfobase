import Footer from "../../components/footer/Footer";
import Luxury from "../../components/lifestyle/lifestyleSetmenu/luxury/luxury";
import LuxuryBanner from "../../components/lifestyle/lifestyleSetmenu/luxury/luxuryBanner";
import LuxuryRightbar from "../../components/lifestyle/lifestyleSetmenu/luxury/luxuryRightbar";
import LuxurySidebar from "../../components/lifestyle/lifestyleSetmenu/luxury/luxurySidebar";



export default function LuxuryPage() {
  return (
    <>
      <section className="container">
        <Luxury />
        <LuxuryBanner />
        <section className="tecbody">
          <LuxurySidebar />
          <LuxuryRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}

