import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";
import { IAccountManagementType } from "../types/account-management-type";

interface IState {
  passwordModal: boolean;
}

const AccountManagementComponentModel = () => {
  const [{ passwordModal }, update] = useImmer<IState>({
    passwordModal: false,
  });

  const formModule = useForm<IAccountManagementType>({
    defaultValues: {},
  });

  const { isLoading } = useQuery({
    queryFn: () => {
      const dummy: IAccountManagementType = {
        name: "Wikitoko",
        company: "Wikitoko Store",
        industry: {
          label: "Retail",
          value: "Retail",
        },
        address: "Jalan Sapu Jagad no 123, Magelang, Jawa Tengah",
        phoneNumber: "+6281234567890",
        email: "juminten@gmail.com",
        alternativeEmail1: "bryan@gmail.com",
        alternativeEmail2: "michelle@gmail.com",
        alternativeEmail3: "karin@gmail.com",
      };

      formModule.reset(dummy);
    },
  });

  const onSave = (val: IAccountManagementType) => {
    console.log("🚀 Update Profile -> ", val);
    toast.success("Profile Successfully Changed");
  };

  const handlePasswordModal = (val: boolean) => {
    update((s) => {
      s.passwordModal = val;
    });
  };

  return {
    isLoading,
    formModule,
    passwordModal,
    onSave,
    handlePasswordModal,
  };
};

export default AccountManagementComponentModel;
