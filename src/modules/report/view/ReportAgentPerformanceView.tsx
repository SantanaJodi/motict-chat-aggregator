"use client";

import {
  ChatTime,
  FailedToLoad,
  LineChartDailyConversation,
  Loading,
  TableAverageFirstResponseTimePerAgent,
  TableAverageResolveTimePerAgent,
  TableAverageResponseTimePerAgent,
  TableNewConversationPerAgent,
  TableResolvedConversationPerAgent,
} from "@/src/components";
import React from "react";
import ReportAgentPerformanceViewModel from "../model/ReportAgentPerformanceViewModel";

interface ReportAgentPerformanceViewProps {}

const ReportAgentPerformanceView: React.FC<
  ReportAgentPerformanceViewProps
> = () => {
  const { data, isError, isLoading, refetch } =
    ReportAgentPerformanceViewModel();

  if (isLoading || isError) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        {isLoading ? <Loading /> : <FailedToLoad onReload={refetch} />}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 p-6">
      <ChatTime time="Conversation per Agent" />
      <div className="grid grid-cols-2 gap-4">
        <TableNewConversationPerAgent data={data?.new_conversation_per_agent} />
        <TableResolvedConversationPerAgent
          data={data?.resolved_conversation_per_agent}
        />
      </div>
      <ChatTime time="Daily Conversation per Agent" />
      <div>
        <LineChartDailyConversation
          title="Daily New Conversations per Agent"
          anchor="new_daily"
          text="Showing the number of new conversation on each agent daily."
        />
      </div>
      <div>
        <LineChartDailyConversation
          title="Daily Resolved Conversations per Agent"
          anchor="resolved_daily"
          text="Showing the number of resolved conversation on each agent daily."
        />
      </div>
      <ChatTime time="Miscellaneous" />
      <div className="grid grid-cols-2 gap-4">
        <TableAverageResolveTimePerAgent
          data={data?.average_resolve_time_per_agent}
        />
        <TableAverageResponseTimePerAgent
          data={data?.average_resolve_time_per_agent_week}
        />
      </div>
      <div className="w-full pb-6">
        <TableAverageFirstResponseTimePerAgent
          data={data?.average_first_response_time_per_agent}
        />
      </div>
    </div>
  );
};

export default ReportAgentPerformanceView;
