"use client";
import { Filter } from "@/src/components/atoms/tag";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useState } from "react";

interface ChatSettingsLayoutProps extends PropsWithChildren {}

const TABS = [
  {
    label: "General",
    path: "/settings/chat",
  },
  {
    label: "Templates",
    path: "/settings/chat/templates",
  },
];

const ChatSettingsLayout: React.FC<ChatSettingsLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="p-6 border-b border-[#EEF5FF] flex flex-col gap-6">
        <h2 className="font-bold text-xl text-[#0D0F12]">Chat</h2>
        <div className="flex flex-row items-center gap-4">
          {TABS.map((item) => (
            <Filter
              key={item.label}
              label={item.label}
              isActive={item === activeTab}
              onClick={() => {
                router.push(item.path);
                setActiveTab(item);
              }}
            />
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ChatSettingsLayout;
