"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@/public/icons/outline";
import React from "react";
import { IconButton } from "../buttons";
import clsx from "clsx";

export interface DropdownHeadProps {
  title: string;
  isExpand: boolean;
  onExpand: () => void;
  hideBorder?: boolean;
}

const DropdownHead: React.FC<DropdownHeadProps> = ({
  title,
  isExpand,
  onExpand,
  hideBorder,
}) => {
  return (
    <div
      className={clsx(
        "w-full bg-white border-t border-[#EEF5FF] p-6 flex flex-row items-center justify-between cursor-pointer",
        hideBorder && "border-none"
      )}
      onClick={onExpand}
    >
      <p className="font-bold text-[#0D0F12]">{title}</p>
      <IconButton Icon={isExpand ? ChevronUpIcon : ChevronDownIcon} />
    </div>
  );
};

export default DropdownHead;
