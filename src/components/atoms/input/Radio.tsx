import React from "react";

interface RadioProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const Radio: React.FC<RadioProps> = ({ name, onChange, label, value }) => {
  return (
    <div className="px-4 py-6 border-b border-[#EEF5FF]">
      <input
        type="radio"
        id={name}
        name="radio-group"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Radio;
