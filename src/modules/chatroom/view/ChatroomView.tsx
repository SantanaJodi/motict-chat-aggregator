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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
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
      </div>
    </Container>
  );
};

export default ChatroomView;
