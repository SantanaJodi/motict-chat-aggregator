"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IAddWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IState {}

const AddWhatsAppAccountViewModel = () => {
  const router = useRouter();
  const formModule = useForm<IAddWhatsAppAccount>({
    defaultValues: {},
  });

  const { isLoading } = useQuery({
    queryFn: () => {
      const dummy: IAddWhatsAppAccount = {
        badge: "",
        token: "",
        whatsappName: "",
        whatsappNumber: "",
        whatsappServerUrl: "",
        isSupportSSL: false,
      };
      formModule.reset(dummy);
    },
  });

  const onAdd = (val: IAddWhatsAppAccount) => {
    toast.success("WhatsApp Account Successfully Added");
  };

  return {
    isLoading,
    formModule,
    onAdd,
  };
};

export default AddWhatsAppAccountViewModel;
