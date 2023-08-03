"use client";
import React from "react";
import { useController } from "react-hook-form";
import { TextInput, TextInputProps } from "../input";

interface FieldInputProps extends Omit<TextInputProps, "value" | "onChange"> {
  name: string;
  label?: string;
  hints?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  label,
  placeholder,
  hints,
  ...props
}) => {
  const { field } = useController({ name });

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-bold text-[#0D0F12]">{label}</p>}
      <TextInput
        value={field.value}
        onChange={field.onChange}
        placeholder={placeholder}
        {...props}
      />
      {hints && <p className="text-sm text-[#AABDD7]">{hints}</p>}
    </div>
  );
};

export default FieldInput;
