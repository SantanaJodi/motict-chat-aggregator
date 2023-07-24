"use client";

import { ChatroomDetail, Container, Messages } from "@/src/components";
import React from "react";
import ChatroomComponent from "@/src/components/organism/chatroom/chatroom/ChatroomComponent";
import {
  ChatroomContextProvider,
  useChatroomContext,
} from "../context/ChatroomContext";

interface ChatroomViewProps {}

const ChatroomView: React.FC<ChatroomViewProps> = (props) => {
  return (
    <ChatroomContextProvider>
      <Children {...props} />
    </ChatroomContextProvider>
  );
};

const Children: React.FC<ChatroomViewProps> = () => {
  const { isExpanded, selectedChat, setIsExpanded, conversationDetail } =
    useChatroomContext();

  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
        <Messages />
        <ChatroomComponent
          chatroomDetail={conversationDetail}
          isChatExpanded={isExpanded}
          selectedChat={selectedChat}
          onChatExpanded={() => setIsExpanded(!isExpanded)}
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
