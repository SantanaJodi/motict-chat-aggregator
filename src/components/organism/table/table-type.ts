import { Table as ReactTable, Row } from "@tanstack/react-table";

export interface TableProps<T> {
  table: ReactTable<T>;
  data: T[];
  onRowClick?: (row: Row<T>) => void;
  // TODO:find best practices later
  className?: {
    key: string;
    classes: string;
  };
  hideRowsSelection?: boolean;
}

export interface IRowSelectOption {
  label: string;
  value: number;
}

export interface ITableState {
  toPage: number;
  rows: IRowSelectOption;
}

export interface IState {
  toPage: number;
  rows: IRowSelectOption;
}

// interface TableProps<T> extends Omit<TableOptions<T>, "data" | "columns"> {
//   data: T[]
//   columns: ColumnDef<T>[]
// }
