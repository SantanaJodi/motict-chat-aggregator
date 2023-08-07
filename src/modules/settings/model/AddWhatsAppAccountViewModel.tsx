"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IState {}

const AddWhatsAppAccountViewModel = () => {
  const router = useRouter();
  const formModule = useForm<IWhatsAppAccount>({
    defaultValues: {},
  });

  const { isLoading } = useQuery({
    queryFn: () => {
      const dummy: IWhatsAppAccount = {
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

  const onAdd = (val: IWhatsAppAccount) => {
    toast.success("WhatsApp Account Successfully Added");
  };

  return {
    isLoading,
    formModule,
    onAdd,
  };
};

export default AddWhatsAppAccountViewModel;
