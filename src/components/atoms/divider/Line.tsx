import clsx from "clsx";
import React from "react";

interface LineProps {
  isVertical?: boolean;
}

const Line: React.FC<LineProps> = ({ isVertical }) => {
  return (
    <hr
      className={clsx(
        "border-none h-[1px] bg-[#EEF5FF]",
        isVertical && "w-[1px] !h-[40px]"
      )}
    />
  );
};

export default Line;
