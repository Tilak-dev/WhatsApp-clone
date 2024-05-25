import React from "react";
import TopLeft from "./TopLeft";
import BottomLeft from "./BottomLeft";

function LeftContainer() {
  return (
    <>
      <div className="h-[551.33px] min-h-screen flex flex-col ">
          <TopLeft />
          <BottomLeft />
        </div>
    </>
  );
}

export default LeftContainer;
