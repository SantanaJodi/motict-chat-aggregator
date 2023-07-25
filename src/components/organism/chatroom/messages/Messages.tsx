"use client";

import { ChatIcon } from "@/public/icons/outline";
import React from "react";
import { ChatHeader, MessageCard } from "../../../molecules";
import StatesContainer from "../../StatesContainer";

import { Loading } from "@/src/components/atoms";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import { AxiosError } from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { IChatroomDetail, StatusEnum } from "./types/MessagesTypes";
import { MessagesViewModel } from "./viewModel/MessagesViewModel";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = ({}) => {
  const { selectedChat, setSelectedChat, conversationDetail } =
    useChatroomContext();
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
  } = MessagesViewModel();

  return (
    <div className="w-[375px] h-screen bg-white py-6  border-r border-[#EEF5FF]  overflow-hidden flex-shrink-0">
      <ChatHeader
        search={search}
        onSearch={(val) => setSearch(val)}
        error={error as AxiosError}
        status={msgStatus}
        onChangeStatus={setMsgStatus}
        messages={messages}
      />
      <div className=" h-full w-full flex flex-col items-start justify-start mt-4  pb-[150px] relative">
        <div className="h-full w-full overflow-y-auto">
          <InfiniteScroll
            dataLength={messages.length}
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

        <StatesContainer
          isLoading={isLoading}
          isEmpty={messages.length === 0}
          isError={error as any}
          noResult={
            (!!search || msgStatus !== StatusEnum.ALL) && !messages.length
          }
          emptyMsg="You have no chatroom"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default Messages;
