import Clinic from "../../components/beauty/setcat/clinic";
import ClinicBanner from "../../components/beauty/setcat/Clinicbanner";
import ClinicRightbar from "../../components/beauty/setcat/Clinicrightbar";
import Clinicsidebar from "../../components/beauty/setcat/Clinicsidebar";
import Footer from "../../components/footer/Footer";




export default function Clinicpage() {
  return (
    <>
      <section className="container">
              <Clinic />
              <ClinicBanner />
              <section className="tecbody">
                  <Clinicsidebar />
          <ClinicRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}