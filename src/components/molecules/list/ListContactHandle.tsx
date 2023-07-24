import React from "react";
import { LogoChannel } from "../../atoms";

interface ListContactHandleProps {}

const ListContactHandle: React.FC<ListContactHandleProps> = () => {
  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <p className="text-sm text-[#0D0F12]">+628053884999</p>
      <div className="flex flex-row items-center gap-1">
        <LogoChannel type="whatsapp" width={16} height={16} />
        <p className="text-sm text-[#8B9EB7]">WikiToko</p>
      </div>
    </div>
  );
};

export default ListContactHandle;
