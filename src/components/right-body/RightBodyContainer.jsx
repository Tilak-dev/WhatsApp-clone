import React from "react";
import TypeMsg from "./TypeMsg";
import TopChatInfo from "./TopChatInfo";
import MidChatBox from "./MidChatBox";

function RightBodyContainer() {
  return (
    <div
      className="w-[708px] min-h-screen h-[551.33px] bg-[#111b21]
    border-l-[0.6px] border-[#282d30] relative overflow-hidden"
    >
      <TopChatInfo />
      <MidChatBox />
      <TypeMsg />
    </div>
  );
}

export default RightBodyContainer;
