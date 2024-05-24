import React from "react";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import TypeBox from "./TypeBox";

function TypeMsg() {
  return (
    <div className="w-[707px] h-[62px] pt-[5px] pb-1 pl-4 pr-4 absolute bottom-0 flex flex-row bg-[#202c33]">
      <div className=" text-[#8696a0] flex text-2xl pt-1 pb-1">
        <div className="w-10 p-2">
          <FaRegFaceLaughBeam />
        </div>
        <div className="w-10  p-2">
          <FaPlus />
        </div>
      </div>
      <div className="text-[#8696a0] ">
        <TypeBox />
      </div>
    </div>
  );
}

export default TypeMsg;
