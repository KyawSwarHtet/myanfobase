import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeEducation from "../../components/homeeducation/homeEducation";
import HomeHeader from "../../components/homeheadercompo/Homeheader";
import Homelifestyle from "../../components/homelifestyle/Homelifestyle";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeader />
      <HomeEducation />
      <Homelifestyle />
      <Footer />
    </>
  );
}
