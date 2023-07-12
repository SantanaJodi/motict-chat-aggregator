import axios from "axios";
import { GetServerSidePropsContext } from "next";

import { BASEURL } from "../constant/config-api";

const BASE_URL = `${BASEURL}/`;

export const baseAxios = (ctx: GetServerSidePropsContext | null = null) => {
  const baseApi = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    },
  });

  //   const cookies = ctx ? nookies.get(ctx) : parseCookies();

  //   if (cookies.token) {
  //     baseApi.defaults.headers.common["Authorization"] =
  //       "Bearer " + cookies.token;
  //   }

  baseApi.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const errCode = error?.response?.status as number;
      // const message = error

      if (errCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        // const res = await refreshAccessTokenFn({
        //   refreshToken: cookies.refreshToken,
        //   token: cookies.token,
        // });

        // if (res) {
        //   baseApi.defaults.headers.common["Authorization"] =
        //     "Bearer " + res.newToken;

        //   setCookie(ctx, "token", res.newToken, { path: "/" });
        // }

        return await baseApi(originalRequest);
      }

      if (error?.response?.data?.message === "INVALID_TOKEN") {
        // destroyCookie(ctx, "token", {
        //   path: "/",
        // });
        // destroyCookie(ctx, "refreshToken", {
        //   path: "/",
        // });
        // destroyCookie(ctx, "phoneNumber", {
        //   path: "/",
        // });
        // destroyCookie(ctx, "isNewUser", {
        //   path: "/",
        // });
        // destroyCookie(ctx, "expiration", {
        //   path: "/",
        // });
        // if (ctx) {
        //   return {
        //     destination: "/auth",
        //     permanent: true,
        //   };
        // }
        document.location.href = "/auth";

        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return baseApi;
};
