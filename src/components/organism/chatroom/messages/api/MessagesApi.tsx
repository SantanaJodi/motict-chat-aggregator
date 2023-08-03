import { baseAxios } from "@/src/helper/api-helper";
import { GlobalResData, PaginateResponseDTO } from "@/src/types/common-types";
import { AxiosResponse } from "axios";
import { IPaginateMessageReq, IChatroomDetail } from "../types/MessagesTypes";

export const MessagesApi = () => {
  const api = baseAxios();

  const GetMessages = async (params: IPaginateMessageReq) => {
    const res = await api.get<
      any,
      AxiosResponse<GlobalResData<PaginateResponseDTO<IChatroomDetail[]>>>
    >("api/conversations", { params });

    return res?.data?.data;
  };

  const GetConversationDetail = async (id: string) => {
    const res = await api.get(`api/conversations/${id}`);

    return;
  };

  return { GetMessages, GetConversationDetail };
};
