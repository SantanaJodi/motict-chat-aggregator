"use client";
import React from "react";
import { useController } from "react-hook-form";
import Switch, { SwitchProps } from "../input/Switch";

interface FieldSwitchProps extends SwitchProps {
  name: string;
}

const FieldSwitch: React.FC<FieldSwitchProps> = ({ name, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return <Switch checked={field.value} onChange={field.onChange} {...props} />;
};

export default FieldSwitch;
