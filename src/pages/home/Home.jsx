import Categorieslider from "../../components/categories/Categorieslider";
import Footer from "../../components/footer/Footer";
import HomeEducation from "../../components/homeeducation/homeEducation";
import HomeHeader from "../../components/homeheadercompo/Homeheader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeEducation />
      <Categorieslider />
      <Footer />
    </>
  );
}
