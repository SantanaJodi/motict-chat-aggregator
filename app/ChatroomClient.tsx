"use client";

import { Chatroom, ChatroomDetail, Messages } from "@/src";
import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";

import React, { useState } from "react";

interface ChatroomClientProps {}

const ChatroomClient: React.FC<ChatroomClientProps> = ({}) => {
  const [selectedChat, setSelectedChat] = useState<IChatroomDetail>();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full h-full flex flex-row gap-[1px]">
      <Messages
        selectedChatroom={selectedChat}
        onSelectChat={(id) => setSelectedChat(id)}
      />
      <Chatroom
        chatroomDetail={selectedChat}
        isChatExpanded={isExpanded}
        onChatExpanded={() => setIsExpanded((prev) => !prev)}
      />
      <ChatroomDetail isExpanded={isExpanded} />
    </div>
  );
};

export default ChatroomClient;
