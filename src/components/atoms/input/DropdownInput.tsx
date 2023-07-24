"use client";

import { ChevronDownIcon, XIcon } from "@/public/icons/outline";
import Select, { MultiValueRemoveProps, components } from "react-select";

export interface DropdownInputProps<T> {
  placeholder?: string;
  options: T[];
  onChange: (value: any) => void;
  value: any;
  isMulti?: boolean;
  menuPlacement?: "auto" | "bottom" | "top";
}

const DropdownIndicator = () => <ChevronDownIcon className="cursor-pointer" />;

const MultiValueRemove = (props: MultiValueRemoveProps) => (
  <components.MultiValueRemove {...props}>
    <XIcon className="cursor-pointer" fill="#fff" />
  </components.MultiValueRemove>
);

const DropdownInput = <T extends any>({
  placeholder,
  options,
  isMulti,
  onChange,
  value,
  menuPlacement,
}: DropdownInputProps<T>) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      className="w-full"
      value={value}
      isMulti={isMulti}
      isClearable={false}
      onChange={onChange}
      components={{
        DropdownIndicator,
        MultiValueRemove,
      }}
      menuPlacement={menuPlacement}
      styles={{
        control: (base) => ({
          ...base,
          paddingRight: 8,
          backgroundColor: "#EEF5FF",
          border: "none",
          borderRadius: 8,
          ":hover": {
            backgroundColor: "#D7E4F5",
          },
          ":focus": {
            border: "none",
            outline: "none",
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: "#AABDD7",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#323944",
          borderRadius: 999,
          padding: "0px 4px 0px 8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#fff",
          padding: 0,
          paddingLeft: 0,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "20.83px",
        }),
        multiValueRemove: () => ({
          padding: 0,
        }),
        menu: (base) => ({
          ...base,
          padding: 0,
          border: "1px solid #EEF5FF",
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.08)",
        }),
        menuList: (base) => ({
          ...base,
          padding: 0,
          borderRadius: 8,
        }),
        option: (base, state) => ({
          ...base,
          padding: 16,
          fontSize: 16,
          fontWeight: 400,
          lineHeight: "20.83px",
          color: state.isSelected ? "#fff" : "#0D0F12",
          backgroundColor: state.isSelected ? "#C02716" : "#fff",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#D7E4F5",
            color: "#0D0F12",
          },
        }),
      }}
    />
  );
};

export default DropdownInput;
