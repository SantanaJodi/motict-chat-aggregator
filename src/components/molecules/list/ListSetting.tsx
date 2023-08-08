import React from "react";
import { FieldSwitch } from "../../atoms";

interface ListSettingProps {
  name: string;
  label: string;
}

const ListSetting: React.FC<ListSettingProps> = ({ label, name }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <p className="text-sm text-[#0D0F12]">{label}</p>
      <FieldSwitch name={name} />
    </div>
  );
};

export default ListSetting;
