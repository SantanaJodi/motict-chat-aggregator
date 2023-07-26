import axios from "axios";

export const baseAxios = () => {
  const baseApi = axios.create({
    timeout: 1000,
    timeoutErrorMessage: "Time out!",
  });

  baseApi.interceptors.response.use(
    (response) => {
      return response;
    }
    // async (error) => {
    //   const originalRequest = error.config;
    //   const errCode = error?.response?.status as number;

    //   if (errCode === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;

    //     return await baseApi(originalRequest);
    //   }

    //   if (error?.response?.data?.message === "INVALID_TOKEN") {
    //     document.location.href = "/login";

    //     return Promise.reject(error);
    //   }
    //   return Promise.reject(error);
    // }
  );

  return baseApi;
};
