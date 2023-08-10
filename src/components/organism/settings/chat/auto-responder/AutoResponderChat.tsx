"use client";
import { Button, Dropdown, FieldTextArea, Line } from "@/src/components/atoms";
import { ListSetting, WarningCard } from "@/src/components/molecules";
import React from "react";
import { FormProvider } from "react-hook-form";
import AutoResponderChatModel from "./AutoResponderChatModel";

interface AutoResponderChatProps {}

const AutoResponderChat: React.FC<AutoResponderChatProps> = () => {
  const { formModule, onSaveChange } = AutoResponderChatModel();

  const fields = formModule.watch();

  return (
    <Dropdown title="Auto-Responder" hideBorder>
      <div className="flex flex-col gap-6 px-6 pb-6">
        <p className="text-xs text-[#8B9EB7]">
          Auto-responder is a system which automatically sends messages
          according to the customer service operating hours. Admin can set the
          autoresponder message when services are both in the during and outside
          the office hour.
        </p>
        <p className="text-xs text-[#323944]">
          Activating the general auto-responder will send the message to all
          channels except WhatsApp Channel. You must activate the autoresponder
          WhatsApp channel if you want to send an auto-responder system for your
          WhatsApp channel. To access the auto-responder channel, follow this
          step:
        </p>
        <p className="text-xs text-[#323944]">
          1. Go to Integration Menu
          <br />
          2. Choose your WhatsApp Channel
          <br />
          3. Click Auto-Responder
          <br />
          4. Set Channel Auto-Responder
          <br />
          5. Activate the toggle
          <br />
        </p>
        <WarningCard
          title="Attention"
          desc="Please note that this setting will be only working if the chatbot setting is disabled."
        />
        <Line />
        <FormProvider {...formModule}>
          <form onSubmit={formModule.handleSubmit(onSaveChange)}>
            <div className="flex flex-col gap-6">
              <FieldTextArea
                name="autoWhenOnline"
                label="Auto-responder During Office Hour"
                desc="When you set the autoresponder message, it will only be sent once for one conversation room on office hour."
                placeholder="Your auto responder when online"
              />
              <ListSetting
                label="Keep sending every time a customer initiates a chat session even though the room has been resolved"
                name="isKeepSending"
                disabled={!fields.autoWhenOnline}
              />
              <Line />
              <FieldTextArea
                name="autoWhenOffline"
                label="Auto-responder Outside Office Hour"
                desc="When you set the autoresponder message, it will only be sent once at the beginning of each conversation outside office hour."
                placeholder="Your auto responder when offline"
              />
              <ListSetting
                label="Sent every time a customer sends a message"
                name="isSendEvery"
                disabled={!fields.autoWhenOffline}
              />
              <Button
                label="Save Settings"
                variant="primary"
                color="#323944"
                className="!self-end"
                disabled={!formModule.formState.isDirty}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </Dropdown>
  );
};

export default AutoResponderChat;
