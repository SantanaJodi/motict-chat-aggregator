"use client";

import { HeadsetIcon } from "@/public/icons/outline";
import React from "react";
import { Avatar, Button } from "../../atoms";
import { IHeaderMessages } from "../../organism/chatroom/chatroom/types/ChatroomTypes";
import { IChatroomDetail } from "../../organism/chatroom/messages/types/MessagesTypes";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";

interface CustomerDataProps {
  header?: IConversationDetail;
}

const CustomerData: React.FC<CustomerDataProps> = ({ header }) => {
  const agents = (payload?: IConversationDetail) => {
    let value = "";

    if (payload && payload?.agents.length > 1) {
      value =
        payload.agents[0].name + ` and ${payload.agents.length - 1} more +`;
    } else if (payload && payload.agents.length === 1) {
      value = payload.agents[0].name;
    }

    return value;
  };
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <Avatar withChannel url={header?.sender.from_user_photo || undefined} />
      <div className="flex flex-col items-start gap-1 w-full">
        <p className="text-[#0D0F12] font-bold leading[20.83px]">
          {header?.sender.from_user_name}
        </p>
        <div className="flex flex-row items-center gap-1 w-full">
          <HeadsetIcon
            width={16}
            height={16}
            fill="#67768B"
            className="flex-shrink-0"
          />
        </div>

        {header && header.agents.length > 0 ? (
          <div className="flex flex-row items-center gap-1 w-full">
            <p className="text-[#67768B] text-[14px] leading-[18.23px] mr-1">
              {/* TODO ALVIN: show "and {number} more" if agent > 2 */}
              {/* ex: Darmadi Setyo, and 2 more */}
              {agents(header)}
            </p>
            <Button
              variant="link"
              label="• Change"
              onClick={() => alert("change")}
              color="#67768B"
            />
          </div>
        ) : (
          <Button
            variant="link"
            label="+ Assign Agent"
            onClick={() => alert("add")}
            color="#C02716"
          />
        )}
      </div>
    </div>
  );
};

export default CustomerData;
