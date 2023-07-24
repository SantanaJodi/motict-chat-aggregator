import { baseAxios } from "@/src/helper/api-helper";
import { GlobalResData } from "@/src/types/common-types";
import { AxiosResponse } from "axios";
import { IConversationDetail } from "../types/ChatroomTypes";

export const ChatroomApi = () => {
  const api = baseAxios();

  const GetConversationDetail = async (id: string) => {
    const res = await api.get<
      any,
      AxiosResponse<GlobalResData<IConversationDetail>>
    >(`api/conversations/${id}`);

    return res.data.data;
  };

  return { GetConversationDetail };
};
