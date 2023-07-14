import { baseAxios } from "@/src/helper/api-helper";
import { GetServerSidePropsContext } from "next";
import { ILogin, IReqLogin } from "../types/login-type";
import { Axios, AxiosResponse } from "axios";
import { GlobalResData } from "@/src/types/common-types";

export const LoginApi = (ctx: GetServerSidePropsContext | null = null) => {
  const api = baseAxios(ctx);

  const loginFn = (req: IReqLogin) => {
    return api.post<IReqLogin, AxiosResponse<GlobalResData<ILogin>>>(
      "api/login",
      req
    );
  };

  return { loginFn };
};
