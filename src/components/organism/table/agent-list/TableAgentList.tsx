import { PeoplesIcon, SearchIcon } from "@/public/icons/outline";
import { Button, TextInput } from "@/src/components/atoms";
import React from "react";
import StatesContainer from "../../StatesContainer";
import Table from "../Table";
import AgentListModel from "./model/AgentListModel";

interface TableAgentListProps {}

const TableAgentList: React.FC<TableAgentListProps> = () => {
  const { table, data, search, isLoading, isError, handleSearch, refetch } =
    AgentListModel();
  return (
    <div className=" w-full px-4 pt-4 flex flex-col gap-8 border border-[#EEF5FF] rounded-lg">
      <Button
        variant="primary"
        color="#323944"
        label="Create Agent"
        className="!self-end"
      />
      <TextInput
        value={search}
        onChange={handleSearch}
        Icon={SearchIcon}
        placeholder="Search by name, email, or division name"
      />
      <div className="relative w-full flex flex-col">
        <Table data={data} table={table} />
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
