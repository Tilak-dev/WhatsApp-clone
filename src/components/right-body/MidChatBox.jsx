import React from "react";

function MidChatBox() {
  return (
    <div className="h-[430.33px] w-[708px] pt-3 bg-transparent overflow-x-hidden pl-[63px] pr-[63px] text-[#e9edef] flex flex-col gap-1">
      <div className=" flex flex-row items-center justify-center">
        <span className="pt-[5px] pr-3 pb-1.5 pl-3 text-[12.5px] bg-[#182229] text-[#8696a0] rounded-xl uppercase ">
          Today
        </span>
      </div>
      <div className=" flex flex-row items-center">
        <span className="pt-1.5 pr-[7px] pb-2 pl-[9px] text-[14.2px] bg-[#202c33] rounded-lg ">
          Hii, I'm Tilak
        </span>
        <span className="w-[109px] h-[25px] pr-1 pl-1 mt-[-13px]"></span>
      </div>
      <div className=" flex flex-row items-center">
        <span className="pt-1.5 pr-[7px] pb-2 pl-[9px] text-[14.2px] bg-[#202c33] rounded-lg ">
          Beginner MERN Stack Developer: Learning MongoDB, Express.js, React,
        </span>
        <span className="w-[109px] h-[25px] pr-1 pl-1 mt-[-13px]"></span>
      </div>
      <div className=" flex flex-row items-center">
        <span className="pt-1.5 pr-[7px] pb-2 pl-[9px] text-[14.2px] bg-[#202c33] rounded-lg ">
          and Node.js. Building basic web applications with JavaScript. Gaining
          skills in both frontend and backend development.
        </span>
        <span className="w-[109px] h-[25px] pr-1 pl-1 mt-[-13px]"></span>
      </div>
    </div>
  );
}

export default MidChatBox;
