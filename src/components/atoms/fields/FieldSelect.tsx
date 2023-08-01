"use client";
import { useController } from "react-hook-form";
import { DropdownInput } from "../input";
import { DropdownInputProps } from "../input/DropdownInput";

interface FieldSelectProps<T>
  extends Omit<DropdownInputProps<T>, "value" | "onChange"> {
  name: string;
  label?: string;
}

const FieldSelect = <T extends object>({
  options,
  label,
  name,
  ...props
}: FieldSelectProps<T>) => {
  const { field } = useController({ name });

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-bold text-[#0D0F12]">{label}</p>}
      <DropdownInput
        options={options}
        value={field.value}
        onChange={field.onChange}
        {...props}
      />
    </div>
  );
};

export default FieldSelect;
