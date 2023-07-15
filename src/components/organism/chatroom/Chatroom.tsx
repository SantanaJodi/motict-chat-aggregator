"use client";

import { ChatIcon } from "@/public/icons/outline";
import React, { useMemo, useState } from "react";
import { ChatTime } from "../../atoms/divider";
import { MessageAssignmentEnum } from "../../atoms/tag";
import { ChatCard, ChatroomHeader } from "../../molecules";
import { ChatProperties } from "../../molecules/footer";
import StatesContainer from "../StatesContainer";
import { CHATS, DUMMY_CHAT } from "./dummy";

interface ChatroomProps {
  chatId: number | undefined;
  isChatExpanded?: boolean;
  onChatExpanded: () => void;
}

const Chatroom: React.FC<ChatroomProps> = ({
  chatId,
  onChatExpanded,
  isChatExpanded,
}) => {
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
    <div className="w-full h-full overflow-hidden relative">
      <ChatroomHeader
        isResolved={chat?.status === MessageAssignmentEnum.resolved}
        isChatExpanded={isChatExpanded}
        onChatExpanded={onChatExpanded}
      />
      <div className="h-full w-full flex flex-col justify-between relative">
        {/* CHATS */}
        <div className="p-6 pr-14 flex flex-col gap-6 w-full overflow-y-auto  mb-40">
          {/*TODO APIN: Groups chat by time and divide using ChatTime component */}
          <ChatTime time="Yesterday" />
          <div className="flex flex-col gap-2">
            {CHATS.slice(0, 5).map((c) => (
              <ChatCard
                key={c.id}
                status={c.status}
                isSelf={c.isSelf}
                chat={c.chat}
                hideUsername={c.isSelf}
              />
            ))}
          </div>
          <ChatTime time="Today" />
          <div className="flex flex-col gap-2">
            {CHATS.slice(6).map((c) => (
              <ChatCard
                key={c.id}
                status={c.status}
                isSelf={c.isSelf}
                chat={c.chat}
                hideUsername={c.isSelf}
              />
            ))}
          </div>
        </div>

        <ChatProperties onSend={() => alert("send...")} />

        {/* STATES */}
        <StatesContainer
          isLoading={isLoading}
          isEmpty={!chat?.id}
          isError={error}
          emptyMsg="Choose chatroom from the left sidebar"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default Chatroom;
