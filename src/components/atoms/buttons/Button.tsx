"use client";

import clsx from "clsx";
import React from "react";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  variant: "primary" | "subtle" | "ghost" | "link";
  Icon?: React.ElementType;
  label?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  color?: string;
  size?: "medium" | "small";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  Icon,
  disabled,
  isLoading,
  color,
  size = "medium",
  className,
}) => {
  const iconSize = size === "medium" && variant !== "link" ? 24 : 16;
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={clsx(
        "rounded-lg gap-1 w-max flex flex-row items-center justify-center",
        variant === "subtle" && "border border-[#D7E4F5] hover:bg-[#EEF5FF]",
        variant === "ghost" && "hover:bg-[#EEF5FF]",
        variant === "link" ? `w-max p-0` : "p-2",
        disabled && {
          "bg-[#AABDD7]": variant === "primary",
          "bg-[#D7E4F5] border-[#AABDD7]": variant === "subtle",
          "bg-[#D7E4F5]": variant === "ghost",
          "opacity-50": variant === "link",
        },
        className
      )}
      style={{
        background: variant === "primary" ? color : "",
      }}
    >
      {Icon && (
        <Icon
          width={iconSize}
          height={iconSize}
          fill={clsx(
            disabled
              ? {
                  "#67768B": variant === "primary",
                  "#8B9EB7": variant === "subtle" || variant === "ghost",
                }
              : variant === "primary"
              ? "#fff"
              : color
          )}
        />
      )}
      {label && (
        <p
          className={clsx(
            "font-medium",
            variant === "primary" && "text-white",
            disabled && {
              "!text-[#67768B]": variant === "primary",
              "!text-[#8B9EB7]": variant === "subtle",
            },
            variant === "link" &&
              `text-[${color}] underline text-[14px] leading-[18.23px] !font-normal`,
            variant == "ghost" && `text-[${color}]`,
            size === "medium" && variant !== "link" && "text-[16px]",
            size === "small" && "text-[14px] leading-[18.23px]"
          )}
          style={variant === "link" ? { color } : {}}
        >
          {label}
        </p>
      )}
    </button>
  );
};

export default Button;
