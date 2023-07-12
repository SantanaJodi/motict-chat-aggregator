import { FileIcon } from "@/public/icons/duotone";
import { DownloadIcon } from "@/public/icons/outline";
import { IconButton } from "@/src/components/atoms";
import React from "react";

interface FileAttachmentProps {
  fileName: string;
  size: string;
}

const FileAttachment: React.FC<FileAttachmentProps> = ({ fileName, size }) => {
  return (
    <div className="bg-white p-2 rounded-lg border border-[#EEF5FF] flex flex-row items-center justify-between w-[280px]">
      <div className="flex flex-row items-center gap-2">
        <FileIcon fill="#C02716" />
        <div>
          <p className="text-[#0D0F12] font-medium leading-[20.83px]">
            {fileName}
          </p>
          <p className="text-[12px] text-[#AABDD7] leading-[15.62px]">
            {size} MB
          </p>
        </div>
      </div>
      <IconButton Icon={DownloadIcon} onClick={() => alert("downloading..")} />
    </div>
  );
};

export default FileAttachment;
