import React from "react";
import { PiVideoCameraFill } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { LuMoreVertical } from "react-icons/lu";

function TopChatInfo() {
  return (
    <>
      <header
        className=" w-[708px] h-[59px] bg-[#202c33] pt-2.5 pb-2.5 pl-4 pr-4 flex flex-row items-center
    "
      >
        <div className="pr-[15px] mt-[-1px]">
          <img src="./dp-img.png" alt="dp_amg" className=" w-10 h-10" />
        </div>
        <div className="w-[434px] h-[21px] text-[#e9edef]">
          <span className=" text-base">Kunal</span>
        </div>
        <div className="w-[200px] h-[42px] text-[#8696a0] justify-end text-2xl flex flex-row items-center gap-2">
          <div className="flex flex-row">
            <div className="flex flex-row text-[#4f6979] items-center ml-2.5 pt-[5px] pr-2.5 pl-2.5 pb-[3px]">
              <PiVideoCameraFill className=" pr-1.5" />
              <FaAngleDown className=" text-[13px]" />
            </div>
          </div>
          <div className=" p-2">
            <IoMdSearch />
          </div>
          <div className=" p-2">
            <LuMoreVertical />
          </div>
        </div>
      </header>
    </>
  );
}

export default TopChatInfo;
