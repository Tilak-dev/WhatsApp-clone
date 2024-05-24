import React from 'react'
import TopChatBar from './TopChatBar'
import SearchBar from './SearchBar'
import NestedBar from './NestedBar'

//w437px h512px
function MiddleContainer() {
  return (
    <>
    <div className=' w-[512px] h-[585.33px] flex flex-col '>
      <TopChatBar />
      <SearchBar />
      <NestedBar />
    </div>
    </>
  )
}

export default MiddleContainer