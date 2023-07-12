import React from "react";

interface FloatingIconButtonProps {
  Icon: React.ElementType;
}

const FloatingIconButton: React.FC<FloatingIconButtonProps> = ({ Icon }) => {
  return (
    <button
      className="w-10 h-10 bg-white border border-[#EEF5FF] rounded-full shadow-[0px_0px_16px_0px_rgba(0, 0, 0, 0.16)] flex items-center justify-center"
      style={{
        boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.16)",
      }}
    >
      <Icon fill="#323944" />
    </button>
  );
};

export default FloatingIconButton;
