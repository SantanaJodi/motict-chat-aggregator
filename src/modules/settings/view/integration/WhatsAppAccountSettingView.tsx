"use client";
import {
  Breadcrumbs,
  Button,
  CopyUrl,
  WhatsAppAccountForm,
} from "@/src/components";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FormProvider } from "react-hook-form";
import WhatsAppAccountSettingsViewModel from "../../model/WhatsAppAccountSettingsViewModel";

interface WhatsAppAccountSettingViewProps {}

const WhatsAppAccountSettingView: React.FC<
  WhatsAppAccountSettingViewProps
> = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { formModule, isLoading, onSave, handleBadgeIcon } =
    WhatsAppAccountSettingsViewModel();
  return (
    <div className="w-full h-full bg-white overflow-y-auto">
      <div className="p-6">
        <Breadcrumbs
          items={[
            {
              label: "WhatsApp Integration",
              path: "/settings/integration",
            },
            {
              label: "Account Settings",
              path: pathname || "",
            },
          ]}
        />
      </div>
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(onSave)}>
          <WhatsAppAccountForm isSettings onChangeBadge={handleBadgeIcon} />
          <div className="p-6 pt-2 flex flex-col gap-8">
            <CopyUrl
              label="Webhook URL"
              value="https://omnichannel.qiscus.com/fagha-innczcnj16zfwww/wa/1185"
            />
            <div className="flex flex-row items-center justify-between">
              <Button variant="primary" color="#C02716" label="Disconnect" />
              <div className="flex flex-row items-center gap-4">
                <Button
                  variant="ghost"
                  label="Back"
                  onClick={() => router.back()}
                />
                <Button
                  type="submit"
                  variant="primary"
                  color="#323944"
                  label="Save"
                  disabled={!formModule.formState.isDirty}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default WhatsAppAccountSettingView;
