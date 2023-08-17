export enum AgentStatusEnum {
  OFFLINE = 1,
  ONLINE = 2,
}

export enum UserTypeEnum {
  ADMIN = 1,
  AGENT = 2,
  CUSTOMER = 3,
}

export interface IListOfAgents {
  id: number;
  name: string;
  status: AgentStatusEnum;
  lastLogin: string;
  conversation: number;
}

export interface IMau {
  id: number;
  user_id: string;
  last_active: string;
  username: string;
  type: UserTypeEnum;
}

export interface IReportGeneral {
  total_conversation: number;
  total_unserved_conversation: number;
  total_served_conversation: number;
  total_resolved_conversataion: number;
  list_of_agents: IListOfAgents[];
  agent_first_response_time: number;
  agent_and_supervisor: number;
  monthly_active_user: number;
  list_mau: IMau[];
}
