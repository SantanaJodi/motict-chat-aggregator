import { PaginateResponseDTO } from "@/src/types/common-types";

export interface IHeaderMessages {
  conversation_id: number;
  conversation_status: string;
  sender: ISenderHeaderMessage;
}

export interface ISenderHeaderMessage {
  from_user_photo: null;
  from_user_name: string;
  platform: string;
  whatsapp: IHeaderMessageWhatsapp;
}

export interface IHeaderMessageWhatsapp {
  whatsapp_id: string;
}

export interface ChatroomPaginateResponse
  extends PaginateResponseDTO<IMessagesDataDate> {
  header: IHeaderMessages;
}

export type IMessagesDataDate = {
  [key: string]: IMessagesData[];
};

export interface IMessagesData {
  id: number;
  from_user_name: string;
  is_agent: boolean;
  text: string;
  send_time: Date;
  status: string;
  media_url?: string;
}
