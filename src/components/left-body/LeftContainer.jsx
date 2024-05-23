import React from "react";
import TopLeft from "./TopLeft";
import BottomLeft from "./BottomLeft";

function LeftContainer() {
  return (
    <>
      <div className="h-[585.33px] flex flex-col ">
          <TopLeft />
          <BottomLeft />
        </div>
    </>
  );
}

export default LeftContainer;
