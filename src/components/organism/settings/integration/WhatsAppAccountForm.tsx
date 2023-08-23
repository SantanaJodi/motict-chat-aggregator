"use client";
import { Avatar, FieldInput, FieldSwitch } from "@/src/components/atoms";
import React from "react";

interface WhatsAppAccountFormProps {
  isSettings?: boolean;
  onChangeBadge: (_images: FileList) => void;
}

const WhatsAppAccountForm: React.FC<WhatsAppAccountFormProps> = ({
  isSettings,
  onChangeBadge,
}) => {
  return (
    <div className="p-6 pt-0 flex flex-col gap-8">
      {/* Badge */}
      <div className="flex flex-row items-center gap-4">
        <Avatar isEditable onChange={onChangeBadge} />
        <div className="flex flex-col gap-2">
          <p className="font-bold">Channel Badge Icon</p>
          <p className="text-xs text-[#8B9EB7]">
            Upload an image that will be used as your Channel Badge icon. We
            recommend you to upload image 100px x 100 px (square image) for
            better result. Only accept .jpg, .jpeg, or .png file format
          </p>
        </div>
      </div>

      <FieldInput
        name="whatsappName"
        label="WhatsApp Name"
        placeholder="Type WhatsApp Name"
      />
      <FieldInput
        name="whatsappNumber"
        label="WhatsApp Number (+62)"
        placeholder="Type WhatsApp Number"
        disabled={isSettings}
      />
      <FieldInput
        type="password"
        name="token"
        label="Encoded User Token"
        placeholder="Type WhatsApp Encoded User Token"
        disabled={isSettings}
      />
      <FieldInput
        name="whatsappServerUrl"
        label="WhatsApp Server Base URL"
        placeholder="Type WhatsApp Server Base URL"
        disabled={isSettings}
      />
      <div className="w-full flex flex-row items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#0D0F12]">Support SSL</p>
          <p className="text-xs text-[#8B9EB7]">
            Enable this if you already upload your own ssl certificate to your
            WhatsApp server
          </p>
        </div>
        <FieldSwitch name="isSupportSSL" />
      </div>
    </div>
  );
};

export default WhatsAppAccountForm;
