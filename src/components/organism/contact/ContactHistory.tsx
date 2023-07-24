/* eslint-disable react-hooks/exhaustive-deps */
import {
  AgentAssignmentEnum,
  ChannelEnum,
  IAssociatedAgents,
} from "@/src/modules/contact/types/contact-type";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { ContactHistoryCard } from "../../molecules";
import { Table } from "../table";

interface ContactHistoryProps {}

const data: IAssociatedAgents[] = new Array(100).fill({
  name: "Admin WikiToko",
  email: "admin@wikitiko.com",
  channel: ChannelEnum.WhatsApp,
  status: AgentAssignmentEnum.ASSIGNED,
  date: "22 Oct 2022 at 11.22",
} as IAssociatedAgents);

const columns: ColumnDef<IAssociatedAgents>[] = [
  {
    accessorKey: "name",
    header: "Name",
    footer: (props) => props.column.id,
    cell: (props) => props.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    footer: (props) => props.column.id,
    cell: (props) => props.getValue(),
  },
  {
    accessorKey: "channel",
    header: "Channel",
    footer: (props) => props.column.id,
    cell: (props) => {
      const value = props.getValue();
      if (value === ChannelEnum.WhatsApp_Official) return "WhatsApp Official";
      return "WhatsApp";
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (props) => props.column.id,
    cell: (props: any) => AgentAssignmentEnum[props.getValue()],
  },
  {
    accessorKey: "date",
    header: "Date",
    footer: (props) => props.column.id,
    cell: (props: any) => props.getValue(),
  },
];

const ContactHistory: React.FC<ContactHistoryProps> = () => {
  const [{ isEmpty, isError, isLoading }, update] = useImmer({
    isLoading: true,
    isEmpty: false,
    isError: false,
  });

  useEffect(() => {
    setTimeout(() => {
      update((s) => {
        s.isLoading = false;
      });
    }, 1500);
  }, []);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className=" w-full h-full p-4 flex flex-col gap-8 bg-white border-l border-[#EEF5FF] overflow-auto">
      <ContactHistoryCard
        title="Associated Agents"
        isEmpty={isEmpty}
        isError={isError}
        isLoading={isLoading}
      >
        <Table data={data} table={table} />
      </ContactHistoryCard>
    </div>
  );
};

export default ContactHistory;
