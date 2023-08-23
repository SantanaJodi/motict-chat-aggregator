"use client";
import { ChartIcon, DownloadIcon, InfoIcon } from "@/public/icons/outline";
import { EmptyState, IconButton } from "@/src/components/atoms";
import { Bubble, BubbleProps } from "@/src/components/molecules/popup";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import Table from "../Table";
import { TableProps } from "../table-type";

interface TableReportContainerProps<T>
  extends BubbleProps,
    Pick<TableProps<T>, "className" | "hideRowsSelection"> {
  data?: T[];
  columns: ColumnDef<T>[];
  title: string;
  emptyMsg: string;
}

const TableReportContainer = <T extends object>({
  data,
  anchor,
  columns,
  emptyMsg,
  text,
  title,
  className,
  hideRowsSelection,
}: TableReportContainerProps<T>) => {
  const list = useMemo(() => {
    return data || ([] as any[]);
  }, [data]);

  const table = useReactTable({
    data: list,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full h-full flex flex-col border border-[#EEF5FF] rounded-lg relative">
      <div className="flex items-center gap-1 px-4 py-6">
        <p className="font-medium text-[#67768B]">{title}</p>
        <a id={anchor}>
          <InfoIcon fill="#67768B" width={16} height={16} />
        </a>
      </div>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !top-2"
        color="#67768B"
        size="small"
      />
      {!list.length ? (
        <div className="pb-6">
          <EmptyState Icon={ChartIcon} title={emptyMsg} />
        </div>
      ) : (
        <Table
          data={list}
          table={table}
          className={className}
          hideRowsSelection={hideRowsSelection}
        />
      )}
      <Bubble anchor={anchor} text={text} />
    </div>
  );
};

export default TableReportContainer;
