"use client";

import { ChatroomDetail, Container, Messages } from "@/src/components";
import { AssignAgentModal } from "@/src/components/molecules/modal";
import ChatroomComponent from "@/src/components/organism/chatroom/chatroom/ChatroomComponent";
import React from "react";
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
  const {
    isExpanded,
    selectedChat,
    setIsExpanded,
    conversationDetail,
    agentModal,
    setAgentModal,
  } = useChatroomContext();

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
      <AssignAgentModal
        // TODO change this based on assigned agent, if any
        defaultValue={{ agent_id: 1, name: "anggih", user_id: 1 }}
        visible={agentModal}
        onClose={() => setAgentModal(false)}
      />
    </Container>
  );
};

export default ChatroomView;
