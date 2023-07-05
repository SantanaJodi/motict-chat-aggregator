"use client";

import { ChatIcon, SearchIcon } from "@/public/icons/outline";
import React, { useState } from "react";
import { EmptyState, Loading } from "../atoms";
import { ChatCard, FailedToLoad, Header } from "../moleculs/messages";
import { DUMMY_CHAT } from "./dummy";

interface MessagesProps {}

const Messages: React.FC<MessagesProps> = () => {
  const [search, setSearch] = useState("");
  const [chatroom, setChatroom] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [msgStatus, setMsgStatus] = useState("All");
  const [noResult, setNoResult] = useState(false);
  const [selectedChat, setSelectedChat] = useState<number>();

  const handleChangeStatus = (value: string) => {
    setIsLoading(true);
    setMsgStatus(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="w-[375px] h-screen bg-white py-6  border-r border-[#EEF5FF] relative overflow-hidden">
      <Header
        search={search}
        onSearch={(val) => setSearch(val)}
        hideInput={isLoading || error}
        status={msgStatus}
        onChangeStatus={handleChangeStatus}
      />
      <div className=" h-full flex flex-col items-start justify-start mt-4 overflow-y-auto pb-[150px]">
        {DUMMY_CHAT.map((c) => (
          <ChatCard
            key={c.id}
            data={c}
            onSelectChat={(id) => setSelectedChat(id)}
            isSelectedChat={c.id === selectedChat}
          />
        ))}
      </div>

      {/* STATE */}
      <div className="absolute top-1/2 left-[35%] bg-white">
        {isLoading ? (
          <Loading />
        ) : chatroom.length === 0 ? (
          <EmptyState Icon={ChatIcon} title="You have no chatroom" />
        ) : noResult ? (
          <EmptyState Icon={SearchIcon} title="No result" />
        ) : (
          error && <FailedToLoad onReload={() => alert("Reloading...")} />
        )}
      </div>
    </div>
  );
};

export default Messages;
