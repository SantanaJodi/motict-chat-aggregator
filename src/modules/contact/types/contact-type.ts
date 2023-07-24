import { ISelectOpt } from "@/src/types";

export enum ChannelEnum {
  WhatsApp,
  WhatsApp_Official,
}

export enum AgentAssignmentEnum {
  WAITING,
  ASSIGNED_TO_ME,
  ASSIGNED,
  CAMPAIGN,
  RESOLVED,
}
export interface IContact {
  name: string;
  email?: string;
  address?: string;
  phone_number: string;
  industry_id?: number;
  //   TODO APIN: some stuff below doesn't exist in BE response
  channel: string;
  last_activity: string; // this type maybe a Date
}

export interface IContactCreate {
  name: string;
  channel: ISelectOpt;
  account: ISelectOpt;
  phoneNumber: string;
}

export interface IAssociatedAgents {
  name: string;
  email: string;
  channel: ChannelEnum;
  status: AgentAssignmentEnum;
  date: string;
}
