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
import { ISidebarMenuItem, SidebarHeader, SidebarMenu } from "../../molecules";

interface SidebarProps {
  isExpand?: boolean;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(true);

  const main: ISidebarMenuItem[] = [
    {
      path: "/",
      label: "Chatroom",
      Icon: ChatIcon,
    },
    // EXCLUDED IN MVP
    // {
    //   path: "/broadcast",
    //   label: "Broadcast",
    //   Icon: BroadcastIcon,
    // },
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

  const secondary: ISidebarMenuItem[] = [
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
        collapsed ? "w-[72px]" : "w-[200px]"
      )}
    >
      <div className="flex h-full w-full flex-col items-start justify-between">
        <SidebarHeader
          collapsed={collapsed}
          toggle={() => setCollapsed((value) => !value)}
        />
        <SidebarMenu items={main} collapsed={collapsed} isMain />
        <SidebarMenu items={secondary} collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
