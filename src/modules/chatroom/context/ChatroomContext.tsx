"use client";

import React, { PropsWithChildren, useState } from "react";

import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import { useQuery } from "react-query";
import { ChatroomApi } from "../api/ChatroomApi";
import { IConversationDetail } from "../types/ChatroomTypes";

const ChatroomContext = React.createContext<ChatroomContextProps>({} as any);

export const ChatroomContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [selectedChat, setSelectedChat] = useState<
    IChatroomDetail | undefined
  >();
  const [isExpanded, setIsExpanded] = useState(false);

  const { data: conversationDetail, isFetching: isFetchingConversationDetail } =
    useQuery(["getConversationDetail", selectedChat?.conversation_id], {
      queryFn: ({ queryKey }) => {
        return ChatroomApi().GetConversationDetail(
          // @ts-ignore
          queryKey[1]
        );
      },

      enabled: !!selectedChat?.conversation_id,
    });

  return (
    <ChatroomContext.Provider
      value={{
        setIsExpanded,
        isExpanded,
        selectedChat,
        setSelectedChat,
        isFetchingConversationDetail,
        conversationDetail,
      }}
    >
      {children}
    </ChatroomContext.Provider>
  );
};

export const useChatroomContext = () => React.useContext(ChatroomContext);

export interface ChatroomContextProps {
  selectedChat?: IChatroomDetail;
  setSelectedChat: React.Dispatch<
    React.SetStateAction<IChatroomDetail | undefined>
  >;
  isExpanded?: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  conversationDetail?: IConversationDetail;
  isFetchingConversationDetail: boolean;
}
