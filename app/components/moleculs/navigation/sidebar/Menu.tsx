import clsx from "clsx";
import React from "react";
import MenuItem, { MenuItemProps } from "./MenuItem";

interface MenuProps {
  items: MenuItemProps[];
  collapsed: boolean;
  isMain?: boolean;
}

const Menu: React.FC<MenuProps> = ({ items, collapsed, isMain }) => {
  return (
    <div
      className={clsx("w-full flex flex-col", {
        "bg-[#323944] rounded-r-2xl p-2 gap-6": isMain,
        "p-4 gap-4": !isMain,
      })}
    >
      {items.map((item) => (
        <MenuItem
          key={item.path}
          isMain={isMain}
          collapsed={collapsed}
          {...item}
        />
      ))}
    </div>
  );
};

export default Menu;
