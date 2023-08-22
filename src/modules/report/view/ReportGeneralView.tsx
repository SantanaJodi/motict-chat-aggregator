"use client";
import {
  FailedToLoad,
  LineChartHistoricalMAU,
  Loading,
  NumberReportCard,
  TableListMAU,
  TableListOfAgent,
} from "@/src/components";
import { getMinuteSecond } from "@/src/utils";
import React from "react";
import ReportGeneralViewModel from "../model/ReportGeneralViewModel";

interface ReportGeneralViewProps {}

const ReportGeneralView: React.FC<ReportGeneralViewProps> = () => {
  const { data, isError, isLoading, refetch } = ReportGeneralViewModel();

  if (isLoading || isError) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        {isLoading ? <Loading /> : <FailedToLoad onReload={refetch} />}
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col gap-4 p-6">
      <div className="grid grid-cols-4 gap-4">
        <NumberReportCard
          title="Total Conversation"
          value={data?.total_conversation}
          anchor="total_conversation"
          text="Showing the number of all conversation."
        />
        <NumberReportCard
          title="Total Unserved Conversation"
          value={data?.total_unserved_conversation}
          anchor="total_unserved"
          text="Showing the number of all on going conversations that is not yet assigned to an agent."
        />
        <NumberReportCard
          title="Total Served Conversation"
          value={data?.total_served_conversation}
          anchor="total_served"
          text="Showing the number of all on going rooms that is assigned to an agent but not yet being resolved."
        />
        <NumberReportCard
          title="Total Resolved Conversation"
          value={data?.total_resolved_conversataion}
          anchor="total_resolved"
          text="Showing the number of all conversations that have been marked as resolved."
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <TableListOfAgent data={data?.list_of_agents} />
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <NumberReportCard
            title="Agent First Response Time"
            value={getMinuteSecond(data?.agent_first_response_time)}
            anchor="response_time"
            text="Showing the average agent’s response timeto a newly assigned conversation (in the past 30 days)."
          />
          <NumberReportCard
            title="Agent and Supervisor"
            value={data?.agent_and_supervisor}
            anchor="agent_supervisor"
            text="Showing the the number of registered agent and supervisor"
          />
          <NumberReportCard
            title="Monthly Active User"
            value={data?.monthly_active_user}
            anchor="monthly_active"
            text="Showing the number of active users in the current period. Active users from eachperiod are calculated from date-to-date starting from enrollment date."
          />
        </div>
      </div>
      <div className="w-full">
        <LineChartHistoricalMAU />
      </div>
      <div className="w-full pb-6">
        <TableListMAU data={data?.list_mau} />
      </div>
    </div>
  );
};

export default ReportGeneralView;
