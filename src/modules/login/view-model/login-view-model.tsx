"use client";

import { useAuthContext } from "@/src/hooks/auth-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";
import * as z from "zod";
import { LoginApi } from "../api/login-api";
import { IReqLogin } from "../types/login-type";

const { loginFn } = LoginApi();

const schema = z.object({
  email: z.string({
    invalid_type_error: "Check your email",
  }),
  password: z.string({
    invalid_type_error: "Check your password",
  }),
});

export const LoginViewModel = () => {
  const router = useRouter();
  const { handleSetToken } = useAuthContext();
  const { mutateAsync: loginAsync, isLoading } = useMutation(
    "loginFn",
    (req: IReqLogin) =>
      loginFn(req).then((res) => {
        handleSetToken("Bearer " + res?.data?.data?.token);
      }),
    {
      onError: (err) => {
        toast.error("Wrong email / password combination");
      },
      onSuccess: () => {
        router.replace("/");
      },
    }
  );

  const formModule = useForm<IReqLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const handleLogin = async (val: IReqLogin) => {
    await loginAsync(val);
  };

  return { formModule, isLoading, handleLogin };
};
