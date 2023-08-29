"use client";

import { IConversationDetail } from "@/src/modules/chatroom";
import { useRouter } from "next/navigation";
import React from "react";
import { Avatar, Button, LogoChannel } from "../../atoms";

interface CustomerDetailProps {
  chatroomDetail?: IConversationDetail;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ chatroomDetail }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-2">
        <Avatar url={chatroomDetail?.sender?.from_user_photo || undefined} />
        <div className="flex flex-col items-start gap-1 w-full">
          <p className="text-[#0D0F12] font-bold leading[20.83px]">
            {chatroomDetail?.sender?.from_user_name}
          </p>
          <div className="flex flex-row items-center gap-1 w-full">
            <LogoChannel
              type={chatroomDetail?.sender.platform}
              width={16}
              height={16}
            />
            <div className="flex flex-row items-center gap-1 w-full">
              <p className="text-[#0D0F12] text-[14px] leading-[18.23px] mr-1">
                {chatroomDetail?.sender?.whatsapp?.whatsapp_id}
              </p>
              <Button
                variant="link"
                label="• Contact Detail"
                onClick={() => router.push("/contact/0")}
                color="#67768B"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Excluded in MVP phase */}
      {/* <div className="w-full flex flex-row items-center gap-2">
        <Button
          type="ghost"
          size="small"
          label="Merge Contact(s)"
          Icon={MergeIcon}
          onClick={() => alert("")}
          style="flex-1"
        />
        <Button
          type="subtle"
          size="small"
          label="Edit"
          Icon={PenIcon}
          onClick={() => alert("")}
          style="flex-1"
        />
      </div>
      <BlockButton /> */}
    </div>
  );
};

export default CustomerDetail;
