"use client";

import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";
import { ISelectOpt } from "@/src/types";
import clsx from "clsx";
import React, { useState } from "react";
import { Line } from "../../atoms";
import { CustomerDetail } from "../../molecules";
import { Agent, ChatroomInfo, Note, Tags } from "../../molecules/node";

interface ChatroomDetailProps {
  isExpanded?: boolean;
  chatroomDetail?: IConversationDetail;
}

const ChatroomDetail: React.FC<ChatroomDetailProps> = ({
  isExpanded,
  chatroomDetail,
}) => {
  const { setNotes } = useChatroomContext();
  const [tags, setTags] = useState<ISelectOpt[]>([]);
  return (
    <div
      className={clsx(
        " bg-white border-l border-[#EEF5FF] transition duration-300 ease-in-out  flex-shrink-0 h-full overflow-y-auto relative",
        isExpanded ? "w-[375px]" : "hidden w-0"
      )}
    >
      <div className="px-4 py-6 font-bold border-b border-[#EEF5FF] text-[#0D0F12] fixed w-full bg-white z-[1]">
        Customer Detail
      </div>
      <div className="">
        <div className="p-6 flex flex-col gap-6 h-full mt-[73px]">
          <CustomerDetail chatroomDetail={chatroomDetail} />
          <Line />
          <ChatroomInfo conversationDetail={chatroomDetail} />
          <Line />
          <Note
            notes={chatroomDetail?.notes}
            onSave={async (value) => await setNotes(value)}
          />
          <Line />
          <Tags
            tags={
              chatroomDetail?.tags?.map((t) => ({ label: t, value: t })) as any
            }
            onSave={setTags}
          />
          <Line />
          <Agent />
        </div>
      </div>
    </div>
  );
};

export default ChatroomDetail;
