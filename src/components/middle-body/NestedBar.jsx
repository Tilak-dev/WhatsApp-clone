import React from 'react'

function NestedBar() {
  return (
    <div className='flex flex-row h-[41px] w-[512px] bg-[#111b21] pt-0.5 pr-4 pl-4 pb-[7px] gap-2 '>
      <div className=" pr-3 pl-3 pt-1.5 pb-1.5 bg-[#0a332c] font-sans text-[15px] rounded-3xl text-[#00a884]"> All</div>
      <div className=" pr-3 pl-3 pt-1.5 pb-1.5 bg-[#202c33] font-sans text-[15px] rounded-3xl text-[#8696a0]"> Unread</div>
      <div className=" pr-3 pl-3 pt-1.5 pb-1.5 bg-[#202c33] font-sans text-[15px] rounded-3xl text-[#8696a0]"> Groups</div>
    </div>                                                                                                                
  )
}

export default NestedBar