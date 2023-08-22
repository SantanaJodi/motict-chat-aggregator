"use client";
import { IAgentTotalConversation } from "@/src/modules/report/types/report-agent-performance-type";
import { ColumnDef } from "@tanstack/react-table";
import TableReportContainer from "./ReportTableContainer";

interface TableNewConversationPerAgentProps {
  data?: IAgentTotalConversation[];
}

const TableNewConversationPerAgent: React.FC<
  TableNewConversationPerAgentProps
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
      title="New Conversation per Agent"
      anchor="TableNewConversationPerAgent"
      text="Showing the number of new conversation that are assigned to each agent (based on when the agent is assigned to the conversation)."
      emptyMsg="No result"
      columns={columns}
      data={data}
      hideRowsSelection
      className={{ key: "total", classes: "text-end" }}
    />
  );
};

export default TableNewConversationPerAgent;
