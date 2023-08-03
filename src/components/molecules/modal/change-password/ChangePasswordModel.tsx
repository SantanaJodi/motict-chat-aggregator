import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface IChangePassword {
  old: string;
  new: string;
  confirm: string;
}

const ChangePasswordModel = () => {
  const formModule = useForm<IChangePassword>({
    defaultValues: {},
  });

  const onChangePassword = (val: IChangePassword) => {
    console.log("🚀 onChangePassword value -> ", val);
    toast.success("Password Successfully Changed");
  };

  return { formModule, onChangePassword };
};

export default ChangePasswordModel;
