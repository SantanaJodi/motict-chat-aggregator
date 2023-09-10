"use client";

import { SearchIcon } from "@/public/icons/outline";
import { AxiosError } from "axios";
import React from "react";
import { TextInput } from "../../atoms";

interface ChatHeaderProps {
  search?: string;
  onSearch: (value: string) => void;
  error?: AxiosError;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ search, onSearch, error }) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <h1 className="m-0 text-[24px] font-bold">Chatroom</h1>
      {!error?.code && (
        <TextInput
          Icon={SearchIcon}
          value={search || ""}
          onChange={onSearch}
          placeholder="Search username or phone number"
        />
      )}
    </div>
  );
};

export default ChatHeader;
