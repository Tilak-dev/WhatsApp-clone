import React from "react";
import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="flex flex-col justify-center h-12 w-[512px] bg-[#111b21] pl-3 pr-3">
      <div className="flex flex-row text-[#8696a0] bg-[#222e35] w-[488px] h-9 rounded-lg pl-3">
        <div className=" w-[54px] pl-1 text-[19px] flex flex-col justify-center">
          <MdSearch className=" " />
        </div>
        <div className="flex flex-col justify-center">
          <input
            placeholder="Search"
            type="text"
            className=" w-[391px] h-[22px] text-[15px]   bg-inherit focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
