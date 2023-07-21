import {
  ColumnDef,
  TableOptions,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable as useReactTableLib,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Checkbox } from "../components";

interface IuseReactTable<T> extends Omit<TableOptions<T>, "getCoreRowModel"> {}

const useReactTable = <T extends object>({
  columns: cols,
  data,
}: IuseReactTable<T>) => {
  const columns = useMemo<ColumnDef<T>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      ...cols,
    ],
    [cols]
  );

  const table = useReactTableLib({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    enableMultiRowSelection: true,
  });

  return table;
};

export default useReactTable;
