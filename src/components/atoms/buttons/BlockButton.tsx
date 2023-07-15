import { PersonCrossIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";

interface BlockButtonProps {
  isBlocked?: boolean;
}

const BlockButton: React.FC<BlockButtonProps> = ({ isBlocked }) => {
  return (
    <button
      className={clsx(
        "flex flex-row items-center justify-center   gap-1 p-2 rounded-lg w-full",
        isBlocked
          ? "bg-[#4ABF71] text-[white]"
          : "border border-[#CB5237] text-[#CB5237]"
      )}
    >
      <PersonCrossIcon
        width={16}
        height={16}
        fill={isBlocked ? "#fff" : "#CB5237"}
      />
      <p className="text[14px] leading-[18.23px] font-medium">
        {isBlocked ? "Unblock Contact" : "Block Contact"}
      </p>
    </button>
  );
};

export default BlockButton;
