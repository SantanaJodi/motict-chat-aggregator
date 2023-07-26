import React from "react";

interface NotificationCountProps {
  count: number | string;
}

const NotificationCount: React.FC<NotificationCountProps> = ({ count }) => {
  return (
    <div className="px-1 h-4 bg-[#AF1D0D] rounded-full flex items-center justify-center">
      <p className="text-xs text-white">{count}</p>
    </div>
  );
};

export default NotificationCount;
