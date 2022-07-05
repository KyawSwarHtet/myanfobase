import Footer from "../../components/footer/Footer";
import Exercise from "../../components/lifestyle/lifestyleSetmenu/exercise/exercise";
import ExerciseBanner from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseBanner";
import ExerciseRightbar from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseRightbar";
import ExerciseSidebar from "../../components/lifestyle/lifestyleSetmenu/exercise/exerciseSidebar";


export default function ExercisePage() {
  return (
    <>
      <section className="container">
        <Exercise />
        <ExerciseBanner />
        <section className="tecbody">
                  <ExerciseSidebar />
                  <ExerciseRightbar />
        </section>
      </section>
      <Footer />
    </>
  );
}
