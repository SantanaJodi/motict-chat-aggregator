"use client";
import { useController } from "react-hook-form";
import { allTimezones, useTimezoneSelect } from "react-timezone-select";
import { DropdownInput } from "../input";
import { DropdownInputProps } from "../input/DropdownInput";

interface FieldSelectTimezoneProps<T>
  extends Omit<DropdownInputProps<T>, "value" | "onChange" | "options"> {
  name: string;
  label?: string;
}

const labelStyle = "original";
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
};

const FieldSelectTimezone = <T extends object>({
  label,
  name,
  ...props
}: FieldSelectTimezoneProps<T>) => {
  const { field } = useController({ name });
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

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

export default FieldSelectTimezone;
