import React from "react";

interface AgentManagementHeaderProps {}

const AgentManagementHeader: React.FC<AgentManagementHeaderProps> = () => {
  return (
    <div className="p-6">
      <h2 className="font-bold text-xl text-[#0D0F12] mb-6">
        Agent Management
      </h2>
      <span className="text-sm text-[#323944]">
        Create, edit and delete agents from this page. You can also assign
        channel to specific agent.
      </span>
    </div>
  );
};

export default AgentManagementHeader;
