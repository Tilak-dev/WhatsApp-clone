import React from "react";
import TopLeft from "./TopLeft";
import BottomLeft from "./BottomLeft";

function LeftContainer() {
  return <>
  <div className="h-[512px] ">
    <TopLeft />
    <BottomLeft />
  </div>
  </>;
}

export default LeftContainer;
