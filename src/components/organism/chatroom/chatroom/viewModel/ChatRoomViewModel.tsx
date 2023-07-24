import { useEffect, useMemo, useState } from "react";
import { IChatroomDetail } from "../../messages/types/MessagesTypes";
import { DUMMY_CHAT } from "../../dummy";
import { useInfiniteQuery } from "react-query";
import { ChatroomApi } from "../api/ChatroomApi";
import { flatten } from "lodash";
import { IConversationDetail } from "@/src/modules/chatroom/types/ChatroomTypes";

export interface IChatroomViewModel {
  chatroomDetail?: IConversationDetail;
}

const chatroomApi = ChatroomApi();

export const ChatroomViewModel = ({ chatroomDetail }: IChatroomViewModel) => {
  const { isFetching, data, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryFn: ({ pageParam = 1 }) => {
        const conversation_id = chatroomDetail?.conversation_id;
        // @ts-ignore
        return chatroomApi.GetMessages(conversation_id, {
          page: pageParam,
          page_size: 10,
        });
      },
      enabled: !!chatroomDetail?.conversation_id,
    });

  useEffect(() => {
    if (chatroomDetail?.conversation_id) {
      refetch();
    }
  }, [chatroomDetail?.conversation_id, refetch]);

  const chatroomDetails = useMemo(() => {
    return data?.pages.map((t) => t.data);
  }, [data]);

  const messageHeader = useMemo(() => {
    return data?.pages.map((t) => t.header)[0];
  }, [data]);

  return {
    isFetching,
    chatroomDetails,
    fetchNextPage,
    hasNextPage,
    messageHeader,
  };
};
