import React from "react";

interface NotificationCountProps {
  count: number;
}

const NotificationCount: React.FC<NotificationCountProps> = ({ count }) => {
  const countLabel = count > 9 ? "9+" : count;
  return (
    <div className="px-1 h-4 bg-[#AF1D0D] rounded-full flex items-center justify-center">
      <p className="text-xs text-white">{countLabel}</p>
    </div>
  );
};

export default NotificationCount;
