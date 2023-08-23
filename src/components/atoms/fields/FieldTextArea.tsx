"use client";
import clsx from "clsx";
import React from "react";
import { useController } from "react-hook-form";

interface FieldTextAreaProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  desc?: string;
}

const FieldTextArea: React.FC<FieldTextAreaProps> = ({
  name,
  label,
  placeholder,
  desc,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-bold text-sm text-[#0D0F12]">{label}</p>}
      {desc && <p className="text-sm text-[#8B9EB7] mt-1 mb-6">{desc}</p>}
      <textarea
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        placeholder={placeholder}
        className={clsx(
          props.className,
          "h-[130px] p-2 bg-[#EEF5FF] hover:bg-[#D7E4F5] rounded-lg  focus:outline-none placeholder:text-[#AABDD7]",
          props.disabled && "!text-[#AABDD7]",
          error?.message && "border border-[#C02716]"
        )}
      ></textarea>
      {error?.message && (
        <p className="text-sm" style={{ color: error ? "#C02716" : "#AABDD7" }}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FieldTextArea;
