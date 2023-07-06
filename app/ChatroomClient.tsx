"use client";

import { Chatroom, Messages } from "@/src";
import React, { useState } from "react";

interface ChatroomClientProps {}

const ChatroomClient: React.FC<ChatroomClientProps> = () => {
  const [selectedChat, setSelectedChat] = useState<number>();

  return (
    <div className="w-full h-full flex flex-row">
      <Messages
        selectedChatId={selectedChat}
        onSelectChat={(id) => setSelectedChat(id)}
      />
      <Chatroom chatId={selectedChat} />
    </div>
  );
};

export default ChatroomClient;
