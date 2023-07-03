"use client";

import {
  BroadcastIcon,
  ChartIcon,
  ChatIcon,
  HelpIcon,
  PeoplesIcon,
  SettingsIcon,
} from "@/public/icons/outline";
import { clsx } from "clsx";
import React, { useState } from "react";
import {
  Header,
  MenuItem,
  MenuItemProps,
} from "../../atoms/navigation/sidebar";

interface SidebarProps {
  isExpand?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const main: MenuItemProps[] = [
    {
      path: "/",
      label: "Chatroom",
      Icon: ChatIcon,
    },
    {
      path: "/broadcast",
      label: "Broadcast",
      Icon: BroadcastIcon,
    },
    {
      path: "/contact",
      label: "Contact",
      Icon: PeoplesIcon,
    },
    {
      path: "/report",
      label: "Report",
      Icon: ChartIcon,
    },
    {
      path: "/settings",
      label: "Settings",
      Icon: SettingsIcon,
    },
  ];

  const footer: MenuItemProps[] = [
    {
      path: "/help",
      label: "Help",
      Icon: HelpIcon,
    },
    // EXCLUDED SINCE STILL CONSIDERED BY MAS RENDI
    // {
    //   path: "/notification",
    //   label: "Notification",
    //   Icon: NotificationIcon,
    // },
    // {
    //   path: "/profile",
    //   label: "Profile",
    //   Icon: ProfileIcon,
    // },
  ];

  return (
    <div
      className={clsx(
        "h-full transition-transform bg-white border-r border-[#EEF5FF]",
        {
          "max-w-[72px]": collapsed,
          "max-w-[200px]": !collapsed,
        }
      )}
    >
      <div className="flex h-full w-full flex-col items-start justify-between">
        <Header
          collapsed={collapsed}
          toggle={() => setCollapsed((value) => !value)}
        />
        <div
          className={`bg-[#323944] rounded-r-2xl w-full p-2 flex flex-col gap-6`}
        >
          {main.map((item) => (
            <MenuItem key={item.path} collapsed={collapsed} isMain {...item} />
          ))}
        </div>
        <div className={`w-full p-4 flex flex-col gap-[16px]`}>
          {footer.map((item) => (
            <MenuItem key={item.path} collapsed={collapsed} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
