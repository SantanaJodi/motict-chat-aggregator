"use client";
import useDebounce from "@/src/hooks/useDebounce";
import dummyAgent from "@/src/modules/settings/model/agent/dummy-agent.json";
import { IAgent } from "@/src/modules/settings/types/agent-types";
import { ISelectOpt } from "@/src/types";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";

interface AgentListModelProps {}
interface IState {
  search: string;
}
const AgentListModel = () => {
  const [{ search }, update] = useImmer<IState>({
    search: "",
  });

  const debouncedSearch = useDebounce(search, 500);

  const {
    data: agentList,
    isLoading,
    refetch,
    isError,
  } = useQuery<IAgent[]>({
    queryKey: ["agentList", debouncedSearch],
    queryFn: ({ queryKey }) => {
      const s = queryKey[1] as string;

      if (!s) {
        return dummyAgent.data;
      }

      const keyword = s.toLowerCase().trim();

      return dummyAgent.data.filter((item: any) => {
        return Object.keys(item).some((key) =>
          key === "channel"
            ? false
            : item[key].toString().toLowerCase().includes(keyword)
        );
      });
    },
  });

  const data = useMemo(() => {
    return agentList || ([] as IAgent[]);
  }, [agentList]);

  const columns: ColumnDef<IAgent>[] = [
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
      accessorKey: "division",
      header: "Division",
      footer: (props) => props.column.id,
      cell: (props) => (props.getValue() as ISelectOpt).label,
    },
    {
      accessorKey: "channel",
      header: "Channel",
      footer: (props) => props.column.id,
      cell: (props) => {
        const val = props.getValue() as ISelectOpt[];
        return (
          <div>
            {val.map((item, id) => (
              <p key={id}>{item.label}</p>
            ))}
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSearch = (val: string) => {
    update((s) => {
      s.search = val;
    });
  };

  return {
    data,
    table,
    search,
    isError,
    isLoading,
    refetch,
    handleSearch,
  };
};

export default AgentListModel;
