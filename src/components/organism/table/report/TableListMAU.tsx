"use client";
import { ChartIcon, DownloadIcon, InfoIcon } from "@/public/icons/outline";
import { EmptyState, IconButton } from "@/src/components/atoms";
import { Bubble } from "@/src/components/molecules/popup";
import {
  IMau,
  UserTypeEnum,
} from "@/src/modules/report/types/report-general-type";
import { UsertTypeEnumTranslator } from "@/src/utils";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import Table from "../Table";

interface TableListMAUProps {
  data?: IMau[];
}

const TableListMAU: React.FC<TableListMAUProps> = ({ data }) => {
  const columns: ColumnDef<IMau>[] = [
    {
      accessorKey: "last_active",
      header: "Last Active Date",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "user_id",
      header: "User ID",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "username",
      header: "User name",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "type",
      header: "User Type",
      footer: (props) => props.column.id,
      cell: (props) =>
        UsertTypeEnumTranslator(props.getValue() as UserTypeEnum),
    },
  ];

  const listMAU = useMemo(() => {
    return data || ([] as IMau[]);
  }, [data]);

  const table = useReactTable({
    data: listMAU,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full h-full flex flex-col border border-[#EEF5FF] rounded-lg relative">
      <div className="flex items-center gap-1 px-4 py-6">
        <p className="font-medium text-[#67768B]">List MAU</p>
        <a id="list_MAU">
          <InfoIcon fill="#67768B" width={16} height={16} />
        </a>
      </div>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !top-2"
        color="#67768B"
        size="small"
      />
      {!listMAU.length ? (
        <div className="pb-6">
          <EmptyState Icon={ChartIcon} title="You don’t have any list of MAU" />
        </div>
      ) : (
        <Table data={listMAU} table={table} />
      )}
      <Bubble
        anchor="list_MAU"
        text="Showing List of active users based on Month filter MAU."
      />
    </div>
  );
};

export default TableListMAU;
