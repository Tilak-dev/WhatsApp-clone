import React from "react";
import ChatImg from "./ChatImg";
import ChatInfo from "./ChatInfo";

function ChatList() {
  return (
    <div className=" flex flex-row w-[490px] hover:bg-[#3a5464]">
      <ChatImg />
      <ChatInfo />
    </div>
  );
}

export default ChatList;
