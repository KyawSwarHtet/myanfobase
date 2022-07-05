import Advtecbar from "../../catepagerightbar/Advtecbar";
import "../../catepagerightbar/advtecbar.css";
import LatestArticle from "../../catepagerightbar/LatestArticle";
import StaySocial from "../../catepagerightbar/StaySocial";
import Subscribeform from "../../catepagerightbar/Subscribeform";


export default function MakeupRightbar() {
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
