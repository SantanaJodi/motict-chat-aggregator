import { XIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  Icon?: React.ElementType;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  placeholder,
  value,
  Icon,
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-[#EEF5FF] hover:bg-[#D7E4F5] rounded-lg flex flex-row items-center gap-2 p-2 w-full focus:border focus:border-[#AABDD7]",
        className
      )}
    >
      {Icon && <Icon />}
      <input
        className="w-full bg-transparent border-none focus:outline-none text-base placeholder:text-[#AABDD7]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && <XIcon fill="#AABDD7" onClick={() => onChange("")} />}
    </div>
  );
};

export default TextInput;
