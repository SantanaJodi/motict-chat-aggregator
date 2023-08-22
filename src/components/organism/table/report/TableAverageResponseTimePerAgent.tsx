"use client";
import { IAgentDurationConversation } from "@/src/modules/report/types/report-agent-performance-type";
import { getMinuteSecond } from "@/src/utils";
import { ColumnDef } from "@tanstack/react-table";
import TableReportContainer from "./ReportTableContainer";

interface TableAverageResponseTimePerAgentProps {
  data?: IAgentDurationConversation[];
}

const TableAverageResponseTimePerAgent: React.FC<
  TableAverageResponseTimePerAgentProps
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
      title="Average Response Time per Agent in the Last 7 Days"
      anchor="TableAverageResponseTimePerAgent"
      text=""
      emptyMsg="No result"
      columns={columns}
      data={data}
      hideRowsSelection
      className={{ key: "duration", classes: "text-end" }}
    />
  );
};

export default TableAverageResponseTimePerAgent;
