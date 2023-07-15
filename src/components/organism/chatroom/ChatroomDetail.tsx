"use client";

import { SelectOpt } from "@/src/types";
import clsx from "clsx";
import React, { useState } from "react";
import { Line } from "../../atoms";
import { CustomerDetail } from "../../molecules";
import { Agent, ChatroomInfo, Note, Tags } from "../../molecules/node";
import { toast } from "react-hot-toast";

interface ChatroomDetailProps {
  isExpanded?: boolean;
}

const ChatroomDetail: React.FC<ChatroomDetailProps> = ({ isExpanded }) => {
  const [note, setNote] = useState("");
  const [tags, setTags] = useState<SelectOpt[]>([]);
  const [agent, setAgent] = useState("");
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
          <CustomerDetail />
          <Line />
          <ChatroomInfo />
          <Line />
          <Note notes={note} onSave={(value) => setNote(value)} />
          <Line />
          <Tags
            tags={tags}
            onSave={(value) => {
              setTags(value);
              console.log("🚀 -> value:", value);
            }}
          />
          <Line />
          <Agent
            agent={agent}
            onAssign={(value) => {
              setAgent(value);
              toast.success("Agent Assigned");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatroomDetail;
