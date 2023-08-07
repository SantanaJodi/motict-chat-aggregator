/* eslint-disable react/no-unescaped-entities */
"use client";
import { AgentManagementHeader, TableAgentList } from "@/src/components";
import React from "react";

interface AgentManagementViewProps {}

const AgentManagementView: React.FC<AgentManagementViewProps> = () => {
  return (
    <div className="w-full bg-white overflow-y-auto relative">
      <AgentManagementHeader />
      <div className="p-6 flex flex-col gap-8">
        <TableAgentList />
      </div>
    </div>
  );
};

export default AgentManagementView;
