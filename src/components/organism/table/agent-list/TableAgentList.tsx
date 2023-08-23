import { PeoplesIcon, SearchIcon } from "@/public/icons/outline";
import { Button, TextInput } from "@/src/components/atoms";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import StatesContainer from "../../StatesContainer";
import Table from "../Table";
import AgentListModel from "./model/AgentListModel";

interface TableAgentListProps {}

const TableAgentList: React.FC<TableAgentListProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { table, data, search, isLoading, isError, handleSearch, refetch } =
    AgentListModel();
  return (
    <div className=" w-full px-4 pt-4 flex flex-col gap-8 border border-[#EEF5FF] rounded-lg">
      <div className="flex flex-row item  gap-8">
        <TextInput
          value={search}
          onChange={handleSearch}
          Icon={SearchIcon}
          placeholder="Search by name, email, or division name"
        />
        <Button
          variant="primary"
          color="#323944"
          label="Create Agent"
          className="!flex-shrink-0"
          onClick={() => router.push("/settings/agent/create")}
        />
      </div>
      <div className="relative w-full flex flex-col">
        <Table
          data={data}
          table={table}
          onRowClick={(row) => router.push(`${pathname}/${row.id}`)}
        />
        <StatesContainer
          EmptyIcon={PeoplesIcon}
          onReload={refetch}
          isLoading={isLoading}
          isEmpty={!!search && !data.length}
          emptyMsg="No data"
          isError={isError}
          className="!mb-0"
        />
      </div>
    </div>
  );
};

export default TableAgentList;
