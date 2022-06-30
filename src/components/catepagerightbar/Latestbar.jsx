import Advtecbar from "./Advtecbar";
import LatestArticle from "./LatestArticle";
import "./latestbar.css";
import StaySocial from "./StaySocial";
import Subscribeform from "./Subscribeform";

export default function Latestbar() {
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
