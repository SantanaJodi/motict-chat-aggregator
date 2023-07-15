"use client";

import { InfoIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React, { useState } from "react";
import { SessionBubble } from "../popup";

interface ListSessionProps {
  session: string;
}

const ListSession: React.FC<ListSessionProps> = ({ session }) => {
  const [bubble, setBubble] = useState(false);
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex flex-row items-center gap-1 relative">
        <p className="text-[12px] leading-[15.62px] text-[#67768B] font-medium">
          Session
        </p>
        <InfoIcon
          width={16}
          height={16}
          fill="#67768B"
          onClick={() => setBubble((val) => !val)}
          className="cursor-pointer focus:outline-none"
          id="session_bubble"
        />

        <SessionBubble visible={bubble} />
      </div>
      {/*TODO APIN session color base on status */}
      <p className={clsx("text-[#F0A22E]", "text-[14px] leading-[18.23px]")}>
        {session}
      </p>
    </div>
  );
};

export default ListSession;
