import { ReplyIcon, TagIcon } from "@/public/icons/outline";
import { getCustomDate } from "@/src/utils";
import clsx from "clsx";
import { differenceInHours } from "date-fns";
import React from "react";
import { Avatar, ChatStatus } from "../../atoms";
import { MessageAssignment, NotificationCount } from "../../atoms/tag";
import { IChatroomDetail } from "../../organism/chatroom/messages/types/MessagesTypes";

interface MessageCardProps {
  data: IChatroomDetail;
  isSelectedChat?: boolean;
  onSelectChat: (chatroomDetail: IChatroomDetail) => void;
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
  const diffHours = differenceInHours(new Date(data.expire_at), new Date());
  const unreadCount = data.unread_counter <= 99 ? data.unread_counter : "+99";

  return (
    <div
      className={
        "flex flex-row items-start gap-2 bg-white px-4 py-6 w-full relative hover:bg-[#EEF5FF] cursor-pointer"
      }
      onClick={() => onSelectChat(data)}
    >
      {/* AVATAR */}
      <Avatar
        channel={data.platform}
        url={data.from_user_photo || (null as any)}
      />

      {/* CONTENT */}
      <div className="flex flex-col items-start gap-1  w-full">
        <div className={flexBetween} style={{ alignItems: "flex-start" }}>
          <p className="font-bold text-[#0D0F12] leading-[20.83px] truncate max-w-[150px]">
            {data.from_user_name}
          </p>
          <p className={clsx(textColor, "text-[12px]")}>
            {getCustomDate(data.last_message.time)}
          </p>
        </div>

        {/* LAST MESSAGE */}
        <div className={flexBetween}>
          <p
            className={clsx(
              textColor,
              textMsg,
              flexRow,
              "gap-1 max-w-[265px]",
              !data.unread_counter ? "font-normal" : "font-bold"
            )}
          >
            {!data.unread_counter && (
              <ReplyIcon
                width={16}
                height={16}
                fill="#67768B"
                className="flex-shrink-0 mb-[1px]"
              />
            )}
            {data.last_message?.text}
          </p>
          {data.unread_counter > 0 && <NotificationCount count={unreadCount} />}
        </div>

        {/* TAGS */}
        {data.tags?.length > 0 && (
          <div className={clsx(flexRow, "gap-1")}>
            <TagIcon width={16} height={16} fill="#8B9EB7" />
            <p
              className={clsx(textColor, "text-[12px] truncate max-w-[268px]")}
            >
              {data.tags.map((t) => t.name).join(",")}
            </p>
          </div>
        )}

        <div
          className={clsx(
            "w-full",
            "flex flex-row",
            diffHours >= 12 ? "justify-end" : "items-end justify-between"
          )}
        >
          <ChatStatus expireAt={data.expire_at} />
          {/* TODO: BE response not clear what data to use for this status */}
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
