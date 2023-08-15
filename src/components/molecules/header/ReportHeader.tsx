"use client";
import { useReportContext } from "@/src/modules/report/context/ReportContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { DatePicker } from "../../atoms";
import { TimezoneSelect } from "../../atoms/input/select";
import { Filter } from "../../atoms/tag";

interface ReportHeaderProps {}

const TABS = [
  {
    label: "General",
    path: "/report",
  },
  {
    label: "Agent Performance",
    path: "/report/agent-performance",
  },
];

const ReportHeader: React.FC<ReportHeaderProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { filterDate, filterTimezone, handleFilterTimezone, handleFilterDate } =
    useReportContext();

  return (
    <div className="w-full bg-white border-b border-[#EEF5FF] p-6 flex flex-col gap-6">
      <h2 className="font-bold text-xl text-[#0D0F12]">Report</h2>
      <div className="w-full flex items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-4">
          {TABS.map((item) => (
            <Filter
              key={item.label}
              label={item.label}
              isActive={item.path === pathname}
              onClick={() => router.push(item.path)}
            />
          ))}
        </div>
        <div className="flex flex-row items-center gap-4 flex-shrink-0 ">
          <TimezoneSelect
            label="Timezone From UTC"
            value={filterTimezone}
            onChange={handleFilterTimezone}
          />
          <DatePicker
            label="Date Filter"
            defaultValue={filterDate}
            onChange={handleFilterDate}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
