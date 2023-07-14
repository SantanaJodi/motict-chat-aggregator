"use client";

import { ExpanderIcon, XIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import { Button } from "../../atoms";
import CustomerData from "../data/CustomerData";

interface ChatroomHeaderProps {
  isResolved?: boolean;
  isChatExpanded?: boolean;
  onChatExpanded: () => void;
}

const flex = "flex flex-row items-center gap-6";

const ChatroomHeader: React.FC<ChatroomHeaderProps> = ({
  isResolved,
  isChatExpanded,
  onChatExpanded,
}) => {
  return (
    <div
      className={clsx(
        flex,
        "bg-white pl-6 justify-between border-b border-[#EEF5FF]"
      )}
    >
      <CustomerData agent={null} />

      <div className={flex}>
        <Button
          type={isResolved ? "primary" : "ghost"}
          label={isResolved ? "Resolved" : "Resolve"}
          color={isResolved ? "#4ABF71" : "#0D0F12"}
          onClick={() => alert("resolved")}
        />
        <div
          onClick={onChatExpanded}
          className={clsx(
            "w-20 h-20  flex items-center justify-center flex-shrink-0 border-l cursor-pointer ",
            {
              "bg-[#323944] border-[#323944] hover:border hover:bg-transparent  group":
                isChatExpanded,
              "border-[#EEF5FF] hover:bg-[#EEF5FF]": !isChatExpanded,
            }
          )}
        >
          {isChatExpanded ? (
            <XIcon className="fill-[#fff] group-hover:fill-[#0D0F12]" />
          ) : (
            <ExpanderIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatroomHeader;
