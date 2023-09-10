"use client";

import React, { PropsWithChildren, useMemo } from "react";

import { IChatroomDetail } from "@/src/components/organism/chatroom/messages/types/MessagesTypes";
import { toast } from "react-hot-toast";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseMutateAsyncFunction,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { useImmer } from "use-immer";
import { ChatroomApi } from "../api/ChatroomApi";
import {
  IConversationDetail,
  ISendMessageRequest,
} from "../types/ChatroomTypes";
import {
  ChatroomPaginateResponse,
  IHeaderMessages,
  IMessagesDataDate,
} from "@/src/components/organism/chatroom/chatroom/types/ChatroomTypes";

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

  const {
    isLoading: isLoadingMessages,
    data: messages,
    fetchNextPage: fetchNextPageMessages,
    hasNextPage: hasNextPageMessages,
    refetch: refetchMessages,
  } = useInfiniteQuery({
    queryKey: [selectedChat?.conversation_id],
    queryFn: ({ pageParam = 1, queryKey }) => {
      // @ts-ignore
      return ChatroomApi().GetConversationChatList(queryKey[0], {
        page: pageParam,
        page_size: 10,
      });
    },
    enabled: !!selectedChat?.conversation_id,
    getNextPageParam: (lastPage) => {
      if (lastPage.has_next) {
        const urlString = lastPage.next;

        const pagePattern = /page=(\d+)/;
        const match = urlString.match(pagePattern);

        if (match && match.length > 1) {
          const pageValue = match[1];
          return Number(pageValue);
        } else {
          return undefined;
        }
      }

      return undefined;
    },
  });

  const chatroomDetails = useMemo(() => {
    const modifyChat: IMessagesDataDate = {};

    if (messages?.pages && messages?.pages.map((t) => t.data).length > 0) {
      const chats = messages.pages.map((t) => t.data);

      for (let val of chats) {
        const props = Object.getOwnPropertyNames(val);
        const items = Object.values(val);

        if (!modifyChat[props[0] as any]) {
          Object.assign(modifyChat, val);
        } else {
          modifyChat[props[0]] = [...items[0], ...modifyChat[props[0]]];
        }
      }
    }

    return modifyChat;
  }, [messages]);

  const messageHeader = useMemo(() => {
    return messages?.pages?.map((t) => t.header)[0];
  }, [messages]);

  const { mutateAsync: setNotes, isLoading: isLoadingNotes } = useMutation(
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
      onSuccess: async () => {
        toast.success("Chatroom Resolved");
        await refetch();
      },
      mutationFn: () => {
        // @ts-ignore
        return ChatroomApi().SetResolve(selectedChat?.conversation_id);
      },
    }
  );

  const { mutateAsync: sendMessage } = useMutation(
    ["sendMessage", selectedChat?.conversation_id],

    {
      onSuccess: async () => {
        await refetchMessages();
        await refetch();
      },
      mutationFn: (data: ISendMessageRequest) => {
        // @ts-ignore
        return ChatroomApi().SendMessage(selectedChat?.conversation_id, data);
      },
    }
  );
  const { mutateAsync: setRead } = useMutation(
    ["setRead", selectedChat?.conversation_id],

    {
      onSuccess: async () => {
        await refetch();
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
        isLoadingNotes,
        chatroomDetails,
        fetchNextPageMessages,
        isLoadingMessages,
        hasNextPageMessages,
        messageHeader,
        refetchMessages,
        sendMessage,
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
  isLoadingNotes: boolean;
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
  isLoadingMessages: boolean;
  chatroomDetails: IMessagesDataDate;
  fetchNextPageMessages: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPageMessages?: boolean;
  messageHeader?: IHeaderMessages;
  refetchMessages: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<InfiniteData<ChatroomPaginateResponse>, unknown>
  >;
  sendMessage: UseMutateAsyncFunction<
    any,
    unknown,
    ISendMessageRequest,
    unknown
  >;
}
