"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IState {}

const AddWhatsAppAccountViewModel = () => {
  const router = useRouter();
  const formModule = useForm<IWhatsAppAccount>({
    defaultValues: {},
  });

  const onAdd = (val: IWhatsAppAccount) => {
    toast.success("WhatsApp Account Successfully Added");
    router.push("/settings/integration");
  };

  const handleBadgeIcon = (_images: FileList) => {
    console.log("🚀 -> handleBadgeIcon -> _images:", _images);
  };

  return {
    formModule,
    onAdd,
    handleBadgeIcon,
  };
};

export default AddWhatsAppAccountViewModel;
