import Footer from "../../components/footer/Footer";
import Family from "../../components/lifestyle/lifestyleSetmenu/family/family";
import FamilyBanner from "../../components/lifestyle/lifestyleSetmenu/family/familyBanner";
import FamilyRightbar from "../../components/lifestyle/lifestyleSetmenu/family/familyRightbar";
import FamilySidebar from "../../components/lifestyle/lifestyleSetmenu/family/familySidebar";




export default function FamilyPage() {
  return (
    <>
      <section className="container">
              <Family />
              <FamilyBanner />
        <section className="tecbody">
                  <FamilySidebar />
                  <FamilyRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
