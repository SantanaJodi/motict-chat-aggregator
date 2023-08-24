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
      className="w-10 h-10 bg-white border border-[#EEF5FF] rounded-full shadow-[0px_0px_16px_0px_rgba(0, 0, 0, 0.16)] flex items-center justify-center"
      style={{
        boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.16)",
      }}
    >
      <Icon fill="#323944" />
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        className="top-0 left-0 w-12 h-12"
        onChange={(t) => onClick(t)}
      />
    </div>
  );
};

export default FloatingIconButton;
