"use client";

import { useMutation } from "react-query";
import { LoginApi } from "../api/login-api";
import { useForm } from "react-hook-form";
import { IReqLogin } from "../types/login-type";
import { useAuthContext } from "@/src/hooks/auth-context";
import { useRouter } from "next/navigation";

const { loginFn } = LoginApi();

export const LoginViewModel = () => {
  const router = useRouter();
  const { handleSetToken } = useAuthContext();
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
    const res = await loginAsync(val);
    handleSetToken(res?.data?.data?.token);
    router.replace("/");
  };

  return { formModule, handleLogin };
};
