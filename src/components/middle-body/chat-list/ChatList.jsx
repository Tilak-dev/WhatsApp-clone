import React from "react";
import ChatImg from "./ChatImg";
import ChatInfo from "./ChatInfo";

function ChatList() {
  return (
    <div className="flex flex-row items-center h-[73px] w-[495px]">
      <ChatImg />
      <ChatInfo />
    </div>
  );
}

export default ChatList;
