"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useImmer } from "use-immer";

interface IAutoResponder {
  autoWhenOnline: string;
  isKeepSending: boolean;
  autoWhenOffline: string;
  isSendEvery: boolean;
}

const AutoResponderChatModel = () => {
  const [{ confirmModal }, update] = useImmer({
    confirmModal: false,
  });

  const formModule = useForm<IAutoResponder>({
    defaultValues: {},
  });

  const onSaveChange = (val: any) => {
    toast.success("Changes saved");
  };

  return {
    formModule,
    onSaveChange,
  };
};

export default AutoResponderChatModel;
