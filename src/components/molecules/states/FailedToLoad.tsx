import { FailedIcon, RefreshIcon } from "@/public/icons/outline";
import React from "react";
import { Button } from "../../atoms";

interface FailedToLoadProps {
  onReload: () => void;
}

const FailedToLoad: React.FC<FailedToLoadProps> = ({ onReload }) => {
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <FailedIcon width={80} height={80} fill="#8B9EB7" />
      <p className="text-[#8B9EB7]">Failed To Load Data</p>
      <Button
        variant="subtle"
        label="Reload"
        Icon={RefreshIcon}
        onClick={onReload}
        className="!w-full"
      />
    </div>
  );
};

export default FailedToLoad;
