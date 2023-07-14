import { ReplyIcon, TagIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import { Avatar } from "../../atoms";
import {
  MessageAssignment,
  MessageAssignmentEnum,
  NotificationCount,
} from "../../atoms/tag";

export enum SessionEnum {
  open = 0,
  expiring = 1,
  expired = 2,
}

interface IMessage {
  id: number;
  name: string;
  date: string;
  lastChat: string;
  unreadChatCount: number;
  tag: string | null;
  status: MessageAssignmentEnum;
  session: SessionEnum;
  isReplied?: boolean;
}

interface MessageCardProps {
  data: IMessage;
  isSelectedChat?: boolean;
  onSelectChat: (id: number) => void;
}

const flexRow = "flex flex-row items-center";
const flexBetween = clsx(flexRow, "justify-between w-full");
const textColor = "text-[#67768B]";
const textMsg = "leading-[18px] text-[14px] truncate";

const MessageCard: React.FC<MessageCardProps> = ({
  data,
  onSelectChat,
  isSelectedChat,
}) => {
  return (
    <div
      className={
        "flex flex-row items-start gap-2 bg-white px-4 py-6 w-full relative hover:bg-[#EEF5FF] cursor-pointer"
      }
      onClick={() => onSelectChat(data.id)}
    >
      {/* AVATAR */}
      <Avatar
        withChannel
        url="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
      />

      {/* CONTENT */}
      <div className="flex flex-col items-start gap-1  w-full">
        <div className={flexBetween} style={{ alignItems: "flex-start" }}>
          <p className="font-bold text-[#0D0F12] leading-[20.83px] truncate max-w-[150px]">
            {data.name}
          </p>
          <p className={clsx(textColor, "text-[12px]")}>{data.date}</p>
        </div>

        <div className={flexBetween}>
          {data.isReplied ? (
            <div className={clsx(flexRow, "gap-1 w-full")}>
              <ReplyIcon
                width={16}
                height={16}
                fill="#67768B"
                className="flex-shrink-0 mb-[1px]"
              />
              <p
                className={clsx(
                  textColor,
                  textMsg,
                  "font-normal max-w-[268px]"
                )}
              >
                {data.lastChat}
              </p>
            </div>
          ) : (
            <p className={clsx(textColor, textMsg, "font-bold max-w-[265px]")}>
              {data.lastChat}
            </p>
          )}

          {!data.isReplied && <NotificationCount count={1} />}
        </div>

        {data.tag && (
          <div className={clsx(flexRow, "gap-1")}>
            <TagIcon width={16} height={16} fill="#8B9EB7" />
            <p
              className={clsx(textColor, "text-[12px] truncate max-w-[268px]")}
            >
              {data.tag}
            </p>
          </div>
        )}

        <div
          className={clsx(
            "w-full",
            "flex flex-row",
            data.session === SessionEnum.open
              ? "justify-end"
              : "items-end justify-between"
          )}
        >
          {/* CHANGE BY MESSAGE TIME */}
          {data.session !== SessionEnum.open && (
            <p
              className={clsx("text-[12px] leading-[15.62px]", {
                "text-[#F0A22E]": data.session === SessionEnum.expiring,
                "text-[#CB5237]": data.session === SessionEnum.expired,
              })}
            >
              {data.session === SessionEnum.expiring
                ? "Expired in 59 minute(s)"
                : "Expired"}
            </p>
          )}
          <MessageAssignment type={data.status} />
        </div>
      </div>

      {/* ACTIVE INDICATOR */}
      {isSelectedChat && (
        <div className="absolute top-0 right-0 border-r-2 border-[#C02716] w-2/4 h-full bg-gradient-to-l from-[#C027161A]" />
      )}
    </div>
  );
};

export default MessageCard;
