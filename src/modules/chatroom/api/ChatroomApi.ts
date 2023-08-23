import { baseAxios } from "@/src/helper/api-helper";
import { GlobalResData } from "@/src/types/common-types";
import { AxiosResponse } from "axios";

import { ChatroomPaginateResponse } from "@/src/components/organism/chatroom/chatroom/types/ChatroomTypes";
import { IPaginateMessageReq } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import * as ChatroomTypes from "@/src/modules/chatroom/types/ChatroomTypes";
import { ISendMessageRequest } from "@/src/modules/chatroom/types/ChatroomTypes";

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
      AxiosResponse<GlobalResData<ChatroomTypes.IConversationDetail>>
    >(`api/conversations/${id}`);

    return res?.data?.data;
  };

  const SetNotes = async (id: string, body: { notes: string }) => {
    const res = await api.post<
      any,
      AxiosResponse<GlobalResData<ChatroomTypes.IConversationDetail>>
    >(`api/conversations/${id}/notes`, body);

    return res?.data?.data;
  };

  const SetResolve = async (id: string, body: { notes: string }) => {
    const res = await api.post<
      any,
      AxiosResponse<GlobalResData<ChatroomTypes.IConversationDetail>>
    >(`api/conversations/${id}/resolve`, body);

    return res?.data?.data;
  };

  const SetRead = async (id: number) => {
    const res = await api.post<
      any,
      AxiosResponse<GlobalResData<ChatroomTypes.IConversationDetail>>
    >(`api/conversations/${id}/read`);

    return res?.data?.data;
  };

  const SetAgent = async (id: number, body: { agent_id: number }) => {
    const res = await api.post<any, AxiosResponse<GlobalResData<any>>>(
      `api/conversations/${id}/assign`,
      body
    );

    return res?.data?.data;
  };

  const SetTags = async (id: number, body: { tag_ids: number[] }) => {
    const res = await api.post<any, AxiosResponse<GlobalResData<any>>>(
      `api/conversations/${id}/assign`,
      body
    );

    return res?.data?.data;
  };

  const SendMessage = async (id: number, body: ISendMessageRequest) => {
    const res = await api.post<any, AxiosResponse<GlobalResData<any>>>(
      `api/conversations/${id}/messages`,
      body
    );

    return res?.data?.data;
  };

  return {
    GetConversationDetail,
    GetConversationChatList,
    SetNotes,
    SetResolve,
    SetRead,
    SetAgent,
    SetTags,
    SendMessage,
  };
};
