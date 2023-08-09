"use client";
import { ClockIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import { useController } from "react-hook-form";
import { TextInputProps } from "../input";

interface FieldInputTimeProps
  extends Omit<TextInputProps, "value" | "onChange"> {
  name: string;
  label?: string;
  containerClassName?: string;
}

const FieldInputTime: React.FC<FieldInputTimeProps> = ({
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-bold text-[#0D0F12]">{label}</p>}
      <div
        className={clsx(
          "bg-[#EEF5FF] hover:bg-[#D7E4F5] rounded-lg flex flex-row items-center gap-2 p-2 w-full focus:border focus:border-[#AABDD7]",
          props.disabled && "!bg-[#D7E4F5]",
          containerClassName
        )}
      >
        <ClockIcon fill="#AABDD7" />
        <input
          type="time"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          className={clsx(
            "w-full bg-transparent border-none focus:outline-none text-base placeholder:text-[#AABDD7]",
            props.disabled && "!text-[#AABDD7]"
          )}
        />
      </div>
      {error?.message && (
        <p
          className="text-sm"
          style={{
            color: error ? "#C02716" : "#AABDD7",
          }}
        >
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FieldInputTime;
