import React from "react";
import Advtecbar from "../catepagerightbar/Advtecbar";
import StaySocial from "../catepagerightbar/StaySocial";
import Subscribeform from "../catepagerightbar/Subscribeform";
import GoverLast from "./GoverLast";

export default function GoverRide() {
  return (
    <>
      <div className="allrightbar">
        <GoverLast />
        <span className="lastestbottomline "></span>
        <Advtecbar />
        <StaySocial />
        <Subscribeform />
      </div>
    </>
  );
}
