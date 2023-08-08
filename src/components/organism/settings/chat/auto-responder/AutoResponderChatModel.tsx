"use client";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

const AutoResponderChatModel = () => {
  const formModule = useForm({
    defaultValues: {},
  });

  return {
    formModule,
  };
};

export default AutoResponderChatModel;
