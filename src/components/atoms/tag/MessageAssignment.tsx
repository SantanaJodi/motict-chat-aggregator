import { CircleCheckIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React, { useMemo } from "react";

export enum MessageAssignmentEnum {
  waiting = 0,
  assigned = 1,
  assigned_to_me = 2,
  resolved = 3,
  campaign = 4,
}

interface MessageAssignmentProps {
  type: string;
}

const MessageAssignment: React.FC<MessageAssignmentProps> = ({ type }) => {
  const content = useMemo(() => {
    switch (type) {
      case "waiting":
        return ["#8B9EB7", "Waiting"];
      case "assigned":
        return ["#0D0F12", "Assigned"];
      case "assigned_to_me":
        return ["#4ABF71", "Assigned to Me"];
      case "resolved":
        return ["#4ABF71", "Resolved"];
      case "campaign":
        return ["#F0A22E", "Campaign"];

      default:
        return ["#8B9EB7", "Waiting"];
    }
  }, [type]);

  const isResolved = type === "resolved";

  return (
    <div
      className={clsx(`border px-1 py-0.5 bg-none rounded-full`, {
        "bg-[#4ABF71] flex flex-row items-center gap-1": isResolved,
      })}
      style={{
        borderColor: content[0],
      }}
    >
      {isResolved && (
        <CircleCheckIcon
          width={12}
          height={12}
          fill="#fff"
          className="mb-0.5"
        />
      )}
      <p
        className="text-[12px] leading-[15.62px]"
        style={{
          color: isResolved ? "#fff" : content[0],
        }}
      >
        {content?.[1]}
      </p>
    </div>
  );
};

export default MessageAssignment;
