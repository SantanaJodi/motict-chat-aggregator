"use client";
import { allTimezones, useTimezoneSelect } from "react-timezone-select";
import DropdownInput, { DropdownInputProps } from "../DropdownInput";

interface TimezoneSelectProps<T>
  extends Omit<DropdownInputProps<T>, "options"> {
  label?: string;
}

const labelStyle = "original";
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
};

const TimezoneSelect = <T extends object>({
  label,
  onChange,
  value,
  ...props
}: TimezoneSelectProps<T>) => {
  const { options } = useTimezoneSelect({
    labelStyle,
    timezones,
    displayValue: "UTC",
  });

  return (
    <div className="flex flex-col gap-2 ">
      {label && <p className="font-bold text-[#0D0F12]">{label}</p>}
      <DropdownInput
        {...props}
        options={options}
        value={value}
        onChange={onChange}
        customLabel={(e) => {
          const utc = e.offset;
          return utc >= 0 ? `UTC + ${utc}` : `UTC ${utc}`;
        }}
      />
    </div>
  );
};

export default TimezoneSelect;
