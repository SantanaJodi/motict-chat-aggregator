import React from "react";
import { ListData, ListSession } from "../../list";

interface ChatroomInfoProps {}

const ChatroomInfo: React.FC<ChatroomInfoProps> = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-bold leading-[20.83px]">Chatroom Detail</p>
      <ListData
        label="Integration"
        data="WhatsApp - Wikitoko"
        subData="+6281122223333"
        size="small"
      />
      <ListData label="Created" data="13 October 2022 • 18:00" size="small" />
      <ListData label="Last Seen" data="14 October 2022 • 08:12" size="small" />
      <ListSession session="Expired in 11:51:49" />
    </div>
  );
};

export default ChatroomInfo;
