/* eslint-disable react/no-unescaped-entities */
"use client";
import { TableAgentList } from "@/src/components";
import React from "react";

interface AgentManagementViewProps {}

const AgentManagementView: React.FC<AgentManagementViewProps> = () => {
  return (
    <div className="w-full bg-white overflow-y-auto relative">
      <div className="p-6">
        <h2 className="font-bold text-xl text-[#0D0F12] mb-6">
          Agent Management
        </h2>
        <span className="text-sm text-[#323944]">
          Create, edit and delete agents from this page. You can also assign
          channel to specific agent.
        </span>
      </div>
      <div className="p-6 flex flex-col gap-8">
        <TableAgentList />
      </div>
    </div>
  );
};

export default AgentManagementView;
