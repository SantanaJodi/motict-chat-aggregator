"use client";

import { HeadsetIcon } from "@/public/icons/outline";
import { Button } from "@/src/components/atoms";
import React, { useState } from "react";
import { AssignAgentModal } from "../../modal";

interface AgentProps {
  agent?: string;
  onAssign: (val: string) => void;
}

const Agent: React.FC<AgentProps> = ({ agent, onAssign }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);

  let bodyContent;

  if (!agent && !isEdit) {
    bodyContent = <p className="text-[#67768B]">No agent assigned</p>;
  }

  if (!agent) {
    bodyContent = (
      <Button
        type="link"
        label="+ Assign Agent"
        color="#C02716"
        onClick={() => setModal(true)}
      />
    );
  }

  if (agent) {
    bodyContent = (
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <HeadsetIcon width={16} height={16} fill="#67768B" />
          <p className="text-[#67768B] text-[14px]">{agent}</p>
        </div>
        <Button
          type="link"
          label="Change"
          color="#8B9EB7"
          onClick={() => setModal(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-row items-center w-full justify-between">
        <p className="font-bold">Agent</p>
      </div>
      {bodyContent}
      <AssignAgentModal
        defaultValue={agent}
        visible={modal}
        onAssign={onAssign}
        onClose={() => setModal(false)}
      />
    </div>
  );
};

export default Agent;
