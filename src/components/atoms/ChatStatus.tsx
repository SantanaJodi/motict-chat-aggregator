import clsx from "clsx";
import { differenceInHours, differenceInMinutes } from "date-fns";
import React, { useMemo } from "react";

interface ChatStatusProps {
  expireAt: Date;
}

const ChatStatus: React.FC<ChatStatusProps> = ({ expireAt: data }) => {
  const expireAt = new Date(data);
  const now = new Date();
  const diffHours = differenceInHours(expireAt, now);
  const diffMin = differenceInMinutes(expireAt, now);

  const label = useMemo(() => {
    if (diffHours < 0) {
      return "Expired";
    } else if (diffHours >= 0 && diffHours < 12) {
      return `Expired in ${
        diffHours < 1 ? diffMin + "minutes(s)" : diffHours + "hour(s)"
      }`;
    }
  }, [diffHours, diffMin]);

  return (
    <p
      className={clsx(
        "text-[12px] leading-[15.62px]",
        diffHours < 0 ? "text-[#CB5237]" : "text-[#F0A22E]"
      )}
    >
      {label || ""}
    </p>
  );
};

export default ChatStatus;
