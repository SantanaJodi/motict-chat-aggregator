import { useImmer } from "use-immer";

interface IState {
  agent: boolean;
}

const AgentManagementComponentModel = () => {
  const [{ agent }, update] = useImmer<IState>({
    agent: false,
  });

  return {
    agent,
  };
};

export default AgentManagementComponentModel;
