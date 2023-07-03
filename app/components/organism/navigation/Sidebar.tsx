"use client";

import {
  BroadcastIcon,
  ChartIcon,
  ChatIcon,
  HelpIcon,
  NotificationIcon,
  PeoplesIcon,
  ProfileIcon,
  SettingsIcon,
} from "@/public/icons/outline";
import { clsx } from "clsx";
import React, { useState } from "react";
import { Header, Menu, MenuItemProps } from "../../moleculs/navigation/sidebar";

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

  const secondary: MenuItemProps[] = [
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
        <Menu items={main} collapsed={collapsed} isMain />
        <Menu items={secondary} collapsed={collapsed} />
      </div>
    </div>
  );
};
