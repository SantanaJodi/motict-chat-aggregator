import { PaginateRequestDTO } from "@/src/types/common-types";

export interface MessagesDTO {
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
}

export interface LastMessageDTO {
  type: string;
  text: string;
  time: Date;
}

export interface IPaginateMessageReq extends PaginateRequestDTO {
  search: string;
  status?: number;
  assignee?: number;
}
