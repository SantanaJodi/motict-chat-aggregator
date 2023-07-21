import { ModalType } from "@/src/types";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { ModalHeader } from "../molecules";

interface ModalProps extends ModalType, PropsWithChildren {
  footer?: React.ReactNode;
  width: number;
  height: number;
}

const Modal: React.FC<ModalProps> = ({
  title,
  onClose,
  visible,
  children,
  footer,
  height,
  width,
}) => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full min-h-screen bg-[#0D0F12A1] flex items-center justify-center z-50",
        visible ? "block" : "hidden"
      )}
    >
      <div
        className={clsx(
          "bg-white rounded-2xl relative overflow-hidden flex flex-col",
          `w-[${width}px]`,
          `h-[${height}px]`
        )}
      >
        <ModalHeader title={title} onClose={onClose} />
        <div className="flex flex-col justify-between h-[calc(100%_-_65px)]">
          <div className="px-6 pt-6 h-[calc(100%_-_72px)]">{children}</div>
          <div className="px-6 py-4 bg-white border-t border-[#EEF5FF] w-full z-[1]">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
