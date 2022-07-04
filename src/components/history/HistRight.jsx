import React from "react";
import Advtecbar from "../catepagerightbar/Advtecbar";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import HisLast from "./HisLast";

export default function HistRight() {
  return (
    <>
      <div className="allrightbar">
        <HisLast />
        <span className="lastestbottomline "></span>
        <Advtecbar />
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
}
