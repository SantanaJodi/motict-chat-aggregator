import { FileIcon, ImageIcon } from "@/public/icons/outline";
import React from "react";
import { FloatingIconButton } from "../../atoms";

interface AttachFileProps {
  visible?: boolean;
  onClose: () => void;
  onClickImage: (_t: React.ChangeEvent<HTMLInputElement>) => void;
}

const AttachFile: React.FC<AttachFileProps> = ({
  onClose,
  visible,
  onClickImage,
}) => {
  if (!visible) return null;
  return (
    <div className="z-[9999] fixed left-[467px] bottom-[80px] flex flex-col gap-2 items-center transition-all">
      <FloatingIconButton Icon={ImageIcon} onClick={onClickImage} />
      <FloatingIconButton
        Icon={FileIcon}
        onClick={(f) => console.log(f, "<<< file icon")}
      />
    </div>
  );
};

export default AttachFile;
