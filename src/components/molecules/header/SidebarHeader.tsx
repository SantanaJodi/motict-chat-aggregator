import { ChevronLeftIcon, ChevronRightIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";
import { Logo } from "../../atoms";

interface SidebarHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ collapsed, toggle }) => {
  return (
    <div className={clsx("relative w-full", collapsed ? "p-4" : " px-4 py-6")}>
      <Logo collapsed={collapsed} />
      <div
        onClick={toggle}
        className="absolute top-6 -right-3 border border-[#EEF5FF] rounded-full bg-white hover:bg-[#EEF5FF] cursor-pointer z-10"
      >
        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>
    </div>
  );
};

export default SidebarHeader;
