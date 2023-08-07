import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IAccountManagementType } from "../types/account-management-type";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IState {}

const IntegrationViewModel = () => {
  const [toggle, setToggle] = useState(true);
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: () => {
      return {
        badge: "",
        token: "isdfj894509hfsfsad928fndasi898978bdlkw4md89",
        whatsappName: "Wikitoko",
        whatsappNumber: "081234567890",
        whatsappServerUrl: "https://graph.facebook.com",
        isSupportSSL: false,
      } as IWhatsAppAccount;
    },
  });

  const onSave = (val: IAccountManagementType) => {
    toast.success("");
  };

  const handleToggle = (val: boolean) => setToggle(val);

  return {
    data,
    toggle,
    isLoading,
    onSave,
    handleToggle,
    refetch,
    isError,
  };
};

export default IntegrationViewModel;
