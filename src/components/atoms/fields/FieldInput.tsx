import React from "react";
import { useController } from "react-hook-form";
import { TextInput, TextInputProps } from "../input";

interface FieldInputProps extends Omit<TextInputProps, "value" | "onChange"> {
  name: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  placeholder,
  ...props
}) => {
  const { field } = useController({ name });

  return (
    <TextInput
      value={field.value}
      onChange={field.onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default FieldInput;
