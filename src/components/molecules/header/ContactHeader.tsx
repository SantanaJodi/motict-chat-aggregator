import { DownloadIcon, SearchIcon } from "@/public/icons/outline";
import React from "react";
import { Button, DropdownInput, TextInput } from "../../atoms";

interface ContactHeaderProps {
  search: string;
  onSearch: (val: string) => void;
  channel: string;
  onSelectChannel: (val: string) => void;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  onSearch,
  onSelectChannel,
  channel,
  search,
}) => {
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
            { label: "WhatsApp", value: "Komputer" },
            { label: "Tokopedia", value: "Komuter" },
            { label: "Shopee", value: "Ko muter" },
          ]}
        />
        <Button
          label="+ New Contact"
          variant="primary"
          color="#323944"
          className="!flex-shrink-0"
        />
        <Button
          label="Download All"
          variant="subtle"
          className="!flex-shrink-0"
          Icon={DownloadIcon}
        />
      </div>
    </div>
  );
};

export default ContactHeader;
