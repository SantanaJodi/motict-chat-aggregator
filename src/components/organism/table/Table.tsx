"use client";

import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";
import TablePagination from "./TablePagination";
import { TableProps } from "./table-type";

const Table = <T extends object>({
  table,
  data,
  onRowClick,
  className,
  hideRowsSelection,
}: TableProps<T>) => {
  return (
    <div className="w-full flex flex-col justify-between h-full overflow-auto gap-20">
      <table className="w-full mb-20">
        <thead className="bg-[#EEF5FF] sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => {
                const key = header.column.columnDef.accessorKey;
                return (
                  <th
                    key={header.id}
                    className={clsx(
                      " p-6 text-left text-[14px] leading-[18.23px] font-bold text-[#323944]",
                      className?.key === key && className?.classes
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="overflow-auto h-2/3">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="border-b border-[#EEF5FF] cursor-pointer"
                onClick={() => {
                  if (onRowClick) {
                    onRowClick(row);
                  }
                }}
              >
                {row.getVisibleCells().map((cell: any) => {
                  const key = cell.column.columnDef.accessorKey;
                  return (
                    <td
                      key={cell.id}
                      className={clsx(
                        "p-6 text-left text-[14px] leading-[18.23px]  text-[#323944]",
                        className?.key === key && className?.classes
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePagination
        data={data}
        table={table}
        hideRowsSelection={hideRowsSelection}
      />
    </div>
  );
};

export default Table;
