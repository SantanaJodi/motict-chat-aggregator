/* eslint-disable react-hooks/exhaustive-deps */
import { ChannelWa, ChannelWaUnmasking } from "@/public/icons/logo";
import { Button } from "@/src/components";
import useReactTable from "@/src/hooks/useReactTable";
import { ISelectOpt } from "@/src/types";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useImmer } from "use-immer";
import { IContact } from "../types/contact-type";

interface ContactViewModelProps {
  contact: IContact[];
}

interface IState {
  isLoading: boolean;
  error: boolean;
  search: string;
  channel: ISelectOpt | undefined;
  data: IContact[];
  selectedRow: IContact[];
  deleteModal: boolean;
}

const ContactViewModel = ({ contact }: ContactViewModelProps) => {
  const router = useRouter();
  const [state, update] = useImmer<IState>({
    isLoading: true,
    error: false,
    search: "",
    channel: {
      label: "All Channel",
      value: "all",
    },
    data: [],
    selectedRow: [],
    deleteModal: false,
  });

  const columns: ColumnDef<IContact>[] = [
    {
      accessorKey: "name",
      header: "Name",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "phone_number",
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
      cell: (props: any) => {
        return (
          <div className="flex flex-row items-center justify-between pr-6">
            <p>{props.getValue()}</p>
            <Button
              label="See Detail"
              variant="subtle"
              onClick={() => router.push(`/contact/${Number(props.row.id)}`)}
            />
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: state.data,
    columns,
  });

  const setIsLoading = (val: boolean) => {
    update((s) => {
      s.isLoading = val;
    });
  };

  const setData = (data: IContact[]) => {
    update((s) => {
      s.data = data;
    });
  };

  const handleSearch = (keyword: string) => {
    update((s) => {
      s.search = keyword;
    });
  };

  const handleChangeChannel = (value: ISelectOpt) => {
    update((s) => {
      s.channel = value;
    });
  };

  const handleDeleteModal = (value: boolean) => {
    update((s) => {
      s.deleteModal = value;
    });
  };

  const handleDeleteContact = () => {
    handleDeleteModal(false);
    toast.success(`${state.selectedRow.length} contact deleted`);
  };

  useEffect(() => {
    if (contact.length && !state.search && !state.channel) {
      update((s) => {
        s.isLoading = false;
        s.data = contact;
      });
      return;
    }

    if (state.search || state.channel) {
      setIsLoading(true);
      const filteredData = contact.filter((d) => {
        const name = d.name.toLowerCase();
        const phone = d.phone_number.toLowerCase();
        const channel = d.channel?.toLowerCase();
        const selectedChannel = state.channel?.value.toLowerCase() || "";
        const keyword = state.search.toLowerCase();

        const filterBySearch =
          name.includes(keyword) || phone.includes(keyword);

        const filterByChannel =
          selectedChannel === "all"
            ? filterBySearch
            : channel?.includes(selectedChannel);

        return filterBySearch && filterByChannel;
      });

      if (filteredData.length) {
        setData(filteredData);
      } else {
        setData([]);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [contact, state.search, state.channel]);

  useEffect(() => {
    update((s) => {
      s.selectedRow = table.getSelectedRowModel().rows.map((r) => r.original);
    });
  }, [table.getSelectedRowModel()]);

  return {
    state,
    update,
    table,
    handleSearch,
    handleChangeChannel,
    handleDeleteModal,
    handleDeleteContact,
  };
};

export default ContactViewModel;
