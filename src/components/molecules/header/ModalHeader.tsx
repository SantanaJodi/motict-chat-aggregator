import { XIcon } from "@/public/icons/outline";
import React from "react";
import { IconButton } from "../../atoms";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose, title }) => {
  return (
    <div className="w-full bg-white px-6 py-4 border-b border-[#EEF5FF] flex flex-row items-center justify-between rounded-t-2xl">
      <p className="font-bold text-[#0D0F12] leading-[20.83px]">{title}</p>
      <IconButton Icon={XIcon} onClick={onClose} color="#323944" />
    </div>
  );
};

export default ModalHeader;
