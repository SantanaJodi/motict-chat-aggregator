"use client";
import React, { PropsWithChildren, useState } from "react";
import DropdownHead, { DropdownHeadProps } from "./DropdownHead";

interface DropdownProps
  extends Pick<DropdownHeadProps, "title" | "hideBorder">,
    PropsWithChildren {}

const Dropdown: React.FC<DropdownProps> = ({ title, hideBorder, children }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="flex flex-col">
      <DropdownHead
        title={title}
        isExpand={isExpand}
        onExpand={() => setIsExpand((val) => !val)}
        hideBorder={hideBorder}
      />
      {isExpand && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
