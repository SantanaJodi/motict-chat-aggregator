"use client";
import { IAgentDurationConversation } from "@/src/modules/report/types/report-agent-performance-type";
import { getMinuteSecond } from "@/src/utils";
import { ColumnDef } from "@tanstack/react-table";
import TableReportContainer from "./ReportTableContainer";

interface TableAverageResolveTimePerAgentProps {
  data?: IAgentDurationConversation[];
}

const TableAverageResolveTimePerAgent: React.FC<
  TableAverageResolveTimePerAgentProps
> = ({ data }) => {
  const columns: ColumnDef<IAgentDurationConversation>[] = [
    {
      accessorKey: "agent",
      header: "Agent",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "duration",
      header: "Duration",
      footer: (props) => props.column.id,
      cell: (props) => getMinuteSecond(props.getValue() as number),
    },
  ];

  return (
    <TableReportContainer
      title="Average Resolve Time per Agent"
      anchor="TableAverageResolveTimePerAgent"
      text=""
      emptyMsg="No result"
      columns={columns}
      data={data}
      hideRowsSelection
      className={{ key: "duration", classes: "text-end" }}
    />
  );
};

export default TableAverageResolveTimePerAgent;
