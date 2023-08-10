"use client";
import { SearchIcon } from "@/public/icons/outline";
import { Button, TextInput } from "@/src/components";
import React from "react";

interface TemplatesChatSettingsViewProps {}

const TemplatesChatSettingsView: React.FC<
  TemplatesChatSettingsViewProps
> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row item gap-4 p-6">
        <TextInput
          value={"search"}
          onChange={(val) => {
            console.log("🚀 -> val:", val);
          }}
          Icon={SearchIcon}
          placeholder="Search chat’s command"
        />
        <Button
          variant="primary"
          color="#323944"
          label="+ Add New Template"
          className="!flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default TemplatesChatSettingsView;
