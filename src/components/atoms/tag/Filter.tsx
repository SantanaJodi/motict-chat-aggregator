import clsx from "clsx";
import React from "react";

interface FilterProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

const Filter: React.FC<FilterProps> = ({ label, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "px-3 flex flex-shrink-0 py-1 rounded-full cursor-pointer",
        {
          "text-white bg-[#323944]": isActive,
          "text-[#323944] bg-[#EEF5FF] border border-[#D7E4F5]": !isActive,
        }
      )}
    >
      {label}
    </div>
  );
};

export default Filter;
