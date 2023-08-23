"use client";
import { PenIcon, TrashIcon } from "@/public/icons/outline";
import { Button } from "@/src/components";
import useDebounce from "@/src/hooks/useDebounce";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";
import { IChatTemplate } from "../types/chat-template-type";

interface IState {
  search: string;
  formModal: boolean;
  deleteModal: boolean;
  selectedTemplate?: IChatTemplate;
}

const TemplateChatSettingsViewModel = () => {
  const [{ search, formModal, deleteModal, selectedTemplate }, update] =
    useImmer<IState>({
      search: "",
      formModal: false,
      deleteModal: false,
      selectedTemplate: undefined,
    });

  const defaultValues: IChatTemplate = { command: "", content: "" };
  const formModule = useForm<IChatTemplate>({
    defaultValues,
  });

  const debouncedSearch = useDebounce(search, 500);
  const {
    data: templateList,
    isLoading,
    refetch,
    isError,
  } = useQuery<IChatTemplate[]>({
    queryKey: ["templates", debouncedSearch],
    queryFn: ({ queryKey }) => {
      const s = queryKey[1] as string;

      const dummyCommand: IChatTemplate[] = [
        {
          command: "/resolve",
          content:
            "Hai kak, apakah masih bersama kami ? Jika tidak ada yang akan lagi kami akhiri chat ini ya kak, terimakasih.",
        },
        {
          command: "/closingdone",
          content:
            "Kalo udah jelas [Nama Admin] tutup chatnya ya, seneng bisa bantu Kak :). Silakan hubungi kami jika masih ada kendala.",
        },
      ];

      if (!s) {
        return dummyCommand;
      }

      const keyword = s.toLowerCase().trim();

      return dummyCommand.filter((item: IChatTemplate) =>
        item.command.toLowerCase().includes(keyword)
      );
    },
  });

  const data = useMemo(() => {
    return templateList || ([] as IChatTemplate[]);
  }, [templateList]);

  const columns: (ColumnDef<IChatTemplate> & { className?: string })[] = [
    {
      accessorKey: "command",
      header: "Command",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "content",
      header: "Content",
      footer: (props) => props.column.id,
      cell: (props) => props.getValue(),
    },
    {
      accessorKey: "action",
      header: "Action",
      footer: (props) => props.column.id,
      className: "text-right",
      cell: (props) => {
        return (
          <div className="flex flex-row items-center gap-6 justify-start self-end">
            <Button
              variant="link"
              label="Delete"
              Icon={TrashIcon}
              color="#C02716"
              onClick={() => {
                update((s) => {
                  s.deleteModal = true;
                  s.selectedTemplate = props.row.original;
                });
              }}
            />
            <Button
              variant="link"
              label="Edit"
              Icon={PenIcon}
              color="#8B9EB7"
              onClick={() => {
                const data = props.row.original;
                formModule.reset(data);

                update((s) => {
                  s.formModal = true;
                  s.selectedTemplate = data;
                });
              }}
            />
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

  const handleFormModal = (val: boolean) => {
    update((s) => {
      s.formModal = val;
    });
  };

  const handleDeleteModal = (val: boolean) => {
    update((s) => {
      s.deleteModal = val;
    });
  };

  const handleAddNewTemplate = () => {
    formModule.reset(defaultValues);
    update((s) => {
      s.formModal = true;
      s.selectedTemplate = defaultValues;
    });
  };

  const handleSave = (val: IChatTemplate) => {
    if (selectedTemplate?.command) {
      toast.success("Changed Saved");
    } else {
      toast.success("Templates Added");
    }

    formModule.reset(defaultValues);
    update((s) => {
      s.formModal = false;
      s.selectedTemplate = defaultValues;
    });
  };

  const handleDeleteTemplate = () => {
    toast.success("Template deleted");
    update((s) => {
      s.deleteModal = false;
      s.selectedTemplate = defaultValues;
    });
  };

  return {
    data,
    table,
    search,
    isError,
    formModal,
    isLoading,
    formModule,
    deleteModal,
    selectedTemplate,
    refetch,
    handleSave,
    handleSearch,
    handleFormModal,
    handleDeleteModal,
    handleAddNewTemplate,
    handleDeleteTemplate,
  };
};

export default TemplateChatSettingsViewModel;
