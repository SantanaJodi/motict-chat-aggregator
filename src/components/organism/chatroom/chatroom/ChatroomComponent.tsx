"use client";

import { ChatIcon } from "@/public/icons/outline";
import { ChatTime, Loading } from "@/src/components/atoms";
import { ChatCard, ChatroomHeader } from "@/src/components/molecules";
import { ChatProperties } from "@/src/components/molecules/footer";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";
import React, { useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import StatesContainer from "../../StatesContainer";
import { IChatroomDetail } from "../messages/types/MessagesTypes";
import { flatten } from "lodash";

interface ChatroomComponentProps {
  chatroomDetail?: IConversationDetail;
  isChatExpanded?: boolean;
  selectedChat?: IChatroomDetail;
  onChatExpanded: () => void;
}

const ChatroomComponent: React.FC<ChatroomComponentProps> = ({
  chatroomDetail,
  onChatExpanded,
  isChatExpanded,
  selectedChat,
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
        <>
          <div className="flex flex-col gap-2">
            {chatroomDetails[t].map((c) => (
              <ChatCard
                key={c.id}
                // TODO: fix this a
                status={c.status as any}
                isSelf={c.status == "sent" || c.status == "sending"}
                chat={{
                  // TODO: fix this
                  timestamp: c.send_time as any,
                  username: c.from_user_name,
                  message: c.text,
                  images: c.media_url,
                }}
                hideUsername={c.is_agent}
              />
            ))}
          </div>
          <ChatTime time={t} />
        </>
      );
    });

    return component;
  }, [chatroomDetails]);

  return (
    <div className="w-full h-full overflow-hidden relative">
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
          className="p-6 pr-14 flex flex-col-reverse  w-full overflow-y-auto mb-40"
        >
          {/* <div className="flex flex-col-reverse  w-full overflow-y-auto"> */}
          <InfiniteScroll
            dataLength={flatten(Object.values(chatroomDetails)).length}
            next={fetchNextPageMessages}
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              overflowY: "hidden",
            }}
            loader={<Loading />}
            hasMore={hasNextPageMessages || false}
            scrollableTarget="chats"
            inverse={true}
          >
            {messageChats}
          </InfiniteScroll>
          {/* </div> */}
        </div>

        <ChatProperties
          isExpired={chatroomDetail?.session.text === "Expired"}
        />

        {/* STATES */}
        <StatesContainer
          isLoading={isLoadingMessages}
          isEmpty={!chatroomDetail?.conversation_id}
          // isError={error}
          emptyMsg="Choose chatroom from the left sidebar"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default ChatroomComponent;
