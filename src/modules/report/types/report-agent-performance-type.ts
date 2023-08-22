export interface IAgentTotalConversation {
  agent: string;
  total: number;
}

export interface IDivisionTotalConversation {
  division: string;
  total: number;
}

export interface IAgentDurationConversation {
  agent: string;
  duration: number;
}

export interface IReportAgentPerformance {
  new_conversation_per_agent: IAgentTotalConversation[];
  resolved_conversation_per_agent: IAgentTotalConversation[];
  agent_division: IDivisionTotalConversation[];
  average_resolve_time_per_agent: IAgentDurationConversation[];
  average_resolve_time_per_agent_week: IAgentDurationConversation[];
  average_first_response_time_per_agent: IAgentDurationConversation[];
}
