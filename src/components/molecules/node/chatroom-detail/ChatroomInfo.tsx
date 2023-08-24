import { IConversationDetail } from "@/src/modules/chatroom";
import React from "react";
import { ListData, ListSession } from "../../list";
import { format } from "date-fns";

interface ChatroomInfoProps {
  conversationDetail?: IConversationDetail;
}

const ChatroomInfo: React.FC<ChatroomInfoProps> = ({ conversationDetail }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="font-bold leading-[20.83px]">Chatroom Detail</p>
      {/* TODO: change this based on what integrated account to this sender */}
      <ListData
        label="Integration"
        data={conversationDetail?.sender?.platform || ""}
        subData={conversationDetail?.sender?.whatsapp?.whatsapp_id || ""}
        size="small"
      />
      <ListData
        label="Created"
        data={
          format(
            new Date(conversationDetail?.created_at as any),
            "dd MMMM yyyy • HH:mm"
          ) || ""
        }
        size="small"
      />
      <ListSession session={conversationDetail?.session?.text || ""} />
    </div>
  );
};

export default ChatroomInfo;
