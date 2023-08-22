"use client";
import { useQuery } from "react-query";
import { IReportGeneral } from "../types/report-general-type";
import dummyReport from "./dummy-report-general.json";

const ReportGeneralViewModel = () => {
  const { data, isLoading, refetch, isError } = useQuery<IReportGeneral>({
    queryKey: ["report"],
    queryFn: () => dummyReport,
  });

  return { data, isLoading, refetch, isError };
};

export default ReportGeneralViewModel;
