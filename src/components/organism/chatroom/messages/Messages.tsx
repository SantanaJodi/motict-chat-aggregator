"use client";

import { ChatIcon } from "@/public/icons/outline";
import React from "react";
import { ChatHeader, MessageCard } from "../../../molecules";
import StatesContainer from "../../StatesContainer";

import { Loading } from "@/src/components/atoms";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { IChatroomDetail } from "./types/MessagesTypes";
import { MessagesViewModel } from "./viewModel/MessagesViewModel";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = ({}) => {
  const {
    isExpanded,
    selectedChat,
    setIsExpanded,
    setSelectedChat,
    conversationDetail,
  } = useChatroomContext();
  const {
    chatroom,
    data,
    error,
    isLoading,
    msgStatus,
    noResult,
    search,
    setChatroom,
    setError,
    setMsgStatus,
    setNoResult,
    setSearch,
    messages,
    fetchNextPage,
    hasNextPage,
  } = MessagesViewModel();

  return (
    <div className="w-[375px] h-screen bg-white py-6  border-r border-[#EEF5FF]  overflow-hidden flex-shrink-0">
      <ChatHeader
        search={search}
        onSearch={(val) => setSearch(val)}
        hideInput={error}
        status={msgStatus}
        onChangeStatus={setMsgStatus}
      />
      <div className=" h-full w-full flex flex-col items-start justify-start mt-4  pb-[150px] relative">
        <div className="h-full w-full overflow-y-auto">
          <InfiniteScroll
            dataLength={
              data?.pages.reduce((acc, page) => acc + page.count, 0) || 0
            }
            next={fetchNextPage}
            loader={<Loading />}
            hasMore={hasNextPage || false}
            scrollableTarget="scrollableDiv"
          >
            {messages.map((c: IChatroomDetail) => (
              <MessageCard
                key={c.conversation_id}
                data={c}
                onSelectChat={setSelectedChat}
                isSelectedChat={
                  c.conversation_id === selectedChat?.conversation_id
                }
              />
            ))}
          </InfiniteScroll>
        </div>

        {/* STATE */}
        <StatesContainer
          isLoading={isLoading}
          isEmpty={messages.length === 0}
          isError={error}
          noResult={noResult}
          emptyMsg="You have no chatroom"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default Messages;
