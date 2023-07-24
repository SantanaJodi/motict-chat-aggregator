import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useImmer } from "use-immer";
import { IContactCreate } from "../types/contact-type";

interface IState {
  type: string;
}

const AddContactViewModel = () => {
  const formModule = useForm<IContactCreate>();
  const [state, update] = useImmer<IState>({
    type: "single",
  });

  const handleChangeType = (val: string) => {
    update((s) => {
      s.type = val;
    });
  };

  const handleSaveContact = (value: IContactCreate) => {
    console.log("🚀 -> handleSaveContact:", value);
    toast.success("1 contact added");
    // Duplicate case
    // toast.error("Failed! Duplicate contact");
  };

  return { state, handleChangeType, formModule, handleSaveContact };
};

export default AddContactViewModel;
