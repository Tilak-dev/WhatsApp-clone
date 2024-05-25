import React from 'react'
import TopChatBar from './TopChatBar'
import SearchBar from './SearchBar'
import NestedBar from './NestedBar'
import ChatListContainer from './chat-list/ChatListContainer'

function MiddleContainer() {
  return (
    <>
    <div className=' w-[512px] min-h-screen h-[551.33px] bg-[#111b21] flex flex-col '>
      <TopChatBar />
      <SearchBar />
      <NestedBar />
      <ChatListContainer />
    </div>
    </>
  )
}

export default MiddleContainer