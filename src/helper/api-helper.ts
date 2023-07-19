import axios from "axios";

import Cookies from "js-cookie";

export const baseAxios = (nonAuth?: boolean) => {
  let Authorization;
  if (!nonAuth) {
    const cookieToken = Cookies.get("token");
    Authorization = "Bearer " + cookieToken;
  }
  const baseApi = axios.create({
    timeout: 30000,
    timeoutErrorMessage: "Time out!",
    headers: { Authorization },
  });

  baseApi.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const errCode = error?.response?.status as number;

      if (errCode === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        return await baseApi(originalRequest);
      }

      if (error?.response?.data?.message === "INVALID_TOKEN") {
        document.location.href = "/login";

        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return baseApi;
};
