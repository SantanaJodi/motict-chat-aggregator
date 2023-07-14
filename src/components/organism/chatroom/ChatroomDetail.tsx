import clsx from "clsx";
import React from "react";

interface ChatroomDetailProps {
  isExpanded?: boolean;
}

const ChatroomDetail: React.FC<ChatroomDetailProps> = ({ isExpanded }) => {
  return (
    <div
      className={clsx(
        "h-full bg-white border-l border-[#EEF5FF] transition-all",
        isExpanded ? "w-[375px]" : "hidden w-0"
      )}
    >
      <div className="px-4 py-6 font-bold border-b border-[#EEF5FF] text-[#0D0F12]">
        Customer Detail
      </div>
    </div>
  );
};

export default ChatroomDetail;
