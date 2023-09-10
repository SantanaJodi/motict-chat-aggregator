"use client";

import { ChatIcon } from "@/public/icons/outline";
import { ChatTime, Loading } from "@/src/components/atoms";
import {
  ChatCard,
  ChatInput,
  ChatroomHeader,
} from "@/src/components/molecules";
import {
  IConversationDetail,
  useChatroomContext,
} from "@/src/modules/chatroom";
import clsx from "clsx";
import { flatten } from "lodash";
import React, { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import StatesContainer from "../../StatesContainer";

interface ChatroomComponentProps {
  chatroomDetail?: IConversationDetail;
  isChatExpanded?: boolean;
  onChatExpanded: () => void;
}

const ChatroomComponent: React.FC<ChatroomComponentProps> = ({
  chatroomDetail,
  onChatExpanded,
  isChatExpanded,
}) => {
  const {
    conversationDetail,
    chatroomDetails,
    fetchNextPageMessages,
    isLoadingMessages,
    hasNextPageMessages,
    messageHeader,
  } = useChatroomContext();

  const messageChats = useMemo(() => {
    const component = [] as any;
    Object.keys(chatroomDetails).forEach((t, y) => {
      component.push(
        <div>
          <ChatTime time={t} />
          <div className="flex flex-col gap-2">
            {chatroomDetails[t].map((c) => (
              <ChatCard
                key={c.id}
                status={c.status as any}
                isSelf={c.status == "sent" || c.status == "sending"}
                hideUsername={c.is_agent}
                chat={{
                  timestamp: c.send_time as any,
                  username: c.from_user_name,
                  message: c.text,
                  images: c.media_url,
                }}
              />
            ))}
          </div>
        </div>
      );
    });

    return component;
  }, [chatroomDetails]);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {conversationDetail && (
        <ChatroomHeader
          isResolved={messageHeader?.conversation_status === "resolved"}
          isChatExpanded={isChatExpanded}
          onChatExpanded={onChatExpanded}
          header={chatroomDetail}
        />
      )}

      <div className="h-full w-full flex flex-col justify-between relative">
        <div
          id="chats"
          className={clsx("p-6 pr-14 overflow-y-auto pb-[100px]")}
        >
          <InfiniteScroll
            dataLength={flatten(Object.values(chatroomDetails)).length}
            next={fetchNextPageMessages}
            loader={<Loading />}
            hasMore={hasNextPageMessages || false}
            scrollableTarget="chats"
            inverse={true}
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "hidden",
              height: "100%",
            }}
          >
            {messageChats}
          </InfiniteScroll>
        </div>

        <div className="sticky bottom-0 w-full">
          <ChatInput isExpired={chatroomDetail?.session.text === "Expired"} />
        </div>

        <StatesContainer
          isLoading={isLoadingMessages}
          isEmpty={!chatroomDetail?.conversation_id}
          emptyMsg="Choose chatroom from the left sidebar"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default ChatroomComponent;
