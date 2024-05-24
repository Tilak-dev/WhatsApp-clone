import React from 'react'
import TopChatBar from './TopChatBar'
import SearchBar from './SearchBar'
import NestedBar from './NestedBar'
import ChatListContainer from './chat-list/ChatListContainer'

function MiddleContainer() {
  return (
    <>
    <div className=' w-[512px] h-[585.33px] flex flex-col '>
      <TopChatBar />
      <SearchBar />
      <NestedBar />
      <ChatListContainer />
    </div>
    </>
  )
}

export default MiddleContainer