"use client";
import React from "react";
import { DropdownChild, Header } from "../../atoms";

interface SettingSidePanelProps {}

const SETTINGS_MENU = [
  {
    path: "/settings",
    label: "Account Management",
  },
  {
    path: "/settings/agent",
    label: "Agent Management",
  },
  {
    path: "/settings/chat",
    label: "Chat",
  },
  {
    path: "/settings/integration",
    label: "WhatsApp Integration",
  },
];

const SettingSidePanel: React.FC<SettingSidePanelProps> = () => {
  return (
    <div className="w-[375px] h-full bg-white border-r border-[#EEF5FF] flex-shrink-0">
      <Header title="Settings" />
      {SETTINGS_MENU.map((menu) => (
        <DropdownChild key={menu.path} {...menu} />
      ))}
    </div>
  );
};

export default SettingSidePanel;
