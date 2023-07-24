import { DownloadIcon, SearchIcon, TrashIcon } from "@/public/icons/outline";
import { IContact } from "@/src/modules/contact/types/contact-type";
import { ISelectOpt } from "@/src/types";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, DropdownInput, TextInput } from "../../atoms";

interface ContactHeaderProps {
  search: string;
  onSearch: (val: string) => void;
  channel?: ISelectOpt;
  onSelectChannel: (val: ISelectOpt) => void;
  selectedRow?: IContact[];
  onDeleteContact: () => void;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  onSearch,
  onSelectChannel,
  channel,
  search,
  selectedRow,
  onDeleteContact,
}) => {
  const router = useRouter();
  const isSelected = !!selectedRow?.length;
  return (
    <div className=" w-full p-6 flex flex-col gap-6">
      <h1 className="m-0 text-[24px] font-bold">Contact</h1>
      <div className="flex flex-row items-center gap-6">
        <TextInput
          value={search}
          onChange={onSearch}
          placeholder="Search contact name or number"
          Icon={SearchIcon}
        />
        <DropdownInput
          value={channel}
          onChange={onSelectChannel}
          placeholder="All Channel"
          options={[
            { label: "All Channel", value: "all" },
            { label: "WhatsApp Bussiness", value: "whatsapp" },
            { label: "WhatsApp", value: "whatsapp-unmasking" },
          ]}
        />
        <Button
          Icon={isSelected ? TrashIcon : undefined}
          label={isSelected ? "Delete Selected" : "+ New Contact"}
          variant={isSelected ? "ghost" : "primary"}
          color={isSelected ? "#C02716" : "#323944"}
          className="!flex-shrink-0"
          onClick={() => {
            if (isSelected) {
              onDeleteContact();
              return;
            }
            router.push("/contact/add");
          }}
        />
        <Button
          label={isSelected ? "Download Selected" : "Download All"}
          variant="subtle"
          className="!flex-shrink-0"
          Icon={DownloadIcon}
        />
      </div>
    </div>
  );
};

export default ContactHeader;
