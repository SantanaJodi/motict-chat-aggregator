/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/public/icons/outline";
import clsx from "clsx";
import { useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import { Button, DropdownInput, Line, TextInput } from "../../atoms";
import { IRowSelectOption, ITableState, TableProps } from "./table-type";

const rowSelectOption = [
  {
    label: "10 rows",
    value: 10,
  },
  {
    label: "20 rows",
    value: 20,
  },
  {
    label: "30 rows",
    value: 30,
  },
  {
    label: "40 rows",
    value: 40,
  },
  {
    label: "50 rows",
    value: 50,
  },
];

interface TablePaginationProps<T> extends TableProps<T> {}

const textClasses = "text-[#8B9EB7] text-[14px] leading-[18.23px]";
const flexRow = "flex flex-row items-center flex-shrink-0";

const TablePagination = <T extends object>({
  table,
  data,
  hideRowsSelection,
}: TablePaginationProps<T>) => {
  const [{ rows, toPage }, update] = useImmer<ITableState>({
    rows: rowSelectOption[0],
    toPage: 1,
  });

  const pageIndex = table.getState().pagination.pageIndex + 1;
  const pageSize = table.getState().pagination.pageSize;

  const paginationLabel = useMemo(() => {
    const end =
      pageIndex * pageSize < data.length ? pageIndex * pageSize : data.length;
    const start = end > pageSize ? end - pageSize + 1 : 1;
    return `Showing ${start}-${end} of ${data.length}`;
  }, [pageIndex, pageSize, data]);

  const handleToPage = (index: string | number) => {
    update((s) => {
      s.toPage = Number(index);
    });
  };

  const handleChangeShowRow = (opt: IRowSelectOption) => {
    update((s) => {
      s.rows = opt;
    });
    table.setPageSize(Number(opt.value));
  };

  useEffect(() => {
    handleToPage(pageIndex);
  }, [pageIndex]);

  return (
    <div className=" bg-white w-full p-6 flex flex-row items-center justify-between absolute bottom-0">
      <p className={textClasses}>{paginationLabel}</p>
      <div className={clsx(flexRow, "gap-4")}>
        {!hideRowsSelection && (
          <div className={clsx(flexRow, "gap-2")}>
            <p className={textClasses}>Show</p>
            <DropdownInput
              options={rowSelectOption}
              value={rows}
              menuPlacement="top"
              onChange={handleChangeShowRow}
            />
          </div>
        )}
        <Line isVertical />
        <div className={clsx(flexRow, "gap-4")}>
          <Button
            size="small"
            variant="ghost"
            Icon={ChevronLeftIcon}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="!p-3"
          />
          <div className={clsx(flexRow, "gap-2")}>
            <p className={textClasses}>To Page</p>
            <TextInput
              disableClear
              type="number"
              value={toPage.toString()}
              onChange={handleToPage}
              className="!w-20 !flex-shrink-0"
              style={{ textAlign: "center" }}
            />
            <p className={textClasses}>of {table.getPageCount()}</p>
            <Button
              label="Go"
              variant="primary"
              size="small"
              color="#323944"
              onClick={() => {
                const page = toPage ? Number(toPage) - 1 : 0;
                table.setPageIndex(page);
              }}
              className=" !flex-shrink-0 !px-[10px] !py-[11px] !w-10 !h-10"
            />
          </div>
          <Button
            size="small"
            variant="ghost"
            Icon={ChevronRightIcon}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="!p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
