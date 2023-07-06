"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps {
  type: "primary" | "subtle" | "ghost" | "link";
  Icon?: React.ElementType;
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  color?: string;
  size?: "medium" | "small";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "primary",
  Icon,
  disabled,
  isLoading,
  color,
  size = "medium",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={clsx(
        "rounded-lg gap-1 w-full",
        !!Icon && "flex flex-row items-center justify-center gap-2",
        type === "primary" && `bg-[${color}]`,
        type === "subtle" && "border border-[#D7E4F5] hover:bg-[#EEF5FF]",
        type === "ghost" && "hover:bg-[#EEF5FF]",
        type === "link" ? `w-max p-0` : "p-2"
      )}
    >
      {Icon && (
        <Icon className={clsx(size === "medium" ? "w-6 h-6" : "w-4 h-4")} />
      )}
      <p
        className={clsx(
          "font-medium",
          type === "primary" && "text-white",
          type === "link" && ` text-[${color}] underline font-normal`,
          size === "medium" && "text-[16px]",
          size === "small" && "text-[14px]"
        )}
        style={type === "link" ? { color } : {}}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
