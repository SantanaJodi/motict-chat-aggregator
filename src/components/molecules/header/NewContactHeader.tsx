import { usePathname } from "next/navigation";
import React from "react";
import { Filter } from "../../atoms/tag";
import { Breadcrumbs } from "../navigation";

interface NewContactHeaderProps {
  type: string;
  onChangeType: (type: string) => void;
}

const NewContactHeader: React.FC<NewContactHeaderProps> = ({
  type,
  onChangeType,
}) => {
  const pathname = usePathname();
  return (
    <div className="p-6 flex flex-col gap-6 border-b border-[#EEF5FF]">
      <Breadcrumbs
        items={[
          {
            label: "Contact",
            path: "/contact",
          },
          {
            label: "Add New Contact",
            path: pathname || "",
          },
        ]}
      />
      <h1 className="m-0font-bold text-xl text-[#0D0F12] leading-[26.04px">
        Add New Contact
      </h1>
      <div className="flex flex-row items-center gap-4">
        <Filter
          label="Add Single Contact"
          onClick={() => onChangeType("single")}
          isActive={type === "single"}
        />
        <Filter
          label="Add Multiple Contact"
          onClick={() => onChangeType("multiple")}
          isActive={type === "multiple"}
        />
      </div>
    </div>
  );
};

export default NewContactHeader;
