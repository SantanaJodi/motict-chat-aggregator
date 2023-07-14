import React from "react";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: () => void;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ Icon, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="border-none bg-white hover:bg-[#EEF5FF] w-8 h-8 p-1 rounded-lg"
    >
      <Icon width={24} height={24} fill={color} />
    </button>
  );
};

export default IconButton;
