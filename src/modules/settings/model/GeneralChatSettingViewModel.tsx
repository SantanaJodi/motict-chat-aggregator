import React from "react";
import { useQuery } from "react-query";

const GeneralChatSettingViewModel = () => {
  const { isLoading } = useQuery({
    queryFn: () => {
      return "";
    },
  });

  return { isLoading };
};

export default GeneralChatSettingViewModel;
