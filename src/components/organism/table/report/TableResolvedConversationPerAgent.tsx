"use client";
import { IAgentTotalConversation } from "@/src/modules/report/types/report-agent-performance-type";
import { ColumnDef } from "@tanstack/react-table";
import TableReportContainer from "./ReportTableContainer";

interface TableResolvedConversationPerAgentProps {
  data?: IAgentTotalConversation[];
}

const TableResolvedConversationPerAgent: React.FC<
  TableResolvedConversationPerAgentProps
> = ({ data }) => {
  const columns: ColumnDef<IAgentTotalConversation>[] = [
    {
      accessorKey: "agent",
      header: "Agent",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "total",
      header: "Total Conversation",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
  ];

  return (
    <TableReportContainer
      title="Resolved Conversations per Agent"
      anchor="TableResolvedConversationPerAgent"
      text="Showing the number of resolved conversation by each agent (based on when the conversation is resolved)."
      emptyMsg="No result"
      columns={columns}
      data={data}
      hideRowsSelection
      className={{ key: "total", classes: "text-end" }}
    />
  );
};

export default TableResolvedConversationPerAgent;
