"use client";

import {
  Chatroom,
  ChatroomDetail,
  Container,
  Messages,
} from "@/src/components";
import React from "react";
import { ChatroomViewModel } from "../viewModel/ChatroomViewModel";

interface ChatroomViewProps {}

const ChatroomView: React.FC<ChatroomViewProps> = () => {
  const {
    isExpanded,
    selectedChat,
    setIsExpanded,
    setSelectedChat,
    conversationDetail,
    isFetchingConversationDetail,
  } = ChatroomViewModel();

  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
        <Messages
          selectedChatroom={selectedChat}
          onSelectChat={(val) => setSelectedChat(val)}
        />
        <Chatroom
          chatroomDetail={conversationDetail}
          isChatExpanded={isExpanded}
          onChatExpanded={() => setIsExpanded((prev) => !prev)}
        />
        <ChatroomDetail
          isExpanded={isExpanded}
          chatroomDetail={conversationDetail}
        />
      </div>
    </Container>
  );
};

export default ChatroomView;
