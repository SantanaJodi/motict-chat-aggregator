"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface WhatsAppAccountSettingsViewModelProps {
  account: IWhatsAppAccount;
}

const WhatsAppAccountSettingsViewModel = ({
  account,
}: WhatsAppAccountSettingsViewModelProps) => {
  const formModule = useForm<IWhatsAppAccount>({
    defaultValues: account,
  });

  const onSave = (val: IWhatsAppAccount) => {
    toast.success("Changes Saved");
  };

  const handleBadgeIcon = (_images: FileList) => {
    console.log("🚀 -> handleBadgeIcon :", _images);
  };

  return {
    formModule,
    onSave,
    handleBadgeIcon,
  };
};

export default WhatsAppAccountSettingsViewModel;
