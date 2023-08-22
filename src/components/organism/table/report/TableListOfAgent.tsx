"use client";
import { ChartIcon, DownloadIcon, InfoIcon } from "@/public/icons/outline";
import {
  AgentStatusEnum,
  IListOfAgents,
} from "@/src/modules/report/types/report-general-type";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import { useMemo } from "react";
import { EmptyState, IconButton } from "../../../atoms";
import Table from "../Table";

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

  const listOfAgents = useMemo(() => {
    return data || ([] as IListOfAgents[]);
  }, [data]);

  const table = useReactTable({
    data: listOfAgents,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full border border-[#EEF5FF] rounded-lg relative">
      <div className="flex items-center gap-1 px-4 py-6">
        <p className="font-medium text-[#67768B]">List Of Agents</p>
        <InfoIcon fill="#67768B" width={16} height={16} />
      </div>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !top-2"
        color="#67768B"
        size="small"
      />
      {!listOfAgents.length ? (
        <div className="pb-6">
          <EmptyState Icon={ChartIcon} title="You don’t have any list of MAU" />
        </div>
      ) : (
        <Table
          data={listOfAgents}
          table={table}
          className={{ key: "conversation", classes: "text-right" }}
          hideRowsSelection
        />
      )}
    </div>
  );
};

export default TableListOfAgent;
