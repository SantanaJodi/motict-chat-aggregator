"use client";

import { HeadsetIcon } from "@/public/icons/outline";
import React from "react";
import { Avatar, Button } from "../../atoms";

interface CustomerDataProps {
  agent: string | string[] | null;
}

const CustomerData: React.FC<CustomerDataProps> = ({ agent }) => {
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <Avatar
        withChannel
        url="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
      />
      <div className="flex flex-col items-start gap-1 w-full">
        <p className="text-[#0D0F12] font-bold leading[20.83px]">
          Untung Suropati
        </p>
        <div className="flex flex-row items-center gap-1 w-full">
          <HeadsetIcon
            width={16}
            height={16}
            fill="#67768B"
            className="flex-shrink-0"
          />
          {agent ? (
            <div className="flex flex-row items-center gap-1 w-full">
              <p className="text-[#67768B] text-[14px] leading-[18.23px] mr-1">
                {/* TODO ALVIN: show "and {number} more" if agent > 2 */}
                {/* ex: Darmadi Setyo, and 2 more */}
                {Array.isArray(agent) ? agent.join(", ") : agent}
              </p>
              <Button
                variant="link"
                label="• Change"
                onClick={() => alert("change")}
                color="#67768B"
              />
            </div>
          ) : (
            <Button
              variant="link"
              label="+ Assign Agent"
              onClick={() => alert("add")}
              color="#C02716"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
