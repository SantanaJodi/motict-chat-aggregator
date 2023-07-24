"use client";

import { ChatIcon } from "@/public/icons/outline";
import { ChatTime } from "@/src/components/atoms";
import { ChatroomHeader, ChatCard } from "@/src/components/molecules";
import { ChatProperties } from "@/src/components/molecules/footer";
import React from "react";
import StatesContainer from "../../StatesContainer";
import { CHATS } from "../dummy";
import { ChatroomViewModel } from "./viewModel/ChatRoomViewModel";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";
import { IChatroomDetail } from "../messages/types/MessagesTypes";

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
    chatroomDetails,
    fetchNextPage,
    hasNextPage,
    isFetching,
    messageHeader,
  } = ChatroomViewModel({ selectedChat: selectedChat });

  return (
    <div className="w-full h-full overflow-hidden relative">
      <ChatroomHeader
        isResolved={messageHeader?.conversation_status === "resolved"}
        isChatExpanded={isChatExpanded}
        onChatExpanded={onChatExpanded}
        header={chatroomDetail}
      />
      <div className="h-full w-full flex flex-col justify-between relative">
        {/* CHATS */}
        <div className="p-6 pr-14 flex flex-col gap-6 w-full overflow-y-auto  mb-40">
          {/*TODO APIN: Groups chat by time and divide using ChatTime component */}
          <ChatTime time="Yesterday" />
          <div className="flex flex-col gap-2">
            {CHATS.slice(0, 5).map((c) => (
              <ChatCard
                key={c.id}
                status={c.status}
                isSelf={c.isSelf}
                chat={c.chat}
                hideUsername={c.isSelf}
              />
            ))}
          </div>
          <ChatTime time="Today" />
          <div className="flex flex-col gap-2">
            {CHATS.slice(6).map((c) => (
              <ChatCard
                key={c.id}
                status={c.status}
                isSelf={c.isSelf}
                chat={c.chat}
                hideUsername={c.isSelf}
              />
            ))}
          </div>
        </div>

        <ChatProperties onSend={() => alert("send...")} />

        {/* STATES */}
        <StatesContainer
          isLoading={isFetching}
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
