import React from "react";

interface EmptyStateProps {
  Icon: React.ElementType;
  title: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon fill="#8B9EB7" width={80} height={80} />
      <p className="text-[#8B9EB7]">{title}</p>
    </div>
  );
};

export default EmptyState;
