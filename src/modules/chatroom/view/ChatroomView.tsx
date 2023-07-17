"use client";

import {
  Chatroom,
  ChatroomDetail,
  Container,
  Messages,
} from "@/src/components";
import React, { useState } from "react";

interface ChatroomViewProps {}

const ChatroomView: React.FC<ChatroomViewProps> = () => {
  const [selectedChat, setSelectedChat] = useState<number>();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Container>
      <Messages
        selectedChatId={selectedChat}
        onSelectChat={(id) => setSelectedChat(id)}
      />
      <Chatroom
        chatId={selectedChat}
        isChatExpanded={isExpanded}
        onChatExpanded={() => setIsExpanded((prev) => !prev)}
      />
      <ChatroomDetail isExpanded={isExpanded} />
    </Container>
  );
};

export default ChatroomView;
