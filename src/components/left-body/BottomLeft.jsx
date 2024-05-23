import React from 'react'
import { MdOutlineSettings } from "react-icons/md";

function BottomLeft() {
  return (
    <div className="flex flex-col  w-[60px] w- h-1/6 bg-[#222e35] text-gray-400 text-3xl pl-2.5 pt-2.5 pr-2.5">
      <div className=' h-10 p-2'>
        <MdOutlineSettings />
      </div>
      <div className=' h-10 p-2 w-10'>
        <MdOutlineSettings />
      </div>
    </div>
  )
}

export default BottomLeft