import { ChatroomApi } from "@/src/modules/chatroom/api/ChatroomApi";
import { GlobalResData } from "@/src/types/common-types";
import { useMutation, useQuery } from "react-query";
import { ITag } from "./types/TagTypes";
import { AxiosResponse } from "axios";
import { baseAxios } from "@/src/helper/api-helper";

const api = baseAxios();

export const TagViewModel = () => {
  const { data } = useQuery({
    queryFn: async () => {
      const res = await api.get<
        any,
        AxiosResponse<GlobalResData<{ data: ITag[] }>>
      >("api/tags");

      return res.data?.data?.data || [];
    },
  });
  return { tags: data };
};
