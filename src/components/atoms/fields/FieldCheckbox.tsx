"use client";
import clsx from "clsx";
import React from "react";
import { useController } from "react-hook-form";
import Checkbox, { CheckboxProps } from "../input/Checkbox";

interface FieldCheckboxProps extends CheckboxProps {
  name: string;
  label: string;
  containerClassName?: string;
}

const FieldCheckbox: React.FC<FieldCheckboxProps> = ({
  name,
  label,
  containerClassName,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div
      className={clsx("flex flex-row items-center gap-4", containerClassName)}
    >
      <Checkbox checked={field.value} onChange={field.onChange} {...props} />
      <p className="font-medium text-sm text-[#0D0F12]">{label}</p>
    </div>
  );
};

export default FieldCheckbox;
