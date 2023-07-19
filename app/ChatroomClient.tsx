"use client";

import { Chatroom, ChatroomDetail, Messages } from "@/src";

import React, { useState } from "react";

interface ChatroomClientProps {}

const ChatroomClient: React.FC<ChatroomClientProps> = ({}) => {
  const [selectedChat, setSelectedChat] = useState<number>();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
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
  );
};

export default ChatroomClient;
