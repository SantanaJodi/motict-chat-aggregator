import { WarningIcon } from "@/public/icons/outline";
import React from "react";

interface WarningCardProps {
  title: string;
  desc: string;
}

const WarningCard: React.FC<WarningCardProps> = ({ desc, title }) => {
  return (
    <div className="bg-[#FFEECD] p-4 w-full rounded-lg border border-[#F0A22E] flex flex-col gap-2">
      <div className="flex flex-row items-center gap-1">
        <WarningIcon />
        <p className="text-[#21252B] font-medium">{title}</p>
      </div>
      <p className="text-sm text-[#647182]">{desc}</p>
    </div>
  );
};

export default WarningCard;
