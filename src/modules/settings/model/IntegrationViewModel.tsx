import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IAccountManagementType } from "../types/account-management-type";
import { IWhatsAppAccount } from "../types/whatsapp-integration-type";

interface IntegrationViewModelProps {
  accounts: IWhatsAppAccount[];
}

const IntegrationViewModel = ({ accounts }: IntegrationViewModelProps) => {
  const [toggle, setToggle] = useState(true);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["whatsappAccountList", accounts],
    queryFn: ({ queryKey }) => queryKey[1] as IWhatsAppAccount[],
  });

  const onSave = (val: IAccountManagementType) => {
    toast.success("");
  };

  const handleToggle = (val: boolean, token: string) => {
    // API : set active or not for every Whatsapp Account
    // change params based on BE req
  };

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
