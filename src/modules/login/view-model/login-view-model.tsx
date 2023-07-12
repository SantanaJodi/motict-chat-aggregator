"use client";

import { useMutation } from "react-query";
import { LoginApi } from "../api/login-api";
import { useForm } from "react-hook-form";
import { IReqLogin } from "../types/login-type";

const { loginFn } = LoginApi();

export const LoginViewModel = () => {
  const { mutateAsync: loginAsync } = useMutation("loginFn", (req: IReqLogin) =>
    loginFn(req)
  );

  const formModule = useForm<IReqLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (val: IReqLogin) => {
    await loginAsync(val);
  };

  return { formModule, handleLogin };
};
