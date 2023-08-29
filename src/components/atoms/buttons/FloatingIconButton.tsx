import React, { ChangeEventHandler } from "react";

interface FloatingIconButtonProps {
  Icon: React.ElementType;
  onClick: (_t: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingIconButton: React.FC<FloatingIconButtonProps> = ({
  Icon,
  onClick,
}) => {
  return (
    <div
      className="w-10 h-10 bg-white border border-[#EEF5FF] rounded-full shadow-[0px_0px_16px_0px_rgba(0, 0, 0, 0.16)] flex items-center justify-center relative cursor-pointer"
      style={{
        boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.16)",
      }}
    >
      <Icon fill="#323944" className="cursor-pointer" />
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className="absolute w-10 h-10 opacity-0 cursor-pointer"
        onChange={(t) => onClick(t)}
      />
    </div>
  );
};

export default FloatingIconButton;
