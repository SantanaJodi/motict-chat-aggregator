import clsx from "clsx";
import React from "react";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick?: () => void;
  color?: string;
  className?: string;
  size?: "small" | "medium";
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  onClick,
  color,
  className,
  size = "medium",
}) => {
  const iconSize = size === "medium" ? 24 : 18;
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border-none bg-white hover:bg-[#EEF5FF]   rounded-lg",
        size === "small" && "w-6 h-6 p-[3px]",
        size === "medium" && "w-8 h-8 p-1",
        className
      )}
    >
      <Icon width={iconSize} height={iconSize} fill={color} />
    </button>
  );
};

export default IconButton;
