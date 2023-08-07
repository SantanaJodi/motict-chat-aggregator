import React from "react";
import { Button } from "../buttons";

interface CopyUrlProps {
  label?: string;
  value: string;
}

const CopyUrl: React.FC<CopyUrlProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="font-bold text-[#0D0F12]">{label}</p>}
      <div className="w-full flex flex-row items-center justify-between gap-4">
        <div className="p-2 border border-[#EEF5FF] rounded-lg w-full">
          <p className="text-[#67768B]">{value}</p>
        </div>
        <Button
          variant="subtle"
          label="Copy URL"
          className="!flex-shrink-0"
          onClick={() => navigator.clipboard.writeText(value)}
        />
      </div>
    </div>
  );
};

export default CopyUrl;
