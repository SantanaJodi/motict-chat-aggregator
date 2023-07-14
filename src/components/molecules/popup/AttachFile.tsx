import { FileIcon, ImageIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import { FloatingIconButton } from "../../atoms";

interface AttachFileProps {
  visible?: boolean;
  onClose: () => void;
}

const AttachFile: React.FC<AttachFileProps> = ({ onClose, visible }) => {
  return (
    <div
      className={clsx(
        "z-[9999] fixed left-[465px] bottom-[80px] flex flex-col gap-2 items-center transition-all",
        visible ? "block" : "hidden"
      )}
    >
      <FloatingIconButton Icon={ImageIcon} />
      <FloatingIconButton Icon={FileIcon} />
    </div>
  );
};

export default AttachFile;
