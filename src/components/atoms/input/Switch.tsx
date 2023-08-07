import clsx from "clsx";
import React from "react";

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {}

const Switch: React.FC<SwitchProps> = ({
  disabled,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <div
        className={clsx(
          "w-8 h-5  rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:-left-[2px]",
          disabled
            ? "bg-[#EEF5FF]"
            : checked
            ? "peer-checked:bg-[#4ABF71] peer-checked:hover:bg-[#1E6435]"
            : "bg-[#D7E4F5] hover:bg-[#8B9EB7]"
        )}
      />
    </label>
  );
};

export default Switch;
