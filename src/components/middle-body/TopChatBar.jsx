import React from "react";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";

function TopChatBar() {
  return (
    <header className=" h-[59px] w-[512px] bg-[#111b21] flex flex-col justify-center pr-6 pl-5 ">
      <div className="text-[#e9edef] w-[467px] h-10  flex flex-row">
        <h1 className="  w-96 text-xl font-bold flex flex-col justify-center">
          Chats
        </h1>
        <div className=" flex flex-row w-[84px] gap-2">
          <div className=" p-2 h-10 w-10 flex justify-center text-3xl">
            <BiSolidMessageSquareAdd />
          </div>
          <div className=" p-2 h-10 w-10  text-3xl flex justify-center">
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopChatBar;
