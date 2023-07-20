"use client";

import { ChannelWa, ChannelWaUnmasking } from "@/public/icons/logo";
import { PeoplesIcon } from "@/public/icons/outline";
import { Button, ContactHeader, Container, Table } from "@/src/components";
import StatesContainer from "@/src/components/organism/StatesContainer";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

interface ContactViewProps {}

const data = [
  {
    name: "John Doe",
    id: "+628851595612",
    channel: "whatsapp",
    last_activity: "12 Oktober 2022 at 14:00",
  },
  {
    name: "John Doe",
    id: "+628851335612",
    channel: "whatsapp",
    last_activity: "12 Oktober 2022 at 14:00",
  },
  {
    name: "John Doe",
    id: "+628851595542",
    channel: "whatsapp",
    last_activity: "12 Oktober 2022 at 14:00",
  },
  {
    name: "John Doe",
    id: "+628823595612",
    channel: "whatsapp",
    last_activity: "12 Oktober 2022 at 14:00",
  },
];

const ContactView: React.FC<ContactViewProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [channel, setChannel] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setContacts(data);
    }, 3000);
  }, []);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: "Name",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "id",
      header: "ID",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "channel",
      header: "Channel",
      footer: (props) => props.column.id,
      cell: (props) => {
        return props.getValue() === "whatsapp" ? (
          <ChannelWa />
        ) : (
          <ChannelWaUnmasking />
        );
      },
    },
    {
      accessorKey: "last_activity",
      header: "Last Acitivy",
      footer: (props) => props.column.id,
      cell: (props: any) => (
        <div className="flex flex-row items-center justify-between pr-6">
          <p>{props.getValue()}</p>
          <Button label="See Detail" variant="subtle" />
        </div>
      ),
    },
  ];

  return (
    <Container>
      <div className="w-full h-full flex flex-col">
        <ContactHeader
          search={search}
          channel={channel}
          onSearch={(val) => setSearch(val)}
          onSelectChannel={(val) => setChannel(val)}
        />
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full">
            <Table data={contacts} columns={columns} />
          </div>

          <StatesContainer
            isLoading={isLoading}
            isEmpty={!contacts.length}
            isError={error}
            EmptyIcon={PeoplesIcon}
            onReload={() => alert("reload")}
            emptyMsg="You don’t have any contact"
            noResult={!!search && !contacts.length}
            disableErrorToast
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactView;
