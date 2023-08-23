"use client";

import { SearchIcon } from "@/public/icons/outline";
import { StatusEnumTranslator } from "@/src/utils";
import { groupBy } from "lodash";
import React, { useCallback } from "react";
import { TextInput } from "../../atoms";
import { Filter } from "../../atoms/tag";
import {
  IChatroomDetail,
  StatusEnum,
} from "../../organism/chatroom/messages/types/MessagesTypes";
import { AxiosError } from "axios";

interface ChatHeaderProps {
  search?: string;
  onSearch: (value: string) => void;
  status?: string;
  onChangeStatus: (value: StatusEnum) => void;
  messages?: IChatroomDetail[];
  error?: AxiosError;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  search,
  onSearch,
  onChangeStatus,
  status,
  messages,
  error,
}) => {
  const getLabel = useCallback(
    (item: StatusEnum) => {
      if (item === StatusEnum.WAITING || item === StatusEnum.ASSIGNED_TO_ME) {
        const count = groupBy(messages, "status")[item]?.length;
        return (
          StatusEnumTranslator(item) +
          (count > 0 ? ` • ${count <= 99 ? count : "+99"}` : "")
        );
      }

      return StatusEnumTranslator(item);
    },
    [messages]
  );

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
        {!error?.code && (
          <TextInput
            Icon={SearchIcon}
            value={search || ""}
            onChange={onSearch}
            placeholder="Search username or phone number"
          />
        )}
      </div>
      {!error?.code && (
        <div className="flex flex-row items-center gap-2 overflow-x-auto  ml-4 no-scrollbar">
          {Object.values(StatusEnum).map((item) => (
            <Filter
              key={item}
              label={getLabel(item)}
              onClick={() => onChangeStatus(item)}
              isActive={status === item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
