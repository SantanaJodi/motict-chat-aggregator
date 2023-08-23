"use client";
import {
  Button,
  Dropdown,
  FieldSelectTimezone,
  Line,
} from "@/src/components/atoms";
import { ListChatSchedule } from "@/src/components/molecules";
import { DevTool } from "@hookform/devtools";
import React from "react";
import { FormProvider } from "react-hook-form";
import OfficeHourChatModel from "./OfficeHourChatModel";
interface OfficeHourChatProps {}

const OfficeHourChat: React.FC<OfficeHourChatProps> = () => {
  const { formModule, onSaveSetting } = OfficeHourChatModel();

  return (
    <Dropdown title="Office Hour">
      <div className="flex flex-col gap-6 px-6 pb-6">
        <p className="text-xs text-[#8B9EB7]">
          Admin can set the services’ operating hours. The Admin can also set
          several operating hours in a day. In addition, Admin can set their
          hours according to their country’s time zone.
        </p>
        <FormProvider {...formModule}>
          <form onSubmit={formModule.handleSubmit(onSaveSetting)}>
            <div className="flex flex-col gap-6">
              <FieldSelectTimezone name="timezone" label="Set Timezone" />
              <Line />
              <p className="text-sm text-[#0D0F12] font-bold">
                Office Hour Schedule
              </p>
              <ListChatSchedule name="monday" />
              <ListChatSchedule name="tuesday" />
              <ListChatSchedule name="wednesday" />
              <ListChatSchedule name="thursday" />
              <ListChatSchedule name="friday" />
              <ListChatSchedule name="saturday" />
              <ListChatSchedule name="sunday" />
              <Button
                type="submit"
                variant="primary"
                label="Save Settings"
                className="!self-end"
                disabled={!formModule.formState.isDirty}
              />
            </div>
          </form>
        </FormProvider>
      </div>
      <DevTool control={formModule.control} />
    </Dropdown>
  );
};

export default OfficeHourChat;
