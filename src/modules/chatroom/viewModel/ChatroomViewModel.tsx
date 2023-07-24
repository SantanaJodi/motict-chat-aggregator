import { ChatroomApi } from "@/src/components/organism/chatroom/chatroom/api/ChatroomApi";
import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const chatroomApi = ChatroomApi();

export const ChatroomViewModel = () => {
  const [selectedChat, setSelectedChat] = useState<
    IChatroomDetail | undefined
  >();
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: conversationDetail, isFetching: isFetchingConversationDetail } =
    useQuery(["getConversationDetail", selectedChat?.conversation_id], {
      queryFn: ({ queryKey }) => {
        return chatroomApi.GetConversationDetail(
          // @ts-ignore
          queryKey[1]
        );
      },

      enabled: !!selectedChat?.conversation_id,
    });

  return {
    selectedChat,
    setSelectedChat,
    isExpanded,
    setIsExpanded,
    conversationDetail,
    isFetchingConversationDetail,
  };
};
