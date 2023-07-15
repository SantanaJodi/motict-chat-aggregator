import clsx from "clsx";
import React from "react";

interface ListDataProps {
  label: string;
  data: string;
  subData?: string;
  size: "small" | "large";
}

const ListData: React.FC<ListDataProps> = ({ data, label, subData, size }) => {
  const isSmall = size === "small";
  return (
    <div className="flex flex-col items-start gap gap-1">
      <p className="text-[12px] leading-[15.62px] text-[#67768B] font-medium">
        {label}
      </p>
      <p
        className={clsx(
          "text-[#0D0F12]",
          isSmall
            ? "text-[14px] leading-[18.23px]"
            : "text-[20px] leading-[26.04px] font-bold"
        )}
      >
        {data}
      </p>
      {subData && (
        <p className="text-[14px] leading-[18.23px] text-[#8B9EB7]">
          {subData}
        </p>
      )}
    </div>
  );
};

export default ListData;
