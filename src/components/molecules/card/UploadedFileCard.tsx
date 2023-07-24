import { XIcon } from "@/public/icons/outline";
import React from "react";

interface UploadedFileCardProps {
  onCancel: () => void;
}

const UploadedFileCard: React.FC<UploadedFileCardProps> = ({ onCancel }) => {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border border-[#EEF5FF] px-4 py-6">
      <div>
        <p className="font-bold text-[#0D0F12]">Dummy Upload File.csv</p>
        <p className="text-[#67768B] text-[14px]">100kb</p>
      </div>
      <XIcon onClick={onCancel} className="cursor-pointer" />
    </div>
  );
};

export default UploadedFileCard;
