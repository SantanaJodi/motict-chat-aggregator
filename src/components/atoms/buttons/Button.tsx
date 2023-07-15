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
  className?: string;
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
  className,
}) => {
  const iconSize = size === "medium" && type !== "link" ? 24 : 16;
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={clsx(
        "rounded-lg gap-1 w-max flex flex-row items-center justify-center",
        type === "primary" && `bg-[${color}]`,
        type === "subtle" && "border border-[#D7E4F5] hover:bg-[#EEF5FF]",
        type === "ghost" && "hover:bg-[#EEF5FF]",
        type === "link" ? `w-max p-0` : "p-2",
        disabled && {
          "bg-[#AABDD7]": type === "primary",
          "bg-[#D7E4F5] border-[#AABDD7]": type === "subtle",
          "bg-[#D7E4F5]": type === "ghost",
          "opacity-50": type === "link",
        },
        className
      )}
    >
      {Icon && (
        <Icon
          width={iconSize}
          height={iconSize}
          fill={clsx(
            disabled
              ? {
                  "#67768B": type === "primary",
                  "#8B9EB7": type === "subtle" || type === "ghost",
                }
              : type === "primary"
              ? "#fff"
              : color
          )}
        />
      )}
      <p
        className={clsx(
          "font-medium",
          type === "primary" && "text-white",
          disabled && {
            "!text-[#67768B]": type === "primary",
            "!text-[#8B9EB7]": type === "subtle",
          },
          type === "link" &&
            `text-[${color}] underline text-[14px] leading-[18.23px] !font-normal`,
          size === "medium" && type !== "link" && "text-[16px]",
          size === "small" && "text-[14px] leading-[18.23px]"
        )}
        style={type === "link" ? { color } : {}}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
