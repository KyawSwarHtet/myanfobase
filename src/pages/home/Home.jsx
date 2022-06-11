import Footer from "../../components/footer/Footer";
import HomeEducation from "../../components/homeeducation/homeEducation";
import HomeHeader from "../../components/homeheadercompo/Homeheader";
import LastNews from "../../components/lastviedo/LastNews";
import Viedo from "../../components/Vedio/Viedo";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeEducation />
      <LastNews />
      <Viedo />
      <Footer />
    </>
  );
}
