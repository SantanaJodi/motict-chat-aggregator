"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ISidebarMenuItem {
  path: string;
  label: string;
  Icon: React.ElementType;
  collapsed?: boolean;
  isMain?: boolean;
}

const SidebarMenuItem: React.FC<ISidebarMenuItem> = ({
  Icon,
  label,
  path,
  collapsed,
  isMain,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={clsx(
        "flex flex-row items-center gap-x-2 relative rounded-lg",
        {
          "justify-center": collapsed,
          "justify-start": !collapsed,
        },
        {
          "p-4  hover:bg-[#0D0F12]": isMain,
          "p-2": !isMain,
        }
      )}
    >
      <Icon size={24} width={24} height={24} className="flex-shrink-0" />
      {!collapsed && (
        <p
          className={clsx("text-[16px]", {
            "text-white": isMain,
            "text-[#0D0F12]": !isMain,
          })}
        >
          {label}
        </p>
      )}
      {pathname == path && (
        <div className="w-4 h-4  flex-shrink-0 bg-[#323944] rounded-full border-4 border-white border-solid absolute -right-4 z-10" />
      )}
    </Link>
  );
};

export default SidebarMenuItem;
