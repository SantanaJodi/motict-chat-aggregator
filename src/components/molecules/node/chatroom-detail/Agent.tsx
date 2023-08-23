"use client";

import { HeadsetIcon } from "@/public/icons/outline";
import { Button } from "@/src/components/atoms";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import React from "react";

interface AgentProps {}

const Agent: React.FC<AgentProps> = ({}) => {
  const { setAgentModal, conversationDetail } = useChatroomContext();

  // TODO: check the user is admin or agent
  const isAdmin = true;
  const isExpired = conversationDetail?.session.text === "Expired";

  let bodyContent;

  // https://tscreative.atlassian.net/browse/CA-20
  if (!conversationDetail?.agents && isAdmin && isExpired) {
    bodyContent = <p className="text-[#67768B]">No agent assigned</p>;
  }

  if (!conversationDetail?.agents && isAdmin) {
    bodyContent = (
      <Button
        variant="link"
        label="+ Assign Agent"
        color="#C02716"
        onClick={() => setAgentModal(true)}
      />
    );
  }

  if (conversationDetail?.agents) {
    bodyContent = (
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <HeadsetIcon width={16} height={16} fill="#67768B" />
          <p className="text-[#67768B] text-[14px]">
            {conversationDetail?.agents.map((item) => item.name).join(", ")}
          </p>
        </div>
        {isAdmin && (
          <Button
            variant="link"
            label="Change"
            color="#8B9EB7"
            onClick={() => setAgentModal(true)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-row items-center w-full justify-between">
        <p className="font-bold">Agent</p>
      </div>
      {bodyContent}
    </div>
  );
};

export default Agent;
