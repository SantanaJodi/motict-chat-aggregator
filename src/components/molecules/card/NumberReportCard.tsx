"use client";
import { DownloadIcon, InfoIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { IconButton } from "../../atoms";
import { Bubble, BubbleProps } from "../popup";

interface NumberReportCardProps extends BubbleProps {
  title: string;
  value?: string | number;
  className?: string;
}

const NumberReportCard: React.FC<NumberReportCardProps> = ({
  title,
  value,
  className,
  anchor,
  text,
}) => {
  return (
    <div
      className={clsx(
        "p-4 rounded-lg bg-white border border-[#EEF5FF] flex  flex-grow flex-col items-center justify-center gap-2 relative ",
        className
      )}
    >
      <div className="flex items-center gap-1">
        <p className="text-[#67768B] font-medium">{title}</p>
        <a id={anchor}>
          <InfoIcon fill="#67768B" width={16} height={16} />
        </a>
      </div>
      <p className="text-2xl text-[#323944] font-bold">
        {value ? value?.toLocaleString() : 0}
      </p>
      <IconButton
        Icon={DownloadIcon}
        className="!absolute !right-2 !bottom-2"
        color="#67768B"
        size="small"
      />
      <Bubble anchor={anchor} text={text} />
    </div>
  );
};

export default NumberReportCard;
