"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useImmer } from "use-immer";

const defaultHourValue = [
  {
    openFrom: "00:00",
    openUntil: "00:00",
  },
];

const OfficeHourChatModel = () => {
  const [{ confirmModal }, update] = useImmer({
    confirmModal: false,
  });

  const formModule = useForm({
    defaultValues: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      monday: defaultHourValue,
      tuesday: defaultHourValue,
      wednesday: defaultHourValue,
      thursday: defaultHourValue,
      friday: defaultHourValue,
      saturday: defaultHourValue,
      sunday: defaultHourValue,
    },
  });

  const onSaveSetting = (val: any) => {
    console.log("🚀 -> onSaveSetting -> val:", val);
    toast.success("Changes saved");
  };

  return {
    formModule,
    onSaveSetting,
  };
};

export default OfficeHourChatModel;
