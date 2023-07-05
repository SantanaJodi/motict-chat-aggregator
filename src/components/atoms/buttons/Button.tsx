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
        color,
        "p-2 rounded-lg gap-1 w-full",
        !!Icon && "flex flex-row items-center justify-center gap-2",
        {
          "border border-[#D7E4F5] hover:bg-[#EEF5FF]": type === "subtle",
        }
      )}
    >
      {Icon && (
        <Icon
          className={clsx({
            "w-6 h-6": size === "medium",
            "w-4 h-4": size === "small",
          })}
        />
      )}
      <p
        className={clsx(
          "font-medium",
          {
            "text-white": type === "primary",
          },
          {
            "text-[16px]": size === "medium",
            "text-[14px]": size === "small",
          }
        )}
      >
        {label}
      </p>
    </button>
  );
};

export default Button;
