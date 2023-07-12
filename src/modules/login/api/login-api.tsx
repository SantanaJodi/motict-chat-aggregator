import { baseAxios } from "@/src/helper/api-helper";
import { GetServerSidePropsContext } from "next";
import { ILogin, IReqLogin } from "../types/login-type";

export const LoginApi = (ctx: GetServerSidePropsContext | null = null) => {
  const api = baseAxios(ctx);

  const loginFn = async (req: IReqLogin) => {
    const res = await api.post<IReqLogin, ILogin>("/login", req);
  };

  return { loginFn };
};
