import { XIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";

export interface TextInputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "value" | "onChange"> {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  Icon?: React.ElementType;
  rightElement?: React.ReactNode;
  className?: string;
  disableClear?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  placeholder,
  value,
  Icon,
  className,
  disableClear,
  rightElement,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-[#EEF5FF] hover:bg-[#D7E4F5] rounded-lg flex flex-row items-center gap-2 p-2 w-full focus:border focus:border-[#AABDD7]",
        className,
        props.disabled && "!bg-[#D7E4F5]"
      )}
    >
      {Icon && <Icon />}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...props}
        className={clsx(
          "w-full bg-transparent border-none focus:outline-none text-base placeholder:text-[#AABDD7]",
          props.disabled && "!text-[#AABDD7]"
        )}
      />
      {rightElement
        ? rightElement
        : value &&
          !disableClear &&
          !props.disabled && (
            <XIcon fill="#AABDD7" onClick={() => onChange("")} />
          )}
    </div>
  );
};

export default TextInput;
