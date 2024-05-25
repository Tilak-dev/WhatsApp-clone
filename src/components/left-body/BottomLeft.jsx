import React from 'react'
import { MdOutlineSettings } from "react-icons/md";

function BottomLeft() {
  return (
    <div className="flex flex-col  w-[60px] h-1/6 bg-[#222e35] text-gray-400 text-2xl pl-2.5 pr-2.5 pb-2.5 ">
      <div className=' h-10 p-2  pt-0'>
        <MdOutlineSettings />
      </div>
      <div className=' h-10 p-1 w-10'>
        <img src="./dp-img.png" alt="" className=' w-8 h-8' />
      </div>
    </div>
  )
}

export default BottomLeft