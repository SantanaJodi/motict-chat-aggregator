import { ReplyIcon, TagIcon } from "@/public/icons/outline";
import clsx from "clsx";
import { formatRelative } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import React, { useMemo } from "react";
import { Avatar } from "../../atoms";
import { MessageAssignment, NotificationCount } from "../../atoms/tag";
import { IChatroomDetail } from "../../organism/chatroom/messages/types/MessagesTypes";

export enum SessionEnum {
  open = "open",
  expiring = "expiring",
  expired = "expired",
}

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
  const messageTime = useMemo(() => {
    const time = data.last_message.time;
    const formatRelativeLocale: any = {
      lastWeek: "'last' eeee',' kk:mm",
      yesterday: "'yesterday,' kk:mm",
      today: "'today,' kk:mm",
      tomorrow: "'tomorrow,' kk:mm",
      nextWeek: "eeee',' kk:mm",
      other: "PPP, kk:mm",
    };

    const locale = {
      // is t use ID locale or not?
      ...enGB,
      formatRelative: (token: any) => formatRelativeLocale[token],
    };

    return formatRelative(new Date(time), new Date(), { locale });
  }, [data.last_message.time]);

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
          <p className={clsx(textColor, "text-[12px]")}>{messageTime}</p>
        </div>

        <div className={flexBetween}>
          {data.unread_counter > 0 ? (
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
                {data.last_message?.text}
              </p>
            </div>
          ) : (
            <p className={clsx(textColor, textMsg, "font-bold max-w-[265px]")}>
              {data.last_message?.text}
            </p>
          )}

          {data.unread_counter > 0 && (
            <NotificationCount count={data.unread_counter} />
          )}
        </div>

        {data.tags?.length > 0 && (
          <div className={clsx(flexRow, "gap-1")}>
            <TagIcon width={16} height={16} fill="#8B9EB7" />
            <p
              className={clsx(textColor, "text-[12px] truncate max-w-[268px]")}
            >
              {data.tags[1]}
            </p>
          </div>
        )}

        <div
          className={clsx(
            "w-full",
            "flex flex-row",
            data.status === SessionEnum.open
              ? "justify-end"
              : "items-end justify-between"
          )}
        >
          {/* CHANGE BY MESSAGE TIME */}
          {data.status !== SessionEnum.open && (
            <p
              className={clsx("text-[12px] leading-[15.62px]", {
                "text-[#F0A22E]": data.status === SessionEnum.expiring,
                "text-[#CB5237]": data.status === SessionEnum.expired,
              })}
            >
              {data.status === SessionEnum.expiring
                ? "Expired in 59 minute(s)"
                : "Expired"}
            </p>
          )}
          <MessageAssignment type={data.assigned_agent_id} />
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
