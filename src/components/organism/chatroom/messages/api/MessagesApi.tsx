import { baseAxios } from "@/src/helper/api-helper";
import { GlobalResData, PaginateResponseDTO } from "@/src/types/common-types";
import { AxiosResponse } from "axios";
import { IPaginateMessageReq, MessagesDTO } from "../types/MessagesTypes";

export const MessagesApi = () => {
  const api = baseAxios();

  const GetMessages = async (params: IPaginateMessageReq) => {
    const res = await api.get<
      any,
      AxiosResponse<GlobalResData<PaginateResponseDTO<MessagesDTO[]>>>
    >("api/conversations", { params });

    return res?.data?.data;
  };

  return { GetMessages };
};
