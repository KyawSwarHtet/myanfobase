import Advtecbar from "../../../catepagerightbar/Advtecbar";
import LatestArticle from "../../../catepagerightbar/LatestArticle";
import StaySocial from "../../../catepagerightbar/StaySocial";
import Subscribeform from "../../../catepagerightbar/Subscribeform";
import "../../../catepagerightbar/advtecbar.css";


export default function ExerciseRightbar() {
  return (
    <>
      <div className="allrightbar ">
        <LatestArticle />
        <span className="lastestbottomline"></span>
        <Advtecbar />
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
}
