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
  type: MessageAssignmentEnum;
}

const MessageAssignment: React.FC<MessageAssignmentProps> = ({ type }) => {
  const content = useMemo(() => {
    switch (type) {
      case MessageAssignmentEnum.waiting:
        return ["#8B9EB7", "Waiting"];
      case MessageAssignmentEnum.assigned:
        return ["#0D0F12", "Assigned"];
      case MessageAssignmentEnum.assigned_to_me:
        return ["#4ABF71", "Assigned to Me"];
      case MessageAssignmentEnum.resolved:
        return ["#4ABF71", "Resolved"];
      case MessageAssignmentEnum.campaign:
        return ["#F0A22E", "Campaign"];
    }
  }, [type]);

  const isResolved = type === MessageAssignmentEnum.resolved;

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
