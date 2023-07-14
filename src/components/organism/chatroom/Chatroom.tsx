"use client";

import clsx from "clsx";
import React, { useMemo, useState } from "react";
import { ChatroomHeader } from "../../molecules";
import StatesContainer from "../StatesContainer";
import { DUMMY_CHAT } from "./dummy";
import { MessageAssignmentEnum } from "../../atoms/tag";

interface ChatroomProps {
  chatId: number | undefined;
}

const Chatroom: React.FC<ChatroomProps> = ({ chatId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const chat: any = useMemo(() => {
    if (!chatId) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const c = DUMMY_CHAT.filter((item) => item.id === chatId);
    if (c.length) return c[0];
  }, [chatId]);

  return (
    <div className="w-full h-full overflow-hidden flex flex-row">
      <div className="w-full">
        <ChatroomHeader
          isResolved={chat?.status === MessageAssignmentEnum.resolved}
          isChatExpanded={isExpanded}
          onChatExpanded={() => setIsExpanded((prev) => !prev)}
        />
        <div className="h-full overflow-y-auto flex items-center justify-center relative">
          <p>{chat?.lastChat}</p>

          {/* STATES */}
          <StatesContainer
            isLoading={isLoading}
            isEmpty={!chat?.id}
            isError={error}
            emptyMsg="Choose chatroom from the left sidebar"
            onReload={() => alert("reload")}
          />
        </div>
      </div>
      <div
        className={clsx(
          "h-full bg-white border-l border-[#EEF5FF] transition-all",
          isExpanded ? "w-[375px]" : "hidden w-0"
        )}
      >
        DETAIL CUSTOMER
      </div>
    </div>
  );
};

export default Chatroom;
