"use client";

import { ChatroomDetail, Container, Messages } from "@/src/components";
import React from "react";
import { ChatroomViewModel } from "../viewModel/ChatroomViewModel";
import ChatroomComponent from "@/src/components/organism/chatroom/chatroom/ChatroomComponent";

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
        <ChatroomComponent
          chatroomDetail={conversationDetail}
          isChatExpanded={isExpanded}
          selectedChat={selectedChat}
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
