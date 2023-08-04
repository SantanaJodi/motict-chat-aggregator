"use client";
import useDebounce from "@/src/hooks/useDebounce";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";
import { IAgentList } from "../types";

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
  } = useQuery<IAgentList[]>({
    queryKey: ["agentList", debouncedSearch],
    queryFn: ({ queryKey }) => {
      const s = queryKey[1] as string;
      console.log("🚀 -> AgentListModel -> s:", s);
      const dummy: IAgentList[] = [
        {
          name: "Anggih Nur Hidayat",
          email: "works.anggihnur@gmail.com",
          division: "No Division",
          channel: ["WhatsApp - Wikitoko", "WhatsApp - Tokowiki"],
        },
        {
          name: "Shanelle Corkey",
          email: "Shanelle_Corkery@@wikitoko.com",
          division: "Operation",
          channel: ["WhatsApp - Wikitoko"],
        },
        {
          name: "Shavanna Johns",
          email: "Savanna_Johns29@@wikitoko.com",
          division: "Operation",
          channel: ["WhatsApp - Wikitoko"],
        },
      ];

      if (!s) {
        return dummy;
      }

      const keyword = s.toLowerCase().trim();

      return dummy.filter((item: any) => {
        return Object.keys(item).some((key) =>
          key === "channel"
            ? false
            : item[key].toString().toLowerCase().includes(keyword)
        );
      });
    },
  });

  const data = useMemo(() => {
    return agentList || ([] as IAgentList[]);
  }, [agentList]);

  const columns: ColumnDef<IAgentList>[] = [
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
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "channel",
      header: "Channel",
      footer: (props) => props.column.id,
      cell: (props) => {
        const val = props.getValue() as string[];
        return (
          <div>
            {val.map((item, id) => (
              <p key={id}>{item}</p>
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
