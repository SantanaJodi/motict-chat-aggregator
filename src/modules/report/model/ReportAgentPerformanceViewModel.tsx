"use client";
import { useQuery } from "react-query";
import { IReportAgentPerformance } from "../types/report-agent-performance-type";
import dummy from "./dummy-report-agent-performance.json";

const ReportAgentPerformanceViewModel = () => {
  const { data, isLoading, refetch, isError } =
    useQuery<IReportAgentPerformance>({
      queryKey: ["report"],
      queryFn: () => dummy,
    });

  return { data, isLoading, refetch, isError };
};

export default ReportAgentPerformanceViewModel;
