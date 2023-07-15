"use client";

import { ChatIcon } from "@/public/icons/outline";
import React, { useEffect, useState } from "react";
import { ChatHeader, MessageCard } from "../../molecules";
import StatesContainer from "../StatesContainer";
import { DUMMY_CHAT } from "./dummy";

interface MessagesProps {
  selectedChatId: number | undefined;
  onSelectChat: (chatId: number) => void;
}

const Messages: React.FC<MessagesProps> = ({
  onSelectChat,
  selectedChatId,
}) => {
  const [search, setSearch] = useState("");
  const [chatroom, setChatroom] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [msgStatus, setMsgStatus] = useState("All");
  const [noResult, setNoResult] = useState(false);

  const handleChangeStatus = (value: string) => {
    setIsLoading(true);
    setMsgStatus(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(false);
    setChatroom(DUMMY_CHAT);
  }, []);

  return (
    <div className="w-[375px] h-screen bg-white py-6  border-r border-[#EEF5FF]  overflow-hidden flex-shrink-0">
      <ChatHeader
        search={search}
        onSearch={(val) => setSearch(val)}
        hideInput={error}
        status={msgStatus}
        onChangeStatus={handleChangeStatus}
      />
      <div className=" h-full flex flex-col items-start justify-start mt-4  pb-[150px] relative">
        <div className="h-full overflow-y-auto">
          {chatroom.map((c: any) => (
            <MessageCard
              key={c.id}
              data={c}
              onSelectChat={onSelectChat}
              isSelectedChat={c.id === selectedChatId}
            />
          ))}
        </div>

        {/* STATE */}
        <StatesContainer
          isLoading={isLoading}
          isEmpty={chatroom.length === 0}
          isError={error}
          noResult={noResult}
          emptyMsg="You have no chatroom"
          onReload={() => alert("reload")}
          EmptyIcon={ChatIcon}
        />
      </div>
    </div>
  );
};

export default Messages;
