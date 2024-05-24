import React from "react";

function ChatInfo() {
  return (
    <>
      <div className=" text-[#e9edef] w-[424px] flex flex-row items-center h-[73px] border-[#282d30] border-b-[0.6px]">
        <div className="flex flex-col">
          <div className="h-[22.5px] flex flex-row items-center">
            <span className="w-[374px] text-[17px] ">Kunal</span>
            <span className=" pt-[3px] pl-1.5 text-xs text-[#8696a0]">
              13:21
            </span>
          </div>
          <div className=" text-[14px] w-[360px] h-[22.5px] text-[#8696a0] flex flex-row items-center">
            <span className="">Hello</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatInfo;