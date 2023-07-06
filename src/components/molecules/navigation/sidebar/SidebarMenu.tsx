import clsx from "clsx";
import React from "react";
import SidebarMenuItem, { ISidebarMenuItem } from "./SidebarMenuItem";

interface SidebarMenuProps {
  items: ISidebarMenuItem[];
  collapsed: boolean;
  isMain?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  collapsed,
  isMain,
}) => {
  return (
    <div
      className={clsx("w-full flex flex-col", {
        "bg-[#323944] rounded-r-2xl p-2 gap-6": isMain,
        "p-4 gap-4": !isMain,
      })}
    >
      {items.map((item) => (
        <SidebarMenuItem
          key={item.path}
          isMain={isMain}
          collapsed={collapsed}
          {...item}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
