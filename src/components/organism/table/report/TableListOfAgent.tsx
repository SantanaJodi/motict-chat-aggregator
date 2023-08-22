"use client";
import {
  AgentStatusEnum,
  IListOfAgents,
} from "@/src/modules/report/types/report-general-type";
import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import TableReportContainer from "./ReportTableContainer";

interface TableListOfAgentProps {
  data?: IListOfAgents[];
}

const TableListOfAgent: React.FC<TableListOfAgentProps> = ({ data }) => {
  const columns: ColumnDef<IListOfAgents>[] = [
    {
      accessorKey: "name",
      header: "Name",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "status",
      header: "Status",
      footer: (props) => props.column.id,
      cell: (props) => {
        const isOnline = props.getValue() === AgentStatusEnum.ONLINE;
        return (
          <div
            className={clsx(
              "px-1 py-0.5 rounded-full",
              isOnline
                ? "bg-[#4ABF71] text-[#fff]"
                : "border border-[#8B9EB7] text-[#8B9EB7]"
            )}
          >
            {isOnline ? "Online" : "Offline"}
          </div>
        );
      },
    },
    {
      accessorKey: "lastLogin",
      header: "Last Log In",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "conversation",
      header: "On Going Conversation",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
  ];

  return (
    <TableReportContainer
      title="List Of Agents"
      anchor="list_agents"
      text="Showing List of status users."
      emptyMsg="You don’t have any list of MAU"
      columns={columns}
      data={data}
      hideRowsSelection
      className={{ key: "conversation", classes: "text-end" }}
    />
  );
};

export default TableListOfAgent;
