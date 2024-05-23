import React from 'react'
import TopChatBar from './TopChatBar'
import SearchBar from './SearchBar'

function MiddleContainer() {
  return (
    <>
    <div className=' w-[512px] h-[585.33px] flex flex-col '>
      <TopChatBar />
      <SearchBar />
    </div>
    </>
  )
}

export default MiddleContainer