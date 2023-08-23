import { PaginateRequestDTO } from "@/src/types/common-types";

export interface IChatroomDetail {
  conversation_id: number;
  from_user_photo: null;
  from_user_name: string;
  assigned_agent_id: number | null;
  last_message: LastMessageDTO;
  platform: string;
  status: string;
  tags: any[];
  unread_counter: number;
  is_expired: boolean;
  expire_at: Date;
  // TODO: user id
  // TODO: field kurang replied : boolean
}

export interface LastMessageDTO {
  type: string;
  text: string;
  time: Date;
}

export interface IPaginateMessageReq extends PaginateRequestDTO {
  search?: string;
  status?: StatusEnum;
  assignee?: string;
}

export enum StatusEnum {
  ALL = "all",
  WAITING = "waiting",
  ASSIGNED_TO_ME = "assigned_to_me",
  ASSIGNED = "assigned",
  RESOLVED = "resolved",
  EXPIRED = "expired",
}
