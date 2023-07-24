import React from "react";
import { useController } from "react-hook-form";
import { TextInput, TextInputProps } from "../input";

interface FieldInputProps extends Omit<TextInputProps, "value" | "onChange"> {
  name: string;
  label?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  label,
  placeholder,
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
    </div>
  );
};

export default FieldInput;
