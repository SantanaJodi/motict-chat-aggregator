import { useMemo, useState } from "react";
import { IChatroomDetail } from "../../messages/types/MessagesTypes";
import { useInfiniteQuery } from "react-query";
import { ChatroomApi } from "@/src/modules/chatroom/api/ChatroomApi";

export interface IChatroomViewModel {
  selectedChat?: IChatroomDetail;
}

const chatroomApi = ChatroomApi();

export const ChatroomViewModel = ({ selectedChat }: IChatroomViewModel) => {
  const { isFetching, data, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: [selectedChat?.conversation_id],
      queryFn: ({ pageParam = 1, queryKey }) => {
        // @ts-ignore
        return chatroomApi.GetConversationChatList(queryKey[0], {
          page: pageParam,
          page_size: 10,
        });
      },
      enabled: !!selectedChat?.conversation_id,
    });

  const chatroomDetails = useMemo(() => {
    return data?.pages.map((t) => t.data)[0] || {};
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
