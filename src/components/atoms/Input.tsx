import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  Icon?: React.ElementType;
}

const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  value,
  Icon,
}) => {
  return (
    <div className="bg-[#EEF5FF] rounded-lg flex flex-row items-center gap-2 p-2 w-full">
      {Icon && <Icon />}
      <input
        className="w-full bg-[#EEF5FF] border-none focus:outline-none text-base placeholder:text-[#AABDD7]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
