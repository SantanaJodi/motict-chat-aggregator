"use client";

import { flexRender } from "@tanstack/react-table";
import TablePagination from "./TablePagination";
import { TableProps } from "./table-type";

const Table = <T extends object>({
  table,
  data,
  onRowClick,
}: TableProps<T>) => {
  return (
    <div className="w-full flex flex-col justify-between h-full overflow-auto">
      <table className="w-full">
        <thead className="bg-[#EEF5FF] sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className=" p-6 text-left text-[14px] leading-[18.23px] font-bold text-[#323944]"
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
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="p-6 text-left text-[14px] leading-[18.23px]  text-[#323944]"
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
      <TablePagination data={data} table={table} />
    </div>
  );
};

export default Table;
