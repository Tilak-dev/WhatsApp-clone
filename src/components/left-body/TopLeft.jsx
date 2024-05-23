import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdOutlineGroups } from "react-icons/md";
import { PiNumberCircleZeroLight } from "react-icons/pi";
import { TbMessageCircleUp } from "react-icons/tb";

function TopLeft() {
  return (
    <div className="flex flex-col  w-[60px] w- h-5/6 bg-[#222e35] text-gray-400 text-3xl pl-2.5 pt-2.5 pr-2.5">
      <div className=" h-10 p-2">
        <BiSolidMessageSquareDetail  className=""/>
      </div>
      <div className=" h-10 p-2">
        <MdOutlineGroups />
      </div>
      <div className=" h-10 p-2">
        <PiNumberCircleZeroLight />
      </div>
      <div className=" h-10 p-2">
        <TbMessageCircleUp />
      </div>
    </div>
  );
}

export default TopLeft;
