import { baseAxios } from "@/src/helper/api-helper";
import { GlobalResData } from "@/src/types/common-types";
import { AxiosResponse } from "axios";

import { ChatroomPaginateResponse } from "../types/ChatroomTypes";
import { IPaginateMessageReq } from "../../messages/types/MessagesTypes";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";

export const ChatroomApi = () => {
  const api = baseAxios();

  const GetConversationChatList = async (
    id: string,
    params: IPaginateMessageReq
  ) => {
    const res = await api.get<
      any,
      AxiosResponse<GlobalResData<ChatroomPaginateResponse>>
    >(`api/conversations/${id}/messages`, { params });

    return res?.data.data;
  };

  const GetConversationDetail = async (id: string) => {
    const res = await api.get<
      any,
      AxiosResponse<GlobalResData<IConversationDetail>>
    >(`api/conversations/${id}`);

    return res?.data?.data;
  };

  return { GetConversationDetail, GetConversationChatList };
};
