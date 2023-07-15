"use client";

import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
interface SessionBubbleProps {
  visible?: boolean;
}

const SessionBubble: React.FC<SessionBubbleProps> = ({ visible }) => {
  return (
    <Tooltip
      anchorSelect="#session_bubble"
      className="bg-[#323944] w-[248px] p-4 rounded-lg"
      place="bottom"
      isOpen={visible}
      opacity={1}
      style={{
        maxWidth: 248,
        background: "#323944",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <p className="text-[14px] text-white leading-[18.23px] text-center ">
        <b>Open:</b> Active chatroom less than 12 hours
        <br />
        <br />
        <b>Expiring:</b> Active chatroom more than 12 hours but less than 24
        hours
        <br />
        <br />
        <b>Expired:</b> Inactive chatroom more than 24 hours
      </p>
    </Tooltip>
  );
};

export default SessionBubble;
