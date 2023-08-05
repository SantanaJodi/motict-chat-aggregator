import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useImmer } from "use-immer";
import { IAgent } from "../../types/agent-types";
import dummyAgent from "../agent/dummy-agent.json";

interface IState {
  showPassword: boolean;
}

interface CreateUpdateAgentViewModelProps {
  agentId?: string | undefined;
}

const CreateUpdateViewModel = ({
  agentId,
}: CreateUpdateAgentViewModelProps) => {
  const [{ showPassword }, update] = useImmer<IState>({
    showPassword: false,
  });

  const formModule = useForm<IAgent>({
    defaultValues: {},
  });

  const { isLoading } = useQuery({
    queryKey: [agentId],
    queryFn: ({ queryKey }) => {
      if (queryKey[0]) {
        const f = dummyAgent.data.filter((item) => item.id === queryKey[0]);
        if (f.length) {
          formModule.reset(f[0]);
        }
      }
    },
  });

  const onSave = (val: IAgent) => {
    toast.success("Agent Saved");
  };

  const handlePassword = (val: boolean) => {
    update((s) => {
      s.showPassword = val;
    });
  };

  return {
    isLoading,
    formModule,
    showPassword,
    onSave,
    handlePassword,
  };
};

export default CreateUpdateViewModel;
