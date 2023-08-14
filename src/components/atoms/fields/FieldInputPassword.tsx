"use client";
import { EyeClose, EyeOpen } from "@/public/icons/outline";
import React, { useState } from "react";
import FieldInput, { FieldInputProps } from "./FieldInput";

interface FieldInputPasswordProps extends FieldInputProps {}

const FieldInputPassword: React.FC<FieldInputPasswordProps> = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <FieldInput
      {...props}
      label="Password"
      name="password"
      placeholder="Masukkan password disini.."
      type={visible ? "text" : "password"}
      rightElement={
        visible ? (
          <EyeClose
            fill="#AABDD7"
            onClick={() => setVisible(false)}
            className="cursor-pointer"
          />
        ) : (
          <EyeOpen
            fill="#AABDD7"
            onClick={() => setVisible(true)}
            className="cursor-pointer"
          />
        )
      }
    />
  );
};

export default FieldInputPassword;
