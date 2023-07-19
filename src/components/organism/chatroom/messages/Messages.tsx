"use client";

import { ChatIcon } from "@/public/icons/outline";
import React, { useState } from "react";
import { ChatHeader, MessageCard } from "../../../molecules";
import StatesContainer from "../../StatesContainer";

import { GlobalResData, PaginateResponseDTO } from "@/src/types/common-types";
import { MessagesDTO } from "./types/MessagesTypes";
import { useQuery } from "react-query";
import { MessagesViewModel } from "./viewModel/MessagesViewModel";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "@/src/components/atoms";

interface MessagesProps {
  selectedChatId: number | undefined;
  onSelectChat: (chatId: number) => void;
}

const Messages: React.FC<MessagesProps> = ({
  onSelectChat,
  selectedChatId,
}) => {
  const {
    chatroom,
    data,
    error,
    handleChangeStatus,
    isLoading,
    msgStatus,
    noResult,
    search,
    setChatroom,
    setError,
    setIsLoading,
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
        status={"All"}
        onChangeStatus={handleChangeStatus}
      />
      <div className=" h-full flex flex-col items-start justify-start mt-4  pb-[150px] relative">
        <div className="h-full overflow-y-auto">
          <InfiniteScroll
            dataLength={messages.length}
            next={fetchNextPage}
            loader={<Loading />}
            hasMore={!!hasNextPage}
          >
            {messages.map((c: MessagesDTO) => (
              <MessageCard
                key={c.conversation_id}
                data={c}
                onSelectChat={onSelectChat}
                isSelectedChat={c.assigned_agent_id === selectedChatId}
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
