import React from "react";
import { IoMdMic } from "react-icons/io";

function TypeBox() {
  return (
    <div className="flex flex-row">
      {" "}
      <div className="flex items-center w-[537.33px] h-[41px] rounded-lg mt-[5px] mb-1 mr-2 ml-2 pt-2 pb-2 pl-3 pr-3 bg-[#2a3942]">
        <textarea
          placeholder=" Type a massage"
          type="text"
          className=" w-[512px] h-[22px] text-[15px]  resize-none overflow-hidden bg-inherit focus:outline-none "
        />
      </div>
      <div className="w-10 h-10 flex items-center justify-center pt-[5px] pb-[5px] text-[26px]">
        <IoMdMic />
      </div>
    </div>
  );
}

export default TypeBox;
