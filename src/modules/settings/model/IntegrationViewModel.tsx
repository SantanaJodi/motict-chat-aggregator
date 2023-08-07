import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { IAccountManagementType } from "../types/account-management-type";

interface IState {}

const IntegrationViewModel = () => {
  const [toggle, setToggle] = useState(true);
  const { isLoading, isError, refetch } = useQuery({
    queryFn: () => {
      return {
        id: "WikiToko",
        name: "WikiToko",
      };
    },
  });

  const onSave = (val: IAccountManagementType) => {
    toast.success("");
  };

  const handleToggle = (val: boolean) => setToggle(val);

  return {
    toggle,
    isLoading,
    onSave,
    handleToggle,
    refetch,
    isError,
  };
};

export default IntegrationViewModel;
