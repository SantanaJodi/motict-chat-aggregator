import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
interface IChangePassword {
  old: string;
  new: string;
  confirm: string;
}

interface ChangePasswordModelProps {
  onClose: () => void;
}

const schema = z
  .object({
    old: z.string(),
    new: z
      .string()
      .regex(
        /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/,
        "Use a combination of letters and numbers"
      ),
    confirm: z.string(),
  })
  .refine((data) => data.new === data.confirm, {
    message: "Password not matched!",
    path: ["confirm"],
  });

const ChangePasswordModel = ({ onClose }: ChangePasswordModelProps) => {
  const formModule = useForm<IChangePassword>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const onChangePassword = (val: IChangePassword) => {
    const oldPass = "123";

    if (val.old !== oldPass) {
      return formModule.setError("old", { message: "Wrong Password" });
    }
    toast.success("Password Successfully Changed");
    onClose();
  };

  return { formModule, onChangePassword };
};

export default ChangePasswordModel;
