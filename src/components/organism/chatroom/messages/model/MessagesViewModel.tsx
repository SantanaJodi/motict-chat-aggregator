"use client";
import useDebounce from "@/src/hooks/useDebounce";
import { flatten } from "lodash";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import { useImmer } from "use-immer";
import { MessagesApi } from "../api/MessagesApi";
import { IPaginateMessageReq, StatusEnum } from "../types/MessagesTypes";

export interface MessageViewModelProps {}

const messagesApi = MessagesApi();

export const MessagesViewModel = () => {
  const [{ assignee, search, status }, update] = useImmer<
    Partial<IPaginateMessageReq>
  >({
    search: "",
    status: StatusEnum.ALL,
    assignee: "",
  });

  const debouncedSearch = useDebounce(search || "", 500);

  const { data, fetchNextPage, hasNextPage, error, isLoading, refetch } =
    useInfiniteQuery({
      queryKey: [debouncedSearch, assignee, status],
      queryFn: ({ pageParam = 1, queryKey }) => {
        return messagesApi.GetMessages({
          assignee: queryKey[1] as string,
          page: pageParam,
          page_size: 10,
          search: queryKey[0],
          status:
            queryKey[2] === StatusEnum.ALL
              ? undefined
              : (queryKey[2] as StatusEnum),
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

  const setSearch = (val: string) => {
    update((s) => {
      s.search = val;
    });
  };

  const setMsgStatus = (status: StatusEnum) => {
    update((s) => {
      s.status = status;
    });
  };

  return {
    error,
    search,
    isLoading,
    messages,
    hasNextPage,
    msgStatus: status,
    setSearch,
    setMsgStatus,
    fetchNextPage,
    refetch,
  };
};
