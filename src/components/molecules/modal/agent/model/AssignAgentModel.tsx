import { baseAxios } from "@/src/helper/api-helper";
import useDebounce from "@/src/hooks/useDebounce";
import { useChatroomContext } from "@/src/modules/chatroom/context/ChatroomContext";
import { GlobalResData } from "@/src/types/common-types";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";
import { IAgent } from "../types/agentType";

interface AssignAgentModalProps {
  defaultValue?: IAgent;
}

interface IState {
  agent?: IAgent;
  search: string;
}

const api = baseAxios();

const AssignAgentModel = ({ defaultValue }: AssignAgentModalProps) => {
  const [{ agent, search }, update] = useImmer<IState>({
    agent: defaultValue,
    search: "",
  });
  const { setAgent: setAgentApi, agentModal } = useChatroomContext();

  const debouncedSearch = useDebounce(search, 500);

  const {
    data: agents,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [debouncedSearch],
    queryFn: async ({ queryKey }) => {
      const res = await api.get<
        any,
        AxiosResponse<GlobalResData<{ data: IAgent[] }>>
      >("api/agent/", { params: { search: queryKey[0] } });

      return res.data.data.data;
    },
    enabled: !!agentModal,
  });

  const setSearch = (val: string) => {
    update((s) => {
      s.search = val;
    });
  };

  const setAgent = (val: IAgent) => {
    update((s) => {
      s.agent = val;
    });
  };

  const onAssignAgent = async () => {
    if (agent) {
      await setAgentApi(agent.agent_id);
    }
  };

  return {
    agent,
    agents,
    search,
    isLoading,
    isError,
    setSearch,
    setAgent,
    onAssignAgent,
  };
};

export default AssignAgentModel;
