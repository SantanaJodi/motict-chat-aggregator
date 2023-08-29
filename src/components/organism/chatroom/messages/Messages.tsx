"use client";

import { ChatIcon } from "@/public/icons/outline";
import { Loading } from "@/src/components/atoms";
import { useChatroomContext } from "@/src/modules/chatroom";
import { AxiosError } from "axios";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ChatHeader, MessageCard, MessageStatusTab } from "../../../molecules";
import StatesContainer from "../../StatesContainer";
import { MessagesViewModel } from "./model/MessagesViewModel";
import { IChatroomDetail, StatusEnum } from "./types/MessagesTypes";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = ({}) => {
  const { selectedChat, setSelectedChat } = useChatroomContext();
  const {
    error,
    search,
    msgStatus,
    isLoading,
    messages,
    hasNextPage,
    setSearch,
    setMsgStatus,
    fetchNextPage,
    refetch,
  } = MessagesViewModel();

  return (
    <div className="w-[375px] h-screen flex flex-col bg-white border-r border-[#EEF5FF] overflow-hidden flex-shrink-0">
      <ChatHeader
        search={search}
        onSearch={(val) => setSearch(val)}
        error={error as AxiosError}
      />
      <MessageStatusTab
        status={msgStatus}
        onChangeStatus={setMsgStatus}
        messages={messages}
      />
      <div
        id="messages"
        className=" h-full w-full flex flex-col relative overflow-y-auto"
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchNextPage}
          loader={<Loading hideText />}
          hasMore={hasNextPage || false}
          scrollableTarget="messages"
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
        <StatesContainer
          isLoading={isLoading}
          isEmpty={messages.length === 0}
          isError={error as any}
          noResult={
            (!!search || msgStatus !== StatusEnum.ALL) && !messages.length
          }
          emptyMsg="You have no chatroom"
          onReload={refetch}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default Messages;
