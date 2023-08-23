import { Checked, Stripe } from "@/public/icons/checkbox";
import clsx from "clsx";
import React, { HTMLProps } from "react";

export interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  indeterminate?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  name,
  checked,
  indeterminate,
  ...props
}) => {
  return (
    <label className="inline-block w-6 h-6">
      <input
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div
        className={clsx("rounded-[4px] w-6 h-6 cursor-pointer inline-block", {
          "bg-white border border-[#D7E4F5] hover:bg-[#EEF5FF]":
            !checked && !indeterminate,
          "bg-[#323944] hover:bg-[#0D0F12]": checked || indeterminate,
        })}
      >
        {checked ? <Checked /> : indeterminate ? <Stripe /> : ""}
      </div>
    </label>
  );
};

export default Checkbox;
