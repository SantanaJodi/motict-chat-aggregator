import React from "react";
import { ListData, ListSession } from "../../list";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";

interface ChatroomInfoProps {
  conversationDetail?: IConversationDetail;
}

const ChatroomInfo: React.FC<ChatroomInfoProps> = ({ conversationDetail }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-bold leading-[20.83px]">Chatroom Detail</p>
      <ListData
        label="Integration"
        data={conversationDetail?.sender.platform || ""}
        subData={conversationDetail?.sender?.whatsapp?.whatsapp_id || ""}
        size="small"
      />
      <ListData
        label="Created"
        data={conversationDetail?.created_at || ""}
        size="small"
      />
      <ListData
        label="Last Seen"
        data={"data belum ada dari backeend"}
        size="small"
      />
      <ListSession session={conversationDetail?.session.text || ""} />
    </div>
  );
};

export default ChatroomInfo;
