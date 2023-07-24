"use client";

import React, { PropsWithChildren, useState } from "react";

import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import { UseMutateAsyncFunction, useMutation, useQuery } from "react-query";
import { ChatroomApi } from "../api/ChatroomApi";
import { IConversationDetail } from "../types/ChatroomTypes";
import { useImmer } from "use-immer";
import { toast } from "react-hot-toast";

const ChatroomContext = React.createContext<ChatroomContextProps>({} as any);

export const ChatroomContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [{ isExpanded, selectedChat }, update] = useImmer<{
    selectedChat?: IChatroomDetail;
    isExpanded: boolean;
  }>({
    selectedChat: undefined,
    isExpanded: false,
  });

  const setIsExpanded = (v: boolean) => {
    update((t) => {
      t.isExpanded = v;
    });
  };

  const setSelectedChat = (v?: IChatroomDetail) => {
    update((t) => {
      t.selectedChat = v;
    });
  };
  const {
    data: conversationDetail,
    isFetching: isFetchingConversationDetail,
    refetch,
  } = useQuery(["getConversationDetail", selectedChat?.conversation_id], {
    queryFn: ({ queryKey }) => {
      return ChatroomApi().GetConversationDetail(
        // @ts-ignore
        queryKey[1]
      );
    },

    enabled: !!selectedChat?.conversation_id,
  });

  const { mutateAsync: setNotes } = useMutation(
    ["setNotesFn", selectedChat?.conversation_id],

    {
      onSuccess: () => {
        toast.success("Data successfully updated.");
        refetch();
      },
      mutationFn: (notes: string) => {
        // @ts-ignore
        return ChatroomApi().SetNotes(selectedChat?.conversation_id, {
          notes: notes,
        });
      },
    }
  );

  return (
    <ChatroomContext.Provider
      value={{
        setIsExpanded,
        isExpanded,
        selectedChat,
        setSelectedChat,
        isFetchingConversationDetail,
        conversationDetail,
        setNotes,
      }}
    >
      {children}
    </ChatroomContext.Provider>
  );
};

export const useChatroomContext = () => React.useContext(ChatroomContext);

export interface ChatroomContextProps {
  selectedChat?: IChatroomDetail;
  setSelectedChat: (_v?: IChatroomDetail) => void;
  isExpanded?: boolean;
  setIsExpanded: (v: boolean) => void;
  conversationDetail?: IConversationDetail;
  isFetchingConversationDetail: boolean;
  setNotes: UseMutateAsyncFunction<
    IConversationDetail,
    unknown,
    string,
    unknown
  >;
}
