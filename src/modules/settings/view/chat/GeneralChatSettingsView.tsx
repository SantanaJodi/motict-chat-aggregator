"use client";

import { AutoResponderChat, Loading, OfficeHourChat } from "@/src/components";
import React from "react";
import GeneralChatSettingViewModel from "../../model/GeneralChatSettingViewModel";

interface GeneralChatSettingsViewProps {}

const GeneralChatSettingsView: React.FC<GeneralChatSettingsViewProps> = () => {
  const { isLoading } = GeneralChatSettingViewModel();

  if (isLoading) {
    return (
      <div className="p-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-6 w-full">
      <div className="flex flex-col border border-[#EEF5FF] rounded-lg">
        <AutoResponderChat />
        <OfficeHourChat />
      </div>
    </div>
  );
};

export default GeneralChatSettingsView;
