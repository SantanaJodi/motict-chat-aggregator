import { Logo } from "@/app/components/atoms";
import { ChevronLeftIcon, ChevronRightIcon } from "@/public/icons/outline";
import clsx from "clsx";
import React from "react";

interface SidebarHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ collapsed, toggle }) => {
  return (
    <div className={clsx("relative py-6 w-full px-6", "px-4" && !collapsed)}>
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
