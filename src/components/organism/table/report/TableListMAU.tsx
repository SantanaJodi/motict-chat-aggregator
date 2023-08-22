"use client";
import {
  IMau,
  UserTypeEnum,
} from "@/src/modules/report/types/report-general-type";
import { UsertTypeEnumTranslator } from "@/src/utils";
import { ColumnDef } from "@tanstack/react-table";
import TableReportContainer from "./ReportTableContainer";

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

  return (
    <TableReportContainer
      title="List MAU"
      anchor="list_MAU"
      text="Showing List of active users based on Month filter MAU."
      emptyMsg="You don’t have any list of MAU"
      columns={columns}
      data={data}
    />
  );
};

export default TableListMAU;
