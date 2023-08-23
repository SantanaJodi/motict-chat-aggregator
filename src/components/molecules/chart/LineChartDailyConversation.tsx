"use client";

import { DownloadIcon, InfoIcon } from "@/public/icons/outline";
import { useReportContext } from "@/src/modules/report/context/ReportContext";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { eachMonthOfInterval, format, subYears } from "date-fns";
import React, { useMemo } from "react";
import { IconButton, LineChart, dailyConversationTooltip } from "../../atoms";
import { Bubble, BubbleProps } from "../popup";

interface LineChartDailyConversationProps extends BubbleProps {
  title: string;
  onDownload?: () => void;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChartDailyConversation: React.FC<LineChartDailyConversationProps> = ({
  title,
  onDownload,
  anchor,
  text,
}) => {
  const { filterDate } = useReportContext();

  const labels = useMemo(() => {
    if (filterDate?.start) {
      return eachMonthOfInterval({
        end: filterDate.start,
        start: subYears(filterDate?.start, 1),
      })
        .map((month) => format(month, "dd/MM/yyyy"))
        .slice(0, -1);
    }
  }, [filterDate]);

  return (
    <div className="w-full border border-[#EEF5FF] rounded-lg relative">
      <div className="flex items-center gap-1 px-4 py-6">
        <p className="font-medium text-[#67768B]">{title}</p>
        <a id="daily_conversation_chart">
          <InfoIcon fill="#67768B" width={16} height={16} />
        </a>
      </div>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !top-2"
        color="#67768B"
        size="small"
        onClick={onDownload}
      />
      <div>
        <LineChart
          labels={labels}
          showLegend
          tooltip={dailyConversationTooltip}
          datasets={[
            {
              label: "Kirk Pollich",
              data: [0, 10, 60, 20, 100, 86, 120, 10, 90, 100, 180, 50],
              borderColor: "#C02716",
              pointBackgroundColor: "#C02716",
            },
            {
              label: "Elena Schultz",
              data: [0, 13, 45, 37, 112, 81, 130, 35, 76, 20, 82, 10],
              borderColor: "#F18080",
              pointBackgroundColor: "#F18080",
            },
            {
              label: "Pauline Strosin",
              data: [14, 19, 68, 42, 114, 70, 10, 60, 34, 63, 164, 86],
              borderColor: "#F0A22E",
              pointBackgroundColor: "#F0A22E",
            },
            {
              label: "Stephanie Cassin",
              data: [180, 160, 98, 102, 123, 130, 80, 60, 10, 20, 100, 40],
              borderColor: "#4ABF71",
              pointBackgroundColor: "#4ABF71",
            },
          ]}
        />
      </div>
      <Bubble anchor={anchor} text={text} />
    </div>
  );
};

export default LineChartDailyConversation;
