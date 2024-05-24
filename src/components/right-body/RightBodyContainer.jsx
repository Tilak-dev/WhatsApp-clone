import React from "react";
import TypeMsg from "./TypeMsg";
import TopChatInfo from "./TopChatInfo";

function RightBodyContainer() {
  return (
    <div
      className="w-[708px] h-[585.33px] bg-[#111b21]
    border-l-[0.6px] border-[#282d30] relative"
    >
      <TopChatInfo />
      <TypeMsg />
    </div>
  );
}

export default RightBodyContainer;
