"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IState {}

const WhatsAppAccountSettingsViewModel = () => {
  const router = useRouter();
  const formModule = useForm<IWhatsAppAccount>({
    defaultValues: {},
  });

  const { isLoading } = useQuery({
    queryFn: () => {
      const dummy: IWhatsAppAccount = {
        badge: "",
        token: "sdjfg8934yt9hgvpiowejrp9230r394r",
        whatsappName: "Wikitoko",
        whatsappNumber: "081234567890",
        whatsappServerUrl: "https://graph.facebook.com",
        isSupportSSL: false,
      };
      formModule.reset(dummy);
    },
  });

  const onSave = (val: IWhatsAppAccount) => {
    toast.success("Changes Saved");
  };

  return {
    isLoading,
    formModule,
    onSave,
  };
};

export default WhatsAppAccountSettingsViewModel;
