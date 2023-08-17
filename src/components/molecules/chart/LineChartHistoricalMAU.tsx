"use client";

import { DownloadIcon, InfoIcon } from "@/public/icons/outline";
import { useReportContext } from "@/src/modules/report/context/ReportContext";
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { eachMonthOfInterval, format, subYears } from "date-fns";
import React, { useMemo } from "react";
import { IconButton, LineChart } from "../../atoms";
import { Bubble } from "../popup";

interface LineChartHistoricalMAUProps {}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChartHistoricalMAU: React.FC<LineChartHistoricalMAUProps> = () => {
  const { filterDate } = useReportContext();

  const labels = useMemo(() => {
    if (filterDate?.start) {
      return eachMonthOfInterval({
        end: filterDate.start,
        start: subYears(filterDate?.start, 1),
      })
        .map((month) => format(month, "MMM yyyy"))
        .slice(0, -1);
    }
  }, [filterDate]);

  const data = [0, 10, 60, 20, 100, 86, 120, 10, 90, 100, 180, 50];

  return (
    <div className="w-full border border-[#EEF5FF] rounded-lg relative">
      <div className="flex items-center gap-1 px-4 py-6">
        <p className="font-medium text-[#67768B]">Last 1 Year Historical MAU</p>
        <a id="last_year_MAU">
          <InfoIcon fill="#67768B" width={16} height={16} />
        </a>
      </div>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !top-2"
        color="#67768B"
        size="small"
      />
      <LineChart labels={labels} datasets={[{ data }]} />
      <Bubble
        anchor="last_year_MAU"
        text="Showing the historical number of active users on each period, starting from First Time App Active or last 1 year."
      />
    </div>
  );
};

export default LineChartHistoricalMAU;
