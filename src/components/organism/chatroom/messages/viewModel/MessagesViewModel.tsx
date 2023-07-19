"use client";
import { GlobalResData, PaginateResponseDTO } from "@/src/types/common-types";
import { IPaginateMessageReq, MessagesDTO } from "../types/MessagesTypes";
import React, { useMemo, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { MessagesApi } from "../api/MessagesApi";
import { flatten } from "lodash";

export interface MessageViewModelProps {}

const messagesApi = MessagesApi();
// @ts-ignore
export const MessagesViewModel = () => {
  const [chatroom, setChatroom] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [msgStatus, setMsgStatus] = useState("All");
  const [noResult, setNoResult] = useState(false);
  const [filter, setFilter] = useState<Partial<IPaginateMessageReq>>({
    search: "",
    status: undefined,
    assignee: undefined,
  });

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [filter?.search, filter?.assignee, filter?.status],
    queryFn: ({ pageParam = 1, queryKey }) => {
      return messagesApi.GetMessages({
        assignee: queryKey[1] as number,
        page: pageParam,
        page_size: 10,
        search: queryKey[0] as string,
        status: queryKey[2] as number,
      });
    },
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

  const messages = useMemo(() => {
    return flatten(data?.pages.map((t) => t.data));
  }, [data]);

  const handleChangeStatus = (value: string) => {
    setMsgStatus(value);
  };

  const setSearch = (val: string) => {
    setFilter({ ...filter, search: val });
  };

  return {
    search: filter?.search,
    setSearch,
    chatroom,
    setChatroom,
    isLoading,
    setIsLoading,
    error,
    setError,
    msgStatus: filter?.status,
    setMsgStatus,
    noResult,
    setNoResult,
    data,
    handleChangeStatus,
    messages,
    fetchNextPage,
    hasNextPage,
  };
};
