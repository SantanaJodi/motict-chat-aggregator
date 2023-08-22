"use client";

import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
export interface BubbleProps {
  anchor: string;
  text: string;
}

const Bubble: React.FC<BubbleProps> = ({ anchor, text }) => {
  return (
    <Tooltip
      anchorSelect={"#" + anchor}
      className="bg-[#323944] w-[248px] p-4 rounded-lg z-10"
      opacity={1}
      style={{
        maxWidth: 248,
        background: "#323944",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <p className="text-[14px] text-white leading-[18.23px] text-center ">
        {text}
      </p>
    </Tooltip>
  );
};

export default Bubble;
