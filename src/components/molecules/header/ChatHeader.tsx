"use client";

import { SearchIcon } from "@/public/icons/outline";
import React from "react";
import { TextInput } from "../../atoms";
import { Filter } from "../../atoms/tag";

interface ChatHeaderProps {
  search: string;
  onSearch: (value: string) => void;
  status: string;
  onChangeStatus: (value: string) => void;
  hideInput?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  search,
  onSearch,
  onChangeStatus,
  status,
  hideInput,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="m-0 text-[24px] font-bold">Chatroom</h1>
          {/* <div className="flex flex-row items-center gap-2">
            <IconButton Icon={ResolveIcon} onClick={() => alert("")} />
            <div className="relative">
              <IconButton Icon={FilterIcon} onClick={() => alert("")} />
              <div className="absolute right-0 top-0">
                <NotificationCount count={5} />
              </div>
            </div>
          </div> */}
        </div>
        {!hideInput && (
          <TextInput
            Icon={SearchIcon}
            value={search}
            onChange={onSearch}
            placeholder="Search chatroom or conversation"
          />
        )}
      </div>
      <div className="flex flex-row items-center gap-2 overflow-x-auto  ml-4 no-scrollbar">
        {[
          "All",
          "Waiting • 32",
          "Assigned to Me • 12",
          "Assigned",
          "Resolved",
        ].map((item) => (
          <Filter
            key={item}
            label={item}
            onClick={() => onChangeStatus(item)}
            isActive={status === item}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatHeader;
