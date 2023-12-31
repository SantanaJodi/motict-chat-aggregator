"use client";

import { DoubleCheckIcon, RefreshIcon } from "@/public/icons/outline";
import CheckIcon from "@/public/icons/outline/CheckIcon";
import { Button } from "@/src/components/atoms";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useMemo } from "react";
import { ClipLoader } from "react-spinners";
import FileAttachment from "./FileAttachment";
import ImagesAttachment from "./ImagesAttachment";
import VideoAttachment from "./VideoAttachment";

type IChat = {
  username: string;
  message?: any;
  timestamp: string;
  images?: string | string[] | null;
  video?: string | null;
  file?: any;
};

interface ChatCardProps {
  isSelf?: boolean;
  status: string;
  chat: IChat;
  hideUsername?: boolean;
  isUploading?: boolean;
}

const ChatCard: React.FC<ChatCardProps> = ({
  status,
  isSelf,
  chat,
  hideUsername,
  isUploading,
}) => {
  const isSelfClasses = isSelf ? "items-end" : "items-start";

  const RenderMedia = useMemo(() => {
    if (chat.images) {
      return <ImagesAttachment urls={chat.images} isLoading={isUploading} />;
    }
    if (chat.video) {
      return <VideoAttachment url={chat.video} />;
    }

    if (chat.file) {
      return <FileAttachment fileName="File Name.pdf" size="10" />;
    }
  }, [chat, isUploading]);

  const RenderMessage = chat.message && (
    <div
      className={clsx("p-4 rounded-lg", {
        "bg-[#323944] text-white  rounded-tr-none": isSelf,
        "rounded-tl-none bg-[#EEF5FF] text-[#0D0F12]": !isSelf,
      })}
    >
      <p className="">{chat.message}</p>
    </div>
  );

  // TODO: change this status case based on what is BE response
  const RenderStatusIndicator = useMemo(() => {
    const unreadColor = "#8B9EB7";
    const props = { width: 16, height: 16 };

    if (status === "loadin" || isUploading) {
      return <ClipLoader color="#C02716" size={16} />;
    }

    switch (status) {
      case "sent":
        return <CheckIcon fill={unreadColor} {...props} />;
      case "delivered":
        return <DoubleCheckIcon fill={unreadColor} {...props} />;
      case "read":
        return <DoubleCheckIcon fill="#4ABF71" {...props} />;
      case "failed":
        return (
          <p className="text-[#C02716] text-[14px] leading-[18.23px]">
            Failed to send
          </p>
        );
    }
  }, [status, isUploading]);

  return (
    <div className={clsx("flex flex-col gap-2", isSelfClasses)}>
      {!hideUsername && (
        <p className="text-[14px] text-[#8B9EB7]">{chat.username}</p>
      )}

      {RenderMedia}

      <div
        className={clsx(
          "flex flex-row items-end gap-[10px]",
          isSelf && "flex-row-reverse"
        )}
      >
        {RenderMessage}
        <div className={clsx("flex flex-col", isSelfClasses)}>
          {RenderStatusIndicator}
          {status === "failed" ? (
            <Button
              variant="link"
              label="Retry"
              Icon={RefreshIcon}
              onClick={() => alert("retry..")}
              color="#8B9EB7"
            />
          ) : (
            <p className="text-[12px] text-[#8B9EB7] leading-[15.62px]">
              {format(new Date(chat.timestamp), "HH:mm")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
