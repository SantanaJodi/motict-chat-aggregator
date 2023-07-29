"use client";

import React, { PropsWithChildren } from "react";

import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import { toast } from "react-hot-toast";
import { UseMutateAsyncFunction, useMutation, useQuery } from "react-query";
import { useImmer } from "use-immer";
import { ChatroomApi } from "../api/ChatroomApi";
import { IConversationDetail } from "../types/ChatroomTypes";

const ChatroomContext = React.createContext<ChatroomContextProps>({} as any);

interface IState {
  selectedChat?: IChatroomDetail;
  isExpanded: boolean;
  agentModal: boolean;
}

export const ChatroomContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [{ isExpanded, selectedChat, agentModal }, update] = useImmer<IState>({
    selectedChat: undefined,
    isExpanded: false,
    agentModal: false,
  });

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
        // toast.success("Notes Updated");
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

  const { mutateAsync: setResolve } = useMutation(
    ["setNotesFn", selectedChat?.conversation_id],

    {
      onSuccess: () => {
        toast.success("Chatroom Resolved");
        refetch();
      },
      mutationFn: () => {
        // @ts-ignore
        return ChatroomApi().SetResolve(selectedChat?.conversation_id);
      },
    }
  );

  const { mutateAsync: setRead } = useMutation(
    ["setRead", selectedChat?.conversation_id],

    {
      onSuccess: () => {
        toast.success("Data successfully resolved.");
        refetch();
      },
      mutationFn: (conversation_id: number) => {
        // @ts-ignore
        return ChatroomApi().SetRead(conversation_id);
      },
    }
  );

  const { mutateAsync: setAgent } = useMutation(
    ["setAgent", selectedChat?.conversation_id],

    {
      onSuccess: () => {
        toast.success("Agent Assigned");
        refetch();
      },
      mutationFn: (agent_id: number) => {
        // @ts-ignore
        return ChatroomApi().SetAgent(selectedChat?.conversation_id, {
          agent_id,
        });
      },
    }
  );

  const { mutateAsync: setTags } = useMutation(
    ["setTags", selectedChat?.conversation_id],

    {
      onSuccess: () => {
        toast.success("Tags Assigned");
        refetch();
      },
      mutationFn: (tag_ids: number[]) => {
        // @ts-ignore
        return ChatroomApi().SetTags(selectedChat?.conversation_id, {
          tag_ids,
        });
      },
    }
  );

  const setIsExpanded = (v: boolean) => {
    update((t) => {
      t.isExpanded = v;
    });
  };

  const setSelectedChat = async (v?: IChatroomDetail) => {
    if (v && v.unread_counter > 0) {
      await setRead(v.conversation_id as number);
    }

    update((t) => {
      t.selectedChat = v;
    });
  };

  const setAgentModal = (v: boolean) => {
    update((t) => {
      t.agentModal = v;
    });
  };

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
        setResolve,
        agentModal,
        setAgentModal,
        setAgent,
        setTags,
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
  agentModal?: boolean;
  setIsExpanded: (v: boolean) => void;
  setAgentModal: (v: boolean) => void;
  conversationDetail?: IConversationDetail;
  isFetchingConversationDetail: boolean;
  setNotes: UseMutateAsyncFunction<
    IConversationDetail,
    unknown,
    string,
    unknown
  >;
  setResolve: UseMutateAsyncFunction<
    IConversationDetail,
    unknown,
    void,
    unknown
  >;
  setAgent: UseMutateAsyncFunction<any, unknown, number, unknown>;
  setTags: UseMutateAsyncFunction<any, unknown, number[], unknown>;
}
